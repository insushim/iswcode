import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs, addDoc, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuthStore } from '../stores/authStore';

interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  classId: string;
  date: string;
  status: 'present' | 'late' | 'absent' | 'excused';
  loginTime?: string;
  logoutTime?: string;
  totalActiveMinutes: number;
}

interface DailyStats {
  date: string;
  present: number;
  late: number;
  absent: number;
  excused: number;
  total: number;
}

const AttendanceSystem: React.FC = () => {
  const { authUser } = useAuthStore();
  const currentUser = authUser ? { uid: authUser.uid, email: authUser.email } : null;
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [stats, setStats] = useState<DailyStats | null>(null);

  useEffect(() => {
    if (!currentUser) return;
    loadAttendanceRecords();
  }, [currentUser, selectedDate, view]);

  useEffect(() => {
    if (!currentUser) return;
    checkAndRecordAttendance();
  }, [currentUser]);

  const checkAndRecordAttendance = async () => {
    if (!currentUser) return;

    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const loginTime = now.toLocaleTimeString('ko-KR', { hour12: false });

    try {
      // Check if already recorded today
      const q = query(
        collection(db, 'attendance'),
        where('studentId', '==', currentUser.uid),
        where('date', '==', today)
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        // Determine status based on time
        const hour = now.getHours();
        const minute = now.getMinutes();
        let status: 'present' | 'late' = 'present';

        // Late if after 9:00 AM
        if (hour > 9 || (hour === 9 && minute > 0)) {
          status = 'late';
        }

        // Get student name
        const userDoc = await getDocs(query(collection(db, 'users'), where('uid', '==', currentUser.uid)));
        const userName = userDoc.empty ? currentUser.email?.split('@')[0] || 'Unknown' : userDoc.docs[0].data().name;

        await addDoc(collection(db, 'attendance'), {
          studentId: currentUser.uid,
          studentName: userName,
          classId: 'default',
          date: today,
          status,
          loginTime,
          logoutTime: null,
          totalActiveMinutes: 0,
          timestamp: Timestamp.now()
        });

        console.log('Attendance recorded:', status);
      }
    } catch (error) {
      console.error('Error recording attendance:', error);
    }
  };

  const loadAttendanceRecords = async () => {
    if (!currentUser) return;

    setLoading(true);
    try {
      let startDate = selectedDate;
      let endDate = selectedDate;

      if (view === 'weekly') {
        const date = new Date(selectedDate);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Monday
        const monday = new Date(date.setDate(diff));
        startDate = monday.toISOString().split('T')[0];

        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        endDate = sunday.toISOString().split('T')[0];
      } else if (view === 'monthly') {
        const date = new Date(selectedDate);
        startDate = new Date(date.getFullYear(), date.getMonth(), 1).toISOString().split('T')[0];
        endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString().split('T')[0];
      }

      const isTeacher = currentUser.email?.includes('teacher') || currentUser.email?.includes('admin');

      let q;
      if (isTeacher) {
        // Teachers see all students
        q = query(
          collection(db, 'attendance'),
          where('date', '>=', startDate),
          where('date', '<=', endDate),
          orderBy('date', 'desc'),
          orderBy('loginTime', 'asc')
        );
      } else {
        // Students see only their records
        q = query(
          collection(db, 'attendance'),
          where('studentId', '==', currentUser.uid),
          where('date', '>=', startDate),
          where('date', '<=', endDate),
          orderBy('date', 'desc')
        );
      }

      const snapshot = await getDocs(q);
      const attendanceData: AttendanceRecord[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AttendanceRecord));

      setRecords(attendanceData);
      calculateStats(attendanceData);
    } catch (error) {
      console.error('Error loading attendance:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (data: AttendanceRecord[]) => {
    if (view === 'daily') {
      const dailyRecords = data.filter(r => r.date === selectedDate);
      const stats: DailyStats = {
        date: selectedDate,
        present: dailyRecords.filter(r => r.status === 'present').length,
        late: dailyRecords.filter(r => r.status === 'late').length,
        absent: dailyRecords.filter(r => r.status === 'absent').length,
        excused: dailyRecords.filter(r => r.status === 'excused').length,
        total: dailyRecords.length
      };
      setStats(stats);
    } else {
      const totalRecords = data.length;
      const stats: DailyStats = {
        date: selectedDate,
        present: data.filter(r => r.status === 'present').length,
        late: data.filter(r => r.status === 'late').length,
        absent: data.filter(r => r.status === 'absent').length,
        excused: data.filter(r => r.status === 'excused').length,
        total: totalRecords
      };
      setStats(stats);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'excused': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present': return '출석';
      case 'late': return '지각';
      case 'absent': return '결석';
      case 'excused': return '인정결석';
      default: return status;
    }
  };

  const getAttendanceRate = () => {
    if (!stats || stats.total === 0) return 0;
    return Math.round(((stats.present + stats.late) / stats.total) * 100);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">출석 관리</h1>

          {/* View Toggle */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setView('daily')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                view === 'daily'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              일일
            </button>
            <button
              onClick={() => setView('weekly')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                view === 'weekly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              주간
            </button>
            <button
              onClick={() => setView('monthly')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                view === 'monthly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              월간
            </button>
          </div>

          {/* Date Selector */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {view === 'daily' ? '날짜 선택' : view === 'weekly' ? '주 선택' : '월 선택'}
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Statistics */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-green-600 font-medium">출석</div>
                <div className="text-2xl font-bold text-green-700">{stats.present}</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-yellow-600 font-medium">지각</div>
                <div className="text-2xl font-bold text-yellow-700">{stats.late}</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-sm text-red-600 font-medium">결석</div>
                <div className="text-2xl font-bold text-red-700">{stats.absent}</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-blue-600 font-medium">인정결석</div>
                <div className="text-2xl font-bold text-blue-700">{stats.excused}</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm text-purple-600 font-medium">출석률</div>
                <div className="text-2xl font-bold text-purple-700">{getAttendanceRate()}%</div>
              </div>
            </div>
          )}
        </div>

        {/* Attendance Records */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">출석 기록</h2>
          </div>

          {records.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              출석 기록이 없습니다.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      날짜
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      학생명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      상태
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      로그인 시간
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      활동 시간
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {records.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.studentName || '알 수 없음'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(record.status)}`}>
                          {getStatusText(record.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.loginTime || '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.totalActiveMinutes > 0 ? `${record.totalActiveMinutes}분` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceSystem;

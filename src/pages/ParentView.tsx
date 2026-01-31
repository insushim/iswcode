import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { decodeShareCode } from '../utils/pdfGenerator';

interface SubjectGrade {
  unitId: string;
  unitName: string;
  score: number;
  grade: string;
  completedMissions: number;
  totalMissions: number;
  averageAccuracy: number;
}

interface GradeReport {
  studentId: string;
  studentName: string;
  period: string;
  subjects: SubjectGrade[];
  overallGrade: string;
  overallScore: number;
  teacherComment: string;
  attendanceRate: number;
  completionRate: number;
}

interface AttendanceRecord {
  id: string;
  date: string;
  status: 'present' | 'late' | 'absent' | 'excused';
  loginTime?: string;
}

interface ProgressData {
  unitName: string;
  completedMissions: number;
  totalMissions: number;
  percentage: number;
}

const ParentView: React.FC = () => {
  const { shareCode } = useParams<{ shareCode: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [gradeReport, setGradeReport] = useState<GradeReport | null>(null);
  const [recentAttendance, setRecentAttendance] = useState<AttendanceRecord[]>([]);
  const [progressData, setProgressData] = useState<ProgressData[]>([]);

  useEffect(() => {
    loadParentData();
  }, [shareCode]);

  const loadParentData = async () => {
    if (!shareCode) {
      setError('유효하지 않은 공유 링크입니다.');
      setLoading(false);
      return;
    }

    try {
      // Decode share code to get student ID
      const decoded = decodeShareCode(shareCode);
      if (!decoded) {
        setError('공유 코드를 해독할 수 없습니다.');
        setLoading(false);
        return;
      }

      const { studentId, period } = decoded;

      // Load student info
      const userQuery = query(collection(db, 'users'), where('uid', '==', studentId));
      const userSnapshot = await getDocs(userQuery);

      if (userSnapshot.empty) {
        setError('학생 정보를 찾을 수 없습니다.');
        setLoading(false);
        return;
      }

      const studentName = userSnapshot.docs[0].data().name || '알 수 없음';

      // Load progress data
      const progressQuery = query(
        collection(db, 'progress'),
        where('userId', '==', studentId)
      );
      const progressSnapshot = await getDocs(progressQuery);

      // Get all units
      const unitsSnapshot = await getDocs(collection(db, 'units'));
      const units = unitsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || data.title || 'Unknown Unit',
          ...data
        };
      });

      // Calculate grades per unit
      const subjectGrades: SubjectGrade[] = [];
      const progressDataArray: ProgressData[] = [];

      for (const unit of units) {
        const missionsQuery = query(
          collection(db, 'missions'),
          where('unitId', '==', unit.id)
        );
        const missionsSnapshot = await getDocs(missionsQuery);
        const totalMissions = missionsSnapshot.size;

        const completedMissions: any[] = [];
        progressSnapshot.docs.forEach(progressDoc => {
          const data = progressDoc.data();
          if (data.unitId === unit.id && data.completed) {
            completedMissions.push({
              score: data.score || 0,
              totalQuestions: data.totalQuestions || 0,
              correctAnswers: data.correctAnswers || 0
            });
          }
        });

        let totalQuestions = 0;
        let totalCorrect = 0;
        completedMissions.forEach(m => {
          totalQuestions += m.totalQuestions;
          totalCorrect += m.correctAnswers;
        });

        const averageAccuracy = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
        const completionRate = totalMissions > 0 ? (completedMissions.length / totalMissions) : 0;
        const score = Math.round((completionRate * 50) + (averageAccuracy * 0.5));

        let grade = 'F';
        if (score >= 90) grade = 'A';
        else if (score >= 80) grade = 'B';
        else if (score >= 70) grade = 'C';
        else if (score >= 60) grade = 'D';

        subjectGrades.push({
          unitId: unit.id,
          unitName: unit.name,
          score,
          grade,
          completedMissions: completedMissions.length,
          totalMissions,
          averageAccuracy: Math.round(averageAccuracy)
        });

        progressDataArray.push({
          unitName: unit.name,
          completedMissions: completedMissions.length,
          totalMissions,
          percentage: Math.round(completionRate * 100)
        });
      }

      // Calculate overall grade
      const totalScore = subjectGrades.reduce((sum, s) => sum + s.score, 0);
      const overallScore = subjectGrades.length > 0 ? Math.round(totalScore / subjectGrades.length) : 0;

      let overallGrade = 'F';
      if (overallScore >= 90) overallGrade = 'A';
      else if (overallScore >= 80) overallGrade = 'B';
      else if (overallScore >= 70) overallGrade = 'C';
      else if (overallScore >= 60) overallGrade = 'D';

      // Load attendance records (recent 30 days)
      const attendanceQuery = query(
        collection(db, 'attendance'),
        where('studentId', '==', studentId),
        orderBy('date', 'desc')
      );
      const attendanceSnapshot = await getDocs(attendanceQuery);
      const attendanceRecords: AttendanceRecord[] = attendanceSnapshot.docs
        .slice(0, 30)
        .map(doc => ({
          id: doc.id,
          date: doc.data().date,
          status: doc.data().status,
          loginTime: doc.data().loginTime
        }));

      setRecentAttendance(attendanceRecords);

      // Calculate attendance rate
      const totalDays = attendanceRecords.length;
      const presentDays = attendanceRecords.filter(r =>
        ['present', 'late'].includes(r.status)
      ).length;
      const attendanceRate = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;

      // Calculate completion rate
      const totalMissions = subjectGrades.reduce((sum, s) => sum + s.totalMissions, 0);
      const completedMissions = subjectGrades.reduce((sum, s) => sum + s.completedMissions, 0);
      const completionRate = totalMissions > 0 ? Math.round((completedMissions / totalMissions) * 100) : 0;

      const report: GradeReport = {
        studentId,
        studentName,
        period,
        subjects: subjectGrades,
        overallGrade,
        overallScore,
        teacherComment: '열심히 공부하고 있습니다. 계속 노력해주세요!',
        attendanceRate,
        completionRate
      };

      setGradeReport(report);
      setProgressData(progressDataArray);
      setLoading(false);

    } catch (error) {
      console.error('Error loading parent data:', error);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'text-green-600';
      case 'B': return 'text-blue-600';
      case 'C': return 'text-yellow-600';
      case 'D': return 'text-orange-600';
      case 'F': return 'text-red-600';
      default: return 'text-gray-600';
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'excused': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">학습 데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <div className="text-red-600 text-center mb-4">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-xl font-bold mb-2">오류</h2>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!gradeReport) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600">데이터를 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">학부모 학습 현황</h1>
              <p className="text-gray-600 mt-2">학생: {gradeReport.studentName}</p>
              <p className="text-gray-500 text-sm">기간: {gradeReport.period}</p>
            </div>
            <div className="text-center">
              <div className={`text-6xl font-bold ${getGradeColor(gradeReport.overallGrade)}`}>
                {gradeReport.overallGrade}
              </div>
              <div className="text-lg text-gray-600 mt-2">{gradeReport.overallScore}점</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm text-blue-600 font-medium">출석률</div>
              <div className="text-3xl font-bold text-blue-700">{gradeReport.attendanceRate}%</div>
              <div className="text-xs text-blue-600 mt-1">최근 30일 기준</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm text-green-600 font-medium">완료율</div>
              <div className="text-3xl font-bold text-green-700">{gradeReport.completionRate}%</div>
              <div className="text-xs text-green-600 mt-1">전체 미션 기준</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-sm text-purple-600 font-medium">평균 점수</div>
              <div className="text-3xl font-bold text-purple-700">{gradeReport.overallScore}점</div>
              <div className="text-xs text-purple-600 mt-1">100점 만점</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">학습 진도</h2>
            <div className="space-y-4">
              {progressData.map((data, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{data.unitName}</span>
                    <span className="text-gray-600">
                      {data.completedMissions}/{data.totalMissions} ({data.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Attendance */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">최근 출석 현황</h2>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {recentAttendance.map((record) => (
                <div key={record.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{record.date}</div>
                    {record.loginTime && (
                      <div className="text-xs text-gray-500">{record.loginTime}</div>
                    )}
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
                    {getStatusText(record.status)}
                  </span>
                </div>
              ))}
              {recentAttendance.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">출석 기록이 없습니다.</p>
              )}
            </div>
          </div>
        </div>

        {/* Subject Grades */}
        <div className="bg-white rounded-lg shadow-md mt-6 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">단원별 성적</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    단원명
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    진도
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    정확도
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    점수
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    등급
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {gradeReport.subjects.map((subject) => (
                  <tr key={subject.unitId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {subject.unitName}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      {subject.completedMissions}/{subject.totalMissions}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      {subject.averageAccuracy}%
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      {subject.score}점
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`text-xl font-bold ${getGradeColor(subject.grade)}`}>
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Teacher Comment */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">선생님 코멘트</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-gray-700">{gradeReport.teacherComment}</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>이 페이지는 읽기 전용입니다. 자녀의 학습 현황을 확인하실 수 있습니다.</p>
          <p className="mt-1">생성일: {new Date().toLocaleDateString('ko-KR')}</p>
        </div>
      </div>
    </div>
  );
};

export default ParentView;

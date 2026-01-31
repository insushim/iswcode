import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  BarChart3,
  AlertCircle,
  Award,
  Flame,
  BookOpen,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  ArrowLeft,
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { getClassStudents, getStudentProgressData } from '../services/authService';
import type { StudentProgress } from '../types';

// Demo 데이터 생성 함수
const generateDemoStudents = (): StudentProgress[] => {
  const names = [
    '김민준', '이서연', '박지호', '최유나', '정도윤',
    '강서우', '윤지민', '임채원', '한예준', '오서진',
    '신우진', '배수아', '권민서', '조현우', '송지우',
    '황시윤', '구하늘', '홍하린', '노예은', '서준혁'
  ];

  return names.map((name, idx) => {
    const level = Math.floor(Math.random() * 8) + 1;
    const totalMissions = 100 + Math.floor(Math.random() * 50);
    const completedMissions = Math.floor(Math.random() * totalMissions * 0.7);
    const streak = Math.floor(Math.random() * 30);
    const daysAgo = Math.floor(Math.random() * 7);
    const lastActiveDate = new Date();
    lastActiveDate.setDate(lastActiveDate.getDate() - daysAgo);

    return {
      studentId: `student-${idx}`,
      studentName: name,
      studentAvatar: '',
      level,
      totalExp: level * 1000 + Math.floor(Math.random() * 1000),
      completedMissions,
      totalMissions,
      streak,
      lastActiveDate: lastActiveDate.toISOString(),
      weeklyProgress: Math.floor(Math.random() * 15),
    };
  });
};

// 개념별 데이터 (데모)
interface ConceptData {
  concept: string;
  avgAccuracy: number;
  totalAttempts: number;
}

const demoConceptData: ConceptData[] = [
  { concept: '변수와 자료형', avgAccuracy: 87, totalAttempts: 145 },
  { concept: '조건문 (if/else)', avgAccuracy: 82, totalAttempts: 132 },
  { concept: '반복문 (for/while)', avgAccuracy: 68, totalAttempts: 98 },
  { concept: '함수 정의', avgAccuracy: 75, totalAttempts: 112 },
  { concept: '리스트와 배열', avgAccuracy: 71, totalAttempts: 89 },
  { concept: '문자열 처리', avgAccuracy: 91, totalAttempts: 156 },
  { concept: '딕셔너리', avgAccuracy: 63, totalAttempts: 67 },
];

// 주간 활동 데이터 (데모)
const generateWeeklyData = () => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  return days.map(day => ({
    day,
    count: Math.floor(Math.random() * 50) + 10,
  }));
};

// Stat Card Component
const StatCard = ({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  color,
}: {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: React.ElementType;
  color: 'blue' | 'emerald' | 'amber' | 'violet';
}) => {
  const colorThemes = {
    blue: {
      bg: 'from-blue-500 to-cyan-500',
      icon: 'bg-blue-500/20 text-blue-400',
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    },
    emerald: {
      bg: 'from-emerald-500 to-teal-500',
      icon: 'bg-emerald-500/20 text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    },
    amber: {
      bg: 'from-amber-500 to-orange-500',
      icon: 'bg-amber-500/20 text-amber-400',
      badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    },
    violet: {
      bg: 'from-violet-500 to-purple-500',
      icon: 'bg-violet-500/20 text-violet-400',
      badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    },
  };

  const theme = colorThemes[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-slate-600 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${theme.icon}`}>
          <Icon className="w-6 h-6" />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold border ${
            change >= 0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {change >= 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400">{title}</div>
      {changeLabel && <div className="text-xs text-slate-500 mt-1">{changeLabel}</div>}
    </motion.div>
  );
};

const TeacherAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const { authUser, classes } = useAuthStore();
  const [students, setStudents] = useState<StudentProgress[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'name' | 'level' | 'progress' | 'lastActive'>('progress');
  const [filterSlow, setFilterSlow] = useState(false);

  useEffect(() => {
    loadStudentData();
  }, [classes]);

  const loadStudentData = async () => {
    setIsLoading(true);

    // Demo 데이터 사용
    setTimeout(() => {
      setStudents(generateDemoStudents());
      setIsLoading(false);
    }, 500);

    // 실제 데이터 로딩 (주석 처리)
    /*
    if (classes.length > 0) {
      try {
        const classStudents = await getClassStudents(classes[0].id);
        const progressData = await Promise.all(
          classStudents.map(async (student) => {
            const progress = await getStudentProgressData(student.uid);
            return {
              studentId: student.uid,
              studentName: student.displayName,
              studentAvatar: student.photoURL || '',
              level: progress?.level || 1,
              totalExp: progress?.totalExp || 0,
              completedMissions: progress?.completedMissions?.length || 0,
              totalMissions: 100,
              streak: progress?.streak || 0,
              lastActiveDate: progress?.lastActiveDate || new Date().toISOString(),
              weeklyProgress: progress?.weeklyProgress || 0,
            };
          })
        );
        setStudents(progressData);
      } catch (error) {
        console.error('Failed to load student data:', error);
      }
    }
    */
  };

  // 통계 계산
  const stats = useMemo(() => {
    const totalStudents = students.length;
    const activeToday = students.filter(s => {
      const lastActive = new Date(s.lastActiveDate);
      const today = new Date();
      return lastActive.toDateString() === today.toDateString();
    }).length;

    const avgProgress = totalStudents > 0
      ? students.reduce((sum, s) => sum + (s.completedMissions / s.totalMissions) * 100, 0) / totalStudents
      : 0;

    const weeklyMissions = students.reduce((sum, s) => sum + s.weeklyProgress, 0);

    return {
      totalStudents,
      activeToday,
      avgProgress: Math.round(avgProgress),
      weeklyMissions,
    };
  }, [students]);

  // 학생 정렬
  const sortedStudents = useMemo(() => {
    let sorted = [...students];

    switch (sortBy) {
      case 'name':
        sorted.sort((a, b) => a.studentName.localeCompare(b.studentName));
        break;
      case 'level':
        sorted.sort((a, b) => b.level - a.level);
        break;
      case 'progress':
        sorted.sort((a, b) => {
          const progressA = (a.completedMissions / a.totalMissions) * 100;
          const progressB = (b.completedMissions / b.totalMissions) * 100;
          return progressB - progressA;
        });
        break;
      case 'lastActive':
        sorted.sort((a, b) => new Date(b.lastActiveDate).getTime() - new Date(a.lastActiveDate).getTime());
        break;
    }

    if (filterSlow) {
      sorted = sorted.filter(s => (s.completedMissions / s.totalMissions) * 100 < 50);
    }

    return sorted;
  }, [students, sortBy, filterSlow]);

  // 주간 데이터
  const weeklyData = useMemo(() => generateWeeklyData(), []);
  const maxWeeklyCount = Math.max(...weeklyData.map(d => d.count), 1);

  // 상위 미션
  const topMissions = useMemo(() => {
    return [
      { name: 'Hello World 출력', count: 18 },
      { name: '변수 선언 연습', count: 16 },
      { name: '조건문 기초', count: 15 },
      { name: '반복문 마스터', count: 13 },
      { name: 'HTML 기초', count: 12 },
    ];
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">학습 데이터 분석 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/teacher')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">학급 관리로 돌아가기</span>
          </button>
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold text-white flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-violet-400" />
              학습 분석 대시보드
            </h1>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-slate-300 rounded-xl transition-all">
              <Download className="w-4 h-4" />
              리포트 다운로드
            </button>
          </div>
          <p className="text-slate-400 text-lg">학급 전체의 학습 현황을 한눈에 파악하세요</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="총 학생 수"
            value={stats.totalStudents}
            change={5}
            changeLabel="지난주 대비"
            icon={Users}
            color="blue"
          />
          <StatCard
            title="오늘 활동 학생"
            value={stats.activeToday}
            change={12}
            changeLabel="어제 대비"
            icon={TrendingUp}
            color="emerald"
          />
          <StatCard
            title="평균 진도율"
            value={`${stats.avgProgress}%`}
            change={-3}
            changeLabel="지난주 대비"
            icon={Target}
            color="violet"
          />
          <StatCard
            title="주간 미션 완료"
            value={stats.weeklyMissions}
            change={8}
            changeLabel="지난주 대비"
            icon={Award}
            color="amber"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 주간 활동 차트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-violet-400" />
                주간 활동 차트
              </h2>
              <span className="text-sm text-slate-500">지난 7일</span>
            </div>
            <div className="flex items-end justify-between gap-3 h-48">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex items-end justify-center">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.count / maxWeeklyCount) * 100}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="w-full bg-gradient-to-t from-violet-500 to-purple-500 rounded-t-lg min-h-[8px] relative group cursor-pointer hover:from-violet-400 hover:to-purple-400 transition-colors"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 px-2 py-1 rounded">
                        {day.count}
                      </div>
                    </motion.div>
                  </div>
                  <div className="text-sm font-bold text-slate-400">{day.day}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TOP 5 미션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              가장 많이 완료된 미션 TOP 5
            </h2>
            <div className="space-y-4">
              {topMissions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    index === 1 ? 'bg-slate-500/20 text-slate-400 border border-slate-500/30' :
                    index === 2 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                    'bg-slate-700/50 text-slate-500 border border-slate-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">{mission.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(mission.count / topMissions[0].count) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.1 * index }}
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-400 w-8">{mission.count}명</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 개념별 이해도 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-400" />
            개념별 평균 이해도
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demoConceptData.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`p-4 rounded-xl border ${
                  concept.avgAccuracy < 70
                    ? 'bg-red-500/10 border-red-500/30'
                    : concept.avgAccuracy < 80
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-emerald-500/10 border-emerald-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-white">{concept.concept}</h3>
                  <span className={`text-lg font-bold ${
                    concept.avgAccuracy < 70 ? 'text-red-400' :
                    concept.avgAccuracy < 80 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {concept.avgAccuracy}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${concept.avgAccuracy}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                      className={`h-full rounded-full ${
                        concept.avgAccuracy < 70 ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        concept.avgAccuracy < 80 ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                        'bg-gradient-to-r from-emerald-500 to-emerald-600'
                      }`}
                    />
                  </div>
                  <span className="text-xs text-slate-500">{concept.totalAttempts}회</span>
                </div>
                {concept.avgAccuracy < 70 && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    <span>보충 학습 권장</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 학생 진도 테이블 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
        >
          <div className="p-6 border-b border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-violet-400" />
                학생 진도 현황
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFilterSlow(!filterSlow)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterSlow
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-slate-700/50 text-slate-400 border border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  진도 느린 학생만
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500"
                >
                  <option value="name">이름순</option>
                  <option value="level">레벨순</option>
                  <option value="progress">진도율순</option>
                  <option value="lastActive">최근 활동순</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-400 bg-slate-900/50">
                  <th className="px-6 py-4 font-medium">학생</th>
                  <th className="px-6 py-4 font-medium text-center">레벨</th>
                  <th className="px-6 py-4 font-medium text-center">완료 미션</th>
                  <th className="px-6 py-4 font-medium">진도율</th>
                  <th className="px-6 py-4 font-medium text-center">스트릭</th>
                  <th className="px-6 py-4 font-medium">최근 활동</th>
                </tr>
              </thead>
              <tbody>
                {sortedStudents.map((student, index) => {
                  const progress = (student.completedMissions / student.totalMissions) * 100;
                  const isSlow = progress < 50;
                  const lastActive = new Date(student.lastActiveDate);
                  const isActiveToday = lastActive.toDateString() === new Date().toDateString();

                  return (
                    <motion.tr
                      key={student.studentId}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className={`border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors ${
                        isSlow ? 'bg-red-500/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                            {student.studentName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-white">{student.studentName}</div>
                            {isSlow && (
                              <div className="flex items-center gap-1 text-xs text-red-400 mt-0.5">
                                <AlertCircle className="w-3 h-3" />
                                관심 필요
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-500/20 text-violet-400 rounded-lg font-bold text-sm">
                          Lv.{student.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-white font-medium">
                          {student.completedMissions}/{student.totalMissions}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                isSlow
                                  ? 'bg-gradient-to-r from-red-500 to-red-600'
                                  : 'bg-gradient-to-r from-violet-500 to-purple-500'
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <span className={`text-sm font-bold ${isSlow ? 'text-red-400' : 'text-slate-400'}`}>
                            {Math.round(progress)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 ${
                          student.streak > 0 ? 'text-orange-400' : 'text-slate-500'
                        }`}>
                          <Flame className="w-4 h-4" />
                          <span className="font-medium">{student.streak}일</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${isActiveToday ? 'text-emerald-400 font-medium' : 'text-slate-400'}`}>
                          {isActiveToday ? (
                            <span className="flex items-center gap-1">
                              <CheckCircle className="w-4 h-4" />
                              오늘
                            </span>
                          ) : (
                            lastActive.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
                          )}
                        </span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeacherAnalytics;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Mail,
  Building,
  Calendar,
  RefreshCw,
  AlertCircle,
  UserCheck,
  UserX,
  LogOut,
  GraduationCap,
  User,
  Search,
  Trash2,
  ChevronDown,
  ChevronRight,
  BookOpen,
  MoreVertical,
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import {
  getAllUsers,
  getApprovedTeachers,
  getAllClasses,
  deleteTeacherAccount,
  deleteStudent,
} from '../services/authService';
import type { AuthUser, Teacher, Student, ClassRoom } from '../types';

type TabType = 'pending' | 'all';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const {
    authUser,
    pendingTeachers,
    loadPendingTeachers,
    approveTeacherAccount,
    rejectTeacherAccount,
    logout,
    isLoading,
  } = useAuthStore();

  const [activeTab, setActiveTab] = useState<TabType>('pending');
  const [allUsers, setAllUsers] = useState<AuthUser[]>([]);
  const [allClasses, setAllClasses] = useState<ClassRoom[]>([]);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTeachers, setExpandedTeachers] = useState<Set<string>>(new Set());
  const [loadingAll, setLoadingAll] = useState(false);
  const [actionResult, setActionResult] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!authUser || authUser.role !== 'admin') {
      navigate('/login');
      return;
    }
    loadPendingTeachers();
    loadAllData();
  }, [authUser, navigate, loadPendingTeachers]);

  const loadAllData = async () => {
    setLoadingAll(true);
    try {
      const [users, classes] = await Promise.all([getAllUsers(), getAllClasses()]);
      setAllUsers(users);
      setAllClasses(classes);
    } catch (error) {
      console.error('데이터 로딩 실패:', error);
    }
    setLoadingAll(false);
  };

  const handleApprove = async (teacherId: string, teacherName: string) => {
    setProcessingId(teacherId);
    setActionResult(null);

    const success = await approveTeacherAccount(teacherId);

    if (success) {
      setActionResult({
        type: 'success',
        message: `${teacherName} 선생님을 승인했습니다.`,
      });
      loadAllData();
    } else {
      setActionResult({
        type: 'error',
        message: '승인 처리 중 오류가 발생했습니다.',
      });
    }

    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleReject = async (teacherId: string, teacherName: string) => {
    if (!confirm(`${teacherName} 선생님의 가입을 거절하시겠습니까?`)) {
      return;
    }

    setProcessingId(teacherId);
    setActionResult(null);

    const success = await rejectTeacherAccount(teacherId);

    if (success) {
      setActionResult({
        type: 'success',
        message: `${teacherName} 선생님의 가입을 거절했습니다.`,
      });
    } else {
      setActionResult({
        type: 'error',
        message: '거절 처리 중 오류가 발생했습니다.',
      });
    }

    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleDeleteTeacher = async (teacherId: string, teacherName: string) => {
    if (!confirm(`${teacherName} 선생님과 관련된 모든 학급 및 학생 계정이 삭제됩니다. 계속하시겠습니까?`)) {
      return;
    }

    setProcessingId(teacherId);
    const result = await deleteTeacherAccount(teacherId);

    if (result.success) {
      setActionResult({ type: 'success', message: `${teacherName} 선생님을 삭제했습니다.` });
      loadAllData();
    } else {
      setActionResult({ type: 'error', message: result.error || '삭제 실패' });
    }

    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleDeleteStudent = async (studentId: string, classId: string, studentName: string) => {
    if (!confirm(`${studentName} 학생을 삭제하시겠습니까?`)) {
      return;
    }

    setProcessingId(studentId);
    const result = await deleteStudent(studentId, classId);

    if (result.success) {
      setActionResult({ type: 'success', message: `${studentName} 학생을 삭제했습니다.` });
      loadAllData();
    } else {
      setActionResult({ type: 'error', message: result.error || '삭제 실패' });
    }

    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const toggleTeacherExpand = (teacherId: string) => {
    const newExpanded = new Set(expandedTeachers);
    if (newExpanded.has(teacherId)) {
      newExpanded.delete(teacherId);
    } else {
      newExpanded.add(teacherId);
    }
    setExpandedTeachers(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // 필터링된 데이터
  const approvedTeachers = allUsers.filter(
    (u) => u.role === 'teacher' && u.approvalStatus === 'approved'
  ) as Teacher[];

  const students = allUsers.filter((u) => u.role === 'student') as Student[];

  const filteredTeachers = approvedTeachers.filter(
    (t) =>
      t.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t as any).school?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTeacherClasses = (teacherId: string) =>
    allClasses.filter((c) => c.teacherId === teacherId);

  const getClassStudents = (classId: string) =>
    students.filter((s) => s.classId === classId);

  if (!authUser || authUser.role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      {/* 헤더 */}
      <div className="bg-slate-900/80 border-b border-slate-800 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">슈퍼 관리자</h1>
                <p className="text-sm text-slate-400">{authUser?.displayName} 님</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  loadPendingTeachers();
                  loadAllData();
                }}
                disabled={isLoading || loadingAll}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 transition-all border border-slate-700"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading || loadingAll ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">새로고침</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">로그아웃</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* 알림 메시지 */}
        <AnimatePresence>
          {actionResult && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-2xl flex items-center gap-3 ${
                actionResult.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {actionResult.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {actionResult.message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{pendingTeachers.length}</p>
                <p className="text-sm text-slate-400">승인 대기</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{approvedTeachers.length}</p>
                <p className="text-sm text-slate-400">승인된 선생님</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{students.length}</p>
                <p className="text-sm text-slate-400">전체 학생</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{allClasses.length}</p>
                <p className="text-sm text-slate-400">전체 학급</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'pending'
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Clock className="w-4 h-4" />
            승인 대기
            {pendingTeachers.length > 0 && (
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeTab === 'pending' ? 'bg-white/20' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {pendingTeachers.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Users className="w-4 h-4" />
            전체 관리
          </button>
        </div>

        {/* 컨텐츠 영역 */}
        <AnimatePresence mode="wait">
          {activeTab === 'pending' ? (
            <motion.div
              key="pending"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
            >
              <div className="p-6 border-b border-slate-700/50">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-400" />
                  승인 대기 중인 선생님
                </h2>
              </div>

              {pendingTeachers.length === 0 ? (
                <div className="p-16 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <p className="text-slate-400 text-lg">승인 대기 중인 선생님이 없습니다</p>
                  <p className="text-slate-500 text-sm mt-2">모든 가입 신청이 처리되었습니다</p>
                </div>
              ) : (
                <div className="divide-y divide-slate-700/50">
                  {pendingTeachers.map((teacher) => (
                    <motion.div
                      key={teacher.uid}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-6 hover:bg-slate-700/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                            {teacher.displayName.charAt(0)}
                          </div>
                          <div className="space-y-2">
                            <div>
                              <h3 className="text-lg font-semibold text-white">
                                {teacher.displayName}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mt-1">
                                <span className="flex items-center gap-1">
                                  <Mail className="w-4 h-4" />
                                  {teacher.email}
                                </span>
                                {(teacher as any).school && (
                                  <span className="flex items-center gap-1">
                                    <Building className="w-4 h-4" />
                                    {(teacher as any).school}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <Calendar className="w-3 h-3" />
                              가입 신청: {formatDate(teacher.createdAt)}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleReject(teacher.uid, teacher.displayName)}
                            disabled={processingId === teacher.uid}
                            className="flex items-center gap-2 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition-all disabled:opacity-50"
                          >
                            <UserX className="w-4 h-4" />
                            거절
                          </button>
                          <button
                            onClick={() => handleApprove(teacher.uid, teacher.displayName)}
                            disabled={processingId === teacher.uid}
                            className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl transition-all disabled:opacity-50 shadow-lg shadow-emerald-500/25"
                          >
                            {processingId === teacher.uid ? (
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                              <UserCheck className="w-4 h-4" />
                            )}
                            승인
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="all"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* 검색 */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="선생님 이름, 이메일, 학교로 검색..."
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              {/* 선생님 목록 */}
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
                <div className="p-6 border-b border-slate-700/50">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                    선생님 및 학생 관리
                    <span className="text-sm font-normal text-slate-400">
                      ({filteredTeachers.length}명의 선생님)
                    </span>
                  </h2>
                </div>

                {filteredTeachers.length === 0 ? (
                  <div className="p-16 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-slate-500" />
                    </div>
                    <p className="text-slate-400 text-lg">
                      {searchQuery ? '검색 결과가 없습니다' : '승인된 선생님이 없습니다'}
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-700/50">
                    {filteredTeachers.map((teacher) => {
                      const teacherClasses = getTeacherClasses(teacher.uid);
                      const isExpanded = expandedTeachers.has(teacher.uid);
                      const totalStudents = teacherClasses.reduce(
                        (acc, c) => acc + getClassStudents(c.id).length,
                        0
                      );

                      return (
                        <div key={teacher.uid}>
                          {/* 선생님 행 */}
                          <div
                            className="p-5 hover:bg-slate-700/20 transition-colors cursor-pointer"
                            onClick={() => toggleTeacherExpand(teacher.uid)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                                  {teacher.displayName.charAt(0)}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-white">
                                      {teacher.displayName}
                                    </h3>
                                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                                      선생님
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                                    <span>{teacher.email}</span>
                                    {(teacher as any).school && (
                                      <>
                                        <span className="text-slate-600">•</span>
                                        <span>{(teacher as any).school}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-4">
                                <div className="text-right hidden sm:block">
                                  <p className="text-sm text-slate-400">
                                    {teacherClasses.length}개 학급
                                  </p>
                                  <p className="text-sm text-slate-500">
                                    {totalStudents}명 학생
                                  </p>
                                </div>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteTeacher(teacher.uid, teacher.displayName);
                                  }}
                                  disabled={processingId === teacher.uid}
                                  className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                  title="선생님 삭제"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                                <div className="text-slate-500">
                                  {isExpanded ? (
                                    <ChevronDown className="w-5 h-5" />
                                  ) : (
                                    <ChevronRight className="w-5 h-5" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 확장된 학급/학생 목록 */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-900/50"
                              >
                                {teacherClasses.length === 0 ? (
                                  <div className="px-6 py-8 text-center text-slate-500">
                                    아직 생성된 학급이 없습니다
                                  </div>
                                ) : (
                                  <div className="px-6 py-4 space-y-4">
                                    {teacherClasses.map((classroom) => {
                                      const classStudents = getClassStudents(classroom.id);
                                      return (
                                        <div
                                          key={classroom.id}
                                          className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50"
                                        >
                                          <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                              <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                                <BookOpen className="w-5 h-5 text-indigo-400" />
                                              </div>
                                              <div>
                                                <h4 className="font-medium text-white">
                                                  {classroom.name}
                                                </h4>
                                                <p className="text-sm text-slate-400">
                                                  참여 코드: {classroom.joinCode}
                                                </p>
                                              </div>
                                            </div>
                                            <span className="text-sm text-slate-400">
                                              {classStudents.length}명
                                            </span>
                                          </div>

                                          {classStudents.length > 0 && (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
                                              {classStudents.map((student) => (
                                                <div
                                                  key={student.uid}
                                                  className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg group"
                                                >
                                                  <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                                      <User className="w-4 h-4 text-blue-400" />
                                                    </div>
                                                    <span className="text-sm text-slate-300">
                                                      {student.displayName}
                                                    </span>
                                                  </div>
                                                  <button
                                                    onClick={() =>
                                                      handleDeleteStudent(
                                                        student.uid,
                                                        student.classId,
                                                        student.displayName
                                                      )
                                                    }
                                                    disabled={processingId === student.uid}
                                                    className="p-1.5 text-slate-600 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                                                    title="학생 삭제"
                                                  >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                  </button>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 안내 메시지 */}
        <div className="mt-8 p-5 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl">
          <p className="text-sm text-indigo-300 leading-relaxed">
            <strong className="text-indigo-200">관리자 안내:</strong> 선생님을 삭제하면 해당 선생님의 모든 학급과 학생 계정도 함께 삭제됩니다.
            학생을 개별적으로 삭제하려면 선생님 항목을 클릭하여 펼친 후 삭제할 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users, Plus, Copy, CheckCircle, TrendingUp, Clock, Target,
  ChevronRight, Flame, Award, BookOpen, BarChart3, Settings,
  RefreshCw, Search, Filter, LogOut, GraduationCap, UserPlus,
  Trash2, AlertCircle, X, Download, Upload, ClipboardList
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import {
  getClassStudents,
  getStudentProgressData,
  createStudentsBatch,
  deleteStudentByTeacher,
  deleteTeacherClass
} from '../services/authService';
import type { ClassRoom, Student } from '../types';

interface StudentInput {
  name: string;
  loginId: string;
  password: string;
}

interface BulkCreateConfig {
  prefix: string;
  count: number;
  startNumber: number;
}

const TeacherDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { authUser, classes, createClass, loadClasses, logout } = useAuthStore();
  const [selectedClass, setSelectedClass] = useState<ClassRoom | null>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [isCreatingClass, setIsCreatingClass] = useState(false);
  const [isCreatingStudents, setIsCreatingStudents] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'level' | 'progress' | 'lastActive'>('name');
  const [actionResult, setActionResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // 학생 일괄 생성 관련
  const [studentInputs, setStudentInputs] = useState<StudentInput[]>([
    { name: '', loginId: '', password: '' }
  ]);
  const [isSubmittingStudents, setIsSubmittingStudents] = useState(false);
  const [bulkConfig, setBulkConfig] = useState<BulkCreateConfig>({
    prefix: '',
    count: 10,
    startNumber: 1,
  });
  const [createMode, setCreateMode] = useState<'bulk' | 'manual'>('bulk');

  useEffect(() => {
    if (classes.length > 0 && !selectedClass) {
      setSelectedClass(classes[0]);
    }
  }, [classes]);

  useEffect(() => {
    if (selectedClass) {
      setIsLoadingStudents(true);
      loadClassStudents(selectedClass.id);
    }
  }, [selectedClass]);

  const loadClassStudents = async (classId: string) => {
    try {
      const classStudents = await getClassStudents(classId);
      const studentsWithProgress = await Promise.all(
        classStudents.map(async (student) => {
          const progress = await getStudentProgressData(student.uid);
          return {
            ...student,
            progress: progress || { completedMissions: [], unitsProgress: {} },
          };
        })
      );
      setStudents(studentsWithProgress);
    } catch (error) {
      console.error('학생 목록 로딩 실패:', error);
    } finally {
      setIsLoadingStudents(false);
    }
  };

  const handleCreateClass = async () => {
    if (!newClassName.trim()) return;
    const result = await createClass(newClassName.trim());
    if (result) {
      setSelectedClass(result);
      setNewClassName('');
      setIsCreatingClass(false);
      setActionResult({ type: 'success', message: '학급이 생성되었습니다!' });
      setTimeout(() => setActionResult(null), 3000);
    }
  };

  const copyClassCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  // 학생 입력 필드 관리
  const addStudentInput = () => {
    if (studentInputs.length >= 30) {
      setActionResult({ type: 'error', message: '최대 30명까지만 추가할 수 있습니다.' });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }
    setStudentInputs([...studentInputs, { name: '', loginId: '', password: '' }]);
  };

  const removeStudentInput = (index: number) => {
    if (studentInputs.length === 1) return;
    setStudentInputs(studentInputs.filter((_, i) => i !== index));
  };

  const updateStudentInput = (index: number, field: keyof StudentInput, value: string) => {
    const updated = [...studentInputs];
    updated[index][field] = value;
    setStudentInputs(updated);
  };

  // 학생 일괄 생성 (자동 모드)
  const handleBulkCreateStudents = async () => {
    if (!selectedClass || !authUser) return;

    if (!bulkConfig.prefix.trim()) {
      setActionResult({ type: 'error', message: '접두어를 입력해주세요.' });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }

    if (bulkConfig.count < 1 || bulkConfig.count > 30) {
      setActionResult({ type: 'error', message: '학생 수는 1~30명 사이여야 합니다.' });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }

    const maxAllowed = 30 - students.length;
    if (bulkConfig.count > maxAllowed) {
      setActionResult({ type: 'error', message: `최대 ${maxAllowed}명까지만 추가 가능합니다.` });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }

    // 자동 생성 데이터 만들기
    const studentsToCreate = [];
    for (let i = 0; i < bulkConfig.count; i++) {
      const num = String(bulkConfig.startNumber + i).padStart(2, '0');
      const loginId = `${bulkConfig.prefix}${num}`;
      studentsToCreate.push({
        name: `학생${num}`,
        loginId: loginId,
        password: loginId + '!' // 초기 비밀번호: 아이디 + !
      });
    }

    setIsSubmittingStudents(true);

    const result = await createStudentsBatch(
      selectedClass.id,
      authUser.uid,
      studentsToCreate
    );

    setIsSubmittingStudents(false);

    if (result.success) {
      setActionResult({
        type: 'success',
        message: `${result.createdCount}명의 학생이 생성되었습니다!`
      });
      setIsCreatingStudents(false);
      setBulkConfig({ prefix: '', count: 10, startNumber: 1 });
      loadClassStudents(selectedClass.id);
      loadClasses();
    } else {
      setActionResult({
        type: 'error',
        message: result.error || '학생 생성 중 오류가 발생했습니다.'
      });
    }

    setTimeout(() => setActionResult(null), 5000);
  };

  // 학생 개별 생성 (수동 모드)
  const handleManualCreateStudents = async () => {
    if (!selectedClass || !authUser) return;

    const validStudents = studentInputs.filter(
      s => s.name.trim() && s.loginId.trim() && s.password.trim()
    );

    if (validStudents.length === 0) {
      setActionResult({ type: 'error', message: '최소 1명의 학생 정보를 입력해주세요.' });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }

    // 비밀번호 길이 체크
    const shortPasswords = validStudents.filter(s => s.password.length < 6);
    if (shortPasswords.length > 0) {
      setActionResult({ type: 'error', message: '비밀번호는 6자 이상이어야 합니다.' });
      setTimeout(() => setActionResult(null), 3000);
      return;
    }

    setIsSubmittingStudents(true);

    const result = await createStudentsBatch(
      selectedClass.id,
      authUser.uid,
      validStudents.map(s => ({
        name: s.name.trim(),
        loginId: s.loginId.trim(),
        password: s.password
      }))
    );

    setIsSubmittingStudents(false);

    if (result.success) {
      setActionResult({
        type: 'success',
        message: `${result.createdCount}명의 학생이 생성되었습니다!`
      });
      setIsCreatingStudents(false);
      setStudentInputs([{ name: '', loginId: '', password: '' }]);
      loadClassStudents(selectedClass.id);
      loadClasses();
    } else {
      setActionResult({
        type: 'error',
        message: result.error || '학생 생성 중 오류가 발생했습니다.'
      });
    }

    setTimeout(() => setActionResult(null), 5000);
  };

  // 미리보기 생성
  const getPreviewStudents = () => {
    if (!bulkConfig.prefix.trim()) return [];
    const preview = [];
    const showCount = Math.min(bulkConfig.count, 5);
    for (let i = 0; i < showCount; i++) {
      const num = String(bulkConfig.startNumber + i).padStart(2, '0');
      preview.push({
        loginId: `${bulkConfig.prefix}${num}`,
        password: `${bulkConfig.prefix}${num}!`
      });
    }
    return preview;
  };

  // 학생 삭제
  const handleDeleteStudent = async (studentId: string, studentName: string) => {
    if (!selectedClass || !authUser) return;
    if (!confirm(`${studentName} 학생을 삭제하시겠습니까?`)) return;

    setProcessingId(studentId);
    const result = await deleteStudentByTeacher(studentId, selectedClass.id, authUser.uid);

    if (result.success) {
      setActionResult({ type: 'success', message: `${studentName} 학생을 삭제했습니다.` });
      loadClassStudents(selectedClass.id);
      loadClasses();
    } else {
      setActionResult({ type: 'error', message: result.error || '삭제 실패' });
    }

    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  // 학급 삭제
  const handleDeleteClass = async () => {
    if (!selectedClass || !authUser) return;
    if (!confirm(`"${selectedClass.name}" 학급과 모든 학생을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.`)) return;

    const result = await deleteTeacherClass(selectedClass.id, authUser.uid);

    if (result.success) {
      setActionResult({ type: 'success', message: '학급이 삭제되었습니다.' });
      setSelectedClass(null);
      loadClasses();
    } else {
      setActionResult({ type: 'error', message: result.error || '삭제 실패' });
    }

    setTimeout(() => setActionResult(null), 3000);
  };

  // 학생 정렬
  const sortedStudents = [...students].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.displayName.localeCompare(b.displayName);
      case 'level':
        return (b.progress?.level || 0) - (a.progress?.level || 0);
      case 'progress':
        return (b.progress?.completedMissions?.length || 0) - (a.progress?.completedMissions?.length || 0);
      case 'lastActive':
        return new Date(b.progress?.lastActiveDate || 0).getTime() - new Date(a.progress?.lastActiveDate || 0).getTime();
      default:
        return 0;
    }
  });

  // 검색 필터
  const filteredStudents = sortedStudents.filter((student) =>
    student.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 통계 계산
  const classStats = {
    totalStudents: students.length,
    activeToday: students.filter((s) => {
      const lastActive = new Date(s.progress?.lastActiveDate || 0);
      const today = new Date();
      return lastActive.toDateString() === today.toDateString();
    }).length,
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // 학급이 이미 있으면 새 학급 버튼 숨김
  const hasClass = classes.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* 헤더 */}
      <div className="bg-slate-900/80 border-b border-slate-800 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">선생님 대시보드</h1>
                <p className="text-sm text-slate-400">{authUser?.displayName} 님</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {hasClass && (
                <>
                  <button
                    onClick={() => navigate('/teacher/assignments')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 rounded-xl transition-all"
                  >
                    <ClipboardList className="w-4 h-4" />
                    <span className="hidden sm:inline">과제 관리</span>
                  </button>
                  <button
                    onClick={() => navigate('/teacher/analytics')}
                    className="flex items-center gap-2 px-4 py-2.5 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 text-violet-400 rounded-xl transition-all"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span className="hidden sm:inline">학습 분석</span>
                  </button>
                </>
              )}
              {!hasClass && (
                <button
                  onClick={() => setIsCreatingClass(true)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
                >
                  <Plus className="w-4 h-4" />
                  학급 만들기
                </button>
              )}
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

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 relative z-10">
        {/* 알림 메시지 */}
        <AnimatePresence>
          {actionResult && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-2xl flex items-center gap-3 ${
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

        {/* 학급 정보 */}
        {selectedClass && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* 학급 카드 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedClass.name}</h2>
                    <p className="text-slate-400">학생 {classStats.totalStudents}명 | 오늘 활동 {classStats.activeToday}명</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* 학급 코드 */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
                    <span className="text-slate-400 text-sm">참여 코드:</span>
                    <code className="text-xl font-mono font-bold text-indigo-400">{selectedClass.joinCode}</code>
                    <button
                      onClick={() => copyClassCode(selectedClass.joinCode)}
                      className="p-1.5 hover:bg-indigo-500/20 rounded-lg transition-colors"
                    >
                      {copiedCode === selectedClass.joinCode ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-indigo-400" />
                      )}
                    </button>
                  </div>

                  {/* 학급 삭제 */}
                  <button
                    onClick={handleDeleteClass}
                    className="p-2.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
                    title="학급 삭제"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 학생 관리 섹션 */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
              {/* 헤더 */}
              <div className="p-5 border-b border-slate-700/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo-400" />
                  학생 목록
                  <span className="text-sm font-normal text-slate-400">({students.length}/30명)</span>
                </h3>

                <div className="flex items-center gap-2">
                  {/* 검색 */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="이름 검색..."
                      className="pl-9 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-40"
                    />
                  </div>

                  {/* 정렬 */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500"
                  >
                    <option value="name">이름순</option>
                    <option value="level">레벨순</option>
                    <option value="progress">진행도순</option>
                    <option value="lastActive">최근 활동순</option>
                  </select>

                  {/* 새로고침 */}
                  <button
                    onClick={() => loadClassStudents(selectedClass.id)}
                    className="p-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    <RefreshCw className={`w-4 h-4 text-slate-400 ${isLoadingStudents ? 'animate-spin' : ''}`} />
                  </button>

                  {/* 학생 추가 버튼 */}
                  {students.length < 30 && (
                    <button
                      onClick={() => setIsCreatingStudents(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-xl transition-colors"
                    >
                      <UserPlus className="w-4 h-4" />
                      학생 추가
                    </button>
                  )}
                </div>
              </div>

              {/* 학생 테이블 */}
              {isLoadingStudents ? (
                <div className="p-12 text-center">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-slate-400">학생 정보를 불러오는 중...</p>
                </div>
              ) : filteredStudents.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-slate-500" />
                  </div>
                  <p className="text-slate-400 mb-2">
                    {students.length === 0 ? '아직 등록된 학생이 없습니다' : '검색 결과가 없습니다'}
                  </p>
                  {students.length === 0 && (
                    <button
                      onClick={() => setIsCreatingStudents(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-xl mt-4"
                    >
                      <UserPlus className="w-4 h-4" />
                      학생 추가하기
                    </button>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm text-slate-400 border-b border-slate-700/50">
                        <th className="px-5 py-3 font-medium">학생</th>
                        <th className="px-5 py-3 font-medium">로그인 ID</th>
                        <th className="px-5 py-3 font-medium text-center">레벨</th>
                        <th className="px-5 py-3 font-medium text-center">완료 미션</th>
                        <th className="px-5 py-3 font-medium text-center">연속 학습</th>
                        <th className="px-5 py-3 font-medium">최근 활동</th>
                        <th className="px-5 py-3 font-medium text-center">관리</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student, index) => {
                        const completedMissions = student.progress?.completedMissions?.length || 0;
                        const lastActive = student.progress?.lastActiveDate
                          ? new Date(student.progress.lastActiveDate)
                          : null;
                        const isActiveToday = lastActive?.toDateString() === new Date().toDateString();

                        return (
                          <motion.tr
                            key={student.uid}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.02 }}
                            className="border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors"
                          >
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                  {student.displayName.charAt(0)}
                                </div>
                                <span className="font-medium text-white">{student.displayName}</span>
                              </div>
                            </td>
                            <td className="px-5 py-4">
                              <code className="text-sm text-slate-400">{student.email.replace('@student.local', '')}</code>
                            </td>
                            <td className="px-5 py-4 text-center">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-500/20 text-indigo-400 rounded-lg font-bold text-sm">
                                Lv.{student.progress?.level || 1}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-center">
                              <span className="text-white font-medium">{completedMissions}</span>
                            </td>
                            <td className="px-5 py-4 text-center">
                              <span className={`inline-flex items-center gap-1 ${
                                (student.progress?.streak || 0) > 0 ? 'text-orange-400' : 'text-slate-500'
                              }`}>
                                <Flame className="w-4 h-4" />
                                {student.progress?.streak || 0}일
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              {lastActive ? (
                                <span className={`text-sm ${isActiveToday ? 'text-emerald-400' : 'text-slate-400'}`}>
                                  {isActiveToday ? '오늘' : lastActive.toLocaleDateString('ko-KR')}
                                </span>
                              ) : (
                                <span className="text-slate-500 text-sm">-</span>
                              )}
                            </td>
                            <td className="px-5 py-4 text-center">
                              <button
                                onClick={() => handleDeleteStudent(student.uid, student.displayName)}
                                disabled={processingId === student.uid}
                                className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                                title="학생 삭제"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* 학급이 없을 때 */}
        {!hasClass && !isCreatingClass && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">학급을 만들어보세요!</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              학급을 만들면 학생 계정을 생성하고<br />
              학습 진행 상황을 관리할 수 있습니다.
            </p>
            <button
              onClick={() => setIsCreatingClass(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 text-lg"
            >
              <Plus className="w-6 h-6" />
              학급 만들기
            </button>
            <p className="text-slate-500 text-sm mt-4">1개의 학급만 생성할 수 있습니다</p>
          </motion.div>
        )}

        {/* 학급 생성 모달 */}
        <AnimatePresence>
          {isCreatingClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsCreatingClass(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">학급 만들기</h3>
                  <button
                    onClick={() => setIsCreatingClass(false)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-400 mb-2">학급 이름</label>
                  <input
                    type="text"
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    placeholder="예: 5학년 1반"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    autoFocus
                  />
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl mb-6">
                  <p className="text-sm text-blue-300">
                    학급을 생성하면 자동으로 참여 코드가 생성됩니다.
                    학생들은 이 코드 없이 선생님이 직접 계정을 생성해주어야 합니다.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsCreatingClass(false)}
                    className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                  >
                    취소
                  </button>
                  <button
                    onClick={handleCreateClass}
                    disabled={!newClassName.trim()}
                    className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    만들기
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 학생 일괄 생성 모달 */}
        <AnimatePresence>
          {isCreatingStudents && selectedClass && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsCreatingStudents(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl max-h-[85vh] flex flex-col"
              >
                {/* 헤더 */}
                <div className="flex items-center justify-between p-6 border-b border-slate-700">
                  <div>
                    <h3 className="text-xl font-bold text-white">학생 계정 생성</h3>
                    <p className="text-sm text-slate-400 mt-1">최대 {30 - students.length}명까지 추가 가능</p>
                  </div>
                  <button
                    onClick={() => setIsCreatingStudents(false)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* 모드 탭 */}
                <div className="px-6 pt-4 flex gap-2">
                  <button
                    onClick={() => setCreateMode('bulk')}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                      createMode === 'bulk'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    자동 일괄 생성
                  </button>
                  <button
                    onClick={() => setCreateMode('manual')}
                    className={`flex-1 py-3 rounded-xl font-medium transition-all ${
                      createMode === 'manual'
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-700/50 text-slate-400 hover:text-white'
                    }`}
                  >
                    수동 입력
                  </button>
                </div>

                {/* 컨텐츠 */}
                <div className="flex-1 overflow-y-auto p-6">
                  {createMode === 'bulk' ? (
                    /* 자동 일괄 생성 모드 */
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">접두어 (필수)</label>
                          <input
                            type="text"
                            value={bulkConfig.prefix}
                            onChange={(e) => setBulkConfig({ ...bulkConfig, prefix: e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '') })}
                            placeholder="예: isw"
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-lg font-mono"
                            maxLength={10}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">학생 수</label>
                          <input
                            type="number"
                            value={bulkConfig.count}
                            onChange={(e) => setBulkConfig({ ...bulkConfig, count: Math.max(1, Math.min(30 - students.length, parseInt(e.target.value) || 1)) })}
                            min={1}
                            max={30 - students.length}
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-lg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">시작 번호</label>
                          <input
                            type="number"
                            value={bulkConfig.startNumber}
                            onChange={(e) => setBulkConfig({ ...bulkConfig, startNumber: Math.max(1, parseInt(e.target.value) || 1) })}
                            min={1}
                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-500 text-lg"
                          />
                        </div>
                      </div>

                      {/* 미리보기 */}
                      {bulkConfig.prefix && (
                        <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                          <h4 className="text-sm font-medium text-slate-400 mb-3">생성될 계정 미리보기</h4>
                          <div className="space-y-2">
                            {getPreviewStudents().map((student, i) => (
                              <div key={i} className="flex items-center justify-between py-2 px-3 bg-slate-800/50 rounded-lg">
                                <div className="flex items-center gap-4">
                                  <span className="text-slate-500 text-sm w-6">{bulkConfig.startNumber + i}.</span>
                                  <code className="text-emerald-400 font-mono">{student.loginId}</code>
                                </div>
                                <div className="text-slate-500 text-sm">
                                  비밀번호: <code className="text-amber-400">{student.password}</code>
                                </div>
                              </div>
                            ))}
                            {bulkConfig.count > 5 && (
                              <p className="text-center text-slate-500 text-sm py-2">
                                ... 외 {bulkConfig.count - 5}개 더
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 안내 */}
                      <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                        <p className="text-sm text-emerald-300">
                          <strong>자동 생성 규칙:</strong><br />
                          • 로그인 ID: <code className="bg-slate-800 px-1 rounded">접두어 + 번호</code> (예: isw01, isw02...)<br />
                          • 초기 비밀번호: <code className="bg-slate-800 px-1 rounded">로그인ID + !</code> (예: isw01!)<br />
                          • 학생 이름: 학생01, 학생02... (나중에 수정 가능)
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* 수동 입력 모드 */
                    <div className="space-y-3">
                      {/* 헤더 */}
                      <div className="grid grid-cols-12 gap-3 text-sm font-medium text-slate-400 px-1">
                        <div className="col-span-1">#</div>
                        <div className="col-span-3">이름</div>
                        <div className="col-span-4">로그인 ID</div>
                        <div className="col-span-3">비밀번호</div>
                        <div className="col-span-1"></div>
                      </div>

                      {studentInputs.map((input, index) => (
                        <div key={index} className="grid grid-cols-12 gap-3 items-center">
                          <div className="col-span-1 text-slate-500 text-sm">{index + 1}</div>
                          <div className="col-span-3">
                            <input
                              type="text"
                              value={input.name}
                              onChange={(e) => updateStudentInput(index, 'name', e.target.value)}
                              placeholder="학생 이름"
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="col-span-4">
                            <input
                              type="text"
                              value={input.loginId}
                              onChange={(e) => updateStudentInput(index, 'loginId', e.target.value)}
                              placeholder="로그인 ID"
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="col-span-3">
                            <input
                              type="text"
                              value={input.password}
                              onChange={(e) => updateStudentInput(index, 'password', e.target.value)}
                              placeholder="비밀번호 (6자+)"
                              className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                            />
                          </div>
                          <div className="col-span-1">
                            {studentInputs.length > 1 && (
                              <button
                                onClick={() => removeStudentInput(index)}
                                className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* 학생 추가 버튼 */}
                      {studentInputs.length < 30 - students.length && (
                        <button
                          onClick={addStudentInput}
                          className="mt-4 flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm"
                        >
                          <Plus className="w-4 h-4" />
                          학생 추가
                        </button>
                      )}

                      {/* 안내 */}
                      <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
                        <p className="text-sm text-indigo-300">
                          <strong>안내:</strong> 로그인 ID는 영문과 숫자만 사용 가능합니다.
                          비밀번호는 6자 이상이어야 합니다.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 푸터 */}
                <div className="p-6 border-t border-slate-700 flex gap-3">
                  <button
                    onClick={() => {
                      setIsCreatingStudents(false);
                      setStudentInputs([{ name: '', loginId: '', password: '' }]);
                      setBulkConfig({ prefix: '', count: 10, startNumber: 1 });
                    }}
                    className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                  >
                    취소
                  </button>
                  <button
                    onClick={createMode === 'bulk' ? handleBulkCreateStudents : handleManualCreateStudents}
                    disabled={isSubmittingStudents || (createMode === 'bulk' ? !bulkConfig.prefix.trim() : studentInputs.every(s => !s.name.trim()))}
                    className={`flex-1 py-3 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 ${
                      createMode === 'bulk' ? 'bg-emerald-500 hover:bg-emerald-400' : 'bg-indigo-500 hover:bg-indigo-400'
                    }`}
                  >
                    {isSubmittingStudents ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        생성 중...
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5" />
                        {createMode === 'bulk' ? `${bulkConfig.count}명 생성` : '학생 생성'}
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeacherDashboard;

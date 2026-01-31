import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus, Calendar, Users, CheckCircle, Clock, Trash2, X, ChevronDown,
  ChevronRight, Target, AlertCircle, ArrowLeft, Eye, Edit2, MessageSquare
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import {
  createAssignment,
  getTeacherAssignments,
  getAssignmentSubmissions,
  deleteAssignment,
  updateAssignment,
} from '../services/assignmentService';
import { getClassStudents } from '../services/authService';
import { allUnits } from '../data/curriculum';
import TeacherFeedback from '../components/TeacherFeedback';
import type { Assignment, StudentSubmission, Unit, Week, Mission } from '../types';

const TeacherAssignments: React.FC = () => {
  const navigate = useNavigate();
  const { authUser, classes } = useAuthStore();
  const curriculum = allUnits;

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedClass, setSelectedClass] = useState(classes[0] || null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedAssignment, setExpandedAssignment] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<Record<string, StudentSubmission[]>>({});
  const [selectedStudent, setSelectedStudent] = useState<StudentSubmission | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // 새 과제 폼
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    missionIds: [] as string[],
    dueDate: '',
  });

  // 미션 목록 (간단하게 유닛별로 정리)
  const allMissions = curriculum.flatMap((unit: Unit) =>
    unit.weeks.flatMap((week: Week) =>
      week.missions.map((mission: Mission) => ({
        id: mission.id,
        title: mission.title,
        unitTitle: unit.title,
        weekTitle: week.title,
      }))
    )
  );

  useEffect(() => {
    if (selectedClass) {
      loadAssignments();
    }
  }, [selectedClass]);

  const loadAssignments = async () => {
    if (!authUser) return;
    setIsLoading(true);
    const data = await getTeacherAssignments(authUser.uid);
    const filteredData = data.filter((a) => a.classId === selectedClass?.id);
    setAssignments(filteredData);
    setIsLoading(false);
  };

  const loadSubmissions = async (assignmentId: string) => {
    const data = await getAssignmentSubmissions(assignmentId);
    setSubmissions((prev) => ({ ...prev, [assignmentId]: data }));
  };

  const handleCreateAssignment = async () => {
    if (!authUser || !selectedClass) return;

    if (!newAssignment.title.trim() || newAssignment.missionIds.length === 0 || !newAssignment.dueDate) {
      setMessage({ type: 'error', text: '모든 필드를 입력해주세요.' });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    const result = await createAssignment(
      authUser.uid,
      selectedClass.id,
      newAssignment.title,
      newAssignment.description,
      newAssignment.missionIds,
      newAssignment.dueDate
    );

    if (result.success) {
      setMessage({ type: 'success', text: '과제가 생성되었습니다!' });
      setIsCreating(false);
      setNewAssignment({ title: '', description: '', missionIds: [], dueDate: '' });
      loadAssignments();
    } else {
      setMessage({ type: 'error', text: result.error || '과제 생성에 실패했습니다.' });
    }

    setTimeout(() => setMessage(null), 3000);
  };

  const handleDeleteAssignment = async (assignmentId: string) => {
    if (!confirm('정말 이 과제를 삭제하시겠습니까?')) return;

    const result = await deleteAssignment(assignmentId);
    if (result.success) {
      setMessage({ type: 'success', text: '과제가 삭제되었습니다.' });
      loadAssignments();
    } else {
      setMessage({ type: 'error', text: result.error || '삭제에 실패했습니다.' });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  const handleToggleAssignmentStatus = async (assignment: Assignment) => {
    const newStatus = assignment.status === 'active' ? 'closed' : 'active';
    const result = await updateAssignment(assignment.id, { status: newStatus });

    if (result.success) {
      setMessage({ type: 'success', text: `과제가 ${newStatus === 'active' ? '활성화' : '마감'}되었습니다.` });
      loadAssignments();
    } else {
      setMessage({ type: 'error', text: result.error || '상태 변경에 실패했습니다.' });
    }
    setTimeout(() => setMessage(null), 3000);
  };

  const toggleMissionSelection = (missionId: string) => {
    setNewAssignment((prev) => ({
      ...prev,
      missionIds: prev.missionIds.includes(missionId)
        ? prev.missionIds.filter((id) => id !== missionId)
        : [...prev.missionIds, missionId],
    }));
  };

  const toggleExpand = async (assignmentId: string) => {
    if (expandedAssignment === assignmentId) {
      setExpandedAssignment(null);
    } else {
      setExpandedAssignment(assignmentId);
      if (!submissions[assignmentId]) {
        await loadSubmissions(assignmentId);
      }
    }
  };

  if (!selectedClass) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-slate-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">학급이 없습니다</h2>
          <p className="text-slate-400 mb-6">먼저 학급을 생성해주세요.</p>
          <button
            onClick={() => navigate('/teacher')}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"
          >
            대시보드로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* 배경 효과 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* 헤더 */}
      <div className="bg-slate-900/80 border-b border-slate-800 backdrop-blur-xl sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/teacher')}
                className="p-2 hover:bg-slate-700 rounded-xl transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-white">과제 관리</h1>
                <p className="text-sm text-slate-400">{selectedClass.name}</p>
              </div>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              <Plus className="w-4 h-4" />
              과제 만들기
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6 relative z-10">
        {/* 알림 메시지 */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-4 rounded-2xl flex items-center gap-3 ${
                message.type === 'success'
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 과제 목록 */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : assignments.length === 0 ? (
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-12 text-center">
            <Target className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">아직 과제가 없습니다</h3>
            <p className="text-slate-400 mb-6">과제를 만들어 학생들에게 미션을 부여하세요!</p>
            <button
              onClick={() => setIsCreating(true)}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"
            >
              첫 과제 만들기
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {assignments.map((assignment) => {
              const isExpanded = expandedAssignment === assignment.id;
              const assignmentSubmissions = submissions[assignment.id] || [];
              const totalStudents = selectedClass.studentIds.length;
              const submittedCount = assignmentSubmissions.length;
              const avgScore =
                submittedCount > 0
                  ? Math.round(
                      assignmentSubmissions.reduce((sum, s) => sum + s.score, 0) / submittedCount
                    )
                  : 0;

              return (
                <motion.div
                  key={assignment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden"
                >
                  {/* 과제 헤더 */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{assignment.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              assignment.status === 'active'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-slate-500/20 text-slate-400'
                            }`}
                          >
                            {assignment.status === 'active' ? '진행중' : '마감'}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-3">{assignment.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="w-4 h-4" />
                            마감: {new Date(assignment.dueDate).toLocaleDateString('ko-KR')}
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Target className="w-4 h-4" />
                            미션 {assignment.missionIds.length}개
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleToggleAssignmentStatus(assignment)}
                          className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                          title={assignment.status === 'active' ? '과제 마감' : '과제 재개'}
                        >
                          <Clock className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteAssignment(assignment.id)}
                          className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                          title="과제 삭제"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* 제출 현황 */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <div className="text-slate-400 text-sm mb-1">제출률</div>
                        <div className="text-2xl font-bold text-white">
                          {totalStudents > 0
                            ? Math.round((submittedCount / totalStudents) * 100)
                            : 0}
                          %
                        </div>
                        <div className="text-xs text-slate-500">
                          {submittedCount}/{totalStudents}명
                        </div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <div className="text-slate-400 text-sm mb-1">평균 점수</div>
                        <div className="text-2xl font-bold text-white">{avgScore}점</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-4">
                        <div className="text-slate-400 text-sm mb-1">피드백</div>
                        <div className="text-2xl font-bold text-white">
                          {assignmentSubmissions.filter((s) => s.feedback).length}개
                        </div>
                      </div>
                    </div>

                    {/* 펼치기 버튼 */}
                    <button
                      onClick={() => toggleExpand(assignment.id)}
                      className="w-full flex items-center justify-center gap-2 py-2 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          제출 목록 접기
                        </>
                      ) : (
                        <>
                          <ChevronRight className="w-4 h-4" />
                          제출 목록 보기
                        </>
                      )}
                    </button>
                  </div>

                  {/* 제출 목록 */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden border-t border-slate-700/50"
                      >
                        <div className="p-5 space-y-3">
                          {assignmentSubmissions.length === 0 ? (
                            <div className="text-center py-8 text-slate-500">
                              아직 제출한 학생이 없습니다
                            </div>
                          ) : (
                            assignmentSubmissions.map((submission) => (
                              <div
                                key={submission.id}
                                className="bg-slate-900/50 rounded-xl p-4 flex items-center justify-between"
                              >
                                <div className="flex-1">
                                  <div className="font-bold text-white mb-1">
                                    {submission.studentName}
                                  </div>
                                  <div className="text-sm text-slate-400">
                                    완료: {submission.completedMissions.length}/
                                    {submission.totalMissions} 미션 | 점수: {submission.score}점
                                  </div>
                                  <div className="text-xs text-slate-500 mt-1">
                                    제출: {new Date(submission.submittedAt).toLocaleString('ko-KR')}
                                  </div>
                                </div>
                                <button
                                  onClick={() => setSelectedStudent(submission)}
                                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                                    submission.feedback
                                      ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                                      : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20'
                                  }`}
                                >
                                  <MessageSquare className="w-4 h-4" />
                                  {submission.feedback ? '피드백 보기' : '피드백 작성'}
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* 과제 생성 모달 */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCreating(false)}
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
                <h3 className="text-xl font-bold text-white">새 과제 만들기</h3>
                <button
                  onClick={() => setIsCreating(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 내용 */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    과제 제목
                  </label>
                  <input
                    type="text"
                    value={newAssignment.title}
                    onChange={(e) =>
                      setNewAssignment((prev) => ({ ...prev, title: e.target.value }))
                    }
                    placeholder="예: 1주차 기초 미션"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    설명
                  </label>
                  <textarea
                    value={newAssignment.description}
                    onChange={(e) =>
                      setNewAssignment((prev) => ({ ...prev, description: e.target.value }))
                    }
                    placeholder="과제에 대한 설명을 입력하세요"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    마감일
                  </label>
                  <input
                    type="date"
                    value={newAssignment.dueDate}
                    onChange={(e) =>
                      setNewAssignment((prev) => ({ ...prev, dueDate: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">
                    미션 선택 ({newAssignment.missionIds.length}개 선택됨)
                  </label>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-xl max-h-64 overflow-y-auto">
                    {curriculum.map((unit: Unit) =>
                      unit.weeks.map((week: Week) => (
                        <div key={week.id} className="border-b border-slate-700/50 last:border-0">
                          <div className="px-4 py-2 bg-slate-800/50">
                            <div className="text-xs text-slate-500">{unit.title}</div>
                            <div className="text-sm font-medium text-white">{week.title}</div>
                          </div>
                          {week.missions.map((mission: Mission) => (
                            <label
                              key={mission.id}
                              className="flex items-center gap-3 px-4 py-2 hover:bg-slate-800/50 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={newAssignment.missionIds.includes(mission.id)}
                                onChange={() => toggleMissionSelection(mission.id)}
                                className="w-4 h-4 rounded border-slate-600 text-indigo-500 focus:ring-indigo-500"
                              />
                              <span className="text-sm text-slate-300">{mission.title}</span>
                            </label>
                          ))}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* 푸터 */}
              <div className="p-6 border-t border-slate-700 flex gap-3">
                <button
                  onClick={() => setIsCreating(false)}
                  className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors"
                >
                  취소
                </button>
                <button
                  onClick={handleCreateAssignment}
                  className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all"
                >
                  과제 만들기
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 피드백 모달 */}
      <AnimatePresence>
        {selectedStudent && authUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedStudent.studentName} 학생
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      점수: {selectedStudent.score}점 | 완료: {selectedStudent.completedMissions.length}/
                      {selectedStudent.totalMissions} 미션
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedStudent(null)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <TeacherFeedback
                  assignmentId={selectedStudent.assignmentId}
                  studentId={selectedStudent.studentId}
                  studentName={selectedStudent.studentName}
                  teacherId={authUser.uid}
                  existingFeedback={selectedStudent.feedback}
                  onFeedbackSubmitted={async () => {
                    await loadSubmissions(selectedStudent.assignmentId);
                    setSelectedStudent(null);
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeacherAssignments;

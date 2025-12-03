const fs = require('fs');
const content = `import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Users, CheckCircle, Clock, Mail, Building, Calendar, RefreshCw,
  AlertCircle, UserCheck, UserX, LogOut, School, Trash2, ChevronDown, ChevronUp, Search, GraduationCap,
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { getAllClasses, getApprovedTeachers, deleteClassRoom, deleteStudent, getClassStudents } from '../services/authService';
import type { AuthUser, ClassRoom, Teacher } from '../types';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { authUser, pendingTeachers, loadPendingTeachers, approveTeacherAccount, rejectTeacherAccount, isLoading, logout } = useAuthStore();

  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'classes'>('pending');
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [actionResult, setActionResult] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [approvedTeachers, setApprovedTeachers] = useState<Teacher[]>([]);
  const [allClasses, setAllClasses] = useState<ClassRoom[]>([]);
  const [expandedClassId, setExpandedClassId] = useState<string | null>(null);
  const [classStudents, setClassStudents] = useState<Record<string, AuthUser[]>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingClasses, setLoadingClasses] = useState(false);
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  useEffect(() => {
    if (!authUser || authUser.role !== 'admin') { navigate('/login'); return; }
    loadPendingTeachers();
    loadApprovedTeachers();
    loadAllClasses();
  }, [authUser, navigate, loadPendingTeachers]);

  const loadApprovedTeachers = async () => {
    setLoadingTeachers(true);
    try { const teachers = await getApprovedTeachers(); setApprovedTeachers(teachers); }
    catch (error) { console.error('Error:', error); }
    finally { setLoadingTeachers(false); }
  };

  const loadAllClasses = async () => {
    setLoadingClasses(true);
    try { const classes = await getAllClasses(); setAllClasses(classes); }
    catch (error) { console.error('Error:', error); }
    finally { setLoadingClasses(false); }
  };

  const handleApprove = async (teacherId: string, teacherName: string) => {
    setProcessingId(teacherId);
    setActionResult(null);
    const success = await approveTeacherAccount(teacherId);
    if (success) { setActionResult({ type: 'success', message: \`\${teacherName} 선생님 승인 완료\` }); loadApprovedTeachers(); }
    else { setActionResult({ type: 'error', message: '승인 처리 중 오류' }); }
    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleReject = async (teacherId: string, teacherName: string) => {
    if (!confirm(\`\${teacherName} 선생님 가입을 거절하시겠습니까?\`)) return;
    setProcessingId(teacherId);
    setActionResult(null);
    const success = await rejectTeacherAccount(teacherId);
    if (success) { setActionResult({ type: 'success', message: \`\${teacherName} 선생님 가입 거절\` }); }
    else { setActionResult({ type: 'error', message: '거절 처리 중 오류' }); }
    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleDeleteClass = async (classId: string, className: string) => {
    if (!confirm(\`"\${className}" 학급과 모든 학생을 삭제하시겠습니까?\`)) return;
    setProcessingId(classId);
    try {
      const result = await deleteClassRoom(classId);
      if (result.success) { setActionResult({ type: 'success', message: \`\${className} 학급 삭제 완료 (학생 \${result.deletedStudents}명)\` }); loadAllClasses(); }
      else { throw new Error(result.error); }
    } catch (error) { setActionResult({ type: 'error', message: error.message || '학급 삭제 중 오류' }); }
    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const handleDeleteStudent = async (studentId: string, studentName: string, classId: string) => {
    if (!confirm(\`"\${studentName}" 학생을 삭제하시겠습니까?\`)) return;
    setProcessingId(studentId);
    try {
      const result = await deleteStudent(studentId, classId);
      if (result.success) {
        setActionResult({ type: 'success', message: \`\${studentName} 학생 삭제 완료\` });
        setClassStudents(prev => ({ ...prev, [classId]: prev[classId]?.filter(s => s.uid !== studentId) || [] }));
        loadAllClasses();
      } else { throw new Error(result.error); }
    } catch (error) { setActionResult({ type: 'error', message: error.message || '학생 삭제 중 오류' }); }
    setProcessingId(null);
    setTimeout(() => setActionResult(null), 3000);
  };

  const toggleClassExpand = async (classId: string) => {
    if (expandedClassId === classId) { setExpandedClassId(null); }
    else {
      setExpandedClassId(classId);
      if (!classStudents[classId]) {
        try { const students = await getClassStudents(classId); setClassStudents(prev => ({ ...prev, [classId]: students })); }
        catch (error) { console.error('Error:', error); }
      }
    }
  };

  const handleLogout = async () => { await logout(); navigate('/login'); };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  const filteredClasses = allClasses.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.teacherName.toLowerCase().includes(searchQuery.toLowerCase()));

  if (!authUser || authUser.role !== 'admin') return null;
  const totalStudents = allClasses.reduce((sum, c) => sum + c.studentIds.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="bg-slate-800/50 border-b border-slate-700/50 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center"><Shield className="w-5 h-5 text-white" /></div>
              <div><h1 className="text-xl font-bold text-white">관리자 대시보드</h1><p className="text-sm text-slate-400">{authUser.displayName} 관리자</p></div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { loadPendingTeachers(); loadApprovedTeachers(); loadAllClasses(); }} disabled={isLoading || loadingClasses || loadingTeachers} className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-xl text-slate-300 transition-colors disabled:opacity-50">
                <RefreshCw className={\`w-4 h-4 \${(isLoading || loadingClasses || loadingTeachers) ? 'animate-spin' : ''}\`} />새로고침
              </button>
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl transition-colors"><LogOut className="w-4 h-4" />로그아웃</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence>
          {actionResult && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className={\`mb-6 p-4 rounded-xl flex items-center gap-3 \${actionResult.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : '

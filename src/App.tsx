import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { AppShell } from './components/Layout';
import { useSettingsStore } from './stores/settingsStore';
import { useAuthStore } from './stores/authStore';

// Pages
import Home from './pages/Home';
import Learn from './pages/Learn';
import Mission from './pages/Mission';
import Portfolio from './pages/Portfolio';

// Mission 래퍼 - missionId 변경 시 컴포넌트 완전 리마운트
const MissionWrapper: React.FC = () => {
  const { missionId } = useParams();
  return <Mission key={missionId} />;
};
import VibeCoding from './pages/VibeCoding';
import Games from './pages/Games';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Achievements from './pages/Achievements';
import AITutor from './pages/AITutor';
import AvatarCustomize from './pages/AvatarCustomize';
import MyRoom from './pages/MyRoom';
import Analytics from './pages/Analytics';
import Practice from './pages/Practice';

// Auth Pages
import Login from './pages/Login';
import RegisterStudent from './pages/RegisterStudent';
import RegisterTeacher from './pages/RegisterTeacher';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherAnalytics from './pages/TeacherAnalytics';
import AdminDashboard from './pages/AdminDashboard';

// 보호된 라우트 컴포넌트
const ProtectedRoute: React.FC<{ children: React.ReactNode; allowedRoles?: ('student' | 'teacher' | 'admin')[] }> = ({ children, allowedRoles }) => {
  const { isAuthenticated, authUser, isLoading } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">로딩 중...</p>
        </div>
      </div>
    );
  }

  // authUser가 없으면 레거시 데이터 - 로그인 페이지로 보내기
  if (!isAuthenticated || !authUser) {
    // 레거시 데이터 정리
    localStorage.removeItem('codequest-user');
    localStorage.removeItem('codequest-progress');
    localStorage.removeItem('codequest-auth');
    localStorage.removeItem('codequest-settings');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 역할 확인 (승인되지 않은 선생님은 대기 페이지로)
  if (authUser?.role === 'teacher' && authUser?.approvalStatus !== 'approved') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center max-w-md p-8 bg-slate-800 rounded-2xl border border-slate-700">
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-white mb-2">승인 대기 중</h2>
          <p className="text-slate-400 mb-4">
            선생님 계정이 관리자 승인을 기다리고 있습니다.<br />
            승인되면 이메일로 알려드립니다.
          </p>
          <button
            onClick={() => useAuthStore.getState().logout()}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    );
  }

  // 역할 기반 접근 제어
  if (allowedRoles && authUser && !allowedRoles.includes(authUser.role)) {
    if (authUser.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else if (authUser.role === 'teacher') {
      return <Navigate to="/teacher" replace />;
    } else {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

// 공개 라우트
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, authUser, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && authUser) {
    if (authUser.role === 'admin') {
      return <Navigate to="/admin" replace />;
    } else if (authUser.role === 'teacher' && authUser.approvalStatus === 'approved') {
      return <Navigate to="/teacher" replace />;
    } else if (authUser.role === 'student') {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  const initializeApiKey = useSettingsStore((state) => state.initializeApiKey);
  const initAuth = useAuthStore((state) => state.initAuth);

  useEffect(() => {
    initializeApiKey();
    initAuth();
  }, [initializeApiKey, initAuth]);

  return (
    <AppShell>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register/student" element={<PublicRoute><RegisterStudent /></PublicRoute>} />
        <Route path="/register/teacher" element={<PublicRoute><RegisterTeacher /></PublicRoute>} />

        {/* Student Routes */}
        <Route path="/" element={<ProtectedRoute allowedRoles={['student']}><Home /></ProtectedRoute>} />
        <Route path="/learn" element={<ProtectedRoute allowedRoles={['student']}><Learn /></ProtectedRoute>} />
        <Route path="/learn/:unitId" element={<ProtectedRoute allowedRoles={['student']}><Learn /></ProtectedRoute>} />
        <Route path="/learn/:unitId/:weekId" element={<ProtectedRoute allowedRoles={['student']}><Learn /></ProtectedRoute>} />
        <Route path="/mission/:missionId" element={<ProtectedRoute allowedRoles={['student']}><MissionWrapper /></ProtectedRoute>} />
        <Route path="/vibe-coding" element={<ProtectedRoute allowedRoles={['student']}><VibeCoding /></ProtectedRoute>} />
        <Route path="/games" element={<ProtectedRoute allowedRoles={['student']}><Games /></ProtectedRoute>} />
        <Route path="/ai-tutor" element={<ProtectedRoute allowedRoles={['student']}><AITutor /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute allowedRoles={['student']}><Profile /></ProtectedRoute>} />
        <Route path="/achievements" element={<ProtectedRoute allowedRoles={['student']}><Achievements /></ProtectedRoute>} />
        <Route path="/portfolio" element={<ProtectedRoute allowedRoles={['student']}><Portfolio /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute allowedRoles={['student']}><Settings /></ProtectedRoute>} />
        <Route path="/avatar" element={<ProtectedRoute allowedRoles={['student']}><AvatarCustomize /></ProtectedRoute>} />
        <Route path="/myroom" element={<ProtectedRoute allowedRoles={['student']}><MyRoom /></ProtectedRoute>} />
        <Route path="/analytics" element={<ProtectedRoute allowedRoles={['student']}><Analytics /></ProtectedRoute>} />
        <Route path="/practice" element={<ProtectedRoute allowedRoles={['student']}><Practice /></ProtectedRoute>} />
        <Route path="/mission/advanced/:missionId" element={<ProtectedRoute allowedRoles={['student']}><MissionWrapper /></ProtectedRoute>} />

        {/* Teacher Routes */}
        <Route path="/teacher" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/teacher/analytics" element={<ProtectedRoute allowedRoles={['teacher']}><TeacherAnalytics /></ProtectedRoute>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminDashboard /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AppShell>
  );
};

export default App;

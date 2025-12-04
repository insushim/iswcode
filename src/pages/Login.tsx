import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, LogIn, AlertCircle, Sparkles, Code2, Zap, BookOpen, ArrowRight, GraduationCap } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { AppLogo } from '../components/Common';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, authUser } = useAuthStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    const success = await login(email, password);
    if (success) {
      const user = useAuthStore.getState().authUser;
      if (user?.role === 'admin') {
        navigate('/admin');
      } else if (user?.role === 'teacher') {
        navigate('/teacher');
      } else {
        navigate('/');
      }
    }
  };

  const features = [
    { icon: Code2, label: '52주 커리큘럼', desc: '체계적인 코딩 학습' },
    { icon: Sparkles, label: 'AI 튜터', desc: '개인 맞춤형 학습' },
    { icon: Zap, label: '실시간 코딩', desc: '바로 실행하고 확인' },
    { icon: BookOpen, label: '미니 게임', desc: '재미있는 코딩 게임' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex overflow-hidden">
      {/* 배경 애니메이션 요소들 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 그라데이션 오브 */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/30 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-600/15 to-rose-600/10 rounded-full blur-3xl"
        />

        {/* 그리드 오버레이 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* 플로팅 코드 아이콘들 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-20, -200],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'easeOut',
            }}
            className="absolute text-indigo-400/20"
            style={{
              left: `${15 + i * 15}%`,
              top: '80%',
            }}
          >
            <Code2 className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* 왼쪽: 브랜딩 영역 (데스크톱) */}
      <div className="hidden lg:flex lg:w-1/2 relative z-10 p-12 flex-col justify-between">
        <div>
          {/* 로고 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <AppLogo size="md" className="ring-4 ring-white/10" />
            <div>
              <h1 className="text-3xl font-black text-white tracking-tight">코딩마루</h1>
              <p className="text-indigo-300 text-sm font-medium">1년 완성 코딩 학습</p>
            </div>
          </motion.div>
        </div>

        {/* 중앙 콘텐츠 */}
        <div className="flex-1 flex flex-col justify-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              코딩의 세계로<br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                떠나볼까요?
              </span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              블록 코딩부터 Python, JavaScript까지<br />
              52주 동안 체계적으로 배우는 코딩 교육 플랫폼
            </p>
          </motion.div>

          {/* 기능 카드들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 mt-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all group cursor-default"
              >
                <div className="w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                  <feature.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-white font-bold mb-1">{feature.label}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 하단 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-500 text-sm"
        >
          초등학생을 위한 프리미엄 코딩 교육
        </motion.p>
      </div>

      {/* 오른쪽: 로그인 폼 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* 모바일 로고 */}
          <div className="lg:hidden text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-block mb-4"
            >
              <AppLogo size="lg" />
            </motion.div>
            <h1 className="text-3xl font-black text-white mb-2">코딩마루</h1>
            <p className="text-slate-400">1년 완성 코딩 학습 플랫폼</p>
          </div>

          {/* 로그인 카드 */}
          <div className="bg-slate-900/50 backdrop-blur-2xl rounded-3xl border border-slate-700/50 p-8 shadow-2xl shadow-black/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">로그인</h2>
              <p className="text-slate-400">계속하려면 로그인하세요</p>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-400 text-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">이메일 또는 아이디</label>
                <div className={`relative transition-all duration-300 ${focusedInput === 'email' ? 'scale-[1.02]' : ''}`}>
                  <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedInput === 'email' ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="이메일 또는 학생 아이디"
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-slate-800 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">비밀번호</label>
                <div className={`relative transition-all duration-300 ${focusedInput === 'password' ? 'scale-[1.02]' : ''}`}>
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedInput === 'password' ? 'text-indigo-400' : 'text-slate-500'}`} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-14 py-4 bg-slate-800/50 border-2 border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:bg-slate-800 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 text-lg"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    로그인
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-center text-slate-400 text-sm mb-4 flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4" />
                선생님이신가요?
              </p>
              <Link to="/register/teacher">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/30 text-blue-400 font-semibold rounded-xl text-center transition-all flex items-center justify-center gap-2"
                >
                  <span>선생님 회원가입</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
              <p className="text-center text-slate-500 text-xs mt-4">
                학생 계정은 담당 선생님이 생성합니다
              </p>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-slate-500 text-xs mt-6 lg:hidden"
          >
            초등학생을 위한 프리미엄 코딩 교육
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

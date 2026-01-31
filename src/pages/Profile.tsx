import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Trophy, Target, Flame, Calendar, Clock,
  Star, BookOpen, Code, Award, TrendingUp, Zap, BarChart3, MessageSquare
} from 'lucide-react';
import { Card, ProgressRing, Button } from '../components/Common';
import AchievementReport from '../components/AchievementReport';
import { useUserStore } from '../stores/userStore';
import { useProgressStore } from '../stores/progressStore';
import { useAuthStore } from '../stores/authStore';
import { allUnits, badges } from '../data/curriculum';
import { getStudentFeedbacks, markFeedbackAsRead } from '../services/assignmentService';
import type { TeacherFeedback } from '../types';

const Profile: React.FC = () => {
  const [showReport, setShowReport] = useState(false);
  const { user } = useUserStore();
  const { authUser } = useAuthStore();
  const { progress, activities } = useProgressStore();
  const expProgress = useUserStore((state) => state.getExpProgress());
  const [feedbacks, setFeedbacks] = useState<TeacherFeedback[]>([]);
  const [expandedFeedback, setExpandedFeedback] = useState<string | null>(null);

  // 피드백 로드
  useEffect(() => {
    if (authUser?.role === 'student') {
      loadFeedbacks();
    }
  }, [authUser]);

  const loadFeedbacks = async () => {
    if (!authUser) return;
    const data = await getStudentFeedbacks(authUser.uid);
    setFeedbacks(data);
  };

  const handleReadFeedback = async (feedbackId: string) => {
    await markFeedbackAsRead(feedbackId);
    loadFeedbacks();
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-500">로그인이 필요합니다.</p>
      </div>
    );
  }

  const completedMissions = progress.completedMissions.length;
  const totalMissions = allUnits.reduce(
    (sum, unit) => sum + unit.weeks.reduce((wSum, w) => wSum + w.missions.length, 0),
    0
  );

  const earnedBadges = badges.filter(b => progress.earnedBadges.includes(b.id));
  const totalLearningTime = user.stats.totalTimeSpent;
  const hours = Math.floor(totalLearningTime / 3600);
  const minutes = Math.floor((totalLearningTime % 3600) / 60);

  const stats = [
    { icon: BookOpen, label: '완료 미션', value: completedMissions, color: 'blue' },
    { icon: Trophy, label: '획득 뱃지', value: earnedBadges.length, color: 'purple' },
    { icon: Flame, label: '최장 연속', value: `${user.stats.longestStreak}일`, color: 'orange' },
    { icon: Clock, label: '총 학습 시간', value: `${hours}시간 ${minutes}분`, color: 'green' },
    { icon: Target, label: '정확도', value: `${user.stats.averageAccuracy}%`, color: 'cyan' },
    { icon: Star, label: '총 경험치', value: user.totalExp.toLocaleString(), color: 'yellow' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Tab Navigation */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={() => setShowReport(false)}
          className={`px-4 py-3 font-medium border-b-2 transition-colors ${
            !showReport
              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            프로필
          </div>
        </button>
        <button
          onClick={() => setShowReport(true)}
          className={`px-4 py-3 font-medium border-b-2 transition-colors ${
            showReport
              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            성취도 리포트
          </div>
        </button>
      </div>

      {showReport ? (
        <AchievementReport />
      ) : (
        <>
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-4xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-dark-surface">
                {user.level}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-primary-600 dark:text-primary-400 font-medium">{user.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                  <Flame className="w-4 h-4 text-orange-500" />
                  {user.streak}일 연속
                </span>
                <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {new Date(user.createdAt).toLocaleDateString('ko-KR')} 가입
                </span>
              </div>
            </div>

            {/* Level Progress */}
            <div className="flex items-center gap-4">
              <ProgressRing progress={expProgress.percentage} size={100}>
                <div className="text-center">
                  <p className="text-2xl font-bold">{user.level}</p>
                  <p className="text-xs text-slate-500">레벨</p>
                </div>
              </ProgressRing>
              <div>
                <p className="text-sm text-slate-500">다음 레벨까지</p>
                <p className="font-bold text-lg">{expProgress.next - expProgress.current} XP</p>
                <div className="progress-bar w-24 mt-1">
                  <div className="progress-bar-fill" style={{ width: `${expProgress.percentage}%` }} />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-4 text-center">
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <p className="text-lg font-bold">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            획득한 뱃지
          </h2>
          {earnedBadges.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {earnedBadges.map((badge) => (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 flex items-center justify-center text-3xl">
                    {badge.icon}
                  </div>
                  <p className="text-xs font-medium truncate">{badge.name}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>아직 획득한 뱃지가 없어요</p>
              <p className="text-sm">미션을 완료해서 뱃지를 모아보세요!</p>
            </div>
          )}
        </Card>

        {/* Learning Progress by Unit */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            유닛별 진행도
          </h2>
          <div className="space-y-3">
            {allUnits.slice(0, 5).map((unit) => {
              const unitProgress = progress.unitsProgress[unit.id];
              const progressPercent = unitProgress
                ? Math.round((unitProgress.missionsCompleted / unit.totalMissions) * 100)
                : 0;

              return (
                <div key={unit.id}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm flex items-center gap-2">
                      <span>{unit.icon}</span>
                      <span className="truncate">{unit.title}</span>
                    </span>
                    <span className="text-sm font-medium">{progressPercent}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Teacher Feedbacks */}
        {authUser?.role === 'student' && feedbacks.length > 0 && (
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-500" />
              선생님 피드백
              {feedbacks.filter(f => !f.isRead).length > 0 && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  {feedbacks.filter(f => !f.isRead).length}
                </span>
              )}
            </h2>
            <div className="space-y-3">
              {feedbacks.slice(0, 5).map((feedback) => (
                <div
                  key={feedback.id}
                  className={`p-4 rounded-xl border transition-all ${
                    !feedback.isRead
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                      : 'bg-slate-50 dark:bg-dark-surfaceHover border-slate-200 dark:border-slate-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= feedback.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    {!feedback.isRead && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                        새 피드백
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setExpandedFeedback(
                        expandedFeedback === feedback.id ? null : feedback.id
                      );
                      if (!feedback.isRead) {
                        handleReadFeedback(feedback.id);
                      }
                    }}
                    className="w-full text-left"
                  >
                    <p className={`text-sm ${
                      expandedFeedback === feedback.id
                        ? 'line-clamp-none'
                        : 'line-clamp-2'
                    }`}>
                      {feedback.content}
                    </p>
                  </button>
                  <p className="text-xs text-slate-400 mt-2">
                    {new Date(feedback.createdAt).toLocaleString('ko-KR')}
                  </p>
                </div>
              ))}
            </div>
            {feedbacks.length > 5 && (
              <p className="text-center text-sm text-slate-500 mt-4">
                총 {feedbacks.length}개의 피드백
              </p>
            )}
          </Card>
        )}

        {/* Recent Activity */}
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            최근 활동
          </h2>
          {activities.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {activities.slice(0, 8).map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-dark-surfaceHover rounded-lg"
                >
                  <span className="text-2xl">{activity.icon || '📝'}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{activity.title}</p>
                    <p className="text-sm text-slate-500">{activity.description}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {new Date(activity.timestamp).toLocaleDateString('ko-KR')}
                    </p>
                  </div>
                  {activity.exp && (
                    <span className="text-sm font-medium text-primary-600">
                      +{activity.exp} XP
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <Code className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>아직 활동 기록이 없어요</p>
              <p className="text-sm">첫 미션을 시작해보세요!</p>
            </div>
          )}
        </Card>
      </div>
        </>
      )}
    </div>
  );
};

export default Profile;

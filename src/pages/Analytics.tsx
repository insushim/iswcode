import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Flame,
  Trophy,
  Target,
  BookOpen,
  Code2,
  Zap,
  Award,
  Activity,
  CheckCircle2,
  Clock,
  Star,
} from 'lucide-react';
import { useUserStore } from '../stores/userStore';
import { useProgressStore } from '../stores/progressStore';
import { allUnits } from '../data/curriculum';

// Stat Card Component
const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  colorTheme,
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  colorTheme: 'violet' | 'orange' | 'yellow' | 'green' | 'blue' | 'cyan';
}) => {
  const themes = {
    violet: { bg: 'from-violet-500 to-purple-500', icon: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
    orange: { bg: 'from-orange-500 to-red-500', icon: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
    yellow: { bg: 'from-yellow-500 to-amber-500', icon: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    green: { bg: 'from-emerald-500 to-teal-500', icon: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    blue: { bg: 'from-blue-500 to-indigo-500', icon: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    cyan: { bg: 'from-cyan-500 to-blue-500', icon: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  };

  const theme = themes[colorTheme];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl border ${theme.icon}`}>
          <Icon size={24} />
        </div>
        <div className={`h-1 w-16 bg-gradient-to-r ${theme.bg} rounded-full opacity-50 group-hover:opacity-100 transition-opacity`}></div>
      </div>
      <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
      <div className="text-sm font-medium text-slate-400">{title}</div>
      {subtitle && <div className="text-xs text-slate-500 mt-1">{subtitle}</div>}
    </motion.div>
  );
};

// Progress Bar Component
const ProgressBar = ({
  label,
  current,
  total,
  color = 'violet'
}: {
  label: string;
  current: number;
  total: number;
  color?: 'violet' | 'blue' | 'green' | 'yellow' | 'orange';
}) => {
  const percentage = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  const colors = {
    violet: 'from-violet-500 to-purple-500',
    blue: 'from-blue-500 to-indigo-500',
    green: 'from-emerald-500 to-teal-500',
    yellow: 'from-yellow-500 to-amber-500',
    orange: 'from-orange-500 to-red-500',
  };

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-bold text-slate-300">{label}</span>
        <span className="text-sm font-bold text-slate-500">
          {current}/{total} ({percentage.toFixed(0)}%)
        </span>
      </div>
      <div className="relative w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full bg-gradient-to-r ${colors[color]} rounded-full`}
        />
      </div>
    </div>
  );
};

// Activity Item Component
const ActivityItem = ({ activity }: { activity: any }) => {
  const getActivityColor = (type: string) => {
    switch (type) {
      case 'mission': return 'text-violet-400 bg-violet-500/20 border-violet-500/30';
      case 'project': return 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30';
      case 'badge': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'level': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'achievement': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      default: return 'text-slate-400 bg-slate-500/20 border-slate-500/30';
    }
  };

  const timeAgo = (timestamp: string) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now.getTime() - past.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}일 전`;
    if (diffHours > 0) return `${diffHours}시간 전`;
    if (diffMins > 0) return `${diffMins}분 전`;
    return '방금 전';
  };

  return (
    <div className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all">
      <div className={`p-2 rounded-lg border ${getActivityColor(activity.type)}`}>
        <span className="text-xl">{activity.icon || '✨'}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">{activity.title}</h4>
            <p className="text-xs text-slate-400 line-clamp-1">{activity.description}</p>
          </div>
          {activity.exp && (
            <span className="text-xs font-bold text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded-lg border border-yellow-500/20 whitespace-nowrap">
              +{activity.exp} XP
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
          <Clock size={12} />
          <span>{timeAgo(activity.timestamp)}</span>
        </div>
      </div>
    </div>
  );
};

const Analytics: React.FC = () => {
  const { user } = useUserStore();
  const { progress, activities, achievements, badges } = useProgressStore();

  // Calculate stats
  const stats = useMemo(() => {
    const completedMissions = progress.completedMissions.length;
    const completedProjects = progress.completedProjects.length;
    const earnedBadges = progress.earnedBadges.length;

    return {
      completedMissions,
      streak: user?.streak || 0,
      totalExp: user?.totalExp || 0,
      completedProjects,
      earnedBadges,
      totalBadges: badges.length,
    };
  }, [progress, user, badges]);

  // Calculate weekly activity (last 7 days)
  const weeklyData = useMemo(() => {
    const today = new Date();
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split('T')[0];

      // Count missions completed on this date
      const dayActivities = activities.filter(a =>
        a.type === 'mission' && a.timestamp.startsWith(dateString)
      );

      weekData.push({
        day: ['일', '월', '화', '수', '목', '금', '토'][date.getDay()],
        count: dayActivities.length,
        date: dateString,
      });
    }

    return weekData;
  }, [activities]);

  const maxWeeklyCount = Math.max(...weeklyData.map(d => d.count), 1);

  // Calculate unit progress
  const unitProgress = useMemo(() => {
    return allUnits.map(unit => {
      const totalMissions = unit.weeks.reduce((sum, week) => sum + week.missions.length, 0);
      const unitCompletedMissions = unit.weeks.reduce((sum, week) => {
        return sum + week.missions.filter(m => progress.completedMissions.includes(m.id)).length;
      }, 0);

      return {
        id: unit.id,
        number: unit.number,
        title: unit.title,
        icon: unit.icon,
        completed: unitCompletedMissions,
        total: totalMissions,
        percentage: totalMissions > 0 ? (unitCompletedMissions / totalMissions) * 100 : 0,
      };
    });
  }, [progress]);

  // Calculate skill levels based on completed missions
  const skillLevels = useMemo(() => {
    const pythonMissions = progress.completedMissions.filter(id =>
      id.includes('python') || id.includes('u3') || id.includes('u4')
    ).length;

    const htmlMissions = progress.completedMissions.filter(id =>
      id.includes('html') || id.includes('u5')
    ).length;

    const cssMissions = progress.completedMissions.filter(id =>
      id.includes('css') || id.includes('u5')
    ).length;

    const jsMissions = progress.completedMissions.filter(id =>
      id.includes('javascript') || id.includes('js') || id.includes('u6')
    ).length;

    const blockMissions = progress.completedMissions.filter(id =>
      id.includes('block') || id.includes('u2')
    ).length;

    return {
      Python: Math.min(pythonMissions * 2, 100),
      'HTML': Math.min(htmlMissions * 3, 100),
      'CSS': Math.min(cssMissions * 3, 100),
      'JavaScript': Math.min(jsMissions * 2, 100),
      'Block Coding': Math.min(blockMissions * 2, 100),
    };
  }, [progress]);

  // Get earned badges
  const earnedBadges = useMemo(() => {
    return badges.filter(badge => progress.earnedBadges.includes(badge.id));
  }, [badges, progress]);

  // Get next badge to earn
  const nextBadge = useMemo(() => {
    return badges.find(badge => !progress.earnedBadges.includes(badge.id));
  }, [badges, progress]);

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 flex items-center gap-3">
          <Activity className="w-8 h-8 text-violet-400" />
          학습 분석 대시보드
        </h1>
        <p className="text-slate-400 font-medium">나의 학습 여정을 시각적으로 확인하세요</p>
      </motion.div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="완료한 미션"
          value={stats.completedMissions}
          subtitle="누적 미션 수"
          icon={CheckCircle2}
          colorTheme="violet"
        />
        <StatCard
          title="연속 학습일"
          value={`${stats.streak}일`}
          subtitle="스트릭 유지 중"
          icon={Flame}
          colorTheme="orange"
        />
        <StatCard
          title="총 획득 EXP"
          value={stats.totalExp.toLocaleString()}
          subtitle={`Level ${user?.level || 1}`}
          icon={Zap}
          colorTheme="yellow"
        />
        <StatCard
          title="완료한 프로젝트"
          value={stats.completedProjects}
          subtitle="프로젝트 달성"
          icon={Target}
          colorTheme="green"
        />
      </div>

      {/* Weekly Activity Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-violet-400" />
          주간 학습 활동
        </h2>
        <div className="flex items-end justify-between gap-3 h-48">
          {weeklyData.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="flex-1 w-full flex items-end justify-center">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(day.count / maxWeeklyCount) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full bg-gradient-to-t from-violet-500 to-purple-500 rounded-t-lg min-h-[4px] relative group cursor-pointer hover:from-violet-400 hover:to-purple-400 transition-colors"
                  title={`${day.date}: ${day.count}개 미션`}
                >
                  {day.count > 0 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {day.count}
                    </div>
                  )}
                </motion.div>
              </div>
              <div className="text-xs font-bold text-slate-400 mt-2">{day.day}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Unit Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-violet-400" />
          Unit별 진행률
        </h2>
        <div className="space-y-4">
          {unitProgress.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <ProgressBar
                label={`${unit.icon} Unit ${unit.number}: ${unit.title}`}
                current={unit.completed}
                total={unit.total}
                color={
                  index % 5 === 0 ? 'violet' :
                  index % 5 === 1 ? 'blue' :
                  index % 5 === 2 ? 'green' :
                  index % 5 === 3 ? 'yellow' : 'orange'
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Radar Chart (Simple Bar Version) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
      >
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-violet-400" />
          스킬 숙련도
        </h2>
        <div className="space-y-4">
          {Object.entries(skillLevels).map(([skill, level], index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-300">{skill}</span>
                <span className="text-sm font-bold text-violet-400">{level}%</span>
              </div>
              <div className="relative w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${level}%` }}
                  transition={{ duration: 1, delay: 0.1 * index, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-violet-400" />
            최근 활동
          </h2>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {activities.slice(0, 10).length > 0 ? (
              activities.slice(0, 10).map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="text-center py-12 text-slate-500">
                <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">아직 활동 내역이 없습니다</p>
                <p className="text-xs mt-1">미션을 완료하고 첫 활동을 기록해보세요!</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-800 p-6 rounded-2xl border border-slate-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-violet-400" />
              업적 & 뱃지
            </h2>
            <span className="text-sm font-bold text-violet-400">
              {stats.earnedBadges}/{stats.totalBadges}
            </span>
          </div>

          {/* Earned Badges */}
          {earnedBadges.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-400 mb-3">획득한 뱃지</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {earnedBadges.slice(0, 8).map((badge) => (
                  <motion.div
                    key={badge.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-700/50 p-3 rounded-xl border border-slate-600 text-center group cursor-pointer hover:border-violet-500/50 transition-colors"
                    title={badge.description}
                  >
                    <div className="text-3xl mb-1">{badge.icon}</div>
                    <div className="text-xs font-bold text-slate-300 line-clamp-1">
                      {badge.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Next Badge */}
          {nextBadge && (
            <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-700">
              <h3 className="text-sm font-bold text-slate-400 mb-3">다음 목표 뱃지</h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-slate-700 rounded-xl border border-slate-600 flex items-center justify-center text-3xl">
                  {nextBadge.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white mb-1">{nextBadge.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">{nextBadge.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-1/3" />
                    </div>
                    <span className="text-xs font-bold text-slate-500">{nextBadge.condition}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Progress */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-slate-400 mb-3">업적 진행도</h3>
            <div className="space-y-2">
              {achievements.slice(0, 3).map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-slate-700/30 p-3 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{achievement.icon}</span>
                      <span className="text-xs font-bold text-slate-300">{achievement.title}</span>
                    </div>
                    <span className="text-xs font-bold text-violet-400">
                      {achievement.progress}/{achievement.target}
                    </span>
                  </div>
                  <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all"
                      style={{ width: `${Math.min((achievement.progress / achievement.target) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;

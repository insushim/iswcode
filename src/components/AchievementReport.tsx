import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Trophy,
  Target,
  Calendar,
  Clock,
  Award,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Zap,
  Star,
  BarChart3,
} from 'lucide-react';
import { Card, ProgressRing } from './Common';
import { useUserStore } from '../stores/userStore';
import { useProgressStore } from '../stores/progressStore';
import { allUnits, getMissionById } from '../data/curriculum';

interface ConceptAnalysis {
  concept: string;
  totalMissions: number;
  completedMissions: number;
  perfectCount: number;
  accuracy: number;
}

interface LearningDay {
  date: string;
  missions: number;
}

const AchievementReport: React.FC = () => {
  const { user } = useUserStore();
  const { progress, badges, achievements } = useProgressStore();
  const expProgress = useUserStore((state) => state.getExpProgress());

  // Calculate concept-based analysis
  const conceptAnalysis = useMemo(() => {
    const conceptMap = new Map<string, ConceptAnalysis>();

    // Process all missions across all units
    allUnits.forEach((unit) => {
      unit.weeks.forEach((week) => {
        week.missions.forEach((mission) => {
          const concept = mission.concept || 'General';

          if (!conceptMap.has(concept)) {
            conceptMap.set(concept, {
              concept,
              totalMissions: 0,
              completedMissions: 0,
              perfectCount: 0,
              accuracy: 0,
            });
          }

          const data = conceptMap.get(concept)!;
          data.totalMissions++;

          if (progress.completedMissions.includes(mission.id)) {
            data.completedMissions++;
            // Check if completed with perfect score
            if (progress.completedMissions.includes(`${mission.id}_perfect`)) {
              data.perfectCount++;
            }
          }
        });
      });
    });

    // Calculate accuracy for each concept
    conceptMap.forEach((data) => {
      if (data.completedMissions > 0) {
        data.accuracy = Math.round((data.perfectCount / data.completedMissions) * 100);
      }
    });

    return Array.from(conceptMap.values()).filter(c => c.totalMissions > 0);
  }, [progress.completedMissions]);

  // Get top strengths and weaknesses
  const topStrengths = useMemo(() => {
    return conceptAnalysis
      .filter(c => c.completedMissions >= 3) // At least 3 missions completed
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, 3);
  }, [conceptAnalysis]);

  const weaknesses = useMemo(() => {
    return conceptAnalysis
      .filter(c => c.completedMissions >= 3 && c.accuracy < 70)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3);
  }, [conceptAnalysis]);

  // Calculate learning heatmap for last 30 days
  const learningHeatmap = useMemo(() => {
    const days: LearningDay[] = [];
    const today = new Date();

    for (let i = 29; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      // Count missions completed on this date (would need timestamp tracking in real app)
      days.push({
        date: dateStr,
        missions: 0, // Placeholder - would need activity timestamps
      });
    }

    return days;
  }, []);

  // Get earned and upcoming badges
  const earnedBadges = badges.filter(b => progress.earnedBadges.includes(b.id));
  const upcomingBadges = badges.filter(b => !progress.earnedBadges.includes(b.id)).slice(0, 3);

  // Calculate total stats
  const totalMissions = allUnits.reduce(
    (sum, unit) => sum + unit.weeks.reduce((wSum, w) => wSum + w.missions.length, 0),
    0
  );
  const completedMissions = progress.completedMissions.length;
  const completionRate = Math.round((completedMissions / totalMissions) * 100);

  // Calculate average accuracy
  const perfectMissions = progress.completedMissions.filter(m => m.includes('_perfect')).length;
  const averageAccuracy = completedMissions > 0
    ? Math.round((perfectMissions / completedMissions) * 100)
    : 0;

  // Calculate learning time
  const totalMinutes = user?.stats.totalTimeSpent ? Math.round(user.stats.totalTimeSpent / 60) : 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-slate-500">로그인이 필요합니다.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-primary-500" />
          학습 성취도 리포트
        </h2>
        <p className="text-slate-500 mt-1">나의 학습 현황을 한눈에 확인하세요</p>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl font-bold">{completedMissions}</p>
            <p className="text-sm text-slate-500">완료 미션</p>
            <p className="text-xs text-slate-400 mt-1">/ {totalMissions}개</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-2xl font-bold">{averageAccuracy}%</p>
            <p className="text-sm text-slate-500">평균 정답률</p>
            <p className="text-xs text-slate-400 mt-1">{perfectMissions}개 완벽</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-2xl font-bold">{hours}h {minutes}m</p>
            <p className="text-sm text-slate-500">누적 학습 시간</p>
            <p className="text-xs text-slate-400 mt-1">총 {totalMinutes}분</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card className="p-4 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-2xl font-bold">{user.level}</p>
            <p className="text-sm text-slate-500">현재 레벨</p>
            <p className="text-xs text-slate-400 mt-1">{expProgress.next - expProgress.current} XP 남음</p>
          </Card>
        </motion.div>
      </div>

      {/* Concept Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-500" />
            개념별 분석
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* All Concepts Progress */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                학습 진행 현황
              </h4>
              <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                {conceptAnalysis.map((concept) => {
                  const progress = concept.totalMissions > 0
                    ? Math.round((concept.completedMissions / concept.totalMissions) * 100)
                    : 0;

                  return (
                    <div key={concept.concept} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium truncate flex-1">{concept.concept}</span>
                        <span className="text-slate-500 ml-2">
                          {concept.completedMissions}/{concept.totalMissions}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              concept.accuracy >= 80
                                ? 'bg-green-500'
                                : concept.accuracy >= 60
                                ? 'bg-yellow-500'
                                : 'bg-orange-500'
                            }`}
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-500 w-12 text-right">
                          {concept.accuracy}% 정확
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Concept Performance Circles */}
            <div>
              <h4 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
                주요 개념 숙련도
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {conceptAnalysis.slice(0, 6).map((concept, index) => {
                  const completionRate = concept.totalMissions > 0
                    ? Math.round((concept.completedMissions / concept.totalMissions) * 100)
                    : 0;

                  return (
                    <motion.div
                      key={concept.concept}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="flex flex-col items-center"
                    >
                      <ProgressRing progress={completionRate} size={80} strokeWidth={6}>
                        <div className="text-center">
                          <p className="text-lg font-bold">{completionRate}%</p>
                        </div>
                      </ProgressRing>
                      <p className="text-xs font-medium mt-2 text-center truncate w-full">
                        {concept.concept}
                      </p>
                      <p className="text-xs text-slate-500">
                        {concept.completedMissions}/{concept.totalMissions}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Strengths and Weaknesses */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-green-500" />
              강점 개념 TOP 3
            </h3>
            {topStrengths.length > 0 ? (
              <div className="space-y-4">
                {topStrengths.map((concept, index) => (
                  <motion.div
                    key={concept.concept}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{concept.concept}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {concept.completedMissions}개 완료 · {concept.accuracy}% 정확도
                      </p>
                    </div>
                    <Star className="w-5 h-5 text-green-500" />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <Trophy className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">더 많은 미션을 완료하면</p>
                <p className="text-sm">강점을 확인할 수 있어요!</p>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              보완할 개념 TOP 3
            </h3>
            {weaknesses.length > 0 ? (
              <div className="space-y-4">
                {weaknesses.map((concept, index) => {
                  // Find missions to review
                  const reviewMissions = allUnits
                    .flatMap(u => u.weeks.flatMap(w => w.missions))
                    .filter(m => m.concept === concept.concept)
                    .slice(0, 2);

                  return (
                    <motion.div
                      key={concept.concept}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + index * 0.05 }}
                      className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{concept.concept}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {concept.completedMissions}개 완료 · {concept.accuracy}% 정확도
                          </p>
                        </div>
                      </div>
                      {reviewMissions.length > 0 && (
                        <div className="ml-11 mt-2 space-y-1">
                          <p className="text-xs font-medium text-orange-700 dark:text-orange-400">
                            복습 추천:
                          </p>
                          {reviewMissions.map(m => (
                            <p key={m.id} className="text-xs text-slate-600 dark:text-slate-400">
                              • {m.title}
                            </p>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">모든 개념을 잘 이해하고 있어요!</p>
                <p className="text-sm">계속 열심히 공부해보세요 🎉</p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>

      {/* Learning Heatmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-500" />
            최근 30일 학습 현황
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-7 gap-2">
              {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <div key={day} className="text-xs text-center text-slate-500 font-medium">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {learningHeatmap.map((day, index) => {
                const dayOfWeek = new Date(day.date).getDay();
                const intensity = Math.min(day.missions / 5, 1); // 0-1 scale

                return (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.01 }}
                    className={`aspect-square rounded-md ${
                      day.missions === 0
                        ? 'bg-slate-100 dark:bg-slate-800'
                        : day.missions <= 2
                        ? 'bg-blue-200 dark:bg-blue-900/50'
                        : day.missions <= 5
                        ? 'bg-blue-400 dark:bg-blue-700'
                        : 'bg-blue-600 dark:bg-blue-500'
                    }`}
                    title={`${day.date}: ${day.missions}개 미션`}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-slate-500">
              <span>적음</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-slate-100 dark:bg-slate-800" />
                <div className="w-3 h-3 rounded-sm bg-blue-200 dark:bg-blue-900/50" />
                <div className="w-3 h-3 rounded-sm bg-blue-400 dark:bg-blue-700" />
                <div className="w-3 h-3 rounded-sm bg-blue-600 dark:bg-blue-500" />
              </div>
              <span>많음</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Badges and Achievements */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              획득한 배지 ({earnedBadges.length})
            </h3>
            {earnedBadges.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {earnedBadges.slice(0, 8).map((badge, index) => (
                  <motion.div
                    key={badge.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <div className={`w-14 h-14 mx-auto mb-2 rounded-xl flex items-center justify-center text-2xl ${
                      badge.rarity === 'legendary'
                        ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                        : badge.rarity === 'epic'
                        ? 'bg-gradient-to-br from-purple-400 to-pink-500'
                        : badge.rarity === 'rare'
                        ? 'bg-gradient-to-br from-blue-400 to-cyan-500'
                        : 'bg-gradient-to-br from-slate-300 to-slate-400'
                    }`}>
                      {badge.icon}
                    </div>
                    <p className="text-xs font-medium truncate">{badge.name}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500">
                <Award className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">아직 획득한 배지가 없어요</p>
              </div>
            )}
          </Card>
        </motion.div>

        {/* Upcoming Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              다음 도전 과제
            </h3>
            <div className="space-y-3">
              {achievements
                .filter(a => !a.completed)
                .slice(0, 3)
                .map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 + index * 0.05 }}
                    className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-sm text-slate-500">{achievement.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transition-all"
                              style={{
                                width: `${Math.min(100, (achievement.progress / achievement.target) * 100)}%`
                              }}
                            />
                          </div>
                          <span className="text-xs text-slate-500 font-medium">
                            {achievement.progress}/{achievement.target}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AchievementReport;

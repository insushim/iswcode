import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  debuggingMissions,
  codeReviewMissions,
  algorithmMissions,
  commonMistakesMissions,
  realWorldProjects,
  advancedMissionStats
} from '../data/curriculum';
import { useProgressStore } from '../stores/progressStore';
import type { Mission } from '../types';

type Category = 'all' | 'debugging' | 'codeReview' | 'algorithm' | 'commonMistakes' | 'realWorld';

const categories: { id: Category; label: string; icon: string; description: string; color: string }[] = [
  { id: 'all', label: '전체', icon: '📚', description: '모든 고급 연습', color: '#6366f1' },
  { id: 'debugging', label: '디버깅', icon: '🐛', description: '버그 찾기 & 수정하기', color: '#ef4444' },
  { id: 'codeReview', label: '코드 리뷰', icon: '🔍', description: '코드 읽기 & 분석', color: '#3b82f6' },
  { id: 'algorithm', label: '알고리즘', icon: '📊', description: '정렬 & 검색 시각화', color: '#10b981' },
  { id: 'commonMistakes', label: '흔한 실수', icon: '⚠️', description: '자주하는 실수 방지', color: '#f59e0b' },
  { id: 'realWorld', label: '실전 프로젝트', icon: '🚀', description: '실용적인 프로그램', color: '#8b5cf6' }
];

export default function Practice() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const { progress } = useProgressStore();

  const getMissionsByCategory = (category: Category): Mission[] => {
    switch (category) {
      case 'debugging': return debuggingMissions;
      case 'codeReview': return codeReviewMissions;
      case 'algorithm': return algorithmMissions;
      case 'commonMistakes': return commonMistakesMissions;
      case 'realWorld': return realWorldProjects;
      case 'all':
      default:
        return [
          ...debuggingMissions,
          ...codeReviewMissions,
          ...algorithmMissions,
          ...commonMistakesMissions,
          ...realWorldProjects
        ];
    }
  };

  const missions = getMissionsByCategory(selectedCategory);
  const completedCount = missions.filter(m => progress.completedMissions.includes(m.id)).length;

  const handleMissionClick = (mission: Mission) => {
    // Navigate to mission with special source indicator
    navigate(`/mission/advanced/${mission.id}`);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">입문</span>;
      case 'intermediate':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">중급</span>;
      case 'advanced':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-500/20 text-red-400">고급</span>;
      default:
        return null;
    }
  };

  const getPhaseBadge = (phase?: string) => {
    if (!phase) return null;
    switch (phase) {
      case 'use':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400">USE</span>;
      case 'modify':
        return <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400">MODIFY</span>;
      case 'create':
        return <span className="px-2 py-1 text-xs rounded-full bg-pink-500/20 text-pink-400">CREATE</span>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/learn" className="text-white/80 hover:text-white mb-4 inline-flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            학습으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-white mt-4">고급 연습 모드</h1>
          <p className="text-white/80 mt-2">
            AI가 추천하는 실력 향상 미션! 디버깅, 코드 리뷰, 알고리즘까지
          </p>
          <div className="flex items-center gap-4 mt-4 text-white/80">
            <span>총 {advancedMissionStats.total}개 미션</span>
            <span>|</span>
            <span className="text-green-400">{completedCount}개 완료</span>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-700 z-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white text-gray-900 font-semibold'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <span className={`text-xs ${selectedCategory === cat.id ? 'text-gray-600' : 'text-gray-500'}`}>
                    {getMissionsByCategory(cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Info */}
      {selectedCategory !== 'all' && (
        <div className="max-w-4xl mx-auto px-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl"
            style={{
              backgroundColor: `${categories.find(c => c.id === selectedCategory)?.color}20`,
              borderLeft: `4px solid ${categories.find(c => c.id === selectedCategory)?.color}`
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{categories.find(c => c.id === selectedCategory)?.icon}</span>
              <div>
                <h3 className="text-white font-semibold">
                  {categories.find(c => c.id === selectedCategory)?.label} 연습
                </h3>
                <p className="text-gray-400 text-sm">
                  {categories.find(c => c.id === selectedCategory)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Mission List */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="grid gap-4">
          {missions.map((mission, index) => {
            const isCompleted = progress.completedMissions.includes(mission.id);

            return (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleMissionClick(mission)}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  isCompleted
                    ? 'bg-green-900/20 border border-green-500/30'
                    : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Status Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-700'
                  }`}>
                    {isCompleted ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-lg">
                        {mission.id.startsWith('debug') ? '🐛' :
                         mission.id.startsWith('review') ? '🔍' :
                         mission.id.startsWith('algo') ? '📊' :
                         mission.id.startsWith('mistake') ? '⚠️' : '🚀'}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-semibold">{mission.title}</h3>
                      {mission.isKeyMission && (
                        <span className="text-yellow-400">⭐</span>
                      )}
                      {mission.isWeeklyProject && (
                        <span className="px-2 py-0.5 text-xs rounded bg-purple-500/20 text-purple-400">프로젝트</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm mt-1 line-clamp-2">{mission.description}</p>

                    {/* Badges */}
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                      {getDifficultyBadge(mission.difficulty)}
                      {getPhaseBadge(mission.phase)}
                      {mission.language && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                          {mission.language}
                        </span>
                      )}
                      <span className="px-2 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-400">
                        +{mission.exp} EXP
                      </span>
                      <span className="text-gray-500 text-xs">
                        {mission.estimatedMinutes}분
                      </span>
                    </div>

                    {/* Learning Objectives Preview */}
                    {mission.learningObjectives && mission.learningObjectives.length > 0 && (
                      <div className="mt-3 text-xs text-gray-500">
                        학습 목표: {mission.learningObjectives[0]}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <svg className="w-5 h-5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

        {missions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">이 카테고리에는 아직 미션이 없습니다.</p>
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">카테고리별 진행률</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.filter(c => c.id !== 'all').map(cat => {
              const catMissions = getMissionsByCategory(cat.id);
              const catCompleted = catMissions.filter(m => progress.completedMissions.includes(m.id)).length;
              const progressPercent = catMissions.length > 0 ? (catCompleted / catMissions.length) * 100 : 0;

              return (
                <div key={cat.id} className="text-center">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-sm text-gray-400 mb-2">{cat.label}</div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${progressPercent}%`,
                        backgroundColor: cat.color
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {catCompleted}/{catMissions.length}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Practice Section */}
      <div className="max-w-4xl mx-auto px-4 mt-8 mb-8">
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-6 border border-indigo-500/20">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>🤖</span>
            <span>AI가 추천하는 고급 연습이 왜 중요할까요?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span><strong>디버깅</strong>: 실제 개발자는 코드 작성보다 버그 수정에 더 많은 시간을 써요</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span><strong>코드 리뷰</strong>: 남의 코드를 읽는 능력이 협업의 핵심이에요</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span><strong>알고리즘</strong>: 효율적인 문제 해결의 기초예요</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span><strong>흔한 실수</strong>: 미리 알면 시간을 엄청 절약해요</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

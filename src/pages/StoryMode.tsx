import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Book, Sword, Shield, Star, Lock, ChevronRight, Trophy,
  Zap, Heart, Crown, Sparkles, Play, MapPin
} from 'lucide-react';

// 스토리 타입 정의
interface Chapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  narrative: string[];
  missionIds: string[];
  boss?: Boss;
  rewards: Reward[];
  unlockCondition: string;
  unlocked: boolean;
  completed: boolean;
  backgroundImage: string;
  color: string;
}

interface Boss {
  id: string;
  name: string;
  title: string;
  health: number;
  image: string;
  weakness: string;
  attacks: string[];
}

interface Reward {
  type: 'exp' | 'badge' | 'item' | 'title';
  value: string | number;
  icon: string;
}

// 스토리 데이터
const storyChapters: Chapter[] = [
  {
    id: 'ch1',
    number: 1,
    title: '코드 왕국의 시작',
    subtitle: '변수의 마을',
    description: '코드 왕국에 오신 것을 환영합니다! 첫 번째 마을에서 변수의 기초를 배워요.',
    narrative: [
      '오래전, 코드 왕국은 평화로웠습니다.',
      '하지만 버그 군단이 나타나 왕국을 혼란에 빠뜨렸죠.',
      '당신은 코드 왕국을 구할 영웅으로 선택되었습니다!',
      '첫 번째 임무: 변수의 힘을 익혀 마을을 구하세요.'
    ],
    missionIds: ['1-1-1', '1-1-2', '1-1-3', '1-1-4', '1-1-5'],
    boss: {
      id: 'boss1',
      name: '널포인터',
      title: '변수 파괴자',
      health: 100,
      image: '👾',
      weakness: '변수 선언',
      attacks: ['값 삭제', '타입 혼란', '이름 도둑']
    },
    rewards: [
      { type: 'exp', value: 500, icon: '⭐' },
      { type: 'badge', value: '변수 마스터', icon: '🏅' },
      { type: 'title', value: '초보 코더', icon: '👑' }
    ],
    unlockCondition: '',
    unlocked: true,
    completed: false,
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea'
  },
  {
    id: 'ch2',
    number: 2,
    title: '조건의 숲',
    subtitle: 'if-else의 비밀',
    description: '조건의 숲에서 참과 거짓을 구별하는 법을 배워요.',
    narrative: [
      '변수의 마을을 구한 당신은 조건의 숲으로 향합니다.',
      '이 숲에서는 모든 길이 조건에 따라 갈라집니다.',
      '참과 거짓을 구별해야만 올바른 길을 찾을 수 있죠.',
      '조건문의 마법을 익혀 숲을 통과하세요!'
    ],
    missionIds: ['1-2-1', '1-2-2', '1-2-3', '1-2-4', '1-2-5'],
    boss: {
      id: 'boss2',
      name: '이프엘스',
      title: '길 미혹자',
      health: 150,
      image: '🌀',
      weakness: '정확한 조건',
      attacks: ['거짓 미로', '조건 반전', '무한 분기']
    },
    rewards: [
      { type: 'exp', value: 750, icon: '⭐' },
      { type: 'badge', value: '조건 달인', icon: '🎯' },
      { type: 'item', value: '결정의 나침반', icon: '🧭' }
    ],
    unlockCondition: 'ch1',
    unlocked: false,
    completed: false,
    backgroundImage: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: '#11998e'
  },
  {
    id: 'ch3',
    number: 3,
    title: '반복의 탑',
    subtitle: '루프의 힘',
    description: '반복의 탑에서 효율적인 코드의 비밀을 발견하세요.',
    narrative: [
      '조건의 숲을 지나 반복의 탑에 도착했습니다.',
      '이 탑은 99층까지 있지만, 비밀이 있습니다.',
      '반복문을 사용하면 한 번에 여러 층을 오를 수 있죠!',
      'for와 while의 힘을 익혀 탑의 정상에 오르세요.'
    ],
    missionIds: ['1-3-1', '1-3-2', '1-3-3', '1-3-4', '1-3-5'],
    boss: {
      id: 'boss3',
      name: '인피니트',
      title: '무한 루프의 지배자',
      health: 200,
      image: '♾️',
      weakness: 'break 조건',
      attacks: ['무한 반복', '인덱스 초과', '스택 오버플로']
    },
    rewards: [
      { type: 'exp', value: 1000, icon: '⭐' },
      { type: 'badge', value: '반복 정복자', icon: '🔄' },
      { type: 'title', value: '루프 마스터', icon: '👑' }
    ],
    unlockCondition: 'ch2',
    unlocked: false,
    completed: false,
    backgroundImage: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb'
  },
  {
    id: 'ch4',
    number: 4,
    title: '함수의 성',
    subtitle: '재사용의 마법',
    description: '함수의 성에서 코드를 정리하고 재사용하는 법을 배워요.',
    narrative: [
      '탑을 정복한 당신은 드디어 함수의 성에 도착했습니다.',
      '이 성의 마법사들은 같은 주문을 여러 번 쓰지 않습니다.',
      '한 번 정의한 함수는 언제든 다시 호출할 수 있으니까요!',
      '함수의 마법을 익혀 진정한 코더가 되세요.'
    ],
    missionIds: ['1-4-1', '1-4-2', '1-4-3', '1-4-4', '1-4-5'],
    boss: {
      id: 'boss4',
      name: '스파게티',
      title: '코드 혼돈의 왕',
      health: 300,
      image: '🍝',
      weakness: '깔끔한 함수',
      attacks: ['코드 엉킴', '스코프 혼란', '재귀 함정']
    },
    rewards: [
      { type: 'exp', value: 1500, icon: '⭐' },
      { type: 'badge', value: '함수 마법사', icon: '✨' },
      { type: 'title', value: '코드 정리왕', icon: '👑' }
    ],
    unlockCondition: 'ch3',
    unlocked: false,
    completed: false,
    backgroundImage: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe'
  },
  {
    id: 'ch5',
    number: 5,
    title: '버그 왕의 요새',
    subtitle: '최종 결전',
    description: '모든 것을 배웠습니다. 이제 버그 왕을 물리칠 시간입니다!',
    narrative: [
      '드디어 버그 왕의 요새에 도착했습니다.',
      '그동안 배운 모든 것을 활용해야 합니다.',
      '변수, 조건문, 반복문, 함수... 모든 무기를 사용하세요!',
      '코드 왕국의 운명이 당신의 손에 달려 있습니다.'
    ],
    missionIds: ['1-5-1', '1-5-2', '1-5-3', '1-5-4', '1-5-5'],
    boss: {
      id: 'boss5',
      name: '버그 킹',
      title: '코드 왕국의 적',
      health: 500,
      image: '🐛',
      weakness: '디버깅 스킬',
      attacks: ['타입 에러', '논리 오류', '런타임 에러', '무한 루프']
    },
    rewards: [
      { type: 'exp', value: 3000, icon: '⭐' },
      { type: 'badge', value: '코드 영웅', icon: '🏆' },
      { type: 'title', value: '버그 슬레이어', icon: '👑' },
      { type: 'item', value: '전설의 키보드', icon: '⌨️' }
    ],
    unlockCondition: 'ch4',
    unlocked: false,
    completed: false,
    backgroundImage: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
    color: '#ff0844'
  }
];

const StoryMode: React.FC = () => {
  const navigate = useNavigate();
  const [chapters, setChapters] = useState<Chapter[]>(storyChapters);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [showNarrative, setShowNarrative] = useState(false);
  const [narrativeIndex, setNarrativeIndex] = useState(0);

  // 챕터 선택
  const handleChapterSelect = (chapter: Chapter) => {
    if (!chapter.unlocked) return;
    setSelectedChapter(chapter);
    setShowNarrative(true);
    setNarrativeIndex(0);
  };

  // 내러티브 진행
  const handleNarrativeNext = () => {
    if (selectedChapter && narrativeIndex < selectedChapter.narrative.length - 1) {
      setNarrativeIndex(prev => prev + 1);
    } else {
      setShowNarrative(false);
      // 첫 번째 미션으로 이동
      if (selectedChapter) {
        navigate(`/mission/${selectedChapter.missionIds[0]}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 p-4 md:p-8">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <Book className="w-8 h-8 text-purple-400" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">스토리 모드</h1>
        </div>
        <p className="text-slate-400">코드 왕국을 구하는 영웅이 되어보세요!</p>
      </motion.div>

      {/* 월드 맵 */}
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* 연결선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-red-500 -translate-x-1/2 hidden md:block" />

          {/* 챕터 카드들 */}
          <div className="space-y-8">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-4`}
              >
                {/* 포인트 마커 */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10"
                  style={{ background: chapter.unlocked ? chapter.color : '#475569' }}
                >
                  {chapter.completed ? (
                    <Trophy className="w-6 h-6 text-white" />
                  ) : chapter.unlocked ? (
                    <span className="text-white font-bold">{chapter.number}</span>
                  ) : (
                    <Lock className="w-5 h-5 text-white/50" />
                  )}
                </div>

                {/* 챕터 카드 */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={chapter.unlocked ? { scale: 1.02 } : {}}
                    whileTap={chapter.unlocked ? { scale: 0.98 } : {}}
                    onClick={() => handleChapterSelect(chapter)}
                    className={`relative overflow-hidden rounded-2xl border ${
                      chapter.unlocked
                        ? 'border-white/20 cursor-pointer hover:border-white/40'
                        : 'border-slate-700 opacity-60'
                    }`}
                    style={{ background: chapter.unlocked ? chapter.backgroundImage : '#1e293b' }}
                  >
                    {/* 잠금 오버레이 */}
                    {!chapter.unlocked && (
                      <div className="absolute inset-0 bg-slate-900/80 flex items-center justify-center z-10">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-slate-500 mx-auto mb-2" />
                          <p className="text-slate-400">이전 챕터를 완료하세요</p>
                        </div>
                      </div>
                    )}

                    <div className="p-6 text-white">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-white/60 text-sm mb-1">Chapter {chapter.number}</p>
                          <h3 className="text-2xl font-bold">{chapter.title}</h3>
                          <p className="text-white/80">{chapter.subtitle}</p>
                        </div>
                        {chapter.boss && (
                          <div className="text-4xl">{chapter.boss.image}</div>
                        )}
                      </div>

                      <p className="text-white/70 mb-4">{chapter.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {chapter.rewards.map((reward, i) => (
                          <div key={i} className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1 text-sm">
                            <span>{reward.icon}</span>
                            <span>{typeof reward.value === 'number' ? `+${reward.value}` : reward.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{chapter.missionIds.length}개 미션</span>
                        </div>
                        {chapter.unlocked && !chapter.completed && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2"
                          >
                            <Play className="w-4 h-4" />
                            시작하기
                          </motion.button>
                        )}
                        {chapter.completed && (
                          <div className="flex items-center gap-2 text-green-300">
                            <Trophy className="w-5 h-5" />
                            완료!
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 빈 공간 (반대편) */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 내러티브 모달 */}
      <AnimatePresence>
        {showNarrative && selectedChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={handleNarrativeNext}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-2xl w-full rounded-2xl overflow-hidden"
              style={{ background: selectedChapter.backgroundImage }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8 text-white">
                <div className="text-center mb-6">
                  <p className="text-white/60 mb-2">Chapter {selectedChapter.number}</p>
                  <h2 className="text-3xl font-bold mb-1">{selectedChapter.title}</h2>
                  <p className="text-white/80">{selectedChapter.subtitle}</p>
                </div>

                <div className="bg-black/30 rounded-xl p-6 mb-6 min-h-[100px]">
                  <motion.p
                    key={narrativeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg text-center"
                  >
                    {selectedChapter.narrative[narrativeIndex]}
                  </motion.p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {selectedChapter.narrative.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === narrativeIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNarrativeNext}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-6 py-3"
                  >
                    {narrativeIndex < selectedChapter.narrative.length - 1 ? (
                      <>
                        계속
                        <ChevronRight className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        <Sword className="w-5 h-5" />
                        모험 시작!
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryMode;

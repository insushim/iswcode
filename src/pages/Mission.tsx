import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Clock, Star, Trophy, ChevronRight, Lightbulb,
  Play, CheckCircle, XCircle, Shuffle, GripVertical
} from 'lucide-react';
import { CodeWorkspace } from '../components/Editor';
import { getMissionById, allUnits } from '../data/curriculum';
import { useMissionStore } from '../stores/missionStore';
import { useProgressStore } from '../stores/progressStore';
import { useUserStore } from '../stores/userStore';
import type { Mission as MissionType } from '../types';
import GeneralBlockMission from '../components/GeneralBlockMission';
import InteractiveLessonMission from '../components/InteractiveLessonMission';
import VariableMission from '../components/VariableMission';
import GameMakerMission from '../components/GameMakerMission';

const Mission: React.FC = () => {
  const { missionId } = useParams();
  const navigate = useNavigate();
  const { setCurrentMission, startTimer, stopTimer, hintsUsed, useHint } = useMissionStore();
  const { completeMission, earnBadge } = useProgressStore();
  const { addExp, user } = useUserStore();

  const [mission, setMission] = useState<MissionType | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const [earnedExp, setEarnedExp] = useState(0);
  const [nextMission, setNextMission] = useState<MissionType | null>(null);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    if (missionId) {
      const found = getMissionById(missionId);
      if (found) {
        setMission(found);
        setCurrentMission(found);
        startTimer();
      }
    }
  }, [missionId, setCurrentMission, startTimer]);

  const handleComplete = (perfect: boolean) => {
    if (!mission) return;

    const time = stopTimer();
    let exp = mission.exp;
    if (perfect) exp += 50;
    if (hintsUsed === 0) exp += 30;
    if (time < mission.estimatedMinutes * 60 * 0.5) exp += 20;

    setEarnedExp(exp);
    addExp(exp);

    const unitId = findUnitForMission(mission.id);
    if (unitId) {
      completeMission(mission.id, unitId, perfect);
    }

    if (user && user.stats.totalMissionsCompleted === 0) {
      earnBadge('first_code');
    }

    const next = findNextMission(mission.id);
    setNextMission(next);
    setShowComplete(true);
  };

  const findUnitForMission = (missionId: string): string | null => {
    for (const unit of allUnits) {
      for (const week of unit.weeks) {
        if (week.missions.some(m => m.id === missionId)) {
          return unit.id;
        }
      }
    }
    return null;
  };

  const findNextMission = (currentMissionId: string): MissionType | null => {
    for (const unit of allUnits) {
      for (const week of unit.weeks) {
        const missionIndex = week.missions.findIndex(m => m.id === currentMissionId);
        if (missionIndex !== -1) {
          if (missionIndex < week.missions.length - 1) {
            return week.missions[missionIndex + 1];
          }
          const weekIndex = unit.weeks.indexOf(week);
          if (weekIndex < unit.weeks.length - 1) {
            return unit.weeks[weekIndex + 1].missions[0];
          }
        }
      }
    }
    return null;
  };

  if (!mission) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-xl border-2 border-slate-600 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-black px-2.5 py-1 rounded-md ${
                mission.difficulty === 'beginner' ? 'bg-emerald-500 text-white' :
                mission.difficulty === 'intermediate' ? 'bg-yellow-500 text-slate-900' : 'bg-red-500 text-white'
              }`}>
                {mission.difficulty === 'beginner' ? '초급' :
                 mission.difficulty === 'intermediate' ? '중급' : '고급'}
              </span>
              {mission.language && (
                <span className="text-xs font-bold px-2 py-1 rounded-md bg-violet-600 text-white">
                  {mission.language}
                </span>
              )}
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white">{mission.title}</h1>
            <p className="text-sm text-slate-400">{mission.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-xl border-2 border-slate-600">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium">~{mission.estimatedMinutes}분</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl border-2 border-yellow-300 dark:border-yellow-800">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-300">+{mission.exp} XP</span>
          </div>
        </div>
      </div>

      {/* Hints Section */}
      {mission.hints && mission.hints.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => {
              setShowHints(!showHints);
              if (!showHints) useHint();
            }}
            className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
          >
            <Lightbulb className="w-4 h-4" />
            <span className="font-medium text-sm">힌트 {showHints ? '숨기기' : '보기'}</span>
          </button>

          {showHints && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800"
            >
              <ul className="space-y-2">
                {mission.hints.map((hint, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-amber-800 dark:text-amber-200">
                    <span className="font-bold">💡</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      )}

      {/* Mission Content */}
      <div className="flex-1 min-h-[500px]">
        {mission.type === 'coding' ? (
          <CodeWorkspace mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'drag-drop' ? (
          <DragDropMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'pattern-recognition' ? (
          <PatternMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'quiz' ? (
          <QuizMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'visual-programming' ? (
          <VisualProgrammingMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'variable-programming' ? (
          <VariableMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'game-maker' ? (
          <GameMakerMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'writing' ? (
          <WritingMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'visual-puzzle' ? (
          <VisualPuzzleMission mission={mission} onComplete={handleComplete} />
        ) : mission.type === 'interactive-lesson' ? (
          <InteractiveLessonMission mission={mission} onComplete={handleComplete} />
        ) : (
          <InteractiveMission mission={mission} onComplete={handleComplete} />
        )}
      </div>

      {/* Completion Modal */}
      {showComplete && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-slate-800 rounded-3xl border-2 border-slate-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 max-w-md w-full text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center border-4 border-slate-600"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-3xl font-black mb-2 text-white">미션 완료! 🎉</h2>
            <p className="text-slate-400 mb-6">
              {mission.title} 미션을 성공적으로 완료했어요!
            </p>

            <div className="bg-slate-900/50 rounded-2xl p-6 mb-6 border-2 border-slate-600">
              <h3 className="font-bold mb-4 text-white">획득한 보상</h3>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-yellow-500">+{earnedExp}</div>
                  <div className="text-xs text-gray-500 font-medium">경험치</div>
                </div>
                {hintsUsed === 0 && (
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-500">+30</div>
                    <div className="text-xs text-gray-500 font-medium">힌트 미사용</div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate('/learn')}
                className="flex-1 px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-slate-600 transition-colors"
              >
                학습 목록
              </button>
              {nextMission ? (
                <button
                  onClick={() => {
                    setShowComplete(false);
                    navigate(`/mission/${nextMission.id}`);
                  }}
                  className="flex-1 px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  다음 미션 <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => navigate('/learn')}
                  className="flex-1 px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors"
                >
                  계속 학습
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

// Drag & Drop Mission Component
const DragDropMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [items, setItems] = useState<string[]>([]);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  useEffect(() => {
    if (mission.blocks) {
      const shuffled = [...mission.blocks].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setUserOrder([]);
    }
  }, [mission.blocks]);

  const handleDragStart = (item: string) => {
    setDraggedItem(item);
  };

  const handleDrop = (index: number) => {
    if (draggedItem) {
      const newOrder = [...userOrder];
      newOrder.splice(index, 0, draggedItem);
      setUserOrder(newOrder);
      setItems(items.filter(i => i !== draggedItem));
      setDraggedItem(null);
    }
  };

  const handleRemove = (item: string) => {
    setUserOrder(userOrder.filter(i => i !== item));
    setItems([...items, item]);
  };

  const handleSubmit = () => {
    if (mission.blocks && userOrder.length === mission.blocks.length) {
      const isCorrect = JSON.stringify(userOrder) === JSON.stringify(mission.blocks);
      setFeedback(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) {
        setTimeout(() => onComplete(true), 1500);
      }
    }
  };

  const handleReset = () => {
    if (mission.blocks) {
      const shuffled = [...mission.blocks].sort(() => Math.random() - 0.5);
      setItems(shuffled);
      setUserOrder([]);
      setFeedback('none');
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-4 text-white">블록을 올바른 순서로 배열하세요</h3>

      {/* Available Items */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500 mb-2">사용 가능한 블록:</p>
        <div className="flex flex-wrap gap-2 min-h-[60px] p-4 bg-slate-900/50 rounded-xl border-2 border-dashed border-slate-600">
          {items.map((item, index) => (
            <motion.div
              key={`available-${index}`}
              draggable
              onDragStart={() => handleDragStart(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-violet-100 dark:bg-violet-900/50 text-violet-800 dark:text-violet-200 rounded-lg border-2 border-violet-300 dark:border-violet-700 cursor-grab font-medium flex items-center gap-2"
            >
              <GripVertical className="w-4 h-4" />
              {item}
            </motion.div>
          ))}
          {items.length === 0 && (
            <span className="text-gray-400 text-sm">모든 블록을 배치했어요!</span>
          )}
        </div>
      </div>

      {/* Drop Zone */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-500 mb-2">정답 영역 (순서대로 배치):</p>
        <div
          className={`min-h-[120px] p-4 rounded-xl border-2 border-dashed transition-colors ${
            feedback === 'correct' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' :
            feedback === 'incorrect' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
            'border-slate-600 bg-slate-900/50'
          }`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(userOrder.length)}
        >
          <div className="flex flex-col gap-2">
            {userOrder.map((item, index) => (
              <motion.div
                key={`order-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`px-4 py-3 rounded-lg border-2 font-medium flex items-center justify-between ${
                  feedback === 'correct' ? 'bg-emerald-100 border-emerald-400 text-emerald-800' :
                  feedback === 'incorrect' ? 'bg-red-100 border-red-400 text-red-800' :
                  'bg-slate-800 border-slate-600 text-slate-200'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {item}
                </span>
                {feedback === 'none' && (
                  <button
                    onClick={() => handleRemove(item)}
                    className="p-1 hover:bg-slate-700 rounded"
                  >
                    <XCircle className="w-5 h-5 text-gray-400" />
                  </button>
                )}
              </motion.div>
            ))}
            {userOrder.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                블록을 여기로 드래그하세요
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feedback */}
      {feedback !== 'none' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl mb-4 flex items-center gap-3 ${
            feedback === 'correct' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200' :
            'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
          }`}
        >
          {feedback === 'correct' ? (
            <>
              <CheckCircle className="w-6 h-6" />
              <span className="font-bold">정답입니다! 🎉</span>
            </>
          ) : (
            <>
              <XCircle className="w-6 h-6" />
              <span className="font-bold">다시 시도해보세요</span>
            </>
          )}
        </motion.div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-slate-600 transition-colors"
        >
          <Shuffle className="w-4 h-4" />
          초기화
        </button>
        <button
          onClick={handleSubmit}
          disabled={userOrder.length !== mission.blocks?.length}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4" />
          제출하기
        </button>
      </div>
    </div>
  );
};

// Pattern Recognition Mission
const PatternMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'incorrect'>('none');
  const [attempts, setAttempts] = useState(0);

  // 미션 데이터 기반 패턴 생성
  const generatePatternFromMission = () => {
    const title = mission.title?.toLowerCase() || '';
    const desc = mission.description?.toLowerCase() || '';
    const concept = mission.concept?.toLowerCase() || '';

    // 다양한 패턴 유형
    const patternTypes = {
      '숫자': [
        { sequence: [2, 4, 6, 8, '?'], answer: '10', hint: '2씩 증가하는 수열', type: 'number' },
        { sequence: [1, 3, 5, 7, '?'], answer: '9', hint: '홀수 패턴', type: 'number' },
        { sequence: [3, 6, 9, 12, '?'], answer: '15', hint: '3의 배수', type: 'number' },
        { sequence: [5, 10, 15, 20, '?'], answer: '25', hint: '5씩 증가', type: 'number' },
      ],
      '피보나치': [
        { sequence: [1, 1, 2, 3, 5, '?'], answer: '8', hint: '앞 두 수를 더하면?', type: 'number' },
        { sequence: [0, 1, 1, 2, 3, '?'], answer: '5', hint: '피보나치 수열', type: 'number' },
      ],
      '제곱': [
        { sequence: [1, 4, 9, 16, '?'], answer: '25', hint: '제곱수 패턴', type: 'number' },
        { sequence: [4, 9, 16, 25, '?'], answer: '36', hint: 'n²의 패턴', type: 'number' },
      ],
      '도형': [
        { sequence: ['🔴', '🔵', '🔴', '🔵', '?'], answer: '🔴', hint: '빨강-파랑 반복', type: 'shape' },
        { sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'], answer: '🌙', hint: '별-별-달 패턴', type: 'shape' },
        { sequence: ['🟢', '🟡', '🔴', '🟢', '🟡', '?'], answer: '🔴', hint: '초록-노랑-빨강 반복', type: 'shape' },
      ],
      '색상': [
        { sequence: ['빨강', '주황', '노랑', '초록', '?'], answer: '파랑', hint: '무지개 순서', type: 'text' },
        { sequence: ['검정', '흰색', '검정', '흰색', '?'], answer: '검정', hint: '번갈아 반복', type: 'text' },
      ],
      '알파벳': [
        { sequence: ['A', 'C', 'E', 'G', '?'], answer: 'I', hint: '하나씩 건너뛰기', type: 'text' },
        { sequence: ['가', '나', '다', '라', '?'], answer: '마', hint: '한글 순서', type: 'text' },
      ],
      '기하학': [
        { sequence: [3, 4, 5, 6, '?'], answer: '7', hint: '다각형 변의 수', type: 'number' },
      ],
    };

    // 미션 키워드로 적절한 패턴 선택
    let matchedPatterns: Array<{sequence: (string | number)[]; answer: string; hint: string; type: string}> = [];

    for (const [keyword, patterns] of Object.entries(patternTypes)) {
      if (title.includes(keyword) || desc.includes(keyword) || concept.includes(keyword)) {
        matchedPatterns = [...matchedPatterns, ...patterns];
      }
    }

    // 매칭되는 게 없으면 기본 숫자 패턴
    if (matchedPatterns.length === 0) {
      matchedPatterns = patternTypes['숫자'];
    }

    return matchedPatterns[Math.floor(Math.random() * matchedPatterns.length)];
  };

  const [currentPattern] = useState(generatePatternFromMission);

  const handleSubmit = () => {
    setAttempts(prev => prev + 1);
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = currentPattern.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
      setFeedback('correct');
      setTimeout(() => onComplete(attempts === 0), 1500);
    } else {
      setFeedback('incorrect');
    }
  };

  const getItemStyle = (item: string | number, isQuestion: boolean) => {
    if (isQuestion) {
      return 'border-violet-500 bg-violet-100 dark:bg-violet-900/30 text-violet-600';
    }
    if (currentPattern.type === 'shape' && typeof item === 'string') {
      return 'border-slate-600 bg-slate-900/50 text-3xl';
    }
    return 'border-slate-600 bg-slate-900/50 text-slate-200';
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">{mission.title}</h3>
      <p className="text-slate-400 mb-6">패턴을 찾아 ?에 들어갈 값을 입력하세요</p>

      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {currentPattern.sequence.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`w-16 h-16 flex items-center justify-center text-2xl font-black rounded-xl border-2 ${getItemStyle(item, item === '?')}`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      <div className="max-w-xs mx-auto">
        {currentPattern.type === 'shape' ? (
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['🔴', '🔵', '🟢', '🟡', '⭐', '🌙', '💜', '🧡'].map((emoji) => (
              <button
                key={emoji}
                onClick={() => setAnswer(emoji)}
                className={`w-12 h-12 text-2xl rounded-lg border-2 transition-all ${
                  answer === emoji
                    ? 'border-violet-500 bg-violet-100 dark:bg-violet-900/50'
                    : 'border-slate-600 bg-slate-700 hover:bg-slate-600'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="정답 입력"
            className="w-full px-4 py-3 text-center text-xl font-bold rounded-xl border-2 border-slate-600 bg-slate-700 text-white focus:outline-none focus:border-violet-500"
          />
        )}

        {feedback !== 'none' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-xl text-center font-bold ${
              feedback === 'correct' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}
          >
            {feedback === 'correct' ? '정답! 🎉' : `힌트: ${currentPattern.hint}`}
          </motion.div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!answer}
          className="w-full mt-4 px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          확인
        </button>
      </div>
    </div>
  );
};

// Quiz Mission
const QuizMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  // 미션 데이터 기반 동적 퀴즈 생성
  const generateQuizFromMission = () => {
    const concept = mission.concept?.toLowerCase() || '';
    const title = mission.title?.toLowerCase() || '';
    const desc = mission.description?.toLowerCase() || '';

    // 퀴즈 데이터베이스 - 개념별 문제
    const quizDatabase: Record<string, Array<{question: string; options: string[]; correctAnswer: number; explanation: string}>> = {
      // Unit 1: 컴퓨팅 사고
      'algorithm': [
        { question: '알고리즘이란 무엇인가요?', options: ['프로그래밍 언어', '문제 해결을 위한 단계별 절차', '컴퓨터 부품', '게임 이름'], correctAnswer: 1, explanation: '알고리즘은 문제를 해결하기 위한 단계별 절차입니다.' },
        { question: '좋은 알고리즘의 특징이 아닌 것은?', options: ['명확성', '효율성', '복잡성', '유한성'], correctAnswer: 2, explanation: '좋은 알고리즘은 단순하고 이해하기 쉬워야 합니다.' },
      ],
      '순서': [
        { question: '알고리즘에서 가장 중요한 것은?', options: ['빠른 속도', '올바른 순서', '긴 코드', '많은 반복'], correctAnswer: 1, explanation: '알고리즘에서는 올바른 순서가 매우 중요합니다.' },
      ],
      '패턴': [
        { question: '패턴 인식이란?', options: ['그림 그리기', '반복되는 규칙 찾기', '소리 듣기', '글 쓰기'], correctAnswer: 1, explanation: '패턴 인식은 데이터에서 반복되는 규칙이나 특징을 찾는 것입니다.' },
      ],
      '분해': [
        { question: '문제 분해란?', options: ['문제를 없애기', '큰 문제를 작은 부분으로 나누기', '문제 무시하기', '문제 합치기'], correctAnswer: 1, explanation: '문제 분해는 복잡한 문제를 더 작고 관리하기 쉬운 부분으로 나누는 것입니다.' },
      ],
      '추상화': [
        { question: '추상화란?', options: ['모든 세부사항 포함', '중요한 정보만 남기고 단순화', '복잡하게 만들기', '삭제하기'], correctAnswer: 1, explanation: '추상화는 불필요한 세부사항을 제거하고 핵심만 남기는 것입니다.' },
      ],
      // Unit 3-4: Python
      'python': [
        { question: 'Python에서 변수를 선언하는 올바른 방법은?', options: ['var x = 5', 'let x = 5', 'x = 5', 'int x = 5'], correctAnswer: 2, explanation: 'Python에서는 타입 선언 없이 변수명 = 값 형식으로 변수를 선언합니다.' },
        { question: 'Python에서 문자열을 출력하는 함수는?', options: ['console.log()', 'System.out.println()', 'print()', 'echo()'], correctAnswer: 2, explanation: 'Python에서는 print() 함수로 출력합니다.' },
      ],
      '변수': [
        { question: '변수란 무엇인가요?', options: ['고정된 값', '데이터를 저장하는 공간', '프로그램 이름', '함수'], correctAnswer: 1, explanation: '변수는 데이터를 저장하고 나중에 사용할 수 있는 공간입니다.' },
      ],
      '조건문': [
        { question: 'if문의 역할은?', options: ['반복하기', '조건에 따라 다른 코드 실행', '변수 선언', '함수 호출'], correctAnswer: 1, explanation: 'if문은 조건이 참인지 거짓인지에 따라 다른 코드를 실행합니다.' },
      ],
      '반복문': [
        { question: '반복문을 사용하는 이유는?', options: ['코드를 짧게', '같은 작업을 여러 번 수행', '에러 방지', '변수 저장'], correctAnswer: 1, explanation: '반복문은 같은 작업을 여러 번 수행해야 할 때 사용합니다.' },
      ],
      '함수': [
        { question: '함수의 장점이 아닌 것은?', options: ['코드 재사용', '가독성 향상', '코드 길이 증가', '유지보수 용이'], correctAnswer: 2, explanation: '함수를 사용하면 코드가 더 짧고 관리하기 쉬워집니다.' },
      ],
      '리스트': [
        { question: 'Python 리스트의 인덱스는 몇부터 시작하나요?', options: ['1', '0', '-1', '10'], correctAnswer: 1, explanation: 'Python 리스트의 인덱스는 0부터 시작합니다.' },
      ],
      // Unit 5: JavaScript
      'javascript': [
        { question: 'JavaScript에서 변수를 선언하는 키워드가 아닌 것은?', options: ['var', 'let', 'const', 'int'], correctAnswer: 3, explanation: 'JavaScript에서는 var, let, const를 사용합니다.' },
        { question: 'JavaScript에서 주석을 작성하는 방법은?', options: ['# 주석', '// 주석', '<!-- 주석 -->', '** 주석 **'], correctAnswer: 1, explanation: 'JavaScript에서는 // 또는 /* */로 주석을 작성합니다.' },
      ],
      'dom': [
        { question: 'DOM이란?', options: ['프로그래밍 언어', '문서 객체 모델', '데이터베이스', '서버'], correctAnswer: 1, explanation: 'DOM(Document Object Model)은 HTML 문서를 객체로 표현한 것입니다.' },
      ],
      '이벤트': [
        { question: '이벤트 리스너란?', options: ['소리 듣기', '사용자 동작을 감지하는 함수', '화면 출력', '데이터 저장'], correctAnswer: 1, explanation: '이벤트 리스너는 클릭, 키보드 입력 등 사용자 동작을 감지합니다.' },
      ],
      // Unit 6: HTML/CSS
      'html': [
        { question: 'HTML의 역할은?', options: ['스타일 지정', '웹 페이지 구조 정의', '동적 기능', '데이터 저장'], correctAnswer: 1, explanation: 'HTML은 웹 페이지의 구조와 내용을 정의합니다.' },
      ],
      'css': [
        { question: 'CSS의 역할은?', options: ['구조 정의', '스타일 지정', '프로그래밍', '데이터베이스'], correctAnswer: 1, explanation: 'CSS는 웹 페이지의 스타일(색상, 크기, 레이아웃 등)을 지정합니다.' },
      ],
      '선택자': [
        { question: 'CSS에서 클래스 선택자는?', options: ['#name', '.name', 'name', '@name'], correctAnswer: 1, explanation: 'CSS에서 클래스 선택자는 점(.)으로 시작합니다.' },
      ],
      // Unit 8: AI
      'ai': [
        { question: 'AI란 무엇인가요?', options: ['인공 지능', '인터넷 주소', '앱 이름', '회사 이름'], correctAnswer: 0, explanation: 'AI는 Artificial Intelligence(인공 지능)의 약자입니다.' },
      ],
      '머신러닝': [
        { question: '머신러닝이란?', options: ['기계 수리', '데이터에서 패턴을 학습하는 기술', '프로그래밍 언어', '운영체제'], correctAnswer: 1, explanation: '머신러닝은 컴퓨터가 데이터에서 패턴을 학습하는 기술입니다.' },
      ],
      '프롬프트': [
        { question: '좋은 프롬프트의 특징은?', options: ['매우 짧음', '구체적이고 명확함', '모호함', '영어만 사용'], correctAnswer: 1, explanation: '좋은 프롬프트는 구체적이고 명확하게 원하는 것을 설명합니다.' },
      ],
      // Unit 9: 고급
      '클로저': [
        { question: '클로저란?', options: ['닫기 버튼', '함수가 생성될 때의 환경을 기억하는 것', '에러 종류', '파일 형식'], correctAnswer: 1, explanation: '클로저는 함수가 자신이 생성될 때의 변수 환경을 기억하는 것입니다.' },
      ],
      '비동기': [
        { question: 'async/await의 목적은?', options: ['동기 처리', '비동기 코드를 동기처럼 작성', '에러 발생', '변수 선언'], correctAnswer: 1, explanation: 'async/await는 비동기 코드를 동기 코드처럼 읽기 쉽게 작성할 수 있게 합니다.' },
      ],
      'git': [
        { question: 'Git의 역할은?', options: ['코드 에디터', '버전 관리', '웹 브라우저', '데이터베이스'], correctAnswer: 1, explanation: 'Git은 코드의 변경 이력을 관리하는 버전 관리 시스템입니다.' },
      ],
    };

    // 미션 제목/개념/설명에서 키워드 찾기
    let questions: Array<{question: string; options: string[]; correctAnswer: number; explanation: string}> = [];

    for (const [keyword, quizzes] of Object.entries(quizDatabase)) {
      if (concept.includes(keyword) || title.includes(keyword) || desc.includes(keyword)) {
        questions = [...questions, ...quizzes];
      }
    }

    // 매칭되는 문제가 없으면 기본 문제
    if (questions.length === 0) {
      questions = [
        { question: mission.description || '이 내용을 이해했나요?', options: ['네, 이해했어요', '조금 어려워요', '다시 설명해주세요', '모르겠어요'], correctAnswer: 0, explanation: '학습 내용을 잘 이해하셨네요!' },
      ];
    }

    return questions;
  };

  const questions = generateQuizFromMission();
  const quiz = questions[currentQuestion % questions.length];

  const handleSubmit = () => {
    setIsSubmitted(true);
    setAttempts(prev => prev + 1);
    if (selectedAnswer === quiz.correctAnswer) {
      setCorrectCount(prev => prev + 1);
      // 다음 문제가 있으면 2초 후 이동, 마지막 문제면 완료
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(prev => prev + 1);
          setSelectedAnswer(null);
          setIsSubmitted(false);
        }, 1500);
      } else {
        setTimeout(() => onComplete(correctCount + 1 === questions.length), 2000);
      }
    }
  };

  const handleRetry = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      onComplete(false);
    }
  };

  const isCorrect = selectedAnswer === quiz.correctAnswer;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      {/* 진행률 표시 */}
      {questions.length > 1 && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>문제 {currentQuestion + 1} / {questions.length}</span>
            <span>정답 {correctCount}개</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-6 text-white">{quiz.question}</h3>

      <div className="space-y-3 mb-6">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isSubmitted && setSelectedAnswer(index)}
            disabled={isSubmitted}
            className={`w-full p-4 text-left rounded-xl border-2 font-medium transition-all ${
              isSubmitted
                ? index === quiz.correctAnswer
                  ? 'border-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200'
                  : index === selectedAnswer
                    ? 'border-red-500 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                    : 'border-gray-200 dark:border-gray-600 text-gray-400'
                : selectedAnswer === index
                  ? 'border-violet-500 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-200'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-slate-200'
            }`}
          >
            <span className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                isSubmitted && index === quiz.correctAnswer ? 'bg-emerald-500 text-white' :
                isSubmitted && index === selectedAnswer ? 'bg-red-500 text-white' :
                selectedAnswer === index ? 'bg-violet-500 text-white' :
                'bg-slate-700 text-slate-300'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </span>
          </button>
        ))}
      </div>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl mb-4 ${
            isCorrect
              ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200'
              : 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
          }`}
        >
          <p className="font-bold mb-1">
            {isCorrect ? '정답입니다! 🎉' : '아쉽네요! 😅'}
          </p>
          <p className="text-sm">{quiz.explanation}</p>
        </motion.div>
      )}

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          제출하기
        </button>
      ) : !isCorrect && (
        <div className="flex gap-3">
          <button
            onClick={handleRetry}
            className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-xl border-2 border-blue-500 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            🔄 다시 풀기
          </button>
          <button
            onClick={handleSkip}
            className="flex-1 px-4 py-3 bg-slate-600 text-white font-bold rounded-xl border-2 border-slate-500 hover:bg-slate-500 transition-colors flex items-center justify-center gap-2"
          >
            ⏭️ 건너뛰기
          </button>
        </div>
      )}
    </div>
  );
};

// Visual Programming Mission - 다양한 블록 코딩 활동
const VisualProgrammingMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  // 모든 visual-programming 미션은 GeneralBlockMission 사용 (드래그/드롭 + 캐릭터 시각화)
  return <GeneralBlockMission mission={mission} onComplete={onComplete} />;
};

// 블록 타입 정의
interface Block {
  id: string;
  type: string;
  label: string;
  color: string;
  value?: number;
  hasInput?: boolean;
}

// 캐릭터 이동 미션 - 드래그 앤 드롭 방식
const MoveMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  // charX = 현재 칸 번호 (0~10)
  const [charX, setCharX] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // 사용 가능한 블록들
  const [availableBlocks, setAvailableBlocks] = useState<Block[]>([
    { id: 'flag', type: 'event', label: '🚩 깃발 클릭했을 때', color: 'bg-yellow-500' },
    { id: 'move', type: 'motion', label: '➡️ 오른쪽으로 ___ 칸 이동하기', color: 'bg-blue-500', value: 0, hasInput: true },
    { id: 'left', type: 'motion', label: '⬅️ 왼쪽으로 5칸 이동하기', color: 'bg-blue-400' },
    { id: 'wait', type: 'control', label: '⏱️ 1초 기다리기', color: 'bg-orange-500' },
  ]);

  // 조합된 블록들
  const [assembledBlocks, setAssembledBlocks] = useState<Block[]>([]);
  const [moveValue, setMoveValue] = useState(0);

  const handleDragStart = (e: React.DragEvent, block: Block) => {
    e.dataTransfer.setData('blockId', block.id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData('blockId');
    const block = availableBlocks.find(b => b.id === blockId);
    if (block && !assembledBlocks.find(b => b.id === blockId)) {
      setAssembledBlocks([...assembledBlocks, { ...block }]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeBlock = (blockId: string) => {
    setAssembledBlocks(assembledBlocks.filter(b => b.id !== blockId));
  };

  const runCode = () => {
    // 블록 순서 검증: 깃발 → 이동
    const hasFlag = assembledBlocks.some(b => b.id === 'flag');
    const hasMove = assembledBlocks.some(b => b.id === 'move');

    if (!hasFlag || !hasMove) {
      setShowHint(true);
      return;
    }

    // 순서 확인
    const flagIndex = assembledBlocks.findIndex(b => b.id === 'flag');
    const moveIndex = assembledBlocks.findIndex(b => b.id === 'move');

    if (flagIndex > moveIndex) {
      setShowHint(true);
      return;
    }

    // 실행 - moveValue 칸만큼 이동
    setCharX(moveValue);

    if (moveValue === 10) {
      setIsComplete(true);
      setTimeout(() => onComplete(true), 1500);
    } else {
      setShowHint(true);
    }
  };

  const reset = () => {
    setCharX(0);
    setAssembledBlocks([]);
    setMoveValue(0);
    setIsComplete(false);
    setShowHint(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h3 className="text-xl font-bold mb-2 text-white">🏃 {mission.title}</h3>
      <p className="text-slate-300 text-base mb-4">{mission.description}</p>

      {/* 스테이지 - 스크롤 가능 */}
      <div className="relative bg-gradient-to-b from-sky-400 to-sky-600 rounded-xl h-56 mb-4 border-2 border-slate-600 overflow-x-auto overflow-y-hidden">
        {/* 하늘 배경 */}
        <div className="absolute top-4 right-8 text-2xl">☁️</div>
        <div className="absolute top-8 right-24 text-xl">☁️</div>
        <div className="absolute top-6 left-12 text-xl">🌤️</div>

        {/* 바닥 - 20칸 */}
        <div className="absolute bottom-0 left-0 h-20 bg-gradient-to-t from-amber-800 to-amber-700 border-t-4 border-amber-600" style={{ width: '856px' }}>
          {/* 칸 그리드 (0~20칸) - 고정 너비 */}
          <div className="absolute top-0 left-4 flex">
            {[...Array(21)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-12 border-l-2 ${i === 20 ? 'border-r-2' : ''} border-amber-500 flex items-end justify-center pb-1 ${i === 0 ? 'bg-green-600/30' : i === 10 ? 'bg-yellow-500/30' : ''}`}
              >
                <span className="text-xs font-bold text-white">{i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 시작 표시 (0칸 위) */}
        <div className="absolute bottom-20 left-4 w-10 flex flex-col items-center z-10">
          <span className="text-2xl">🚩</span>
          <span className="text-[10px] font-bold text-white bg-green-600 px-1.5 py-0.5 rounded">시작</span>
        </div>

        {/* 목표 표시 (10칸 위) - 16px + 10칸*40px = 416px */}
        <div className="absolute bottom-20 left-[416px] w-10 flex flex-col items-center z-10">
          <span className="text-2xl animate-bounce">⭐</span>
          <span className="text-[10px] font-bold text-white bg-yellow-500 px-1.5 py-0.5 rounded">목표</span>
        </div>

        {/* 캐릭터 - 칸 위에 정확히 위치 */}
        <motion.div
          className="absolute bottom-20 w-10 flex justify-center text-4xl z-20"
          style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))' }}
          animate={{ left: 16 + charX * 40 }} // left-4 = 16px, 한 칸 = 40px
          transition={{ type: 'spring', stiffness: 100 }}
        >
          🧑‍💻
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* 사용 가능한 블록 */}
        <div className="bg-slate-700/50 rounded-xl p-4 border-2 border-dashed border-slate-500">
          <p className="text-base font-bold text-slate-300 mb-3">🧱 블록 상자 (드래그하세요)</p>
          <div className="flex flex-col gap-2">
            {availableBlocks.map((block) => (
              <div
                key={block.id}
                draggable
                onDragStart={(e) => handleDragStart(e, block)}
                className={`${block.color} text-white px-4 py-3 rounded-lg font-bold text-base shadow cursor-grab active:cursor-grabbing flex items-center gap-2 hover:opacity-90 transition-opacity ${assembledBlocks.find(b => b.id === block.id) ? 'opacity-40' : ''}`}
              >
                <GripVertical className="w-5 h-5" />
                {block.hasInput ? (
                  <span className="flex items-center gap-2 text-base">
                    ➡️ 오른쪽으로
                    <input
                      type="text"
                      inputMode="numeric"
                      value={moveValue === 0 ? '' : moveValue}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setMoveValue(val === '' ? 0 : Math.min(20, parseInt(val)));
                      }}
                      onFocus={(e) => e.target.select()}
                      onClick={(e) => e.stopPropagation()}
                      placeholder="?"
                      className="w-14 px-2 py-1 rounded bg-white text-slate-900 text-center font-bold text-lg border-2 border-slate-300 focus:border-blue-400 focus:outline-none"
                    />
                    칸 이동하기
                  </span>
                ) : (
                  block.label
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 코드 조합 영역 */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="bg-violet-900/30 rounded-xl p-4 border-2 border-violet-500/50 min-h-[180px]"
        >
          <p className="text-base font-bold text-violet-300 mb-3">📝 코드 영역 (여기에 놓으세요)</p>
          {assembledBlocks.length === 0 ? (
            <div className="flex items-center justify-center h-24 text-slate-400 text-base font-medium border-2 border-dashed border-slate-500 rounded-lg">
              블록을 여기로 드래그하세요!
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={`${block.id}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${block.color} text-white px-4 py-3 rounded-lg font-bold text-base shadow flex items-center justify-between`}
                >
                  <span>
                    {block.hasInput ? (
                      <span>➡️ 오른쪽으로 <strong>{moveValue}</strong> 칸 이동하기</span>
                    ) : (
                      block.label
                    )}
                  </span>
                  <button onClick={() => removeBlock(block.id)} className="text-white/70 hover:text-white ml-2">
                    <XCircle className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 힌트 */}
      {showHint && !isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 mb-4"
        >
          <p className="font-bold text-amber-300 text-base mb-2">💡 힌트</p>
          <ul className="text-base text-amber-200 space-y-1">
            <li>• "🚩 깃발 클릭했을 때" 블록을 먼저 놓으세요</li>
            <li>• "이동하기" 블록의 숫자를 <strong className="text-amber-100">10</strong>으로 설정하세요</li>
            <li>• 블록 순서가 중요해요!</li>
          </ul>
        </motion.div>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 mb-4 flex items-center gap-3"
        >
          <CheckCircle className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-emerald-300 text-lg">정확히 10칸 이동했어요! 🎉 다음 레슨으로 이동합니다...</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-base rounded-xl border border-slate-600 transition-colors flex items-center gap-2">
          <Shuffle className="w-5 h-5" />초기화
        </button>
        <button onClick={runCode} className="flex-1 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl border border-green-500 transition-colors flex items-center justify-center gap-2">
          <Play className="w-5 h-5" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

// 대화 미션 - 드래그 앤 드롭 방식
const DialogueMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [dialogue, setDialogue] = useState('');
  const [showHint, setShowHint] = useState(false);

  // 사용 가능한 블록들
  const availableBlocks: Block[] = [
    { id: 'flag', type: 'event', label: '🚩 깃발 클릭했을 때', color: 'bg-yellow-500' },
    { id: 'ask', type: 'sensing', label: '❓ "이름이 뭐야?" 묻고 기다리기', color: 'bg-cyan-500' },
    { id: 'say', type: 'looks', label: '💬 "안녕, " + 대답 말하기', color: 'bg-purple-500' },
    { id: 'wait', type: 'control', label: '⏱️ 2초 기다리기', color: 'bg-orange-500' },
  ];

  const [assembledBlocks, setAssembledBlocks] = useState<Block[]>([]);

  const handleDragStart = (e: React.DragEvent, block: Block) => {
    e.dataTransfer.setData('blockId', block.id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const blockId = e.dataTransfer.getData('blockId');
    const block = availableBlocks.find(b => b.id === blockId);
    if (block && !assembledBlocks.find(b => b.id === blockId)) {
      setAssembledBlocks([...assembledBlocks, { ...block }]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const removeBlock = (blockId: string) => {
    setAssembledBlocks(assembledBlocks.filter(b => b.id !== blockId));
  };

  const runCode = () => {
    // 블록 검증: 깃발 → 묻기 → 말하기
    const hasFlag = assembledBlocks.some(b => b.id === 'flag');
    const hasAsk = assembledBlocks.some(b => b.id === 'ask');
    const hasSay = assembledBlocks.some(b => b.id === 'say');

    if (!hasFlag || !hasAsk || !hasSay) {
      setShowHint(true);
      return;
    }

    const flagIdx = assembledBlocks.findIndex(b => b.id === 'flag');
    const askIdx = assembledBlocks.findIndex(b => b.id === 'ask');
    const sayIdx = assembledBlocks.findIndex(b => b.id === 'say');

    if (flagIdx > askIdx || askIdx > sayIdx) {
      setShowHint(true);
      return;
    }

    setStep(1);
    setShowInput(true);
    setShowHint(false);
  };

  const handleSubmitName = () => {
    if (userName.trim()) {
      setShowInput(false);
      setDialogue(`안녕, ${userName}! 반가워! 👋`);
      setStep(2);
      setTimeout(() => onComplete(true), 2000);
    }
  };

  const reset = () => {
    setStep(0);
    setUserName('');
    setShowInput(false);
    setDialogue('');
    setAssembledBlocks([]);
    setShowHint(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h3 className="text-xl font-bold mb-2 text-white">💬 {mission.title}</h3>
      <p className="text-slate-300 text-base mb-4">{mission.description}</p>

      {/* 스테이지 */}
      <div className="relative bg-gradient-to-b from-purple-800 to-pink-800 rounded-xl h-48 mb-4 border border-slate-600 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-2">🐱</div>
          {showInput && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-700 rounded-xl p-4 shadow-lg border border-violet-500">
              <p className="text-base font-bold text-white mb-2">이름이 뭐야? 🤔</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="이름 입력..."
                  className="px-3 py-2 bg-slate-600 border border-slate-500 rounded-lg text-base text-white placeholder-slate-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitName()}
                />
                <button onClick={handleSubmitName} className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-bold text-base">확인</button>
              </div>
            </motion.div>
          )}
          {dialogue && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-600 rounded-xl px-6 py-3 shadow-lg border border-emerald-400">
              <p className="text-lg font-bold text-white">{dialogue}</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* 블록 조합 영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* 사용 가능한 블록 */}
        <div className="bg-slate-700/50 rounded-xl p-4 border-2 border-dashed border-slate-500">
          <p className="text-base font-bold text-slate-300 mb-3">🧱 블록 상자 (드래그하세요)</p>
          <div className="flex flex-col gap-2">
            {availableBlocks.map((block) => (
              <div
                key={block.id}
                draggable
                onDragStart={(e) => handleDragStart(e, block)}
                className={`${block.color} text-white px-4 py-3 rounded-lg font-bold text-base shadow cursor-grab active:cursor-grabbing flex items-center gap-2 hover:opacity-90 transition-opacity ${assembledBlocks.find(b => b.id === block.id) ? 'opacity-40' : ''}`}
              >
                <GripVertical className="w-5 h-5" />
                {block.label}
              </div>
            ))}
          </div>
        </div>

        {/* 코드 조합 영역 */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="bg-violet-900/30 rounded-xl p-4 border-2 border-violet-500/50 min-h-[180px]"
        >
          <p className="text-base font-bold text-violet-300 mb-3">📝 코드 영역 (여기에 놓으세요)</p>
          {assembledBlocks.length === 0 ? (
            <div className="flex items-center justify-center h-24 text-slate-400 text-base font-medium border-2 border-dashed border-slate-500 rounded-lg">
              블록을 여기로 드래그하세요!
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={`${block.id}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${block.color} text-white px-4 py-3 rounded-lg font-bold text-base shadow flex items-center justify-between`}
                >
                  <span>{block.label}</span>
                  <button onClick={() => removeBlock(block.id)} className="text-white/70 hover:text-white ml-2">
                    <XCircle className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 힌트 */}
      {showHint && step === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 mb-4"
        >
          <p className="font-bold text-amber-300 text-base mb-2">💡 힌트</p>
          <ul className="text-base text-amber-200 space-y-1">
            <li>• 블록 순서: 🚩 깃발 → ❓ 묻기 → 💬 말하기</li>
            <li>• 먼저 "깃발 클릭했을 때" 블록을 놓으세요</li>
            <li>• 그 다음 "묻고 기다리기" 블록을 놓으세요</li>
          </ul>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-emerald-300 text-lg">대화 프로그램 완성! 🎉 다음 레슨으로 이동합니다...</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-base rounded-xl border border-slate-600 transition-colors flex items-center gap-2">
          <Shuffle className="w-5 h-5" />초기화
        </button>
        <button onClick={runCode} disabled={step > 0} className="flex-1 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl border border-green-500 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
          <Play className="w-5 h-5" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

// 색깔 변경 미션
const ColorMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [colorEffect, setColorEffect] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setColorEffect((prev) => (prev + 25) % 360);
    setClickCount((prev) => prev + 1);
    if (clickCount >= 2) {
      setTimeout(() => onComplete(true), 500);
    }
  };

  const reset = () => {
    setColorEffect(0);
    setClickCount(0);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6">
      <h3 className="text-xl font-bold mb-2 text-white">🎨 {mission.title}</h3>
      <p className="text-slate-300 text-base mb-4">{mission.description}</p>

      <div className="relative bg-gradient-to-b from-indigo-800 to-purple-800 rounded-xl h-48 mb-4 border border-slate-600 flex items-center justify-center">
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-7xl cursor-pointer"
          style={{ filter: `hue-rotate(${colorEffect}deg)` }}
        >
          🐱
        </motion.button>
        <p className="absolute bottom-3 text-sm text-gray-500 dark:text-gray-400">캐릭터를 클릭하세요!</p>
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium shadow">👆 이 스프라이트를 클릭했을 때</div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow">🎨 색깔 효과를 25만큼 바꾸기</div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      {clickCount >= 3 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">색깔 마법 성공! 🌈</span>
        </motion.div>
      )}

      <button onClick={reset} className="w-full px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
        <Shuffle className="w-4 h-4 inline mr-2" />초기화
      </button>
    </div>
  );
};

// 소리 미션
const SoundMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [charX, setCharX] = useState(50);

  const runCode = () => {
    setIsPlaying(true);
    // 소리 효과 (시뮬레이션)
    setTimeout(() => {
      setCharX(150);
      setIsPlaying(false);
      setTimeout(() => onComplete(true), 500);
    }, 1000);
  };

  const reset = () => {
    setCharX(50);
    setIsPlaying(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">🔊 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="relative bg-gradient-to-b from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-xl h-40 mb-4 border-2 border-slate-600 overflow-hidden">
        <motion.div className="absolute bottom-8 text-4xl" animate={{ left: charX }} transition={{ duration: 1 }}>
          🐱
        </motion.div>
        {isPlaying && (
          <motion.div className="absolute top-4 right-4 text-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: 3, duration: 0.3 }}>
            🎵
          </motion.div>
        )}
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow">🚩 깃발 클릭했을 때</div>
          <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-medium shadow">🔊 "야옹" 소리 재생하기</div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium shadow">➡️ 100픽셀 이동하기</div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
          <Shuffle className="w-4 h-4 inline mr-2" />초기화
        </button>
        <button onClick={runCode} disabled={isPlaying} className="flex-1 px-4 py-3 bg-green-500 text-white font-bold rounded-xl border-2 border-green-600 hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

// 좌표 이동 미션
const CoordinateMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [inputX, setInputX] = useState(100);
  const [inputY, setInputY] = useState(50);

  const runCode = () => {
    setX(inputX);
    setY(inputY);
    if (inputX === 100 && inputY === 50) {
      setTimeout(() => onComplete(true), 1000);
    }
  };

  const reset = () => {
    setX(0);
    setY(0);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">📍 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="relative bg-slate-900 rounded-xl h-64 mb-4 border-2 border-slate-600 overflow-hidden">
        {/* 좌표축 */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 dark:bg-gray-600" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-400">(0,0)</div>
        {/* 목표점 */}
        <div className="absolute text-red-500 text-xl" style={{ left: `calc(50% + 100px)`, top: `calc(50% - 50px)`, transform: 'translate(-50%, -50%)' }}>🎯</div>
        {/* 캐릭터 */}
        <motion.div className="absolute text-3xl" animate={{ left: `calc(50% + ${x}px)`, top: `calc(50% - ${y}px)` }} style={{ transform: 'translate(-50%, -50%)' }}>
          🐱
        </motion.div>
        <p className="absolute bottom-2 right-2 text-xs bg-slate-800 px-2 py-1 rounded">현재: ({x}, {y})</p>
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow">🚩 깃발 클릭했을 때</div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium shadow flex items-center gap-2 flex-wrap">
            📍 x:
            <input type="number" value={inputX} onChange={(e) => setInputX(Number(e.target.value))} className="w-16 px-2 py-1 rounded text-slate-900 text-center" />
            y:
            <input type="number" value={inputY} onChange={(e) => setInputY(Number(e.target.value))} className="w-16 px-2 py-1 rounded text-slate-900 text-center" />
            (으)로 이동하기
          </div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      {x === 100 && y === 50 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">목표 좌표에 도착! 🎯</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
          <Shuffle className="w-4 h-4 inline mr-2" />초기화
        </button>
        <button onClick={runCode} className="flex-1 px-4 py-3 bg-green-500 text-white font-bold rounded-xl border-2 border-green-600 hover:bg-green-600 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

// 크기 변경 미션
const SizeMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [scale, setScale] = useState(100);
  const [inputScale, setInputScale] = useState(150);

  const runCode = () => {
    setScale(inputScale);
    if (inputScale !== 100) {
      setTimeout(() => onComplete(true), 1000);
    }
  };

  const reset = () => setScale(100);

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">📐 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="bg-gradient-to-b from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 rounded-xl h-48 mb-4 border-2 border-slate-600 flex items-center justify-center">
        <motion.div className="text-6xl" animate={{ scale: scale / 100 }} transition={{ type: 'spring' }}>
          🐱
        </motion.div>
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow">🚩 깃발 클릭했을 때</div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow flex items-center gap-2">
            📐 크기를
            <input type="number" value={inputScale} onChange={(e) => setInputScale(Number(e.target.value))} className="w-16 px-2 py-1 rounded text-slate-900 text-center" min={10} max={300} />
            %로 정하기
          </div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      {scale !== 100 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">크기 변경 성공! ({scale}%) 🎉</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
          <Shuffle className="w-4 h-4 inline mr-2" />초기화
        </button>
        <button onClick={runCode} className="flex-1 px-4 py-3 bg-green-500 text-white font-bold rounded-xl border-2 border-green-600 hover:bg-green-600 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

// 회전 미션
const RotateMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [rotation, setRotation] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    for (let i = 0; i < 36; i++) {
      await new Promise(resolve => setTimeout(resolve, 30));
      setRotation((prev) => prev + 10);
    }
    setIsRunning(false);
    setTimeout(() => onComplete(true), 500);
  };

  const reset = () => setRotation(0);

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">🔄 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="bg-gradient-to-b from-teal-100 to-emerald-100 dark:from-teal-900 dark:to-emerald-900 rounded-xl h-48 mb-4 border-2 border-slate-600 flex items-center justify-center">
        <motion.div className="text-6xl" style={{ transform: `rotate(${rotation}deg)` }}>
          🐱
        </motion.div>
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow">🚩 깃발 클릭했을 때</div>
          <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium shadow">🔄 36번 반복하기</div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-medium shadow pl-8">↻ 10도 돌기</div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      {rotation >= 360 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">360도 회전 완료! 🌀</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
          <Shuffle className="w-4 h-4 inline mr-2" />초기화
        </button>
        <button onClick={runCode} disabled={isRunning} className="flex-1 px-4 py-3 bg-green-500 text-white font-bold rounded-xl border-2 border-green-600 hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />{isRunning ? '회전 중...' : '🚩 실행하기'}
        </button>
      </div>
    </div>
  );
};

// 보이기/숨기기 미션
const VisibilityMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    for (let i = 0; i < 3; i++) {
      setVisible(false);
      await new Promise(resolve => setTimeout(resolve, 500));
      setVisible(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setBlinkCount((prev) => prev + 1);
    }
    setIsRunning(false);
    setTimeout(() => onComplete(true), 500);
  };

  const reset = () => {
    setVisible(true);
    setBlinkCount(0);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">👻 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl h-48 mb-4 border-2 border-slate-600 flex items-center justify-center">
        <motion.div className="text-6xl" animate={{ opacity: visible ? 1 : 0 }} transition={{ duration: 0.2 }}>
          🐱
        </motion.div>
      </div>

      <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 mb-4 border border-violet-200 dark:border-violet-800">
        <p className="text-sm font-medium text-violet-700 dark:text-violet-300 mb-3">🧱 코드 블록</p>
        <div className="flex flex-col gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow">🚩 깃발 클릭했을 때</div>
          <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium shadow">🔄 3번 반복하기</div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-medium shadow pl-8">👻 숨기기</div>
          <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium shadow pl-8">⏱️ 0.5초 기다리기</div>
          <div className="bg-purple-400 text-white px-4 py-2 rounded-lg font-medium shadow pl-8">👀 보이기</div>
          <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium shadow pl-8">⏱️ 0.5초 기다리기</div>
        </div>
      </div>

      {mission.hints && (
        <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-xl border border-amber-200 dark:border-amber-800 mb-4">
          <p className="font-medium text-amber-800 dark:text-amber-200 text-sm">💡 힌트</p>
          <ul className="text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
            {mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
          </ul>
        </div>
      )}

      {blinkCount >= 3 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">숨바꼭질 성공! 👻</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200">
          <Shuffle className="w-4 h-4 inline mr-2" />초기화
        </button>
        <button onClick={runCode} disabled={isRunning} className="flex-1 px-4 py-3 bg-green-500 text-white font-bold rounded-xl border-2 border-green-600 hover:bg-green-600 disabled:opacity-50 flex items-center justify-center gap-2">
          <Play className="w-4 h-4" />{isRunning ? '실행 중...' : '🚩 실행하기'}
        </button>
      </div>
    </div>
  );
};

// 별 그리기 미션 (원래 하드코딩된 버전 - 9주차 별 그리기 전용)
const StarDrawingMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [repeatCount, setRepeatCount] = useState(3);
  const [moveDistance, setMoveDistance] = useState(80);
  const [turnAngle, setTurnAngle] = useState(90);

  const drawStar = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsRunning(true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    let x = canvas.width / 2;
    let y = canvas.height / 2 + 50;
    let angle = -90;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 0; i < repeatCount; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      const rad = (angle * Math.PI) / 180;
      x += Math.cos(rad) * moveDistance;
      y += Math.sin(rad) * moveDistance;
      ctx.lineTo(x, y);
      ctx.stroke();
      angle += turnAngle;
    }

    setIsRunning(false);
    setIsComplete(true);

    if (repeatCount === 5 && turnAngle === 144) {
      setTimeout(() => onComplete(true), 1500);
    }
  };

  const reset = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setIsComplete(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">⭐ {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="bg-gray-900 rounded-xl p-2 border-2 border-gray-700">
            <canvas ref={canvasRef} width={300} height={300} className="bg-gray-900 rounded-lg" />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">터틀 그래픽 캔버스</p>
        </div>

        <div className="flex-1 space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 힌트</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {mission.hints?.[0] || '5각 별을 그리려면 5번 반복하고, 각 꼭지점에서 144도(= 180 - 36) 회전해야 해요!'}
            </p>
          </div>

          <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl border-2 border-slate-600">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                🔄 반복 횟수: <span className="text-violet-600 font-bold">{repeatCount}번</span>
              </label>
              <input type="range" min="3" max="10" value={repeatCount} onChange={(e) => setRepeatCount(Number(e.target.value))} disabled={isRunning} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                📏 이동 거리: <span className="text-violet-600 font-bold">{moveDistance}px</span>
              </label>
              <input type="range" min="50" max="150" value={moveDistance} onChange={(e) => setMoveDistance(Number(e.target.value))} disabled={isRunning} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                ↻ 회전 각도: <span className="text-violet-600 font-bold">{turnAngle}°</span>
              </label>
              <input type="range" min="30" max="180" value={turnAngle} onChange={(e) => setTurnAngle(Number(e.target.value))} disabled={isRunning} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-violet-600" />
            </div>
          </div>

          <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-200 dark:border-violet-800 font-mono text-sm">
            <p className="text-violet-800 dark:text-violet-200"><span className="text-orange-600">반복</span> {repeatCount}번:</p>
            <p className="text-violet-800 dark:text-violet-200 pl-4">앞으로 {moveDistance} 이동</p>
            <p className="text-violet-800 dark:text-violet-200 pl-4">오른쪽으로 {turnAngle}° 회전</p>
          </div>

          {isComplete && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl flex items-center gap-3 ${repeatCount === 5 && turnAngle === 144 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
              {repeatCount === 5 && turnAngle === 144 ? (
                <><CheckCircle className="w-6 h-6" /><span className="font-bold">완벽한 5각 별! 🌟</span></>
              ) : (
                <><span className="text-2xl">🎨</span><span className="font-bold">멋진 도형! 5각 별을 그려보세요.</span></>
              )}
            </motion.div>
          )}

          <div className="flex gap-3">
            <button onClick={reset} disabled={isRunning} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200 disabled:opacity-50">
              <Shuffle className="w-4 h-4 inline mr-2" />지우기
            </button>
            <button onClick={drawStar} disabled={isRunning} className="flex-1 px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-gray-800 disabled:opacity-50 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />{isRunning ? '그리는 중...' : '실행하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 도형 그리기 미션 (사각형, 육각형 등)
const ShapeDrawingMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [sides, setSides] = useState(4);
  const [sideLength, setSideLength] = useState(80);

  // 미션에 따라 목표 변 개수 결정
  const getTargetSides = (): number => {
    if (mission.title.includes('사각형')) return 4;
    if (mission.title.includes('육각형')) return 6;
    if (mission.title.includes('삼각형')) return 3;
    if (mission.title.includes('오각형')) return 5;
    return 4;
  };
  const targetSides = getTargetSides();
  const targetAngle = 360 / targetSides;

  const drawShape = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsRunning(true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    let x = canvas.width / 2 - sideLength / 2;
    let y = canvas.height / 2 + sideLength / 2;
    let angle = 0;

    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 0; i < sides; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      const rad = (angle * Math.PI) / 180;
      x += Math.cos(rad) * sideLength;
      y -= Math.sin(rad) * sideLength;
      ctx.lineTo(x, y);
      ctx.stroke();
      angle += 360 / sides;
    }

    setIsRunning(false);
    setIsComplete(true);

    if (sides === targetSides) {
      setTimeout(() => onComplete(true), 1500);
    }
  };

  const reset = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setIsComplete(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">📐 {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="bg-gray-900 rounded-xl p-2 border-2 border-gray-700">
            <canvas ref={canvasRef} width={300} height={300} className="bg-gray-900 rounded-lg" />
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800">
            <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">💡 힌트</p>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              {mission.hints?.[0] || `정${targetSides}각형을 그리려면 ${targetSides}번 반복하고 ${targetAngle}도 회전해요!`}
            </p>
          </div>

          <div className="space-y-4 p-4 bg-slate-900/50 rounded-xl border-2 border-slate-600">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                🔄 반복 횟수 (변의 개수): <span className="text-emerald-600 font-bold">{sides}번</span>
              </label>
              <input type="range" min="3" max="8" value={sides} onChange={(e) => setSides(Number(e.target.value))} disabled={isRunning} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                📏 변의 길이: <span className="text-emerald-600 font-bold">{sideLength}px</span>
              </label>
              <input type="range" min="40" max="120" value={sideLength} onChange={(e) => setSideLength(Number(e.target.value))} disabled={isRunning} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            </div>
          </div>

          <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800 font-mono text-sm">
            <p className="text-emerald-800 dark:text-emerald-200"><span className="text-orange-600">반복</span> {sides}번:</p>
            <p className="text-emerald-800 dark:text-emerald-200 pl-4">앞으로 {sideLength} 이동</p>
            <p className="text-emerald-800 dark:text-emerald-200 pl-4">오른쪽으로 {Math.round(360 / sides)}° 회전</p>
          </div>

          {isComplete && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl flex items-center gap-3 ${sides === targetSides ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
              {sides === targetSides ? (
                <><CheckCircle className="w-6 h-6" /><span className="font-bold">완벽한 정{targetSides}각형! 🎉</span></>
              ) : (
                <><span className="text-2xl">🎨</span><span className="font-bold">멋진 도형! 정{targetSides}각형을 그려보세요.</span></>
              )}
            </motion.div>
          )}

          <div className="flex gap-3">
            <button onClick={reset} disabled={isRunning} className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200 disabled:opacity-50">
              <Shuffle className="w-4 h-4 inline mr-2" />지우기
            </button>
            <button onClick={drawShape} disabled={isRunning} className="flex-1 px-4 py-3 bg-emerald-500 text-white font-bold rounded-xl border-2 border-emerald-600 hover:bg-emerald-600 disabled:opacity-50 flex items-center justify-center gap-2">
              <Play className="w-4 h-4" />{isRunning ? '그리는 중...' : '실행하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Writing Mission
const WritingMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const requirements = mission.requirements || ['최소 3줄 이상 작성', '순서를 명확하게 표현'];
  const minLines = 3;

  const handleSubmit = () => {
    const lines = text.split('\n').filter(l => l.trim().length > 0);
    if (lines.length >= minLines) {
      setSubmitted(true);
      setTimeout(() => onComplete(true), 1500);
    }
  };

  const lineCount = text.split('\n').filter(l => l.trim().length > 0).length;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">✍️ {mission.title}</h3>
      <p className="text-slate-400 mb-4">{mission.description}</p>

      <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <p className="font-medium text-blue-800 dark:text-blue-200 mb-2">작성 요구사항:</p>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-center gap-2">
              <span>•</span> {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={submitted}
          placeholder="여기에 작성하세요...&#10;&#10;예시:&#10;1. 첫 번째 단계&#10;2. 두 번째 단계&#10;3. 세 번째 단계"
          className="w-full h-64 p-4 rounded-xl border-2 border-slate-600 bg-slate-700 text-white resize-none focus:outline-none focus:border-violet-500 font-mono text-sm"
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-400">
          {lineCount} / {minLines} 줄
        </div>
      </div>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 mb-4 flex items-center gap-3"
        >
          <CheckCircle className="w-6 h-6" />
          <span className="font-bold">잘 작성했어요! 🎉</span>
        </motion.div>
      )}

      <button
        onClick={handleSubmit}
        disabled={lineCount < minLines || submitted}
        className="w-full px-4 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {lineCount < minLines ? `${minLines - lineCount}줄 더 작성해주세요` : '제출하기'}
      </button>
    </div>
  );
};

// Visual Puzzle Mission (Path Finding / Tile Matching)
const VisualPuzzleMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [selectedPath, setSelectedPath] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<'none' | 'success' | 'fail'>('none');

  // Simple maze: 0=empty, 1=wall, 2=start, 3=end
  const maze = [
    [2, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 3],
  ];
  const gridSize = 5;

  const toggleCell = (index: number) => {
    if (feedback !== 'none') return;

    const x = index % gridSize;
    const y = Math.floor(index / gridSize);
    if (maze[y][x] === 1) return; // wall

    if (selectedPath.includes(index)) {
      // Remove from path
      const pathIndex = selectedPath.indexOf(index);
      setSelectedPath(selectedPath.slice(0, pathIndex));
    } else {
      // Add to path if adjacent to last selected
      if (selectedPath.length === 0) {
        if (maze[y][x] === 2) { // start
          setSelectedPath([index]);
        }
      } else {
        const lastIndex = selectedPath[selectedPath.length - 1];
        const lastX = lastIndex % gridSize;
        const lastY = Math.floor(lastIndex / gridSize);
        const isAdjacent = (Math.abs(x - lastX) === 1 && y === lastY) ||
                          (Math.abs(y - lastY) === 1 && x === lastX);
        if (isAdjacent) {
          setSelectedPath([...selectedPath, index]);
        }
      }
    }
  };

  const checkPath = () => {
    if (selectedPath.length === 0) return;
    const lastIndex = selectedPath[selectedPath.length - 1];
    const lastX = lastIndex % gridSize;
    const lastY = Math.floor(lastIndex / gridSize);
    if (maze[lastY][lastX] === 3) {
      setFeedback('success');
      setTimeout(() => onComplete(true), 1500);
    } else {
      setFeedback('fail');
    }
  };

  const reset = () => {
    setSelectedPath([]);
    setFeedback('none');
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-lg font-bold mb-2 text-white">🧩 길 찾기 퍼즐</h3>
      <p className="text-slate-400 mb-4">시작점(🚀)에서 도착점(🏁)까지 경로를 연결하세요. 벽(⬛)은 지나갈 수 없어요!</p>

      <div className="flex flex-col items-center gap-6">
        <div className="inline-grid gap-1 p-4 bg-slate-900/50 rounded-xl border-2 border-slate-600"
             style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
          {maze.flat().map((cell, i) => {
            const isSelected = selectedPath.includes(i);
            const isWall = cell === 1;
            const isStart = cell === 2;
            const isEnd = cell === 3;

            return (
              <button
                key={i}
                onClick={() => toggleCell(i)}
                disabled={isWall}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xl font-bold transition-all ${
                  isWall
                    ? 'bg-gray-800 border-slate-600 cursor-not-allowed'
                    : isSelected
                    ? 'bg-violet-400 border-violet-600 text-white'
                    : isStart
                    ? 'bg-green-200 border-green-400'
                    : isEnd
                    ? 'bg-yellow-200 border-yellow-400'
                    : 'bg-slate-700 border-slate-600 hover:bg-violet-100 dark:hover:bg-violet-900/30'
                }`}
              >
                {isStart ? '🚀' : isEnd ? '🏁' : isWall ? '' : isSelected ? selectedPath.indexOf(i) + 1 : ''}
              </button>
            );
          })}
        </div>

        {feedback !== 'none' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              feedback === 'success' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {feedback === 'success' ? (
              <><CheckCircle className="w-6 h-6" /><span className="font-bold">정답! 🎉</span></>
            ) : (
              <><XCircle className="w-6 h-6" /><span className="font-bold">도착점까지 연결해주세요!</span></>
            )}
          </motion.div>
        )}

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="px-4 py-3 bg-slate-700 text-slate-200 font-bold rounded-xl border-2 border-slate-600 hover:bg-gray-200"
          >
            <Shuffle className="w-4 h-4 inline mr-2" />초기화
          </button>
          <button
            onClick={checkPath}
            disabled={selectedPath.length === 0}
            className="px-8 py-3 bg-violet-600 text-white font-bold rounded-xl border-2 border-violet-500 hover:bg-gray-800 disabled:opacity-50 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />확인하기
          </button>
        </div>
      </div>
    </div>
  );
};

// Interactive/Generic Mission (fallback) - hands-on, discussion 타입 지원
const InteractiveMission: React.FC<{ mission: MissionType; onComplete: (perfect: boolean) => void }> = ({ mission, onComplete }) => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [completed, setCompleted] = useState(false);

  // 미션 타입에 따른 단계별 콘텐츠 생성
  const getSteps = () => {
    const concept = mission.concept?.toLowerCase() || '';
    const type = mission.type;

    if (type === 'hands-on') {
      // Hands-on: 실습 단계
      return [
        { title: '📖 개념 이해', content: mission.description, action: '이해했어요' },
        { title: '🎯 실습 목표', content: mission.hints?.[0] || '직접 실습해보며 개념을 익혀보세요.', action: '확인했어요' },
        { title: '✅ 실습 완료', content: '실습을 완료했다면 완료 버튼을 눌러주세요!', action: '완료하기' },
      ];
    }

    if (type === 'discussion') {
      // Discussion: 토론/생각하기 단계
      return [
        { title: '💭 생각해보기', content: mission.description, action: '다음' },
        { title: '✍️ 내 생각 적기', content: `"${mission.title}"에 대한 나의 생각을 적어보세요.`, action: '제출하기', hasInput: true },
        { title: '🎉 잘했어요!', content: '다양한 관점으로 생각해보는 것이 중요해요!', action: '완료하기' },
      ];
    }

    // 기본 인터랙티브 레슨
    return [
      { title: '📚 학습하기', content: mission.description, action: '이해했어요' },
    ];
  };

  const steps = getSteps();
  const currentStep = steps[step];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setCompleted(true);
      setTimeout(() => onComplete(true), 1000);
    }
  };

  // 미션 타입에 따른 아이콘
  const getIcon = () => {
    switch (mission.type) {
      case 'hands-on': return '🛠️';
      case 'discussion': return '💬';
      case 'audio-visual': return '🎵';
      case 'interactive-lesson': return '📚';
      default: return '📋';
    }
  };

  // 미션 타입에 따른 색상
  const getColor = () => {
    switch (mission.type) {
      case 'hands-on': return 'from-orange-500 to-amber-600';
      case 'discussion': return 'from-cyan-500 to-blue-600';
      default: return 'from-violet-500 to-purple-600';
    }
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6 md:p-8">
      {/* 진행률 표시 */}
      {steps.length > 1 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>단계 {step + 1} / {steps.length}</span>
            <span>{currentStep.title}</span>
          </div>
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${getColor()}`}
              animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      <div className="text-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${getColor()} rounded-2xl flex items-center justify-center text-4xl border-2 border-slate-600`}
        >
          {getIcon()}
        </motion.div>

        <h3 className="text-2xl font-black mb-2 text-white">{mission.title}</h3>

        {mission.concept && (
          <div className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-xl font-medium mb-4">
            학습 개념: {mission.concept}
          </div>
        )}

        <motion.div
          key={`content-${step}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-slate-900/50 rounded-xl p-6 mb-6 border-2 border-slate-600 text-left"
        >
          <h4 className="text-lg font-bold text-violet-300 mb-3">{currentStep.title}</h4>
          <p className="text-slate-300 leading-relaxed">{currentStep.content}</p>

          {/* Discussion 타입에서 입력 필드 */}
          {currentStep.hasInput && (
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="여기에 생각을 적어보세요..."
              className="w-full mt-4 p-4 rounded-xl border-2 border-slate-600 bg-slate-700 text-white resize-none h-32 focus:outline-none focus:border-violet-500"
            />
          )}

          {/* 힌트 표시 */}
          {mission.hints && mission.hints.length > 0 && step === 0 && (
            <div className="mt-4 p-3 bg-amber-900/30 rounded-lg border border-amber-700">
              <p className="text-sm text-amber-300">💡 힌트: {mission.hints[0]}</p>
            </div>
          )}
        </motion.div>

        {completed ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-4 bg-emerald-900/30 rounded-xl border border-emerald-500 text-emerald-300 font-bold"
          >
            ✅ 잘했어요! 학습 완료!
          </motion.div>
        ) : (
          <button
            onClick={handleNext}
            disabled={currentStep.hasInput && !userInput.trim()}
            className={`px-8 py-4 bg-gradient-to-r ${getColor()} text-white font-bold rounded-xl border-2 border-slate-600 hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {currentStep.action}
          </button>
        )}
      </div>
    </div>
  );
};

export default Mission;

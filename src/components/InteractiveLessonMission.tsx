import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Volume2, RefreshCw, Zap, Star } from 'lucide-react';
import { Mission as MissionType } from '../types';

interface Props {
  mission: MissionType;
  onComplete: (perfect: boolean) => void;
}

const InteractiveLessonMission: React.FC<Props> = ({ mission, onComplete }) => {
  const concept = (mission.concept || '').toLowerCase();
  const title = (mission.title || '').toLowerCase();

  // 1. 특정 미션 ID에 대한 특수 컴포넌트
  if (mission.id === '1-1-1') {
    return <AlgorithmIntroduction mission={mission} onComplete={onComplete} />;
  } else if (mission.id === '1-5-8') {
    return <VendingMachineSimulation mission={mission} onComplete={onComplete} />;
  } else if (mission.id === '1-3-8') {
    return <MusicRhythmMaker mission={mission} onComplete={onComplete} />;
  } else if (mission.id === '1-4-9') {
    return <FractalExplorer mission={mission} onComplete={onComplete} />;
  }

  // 2. Concept 기반 라우팅 - 핵심 개념별 특수 컴포넌트
  if (concept.includes('패턴') || title.includes('패턴')) {
    return <PatternConceptLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('반복') || title.includes('반복')) {
    return <LoopConceptLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('조건') || title.includes('조건') || concept.includes('and') || concept.includes('or')) {
    return <ConditionalConceptLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('분해') || title.includes('분해')) {
    return <DecompositionLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('추상화') || title.includes('추상화')) {
    return <AbstractionLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('버그') || concept.includes('디버깅') || title.includes('버그') || title.includes('디버깅')) {
    return <DebuggingLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('변수') || title.includes('변수')) {
    return <VariableConceptLesson mission={mission} onComplete={onComplete} />;
  }
  if (concept.includes('함수') || title.includes('함수')) {
    return <FunctionConceptLesson mission={mission} onComplete={onComplete} />;
  }

  // 3. 프로그래밍 언어별 특수 컴포넌트
  const language = (mission.language || '').toLowerCase();

  // Python 관련
  if (language === 'python' || concept.includes('python') || title.includes('python') ||
      concept.includes('print') || title.includes('print()') ||
      concept.includes('블록 → 텍스트') || title.includes('블록에서 텍스트')) {
    return <PythonConceptLesson mission={mission} onComplete={onComplete} />;
  }

  // HTML/CSS 관련
  if (language === 'html' || language === 'css' ||
      concept.includes('html') || concept.includes('css') ||
      concept.includes('태그') || concept.includes('웹 페이지') ||
      title.includes('html') || title.includes('css') || title.includes('태그')) {
    return <HTMLCSSConceptLesson mission={mission} onComplete={onComplete} />;
  }

  // JavaScript 관련
  if (language === 'javascript' || language === 'js' ||
      concept.includes('javascript') || concept.includes('dom') || concept.includes('이벤트') ||
      title.includes('javascript') || title.includes('dom')) {
    return <JavaScriptConceptLesson mission={mission} onComplete={onComplete} />;
  }

  // AI 관련
  if (concept.includes('ai') || concept.includes('인공지능') || concept.includes('머신러닝') ||
      concept.includes('프롬프트') || concept.includes('챗봇') ||
      title.includes('ai') || title.includes('인공지능') || title.includes('프롬프트')) {
    return <AIConceptLesson mission={mission} onComplete={onComplete} />;
  }

  // 4. 기본 fallback (개선된 버전)
  return <EnhancedGenericLesson mission={mission} onComplete={onComplete} />;
};

// ==================== 알고리즘 첫 만남 (게임화된 버전) ====================
const AlgorithmIntroduction: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([null, null, null]);
  const [showResult, setShowResult] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  // 🎮 로봇 댄스 게임 상태
  const [robotDanceSteps, setRobotDanceSteps] = useState<string[]>([]);
  const [isRobotDancing, setIsRobotDancing] = useState(false);
  const [robotPosition, setRobotPosition] = useState({ x: 0, rotation: 0 });
  const [danceScore, setDanceScore] = useState(0);
  const [showDanceResult, setShowDanceResult] = useState(false);

  // 🎯 알고리즘 분류 게임 상태
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [sortingSubmitted, setSortingSubmitted] = useState(false);
  const [sortingScore, setSortingScore] = useState(0);

  // 활동 완료 상태
  const [danceCompleted, setDanceCompleted] = useState(false);
  const [sortingCompleted, setSortingCompleted] = useState(false);

  // 단계별 콘텐츠
  const steps = [
    { id: 'intro', title: '알고리즘이란?', icon: '🤔' },
    { id: 'robot-dance', title: '🤖 로봇 댄스', icon: '🕺' },
    { id: 'sorting-game', title: '🎯 분류 게임', icon: '🎮' },
    { id: 'quiz', title: '확인 퀴즈', icon: '📝' },
  ];

  // 로봇 댄스 명령어
  const danceCommands = [
    { id: 'left', label: '⬅️ 왼쪽', action: () => ({ x: -30, rotation: -15 }) },
    { id: 'right', label: '➡️ 오른쪽', action: () => ({ x: 30, rotation: 15 }) },
    { id: 'jump', label: '⬆️ 점프', action: () => ({ x: 0, rotation: 0 }) },
    { id: 'spin', label: '🔄 회전', action: () => ({ x: 0, rotation: 360 }) },
  ];

  // 정답 댄스 시퀀스
  const correctDanceSequence = ['left', 'right', 'jump', 'spin'];

  // 로봇 댄스 실행
  const executeRobotDance = async () => {
    if (robotDanceSteps.length !== 4) return;

    setIsRobotDancing(true);
    setRobotPosition({ x: 0, rotation: 0 });

    let totalX = 0;
    let totalRotation = 0;

    for (let i = 0; i < robotDanceSteps.length; i++) {
      const cmd = danceCommands.find(c => c.id === robotDanceSteps[i]);
      if (cmd) {
        const result = cmd.action();
        totalX += result.x;
        totalRotation += result.rotation;
        setRobotPosition({ x: totalX, rotation: totalRotation });
        await new Promise(resolve => setTimeout(resolve, 600));
      }
    }

    setIsRobotDancing(false);

    // 점수 계산
    let score = 0;
    robotDanceSteps.forEach((step, i) => {
      if (step === correctDanceSequence[i]) score++;
    });
    setDanceScore(score);
    setShowDanceResult(true);

    if (score >= 3) {
      setDanceCompleted(true);
    }
  };

  // 댄스 단계 추가
  const addDanceStep = (stepId: string) => {
    if (robotDanceSteps.length < 4 && !isRobotDancing) {
      setRobotDanceSteps([...robotDanceSteps, stepId]);
    }
  };

  // 댄스 초기화
  const resetDance = () => {
    setRobotDanceSteps([]);
    setRobotPosition({ x: 0, rotation: 0 });
    setShowDanceResult(false);
    setDanceScore(0);
  };

  // 분류 게임 아이템
  const sortingItems = [
    { id: 's1', text: '손 씻기 순서', isAlgo: true, emoji: '🧼' },
    { id: 's2', text: '하늘의 색깔', isAlgo: false, emoji: '☁️' },
    { id: 's3', text: '신발 끈 묶기', isAlgo: true, emoji: '👟' },
    { id: 's4', text: '좋아하는 음식', isAlgo: false, emoji: '🍕' },
    { id: 's5', text: '학교 가는 길', isAlgo: true, emoji: '🏫' },
    { id: 's6', text: '친구의 이름', isAlgo: false, emoji: '👫' },
    { id: 's7', text: '컵라면 끓이기', isAlgo: true, emoji: '🍜' },
    { id: 's8', text: '오늘의 날씨', isAlgo: false, emoji: '🌤️' },
  ];

  // 분류 게임 제출
  const submitSorting = () => {
    let correct = 0;
    sortingItems.forEach(item => {
      const userSelected = selectedItems.has(item.id);
      if (userSelected === item.isAlgo) correct++;
    });
    setSortingScore(correct);
    setSortingSubmitted(true);
    if (correct >= 6) {
      setSortingCompleted(true);
    }
  };

  // 분류 게임 초기화
  const resetSorting = () => {
    setSelectedItems(new Set());
    setSortingSubmitted(false);
    setSortingScore(0);
  };

  // 아이템 선택 토글
  const toggleItem = (id: string) => {
    if (sortingSubmitted) return;
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  // 일상 속 알고리즘 예시
  const algorithmExamples = [
    {
      id: 'recipe',
      title: '요리 레시피',
      emoji: '🍳',
      description: '라면 끓이기',
      steps: ['물 500ml를 냄비에 넣는다', '물이 끓으면 면을 넣는다', '3분 기다린다', '스프를 넣고 젓는다', '불을 끄고 그릇에 담는다'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'game',
      title: '가위바위보',
      emoji: '✊',
      description: '게임 규칙',
      steps: ['가위, 바위, 보 중 하나를 낸다', '상대방도 하나를 낸다', '가위는 보를 이긴다', '바위는 가위를 이긴다', '보는 바위를 이긴다'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      id: 'teeth',
      title: '이 닦기',
      emoji: '🦷',
      description: '양치질 순서',
      steps: ['칫솔에 치약을 짠다', '입안에 칫솔을 넣는다', '위아래로 10번 닦는다', '좌우로 10번 닦는다', '물로 헹군다'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'traffic',
      title: '횡단보도 건너기',
      emoji: '🚦',
      description: '안전 규칙',
      steps: ['횡단보도 앞에 선다', '신호등을 확인한다', '초록불이면 좌우를 살핀다', '차가 없으면 건넌다', '뛰지 말고 걸어간다'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  // 퀴즈 문제
  const quizzes = [
    {
      question: '알고리즘이란 무엇인가요?',
      options: [
        '컴퓨터를 켜는 방법',
        '문제를 해결하기 위한 단계별 절차',
        '게임의 이름',
        '인터넷 주소',
      ],
      correct: 1,
      explanation: '알고리즘은 문제를 해결하기 위해 정해진 순서대로 실행하는 단계별 절차예요!',
    },
    {
      question: '다음 중 알고리즘의 예시가 아닌 것은?',
      options: [
        '라면 끓이는 방법',
        '오늘의 기분',
        '운동화 끈 묶는 순서',
        '레고 조립 설명서',
      ],
      correct: 1,
      explanation: '"오늘의 기분"은 순서나 절차가 아니에요. 나머지는 모두 단계별 절차가 있는 알고리즘이에요!',
    },
    {
      question: '알고리즘에서 순서가 중요한 이유는?',
      options: [
        '순서는 중요하지 않다',
        '순서가 바뀌면 결과가 달라질 수 있다',
        '순서가 있으면 예쁘기 때문이다',
        '컴퓨터가 순서를 좋아해서',
      ],
      correct: 1,
      explanation: '라면을 끓일 때 스프를 먼저 넣고 물을 나중에 넣으면 맛이 달라지듯, 순서는 결과에 큰 영향을 미쳐요!',
    },
  ];

  // 애니메이션 효과
  useEffect(() => {
    if (currentStep === 0) {
      const timer = setInterval(() => {
        setAnimationPhase((prev) => (prev + 1) % 4);
      }, 1500);
      return () => clearInterval(timer);
    }
  }, [currentStep]);

  const handleQuizAnswer = (quizIndex: number, answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[quizIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const getQuizScore = () => {
    return quizAnswers.filter((answer, index) => answer === quizzes[index].correct).length;
  };

  const canComplete = getQuizScore() >= 2; // 3문제 중 2문제 이상 맞추면 통과

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            {/* 애니메이션 영역 */}
            <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 rounded-2xl p-8 border border-violet-500/30">
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: animationPhase === 0 ? 0 : animationPhase === 1 ? 5 : animationPhase === 2 ? -5 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl"
                >
                  {animationPhase === 0 ? '🤔' : animationPhase === 1 ? '💡' : animationPhase === 2 ? '📝' : '✅'}
                </motion.div>
              </div>
              <div className="text-center">
                <motion.h3
                  key={animationPhase}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold text-white mb-4"
                >
                  {animationPhase === 0
                    ? '문제가 있어요!'
                    : animationPhase === 1
                    ? '해결 방법을 생각해요'
                    : animationPhase === 2
                    ? '단계별로 정리해요'
                    : '완료!'}
                </motion.h3>
              </div>
            </div>

            {/* 개념 설명 */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                알고리즘이 뭘까요?
              </h4>
              <div className="space-y-4 text-slate-300">
                <p className="text-lg">
                  <span className="text-violet-400 font-bold">알고리즘</span>은{' '}
                  <span className="bg-violet-500/20 px-2 py-1 rounded">
                    문제를 해결하기 위한 단계별 절차
                  </span>
                  예요!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-violet-900/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">1️⃣</div>
                    <p className="text-sm">순서가 있어요</p>
                  </div>
                  <div className="bg-violet-900/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">🔄</div>
                    <p className="text-sm">반복할 수 있어요</p>
                  </div>
                  <div className="bg-violet-900/30 rounded-xl p-4 text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <p className="text-sm">결과가 나와요</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 비유 설명 */}
            <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-6 border border-amber-500/30">
              <h4 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                쉽게 이해하기
              </h4>
              <p className="text-amber-200">
                요리할 때 <strong>레시피</strong>를 따라하죠? 레고를 조립할 때{' '}
                <strong>설명서</strong>를 보죠? 이런 것들이 모두{' '}
                <strong className="text-yellow-400">알고리즘</strong>이에요! 순서대로 따라하면
                원하는 결과를 얻을 수 있어요. 🎉
              </p>
            </div>
          </div>
        );

      case 1:
        // 🤖 로봇 댄스 게임
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">🤖 로봇 댄스 게임</h3>
              <p className="text-slate-300">
                로봇에게 춤 동작을 알려주세요! <span className="text-yellow-400">순서대로</span> 명령을 입력하면 로봇이 춤을 춰요.
              </p>
              <p className="text-sm text-violet-400 mt-2">
                목표: <span className="font-bold">왼쪽 → 오른쪽 → 점프 → 회전</span> 순서로 입력하기!
              </p>
            </div>

            {/* 로봇 스테이지 */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-8 border-2 border-slate-600 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent top-1/4" />
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent top-2/4" />
                <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent top-3/4" />
              </div>

              <div className="flex justify-center items-center h-40">
                <motion.div
                  animate={{
                    x: robotPosition.x,
                    rotate: robotPosition.rotation,
                    y: isRobotDancing ? [0, -20, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-8xl"
                >
                  🤖
                </motion.div>
              </div>

              {/* 댄스 완료 표시 */}
              {danceCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold"
                >
                  ✓ 클리어!
                </motion.div>
              )}
            </div>

            {/* 입력된 명령어 */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">입력된 명령 ({robotDanceSteps.length}/4):</p>
              <div className="flex gap-2 min-h-[48px] items-center">
                {robotDanceSteps.length === 0 ? (
                  <span className="text-slate-500">아래 버튼을 눌러 명령을 추가하세요...</span>
                ) : (
                  robotDanceSteps.map((step, i) => {
                    const cmd = danceCommands.find(c => c.id === step);
                    const isCorrect = showDanceResult && step === correctDanceSequence[i];
                    const isWrong = showDanceResult && step !== correctDanceSequence[i];
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`px-4 py-2 rounded-lg font-bold flex items-center gap-1 ${
                          isCorrect ? 'bg-emerald-500 text-white' :
                          isWrong ? 'bg-red-500 text-white' :
                          'bg-violet-500 text-white'
                        }`}
                      >
                        <span className="text-xs opacity-70">{i + 1}.</span>
                        {cmd?.label}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </div>

            {/* 명령어 버튼 */}
            <div className="grid grid-cols-4 gap-3">
              {danceCommands.map((cmd) => (
                <motion.button
                  key={cmd.id}
                  onClick={() => addDanceStep(cmd.id)}
                  disabled={robotDanceSteps.length >= 4 || isRobotDancing}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-violet-500 hover:to-purple-500"
                >
                  {cmd.label}
                </motion.button>
              ))}
            </div>

            {/* 결과 표시 */}
            {showDanceResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-center ${
                  danceScore >= 3 ? 'bg-emerald-500/30 border border-emerald-500' : 'bg-amber-500/30 border border-amber-500'
                }`}
              >
                <p className="font-bold text-xl">
                  {danceScore >= 3 ? '🎉 완벽해요!' : danceScore >= 2 ? '👍 좋아요!' : '💪 다시 도전해보세요!'}
                </p>
                <p className="text-sm mt-1">정답률: {danceScore}/4</p>
              </motion.div>
            )}

            {/* 액션 버튼 */}
            <div className="flex gap-3">
              <button
                onClick={resetDance}
                className="flex-1 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600"
              >
                🔄 초기화
              </button>
              <button
                onClick={executeRobotDance}
                disabled={robotDanceSteps.length !== 4 || isRobotDancing}
                className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold disabled:opacity-50 hover:from-green-400 hover:to-emerald-400"
              >
                {isRobotDancing ? '🎵 춤추는 중...' : '▶️ 실행하기'}
              </button>
            </div>
          </div>
        );

      case 2:
        // 🎯 알고리즘 분류 게임
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">🎯 알고리즘 분류 게임</h3>
              <p className="text-slate-300">
                <span className="text-emerald-400 font-bold">알고리즘</span>인 것만 클릭해서 선택하세요!
              </p>
              <p className="text-sm text-slate-400 mt-1">
                힌트: 알고리즘은 <span className="text-yellow-400">순서</span>가 있고, 따라하면 <span className="text-yellow-400">결과</span>가 나와요.
              </p>
            </div>

            {/* 아이템 그리드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {sortingItems.map((item) => {
                const isSelected = selectedItems.has(item.id);
                const showCorrect = sortingSubmitted && item.isAlgo;
                const showWrong = sortingSubmitted && isSelected && !item.isAlgo;
                const showMissed = sortingSubmitted && !isSelected && item.isAlgo;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    disabled={sortingSubmitted}
                    whileHover={!sortingSubmitted ? { scale: 1.05 } : {}}
                    whileTap={!sortingSubmitted ? { scale: 0.95 } : {}}
                    className={`p-4 rounded-xl text-center transition-all border-2 ${
                      sortingSubmitted
                        ? showCorrect && isSelected
                          ? 'bg-emerald-500/30 border-emerald-500'
                          : showWrong
                          ? 'bg-red-500/30 border-red-500'
                          : showMissed
                          ? 'bg-amber-500/30 border-amber-500 animate-pulse'
                          : 'bg-slate-700/30 border-slate-600'
                        : isSelected
                        ? 'bg-violet-500/30 border-violet-500 ring-2 ring-violet-400'
                        : 'bg-slate-700/50 border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <span className="text-3xl block mb-2">{item.emoji}</span>
                    <p className="font-medium text-sm text-white">{item.text}</p>

                    {sortingSubmitted && (
                      <p className={`text-xs mt-2 font-bold ${
                        showCorrect && isSelected ? 'text-emerald-400' :
                        showWrong ? 'text-red-400' :
                        showMissed ? 'text-amber-400' :
                        'text-slate-500'
                      }`}>
                        {showCorrect && isSelected && '✓ 정답!'}
                        {showWrong && '✗ 틀림'}
                        {showMissed && '놓침!'}
                        {!showCorrect && !showWrong && !showMissed && (item.isAlgo ? '' : '✓ 맞음')}
                      </p>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* 선택 카운트 */}
            {!sortingSubmitted && (
              <div className="text-center text-slate-400">
                선택: <span className="text-violet-400 font-bold">{selectedItems.size}</span>개
                (알고리즘은 총 4개!)
              </div>
            )}

            {/* 결과 표시 */}
            {sortingSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-center ${
                  sortingScore >= 6 ? 'bg-emerald-500/30 border border-emerald-500' : 'bg-amber-500/30 border border-amber-500'
                }`}
              >
                <p className="font-bold text-xl">
                  {sortingScore >= 7 ? '🎉 완벽해요!' : sortingScore >= 6 ? '👍 잘했어요!' : '💪 다시 도전!'}
                </p>
                <p className="text-sm mt-1">정답률: {sortingScore}/8</p>
                {sortingScore >= 6 && (
                  <p className="text-emerald-400 text-sm mt-2">
                    ✓ 알고리즘: 순서가 있고 결과가 나오는 것!
                  </p>
                )}
              </motion.div>
            )}

            {/* 완료 표시 */}
            {sortingCompleted && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-2xl shadow-2xl z-50"
              >
                🎉 미션 클리어!
              </motion.div>
            )}

            {/* 액션 버튼 */}
            <div className="flex gap-3">
              <button
                onClick={resetSorting}
                className="flex-1 py-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-slate-600"
              >
                🔄 초기화
              </button>
              <button
                onClick={submitSorting}
                disabled={sortingSubmitted || selectedItems.size === 0}
                className="flex-1 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl font-bold disabled:opacity-50 hover:from-violet-400 hover:to-purple-400"
              >
                ✓ 제출하기
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <p className="text-slate-300 text-center text-lg">
              배운 내용을 확인해볼까요? 3문제 중 <strong className="text-green-400">2문제</strong>
              이상 맞추면 통과!
            </p>
            <div className="space-y-6">
              {quizzes.map((quiz, qIndex) => (
                <div
                  key={qIndex}
                  className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700"
                >
                  <h5 className="font-bold text-white mb-4">
                    Q{qIndex + 1}. {quiz.question}
                  </h5>
                  <div className="grid grid-cols-1 gap-2">
                    {quiz.options.map((option, oIndex) => {
                      const isSelected = quizAnswers[qIndex] === oIndex;
                      const isCorrect = showResult && oIndex === quiz.correct;
                      const isWrong = showResult && isSelected && oIndex !== quiz.correct;

                      return (
                        <button
                          key={oIndex}
                          onClick={() => !showResult && handleQuizAnswer(qIndex, oIndex)}
                          disabled={showResult}
                          className={`p-3 rounded-xl text-left transition-all flex items-center gap-3 ${
                            isCorrect
                              ? 'bg-green-500/30 border-2 border-green-500'
                              : isWrong
                              ? 'bg-red-500/30 border-2 border-red-500'
                              : isSelected
                              ? 'bg-violet-500/30 border-2 border-violet-500'
                              : 'bg-slate-700/50 border-2 border-slate-600 hover:border-slate-500'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              isCorrect
                                ? 'bg-green-500 text-white'
                                : isWrong
                                ? 'bg-red-500 text-white'
                                : isSelected
                                ? 'bg-violet-500 text-white'
                                : 'bg-slate-600 text-slate-300'
                            }`}
                          >
                            {oIndex + 1}
                          </span>
                          <span className={isCorrect ? 'text-green-300' : isWrong ? 'text-red-300' : 'text-slate-300'}>
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 p-3 bg-slate-900/50 rounded-lg"
                    >
                      <p className="text-sm text-slate-300">{quiz.explanation}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {!showResult ? (
              <button
                onClick={() => setShowResult(true)}
                disabled={quizAnswers.some((a) => a === null)}
                className="w-full py-4 bg-violet-600 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-violet-500 transition-colors"
              >
                {quizAnswers.some((a) => a === null) ? '모든 문제에 답해주세요' : '정답 확인하기'}
              </button>
            ) : (
              <div className="text-center">
                <div
                  className={`text-6xl mb-4 ${getQuizScore() >= 2 ? 'animate-bounce' : ''}`}
                >
                  {getQuizScore() >= 2 ? '🎉' : '💪'}
                </div>
                <p className="text-2xl font-bold text-white mb-2">
                  {getQuizScore()}/3 정답!
                </p>
                <p className={`text-lg ${getQuizScore() >= 2 ? 'text-green-400' : 'text-amber-400'}`}>
                  {getQuizScore() >= 2 ? '훌륭해요! 미션을 완료할 수 있어요!' : '다시 도전해보세요!'}
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🧠</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
        <div className="mt-2 px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium inline-block border border-violet-500/30">
          📚 학습 개념: {mission.concept}
        </div>
      </div>

      {/* 진행 표시 */}
      <div className="flex gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              currentStep === index
                ? 'bg-violet-500 text-white'
                : currentStep > index
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            {currentStep > index && <CheckCircle className="w-3 h-3" />}
            <span className="text-lg">{step.icon}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="flex-1 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-500 transition-colors"
          >
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(getQuizScore() === 3)}
            disabled={!canComplete}
            whileHover={canComplete ? { scale: 1.02 } : {}}
            whileTap={canComplete ? { scale: 0.98 } : {}}
            className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_4px_0_0_#15803d]'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {canComplete ? '미션 완료!' : '퀴즈를 통과해주세요'}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 자판기 시뮬레이션 ====================
const VendingMachineSimulation: React.FC<Props> = ({ mission, onComplete }) => {
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [insertedMoney, setInsertedMoney] = useState(0);
  const [dispensedDrink, setDispensedDrink] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [change, setChange] = useState(0);

  const drinks = [
    { id: 'cola', name: '콜라', price: 1000, emoji: '🥤', color: 'from-red-500 to-red-700' },
    { id: 'cider', name: '사이다', price: 1000, emoji: '🧋', color: 'from-green-500 to-green-700' },
    { id: 'coffee', name: '커피', price: 1500, emoji: '☕', color: 'from-amber-600 to-amber-800' },
    { id: 'juice', name: '오렌지주스', price: 1200, emoji: '🧃', color: 'from-orange-400 to-orange-600' },
  ];

  const moneyOptions = [100, 500, 1000];

  const insertMoney = (amount: number) => {
    setInsertedMoney(prev => prev + amount);
    if (!completedTasks.includes('insert')) {
      setCompletedTasks(prev => [...prev, 'insert']);
    }
  };

  const selectDrink = (drinkId: string) => {
    setSelectedDrink(drinkId);
    if (!completedTasks.includes('select')) {
      setCompletedTasks(prev => [...prev, 'select']);
    }
  };

  const buyDrink = () => {
    if (!selectedDrink) return;
    const drink = drinks.find(d => d.id === selectedDrink);
    if (!drink || insertedMoney < drink.price) return;

    setChange(insertedMoney - drink.price);
    setDispensedDrink(drink.emoji);
    setShowResult(true);

    if (!completedTasks.includes('buy')) {
      setCompletedTasks(prev => [...prev, 'buy']);
    }
  };

  const reset = () => {
    setSelectedDrink(null);
    setInsertedMoney(0);
    setDispensedDrink(null);
    setShowResult(false);
    setChange(0);
  };

  const isComplete = completedTasks.length >= 3;
  const selectedDrinkInfo = drinks.find(d => d.id === selectedDrink);

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🎰</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
        <div className="mt-2 px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium inline-block border border-violet-500/30">
          📚 학습 개념: {mission.concept}
        </div>
      </div>

      {/* 진행 상황 */}
      <div className="mb-4 flex gap-2">
        {['insert', 'select', 'buy'].map((task, i) => (
          <div
            key={task}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              completedTasks.includes(task)
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            {completedTasks.includes(task) && <CheckCircle className="w-3 h-3" />}
            {i + 1}. {task === 'insert' ? '돈 넣기' : task === 'select' ? '음료 선택' : '구매하기'}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 자판기 */}
        <div className="bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl p-6 border-4 border-blue-700 shadow-lg">
          {/* 음료 선택 버튼 */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {drinks.map((drink) => (
              <motion.button
                key={drink.id}
                onClick={() => selectDrink(drink.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-b ${drink.color} p-4 rounded-xl text-white font-bold flex flex-col items-center gap-2 border-2 transition-all ${
                  selectedDrink === drink.id
                    ? 'border-yellow-400 ring-2 ring-yellow-400/50'
                    : 'border-white/20'
                } ${insertedMoney >= drink.price ? 'opacity-100' : 'opacity-50'}`}
              >
                <span className="text-3xl">{drink.emoji}</span>
                <span className="text-sm">{drink.name}</span>
                <span className="text-xs bg-black/30 px-2 py-1 rounded-full">{drink.price}원</span>
              </motion.button>
            ))}
          </div>

          {/* 디스플레이 */}
          <div className="bg-black rounded-xl p-4 mb-4 text-center border-2 border-slate-600">
            <div className="text-green-400 font-mono text-2xl mb-1">{insertedMoney}원</div>
            <div className="text-slate-500 text-xs">
              {selectedDrinkInfo
                ? `${selectedDrinkInfo.name} 선택됨 (${selectedDrinkInfo.price}원)`
                : '음료를 선택하세요'}
            </div>
          </div>

          {/* 구매 버튼 */}
          <motion.button
            onClick={buyDrink}
            disabled={!selectedDrink || !selectedDrinkInfo || insertedMoney < selectedDrinkInfo.price}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-b from-yellow-500 to-yellow-600 text-yellow-900 font-bold rounded-xl disabled:opacity-30 disabled:cursor-not-allowed border-2 border-yellow-400 shadow-[0_4px_0_0_#a16207]"
          >
            구매하기
          </motion.button>

          {/* 배출구 */}
          <AnimatePresence>
            {dispensedDrink && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-4 bg-slate-900 rounded-xl p-4 text-center border-2 border-slate-600"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: 3, duration: 0.3 }}
                  className="text-5xl inline-block"
                >
                  {dispensedDrink}
                </motion.span>
                <p className="text-green-400 font-bold mt-2">음료가 나왔어요!</p>
                {change > 0 && <p className="text-yellow-400 text-sm">거스름돈: {change}원</p>}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 동전 투입 */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">💰</span> 돈 넣기
            </h4>
            <div className="flex gap-3 flex-wrap">
              {moneyOptions.map((amount) => (
                <motion.button
                  key={amount}
                  onClick={() => insertMoney(amount)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-b from-amber-400 to-amber-600 text-amber-900 font-bold rounded-xl shadow-[0_4px_0_0_#92400e] hover:shadow-[0_2px_0_0_#92400e] hover:translate-y-[2px] transition-all"
                >
                  {amount}원
                </motion.button>
              ))}
            </div>
          </div>

          {/* 설명 */}
          <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-500/30">
            <h4 className="font-bold text-blue-300 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5" /> 조건문 학습
            </h4>
            <div className="text-sm text-blue-200 space-y-2">
              <p>🔹 <strong>만약</strong> 돈이 충분하면 → 음료 버튼 활성화</p>
              <p>🔹 <strong>만약</strong> 음료를 선택하면 → 구매 가능</p>
              <p>🔹 <strong>만약</strong> 구매하면 → 음료 배출 + 거스름돈</p>
            </div>
            <div className="mt-4 p-3 bg-slate-900/50 rounded-lg">
              <code className="text-xs text-green-400 font-mono">
                if (돈 &gt;= 가격) {'{'}<br />
                &nbsp;&nbsp;음료 배출();<br />
                &nbsp;&nbsp;거스름돈 = 돈 - 가격;<br />
                {'}'}
              </code>
            </div>
          </div>

          {/* 리셋 & 완료 */}
          <div className="flex gap-3">
            <button
              onClick={reset}
              className="px-4 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> 다시하기
            </button>
            <motion.button
              onClick={() => onComplete(true)}
              disabled={!isComplete}
              whileHover={isComplete ? { scale: 1.02 } : {}}
              whileTap={isComplete ? { scale: 0.98 } : {}}
              className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
                isComplete
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_4px_0_0_#15803d]'
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              <CheckCircle className="w-5 h-5" />
              {isComplete ? '미션 완료!' : '3가지 단계를 완료하세요'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== 음악 리듬 만들기 ====================
const MusicRhythmMaker: React.FC<Props> = ({ mission, onComplete }) => {
  const [pattern, setPattern] = useState<boolean[][]>([
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(-1);
  const [tempo, setTempo] = useState(120);
  const audioContextRef = useRef<AudioContext | null>(null);

  const sounds = [
    { name: '킥', emoji: '🥁', freq: 100, color: 'from-red-500 to-red-700' },
    { name: '스네어', emoji: '🪘', freq: 200, color: 'from-orange-500 to-orange-700' },
    { name: '하이햇', emoji: '🔔', freq: 800, color: 'from-yellow-500 to-yellow-700' },
    { name: '클랩', emoji: '👏', freq: 400, color: 'from-purple-500 to-purple-700' },
  ];

  const playSound = (freq: number, type: OscillatorType = 'sine') => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioContextRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  };

  const toggleBeat = (row: number, col: number) => {
    const newPattern = [...pattern];
    newPattern[row] = [...newPattern[row]];
    newPattern[row][col] = !newPattern[row][col];
    setPattern(newPattern);

    if (newPattern[row][col]) {
      playSound(sounds[row].freq);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      const beatDuration = 60000 / tempo / 2;
      interval = setInterval(() => {
        setCurrentBeat(prev => {
          const next = (prev + 1) % 8;
          pattern.forEach((row, i) => {
            if (row[next]) {
              playSound(sounds[i].freq);
            }
          });
          return next;
        });
      }, beatDuration);
    } else {
      setCurrentBeat(-1);
    }
    return () => clearInterval(interval);
  }, [isPlaying, pattern, tempo]);

  const hasPattern = pattern.some(row => row.some(beat => beat));

  const presetPatterns = {
    'basic': [
      [true, false, false, false, true, false, false, false],
      [false, false, true, false, false, false, true, false],
      [true, true, true, true, true, true, true, true],
      [false, false, false, false, false, false, false, false],
    ],
    'funky': [
      [true, false, true, false, true, false, false, true],
      [false, false, true, false, false, true, true, false],
      [true, true, false, true, true, true, false, true],
      [false, true, false, false, false, true, false, false],
    ],
  };

  const loadPreset = (name: 'basic' | 'funky') => {
    setPattern(presetPatterns[name]);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🎵</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
        <div className="mt-2 px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium inline-block border border-violet-500/30">
          📚 학습 개념: {mission.concept}
        </div>
      </div>

      {/* 드럼 머신 */}
      <div className="bg-slate-900/80 rounded-2xl p-6 mb-6 border border-slate-700">
        <div className="space-y-3">
          {sounds.map((sound, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-3">
              <div className={`w-20 py-2 px-3 bg-gradient-to-r ${sound.color} rounded-lg text-white text-sm font-bold text-center`}>
                {sound.emoji} {sound.name}
              </div>
              <div className="flex gap-1 flex-1">
                {pattern[rowIndex].map((beat, colIndex) => (
                  <motion.button
                    key={colIndex}
                    onClick={() => toggleBeat(rowIndex, colIndex)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex-1 h-12 rounded-lg transition-all border-2 ${
                      beat
                        ? `bg-gradient-to-b ${sound.color} border-white/30 shadow-lg`
                        : 'bg-slate-800 border-slate-600 hover:border-slate-500'
                    } ${currentBeat === colIndex ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' : ''}`}
                  >
                    {colIndex % 4 === 0 && (
                      <span className="text-[10px] text-slate-500">{colIndex / 4 + 1}</span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 컨트롤 */}
      <div className="flex flex-wrap gap-3 mb-6">
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`px-6 py-3 font-bold rounded-xl flex items-center gap-2 ${
            isPlaying
              ? 'bg-gradient-to-b from-red-500 to-red-700 text-white'
              : 'bg-gradient-to-b from-green-500 to-green-700 text-white'
          } shadow-[0_4px_0_0_rgba(0,0,0,0.3)]`}
        >
          <Volume2 className="w-5 h-5" />
          {isPlaying ? '⏹ 정지' : '▶ 재생'}
        </motion.button>

        <button
          onClick={() => loadPreset('basic')}
          className="px-4 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500"
        >
          기본 패턴
        </button>
        <button
          onClick={() => loadPreset('funky')}
          className="px-4 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500"
        >
          펑키 패턴
        </button>
        <button
          onClick={() => setPattern(pattern.map(() => Array(8).fill(false)))}
          className="px-4 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
        >
          초기화
        </button>

        <div className="flex items-center gap-2 ml-auto">
          <span className="text-slate-400 text-sm">템포:</span>
          <input
            type="range"
            min="60"
            max="180"
            value={tempo}
            onChange={(e) => setTempo(Number(e.target.value))}
            className="w-24"
          />
          <span className="text-white font-mono">{tempo}</span>
        </div>
      </div>

      {/* 학습 설명 */}
      <div className="bg-purple-900/30 rounded-xl p-4 mb-6 border border-purple-500/30">
        <h4 className="font-bold text-purple-300 mb-2">🔁 반복 패턴 학습</h4>
        <p className="text-sm text-purple-200">
          8박자가 계속 <strong>반복</strong>됩니다. 각 악기의 비트를 클릭해서 패턴을 만들어보세요!
          같은 패턴이 반복되면서 리듬이 만들어집니다.
        </p>
      </div>

      {/* 완료 버튼 */}
      <motion.button
        onClick={() => onComplete(true)}
        disabled={!hasPattern}
        whileHover={hasPattern ? { scale: 1.02 } : {}}
        whileTap={hasPattern ? { scale: 0.98 } : {}}
        className={`w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 ${
          hasPattern
            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_4px_0_0_#15803d]'
            : 'bg-slate-700 text-slate-500 cursor-not-allowed'
        }`}
      >
        <CheckCircle className="w-5 h-5" />
        {hasPattern ? '패턴 완성! 미션 완료' : '패턴을 만들어주세요'}
      </motion.button>
    </div>
  );
};

// ==================== 프랙탈 탐색기 ====================
const FractalExplorer: React.FC<Props> = ({ mission, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [depth, setDepth] = useState(3);
  const [fractalType, setFractalType] = useState<'tree' | 'sierpinski' | 'koch'>('tree');
  const [angle, setAngle] = useState(30);
  const [explored, setExplored] = useState<string[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (fractalType === 'tree') {
      drawTree(ctx, canvas.width / 2, canvas.height - 20, -90, depth * 25 + 30, depth);
    } else if (fractalType === 'sierpinski') {
      drawSierpinski(ctx, canvas.width / 2, 30, canvas.width * 0.8, depth);
    } else if (fractalType === 'koch') {
      drawKoch(ctx, 50, canvas.height / 2, canvas.width - 50, canvas.height / 2, depth);
    }

    if (!explored.includes(fractalType)) {
      setExplored([...explored, fractalType]);
    }
  }, [depth, fractalType, angle]);

  const drawTree = (ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, length: number, depth: number) => {
    if (depth === 0 || length < 4) return;

    const rad = angle * Math.PI / 180;
    const x2 = x + length * Math.cos(rad);
    const y2 = y + length * Math.sin(rad);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = depth > 2 ? '#4ade80' : '#22c55e';
    ctx.lineWidth = depth;
    ctx.stroke();

    drawTree(ctx, x2, y2, angle - 25, length * 0.7, depth - 1);
    drawTree(ctx, x2, y2, angle + 25, length * 0.7, depth - 1);
  };

  const drawSierpinski = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, depth: number) => {
    if (depth === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - size / 2, y + size * 0.866);
      ctx.lineTo(x + size / 2, y + size * 0.866);
      ctx.closePath();
      ctx.fillStyle = '#8b5cf6';
      ctx.fill();
      return;
    }

    const newSize = size / 2;
    drawSierpinski(ctx, x, y, newSize, depth - 1);
    drawSierpinski(ctx, x - newSize / 2, y + newSize * 0.866, newSize, depth - 1);
    drawSierpinski(ctx, x + newSize / 2, y + newSize * 0.866, newSize, depth - 1);
  };

  const drawKoch = (ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, depth: number) => {
    if (depth === 0) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2;
      ctx.stroke();
      return;
    }

    const dx = (x2 - x1) / 3;
    const dy = (y2 - y1) / 3;
    const px1 = x1 + dx;
    const py1 = y1 + dy;
    const px2 = x1 + 2 * dx;
    const py2 = y1 + 2 * dy;

    const angle = Math.PI / 3;
    const peakX = px1 + dx * Math.cos(angle) - dy * Math.sin(angle);
    const peakY = py1 + dx * Math.sin(angle) + dy * Math.cos(angle);

    drawKoch(ctx, x1, y1, px1, py1, depth - 1);
    drawKoch(ctx, px1, py1, peakX, peakY, depth - 1);
    drawKoch(ctx, peakX, peakY, px2, py2, depth - 1);
    drawKoch(ctx, px2, py2, x2, y2, depth - 1);
  };

  const fractalTypes = [
    { id: 'tree', name: '나무', emoji: '🌳', desc: '가지가 두 개씩 나뉘는 패턴' },
    { id: 'sierpinski', name: '시어핀스키 삼각형', emoji: '🔺', desc: '삼각형 안에 삼각형이 반복' },
    { id: 'koch', name: '코흐 곡선', emoji: '❄️', desc: '눈송이 모양의 프랙탈' },
  ];

  const isComplete = explored.length >= 3;

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-6 relative z-10">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🔬</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
        <div className="mt-2 px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium inline-block border border-violet-500/30">
          📚 학습 개념: {mission.concept}
        </div>
      </div>

      {/* 진행률 */}
      <div className="mb-4 flex gap-2">
        {fractalTypes.map((type) => (
          <div
            key={type.id}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 ${
              explored.includes(type.id)
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            {explored.includes(type.id) && <CheckCircle className="w-3 h-3" />}
            {type.emoji} {type.name}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 캔버스 */}
        <div className="bg-slate-900 rounded-2xl p-4 border border-slate-700">
          <canvas
            ref={canvasRef}
            width={400}
            height={300}
            className="w-full rounded-xl"
          />
        </div>

        {/* 컨트롤 */}
        <div className="space-y-4">
          {/* 프랙탈 타입 선택 */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <h4 className="font-bold text-white mb-3">프랙탈 종류</h4>
            <div className="space-y-2">
              {fractalTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setFractalType(type.id as any)}
                  className={`w-full p-3 rounded-lg text-left flex items-center gap-3 transition-all ${
                    fractalType === type.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <span className="text-2xl">{type.emoji}</span>
                  <div>
                    <div className="font-bold">{type.name}</div>
                    <div className="text-xs opacity-70">{type.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 깊이 조절 */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <h4 className="font-bold text-white mb-3">반복 깊이: {depth}</h4>
            <input
              type="range"
              min="1"
              max="6"
              value={depth}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-slate-400 mt-2">
              깊이가 깊어질수록 같은 패턴이 더 작게 반복됩니다!
            </p>
          </div>

          {/* 설명 */}
          <div className="bg-cyan-900/30 rounded-xl p-4 border border-cyan-500/30">
            <h4 className="font-bold text-cyan-300 mb-2">🔄 자기 유사성</h4>
            <p className="text-sm text-cyan-200">
              프랙탈은 <strong>자기 유사성</strong>을 가집니다.
              작은 부분이 전체와 비슷한 모양이에요!
              이것이 <strong>재귀(Recursion)</strong>의 기초입니다.
            </p>
          </div>
        </div>
      </div>

      {/* 완료 버튼 */}
      <motion.button
        onClick={() => onComplete(true)}
        disabled={!isComplete}
        whileHover={isComplete ? { scale: 1.02 } : {}}
        whileTap={isComplete ? { scale: 0.98 } : {}}
        className={`w-full mt-6 py-4 font-bold rounded-xl flex items-center justify-center gap-2 ${
          isComplete
            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_4px_0_0_#15803d]'
            : 'bg-slate-700 text-slate-500 cursor-not-allowed'
        }`}
      >
        <CheckCircle className="w-5 h-5" />
        {isComplete ? '3가지 프랙탈 탐험 완료!' : `${3 - explored.length}개 더 탐험해보세요`}
      </motion.button>
    </div>
  );
};

// ==================== 패턴 개념 학습 ====================
const PatternConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 🎨 패턴 그리기 캔버스 게임 상태
  const [canvasPattern, setCanvasPattern] = useState<string[]>([]);
  const [targetPattern] = useState(['🔴', '🔵', '🟡', '🔴', '🔵', '🟡']);
  const [canvasCompleted, setCanvasCompleted] = useState(false);
  const availableColors = ['🔴', '🔵', '🟡', '🟢', '🟣', '🟠'];

  // 🧩 패턴 완성 게임 상태
  const [completionAnswers, setCompletionAnswers] = useState<{ [key: number]: string }>({});
  const [completionChecked, setCompletionChecked] = useState(false);
  const completionPatterns = [
    { sequence: ['🍎', '🍊', '🍎', '🍊', '?', '?'], answers: ['🍎', '🍊'], hint: '과일이 번갈아 나와요' },
    { sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'], answers: ['🌙'], hint: '별 2개 다음엔?' },
    { sequence: ['🐕', '🐈', '🐕', '🐕', '🐈', '?', '?'], answers: ['🐕', '🐕'], hint: '강아지가 점점 많아져요' },
  ];
  const [currentCompletionIndex, setCurrentCompletionIndex] = useState(0);

  // 🎵 리듬 패턴 게임 상태
  const [rhythmPattern, setRhythmPattern] = useState<string[]>([]);
  const [isPlayingRhythm, setIsPlayingRhythm] = useState(false);
  const [rhythmScore, setRhythmScore] = useState(0);
  const targetRhythm = ['🥁', '👏', '🥁', '👏', '🥁', '🥁', '👏', '👏'];
  const rhythmSounds = [
    { id: '🥁', label: '쿵', color: 'bg-red-500' },
    { id: '👏', label: '짝', color: 'bg-blue-500' },
  ];

  const steps = [
    { id: 'intro', title: '패턴이란?', icon: '🔍' },
    { id: 'canvas', title: '패턴 그리기', icon: '🎨' },
    { id: 'complete', title: '패턴 완성', icon: '🧩' },
    { id: 'rhythm', title: '리듬 패턴', icon: '🎵' },
    { id: 'finish', title: '완료', icon: '🏆' },
  ];

  // 캔버스에 색 추가
  const addToCanvas = (color: string) => {
    if (canvasPattern.length < 12) {
      const newPattern = [...canvasPattern, color];
      setCanvasPattern(newPattern);

      // 패턴 일치 확인
      if (newPattern.length >= 6) {
        const matches = newPattern.slice(0, 6).every((c, i) => c === targetPattern[i]);
        if (matches && !canvasCompleted) {
          setCanvasCompleted(true);
          setTotalScore(prev => prev + 30);
        }
      }
    }
  };

  const clearCanvas = () => {
    setCanvasPattern([]);
    setCanvasCompleted(false);
  };

  // 패턴 완성 답 선택
  const selectCompletionAnswer = (position: number, answer: string) => {
    setCompletionAnswers(prev => ({ ...prev, [position]: answer }));
  };

  const checkCompletion = () => {
    const current = completionPatterns[currentCompletionIndex];
    const questionMarks = current.sequence.filter(s => s === '?').length;
    const isCorrect = current.answers.every((ans, i) => completionAnswers[i] === ans);

    if (isCorrect) {
      setTotalScore(prev => prev + 20);
      if (currentCompletionIndex < completionPatterns.length - 1) {
        setCurrentCompletionIndex(prev => prev + 1);
        setCompletionAnswers({});
      } else {
        setCompletionChecked(true);
      }
    }
  };

  // 리듬 패턴 추가
  const addRhythm = (sound: string) => {
    if (rhythmPattern.length < 8) {
      setRhythmPattern(prev => [...prev, sound]);
    }
  };

  const clearRhythm = () => {
    setRhythmPattern([]);
    setRhythmScore(0);
  };

  // 리듬 재생 및 채점
  const playAndCheckRhythm = async () => {
    setIsPlayingRhythm(true);

    // 시각적 애니메이션
    for (let i = 0; i < rhythmPattern.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
    }

    // 채점
    let score = 0;
    rhythmPattern.forEach((beat, i) => {
      if (beat === targetRhythm[i]) score += 10;
    });

    setRhythmScore(score);
    if (score >= 60) {
      setTotalScore(prev => prev + score);
    }
    setIsPlayingRhythm(false);
  };

  const canComplete = totalScore >= 80;

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="mb-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🔍</span> {mission.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
          </div>
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-2 rounded-xl">
            <span className="text-white font-bold">점수: {totalScore}</span>
          </div>
        </div>
      </div>

      {/* 스텝 네비게이션 */}
      <div className="flex gap-1 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              currentStep === index
                ? 'bg-pink-500 text-white'
                : currentStep > index
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            <span className="text-base">{step.icon}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Step 0: 소개 */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-2xl p-6 border border-pink-500/30 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-7xl inline-block mb-4"
                >
                  🔍
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">패턴 탐정이 되어보세요!</h4>
                <p className="text-slate-200 text-lg">
                  패턴은 <span className="text-pink-400 font-bold">규칙적으로 반복되는 것</span>이에요!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex justify-center gap-1 mb-3">
                    {['🔴', '🔵', '🔴', '🔵', '🔴', '🔵'].map((c, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl"
                      >
                        {c}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-center text-slate-300 text-sm">🔴🔵 반복 패턴</p>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex justify-center gap-1 mb-3">
                    {['⭐', '⭐', '🌙', '⭐', '⭐', '🌙'].map((c, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-2xl"
                      >
                        {c}
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-center text-slate-300 text-sm">⭐⭐🌙 반복 패턴</p>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-500/30">
                <p className="text-amber-200 text-center">
                  💡 패턴을 찾으면 <span className="text-amber-300 font-bold">다음에 뭐가 올지 예측</span>할 수 있어요!
                </p>
              </div>
            </div>
          )}

          {/* Step 1: 패턴 그리기 캔버스 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-pink-900/30 rounded-xl p-4 border border-pink-500/30">
                <p className="text-pink-200 text-center mb-2">🎯 목표 패턴을 똑같이 그려보세요!</p>
                <div className="flex justify-center gap-2 p-3 bg-slate-800 rounded-lg">
                  {targetPattern.map((c, i) => (
                    <span key={i} className="text-3xl">{c}</span>
                  ))}
                </div>
              </div>

              {/* 그리기 캔버스 */}
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <p className="text-slate-300 text-sm mb-3">🖌️ 색을 클릭해서 패턴을 그려보세요:</p>

                {/* 색상 팔레트 */}
                <div className="flex justify-center gap-2 mb-4">
                  {availableColors.map((color) => (
                    <motion.button
                      key={color}
                      onClick={() => addToCanvas(color)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-4xl hover:bg-slate-700 rounded-xl p-2 transition-colors"
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>

                {/* 캔버스 영역 */}
                <div className="min-h-20 bg-slate-900 rounded-xl p-4 flex flex-wrap gap-2 items-center justify-center border-2 border-dashed border-slate-600">
                  {canvasPattern.length === 0 ? (
                    <p className="text-slate-500">색을 클릭해서 패턴을 만들어보세요!</p>
                  ) : (
                    canvasPattern.map((color, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-3xl"
                      >
                        {color}
                      </motion.span>
                    ))
                  )}
                </div>

                <button
                  onClick={clearCanvas}
                  className="mt-3 px-4 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm hover:bg-slate-600"
                >
                  🗑️ 지우기
                </button>
              </div>

              {canvasCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 text-lg font-bold">🎉 완벽해요! +30점</p>
                  <p className="text-green-400 text-sm mt-1">패턴을 정확하게 그렸어요!</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 2: 패턴 완성 게임 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30 text-center">
                <p className="text-purple-200">🧩 빈칸에 들어갈 것을 맞춰보세요!</p>
                <p className="text-purple-400 text-sm mt-1">
                  문제 {currentCompletionIndex + 1} / {completionPatterns.length}
                </p>
              </div>

              {!completionChecked && (
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  {/* 패턴 시퀀스 */}
                  <div className="flex justify-center gap-3 mb-6 flex-wrap">
                    {completionPatterns[currentCompletionIndex].sequence.map((item, i) => (
                      <div key={i} className="text-center">
                        {item === '?' ? (
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold border-2 border-dashed ${
                              completionAnswers[completionPatterns[currentCompletionIndex].sequence.slice(0, i).filter(s => s === '?').length]
                                ? 'bg-green-500/30 border-green-500'
                                : 'bg-slate-700 border-purple-500'
                            }`}
                          >
                            {completionAnswers[completionPatterns[currentCompletionIndex].sequence.slice(0, i).filter(s => s === '?').length] || '?'}
                          </motion.div>
                        ) : (
                          <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-3xl">
                            {item}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* 힌트 */}
                  <div className="bg-amber-900/30 rounded-lg p-3 mb-4">
                    <p className="text-amber-200 text-sm text-center">
                      💡 힌트: {completionPatterns[currentCompletionIndex].hint}
                    </p>
                  </div>

                  {/* 선택지 */}
                  <p className="text-slate-300 text-sm mb-3">선택하세요:</p>
                  <div className="flex justify-center gap-3 flex-wrap">
                    {['🍎', '🍊', '⭐', '🌙', '🐕', '🐈'].map((option) => (
                      <motion.button
                        key={option}
                        onClick={() => {
                          const questionIndex = Object.keys(completionAnswers).length;
                          if (questionIndex < completionPatterns[currentCompletionIndex].answers.length) {
                            selectCompletionAnswer(questionIndex, option);
                          }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 bg-slate-700 hover:bg-slate-600 rounded-xl flex items-center justify-center text-3xl transition-colors"
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setCompletionAnswers({})}
                      className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg"
                    >
                      다시 선택
                    </button>
                    <button
                      onClick={checkCompletion}
                      disabled={Object.keys(completionAnswers).length < completionPatterns[currentCompletionIndex].answers.length}
                      className="flex-1 py-2 bg-purple-600 text-white font-bold rounded-lg disabled:opacity-50"
                    >
                      확인하기
                    </button>
                  </div>
                </div>
              )}

              {completionChecked && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center"
                >
                  <p className="text-6xl mb-4">🎊</p>
                  <p className="text-green-300 text-xl font-bold">모든 패턴 완성!</p>
                  <p className="text-green-400 mt-2">+{completionPatterns.length * 20}점 획득!</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 3: 리듬 패턴 게임 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-blue-200 mb-2">🎵 목표 리듬과 같은 패턴을 만들어보세요!</p>
                <div className="flex justify-center gap-1 p-3 bg-slate-800 rounded-lg">
                  {targetRhythm.map((beat, i) => (
                    <span key={i} className="text-2xl">{beat}</span>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-2">쿵-짝-쿵-짝-쿵-쿵-짝-짝</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <p className="text-slate-300 text-sm mb-3">🥁 드럼을 클릭해서 리듬을 만드세요:</p>

                {/* 리듬 버튼 */}
                <div className="flex justify-center gap-4 mb-4">
                  {rhythmSounds.map((sound) => (
                    <motion.button
                      key={sound.id}
                      onClick={() => addRhythm(sound.id)}
                      disabled={rhythmPattern.length >= 8 || isPlayingRhythm}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className={`w-24 h-24 ${sound.color} rounded-2xl flex flex-col items-center justify-center text-white font-bold shadow-lg disabled:opacity-50`}
                    >
                      <span className="text-4xl">{sound.id}</span>
                      <span className="text-sm">{sound.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* 리듬 디스플레이 */}
                <div className="min-h-16 bg-slate-900 rounded-xl p-4 flex items-center justify-center gap-1 border-2 border-dashed border-slate-600">
                  {rhythmPattern.length === 0 ? (
                    <p className="text-slate-500">버튼을 눌러 리듬을 만들어보세요!</p>
                  ) : (
                    rhythmPattern.map((beat, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="text-3xl"
                      >
                        {beat}
                      </motion.span>
                    ))
                  )}
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={clearRhythm}
                    className="px-4 py-2 bg-slate-700 text-slate-300 rounded-lg"
                  >
                    🗑️ 지우기
                  </button>
                  <button
                    onClick={playAndCheckRhythm}
                    disabled={rhythmPattern.length < 8 || isPlayingRhythm}
                    className="flex-1 py-2 bg-blue-600 text-white font-bold rounded-lg disabled:opacity-50"
                  >
                    {isPlayingRhythm ? '재생 중...' : '▶️ 재생 & 채점'}
                  </button>
                </div>
              </div>

              {rhythmScore > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`rounded-xl p-4 border text-center ${
                    rhythmScore >= 60 ? 'bg-green-900/30 border-green-500/30' : 'bg-yellow-900/30 border-yellow-500/30'
                  }`}
                >
                  <p className={`text-xl font-bold ${rhythmScore >= 60 ? 'text-green-300' : 'text-yellow-300'}`}>
                    {rhythmScore >= 60 ? '🎉 훌륭해요!' : '😊 거의 다 왔어요!'}
                  </p>
                  <p className={`mt-1 ${rhythmScore >= 60 ? 'text-green-400' : 'text-yellow-400'}`}>
                    리듬 정확도: {rhythmScore}점
                  </p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 4: 완료 */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl"
              >
                🏆
              </motion.div>
              <h4 className="text-2xl font-bold text-white">
                {canComplete ? '패턴 마스터!' : '조금만 더 해보세요!'}
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 mb-4">최종 점수</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {totalScore}점
                </p>
                <p className="text-slate-400 mt-2">
                  {canComplete ? '🎉 모든 게임을 클리어했어요!' : '80점 이상 달성하면 완료됩니다'}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="flex-1 py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-500"
          >
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            whileHover={canComplete ? { scale: 1.02 } : {}}
            className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {canComplete ? '🏆 미션 완료!' : `${80 - totalScore}점 더 필요해요`}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 반복 개념 학습 ====================
const LoopConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 🌟 별 그리기 게임 상태
  const [starCount, setStarCount] = useState(3);
  const [drawnStars, setDrawnStars] = useState<string[]>([]);
  const [starDrawing, setStarDrawing] = useState(false);
  const [starGameCompleted, setStarGameCompleted] = useState(false);

  // 🤖 로봇 애니메이션 루프 게임
  const [robotActions, setRobotActions] = useState<string[]>([]);
  const [robotLoopCount, setRobotLoopCount] = useState(2);
  const [robotAnimating, setRobotAnimating] = useState(false);
  const [currentRobotAction, setCurrentRobotAction] = useState<string | null>(null);
  const [robotAnimationCompleted, setRobotAnimationCompleted] = useState(false);

  // 🎵 비트 루프 게임
  const [beatPattern, setBeatPattern] = useState<string[]>([]);
  const [beatLoopCount, setBeatLoopCount] = useState(3);
  const [playingBeats, setPlayingBeats] = useState(false);
  const [currentBeatIndex, setCurrentBeatIndex] = useState(-1);
  const [beatGameCompleted, setBeatGameCompleted] = useState(false);

  const steps = [
    { id: 'intro', title: '반복이란?', icon: '🔁' },
    { id: 'star', title: '별 그리기', icon: '⭐' },
    { id: 'robot', title: '로봇 애니메이션', icon: '🤖' },
    { id: 'beat', title: '비트 루프', icon: '🎵' },
    { id: 'finish', title: '완료', icon: '🏆' },
  ];

  // 별 그리기 실행
  const drawStars = async () => {
    setStarDrawing(true);
    setDrawnStars([]);

    for (let i = 0; i < starCount; i++) {
      await new Promise(resolve => setTimeout(resolve, 400));
      setDrawnStars(prev => [...prev, '⭐']);
    }

    setStarDrawing(false);
    if (starCount >= 5 && !starGameCompleted) {
      setStarGameCompleted(true);
      setTotalScore(prev => prev + 25);
    }
  };

  // 로봇 액션 추가
  const addRobotAction = (action: string) => {
    if (robotActions.length < 4) {
      setRobotActions(prev => [...prev, action]);
    }
  };

  // 로봇 애니메이션 실행
  const runRobotAnimation = async () => {
    if (robotActions.length === 0) return;
    setRobotAnimating(true);
    setCurrentRobotAction(null);

    for (let loop = 0; loop < robotLoopCount; loop++) {
      for (const action of robotActions) {
        setCurrentRobotAction(action);
        await new Promise(resolve => setTimeout(resolve, 600));
      }
    }

    setCurrentRobotAction(null);
    setRobotAnimating(false);

    if (robotActions.length >= 2 && robotLoopCount >= 2 && !robotAnimationCompleted) {
      setRobotAnimationCompleted(true);
      setTotalScore(prev => prev + 35);
    }
  };

  // 비트 추가
  const addBeat = (beat: string) => {
    if (beatPattern.length < 4) {
      setBeatPattern(prev => [...prev, beat]);
    }
  };

  // 비트 재생
  const playBeatLoop = async () => {
    if (beatPattern.length === 0) return;
    setPlayingBeats(true);
    setCurrentBeatIndex(-1);

    for (let loop = 0; loop < beatLoopCount; loop++) {
      for (let i = 0; i < beatPattern.length; i++) {
        setCurrentBeatIndex(i);
        await new Promise(resolve => setTimeout(resolve, 350));
      }
    }

    setCurrentBeatIndex(-1);
    setPlayingBeats(false);

    if (beatPattern.length >= 2 && beatLoopCount >= 3 && !beatGameCompleted) {
      setBeatGameCompleted(true);
      setTotalScore(prev => prev + 40);
    }
  };

  const robotActionOptions = [
    { id: '💃', label: '춤추기' },
    { id: '🙌', label: '손들기' },
    { id: '🔄', label: '돌기' },
    { id: '👋', label: '인사하기' },
  ];

  const beatOptions = [
    { id: '🥁', label: '쿵', color: 'bg-red-500' },
    { id: '👏', label: '짝', color: 'bg-blue-500' },
    { id: '🔔', label: '딩', color: 'bg-yellow-500' },
    { id: '🎸', label: '츙', color: 'bg-purple-500' },
  ];

  const canComplete = totalScore >= 60;

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="mb-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🔁</span> {mission.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 px-4 py-2 rounded-xl">
            <span className="text-white font-bold">점수: {totalScore}</span>
          </div>
        </div>
      </div>

      {/* 스텝 네비게이션 */}
      <div className="flex gap-1 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              currentStep === index
                ? 'bg-orange-500 text-white'
                : currentStep > index
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            <span className="text-base">{step.icon}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Step 0: 소개 */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 rounded-2xl p-6 border border-orange-500/30 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  className="text-7xl inline-block mb-4"
                >
                  🔁
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">반복의 마법!</h4>
                <p className="text-slate-200 text-lg">
                  같은 동작을 <span className="text-orange-400 font-bold">여러 번</span> 하는 것이에요!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30">
                  <p className="text-red-300 font-bold mb-2">❌ 반복 없이</p>
                  <div className="text-xs text-slate-400 space-y-1 font-mono">
                    <p>⭐ 그리기</p>
                    <p>⭐ 그리기</p>
                    <p>⭐ 그리기</p>
                    <p>⭐ 그리기</p>
                    <p>⭐ 그리기</p>
                    <p className="text-red-400">5줄이나 써야 해요! 😰</p>
                  </div>
                </div>
                <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30">
                  <p className="text-green-300 font-bold mb-2">✅ 반복 사용</p>
                  <div className="text-xs text-slate-400 font-mono">
                    <p className="bg-orange-500/20 px-2 py-1 rounded">🔁 5번 반복하기</p>
                    <p className="ml-4">⭐ 그리기</p>
                    <p className="text-green-400 mt-2">단 2줄! 😊</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-500/30">
                <p className="text-amber-200 text-center">
                  💡 반복을 사용하면 <span className="text-amber-300 font-bold">코드가 짧고 깔끔</span>해져요!
                </p>
              </div>
            </div>
          )}

          {/* Step 1: 별 그리기 게임 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-yellow-900/30 rounded-xl p-4 border border-yellow-500/30 text-center">
                <p className="text-yellow-200">⭐ 반복으로 별을 그려보세요!</p>
                <p className="text-yellow-400 text-sm mt-1">5개 이상 그리면 클리어!</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                {/* 루프 코드 시각화 */}
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm mb-4">
                  <p className="text-orange-400">🔁 <span className="text-white">{starCount}</span>번 반복하기</p>
                  <p className="text-slate-300 ml-6">⭐ 별 그리기</p>
                </div>

                {/* 반복 횟수 조절 */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-orange-400 text-sm">반복 횟수:</span>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={starCount}
                    onChange={(e) => setStarCount(Number(e.target.value))}
                    className="flex-1 accent-orange-500"
                    disabled={starDrawing}
                  />
                  <span className="text-white font-bold text-2xl w-8">{starCount}</span>
                </div>

                {/* 별 그리기 결과 */}
                <div className="min-h-24 bg-slate-900 rounded-xl p-4 flex flex-wrap gap-2 items-center justify-center border-2 border-dashed border-slate-600 mb-4">
                  {drawnStars.length === 0 ? (
                    <p className="text-slate-500">실행 버튼을 눌러보세요!</p>
                  ) : (
                    drawnStars.map((star, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-4xl"
                      >
                        {star}
                      </motion.span>
                    ))
                  )}
                </div>

                <button
                  onClick={drawStars}
                  disabled={starDrawing}
                  className="w-full py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl disabled:opacity-50"
                >
                  {starDrawing ? '그리는 중...' : '▶️ 실행하기'}
                </button>
              </div>

              {starGameCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 text-lg font-bold">🎉 별 그리기 클리어! +25점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 2: 로봇 애니메이션 루프 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-blue-200">🤖 로봇 애니메이션을 만들어보세요!</p>
                <p className="text-blue-400 text-sm mt-1">2개 이상의 동작을 2번 이상 반복!</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                {/* 로봇 표시 */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={currentRobotAction ? {
                      scale: [1, 1.2, 1],
                      rotate: currentRobotAction === '🔄' ? 360 : 0
                    } : {}}
                    className="w-32 h-32 bg-slate-900 rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-7xl">{currentRobotAction || '🤖'}</span>
                  </motion.div>
                </div>

                {/* 액션 선택 */}
                <p className="text-slate-300 text-sm mb-2">액션을 선택하세요:</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {robotActionOptions.map((action) => (
                    <motion.button
                      key={action.id}
                      onClick={() => addRobotAction(action.id)}
                      disabled={robotActions.length >= 4 || robotAnimating}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-center disabled:opacity-50"
                    >
                      <span className="text-2xl">{action.id}</span>
                      <p className="text-xs text-slate-400 mt-1">{action.label}</p>
                    </motion.button>
                  ))}
                </div>

                {/* 선택된 액션들 */}
                <div className="bg-slate-900 rounded-lg p-3 mb-4 min-h-12">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400 text-sm">동작:</span>
                    {robotActions.length === 0 ? (
                      <span className="text-slate-500 text-sm">액션을 선택하세요</span>
                    ) : (
                      robotActions.map((action, i) => (
                        <span key={i} className="text-2xl">{action}</span>
                      ))
                    )}
                    {robotActions.length > 0 && (
                      <button
                        onClick={() => setRobotActions([])}
                        className="ml-auto text-xs text-red-400 hover:text-red-300"
                      >
                        초기화
                      </button>
                    )}
                  </div>
                </div>

                {/* 반복 횟수 */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-orange-400 text-sm">🔁 반복:</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={robotLoopCount}
                    onChange={(e) => setRobotLoopCount(Number(e.target.value))}
                    className="flex-1 accent-orange-500"
                    disabled={robotAnimating}
                  />
                  <span className="text-white font-bold text-xl">{robotLoopCount}번</span>
                </div>

                <button
                  onClick={runRobotAnimation}
                  disabled={robotActions.length === 0 || robotAnimating}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl disabled:opacity-50"
                >
                  {robotAnimating ? '애니메이션 중...' : '▶️ 애니메이션 실행'}
                </button>
              </div>

              {robotAnimationCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 text-lg font-bold">🎉 로봇 애니메이션 클리어! +35점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 3: 비트 루프 게임 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30 text-center">
                <p className="text-purple-200">🎵 나만의 비트를 만들어보세요!</p>
                <p className="text-purple-400 text-sm mt-1">2개 이상의 비트를 3번 이상 반복!</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                {/* 비트 버튼 */}
                <p className="text-slate-300 text-sm mb-2">비트를 선택하세요:</p>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {beatOptions.map((beat) => (
                    <motion.button
                      key={beat.id}
                      onClick={() => addBeat(beat.id)}
                      disabled={beatPattern.length >= 4 || playingBeats}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 ${beat.color} hover:opacity-80 rounded-xl text-center text-white disabled:opacity-50`}
                    >
                      <span className="text-2xl">{beat.id}</span>
                      <p className="text-xs mt-1">{beat.label}</p>
                    </motion.button>
                  ))}
                </div>

                {/* 비트 시퀀스 */}
                <div className="bg-slate-900 rounded-xl p-4 mb-4 min-h-20">
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {beatPattern.length === 0 ? (
                      <span className="text-slate-500">비트를 선택해서 패턴을 만드세요</span>
                    ) : (
                      beatPattern.map((beat, i) => (
                        <motion.div
                          key={i}
                          animate={currentBeatIndex === i ? { scale: [1, 1.3, 1] } : {}}
                          className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                            currentBeatIndex === i ? 'bg-white/20' : 'bg-slate-800'
                          }`}
                        >
                          {beat}
                        </motion.div>
                      ))
                    )}
                  </div>
                  {beatPattern.length > 0 && (
                    <button
                      onClick={() => setBeatPattern([])}
                      className="mt-3 text-xs text-red-400 hover:text-red-300"
                    >
                      비트 초기화
                    </button>
                  )}
                </div>

                {/* 반복 횟수 */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-orange-400 text-sm">🔁 반복:</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={beatLoopCount}
                    onChange={(e) => setBeatLoopCount(Number(e.target.value))}
                    className="flex-1 accent-orange-500"
                    disabled={playingBeats}
                  />
                  <span className="text-white font-bold text-xl">{beatLoopCount}번</span>
                </div>

                <button
                  onClick={playBeatLoop}
                  disabled={beatPattern.length === 0 || playingBeats}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl disabled:opacity-50"
                >
                  {playingBeats ? '재생 중... 🎵' : '▶️ 비트 재생'}
                </button>
              </div>

              {beatGameCompleted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 text-lg font-bold">🎉 비트 루프 클리어! +40점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 4: 완료 */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl"
              >
                🏆
              </motion.div>
              <h4 className="text-2xl font-bold text-white">
                {canComplete ? '반복 마스터!' : '조금만 더 해보세요!'}
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 mb-4">최종 점수</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  {totalScore}점
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className={starGameCompleted ? 'text-green-400' : 'text-slate-500'}>
                    ⭐ 별 그리기: {starGameCompleted ? '✅ 완료' : '❌ 미완료'}
                  </p>
                  <p className={robotAnimationCompleted ? 'text-green-400' : 'text-slate-500'}>
                    🤖 로봇 애니메이션: {robotAnimationCompleted ? '✅ 완료' : '❌ 미완료'}
                  </p>
                  <p className={beatGameCompleted ? 'text-green-400' : 'text-slate-500'}>
                    🎵 비트 루프: {beatGameCompleted ? '✅ 완료' : '❌ 미완료'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="flex-1 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-500"
          >
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            whileHover={canComplete ? { scale: 1.02 } : {}}
            className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {canComplete ? '🏆 미션 완료!' : `${60 - totalScore}점 더 필요해요`}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 조건문 개념 학습 ====================
const ConditionalConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 🚦 신호등 시뮬레이터 게임
  const [trafficLight, setTrafficLight] = useState<'red' | 'yellow' | 'green'>('red');
  const [playerAction, setPlayerAction] = useState<string | null>(null);
  const [trafficScore, setTrafficScore] = useState(0);
  const [trafficRound, setTrafficRound] = useState(0);
  const [showTrafficResult, setShowTrafficResult] = useState(false);

  // 🐕 펫 케어 시뮬레이터
  const [petState, setPetState] = useState({ hungry: false, sleepy: false, dirty: false });
  const [petMood, setPetMood] = useState('😊');
  const [petScore, setPetScore] = useState(0);
  const [petRound, setPetRound] = useState(0);

  // 🎮 캐릭터 어드벤처 게임
  const [adventureScene, setAdventureScene] = useState(0);
  const [adventureScore, setAdventureScore] = useState(0);
  const [adventureComplete, setAdventureComplete] = useState(false);

  const steps = [
    { id: 'intro', title: '조건이란?', icon: '❓' },
    { id: 'traffic', title: '신호등 게임', icon: '🚦' },
    { id: 'pet', title: '펫 케어', icon: '🐕' },
    { id: 'adventure', title: '모험 게임', icon: '🗡️' },
    { id: 'finish', title: '완료', icon: '🏆' },
  ];

  // 신호등 변경
  const changeTrafficLight = () => {
    const lights: Array<'red' | 'yellow' | 'green'> = ['red', 'yellow', 'green'];
    setTrafficLight(lights[Math.floor(Math.random() * 3)]);
    setPlayerAction(null);
    setShowTrafficResult(false);
  };

  // 신호등 행동 선택
  const selectTrafficAction = (action: string) => {
    setPlayerAction(action);
    setShowTrafficResult(true);

    const correctActions: { [key: string]: string } = {
      red: '🛑 멈춤',
      yellow: '⚠️ 주의',
      green: '🚶 건너기',
    };

    if (action === correctActions[trafficLight]) {
      setTrafficScore(prev => prev + 10);
      if (trafficRound === 0) {
        setTotalScore(prev => prev + 25);
      }
    }
    setTrafficRound(prev => prev + 1);
  };

  // 펫 상태 랜덤 생성
  const generatePetState = () => {
    setPetState({
      hungry: Math.random() > 0.5,
      sleepy: Math.random() > 0.5,
      dirty: Math.random() > 0.5,
    });
    setPetMood('😟');
  };

  // 펫 돌보기 행동
  const carePet = (action: string) => {
    let correct = false;

    if (action === 'feed' && petState.hungry) correct = true;
    else if (action === 'sleep' && petState.sleepy) correct = true;
    else if (action === 'bath' && petState.dirty) correct = true;

    if (correct) {
      setPetMood('😊');
      setPetScore(prev => prev + 10);
      if (petRound < 3) {
        setTotalScore(prev => prev + 10);
      }
    } else {
      setPetMood('😢');
    }

    setPetRound(prev => prev + 1);
    setTimeout(() => {
      if (petRound < 2) {
        generatePetState();
      }
    }, 1500);
  };

  // 모험 게임 시나리오
  const adventureScenarios = [
    {
      scene: '🏰 성에 도착했어요! 앞에 두 개의 문이 있어요.',
      condition: '만약 보물을 찾고 싶다면...',
      choices: [
        { text: '🚪 왼쪽 문 (반짝임)', correct: true },
        { text: '🚪 오른쪽 문 (어두움)', correct: false },
      ],
    },
    {
      scene: '🐉 드래곤을 만났어요!',
      condition: '만약 친구가 되고 싶다면...',
      choices: [
        { text: '⚔️ 싸운다', correct: false },
        { text: '🍎 사과를 준다', correct: true },
      ],
    },
    {
      scene: '🌊 강을 건너야 해요!',
      condition: '만약 안전하게 건너고 싶다면...',
      choices: [
        { text: '🏊 수영한다', correct: false },
        { text: '🌉 다리를 찾는다', correct: true },
      ],
    },
  ];

  const handleAdventureChoice = (correct: boolean) => {
    if (correct) {
      setAdventureScore(prev => prev + 15);
      if (adventureScene < adventureScenarios.length - 1) {
        setAdventureScene(prev => prev + 1);
      } else {
        setAdventureComplete(true);
        setTotalScore(prev => prev + adventureScore + 15);
      }
    } else {
      // 잘못된 선택 - 다시 시도
      setAdventureScene(prev => prev);
    }
  };

  const canComplete = totalScore >= 50;

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="mb-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">❓</span> {mission.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
          </div>
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-4 py-2 rounded-xl">
            <span className="text-white font-bold">점수: {totalScore}</span>
          </div>
        </div>
      </div>

      {/* 스텝 네비게이션 */}
      <div className="flex gap-1 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-medium flex items-center justify-center transition-all ${
              currentStep === index
                ? 'bg-amber-500 text-white'
                : currentStep > index
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            <span className="text-base">{step.icon}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Step 0: 소개 */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-900/50 to-yellow-900/50 rounded-2xl p-6 border border-amber-500/30 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-7xl inline-block mb-4"
                >
                  ❓
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">조건문의 세계!</h4>
                <p className="text-slate-200 text-lg">
                  <span className="text-amber-400 font-bold">"만약 ~하면 ~한다"</span>
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-amber-300 mb-3">📝 조건문 구조:</p>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">만약</span>
                    <span className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">(신호등이 빨간색)</span>
                    <span className="text-amber-400">이면</span>
                  </div>
                  <div className="ml-6 flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    <span className="bg-green-500/20 px-2 py-1 rounded text-green-300">멈춘다</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-purple-400">아니면</span>
                  </div>
                  <div className="ml-6 flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    <span className="bg-green-500/20 px-2 py-1 rounded text-green-300">건넌다</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🚦', text: '신호등', sub: '색깔 확인' },
                  { icon: '🐕', text: '펫 케어', sub: '상태 확인' },
                  { icon: '🗡️', text: '모험', sub: '선택하기' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-slate-700/50 rounded-xl p-3 text-center"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-white text-sm mt-1">{item.text}</p>
                    <p className="text-slate-400 text-xs">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: 신호등 시뮬레이터 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-red-900/30 rounded-xl p-4 border border-red-500/30 text-center">
                <p className="text-red-200">🚦 신호등에 맞는 행동을 선택하세요!</p>
                <p className="text-red-400 text-sm mt-1">점수: {trafficScore}점</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                {/* 신호등 */}
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-900 rounded-2xl p-4 flex flex-col gap-3">
                    <motion.div
                      animate={{ scale: trafficLight === 'red' ? 1.2 : 1, opacity: trafficLight === 'red' ? 1 : 0.3 }}
                      className="w-16 h-16 bg-red-500 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{ scale: trafficLight === 'yellow' ? 1.2 : 1, opacity: trafficLight === 'yellow' ? 1 : 0.3 }}
                      className="w-16 h-16 bg-yellow-500 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{ scale: trafficLight === 'green' ? 1.2 : 1, opacity: trafficLight === 'green' ? 1 : 0.3 }}
                      className="w-16 h-16 bg-green-500 rounded-full shadow-lg"
                    />
                  </div>
                </div>

                {/* 조건문 표시 */}
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-sm mb-4 text-center">
                  <span className="text-amber-400">만약</span>{' '}
                  <span className="text-blue-300">
                    {trafficLight === 'red' ? '🔴 빨간불' : trafficLight === 'yellow' ? '🟡 노란불' : '🟢 초록불'}
                  </span>{' '}
                  <span className="text-amber-400">이면?</span>
                </div>

                {/* 행동 선택 */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '🛑 멈춤', color: 'bg-red-600' },
                    { id: '⚠️ 주의', color: 'bg-yellow-600' },
                    { id: '🚶 건너기', color: 'bg-green-600' },
                  ].map((action) => (
                    <motion.button
                      key={action.id}
                      onClick={() => selectTrafficAction(action.id)}
                      disabled={showTrafficResult}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 ${action.color} text-white font-bold rounded-xl disabled:opacity-50`}
                    >
                      {action.id}
                    </motion.button>
                  ))}
                </div>

                {showTrafficResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-xl text-center ${
                      (trafficLight === 'red' && playerAction === '🛑 멈춤') ||
                      (trafficLight === 'yellow' && playerAction === '⚠️ 주의') ||
                      (trafficLight === 'green' && playerAction === '🚶 건너기')
                        ? 'bg-green-900/30 text-green-300'
                        : 'bg-red-900/30 text-red-300'
                    }`}
                  >
                    {(trafficLight === 'red' && playerAction === '🛑 멈춤') ||
                    (trafficLight === 'yellow' && playerAction === '⚠️ 주의') ||
                    (trafficLight === 'green' && playerAction === '🚶 건너기')
                      ? '🎉 정확해요! 조건에 맞는 행동이에요!'
                      : '😅 다시 생각해보세요!'}
                  </motion.div>
                )}

                <button
                  onClick={changeTrafficLight}
                  className="w-full mt-4 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
                >
                  🔄 다음 신호
                </button>
              </div>
            </div>
          )}

          {/* Step 2: 펫 케어 시뮬레이터 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-blue-200">🐕 펫의 상태를 확인하고 돌봐주세요!</p>
                <p className="text-blue-400 text-sm mt-1">점수: {petScore}점</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                {/* 펫 표시 */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-8xl"
                  >
                    🐕
                  </motion.div>
                  <span className="text-6xl ml-2">{petMood}</span>
                </div>

                {/* 펫 상태 */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className={`p-3 rounded-lg text-center ${petState.hungry ? 'bg-orange-900/50 border border-orange-500' : 'bg-slate-700'}`}>
                    <span className="text-2xl">{petState.hungry ? '🍖' : '😊'}</span>
                    <p className="text-xs mt-1 text-slate-300">{petState.hungry ? '배고파요' : '배불러요'}</p>
                  </div>
                  <div className={`p-3 rounded-lg text-center ${petState.sleepy ? 'bg-purple-900/50 border border-purple-500' : 'bg-slate-700'}`}>
                    <span className="text-2xl">{petState.sleepy ? '😴' : '😊'}</span>
                    <p className="text-xs mt-1 text-slate-300">{petState.sleepy ? '졸려요' : '안 졸려요'}</p>
                  </div>
                  <div className={`p-3 rounded-lg text-center ${petState.dirty ? 'bg-brown-900/50 border border-yellow-700' : 'bg-slate-700'}`}>
                    <span className="text-2xl">{petState.dirty ? '🧼' : '✨'}</span>
                    <p className="text-xs mt-1 text-slate-300">{petState.dirty ? '더러워요' : '깨끗해요'}</p>
                  </div>
                </div>

                {/* 조건문 힌트 */}
                <div className="bg-amber-900/30 rounded-lg p-3 mb-4 text-sm">
                  <p className="text-amber-200">
                    💡 <span className="text-amber-400">만약</span> 배고프면 → 🍖 밥주기,{' '}
                    <span className="text-amber-400">만약</span> 졸리면 → 😴 재우기
                  </p>
                </div>

                {/* 행동 버튼 */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.button
                    onClick={() => carePet('feed')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-orange-600 text-white font-bold rounded-xl"
                  >
                    <span className="text-2xl">🍖</span>
                    <p className="text-sm mt-1">밥주기</p>
                  </motion.button>
                  <motion.button
                    onClick={() => carePet('sleep')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-purple-600 text-white font-bold rounded-xl"
                  >
                    <span className="text-2xl">😴</span>
                    <p className="text-sm mt-1">재우기</p>
                  </motion.button>
                  <motion.button
                    onClick={() => carePet('bath')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-cyan-600 text-white font-bold rounded-xl"
                  >
                    <span className="text-2xl">🛁</span>
                    <p className="text-sm mt-1">목욕시키기</p>
                  </motion.button>
                </div>

                <button
                  onClick={generatePetState}
                  className="w-full mt-4 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
                >
                  🔄 새로운 상태
                </button>
              </div>
            </div>
          )}

          {/* Step 3: 캐릭터 어드벤처 게임 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30 text-center">
                <p className="text-purple-200">🗡️ 조건에 맞는 선택으로 모험을 완료하세요!</p>
                <p className="text-purple-400 text-sm mt-1">점수: {adventureScore}점</p>
              </div>

              {!adventureComplete ? (
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  {/* 장면 */}
                  <motion.div
                    key={adventureScene}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mb-6"
                  >
                    <p className="text-2xl text-white mb-4">
                      {adventureScenarios[adventureScene].scene}
                    </p>

                    {/* 조건문 */}
                    <div className="bg-slate-900 rounded-lg p-4 mb-4 font-mono">
                      <p className="text-amber-400">{adventureScenarios[adventureScene].condition}</p>
                    </div>

                    {/* 선택지 */}
                    <div className="grid grid-cols-2 gap-4">
                      {adventureScenarios[adventureScene].choices.map((choice, i) => (
                        <motion.button
                          key={i}
                          onClick={() => handleAdventureChoice(choice.correct)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl"
                        >
                          {choice.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* 진행도 */}
                  <div className="flex justify-center gap-2">
                    {adventureScenarios.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < adventureScene ? 'bg-green-500' : i === adventureScene ? 'bg-amber-500' : 'bg-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center"
                >
                  <p className="text-6xl mb-4">🏆</p>
                  <p className="text-green-300 text-xl font-bold">모험 완료!</p>
                  <p className="text-green-400 mt-2">조건문을 잘 활용했어요! +{adventureScore}점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 4: 완료 */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl"
              >
                🏆
              </motion.div>
              <h4 className="text-2xl font-bold text-white">
                {canComplete ? '조건문 마스터!' : '조금만 더 해보세요!'}
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 mb-4">최종 점수</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
                  {totalScore}점
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className={trafficScore > 0 ? 'text-green-400' : 'text-slate-500'}>
                    🚦 신호등 게임: {trafficScore}점
                  </p>
                  <p className={petScore > 0 ? 'text-green-400' : 'text-slate-500'}>
                    🐕 펫 케어: {petScore}점
                  </p>
                  <p className={adventureComplete ? 'text-green-400' : 'text-slate-500'}>
                    🗡️ 모험 게임: {adventureComplete ? '✅ 완료' : '❌ 미완료'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="flex-1 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-500"
          >
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            whileHover={canComplete ? { scale: 1.02 } : {}}
            className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {canComplete ? '🏆 미션 완료!' : `${50 - totalScore}점 더 필요해요`}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 문제 분해 학습 ====================
const DecompositionLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const bigProblem = '🎂 생일 파티 준비하기';
  const smallProblems = [
    { id: 'invite', emoji: '💌', text: '초대장 보내기' },
    { id: 'cake', emoji: '🎂', text: '케이크 준비' },
    { id: 'decor', emoji: '🎈', text: '장식하기' },
    { id: 'food', emoji: '🍕', text: '음식 준비' },
    { id: 'music', emoji: '🎵', text: '음악 준비' },
  ];

  const togglePart = (id: string) => {
    setSelectedParts(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  useEffect(() => {
    if (selectedParts.length === smallProblems.length) {
      setCompleted(true);
    }
  }, [selectedParts]);

  const steps = [
    { id: 'intro', title: '분해란?', icon: '🧩' },
    { id: 'example', title: '예시', icon: '🎂' },
    { id: 'practice', title: '직접 해보기', icon: '✂️' },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🧩</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
      </div>

      <div className="flex gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium ${
              currentStep === index ? 'bg-teal-500 text-white' : 'bg-slate-700/50 text-slate-500'
            }`}
          >
            <span className="text-lg">{step.icon}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-teal-900/50 rounded-2xl p-6 border border-teal-500/30 text-center">
                <div className="text-7xl mb-4">🧩</div>
                <h4 className="text-xl font-bold text-white mb-4">문제 분해란?</h4>
                <p className="text-slate-200">
                  <span className="text-teal-400 font-bold">큰 문제</span>를{' '}
                  <span className="text-teal-400 font-bold">작은 문제들</span>로 나누는 것이에요!
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-teal-300 text-sm">💡 피자를 먹으려면 한입에 다 넣을 수 없어요. 조각으로 나누면 먹을 수 있죠!</p>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                <p className="text-slate-400 mb-4">큰 문제:</p>
                <div className="inline-block px-6 py-4 bg-red-500/20 rounded-xl text-2xl mb-6 border-2 border-red-500/50">
                  {bigProblem}
                </div>
                <p className="text-slate-400 mb-4">⬇️ 작은 문제들로 분해!</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {smallProblems.map((p) => (
                    <div key={p.id} className="px-3 py-2 bg-green-500/20 rounded-lg border border-green-500/30">
                      {p.emoji} {p.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <p className="text-slate-300 text-center">"{bigProblem}"을 작은 문제로 분해해보세요!</p>
              <p className="text-center text-slate-500">모든 항목을 클릭하세요</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {smallProblems.map((p) => (
                  <motion.button
                    key={p.id}
                    onClick={() => togglePart(p.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl text-center ${
                      selectedParts.includes(p.id) ? 'bg-teal-500/30 border-2 border-teal-500' : 'bg-slate-700 border-2 border-slate-600'
                    }`}
                  >
                    <span className="text-3xl">{p.emoji}</span>
                    <p className="text-sm mt-2 text-slate-300">{p.text}</p>
                  </motion.button>
                ))}
              </div>
              {completed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-900/30 rounded-xl p-4 text-center text-green-300">
                  🎉 완벽해요! 큰 문제를 작은 문제로 잘 분해했어요!
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(prev => prev - 1)} className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl">
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={() => setCurrentStep(prev => prev + 1)} className="flex-1 py-3 bg-teal-600 text-white font-bold rounded-xl">
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(true)}
            disabled={!completed}
            className={`flex-1 py-3 font-bold rounded-xl ${completed ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
          >
            {completed ? '미션 완료!' : '모든 항목을 선택하세요'}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 추상화 학습 ====================
const AbstractionLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedImportant, setSelectedImportant] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const mapFeatures = [
    { id: 'road', text: '도로', important: true, emoji: '🛣️' },
    { id: 'building', text: '건물', important: true, emoji: '🏢' },
    { id: 'park', text: '공원', important: true, emoji: '🌳' },
    { id: 'ant', text: '개미', important: false, emoji: '🐜' },
    { id: 'cloud', text: '구름', important: false, emoji: '☁️' },
    { id: 'bird', text: '새', important: false, emoji: '🐦' },
  ];

  const importantFeatures = mapFeatures.filter(f => f.important).map(f => f.id);

  const toggleFeature = (id: string) => {
    setSelectedImportant(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  };

  useEffect(() => {
    const allCorrect = importantFeatures.every(f => selectedImportant.includes(f));
    const noWrong = selectedImportant.every(s => importantFeatures.includes(s));
    if (allCorrect && noWrong) setCompleted(true);
  }, [selectedImportant]);

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🎨</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentStep} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-purple-900/50 rounded-2xl p-6 border border-purple-500/30 text-center">
                <div className="text-7xl mb-4">🎨</div>
                <h4 className="text-xl font-bold text-white mb-4">추상화란?</h4>
                <p className="text-slate-200">
                  <span className="text-purple-400 font-bold">중요한 것만 남기고</span>{' '}
                  나머지는 숨기는 것이에요!
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-purple-300 text-sm">💡 지하철 노선도는 실제 거리와 다르지만, 중요한 정보(역, 노선)만 보여줘요!</p>
              </div>
              <button onClick={() => setCurrentStep(1)} className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl">
                다음 →
              </button>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <p className="text-slate-300 text-center">지도를 만들 때 <span className="text-purple-400 font-bold">중요한 것</span>만 골라보세요!</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {mapFeatures.map((f) => (
                  <motion.button
                    key={f.id}
                    onClick={() => toggleFeature(f.id)}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl text-center ${
                      selectedImportant.includes(f.id)
                        ? f.important
                          ? 'bg-green-500/30 border-2 border-green-500'
                          : 'bg-red-500/30 border-2 border-red-500'
                        : 'bg-slate-700 border-2 border-slate-600'
                    }`}
                  >
                    <span className="text-3xl">{f.emoji}</span>
                    <p className="text-sm mt-2 text-slate-300">{f.text}</p>
                  </motion.button>
                ))}
              </div>
              {completed && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-900/30 rounded-xl p-4 text-center text-green-300">
                  🎉 잘했어요! 지도에 필요한 중요한 것만 골랐어요!
                </motion.div>
              )}
              <motion.button
                onClick={() => onComplete(true)}
                disabled={!completed}
                className={`w-full py-3 font-bold rounded-xl ${completed ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
              >
                {completed ? '미션 완료!' : '중요한 것만 선택하세요'}
              </motion.button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==================== 디버깅 학습 ====================
const DebuggingLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 🐛 버그 사냥 게임
  const [bugs, setBugs] = useState<{ id: number; x: number; y: number; caught: boolean }[]>([]);
  const [bugsCaught, setBugsCaught] = useState(0);
  const [bugGameActive, setBugGameActive] = useState(false);
  const [bugTimer, setBugTimer] = useState(15);
  const [bugGameComplete, setBugGameComplete] = useState(false);

  // 🔧 코드 수리 게임
  const [repairIndex, setRepairIndex] = useState(0);
  const [repairScore, setRepairScore] = useState(0);
  const codeRepairs = [
    { broken: 'pritn("안녕")', fixed: 'print("안녕")', hint: '오타를 찾아보세요!' },
    { broken: 'for i in range(5) print(i)', fixed: 'for i in range(5): print(i)', hint: ':가 빠졌어요!' },
    { broken: 'if x = 10:', fixed: 'if x == 10:', hint: '비교는 ==를 사용해요!' },
  ];

  // 🤖 로봇 디버깅 게임
  const [robotPath, setRobotPath] = useState([
    { cmd: '→ 오른쪽', correct: true },
    { cmd: '↑ 위', correct: false, fix: '↓ 아래' },
    { cmd: '→ 오른쪽', correct: true },
    { cmd: '← 왼쪽', correct: false, fix: '→ 오른쪽' },
    { cmd: '↓ 아래', correct: true },
  ]);
  const [robotBugsFound, setRobotBugsFound] = useState<number[]>([]);
  const [robotGameComplete, setRobotGameComplete] = useState(false);

  const steps = [
    { id: 'intro', title: '버그란?', icon: '🐛' },
    { id: 'hunt', title: '버그 사냥', icon: '🎯' },
    { id: 'repair', title: '코드 수리', icon: '🔧' },
    { id: 'robot', title: '로봇 디버깅', icon: '🤖' },
    { id: 'finish', title: '완료', icon: '🏆' },
  ];

  // 버그 사냥 게임 시작
  const startBugHunt = () => {
    setBugGameActive(true);
    setBugsCaught(0);
    setBugTimer(15);
    spawnBug();
  };

  const spawnBug = () => {
    const newBug = {
      id: Date.now(),
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      caught: false,
    };
    setBugs(prev => [...prev, newBug]);
  };

  const catchBug = (id: number) => {
    setBugs(prev => prev.map(b => b.id === id ? { ...b, caught: true } : b));
    setBugsCaught(prev => {
      const newCount = prev + 1;
      if (newCount >= 5 && !bugGameComplete) {
        setBugGameComplete(true);
        setTotalScore(s => s + 30);
      }
      return newCount;
    });
    spawnBug();
  };

  // 버그 타이머
  useEffect(() => {
    if (bugGameActive && bugTimer > 0) {
      const timer = setTimeout(() => setBugTimer(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (bugTimer === 0) {
      setBugGameActive(false);
    }
  }, [bugGameActive, bugTimer]);

  // 코드 수리 체크
  const checkRepair = (isCorrect: boolean) => {
    if (isCorrect) {
      setRepairScore(prev => prev + 15);
      if (repairIndex === codeRepairs.length - 1) {
        setTotalScore(prev => prev + repairScore + 15);
      }
    }
    if (repairIndex < codeRepairs.length - 1) {
      setRepairIndex(prev => prev + 1);
    }
  };

  // 로봇 버그 찾기
  const toggleRobotBug = (index: number) => {
    if (robotBugsFound.includes(index)) {
      setRobotBugsFound(prev => prev.filter(i => i !== index));
    } else {
      setRobotBugsFound(prev => [...prev, index]);
    }
  };

  const checkRobotBugs = () => {
    const actualBugs = robotPath.map((p, i) => !p.correct ? i : -1).filter(i => i !== -1);
    const allCorrect = actualBugs.every(i => robotBugsFound.includes(i)) &&
                       robotBugsFound.every(i => actualBugs.includes(i));

    if (allCorrect && !robotGameComplete) {
      setRobotGameComplete(true);
      setTotalScore(prev => prev + 40);
    }
  };

  const canComplete = totalScore >= 60;

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="mb-4 relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-3xl">🐛</span> {mission.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 rounded-xl">
            <span className="text-white font-bold">점수: {totalScore}</span>
          </div>
        </div>
      </div>

      {/* 스텝 네비게이션 */}
      <div className="flex gap-1 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`flex-1 py-2 px-1 rounded-lg text-xs font-medium flex items-center justify-center transition-all ${
              currentStep === index
                ? 'bg-red-500 text-white'
                : currentStep > index
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            <span className="text-base">{step.icon}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          {/* Step 0: 소개 */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 rounded-2xl p-6 border border-red-500/30 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-7xl inline-block mb-4"
                >
                  🐛
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">디버깅 탐정!</h4>
                <p className="text-slate-200 text-lg">
                  프로그램의 <span className="text-red-400 font-bold">오류(버그)</span>를 찾아 고치는 것!
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4">
                <p className="text-red-300 mb-3">🔍 버그를 찾는 방법:</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>1. 코드를 천천히 읽어보기</p>
                  <p>2. 예상 결과와 실제 결과 비교하기</p>
                  <p>3. 의심되는 부분 찾아 고치기</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '🎯', text: '버그 사냥', sub: '빠르게 잡기' },
                  { icon: '🔧', text: '코드 수리', sub: '오류 고치기' },
                  { icon: '🤖', text: '로봇 디버깅', sub: '경로 수정' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-slate-700/50 rounded-xl p-3 text-center"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <p className="text-white text-sm mt-1">{item.text}</p>
                    <p className="text-slate-400 text-xs">{item.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: 버그 사냥 게임 */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center">
                <p className="text-green-200">🎯 버그를 클릭해서 잡으세요!</p>
                <div className="flex justify-center gap-4 mt-2">
                  <span className="text-green-400">잡은 버그: {bugsCaught}</span>
                  <span className="text-yellow-400">남은 시간: {bugTimer}초</span>
                </div>
              </div>

              <div className="relative bg-slate-900 rounded-xl h-64 border-2 border-slate-700 overflow-hidden">
                {!bugGameActive && !bugGameComplete && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={startBugHunt}
                      className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl text-xl hover:bg-green-500"
                    >
                      🎮 시작하기
                    </button>
                  </div>
                )}

                {bugGameActive && bugs.map((bug) => !bug.caught && (
                  <motion.button
                    key={bug.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    onClick={() => catchBug(bug.id)}
                    style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                    className="absolute text-4xl transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform cursor-pointer"
                  >
                    🐛
                  </motion.button>
                ))}

                {bugGameComplete && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center">
                      <p className="text-6xl mb-4">🎉</p>
                      <p className="text-green-300 text-xl font-bold">버그 5마리 잡았어요! +30점</p>
                    </div>
                  </div>
                )}

                {!bugGameActive && bugTimer === 0 && !bugGameComplete && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="text-center">
                      <p className="text-yellow-300 text-xl mb-4">시간 초과!</p>
                      <button
                        onClick={startBugHunt}
                        className="px-6 py-3 bg-yellow-600 text-white font-bold rounded-xl"
                      >
                        다시 도전
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: 코드 수리 게임 */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-500/30 text-center">
                <p className="text-blue-200">🔧 잘못된 코드를 찾아 고쳐주세요!</p>
                <p className="text-blue-400 text-sm mt-1">문제 {repairIndex + 1} / {codeRepairs.length}</p>
              </div>

              {repairIndex < codeRepairs.length ? (
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  {/* 잘못된 코드 */}
                  <div className="bg-red-900/30 rounded-lg p-4 mb-4 border border-red-500/30">
                    <p className="text-red-300 text-sm mb-2">❌ 잘못된 코드:</p>
                    <code className="text-lg text-white font-mono">{codeRepairs[repairIndex].broken}</code>
                  </div>

                  {/* 힌트 */}
                  <div className="bg-amber-900/30 rounded-lg p-3 mb-4">
                    <p className="text-amber-200 text-sm">💡 힌트: {codeRepairs[repairIndex].hint}</p>
                  </div>

                  {/* 선택지 */}
                  <p className="text-slate-300 mb-3">올바른 코드를 선택하세요:</p>
                  <div className="space-y-2">
                    {[codeRepairs[repairIndex].fixed, codeRepairs[repairIndex].broken].sort(() => Math.random() - 0.5).map((code, i) => (
                      <motion.button
                        key={i}
                        onClick={() => checkRepair(code === codeRepairs[repairIndex].fixed)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-left font-mono text-white"
                      >
                        {code}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-6 border border-green-500/30 text-center"
                >
                  <p className="text-6xl mb-4">🔧</p>
                  <p className="text-green-300 text-xl font-bold">코드 수리 완료!</p>
                  <p className="text-green-400 mt-2">+{repairScore}점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 3: 로봇 디버깅 */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/30 text-center">
                <p className="text-purple-200">🤖 로봇 경로의 버그를 찾아주세요!</p>
                <p className="text-purple-400 text-sm mt-1">목표: 오른쪽 아래로 이동</p>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                {/* 로봇 경로 시각화 */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    ['🤖', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', ''],
                    ['', '', '', '⭐'],
                  ].map((row, rowIndex) => (
                    row.map((cell, colIndex) => (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${
                          cell ? 'bg-slate-700' : 'bg-slate-800'
                        }`}
                      >
                        {cell}
                      </div>
                    ))
                  ))}
                </div>

                {/* 명령어 목록 */}
                <p className="text-slate-300 text-sm mb-3">버그가 있는 명령어를 클릭하세요:</p>
                <div className="space-y-2">
                  {robotPath.map((cmd, index) => (
                    <motion.button
                      key={index}
                      onClick={() => toggleRobotBug(index)}
                      whileHover={{ scale: 1.02 }}
                      className={`w-full p-3 rounded-lg text-left flex items-center gap-3 font-mono ${
                        robotBugsFound.includes(index)
                          ? 'bg-red-500/30 border-2 border-red-500'
                          : 'bg-slate-700 hover:bg-slate-600'
                      }`}
                    >
                      <span className="text-slate-500">{index + 1}.</span>
                      <span className={robotBugsFound.includes(index) ? 'text-red-400 line-through' : 'text-white'}>
                        {cmd.cmd}
                      </span>
                      {robotBugsFound.includes(index) && !cmd.correct && cmd.fix && (
                        <span className="text-green-400">→ {cmd.fix}</span>
                      )}
                      {robotBugsFound.includes(index) && cmd.correct && (
                        <span className="text-yellow-400">(이건 정상이에요!)</span>
                      )}
                    </motion.button>
                  ))}
                </div>

                <button
                  onClick={checkRobotBugs}
                  className="w-full mt-4 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500"
                >
                  ✅ 버그 확인하기
                </button>
              </div>

              {robotGameComplete && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/30 rounded-xl p-4 border border-green-500/30 text-center"
                >
                  <p className="text-green-300 text-lg font-bold">🎉 모든 버그를 찾았어요! +40점</p>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 4: 완료 */}
          {currentStep === 4 && (
            <div className="space-y-6 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl"
              >
                🏆
              </motion.div>
              <h4 className="text-2xl font-bold text-white">
                {canComplete ? '디버깅 마스터!' : '조금만 더 해보세요!'}
              </h4>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 mb-4">최종 점수</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {totalScore}점
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className={bugGameComplete ? 'text-green-400' : 'text-slate-500'}>
                    🎯 버그 사냥: {bugGameComplete ? '✅ 완료' : '❌ 미완료'}
                  </p>
                  <p className={repairScore > 0 ? 'text-green-400' : 'text-slate-500'}>
                    🔧 코드 수리: {repairScore}점
                  </p>
                  <p className={robotGameComplete ? 'text-green-400' : 'text-slate-500'}>
                    🤖 로봇 디버깅: {robotGameComplete ? '✅ 완료' : '❌ 미완료'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="flex-1 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500"
          >
            다음 →
          </button>
        ) : (
          <motion.button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            whileHover={canComplete ? { scale: 1.02 } : {}}
            className={`flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 ${
              canComplete
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
            {canComplete ? '🏆 미션 완료!' : `${60 - totalScore}점 더 필요해요`}
          </motion.button>
        )}
      </div>
    </div>
  );
};

// ==================== 변수 개념 학습 ====================
const VariableConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [boxValue, setBoxValue] = useState<string>('');
  const [savedValue, setSavedValue] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const saveToBox = () => {
    if (boxValue) {
      setSavedValue(boxValue);
      setCompleted(true);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">📦</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-blue-900/50 rounded-2xl p-6 border border-blue-500/30 text-center">
          <div className="text-7xl mb-4">📦</div>
          <h4 className="text-xl font-bold text-white mb-4">변수란?</h4>
          <p className="text-slate-200">
            값을 저장하는 <span className="text-blue-400 font-bold">상자</span>예요!
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <p className="text-slate-300 mb-4">상자에 이름을 저장해보세요:</p>
          <div className="flex gap-3">
            <input
              type="text"
              value={boxValue}
              onChange={(e) => setBoxValue(e.target.value)}
              placeholder="이름 입력"
              className="flex-1 px-4 py-3 bg-slate-900 border-2 border-slate-600 rounded-xl text-white"
            />
            <button onClick={saveToBox} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl">
              저장
            </button>
          </div>

          {savedValue && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex flex-col items-center justify-center shadow-lg">
                  <span className="text-xs text-blue-200">name</span>
                  <span className="text-2xl font-bold text-white">{savedValue}</span>
                </div>
              </div>
              <p className="text-center text-green-300 mt-4">🎉 변수 name에 "{savedValue}"가 저장됐어요!</p>
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={() => onComplete(true)}
          disabled={!completed}
          className={`w-full py-3 font-bold rounded-xl ${completed ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
        >
          {completed ? '미션 완료!' : '값을 저장해보세요'}
        </motion.button>
      </div>
    </div>
  );
};

// ==================== 함수 개념 학습 ====================
const FunctionConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const recipes = [
    { id: 'toast', name: '토스트 만들기()', emoji: '🍞', result: '🥪' },
    { id: 'coffee', name: '커피 만들기()', emoji: '☕', result: '☕' },
    { id: 'juice', name: '주스 만들기()', emoji: '🍊', result: '🧃' },
  ];

  const runFunction = (id: string) => {
    setSelectedRecipe(id);
    const recipe = recipes.find(r => r.id === id);
    setTimeout(() => setResult(recipe?.result || ''), 500);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🎁</span> {mission.title}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-green-900/50 rounded-2xl p-6 border border-green-500/30 text-center">
          <div className="text-7xl mb-4">🎁</div>
          <h4 className="text-xl font-bold text-white mb-4">함수란?</h4>
          <p className="text-slate-200">
            여러 명령을 <span className="text-green-400 font-bold">하나로 묶은 것</span>이에요!<br />
            레시피처럼 이름만 불러도 실행돼요!
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <p className="text-slate-300 mb-4">함수를 실행해보세요:</p>
          <div className="grid grid-cols-3 gap-3">
            {recipes.map((r) => (
              <motion.button
                key={r.id}
                onClick={() => runFunction(r.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl text-center ${selectedRecipe === r.id ? 'bg-green-500/30 border-2 border-green-500' : 'bg-slate-700'}`}
              >
                <span className="text-3xl">{r.emoji}</span>
                <p className="text-xs mt-2 text-slate-300 font-mono">{r.name}</p>
              </motion.button>
            ))}
          </div>

          {result && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-6 text-center">
              <p className="text-slate-400 mb-2">결과:</p>
              <span className="text-6xl">{result}</span>
              <p className="text-green-300 mt-2">🎉 함수가 실행됐어요!</p>
            </motion.div>
          )}
        </div>

        <motion.button
          onClick={() => onComplete(true)}
          disabled={!result}
          className={`w-full py-3 font-bold rounded-xl ${result ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}
        >
          {result ? '미션 완료!' : '함수를 실행해보세요'}
        </motion.button>
      </div>
    </div>
  );
};

// ==================== Python 학습 컴포넌트 ====================
const PythonConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [codeOutput, setCodeOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    { id: 'intro', title: 'Python 소개', icon: '🐍' },
    { id: 'compare', title: '블록 vs 텍스트', icon: '🔄' },
    { id: 'practice', title: '코드 실행', icon: '▶️' },
    { id: 'quiz', title: '확인 퀴즈', icon: '📝' },
  ];

  // 블록 코딩 → Python 비교 예시
  const comparisons = [
    { block: '"안녕하세요" 말하기', python: 'print("안녕하세요")', description: '화면에 글자 출력' },
    { block: '변수 x를 10으로 정하기', python: 'x = 10', description: '변수에 값 저장' },
    { block: '3번 반복하기', python: 'for i in range(3):', description: '반복문 사용' },
    { block: '만약 x > 5라면', python: 'if x > 5:', description: '조건문 사용' },
  ];

  // Python 코드 실행 시뮬레이션
  const runCode = () => {
    setIsRunning(true);
    setCodeOutput([]);

    setTimeout(() => {
      setCodeOutput(['>>> print("안녕하세요!")']);
    }, 500);
    setTimeout(() => {
      setCodeOutput(prev => [...prev, '안녕하세요!']);
    }, 1000);
    setTimeout(() => {
      setCodeOutput(prev => [...prev, '>>> print("Python을 배워요!")']);
    }, 1500);
    setTimeout(() => {
      setCodeOutput(prev => [...prev, 'Python을 배워요!']);
      setIsRunning(false);
    }, 2000);
  };

  const quiz = {
    question: 'Python에서 화면에 글자를 출력하는 함수는?',
    options: ['say()', 'print()', 'output()', 'show()'],
    correct: 1,
    explanation: 'Python에서는 print() 함수로 화면에 출력해요!'
  };

  const canComplete = showResult && quizAnswer === quiz.correct;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-lg p-6">
      {/* 진행 바 */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <motion.div
              animate={{ scale: currentStep >= i ? 1 : 0.8 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                currentStep >= i ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white' : 'bg-slate-700 text-slate-500'
              }`}
            >
              {s.icon}
            </motion.div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-1 mx-1 rounded ${currentStep > i ? 'bg-cyan-500' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 border border-blue-500/30">
              <div className="text-center">
                <div className="text-8xl mb-4">🐍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Python이란?</h3>
                <p className="text-blue-200">세계에서 가장 인기 있는 프로그래밍 언어!</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <p className="text-sm text-slate-300">AI 개발</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🎮</div>
                <p className="text-sm text-slate-300">게임 제작</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <p className="text-sm text-slate-300">웹 서버</p>
              </div>
            </div>

            <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-500/30">
              <p className="text-amber-200">
                <strong className="text-yellow-400">✨ 재미있는 사실:</strong> Python이란 이름은 뱀이 아니라
                영국의 코미디 그룹 "몬티 파이썬(Monty Python)"에서 따왔어요!
              </p>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="compare"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">🧱 블록 코딩 → 🐍 Python</h3>
            <p className="text-slate-300 text-center mb-6">블록 코딩에서 배운 개념들이 Python에서 어떻게 표현되는지 알아봐요!</p>

            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-slate-700/50 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="flex-1 bg-orange-500/20 rounded-lg p-3 text-center">
                  <p className="text-orange-300 font-mono text-sm">{item.block}</p>
                </div>
                <div className="text-2xl">→</div>
                <div className="flex-1 bg-blue-500/20 rounded-lg p-3 text-center">
                  <code className="text-blue-300 font-mono text-sm">{item.python}</code>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">▶️ Python 코드 실행해보기</h3>

            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
              <div className="text-slate-500 mb-2"># 코드 에디터</div>
              <div className="text-green-400">print("안녕하세요!")</div>
              <div className="text-green-400">print("Python을 배워요!")</div>
            </div>

            <button
              onClick={runCode}
              disabled={isRunning}
              className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                isRunning ? 'bg-slate-600' : 'bg-green-600 hover:bg-green-500'
              }`}
            >
              {isRunning ? (
                <><RefreshCw className="w-5 h-5 animate-spin" /> 실행 중...</>
              ) : (
                <>▶️ 실행하기</>
              )}
            </button>

            <div className="bg-black rounded-xl p-4 font-mono text-sm min-h-[120px]">
              <div className="text-slate-500 mb-2"># 출력 결과</div>
              {codeOutput.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={line.startsWith('>>>') ? 'text-cyan-400' : 'text-white'}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">📝 확인 퀴즈</h3>
            <p className="text-slate-300 text-lg mb-4">{quiz.question}</p>

            <div className="space-y-2">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => { setQuizAnswer(index); setShowResult(true); }}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    showResult
                      ? index === quiz.correct
                        ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-200'
                        : index === quizAnswer
                          ? 'bg-red-500/30 border-2 border-red-500 text-red-200'
                          : 'bg-slate-700/50 text-slate-400'
                      : quizAnswer === index
                        ? 'bg-blue-500/30 border-2 border-blue-500 text-blue-200'
                        : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200'
                  }`}
                >
                  <code className="font-mono">{option}</code>
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${quizAnswer === quiz.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-amber-500/20 text-amber-200'}`}
              >
                <p className="font-bold">{quizAnswer === quiz.correct ? '🎉 정답!' : '💡 힌트'}</p>
                <p className="text-sm mt-1">{quiz.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 네비게이션 */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-slate-700 text-slate-300 rounded-xl font-bold disabled:opacity-50"
        >
          ← 이전
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold"
          >
            다음 →
          </button>
        ) : (
          <button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold disabled:opacity-50"
          >
            완료하기 ✓
          </button>
        )}
      </div>
    </div>
  );
};

// ==================== HTML/CSS 학습 컴포넌트 ====================
const HTMLCSSConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [previewHtml, setPreviewHtml] = useState('<h1>안녕하세요!</h1>');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    { id: 'intro', title: '웹 페이지란?', icon: '🌐' },
    { id: 'tags', title: 'HTML 태그', icon: '🏷️' },
    { id: 'preview', title: '미리보기', icon: '👁️' },
    { id: 'quiz', title: '확인 퀴즈', icon: '📝' },
  ];

  const htmlTags = [
    { tag: '<h1>', name: '제목', description: '가장 큰 제목', example: '<h1>제목</h1>', icon: '📰' },
    { tag: '<p>', name: '문단', description: '본문 텍스트', example: '<p>내용</p>', icon: '📝' },
    { tag: '<img>', name: '이미지', description: '그림 삽입', example: '<img src="...">', icon: '🖼️' },
    { tag: '<a>', name: '링크', description: '다른 페이지로 이동', example: '<a href="...">클릭</a>', icon: '🔗' },
    { tag: '<div>', name: '영역', description: '내용을 묶는 상자', example: '<div>...</div>', icon: '📦' },
  ];

  const quiz = {
    question: 'HTML에서 가장 큰 제목을 만드는 태그는?',
    options: ['<p>', '<h1>', '<title>', '<header>'],
    correct: 1,
    explanation: '<h1>은 Heading 1의 약자로, 가장 크고 중요한 제목에 사용해요!'
  };

  const canComplete = showResult && quizAnswer === quiz.correct;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-lg p-6">
      {/* 진행 바 */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <motion.div
              animate={{ scale: currentStep >= i ? 1 : 0.8 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                currentStep >= i ? 'bg-gradient-to-br from-orange-500 to-red-500 text-white' : 'bg-slate-700 text-slate-500'
              }`}
            >
              {s.icon}
            </motion.div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-1 mx-1 rounded ${currentStep > i ? 'bg-orange-500' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-2xl p-6 border border-orange-500/30 text-center">
              <div className="text-8xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-2">웹 페이지란?</h3>
              <p className="text-orange-200">인터넷에서 보는 모든 페이지는 HTML로 만들어져요!</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-orange-500/20 rounded-xl p-4 text-center border border-orange-500/30">
                <div className="text-3xl mb-2">🦴</div>
                <p className="font-bold text-orange-300">HTML</p>
                <p className="text-xs text-slate-400">구조 (뼈대)</p>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-4 text-center border border-blue-500/30">
                <div className="text-3xl mb-2">👔</div>
                <p className="font-bold text-blue-300">CSS</p>
                <p className="text-xs text-slate-400">스타일 (옷)</p>
              </div>
              <div className="bg-yellow-500/20 rounded-xl p-4 text-center border border-yellow-500/30">
                <div className="text-3xl mb-2">🏃</div>
                <p className="font-bold text-yellow-300">JavaScript</p>
                <p className="text-xs text-slate-400">동작 (움직임)</p>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="tags"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">🏷️ HTML 태그 알아보기</h3>
            <p className="text-slate-300 text-center mb-4">태그를 클릭해서 자세히 알아봐요!</p>

            <div className="grid grid-cols-5 gap-2">
              {htmlTags.map((item) => (
                <button
                  key={item.tag}
                  onClick={() => setSelectedTag(selectedTag === item.tag ? null : item.tag)}
                  className={`p-3 rounded-xl text-center transition-all ${
                    selectedTag === item.tag
                      ? 'bg-orange-500 text-white scale-105'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                  }`}
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <code className="text-xs">{item.tag}</code>
                </button>
              ))}
            </div>

            {selectedTag && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-700/50 rounded-xl p-4"
              >
                {htmlTags.filter(t => t.tag === selectedTag).map(item => (
                  <div key={item.tag}>
                    <h4 className="font-bold text-white mb-2">{item.icon} {item.name}</h4>
                    <p className="text-slate-300 text-sm mb-2">{item.description}</p>
                    <code className="block bg-slate-900 p-2 rounded text-orange-300 text-sm">{item.example}</code>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">👁️ HTML 미리보기</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 rounded-xl p-4">
                <p className="text-slate-500 text-sm mb-2"># HTML 코드</p>
                <div className="space-y-2">
                  {['<h1>안녕하세요!</h1>', '<p>웹 페이지를 만들어요</p>', '<h2>HTML은 재미있어요</h2>'].map((code, i) => (
                    <button
                      key={i}
                      onClick={() => setPreviewHtml(code)}
                      className={`block w-full text-left p-2 rounded text-sm font-mono ${
                        previewHtml === code ? 'bg-orange-500/30 text-orange-300' : 'text-slate-400 hover:bg-slate-800'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <p className="text-slate-500 text-sm mb-2"># 결과</p>
                <div
                  className="text-black"
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">📝 확인 퀴즈</h3>
            <p className="text-slate-300 text-lg mb-4">{quiz.question}</p>

            <div className="grid grid-cols-2 gap-2">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => { setQuizAnswer(index); setShowResult(true); }}
                  disabled={showResult}
                  className={`p-4 rounded-xl font-mono text-left transition-all ${
                    showResult
                      ? index === quiz.correct
                        ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-200'
                        : index === quizAnswer
                          ? 'bg-red-500/30 border-2 border-red-500 text-red-200'
                          : 'bg-slate-700/50 text-slate-400'
                      : quizAnswer === index
                        ? 'bg-orange-500/30 border-2 border-orange-500 text-orange-200'
                        : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${quizAnswer === quiz.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-amber-500/20 text-amber-200'}`}
              >
                <p className="font-bold">{quizAnswer === quiz.correct ? '🎉 정답!' : '💡 힌트'}</p>
                <p className="text-sm mt-1">{quiz.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 네비게이션 */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-slate-700 text-slate-300 rounded-xl font-bold disabled:opacity-50"
        >
          ← 이전
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold"
          >
            다음 →
          </button>
        ) : (
          <button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold disabled:opacity-50"
          >
            완료하기 ✓
          </button>
        )}
      </div>
    </div>
  );
};

// ==================== JavaScript 학습 컴포넌트 ====================
const JavaScriptConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    { id: 'intro', title: 'JavaScript란?', icon: '⚡' },
    { id: 'interactive', title: '인터랙션 체험', icon: '🖱️' },
    { id: 'events', title: '이벤트 이해', icon: '🎯' },
    { id: 'quiz', title: '확인 퀴즈', icon: '📝' },
  ];

  const quiz = {
    question: 'JavaScript로 할 수 있는 것은?',
    options: ['웹 페이지 구조 만들기', '버튼 클릭 시 동작 추가', '글자 색상 바꾸기', '서버 관리'],
    correct: 1,
    explanation: 'JavaScript는 웹 페이지에 동작(인터랙션)을 추가해요! 버튼 클릭, 입력 확인 등을 할 수 있어요.'
  };

  const canComplete = showResult && quizAnswer === quiz.correct;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-lg p-6">
      {/* 진행 바 */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <motion.div
              animate={{ scale: currentStep >= i ? 1 : 0.8 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                currentStep >= i ? 'bg-gradient-to-br from-yellow-500 to-amber-500 text-white' : 'bg-slate-700 text-slate-500'
              }`}
            >
              {s.icon}
            </motion.div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-1 mx-1 rounded ${currentStep > i ? 'bg-yellow-500' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-yellow-900/50 to-amber-900/50 rounded-2xl p-6 border border-yellow-500/30 text-center">
              <div className="text-8xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">JavaScript란?</h3>
              <p className="text-yellow-200">웹 페이지에 생명을 불어넣는 언어!</p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-3">JavaScript로 할 수 있는 것들:</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
                  <span className="text-2xl">🖱️</span>
                  <span className="text-slate-300 text-sm">버튼 클릭 처리</span>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
                  <span className="text-2xl">✏️</span>
                  <span className="text-slate-300 text-sm">입력값 확인</span>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  <span className="text-slate-300 text-sm">화면 변경</span>
                </div>
                <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
                  <span className="text-2xl">🎮</span>
                  <span className="text-slate-300 text-sm">게임 만들기</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="interactive"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">🖱️ JavaScript 인터랙션 체험</h3>
            <p className="text-slate-300 text-center">버튼을 클릭하거나 텍스트를 입력해보세요!</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-slate-400 text-sm mb-2">클릭 카운터</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setClickCount(prev => prev + 1)}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg"
                >
                  클릭! 👆
                </motion.button>
                <motion.p
                  key={clickCount}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-3xl font-bold text-yellow-400 mt-3"
                >
                  {clickCount}번
                </motion.p>
              </div>

              <div className="bg-slate-700/50 rounded-xl p-4">
                <p className="text-slate-400 text-sm mb-2">입력 반응</p>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="이름을 입력하세요"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg text-white border border-slate-600 focus:border-yellow-500 outline-none"
                />
                <p className="text-yellow-300 mt-3 font-bold">
                  {inputText ? `안녕하세요, ${inputText}님! 👋` : '입력을 기다리는 중...'}
                </p>
              </div>
            </div>

            <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-500/30">
              <p className="text-amber-200 text-sm">
                <strong>💡 설명:</strong> 방금 체험한 것들이 모두 JavaScript로 만들어진 거예요!
                버튼 클릭 횟수 세기, 입력한 글자 보여주기 모두 JavaScript가 처리해요.
              </p>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="events"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">🎯 이벤트 이해하기</h3>
            <p className="text-slate-300 text-center mb-4">JavaScript는 "이벤트"가 발생하면 동작해요!</p>

            <div className="space-y-3">
              {[
                { event: 'click', desc: '마우스 클릭', icon: '🖱️', example: '버튼 클릭 시 메시지 표시' },
                { event: 'input', desc: '키보드 입력', icon: '⌨️', example: '글자 입력할 때마다 검색' },
                { event: 'submit', desc: '폼 제출', icon: '📤', example: '회원가입 정보 보내기' },
                { event: 'load', desc: '페이지 로드', icon: '🌐', example: '페이지 열릴 때 환영 메시지' },
              ].map((item, i) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-700/50 rounded-xl p-4 flex items-center gap-4"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <code className="text-yellow-400 font-mono">{item.event}</code>
                      <span className="text-slate-400">-</span>
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                    <p className="text-slate-500 text-sm">{item.example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">📝 확인 퀴즈</h3>
            <p className="text-slate-300 text-lg mb-4">{quiz.question}</p>

            <div className="space-y-2">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => { setQuizAnswer(index); setShowResult(true); }}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    showResult
                      ? index === quiz.correct
                        ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-200'
                        : index === quizAnswer
                          ? 'bg-red-500/30 border-2 border-red-500 text-red-200'
                          : 'bg-slate-700/50 text-slate-400'
                      : quizAnswer === index
                        ? 'bg-yellow-500/30 border-2 border-yellow-500 text-yellow-200'
                        : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${quizAnswer === quiz.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-amber-500/20 text-amber-200'}`}
              >
                <p className="font-bold">{quizAnswer === quiz.correct ? '🎉 정답!' : '💡 힌트'}</p>
                <p className="text-sm mt-1">{quiz.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 네비게이션 */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-slate-700 text-slate-300 rounded-xl font-bold disabled:opacity-50"
        >
          ← 이전
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-xl font-bold"
          >
            다음 →
          </button>
        ) : (
          <button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold disabled:opacity-50"
          >
            완료하기 ✓
          </button>
        )}
      </div>
    </div>
  );
};

// ==================== AI 학습 컴포넌트 ====================
const AIConceptLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAI, setSelectedAI] = useState<string | null>(null);
  const [promptInput, setPromptInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    { id: 'intro', title: 'AI란?', icon: '🤖' },
    { id: 'types', title: 'AI 종류', icon: '🧠' },
    { id: 'prompt', title: '프롬프트 체험', icon: '💬' },
    { id: 'quiz', title: '확인 퀴즈', icon: '📝' },
  ];

  const aiTypes = [
    { id: 'chatbot', name: '챗봇', icon: '💬', desc: '대화하는 AI', example: 'ChatGPT, Claude' },
    { id: 'image', name: '이미지 AI', icon: '🎨', desc: '그림 그리는 AI', example: 'DALL-E, Midjourney' },
    { id: 'music', name: '음악 AI', icon: '🎵', desc: '음악 만드는 AI', example: 'Suno, Udio' },
    { id: 'code', name: '코딩 AI', icon: '💻', desc: '코드 작성 AI', example: 'Copilot, Cursor' },
  ];

  const generateAIResponse = () => {
    if (!promptInput.trim()) return;
    setIsGenerating(true);
    setAiResponse('');

    const responses: Record<string, string> = {
      '안녕': '안녕하세요! 저는 AI 도우미예요. 무엇을 도와드릴까요? 😊',
      '이름': '제 이름은 코딩퀘스트 AI예요! 함께 코딩을 배워봐요!',
      '코딩': '코딩은 컴퓨터에게 명령을 내리는 거예요. Python, JavaScript 등 다양한 언어가 있어요!',
      default: '네, 알겠습니다! AI는 여러분의 질문에 답변하고, 글을 쓰고, 그림도 그릴 수 있어요!'
    };

    let response = responses.default;
    for (const [key, value] of Object.entries(responses)) {
      if (promptInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setAiResponse(response);
      setIsGenerating(false);
    }, 1500);
  };

  const quiz = {
    question: 'AI(인공지능)의 특징이 아닌 것은?',
    options: ['데이터에서 패턴을 학습한다', '사람처럼 감정을 느낀다', '질문에 답변할 수 있다', '그림을 그릴 수 있다'],
    correct: 1,
    explanation: '현재 AI는 감정을 실제로 "느끼지" 않아요. 데이터를 학습해서 답변하지만, 진짜 감정은 없답니다!'
  };

  const canComplete = showResult && quizAnswer === quiz.correct;

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-lg p-6">
      {/* 진행 바 */}
      <div className="flex items-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <motion.div
              animate={{ scale: currentStep >= i ? 1 : 0.8 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all ${
                currentStep >= i ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' : 'bg-slate-700 text-slate-500'
              }`}
            >
              {s.icon}
            </motion.div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-1 mx-1 rounded ${currentStep > i ? 'bg-purple-500' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentStep === 0 && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl mb-4"
              >
                🤖
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">AI(인공지능)란?</h3>
              <p className="text-purple-200">사람처럼 생각하고 배울 수 있는 컴퓨터 프로그램!</p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-4">
              <h4 className="font-bold text-white mb-3">AI는 어떻게 배울까요?</h4>
              <div className="flex items-center justify-between gap-4">
                <div className="text-center flex-1">
                  <div className="text-4xl mb-2">📚</div>
                  <p className="text-slate-300 text-sm">많은 데이터</p>
                </div>
                <div className="text-2xl text-purple-400">→</div>
                <div className="text-center flex-1">
                  <div className="text-4xl mb-2">🧠</div>
                  <p className="text-slate-300 text-sm">패턴 학습</p>
                </div>
                <div className="text-2xl text-purple-400">→</div>
                <div className="text-center flex-1">
                  <div className="text-4xl mb-2">💡</div>
                  <p className="text-slate-300 text-sm">예측 & 생성</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            key="types"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">🧠 다양한 AI 종류</h3>
            <p className="text-slate-300 text-center mb-4">카드를 클릭해서 알아봐요!</p>

            <div className="grid grid-cols-2 gap-3">
              {aiTypes.map((ai) => (
                <button
                  key={ai.id}
                  onClick={() => setSelectedAI(selectedAI === ai.id ? null : ai.id)}
                  className={`p-4 rounded-xl text-left transition-all ${
                    selectedAI === ai.id
                      ? 'bg-purple-500/30 border-2 border-purple-500'
                      : 'bg-slate-700/50 border-2 border-transparent hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{ai.icon}</span>
                    <div>
                      <p className="font-bold text-white">{ai.name}</p>
                      <p className="text-slate-400 text-xs">{ai.desc}</p>
                    </div>
                  </div>
                  {selectedAI === ai.id && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-purple-300 text-sm mt-2"
                    >
                      예: {ai.example}
                    </motion.p>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">💬 프롬프트 체험</h3>
            <p className="text-slate-300 text-center mb-4">AI에게 질문해보세요! (예: 안녕, 코딩, 이름)</p>

            <div className="flex gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && generateAIResponse()}
                placeholder="AI에게 질문하세요..."
                className="flex-1 px-4 py-3 bg-slate-900 rounded-xl text-white border border-slate-600 focus:border-purple-500 outline-none"
              />
              <button
                onClick={generateAIResponse}
                disabled={isGenerating || !promptInput.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold disabled:opacity-50"
              >
                {isGenerating ? '...' : '전송'}
              </button>
            </div>

            <div className="bg-slate-900 rounded-xl p-4 min-h-[100px]">
              {isGenerating ? (
                <div className="flex items-center gap-2 text-purple-400">
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  AI가 생각하는 중...
                </div>
              ) : aiResponse ? (
                <div className="flex gap-3">
                  <span className="text-2xl">🤖</span>
                  <p className="text-slate-200">{aiResponse}</p>
                </div>
              ) : (
                <p className="text-slate-500">AI의 응답이 여기에 표시됩니다...</p>
              )}
            </div>

            <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-500/30">
              <p className="text-amber-200 text-sm">
                <strong>💡 프롬프트 팁:</strong> AI에게 명확하고 구체적으로 질문하면 더 좋은 답변을 받을 수 있어요!
              </p>
            </div>
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white text-center mb-4">📝 확인 퀴즈</h3>
            <p className="text-slate-300 text-lg mb-4">{quiz.question}</p>

            <div className="space-y-2">
              {quiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => { setQuizAnswer(index); setShowResult(true); }}
                  disabled={showResult}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    showResult
                      ? index === quiz.correct
                        ? 'bg-emerald-500/30 border-2 border-emerald-500 text-emerald-200'
                        : index === quizAnswer
                          ? 'bg-red-500/30 border-2 border-red-500 text-red-200'
                          : 'bg-slate-700/50 text-slate-400'
                      : quizAnswer === index
                        ? 'bg-purple-500/30 border-2 border-purple-500 text-purple-200'
                        : 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${quizAnswer === quiz.correct ? 'bg-emerald-500/20 text-emerald-200' : 'bg-amber-500/20 text-amber-200'}`}
              >
                <p className="font-bold">{quizAnswer === quiz.correct ? '🎉 정답!' : '💡 힌트'}</p>
                <p className="text-sm mt-1">{quiz.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 네비게이션 */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="px-6 py-3 bg-slate-700 text-slate-300 rounded-xl font-bold disabled:opacity-50"
        >
          ← 이전
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold"
          >
            다음 →
          </button>
        ) : (
          <button
            onClick={() => onComplete(true)}
            disabled={!canComplete}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold disabled:opacity-50"
          >
            완료하기 ✓
          </button>
        )}
      </div>
    </div>
  );
};

// ==================== 개선된 Generic Fallback ====================
const EnhancedGenericLesson: React.FC<Props> = ({ mission, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkQuestionAnswers, setCheckQuestionAnswers] = useState<(number | null)[]>(
    mission.checkQuestions ? mission.checkQuestions.map(() => null) : []
  );
  const [showCheckFeedback, setShowCheckFeedback] = useState<boolean[]>(
    mission.checkQuestions ? mission.checkQuestions.map(() => false) : []
  );
  const [challengeAttempts, setChallengeAttempts] = useState<number[]>(
    mission.challenges ? mission.challenges.map(() => 0) : []
  );
  const [challengeCompleted, setChallengeCompleted] = useState<boolean[]>(
    mission.challenges ? mission.challenges.map(() => false) : []
  );
  const [progressPercent, setProgressPercent] = useState(0);

  // 동적 스텝 생성
  const steps: { id: string; title: string; icon: string }[] = [];

  // Step 1: 개념 학습 (항상 존재)
  steps.push({ id: 'learn', title: '개념 학습', icon: '📚' });

  // Step 2: 확인 질문 (checkQuestions가 있으면)
  if (mission.checkQuestions && mission.checkQuestions.length > 0) {
    steps.push({ id: 'check', title: '확인 질문', icon: '❓' });
  }

  // Step 3: 연습 문제 (challenges가 있으면)
  if (mission.challenges && mission.challenges.length > 0) {
    steps.push({ id: 'practice', title: '연습하기', icon: '💪' });
  }

  // Step 4: 완료 (항상 존재)
  steps.push({ id: 'complete', title: '완료', icon: '🎉' });

  // 진행률 계산
  useEffect(() => {
    let completed = 0;
    const total = steps.length - 1; // 완료 스텝 제외

    if (currentStep > 0) completed++;
    if (mission.checkQuestions) {
      const allAnswered = checkQuestionAnswers.every((ans) => ans !== null);
      const allCorrect = checkQuestionAnswers.every(
        (ans, idx) => ans === mission.checkQuestions![idx].correctAnswer
      );
      if (allAnswered && allCorrect) completed++;
    }
    if (mission.challenges) {
      const allChallengesCompleted = challengeCompleted.every(Boolean);
      if (allChallengesCompleted) completed++;
    }

    setProgressPercent((completed / total) * 100);
  }, [currentStep, checkQuestionAnswers, challengeCompleted, mission, steps.length]);

  const handleCheckQuestionAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...checkQuestionAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCheckQuestionAnswers(newAnswers);

    const newFeedback = [...showCheckFeedback];
    newFeedback[questionIndex] = true;
    setShowCheckFeedback(newFeedback);
  };

  const handleChallengeComplete = (challengeIndex: number) => {
    const newCompleted = [...challengeCompleted];
    newCompleted[challengeIndex] = true;
    setChallengeCompleted(newCompleted);
  };

  const allCheckQuestionsCorrect = mission.checkQuestions
    ? checkQuestionAnswers.every((ans, idx) => ans === mission.checkQuestions![idx].correctAnswer)
    : true;

  const allChallengesCompleted = mission.challenges ? challengeCompleted.every(Boolean) : true;

  const canComplete = allCheckQuestionsCorrect && allChallengesCompleted;

  const renderStep = () => {
    const stepId = steps[currentStep]?.id;

    // Step 1: 개념 학습
    if (stepId === 'learn') {
      return (
        <div className="space-y-6">
          {/* 메인 개념 설명 */}
          <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 rounded-2xl p-6 border border-violet-500/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                📚
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{mission.concept || mission.title}</h4>
                <p className="text-violet-300 text-sm">핵심 개념을 이해해봐요</p>
              </div>
            </div>

            {/* 설명 텍스트 (여러 단락 지원) */}
            <div className="bg-slate-900/50 rounded-xl p-5 space-y-3">
              {mission.conceptExplanation ? (
                mission.conceptExplanation.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-200 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                mission.description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-slate-200 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              )}
            </div>
          </div>

          {/* CSTA 교육과정 성취기준 */}
          {mission.cstaStandard && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/30"
            >
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold">교육과정 성취기준</span>
              </div>
              <p className="text-blue-200 text-sm">{mission.cstaStandard}</p>
            </motion.div>
          )}

          {/* 학습 목표 */}
          {mission.learningObjectives && mission.learningObjectives.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-900/20 rounded-xl p-5 border border-emerald-500/30"
            >
              <h5 className="font-bold text-emerald-300 mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-emerald-400" />
                학습 목표
              </h5>
              <ul className="space-y-2">
                {mission.learningObjectives.map((objective, idx) => (
                  <li key={idx} className="text-emerald-200 text-sm flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* 개념 카드 */}
          {mission.conceptCards && mission.conceptCards.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h5 className="font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                핵심 개념
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mission.conceptCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-violet-500/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {card.icon && <span className="text-3xl">{card.icon}</span>}
                      <h6 className="font-bold text-white">{card.title}</h6>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-3">{card.description}</p>
                    {card.example && (
                      <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-600">
                        <p className="text-cyan-300 text-xs font-mono">{card.example}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 실생활 예시 */}
          {mission.realWorldExample && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-amber-900/20 rounded-xl p-5 border border-amber-500/30"
            >
              <h5 className="font-bold text-amber-300 mb-3 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                실생활에서는 어떻게 쓰일까요?
              </h5>
              <p className="text-amber-200 leading-relaxed">{mission.realWorldExample}</p>
            </motion.div>
          )}

          {/* 힌트 */}
          {mission.hints && mission.hints.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-cyan-900/20 rounded-xl p-4 border border-cyan-500/30"
            >
              <h5 className="font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                도움이 되는 팁
              </h5>
              <div className="space-y-2">
                {mission.hints.map((hint, idx) => (
                  <p key={idx} className="text-cyan-200 text-sm flex items-start gap-2">
                    <span className="text-cyan-400">💡</span>
                    {hint}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      );
    }

    // Step 2: 확인 질문
    if (stepId === 'check' && mission.checkQuestions) {
      return (
        <div className="space-y-6">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">❓</span>
              개념 확인하기
            </h5>
            <p className="text-slate-400 text-sm mb-5">배운 내용을 확인해봐요. 모든 질문에 정답을 맞춰야 다음으로 넘어갈 수 있어요!</p>
          </div>

          {mission.checkQuestions.map((question, qIdx) => {
            const userAnswer = checkQuestionAnswers[qIdx];
            const isCorrect = userAnswer === question.correctAnswer;
            const showFeedback = showCheckFeedback[qIdx];

            return (
              <motion.div
                key={qIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: qIdx * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
              >
                <h6 className="text-white font-semibold mb-4 flex items-start gap-2">
                  <span className="text-violet-400 font-bold">Q{qIdx + 1}.</span>
                  <span>{question.question}</span>
                </h6>
                <div className="space-y-2">
                  {question.options.map((option, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    const isThisCorrect = optIdx === question.correctAnswer;
                    const shouldHighlight = showFeedback && (isSelected || isThisCorrect);

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleCheckQuestionAnswer(qIdx, optIdx)}
                        disabled={showFeedback}
                        className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                          shouldHighlight && isThisCorrect
                            ? 'bg-emerald-500/30 border-2 border-emerald-500'
                            : shouldHighlight && isSelected && !isThisCorrect
                            ? 'bg-red-500/30 border-2 border-red-500'
                            : isSelected
                            ? 'bg-violet-500/30 border-2 border-violet-500'
                            : 'bg-slate-700/50 border-2 border-slate-600 hover:border-slate-500'
                        } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            shouldHighlight && isThisCorrect
                              ? 'bg-emerald-500 text-white'
                              : shouldHighlight && isSelected && !isThisCorrect
                              ? 'bg-red-500 text-white'
                              : isSelected
                              ? 'bg-violet-500 text-white'
                              : 'bg-slate-600 text-slate-300'
                          }`}
                        >
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span
                          className={
                            shouldHighlight && isThisCorrect
                              ? 'text-emerald-300 font-medium'
                              : shouldHighlight && isSelected && !isThisCorrect
                              ? 'text-red-300'
                              : 'text-slate-300'
                          }
                        >
                          {option}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 피드백 */}
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-4 rounded-xl ${
                      isCorrect
                        ? 'bg-emerald-900/30 border border-emerald-500/30'
                        : 'bg-red-900/30 border border-red-500/30'
                    }`}
                  >
                    <p
                      className={`font-semibold mb-1 ${
                        isCorrect ? 'text-emerald-300' : 'text-red-300'
                      }`}
                    >
                      {isCorrect ? '정답이에요!' : '아쉬워요!'}
                    </p>
                    <p className={isCorrect ? 'text-emerald-200 text-sm' : 'text-red-200 text-sm'}>
                      {isCorrect ? (question.feedback?.correct || '정답이에요!') : (question.feedback?.incorrect || '다시 생각해보세요!')}
                    </p>
                    {!isCorrect && (
                      <button
                        onClick={() => {
                          const newAnswers = [...checkQuestionAnswers];
                          newAnswers[qIdx] = null;
                          setCheckQuestionAnswers(newAnswers);
                          const newFeedback = [...showCheckFeedback];
                          newFeedback[qIdx] = false;
                          setShowCheckFeedback(newFeedback);
                        }}
                        className="mt-3 px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-500 transition-colors"
                      >
                        다시 시도하기
                      </button>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* 전체 진행 상황 */}
          {allCheckQuestionsCorrect && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/30 text-center"
            >
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-emerald-300 font-bold text-lg">모든 질문에 정답을 맞췄어요!</p>
              <p className="text-emerald-400 text-sm mt-1">다음 단계로 넘어가 볼까요?</p>
            </motion.div>
          )}
        </div>
      );
    }

    // Step 3: 연습 문제
    if (stepId === 'practice' && mission.challenges) {
      return (
        <div className="space-y-6">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
            <h5 className="font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-2xl">💪</span>
              연습 문제
            </h5>
            <p className="text-slate-400 text-sm">직접 연습해보면서 실력을 키워봐요!</p>
          </div>

          {mission.challenges.map((challenge, cIdx) => {
            const isCompleted = challengeCompleted[cIdx];
            const attempts = challengeAttempts[cIdx];

            return (
              <motion.div
                key={cIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cIdx * 0.1 }}
                className={`rounded-2xl p-6 border-2 transition-all ${
                  isCompleted
                    ? 'bg-emerald-900/20 border-emerald-500/50'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h6 className="text-white font-bold">{challenge.title}</h6>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          challenge.difficulty === 'easy'
                            ? 'bg-green-900/50 text-green-300 border border-green-500/30'
                            : challenge.difficulty === 'medium'
                            ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                            : 'bg-red-900/50 text-red-300 border border-red-500/30'
                        }`}
                      >
                        {challenge.difficulty === 'easy'
                          ? '쉬움'
                          : challenge.difficulty === 'medium'
                          ? '보통'
                          : '어려움'}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{challenge.description}</p>
                    <p className="text-slate-500 text-xs mt-2">예상 시간: {challenge.estimatedMinutes}분</p>
                  </div>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-4"
                    >
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </motion.div>
                  )}
                </div>

                {/* 힌트 */}
                {challenge.hints && challenge.hints.length > 0 && (
                  <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-600">
                    <p className="text-cyan-400 text-xs font-semibold mb-2">힌트</p>
                    <ul className="space-y-1">
                      {challenge.hints.map((hint, hIdx) => (
                        <li key={hIdx} className="text-slate-400 text-xs flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          {hint}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {!isCompleted && (
                  <button
                    onClick={() => handleChallengeComplete(cIdx)}
                    className="w-full mt-4 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-500 transition-colors"
                  >
                    완료 표시하기
                  </button>
                )}

                {isCompleted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-xl"
                  >
                    <p className="text-emerald-300 font-semibold text-sm">
                      {challenge.feedback.perfect}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {allChallengesCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-900/30 rounded-xl p-6 border border-emerald-500/30 text-center"
            >
              <div className="text-5xl mb-3">🎉</div>
              <p className="text-emerald-300 font-bold text-lg">모든 연습 문제를 완료했어요!</p>
              <p className="text-emerald-400 text-sm mt-1">정말 잘하고 있어요!</p>
            </motion.div>
          )}
        </div>
      );
    }

    // Step 4: 완료
    if (stepId === 'complete') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: 2 }}
            className="text-8xl mb-6"
          >
            🎉
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-3">미션 완료!</h3>
          <p className="text-slate-300 text-lg mb-6">
            {mission.concept || mission.title}을(를) 성공적으로 배웠어요!
          </p>
          <div className="bg-gradient-to-r from-violet-900/50 to-purple-900/50 rounded-2xl p-6 border border-violet-500/30 max-w-md mx-auto">
            <p className="text-violet-200 text-sm leading-relaxed">
              학습한 내용을 잊지 말고, 다음 미션에서도 활용해봐요!
            </p>
          </div>
        </motion.div>
      );
    }

    return null;
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">📚</span> {mission.title}
        </h3>
        <p className="text-slate-400 mt-1">{mission.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {mission.concept && (
            <div className="px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium border border-violet-500/30">
              📚 {mission.concept}
            </div>
          )}
          {mission.difficulty && (
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium border ${
                mission.difficulty === 'beginner'
                  ? 'bg-green-900/50 text-green-300 border-green-500/30'
                  : mission.difficulty === 'intermediate'
                  ? 'bg-yellow-900/50 text-yellow-300 border-yellow-500/30'
                  : 'bg-red-900/50 text-red-300 border-red-500/30'
              }`}
            >
              {mission.difficulty === 'beginner'
                ? '초급'
                : mission.difficulty === 'intermediate'
                ? '중급'
                : '고급'}
            </div>
          )}
        </div>
      </div>

      {/* 진행률 바 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm">진행률</span>
          <span className="text-violet-400 text-sm font-bold">{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-violet-500 to-purple-600"
          />
        </div>
      </div>

      {/* 스텝 네비게이션 */}
      <div className="flex gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            disabled={index > currentStep && !canComplete}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all ${
              currentStep === index
                ? 'bg-violet-500 text-white shadow-lg'
                : currentStep > index
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-slate-700/50 text-slate-500 border border-slate-600'
            }`}
          >
            {currentStep > index && <CheckCircle className="w-3 h-3" />}
            <span className="text-lg">{step.icon}</span>
            <span className="hidden sm:inline">{step.title}</span>
          </button>
        ))}
      </div>

      {/* 콘텐츠 영역 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* 네비게이션 버튼 */}
      <div className="flex gap-3 mt-6">
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <button
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="px-6 py-3 bg-slate-700 text-white font-bold rounded-xl hover:bg-slate-600 transition-colors"
          >
            ← 이전
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={() => {
              // 현재 스텝에 따른 진행 조건 확인
              const stepId = steps[currentStep].id;
              if (stepId === 'check' && !allCheckQuestionsCorrect) {
                return; // 확인 질문을 모두 맞춰야 함
              }
              if (stepId === 'practice' && !allChallengesCompleted) {
                return; // 연습 문제를 모두 완료해야 함
              }
              setCurrentStep((prev) => prev + 1);
            }}
            disabled={
              (steps[currentStep].id === 'check' && !allCheckQuestionsCorrect) ||
              (steps[currentStep].id === 'practice' && !allChallengesCompleted)
            }
            className={`flex-1 py-3 font-bold rounded-xl transition-colors ${
              (steps[currentStep].id === 'check' && !allCheckQuestionsCorrect) ||
              (steps[currentStep].id === 'practice' && !allChallengesCompleted)
                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                : 'bg-violet-600 text-white hover:bg-violet-500'
            }`}
          >
            {steps[currentStep].id === 'check' && !allCheckQuestionsCorrect
              ? '모든 질문에 답해주세요'
              : steps[currentStep].id === 'practice' && !allChallengesCompleted
              ? '연습 문제를 완료하세요'
              : '다음 →'}
          </button>
        ) : (
          currentStep === steps.length - 1 && (
            <motion.button
              onClick={() => onComplete(canComplete)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 py-3 font-bold rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_4px_0_0_#15803d]"
            >
              <CheckCircle className="w-5 h-5" />
              미션 완료!
            </motion.button>
          )
        )}
      </div>
    </div>
  );
};

export default InteractiveLessonMission;

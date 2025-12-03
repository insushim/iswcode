import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy, Timer, Zap, RotateCcw, Play, Target, Brain, Bug, Keyboard, Sparkles, Star, Code, Shuffle, Calculator, Lightbulb, Puzzle, Binary } from 'lucide-react';
import { Card, Button, Modal } from '../components/Common';
import { useUserStore } from '../stores/userStore';
import { useProgressStore } from '../stores/progressStore';

import {
  variableMasterProblems,
  loopCounterProblems,
  debugChallengeProblems,
  dataTypeQuizProblems,
  logicGateProblems,
  arrayQuestProblems,
  functionBuilderProblems,
  errorFinderProblems
} from '../data/gameProblems';
type GameType = 'code-racer' | 'bug-hunter' | 'memory' | 'quiz-battle' | 'algorithm-rush' | 'pattern-master' | 'code-puzzle' | 'binary-decoder' | 'variable-master' | 'loop-counter' | 'debug-challenge' | 'data-type-quiz' | 'logic-gate' | 'array-quest' | 'function-builder' | 'error-finder';

interface Game {
  id: GameType;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGlow: string;
  emoji: string;
}

const games: Game[] = [
  {
    id: 'code-racer',
    name: '⚡ 코드 레이서',
    description: '제한 시간 안에 코드를 빠르게 타이핑하세요!',
    icon: <Keyboard className="w-10 h-10" />,
    color: 'from-blue-500 via-cyan-500 to-teal-400',
    bgGlow: 'bg-cyan-500/20',
    emoji: '⚡',
  },
  {
    id: 'bug-hunter',
    name: '🐛 버그 헌터',
    description: '코드에 숨은 버그를 찾아내세요!',
    icon: <Bug className="w-10 h-10" />,
    color: 'from-red-500 via-orange-500 to-amber-400',
    bgGlow: 'bg-orange-500/20',
    emoji: '🐛',
  },
  {
    id: 'memory',
    name: '🧠 코딩 메모리',
    description: '같은 코드 짝을 찾아 맞춰보세요!',
    icon: <Brain className="w-10 h-10" />,
    color: 'from-purple-500 via-pink-500 to-rose-400',
    bgGlow: 'bg-pink-500/20',
    emoji: '🧠',
  },
  {
    id: 'quiz-battle',
    name: '🎯 퀴즈 배틀',
    description: '다양한 코딩 퀴즈에 도전하세요!',
    icon: <Target className="w-10 h-10" />,
    color: 'from-green-500 via-emerald-500 to-teal-400',
    bgGlow: 'bg-emerald-500/20',
    emoji: '🎯',
  },
  {
    id: 'algorithm-rush',
    name: '🚀 출력값 맞추기',
    description: '코드 실행 결과를 예측하세요!',
    icon: <Calculator className="w-10 h-10" />,
    color: 'from-indigo-500 via-violet-500 to-purple-400',
    bgGlow: 'bg-violet-500/20',
    emoji: '🚀',
  },
  {
    id: 'pattern-master',
    name: '🔮 패턴 마스터',
    description: '규칙을 찾아 다음 값을 예측하세요!',
    icon: <Lightbulb className="w-10 h-10" />,
    color: 'from-yellow-500 via-amber-500 to-orange-400',
    bgGlow: 'bg-amber-500/20',
    emoji: '🔮',
  },
  {
    id: 'code-puzzle',
    name: '🧩 코드 퍼즐',
    description: '코드 조각을 올바른 순서로 배열하세요!',
    icon: <Puzzle className="w-10 h-10" />,
    color: 'from-teal-500 via-cyan-500 to-blue-400',
    bgGlow: 'bg-teal-500/20',
    emoji: '🧩',
  },
  {
    id: 'binary-decoder',
    name: '💻 바이너리 디코더',
    description: '이진수를 해독하세요!',
    icon: <Binary className="w-10 h-10" />,
    color: 'from-slate-500 via-gray-500 to-zinc-400',
    bgGlow: 'bg-slate-500/20',
    emoji: '💻',
  },
  {
    id: 'variable-master',
    name: '📦 변수 마스터',
    description: '변수의 값을 추적하세요!',
    icon: <Code className="w-10 h-10" />,
    color: 'from-blue-600 via-indigo-500 to-violet-500',
    bgGlow: 'bg-indigo-500/20',
    emoji: '📦',
  },
  {
    id: 'loop-counter',
    name: '🔄 반복문 카운터',
    description: '반복문 실행 결과를 맞춰보세요!',
    icon: <Shuffle className="w-10 h-10" />,
    color: 'from-emerald-500 via-green-500 to-lime-500',
    bgGlow: 'bg-green-500/20',
    emoji: '🔄',
  },
  {
    id: 'debug-challenge',
    name: '🔍 디버그 챌린지',
    description: '에러 메시지를 보고 문제를 찾으세요!',
    icon: <Bug className="w-10 h-10" />,
    color: 'from-red-600 via-rose-500 to-pink-500',
    bgGlow: 'bg-rose-500/20',
    emoji: '🔍',
  },
  {
    id: 'data-type-quiz',
    name: '🏷️ 자료형 퀴즈',
    description: '올바른 자료형을 맞춰보세요!',
    icon: <Target className="w-10 h-10" />,
    color: 'from-cyan-500 via-sky-500 to-blue-500',
    bgGlow: 'bg-sky-500/20',
    emoji: '🏷️',
  },
  {
    id: 'logic-gate',
    name: '⚡ 논리 게이트',
    description: 'AND, OR, NOT 연산 결과를 맞춰보세요!',
    icon: <Zap className="w-10 h-10" />,
    color: 'from-yellow-500 via-orange-500 to-red-500',
    bgGlow: 'bg-orange-500/20',
    emoji: '⚡',
  },
  {
    id: 'array-quest',
    name: '📊 배열 퀘스트',
    description: '배열 인덱스와 메서드를 마스터하세요!',
    icon: <Target className="w-10 h-10" />,
    color: 'from-purple-600 via-fuchsia-500 to-pink-500',
    bgGlow: 'bg-fuchsia-500/20',
    emoji: '📊',
  },
  {
    id: 'function-builder',
    name: '🛠️ 함수 빌더',
    description: '함수의 반환값을 예측하세요!',
    icon: <Sparkles className="w-10 h-10" />,
    color: 'from-teal-500 via-emerald-500 to-green-500',
    bgGlow: 'bg-emerald-500/20',
    emoji: '🛠️',
  },
  {
    id: 'error-finder',
    name: '❌ 에러 파인더',
    description: '코드에서 문법 오류를 찾으세요!',
    icon: <Bug className="w-10 h-10" />,
    color: 'from-red-500 via-orange-500 to-yellow-500',
    bgGlow: 'bg-red-500/20',
    emoji: '❌',
  },
];

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header with 3D effect */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="relative inline-block mb-6"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-3xl blur-xl opacity-50 animate-pulse" />
          <div className="relative w-24 h-24 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 border border-emerald-400/30">
            <Gamepad2 className="w-12 h-12 text-white drop-shadow-lg" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/30 rounded-3xl pointer-events-none" />
          </div>
          {/* Floating sparkles */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-4 text-white tracking-tight"
        >
          게임<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">센터</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 font-semibold text-xl"
        >
          🎮 재미있게 놀면서 코딩 실력을 키워요!
        </motion.p>
      </div>

      {/* Games Grid with 3D cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 200 }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedGame(game.id)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{ perspective: '1000px' }}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 ${game.bgGlow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl group-hover:border-slate-500/70 transition-all duration-300">
                {/* Top gradient section */}
                <div className={`relative h-28 bg-gradient-to-r ${game.color} flex items-center justify-center overflow-hidden`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute w-24 h-24 bg-white/20 rounded-full -top-12 -left-12 animate-pulse" />
                    <div className="absolute w-20 h-20 bg-white/20 rounded-full -bottom-10 -right-10 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>

                  {/* Icon with 3D effect */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="relative z-10 text-white drop-shadow-2xl"
                  >
                    {game.icon}
                  </motion.div>

                  {/* Shine overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 pointer-events-none" />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-black text-white">{game.name}</h3>
                  </div>
                  <p className="text-slate-300 text-sm font-medium mb-4 leading-relaxed">{game.description}</p>
                  <Button
                    variant="game"
                    size="md"
                    className="w-full font-bold text-base"
                    leftIcon={<Play className="w-5 h-5" />}
                  >
                    플레이
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Game Modal */}
      <Modal
        isOpen={selectedGame !== null}
        onClose={() => {
          setSelectedGame(null);
          setIsPlaying(false);
        }}
        title={games.find(g => g.id === selectedGame)?.name || '게임'}
        size="xl"
      >
        {selectedGame === 'code-racer' && <CodeRacerGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'bug-hunter' && <BugHunterGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'memory' && <MemoryGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'quiz-battle' && <QuizBattleGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'algorithm-rush' && <AlgorithmRushGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'pattern-master' && <PatternMasterGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'code-puzzle' && <CodePuzzleGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'binary-decoder' && <BinaryDecoderGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'variable-master' && <VariableMasterGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'loop-counter' && <LoopCounterGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'debug-challenge' && <DebugChallengeGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'data-type-quiz' && <DataTypeQuizGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'logic-gate' && <LogicGateGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'array-quest' && <ArrayQuestGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'function-builder' && <FunctionBuilderGame onClose={() => setSelectedGame(null)} />}
        {selectedGame === 'error-finder' && <ErrorFinderGame onClose={() => setSelectedGame(null)} />}
      </Modal>
    </div>
  );
};

// 코드 레이서 게임 - 문제 대폭 확대
const CodeRacerGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [code, setCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timer, setTimer] = useState(45);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const codeSnippets = [
    // ===== Python 기초 (30개) =====
    'print("Hello")',
    'for i in range(5):',
    'if x > 10:',
    'def hello():',
    'return x + y',
    'while True:',
    'list.append(1)',
    'len(array)',
    'import random',
    'class Dog:',
    'x = input()',
    'int(num)',
    'str(value)',
    'x.upper()',
    'x.lower()',
    'x.split(",")',
    '",".join(lst)',
    'abs(number)',
    'max(a, b)',
    'min(a, b)',
    'round(3.14)',
    'x % 2 == 0',
    'x // 2',
    'x ** 2',
    'list[0:3]',
    'list[-1]',
    'x in list',
    'not x',
    'x and y',
    'x or y',
    // ===== Python 중급 (25개) =====
    'elif x == 5:',
    'try: except:',
    'with open(f):',
    'lambda x: x*2',
    'map(str, lst)',
    'dict.keys()',
    'set([1,2,3])',
    'range(1,10,2)',
    'sorted(list)',
    'enumerate(a)',
    'zip(a, b)',
    'filter(f, x)',
    'list(range(5))',
    'dict.get(key)',
    'dict.items()',
    'dict.values()',
    'set.add(x)',
    'set.remove(x)',
    'x.strip()',
    'x.replace(a,b)',
    'x.startswith()',
    'x.endswith()',
    'x.isdigit()',
    'x.isalpha()',
    '__init__(self)',
    // ===== JavaScript 기초 (30개) =====
    'console.log(x)',
    'const arr = []',
    'let name = ""',
    'function add()',
    'return a + b;',
    'arr.push(item)',
    'arr.map(x=>x)',
    'arr.filter()',
    'obj.toString()',
    'JSON.parse(s)',
    'JSON.stringify()',
    'arr.length',
    'arr.pop()',
    'arr.shift()',
    'arr.unshift(x)',
    'arr.slice(0,3)',
    'arr.splice(1,2)',
    'arr.indexOf(x)',
    'arr.includes(x)',
    'arr.find(x=>x)',
    'arr.forEach()',
    'arr.reduce()',
    'arr.sort()',
    'arr.reverse()',
    'arr.join(",")',
    'str.split(",")',
    'str.trim()',
    'str.replace()',
    'str.substring()',
    'str.charAt(0)',
    // ===== JavaScript 중급 (20개) =====
    'async function()',
    'await fetch(url)',
    '() => {}',
    'const {a,b} = obj',
    'const [x,y] = arr',
    '...arr',
    '`Hello ${x}`',
    'new Promise()',
    '.then(res=>)',
    '.catch(err=>)',
    'setTimeout(f,0)',
    'setInterval()',
    'clearInterval()',
    'localStorage.get',
    'document.query',
    'getElementById()',
    'addEventListener()',
    'Math.random()',
    'Math.floor(x)',
    'Date.now()',
    // ===== HTML 태그 (25개) =====
    '<div></div>',
    '<p>Hello</p>',
    '<span>text</span>',
    '<h1>Title</h1>',
    '<h2>Sub</h2>',
    '<a href="">',
    '<img src="">',
    '<ul><li></li>',
    '<ol><li></li>',
    '<table><tr>',
    '<td>Cell</td>',
    '<form action>',
    '<input type>',
    '<button>Click',
    '<label for>',
    '<select>',
    '<option value>',
    '<textarea>',
    '<br>',
    '<hr>',
    '<header>',
    '<footer>',
    '<nav>',
    '<main>',
    '<section>',
    // ===== CSS 속성 (25개) =====
    'display:flex',
    'display:grid',
    'display:block',
    'display:none',
    'margin:auto',
    'padding:10px',
    'color:#fff',
    'background:#000',
    'font-size:16px',
    'font-weight:bold',
    'text-align:center',
    'border:1px solid',
    'border-radius:5px',
    'box-shadow:0 0 5px',
    'width:100%',
    'height:100vh',
    'position:absolute',
    'position:relative',
    'position:fixed',
    'top:0;left:0',
    'z-index:100',
    'opacity:0.5',
    'overflow:hidden',
    'cursor:pointer',
    'transition:0.3s',
  ];

  const generateCode = () => {
    const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setCode(randomCode);
    setUserInput('');
  };

  useEffect(() => {
    if (started && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && started) {
      setIsFinished(true);
      addExp(Math.floor(score / 2));
    }
  }, [started, timer, score, addExp]);

  useEffect(() => {
    if (userInput === code && code !== '') {
      const bonusPoints = combo >= 3 ? 50 : combo >= 2 ? 25 : 0;
      setScore(s => s + code.length * 10 + bonusPoints);
      setCombo(c => c + 1);
      generateCode();
    }
  }, [userInput, code]);

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setTimer(45);
    setCombo(0);
    setIsFinished(false);
    generateCode();
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 2)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Keyboard className="w-20 h-20 mx-auto text-cyan-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">⚡ 코드 레이서</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">45초 동안 코드를 빠르게 타이핑하세요!<br/>연속으로 맞추면 콤보 보너스!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Timer className="w-6 h-6 text-red-400" />
          <span className="text-2xl font-black text-white">{timer}초</span>
        </div>
        <div className="flex items-center gap-4">
          {combo >= 2 && (
            <span className="text-lg font-bold text-orange-400 animate-pulse">🔥 {combo} COMBO!</span>
          )}
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            <span className="text-2xl font-black text-white">{score}점</span>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-8 mb-6 text-center border-2 border-slate-700">
        <p className="font-mono text-3xl text-emerald-400 font-bold tracking-wide">{code}</p>
      </div>

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="w-full p-4 text-xl font-mono text-center rounded-xl bg-slate-800 border-2 border-slate-600 text-white focus:border-emerald-500 focus:outline-none transition-colors"
        placeholder="위 코드를 입력하세요..."
        autoFocus
      />
    </div>
  );
};

// 버그 헌터 게임 - 문제 대폭 확대
const BugHunterGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentBug, setCurrentBug] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const bugs = [
    // ===== Python 문법 오류 (25개) =====
    { code: 'print("Hello World)', error: '따옴표가 닫히지 않았어요', fix: 'print("Hello World")' },
    { code: 'if x = 10:', error: '비교 연산자가 틀렸어요 (= → ==)', fix: 'if x == 10:' },
    { code: 'for i in range(10)\n  print(i)', error: '콜론(:)이 빠졌어요', fix: 'for i in range(10):\n  print(i)' },
    { code: 'def hello()\n  return "hi"', error: '함수 정의에 콜론(:)이 빠졌어요', fix: 'def hello():\n  return "hi"' },
    { code: 'list = [1, 2, 3]\nprint(list[3])', error: '인덱스 범위 초과 (0,1,2만 가능)', fix: 'print(list[2])' },
    { code: 'while True\n  print("loop")', error: 'while문에 콜론(:)이 빠졌어요', fix: 'while True:\n  print("loop")' },
    { code: 'x = 5\nif x > 3\n  print(x)', error: 'if문에 콜론(:)이 빠졌어요', fix: 'if x > 3:\n  print(x)' },
    { code: 'pritn("Hello")', error: '함수명 오타 (pritn → print)', fix: 'print("Hello")' },
    { code: 'import randm', error: '모듈명 오타 (randm → random)', fix: 'import random' },
    { code: 'x = [1, 2, 3\nprint(x)', error: '대괄호가 닫히지 않았어요', fix: 'x = [1, 2, 3]\nprint(x)' },
    { code: 'elif x > 5:', error: 'elif 앞에 if문이 없어요', fix: 'if x > 10:\n  ...\nelif x > 5:' },
    { code: 'return x', error: 'return이 함수 밖에 있어요', fix: 'def func():\n  return x' },
    { code: 'x = "Hello\nprint(x)', error: '문자열이 닫히지 않았어요', fix: 'x = "Hello"\nprint(x)' },
    { code: 'class Dog\n  def bark(self):', error: 'class 정의에 콜론(:)이 빠졌어요', fix: 'class Dog:\n  def bark(self):' },
    { code: 'for i in range(5)\nprint(i)', error: '들여쓰기가 없어요', fix: 'for i in range(5):\n    print(i)' },
    { code: 'x = 10\ny = x +', error: '연산이 완성되지 않았어요', fix: 'y = x + 5' },
    { code: 'print(Hello)', error: '문자열에 따옴표가 없어요', fix: 'print("Hello")' },
    { code: 'def add(a, b)\n  return a + b', error: '함수 정의에 콜론(:)이 빠졌어요', fix: 'def add(a, b):\n  return a + b' },
    { code: 'x = {1, 2, 3]\nprint(x)', error: '괄호 종류가 맞지 않아요 ({ vs [)', fix: 'x = {1, 2, 3}' },
    { code: 'try\n  print(x)', error: 'try문에 콜론(:)이 빠졌어요', fix: 'try:\n  print(x)' },
    { code: 'except:\nprint("error")', error: 'except 뒤 들여쓰기가 없어요', fix: 'except:\n    print("error")' },
    { code: 'x = int("abc")', error: '문자열을 숫자로 변환할 수 없어요', fix: 'x = int("123")' },
    { code: 'x = 5 / 0', error: '0으로 나눌 수 없어요', fix: 'x = 5 / 1' },
    { code: 'list.apend(1)', error: '메서드명 오타 (apend → append)', fix: 'list.append(1)' },
    { code: 'x = none', error: 'None은 대문자로 시작해요', fix: 'x = None' },
    // ===== JavaScript 문법 오류 (25개) =====
    { code: 'console.log("Hi"', error: '괄호가 닫히지 않았어요', fix: 'console.log("Hi")' },
    { code: 'const x = 5\nconst x = 10', error: 'const 변수 재선언 불가', fix: 'let x = 5\nx = 10' },
    { code: 'if (x = 5) {}', error: '비교 연산자가 틀렸어요 (= → ===)', fix: 'if (x === 5) {}' },
    { code: 'for (let i=0 i<5 i++)', error: '세미콜론(;)이 빠졌어요', fix: 'for (let i=0; i<5; i++)' },
    { code: 'function add(a, b\n  return a+b\n}', error: '괄호와 중괄호가 안 맞아요', fix: 'function add(a, b) {\n  return a+b\n}' },
    { code: 'let arr = [1, 2, 3\nconsole.log(arr)', error: '대괄호가 닫히지 않았어요', fix: 'let arr = [1, 2, 3]' },
    { code: 'const obj = {a: 1 b: 2}', error: '객체 속성 사이에 쉼표가 없어요', fix: 'const obj = {a: 1, b: 2}' },
    { code: 'consol.log("Hi")', error: '객체명 오타 (consol → console)', fix: 'console.log("Hi")' },
    { code: 'arr.pus(1)', error: '메서드명 오타 (pus → push)', fix: 'arr.push(1)' },
    { code: 'if x > 5 {}', error: '조건문에 괄호가 없어요', fix: 'if (x > 5) {}' },
    { code: 'const x = 5;\nx = 10;', error: 'const 변수는 재할당 불가', fix: 'let x = 5;\nx = 10;' },
    { code: 'let x = "Hello\nconsole.log(x)', error: '문자열이 닫히지 않았어요', fix: 'let x = "Hello"' },
    { code: 'switch x {}', error: 'switch문에 괄호가 없어요', fix: 'switch (x) {}' },
    { code: 'while x > 0 {}', error: 'while문에 괄호가 없어요', fix: 'while (x > 0) {}' },
    { code: 'function() {}', error: '함수명이 없어요', fix: 'function myFunc() {}' },
    { code: 'let 123abc = 5', error: '변수명이 숫자로 시작할 수 없어요', fix: 'let abc123 = 5' },
    { code: 'const arr = [];\narr[0] = 1', error: '문제없음 - 배열 요소 수정은 가능', fix: 'const arr = []; arr[0] = 1' },
    { code: 'document.getElementByld("x")', error: '메서드명 오타 (ld → Id)', fix: 'document.getElementById("x")' },
    { code: 'arr.lenght', error: '속성명 오타 (lenght → length)', fix: 'arr.length' },
    { code: 'JSON.prase(str)', error: '메서드명 오타 (prase → parse)', fix: 'JSON.parse(str)' },
    { code: 'Math.roud(3.7)', error: '메서드명 오타 (roud → round)', fix: 'Math.round(3.7)' },
    { code: 'await fetch(url)', error: 'await는 async 함수 안에서만 사용', fix: 'async function f() { await fetch(url) }' },
    { code: 'let arr = [1,2,3];\narr.foreach(x=>x)', error: '메서드명 대소문자 오류 (foreach → forEach)', fix: 'arr.forEach(x=>x)' },
    { code: 'const x = undefind', error: '키워드 오타 (undefind → undefined)', fix: 'const x = undefined' },
    { code: 'const x = NaN\nif (x == NaN)', error: 'NaN은 == 비교 불가, isNaN() 사용', fix: 'if (isNaN(x))' },
    // ===== HTML/CSS 오류 (20개) =====
    { code: '<div>Hello</p>', error: '태그가 일치하지 않아요 (div/p)', fix: '<div>Hello</div>' },
    { code: '<img src="a.jpg">', error: 'alt 속성이 빠졌어요', fix: '<img src="a.jpg" alt="image">' },
    { code: 'color: red\nfont-size: 12px;', error: '세미콜론(;)이 빠졌어요', fix: 'color: red;\nfont-size: 12px;' },
    { code: '<a hrf="url">링크</a>', error: '속성명 오타 (hrf → href)', fix: '<a href="url">링크</a>' },
    { code: 'backgroud-color: blue;', error: '속성명 오타 (backgroud → background)', fix: 'background-color: blue;' },
    { code: '<html>\n<body>\n</html>', error: 'body 태그가 닫히지 않았어요', fix: '<html><body></body></html>' },
    { code: '<ul>\n<li>항목\n</ul>', error: 'li 태그가 닫히지 않았어요', fix: '<ul><li>항목</li></ul>' },
    { code: '<input type="text">\n</input>', error: 'input은 닫는 태그가 없어요', fix: '<input type="text">' },
    { code: '<br></br>', error: 'br은 닫는 태그가 없어요', fix: '<br>' },
    { code: '<table>\n<td>셀</td>\n</table>', error: 'td는 tr 안에 있어야 해요', fix: '<table><tr><td>셀</td></tr></table>' },
    { code: 'font-sise: 16px;', error: '속성명 오타 (sise → size)', fix: 'font-size: 16px;' },
    { code: 'dispaly: flex;', error: '속성명 오타 (dispaly → display)', fix: 'display: flex;' },
    { code: 'maring: 10px;', error: '속성명 오타 (maring → margin)', fix: 'margin: 10px;' },
    { code: 'pading: 10px;', error: '속성명 오타 (pading → padding)', fix: 'padding: 10px;' },
    { code: 'border: 1px soild red;', error: '값 오타 (soild → solid)', fix: 'border: 1px solid red;' },
    { code: '<a href="#">링크\n<p>문단</p>\n</a>', error: 'a 태그 안에 블록 요소(p)가 있어요', fix: '<a href="#">링크</a><p>문단</p>' },
    { code: '<head>\n<p>내용</p>\n</head>', error: 'head 안에 p 태그가 있으면 안 돼요', fix: '<body><p>내용</p></body>' },
    { code: 'heigth: 100px;', error: '속성명 오타 (heigth → height)', fix: 'height: 100px;' },
    { code: 'widht: 100px;', error: '속성명 오타 (widht → width)', fix: 'width: 100px;' },
    { code: '<div class=main>', error: '속성값에 따옴표가 없어요', fix: '<div class="main">' },
  ];

  const checkAnswer = (answer: string) => {
    if (answer === bugs[currentBug].error) {
      setScore(s => s + 100);
    }

    if (currentBug < bugs.length - 1) {
      setCurrentBug(c => c + 1);
    } else {
      setIsFinished(true);
      addExp(Math.floor(score / 5));
    }
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={() => { setStarted(false); setCurrentBug(0); setScore(0); setIsFinished(false); }} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Bug className="w-20 h-20 mx-auto text-orange-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🐛 버그 헌터</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">코드에 숨은 버그를 찾아내세요!<br/>총 {bugs.length}개의 버그가 기다리고 있어요!</p>
        <Button variant="primary" onClick={() => setStarted(true)} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  const bug = bugs[currentBug];
  const wrongAnswers = bugs.filter((_, i) => i !== currentBug).slice(0, 3).map(b => b.error);
  const answers = [...wrongAnswers, bug.error].sort(() => Math.random() - 0.5);

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentBug + 1} / {bugs.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 mb-6 border-2 border-red-500/30">
        <pre className="font-mono text-xl text-red-400 whitespace-pre-wrap font-semibold">{bug.code}</pre>
      </div>

      <p className="text-center text-xl font-bold text-white mb-5">🔍 이 코드의 문제점은?</p>

      <div className="grid grid-cols-1 gap-3">
        {answers.map((answer, index) => (
          <Button
            key={index}
            variant="secondary"
            onClick={() => checkAnswer(answer)}
            className="text-base font-semibold py-4 text-left px-6 hover:bg-slate-700 transition-colors"
          >
            {answer}
          </Button>
        ))}
      </div>
    </div>
  );
};

// 메모리 게임 - 카드 확대 및 시인성 개선
const MemoryGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [cards, setCards] = useState<{ id: number; value: string; flipped: boolean; matched: boolean }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const codeSymbols = ['if', 'for', 'while', 'def', 'class', 'return', 'print', 'import', 'try', 'else', 'elif', 'break'];

  const initGame = () => {
    const symbols = codeSymbols.slice(0, 8);
    const pairs = [...symbols, ...symbols];
    const shuffled = pairs.sort(() => Math.random() - 0.5).map((value, index) => ({
      id: index,
      value,
      flipped: false,
      matched: false,
    }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setIsFinished(false);
    setStarted(true);
  };

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2) return;
    if (cards[id].flipped || cards[id].matched) return;

    const newCards = [...cards];
    newCards[id].flipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = flippedCards;

      if (cards[first].value === cards[second].value) {
        const newCards = [...cards];
        newCards[first].matched = true;
        newCards[second].matched = true;
        setCards(newCards);
        setFlippedCards([]);

        if (newCards.every(c => c.matched)) {
          setIsFinished(true);
          const exp = Math.max(20, 150 - moves * 3);
          addExp(exp);
        }
      } else {
        setTimeout(() => {
          const newCards = [...cards];
          newCards[first].flipped = false;
          newCards[second].flipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards, cards, moves, addExp]);

  if (isFinished) {
    const exp = Math.max(20, 150 - moves * 3);
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 완료!</h2>
        <p className="text-2xl font-bold text-slate-300 mb-2">{moves}번 만에 성공!</p>
        <p className="text-xl text-emerald-400 font-semibold mb-6">+{exp} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={initGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Brain className="w-20 h-20 mx-auto text-purple-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🧠 코딩 메모리</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">같은 코드 짝을 찾으세요!<br/>적은 횟수로 맞출수록 높은 점수!</p>
        <Button variant="primary" onClick={initGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold text-white">이동 횟수: {moves}</span>
        <Button variant="ghost" size="md" onClick={initGame} leftIcon={<RotateCcw className="w-5 h-5" />} className="font-bold">
          다시
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`aspect-square rounded-xl font-mono text-lg font-black flex items-center justify-center transition-all border-2 ${
              card.flipped || card.matched
                ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-emerald-400'
                : 'bg-slate-700 hover:bg-slate-600 border-slate-600 hover:border-slate-500'
            } ${card.matched ? 'opacity-60' : ''}`}
            animate={{ rotateY: card.flipped || card.matched ? 180 : 0 }}
          >
            {(card.flipped || card.matched) && (
              <span style={{ transform: 'rotateY(180deg)' }} className="text-lg">{card.value}</span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// 퀴즈 배틀 게임 - 문제 대폭 확대
const QuizBattleGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const { addExp } = useUserStore();

  const allQuestions = [
    // ===== Python 기초 (25문제) =====
    { q: 'Python에서 "Hello"를 출력하는 코드는?', options: ['print("Hello")', 'echo "Hello"', 'console.log("Hello")', 'System.out.print("Hello")'], answer: 0 },
    { q: 'Python에서 주석을 작성하는 기호는?', options: ['//', '/*', '#', '--'], answer: 2 },
    { q: 'for 반복문에서 range(5)는 몇 번 반복하나요?', options: ['4번', '5번', '6번', '1번'], answer: 1 },
    { q: '배열의 길이를 구하는 Python 함수는?', options: ['length()', 'size()', 'len()', 'count()'], answer: 2 },
    { q: 'Python에서 정수 나눗셈 연산자는?', options: ['/', '//', '%', '**'], answer: 1 },
    { q: 'Python 리스트에 요소를 추가하는 메서드는?', options: ['add()', 'push()', 'append()', 'insert()'], answer: 2 },
    { q: 'Python에서 문자열을 대문자로 바꾸는 메서드는?', options: ['upper()', 'toUpper()', 'uppercase()', 'capital()'], answer: 0 },
    { q: 'Python에서 두 값이 같은지 비교하는 연산자는?', options: ['=', '==', '===', ':='], answer: 1 },
    { q: 'Python에서 딕셔너리의 키 목록을 얻는 메서드는?', options: ['keys()', 'getKeys()', 'keyList()', 'allKeys()'], answer: 0 },
    { q: 'Python에서 조건문에 사용하는 키워드가 아닌 것은?', options: ['if', 'elif', 'elseif', 'else'], answer: 2 },
    { q: 'Python에서 거듭제곱 연산자는?', options: ['^', '**', 'pow', '^^'], answer: 1 },
    { q: 'Python에서 리스트 마지막 요소를 제거하는 메서드는?', options: ['remove()', 'delete()', 'pop()', 'cut()'], answer: 2 },
    { q: 'Python에서 문자열을 소문자로 바꾸는 메서드는?', options: ['lower()', 'toLower()', 'small()', 'downcase()'], answer: 0 },
    { q: 'Python에서 나머지 연산자는?', options: ['/', '//', '%', 'mod'], answer: 2 },
    { q: 'Python 리스트에서 특정 값의 인덱스를 찾는 메서드는?', options: ['find()', 'search()', 'index()', 'locate()'], answer: 2 },
    { q: 'Python에서 문자열을 나누는 메서드는?', options: ['cut()', 'divide()', 'split()', 'break()'], answer: 2 },
    { q: 'Python에서 문자열을 합치는 메서드는?', options: ['merge()', 'concat()', 'join()', 'combine()'], answer: 2 },
    { q: 'Python에서 입력을 받는 함수는?', options: ['scan()', 'read()', 'input()', 'get()'], answer: 2 },
    { q: 'Python에서 타입을 확인하는 함수는?', options: ['typeof()', 'getType()', 'type()', 'checkType()'], answer: 2 },
    { q: 'Python에서 숫자를 문자열로 바꾸는 함수는?', options: ['toString()', 'str()', 'string()', 'convert()'], answer: 1 },
    { q: 'Python에서 문자열을 숫자로 바꾸는 함수는?', options: ['number()', 'toInt()', 'int()', 'parse()'], answer: 2 },
    { q: 'Python에서 절대값을 구하는 함수는?', options: ['absolute()', 'abs()', 'positive()', 'mag()'], answer: 1 },
    { q: 'Python에서 최대값을 구하는 함수는?', options: ['maximum()', 'biggest()', 'max()', 'largest()'], answer: 2 },
    { q: 'Python에서 최소값을 구하는 함수는?', options: ['minimum()', 'smallest()', 'min()', 'least()'], answer: 2 },
    { q: 'Python에서 반올림하는 함수는?', options: ['ceil()', 'floor()', 'round()', 'truncate()'], answer: 2 },
    // ===== Python 중급 (20문제) =====
    { q: 'Python에서 예외처리에 사용하는 키워드는?', options: ['catch', 'error', 'try', 'handle'], answer: 2 },
    { q: 'Python에서 람다 함수를 정의하는 키워드는?', options: ['func', 'def', 'lambda', 'arrow'], answer: 2 },
    { q: 'Python에서 클래스를 정의하는 키워드는?', options: ['struct', 'object', 'class', 'type'], answer: 2 },
    { q: 'Python에서 상속받을 때 부모 클래스를 호출하는 함수는?', options: ['parent()', 'base()', 'super()', 'this()'], answer: 2 },
    { q: 'Python에서 파일을 열 때 사용하는 함수는?', options: ['read()', 'file()', 'open()', 'load()'], answer: 2 },
    { q: 'Python에서 with 문은 주로 무엇에 사용되나요?', options: ['반복', '조건', '리소스 관리', '함수 정의'], answer: 2 },
    { q: 'Python의 리스트 컴프리헨션 문법은?', options: ['[x for x in list]', '{x: x in list}', '(x for x in list)', '<x for x in list>'], answer: 0 },
    { q: 'Python에서 모듈을 가져오는 키워드는?', options: ['include', 'require', 'import', 'using'], answer: 2 },
    { q: 'Python에서 None은 무엇을 의미하나요?', options: ['0', '빈 문자열', '값이 없음', 'False'], answer: 2 },
    { q: 'Python에서 self는 무엇을 의미하나요?', options: ['전역 변수', '현재 객체', '부모 클래스', '함수'], answer: 1 },
    { q: 'Python에서 __init__은 무엇인가요?', options: ['소멸자', '생성자', '접근자', '변환자'], answer: 1 },
    { q: 'Python에서 데코레이터를 나타내는 기호는?', options: ['#', '$', '@', '&'], answer: 2 },
    { q: 'Python에서 집합(Set)을 만드는 기호는?', options: ['[]', '{}', '()', '<>'], answer: 1 },
    { q: 'Python에서 튜플의 특징은?', options: ['수정 가능', '수정 불가능', '키-값 쌍', '순서 없음'], answer: 1 },
    { q: 'Python에서 딕셔너리 값을 가져오는 안전한 메서드는?', options: ['value()', 'fetch()', 'get()', 'retrieve()'], answer: 2 },
    { q: 'Python의 map 함수는 무엇을 하나요?', options: ['필터링', '정렬', '함수를 각 요소에 적용', '합계 계산'], answer: 2 },
    { q: 'Python의 filter 함수는 무엇을 하나요?', options: ['조건에 맞는 요소 필터링', '정렬', '변환', '합계 계산'], answer: 0 },
    { q: 'Python의 reduce 함수는 어느 모듈에 있나요?', options: ['math', 'functools', 'itertools', 'collections'], answer: 1 },
    { q: 'Python에서 *args는 무엇인가요?', options: ['키워드 인자', '가변 위치 인자', '기본 인자', '필수 인자'], answer: 1 },
    { q: 'Python에서 **kwargs는 무엇인가요?', options: ['가변 위치 인자', '가변 키워드 인자', '기본 인자', '필수 인자'], answer: 1 },
    // ===== JavaScript 기초 (25문제) =====
    { q: 'JavaScript에서 변수를 선언하는 키워드가 아닌 것은?', options: ['let', 'const', 'var', 'define'], answer: 3 },
    { q: 'JavaScript에서 배열을 선언하는 방법은?', options: ['array()', '[]', '{}', '<>'], answer: 1 },
    { q: 'JavaScript의 엄격한 비교 연산자는?', options: ['==', '===', '!=', '<>'], answer: 1 },
    { q: 'JavaScript에서 콘솔에 출력하는 방법은?', options: ['print()', 'echo()', 'console.log()', 'output()'], answer: 2 },
    { q: 'JavaScript에서 문자열을 숫자로 변환하는 함수는?', options: ['toNumber()', 'parseInt()', 'convert()', 'num()'], answer: 1 },
    { q: 'JavaScript에서 배열의 길이를 구하는 속성은?', options: ['size', 'count', 'length', 'len'], answer: 2 },
    { q: 'JavaScript에서 배열 끝에 요소를 추가하는 메서드는?', options: ['add()', 'push()', 'append()', 'insert()'], answer: 1 },
    { q: 'JavaScript에서 배열 끝 요소를 제거하는 메서드는?', options: ['remove()', 'pop()', 'delete()', 'cut()'], answer: 1 },
    { q: 'JavaScript에서 함수를 정의하는 키워드는?', options: ['def', 'func', 'function', 'fn'], answer: 2 },
    { q: 'JavaScript에서 객체를 만드는 방법은?', options: ['[]', '{}', '()', '<>'], answer: 1 },
    { q: 'JavaScript에서 주석을 작성하는 방법이 아닌 것은?', options: ['//', '/* */', '#', '/** */'], answer: 2 },
    { q: 'JavaScript에서 문자열을 합치는 연산자는?', options: ['&', '+', '.', ','], answer: 1 },
    { q: 'JavaScript에서 typeof의 역할은?', options: ['타입 변환', '타입 확인', '타입 생성', '타입 삭제'], answer: 1 },
    { q: 'JavaScript에서 NaN의 의미는?', options: ['숫자가 아님', '널 값', '정의되지 않음', '무한대'], answer: 0 },
    { q: 'JavaScript에서 undefined의 의미는?', options: ['숫자가 아님', '널 값', '정의되지 않음', '무한대'], answer: 2 },
    { q: 'JavaScript에서 null의 의미는?', options: ['숫자가 아님', '의도적으로 비어있음', '정의되지 않음', '무한대'], answer: 1 },
    { q: 'JavaScript의 논리 AND 연산자는?', options: ['and', '&', '&&', 'AND'], answer: 2 },
    { q: 'JavaScript의 논리 OR 연산자는?', options: ['or', '|', '||', 'OR'], answer: 2 },
    { q: 'JavaScript에서 조건문에 사용하는 키워드가 아닌 것은?', options: ['if', 'else', 'elif', 'switch'], answer: 2 },
    { q: 'JavaScript에서 반복문이 아닌 것은?', options: ['for', 'while', 'do-while', 'repeat'], answer: 3 },
    { q: 'JavaScript에서 배열을 순회하는 메서드는?', options: ['each()', 'forEach()', 'iterate()', 'loop()'], answer: 1 },
    { q: 'JavaScript에서 배열을 변환하는 메서드는?', options: ['transform()', 'convert()', 'map()', 'change()'], answer: 2 },
    { q: 'JavaScript에서 배열을 필터링하는 메서드는?', options: ['select()', 'filter()', 'where()', 'find()'], answer: 1 },
    { q: 'JavaScript에서 배열에서 하나의 요소를 찾는 메서드는?', options: ['search()', 'get()', 'find()', 'locate()'], answer: 2 },
    { q: 'JavaScript에서 JSON 문자열을 객체로 변환하는 메서드는?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.toObject()'], answer: 1 },
    // ===== JavaScript 중급 (15문제) =====
    { q: 'JavaScript에서 화살표 함수의 문법은?', options: ['-> {}', '=> {}', '>> {}', ':: {}'], answer: 1 },
    { q: 'JavaScript에서 비동기 함수를 정의하는 키워드는?', options: ['await', 'async', 'defer', 'promise'], answer: 1 },
    { q: 'JavaScript에서 Promise가 성공했을 때 호출되는 메서드는?', options: ['success()', 'done()', 'then()', 'resolve()'], answer: 2 },
    { q: 'JavaScript에서 Promise가 실패했을 때 호출되는 메서드는?', options: ['fail()', 'error()', 'catch()', 'reject()'], answer: 2 },
    { q: 'JavaScript에서 스프레드 연산자는?', options: ['**', '...', ':::', '>>>'], answer: 1 },
    { q: 'JavaScript에서 구조분해 할당이 아닌 것은?', options: ['const {a, b} = obj', 'const [x, y] = arr', 'const a = obj.a', 'const {a: x} = obj'], answer: 2 },
    { q: 'JavaScript에서 템플릿 리터럴에 사용하는 기호는?', options: ['""', "''", '``', '//'], answer: 2 },
    { q: 'JavaScript에서 this는 무엇을 가리키나요?', options: ['전역 객체', '호출 컨텍스트에 따라 다름', '항상 window', '항상 undefined'], answer: 1 },
    { q: 'JavaScript에서 클래스를 정의하는 키워드는?', options: ['struct', 'type', 'class', 'object'], answer: 2 },
    { q: 'JavaScript에서 상속을 나타내는 키워드는?', options: ['inherits', 'extends', 'implements', 'from'], answer: 1 },
    { q: 'JavaScript에서 생성자 메서드의 이름은?', options: ['init()', 'create()', 'constructor()', 'new()'], answer: 2 },
    { q: 'JavaScript에서 모듈을 내보내는 키워드는?', options: ['expose', 'export', 'public', 'out'], answer: 1 },
    { q: 'JavaScript에서 모듈을 가져오는 키워드는?', options: ['require', 'import', 'include', 'use'], answer: 1 },
    { q: 'JavaScript에서 setTimeout의 시간 단위는?', options: ['초', '밀리초', '분', '마이크로초'], answer: 1 },
    { q: 'JavaScript의 localStorage는 언제까지 유지되나요?', options: ['탭이 닫힐 때까지', '세션 동안', '삭제하기 전까지 영구', '1시간'], answer: 2 },
    // ===== HTML 기초 (20문제) =====
    { q: 'HTML에서 제목을 나타내는 태그는?', options: ['<p>', '<h1>', '<div>', '<span>'], answer: 1 },
    { q: 'HTML에서 링크를 만드는 태그는?', options: ['<link>', '<a>', '<href>', '<url>'], answer: 1 },
    { q: 'HTML에서 이미지를 삽입하는 태그는?', options: ['<image>', '<pic>', '<img>', '<photo>'], answer: 2 },
    { q: 'HTML에서 번호 없는 목록을 만드는 태그는?', options: ['<ol>', '<ul>', '<li>', '<list>'], answer: 1 },
    { q: 'HTML에서 줄바꿈 태그는?', options: ['<br>', '<lb>', '<newline>', '<break>'], answer: 0 },
    { q: 'HTML에서 번호 있는 목록을 만드는 태그는?', options: ['<ol>', '<ul>', '<li>', '<nl>'], answer: 0 },
    { q: 'HTML에서 표를 만드는 태그는?', options: ['<grid>', '<table>', '<sheet>', '<data>'], answer: 1 },
    { q: 'HTML에서 표의 행을 나타내는 태그는?', options: ['<td>', '<tr>', '<th>', '<row>'], answer: 1 },
    { q: 'HTML에서 표의 셀을 나타내는 태그는?', options: ['<td>', '<tr>', '<th>', '<cell>'], answer: 0 },
    { q: 'HTML에서 입력 필드를 만드는 태그는?', options: ['<textbox>', '<input>', '<field>', '<entry>'], answer: 1 },
    { q: 'HTML에서 버튼을 만드는 태그는?', options: ['<btn>', '<click>', '<button>', '<action>'], answer: 2 },
    { q: 'HTML에서 폼을 만드는 태그는?', options: ['<input>', '<form>', '<submit>', '<data>'], answer: 1 },
    { q: 'HTML에서 문단을 나타내는 태그는?', options: ['<paragraph>', '<p>', '<text>', '<para>'], answer: 1 },
    { q: 'HTML에서 굵은 글씨를 만드는 태그는?', options: ['<bold>', '<b>', '<fat>', '<thick>'], answer: 1 },
    { q: 'HTML에서 기울임 글씨를 만드는 태그는?', options: ['<italic>', '<i>', '<slant>', '<em>'], answer: 1 },
    { q: 'HTML에서 비디오를 삽입하는 태그는?', options: ['<movie>', '<vid>', '<video>', '<film>'], answer: 2 },
    { q: 'HTML에서 오디오를 삽입하는 태그는?', options: ['<sound>', '<music>', '<audio>', '<mp3>'], answer: 2 },
    { q: 'HTML에서 영역을 구분하는 태그는?', options: ['<section>', '<area>', '<region>', '<zone>'], answer: 0 },
    { q: 'HTML에서 네비게이션을 나타내는 태그는?', options: ['<menu>', '<nav>', '<navigation>', '<links>'], answer: 1 },
    { q: 'HTML에서 주요 내용을 나타내는 태그는?', options: ['<content>', '<body>', '<main>', '<center>'], answer: 2 },
    // ===== CSS 기초 (20문제) =====
    { q: 'CSS에서 글자 색상을 지정하는 속성은?', options: ['font-color', 'text-color', 'color', 'foreground'], answer: 2 },
    { q: 'CSS에서 배경색을 지정하는 속성은?', options: ['bg-color', 'background-color', 'back-color', 'bgcolor'], answer: 1 },
    { q: 'CSS에서 요소를 가운데 정렬하는 방법은?', options: ['center: true', 'align: center', 'text-align: center', 'middle: yes'], answer: 2 },
    { q: 'CSS에서 글자 크기를 지정하는 속성은?', options: ['text-size', 'font-size', 'size', 'font-height'], answer: 1 },
    { q: 'CSS의 선택자 중 ID를 선택하는 기호는?', options: ['.', '#', '@', '*'], answer: 1 },
    { q: 'CSS의 선택자 중 클래스를 선택하는 기호는?', options: ['.', '#', '@', '*'], answer: 0 },
    { q: 'CSS에서 모든 요소를 선택하는 선택자는?', options: ['.', '#', '@', '*'], answer: 3 },
    { q: 'CSS에서 여백을 지정하는 속성은?', options: ['spacing', 'margin', 'gap', 'space'], answer: 1 },
    { q: 'CSS에서 안쪽 여백을 지정하는 속성은?', options: ['inner-margin', 'padding', 'spacing', 'indent'], answer: 1 },
    { q: 'CSS에서 테두리를 지정하는 속성은?', options: ['outline', 'border', 'edge', 'frame'], answer: 1 },
    { q: 'CSS에서 요소의 너비를 지정하는 속성은?', options: ['size', 'width', 'length', 'horizontal'], answer: 1 },
    { q: 'CSS에서 요소의 높이를 지정하는 속성은?', options: ['size', 'height', 'length', 'vertical'], answer: 1 },
    { q: 'CSS에서 글꼴을 지정하는 속성은?', options: ['font', 'font-family', 'typeface', 'text-font'], answer: 1 },
    { q: 'CSS에서 Flexbox를 활성화하는 값은?', options: ['display: block', 'display: flex', 'display: grid', 'display: inline'], answer: 1 },
    { q: 'CSS에서 Grid를 활성화하는 값은?', options: ['display: block', 'display: flex', 'display: grid', 'display: table'], answer: 2 },
    { q: 'CSS에서 요소를 숨기는 속성은?', options: ['hidden: true', 'display: none', 'visible: false', 'show: no'], answer: 1 },
    { q: 'CSS에서 투명도를 지정하는 속성은?', options: ['alpha', 'transparency', 'opacity', 'visible'], answer: 2 },
    { q: 'CSS에서 위치를 고정하는 값은?', options: ['position: static', 'position: fixed', 'position: absolute', 'position: relative'], answer: 1 },
    { q: 'CSS에서 둥근 모서리를 만드는 속성은?', options: ['corner-radius', 'border-radius', 'round', 'curve'], answer: 1 },
    { q: 'CSS에서 그림자를 만드는 속성은?', options: ['shadow', 'box-shadow', 'drop-shadow', 'effect'], answer: 1 },
    // ===== 알고리즘/자료구조 (25문제) =====
    { q: '시간 복잡도 O(1)은 무엇을 의미하나요?', options: ['선형 시간', '상수 시간', '로그 시간', '지수 시간'], answer: 1 },
    { q: '버블 정렬의 시간 복잡도는?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'], answer: 2 },
    { q: '재귀 함수란?', options: ['반복문을 사용하는 함수', '자기 자신을 호출하는 함수', '인자가 없는 함수', '값을 반환하지 않는 함수'], answer: 1 },
    { q: '스택의 특징은?', options: ['FIFO', 'LIFO', 'Random', 'Sorted'], answer: 1 },
    { q: '큐의 특징은?', options: ['FIFO', 'LIFO', 'Random', 'Sorted'], answer: 0 },
    { q: '이진 탐색의 시간 복잡도는?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], answer: 2 },
    { q: '퀵 정렬의 평균 시간 복잡도는?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 1 },
    { q: '병합 정렬의 시간 복잡도는?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], answer: 1 },
    { q: '해시 테이블의 평균 검색 시간 복잡도는?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], answer: 2 },
    { q: '연결 리스트의 장점은?', options: ['랜덤 접근', '삽입/삭제 용이', '메모리 효율', '정렬 속도'], answer: 1 },
    { q: '배열의 장점은?', options: ['삽입 용이', '삭제 용이', '인덱스 접근', '크기 가변'], answer: 2 },
    { q: '트리 구조에서 루트란?', options: ['맨 아래 노드', '맨 위 노드', '중간 노드', '리프 노드'], answer: 1 },
    { q: '이진 트리에서 각 노드가 가질 수 있는 최대 자식 수는?', options: ['1개', '2개', '3개', '무제한'], answer: 1 },
    { q: 'DFS는 무엇의 약자인가요?', options: ['Data First Search', 'Depth First Search', 'Direct Find System', 'Deep Find Sort'], answer: 1 },
    { q: 'BFS는 무엇의 약자인가요?', options: ['Binary Find Search', 'Breadth First Search', 'Best First Sort', 'Broad Find System'], answer: 1 },
    { q: '그래프에서 사이클이란?', options: ['시작점과 끝점이 같은 경로', '가장 짧은 경로', '가장 긴 경로', '연결되지 않은 노드'], answer: 0 },
    { q: '동적 프로그래밍의 핵심 개념은?', options: ['반복', '재귀', '메모이제이션', '정렬'], answer: 2 },
    { q: '그리디 알고리즘의 특징은?', options: ['전역 최적해 보장', '매 단계 최선의 선택', '모든 경우 탐색', '역추적'], answer: 1 },
    { q: '힙(Heap)의 특징은?', options: ['항상 정렬됨', '부모가 자식보다 크거나 작음', 'FIFO', 'LIFO'], answer: 1 },
    { q: '우선순위 큐의 구현에 주로 사용되는 자료구조는?', options: ['배열', '연결 리스트', '힙', '스택'], answer: 2 },
    { q: '시간 복잡도 O(n log n)인 정렬 알고리즘이 아닌 것은?', options: ['퀵 정렬', '병합 정렬', '힙 정렬', '버블 정렬'], answer: 3 },
    { q: '안정 정렬이란?', options: ['빠른 정렬', '같은 값의 순서가 유지되는 정렬', '메모리를 적게 쓰는 정렬', '재귀를 쓰는 정렬'], answer: 1 },
    { q: '분할 정복의 예가 아닌 것은?', options: ['병합 정렬', '퀵 정렬', '이진 탐색', '버블 정렬'], answer: 3 },
    { q: '피보나치 수열의 점화식은?', options: ['F(n) = F(n-1) + F(n-2)', 'F(n) = F(n-1) * 2', 'F(n) = n * F(n-1)', 'F(n) = F(n/2)'], answer: 0 },
    { q: '팩토리얼의 정의로 올바른 것은?', options: ['n! = n * (n-1)!', 'n! = n + (n-1)!', 'n! = n / (n-1)!', 'n! = n - (n-1)!'], answer: 0 },
    // ===== 컴퓨터 기초 (15문제) =====
    { q: '1바이트는 몇 비트인가요?', options: ['4비트', '8비트', '16비트', '32비트'], answer: 1 },
    { q: '이진수 1010은 십진수로 얼마인가요?', options: ['8', '10', '12', '14'], answer: 1 },
    { q: 'CPU의 역할은?', options: ['데이터 저장', '연산 처리', '화면 출력', '네트워크 연결'], answer: 1 },
    { q: 'RAM의 특징은?', options: ['영구 저장', '휘발성 메모리', '느린 속도', '읽기 전용'], answer: 1 },
    { q: 'ROM의 특징은?', options: ['쓰기 가능', '휘발성', '읽기 전용', '빠른 쓰기'], answer: 2 },
    { q: 'SSD와 HDD의 가장 큰 차이점은?', options: ['용량', '속도', '가격', '크기'], answer: 1 },
    { q: '운영체제가 아닌 것은?', options: ['Windows', 'Linux', 'Python', 'macOS'], answer: 2 },
    { q: 'HTTP는 무엇의 약자인가요?', options: ['High Text Transfer Protocol', 'HyperText Transfer Protocol', 'Hyper Transfer Text Protocol', 'High Transfer Text Protocol'], answer: 1 },
    { q: 'URL은 무엇의 약자인가요?', options: ['Uniform Resource Locator', 'Universal Resource Link', 'Unified Resource Location', 'User Resource Locator'], answer: 0 },
    { q: 'API는 무엇의 약자인가요?', options: ['Application Program Interface', 'Automated Programming Interface', 'Application Protocol Integration', 'Advanced Program Interface'], answer: 0 },
    { q: 'Git은 무엇을 위한 도구인가요?', options: ['텍스트 편집', '버전 관리', '이미지 편집', '웹 브라우징'], answer: 1 },
    { q: 'IDE는 무엇의 약자인가요?', options: ['Internet Development Environment', 'Integrated Development Environment', 'Interactive Design Editor', 'Internal Debug Engine'], answer: 1 },
    { q: '프로그래밍 언어가 아닌 것은?', options: ['Python', 'Java', 'HTML', 'C++'], answer: 2 },
    { q: '마크업 언어인 것은?', options: ['Python', 'Java', 'HTML', 'C++'], answer: 2 },
    { q: '서버 사이드 언어가 아닌 것은?', options: ['PHP', 'Node.js', 'CSS', 'Python'], answer: 2 },
  ];

  const [questions, setQuestions] = useState(allQuestions.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);

    setTimeout(() => {
      if (index === questions[currentQuestion].answer) {
        setScore(s => s + 20);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(score);
      }
    }, 1000);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 퀴즈 완료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{score} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Target className="w-20 h-20 mx-auto text-green-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🎯 퀴즈 배틀</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">다양한 코딩 퀴즈에 도전하세요!<br/>총 {allQuestions.length}개 중 10문제 랜덤 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {questions.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>

      <h3 className="text-xl font-bold text-white mb-6 p-4 bg-slate-800 rounded-xl">{question.q}</h3>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`w-full p-5 rounded-xl text-left text-lg font-semibold transition-all border-2 ${
              selected === null
                ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 text-white'
                : selected === index
                  ? index === question.answer
                    ? 'bg-green-500 border-green-400 text-white'
                    : 'bg-red-500 border-red-400 text-white'
                  : index === question.answer
                    ? 'bg-green-500 border-green-400 text-white'
                    : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// 새로운 게임 1: 출력값 맞추기 (코드 실행 결과 예측)
const AlgorithmRushGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = [
    // ===== Python 변수/출력 (20개) =====
    { code: 'x = 5\nprint(x + 3)', options: ['5', '8', '53', '3'], answer: 1 },
    { code: 'a = "Hello"\nprint(a * 2)', options: ['Hello2', 'HelloHello', '2Hello', 'Error'], answer: 1 },
    { code: 'x = 10\nx = x - 3\nprint(x)', options: ['10', '7', '3', '13'], answer: 1 },
    { code: 'name = "Kim"\nprint(len(name))', options: ['3', '4', 'Kim', 'name'], answer: 0 },
    { code: 'x = 7 // 2\nprint(x)', options: ['3.5', '3', '4', '2'], answer: 1 },
    { code: 'x = 7 % 3\nprint(x)', options: ['2', '1', '3', '0'], answer: 0 },
    { code: 'x = 2 ** 3\nprint(x)', options: ['6', '8', '9', '5'], answer: 1 },
    { code: 'x = 15 // 4\nprint(x)', options: ['3', '4', '3.75', '15'], answer: 0 },
    { code: 'x = 20 % 7\nprint(x)', options: ['6', '2', '7', '13'], answer: 0 },
    { code: 'a = 5\nb = 3\nprint(a * b)', options: ['8', '15', '53', '2'], answer: 1 },
    { code: 'x = 100\nx //= 3\nprint(x)', options: ['33', '34', '33.33', '3'], answer: 0 },
    { code: 'y = 2\ny **= 4\nprint(y)', options: ['8', '16', '6', '4'], answer: 1 },
    { code: 's = "Python"\nprint(s[0])', options: ['P', 'y', 'Python', '0'], answer: 0 },
    { code: 's = "Code"\nprint(s[-2])', options: ['o', 'd', 'C', 'e'], answer: 0 },
    { code: 'x = 3.7\nprint(int(x))', options: ['3', '4', '3.7', '3.0'], answer: 0 },
    { code: 'x = "42"\nprint(int(x) + 8)', options: ['428', '50', '42', 'Error'], answer: 1 },
    { code: 'a = True\nb = False\nprint(a and b)', options: ['True', 'False', '1', '0'], answer: 1 },
    { code: 'a = True\nb = False\nprint(a or b)', options: ['True', 'False', '1', '0'], answer: 0 },
    { code: 'print(not False)', options: ['True', 'False', 'Not', 'Error'], answer: 0 },
    { code: 'x = 5\nprint(x == 5)', options: ['True', 'False', '5', 'x'], answer: 0 },
    // ===== Python 조건문 (15개) =====
    { code: 'x = 5\nif x > 3:\n  print("A")\nelse:\n  print("B")', options: ['A', 'B', '5', 'Error'], answer: 0 },
    { code: 'x = 2\nif x > 3:\n  print("A")\nelse:\n  print("B")', options: ['A', 'B', '2', 'Error'], answer: 1 },
    { code: 'x = 10\nif x >= 10:\n  print("OK")', options: ['OK', '10', 'True', '출력없음'], answer: 0 },
    { code: 'x = 5\nif x == 5:\n  print("Yes")', options: ['Yes', 'No', '5', 'True'], answer: 0 },
    { code: 'x = 3\nif x != 5:\n  print("다름")', options: ['다름', '같음', '3', '5'], answer: 0 },
    { code: 'x = 7\nif x > 5:\n  if x < 10:\n    print("중간")', options: ['중간', '5', '7', '출력없음'], answer: 0 },
    { code: 'x = 15\nif x < 10:\n  print("A")\nelif x < 20:\n  print("B")\nelse:\n  print("C")', options: ['A', 'B', 'C', 'Error'], answer: 1 },
    { code: 'x = 25\nif x < 10:\n  print("A")\nelif x < 20:\n  print("B")\nelse:\n  print("C")', options: ['A', 'B', 'C', '25'], answer: 2 },
    { code: 'a = 5\nb = 5\nif a == b:\n  print("같음")', options: ['같음', '다름', 'True', 'Error'], answer: 0 },
    { code: 'x = 0\nif x:\n  print("참")\nelse:\n  print("거짓")', options: ['참', '거짓', '0', 'Error'], answer: 1 },
    { code: 's = ""\nif s:\n  print("있음")\nelse:\n  print("없음")', options: ['있음', '없음', '""', 'Error'], answer: 1 },
    { code: 'n = 4\nif n % 2 == 0:\n  print("짝수")', options: ['짝수', '홀수', '4', '0'], answer: 0 },
    { code: 'n = 7\nif n % 2 == 0:\n  print("짝수")\nelse:\n  print("홀수")', options: ['짝수', '홀수', '7', '1'], answer: 1 },
    { code: 'x = 5\ny = 3\nif x > y:\n  print(x - y)', options: ['2', '8', '5', '3'], answer: 0 },
    { code: 'age = 20\nif age >= 19:\n  print("성인")', options: ['성인', '미성년', '20', 'True'], answer: 0 },
    // ===== Python 반복문 (20개) =====
    { code: 'for i in range(3):\n  print(i)', options: ['0 1 2', '1 2 3', '0 1 2 3', '3'], answer: 0 },
    { code: 'sum = 0\nfor i in range(4):\n  sum += i\nprint(sum)', options: ['4', '6', '10', '3'], answer: 1 },
    { code: 'for i in range(1, 4):\n  print(i)', options: ['0 1 2 3', '1 2 3', '1 2 3 4', '4'], answer: 1 },
    { code: 'x = 1\nwhile x < 3:\n  x += 1\nprint(x)', options: ['1', '2', '3', '4'], answer: 2 },
    { code: 'count = 0\nfor i in range(5):\n  count += 1\nprint(count)', options: ['4', '5', '6', '0'], answer: 1 },
    { code: 'for i in range(0, 10, 2):\n  print(i)', options: ['0 2 4 6 8', '0 1 2...9', '2 4 6 8 10', '0 2 4 6 8 10'], answer: 0 },
    { code: 'for i in range(5, 0, -1):\n  print(i)', options: ['5 4 3 2 1', '5 4 3 2 1 0', '1 2 3 4 5', '0 1 2 3 4 5'], answer: 0 },
    { code: 'total = 0\nfor i in range(1, 6):\n  total += i\nprint(total)', options: ['10', '15', '21', '6'], answer: 1 },
    { code: 'x = 10\nwhile x > 5:\n  x -= 2\nprint(x)', options: ['4', '5', '6', '0'], answer: 0 },
    { code: 'n = 1\nfor i in range(3):\n  n *= 2\nprint(n)', options: ['6', '8', '4', '2'], answer: 1 },
    { code: 'for c in "abc":\n  print(c)', options: ['a b c', 'abc', 'a\\nb\\nc', '3'], answer: 0 },
    { code: 'result = ""\nfor i in range(3):\n  result += str(i)\nprint(result)', options: ['012', '0 1 2', '3', '123'], answer: 0 },
    { code: 'count = 0\nfor i in range(10):\n  if i % 2 == 0:\n    count += 1\nprint(count)', options: ['4', '5', '6', '10'], answer: 1 },
    { code: 'x = 0\nfor i in range(1, 4):\n  x += i * 2\nprint(x)', options: ['6', '12', '8', '10'], answer: 1 },
    { code: 'nums = [1, 2, 3]\ntotal = 0\nfor n in nums:\n  total += n\nprint(total)', options: ['6', '123', '3', 'Error'], answer: 0 },
    { code: 'i = 0\nwhile i < 3:\n  print(i)\n  i += 1', options: ['0 1 2', '1 2 3', '0 1 2 3', '3'], answer: 0 },
    { code: 'for i in range(2):\n  for j in range(2):\n    print(i+j)', options: ['0 1 1 2', '0 0 1 1', '0 1 2 3', '2 2 2 2'], answer: 0 },
    { code: 'x = 5\nwhile x > 0:\n  x -= 1\nprint(x)', options: ['0', '1', '-1', '5'], answer: 0 },
    { code: 'n = 0\nfor i in range(5):\n  n += i\n  if n > 5:\n    break\nprint(n)', options: ['6', '10', '5', '3'], answer: 0 },
    { code: 'result = []\nfor i in range(3):\n  result.append(i*2)\nprint(result)', options: ['[0,2,4]', '[2,4,6]', '[0,1,2]', '6'], answer: 0 },
    // ===== Python 리스트/문자열 (20개) =====
    { code: 'a = [1, 2, 3]\nprint(a[1])', options: ['1', '2', '3', '[1,2,3]'], answer: 1 },
    { code: 'a = [1, 2, 3]\nprint(len(a))', options: ['1', '2', '3', '6'], answer: 2 },
    { code: 'a = [1, 2, 3]\nprint(a[-1])', options: ['1', '2', '3', '-1'], answer: 2 },
    { code: 'a = [1, 2, 3]\na.append(4)\nprint(len(a))', options: ['3', '4', '5', '10'], answer: 1 },
    { code: 's = "hello"\nprint(s.upper())', options: ['hello', 'HELLO', 'Hello', 'hELLO'], answer: 1 },
    { code: 's = "abc"\nprint(s[0] + s[2])', options: ['ab', 'ac', 'bc', 'abc'], answer: 1 },
    { code: 'a = [3, 1, 2]\na.sort()\nprint(a[0])', options: ['3', '1', '2', '[1,2,3]'], answer: 1 },
    { code: 's = "a,b,c"\nprint(len(s.split(",")))', options: ['3', '5', '1', '7'], answer: 0 },
    { code: 'a = [1, 2, 3, 4, 5]\nprint(a[1:4])', options: ['[1,2,3,4]', '[2,3,4]', '[2,3,4,5]', '[1,2,3]'], answer: 1 },
    { code: 'a = [1, 2, 3]\na.insert(1, 10)\nprint(a)', options: ['[1,10,2,3]', '[10,1,2,3]', '[1,2,10,3]', '[1,2,3,10]'], answer: 0 },
    { code: 'a = [1, 2, 3, 2]\nprint(a.count(2))', options: ['1', '2', '3', '4'], answer: 1 },
    { code: 'a = [5, 3, 1, 4, 2]\nprint(max(a))', options: ['5', '1', '15', '2'], answer: 0 },
    { code: 'a = [5, 3, 1, 4, 2]\nprint(min(a))', options: ['5', '1', '15', '2'], answer: 1 },
    { code: 's = "hello world"\nprint(s.replace("world", "python"))', options: ['hello python', 'hello world', 'python world', 'hello'], answer: 0 },
    { code: 's = "  hello  "\nprint(s.strip())', options: ['hello', '  hello  ', 'hello  ', '  hello'], answer: 0 },
    { code: 'a = [1, 2, 3]\nb = a\nb.append(4)\nprint(len(a))', options: ['3', '4', '1', 'Error'], answer: 1 },
    { code: 's = "python"\nprint(s.find("th"))', options: ['2', '3', '4', '-1'], answer: 0 },
    { code: 's = "abcabc"\nprint(s.count("a"))', options: ['1', '2', '3', '6'], answer: 1 },
    { code: 'a = [1, 2, 3]\na.reverse()\nprint(a)', options: ['[3,2,1]', '[1,2,3]', '[1,3,2]', '6'], answer: 0 },
    { code: 'a = [1, 2]\nb = [3, 4]\nprint(a + b)', options: ['[1,2,3,4]', '[4,6]', '10', 'Error'], answer: 0 },
    // ===== JavaScript 기초 (25개) =====
    { code: 'let x = 5;\nconsole.log(x + "2");', options: ['7', '52', '5+2', 'Error'], answer: 1 },
    { code: 'let a = [1, 2, 3];\nconsole.log(a.length);', options: ['2', '3', '6', '[1,2,3]'], answer: 1 },
    { code: 'let x = "5";\nconsole.log(typeof x);', options: ['number', 'string', '5', 'int'], answer: 1 },
    { code: 'let x = 10;\nx += 5;\nconsole.log(x);', options: ['10', '5', '15', '105'], answer: 2 },
    { code: 'let arr = [1,2,3];\narr.push(4);\nconsole.log(arr.length);', options: ['3', '4', '10', '1'], answer: 1 },
    { code: 'let x = 10;\nconsole.log(x % 3);', options: ['1', '3', '0', '10'], answer: 0 },
    { code: 'let s = "Hello";\nconsole.log(s.toLowerCase());', options: ['hello', 'HELLO', 'Hello', 'hELLO'], answer: 0 },
    { code: 'let a = [1, 2, 3];\nconsole.log(a[0]);', options: ['1', '2', '3', '0'], answer: 0 },
    { code: 'let x = 5;\nlet y = "5";\nconsole.log(x == y);', options: ['true', 'false', '5', 'Error'], answer: 0 },
    { code: 'let x = 5;\nlet y = "5";\nconsole.log(x === y);', options: ['true', 'false', '5', 'Error'], answer: 1 },
    { code: 'let arr = [1, 2, 3];\narr.pop();\nconsole.log(arr);', options: ['[1,2]', '[1,2,3]', '[2,3]', '3'], answer: 0 },
    { code: 'let s = "JavaScript";\nconsole.log(s.length);', options: ['10', '9', '11', 'JavaScript'], answer: 0 },
    { code: 'let x = 7;\nconsole.log(x > 5 && x < 10);', options: ['true', 'false', '7', 'Error'], answer: 0 },
    { code: 'let x = 3;\nconsole.log(x > 5 || x < 10);', options: ['true', 'false', '3', 'Error'], answer: 0 },
    { code: 'let arr = [3, 1, 2];\narr.sort();\nconsole.log(arr[0]);', options: ['1', '2', '3', '[1,2,3]'], answer: 0 },
    { code: 'let s = "hello world";\nconsole.log(s.split(" ").length);', options: ['2', '11', '1', '5'], answer: 0 },
    { code: 'let x = null;\nconsole.log(typeof x);', options: ['null', 'object', 'undefined', 'string'], answer: 1 },
    { code: 'console.log(2 + 3 * 4);', options: ['14', '20', '24', '9'], answer: 0 },
    { code: 'let a = [1, 2, 3];\nconsole.log(a.join("-"));', options: ['1-2-3', '123', '[1,2,3]', '1,2,3'], answer: 0 },
    { code: 'let x = "Hello";\nconsole.log(x.charAt(1));', options: ['H', 'e', 'l', '1'], answer: 1 },
    { code: 'let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.slice(1, 3));', options: ['[2,3]', '[1,2,3]', '[2,3,4]', '[1,2]'], answer: 0 },
    { code: 'let x = 10;\nconsole.log(++x);', options: ['10', '11', '9', 'Error'], answer: 1 },
    { code: 'let x = 10;\nconsole.log(x++);', options: ['10', '11', '9', 'Error'], answer: 0 },
    { code: 'console.log("5" - 3);', options: ['2', '53', 'NaN', 'Error'], answer: 0 },
    { code: 'console.log("5" + 3);', options: ['8', '53', 'NaN', 'Error'], answer: 1 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);

    setTimeout(() => {
      if (index === problems[currentQuestion].answer) {
        setScore(s => s + 100);
      }

      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Calculator className="w-20 h-20 mx-auto text-violet-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🚀 출력값 맞추기</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">코드를 읽고 출력 결과를 맞춰보세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>

      <div className="bg-slate-900 rounded-xl p-5 mb-6 border-2 border-violet-500/30">
        <p className="text-sm text-slate-400 mb-2">다음 코드의 출력 결과는?</p>
        <pre className="font-mono text-lg text-violet-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null
                ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 text-white'
                : selected === index
                  ? index === problem.answer
                    ? 'bg-green-500 border-green-400 text-white'
                    : 'bg-red-500 border-red-400 text-white'
                  : index === problem.answer
                    ? 'bg-green-500 border-green-400 text-white'
                    : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// 새로운 게임 2: 패턴 마스터
const PatternMasterGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const patterns = [
    // ===== 등차수열 (10개) =====
    { sequence: [2, 4, 6, 8], answer: 10, hint: '+2씩 증가' },
    { sequence: [5, 10, 15, 20], answer: 25, hint: '+5씩 증가' },
    { sequence: [100, 90, 80, 70], answer: 60, hint: '-10씩 감소' },
    { sequence: [3, 7, 11, 15], answer: 19, hint: '+4씩 증가' },
    { sequence: [50, 45, 40, 35], answer: 30, hint: '-5씩 감소' },
    { sequence: [1, 4, 7, 10], answer: 13, hint: '+3씩 증가' },
    { sequence: [20, 17, 14, 11], answer: 8, hint: '-3씩 감소' },
    { sequence: [6, 12, 18, 24], answer: 30, hint: '+6씩 증가' },
    { sequence: [99, 88, 77, 66], answer: 55, hint: '-11씩 감소' },
    { sequence: [7, 14, 21, 28], answer: 35, hint: '+7씩 증가' },
    // ===== 등비수열 (10개) =====
    { sequence: [1, 2, 4, 8], answer: 16, hint: '×2씩 증가' },
    { sequence: [3, 6, 12, 24], answer: 48, hint: '×2씩 증가' },
    { sequence: [2, 6, 18, 54], answer: 162, hint: '×3씩 증가' },
    { sequence: [5, 10, 20, 40], answer: 80, hint: '×2씩 증가' },
    { sequence: [256, 128, 64, 32], answer: 16, hint: '÷2씩 감소' },
    { sequence: [1, 3, 9, 27], answer: 81, hint: '×3씩 증가' },
    { sequence: [243, 81, 27, 9], answer: 3, hint: '÷3씩 감소' },
    { sequence: [2, 10, 50, 250], answer: 1250, hint: '×5씩 증가' },
    { sequence: [1000, 100, 10, 1], answer: 0.1, hint: '÷10씩 감소' },
    { sequence: [4, 8, 16, 32], answer: 64, hint: '×2씩 증가' },
    // ===== 피보나치/삼각수 (8개) =====
    { sequence: [1, 1, 2, 3, 5], answer: 8, hint: '피보나치 수열' },
    { sequence: [0, 1, 1, 2, 3, 5], answer: 8, hint: '피보나치' },
    { sequence: [1, 3, 6, 10], answer: 15, hint: '삼각수 (+2, +3, +4...)' },
    { sequence: [1, 3, 6, 10, 15], answer: 21, hint: '삼각수' },
    { sequence: [2, 3, 5, 8, 13], answer: 21, hint: '피보나치 변형' },
    { sequence: [1, 2, 3, 5, 8], answer: 13, hint: '피보나치 변형' },
    { sequence: [0, 1, 4, 9, 16], answer: 25, hint: '제곱수 (0², 1², 2²...)' },
    { sequence: [1, 4, 10, 20], answer: 35, hint: '사면체수' },
    // ===== 제곱/세제곱 (8개) =====
    { sequence: [1, 4, 9, 16], answer: 25, hint: '제곱수 (n²)' },
    { sequence: [1, 8, 27, 64], answer: 125, hint: '세제곱수 (n³)' },
    { sequence: [4, 9, 16, 25], answer: 36, hint: '제곱수 (2², 3²...)' },
    { sequence: [8, 27, 64, 125], answer: 216, hint: '세제곱수 (2³, 3³...)' },
    { sequence: [1, 4, 16, 64], answer: 256, hint: '4의 거듭제곱' },
    { sequence: [1, 9, 25, 49], answer: 81, hint: '홀수 제곱 (1², 3², 5²...)' },
    { sequence: [4, 16, 36, 64], answer: 100, hint: '짝수 제곱 (2², 4², 6²...)' },
    { sequence: [2, 8, 18, 32], answer: 50, hint: '2n² 패턴' },
    // ===== 기타 패턴 (9개) =====
    { sequence: [1, 2, 4, 7, 11], answer: 16, hint: '+1, +2, +3, +4...' },
    { sequence: [2, 5, 10, 17], answer: 26, hint: 'n² + 1' },
    { sequence: [0, 3, 8, 15], answer: 24, hint: 'n² - 1' },
    { sequence: [1, 2, 6, 24], answer: 120, hint: '팩토리얼 (1!, 2!, 3!, 4!)' },
    { sequence: [2, 4, 8, 14], answer: 22, hint: '+2, +4, +6, +8' },
    { sequence: [1, 3, 7, 15], answer: 31, hint: '2ⁿ - 1' },
    { sequence: [3, 5, 9, 17], answer: 33, hint: '2ⁿ + 1' },
    { sequence: [10, 11, 13, 16, 20], answer: 25, hint: '+1, +2, +3, +4, +5' },
    { sequence: [1, 5, 14, 30], answer: 55, hint: '피라미드 수' },
  ];

  const checkAnswer = () => {
    if (parseInt(userAnswer) === patterns[currentLevel].answer) {
      setScore(s => s + 100);
      if (currentLevel < patterns.length - 1) {
        setCurrentLevel(c => c + 1);
        setUserAnswer('');
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 3));
      }
    } else {
      setUserAnswer('');
    }
  };

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setCurrentLevel(0);
    setUserAnswer('');
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 완료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 3)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Lightbulb className="w-20 h-20 mx-auto text-amber-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🔮 패턴 마스터</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">규칙을 찾아 다음 숫자를 맞춰보세요!<br/>총 {patterns.length}개 패턴 도전!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  const pattern = patterns[currentLevel];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">레벨 {currentLevel + 1} / {patterns.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>

      <div className="bg-slate-900 rounded-xl p-6 mb-4 text-center border-2 border-amber-500/30">
        <p className="text-3xl font-black text-amber-400 mb-2">
          {pattern.sequence.join(', ')}, <span className="text-slate-500">?</span>
        </p>
        <p className="text-slate-400 text-sm">힌트: {pattern.hint}</p>
      </div>

      <div className="flex gap-3">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          className="flex-1 p-4 text-2xl font-bold text-center rounded-xl bg-slate-800 border-2 border-slate-600 text-white focus:border-amber-500 focus:outline-none"
          placeholder="다음 숫자는?"
          autoFocus
        />
        <Button variant="primary" onClick={checkAnswer} className="px-8 text-lg font-bold">확인</Button>
      </div>
    </div>
  );
};

// 새로운 게임 3: 코드 퍼즐
const CodePuzzleGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [order, setOrder] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const puzzles = [
    // ===== Python 기초 (10개) =====
    { lines: ['print("Hello")', 'name = "철수"', 'print(name)'], correctOrder: [1, 0, 2], description: '변수 선언 후 출력' },
    { lines: ['for i in range(3):', '    print(i)', 'print("끝")'], correctOrder: [0, 1, 2], description: '반복문 구조' },
    { lines: ['if x > 0:', '    print("양수")', 'x = 5'], correctOrder: [2, 0, 1], description: '조건문 사용' },
    { lines: ['return total', 'def sum(a, b):', '    total = a + b'], correctOrder: [1, 2, 0], description: '함수 정의' },
    { lines: ['print(result)', 'numbers = [1, 2, 3]', 'result = sum(numbers)'], correctOrder: [1, 2, 0], description: '리스트와 함수' },
    { lines: ['print(x)', 'x = 10', 'x = x * 2'], correctOrder: [1, 2, 0], description: '변수 연산' },
    { lines: ['else:', '    print("음수")', 'if x >= 0:', '    print("양수")'], correctOrder: [2, 3, 0, 1], description: 'if-else 구조' },
    { lines: ['i = i + 1', 'while i < 5:', 'i = 0', '    print(i)'], correctOrder: [2, 1, 3, 0], description: 'while 반복문' },
    { lines: ['    return a * b', 'result = multiply(3, 4)', 'def multiply(a, b):', 'print(result)'], correctOrder: [2, 0, 1, 3], description: '함수 호출' },
    { lines: ['numbers.append(4)', 'print(numbers)', 'numbers = [1, 2, 3]'], correctOrder: [2, 0, 1], description: '리스트 추가' },
    // ===== Python 중급 (8개) =====
    { lines: ['except:', '    print("에러")', 'try:', '    x = int(input())'], correctOrder: [2, 3, 0, 1], description: '예외 처리' },
    { lines: ['    self.name = name', 'dog = Dog("멍멍이")', 'class Dog:', '    def __init__(self, name):'], correctOrder: [2, 3, 0, 1], description: '클래스 정의' },
    { lines: ['f.close()', 'content = f.read()', 'f = open("file.txt")', 'print(content)'], correctOrder: [2, 1, 3, 0], description: '파일 읽기' },
    { lines: ['print(squared)', 'squared = list(map(lambda x: x**2, nums))', 'nums = [1, 2, 3, 4]'], correctOrder: [2, 1, 0], description: 'map과 lambda' },
    { lines: ['print(even)', 'even = list(filter(lambda x: x%2==0, nums))', 'nums = [1, 2, 3, 4, 5, 6]'], correctOrder: [2, 1, 0], description: 'filter 사용' },
    { lines: ['    print(item)', 'for i, item in enumerate(fruits):', 'fruits = ["사과", "바나나"]', '    print(i)'], correctOrder: [2, 1, 3, 0], description: 'enumerate 사용' },
    { lines: ['print(d["a"])', 'd["b"] = 2', 'd = {"a": 1}'], correctOrder: [2, 1, 0], description: '딕셔너리 사용' },
    { lines: ['print(s)', 's.add(4)', 's = {1, 2, 3}'], correctOrder: [2, 1, 0], description: '집합(Set) 사용' },
    // ===== JavaScript 기초 (8개) =====
    { lines: ['console.log(x)', 'x = x + 1', 'let x = 0'], correctOrder: [2, 1, 0], description: 'JS 변수' },
    { lines: ['arr.push(4)', 'let arr = [1,2,3]', 'console.log(arr)'], correctOrder: [1, 0, 2], description: '배열 조작' },
    { lines: ['console.log(sum)', 'const sum = a + b', 'const a = 5', 'const b = 3'], correctOrder: [2, 3, 1, 0], description: '상수 선언' },
    { lines: ['return a + b', '}', 'function add(a, b) {', 'console.log(add(2, 3))'], correctOrder: [2, 0, 1, 3], description: 'JS 함수' },
    { lines: ['console.log("성인")', '} else {', 'if (age >= 18) {', 'console.log("미성년자")', '}'], correctOrder: [2, 0, 1, 3, 4], description: 'JS 조건문' },
    { lines: ['console.log(i)', '}', 'for (let i = 0; i < 3; i++) {'], correctOrder: [2, 0, 1], description: 'JS for문' },
    { lines: ['console.log(arr.length)', 'arr.pop()', 'let arr = [1, 2, 3]'], correctOrder: [2, 1, 0], description: '배열 메서드' },
    { lines: ['console.log(obj.name)', 'obj.age = 20', 'const obj = {name: "김철수"}'], correctOrder: [2, 1, 0], description: '객체 조작' },
    // ===== JavaScript 중급 (6개) =====
    { lines: ['.then(data => console.log(data))', 'fetch(url)', 'const url = "https://api.com"'], correctOrder: [2, 1, 0], description: 'fetch API' },
    { lines: ['console.log(doubled)', 'const doubled = nums.map(x => x * 2)', 'const nums = [1, 2, 3]'], correctOrder: [2, 1, 0], description: 'map 메서드' },
    { lines: ['console.log(filtered)', 'const filtered = arr.filter(x => x > 2)', 'const arr = [1, 2, 3, 4]'], correctOrder: [2, 1, 0], description: 'filter 메서드' },
    { lines: ['console.log(name, age)', 'const {name, age} = person', 'const person = {name: "철수", age: 15}'], correctOrder: [2, 1, 0], description: '구조분해 할당' },
    { lines: ['console.log(merged)', 'const merged = [...arr1, ...arr2]', 'const arr1 = [1, 2]', 'const arr2 = [3, 4]'], correctOrder: [2, 3, 1, 0], description: '스프레드 연산자' },
    { lines: ['console.log(result)', '};', 'const add = (a, b) => {', '    return a + b', 'const result = add(2, 3)'], correctOrder: [2, 3, 1, 4, 0], description: '화살표 함수' },
    // ===== HTML/CSS (8개) =====
    { lines: ['</html>', '<html>', '<body>Hello</body>'], correctOrder: [1, 2, 0], description: 'HTML 구조' },
    { lines: ['</head>', '<head>', '<title>페이지</title>', '<html>'], correctOrder: [3, 1, 2, 0], description: 'head 태그' },
    { lines: ['</ul>', '<li>항목2</li>', '<ul>', '<li>항목1</li>'], correctOrder: [2, 3, 1, 0], description: '목록 구조' },
    { lines: ['</table>', '<td>셀</td>', '<table>', '<tr>'], correctOrder: [2, 3, 1, 0], description: '테이블 구조' },
    { lines: ['</form>', '<button>전송</button>', '<form>', '<input type="text">'], correctOrder: [2, 3, 1, 0], description: '폼 구조' },
    { lines: ['}', 'color: red;', '.title {', 'font-size: 20px;'], correctOrder: [2, 1, 3, 0], description: 'CSS 규칙' },
    { lines: ['}', 'display: flex;', '#container {', 'justify-content: center;'], correctOrder: [2, 1, 3, 0], description: 'Flexbox' },
    { lines: ['</style>', 'p { color: blue; }', '<style>'], correctOrder: [2, 1, 0], description: '스타일 태그' },
  ];

  const initLevel = () => {
    const shuffled = [...Array(puzzles[currentLevel].lines.length).keys()].sort(() => Math.random() - 0.5);
    setOrder(shuffled);
  };

  useEffect(() => {
    if (started) initLevel();
  }, [started, currentLevel]);

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...order];
    [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
    setOrder(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === order.length - 1) return;
    const newOrder = [...order];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    setOrder(newOrder);
  };

  const checkAnswer = () => {
    const puzzle = puzzles[currentLevel];
    const isCorrect = order.every((o, i) => o === puzzle.correctOrder[i]);

    if (isCorrect) {
      setScore(s => s + 150);
      if (currentLevel < puzzles.length - 1) {
        setCurrentLevel(c => c + 1);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 4));
      }
    }
  };

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setCurrentLevel(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 완료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 4)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Puzzle className="w-20 h-20 mx-auto text-teal-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🧩 코드 퍼즐</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">코드 줄을 올바른 순서로 배열하세요!<br/>총 {puzzles.length}개 퍼즐 도전!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  const puzzle = puzzles[currentLevel];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-lg font-bold text-slate-300">퍼즐 {currentLevel + 1} / {puzzles.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>

      <p className="text-center text-lg font-semibold text-teal-400 mb-4">📋 {puzzle.description}</p>

      <div className="space-y-2 mb-6">
        {order.map((lineIndex, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              <button onClick={() => moveUp(i)} className="p-1 bg-slate-700 rounded hover:bg-slate-600 text-white">▲</button>
              <button onClick={() => moveDown(i)} className="p-1 bg-slate-700 rounded hover:bg-slate-600 text-white">▼</button>
            </div>
            <div className="flex-1 p-4 bg-slate-800 rounded-xl font-mono text-lg text-teal-400 border-2 border-slate-600">
              {puzzle.lines[lineIndex]}
            </div>
          </div>
        ))}
      </div>

      <Button variant="primary" onClick={checkAnswer} className="w-full text-lg font-bold py-4">
        정답 확인
      </Button>
    </div>
  );
};

// 새로운 게임 4: 바이너리 디코더
const BinaryDecoderGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const generateProblem = () => {
    const num = Math.floor(Math.random() * 32) + 1;
    setBinary(num.toString(2));
    setDecimal(num);
    setUserAnswer('');
  };

  useEffect(() => {
    if (started && timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && started) {
      setIsFinished(true);
      addExp(Math.floor(score / 2));
    }
  }, [started, timer, score, addExp]);

  const checkAnswer = () => {
    if (parseInt(userAnswer) === decimal) {
      setScore(s => s + 50);
      generateProblem();
    }
  };

  const startGame = () => {
    setStarted(true);
    setScore(0);
    setTimer(60);
    setIsFinished(false);
    generateProblem();
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">🎉 게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 2)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose} className="text-lg font-bold px-6 py-3">나가기</Button>
          <Button variant="primary" onClick={startGame} className="text-lg font-bold px-6 py-3">다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Binary className="w-20 h-20 mx-auto text-slate-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">💻 바이너리 디코더</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">이진수를 십진수로 변환하세요!<br/>60초 안에 최대한 많이 맞춰보세요!</p>
        <div className="bg-slate-800 p-4 rounded-xl mb-6 text-left max-w-xs mx-auto">
          <p className="text-sm text-slate-400 mb-2">💡 이진수 계산법:</p>
          <p className="text-sm text-slate-300 font-mono">1010 = 8+0+2+0 = 10</p>
          <p className="text-sm text-slate-300 font-mono">1100 = 8+4+0+0 = 12</p>
        </div>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />} className="text-lg font-bold px-8 py-3">
          시작하기
        </Button>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Timer className="w-6 h-6 text-red-400" />
          <span className="text-2xl font-black text-white">{timer}초</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-400" />
          <span className="text-2xl font-black text-white">{score}점</span>
        </div>
      </div>

      <div className="bg-slate-900 rounded-xl p-8 mb-4 text-center border-2 border-slate-500/30">
        <p className="text-sm text-slate-400 mb-2">이진수 (Binary)</p>
        <p className="text-5xl font-black text-slate-200 font-mono tracking-widest">{binary}</p>
      </div>

      <p className="text-center text-lg font-semibold text-slate-300 mb-4">👆 이 이진수는 십진수로 얼마일까요?</p>

      <div className="flex gap-3">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
          className="flex-1 p-4 text-2xl font-bold text-center rounded-xl bg-slate-800 border-2 border-slate-600 text-white focus:border-slate-400 focus:outline-none"
          placeholder="십진수 입력"
          autoFocus
        />
        <Button variant="primary" onClick={checkAnswer} className="px-8 text-lg font-bold">확인</Button>
      </div>
    </div>
  );
};

// ===== 새 게임 1: 변수 마스터 =====
const VariableMasterGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = variableMasterProblems; // 100 problems
  const _oldProblems = [
    { code: 'x = 5\ny = x\nx = 10\nprint(y)', options: ['5', '10', '15', 'Error'], answer: 0 },
    { code: 'a = 1\nb = 2\na, b = b, a\nprint(a)', options: ['1', '2', '3', 'Error'], answer: 1 },
    { code: 'x = [1,2]\ny = x\ny.append(3)\nprint(len(x))', options: ['2', '3', '1', 'Error'], answer: 1 },
    { code: 'x = 5\ndef f():\n  x = 10\nf()\nprint(x)', options: ['5', '10', '15', 'Error'], answer: 0 },
    { code: 'x = 1\nx += 2\nx *= 3\nprint(x)', options: ['6', '9', '7', '3'], answer: 1 },
    { code: 'a = b = c = 5\nc = 10\nprint(a + b)', options: ['10', '15', '20', '5'], answer: 0 },
    { code: 'x = "hello"\ny = x.upper()\nprint(x)', options: ['hello', 'HELLO', 'Hello', 'Error'], answer: 0 },
    { code: 'nums = [1, 2, 3]\nx = nums[0]\nnums[0] = 10\nprint(x)', options: ['1', '10', '0', 'Error'], answer: 0 },
    { code: 'x = 10\ny = x // 3\nz = x % 3\nprint(y + z)', options: ['4', '3', '5', '10'], answer: 0 },
    { code: 'a = "ab"\nb = a * 2\nprint(len(b))', options: ['2', '4', '6', '8'], answer: 1 },
    { code: 's = "python"\ns = s[:2] + s[4:]\nprint(s)', options: ['pyon', 'pyn', 'python', 'py'], answer: 0 },
    { code: 'x = 5\ny = 3\nz = x if x > y else y\nprint(z)', options: ['5', '3', 'True', '8'], answer: 0 },
    { code: 'a = [1]\nb = a.copy()\na.append(2)\nprint(len(b))', options: ['1', '2', '3', '0'], answer: 0 },
    { code: 'x = 0\nfor i in [1,2,3]:\n  x = i\nprint(x)', options: ['0', '1', '3', '6'], answer: 2 },
    { code: 'x = 10\nwhile x > 0:\n  x -= 3\nprint(x)', options: ['-2', '0', '1', '10'], answer: 0 },
    { code: 'd = {"a":1}\nd["b"] = 2\nprint(len(d))', options: ['1', '2', '3', 'Error'], answer: 1 },
    { code: 'x = None\nif x:\n  y = 1\nelse:\n  y = 2\nprint(y)', options: ['1', '2', 'None', 'Error'], answer: 1 },
    { code: 'x = [1,2,3]\ny = x[::-1]\nprint(y[0])', options: ['1', '2', '3', '-1'], answer: 2 },
    { code: 'a = 5\nb = a\na = a + 1\nprint(b)', options: ['5', '6', '11', 'Error'], answer: 0 },
    { code: 'x = "abc"\nprint(x[-1] + x[0])', options: ['ca', 'ac', 'cb', 'ab'], answer: 0 },
    { code: 'let x = 5;\nlet y = x;\nx = 10;\nconsole.log(y);', options: ['5', '10', '15', 'Error'], answer: 0 },
    { code: 'let a = [1,2];\nlet b = [...a];\na.push(3);\nconsole.log(b.length);', options: ['2', '3', '1', 'Error'], answer: 0 },
    { code: 'let x = 1;\nx += 2;\nx *= 3;\nconsole.log(x);', options: ['6', '9', '7', '3'], answer: 1 },
    { code: 'const x = 5;\n// x = 10;\nconsole.log(x);', options: ['5', '10', '15', 'Error'], answer: 0 },
    { code: 'let obj = {a:1};\nlet copy = {...obj};\nobj.a = 2;\nconsole.log(copy.a);', options: ['1', '2', 'undefined', 'Error'], answer: 0 },
    { code: 'let x = "hello";\nlet y = x.toUpperCase();\nconsole.log(x);', options: ['hello', 'HELLO', 'Hello', 'Error'], answer: 0 },
    { code: 'let a = 5;\nlet b = ++a;\nconsole.log(a + b);', options: ['10', '11', '12', '6'], answer: 2 },
    { code: 'let x = 5;\nlet y = x++;\nconsole.log(x + y);', options: ['10', '11', '12', '6'], answer: 1 },
    { code: 'let arr = [1,2,3];\nlet [a,b] = arr;\nconsole.log(a+b);', options: ['3', '6', '12', 'Error'], answer: 0 },
    { code: 'let {x, y} = {x:1, y:2};\nconsole.log(x + y);', options: ['3', '12', 'undefined', 'Error'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Code className="w-20 h-20 mx-auto text-indigo-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">📦 변수 마스터</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">변수의 값 변화를 추적하세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-6 border-2 border-indigo-500/30">
        <p className="text-sm text-slate-400 mb-2">변수의 최종 값은?</p>
        <pre className="font-mono text-lg text-indigo-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 2: 반복문 카운터 =====
const LoopCounterGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = loopCounterProblems; // 100 problems
  const _oldProblems2 = [
    { code: 'count = 0\nfor i in range(5):\n  count += 1\nprint(count)', options: ['4', '5', '6', '0'], answer: 1 },
    { code: 'x = 0\nfor i in range(3):\n  for j in range(2):\n    x += 1\nprint(x)', options: ['5', '6', '8', '3'], answer: 1 },
    { code: 'n = 10\nwhile n > 0:\n  n -= 3\nprint(n)', options: ['-2', '0', '1', '-1'], answer: 0 },
    { code: 'sum = 0\nfor i in range(1, 5):\n  sum += i\nprint(sum)', options: ['10', '15', '6', '4'], answer: 0 },
    { code: 'x = 1\nfor i in range(4):\n  x *= 2\nprint(x)', options: ['8', '16', '32', '4'], answer: 1 },
    { code: 'c = 0\nfor i in range(10):\n  if i % 2 == 0:\n    c += 1\nprint(c)', options: ['4', '5', '6', '10'], answer: 1 },
    { code: 'x = 0\ni = 1\nwhile i <= 5:\n  x += i\n  i += 1\nprint(x)', options: ['10', '15', '21', '5'], answer: 1 },
    { code: 'n = 0\nfor i in range(3):\n  for j in range(3):\n    n += i + j\nprint(n)', options: ['18', '27', '9', '6'], answer: 0 },
    { code: 'x = 100\nwhile x > 10:\n  x //= 2\nprint(x)', options: ['6', '12', '3', '50'], answer: 0 },
    { code: 'count = 0\nfor c in "hello":\n  count += 1\nprint(count)', options: ['4', '5', '6', 'hello'], answer: 1 },
    { code: 'x = 0\nfor i in range(5):\n  if i == 3:\n    break\n  x += i\nprint(x)', options: ['3', '6', '10', '0'], answer: 0 },
    { code: 'x = 0\nfor i in range(5):\n  if i == 2:\n    continue\n  x += i\nprint(x)', options: ['8', '10', '7', '6'], answer: 0 },
    { code: 'nums = [2,4,6]\ntotal = 0\nfor n in nums:\n  total += n // 2\nprint(total)', options: ['6', '12', '3', '4'], answer: 0 },
    { code: 'x = 1\nfor _ in range(5):\n  x = x * 3 - 1\nprint(x)', options: ['122', '81', '62', '80'], answer: 0 },
    { code: 'a = []\nfor i in range(4):\n  a.append(i * i)\nprint(sum(a))', options: ['14', '16', '30', '9'], answer: 0 },
    { code: 'let x = 0;\nfor(let i=0; i<5; i++) x += i;\nconsole.log(x);', options: ['10', '15', '5', '4'], answer: 0 },
    { code: 'let c = 0;\nfor(let i=0; i<3; i++){\n  for(let j=0; j<3; j++) c++;\n}\nconsole.log(c);', options: ['6', '9', '3', '12'], answer: 1 },
    { code: 'let n = 1;\nwhile(n < 100) n *= 2;\nconsole.log(n);', options: ['64', '128', '256', '100'], answer: 1 },
    { code: 'let sum = 0;\nfor(let i=1; i<=10; i+=2) sum += i;\nconsole.log(sum);', options: ['25', '30', '55', '15'], answer: 0 },
    { code: 'let x = 10;\ndo { x--; } while(x > 5);\nconsole.log(x);', options: ['5', '4', '6', '0'], answer: 0 },
    { code: '[1,2,3].forEach(n => x += n);\nlet x = 0; console.log(x);', options: ['Error', '6', '0', '123'], answer: 0 },
    { code: 'let arr = [1,2,3,4,5];\nlet s = arr.reduce((a,b) => a+b, 0);\nconsole.log(s);', options: ['15', '10', '120', '5'], answer: 0 },
    { code: 'let a = [1,2,3];\nlet b = a.map(x => x*2);\nconsole.log(b.reduce((x,y)=>x+y));', options: ['12', '6', '18', '8'], answer: 0 },
    { code: 'let c = 0;\n[1,2,3,4,5].filter(x => x%2===0).forEach(_ => c++);\nconsole.log(c);', options: ['2', '3', '5', '4'], answer: 0 },
    { code: 'let x = 0;\nfor(let i of [1,2,3]) x += i*i;\nconsole.log(x);', options: ['14', '6', '9', '36'], answer: 0 },
    { code: 'let n = 0;\nfor(let key in {a:1,b:2,c:3}) n++;\nconsole.log(n);', options: ['3', '6', '0', 'Error'], answer: 0 },
    { code: 'let x = 5;\nwhile(x-- > 0) {}\nconsole.log(x);', options: ['-1', '0', '1', '4'], answer: 0 },
    { code: 'let i = 0, sum = 0;\nwhile(++i <= 5) sum += i;\nconsole.log(sum);', options: ['15', '10', '21', '5'], answer: 0 },
    { code: 'let arr = [];\nfor(let i=0; i<3; i++) arr.push(arr.length);\nconsole.log(arr);', options: ['[0,1,2]', '[1,2,3]', '[0,0,0]', '[3,3,3]'], answer: 0 },
    { code: 'let x = 0;\nouter: for(let i=0; i<3; i++){\n  for(let j=0; j<3; j++){\n    if(j===1) break outer;\n    x++;\n  }\n}\nconsole.log(x);', options: ['1', '3', '6', '9'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Shuffle className="w-20 h-20 mx-auto text-green-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🔄 반복문 카운터</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">반복문 실행 결과를 맞춰보세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-6 border-2 border-green-500/30">
        <p className="text-sm text-slate-400 mb-2">반복문 실행 후 출력 결과는?</p>
        <pre className="font-mono text-lg text-green-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 3: 디버그 챌린지 =====
const DebugChallengeGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = debugChallengeProblems; // 100 problems
  const _oldProblems3 = [
    { code: 'pritn("Hello")', error: 'NameError', options: ['오타 (pritn → print)', '따옴표 오류', '괄호 오류', '들여쓰기 오류'], answer: 0 },
    { code: 'for i in range(5)\n  print(i)', error: 'SyntaxError', options: ['콜론(:) 누락', '괄호 오류', '들여쓰기 오류', 'range 오류'], answer: 0 },
    { code: 'x = 10\nif x > 5\n  print("big")', error: 'SyntaxError', options: ['콜론(:) 누락', '비교 연산자 오류', '괄호 오류', '변수명 오류'], answer: 0 },
    { code: 'def greet(name)\n  print("Hello " + name)', error: 'SyntaxError', options: ['콜론(:) 누락', '함수명 오류', '인자 오류', 'return 누락'], answer: 0 },
    { code: 'nums = [1, 2, 3]\nprint(nums[3])', error: 'IndexError', options: ['인덱스 범위 초과', '리스트 형식 오류', '대괄호 오류', 'print 오류'], answer: 0 },
    { code: 'x = "5"\ny = x + 3', error: 'TypeError', options: ['문자열과 숫자 연산 불가', '변수명 오류', '대입 연산 오류', '괄호 오류'], answer: 0 },
    { code: 'my dict = {"a": 1}', error: 'SyntaxError', options: ['변수명에 공백 불가', '딕셔너리 형식 오류', '콜론 오류', '따옴표 오류'], answer: 0 },
    { code: 'x = 10 / 0', error: 'ZeroDivisionError', options: ['0으로 나눌 수 없음', '연산자 오류', '타입 오류', '변수 오류'], answer: 0 },
    { code: 'print(hello)', error: 'NameError', options: ['정의되지 않은 변수', '따옴표 누락', '괄호 오류', 'print 오류'], answer: 0 },
    { code: 'def add(a, b):\nreturn a + b', error: 'IndentationError', options: ['들여쓰기 오류', '콜론 누락', 'return 오류', '함수 정의 오류'], answer: 0 },
    { code: 'consol.log("Hi")', error: 'ReferenceError', options: ['오타 (consol → console)', '따옴표 오류', '괄호 오류', '세미콜론 누락'], answer: 0 },
    { code: 'let x = 5\nif (x > 3 {\n  console.log(x);\n}', error: 'SyntaxError', options: ['괄호 닫힘 누락', '중괄호 오류', '세미콜론 누락', '비교 연산 오류'], answer: 0 },
    { code: 'const arr = [1,2,3];\narr = [4,5,6];', error: 'TypeError', options: ['const 재할당 불가', '배열 형식 오류', '변수명 오류', '세미콜론 오류'], answer: 0 },
    { code: 'function test(\n  console.log("test");\n}', error: 'SyntaxError', options: ['괄호 닫힘 누락', '함수명 오류', '중괄호 오류', 'function 키워드 오류'], answer: 0 },
    { code: 'let obj = {name: "Kim" age: 20};', error: 'SyntaxError', options: ['쉼표(,) 누락', '콜론 오류', '중괄호 오류', '따옴표 오류'], answer: 0 },
    { code: 'let x = 5;\nlet x = 10;', error: 'SyntaxError', options: ['변수 중복 선언', '대입 오류', '세미콜론 오류', '타입 오류'], answer: 0 },
    { code: 'for (let i = 0 i < 5; i++) {}', error: 'SyntaxError', options: ['세미콜론(;) 누락', '비교 연산 오류', '중괄호 오류', '증감 연산 오류'], answer: 0 },
    { code: 'let arr = [1,2,3];\nconsole.log(arr[5]);', error: 'undefined', options: ['인덱스 범위 초과', '배열 형식 오류', '대괄호 오류', 'console 오류'], answer: 0 },
    { code: 'let x;\nconsole.log(x.length);', error: 'TypeError', options: ['undefined의 속성 접근', '변수 선언 오류', 'length 오류', 'console 오류'], answer: 0 },
    { code: 'JSON.parse("invalid json")', error: 'SyntaxError', options: ['잘못된 JSON 형식', '메서드명 오류', '따옴표 오류', '괄호 오류'], answer: 0 },
    { code: 'let f = () => {\n  return\n  x + y;\n};', error: 'unexpected', options: ['return 후 자동 세미콜론', '화살표 함수 오류', '중괄호 오류', '변수 오류'], answer: 0 },
    { code: 'while True:\n  print("loop")', error: 'SyntaxError', options: ['True → true (소문자)', '콜론 누락', '들여쓰기 오류', 'while 오류'], answer: 0 },
    { code: '"Hello".push("!")', error: 'TypeError', options: ['문자열에 push 불가', '메서드명 오류', '따옴표 오류', '괄호 오류'], answer: 0 },
    { code: 'import math\nprint(math.sqr(4))', error: 'AttributeError', options: ['sqr → sqrt (오타)', 'import 오류', 'print 오류', '괄호 오류'], answer: 0 },
    { code: 'x = [1,2,3]\nx.add(4)', error: 'AttributeError', options: ['add → append (리스트 메서드)', '리스트 형식 오류', '괄호 오류', '대입 오류'], answer: 0 },
    { code: 'x = {"a": 1}\nprint(x.a)', error: 'AttributeError', options: ['딕셔너리는 .접근 불가', '딕셔너리 형식 오류', 'print 오류', '따옴표 오류'], answer: 0 },
    { code: 'class Dog\n  def bark(self):\n    print("Woof")', error: 'SyntaxError', options: ['class 뒤 콜론 누락', 'class 키워드 오류', '들여쓰기 오류', 'def 오류'], answer: 0 },
    { code: 'try:\n  x = 1/0\nexcept:\nprint("error")', error: 'IndentationError', options: ['들여쓰기 오류', 'try 오류', 'except 오류', 'print 오류'], answer: 0 },
    { code: 'async function test() {\n  let x = await 5;\n}', error: 'unexpected', options: ['await는 Promise만 가능', 'async 오류', 'function 오류', '변수 오류'], answer: 0 },
    { code: 'const [a, b] = 5;', error: 'TypeError', options: ['숫자는 구조분해 불가', 'const 오류', '대괄호 오류', '대입 오류'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Bug className="w-20 h-20 mx-auto text-rose-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🔍 디버그 챌린지</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">에러의 원인을 찾아보세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-4 border-2 border-rose-500/30">
        <pre className="font-mono text-lg text-rose-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <p className="text-center text-slate-300 mb-4 font-semibold">이 코드의 문제점은?</p>
      <div className="grid grid-cols-1 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-left font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 4: 자료형 퀴즈 =====
const DataTypeQuizGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = dataTypeQuizProblems; // 100 problems
  const _oldProblems4 = [
    { value: '42', options: ['int', 'str', 'float', 'bool'], answer: 0 },
    { value: '"Hello"', options: ['int', 'str', 'list', 'tuple'], answer: 1 },
    { value: '3.14', options: ['int', 'str', 'float', 'bool'], answer: 2 },
    { value: 'True', options: ['int', 'str', 'float', 'bool'], answer: 3 },
    { value: '[1, 2, 3]', options: ['tuple', 'str', 'list', 'dict'], answer: 2 },
    { value: '(1, 2, 3)', options: ['list', 'str', 'tuple', 'set'], answer: 2 },
    { value: '{"a": 1}', options: ['list', 'dict', 'tuple', 'set'], answer: 1 },
    { value: '{1, 2, 3}', options: ['list', 'dict', 'tuple', 'set'], answer: 3 },
    { value: 'None', options: ['int', 'str', 'NoneType', 'bool'], answer: 2 },
    { value: '0', options: ['int', 'bool', 'str', 'float'], answer: 0 },
    { value: '""', options: ['None', 'bool', 'str', 'int'], answer: 2 },
    { value: '[]', options: ['tuple', 'list', 'dict', 'set'], answer: 1 },
    { value: '1 + 2j', options: ['int', 'float', 'complex', 'str'], answer: 2 },
    { value: 'b"hello"', options: ['str', 'bytes', 'list', 'tuple'], answer: 1 },
    { value: 'range(5)', options: ['list', 'range', 'tuple', 'int'], answer: 1 },
    { value: 'type(lambda x: x)', options: ['function', 'lambda', 'method', 'object'], answer: 0 },
    { value: '5 (JS)', options: ['number', 'int', 'float', 'string'], answer: 0 },
    { value: '"5" (JS)', options: ['number', 'int', 'string', 'char'], answer: 2 },
    { value: 'null (JS)', options: ['undefined', 'null', 'object', 'NaN'], answer: 2 },
    { value: 'undefined (JS)', options: ['null', 'undefined', 'object', 'NaN'], answer: 1 },
    { value: 'NaN (JS)', options: ['null', 'undefined', 'number', 'NaN'], answer: 2 },
    { value: '[1,2,3] (JS)', options: ['array', 'object', 'list', 'tuple'], answer: 1 },
    { value: '{} (JS)', options: ['array', 'object', 'dict', 'null'], answer: 1 },
    { value: 'Symbol() (JS)', options: ['string', 'symbol', 'object', 'undefined'], answer: 1 },
    { value: 'BigInt(9999) (JS)', options: ['number', 'bigint', 'int', 'object'], answer: 1 },
    { value: 'function(){} (JS)', options: ['function', 'object', 'method', 'undefined'], answer: 0 },
    { value: 'new Date() (JS)', options: ['date', 'string', 'object', 'number'], answer: 2 },
    { value: '/regex/ (JS)', options: ['string', 'object', 'regex', 'pattern'], answer: 1 },
    { value: 'true (JS)', options: ['boolean', 'int', 'string', '1'], answer: 0 },
    { value: 'Infinity (JS)', options: ['infinity', 'number', 'undefined', 'NaN'], answer: 1 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Target className="w-20 h-20 mx-auto text-sky-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🏷️ 자료형 퀴즈</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">값의 자료형(타입)을 맞춰보세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-8 mb-6 text-center border-2 border-sky-500/30">
        <p className="text-sm text-slate-400 mb-2">이 값의 자료형은?</p>
        <p className="text-4xl font-black text-sky-300 font-mono">{problem.code}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 5: 논리 게이트 =====
const LogicGateGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = logicGateProblems; // 100 problems
  const _oldProblems5 = [
    { expr: 'True AND True', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'True AND False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'False AND False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'True OR False', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'False OR False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'NOT True', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'NOT False', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'True AND NOT False', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'NOT True OR False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: '(True OR False) AND True', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'NOT (True AND False)', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'NOT (True OR False)', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'True XOR True', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: 'True XOR False', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'False XOR False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: '1 AND 1', options: ['1', '0', 'True', 'Error'], answer: 0 },
    { expr: '1 AND 0', options: ['1', '0', 'True', 'Error'], answer: 1 },
    { expr: '1 OR 0', options: ['1', '0', 'True', 'Error'], answer: 0 },
    { expr: '0 OR 0', options: ['1', '0', 'True', 'Error'], answer: 1 },
    { expr: 'NOT 1', options: ['1', '0', '-1', 'Error'], answer: 1 },
    { expr: '5 > 3 AND 2 < 4', options: ['True', 'False', '1', '0'], answer: 0 },
    { expr: '5 > 3 AND 2 > 4', options: ['True', 'False', '1', '0'], answer: 1 },
    { expr: '5 < 3 OR 2 < 4', options: ['True', 'False', '1', '0'], answer: 0 },
    { expr: 'NOT (5 == 5)', options: ['True', 'False', '5', 'Error'], answer: 1 },
    { expr: '(3 > 2) AND (4 > 3) AND (5 > 4)', options: ['True', 'False', '3', 'Error'], answer: 0 },
    { expr: '(1 == 1) OR (2 == 3)', options: ['True', 'False', '1', 'Error'], answer: 0 },
    { expr: 'NOT (1 != 1)', options: ['True', 'False', '0', 'Error'], answer: 0 },
    { expr: '(True AND False) OR (True AND True)', options: ['True', 'False', 'None', 'Error'], answer: 0 },
    { expr: 'NOT True AND NOT False', options: ['True', 'False', 'None', 'Error'], answer: 1 },
    { expr: '(NOT True) OR (NOT False)', options: ['True', 'False', 'None', 'Error'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Zap className="w-20 h-20 mx-auto text-orange-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">⚡ 논리 게이트</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">AND, OR, NOT 연산 결과를 맞춰보세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-8 mb-6 text-center border-2 border-orange-500/30">
        <p className="text-sm text-slate-400 mb-2">이 논리 연산의 결과는?</p>
        <p className="text-3xl font-black text-orange-300 font-mono">{problem.code}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 6: 배열 퀘스트 =====
const ArrayQuestGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = arrayQuestProblems; // 100 problems
  const _oldProblems6 = [
    { code: 'arr = [10, 20, 30, 40, 50]\nprint(arr[2])', options: ['20', '30', '40', '10'], answer: 1 },
    { code: 'arr = [1, 2, 3, 4, 5]\nprint(arr[-1])', options: ['1', '4', '5', '-1'], answer: 2 },
    { code: 'arr = [1, 2, 3]\narr.append(4)\nprint(arr)', options: ['[1,2,3,4]', '[4,1,2,3]', '[1,2,3]', '4'], answer: 0 },
    { code: 'arr = [1, 2, 3, 4, 5]\nprint(arr[1:4])', options: ['[2,3,4]', '[1,2,3,4]', '[2,3,4,5]', '[1,2,3]'], answer: 0 },
    { code: 'arr = [1, 2, 3]\narr.insert(1, 10)\nprint(arr)', options: ['[1,10,2,3]', '[10,1,2,3]', '[1,2,10,3]', '[1,2,3,10]'], answer: 0 },
    { code: 'arr = [3, 1, 4, 1, 5]\nprint(arr.count(1))', options: ['1', '2', '3', '0'], answer: 1 },
    { code: 'arr = [5, 2, 8, 1, 9]\narr.sort()\nprint(arr[0])', options: ['5', '1', '9', '2'], answer: 1 },
    { code: 'arr = [1, 2, 3]\narr.reverse()\nprint(arr)', options: ['[3,2,1]', '[1,2,3]', '[1,3,2]', '[2,1,3]'], answer: 0 },
    { code: 'arr = [1, 2, 3, 4, 5]\nprint(arr[::2])', options: ['[1,3,5]', '[2,4]', '[1,2,3]', '[5,3,1]'], answer: 0 },
    { code: 'arr = [1, 2, 3]\narr.pop()\nprint(arr)', options: ['[1,2]', '[2,3]', '[1,2,3]', '3'], answer: 0 },
    { code: 'arr = [1, 2, 3, 4]\narr.remove(2)\nprint(arr)', options: ['[1,3,4]', '[1,2,4]', '[1,2,3]', '[2,3,4]'], answer: 0 },
    { code: 'arr = [1, 2, 3]\nprint(sum(arr))', options: ['6', '123', '3', '[1,2,3]'], answer: 0 },
    { code: 'arr = [5, 2, 8, 1]\nprint(max(arr))', options: ['8', '5', '16', '1'], answer: 0 },
    { code: 'arr = [1, 2] + [3, 4]\nprint(arr)', options: ['[1,2,3,4]', '[4,6]', '10', '[1,2][3,4]'], answer: 0 },
    { code: 'arr = [1, 2, 3]\nprint(arr * 2)', options: ['[1,2,3,1,2,3]', '[2,4,6]', '6', '[1,2,3]*2'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.length);', options: ['3', '2', '6', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);', options: ['[1,2,3,4]', '[4,1,2,3]', '4', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.pop());', options: ['3', '[1,2]', '1', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\narr.shift();\nconsole.log(arr);', options: ['[2,3]', '[1,2]', '1', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\narr.unshift(0);\nconsole.log(arr);', options: ['[0,1,2,3]', '[1,2,3,0]', '0', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.slice(1, 3));', options: ['[2,3]', '[1,2,3]', '[2,3,4]', '[1,2]'], answer: 0 },
    { code: 'let arr = [3, 1, 2];\narr.sort();\nconsole.log(arr);', options: ['[1,2,3]', '[3,2,1]', '[3,1,2]', '[2,1,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\narr.reverse();\nconsole.log(arr);', options: ['[3,2,1]', '[1,2,3]', '[1,3,2]', '[2,1,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.join("-"));', options: ['1-2-3', '123', '[1,2,3]', '1,2,3'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.indexOf(2));', options: ['1', '2', '0', '-1'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.includes(2));', options: ['true', 'false', '1', '2'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.map(x => x*2));', options: ['[2,4,6]', '[1,2,3]', '12', '[1,4,9]'], answer: 0 },
    { code: 'let arr = [1, 2, 3, 4];\nconsole.log(arr.filter(x => x>2));', options: ['[3,4]', '[1,2]', '[2,3,4]', '[1,2,3,4]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log(arr.reduce((a,b) => a+b));', options: ['6', '123', '3', '[1,2,3]'], answer: 0 },
    { code: 'let arr = [1, 2, 3];\nconsole.log([...arr, 4]);', options: ['[1,2,3,4]', '[4,1,2,3]', '[1,2,3]', 'Error'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Target className="w-20 h-20 mx-auto text-fuchsia-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">📊 배열 퀘스트</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">배열 인덱스와 메서드를 마스터하세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-6 border-2 border-fuchsia-500/30">
        <p className="text-sm text-slate-400 mb-2">출력 결과는?</p>
        <pre className="font-mono text-lg text-fuchsia-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 7: 함수 빌더 =====
const FunctionBuilderGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = functionBuilderProblems; // 100 problems
  const _oldProblems7 = [
    { code: 'def add(a, b):\n  return a + b\nprint(add(3, 5))', options: ['8', '35', '15', 'Error'], answer: 0 },
    { code: 'def greet(name):\n  return "Hello, " + name\nprint(greet("Kim"))', options: ['Hello, Kim', 'Kim', 'Hello', 'Error'], answer: 0 },
    { code: 'def square(n):\n  return n * n\nprint(square(4))', options: ['16', '8', '4', '44'], answer: 0 },
    { code: 'def double(x):\n  return x * 2\nprint(double(double(3)))', options: ['12', '6', '9', '18'], answer: 0 },
    { code: 'def is_even(n):\n  return n % 2 == 0\nprint(is_even(7))', options: ['False', 'True', '0', '1'], answer: 0 },
    { code: 'def max_of_three(a, b, c):\n  return max(a, b, c)\nprint(max_of_three(3, 7, 5))', options: ['7', '5', '3', '15'], answer: 0 },
    { code: 'def factorial(n):\n  if n <= 1: return 1\n  return n * factorial(n-1)\nprint(factorial(4))', options: ['24', '4', '16', '10'], answer: 0 },
    { code: 'def count_vowels(s):\n  return sum(1 for c in s if c in "aeiou")\nprint(count_vowels("hello"))', options: ['2', '3', '5', '1'], answer: 0 },
    { code: 'def power(base, exp=2):\n  return base ** exp\nprint(power(3))', options: ['9', '6', '3', '8'], answer: 0 },
    { code: 'def swap(a, b):\n  return b, a\nx, y = swap(1, 2)\nprint(x)', options: ['2', '1', '(2,1)', '(1,2)'], answer: 0 },
    { code: 'def sum_list(lst):\n  return sum(lst)\nprint(sum_list([1, 2, 3, 4]))', options: ['10', '24', '4', '1234'], answer: 0 },
    { code: 'def first_last(s):\n  return s[0] + s[-1]\nprint(first_last("python"))', options: ['pn', 'py', 'on', 'pp'], answer: 0 },
    { code: 'def reverse_str(s):\n  return s[::-1]\nprint(reverse_str("abc"))', options: ['cba', 'abc', 'bca', 'acb'], answer: 0 },
    { code: 'def is_palindrome(s):\n  return s == s[::-1]\nprint(is_palindrome("aba"))', options: ['True', 'False', 'aba', 'Error'], answer: 0 },
    { code: 'def multiply(*args):\n  result = 1\n  for n in args: result *= n\n  return result\nprint(multiply(2, 3, 4))', options: ['24', '9', '234', 'Error'], answer: 0 },
    { code: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 5));', options: ['8', '35', '15', 'Error'], answer: 0 },
    { code: 'const double = x => x * 2;\nconsole.log(double(5));', options: ['10', '5', '25', 'Error'], answer: 0 },
    { code: 'function greet(name = "Guest") {\n  return "Hello, " + name;\n}\nconsole.log(greet());', options: ['Hello, Guest', 'Hello, undefined', 'Hello, ', 'Error'], answer: 0 },
    { code: 'const square = n => n ** 2;\nconsole.log(square(4));', options: ['16', '8', '4', '44'], answer: 0 },
    { code: 'function sum(...nums) {\n  return nums.reduce((a,b) => a+b);\n}\nconsole.log(sum(1,2,3));', options: ['6', '123', '3', 'Error'], answer: 0 },
    { code: 'const factorial = n => n <= 1 ? 1 : n * factorial(n-1);\nconsole.log(factorial(5));', options: ['120', '25', '5', '15'], answer: 0 },
    { code: 'const compose = (f, g) => x => f(g(x));\nconst add1 = x => x + 1;\nconst mul2 = x => x * 2;\nconsole.log(compose(add1, mul2)(3));', options: ['7', '8', '6', '9'], answer: 0 },
    { code: 'function counter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c = counter();\nconsole.log(c() + c());', options: ['3', '2', '1', '4'], answer: 0 },
    { code: 'const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);\nconst add2 = x => x + 2;\nconst mul3 = x => x * 3;\nconsole.log(pipe(add2, mul3)(1));', options: ['9', '7', '5', '6'], answer: 0 },
    { code: 'const curry = fn => a => b => fn(a, b);\nconst add = (a, b) => a + b;\nconst add5 = curry(add)(5);\nconsole.log(add5(3));', options: ['8', '53', '15', 'Error'], answer: 0 },
    { code: 'async function getData() {\n  return "data";\n}\ngetData().then(console.log);', options: ['data', 'Promise', 'undefined', 'Error'], answer: 0 },
    { code: 'const memoize = fn => {\n  const cache = {};\n  return n => cache[n] || (cache[n] = fn(n));\n};\nconst fib = memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2));\nconsole.log(fib(6));', options: ['8', '13', '5', '21'], answer: 0 },
    { code: '[1,2,3].map(x => x*2).filter(x => x>2).reduce((a,b) => a+b)', options: ['10', '12', '6', '8'], answer: 0 },
    { code: 'const once = fn => {\n  let called = false;\n  return (...args) => {\n    if (called) return;\n    called = true;\n    return fn(...args);\n  };\n};\nconst addOnce = once((a,b) => a+b);\nconsole.log(addOnce(1,2) + (addOnce(3,4) || 0));', options: ['3', '10', '7', 'Error'], answer: 0 },
    { code: 'const partial = (fn, ...args) => (...more) => fn(...args, ...more);\nconst add3 = (a,b,c) => a+b+c;\nconsole.log(partial(add3, 1)(2, 3));', options: ['6', '123', '3', 'Error'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Sparkles className="w-20 h-20 mx-auto text-emerald-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">🛠️ 함수 빌더</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">함수의 반환값을 예측하세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-6 border-2 border-emerald-500/30">
        <p className="text-sm text-slate-400 mb-2">함수 실행 결과는?</p>
        <pre className="font-mono text-sm text-emerald-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-lg font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

// ===== 새 게임 8: 에러 파인더 =====
const ErrorFinderGame: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const { addExp } = useUserStore();

  const allProblems = errorFinderProblems; // 100 problems
  const _oldProblems8 = [
    { code: 'print("Hello World"', question: '오류가 있는 줄은?', options: ['1번 줄 - 괄호 닫힘 누락', '오류 없음', '1번 줄 - 따옴표 오류', '1번 줄 - print 오타'], answer: 0 },
    { code: 'x = 10\nif x > 5\n  print("big")', question: '오류가 있는 줄은?', options: ['2번 줄 - 콜론(:) 누락', '3번 줄 - 들여쓰기 오류', '1번 줄 - 변수 선언 오류', '오류 없음'], answer: 0 },
    { code: 'for i in range(5):\nprint(i)', question: '오류가 있는 줄은?', options: ['2번 줄 - 들여쓰기 누락', '1번 줄 - 콜론 누락', '1번 줄 - range 오류', '오류 없음'], answer: 0 },
    { code: 'def greet(name)\n  return "Hello " + name', question: '오류가 있는 줄은?', options: ['1번 줄 - 콜론(:) 누락', '2번 줄 - 들여쓰기 오류', '2번 줄 - return 오류', '오류 없음'], answer: 0 },
    { code: 'nums = [1, 2, 3,]\nprint(nums[3])', question: '오류가 있는 줄은?', options: ['2번 줄 - 인덱스 범위 초과', '1번 줄 - 쉼표 오류', '2번 줄 - 대괄호 오류', '오류 없음'], answer: 0 },
    { code: 'x = "Hello"\ny = x + 5', question: '오류가 있는 줄은?', options: ['2번 줄 - 문자열과 숫자 연산', '1번 줄 - 따옴표 오류', '2번 줄 - 대입 오류', '오류 없음'], answer: 0 },
    { code: 'class Dog:\n  def __init__(self, name)\n    self.name = name', question: '오류가 있는 줄은?', options: ['2번 줄 - 콜론(:) 누락', '1번 줄 - class 오류', '3번 줄 - 들여쓰기 오류', '오류 없음'], answer: 0 },
    { code: 'x = [1, 2, 3]\nprint(x.push(4))', question: '오류가 있는 줄은?', options: ['2번 줄 - push → append', '1번 줄 - 리스트 오류', '2번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'import maths\nprint(maths.sqrt(4))', question: '오류가 있는 줄은?', options: ['1번 줄 - maths → math', '2번 줄 - sqrt 오류', '2번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'x = {"name": "Kim"}\nprint(x.name)', question: '오류가 있는 줄은?', options: ['2번 줄 - .접근 불가 (["name"] 사용)', '1번 줄 - 딕셔너리 오류', '2번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'let x = 5;\nconst x = 10;', question: '오류가 있는 줄은?', options: ['2번 줄 - 변수 재선언 불가', '1번 줄 - let 오류', '오류 없음', '1번 줄 - 세미콜론 오류'], answer: 0 },
    { code: 'function test() {\n  console.log("test")\n', question: '오류가 있는 줄은?', options: ['중괄호 닫힘 누락', '1번 줄 - function 오류', '2번 줄 - 세미콜론 누락', '오류 없음'], answer: 0 },
    { code: 'const arr = [1, 2, 3];\narr = [4, 5, 6];', question: '오류가 있는 줄은?', options: ['2번 줄 - const 재할당 불가', '1번 줄 - const 오류', '2번 줄 - 배열 형식 오류', '오류 없음'], answer: 0 },
    { code: 'let obj = {name: "Kim" age: 20};', question: '오류가 있는 줄은?', options: ['1번 줄 - 쉼표(,) 누락', '1번 줄 - 콜론 오류', '1번 줄 - 중괄호 오류', '오류 없음'], answer: 0 },
    { code: 'for (let i = 0 i < 5; i++) {\n  console.log(i);\n}', question: '오류가 있는 줄은?', options: ['1번 줄 - 세미콜론(;) 누락', '1번 줄 - let 오류', '2번 줄 - console 오류', '오류 없음'], answer: 0 },
    { code: 'const add = (a, b) => {\n  return a + b\n}\nconsole.log(add(1, 2));', question: '오류가 있는 줄은?', options: ['오류 없음', '1번 줄 - 화살표 함수 오류', '2번 줄 - return 오류', '4번 줄 - console 오류'], answer: 0 },
    { code: 'async function getData() {\n  const data = await fetch("url");\n  return data;\n}', question: '오류가 있는 줄은?', options: ['오류 없음', '1번 줄 - async 오류', '2번 줄 - await 오류', '3번 줄 - return 오류'], answer: 0 },
    { code: 'x = 10\ny = x / 0', question: '오류가 있는 줄은?', options: ['2번 줄 - 0으로 나눔 (런타임)', '1번 줄 - 변수 오류', '오류 없음', '2번 줄 - 대입 오류'], answer: 0 },
    { code: 'if True:\n  print("Yes")\nelse\n  print("No")', question: '오류가 있는 줄은?', options: ['3번 줄 - 콜론(:) 누락', '1번 줄 - 조건 오류', '4번 줄 - 들여쓰기 오류', '오류 없음'], answer: 0 },
    { code: 'while True\n  print("loop")\n  break', question: '오류가 있는 줄은?', options: ['1번 줄 - 콜론(:) 누락', '2번 줄 - 들여쓰기 오류', '3번 줄 - break 오류', '오류 없음'], answer: 0 },
    { code: 'try:\n  x = 1 / 0\nexcept:\nprint("error")', question: '오류가 있는 줄은?', options: ['4번 줄 - 들여쓰기 누락', '1번 줄 - try 오류', '3번 줄 - except 오류', '오류 없음'], answer: 0 },
    { code: 'lambda x, y: x + y', question: '오류가 있는 줄은?', options: ['오류 없음', '1번 줄 - lambda 오류', '1번 줄 - 콜론 오류', '1번 줄 - 변수 오류'], answer: 0 },
    { code: 'x = [1, 2, 3]\nfor i in x\n  print(i)', question: '오류가 있는 줄은?', options: ['2번 줄 - 콜론(:) 누락', '1번 줄 - 리스트 오류', '3번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'def add(a, b):\n  return a + b\n\nadd(1)', question: '오류가 있는 줄은?', options: ['4번 줄 - 인자 부족', '1번 줄 - 함수 정의 오류', '2번 줄 - return 오류', '오류 없음'], answer: 0 },
    { code: 'x = "Hello"\nprint(x[10])', question: '오류가 있는 줄은?', options: ['2번 줄 - 인덱스 범위 초과', '1번 줄 - 문자열 오류', '2번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'nums = [1, 2, 3]\nnums.sort(reverse=true)', question: '오류가 있는 줄은?', options: ['2번 줄 - true → True', '1번 줄 - 리스트 오류', '2번 줄 - sort 오류', '오류 없음'], answer: 0 },
    { code: 'x = 5\nif x = 5:\n  print("five")', question: '오류가 있는 줄은?', options: ['2번 줄 - = → == (비교 연산)', '1번 줄 - 변수 오류', '3번 줄 - print 오류', '오류 없음'], answer: 0 },
    { code: 'def greet():\n  name = input("Name: ")\n  print("Hello, " + name)\ngreet()', question: '오류가 있는 줄은?', options: ['오류 없음', '1번 줄 - 함수 오류', '2번 줄 - input 오류', '4번 줄 - 함수 호출 오류'], answer: 0 },
    { code: 'x = int("abc")', question: '오류가 있는 줄은?', options: ['1번 줄 - 문자열을 숫자로 변환 불가', '오류 없음', '1번 줄 - int 오류', '1번 줄 - 따옴표 오류'], answer: 0 },
    { code: 'console.log(x);\nlet x = 5;', question: '오류가 있는 줄은?', options: ['1번 줄 - 선언 전 사용 (TDZ)', '2번 줄 - let 오류', '오류 없음', '1번 줄 - console 오류'], answer: 0 },
  ];

  const [problems, setProblems] = useState(allProblems.slice(0, 10));

  const startGame = () => {
    const shuffled = [...allProblems].sort(() => Math.random() - 0.5).slice(0, 10);
    setProblems(shuffled);
    setStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
    setSelected(null);
  };

  const handleAnswer = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      if (index === problems[currentQuestion].answer) setScore(s => s + 100);
      if (currentQuestion < problems.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelected(null);
      } else {
        setIsFinished(true);
        addExp(Math.floor(score / 5));
      }
    }, 1200);
  };

  if (isFinished) {
    return (
      <div className="text-center py-8">
        <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-black mb-3 text-white">게임 종료!</h2>
        <p className="text-5xl font-black text-emerald-400 mb-2">{score}점</p>
        <p className="text-xl text-slate-300 font-semibold mb-6">+{Math.floor(score / 5)} XP 획득!</p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" onClick={onClose}>나가기</Button>
          <Button variant="primary" onClick={startGame}>다시 하기</Button>
        </div>
      </div>
    );
  }

  if (!started) {
    return (
      <div className="text-center py-8">
        <Bug className="w-20 h-20 mx-auto text-red-400 mb-4" />
        <h2 className="text-2xl font-black mb-3 text-white">❌ 에러 파인더</h2>
        <p className="text-lg text-slate-300 font-medium mb-6">코드에서 문법 오류를 찾으세요!<br/>총 {allProblems.length}개 중 10문제 출제!</p>
        <Button variant="primary" onClick={startGame} leftIcon={<Play className="w-5 h-5" />}>시작하기</Button>
      </div>
    );
  }

  const problem = problems[currentQuestion];

  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-bold text-slate-300">문제 {currentQuestion + 1} / {problems.length}</span>
        <span className="text-2xl font-black text-white">{score}점</span>
      </div>
      <div className="bg-slate-900 rounded-xl p-5 mb-4 border-2 border-red-500/30">
        <pre className="font-mono text-lg text-red-300 whitespace-pre-wrap leading-relaxed">{problem.code}</pre>
      </div>
      <p className="text-center text-slate-300 mb-4 font-semibold">{problem.code}</p>
      <div className="grid grid-cols-1 gap-3">
        {problem.options.map((option, index) => (
          <button
            key={index}
            onClick={() => selected === null && handleAnswer(index)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-left font-bold transition-all border-2 ${
              selected === null ? 'bg-slate-700 border-slate-600 hover:bg-slate-600 text-white'
                : selected === index ? index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-red-500 border-red-400 text-white'
                : index === problem.answer ? 'bg-green-500 border-green-400 text-white' : 'bg-slate-700 border-slate-600 opacity-50 text-slate-400'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Games;

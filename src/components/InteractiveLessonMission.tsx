import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Volume2, RefreshCw, Zap, Star } from 'lucide-react';
import { Mission as MissionType } from '../types';

interface Props {
  mission: MissionType;
  onComplete: (perfect: boolean) => void;
}

const InteractiveLessonMission: React.FC<Props> = ({ mission, onComplete }) => {
  // 미션 ID에 따라 다른 인터랙티브 컴포넌트 렌더링
  if (mission.id === '1-5-8') {
    return <VendingMachineSimulation mission={mission} onComplete={onComplete} />;
  } else if (mission.id === '1-3-8') {
    return <MusicRhythmMaker mission={mission} onComplete={onComplete} />;
  } else if (mission.id === '1-4-9') {
    return <FractalExplorer mission={mission} onComplete={onComplete} />;
  }

  // 기본 fallback
  return <GenericInteractive mission={mission} onComplete={onComplete} />;
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

// ==================== Generic Fallback ====================
const GenericInteractive: React.FC<Props> = ({ mission, onComplete }) => {
  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-lg p-8 text-center">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-5xl">
        📚
      </div>
      <h3 className="text-2xl font-bold mb-2 text-white">{mission.title}</h3>
      <p className="text-slate-400 mb-6">{mission.description}</p>
      {mission.concept && (
        <div className="inline-block px-4 py-2 bg-violet-900/30 text-violet-300 rounded-xl font-medium mb-6">
          학습 개념: {mission.concept}
        </div>
      )}
      <button
        onClick={() => onComplete(true)}
        className="px-8 py-4 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors"
      >
        완료하기
      </button>
    </div>
  );
};

export default InteractiveLessonMission;

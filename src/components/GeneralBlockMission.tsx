import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Play, Shuffle, GripVertical } from 'lucide-react';
import { Mission as MissionType } from '../types';

interface Props {
  mission: MissionType;
  onComplete: (perfect: boolean) => void;
}

const GeneralBlockMission: React.FC<Props> = ({ mission, onComplete }) => {
  const [availableBlocks, setAvailableBlocks] = useState<string[]>([]);
  const [assembledBlocks, setAssembledBlocks] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [charX, setCharX] = useState(80);
  const [charScale, setCharScale] = useState(1);
  const [charRotation, setCharRotation] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState('');
  const [charColor, setCharColor] = useState(0);
  const [playingSound, setPlayingSound] = useState(false);

  useEffect(() => {
    if (mission.blocks && mission.blocks.length > 0) {
      const shuffled = [...mission.blocks].sort(() => Math.random() - 0.5);
      setAvailableBlocks(shuffled);
      setAssembledBlocks([]);
    }
  }, [mission.blocks]);

  const handleDragStart = (block: string) => {
    setDraggedBlock(block);
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedBlock(null);
  };

  const handleDrop = () => {
    if (draggedBlock && !assembledBlocks.includes(draggedBlock)) {
      setAssembledBlocks([...assembledBlocks, draggedBlock]);
      setAvailableBlocks(availableBlocks.filter(b => b !== draggedBlock));
      setDraggedBlock(null);
    }
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const addBlock = (block: string) => {
    if (!assembledBlocks.includes(block)) {
      setAssembledBlocks([...assembledBlocks, block]);
      setAvailableBlocks(availableBlocks.filter(b => b !== block));
    }
  };

  const removeBlock = (block: string) => {
    setAssembledBlocks(assembledBlocks.filter(b => b !== block));
    setAvailableBlocks([...availableBlocks, block]);
  };

  const runAnimation = async () => {
    setIsRunning(true);
    setCharX(80);
    setCharScale(1);
    setCharRotation(0);
    setShowBubble(false);
    setCharColor(0);

    for (const block of assembledBlocks) {
      const lower = block.toLowerCase();
      if (lower.includes('이동') || lower.includes('앞으로') || lower.includes('걷기')) {
        const match = block.match(/(\d+)/);
        const steps = match ? parseInt(match[1]) : 10;
        setCharX(prev => Math.min(280, prev + steps * 3));
        await new Promise(r => setTimeout(r, 500));
      } else if (lower.includes('회전') || lower.includes('돌기')) {
        const match = block.match(/(\d+)/);
        const deg = match ? parseInt(match[1]) : 90;
        setCharRotation(prev => prev + deg);
        await new Promise(r => setTimeout(r, 400));
      } else if (lower.includes('크기')) {
        const match = block.match(/(\d+)/);
        const size = match ? parseInt(match[1]) / 100 : 1.2;
        setCharScale(size);
        await new Promise(r => setTimeout(r, 400));
      } else if (lower.includes('말하') || lower.includes('생각')) {
        const textMatch = block.match(/['"](.+?)['"]/);
        setBubbleText(textMatch ? textMatch[1] : '안녕!');
        setShowBubble(true);
        await new Promise(r => setTimeout(r, 1500));
        setShowBubble(false);
      } else if (lower.includes('소리') || lower.includes('재생')) {
        setPlayingSound(true);
        await new Promise(r => setTimeout(r, 800));
        setPlayingSound(false);
      } else if (lower.includes('색') || lower.includes('효과')) {
        setCharColor(prev => (prev + 60) % 360);
        await new Promise(r => setTimeout(r, 400));
      } else {
        await new Promise(r => setTimeout(r, 400));
      }
    }
    setIsRunning(false);
  };

  const checkAnswer = async () => {
    if (!mission.blocks) return;
    await runAnimation();
    const correctAnswer = (mission as any).correctBlocks || mission.blocks;
    if (assembledBlocks.length < correctAnswer.length) {
      setShowHint(true);
      return;
    }
    const isCorrect = correctAnswer.every((block: string, index: number) => assembledBlocks[index] === block);
    if (isCorrect) {
      setIsComplete(true);
      setTimeout(() => onComplete(true), 1500);
    } else {
      setShowHint(true);
    }
  };

  const reset = () => {
    if (mission.blocks) {
      const shuffled = [...mission.blocks].sort(() => Math.random() - 0.5);
      setAvailableBlocks(shuffled);
      setAssembledBlocks([]);
      setIsComplete(false);
      setShowHint(false);
      setIsRunning(false);
      setCharX(80);
      setCharScale(1);
      setCharRotation(0);
      setShowBubble(false);
      setBubbleText('');
      setCharColor(0);
      setPlayingSound(false);
    }
  };

  const getBlockColor = (block: string): string => {
    const lower = block.toLowerCase();
    if (lower.includes('깃발') || lower.includes('클릭') || lower.includes('시작')) return 'bg-yellow-500';
    if (lower.includes('이동') || lower.includes('앞으로') || lower.includes('회전')) return 'bg-blue-500';
    if (lower.includes('반복') || lower.includes('번')) return 'bg-orange-500';
    if (lower.includes('만약') || lower.includes('조건')) return 'bg-amber-600';
    if (lower.includes('말하') || lower.includes('묻') || lower.includes('소리')) return 'bg-purple-500';
    if (lower.includes('펜') || lower.includes('색') || lower.includes('크기')) return 'bg-green-500';
    if (lower.includes('변수') || lower.includes('값') || lower.includes('%')) return 'bg-red-500';
    return 'bg-blue-500';
  };

  return (
    <div className="bg-slate-800 rounded-2xl border-2 border-slate-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] p-6">
      <h3 className="text-xl font-bold mb-2 text-white">🧱 {mission.title}</h3>
      <p className="text-slate-300 text-base mb-4">{mission.description}</p>

      {mission.concept && (
        <div className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-xl font-medium mb-4">
          📚 학습 개념: {mission.concept}
        </div>
      )}

      {/* 캐릭터 실행 영역 */}
      <div className="bg-gradient-to-b from-sky-400 to-sky-200 rounded-xl p-4 mb-4 border-4 border-sky-500 relative overflow-hidden" style={{ height: '180px' }}>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-500 to-green-400"></div>
        <motion.div
          animate={{ x: charX, scale: charScale, rotate: charRotation }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="absolute bottom-8"
          style={{ filter: charColor > 0 ? `hue-rotate(${charColor}deg)` : 'none' }}
        >
          <span className="text-5xl">{isRunning ? '🐱' : '😺'}</span>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-8 bg-white px-3 py-1 rounded-xl text-sm font-bold shadow-lg whitespace-nowrap"
            >
              {bubbleText}
              <div className="absolute -bottom-2 left-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </motion.div>
          )}
          {playingSound && (
            <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="absolute -top-8 left-8 text-2xl">
              🎵
            </motion.div>
          )}
        </motion.div>
        {isRunning && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            실행 중...
          </div>
        )}
      </div>

      <div className="bg-blue-900/30 rounded-lg p-3 mb-4 border border-blue-500/30">
        <p className="text-blue-300 text-sm font-medium">
          💡 <strong>블록을 클릭하거나 드래그</strong>해서 아래 코드 영역에 순서대로 배치하세요!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* 사용 가능한 블록 */}
        <div className="bg-slate-700/50 rounded-xl p-4 border-2 border-dashed border-slate-500">
          <p className="text-base font-bold text-slate-300 mb-3">🧱 블록 상자 (클릭 또는 드래그)</p>
          <div className="flex flex-col gap-2 min-h-[150px]">
            {availableBlocks.length > 0 ? (
              availableBlocks.map((block, i) => (
                <motion.div
                  key={`avail-${i}`}
                  draggable
                  onDragStart={() => handleDragStart(block)}
                  onDragEnd={handleDragEnd}
                  onClick={() => addBlock(block)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${getBlockColor(block)} text-white px-4 py-3 rounded-lg font-bold text-base shadow cursor-pointer flex items-center gap-2 hover:brightness-110 transition-all border-2 border-transparent hover:border-white/30`}
                >
                  <GripVertical className="w-5 h-5 opacity-60" />
                  <span className="flex-1">{block}</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">클릭!</span>
                </motion.div>
              ))
            ) : (
              <div className="flex items-center justify-center h-24 text-emerald-400 text-base font-bold">
                ✓ 모든 블록을 배치했어요!
              </div>
            )}
          </div>
        </div>

        {/* 코드 조합 영역 */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`rounded-xl p-4 min-h-[200px] transition-all ${
            isDragging ? 'bg-violet-600/40 border-2 border-violet-400 border-dashed' : 'bg-violet-900/30 border-2 border-violet-500/50'
          }`}
        >
          <p className="text-base font-bold text-violet-300 mb-3">📝 코드 영역 (순서대로 배치)</p>
          {assembledBlocks.length === 0 ? (
            <div className={`flex flex-col items-center justify-center h-32 rounded-lg border-2 border-dashed transition-all ${isDragging ? 'border-violet-400 bg-violet-500/20' : 'border-slate-500'}`}>
              <p className="text-slate-400 text-base font-medium mb-2">{isDragging ? '👇 여기에 놓으세요!' : '블록을 클릭하거나 드래그하세요'}</p>
              <p className="text-slate-500 text-sm">시작 블록부터 순서대로!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={`assembled-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${getBlockColor(block)} text-white px-4 py-3 rounded-lg font-bold text-base shadow flex items-center justify-between`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">{index + 1}</span>
                    {block}
                  </span>
                  <button onClick={() => removeBlock(block)} className="text-white/70 hover:text-white ml-2 p-1 hover:bg-white/20 rounded transition-colors" title="블록 제거">
                    <XCircle className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
              {isDragging && (
                <div className="h-12 border-2 border-dashed border-violet-400 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 text-sm">
                  👇 여기에 추가
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showHint && !isComplete && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 mb-4">
          <p className="font-bold text-amber-300 text-base mb-2">💡 힌트</p>
          <ul className="text-base text-amber-200 space-y-1">
            {mission.hints && mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
            {(!mission.hints || mission.hints.length === 0) && (
              <>
                <li>• 블록의 순서가 중요해요!</li>
                <li>• 시작 블록(깃발, 클릭 등)을 <strong>첫 번째</strong>로 배치하세요</li>
              </>
            )}
          </ul>
        </motion.div>
      )}

      {isComplete && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 mb-4 flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-emerald-400" />
          <span className="font-bold text-emerald-300 text-lg">잘했어요! 블록을 올바르게 조합했습니다! 🎉</span>
        </motion.div>
      )}

      <div className="flex gap-3">
        <button onClick={reset} className="px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold text-base rounded-xl border border-slate-600 transition-colors flex items-center gap-2">
          <Shuffle className="w-5 h-5" />초기화
        </button>
        <button
          onClick={checkAnswer}
          disabled={assembledBlocks.length === 0 || isComplete || isRunning}
          className="flex-1 px-5 py-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg rounded-xl border border-green-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-5 h-5" />🚩 실행하기
        </button>
      </div>
    </div>
  );
};

export default GeneralBlockMission;

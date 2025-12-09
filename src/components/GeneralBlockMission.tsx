import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Play, Shuffle, GripVertical, RotateCcw, Zap, Trophy, Star } from 'lucide-react';
import { Mission as MissionType } from '../types';

interface Props {
  mission: MissionType;
  onComplete: (perfect: boolean) => void;
}

// 로봇 그리드 미션인지 확인
const isRobotGridMission = (mission: MissionType): boolean => {
  return !!(mission as any).gridSize || !!(mission as any).startPosition;
};

const GeneralBlockMission: React.FC<Props> = ({ mission, onComplete }) => {
  // 로봇 그리드 미션이면 RobotGridMission 사용
  if (isRobotGridMission(mission)) {
    return <RobotGridMission mission={mission} onComplete={onComplete} />;
  }

  return <BlockCodingMission mission={mission} onComplete={onComplete} />;
};

// 블록 타입별 3D 스타일
const getBlockStyle3D = (block: string) => {
  const lower = block.toLowerCase();
  if (lower.includes('반복') || lower.includes('번'))
    return 'bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_4px_0_0_#c2410c,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#c2410c,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('만약') || lower.includes('조건') || lower.includes('아니면'))
    return 'bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_4px_0_0_#b45309,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#b45309,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('앞으로') || lower.includes('이동') || lower.includes('뒤로'))
    return 'bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_0_0_#1d4ed8,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#1d4ed8,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('회전') || lower.includes('돌기'))
    return 'bg-gradient-to-b from-cyan-400 to-cyan-600 shadow-[0_4px_0_0_#0e7490,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#0e7490,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('기다') || lower.includes('멈추'))
    return 'bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-[0_4px_0_0_#a16207,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#a16207,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('벽') || lower.includes('감지') || lower.includes('앞에'))
    return 'bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_4px_0_0_#7e22ce,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#7e22ce,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  if (lower.includes('집') || lower.includes('줍') || lower.includes('놓'))
    return 'bg-gradient-to-b from-green-400 to-green-600 shadow-[0_4px_0_0_#15803d,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#15803d,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
  return 'bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_0_0_#1d4ed8,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#1d4ed8,0_4px_6px_rgba(0,0,0,0.3)] hover:translate-y-[2px]';
};

// 블록 아이콘
const getBlockIcon = (block: string) => {
  const lower = block.toLowerCase();
  if (lower.includes('앞으로')) return '⬆️';
  if (lower.includes('뒤로')) return '⬇️';
  if (lower.includes('왼쪽') && lower.includes('회전')) return '↩️';
  if (lower.includes('오른쪽') && lower.includes('회전')) return '↪️';
  if (lower.includes('반복')) return '🔁';
  if (lower.includes('만약')) return '❓';
  if (lower.includes('아니면')) return '🔀';
  if (lower.includes('기다')) return '⏱️';
  if (lower.includes('벽')) return '🧱';
  if (lower.includes('집')) return '📦';
  if (lower.includes('놓')) return '📤';
  if (lower.includes('멈추')) return '🛑';
  return '🔷';
};

// 3D 로봇 그리드 미션 컴포넌트
const RobotGridMission: React.FC<Props> = ({ mission, onComplete }) => {
  const gridSize = (mission as any).gridSize || { rows: 6, cols: 6 };
  const startPos = (mission as any).startPosition || { row: gridSize.rows - 1, col: 0 };
  const goalPos = (mission as any).goalPosition || { row: 0, col: gridSize.cols - 1 };
  const obstacles = (mission as any).obstacles || [];
  const collectibles = (mission as any).collectibles || [];
  const checkpoints = (mission as any).checkpoints || [];
  const missionBlocks = mission.blocks || ['앞으로', '왼쪽회전', '오른쪽회전'];

  // 사용 가능한 모든 블록 종류
  const allBlockTypes = [
    '앞으로 1칸',
    '앞으로 2칸',
    '앞으로 3칸',
    '뒤로 1칸',
    '왼쪽으로 90° 회전',
    '오른쪽으로 90° 회전',
    '2번 반복하기',
    '3번 반복하기',
    '5번 반복하기',
    '만약 벽이 앞에 있으면',
    '아니면',
    '반복 끝',
    '조건 끝',
    '0.5초 기다리기',
    '아이템 줍기',
    '아이템 놓기',
  ];

  // 미션에서 사용할 블록 필터링
  const availableBlockTypes = missionBlocks.length > 0
    ? allBlockTypes.filter(b =>
        missionBlocks.some((mb: string) =>
          b.includes(mb) || mb.includes(b.split(' ')[0]) ||
          (mb === '앞으로' && b.includes('앞으로')) ||
          (mb === '왼쪽회전' && b.includes('왼쪽')) ||
          (mb === '오른쪽회전' && b.includes('오른쪽')) ||
          (mb === '반복' && b.includes('반복'))
        )
      )
    : allBlockTypes.slice(0, 6);

  const [robotPos, setRobotPos] = useState(startPos);
  const [robotDir, setRobotDir] = useState<'up' | 'down' | 'left' | 'right'>('up');
  const [assembledBlocks, setAssembledBlocks] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [executionStep, setExecutionStep] = useState(-1);
  const [collectedItems, setCollectedItems] = useState<{row: number, col: number}[]>([]);
  const [visitedCheckpoints, setVisitedCheckpoints] = useState<{row: number, col: number}[]>([]);
  const [trail, setTrail] = useState<{row: number, col: number}[]>([]);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [failMessage, setFailMessage] = useState('');

  const addBlock = (block: string) => {
    setAssembledBlocks([...assembledBlocks, block]);
  };

  const removeBlock = (index: number) => {
    setAssembledBlocks(assembledBlocks.filter((_, i) => i !== index));
  };

  const moveBlockUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...assembledBlocks];
    [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
    setAssembledBlocks(newBlocks);
  };

  const moveBlockDown = (index: number) => {
    if (index === assembledBlocks.length - 1) return;
    const newBlocks = [...assembledBlocks];
    [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    setAssembledBlocks(newBlocks);
  };

  const isObstacle = (row: number, col: number) => {
    return obstacles.some((obs: any) => obs.row === row && obs.col === col);
  };

  const isValidMove = (row: number, col: number) => {
    return row >= 0 && row < gridSize.rows && col >= 0 && col < gridSize.cols && !isObstacle(row, col);
  };

  const hasCollectible = (row: number, col: number) => {
    return collectibles.some((c: any) => c.row === row && c.col === col) &&
           !collectedItems.some(c => c.row === row && c.col === col);
  };

  const hasCheckpoint = (row: number, col: number) => {
    return checkpoints.some((c: any) => c.row === row && c.col === col);
  };

  const isCheckpointVisited = (row: number, col: number) => {
    return visitedCheckpoints.some(c => c.row === row && c.col === col);
  };

  const runCode = async () => {
    if (assembledBlocks.length === 0) {
      setShowHint(true);
      return;
    }

    setIsRunning(true);
    setShowHint(false);
    setFailMessage('');
    setCollectedItems([]);
    setVisitedCheckpoints([]);
    setTrail([]);
    setScore(0);
    let currentPos = { ...startPos };
    let currentDir: 'up' | 'down' | 'left' | 'right' = 'up';
    let collected: {row: number, col: number}[] = [];
    let visited: {row: number, col: number}[] = [];
    let pathTrail: {row: number, col: number}[] = [{ ...startPos }];
    let currentScore = 0;
    setRobotPos(currentPos);
    setRobotDir(currentDir);

    const executeBlock = async (block: string) => {
      const lower = block.toLowerCase();

      if (lower.includes('앞으로')) {
        const steps = parseInt(block.match(/(\d+)/)?.[1] || '1');
        for (let s = 0; s < steps; s++) {
          let newRow = currentPos.row;
          let newCol = currentPos.col;
          if (currentDir === 'up') newRow--;
          else if (currentDir === 'down') newRow++;
          else if (currentDir === 'left') newCol--;
          else if (currentDir === 'right') newCol++;

          if (isValidMove(newRow, newCol)) {
            currentPos = { row: newRow, col: newCol };
            pathTrail.push({ ...currentPos });
            setTrail([...pathTrail]);
            setRobotPos({ ...currentPos });

            // 아이템 자동 수집
            if (hasCollectible(currentPos.row, currentPos.col) &&
                !collected.some(c => c.row === currentPos.row && c.col === currentPos.col)) {
              collected.push({ ...currentPos });
              setCollectedItems([...collected]);
              currentScore += 50;
              setScore(currentScore);
            }

            // 체크포인트 방문
            if (hasCheckpoint(currentPos.row, currentPos.col) &&
                !visited.some(c => c.row === currentPos.row && c.col === currentPos.col)) {
              visited.push({ ...currentPos });
              setVisitedCheckpoints([...visited]);
              currentScore += 100;
              setScore(currentScore);
            }

            await new Promise(r => setTimeout(r, 350));
          }
        }
      } else if (lower.includes('뒤로')) {
        const steps = parseInt(block.match(/(\d+)/)?.[1] || '1');
        const oppositeDir = { up: 'down', down: 'up', left: 'right', right: 'left' };
        const backDir = oppositeDir[currentDir] as 'up' | 'down' | 'left' | 'right';
        for (let s = 0; s < steps; s++) {
          let newRow = currentPos.row;
          let newCol = currentPos.col;
          if (backDir === 'up') newRow--;
          else if (backDir === 'down') newRow++;
          else if (backDir === 'left') newCol--;
          else if (backDir === 'right') newCol++;

          if (isValidMove(newRow, newCol)) {
            currentPos = { row: newRow, col: newCol };
            pathTrail.push({ ...currentPos });
            setTrail([...pathTrail]);
            setRobotPos({ ...currentPos });
            await new Promise(r => setTimeout(r, 350));
          }
        }
      } else if (lower.includes('왼쪽') && lower.includes('회전')) {
        const dirs: ('up' | 'down' | 'left' | 'right')[] = ['up', 'left', 'down', 'right'];
        const idx = dirs.indexOf(currentDir);
        currentDir = dirs[(idx + 1) % 4];
        setRobotDir(currentDir);
        await new Promise(r => setTimeout(r, 250));
      } else if (lower.includes('오른쪽') && lower.includes('회전')) {
        const dirs: ('up' | 'down' | 'left' | 'right')[] = ['up', 'right', 'down', 'left'];
        const idx = dirs.indexOf(currentDir);
        currentDir = dirs[(idx + 1) % 4];
        setRobotDir(currentDir);
        await new Promise(r => setTimeout(r, 250));
      } else if (lower.includes('기다')) {
        await new Promise(r => setTimeout(r, 500));
      }
    };

    // 블록 실행
    for (let i = 0; i < assembledBlocks.length; i++) {
      setExecutionStep(i);
      const block = assembledBlocks[i];

      // 반복문 처리
      if (block.includes('반복하기')) {
        const times = parseInt(block.match(/(\d+)/)?.[1] || '2');
        const repeatEnd = assembledBlocks.findIndex((b, idx) => idx > i && b.includes('반복 끝'));
        const repeatBlocks = repeatEnd > i ? assembledBlocks.slice(i + 1, repeatEnd) : [];

        for (let t = 0; t < times; t++) {
          for (const rb of repeatBlocks) {
            await executeBlock(rb);
          }
        }
        if (repeatEnd > i) {
          i = repeatEnd;
        }
      } else if (!block.includes('반복 끝') && !block.includes('조건 끝') && !block.includes('아니면')) {
        await executeBlock(block);
      }

      await new Promise(r => setTimeout(r, 100));
    }

    setExecutionStep(-1);
    setIsRunning(false);

    // 목표 도달 확인 + 체크포인트 확인
    const allCheckpointsVisited = checkpoints.length === 0 ||
      checkpoints.every((cp: any) => visited.some(v => v.row === cp.row && v.col === cp.col));

    if (currentPos.row === goalPos.row && currentPos.col === goalPos.col) {
      if (allCheckpointsVisited) {
        currentScore += 200;
        setScore(currentScore);
        setIsComplete(true);
        setShowCelebration(true);
        setTimeout(() => {
          setShowCelebration(false);
          onComplete(true);
        }, 2000);
      } else {
        setFailMessage('모든 체크포인트(🔷)를 방문해야 해요!');
        setShowHint(true);
      }
    } else {
      setShowHint(true);
    }
  };

  const reset = () => {
    setRobotPos(startPos);
    setRobotDir('up');
    setAssembledBlocks([]);
    setIsComplete(false);
    setShowHint(false);
    setFailMessage('');
    setExecutionStep(-1);
    setCollectedItems([]);
    setVisitedCheckpoints([]);
    setTrail([]);
    setScore(0);
  };

  // 방향 표시
  const getDirectionIndicator = () => {
    const arrows: Record<string, string> = { up: '↑', down: '↓', left: '←', right: '→' };
    return arrows[robotDir];
  };

  // 그리드 셀 크기 계산 - 그리드가 화면에 꽉 차도록
  const cellSize = Math.min(52, Math.floor(340 / gridSize.cols));

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-4 md:p-6 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* 헤더 */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-3xl">🤖</span> {mission.title}
          </h3>
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-yellow-300">{score}</span>
          </div>
        </div>
        <p className="text-slate-400 text-sm mt-1">{mission.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {mission.concept && (
            <span className="px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-xs font-medium border border-violet-500/30">
              📚 {mission.concept}
            </span>
          )}
          {checkpoints.length > 0 && (
            <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-xs font-medium border border-cyan-500/30">
              🔷 체크포인트 {visitedCheckpoints.length}/{checkpoints.length}
            </span>
          )}
          {collectibles.length > 0 && (
            <span className="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30">
              💎 아이템 {collectedItems.length}/{collectibles.length}
            </span>
          )}
        </div>
      </div>

      {/* 메인 레이아웃 */}
      <div className="flex flex-col lg:flex-row gap-4 relative z-10">
        {/* 왼쪽: 블록 상자 + 내 코드 */}
        <div className="lg:w-[360px] flex flex-col gap-4">
          {/* 블록 상자 - 3D 스타일 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 border border-slate-600 shadow-lg">
            <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">🧱</span>
              블록 상자
            </p>
            <div className="flex flex-wrap gap-2 max-h-[200px] overflow-y-auto custom-scrollbar pr-1">
              {availableBlockTypes.map((block, i) => (
                <motion.button
                  key={`block-${i}`}
                  onClick={() => addBlock(block)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97, y: 2 }}
                  disabled={isRunning}
                  className={`${getBlockStyle3D(block)} text-white px-3 py-2 rounded-xl font-bold text-xs transition-all disabled:opacity-50 flex items-center gap-1.5 border-t border-white/20`}
                >
                  <span className="text-base">{getBlockIcon(block)}</span>
                  <span>{block}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* 내 코드 - 3D 스타일 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-4 border border-violet-500/40 flex-1 min-h-[260px] max-h-[360px] overflow-hidden flex flex-col shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-bold text-violet-300 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">📝</span>
                내 코드
              </p>
              <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-1 rounded-full">{assembledBlocks.length}개</span>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
              {assembledBlocks.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 text-sm">
                  <Zap className="w-8 h-8 mb-2 opacity-30" />
                  <p>블록을 클릭해서 추가하세요!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1.5">
                  {assembledBlocks.map((block, index) => (
                    <motion.div
                      key={`code-${index}`}
                      initial={{ opacity: 0, x: -20, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className={`${getBlockStyle3D(block)} text-white px-3 py-2 rounded-xl text-xs flex items-center gap-2 group relative overflow-hidden
                        ${executionStep === index ? 'ring-2 ring-yellow-400 ring-offset-2 ring-offset-slate-900' : ''}`}
                    >
                      {executionStep === index && (
                        <motion.div
                          className="absolute inset-0 bg-yellow-400/20"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ repeat: Infinity, duration: 0.5 }}
                        />
                      )}
                      <span className="w-6 h-6 bg-black/30 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0 border border-white/10">
                        {index + 1}
                      </span>
                      <span className="text-base">{getBlockIcon(block)}</span>
                      <span className="flex-1 truncate font-medium">{block}</span>
                      <div className="hidden group-hover:flex items-center gap-1 bg-black/30 rounded-lg p-1">
                        <button onClick={() => moveBlockUp(index)} className="p-1 hover:bg-white/20 rounded" disabled={isRunning}>
                          <span className="text-xs">▲</span>
                        </button>
                        <button onClick={() => moveBlockDown(index)} className="p-1 hover:bg-white/20 rounded" disabled={isRunning}>
                          <span className="text-xs">▼</span>
                        </button>
                        <button onClick={() => removeBlock(index)} className="p-1 hover:bg-red-500/50 rounded" disabled={isRunning}>
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 버튼들 - 3D */}
          <div className="flex gap-3">
            <motion.button
              onClick={reset}
              disabled={isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-3 bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold rounded-xl shadow-[0_4px_0_0_#374151,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-[2px] transition-all flex items-center gap-2 disabled:opacity-50 text-sm border-t border-white/10"
            >
              <RotateCcw className="w-4 h-4" />초기화
            </motion.button>
            <motion.button
              onClick={runCode}
              disabled={assembledBlocks.length === 0 || isComplete || isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold rounded-xl shadow-[0_4px_0_0_#15803d,0_6px_10px_rgba(0,0,0,0.3)] hover:shadow-[0_2px_0_0_#15803d] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm border-t border-white/20"
            >
              <Play className="w-5 h-5" />{isRunning ? '실행 중...' : '▶ 실행'}
            </motion.button>
          </div>
        </div>

        {/* 오른쪽: 3D 그리드 */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 border-slate-600 p-5 flex-1 flex items-center justify-center min-h-[420px] shadow-[inset_0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
            {/* 조명 효과 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-2xl"></div>

            <div className="relative">
              {/* 방향 표시 */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-lg">🤖</span> 방향: <span className="text-lg">{getDirectionIndicator()}</span>
              </motion.div>

              {/* 3D 그리드 */}
              <div
                className="relative"
                style={{
                  perspective: '800px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="grid gap-1 p-3 rounded-2xl"
                  style={{
                    gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                    width: `${gridSize.cols * (cellSize + 4) + 24}px`,
                    background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.4)',
                    transform: 'rotateX(5deg)',
                  }}
                >
                  {Array.from({ length: gridSize.rows * gridSize.cols }).map((_, idx) => {
                    const row = Math.floor(idx / gridSize.cols);
                    const col = idx % gridSize.cols;
                    const isStart = row === startPos.row && col === startPos.col;
                    const isGoal = row === goalPos.row && col === goalPos.col;
                    const isRobot = row === robotPos.row && col === robotPos.col;
                    const isObs = isObstacle(row, col);
                    const hasItem = hasCollectible(row, col);
                    const hasCP = hasCheckpoint(row, col);
                    const isCPVisited = isCheckpointVisited(row, col);
                    const isTrail = trail.some(t => t.row === row && t.col === col) && !isRobot;

                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.01 }}
                        style={{ width: cellSize, height: cellSize }}
                        className={`relative flex items-center justify-center rounded-lg transition-all duration-200
                          ${isObs
                            ? 'bg-gradient-to-br from-stone-500 to-stone-700 shadow-[inset_0_-4px_0_0_#44403c,0_4px_8px_rgba(0,0,0,0.3)]'
                            : 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.2)]'}
                          ${isGoal && !isRobot ? 'bg-gradient-to-br from-yellow-500/30 to-amber-600/30 border-2 border-yellow-500/50' : ''}
                          ${isRobot ? 'bg-gradient-to-br from-blue-500/40 to-cyan-500/40 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]' : ''}
                          ${isTrail && !isRobot ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20' : ''}
                          ${hasCP && !isCPVisited ? 'border-2 border-cyan-400/50' : ''}
                          ${hasCP && isCPVisited ? 'border-2 border-green-400/50' : ''}
                        `}
                      >
                        {/* 3D 장애물 */}
                        {isObs && (
                          <div className="relative">
                            <span style={{ fontSize: cellSize * 0.55 }} className="drop-shadow-lg">🪨</span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                          </div>
                        )}

                        {/* 목표 */}
                        {isGoal && !isRobot && (
                          <motion.span
                            style={{ fontSize: cellSize * 0.6 }}
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]"
                          >⭐</motion.span>
                        )}

                        {/* 아이템 */}
                        {hasItem && !isRobot && (
                          <motion.span
                            style={{ fontSize: cellSize * 0.5 }}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
                          >💎</motion.span>
                        )}

                        {/* 체크포인트 */}
                        {hasCP && !isRobot && !isCPVisited && (
                          <motion.span
                            style={{ fontSize: cellSize * 0.5 }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                          >🔷</motion.span>
                        )}
                        {hasCP && !isRobot && isCPVisited && (
                          <span style={{ fontSize: cellSize * 0.5 }} className="opacity-50">✅</span>
                        )}

                        {/* 로봇 */}
                        {isRobot && (
                          <motion.div
                            animate={{
                              scale: isRunning ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ repeat: isRunning ? Infinity : 0, duration: 0.4 }}
                            style={{ fontSize: cellSize * 0.65 }}
                            className="drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                          >
                            🤖
                          </motion.div>
                        )}

                        {/* 시작점 */}
                        {isStart && !isRobot && !isObs && (
                          <span style={{ fontSize: cellSize * 0.45 }} className="opacity-70">🚩</span>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* 범례 */}
              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <span className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">🚩 시작</span>
                <span className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-yellow-300 border border-yellow-500/30">⭐ 목표</span>
                <span className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-stone-300 border border-stone-500/30">🪨 장애물</span>
                {checkpoints.length > 0 && (
                  <span className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-cyan-300 border border-cyan-500/30">🔷 필수</span>
                )}
                {collectibles.length > 0 && (
                  <span className="flex items-center gap-1.5 text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-pink-300 border border-pink-500/30">💎 보너스</span>
                )}
              </div>
            </div>
          </div>

          {/* 힌트/완료 메시지 */}
          <AnimatePresence>
            {showHint && !isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 rounded-xl border border-amber-500/30"
              >
                {failMessage && (
                  <p className="font-bold text-red-400 text-sm mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4" /> {failMessage}
                  </p>
                )}
                <p className="font-bold text-amber-300 text-sm mb-2">💡 힌트</p>
                <ul className="text-amber-200 text-xs space-y-1">
                  {mission.hints?.map((hint, i) => (<li key={i}>• {hint}</li>))}
                  {(!mission.hints || mission.hints.length === 0) && (
                    <li>• 목표 지점(⭐)까지 로봇을 이동시켜보세요!</li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 성공 메시지 */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="mt-3 p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <div>
                  <span className="font-bold text-emerald-300 text-lg">🎉 미션 완료!</span>
                  <p className="text-emerald-400 text-sm">획득 점수: {score}점</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 성공 축하 효과 */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="text-8xl"
            >
              🎊
            </motion.div>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1
                }}
                animate={{
                  opacity: 0,
                  x: (Math.random() - 0.5) * 400,
                  y: (Math.random() - 0.5) * 400,
                  scale: 0
                }}
                transition={{ duration: 1.5, delay: Math.random() * 0.3 }}
                className="absolute text-2xl"
              >
                {['⭐', '🌟', '✨', '💫', '🎉'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 미션별 실행 화면 컴포넌트
const MissionStage: React.FC<{
  mission: MissionType;
  isRunning: boolean;
  charX: number;
  charScale: number;
  charRotation: number;
  charColor: number;
  showBubble: boolean;
  bubbleText: string;
  playingSound: boolean;
}> = ({ mission, isRunning, charX, charScale, charRotation, charColor, showBubble, bubbleText, playingSound }) => {
  const title = mission.title?.toLowerCase() || '';
  const concept = mission.concept?.toLowerCase() || '';

  // 슈팅 게임
  if (title.includes('슈팅') || concept.includes('슈팅')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-purple-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1 + Math.random() * 2, repeat: Infinity }} />
          ))}
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">SCORE: 0</div>
        <motion.div animate={{ x: charX, y: isRunning ? [0, -5, 0] : 0 }} transition={{ y: { repeat: Infinity, duration: 0.3 } }} className="absolute bottom-16 left-8">
          <span className="text-5xl">🚀</span>
        </motion.div>
        {isRunning && (
          <>
            <motion.div initial={{ x: 80, y: 120 }} animate={{ x: 350, opacity: [1, 1, 0] }} transition={{ duration: 0.8 }} className="absolute text-2xl">💫</motion.div>
            <motion.div className="absolute right-20 top-1/2" animate={{ x: [-20, -60], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><span className="text-4xl">👾</span></motion.div>
            <motion.div className="absolute right-40 top-1/3" animate={{ x: [-10, -50], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}><span className="text-3xl">👽</span></motion.div>
          </>
        )}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-400 text-xs">⌨️ 스페이스바로 발사!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">실행 중...</div>}
      </div>
    );
  }

  // 퍼즐/매칭 게임
  if (title.includes('퍼즐') || title.includes('매칭') || concept.includes('매칭')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-emerald-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)' }}>
        <div className="absolute top-4 left-4 text-white font-bold">SCORE: 0</div>
        <div className="grid grid-cols-4 gap-2 absolute top-12 left-1/2 -translate-x-1/2">
          {['🔴', '🔵', '🟢', '🟡', '🔴', '🟡', '🔵', '🟢', '🟢', '🔴', '🟡', '🔵'].map((color, i) => (
            <motion.div key={i} className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-2xl cursor-pointer border-2 border-slate-600" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={isRunning && i < 4 ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}>
              {color}
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-emerald-300 text-xs">🖱️ 같은 색을 클릭!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-400 to-green-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">실행 중...</div>}
      </div>
    );
  }

  // 레이싱/자동차 게임
  if (title.includes('레이싱') || title.includes('자동차') || title.includes('경주')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(180deg, #1f2937 0%, #374151 50%, #4b5563 100%)' }}>
        <div className="absolute inset-x-0 top-0 bottom-0 flex justify-center">
          <div className="w-48 h-full bg-gray-700 relative overflow-hidden">
            <motion.div className="absolute inset-0" animate={isRunning ? { y: [0, 40] } : {}} transition={{ repeat: Infinity, duration: 0.3, ease: 'linear' }}>
              {[...Array(8)].map((_, i) => (<div key={i} className="w-2 h-8 bg-yellow-400 mx-auto mb-8" style={{ marginTop: i === 0 ? '10px' : '0' }} />))}
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ x: charX - 50 }} className="absolute bottom-12 left-1/2 -translate-x-1/2"><span className="text-5xl">🏎️</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">LAP: 1/3</div>
        <div className="absolute top-4 right-4 text-white font-bold">⏱️ 00:00</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">실행 중...</div>}
      </div>
    );
  }

  // 점프/플랫포머 게임
  if (title.includes('점프') || title.includes('플랫폼') || concept.includes('점프')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-cyan-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(180deg, #0891b2 0%, #06b6d4 50%, #67e8f9 100%)' }}>
        <motion.div className="absolute top-4 text-3xl" animate={{ x: [0, 200, 0] }} transition={{ duration: 15, repeat: Infinity }}>☁️</motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-700 to-green-500" />
        <div className="absolute bottom-12 left-20 w-16 h-8 bg-amber-700 rounded" />
        <div className="absolute bottom-20 left-48 w-16 h-8 bg-amber-700 rounded" />
        <div className="absolute bottom-28 right-20 w-16 h-8 bg-amber-700 rounded" />
        <motion.div animate={{ x: charX, y: isRunning ? [-20, 0] : 0 }} transition={{ y: { type: 'spring', stiffness: 300 } }} className="absolute bottom-12"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute bottom-16 right-8"><span className="text-3xl">⭐</span></div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">실행 중...</div>}
      </div>
    );
  }

  // 그리기/펜 미션
  if (title.includes('그리기') || title.includes('도형') || title.includes('별') || concept.includes('펜')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-violet-500/50 relative overflow-hidden shadow-lg flex items-center justify-center" style={{ height: '220px', background: '#1e1e1e' }}>
        <svg width="180" height="180" className="absolute">
          {isRunning && (
            <motion.path d="M90,30 L120,80 L170,90 L130,130 L140,180 L90,150 L40,180 L50,130 L10,90 L60,80 Z" fill="none" stroke="#a855f7" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
          )}
        </svg>
        <motion.div animate={{ rotate: charRotation }} className="absolute"><span className="text-4xl">🐢</span></motion.div>
        <div className="absolute bottom-2 text-gray-500 text-xs">🖊️ 펜으로 도형 그리기</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">그리는 중...</div>}
      </div>
    );
  }

  // 대화/인터랙션 미션
  if (title.includes('대화') || title.includes('말하') || concept.includes('대화')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(180deg, #701a75 0%, #86198f 50%, #a21caf 100%)' }}>
        <motion.div animate={{ x: 60, scale: charScale }} className="absolute bottom-12 left-8"><span className="text-6xl">🐱</span></motion.div>
        <motion.div className="absolute bottom-12 right-12"><span className="text-5xl">🧑</span></motion.div>
        {(showBubble || isRunning) && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-12 left-20 bg-white px-4 py-3 rounded-2xl shadow-xl max-w-[200px]">
            <p className="text-sm font-bold text-gray-800">{bubbleText || '안녕! 이름이 뭐야?'}</p>
            <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
          </motion.div>
        )}
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">대화 중...</div>}
      </div>
    );
  }

  // 음악/소리 미션
  if (title.includes('음악') || title.includes('소리') || title.includes('리듬') || concept.includes('소리')) {
    return (
      <div className="rounded-2xl p-4 mb-4 border-4 border-amber-500/50 relative overflow-hidden shadow-lg" style={{ height: '220px', background: 'linear-gradient(180deg, #78350f 0%, #92400e 50%, #b45309 100%)' }}>
        <div className="flex justify-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {['🥁', '🎹', '🎸', '🎺'].map((inst, i) => (
            <motion.div key={i} className="w-14 h-14 bg-slate-800/60 rounded-xl flex items-center justify-center text-3xl cursor-pointer border-2 border-amber-600" whileHover={{ scale: 1.1 }} animate={isRunning && i === Math.floor(Date.now() / 500) % 4 ? { scale: [1, 1.3, 1], y: [0, -10, 0] } : {}} transition={{ duration: 0.2 }}>
              {inst}
            </motion.div>
          ))}
        </div>
        {isRunning && (
          <motion.div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
            {['🎵', '🎶', '🎵'].map((note, i) => (
              <motion.span key={i} className="text-2xl" animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }} transition={{ duration: 0.5, delay: i * 0.15, repeat: Infinity }}>{note}</motion.span>
            ))}
          </motion.div>
        )}
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">연주 중...</div>}
      </div>
    );
  }

  // 기본 실행 화면 (캐릭터 이동)
  return (
    <div className="rounded-2xl p-4 mb-4 border-4 border-sky-500/50 relative overflow-hidden shadow-lg" style={{ height: '200px', background: 'linear-gradient(180deg, #38bdf8 0%, #0ea5e9 50%, #7dd3fc 100%)' }}>
      <motion.div className="absolute top-4 text-4xl opacity-80" animate={{ x: [0, 300, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>☁️</motion.div>
      <motion.div className="absolute top-12 left-20 text-2xl opacity-60" animate={{ x: [0, 250, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>☁️</motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-700 via-green-500 to-green-400" />
      <div className="absolute bottom-12 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
      <motion.div animate={{ x: charX, scale: charScale, rotate: charRotation }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="absolute bottom-12" style={{ filter: charColor > 0 ? `hue-rotate(${charColor}deg)` : 'none' }}>
        <span className="text-6xl drop-shadow-lg">{isRunning ? '🐱' : '😺'}</span>
        {showBubble && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute -top-14 left-10 bg-white px-4 py-2 rounded-2xl text-sm font-bold shadow-xl whitespace-nowrap border-2 border-slate-200">
            {bubbleText}
            <div className="absolute -bottom-2 left-3 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
          </motion.div>
        )}
        {playingSound && (<motion.div animate={{ scale: [1, 1.3, 1], y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.4 }} className="absolute -top-10 left-10 text-3xl">🎵</motion.div>)}
      </motion.div>
      {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">실행 중...</div>}
    </div>
  );
};

// 일반 블록 코딩 미션 (3D 스타일 업그레이드)
const BlockCodingMission: React.FC<Props> = ({ mission, onComplete }) => {
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
  const [score, setScore] = useState(0);

  // 미션 데이터를 기반으로 블록 자동 생성
  const generateBlocksFromMission = (): string[] => {
    const title = mission.title?.toLowerCase() || '';
    const desc = mission.description?.toLowerCase() || '';
    const concept = mission.concept?.toLowerCase() || '';

    // 블록 템플릿 - 주제별
    const blockTemplates: Record<string, string[]> = {
      // 퍼즐/게임
      '퍼즐': ['🚩 게임 시작', '🎯 클릭 감지하기', '✅ 점수 +10', '🔄 3번 반복하기', '🔊 효과음 재생'],
      '매칭': ['🚩 게임 시작', '🖱️ 블록 클릭했을 때', '🔍 같은 색인지 확인', '✅ 맞으면 점수 +10', '❌ 틀리면 다시 섞기'],
      '게임': ['🚩 게임 시작', '🎮 키보드 입력 감지', '➡️ 캐릭터 이동', '💥 충돌 확인', '🏆 점수 표시'],

      // 이동/회전
      '이동': ['🚩 깃발 클릭', '➡️ 10칸 이동하기', '⬆️ 앞으로 가기', '🔄 오른쪽 90° 회전'],
      '회전': ['🚩 깃발 클릭', '🔄 오른쪽 90° 회전', '↩️ 왼쪽 90° 회전', '🔁 360° 회전'],

      // 반복문
      '반복': ['🚩 깃발 클릭', '🔁 5번 반복하기', '➡️ 10칸 이동', '🔄 72° 회전', '반복 끝'],
      '루프': ['🚩 깃발 클릭', '🔁 무한 반복', '➡️ 1칸 이동', '⏱️ 0.1초 기다리기'],

      // 조건문
      '조건': ['🚩 깃발 클릭', '❓ 만약 벽이면', '🔄 방향 바꾸기', '아니면', '➡️ 앞으로 가기'],
      '만약': ['🚩 깃발 클릭', '❓ 만약 닿으면', '🔊 소리 재생', '✨ 효과 주기'],

      // 변수
      '변수': ['🚩 깃발 클릭', '📊 점수 = 0', '🔁 클릭할 때마다', '📊 점수 +1', '💬 점수 말하기'],
      '점수': ['🚩 게임 시작', '📊 점수 = 0', '✅ 성공하면 +10', '❌ 실패하면 -5', '🏆 결과 표시'],

      // 이벤트
      '클릭': ['🖱️ 클릭했을 때', '✨ 색깔 바꾸기', '📐 크기 키우기', '💬 "안녕!" 말하기'],
      '키보드': ['⌨️ 스페이스 누르면', '🦘 점프하기', '⬅️ 왼쪽 누르면', '➡️ 오른쪽 이동'],

      // 그래픽/애니메이션
      '애니메이션': ['🚩 깃발 클릭', '🔁 무한 반복', '👔 다음 모양', '⏱️ 0.2초 기다리기'],
      '색깔': ['🚩 깃발 클릭', '🎨 색깔 효과 25', '⏱️ 0.5초 기다리기', '🔁 계속 반복'],
      '효과': ['🚩 깃발 클릭', '✨ 유령 효과', '🔊 소리 재생', '💫 회전 효과'],

      // 대화/입력
      '대화': ['🚩 깃발 클릭', '❓ "이름이 뭐야?" 묻기', '💬 "안녕, " + 대답', '⏱️ 2초 기다리기'],
      '입력': ['🚩 깃발 클릭', '❓ 숫자 입력받기', '🔢 계산하기', '💬 결과 말하기'],

      // 그리기
      '그리기': ['🚩 깃발 클릭', '🖊️ 펜 내리기', '🔁 4번 반복', '➡️ 100 이동', '🔄 90° 회전'],
      '도형': ['🚩 깃발 클릭', '🖊️ 펜 내리기', '🔁 반복하기', '➡️ 이동', '🔄 회전', '🖊️ 펜 올리기'],
    };

    // 기본 블록
    const defaultBlocks = [
      '🚩 깃발 클릭했을 때',
      '➡️ 10칸 이동하기',
      '🔄 오른쪽 90° 회전',
      '💬 "안녕!" 말하기',
      '🔁 3번 반복하기'
    ];

    // 미션 키워드로 적절한 블록 찾기
    for (const [keyword, blocks] of Object.entries(blockTemplates)) {
      if (title.includes(keyword) || desc.includes(keyword) || concept.includes(keyword)) {
        return blocks;
      }
    }

    return defaultBlocks;
  };

  useEffect(() => {
    let blocks: string[];
    if (mission.blocks && mission.blocks.length > 0) {
      blocks = [...mission.blocks];
    } else {
      // 블록이 없으면 자동 생성
      blocks = generateBlocksFromMission();
    }
    const shuffled = blocks.sort(() => Math.random() - 0.5);
    setAvailableBlocks(shuffled);
    setAssembledBlocks([]);
  }, [mission]);

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
    await runAnimation();

    // 미션에 정해진 정답이 있는 경우
    if (mission.blocks && mission.blocks.length > 0) {
      const correctAnswer = (mission as any).correctBlocks || mission.blocks;
      if (assembledBlocks.length < correctAnswer.length) {
        setShowHint(true);
        return;
      }
      const isCorrect = correctAnswer.every((block: string, index: number) => assembledBlocks[index] === block);
      if (isCorrect) {
        setScore(mission.exp || 100);
        setIsComplete(true);
        setTimeout(() => onComplete(true), 1500);
      } else {
        setShowHint(true);
      }
    } else {
      // 자동 생성된 블록의 경우: 첫 번째 블록이 시작 블록이고 3개 이상 배치하면 성공
      const firstBlock = assembledBlocks[0]?.toLowerCase() || '';
      const isStartBlock = firstBlock.includes('시작') || firstBlock.includes('깃발') || firstBlock.includes('클릭');

      if (assembledBlocks.length >= 3 && isStartBlock) {
        setScore(mission.exp || 100);
        setIsComplete(true);
        setTimeout(() => onComplete(true), 1500);
      } else if (assembledBlocks.length < 3) {
        setShowHint(true);
      } else if (!isStartBlock) {
        setShowHint(true);
      }
    }
  };

  const reset = () => {
    let blocks: string[];
    if (mission.blocks && mission.blocks.length > 0) {
      blocks = [...mission.blocks];
    } else {
      blocks = generateBlocksFromMission();
    }
    const shuffled = blocks.sort(() => Math.random() - 0.5);
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
    setScore(0);
  };

  const getBlockColor3D = (block: string): string => {
    const lower = block.toLowerCase();
    if (lower.includes('깃발') || lower.includes('클릭') || lower.includes('시작'))
      return 'bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-[0_4px_0_0_#a16207]';
    if (lower.includes('이동') || lower.includes('앞으로') || lower.includes('회전'))
      return 'bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_0_0_#1d4ed8]';
    if (lower.includes('반복') || lower.includes('번'))
      return 'bg-gradient-to-b from-orange-400 to-orange-600 shadow-[0_4px_0_0_#c2410c]';
    if (lower.includes('만약') || lower.includes('조건'))
      return 'bg-gradient-to-b from-amber-400 to-amber-600 shadow-[0_4px_0_0_#b45309]';
    if (lower.includes('말하') || lower.includes('묻') || lower.includes('소리'))
      return 'bg-gradient-to-b from-purple-400 to-purple-600 shadow-[0_4px_0_0_#7e22ce]';
    if (lower.includes('펜') || lower.includes('색') || lower.includes('크기'))
      return 'bg-gradient-to-b from-green-400 to-green-600 shadow-[0_4px_0_0_#15803d]';
    if (lower.includes('변수') || lower.includes('값') || lower.includes('%'))
      return 'bg-gradient-to-b from-red-400 to-red-600 shadow-[0_4px_0_0_#b91c1c]';
    return 'bg-gradient-to-b from-blue-400 to-blue-600 shadow-[0_4px_0_0_#1d4ed8]';
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-6 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-3xl">🧱</span> {mission.title}
        </h3>
        <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="font-bold text-yellow-300">{mission.exp} XP</span>
        </div>
      </div>

      <p className="text-slate-300 text-base mb-4">{mission.description}</p>

      {mission.concept && (
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-violet-900/50 to-purple-900/50 text-violet-300 rounded-xl font-medium mb-4 border border-violet-500/30">
          📚 학습 개념: {mission.concept}
        </div>
      )}

      {/* 미션별 실행 화면 */}
      <MissionStage
        mission={mission}
        isRunning={isRunning}
        charX={charX}
        charScale={charScale}
        charRotation={charRotation}
        charColor={charColor}
        showBubble={showBubble}
        bubbleText={bubbleText}
        playingSound={playingSound}
      />

      <div className="bg-blue-900/30 rounded-xl p-4 mb-4 border border-blue-500/30">
        <p className="text-blue-300 text-sm font-medium flex items-center gap-2">
          <Zap className="w-5 h-5" />
          <strong>블록을 클릭하거나 드래그</strong>해서 코드 영역에 순서대로 배치하세요!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* 블록 상자 */}
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 border-2 border-dashed border-slate-500 shadow-lg">
          <p className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">🧱</span>
            블록 상자
          </p>
          <div className="flex flex-col gap-2 min-h-[160px]">
            {availableBlocks.length > 0 ? (
              availableBlocks.map((block, i) => (
                <motion.div
                  key={`avail-${i}`}
                  draggable
                  onDragStart={() => handleDragStart(block)}
                  onDragEnd={handleDragEnd}
                  onClick={() => addBlock(block)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98, y: 2 }}
                  className={`${getBlockColor3D(block)} text-white px-4 py-3 rounded-xl font-bold text-base cursor-pointer flex items-center gap-2 transition-all border-t border-white/20 hover:brightness-110`}
                >
                  <GripVertical className="w-5 h-5 opacity-60" />
                  <span className="flex-1">{block}</span>
                  <span className="text-xs bg-black/20 px-2 py-1 rounded-lg">클릭!</span>
                </motion.div>
              ))
            ) : (
              <div className="flex items-center justify-center h-28 text-emerald-400 text-base font-bold">
                <CheckCircle className="w-6 h-6 mr-2" /> 모든 블록을 배치했어요!
              </div>
            )}
          </div>
        </div>

        {/* 코드 영역 */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`rounded-2xl p-4 min-h-[200px] transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] ${
            isDragging
              ? 'bg-gradient-to-b from-violet-600/40 to-purple-600/40 border-2 border-violet-400 border-dashed'
              : 'bg-gradient-to-b from-violet-900/30 to-purple-900/30 border-2 border-violet-500/50'
          }`}
        >
          <p className="text-base font-bold text-violet-300 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shadow-lg">📝</span>
            코드 영역
          </p>
          {assembledBlocks.length === 0 ? (
            <div className={`flex flex-col items-center justify-center h-36 rounded-xl border-2 border-dashed transition-all ${isDragging ? 'border-violet-400 bg-violet-500/20' : 'border-slate-500'}`}>
              <p className="text-slate-400 text-base font-medium mb-2">{isDragging ? '👇 여기에 놓으세요!' : '블록을 클릭하거나 드래그하세요'}</p>
              <p className="text-slate-500 text-sm">시작 블록부터 순서대로!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={`assembled-${index}`}
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className={`${getBlockColor3D(block)} text-white px-4 py-3 rounded-xl font-bold text-base flex items-center justify-between border-t border-white/20`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center text-sm font-bold">{index + 1}</span>
                    {block}
                  </span>
                  <button onClick={() => removeBlock(block)} className="text-white/70 hover:text-white ml-2 p-2 hover:bg-black/20 rounded-lg transition-colors">
                    <XCircle className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
              {isDragging && (
                <div className="h-14 border-2 border-dashed border-violet-400 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-300 text-sm">
                  👇 여기에 추가
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showHint && !isComplete && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-4 rounded-xl border border-amber-500/30 mb-4">
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
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-4 flex items-center gap-3"
        >
          <CheckCircle className="w-7 h-7 text-emerald-400" />
          <div>
            <span className="font-bold text-emerald-300 text-lg">🎉 완벽해요!</span>
            <p className="text-emerald-400 text-sm">+{score} XP 획득!</p>
          </div>
        </motion.div>
      )}

      <div className="flex gap-3">
        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-5 py-3 bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold text-base rounded-xl shadow-[0_4px_0_0_#374151] hover:shadow-[0_2px_0_0_#374151] hover:translate-y-[2px] transition-all flex items-center gap-2 border-t border-white/10"
        >
          <RotateCcw className="w-5 h-5" />초기화
        </motion.button>
        <motion.button
          onClick={checkAnswer}
          disabled={assembledBlocks.length === 0 || isComplete || isRunning}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 px-5 py-3 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold text-lg rounded-xl shadow-[0_4px_0_0_#15803d] hover:shadow-[0_2px_0_0_#15803d] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-t border-white/20"
        >
          <Play className="w-5 h-5" />🚩 실행하기
        </motion.button>
      </div>
    </div>
  );
};

export default GeneralBlockMission;

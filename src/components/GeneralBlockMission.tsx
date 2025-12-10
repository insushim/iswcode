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

  // 그리드 셀 크기 계산 - 실행창이 커져서 셀도 더 크게
  const cellSize = Math.min(60, Math.floor(420 / gridSize.cols));

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

      {/* 메인 레이아웃 - 엔트리 스타일: 좌측 좁게(블록+코드), 우측 넓게(실행창) */}
      <div className="flex flex-col lg:flex-row gap-4 relative z-10">
        {/* 왼쪽: 블록 상자 + 내 코드 (좁은 세로 영역) */}
        <div className="lg:w-[280px] xl:w-[320px] flex flex-col gap-3 lg:max-h-[600px]">
          {/* 블록 상자 - 3D 스타일 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3 border border-slate-600 shadow-lg">
            <p className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-7 h-7 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg text-sm">🧱</span>
              블록 상자
            </p>
            <div className="flex flex-col gap-1.5 max-h-[180px] overflow-y-auto custom-scrollbar pr-1">
              {availableBlockTypes.map((block, i) => (
                <motion.button
                  key={`block-${i}`}
                  onClick={() => addBlock(block)}
                  whileHover={{ scale: 1.02, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isRunning}
                  className={`${getBlockStyle3D(block)} text-white px-2.5 py-1.5 rounded-lg font-bold text-xs transition-all disabled:opacity-50 flex items-center gap-1.5 border-t border-white/20 w-full text-left`}
                >
                  <span className="text-sm">{getBlockIcon(block)}</span>
                  <span className="truncate">{block}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* 내 코드 - 3D 스타일 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-3 border border-violet-500/40 flex-1 min-h-[200px] overflow-hidden flex flex-col shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-bold text-violet-300 flex items-center gap-2">
                <span className="w-7 h-7 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shadow-lg text-sm">📝</span>
                내 코드
              </p>
              <span className="text-xs bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full">{assembledBlocks.length}개</span>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
              {assembledBlocks.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 text-xs">
                  <Zap className="w-6 h-6 mb-1 opacity-30" />
                  <p>블록을 클릭해서 추가!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {assembledBlocks.map((block, index) => (
                    <motion.div
                      key={`code-${index}`}
                      initial={{ opacity: 0, x: -10, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      className={`${getBlockStyle3D(block)} text-white px-2 py-1.5 rounded-lg text-xs flex items-center gap-1.5 group relative overflow-hidden
                        ${executionStep === index ? 'ring-2 ring-yellow-400 ring-offset-1 ring-offset-slate-900' : ''}`}
                    >
                      {executionStep === index && (
                        <motion.div
                          className="absolute inset-0 bg-yellow-400/20"
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ repeat: Infinity, duration: 0.5 }}
                        />
                      )}
                      <span className="w-5 h-5 bg-black/30 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0 border border-white/10">
                        {index + 1}
                      </span>
                      <span className="text-sm">{getBlockIcon(block)}</span>
                      <span className="flex-1 truncate font-medium text-[11px]">{block}</span>
                      <div className="hidden group-hover:flex items-center gap-0.5 bg-black/30 rounded p-0.5">
                        <button onClick={() => moveBlockUp(index)} className="p-0.5 hover:bg-white/20 rounded" disabled={isRunning}>
                          <span className="text-[10px]">▲</span>
                        </button>
                        <button onClick={() => moveBlockDown(index)} className="p-0.5 hover:bg-white/20 rounded" disabled={isRunning}>
                          <span className="text-[10px]">▼</span>
                        </button>
                        <button onClick={() => removeBlock(index)} className="p-0.5 hover:bg-red-500/50 rounded" disabled={isRunning}>
                          <XCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 버튼들 - 3D */}
          <div className="flex gap-2">
            <motion.button
              onClick={reset}
              disabled={isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-2.5 bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold rounded-xl shadow-[0_3px_0_0_#374151] hover:shadow-[0_1px_0_0_#374151] hover:translate-y-[2px] transition-all flex items-center gap-1.5 disabled:opacity-50 text-xs border-t border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />초기화
            </motion.button>
            <motion.button
              onClick={runCode}
              disabled={assembledBlocks.length === 0 || isComplete || isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-3 py-2.5 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold rounded-xl shadow-[0_3px_0_0_#15803d] hover:shadow-[0_1px_0_0_#15803d] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed text-xs border-t border-white/20"
            >
              <Play className="w-4 h-4" />{isRunning ? '실행 중...' : '▶ 실행'}
            </motion.button>
          </div>
        </div>

        {/* 오른쪽: 실행창 (넓은 영역) - 엔트리 스타일 */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 border-slate-600 p-6 flex-1 flex items-center justify-center min-h-[500px] shadow-[inset_0_4px_20px_rgba(0,0,0,0.4)] relative overflow-hidden">
            {/* 실행창 상단 바 */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-t-2xl flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-slate-300 text-sm font-medium">🎮 실행 화면</span>
            </div>
            {/* 조명 효과 */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-2xl"></div>

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
  const desc = mission.description?.toLowerCase() || '';

  // 슈팅 게임
  if (title.includes('슈팅') || concept.includes('슈팅')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-purple-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)' }}>
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
      <div className="rounded-2xl p-4 border-4 border-emerald-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)' }}>
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
      <div className="rounded-2xl p-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 50%, #4b5563 100%)' }}>
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
      <div className="rounded-2xl p-4 border-4 border-cyan-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #0891b2 0%, #06b6d4 50%, #67e8f9 100%)' }}>
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
      <div className="rounded-2xl p-4 border-4 border-violet-500/50 relative overflow-hidden shadow-lg flex items-center justify-center h-full min-h-[320px]" style={{ background: '#1e1e1e' }}>
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
      <div className="rounded-2xl p-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #701a75 0%, #86198f 50%, #a21caf 100%)' }}>
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
      <div className="rounded-2xl p-4 border-4 border-amber-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #78350f 0%, #92400e 50%, #b45309 100%)' }}>
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

  // 키보드 조종/방향키 미션
  if (title.includes('키보드') || title.includes('조종') || title.includes('화살표') || desc.includes('화살표')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-indigo-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <div className="absolute top-4 right-4 flex flex-col items-center gap-1">
          <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl border-2 border-slate-500 shadow-lg">⬆️</div>
          <div className="flex gap-1">
            <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl border-2 border-slate-500 shadow-lg">⬅️</div>
            <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl border-2 border-slate-500 shadow-lg">⬇️</div>
            <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-xl border-2 border-slate-500 shadow-lg">➡️</div>
          </div>
        </div>
        <motion.div animate={{ x: charX }} className="absolute bottom-12 left-8">
          <span className="text-6xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute bottom-2 left-4 text-gray-400 text-xs">⌨️ 방향키로 캐릭터를 조종하세요!</div>
        {isRunning && <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">조종 중...</div>}
      </div>
    );
  }

  // 마우스 따라가기/마우스 포인터 미션
  if (title.includes('마우스') || title.includes('따라') || title.includes('드래그') || desc.includes('마우스')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-rose-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #4c1d95 0%, #6d28d9 50%, #7c3aed 100%)' }}>
        <motion.div className="absolute w-6 h-6 pointer-events-none" animate={{ x: [50, 200, 150, 100, 50], y: [40, 80, 120, 60, 40] }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
          <span className="text-2xl">🖱️</span>
        </motion.div>
        <motion.div animate={{ x: isRunning ? [80, 180, 130, 100, 80] : 80, y: isRunning ? [100, 130, 160, 120, 100] : 100 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="absolute">
          <span className="text-5xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute bottom-2 left-4 text-gray-300 text-xs">🖱️ 마우스를 따라다녀요!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">따라가는 중...</div>}
      </div>
    );
  }

  // 복제 미션
  if (title.includes('복제') || desc.includes('복제')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-teal-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #134e4a 0%, #0f766e 50%, #14b8a6 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div className="absolute bottom-14 left-8"><span className="text-5xl">🐱</span></motion.div>
        {isRunning && (
          <>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="absolute bottom-14 left-24"><span className="text-4xl">🐱</span></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-14 left-40"><span className="text-4xl">🐱</span></motion.div>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="absolute bottom-14 left-56"><span className="text-4xl">🐱</span></motion.div>
          </>
        )}
        <div className="absolute bottom-2 left-4 text-teal-300 text-xs">🐑 클릭하면 복제돼요!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">복제 중...</div>}
      </div>
    );
  }

  // 좌표 이동/위치 미션
  if (title.includes('좌표') || title.includes('위치') || desc.includes('좌표') || desc.includes('x:') || desc.includes('y:')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-blue-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: '#1e293b' }}>
        {/* 좌표 그리드 */}
        <div className="absolute inset-4 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div key={`h-${i}`} className="absolute w-full h-px bg-blue-400" style={{ top: `${20 + i * 20}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`v-${i}`} className="absolute h-full w-px bg-blue-400" style={{ left: `${i * 20}%` }} />
          ))}
        </div>
        <div className="absolute left-2 bottom-12 text-blue-400 text-xs">x</div>
        <div className="absolute left-12 top-2 text-blue-400 text-xs">y</div>
        <motion.div animate={{ x: isRunning ? [80, 200] : charX, y: isRunning ? [100, 50] : 100 }} transition={{ duration: 1 }} className="absolute">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-slate-800/80 px-3 py-1 rounded-lg text-blue-300 text-sm font-mono">x: {isRunning ? 100 : Math.round(charX)}, y: 50</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">이동 중...</div>}
      </div>
    );
  }

  // 크기 변환 미션
  if (title.includes('크기') || desc.includes('크기') || concept.includes('크기')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-lime-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #365314 0%, #4d7c0f 50%, #65a30d 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-800 to-green-700" />
        <motion.div animate={{ scale: isRunning ? [1, 1.5, 0.5, 1.2, 1] : charScale }} transition={{ duration: 2 }} className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <span className="text-6xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-lime-800/80 px-3 py-1 rounded-lg text-lime-300 text-sm">크기: {Math.round(charScale * 100)}%</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-lime-400 to-green-400 text-lime-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">크기 변환 중...</div>}
      </div>
    );
  }

  // 회전 미션
  if (title.includes('회전') || desc.includes('회전') || desc.includes('360')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-fuchsia-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #701a75 0%, #a21caf 50%, #c026d3 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-purple-800 to-purple-700" />
        <motion.div animate={{ rotate: isRunning ? [0, 360] : charRotation }} transition={{ duration: 1, repeat: isRunning ? Infinity : 0, ease: 'linear' }} className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <span className="text-6xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-fuchsia-800/80 px-3 py-1 rounded-lg text-fuchsia-300 text-sm">각도: {charRotation}°</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-fuchsia-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">회전 중...</div>}
      </div>
    );
  }

  // 숨기기/보이기 미션
  if (title.includes('숨') || title.includes('보이') || desc.includes('숨기') || desc.includes('보이기')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-slate-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e293b 0%, #334155 50%, #475569 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div animate={{ opacity: isRunning ? [1, 0, 1, 0, 1] : 1 }} transition={{ duration: 3 }} className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <span className="text-6xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-slate-700/80 px-3 py-1 rounded-lg text-slate-300 text-sm flex items-center gap-2">
          <span>👁️</span> 숨바꼭질!
        </div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-slate-400 to-gray-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">숨바꼭질 중...</div>}
      </div>
    );
  }

  // 배경 바꾸기 미션
  if (title.includes('배경') || desc.includes('배경')) {
    const [bgIndex, setBgIndex] = React.useState(0);
    const backgrounds = [
      'linear-gradient(180deg, #38bdf8 0%, #7dd3fc 100%)',
      'linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)',
      'linear-gradient(180deg, #fbbf24 0%, #f97316 100%)',
      'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)'
    ];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setBgIndex(i => (i + 1) % 4), 800);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-sky-500/50 relative overflow-hidden shadow-lg transition-all duration-500 h-full min-h-[320px]" style={{ background: isRunning ? backgrounds[bgIndex] : backgrounds[0] }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-700 to-green-500" />
        <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <span className="text-6xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-black/30 px-3 py-1 rounded-lg text-white text-sm">🖼️ 배경 {bgIndex + 1}</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-sky-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">배경 변경 중...</div>}
      </div>
    );
  }

  // 애니메이션/모양 바꾸기 미션
  if (title.includes('애니메이션') || title.includes('모양') || desc.includes('걷는') || concept.includes('모양')) {
    const catFaces = ['😺', '😸', '😹', '😻', '🙀', '😿'];
    const [faceIndex, setFaceIndex] = React.useState(0);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setFaceIndex(i => (i + 1) % catFaces.length), 200);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #fb923c 0%, #f97316 50%, #ea580c 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-700 to-amber-600" />
        <motion.div animate={{ x: isRunning ? [80, 280] : 80 }} transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }} className="absolute bottom-14">
          <span className="text-6xl drop-shadow-lg">{isRunning ? catFaces[faceIndex] : '🐱'}</span>
        </motion.div>
        <div className="absolute top-4 left-4 bg-orange-800/80 px-3 py-1 rounded-lg text-orange-200 text-sm">👔 모양 바꾸기!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-amber-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">애니메이션 중...</div>}
      </div>
    );
  }

  // 랜덤 위치 미션
  if (title.includes('랜덤') || title.includes('무작위') || desc.includes('무작위')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-yellow-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #854d0e 0%, #a16207 50%, #ca8a04 100%)' }}>
        <motion.div animate={isRunning ? { x: [80, 200, 50, 250, 120], y: [100, 40, 150, 80, 100] } : { x: charX, y: 100 }} transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }} className="absolute">
          <span className="text-5xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute bottom-2 left-4 text-yellow-300 text-xs">🎲 클릭하면 랜덤 위치로!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">순간이동!</div>}
      </div>
    );
  }

  // 벽 감지/충돌 미션
  if (title.includes('벽') || title.includes('감지') || title.includes('부딪') || desc.includes('벽')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)' }}>
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-slate-600" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-slate-600" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div animate={isRunning ? { x: [80, 280, 80], scaleX: [1, -1, 1] } : { x: charX }} transition={{ duration: 2, repeat: isRunning ? Infinity : 0, ease: 'linear' }} className="absolute bottom-14">
          <span className="text-5xl drop-shadow-lg">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-8 bg-red-800/80 px-3 py-1 rounded-lg text-red-200 text-sm">🧱 벽에 닿으면 방향 전환!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">감지 중...</div>}
      </div>
    );
  }

  // 점수/변수 미션
  if (title.includes('점수') || title.includes('변수') || desc.includes('점수') || concept.includes('변수')) {
    const [score, setScore] = React.useState(0);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setScore(s => s + 10), 500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-emerald-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #064e3b 0%, #065f46 50%, #047857 100%)' }}>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 px-6 py-2 rounded-xl">
          <span className="text-2xl font-bold text-yellow-300">점수: {score}</span>
        </div>
        <motion.div className="absolute bottom-14 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        <motion.div animate={isRunning ? { y: [-20, 0], opacity: [0, 1, 0] } : {}} transition={{ duration: 0.5, repeat: isRunning ? Infinity : 0 }} className="absolute top-20 left-1/2 -translate-x-1/2 text-yellow-300 font-bold text-lg">
          {isRunning && '+10'}
        </motion.div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-400 to-green-400 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">점수 획득!</div>}
      </div>
    );
  }

  // 자기소개/인사 미션
  if (title.includes('자기소개') || title.includes('소개') || desc.includes('소개')) {
    const messages = ['안녕!', '나는 코딩 고양이야!', '코딩이 재미있어!', '같이 배우자!'];
    const [msgIndex, setMsgIndex] = React.useState(0);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setMsgIndex(i => (i + 1) % messages.length), 1500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #831843 0%, #9d174d 50%, #be185d 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-pink-800 to-pink-700" />
        <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2"><span className="text-6xl">🐱</span></motion.div>
        {isRunning && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={msgIndex} className="absolute top-16 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-2xl shadow-xl">
            <p className="text-base font-bold text-gray-800">{messages[msgIndex]}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white" />
          </motion.div>
        )}
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">자기소개 중...</div>}
      </div>
    );
  }

  // 플랫포머 게임
  if (title.includes('플랫포머') || title.includes('점프 물리') || desc.includes('점프') && desc.includes('중력')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-emerald-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #065f46 0%, #047857 50%, #10b981 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-800 to-amber-600" />
        {/* 플랫폼들 */}
        <div className="absolute bottom-16 left-8 w-20 h-4 bg-amber-700 rounded" />
        <div className="absolute bottom-28 left-32 w-24 h-4 bg-amber-700 rounded" />
        <div className="absolute bottom-40 right-20 w-20 h-4 bg-amber-700 rounded" />
        <div className="absolute bottom-24 right-8 w-16 h-4 bg-amber-700 rounded" />
        <motion.div animate={isRunning ? { x: [30, 80, 140, 200], y: [0, -40, -80, -40] } : { x: 30 }} transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }} className="absolute bottom-20">
          <span className="text-5xl">🏃</span>
        </motion.div>
        <div className="absolute top-20 right-16"><span className="text-3xl">⭐</span></div>
        <div className="absolute top-4 left-4 text-white font-bold bg-black/30 px-3 py-1 rounded">🎮 플랫포머</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-400 to-green-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">점프!</div>}
      </div>
    );
  }

  // 미로 탈출 게임
  if (title.includes('미로') || desc.includes('미로')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-violet-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: '#1e1b4b' }}>
        {/* 미로 벽들 */}
        <div className="absolute inset-4">
          <div className="absolute top-0 left-0 w-full h-2 bg-violet-600" />
          <div className="absolute bottom-0 left-0 w-3/4 h-2 bg-violet-600" />
          <div className="absolute top-0 left-0 w-2 h-full bg-violet-600" />
          <div className="absolute top-0 right-0 w-2 h-3/4 bg-violet-600" />
          <div className="absolute top-1/3 left-1/4 w-1/3 h-2 bg-violet-600" />
          <div className="absolute top-1/2 right-1/4 w-1/4 h-2 bg-violet-600" />
          <div className="absolute top-1/4 left-1/2 w-2 h-1/3 bg-violet-600" />
        </div>
        <motion.div animate={isRunning ? { x: [20, 60, 60, 120, 120, 200], y: [20, 20, 60, 60, 100, 100] } : { x: 20, y: 20 }} transition={{ duration: 3, repeat: isRunning ? Infinity : 0 }} className="absolute">
          <span className="text-4xl">🐱</span>
        </motion.div>
        <div className="absolute bottom-6 right-6"><span className="text-3xl">🚪</span></div>
        <div className="absolute top-4 left-4 text-violet-300 font-bold">🏃 미로 탈출!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">탈출 중...</div>}
      </div>
    );
  }

  // 농장 시뮬레이션
  if (title.includes('농장') || desc.includes('작물') || desc.includes('농장')) {
    const [growthStage, setGrowthStage] = React.useState(0);
    const crops = ['🌱', '🌿', '🌾', '🌽'];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setGrowthStage(s => (s + 1) % crops.length), 600);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-lime-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #84cc16 0%, #65a30d 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-amber-800 to-amber-700" />
        {/* 밭 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          {[0, 1, 2, 3, 4].map(i => (
            <motion.div key={i} className="w-12 h-12 bg-amber-900 rounded flex items-center justify-center text-2xl" animate={isRunning ? { scale: [1, 1.1, 1] } : {}} transition={{ delay: i * 0.2, repeat: Infinity, duration: 0.6 }}>
              {isRunning ? crops[Math.min(growthStage, crops.length - 1)] : '🌱'}
            </motion.div>
          ))}
        </div>
        <motion.div className="absolute bottom-20 left-8"><span className="text-5xl">👨‍🌾</span></motion.div>
        <div className="absolute top-4 text-4xl">☀️</div>
        <div className="absolute top-4 left-16 text-white font-bold bg-green-800/50 px-3 py-1 rounded">🌾 농장</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-lime-400 to-green-400 text-lime-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">성장 중!</div>}
      </div>
    );
  }

  // 타워 디펜스
  if (title.includes('타워') || title.includes('디펜스') || desc.includes('적이') && desc.includes('이동')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600" />
        {/* 타워 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-4xl">🗼</div>
        {/* 적들 */}
        {isRunning && (
          <>
            <motion.div initial={{ x: -20 }} animate={{ x: 140 }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-10 text-3xl">👾</motion.div>
            <motion.div initial={{ x: -20 }} animate={{ x: 140 }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-10 text-3xl">👽</motion.div>
            <motion.div initial={{ x: -20 }} animate={{ x: 140 }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} className="absolute bottom-10 text-3xl">🤖</motion.div>
          </>
        )}
        <div className="absolute top-4 right-4 text-red-400 font-bold">❤️ 체력: 100</div>
        <div className="absolute top-4 left-4 text-white font-bold">🏰 타워 디펜스</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-red-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">방어 중!</div>}
      </div>
    );
  }

  // 타이머 게임
  if (title.includes('타이머') || title.includes('카운트다운') || desc.includes('초 안에')) {
    const [time, setTime] = React.useState(10);
    React.useEffect(() => {
      if (isRunning && time > 0) {
        const interval = setInterval(() => setTime(t => Math.max(0, t - 1)), 1000);
        return () => clearInterval(interval);
      }
    }, [isRunning, time]);
    return (
      <div className="rounded-2xl p-4 border-4 border-cyan-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #0e7490 0%, #06b6d4 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div animate={isRunning ? { scale: [1, 1.1, 1] } : {}} transition={{ repeat: Infinity, duration: 1 }} className="text-8xl font-bold text-white drop-shadow-lg">{isRunning ? time : '10'}</motion.div>
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">⏱️ 타이머</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">카운트다운!</div>}
      </div>
    );
  }

  // 레벨 시스템
  if (title.includes('레벨') || desc.includes('레벨')) {
    const [level, setLevel] = React.useState(1);
    const [exp, setExp] = React.useState(0);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => {
          setExp(e => {
            if (e >= 100) { setLevel(l => l + 1); return 0; }
            return e + 20;
          });
        }, 400);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-yellow-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #78350f 0%, #a16207 100%)' }}>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-6xl font-bold text-yellow-300 drop-shadow-lg">Lv.{level}</div>
          <div className="w-48 h-4 bg-slate-700 rounded-full mt-4 overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400" style={{ width: `${exp}%` }} />
          </div>
          <div className="text-yellow-200 mt-2 text-sm">EXP: {exp}/100</div>
        </div>
        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">레벨업!</div>}
      </div>
    );
  }

  // 신호등 시스템
  if (title.includes('신호등') || desc.includes('빨강') && desc.includes('초록')) {
    const [light, setLight] = React.useState(0);
    const lights = ['🔴', '🟡', '🟢'];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setLight(l => (l + 1) % 3), 1000);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-slate-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e293b 0%, #334155 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-slate-800 p-4 rounded-xl flex flex-col gap-2">
          {lights.map((l, i) => (
            <div key={i} className={`text-4xl ${(isRunning ? light : 2) === i ? 'opacity-100' : 'opacity-30'} transition-opacity`}>{l}</div>
          ))}
        </div>
        <motion.div animate={{ x: (isRunning && light === 2) ? [80, 250] : 80 }} transition={{ duration: 2 }} className="absolute bottom-14">
          <span className="text-4xl">🚗</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🚦 신호등</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-slate-400 to-gray-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">{lights[light]}</div>}
      </div>
    );
  }

  // 체력 시스템
  if (title.includes('체력') || desc.includes('체력')) {
    const [hp, setHp] = React.useState(100);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setHp(h => h <= 30 ? 100 : h - 10), 500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #7f1d1d 0%, #991b1b 100%)' }}>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
          <div className="flex gap-1 mb-2">
            {[...Array(10)].map((_, i) => (
              <span key={i} className={`text-2xl ${i < hp / 10 ? '' : 'opacity-30'}`}>❤️</span>
            ))}
          </div>
          <div className="text-white font-bold">HP: {hp}/100</div>
        </div>
        <motion.div animate={hp <= 30 ? { x: [0, -5, 5, 0] } : {}} transition={{ repeat: Infinity, duration: 0.2 }} className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className={`text-5xl ${hp <= 30 ? 'hue-rotate-[340deg]' : ''}`} style={{ filter: hp <= 30 ? 'hue-rotate(-30deg) saturate(2)' : 'none' }}>🐱</span>
        </motion.div>
        {isRunning && hp <= 30 && <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">위험!</div>}
      </div>
    );
  }

  // 아이템 수집
  if (title.includes('아이템') || title.includes('수집') || desc.includes('아이템')) {
    const [items, setItems] = React.useState(0);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setItems(i => (i + 1) % 6), 500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-amber-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #78350f 0%, #92400e 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-amber-900 to-amber-800" />
        <div className="absolute top-4 left-4 text-yellow-300 font-bold text-lg">💎 {items}/5</div>
        <div className="absolute top-12 flex gap-8 left-1/2 -translate-x-1/2">
          {['💎', '⭐', '🪙', '💰', '🏆'].map((item, i) => (
            <motion.span key={i} className={`text-3xl ${i < items ? 'opacity-30 scale-75' : ''}`} animate={isRunning && i === items ? { y: [0, -20, 0], scale: [1, 1.3, 1] } : {}} transition={{ duration: 0.3 }}>
              {item}
            </motion.span>
          ))}
        </div>
        <motion.div animate={isRunning ? { x: [40, 80, 120, 160, 200, 240] } : { x: 40 }} transition={{ duration: 2.5 }} className="absolute bottom-14">
          <span className="text-5xl">🐱</span>
        </motion.div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">수집 중!</div>}
      </div>
    );
  }

  // 씬/장면 전환
  if (title.includes('씬') || title.includes('장면') || desc.includes('전환')) {
    const [scene, setScene] = React.useState(0);
    const scenes = [
      { bg: 'linear-gradient(180deg, #38bdf8 0%, #7dd3fc 100%)', emoji: '🏠' },
      { bg: 'linear-gradient(180deg, #22c55e 0%, #86efac 100%)', emoji: '🌲' },
      { bg: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)', emoji: '🌙' },
    ];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setScene(s => (s + 1) % scenes.length), 1000);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.3 }} className="rounded-2xl p-4 border-4 border-indigo-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: isRunning ? scenes[scene].bg : scenes[0].bg }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-800 to-green-600" />
        <div className="absolute top-4 right-4 text-5xl">{isRunning ? scenes[scene].emoji : '🏠'}</div>
        <motion.div className="absolute bottom-14 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold bg-black/30 px-3 py-1 rounded">🎬 씬 {scene + 1}</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">전환!</div>}
      </motion.div>
    );
  }

  // 별/도형 그리기 (펜 확장)
  if (title.includes('별') || title.includes('육각형') || title.includes('나선') || title.includes('꽃') || title.includes('패턴')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-violet-500/50 relative overflow-hidden shadow-lg flex items-center justify-center" style={{ background: '#1a1a2e' }}>
        <svg width="200" height="180" className="absolute">
          {isRunning && (
            <>
              {title.includes('별') && <motion.path d="M100,10 L120,70 L180,70 L130,110 L150,170 L100,130 L50,170 L70,110 L20,70 L80,70 Z" fill="none" stroke="#fbbf24" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
              {title.includes('육각형') && <motion.path d="M100,20 L160,50 L160,110 L100,140 L40,110 L40,50 Z" fill="none" stroke="#22d3ee" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
              {title.includes('나선') && <motion.path d="M100,90 Q120,90 120,70 Q120,50 100,50 Q80,50 80,70 Q80,100 110,100 Q140,100 140,60 Q140,20 100,20 Q60,20 60,70 Q60,120 100,120" fill="none" stroke="#a855f7" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />}
              {title.includes('꽃') && (
                <g>
                  {[0, 60, 120, 180, 240, 300].map(angle => (
                    <motion.ellipse key={angle} cx="100" cy="60" rx="20" ry="40" fill="none" stroke="#f472b6" strokeWidth="2" transform={`rotate(${angle} 100 90)`} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: angle / 360 }} />
                  ))}
                  <circle cx="100" cy="90" r="15" fill="#fbbf24" />
                </g>
              )}
              {title.includes('패턴') && (
                <g>
                  {[...Array(4)].map((_, i) => (
                    <motion.rect key={i} x={40 + i * 35} y={70} width="25" height="25" fill="none" stroke="#4ade80" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: i * 0.2 }} />
                  ))}
                </g>
              )}
            </>
          )}
        </svg>
        <motion.div animate={{ rotate: charRotation }} className="absolute z-10"><span className="text-4xl">🐢</span></motion.div>
        <div className="absolute bottom-2 text-gray-400 text-xs">🖊️ 도형 그리기</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-violet-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">그리는 중...</div>}
      </div>
    );
  }

  // 적 AI/추적/보스
  if (title.includes('적 AI') || title.includes('추적') || title.includes('보스') || desc.includes('적이')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #450a0a 0%, #7f1d1d 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-800 to-slate-700" />
        <motion.div animate={isRunning ? { x: [80, 200, 80] } : { x: 80 }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-14">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <motion.div animate={isRunning ? { x: [200, 90, 200] } : { x: 200 }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-14">
          <span className="text-5xl">{title.includes('보스') ? '👹' : '👾'}</span>
        </motion.div>
        {title.includes('보스') && <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-900 px-4 py-1 rounded-full text-red-300 font-bold">BOSS</div>}
        <div className="absolute top-4 left-4 text-white font-bold">⚔️ {title.includes('보스') ? '보스전' : '적 AI'}</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">전투!</div>}
      </div>
    );
  }

  // 스테이지 시스템
  if (title.includes('스테이지') || title.includes('레벨') && desc.includes('클리어')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-blue-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-4">
          {[1, 2, 3, 4, 5].map(stage => (
            <div key={stage} className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${stage <= 2 ? 'bg-green-500 text-white' : stage === 3 ? 'bg-yellow-400 text-yellow-900 animate-pulse' : 'bg-slate-600 text-slate-400'}`}>
              {stage <= 2 ? '✓' : stage}
            </div>
          ))}
        </div>
        <motion.div className="absolute bottom-16 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🎯 Stage 3</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">진행 중!</div>}
      </div>
    );
  }

  // 파티클/별 비 효과
  if (title.includes('파티클') || title.includes('별 비') || title.includes('효과')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e1b4b 0%, #4c1d95 100%)' }}>
        {isRunning && [...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute text-2xl" style={{ left: `${5 + (i * 5) % 90}%` }} initial={{ y: -20, opacity: 1 }} animate={{ y: 200, opacity: 0 }} transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: Math.random() * 2 }}>
            {['⭐', '✨', '💫', '🌟'][i % 4]}
          </motion.div>
        ))}
        <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">✨ 파티클 효과</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">효과!</div>}
      </div>
    );
  }

  // 물리 시뮬레이션/중력
  if (title.includes('물리') || title.includes('중력') || desc.includes('떨어')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-cyan-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #164e63 0%, #0e7490 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div animate={isRunning ? { y: [0, 100], scale: [1, 0.9, 1] } : {}} transition={{ y: { duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeIn' } }} className="absolute top-8 left-1/2 -translate-x-1/2">
          <span className="text-5xl">⚽</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">⬇️ 물리 엔진</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">시뮬레이션!</div>}
      </div>
    );
  }

  // 가위바위보
  if (title.includes('가위바위보') || title.includes('가위') && title.includes('바위')) {
    const [choice, setChoice] = React.useState(0);
    const hands = ['✊', '✌️', '🖐️'];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setChoice(c => (c + 1) % 3), 200);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-amber-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #78350f 0%, #a16207 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8">
          <motion.div animate={isRunning ? { rotate: [0, 10, -10, 0] } : {}} transition={{ repeat: Infinity, duration: 0.3 }} className="text-7xl">{hands[choice]}</motion.div>
          <span className="text-4xl font-bold text-white">VS</span>
          <motion.div animate={isRunning ? { rotate: [0, -10, 10, 0] } : {}} transition={{ repeat: Infinity, duration: 0.3 }} className="text-7xl">{hands[(choice + 1) % 3]}</motion.div>
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">🎮 가위바위보</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">결정!</div>}
      </div>
    );
  }

  // 온도계
  if (title.includes('온도') || desc.includes('온도')) {
    const [temp, setTemp] = React.useState(20);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setTemp(t => t >= 40 ? 0 : t + 5), 400);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: `linear-gradient(180deg, ${temp > 30 ? '#dc2626' : temp > 15 ? '#f97316' : '#3b82f6'} 0%, ${temp > 30 ? '#f87171' : temp > 15 ? '#fdba74' : '#93c5fd'} 100%)` }}>
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-8 bg-white/20 rounded-full overflow-hidden">
          <motion.div className="absolute bottom-0 w-full bg-red-500" style={{ height: `${temp * 2}%` }} />
          <div className="absolute bottom-0 w-full h-8 bg-red-600 rounded-full" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl font-bold text-white">{temp}°C</div>
        <div className="absolute top-4 left-4 text-white font-bold">🌡️ 온도계</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">측정 중!</div>}
      </div>
    );
  }

  // 낮과 밤
  if (title.includes('낮') && title.includes('밤') || desc.includes('낮') || desc.includes('밤')) {
    const [isDay, setIsDay] = React.useState(true);
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setIsDay(d => !d), 1500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <motion.div className="rounded-2xl p-4 border-4 border-indigo-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: isDay ? 'linear-gradient(180deg, #38bdf8 0%, #7dd3fc 100%)' : 'linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-700 to-green-500" />
        <motion.div className="absolute top-4 right-8 text-5xl" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
          {isDay ? '☀️' : '🌙'}
        </motion.div>
        {!isDay && [...Array(10)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 40}%` }} />
        ))}
        <motion.div className="absolute bottom-14 left-1/2 -translate-x-1/2"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold bg-black/30 px-3 py-1 rounded">{isDay ? '🌤️ 낮' : '🌙 밤'}</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">시간 변화!</div>}
      </motion.div>
    );
  }

  // 장애물 피하기
  if (title.includes('장애물') || desc.includes('장애물') || desc.includes('피하')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-600 to-slate-500" />
        {isRunning && (
          <>
            <motion.div className="absolute bottom-12 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>🪨</motion.div>
            <motion.div className="absolute bottom-12 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 0.7 }}>🌵</motion.div>
            <motion.div className="absolute bottom-12 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1.4 }}>🪵</motion.div>
          </>
        )}
        <motion.div animate={isRunning ? { y: [0, -30, 0] } : {}} transition={{ duration: 0.6, repeat: Infinity }} className="absolute bottom-14 left-12">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🏃 장애물 피하기</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">피해!</div>}
      </div>
    );
  }

  // 리듬 게임
  if (title.includes('리듬') || desc.includes('리듬') || desc.includes('박자')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #831843 0%, #be185d 100%)' }}>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
          {['⬅️', '⬆️', '⬇️', '➡️'].map((arrow, i) => (
            <div key={i} className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center text-2xl border-2 border-pink-400">{arrow}</div>
          ))}
        </div>
        {isRunning && (
          <motion.div initial={{ y: -40 }} animate={{ y: 120 }} transition={{ duration: 1, repeat: Infinity }} className="absolute left-1/2 -translate-x-1/2 text-4xl">
            ⬇️
          </motion.div>
        )}
        <div className="absolute top-4 left-4 text-white font-bold">🎵 리듬 게임</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">박자!</div>}
      </div>
    );
  }

  // 애니메이션 스토리
  if (title.includes('스토리') || title.includes('애니메이션 스토리')) {
    const [frame, setFrame] = React.useState(0);
    const scenes = ['🌅 아침이 밝았어요', '🏠 집을 나섰어요', '🌳 숲을 지나갔어요', '🏰 성에 도착했어요!'];
    React.useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => setFrame(f => (f + 1) % scenes.length), 1500);
        return () => clearInterval(interval);
      }
    }, [isRunning]);
    return (
      <div className="rounded-2xl p-4 border-4 border-purple-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #581c87 0%, #7e22ce 100%)' }}>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black/40 px-6 py-3 rounded-xl">
          <p className="text-white text-lg font-bold">{isRunning ? scenes[frame] : scenes[0]}</p>
        </div>
        <motion.div animate={isRunning ? { x: [40, 280] } : { x: 40 }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-14">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">📖 스토리</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">진행 중...</div>}
      </div>
    );
  }

  // 마스터 테스트 / 종합 프로젝트
  if (title.includes('마스터') || title.includes('테스트') || title.includes('종합')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-yellow-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #78350f 0%, #a16207 50%, #ca8a04 100%)' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="text-8xl">🏆</motion.div>
        </div>
        <div className="absolute top-4 left-4 text-yellow-100 font-bold text-lg">⭐ 마스터 테스트</div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-yellow-200 text-sm">모든 개념을 활용해보세요!</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">도전!</div>}
      </div>
    );
  }

  // 게임 완성 프로젝트
  if (title.includes('게임 완성') || title.includes('게임') && title.includes('만들')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-emerald-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #064e3b 0%, #047857 100%)' }}>
        <div className="absolute top-4 left-4 text-white font-bold">🎮 나만의 게임</div>
        <div className="absolute top-4 right-4 bg-green-900/50 px-3 py-1 rounded text-green-300 text-sm">진행률: 80%</div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-900 to-green-800" />
        <div className="flex items-center justify-center gap-8 mt-16">
          <motion.span animate={isRunning ? { y: [0, -20, 0] } : {}} transition={{ repeat: Infinity, duration: 0.5 }} className="text-5xl">🐱</motion.span>
          <span className="text-4xl">⚔️</span>
          <motion.span animate={isRunning ? { x: [0, 10, 0] } : {}} transition={{ repeat: Infinity, duration: 0.3 }} className="text-5xl">👾</motion.span>
        </div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-emerald-400 to-green-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">제작 중!</div>}
      </div>
    );
  }

  // 퀴즈 게임
  if (title.includes('퀴즈') || desc.includes('정답')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-indigo-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #312e81 0%, #4338ca 100%)' }}>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur px-8 py-4 rounded-2xl">
          <p className="text-2xl font-bold text-white">❓ 1 + 1 = ?</p>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
          {['1', '2', '3', '4'].map((ans, i) => (
            <motion.div key={i} className={`w-14 h-14 ${i === 1 ? 'bg-green-500' : 'bg-slate-700'} rounded-xl flex items-center justify-center text-xl font-bold text-white cursor-pointer`} whileHover={{ scale: 1.1 }} animate={isRunning && i === 1 ? { scale: [1, 1.2, 1] } : {}}>
              {ans}
            </motion.div>
          ))}
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">🧠 퀴즈</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">정답!</div>}
      </div>
    );
  }

  // 충돌 감지
  if (title.includes('충돌') || desc.includes('충돌') || desc.includes('부딪')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #450a0a 0%, #991b1b 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-800 to-slate-700" />
        <motion.div animate={isRunning ? { x: [40, 140] } : { x: 40 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="absolute bottom-14">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <motion.div animate={isRunning ? { x: [200, 100] } : { x: 200 }} transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }} className="absolute bottom-14">
          <span className="text-5xl">🐕</span>
        </motion.div>
        {isRunning && (
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.5 }} className="absolute bottom-20 left-1/2 -translate-x-1/2 text-4xl">
            💥
          </motion.div>
        )}
        <div className="absolute top-4 left-4 text-white font-bold">💥 충돌 감지</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">충돌!</div>}
      </div>
    );
  }

  // 방송 메시지
  if (title.includes('방송') || desc.includes('방송')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-purple-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #581c87 0%, #7e22ce 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-purple-900 to-purple-800" />
        <motion.div className="absolute bottom-14 left-12"><span className="text-5xl">📢</span></motion.div>
        <motion.div className="absolute bottom-14 right-12"><span className="text-5xl">🐱</span></motion.div>
        {isRunning && (
          <>
            <motion.div initial={{ scale: 0, x: 50, y: 80 }} animate={{ scale: [1, 2, 2], x: [50, 150, 250], opacity: [1, 0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute text-2xl">📨</motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-8 right-12 bg-white px-3 py-1 rounded-lg text-sm">알겠어요!</motion.div>
          </>
        )}
        <div className="absolute top-4 left-4 text-white font-bold">📢 방송 메시지</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">방송!</div>}
      </div>
    );
  }

  // 무한 반복 배경 / 스크롤
  if (title.includes('무한') && (title.includes('배경') || title.includes('반복'))) {
    return (
      <div className="rounded-2xl p-4 border-4 border-sky-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #0c4a6e 0%, #0369a1 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-800 to-green-600" />
        {isRunning && (
          <>
            <motion.div className="absolute bottom-16 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>🌲</motion.div>
            <motion.div className="absolute bottom-16 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 1 }}>🌳</motion.div>
            <motion.div className="absolute bottom-16 text-4xl" initial={{ x: 350 }} animate={{ x: -50 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}>🌲</motion.div>
          </>
        )}
        <motion.div className="absolute bottom-20 left-12"><span className="text-5xl">🏃</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🔄 무한 배경</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-sky-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">스크롤!</div>}
      </div>
    );
  }

  // 적 생성기 / 스포너
  if (title.includes('적') && (title.includes('생성') || title.includes('스포너'))) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <div className="absolute top-4 right-4 text-red-400 font-bold">⚠️ 적 스포너</div>
        {isRunning && (
          <>
            <motion.div initial={{ opacity: 0, scale: 0, x: 280 }} animate={{ opacity: 1, scale: 1, x: 280 }} transition={{ delay: 0 }} className="absolute bottom-14 text-4xl">👾</motion.div>
            <motion.div initial={{ opacity: 0, scale: 0, x: 280 }} animate={{ opacity: 1, scale: 1, x: 280 }} transition={{ delay: 0.7 }} className="absolute bottom-28 text-4xl">👽</motion.div>
            <motion.div initial={{ opacity: 0, scale: 0, x: 280 }} animate={{ opacity: 1, scale: 1, x: 280 }} transition={{ delay: 1.4 }} className="absolute bottom-20 text-4xl">🤖</motion.div>
          </>
        )}
        <motion.div className="absolute bottom-14 left-12"><span className="text-5xl">🐱</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">👾 적 생성</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-red-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">생성!</div>}
      </div>
    );
  }

  // 중첩 반복 패턴 / 바둑판
  if (title.includes('중첩') || title.includes('바둑판') || title.includes('패턴') && desc.includes('패턴')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-amber-500/50 relative overflow-hidden shadow-lg flex items-center justify-center" style={{ background: '#1a1a2e' }}>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div key={i} className="w-12 h-12 border-2 border-amber-500 rounded" initial={{ opacity: 0.2 }} animate={isRunning ? { opacity: 1, borderColor: ['#f59e0b', '#10b981', '#f59e0b'] } : {}} transition={{ delay: i * 0.1, duration: 0.3 }} />
          ))}
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">🔲 패턴</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">그리는 중!</div>}
      </div>
    );
  }

  // 무지개 선 / 색깔 변화
  if (title.includes('무지개') || title.includes('색깔') && (title.includes('변화') || title.includes('선'))) {
    return (
      <div className="rounded-2xl p-4 border-4 border-pink-500/50 relative overflow-hidden shadow-lg flex items-center justify-center" style={{ background: '#1a1a2e' }}>
        <svg width="280" height="160" className="absolute">
          {isRunning && [...Array(36)].map((_, i) => (
            <motion.line key={i} x1={10 + i * 7} y1={80} x2={10 + (i + 1) * 7} y2={80 + Math.sin(i * 0.5) * 30} stroke={`hsl(${i * 10}, 80%, 60%)`} strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * 0.05, duration: 0.1 }} />
          ))}
        </svg>
        <motion.div animate={{ rotate: charRotation }} className="absolute z-10"><span className="text-4xl">🐢</span></motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🌈 무지개 선</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">그리는 중!</div>}
      </div>
    );
  }

  // 암호 입력
  if (title.includes('암호') || desc.includes('암호')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-slate-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-slate-800 px-6 py-3 rounded-xl border-2 border-slate-600">
          <div className="flex gap-2">
            {['•', '•', '•', '•'].map((_, i) => (
              <motion.div key={i} className="w-8 h-10 bg-slate-700 rounded flex items-center justify-center text-2xl text-green-400 font-mono" animate={isRunning ? { borderColor: ['#475569', '#22c55e', '#475569'] } : {}} transition={{ delay: i * 0.2, duration: 0.3 }} style={{ border: '2px solid #475569' }}>
                {isRunning ? ['1', '2', '3', '4'][i] : '•'}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <span className="text-5xl">🔐</span>
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">🔒 암호</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">입력 중!</div>}
      </div>
    );
  }

  // 터치 감지 / 마우스 닿음
  if (title.includes('터치') || title.includes('감지') && desc.includes('닿')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-cyan-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #164e63 0%, #0e7490 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div animate={isRunning ? { scale: [1, 1.2, 1], backgroundColor: ['#06b6d4', '#f59e0b', '#06b6d4'] } : {}} transition={{ duration: 1, repeat: Infinity }} className="absolute bottom-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <motion.div animate={isRunning ? { x: [100, 160, 100], y: [40, 80, 40] } : { x: 100, y: 40 }} transition={{ duration: 2, repeat: Infinity }} className="absolute">
          <span className="text-2xl">🖱️</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">👆 터치 감지</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">감지!</div>}
      </div>
    );
  }

  // 경계 체크
  if (title.includes('경계') || desc.includes('밖으로')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-orange-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 100%)' }}>
        <div className="absolute inset-4 border-4 border-dashed border-orange-500/50 rounded-xl" />
        <motion.div animate={isRunning ? { x: [80, 260, 260, 80, 80], y: [60, 60, 140, 140, 60] } : { x: 80, y: 100 }} transition={{ duration: 4, repeat: Infinity }} className="absolute">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🔲 경계 체크</div>
        {isRunning && <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-yellow-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">경계!</div>}
      </div>
    );
  }

  // 색깔 감지 게임
  if (title.includes('색깔') && title.includes('감지')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-red-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1f2937 0%, #374151 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
          <div className="w-16 h-16 bg-red-500 rounded" />
          <div className="w-16 h-16 bg-blue-500 rounded" />
          <div className="w-16 h-16 bg-green-500 rounded" />
          <div className="w-16 h-16 bg-yellow-500 rounded" />
        </div>
        <motion.div animate={isRunning ? { x: [60, 108, 156, 204, 60] } : { x: 60 }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-16">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 left-4 text-white font-bold">🎨 색깔 감지</div>
        <div className="absolute top-4 right-4 text-yellow-300 font-bold">점수: {isRunning ? 10 : 0}</div>
        {isRunning && <div className="absolute top-12 right-3 bg-gradient-to-r from-red-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">+10!</div>}
      </div>
    );
  }

  // 연속 동작 / 키 누름
  if (title.includes('연속') || desc.includes('누르고 있는')) {
    return (
      <div className="rounded-2xl p-4 border-4 border-blue-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #3b82f6 100%)' }}>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-700 to-slate-600" />
        <motion.div animate={isRunning ? { y: [100, 20, 100] } : { y: 100 }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute left-1/2 -translate-x-1/2">
          <span className="text-5xl">🐱</span>
        </motion.div>
        <div className="absolute top-4 right-4 flex flex-col items-center">
          <motion.div className="px-4 py-2 bg-slate-800 rounded-lg text-white font-mono" animate={isRunning ? { backgroundColor: ['#1e293b', '#3b82f6', '#1e293b'] } : {}} transition={{ duration: 0.5, repeat: Infinity }}>
            SPACE
          </motion.div>
        </div>
        <div className="absolute top-4 left-4 text-white font-bold">⌨️ 연속 동작</div>
        {isRunning && <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-blue-300 text-sm">▲ 위로 이동!</div>}
      </div>
    );
  }

  // 기본 실행 화면 (캐릭터 이동)
  return (
    <div className="rounded-2xl p-4 border-4 border-sky-500/50 relative overflow-hidden shadow-lg h-full min-h-[320px]" style={{ height: '200px', background: 'linear-gradient(180deg, #38bdf8 0%, #0ea5e9 50%, #7dd3fc 100%)' }}>
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
        <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-violet-900/50 to-purple-900/50 text-violet-300 rounded-lg font-medium mb-3 border border-violet-500/30 text-sm">
          📚 학습 개념: {mission.concept}
        </div>
      )}

      {/* 메인 레이아웃 - 엔트리 스타일: 좌측 좁게(블록+코드), 우측 넓게(실행창) */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* 왼쪽: 블록 상자 + 코드 영역 (좁은 세로 영역) */}
        <div className="lg:w-[280px] xl:w-[320px] flex flex-col gap-3 lg:max-h-[550px]">
          {/* 안내 메시지 */}
          <div className="bg-blue-900/30 rounded-lg p-2.5 border border-blue-500/30">
            <p className="text-blue-300 text-xs font-medium flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              <strong>블록을 클릭</strong>해서 배치하세요!
            </p>
          </div>

          {/* 블록 상자 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3 border border-slate-500 shadow-lg">
            <p className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-7 h-7 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg text-sm">🧱</span>
              블록 상자
            </p>
            <div className="flex flex-col gap-1.5 max-h-[150px] overflow-y-auto custom-scrollbar pr-1">
              {availableBlocks.length > 0 ? (
                availableBlocks.map((block, i) => (
                  <motion.div
                    key={`avail-${i}`}
                    draggable
                    onDragStart={() => handleDragStart(block)}
                    onDragEnd={handleDragEnd}
                    onClick={() => addBlock(block)}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${getBlockColor3D(block)} text-white px-2.5 py-1.5 rounded-lg font-bold text-xs cursor-pointer flex items-center gap-1.5 transition-all border-t border-white/20 hover:brightness-110 w-full`}
                  >
                    <GripVertical className="w-3.5 h-3.5 opacity-60 flex-shrink-0" />
                    <span className="flex-1 truncate">{block}</span>
                  </motion.div>
                ))
              ) : (
                <div className="flex items-center justify-center h-16 text-emerald-400 text-xs font-bold">
                  <CheckCircle className="w-4 h-4 mr-1.5" /> 모든 블록 배치 완료!
                </div>
              )}
            </div>
          </div>

          {/* 코드 영역 */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={`rounded-2xl p-3 flex-1 min-h-[180px] transition-all shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)] ${
              isDragging
                ? 'bg-gradient-to-b from-violet-600/40 to-purple-600/40 border-2 border-violet-400 border-dashed'
                : 'bg-gradient-to-b from-violet-900/30 to-purple-900/30 border border-violet-500/50'
            }`}
          >
            <p className="text-sm font-bold text-violet-300 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center shadow-lg text-sm">📝</span>
              코드 영역
            </p>
            {assembledBlocks.length === 0 ? (
              <div className={`flex flex-col items-center justify-center h-24 rounded-xl border-2 border-dashed transition-all ${isDragging ? 'border-violet-400 bg-violet-500/20' : 'border-slate-500'}`}>
                <p className="text-slate-400 text-xs font-medium mb-1">{isDragging ? '👇 여기에 놓으세요!' : '블록을 클릭하세요'}</p>
                <p className="text-slate-500 text-[10px]">시작 블록부터 순서대로!</p>
              </div>
            ) : (
              <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto custom-scrollbar pr-1">
                {assembledBlocks.map((block, index) => (
                  <motion.div
                    key={`assembled-${index}`}
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    className={`${getBlockColor3D(block)} text-white px-2 py-1.5 rounded-lg font-bold text-xs flex items-center justify-between border-t border-white/20`}
                  >
                    <span className="flex items-center gap-1.5 flex-1 min-w-0">
                      <span className="w-5 h-5 bg-black/20 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0">{index + 1}</span>
                      <span className="truncate">{block}</span>
                    </span>
                    <button onClick={() => removeBlock(block)} className="text-white/70 hover:text-white p-1 hover:bg-black/20 rounded transition-colors flex-shrink-0">
                      <XCircle className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
                {isDragging && (
                  <div className="h-10 border-2 border-dashed border-violet-400 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-300 text-xs">
                    👇 여기에 추가
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 버튼들 - 왼쪽 패널 하단 */}
          <div className="flex gap-2">
            <motion.button
              onClick={reset}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-3 py-2.5 bg-gradient-to-b from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white font-bold rounded-xl shadow-[0_3px_0_0_#374151] hover:shadow-[0_1px_0_0_#374151] hover:translate-y-[2px] transition-all flex items-center gap-1.5 text-xs border-t border-white/10"
            >
              <RotateCcw className="w-3.5 h-3.5" />초기화
            </motion.button>
            <motion.button
              onClick={checkAnswer}
              disabled={assembledBlocks.length === 0 || isComplete || isRunning}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-3 py-2.5 bg-gradient-to-b from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 text-white font-bold rounded-xl shadow-[0_3px_0_0_#15803d] hover:shadow-[0_1px_0_0_#15803d] hover:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 disabled:cursor-not-allowed text-xs border-t border-white/20"
            >
              <Play className="w-4 h-4" />{isRunning ? '실행 중...' : '▶ 실행'}
            </motion.button>
          </div>
        </div>

        {/* 오른쪽: 실행 화면 (넓은 영역) - 엔트리 스타일 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border-2 border-slate-600 overflow-hidden shadow-[inset_0_4px_20px_rgba(0,0,0,0.4)] flex-1 min-h-[450px] flex flex-col">
            {/* 실행창 상단 바 */}
            <div className="h-9 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center px-4 gap-2 flex-shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="ml-3 text-slate-300 text-xs font-medium">🎮 실행 화면</span>
              {isRunning && <span className="ml-auto text-xs text-green-400 animate-pulse">● 실행 중...</span>}
            </div>
            {/* 미션별 실행 화면 - 크게 표시 */}
            <div className="flex-1 p-4 flex items-center justify-center">
              <div className="w-full h-full">
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
              </div>
            </div>
          </div>

          {/* 힌트/완료 메시지 - 실행창 아래 */}
          {showHint && !isComplete && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 p-3 rounded-xl border border-amber-500/30">
              <p className="font-bold text-amber-300 text-sm mb-1">💡 힌트</p>
              <ul className="text-xs text-amber-200 space-y-0.5">
                {mission.hints && mission.hints.map((hint, i) => (<li key={i}>• {hint}</li>))}
                {(!mission.hints || mission.hints.length === 0) && (
                  <>
                    <li>• 블록의 순서가 중요해요!</li>
                    <li>• 시작 블록을 첫 번째로 배치하세요</li>
                  </>
                )}
              </ul>
            </motion.div>
          )}

          {isComplete && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="mt-3 p-3 rounded-xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-emerald-400" />
              <div>
                <span className="font-bold text-emerald-300">🎉 완벽해요!</span>
                <p className="text-emerald-400 text-xs">+{score} XP 획득!</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralBlockMission;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, Lightbulb, Gamepad2, Star, Target, Clock, Zap } from 'lucide-react';
import type { Mission, GameType } from '../types';

interface Props {
  mission: Mission;
  onComplete: (perfect: boolean) => void;
}

interface GameObject {
  id: string;
  type: 'player' | 'item' | 'obstacle' | 'projectile';
  x: number;
  y: number;
  emoji: string;
  active: boolean;
}

interface AssembledBlock {
  id: string;
  type: string;
}

const GameMakerMission: React.FC<Props> = ({ mission, onComplete }) => {
  const [assembledBlocks, setAssembledBlocks] = useState<AssembledBlock[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameObjects, setGameObjects] = useState<GameObject[]>([]);
  const [playerPos, setPlayerPos] = useState({ x: 150, y: 150 });
  const [playerDirection, setPlayerDirection] = useState<'up' | 'down' | 'left' | 'right'>('up');
  const canvasRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const keysPressed = useRef<Set<string>>(new Set());

  const gameType = mission.gameType || 'collect-game';
  const winCondition = mission.winCondition || { type: 'score', target: 10 };

  // 게임 블록 정의
  const getAvailableBlocks = (): string[] => {
    return mission.gameBlocks || [
      '🎮 게임 시작',
      '👤 캐릭터 추가',
      '⬆️ 키보드로 이동',
      '⭐ 아이템 생성',
      '💥 충돌 감지',
      '🔢 점수 +1',
      '⏱️ 타이머 설정',
      '🔄 계속 반복',
      '🏁 목표 달성시 성공',
    ];
  };

  // 블록 스타일
  const getBlockStyle = (block: string) => {
    if (block.includes('게임 시작')) return 'from-green-500 to-green-700';
    if (block.includes('캐릭터')) return 'from-blue-500 to-blue-700';
    if (block.includes('이동') || block.includes('키보드')) return 'from-cyan-500 to-cyan-700';
    if (block.includes('아이템') || block.includes('⭐')) return 'from-yellow-500 to-yellow-700';
    if (block.includes('충돌')) return 'from-red-500 to-red-700';
    if (block.includes('점수')) return 'from-purple-500 to-purple-700';
    if (block.includes('타이머')) return 'from-orange-500 to-orange-700';
    if (block.includes('반복')) return 'from-indigo-500 to-indigo-700';
    if (block.includes('목표') || block.includes('성공')) return 'from-emerald-500 to-emerald-700';
    return 'from-slate-500 to-slate-700';
  };

  // 블록 추가
  const addBlock = (type: string) => {
    setAssembledBlocks([...assembledBlocks, {
      id: `block-${Date.now()}`,
      type,
    }]);
  };

  // 블록 삭제
  const removeBlock = (index: number) => {
    setAssembledBlocks(assembledBlocks.filter((_, i) => i !== index));
  };

  // 블록 이동
  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newBlocks = [...assembledBlocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setAssembledBlocks(newBlocks);
    } else if (direction === 'down' && index < assembledBlocks.length - 1) {
      const newBlocks = [...assembledBlocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setAssembledBlocks(newBlocks);
    }
  };

  // 아이템 생성
  const spawnItem = useCallback(() => {
    const emojis = ['⭐', '💎', '🍎', '🍕', '🎁'];
    const newItem: GameObject = {
      id: `item-${Date.now()}-${Math.random()}`,
      type: 'item',
      x: Math.random() * 260 + 20,
      y: Math.random() * 260 + 20,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      active: true,
    };
    setGameObjects(prev => [...prev, newItem]);
  }, []);

  // 장애물 생성
  const spawnObstacle = useCallback(() => {
    const emojis = ['🪨', '💣', '🔥', '⚡'];
    const newObstacle: GameObject = {
      id: `obs-${Date.now()}-${Math.random()}`,
      type: 'obstacle',
      x: Math.random() * 260 + 20,
      y: 0,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      active: true,
    };
    setGameObjects(prev => [...prev, newObstacle]);
  }, []);

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 게임 루프
  const runGameLoop = useCallback(() => {
    if (!isRunning || isPaused) return;

    const hasMovement = assembledBlocks.some(b => b.type.includes('이동') || b.type.includes('키보드'));
    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    const hasCollision = assembledBlocks.some(b => b.type.includes('충돌'));
    const hasScore = assembledBlocks.some(b => b.type.includes('점수'));

    // 플레이어 이동
    if (hasMovement) {
      const speed = 5;
      let newX = playerPos.x;
      let newY = playerPos.y;

      if (keysPressed.current.has('ArrowUp') || keysPressed.current.has('w')) {
        newY = Math.max(20, newY - speed);
        setPlayerDirection('up');
      }
      if (keysPressed.current.has('ArrowDown') || keysPressed.current.has('s')) {
        newY = Math.min(280, newY + speed);
        setPlayerDirection('down');
      }
      if (keysPressed.current.has('ArrowLeft') || keysPressed.current.has('a')) {
        newX = Math.max(20, newX - speed);
        setPlayerDirection('left');
      }
      if (keysPressed.current.has('ArrowRight') || keysPressed.current.has('d')) {
        newX = Math.min(280, newX + speed);
        setPlayerDirection('right');
      }

      setPlayerPos({ x: newX, y: newY });
    }

    // 장애물 이동 (피하기 게임)
    if (gameType === 'dodge-game') {
      setGameObjects(prev => prev.map(obj => {
        if (obj.type === 'obstacle') {
          const newY = obj.y + 3;
          if (newY > 320) {
            return { ...obj, y: -20, x: Math.random() * 260 + 20 };
          }
          return { ...obj, y: newY };
        }
        return obj;
      }));
    }

    // 충돌 감지
    if (hasCollision) {
      setGameObjects(prev => {
        let itemCollected = false;
        let hitObstacle = false;

        const updated = prev.map(obj => {
          if (!obj.active) return obj;

          const distance = Math.sqrt(
            Math.pow(obj.x - playerPos.x, 2) + Math.pow(obj.y - playerPos.y, 2)
          );

          if (distance < 30) {
            if (obj.type === 'item') {
              itemCollected = true;
              return { ...obj, active: false };
            } else if (obj.type === 'obstacle') {
              hitObstacle = true;
            }
          }
          return obj;
        });

        if (itemCollected && hasScore) {
          setScore(s => s + 1);
        }

        if (hitObstacle) {
          // 게임 오버 또는 점수 감소
          setScore(s => Math.max(0, s - 1));
        }

        return updated.filter(obj => obj.active || obj.type === 'obstacle');
      });
    }

    gameLoopRef.current = requestAnimationFrame(runGameLoop);
  }, [isRunning, isPaused, playerPos, assembledBlocks, gameType]);

  // 게임 루프 시작/정지
  useEffect(() => {
    if (isRunning && !isPaused) {
      gameLoopRef.current = requestAnimationFrame(runGameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isRunning, isPaused, runGameLoop]);

  // 타이머
  useEffect(() => {
    if (!isRunning || isPaused) return;

    const hasTimer = assembledBlocks.some(b => b.type.includes('타이머'));
    if (!hasTimer) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isPaused, assembledBlocks]);

  // 아이템 자동 생성
  useEffect(() => {
    if (!isRunning || isPaused) return;

    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    if (!hasItems) return;

    const interval = setInterval(() => {
      if (gameObjects.filter(o => o.type === 'item' && o.active).length < 5) {
        spawnItem();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning, isPaused, assembledBlocks, gameObjects, spawnItem]);

  // 장애물 자동 생성 (피하기 게임)
  useEffect(() => {
    if (!isRunning || isPaused || gameType !== 'dodge-game') return;

    const interval = setInterval(() => {
      if (gameObjects.filter(o => o.type === 'obstacle').length < 3) {
        spawnObstacle();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isRunning, isPaused, gameType, gameObjects, spawnObstacle]);

  // 승리 조건 확인
  useEffect(() => {
    if (!isRunning) return;

    const hasWinCondition = assembledBlocks.some(b => b.type.includes('목표') || b.type.includes('성공'));
    if (!hasWinCondition) return;

    if (winCondition.type === 'score' && score >= winCondition.target) {
      setIsRunning(false);
      setShowSuccess(true);
      setTimeout(() => {
        onComplete(true);
      }, 2000);
    }
  }, [isRunning, score, winCondition, assembledBlocks, onComplete]);

  // 게임 시작
  const startGame = () => {
    if (assembledBlocks.length === 0) {
      setShowHint(true);
      return;
    }

    // 필수 블록 확인
    const hasStart = assembledBlocks.some(b => b.type.includes('게임 시작'));
    if (!hasStart) {
      alert('🎮 게임 시작 블록을 추가하세요!');
      return;
    }

    setIsRunning(true);
    setIsPaused(false);
    setScore(0);
    setTimeLeft(30);
    setGameObjects([]);
    setPlayerPos({ x: 150, y: 150 });

    // 초기 아이템 생성
    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    if (hasItems) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnItem(), i * 500);
      }
    }
  };

  // 초기화
  const reset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setScore(0);
    setTimeLeft(30);
    setGameObjects([]);
    setPlayerPos({ x: 150, y: 150 });
    setShowSuccess(false);
  };

  // 게임 타입별 설명
  const getGameTypeInfo = () => {
    switch (gameType) {
      case 'click-game':
        return { icon: '🖱️', name: '클릭 게임', desc: '화면을 클릭해서 점수를 올려요!' };
      case 'collect-game':
        return { icon: '⭐', name: '수집 게임', desc: '아이템을 모아 점수를 올려요!' };
      case 'dodge-game':
        return { icon: '💨', name: '피하기 게임', desc: '장애물을 피하며 살아남아요!' };
      case 'timer-game':
        return { icon: '⏱️', name: '타이머 게임', desc: '제한 시간 내에 목표를 달성해요!' };
      case 'shooting-game':
        return { icon: '🎯', name: '슈팅 게임', desc: '목표물을 맞춰 점수를 올려요!' };
      case 'quiz-game':
        return { icon: '❓', name: '퀴즈 게임', desc: '정답을 맞춰 점수를 올려요!' };
      default:
        return { icon: '🎮', name: '미니 게임', desc: '재미있는 게임을 만들어요!' };
    }
  };

  const gameInfo = getGameTypeInfo();

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-4 md:p-6">
      {/* 헤더 */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{gameInfo.icon}</span>
          <h2 className="text-xl font-bold text-white">{mission.title}</h2>
          <span className="px-2 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs rounded-full">
            {gameInfo.name}
          </span>
        </div>
        <p className="text-slate-300 text-sm">{mission.description}</p>
        {mission.concept && (
          <div className="mt-2 p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
            <p className="text-indigo-300 text-sm">
              <span className="font-bold">💡 개념:</span> {mission.concept}
            </p>
            {mission.conceptExplanation && (
              <p className="text-indigo-200 text-xs mt-1">{mission.conceptExplanation}</p>
            )}
          </div>
        )}
        {/* 목표 표시 */}
        <div className="mt-2 p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
          <p className="text-emerald-300 text-sm">
            <span className="font-bold">🎯 목표:</span> {winCondition.target}점 달성하기
          </p>
        </div>
      </div>

      {/* 메인 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 좌측: 블록 팔레트 + 내 코드 */}
        <div className="space-y-4">
          {/* 블록 상자 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3">
            <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-xs">🎮</span>
              게임 블록
            </p>

            <div className="flex flex-col gap-1.5 max-h-[250px] overflow-y-auto">
              {getAvailableBlocks().map((block, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addBlock(block)}
                  disabled={isRunning}
                  className={`bg-gradient-to-r ${getBlockStyle(block)} text-white px-3 py-2 rounded-lg font-bold text-xs shadow-md text-left disabled:opacity-50`}
                >
                  {block}
                </motion.button>
              ))}
            </div>
          </div>

          {/* 내 코드 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-3 min-h-[150px]">
            <p className="text-sm font-bold text-violet-300 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center text-xs">📝</span>
              내 게임 코드
            </p>
            <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`bg-gradient-to-r ${getBlockStyle(block.type)} text-white px-2 py-1.5 rounded-lg text-xs flex items-center gap-2`}
                >
                  <span className="w-5 h-5 bg-black/20 rounded flex items-center justify-center text-xs">{index + 1}</span>
                  <span className="flex-1 truncate">{block.type}</span>
                  <div className="flex gap-1">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:bg-white/20 px-1 rounded" disabled={isRunning}>▲</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:bg-white/20 px-1 rounded" disabled={isRunning}>▼</button>
                    <button onClick={() => removeBlock(index)} className="hover:bg-red-500/50 px-1 rounded" disabled={isRunning}>✕</button>
                  </div>
                </motion.div>
              ))}
              {assembledBlocks.length === 0 && (
                <p className="text-slate-500 text-xs text-center py-4">게임 블록을 추가하세요</p>
              )}
            </div>
          </div>
        </div>

        {/* 우측: 게임 캔버스 */}
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-green-400" />
              <p className="text-sm font-bold text-white">게임 화면</p>
            </div>
            <div className="flex items-center gap-4">
              {/* 점수 */}
              <div className="flex items-center gap-1 bg-purple-500/30 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-bold text-sm">{score}</span>
              </div>
              {/* 타이머 */}
              {assembledBlocks.some(b => b.type.includes('타이머')) && (
                <div className="flex items-center gap-1 bg-orange-500/30 px-2 py-1 rounded-lg">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-bold text-sm">{timeLeft}s</span>
                </div>
              )}
            </div>
          </div>

          {/* 게임 캔버스 */}
          <div
            ref={canvasRef}
            className="relative w-full aspect-square max-w-[300px] mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-600 overflow-hidden"
            style={{ touchAction: 'none' }}
          >
            {!isRunning ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                <Gamepad2 className="w-16 h-16 mb-4 opacity-30" />
                <p className="text-sm">게임 블록을 조립하고</p>
                <p className="text-sm">실행 버튼을 누르세요!</p>
              </div>
            ) : (
              <>
                {/* 플레이어 */}
                {assembledBlocks.some(b => b.type.includes('캐릭터')) && (
                  <motion.div
                    animate={{ x: playerPos.x - 15, y: playerPos.y - 15 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute text-3xl"
                    style={{ width: 30, height: 30 }}
                  >
                    {playerDirection === 'up' ? '🐱' :
                     playerDirection === 'down' ? '🐱' :
                     playerDirection === 'left' ? '🐱' : '🐱'}
                  </motion.div>
                )}

                {/* 게임 오브젝트들 */}
                <AnimatePresence>
                  {gameObjects.map(obj => (
                    obj.active && (
                      <motion.div
                        key={obj.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, x: obj.x - 15, y: obj.y - 15 }}
                        exit={{ scale: 0 }}
                        className="absolute text-2xl"
                        style={{ width: 30, height: 30 }}
                      >
                        {obj.emoji}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* 조작 안내 */}
                {assembledBlocks.some(b => b.type.includes('이동') || b.type.includes('키보드')) && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 bg-slate-900/80 px-2 py-1 rounded">
                    ⬆️⬇️⬅️➡️ 또는 WASD로 이동
                  </div>
                )}
              </>
            )}
          </div>

          {/* 조작법 안내 */}
          <div className="mt-3 flex flex-wrap gap-2 justify-center text-xs text-slate-400">
            <span className="bg-slate-800 px-2 py-1 rounded">🎮 방향키로 이동</span>
            <span className="bg-slate-800 px-2 py-1 rounded">⭐ 아이템 수집</span>
            <span className="bg-slate-800 px-2 py-1 rounded">🎯 목표 점수 달성</span>
          </div>
        </div>
      </div>

      {/* 실행 버튼 */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold"
        >
          <RotateCcw className="w-5 h-5" />
          초기화
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isRunning ? () => setIsPaused(!isPaused) : startGame}
          disabled={assembledBlocks.length === 0}
          className={`flex items-center gap-2 px-8 py-3 ${
            isRunning
              ? isPaused
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : 'bg-gradient-to-r from-orange-500 to-red-500'
              : 'bg-gradient-to-r from-green-500 to-emerald-600'
          } hover:opacity-90 text-white rounded-xl font-bold shadow-lg disabled:opacity-50`}
        >
          {isRunning ? (
            isPaused ? (
              <>
                <Play className="w-5 h-5" />
                계속
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                일시정지
              </>
            )
          ) : (
            <>
              <Play className="w-5 h-5" />
              게임 시작
            </>
          )}
        </motion.button>
      </div>

      {/* 힌트 */}
      <AnimatePresence>
        {showHint && mission.hints && mission.hints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 bg-amber-500/10 p-4 rounded-xl border border-amber-500/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <p className="font-bold text-amber-300">힌트</p>
              <button onClick={() => setShowHint(false)} className="ml-auto text-amber-400 hover:text-amber-300">✕</button>
            </div>
            <ul className="text-amber-200 text-sm space-y-1">
              {mission.hints.map((hint, i) => (
                <li key={i}>• {hint}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 성공 메시지 */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-3xl shadow-2xl text-center"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl mb-4"
              >
                🎮
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">게임 클리어!</h2>
              <p className="text-emerald-100">최종 점수: {score}점</p>
              <p className="text-emerald-100 mt-1">+{mission.exp} XP 획득</p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameMakerMission;

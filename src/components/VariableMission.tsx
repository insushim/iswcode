import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, Lightbulb, Code, Box, Plus, Minus, X, Divide } from 'lucide-react';
import type { Mission } from '../types';

interface Props {
  mission: Mission;
  onComplete: (perfect: boolean) => void;
}

interface Variable {
  name: string;
  value: number | string;
  history: (number | string)[];
}

interface AssembledBlock {
  id: string;
  type: string;
  varName?: string;
  value?: number | string;
  operator?: string;
}

const VariableMission: React.FC<Props> = ({ mission, onComplete }) => {
  const [variables, setVariables] = useState<Variable[]>([]);
  const [assembledBlocks, setAssembledBlocks] = useState<AssembledBlock[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [executionStep, setExecutionStep] = useState(-1);
  const [pythonCode, setPythonCode] = useState<string[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [newVarName, setNewVarName] = useState('');
  const [inputValue, setInputValue] = useState<string>('0');
  const [selectedVar, setSelectedVar] = useState<string>('');

  // 사용 가능한 블록 타입
  const blockTypes = mission.variableBlocks || [
    '변수 만들기',
    '값 넣기',
    '더하기',
    '빼기',
    '곱하기',
    '나누기',
    '출력하기',
  ];

  // 블록 스타일 가져오기
  const getBlockStyle = (type: string) => {
    if (type.includes('변수')) return 'from-purple-500 to-purple-700';
    if (type.includes('값')) return 'from-blue-500 to-blue-700';
    if (type.includes('더하기') || type.includes('+')) return 'from-green-500 to-green-700';
    if (type.includes('빼기') || type.includes('-')) return 'from-orange-500 to-orange-700';
    if (type.includes('곱하기') || type.includes('×')) return 'from-pink-500 to-pink-700';
    if (type.includes('나누기') || type.includes('÷')) return 'from-cyan-500 to-cyan-700';
    if (type.includes('출력')) return 'from-amber-500 to-amber-700';
    return 'from-slate-500 to-slate-700';
  };

  // 블록 아이콘 가져오기
  const getBlockIcon = (type: string) => {
    if (type.includes('변수')) return '📦';
    if (type.includes('값')) return '✏️';
    if (type.includes('더하기')) return '➕';
    if (type.includes('빼기')) return '➖';
    if (type.includes('곱하기')) return '✖️';
    if (type.includes('나누기')) return '➗';
    if (type.includes('출력')) return '📢';
    return '🔧';
  };

  // 블록 추가 핸들러
  const addBlock = (type: string) => {
    const newBlock: AssembledBlock = {
      id: `block-${Date.now()}`,
      type,
    };

    if (type === '변수 만들기') {
      if (!newVarName.trim()) {
        alert('변수 이름을 입력하세요!');
        return;
      }
      newBlock.varName = newVarName;
      newBlock.value = 0;
      setNewVarName('');
    } else if (type === '값 넣기') {
      if (!selectedVar) {
        alert('변수를 선택하세요!');
        return;
      }
      newBlock.varName = selectedVar;
      newBlock.value = parseFloat(inputValue) || 0;
    } else if (['더하기', '빼기', '곱하기', '나누기'].includes(type)) {
      if (!selectedVar) {
        alert('변수를 선택하세요!');
        return;
      }
      newBlock.varName = selectedVar;
      newBlock.value = parseFloat(inputValue) || 0;
      newBlock.operator = type === '더하기' ? '+' : type === '빼기' ? '-' : type === '곱하기' ? '×' : '÷';
    } else if (type === '출력하기') {
      if (!selectedVar) {
        alert('변수를 선택하세요!');
        return;
      }
      newBlock.varName = selectedVar;
    }

    setAssembledBlocks([...assembledBlocks, newBlock]);
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

  // 초기화
  const reset = () => {
    setVariables([]);
    setAssembledBlocks([]);
    setPythonCode([]);
    setOutput([]);
    setExecutionStep(-1);
    setShowSuccess(false);
    setScore(0);
  };

  // 블록을 Python 코드로 변환
  const blockToPython = (block: AssembledBlock): string => {
    switch (block.type) {
      case '변수 만들기':
        return `${block.varName} = ${block.value}`;
      case '값 넣기':
        return `${block.varName} = ${block.value}`;
      case '더하기':
        return `${block.varName} = ${block.varName} + ${block.value}`;
      case '빼기':
        return `${block.varName} = ${block.varName} - ${block.value}`;
      case '곱하기':
        return `${block.varName} = ${block.varName} * ${block.value}`;
      case '나누기':
        return `${block.varName} = ${block.varName} / ${block.value}`;
      case '출력하기':
        return `print(${block.varName})`;
      default:
        return '';
    }
  };

  // 실행
  const runCode = async () => {
    if (assembledBlocks.length === 0) {
      setShowHint(true);
      return;
    }

    setIsRunning(true);
    setOutput([]);
    setShowSuccess(false);

    const newVars: Variable[] = [];
    const newPythonCode: string[] = [];
    const newOutput: string[] = [];

    for (let i = 0; i < assembledBlocks.length; i++) {
      setExecutionStep(i);
      const block = assembledBlocks[i];

      // Python 코드 생성
      const pyCode = blockToPython(block);
      newPythonCode.push(pyCode);
      setPythonCode([...newPythonCode]);

      // 블록 실행
      await new Promise(resolve => setTimeout(resolve, 600));

      if (block.type === '변수 만들기') {
        const existingVar = newVars.find(v => v.name === block.varName);
        if (!existingVar) {
          newVars.push({
            name: block.varName!,
            value: block.value as number,
            history: [block.value as number],
          });
        }
      } else if (block.type === '값 넣기') {
        const varToUpdate = newVars.find(v => v.name === block.varName);
        if (varToUpdate) {
          varToUpdate.value = block.value as number;
          varToUpdate.history.push(block.value as number);
        }
      } else if (['더하기', '빼기', '곱하기', '나누기'].includes(block.type)) {
        const varToUpdate = newVars.find(v => v.name === block.varName);
        if (varToUpdate && typeof varToUpdate.value === 'number') {
          const val = block.value as number;
          switch (block.type) {
            case '더하기':
              varToUpdate.value += val;
              break;
            case '빼기':
              varToUpdate.value -= val;
              break;
            case '곱하기':
              varToUpdate.value *= val;
              break;
            case '나누기':
              if (val !== 0) varToUpdate.value /= val;
              break;
          }
          varToUpdate.history.push(varToUpdate.value);
        }
      } else if (block.type === '출력하기') {
        const varToOutput = newVars.find(v => v.name === block.varName);
        if (varToOutput) {
          newOutput.push(`${block.varName} = ${varToOutput.value}`);
          setOutput([...newOutput]);
        }
      }

      setVariables([...newVars]);
    }

    setExecutionStep(-1);
    setIsRunning(false);

    // 미션 완료 확인
    if (mission.targetVariables) {
      const allMatch = mission.targetVariables.every(target => {
        const currentVar = newVars.find(v => v.name === target.name);
        return currentVar && currentVar.value === target.value;
      });

      if (allMatch) {
        const earnedScore = mission.exp;
        setScore(earnedScore);
        setShowSuccess(true);
        setTimeout(() => {
          onComplete(true);
        }, 2000);
      }
    } else if (newVars.length > 0) {
      // 변수가 생성되면 완료
      const earnedScore = mission.exp;
      setScore(earnedScore);
      setShowSuccess(true);
      setTimeout(() => {
        onComplete(true);
      }, 2000);
    }
  };

  // 블록 텍스트 생성
  const getBlockText = (block: AssembledBlock): string => {
    switch (block.type) {
      case '변수 만들기':
        return `📦 변수 "${block.varName}" 만들기`;
      case '값 넣기':
        return `✏️ ${block.varName}에 ${block.value} 넣기`;
      case '더하기':
        return `➕ ${block.varName} + ${block.value}`;
      case '빼기':
        return `➖ ${block.varName} - ${block.value}`;
      case '곱하기':
        return `✖️ ${block.varName} × ${block.value}`;
      case '나누기':
        return `➗ ${block.varName} ÷ ${block.value}`;
      case '출력하기':
        return `📢 ${block.varName} 출력하기`;
      default:
        return block.type;
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-4 md:p-6">
      {/* 헤더 */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">📊</span>
          <h2 className="text-xl font-bold text-white">{mission.title}</h2>
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
        {/* 목표 변수 표시 */}
        {mission.targetVariables && (
          <div className="mt-2 p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-300 text-sm font-bold">🎯 목표:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {mission.targetVariables.map((target, i) => (
                <span key={i} className="text-emerald-200 text-xs bg-emerald-500/30 px-2 py-1 rounded">
                  {target.name} = {target.value}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 메인 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* 좌측: 블록 팔레트 */}
        <div className="space-y-4">
          {/* 블록 상자 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3">
            <p className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-xs">🧱</span>
              블록 상자
            </p>

            {/* 변수 이름 입력 */}
            <div className="mb-3">
              <label className="text-xs text-slate-400 block mb-1">새 변수 이름:</label>
              <input
                type="text"
                value={newVarName}
                onChange={(e) => setNewVarName(e.target.value)}
                placeholder="예: 점수"
                className="w-full px-2 py-1 bg-slate-900 border border-slate-600 rounded text-white text-sm"
              />
            </div>

            {/* 변수 선택 */}
            {variables.length > 0 && (
              <div className="mb-3">
                <label className="text-xs text-slate-400 block mb-1">변수 선택:</label>
                <select
                  value={selectedVar}
                  onChange={(e) => setSelectedVar(e.target.value)}
                  className="w-full px-2 py-1 bg-slate-900 border border-slate-600 rounded text-white text-sm"
                >
                  <option value="">선택하세요</option>
                  {variables.map(v => (
                    <option key={v.name} value={v.name}>{v.name}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 값 입력 */}
            <div className="mb-3">
              <label className="text-xs text-slate-400 block mb-1">값:</label>
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-2 py-1 bg-slate-900 border border-slate-600 rounded text-white text-sm"
              />
            </div>

            {/* 블록 버튼들 */}
            <div className="flex flex-col gap-1.5 max-h-[200px] overflow-y-auto">
              {blockTypes.map((block, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addBlock(block)}
                  disabled={isRunning}
                  className={`bg-gradient-to-r ${getBlockStyle(block)} text-white px-3 py-2 rounded-lg font-bold text-xs shadow-md disabled:opacity-50`}
                >
                  {getBlockIcon(block)} {block}
                </motion.button>
              ))}
            </div>
          </div>

          {/* 내 코드 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-3 min-h-[150px]">
            <p className="text-sm font-bold text-violet-300 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center text-xs">📝</span>
              내 코드
            </p>
            <div className="flex flex-col gap-1 max-h-[200px] overflow-y-auto">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: executionStep === index ? 1.05 : 1,
                    boxShadow: executionStep === index ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                  }}
                  className={`bg-gradient-to-r ${getBlockStyle(block.type)} text-white px-2 py-1.5 rounded-lg text-xs flex items-center gap-2`}
                >
                  <span className="w-5 h-5 bg-black/20 rounded flex items-center justify-center text-xs">{index + 1}</span>
                  <span className="flex-1 truncate">{getBlockText(block)}</span>
                  <div className="flex gap-1">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:bg-white/20 px-1 rounded">▲</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:bg-white/20 px-1 rounded">▼</button>
                    <button onClick={() => removeBlock(index)} className="hover:bg-red-500/50 px-1 rounded">✕</button>
                  </div>
                </motion.div>
              ))}
              {assembledBlocks.length === 0 && (
                <p className="text-slate-500 text-xs text-center py-4">블록을 추가하세요</p>
              )}
            </div>
          </div>
        </div>

        {/* 중앙: 변수 시각화 */}
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Box className="w-5 h-5 text-purple-400" />
            <p className="text-sm font-bold text-white">변수 상자</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center min-h-[200px] items-start content-start">
            <AnimatePresence>
              {variables.map((variable, i) => (
                <motion.div
                  key={variable.name}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0 }}
                  className="relative"
                >
                  {/* 변수 상자 */}
                  <motion.div
                    animate={{
                      scale: variable.history.length > 1 ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-24 h-28 bg-gradient-to-b from-purple-500 to-purple-700 rounded-xl shadow-lg border-2 border-purple-400 flex flex-col items-center justify-center"
                  >
                    {/* 라벨 */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-900 px-2 py-0.5 rounded text-xs text-purple-300 border border-purple-500">
                      {variable.name}
                    </div>
                    {/* 값 */}
                    <motion.div
                      key={String(variable.value)}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl font-bold text-white"
                    >
                      {typeof variable.value === 'number' ?
                        (Number.isInteger(variable.value) ? variable.value : variable.value.toFixed(2))
                        : variable.value}
                    </motion.div>
                    {/* 히스토리 */}
                    {variable.history.length > 1 && (
                      <div className="text-xs text-purple-200 mt-2 opacity-70">
                        {variable.history.slice(-3).map((v, i) => (
                          <span key={i}>{i > 0 ? ' → ' : ''}{typeof v === 'number' ? (Number.isInteger(v) ? v : (v as number).toFixed(1)) : v}</span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            {variables.length === 0 && (
              <div className="text-slate-500 text-sm text-center w-full py-10">
                <Box className="w-12 h-12 mx-auto mb-2 opacity-30" />
                <p>변수를 만들어보세요!</p>
              </div>
            )}
          </div>

          {/* 출력 결과 */}
          {output.length > 0 && (
            <div className="mt-4 p-3 bg-slate-900 rounded-xl border border-slate-600">
              <p className="text-xs text-amber-400 font-bold mb-2">📢 출력 결과:</p>
              {output.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400 text-sm font-mono"
                >
                  {'>'} {line}
                </motion.p>
              ))}
            </div>
          )}
        </div>

        {/* 우측: Python 코드 */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-cyan-400" />
            <p className="text-sm font-bold text-white">Python 코드</p>
          </div>

          <div className="bg-slate-950 rounded-xl p-3 font-mono text-sm min-h-[250px] border border-slate-700">
            <div className="text-slate-500 text-xs mb-2"># Python 코드가 여기에 표시됩니다</div>
            {pythonCode.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  backgroundColor: executionStep === i ? 'rgba(59, 130, 246, 0.2)' : 'transparent'
                }}
                className="text-cyan-300 py-0.5 px-1 rounded"
              >
                <span className="text-slate-600 mr-2">{i + 1}</span>
                {line}
              </motion.div>
            ))}
            {pythonCode.length === 0 && (
              <div className="text-slate-600 text-center py-10">
                <Code className="w-10 h-10 mx-auto mb-2 opacity-30" />
                <p className="text-xs">블록을 조립하고 실행하면<br/>Python 코드가 생성됩니다</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 실행 버튼 */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          disabled={isRunning}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold disabled:opacity-50"
        >
          <RotateCcw className="w-5 h-5" />
          초기화
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runCode}
          disabled={isRunning || assembledBlocks.length === 0}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white rounded-xl font-bold shadow-lg disabled:opacity-50"
        >
          <Play className="w-5 h-5" />
          {isRunning ? '실행 중...' : '실행'}
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
                transition={{ duration: 0.5 }}
                className="text-6xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">미션 완료!</h2>
              <p className="text-emerald-100">+{score} XP 획득</p>
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

export default VariableMission;

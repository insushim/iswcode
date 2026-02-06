import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, Lightbulb, MessageCircle, CheckCircle2, XCircle, Loader2, Terminal, Code2, Check, X, Target, BookOpen, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import CodeEditor from './CodeEditor';
import { useMissionStore } from '../../stores/missionStore';
import { runPython, runJavaScript, runTestCases } from '../../services/codeRunner';
import { getSmartHint, explainError } from '../../services/geminiService';
import type { Mission } from '../../types';

interface CodeWorkspaceProps {
  mission: Mission;
  onComplete: (perfect: boolean) => void;
}

interface TestCaseResult {
  passed: boolean;
  input: string;
  expectedOutput: string | undefined;
  actualOutput: string;
  description?: string;
  explanation?: string;
  errorHint?: string;
}

interface CheckQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

const CodeWorkspace: React.FC<CodeWorkspaceProps> = ({ mission, onComplete }) => {
  const { code, setCode, output, setOutput, isRunning, setIsRunning, hintsUsed, currentHintIndex, showHint } = useMissionStore();

  const [currentHint, setCurrentHint] = useState<string | null>(null);
  const [errorExplanation, setErrorExplanation] = useState<string | null>(null);
  const [testPassed, setTestPassed] = useState<boolean | null>(null);
  const [loadingHint, setLoadingHint] = useState(false);

  // Challenges 상태
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(new Set());
  const [showChallenges, setShowChallenges] = useState(false);

  // 새로운 상태들
  const [testCaseResults, setTestCaseResults] = useState<TestCaseResult[]>([]);
  const [showGuide, setShowGuide] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCheckQuestions, setShowCheckQuestions] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [allQuestionsCompleted, setAllQuestionsCompleted] = useState(false);

  const language = mission.language || 'python';
  const challenges = mission.challenges || [];

  // Ctrl+Enter로 코드 실행
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code]);

  // Confetti 애니메이션
  const ConfettiEffect = () => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
    }));

    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ y: -20, x: `${piece.left}vw`, opacity: 1, rotate: 0 }}
            animate={{
              y: '100vh',
              rotate: 360,
              opacity: 0,
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: 'linear',
            }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'][
                Math.floor(Math.random() * 5)
              ],
            }}
          />
        ))}
      </div>
    );
  };

  const handleRun = async () => {
    // 유효성 체크
    if (!code || code.trim() === '') {
      setOutput('코드를 작성해주세요!');
      setTestPassed(false);
      return;
    }

    if (code.trim() === (mission.starterCode || '').trim()) {
      setOutput('코드를 수정해보세요!');
      setTestPassed(false);
      return;
    }

    setIsRunning(true);
    setTestPassed(null);
    setErrorExplanation(null);
    setCurrentHint(null);
    setTestCaseResults([]);

    try {
      // 현재 활성화된 테스트 케이스와 예상 출력 결정
      const currentChallenge = showChallenges && challenges.length > 0 ? challenges[currentChallengeIndex] : null;
      const activeTestCases = currentChallenge?.testCases || mission.testCases;
      const activeExpectedOutput = currentChallenge?.testCases?.[0]?.expectedOutput || mission.expectedOutput;

      if (activeTestCases && activeTestCases.length > 0) {
        const result = await runTestCases(code, activeTestCases, language as 'python' | 'javascript');

        // 테스트케이스별 상세 결과 생성
        const detailedResults: TestCaseResult[] = activeTestCases.map((testCase, index) => {
          const actualOutput = result.testResults?.[index]?.output || result.output || '';
          const expected = testCase.expectedOutput || testCase.expected || '';
          const passed = actualOutput.trim() === expected.trim();

          return {
            passed,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput || testCase.expected,
            actualOutput: actualOutput,
            description: testCase.description,
            explanation: testCase.explanation,
            errorHint: testCase.errorHint,
          };
        });

        setTestCaseResults(detailedResults);

        // 모든 테스트케이스 통과 여부
        const allPassed = detailedResults.every(r => r.passed);
        setTestPassed(allPassed);
        setOutput(result.output);

        if (allPassed) {
          // 성공 애니메이션
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 3000);

          // 체크 질문이 있으면 표시
          if (mission.checkQuestions && mission.checkQuestions.length > 0 && !showCheckQuestions) {
            setTimeout(() => {
              setShowCheckQuestions(true);
            }, 1500);
          } else {
            // 연습문제 모드인지 확인
            if (showChallenges && challenges.length > 0) {
              setCompletedChallenges(prev => new Set([...prev, currentChallengeIndex]));

              setTimeout(() => {
                if (currentChallengeIndex < challenges.length - 1) {
                  const nextIdx = currentChallengeIndex + 1;
                  setCurrentChallengeIndex(nextIdx);
                  setCode(challenges[nextIdx].starterCode || '');
                  setOutput('');
                  setTestPassed(null);
                  setTestCaseResults([]);
                } else {
                  onComplete(hintsUsed === 0);
                }
              }, 2000);
            } else {
              setTimeout(() => {
                onComplete(hintsUsed === 0);
              }, 2000);
            }
          }
        } else {
          // 실패 시 피드백 표시
          const firstFailedTest = detailedResults.find(r => !r.passed);
          if (firstFailedTest?.errorHint) {
            setCurrentHint(`💡 ${firstFailedTest.errorHint}`);
          } else if (currentChallenge?.feedback) {
            setCurrentHint(`💡 ${currentChallenge.feedback.wrong}`);
          } else if (currentChallenge?.hints && currentChallenge.hints.length > 0) {
            setCurrentHint(`💡 힌트: ${currentChallenge.hints[0]}`);
          } else if (mission.hints && mission.hints.length > 0) {
            const hintIndex = Math.min(currentHintIndex, mission.hints.length - 1);
            setCurrentHint(`💡 힌트: ${mission.hints[hintIndex]}`);
          }
        }
      } else if (language === 'python') {
        const result = await runPython(code);
        setOutput(result.output);

        if (activeExpectedOutput) {
          const passed = result.output.trim() === activeExpectedOutput.trim();
          setTestPassed(passed);

          if (passed) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);

            // 체크 질문 확인
            if (mission.checkQuestions && mission.checkQuestions.length > 0 && !showCheckQuestions) {
              setTimeout(() => {
                setShowCheckQuestions(true);
              }, 1500);
            } else {
              setTimeout(() => {
                onComplete(hintsUsed === 0);
              }, 2000);
            }
          }
        }
      } else {
        const result = await runJavaScript(code);
        setOutput(result.output);

        if (activeExpectedOutput) {
          const passed = result.output.trim() === activeExpectedOutput.trim();
          setTestPassed(passed);

          if (passed) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);

            // 체크 질문 확인
            if (mission.checkQuestions && mission.checkQuestions.length > 0 && !showCheckQuestions) {
              setTimeout(() => {
                setShowCheckQuestions(true);
              }, 1500);
            } else {
              setTimeout(() => {
                onComplete(hintsUsed === 0);
              }, 2000);
            }
          }
        }
      }

    } catch (error) {
      setOutput('실행 중 오류가 발생했습니다.');
      setTestPassed(false);
      // 실패 시 힌트 표시
      if (mission.hints && mission.hints.length > 0) {
        setCurrentHint(`💡 힌트: ${mission.hints[0]}`);
      }
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(mission.starterCode || '');
    setOutput('');
    setTestPassed(null);
    setCurrentHint(null);
    setErrorExplanation(null);
    setTestCaseResults([]);
    setShowGuide(true);
  };

  const handleAnswerQuestion = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = mission.checkQuestions?.[currentQuestionIndex];
    if (!currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setQuestionAnswered(true);

    if (isCorrect) {
      setTimeout(() => {
        if (currentQuestionIndex < (mission.checkQuestions?.length || 0) - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedAnswer(null);
          setQuestionAnswered(false);
        } else {
          setAllQuestionsCompleted(true);
          setTimeout(() => {
            onComplete(hintsUsed === 0);
          }, 2000);
        }
      }, 2000);
    } else {
      setTimeout(() => {
        setSelectedAnswer(null);
        setQuestionAnswered(false);
      }, 3000);
    }
  };

  // Diff 비교를 위한 함수
  const getDiffHighlight = (expected: string, actual: string) => {
    const expectedLines = expected.split('\n');
    const actualLines = actual.split('\n');
    const maxLines = Math.max(expectedLines.length, actualLines.length);

    return Array.from({ length: maxLines }, (_, i) => ({
      expected: expectedLines[i] || '',
      actual: actualLines[i] || '',
      match: expectedLines[i] === actualLines[i],
    }));
  };

  const handleGetHint = async () => {
    if (loadingHint) return;

    setLoadingHint(true);
    try {
      const hint = await getSmartHint(
        mission.title,
        mission.description,
        code,
        currentHintIndex + 1,
        mission.hints?.slice(0, currentHintIndex + 1) || []
      );
      setCurrentHint(hint);
    } catch (error) {
      // Fallback to static hints
      if (mission.hints && currentHintIndex < mission.hints.length - 1) {
        setCurrentHint(mission.hints[currentHintIndex + 1]);
      } else {
        setCurrentHint('더 이상 힌트가 없어요. AI 튜터에게 물어보세요!');
      }
    } finally {
      setLoadingHint(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 animate-fade-in-up">
      {/* Confetti 애니메이션 */}
      <AnimatePresence>
        {showConfetti && <ConfettiEffect />}
      </AnimatePresence>

      {/* 체크 질문 모달 */}
      <AnimatePresence>
        {showCheckQuestions && mission.checkQuestions && mission.checkQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 p-8 max-w-2xl w-full shadow-2xl"
            >
              {allQuestionsCompleted ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/20 border-4 border-emerald-500 flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">완벽합니다!</h3>
                  <p className="text-slate-400">모든 개념을 이해했어요. 다음 미션으로 이동합니다...</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">개념 확인 퀴즈</h3>
                    <span className="text-sm text-slate-400">
                      {currentQuestionIndex + 1} / {mission.checkQuestions.length}
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg text-slate-200 mb-4">
                      {mission.checkQuestions[currentQuestionIndex].question}
                    </p>

                    <div className="space-y-3">
                      {mission.checkQuestions[currentQuestionIndex].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => !questionAnswered && setSelectedAnswer(idx)}
                          disabled={questionAnswered}
                          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                            questionAnswered
                              ? idx === mission.checkQuestions![currentQuestionIndex].correctAnswer
                                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                                : idx === selectedAnswer
                                ? 'bg-red-500/20 border-red-500 text-red-300'
                                : 'bg-slate-900/50 border-slate-700 text-slate-400'
                              : selectedAnswer === idx
                              ? 'bg-indigo-500/20 border-indigo-500 text-white'
                              : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-indigo-500/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {questionAnswered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-4 rounded-xl ${
                          selectedAnswer === mission.checkQuestions[currentQuestionIndex].correctAnswer
                            ? 'bg-emerald-500/10 border border-emerald-500/30'
                            : 'bg-red-500/10 border border-red-500/30'
                        }`}
                      >
                        <p className={`text-sm ${
                          selectedAnswer === mission.checkQuestions[currentQuestionIndex].correctAnswer
                            ? 'text-emerald-300'
                            : 'text-red-300'
                        }`}>
                          {selectedAnswer === mission.checkQuestions[currentQuestionIndex].correctAnswer
                            ? (mission.checkQuestions[currentQuestionIndex].feedback?.correct || '정답이에요!')
                            : (mission.checkQuestions[currentQuestionIndex].feedback?.incorrect || '다시 생각해보세요!')}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <button
                    onClick={handleAnswerQuestion}
                    disabled={selectedAnswer === null || questionAnswered}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {questionAnswered ? '다음 질문으로...' : '답변 제출'}
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 진행 상태 바 (연습문제 모드) */}
      {showChallenges && challenges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800 rounded-xl border border-slate-700/50 p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-300">진행 상황</span>
            <span className="text-sm font-bold text-indigo-400">
              {completedChallenges.size} / {challenges.length} 완료
            </span>
          </div>
          <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(completedChallenges.size / challenges.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}

      {/* 학습 목표 표시 */}
      {mission.learningObjectives && mission.learningObjectives.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/30 p-4"
        >
          <div className="flex items-start gap-3">
            <Target className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-bold text-indigo-300 mb-2">이번 미션의 학습 목표</h4>
              <ul className="space-y-1">
                {mission.learningObjectives.map((objective, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Editor Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">{mission.title}</h2>
            <p className="text-xs text-slate-400">{mission.concept || mission.description?.slice(0, 50)}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleGetHint}
            disabled={loadingHint}
            className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 rounded-lg text-sm font-medium transition-colors border border-amber-500/30"
          >
            {loadingHint ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lightbulb className="w-4 h-4" />}
            힌트 ({hintsUsed})
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-600"
          >
            <RotateCcw className="w-4 h-4" />
            초기화
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-50"
          >
            {isRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
            {isRunning ? '실행 중...' : '코드 실행 (Ctrl+Enter)'}
          </button>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left: Problem Description */}
        <div className="lg:w-1/3 bg-slate-800 rounded-2xl border border-slate-700/50 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 max-h-[300px] lg:max-h-[600px]">
          {/* 시작 가이드 패널 */}
          <AnimatePresence>
            {showGuide && (mission.steps || mission.hints) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/30 p-4"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <h4 className="text-sm font-bold text-blue-300">시작 가이드</h4>
                  </div>
                  <button
                    onClick={() => setShowGuide(false)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {mission.steps && mission.steps.length > 0 && (
                  <ol className="space-y-2 mb-3">
                    {mission.steps.map((step, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="text-blue-400 font-bold min-w-[20px]">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {mission.hints && mission.hints.length > 0 && !mission.steps && (
                  <div className="text-sm text-slate-300">
                    <p className="text-amber-400 mb-1">첫 번째 힌트:</p>
                    <p>{mission.hints[0]}</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <span className="inline-block px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 mb-3">
              문제 설명
            </span>
            <h3 className="text-lg font-bold text-slate-200 mb-2">{mission.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {mission.description}
            </p>
          </div>

          {mission.expectedOutput && (
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Output Example</h4>
              <div className="font-mono text-sm text-emerald-400">
                {mission.expectedOutput}
              </div>
            </div>
          )}

          {/* Hints Section */}
          <AnimatePresence>
            {currentHint && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20"
              >
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-300 mb-1 text-sm">힌트</h4>
                    <p className="text-sm text-amber-200/80">{currentHint}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Explanation */}
          <AnimatePresence>
            {errorExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20"
              >
                <div className="flex items-start gap-2">
                  <MessageCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-300 mb-1 text-sm">오류 도우미</h4>
                    <p className="text-sm text-red-200/80 whitespace-pre-wrap">{errorExplanation}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* XP Rewards */}
          <div className="mt-auto space-y-2">
            <div className={`flex items-center justify-between p-3 rounded-lg border ${testPassed ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-indigo-500/5 border-indigo-500/10'}`}>
              <div className="flex items-center gap-2">
                {testPassed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Check className="w-4 h-4 text-indigo-500" />
                )}
                <span className={`text-sm font-medium ${testPassed ? 'text-emerald-300' : 'text-slate-300'}`}>정확한 출력 완성</span>
              </div>
              <span className={`text-xs font-bold ${testPassed ? 'text-emerald-400' : 'text-indigo-400'}`}>+{mission.exp} XP</span>
            </div>
          </div>

          {/* Challenges Section */}
          {challenges.length > 0 && (
            <div className="mt-4 border-t border-slate-700 pt-4">
              <button
                onClick={() => setShowChallenges(!showChallenges)}
                className="w-full flex items-center justify-between p-3 bg-violet-500/10 rounded-xl border border-violet-500/30 hover:bg-violet-500/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <span className="font-bold text-violet-300">연습 문제</span>
                  <span className="text-xs bg-violet-500/30 px-2 py-0.5 rounded-full text-violet-200">
                    {completedChallenges.size}/{challenges.length}
                  </span>
                </div>
                <span className="text-violet-400">{showChallenges ? '▲' : '▼'}</span>
              </button>

              <AnimatePresence>
                {showChallenges && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-2 overflow-hidden"
                  >
                    {challenges.map((challenge, idx) => (
                      <motion.div
                        key={challenge.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          setCurrentChallengeIndex(idx);
                          setCode(challenge.starterCode || '');
                          setOutput('');
                          setTestPassed(null);
                        }}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          completedChallenges.has(idx)
                            ? 'bg-emerald-500/10 border-emerald-500/30'
                            : currentChallengeIndex === idx
                            ? 'bg-violet-500/20 border-violet-500/50'
                            : 'bg-slate-800/50 border-slate-700 hover:border-violet-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {completedChallenges.has(idx) ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                                challenge.difficulty === 'easy' ? 'border-emerald-500 text-emerald-400' :
                                challenge.difficulty === 'medium' ? 'border-yellow-500 text-yellow-400' :
                                'border-red-500 text-red-400'
                              }`}>
                                {idx + 1}
                              </span>
                            )}
                            <span className={`text-sm font-medium ${completedChallenges.has(idx) ? 'text-emerald-300' : 'text-slate-300'}`}>
                              {challenge.title}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            challenge.difficulty === 'easy' ? 'bg-emerald-500/20 text-emerald-400' :
                            challenge.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {challenge.difficulty === 'easy' ? '쉬움' : challenge.difficulty === 'medium' ? '보통' : '어려움'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 ml-7">{challenge.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Right: Code Editor & Terminal */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Editor Window */}
          <div className="bg-[#1e1e1e] rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden flex flex-col">
            {/* Tab Bar */}
            <div className="flex items-center bg-[#252526] border-b border-[#333]">
              <div className="px-4 py-2.5 bg-[#1e1e1e] border-t-2 border-indigo-500 text-sm text-slate-200 flex items-center gap-2 font-mono">
                <span className="text-indigo-400">{language === 'python' ? 'py' : 'js'}</span>
                main.{language === 'python' ? 'py' : 'js'}
              </div>
            </div>
            {/* Code Area - 고정 높이 */}
            <div className="h-[350px]">
              <CodeEditor
                language={language as any}
                value={code}
                onChange={setCode}
                height="350px"
              />
            </div>
          </div>

          {/* Terminal Window */}
          <div className={`min-h-56 bg-[#1e1e1e] rounded-2xl border ${testPassed ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' : testPassed === false ? 'border-red-500/50' : 'border-slate-700/50'} p-4 font-mono text-sm overflow-hidden flex flex-col transition-all duration-300`}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" /> 실행 결과
              </span>
              <div className="flex items-center gap-2">
                {testPassed !== null && (
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${testPassed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}
                  >
                    {testPassed ? (
                      <>
                        <Sparkles className="w-4 h-4" /> 정답! {mission.checkQuestions ? '개념 확인 중...' : '다음 레슨으로 이동합니다...'}
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4" /> 다시 시도해보세요
                      </>
                    )}
                  </motion.span>
                )}
                <div className="flex gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-full ${isRunning ? 'bg-yellow-500 animate-pulse' : testPassed ? 'bg-emerald-500' : 'bg-slate-600'}`}></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 text-slate-300 overflow-auto custom-scrollbar max-h-96">
              {isRunning ? (
                <div className="flex items-center gap-2 text-yellow-400">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {language === 'python' ? 'Python' : 'JavaScript'} 코드 실행 중...
                </div>
              ) : output ? (
                <div className="space-y-3">
                  {/* 테스트케이스별 상세 결과 */}
                  {testCaseResults.length > 0 ? (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-400 mb-2">테스트케이스 결과:</div>
                      {testCaseResults.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`p-3 rounded-lg border ${
                            result.passed
                              ? 'bg-emerald-500/10 border-emerald-500/30'
                              : 'bg-red-500/10 border-red-500/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {result.passed ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-400" />
                              )}
                              <span className={`text-xs font-bold ${result.passed ? 'text-emerald-300' : 'text-red-300'}`}>
                                테스트 {idx + 1} {result.description ? `- ${result.description}` : ''}
                              </span>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              result.passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                            }`}>
                              {result.passed ? 'PASS' : 'FAIL'}
                            </span>
                          </div>

                          <div className="space-y-2 text-xs">
                            {result.input && (
                              <div>
                                <span className="text-slate-500">입력:</span>
                                <pre className="mt-1 p-2 bg-slate-900/50 rounded text-slate-300">{result.input}</pre>
                              </div>
                            )}

                            {!result.passed && (
                              <>
                                <div>
                                  <span className="text-slate-500">예상 출력:</span>
                                  <pre className="mt-1 p-2 bg-emerald-500/10 rounded text-emerald-300">{result.expectedOutput}</pre>
                                </div>
                                <div>
                                  <span className="text-slate-500">실제 출력:</span>
                                  <pre className="mt-1 p-2 bg-red-500/10 rounded text-red-300">{result.actualOutput}</pre>
                                </div>

                                {/* Diff 비교 */}
                                <div className="mt-2 p-2 bg-slate-900/50 rounded">
                                  <span className="text-slate-500 block mb-1">차이점:</span>
                                  {getDiffHighlight(result.expectedOutput || '', result.actualOutput).map((line, i) => (
                                    <div key={i} className={`font-mono text-xs ${line.match ? 'text-slate-500' : 'text-red-400'}`}>
                                      {!line.match && (
                                        <>
                                          <div className="text-emerald-400">- {line.expected}</div>
                                          <div className="text-red-400">+ {line.actual}</div>
                                        </>
                                      )}
                                    </div>
                                  ))}
                                </div>

                                {result.errorHint && (
                                  <div className="mt-2 p-2 bg-amber-500/10 rounded border border-amber-500/30">
                                    <span className="text-amber-400 text-xs">힌트: {result.errorHint}</span>
                                  </div>
                                )}
                              </>
                            )}

                            {result.explanation && result.passed && (
                              <div className="mt-2 p-2 bg-blue-500/10 rounded border border-blue-500/30">
                                <span className="text-blue-300 text-xs">{result.explanation}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <span className="text-emerald-500">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span>{language === 'python' ? 'python' : 'node'} main.{language === 'python' ? 'py' : 'js'}</span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg ${testPassed ? 'bg-emerald-500/10 border border-emerald-500/30' : testPassed === false ? 'bg-red-500/10 border border-red-500/30' : 'bg-slate-800/50'}`}
                      >
                        <div className="text-slate-400 text-xs mb-1">출력:</div>
                        <pre className={`whitespace-pre-wrap font-mono text-lg ${testPassed ? 'text-emerald-300' : testPassed === false ? 'text-red-300' : 'text-slate-200'}`}>{output}</pre>
                      </motion.div>

                      {mission.expectedOutput && testPassed === false && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700"
                        >
                          <div className="text-slate-400 text-xs mb-1">예상 출력:</div>
                          <pre className="whitespace-pre-wrap font-mono text-sm text-slate-400">{mission.expectedOutput}</pre>
                        </motion.div>
                      )}
                    </>
                  )}

                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="text-slate-500">Program exited with code</span>
                    <span className={testPassed === false ? 'text-red-400' : 'text-emerald-400'}>{testPassed === false ? 1 : 0}</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-500">
                  <Play className="w-8 h-8 mb-2 opacity-50" />
                  <span className="text-sm">코드를 실행하면 결과가 여기에 표시됩니다</span>
                  <span className="text-xs mt-1 text-slate-600">단축키: Ctrl + Enter</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWorkspace;

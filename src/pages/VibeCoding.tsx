import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, RotateCcw, Code2, Lightbulb, Rocket, Check, Monitor, AlertTriangle, Wand2 } from 'lucide-react';
import { Loading } from '../components/Common';
import { CodeEditor } from '../components/Editor';
import { vibeCoding, fixCodeWithAI } from '../services/geminiService';
import { runPython, runJavaScript } from '../services/codeRunner';
import type { VibeCodingResponse } from '../types';

const VibeCoding: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState<'python' | 'javascript' | 'html'>('html');
  const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('simple');
  const [isLoading, setIsLoading] = useState(false);
  const [isFixing, setIsFixing] = useState(false);
  const [response, setResponse] = useState<VibeCodingResponse | null>(null);
  const [generatedCode, setGeneratedCode] = useState('');
  const [output, setOutput] = useState('');
  const [errorOutput, setErrorOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const examplePrompts = [
    { text: '숫자 맞추기 게임', lang: 'html' },
    { text: '가위바위보 게임', lang: 'html' },
    { text: '간단한 계산기', lang: 'html' },
    { text: 'Todo 리스트', lang: 'html' },
    { text: '구구단 출력하기', lang: 'python' },
    { text: '별 피라미드 출력', lang: 'python' },
  ];

  // HTML 템플릿 생성 (Python/JavaScript용)
  const generateInteractiveHTML = (code: string, lang: 'python' | 'javascript'): string => {
    if (lang === 'python') {
      return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      margin: 0;
    }
    .container { max-width: 600px; margin: 0 auto; }
    h2 { color: #a78bfa; margin-bottom: 15px; font-size: 18px; }
    .output-area {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 15px;
      font-family: 'Consolas', monospace;
      font-size: 14px;
      white-space: pre-wrap;
      min-height: 150px;
      max-height: 300px;
      overflow-y: auto;
    }
    .btn {
      background: linear-gradient(135deg, #8b5cf6, #ec4899);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 15px;
    }
    .btn:hover { opacity: 0.9; }
    .btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .loading { color: #94a3b8; }
    .error { color: #f87171; }
  </style>
  <script src="https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"></script>
</head>
<body>
  <div class="container">
    <h2>🐍 Python 실행 결과</h2>
    <div id="output" class="output-area"><span class="loading">Python 환경 로딩 중...</span></div>
    <button class="btn" id="runBtn" onclick="runCode()" disabled>▶ 다시 실행</button>
  </div>
  <script>
    let pyodide = null;
    const outputEl = document.getElementById('output');
    const runBtn = document.getElementById('runBtn');

    const code = ${JSON.stringify(code)};

    async function initPyodide() {
      try {
        pyodide = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
        });
        runBtn.disabled = false;
        runCode();
      } catch (e) {
        outputEl.innerHTML = '<span class="error">Python 환경 로딩 실패: ' + e.message + '</span>';
      }
    }

    async function runCode() {
      if (!pyodide) return;
      outputEl.innerHTML = '<span class="loading">실행 중...</span>';

      try {
        await pyodide.runPythonAsync(\`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
\`);

        await pyodide.runPythonAsync(code);

        const stdout = await pyodide.runPythonAsync('sys.stdout.getvalue()');
        const stderr = await pyodide.runPythonAsync('sys.stderr.getvalue()');

        let result = stdout || '(출력 없음)';
        if (stderr) result += '\\n<span class="error">' + stderr + '</span>';

        outputEl.innerHTML = result;
      } catch (e) {
        outputEl.innerHTML = '<span class="error">오류: ' + e.message + '</span>';
      }
    }

    initPyodide();
  </script>
</body>
</html>`;
    } else {
      // JavaScript
      return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      margin: 0;
    }
    .container { max-width: 600px; margin: 0 auto; }
    h2 { color: #fbbf24; margin-bottom: 15px; font-size: 18px; }
    .output-area {
      background: #0f172a;
      border: 1px solid #334155;
      border-radius: 8px;
      padding: 15px;
      font-family: 'Consolas', monospace;
      font-size: 14px;
      white-space: pre-wrap;
      min-height: 150px;
      max-height: 300px;
      overflow-y: auto;
    }
    .btn {
      background: linear-gradient(135deg, #f59e0b, #ef4444);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 15px;
    }
    .btn:hover { opacity: 0.9; }
    .error { color: #f87171; }
  </style>
</head>
<body>
  <div class="container">
    <h2>⚡ JavaScript 실행 결과</h2>
    <div id="output" class="output-area"></div>
    <button class="btn" onclick="runCode()">▶ 다시 실행</button>
  </div>
  <script>
    const outputEl = document.getElementById('output');
    const logs = [];

    const originalLog = console.log;
    console.log = function(...args) {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
      outputEl.innerHTML = logs.join('\\n');
    };

    function runCode() {
      logs.length = 0;
      outputEl.innerHTML = '';

      try {
        ${code}

        if (logs.length === 0) {
          outputEl.innerHTML = '(출력 없음)';
        }
      } catch (e) {
        outputEl.innerHTML = '<span class="error">오류: ' + e.message + '</span>';
      }
    }

    runCode();
  </script>
</body>
</html>`;
    }
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(null);
    setOutput('');
    setErrorOutput('');
    setShowPreview(true);

    try {
      const result = await vibeCoding({
        prompt,
        language,
        complexity,
      });

      setResponse(result);
      setGeneratedCode(result.code);
    } catch (error) {
      console.error('바이브코딩 오류:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // AI 오류 수정 재생성
  const handleFixWithAI = async () => {
    if (!generatedCode.trim() || !errorOutput.trim()) return;

    setIsFixing(true);

    try {
      const fixedCode = await fixCodeWithAI(generatedCode, errorOutput, language, prompt);
      setGeneratedCode(fixedCode);
      setErrorOutput('');
      setOutput('');
    } catch (error) {
      console.error('AI 수정 오류:', error);
    } finally {
      setIsFixing(false);
    }
  };

  const handleRunCode = async () => {
    if (!generatedCode.trim()) return;

    setErrorOutput('');

    try {
      const result = language === 'python'
        ? await runPython(generatedCode)
        : await runJavaScript(generatedCode);

      if (result.success) {
        setOutput(result.output || '(실행 완료)');
        setErrorOutput('');
      } else {
        setOutput('');
        setErrorOutput(result.error || '실행 중 오류가 발생했습니다.');
      }
    } catch (error) {
      setOutput('');
      setErrorOutput('실행 중 오류가 발생했습니다.');
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 미리보기용 HTML 코드 생성
  const getPreviewHTML = (): string => {
    if (language === 'html') {
      return generatedCode;
    }
    return generateInteractiveHTML(generatedCode, language);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg shadow-purple-500/25"
        >
          <Sparkles className="w-8 h-8 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-2 text-white">바이브코딩 스튜디오</h1>
        <p className="text-slate-400">
          원하는 것을 말해주세요. AI가 코드로 만들어드려요!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
            <h2 className="font-semibold mb-4 flex items-center gap-2 text-white">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              무엇을 만들고 싶으세요?
            </h2>

            {/* Prompt Input */}
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="예: 숫자 맞추기 게임을 만들어줘"
              className="w-full min-h-[120px] resize-none mb-4 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />

            {/* Options */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">언어</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="html">HTML (인터랙티브)</option>
                  <option value="python">Python</option>
                  <option value="javascript">JavaScript</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">복잡도</label>
                <select
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value as any)}
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-xl text-slate-200 focus:outline-none focus:border-purple-500"
                >
                  <option value="simple">간단하게</option>
                  <option value="medium">적당히</option>
                  <option value="complex">복잡하게</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleSubmit}
                disabled={isLoading || isFixing}
                className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                {isLoading ? '생성 중...' : '코드 생성하기'}
              </button>

              {/* AI 오류 수정 버튼 */}
              {errorOutput && (
                <button
                  onClick={handleFixWithAI}
                  disabled={isFixing || isLoading}
                  className="py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Wand2 className="w-4 h-4" />
                  {isFixing ? '수정 중...' : 'AI 오류 수정'}
                </button>
              )}
            </div>
          </div>

          {/* Example Prompts */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
            <h3 className="font-medium mb-3 text-white">예시 프롬프트</h3>
            <div className="flex flex-wrap gap-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setPrompt(example.text);
                    setLanguage(example.lang as any);
                  }}
                  className="px-3 py-1.5 text-sm bg-slate-700/50 hover:bg-slate-700 rounded-full transition-colors border border-slate-600 text-slate-300"
                >
                  {example.text}
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Info */}
          <AnimatePresence>
            {response && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
                  <h3 className="font-medium mb-3 flex items-center gap-2 text-white">
                    <Code2 className="w-5 h-5 text-purple-400" />
                    AI가 이해한 내용
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {response.understanding}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-slate-300">커스터마이징 아이디어</h4>
                    <ul className="space-y-1">
                      {response.customizationIdeas.map((idea, index) => (
                        <li key={index} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-purple-400">•</span>
                          {idea}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2 text-slate-300">더 발전시키려면</h4>
                    <ul className="space-y-1">
                      {response.nextSteps.map((step, index) => (
                        <li key={index} className="text-sm text-slate-400 flex items-start gap-2">
                          <Rocket className="w-4 h-4 text-pink-400 flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          {isLoading ? (
            <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-12">
              <div className="text-center">
                <Loading size="lg" />
                <p className="mt-4 text-slate-400">
                  AI가 코드를 작성하고 있어요...
                </p>
              </div>
            </div>
          ) : response ? (
            <>
              <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-white">생성된 코드</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-slate-300 border border-slate-600"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      {copied ? '복사됨!' : '복사'}
                    </button>
                    <button
                      onClick={() => setGeneratedCode(response.code)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-slate-300 border border-slate-600"
                    >
                      <RotateCcw className="w-4 h-4" />
                      초기화
                    </button>
                  </div>
                </div>

                <CodeEditor
                  language={language}
                  value={generatedCode}
                  onChange={setGeneratedCode}
                  height="250px"
                />

                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-slate-300 border border-slate-600"
                  >
                    <Monitor className="w-4 h-4" />
                    {showPreview ? '코드만 보기' : '미리보기'}
                  </button>
                </div>
              </div>

              {/* Error Display */}
              {errorOutput && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-400 mb-1">오류 발생</h4>
                      <pre className="text-sm text-red-300 whitespace-pre-wrap font-mono">{errorOutput}</pre>
                      <p className="text-xs text-red-400/70 mt-2">
                        위의 "AI 오류 수정" 버튼을 클릭하면 AI가 자동으로 코드를 수정합니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Interactive Preview */}
              <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
                <h3 className="font-medium mb-4 text-white flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-green-400" />
                  실행 결과
                </h3>

                {showPreview ? (
                  <div className="bg-white rounded-lg overflow-hidden border border-slate-600" style={{ minHeight: '400px' }}>
                    <iframe
                      key={generatedCode} // 코드 변경시 새로고침
                      srcDoc={getPreviewHTML()}
                      title="미리보기"
                      className="w-full h-full"
                      style={{ minHeight: '400px', border: 'none' }}
                      sandbox="allow-scripts allow-forms allow-modals"
                    />
                  </div>
                ) : (
                  <div className="bg-[#1e1e1e] rounded-lg p-4 font-mono text-sm text-slate-100 min-h-[100px] border border-slate-700">
                    <span className="text-slate-500">
                      "미리보기" 버튼을 클릭하면 직접 체험할 수 있어요!
                    </span>
                  </div>
                )}
              </div>

              {/* Explanation */}
              {response.explanation && (
                <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-6">
                  <h3 className="font-medium mb-3 text-white">코드 설명</h3>
                  <div className="prose prose-sm prose-invert max-w-none">
                    <p className="text-slate-400 whitespace-pre-wrap">
                      {response.explanation}
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="bg-slate-800 rounded-2xl border border-slate-700/50 p-12">
              <div className="text-center text-slate-500">
                <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>프롬프트를 입력하고 코드를 생성해보세요!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VibeCoding;

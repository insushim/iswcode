import type { CodeExecutionResult, TestCase } from '../types';

// 초등학생 친화적 에러 메시지 매핑
const errorTranslations: Record<string, { message: string; hint: string }> = {
  // 구문 오류
  'SyntaxError': {
    message: '앗! 코드에 오타가 있어요 😅',
    hint: '괄호나 따옴표, 콜론(:)을 확인해보세요!'
  },
  'invalid syntax': {
    message: '코드 문법이 맞지 않아요 📝',
    hint: '괄호, 따옴표, 들여쓰기를 다시 확인해보세요!'
  },

  // 변수/이름 오류
  'NameError': {
    message: '변수나 함수 이름을 찾을 수 없어요 🔍',
    hint: '변수를 먼저 만들었는지, 이름을 정확히 입력했는지 확인해보세요!'
  },
  'name .* is not defined': {
    message: '정의되지 않은 변수를 사용했어요 🔍',
    hint: '변수를 먼저 만든 후에 사용해야 해요!'
  },

  // 타입 오류
  'TypeError': {
    message: '데이터 타입이 맞지 않아요 🔢',
    hint: '숫자와 문자를 확인해보세요! 숫자는 따옴표 없이, 문자는 따옴표로 감싸야 해요!'
  },
  'unsupported operand type': {
    message: '서로 다른 타입끼리 계산할 수 없어요 ⚠️',
    hint: '숫자와 문자를 섞어서 계산하려고 하지 않았나요? int()로 변환해보세요!'
  },
  'can only concatenate str': {
    message: '문자열끼리만 합칠 수 있어요 ➕',
    hint: '숫자를 문자와 합치려면 str()을 사용해서 문자로 바꿔주세요!'
  },

  // 들여쓰기 오류
  'IndentationError': {
    message: '들여쓰기가 맞지 않아요 📐',
    hint: '스페이스 4칸을 확인해보세요! if, for, def 다음 줄은 꼭 들여써야 해요!'
  },
  'expected an indented block': {
    message: '들여쓰기가 필요한 부분이에요 📐',
    hint: 'if나 for 다음 줄은 스페이스 4칸을 들여써야 해요!'
  },
  'unexpected indent': {
    message: '필요없는 들여쓰기가 있어요 📐',
    hint: '앞쪽의 공백을 지워보세요!'
  },

  // 값 오류
  'ValueError': {
    message: '값이 올바르지 않아요 ❌',
    hint: '입력한 값이나 변환하려는 값을 확인해보세요!'
  },
  'invalid literal for int': {
    message: '숫자로 바꿀 수 없는 값이에요 🔢',
    hint: '문자를 숫자로 바꾸려고 했나요? "123"처럼 숫자 형태의 문자만 int()로 바꿀 수 있어요!'
  },

  // 인덱스 오류
  'IndexError': {
    message: '리스트 범위를 벗어났어요 📦',
    hint: '리스트에 없는 위치를 사용하려고 했어요! 리스트의 길이를 확인해보세요!'
  },
  'list index out of range': {
    message: '리스트에 없는 번호예요 📦',
    hint: '리스트는 0번부터 시작해요! 리스트의 길이보다 큰 번호를 사용하지 않았나요?'
  },

  // 키 오류
  'KeyError': {
    message: '딕셔너리에 없는 키예요 🗝️',
    hint: '딕셔너리에 그 키가 있는지 확인해보세요!'
  },

  // 속성 오류
  'AttributeError': {
    message: '그런 기능이 없어요 🎯',
    hint: '변수 타입에 맞는 기능인지 확인해보세요! 숫자엔 숫자 기능, 문자엔 문자 기능을 써야 해요!'
  },

  // 0으로 나누기
  'ZeroDivisionError': {
    message: '0으로 나눌 수 없어요 ➗',
    hint: '수학에서 0으로 나누는 건 불가능해요! 나누는 수가 0이 아닌지 확인해보세요!'
  },

  // 무한 루프 (시간 초과)
  'timeout': {
    message: '코드가 너무 오래 실행되고 있어요 ⏱️',
    hint: '무한 반복에 빠지지 않았나요? while 문의 조건을 확인해보세요!'
  },

  // 일반 런타임 오류
  'RuntimeError': {
    message: '실행 중에 문제가 생겼어요 ⚠️',
    hint: '코드 실행 순서나 로직을 다시 확인해보세요!'
  },
};

// 에러 메시지를 학생 친화적으로 번역하는 함수
const translateError = (errorMessage: string): string => {
  if (!errorMessage) {
    return '알 수 없는 오류가 발생했어요 🤔 선생님께 도움을 요청해보세요!';
  }

  // 각 에러 패턴과 매칭
  for (const [pattern, translation] of Object.entries(errorTranslations)) {
    // 정규식 패턴인 경우
    if (pattern.includes('.*') || pattern.includes('^') || pattern.includes('$')) {
      try {
        const regex = new RegExp(pattern, 'i');
        if (regex.test(errorMessage)) {
          return `${translation.message}\n\n💡 힌트: ${translation.hint}`;
        }
      } catch {
        // 정규식 오류 무시
      }
    }
    // 일반 문자열 매칭
    else if (errorMessage.includes(pattern)) {
      return `${translation.message}\n\n💡 힌트: ${translation.hint}`;
    }
  }

  // 매칭되는 패턴이 없으면 원본 메시지 반환 (간단히)
  const lines = errorMessage.split('\n');
  const mainError = lines.find(line =>
    line.includes('Error') || line.includes('Exception')
  ) || lines[0];

  return `오류가 발생했어요 ❌\n\n${mainError}\n\n💡 힌트: 코드를 천천히 다시 읽어보고, 예시와 비교해보세요!`;
};

// Pyodide 인스턴스 캐싱
let pyodideInstance: any = null;
let pyodideLoading: Promise<any> | null = null;

// Pyodide 초기화
const initPyodide = async (): Promise<any> => {
  if (pyodideInstance) {
    return pyodideInstance;
  }

  if (pyodideLoading) {
    return pyodideLoading;
  }

  if (typeof window !== 'undefined' && (window as any).loadPyodide) {
    pyodideLoading = (window as any).loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
    }).then((pyodide: any) => {
      pyodideInstance = pyodide;
      pyodideLoading = null;
      return pyodide;
    });
    return pyodideLoading;
  }

  return null;
};

// Python 코드 실행 (Pyodide 또는 시뮬레이션)
export const runPython = async (code: string, input?: string): Promise<CodeExecutionResult> => {
  const startTime = performance.now();

  try {
    // Pyodide 로드 시도
    const pyodide = await initPyodide();

    if (pyodide) {
      // input 시뮬레이션 - 항상 설정 (input이 없어도 빈 배열로 설정)
      const inputs = input ? input.split('\n') : [];
      pyodide.globals.set('__inputs__', pyodide.toPy(inputs));
      await pyodide.runPythonAsync(`
__input_index__ = 0
__inputs__ = list(__inputs__)
def input(prompt=''):
    global __input_index__
    if prompt:
        print(prompt, end='')
    if __input_index__ < len(__inputs__):
        result = __inputs__[__input_index__]
        __input_index__ += 1
        return result
    return ''
      `);

      // stdout/stderr 캡처
      await pyodide.runPythonAsync(`
import sys
from io import StringIO
__stdout__ = sys.stdout
__stderr__ = sys.stderr
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      try {
        // 코드 실행
        await pyodide.runPythonAsync(code);

        // 출력 가져오기
        const output = await pyodide.runPythonAsync(`
sys.stdout.getvalue()
        `);

        // stdout 복원
        await pyodide.runPythonAsync(`
sys.stdout = __stdout__
sys.stderr = __stderr__
        `);

        const executionTime = performance.now() - startTime;

        return {
          success: true,
          output: output.trim(),
          executionTime,
        };
      } catch (execError) {
        // 에러 발생 시 stderr 가져오기
        const errorOutput = await pyodide.runPythonAsync(`
sys.stderr.getvalue()
        `);

        // stdout 복원
        await pyodide.runPythonAsync(`
sys.stdout = __stdout__
sys.stderr = __stderr__
        `);

        const executionTime = performance.now() - startTime;
        const originalError = execError instanceof Error ? execError.message : String(execError);
        const friendlyError = translateError(originalError);

        return {
          success: false,
          output: errorOutput || '',
          error: friendlyError,
          executionTime,
        };
      }
    }

    // Pyodide 없으면 간단한 시뮬레이션
    return simulatePython(code, input);
  } catch (error) {
    const executionTime = performance.now() - startTime;
    const originalError = error instanceof Error ? error.message : '실행 중 오류가 발생했습니다';
    const friendlyError = translateError(originalError);

    return {
      success: false,
      output: '',
      error: friendlyError,
      executionTime,
    };
  }
};

// Python 간단 시뮬레이션 (Pyodide 없이)
const simulatePython = (code: string, input?: string): CodeExecutionResult => {
  const outputs: string[] = [];
  const inputs = input?.split('\n') || [];
  let inputIndex = 0;

  // 변수 저장소
  const variables: Record<string, any> = {};

  // 코드를 줄 단위로 분석
  const lines = code.split('\n');

  for (const line of lines) {
    const trimmedLine = line.trim();

    // 빈 줄이나 주석은 건너뛰기
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    // 변수 할당 처리: x = 값
    const assignMatch = trimmedLine.match(/^(\w+)\s*=\s*(.+)$/);
    if (assignMatch) {
      const [, varName, value] = assignMatch;
      try {
        // 문자열 값
        if ((value.startsWith("'") && value.endsWith("'")) ||
            (value.startsWith('"') && value.endsWith('"'))) {
          variables[varName] = value.slice(1, -1);
        }
        // 숫자 값
        else if (/^[\d.]+$/.test(value.trim())) {
          variables[varName] = parseFloat(value);
        }
        // 수식 계산
        else if (/^[\d\s+\-*/%().]+$/.test(value)) {
          variables[varName] = eval(value);
        }
        // 변수 참조
        else if (variables[value.trim()] !== undefined) {
          variables[varName] = variables[value.trim()];
        }
        // input() 함수
        else if (value.includes('input(')) {
          variables[varName] = inputs[inputIndex++] || '';
        }
        // int() 변환
        else if (value.startsWith('int(')) {
          const innerMatch = value.match(/int\(\s*(\w+)\s*\)/);
          if (innerMatch && variables[innerMatch[1]] !== undefined) {
            variables[varName] = parseInt(variables[innerMatch[1]]);
          }
        }
      } catch {
        // 파싱 실패시 무시
      }
      continue;
    }

    // print 문 처리
    const printMatch = trimmedLine.match(/^print\s*\((.*)\)$/);
    if (printMatch) {
      const content = printMatch[1].trim();

      // 빈 print()
      if (!content) {
        outputs.push('');
        continue;
      }

      // 문자열 리터럴
      if ((content.startsWith("'") && content.endsWith("'")) ||
          (content.startsWith('"') && content.endsWith('"'))) {
        outputs.push(content.slice(1, -1));
        continue;
      }

      // f-string
      if (content.startsWith("f'") || content.startsWith('f"')) {
        let fstring = content.slice(2, -1);
        fstring = fstring.replace(/\{([^}]+)\}/g, (_, varName) => {
          const v = varName.trim();
          return variables[v] !== undefined ? String(variables[v]) : `{${v}}`;
        });
        outputs.push(fstring);
        continue;
      }

      // 변수 참조
      if (variables[content] !== undefined) {
        outputs.push(String(variables[content]));
        continue;
      }

      // 숫자 계산
      if (/^[\d\s+\-*/%().]+$/.test(content)) {
        try {
          outputs.push(String(eval(content)));
        } catch {
          outputs.push(content);
        }
        continue;
      }

      // 변수가 포함된 계산
      let evalExpr = content;
      for (const [varName, varValue] of Object.entries(variables)) {
        evalExpr = evalExpr.replace(new RegExp(`\\b${varName}\\b`, 'g'), String(varValue));
      }
      if (/^[\d\s+\-*/%().]+$/.test(evalExpr)) {
        try {
          outputs.push(String(eval(evalExpr)));
          continue;
        } catch {
          // 계산 실패
        }
      }

      // 여러 인자가 있는 경우 (쉼표로 구분)
      if (content.includes(',')) {
        const parts = content.split(',').map(p => {
          const pt = p.trim();
          if ((pt.startsWith("'") && pt.endsWith("'")) ||
              (pt.startsWith('"') && pt.endsWith('"'))) {
            return pt.slice(1, -1);
          }
          if (variables[pt] !== undefined) {
            return String(variables[pt]);
          }
          return pt;
        });
        outputs.push(parts.join(' '));
        continue;
      }

      outputs.push(content);
    }
  }

  return {
    success: true,
    output: outputs.join('\n') || '(실행 완료 - 출력 없음)',
    executionTime: 0,
  };
};

// JavaScript 코드 실행 (console.log 캡처 방식)
export const runJavaScript = async (code: string): Promise<CodeExecutionResult> => {
  const startTime = performance.now();

  try {
    const outputs: string[] = [];

    // 커스텀 console 객체 생성
    const customConsole = {
      log: (...args: any[]) => {
        outputs.push(args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' '));
      },
      error: (...args: any[]) => {
        outputs.push('[오류] ' + args.map(arg => String(arg)).join(' '));
      },
      warn: (...args: any[]) => {
        outputs.push('[경고] ' + args.map(arg => String(arg)).join(' '));
      },
    };

    // Function 생성자를 사용하여 코드 실행
    // console을 매개변수로 전달하여 출력 캡처
    const wrappedCode = `
      const console = arguments[0];
      ${code}
    `;

    try {
      const fn = new Function(wrappedCode);
      const result = fn(customConsole);

      if (result !== undefined && outputs.length === 0) {
        outputs.push(String(result));
      }
    } catch (e) {
      throw e;
    }

    const executionTime = performance.now() - startTime;

    return {
      success: true,
      output: outputs.join('\n') || '(실행 완료)',
      executionTime,
    };
  } catch (error) {
    const executionTime = performance.now() - startTime;
    const originalError = error instanceof Error ? error.message : '실행 중 오류가 발생했습니다';
    const friendlyError = translateError(originalError);

    return {
      success: false,
      output: '',
      error: friendlyError,
      executionTime,
    };
  }
};

// HTML/CSS 미리보기 생성
export const generateHTMLPreview = (html: string, css?: string, js?: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: system-ui, sans-serif; padding: 16px; }
        ${css || ''}
      </style>
    </head>
    <body>
      ${html}
      ${js ? `<script>${js}</script>` : ''}
    </body>
    </html>
  `;
};

// 테스트 케이스 실행
export const runTestCases = async (
  code: string,
  testCases: TestCase[],
  language: 'python' | 'javascript'
): Promise<CodeExecutionResult> => {
  const results: Array<{
    passed: boolean;
    input: string;
    expected: string;
    actual: string;
    description?: string;
  }> = [];

  let allPassed = true;
  let totalTime = 0;

  for (const testCase of testCases) {
    const runFn = language === 'python' ? runPython : runJavaScript;
    const result = await runFn(code, testCase.input);

    totalTime += result.executionTime;

    const expected = testCase.expectedOutput || testCase.expected || '';
    const passed = result.output.trim() === expected.trim();
    if (!passed) allPassed = false;

    results.push({
      passed,
      input: testCase.input,
      expected: testCase.expectedOutput || testCase.expected || '',
      actual: result.output,
      description: testCase.description,
    });
  }

  return {
    success: allPassed,
    output: results.map(r =>
      `${r.passed ? '✅' : '❌'} ${r.description || '테스트'}: ${r.passed ? '통과' : `예상: ${r.expected}, 실제: ${r.actual}`}`
    ).join('\n'),
    executionTime: totalTime,
    testResults: results,
  };
};

// 코드 검증 (기본적인 구문 체크)
export const validateCode = (code: string, language: 'python' | 'javascript'): { valid: boolean; error?: string } => {
  if (!code.trim()) {
    return { valid: false, error: '코드를 입력해주세요 ✏️' };
  }

  if (language === 'python') {
    // 기본적인 Python 문법 체크
    const dangerousPatterns = [
      /import\s+(os|sys|subprocess)/,
      /exec\s*\(/,
      /__import__/,
      /open\s*\([^)]*['"](\/|\\)/,
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        return {
          valid: false,
          error: '안전하지 않은 코드가 있어요 🛡️\n\n💡 힌트: 수업에서 배운 기본 명령어만 사용해주세요!'
        };
      }
    }
  }

  if (language === 'javascript') {
    // 기본적인 JS 문법 체크
    const dangerousPatterns = [
      /eval\s*\(/,
      /Function\s*\(/,
      /fetch\s*\(/,
      /XMLHttpRequest/,
      /localStorage/,
      /document\.cookie/,
    ];

    for (const pattern of dangerousPatterns) {
      if (pattern.test(code)) {
        return {
          valid: false,
          error: '안전하지 않은 코드가 있어요 🛡️\n\n💡 힌트: 수업에서 배운 기본 명령어만 사용해주세요!'
        };
      }
    }
  }

  return { valid: true };
};

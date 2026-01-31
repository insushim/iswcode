// 스마트 힌트 서비스 - 맞춤형 점진적 힌트 시스템

export interface SmartHint {
  level: 1 | 2 | 3 | 4 | 5;
  content: string;
  codeSnippet?: string;
  relatedConcept?: string;
  visualAid?: string;
}

export interface CodeAnalysis {
  syntaxErrors: SyntaxError[];
  logicIssues: LogicIssue[];
  styleWarnings: StyleWarning[];
  suggestions: Suggestion[];
  complexity: 'simple' | 'moderate' | 'complex';
  conceptsUsed: string[];
  similarity: number; // 정답과의 유사도 0-100
}

interface SyntaxError {
  line: number;
  column: number;
  message: string;
  suggestion: string;
}

interface LogicIssue {
  type: 'infinite-loop' | 'unreachable-code' | 'unused-variable' | 'wrong-condition';
  line: number;
  message: string;
  severity: 'error' | 'warning';
}

interface StyleWarning {
  type: 'naming' | 'indentation' | 'complexity' | 'magic-number' | 'best-practice';
  line: number;
  message: string;
}

interface Suggestion {
  type: 'optimization' | 'readability' | 'best-practice';
  message: string;
  code?: string;
}

// 코드 분석 함수
export function analyzeCode(code: string, language: string): CodeAnalysis {
  const syntaxErrors: SyntaxError[] = [];
  const logicIssues: LogicIssue[] = [];
  const styleWarnings: StyleWarning[] = [];
  const suggestions: Suggestion[] = [];
  const conceptsUsed: string[] = [];

  const lines = code.split('\n');

  // Python 분석
  if (language === 'python') {
    lines.forEach((line, idx) => {
      const lineNum = idx + 1;
      const trimmed = line.trim();

      // 문법 오류 체크
      if (trimmed.includes('print ') && !trimmed.includes('print(')) {
        syntaxErrors.push({
          line: lineNum,
          column: line.indexOf('print'),
          message: 'Python 3에서는 print()를 사용해야 합니다',
          suggestion: 'print(값)'
        });
      }

      // 무한 루프 감지
      if (trimmed.startsWith('while True:') || trimmed.startsWith('while 1:')) {
        const hasBreak = lines.slice(idx + 1, idx + 10).some(l => l.includes('break'));
        if (!hasBreak) {
          logicIssues.push({
            type: 'infinite-loop',
            line: lineNum,
            message: '무한 루프가 발생할 수 있습니다. break 문이 필요합니다.',
            severity: 'error'
          });
        }
      }

      // 사용된 개념 추출
      if (trimmed.includes('for ')) conceptsUsed.push('반복문');
      if (trimmed.includes('if ')) conceptsUsed.push('조건문');
      if (trimmed.includes('def ')) conceptsUsed.push('함수');
      if (trimmed.includes('class ')) conceptsUsed.push('클래스');
      if (trimmed.includes('import ')) conceptsUsed.push('모듈');
      if (trimmed.includes('[') && trimmed.includes(']')) conceptsUsed.push('리스트');
      if (trimmed.includes('{') && trimmed.includes('}')) conceptsUsed.push('딕셔너리');

      // 스타일 경고
      if (/[a-z][A-Z]/.test(line) && !line.includes('camelCase')) {
        styleWarnings.push({
          type: 'naming',
          line: lineNum,
          message: 'Python에서는 snake_case를 권장합니다'
        });
      }
    });
  }

  // JavaScript 분석
  if (language === 'javascript') {
    lines.forEach((line, idx) => {
      const lineNum = idx + 1;
      const trimmed = line.trim();

      // var 사용 경고
      if (trimmed.startsWith('var ')) {
        styleWarnings.push({
          type: 'best-practice',
          line: lineNum,
          message: 'var 대신 let 또는 const를 사용하세요'
        });
      }

      // == 대신 === 권장
      if (trimmed.includes(' == ') && !trimmed.includes('===')) {
        suggestions.push({
          type: 'best-practice',
          message: `${lineNum}줄: == 대신 ===를 사용하면 더 안전합니다`
        });
      }

      // 개념 추출
      if (trimmed.includes('function ') || trimmed.includes('=>')) conceptsUsed.push('함수');
      if (trimmed.includes('for ') || trimmed.includes('forEach')) conceptsUsed.push('반복문');
      if (trimmed.includes('if ')) conceptsUsed.push('조건문');
      if (trimmed.includes('async ') || trimmed.includes('await ')) conceptsUsed.push('비동기');
      if (trimmed.includes('class ')) conceptsUsed.push('클래스');
    });
  }

  // 복잡도 계산
  let complexity: 'simple' | 'moderate' | 'complex' = 'simple';
  const uniqueConcepts = [...new Set(conceptsUsed)];
  if (uniqueConcepts.length > 4 || lines.length > 30) {
    complexity = 'complex';
  } else if (uniqueConcepts.length > 2 || lines.length > 15) {
    complexity = 'moderate';
  }

  return {
    syntaxErrors,
    logicIssues,
    styleWarnings,
    suggestions,
    complexity,
    conceptsUsed: uniqueConcepts,
    similarity: 0
  };
}

// 코드 유사도 계산
export function calculateSimilarity(studentCode: string, solution: string): number {
  // 정규화
  const normalize = (code: string) =>
    code.replace(/\s+/g, ' ').replace(/['"]/g, '').toLowerCase().trim();

  const s1 = normalize(studentCode);
  const s2 = normalize(solution);

  if (s1 === s2) return 100;
  if (s1.length === 0 || s2.length === 0) return 0;

  // 토큰 기반 유사도
  const tokens1 = new Set(s1.split(/\s+/));
  const tokens2 = new Set(s2.split(/\s+/));

  const intersection = [...tokens1].filter(t => tokens2.has(t)).length;
  const union = new Set([...tokens1, ...tokens2]).size;

  return Math.round((intersection / union) * 100);
}

// 스마트 힌트 생성
export function generateSmartHint(
  studentCode: string,
  solution: string,
  attempts: number,
  hints: string[],
  language: string = 'python'
): SmartHint {
  const analysis = analyzeCode(studentCode, language);
  const similarity = calculateSimilarity(studentCode, solution);

  // 시도 횟수와 유사도에 따라 힌트 레벨 결정
  let level: 1 | 2 | 3 | 4 | 5 = 1;

  if (attempts >= 10 || similarity < 20) {
    level = 5;
  } else if (attempts >= 7 || similarity < 40) {
    level = 4;
  } else if (attempts >= 5 || similarity < 60) {
    level = 3;
  } else if (attempts >= 3 || similarity < 80) {
    level = 2;
  }

  // 문법 오류가 있으면 우선 처리
  if (analysis.syntaxErrors.length > 0) {
    const error = analysis.syntaxErrors[0];
    return {
      level: 1,
      content: `${error.line}줄에 문법 오류가 있어요: ${error.message}`,
      codeSnippet: error.suggestion,
      relatedConcept: '문법'
    };
  }

  // 로직 문제가 있으면 경고
  if (analysis.logicIssues.length > 0) {
    const issue = analysis.logicIssues[0];
    return {
      level: 2,
      content: issue.message,
      relatedConcept: issue.type === 'infinite-loop' ? '반복문' : '조건문'
    };
  }

  // 레벨별 힌트 생성
  const hintContents = [
    // Level 1: 방향만 제시
    hints[0] || '문제를 다시 한번 읽어보세요. 어떤 개념이 필요할까요?',
    // Level 2: 개념 힌트
    hints[1] || `이 문제는 ${analysis.conceptsUsed[0] || '기본 문법'}을 사용해요.`,
    // Level 3: 구조 힌트
    hints[2] || '코드의 구조를 생각해보세요. 먼저 무엇을 해야 할까요?',
    // Level 4: 부분 해답
    `정답의 일부를 보여드릴게요:\n${solution.split('\n').slice(0, 2).join('\n')}...`,
    // Level 5: 거의 정답
    `거의 다 왔어요! 이렇게 시작해보세요:\n${solution.split('\n').slice(0, Math.ceil(solution.split('\n').length / 2)).join('\n')}`
  ];

  return {
    level,
    content: hintContents[level - 1],
    codeSnippet: level >= 4 ? solution.split('\n').slice(0, level - 2).join('\n') : undefined,
    relatedConcept: analysis.conceptsUsed[0],
    visualAid: level <= 2 ? 'concept-diagram' : undefined
  };
}

// 소크라테스식 질문 생성
export function generateSocraticQuestion(
  studentCode: string,
  solution: string,
  language: string = 'python'
): string {
  const analysis = analyzeCode(studentCode, language);
  const similarity = calculateSimilarity(studentCode, solution);

  // 코드가 비어있으면
  if (studentCode.trim().length < 10) {
    return '이 문제에서 가장 먼저 해야 할 일은 무엇일까요?';
  }

  // 개념별 질문
  if (analysis.conceptsUsed.includes('반복문')) {
    return '이 반복문이 몇 번 실행될까요? 어떤 조건에서 멈출까요?';
  }

  if (analysis.conceptsUsed.includes('조건문')) {
    return '이 조건이 참이 되려면 어떤 값이 필요할까요?';
  }

  if (analysis.conceptsUsed.includes('함수')) {
    return '이 함수가 어떤 값을 반환해야 할까요?';
  }

  // 유사도 기반 질문
  if (similarity < 30) {
    return '문제에서 요구하는 출력이 무엇인지 다시 확인해볼까요?';
  }

  if (similarity < 60) {
    return '지금 코드가 어떤 결과를 만드는지 머릿속으로 따라가 볼까요?';
  }

  if (similarity < 90) {
    return '거의 다 됐어요! 출력 결과와 예상 결과를 비교해볼까요?';
  }

  return '아주 잘하고 있어요! 혹시 더 간단하게 만들 수 있을까요?';
}

// 학습 패턴 분석
export interface LearningPattern {
  strongConcepts: string[];
  weakConcepts: string[];
  commonMistakes: { pattern: string; count: number }[];
  learningSpeed: 'fast' | 'average' | 'slow';
  preferredHintStyle: 'visual' | 'text' | 'code';
  averageAttempts: number;
  successRate: number;
}

export function analyzeLearningPattern(
  missionHistory: Array<{
    missionId: string;
    concept: string;
    attempts: number;
    timeSpent: number;
    success: boolean;
    hintsUsed: number;
  }>
): LearningPattern {
  if (missionHistory.length === 0) {
    return {
      strongConcepts: [],
      weakConcepts: [],
      commonMistakes: [],
      learningSpeed: 'average',
      preferredHintStyle: 'text',
      averageAttempts: 0,
      successRate: 0
    };
  }

  // 개념별 성공률 계산
  const conceptStats: Record<string, { success: number; total: number; avgAttempts: number }> = {};

  missionHistory.forEach(m => {
    if (!conceptStats[m.concept]) {
      conceptStats[m.concept] = { success: 0, total: 0, avgAttempts: 0 };
    }
    conceptStats[m.concept].total++;
    if (m.success) conceptStats[m.concept].success++;
    conceptStats[m.concept].avgAttempts += m.attempts;
  });

  // 강점/약점 분류
  const strongConcepts: string[] = [];
  const weakConcepts: string[] = [];

  Object.entries(conceptStats).forEach(([concept, stats]) => {
    const successRate = stats.success / stats.total;
    if (successRate >= 0.8) {
      strongConcepts.push(concept);
    } else if (successRate < 0.5) {
      weakConcepts.push(concept);
    }
  });

  // 학습 속도 계산
  const avgAttempts = missionHistory.reduce((sum, m) => sum + m.attempts, 0) / missionHistory.length;
  let learningSpeed: 'fast' | 'average' | 'slow' = 'average';
  if (avgAttempts <= 2) learningSpeed = 'fast';
  else if (avgAttempts >= 5) learningSpeed = 'slow';

  // 성공률
  const successRate = missionHistory.filter(m => m.success).length / missionHistory.length;

  return {
    strongConcepts,
    weakConcepts,
    commonMistakes: [],
    learningSpeed,
    preferredHintStyle: 'text',
    averageAttempts: Math.round(avgAttempts * 10) / 10,
    successRate: Math.round(successRate * 100)
  };
}

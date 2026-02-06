import type { Week } from '../../../types';

export const week10: Week = {
  id: 'week-10',
  number: 10,
  title: '반복의 마법',
  description: '반복문으로 효율적인 코드를 만들어요',
  missions: [
    {
      id: 'u2-w10-1',
      title: '반복 블록 소개',
      description: '같은 동작을 여러 번 반복해봐요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 10,
      concept: '반복문',
      conceptExplanation: `## 반복문이란?

같은 동작을 여러 번 할 때 **반복 블록**을 사용해요.

### 예시
- "앞으로 가기"를 5번 반복
- 반복 블록 하나로 5개 블록 효과!`,
      hints: ['반복 블록 안에 동작을 넣으세요', '반복 횟수를 설정하세요', '효율적이에요!'],
    },
    {
      id: 'u2-w10-2',
      title: '반복으로 정사각형 그리기',
      description: '4번 반복해서 정사각형을 그려봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 15,
      concept: '반복문 활용',
      conceptExplanation: '정사각형은 4번 같은 동작을 반복하면 그릴 수 있어요. 앞으로 가기 + 오른쪽 90도 회전을 4번 하면 정사각형이 완성돼요!',
      starterCode: '# 반복 블록으로 정사각형 그리기\n# 앞으로 + 오른쪽 90도를 4번 반복하세요',
      testCases: [
        { input: '4', expectedOutput: '정사각형 완성!' },
        { input: '90', expectedOutput: '각도: 90도' },
        { input: 'forward,right', expectedOutput: '앞으로+오른쪽' },
        { input: 'square', expectedOutput: '정사각형!' },
      ],
      hints: ['앞으로 + 오른쪽 90도를 4번 반복', '반복 횟수: 4', '각도: 90도'],
    },
    {
      id: 'u2-w10-3',
      title: '삼각형 그리기',
      description: '3번 반복해서 삼각형을 그려봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 15,
      concept: '반복문 응용',
      conceptExplanation: `## 삼각형 그리기

삼각형은 3번 반복하면 그릴 수 있어요!

### 삼각형 공식
- **반복 횟수**: 3번
- **각도**: 120도 (360도 ÷ 3 = 120도)

\`\`\`
반복 3번:
  앞으로 가기
  오른쪽으로 120도 회전
\`\`\`

삼각형은 3개 변이 있으니까 3번 반복하는 거예요!`,
      starterCode: '# 삼각형을 그려보세요\n# 앞으로 + 오른쪽 120도를 3번 반복',
      testCases: [
        { input: '3', expectedOutput: '반복: 3번' },
        { input: '120', expectedOutput: '각도: 120도' },
        { input: 'triangle', expectedOutput: '삼각형 완성!' },
        { input: 'forward,right,120,3', expectedOutput: '삼각형!' },
      ],
      hints: ['반복 횟수는 3번이에요', '각도는 120도예요', '앞으로 + 오른쪽 120도를 반복하세요'],
    },
    {
      id: 'u2-w10-4',
      title: '오각형 그리기',
      description: '5번 반복해서 오각형을 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 18,
      concept: '반복문 심화',
      conceptExplanation: `## 오각형 그리기

오각형은 5번 반복하면 그릴 수 있어요!

### 오각형 공식
- **반복 횟수**: 5번
- **각도**: 72도 (360도 ÷ 5 = 72도)

\`\`\`
반복 5번:
  앞으로 가기
  오른쪽으로 72도 회전
\`\`\`

### 패턴 발견!
- 삼각형: 360 ÷ 3 = 120도
- 사각형: 360 ÷ 4 = 90도
- 오각형: 360 ÷ 5 = 72도

반복 횟수로 360을 나누면 각도가 나와요!`,
      starterCode: '# 오각형을 그려보세요\n# 앞으로 + 오른쪽 72도를 5번 반복',
      testCases: [
        { input: '5', expectedOutput: '반복: 5번' },
        { input: '72', expectedOutput: '각도: 72도' },
        { input: 'pentagon', expectedOutput: '오각형 완성!' },
        { input: 'forward,right,72,5', expectedOutput: '오각형!' },
      ],
      hints: ['반복 횟수는 5번이에요', '360 ÷ 5 = 72도예요', '앞으로 + 오른쪽 72도를 반복하세요'],
    },
    {
      id: 'u2-w10-5',
      title: '별 그리기',
      description: '5번 반복해서 별 모양을 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '반복문 창의성',
      conceptExplanation: `## 별 그리기

별은 특별한 각도로 반복하면 그릴 수 있어요!

### 별 모양 공식
- **반복 횟수**: 5번
- **각도**: 144도 (별의 뾰족한 각도)

\`\`\`
반복 5번:
  앞으로 가기
  오른쪽으로 144도 회전
\`\`\`

### 왜 144도일까?
별은 2바퀴를 도는 것처럼 그려져요.
360도 × 2 = 720도
720도 ÷ 5 = 144도

일반 오각형(72도)보다 각도가 커서 뾰족한 별 모양이 만들어져요!`,
      starterCode: '# 별 모양을 그려보세요\n# 앞으로 + 오른쪽 144도를 5번 반복',
      testCases: [
        { input: '5', expectedOutput: '반복: 5번' },
        { input: '144', expectedOutput: '각도: 144도' },
        { input: 'star', expectedOutput: '별 완성!' },
        { input: 'forward,right,144,5', expectedOutput: '별!' },
      ],
      hints: ['반복 횟수는 5번이에요', '각도는 144도예요', '일반 오각형(72도)보다 각도가 커요'],
    },
    {
      id: 'u2-w10-6',
      title: '나선형 그리기',
      description: '점점 길어지는 나선을 그려봐요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 110,
      estimatedMinutes: 22,
      concept: '변화하는 반복',
      conceptExplanation: `## 나선형 그리기

같은 동작을 반복하면서 조금씩 변화를 줘봐요!

### 나선 공식
\`\`\`
길이 = 10
반복 12번:
  앞으로 (길이)만큼 가기
  오른쪽으로 90도 회전
  길이 = 길이 + 5
\`\`\`

### 핵심 포인트
- 매번 같은 동작을 하지만
- **길이가 점점 길어져요** (10 → 15 → 20 → ...)
- 그래서 나선 모양이 만들어져요!

이처럼 반복하면서 값을 바꾸면 더 복잡한 모양을 만들 수 있어요!`,
      starterCode: `# 나선형을 그려보세요
# 길이를 10부터 시작해서 5씩 증가시키세요
# 12번 반복하세요`,
      testCases: [
        { input: '10,15,20', expectedOutput: '길이: 10→15→20' },
        { input: '12', expectedOutput: '반복: 12번' },
        { input: 'spiral', expectedOutput: '나선 완성!' },
        { input: 'forward,right,increase', expectedOutput: '나선형!' },
      ],
      hints: ['시작 길이는 10이에요', '매번 5씩 증가하세요', '12번 반복하세요', '각도는 90도예요'],
    },
    {
      id: 'u2-w10-7',
      title: '계단 그리기',
      description: '반복으로 계단 모양을 만들어봐요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 105,
      estimatedMinutes: 20,
      concept: '반복 패턴',
      conceptExplanation: `## 계단 그리기

계단은 같은 패턴을 반복해서 만들어요!

### 계단 한 칸
\`\`\`
1. 앞으로 가기
2. 오른쪽으로 90도
3. 앞으로 가기
4. 왼쪽으로 90도
\`\`\`

### 계단 여러 칸
\`\`\`
반복 5번:
  앞으로 가기
  오른쪽으로 90도
  앞으로 가기
  왼쪽으로 90도
\`\`\`

이렇게 하면 5칸짜리 계단이 완성돼요! 반복 횟수를 바꾸면 계단 칸 수도 바뀌어요.`,
      starterCode: `# 계단을 그려보세요
# 앞으로 → 오른쪽 90도 → 앞으로 → 왼쪽 90도
# 이 패턴을 5번 반복하세요`,
      testCases: [
        { input: '5', expectedOutput: '계단: 5칸' },
        { input: 'forward,right,forward,left', expectedOutput: '계단 패턴' },
        { input: 'stairs', expectedOutput: '계단 완성!' },
        { input: '90', expectedOutput: '각도: 90도' },
      ],
      hints: ['한 칸은 4개 동작이에요', '앞으로 → 오른쪽 → 앞으로 → 왼쪽', '이 패턴을 5번 반복하세요'],
    },
    {
      id: 'u2-w10-8',
      title: '종합: 반복으로 패턴 만들기',
      description: '여러 도형을 반복으로 조합해서 멋진 패턴을 만들어봐요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 130,
      estimatedMinutes: 28,
      concept: '반복문 종합',
      conceptExplanation: `## 반복문 종합 도전!

지금까지 배운 모든 반복 기술을 합쳐봐요!

### 복잡한 패턴 만들기
\`\`\`
반복 6번:
  # 작은 사각형 그리기
  반복 4번:
    앞으로 30
    오른쪽 90도

  # 60도 회전해서 다음 위치로
  오른쪽 60도
\`\`\`

### 핵심 포인트
- **중첩 반복**: 반복 안에 또 반복!
- **작은 사각형** 6개가 원 모양으로 배치돼요
- 360 ÷ 6 = 60도씩 회전해서 균등하게 배치

### 응용 아이디어
- 반복 횟수 바꾸기 (8번, 12번...)
- 도형 종류 바꾸기 (삼각형, 오각형...)
- 색깔 추가하기

반복문을 잘 사용하면 코드는 짧지만 복잡하고 멋진 패턴을 만들 수 있어요!`,
      starterCode: `# 복잡한 패턴을 만들어보세요!
# 외부 반복: 6번
#   내부 반복: 4번 (정사각형)
#     앞으로 30
#     오른쪽 90도
#   오른쪽 60도 회전
#
# 이렇게 하면 사각형 6개가 원 모양으로 배치돼요!`,
      testCases: [
        { input: '6', expectedOutput: '외부 반복: 6번' },
        { input: '4', expectedOutput: '내부 반복: 4번' },
        { input: '60', expectedOutput: '회전: 60도' },
        { input: 'pattern', expectedOutput: '패턴 완성!' },
      ],
      hints: ['중첩 반복을 사용하세요', '외부 반복 6번, 내부 반복 4번', '매 외부 반복마다 60도 회전하세요', '정사각형이 원 모양으로 배치돼요'],
    },
  ],
};

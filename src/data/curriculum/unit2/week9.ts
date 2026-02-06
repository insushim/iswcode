import type { Week } from '../../../types';

export const week9: Week = {
  id: 'week-9',
  number: 9,
  title: '블록 코딩 세계로!',
  description: '순차 실행의 기초를 배워요',
  missions: [
    {
      id: 'u2-w9-1',
      title: '블록 쌓기 시작',
      description: '블록을 순서대로 연결해서 캐릭터를 움직여봐요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 10,
      concept: '순차 실행',
      conceptExplanation: `## 순차 실행이란?

컴퓨터는 명령을 **위에서 아래로 순서대로** 실행해요.

### 예시
\`\`\`
1. 앞으로 가기
2. 오른쪽으로 돌기
3. 앞으로 가기
\`\`\`

이 순서대로 캐릭터가 움직여요!`,
      hints: ['블록을 위에서 아래로 연결하세요', '순서가 중요해요!', '실행 버튼을 눌러 확인하세요'],
    },
    {
      id: 'u2-w9-2',
      title: '여러 동작 연결하기',
      description: '3개 이상의 블록을 연결해봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '순차 실행',
      conceptExplanation: '여러 블록을 연결하면 복잡한 동작을 만들 수 있어요. 순서를 바꾸면 결과도 달라지니까 순서가 정말 중요해요!',
      starterCode: '# 블록을 순서대로 배치하세요\n# 앞으로 → 오른쪽 → 앞으로 순서로 만들어보세요',
      testCases: [
        { input: '', expectedOutput: '앞으로\n오른쪽\n앞으로' },
        { input: '', expectedOutput: '앞으로\n오른쪽\n앞으로' },
        { input: '', expectedOutput: '앞으로\n오른쪽\n앞으로' },
        { input: '', expectedOutput: '앞으로\n오른쪽\n앞으로' },
      ],
      hints: ['블록 3개를 연결하세요', '순서를 잘 생각해보세요', '실행해서 확인하세요'],
    },
    {
      id: 'u2-w9-3',
      title: '캐릭터 이동 순서',
      description: 'x, y 좌표를 순서대로 이동시켜봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '좌표 이동',
      conceptExplanation: `## 좌표 이동하기

캐릭터를 특정 위치로 보낼 수 있어요.

### 좌표란?
- **x**: 가로 위치 (왼쪽 ← 0 → 오른쪽)
- **y**: 세로 위치 (위 ↑ 0 ↓ 아래)

### 순서 예시
\`\`\`
1. (0, 0)으로 이동
2. (100, 0)으로 이동
3. (100, 100)으로 이동
\`\`\`

이렇게 하면 직각으로 꺾인 길을 만들 수 있어요!`,
      starterCode: '# 좌표를 순서대로 이동하세요\n# (0,0) → (50,0) → (50,50) → (0,50)',
      testCases: [
        { input: '0,0', expectedOutput: '위치: (0, 0)' },
        { input: '50,0', expectedOutput: '위치: (50, 0)' },
        { input: '50,50', expectedOutput: '위치: (50, 50)' },
        { input: '0,50', expectedOutput: '위치: (0, 50)' },
      ],
      hints: ['좌표는 (x, y) 형식이에요', '4개 위치를 순서대로 이동하세요', '사각형 모양으로 움직여요'],
    },
    {
      id: 'u2-w9-4',
      title: '색깔 순서대로 칠하기',
      description: '빨강 → 파랑 → 초록 순서로 칠해봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 15,
      concept: '색상 변경',
      conceptExplanation: `## 색상 변경하기

캐릭터나 도형의 색을 바꿀 수 있어요.

### 주요 색상
- 빨강 (red)
- 파랑 (blue)
- 초록 (green)
- 노랑 (yellow)

### 순서가 중요!
색을 바꾸는 순서에 따라 다른 모양이 만들어져요. 예를 들어:
\`\`\`
1. 빨강으로 칠하기
2. 앞으로 가기
3. 파랑으로 칠하기
4. 앞으로 가기
\`\`\`
이렇게 하면 빨강-파랑 선이 그려져요!`,
      starterCode: '# 빨강 → 파랑 → 초록 순서로 색을 바꾸세요',
      testCases: [
        { input: 'red', expectedOutput: '색상: 빨강' },
        { input: 'blue', expectedOutput: '색상: 파랑' },
        { input: 'green', expectedOutput: '색상: 초록' },
        { input: 'red,blue,green', expectedOutput: '순서: 빨강→파랑→초록' },
      ],
      hints: ['색상 블록을 순서대로 배치하세요', 'red, blue, green 순서예요', '각 색을 바꾼 후 동작을 추가할 수 있어요'],
    },
    {
      id: 'u2-w9-5',
      title: '도형 그리기 순서',
      description: '원 → 사각형 → 삼각형 순서로 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 18,
      concept: '도형 그리기',
      conceptExplanation: `## 도형 그리기

여러 도형을 순서대로 그릴 수 있어요.

### 기본 도형
- **원(circle)**: 둥근 모양
- **사각형(square)**: 네모 모양
- **삼각형(triangle)**: 세모 모양

### 도형 그리는 순서
\`\`\`
1. 원 그리기
2. 위치 이동
3. 사각형 그리기
4. 위치 이동
5. 삼각형 그리기
\`\`\`

도형을 그린 후 위치를 이동하면 여러 도형을 한 화면에 그릴 수 있어요! 도형의 순서를 바꾸면 화면에 나타나는 순서도 바뀌어요.`,
      starterCode: '# 원 → 사각형 → 삼각형 순서로 그리세요',
      testCases: [
        { input: 'circle', expectedOutput: '도형: 원' },
        { input: 'square', expectedOutput: '도형: 사각형' },
        { input: 'triangle', expectedOutput: '도형: 삼각형' },
        { input: 'circle,square,triangle', expectedOutput: '순서: 원→사각형→삼각형' },
      ],
      hints: ['도형 블록을 순서대로 배치하세요', '각 도형 사이에 위치 이동을 넣으면 겹치지 않아요', '총 3개 도형을 그려야 해요'],
    },
    {
      id: 'u2-w9-6',
      title: '소리 재생 순서',
      description: '도레미 순서대로 소리를 재생해봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 85,
      estimatedMinutes: 15,
      concept: '소리 재생',
      conceptExplanation: `## 소리 재생하기

음악을 만들려면 소리를 순서대로 재생해야 해요.

### 음계
- 도(C) - 레(D) - 미(E) - 파(F) - 솔(G) - 라(A) - 시(B)

### 순서 연주
\`\`\`
1. 도 재생
2. 레 재생
3. 미 재생
\`\`\`

이렇게 하면 "도레미" 멜로디가 만들어져요! 순서를 바꾸면 다른 멜로디가 되겠죠? 음악은 순서가 정말 중요해요.`,
      starterCode: '# 도(C) → 레(D) → 미(E) 순서로 재생하세요',
      testCases: [
        { input: 'C', expectedOutput: '소리: 도' },
        { input: 'D', expectedOutput: '소리: 레' },
        { input: 'E', expectedOutput: '소리: 미' },
        { input: 'C,D,E', expectedOutput: '멜로디: 도레미' },
      ],
      hints: ['소리 블록을 순서대로 배치하세요', 'C-D-E 순서로 재생하세요', '각 소리 사이에 대기 시간을 넣을 수 있어요'],
    },
    {
      id: 'u2-w9-7',
      title: '크기 변화 순서',
      description: '작게 → 보통 → 크게 순서로 크기를 바꿔봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 95,
      estimatedMinutes: 18,
      concept: '크기 변경',
      conceptExplanation: `## 크기 변경하기

캐릭터나 도형의 크기를 바꿀 수 있어요.

### 크기 단계
- **50%**: 작게 (절반 크기)
- **100%**: 보통 (원래 크기)
- **150%**: 크게 (1.5배 크기)
- **200%**: 아주 크게 (2배 크기)

### 순서 효과
\`\`\`
1. 50%로 작게
2. 100%로 보통
3. 150%로 크게
\`\`\`

이렇게 하면 점점 커지는 애니메이션 효과를 만들 수 있어요! 순서를 반대로 하면 점점 작아지는 효과도 만들 수 있죠.`,
      starterCode: '# 50% → 100% → 150% 순서로 크기를 바꾸세요',
      testCases: [
        { input: '50', expectedOutput: '크기: 50%' },
        { input: '100', expectedOutput: '크기: 100%' },
        { input: '150', expectedOutput: '크기: 150%' },
        { input: '50,100,150', expectedOutput: '순서: 작게→보통→크게' },
      ],
      hints: ['크기 블록을 순서대로 배치하세요', '50 → 100 → 150 순서예요', '각 크기 변화 사이에 대기 시간을 넣으면 애니메이션처럼 보여요'],
    },
    {
      id: 'u2-w9-8',
      title: '종합: 간단한 애니메이션',
      description: '이동, 색상, 크기를 조합해서 애니메이션을 만들어봐요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 120,
      estimatedMinutes: 25,
      concept: '순차 실행 종합',
      conceptExplanation: `## 순차 실행 종합

지금까지 배운 것을 모두 합쳐봐요!

### 애니메이션 만들기
\`\`\`
1. 위치 (0, 0)으로 이동
2. 빨강으로 색 변경
3. 50% 크기로 작게
4. 위치 (100, 100)으로 이동
5. 파랑으로 색 변경
6. 100% 크기로 보통
\`\`\`

### 핵심 포인트
- **이동**: 캐릭터가 움직여요
- **색상**: 다양한 색으로 예뻐요
- **크기**: 크기가 변해서 생동감이 생겨요

이 모든 것을 순서대로 실행하면 멋진 애니메이션이 완성돼요! 순서를 바꾸면 완전히 다른 애니메이션이 만들어져요.`,
      starterCode: `# 애니메이션을 만들어보세요!
# 1. (0,0)으로 이동
# 2. 빨강(red)으로 색 변경
# 3. 50% 크기로 작게
# 4. (100,100)으로 이동
# 5. 파랑(blue)으로 색 변경
# 6. 150% 크기로 크게`,
      testCases: [
        { input: '0,0,red,50', expectedOutput: '시작: (0,0), 빨강, 작게' },
        { input: '100,100,blue,150', expectedOutput: '도착: (100,100), 파랑, 크게' },
        { input: 'animation', expectedOutput: '애니메이션 완성!' },
        { input: 'full', expectedOutput: '모든 단계 완료!' },
      ],
      hints: ['6개 명령을 순서대로 배치하세요', '이동 → 색 → 크기 → 이동 → 색 → 크기 순서예요', '각 단계 사이에 0.5초 대기를 넣으면 부드러워요'],
    },
  ],
};

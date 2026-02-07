import type { Week } from '../../../types';

export const week9: Week = {
  id: 'week-9',
  number: 9,
  title: '블록 코딩 세계로!',
  description: '순차 실행의 기초를 배우고 캐릭터를 움직여봐요',
  duration: '2차시',
  objectives: [
    '블록 코딩의 기본 개념을 이해한다',
    '순차 실행(위에서 아래로 실행)을 이해한다',
    '블록을 조합하여 캐릭터를 이동시킨다',
    '간단한 애니메이션을 순차적으로 구성한다',
    '블록 코딩과 텍스트 코딩의 관계를 이해한다',
  ],
  missions: [
    // ===== 미션 1: 블록 코딩 소개 (인터랙티브 레슨) =====
    {
      id: 'u2-w9-1',
      title: '블록 코딩이란?',
      description: '블록을 연결해서 프로그램을 만드는 방법을 배워요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 8,
      concept: '블록 코딩 소개',
      learningObjectives: ['블록 코딩의 개념을 설명할 수 있다', '블록의 종류(동작, 형태, 소리)를 구분할 수 있다'],
      cstaStandard: '1B-AP-10',
      conceptExplanation: `## 블록 코딩이란?

블록 코딩은 **레고처럼 블록을 끼워 맞추어** 프로그램을 만드는 방법이에요.

### 왜 블록 코딩?
- 타이핑 없이 마우스로 끌어다 놓기(드래그 앤 드롭)
- 블록 모양이 맞아야 연결되니까 문법 오류가 없어요
- Scratch, Code.org, Tynker 같은 도구가 있어요

### 블록의 종류 (Scratch 기준)
| 색상 | 카테고리 | 예시 |
|------|---------|------|
| 파랑 | 동작 | 10칸 움직이기, 15도 돌기 |
| 보라 | 형태 | "안녕!" 말하기, 크기 바꾸기 |
| 분홍 | 소리 | 야옹 소리 내기 |
| 노랑 | 이벤트 | 깃발 클릭했을 때 |
| 주황 | 제어 | 10번 반복하기 |

### 텍스트 코딩으로 바꾸면?
\`\`\`python
# 블록: [10칸 움직이기]
move(10)

# 블록: ["안녕!" 말하기]
say("안녕!")
\`\`\`

블록 하나하나가 코드 한 줄이에요!`,
      conceptCards: [
        { title: '블록 = 명령어', content: '하나의 블록은 컴퓨터에게 내리는 하나의 명령이에요', icon: '🧱', example: '[10칸 움직이기] = move(10)' },
        { title: '연결 = 프로그램', content: '블록을 위아래로 연결하면 프로그램이 돼요', icon: '🔗', example: '블록 3개 연결 = 코드 3줄' },
        { title: '순서 = 실행 순서', content: '위에 있는 블록부터 차례로 실행돼요', icon: '⬇️', example: '1번 블록 → 2번 블록 → 3번 블록' },
      ],
      checkQuestions: [
        {
          question: '블록 코딩에서 블록을 연결하는 방법은?',
          options: ['키보드로 타이핑한다', '마우스로 끌어다 놓는다', '음성으로 명령한다', '자동으로 연결된다'],
          correctAnswer: 1,
          explanation: '블록 코딩은 마우스로 블록을 끌어다 놓아서(드래그 앤 드롭) 연결해요.',
        },
        {
          question: 'Scratch에서 파란색 블록은 무엇을 담당하나요?',
          options: ['소리', '동작 (움직이기)', '형태 (말하기)', '이벤트'],
          correctAnswer: 1,
          explanation: '파란색 블록은 "동작" 카테고리로, 스프라이트를 움직이거나 회전시키는 명령이에요.',
        },
      ],
      hints: ['블록을 레고처럼 끼워 맞춰요', '위에서 아래 순서로 연결하세요', '블록 모양이 맞아야 연결돼요'],
      realWorldExample: 'Scratch로 만들어진 게임이 전 세계에 1억 개 이상 있어요. MIT에서 만든 무료 도구랍니다!',
    },

    // ===== 미션 2: 첫 번째 블록 프로그램 (비주얼 프로그래밍) =====
    {
      id: 'u2-w9-2',
      title: '고양이를 움직여요!',
      description: '블록 3개를 순서대로 배치하여 고양이를 목표 지점까지 이동시켜요',
      type: 'visual-programming',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '순차 실행',
      learningObjectives: ['블록을 순서대로 배치할 수 있다', '실행 결과를 예측할 수 있다'],
      conceptExplanation: `## 순차 실행

컴퓨터는 블록을 **위에서 아래로, 하나씩 순서대로** 실행해요.

### 미션: 고양이를 (3, 0)으로 이동시키기

\`\`\`
시작 위치: (0, 0)
목표 위치: (3, 0)

블록 배치:
1. [앞으로 1칸]
2. [앞으로 1칸]
3. [앞으로 1칸]
\`\`\`

### Python으로 바꾸면?
\`\`\`python
move_forward()  # (0,0) → (1,0)
move_forward()  # (1,0) → (2,0)
move_forward()  # (2,0) → (3,0)
\`\`\``,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 2, col: 0 },
      goalPosition: { row: 2, col: 3 },
      obstacles: [],
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '왼쪽 돌기'],
      correctBlocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸'],
      solutionSequence: ['forward', 'forward', 'forward'],
      maxCommands: 5,
      hints: ['고양이는 오른쪽을 보고 있어요', '앞으로 1칸을 3번 사용하세요', '블록 순서대로 실행돼요'],
      commonMistakes: ['블록 순서를 바꾸면 다른 곳으로 가요', '필요한 것보다 많은 블록을 사용하지 마세요'],
      checkQuestions: [
        {
          question: '"앞으로 1칸" 블록을 5번 실행하면 고양이는 몇 칸 이동하나요?',
          options: ['1칸', '3칸', '5칸', '10칸'],
          correctAnswer: 2,
          explanation: '블록 하나가 1칸이니까, 5번 실행하면 5칸 이동해요.',
        },
      ],
    },

    // ===== 미션 3: 방향 전환 (비주얼 프로그래밍) =====
    {
      id: 'u2-w9-3',
      title: '코너 돌기',
      description: '고양이를 오른쪽으로 꺾어서 목표 지점까지 보내세요',
      type: 'visual-programming',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '방향 전환',
      learningObjectives: ['방향 전환 블록을 사용할 수 있다', '이동+회전 조합으로 경로를 만들 수 있다'],
      conceptExplanation: `## 방향 전환하기

고양이는 보고 있는 방향으로만 갈 수 있어요.
다른 방향으로 가려면 먼저 **돌기** 블록을 써야 해요.

### 경로 계획
\`\`\`
시작: (0, 2), 오른쪽 보기
목표: (2, 0)

1. 앞으로 2칸 → (2, 2)
2. 오른쪽 돌기 → 아래를 봄
3. 앞으로 2칸 → (2, 0)
\`\`\`

### Python 변환
\`\`\`python
move_forward(2)   # 오른쪽으로 2칸
turn_right()      # 아래를 보도록 회전
move_forward(2)   # 아래로 2칸
\`\`\``,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 0, col: 0 },
      goalPosition: { row: 2, col: 2 },
      obstacles: [],
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '왼쪽 돌기'],
      correctBlocks: ['앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '앞으로 1칸', '앞으로 1칸'],
      solutionSequence: ['forward', 'forward', 'turn_right', 'forward', 'forward'],
      maxCommands: 6,
      hints: ['먼저 오른쪽으로 2칸 이동하세요', '그 다음 방향을 바꾸세요', '다시 앞으로 2칸 가세요'],
      commonMistakes: ['돌기 블록 없이 직진만 하면 목표에 갈 수 없어요', '오른쪽 돌기와 왼쪽 돌기를 구분하세요'],
    },

    // ===== 미션 4: 장애물 피하기 (비주얼 프로그래밍) =====
    {
      id: 'u2-w9-4',
      title: '장애물을 피해요!',
      description: '바위(장애물)를 피해서 별(목표)까지 가세요',
      type: 'visual-programming',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 15,
      concept: '경로 계획',
      learningObjectives: ['장애물을 피하는 경로를 계획할 수 있다', '여러 방법 중 효율적인 경로를 선택할 수 있다'],
      conceptExplanation: `## 경로 계획하기

장애물이 있으면 돌아가야 해요. 여러 경로 중 가장 짧은 길을 찾아봐요!

### 그리드 맵
\`\`\`
. . . . .
. . X . .
. . X . .
S . . . G
. . . . .

S = 시작, G = 목표, X = 장애물
\`\`\`

### 경로 A (위로 돌아가기): 9칸
### 경로 B (아래로 돌아가기): 7칸 ← 더 효율적!

### 프로그래밍 사고
1. 목표 위치 확인
2. 장애물 확인
3. 가능한 경로 찾기
4. 가장 효율적인 경로 선택`,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 3, col: 0 },
      goalPosition: { row: 3, col: 4 },
      obstacles: [
        { row: 1, col: 2 },
        { row: 2, col: 2 },
      ],
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '왼쪽 돌기', '오른쪽 돌기', '왼쪽 돌기'],
      correctBlocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸'],
      solutionSequence: ['forward', 'forward', 'forward', 'forward'],
      maxCommands: 8,
      hints: ['장애물이 없는 경로를 찾으세요', '가장 짧은 길은 직선이에요', '장애물 위치를 먼저 확인하세요'],
      commonMistakes: ['장애물 위치를 지나가면 실패해요', '불필요한 돌기를 사용하면 경로가 길어져요'],
      checkQuestions: [
        {
          question: '프로그래밍에서 경로를 계획할 때 가장 먼저 해야 할 일은?',
          options: ['바로 코딩 시작하기', '목표와 장애물 확인하기', '블록을 많이 사용하기', '빠르게 실행하기'],
          correctAnswer: 1,
          explanation: '코딩하기 전에 먼저 목표와 장애물을 확인하고 계획을 세우는 것이 중요해요!',
        },
      ],
    },

    // ===== 미션 5: 말하기 블록 (코딩) =====
    {
      id: 'u2-w9-5',
      title: '고양이가 인사해요',
      description: '고양이가 이동한 후 "안녕!"이라고 말하게 만드세요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 10,
      concept: '동작 + 형태 조합',
      learningObjectives: ['동작 블록과 형태 블록을 조합할 수 있다', '순서에 따라 결과가 달라짐을 이해한다'],
      conceptExplanation: `## 동작 + 말하기 조합

Scratch에서 가장 기본적인 프로그램을 만들어봐요!

### 블록 시퀀스
\`\`\`
[깃발 클릭했을 때]
[10칸 움직이기]
["안녕!" 2초 동안 말하기]
[10칸 움직이기]
["반가워!" 2초 동안 말하기]
\`\`\`

### Python으로 바꾸면?
\`\`\`python
# Scratch 블록을 Python으로!
move(10)
say("안녕!", 2)
move(10)
say("반가워!", 2)
\`\`\`

### JavaScript로 바꾸면?
\`\`\`javascript
move(10);
say("안녕!", 2);
move(10);
say("반가워!", 2);
\`\`\``,
      blocks: ['깃발 클릭했을 때', '10칸 움직이기', '"안녕!" 2초 동안 말하기', '10칸 움직이기', '"반가워!" 2초 동안 말하기'],
      correctBlocks: ['깃발 클릭했을 때', '10칸 움직이기', '"안녕!" 2초 동안 말하기', '10칸 움직이기', '"반가워!" 2초 동안 말하기'],
      solutionSequence: ['when_flag_clicked', 'move(10)', 'say("안녕!", 2)', 'move(10)', 'say("반가워!", 2)'],
      starterCode: `# 고양이를 움직이고 말하게 하세요!
# 순서: 이동 → 인사 → 이동 → 인사

# Scratch 블록을 Python으로 쓰면:
move(10)       # [10칸 움직이기]
say("안녕!", 2)  # ["안녕!" 2초 동안 말하기]
move(10)       # [10칸 움직이기]
say("반가워!", 2) # ["반가워!" 2초 동안 말하기]`,
      testCases: [
        { input: '', expectedOutput: '이동: 10칸\n말하기: 안녕!\n이동: 10칸\n말하기: 반가워!', description: '기본 순서 확인' },
        { input: 'step1', expectedOutput: '10칸 이동', description: '첫 번째 동작' },
        { input: 'step2', expectedOutput: '안녕! (2초)', description: '첫 번째 말하기' },
        { input: 'step3', expectedOutput: '반가워! (2초)', description: '두 번째 말하기' },
      ],
      hints: ['동작과 형태를 번갈아 배치하세요', '이동 먼저, 말하기 다음이에요', 'say() 함수에 문자열과 시간을 넣으세요'],
      commonMistakes: ['말하기를 먼저 하고 이동하면 순서가 달라져요', '2초 대기를 빼먹으면 말풍선이 안 보여요'],
    },

    // ===== 미션 6: 좌표 이동 (코딩) =====
    {
      id: 'u2-w9-6',
      title: '정확한 위치로 이동',
      description: 'x, y 좌표를 사용하여 정확한 위치로 이동시켜요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 12,
      concept: '좌표 시스템',
      learningObjectives: ['x, y 좌표계를 이해한다', 'goto 명령으로 정확한 위치로 이동할 수 있다'],
      conceptExplanation: `## Scratch 좌표 시스템

Scratch 무대는 **x축(가로)**과 **y축(세로)**으로 이루어져 있어요.

### 좌표 범위
\`\`\`
      y: 180 (위)
        |
x:-240 --- x:240
        |
     y:-180 (아래)
\`\`\`

### 주요 좌표
- **(0, 0)**: 무대 정중앙
- **(240, 0)**: 오른쪽 끝
- **(-240, 0)**: 왼쪽 끝
- **(0, 180)**: 위쪽 끝

### Scratch 블록 → Python
\`\`\`python
# [x: 100, y: 50 (으)로 이동하기]
goto(100, 50)

# [x좌표를 50만큼 바꾸기]
change_x(50)

# [y좌표를 -30만큼 바꾸기]
change_y(-30)
\`\`\``,
      starterCode: `# 좌표를 사용해서 사각형 경로를 그려보세요!
# (0,0) → (100,0) → (100,100) → (0,100) → (0,0)

goto(0, 0)      # 시작점
goto(100, 0)    # 오른쪽으로
goto(100, 100)  # 위로
goto(0, 100)    # 왼쪽으로
goto(0, 0)      # 시작점으로 돌아오기`,
      testCases: [
        { input: '0,0', expectedOutput: '위치: (0, 0)', description: '시작점 이동' },
        { input: '100,0', expectedOutput: '위치: (100, 0)', description: '오른쪽 이동' },
        { input: '100,100', expectedOutput: '위치: (100, 100)', description: '위로 이동' },
        { input: '0,100', expectedOutput: '위치: (0, 100)', description: '왼쪽 이동' },
      ],
      hints: ['x는 가로, y는 세로예요', 'goto(x, y)로 정확한 위치로 이동해요', '양수는 오른쪽/위, 음수는 왼쪽/아래'],
      blocks: ['x: 0, y: 0으로 이동하기', 'x: 100, y: 0으로 이동하기', 'x: 100, y: 100으로 이동하기', 'x: 0, y: 100으로 이동하기'],
      correctBlocks: ['x: 0, y: 0으로 이동하기', 'x: 100, y: 0으로 이동하기', 'x: 100, y: 100으로 이동하기', 'x: 0, y: 100으로 이동하기'],
      solutionSequence: ['goto(0,0)', 'goto(100,0)', 'goto(100,100)', 'goto(0,100)', 'goto(0,0)'],
      checkQuestions: [
        {
          question: 'Scratch 무대의 정중앙 좌표는?',
          options: ['(100, 100)', '(0, 0)', '(240, 180)', '(-240, -180)'],
          correctAnswer: 1,
          explanation: '무대 정중앙은 (0, 0)이에요. x와 y가 모두 0인 지점이죠.',
        },
      ],
    },

    // ===== 미션 7: 색상과 효과 (코딩) =====
    {
      id: 'u2-w9-7',
      title: '무지개 발자국',
      description: '이동하면서 색깔을 바꿔 무지개 선을 그려요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '펜 + 색상 변경',
      learningObjectives: ['펜 블록으로 선을 그릴 수 있다', '색상 효과를 변경할 수 있다'],
      conceptExplanation: `## 펜(Pen)으로 그리기

Scratch의 펜 기능으로 캐릭터가 지나간 길에 선을 그릴 수 있어요!

### 핵심 블록
\`\`\`
[펜 내리기]    → 선 그리기 시작
[펜 올리기]    → 선 그리기 중지
[펜 색깔을 빨강으로 정하기]
[펜 굵기를 3으로 정하기]
\`\`\`

### 무지개 순서
\`\`\`
1. 빨강으로 색 변경 → 이동
2. 주황으로 색 변경 → 이동
3. 노랑으로 색 변경 → 이동
4. 초록으로 색 변경 → 이동
5. 파랑으로 색 변경 → 이동
\`\`\`

### Python 변환
\`\`\`python
pen_down()           # 펜 내리기
set_pen_color("red") # 빨강
move(50)             # 50칸 이동
set_pen_color("orange")
move(50)
set_pen_color("yellow")
move(50)
pen_up()             # 펜 올리기
\`\`\``,
      starterCode: `# 무지개 선 그리기!
# 펜을 내리고, 색을 바꾸면서 이동하세요

pen_down()               # 펜 내리기
set_pen_color("red")     # 빨강
move(50)                 # 50칸 이동
set_pen_color("orange")  # 주황
move(50)
set_pen_color("yellow")  # 노랑
move(50)
set_pen_color("green")   # 초록
move(50)
set_pen_color("blue")    # 파랑
move(50)
pen_up()                 # 펜 올리기`,
      testCases: [
        { input: 'colors', expectedOutput: 'red,orange,yellow,green,blue', description: '색상 순서 확인' },
        { input: 'distance', expectedOutput: '250', description: '총 이동 거리 (50*5)' },
        { input: 'pen_state', expectedOutput: 'down→up', description: '펜 상태 확인' },
        { input: 'segments', expectedOutput: '5', description: '선분 개수 확인' },
      ],
      hints: ['pen_down()으로 그리기 시작하세요', '색을 먼저 바꾸고 이동하세요', '마지막에 pen_up()으로 마무리'],
      blocks: ['펜 내리기', '펜 올리기', '펜 색깔을 빨강으로', '펜 색깔을 주황으로', '펜 색깔을 노랑으로', '펜 색깔을 초록으로', '펜 색깔을 파랑으로', '50칸 움직이기'],
      correctBlocks: ['펜 내리기', '펜 색깔을 빨강으로', '50칸 움직이기', '펜 색깔을 주황으로', '50칸 움직이기', '펜 색깔을 노랑으로', '50칸 움직이기', '펜 색깔을 초록으로', '50칸 움직이기', '펜 색깔을 파랑으로', '50칸 움직이기', '펜 올리기'],
      solutionSequence: ['pen_down', 'color_red', 'move_50', 'color_orange', 'move_50', 'color_yellow', 'move_50', 'color_green', 'move_50', 'color_blue', 'move_50', 'pen_up'],
    },

    // ===== 미션 8: 미로 탈출 1단계 (비주얼 프로그래밍) =====
    {
      id: 'u2-w9-8',
      title: '미로 탈출 1단계',
      description: '간단한 미로에서 출구를 찾아가세요! (Week 9-10 프로젝트 시작)',
      type: 'visual-programming',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '순차 경로 찾기',
      isWeeklyProject: true,
      learningObjectives: ['복잡한 경로를 순차적 명령으로 분해할 수 있다', '최적 경로를 찾는 알고리즘적 사고를 한다'],
      conceptExplanation: `## 미로 탈출 프로젝트! (1단계)

이번 주와 다음 주에 걸쳐 미로 탈출 게임을 만들 거예요!

### 1단계: 간단한 미로 탈출
\`\`\`
S . X . .
. . X . .
. . . . .
. X X . .
. . . . G

S=시작, G=골, X=벽
\`\`\`

### 문제 해결 전략
1. **관찰**: 벽이 어디 있는지 확인
2. **계획**: 가능한 경로 찾기
3. **최적화**: 가장 짧은 경로 선택
4. **실행**: 블록으로 경로 표현
5. **검증**: 실행해서 확인

### 이것이 바로 알고리즘!
미로를 푸는 과정이 바로 **알고리즘**이에요.
단계별로 문제를 해결하는 방법을 만드는 거죠.`,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 0, col: 0 },
      goalPosition: { row: 4, col: 4 },
      obstacles: [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
        { row: 3, col: 1 },
        { row: 3, col: 2 },
      ],
      mazeWalls: true,
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '오른쪽 돌기', '왼쪽 돌기', '왼쪽 돌기'],
      correctBlocks: ['앞으로 1칸', '오른쪽 돌기', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '왼쪽 돌기', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸'],
      solutionSequence: ['forward', 'turn_right', 'forward', 'forward', 'forward', 'forward', 'turn_left', 'forward', 'forward', 'forward'],
      maxCommands: 12,
      hints: ['먼저 벽의 위치를 파악하세요', '벽을 피해서 아래로 내려가세요', '오른쪽 아래 모서리가 목표예요', '최소한의 블록으로 도전해보세요!'],
      extensionActivities: ['더 적은 블록으로 풀어보기', '다른 경로로도 풀어보기', '친구와 누가 적은 블록을 쓰는지 대결하기'],
    },

    // ===== 미션 9: 순차 실행 퀴즈 =====
    {
      id: 'u2-w9-9',
      title: '순차 실행 마스터 퀴즈',
      description: '이번 주 배운 내용을 확인해봐요!',
      type: 'quiz',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 8,
      concept: '순차 실행 복습',
      conceptExplanation: '이번 주에 배운 블록 코딩과 순차 실행 개념을 정리해봐요!',
      checkQuestions: [
        {
          question: '다음 블록의 실행 결과는? [앞으로 2칸] [오른쪽 돌기] [앞으로 1칸]',
          options: ['직선으로 3칸 이동', 'L자 모양으로 이동', '제자리에서 회전만', '뒤로 이동'],
          correctAnswer: 1,
          explanation: '앞으로 2칸 간 후 오른쪽으로 방향을 바꾸고 1칸 가면 L자 모양이 돼요.',
        },
        {
          question: 'Scratch에서 (0, 0) 좌표는 어디인가요?',
          options: ['왼쪽 위 모서리', '오른쪽 아래 모서리', '무대 정중앙', '왼쪽 아래 모서리'],
          correctAnswer: 2,
          explanation: 'Scratch 무대의 (0, 0)은 정중앙이에요.',
        },
        {
          question: '블록 순서를 바꾸면 어떻게 되나요?',
          options: ['결과가 같다', '결과가 달라진다', '오류가 난다', '실행이 안 된다'],
          correctAnswer: 1,
          explanation: '순차 실행에서는 순서가 중요해요! 순서를 바꾸면 다른 결과가 나와요.',
        },
        {
          question: '"say("안녕!", 2)"를 Scratch 블록으로 바꾸면?',
          options: ['[안녕! 생각하기]', '[안녕! 2초 동안 말하기]', '[안녕! 묻고 기다리기]', '[안녕! 소리 내기]'],
          correctAnswer: 1,
          explanation: 'say() 함수는 Scratch의 "~을 ~초 동안 말하기" 블록과 같아요.',
        },
      ],
      hints: ['이번 주 배운 내용을 떠올려보세요', '블록은 위에서 아래로 실행돼요', '좌표는 (x, y) 형태예요'],
    },

    // ===== 미션 10: 종합 프로젝트 =====
    {
      id: 'u2-w9-10',
      title: '나의 첫 애니메이션',
      description: '이동, 말하기, 색상을 조합해 나만의 짧은 애니메이션을 만드세요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 120,
      estimatedMinutes: 20,
      concept: '순차 실행 종합',
      isWeeklyProject: true,
      learningObjectives: ['여러 종류의 블록을 조합하여 프로그램을 만들 수 있다', '순차 실행으로 스토리가 있는 애니메이션을 구성할 수 있다'],
      conceptExplanation: `## 종합 프로젝트: 나의 첫 애니메이션

지금까지 배운 모든 것을 합쳐서 애니메이션을 만들어봐요!

### 사용할 블록들
- **동작**: 이동, 회전, 좌표 이동
- **형태**: 말하기, 생각하기
- **펜**: 선 그리기, 색상 변경

### 예시: 인사하는 고양이
\`\`\`
1. (0, 0)으로 이동
2. "안녕! 나는 고양이야" 2초 말하기
3. 빨강 펜으로 50칸 이동
4. 90도 오른쪽 돌기
5. 파랑 펜으로 50칸 이동
6. "멋진 선을 그렸어!" 2초 말하기
7. 크기를 150%로 변경
8. "짜잔~!" 3초 말하기
\`\`\`

### Python 전체 코드
\`\`\`python
goto(0, 0)
say("안녕! 나는 고양이야", 2)
pen_down()
set_pen_color("red")
move(50)
turn_right(90)
set_pen_color("blue")
move(50)
pen_up()
say("멋진 선을 그렸어!", 2)
set_size(150)
say("짜잔~!", 3)
\`\`\``,
      starterCode: `# 나만의 애니메이션을 만들어보세요!
# 최소 8개의 명령을 사용하세요

# 1. 시작 위치로 이동
goto(0, 0)

# 2. 인사하기
say("안녕! 나는 고양이야", 2)

# 3. 펜으로 그림 그리기
pen_down()
set_pen_color("red")
move(50)
turn_right(90)
set_pen_color("blue")
move(50)
pen_up()

# 4. 마무리
say("멋진 선을 그렸어!", 2)
set_size(150)
say("짜잔~!", 3)`,
      testCases: [
        { input: 'commands', expectedOutput: '8개 이상 명령 사용', description: '명령 개수 확인' },
        { input: 'types', expectedOutput: '동작+형태+펜', description: '3가지 이상 블록 카테고리 사용' },
        { input: 'story', expectedOutput: '시작→중간→끝 구조', description: '스토리 구조 확인' },
        { input: 'final_position', expectedOutput: '이동 완료', description: '최종 위치 확인' },
      ],
      hints: ['최소 8개 명령을 사용하세요', '동작/형태/펜 3종류 이상 사용하세요', '시작-중간-끝 구조로 만드세요', '자유롭게 창의적으로!'],
      extensionActivities: ['말하기 내용을 재미있는 이야기로 바꿔보기', '더 많은 색상 사용해보기', '좌표를 이용해 특정 글자 모양 그려보기'],
      challenges: [
        {
          id: 'u2-w9-10-c1',
          description: '동작, 형태, 펜 블록을 최소 3종류 이상 사용하기',
          difficulty: 'easy',
          feedback: {
            perfect: '3종류 이상의 블록을 잘 사용했어요!',
            wrong: '동작, 형태, 펜 중 빠진 종류가 있어요.',
          },
        },
        {
          id: 'u2-w9-10-c2',
          description: '총 10개 이상의 명령 블록을 사용하기',
          difficulty: 'medium',
          feedback: {
            perfect: '풍부한 애니메이션이에요!',
            wrong: '명령이 조금 부족해요. 더 추가해볼까요?',
          },
        },
        {
          id: 'u2-w9-10-c3',
          description: '시작, 중간, 끝이 있는 스토리를 만들기',
          difficulty: 'hard',
          feedback: {
            perfect: '완벽한 스토리 구조! 훌륭한 프로그래머예요!',
            wrong: '스토리의 흐름을 더 만들어보세요.',
          },
        },
      ],
    },
  ],
};

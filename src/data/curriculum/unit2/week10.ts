import type { Week } from '../../../types';

export const week10: Week = {
  id: 'week-10',
  number: 10,
  title: '반복의 마법',
  description: '반복문으로 효율적인 코드를 만들고 미로 탈출 게임을 완성해요',
  duration: '2차시',
  objectives: [
    '반복문(for, repeat)의 개념과 필요성을 이해한다',
    '반복문을 사용하여 도형을 그릴 수 있다',
    '중첩 반복문으로 복잡한 패턴을 만들 수 있다',
    '반복문의 블록 코딩과 Python 변환을 이해한다',
    '미로 탈출 게임 프로젝트를 완성한다',
  ],
  missions: [
    // ===== 미션 1: 반복문 소개 =====
    {
      id: 'u2-w10-1',
      title: '반복의 힘!',
      description: '같은 동작을 여러 번 반복하는 반복 블록을 배워요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 8,
      concept: '반복문 소개',
      learningObjectives: ['반복문의 필요성을 설명할 수 있다', '반복문으로 코드를 줄일 수 있음을 이해한다'],
      cstaStandard: '1B-AP-11',
      conceptExplanation: `## 왜 반복문이 필요할까?

정사각형을 그리려면 "앞으로 + 오른쪽 90도"를 4번 해야 해요.

### 반복문 없이 (12블록)
\`\`\`
앞으로 100    오른쪽 90도
앞으로 100    오른쪽 90도
앞으로 100    오른쪽 90도
앞으로 100    오른쪽 90도
\`\`\`

### 반복문 사용 (3블록!)
\`\`\`
[4번 반복하기]
  앞으로 100
  오른쪽 90도
\`\`\`

**12블록 → 3블록!** 4배 효율적!

### Scratch → Python
\`\`\`python
# Scratch: [4번 반복하기] 안에 블록
for i in range(4):
    move(100)
    turn_right(90)
\`\`\`

### Scratch → JavaScript
\`\`\`javascript
for (let i = 0; i < 4; i++) {
    move(100);
    turnRight(90);
}
\`\`\``,
      conceptCards: [
        { title: '반복 = 효율', content: '같은 코드를 여러 번 쓰는 대신 반복 블록 하나로!', icon: '🔄', example: '8블록 → 반복 사용하면 3블록' },
        { title: '반복 횟수', content: '몇 번 반복할지 숫자로 지정해요', icon: '🔢', example: '4번 반복 = 4바퀴' },
        { title: '반복 안쪽', content: '반복 블록 안에 넣은 명령만 반복돼요', icon: '📦', example: '반복 안: 이동+회전 → 둘 다 4번 실행' },
      ],
      checkQuestions: [
        {
          question: '"앞으로 1칸"을 10번 반복하면 총 몇 칸 이동하나요?',
          options: ['1칸', '5칸', '10칸', '100칸'],
          correctAnswer: 2,
          explanation: '1칸씩 10번 반복하면 10칸이에요!',
        },
        {
          question: '반복문의 가장 큰 장점은?',
          options: ['실행이 더 빨라진다', '코드를 짧고 효율적으로 만든다', '화면이 예뻐진다', '오류가 줄어든다'],
          correctAnswer: 1,
          explanation: '반복문을 사용하면 같은 코드를 여러 번 쓰지 않아도 돼서 효율적이에요!',
        },
      ],
      hints: ['같은 동작이 반복되면 반복 블록을 사용하세요', '반복 횟수를 잘 설정하세요', '반복 안쪽에 넣을 명령을 정확히 파악하세요'],
      realWorldExample: '세탁기가 "비누+물+회전"을 여러 번 반복하는 것처럼, 컴퓨터도 같은 동작을 반복할 수 있어요!',
    },

    // ===== 미션 2: 정사각형 그리기 =====
    {
      id: 'u2-w10-2',
      title: '반복으로 정사각형!',
      description: '4번 반복해서 정사각형을 그려봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '기본 반복문',
      learningObjectives: ['반복문으로 정사각형을 그릴 수 있다', '반복 횟수와 도형의 관계를 이해한다'],
      conceptExplanation: `## 반복문으로 정사각형 그리기

정사각형은 **4개의 변**과 **4개의 90도 꺾임**이 있어요.

### 패턴 발견!
\`\`\`
한 변: 앞으로 100 + 오른쪽 90도
이것을 4번 반복!
\`\`\`

### Scratch 블록
\`\`\`
[4번 반복하기]
  [100칸 움직이기]
  [90도 오른쪽 돌기]
\`\`\`

### Python 코드
\`\`\`python
for i in range(4):   # 4번 반복
    move(100)        # 100칸 이동
    turn_right(90)   # 90도 회전
\`\`\`

### 360도 법칙
정사각형은 한 바퀴(360도)를 도니까:
**360도 / 4변 = 90도** (각 꼭짓점에서 회전하는 각도)`,
      blocks: ['4번 반복하기', '100칸 움직이기', '90도 오른쪽 돌기'],
      correctBlocks: ['4번 반복하기', '100칸 움직이기', '90도 오른쪽 돌기'],
      solutionSequence: ['repeat(4)', 'move(100)', 'turn_right(90)'],
      starterCode: `# 반복문으로 정사각형 그리기
# 힌트: "앞으로 + 오른쪽 90도"를 4번!

for i in range(4):    # 4번 반복
    move(100)         # 100칸 이동
    turn_right(90)    # 90도 회전`,
      testCases: [
        { input: 'repeat_count', expectedOutput: '4', description: '반복 횟수: 4번' },
        { input: 'angle', expectedOutput: '90', description: '회전 각도: 90도' },
        { input: 'shape', expectedOutput: '정사각형', description: '완성 도형 확인' },
        { input: 'total_angle', expectedOutput: '360', description: '총 회전: 360도' },
      ],
      hints: ['앞으로 + 오른쪽 90도를 반복하세요', '반복 횟수는 4번이에요', '360 / 4 = 90도'],
      commonMistakes: ['반복 횟수를 3이나 5로 잘못 설정', '각도를 90이 아닌 다른 값으로 설정'],
      checkQuestions: [
        {
          question: '정사각형을 그리려면 각 꼭짓점에서 몇 도를 회전해야 하나요?',
          options: ['45도', '60도', '90도', '120도'],
          correctAnswer: 2,
          explanation: '360도 / 4변 = 90도! 정사각형의 외각은 90도예요.',
        },
      ],
    },

    // ===== 미션 3: 삼각형 그리기 =====
    {
      id: 'u2-w10-3',
      title: '삼각형도 반복으로!',
      description: '3번 반복해서 삼각형을 그려봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 12,
      concept: '반복문 + 각도 계산',
      learningObjectives: ['다른 도형도 반복문으로 그릴 수 있다', '변의 수와 회전 각도의 관계를 이해한다'],
      conceptExplanation: `## 삼각형 = 3번 반복!

### 공식 발견: 360도 / 변의 수 = 회전 각도
- 삼각형: 360 / 3 = **120도**
- 사각형: 360 / 4 = **90도**
- 오각형: 360 / 5 = **72도**

### Scratch 블록
\`\`\`
[3번 반복하기]
  [100칸 움직이기]
  [120도 오른쪽 돌기]
\`\`\`

### Python
\`\`\`python
sides = 3
angle = 360 / sides  # 120도

for i in range(sides):
    move(100)
    turn_right(angle)
\`\`\`

### 핵심 깨달음
도형을 그리는 공식은 항상 같아요!
변의 수만 바꾸면 어떤 도형이든 그릴 수 있어요!`,
      blocks: ['3번 반복하기', '100칸 움직이기', '120도 오른쪽 돌기'],
      correctBlocks: ['3번 반복하기', '100칸 움직이기', '120도 오른쪽 돌기'],
      solutionSequence: ['repeat(3)', 'move(100)', 'turn_right(120)'],
      starterCode: `# 삼각형 그리기
# 360도 / 3변 = 120도!

sides = 3
angle = 360 / sides  # 120

for i in range(sides):
    move(100)
    turn_right(angle)`,
      testCases: [
        { input: 'repeat_count', expectedOutput: '3', description: '반복 횟수: 3번' },
        { input: 'angle', expectedOutput: '120', description: '회전 각도: 120도' },
        { input: 'shape', expectedOutput: '삼각형', description: '완성 도형 확인' },
        { input: 'formula', expectedOutput: '360/3=120', description: '각도 공식 확인' },
      ],
      hints: ['360 / 3 = 120도', '삼각형은 3개 변이에요', '반복 횟수는 변의 수와 같아요'],
      commonMistakes: ['각도를 60도(내각)로 착각하는 경우 - 외각 120도가 맞아요'],
    },

    // ===== 미션 4: 다각형 그리기 마법 =====
    {
      id: 'u2-w10-4',
      title: '어떤 도형이든 그릴 수 있어!',
      description: '변의 수를 바꿔서 오각형, 육각형, 원을 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '변수와 반복문',
      learningObjectives: ['변의 수를 변수로 사용하여 다양한 다각형을 그릴 수 있다', '반복 횟수가 많아지면 원에 가까워짐을 이해한다'],
      conceptExplanation: `## 만능 도형 그리기 공식!

\`\`\`python
sides = ???           # 변의 수
angle = 360 / sides   # 회전 각도

for i in range(sides):
    move(100 / sides * 3)  # 크기 조절
    turn_right(angle)
\`\`\`

### 실험해보기!
| 변의 수 | 각도 | 도형 |
|---------|------|------|
| 3 | 120도 | 삼각형 |
| 4 | 90도 | 사각형 |
| 5 | 72도 | 오각형 |
| 6 | 60도 | 육각형 |
| 8 | 45도 | 팔각형 |
| 36 | 10도 | 거의 원! |
| 360 | 1도 | 완벽한 원! |

### 놀라운 사실!
변의 수를 아주 많이(36개 이상) 하면 **원**이 돼요!
모든 도형은 결국 같은 공식으로 만들어져요.`,
      starterCode: `# 변의 수를 바꿔보세요!
# 5 = 오각형, 6 = 육각형, 36 = 원

sides = 5              # 이 숫자를 바꿔보세요!
angle = 360 / sides
length = 300 / sides * 3

for i in range(sides):
    move(length)
    turn_right(angle)

# 오각형을 그린 후, sides를 6, 8, 36으로 바꿔보세요!`,
      testCases: [
        { input: 'sides=5', expectedOutput: '오각형 (72도)', description: '오각형 확인' },
        { input: 'sides=6', expectedOutput: '육각형 (60도)', description: '육각형 확인' },
        { input: 'sides=8', expectedOutput: '팔각형 (45도)', description: '팔각형 확인' },
        { input: 'sides=36', expectedOutput: '원 (10도)', description: '원 확인' },
      ],
      hints: ['공식: 360 / 변의 수 = 각도', '변의 수가 많을수록 원에 가까워져요', 'sides 변수만 바꾸면 돼요'],
      challenges: [
        {
          id: 'u2-w10-4-c1',
          description: '오각형(5변)을 정확히 그리기',
          difficulty: 'easy',
          feedback: { perfect: '오각형 완성! 72도 회전을 잘 계산했어요!', wrong: '360 / 5 = 72도예요. 각도를 확인하세요.' },
        },
        {
          id: 'u2-w10-4-c2',
          description: '변의 수를 36으로 바꿔서 원 그리기',
          difficulty: 'medium',
          feedback: { perfect: '원이 완성됐어요! 다각형이 원이 되는 마법!', wrong: 'sides를 36으로 바꿔보세요.' },
        },
      ],
    },

    // ===== 미션 5: 별 그리기 =====
    {
      id: 'u2-w10-5',
      title: '반짝반짝 별 그리기',
      description: '특별한 각도로 별 모양을 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 15,
      concept: '특수 반복 패턴',
      learningObjectives: ['별 모양의 수학적 원리를 이해한다', '360도가 아닌 720도 회전으로 특수 도형을 만들 수 있다'],
      conceptExplanation: `## 별은 특별해요!

별은 일반 다각형과 달리 **2바퀴** 도는 것처럼 그려져요.

### 별 공식
\`\`\`
총 회전 = 360도 x 2 = 720도
각도 = 720 / 5 = 144도
\`\`\`

### Scratch 블록
\`\`\`
[5번 반복하기]
  [100칸 움직이기]
  [144도 오른쪽 돌기]
\`\`\`

### Python
\`\`\`python
for i in range(5):
    move(100)
    turn_right(144)  # 720/5 = 144
\`\`\`

### 비교
| 도형 | 회전 | 각도 | 뾰족함 |
|------|------|------|--------|
| 오각형 | 1바퀴 (360도) | 72도 | 둥글둥글 |
| 별 | 2바퀴 (720도) | 144도 | 뾰족뾰족 |`,
      blocks: ['5번 반복하기', '100칸 움직이기', '144도 오른쪽 돌기'],
      correctBlocks: ['5번 반복하기', '100칸 움직이기', '144도 오른쪽 돌기'],
      solutionSequence: ['repeat(5)', 'move(100)', 'turn_right(144)'],
      starterCode: `# 별 모양 그리기!
# 비밀: 144도 = 720 / 5

for i in range(5):
    move(100)
    turn_right(144)   # 오각형(72)의 2배!

# 실험: 각도를 72로 바꾸면 오각형이 돼요!`,
      testCases: [
        { input: 'angle', expectedOutput: '144', description: '별의 회전 각도' },
        { input: 'shape', expectedOutput: '별', description: '완성 도형' },
        { input: 'total_rotation', expectedOutput: '720', description: '총 회전 (2바퀴)' },
        { input: 'points', expectedOutput: '5', description: '별 꼭짓점 수' },
      ],
      hints: ['별은 2바퀴를 도는 거예요', '720 / 5 = 144도', '일반 오각형(72도)보다 각도가 커요'],
    },

    // ===== 미션 6: 나선형 =====
    {
      id: 'u2-w10-6',
      title: '마법의 나선형',
      description: '반복하면서 값을 바꿔 나선 모양을 그려봐요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 15,
      concept: '변화하는 반복',
      learningObjectives: ['반복문 안에서 변수값을 변화시킬 수 있다', '점진적 변화로 나선형 패턴을 만들 수 있다'],
      conceptExplanation: `## 나선형: 변하는 반복!

지금까지 반복은 같은 동작만 했어요.
하지만 **매번 조금씩 바꾸면** 나선이 만들어져요!

### 핵심 아이디어
\`\`\`
반복 1: 앞으로 10칸, 오른쪽 90도
반복 2: 앞으로 15칸, 오른쪽 90도
반복 3: 앞으로 20칸, 오른쪽 90도
...길이가 5씩 증가!
\`\`\`

### Scratch 블록
\`\`\`
[길이 v]를 [10]으로 정하기
[20번 반복하기]
  [(길이)칸 움직이기]
  [90도 오른쪽 돌기]
  [길이 v]를 [5]만큼 바꾸기
\`\`\`

### Python
\`\`\`python
length = 10
for i in range(20):
    move(length)
    turn_right(90)
    length += 5    # 매번 5씩 증가!
\`\`\`

### JavaScript
\`\`\`javascript
let length = 10;
for (let i = 0; i < 20; i++) {
    move(length);
    turnRight(90);
    length += 5;
}
\`\`\``,
      starterCode: `# 나선형 그리기!
# 길이를 5씩 증가시켜요

length = 10       # 시작 길이
for i in range(20):  # 20번 반복
    move(length)      # 현재 길이만큼 이동
    turn_right(90)    # 90도 회전
    length += 5       # 길이를 5 증가

# 실험: 각도를 60도, 120도로 바꿔보세요!`,
      testCases: [
        { input: 'initial_length', expectedOutput: '10', description: '시작 길이' },
        { input: 'increment', expectedOutput: '5', description: '증가량' },
        { input: 'final_length', expectedOutput: '105', description: '마지막 길이 (10+5*19)' },
        { input: 'shape', expectedOutput: '나선형', description: '완성 도형' },
      ],
      hints: ['시작 길이는 10이에요', '매번 5씩 길이를 늘려요', '20번 반복하세요'],
      commonMistakes: ['길이 증가를 반복문 밖에 넣으면 안 돼요 - 반복 안에서 바꿔야 해요'],
    },

    // ===== 미션 7: 중첩 반복 (꽃 패턴) =====
    {
      id: 'u2-w10-7',
      title: '꽃 패턴 만들기',
      description: '반복 안에 반복! 중첩 반복으로 꽃 패턴을 만들어요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 110,
      estimatedMinutes: 18,
      concept: '중첩 반복문',
      learningObjectives: ['중첩 반복문의 구조를 이해한다', '내부 반복과 외부 반복의 역할을 구분할 수 있다'],
      conceptExplanation: `## 중첩 반복: 반복 안의 반복!

정사각형 6개를 원 모양으로 배치하면 꽃이 돼요!

### 구조
\`\`\`
[6번 반복하기]         ← 외부 반복: 정사각형 6개
  [4번 반복하기]       ← 내부 반복: 정사각형 1개
    [50칸 움직이기]
    [90도 오른쪽 돌기]
  [60도 오른쪽 돌기]   ← 다음 정사각형 위치로
\`\`\`

### Python
\`\`\`python
for flower in range(6):       # 꽃잎 6개
    for side in range(4):     # 사각형 4변
        move(50)
        turn_right(90)
    turn_right(60)            # 360/6 = 60도

# 외부: 6번 (꽃잎 개수)
# 내부: 4번 (사각형 변)
# 총 이동 횟수: 6 x 4 = 24번!
\`\`\`

### 중첩 반복의 구조
\`\`\`
외부 반복 (큰 패턴)
  └ 내부 반복 (작은 패턴)
     └ 실제 동작
\`\`\``,
      blocks: ['6번 반복하기', '4번 반복하기', '50칸 움직이기', '90도 오른쪽 돌기', '60도 오른쪽 돌기'],
      correctBlocks: ['6번 반복하기', '4번 반복하기', '50칸 움직이기', '90도 오른쪽 돌기', '60도 오른쪽 돌기'],
      solutionSequence: ['repeat(6)', 'repeat(4)', 'move(50)', 'turn_right(90)', 'end_repeat', 'turn_right(60)', 'end_repeat'],
      starterCode: `# 꽃 패턴! 정사각형 6개가 원 모양으로
# 외부: 6번 반복 (꽃잎 개수)
# 내부: 4번 반복 (정사각형)

for flower in range(6):      # 꽃잎 6개
    for side in range(4):    # 사각형 4변
        move(50)
        turn_right(90)
    turn_right(60)           # 360/6 = 60도 회전

# 도전: 6을 8로 바꾸면? 사각형을 삼각형(3, 120)으로 바꾸면?`,
      testCases: [
        { input: 'outer_loop', expectedOutput: '6', description: '외부 반복: 6번' },
        { input: 'inner_loop', expectedOutput: '4', description: '내부 반복: 4번' },
        { input: 'total_moves', expectedOutput: '24', description: '총 이동 횟수: 6x4=24' },
        { input: 'pattern', expectedOutput: '꽃 패턴', description: '패턴 확인' },
      ],
      hints: ['외부 반복: 도형의 개수 (6개)', '내부 반복: 각 도형의 변 수 (4변)', '360 / 6 = 60도씩 회전'],
      challenges: [
        {
          id: 'u2-w10-7-c1',
          description: '꽃잎을 8개로 늘려보기 (45도 회전)',
          difficulty: 'medium',
          feedback: { perfect: '8개 꽃잎! 360/8=45도를 잘 계산했어요!', wrong: '외부 반복을 8로, 회전을 45도로 바꿔보세요.' },
        },
        {
          id: 'u2-w10-7-c2',
          description: '사각형 대신 삼각형(3변, 120도)으로 꽃 만들기',
          difficulty: 'hard',
          feedback: { perfect: '삼각형 꽃이에요! 내부 반복의 패턴을 잘 바꿨어요!', wrong: '내부 반복을 3으로, 각도를 120도로 바꿔보세요.' },
        },
      ],
    },

    // ===== 미션 8: 미로 탈출 반복 버전 =====
    {
      id: 'u2-w10-8',
      title: '미로 탈출 2단계: 반복 활용!',
      description: '반복문을 활용하여 더 복잡한 미로를 효율적으로 풀어요',
      type: 'visual-programming',
      difficulty: 'intermediate',
      exp: 110,
      estimatedMinutes: 18,
      concept: '반복문으로 경로 최적화',
      isWeeklyProject: true,
      learningObjectives: ['반복문을 활용하여 경로를 효율적으로 표현할 수 있다', '반복 가능한 패턴을 찾아낼 수 있다'],
      conceptExplanation: `## 미로 탈출 2단계!

이번에는 반복되는 패턴을 찾아 더 효율적으로 풀어요!

### 미로 맵
\`\`\`
S . . . .
X X X . .
. . . . .
. . X X X
. . . . G
\`\`\`

### 반복 패턴 발견!
경로를 보면: 오른쪽 3칸 → 아래 2칸 → 오른쪽 2칸 → 아래 2칸

\`\`\`
반복문 없이: 앞 앞 앞 오 앞 앞 왼 앞 앞 오 앞 앞 (12블록)
반복문 사용:
  [3번 반복] 앞으로
  오른쪽
  [2번 반복] 앞으로
  ... (8블록)
\`\`\``,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 0, col: 0 },
      goalPosition: { row: 4, col: 4 },
      obstacles: [
        { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 },
        { row: 3, col: 2 }, { row: 3, col: 3 }, { row: 3, col: 4 },
      ],
      mazeWalls: true,
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '오른쪽 돌기', '오른쪽 돌기', '왼쪽 돌기', '왼쪽 돌기', '3번 반복하기', '2번 반복하기'],
      correctBlocks: ['3번 반복하기', '앞으로 1칸', '오른쪽 돌기', '2번 반복하기', '앞으로 1칸', '왼쪽 돌기', '2번 반복하기', '앞으로 1칸', '오른쪽 돌기', '2번 반복하기', '앞으로 1칸'],
      solutionSequence: ['repeat(3)', 'forward', 'end_repeat', 'turn_right', 'repeat(2)', 'forward', 'end_repeat', 'turn_left', 'repeat(2)', 'forward', 'end_repeat', 'turn_right', 'repeat(2)', 'forward', 'end_repeat'],
      maxCommands: 14,
      hints: ['같은 동작이 반복되는 부분을 찾으세요', '직선 구간은 반복으로 줄일 수 있어요', '오른쪽 3칸 → 아래 2칸 패턴을 찾으세요'],
    },

    // ===== 미션 9: 블록→텍스트 변환 퀴즈 =====
    {
      id: 'u2-w10-9',
      title: '블록을 코드로 바꿔요!',
      description: 'Scratch 블록을 Python/JavaScript 코드로 바꾸는 연습',
      type: 'quiz',
      difficulty: 'intermediate',
      exp: 70,
      estimatedMinutes: 10,
      concept: '블록 → 텍스트 코딩 브릿지',
      learningObjectives: ['블록 코딩과 텍스트 코딩의 대응 관계를 이해한다', 'for 문의 기본 구조를 읽을 수 있다'],
      conceptExplanation: `## 블록 ↔ 텍스트 변환표

| Scratch 블록 | Python | JavaScript |
|-------------|--------|------------|
| [10번 반복하기] | for i in range(10): | for (let i=0; i<10; i++) { |
| [앞으로 100] | move(100) | move(100); |
| [오른쪽 90도] | turn_right(90) | turnRight(90); |
| ["안녕!" 말하기] | say("안녕!") | say("안녕!"); |

### 들여쓰기가 중요!
Python에서 반복 안의 코드는 **들여쓰기(스페이스 4칸)**로 구분해요.
\`\`\`python
for i in range(4):
    move(100)      # ← 들여쓰기! 반복 안
    turn_right(90) # ← 들여쓰기! 반복 안
print("끝!")       # ← 들여쓰기 없음! 반복 밖
\`\`\``,
      checkQuestions: [
        {
          question: 'Scratch "[4번 반복하기]"를 Python으로 쓰면?',
          options: ['repeat(4):', 'for i in range(4):', 'while(4):', 'loop 4 times:'],
          correctAnswer: 1,
          explanation: 'Python에서 정해진 횟수만큼 반복하려면 "for i in range(횟수):"를 사용해요.',
        },
        {
          question: '다음 Python 코드는 삼각형을 그릴까요, 사각형을 그릴까요?\nfor i in range(3):\n    move(100)\n    turn_right(120)',
          options: ['사각형', '삼각형', '오각형', '원'],
          correctAnswer: 1,
          explanation: '3번 반복에 120도 회전(360/3=120)이면 삼각형이에요!',
        },
        {
          question: 'Python에서 반복문 안의 코드를 어떻게 구분하나요?',
          options: ['중괄호 {}', '들여쓰기 (스페이스)', '괄호 ()', '세미콜론 ;'],
          correctAnswer: 1,
          explanation: 'Python은 들여쓰기(보통 스페이스 4칸)로 반복문 안쪽을 구분해요.',
        },
        {
          question: '나선형을 그리려면 반복문에서 무엇을 변화시켜야 하나요?',
          options: ['회전 각도', '이동 거리', '반복 횟수', '색상'],
          correctAnswer: 1,
          explanation: '매번 이동 거리를 조금씩 늘리면 나선형이 만들어져요.',
        },
      ],
      hints: ['블록-코드 변환표를 참고하세요', 'Python은 들여쓰기가 중요해요', '360 / 변의수 = 각도 공식을 기억하세요'],
    },

    // ===== 미션 10: 미로 탈출 게임 완성 (종합 프로젝트) =====
    {
      id: 'u2-w10-10',
      title: '미로 탈출 게임 완성!',
      description: '순차 실행 + 반복문으로 완전한 미로 탈출 게임을 만들어요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 140,
      estimatedMinutes: 25,
      concept: '프로젝트: 미로 탈출',
      isWeeklyProject: true,
      learningObjectives: ['순차 실행과 반복문을 조합하여 프로젝트를 완성할 수 있다', '효율적인 코드 작성의 가치를 이해한다'],
      conceptExplanation: `## 미로 탈출 게임 프로젝트 완성!

Week 9-10에서 배운 모든 것을 사용하여 미로 탈출 게임을 완성해요!

### 게임 요구사항
1. **7x7 미로** (더 크고 복잡한 미로!)
2. **별(수집 아이템)** 3개 모으기
3. **최적 경로**로 골인
4. **반복문** 사용하여 효율적인 코드

### 미로 맵
\`\`\`
S . X . ★ . .
. . X . . . .
. . . . X X .
X . X . . . .
. . X . . X .
. ★ . . X . ★
. . . . . . G
\`\`\`

### 코드 구조
\`\`\`python
# 시작 → 별1 수집
for i in range(4):
    move_forward()
collect_star()       # 별 1개!

# 별1 → 별2
turn_right()
for i in range(5):
    move_forward()
collect_star()       # 별 2개!

# 별2 → 별3 → 골
# ... 나머지 경로
\`\`\`

### Python으로 완성
\`\`\`python
# 미로 게임 전체 코드
stars = 0

# 구간 1: 시작 → 별1
for i in range(4):
    move_forward()
stars += 1
say(f"별 {stars}개!")

# 구간 2: 별1 → 별2
turn_right()
for i in range(5):
    move_forward()
stars += 1

# 구간 3: 별2 → 별3 → 골
turn_left()
for i in range(3):
    move_forward()
stars += 1
say(f"모든 별 수집! {stars}개")

# 골인!
say("미로 탈출 성공!")
\`\`\``,
      gridSize: { rows: 7, cols: 7 },
      startPosition: { row: 0, col: 0 },
      goalPosition: { row: 6, col: 6 },
      obstacles: [
        { row: 0, col: 2 }, { row: 1, col: 2 },
        { row: 2, col: 4 }, { row: 2, col: 5 },
        { row: 3, col: 0 }, { row: 3, col: 2 },
        { row: 4, col: 2 }, { row: 4, col: 5 },
        { row: 5, col: 4 },
      ],
      collectibles: [
        { row: 0, col: 4 },
        { row: 5, col: 1 },
        { row: 5, col: 6 },
      ],
      mustVisitAll: true,
      starterCode: `# 미로 탈출 게임 완성하기!
# 목표: 별 3개를 모두 모으고 골인하기
# 반복문을 활용하여 효율적으로!

stars = 0

# 구간 1: 시작(0,0) → 별1(0,4) 수집
# 힌트: 오른쪽으로 쭉 가면 벽! 돌아가야 해요
move_forward()   # (0,1)
turn_right()     # 아래 보기
move_forward()   # (1,1)
turn_left()      # 오른쪽 보기
for i in range(3):  # 오른쪽으로 3칸
    move_forward()
turn_left()      # 위 보기
move_forward()   # 별1 위치!
stars += 1
say(f"별 {stars}개 수집!")

# 구간 2: 별2(5,1) 수집까지 여러분이 완성하세요!
# ...

# 구간 3: 별3(5,6) → 골(6,6)
# ...

# 골인!
say(f"미로 탈출 완료! 별 {stars}개 수집!")`,
      testCases: [
        { input: 'stars', expectedOutput: '3', description: '별 3개 수집' },
        { input: 'goal', expectedOutput: '(6,6) 도착', description: '골인 확인' },
        { input: 'loops_used', expectedOutput: 'true', description: '반복문 사용 여부' },
        { input: 'collisions', expectedOutput: '0', description: '장애물 충돌 없음' },
      ],
      hints: ['별 3개의 위치를 먼저 확인하세요', '직선 구간은 반복문으로!', '장애물을 피해서 경로를 계획하세요', '구간별로 나누어 풀면 쉬워요'],
      challenges: [
        {
          id: 'u2-w10-10-c1',
          description: '별 3개를 모두 수집하기',
          difficulty: 'medium',
          feedback: { perfect: '별 3개 모두 수집! 훌륭해요!', wrong: '아직 수집하지 못한 별이 있어요.' },
        },
        {
          id: 'u2-w10-10-c2',
          description: '반복문을 2개 이상 사용하기',
          difficulty: 'medium',
          feedback: { perfect: '반복문을 잘 활용했어요! 효율적인 코드예요.', wrong: '같은 동작이 반복되는 부분을 찾아서 for문을 사용해보세요.' },
        },
        {
          id: 'u2-w10-10-c3',
          description: '25블록 이내로 완료하기 (코드 효율성 도전)',
          difficulty: 'hard',
          feedback: { perfect: '25블록 이내! 최적화의 달인이에요!', wrong: '반복문을 더 활용하면 블록 수를 줄일 수 있어요.' },
        },
      ],
      extensionActivities: ['미로를 직접 디자인해서 친구에게 풀게 하기', '별을 더 추가하고 경로 최적화하기', '시간 제한 추가해서 스피드런 도전하기'],
    },
  ],
};

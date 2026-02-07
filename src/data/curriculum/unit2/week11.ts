import type { Week } from '../../../types';

export const week11: Week = {
  id: 'week-11',
  number: 11,
  title: '조건문의 힘',
  description: 'if-else로 선택하는 프로그램을 만들고 인터랙티브 스토리를 시작해요',
  duration: '2차시',
  objectives: [
    '조건문(if/else)의 개념을 이해한다',
    '비교 연산자(>, <, ==)를 사용할 수 있다',
    '다중 조건문과 중첩 조건문을 구성할 수 있다',
    '논리 연산자(AND, OR)를 사용할 수 있다',
    '조건문의 블록 코딩과 Python 변환을 이해한다',
  ],
  missions: [
    // ===== 미션 1: 조건문 소개 =====
    {
      id: 'u2-w11-1',
      title: '만약 ~라면?',
      description: '조건에 따라 다른 행동을 하는 프로그램을 배워요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 8,
      concept: '조건문 기초',
      learningObjectives: ['조건문의 개념을 실생활 예시로 설명할 수 있다', 'if 블록의 구조를 이해한다'],
      cstaStandard: '1B-AP-10',
      conceptExplanation: `## 조건문이란?

**"만약 ~라면 이것을 하고, 아니면 저것을 해라"**

### 실생활 예시
- 비가 오면 → 우산을 쓴다 / 안 오면 → 그냥 간다
- 신호가 빨강이면 → 멈춘다 / 초록이면 → 건넌다
- 점수가 80점 이상이면 → 합격 / 미만이면 → 불합격

### Scratch 블록
\`\`\`
[만약 <점수 > 80> 라면]
  ["합격!" 말하기]
[아니면]
  ["분발하세요" 말하기]
\`\`\`

### Python으로 바꾸면?
\`\`\`python
if score > 80:
    say("합격!")
else:
    say("분발하세요")
\`\`\`

### JavaScript로 바꾸면?
\`\`\`javascript
if (score > 80) {
    say("합격!");
} else {
    say("분발하세요");
}
\`\`\`

### 핵심 구조
\`\`\`
만약 (조건) 라면:
    참일 때 실행할 코드
아니면:
    거짓일 때 실행할 코드
\`\`\``,
      conceptCards: [
        { title: '조건 = 질문', content: '조건문은 예/아니오로 대답할 수 있는 질문이에요', icon: '❓', example: '"점수 > 80"은 점수가 80보다 큰가? 라는 질문' },
        { title: 'if = 만약', content: '조건이 맞으면(참이면) 안쪽 코드를 실행해요', icon: '✅', example: 'if 비가 오면: 우산 쓰기' },
        { title: 'else = 아니면', content: '조건이 틀리면(거짓이면) else 안쪽 코드를 실행해요', icon: '❌', example: 'else: 그냥 가기' },
      ],
      checkQuestions: [
        {
          question: '조건문에서 "조건"이 맞으면 어떻게 되나요?',
          options: ['아무것도 안 한다', 'if 안의 코드가 실행된다', 'else 안의 코드가 실행된다', '프로그램이 멈춘다'],
          correctAnswer: 1,
          explanation: '조건이 참(맞으면)이면 if 안의 코드가 실행돼요.',
        },
        {
          question: '"만약 온도 > 30 라면"에서 온도가 25라면?',
          options: ['조건이 참이다', '조건이 거짓이다', '오류가 난다', '알 수 없다'],
          correctAnswer: 1,
          explanation: '25는 30보다 크지 않으므로 조건은 거짓이에요.',
        },
      ],
      hints: ['조건문은 예/아니오 질문이에요', 'if 안에는 조건이 참일 때 실행할 코드를 넣어요', 'else는 조건이 거짓일 때 실행돼요'],
      realWorldExample: '자판기도 조건문을 사용해요! "만약 투입금액 >= 가격이면 음료 내보내기, 아니면 잔액 부족 표시하기"',
    },

    // ===== 미션 2: 날씨 프로그램 =====
    {
      id: 'u2-w11-2',
      title: '날씨에 따라 말하기',
      description: '날씨 변수에 따라 다른 메시지를 보여주는 프로그램을 만들어요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: 'if-else 기초',
      learningObjectives: ['if-else 블록을 사용할 수 있다', '문자열 비교 조건을 만들 수 있다'],
      conceptExplanation: `## 첫 번째 조건문 프로그램!

### Scratch 블록
\`\`\`
[날씨 v]를 [맑음]으로 정하기
[만약 <날씨 = 맑음> 라면]
  ["산책 가자!" 2초 말하기]
[아니면]
  ["집에 있자!" 2초 말하기]
\`\`\`

### Python
\`\`\`python
weather = "맑음"

if weather == "맑음":
    say("산책 가자!", 2)
else:
    say("집에 있자!", 2)
\`\`\`

### 주의!
- 같은지 비교: **==** (등호 2개!)
- 값 저장: **=** (등호 1개)`,
      blocks: ['날씨를 맑음으로 정하기', '만약 날씨 = 맑음 라면', '산책 가자! 말하기', '아니면', '집에 있자! 말하기'],
      correctBlocks: ['날씨를 맑음으로 정하기', '만약 날씨 = 맑음 라면', '산책 가자! 말하기', '아니면', '집에 있자! 말하기'],
      solutionSequence: ['set_weather_sunny', 'if_weather_sunny', 'say_walk', 'else', 'say_stay'],
      starterCode: `# 날씨에 따른 메시지
weather = "맑음"    # "맑음" 또는 "비"로 바꿔보세요!

if weather == "맑음":
    say("산책 가자!", 2)
else:
    say("집에 있자!", 2)`,
      testCases: [
        { input: '날씨=맑음', expectedOutput: '산책 가자!', description: '맑음일 때' },
        { input: '날씨=비', expectedOutput: '집에 있자!', description: '비일 때' },
        { input: '날씨=눈', expectedOutput: '집에 있자!', description: '눈일 때 (맑음 아님)' },
        { input: '날씨=맑음', expectedOutput: '산책 가자!', description: '맑음 재확인' },
      ],
      hints: ['== 으로 같은지 비교해요', 'weather 변수를 바꿔서 테스트하세요', 'else는 if 조건이 아닐 때 실행돼요'],
      commonMistakes: ['= 하나로 비교하면 안 돼요! == 두 개를 써야 해요', '문자열은 따옴표로 감싸야 해요'],
    },

    // ===== 미션 3: 점수 판정 =====
    {
      id: 'u2-w11-3',
      title: '합격/불합격 판정기',
      description: '점수에 따라 합격/불합격을 판정해요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '숫자 비교',
      learningObjectives: ['비교 연산자(>, <, >=, <=)를 사용할 수 있다', '숫자 조건을 판단할 수 있다'],
      conceptExplanation: `## 비교 연산자

| 연산자 | 의미 | 예시 | 결과 |
|--------|------|------|------|
| > | 크다 | 85 > 80 | 참 |
| < | 작다 | 70 < 80 | 참 |
| >= | 크거나 같다 | 80 >= 80 | 참 |
| <= | 작거나 같다 | 79 <= 80 | 참 |
| == | 같다 | 80 == 80 | 참 |
| != | 다르다 | 80 != 90 | 참 |

### Scratch 블록 → Python
\`\`\`python
score = 85

if score >= 80:     # 80점 이상이면
    say("합격!")
else:               # 미만이면
    say("불합격!")
\`\`\``,
      starterCode: `# 점수 판정기
score = 85    # 점수를 바꿔보세요!

if score >= 80:
    say("합격!", 2)
    say(f"점수: {score}점, 잘했어요!")
else:
    say("불합격!", 2)
    say(f"점수: {score}점, 다음에 잘하자!")`,
      testCases: [
        { input: '점수=85', expectedOutput: '합격!', description: '85점: 합격' },
        { input: '점수=60', expectedOutput: '불합격!', description: '60점: 불합격' },
        { input: '점수=80', expectedOutput: '합격!', description: '80점: 합격 (경계값)' },
        { input: '점수=79', expectedOutput: '불합격!', description: '79점: 불합격 (경계값)' },
      ],
      hints: ['>= 는 "크거나 같다"예요', '80점이 경계값이에요', 'score 값을 바꿔서 다양하게 테스트하세요'],
    },

    // ===== 미션 4: 신호등 (다중 조건) =====
    {
      id: 'u2-w11-4',
      title: '신호등 시스템',
      description: '빨강/노랑/초록에 따라 다른 동작을 하는 신호등을 만들어요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 14,
      concept: '다중 조건문 (elif)',
      learningObjectives: ['3개 이상의 경우를 처리하는 다중 조건문을 만들 수 있다', 'elif 키워드를 사용할 수 있다'],
      conceptExplanation: `## 다중 조건문: elif

2가지가 아니라 3가지 이상이면? **elif** (else if)를 사용해요!

### Scratch 블록 (중첩)
\`\`\`
[만약 <신호등 = 빨강> 라면]
  ["멈춰!" 말하기]
[아니면]
  [만약 <신호등 = 노랑> 라면]
    ["준비!" 말하기]
  [아니면]
    ["출발!" 말하기]
  ]
]
\`\`\`

### Python (더 깔끔!)
\`\`\`python
light = "초록"

if light == "빨강":
    say("멈춰!")
elif light == "노랑":
    say("준비!")
elif light == "초록":
    say("출발!")
else:
    say("알 수 없는 신호!")
\`\`\`

### 핵심: elif 체인
\`\`\`
if 조건1:    → 첫 번째 확인
elif 조건2:  → 조건1이 아니면 확인
elif 조건3:  → 조건2도 아니면 확인
else:        → 모두 아니면 실행
\`\`\``,
      starterCode: `# 신호등 시스템
light = "초록"    # "빨강", "노랑", "초록" 중 하나

if light == "빨강":
    say("멈춰!", 2)
    set_color("red")
elif light == "노랑":
    say("준비!", 2)
    set_color("yellow")
elif light == "초록":
    say("출발!", 2)
    set_color("green")
else:
    say("알 수 없는 신호!", 2)`,
      testCases: [
        { input: '신호등=빨강', expectedOutput: '멈춰!', description: '빨간불' },
        { input: '신호등=노랑', expectedOutput: '준비!', description: '노란불' },
        { input: '신호등=초록', expectedOutput: '출발!', description: '초록불' },
        { input: '신호등=보라', expectedOutput: '알 수 없는 신호!', description: '잘못된 신호' },
      ],
      hints: ['elif로 여러 조건을 차례로 확인해요', 'else는 모든 조건에 해당하지 않을 때예요', '==로 문자열을 비교해요'],
      blocks: ['만약 신호등=빨강 라면', '멈춰! 말하기', '아니면 만약 신호등=노랑 라면', '준비! 말하기', '아니면 만약 신호등=초록 라면', '출발! 말하기', '아니면', '알 수 없는 신호! 말하기'],
      correctBlocks: ['만약 신호등=빨강 라면', '멈춰! 말하기', '아니면 만약 신호등=노랑 라면', '준비! 말하기', '아니면 만약 신호등=초록 라면', '출발! 말하기', '아니면', '알 수 없는 신호! 말하기'],
    },

    // ===== 미션 5: 온도계 (범위 조건) =====
    {
      id: 'u2-w11-5',
      title: '온도 알리미',
      description: '온도 범위에 따라 "추워요/적당해요/더워요"를 알려줘요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '범위 조건 + 논리 연산',
      learningObjectives: ['범위 조건을 만들 수 있다', 'and/or 논리 연산자를 사용할 수 있다'],
      conceptExplanation: `## 범위 조건과 논리 연산

### AND (그리고): 두 조건 모두 참이어야 참
\`\`\`python
# 18도 이상 AND 25도 이하 = 적당한 온도
if temp >= 18 and temp <= 25:
    say("적당해요!")
\`\`\`

### Scratch 블록
\`\`\`
[만약 <<온도 > 25>> 라면]
  ["더워요!" 말하기]
[아니면]
  [만약 <<온도 >= 18> 그리고 <온도 <= 25>> 라면]
    ["적당해요!" 말하기]
  [아니면]
    ["추워요!" 말하기]
  ]
]
\`\`\`

### Python (더 깔끔!)
\`\`\`python
temp = 20

if temp > 25:
    say("더워요! 에어컨 틀자!")
elif temp >= 18:    # 이미 25 이하인 것이 확정
    say("적당해요! 좋은 날씨!")
else:               # 18 미만
    say("추워요! 히터 틀자!")
\`\`\`

### OR (또는): 하나라도 참이면 참
\`\`\`python
# 0도 미만 OR 40도 초과 = 위험!
if temp < 0 or temp > 40:
    say("위험! 외출 자제!")
\`\`\``,
      starterCode: `# 온도 알리미
temp = 20    # 온도를 바꿔보세요!

if temp > 25:
    say("더워요!", 2)
    change_costume("sun")
elif temp >= 18:
    say("적당해요!", 2)
    change_costume("smile")
else:
    say("추워요!", 2)
    change_costume("cold")

# 보너스: 극한 온도 경고
if temp < 0 or temp > 40:
    say("위험! 외출 자제!", 3)`,
      testCases: [
        { input: '온도=30', expectedOutput: '더워요!', description: '30도: 더움' },
        { input: '온도=20', expectedOutput: '적당해요!', description: '20도: 적당' },
        { input: '온도=10', expectedOutput: '추워요!', description: '10도: 추움' },
        { input: '온도=25', expectedOutput: '적당해요!', description: '25도: 적당 (경계값)' },
      ],
      hints: ['elif를 사용하면 범위를 쉽게 나눌 수 있어요', 'and는 두 조건이 모두 참이어야 해요', 'or는 하나만 참이어도 돼요'],
      checkQuestions: [
        {
          question: '"temp >= 18 and temp <= 25"에서 temp가 20이면?',
          options: ['참 (20은 18이상이고 25이하)', '거짓', '오류', '알 수 없음'],
          correctAnswer: 0,
          explanation: '20은 18 이상이고 25 이하이므로 두 조건 모두 참! and이니까 결과도 참이에요.',
        },
      ],
    },

    // ===== 미션 6: 가위바위보 게임 =====
    {
      id: 'u2-w11-6',
      title: '가위바위보 게임!',
      description: '컴퓨터와 가위바위보를 하는 게임을 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '복합 조건 + 랜덤',
      learningObjectives: ['and 연산자로 복합 조건을 만들 수 있다', '랜덤과 조건문을 조합할 수 있다'],
      conceptExplanation: `## 가위바위보 게임

### 승리 조건 (AND 사용!)
- 내가 가위 AND 상대가 보 → 내가 이김!
- 내가 바위 AND 상대가 가위 → 내가 이김!
- 내가 보 AND 상대가 바위 → 내가 이김!

### Scratch 블록
\`\`\`
[컴퓨터 v]를 [1~3 사이 난수]로 정하기
[만약 <컴퓨터 = 1> 라면]
  [컴퓨터_선택 v]를 [가위]로 정하기
[아니면 만약 <컴퓨터 = 2> 라면]
  [컴퓨터_선택 v]를 [바위]로 정하기
[아니면]
  [컴퓨터_선택 v]를 [보]로 정하기
]
\`\`\`

### Python
\`\`\`python
import random
choices = ["가위", "바위", "보"]
computer = random.choice(choices)
player = "가위"

if player == computer:
    say("비겼다!")
elif (player == "가위" and computer == "보") or \\
     (player == "바위" and computer == "가위") or \\
     (player == "보" and computer == "바위"):
    say("이겼다!")
else:
    say("졌다!")
\`\`\``,
      starterCode: `# 가위바위보 게임!
import random

choices = ["가위", "바위", "보"]
computer = random.choice(choices)   # 컴퓨터 랜덤 선택
player = "가위"                      # 여기를 바꿔보세요!

say(f"나: {player}, 컴퓨터: {computer}")

if player == computer:
    say("비겼다!", 2)
elif (player == "가위" and computer == "보") or \\
     (player == "바위" and computer == "가위") or \\
     (player == "보" and computer == "바위"):
    say("이겼다!", 2)
else:
    say("졌다!", 2)`,
      testCases: [
        { input: '나=가위, 상대=보', expectedOutput: '이겼다!', description: '가위 vs 보: 승리' },
        { input: '나=바위, 상대=바위', expectedOutput: '비겼다!', description: '바위 vs 바위: 무승부' },
        { input: '나=보, 상대=가위', expectedOutput: '졌다!', description: '보 vs 가위: 패배' },
        { input: '나=바위, 상대=가위', expectedOutput: '이겼다!', description: '바위 vs 가위: 승리' },
      ],
      hints: ['and로 두 조건을 묶어요', 'or로 승리 조건 3개를 연결해요', '== 비겼을 때를 먼저 확인하세요'],
      challenges: [
        {
          id: 'u2-w11-6-c1',
          description: '3판 2선승 시스템 추가하기',
          difficulty: 'hard',
          feedback: { perfect: '3판 2선승! 반복문과 조건문을 훌륭하게 결합했어요!', wrong: 'while 반복문과 점수 변수를 사용해보세요.' },
        },
      ],
    },

    // ===== 미션 7: 점수 등급 시스템 =====
    {
      id: 'u2-w11-7',
      title: '성적표 만들기',
      description: '점수에 따라 A, B, C, D, F 등급을 매겨요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '다단계 조건 분기',
      learningObjectives: ['5단계 이상의 다중 조건을 구성할 수 있다', '조건의 순서가 중요함을 이해한다'],
      conceptExplanation: `## 다단계 등급 시스템

### 등급 기준
| 점수 | 등급 | 메시지 |
|------|------|--------|
| 90~100 | A | 최고예요! |
| 80~89 | B | 잘했어요! |
| 70~79 | C | 괜찮아요! |
| 60~69 | D | 노력해요! |
| 0~59 | F | 분발하세요! |

### 순서가 중요!
\`\`\`python
# 올바른 순서: 높은 점수부터!
if score >= 90:
    grade = "A"
elif score >= 80:     # 이미 90 미만
    grade = "B"
elif score >= 70:     # 이미 80 미만
    grade = "C"
elif score >= 60:     # 이미 70 미만
    grade = "D"
else:                 # 60 미만
    grade = "F"
\`\`\``,
      starterCode: `# 성적표 시스템
score = 85    # 점수를 바꿔보세요! (0~100)

if score >= 90:
    grade = "A"
    msg = "최고예요!"
elif score >= 80:
    grade = "B"
    msg = "잘했어요!"
elif score >= 70:
    grade = "C"
    msg = "괜찮아요!"
elif score >= 60:
    grade = "D"
    msg = "노력해요!"
else:
    grade = "F"
    msg = "분발하세요!"

say(f"{score}점 → {grade}등급! {msg}", 3)`,
      testCases: [
        { input: '점수=95', expectedOutput: 'A', description: '95점: A등급' },
        { input: '점수=85', expectedOutput: 'B', description: '85점: B등급' },
        { input: '점수=75', expectedOutput: 'C', description: '75점: C등급' },
        { input: '점수=55', expectedOutput: 'F', description: '55점: F등급' },
      ],
      hints: ['높은 점수부터 확인하세요', 'elif를 사용하면 범위가 자동으로 좁아져요', '경계값(90, 80, 70, 60)을 잘 설정하세요'],
    },

    // ===== 미션 8: 조건문 비주얼 퍼즐 =====
    {
      id: 'u2-w11-8',
      title: '조건부 미로!',
      description: '조건에 따라 다른 길을 선택하는 미로를 풀어요',
      type: 'visual-programming',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '조건부 경로 선택',
      isWeeklyProject: true,
      learningObjectives: ['조건문을 활용하여 동적 경로를 결정할 수 있다', '센서(색 감지)와 조건문을 결합할 수 있다'],
      conceptExplanation: `## 조건부 미로: 상황에 따라 다른 길!

이번 미로에는 **색깔 타일**이 있어요.
파란 타일이면 왼쪽으로, 빨간 타일이면 오른쪽으로!

### 알고리즘
\`\`\`
반복:
  앞으로 1칸
  만약 파란 타일이면:
    왼쪽 돌기
  만약 빨간 타일이면:
    오른쪽 돌기
  만약 초록 타일이면:
    "도착!" 말하기
    멈추기
\`\`\`

### Python
\`\`\`python
while not at_goal():
    move_forward()
    tile = get_tile_color()

    if tile == "blue":
        turn_left()
    elif tile == "red":
        turn_right()
    elif tile == "green":
        say("도착!")
        break
\`\`\``,
      gridSize: { rows: 5, cols: 5 },
      startPosition: { row: 0, col: 0 },
      goalPosition: { row: 4, col: 4 },
      obstacles: [
        { row: 0, col: 3 }, { row: 1, col: 1 },
        { row: 2, col: 3 }, { row: 3, col: 1 },
      ],
      useConditional: true,
      blocks: ['앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '앞으로 1칸', '만약 파란 타일이면', '왼쪽 돌기', '만약 빨간 타일이면', '오른쪽 돌기', '반복하기'],
      correctBlocks: ['반복하기', '앞으로 1칸', '만약 파란 타일이면', '왼쪽 돌기', '만약 빨간 타일이면', '오른쪽 돌기'],
      solutionSequence: ['repeat_until_goal', 'forward', 'if_blue_turn_left', 'if_red_turn_right'],
      maxCommands: 10,
      hints: ['색깔에 따라 방향이 달라져요', '파란색=왼쪽, 빨간색=오른쪽', '초록색 타일이 목표예요'],
    },

    // ===== 미션 9: 블록→코드 변환 퀴즈 =====
    {
      id: 'u2-w11-9',
      title: '조건문 코드 변환!',
      description: 'Scratch 조건 블록을 Python으로 바꾸는 연습',
      type: 'quiz',
      difficulty: 'intermediate',
      exp: 70,
      estimatedMinutes: 10,
      concept: '조건문 블록 → 텍스트 브릿지',
      conceptExplanation: `## 조건문 변환표

| Scratch 블록 | Python | JavaScript |
|-------------|--------|------------|
| [만약 ~ 라면] | if 조건: | if (조건) { |
| [아니면] | else: | } else { |
| [만약 ~ 아니면 만약] | elif 조건: | } else if (조건) { |
| [~ 그리고 ~] | and | && |
| [~ 또는 ~] | or | \\|\\| |
| [~ = ~] | == | === |
| [~ > ~] | > | > |`,
      checkQuestions: [
        {
          question: 'Scratch의 "만약 <점수 > 90> 라면"을 Python으로 쓰면?',
          options: ['if score > 90:', 'if (score > 90)', 'when score > 90:', 'check score > 90:'],
          correctAnswer: 0,
          explanation: 'Python에서는 "if 조건:" 형태로 쓰고, 콜론(:)을 붙여야 해요.',
        },
        {
          question: 'Python에서 "같다"를 비교할 때 쓰는 기호는?',
          options: ['=', '==', '===', '!='],
          correctAnswer: 1,
          explanation: '=는 값 저장, ==는 같은지 비교예요. 등호 2개!',
        },
        {
          question: 'Scratch의 "그리고" 블록은 Python에서?',
          options: ['&&', 'and', '&', '+'],
          correctAnswer: 1,
          explanation: 'Python에서는 "and"를 사용해요. JavaScript에서는 "&&"을 써요.',
        },
        {
          question: '다음 중 올바른 Python 조건문은?',
          options: ['if score >= 80', 'if score >= 80:', 'if (score >= 80):', 'if score >= 80 then:'],
          correctAnswer: 1,
          explanation: 'Python 조건문은 "if 조건:" 형태이고, 콜론(:)이 필수예요!',
        },
      ],
      hints: ['Python if문에는 콜론(:)이 필요해요', '==는 비교, =는 저장이에요', 'and/or는 영어 단어 그대로 써요'],
    },

    // ===== 미션 10: 인터랙티브 스토리 시작 =====
    {
      id: 'u2-w11-10',
      title: '나만의 분기형 스토리!',
      description: '선택에 따라 이야기가 달라지는 인터랙티브 스토리를 시작해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 120,
      estimatedMinutes: 22,
      concept: '인터랙티브 스토리 (조건문 종합)',
      isWeeklyProject: true,
      learningObjectives: ['조건문으로 분기하는 스토리를 설계할 수 있다', '사용자 입력을 받아 조건문으로 처리할 수 있다'],
      conceptExplanation: `## 인터랙티브 스토리 프로젝트!

Week 11-12에 걸쳐 선택에 따라 결말이 달라지는 스토리를 만들어요!

### 스토리 구조
\`\`\`
시작: 모험가가 숲에 들어갔다
    ↓
선택 1: 왼쪽 길? 오른쪽 길?
    ↓              ↓
왼쪽: 보물상자    오른쪽: 괴물
    ↓              ↓
  선택 2         선택 2
  열기/지나침    싸우기/도망
    ↓              ↓
결말 A/B        결말 C/D
\`\`\`

### Scratch 구현
\`\`\`
["어느 길로 갈까요?" 묻고 기다리기]
[만약 <대답 = 왼쪽> 라면]
  ["보물 상자를 발견했다!" 말하기]
  ["열어볼까요?" 묻고 기다리기]
  [만약 <대답 = 네> 라면]
    ["금화 100개를 얻었다!" 말하기]  ← 결말 A
  [아니면]
    ["상자를 지나쳤다..." 말하기]    ← 결말 B
  ]
[아니면]
  ["괴물이 나타났다!" 말하기]
  ...
]
\`\`\`

### Python 구현
\`\`\`python
say("모험가가 숲에 들어갔습니다...")
choice1 = ask("왼쪽 길? 오른쪽 길?")

if choice1 == "왼쪽":
    say("보물 상자를 발견했다!")
    choice2 = ask("열어볼까요? (네/아니오)")
    if choice2 == "네":
        say("금화 100개를 얻었다!")   # 결말 A
    else:
        say("상자를 지나쳤다...")      # 결말 B
else:
    say("괴물이 나타났다!")
    choice2 = ask("싸울까요? (싸우기/도망)")
    if choice2 == "싸우기":
        say("괴물을 물리쳤다!")        # 결말 C
    else:
        say("무사히 도망쳤다!")        # 결말 D
\`\`\``,
      starterCode: `# 인터랙티브 스토리: 숲 속 모험
# 선택에 따라 4가지 결말이 있어요!

say("어둠 속 숲에 모험가가 들어갔습니다...", 3)
say("갈림길이 나타났습니다!", 2)

choice1 = ask("왼쪽 길? 오른쪽 길?")

if choice1 == "왼쪽":
    say("반짝이는 보물 상자를 발견했다!", 2)
    choice2 = ask("열어볼까요? (네/아니오)")

    if choice2 == "네":
        say("금화 100개! 부자가 되었다!", 3)  # 결말 A
    else:
        say("안전하게 지나쳤다...", 2)           # 결말 B
        say("하지만 뒤에서 상자가 사라졌다!", 2)
else:
    say("으르렁! 거대한 괴물이 나타났다!", 2)
    choice2 = ask("싸울까요? (싸우기/도망)")

    if choice2 == "싸우기":
        say("용감하게 싸워 괴물을 물리쳤다!", 3)  # 결말 C
        say("마을의 영웅이 되었다!")
    else:
        say("재빨리 도망쳤다!", 2)                 # 결말 D
        say("무사히 집에 돌아왔다!")

say("--- 끝 ---")`,
      testCases: [
        { input: '왼쪽→네', expectedOutput: '금화 100개! (결말 A)', description: '결말 A: 보물 획득' },
        { input: '왼쪽→아니오', expectedOutput: '지나침 (결말 B)', description: '결말 B: 보물 포기' },
        { input: '오른쪽→싸우기', expectedOutput: '영웅 (결말 C)', description: '결말 C: 괴물 퇴치' },
        { input: '오른쪽→도망', expectedOutput: '무사 귀환 (결말 D)', description: '결말 D: 안전 귀환' },
      ],
      hints: ['중첩 if문을 사용하세요 (if 안에 if)', 'ask()로 사용자 입력을 받아요', '각 분기마다 다른 스토리를 넣으세요', '최소 4가지 결말을 만드세요'],
      challenges: [
        {
          id: 'u2-w11-10-c1',
          description: '4가지 결말을 모두 구현하기',
          difficulty: 'medium',
          feedback: { perfect: '4가지 결말 완성! 풍부한 스토리예요!', wrong: '각 분기에서 if-else를 사용하여 결말을 추가하세요.' },
        },
        {
          id: 'u2-w11-10-c2',
          description: '결말마다 다른 점수/아이템 획득하기',
          difficulty: 'medium',
          feedback: { perfect: '점수 시스템까지! 게임 같은 스토리네요!', wrong: '각 결말에서 score 변수를 다르게 설정해보세요.' },
        },
        {
          id: 'u2-w11-10-c3',
          description: '3단계 이상의 분기 만들기 (8개 이상 결말)',
          difficulty: 'hard',
          feedback: { perfect: '8개 결말! 진짜 어드벤처 게임이에요!', wrong: '각 결말에서 한 번 더 선택지를 추가해보세요.' },
        },
      ],
      extensionActivities: ['결말을 더 추가해보기', '점수 시스템 넣기', '캐릭터 이름을 입력받아 스토리에 사용하기'],
    },
  ],
};

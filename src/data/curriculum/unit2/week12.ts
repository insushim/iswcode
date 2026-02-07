import type { Week } from '../../../types';

export const week12: Week = {
  id: 'week-12',
  number: 12,
  title: '변수 상자',
  description: '변수로 값을 저장하고 인터랙티브 스토리에 점수와 아이템 시스템을 추가해요',
  duration: '2차시',
  objectives: [
    '변수의 개념과 필요성을 이해한다',
    '변수의 생성, 저장, 변경, 계산을 할 수 있다',
    '반복문과 변수를 결합하여 카운터/타이머를 만든다',
    '변수를 활용하여 인터랙티브 스토리를 업그레이드한다',
    '변수의 블록 코딩과 Python 변환을 이해한다',
  ],
  missions: [
    // ===== 미션 1: 변수 소개 =====
    {
      id: 'u2-w12-1',
      title: '변수 = 이름표 붙은 상자',
      description: '값을 저장하고 꺼내 쓰는 변수를 배워요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 8,
      concept: '변수의 개념',
      learningObjectives: ['변수를 실생활 비유로 설명할 수 있다', '변수 선언과 할당의 차이를 이해한다'],
      cstaStandard: '1B-AP-09',
      conceptExplanation: `## 변수란?

변수는 **이름표가 붙은 상자**예요. 값을 넣고, 꺼내고, 바꿀 수 있어요!

### 실생활 비유
| 상자 (변수) | 내용물 (값) |
|-------------|------------|
| "이름" 상자 | "철수" |
| "나이" 상자 | 12 |
| "점수" 상자 | 95 |

### Scratch 블록
\`\`\`
[이름 v]를 [철수]로 정하기   → 상자에 넣기
[이름 v] 말하기              → 상자에서 꺼내기
[이름 v]를 [영희]로 정하기   → 내용물 바꾸기
\`\`\`

### Python
\`\`\`python
name = "철수"     # 상자에 넣기
say(name)         # 상자에서 꺼내기 → "철수"
name = "영희"     # 내용물 바꾸기
say(name)         # → "영희"
\`\`\`

### JavaScript
\`\`\`javascript
let name = "철수";
console.log(name);  // "철수"
name = "영희";
console.log(name);  // "영희"
\`\`\``,
      conceptCards: [
        { title: '변수 = 상자', content: '이름표가 붙은 상자에 값을 넣어요', icon: '📦', example: 'score = 100 → "score" 상자에 100 넣기' },
        { title: '= 저장', content: '= 기호로 값을 상자에 넣어요', icon: '📥', example: 'name = "철수" → name 상자에 "철수" 넣기' },
        { title: '값 변경', content: '같은 상자에 다른 값을 넣으면 덮어써져요', icon: '🔄', example: 'score = 100 → score = 200 (100은 사라짐)' },
      ],
      checkQuestions: [
        {
          question: 'score = 100 이후 score = 200을 하면 score의 값은?',
          options: ['100', '200', '300', '오류'],
          correctAnswer: 1,
          explanation: '변수에 새 값을 넣으면 이전 값은 사라지고 새 값으로 바뀌어요. 200이 됩니다!',
        },
        {
          question: '변수와 가장 비슷한 것은?',
          options: ['계산기', '이름표 붙은 서랍', '전화기', '시계'],
          correctAnswer: 1,
          explanation: '변수는 이름표가 붙은 서랍(상자)처럼 값을 넣고 꺼내는 거예요!',
        },
      ],
      hints: ['변수는 값을 저장하는 상자예요', '= 기호로 값을 넣어요', '같은 변수에 새 값을 넣으면 이전 값은 사라져요'],
      realWorldExample: '게임에서 HP, MP, 골드, 레벨 등이 모두 변수로 저장돼요!',
    },

    // ===== 미션 2: 변수 만들기와 사용 =====
    {
      id: 'u2-w12-2',
      title: '첫 변수 만들기',
      description: '변수를 만들고, 값을 저장하고, 화면에 보여줘요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '변수 선언과 사용',
      learningObjectives: ['변수를 만들고 값을 저장할 수 있다', '변수 값을 화면에 표시할 수 있다'],
      conceptExplanation: `## 변수 만들기

### Scratch 블록
\`\`\`
[이름 v]를 [고양이]로 정하기
[나이 v]를 [3]으로 정하기
[(이름) 은(는) (나이) 살이에요!] 말하기
\`\`\`

### Python (f-string 사용!)
\`\`\`python
name = "고양이"
age = 3
say(f"{name}은(는) {age}살이에요!")
# → "고양이은(는) 3살이에요!"
\`\`\``,
      blocks: ['이름을 고양이로 정하기', '나이를 3으로 정하기', '이름 + 나이 말하기'],
      correctBlocks: ['이름을 고양이로 정하기', '나이를 3으로 정하기', '이름 + 나이 말하기'],
      solutionSequence: ['set_name', 'set_age', 'say_intro'],
      starterCode: `# 나만의 캐릭터 소개!
name = "고양이"        # 이름 변수
age = 3                # 나이 변수
color = "주황색"       # 색상 변수

say(f"안녕! 나는 {name}이야!", 2)
say(f"나이는 {age}살이고 {color}이야!", 2)

# 도전: 변수 값을 바꿔서 다른 캐릭터를 만들어보세요!`,
      testCases: [
        { input: 'name', expectedOutput: '고양이', description: '이름 변수 확인' },
        { input: 'age', expectedOutput: '3', description: '나이 변수 확인' },
        { input: 'output', expectedOutput: '안녕! 나는 고양이이야!', description: '출력 확인' },
        { input: 'variables', expectedOutput: '3개', description: '변수 3개 사용' },
      ],
      hints: ['변수명 = 값 형태로 만들어요', 'f-string으로 변수를 문장에 넣을 수 있어요', '변수 값을 바꿔보면서 실험하세요'],
    },

    // ===== 미션 3: 변수 값 바꾸기 =====
    {
      id: 'u2-w12-3',
      title: '변수 값 바꾸기',
      description: '변수에 값을 더하거나 빼서 바꿔봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '변수 증감',
      learningObjectives: ['변수 값을 증가/감소시킬 수 있다', '+= 연산자를 이해한다'],
      conceptExplanation: `## 변수 값 변경하기

### Scratch 블록
\`\`\`
[점수 v]를 [0]으로 정하기
[점수 v]를 [10]만큼 바꾸기   → 10 증가!
[점수 v]를 [-5]만큼 바꾸기   → 5 감소!
\`\`\`

### Python
\`\`\`python
score = 0
score += 10    # score = score + 10 → 10
score += 10    # → 20
score -= 5     # score = score - 5 → 15
\`\`\`

### 연산자 정리
| 연산 | Scratch | Python | 결과 (score=10) |
|------|---------|--------|-----------------|
| 더하기 | 5만큼 바꾸기 | score += 5 | 15 |
| 빼기 | -3만큼 바꾸기 | score -= 3 | 7 |
| 곱하기 | - | score *= 2 | 20 |
| 나누기 | - | score /= 2 | 5 |`,
      starterCode: `# 점수 시스템
score = 0
say(f"시작 점수: {score}")

# 퀴즈 3개를 맞히면 각각 +10점!
score += 10
say(f"1번 정답! 점수: {score}")

score += 10
say(f"2번 정답! 점수: {score}")

score += 10
say(f"3번 정답! 점수: {score}")

# 힌트 사용 페널티 -5점
score -= 5
say(f"힌트 사용! 점수: {score}")

say(f"최종 점수: {score}점!")`,
      testCases: [
        { input: 'step1', expectedOutput: '10', description: '첫 번째 정답 후: 10점' },
        { input: 'step2', expectedOutput: '20', description: '두 번째 정답 후: 20점' },
        { input: 'step3', expectedOutput: '30', description: '세 번째 정답 후: 30점' },
        { input: 'final', expectedOutput: '25', description: '힌트 사용 후: 25점' },
      ],
      hints: ['+= 는 현재 값에 더하는 거예요', '-= 는 현재 값에서 빼는 거예요', '순서대로 값이 바뀌는 것을 추적해보세요'],
    },

    // ===== 미션 4: 변수로 계산하기 =====
    {
      id: 'u2-w12-4',
      title: '쇼핑 계산기',
      description: '변수로 가격을 계산하는 쇼핑 계산기를 만들어요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 14,
      concept: '변수 연산',
      learningObjectives: ['변수끼리 계산할 수 있다', '여러 변수를 조합하여 결과를 만들 수 있다'],
      conceptExplanation: `## 변수로 계산하기

### Scratch 블록
\`\`\`
[가격 v]를 [1000]으로 정하기
[개수 v]를 [3]으로 정하기
[총액 v]를 [(가격) * (개수)]로 정하기
\`\`\`

### Python
\`\`\`python
price = 1000
quantity = 3
total = price * quantity  # 3000

# 할인 적용
discount = 0.1  # 10% 할인
final = total * (1 - discount)  # 2700
\`\`\``,
      starterCode: `# 쇼핑 계산기
apple_price = 500     # 사과 가격
apple_qty = 3         # 사과 개수
banana_price = 300    # 바나나 가격
banana_qty = 5        # 바나나 개수

# 소계 계산
apple_total = apple_price * apple_qty      # 1500
banana_total = banana_price * banana_qty    # 1500
total = apple_total + banana_total          # 3000

say(f"사과 {apple_qty}개: {apple_total}원")
say(f"바나나 {banana_qty}개: {banana_total}원")
say(f"합계: {total}원")

# 10% 할인 적용
discount = total * 0.1    # 300
final = total - discount  # 2700
say(f"할인: -{discount}원")
say(f"최종 금액: {final}원!")`,
      testCases: [
        { input: 'apple_total', expectedOutput: '1500', description: '사과 소계' },
        { input: 'banana_total', expectedOutput: '1500', description: '바나나 소계' },
        { input: 'total', expectedOutput: '3000', description: '합계' },
        { input: 'final', expectedOutput: '2700', description: '할인 후 최종' },
      ],
      hints: ['* 는 곱하기예요', '변수끼리도 계산할 수 있어요', '할인은 total * 0.1로 계산해요'],
    },

    // ===== 미션 5: 카운터 만들기 =====
    {
      id: 'u2-w12-5',
      title: '클릭 카운터',
      description: '반복문과 변수로 1부터 10까지 세는 카운터를 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 85,
      estimatedMinutes: 14,
      concept: '반복 + 변수',
      learningObjectives: ['반복문 안에서 변수를 증가시킬 수 있다', '카운터 패턴을 이해한다'],
      conceptExplanation: `## 카운터: 반복문 + 변수

### Scratch 블록
\`\`\`
[카운트 v]를 [1]로 정하기
[10번 반복하기]
  [(카운트) 말하기]
  [1초 기다리기]
  [카운트 v]를 [1]만큼 바꾸기
\`\`\`

### Python
\`\`\`python
count = 1
for i in range(10):
    say(str(count))
    wait(1)
    count += 1
\`\`\`

### 더 파이썬스러운 방법
\`\`\`python
for count in range(1, 11):  # 1부터 10까지
    say(str(count))
    wait(1)
\`\`\``,
      starterCode: `# 1부터 10까지 카운터!
count = 1
for i in range(10):
    say(f"카운트: {count}", 1)
    count += 1

say("카운팅 완료!", 2)

# 도전: 카운트다운도 만들어보세요!
# 10부터 1까지 줄어드는 카운터`,
      testCases: [
        { input: 'count_sequence', expectedOutput: '1,2,3,4,5,6,7,8,9,10', description: '1~10 카운팅' },
        { input: 'final_count', expectedOutput: '11', description: '반복 후 count 값' },
        { input: 'iterations', expectedOutput: '10', description: '반복 횟수' },
        { input: 'pattern', expectedOutput: '카운터', description: '카운터 패턴' },
      ],
      hints: ['count를 1로 시작해요', '반복 안에서 1씩 증가시켜요', 'range(10)은 10번 반복해요'],
    },

    // ===== 미션 6: 두 수 교환 (알고리즘) =====
    {
      id: 'u2-w12-6',
      title: '컵 바꾸기 마술',
      description: '임시 변수를 사용하여 두 변수의 값을 교환해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '임시 변수 (swap)',
      learningObjectives: ['임시 변수의 필요성을 이해한다', 'swap 알고리즘을 구현할 수 있다'],
      conceptExplanation: `## Swap: 두 값 교환하기

### 문제 상황
컵 A에 콜라, 컵 B에 주스가 있어요. 바꾸고 싶어요!

### 잘못된 방법
\`\`\`python
a = "콜라"
b = "주스"
a = b      # a = "주스", b = "주스" ← 콜라가 사라짐!
b = a      # 둘 다 "주스"가 됨!
\`\`\`

### 올바른 방법: 빈 컵(임시 변수) 사용!
\`\`\`python
a = "콜라"
b = "주스"
temp = a    # temp = "콜라" (빈 컵에 콜라 옮김)
a = b       # a = "주스"
b = temp    # b = "콜라" (빈 컵에서 다시 옮김)
\`\`\`

### Python 특별 방법 (동시 교환!)
\`\`\`python
a, b = b, a  # 한 줄로 교환!
\`\`\``,
      starterCode: `# 두 변수 값 교환하기!
a = 10
b = 20
say(f"교환 전: a={a}, b={b}")

# 방법 1: 임시 변수 사용
temp = a    # temp에 a값 저장
a = b       # a에 b값 넣기
b = temp    # b에 temp값 넣기
say(f"교환 후: a={a}, b={b}")

# 방법 2: Python 특별 문법
a, b = b, a  # 한 줄로 다시 교환!
say(f"재교환: a={a}, b={b}")`,
      testCases: [
        { input: 'before', expectedOutput: 'a=10, b=20', description: '교환 전' },
        { input: 'after', expectedOutput: 'a=20, b=10', description: '교환 후' },
        { input: 'temp_used', expectedOutput: 'true', description: '임시 변수 사용' },
        { input: 're_swap', expectedOutput: 'a=10, b=20', description: '재교환 후' },
      ],
      hints: ['빈 컵(temp)이 필요해요', '순서: temp=a → a=b → b=temp', 'Python에서는 a,b = b,a로 한 줄에 가능해요'],
    },

    // ===== 미션 7: 최댓값/최솟값 찾기 =====
    {
      id: 'u2-w12-7',
      title: '최고 점수 찾기',
      description: '여러 숫자 중 가장 큰 수와 작은 수를 찾아요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '조건문 + 변수 갱신',
      learningObjectives: ['조건문으로 최댓값/최솟값을 갱신할 수 있다', '반복문과 조건문, 변수를 결합할 수 있다'],
      conceptExplanation: `## 최댓값 찾기 알고리즘

### 아이디어
1. "최댓값" 변수를 아주 작은 수로 시작
2. 숫자를 하나씩 확인
3. 현재 수 > 최댓값이면 최댓값을 갱신!

### Python
\`\`\`python
scores = [85, 92, 78, 96, 88]
max_score = 0

for score in scores:
    if score > max_score:
        max_score = score

say(f"최고 점수: {max_score}")  # 96
\`\`\``,
      starterCode: `# 최고 점수와 최저 점수 찾기!
scores = [85, 92, 78, 96, 88]
max_score = 0
min_score = 100

for score in scores:
    say(f"확인 중: {score}점")

    if score > max_score:
        max_score = score
        say(f"새 최고 점수! {max_score}")

    if score < min_score:
        min_score = score
        say(f"새 최저 점수! {min_score}")

say(f"최고: {max_score}점, 최저: {min_score}점")
say(f"차이: {max_score - min_score}점")`,
      testCases: [
        { input: 'max', expectedOutput: '96', description: '최고 점수' },
        { input: 'min', expectedOutput: '78', description: '최저 점수' },
        { input: 'diff', expectedOutput: '18', description: '차이 (96-78)' },
        { input: 'algorithm', expectedOutput: '비교→갱신', description: '알고리즘 패턴' },
      ],
      hints: ['max_score보다 큰 수를 찾으면 갱신해요', 'min_score보다 작은 수를 찾으면 갱신해요', 'for문으로 모든 점수를 확인하세요'],
    },

    // ===== 미션 8: 카운트다운 타이머 =====
    {
      id: 'u2-w12-8',
      title: '카운트다운 타이머',
      description: '10초부터 0까지 카운트다운하는 타이머를 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '타이머 + while 반복',
      learningObjectives: ['while 반복문을 사용할 수 있다', '조건에 따라 반복을 멈출 수 있다'],
      conceptExplanation: `## 카운트다운 타이머

### Scratch 블록
\`\`\`
[남은시간 v]를 [10]으로 정하기
[<남은시간 > 0> 까지 반복하기]
  [(남은시간) 말하기]
  [1초 기다리기]
  [남은시간 v]를 [-1]만큼 바꾸기
["시간 종료!" 말하기]
\`\`\`

### Python (while문!)
\`\`\`python
time_left = 10

while time_left > 0:
    say(str(time_left))
    wait(1)
    time_left -= 1

say("시간 종료!")
\`\`\`

### while vs for
- **for**: 정해진 횟수만큼 반복
- **while**: 조건이 참인 동안 계속 반복`,
      starterCode: `# 카운트다운 타이머!
time_left = 10

while time_left > 0:
    if time_left <= 3:
        say(f"{time_left}...!", 1)  # 마지막 3초는 강조!
    else:
        say(f"{time_left}", 1)
    time_left -= 1

say("시간 종료!", 3)
play_sound("explosion")`,
      testCases: [
        { input: 'countdown', expectedOutput: '10,9,8,7,6,5,4,3,2,1', description: '카운트다운' },
        { input: 'final', expectedOutput: '시간 종료!', description: '종료 메시지' },
        { input: 'emphasis', expectedOutput: '3,2,1은 강조', description: '마지막 3초 강조' },
        { input: 'loop_type', expectedOutput: 'while', description: 'while 반복문 사용' },
      ],
      hints: ['while 조건이 거짓이 되면 반복이 멈춰요', 'time_left -= 1 로 매초 감소해요', '0이 되면 while 조건(> 0)이 거짓!'],
    },

    // ===== 미션 9: 변수 종합 퀴즈 =====
    {
      id: 'u2-w12-9',
      title: '변수 마스터 퀴즈',
      description: '변수 개념을 완전히 이해했는지 확인!',
      type: 'quiz',
      difficulty: 'intermediate',
      exp: 70,
      estimatedMinutes: 10,
      concept: '변수 → 텍스트 코딩 브릿지',
      conceptExplanation: `## 변수 변환표

| Scratch 블록 | Python | JavaScript |
|-------------|--------|------------|
| [변수를 0으로 정하기] | var = 0 | let var = 0; |
| [변수를 1만큼 바꾸기] | var += 1 | var += 1; |
| [변수] 말하기 | say(var) | console.log(var); |
| [(변수1) + (변수2)] | var1 + var2 | var1 + var2 |`,
      checkQuestions: [
        {
          question: '다음 코드 실행 후 score의 값은?\nscore = 10\nscore += 5\nscore -= 3',
          options: ['10', '15', '12', '8'],
          correctAnswer: 2,
          explanation: '10 + 5 = 15, 15 - 3 = 12. score는 12가 돼요!',
        },
        {
          question: 'Scratch "[점수를 10만큼 바꾸기]"를 Python으로 쓰면?',
          options: ['score = 10', 'score += 10', 'score == 10', 'score + 10'],
          correctAnswer: 1,
          explanation: '"만큼 바꾸기"는 현재 값에 더하는 것이니까 += 를 사용해요!',
        },
        {
          question: 'while time > 0:에서 time이 0이 되면?',
          options: ['한 번 더 실행', '반복이 멈춤', '오류 발생', '영원히 반복'],
          correctAnswer: 1,
          explanation: '0 > 0은 거짓이므로 while 반복이 멈춰요!',
        },
        {
          question: '두 변수의 값을 바꾸려면 무엇이 필요한가요?',
          options: ['새 변수 2개', '임시 변수 1개', '아무것도 필요 없음', '함수'],
          correctAnswer: 1,
          explanation: '임시 변수(빈 컵)를 사용해서 값을 잠시 저장해야 교환할 수 있어요!',
        },
      ],
      hints: ['변수 값 추적: 한 줄씩 따라가세요', '+= 는 더하기, -= 는 빼기', 'while은 조건이 거짓이면 멈춤'],
    },

    // ===== 미션 10: 인터랙티브 스토리 업그레이드 (종합 프로젝트) =====
    {
      id: 'u2-w12-10',
      title: '인터랙티브 스토리 완성!',
      description: '변수(HP, 골드, 아이템)를 추가하여 인터랙티브 스토리를 완성해요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 140,
      estimatedMinutes: 25,
      concept: '프로젝트: 인터랙티브 스토리 완성',
      isWeeklyProject: true,
      learningObjectives: ['변수를 활용하여 게임 상태를 관리할 수 있다', '조건문, 반복문, 변수를 종합 활용할 수 있다'],
      conceptExplanation: `## 인터랙티브 스토리 완성!

Week 11의 분기 스토리에 변수 시스템을 추가해요!

### 추가할 변수들
| 변수 | 초기값 | 역할 |
|------|--------|------|
| hp | 100 | 체력 (0이면 게임오버) |
| gold | 0 | 골드 (아이템 구매용) |
| attack | 10 | 공격력 |
| items | [] | 보유 아이템 목록 |

### 게임 시스템
\`\`\`python
hp = 100
gold = 0
attack = 10
items = []

# 보물 상자 선택
if choice == "열기":
    gold += 50
    say(f"골드 +50! (현재: {gold})")

# 괴물과 전투
if choice == "싸우기":
    monster_hp = 30
    while monster_hp > 0 and hp > 0:
        monster_hp -= attack
        hp -= 5
    if hp > 0:
        say("승리!")
        gold += 100
    else:
        say("게임 오버!")
\`\`\``,
      starterCode: `# 인터랙티브 RPG 스토리!
# 변수로 상태 관리!

hp = 100
gold = 0
attack = 10
items = []

say("=== 숲속 모험 RPG ===", 2)
say(f"HP: {hp} | 골드: {gold} | 공격력: {attack}", 2)

# 장면 1: 상점
say("상점을 발견했다!", 2)
buy = ask("검(공격력+5, 30골드)을 살까요? (네/아니오)")
if buy == "네" and gold >= 30:
    gold -= 30
    attack += 5
    items.append("검")
    say(f"검 구매! 공격력: {attack}")
elif buy == "네":
    say("골드가 부족합니다!")

# 장면 2: 갈림길
choice1 = ask("왼쪽(보물) vs 오른쪽(괴물)?")

if choice1 == "왼쪽":
    say("보물 상자 발견!", 2)
    trap = ask("열기/지나치기?")
    if trap == "열기":
        import random
        if random.random() > 0.5:
            gold += 100
            say(f"금화 100개! (골드: {gold})")
        else:
            hp -= 30
            say(f"함정! HP -{30} (HP: {hp})")
    else:
        say("안전하게 지나갔다...")
else:
    say("거대한 슬라임 등장! HP: 50", 2)
    fight = ask("싸우기/도망?")
    if fight == "싸우기":
        monster_hp = 50
        say("전투 시작!")
        while monster_hp > 0 and hp > 0:
            monster_hp -= attack
            hp -= 8
            say(f"공격! 슬라임 HP: {max(0, monster_hp)}, 내 HP: {hp}")
        if hp > 0:
            gold += 150
            say(f"승리! 골드 +150 (골드: {gold})")
        else:
            say("쓰러졌다... 게임 오버!")
    else:
        hp -= 10
        say(f"도망치다 긁혔다! HP -{10} (HP: {hp})")

# 결과
say("=== 모험 결과 ===")
say(f"HP: {hp} | 골드: {gold}")
say(f"아이템: {items}")
if hp > 50:
    say("건강한 모험가!")
elif hp > 0:
    say("겨우 살아남았다!")
else:
    say("Game Over...")`,
      testCases: [
        { input: 'hp_system', expectedOutput: 'HP 변화 추적', description: 'HP 시스템 작동' },
        { input: 'gold_system', expectedOutput: '골드 변화 추적', description: '골드 시스템 작동' },
        { input: 'combat', expectedOutput: '전투 로직', description: '전투 while 루프' },
        { input: 'ending', expectedOutput: 'HP에 따른 결말', description: '조건별 엔딩' },
      ],
      hints: ['HP와 골드 변수를 계속 추적하세요', '전투는 while 반복문으로 구현해요', 'HP가 0이면 게임오버!', '각 선택에 따라 변수가 다르게 변해요'],
      challenges: [
        {
          id: 'u2-w12-10-c1',
          description: 'HP, 골드, 공격력 3가지 변수를 모두 활용하기',
          difficulty: 'medium',
          feedback: { perfect: '3가지 변수 시스템 완벽!', wrong: 'HP, 골드, 공격력 변수를 모두 변화시켜보세요.' },
        },
        {
          id: 'u2-w12-10-c2',
          description: 'while 반복문으로 전투 시스템 구현하기',
          difficulty: 'medium',
          feedback: { perfect: '전투 시스템 완성! while 루프를 잘 사용했어요!', wrong: 'while monster_hp > 0 and hp > 0: 형태로 전투를 만들어보세요.' },
        },
        {
          id: 'u2-w12-10-c3',
          description: '최종 결과에서 변수값에 따른 3단계 이상 엔딩',
          difficulty: 'hard',
          feedback: { perfect: '다양한 엔딩! 변수와 조건문의 완벽한 조합!', wrong: 'if-elif-else로 HP/골드에 따른 다양한 엔딩을 만드세요.' },
        },
      ],
      extensionActivities: ['상점에 아이템 더 추가하기', '몬스터 종류 늘리기', '레벨업 시스템 추가하기'],
    },
  ],
};

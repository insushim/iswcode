import type { Week } from '../../../types';

export const week13: Week = {
  id: 'week-13',
  number: 13,
  title: '이벤트와 메시지',
  description: '클릭, 키보드, 메시지로 상호작용하는 프로그램을 만들어요',
  duration: '2차시',
  objectives: [
    '이벤트의 개념(클릭, 키보드, 메시지)을 이해한다',
    '키보드 이벤트로 캐릭터를 조작할 수 있다',
    '메시지 방송/수신으로 스프라이트 간 통신을 할 수 있다',
    '이벤트와 조건문/변수를 결합하여 게임을 만들 수 있다',
    '이벤트 기반 프로그래밍의 블록→텍스트 변환을 이해한다',
  ],
  missions: [
    // ===== 미션 1: 이벤트 소개 =====
    {
      id: 'u2-w13-1',
      title: '이벤트란?',
      description: '"무언가가 일어났을 때" 반응하는 프로그램을 배워요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 8,
      concept: '이벤트 기초',
      learningObjectives: ['이벤트의 개념을 설명할 수 있다', '다양한 이벤트 종류를 구분할 수 있다'],
      cstaStandard: '1B-AP-12',
      conceptExplanation: `## 이벤트 = "~했을 때"

이벤트는 **무언가가 일어나는 것**을 감지하는 기능이에요.

### Scratch 이벤트 블록 (노란색 모자 블록)
| 블록 | 의미 | 용도 |
|------|------|------|
| [깃발 클릭했을 때] | 프로그램 시작 | 게임 시작 |
| [이 스프라이트를 클릭했을 때] | 마우스 클릭 | 버튼, 아이템 |
| [스페이스 키를 눌렀을 때] | 키보드 입력 | 점프, 발사 |
| [메시지1을 받았을 때] | 메시지 수신 | 장면 전환 |

### Python 이벤트 (개념)
\`\`\`python
# Scratch 이벤트 = Python 함수 + 이벤트 리스너
def on_click():           # 클릭했을 때
    say("클릭했어!")

def on_key_press(key):    # 키를 눌렀을 때
    if key == "space":
        jump()

def on_message(msg):      # 메시지 받았을 때
    if msg == "시작":
        start_game()
\`\`\`

### JavaScript 이벤트 (웹 브라우저)
\`\`\`javascript
// 실제 웹에서 이벤트를 이렇게 써요!
button.addEventListener("click", function() {
    alert("클릭했어!");
});
\`\`\``,
      conceptCards: [
        { title: '이벤트 = 트리거', content: '"무언가가 일어나면" 코드를 실행해요', icon: '⚡', example: '클릭, 키 입력, 충돌, 타이머 등' },
        { title: '이벤트 드리븐', content: '순차가 아니라 이벤트에 반응하는 프로그래밍', icon: '🎯', example: '게임은 대부분 이벤트 드리븐!' },
        { title: '모자 블록', content: 'Scratch에서 노란 모자 블록이 이벤트 블록', icon: '🎩', example: '[깃발 클릭했을 때]는 시작 이벤트' },
      ],
      checkQuestions: [
        {
          question: '다음 중 이벤트가 아닌 것은?',
          options: ['마우스 클릭', '키보드 누르기', '변수에 값 저장하기', '스프라이트 충돌'],
          correctAnswer: 2,
          explanation: '변수에 값을 저장하는 것은 이벤트가 아니라 명령이에요. 이벤트는 "일어나는 사건"이에요.',
        },
      ],
      hints: ['이벤트는 "~했을 때"로 시작해요', 'Scratch의 노란 블록이 이벤트 블록이에요', '게임은 이벤트로 작동해요'],
      realWorldExample: '스마트폰도 이벤트로 작동해요! 화면을 터치하면(이벤트) 앱이 반응하죠.',
    },

    // ===== 미션 2: 클릭 이벤트 =====
    {
      id: 'u2-w13-2',
      title: '클릭하면 말하기',
      description: '스프라이트를 클릭하면 인사하는 프로그램',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '클릭 이벤트',
      learningObjectives: ['클릭 이벤트를 사용할 수 있다', '이벤트에 반응하는 코드를 작성할 수 있다'],
      conceptExplanation: `## 클릭 이벤트

### Scratch
\`\`\`
[이 스프라이트를 클릭했을 때]
  ["안녕! 나를 클릭했어!" 2초 말하기]
  [크기를 110%로 정하기]
  [0.3초 기다리기]
  [크기를 100%로 정하기]
\`\`\`

### Python
\`\`\`python
def on_sprite_click():
    say("안녕! 나를 클릭했어!", 2)
    set_size(110)   # 커지는 효과
    wait(0.3)
    set_size(100)   # 원래대로
\`\`\``,
      blocks: ['이 스프라이트를 클릭했을 때', '안녕! 나를 클릭했어! 2초 말하기', '크기를 110%로', '0.3초 기다리기', '크기를 100%로'],
      correctBlocks: ['이 스프라이트를 클릭했을 때', '안녕! 나를 클릭했어! 2초 말하기', '크기를 110%로', '0.3초 기다리기', '크기를 100%로'],
      solutionSequence: ['on_click', 'say_hello', 'grow', 'wait', 'shrink'],
      starterCode: `# 클릭하면 반응하는 고양이!
click_count = 0

def on_sprite_click():
    global click_count
    click_count += 1
    say(f"안녕! {click_count}번째 클릭!", 2)
    set_size(110)
    wait(0.3)
    set_size(100)

# 10번 클릭하면 특별 메시지!
    if click_count == 10:
        say("10번 클릭! 대단해!", 3)
        change_costume("happy")`,
      testCases: [
        { input: '클릭 1회', expectedOutput: '1번째 클릭!', description: '첫 클릭' },
        { input: '클릭 5회', expectedOutput: '5번째 클릭!', description: '5번 클릭' },
        { input: '클릭 10회', expectedOutput: '10번 클릭! 대단해!', description: '특별 메시지' },
        { input: '크기 변화', expectedOutput: '100→110→100', description: '크기 애니메이션' },
      ],
      hints: ['on_sprite_click 함수가 클릭할 때마다 실행돼요', 'click_count로 클릭 수를 세요', '10번째 클릭에 특별 메시지!'],
    },

    // ===== 미션 3: 키보드로 캐릭터 이동 =====
    {
      id: 'u2-w13-3',
      title: '화살표로 움직이기',
      description: '화살표 키로 캐릭터를 상하좌우로 움직여요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 14,
      concept: '키보드 이벤트',
      learningObjectives: ['키보드 이벤트로 캐릭터를 조작할 수 있다', '각 키에 다른 동작을 연결할 수 있다'],
      conceptExplanation: `## 키보드로 캐릭터 조작!

### Scratch 방법 1: 이벤트 블록
\`\`\`
[오른쪽 화살표 키를 눌렀을 때]
  [x좌표를 10만큼 바꾸기]

[왼쪽 화살표 키를 눌렀을 때]
  [x좌표를 -10만큼 바꾸기]
\`\`\`

### Scratch 방법 2: 무한 반복 + 조건
\`\`\`
[무한 반복하기]
  [만약 <오른쪽 화살표 키를 눌렀는가?> 라면]
    [x좌표를 10만큼 바꾸기]
  [만약 <왼쪽 화살표 키를 눌렀는가?> 라면]
    [x좌표를 -10만큼 바꾸기]
  [만약 <위쪽 화살표 키를 눌렀는가?> 라면]
    [y좌표를 10만큼 바꾸기]
  [만약 <아래쪽 화살표 키를 눌렀는가?> 라면]
    [y좌표를 -10만큼 바꾸기]
\`\`\`

### Python
\`\`\`python
def on_key_press(key):
    if key == "right":
        change_x(10)
    elif key == "left":
        change_x(-10)
    elif key == "up":
        change_y(10)
    elif key == "down":
        change_y(-10)
\`\`\``,
      starterCode: `# 화살표 키로 고양이 움직이기!
x = 0
y = 0

def on_key_press(key):
    global x, y
    speed = 10

    if key == "right":
        x += speed
        say(f"오른쪽! ({x}, {y})")
    elif key == "left":
        x -= speed
        say(f"왼쪽! ({x}, {y})")
    elif key == "up":
        y += speed
        say(f"위로! ({x}, {y})")
    elif key == "down":
        y -= speed
        say(f"아래로! ({x}, {y})")

    goto(x, y)

    # 벽 감지 (화면 밖으로 못 나가게)
    if x > 240: x = 240
    if x < -240: x = -240
    if y > 180: y = 180
    if y < -180: y = -180`,
      testCases: [
        { input: '→키', expectedOutput: '(10, 0)', description: '오른쪽 이동' },
        { input: '←키', expectedOutput: '(-10, 0)', description: '왼쪽 이동' },
        { input: '↑키', expectedOutput: '(0, 10)', description: '위로 이동' },
        { input: '↓키', expectedOutput: '(0, -10)', description: '아래로 이동' },
      ],
      hints: ['각 화살표 키에 방향을 매핑하세요', 'x는 좌우, y는 상하예요', '화면 밖으로 나가지 않게 경계를 설정하세요'],
    },

    // ===== 미션 4: 메시지 방송 =====
    {
      id: 'u2-w13-4',
      title: '메시지 보내기',
      description: '스프라이트끼리 메시지를 주고받아요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '메시지 방송/수신',
      learningObjectives: ['메시지 방송과 수신을 사용할 수 있다', '스프라이트 간 통신의 개념을 이해한다'],
      conceptExplanation: `## 메시지: 스프라이트끼리 대화하기!

### Scratch 메시지 시스템
\`\`\`
[스프라이트 A - 고양이]
[이 스프라이트를 클릭했을 때]
  ["인사" 방송하기]

[스프라이트 B - 강아지]
["인사"를 받았을 때]
  ["안녕! 고양이!" 2초 말하기]
\`\`\`

### Python
\`\`\`python
# 스프라이트 A
def cat_click():
    broadcast("인사")

# 스프라이트 B
def on_message(msg):
    if msg == "인사":
        say("안녕! 고양이!")
\`\`\`

### 메시지 = 학교 방송
메시지 방송은 학교 방송처럼 모든 스프라이트에게 신호를 보내요!`,
      blocks: ['클릭했을 때', '인사 방송하기', '인사를 받았을 때', '안녕! 고양이! 말하기'],
      correctBlocks: ['클릭했을 때', '인사 방송하기', '인사를 받았을 때', '안녕! 고양이! 말하기'],
      solutionSequence: ['on_click', 'broadcast_hello', 'on_receive_hello', 'say_response'],
      starterCode: `# 메시지로 대화하기!
def cat_click():
    say("인사합니다!", 1)
    broadcast("인사")

def on_message(msg):
    if msg == "인사":
        say("안녕! 반가워!", 2)
        broadcast("답장")

    elif msg == "답장":
        say("우리 친구하자!", 2)`,
      testCases: [
        { input: '클릭', expectedOutput: '인사 메시지 방송', description: '메시지 발송' },
        { input: '인사 메시지', expectedOutput: '안녕! 반가워!', description: '메시지 수신' },
        { input: '답장 메시지', expectedOutput: '우리 친구하자!', description: '연쇄 메시지' },
        { input: '전체 흐름', expectedOutput: '인사→응답→답장', description: '메시지 체인' },
      ],
      hints: ['broadcast()로 메시지를 보내요', 'on_message()로 메시지를 받아요', '메시지 이름을 정확히 일치시켜요'],
    },

    // ===== 미션 5: 장면 전환 시스템 =====
    {
      id: 'u2-w13-5',
      title: '장면 전환 시스템',
      description: '메시지로 시작 화면 → 게임 화면 → 결과 화면을 전환해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '메시지로 상태 관리',
      learningObjectives: ['메시지를 사용하여 프로그램 상태를 전환할 수 있다', '시작/게임/결과 화면 구조를 만들 수 있다'],
      conceptExplanation: `## 장면 전환 = 게임의 기본 구조!

### 게임 3단계
\`\`\`
[시작 화면] ──"게임시작"──→ [게임 플레이] ──"게임끝"──→ [결과 화면]
                                                       │
                                                  "다시하기"
                                                       │
                                                ──────→ [시작 화면]
\`\`\`

### Scratch 구현
\`\`\`
[깃발 클릭했을 때]
  ["시작" 방송하기]

["시작"을 받았을 때]
  [배경을 시작화면으로]
  ["클릭하면 게임 시작!" 말하기]

[이 스프라이트를 클릭했을 때]
  ["게임시작" 방송하기]

["게임시작"을 받았을 때]
  [배경을 게임화면으로]
  ...게임 로직...
  ["게임끝" 방송하기]

["게임끝"을 받았을 때]
  [배경을 결과화면으로]
  [(점수) 말하기]
\`\`\``,
      starterCode: `# 장면 전환 시스템!
scene = "title"

def on_flag():
    global scene
    scene = "title"
    broadcast("show_title")

def on_message(msg):
    global scene
    if msg == "show_title":
        scene = "title"
        change_backdrop("title_screen")
        say("스페이스를 누르면 게임 시작!", 0)

    elif msg == "game_start":
        scene = "game"
        change_backdrop("game_screen")
        say("게임 시작!", 2)
        # 게임 로직...
        wait(5)
        broadcast("game_over")

    elif msg == "game_over":
        scene = "result"
        change_backdrop("result_screen")
        say(f"게임 종료! 점수: {score}", 0)

def on_key_press(key):
    if key == "space" and scene == "title":
        broadcast("game_start")
    elif key == "space" and scene == "result":
        broadcast("show_title")`,
      testCases: [
        { input: '깃발 클릭', expectedOutput: '시작 화면', description: '타이틀 화면 표시' },
        { input: 'Space(시작)', expectedOutput: '게임 시작!', description: '게임 화면 전환' },
        { input: '게임 종료', expectedOutput: '결과 화면', description: '결과 화면 전환' },
        { input: 'Space(결과)', expectedOutput: '시작 화면', description: '다시 시작' },
      ],
      hints: ['scene 변수로 현재 장면을 추적해요', '메시지로 장면을 전환해요', '같은 키(Space)도 장면에 따라 다르게 동작해요'],
    },

    // ===== 미션 6: 클릭 게임 만들기 =====
    {
      id: 'u2-w13-6',
      title: '두더지 잡기 게임',
      description: '랜덤 위치에 나타나는 두더지를 클릭해서 점수를 올려요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '이벤트 + 랜덤 + 변수',
      learningObjectives: ['클릭 이벤트와 랜덤을 결합할 수 있다', '게임 루프를 구현할 수 있다'],
      gameType: 'click-game',
      conceptExplanation: `## 두더지 잡기 게임!

### 게임 메커니즘
1. 두더지가 랜덤 위치에 나타남
2. 플레이어가 클릭하면 점수 +1
3. 10초 타이머 종료 시 결과 표시

### Scratch 블록
\`\`\`
[깃발 클릭했을 때]
  [점수를 0으로]
  [시간을 10으로]
  [무한 반복하기]
    [x: -200~200 난수, y: -150~150 난수로 이동]
    [1초 기다리기]

[이 스프라이트를 클릭했을 때]
  [점수를 1만큼 바꾸기]
  ["야옹" 소리 내기]
  [랜덤 위치로 이동]
\`\`\``,
      starterCode: `# 두더지 잡기 게임!
import random

score = 0
time_left = 10
game_active = True

def spawn_mole():
    x = random.randint(-200, 200)
    y = random.randint(-150, 150)
    goto(x, y)
    show()

def on_sprite_click():
    global score
    if game_active:
        score += 1
        say(f"잡았다! 점수: {score}", 0.5)
        play_sound("pop")
        spawn_mole()  # 새 위치로!

def game_timer():
    global time_left, game_active
    while time_left > 0:
        wait(1)
        time_left -= 1
        say(f"남은 시간: {time_left}초")

    game_active = False
    say(f"게임 끝! 최종 점수: {score}점!", 5)

    if score >= 8:
        say("S등급! 두더지 사냥꾼!")
    elif score >= 5:
        say("A등급! 잘했어요!")
    else:
        say("B등급! 더 빨리 클릭해보세요!")

# 게임 시작
spawn_mole()
game_timer()`,
      testCases: [
        { input: '클릭', expectedOutput: '점수 +1', description: '두더지 클릭' },
        { input: '10초 경과', expectedOutput: '게임 끝!', description: '타이머 종료' },
        { input: '점수=8이상', expectedOutput: 'S등급', description: 'S등급 판정' },
        { input: '점수=5이상', expectedOutput: 'A등급', description: 'A등급 판정' },
      ],
      hints: ['random.randint()로 랜덤 위치를 만들어요', '클릭할 때마다 새 위치로 이동해요', '타이머가 0이 되면 게임이 끝나요'],
      winCondition: { type: 'score', target: 8 },
      challenges: [
        {
          id: 'u2-w13-6-c1',
          description: 'S등급(8점 이상) 달성하기',
          difficulty: 'medium',
          feedback: { perfect: 'S등급! 반사신경이 대단해요!', wrong: '더 빨리 클릭해보세요!' },
        },
      ],
    },

    // ===== 미션 7: 키보드 피아노 =====
    {
      id: 'u2-w13-7',
      title: '키보드 피아노',
      description: '각 키에 다른 음을 연결하여 피아노를 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '다중 키 이벤트',
      learningObjectives: ['여러 키에 각각 다른 기능을 부여할 수 있다', '소리 블록을 사용할 수 있다'],
      conceptExplanation: `## 키보드 피아노!

### 키-음 매핑
| 키 | 음 | 주파수 |
|----|-----|--------|
| A | 도(C) | 261 Hz |
| S | 레(D) | 293 Hz |
| D | 미(E) | 329 Hz |
| F | 파(F) | 349 Hz |
| G | 솔(G) | 392 Hz |
| H | 라(A) | 440 Hz |
| J | 시(B) | 493 Hz |

### Scratch
\`\`\`
[a 키를 눌렀을 때]
  [60번 음을 0.5박자 동안 연주하기]

[s 키를 눌렀을 때]
  [62번 음을 0.5박자 동안 연주하기]
\`\`\`

### Python
\`\`\`python
notes = {"a": 60, "s": 62, "d": 64, "f": 65, "g": 67, "h": 69, "j": 71}
names = {"a": "도", "s": "레", "d": "미", "f": "파", "g": "솔", "h": "라", "j": "시"}

def on_key_press(key):
    if key in notes:
        play_note(notes[key], 0.5)
        say(names[key])
\`\`\``,
      starterCode: `# 키보드 피아노!
notes = {"a": 60, "s": 62, "d": 64, "f": 65, "g": 67, "h": 69, "j": 71}
names = {"a": "도", "s": "레", "d": "미", "f": "파", "g": "솔", "h": "라", "j": "시"}
melody = []

def on_key_press(key):
    if key in notes:
        play_note(notes[key], 0.5)
        say(names[key], 0.5)
        melody.append(names[key])

# 녹음된 멜로디 재생
def on_message(msg):
    if msg == "play_melody":
        say("녹음된 멜로디 재생!")
        for note_name in melody:
            # 이름으로 음 찾기
            for k, v in names.items():
                if v == note_name:
                    play_note(notes[k], 0.5)
                    break`,
      testCases: [
        { input: 'A키', expectedOutput: '도', description: 'A=도' },
        { input: 'S키', expectedOutput: '레', description: 'S=레' },
        { input: 'D키', expectedOutput: '미', description: 'D=미' },
        { input: 'A,S,D', expectedOutput: '도레미', description: '멜로디 기록' },
      ],
      hints: ['딕셔너리로 키-음 매핑해요', 'play_note()로 소리를 냅니다', 'melody 리스트에 녹음해요'],
    },

    // ===== 미션 8: 대화 시스템 =====
    {
      id: 'u2-w13-8',
      title: 'NPC 대화 시스템',
      description: '메시지 체인으로 NPC와 대화하는 시스템을 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '메시지 체인 + 상태 관리',
      learningObjectives: ['메시지를 연쇄적으로 사용하여 대화 흐름을 만들 수 있다', '상태 변수로 대화 진행을 추적할 수 있다'],
      conceptExplanation: `## NPC 대화 시스템

RPG 게임의 NPC 대화를 구현해봐요!

### 대화 구조
\`\`\`
[NPC 클릭]
  ↓
대화 1: "안녕! 모험가!"
  ↓ [Space]
대화 2: "퀘스트가 있어. 슬라임 3마리를 잡아와!"
  ↓ [Space]
선택: "수락" / "거절"
  ↓         ↓
수락 경로  거절 경로
\`\`\`

### Python
\`\`\`python
dialog_state = 0
dialogs = [
    "안녕! 모험가!",
    "퀘스트가 있어.",
    "슬라임 3마리를 잡아와!"
]

def on_sprite_click():
    global dialog_state
    if dialog_state < len(dialogs):
        say(dialogs[dialog_state])
        dialog_state += 1
    else:
        choice = ask("수락/거절?")
        if choice == "수락":
            broadcast("quest_accepted")
\`\`\``,
      starterCode: `# NPC 대화 시스템!
dialog_state = 0
quest_active = False

dialogs = [
    {"text": "안녕! 용감한 모험가!", "speaker": "마을 촌장"},
    {"text": "우리 마을에 큰 문제가 생겼어...", "speaker": "마을 촌장"},
    {"text": "어둠의 숲에서 슬라임이 나타났어!", "speaker": "마을 촌장"},
    {"text": "슬라임 3마리를 처치해주겠니?", "speaker": "마을 촌장"},
]

def on_sprite_click():
    global dialog_state, quest_active

    if dialog_state < len(dialogs):
        d = dialogs[dialog_state]
        say(f"[{d['speaker']}] {d['text']}", 2)
        dialog_state += 1
    else:
        choice = ask("퀘스트를 수락하시겠습니까? (수락/거절)")
        if choice == "수락":
            quest_active = True
            say("[퀘스트 수락!] 슬라임 3마리 처치", 2)
            broadcast("quest_start")
        else:
            say("다음에 다시 와주세요...", 2)
            dialog_state = 0  # 처음부터 다시

def on_message(msg):
    if msg == "quest_complete":
        say("[마을 촌장] 고마워! 보상이야!", 2)
        say("골드 +200!", 2)`,
      testCases: [
        { input: '클릭 1회', expectedOutput: '안녕! 용감한 모험가!', description: '첫 대화' },
        { input: '클릭 4회', expectedOutput: '수락/거절 선택', description: '퀘스트 제안' },
        { input: '수락', expectedOutput: '퀘스트 시작', description: '퀘스트 수락' },
        { input: '거절', expectedOutput: '다음에 다시', description: '퀘스트 거절' },
      ],
      hints: ['dialog_state로 현재 대화 번호를 추적해요', '모든 대화가 끝나면 선택지를 보여줘요', '메시지로 퀘스트 상태를 전달해요'],
    },

    // ===== 미션 9: 이벤트 퀴즈 =====
    {
      id: 'u2-w13-9',
      title: '이벤트 마스터 퀴즈',
      description: '이벤트 프로그래밍 이해도 확인!',
      type: 'quiz',
      difficulty: 'intermediate',
      exp: 70,
      estimatedMinutes: 10,
      concept: '이벤트 → 텍스트 코딩 브릿지',
      conceptExplanation: '이벤트 프로그래밍을 완전히 이해했는지 확인해봐요!',
      checkQuestions: [
        {
          question: 'Scratch의 "[스페이스 키를 눌렀을 때]"는 어떤 프로그래밍 개념인가요?',
          options: ['반복문', '조건문', '이벤트', '변수'],
          correctAnswer: 2,
          explanation: '키를 누르는 것은 "이벤트"이고, 이에 반응하는 것이 이벤트 프로그래밍이에요.',
        },
        {
          question: 'Scratch에서 스프라이트 A가 B에게 신호를 보내려면?',
          options: ['변수 사용', '메시지 방송하기', '직접 명령하기', '복제하기'],
          correctAnswer: 1,
          explanation: '"메시지 방송하기"로 신호를 보내고, 다른 스프라이트가 "메시지를 받았을 때"로 받아요.',
        },
        {
          question: 'JavaScript에서 버튼 클릭 이벤트를 처리하는 코드는?',
          options: ['if (click) {}', 'button.addEventListener("click", fn)', 'onclick = fn', 'button.click(fn)'],
          correctAnswer: 1,
          explanation: 'JavaScript에서는 addEventListener로 이벤트를 등록해요!',
        },
        {
          question: '게임에서 "시작→플레이→결과" 화면을 전환할 때 가장 좋은 방법은?',
          options: ['if문으로 전부 처리', '메시지 방송으로 장면 전환', '변수만 사용', '반복문 사용'],
          correctAnswer: 1,
          explanation: '메시지 방송으로 장면을 전환하면 코드가 깔끔하고 관리하기 쉬워요!',
        },
      ],
      hints: ['이벤트는 "~했을 때" 반응하는 것', '메시지는 스프라이트 간 통신', 'addEventListener는 JS 이벤트 등록'],
    },

    // ===== 미션 10: 미니 게임 기초 =====
    {
      id: 'u2-w13-10',
      title: '미니 게임 기초!',
      description: '이벤트, 조건문, 변수를 모두 사용하여 미니 게임의 뼈대를 만들어요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 120,
      estimatedMinutes: 22,
      concept: '이벤트 종합 (게임 기초)',
      isWeeklyProject: true,
      learningObjectives: ['이벤트 기반으로 게임 구조를 설계할 수 있다', '시작-게임-결과 루프를 구현할 수 있다'],
      conceptExplanation: `## 미니 게임 기초 프로젝트!

Week 13-14에 걸쳐 완전한 미니 게임을 만들어요!

### 이번 주: 게임 뼈대 (구조)
1. **시작 화면**: 타이틀 + 시작 버튼
2. **게임 플레이**: 키보드 조작 + 점수
3. **결과 화면**: 점수 표시 + 재시작

### 다음 주: 게임 완성
- 충돌 감지
- 난이도 시스템
- 사운드 효과
- 애니메이션`,
      starterCode: `# 미니 게임 뼈대!
# 피하기 게임 기초

import random

# 게임 상태
scene = "title"
score = 0
player_x = 0
player_y = -150
game_speed = 3
obstacles = []

# 시작 화면
def show_title():
    global scene
    scene = "title"
    say("=== 피하기 게임 ===", 0)
    say("Space로 시작!", 0)

# 게임 시작
def start_game():
    global scene, score, player_x, obstacles
    scene = "game"
    score = 0
    player_x = 0
    obstacles = []
    say("게임 시작!", 1)

# 키보드 조작
def on_key_press(key):
    global player_x, scene
    if key == "space" and scene == "title":
        start_game()
    elif key == "space" and scene == "result":
        show_title()
    elif scene == "game":
        if key == "left":
            player_x -= 20
        elif key == "right":
            player_x += 20

# 게임 루프
def game_loop():
    global score, scene
    while scene == "game":
        # 장애물 생성
        if random.random() < 0.3:
            ox = random.randint(-200, 200)
            obstacles.append({"x": ox, "y": 180})

        # 장애물 이동
        for obs in obstacles:
            obs["y"] -= game_speed

        # 충돌 감지 (다음 주에 완성!)
        for obs in obstacles:
            if abs(obs["x"] - player_x) < 30 and abs(obs["y"] - player_y) < 30:
                scene = "result"
                say(f"충돌! 최종 점수: {score}", 3)
                break

        # 점수 증가
        score += 1
        wait(0.1)

show_title()`,
      testCases: [
        { input: 'Space(시작)', expectedOutput: '게임 시작!', description: '게임 시작' },
        { input: '←/→ 키', expectedOutput: '캐릭터 좌우 이동', description: '키보드 조작' },
        { input: '충돌', expectedOutput: '결과 화면', description: '게임 오버' },
        { input: 'Space(결과)', expectedOutput: '시작 화면', description: '재시작' },
      ],
      hints: ['scene 변수로 현재 상태를 관리해요', '게임 루프가 핵심이에요', '다음 주에 충돌과 효과를 완성해요'],
      challenges: [
        {
          id: 'u2-w13-10-c1',
          description: '시작→게임→결과 3단계 구조 구현',
          difficulty: 'medium',
          feedback: { perfect: '게임 구조 완성! 훌륭한 기초!', wrong: 'scene 변수와 메시지로 장면을 전환해보세요.' },
        },
        {
          id: 'u2-w13-10-c2',
          description: '키보드로 캐릭터 이동 구현',
          difficulty: 'easy',
          feedback: { perfect: '조작 시스템 구현 완료!', wrong: 'on_key_press에서 left/right 키를 처리하세요.' },
        },
      ],
    },
  ],
};

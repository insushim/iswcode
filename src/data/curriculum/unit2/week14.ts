import type { Week } from '../../../types';

export const week14: Week = {
  id: 'week-14',
  number: 14,
  title: '종합 프로젝트',
  description: '배운 모든 것을 활용해서 나만의 완전한 게임을 만들어요',
  duration: '2차시',
  objectives: [
    '충돌 감지 알고리즘을 이해하고 구현할 수 있다',
    '난이도 시스템(레벨업, 속도 증가)을 설계할 수 있다',
    '게임 UI(시작/결과 화면, 점수판)를 구현할 수 있다',
    '복제본(클론)을 활용한 다중 객체 관리를 할 수 있다',
    '순차/반복/조건/변수/이벤트를 종합적으로 활용할 수 있다',
  ],
  missions: [
    // ===== 미션 1: 충돌 감지 마스터 =====
    {
      id: 'u2-w14-1',
      title: '충돌 감지 마스터',
      description: '두 스프라이트가 부딪혔는지 감지하는 핵심 기술을 배워요',
      type: 'interactive-lesson',
      difficulty: 'intermediate',
      exp: 60,
      estimatedMinutes: 10,
      concept: '충돌 감지',
      learningObjectives: ['충돌 감지의 원리를 설명할 수 있다', '색상 감지와 스프라이트 감지를 구분할 수 있다'],
      cstaStandard: '1B-AP-15',
      conceptExplanation: `## 충돌 감지 = "닿았는가?"

게임의 핵심! 두 물체가 **부딪혔는지** 확인하는 기술이에요.

### Scratch 충돌 감지 블록
| 블록 | 용도 | 예시 |
|------|------|------|
| [마우스 포인터에 닿았는가?] | 마우스 감지 | 마우스 따라다니기 |
| [스프라이트1에 닿았는가?] | 캐릭터 충돌 | 적에게 닿으면 게임오버 |
| [빨간색에 닿았는가?] | 색상 충돌 | 벽에 닿으면 멈추기 |
| [가장자리에 닿았는가?] | 화면 끝 | 튕기기 |

### 충돌 감지 원리 (AABB)
\`\`\`
두 사각형이 겹치는지 확인:
  A의 왼쪽 < B의 오른쪽 AND
  A의 오른쪽 > B의 왼쪽 AND
  A의 위 > B의 아래 AND
  A의 아래 < B의 위
  → 충돌!
\`\`\`

### Python 충돌 감지
\`\`\`python
# 거리 기반 충돌 감지
import math

def check_collision(x1, y1, x2, y2, radius=30):
    distance = math.sqrt((x2-x1)**2 + (y2-y1)**2)
    return distance < radius

# 사용 예시
if check_collision(player_x, player_y, enemy_x, enemy_y):
    print("충돌! 게임오버!")
\`\`\`

### JavaScript 충돌 감지
\`\`\`javascript
function checkCollision(obj1, obj2, radius = 30) {
  const dx = obj2.x - obj1.x;
  const dy = obj2.y - obj1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < radius;
}
\`\`\``,
      conceptCards: [
        { title: '스프라이트 충돌', content: '"~에 닿았는가?" 블록으로 두 캐릭터가 부딪혔는지 확인해요', icon: '💥', example: '[적에 닿았는가?] → 참이면 게임오버' },
        { title: '색상 충돌', content: '특정 색깔에 닿았는지 확인할 수 있어요', icon: '🎨', example: '[빨간색에 닿았는가?] → 벽 감지' },
        { title: '거리 충돌', content: '두 점 사이의 거리가 일정 이하면 충돌로 판단해요', icon: '📏', example: 'distance < 30 → 충돌!' },
      ],
      checkQuestions: [
        {
          question: 'Scratch에서 적 캐릭터에 닿았는지 확인하려면 어떤 블록을 사용하나요?',
          options: ['[10칸 움직이기]', '[적에 닿았는가?]', '[x좌표를 10으로 정하기]', '[변수를 1만큼 바꾸기]'],
          correctAnswer: 1,
          explanation: '"~에 닿았는가?" 블록은 감지 카테고리에 있는 조건 블록으로, 다른 스프라이트와의 충돌을 확인해요!',
        },
        {
          question: '거리 기반 충돌 감지에서 두 물체의 거리가 30 미만이면?',
          options: ['아무 일도 없다', '충돌로 판정한다', '물체가 사라진다', '속도가 빨라진다'],
          correctAnswer: 1,
          explanation: '거리가 설정한 반지름(radius)보다 작으면 두 물체가 겹쳤다고 판단해요!',
        },
      ],
      hints: ['충돌 감지는 조건문 안에서 사용해요', '"~에 닿았는가?"는 참/거짓을 반환해요', '무한 반복 안에서 계속 확인해야 해요'],
    },

    // ===== 미션 2: 피하기 게임 충돌 시스템 =====
    {
      id: 'u2-w14-2',
      title: '피하기 게임: 충돌 시스템',
      description: 'Week 13에서 만든 피하기 게임에 정확한 충돌 감지를 추가해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 15,
      concept: '충돌 감지 구현',
      learningObjectives: ['거리 기반 충돌 감지를 코드로 구현할 수 있다', '충돌 시 게임 상태를 변경할 수 있다'],
      cstaStandard: '1B-AP-15',
      conceptExplanation: `## 피하기 게임에 충돌 감지 추가!

Week 13에서 게임 뼈대를 만들었어요. 이제 충돌 감지를 완성합니다!

### Scratch 방식
\`\`\`
[무한 반복]
  [만약 <장애물에 닿았는가?>]
    [생명을 -1만큼 바꾸기]
    [만약 <생명 = 0>]
      ["게임오버" 방송하기]
    [아니면]
      ["깜빡임" 방송하기]  # 무적 시간
    [끝]
  [끝]
[끝]
\`\`\`

### Python 충돌 + 생명 시스템
\`\`\`python
import math

def check_collision(px, py, ox, oy, r=30):
    dist = math.sqrt((ox - px)**2 + (oy - py)**2)
    return dist < r

# 게임 루프 안에서
for obs in obstacles:
    if check_collision(player_x, player_y, obs["x"], obs["y"]):
        lives -= 1
        obs["active"] = False  # 장애물 비활성화
        if lives <= 0:
            scene = "gameover"
            break
        else:
            invincible = True  # 무적 시간 시작
\`\`\``,
      starterCode: `# 피하기 게임 - 충돌 시스템 완성!
# Week 13 게임 뼈대에 충돌 감지를 추가하세요

import math
import random

# 게임 변수
player_x = 0
player_y = -150
lives = 3
score = 0
invincible = False
inv_timer = 0

# 장애물 리스트
obstacles = []

# 충돌 감지 함수를 완성하세요!
def check_collision(px, py, ox, oy, radius=30):
    # TODO: 두 점 사이의 거리를 계산하고
    # 거리가 radius보다 작으면 True를 반환하세요
    distance = math.sqrt((ox - px)**2 + (oy - py)**2)
    return distance < radius

# 장애물 생성
def spawn_obstacle():
    ox = random.randint(-200, 200)
    obstacles.append({"x": ox, "y": 180, "active": True})

# 게임 루프
def game_update():
    global score, lives, invincible, inv_timer

    # 장애물 이동
    for obs in obstacles:
        if obs["active"]:
            obs["y"] -= 5

    # 무적 시간 관리
    if invincible:
        inv_timer -= 1
        if inv_timer <= 0:
            invincible = False

    # 충돌 확인
    for obs in obstacles:
        if obs["active"] and not invincible:
            if check_collision(player_x, player_y, obs["x"], obs["y"]):
                lives -= 1
                obs["active"] = False
                if lives <= 0:
                    print(f"게임오버! 최종 점수: {score}")
                    return "gameover"
                else:
                    invincible = True
                    inv_timer = 20
                    print(f"앗! 남은 생명: {lives}")

    # 화면 밖 장애물 제거 & 점수
    for obs in obstacles[:]:
        if obs["y"] < -200:
            obstacles.remove(obs)
            score += 10

    return "playing"

# 테스트
spawn_obstacle()
obstacles[0]["y"] = player_y  # 플레이어 위치로
obstacles[0]["x"] = player_x
result = game_update()
print(f"생명: {lives}, 점수: {score}")`,
      testCases: [
        { input: '충돌 발생', expectedOutput: '앗! 남은 생명: 2', description: '첫 충돌 시 생명 감소' },
        { input: '생명 0', expectedOutput: '게임오버! 최종 점수: 0', description: '생명 소진 시 게임오버' },
        { input: '장애물 통과', expectedOutput: '점수 +10', description: '장애물 지나가면 점수 증가' },
        { input: '무적 상태 충돌', expectedOutput: '데미지 없음', description: '무적 시간엔 피해 없음' },
      ],
      blocks: [
        '거리 = sqrt((x2-x1)^2 + (y2-y1)^2)',
        'if 거리 < 반지름:',
        '  충돌!',
        'lives -= 1',
        'if lives <= 0:',
        '  게임오버',
        'invincible = True',
      ],
      correctBlocks: [
        '거리 = sqrt((x2-x1)^2 + (y2-y1)^2)',
        'if 거리 < 반지름:',
        '  lives -= 1',
        '  if lives <= 0:',
        '    게임오버',
        '  invincible = True',
      ],
      hints: ['math.sqrt()로 거리를 계산하세요', 'distance < radius 이면 충돌!', '무적 시간 동안은 충돌을 무시하세요'],
      challenges: [
        {
          id: 'u2-w14-2-c1',
          description: '거리 기반 충돌 감지 함수 완성',
          difficulty: 'medium',
          feedback: { perfect: '충돌 감지 완벽 구현! 게임의 핵심을 마스터했어요!', wrong: 'math.sqrt((ox-px)**2 + (oy-py)**2) 공식을 사용해보세요.' },
        },
        {
          id: 'u2-w14-2-c2',
          description: '생명 + 무적 시간 시스템 구현',
          difficulty: 'hard',
          feedback: { perfect: '생명 시스템까지 완벽! 프로 게임 개발자 수준이에요!', wrong: 'invincible 변수로 무적 상태를 관리하고, inv_timer로 시간을 체크하세요.' },
        },
      ],
    },

    // ===== 미션 3: 복제본(클론)으로 장애물 대량 생성 =====
    {
      id: 'u2-w14-3',
      title: '클론 마스터: 장애물 비',
      description: '복제본을 사용해 장애물을 끊임없이 쏟아지게 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 15,
      concept: '복제본(클론) 활용',
      learningObjectives: ['복제본 생성/삭제의 원리를 이해한다', '다중 객체를 효율적으로 관리할 수 있다'],
      cstaStandard: '1B-AP-11',
      conceptExplanation: `## 복제본(클론) = 분신술!

하나의 스프라이트로 **수십 개의 복사본**을 만들 수 있어요.

### Scratch 클론 블록
\`\`\`
[나 자신의 복제본 만들기]    → 복제본 생성
[복제되었을 때]              → 복제본이 할 행동
[이 복제본 삭제하기]          → 복제본 제거
\`\`\`

### 장애물 비 패턴
\`\`\`
# 메인 스프라이트 (장애물 생성기)
[깃발 클릭했을 때]
[무한 반복]
  [나 자신의 복제본 만들기]
  [0.5~1.5초 기다리기]
[끝]

# 복제본 행동
[복제되었을 때]
[x좌표를 (-200~200 사이 난수)로 정하기]
[y좌표를 180으로 정하기]
[무한 반복]
  [y좌표를 -5만큼 바꾸기]
  [만약 <y좌표 < -180>]
    [이 복제본 삭제하기]
  [끝]
[끝]
\`\`\`

### Python OOP 방식
\`\`\`python
class Obstacle:
    def __init__(self):
        self.x = random.randint(-200, 200)
        self.y = 180
        self.speed = random.uniform(3, 7)
        self.active = True

    def update(self):
        self.y -= self.speed
        if self.y < -200:
            self.active = False

# 리스트로 관리
obstacles = []
obstacles.append(Obstacle())  # 복제본 생성!
\`\`\`

### JavaScript 클래스
\`\`\`javascript
class Obstacle {
  constructor() {
    this.x = Math.random() * 400 - 200;
    this.y = 180;
    this.speed = 3 + Math.random() * 4;
  }
  update() { this.y -= this.speed; }
  isOffScreen() { return this.y < -200; }
}
\`\`\``,
      starterCode: `# 클론 마스터: 장애물 비!
# 클래스로 복제본을 관리합니다

import random

class Obstacle:
    def __init__(self, speed_base=5):
        self.x = random.randint(-200, 200)
        self.y = 180
        self.speed = speed_base + random.uniform(0, 3)
        self.size = random.choice(["small", "medium", "large"])
        self.active = True

    def update(self):
        self.y -= self.speed
        if self.y < -200:
            self.active = False

    def get_radius(self):
        sizes = {"small": 15, "medium": 25, "large": 40}
        return sizes[self.size]

# 장애물 매니저
class ObstacleManager:
    def __init__(self):
        self.obstacles = []
        self.spawn_timer = 0
        self.spawn_rate = 30  # 30 프레임마다 생성

    def update(self, speed_base=5):
        # 생성 타이머
        self.spawn_timer += 1
        if self.spawn_timer >= self.spawn_rate:
            self.obstacles.append(Obstacle(speed_base))
            self.spawn_timer = 0

        # 모든 장애물 업데이트
        for obs in self.obstacles:
            obs.update()

        # 비활성 장애물 제거 (클론 삭제!)
        self.obstacles = [o for o in self.obstacles if o.active]

    def get_active_count(self):
        return len(self.obstacles)

# 테스트
manager = ObstacleManager()
manager.spawn_rate = 1  # 테스트용: 매 프레임 생성

for frame in range(10):
    manager.update(speed_base=5)

print(f"활성 장애물 수: {manager.get_active_count()}")
print(f"첫 장애물 위치: y={manager.obstacles[0].y:.0f}")`,
      testCases: [
        { input: '10프레임 후', expectedOutput: '장애물 10개 생성', description: '매 프레임 장애물 생성' },
        { input: '장애물 이동', expectedOutput: 'y좌표 감소', description: '장애물이 아래로 이동' },
        { input: 'y < -200', expectedOutput: '장애물 삭제', description: '화면 밖 장애물 제거' },
        { input: '크기별 반지름', expectedOutput: 'small=15, medium=25, large=40', description: '크기별 충돌 반지름' },
      ],
      hints: ['클래스는 복제본의 설계도예요', '리스트 컴프리헨션으로 비활성 객체를 제거하세요', 'spawn_rate로 생성 속도를 조절해요'],
      challenges: [
        {
          id: 'u2-w14-3-c1',
          description: 'Obstacle 클래스 완성 (크기별 속도 차이 구현)',
          difficulty: 'medium',
          feedback: { perfect: '클래스 설계 완벽! OOP의 핵심을 이해했어요!', wrong: 'size에 따라 speed를 다르게 설정해보세요.' },
        },
        {
          id: 'u2-w14-3-c2',
          description: '비활성 장애물 자동 정리 시스템',
          difficulty: 'easy',
          feedback: { perfect: '메모리 관리까지 고려하다니 훌륭해요!', wrong: 'active가 False인 장애물을 리스트에서 제거하세요.' },
        },
      ],
    },

    // ===== 미션 4: 난이도 시스템 =====
    {
      id: 'u2-w14-4',
      title: '레벨 UP! 난이도 시스템',
      description: '점수가 오를수록 게임이 어려워지는 난이도 시스템을 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '난이도 시스템 설계',
      learningObjectives: ['점수 기반 난이도 조절 시스템을 구현할 수 있다', '게임 밸런스의 개념을 이해한다'],
      cstaStandard: '1B-AP-15',
      conceptExplanation: `## 난이도 시스템 = 게임의 재미!

점수가 오를수록 **더 어려워져야** 게임이 재미있어요!

### Scratch 난이도 시스템
\`\`\`
[변수 "레벨" 을 1로 정하기]
[변수 "속도" 를 3으로 정하기]

[무한 반복]
  [만약 <점수 > (레벨 × 100)>]
    [레벨을 1만큼 바꾸기]
    [속도를 1만큼 바꾸기]
    ["레벨업!" 말하기 (1초)]
  [끝]
[끝]
\`\`\`

### Python 난이도 설계
\`\`\`python
def get_difficulty(score):
    level = score // 100 + 1  # 100점마다 레벨업
    return {
        "level": level,
        "speed": 3 + level * 0.5,      # 점점 빨라짐
        "spawn_rate": max(10, 30 - level * 3),  # 점점 자주 생성
        "obstacle_types": min(3, level),  # 종류 증가
    }
\`\`\`

### 실제 게임 밸런스 팁
1. **선형 증가**: 속도 = 기본속도 + (레벨 x 0.5)
2. **상한선 설정**: max() / min()으로 극단적 난이도 방지
3. **레벨업 알림**: 플레이어에게 성취감 제공
4. **쉬는 구간**: 매 레벨 시작에 잠시 여유`,
      starterCode: `# 레벨 UP! 난이도 시스템
# 점수에 따라 게임 난이도가 자동 조절됩니다

class DifficultyManager:
    def __init__(self):
        self.level = 1
        self.base_speed = 3
        self.base_spawn_rate = 30
        self.level_up_threshold = 100  # 100점마다 레벨업

    def get_level(self, score):
        return score // self.level_up_threshold + 1

    def get_speed(self, score):
        level = self.get_level(score)
        # 레벨마다 속도 0.5씩 증가, 최대 10
        return min(10, self.base_speed + (level - 1) * 0.5)

    def get_spawn_rate(self, score):
        level = self.get_level(score)
        # 레벨마다 생성 간격 3프레임 감소, 최소 8프레임
        return max(8, self.base_spawn_rate - (level - 1) * 3)

    def get_obstacle_types(self, score):
        level = self.get_level(score)
        types = ["normal"]
        if level >= 2:
            types.append("fast")     # 빠른 장애물
        if level >= 3:
            types.append("zigzag")   # 지그재그 장애물
        if level >= 5:
            types.append("homing")   # 추적 장애물
        return types

    def check_level_up(self, old_score, new_score):
        old_level = self.get_level(old_score)
        new_level = self.get_level(new_score)
        if new_level > old_level:
            return new_level
        return None

    def get_status(self, score):
        level = self.get_level(score)
        speed = self.get_speed(score)
        spawn = self.get_spawn_rate(score)
        types = self.get_obstacle_types(score)
        return f"Lv.{level} | 속도:{speed} | 생성:{spawn}f | 종류:{len(types)}개"

# 테스트
dm = DifficultyManager()

for score in [0, 50, 100, 200, 300, 500]:
    print(f"점수 {score:>3}: {dm.get_status(score)}")
    level_up = dm.check_level_up(score - 1, score) if score > 0 else None
    if level_up:
        print(f"  ★ 레벨 {level_up} 달성!")`,
      testCases: [
        { input: '점수 0', expectedOutput: 'Lv.1 | 속도:3.0 | 생성:30f | 종류:1개', description: '시작 난이도' },
        { input: '점수 100', expectedOutput: 'Lv.2 | 속도:3.5 | 생성:27f | 종류:2개', description: '레벨 2 난이도' },
        { input: '점수 300', expectedOutput: 'Lv.4 | 속도:4.5 | 생성:21f | 종류:3개', description: '레벨 4 난이도' },
        { input: '점수 500', expectedOutput: 'Lv.6 | 속도:5.5 | 생성:15f | 종류:4개', description: '레벨 6 난이도' },
      ],
      hints: ['score // 100 + 1 로 레벨을 계산하세요', 'min()과 max()로 상한/하한을 설정하세요', '레벨에 따라 장애물 종류를 늘려보세요'],
      challenges: [
        {
          id: 'u2-w14-4-c1',
          description: '레벨별 속도 증가 시스템 구현',
          difficulty: 'easy',
          feedback: { perfect: '난이도 곡선 완벽! 게임 디자이너의 감각이 있어요!', wrong: 'base_speed + (level-1) * 0.5 공식을 사용해보세요.' },
        },
        {
          id: 'u2-w14-4-c2',
          description: '레벨업 감지 및 새로운 장애물 종류 추가',
          difficulty: 'medium',
          feedback: { perfect: '레벨 시스템과 장애물 확장까지 완벽해요!', wrong: 'check_level_up 함수에서 이전 레벨과 현재 레벨을 비교하세요.' },
        },
      ],
    },

    // ===== 미션 5: 아이템 & 파워업 시스템 =====
    {
      id: 'u2-w14-5',
      title: '아이템 & 파워업!',
      description: '게임에 아이템(체력 회복, 무적, 자석, 슬로우)을 추가해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 18,
      concept: '아이템 시스템',
      learningObjectives: ['아이템 종류별 효과를 조건문으로 분기할 수 있다', '타이머 기반 버프 시스템을 구현할 수 있다'],
      cstaStandard: '1B-AP-12',
      conceptExplanation: `## 아이템 = 게임의 양념!

아이템은 게임을 더 재미있고 전략적으로 만들어요.

### Scratch 아이템 시스템
\`\`\`
# 아이템 스프라이트 (복제본)
[복제되었을 때]
[x좌표를 (-200~200 사이 난수)로 정하기]
[y좌표를 180으로 정하기]
[무한 반복]
  [y좌표를 -3만큼 바꾸기]
  [만약 <플레이어에 닿았는가?>]
    [만약 <모양 = 하트>]
      ["아이템-체력" 방송하기]
    [만약 <모양 = 별>]
      ["아이템-무적" 방송하기]
    [끝]
    [이 복제본 삭제하기]
  [끝]
[끝]
\`\`\`

### Python 아이템 설계
\`\`\`python
class Item:
    TYPES = {
        "heart": {"effect": "heal", "value": 1, "color": "red"},
        "star": {"effect": "invincible", "duration": 5, "color": "gold"},
        "magnet": {"effect": "magnet", "duration": 8, "color": "blue"},
        "slow": {"effect": "slow_time", "duration": 3, "color": "cyan"},
    }
\`\`\``,
      starterCode: `# 아이템 & 파워업 시스템!

import random

class Item:
    TYPES = {
        "heart": {"effect": "heal", "value": 1, "color": "red", "rarity": 0.3},
        "star": {"effect": "invincible", "duration": 100, "color": "gold", "rarity": 0.15},
        "magnet": {"effect": "score_boost", "duration": 80, "color": "blue", "rarity": 0.2},
        "slow": {"effect": "slow_time", "duration": 60, "color": "cyan", "rarity": 0.15},
        "shield": {"effect": "shield", "duration": 120, "color": "green", "rarity": 0.1},
    }

    def __init__(self, item_type=None):
        if item_type is None:
            item_type = self.random_type()
        self.type = item_type
        self.info = self.TYPES[item_type]
        self.x = random.randint(-200, 200)
        self.y = 180
        self.active = True

    @staticmethod
    def random_type():
        types = list(Item.TYPES.keys())
        weights = [Item.TYPES[t]["rarity"] for t in types]
        total = sum(weights)
        r = random.random() * total
        cumulative = 0
        for t, w in zip(types, weights):
            cumulative += w
            if r <= cumulative:
                return t
        return types[0]

    def update(self):
        self.y -= 2  # 아이템은 장애물보다 천천히 떨어짐
        if self.y < -200:
            self.active = False

class PowerUpManager:
    def __init__(self):
        self.active_effects = {}  # {"invincible": 100, "slow_time": 60}

    def apply_item(self, item, game_state):
        effect = item.info["effect"]

        if effect == "heal":
            game_state["lives"] = min(5, game_state["lives"] + item.info["value"])
            return f"체력 회복! (생명: {game_state['lives']})"

        elif effect == "invincible":
            self.active_effects["invincible"] = item.info["duration"]
            return "무적 모드 ON! ★"

        elif effect == "score_boost":
            self.active_effects["score_boost"] = item.info["duration"]
            return "점수 2배 모드!"

        elif effect == "slow_time":
            self.active_effects["slow_time"] = item.info["duration"]
            return "슬로우 모션!"

        elif effect == "shield":
            self.active_effects["shield"] = item.info["duration"]
            return "보호막 활성화!"

    def update(self):
        expired = []
        for effect, timer in self.active_effects.items():
            self.active_effects[effect] = timer - 1
            if self.active_effects[effect] <= 0:
                expired.append(effect)
        for e in expired:
            del self.active_effects[e]
            print(f"  [{e}] 효과 종료!")

    def is_active(self, effect):
        return effect in self.active_effects

    def get_score_multiplier(self):
        return 2 if self.is_active("score_boost") else 1

# 테스트
game = {"lives": 2, "score": 0}
pm = PowerUpManager()

# 하트 아이템
heart = Item("heart")
print(pm.apply_item(heart, game))

# 별 아이템
star = Item("star")
print(pm.apply_item(star, game))
print(f"무적 상태: {pm.is_active('invincible')}")
print(f"점수 배율: x{pm.get_score_multiplier()}")`,
      testCases: [
        { input: '하트 획득', expectedOutput: '체력 회복! (생명: 3)', description: '생명 회복 아이템' },
        { input: '별 획득', expectedOutput: '무적 모드 ON! ★', description: '무적 아이템' },
        { input: '무적 상태 확인', expectedOutput: 'True', description: '효과 활성 확인' },
        { input: '점수 배율', expectedOutput: 'x1', description: '기본 점수 배율' },
      ],
      hints: ['아이템 종류별로 다른 효과를 줘요', 'duration으로 효과 지속 시간을 관리해요', 'is_active()로 현재 버프 상태를 확인해요'],
      challenges: [
        {
          id: 'u2-w14-5-c1',
          description: '5종 아이템 효과 구현 (체력/무적/점수/슬로우/보호막)',
          difficulty: 'medium',
          feedback: { perfect: '아이템 시스템 완벽 구현! RPG 게임도 만들 수 있겠어요!', wrong: 'if/elif로 effect 종류별 분기를 나누세요.' },
        },
        {
          id: 'u2-w14-5-c2',
          description: '타이머 기반 버프 만료 시스템',
          difficulty: 'hard',
          feedback: { perfect: '타이머 시스템까지! 진짜 게임 개발자 수준!', wrong: 'update()에서 타이머를 줄이고, 0 이하가 되면 삭제하세요.' },
        },
      ],
    },

    // ===== 미션 6: 게임 UI 완성 =====
    {
      id: 'u2-w14-6',
      title: '게임 UI: HUD & 화면',
      description: '시작 화면, 점수판, 게임오버 화면 등 게임 UI를 완성해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 15,
      concept: '게임 UI 설계',
      learningObjectives: ['게임 상태별 UI를 설계하고 전환할 수 있다', 'HUD(Heads-Up Display) 요소를 구현할 수 있다'],
      cstaStandard: '1B-AP-14',
      conceptExplanation: `## 게임 UI = 플레이어와의 대화!

### 게임의 3가지 화면
1. **타이틀 화면**: 게임 제목 + 시작 버튼
2. **게임 플레이**: HUD (점수, 생명, 레벨)
3. **결과 화면**: 최종 점수 + 재시작

### Scratch UI 구현
\`\`\`
# 타이틀 스프라이트
[메시지 "타이틀" 을 받았을 때]
[보이기]
["DODGE MASTER" 말하기]

# HUD 스프라이트
[깃발 클릭했을 때]
[무한 반복]
  [글자를 (점수 와 " | ♥" 와 생명 와 " | Lv." 와 레벨) 로 정하기]
[끝]

# 게임오버 스프라이트
[메시지 "게임오버" 를 받았을 때]
[보이기]
["최종 점수: " 와 점수 말하기]
\`\`\`

### Python UI 텍스트 렌더링
\`\`\`python
def render_hud(score, lives, level, effects):
    hud = f"★ {score:>5} | {'♥' * lives}{'♡' * (3-lives)} | Lv.{level}"
    if "invincible" in effects:
        hud += " | 🛡️무적"
    if "score_boost" in effects:
        hud += " | x2점수"
    return hud
\`\`\``,
      starterCode: `# 게임 UI 완성!
# 시작 화면, HUD, 게임오버 화면을 모두 구현합니다

class GameUI:
    def __init__(self):
        self.high_score = 0

    def render_title(self):
        lines = [
            "╔══════════════════════════╗",
            "║    ★ DODGE MASTER ★     ║",
            "║                          ║",
            "║   장애물을 피하고 살아남자!  ║",
            "║                          ║",
            "║  [Space] 게임 시작        ║",
            "║  [H] 도움말               ║",
            f"║  최고 점수: {self.high_score:>5}          ║",
            "╚══════════════════════════╝",
        ]
        return "\\n".join(lines)

    def render_hud(self, score, lives, level, max_lives=3, effects=None):
        if effects is None:
            effects = {}

        # 생명 표시 (♥♥♡)
        hearts = "♥" * lives + "♡" * (max_lives - lives)

        # 기본 HUD
        hud = f"★ {score:>5} | {hearts} | Lv.{level}"

        # 활성 효과 표시
        effect_icons = []
        if "invincible" in effects:
            effect_icons.append("🛡️무적")
        if "score_boost" in effects:
            effect_icons.append("x2점수")
        if "slow_time" in effects:
            effect_icons.append("⏰슬로우")
        if "shield" in effects:
            effect_icons.append("🔵보호막")

        if effect_icons:
            hud += " | " + " ".join(effect_icons)

        return hud

    def render_gameover(self, score, level, high_score_beat=False):
        self.high_score = max(self.high_score, score)
        lines = [
            "╔══════════════════════════╗",
            "║       GAME OVER!         ║",
            "║                          ║",
            f"║   최종 점수: {score:>5}         ║",
            f"║   도달 레벨: {level:>3}           ║",
        ]
        if high_score_beat:
            lines.append("║   ★ NEW HIGH SCORE! ★   ║")
        lines.extend([
            "║                          ║",
            "║  [Space] 다시 시작        ║",
            "║  [Q] 타이틀로             ║",
            "╚══════════════════════════╝",
        ])
        return "\\n".join(lines)

    def render_level_up(self, new_level):
        return f"\\n  ★★★ LEVEL {new_level} ★★★\\n  속도가 빨라집니다!\\n"

    def render_help(self):
        return """
  === 조작법 ===
  ←/→  : 좌우 이동
  Space : 시작/재시작
  Q     : 타이틀로

  === 아이템 ===
  ♥ 하트   : 생명 +1
  ★ 별     : 무적 모드
  ◆ 자석   : 점수 2배
  ◇ 시계   : 슬로우 모션
  ● 보호막 : 1회 방어
"""

# 테스트
ui = GameUI()

print("=== 타이틀 화면 ===")
print(ui.render_title())

print("\\n=== 게임 HUD ===")
print(ui.render_hud(1250, 2, 3, effects={"invincible": 50}))
print(ui.render_hud(3400, 1, 5, effects={"score_boost": 30, "slow_time": 10}))

print("\\n=== 게임오버 ===")
print(ui.render_gameover(3400, 5, high_score_beat=True))

print("\\n=== 레벨업! ===")
print(ui.render_level_up(4))`,
      testCases: [
        { input: 'render_title()', expectedOutput: 'DODGE MASTER', description: '타이틀 화면 표시' },
        { input: 'render_hud(1250, 2, 3)', expectedOutput: '★  1250 | ♥♥♡ | Lv.3', description: 'HUD 표시' },
        { input: 'render_gameover(3400, 5, True)', expectedOutput: 'NEW HIGH SCORE!', description: '최고점 갱신 표시' },
        { input: 'render_level_up(4)', expectedOutput: 'LEVEL 4', description: '레벨업 알림' },
      ],
      hints: ['f-string으로 변수를 문자열에 넣어요', '"♥" * lives 로 생명을 표시해요', '조건문으로 활성 효과를 표시해요'],
      challenges: [
        {
          id: 'u2-w14-6-c1',
          description: '3가지 화면(타이틀/HUD/결과) 모두 구현',
          difficulty: 'medium',
          feedback: { perfect: 'UI 완성! 전문 게임처럼 보여요!', wrong: '각 render_ 메서드에서 적절한 정보를 표시하세요.' },
        },
        {
          id: 'u2-w14-6-c2',
          description: '활성 효과 아이콘 동적 표시',
          difficulty: 'easy',
          feedback: { perfect: '동적 UI까지 완벽해요!', wrong: 'effects 딕셔너리에서 활성 효과를 확인하세요.' },
        },
      ],
    },

    // ===== 미션 7: 사운드 & 효과 =====
    {
      id: 'u2-w14-7',
      title: '사운드 효과 & 파티클',
      description: '게임에 소리와 시각 효과를 추가해 몰입감을 높여요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 70,
      estimatedMinutes: 12,
      concept: '게임 피드백 시스템',
      learningObjectives: ['이벤트에 맞는 사운드/이펙트를 매핑할 수 있다', '파티클 시스템의 기본 원리를 이해한다'],
      cstaStandard: '1B-AP-14',
      conceptExplanation: `## 사운드 & 효과 = 게임의 완성도!

소리와 이펙트가 있으면 게임이 **100배 더 재미있어**져요!

### Scratch 사운드 블록
\`\`\`
[소리 "팝" 재생하기]           → 효과음
[소리 "야옹" 끝까지 재생하기]    → 긴 소리
[모든 소리 멈추기]              → 정지
\`\`\`

### 이벤트별 사운드 매핑
| 이벤트 | 사운드 | 이펙트 |
|--------|--------|--------|
| 아이템 획득 | "짜잔~" | 반짝 파티클 |
| 적에게 피격 | "쿵!" | 빨간 깜빡임 |
| 레벨업 | "팡파레~" | 별 파티클 |
| 게임오버 | "부웅~" | 화면 흔들림 |

### Python 효과 시스템
\`\`\`python
class SoundManager:
    SOUNDS = {
        "item_pickup": "pickup.wav",
        "hit": "hit.wav",
        "level_up": "fanfare.wav",
        "game_over": "gameover.wav",
    }

    def play(self, name):
        if name in self.SOUNDS:
            print(f"♪ {self.SOUNDS[name]}")
\`\`\`

### 파티클 시스템 기초
\`\`\`python
class Particle:
    def __init__(self, x, y, color):
        self.x = x
        self.y = y
        self.vx = random.uniform(-3, 3)  # 랜덤 방향
        self.vy = random.uniform(-5, -1)  # 위로 퍼짐
        self.life = 30  # 30프레임 후 소멸
        self.color = color
\`\`\``,
      starterCode: `# 사운드 & 파티클 시스템!

import random

class SoundManager:
    SOUNDS = {
        "item_pickup": "✦ pickup.wav ✦",
        "hit": "💥 hit.wav 💥",
        "level_up": "🎵 fanfare.wav 🎵",
        "game_over": "💀 gameover.wav 💀",
        "jump": "🦘 jump.wav 🦘",
        "coin": "🪙 coin.wav 🪙",
    }

    def __init__(self):
        self.enabled = True
        self.volume = 0.7

    def play(self, name):
        if self.enabled and name in self.SOUNDS:
            print(f"  ♪ Playing: {self.SOUNDS[name]}")
            return True
        return False

class Particle:
    def __init__(self, x, y, color="yellow", size=3):
        self.x = x
        self.y = y
        self.vx = random.uniform(-3, 3)
        self.vy = random.uniform(-5, -1)
        self.life = 30
        self.color = color
        self.size = size
        self.alive = True

    def update(self):
        self.x += self.vx
        self.y += self.vy
        self.vy += 0.2  # 중력
        self.life -= 1
        self.size = max(1, self.size - 0.1)
        if self.life <= 0:
            self.alive = False

class ParticleSystem:
    def __init__(self):
        self.particles = []

    def emit(self, x, y, color="yellow", count=10):
        for _ in range(count):
            self.particles.append(Particle(x, y, color))
        print(f"  ✨ {count}개 파티클 생성! (색: {color})")

    def update(self):
        for p in self.particles:
            p.update()
        before = len(self.particles)
        self.particles = [p for p in self.particles if p.alive]
        removed = before - len(self.particles)
        if removed > 0:
            print(f"  파티클 {removed}개 소멸, 남은 수: {len(self.particles)}")

class GameEffects:
    def __init__(self):
        self.sound = SoundManager()
        self.particles = ParticleSystem()

    def on_item_pickup(self, x, y, item_type):
        self.sound.play("item_pickup")
        colors = {"heart": "red", "star": "gold", "magnet": "blue"}
        color = colors.get(item_type, "white")
        self.particles.emit(x, y, color, count=15)

    def on_hit(self, x, y):
        self.sound.play("hit")
        self.particles.emit(x, y, "red", count=20)

    def on_level_up(self):
        self.sound.play("level_up")
        self.particles.emit(0, 0, "gold", count=30)

    def on_game_over(self):
        self.sound.play("game_over")

# 테스트
fx = GameEffects()

print("=== 아이템 획득 ===")
fx.on_item_pickup(100, 50, "star")

print("\\n=== 피격 ===")
fx.on_hit(-50, -100)

print("\\n=== 레벨업 ===")
fx.on_level_up()

print("\\n=== 파티클 업데이트 (30프레임) ===")
for i in range(35):
    fx.particles.update()`,
      testCases: [
        { input: '아이템 획득', expectedOutput: '♪ Playing: ✦ pickup.wav ✦', description: '아이템 사운드' },
        { input: '피격', expectedOutput: '♪ Playing: 💥 hit.wav 💥', description: '피격 사운드' },
        { input: '파티클 15개', expectedOutput: '15개 파티클 생성!', description: '파티클 생성' },
        { input: '30프레임 후', expectedOutput: '파티클 소멸', description: '파티클 수명' },
      ],
      hints: ['딕셔너리로 이벤트와 사운드를 매핑해요', '파티클은 랜덤 속도와 수명을 가져요', 'update()에서 수명이 다한 파티클을 제거해요'],
      challenges: [
        {
          id: 'u2-w14-7-c1',
          description: '이벤트별 사운드 + 파티클 동시 트리거',
          difficulty: 'easy',
          feedback: { perfect: '사운드와 이펙트가 완벽하게 동기화돼요!', wrong: 'on_item_pickup 등의 메서드에서 sound.play()와 particles.emit()을 둘 다 호출하세요.' },
        },
        {
          id: 'u2-w14-7-c2',
          description: '파티클 물리 시뮬레이션 (중력, 크기 감소)',
          difficulty: 'medium',
          feedback: { perfect: '물리 기반 파티클 시스템! 진짜 게임 엔진 수준이에요!', wrong: 'update()에서 vy에 중력(0.2)을 더하고 size를 줄이세요.' },
        },
      ],
    },

    // ===== 미션 8: 전체 게임 통합 =====
    {
      id: 'u2-w14-8',
      title: '게임 통합: DODGE MASTER',
      description: '충돌, 난이도, 아이템, UI, 사운드를 모두 합쳐 완전한 게임을 만들어요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 120,
      estimatedMinutes: 25,
      concept: '게임 시스템 통합',
      learningObjectives: ['여러 시스템(충돌, UI, 아이템)을 하나의 게임 루프로 통합할 수 있다', '게임 상태 머신(FSM)을 이해한다'],
      cstaStandard: '1B-AP-15',
      conceptExplanation: `## 게임 통합 = 모든 것을 하나로!

지금까지 만든 시스템을 **하나의 완전한 게임**으로 합칩니다.

### 게임 루프의 구조
\`\`\`
1. 입력 처리 (키보드/마우스)
2. 게임 로직 업데이트
   - 장애물 이동
   - 충돌 감지
   - 아이템 효과
   - 난이도 조절
3. 화면 그리기 (UI 렌더링)
4. 1~3 반복!
\`\`\`

### 상태 머신 (FSM)
\`\`\`
[TITLE] --Space--> [PLAYING] --죽음--> [GAMEOVER]
   ^                                      |
   +--------Q 또는 Space------------------+
\`\`\`

### Scratch 버전
\`\`\`
# 게임 매니저 스프라이트
[깃발 클릭했을 때]
["타이틀" 방송하기]

[메시지 "시작" 을 받았을 때]
[변수 "상태" 를 "플레이" 로 정하기]
[변수 "점수" 를 0으로 정하기]
[변수 "생명" 을 3으로 정하기]
[무한 반복]
  [만약 <상태 = "플레이">]
    # 모든 게임 로직 실행
  [끝]
[끝]
\`\`\``,
      starterCode: `# DODGE MASTER - 완전한 게임!
# 모든 시스템을 통합한 최종 버전

import random
import math

class DodgeMaster:
    def __init__(self):
        # 게임 상태
        self.state = "title"  # title, playing, gameover
        self.score = 0
        self.lives = 3
        self.level = 1
        self.high_score = 0

        # 플레이어
        self.player_x = 0
        self.player_y = -150
        self.player_speed = 8

        # 장애물
        self.obstacles = []
        self.spawn_timer = 0
        self.spawn_rate = 30

        # 아이템
        self.items = []
        self.item_spawn_timer = 0
        self.effects = {}  # 활성 효과

        # 게임 속도
        self.base_speed = 3

    def start_game(self):
        self.state = "playing"
        self.score = 0
        self.lives = 3
        self.level = 1
        self.player_x = 0
        self.obstacles = []
        self.items = []
        self.effects = {}
        self.spawn_rate = 30
        self.base_speed = 3
        return "게임 시작! 장애물을 피하세요!"

    def move_player(self, direction):
        if self.state != "playing":
            return
        if direction == "left":
            self.player_x = max(-220, self.player_x - self.player_speed)
        elif direction == "right":
            self.player_x = min(220, self.player_x + self.player_speed)

    def spawn_obstacle(self):
        speed = self.base_speed + (self.level - 1) * 0.5
        obs = {
            "x": random.randint(-200, 200),
            "y": 180,
            "speed": speed + random.uniform(0, 2),
            "active": True,
        }
        self.obstacles.append(obs)

    def spawn_item(self):
        types = ["heart", "star", "magnet"]
        item = {
            "type": random.choice(types),
            "x": random.randint(-200, 200),
            "y": 180,
            "active": True,
        }
        self.items.append(item)

    def check_collision(self, x1, y1, x2, y2, radius=30):
        dist = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        return dist < radius

    def update(self):
        if self.state != "playing":
            return []

        logs = []

        # 장애물 생성
        self.spawn_timer += 1
        if self.spawn_timer >= self.spawn_rate:
            self.spawn_obstacle()
            self.spawn_timer = 0

        # 아이템 생성 (5% 확률)
        self.item_spawn_timer += 1
        if self.item_spawn_timer >= 100:
            self.spawn_item()
            self.item_spawn_timer = 0

        # 장애물 이동
        slow = 0.5 if "slow_time" in self.effects else 1.0
        for obs in self.obstacles:
            if obs["active"]:
                obs["y"] -= obs["speed"] * slow

        # 아이템 이동
        for item in self.items:
            if item["active"]:
                item["y"] -= 2

        # 효과 타이머
        expired = []
        for effect, timer in self.effects.items():
            self.effects[effect] = timer - 1
            if self.effects[effect] <= 0:
                expired.append(effect)
        for e in expired:
            del self.effects[e]
            logs.append(f"[{e}] 효과 종료")

        # 장애물 충돌
        invincible = "invincible" in self.effects or "shield" in self.effects
        for obs in self.obstacles:
            if obs["active"] and self.check_collision(
                self.player_x, self.player_y, obs["x"], obs["y"]
            ):
                obs["active"] = False
                if not invincible:
                    self.lives -= 1
                    logs.append(f"피격! 남은 생명: {self.lives}")
                    if self.lives <= 0:
                        self.state = "gameover"
                        self.high_score = max(self.high_score, self.score)
                        logs.append(f"게임오버! 최종 점수: {self.score}")
                        return logs
                else:
                    if "shield" in self.effects:
                        del self.effects["shield"]
                        logs.append("보호막 파괴!")
                    else:
                        logs.append("무적 상태! 데미지 없음")

        # 아이템 충돌
        for item in self.items:
            if item["active"] and self.check_collision(
                self.player_x, self.player_y, item["x"], item["y"], 25
            ):
                item["active"] = False
                if item["type"] == "heart":
                    self.lives = min(5, self.lives + 1)
                    logs.append(f"♥ 체력 회복! (생명: {self.lives})")
                elif item["type"] == "star":
                    self.effects["invincible"] = 100
                    logs.append("★ 무적 모드!")
                elif item["type"] == "magnet":
                    self.effects["score_boost"] = 80
                    logs.append("◆ 점수 2배!")

        # 화면 밖 객체 정리
        self.obstacles = [o for o in self.obstacles if o["y"] > -200]
        self.items = [i for i in self.items if i["y"] > -200]

        # 점수 증가
        multiplier = 2 if "score_boost" in self.effects else 1
        self.score += 1 * multiplier

        # 레벨업 체크
        new_level = self.score // 100 + 1
        if new_level > self.level:
            self.level = new_level
            self.spawn_rate = max(8, 30 - (self.level - 1) * 3)
            self.base_speed = min(10, 3 + (self.level - 1) * 0.5)
            logs.append(f"★ LEVEL {self.level}! 속도 UP!")

        return logs

    def get_hud(self):
        hearts = "♥" * self.lives + "♡" * (5 - self.lives)
        hud = f"Score: {self.score:>5} | {hearts} | Lv.{self.level}"
        effects_str = ", ".join(self.effects.keys())
        if effects_str:
            hud += f" | [{effects_str}]"
        return hud

# === 게임 시뮬레이션 테스트 ===
game = DodgeMaster()
print("=== DODGE MASTER ===")
print(game.start_game())

# 200프레임 시뮬레이션
for frame in range(200):
    # 랜덤 이동
    if random.random() < 0.5:
        game.move_player("left" if random.random() < 0.5 else "right")

    logs = game.update()

    # 중요 이벤트만 출력
    for log in logs:
        print(f"  [{frame:>3}] {log}")

    if game.state == "gameover":
        break

    # 50프레임마다 HUD 출력
    if frame % 50 == 0:
        print(f"  [{frame:>3}] {game.get_hud()}")

if game.state == "playing":
    print(f"\\n최종 상태: {game.get_hud()}")`,
      testCases: [
        { input: 'start_game()', expectedOutput: '게임 시작!', description: '게임 시작' },
        { input: '200프레임 실행', expectedOutput: 'Score 증가 + 레벨업', description: '게임 루프 작동' },
        { input: '충돌 발생', expectedOutput: '남은 생명 표시', description: '충돌 시 피드백' },
        { input: 'get_hud()', expectedOutput: 'Score + 생명 + 레벨', description: 'HUD 출력' },
      ],
      hints: ['update()가 매 프레임 호출되는 게임 루프예요', '상태(state)로 게임 흐름을 제어해요', '모든 시스템이 update() 안에서 작동해요'],
      challenges: [
        {
          id: 'u2-w14-8-c1',
          description: '충돌+난이도+아이템 시스템 통합 동작',
          difficulty: 'hard',
          feedback: { perfect: '완전한 게임 시스템 통합! 정말 대단해요!', wrong: 'update() 안에서 순서대로 처리하세요: 생성→이동→충돌→점수→레벨.' },
        },
        {
          id: 'u2-w14-8-c2',
          description: '게임 상태 머신 (title→playing→gameover) 완벽 전환',
          difficulty: 'medium',
          feedback: { perfect: 'FSM 완벽 구현! 게임 엔진의 핵심이에요!', wrong: 'state 변수를 "title", "playing", "gameover"로 전환하세요.' },
        },
      ],
    },

    // ===== 미션 9: 블록→텍스트 코딩 종합 퀴즈 =====
    {
      id: 'u2-w14-9',
      title: 'Unit 2 종합 퀴즈',
      description: 'Unit 2에서 배운 모든 블록 코딩 개념을 총정리해요',
      type: 'quiz',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 12,
      concept: 'Unit 2 종합 정리',
      learningObjectives: ['블록 코딩의 5대 개념을 설명할 수 있다', '블록→Python→JS 변환을 수행할 수 있다'],
      cstaStandard: '1B-AP-15',
      conceptExplanation: `## Unit 2 총정리!

6주간 배운 블록 코딩의 핵심을 복습합니다.

### 5대 핵심 개념
| 주차 | 개념 | 핵심 블록 | Python |
|------|------|-----------|--------|
| W9 | 순차 실행 | [10칸 움직이기] | move(10) |
| W10 | 반복 | [10번 반복하기] | for i in range(10): |
| W11 | 조건문 | [만약 ~라면] | if condition: |
| W12 | 변수 | [변수를 1만큼 바꾸기] | score += 1 |
| W13 | 이벤트 | [~를 받았을 때] | def on_event(): |

### 종합 게임에 사용된 모든 개념
\`\`\`
순차 → 블록을 위에서 아래로 연결
반복 → 무한 반복으로 게임 루프
조건 → 충돌 감지, 레벨업 판단
변수 → 점수, 생명, 레벨 관리
이벤트 → 키보드 입력, 장면 전환
\`\`\`

이 5가지만 알면 **어떤 프로그램이든** 만들 수 있어요!`,
      checkQuestions: [
        {
          question: 'Scratch에서 "10번 반복하기" 블록은 Python으로 바꾸면?',
          options: ['while True:', 'for i in range(10):', 'if i < 10:', 'repeat(10)'],
          correctAnswer: 1,
          explanation: '"N번 반복하기"는 for i in range(N)으로 변환돼요!',
        },
        {
          question: '게임에서 캐릭터가 적에게 닿았는지 확인하는 것은 무엇?',
          options: ['순차 실행', '변수', '충돌 감지', '반복문'],
          correctAnswer: 2,
          explanation: '충돌 감지는 두 물체의 거리나 겹침을 확인하는 조건문 기반 기술이에요!',
        },
        {
          question: '게임의 점수, 생명, 레벨은 모두 무엇으로 관리하나요?',
          options: ['반복문', '이벤트', '변수', '함수'],
          correctAnswer: 2,
          explanation: '변수는 값을 저장하고 바꿀 수 있는 상자! 점수, 생명, 레벨 모두 변수예요.',
        },
        {
          question: '"시작→게임→결과" 화면 전환에 가장 적합한 패턴은?',
          options: ['반복문 3개', '상태 머신(FSM) + 메시지', '변수만 사용', 'if문 1000개'],
          correctAnswer: 1,
          explanation: '상태 머신(FSM)은 state 변수와 메시지로 깔끔하게 화면을 전환하는 패턴이에요!',
        },
        {
          question: 'Scratch "나 자신의 복제본 만들기"의 용도는?',
          options: ['스프라이트 삭제', '장애물/총알 등 다수의 같은 물체 생성', '배경 변경', '소리 재생'],
          correctAnswer: 1,
          explanation: '복제본(클론)은 같은 스프라이트를 여러 개 만들 때 사용해요. 장애물, 총알, 파티클 등!',
        },
        {
          question: '다음 중 블록 코딩의 장점이 아닌 것은?',
          options: ['문법 오류가 없다', '시각적으로 이해하기 쉽다', '텍스트 코딩보다 항상 빠르다', '드래그앤드롭으로 쉽게 프로그래밍'],
          correctAnswer: 2,
          explanation: '블록 코딩은 배우기 쉽지만, 복잡한 프로그램은 텍스트 코딩이 더 효율적이에요!',
        },
        {
          question: '게임 루프에서 매 프레임 반복되는 순서로 올바른 것은?',
          options: ['그리기→입력→업데이트', '입력→업데이트→그리기', '업데이트→그리기→입력', '입력→그리기→업데이트'],
          correctAnswer: 1,
          explanation: '게임 루프: 입력(키보드) → 업데이트(로직) → 그리기(화면). 이 순서가 표준이에요!',
        },
        {
          question: 'Python에서 "score += 1"은 Scratch로 바꾸면?',
          options: ['[score를 1로 정하기]', '[score를 1만큼 바꾸기]', '[score 보이기]', '[score 숨기기]'],
          correctAnswer: 1,
          explanation: '+= 는 "~만큼 바꾸기"이고, = 은 "~로 정하기"예요. 차이를 기억하세요!',
        },
      ],
      hints: ['블록과 텍스트 코드의 대응을 기억하세요', '게임 루프: 입력→업데이트→그리기', '5대 개념: 순차, 반복, 조건, 변수, 이벤트'],
    },

    // ===== 미션 10: 나만의 게임 만들기 (최종 프로젝트) =====
    {
      id: 'u2-w14-10',
      title: '나만의 게임 만들기!',
      description: 'Unit 2의 모든 것을 활용해 나만의 오리지널 게임을 완성해요',
      type: 'coding',
      difficulty: 'advanced',
      exp: 150,
      estimatedMinutes: 30,
      concept: '종합 프로젝트',
      isWeeklyProject: true,
      learningObjectives: [
        '스스로 게임을 설계하고 완성할 수 있다',
        'Unit 2의 모든 개념(순차/반복/조건/변수/이벤트)을 종합 활용할 수 있다',
        '프로젝트 기획→설계→구현→테스트 과정을 경험한다',
      ],
      cstaStandard: '1B-AP-16',
      conceptExplanation: `## 최종 프로젝트: 나만의 게임!

지금까지 6주간 배운 **모든 것**을 사용해서 나만의 게임을 만들어요!

### 게임 선택지
| 게임 유형 | 핵심 개념 | 난이도 |
|-----------|----------|--------|
| 피하기 게임 | 충돌 감지 + 중력 | ★★☆ |
| 슈팅 게임 | 복제본 + 이벤트 | ★★★ |
| 미로 탈출 | 색상 감지 + 조건문 | ★★☆ |
| 플래피 버드 | 중력 + 파이프 복제 | ★★★ |
| 캐치 게임 | 랜덤 + 점수 | ★☆☆ |
| 퀴즈 게임 | 리스트 + 조건문 | ★☆☆ |

### 필수 체크리스트
- [ ] 시작 화면 (타이틀 + 시작 버튼)
- [ ] 게임 조작 (키보드 or 마우스)
- [ ] 점수 시스템 (변수)
- [ ] 승리/패배 조건 (조건문)
- [ ] 결과 화면 (최종 점수 + 재시작)
- [ ] 난이도 변화 (레벨 or 속도 증가)

### 보너스 요소
- [ ] 아이템 시스템
- [ ] 사운드 효과
- [ ] 복제본으로 다수 적/장애물
- [ ] 2인 모드

### Scratch → Python → JavaScript
\`\`\`python
# Python으로 만든 게임 = Scratch 게임을 텍스트로 옮긴 것!
# 핵심 구조는 완전히 동일:

# 1. 변수 선언     = [변수 만들기]
# 2. 함수 정의     = [나만의 블록]
# 3. 이벤트 처리   = [~했을 때]
# 4. 게임 루프     = [무한 반복]
# 5. 조건 분기     = [만약 ~라면]
\`\`\`

여러분은 이제 **프로그래머**입니다!`,
      starterCode: `# ===================================
# 나만의 게임 만들기! (최종 프로젝트)
# ===================================
# 아래 템플릿을 수정해서 나만의 게임을 완성하세요!

import random
import math

class MyGame:
    """나만의 게임 클래스"""

    def __init__(self):
        # === 기본 설정 ===
        self.title = "나의 게임"  # 게임 제목을 바꿔보세요!
        self.state = "title"
        self.score = 0
        self.lives = 3
        self.level = 1
        self.high_score = 0

        # === 플레이어 ===
        self.player = {
            "x": 0, "y": -150,
            "speed": 8, "size": 20
        }

        # === 적/장애물 ===
        self.enemies = []
        self.enemy_timer = 0
        self.enemy_rate = 25

        # === 아이템 ===
        self.items = []
        self.effects = {}

    # ---- 게임 시작 ----
    def start(self):
        self.state = "playing"
        self.score = 0
        self.lives = 3
        self.level = 1
        self.enemies = []
        self.items = []
        self.effects = {}
        self.player["x"] = 0
        return f"=== {self.title} 시작! ==="

    # ---- 입력 처리 ----
    def handle_input(self, key):
        if self.state == "title" and key == "space":
            return self.start()
        elif self.state == "gameover" and key == "space":
            self.state = "title"
            return "타이틀로 돌아갑니다"
        elif self.state == "playing":
            if key == "left":
                self.player["x"] = max(-220, self.player["x"] - self.player["speed"])
            elif key == "right":
                self.player["x"] = min(220, self.player["x"] + self.player["speed"])
            # TODO: 다른 키 입력도 추가해보세요!

    # ---- 적 생성 ----
    def spawn_enemy(self):
        enemy = {
            "x": random.randint(-200, 200),
            "y": 180,
            "speed": 3 + self.level * 0.5 + random.uniform(0, 2),
            "active": True,
        }
        self.enemies.append(enemy)

    # ---- 아이템 생성 ----
    def spawn_item(self):
        item_type = random.choice(["heart", "star", "coin"])
        item = {
            "type": item_type,
            "x": random.randint(-200, 200),
            "y": 180,
            "active": True,
        }
        self.items.append(item)

    # ---- 충돌 감지 ----
    def check_collision(self, x1, y1, x2, y2, r=30):
        return math.sqrt((x2-x1)**2 + (y2-y1)**2) < r

    # ---- 메인 업데이트 ----
    def update(self):
        if self.state != "playing":
            return []

        logs = []

        # 적 생성
        self.enemy_timer += 1
        if self.enemy_timer >= self.enemy_rate:
            self.spawn_enemy()
            self.enemy_timer = 0

        # 아이템 생성 (3% 확률)
        if random.random() < 0.03:
            self.spawn_item()

        # 적 이동
        for e in self.enemies:
            if e["active"]:
                e["y"] -= e["speed"]

        # 아이템 이동
        for item in self.items:
            if item["active"]:
                item["y"] -= 2

        # 효과 타이머
        for eff in list(self.effects.keys()):
            self.effects[eff] -= 1
            if self.effects[eff] <= 0:
                del self.effects[eff]
                logs.append(f"[{eff}] 종료")

        # 적 충돌
        px, py = self.player["x"], self.player["y"]
        invincible = "invincible" in self.effects
        for e in self.enemies:
            if e["active"] and self.check_collision(px, py, e["x"], e["y"]):
                e["active"] = False
                if not invincible:
                    self.lives -= 1
                    logs.append(f"피격! 생명: {self.lives}")
                    if self.lives <= 0:
                        self.state = "gameover"
                        self.high_score = max(self.high_score, self.score)
                        logs.append(f"GAME OVER! 점수: {self.score}")
                        return logs

        # 아이템 충돌
        for item in self.items:
            if item["active"] and self.check_collision(px, py, item["x"], item["y"], 25):
                item["active"] = False
                if item["type"] == "heart":
                    self.lives = min(5, self.lives + 1)
                    logs.append(f"♥ 회복! ({self.lives})")
                elif item["type"] == "star":
                    self.effects["invincible"] = 100
                    logs.append("★ 무적!")
                elif item["type"] == "coin":
                    self.score += 50
                    logs.append("● +50점!")

        # 정리
        self.enemies = [e for e in self.enemies if e["y"] > -200]
        self.items = [i for i in self.items if i["y"] > -200]

        # 점수 & 레벨
        self.score += 1
        new_level = self.score // 100 + 1
        if new_level > self.level:
            self.level = new_level
            self.enemy_rate = max(8, 25 - self.level * 2)
            logs.append(f"LEVEL {self.level}!")

        return logs

    # ---- HUD ----
    def get_status(self):
        if self.state == "title":
            return f"=== {self.title} === [Space로 시작]"
        elif self.state == "gameover":
            return f"GAME OVER | 점수: {self.score} | 최고: {self.high_score}"
        else:
            hearts = "♥" * self.lives
            effs = ",".join(self.effects.keys()) if self.effects else ""
            status = f"Score:{self.score:>4} | {hearts} | Lv.{self.level}"
            if effs:
                status += f" | [{effs}]"
            return status

# === 게임 실행! ===
game = MyGame()
game.title = "우주 피하기"  # 게임 이름을 지어주세요!
print(game.get_status())

# 시작
print(game.handle_input("space"))

# 300프레임 시뮬레이션
for f in range(300):
    # 랜덤 조작 (실제로는 키보드 입력!)
    if random.random() < 0.6:
        game.handle_input("left" if random.random() < 0.5 else "right")

    logs = game.update()
    for log in logs:
        print(f"  [{f:>3}] {log}")

    if game.state == "gameover":
        break

    if f % 100 == 0:
        print(f"  [{f:>3}] {game.get_status()}")

# 최종 결과
print(f"\\n{game.get_status()}")
print(f"플레이 결과: 점수 {game.score}, 레벨 {game.level}")`,
      testCases: [
        { input: 'Space(타이틀)', expectedOutput: '게임 시작!', description: '타이틀→게임 전환' },
        { input: '좌우 이동', expectedOutput: 'player_x 변경', description: '키보드 조작' },
        { input: '적 충돌', expectedOutput: '생명 감소', description: '충돌 피드백' },
        { input: '아이템 획득', expectedOutput: '효과 적용', description: '아이템 시스템' },
        { input: '100점 도달', expectedOutput: 'LEVEL 2!', description: '레벨업' },
        { input: '생명 0', expectedOutput: 'GAME OVER!', description: '게임오버' },
      ],
      projectCheckpoints: [
        {
          id: 'u2-w14-10-cp1',
          title: '게임 기본 구조',
          description: '시작/게임/결과 3단계 상태 전환이 작동하는가',
          criteria: ['state 변수가 title, playing, gameover로 변경됨', 'Space 키로 시작/재시작 가능'],
          points: 20,
        },
        {
          id: 'u2-w14-10-cp2',
          title: '플레이어 조작',
          description: '키보드로 캐릭터를 조작할 수 있는가',
          criteria: ['좌우 이동이 작동함', '화면 밖으로 나가지 않음(경계 처리)'],
          points: 15,
        },
        {
          id: 'u2-w14-10-cp3',
          title: '적/장애물 시스템',
          description: '적이 생성되고 이동하며 충돌이 감지되는가',
          criteria: ['적이 주기적으로 생성됨', '적이 아래로 이동함', '충돌 시 생명이 감소함'],
          points: 25,
        },
        {
          id: 'u2-w14-10-cp4',
          title: '점수 & 난이도',
          description: '점수가 증가하고 레벨에 따라 난이도가 변하는가',
          criteria: ['점수가 지속적으로 증가함', '일정 점수마다 레벨업', '레벨업 시 속도/생성률 증가'],
          points: 20,
        },
        {
          id: 'u2-w14-10-cp5',
          title: '아이템 & 추가 기능',
          description: '아이템, 효과, 기타 창의적 요소가 있는가',
          criteria: ['최소 1종 아이템 구현', '아이템 효과가 작동함'],
          points: 20,
        },
      ],
      hints: [
        '먼저 기본 구조(시작→게임→결과)를 완성하세요',
        '하나씩 기능을 추가해요: 이동 → 적 → 충돌 → 점수 → 아이템',
        '게임 제목과 테마를 자유롭게 바꿔보세요!',
      ],
      challenges: [
        {
          id: 'u2-w14-10-c1',
          description: '기본 게임 완성 (시작/조작/충돌/점수/게임오버)',
          difficulty: 'medium',
          feedback: { perfect: '완전한 게임 완성! 여러분은 이제 게임 개발자입니다!', wrong: '템플릿의 TODO를 하나씩 채워보세요. 시작→이동→충돌 순서로!' },
        },
        {
          id: 'u2-w14-10-c2',
          description: '창의적 추가 기능 (아이템/파워업/특수 적/2인모드 등)',
          difficulty: 'hard',
          feedback: { perfect: '창의적인 기능까지! 진짜 프로그래머의 시작이에요!', wrong: '아이템 종류를 추가하거나 특별한 적을 만들어보세요.' },
        },
        {
          id: 'u2-w14-10-c3',
          description: '게임에 자신만의 테마/스토리 추가',
          difficulty: 'easy',
          feedback: { perfect: '나만의 게임 탄생! Unit 2 완벽 클리어!', wrong: 'game.title을 바꾸고, 적/아이템의 이름이나 설명을 커스터마이즈하세요.' },
        },
      ],
    },
  ],
};

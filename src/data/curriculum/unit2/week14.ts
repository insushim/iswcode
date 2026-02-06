import type { Week } from '../../../types';

export const week14: Week = {
  id: 'week-14',
  number: 14,
  title: '종합 프로젝트',
  description: '배운 모든 것을 활용해서 나만의 프로젝트를 만들어요',
  missions: [
    {
      id: 'u2-w14-1',
      title: '고양이 따라다니기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '마우스 추적',
      conceptExplanation: `스프라이트가 마우스를 따라다니게 만들 수 있어요. 무한 반복 안에서 "마우스 포인터로 이동하기" 블록을 사용하면 돼요. 이동 속도를 조절하려면 마우스 위치를 향해 조금씩 움직이게 할 수도 있죠. 이런 마우스 추적 기능은 게임에서 적 캐릭터가 플레이어를 쫓아오거나, 마우스로 물체를 끌고 다니는 기능을 만들 때 사용해요. 기본적이지만 아주 유용한 기술입니다!`,
      starterCode: `# 고양이가 마우스 포인터를 천천히 따라다니기
# 힌트: 마우스 x, y 좌표를 사용

`,
      testCases: [
        { input: '마우스 이동', expectedOutput: '스프라이트가 따라감' },
        { input: '마우스 이동', expectedOutput: '스프라이트가 따라감' },
        { input: '마우스 이동', expectedOutput: '스프라이트가 따라감' },
        { input: '마우스 이동', expectedOutput: '스프라이트가 따라감' },
      ],
      hints: [
        '무한 반복을 사용하세요',
        '"마우스 포인터로 이동하기" 블록을 사용하세요',
        '또는 마우스 x, y로 조금씩 이동하세요'
      ],
    },
    {
      id: 'u2-w14-2',
      title: '색깔 바꾸는 공',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '모양 효과 변경',
      conceptExplanation: `스프라이트의 색깔이나 효과를 바꿀 수 있어요. "색깔 효과를 10만큼 바꾸기" 블록을 반복하면 무지개처럼 색이 계속 변해요. 밝기, 투명도, 크기 같은 다른 효과도 바꿀 수 있죠. 이런 효과를 사용하면 게임을 더 화려하고 재미있게 만들 수 있어요. 아이템을 먹으면 캐릭터가 반짝이거나, 데미지를 받으면 빨갛게 변하는 것처럼요!`,
      starterCode: `# 공이 무한 반복하면서 색깔이 계속 바뀌기
# 힌트: 색깔 효과 사용

`,
      testCases: [
        { input: '시작', expectedOutput: '색깔이 계속 변함' },
        { input: '시작', expectedOutput: '색깔이 계속 변함' },
        { input: '시작', expectedOutput: '색깔이 계속 변함' },
        { input: '시작', expectedOutput: '색깔이 계속 변함' },
      ],
      hints: [
        '무한 반복 블록을 사용하세요',
        '"색깔 효과를 10만큼 바꾸기"를 넣으세요',
        '조금 기다리면 효과가 더 잘 보여요'
      ],
    },
    {
      id: 'u2-w14-3',
      title: '랜덤 위치로 순간이동',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '난수 활용',
      conceptExplanation: `랜덤(무작위) 숫자를 사용하면 예측할 수 없는 재미있는 프로그램을 만들 수 있어요. "1부터 10 사이의 난수" 블록을 사용하면 매번 다른 숫자가 나와요. 이걸 x, y 좌표에 사용하면 스프라이트가 무작위 위치로 이동하죠. 게임에서 적이 랜덤하게 나타나거나, 주사위를 굴리거나, 복권 번호를 뽑을 때 난수를 사용해요!`,
      starterCode: `# 스프라이트를 클릭하면 화면의 랜덤한 위치로 이동
# 힌트: x는 -240~240, y는 -180~180

`,
      testCases: [
        { input: '클릭', expectedOutput: '랜덤 위치로 이동' },
        { input: '클릭', expectedOutput: '랜덤 위치로 이동' },
        { input: '클릭', expectedOutput: '랜덤 위치로 이동' },
        { input: '클릭', expectedOutput: '랜덤 위치로 이동' },
      ],
      hints: [
        '클릭 이벤트를 사용하세요',
        'x좌표는 -240부터 240 사이의 난수',
        'y좌표는 -180부터 180 사이의 난수'
      ],
    },
    {
      id: 'u2-w14-4',
      title: '간단한 클리커 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '게임 메커니즘',
      conceptExplanation: `클리커 게임은 클릭할 때마다 점수가 오르는 간단한 게임이에요. "점수" 변수를 만들고 클릭할 때마다 1씩 증가시켜요. 점수를 화면에 표시하고, 목표 점수에 도달하면 "성공!" 메시지를 보여주죠. 여기에 시간 제한을 추가하거나 점수에 따라 보너스를 주면 더 재미있어요. 실제 모바일 게임 중에는 이런 간단한 클리커 게임이 정말 많답니다!`,
      starterCode: `# 클리커 게임
# 클릭할 때마다 점수 +1
# 점수가 10이 되면 "성공!" 말하기

`,
      testCases: [
        { input: '클릭 10회', expectedOutput: '점수 10, 성공!' },
        { input: '클릭 10회', expectedOutput: '점수 10, 성공!' },
        { input: '클릭 10회', expectedOutput: '점수 10, 성공!' },
        { input: '클릭 10회', expectedOutput: '점수 10, 성공!' },
      ],
      hints: [
        '"점수" 변수를 만들고 0으로 시작하세요',
        '클릭할 때마다 점수를 1 증가시키세요',
        '점수가 10이 되면 "성공!"을 말하세요'
      ],
    },
    {
      id: 'u2-w14-5',
      title: '피하기 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '충돌 감지',
      conceptExplanation: `두 스프라이트가 부딪혔는지 확인할 수 있어요. "~에 닿았는가?" 블록을 사용하면 충돌을 감지하죠. 플레이어를 화살표 키로 움직이게 하고, 적이 다가오게 만들어요. 플레이어와 적이 부딪히면 "게임오버"를 표시하는 거예요. 이런 충돌 감지는 거의 모든 게임에서 사용하는 핵심 기능입니다!`,
      starterCode: `# 플레이어(고양이): 화살표로 움직임
# 적(박쥐): 천천히 플레이어에게 다가옴
# 부딪히면 "게임오버!" 말하고 멈추기

`,
      testCases: [
        { input: '충돌 발생', expectedOutput: '게임오버!' },
        { input: '충돌 발생', expectedOutput: '게임오버!' },
        { input: '충돌 발생', expectedOutput: '게임오버!' },
        { input: '충돌 발생', expectedOutput: '게임오버!' },
      ],
      hints: [
        '플레이어는 화살표 키로 조작하세요',
        '적은 플레이어를 향해 이동하세요',
        '"플레이어에 닿았는가?"로 충돌을 확인하세요'
      ],
    },
    {
      id: 'u2-w14-6',
      title: '미로 탈출 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '경계 충돌',
      conceptExplanation: `미로 게임에서는 벽에 부딪히지 않고 목표 지점까지 가야 해요. 배경에 미로를 그리고, 검은색 벽에 닿으면 원래 위치로 돌아가게 만들어요. 특정 색깔(예: 초록색)에 닿으면 성공하는 거죠. 화살표 키로 조종하고, 색 감지 블록으로 충돌을 확인해요. 이렇게 하면 실제 게임처럼 작동하는 미로를 만들 수 있답니다!`,
      starterCode: `# 미로 탈출 게임
# 검은색 벽에 닿으면 시작 위치로
# 초록색 골에 닿으면 "성공!" 말하기
# 화살표로 조종

`,
      testCases: [
        { input: '골 도착', expectedOutput: '성공!' },
        { input: '벽 충돌', expectedOutput: '시작 위치로' },
        { input: '골 도착', expectedOutput: '성공!' },
        { input: '벽 충돌', expectedOutput: '시작 위치로' },
      ],
      hints: [
        '화살표 키로 움직이게 하세요',
        '"검은색에 닿았는가?"로 벽을 확인하세요',
        '"초록색에 닿았는가?"로 골을 확인하세요'
      ],
    },
    {
      id: 'u2-w14-7',
      title: '떨어지는 사과 잡기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '중력과 점수',
      conceptExplanation: `물체가 위에서 아래로 떨어지는 게임을 만들 수 있어요. 사과는 y좌표를 계속 감소시켜서 떨어지게 하고, 바구니는 마우스나 화살표로 움직여요. 사과가 바구니에 닿으면 점수를 올리고 사과를 다시 위로 올려요. 바닥에 닿으면 게임오버죠. 이런 패턴은 실제 아케이드 게임에서 정말 많이 사용돼요!`,
      starterCode: `# 떨어지는 사과 게임
# 사과: 위에서 아래로 떨어짐, 바구니에 닿으면 점수+1하고 다시 위로
# 바구니: 좌우 화살표로 움직임
# 사과가 바닥에 닿으면 게임오버

`,
      testCases: [
        { input: '사과 잡기', expectedOutput: '점수 증가' },
        { input: '바닥 도달', expectedOutput: '게임오버' },
        { input: '사과 잡기', expectedOutput: '점수 증가' },
        { input: '바닥 도달', expectedOutput: '게임오버' },
      ],
      hints: [
        '사과는 y좌표를 계속 감소시켜요',
        '바구니에 닿으면 y를 180으로 재설정',
        'y < -180이면 게임오버'
      ],
    },
    {
      id: 'u2-w14-8',
      title: '슈팅 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 22,
      concept: '발사체 생성',
      conceptExplanation: `스페이스바를 누르면 총알이 발사되는 게임을 만들 수 있어요. "복제하기" 블록을 사용해서 총알 스프라이트를 여러 개 만들어요. 각 복제본은 위로 계속 이동하다가 화면 밖으로 나가면 삭제돼요. 적에 맞으면 적도 삭제하고 점수를 올려요. 이런 슈팅 메커니즘은 수많은 게임에서 사용하는 중요한 패턴입니다!`,
      starterCode: `# 슈팅 게임
# 스페이스: 총알 발사 (복제본 생성)
# 총알: 위로 이동, 적에 닿으면 둘 다 삭제하고 점수+1
# 플레이어: 좌우 화살표로 움직임

`,
      testCases: [
        { input: 'Space→적 맞춤', expectedOutput: '점수+1, 적 삭제' },
        { input: 'Space→적 맞춤', expectedOutput: '점수+1, 적 삭제' },
        { input: 'Space→적 맞춤', expectedOutput: '점수+1, 적 삭제' },
        { input: 'Space→적 맞춤', expectedOutput: '점수+1, 적 삭제' },
      ],
      hints: [
        '스페이스 키로 총알을 복제하세요',
        '"복제되었을 때" 블록에서 위로 이동하게 하세요',
        '적에 닿으면 "이 복제본 삭제하기"'
      ],
    },
    {
      id: 'u2-w14-9',
      title: '플래피 버드 스타일 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 25,
      concept: '점프와 중력',
      conceptExplanation: `플래피 버드처럼 스페이스바를 눌러 점프하는 게임을 만들어봐요. "중력" 변수를 만들어서 y좌표를 계속 감소시키고(떨어짐), 스페이스를 누르면 y좌표를 증가시켜요(점프). 장애물이 왼쪽으로 이동하고, 부딪히거나 바닥에 닿으면 게임오버예요. 간단하지만 중독성 있는 게임 메커니즘이죠!`,
      starterCode: `# 플래피 버드 게임
# 새: 계속 아래로 떨어짐, 스페이스로 점프
# 장애물: 왼쪽으로 이동, 닿으면 게임오버
# 장애물 통과하면 점수+1

`,
      testCases: [
        { input: 'Space→통과', expectedOutput: '점수+1' },
        { input: '충돌', expectedOutput: '게임오버' },
        { input: 'Space→통과', expectedOutput: '점수+1' },
        { input: '충돌', expectedOutput: '게임오버' },
      ],
      hints: [
        '"중력" 변수로 y를 계속 감소시키세요',
        '스페이스로 y를 증가시켜요(점프)',
        '장애물은 x를 계속 감소시켜 왼쪽으로 이동'
      ],
    },
    {
      id: 'u2-w14-10',
      title: '종합: 나만의 게임 만들기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 150,
      estimatedMinutes: 30,
      concept: '프로젝트 종합',
      conceptExplanation: `지금까지 배운 모든 것을 사용해서 완전한 게임을 만들어봐요! 시작 화면, 게임 플레이, 점수 시스템, 게임오버 화면까지 모두 포함해요. 변수로 점수와 생명을 관리하고, 이벤트로 사용자 입력을 받고, 조건문으로 게임 로직을 처리하고, 반복문으로 계속 실행되게 해요. 메시지로 게임 상태를 전환하고요. 이것이 진짜 게임을 만드는 과정입니다. 여러분은 이제 게임 개발자가 되었어요!`,
      starterCode: `# 나만의 완성된 게임 만들기
#
# 필수 요소:
# 1. 시작 화면 ("시작" 버튼 클릭)
# 2. 게임 플레이 (조작 + 목표)
# 3. 점수 시스템
# 4. 게임오버 조건
# 5. 게임오버 화면
#
# 예시: 우주 슈팅, 미로 탈출, 레이싱 등
# 자유롭게 창의적으로 만들어보세요!

`,
      testCases: [
        { input: '게임 플레이', expectedOutput: '완성된 게임 작동' },
        { input: '게임 플레이', expectedOutput: '완성된 게임 작동' },
        { input: '게임 플레이', expectedOutput: '완성된 게임 작동' },
        { input: '게임 플레이', expectedOutput: '완성된 게임 작동' },
      ],
      hints: [
        '먼저 게임 아이디어를 정하세요',
        '시작 화면과 게임오버 화면을 메시지로 전환하세요',
        '한 번에 모든 것을 만들지 말고 하나씩 추가하세요'
      ],
    },
  ]
};

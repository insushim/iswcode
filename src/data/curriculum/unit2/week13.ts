import type { Week } from '../../../types';

export const week13: Week = {
  id: 'week-13',
  number: 13,
  title: '이벤트와 메시지',
  description: '클릭, 키보드, 메시지로 상호작용하는 프로그램을 만들어요',
  missions: [
    {
      id: 'u2-w13-1',
      title: '클릭하면 말하기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '클릭 이벤트',
      conceptExplanation: `이벤트는 "무언가 일어났을 때"를 감지하는 기능이에요. 마우스를 클릭하거나, 키보드를 누르거나, 스프라이트끼리 부딪히는 것처럼요. 가장 기본적인 이벤트는 클릭이에요. "이 스프라이트를 클릭했을 때" 블록을 사용하면 마우스로 클릭할 때마다 원하는 동작을 실행할 수 있어요. 버튼을 누르는 것처럼 사용자와 상호작용하는 프로그램의 시작입니다!`,
      starterCode: `# 스프라이트를 클릭하면 "안녕!"이라고 말하기

`,
      testCases: [
        { input: '클릭', expectedOutput: '안녕!' },
        { input: '클릭', expectedOutput: '안녕!' },
        { input: '클릭', expectedOutput: '안녕!' },
        { input: '클릭', expectedOutput: '안녕!' },
      ],
      hints: [
        '"이 스프라이트를 클릭했을 때" 블록을 사용하세요',
        '그 아래에 "안녕!" 말하기 블록을 넣으세요',
        '초록 깃발이 아니라 클릭 이벤트를 사용하는 거예요'
      ],
    },
    {
      id: 'u2-w13-2',
      title: '스페이스바로 점프',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '키보드 이벤트',
      conceptExplanation: `키보드를 눌렀을 때 반응하는 프로그램을 만들 수 있어요. "스페이스 키를 눌렀을 때" 블록을 사용하면 특정 키에 반응하죠. 게임에서 캐릭터를 움직이거나 총을 쏘거나 점프할 때 사용해요. 스페이스, 화살표, 문자 키 등 모든 키를 사용할 수 있어요. 키보드 이벤트는 게임을 만들 때 가장 중요한 기능 중 하나랍니다!`,
      starterCode: `# 스페이스 키를 누르면 "점프!" 말하기

`,
      testCases: [
        { input: 'Space키', expectedOutput: '점프!' },
        { input: 'Space키', expectedOutput: '점프!' },
        { input: 'Space키', expectedOutput: '점프!' },
        { input: 'Space키', expectedOutput: '점프!' },
      ],
      hints: [
        '"스페이스 키를 눌렀을 때" 블록을 사용하세요',
        '그 아래에 "점프!" 말하기 블록을 넣으세요',
        '키보드에서 스페이스바를 눌러서 테스트하세요'
      ],
    },
    {
      id: 'u2-w13-3',
      title: '화살표로 움직이기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 14,
      concept: '방향키 제어',
      conceptExplanation: `방향키로 스프라이트를 움직이는 건 게임의 기본이에요. 오른쪽 화살표를 누르면 x좌표를 10씩 증가시키고, 왼쪽 화살표를 누르면 10씩 감소시켜요. 위/아래는 y좌표를 바꾸고요. "만약 ~키를 눌렀다면" 조건 블록을 무한 반복 안에 넣으면 키를 누르는 동안 계속 움직이게 할 수 있어요. 이렇게 하면 자유롭게 움직이는 캐릭터를 만들 수 있답니다!`,
      starterCode: `# 오른쪽 화살표를 누르면 x를 10 증가
# 왼쪽 화살표를 누르면 x를 10 감소
# 무한 반복으로 계속 확인

`,
      testCases: [
        { input: '→키', expectedOutput: 'x좌표 증가' },
        { input: '←키', expectedOutput: 'x좌표 감소' },
        { input: '→키', expectedOutput: 'x좌표 증가' },
        { input: '←키', expectedOutput: 'x좌표 감소' },
      ],
      hints: [
        '무한 반복 블록을 사용하세요',
        '안에 "만약 오른쪽 화살표 키를 눌렀다면" 조건을 넣으세요',
        'x좌표를 10만큼 바꾸기 블록을 사용하세요'
      ],
    },
    {
      id: 'u2-w13-4',
      title: '메시지 보내기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '메시지 전송',
      conceptExplanation: `스프라이트끼리 신호를 주고받을 수 있어요. "메시지1 방송하기" 블록을 사용하면 모든 스프라이트에게 신호를 보내죠. 이건 마치 학교에서 방송을 하는 것과 같아요. "점심시간입니다"라고 방송하면 모든 학생이 들을 수 있는 것처럼요. 메시지는 여러 스프라이트가 함께 작동하는 프로그램을 만들 때 아주 중요해요!`,
      starterCode: `# 스프라이트를 클릭하면 "시작" 메시지 방송하기

`,
      testCases: [
        { input: '클릭', expectedOutput: '시작 메시지 방송됨' },
        { input: '클릭', expectedOutput: '시작 메시지 방송됨' },
        { input: '클릭', expectedOutput: '시작 메시지 방송됨' },
        { input: '클릭', expectedOutput: '시작 메시지 방송됨' },
      ],
      hints: [
        '"이 스프라이트를 클릭했을 때" 블록을 사용하세요',
        '"시작 방송하기" 블록을 만드세요',
        '메시지는 새로 만들 수 있어요'
      ],
    },
    {
      id: 'u2-w13-5',
      title: '메시지 받기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 13,
      concept: '메시지 수신',
      conceptExplanation: `다른 스프라이트가 보낸 메시지를 받을 수 있어요. "메시지1을 받았을 때" 블록을 사용하면 그 메시지가 방송될 때마다 반응하죠. 예를 들어, 버튼 스프라이트가 "시작" 메시지를 보내면 게임 캐릭터가 그 메시지를 받아서 움직이기 시작할 수 있어요. 이렇게 스프라이트들이 서로 협력하는 프로그램을 만들 수 있답니다!`,
      starterCode: `# "안녕" 메시지를 받으면 "반가워!" 말하기

`,
      testCases: [
        { input: '안녕 메시지', expectedOutput: '반가워!' },
        { input: '안녕 메시지', expectedOutput: '반가워!' },
        { input: '안녕 메시지', expectedOutput: '반가워!' },
        { input: '안녕 메시지', expectedOutput: '반가워!' },
      ],
      hints: [
        '"안녕을 받았을 때" 블록을 사용하세요',
        '그 아래에 "반가워!" 말하기 블록을 넣으세요',
        '다른 스프라이트에서 "안녕" 메시지를 보내세요'
      ],
    },
    {
      id: 'u2-w13-6',
      title: '신호등 게임',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '메시지로 상태 제어',
      conceptExplanation: `메시지를 사용해서 여러 스프라이트의 상태를 제어할 수 있어요. 신호등 게임에서 "빨강" 메시지를 보내면 모든 캐릭터가 멈추고, "초록" 메시지를 보내면 다시 움직이는 것처럼요. 이런 방식으로 게임의 상태를 관리하면 여러 객체를 동시에 제어할 수 있어요. 실제 게임에서 "게임시작", "게임오버", "레벨업" 같은 이벤트를 처리하는 방식이랍니다!`,
      starterCode: `# 초록 깃발: "시작" 방송
# "시작" 받으면: "게임 시작!" 말하고 1초 후 "끝" 방송
# "끝" 받으면: "게임 끝!" 말하기

`,
      testCases: [
        { input: '깃발 클릭', expectedOutput: '게임 시작! → 게임 끝!' },
        { input: '깃발 클릭', expectedOutput: '게임 시작! → 게임 끝!' },
        { input: '깃발 클릭', expectedOutput: '게임 시작! → 게임 끝!' },
        { input: '깃발 클릭', expectedOutput: '게임 시작! → 게임 끝!' },
      ],
      hints: [
        '초록 깃발 클릭 이벤트에서 "시작" 방송하세요',
        '"시작"을 받으면 말하고 1초 기다린 후 "끝" 방송하세요',
        '"끝"을 받으면 "게임 끝!"을 말하세요'
      ],
    },
    {
      id: 'u2-w13-7',
      title: '클릭 카운터',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 85,
      estimatedMinutes: 15,
      concept: '이벤트와 변수',
      conceptExplanation: `이벤트와 변수를 함께 사용하면 강력해져요. 클릭할 때마다 카운터를 1씩 올리는 프로그램을 만들 수 있죠. "클릭수" 변수를 만들고, 클릭 이벤트가 발생할 때마다 1씩 증가시켜요. 게임에서 점수를 세거나, 퀴즈에서 정답 개수를 세거나, 버튼을 몇 번 눌렀는지 기록할 때 사용해요. 이벤트 + 변수는 상호작용하는 프로그램의 핵심 조합입니다!`,
      starterCode: `# 깃발 클릭: "클릭수" 0으로 초기화
# 스프라이트 클릭: 클릭수 1 증가하고 현재 클릭수 말하기

`,
      testCases: [
        { input: '클릭 3회', expectedOutput: '1, 2, 3' },
        { input: '클릭 3회', expectedOutput: '1, 2, 3' },
        { input: '클릭 3회', expectedOutput: '1, 2, 3' },
        { input: '클릭 3회', expectedOutput: '1, 2, 3' },
      ],
      hints: [
        '"클릭수" 변수를 만드세요',
        '깃발 클릭 시 0으로 초기화하세요',
        '스프라이트 클릭 시 1 증가하고 말하세요'
      ],
    },
    {
      id: 'u2-w13-8',
      title: '순서대로 애니메이션',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '메시지 체인',
      conceptExplanation: `메시지를 차례대로 보내면 순서가 있는 애니메이션을 만들 수 있어요. "장면1" 메시지를 받으면 첫 번째 동작을 하고 "장면2" 메시지를 보내고, "장면2"를 받으면 두 번째 동작을 하고 "장면3"을 보내는 식이죠. 이렇게 메시지를 연결하면 복잡한 스토리나 애니메이션을 만들 수 있어요. 게임의 컷신이나 대화 시스템을 만들 때 이런 방식을 사용한답니다!`,
      starterCode: `# 깃발: "1단계" 방송
# "1단계" 받으면: "첫 번째!" 말하고 "2단계" 방송
# "2단계" 받으면: "두 번째!" 말하기

`,
      testCases: [
        { input: '깃발 클릭', expectedOutput: '첫 번째! → 두 번째!' },
        { input: '깃발 클릭', expectedOutput: '첫 번째! → 두 번째!' },
        { input: '깃발 클릭', expectedOutput: '첫 번째! → 두 번째!' },
        { input: '깃발 클릭', expectedOutput: '첫 번째! → 두 번째!' },
      ],
      hints: [
        '초록 깃발에서 "1단계" 방송하세요',
        '"1단계"를 받으면 말하고 "2단계" 방송하세요',
        '"2단계"를 받으면 "두 번째!" 말하세요'
      ],
    },
    {
      id: 'u2-w13-9',
      title: '키보드 피아노',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '다중 키 이벤트',
      conceptExplanation: `여러 개의 키를 각각 다른 용도로 사용할 수 있어요. 피아노처럼 각 키가 다른 소리를 내는 프로그램을 만들 수 있죠. A키는 도, S키는 레, D키는 미 이런 식으로요. 각 키마다 이벤트 블록을 만들어서 다른 동작을 실행시켜요. 음악 프로그램이나 복잡한 게임 조작을 만들 때 이런 다중 키 이벤트를 사용한답니다!`,
      starterCode: `# A키: "도" 말하기
# S키: "레" 말하기
# D키: "미" 말하기

`,
      testCases: [
        { input: 'A키', expectedOutput: '도' },
        { input: 'S키', expectedOutput: '레' },
        { input: 'D키', expectedOutput: '미' },
        { input: 'A키', expectedOutput: '도' },
      ],
      hints: [
        'A키를 눌렀을 때 블록을 만드세요',
        'S키, D키도 각각 만드세요',
        '각각 다른 음계를 말하게 하세요'
      ],
    },
    {
      id: 'u2-w13-10',
      title: '종합: 대화 시스템',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '이벤트 종합 활용',
      conceptExplanation: `이벤트의 모든 것을 종합해서 대화 시스템을 만들어봐요! 스프라이트를 클릭하면 대화가 시작되고, 스페이스바를 누르면 다음 대화로 넘어가고, 대화가 끝나면 "끝" 메시지를 보내는 거예요. 클릭 이벤트, 키보드 이벤트, 메시지 방송과 수신을 모두 사용하는 복잡한 프로그램이죠. 이것을 완성하면 RPG 게임의 대화 시스템이나 스토리 게임을 만들 수 있게 됩니다!`,
      starterCode: `# 스프라이트 클릭: "대화시작" 방송
# "대화시작" 받으면: "안녕?" 말하고 스페이스 기다림
# 스페이스: "잘 지내?" 말하고 스페이스 기다림
# 스페이스: "다음에 또 봐!" 말하고 "대화끝" 방송

`,
      testCases: [
        { input: '클릭→Space→Space', expectedOutput: '안녕? → 잘 지내? → 다음에 또 봐!' },
        { input: '클릭→Space→Space', expectedOutput: '안녕? → 잘 지내? → 다음에 또 봐!' },
        { input: '클릭→Space→Space', expectedOutput: '안녕? → 잘 지내? → 다음에 또 봐!' },
        { input: '클릭→Space→Space', expectedOutput: '안녕? → 잘 지내? → 다음에 또 봐!' },
      ],
      hints: [
        '클릭 이벤트에서 "대화시작" 메시지를 보내세요',
        '"대화시작"을 받으면 첫 대화를 하고 스페이스를 기다리세요',
        '스페이스 이벤트로 다음 대화들을 진행하세요'
      ],
    },
  ]
};

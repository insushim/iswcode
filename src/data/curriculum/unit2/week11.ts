import type { Week } from '../../../types';

export const week11: Week = {
  id: 'week-11',
  number: 11,
  title: '조건문의 힘',
  description: 'if-else로 선택하는 프로그램을 만들어요',
  missions: [
    {
      id: 'u2-w11-1',
      title: '날씨에 따라 말하기',
      description: '날씨에 따라 다른 말을 하는 프로그램을 만들어요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '조건문 기초',
      conceptExplanation: `조건문은 특정 상황에 따라 다른 행동을 하게 만드는 명령이에요. 마치 "비가 오면 우산을 쓰고, 안 오면 그냥 간다"처럼 상황에 따라 다르게 행동하죠. 스크래치에서는 "만약 ~라면" 블록을 사용해요. 이 블록 안에 조건을 넣으면, 조건이 맞을 때만 안쪽 명령이 실행됩니다. 조건문을 사용하면 똑똑한 프로그램을 만들 수 있어요!`,
      starterCode: `# 날씨 변수가 "맑음"이면 "산책하자!"라고 말하기
# 힌트: 만약 ~라면 블록 사용

set [날씨 v] to [맑음]`,
      testCases: [
        { input: '날씨=맑음', expectedOutput: '산책하자!' },
        { input: '날씨=비', expectedOutput: '(아무 말도 안함)' },
        { input: '날씨=눈', expectedOutput: '(아무 말도 안함)' },
        { input: '날씨=맑음', expectedOutput: '산책하자!' },
      ],
      hints: [
        '만약 ~라면 블록을 사용하세요',
        '조건에 "날씨 = 맑음"을 넣으세요',
        '안쪽에 "산책하자!" 말하기 블록을 넣으세요'
      ],
    },
    {
      id: 'u2-w11-2',
      title: '점수에 따른 메시지',
      description: '점수에 따라 합격/불합격을 판정해요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: 'if-else 기초',
      conceptExplanation: `if-else는 조건이 맞을 때와 아닐 때 각각 다른 행동을 하게 만들어요. "만약 점수가 80점 이상이면 '잘했어요!', 아니면 '다음엔 더 잘할 수 있어요!'"처럼 두 가지 경우를 모두 처리할 수 있죠. 스크래치에서는 "만약 ~라면, 아니면" 블록을 사용합니다. 이렇게 하면 모든 상황에 대응하는 프로그램을 만들 수 있어요!`,
      starterCode: `# 점수가 80 이상이면 "합격!", 아니면 "불합격!"
# 힌트: 만약 ~라면, 아니면 블록 사용

set [점수 v] to [85]`,
      testCases: [
        { input: '점수=85', expectedOutput: '합격!' },
        { input: '점수=60', expectedOutput: '불합격!' },
        { input: '점수=80', expectedOutput: '합격!' },
        { input: '점수=79', expectedOutput: '불합격!' },
      ],
      hints: [
        '만약 ~라면, 아니면 블록을 사용하세요',
        '조건에 "점수 >= 80"을 넣으세요',
        '위쪽에 "합격!", 아래쪽에 "불합격!"을 넣으세요'
      ],
    },
    {
      id: 'u2-w11-3',
      title: '신호등 만들기',
      description: '신호등 색깔에 따라 다른 행동을 지시해요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 15,
      concept: '다중 조건문',
      conceptExplanation: `여러 가지 경우를 모두 처리하려면 조건문을 여러 개 연결해야 해요. 신호등처럼 "빨강이면 멈춰, 노랑이면 준비, 초록이면 가!"처럼 세 가지 이상의 경우가 있을 때 사용하죠. 스크래치에서는 "만약 ~라면, 아니면" 블록을 여러 개 이어붙여서 만들 수 있어요. 이렇게 하면 복잡한 상황도 처리할 수 있는 똑똑한 프로그램이 됩니다!`,
      starterCode: `# 신호등 색깔에 따라 다른 메시지
# 빨강: "멈춰!", 노랑: "준비!", 초록: "출발!"

set [신호등 v] to [초록]`,
      testCases: [
        { input: '신호등=빨강', expectedOutput: '멈춰!' },
        { input: '신호등=노랑', expectedOutput: '준비!' },
        { input: '신호등=초록', expectedOutput: '출발!' },
        { input: '신호등=빨강', expectedOutput: '멈춰!' },
      ],
      hints: [
        '만약 ~라면 블록을 3개 사용하세요',
        '각각 "신호등 = 빨강", "신호등 = 노랑", "신호등 = 초록"을 확인하세요',
        '각 조건에 맞는 메시지를 말하게 하세요'
      ],
    },
    {
      id: 'u2-w11-4',
      title: '숫자 비교하기',
      description: '두 숫자의 크기를 비교해요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '비교 연산자',
      conceptExplanation: `숫자를 비교할 때는 >, <, =, >=, <= 같은 비교 연산자를 사용해요. "10 > 5"는 "10이 5보다 크다"는 뜻이고, 이것이 맞으면 참(true), 틀리면 거짓(false)이 됩니다. 조건문에서 이런 비교를 사용하면 "나이가 13세 이상이면 입장 가능" 같은 규칙을 만들 수 있어요. 비교 연산자는 프로그래밍에서 아주 자주 사용하는 중요한 도구랍니다!`,
      starterCode: `# 숫자1이 숫자2보다 크면 "크다!", 아니면 "작거나 같다!"

set [숫자1 v] to [15]
set [숫자2 v] to [10]`,
      testCases: [
        { input: '숫자1=15, 숫자2=10', expectedOutput: '크다!' },
        { input: '숫자1=5, 숫자2=10', expectedOutput: '작거나 같다!' },
        { input: '숫자1=10, 숫자2=10', expectedOutput: '작거나 같다!' },
        { input: '숫자1=20, 숫자2=15', expectedOutput: '크다!' },
      ],
      hints: [
        '만약 ~라면, 아니면 블록을 사용하세요',
        '조건에 "숫자1 > 숫자2"를 넣으세요',
        '> 연산자는 "~보다 크다"는 뜻이에요'
      ],
    },
    {
      id: 'u2-w11-5',
      title: '온도계 프로그램',
      description: '온도에 따라 춥다/덥다를 알려줘요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '범위 조건',
      conceptExplanation: `특정 범위 안에 있는지 확인하려면 두 개의 조건을 함께 사용해요. "온도가 18도 이상이고 25도 이하"처럼 "~이상이고 ~이하" 같은 범위를 표현할 수 있죠. 스크래치에서는 "그리고(and)" 블록으로 두 조건을 연결합니다. 이렇게 하면 "적당한 온도", "너무 추움", "너무 더움"처럼 세밀한 구분이 가능해요. 범위 조건은 실생활에서 아주 많이 사용되는 패턴입니다!`,
      starterCode: `# 온도에 따른 메시지
# 25도 초과: "더워요!", 18~25도: "적당해요!", 18도 미만: "추워요!"

set [온도 v] to [20]`,
      testCases: [
        { input: '온도=30', expectedOutput: '더워요!' },
        { input: '온도=20', expectedOutput: '적당해요!' },
        { input: '온도=10', expectedOutput: '추워요!' },
        { input: '온도=25', expectedOutput: '적당해요!' },
      ],
      hints: [
        '조건문을 3개 사용하여 세 가지 경우를 처리하세요',
        '중간 조건은 "온도 >= 18 and 온도 <= 25"로 만드세요',
        '순서대로 확인하면 더 쉬워요'
      ],
    },
    {
      id: 'u2-w11-6',
      title: '비밀번호 확인',
      description: '비밀번호가 맞는지 확인하는 시스템을 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 13,
      concept: '문자열 비교',
      conceptExplanation: `숫자뿐만 아니라 문자(텍스트)도 비교할 수 있어요. 비밀번호를 확인하거나 이름을 체크할 때처럼요. "password = 1234"처럼 입력한 문자열이 정답과 같은지 확인하는 거죠. 문자열 비교는 대소문자를 구분하니 주의해야 해요. 로그인 시스템이나 퀴즈 게임처럼 사용자의 입력을 확인하는 프로그램에서 아주 중요한 기능입니다!`,
      starterCode: `# 비밀번호가 "1234"이면 "입장!", 아니면 "틀렸어요!"

set [비밀번호 v] to [1234]`,
      testCases: [
        { input: '비밀번호=1234', expectedOutput: '입장!' },
        { input: '비밀번호=0000', expectedOutput: '틀렸어요!' },
        { input: '비밀번호=5678', expectedOutput: '틀렸어요!' },
        { input: '비밀번호=1234', expectedOutput: '입장!' },
      ],
      hints: [
        '만약 ~라면, 아니면 블록을 사용하세요',
        '조건에 "비밀번호 = 1234"를 넣으세요',
        '= 연산자로 문자열이 같은지 확인할 수 있어요'
      ],
    },
    {
      id: 'u2-w11-7',
      title: '나이 확인 시스템',
      description: '나이에 따라 어린이/청소년/성인을 구분해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 85,
      estimatedMinutes: 14,
      concept: '중첩 조건문',
      conceptExplanation: `조건문 안에 또 다른 조건문을 넣을 수 있어요. 이를 중첩 조건문이라고 해요. "나이가 13세 이상이면 확인하고, 그 중에서 18세 이상이면 성인"처럼 단계적으로 확인할 때 사용하죠. 복잡해 보이지만 하나씩 차근차근 생각하면 쉬워요. 중첩 조건문을 사용하면 더 정교한 판단을 하는 프로그램을 만들 수 있답니다!`,
      starterCode: `# 나이에 따른 등급
# 13세 미만: "어린이", 13~18세: "청소년", 18세 이상: "성인"

set [나이 v] to [15]`,
      testCases: [
        { input: '나이=10', expectedOutput: '어린이' },
        { input: '나이=15', expectedOutput: '청소년' },
        { input: '나이=20', expectedOutput: '성인' },
        { input: '나이=13', expectedOutput: '청소년' },
      ],
      hints: [
        '먼저 13세 미만을 확인하세요',
        '그 다음 18세 미만을 확인하세요',
        '나머지는 성인이에요'
      ],
    },
    {
      id: 'u2-w11-8',
      title: '점수 등급 매기기',
      description: '점수를 A, B, C, D 등급으로 나눠요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '다단계 조건 분기',
      conceptExplanation: `여러 단계로 나누어진 조건을 처리할 수 있어요. 학교 성적표처럼 "90점 이상 A, 80점 이상 B, 70점 이상 C" 같은 걸 만들 수 있죠. 이런 다단계 조건은 위에서부터 순서대로 확인해요. 첫 번째 조건이 맞지 않으면 두 번째, 두 번째도 아니면 세 번째 이런 식으로요. 순서가 중요하니 큰 수부터 확인하는 게 일반적이에요!`,
      starterCode: `# 점수에 따른 등급
# 90 이상: "A", 80 이상: "B", 70 이상: "C", 그 외: "D"

set [점수 v] to [85]`,
      testCases: [
        { input: '점수=95', expectedOutput: 'A' },
        { input: '점수=85', expectedOutput: 'B' },
        { input: '점수=75', expectedOutput: 'C' },
        { input: '점수=60', expectedOutput: 'D' },
      ],
      hints: [
        '조건문을 순서대로 연결하세요',
        '90 이상부터 확인하고, 아니면 80 이상, 아니면 70 이상 순서로요',
        '마지막은 else로 처리하세요'
      ],
    },
    {
      id: 'u2-w11-9',
      title: '가위바위보 판정',
      description: '가위바위보 게임의 승패를 판정해요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '논리 연산 AND',
      conceptExplanation: `두 가지 조건이 모두 맞아야 할 때 AND 연산자를 사용해요. "내가 가위이고 상대가 보자기면 내가 이긴다"처럼 두 가지가 동시에 맞아야 하는 경우죠. 스크래치에서는 "그리고(and)" 블록을 사용합니다. AND 연산은 두 조건이 모두 참일 때만 참이 되요. 가위바위보 같은 게임에서 승패를 판정할 때 아주 유용하게 쓰입니다!`,
      starterCode: `# 가위바위보 승패 판정
# 내가 "가위"이고 상대가 "보"면 "이겼다!"

set [나 v] to [가위]
set [상대 v] to [보]`,
      testCases: [
        { input: '나=가위, 상대=보', expectedOutput: '이겼다!' },
        { input: '나=가위, 상대=바위', expectedOutput: '(아무 말도 안함)' },
        { input: '나=바위, 상대=가위', expectedOutput: '(아무 말도 안함)' },
        { input: '나=가위, 상대=보', expectedOutput: '이겼다!' },
      ],
      hints: [
        'AND 블록으로 두 조건을 연결하세요',
        '조건 1: "나 = 가위"',
        '조건 2: "상대 = 보"'
      ],
    },
    {
      id: 'u2-w11-10',
      title: '종합: 스마트 알람',
      description: '요일과 시간에 따라 알람이 울리는 프로그램을 만들어요',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '조건문 종합 응용',
      conceptExplanation: `조건문의 모든 것을 종합해서 사용해봐요! 시간과 요일을 함께 확인하는 스마트 알람을 만들 거예요. "평일이면서 7시이면 알람, 주말이면서 9시이면 알람"처럼 복합적인 조건을 처리합니다. AND, OR, 중첩 조건문 등을 모두 사용하는 종합 문제예요. 이것을 완성하면 어떤 복잡한 조건도 처리할 수 있게 됩니다! 실생활에서 사용하는 프로그램은 대부분 이런 복잡한 조건문으로 만들어져요.`,
      starterCode: `# 스마트 알람
# 평일(월~금) 7시 또는 주말(토~일) 9시이면 "알람 울림!"
# 그 외 시간에는 "조용~"

set [요일 v] to [월요일]
set [시간 v] to [7]`,
      testCases: [
        { input: '요일=월요일, 시간=7', expectedOutput: '알람 울림!' },
        { input: '요일=토요일, 시간=9', expectedOutput: '알람 울림!' },
        { input: '요일=월요일, 시간=9', expectedOutput: '조용~' },
        { input: '요일=일요일, 시간=7', expectedOutput: '조용~' },
      ],
      hints: [
        'OR 블록으로 두 가지 경우를 연결하세요',
        '평일 조건: 요일이 월~금이고 시간이 7',
        '주말 조건: 요일이 토~일이고 시간이 9'
      ],
    },
  ]
};

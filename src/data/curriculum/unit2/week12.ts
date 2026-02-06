import type { Week } from '../../../types';

export const week12: Week = {
  id: 'week-12',
  number: 12,
  title: '변수 상자',
  description: '변수로 값을 저장하고 꺼내 쓰는 방법을 배워요',
  missions: [
    {
      id: 'u2-w12-1',
      title: '변수 만들기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '변수의 개념',
      conceptExplanation: `변수는 값을 저장하는 상자예요. 마치 이름표가 붙은 서랍처럼 원하는 값을 넣었다가 나중에 꺼내 쓸 수 있죠. "점수"라는 변수에 100을 저장하면, 언제든지 그 점수를 확인하거나 바꿀 수 있어요. 프로그래밍에서 변수는 정보를 기억하는 가장 기본적인 방법입니다. 게임의 점수, 캐릭터의 위치, 사용자의 이름 등 모든 것을 변수에 저장해요!`,
      starterCode: `# "이름" 변수를 만들고 "철수"를 저장한 후 말하기

`,
      testCases: [
        { input: '', expectedOutput: '철수' },
        { input: '', expectedOutput: '철수' },
        { input: '', expectedOutput: '철수' },
        { input: '', expectedOutput: '철수' },
      ],
      hints: [
        '변수 만들기 버튼을 클릭하세요',
        '"이름"이라는 이름으로 변수를 만드세요',
        '"이름"을 "철수"로 정하기 블록을 사용하세요'
      ],
    },
    {
      id: 'u2-w12-2',
      title: '변수 값 바꾸기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '변수 값 변경',
      conceptExplanation: `변수에 저장된 값은 언제든지 바꿀 수 있어요. "점수"가 10이었다가 20으로 바뀌거나, "이름"이 "철수"였다가 "영희"로 바뀔 수 있죠. "변수를 ~로 정하기" 블록을 사용하면 새로운 값으로 덮어씌워요. 이렇게 값이 바뀌는 것을 "변수(Variable)"라고 부르는 이유랍니다. 값이 변할 수 있다는 뜻이에요!`,
      starterCode: `# "나이" 변수를 10으로 만들고,
# 그 다음 15로 바꾼 후 말하기

`,
      testCases: [
        { input: '', expectedOutput: '15' },
        { input: '', expectedOutput: '15' },
        { input: '', expectedOutput: '15' },
        { input: '', expectedOutput: '15' },
      ],
      hints: [
        '"나이" 변수를 만드세요',
        '처음에 10으로 정하세요',
        '그 다음 15로 바꾸세요'
      ],
    },
    {
      id: 'u2-w12-3',
      title: '변수에 1 더하기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 12,
      concept: '변수 증가',
      conceptExplanation: `변수 값을 조금씩 늘릴 수 있어요. "점수를 1만큼 바꾸기" 블록을 사용하면 현재 값에 1이 더해져요. 점수가 10이었다면 11이 되는 거죠. 게임에서 점수를 올리거나 카운터를 만들 때 아주 자주 사용해요. 버튼을 누를 때마다 숫자가 올라가는 것처럼요. 마이너스 숫자를 넣으면 값을 줄일 수도 있답니다!`,
      starterCode: `# "점수" 변수를 0으로 만들고,
# 3번 1씩 증가시킨 후 말하기

`,
      testCases: [
        { input: '', expectedOutput: '3' },
        { input: '', expectedOutput: '3' },
        { input: '', expectedOutput: '3' },
        { input: '', expectedOutput: '3' },
      ],
      hints: [
        '"점수" 변수를 0으로 시작하세요',
        '"점수를 1만큼 바꾸기"를 3번 사용하세요',
        '마지막에 점수를 말하세요'
      ],
    },
    {
      id: 'u2-w12-4',
      title: '변수로 계산하기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'beginner',
      exp: 80,
      estimatedMinutes: 13,
      concept: '변수 연산',
      conceptExplanation: `변수끼리 계산할 수 있어요. "가격"이 1000이고 "개수"가 3이면, "총액"은 1000 × 3 = 3000이 되죠. 변수를 사용하면 복잡한 계산도 쉽게 할 수 있어요. 더하기, 빼기, 곱하기, 나누기 모두 가능합니다. 쇼핑몰의 장바구니 계산이나 게임의 데미지 계산처럼 실제 프로그램에서 정말 많이 사용하는 기능이에요!`,
      starterCode: `# "가격" 1000, "개수" 3을 만들고
# "총액" = 가격 × 개수를 계산해서 말하기

`,
      testCases: [
        { input: '', expectedOutput: '3000' },
        { input: '', expectedOutput: '3000' },
        { input: '', expectedOutput: '3000' },
        { input: '', expectedOutput: '3000' },
      ],
      hints: [
        '세 개의 변수를 만드세요: 가격, 개수, 총액',
        '가격은 1000, 개수는 3으로 설정하세요',
        '총액을 "가격 × 개수"로 계산하세요'
      ],
    },
    {
      id: 'u2-w12-5',
      title: '카운터 만들기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 80,
      estimatedMinutes: 14,
      concept: '반복과 변수',
      conceptExplanation: `변수와 반복문을 함께 사용하면 카운터를 만들 수 있어요. 1부터 10까지 세는 프로그램을 만들 때, 변수에 1씩 더하면서 반복하면 되죠. 게임에서 콤보 카운트를 세거나, 남은 시간을 표시하거나, 적을 몇 마리 잡았는지 기록할 때 이런 방식을 사용해요. 변수와 반복문의 조합은 프로그래밍의 핵심 패턴 중 하나랍니다!`,
      starterCode: `# "카운트" 변수를 1로 시작해서
# 5번 반복하면서 1씩 증가
# 매번 현재 카운트 값을 말하기

`,
      testCases: [
        { input: '', expectedOutput: '1, 2, 3, 4, 5' },
        { input: '', expectedOutput: '1, 2, 3, 4, 5' },
        { input: '', expectedOutput: '1, 2, 3, 4, 5' },
        { input: '', expectedOutput: '1, 2, 3, 4, 5' },
      ],
      hints: [
        '"카운트" 변수를 1로 시작하세요',
        '5번 반복 블록을 사용하세요',
        '반복 안에서 카운트를 말하고 1씩 증가시키세요'
      ],
    },
    {
      id: 'u2-w12-6',
      title: '두 수 교환하기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 15,
      concept: '임시 변수',
      conceptExplanation: `두 변수의 값을 바꾸려면 임시 변수가 필요해요. 컵 A의 물과 컵 B의 물을 바꾸려면 빈 컵 C가 필요한 것처럼요. A를 C에 붓고, B를 A에 붓고, C를 B에 부으면 완성! 프로그래밍에서도 똑같아요. "임시" 변수에 값을 잠깐 저장했다가 교환하는 거죠. 정렬 알고리즘이나 값을 뒤집는 프로그램에서 자주 사용하는 중요한 기법입니다!`,
      starterCode: `# "숫자1" = 10, "숫자2" = 20을 만들고
# 두 값을 교환한 후 숫자1 말하기
# (결과: 20)

`,
      testCases: [
        { input: '', expectedOutput: '20' },
        { input: '', expectedOutput: '20' },
        { input: '', expectedOutput: '20' },
        { input: '', expectedOutput: '20' },
      ],
      hints: [
        '임시 변수를 만드세요',
        '숫자1을 임시에 저장하세요',
        '숫자2를 숫자1에, 임시를 숫자2에 넣으세요'
      ],
    },
    {
      id: 'u2-w12-7',
      title: '최댓값 찾기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '조건과 변수',
      conceptExplanation: `여러 숫자 중 가장 큰 수를 찾으려면 변수와 조건문을 함께 써요. "최댓값" 변수를 만들고, 새로운 숫자를 확인할 때마다 "지금 수가 최댓값보다 크면 최댓값을 그 수로 바꾸기"를 해요. 이렇게 하나씩 비교하다 보면 마지막에 가장 큰 수가 남죠. 게임에서 최고 점수를 기록하거나, 가장 비싼 상품을 찾을 때 이 방법을 사용해요!`,
      starterCode: `# 숫자 10, 25, 15, 30, 20 중에서
# 가장 큰 수를 찾아 말하기
# 힌트: "최댓값" 변수 사용

`,
      testCases: [
        { input: '', expectedOutput: '30' },
        { input: '', expectedOutput: '30' },
        { input: '', expectedOutput: '30' },
        { input: '', expectedOutput: '30' },
      ],
      hints: [
        '"최댓값" 변수를 0으로 시작하세요',
        '각 숫자를 확인하면서 최댓값보다 크면 교체하세요',
        '조건문으로 "숫자 > 최댓값"을 확인하세요'
      ],
    },
    {
      id: 'u2-w12-8',
      title: '평균 계산기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 90,
      estimatedMinutes: 16,
      concept: '누적 계산',
      conceptExplanation: `여러 숫자의 평균을 구하려면 먼저 모든 수를 더해야 해요. "합계" 변수를 0으로 시작해서 숫자를 하나씩 더하는 거죠. 그 다음 합계를 개수로 나누면 평균이 나와요. 10, 20, 30의 평균은 (10+20+30)÷3 = 20이 되는 것처럼요. 시험 점수 평균을 내거나 온도의 평균을 구할 때 이런 방식을 사용합니다. 누적 계산은 데이터 분석의 기초예요!`,
      starterCode: `# 점수 80, 90, 70의 평균을 구해서 말하기
# 힌트: 합계 변수 사용

`,
      testCases: [
        { input: '', expectedOutput: '80' },
        { input: '', expectedOutput: '80' },
        { input: '', expectedOutput: '80' },
        { input: '', expectedOutput: '80' },
      ],
      hints: [
        '"합계" 변수를 0으로 시작하세요',
        '각 점수를 합계에 더하세요',
        '마지막에 합계를 3으로 나누세요'
      ],
    },
    {
      id: 'u2-w12-9',
      title: '타이머 만들기',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 18,
      concept: '시간 변수',
      conceptExplanation: `타이머는 시간을 세는 변수예요. "남은시간" 변수를 10으로 시작해서 1초마다 1씩 줄이면 카운트다운 타이머가 되죠. 0이 되면 "시간 종료!"라고 알려줄 수 있어요. 게임에서 제한 시간을 표시하거나, 요리 타이머를 만들거나, 스톱워치를 만들 때 사용해요. 반복, 조건, 대기 블록을 모두 활용하는 종합적인 프로그램입니다!`,
      starterCode: `# "남은시간" 5초부터 카운트다운
# 매초마다 현재 시간 말하기
# 0이 되면 "끝!" 말하기

`,
      testCases: [
        { input: '', expectedOutput: '5, 4, 3, 2, 1, 끝!' },
        { input: '', expectedOutput: '5, 4, 3, 2, 1, 끝!' },
        { input: '', expectedOutput: '5, 4, 3, 2, 1, 끝!' },
        { input: '', expectedOutput: '5, 4, 3, 2, 1, 끝!' },
      ],
      hints: [
        '"남은시간" 변수를 5로 시작하세요',
        '5번 반복하면서 시간을 말하고 1초 기다린 후 1씩 감소하세요',
        '반복이 끝나면 "끝!"을 말하세요'
      ],
    },
    {
      id: 'u2-w12-10',
      title: '종합: 간단한 RPG 스탯',
      description: '미션 설명',
      type: 'coding',
      difficulty: 'intermediate',
      exp: 100,
      estimatedMinutes: 20,
      concept: '변수 종합 활용',
      conceptExplanation: `RPG 게임의 캐릭터 능력치를 변수로 관리해봐요! HP(체력), MP(마나), 공격력, 방어력 같은 여러 변수를 만들고 관리하는 거죠. 몬스터를 잡으면 HP가 줄고, 포션을 먹으면 HP가 회복되고, 레벨업하면 능력치가 올라가는 것처럼요. 여러 변수를 동시에 다루고, 계산하고, 조건에 따라 바꾸는 종합적인 프로그램이에요. 이것을 완성하면 실제 게임 시스템의 기초를 이해하게 됩니다!`,
      starterCode: `# RPG 캐릭터 만들기
# HP=100, MP=50, 공격력=10
# 몬스터 공격: HP-15, MP-5
# 포션 사용: HP+20
# 최종 HP 말하기 (결과: 105)

`,
      testCases: [
        { input: '', expectedOutput: '105' },
        { input: '', expectedOutput: '105' },
        { input: '', expectedOutput: '105' },
        { input: '', expectedOutput: '105' },
      ],
      hints: [
        'HP, MP, 공격력 변수를 만드세요',
        '몬스터 공격으로 HP-15, MP-5',
        '포션으로 HP+20 한 후 최종 HP 말하기'
      ],
    },
  ]
};

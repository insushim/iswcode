import type { Unit } from '../../types';

// Unit 4: Python 심화 (25-30주차)
// CSTA 표준: 1B-AP-12, 1B-AP-13, 1B-AP-14, 1B-AP-15, 1B-AP-16, 2-AP-13
// 리스트, 딕셔너리, 함수, 파일, 에러 처리

export const unit4: Unit = {
  id: 'unit-4',
  number: 4,
  title: 'Python 심화',
  description: '리스트, 딕셔너리, 함수로 더 강력한 프로그램을 만들어요',
  icon: '🔥',
  color: '#ef4444',
  unlockLevel: 25,
  totalMissions: 60,
  estimatedHours: 24,
  weeks: [
    // Week 25: 리스트 심화
    {
      id: 'week-25',
      number: 25,
      title: '리스트 마스터',
      description: '여러 데이터를 하나로 모아 관리해요',
      missions: [
        {
          id: '4-25-1',
          title: '리스트 복습',
          description: '리스트의 기본 개념을 복습해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '리스트 기본 복습',
          cstaStandard: '1B-AP-13',
          learningObjectives: [
            '리스트가 여러 값을 순서대로 저장하는 자료구조임을 이해한다',
            '리스트의 인덱스가 0부터 시작함을 설명할 수 있다',
            '리스트를 활용하여 관련된 데이터를 효율적으로 관리할 수 있다'
          ],
          realWorldExample: '쇼핑 목록 앱에서 여러 물건을 리스트로 저장하고, 순서대로 보여주며, 원하는 항목을 찾을 수 있어요!',
          conceptCards: [
            {
              title: '리스트란?',
              description: '여러 값을 순서대로 저장하는 컨테이너',
              icon: '📦',
              example: 'fruits = ["사과", "바나나", "포도"]'
            },
            {
              title: '인덱스',
              description: '리스트의 각 위치를 나타내는 번호 (0부터 시작)',
              icon: '🔢',
              example: 'fruits[0] → "사과", fruits[1] → "바나나"'
            },
            {
              title: '활용 예시',
              description: '게임 점수 목록, 할 일 목록, 학생 명단 등',
              icon: '🎯',
              example: 'scores = [85, 90, 78, 92]'
            }
          ],
          hints: [
            '💡 힌트 1: 리스트는 여러 값을 순서대로 저장하는 자료구조예요',
            '💡 힌트 2: [값1, 값2, 값3] 형식으로 만들어요',
            '💡 힌트 3: 인덱스는 0부터 시작해요 - 첫 번째 요소는 [0]이에요'
          ],
          challenges: [
            {
              id: "c1",
              title: '리스트 생성과 인덱싱',
              description: '3개의 과일을 담은 리스트를 만들고 두 번째 과일을 출력하세요.',
              difficulty: "easy",
              hints: [
                '리스트는 [값1, 값2, 값3]',
                '인덱스는 0부터 시작',
              ],
              estimatedMinutes: 3,
              starterCode: 'fruits = ___\nprint(fruits[___])  # 두 번째 과일',
              solution: 'fruits = [\'사과\', \'바나나\', \'포도\"]\nprint(fruits[1])',
              testCases: [
                { input: 'fruits[1]', expected: '바나나' },
                { input: '[10,20,30][1]', expected: '20' },
                { input: '[1,2,3][0]', expected: '1' },
                { input: '[1,2,3][2]', expected: '3' },
                { input: '[\'a\',\'b\"][0]', expected: 'a' },
              ],
              feedback: {
                perfect: '리스트와 인덱싱을 정확히 이해했어요!',
                good: '리스트 생성 문법을 잘 이해했어요! 다양한 자료형도 넣어보세요.',
                partial: '리스트는 만들었는데, 인덱스 접근 부분을 다시 확인해보세요.',
                wrong: 'fruits[1]이 두 번째 요소예요.',
              },
            },
            {
              id: "c2",
              title: '음수 인덱스 활용',
              description: '마지막 요소와 뒤에서 두 번째 요소를 음수 인덱스로 출력하세요.',
              difficulty: "easy",
              hints: [
                '음수 인덱스는 뒤에서부터',
                '-1이 마지막 요소',
              ],
              estimatedMinutes: 3,
              starterCode: 'nums = [10, 20, 30, 40, 50]\nprint(nums[___])  # 50\nprint(nums[___])  # 40',
              solution: 'print(nums[-1])\nprint(nums[-2])',
              testCases: [
                { input: '[10,20,30,40,50][-1]', expected: '50' },
                { input: '[10,20,30,40,50][-2]', expected: '40' },
                { input: '[1,2,3][-1]', expected: '3' },
                { input: '[\'a\',\'b\"][-1]', expected: 'b' },
                { input: '[99][-1]', expected: '99' },
              ],
              feedback: {
                perfect: '음수 인덱스를 완벽히 이해했어요!',
                good: '음수 인덱스를 잘 활용했어요! 슬라이싱에서도 쓸 수 있어요.',
                partial: '음수 인덱스의 방향을 다시 생각해보세요. -1이 마지막이에요.',
                wrong: '-1=마지막, -2=뒤에서 두 번째예요.',
              },
            },
            {
              id: "c3",
              title: '리스트 길이와 반복문',
              description: 'len()으로 길이를 구하고 for문으로 모든 요소를 출력하세요.',
              difficulty: "easy",
              hints: [
                'len()으로 길이',
                'for item in list: 로 반복',
              ],
              estimatedMinutes: 4,
              starterCode: 'colors = [\'빨강\', \'파랑\', \'초록\"]\nprint(f\'개수: {len(___)}\') \nfor ___ in colors:\n    print(c)',
              solution: 'print(f\'개수: {len(colors)}\')\nfor c in colors:\n    print(c)',
              testCases: [
                { input: 'len([\'빨강\',\'파랑\',\'초록\"])', expected: '3' },
                { input: 'len([])', expected: '0' },
                { input: 'len([1])', expected: '1' },
                { input: 'len(list(range(10)))', expected: '10' },
                { input: 'len([\'a\',\'b\',\'c\',\'d\"])', expected: '4' },
              ],
              feedback: {
                perfect: 'len()과 for문을 잘 사용했어요!',
                good: 'len()과 for문의 조합을 잘 사용했어요! range(len())도 연습해보세요.',
                partial: 'len()은 맞는데 for문 변수 이름을 다시 확인해보세요.',
                wrong: 'len(리스트)로 길이, for item in 리스트: 로 반복',
              },
            },
            {
              id: "c4",
              title: '리스트에 요소 추가/제거',
              description: '쇼핑 목록에 \'우유\'를 추가하고 \'빵\'을 제거하세요.',
              difficulty: "medium",
              hints: [
                'append()로 끝에 추가',
                'remove()로 값 지정하여 제거',
              ],
              estimatedMinutes: 5,
              starterCode: 'shop = [\'사과\', \'빵\', \'계란\"]\nshop.___(\'우유\')\nshop.___(\'빵\')\nprint(shop)',
              solution: 'shop.append(\'우유\')\nshop.remove(\'빵\')',
              testCases: [
                { input: '결과', expected: '[\'사과\', \'계란\', \'우유\"]' },
                { input: 'len(결과)', expected: '3' },
                { input: '[1,2].append(3)', expected: '[1,2,3]' },
                { input: '[1,2,3].remove(2)', expected: '[1,3]' },
                { input: '[\'a\',\'b\"].append(\'c\')', expected: '[\'a\',\'b\',\'c\"]' },
              ],
              feedback: {
                perfect: 'append와 remove를 정확히 사용했어요!',
                good: 'append와 remove를 잘 구분했어요! insert도 알아두면 좋아요.',
                partial: '추가는 맞는데 제거 메서드 이름을 다시 확인해보세요.',
                wrong: 'append()는 추가, remove()는 제거',
              },
            },
            {
              id: "c5",
              title: 'in 연산자로 검색',
              description: '과일이 리스트에 있는지 in 연산자로 확인하세요.',
              difficulty: "medium",
              hints: [
                'if 값 in 리스트:',
                'not in도 가능',
              ],
              estimatedMinutes: 5,
              starterCode: 'fruits = [\'사과\', \'바나나\', \'포도\"]\nfruit = \'바나나\'\nif ___ ___ fruits:\n    print(\'있습니다!\')',
              solution: 'if fruit in fruits:\n    print(\'있습니다!\')',
              testCases: [
                { input: '\'바나나\' in [\'사과\',\'바나나\"]', expected: 'True' },
                { input: '\'수박\' in [\'사과\',\'바나나\"]', expected: 'False' },
                { input: '3 in [1,2,3,4]', expected: 'True' },
                { input: '5 not in [1,2,3]', expected: 'True' },
                { input: '\'\' in [\'a\',\'b\"]', expected: 'False' },
              ],
              feedback: {
                perfect: 'in 연산자를 완벽히 이해했어요!',
                good: 'in 연산자를 정확하게 사용했어요! not in도 활용해보세요.',
                partial: 'in의 위치를 다시 확인해보세요. 값 in 리스트 순서예요.',
                wrong: 'if 값 in 리스트: 형태로 사용',
              },
            },
            {
              id: "c6",
              title: 'enumerate로 인덱스와 값',
              description: 'enumerate로 번호와 함께 학생 이름을 출력하세요.',
              difficulty: "medium",
              hints: [
                'for i, item in enumerate(list):',
                'i는 0부터 시작',
              ],
              estimatedMinutes: 6,
              starterCode: 'students = [\'김철수\', \'이영희\', \'박민수\"]\nfor ___, ___ in enumerate(students):\n    print(f\'{i+1}번: {name}\')',
              solution: 'for i, name in enumerate(students):\n    print(f\'{i+1}번: {name}\')',
              testCases: [
                { input: 'list(enumerate([\'a\',\'b\',\'c\"]))', expected: '[(0,\'a\'),(1,\'b\'),(2,\'c\')]' },
                { input: 'list(enumerate([\'x\"],start=1))', expected: '[(1,\'x\')]' },
                { input: 'list(enumerate([]))', expected: '[]' },
                { input: 'list(enumerate([10,20]))[0]', expected: '(0, 10)' },
                { input: 'len(list(enumerate([1,2,3])))', expected: '3' },
              ],
              feedback: {
                perfect: 'enumerate를 멋지게 활용했어요!',
                good: 'enumerate를 잘 활용했어요! start 매개변수도 써보세요.',
                partial: 'enumerate의 반환값은 (인덱스, 값) 쌍이에요. 언패킹을 확인하세요.',
                wrong: 'for i, item in enumerate(리스트):',
              },
            },
            {
              id: "c7",
              title: '리스트 정렬',
              description: '점수를 오름차순과 내림차순으로 정렬하세요.',
              difficulty: "medium",
              hints: [
                'sort()는 원본 변경',
                'sorted()는 새 리스트 반환',
              ],
              estimatedMinutes: 7,
              starterCode: 'scores = [85, 92, 78, 96, 88]\nasc = sorted(scores)\ndesc = sorted(scores, reverse=___)',
              solution: 'asc = sorted(scores)\ndesc = sorted(scores, reverse=True)',
              testCases: [
                { input: 'sorted([85,92,78,96,88])', expected: '[78,85,88,92,96]' },
                { input: 'sorted([85,92,78],reverse=True)', expected: '[96,92,88,85,78]' },
                { input: 'sorted([3,1,2])', expected: '[1,2,3]' },
                { input: 'sorted([])', expected: '[]' },
                { input: 'sorted([1])', expected: '[1]' },
              ],
              feedback: {
                perfect: '정렬을 완벽히 이해했어요!',
                good: '정렬 함수를 잘 구분했어요! key 매개변수도 배워보세요.',
                partial: 'sort()와 sorted()의 차이를 다시 비교해보세요.',
                wrong: 'sorted()는 새 리스트, sort()는 원본 변경',
              },
            },
            {
              id: "c8",
              title: '리스트 합치기와 복사',
              description: '두 리스트를 합치고 안전하게 복사하세요.',
              difficulty: "hard",
              hints: [
                '+로 합치기',
                '.copy()로 안전한 복사',
              ],
              estimatedMinutes: 8,
              starterCode: 'a = [1,2,3]; b = [4,5,6]\ncombined = a ___ b\nc = a.copy()\nc.append(99)\nprint(a)  # [1,2,3] 원본 불변',
              solution: 'combined = a + b\nc = a.copy(); c.append(99)',
              testCases: [
                { input: '[1,2]+[3,4]', expected: '[1,2,3,4]' },
                { input: 'a=[1,2]; b=a.copy(); b.append(3); a', expected: '[1,2]' },
                { input: 'a=[1]; b=a; b.append(2); a', expected: '[1,2]' },
                { input: '[]+[1,2]', expected: '[1,2]' },
                { input: '[1,2,3].copy()', expected: '[1,2,3]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'b=a는 복사가 아니라 같은 객체 참조', suggestion: 'b=a는 복사가 아니라 같은 객체 참조' },
                { pattern: '일반', message: 'append와 +의 차이를 혼동', suggestion: 'append와 +의 차이를 혼동' },
              ],
              feedback: {
                perfect: '합치기와 복사를 완벽히 이해했어요!',
                good: '+연산자와 copy()를 잘 이해했어요! extend()도 알아두세요.',
                partial: '합치기는 맞는데, copy()와 = 할당의 차이를 다시 확인하세요.',
                wrong: 'b=a는 같은 객체, b=a.copy()는 새 객체',
              },
            },
            {
              id: "c9",
              title: '내장함수: max/min/sum/평균',
              description: '온도 데이터에서 최고, 최저, 평균을 구하세요.',
              difficulty: "hard",
              hints: [
                'max(), min(), sum()',
                '평균 = sum(list)/len(list)',
              ],
              estimatedMinutes: 10,
              starterCode: 'temps = [23, 28, 19, 31, 25]\nprint(f\'최고: {___(temps)}도\')\nprint(f\'최저: {___(temps)}도\')\nprint(f\'평균: {sum(temps)/len(temps):.1f}도\')',
              solution: 'max(temps), min(temps), sum(temps)/len(temps)',
              testCases: [
                { input: 'max([23,28,19,31,25])', expected: '31' },
                { input: 'min([23,28,19,31,25])', expected: '19' },
                { input: 'sum([10,20,30])/3', expected: '20.0' },
                { input: 'max([1])', expected: '1' },
                { input: 'sum([])', expected: '0' },
              ],
              feedback: {
                perfect: '내장 함수를 완벽히 활용했어요!',
                good: '내장 함수를 정확히 활용했어요! 빈 리스트 예외도 생각해보세요.',
                partial: 'max, min은 맞는데 평균 계산 공식을 다시 확인해보세요.',
                wrong: 'max(), min(), sum(), len()을 활용하세요.',
              },
            },
            {
              id: "c10",
              title: '종합: 성적 분석기',
              description: '합격자(60점 이상)를 필터링하고 통계를 출력하세요.',
              difficulty: "hard",
              hints: [
                'for + if + append 패턴',
                '빈 리스트 체크 후 평균',
              ],
              estimatedMinutes: 12,
              starterCode: 'scores = [45,78,92,33,67,88,55,71]\npassed = []\nfor s in scores:\n    if s >= 60:\n        passed.append(s)\nprint(f\'합격: {len(passed)}명\')\nif passed:\n    print(f\'평균: {sum(passed)/len(passed):.1f}점\')',
              solution: 'passed = [s for s in scores if s>=60]',
              testCases: [
                { input: '[s for s in [45,78,92,33,67] if s>=60]', expected: '[78,92,67]' },
                { input: 'len([s for s in [100,0,50,60] if s>=60])', expected: '2' },
                { input: 'sum([78,92,67])/3', expected: '79.0' },
                { input: '[s for s in [] if s>=60]', expected: '[]' },
                { input: '[s for s in [100] if s>=60]', expected: '[100]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '빈 리스트 평균 시 ZeroDivisionError', suggestion: '빈 리스트 평균 시 ZeroDivisionError' },
                { pattern: '일반', message: '>=가 아니라 > 쓰면 60점이 불합격', suggestion: '>=가 아니라 > 쓰면 60점이 불합격' },
              ],
              feedback: {
                perfect: '리스트 종합 실력이 뛰어나요!',
                good: '필터링과 통계를 잘 조합했어요! 리스트 컴프리헨션도 시도해보세요.',
                partial: '필터링 로직은 맞는데, 빈 리스트 체크를 추가해보세요.',
                wrong: 'for + if + append 패턴을 복습하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-2',
          title: '리스트 슬라이싱',
          description: '리스트의 일부분만 잘라내 봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '슬라이싱 문법',
          conceptExplanation: `
리스트 슬라이싱은 리스트의 일부분을 쉽게 추출하는 강력한 기능입니다.
[시작:끝:간격] 문법으로 원하는 범위를 지정하면 새로운 리스트가 생성됩니다.
데이터 분석에서 특정 구간의 데이터를 추출하거나, 문자열 처리에서 필요한 부분만 가져올 때 매우 유용합니다.
예: 월별 매출 데이터에서 최근 3개월치만 분석하거나, 페이지네이션 구현 시 활용됩니다.
`,
          starterCode: 'numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# 처음 3개 가져오기\nprint(numbers[:3])  # [0, 1, 2]\n\n# 마지막 3개 가져오기\nprint(numbers[-3:])  # [7, 8, 9]\n\n# 짝수 인덱스만 가져오기 (간격 2)\nprint(numbers[::2])  # [0, 2, 4, 6, 8]\n\n# 역순으로 뒤집기\nprint(numbers[::-1])  # [9, 8, 7, ...]\n',
          hints: [
            '💡 힌트 1: [시작:끝:간격] 형식이에요 - 끝 인덱스는 포함되지 않아요',
            '💡 힌트 2: 시작 생략하면 처음부터, 끝 생략하면 끝까지',
            '💡 힌트 3: 음수 인덱스는 뒤에서부터 세요 (-1이 마지막 요소)'
          ],
          commonMistakes: [
            '끝 인덱스가 포함된다고 착각 - [0:3]은 0,1,2만 포함하고 3은 제외',
            '음수 인덱스 혼동 - numbers[-1]은 마지막 요소, numbers[-2]는 끝에서 두 번째',
            '간격을 음수로 주면 역순 - [::-1]은 리스트를 뒤집어요'
          ],
          challenges: [
            {
              id: "c1",
              title: '처음 N개와 마지막 N개',
              description: '리스트에서 처음 3개와 마지막 2개를 슬라이싱으로 추출하세요.',
              difficulty: "easy",
              hints: [
                '[:3]은 처음 3개',
                '[-2:]는 마지막 2개',
              ],
              estimatedMinutes: 3,
              starterCode: 'def first_n(lst, n):\n    return lst[:___]\ndef last_n(lst, n):\n    return lst[-___:]',
              solution: 'def first_n(lst,n): return lst[:n]\ndef last_n(lst,n): return lst[-n:]',
              testCases: [
                { input: 'first_n([10,20,30,40,50],3)', expected: '[10,20,30]' },
                { input: 'last_n([10,20,30,40,50],2)', expected: '[40,50]' },
                { input: 'first_n([1,2],5)', expected: '[1,2]' },
                { input: 'last_n([1],1)', expected: '[1]' },
                { input: 'first_n([],3)', expected: '[]' },
              ],
              feedback: {
                perfect: '기본 슬라이싱 완벽!',
                good: '슬라이싱의 기본 문법을 잘 활용했어요! 음수 인덱스 조합도 연습하세요.',
                partial: '[:n]은 맞는데, [-n:]의 의미를 다시 생각해보세요.',
                wrong: '[:n]은 처음 n개, [-n:]은 마지막 n개',
              },
            },
            {
              id: "c2",
              title: '짝수/홀수 인덱스 분리',
              description: '간격 슬라이싱으로 짝수/홀수 인덱스를 분리하세요.',
              difficulty: "easy",
              hints: [
                '[::2]는 짝수 인덱스',
                '[1::2]는 홀수 인덱스',
              ],
              estimatedMinutes: 4,
              starterCode: 'def split_idx(lst):\n    evens = lst[::___]\n    odds = lst[___::2]\n    return evens, odds',
              solution: 'def split_idx(lst): return lst[::2], lst[1::2]',
              testCases: [
                { input: 'split_idx([\'a\',\'b\',\'c\',\'d\"])[0]', expected: '[\'a\',\'c\"]' },
                { input: 'split_idx([\'a\',\'b\',\'c\',\'d\"])[1]', expected: '[\'b\',\'d\"]' },
                { input: 'split_idx([1,2,3])[0]', expected: '[1,3]' },
                { input: 'split_idx([1])[1]', expected: '[]' },
                { input: 'split_idx([])[0]', expected: '[]' },
              ],
              feedback: {
                perfect: '간격 슬라이싱 완벽!',
                good: '스텝(step)을 잘 활용했어요! 다양한 간격도 시도해보세요.',
                partial: '스텝의 시작 위치를 다시 확인해보세요. [::2]와 [1::2]의 차이예요.',
                wrong: '[::2]=0,2,4... [1::2]=1,3,5...',
              },
            },
            {
              id: "c3",
              title: '리스트 뒤집기',
              description: '[::-1]로 리스트와 문자열을 뒤집으세요.',
              difficulty: "easy",
              hints: [
                '[::-1]은 전체 역순',
              ],
              estimatedMinutes: 4,
              starterCode: 'def reverse_it(data):\n    return data[___]',
              solution: 'def reverse_it(data): return data[::-1]',
              testCases: [
                { input: 'reverse_it([1,2,3,4,5])', expected: '[5,4,3,2,1]' },
                { input: 'reverse_it(\'hello\')', expected: 'olleh' },
                { input: 'reverse_it([1])', expected: '[1]' },
                { input: 'reverse_it(\'\')', expected: '' },
                { input: 'reverse_it(\'abcde\')', expected: 'edcba' },
              ],
              feedback: {
                perfect: '뒤집기 완벽!',
                good: '[::-1] 슬라이싱을 완벽히 이해했어요! reversed()도 알아두세요.',
                partial: '역순 슬라이싱의 스텝을 다시 확인해보세요. -1이 핵심이에요.',
                wrong: '[::-1]은 전체 역순',
              },
            },
            {
              id: "c4",
              title: '구간 추출 함수',
              description: '주어진 시작/끝으로 부분 리스트를 추출하세요.',
              difficulty: "medium",
              hints: [
                'lst[start:end]',
                'end는 미포함',
              ],
              estimatedMinutes: 6,
              starterCode: 'def extract(lst, start, end):\n    return lst[___:___]',
              solution: 'def extract(lst,s,e): return lst[s:e]',
              testCases: [
                { input: 'extract([0,10,20,30,40],1,4)', expected: '[10,20,30]' },
                { input: 'extract([0,10,20,30],0,2)', expected: '[0,10]' },
                { input: 'extract([0,10,20],0,10)', expected: '[0,10,20]' },
                { input: 'extract([],0,0)', expected: '[]' },
                { input: 'extract([1,2,3],1,1)', expected: '[]' },
              ],
              feedback: {
                perfect: '구간 추출 정확!',
                good: '구간 추출을 잘 구현했어요! end 인덱스가 미포함인 점을 기억하세요.',
                partial: 'start:end에서 end가 포함되지 않는 점을 다시 확인해보세요.',
                wrong: 'lst[start:end]에서 end는 미포함',
              },
            },
            {
              id: "c5",
              title: '페이지네이션 구현',
              description: '리스트를 페이지 단위로 나누세요.',
              difficulty: "medium",
              hints: [
                '시작=(page-1)*per_page',
                '끝=start+per_page',
              ],
              estimatedMinutes: 8,
              starterCode: 'def get_page(items, page, per_page=3):\n    start = (page-1) * per_page\n    return items[start:start+per_page]',
              solution: 'def get_page(items,page,pp=3):\n    s=(page-1)*pp; return items[s:s+pp]',
              testCases: [
                { input: 'get_page(list(range(1,11)),1,3)', expected: '[1,2,3]' },
                { input: 'get_page(list(range(1,11)),2,3)', expected: '[4,5,6]' },
                { input: 'get_page(list(range(1,11)),4,3)', expected: '[10]' },
                { input: 'get_page([1,2,3,4,5],1,2)', expected: '[1,2]' },
                { input: 'get_page([1,2,3],10,3)', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'page=0이면 음수 인덱스', suggestion: 'page=0이면 음수 인덱스' },
                { pattern: '일반', message: '마지막 페이지는 per_page보다 적을 수 있음', suggestion: '마지막 페이지는 per_page보다 적을 수 있음' },
              ],
              feedback: {
                perfect: '페이지네이션 멋져요!',
                good: '페이지 계산을 정확히 구현했어요! 실제 웹에서도 이렇게 해요.',
                partial: '시작 인덱스 계산을 다시 해보세요. (page-1)*per_page가 핵심이에요.',
                wrong: 'start=(page-1)*per_page',
              },
            },
            {
              id: "c6",
              title: '회문 검사기',
              description: '문자열이 앞뒤로 같은지 슬라이싱으로 검사하세요.',
              difficulty: "medium",
              hints: [
                '[::-1]로 뒤집어 비교',
                '대소문자/공백 처리',
              ],
              estimatedMinutes: 8,
              starterCode: 'def is_palindrome(text):\n    clean = text.lower().replace(\' \',\'\')\n    return clean == clean[::-1]',
              solution: 'def is_palindrome(t):\n    c=t.lower().replace(\' \',\'\'); return c==c[::-1]',
              testCases: [
                { input: 'is_palindrome(\'level\')', expected: 'True' },
                { input: 'is_palindrome(\'racecar\')', expected: 'True' },
                { input: 'is_palindrome(\'hello\')', expected: 'False' },
                { input: 'is_palindrome(\'Was It A Rat I Saw\')', expected: 'True' },
                { input: 'is_palindrome(\'\')', expected: 'True' },
              ],
              commonErrors: [
                { pattern: '일반', message: '대소문자 미처리 시 \'Level\'이 False', suggestion: '대소문자 미처리 시 \'Level\'이 False' },
                { pattern: '일반', message: '.lower()와 .replace 필수', suggestion: '.lower()와 .replace 필수' },
              ],
              feedback: {
                perfect: '회문 검사 멋져요!',
                good: '슬라이싱으로 회문 검사를 잘 구현했어요! 대소문자 처리도 생각해보세요.',
                partial: '문자열 뒤집기와 비교하는 로직을 다시 확인해보세요.',
                wrong: 'clean[::-1]로 비교',
              },
            },
            {
              id: "c7",
              title: '리스트 회전',
              description: '리스트를 n칸 오른쪽으로 회전하세요.',
              difficulty: "medium",
              hints: [
                'lst[-n:]+lst[:-n]',
                'n%len(lst)로 조정',
              ],
              estimatedMinutes: 10,
              starterCode: 'def rotate(lst, n):\n    if not lst: return []\n    n = n % len(lst)\n    return lst[-n:] + lst[:-n]',
              solution: 'def rotate(lst,n):\n    if not lst: return []\n    n=n%len(lst); return lst[-n:]+lst[:-n]',
              testCases: [
                { input: 'rotate([1,2,3,4,5],2)', expected: '[4,5,1,2,3]' },
                { input: 'rotate([1,2,3,4,5],1)', expected: '[5,1,2,3,4]' },
                { input: 'rotate([1,2,3],3)', expected: '[1,2,3]' },
                { input: 'rotate([1,2,3],5)', expected: '[2,3,1]' },
                { input: 'rotate([],3)', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '빈 리스트 %연산 시 ZeroDivisionError', suggestion: '빈 리스트 %연산 시 ZeroDivisionError' },
                { pattern: '일반', message: 'n=0일 때 특별 처리', suggestion: 'n=0일 때 특별 처리' },
              ],
              feedback: {
                perfect: '회전 멋져요!',
                good: '리스트 회전을 슬라이싱으로 잘 해결했어요! deque의 rotate도 알아보세요.',
                partial: '슬라이싱 분할 지점을 다시 계산해보세요. 인덱스를 그려보면 도움돼요.',
                wrong: 'lst[-n:]+lst[:-n]',
              },
            },
            {
              id: "c8",
              title: '이동 평균 계산',
              description: '데이터의 이동 평균을 슬라이싱으로 계산하세요.',
              difficulty: "hard",
              hints: [
                'data[i:i+window]로 구간',
                'range(len(data)-window+1)',
              ],
              estimatedMinutes: 12,
              starterCode: 'def moving_avg(data, w):\n    return [round(sum(data[i:i+w])/w,1)\n            for i in range(len(data)-w+1)]',
              solution: 'def moving_avg(d,w):\n    return [round(sum(d[i:i+w])/w,1) for i in range(len(d)-w+1)]',
              testCases: [
                { input: 'moving_avg([100,120,130,110,140],3)', expected: '[116.7,120.0,126.7]' },
                { input: 'moving_avg([1,2,3,4,5],2)', expected: '[1.5,2.5,3.5,4.5]' },
                { input: 'moving_avg([10,10,10],3)', expected: '[10.0]' },
                { input: 'moving_avg([1,2,3,4,5],1)', expected: '[1.0,2.0,3.0,4.0,5.0]' },
                { input: 'moving_avg([1,2,3,4,5],5)', expected: '[3.0]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'range 범위: len(data)-window+1', suggestion: 'range 범위: len(data)-window+1' },
                { pattern: '일반', message: 'window>len일 때 빈 리스트', suggestion: 'window>len일 때 빈 리스트' },
              ],
              feedback: {
                perfect: '이동 평균 멋져요!',
                good: '이동 평균을 정확히 계산했어요! 데이터 분석에서 자주 쓰이는 기법이에요.',
                partial: '윈도우 크기만큼의 구간을 슬라이싱하는 부분을 다시 확인하세요.',
                wrong: 'data[i:i+w]로 구간 평균',
              },
            },
            {
              id: "c9",
              title: '행렬 행/열 추출',
              description: '2차원 리스트에서 행과 열을 추출하세요.',
              difficulty: "hard",
              hints: [
                '행: matrix[row]',
                '열: [row[col] for row in matrix]',
              ],
              estimatedMinutes: 14,
              starterCode: 'def get_row(m,r): return m[r]\ndef get_col(m,c): return [row[c] for row in m]\ndef sub(m,r1,r2,c1,c2):\n    return [row[c1:c2] for row in m[r1:r2]]',
              solution: 'def get_row(m,r): return m[r]\ndef get_col(m,c): return [row[c] for row in m]\ndef sub(m,r1,r2,c1,c2): return [row[c1:c2] for row in m[r1:r2]]',
              testCases: [
                { input: 'get_row([[1,2,3],[4,5,6],[7,8,9]],1)', expected: '[4,5,6]' },
                { input: 'get_col([[1,2,3],[4,5,6],[7,8,9]],0)', expected: '[1,4,7]' },
                { input: 'sub([[1,2,3],[4,5,6],[7,8,9]],0,2,1,3)', expected: '[[2,3],[5,6]]' },
                { input: 'get_col([[1,2],[3,4]],1)', expected: '[2,4]' },
                { input: 'sub([[1,2,3],[4,5,6]],0,2,0,2)', expected: '[[1,2],[4,5]]' },
              ],
              feedback: {
                perfect: '행렬 슬라이싱 완벽!',
                good: '2차원 리스트에서 행과 열을 잘 추출했어요! numpy도 나중에 배워보세요.',
                partial: '행 추출은 맞는데, 열 추출 방법을 다시 생각해보세요.',
                wrong: '행=matrix[i], 열=[row[j] for row in matrix]',
              },
            },
            {
              id: "c10",
              title: '데이터 파이프라인 종합',
              description: '판매 데이터: 최근 N일, 상위 K개, 평균을 한 번에 분석하세요.',
              difficulty: "hard",
              hints: [
                '슬라이싱 체이닝',
                'sorted()+슬라이싱 조합',
              ],
              estimatedMinutes: 18,
              starterCode: 'def analyze(sales, days=7, top_k=3):\n    recent = sales[-days:]\n    top = sorted(recent, reverse=True)[:top_k]\n    avg = round(sum(recent)/len(recent),1) if recent else 0\n    return {\'recent\':recent,\'top\':top,\'avg\':avg}',
              solution: 'def analyze(s,d=7,k=3):\n    r=s[-d:]; return {\'recent\':r,\'top\':sorted(r,reverse=True)[:k],\'avg\':round(sum(r)/len(r),1) if r else 0}',
              testCases: [
                { input: 'analyze([10,20,30,40,50],3,2)[\'recent\"]', expected: '[30,40,50]' },
                { input: 'analyze([10,20,30,40,50],3,2)[\'top\"]', expected: '[50,40]' },
                { input: 'analyze([10,20,30,40,50],3,2)[\'avg\"]', expected: '40.0' },
                { input: 'analyze([100,100],2,1)[\'top\"]', expected: '[100]' },
                { input: 'len(analyze(list(range(100)),5,3)[\'top\"])', expected: '3' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'sorted()는 새 리스트(원본 불변)', suggestion: 'sorted()는 새 리스트(원본 불변)' },
                { pattern: '일반', message: '빈 리스트 평균 에러 방지', suggestion: '빈 리스트 평균 에러 방지' },
              ],
              feedback: {
                perfect: '파이프라인 완벽!',
                good: '슬라이싱을 종합적으로 잘 활용했어요! 실무에서도 이런 패턴을 써요.',
                partial: '개별 슬라이싱은 맞는데, 조합 순서를 다시 확인해보세요.',
                wrong: 'sorted(list,reverse=True)[:k]',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-3',
          title: '리스트 메서드 총정리',
          description: '자주 쓰는 리스트 메서드를 익혀요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '리스트 메서드',
          conceptExplanation: `
리스트 메서드는 리스트를 효율적으로 조작하는 내장 함수들입니다.
append()로 데이터 추가, remove()로 삭제, sort()로 정렬 등 다양한 작업이 가능합니다.
이 메서드들을 잘 활용하면 복잡한 데이터 관리를 쉽게 할 수 있습니다.
예: 쇼핑몰에서 장바구니 상품 추가/삭제, 게임 순위표 정렬, 투두리스트 관리 등에 사용됩니다.
`,
          starterCode: 'fruits = ["사과", "바나나", "포도"]\n\n# 추가\nfruits.append("딸기")       # 끝에 추가\nfruits.insert(1, "오렌지")  # 특정 위치에 추가\n\n# 제거\nfruits.remove("바나나")     # 값으로 제거\nlast = fruits.pop()         # 마지막 꺼내기\n\n# 정렬\nnums = [3, 1, 4, 1, 5, 9]\nnums.sort()                 # 오름차순 정렬\nnums.sort(reverse=True)     # 내림차순\n\n# 기타\nprint(len(nums))            # 길이\nprint(nums.count(1))        # 개수 세기\nprint(nums.index(5))        # 위치 찾기\n',
          hints: [
            '💡 힌트 1: append()는 끝에 추가, insert(위치, 값)는 특정 위치에 추가',
            '💡 힌트 2: remove(값)은 값으로 제거, pop()은 마지막 요소를 꺼내고 반환',
            '💡 힌트 3: sort()는 정렬(원본 변경), sorted()는 정렬된 새 리스트 반환'
          ],
          commonMistakes: [
            'append()에 여러 값을 주면 리스트 자체가 추가됨 - 대신 extend() 사용',
            'remove()는 첫 번째로 발견된 값만 제거 - 모든 값을 제거하려면 반복문 필요',
            'sort()는 None을 반환 - 정렬된 결과를 변수에 저장하려면 sorted() 사용',
            'pop()에 인덱스를 주지 않으면 마지막 요소를 제거'
          ],
          challenges: [
            {
              id: "c1",
              title: 'append와 insert',
              description: '끝에 추가하고 특정 위치에 삽입하세요.',
              difficulty: "easy",
              hints: [
                'append(값)=끝에',
                'insert(인덱스,값)=특정위치',
              ],
              estimatedMinutes: 3,
              starterCode: 'todo = [\'공부\',\'운동\"]\ntodo.append(\'독서\')\ntodo.insert(1,\'식사\')\nprint(todo)',
              solution: '# [\'공부\',\'식사\',\'운동\',\'독서\"]',
              testCases: [
                { input: '결과', expected: '[\'공부\',\'식사\',\'운동\',\'독서\"]' },
                { input: '[1,3].insert(1,2)', expected: '[1,2,3]' },
                { input: '[].append(1)', expected: '[1]' },
                { input: '[1,2].insert(0,\'a\')', expected: '[\'a\',1,2]' },
                { input: 'len(결과)', expected: '4' },
              ],
              feedback: {
                perfect: 'append와 insert 정확!',
                good: 'append와 insert의 차이를 잘 이해했어요! insert의 위치 지정이 핵심이에요.',
                partial: 'append는 끝에 추가, insert는 원하는 위치에 추가하는 차이를 확인하세요.',
                wrong: 'append(값)=끝, insert(위치,값)=지정위치',
              },
            },
            {
              id: "c2",
              title: 'remove와 pop',
              description: '값으로 제거(remove)와 인덱스로 꺼내기(pop)를 연습하세요.',
              difficulty: "easy",
              hints: [
                'remove(값)=첫 일치 제거',
                'pop()=마지막 꺼내기',
              ],
              estimatedMinutes: 4,
              starterCode: 'fruits = [\'사과\',\'바나나\',\'포도\',\'바나나\"]\nfruits.remove(\'바나나\')\nlast = fruits.pop()\nprint(last, fruits)',
              solution: 'fruits.remove(\'바나나\')\nlast = fruits.pop()',
              testCases: [
                { input: 'remove 후', expected: '[\'사과\',\'포도\',\'바나나\"]' },
                { input: 'pop() 반환', expected: '바나나' },
                { input: '[1,2,3].pop(0)', expected: '1' },
                { input: '[1,2,3].pop()', expected: '3' },
                { input: '최종', expected: '[\'사과\',\'포도\"]' },
              ],
              feedback: {
                perfect: 'remove와 pop 정확!',
                good: 'remove(값)와 pop(인덱스)를 정확히 구분했어요! pop의 반환값도 활용해보세요.',
                partial: 'remove는 값으로, pop은 인덱스로 제거하는 차이를 다시 확인하세요.',
                wrong: 'remove(값)=첫 일치, pop()=마지막 꺼내기',
              },
            },
            {
              id: "c3",
              title: 'sort vs sorted 차이',
              description: 'sort()와 sorted()의 차이를 이해하세요.',
              difficulty: "easy",
              hints: [
                'sort()=원본변경, None 반환',
                'sorted()=새리스트 반환',
              ],
              estimatedMinutes: 5,
              starterCode: 'nums = [3,1,4,1,5,9]\nsorted_nums = sorted(nums)\nnums.sort()',
              solution: 'sorted_nums = sorted(nums)  # 새 리스트\nnums.sort()  # 원본 변경',
              testCases: [
                { input: 'sorted([3,1,4,1,5,9])', expected: '[1,1,3,4,5,9]' },
                { input: 'sorted후 원본', expected: '[3,1,4,1,5,9]' },
                { input: '.sort() returns', expected: 'None' },
                { input: 'sorted(reverse=True)', expected: '[9,5,4,3,1,1]' },
                { input: 'sorted([])', expected: '[]' },
              ],
              feedback: {
                perfect: 'sort/sorted 차이 완벽!',
                good: 'sort()와 sorted()의 차이를 명확히 이해했어요! 원본 변경 여부가 핵심이에요.',
                partial: 'sort()는 원본을 변경하고, sorted()는 새 리스트를 반환해요.',
                wrong: 'sort()=원본변경, sorted()=새리스트',
              },
            },
            {
              id: "c4",
              title: 'count와 index',
              description: '특정 값의 개수와 위치를 찾으세요.',
              difficulty: "medium",
              hints: [
                'count(값)=출현횟수',
                'index(값)=첫번째 인덱스',
              ],
              estimatedMinutes: 6,
              starterCode: 'grades = [\'A\',\'B\',\'A\',\'C\',\'B\',\'A\',\'B\"]\nprint(grades.count(\'A\'))  # 3\nprint(grades.index(\'B\'))  # 1',
              solution: 'grades.count(\'A\')  # 3\ngrades.index(\'B\')  # 1',
              testCases: [
                { input: '.count(\'A\')', expected: '3' },
                { input: '.index(\'B\')', expected: '1' },
                { input: '[1,1,1].count(1)', expected: '3' },
                { input: '[1,2,3].count(4)', expected: '0' },
                { input: '[10,20,30].index(30)', expected: '2' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'index()에 없는 값=ValueError', suggestion: 'index()에 없는 값=ValueError' },
                { pattern: '일반', message: 'count()는 없으면 0', suggestion: 'count()는 없으면 0' },
              ],
              feedback: {
                perfect: 'count/index 정확!',
                good: 'count()와 index()를 잘 활용했어요! index는 없는 값이면 에러 나는 점도 기억하세요.',
                partial: 'count는 개수, index는 위치를 반환해요. 반환값을 다시 확인하세요.',
                wrong: 'count(값)=개수, index(값)=첫위치',
              },
            },
            {
              id: "c5",
              title: 'extend로 리스트 확장',
              description: 'append와 extend의 차이를 이해하세요.',
              difficulty: "medium",
              hints: [
                'append=요소 하나 추가',
                'extend=풀어서 추가',
              ],
              estimatedMinutes: 7,
              starterCode: 'a = [1,2,3]; a.append([4,5])   # [1,2,3,[4,5]]\nb = [1,2,3]; b.extend([4,5])   # [1,2,3,4,5]',
              solution: '# append: 리스트 자체를 추가\n# extend: 요소를 풀어서 추가',
              testCases: [
                { input: 'append([4,5]) 후', expected: '[1,2,3,[4,5]]' },
                { input: 'extend([4,5]) 후', expected: '[1,2,3,4,5]' },
                { input: 'append 후 len', expected: '4' },
                { input: 'extend 후 len', expected: '5' },
                { input: '[].extend([1,2,3])', expected: '[1,2,3]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'append([4,5])는 중첩 리스트가 됨', suggestion: 'append([4,5])는 중첩 리스트가 됨' },
                { pattern: '일반', message: 'extend는 iterable 요소를 하나씩 추가', suggestion: 'extend는 iterable 요소를 하나씩 추가' },
              ],
              feedback: {
                perfect: 'append/extend 차이 완벽!',
                good: 'extend()를 잘 사용했어요! append와의 차이를 잘 이해했네요.',
                partial: 'extend는 요소를 하나씩 추가하고, append는 전체를 하나로 추가해요.',
                wrong: 'append=그대로, extend=풀어서',
              },
            },
            {
              id: "c6",
              title: '장바구니 메서드 조합',
              description: '여러 메서드를 조합하여 장바구니를 관리하세요.',
              difficulty: "medium",
              hints: [
                'append=추가, remove=삭제',
                'count=중복확인, sort=정렬',
              ],
              estimatedMinutes: 10,
              starterCode: 'cart = []\ncart.append(\'사과\')\ncart.append(\'바나나\')\ncart.append(\'사과\')\nprint(cart.count(\'사과\'))  # 2\ncart.remove(\'사과\')\ncart.sort()\nprint(cart)',
              solution: '# count(\'사과\')=2 -> remove -> sort\n# 결과: [\'바나나\',\'사과\"]',
              testCases: [
                { input: 'count before remove', expected: '2' },
                { input: 'sort 후', expected: '[\'바나나\',\'사과\"]' },
                { input: 'len(최종)', expected: '2' },
                { input: '\'바나나\' in 결과', expected: 'True' },
                { input: 'count(\'사과\') 최종', expected: '1' },
              ],
              feedback: {
                perfect: '메서드 조합 멋져요!',
                good: '여러 메서드를 조합해서 잘 구현했어요! 실제 앱처럼 활용할 수 있어요.',
                partial: '개별 메서드는 맞는데, 호출 순서와 조합을 다시 정리해보세요.',
                wrong: '각 메서드 동작을 추적해보세요.',
              },
            },
            {
              id: "c7",
              title: 'key로 커스텀 정렬',
              description: 'sort(key=...)로 길이순, 절대값순 정렬하세요.',
              difficulty: "medium",
              hints: [
                'key=len 길이순',
                'key=abs 절대값순',
              ],
              estimatedMinutes: 10,
              starterCode: 'words = [\'banana\',\'pie\',\'strawberry\',\'kiwi\"]\nwords.sort(key=len)\n\nnums = [-5,3,-1,4,-2]\nnums.sort(key=abs)',
              solution: 'words.sort(key=len)\nnums.sort(key=abs)',
              testCases: [
                { input: 'sorted([\'banana\',\'pie\',\'kiwi\"],key=len)', expected: '[\'pie\',\'kiwi\',\'banana\"]' },
                { input: 'sorted([-5,3,-1,4],key=abs)', expected: '[-1,3,4,-5]' },
                { input: 'sorted([\'c\',\'aaa\',\'bb\"],key=len)', expected: '[\'c\',\'bb\',\'aaa\"]' },
                { input: 'sorted([3,-1,2],key=abs)', expected: '[-1,2,3]' },
                { input: 'sorted([\'B\',\'a\',\'C\"],key=str.lower)', expected: '[\'a\',\'B\',\'C\"]' },
              ],
              feedback: {
                perfect: '커스텀 정렬 완벽!',
                good: 'key 매개변수를 잘 활용했어요! lambda와 함께 쓰면 더 강력해요.',
                partial: 'key 함수가 각 요소에 적용되는 방식을 다시 생각해보세요.',
                wrong: 'sort(key=함수)로 기준 지정',
              },
            },
            {
              id: "c8",
              title: '중복 제거 (순서 유지)',
              description: '중복을 제거하면서 순서를 유지하세요.',
              difficulty: "hard",
              hints: [
                'set()으로 중복 체크',
                '새 리스트에 순서대로 추가',
              ],
              estimatedMinutes: 12,
              starterCode: 'def remove_dup(lst):\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result',
              solution: 'def remove_dup(lst):\n    seen=set(); r=[]\n    for x in lst:\n        if x not in seen: seen.add(x); r.append(x)\n    return r',
              testCases: [
                { input: 'remove_dup([3,1,4,1,5,9,2,6,5,3])', expected: '[3,1,4,5,9,2,6]' },
                { input: 'remove_dup([1,1,1])', expected: '[1]' },
                { input: 'remove_dup([])', expected: '[]' },
                { input: 'remove_dup([1,2,3])', expected: '[1,2,3]' },
                { input: 'remove_dup([\'a\',\'b\',\'a\"])', expected: '[\'a\',\'b\"]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'list(set())은 순서 비보장', suggestion: 'list(set())은 순서 비보장' },
                { pattern: '일반', message: 'set에서 in 연산은 O(1)', suggestion: 'set에서 in 연산은 O(1)' },
              ],
              feedback: {
                perfect: '중복 제거 효율적!',
                good: '순서를 유지하며 중복을 제거하는 방법을 잘 구현했어요!',
                partial: 'set()으로 중복 제거하면 순서가 사라져요. 다른 방법을 생각해보세요.',
                wrong: 'set으로 체크 + 새 리스트에 추가',
              },
            },
            {
              id: "c9",
              title: '스택(LIFO) 구현',
              description: 'append와 pop으로 스택을 구현하세요.',
              difficulty: "hard",
              hints: [
                '스택: LIFO (Last In First Out)',
                'append=push, pop=pop',
              ],
              estimatedMinutes: 14,
              starterCode: 'stack = []\nstack.append(1)\nstack.append(2)\nstack.append(3)\nprint(stack.pop())  # 3\nprint(stack.pop())  # 2\nprint(stack)        # [1]',
              solution: '# push: append(), pop: pop(), peek: [-1]',
              testCases: [
                { input: 'push 1,2,3 -> pop()', expected: '3' },
                { input: '2번째 pop()', expected: '2' },
                { input: '남은 스택', expected: '[1]' },
                { input: '빈 스택 len', expected: '0' },
                { input: 'push 5 -> [-1]', expected: '5' },
              ],
              commonErrors: [
                { pattern: '일반', message: '빈 스택 pop() 시 IndexError', suggestion: '빈 스택 pop() 시 IndexError' },
                { pattern: '일반', message: 'peek은 [-1]로 확인만', suggestion: 'peek은 [-1]로 확인만' },
              ],
              feedback: {
                perfect: '스택 완벽 구현!',
                good: 'append와 pop을 이용한 스택을 잘 구현했어요! 자료구조의 기초예요.',
                partial: '스택은 마지막에 넣은 것을 먼저 빼는 구조예요. pop()의 동작을 확인하세요.',
                wrong: 'append=push, pop=pop, [-1]=peek',
              },
            },
            {
              id: "c10",
              title: '투표 집계기 종합',
              description: '투표 결과를 집계하고 순위를 출력하세요.',
              difficulty: "hard",
              hints: [
                'count()로 득표 수',
                'set()으로 후보 추출',
                'sorted(key=lambda)로 정렬',
              ],
              estimatedMinutes: 18,
              starterCode: 'def count_votes(votes):\n    candidates = list(set(votes))\n    results = []\n    for c in candidates:\n        results.append({\'name\':c,\'votes\':votes.count(c)})\n    results.sort(key=lambda x:x[\'votes\"], reverse=True)\n    return results',
              solution: 'def count_votes(v):\n    r=[{\'name\':c,\'votes\':v.count(c)} for c in set(v)]\n    r.sort(key=lambda x:x[\'votes\"],reverse=True); return r',
              testCases: [
                { input: '1위 이름', expected: '김' },
                { input: '1위 득표수', expected: '4' },
                { input: '후보 수', expected: '3' },
                { input: '총 투표수', expected: '9' },
                { input: '빈 투표', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'set()은 순서 비보장 but sort로 해결', suggestion: 'set()은 순서 비보장 but sort로 해결' },
                { pattern: '일반', message: 'lambda로 딕셔너리 키 기준 정렬', suggestion: 'lambda로 딕셔너리 키 기준 정렬' },
              ],
              feedback: {
                perfect: '투표 집계 완벽!',
                good: '리스트 메서드를 종합적으로 잘 활용했어요! 실전 프로젝트 실력이 늘었네요.',
                partial: '집계 로직은 맞는데, 정렬이나 출력 부분을 다시 확인해보세요.',
                wrong: 'count()+sort(key=lambda) 조합',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-4',
          title: '리스트 컴프리헨션',
          description: '한 줄로 리스트를 만드는 마법!',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: '리스트 컴프리헨션',
          conceptExplanation: `
리스트 컴프리헨션은 for문 여러 줄을 한 줄로 간결하게 표현하는 파이썬의 강력한 문법입니다.
코드가 짧아지고 가독성이 높아지며 실행 속도도 더 빠릅니다.
필터링 조건을 추가하면 원하는 데이터만 추출할 수 있어 데이터 처리에 필수적입니다.
예: 시험 점수 중 합격자만 필터링, 문자열 리스트를 대문자로 변환, 숫자 리스트 변환 등에 활용됩니다.
`,
          starterCode: '# 기존 방식\nsquares = []\nfor i in range(1, 6):\n    squares.append(i ** 2)\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# 컴프리헨션 방식\nsquares = [i ** 2 for i in range(1, 6)]\nprint(squares)  # [1, 4, 9, 16, 25]\n\n# 조건 추가: 짝수만\nevens = [i for i in range(10) if i % 2 == 0]\nprint(evens)  # [0, 2, 4, 6, 8]\n\n# 직접 해보세요: 1~10 중 3의 배수만 담기\nthrees = []\nprint(threes)\n',
          hints: [
            '💡 힌트 1: [표현식 for 변수 in 범위] 형식으로 한 줄에 작성',
            '💡 힌트 2: [표현식 for 변수 in 범위 if 조건] 으로 필터링 가능',
            '💡 힌트 3: for문 5줄을 1줄로 줄일 수 있어요!'
          ],
          commonMistakes: [
            'for 키워드를 빼먹음 - [i ** 2 in range(5)] 는 에러!',
            '조건문 위치 틀림 - if는 맨 뒤에 와야 해요',
            '너무 복잡하게 만들면 가독성 저하 - 간단할 때만 사용',
            '괄호를 ()로 쓰면 generator가 됨 - 리스트는 []'
          ],
          challenges: [
            {
              id: "c1",
              title: '기본 컴프리헨션',
              description: 'for문을 리스트 컴프리헨션으로 변환하세요.',
              difficulty: "easy",
              hints: [
                '[표현식 for 변수 in 범위]',
              ],
              estimatedMinutes: 3,
              starterCode: '# for문을 컴프리헨션으로\nsquares = [i**2 for i in range(1, 6)]',
              solution: 'squares = [i**2 for i in range(1,6)]',
              testCases: [
                { input: '[i**2 for i in range(1,6)]', expected: '[1,4,9,16,25]' },
                { input: '[x*2 for x in range(4)]', expected: '[0,2,4,6]' },
                { input: '[i for i in range(5)]', expected: '[0,1,2,3,4]' },
                { input: '[0 for _ in range(3)]', expected: '[0,0,0]' },
                { input: '[x+1 for x in [10,20,30]]', expected: '[11,21,31]' },
              ],
              feedback: {
                perfect: '기본 컴프리헨션 완벽!',
                good: '컴프리헨션의 기본 문법을 잘 이해했어요! for문보다 간결하죠?',
                partial: '[표현식 for 변수 in 반복가능] 구조를 다시 확인해보세요.',
                wrong: '[표현식 for 변수 in 범위]',
              },
            },
            {
              id: "c2",
              title: '조건부 필터링',
              description: 'if 조건으로 짝수만, 양수만 필터링하세요.',
              difficulty: "easy",
              hints: [
                '뒤에 if 조건 추가',
              ],
              estimatedMinutes: 4,
              starterCode: 'evens = [x for x in range(10) if x%2==0]\npositives = [n for n in [-3,1,-5,4] if n>0]',
              solution: 'evens = [x for x in range(10) if x%2==0]',
              testCases: [
                { input: '[x for x in range(10) if x%2==0]', expected: '[0,2,4,6,8]' },
                { input: '[n for n in [-3,1,-5,4] if n>0]', expected: '[1,4]' },
                { input: '[x for x in range(20) if x%3==0]', expected: '[0,3,6,9,12,15,18]' },
                { input: '[s for s in [\'a\',\'\',\'b\"] if s]', expected: '[\'a\',\'b\"]' },
                { input: '[x for x in [] if x>0]', expected: '[]' },
              ],
              feedback: {
                perfect: '조건부 필터링 완벽!',
                good: 'if 조건 필터링을 잘 활용했어요! 여러 조건도 넣을 수 있어요.',
                partial: 'if 조건의 위치를 다시 확인하세요. for 뒤에 와야 해요.',
                wrong: '[표현식 for 변수 in 범위 if 조건]',
              },
            },
            {
              id: "c3",
              title: '문자열 변환',
              description: '문자열 리스트를 대문자로 변환하고 길이를 구하세요.',
              difficulty: "easy",
              hints: [
                '.upper()로 대문자',
                'len()으로 길이',
              ],
              estimatedMinutes: 5,
              starterCode: 'names = [\'alice\',\'bob\',\'charlie\"]\nupper = [n.upper() for n in names]\nlengths = [len(n) for n in names]',
              solution: 'upper=[n.upper() for n in names]',
              testCases: [
                { input: '[n.upper() for n in [\'alice\',\'bob\"]]', expected: '[\'ALICE\',\'BOB\"]' },
                { input: '[len(n) for n in [\'hi\',\'hello\"]]', expected: '[2,5]' },
                { input: '[s.strip() for s in [\' a \',\'b \"]]', expected: '[\'a\',\'b\"]' },
                { input: '[s.title() for s in [\'hello world\"]]', expected: '[\'Hello World\"]' },
                { input: '[s.replace(\'a\',\'@\') for s in [\'abc\"]]', expected: '[\'@bc\"]' },
              ],
              feedback: {
                perfect: '문자열 변환 완벽!',
                good: '컴프리헨션으로 문자열 변환을 잘 처리했어요! 메서드 체이닝도 가능해요.',
                partial: '각 요소에 적용할 변환 표현식을 다시 확인해보세요.',
                wrong: '메서드를 표현식 위치에 넣으세요.',
              },
            },
            {
              id: "c4",
              title: '중첩 for 컴프리헨션',
              description: '이중 for문을 컴프리헨션으로 변환하세요.',
              difficulty: "medium",
              hints: [
                '바깥 for가 먼저',
              ],
              estimatedMinutes: 7,
              starterCode: 'coords = [(x,y) for x in range(3) for y in range(3)]\nmulti = [f\'{i}x{j}={i*j}\' for i in range(2,4) for j in range(1,4)]',
              solution: 'coords=[(x,y) for x in range(3) for y in range(3)]',
              testCases: [
                { input: '[(x,y) for x in range(2) for y in range(2)]', expected: '[(0,0),(0,1),(1,0),(1,1)]' },
                { input: '[i*j for i in range(1,3) for j in range(1,3)]', expected: '[1,2,2,4]' },
                { input: 'len(coords)', expected: '9' },
                { input: '[(x,y) for x in [1] for y in [2,3]]', expected: '[(1,2),(1,3)]' },
                { input: '[a+b for a in \'ab\' for b in \'12\"]', expected: '[\'a1\',\'a2\',\'b1\',\'b2\"]' },
              ],
              feedback: {
                perfect: '중첩 컴프리헨션 완벽!',
                good: '중첩 for를 컴프리헨션으로 잘 표현했어요! 바깥 for가 먼저 와요.',
                partial: '중첩 for의 순서를 다시 확인하세요. 일반 for문과 같은 순서예요.',
                wrong: '바깥 for 먼저, 안쪽 for 나중',
              },
            },
            {
              id: "c5",
              title: '삼항연산자 (if-else)',
              description: '컴프리헨션 안에서 if-else를 사용하세요.',
              difficulty: "medium",
              hints: [
                '변환: 앞에 if-else',
                '필터: 뒤에 if만',
              ],
              estimatedMinutes: 8,
              starterCode: 'labels = [\'짝\' if x%2==0 else \'홀\' for x in range(1,6)]\nresults = [\'합격\' if s>=60 else \'불합격\' for s in [85,42,78,55,91]]',
              solution: 'labels=[\'짝\' if x%2==0 else \'홀\' for x in range(1,6)]',
              testCases: [
                { input: '[\'짝\' if x%2==0 else \'홀\' for x in range(1,4)]', expected: '[\'홀\',\'짝\',\'홀\"]' },
                { input: '[\'합격\' if s>=60 else \'불합격\' for s in [70,50]]', expected: '[\'합격\',\'불합격\"]' },
                { input: '[x if x>0 else 0 for x in [-1,2,-3,4]]', expected: '[0,2,0,4]' },
                { input: '[\'O\' if x else \'X\' for x in [True,False]]', expected: '[\'O\',\'X\"]' },
                { input: '[abs(x) for x in [-1,-2,3]]', expected: '[1,2,3]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '필터 if는 뒤에, 변환 if-else는 앞에', suggestion: '필터 if는 뒤에, 변환 if-else는 앞에' },
              ],
              feedback: {
                perfect: '삼항연산자 완벽!',
                good: '컴프리헨션 안에서 if-else를 잘 사용했어요! 위치에 주의했네요.',
                partial: 'if-else는 for 앞에, if만은 for 뒤에 오는 차이를 확인하세요.',
                wrong: '변환=앞에 if-else, 필터=뒤에 if',
              },
            },
            {
              id: "c6",
              title: '딕셔너리/집합 컴프리헨션',
              description: '중괄호로 딕셔너리와 집합을 만드세요.',
              difficulty: "medium",
              hints: [
                '{k:v for ...}=딕셔너리',
                '{v for ...}=집합',
              ],
              estimatedMinutes: 8,
              starterCode: 'sq = {x:x**2 for x in range(1,6)}\nuniq = {x**2 for x in [1,2,2,3,3,3]}',
              solution: 'sq={x:x**2 for x in range(1,6)}',
              testCases: [
                { input: '{x:x**2 for x in range(1,4)}', expected: '{1:1,2:4,3:9}' },
                { input: '{x**2 for x in [1,2,2,3]}', expected: '{1,4,9}' },
                { input: '{k:v for k,v in [(\'a\',1),(\'b\',2)]}', expected: '{\'a\':1,\'b\':2}' },
                { input: '{len(s) for s in [\'hi\',\'hey\',\'ha\"]}', expected: '{2,3}' },
                { input: '{x:0 for x in \'abc\'}', expected: '{\'a\':0,\'b\':0,\'c\':0}' },
              ],
              feedback: {
                perfect: '딕셔너리/집합 컴프리헨션 완벽!',
                good: '딕셔너리와 집합 컴프리헨션까지 잘 활용했어요! 응용 범위가 넓어졌네요.',
                partial: '{키:값 for ...}는 딕셔너리, {값 for ...}는 집합이에요.',
                wrong: '{k:v}=딕셔너리, {v}=집합',
              },
            },
            {
              id: "c7",
              title: '행렬 생성 컴프리헨션',
              description: '2차원 리스트를 컴프리헨션으로 생성하세요.',
              difficulty: "medium",
              hints: [
                '바깥=행, 안쪽=열',
              ],
              estimatedMinutes: 10,
              starterCode: 'zeros = [[0 for _ in range(3)] for _ in range(3)]\nidentity = [[1 if i==j else 0 for j in range(3)] for i in range(3)]',
              solution: 'zeros=[[0 for _ in range(3)] for _ in range(3)]',
              testCases: [
                { input: '[[0]*2 for _ in range(2)]', expected: '[[0,0],[0,0]]' },
                { input: '단위행렬 2x2', expected: '[[1,0],[0,1]]' },
                { input: '[[i*j for j in range(1,3)] for i in range(1,3)]', expected: '[[1,2],[2,4]]' },
                { input: 'len(3x4 행렬)', expected: '3' },
                { input: '[[0]*3]*3 문제', expected: '같은 행 참조(얕은 복사)' },
              ],
              commonErrors: [
                { pattern: '일반', message: '[[0]*3]*3은 같은 행 참조', suggestion: '[[0]*3]*3은 같은 행 참조' },
                { pattern: '일반', message: '컴프리헨션으로 생성해야 독립 행', suggestion: '컴프리헨션으로 생성해야 독립 행' },
              ],
              feedback: {
                perfect: '행렬 컴프리헨션 멋져요!',
                good: '2차원 리스트를 컴프리헨션으로 잘 생성했어요! 깔끔한 코드네요.',
                partial: '내부 리스트를 위한 중첩 컴프리헨션 구조를 다시 확인하세요.',
                wrong: '[[표현식 for j] for i]',
              },
            },
            {
              id: "c8",
              title: '데이터 정제 파이프라인',
              description: '컴프리헨션으로 데이터를 정제하세요.',
              difficulty: "hard",
              hints: [
                'strip()->필터->lower()',
              ],
              estimatedMinutes: 12,
              starterCode: 'raw = [\'  Alice  \',\'\',\'BOB\',\'  \',\'charlie\"]\nresult = [s.strip().lower() for s in raw if s.strip()]',
              solution: 'result=[s.strip().lower() for s in raw if s.strip()]',
              testCases: [
                { input: '[s.strip().lower() for s in [\' A \',\'\',\'B \"] if s.strip()]', expected: '[\'a\',\'b\"]' },
                { input: '[s for s in [\'a\',\'\',\'b\"] if s]', expected: '[\'a\',\'b\"]' },
                { input: 'len(정제 후)', expected: '3' },
                { input: '[s.strip() for s in [\' x \',\' \',\'y\"]]', expected: '[\'x\',\'\',\'y\"]' },
                { input: '[s.strip() for s in []]', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '조건절에서도 strip() 호출 필요', suggestion: '조건절에서도 strip() 호출 필요' },
                { pattern: '일반', message: '공백만 있는 문자열 필터링', suggestion: '공백만 있는 문자열 필터링' },
              ],
              feedback: {
                perfect: '데이터 정제 멋져요!',
                good: '컴프리헨션으로 데이터 정제를 잘 구현했어요! 실무에서도 자주 쓰여요.',
                partial: '변환과 필터링을 한 줄에 넣는 구조를 다시 확인해보세요.',
                wrong: 'strip()->필터->lower() 순서',
              },
            },
            {
              id: "c9",
              title: '컴프리헨션 vs for문',
              description: '컴프리헨션과 for문의 성능/가독성 차이를 이해하세요.',
              difficulty: "hard",
              hints: [
                '컴프리헨션이 20-30% 빠름',
                '복잡하면 for문이 가독성 좋음',
              ],
              estimatedMinutes: 10,
              starterCode: '# 간단한 변환/필터 -> 컴프리헨션\nsquares = [i**2 for i in range(1000)]\n# 복잡한 로직 -> for문\nresult = []\nfor i in range(1000):\n    if i%2==0:\n        val = i**2+i\n        if val < 500:\n            result.append(val)',
              solution: '# 간단=컴프리헨션, 복잡=for문',
              testCases: [
                { input: '[i**2 for i in range(5)]', expected: '[0,1,4,9,16]' },
                { input: '속도 비교', expected: '컴프리헨션이 빠름' },
                { input: 'map vs 컴프리헨션', expected: '비슷한 성능' },
                { input: '3줄 이상 로직', expected: 'for문 권장' },
                { input: '가독성 기준', expected: '복잡도에 따라 선택' },
              ],
              feedback: {
                perfect: '성능 차이 정확히 이해!',
                good: '컴프리헨션과 for문의 차이를 잘 이해했어요! 상황에 맞게 선택하세요.',
                partial: '두 방식의 결과는 같지만, 가독성과 성능 차이를 생각해보세요.',
                wrong: '간단=컴프리헨션, 복잡=for문',
              },
            },
            {
              id: "c10",
              title: '마스터: FizzBuzz 한 줄',
              description: 'FizzBuzz를 한 줄 컴프리헨션으로 해결하세요.',
              difficulty: "hard",
              hints: [
                '15의 배수 먼저 체크',
                '삼항연산자 중첩',
              ],
              estimatedMinutes: 15,
              starterCode: 'def fizzbuzz(n):\n    return [\n        \'FizzBuzz\' if i%15==0\n        else \'Fizz\' if i%3==0\n        else \'Buzz\' if i%5==0\n        else str(i)\n        for i in range(1,n+1)\n    ]',
              solution: 'def fizzbuzz(n):\n    return [\'FizzBuzz\' if i%15==0 else \'Fizz\' if i%3==0 else \'Buzz\' if i%5==0 else str(i) for i in range(1,n+1)]',
              testCases: [
                { input: 'fizzbuzz(5)', expected: '[\'1\',\'2\',\'Fizz\',\'4\',\'Buzz\"]' },
                { input: 'fizzbuzz(15)[-1]', expected: 'FizzBuzz' },
                { input: 'fizzbuzz(3)', expected: '[\'1\',\'2\',\'Fizz\"]' },
                { input: 'fizzbuzz(1)', expected: '[\'1\"]' },
                { input: 'fizzbuzz(15).count(\'FizzBuzz\')', expected: '1' },
              ],
              commonErrors: [
                { pattern: '일반', message: '15의 배수를 먼저 체크(3과 5 둘 다 만족)', suggestion: '15의 배수를 먼저 체크(3과 5 둘 다 만족)' },
                { pattern: '일반', message: 'str(i)로 문자열 변환 필수', suggestion: 'str(i)로 문자열 변환 필수' },
              ],
              feedback: {
                perfect: 'FizzBuzz 한 줄 멋져요!',
                good: 'FizzBuzz를 한 줄로 완성했어요! 컴프리헨션 실력이 뛰어나요.',
                partial: '삼항연산자를 중첩하는 방법을 다시 생각해보세요.',
                wrong: '15->3->5 순서로 체크',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-5',
          title: '2차원 리스트',
          description: '리스트 안에 리스트! 표 형태의 데이터를 다뤄요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: '중첩 리스트',
          conceptExplanation: `
2차원 리스트는 리스트 안에 리스트를 담아 표 형태의 데이터를 다룹니다.
게임 맵, 이미지 픽셀, 성적표 등 행과 열이 있는 데이터를 표현할 때 사용합니다.
[행][열] 형식으로 접근하며, 중첩 반복문으로 전체 데이터를 순회할 수 있습니다.
예: 틱택토 게임판(3x3), 학생 성적표(학생x과목), 엑셀 같은 스프레드시트 데이터 처리에 사용됩니다.
`,
          starterCode: '# 2차원 리스트 (3x3 행렬)\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\n\n# 접근: matrix[행][열]\nprint(matrix[0][0])  # 1 (첫 행, 첫 열)\nprint(matrix[1][2])  # 6 (둘째 행, 셋째 열)\n\n# 전체 출력\nfor row in matrix:\n    print(row)\n\n# 개별 요소 출력\nfor row in matrix:\n    for item in row:\n        print(item, end=" ")\n    print()\n',
          hints: [
            '💡 힌트 1: matrix[행][열] 형식으로 접근 - 행이 먼저, 열이 나중',
            '💡 힌트 2: 중첩 for문으로 순회 - 바깥 for는 행, 안쪽 for는 열',
            '💡 힌트 3: 게임 맵, 틱택토, 성적표 등에 활용돼요'
          ],
          commonMistakes: [
            '행과 열 순서 혼동 - [열][행]이 아니라 [행][열]',
            '인덱스 범위 초과 - 3x3 행렬은 [0~2][0~2]까지만',
            '얕은 복사 문제 - [[0]*3]*3 하면 같은 행이 복사됨',
            '초기화 실수 - [[0]*3 for _ in range(3)]로 올바르게 초기화'
          ],
          challenges: [
            {
              id: "c1",
              title: '2차원 리스트 생성',
              description: '3x3 행렬을 만들고 특정 요소에 접근하세요.',
              difficulty: "easy",
              hints: [
                'matrix[행][열]로 접근',
                '인덱스는 0부터',
              ],
              estimatedMinutes: 3,
              starterCode: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nprint(matrix[0][0])  # 1\nprint(matrix[1][2])  # 6',
              solution: 'matrix[0][0]  # 1\nmatrix[1][2]  # 6',
              testCases: [
                { input: 'matrix[0][0]', expected: '1' },
                { input: 'matrix[1][2]', expected: '6' },
                { input: 'matrix[2][1]', expected: '8' },
                { input: 'matrix[0]', expected: '[1,2,3]' },
                { input: 'len(matrix)', expected: '3' },
              ],
              feedback: {
                perfect: '2차원 리스트 접근 완벽!',
                good: '2차원 리스트의 구조를 잘 이해했어요! 행과 열의 개념이 중요해요.',
                partial: '리스트 안에 리스트를 넣는 구조를 다시 확인해보세요.',
                wrong: 'matrix[행][열]로 접근해요.',
              },
            },
            {
              id: "c2",
              title: '2차원 리스트 순회',
              description: '중첩 for문으로 모든 요소를 출력하세요.',
              difficulty: "easy",
              hints: [
                'for row in matrix:',
                'for item in row:',
              ],
              estimatedMinutes: 4,
              starterCode: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]\nfor row in matrix:\n    for item in row:\n        print(item, end=\' \')\n    print()',
              solution: 'for row in matrix:\n    for item in row:\n        print(item, end=\' \')\n    print()',
              testCases: [
                { input: '행 개수', expected: '3' },
                { input: '열 개수', expected: '3' },
                { input: '전체 요소 수', expected: '9' },
                { input: '첫 행', expected: '1 2 3' },
                { input: '마지막 행', expected: '7 8 9' },
              ],
              feedback: {
                perfect: '2차원 순회를 정확히 이해했어요!',
                good: '이중 for문으로 2차원 리스트를 잘 순회했어요! 인덱스도 활용해보세요.',
                partial: '바깥 for는 행, 안쪽 for는 열을 순회해요. 순서를 확인하세요.',
                wrong: '바깥 for=행, 안쪽 for=열',
              },
            },
            {
              id: "c3",
              title: '행렬 초기화',
              description: '컴프리헨션으로 NxM 영행렬을 만드세요.',
              difficulty: "easy",
              hints: [
                '[[0]*cols for _ in range(rows)]',
                '[[0]*3]*3은 위험!',
              ],
              estimatedMinutes: 5,
              starterCode: 'def make_zeros(rows, cols):\n    return [[0 for _ in range(cols)] for _ in range(rows)]\n\nprint(make_zeros(2, 3))  # [[0,0,0],[0,0,0]]',
              solution: 'def make_zeros(r,c): return [[0 for _ in range(c)] for _ in range(r)]',
              testCases: [
                { input: 'make_zeros(2,3)', expected: '[[0,0,0],[0,0,0]]' },
                { input: 'make_zeros(1,1)', expected: '[[0]]' },
                { input: 'make_zeros(3,2)', expected: '[[0,0],[0,0],[0,0]]' },
                { input: 'len(make_zeros(4,3))', expected: '4' },
                { input: 'len(make_zeros(2,5)[0])', expected: '5' },
              ],
              commonErrors: [
                { pattern: '일반', message: '[[0]*3]*3은 같은 행 참조(얕은 복사)', suggestion: '[[0]*3]*3은 같은 행 참조(얕은 복사)' },
                { pattern: '일반', message: '컴프리헨션으로 독립 행 생성 필수', suggestion: '컴프리헨션으로 독립 행 생성 필수' },
              ],
              feedback: {
                perfect: '행렬 초기화 완벽!',
                good: '행렬 초기화를 정확히 구현했어요! 참조 복사 함정을 잘 피했네요.',
                partial: '[[0]*n]*m은 같은 행을 참조해요! 컴프리헨션으로 만들어보세요.',
                wrong: '[[0 for _ in range(cols)] for _ in range(rows)]',
              },
            },
            {
              id: "c4",
              title: '행렬 덧셈',
              description: '같은 크기의 두 행렬을 더하세요.',
              difficulty: "medium",
              hints: [
                '같은 위치의 요소끼리 더하기',
                '이중 반복문 또는 컴프리헨션',
              ],
              estimatedMinutes: 7,
              starterCode: 'def add_matrix(a, b):\n    rows = len(a)\n    cols = len(a[0])\n    return [[a[i][j]+b[i][j] for j in range(cols)] for i in range(rows)]',
              solution: 'def add_matrix(a,b):\n    return [[a[i][j]+b[i][j] for j in range(len(a[0]))] for i in range(len(a))]',
              testCases: [
                { input: 'add_matrix([[1,2],[3,4]],[[5,6],[7,8]])', expected: '[[6,8],[10,12]]' },
                { input: 'add_matrix([[0]],[[0]])', expected: '[[0]]' },
                { input: 'add_matrix([[1,1],[1,1]],[[2,2],[2,2]])', expected: '[[3,3],[3,3]]' },
                { input: 'add_matrix([[1,0],[0,1]],[[0,1],[1,0]])', expected: '[[1,1],[1,1]]' },
                { input: 'len(결과)', expected: '2' },
              ],
              feedback: {
                perfect: '행렬 덧셈 완벽!',
                good: '행렬 덧셈을 정확히 구현했어요! 같은 위치끼리 더하는 거죠.',
                partial: '같은 행, 같은 열의 요소끼리 더하는 이중 반복을 확인하세요.',
                wrong: '같은 위치 요소끼리 a[i][j]+b[i][j]',
              },
            },
            {
              id: "c5",
              title: '전치 행렬',
              description: '행과 열을 바꾸는 전치 함수를 구현하세요.',
              difficulty: "medium",
              hints: [
                '전치: matrix[i][j] -> result[j][i]',
                'zip(*matrix) 활용 가능',
              ],
              estimatedMinutes: 8,
              starterCode: 'def transpose(m):\n    if not m: return []\n    rows, cols = len(m), len(m[0])\n    return [[m[i][j] for i in range(rows)] for j in range(cols)]',
              solution: 'def transpose(m):\n    return [[m[i][j] for i in range(len(m))] for j in range(len(m[0]))] if m else []',
              testCases: [
                { input: 'transpose([[1,2,3],[4,5,6]])', expected: '[[1,4],[2,5],[3,6]]' },
                { input: 'transpose([[1,2],[3,4]])', expected: '[[1,3],[2,4]]' },
                { input: 'transpose([[1]])', expected: '[[1]]' },
                { input: 'transpose([[1,2,3]])', expected: '[[1],[2],[3]]' },
                { input: 'transpose([])', expected: '[]' },
              ],
              feedback: {
                perfect: '전치 행렬 완벽!',
                good: '전치 행렬을 잘 구현했어요! zip()을 쓰면 더 간결해요.',
                partial: '행과 열을 바꾸는 인덱스 관계를 다시 그려보세요.',
                wrong: '행과 열 인덱스를 바꿔요: [i][j]->[j][i]',
              },
            },
            {
              id: "c6",
              title: '틱택토 판 만들기',
              description: '3x3 틱택토 게임판을 2차원 리스트로 구현하세요.',
              difficulty: "medium",
              hints: [
                '빈칸은 \' \'로 표시',
                'board[row][col]로 수 놓기',
              ],
              estimatedMinutes: 10,
              starterCode: 'board = [[\' \"]*3 for _ in range(3)]\n\ndef place(board, row, col, mark):\n    if board[row][col] == \' \':\n        board[row][col] = mark\n        return True\n    return False\n\ndef show(board):\n    for row in board:\n        print(\'|\'.join(row))\n        print(\'-\'*5)\n\nplace(board, 1, 1, \'X\')\nplace(board, 0, 0, \'O\')\nshow(board)',
              solution: 'board = [[\' \"]*3 for _ in range(3)]\ndef place(b,r,c,m):\n    if b[r][c]==\' \': b[r][c]=m; return True\n    return False',
              testCases: [
                { input: 'place(board,1,1,\'X\')', expected: 'True' },
                { input: 'place(board,1,1,\'O\')', expected: 'False (이미 차있음)' },
                { input: 'board[1][1] after X', expected: 'X' },
                { input: 'board[0][0] after O', expected: 'O' },
                { input: '빈칸 수', expected: '7' },
              ],
              commonErrors: [
                { pattern: '일반', message: '이미 놓인 자리에 중복 배치 방지', suggestion: '이미 놓인 자리에 중복 배치 방지' },
                { pattern: '일반', message: '인덱스 범위 체크 (0-2)', suggestion: '인덱스 범위 체크 (0-2)' },
              ],
              feedback: {
                perfect: '틱택토 판 멋져요!',
                good: '틱택토 판을 잘 만들었어요! 게임 로직도 도전해보세요.',
                partial: '3x3 보드를 2차원 리스트로 표현하는 방법을 확인하세요.',
                wrong: 'board[row][col]로 접근하고 빈칸 체크',
              },
            },
            {
              id: "c7",
              title: '행렬 곱셈',
              description: '행렬 곱셈을 구현하세요 (A의 열 수 = B의 행 수).',
              difficulty: "medium",
              hints: [
                'result[i][j] = sum(A[i][k]*B[k][j])',
                '3중 반복문 필요',
              ],
              estimatedMinutes: 12,
              starterCode: 'def multiply(a, b):\n    rows_a, cols_a = len(a), len(a[0])\n    cols_b = len(b[0])\n    result = [[0]*cols_b for _ in range(rows_a)]\n    for i in range(rows_a):\n        for j in range(cols_b):\n            for k in range(cols_a):\n                result[i][j] += a[i][k] * b[k][j]\n    return result',
              solution: 'def multiply(a,b):\n    r=[[0]*len(b[0]) for _ in range(len(a))]\n    for i in range(len(a)):\n        for j in range(len(b[0])):\n            for k in range(len(a[0])):\n                r[i][j]+=a[i][k]*b[k][j]\n    return r',
              testCases: [
                { input: 'multiply([[1,2],[3,4]],[[5,6],[7,8]])', expected: '[[19,22],[43,50]]' },
                { input: 'multiply([[1,0],[0,1]],[[5,6],[7,8]])', expected: '[[5,6],[7,8]]' },
                { input: 'multiply([[2]],[[3]])', expected: '[[6]]' },
                { input: 'len(multiply([[1,2,3]],[[1],[2],[3]]))', expected: '1' },
                { input: 'multiply([[1,2,3]],[[1],[2],[3]])[0][0]', expected: '14' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'A의 열 수와 B의 행 수가 같아야 함', suggestion: 'A의 열 수와 B의 행 수가 같아야 함' },
                { pattern: '일반', message: '결과 크기: A행 x B열', suggestion: '결과 크기: A행 x B열' },
              ],
              feedback: {
                perfect: '행렬 곱셈 완벽!',
                good: '행렬 곱셈을 정확히 구현했어요! 선형대수의 기초를 잘 이해했네요.',
                partial: '행렬 곱셈은 행*열의 내적이에요. 반복문 구조를 다시 확인하세요.',
                wrong: 'result[i][j] = sum(A[i][k]*B[k][j])',
              },
            },
            {
              id: "c8",
              title: '나선형 순회',
              description: '행렬을 나선형(spiral)으로 순회하세요.',
              difficulty: "hard",
              hints: [
                '상->우->하->좌 방향으로',
                '경계를 좁혀가면서 순회',
              ],
              estimatedMinutes: 15,
              starterCode: 'def spiral(matrix):\n    if not matrix: return []\n    result = []\n    top,bottom,left,right = 0,len(matrix)-1,0,len(matrix[0])-1\n    while top<=bottom and left<=right:\n        for j in range(left,right+1): result.append(matrix[top][j])\n        top += 1\n        for i in range(top,bottom+1): result.append(matrix[i][right])\n        right -= 1\n        if top<=bottom:\n            for j in range(right,left-1,-1): result.append(matrix[bottom][j])\n            bottom -= 1\n        if left<=right:\n            for i in range(bottom,top-1,-1): result.append(matrix[i][left])\n            left += 1\n    return result',
              solution: '# 나선형 순회: 경계를 좁혀가며 상우하좌 반복',
              testCases: [
                { input: 'spiral([[1,2,3],[4,5,6],[7,8,9]])', expected: '[1,2,3,6,9,8,7,4,5]' },
                { input: 'spiral([[1,2],[3,4]])', expected: '[1,2,4,3]' },
                { input: 'spiral([[1]])', expected: '[1]' },
                { input: 'spiral([[1,2,3]])', expected: '[1,2,3]' },
                { input: 'spiral([])', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '경계 조건 체크가 핵심', suggestion: '경계 조건 체크가 핵심' },
                { pattern: '일반', message: '한 행/한 열만 남았을 때 중복 방지', suggestion: '한 행/한 열만 남았을 때 중복 방지' },
              ],
              feedback: {
                perfect: '나선형 순회 완벽!',
                good: '나선형 순회를 잘 구현했어요! 알고리즘적 사고가 뛰어나요.',
                partial: '방향 전환 조건과 범위 축소를 다시 생각해보세요.',
                wrong: '상->우->하->좌 순서, 경계 좁히기',
              },
            },
            {
              id: "c9",
              title: '게임 맵 탐색',
              description: '2차원 리스트 게임 맵에서 특정 값을 찾으세요.',
              difficulty: "hard",
              hints: [
                '이중 for문으로 모든 셀 검사',
                '좌표 (행,열) 반환',
              ],
              estimatedMinutes: 15,
              starterCode: 'def find_in_map(game_map, target):\n    """게임 맵에서 target의 위치들을 반환"""\n    positions = []\n    for i, row in enumerate(game_map):\n        for j, cell in enumerate(row):\n            if cell == target:\n                positions.append((i, j))\n    return positions\n\nmap1 = [\n    [\'.\',\'.\',\'#\"],\n    [\'.\',\'P\',\'.\"],\n    [\'#\',\'.\',\'.\"],\n]\nprint(find_in_map(map1, \'P\'))  # [(1,1)]\nprint(find_in_map(map1, \'#\'))  # [(0,2),(2,0)]',
              solution: 'def find_in_map(m,t):\n    return [(i,j) for i,row in enumerate(m) for j,c in enumerate(row) if c==t]',
              testCases: [
                { input: 'find_in_map(map1,\'P\')', expected: '[(1,1)]' },
                { input: 'find_in_map(map1,\'#\')', expected: '[(0,2),(2,0)]' },
                { input: 'find_in_map(map1,\'.\')', expected: '[(0,0),(0,1),(1,0),(1,2),(2,1),(2,2)]' },
                { input: 'find_in_map([[]],\'x\')', expected: '[]' },
                { input: 'len(find_in_map(map1,\'.\'))', expected: '6' },
              ],
              feedback: {
                perfect: '게임 맵 탐색 멋져요!',
                good: '2차원 맵 탐색을 잘 구현했어요! BFS/DFS도 나중에 배워보세요.',
                partial: '상하좌우 이동과 범위 체크를 다시 확인해보세요.',
                wrong: '이중 for + enumerate로 좌표와 값을 함께 확인',
              },
            },
            {
              id: "c10",
              title: '마스터: 스도쿠 검증기',
              description: '9x9 스도쿠 보드가 유효한지 검증하세요.',
              difficulty: "hard",
              hints: [
                '각 행/열/3x3 박스에 1-9 중복 없어야',
                'set()으로 중복 체크',
              ],
              estimatedMinutes: 20,
              starterCode: 'def is_valid_sudoku(board):\n    for i in range(9):\n        row = [board[i][j] for j in range(9) if board[i][j] != 0]\n        if len(row) != len(set(row)): return False\n        col = [board[j][i] for j in range(9) if board[j][i] != 0]\n        if len(col) != len(set(col)): return False\n    for bi in range(3):\n        for bj in range(3):\n            box = []\n            for i in range(bi*3, bi*3+3):\n                for j in range(bj*3, bj*3+3):\n                    if board[i][j] != 0:\n                        box.append(board[i][j])\n            if len(box) != len(set(box)): return False\n    return True',
              solution: '# 행, 열, 3x3 박스 각각 중복 체크',
              testCases: [
                { input: '유효한 보드', expected: 'True' },
                { input: '같은 행 중복', expected: 'False' },
                { input: '같은 열 중복', expected: 'False' },
                { input: '같은 3x3 박스 중복', expected: 'False' },
                { input: '빈칸(0)은 무시', expected: 'True' },
              ],
              commonErrors: [
                { pattern: '일반', message: '0(빈칸)은 중복 체크에서 제외', suggestion: '0(빈칸)은 중복 체크에서 제외' },
                { pattern: '일반', message: '3x3 박스 인덱스 계산: bi*3~bi*3+2', suggestion: '3x3 박스 인덱스 계산: bi*3~bi*3+2' },
              ],
              feedback: {
                perfect: '스도쿠 검증기 완벽!',
                good: '스도쿠 검증기를 완성했어요! 행, 열, 3x3 박스 모두 잘 검사했네요.',
                partial: '행과 열 검사는 맞는데, 3x3 박스 검사 로직을 다시 확인하세요.',
                wrong: '행/열/박스 각각 set으로 중복 확인',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-6',
          title: '리스트와 문자열 변환',
          description: 'split()과 join()으로 변환해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'split, join',
          conceptExplanation: `
split()은 문자열을 나누어 리스트로 만들고, join()은 리스트를 합쳐 문자열로 만듭니다.
CSV 파일 파싱, 사용자 입력 처리, 경로 조작 등 문자열과 리스트 간 변환이 필요할 때 사용합니다.
서로 반대 역할을 하는 이 두 메서드는 텍스트 처리의 핵심입니다.
예: CSV 데이터 파싱, URL 경로 처리, 사용자 입력 여러 단어로 나누기 등에 활용됩니다.
`,
          starterCode: '# 문자열 → 리스트 (split)\nsentence = "파이썬 공부는 재미있다"\nwords = sentence.split()  # 공백으로 분리\nprint(words)  # ["파이썬", "공부는", "재미있다"]\n\ndata = "사과,바나나,포도"\nfruits = data.split(",")  # 쉼표로 분리\nprint(fruits)  # ["사과", "바나나", "포도"]\n\n# 리스트 → 문자열 (join)\nresult = "-".join(fruits)\nprint(result)  # "사과-바나나-포도"\n\nresult = " ".join(words)\nprint(result)  # "파이썬 공부는 재미있다"\n',
          hints: [
            '💡 힌트 1: split(구분자)로 문자열을 리스트로 변환',
            '💡 힌트 2: "구분자".join(리스트)로 리스트를 문자열로 변환',
            '💡 힌트 3: CSV 데이터 처리, 파일 읽기 등에 자주 사용돼요'
          ],
          commonMistakes: [
            'join의 순서 혼동 - 리스트.join()이 아니라 "구분자".join(리스트)',
            'split()과 split(" ")의 차이 - split()은 모든 공백 처리, split(" ")은 공백 하나만',
            '숫자 리스트 join 에러 - 문자열 리스트만 가능, 숫자는 먼저 str()로 변환'
          ],
          challenges: [
            {
              id: "c1",
              title: '문자열을 리스트로',
              description: 'split()으로 문자열을 리스트로 변환하세요.',
              difficulty: "easy",
              hints: [
                'split()은 공백 기준 분리',
                'split(\',\')은 쉼표 기준',
              ],
              estimatedMinutes: 3,
              starterCode: 'sentence = \'Hello World Python\'\nwords = sentence.split()\nprint(words)  # [\'Hello\', \'World\', \'Python\"]\n\ncsv = \'apple,banana,grape\'\nfruits = csv.split(\',\')\nprint(fruits)',
              solution: 'words = sentence.split()\nfruits = csv.split(\',\')',
              testCases: [
                { input: '\'Hello World\'.split()', expected: '[\'Hello\', \'World\"]' },
                { input: '\'a,b,c\'.split(\',\')', expected: '[\'a\', \'b\', \'c\"]' },
                { input: '\'\'.split()', expected: '[]' },
                { input: '\'abc\'.split()', expected: '[\'abc\"]' },
                { input: '\'1-2-3\'.split(\'-\')', expected: '[\'1\', \'2\', \'3\"]' },
              ],
              feedback: {
                perfect: 'split 완벽!',
                good: 'split()과 list()의 차이를 잘 이해했어요! 구분자도 다양하게 써보세요.',
                partial: 'split()은 구분자로 나누고, list()는 한 글자씩 분리해요.',
                wrong: 'split()=공백기준, split(\',\')=쉼표기준',
              },
            },
            {
              id: "c2",
              title: '리스트를 문자열로',
              description: 'join()으로 리스트를 문자열로 합치세요.',
              difficulty: "easy",
              hints: [
                '\'구분자\'.join(리스트)',
                '모든 요소가 문자열이어야',
              ],
              estimatedMinutes: 3,
              starterCode: 'words = [\'Hello\', \'World\"]\nresult = \' \'.join(words)\nprint(result)  # \'Hello World\'\n\nnums = [\'1\', \'2\', \'3\"]\nprint(\'-\'.join(nums))  # \'1-2-3\'',
              solution: '\' \'.join([\'Hello\',\'World\"])\n\'-\'.join([\'1\',\'2\',\'3\"])',
              testCases: [
                { input: '\' \'.join([\'Hello\',\'World\"])', expected: 'Hello World' },
                { input: '\'-\'.join([\'1\',\'2\',\'3\"])', expected: '1-2-3' },
                { input: '\',\'.join([\'a\',\'b\',\'c\"])', expected: 'a,b,c' },
                { input: '\'\'.join([\'a\',\'b\"])', expected: 'ab' },
                { input: '\' \'.join([])', expected: '' },
              ],
              feedback: {
                perfect: 'join 완벽!',
                good: 'join()을 정확히 사용했어요! 구분자.join(리스트) 형식이죠.',
                partial: 'join()의 호출 방식을 다시 확인하세요. 구분자가 앞에 와요.',
                wrong: '\'구분자\'.join(리스트) 형태',
              },
            },
            {
              id: "c3",
              title: '문자열과 리스트 상호변환',
              description: 'list()와 join()으로 문자열-리스트 변환을 연습하세요.',
              difficulty: "easy",
              hints: [
                'list(\'abc\') = [\'a\',\'b\',\'c\"]',
                '\'\'.join([\'a\',\'b\',\'c\"]) = \'abc\'',
              ],
              estimatedMinutes: 4,
              starterCode: 'chars = list(\'Python\')\nprint(chars)  # [\'P\',\'y\',\'t\',\'h\',\'o\',\'n\"]\nback = \'\'.join(chars)\nprint(back)  # \'Python\'',
              solution: 'chars = list(\'Python\')\nback = \'\'.join(chars)',
              testCases: [
                { input: 'list(\'Python\')', expected: '[\'P\',\'y\',\'t\',\'h\',\'o\',\'n\"]' },
                { input: '\'\'.join([\'P\',\'y\"])', expected: 'Py' },
                { input: 'list(\'\')', expected: '[]' },
                { input: '\'\'.join([])', expected: '' },
                { input: 'list(\'abc\')', expected: '[\'a\',\'b\',\'c\"]' },
              ],
              feedback: {
                perfect: '문자열-리스트 변환 완벽!',
                good: 'split()과 join()을 자유자재로 사용하네요! 변환이 자연스러워요.',
                partial: 'split → 변환 → join 흐름을 단계별로 다시 확인해보세요.',
                wrong: 'list()로 분해, join()으로 합치기',
              },
            },
            {
              id: "c4",
              title: '단어 뒤집기',
              description: '문장의 단어 순서를 뒤집는 함수를 만드세요.',
              difficulty: "medium",
              hints: [
                'split()으로 분리',
                '[::-1]로 뒤집기',
                'join()으로 합치기',
              ],
              estimatedMinutes: 6,
              starterCode: 'def reverse_words(sentence):\n    words = sentence.split()\n    words.reverse()\n    return \' \'.join(words)\n\nprint(reverse_words(\'Hello World Python\'))',
              solution: 'def reverse_words(s):\n    return \' \'.join(s.split()[::-1])',
              testCases: [
                { input: 'reverse_words(\'Hello World Python\')', expected: 'Python World Hello' },
                { input: 'reverse_words(\'a b c\')', expected: 'c b a' },
                { input: 'reverse_words(\'single\')', expected: 'single' },
                { input: 'reverse_words(\'\')', expected: '' },
                { input: 'reverse_words(\'  spaces  between  \')', expected: 'between spaces' },
              ],
              feedback: {
                perfect: '단어 뒤집기 멋져요!',
                good: '단어 순서 뒤집기를 잘 구현했어요! split과 join의 조합이 핵심이에요.',
                partial: '문장을 단어로 나누고 역순으로 합치는 과정을 다시 해보세요.',
                wrong: 'split()->reverse()->join() 패턴',
              },
            },
            {
              id: "c5",
              title: '카멜케이스/스네이크케이스 변환',
              description: '변수명 형식을 변환하세요.',
              difficulty: "medium",
              hints: [
                'camelCase -> snake_case',
                'snake_case -> camelCase',
              ],
              estimatedMinutes: 8,
              starterCode: 'def to_snake(camel):\n    result = []\n    for c in camel:\n        if c.isupper():\n            result.append(\'_\')\n            result.append(c.lower())\n        else:\n            result.append(c)\n    return \'\'.join(result).lstrip(\'_\')\n\nprint(to_snake(\'helloWorld\'))  # hello_world\nprint(to_snake(\'myVariableName\'))  # my_variable_name',
              solution: 'def to_snake(s):\n    r=[]\n    for c in s:\n        if c.isupper(): r.append(\'_\'+c.lower())\n        else: r.append(c)\n    return \'\'.join(r).lstrip(\'_\')',
              testCases: [
                { input: 'to_snake(\'helloWorld\')', expected: 'hello_world' },
                { input: 'to_snake(\'myVariableName\')', expected: 'my_variable_name' },
                { input: 'to_snake(\'HTMLParser\')', expected: 'h_t_m_l_parser' },
                { input: 'to_snake(\'hello\')', expected: 'hello' },
                { input: 'to_snake(\'A\')', expected: 'a' },
              ],
              commonErrors: [
                { pattern: '일반', message: '첫 글자가 대문자면 앞에 불필요한 _ 생김', suggestion: '첫 글자가 대문자면 앞에 불필요한 _ 생김' },
                { pattern: '일반', message: 'lstrip(\'_\')로 제거', suggestion: 'lstrip(\'_\')로 제거' },
              ],
              feedback: {
                perfect: '케이스 변환 멋져요!',
                good: '케이스 변환을 잘 구현했어요! 실제 프로그래밍에서 자주 필요한 기능이에요.',
                partial: '단어 분리와 결합 방식의 차이를 다시 확인해보세요.',
                wrong: '대문자 앞에 _를 추가하고 소문자로',
              },
            },
            {
              id: "c6",
              title: 'CSV 파싱',
              description: 'CSV 문자열을 2차원 리스트로 파싱하세요.',
              difficulty: "medium",
              hints: [
                '줄바꿈으로 행 분리',
                '쉼표로 열 분리',
              ],
              estimatedMinutes: 8,
              starterCode: 'def parse_csv(text):\n    lines = text.strip().split(\'\\n\')\n    return [line.split(\',\') for line in lines]\n\ncsv_data = \'name,age,score\\nAlice,14,95\\nBob,15,87\'\nprint(parse_csv(csv_data))',
              solution: 'def parse_csv(t):\n    return [line.split(\',\') for line in t.strip().split(\'\\n\')]',
              testCases: [
                { input: 'parse_csv(\'a,b\\nc,d\')', expected: '[[\'a\',\'b\"],[\'c\',\'d\"]]' },
                { input: 'len(parse_csv(\'a,b\\nc,d\'))', expected: '2' },
                { input: 'parse_csv(\'x\')', expected: '[[\'x\"]]' },
                { input: 'parse_csv(\'1,2,3\\n4,5,6\')[1]', expected: '[\'4\',\'5\',\'6\"]' },
                { input: 'parse_csv(\'a,b\\nc,d\')[0][1]', expected: 'b' },
              ],
              feedback: {
                perfect: 'CSV 파싱 멋져요!',
                good: 'CSV 파싱을 잘 구현했어요! 실제 데이터 처리의 기초가 되는 기능이에요.',
                partial: '줄 나누기(\n)와 필드 나누기(,)를 두 단계로 나눠보세요.',
                wrong: 'split(\'\\n\')으로 행, split(\',\')으로 열',
              },
            },
            {
              id: "c7",
              title: '문자열 압축',
              description: '연속 문자를 압축하세요 (예: aaabbc -> a3b2c1).',
              difficulty: "medium",
              hints: [
                '연속 같은 문자 카운트',
                '결과 문자열 조합',
              ],
              estimatedMinutes: 10,
              starterCode: 'def compress(s):\n    if not s: return \'\'\n    result = []\n    count = 1\n    for i in range(1, len(s)):\n        if s[i] == s[i-1]:\n            count += 1\n        else:\n            result.append(f\'{s[i-1]}{count}\')\n            count = 1\n    result.append(f\'{s[-1]}{count}\')\n    return \'\'.join(result)',
              solution: 'def compress(s):\n    if not s: return \'\'\n    r=[]; c=1\n    for i in range(1,len(s)):\n        if s[i]==s[i-1]: c+=1\n        else: r.append(f\'{s[i-1]}{c}\'); c=1\n    r.append(f\'{s[-1]}{c}\')\n    return \'\'.join(r)',
              testCases: [
                { input: 'compress(\'aaabbc\')', expected: 'a3b2c1' },
                { input: 'compress(\'aaa\')', expected: 'a3' },
                { input: 'compress(\'abc\')', expected: 'a1b1c1' },
                { input: 'compress(\'\')', expected: '' },
                { input: 'compress(\'aabb\')', expected: 'a2b2' },
              ],
              feedback: {
                perfect: '문자열 압축 멋져요!',
                good: '문자열 압축 알고리즘을 잘 구현했어요! 연속 문자 세기가 핵심이에요.',
                partial: '연속된 같은 문자의 개수를 세는 로직을 다시 확인하세요.',
                wrong: '연속 문자를 세어 문자+숫자 조합',
              },
            },
            {
              id: "c8",
              title: '애너그램 검사',
              description: '두 문자열이 애너그램인지 확인하세요.',
              difficulty: "hard",
              hints: [
                '같은 문자를 재배열하면 같은 단어',
                'sorted()로 비교 가능',
              ],
              estimatedMinutes: 12,
              starterCode: 'def is_anagram(s1, s2):\n    return sorted(s1.lower().replace(\' \',\'\')) == sorted(s2.lower().replace(\' \',\'\'))\n\nprint(is_anagram(\'listen\', \'silent\'))  # True\nprint(is_anagram(\'hello\', \'world\'))    # False',
              solution: 'def is_anagram(a,b):\n    return sorted(a.lower().replace(\' \',\'\'))==sorted(b.lower().replace(\' \',\'\'))',
              testCases: [
                { input: 'is_anagram(\'listen\',\'silent\')', expected: 'True' },
                { input: 'is_anagram(\'hello\',\'world\')', expected: 'False' },
                { input: 'is_anagram(\'abc\',\'cba\')', expected: 'True' },
                { input: 'is_anagram(\'\',\'\')', expected: 'True' },
                { input: 'is_anagram(\'Astronomer\',\'Moon starer\')', expected: 'True' },
              ],
              feedback: {
                perfect: '애너그램 검사 멋져요!',
                good: '애너그램 검사를 잘 구현했어요! sorted()를 활용한 방법이 깔끔해요.',
                partial: '두 문자열의 문자를 정렬해서 비교하는 방법을 생각해보세요.',
                wrong: 'sorted()로 문자를 정렬하여 비교',
              },
            },
            {
              id: "c9",
              title: '문자열 포맷팅 종합',
              description: 'f-string, format(), %로 다양한 포맷팅을 연습하세요.',
              difficulty: "hard",
              hints: [
                'f-string이 가장 현대적',
                ':.2f = 소수점 2자리',
              ],
              estimatedMinutes: 14,
              starterCode: 'name = \'Alice\'\nscore = 95.678\nrank = 3\n\n# f-string\nprint(f\'{name}의 점수: {score:.1f}점 (등수: {rank}위)\')\n\n# format()\nprint(\'{0}의 점수: {1:.1f}점\'.format(name, score))\n\n# 정렬\nfor item in [\'사과\',\'바나나\',\'포도\"]:\n    print(f\'{item:>10}\')  # 오른쪽 정렬, 10칸',
              solution: '# f-string이 가장 권장됨\n# :.1f = 소수점 1자리, :>10 = 오른쪽 정렬 10칸',
              testCases: [
                { input: 'f\'{95.678:.1f}\'', expected: '95.7' },
                { input: 'f\'{95.678:.2f}\'', expected: '95.68' },
                { input: 'f\'{42:05d}\'', expected: '00042' },
                { input: 'f\'{"hi":>10}\'', expected: '        hi' },
                { input: 'f\'{"hi":<10}\'', expected: 'hi        ' },
              ],
              feedback: {
                perfect: '포맷팅 종합 완벽!',
                good: '다양한 포맷팅 방법을 잘 활용했어요! f-string이 가장 현대적이에요.',
                partial: 'f-string의 {} 안에 변수를 넣는 방법을 다시 확인하세요.',
                wrong: 'f-string: {값:형식} 패턴',
              },
            },
            {
              id: "c10",
              title: '마스터: 마크다운 테이블 생성',
              description: '2차원 리스트를 마크다운 테이블로 변환하세요.',
              difficulty: "hard",
              hints: [
                '헤더와 구분선 생성',
                '각 열 너비 자동 맞춤',
              ],
              estimatedMinutes: 18,
              starterCode: 'def to_markdown(headers, data):\n    widths = [max(len(str(h)), max(len(str(row[i])) for row in data))\n              for i, h in enumerate(headers)]\n    header = \'| \' + \' | \'.join(h.ljust(w) for h, w in zip(headers, widths)) + \' |\'\n    sep = \'|\' + \'|\'.join(\'-\'*(w+2) for w in widths) + \'|\'\n    rows = []\n    for row in data:\n        r = \'| \' + \' | \'.join(str(v).ljust(w) for v, w in zip(row, widths)) + \' |\'\n        rows.append(r)\n    return \'\\n\'.join([header, sep] + rows)\n\nprint(to_markdown([\'이름\',\'점수\"], [[\'Alice\',95],[\'Bob\',87]]))',
              solution: '# 헤더 -> 구분선 -> 데이터 행 순서',
              testCases: [
                { input: '라인 수 (헤더+구분+데이터2)', expected: '4' },
                { input: '첫 줄에 \'이름\' 포함', expected: 'True' },
                { input: '구분선에 \'-\' 포함', expected: 'True' },
                { input: '마지막 줄에 \'Bob\' 포함', expected: 'True' },
                { input: '| 기호 포함', expected: 'True' },
              ],
              feedback: {
                perfect: '마크다운 테이블 멋져요!',
                good: '마크다운 테이블을 잘 생성했어요! 문자열 처리 실력이 뛰어나요.',
                partial: '테이블 구분선과 정렬 기호 생성 부분을 다시 확인하세요.',
                wrong: '헤더 -> 구분선(---) -> 데이터 행 순서',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-7',
          title: '리스트 복사의 함정',
          description: '얕은 복사와 깊은 복사의 차이를 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '리스트 복사',
          conceptExplanation: `
리스트 복사는 얕은 복사(shallow copy)와 깊은 복사(deep copy)를 구분해야 합니다.
= 연산자는 참조만 복사하고, [:] 또는 copy()는 새 리스트를 만들며, deepcopy()는 중첩 구조까지 완전히 복사합니다.
잘못된 복사 방식은 예기치 않은 버그를 일으킬 수 있어 정확한 이해가 필요합니다.
예: 게임 상태 저장, 데이터 백업, 중첩 리스트 독립적 수정 등에서 올바른 복사 방식 선택이 중요합니다.
`,
          starterCode: '# 잘못된 복사 (같은 리스트를 가리킴)\na = [1, 2, 3]\nb = a  # 참조 복사!\nb.append(4)\nprint(a)  # [1, 2, 3, 4] - a도 변경됨!\n\n# 올바른 복사 방법들\na = [1, 2, 3]\nc = a.copy()     # 방법 1: copy()\nd = a[:]         # 방법 2: 슬라이싱\ne = list(a)      # 방법 3: list()\n\nc.append(100)\nprint(a)  # [1, 2, 3] - a는 그대로!\nprint(c)  # [1, 2, 3, 100]\n',
          hints: [
            '💡 힌트 1: b = a 는 같은 리스트를 가리키는 것 (참조 복사)!',
            '💡 힌트 2: .copy(), [:], list()로 실제 복사 가능',
            '💡 힌트 3: 복사본을 수정해도 원본은 그대로 유지돼요'
          ],
          commonMistakes: [
            '= 연산자로 복사 시도 - 이것은 같은 리스트를 가리키는 것!',
            '2차원 리스트의 얕은 복사 - copy()로도 안전하지 않음, deepcopy() 필요',
            'is와 == 혼동 - is는 같은 객체인지, ==는 값이 같은지 확인'
          ],
          challenges: [
            {
              id: "c1",
              title: '얕은 복사 vs 깊은 복사 이해',
              description: '= 할당과 copy()의 차이를 확인하세요.',
              difficulty: "easy",
              hints: [
                'b=a는 같은 객체 참조',
                'b=a.copy()는 새 객체',
              ],
              estimatedMinutes: 3,
              starterCode: 'a = [1, 2, 3]\nb = a        # 같은 객체!\nc = a.copy() # 새 객체!\n\nb.append(4)\nprint(a)  # [1,2,3,4] (b와 같은 객체)\nprint(c)  # [1,2,3] (독립)',
              feedback: {
                perfect: '완벽해요!',
                good: '얕은 복사와 깊은 복사의 차이를 잘 이해했어요! 참조의 개념이 중요해요.',
                partial: '= 할당은 복사가 아니라 같은 객체를 가리키는 것임을 기억하세요.',
                wrong: 'a = b는 같은 리스트를 가리켜요. copy()로 새 리스트를 만드세요.',
              },
            },
            {
              id: "c2",
              title: 'copy()로 안전하게 복사',
              description: '리스트를 안전하게 복사하는 3가지 방법을 연습하세요.',
              difficulty: "easy",
              hints: [
                'a.copy()',
                'a[:]',
                'list(a)',
              ],
              estimatedMinutes: 4,
              starterCode: 'original = [1, 2, 3]\ncopy1 = original.copy()\ncopy2 = original[:]\ncopy3 = list(original)\noriginal.append(4)\nprint(copy1, copy2, copy3)  # 모두 [1,2,3]',
              feedback: {
                perfect: '완벽해요!',
                good: '세 가지 복사 방법을 모두 알고 있네요! 상황에 맞게 선택하세요.',
                partial: '.copy(), [:], list() 세 가지 방법을 다시 연습해보세요.',
                wrong: 'copy(), [:], list() 중 하나로 안전하게 복사할 수 있어요.',
              },
            },
            {
              id: "c3",
              title: '얕은 복사의 한계',
              description: '중첩 리스트에서 얕은 복사의 문제를 확인하세요.',
              difficulty: "easy",
              hints: [
                '얕은 복사는 내부 객체를 공유',
                '내부 리스트 수정 시 원본도 변경',
              ],
              estimatedMinutes: 5,
              starterCode: 'import copy\noriginal = [[1,2],[3,4]]\nshallow = original.copy()\nshallow[0][0] = 99\nprint(original)  # [[99,2],[3,4]] 원본도 변경됨!\n\ndeep = copy.deepcopy(original)\ndeep[0][0] = 0\nprint(original)  # [[99,2],[3,4]] 원본 안전',
              feedback: {
                perfect: '완벽해요!',
                good: '얕은 복사의 한계를 정확히 이해했어요! 중첩 구조에서 조심해야 해요.',
                partial: '내부 리스트는 여전히 공유되는 점을 다시 확인해보세요.',
                wrong: '중첩 리스트에서 copy()는 내부 객체까지 복사하지 않아요.',
              },
            },
            {
              id: "c4",
              title: 'deepcopy 사용법',
              description: 'import copy와 deepcopy()로 완전한 복사를 하세요.',
              difficulty: "medium",
              hints: [
                'import copy',
                'copy.deepcopy(객체)',
              ],
              estimatedMinutes: 7,
              starterCode: 'import copy\n\nnested = [[1,[2,3]],[4,[5,6]]]\ndeep = copy.deepcopy(nested)\ndeep[0][1][0] = 99\nprint(nested)  # 원본 변경 안 됨',
              feedback: {
                perfect: '완벽해요!',
                good: 'deepcopy의 필요성과 사용법을 잘 이해했어요! import copy가 필요해요.',
                partial: 'copy.deepcopy()는 중첩된 모든 객체를 새로 만들어요.',
                wrong: 'import copy 후 copy.deepcopy(리스트)를 사용하세요.',
              },
            },
            {
              id: "c5",
              title: '함수에서 리스트 전달',
              description: '함수에 리스트를 전달하면 원본이 변경될 수 있음을 이해하세요.',
              difficulty: "medium",
              hints: [
                '리스트는 참조로 전달',
                '함수 내에서 수정하면 원본도 변경',
              ],
              estimatedMinutes: 8,
              starterCode: 'def add_item(lst, item):\n    lst.append(item)  # 원본 변경!\n\ndef safe_add(lst, item):\n    new_lst = lst.copy()\n    new_lst.append(item)\n    return new_lst  # 원본 불변\n\noriginal = [1, 2, 3]\nadd_item(original, 4)\nprint(original)  # [1,2,3,4]',
              feedback: {
                perfect: '완벽해요!',
                good: '함수에 리스트를 전달할 때의 참조 동작을 잘 이해했어요!',
                partial: '함수 안에서 리스트를 수정하면 원본도 바뀌는 점을 확인하세요.',
                wrong: '함수에 리스트를 넘기면 참조가 전달돼요. copy()로 안전하게 하세요.',
              },
            },
            {
              id: "c6",
              title: '리스트 복사 퀴즈',
              description: '다양한 복사 시나리오의 결과를 예측하세요.',
              difficulty: "medium",
              hints: [
                '=는 참조, copy()는 얕은 복사',
                'deepcopy()는 깊은 복사',
              ],
              estimatedMinutes: 8,
              starterCode: '# 퀴즈: 각 print의 결과는?\na = [1, [2, 3]]\nb = a\nc = a.copy()\nb[0] = 99\nprint(a[0])  # ?\nc[1].append(4)\nprint(a[1])  # ?',
              feedback: {
                perfect: '완벽해요!',
                good: '복사 관련 개념을 종합적으로 잘 이해하고 있어요!',
                partial: '각 상황에서 원본이 변하는지 안 변하는지 다시 추적해보세요.',
                wrong: '변수가 같은 객체를 가리키는지 새 객체인지 구분하는 것이 핵심이에요.',
              },
            },
            {
              id: "c7",
              title: 'is vs == 연산자',
              description: 'is(동일 객체)와 ==(같은 값)의 차이를 이해하세요.',
              difficulty: "medium",
              hints: [
                '==는 값 비교',
                'is는 같은 객체인지 비교',
              ],
              estimatedMinutes: 8,
              starterCode: 'a = [1, 2, 3]\nb = a\nc = a.copy()\nprint(a == b)  # True (같은 값)\nprint(a is b)  # True (같은 객체)\nprint(a == c)  # True (같은 값)\nprint(a is c)  # False (다른 객체)',
              feedback: {
                perfect: '완벽해요!',
                good: 'is와 ==의 차이를 정확히 이해했어요! 객체 동일성 vs 값 동등성이죠.',
                partial: 'is는 같은 객체인지, ==는 값이 같은지 확인하는 차이를 복습하세요.',
                wrong: 'is는 메모리 주소 비교, ==는 값 비교예요.',
              },
            },
            {
              id: "c8",
              title: '불변 객체와 가변 객체',
              description: '불변(immutable)과 가변(mutable) 객체의 차이를 이해하세요.',
              difficulty: "hard",
              hints: [
                '불변: int, str, tuple',
                '가변: list, dict, set',
              ],
              estimatedMinutes: 12,
              starterCode: '# 불변 객체는 복사 걱정 없음\na = \'hello\'\nb = a\na = \'world\'  # 새 객체 생성\nprint(b)  # \'hello\' (불변이라 안전)\n\n# 가변 객체는 주의!\nc = [1, 2, 3]\nd = c\nc.append(4)  # 원본 변경\nprint(d)  # [1,2,3,4] (같은 객체)',
              feedback: {
                perfect: '완벽해요!',
                good: '불변/가변 객체의 차이를 잘 이해했어요! 문자열은 불변, 리스트는 가변이에요.',
                partial: '문자열, 튜플은 불변이고 리스트, 딕셔너리는 가변인 점을 기억하세요.',
                wrong: '불변(int, str, tuple)은 값을 바꿀 수 없고, 가변(list, dict)은 바꿀 수 있어요.',
              },
            },
            {
              id: "c9",
              title: '리스트 컴프리헨션과 복사',
              description: '컴프리헨션으로 만든 리스트는 항상 새 객체임을 확인하세요.',
              difficulty: "hard",
              hints: [
                '컴프리헨션 = 새 리스트 생성',
                '원본과 독립적',
              ],
              estimatedMinutes: 12,
              starterCode: 'original = [1, 2, 3, 4, 5]\nfiltered = [x for x in original if x > 2]\nfiltered.append(99)\nprint(original)  # [1,2,3,4,5] 변경 안 됨\nprint(filtered)  # [3,4,5,99]',
              feedback: {
                perfect: '완벽해요!',
                good: '컴프리헨션이 새 리스트를 만든다는 것을 잘 이해했어요!',
                partial: '컴프리헨션은 항상 새 리스트를 만들어요. 얕은 복사와 비교해보세요.',
                wrong: '[x for x in 리스트]는 새 리스트를 만들어 복사와 같은 효과예요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 안전한 중첩 리스트 함수',
              description: '중첩 리스트를 안전하게 처리하는 함수를 작성하세요.',
              difficulty: "hard",
              hints: [
                'deepcopy로 원본 보호',
                '함수 내부에서만 수정',
              ],
              estimatedMinutes: 18,
              starterCode: 'import copy\n\ndef safe_transform(matrix, func):\n    """원본을 변경하지 않고 행렬 변환"""\n    result = copy.deepcopy(matrix)\n    for i in range(len(result)):\n        for j in range(len(result[i])):\n            result[i][j] = func(result[i][j])\n    return result\n\nm = [[1,2],[3,4]]\ndoubled = safe_transform(m, lambda x: x*2)\nprint(m)       # [[1,2],[3,4]] 원본 불변\nprint(doubled) # [[2,4],[6,8]]',
              feedback: {
                perfect: '완벽해요!',
                good: '안전한 복사 함수를 잘 만들었어요! deepcopy 활용이 정확해요.',
                partial: '중첩 수준에 따라 적절한 복사 방법을 선택하는 부분을 확인하세요.',
                wrong: '중첩 리스트를 안전하게 다루려면 deepcopy를 사용하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-8',
          title: '유용한 내장 함수',
          description: 'map, filter, zip으로 리스트 처리해요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: 'map, filter, zip',
          conceptExplanation: `
map은 모든 요소에 함수 적용, filter는 조건에 맞는 요소만 선택, zip은 여러 리스트를 묶습니다.
함수형 프로그래밍 스타일로 간결하고 읽기 쉬운 코드를 작성할 수 있습니다.
리스트 컴프리헨션과 함께 사용하면 강력한 데이터 변환 도구가 됩니다.
예: 온도 변환(map), 합격자 필터링(filter), 학생-점수 매칭(zip) 등에 활용됩니다.
`,
          starterCode: '# map: 각 요소에 함수 적용\nnums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)  # [1, 4, 9, 16, 25]\n\n# filter: 조건에 맞는 것만\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)  # [2, 4]\n\n# zip: 여러 리스트 묶기\nnames = ["철수", "영희", "민수"]\nscores = [85, 92, 78]\n\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}점")\n',
          hints: [
            '💡 힌트 1: map(함수, 리스트)로 각 요소에 함수 적용',
            '💡 힌트 2: filter(함수, 리스트)로 조건에 맞는 것만 필터링',
            '💡 힌트 3: zip(리스트1, 리스트2)로 여러 리스트를 묶어서 순회'
          ],
          commonMistakes: [
            'map/filter 결과를 list()로 변환 안 함 - map 객체 자체는 출력 안 됨',
            'zip의 길이 불일치 - 짧은 리스트 기준으로 잘림',
            'lambda 대신 일반 함수명을 괄호와 함께 사용 - map(func(), list)가 아니라 map(func, list)'
          ],
          challenges: [
            {
              id: "c1",
              title: 'map 함수',
              description: 'map()으로 리스트의 모든 요소에 함수를 적용하세요.',
              difficulty: "easy",
              hints: [
                'map(함수, 리스트)',
                'list()로 결과를 리스트로',
              ],
              estimatedMinutes: 3,
              starterCode: 'nums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)  # [1, 4, 9, 16, 25]',
              feedback: {
                perfect: '완벽해요!',
                good: 'map() 함수를 잘 활용했어요! 각 요소에 함수를 적용하는 거죠.',
                partial: 'map(함수, 반복가능)의 구조를 다시 확인하세요. list()로 감싸야 해요.',
                wrong: 'map(함수, 리스트)는 각 요소에 함수를 적용해요. list()로 변환하세요.',
              },
            },
            {
              id: "c2",
              title: 'filter 함수',
              description: 'filter()로 조건에 맞는 요소만 걸러내세요.',
              difficulty: "easy",
              hints: [
                'filter(함수, 리스트)',
                '함수가 True 반환하는 요소만',
              ],
              estimatedMinutes: 4,
              starterCode: 'nums = [1, 2, 3, 4, 5, 6, 7, 8]\nevens = list(filter(lambda x: x%2==0, nums))\nprint(evens)  # [2, 4, 6, 8]',
              feedback: {
                perfect: '완벽해요!',
                good: 'filter()로 조건에 맞는 요소만 잘 걸러냈어요!',
                partial: 'filter(조건함수, 반복가능) 구조를 다시 확인해보세요.',
                wrong: 'filter(함수, 리스트)에서 함수는 True/False를 반환해야 해요.',
              },
            },
            {
              id: "c3",
              title: 'zip 함수',
              description: 'zip()으로 여러 리스트를 병렬로 묶으세요.',
              difficulty: "easy",
              hints: [
                'zip(리스트1, 리스트2)',
                '짧은 쪽 기준으로 잘림',
              ],
              estimatedMinutes: 5,
              starterCode: 'names = [\'Alice\', \'Bob\', \'Charlie\"]\nscores = [95, 87, 92]\nfor name, score in zip(names, scores):\n    print(f\'{name}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'zip()으로 여러 리스트를 잘 묶었어요! 언패킹과 함께 쓰면 유용해요.',
                partial: 'zip은 같은 위치의 요소끼리 묶어요. 길이가 다르면 짧은 쪽 기준이에요.',
                wrong: 'zip(리스트1, 리스트2)는 같은 인덱스끼리 튜플로 묶어요.',
              },
            },
            {
              id: "c4",
              title: 'any와 all 함수',
              description: 'any()와 all()로 조건을 일괄 검사하세요.',
              difficulty: "medium",
              hints: [
                'any: 하나라도 True면 True',
                'all: 모두 True여야 True',
              ],
              estimatedMinutes: 6,
              starterCode: 'scores = [85, 92, 45, 78, 91]\nall_pass = all(s >= 60 for s in scores)\nany_perfect = any(s == 100 for s in scores)\nprint(f\'전원 합격: {all_pass}\')   # False\nprint(f\'만점자 존재: {any_perfect}\')  # False',
              feedback: {
                perfect: '완벽해요!',
                good: 'any()와 all()을 잘 구분했어요! 조건 검사에 매우 유용해요.',
                partial: 'any는 하나라도 True면 True, all은 모두 True여야 True예요.',
                wrong: 'any()=하나라도 참이면 True, all()=모두 참이면 True예요.',
              },
            },
            {
              id: "c5",
              title: 'sorted의 key 매개변수',
              description: 'sorted()에 key를 활용하여 다양하게 정렬하세요.',
              difficulty: "medium",
              hints: [
                'key=lambda로 커스텀 기준',
                '여러 기준으로 정렬 가능',
              ],
              estimatedMinutes: 8,
              starterCode: 'students = [(\'Alice\',95),(\'Bob\',87),(\'Charlie\',92)]\n# 점수순 정렬\nby_score = sorted(students, key=lambda x: x[1], reverse=True)\nprint(by_score)',
              feedback: {
                perfect: '완벽해요!',
                good: 'key 매개변수를 잘 활용했어요! 커스텀 정렬의 핵심이에요.',
                partial: 'key=함수에서 함수가 각 요소의 정렬 기준을 반환해야 해요.',
                wrong: 'sorted(리스트, key=함수)에서 key 함수가 정렬 기준을 결정해요.',
              },
            },
            {
              id: "c6",
              title: 'enumerate와 zip 조합',
              description: 'enumerate와 zip을 함께 사용하세요.',
              difficulty: "medium",
              hints: [
                'enumerate(zip(...))',
                '인덱스 + 여러 리스트 동시 순회',
              ],
              estimatedMinutes: 8,
              starterCode: 'names = [\'Alice\',\'Bob\',\'Charlie\"]\nscores = [95, 87, 92]\nfor i, (name, score) in enumerate(zip(names, scores), 1):\n    print(f\'{i}. {name}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'enumerate와 zip을 조합해서 인덱스까지 활용하는 멋진 코드예요!',
                partial: 'enumerate(zip(...))으로 인덱스와 묶인 값을 동시에 얻을 수 있어요.',
                wrong: 'enumerate로 인덱스를, zip으로 병렬 접근을 합치세요.',
              },
            },
            {
              id: "c7",
              title: 'reduce 함수',
              description: 'functools.reduce()로 리스트를 하나의 값으로 줄이세요.',
              difficulty: "medium",
              hints: [
                'from functools import reduce',
                'reduce(함수, 리스트, 초기값)',
              ],
              estimatedMinutes: 10,
              starterCode: 'from functools import reduce\n\nnums = [1, 2, 3, 4, 5]\ntotal = reduce(lambda a, b: a + b, nums)\nprint(total)  # 15\n\nproduct = reduce(lambda a, b: a * b, nums)\nprint(product)  # 120',
              feedback: {
                perfect: '완벽해요!',
                good: 'reduce()를 잘 활용했어요! 누적 연산의 강력한 도구예요.',
                partial: 'reduce(함수, 리스트)에서 함수는 두 인자(누적값, 현재값)를 받아요.',
                wrong: 'from functools import reduce 후 reduce(함수, 리스트)를 사용하세요.',
              },
            },
            {
              id: "c8",
              title: 'map+filter 체이닝',
              description: 'map과 filter를 연결하여 데이터를 처리하세요.',
              difficulty: "hard",
              hints: [
                'filter로 걸러내고 map으로 변환',
                '또는 컴프리헨션으로 대체',
              ],
              estimatedMinutes: 12,
              starterCode: 'data = [\'  alice  \', \'\', \'  BOB  \', \'  \', \'charlie\"]\n# filter로 빈값 제거 + map으로 정리\ncleaned = list(map(str.strip, data))\nresult = list(filter(None, cleaned))\nresult = [s.title() for s in result]\nprint(result)  # [\'Alice\', \'Bob\', \'Charlie\"]',
              feedback: {
                perfect: '완벽해요!',
                good: 'map과 filter를 연결해서 데이터 변환 파이프라인을 잘 만들었어요!',
                partial: 'filter로 먼저 걸러내고 map으로 변환하는 순서를 생각해보세요.',
                wrong: 'filter로 조건 필터링 후 map으로 변환하는 체이닝을 연습하세요.',
              },
            },
            {
              id: "c9",
              title: 'itertools 맛보기',
              description: 'itertools의 유용한 함수를 체험하세요.',
              difficulty: "hard",
              hints: [
                'chain: 여러 리스트 연결',
                'product: 모든 조합 생성',
              ],
              estimatedMinutes: 14,
              starterCode: 'from itertools import chain, product, combinations\n\n# chain: 여러 리스트를 하나로\nresult = list(chain([1,2], [3,4], [5,6]))\nprint(result)  # [1,2,3,4,5,6]\n\n# combinations: 조합\ncomb = list(combinations([1,2,3], 2))\nprint(comb)  # [(1,2),(1,3),(2,3)]',
              feedback: {
                perfect: '완벽해요!',
                good: 'itertools 모듈을 잘 활용했어요! 조합, 순열 등 강력한 도구예요.',
                partial: 'itertools의 함수들은 반복자를 반환해요. list()로 감싸서 확인하세요.',
                wrong: 'import itertools 후 chain, product, combinations 등을 사용하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 파이프라인 빌더',
              description: 'map, filter, reduce를 조합한 데이터 처리 파이프라인을 만드세요.',
              difficulty: "hard",
              hints: [
                '여러 변환을 순서대로 적용',
                '함수형 프로그래밍 패턴',
              ],
              estimatedMinutes: 18,
              starterCode: 'from functools import reduce\n\ndef pipeline(data, *funcs):\n    """여러 함수를 순서대로 적용"""\n    result = data\n    for func in funcs:\n        result = func(result)\n    return result\n\nnums = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]\nresult = pipeline(\n    nums,\n    lambda lst: filter(lambda x: x > 0, lst),\n    lambda lst: map(lambda x: x ** 2, lst),\n    list,\n    lambda lst: sorted(lst, reverse=True)\n)\nprint(result)  # [81, 49, 25, 9, 1]',
              feedback: {
                perfect: '완벽해요!',
                good: '내장 함수들을 조합한 파이프라인을 잘 구축했어요! 함수형 프로그래밍의 기초예요.',
                partial: '각 단계의 입출력 타입이 맞는지 확인하고 연결해보세요.',
                wrong: 'map, filter, reduce를 순서대로 연결해서 데이터 변환 파이프라인을 만드세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-9',
          title: '튜플 소개',
          description: '변경 불가능한 리스트, 튜플을 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: '튜플 기초',
          conceptExplanation: `
튜플은 리스트와 비슷하지만 수정 불가능(immutable)한 자료구조입니다.
한 번 생성되면 내용을 바꿀 수 없어 데이터 보호가 필요한 경우 사용합니다.
딕셔너리 키나 함수의 여러 반환값으로 자주 활용되며, 메모리 효율도 높습니다.
예: 좌표(x, y), RGB 색상값, 함수 여러 값 반환, 상수 데이터 저장 등에 사용됩니다.
`,
          starterCode: '# 튜플: 수정 불가능한 리스트\npoint = (3, 5)\ncolors = ("빨강", "파랑", "초록")\n\nprint(point[0])   # 3\nprint(colors[1])  # 파랑\n\n# 언패킹\nx, y = point\nprint(f"x={x}, y={y}")\n\n# 튜플은 수정 불가!\n# point[0] = 10  # 에러!\n\n# 함수에서 여러 값 반환할 때 유용\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nresult = min_max([3, 1, 4, 1, 5, 9])\nprint(result)  # (1, 9)\n',
          hints: [
            '💡 힌트 1: 튜플은 ()로 만들고 수정 불가 (immutable)',
            '💡 힌트 2: 언패킹으로 여러 변수에 한 번에 할당 가능',
            '💡 힌트 3: 좌표, 색상 등 변하지 않아야 하는 데이터에 적합'
          ],
          commonMistakes: [
            '단일 요소 튜플 실수 - (1)은 정수, (1,)이 튜플',
            '튜플 수정 시도 - 수정 불가하므로 새로 만들어야 함',
            '빈 튜플은 ()로, 리스트는 []로 구분'
          ],
          challenges: [
            {
              id: "c1",
              title: '튜플 생성',
              description: '소괄호로 튜플을 만들고 접근하세요.',
              difficulty: "easy",
              hints: [
                '(값1, 값2, 값3)',
                '인덱스로 접근 가능',
              ],
              estimatedMinutes: 3,
              starterCode: 'point = (3, 4)\nprint(point[0])  # 3\nprint(point[1])  # 4\nprint(len(point))  # 2',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플 생성을 잘 이해했어요! 소괄호와 쉼표의 역할이 중요해요.',
                partial: '튜플은 ()로 만들고, 요소가 하나일 때 쉼표가 필요해요.',
                wrong: '(값,)처럼 쉼표를 넣어야 요소 1개인 튜플이 돼요.',
              },
            },
            {
              id: "c2",
              title: '튜플은 불변(immutable)',
              description: '튜플은 생성 후 수정할 수 없음을 확인하세요.',
              difficulty: "easy",
              hints: [
                '수정 시도 시 TypeError',
                '리스트와의 핵심 차이',
              ],
              estimatedMinutes: 4,
              starterCode: 't = (1, 2, 3)\n# t[0] = 99  # TypeError!\n# t.append(4)  # AttributeError!\nprint(type(t))  # <class \'tuple\'>',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플의 불변 특성을 잘 이해했어요! 안전한 데이터 저장에 좋아요.',
                partial: '튜플은 생성 후 수정할 수 없어요. 수정하려면 새로 만들어야 해요.',
                wrong: '튜플은 값을 변경할 수 없는 불변 자료형이에요.',
              },
            },
            {
              id: "c3",
              title: '튜플 언패킹',
              description: '튜플의 값을 여러 변수에 한 번에 할당하세요.',
              difficulty: "easy",
              hints: [
                'a, b, c = (1, 2, 3)',
                '변수 수 = 요소 수',
              ],
              estimatedMinutes: 5,
              starterCode: '# 기본 언패킹\nx, y = (3, 4)\nprint(f\'x={x}, y={y}\')\n\n# 함수 반환값\ndef min_max(lst):\n    return min(lst), max(lst)\n\nlo, hi = min_max([5, 2, 8, 1, 9])\nprint(f\'최소: {lo}, 최대: {hi}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플 언패킹을 잘 활용했어요! 여러 변수에 한 번에 값을 할당할 수 있죠.',
                partial: '변수 개수와 튜플 요소 개수가 맞아야 해요. *를 쓰면 나머지를 모을 수 있어요.',
                wrong: 'a, b, c = (1, 2, 3) 형태로 각 요소를 변수에 할당해요.',
              },
            },
            {
              id: "c4",
              title: '튜플 vs 리스트',
              description: '튜플과 리스트를 각각 언제 사용하는지 이해하세요.',
              difficulty: "medium",
              hints: [
                '튜플: 변경 불필요한 데이터',
                '리스트: 변경 가능한 데이터',
              ],
              estimatedMinutes: 6,
              starterCode: '# 튜플: 좌표, RGB, 날짜 등 고정 데이터\nposition = (10, 20)\ncolor = (255, 128, 0)\ndate = (2024, 1, 15)\n\n# 리스트: 장바구니, 점수 등 변경 가능\ncart = [\'사과\', \'바나나\"]\nscores = [85, 92, 78]',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플과 리스트의 차이를 명확히 이해했어요! 용도에 따라 선택하세요.',
                partial: '불변이 필요하면 튜플, 수정이 필요하면 리스트를 선택하세요.',
                wrong: '튜플은 불변(안전), 리스트는 가변(유연)이에요.',
              },
            },
            {
              id: "c5",
              title: '딕셔너리 키로 튜플 사용',
              description: '튜플은 불변이라 딕셔너리 키로 사용 가능!',
              difficulty: "medium",
              hints: [
                '리스트는 키로 사용 불가',
                '튜플은 키로 사용 가능',
              ],
              estimatedMinutes: 7,
              starterCode: '# 좌표별 정보 저장\nlocations = {}\nlocations[(0, 0)] = \'시작점\'\nlocations[(3, 4)] = \'목표점\'\nprint(locations[(0, 0)])  # \'시작점\'',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플이 딕셔너리 키가 될 수 있는 이유를 잘 이해했어요! 불변이니까요.',
                partial: '리스트는 가변이라 키가 될 수 없고, 튜플은 불변이라 가능해요.',
                wrong: '딕셔너리 키는 불변 타입만 가능해요. 튜플은 불변이라 가능하죠.',
              },
            },
            {
              id: "c6",
              title: '*를 이용한 확장 언패킹',
              description: '*변수로 나머지 요소를 한 번에 받으세요.',
              difficulty: "medium",
              hints: [
                'first, *rest = (1,2,3,4,5)',
                '*middle 패턴',
              ],
              estimatedMinutes: 8,
              starterCode: 'first, *rest = (1, 2, 3, 4, 5)\nprint(first)  # 1\nprint(rest)   # [2, 3, 4, 5]\n\nfirst, *middle, last = (1, 2, 3, 4, 5)\nprint(middle)  # [2, 3, 4]',
              feedback: {
                perfect: '완벽해요!',
                good: '확장 언패킹을 잘 활용했어요! *변수로 나머지를 리스트로 받을 수 있죠.',
                partial: 'first, *rest = 튜플 형태에서 *rest가 나머지를 모으는 역할이에요.',
                wrong: '*변수는 나머지 요소를 리스트로 모아줘요.',
              },
            },
            {
              id: "c7",
              title: 'Named Tuple',
              description: 'collections.namedtuple로 이름 있는 튜플을 만드세요.',
              difficulty: "medium",
              hints: [
                'from collections import namedtuple',
                '필드명으로 접근 가능',
              ],
              estimatedMinutes: 10,
              starterCode: 'from collections import namedtuple\n\nPoint = namedtuple(\'Point\', [\'x\', \'y\"])\np = Point(3, 4)\nprint(p.x, p.y)  # 3 4\nprint(p[0])       # 3 (인덱스도 가능)',
              feedback: {
                perfect: '완벽해요!',
                good: 'NamedTuple을 잘 활용했어요! 인덱스 대신 이름으로 접근할 수 있죠.',
                partial: 'from collections import namedtuple로 가져와서 사용하세요.',
                wrong: 'namedtuple은 이름으로 접근 가능한 튜플이에요. 가독성이 좋아요.',
              },
            },
            {
              id: "c8",
              title: '튜플 메서드',
              description: 'count()와 index()를 사용하세요.',
              difficulty: "hard",
              hints: [
                'count(값): 개수',
                'index(값): 첫 위치',
              ],
              estimatedMinutes: 10,
              starterCode: 't = (1, 2, 3, 2, 1, 2)\nprint(t.count(2))  # 3\nprint(t.index(3))  # 2',
              feedback: {
                perfect: '완벽해요!',
                good: 'count()와 index() 두 가지 튜플 메서드를 잘 사용했어요!',
                partial: '튜플은 불변이라 count()와 index()만 사용 가능해요.',
                wrong: '튜플은 count(값)과 index(값) 두 메서드만 있어요.',
              },
            },
            {
              id: "c9",
              title: '함수에서 여러 값 반환',
              description: '함수가 튜플로 여러 값을 반환하는 패턴을 연습하세요.',
              difficulty: "hard",
              hints: [
                'return a, b는 return (a,b)와 동일',
                '언패킹으로 받기',
              ],
              estimatedMinutes: 12,
              starterCode: 'def analyze(numbers):\n    return min(numbers), max(numbers), sum(numbers)/len(numbers)\n\nlo, hi, avg = analyze([85, 92, 78, 96, 88])\nprint(f\'최소: {lo}, 최대: {hi}, 평균: {avg:.1f}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '함수에서 튜플로 여러 값을 반환하는 패턴을 잘 활용했어요!',
                partial: 'return a, b는 실제로 return (a, b)와 같아요. 튜플 반환이죠.',
                wrong: 'return 값1, 값2 하면 자동으로 튜플로 반환돼요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 좌표 계산기',
              description: '튜플을 활용한 2D 좌표 연산 함수를 만드세요.',
              difficulty: "hard",
              hints: [
                '좌표는 (x, y) 튜플',
                '거리, 중점, 벡터 연산',
              ],
              estimatedMinutes: 18,
              starterCode: 'import math\n\ndef distance(p1, p2):\n    return math.sqrt((p2[0]-p1[0])**2 + (p2[1]-p1[1])**2)\n\ndef midpoint(p1, p2):\n    return ((p1[0]+p2[0])/2, (p1[1]+p2[1])/2)\n\ndef add_vectors(v1, v2):\n    return (v1[0]+v2[0], v1[1]+v2[1])\n\na, b = (0, 0), (3, 4)\nprint(f\'거리: {distance(a, b)}\')\nprint(f\'중점: {midpoint(a, b)}\')\nprint(f\'벡터합: {add_vectors(a, b)}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '튜플로 좌표를 다루는 계산기를 잘 만들었어요! 수학적 응용이 멋져요.',
                partial: '좌표를 (x, y) 튜플로 표현하고 연산하는 부분을 다시 확인하세요.',
                wrong: '좌표를 (x, y) 튜플로 표현하고, 언패킹으로 계산하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-25-10',
          title: '주간 도전: 성적 관리 시스템',
          description: '학생들의 성적을 리스트로 관리해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '리스트 종합',
          conceptExplanation: `
리스트는 파이썬에서 가장 많이 사용되는 자료구조로, 다양한 기능을 종합적으로 활용할 수 있습니다.
슬라이싱, 메서드, 컴프리헨션, 중첩 리스트 등을 조합하면 복잡한 데이터 처리도 간결하게 해결됩니다.
실무에서는 이러한 기법들을 상황에 맞게 선택하여 사용하는 능력이 중요합니다.
예: 데이터 정제, 통계 계산, 로그 분석, 배치 처리 등 거의 모든 데이터 작업에 활용됩니다.
`,
          starterCode: '# 성적 관리 시스템\nstudents = []\nscores = []\n\nwhile True:\n    print("\\n=== 성적 관리 ===")\n    print("1. 학생 추가")\n    print("2. 성적 조회")\n    print("3. 평균/최고점")\n    print("4. 종료")\n    \n    choice = input("선택: ")\n    \n    if choice == "1":\n        name = input("학생 이름: ")\n        score = int(input("점수: "))\n        students.append(name)\n        scores.append(score)\n        print(f"{name} 학생이 추가되었습니다.")\n    \n    elif choice == "2":\n        for name, score in zip(students, scores):\n            print(f"{name}: {score}점")\n    \n    elif choice == "3":\n        if scores:\n            avg = sum(scores) / len(scores)\n            print(f"평균: {avg:.1f}점")\n            max_idx = scores.index(max(scores))\n            print(f"최고점: {students[max_idx]} ({max(scores)}점)")\n        else:\n            print("등록된 학생이 없습니다.")\n    \n    elif choice == "4":\n        print("종료합니다.")\n        break\n',
          hints: [
            '💡 힌트 1: 두 개의 리스트를 병렬로 관리 - students와 scores',
            '💡 힌트 2: zip()으로 함께 순회하여 이름과 점수 출력',
            '💡 힌트 3: sum(), max(), len(), index()를 활용해요'
          ],
          commonMistakes: [
            'index() 사용 전 max() 값이 여러 개일 때 처리 안 함',
            '빈 리스트 체크 안 함 - scores가 비어있으면 평균 계산 시 에러',
            'zip 사용 시 두 리스트 길이가 다르면 짧은 것 기준으로 잘림'
          ],
          challenges: [
            {
              id: "c1",
              title: '학생 추가 기능',
              description: '이름과 점수를 입력받아 리스트에 추가하세요.',
              difficulty: "easy",
              hints: [
                '두 리스트를 병렬 관리',
                'append로 추가',
              ],
              estimatedMinutes: 3,
              starterCode: 'students = []\nscores = []\n\ndef add_student(name, score):\n    students.append(name)\n    scores.append(score)\n    print(f\'{name} 학생 추가됨\')\n\nadd_student(\'김철수\', 85)\nadd_student(\'이영희\', 92)',
              feedback: {
                perfect: '완벽해요!',
                good: '학생 데이터를 리스트에 잘 추가했어요! 입력 검증도 생각해보세요.',
                partial: '딕셔너리로 학생 정보를 만들고 리스트에 append하는 구조를 확인하세요.',
                wrong: '학생을 딕셔너리로 만들고 리스트에 append()로 추가하세요.',
              },
            },
            {
              id: "c2",
              title: '전체 조회 기능',
              description: 'zip으로 이름과 점수를 함께 출력하세요.',
              difficulty: "easy",
              hints: [
                'zip(students, scores)',
                'f-string으로 포맷',
              ],
              estimatedMinutes: 4,
              starterCode: 'def show_all():\n    for name, score in zip(students, scores):\n        print(f\'{name}: {score}점\')\n\nshow_all()',
              feedback: {
                perfect: '완벽해요!',
                good: '전체 학생 목록을 보기 좋게 출력했어요! 포맷팅이 깔끔하네요.',
                partial: 'for문으로 각 학생 정보를 출력하는 부분을 다시 확인하세요.',
                wrong: 'for student in students: 로 전체를 순회해서 출력하세요.',
              },
            },
            {
              id: "c3",
              title: '통계 계산',
              description: '평균, 최고점, 최저점을 계산하세요.',
              difficulty: "easy",
              hints: [
                'sum()/len()으로 평균',
                'max(), min()으로 최고/최저',
              ],
              estimatedMinutes: 5,
              starterCode: 'def statistics():\n    if not scores:\n        print(\'학생이 없습니다.\')\n        return\n    avg = sum(scores) / len(scores)\n    best_idx = scores.index(max(scores))\n    print(f\'평균: {avg:.1f}점\')\n    print(f\'최고: {students[best_idx]} ({max(scores)}점)\')',
              feedback: {
                perfect: '완벽해요!',
                good: '평균, 최고, 최저점을 정확히 계산했어요! 내장 함수 활용이 좋아요.',
                partial: 'sum(), max(), min()과 len()을 조합해서 통계를 구하세요.',
                wrong: '평균은 sum()/len(), 최고는 max(), 최저는 min()을 사용하세요.',
              },
            },
            {
              id: "c4",
              title: '학생 검색 기능',
              description: '이름으로 학생을 검색하세요.',
              difficulty: "medium",
              hints: [
                'in 연산자로 존재 확인',
                'index()로 위치 찾기',
              ],
              estimatedMinutes: 7,
              starterCode: 'def search(name):\n    if name in students:\n        idx = students.index(name)\n        print(f\'{name}: {scores[idx]}점\')\n    else:\n        print(f\'{name} 학생을 찾을 수 없습니다.\')',
              feedback: {
                perfect: '완벽해요!',
                good: '이름으로 학생을 잘 검색했어요! 부분 일치 검색도 도전해보세요.',
                partial: 'for문으로 순회하며 이름이 일치하는 학생을 찾는 로직을 확인하세요.',
                wrong: 'for + if로 이름이 일치하는 학생을 찾으세요.',
              },
            },
            {
              id: "c5",
              title: '점수 수정 기능',
              description: '특정 학생의 점수를 수정하세요.',
              difficulty: "medium",
              hints: [
                'index()로 위치 찾기',
                'scores[idx] = 새점수',
              ],
              estimatedMinutes: 7,
              starterCode: 'def update_score(name, new_score):\n    if name in students:\n        idx = students.index(name)\n        old = scores[idx]\n        scores[idx] = new_score\n        print(f\'{name}: {old}점 -> {new_score}점\')\n    else:\n        print(f\'{name} 학생이 없습니다.\')',
              feedback: {
                perfect: '완벽해요!',
                good: '학생 점수를 안전하게 수정했어요! 존재 확인 후 수정하는 패턴이 좋아요.',
                partial: '먼저 학생을 찾고 나서 점수를 수정하는 순서를 확인하세요.',
                wrong: '먼저 학생을 검색하고, 찾으면 점수를 업데이트하세요.',
              },
            },
            {
              id: "c6",
              title: '학생 삭제 기능',
              description: '학생을 삭제하세요 (이름과 점수 모두).',
              difficulty: "medium",
              hints: [
                'index()로 위치 찾기',
                'pop()으로 두 리스트에서 제거',
              ],
              estimatedMinutes: 8,
              starterCode: 'def delete_student(name):\n    if name in students:\n        idx = students.index(name)\n        students.pop(idx)\n        scores.pop(idx)\n        print(f\'{name} 삭제됨\')\n    else:\n        print(f\'{name} 학생이 없습니다.\')',
              feedback: {
                perfect: '완벽해요!',
                good: '학생 삭제를 안전하게 구현했어요! 확인 절차도 좋은 습관이에요.',
                partial: 'remove()나 인덱스를 찾아 del로 삭제하는 방법을 확인하세요.',
                wrong: '학생을 찾은 후 remove()로 삭제하세요.',
              },
            },
            {
              id: "c7",
              title: '등급 판정 기능',
              description: '점수를 등급(A~F)으로 변환하세요.',
              difficulty: "medium",
              hints: [
                '90이상 A, 80이상 B, ...',
                'if-elif 체인',
              ],
              estimatedMinutes: 8,
              starterCode: 'def get_grade(score):\n    if score >= 90: return \'A\'\n    elif score >= 80: return \'B\'\n    elif score >= 70: return \'C\'\n    elif score >= 60: return \'D\'\n    else: return \'F\'\n\ndef show_grades():\n    for name, score in zip(students, scores):\n        print(f\'{name}: {score}점 ({get_grade(score)})\')',
              feedback: {
                perfect: '완벽해요!',
                good: '점수에 따른 등급 판정을 잘 구현했어요! if-elif 체인이 깔끔해요.',
                partial: '등급 경계값(90, 80, 70...)의 조건을 다시 확인해보세요.',
                wrong: 'if score >= 90: 등급="A" elif score >= 80: 등급="B" 패턴을 사용하세요.',
              },
            },
            {
              id: "c8",
              title: '정렬 기능',
              description: '점수 기준으로 정렬하여 출력하세요.',
              difficulty: "hard",
              hints: [
                'zip으로 묶어서 정렬',
                'sorted(key=lambda)',
              ],
              estimatedMinutes: 12,
              starterCode: 'def rank_students():\n    combined = list(zip(students, scores))\n    ranked = sorted(combined, key=lambda x: x[1], reverse=True)\n    for i, (name, score) in enumerate(ranked, 1):\n        print(f\'{i}위: {name} ({score}점)\')',
              feedback: {
                perfect: '완벽해요!',
                good: '학생 목록을 점수순으로 잘 정렬했어요! key 매개변수 활용이 좋아요.',
                partial: 'sorted()의 key 매개변수로 정렬 기준을 지정하세요.',
                wrong: 'sorted(students, key=lambda s: s["score"]) 형태를 사용하세요.',
              },
            },
            {
              id: "c9",
              title: '데이터 저장/불러오기 (시뮬레이션)',
              description: '성적 데이터를 문자열로 저장하고 복원하세요.',
              difficulty: "hard",
              hints: [
                'CSV 형태로 변환',
                'split으로 복원',
              ],
              estimatedMinutes: 15,
              starterCode: 'def save_data():\n    lines = []\n    for name, score in zip(students, scores):\n        lines.append(f\'{name},{score}\')\n    return \'\\n\'.join(lines)\n\ndef load_data(text):\n    students.clear()\n    scores.clear()\n    for line in text.strip().split(\'\\n\'):\n        if line:\n            name, score = line.split(\',\')\n            students.append(name)\n            scores.append(int(score))',
              feedback: {
                perfect: '완벽해요!',
                good: '데이터 저장/불러오기를 잘 시뮬레이션했어요! JSON 활용이 좋아요.',
                partial: 'json.dumps()와 json.loads()로 변환하는 과정을 확인하세요.',
                wrong: 'json 모듈로 딕셔너리를 문자열로 변환하고 다시 복원하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 완전한 성적 관리 시스템',
              description: '모든 기능을 통합한 메뉴 기반 시스템을 만드세요.',
              difficulty: "hard",
              hints: [
                'while True로 메뉴 루프',
                '각 기능을 함수로 분리',
              ],
              estimatedMinutes: 20,
              starterCode: 'def main():\n    while True:\n        print(\'\\n=== 성적 관리 ===\')\n        print(\'1.추가 2.조회 3.검색 4.수정 5.삭제 6.통계 7.등급 8.순위 9.종료\')\n        choice = input(\'선택: \')\n        if choice == \'1\': add_student(input(\'이름: \'), int(input(\'점수: \')))\n        elif choice == \'2\': show_all()\n        elif choice == \'3\': search(input(\'이름: \'))\n        elif choice == \'4\': update_score(input(\'이름: \'), int(input(\'새 점수: \')))\n        elif choice == \'5\': delete_student(input(\'이름: \'))\n        elif choice == \'6\': statistics()\n        elif choice == \'7\': show_grades()\n        elif choice == \'8\': rank_students()\n        elif choice == \'9\': print(\'종료\'); break',
              feedback: {
                perfect: '완벽해요!',
                good: '완전한 성적 관리 시스템을 만들었어요! 종합 실력이 뛰어나요.',
                partial: '각 기능을 함수로 분리하고 메뉴 시스템을 완성해보세요.',
                wrong: '각 기능을 함수로 만들고 while 루프로 메뉴를 구현하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-25',
        title: 'Week 25 퀴즈',
        questions: [
          {
            id: 'q25-1',
            question: '[1,2,3,4,5][1:4]의 결과는?',
            options: ['[1,2,3,4]', '[2,3,4]', '[2,3,4,5]', '[1,2,3]'],
            correctAnswer: 1,
            explanation: '슬라이싱 [1:4]는 인덱스 1부터 3까지를 가져와요. 끝 인덱스 4는 포함되지 않아요! 따라서 [2,3,4]가 정답입니다.'
          },
          {
            id: 'q25-2',
            question: '리스트 끝에 요소를 추가하는 메서드는?',
            options: ['add()', 'append()', 'insert()', 'push()'],
            correctAnswer: 1,
            explanation: 'Python 리스트에서 끝에 요소를 추가하려면 append() 메서드를 사용해요. add()는 집합(set)에서, push()는 JavaScript에서 사용해요.'
          },
          {
            id: 'q25-3',
            question: '[x*2 for x in range(3)]의 결과는?',
            options: ['[0,2,4]', '[2,4,6]', '[0,1,2]', '[1,2,3]'],
            correctAnswer: 0,
            explanation: 'range(3)은 [0,1,2]를 생성하고, 각 요소에 *2를 하면 [0,2,4]가 돼요. 리스트 컴프리헨션의 기본 사용법입니다!'
          },
          {
            id: 'q25-4',
            question: '리스트를 올바르게 복사하는 방법은?',
            options: ['b = a', 'b = a.copy()', 'b = copy(a)', 'b = a.clone()'],
            correctAnswer: 1,
            explanation: 'b = a는 같은 리스트를 가리키므로 복사가 아니에요! b = a.copy()나 b = a[:] 또는 b = list(a)로 복사해야 해요.'
          },
          {
            id: 'q25-5',
            question: '2차원 리스트 matrix = [[1,2],[3,4]]에서 숫자 4에 접근하려면?',
            options: ['matrix[1][1]', 'matrix[2][2]', 'matrix[4]', 'matrix[1,1]'],
            correctAnswer: 0,
            explanation: '2차원 리스트는 [행][열] 형식으로 접근해요. 4는 두 번째 행(인덱스 1)의 두 번째 열(인덱스 1)이므로 matrix[1][1]이 정답입니다!'
          },
        ],
      },
    },

    // Week 26: 딕셔너리
    {
      id: 'week-26',
      number: 26,
      title: '딕셔너리: 키-값 저장소',
      description: '키와 값을 쌍으로 저장하는 자료구조를 배워요',
      missions: [
        {
          id: '4-26-1',
          title: '딕셔너리란?',
          description: '키로 값을 찾는 자료구조예요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '딕셔너리 개념',
          cstaStandard: '1B-AP-13',
          learningObjectives: [
            '딕셔너리가 키-값 쌍으로 데이터를 저장하는 자료구조임을 이해한다',
            '리스트와 딕셔너리의 차이점을 설명할 수 있다',
            '딕셔너리를 사용하면 좋은 상황을 판단할 수 있다'
          ],
          realWorldExample: '연락처 앱에서 이름(키)으로 전화번호(값)를 찾듯이, 딕셔너리는 키로 빠르게 값을 찾을 수 있어요!',
          conceptCards: [
            {
              title: '딕셔너리',
              description: '키-값 쌍으로 데이터를 저장하는 자료구조',
              icon: '📕',
              example: 'person = {"name": "김코딩", "age": 14}'
            },
            {
              title: '리스트 vs 딕셔너리',
              description: '리스트는 순서(인덱스), 딕셔너리는 이름(키)으로 접근',
              icon: '⚖️',
              example: 'list[0] vs dict["key"]'
            },
            {
              title: '활용 예시',
              description: '연락처, 설정, 게임 스탯, API 응답 등',
              icon: '💡',
              example: 'player = {"hp": 100, "mp": 50}'
            }
          ],
          hints: [
            '💡 힌트 1: 딕셔너리는 {키: 값} 형태로 저장해요',
            '💡 힌트 2: 실제 사전처럼 단어(키)로 뜻(값)을 찾아요',
            '💡 힌트 3: 리스트는 숫자 인덱스로, 딕셔너리는 의미있는 키로 접근해요'
          ],
          challenges: [
            {
              id: "c1",
              title: '딕셔너리 생성',
              description: '키-값 쌍으로 딕셔너리를 만드세요.',
              difficulty: "easy",
              hints: [
                '중괄호 {키: 값}',
                '키는 문자열, 숫자 등 불변 타입',
              ],
              estimatedMinutes: 3,
              starterCode: 'person = {\'name\': \'김코딩\', \'age\': 14}\nprint(person[\'name\"])  # 김코딩\nprint(person[\'age\"])   # 14',
              solution: 'person = {\'name\':\'김코딩\',\'age\':14}',
              testCases: [
                { input: 'person[\'name\"]', expected: '김코딩' },
                { input: 'person[\'age\"]', expected: '14' },
                { input: 'len(person)', expected: '2' },
                { input: 'type(person)', expected: '<class \'dict\'>' },
                { input: '{}.keys()', expected: 'dict_keys([])' },
              ],
              feedback: {
                perfect: '딕셔너리 생성 완벽!',
                good: '딕셔너리 생성 문법을 잘 이해했어요! 키-값 쌍의 구조가 핵심이에요.',
                partial: '{키: 값} 형태에서 키와 값의 구분을 다시 확인해보세요.',
                wrong: '{키:값} 형태로 만들어요.',
              },
            },
            {
              id: "c2",
              title: '값 접근과 KeyError',
              description: '딕셔너리에서 값을 안전하게 가져오세요.',
              difficulty: "easy",
              hints: [
                'dict[key]로 접근',
                '없는 키 -> KeyError',
              ],
              estimatedMinutes: 4,
              starterCode: 'd = {\'a\': 1, \'b\': 2}\nprint(d[\'a\"])  # 1\nprint(d.get(\'c\', 0))  # 0 (없으면 기본값)\n# print(d[\'c\"])  # KeyError!',
              solution: 'd[\'a\"]  # 직접 접근\nd.get(\'c\', 0)  # 안전 접근',
              testCases: [
                { input: 'd[\'a\"]', expected: '1' },
                { input: 'd.get(\'c\',0)', expected: '0' },
                { input: 'd.get(\'b\')', expected: '2' },
                { input: 'd.get(\'x\')', expected: 'None' },
                { input: 'd.get(\'x\',\'없음\')', expected: '없음' },
              ],
              feedback: {
                perfect: '안전한 접근법을 이해했어요!',
                good: '안전한 값 접근 방법을 잘 이해했어요! get()이 에러를 방지해줘요.',
                partial: 'dict[key]와 dict.get(key, 기본값)의 차이를 다시 확인하세요.',
                wrong: 'd.get(키, 기본값)으로 안전하게 접근',
              },
            },
            {
              id: "c3",
              title: '키-값 추가와 수정',
              description: '딕셔너리에 새 항목을 추가하고 기존 값을 수정하세요.',
              difficulty: "easy",
              hints: [
                'd[새키] = 값으로 추가',
                'd[기존키] = 새값으로 수정',
              ],
              estimatedMinutes: 4,
              starterCode: 'student = {\'name\': \'Alice\'}\nstudent[\'age\"] = 14      # 추가\nstudent[\'score\"] = 95    # 추가\nstudent[\'score\"] = 98    # 수정\nprint(student)',
              solution: 'student[\'age\"]=14; student[\'score\"]=95; student[\'score\"]=98',
              testCases: [
                { input: 'student after all', expected: '{\'name\':\'Alice\',\'age\':14,\'score\':98}' },
                { input: 'len(student)', expected: '3' },
                { input: 'student[\'score\"]', expected: '98' },
                { input: '새키 추가 후 len', expected: '증가' },
                { input: '기존키 수정 후 len', expected: '동일' },
              ],
              feedback: {
                perfect: '추가와 수정을 정확히 이해했어요!',
                good: '딕셔너리에 키-값을 추가하고 수정하는 방법을 잘 익혔어요!',
                partial: 'dict[새키] = 값은 추가, dict[기존키] = 새값은 수정이에요.',
                wrong: 'd[키]=값으로 추가/수정 가능',
              },
            },
            {
              id: "c4",
              title: '딕셔너리와 리스트 비교',
              description: '리스트와 딕셔너리의 차이를 이해하세요.',
              difficulty: "medium",
              hints: [
                '리스트: 순서 있음, 인덱스',
                '딕셔너리: 이름(키)으로 접근',
              ],
              estimatedMinutes: 6,
              starterCode: '# 리스트: 위치(인덱스)로 접근\nstudent_list = [\'Alice\', 14, 95]\nprint(student_list[0])  # Alice\n\n# 딕셔너리: 키로 접근 (더 명확!)\nstudent_dict = {\'name\':\'Alice\', \'age\':14, \'score\':95}\nprint(student_dict[\'name\"])  # Alice',
              solution: '# 딕셔너리가 데이터 의미를 더 잘 표현',
              testCases: [
                { input: '리스트 접근', expected: '인덱스 번호' },
                { input: '딕셔너리 접근', expected: '의미있는 키' },
                { input: '리스트[0]', expected: 'Alice' },
                { input: '딕셔너리[\'name\"]', expected: 'Alice' },
                { input: '가독성', expected: '딕셔너리가 더 좋음' },
              ],
              feedback: {
                perfect: '차이를 정확히 이해했어요!',
                good: '리스트와 딕셔너리의 차이를 명확히 이해했어요! 용도가 달라요.',
                partial: '리스트는 순서(인덱스), 딕셔너리는 이름(키)으로 접근하는 차이를 확인하세요.',
                wrong: '딕셔너리는 키로, 리스트는 인덱스로 접근',
              },
            },
            {
              id: "c5",
              title: 'del과 pop으로 삭제',
              description: '딕셔너리에서 항목을 삭제하세요.',
              difficulty: "medium",
              hints: [
                'del d[키]: 삭제',
                'd.pop(키): 삭제하고 값 반환',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'a\':1, \'b\':2, \'c\':3}\ndel d[\'a\"]      # \'a\' 삭제\nval = d.pop(\'b\')  # \'b\' 삭제하고 값(2) 반환\nprint(d)    # {\'c\': 3}\nprint(val)  # 2',
              solution: 'del d[\'a\"]\nval = d.pop(\'b\')',
              testCases: [
                { input: 'del 후', expected: '{\'b\':2,\'c\':3}' },
                { input: 'pop(\'b\') 반환', expected: '2' },
                { input: '최종', expected: '{\'c\':3}' },
                { input: 'pop(\'x\',0) 없는키', expected: '0' },
                { input: 'del 없는키', expected: 'KeyError' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'del d[없는키] -> KeyError', suggestion: 'del d[없는키] -> KeyError' },
                { pattern: '일반', message: 'pop(키, 기본값)으로 안전 삭제', suggestion: 'pop(키, 기본값)으로 안전 삭제' },
              ],
              feedback: {
                perfect: '삭제 방법을 완벽히 이해했어요!',
                good: 'del과 pop의 차이를 잘 이해했어요! pop은 삭제한 값을 반환해요.',
                partial: 'del dict[key]는 삭제만, dict.pop(key)는 값을 반환하며 삭제해요.',
                wrong: 'del=삭제, pop=삭제+반환',
              },
            },
            {
              id: "c6",
              title: '딕셔너리 순회',
              description: 'for문으로 딕셔너리를 순회하세요.',
              difficulty: "medium",
              hints: [
                'keys(), values(), items()',
                'for k,v in d.items():',
              ],
              estimatedMinutes: 7,
              starterCode: 'scores = {\'Alice\':95, \'Bob\':87, \'Charlie\':92}\n\nfor name in scores:        # 키만\n    print(name)\nfor score in scores.values():  # 값만\n    print(score)\nfor name, score in scores.items():  # 키+값\n    print(f\'{name}: {score}점\')',
              solution: 'for name, score in scores.items():\n    print(f\'{name}: {score}점\')',
              testCases: [
                { input: 'list(scores.keys())', expected: '[\'Alice\',\'Bob\',\'Charlie\"]' },
                { input: 'list(scores.values())', expected: '[95,87,92]' },
                { input: 'list(scores.items())', expected: '[(\'Alice\',95),(\'Bob\',87),(\'Charlie\',92)]' },
                { input: 'for k in d: k는', expected: '키' },
                { input: 'len(scores.items())', expected: '3' },
              ],
              feedback: {
                perfect: '딕셔너리 순회를 완벽히 이해했어요!',
                good: 'keys(), values(), items()를 모두 잘 활용했어요!',
                partial: '.items()를 쓰면 키와 값을 동시에 받을 수 있어요.',
                wrong: 'items()로 키와 값을 동시에 순회',
              },
            },
            {
              id: "c7",
              title: 'in 연산자로 키 존재 확인',
              description: '키가 딕셔너리에 있는지 확인하세요.',
              difficulty: "medium",
              hints: [
                '키 in 딕셔너리',
                '값은 in으로 직접 확인 불가',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'name\':\'Alice\', \'age\':14}\nprint(\'name\' in d)     # True\nprint(\'score\' in d)    # False\nprint(\'Alice\' in d)    # False (값이 아닌 키만!)\nprint(\'Alice\' in d.values())  # True',
              solution: '\'name\' in d  # 키 확인\n\'Alice\' in d.values()  # 값 확인',
              testCases: [
                { input: '\'name\' in d', expected: 'True' },
                { input: '\'score\' in d', expected: 'False' },
                { input: '\'Alice\' in d', expected: 'False' },
                { input: '\'Alice\' in d.values()', expected: 'True' },
                { input: '14 in d.values()', expected: 'True' },
              ],
              feedback: {
                perfect: 'in 연산자를 정확히 이해했어요!',
                good: 'in 연산자로 키 존재를 확인하는 방법을 잘 사용했어요!',
                partial: 'key in dict는 키가 있는지 확인해요. 값이 아니라 키를 검사해요.',
                wrong: 'in은 키 검색, d.values()는 값 검색',
              },
            },
            {
              id: "c8",
              title: '딕셔너리 컴프리헨션',
              description: '컴프리헨션으로 딕셔너리를 만드세요.',
              difficulty: "hard",
              hints: [
                '{ k:v for k,v in ... }',
                '리스트에서 딕셔너리 생성',
              ],
              estimatedMinutes: 10,
              starterCode: '# 제곱수 딕셔너리\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1:1, 2:4, 3:9, 4:16, 5:25}\n\n# 두 리스트에서 딕셔너리\nnames = [\'Alice\',\'Bob\"]\nscores = [95, 87]\nresult = {n:s for n,s in zip(names, scores)}',
              solution: 'squares={x:x**2 for x in range(1,6)}\nresult={n:s for n,s in zip(names,scores)}',
              testCases: [
                { input: '{x:x**2 for x in range(1,4)}', expected: '{1:1,2:4,3:9}' },
                { input: '{n:s for n,s in zip([\'a\',\'b\"],[1,2])}', expected: '{\'a\':1,\'b\':2}' },
                { input: '{x:0 for x in \'abc\'}', expected: '{\'a\':0,\'b\':0,\'c\':0}' },
                { input: '{k:v for k,v in [(\'x\',1)]}', expected: '{\'x\':1}' },
                { input: 'len({x:x for x in range(5)})', expected: '5' },
              ],
              feedback: {
                perfect: '딕셔너리 컴프리헨션 완벽!',
                good: '딕셔너리 컴프리헨션을 잘 활용했어요! {키:값 for ...} 형태죠.',
                partial: '{키표현식: 값표현식 for 변수 in 반복가능} 구조를 확인하세요.',
                wrong: '{키:값 for ... } 형태',
              },
            },
            {
              id: "c9",
              title: '딕셔너리 vs JSON',
              description: '딕셔너리와 JSON의 관계를 이해하세요.',
              difficulty: "hard",
              hints: [
                'JSON은 딕셔너리와 매우 유사',
                'import json으로 변환',
              ],
              estimatedMinutes: 12,
              starterCode: 'import json\n\n# 딕셔너리 -> JSON 문자열\nperson = {\'name\': \'Alice\', \'age\': 14}\njson_str = json.dumps(person, ensure_ascii=False)\nprint(json_str)  # {"name": "Alice", "age": 14}\n\n# JSON 문자열 -> 딕셔너리\ndata = json.loads(json_str)\nprint(data[\'name\"])  # Alice',
              solution: 'json.dumps(dict)  # dict -> JSON\njson.loads(str)   # JSON -> dict',
              testCases: [
                { input: 'json.dumps({\'a\':1})', expected: '\'{"a": 1}\'' },
                { input: 'json.loads(\'{"a":1}\')', expected: '{\'a\': 1}' },
                { input: 'type(json.loads(\'{}\'))', expected: 'dict' },
                { input: 'json.dumps([1,2])', expected: '\'[1, 2]\'' },
                { input: 'json.dumps({}, indent=2)', expected: '\'{}\'' },
              ],
              feedback: {
                perfect: 'JSON 변환을 완벽히 이해했어요!',
                good: '딕셔너리와 JSON의 관계를 잘 이해했어요! 매우 비슷하죠.',
                partial: 'JSON은 문자열이고, 딕셔너리는 파이썬 객체라는 차이를 기억하세요.',
                wrong: 'dumps=딕셔너리->JSON, loads=JSON->딕셔너리',
              },
            },
            {
              id: "c10",
              title: '마스터: 단어 빈도 카운터',
              description: '문장에서 각 단어의 빈도를 딕셔너리로 세세요.',
              difficulty: "hard",
              hints: [
                'split()으로 단어 분리',
                'dict[word] = dict.get(word,0)+1',
              ],
              estimatedMinutes: 15,
              starterCode: 'def word_count(text):\n    words = text.lower().split()\n    counter = {}\n    for word in words:\n        counter[word] = counter.get(word, 0) + 1\n    return counter\n\nresult = word_count(\'the cat sat on the mat the cat\')\nprint(result)\n# {\'the\':3, \'cat\':2, \'sat\':1, \'on\':1, \'mat\':1}',
              solution: 'def word_count(t):\n    c={}\n    for w in t.lower().split():\n        c[w]=c.get(w,0)+1\n    return c',
              testCases: [
                { input: 'word_count(\'a b a\')', expected: '{\'a\':2,\'b\':1}' },
                { input: 'word_count(\'\')', expected: '{}' },
                { input: 'word_count(\'hello\')', expected: '{\'hello\':1}' },
                { input: 'word_count(\'a a a\')[\'a\"]', expected: '3' },
                { input: 'len(word_count(\'a b c\'))', expected: '3' },
              ],
              commonErrors: [
                { pattern: '일반', message: '대소문자 통일 안 하면 \'The\'와 \'the\'가 별도', suggestion: '대소문자 통일 안 하면 \'The\'와 \'the\'가 별도' },
                { pattern: '일반', message: '구두점 처리도 고려할 수 있음', suggestion: '구두점 처리도 고려할 수 있음' },
              ],
              feedback: {
                perfect: '단어 빈도 카운터 완벽!',
                good: '단어 빈도 카운터를 잘 만들었어요! 딕셔너리 활용이 뛰어나요.',
                partial: '단어를 키로, 개수를 값으로 저장하는 딕셔너리 구조를 확인하세요.',
                wrong: 'get(키,0)+1 패턴으로 카운트',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-2',
          title: '딕셔너리 만들기',
          description: '딕셔너리를 생성하고 접근해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '딕셔너리 생성과 접근',
          conceptExplanation: `
딕셔너리는 중괄호 {}로 생성하고, 키로 값에 접근합니다.
dict() 생성자나 딕셔너리 컴프리헨션으로도 만들 수 있습니다.
존재하지 않는 키에 접근하면 에러가 발생하므로 get() 메서드를 사용하는 것이 안전합니다.
예: 사용자 프로필 생성, 환경 설정 읽기, API 응답 파싱 등에 사용됩니다.
`,
          starterCode: '# 딕셔너리 생성\nstudent = {\n    "name": "김코딩",\n    "age": 14,\n    "grade": "중학교 2학년",\n    "scores": [85, 90, 78]\n}\n\n# 값 접근 (키 사용)\nprint(student["name"])   # 김코딩\nprint(student["age"])    # 14\nprint(student["scores"]) # [85, 90, 78]\n\n# get() 메서드 (키가 없어도 에러 안 남)\nprint(student.get("hobby"))        # None\nprint(student.get("hobby", "없음")) # 없음\n',
          hints: [
            '💡 힌트 1: {키1: 값1, 키2: 값2} 형식으로 딕셔너리 생성',
            '💡 힌트 2: 딕셔너리[키]로 값에 접근 - 없는 키면 에러',
            '💡 힌트 3: get(키)는 키가 없으면 None 반환 - 에러 대신 안전하게'
          ],
          commonMistakes: [
            '없는 키 접근 시 KeyError - get()을 사용하거나 in으로 먼저 확인',
            '키에 리스트 사용 시도 - 키는 immutable 해야 함 (문자열, 숫자, 튜플만)',
            '딕셔너리 순서 의존 - Python 3.7+ 부터는 순서 유지하지만 인덱스 접근 불가'
          ],
          challenges: [
            {
              id: "c1",
              title: '빈 딕셔너리와 dict()',
              description: '딕셔너리를 만드는 여러 방법을 연습하세요.',
              difficulty: "easy",
              hints: [
                '{}로 빈 딕셔너리',
                'dict()로도 생성 가능',
              ],
              estimatedMinutes: 3,
              starterCode: 'd1 = {}  # 빈 딕셔너리\nd2 = dict()  # 같은 결과\nd3 = dict(name=\'Alice\', age=14)  # 키워드로 생성\nprint(d3)',
              solution: 'd3 = dict(name=\'Alice\', age=14)',
              testCases: [
                { input: '{}', expected: '빈 딕셔너리' },
                { input: 'dict()', expected: '빈 딕셔너리' },
                { input: 'dict(a=1,b=2)', expected: '{\'a\':1,\'b\':2}' },
                { input: 'type({})', expected: 'dict' },
                { input: 'len({})', expected: '0' },
              ],
              feedback: {
                perfect: '딕셔너리 생성법을 모두 이해했어요!',
                good: '두 가지 생성 방법을 잘 이해했어요! {}와 dict() 모두 가능해요.',
                partial: '{}는 빈 딕셔너리, set()이 아니에요. dict()도 빈 딕셔너리를 만들어요.',
                wrong: '{}나 dict()로 생성',
              },
            },
            {
              id: "c2",
              title: '리스트에서 딕셔너리 만들기',
              description: '두 리스트를 zip으로 딕셔너리로 변환하세요.',
              difficulty: "easy",
              hints: [
                'dict(zip(키리스트, 값리스트))',
              ],
              estimatedMinutes: 4,
              starterCode: 'keys = [\'name\', \'age\', \'score\"]\nvalues = [\'Alice\', 14, 95]\nstudent = dict(zip(keys, values))\nprint(student)',
              solution: 'student = dict(zip(keys, values))',
              testCases: [
                { input: 'dict(zip([\'a\',\'b\"],[1,2]))', expected: '{\'a\':1,\'b\':2}' },
                { input: 'dict(zip([],[]))', expected: '{}' },
                { input: 'len(result)', expected: '3' },
                { input: 'result[\'name\"]', expected: 'Alice' },
                { input: 'dict(zip(\'ab\',[1,2]))', expected: '{\'a\':1,\'b\':2}' },
              ],
              feedback: {
                perfect: 'zip으로 딕셔너리 생성 완벽!',
                good: 'zip과 dict()를 조합해서 딕셔너리를 잘 만들었어요!',
                partial: 'dict(zip(키리스트, 값리스트)) 패턴을 다시 확인해보세요.',
                wrong: 'dict(zip(키들, 값들))',
              },
            },
            {
              id: "c3",
              title: 'fromkeys로 초기화',
              description: 'dict.fromkeys()로 동일한 기본값의 딕셔너리를 만드세요.',
              difficulty: "easy",
              hints: [
                'dict.fromkeys(키들, 기본값)',
              ],
              estimatedMinutes: 4,
              starterCode: 'subjects = [\'수학\', \'영어\', \'과학\"]\nscores = dict.fromkeys(subjects, 0)\nprint(scores)  # {\'수학\':0, \'영어\':0, \'과학\':0}',
              solution: 'scores = dict.fromkeys(subjects, 0)',
              testCases: [
                { input: 'dict.fromkeys([\'a\',\'b\"],0)', expected: '{\'a\':0,\'b\':0}' },
                { input: 'dict.fromkeys(\'abc\',1)', expected: '{\'a\':1,\'b\':1,\'c\':1}' },
                { input: 'dict.fromkeys([],0)', expected: '{}' },
                { input: 'dict.fromkeys([\'x\"])', expected: '{\'x\':None}' },
                { input: 'len(dict.fromkeys(range(3),0))', expected: '3' },
              ],
              feedback: {
                perfect: 'fromkeys 활용 완벽!',
                good: 'fromkeys()로 여러 키를 같은 값으로 초기화하는 방법을 잘 익혔어요!',
                partial: 'dict.fromkeys(키리스트, 기본값) 사용법을 다시 확인하세요.',
                wrong: 'fromkeys(키들, 기본값)으로 초기화',
              },
            },
            {
              id: "c4",
              title: 'setdefault 메서드',
              description: 'setdefault()로 키가 없을 때만 값을 설정하세요.',
              difficulty: "medium",
              hints: [
                '있으면 기존값 반환',
                '없으면 설정하고 반환',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'a\': 1}\nval = d.setdefault(\'a\', 99)  # 이미 있으므로 1 반환\nprint(val, d)  # 1 {\'a\':1}\n\nval = d.setdefault(\'b\', 99)  # 없으므로 99 설정\nprint(val, d)  # 99 {\'a\':1,\'b\':99}',
              solution: 'd.setdefault(키, 기본값)',
              testCases: [
                { input: 'd={\'a\':1}; d.setdefault(\'a\',99)', expected: '1' },
                { input: 'd={\'a\':1}; d.setdefault(\'b\',99)', expected: '99' },
                { input: 'setdefault 후 d', expected: '{\'a\':1,\'b\':99}' },
                { input: 'd={}; d.setdefault(\'x\',0)', expected: '0' },
                { input: 'setdefault 없는키 후 len', expected: '증가' },
              ],
              feedback: {
                perfect: 'setdefault를 정확히 이해했어요!',
                good: 'setdefault()의 동작을 잘 이해했어요! 키가 없을 때만 추가하는 거죠.',
                partial: 'setdefault(키, 기본값)은 키가 없을 때만 값을 설정해요.',
                wrong: '있으면 기존값, 없으면 설정+반환',
              },
            },
            {
              id: "c5",
              title: 'update로 딕셔너리 병합',
              description: 'update()로 두 딕셔너리를 합치세요.',
              difficulty: "medium",
              hints: [
                'd.update(다른딕셔너리)',
                '중복 키는 덮어씌움',
              ],
              estimatedMinutes: 7,
              starterCode: 'd1 = {\'a\':1, \'b\':2}\nd2 = {\'b\':3, \'c\':4}\nd1.update(d2)\nprint(d1)  # {\'a\':1, \'b\':3, \'c\':4}',
              solution: 'd1.update(d2)  # b가 3으로 덮어씌워짐',
              testCases: [
                { input: '{\'a\':1}.update({\'b\':2})', expected: '{\'a\':1,\'b\':2}' },
                { input: '{\'a\':1,\'b\':2}.update({\'b\':3})', expected: '{\'a\':1,\'b\':3}' },
                { input: 'update 후 원본', expected: '변경됨' },
                { input: '{**d1,**d2}', expected: '새 딕셔너리' },
                { input: 'd1|d2 (3.9+)', expected: '새 딕셔너리' },
              ],
              feedback: {
                perfect: 'update 병합을 이해했어요!',
                good: 'update()로 딕셔너리를 잘 병합했어요! 같은 키는 덮어씌워져요.',
                partial: 'update()는 기존 딕셔너리에 다른 딕셔너리를 병합해요.',
                wrong: 'update()는 원본 변경, 중복키는 덮어씌움',
              },
            },
            {
              id: "c6",
              title: '딕셔너리를 리스트로 변환',
              description: 'keys(), values(), items()를 리스트로 변환하세요.',
              difficulty: "medium",
              hints: [
                'list(d.keys())',
                'list(d.items())',
              ],
              estimatedMinutes: 7,
              starterCode: 'd = {\'name\':\'Alice\',\'age\':14,\'score\':95}\nkeys = list(d.keys())\nvals = list(d.values())\nitems = list(d.items())\nprint(keys, vals, items)',
              solution: 'list(d.keys()), list(d.values()), list(d.items())',
              testCases: [
                { input: 'list({\'a\':1,\'b\':2}.keys())', expected: '[\'a\',\'b\"]' },
                { input: 'list({\'a\':1,\'b\':2}.values())', expected: '[1,2]' },
                { input: 'list({\'a\':1}.items())', expected: '[(\'a\',1)]' },
                { input: 'list({}.keys())', expected: '[]' },
                { input: 'dict(list(d.items()))', expected: '원본과 동일' },
              ],
              feedback: {
                perfect: '딕셔너리-리스트 변환 완벽!',
                good: 'keys(), values(), items()를 리스트로 잘 변환했어요!',
                partial: 'list(dict.keys()), list(dict.values()), list(dict.items())를 확인하세요.',
                wrong: 'keys/values/items를 list()로 변환',
              },
            },
            {
              id: "c7",
              title: '| 연산자로 병합 (Python 3.9+)',
              description: '파이프 연산자로 딕셔너리를 병합하세요.',
              difficulty: "medium",
              hints: [
                'd1 | d2 = 새 딕셔너리',
                'd1 |= d2 = 원본 변경',
              ],
              estimatedMinutes: 8,
              starterCode: 'd1 = {\'a\':1, \'b\':2}\nd2 = {\'b\':3, \'c\':4}\nmerged = d1 | d2  # 새 딕셔너리\nprint(merged)  # {\'a\':1, \'b\':3, \'c\':4}\nprint(d1)      # {\'a\':1, \'b\':2} 원본 불변',
              solution: 'merged = d1 | d2',
              testCases: [
                { input: '{\'a\':1}|{\'b\':2}', expected: '{\'a\':1,\'b\':2}' },
                { input: '{\'a\':1,\'b\':2}|{\'b\':3}', expected: '{\'a\':1,\'b\':3}' },
                { input: '원본 변경?', expected: '아니오(|), 예(|=)' },
                { input: '{} | {\'a\':1}', expected: '{\'a\':1}' },
                { input: '{\'a\':1} | {}', expected: '{\'a\':1}' },
              ],
              feedback: {
                perfect: '| 연산자를 이해했어요!',
                good: '| 연산자로 딕셔너리를 병합하는 최신 문법을 잘 활용했어요!',
                partial: 'd1 | d2는 두 딕셔너리를 합친 새 딕셔너리를 만들어요.',
                wrong: '|는 새 딕셔너리, |=는 원본 변경',
              },
            },
            {
              id: "c8",
              title: '딕셔너리로 그룹핑',
              description: '데이터를 특정 기준으로 그룹핑하세요.',
              difficulty: "hard",
              hints: [
                'setdefault로 빈 리스트 초기화',
                '키별로 값을 모으기',
              ],
              estimatedMinutes: 12,
              starterCode: 'students = [(\'A\',95),(\'B\',87),(\'A\',88),(\'C\',92),(\'B\',91)]\n\ndef group_by_class(data):\n    groups = {}\n    for cls, score in data:\n        groups.setdefault(cls, []).append(score)\n    return groups\n\nprint(group_by_class(students))',
              solution: 'def group_by_class(data):\n    g={}\n    for c,s in data: g.setdefault(c,[]).append(s)\n    return g',
              testCases: [
                { input: 'group_by_class([(\'A\',1),(\'B\',2),(\'A\',3)])', expected: '{\'A\':[1,3],\'B\':[2]}' },
                { input: 'group_by_class([])', expected: '{}' },
                { input: 'len(group_by_class([(\'A\',1),(\'A\',2)]))', expected: '1' },
                { input: 'group_by_class([(\'X\',1)])', expected: '{\'X\':[1]}' },
                { input: 'group_by_class([(\'A\',1)])[\'A\"]', expected: '[1]' },
              ],
              feedback: {
                perfect: '그룹핑을 멋지게 구현했어요!',
                good: '데이터를 딕셔너리로 그룹화하는 패턴을 잘 구현했어요!',
                partial: 'setdefault(키, []).append(값) 패턴으로 그룹핑하는 방법을 확인하세요.',
                wrong: 'setdefault(키,[]).append(값) 패턴',
              },
            },
            {
              id: "c9",
              title: 'Counter로 빈도 세기',
              description: 'collections.Counter로 간편하게 빈도를 세세요.',
              difficulty: "hard",
              hints: [
                'from collections import Counter',
                'Counter(리스트)',
              ],
              estimatedMinutes: 12,
              starterCode: 'from collections import Counter\n\nwords = \'the cat sat on the mat the cat\'.split()\ncounter = Counter(words)\nprint(counter.most_common(3))  # [(\'the\',3),(\'cat\',2),(\'sat\',1)]',
              solution: 'from collections import Counter\ncounter = Counter(words)',
              testCases: [
                { input: 'Counter(\'aabbc\')', expected: '{\'a\':2,\'b\':2,\'c\':1}' },
                { input: 'Counter([1,1,2,3]).most_common(1)', expected: '[(1,2)]' },
                { input: 'Counter(\'abc\')[\'a\"]', expected: '1' },
                { input: 'Counter(\'abc\')[\'x\"]', expected: '0' },
                { input: 'dict(Counter(\'aab\'))', expected: '{\'a\':2,\'b\':1}' },
              ],
              feedback: {
                perfect: 'Counter를 멋지게 활용했어요!',
                good: 'Counter를 잘 활용했어요! most_common()도 유용해요.',
                partial: 'from collections import Counter 후 Counter(리스트)로 사용하세요.',
                wrong: 'Counter(iterable)로 빈도 자동 계산',
              },
            },
            {
              id: "c10",
              title: '마스터: 인벤토리 시스템',
              description: '딕셔너리로 게임 인벤토리를 관리하세요.',
              difficulty: "hard",
              hints: [
                '아이템 추가/사용/확인',
                '수량 관리',
              ],
              estimatedMinutes: 18,
              starterCode: 'class Inventory:\n    def __init__(self):\n        self.items = {}\n    def add(self, item, qty=1):\n        self.items[item] = self.items.get(item, 0) + qty\n    def use(self, item, qty=1):\n        if self.items.get(item, 0) >= qty:\n            self.items[item] -= qty\n            if self.items[item] == 0: del self.items[item]\n            return True\n        return False\n    def show(self):\n        for item, qty in self.items.items():\n            print(f\'  {item}: {qty}개\')\n\ninv = Inventory()\ninv.add(\'물약\', 3)\ninv.add(\'검\')\ninv.use(\'물약\')\ninv.show()',
              solution: '# get(item,0)+qty로 추가, 0이면 del로 삭제',
              testCases: [
                { input: 'add(\'물약\',3) -> show', expected: '물약:3' },
                { input: 'use(\'물약\') -> show', expected: '물약:2' },
                { input: 'use(\'없는아이템\')', expected: 'False' },
                { input: 'add(\'검\'); add(\'검\')', expected: '검:2' },
                { input: 'use(\'물약\',5) 수량부족', expected: 'False' },
              ],
              feedback: {
                perfect: '완벽해요!',
                good: '인벤토리 시스템을 잘 만들었어요! 딕셔너리 활용이 실전적이에요.',
                partial: '아이템 추가/삭제/수량 변경 로직을 다시 정리해보세요.',
                wrong: '마스터: 인벤토리 시스템의 기본 개념부터 다시 확인해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-3',
          title: '딕셔너리 수정',
          description: '값을 추가, 수정, 삭제해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '딕셔너리 조작',
          conceptExplanation: `
딕셔너리는 키-값 추가, 수정, 삭제가 자유롭습니다.
대괄호로 값 할당, del로 삭제, update()로 병합 등 다양한 조작이 가능합니다.
가변(mutable) 자료구조라서 프로그램 실행 중 동적으로 데이터를 관리할 수 있습니다.
예: 장바구니 상품 수량 변경, 게임 설정 업데이트, 캐시 데이터 갱신 등에 활용됩니다.
`,
          starterCode: 'person = {"name": "홍길동", "age": 25}\n\n# 추가\nperson["city"] = "서울"\nprint(person)  # {"name": "홍길동", "age": 25, "city": "서울"}\n\n# 수정\nperson["age"] = 26\nprint(person["age"])  # 26\n\n# 삭제\ndel person["city"]\nprint(person)  # {"name": "홍길동", "age": 26}\n\n# pop으로 삭제 (값 반환)\nremoved = person.pop("age")\nprint(f"제거된 나이: {removed}")\nprint(person)  # {"name": "홍길동"}\n',
          hints: [
            '💡 힌트 1: 딕셔너리[새키] = 값 으로 새 항목 추가',
            '💡 힌트 2: 같은 키에 할당하면 기존 값이 덮어씌워져요 (수정)',
            '💡 힌트 3: del dict[키] 또는 dict.pop(키)로 삭제'
          ],
          commonMistakes: [
            'del과 pop() 혼동 - del은 반환값 없음, pop()은 삭제된 값 반환',
            '없는 키 삭제 시 에러 - pop(키, 기본값)으로 안전하게 삭제',
            '딕셔너리 순회 중 수정/삭제 - 런타임 에러, 리스트로 변환 후 수정'
          ],
          challenges: [
            {
              id: "c1",
              title: '값 수정하기',
              description: '딕셔너리의 기존 값을 수정하세요.',
              difficulty: "easy",
              hints: [
                'd[키] = 새값',
              ],
              estimatedMinutes: 3,
              starterCode: 'scores = {\'Alice\':85, \'Bob\':92}\nscores[\'Alice\"] = 90\nprint(scores)  # {\'Alice\':90, \'Bob\':92}',
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리 값 수정을 잘 수행했어요! dict[key] = 새값이 핵심이에요.',
                partial: '기존 키에 새 값을 할당하면 수정이 돼요.',
                wrong: '힌트를 참고해서 값 수정하기을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c2",
              title: '조건부 수정',
              description: '조건에 따라 값을 수정하세요.',
              difficulty: "easy",
              hints: [
                'if로 조건 확인 후 수정',
              ],
              estimatedMinutes: 4,
              starterCode: 'prices = {\'apple\':1000, \'banana\':500, \'grape\':2000}\n# 1000원 이상은 10% 할인\nfor item in prices:\n    if prices[item] >= 1000:\n        prices[item] = int(prices[item] * 0.9)\nprint(prices)',
              feedback: {
                perfect: '완벽해요!',
                good: '조건에 따라 값을 수정하는 패턴을 잘 구현했어요!',
                partial: 'if key in dict: 로 먼저 확인 후 수정하는 패턴을 확인하세요.',
                wrong: '조건부 수정 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c3",
              title: '딕셔너리 컴프리헨션으로 변환',
              description: '컴프리헨션으로 값을 일괄 변환하세요.',
              difficulty: "easy",
              hints: [
                '{ k: 변환(v) for k,v in d.items() }',
              ],
              estimatedMinutes: 5,
              starterCode: 'scores = {\'Alice\':85,\'Bob\':92,\'Charlie\':78}\n# 모든 점수에 5점 추가\nboosted = {k:v+5 for k,v in scores.items()}\nprint(boosted)',
              feedback: {
                perfect: '완벽해요!',
                good: '컴프리헨션으로 딕셔너리를 변환하는 기술을 잘 활용했어요!',
                partial: '{키: 변환(값) for 키, 값 in dict.items()} 패턴을 확인하세요.',
                wrong: '힌트를 참고해서 딕셔너리 컴프리헨션으로 변환을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c4",
              title: 'pop과 popitem',
              description: 'pop()과 popitem()의 차이를 이해하세요.',
              difficulty: "medium",
              hints: [
                'pop(키): 특정 키 제거',
                'popitem(): 마지막 항목 제거',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'a\':1,\'b\':2,\'c\':3}\nval = d.pop(\'b\')      # \'b\' 제거, 2 반환\nprint(val, d)\nlast = d.popitem()    # 마지막 항목 제거\nprint(last, d)',
              feedback: {
                perfect: '완벽해요!',
                good: 'pop()과 popitem()의 차이를 잘 이해했어요! 용도가 다르죠.',
                partial: 'pop(키)는 특정 키 삭제, popitem()은 마지막 항목 삭제예요.',
                wrong: 'pop과 popitem의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c5",
              title: 'clear와 copy',
              description: '딕셔너리를 비우거나 복사하세요.',
              difficulty: "medium",
              hints: [
                'clear(): 모든 항목 삭제',
                'copy(): 얕은 복사',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'a\':1,\'b\':2}\ncopy_d = d.copy()  # 얕은 복사\nd.clear()          # 비우기\nprint(d)       # {}\nprint(copy_d)  # {\'a\':1,\'b\':2}',
              feedback: {
                perfect: '완벽해요!',
                good: 'clear()와 copy()를 잘 사용했어요! 원본 보호가 중요하죠.',
                partial: 'clear()는 전체 삭제, copy()는 얕은 복사를 만들어요.',
                wrong: 'clear와 copy의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c6",
              title: '중첩 딕셔너리 수정',
              description: '딕셔너리 안의 딕셔너리 값을 수정하세요.',
              difficulty: "medium",
              hints: [
                'd[외부키][내부키] = 값',
              ],
              estimatedMinutes: 8,
              starterCode: 'school = {\n    \'class_a\': {\'teacher\':\'Kim\', \'students\':30},\n    \'class_b\': {\'teacher\':\'Lee\', \'students\':28}\n}\nschool[\'class_a\"][\'students\"] = 31\nprint(school[\'class_a\"])',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리의 내부 값을 정확히 수정했어요!',
                partial: 'dict[외부키][내부키] = 값 형태로 중첩 접근하세요.',
                wrong: '중첩 딕셔너리 수정 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c7",
              title: '딕셔너리 필터링',
              description: '조건에 맞는 항목만 필터링하세요.',
              difficulty: "medium",
              hints: [
                '컴프리헨션에 if 조건 추가',
              ],
              estimatedMinutes: 8,
              starterCode: 'scores = {\'Alice\':95,\'Bob\':42,\'Charlie\':78,\'David\':55}\n# 60점 이상만 필터\npassed = {k:v for k,v in scores.items() if v >= 60}\nprint(passed)  # {\'Alice\':95, \'Charlie\':78}',
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리를 조건에 맞게 잘 필터링했어요! 컴프리헨션이 유용하죠.',
                partial: '{k:v for k,v in dict.items() if 조건} 패턴을 확인하세요.',
                wrong: '딕셔너리 필터링의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c8",
              title: '딕셔너리 정렬',
              description: '키 또는 값 기준으로 정렬하세요.',
              difficulty: "hard",
              hints: [
                'sorted(d.items(), key=lambda)',
                '딕셔너리는 삽입 순서 유지(3.7+)',
              ],
              estimatedMinutes: 12,
              starterCode: 'scores = {\'Charlie\':78,\'Alice\':95,\'Bob\':87}\n# 키 정렬\nby_key = dict(sorted(scores.items()))\n# 값 정렬 (내림차순)\nby_val = dict(sorted(scores.items(), key=lambda x:x[1], reverse=True))\nprint(by_val)',
              feedback: {
                perfect: '완벽해요!',
                good: 'sorted()와 items()로 딕셔너리를 잘 정렬했어요!',
                partial: 'sorted(dict.items(), key=lambda x: x[1])로 값 기준 정렬할 수 있어요.',
                wrong: '힌트를 참고해서 딕셔너리 정렬을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c9",
              title: 'defaultdict 활용',
              description: 'collections.defaultdict로 기본값 자동 생성하세요.',
              difficulty: "hard",
              hints: [
                'defaultdict(int): 0',
                'defaultdict(list): []',
              ],
              estimatedMinutes: 12,
              starterCode: 'from collections import defaultdict\n\n# 자동으로 0 초기화\ncounter = defaultdict(int)\nfor word in \'hello world hello\'.split():\n    counter[word] += 1\nprint(dict(counter))  # {\'hello\':2, \'world\':1}',
              feedback: {
                perfect: '완벽해요!',
                good: 'defaultdict를 잘 활용했어요! KeyError 걱정 없이 값을 추가할 수 있죠.',
                partial: 'from collections import defaultdict(기본타입) 사용법을 확인하세요.',
                wrong: 'defaultdict 활용의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 학생 DB 매니저',
              description: '딕셔너리로 학생 데이터베이스를 관리하세요.',
              difficulty: "hard",
              hints: [
                'CRUD 전체 구현',
                '검색/필터/정렬',
              ],
              estimatedMinutes: 18,
              starterCode: 'class StudentDB:\n    def __init__(self): self.db = {}\n    def add(self, id, name, score):\n        self.db[id] = {\'name\':name,\'score\':score}\n    def update(self, id, **kwargs):\n        if id in self.db: self.db[id].update(kwargs)\n    def delete(self, id): self.db.pop(id, None)\n    def search(self, name):\n        return {k:v for k,v in self.db.items() if v[\'name\"]==name}\n    def top_n(self, n):\n        return dict(sorted(self.db.items(), key=lambda x:x[1][\'score\"], reverse=True)[:n])',
              feedback: {
                perfect: '완벽해요!',
                good: '학생 DB를 딕셔너리로 잘 관리했어요! CRUD 기능이 완성적이에요.',
                partial: '추가/조회/수정/삭제 각 기능의 딕셔너리 연산을 다시 확인하세요.',
                wrong: '마스터: 학생 DB 매니저의 기본 개념부터 다시 확인해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-4',
          title: '딕셔너리 순회',
          description: 'keys(), values(), items()로 순회해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '딕셔너리 순회',
          conceptExplanation: `
딕셔너리는 keys(), values(), items()로 순회할 수 있습니다.
for문과 함께 사용하여 모든 데이터를 처리하거나 특정 조건에 맞는 항목을 찾을 수 있습니다.
키-값 쌍을 동시에 순회하려면 items()를 사용하는 것이 일반적입니다.
예: 전체 설정 출력, 점수 합계 계산, 조건 만족 항목 필터링 등에 사용됩니다.
`,
          starterCode: 'scores = {"국어": 85, "영어": 90, "수학": 78}\n\n# 키만 순회\nfor subject in scores.keys():\n    print(subject)\n\n# 값만 순회\nfor score in scores.values():\n    print(score)\n\n# 키와 값 함께 순회 (가장 많이 씀!)\nfor subject, score in scores.items():\n    print(f"{subject}: {score}점")\n',
          hints: [
            '💡 힌트 1: keys()로 모든 키 반환 - for key in dict.keys()',
            '💡 힌트 2: values()로 모든 값 반환 - for val in dict.values()',
            '💡 힌트 3: items()로 (키, 값) 쌍 반환 - 가장 많이 사용!'
          ],
          commonMistakes: [
            'items() 언패킹 실수 - for item in dict.items()하면 튜플, for k, v in dict.items()로 분리',
            'dict 자체를 순회하면 키만 나옴 - for key in dict와 동일',
            'keys()/values() 결과를 리스트로 착각 - dict_keys/dict_values 객체, list()로 변환 가능'
          ],
          challenges: [
            {
              id: "c1",
              title: 'keys()로 키 순회',
              description: '딕셔너리의 모든 키를 출력하세요.',
              difficulty: "easy",
              hints: [
                'for k in d: 또는 for k in d.keys():',
              ],
              estimatedMinutes: 3,
              starterCode: 'menu = {\'김치찌개\':8000,\'된장찌개\':7000,\'비빔밥\':9000}\nfor item in menu:\n    print(item)',
              feedback: {
                perfect: '완벽해요!',
                good: 'keys()로 모든 키를 잘 순회했어요! for key in dict:도 같은 효과예요.',
                partial: 'for key in dict.keys(): 또는 for key in dict: 를 사용하세요.',
                wrong: '힌트를 참고해서 keys()로 키 순회을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c2",
              title: 'values()로 값 순회',
              description: '딕셔너리의 모든 값을 출력하세요.',
              difficulty: "easy",
              hints: [
                'for v in d.values():',
              ],
              estimatedMinutes: 3,
              starterCode: 'menu = {\'김치찌개\':8000,\'된장찌개\':7000,\'비빔밥\':9000}\ntotal = sum(menu.values())\nprint(f\'총액: {total}원\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'values()로 모든 값을 잘 순회했어요! 키 없이 값만 필요할 때 유용해요.',
                partial: 'for value in dict.values(): 로 값만 순회할 수 있어요.',
                wrong: 'values()로 값 순회의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c3",
              title: 'items()로 키-값 순회',
              description: '키와 값을 동시에 순회하세요.',
              difficulty: "easy",
              hints: [
                'for k,v in d.items():',
              ],
              estimatedMinutes: 4,
              starterCode: 'menu = {\'김치찌개\':8000,\'된장찌개\':7000,\'비빔밥\':9000}\nfor name, price in menu.items():\n    print(f\'{name}: {price:,}원\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'items()로 키와 값을 동시에 잘 받았어요! 가장 자주 쓰는 패턴이에요.',
                partial: 'for key, value in dict.items(): 로 키와 값을 동시에 받으세요.',
                wrong: '힌트를 참고해서 items()로 키-값 순회을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c4",
              title: '순회 중 조건 필터',
              description: '순회하면서 조건에 맞는 항목만 처리하세요.',
              difficulty: "medium",
              hints: [
                'if로 조건 확인',
              ],
              estimatedMinutes: 6,
              starterCode: 'scores = {\'Alice\':95,\'Bob\':42,\'Charlie\':78,\'David\':55,\'Eve\':88}\nfor name, score in scores.items():\n    if score >= 60:\n        print(f\'{name}: {score}점 (합격)\')',
              feedback: {
                perfect: '완벽해요!',
                good: '순회하면서 조건 필터링을 잘 적용했어요! 효율적인 코드예요.',
                partial: 'for k, v in dict.items(): if 조건: 패턴을 확인하세요.',
                wrong: '순회 중 조건 필터의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c5",
              title: '순회하며 새 딕셔너리 생성',
              description: '순회 결과를 새 딕셔너리에 담으세요.',
              difficulty: "medium",
              hints: [
                '빈 딕셔너리에 추가',
                '또는 컴프리헨션 사용',
              ],
              estimatedMinutes: 7,
              starterCode: 'prices = {\'apple\':1200,\'banana\':800,\'grape\':2500}\n# 1000원 이상만, 10% 할인 적용\nsale = {}\nfor item, price in prices.items():\n    if price >= 1000:\n        sale[item] = int(price * 0.9)\nprint(sale)',
              feedback: {
                perfect: '완벽해요!',
                good: '순회 결과로 새 딕셔너리를 잘 만들었어요! 컴프리헨션과 비교해보세요.',
                partial: '빈 딕셔너리에 조건에 맞는 항목을 추가하는 패턴을 확인하세요.',
                wrong: '순회하며 새 딕셔너리 생성 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c6",
              title: 'enumerate와 딕셔너리',
              description: '딕셔너리 순회에 번호를 붙이세요.',
              difficulty: "medium",
              hints: [
                'enumerate(d.items())',
              ],
              estimatedMinutes: 7,
              starterCode: 'menu = {\'김치찌개\':8000,\'된장찌개\':7000,\'비빔밥\':9000}\nfor i, (name, price) in enumerate(menu.items(), 1):\n    print(f\'{i}. {name}: {price:,}원\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'enumerate와 딕셔너리를 잘 조합했어요! 번호 매기기에 유용하죠.',
                partial: 'enumerate(dict.items())로 인덱스와 키-값을 동시에 얻을 수 있어요.',
                wrong: 'enumerate와 딕셔너리의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c7",
              title: '중첩 딕셔너리 순회',
              description: '딕셔너리 안의 딕셔너리를 순회하세요.',
              difficulty: "medium",
              hints: [
                '이중 for문',
                '외부키 -> 내부 딕셔너리',
              ],
              estimatedMinutes: 10,
              starterCode: 'school = {\n    \'1반\': {\'수학\':85,\'영어\':92},\n    \'2반\': {\'수학\':78,\'영어\':88}\n}\nfor cls, subjects in school.items():\n    print(f\'--- {cls} ---\')\n    for subject, score in subjects.items():\n        print(f\'  {subject}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리를 이중 for문으로 잘 순회했어요!',
                partial: '외부 딕셔너리 순회 후 내부 딕셔너리도 순회하는 패턴을 확인하세요.',
                wrong: '힌트를 참고해서 중첩 딕셔너리 순회을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c8",
              title: '딕셔너리에서 최대/최소 찾기',
              description: 'max/min을 key로 사용하여 찾으세요.',
              difficulty: "hard",
              hints: [
                'max(d, key=d.get)',
                'max(d.items(), key=lambda)',
              ],
              estimatedMinutes: 12,
              starterCode: 'scores = {\'Alice\':95,\'Bob\':87,\'Charlie\':92}\nbest = max(scores, key=scores.get)\nworst = min(scores, key=scores.get)\nprint(f\'최고: {best}({scores[best]}점)\')\nprint(f\'최저: {worst}({scores[worst]}점)\')',
              feedback: {
                perfect: '완벽해요!',
                good: 'max()와 key 매개변수로 딕셔너리의 최대값을 잘 찾았어요!',
                partial: 'max(dict, key=dict.get)으로 최대 값의 키를 찾을 수 있어요.',
                wrong: '딕셔너리에서 최대/최소 찾기의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c9",
              title: '딕셔너리 병합 순회',
              description: '여러 딕셔너리를 합쳐서 순회하세요.',
              difficulty: "hard",
              hints: [
                '**로 언패킹 병합',
                'ChainMap 활용',
              ],
              estimatedMinutes: 12,
              starterCode: 'from collections import ChainMap\nd1 = {\'a\':1,\'b\':2}\nd2 = {\'c\':3,\'d\':4}\nmerged = {**d1, **d2}\nfor k,v in merged.items():\n    print(f\'{k}: {v}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '여러 딕셔너리를 병합하며 순회하는 기술을 잘 활용했어요!',
                partial: 'ChainMap이나 {**d1, **d2}로 병합 후 순회하는 방법을 확인하세요.',
                wrong: '딕셔너리 병합 순회 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 성적표 리포트',
              description: '학생별 성적 딕셔너리로 리포트를 생성하세요.',
              difficulty: "hard",
              hints: [
                '과목별 평균',
                '학생별 총점/등수',
              ],
              estimatedMinutes: 18,
              starterCode: 'grades = {\n    \'Alice\': {\'수학\':95,\'영어\':88,\'과학\':92},\n    \'Bob\':   {\'수학\':78,\'영어\':85,\'과학\':80},\n    \'Charlie\':{\'수학\':92,\'영어\':90,\'과학\':88}\n}\n\n# 학생별 평균\nfor name, subjects in grades.items():\n    avg = sum(subjects.values()) / len(subjects)\n    print(f\'{name}: 평균 {avg:.1f}점\')\n\n# 과목별 평균\nfor subject in [\'수학\',\'영어\',\'과학\"]:\n    scores = [s[subject] for s in grades.values()]\n    print(f\'{subject} 평균: {sum(scores)/len(scores):.1f}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '성적표 리포트를 딕셔너리 순회로 잘 만들었어요! 보기 좋은 출력이에요.',
                partial: '순회하면서 통계 계산과 포맷팅을 함께 하는 구조를 확인하세요.',
                wrong: '마스터: 성적표 리포트의 기본 개념부터 다시 확인해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-5',
          title: '딕셔너리 메서드',
          description: '유용한 딕셔너리 메서드들을 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '딕셔너리 메서드',
          conceptExplanation: `
딕셔너리 메서드는 데이터를 효율적으로 다루는 내장 함수들입니다.
get()은 안전한 조회, setdefault()는 기본값 설정, pop()은 제거와 반환을 동시에 합니다.
이러한 메서드들을 적재적소에 사용하면 코드가 간결하고 안전해집니다.
예: 설정값 안전하게 읽기, 카운터 구현, 캐시 관리 등에 활용됩니다.
`,
          starterCode: 'd1 = {"a": 1, "b": 2}\nd2 = {"c": 3, "d": 4}\n\n# update: 합치기\nd1.update(d2)\nprint(d1)  # {"a": 1, "b": 2, "c": 3, "d": 4}\n\n# 키/값 존재 확인\nprint("a" in d1)      # True\nprint("z" in d1)      # False\nprint(1 in d1.values())  # True\n\n# clear: 모두 삭제\nd1.clear()\nprint(d1)  # {}\n\n# 딕셔너리 컴프리헨션\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n',
          hints: [
            '💡 힌트 1: update()로 다른 딕셔너리를 합치기 - 중복 키는 덮어쓰기',
            '💡 힌트 2: in 연산자로 키 존재 확인 - "key" in dict',
            '💡 힌트 3: 딕셔너리 컴프리헨션도 가능 - {k: v for ...}'
          ],
          commonMistakes: [
            'update() 반환값 착각 - None 반환, 원본 수정',
            'in으로 값 확인 시도 - in은 키만 확인, 값은 in dict.values()',
            '딕셔너리 컴프리헨션 문법 실수 - 콜론(:) 빼먹지 않기'
          ],
          challenges: [
            {
              id: "c1",
              title: 'get() 메서드',
              description: 'get()으로 안전하게 값을 가져오세요.',
              difficulty: "easy",
              hints: [
                'd.get(키, 기본값)',
                '없으면 기본값 반환',
              ],
              estimatedMinutes: 3,
              starterCode: 'd = {\'a\':1,\'b\':2}\nprint(d.get(\'a\'))      # 1\nprint(d.get(\'c\'))      # None\nprint(d.get(\'c\', 0))   # 0',
              feedback: {
                perfect: '완벽해요!',
                good: 'get()으로 안전한 값 접근을 잘 구현했어요! 기본값 활용이 좋아요.',
                partial: 'dict.get(키, 기본값)에서 키가 없으면 기본값을 반환해요.',
                wrong: '힌트를 참고해서 get() 메서드을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c2",
              title: 'keys/values/items',
              description: '세 가지 뷰 객체를 이해하세요.',
              difficulty: "easy",
              hints: [
                'd.keys() d.values() d.items()',
              ],
              estimatedMinutes: 4,
              starterCode: 'd = {\'name\':\'Alice\',\'age\':14}\nprint(list(d.keys()))    # [\'name\',\'age\"]\nprint(list(d.values()))  # [\'Alice\',14]\nprint(list(d.items()))   # [(\'name\',\'Alice\'),(\'age\',14)]',
              feedback: {
                perfect: '완벽해요!',
                good: '세 가지 뷰 메서드를 잘 활용했어요! 각각의 용도를 잘 이해했네요.',
                partial: 'keys()=키목록, values()=값목록, items()=쌍목록을 다시 정리하세요.',
                wrong: '힌트를 참고해서 keys/values/items을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c3",
              title: 'update() 메서드',
              description: '다른 딕셔너리나 키워드로 업데이트하세요.',
              difficulty: "easy",
              hints: [
                'd.update(other)',
                'd.update(key=val)',
              ],
              estimatedMinutes: 5,
              starterCode: 'd = {\'a\':1}\nd.update({\'b\':2,\'c\':3})\nd.update(d=4)\nprint(d)  # {\'a\':1,\'b\':2,\'c\':3,\'d\':4}',
              feedback: {
                perfect: '완벽해요!',
                good: 'update()로 딕셔너리를 잘 병합했어요! 같은 키는 덮어써지죠.',
                partial: 'dict1.update(dict2)는 dict1에 dict2를 합쳐요. 같은 키는 덮어써요.',
                wrong: 'update() 메서드의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c4",
              title: 'pop과 popitem',
              description: '항목을 제거하며 반환하세요.',
              difficulty: "medium",
              hints: [
                'pop(키)=특정키',
                'popitem()=마지막항목',
              ],
              estimatedMinutes: 6,
              starterCode: 'd = {\'a\':1,\'b\':2,\'c\':3}\nval = d.pop(\'b\')      # 2 반환\nprint(val, d)\nlast = d.popitem()    # (\'c\',3) 반환\nprint(last, d)',
              feedback: {
                perfect: '완벽해요!',
                good: 'pop()과 popitem()의 차이를 명확히 이해했어요!',
                partial: 'pop(키)는 해당 키 삭제+반환, popitem()은 마지막 쌍 삭제+반환이에요.',
                wrong: 'pop과 popitem의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c5",
              title: 'setdefault 활용',
              description: '존재하지 않는 키를 안전하게 초기화하세요.',
              difficulty: "medium",
              hints: [
                '있으면 기존값, 없으면 설정+반환',
              ],
              estimatedMinutes: 7,
              starterCode: '# 카테고리별 항목 수집\ncategories = {}\ndata = [(\'과일\',\'사과\'),(\'채소\',\'당근\'),(\'과일\',\'바나나\')]\nfor cat, item in data:\n    categories.setdefault(cat, []).append(item)\nprint(categories)',
              feedback: {
                perfect: '완벽해요!',
                good: 'setdefault()를 실전적으로 잘 활용했어요! 그룹핑에 특히 유용해요.',
                partial: 'setdefault(키, 기본값)은 키가 없을 때만 기본값을 설정하고 반환해요.',
                wrong: 'setdefault 활용의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c6",
              title: 'copy와 deepcopy',
              description: '딕셔너리를 안전하게 복사하세요.',
              difficulty: "medium",
              hints: [
                'copy()는 얕은 복사',
                'deepcopy()는 깊은 복사',
              ],
              estimatedMinutes: 8,
              starterCode: 'import copy\nd = {\'a\': [1,2,3]}\nshallow = d.copy()\ndeep = copy.deepcopy(d)\nd[\'a\"].append(4)\nprint(shallow[\'a\"])  # [1,2,3,4] 영향 받음\nprint(deep[\'a\"])     # [1,2,3] 독립',
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리의 얕은 복사와 깊은 복사를 잘 구분했어요!',
                partial: 'dict.copy()는 얕은 복사, copy.deepcopy(dict)는 깊은 복사예요.',
                wrong: 'copy와 deepcopy 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c7",
              title: 'fromkeys로 초기화',
              description: '동일 기본값의 딕셔너리를 한 번에 만드세요.',
              difficulty: "medium",
              hints: [
                'dict.fromkeys(키들, 기본값)',
              ],
              estimatedMinutes: 7,
              starterCode: 'days = [\'월\',\'화\',\'수\',\'목\',\'금\"]\nschedule = dict.fromkeys(days, \'자습\')\nschedule[\'수\"] = \'체육\'\nprint(schedule)',
              feedback: {
                perfect: '완벽해요!',
                good: 'fromkeys()로 효율적으로 딕셔너리를 초기화했어요!',
                partial: 'dict.fromkeys([키1, 키2], 기본값)으로 여러 키를 한번에 초기화해요.',
                wrong: 'fromkeys로 초기화 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '딕셔너리 연산 조합',
              description: '여러 메서드를 조합하여 데이터를 처리하세요.',
              difficulty: "hard",
              hints: [
                'get+update+pop 조합',
                '실전 패턴',
              ],
              estimatedMinutes: 12,
              starterCode: '# 설정값 관리\ndefaults = {\'theme\':\'light\',\'font_size\':14,\'lang\':\'ko\'}\nuser_prefs = {\'theme\':\'dark\',\'font_size\':16}\n\n# 기본값 + 사용자 설정 병합\nconfig = defaults.copy()\nconfig.update(user_prefs)\nprint(config)',
              feedback: {
                perfect: '완벽해요!',
                good: '여러 메서드를 조합해서 복잡한 작업을 잘 처리했어요!',
                partial: '각 메서드의 반환값을 확인하고 순서대로 조합해보세요.',
                wrong: '딕셔너리 연산 조합 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c9",
              title: 'OrderedDict vs dict',
              description: 'OrderedDict와 일반 dict의 차이를 이해하세요.',
              difficulty: "hard",
              hints: [
                'Python 3.7+ dict는 삽입순서 유지',
                'OrderedDict는 순서 비교 지원',
              ],
              estimatedMinutes: 12,
              starterCode: 'from collections import OrderedDict\n\nod1 = OrderedDict([(\'a\',1),(\'b\',2)])\nod2 = OrderedDict([(\'b\',2),(\'a\',1)])\nprint(od1 == od2)  # False (순서 다름)\n\nd1 = {\'a\':1,\'b\':2}\nd2 = {\'b\':2,\'a\':1}\nprint(d1 == d2)  # True (순서 무관)',
              feedback: {
                perfect: '완벽해요!',
                good: 'OrderedDict와 일반 dict의 차이를 잘 이해했어요!',
                partial: 'Python 3.7+에서 dict도 삽입 순서를 유지하지만, OrderedDict는 추가 기능이 있어요.',
                wrong: 'OrderedDict vs dict 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 캐시 시스템',
              description: '딕셔너리로 간단한 LRU 캐시를 구현하세요.',
              difficulty: "hard",
              hints: [
                'maxsize 제한',
                '가장 오래된 항목 제거',
              ],
              estimatedMinutes: 18,
              starterCode: 'class SimpleCache:\n    def __init__(self, maxsize=3):\n        self.cache = {}\n        self.maxsize = maxsize\n    def get(self, key):\n        return self.cache.get(key)\n    def put(self, key, value):\n        if len(self.cache) >= self.maxsize and key not in self.cache:\n            oldest = next(iter(self.cache))\n            del self.cache[oldest]\n        self.cache[key] = value\n\nc = SimpleCache(3)\nc.put(\'a\',1); c.put(\'b\',2); c.put(\'c\',3)\nprint(c.cache)  # {\'a\':1,\'b\':2,\'c\':3}\nc.put(\'d\',4)   # \'a\' 제거됨\nprint(c.cache)  # {\'b\':2,\'c\':3,\'d\':4}',
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리로 캐시 시스템을 잘 구현했어요! 실무에서도 이런 패턴을 써요.',
                partial: '키로 조회하고 없으면 계산 후 저장하는 캐시 패턴을 확인하세요.',
                wrong: '힌트를 참고해서 마스터: 캐시 시스템을(를) 다시 시도해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-6',
          title: '중첩 딕셔너리',
          description: '딕셔너리 안에 딕셔너리를 넣어봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: '중첩 딕셔너리',
          conceptExplanation: `
중첩 딕셔너리는 딕셔너리 안에 딕셔너리를 담아 계층적 데이터를 표현합니다.
JSON 형태의 복잡한 데이터 구조를 파이썬에서 자연스럽게 다룰 수 있습니다.
여러 단계의 키로 접근하며, 각 레벨은 독립적인 딕셔너리입니다.
예: 사용자 프로필(개인정보, 설정, 히스토리), 제품 카탈로그(카테고리별 상품), API 응답 등에 사용됩니다.
`,
          starterCode: '# 중첩 딕셔너리\nschool = {\n    "1반": {\n        "담임": "김선생",\n        "학생수": 25,\n        "평균": 82.5\n    },\n    "2반": {\n        "담임": "이선생",\n        "학생수": 27,\n        "평균": 85.3\n    }\n}\n\n# 접근\nprint(school["1반"]["담임"])    # 김선생\nprint(school["2반"]["평균"])    # 85.3\n\n# 수정\nschool["1반"]["학생수"] = 26\n\n# 순회\nfor class_name, info in school.items():\n    print(f"{class_name}: 담임 {info[\'담임\"]}, {info[\'학생수\"]}명")\n',
          hints: [
            '딕셔너리[키1][키2]로 접근해요',
            'JSON 데이터와 비슷한 구조예요',
            '복잡한 데이터 구조를 표현할 수 있어요',
          ],
          challenges: [
            {
              id: "c1",
              title: '중첩 딕셔너리 생성',
              description: '딕셔너리 안에 딕셔너리를 만드세요.',
              difficulty: "easy",
              hints: [
                'd = { 키: { 내부키: 값 } }',
              ],
              estimatedMinutes: 3,
              starterCode: 'student = {\n    \'name\': \'Alice\',\n    \'scores\': {\'수학\': 95, \'영어\': 88}\n}\nprint(student[\'scores\"][\'수학\"])  # 95',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리를 잘 만들었어요! 복잡한 데이터를 구조화하는 핵심이에요.',
                partial: '딕셔너리 안에 딕셔너리를 넣는 구조를 다시 연습해보세요.',
                wrong: '중첩 딕셔너리 생성 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c2",
              title: '중첩 값 접근',
              description: '여러 단계의 키로 값에 접근하세요.',
              difficulty: "easy",
              hints: [
                'd[키1][키2][키3]...',
              ],
              estimatedMinutes: 4,
              starterCode: 'data = {\'users\': {\'alice\': {\'age\':14,\'score\':95}}}\nprint(data[\'users\"][\'alice\"][\'age\"])  # 14',
              feedback: {
                perfect: '완벽해요!',
                good: '여러 단계의 키로 값에 잘 접근했어요! dict[키1][키2] 형태죠.',
                partial: 'dict[외부키][내부키] 순서로 접근하는 방법을 다시 확인하세요.',
                wrong: '힌트를 참고해서 중첩 값 접근을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c3",
              title: '중첩 값 수정/추가',
              description: '중첩된 딕셔너리의 값을 수정하고 새 항목을 추가하세요.',
              difficulty: "easy",
              hints: [
                'd[키1][키2] = 새값',
              ],
              estimatedMinutes: 5,
              starterCode: 'school = {\'1반\': {\'teacher\':\'Kim\',\'students\':30}}\nschool[\'1반\"][\'students\"] = 31\nschool[\'2반\"] = {\'teacher\':\'Lee\',\'students\':28}\nprint(school)',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리의 값을 안전하게 수정하고 추가했어요!',
                partial: '외부 키가 존재하는지 먼저 확인 후 내부 값을 수정하세요.',
                wrong: '힌트를 참고해서 중첩 값 수정/추가을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c4",
              title: '중첩 딕셔너리 순회',
              description: '이중 for문으로 중첩 구조를 순회하세요.',
              difficulty: "medium",
              hints: [
                '외부: for k,v in d.items()',
                '내부: for k2,v2 in v.items()',
              ],
              estimatedMinutes: 7,
              starterCode: 'grades = {\n    \'Alice\': {\'수학\':95,\'영어\':88},\n    \'Bob\': {\'수학\':78,\'영어\':85}\n}\nfor name, subjects in grades.items():\n    for subj, score in subjects.items():\n        print(f\'{name} {subj}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '이중 for문으로 중첩 구조를 잘 순회했어요!',
                partial: '외부 items() 순회 안에서 내부 items()를 순회하는 패턴을 확인하세요.',
                wrong: '힌트를 참고해서 중첩 딕셔너리 순회을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c5",
              title: '안전한 중첩 접근',
              description: 'get()을 체이닝하여 안전하게 접근하세요.',
              difficulty: "medium",
              hints: [
                'd.get(키1,{}).get(키2,기본값)',
              ],
              estimatedMinutes: 8,
              starterCode: 'data = {\'users\': {\'alice\': {\'age\': 14}}}\n# 안전한 접근\nage = data.get(\'users\',{}).get(\'alice\',{}).get(\'age\',\'미정\')\nprint(age)  # 14\n\n# 없는 경로\nval = data.get(\'users\',{}).get(\'bob\',{}).get(\'age\',\'미정\')\nprint(val)  # \'미정\'',
              feedback: {
                perfect: '완벽해요!',
                good: 'get()을 연쇄 사용해서 안전하게 중첩 값에 접근했어요!',
                partial: 'dict.get(키1, {}).get(키2, 기본값) 패턴으로 안전하게 접근하세요.',
                wrong: '안전한 중첩 접근 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c6",
              title: '중첩 딕셔너리 평탄화',
              description: '중첩 구조를 1단계로 평탄화하세요.',
              difficulty: "medium",
              hints: [
                '재귀적으로 키를 연결',
                '\'parent.child\' 형태',
              ],
              estimatedMinutes: 10,
              starterCode: 'def flatten(d, prefix=\'\'):\n    result = {}\n    for k, v in d.items():\n        key = f\'{prefix}.{k}\' if prefix else k\n        if isinstance(v, dict):\n            result.update(flatten(v, key))\n        else:\n            result[key] = v\n    return result\n\nnested = {\'a\':1, \'b\':{\'c\':2,\'d\':{\'e\':3}}}\nprint(flatten(nested))  # {\'a\':1,\'b.c\':2,\'b.d.e\':3}',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 구조를 평탄화하는 알고리즘을 잘 구현했어요!',
                partial: '재귀적으로 딕셔너리를 탐색하며 키를 연결하는 방법을 확인하세요.',
                wrong: '힌트를 참고해서 중첩 딕셔너리 평탄화을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c7",
              title: 'JSON-like 데이터 처리',
              description: 'API 응답 형태의 중첩 딕셔너리를 처리하세요.',
              difficulty: "medium",
              hints: [
                '실제 API 응답은 중첩 딕셔너리',
                '원하는 데이터를 추출',
              ],
              estimatedMinutes: 10,
              starterCode: 'api_response = {\n    \'status\': \'ok\',\n    \'data\': {\n        \'users\': [\n            {\'id\':1,\'name\':\'Alice\',\'scores\':[95,88,92]},\n            {\'id\':2,\'name\':\'Bob\',\'scores\':[78,85,80]}\n        ]\n    }\n}\nfor user in api_response[\'data\"][\'users\"]:\n    avg = sum(user[\'scores\"])/len(user[\'scores\"])\n    print(f"{user[\'name\"]}: 평균 {avg:.1f}점")',
              feedback: {
                perfect: '완벽해요!',
                good: 'JSON과 유사한 중첩 데이터를 잘 처리했어요! API 응답 처리에 유용해요.',
                partial: 'JSON 데이터에서 원하는 값을 추출하는 경로를 다시 확인하세요.',
                wrong: 'JSON-like 데이터 처리 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '딕셔너리로 트리 구조',
              description: '딕셔너리로 트리 데이터 구조를 표현하세요.',
              difficulty: "hard",
              hints: [
                'children을 딕셔너리의 값으로',
                '재귀적 구조',
              ],
              estimatedMinutes: 14,
              starterCode: 'file_system = {\n    \'root\': {\n        \'documents\': {\n            \'report.txt\': None,\n            \'notes.txt\': None\n        },\n        \'pictures\': {\n            \'photo.jpg\': None\n        }\n    }\n}\n\ndef print_tree(tree, indent=0):\n    for name, children in tree.items():\n        print(\' \'*indent + name)\n        if children:\n            print_tree(children, indent+2)\n\nprint_tree(file_system)',
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리로 트리 구조를 잘 표현했어요! 자료구조의 기초가 탄탄하네요.',
                partial: '부모-자식 관계를 딕셔너리의 키-값으로 표현하는 방법을 확인하세요.',
                wrong: '딕셔너리로 트리 구조 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c9",
              title: '딕셔너리 깊은 병합',
              description: '두 중첩 딕셔너리를 깊은 수준에서 병합하세요.',
              difficulty: "hard",
              hints: [
                '재귀적으로 병합',
                '같은 키의 딕셔너리 값은 재귀 병합',
              ],
              estimatedMinutes: 14,
              starterCode: 'def deep_merge(d1, d2):\n    result = d1.copy()\n    for k, v in d2.items():\n        if k in result and isinstance(result[k], dict) and isinstance(v, dict):\n            result[k] = deep_merge(result[k], v)\n        else:\n            result[k] = v\n    return result\n\na = {\'x\':{\'a\':1,\'b\':2},\'y\':3}\nb = {\'x\':{\'b\':3,\'c\':4},\'z\':5}\nprint(deep_merge(a, b))',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리의 깊은 병합을 잘 구현했어요! 재귀 활용이 좋아요.',
                partial: '재귀적으로 각 수준의 딕셔너리를 병합하는 로직을 확인하세요.',
                wrong: '힌트를 참고해서 딕셔너리 깊은 병합을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 설정 관리 시스템',
              description: '중첩 딕셔너리로 앱 설정을 관리하세요.',
              difficulty: "hard",
              hints: [
                '점 표기법으로 접근 (a.b.c)',
                '기본값 + 사용자 설정 병합',
              ],
              estimatedMinutes: 18,
              starterCode: 'class Config:\n    def __init__(self, defaults=None):\n        self.data = defaults or {}\n    def get(self, path, default=None):\n        keys = path.split(\'.\')\n        d = self.data\n        for k in keys:\n            if isinstance(d, dict): d = d.get(k)\n            else: return default\n        return d if d is not None else default\n    def set(self, path, value):\n        keys = path.split(\'.\')\n        d = self.data\n        for k in keys[:-1]:\n            d = d.setdefault(k, {})\n        d[keys[-1]] = value\n\ncfg = Config({\'app\':{\'theme\':\'light\',\'font\':{\'size\':14}}})\nprint(cfg.get(\'app.theme\'))         # light\nprint(cfg.get(\'app.font.size\'))     # 14\ncfg.set(\'app.theme\', \'dark\')\nprint(cfg.get(\'app.theme\'))         # dark',
              feedback: {
                perfect: '완벽해요!',
                good: '중첩 딕셔너리로 설정 시스템을 잘 만들었어요! 실제 앱에서도 이렇게 해요.',
                partial: '설정 읽기/쓰기/기본값 처리를 중첩 접근으로 구현하세요.',
                wrong: '마스터: 설정 관리 시스템의 기본 개념부터 다시 확인해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-7',
          title: '리스트 vs 딕셔너리',
          description: '언제 무엇을 쓸지 비교해봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 50,
          estimatedMinutes: 10,
          concept: '자료구조 선택',
          conceptExplanation: `
상황에 맞는 자료구조 선택은 프로그래밍의 핵심 능력입니다.
순서가 중요하면 리스트, 빠른 검색이 필요하면 딕셔너리, 중복 제거가 필요하면 집합을 사용합니다.
적절한 자료구조는 코드를 간결하게 만들고 성능을 크게 향상시킵니다.
예: 로그 순서 유지(리스트), 사용자 조회(딕셔너리), 고유 방문자(집합) 등 목적에 맞게 선택합니다.
`,
          hints: [
            '순서가 중요하고 인덱스로 접근 → 리스트',
            '이름(키)으로 찾고 싶을 때 → 딕셔너리',
            '학생 목록 → 리스트, 학생 정보 → 딕셔너리',
          ],
          challenges: [
            {
              id: "c1",
              title: '인덱스 vs 키 접근',
              description: '리스트와 딕셔너리의 접근 방법을 비교하세요.',
              difficulty: "easy",
              hints: [
                '리스트: 숫자 인덱스',
                '딕셔너리: 의미있는 키',
              ],
              estimatedMinutes: 3,
              feedback: {
                perfect: '완벽해요!',
                good: '인덱스와 키의 차이를 명확히 이해했어요! 접근 방식이 다르죠.',
                partial: '리스트는 숫자 인덱스, 딕셔너리는 의미있는 키로 접근해요.',
                wrong: '인덱스 vs 키 접근 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c2",
              title: '순서 유지',
              description: '리스트는 순서 보장, 딕셔너리는 삽입순서 유지(3.7+).',
              difficulty: "easy",
              hints: [
              ],
              estimatedMinutes: 4,
              feedback: {
                perfect: '완벽해요!',
                good: '리스트는 항상 순서를, 딕셔너리는 삽입 순서를 유지하는 차이를 잘 이해했어요.',
                partial: '리스트는 순서가 중요하고, 딕셔너리는 키로 접근하는 차이를 확인하세요.',
                wrong: '순서 유지 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c3",
              title: '검색 성능',
              description: '리스트 in은 O(n), 딕셔너리 in은 O(1).',
              difficulty: "easy",
              hints: [
                '딕셔너리가 검색에 훨씬 빠름',
              ],
              estimatedMinutes: 5,
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리의 O(1) 검색이 리스트의 O(n)보다 빠른 이유를 잘 이해했어요!',
                partial: '딕셔너리는 해시 테이블 기반이라 키 검색이 빨라요.',
                wrong: '검색 성능 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c4",
              title: '언제 리스트를 사용하나',
              description: '순서가 중요하고 중복 허용할 때 리스트.',
              difficulty: "medium",
              hints: [
                '순서 있는 데이터',
                '인덱스 접근이 필요할 때',
              ],
              estimatedMinutes: 6,
              feedback: {
                perfect: '완벽해요!',
                good: '리스트가 적합한 상황을 잘 판단했어요! 순서와 반복이 중요할 때죠.',
                partial: '순서가 중요하고 반복 처리가 필요하면 리스트를 선택하세요.',
                wrong: '힌트를 참고해서 언제 리스트를 사용하나을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c5",
              title: '언제 딕셔너리를 사용하나',
              description: '키-값 매핑이 필요할 때 딕셔너리.',
              difficulty: "medium",
              hints: [
                '빠른 검색이 필요할 때',
                '의미있는 키로 접근',
              ],
              estimatedMinutes: 6,
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리가 적합한 상황을 잘 판단했어요! 키로 빠르게 찾을 때죠.',
                partial: '이름으로 빠르게 찾아야 하거나 키-값 매핑이 필요하면 딕셔너리를 쓰세요.',
                wrong: '힌트를 참고해서 언제 딕셔너리를 사용하나을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c6",
              title: '리스트 of 딕셔너리',
              description: '각 항목이 여러 속성을 가질 때 사용하세요.',
              difficulty: "medium",
              hints: [
                '[{\'name\':..., \'age\':...}, ...]',
                '테이블 형태의 데이터 표현',
              ],
              estimatedMinutes: 8,
              feedback: {
                perfect: '완벽해요!',
                good: '리스트 of 딕셔너리 패턴을 잘 활용했어요! 데이터베이스와 유사하죠.',
                partial: '[{키:값}, {키:값}...] 패턴은 테이블 데이터 표현에 좋아요.',
                wrong: '리스트 of 딕셔너리 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c7",
              title: '딕셔너리 of 리스트',
              description: '키별로 여러 값을 저장할 때.',
              difficulty: "medium",
              hints: [
                '{\'과일\':[\'사과\',\'바나나\"], \'채소\':[\'당근\"]}',
                '그룹핑에 적합',
              ],
              estimatedMinutes: 8,
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리 of 리스트 패턴을 잘 활용했어요! 그룹핑에 유용하죠.',
                partial: '{키: [값들]} 패턴은 카테고리별 데이터 저장에 좋아요.',
                wrong: '딕셔너리 of 리스트 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '변환: 리스트 -> 딕셔너리',
              description: '리스트 데이터를 딕셔너리로 변환하세요.',
              difficulty: "hard",
              hints: [
                'zip, enumerate, 컴프리헨션 활용',
              ],
              estimatedMinutes: 12,
              feedback: {
                perfect: '완벽해요!',
                good: '리스트에서 딕셔너리로의 변환을 잘 수행했어요!',
                partial: 'dict(zip(키리스트, 값리스트))로 변환하는 방법을 확인하세요.',
                wrong: '변환: 리스트 -> 딕셔너리의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c9",
              title: '변환: 딕셔너리 -> 리스트',
              description: '딕셔너리를 다양한 형태의 리스트로.',
              difficulty: "hard",
              hints: [
                'keys, values, items -> list',
              ],
              estimatedMinutes: 10,
              feedback: {
                perfect: '완벽해요!',
                good: '딕셔너리에서 리스트로의 변환을 잘 수행했어요!',
                partial: 'list(dict.keys()), list(dict.values()), list(dict.items())를 사용하세요.',
                wrong: '변환: 딕셔너리 -> 리스트 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 데이터 구조 선택',
              description: '주어진 요구사항에 최적의 자료구조를 선택하세요.',
              difficulty: "hard",
              hints: [
                '학생 관리, 상품 목록, 설정 등',
                '각 상황별 최적 구조 판단',
              ],
              estimatedMinutes: 15,
              feedback: {
                perfect: '완벽해요!',
                good: '상황에 맞는 데이터 구조를 잘 선택했어요! 설계 능력이 좋아요.',
                partial: '각 상황에서 리스트와 딕셔너리 중 더 적합한 것을 생각해보세요.',
                wrong: '힌트를 참고해서 마스터: 데이터 구조 선택을(를) 다시 시도해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-8',
          title: '단어 빈도 세기',
          description: '딕셔너리로 단어 출현 횟수를 세봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: '딕셔너리 응용',
          conceptExplanation: `
딕셔너리는 복잡한 데이터를 구조화하고 빠르게 검색할 수 있는 최고의 자료구조입니다.
카운팅, 그룹화, 인덱싱 등 다양한 패턴에 활용됩니다.
해시테이블 기반으로 검색 속도가 매우 빠르다는 것이 가장 큰 장점입니다.
예: 단어 빈도 카운트, 학생별 점수 그룹화, 데이터 인덱싱, 캐시 구현 등에 사용됩니다.
`,
          starterCode: 'text = "사과 바나나 사과 포도 사과 바나나 딸기"\nwords = text.split()\n\n# 빈도 세기\nword_count = {}\nfor word in words:\n    if word in word_count:\n        word_count[word] += 1\n    else:\n        word_count[word] = 1\n\nprint(word_count)\n# {"사과": 3, "바나나": 2, "포도": 1, "딸기": 1}\n\n# 더 간단한 방법: get() 활용\nword_count2 = {}\nfor word in words:\n    word_count2[word] = word_count2.get(word, 0) + 1\n\nprint(word_count2)\n',
          hints: [
            '딕셔너리로 빈도를 세요',
            'get(키, 기본값)이 편리해요',
            '데이터 분석의 기초예요',
          ],
          challenges: [
            {
              id: "c1",
              title: '기본 빈도 카운터',
              description: '문자열에서 각 단어의 빈도를 세세요.',
              difficulty: "easy",
              hints: [
                'split()으로 단어 분리',
                'dict.get(w,0)+1',
              ],
              estimatedMinutes: 3,
              starterCode: 'def count_words(text):\n    freq = {}\n    for w in text.split():\n        freq[w] = freq.get(w,0)+1\n    return freq',
              feedback: {
                perfect: '완벽해요!',
                good: '기본 빈도 카운터를 잘 구현했어요! 딕셔너리 활용의 대표 예제죠.',
                partial: 'for word in words: dict[word] = dict.get(word, 0) + 1 패턴을 확인하세요.',
                wrong: '기본 빈도 카운터의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c2",
              title: '대소문자 무시',
              description: '대소문자를 통일하여 카운트하세요.',
              difficulty: "easy",
              hints: [
                '.lower()로 통일',
              ],
              estimatedMinutes: 4,
              starterCode: 'def count_words(text):\n    freq = {}\n    for w in text.lower().split():\n        freq[w] = freq.get(w,0)+1\n    return freq',
              feedback: {
                perfect: '완벽해요!',
                good: 'lower()로 대소문자를 통일해서 정확한 빈도를 셌어요!',
                partial: '비교 전에 .lower()로 모두 소문자로 변환하세요.',
                wrong: '대소문자 무시 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c3",
              title: '구두점 제거',
              description: '구두점을 제거하고 카운트하세요.',
              difficulty: "easy",
              hints: [
                'strip(\'.,!?\')로 구두점 제거',
              ],
              estimatedMinutes: 5,
              starterCode: 'import string\ndef count_words(text):\n    freq = {}\n    for w in text.lower().split():\n        w = w.strip(string.punctuation)\n        if w: freq[w] = freq.get(w,0)+1\n    return freq',
              feedback: {
                perfect: '완벽해요!',
                good: '구두점을 제거해서 정확한 단어 빈도를 측정했어요!',
                partial: 'strip()이나 replace()로 구두점을 제거하는 방법을 확인하세요.',
                wrong: '구두점 제거 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c4",
              title: '상위 N개 단어',
              description: '가장 많이 나온 N개 단어를 출력하세요.',
              difficulty: "medium",
              hints: [
                'sorted(freq.items(), key=lambda)',
              ],
              estimatedMinutes: 7,
              starterCode: 'def top_n_words(text, n=5):\n    freq = {}\n    for w in text.lower().split():\n        freq[w] = freq.get(w,0)+1\n    return sorted(freq.items(), key=lambda x:x[1], reverse=True)[:n]',
              feedback: {
                perfect: '완벽해요!',
                good: '빈도순 정렬로 상위 N개를 잘 추출했어요!',
                partial: 'sorted()와 슬라이싱[:N]을 조합해서 상위 N개를 추출하세요.',
                wrong: '상위 N개 단어 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c5",
              title: 'Counter 클래스 활용',
              description: 'collections.Counter로 간편하게 세세요.',
              difficulty: "medium",
              hints: [
                'Counter(리스트)',
                'most_common(n)',
              ],
              estimatedMinutes: 7,
              starterCode: 'from collections import Counter\ndef count_words(text):\n    return Counter(text.lower().split())',
              feedback: {
                perfect: '완벽해요!',
                good: 'Counter를 잘 활용했어요! most_common()이 특히 유용하죠.',
                partial: 'Counter(리스트).most_common(n)으로 빈도 상위 n개를 구할 수 있어요.',
                wrong: 'Counter 클래스 활용 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c6",
              title: '문자 빈도 카운터',
              description: '문자열에서 각 문자의 빈도를 세세요.',
              difficulty: "medium",
              hints: [
                '문자 단위로 반복',
                '공백 제외 가능',
              ],
              estimatedMinutes: 8,
              starterCode: 'def char_freq(text):\n    return {c:text.count(c) for c in set(text) if c != \' \'}',
              feedback: {
                perfect: '완벽해요!',
                good: '문자 단위의 빈도 카운터를 잘 만들었어요!',
                partial: '문자열 자체가 반복 가능하므로 Counter(문자열)로 바로 셀 수 있어요.',
                wrong: '힌트를 참고해서 문자 빈도 카운터을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c7",
              title: '바이그램 빈도',
              description: '연속 두 단어(바이그램)의 빈도를 세세요.',
              difficulty: "medium",
              hints: [
                'zip(words, words[1:])',
                '연속 쌍 생성',
              ],
              estimatedMinutes: 10,
              starterCode: 'def bigram_freq(text):\n    words = text.lower().split()\n    bigrams = [f\'{a} {b}\' for a,b in zip(words, words[1:])]\n    return Counter(bigrams)',
              feedback: {
                perfect: '완벽해요!',
                good: '바이그램(연속 2단어)의 빈도를 잘 계산했어요! NLP의 기초예요.',
                partial: '연속된 두 단어를 묶어서 세는 방법을 다시 확인해보세요.',
                wrong: '바이그램 빈도 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '불용어(Stop Words) 제거',
              description: '의미 없는 단어를 제외하고 카운트하세요.',
              difficulty: "hard",
              hints: [
                '불용어 리스트 정의',
                'if w not in stop_words',
              ],
              estimatedMinutes: 12,
              starterCode: 'STOP_WORDS = {\'the\',\'a\',\'an\',\'is\',\'in\',\'on\',\'at\',\'to\',\'and\',\'of\'}\ndef meaningful_words(text):\n    freq = {}\n    for w in text.lower().split():\n        if w not in STOP_WORDS:\n            freq[w] = freq.get(w,0)+1\n    return freq',
              feedback: {
                perfect: '완벽해요!',
                good: '불용어를 제거해서 의미있는 단어만 남겼어요! 텍스트 분석의 핵심이에요.',
                partial: '불용어 집합을 만들고 if word not in stopwords로 필터링하세요.',
                wrong: '힌트를 참고해서 불용어(Stop Words) 제거을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c9",
              title: 'TF-IDF 기초',
              description: '여러 문서에서 단어 중요도를 계산하세요.',
              difficulty: "hard",
              hints: [
                'TF: 해당 문서 내 빈도',
                'IDF: 전체 문서 중 희소성',
              ],
              estimatedMinutes: 15,
              starterCode: 'import math\ndef tf(word, doc):\n    words = doc.lower().split()\n    return words.count(word) / len(words)\ndef idf(word, docs):\n    n = sum(1 for d in docs if word in d.lower())\n    return math.log(len(docs) / (1+n))',
              feedback: {
                perfect: '완벽해요!',
                good: 'TF-IDF의 기초 개념을 잘 이해했어요! 정보 검색의 핵심 알고리즘이에요.',
                partial: 'TF(단어빈도)와 IDF(역문서빈도)를 각각 계산하는 방법을 확인하세요.',
                wrong: 'TF-IDF 기초 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 텍스트 분석기',
              description: '종합 텍스트 분석 도구를 만드세요.',
              difficulty: "hard",
              hints: [
                '단어수, 문장수, 평균 단어 길이',
                '상위 단어, 고유 단어 수',
              ],
              estimatedMinutes: 18,
              starterCode: 'class TextAnalyzer:\n    def __init__(self, text):\n        self.text = text\n        self.words = text.lower().split()\n    def word_count(self): return len(self.words)\n    def unique_words(self): return len(set(self.words))\n    def avg_word_length(self):\n        return sum(len(w) for w in self.words)/len(self.words) if self.words else 0\n    def top_words(self, n=5):\n        return Counter(self.words).most_common(n)\n    def report(self):\n        print(f\'단어 수: {self.word_count()}\')\n        print(f\'고유 단어: {self.unique_words()}\')\n        print(f\'평균 길이: {self.avg_word_length():.1f}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '종합 텍스트 분석기를 잘 만들었어요! 데이터 분석의 기초가 탄탄하네요.',
                partial: '빈도 분석, 통계, 시각화를 하나의 시스템으로 통합해보세요.',
                wrong: '마스터: 텍스트 분석기 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-9',
          title: '집합(Set) 소개',
          description: '중복 없는 값들의 모음, 집합을 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '집합 기초',
          conceptExplanation: `
집합(set)은 중복을 허용하지 않고 순서가 없는 자료구조입니다.
수학의 집합처럼 합집합, 교집합, 차집합 연산이 가능합니다.
중복 제거, 멤버십 테스트, 집합 연산이 필요할 때 매우 유용합니다.
예: 중복 제거, 고유 방문자 수 계산, 공통 항목 찾기, 권한 관리 등에 활용됩니다.
`,
          starterCode: '# 집합: 중복 없고 순서 없음\nnums = {1, 2, 3, 3, 2, 1}\nprint(nums)  # {1, 2, 3}\n\n# 리스트에서 중복 제거\nfruits = ["사과", "바나나", "사과", "포도", "바나나"]\nunique = list(set(fruits))\nprint(unique)  # ["사과", "바나나", "포도"]\n\n# 집합 연산\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(a | b)  # 합집합: {1, 2, 3, 4, 5, 6}\nprint(a & b)  # 교집합: {3, 4}\nprint(a - b)  # 차집합: {1, 2}\n',
          hints: [
            '{}로 만들지만 빈 집합은 set()으로',
            '중복 제거에 매우 유용해요',
            '수학의 집합 연산을 지원해요',
          ],
          challenges: [
            {
              id: "c1",
              title: '집합 생성',
              description: 'set()으로 집합을 만드세요.',
              difficulty: "easy",
              hints: [
                '{값1,값2} 또는 set()',
              ],
              estimatedMinutes: 3,
              starterCode: 's1 = {1, 2, 3}\ns2 = set([1, 2, 2, 3, 3])  # 중복 자동 제거\nprint(s2)  # {1, 2, 3}',
              feedback: {
                perfect: '완벽해요!',
                good: '집합을 잘 생성했어요! 중복이 자동 제거되는 특성을 이해했네요.',
                partial: 'set()이나 {}로 집합을 만들 수 있어요. 빈 집합은 set()만 가능해요.',
                wrong: '집합 생성의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c2",
              title: '집합에 추가/제거',
              description: 'add, remove, discard를 사용하세요.',
              difficulty: "easy",
              hints: [
                'add(값): 추가',
                'remove(값): 제거(없으면 에러)',
              ],
              estimatedMinutes: 4,
              starterCode: 's = {1, 2, 3}\ns.add(4)\ns.remove(2)\ns.discard(99)  # 없어도 에러 안 남\nprint(s)',
              feedback: {
                perfect: '완벽해요!',
                good: 'add()와 discard()/remove()를 잘 사용했어요!',
                partial: 'add()로 추가, discard()로 안전 제거, remove()로 에러 발생 제거예요.',
                wrong: '힌트를 참고해서 집합에 추가/제거을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c3",
              title: '집합 연산: 합집합/교집합',
              description: '수학 집합 연산을 수행하세요.',
              difficulty: "easy",
              hints: [
                '|=합집합, &=교집합',
                'union(), intersection()',
              ],
              estimatedMinutes: 5,
              starterCode: 'a = {1,2,3,4}\nb = {3,4,5,6}\nprint(a | b)  # {1,2,3,4,5,6}\nprint(a & b)  # {3,4}',
              feedback: {
                perfect: '완벽해요!',
                good: '합집합(|)과 교집합(&)을 잘 활용했어요! 수학과 같은 개념이죠.',
                partial: 'A | B = 합집합, A & B = 교집합을 다시 확인하세요.',
                wrong: '힌트를 참고해서 집합 연산: 합집합/교집합을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c4",
              title: '차집합과 대칭차',
              description: '차집합과 대칭차를 구하세요.',
              difficulty: "medium",
              hints: [
                '-=차집합, ^=대칭차',
              ],
              estimatedMinutes: 6,
              starterCode: 'a = {1,2,3,4}\nb = {3,4,5,6}\nprint(a - b)  # {1,2}\nprint(a ^ b)  # {1,2,5,6}',
              feedback: {
                perfect: '완벽해요!',
                good: '차집합(-)과 대칭차(^)를 잘 이해했어요!',
                partial: 'A - B = A에만 있는 것, A ^ B = 둘 중 하나에만 있는 것이에요.',
                wrong: '차집합과 대칭차 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c5",
              title: '부분집합과 상위집합',
              description: '집합 간 포함 관계를 확인하세요.',
              difficulty: "medium",
              hints: [
                'issubset(), issuperset()',
                '<=, >=',
              ],
              estimatedMinutes: 7,
              starterCode: 'a = {1,2,3}\nb = {1,2,3,4,5}\nprint(a.issubset(b))    # True\nprint(b.issuperset(a))  # True',
              feedback: {
                perfect: '완벽해요!',
                good: '부분집합과 상위집합 관계를 잘 판단했어요!',
                partial: 'A.issubset(B)는 A가 B의 부분집합인지, A <= B와 같아요.',
                wrong: '힌트를 참고해서 부분집합과 상위집합을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c6",
              title: '집합으로 중복 제거',
              description: '리스트에서 집합으로 중복을 제거하세요.',
              difficulty: "medium",
              hints: [
                'set(list)로 변환',
                '순서 보장 안 됨 주의',
              ],
              estimatedMinutes: 6,
              starterCode: 'nums = [3,1,4,1,5,9,2,6,5,3]\nunique = list(set(nums))\nprint(sorted(unique))',
              feedback: {
                perfect: '완벽해요!',
                good: 'set()으로 간단하게 중복을 제거했어요! 가장 흔한 활용법이에요.',
                partial: 'list(set(리스트))로 중복을 제거할 수 있지만 순서가 바뀔 수 있어요.',
                wrong: '힌트를 참고해서 집합으로 중복 제거을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c7",
              title: 'frozenset',
              description: '불변 집합을 만드세요.',
              difficulty: "medium",
              hints: [
                'frozenset은 수정 불가',
                '딕셔너리 키로 사용 가능',
              ],
              estimatedMinutes: 8,
              starterCode: 'fs = frozenset([1, 2, 3])\n# fs.add(4)  # AttributeError!\nd = {fs: \'group1\'}  # 딕셔너리 키로 사용 가능',
              feedback: {
                perfect: '완벽해요!',
                good: 'frozenset의 불변 특성을 잘 이해했어요! 딕셔너리 키로 쓸 수 있죠.',
                partial: 'frozenset은 수정 불가한 집합이에요. 딕셔너리 키나 집합의 원소로 사용 가능해요.',
                wrong: 'frozenset 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '집합 컴프리헨션',
              description: '컴프리헨션으로 집합을 만드세요.',
              difficulty: "hard",
              hints: [
                '{표현식 for 변수 in 범위}',
              ],
              estimatedMinutes: 10,
              starterCode: 'squares = {x**2 for x in range(-5, 6)}\nprint(squares)  # {0, 1, 4, 9, 16, 25}',
              feedback: {
                perfect: '완벽해요!',
                good: '집합 컴프리헨션 {x for x in ...}을 잘 활용했어요!',
                partial: '{표현식 for 변수 in 반복가능}으로 집합을 만들 수 있어요.',
                wrong: '집합 컴프리헨션 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c9",
              title: '두 리스트의 공통/차이 항목',
              description: '집합 연산으로 공통/고유 항목을 찾으세요.',
              difficulty: "hard",
              hints: [
                'set(a)&set(b)=공통',
                'set(a)-set(b)=a에만 있는 것',
              ],
              estimatedMinutes: 12,
              starterCode: 'list_a = [\'사과\',\'바나나\',\'포도\',\'딸기\"]\nlist_b = [\'바나나\',\'딸기\',\'수박\',\'참외\"]\ncommon = set(list_a) & set(list_b)\nonly_a = set(list_a) - set(list_b)\nprint(f\'공통: {common}\')\nprint(f\'A에만: {only_a}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '집합 연산으로 두 리스트를 잘 비교했어요! 실용적인 활용이에요.',
                partial: 'set(list1) & set(list2)로 공통 항목을 찾을 수 있어요.',
                wrong: '두 리스트의 공통/차이 항목 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 태그 시스템',
              description: '집합을 활용한 태그 기반 검색 시스템을 만드세요.',
              difficulty: "hard",
              hints: [
                '각 항목에 태그(집합) 부여',
                '교집합으로 다중 태그 검색',
              ],
              estimatedMinutes: 18,
              starterCode: 'articles = {\n    \'글1\': {\'python\',\'tutorial\',\'beginner\'},\n    \'글2\': {\'python\',\'advanced\',\'algorithm\'},\n    \'글3\': {\'javascript\',\'tutorial\',\'web\'}\n}\n\ndef search_by_tags(articles, tags):\n    tags = set(tags)\n    return [title for title, art_tags in articles.items() if tags.issubset(art_tags)]\n\nprint(search_by_tags(articles, [\'python\',\'tutorial\"]))',
              feedback: {
                perfect: '완벽해요!',
                good: '집합으로 태그 시스템을 잘 만들었어요! 중복 없는 태그 관리가 핵심이죠.',
                partial: '태그 추가/삭제와 교집합/합집합 연산을 활용하는 방법을 확인하세요.',
                wrong: '마스터: 태그 시스템의 기본 개념부터 다시 확인해보세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-26-10',
          title: '주간 도전: 전화번호부',
          description: '딕셔너리로 전화번호부를 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '딕셔너리 종합',
          conceptExplanation: `
딕셔너리는 현대 프로그래밍에서 가장 중요한 자료구조 중 하나입니다.
JSON, API, 설정 관리, 데이터 매핑 등 거의 모든 곳에서 사용됩니다.
생성, 조작, 순회, 중첩 등 모든 기능을 능숙하게 다루는 것이 필수입니다.
예: 웹 개발(API 응답), 데이터 분석(데이터 집계), 시스템 관리(설정), 게임(인벤토리) 등에 활용됩니다.
`,
          starterCode: '# 전화번호부\nphonebook = {}\n\nwhile True:\n    print("\\n=== 전화번호부 ===")\n    print("1. 연락처 추가")\n    print("2. 연락처 검색")\n    print("3. 연락처 삭제")\n    print("4. 전체 목록")\n    print("5. 종료")\n    \n    choice = input("선택: ")\n    \n    if choice == "1":\n        name = input("이름: ")\n        phone = input("전화번호: ")\n        phonebook[name] = phone\n        print(f"{name} 님이 추가되었습니다.")\n    \n    elif choice == "2":\n        name = input("검색할 이름: ")\n        if name in phonebook:\n            print(f"{name}: {phonebook[name]}")\n        else:\n            print("등록되지 않은 이름입니다.")\n    \n    elif choice == "3":\n        name = input("삭제할 이름: ")\n        if name in phonebook:\n            del phonebook[name]\n            print(f"{name} 님이 삭제되었습니다.")\n        else:\n            print("등록되지 않은 이름입니다.")\n    \n    elif choice == "4":\n        if phonebook:\n            for name, phone in phonebook.items():\n                print(f"{name}: {phone}")\n        else:\n            print("연락처가 없습니다.")\n    \n    elif choice == "5":\n        print("종료합니다.")\n        break\n',
          hints: [
            '💡 힌트 1: 이름을 키로, 전화번호를 값으로 저장',
            '💡 힌트 2: in 연산자로 키 존재 확인 후 처리',
            '💡 힌트 3: del로 삭제, items()로 순회하여 전체 출력'
          ],
          commonMistakes: [
            '존재 확인 없이 바로 접근 - KeyError 발생',
            '빈 딕셔너리 체크 안 함 - if phonebook:로 먼저 확인',
            '무한 루프 탈출 조건 빠뜨리기 - break 잊지 말기'
          ],
          challenges: [
            {
              id: "c1",
              title: '연락처 추가',
              description: '이름과 전화번호를 딕셔너리에 추가하세요.',
              difficulty: "easy",
              hints: [
                'contacts[이름] = 번호',
              ],
              estimatedMinutes: 3,
              starterCode: 'contacts = {}\ndef add_contact(name, phone):\n    contacts[name] = phone\n    print(f\'{name} 추가됨\')',
              feedback: {
                perfect: '완벽해요!',
                good: '연락처를 딕셔너리에 잘 추가했어요! 이름을 키로 사용하는 패턴이 좋아요.',
                partial: 'dict[이름] = 번호 형태로 연락처를 추가하세요.',
                wrong: '연락처 추가 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c2",
              title: '연락처 검색',
              description: '이름으로 전화번호를 검색하세요.',
              difficulty: "easy",
              hints: [
                'get()으로 안전하게 검색',
              ],
              estimatedMinutes: 4,
              starterCode: 'def search(name):\n    phone = contacts.get(name)\n    if phone:\n        print(f\'{name}: {phone}\')\n    else:\n        print(f\'{name}을 찾을 수 없습니다\')',
              feedback: {
                perfect: '완벽해요!',
                good: '이름으로 연락처를 빠르게 검색했어요! 딕셔너리의 장점이죠.',
                partial: 'dict.get(이름, "없음")으로 안전하게 검색하세요.',
                wrong: '연락처 검색 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c3",
              title: '전체 목록 출력',
              description: '모든 연락처를 출력하세요.',
              difficulty: "easy",
              hints: [
                'items()로 순회',
              ],
              estimatedMinutes: 4,
              starterCode: 'def show_all():\n    for name, phone in sorted(contacts.items()):\n        print(f\'{name}: {phone}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '전체 연락처를 보기 좋게 출력했어요! items() 활용이 좋아요.',
                partial: 'for name, number in dict.items(): 로 전체를 출력하세요.',
                wrong: '전체 목록 출력의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c4",
              title: '연락처 수정',
              description: '기존 연락처의 번호를 수정하세요.',
              difficulty: "medium",
              hints: [
                '있는지 확인 후 수정',
              ],
              estimatedMinutes: 6,
              starterCode: 'def update(name, new_phone):\n    if name in contacts:\n        old = contacts[name]\n        contacts[name] = new_phone\n        print(f\'{name}: {old} -> {new_phone}\')\n    else:\n        print(f\'{name}을 찾을 수 없습니다\')',
              feedback: {
                perfect: '완벽해요!',
                good: '연락처 수정을 안전하게 구현했어요! 존재 확인이 중요하죠.',
                partial: '먼저 in으로 존재 확인 후 dict[이름] = 새번호로 수정하세요.',
                wrong: '연락처 수정의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c5",
              title: '연락처 삭제',
              description: '연락처를 삭제하세요.',
              difficulty: "medium",
              hints: [
                'pop()으로 삭제',
              ],
              estimatedMinutes: 6,
              starterCode: 'def delete(name):\n    if contacts.pop(name, None):\n        print(f\'{name} 삭제됨\')\n    else:\n        print(f\'{name}을 찾을 수 없습니다\')',
              feedback: {
                perfect: '완벽해요!',
                good: '연락처 삭제를 잘 구현했어요! del이나 pop() 사용이 정확해요.',
                partial: 'del dict[이름] 또는 dict.pop(이름)으로 삭제하세요.',
                wrong: '힌트를 참고해서 연락처 삭제을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c6",
              title: '이름으로 검색 (부분 일치)',
              description: '부분 문자열로 검색하세요.',
              difficulty: "medium",
              hints: [
                'if query in name:',
              ],
              estimatedMinutes: 8,
              starterCode: 'def search_partial(query):\n    found = {k:v for k,v in contacts.items() if query in k}\n    if found:\n        for name, phone in found.items():\n            print(f\'{name}: {phone}\')\n    else:\n        print(\'검색 결과 없음\')',
              feedback: {
                perfect: '완벽해요!',
                good: '부분 일치 검색을 잘 구현했어요! in 연산자를 문자열에 활용했네요.',
                partial: 'if 검색어 in 이름: 으로 부분 일치를 확인하세요.',
                wrong: '이름으로 검색 (부분 일치)의 기본 개념부터 다시 확인해보세요.',
              },
            },
            {
              id: "c7",
              title: '그룹 기능',
              description: '연락처를 그룹으로 분류하세요.',
              difficulty: "medium",
              hints: [
                'groups = {그룹명: [이름들]}',
              ],
              estimatedMinutes: 10,
              starterCode: 'groups = {}\ndef add_to_group(group, name):\n    groups.setdefault(group, []).append(name)\ndef show_group(group):\n    members = groups.get(group, [])\n    for name in members:\n        phone = contacts.get(name, \'번호없음\')\n        print(f\'  {name}: {phone}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '그룹별 연락처 관리를 잘 구현했어요! 중첩 딕셔너리 활용이 좋아요.',
                partial: '그룹을 키로, 연락처 딕셔너리를 값으로 하는 구조를 확인하세요.',
                wrong: '그룹 기능 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
            {
              id: "c8",
              title: '데이터 내보내기/가져오기',
              description: '연락처를 문자열로 저장하고 복원하세요.',
              difficulty: "hard",
              hints: [
                'CSV 형태로 변환',
              ],
              estimatedMinutes: 12,
              starterCode: 'def export_contacts():\n    lines = [f\'{name},{phone}\' for name,phone in contacts.items()]\n    return \'\\n\'.join(lines)\n\ndef import_contacts(text):\n    for line in text.strip().split(\'\\n\'):\n        if \',\' in line:\n            name, phone = line.split(\',\',1)\n            contacts[name.strip()] = phone.strip()',
              feedback: {
                perfect: '완벽해요!',
                good: 'JSON 형식으로 데이터를 잘 관리했어요! 파일 입출력의 기초예요.',
                partial: 'json.dumps()와 json.loads()로 변환하는 과정을 확인하세요.',
                wrong: '힌트를 참고해서 데이터 내보내기/가져오기을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c9",
              title: '통계 기능',
              description: '연락처 수, 그룹 수, 가장 많은 그룹 등을 출력하세요.',
              difficulty: "hard",
              hints: [
                'len()으로 수 계산',
                'max()로 가장 큰 그룹',
              ],
              estimatedMinutes: 12,
              starterCode: 'def statistics():\n    print(f\'총 연락처: {len(contacts)}개\')\n    print(f\'그룹 수: {len(groups)}개\')\n    if groups:\n        biggest = max(groups, key=lambda g:len(groups[g]))\n        print(f\'가장 큰 그룹: {biggest} ({len(groups[biggest])}명)\')',
              feedback: {
                perfect: '완벽해요!',
                good: '연락처 통계를 잘 계산했어요! 그룹별 개수, 전체 수 등이 정확해요.',
                partial: 'len()과 딕셔너리 순회를 조합해서 통계를 내세요.',
                wrong: '힌트를 참고해서 통계 기능을(를) 다시 시도해보세요.',
              },
            },
            {
              id: "c10",
              title: '마스터: 완전한 전화번호부',
              description: '메뉴 기반 전화번호부를 완성하세요.',
              difficulty: "hard",
              hints: [
                'while True 루프',
                '모든 기능 통합',
              ],
              estimatedMinutes: 20,
              starterCode: 'def main():\n    while True:\n        print(\'\\n=== 전화번호부 ===\')\n        print(\'1.추가 2.검색 3.목록 4.수정 5.삭제 6.그룹 7.통계 8.종료\')\n        choice = input(\'선택: \')\n        if choice == \'8\': break',
              feedback: {
                perfect: '완벽해요!',
                good: '완전한 전화번호부를 만들었어요! 딕셔너리 활용 실력이 뛰어나요.',
                partial: '모든 기능을 함수로 분리하고 메뉴 루프를 완성해보세요.',
                wrong: '마스터: 완전한 전화번호부 강의 내용을 복습한 후 다시 도전하세요.',
              },
            },
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-26',
        title: 'Week 26 퀴즈',
        questions: [
          {
            id: 'q26-1',
            question: '딕셔너리에서 키가 없을 때 에러 없이 값을 가져오는 메서드는?',
            options: ['find()', 'search()', 'get()', 'fetch()'],
            correctAnswer: 2,
            explanation: 'dict.get(key)는 키가 없을 때 None을 반환하거나 기본값을 지정할 수 있어요. dict[key]는 KeyError가 발생하지만 get()은 안전해요!'
          },
          {
            id: 'q26-2',
            question: '딕셔너리의 키와 값을 함께 순회하는 메서드는?',
            options: ['keys()', 'values()', 'items()', 'pairs()'],
            correctAnswer: 2,
            explanation: 'items() 메서드는 (키, 값) 튜플을 반환해요. for k, v in dict.items(): 형식으로 가장 많이 사용됩니다!'
          },
          {
            id: 'q26-3',
            question: '집합(set)의 특징으로 틀린 것은?',
            options: ['중복 불가', '순서 없음', '인덱스로 접근', '수학 연산 지원'],
            correctAnswer: 2,
            explanation: '집합(set)은 순서가 없어서 인덱스로 접근할 수 없어요! 중복을 허용하지 않고, 합집합/교집합 등 수학 연산을 지원해요.'
          },
          {
            id: 'q26-4',
            question: 'd = {"a": 1}에서 d["b"]를 실행하면?',
            options: ['None', '0', 'KeyError 발생', 'False'],
            correctAnswer: 2,
            explanation: '없는 키에 []로 접근하면 KeyError가 발생해요. 에러를 방지하려면 get()을 사용하거나 in으로 먼저 확인해야 해요!'
          },
          {
            id: 'q26-5',
            question: '딕셔너리에서 사용할 수 없는 키는?',
            options: ['문자열', '숫자', '리스트', '튜플'],
            correctAnswer: 2,
            explanation: '딕셔너리의 키는 불변(immutable)이어야 해요. 리스트는 변경 가능하므로 키로 사용할 수 없지만, 튜플은 불변이라 가능해요!'
          },
        ],
      },
    },

    // Week 27: 함수
    {
      id: 'week-27',
      number: 27,
      title: '함수: 코드의 재사용',
      description: '반복되는 코드를 함수로 묶어서 재사용해요',
      missions: [
        {
          id: '4-27-1',
          title: '함수란?',
          description: '코드를 묶어서 이름을 붙인 것!',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '함수의 개념',
          cstaStandard: '1B-AP-12',
          learningObjectives: [
            '함수가 특정 작업을 수행하는 코드 묶음임을 이해한다',
            '함수를 사용하면 코드 재사용이 가능함을 설명할 수 있다',
            '내장 함수와 사용자 정의 함수의 차이를 구분할 수 있다'
          ],
          realWorldExample: '리모컨의 버튼처럼, 함수는 복잡한 작업을 이름 하나로 실행할 수 있어요. "전원 켜기" 버튼 하나로 TV가 켜지는 것처럼요!',
          conceptCards: [
            {
              title: '함수란?',
              description: '특정 작업을 수행하는 코드 묶음',
              icon: '📦',
              example: 'def greet():\n    print("안녕!")'
            },
            {
              title: '코드 재사용',
              description: '한 번 만들면 여러 번 호출 가능',
              icon: '♻️',
              example: 'greet()를 10번 호출해도 코드는 한 번만 작성'
            },
            {
              title: '내장 vs 사용자 정의',
              description: 'print()는 내장, 내가 만든 함수는 사용자 정의',
              icon: '🔧',
              example: 'print() vs def my_func():'
            }
          ],
          hints: [
            '💡 힌트 1: 함수는 특정 작업을 수행하는 코드 묶음이에요',
            '💡 힌트 2: print(), len(), input()도 모두 함수예요 (내장 함수)',
            '💡 힌트 3: 한 번 만들어두면 여러 번 호출하여 사용할 수 있어요'
          ],
                    challenges: [
          {
            id: 'c1',
            title: '함수 정의와 호출',
            description: 'def 키워드로 함수를 정의하고 호출하세요',
            difficulty: 'easy',
            hints: ['def 함수이름(): 형태로 정의해요', '함수이름()으로 호출해요'],
            estimatedMinutes: 3,
            starterCode: '# 인사 함수 만들기\ndef greet():\n    # "안녕하세요!" 출력\n    pass\n\ngreet()',
            solution: 'def greet():\n    print("안녕하세요!")\n\ngreet()',
            feedback: {
              perfect: '함수 정의와 호출을 완벽하게 이해했어요!',
              good: 'def와 호출을 잘 사용했어요!',
              partial: 'def greet(): 안에 print를 넣으세요.',
              wrong: 'def 키워드로 함수를 정의하고 이름()으로 호출하세요.'
            }
          },
          {
            id: 'c2',
            title: '매개변수 활용',
            description: '매개변수를 받는 함수를 만드세요',
            difficulty: 'easy',
            hints: ['괄호 안에 매개변수를 넣어요', '함수 안에서 매개변수를 사용할 수 있어요'],
            estimatedMinutes: 5,
            starterCode: 'def greet(name):\n    # "안녕, {name}!" 출력\n    pass\n\ngreet("철수")',
            solution: 'def greet(name):\n    print(f"안녕, {name}!")\n\ngreet("철수")',
            feedback: {
              perfect: '매개변수를 완벽하게 활용했어요!',
              good: '값 전달을 잘 이해했어요!',
              partial: 'f-string으로 name을 출력에 포함하세요.',
              wrong: 'print(f"안녕, {name}!")을 함수 안에 넣으세요.'
            }
          },
          {
            id: 'c3',
            title: 'return으로 값 반환',
            description: 'return으로 결과를 돌려주는 함수를 만드세요',
            difficulty: 'medium',
            hints: ['return 키워드로 값을 돌려줘요', '반환값은 변수에 저장 가능해요'],
            estimatedMinutes: 7,
            starterCode: 'def add(a, b):\n    # a + b를 반환\n    pass\n\nresult = add(3, 5)\nprint(result)  # 8',
            solution: 'def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)',
            feedback: {
              perfect: 'return을 완벽하게 사용했어요!',
              good: '반환값 개념을 잘 이해했어요!',
              partial: 'return a + b를 함수 안에 넣으세요.',
              wrong: 'return 뒤에 반환할 값을 쓰세요.'
            }
          },
          {
            id: 'c4',
            title: '기본값 매개변수',
            description: '기본값이 있는 함수를 만드세요',
            difficulty: 'medium',
            hints: ['def func(x=기본값) 형태', '인자 없이 호출하면 기본값 사용'],
            estimatedMinutes: 10,
            starterCode: 'def power(base, exp=2):\n    # base의 exp 제곱 반환\n    pass\n\nprint(power(3))     # 9\nprint(power(2, 10)) # 1024',
            solution: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(2, 10))',
            feedback: {
              perfect: '기본값 매개변수를 완벽하게 활용했어요!',
              good: '기본값 개념을 잘 이해했어요!',
              partial: 'return base ** exp를 작성하세요.',
              wrong: '** 연산자로 거듭제곱을 계산하세요.'
            }
          },
          {
            id: 'c5',
            title: '다중 반환과 언패킹',
            description: '여러 값을 반환하는 함수를 만드세요',
            difficulty: 'hard',
            hints: ['return으로 여러 값을 쉼표로 구분', '튜플 언패킹으로 받아요'],
            estimatedMinutes: 15,
            starterCode: 'def stats(nums):\n    total = sum(nums)\n    avg = total / len(nums)\n    # 합계, 평균, 최대, 최소 반환\n    pass\n\ns, a, mx, mn = stats([10, 20, 30])\nprint(f"합:{s} 평균:{a} 최대:{mx} 최소:{mn}")',
            solution: 'def stats(nums):\n    total = sum(nums)\n    avg = total / len(nums)\n    return total, avg, max(nums), min(nums)\n\ns, a, mx, mn = stats([10, 20, 30])\nprint(f"합:{s} 평균:{a} 최대:{mx} 최소:{mn}")',
            feedback: {
              perfect: '다중 반환을 완벽하게 구현했어요!',
              good: '튜플 언패킹을 잘 활용했어요!',
              partial: 'return total, avg, max(nums), min(nums)을 작성하세요.',
              wrong: 'return 뒤에 값들을 쉼표로 나열하세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-2',
          title: '첫 함수 만들기',
          description: 'def 키워드로 함수를 정의해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '함수 정의와 호출',
          conceptExplanation: `
def 키워드로 함수를 정의하고, 함수 이름()으로 호출합니다.
매개변수로 데이터를 전달받고, return으로 결과를 반환합니다.
한 번 정의한 함수는 여러 곳에서 반복 호출할 수 있어 효율적입니다.
예: 세금 계산 함수, 유효성 검사 함수, 데이터 변환 함수 등 재사용 가능한 로직을 만듭니다.
`,
          starterCode: '# 함수 정의\ndef greet():\n    print("안녕하세요!")\n    print("반갑습니다!")\n\n# 함수 호출\ngreet()\ngreet()  # 여러 번 호출 가능\n\n# 직접 만들어보세요: 구분선 출력 함수\ndef print_line():\n    pass  # 여기에 코드 작성\n\nprint_line()\n',
          hints: [
            'def 함수이름(): 으로 정의해요',
            '들여쓰기된 부분이 함수 본문이에요',
            '함수이름()으로 호출해요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '인사 함수 만들기',
              description: '매개변수 없는 간단한 함수를 정의하고 호출하세요.',
              difficulty: 'easy',
              hints: ['def 함수이름(): 형식으로 정의해요', '함수이름()으로 호출해요', '함수 본문은 들여쓰기해요'],
              estimatedMinutes: 3,
              starterCode: '# 인사 함수를 정의하세요\ndef say_hello():\n    # TODO: "안녕하세요!" 를 출력하세요\n    pass\n\n# 함수를 호출하세요\n# TODO: say_hello 함수를 2번 호출하세요\n',
              solution: 'def say_hello():\n    print("안녕하세요!")\n\nsay_hello()\nsay_hello()',
              feedback: {
                perfect: '함수 정의와 호출을 정확히 이해했어요!',
                good: '함수를 잘 만들었어요! 여러 번 호출도 해보세요.',
                partial: '함수 정의는 했는데 호출 부분을 확인하세요.',
                wrong: 'def say_hello(): 로 함수를 만들고 say_hello()로 호출하세요.'
              }
            },
            {
              id: 'c2',
              title: '함수 호출 순서 버그 수정',
              description: '함수 정의 전에 호출하는 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['파이썬은 위에서 아래로 실행해요', '함수 정의가 호출보다 먼저 와야 해요', 'NameError가 나면 정의 순서를 확인하세요'],
              estimatedMinutes: 3,
              starterCode: '# 버그를 수정하세요\nshow_menu()\n\ndef show_menu():\n    print("=== 메뉴 ===" )\n    print("1. 시작")\n    print("2. 종료")\n',
              solution: 'def show_menu():\n    print("=== 메뉴 ===")\n    print("1. 시작")\n    print("2. 종료")\n\nshow_menu()',
              feedback: {
                perfect: '함수 정의 순서를 완벽히 이해했어요!',
                good: '순서를 잘 바꿨어요!',
                partial: '함수 정의를 호출 위로 옮기세요.',
                wrong: 'def가 호출(함수이름())보다 먼저 나와야 해요.'
              }
            },
            {
              id: 'c3',
              title: '구분선 출력 함수',
              description: '원하는 문자로 구분선을 출력하는 함수를 완성하세요.',
              difficulty: 'easy',
              hints: ['def print_line(): 안에 코드를 작성', '문자열 * 숫자로 반복 가능', 'print("=" * 20)처럼 사용'],
              estimatedMinutes: 4,
              starterCode: '# 구분선 출력 함수를 완성하세요\ndef print_line():\n    # TODO: "=" 문자 30개로 구분선을 출력하세요\n    pass\n\nprint_line()\nprint("제목입니다")\nprint_line()\n',
              solution: 'def print_line():\n    print("=" * 30)\n\nprint_line()\nprint("제목입니다")\nprint_line()',
              feedback: {
                perfect: '함수로 재사용 가능한 코드를 만들었어요!',
                good: '구분선이 잘 나와요!',
                partial: 'print("=" * 30)을 함수 안에 넣으세요.',
                wrong: 'def 안에 print("=" * 30)을 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: '카운트다운 함수',
              description: '10부터 1까지 카운트다운하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['for i in range(10, 0, -1)로 역순 반복', '마지막에 "발사!"를 출력하세요', '함수 안에 반복문을 넣으세요'],
              estimatedMinutes: 5,
              starterCode: '# 카운트다운 함수를 만드세요\ndef countdown():\n    # TODO: 10부터 1까지 출력\n    # TODO: 마지막에 "발사!" 출력\n    pass\n\ncountdown()\n',
              solution: 'def countdown():\n    for i in range(10, 0, -1):\n        print(i)\n    print("발사!")\n\ncountdown()',
              feedback: {
                perfect: '카운트다운 함수가 완벽해요!',
                good: '반복문을 함수 안에 잘 넣었어요!',
                partial: 'range(10, 0, -1)로 역순 반복하세요.',
                wrong: 'def countdown(): 안에 for문과 print를 작성하세요.'
              }
            },
            {
              id: 'c5',
              title: '프로필 카드 출력 함수',
              description: '이름, 나이, 취미를 받아 프로필 카드를 출력하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['매개변수를 3개 받는 함수를 만드세요', 'f-string으로 보기 좋게 출력', '구분선도 넣어보세요'],
              estimatedMinutes: 7,
              starterCode: '# 프로필 카드 출력 함수\ndef show_profile(name, age, hobby):\n    # TODO: 구분선, 이름, 나이, 취미를 보기 좋게 출력\n    pass\n\n# 테스트\nshow_profile("철수", 14, "코딩")\nshow_profile("영희", 13, "그림")\n',
              solution: 'def show_profile(name, age, hobby):\n    print("=" * 20)\n    print(f"이름: {name}")\n    print(f"나이: {age}세")\n    print(f"취미: {hobby}")\n    print("=" * 20)\n\nshow_profile("철수", 14, "코딩")\nshow_profile("영희", 13, "그림")',
              feedback: {
                perfect: '매개변수를 활용한 함수를 완벽하게 만들었어요!',
                good: '프로필 출력이 잘 되어요!',
                partial: '매개변수를 f-string에서 사용하세요.',
                wrong: 'def show_profile(name, age, hobby): 형태로 매개변수를 받으세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-3',
          title: '매개변수(Parameter)',
          description: '함수에 값을 전달해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '매개변수 사용',
          conceptExplanation: `
매개변수는 함수에 데이터를 전달하는 방법입니다.
여러 개의 매개변수를 받을 수 있고, 각각 다른 타입이 가능합니다.
함수의 유연성을 높이고, 다양한 입력에 대응할 수 있게 합니다.
예: 계산 함수(숫자들), 메시지 전송(제목, 내용, 수신자), 검색 함수(키워드, 필터) 등에 활용됩니다.
`,
          starterCode: '# 매개변수가 있는 함수\ndef greet(name):\n    print(f"안녕하세요, {name}님!")\n\ngreet("철수")  # 안녕하세요, 철수님!\ngreet("영희")  # 안녕하세요, 영희님!\n\n# 여러 매개변수\ndef add(a, b):\n    print(f"{a} + {b} = {a + b}")\n\nadd(3, 5)   # 3 + 5 = 8\nadd(10, 20) # 10 + 20 = 30\n\n# 직접 만들어보세요: 자기소개 함수\ndef introduce(name, age, hobby):\n    pass  # 여기에 코드 작성\n',
          hints: [
            '괄호 안에 매개변수를 넣어요',
            '호출할 때 값을 전달해요 (인자)',
            '여러 매개변수는 쉼표로 구분',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '두 수의 합 함수',
              description: '두 숫자를 받아 합을 출력하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['매개변수 2개를 받으세요', 'print(a + b)로 합을 출력', '함수 호출 시 값 2개를 전달'],
              estimatedMinutes: 3,
              starterCode: '# 두 수의 합을 출력하는 함수\ndef print_sum(a, b):\n    # TODO: a와 b의 합을 출력하세요\n    pass\n\n# 테스트\nprint_sum(3, 5)   # 8\nprint_sum(10, 20) # 30\n',
              solution: 'def print_sum(a, b):\n    print(a + b)\n\nprint_sum(3, 5)\nprint_sum(10, 20)',
              feedback: {
                perfect: '매개변수를 정확히 사용했어요!',
                good: '함수가 잘 작동해요!',
                partial: 'a + b를 print로 출력하세요.',
                wrong: 'def print_sum(a, b): 안에 print(a + b)를 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '매개변수 순서 버그 수정',
              description: '매개변수 순서가 뒤바뀐 코드를 수정하세요.',
              difficulty: 'easy',
              hints: ['함수 정의의 매개변수 순서를 확인하세요', '호출할 때 인자 순서를 확인하세요', '결과가 의도한 것과 맞는지 확인'],
              estimatedMinutes: 4,
              starterCode: '# 버그를 수정하세요\ndef introduce(name, age):\n    print(f"저는 {name}이고, {age}살이에요.")\n\n# 이름과 나이가 바뀌어 있어요!\nintroduce(15, "민수")\n',
              solution: 'def introduce(name, age):\n    print(f"저는 {name}이고, {age}살이에요.")\n\nintroduce("민수", 15)',
              feedback: {
                perfect: '매개변수 순서를 정확히 수정했어요!',
                good: '순서를 잘 바꿨어요!',
                partial: '인자 순서가 매개변수 순서와 같아야 해요.',
                wrong: 'introduce("민수", 15) 처럼 이름을 먼저, 나이를 나중에 전달하세요.'
              }
            },
            {
              id: 'c3',
              title: '자기소개 함수',
              description: '이름, 나이, 취미 3개의 매개변수를 받는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['매개변수 3개를 쉼표로 구분', 'f-string으로 보기 좋게 출력', '함수 호출 시 3개의 값을 전달'],
              estimatedMinutes: 5,
              starterCode: '# 자기소개 함수를 만드세요\ndef introduce(name, age, hobby):\n    # TODO: 이름, 나이, 취미를 소개하는 문장을 출력\n    pass\n\n# 테스트\nintroduce("철수", 14, "축구")\nintroduce("영희", 13, "피아노")\n',
              solution: 'def introduce(name, age, hobby):\n    print(f"안녕하세요! 저는 {name}이고, {age}살이에요.")\n    print(f"취미는 {hobby}입니다.")\n\nintroduce("철수", 14, "축구")\nintroduce("영희", 13, "피아노")',
              feedback: {
                perfect: '여러 매개변수를 완벽하게 활용했어요!',
                good: '잘 작성했어요! f-string 사용이 좋아요.',
                partial: '3개의 매개변수를 모두 사용하세요.',
                wrong: 'def introduce(name, age, hobby): 안에 print(f"...")를 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: '사각형 넓이 계산기',
              description: '가로, 세로를 받아 넓이를 계산하고 출력하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['넓이 = 가로 * 세로', '결과를 f-string으로 출력', '다양한 크기로 테스트'],
              estimatedMinutes: 5,
              starterCode: '# 사각형 넓이 계산 함수\ndef rectangle_area(width, height):\n    # TODO: 넓이를 계산하고 출력하세요\n    # 예: "가로 5, 세로 3의 넓이: 15"\n    pass\n\n# 테스트\nrectangle_area(5, 3)\nrectangle_area(10, 7)\n',
              solution: 'def rectangle_area(width, height):\n    area = width * height\n    print(f"가로 {width}, 세로 {height}의 넓이: {area}")\n\nrectangle_area(5, 3)\nrectangle_area(10, 7)',
              feedback: {
                perfect: '계산 함수를 완벽하게 만들었어요!',
                good: '넓이 계산이 정확해요!',
                partial: '넓이 = width * height 를 계산하세요.',
                wrong: 'area = width * height 후 print로 출력하세요.'
              }
            },
            {
              id: 'c5',
              title: '성적 판정 함수',
              description: '이름과 점수를 받아 등급을 출력하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['매개변수: name, score', 'if-elif-else로 등급 분류', '90점 이상 A, 80이상 B, 70이상 C, 나머지 D'],
              estimatedMinutes: 7,
              starterCode: '# 성적 판정 함수\ndef check_grade(name, score):\n    # TODO: 점수에 따라 등급(A,B,C,D)을 판정하고\n    # "이름님의 등급: X" 형태로 출력\n    pass\n\n# 테스트\ncheck_grade("철수", 95)  # A\ncheck_grade("영희", 82)  # B\ncheck_grade("민수", 65)  # D\n',
              solution: 'def check_grade(name, score):\n    if score >= 90:\n        grade = "A"\n    elif score >= 80:\n        grade = "B"\n    elif score >= 70:\n        grade = "C"\n    else:\n        grade = "D"\n    print(f"{name}님의 등급: {grade}")\n\ncheck_grade("철수", 95)\ncheck_grade("영희", 82)\ncheck_grade("민수", 65)',
              feedback: {
                perfect: '매개변수와 조건문을 완벽하게 조합했어요!',
                good: '등급 판정이 정확해요!',
                partial: '모든 등급(A~D)을 처리하세요.',
                wrong: 'if score >= 90 형태로 조건문을 매개변수 score에 적용하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-4',
          title: '반환값(Return)',
          description: '함수가 값을 돌려줘요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'return 문',
          conceptExplanation: `
return문은 함수의 실행 결과를 반환하고 함수를 즉시 종료시킵니다.
여러 값을 튜플로 반환할 수 있고, None을 반환하거나 return이 없으면 자동으로 None이 반환됩니다.
함수의 출력을 변수에 저장하거나 다른 함수의 입력으로 사용할 수 있게 합니다.
예: 계산 결과 반환, 성공/실패 상태 반환, 처리된 데이터 반환 등 함수의 핵심 기능입니다.
`,
          starterCode: '# 값을 반환하는 함수\ndef add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8\n\n# return 없으면 None 반환\ndef no_return():\n    print("출력만 함")\n\nresult2 = no_return()\nprint(result2)  # None\n\n# 여러 값 반환 (튜플)\ndef min_max(numbers):\n    return min(numbers), max(numbers)\n\nmin_val, max_val = min_max([3, 1, 4, 1, 5, 9])\nprint(f"최소: {min_val}, 최대: {max_val}")\n',
          hints: [
            'return 값 으로 결과를 반환해요',
            '반환값은 변수에 저장하거나 바로 사용해요',
            '여러 값을 반환하면 튜플이 돼요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '두 수의 합 반환',
              description: '두 숫자를 받아 합을 반환하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['return a + b 로 결과를 반환', '반환값을 변수에 저장', 'print가 아닌 return을 사용'],
              estimatedMinutes: 3,
              starterCode: '# 합을 반환하는 함수\ndef add(a, b):\n    # TODO: a + b를 반환하세요 (print 아님!)\n    pass\n\n# 반환값을 변수에 저장\nresult = add(3, 5)\nprint(f"결과: {result}")\n',
              solution: 'def add(a, b):\n    return a + b\n\nresult = add(3, 5)\nprint(f"결과: {result}")',
              feedback: {
                perfect: 'return과 변수 저장을 정확히 이해했어요!',
                good: '반환값 사용이 정확해요!',
                partial: 'print 대신 return을 사용하세요.',
                wrong: 'return a + b 로 값을 돌려주세요.'
              }
            },
            {
              id: 'c2',
              title: 'return vs print 구분',
              description: 'print만 하고 return이 없는 함수의 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['print()는 화면에 출력만 해요', 'return은 값을 돌려줘요', '함수 결과를 변수에 저장하려면 return 필요'],
              estimatedMinutes: 4,
              starterCode: '# 버그를 수정하세요\ndef multiply(a, b):\n    print(a * b)  # 이게 문제!\n\nresult = multiply(4, 5)\nprint(f"결과의 2배: {result * 2}")  # TypeError!\n',
              solution: 'def multiply(a, b):\n    return a * b\n\nresult = multiply(4, 5)\nprint(f"결과의 2배: {result * 2}")',
              feedback: {
                perfect: 'return과 print의 차이를 완벽히 이해했어요!',
                good: '잘 수정했어요!',
                partial: 'print를 return으로 바꾸세요.',
                wrong: 'print(a * b) 대신 return a * b 를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '절대값 함수',
              description: '음수면 양수로 바꿔 반환하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['음수인지 확인: if num < 0', '음수면 -num 반환', '양수면 그대로 반환'],
              estimatedMinutes: 5,
              starterCode: '# 절대값 반환 함수\ndef my_abs(num):\n    # TODO: 음수면 양수로 바꿔서 반환\n    # 양수면 그대로 반환\n    pass\n\nprint(my_abs(-5))   # 5\nprint(my_abs(3))    # 3\nprint(my_abs(0))    # 0\n',
              solution: 'def my_abs(num):\n    if num < 0:\n        return -num\n    return num\n\nprint(my_abs(-5))\nprint(my_abs(3))\nprint(my_abs(0))',
              feedback: {
                perfect: 'return을 조건에 따라 완벽히 사용했어요!',
                good: '절대값 로직이 정확해요!',
                partial: '음수일 때 -num을 return하세요.',
                wrong: 'if num < 0: return -num, 아니면 return num'
              }
            },
            {
              id: 'c4',
              title: '최대값 찾기 함수',
              description: '세 수 중 가장 큰 값을 반환하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['세 수를 비교하는 if-elif-else', 'max() 함수 사용도 가능', '각 경우에 return'],
              estimatedMinutes: 6,
              starterCode: '# 세 수 중 최대값 반환\ndef find_max(a, b, c):\n    # TODO: a, b, c 중 가장 큰 값을 반환\n    pass\n\nprint(find_max(3, 7, 5))   # 7\nprint(find_max(10, 2, 8))  # 10\nprint(find_max(4, 4, 9))   # 9\n',
              solution: 'def find_max(a, b, c):\n    if a >= b and a >= c:\n        return a\n    elif b >= c:\n        return b\n    else:\n        return c\n\nprint(find_max(3, 7, 5))\nprint(find_max(10, 2, 8))\nprint(find_max(4, 4, 9))',
              feedback: {
                perfect: '조건문과 return을 완벽하게 조합했어요!',
                good: '최대값 로직이 잘 작동해요!',
                partial: '세 수를 모두 비교하세요.',
                wrong: 'if-elif-else로 a, b, c를 비교하고 각각 return하세요.'
              }
            },
            {
              id: 'c5',
              title: '여러 값 반환 (튜플)',
              description: '리스트의 최소값, 최대값, 평균을 한꺼번에 반환하세요.',
              difficulty: 'hard',
              hints: ['return min_val, max_val, avg 로 여러 값 반환', 'min(), max(), sum() 내장 함수 활용', '반환값을 여러 변수에 받기: a, b, c = func()'],
              estimatedMinutes: 8,
              starterCode: '# 리스트의 통계를 반환하는 함수\ndef get_stats(numbers):\n    # TODO: 최소값, 최대값, 평균을 한꺼번에 반환\n    pass\n\n# 여러 값을 한번에 받기\nmin_v, max_v, avg_v = get_stats([10, 20, 30, 40, 50])\nprint(f"최소: {min_v}, 최대: {max_v}, 평균: {avg_v}")\n',
              solution: 'def get_stats(numbers):\n    min_val = min(numbers)\n    max_val = max(numbers)\n    avg = sum(numbers) / len(numbers)\n    return min_val, max_val, avg\n\nmin_v, max_v, avg_v = get_stats([10, 20, 30, 40, 50])\nprint(f"최소: {min_v}, 최대: {max_v}, 평균: {avg_v}")',
              feedback: {
                perfect: '여러 값 반환을 완벽히 이해했어요!',
                good: '통계 계산과 반환이 잘 되어요!',
                partial: 'return min_val, max_val, avg 형태로 반환하세요.',
                wrong: 'return 값1, 값2, 값3 으로 여러 값을 한번에 반환할 수 있어요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-5',
          title: '기본값 매개변수',
          description: '매개변수에 기본값을 설정해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '기본값 매개변수',
          conceptExplanation: `
기본값 매개변수는 인자를 전달하지 않았을 때 사용할 기본값을 설정합니다.
선택적 매개변수를 만들어 함수 호출을 간편하게 하고 유연성을 높입니다.
필수 매개변수 뒤에 와야 하며, 함수 정의 시 = 연산자로 지정합니다.
예: 로그 함수(레벨 기본값), 그래프 그리기(색상 기본값), API 요청(타임아웃 기본값) 등에 사용됩니다.
`,
          starterCode: '# 기본값 설정\ndef greet(name, greeting="안녕하세요"):\n    print(f"{greeting}, {name}님!")\n\ngreet("철수")                  # 안녕하세요, 철수님!\ngreet("영희", "반갑습니다")     # 반갑습니다, 영희님!\n\n# 실용 예시\ndef calculate_price(price, tax_rate=0.1, discount=0):\n    final = price * (1 + tax_rate) - discount\n    return final\n\nprint(calculate_price(10000))           # 11000\nprint(calculate_price(10000, 0.1, 500)) # 10500\n',
          hints: [
            '매개변수=기본값 형식으로 설정',
            '인자를 안 주면 기본값 사용',
            '기본값 없는 매개변수가 먼저 와야 해요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '기본 인사 함수',
              description: '기본값이 있는 인사 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['def greet(name, msg="안녕하세요") 형식', '기본값이 있으면 인자를 안 줘도 돼요', '기본값 없는 매개변수가 먼저!'],
              estimatedMinutes: 3,
              starterCode: '# 기본값 매개변수 연습\ndef greet(name, greeting="안녕하세요"):\n    # TODO: f-string으로 인사 출력\n    pass\n\ngreet("철수")                  # 안녕하세요, 철수님!\ngreet("영희", "반갑습니다")     # 반갑습니다, 영희님!\n',
              solution: 'def greet(name, greeting="안녕하세요"):\n    print(f"{greeting}, {name}님!")\n\ngreet("철수")\ngreet("영희", "반갑습니다")',
              feedback: {
                perfect: '기본값 매개변수를 정확히 사용했어요!',
                good: '기본값 활용이 좋아요!',
                partial: 'greeting 매개변수에 기본값을 확인하세요.',
                wrong: 'def greet(name, greeting="안녕하세요"): 형식으로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '기본값 순서 버그 수정',
              description: '기본값 매개변수가 앞에 있는 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['기본값 없는 매개변수가 먼저 와야 해요', 'SyntaxError가 나면 매개변수 순서를 확인', '기본값 있는 것을 뒤로 옮기세요'],
              estimatedMinutes: 3,
              starterCode: '# 버그를 수정하세요 (SyntaxError 발생)\ndef create_user(role="학생", name, age):\n    print(f"이름: {name}, 나이: {age}, 역할: {role}")\n\ncreate_user("철수", 14)\ncreate_user("영희", 15, "선생님")\n',
              solution: 'def create_user(name, age, role="학생"):\n    print(f"이름: {name}, 나이: {age}, 역할: {role}")\n\ncreate_user("철수", 14)\ncreate_user("영희", 15, "선생님")',
              feedback: {
                perfect: '기본값 매개변수 순서를 완벽히 이해했어요!',
                good: '순서를 잘 수정했어요!',
                partial: '기본값 있는 매개변수를 맨 뒤로 옮기세요.',
                wrong: '기본값 없는 매개변수(name, age)가 먼저, 기본값 있는(role)이 뒤에 와야 해요.'
              }
            },
            {
              id: 'c3',
              title: '커피 주문 함수',
              description: '기본값으로 커피 사이즈와 우유 옵션을 설정하세요.',
              difficulty: 'easy',
              hints: ['size="tall", milk=True 같은 기본값', '기본값을 바꿔서 호출 가능', 'True/False도 기본값 가능'],
              estimatedMinutes: 5,
              starterCode: '# 커피 주문 함수\ndef order_coffee(menu, size="tall", milk=True):\n    # TODO: 주문 내용을 출력하세요\n    # 예: "아메리카노 (tall, 우유 O)"\n    pass\n\norder_coffee("아메리카노")\norder_coffee("라떼", "grande")\norder_coffee("에스프레소", "short", False)\n',
              solution: 'def order_coffee(menu, size="tall", milk=True):\n    milk_str = "우유 O" if milk else "우유 X"\n    print(f"{menu} ({size}, {milk_str})")\n\norder_coffee("아메리카노")\norder_coffee("라떼", "grande")\norder_coffee("에스프레소", "short", False)',
              feedback: {
                perfect: '여러 기본값을 완벽하게 활용했어요!',
                good: '주문 시스템이 잘 작동해요!',
                partial: '우유 여부도 출력하세요.',
                wrong: '기본값과 조건식을 조합해 출력하세요.'
              }
            },
            {
              id: 'c4',
              title: '반복 출력 함수',
              description: '메시지와 반복 횟수(기본값 3)를 받아 출력하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['def repeat_print(msg, times=3) 형식', 'for 반복문 사용', '기본값이 3이면 인자 없이도 3번 출력'],
              estimatedMinutes: 5,
              starterCode: '# 반복 출력 함수\ndef repeat_print(message, times=3):\n    # TODO: message를 times번 출력하세요\n    pass\n\nrepeat_print("안녕!")       # 3번 출력\nrepeat_print("화이팅!", 5)  # 5번 출력\n',
              solution: 'def repeat_print(message, times=3):\n    for i in range(times):\n        print(message)\n\nrepeat_print("안녕!")\nrepeat_print("화이팅!", 5)',
              feedback: {
                perfect: '기본값과 반복문을 잘 조합했어요!',
                good: '반복 출력이 잘 돼요!',
                partial: 'for i in range(times): 를 사용하세요.',
                wrong: 'times 매개변수를 range()에 넣어 반복하세요.'
              }
            },
            {
              id: 'c5',
              title: '할인 계산기',
              description: '가격, 할인율(기본 10%), 세금(기본 10%)을 적용하는 함수를 만드세요.',
              difficulty: 'hard',
              hints: ['def calc_price(price, discount=0.1, tax=0.1)', '할인 후 세금 적용', 'return으로 최종 금액 반환'],
              estimatedMinutes: 8,
              starterCode: '# 할인 계산기\ndef calc_price(price, discount=0.1, tax=0.1):\n    # TODO: 할인 적용 후 세금 적용한 최종 금액 반환\n    # 순서: 할인 -> 세금 추가\n    pass\n\nprint(calc_price(10000))              # 기본: 10% 할인 + 10% 세금\nprint(calc_price(10000, 0.2))          # 20% 할인 + 10% 세금\nprint(calc_price(10000, 0.1, 0.05))    # 10% 할인 + 5% 세금\n',
              solution: 'def calc_price(price, discount=0.1, tax=0.1):\n    discounted = price * (1 - discount)\n    final = discounted * (1 + tax)\n    return int(final)\n\nprint(calc_price(10000))\nprint(calc_price(10000, 0.2))\nprint(calc_price(10000, 0.1, 0.05))',
              feedback: {
                perfect: '기본값 매개변수와 계산 로직이 완벽해요!',
                good: '할인 계산이 정확해요!',
                partial: '할인 후 세금 순서를 확인하세요.',
                wrong: 'price * (1 - discount) 로 할인하고, * (1 + tax)로 세금을 추가하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-6',
          title: '키워드 인자',
          description: '매개변수 이름으로 값을 전달해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 10,
          concept: '키워드 인자',
          conceptExplanation: `
키워드 인자는 매개변수 이름을 명시하여 순서와 무관하게 인자를 전달하는 방법입니다.
코드 가독성이 높아지고, 매개변수가 많을 때 혼동을 방지합니다.
선택적 매개변수가 많은 함수에서 특히 유용합니다.
예: 설정 함수(debug=True), 이메일 전송(subject=제목, to=수신자), 데이터베이스 연결(host, port) 등에 활용됩니다.
`,
          starterCode: 'def profile(name, age, city):\n    print(f"이름: {name}, 나이: {age}, 도시: {city}")\n\n# 위치 인자 (순서대로)\nprofile("철수", 14, "서울")\n\n# 키워드 인자 (이름 지정)\nprofile(name="영희", age=15, city="부산")\nprofile(city="대전", name="민수", age=13)  # 순서 바꿔도 OK\n\n# 혼합 (위치 인자가 먼저!)\nprofile("지은", city="인천", age=14)\n',
          hints: [
            '매개변수=값 형식으로 전달',
            '순서에 상관없이 전달할 수 있어요',
            '코드의 가독성이 좋아져요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '키워드 인자로 호출하기',
              description: '함수를 키워드 인자로 호출하세요.',
              difficulty: 'easy',
              hints: ['함수(매개변수이름=값) 형태', '순서를 바꿔도 이름으로 매칭', '위치 인자와 섞어서 사용 가능'],
              estimatedMinutes: 3,
              starterCode: '# 프로필 함수\ndef profile(name, age, city):\n    print(f"이름: {name}, 나이: {age}, 도시: {city}")\n\n# TODO: 키워드 인자로 호출하세요 (순서를 바꿔서!)\n# profile(city=???, name=???, age=???)\n',
              solution: 'def profile(name, age, city):\n    print(f"이름: {name}, 나이: {age}, 도시: {city}")\n\nprofile(city="서울", name="철수", age=14)',
              feedback: {
                perfect: '키워드 인자를 정확히 이해했어요!',
                good: '이름 지정 호출이 잘 돼요!',
                partial: '매개변수=값 형태로 전달하세요.',
                wrong: 'profile(city="서울", name="철수", age=14) 처럼 이름을 지정하세요.'
              }
            },
            {
              id: 'c2',
              title: '위치/키워드 인자 혼합 버그',
              description: '키워드 인자가 위치 인자보다 앞에 있는 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['위치 인자가 키워드 인자보다 먼저 와야 해요', 'SyntaxError가 나면 순서를 확인', '위치 인자 후 키워드 인자'],
              estimatedMinutes: 3,
              starterCode: '# 버그를 수정하세요\ndef send_message(sender, receiver, message):\n    print(f"[{sender} -> {receiver}] {message}")\n\n# 에러! 키워드 인자가 위치 인자 앞에 옴\nsend_message(sender="철수", "영희", "안녕!")\n',
              solution: 'def send_message(sender, receiver, message):\n    print(f"[{sender} -> {receiver}] {message}")\n\nsend_message("철수", receiver="영희", message="안녕!")',
              feedback: {
                perfect: '위치/키워드 인자 순서를 완벽히 이해했어요!',
                good: '순서를 잘 수정했어요!',
                partial: '위치 인자를 먼저, 키워드 인자를 나중에 배치하세요.',
                wrong: '위치 인자(값만)가 키워드 인자(이름=값)보다 먼저 와야 해요.'
              }
            },
            {
              id: 'c3',
              title: '키워드 인자의 가독성',
              description: '긴 함수 호출을 키워드 인자로 읽기 좋게 바꾸세요.',
              difficulty: 'easy',
              hints: ['매개변수가 많을수록 키워드 인자가 좋아요', '각 인자의 의미가 명확해짐', '한 줄이 길면 여러 줄로 나눠도 OK'],
              estimatedMinutes: 5,
              starterCode: '# 함수 정의\ndef create_account(username, email, age, country, is_student):\n    print(f"계정 생성: {username} ({email})")\n    print(f"  나이: {age}, 국가: {country}, 학생: {is_student}")\n\n# TODO: 위치 인자 호출을 키워드 인자로 바꾸세요\ncreate_account("coder123", "coder@email.com", 14, "한국", True)\n',
              solution: 'def create_account(username, email, age, country, is_student):\n    print(f"계정 생성: {username} ({email})")\n    print(f"  나이: {age}, 국가: {country}, 학생: {is_student}")\n\ncreate_account(\n    username="coder123",\n    email="coder@email.com",\n    age=14,\n    country="한국",\n    is_student=True\n)',
              feedback: {
                perfect: '키워드 인자로 가독성을 크게 높였어요!',
                good: '읽기 쉬운 코드가 되었어요!',
                partial: '모든 인자에 이름을 붙여보세요.',
                wrong: 'create_account(username="coder123", ...) 형태로 바꾸세요.'
              }
            },
            {
              id: 'c4',
              title: '게임 캐릭터 생성 함수',
              description: '키워드 인자와 기본값을 조합한 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['name은 필수, 나머지는 기본값', '키워드 인자로 원하는 것만 변경', 'hp=100, attack=10 같은 기본값'],
              estimatedMinutes: 6,
              starterCode: '# 캐릭터 생성 함수\ndef create_character(name, hp=100, attack=10, defense=5, speed=7):\n    # TODO: 캐릭터 정보를 딕셔너리로 반환\n    pass\n\n# 키워드 인자로 원하는 스탯만 변경\nwarrior = create_character("전사", hp=150, defense=15)\nmage = create_character("마법사", attack=20, speed=5)\nprint(warrior)\nprint(mage)\n',
              solution: 'def create_character(name, hp=100, attack=10, defense=5, speed=7):\n    return {\n        "name": name,\n        "hp": hp,\n        "attack": attack,\n        "defense": defense,\n        "speed": speed\n    }\n\nwarrior = create_character("전사", hp=150, defense=15)\nmage = create_character("마법사", attack=20, speed=5)\nprint(warrior)\nprint(mage)',
              feedback: {
                perfect: '키워드 인자와 기본값 조합이 완벽해요!',
                good: '캐릭터 생성이 잘 돼요!',
                partial: '딕셔너리로 반환하세요.',
                wrong: 'return {"name": name, "hp": hp, ...} 형태로 딕셔너리를 반환하세요.'
              }
            },
            {
              id: 'c5',
              title: '출력 포맷 함수',
              description: '다양한 키워드 인자로 출력 형식을 조절하는 함수를 만드세요.',
              difficulty: 'hard',
              hints: ['sep(구분자), end(끝문자), border(테두리) 등', '기본값으로 가장 일반적인 형태 설정', '키워드 인자로 원하는 것만 변경'],
              estimatedMinutes: 8,
              starterCode: '# 포맷된 출력 함수\ndef fancy_print(text, border="=", width=30, center=True):\n    # TODO: border 문자로 테두리를 만들고\n    # center가 True면 가운데 정렬\n    pass\n\nfancy_print("안녕하세요")\nfancy_print("Python", border="*", width=20)\nfancy_print("왼쪽 정렬", center=False)\n',
              solution: 'def fancy_print(text, border="=", width=30, center=True):\n    line = border * width\n    print(line)\n    if center:\n        print(text.center(width))\n    else:\n        print(text)\n    print(line)\n\nfancy_print("안녕하세요")\nfancy_print("Python", border="*", width=20)\nfancy_print("왼쪽 정렬", center=False)',
              feedback: {
                perfect: '키워드 인자로 유연한 함수를 만들었어요!',
                good: '출력 형식 조절이 잘 돼요!',
                partial: 'center 옵션 처리를 추가하세요.',
                wrong: 'border * width로 테두리를 만들고 text.center(width)로 가운데 정렬하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-7',
          title: '변수의 범위(Scope)',
          description: '지역 변수와 전역 변수를 이해해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '변수 스코프',
          conceptExplanation: `
변수 스코프는 변수가 사용 가능한 범위를 의미합니다.
지역 변수는 함수 안에서만 사용 가능하고, 전역 변수는 프로그램 전체에서 접근 가능합니다.
잘못 사용하면 예기치 않은 버그가 발생하므로 스코프 규칙을 정확히 이해해야 합니다.
예: 함수 내부 계산용 임시 변수(지역), 설정값(전역), 함수 간 데이터 전달 시 주의가 필요합니다.
`,
          starterCode: '# 전역 변수\nmessage = "전역 메시지"\n\ndef show_message():\n    # 지역 변수\n    local_msg = "지역 메시지"\n    print(message)     # 전역 변수는 읽을 수 있음\n    print(local_msg)   # 지역 변수\n\nshow_message()\nprint(message)         # OK\n# print(local_msg)     # 에러! 함수 밖에서 접근 불가\n\n# 전역 변수 수정 (권장하지 않음)\ncounter = 0\n\ndef increment():\n    global counter  # 전역 변수임을 명시\n    counter += 1\n\nincrement()\nprint(counter)  # 1\n',
          hints: [
            '함수 안에서 만든 변수는 지역 변수',
            '함수 밖에서 만든 변수는 전역 변수',
            'global 키워드로 전역 변수 수정 (비권장)',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '지역 변수 확인',
              description: '함수 안에서 만든 변수가 밖에서 접근 불가능한 것을 확인하세요.',
              difficulty: 'easy',
              hints: ['함수 안의 변수는 지역 변수', '함수 밖에서 접근하면 NameError', '함수 안에서만 사용 가능'],
              estimatedMinutes: 3,
              starterCode: '# 지역 변수 확인\ndef my_function():\n    secret = "비밀번호123"\n    print(f"함수 안: {secret}")\n\nmy_function()\n\n# TODO: 아래 코드의 결과를 예측하세요\n# 주석을 해제하면 어떤 에러가 나는지 확인\n# print(f"함수 밖: {secret}")  # ???\n\n# 함수 밖에서 secret을 사용하려면 어떻게 해야 할까요?\n# return으로 반환하세요!\ndef get_secret():\n    secret = "비밀번호123"\n    # TODO: secret을 반환하세요\n    pass\n',
              solution: 'def my_function():\n    secret = "비밀번호123"\n    print(f"함수 안: {secret}")\n\nmy_function()\n\ndef get_secret():\n    secret = "비밀번호123"\n    return secret\n\nresult = get_secret()\nprint(f"함수 밖: {result}")',
              feedback: {
                perfect: '지역 변수와 return의 관계를 정확히 이해했어요!',
                good: 'return으로 값을 잘 전달했어요!',
                partial: 'return secret 으로 값을 반환하세요.',
                wrong: '함수 안의 변수는 밖에서 쓸 수 없으니 return으로 반환하세요.'
              }
            },
            {
              id: 'c2',
              title: '전역 변수 읽기',
              description: '함수 안에서 전역 변수를 읽어보세요.',
              difficulty: 'easy',
              hints: ['함수 안에서 전역 변수를 읽을 수 있어요', '수정은 global 키워드 필요', '읽기만 할 때는 그냥 사용 가능'],
              estimatedMinutes: 3,
              starterCode: '# 전역 변수\nschool_name = "코딩학교"\nstudent_count = 30\n\ndef show_info():\n    # TODO: 전역 변수를 사용해서 정보 출력\n    # "코딩학교에 30명의 학생이 있습니다"\n    pass\n\nshow_info()\n',
              solution: 'school_name = "코딩학교"\nstudent_count = 30\n\ndef show_info():\n    print(f"{school_name}에 {student_count}명의 학생이 있습니다")\n\nshow_info()',
              feedback: {
                perfect: '전역 변수 읽기를 정확히 이해했어요!',
                good: '전역 변수를 잘 사용했어요!',
                partial: '함수 안에서 school_name을 그대로 사용하세요.',
                wrong: '전역 변수는 함수 안에서 읽을 수 있어요. 그냥 이름으로 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '같은 이름 변수 구분',
              description: '전역 변수와 지역 변수 이름이 같을 때 어떻게 되는지 확인하세요.',
              difficulty: 'medium',
              hints: ['같은 이름이면 지역 변수가 우선', '함수 안에서 할당하면 새 지역 변수 생성', '전역 변수는 변하지 않음'],
              estimatedMinutes: 5,
              starterCode: '# 전역 변수와 지역 변수 이름이 같을 때\ncount = 10  # 전역\n\ndef change_count():\n    count = 99  # 지역 (새로운 변수!)\n    print(f"함수 안: {count}")\n\nchange_count()\nprint(f"함수 밖: {count}")\n\n# TODO: 출력 결과를 예측하고\n# 주석으로 설명을 작성하세요\n# 함수 안: ???\n# 함수 밖: ???\n',
              solution: 'count = 10\n\ndef change_count():\n    count = 99  # 지역 변수 (전역 count와 다른 변수)\n    print(f"함수 안: {count}")  # 99\n\nchange_count()\nprint(f"함수 밖: {count}")  # 10 (전역 변수는 변하지 않음)\n# 함수 안: 99\n# 함수 밖: 10',
              feedback: {
                perfect: '지역/전역 변수 구분을 완벽히 이해했어요!',
                good: '변수 스코프를 잘 파악했어요!',
                partial: '함수 안의 count는 지역 변수예요.',
                wrong: '함수 안에서 count = 99 는 새 지역 변수를 만드는 거예요. 전역 count와 다릅니다.'
              }
            },
            {
              id: 'c4',
              title: 'global 키워드 사용',
              description: 'global 키워드로 전역 변수를 함수 안에서 수정하세요.',
              difficulty: 'medium',
              hints: ['global 변수명 으로 전역 변수 선언', '함수 안에서 전역 변수를 수정 가능', '되도록 사용하지 않는 것이 좋아요'],
              estimatedMinutes: 5,
              starterCode: '# 점수 카운터\ntotal_score = 0\n\ndef add_score(points):\n    # TODO: global 키워드를 사용해서\n    # total_score에 points를 더하세요\n    pass\n\nadd_score(10)\nadd_score(20)\nadd_score(30)\nprint(f"총 점수: {total_score}")  # 60\n',
              solution: 'total_score = 0\n\ndef add_score(points):\n    global total_score\n    total_score += points\n\nadd_score(10)\nadd_score(20)\nadd_score(30)\nprint(f"총 점수: {total_score}")',
              feedback: {
                perfect: 'global 키워드를 정확히 사용했어요!',
                good: '전역 변수 수정이 잘 돼요!',
                partial: 'global total_score를 함수 맨 위에 추가하세요.',
                wrong: 'def 안에 global total_score 를 먼저 선언 후 total_score += points 하세요.'
              }
            },
            {
              id: 'c5',
              title: 'global 없이 설계하기',
              description: 'global 대신 매개변수와 return으로 같은 기능을 구현하세요.',
              difficulty: 'hard',
              hints: ['함수에 현재 값을 매개변수로 전달', 'return으로 변경된 값을 반환', '호출 후 반환값으로 변수 업데이트'],
              estimatedMinutes: 8,
              starterCode: '# global 없이 카운터 만들기\n# 매개변수와 return을 사용하세요\n\ndef add_score(current_score, points):\n    # TODO: current_score에 points를 더해서 반환\n    pass\n\ntotal = 0\ntotal = add_score(total, 10)\ntotal = add_score(total, 20)\ntotal = add_score(total, 30)\nprint(f"총 점수: {total}")  # 60\n',
              solution: 'def add_score(current_score, points):\n    return current_score + points\n\ntotal = 0\ntotal = add_score(total, 10)\ntotal = add_score(total, 20)\ntotal = add_score(total, 30)\nprint(f"총 점수: {total}")',
              feedback: {
                perfect: 'global 없이 깔끔하게 설계했어요! 이 방법이 더 좋아요!',
                good: '매개변수와 return을 잘 활용했어요!',
                partial: 'return current_score + points 로 반환하세요.',
                wrong: '값을 매개변수로 받고 return으로 돌려주면 global이 필요 없어요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-8',
          title: '람다 함수',
          description: '한 줄로 작성하는 간단한 함수',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'lambda 함수',
          conceptExplanation: `
람다는 한 줄로 작성하는 익명 함수로, 간단한 함수를 빠르게 정의할 때 사용합니다.
lambda 매개변수: 표현식 형태로 작성하며, 주로 정렬이나 필터링의 key 함수로 활용됩니다.
복잡한 로직은 일반 함수로 작성하고, 간단한 변환만 람다로 처리하는 것이 좋습니다.
예: 리스트 정렬 key 함수, map/filter 함수와 조합, 이벤트 핸들러 등에 사용됩니다.
`,
          starterCode: '# 일반 함수\ndef add(a, b):\n    return a + b\n\n# 람다 함수 (같은 기능)\nadd_lambda = lambda a, b: a + b\n\nprint(add(3, 5))        # 8\nprint(add_lambda(3, 5)) # 8\n\n# 주로 정렬이나 map/filter에서 사용\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\n\n# 점수순 정렬\nstudents.sort(key=lambda x: x["score"], reverse=True)\nfor s in students:\n    print(f"{s[\'name\"]}: {s[\'score\"]}점")\n',
          hints: [
            'lambda 매개변수: 표현식 형식',
            '간단한 함수를 한 줄로 작성',
            'sort()의 key, map(), filter()에 자주 사용',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '람다 기본 사용',
              description: '간단한 계산을 람다 함수로 만드세요.',
              difficulty: 'easy',
              hints: ['lambda 매개변수: 표현식', '한 줄로 간단한 함수 정의', '변수에 저장해서 사용 가능'],
              estimatedMinutes: 3,
              starterCode: '# 람다 함수 만들기\n# TODO: 두 수의 합을 반환하는 람다\nadd = None  # lambda a, b: ???\n\n# TODO: 숫자의 제곱을 반환하는 람다\nsquare = None  # lambda x: ???\n\nprint(add(3, 5))     # 8\nprint(square(4))     # 16\n',
              solution: 'add = lambda a, b: a + b\nsquare = lambda x: x ** 2\n\nprint(add(3, 5))\nprint(square(4))',
              feedback: {
                perfect: '람다 함수를 정확히 이해했어요!',
                good: '람다 사용이 좋아요!',
                partial: 'lambda 매개변수: 표현식 형태로 작성하세요.',
                wrong: 'add = lambda a, b: a + b 처럼 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '람다 vs 일반 함수 변환',
              description: '일반 함수를 동일한 람다 함수로 바꾸세요.',
              difficulty: 'easy',
              hints: ['def 함수를 lambda로 변환', '한 줄 return은 람다로 가능', 'lambda 매개변수: return할 값'],
              estimatedMinutes: 4,
              starterCode: '# 일반 함수를 람다로 변환하세요\ndef is_even(n):\n    return n % 2 == 0\n\ndef celsius_to_fahr(c):\n    return c * 9/5 + 32\n\n# TODO: 위 두 함수를 람다로 변환\nis_even_lambda = None\ncelsius_lambda = None\n\nprint(is_even_lambda(4))      # True\nprint(celsius_lambda(100))    # 212.0\n',
              solution: 'is_even_lambda = lambda n: n % 2 == 0\ncelsius_lambda = lambda c: c * 9/5 + 32\n\nprint(is_even_lambda(4))\nprint(celsius_lambda(100))',
              feedback: {
                perfect: '함수를 람다로 완벽하게 변환했어요!',
                good: '변환이 정확해요!',
                partial: 'return 부분만 lambda 뒤에 쓰면 돼요.',
                wrong: 'lambda n: n % 2 == 0 처럼 return 없이 표현식만 쓰세요.'
              }
            },
            {
              id: 'c3',
              title: 'sort와 lambda',
              description: '람다를 key로 사용하여 리스트를 정렬하세요.',
              difficulty: 'medium',
              hints: ['sort(key=lambda x: 기준값)', '딕셔너리의 특정 키로 정렬', 'reverse=True로 내림차순'],
              estimatedMinutes: 5,
              starterCode: '# 학생 점수 리스트\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78},\n    {"name": "지은", "score": 95}\n]\n\n# TODO: 점수 기준 내림차순 정렬 (람다 사용)\n# students.sort(key=lambda ???, reverse=True)\n\nfor s in students:\n    print(f"{s["name"]}: {s["score"]}점")\n',
              solution: 'students = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78},\n    {"name": "지은", "score": 95}\n]\n\nstudents.sort(key=lambda x: x["score"], reverse=True)\n\nfor s in students:\n    print(f"{s["name"]}: {s["score"]}점")',
              feedback: {
                perfect: 'sort의 key에 람다를 완벽하게 사용했어요!',
                good: '정렬이 잘 돼요!',
                partial: 'key=lambda x: x["score"]를 사용하세요.',
                wrong: 'sort(key=lambda x: x["score"], reverse=True)로 점수 기준 정렬하세요.'
              }
            },
            {
              id: 'c4',
              title: 'map과 lambda',
              description: 'map()과 람다로 리스트 변환을 수행하세요.',
              difficulty: 'medium',
              hints: ['map(함수, 리스트)로 변환', 'list()로 결과를 리스트로 변환', '각 요소에 함수를 적용'],
              estimatedMinutes: 6,
              starterCode: 'prices = [1000, 2000, 3000, 4000, 5000]\n\n# TODO: 모든 가격에 10% 할인 적용 (lambda + map)\ndiscounted = None\n\n# TODO: 모든 가격을 문자열로 변환 ("1000원" 형태)\nprice_strings = None\n\nprint(list(discounted))\nprint(list(price_strings))\n',
              solution: 'prices = [1000, 2000, 3000, 4000, 5000]\n\ndiscounted = map(lambda x: int(x * 0.9), prices)\nprice_strings = map(lambda x: f"{x}원", prices)\n\nprint(list(discounted))\nprint(list(price_strings))',
              feedback: {
                perfect: 'map과 lambda 조합을 완벽하게 활용했어요!',
                good: '변환이 잘 돼요!',
                partial: 'map(lambda x: 변환식, 리스트) 형태를 사용하세요.',
                wrong: 'map(lambda x: int(x * 0.9), prices)로 할인을 적용하세요.'
              }
            },
            {
              id: 'c5',
              title: 'filter와 lambda',
              description: 'filter()와 람다로 조건에 맞는 요소만 골라내세요.',
              difficulty: 'hard',
              hints: ['filter(조건함수, 리스트)', '조건함수가 True인 요소만 남김', 'lambda로 조건을 작성'],
              estimatedMinutes: 7,
              starterCode: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# TODO: 짝수만 필터링\nevens = None\n\n# TODO: 5보다 큰 수만 필터링\nbig_nums = None\n\n# TODO: 3의 배수만 필터링\nmultiples_3 = None\n\nprint("짝수:", list(evens))\nprint("5초과:", list(big_nums))\nprint("3의배수:", list(multiples_3))\n',
              solution: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nevens = filter(lambda x: x % 2 == 0, numbers)\nbig_nums = filter(lambda x: x > 5, numbers)\nmultiples_3 = filter(lambda x: x % 3 == 0, numbers)\n\nprint("짝수:", list(evens))\nprint("5초과:", list(big_nums))\nprint("3의배수:", list(multiples_3))',
              feedback: {
                perfect: 'filter와 lambda를 완벽하게 활용했어요!',
                good: '필터링이 정확해요!',
                partial: 'filter(lambda x: 조건, 리스트) 형태를 사용하세요.',
                wrong: 'filter(lambda x: x % 2 == 0, numbers)로 짝수를 필터링하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-9',
          title: 'Docstring',
          description: '함수에 설명을 달아요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: '함수 문서화',
          conceptExplanation: `
함수 문서화는 함수의 목적, 매개변수, 반환값을 설명하는 것입니다.
docstring(삼중 따옴표)으로 작성하며, help() 함수로 확인할 수 있습니다.
좋은 문서는 코드를 이해하기 쉽게 만들고 협업을 원활하게 합니다.
예: API 함수 문서, 라이브러리 사용 설명, 팀 프로젝트 코드 공유 등에 필수적입니다.
`,
          starterCode: 'def calculate_bmi(weight, height):\n    """\n    BMI(체질량지수)를 계산합니다.\n    \n    Args:\n        weight: 몸무게 (kg)\n        height: 키 (m)\n    \n    Returns:\n        BMI 값 (float)\n    """\n    return weight / (height ** 2)\n\n# docstring 확인\nprint(calculate_bmi.__doc__)\n\n# help() 함수로도 확인 가능\nhelp(calculate_bmi)\n\n# 실행\nbmi = calculate_bmi(70, 1.75)\nprint(f"BMI: {bmi:.1f}")\n',
          hints: [
            '"""문서""" 형식으로 작성',
            '함수의 목적, 매개변수, 반환값을 설명',
            '__doc__나 help()로 확인 가능',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'docstring 작성하기',
              description: '함수에 docstring을 추가하세요.',
              difficulty: 'easy',
              hints: ['함수 바로 아래에 """설명""" 작성', 'Args, Returns 섹션을 포함', '함수의 목적을 한 줄로 설명'],
              estimatedMinutes: 3,
              starterCode: '# docstring을 추가하세요\ndef calculate_area(width, height):\n    # TODO: docstring 추가\n    return width * height\n\n# docstring 확인\nprint(calculate_area.__doc__)\nprint(calculate_area(5, 3))\n',
              solution: 'def calculate_area(width, height):\n    """사각형의 넓이를 계산합니다.\n\n    Args:\n        width: 가로 길이\n        height: 세로 길이\n\n    Returns:\n        넓이 (가로 * 세로)\n    """\n    return width * height\n\nprint(calculate_area.__doc__)\nprint(calculate_area(5, 3))',
              feedback: {
                perfect: 'docstring을 완벽하게 작성했어요!',
                good: '문서화가 잘 되어 있어요!',
                partial: 'Args와 Returns 섹션을 추가하세요.',
                wrong: '함수 바로 아래에 """설명"""을 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: 'docstring 읽고 함수 완성',
              description: 'docstring을 읽고 함수를 구현하세요.',
              difficulty: 'easy',
              hints: ['docstring의 설명을 잘 읽으세요', 'Args와 Returns를 참고하세요', '설명대로 구현하면 돼요'],
              estimatedMinutes: 4,
              starterCode: 'def is_adult(age):\n    """나이로 성인 여부를 판단합니다.\n\n    Args:\n        age: 나이 (정수)\n\n    Returns:\n        18세 이상이면 True, 미만이면 False\n    """\n    # TODO: docstring에 맞게 구현하세요\n    pass\n\nprint(is_adult(20))   # True\nprint(is_adult(15))   # False\n',
              solution: 'def is_adult(age):\n    """나이로 성인 여부를 판단합니다.\n\n    Args:\n        age: 나이 (정수)\n\n    Returns:\n        18세 이상이면 True, 미만이면 False\n    """\n    return age >= 18\n\nprint(is_adult(20))\nprint(is_adult(15))',
              feedback: {
                perfect: 'docstring을 읽고 정확히 구현했어요!',
                good: '문서를 참고한 구현이 좋아요!',
                partial: 'age >= 18 조건으로 True/False를 반환하세요.',
                wrong: 'return age >= 18 로 성인 여부를 반환하세요.'
              }
            },
            {
              id: 'c3',
              title: '여러 함수에 docstring 추가',
              description: '3개의 함수에 적절한 docstring을 추가하세요.',
              difficulty: 'medium',
              hints: ['각 함수의 목적을 파악하세요', 'Args와 Returns를 명확히 작성', '간결하고 정확하게 작성'],
              estimatedMinutes: 6,
              starterCode: 'def add(a, b):\n    # TODO: docstring 추가\n    return a + b\n\ndef find_max(numbers):\n    # TODO: docstring 추가\n    return max(numbers)\n\ndef format_name(first, last):\n    # TODO: docstring 추가\n    return f"{last}{first}"\n\nprint(add(3, 5))\nprint(find_max([3, 7, 1, 9]))\nprint(format_name("길동", "홍"))\n',
              solution: 'def add(a, b):\n    """두 수의 합을 반환합니다.\n\n    Args:\n        a: 첫 번째 숫자\n        b: 두 번째 숫자\n\n    Returns:\n        a + b의 결과\n    """\n    return a + b\n\ndef find_max(numbers):\n    """리스트에서 가장 큰 값을 반환합니다.\n\n    Args:\n        numbers: 숫자 리스트\n\n    Returns:\n        리스트의 최대값\n    """\n    return max(numbers)\n\ndef format_name(first, last):\n    """이름을 성+이름 형태로 반환합니다.\n\n    Args:\n        first: 이름\n        last: 성\n\n    Returns:\n        성이름 형태의 문자열\n    """\n    return f"{last}{first}"\n\nprint(add(3, 5))\nprint(find_max([3, 7, 1, 9]))\nprint(format_name("길동", "홍"))',
              feedback: {
                perfect: '모든 함수에 완벽한 docstring을 달았어요!',
                good: '문서화가 잘 되어 있어요!',
                partial: '모든 함수에 docstring을 추가하세요.',
                wrong: '각 함수 아래에 """설명"""을 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: 'docstring으로 API 문서 만들기',
              description: '복잡한 함수에 상세한 docstring을 작성하세요.',
              difficulty: 'medium',
              hints: ['예외 상황도 문서화', 'Examples 섹션 추가', 'Raises 섹션으로 예외 설명'],
              estimatedMinutes: 7,
              starterCode: 'def divide(a, b):\n    # TODO: 상세한 docstring 작성\n    # - 목적, Args, Returns, Raises, Examples 포함\n    if b == 0:\n        raise ValueError("0으로 나눌 수 없습니다")\n    return a / b\n\nprint(divide(10, 3))\nprint(divide.__doc__)\n',
              solution: 'def divide(a, b):\n    """두 수의 나눗셈 결과를 반환합니다.\n\n    Args:\n        a: 피제수 (나누어지는 수)\n        b: 제수 (나누는 수, 0이 아닌 수)\n\n    Returns:\n        a / b의 결과 (float)\n\n    Raises:\n        ValueError: b가 0일 때\n\n    Examples:\n        >>> divide(10, 3)\n        3.333...\n        >>> divide(6, 2)\n        3.0\n    """\n    if b == 0:\n        raise ValueError("0으로 나눌 수 없습니다")\n    return a / b\n\nprint(divide(10, 3))\nprint(divide.__doc__)',
              feedback: {
                perfect: '상세한 docstring을 완벽하게 작성했어요!',
                good: '문서가 매우 상세해요!',
                partial: 'Raises와 Examples도 추가하세요.',
                wrong: 'Args, Returns, Raises, Examples 섹션을 포함하는 docstring을 작성하세요.'
              }
            },
            {
              id: 'c5',
              title: '타입 힌트와 docstring',
              description: '타입 힌트와 docstring을 함께 사용하세요.',
              difficulty: 'hard',
              hints: ['def func(param: type) -> return_type:', '타입 힌트로 매개변수와 반환 타입 명시', 'docstring과 타입 힌트를 함께 사용'],
              estimatedMinutes: 8,
              starterCode: '# 타입 힌트와 docstring을 함께 사용하세요\ndef calculate_bmi(weight, height):\n    # TODO: 타입 힌트 추가 (float -> float)\n    # TODO: docstring 작성\n    return weight / (height ** 2)\n\ndef get_grade(score):\n    # TODO: 타입 힌트 추가 (int -> str)\n    # TODO: docstring 작성\n    if score >= 90: return "A"\n    elif score >= 80: return "B"\n    else: return "C"\n\nprint(calculate_bmi(70, 1.75))\nprint(get_grade(85))\n',
              solution: 'def calculate_bmi(weight: float, height: float) -> float:\n    """BMI(체질량지수)를 계산합니다.\n\n    Args:\n        weight: 몸무게 (kg)\n        height: 키 (m)\n\n    Returns:\n        BMI 값\n    """\n    return weight / (height ** 2)\n\ndef get_grade(score: int) -> str:\n    """점수에 따른 등급을 반환합니다.\n\n    Args:\n        score: 시험 점수 (0-100)\n\n    Returns:\n        등급 문자열 (A, B, C)\n    """\n    if score >= 90: return "A"\n    elif score >= 80: return "B"\n    else: return "C"\n\nprint(calculate_bmi(70, 1.75))\nprint(get_grade(85))',
              feedback: {
                perfect: '타입 힌트와 docstring을 완벽하게 조합했어요!',
                good: '타입 명시가 잘 되어 있어요!',
                partial: '타입 힌트를 매개변수와 반환값에 추가하세요.',
                wrong: 'def func(param: type) -> type: 형태로 타입을 명시하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-27-10',
          title: '주간 도전: 계산기 함수',
          description: '다양한 계산 함수를 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '함수 종합',
          conceptExplanation: `
함수는 프로그래밍의 가장 중요한 개념으로, 모듈화와 재사용의 핵심입니다.
매개변수, 반환값, 스코프, 문서화 등 모든 요소를 종합적으로 활용해야 합니다.
잘 설계된 함수는 프로그램의 품질을 크게 향상시킵니다.
예: 모든 프로그램은 함수의 조합으로 이루어지며, 함수 설계 능력이 개발 실력을 결정합니다.
`,
          starterCode: '# 사칙연산 함수들\ndef add(a, b):\n    """두 수의 합을 반환합니다."""\n    return a + b\n\ndef subtract(a, b):\n    """두 수의 차를 반환합니다."""\n    return a - b\n\ndef multiply(a, b):\n    """두 수의 곱을 반환합니다."""\n    return a * b\n\ndef divide(a, b):\n    """두 수의 나눗셈 결과를 반환합니다."""\n    if b == 0:\n        return "0으로 나눌 수 없습니다"\n    return a / b\n\n# 계산기 메인\ndef calculator():\n    """간단한 계산기 프로그램"""\n    print("=== 계산기 ===")\n    a = float(input("첫 번째 숫자: "))\n    op = input("연산자 (+, -, *, /): ")\n    b = float(input("두 번째 숫자: "))\n    \n    if op == "+":\n        result = add(a, b)\n    elif op == "-":\n        result = subtract(a, b)\n    elif op == "*":\n        result = multiply(a, b)\n    elif op == "/":\n        result = divide(a, b)\n    else:\n        result = "잘못된 연산자입니다"\n    \n    print(f"결과: {result}")\n\n# 실행\ncalculator()\n',
          hints: [
            '각 연산을 별도 함수로 분리',
            '0으로 나누기 예외 처리',
            '함수를 조합해서 프로그램 구성',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '사칙연산 함수 만들기',
              description: '더하기, 빼기, 곱하기, 나누기 함수 4개를 만드세요.',
              difficulty: 'easy',
              hints: ['각 연산을 별도 함수로', '나누기는 0 체크 필요', 'return으로 결과 반환'],
              estimatedMinutes: 4,
              starterCode: '# 사칙연산 함수 4개를 만드세요\ndef add(a, b):\n    # TODO\n    pass\n\ndef subtract(a, b):\n    # TODO\n    pass\n\ndef multiply(a, b):\n    # TODO\n    pass\n\ndef divide(a, b):\n    # TODO: 0으로 나누기 방지\n    pass\n\n# 테스트\nprint(add(10, 3))       # 13\nprint(subtract(10, 3))  # 7\nprint(multiply(10, 3))  # 30\nprint(divide(10, 3))    # 3.333...\nprint(divide(10, 0))    # 에러 메시지\n',
              solution: 'def add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b\n\ndef divide(a, b):\n    if b == 0:\n        return "0으로 나눌 수 없습니다"\n    return a / b\n\nprint(add(10, 3))\nprint(subtract(10, 3))\nprint(multiply(10, 3))\nprint(divide(10, 3))\nprint(divide(10, 0))',
              feedback: {
                perfect: '사칙연산 함수를 완벽하게 만들었어요!',
                good: '기본 함수들이 잘 작동해요!',
                partial: '나누기에서 0 체크를 추가하세요.',
                wrong: 'return a + b 형태로 각 연산 결과를 반환하세요.'
              }
            },
            {
              id: 'c2',
              title: '온도 변환기',
              description: '섭씨-화씨 양방향 변환 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['화씨 = 섭씨 * 9/5 + 32', '섭씨 = (화씨 - 32) * 5/9', '각 변환을 별도 함수로'],
              estimatedMinutes: 4,
              starterCode: '# 온도 변환 함수\ndef celsius_to_fahrenheit(celsius):\n    """섭씨를 화씨로 변환"""\n    # TODO\n    pass\n\ndef fahrenheit_to_celsius(fahrenheit):\n    """화씨를 섭씨로 변환"""\n    # TODO\n    pass\n\nprint(celsius_to_fahrenheit(100))  # 212.0\nprint(fahrenheit_to_celsius(32))   # 0.0\n',
              solution: 'def celsius_to_fahrenheit(celsius):\n    """섭씨를 화씨로 변환"""\n    return celsius * 9/5 + 32\n\ndef fahrenheit_to_celsius(fahrenheit):\n    """화씨를 섭씨로 변환"""\n    return (fahrenheit - 32) * 5/9\n\nprint(celsius_to_fahrenheit(100))\nprint(fahrenheit_to_celsius(32))',
              feedback: {
                perfect: '온도 변환 함수가 완벽해요!',
                good: '변환 공식이 정확해요!',
                partial: '공식을 확인하세요: F = C * 9/5 + 32',
                wrong: 'return celsius * 9/5 + 32 형태로 공식을 적용하세요.'
              }
            },
            {
              id: 'c3',
              title: '리스트 통계 함수 모음',
              description: '리스트의 합계, 평균, 최대, 최소를 계산하는 함수들을 만드세요.',
              difficulty: 'medium',
              hints: ['각 통계를 별도 함수로 분리', '빈 리스트 체크를 포함', 'sum(), len() 내장 함수 활용'],
              estimatedMinutes: 6,
              starterCode: '# 리스트 통계 함수들\ndef my_sum(numbers):\n    # TODO\n    pass\n\ndef my_average(numbers):\n    # TODO: 빈 리스트면 0 반환\n    pass\n\ndef my_max(numbers):\n    # TODO\n    pass\n\ndef my_min(numbers):\n    # TODO\n    pass\n\ndata = [85, 92, 78, 95, 88]\nprint(f"합계: {my_sum(data)}")\nprint(f"평균: {my_average(data)}")\nprint(f"최고: {my_max(data)}")\nprint(f"최저: {my_min(data)}")\n',
              solution: 'def my_sum(numbers):\n    total = 0\n    for n in numbers:\n        total += n\n    return total\n\ndef my_average(numbers):\n    if not numbers:\n        return 0\n    return my_sum(numbers) / len(numbers)\n\ndef my_max(numbers):\n    result = numbers[0]\n    for n in numbers:\n        if n > result:\n            result = n\n    return result\n\ndef my_min(numbers):\n    result = numbers[0]\n    for n in numbers:\n        if n < result:\n            result = n\n    return result\n\ndata = [85, 92, 78, 95, 88]\nprint(f"합계: {my_sum(data)}")\nprint(f"평균: {my_average(data)}")\nprint(f"최고: {my_max(data)}")\nprint(f"최저: {my_min(data)}")',
              feedback: {
                perfect: '통계 함수들을 완벽하게 구현했어요!',
                good: '각 함수가 잘 작동해요!',
                partial: '빈 리스트 체크를 추가하세요.',
                wrong: '반복문으로 합계를 구하고 len()으로 나눠 평균을 구하세요.'
              }
            },
            {
              id: 'c4',
              title: '비밀번호 검증기',
              description: '비밀번호 강도를 검사하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['길이, 숫자, 대문자, 특수문자 체크', '각 조건을 별도 함수로 분리', '종합 점수를 반환'],
              estimatedMinutes: 8,
              starterCode: '# 비밀번호 검증 함수\ndef check_length(pw):\n    """8자 이상이면 True"""\n    # TODO\n    pass\n\ndef has_number(pw):\n    """숫자가 포함되면 True"""\n    # TODO\n    pass\n\ndef check_password(pw):\n    """비밀번호 강도를 평가합니다.\n    Returns: "강함", "보통", "약함""""\n    score = 0\n    if check_length(pw): score += 1\n    if has_number(pw): score += 1\n    # TODO: score에 따라 강도 반환\n    pass\n\nprint(check_password("abc"))         # 약함\nprint(check_password("abcdefgh"))    # 보통\nprint(check_password("abc12345"))    # 강함\n',
              solution: 'def check_length(pw):\n    """8자 이상이면 True"""\n    return len(pw) >= 8\n\ndef has_number(pw):\n    """숫자가 포함되면 True"""\n    for ch in pw:\n        if ch.isdigit():\n            return True\n    return False\n\ndef check_password(pw):\n    """비밀번호 강도를 평가합니다."""\n    score = 0\n    if check_length(pw): score += 1\n    if has_number(pw): score += 1\n    if score >= 2: return "강함"\n    elif score >= 1: return "보통"\n    else: return "약함"\n\nprint(check_password("abc"))\nprint(check_password("abcdefgh"))\nprint(check_password("abc12345"))',
              feedback: {
                perfect: '함수 분리와 조합이 완벽해요!',
                good: '비밀번호 검증이 잘 돼요!',
                partial: 'score에 따른 반환 로직을 완성하세요.',
                wrong: '각 검사 함수를 만들고 점수를 합산해 강도를 판정하세요.'
              }
            },
            {
              id: 'c5',
              title: '미니 계산기 프로그램',
              description: '함수를 조합한 완전한 계산기를 만드세요.',
              difficulty: 'hard',
              hints: ['각 연산 함수 + 메인 루프', '입력 검증도 함수로 분리', 'while 루프로 반복 실행'],
              estimatedMinutes: 10,
              starterCode: '# 미니 계산기\ndef add(a, b): return a + b\ndef sub(a, b): return a - b\ndef mul(a, b): return a * b\ndef div(a, b):\n    if b == 0: return "오류: 0으로 나눌 수 없음"\n    return a / b\n\ndef get_number(prompt):\n    """안전하게 숫자 입력받기"""\n    # TODO: try-except로 숫자 입력\n    pass\n\ndef calculator():\n    """계산기 메인 함수"""\n    # TODO: 반복 루프, 연산자 선택, 결과 출력\n    pass\n\ncalculator()\n',
              solution: 'def add(a, b): return a + b\ndef sub(a, b): return a - b\ndef mul(a, b): return a * b\ndef div(a, b):\n    if b == 0: return "오류: 0으로 나눌 수 없음"\n    return a / b\n\ndef get_number(prompt):\n    while True:\n        try:\n            return float(input(prompt))\n        except ValueError:\n            print("숫자를 입력하세요.")\n\ndef calculator():\n    ops = {"+": add, "-": sub, "*": mul, "/": div}\n    while True:\n        print("\n=== 계산기 (종료: q) ===")\n        a = input("첫 번째 숫자 (q=종료): ")\n        if a == "q": break\n        try:\n            a = float(a)\n        except ValueError:\n            print("숫자를 입력하세요.")\n            continue\n        op = input("연산자 (+,-,*,/): ")\n        if op not in ops:\n            print("잘못된 연산자")\n            continue\n        b = get_number("두 번째 숫자: ")\n        print(f"결과: {ops[op](a, b)}")\n\ncalculator()',
              feedback: {
                perfect: '함수를 조합한 완전한 프로그램이에요!',
                good: '계산기가 잘 작동해요!',
                partial: '반복 루프와 입력 검증을 추가하세요.',
                wrong: 'while True 루프로 메뉴를 반복하고 연산 함수를 호출하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-27',
        title: 'Week 27 퀴즈',
        questions: [
          {
            id: 'q27-1',
            question: '함수를 정의하는 키워드는?',
            options: ['function', 'def', 'func', 'define'],
            correctAnswer: 1,
            explanation: 'Python에서 함수는 def 키워드로 정의해요. def 함수이름(): 형식으로 작성합니다. function은 JavaScript에서 사용해요!'
          },
          {
            id: 'q27-2',
            question: '함수가 값을 반환하는 키워드는?',
            options: ['give', 'send', 'return', 'output'],
            correctAnswer: 2,
            explanation: 'return 키워드로 값을 반환해요. return이 없으면 함수는 None을 반환합니다. return 값을 만나면 함수가 즉시 종료돼요!'
          },
          {
            id: 'q27-3',
            question: 'lambda a, b: a + b 의 의미는?',
            options: ['a와 b를 출력', 'a + b를 반환하는 함수', '변수 선언', '에러'],
            correctAnswer: 1,
            explanation: 'lambda는 익명 함수(이름 없는 함수)를 만들어요. lambda a, b: a + b는 def add(a, b): return a + b와 같은 기능을 한 줄로 표현한 것입니다!'
          },
          {
            id: 'q27-4',
            question: 'def func(a, b=10): 에서 b=10의 의미는?',
            options: ['b에 10 할당', 'b의 기본값은 10', 'b는 10만 가능', 'b와 10 비교'],
            correctAnswer: 1,
            explanation: 'b=10은 기본값(default parameter)이에요. func(5)처럼 b를 안 주면 b=10이 자동으로 사용되고, func(5, 20)처럼 주면 20이 사용됩니다!'
          },
          {
            id: 'q27-5',
            question: '함수 안에서 만든 변수의 범위는?',
            options: ['전역', '지역', '모듈', '클래스'],
            correctAnswer: 1,
            explanation: '함수 안에서 만든 변수는 지역 변수(local variable)예요. 함수 밖에서는 접근할 수 없고, 함수가 끝나면 사라져요!'
          },
        ],
      },
    },

    // Week 28: 모듈과 파일 I/O
    {
      id: 'week-28',
      number: 28,
      title: '모듈과 파일 처리',
      description: '외부 코드를 가져오고 파일을 읽고 써요',
      missions: [
        {
          id: '4-28-1',
          title: '모듈이란?',
          description: '다른 사람이 만든 코드를 가져와 써요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '모듈 개념',
          cstaStandard: '1B-AP-16',
          learningObjectives: [
            '모듈이 재사용 가능한 코드 묶음임을 이해한다',
            'import 문을 사용하여 모듈을 가져올 수 있다',
            '표준 라이브러리와 외부 패키지의 차이를 설명할 수 있다'
          ],
          realWorldExample: '레고 블록처럼, 다른 사람이 만든 모듈(블록)을 가져와서 나만의 프로그램을 빠르게 만들 수 있어요!',
          conceptCards: [
            {
              title: '모듈',
              description: '함수와 변수가 담긴 .py 파일',
              icon: '📦',
              example: 'import math\nmath.pi'
            },
            {
              title: '표준 라이브러리',
              description: 'Python에 기본으로 포함된 모듈들',
              icon: '📚',
              example: 'math, random, datetime, os 등'
            },
            {
              title: '코드 재사용',
              description: '바퀴를 다시 발명하지 않아도 돼요',
              icon: '♻️',
              example: 'import로 가져오면 바로 사용 가능'
            }
          ],
          hints: [
            '💡 힌트 1: 모듈은 함수와 변수가 담긴 파이썬 파일(.py)이에요',
            '💡 힌트 2: import 키워드로 모듈을 가져와서 사용해요',
            '💡 힌트 3: 바퀴를 다시 발명하지 않아도 돼요 - 이미 만들어진 것 활용!'
          ],
                    challenges: [
          {
            id: 'c1',
            title: 'import로 모듈 가져오기',
            description: 'math 모듈을 import해서 사용하세요',
            difficulty: 'easy',
            hints: ['import 모듈이름으로 가져와요', '모듈.함수()로 사용해요'],
            estimatedMinutes: 3,
            starterCode: 'import ____\n\nresult = math.sqrt(16)\nprint(result)  # 4.0',
            solution: 'import math\n\nresult = math.sqrt(16)\nprint(result)',
            feedback: {
              perfect: 'import를 완벽하게 이해했어요!',
              good: '모듈 가져오기를 잘 했어요!',
              partial: 'import math를 작성하세요.',
              wrong: 'import 뒤에 모듈 이름을 쓰세요.'
            }
          },
          {
            id: 'c2',
            title: 'from import 사용',
            description: '모듈에서 특정 함수만 가져오세요',
            difficulty: 'easy',
            hints: ['from 모듈 import 함수', '모듈이름 없이 바로 사용 가능'],
            estimatedMinutes: 5,
            starterCode: 'from random import ____\n\ndice = randint(1, 6)\nprint(f"주사위: {dice}")',
            solution: 'from random import randint\n\ndice = randint(1, 6)\nprint(f"주사위: {dice}")',
            feedback: {
              perfect: 'from import를 완벽하게 사용했어요!',
              good: '선택적 가져오기를 잘 이해했어요!',
              partial: 'from random import randint를 작성하세요.',
              wrong: 'from 모듈 import 함수이름 형태에요.'
            }
          },
          {
            id: 'c3',
            title: 'as로 별명 붙이기',
            description: 'import as로 모듈에 별명을 부여하세요',
            difficulty: 'medium',
            hints: ['import 모듈 as 별명', '긴 이름을 짧게 줄일 수 있어요'],
            estimatedMinutes: 7,
            starterCode: 'import datetime as ____\n\nnow = dt.datetime.now()\nprint(f"현재: {now.year}년 {now.month}월")',
            solution: 'import datetime as dt\n\nnow = dt.datetime.now()\nprint(f"현재: {now.year}년 {now.month}월")',
            feedback: {
              perfect: '별명 사용을 완벽하게 이해했어요!',
              good: 'as 키워드를 잘 활용했어요!',
              partial: 'import datetime as dt로 작성하세요.',
              wrong: 'as 뒤에 원하는 별명을 쓰세요.'
            }
          },
          {
            id: 'c4',
            title: '여러 모듈 조합하기',
            description: 'math와 random 모듈을 함께 사용하세요',
            difficulty: 'medium',
            hints: ['각 모듈을 별도로 import', '필요한 함수를 조합하세요'],
            estimatedMinutes: 10,
            starterCode: 'import math\nimport random\n\nnums = [random.randint(1, 100) for _ in range(5)]\nprint("숫자:", nums)\navg = math.fsum(nums) / len(nums)\nprint(f"평균: {avg:.1f}")',
            solution: 'import math\nimport random\n\nnums = [random.randint(1, 100) for _ in range(5)]\nprint("숫자:", nums)\navg = math.fsum(nums) / len(nums)\nprint(f"평균: {avg:.1f}")',
            feedback: {
              perfect: '모듈 조합을 완벽하게 했어요!',
              good: '여러 모듈을 잘 활용했어요!',
              partial: 'math와 random을 각각 import하세요.',
              wrong: '모듈이름.함수()로 호출하세요.'
            }
          },
          {
            id: 'c5',
            title: 'pip와 외부 모듈',
            description: 'pip으로 외부 패키지를 설치하는 방법을 이해하세요',
            difficulty: 'hard',
            hints: ['pip install 패키지이름', '설치 후 import로 사용'],
            estimatedMinutes: 15,
            starterCode: '# pip install requests  (터미널에서 실행)\n# import requests\n# response = requests.get("https://api.example.com")\n# print(response.status_code)\n\n# 연습: 내장 모듈만 사용\nimport json\nimport urllib.request\n\ndata = json.dumps({"name": "test"})\nprint(f"JSON: {data}")\nprint(f"타입: {type(data)}")',
            solution: 'import json\nimport urllib.request\n\ndata = json.dumps({"name": "test"})\nprint(f"JSON: {data}")\nprint(f"타입: {type(data)}")',
            feedback: {
              perfect: '외부 모듈 개념을 완벽하게 이해했어요!',
              good: 'pip 사용법을 잘 파악했어요!',
              partial: 'pip install로 설치 후 import로 사용하세요.',
              wrong: 'pip은 Python 패키지 관리자입니다.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-2',
          title: 'import 사용법',
          description: '다양한 import 방법을 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'import 문법',
          conceptExplanation: `
import는 모듈을 불러오는 기본 문법입니다.
import module, from module import function, import module as alias 등 다양한 형태가 있습니다.
필요한 것만 가져와 네임스페이스를 깔끔하게 유지하는 것이 좋습니다.
예: import math, from datetime import datetime, import pandas as pd 등 상황에 맞게 선택합니다.
`,
          starterCode: '# 방법 1: 전체 import\nimport math\nprint(math.pi)        # 3.14159...\nprint(math.sqrt(16))  # 4.0\n\n# 방법 2: 특정 함수만 import\nfrom random import randint, choice\nprint(randint(1, 10))           # 1~10 랜덤\nprint(choice(["가위", "바위", "보"]))  # 하나 선택\n\n# 방법 3: 별명 붙이기\nimport datetime as dt\ntoday = dt.date.today()\nprint(today)\n\n# 방법 4: 모두 import (비권장)\n# from math import *\n',
          hints: [
            'import 모듈: 전체 가져오기',
            'from 모듈 import 함수: 특정 함수만',
            'as 별명: 짧은 이름으로 사용',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'import 기본 사용',
              description: 'math 모듈을 import하고 함수를 사용하세요.',
              difficulty: 'easy',
              hints: ['import math 으로 가져와요', 'math.함수이름()으로 사용', 'math.sqrt(), math.pi 등'],
              estimatedMinutes: 3,
              starterCode: '# math 모듈 사용하기\n# TODO: math 모듈을 import하세요\n\n# TODO: 원의 넓이를 구하세요 (반지름 5)\n# 공식: pi * r^2\nradius = 5\n# area = ???\n# print(f"원의 넓이: {area:.2f}")\n',
              solution: 'import math\n\nradius = 5\narea = math.pi * radius ** 2\nprint(f"원의 넓이: {area:.2f}")',
              feedback: {
                perfect: 'import와 모듈 사용을 정확히 이해했어요!',
                good: 'math 모듈을 잘 사용했어요!',
                partial: 'import math를 먼저 작성하세요.',
                wrong: 'import math 후 math.pi로 원주율을 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: 'from import 사용',
              description: 'from 모듈 import 함수 형태를 사용하세요.',
              difficulty: 'easy',
              hints: ['from random import randint 형태', '함수를 직접 사용 가능 (모듈명 불필요)', '필요한 것만 가져오기'],
              estimatedMinutes: 3,
              starterCode: '# from import 사용\n# TODO: random 모듈에서 randint, choice만 가져오세요\n\n# 1~6 주사위\nprint(f"주사위: {randint(1, 6)}")\n\n# 메뉴 추첨\nmenus = ["짜장면", "짬뽕", "볶음밥", "탕수육"]\nprint(f"오늘의 메뉴: {choice(menus)}")\n',
              solution: 'from random import randint, choice\n\nprint(f"주사위: {randint(1, 6)}")\n\nmenus = ["짜장면", "짬뽕", "볶음밥", "탕수육"]\nprint(f"오늘의 메뉴: {choice(menus)}")',
              feedback: {
                perfect: 'from import를 정확히 사용했어요!',
                good: '필요한 함수만 잘 가져왔어요!',
                partial: 'from random import randint, choice 형태로 작성하세요.',
                wrong: 'from 모듈 import 함수1, 함수2 형태를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: 'as 별명 사용',
              description: 'import as로 모듈에 별명을 붙이세요.',
              difficulty: 'easy',
              hints: ['import datetime as dt 형태', '긴 모듈명을 짧게 사용', '별명으로 접근: dt.date.today()'],
              estimatedMinutes: 4,
              starterCode: '# 별명 사용\n# TODO: datetime 모듈을 dt라는 별명으로 가져오세요\n\n# 오늘 날짜\ntoday = dt.date.today()\nprint(f"오늘: {today}")\n\n# 현재 시간\nnow = dt.datetime.now()\nprint(f"지금: {now.strftime("%H시 %M분")}")\n',
              solution: 'import datetime as dt\n\ntoday = dt.date.today()\nprint(f"오늘: {today}")\n\nnow = dt.datetime.now()\nprint(f"지금: {now.strftime("%H시 %M분")}")',
              feedback: {
                perfect: 'as 별명 사용을 정확히 이해했어요!',
                good: '별명을 잘 활용했어요!',
                partial: 'import datetime as dt 를 작성하세요.',
                wrong: 'import 모듈 as 별명 형태로 짧은 이름을 지정하세요.'
              }
            },
            {
              id: 'c4',
              title: '여러 모듈 활용하기',
              description: 'math, random, datetime을 함께 사용하세요.',
              difficulty: 'medium',
              hints: ['각 모듈을 import', '여러 모듈의 기능을 조합', '각 모듈의 대표 함수를 사용'],
              estimatedMinutes: 6,
              starterCode: '# 여러 모듈 활용\nimport math\nimport random\nfrom datetime import datetime\n\n# TODO: 1~100 사이 랜덤 숫자의 제곱근 구하기\nnum = random.randint(1, 100)\n# sqrt_val = ???\n# print(f"{num}의 제곱근: {sqrt_val:.2f}")\n\n# TODO: 현재 날짜와 시간 출력\n# now = ???\n# print(f"현재: {now.strftime("%Y-%m-%d %H:%M")}")\n',
              solution: 'import math\nimport random\nfrom datetime import datetime\n\nnum = random.randint(1, 100)\nsqrt_val = math.sqrt(num)\nprint(f"{num}의 제곱근: {sqrt_val:.2f}")\n\nnow = datetime.now()\nprint(f"현재: {now.strftime("%Y-%m-%d %H:%M")}")',
              feedback: {
                perfect: '여러 모듈을 완벽하게 조합했어요!',
                good: '모듈 조합이 잘 돼요!',
                partial: 'math.sqrt()와 datetime.now()를 사용하세요.',
                wrong: 'math.sqrt(num)으로 제곱근, datetime.now()로 현재 시간을 구하세요.'
              }
            },
            {
              id: 'c5',
              title: '모듈로 로또 번호 생성기',
              description: 'random 모듈로 로또 번호를 생성하세요.',
              difficulty: 'hard',
              hints: ['random.sample()로 중복 없는 번호', 'sorted()로 오름차순 정렬', '1~45 중 6개 선택'],
              estimatedMinutes: 7,
              starterCode: 'import random\n\n# TODO: 로또 번호 생성기\n# 1~45 중 중복 없이 6개 선택\n# 오름차순 정렬 후 출력\ndef generate_lotto():\n    # TODO\n    pass\n\n# 5게임 생성\nfor i in range(5):\n    numbers = generate_lotto()\n    print(f"게임 {i+1}: {numbers}")\n',
              solution: 'import random\n\ndef generate_lotto():\n    numbers = random.sample(range(1, 46), 6)\n    return sorted(numbers)\n\nfor i in range(5):\n    numbers = generate_lotto()\n    print(f"게임 {i+1}: {numbers}")',
              feedback: {
                perfect: 'random.sample()을 완벽하게 활용했어요!',
                good: '로또 번호 생성이 잘 돼요!',
                partial: 'random.sample(range(1, 46), 6)을 사용하세요.',
                wrong: 'random.sample(범위, 개수)로 중복 없이 선택하고 sorted()로 정렬하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-3',
          title: '유용한 표준 모듈',
          description: '자주 쓰는 내장 모듈들을 알아봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '표준 라이브러리',
          conceptExplanation: `
파이썬 표준 라이브러리는 설치 없이 바로 사용 가능한 풍부한 모듈 모음입니다.
날짜/시간, 파일/경로, 네트워크, 압축, JSON 등 거의 모든 기능이 준비되어 있습니다.
"배터리 포함(batteries included)" 철학으로 빠른 개발을 지원합니다.
예: datetime(날짜), pathlib(경로), json(데이터), random(난수) 등 실무 필수 모듈들을 제공합니다.
`,
          starterCode: '# math: 수학 함수\nimport math\nprint(math.ceil(3.2))   # 올림: 4\nprint(math.floor(3.8))  # 내림: 3\nprint(math.pow(2, 10))  # 거듭제곱: 1024\n\n# random: 랜덤\nimport random\nprint(random.randint(1, 100))    # 정수 랜덤\nprint(random.random())           # 0~1 실수\nprint(random.shuffle([1,2,3,4])) # 섞기\n\n# datetime: 날짜/시간\nimport datetime\nnow = datetime.datetime.now()\nprint(now.strftime("%Y년 %m월 %d일"))\n\n# os: 운영체제 관련\nimport os\nprint(os.getcwd())  # 현재 디렉토리\n',
          hints: [
            'math: 수학 연산',
            'random: 랜덤 생성',
            'datetime: 날짜와 시간',
            'os: 파일/디렉토리 관리',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'math 모듈 활용',
              description: 'math 모듈의 다양한 함수를 사용하세요.',
              difficulty: 'easy',
              hints: ['math.ceil: 올림, math.floor: 내림', 'math.sqrt: 제곱근', 'math.pi: 원주율'],
              estimatedMinutes: 3,
              starterCode: 'import math\n\n# TODO: 3.7을 올림, 내림하세요\nnum = 3.7\n# ceil_val = ???\n# floor_val = ???\n# print(f"올림: {ceil_val}, 내림: {floor_val}")\n\n# TODO: 144의 제곱근\n# sqrt_val = ???\n# print(f"144의 제곱근: {sqrt_val}")\n',
              solution: 'import math\n\nnum = 3.7\nceil_val = math.ceil(num)\nfloor_val = math.floor(num)\nprint(f"올림: {ceil_val}, 내림: {floor_val}")\n\nsqrt_val = math.sqrt(144)\nprint(f"144의 제곱근: {sqrt_val}")',
              feedback: {
                perfect: 'math 모듈 함수들을 정확히 사용했어요!',
                good: '올림/내림/제곱근을 잘 활용했어요!',
                partial: 'math.ceil()과 math.floor()를 사용하세요.',
                wrong: 'math.ceil(3.7) -> 4, math.floor(3.7) -> 3, math.sqrt(144) -> 12'
              }
            },
            {
              id: 'c2',
              title: 'random 모듈 활용',
              description: 'random 모듈의 다양한 함수를 사용하세요.',
              difficulty: 'easy',
              hints: ['randint: 정수 랜덤', 'choice: 하나 선택', 'shuffle: 섞기'],
              estimatedMinutes: 4,
              starterCode: 'import random\n\n# TODO: 1~100 사이 랜덤 숫자\nrand_num = None  # ???\nprint(f"랜덤 숫자: {rand_num}")\n\n# TODO: 리스트에서 하나 선택\ncolors = ["빨강", "파랑", "초록", "노랑"]\npicked = None  # ???\nprint(f"선택된 색: {picked}")\n\n# TODO: 리스트 섞기\nnumbers = [1, 2, 3, 4, 5]\n# ???\nprint(f"섞은 결과: {numbers}")\n',
              solution: 'import random\n\nrand_num = random.randint(1, 100)\nprint(f"랜덤 숫자: {rand_num}")\n\ncolors = ["빨강", "파랑", "초록", "노랑"]\npicked = random.choice(colors)\nprint(f"선택된 색: {picked}")\n\nnumbers = [1, 2, 3, 4, 5]\nrandom.shuffle(numbers)\nprint(f"섞은 결과: {numbers}")',
              feedback: {
                perfect: 'random 모듈을 완벽하게 활용했어요!',
                good: '랜덤 함수 사용이 좋아요!',
                partial: 'random.choice()와 random.shuffle()도 사용하세요.',
                wrong: 'random.randint(1,100), random.choice(리스트), random.shuffle(리스트)'
              }
            },
            {
              id: 'c3',
              title: 'datetime 모듈 활용',
              description: '날짜와 시간을 다루는 함수를 사용하세요.',
              difficulty: 'medium',
              hints: ['datetime.now(): 현재 날짜/시간', 'strftime(): 형식 지정 출력', 'timedelta: 날짜 계산'],
              estimatedMinutes: 5,
              starterCode: 'from datetime import datetime, timedelta\n\n# TODO: 현재 날짜와 시간 출력\nnow = datetime.now()\nprint(f"현재: {now.strftime("%Y-%m-%d %H:%M:%S")}")\n\n# TODO: 7일 후 날짜 계산\n# week_later = ???\n# print(f"7일 후: {week_later.strftime("%Y-%m-%d")}")\n\n# TODO: 생일까지 남은 일수 계산\n# birthday = datetime(2026, 12, 25)\n# remaining = ???\n# print(f"크리스마스까지: {remaining.days}일")\n',
              solution: 'from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(f"현재: {now.strftime("%Y-%m-%d %H:%M:%S")}")\n\nweek_later = now + timedelta(days=7)\nprint(f"7일 후: {week_later.strftime("%Y-%m-%d")}")\n\nbirthday = datetime(2026, 12, 25)\nremaining = birthday - now\nprint(f"크리스마스까지: {remaining.days}일")',
              feedback: {
                perfect: 'datetime 모듈을 완벽하게 활용했어요!',
                good: '날짜 계산이 정확해요!',
                partial: 'timedelta(days=7)로 날짜를 더하세요.',
                wrong: 'now + timedelta(days=7)로 7일 후를 구하고, 뺄셈으로 남은 일수를 계산하세요.'
              }
            },
            {
              id: 'c4',
              title: 'os 모듈 활용',
              description: 'os 모듈로 파일과 폴더 정보를 확인하세요.',
              difficulty: 'medium',
              hints: ['os.getcwd(): 현재 폴더', 'os.listdir(): 파일 목록', 'os.path.exists(): 존재 확인'],
              estimatedMinutes: 6,
              starterCode: 'import os\n\n# TODO: 현재 작업 폴더 출력\ncurrent = os.getcwd()\nprint(f"현재 폴더: {current}")\n\n# TODO: 현재 폴더의 파일 목록 출력 (첫 5개만)\nfiles = os.listdir(".")\nfor f in files[:5]:\n    print(f"  {f}")\n\n# TODO: 특정 파일 존재 확인\n# filename = "test.txt"\n# exists = ???\n# print(f"{filename} 존재: {exists}")\n',
              solution: 'import os\n\ncurrent = os.getcwd()\nprint(f"현재 폴더: {current}")\n\nfiles = os.listdir(".")\nfor f in files[:5]:\n    print(f"  {f}")\n\nfilename = "test.txt"\nexists = os.path.exists(filename)\nprint(f"{filename} 존재: {exists}")',
              feedback: {
                perfect: 'os 모듈을 완벽하게 활용했어요!',
                good: '파일 시스템 작업이 잘 돼요!',
                partial: 'os.path.exists()로 파일 존재를 확인하세요.',
                wrong: 'os.getcwd(), os.listdir(), os.path.exists()를 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '종합: D-Day 계산기',
              description: '여러 모듈을 조합한 D-Day 계산기를 만드세요.',
              difficulty: 'hard',
              hints: ['datetime으로 날짜 계산', 'input으로 날짜 입력', '예외 처리 포함'],
              estimatedMinutes: 8,
              starterCode: 'from datetime import datetime\n\ndef calculate_dday():\n    """D-Day 계산기"""\n    # TODO: 이벤트 이름과 날짜를 입력받아\n    # 오늘로부터 며칠 남았는지/지났는지 출력\n    pass\n\ncalculate_dday()\n',
              solution: 'from datetime import datetime\n\ndef calculate_dday():\n    event = input("이벤트 이름: ")\n    date_str = input("날짜 (YYYY-MM-DD): ")\n    try:\n        target = datetime.strptime(date_str, "%Y-%m-%d")\n        today = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)\n        diff = (target - today).days\n        if diff > 0:\n            print(f"{event}까지 D-{diff}")\n        elif diff == 0:\n            print(f"{event}은 바로 오늘!")\n        else:\n            print(f"{event}은 {abs(diff)}일 전이었어요")\n    except ValueError:\n        print("올바른 날짜 형식을 입력하세요 (YYYY-MM-DD)")\n\ncalculate_dday()',
              feedback: {
                perfect: '여러 모듈을 조합한 완벽한 프로그램이에요!',
                good: 'D-Day 계산이 잘 돼요!',
                partial: '날짜 파싱과 차이 계산을 완성하세요.',
                wrong: 'datetime.strptime()으로 문자열을 날짜로 변환하고 뺄셈으로 차이를 구하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-4',
          title: '파일 읽기',
          description: '텍스트 파일을 읽어봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '파일 읽기',
          conceptExplanation: `
파일 읽기는 저장된 데이터를 프로그램으로 가져오는 작업입니다.
open()으로 파일을 열고 read(), readline(), readlines()로 내용을 읽습니다.
with문을 사용하면 파일이 자동으로 닫혀 안전합니다.
예: 고객 데이터 로드, 게임 세이브 파일 불러오기, 로그 분석, 설정 파일 파싱 등에 활용됩니다.
`,
          starterCode: '# 파일 쓰기 (먼저 만들기)\nwith open("test.txt", "w", encoding="utf-8") as f:\n    f.write("첫 번째 줄\\n")\n    f.write("두 번째 줄\\n")\n    f.write("세 번째 줄\\n")\n\n# 파일 읽기 - 전체\nwith open("test.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    print("=== 전체 읽기 ===")\n    print(content)\n\n# 파일 읽기 - 한 줄씩\nwith open("test.txt", "r", encoding="utf-8") as f:\n    print("=== 한 줄씩 ===")\n    for line in f:\n        print(line.strip())  # 줄바꿈 제거\n\n# 파일 읽기 - 모든 줄 리스트로\nwith open("test.txt", "r", encoding="utf-8") as f:\n    lines = f.readlines()\n    print(f"총 {len(lines)}줄")\n',
          hints: [
            'with open(파일, 모드) as f: 형식',
            '"r" = 읽기, "w" = 쓰기, "a" = 추가',
            'with 문은 자동으로 파일을 닫아줘요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '파일 전체 읽기',
              description: 'with open으로 파일을 읽어보세요.',
              difficulty: 'easy',
              hints: ['with open(파일, "r") as f:', 'f.read()로 전체 내용 읽기', 'encoding="utf-8" 추가'],
              estimatedMinutes: 3,
              starterCode: '# 먼저 테스트 파일 생성\nwith open("sample.txt", "w", encoding="utf-8") as f:\n    f.write("Hello Python!\n")\n    f.write("파일 읽기 연습\n")\n    f.write("재미있다!\n")\n\n# TODO: sample.txt 파일을 읽어서 출력하세요\n# with open(???) as f:\n#     content = f.read()\n#     print(content)\n',
              solution: 'with open("sample.txt", "w", encoding="utf-8") as f:\n    f.write("Hello Python!\n")\n    f.write("파일 읽기 연습\n")\n    f.write("재미있다!\n")\n\nwith open("sample.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    print(content)',
              feedback: {
                perfect: '파일 읽기를 정확히 이해했어요!',
                good: '파일 내용을 잘 읽었어요!',
                partial: 'with open("sample.txt", "r") as f: 형태를 사용하세요.',
                wrong: 'with open(파일, "r", encoding="utf-8") as f: 후 f.read()를 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '한 줄씩 읽기',
              description: 'for 반복문으로 파일을 한 줄씩 읽으세요.',
              difficulty: 'easy',
              hints: ['for line in f: 로 반복', 'line.strip()으로 줄바꿈 제거', '줄 번호도 함께 출력'],
              estimatedMinutes: 4,
              starterCode: '# 테스트 파일 생성\nwith open("names.txt", "w", encoding="utf-8") as f:\n    f.write("철수\n영희\n민수\n지은\n")\n\n# TODO: 한 줄씩 읽어서 번호와 함께 출력\n# 출력: 1. 철수, 2. 영희, ...\n',
              solution: 'with open("names.txt", "w", encoding="utf-8") as f:\n    f.write("철수\n영희\n민수\n지은\n")\n\nwith open("names.txt", "r", encoding="utf-8") as f:\n    for i, line in enumerate(f, 1):\n        print(f"{i}. {line.strip()}")',
              feedback: {
                perfect: '한 줄씩 읽기를 완벽히 이해했어요!',
                good: '줄 번호와 내용 출력이 잘 돼요!',
                partial: 'for line in f: 로 반복하고 strip()을 사용하세요.',
                wrong: 'for line in f: 로 한 줄씩 읽고 line.strip()으로 줄바꿈을 제거하세요.'
              }
            },
            {
              id: 'c3',
              title: 'readlines로 리스트 만들기',
              description: 'readlines()로 모든 줄을 리스트로 읽으세요.',
              difficulty: 'easy',
              hints: ['f.readlines()는 줄 리스트 반환', '각 줄에 \n이 포함됨', 'strip()으로 정리'],
              estimatedMinutes: 5,
              starterCode: '# 테스트 파일 생성\nwith open("scores.txt", "w", encoding="utf-8") as f:\n    f.write("85\n92\n78\n95\n88\n")\n\n# TODO: readlines()로 모든 줄을 리스트로 읽기\n# 각 줄을 정수로 변환하여 평균 계산\n',
              solution: 'with open("scores.txt", "w", encoding="utf-8") as f:\n    f.write("85\n92\n78\n95\n88\n")\n\nwith open("scores.txt", "r", encoding="utf-8") as f:\n    lines = f.readlines()\n    scores = [int(line.strip()) for line in lines if line.strip()]\n    avg = sum(scores) / len(scores)\n    print(f"점수: {scores}")\n    print(f"평균: {avg:.1f}")',
              feedback: {
                perfect: 'readlines()와 데이터 변환을 완벽히 했어요!',
                good: '파일 데이터 처리가 잘 돼요!',
                partial: 'readlines() 후 int()로 변환하세요.',
                wrong: 'f.readlines()로 리스트를 받고, int(line.strip())으로 숫자 변환하세요.'
              }
            },
            {
              id: 'c4',
              title: '파일에서 특정 단어 찾기',
              description: '파일에서 특정 단어가 포함된 줄을 찾으세요.',
              difficulty: 'medium',
              hints: ['if 단어 in line: 으로 검색', '줄 번호와 내용을 함께 출력', '대소문자 무시: lower()'],
              estimatedMinutes: 6,
              starterCode: '# 테스트 파일 생성\nwith open("log.txt", "w", encoding="utf-8") as f:\n    f.write("INFO: 프로그램 시작\n")\n    f.write("ERROR: 파일을 찾을 수 없음\n")\n    f.write("INFO: 데이터 로딩 완료\n")\n    f.write("ERROR: 네트워크 연결 실패\n")\n    f.write("INFO: 프로그램 종료\n")\n\n# TODO: "ERROR"가 포함된 줄만 출력하세요\n',
              solution: 'with open("log.txt", "w", encoding="utf-8") as f:\n    f.write("INFO: 프로그램 시작\n")\n    f.write("ERROR: 파일을 찾을 수 없음\n")\n    f.write("INFO: 데이터 로딩 완료\n")\n    f.write("ERROR: 네트워크 연결 실패\n")\n    f.write("INFO: 프로그램 종료\n")\n\nwith open("log.txt", "r", encoding="utf-8") as f:\n    for i, line in enumerate(f, 1):\n        if "ERROR" in line:\n            print(f"[{i}] {line.strip()}")',
              feedback: {
                perfect: '파일 검색을 완벽하게 구현했어요!',
                good: 'ERROR 줄을 잘 찾았어요!',
                partial: 'if "ERROR" in line: 으로 필터링하세요.',
                wrong: 'for line in f: 로 반복하며 "ERROR" in line 조건을 확인하세요.'
              }
            },
            {
              id: 'c5',
              title: '파일 단어 수 세기',
              description: '파일의 줄 수, 단어 수, 글자 수를 세세요.',
              difficulty: 'hard',
              hints: ['줄 수: len(lines)', '단어 수: split()으로 분리 후 개수', '글자 수: len(content)'],
              estimatedMinutes: 7,
              starterCode: '# 테스트 파일 생성\nwith open("essay.txt", "w", encoding="utf-8") as f:\n    f.write("파이썬은 배우기 쉽고 강력한 프로그래밍 언어입니다.\n")\n    f.write("많은 사람들이 파이썬으로 프로그래밍을 시작합니다.\n")\n    f.write("파이썬으로 웹, 데이터 분석, AI 등을 할 수 있습니다.\n")\n\ndef count_file(filename):\n    """파일의 줄 수, 단어 수, 글자 수를 반환"""\n    # TODO\n    pass\n\nlines, words, chars = count_file("essay.txt")\nprint(f"줄 수: {lines}, 단어 수: {words}, 글자 수: {chars}")\n',
              solution: 'with open("essay.txt", "w", encoding="utf-8") as f:\n    f.write("파이썬은 배우기 쉽고 강력한 프로그래밍 언어입니다.\n")\n    f.write("많은 사람들이 파이썬으로 프로그래밍을 시작합니다.\n")\n    f.write("파이썬으로 웹, 데이터 분석, AI 등을 할 수 있습니다.\n")\n\ndef count_file(filename):\n    with open(filename, "r", encoding="utf-8") as f:\n        content = f.read()\n        line_count = content.count("\n")\n        word_count = len(content.split())\n        char_count = len(content.replace("\n", ""))\n    return line_count, word_count, char_count\n\nlines, words, chars = count_file("essay.txt")\nprint(f"줄 수: {lines}, 단어 수: {words}, 글자 수: {chars}")',
              feedback: {
                perfect: '파일 통계를 완벽하게 구현했어요!',
                good: '줄/단어/글자 수를 잘 세요!',
                partial: 'split()으로 단어를 분리하세요.',
                wrong: 'content.split()으로 단어 수, content.count("\n")으로 줄 수를 구하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-5',
          title: '파일 쓰기',
          description: '데이터를 파일에 저장해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '파일 쓰기',
          conceptExplanation: `
파일 쓰기는 프로그램의 데이터를 파일로 저장하는 작업입니다.
write()로 문자열을 쓰고, 'w' 모드는 덮어쓰기, 'a' 모드는 추가하기입니다.
데이터 영속성을 위해 필수적이며, 프로그램 종료 후에도 데이터가 보존됩니다.
예: 게임 점수 저장, 로그 기록, 보고서 생성, 데이터 백업 등에 사용됩니다.
`,
          starterCode: '# 새 파일 만들기 (덮어쓰기)\nwith open("diary.txt", "w", encoding="utf-8") as f:\n    f.write("오늘의 일기\\n")\n    f.write("파이썬 공부를 했다.\\n")\n\n# 기존 파일에 추가\nwith open("diary.txt", "a", encoding="utf-8") as f:\n    f.write("내일도 열심히 하자!\\n")\n\n# 확인\nwith open("diary.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n\n# writelines: 리스트를 한번에 쓰기\ntodos = ["숙제하기\\n", "운동하기\\n", "독서하기\\n"]\nwith open("todo.txt", "w", encoding="utf-8") as f:\n    f.writelines(todos)\n',
          hints: [
            '"w" 모드는 기존 내용을 지움',
            '"a" 모드는 끝에 추가',
            'writelines()로 리스트 한번에 쓰기',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '파일에 텍스트 쓰기',
              description: 'with open으로 파일에 텍스트를 쓰세요.',
              difficulty: 'easy',
              hints: ['"w" 모드로 파일 열기', 'f.write()로 내용 작성', '\n으로 줄바꿈'],
              estimatedMinutes: 3,
              starterCode: '# TODO: "hello.txt" 파일에 3줄을 쓰세요\n# 1. 안녕하세요\n# 2. 파이썬 파일 쓰기 연습\n# 3. 재미있다!\n\n# 확인\nwith open("hello.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n',
              solution: 'with open("hello.txt", "w", encoding="utf-8") as f:\n    f.write("안녕하세요\n")\n    f.write("파이썬 파일 쓰기 연습\n")\n    f.write("재미있다!\n")\n\nwith open("hello.txt", "r", encoding="utf-8") as f:\n    print(f.read())',
              feedback: {
                perfect: '파일 쓰기를 정확히 이해했어요!',
                good: '파일에 내용이 잘 써졌어요!',
                partial: 'with open("hello.txt", "w") as f: 를 사용하세요.',
                wrong: 'with open(파일, "w") as f: 후 f.write("내용\n")으로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '추가 모드(a) 사용',
              description: '"a" 모드로 기존 파일에 내용을 추가하세요.',
              difficulty: 'easy',
              hints: ['"a" 모드는 기존 내용 유지하고 추가', '"w" 모드는 기존 내용을 지움', '일기장처럼 계속 추가할 때 사용'],
              estimatedMinutes: 4,
              starterCode: '# 먼저 파일 생성\nwith open("diary.txt", "w", encoding="utf-8") as f:\n    f.write("1월 1일: 새해 첫날!\n")\n\n# TODO: "a" 모드로 2줄 추가\n# "1월 2일: 코딩 공부"\n# "1월 3일: 친구 만남"\n\n# 확인\nwith open("diary.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n',
              solution: 'with open("diary.txt", "w", encoding="utf-8") as f:\n    f.write("1월 1일: 새해 첫날!\n")\n\nwith open("diary.txt", "a", encoding="utf-8") as f:\n    f.write("1월 2일: 코딩 공부\n")\n    f.write("1월 3일: 친구 만남\n")\n\nwith open("diary.txt", "r", encoding="utf-8") as f:\n    print(f.read())',
              feedback: {
                perfect: '추가 모드를 정확히 이해했어요!',
                good: '기존 내용이 유지되면서 추가됐어요!',
                partial: '"a" 모드를 사용하세요.',
                wrong: 'with open(파일, "a") as f: 로 추가 모드를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: 'writelines 사용',
              description: '리스트의 내용을 한번에 파일에 쓰세요.',
              difficulty: 'easy',
              hints: ['f.writelines(리스트)로 한번에 쓰기', '각 항목에 \n을 포함해야 해요', '리스트 컴프리헨션 활용'],
              estimatedMinutes: 5,
              starterCode: '# TODO: 리스트를 파일에 쓰세요\ntodos = ["숙제하기", "운동하기", "독서하기", "코딩하기", "정리하기"]\n\n# writelines 사용 (각 항목에 \n 추가 필요)\n# with open("todo.txt", "w") as f:\n#     ???\n\n# 확인\nwith open("todo.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n',
              solution: 'todos = ["숙제하기", "운동하기", "독서하기", "코딩하기", "정리하기"]\n\nwith open("todo.txt", "w", encoding="utf-8") as f:\n    f.writelines([item + "\n" for item in todos])\n\nwith open("todo.txt", "r", encoding="utf-8") as f:\n    print(f.read())',
              feedback: {
                perfect: 'writelines를 완벽하게 사용했어요!',
                good: '리스트를 파일에 잘 썼어요!',
                partial: '각 항목에 "\n"을 추가하세요.',
                wrong: 'f.writelines([item + "\n" for item in todos]) 형태로 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: '구구단 파일 생성',
              description: '구구단을 파일에 저장하세요.',
              difficulty: 'medium',
              hints: ['2중 반복문으로 구구단 생성', 'f.write()로 각 줄 저장', '단 사이에 빈 줄 추가'],
              estimatedMinutes: 6,
              starterCode: '# TODO: 2~9단 구구단을 파일에 저장\n# gugudan.txt에 보기 좋게 저장하세요\n\n# 확인 (첫 10줄만)\nwith open("gugudan.txt", "r", encoding="utf-8") as f:\n    for i, line in enumerate(f):\n        if i >= 10: break\n        print(line.strip())\n',
              solution: 'with open("gugudan.txt", "w", encoding="utf-8") as f:\n    for dan in range(2, 10):\n        f.write(f"=== {dan}단 ===\n")\n        for i in range(1, 10):\n            f.write(f"{dan} x {i} = {dan * i}\n")\n        f.write("\n")\n\nwith open("gugudan.txt", "r", encoding="utf-8") as f:\n    for i, line in enumerate(f):\n        if i >= 10: break\n        print(line.strip())',
              feedback: {
                perfect: '구구단 파일을 완벽하게 생성했어요!',
                good: '구구단이 보기 좋게 저장됐어요!',
                partial: '2중 반복문으로 모든 단을 생성하세요.',
                wrong: 'for dan in range(2, 10): 안에 for i in range(1, 10): 으로 구구단을 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '성적 보고서 파일 생성',
              description: '학생 성적을 분석하고 보고서 파일을 만드세요.',
              difficulty: 'hard',
              hints: ['성적 데이터를 분석하고 결과를 파일에 저장', '평균, 최고점, 최저점 등 포함', '보기 좋은 형식으로 출력'],
              estimatedMinutes: 8,
              starterCode: '# 성적 데이터\nstudents = {\n    "철수": [85, 90, 78],\n    "영희": [92, 88, 95],\n    "민수": [78, 82, 88]\n}\n\n# TODO: report.txt에 성적 보고서를 작성하세요\n# 각 학생의 평균, 전체 평균, 최고점 학생 등\n',
              solution: 'students = {\n    "철수": [85, 90, 78],\n    "영희": [92, 88, 95],\n    "민수": [78, 82, 88]\n}\n\nwith open("report.txt", "w", encoding="utf-8") as f:\n    f.write("=== 성적 보고서 ===\n\n")\n    all_avgs = []\n    for name, scores in students.items():\n        avg = sum(scores) / len(scores)\n        all_avgs.append((name, avg))\n        f.write(f"{name}: 국어={scores[0]}, 영어={scores[1]}, 수학={scores[2]}, 평균={avg:.1f}\n")\n    \n    total_avg = sum(a for _, a in all_avgs) / len(all_avgs)\n    top = max(all_avgs, key=lambda x: x[1])\n    f.write(f"\n전체 평균: {total_avg:.1f}\n")\n    f.write(f"최고 평균: {top[0]} ({top[1]:.1f})\n")\n\nwith open("report.txt", "r", encoding="utf-8") as f:\n    print(f.read())',
              feedback: {
                perfect: '성적 보고서를 완벽하게 작성했어요!',
                good: '분석 결과가 잘 정리됐어요!',
                partial: '전체 평균과 최고점도 포함하세요.',
                wrong: '각 학생의 평균을 구하고 파일에 형식을 맞춰 작성하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-6',
          title: 'JSON 파일 처리',
          description: 'JSON 형식으로 데이터를 저장해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 15,
          concept: 'json 모듈',
          conceptExplanation: `
JSON은 웹에서 가장 많이 사용되는 데이터 교환 형식입니다.
딕셔너리와 리스트로 구성되어 파이썬과 자연스럽게 호환되며, json 모듈로 쉽게 다룰 수 있습니다.
API 통신, 설정 저장, 데이터 직렬화에 표준으로 사용됩니다.
예: API 응답 처리, 웹 설정 파일, 모바일 앱 데이터 동기화, NoSQL 데이터베이스 등에 사용됩니다.
`,
          starterCode: 'import json\n\n# 딕셔너리를 JSON 파일로 저장\ndata = {\n    "name": "김코딩",\n    "age": 14,\n    "scores": [85, 90, 78],\n    "is_student": True\n}\n\nwith open("data.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\n# JSON 파일 읽기\nwith open("data.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\n    print(loaded)\n    print(loaded["name"])\n    print(loaded["scores"])\n\n# 문자열 변환\njson_str = json.dumps(data, ensure_ascii=False)\nprint(json_str)\n',
          hints: [
            'json.dump(): 딕셔너리 → JSON 파일',
            'json.load(): JSON 파일 → 딕셔너리',
            'ensure_ascii=False: 한글 유지',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'JSON 파일 저장',
              description: '딕셔너리를 JSON 파일로 저장하세요.',
              difficulty: 'easy',
              hints: ['import json', 'json.dump(데이터, 파일)', 'ensure_ascii=False: 한글 유지'],
              estimatedMinutes: 3,
              starterCode: 'import json\n\n# 프로필 데이터\nprofile = {\n    "name": "김코딩",\n    "age": 14,\n    "hobbies": ["코딩", "게임", "독서"]\n}\n\n# TODO: profile.json 파일로 저장하세요\n# ensure_ascii=False, indent=2 옵션 사용\n',
              solution: 'import json\n\nprofile = {\n    "name": "김코딩",\n    "age": 14,\n    "hobbies": ["코딩", "게임", "독서"]\n}\n\nwith open("profile.json", "w", encoding="utf-8") as f:\n    json.dump(profile, f, ensure_ascii=False, indent=2)\n\nprint("저장 완료!")',
              feedback: {
                perfect: 'JSON 저장을 정확히 이해했어요!',
                good: '데이터가 잘 저장됐어요!',
                partial: 'json.dump(profile, f, ensure_ascii=False)를 사용하세요.',
                wrong: 'json.dump(딕셔너리, 파일객체, ensure_ascii=False, indent=2)'
              }
            },
            {
              id: 'c2',
              title: 'JSON 파일 읽기',
              description: 'JSON 파일을 읽어 딕셔너리로 변환하세요.',
              difficulty: 'easy',
              hints: ['json.load(파일객체)로 읽기', '반환값은 딕셔너리/리스트', '키로 값에 접근'],
              estimatedMinutes: 4,
              starterCode: 'import json\n\n# 먼저 JSON 파일 생성\ndata = {"name": "김코딩", "scores": [85, 90, 78]}\nwith open("student.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False)\n\n# TODO: student.json을 읽어서 출력하세요\n# loaded = ???\n# print(f"이름: {loaded["name"]}")\n# print(f"점수: {loaded["scores"]}")\n',
              solution: 'import json\n\ndata = {"name": "김코딩", "scores": [85, 90, 78]}\nwith open("student.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False)\n\nwith open("student.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\n    print(f"이름: {loaded["name"]}")\n    print(f"점수: {loaded["scores"]}")',
              feedback: {
                perfect: 'JSON 읽기를 정확히 이해했어요!',
                good: '데이터를 잘 읽었어요!',
                partial: 'json.load(f)로 파일을 읽으세요.',
                wrong: 'with open(파일, "r") as f: 후 json.load(f)로 읽으세요.'
              }
            },
            {
              id: 'c3',
              title: 'JSON 문자열 변환',
              description: 'dumps와 loads로 문자열 변환을 수행하세요.',
              difficulty: 'medium',
              hints: ['json.dumps: 딕셔너리 -> 문자열', 'json.loads: 문자열 -> 딕셔너리', 'API 통신에서 많이 사용'],
              estimatedMinutes: 5,
              starterCode: 'import json\n\ndata = {"title": "파이썬", "level": 4, "completed": True}\n\n# TODO: 딕셔너리를 JSON 문자열로 변환\njson_str = None  # json.dumps(???)\nprint(f"타입: {type(json_str)}")\nprint(f"JSON: {json_str}")\n\n# TODO: JSON 문자열을 딕셔너리로 변환\nparsed = None  # json.loads(???)\nprint(f"타입: {type(parsed)}")\nprint(f"제목: {parsed["title"]}")\n',
              solution: 'import json\n\ndata = {"title": "파이썬", "level": 4, "completed": True}\n\njson_str = json.dumps(data, ensure_ascii=False)\nprint(f"타입: {type(json_str)}")\nprint(f"JSON: {json_str}")\n\nparsed = json.loads(json_str)\nprint(f"타입: {type(parsed)}")\nprint(f"제목: {parsed["title"]}")',
              feedback: {
                perfect: 'dumps/loads 변환을 완벽히 이해했어요!',
                good: '문자열 변환이 정확해요!',
                partial: 'json.dumps()와 json.loads()를 사용하세요.',
                wrong: 'json.dumps(딕셔너리) -> 문자열, json.loads(문자열) -> 딕셔너리'
              }
            },
            {
              id: 'c4',
              title: '게임 세이브 시스템',
              description: 'JSON으로 게임 데이터를 저장/로드하세요.',
              difficulty: 'medium',
              hints: ['게임 상태를 딕셔너리로 관리', 'json.dump로 저장, json.load로 로드', '파일 없을 때 기본값 사용'],
              estimatedMinutes: 7,
              starterCode: 'import json\nimport os\n\ndef save_game(data, filename="save.json"):\n    """게임 데이터 저장"""\n    # TODO\n    pass\n\ndef load_game(filename="save.json"):\n    """게임 데이터 로드 (없으면 기본값)"""\n    # TODO\n    pass\n\n# 테스트\ngame = {"player": "용사", "level": 5, "hp": 80, "items": ["검", "방패"]}\nsave_game(game)\nloaded = load_game()\nprint(loaded)\n',
              solution: 'import json\nimport os\n\ndef save_game(data, filename="save.json"):\n    with open(filename, "w", encoding="utf-8") as f:\n        json.dump(data, f, ensure_ascii=False, indent=2)\n    print("게임이 저장되었습니다!")\n\ndef load_game(filename="save.json"):\n    if os.path.exists(filename):\n        with open(filename, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return {"player": "초보자", "level": 1, "hp": 100, "items": []}\n\ngame = {"player": "용사", "level": 5, "hp": 80, "items": ["검", "방패"]}\nsave_game(game)\nloaded = load_game()\nprint(loaded)',
              feedback: {
                perfect: '게임 세이브 시스템을 완벽하게 만들었어요!',
                good: '저장/로드가 잘 작동해요!',
                partial: '파일 없을 때 기본값 반환을 추가하세요.',
                wrong: 'json.dump으로 저장하고 os.path.exists로 파일 확인 후 json.load로 읽으세요.'
              }
            },
            {
              id: 'c5',
              title: 'JSON 설정 관리자',
              description: '프로그램 설정을 JSON으로 관리하세요.',
              difficulty: 'hard',
              hints: ['기본 설정값 딕셔너리 준비', '설정 변경 후 자동 저장', '설정 파일이 없으면 기본값으로 생성'],
              estimatedMinutes: 8,
              starterCode: 'import json\nimport os\n\nDEFAULT_CONFIG = {\n    "theme": "dark",\n    "font_size": 14,\n    "language": "ko",\n    "auto_save": True\n}\n\ndef load_config(filename="config.json"):\n    # TODO: 설정 로드 (없으면 기본값 저장 후 반환)\n    pass\n\ndef save_config(config, filename="config.json"):\n    # TODO: 설정 저장\n    pass\n\ndef update_config(key, value):\n    # TODO: 특정 설정값 변경 후 저장\n    pass\n\n# 테스트\nconfig = load_config()\nprint(f"현재 설정: {config}")\nupdate_config("theme", "light")\nprint(f"변경 후: {load_config()}")\n',
              solution: 'import json\nimport os\n\nDEFAULT_CONFIG = {\n    "theme": "dark",\n    "font_size": 14,\n    "language": "ko",\n    "auto_save": True\n}\n\ndef load_config(filename="config.json"):\n    if os.path.exists(filename):\n        with open(filename, "r", encoding="utf-8") as f:\n            return json.load(f)\n    save_config(DEFAULT_CONFIG.copy(), filename)\n    return DEFAULT_CONFIG.copy()\n\ndef save_config(config, filename="config.json"):\n    with open(filename, "w", encoding="utf-8") as f:\n        json.dump(config, f, ensure_ascii=False, indent=2)\n\ndef update_config(key, value):\n    config = load_config()\n    config[key] = value\n    save_config(config)\n\nconfig = load_config()\nprint(f"현재 설정: {config}")\nupdate_config("theme", "light")\nprint(f"변경 후: {load_config()}")',
              feedback: {
                perfect: 'JSON 설정 관리자를 완벽하게 만들었어요!',
                good: '설정 관리가 잘 돼요!',
                partial: 'load -> update -> save 흐름을 완성하세요.',
                wrong: 'load_config에서 파일 존재 확인 후 읽기, 없으면 기본값 저장 및 반환하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-7',
          title: 'CSV 파일 처리',
          description: '엑셀에서도 열 수 있는 CSV를 다뤄요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: 'csv 모듈',
          conceptExplanation: `
CSV는 쉼표로 구분된 데이터 형식으로, 엑셀과 호환되는 가장 보편적인 데이터 파일입니다.
csv 모듈을 사용하면 표 형태의 데이터를 쉽게 읽고 쓸 수 있습니다.
데이터 분석, 데이터베이스 import/export에 필수적인 포맷입니다.
예: 고객 명단 관리, 판매 데이터 분석, 설문조사 결과 처리, 엑셀 데이터 자동화 등에 활용됩니다.
`,
          starterCode: 'import csv\n\n# CSV 파일 쓰기\nstudents = [\n    ["이름", "국어", "영어", "수학"],\n    ["철수", 85, 90, 78],\n    ["영희", 92, 88, 95],\n    ["민수", 78, 82, 88]\n]\n\nwith open("scores.csv", "w", encoding="utf-8", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerows(students)\n\n# CSV 파일 읽기\nwith open("scores.csv", "r", encoding="utf-8") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n\n# 딕셔너리로 읽기\nwith open("scores.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f"{row[\'이름\"]}: {row[\'국어\"]}점")\n',
          hints: [
            'CSV = Comma Separated Values',
            'csv.writer/reader: 리스트로 처리',
            'DictReader: 딕셔너리로 편리하게',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'CSV 파일 쓰기',
              description: 'csv.writer로 데이터를 CSV 파일에 쓰세요.',
              difficulty: 'easy',
              hints: ['csv.writer(파일)로 writer 생성', 'writer.writerow(리스트)로 한 줄 쓰기', 'newline="" 옵션 필수'],
              estimatedMinutes: 3,
              starterCode: 'import csv\n\n# TODO: scores.csv에 학생 성적 데이터를 쓰세요\nheader = ["이름", "국어", "영어", "수학"]\nstudents = [\n    ["철수", 85, 90, 78],\n    ["영희", 92, 88, 95],\n    ["민수", 78, 82, 88]\n]\n\n# csv.writer 사용\n',
              solution: 'import csv\n\nheader = ["이름", "국어", "영어", "수학"]\nstudents = [\n    ["철수", 85, 90, 78],\n    ["영희", 92, 88, 95],\n    ["민수", 78, 82, 88]\n]\n\nwith open("scores.csv", "w", encoding="utf-8", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(header)\n    writer.writerows(students)\n\nprint("CSV 저장 완료!")',
              feedback: {
                perfect: 'CSV 쓰기를 정확히 이해했어요!',
                good: 'CSV 파일이 잘 생성됐어요!',
                partial: 'newline="" 옵션을 추가하세요.',
                wrong: 'csv.writer(f) 생성 후 writerow(헤더), writerows(데이터)'
              }
            },
            {
              id: 'c2',
              title: 'CSV 파일 읽기',
              description: 'csv.reader로 CSV 파일을 읽으세요.',
              difficulty: 'easy',
              hints: ['csv.reader(파일)로 reader 생성', 'for row in reader: 로 반복', '첫 줄은 헤더'],
              estimatedMinutes: 4,
              starterCode: 'import csv\n\n# 먼저 CSV 생성\nwith open("data.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["제품", "가격", "수량"])\n    w.writerow(["사과", 1000, 5])\n    w.writerow(["바나나", 1500, 3])\n    w.writerow(["포도", 2000, 2])\n\n# TODO: data.csv를 읽어서 출력하세요\n',
              solution: 'import csv\n\nwith open("data.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["제품", "가격", "수량"])\n    w.writerow(["사과", 1000, 5])\n    w.writerow(["바나나", 1500, 3])\n    w.writerow(["포도", 2000, 2])\n\nwith open("data.csv", "r", encoding="utf-8") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)',
              feedback: {
                perfect: 'CSV 읽기를 정확히 이해했어요!',
                good: 'CSV 데이터를 잘 읽었어요!',
                partial: 'csv.reader(f)로 reader를 생성하세요.',
                wrong: 'csv.reader(f)로 생성 후 for row in reader: 로 반복하세요.'
              }
            },
            {
              id: 'c3',
              title: 'DictReader 활용',
              description: 'DictReader로 CSV를 딕셔너리로 읽으세요.',
              difficulty: 'medium',
              hints: ['csv.DictReader(f)로 생성', '각 행이 딕셔너리로 반환', '헤더가 키 이름이 됨'],
              estimatedMinutes: 5,
              starterCode: 'import csv\n\n# CSV 생성\nwith open("members.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "나이", "도시"])\n    w.writerow(["철수", 14, "서울"])\n    w.writerow(["영희", 15, "부산"])\n    w.writerow(["민수", 13, "대전"])\n\n# TODO: DictReader로 읽어서 각 멤버 정보 출력\n# "이름(나이) - 도시" 형태로\n',
              solution: 'import csv\n\nwith open("members.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "나이", "도시"])\n    w.writerow(["철수", 14, "서울"])\n    w.writerow(["영희", 15, "부산"])\n    w.writerow(["민수", 13, "대전"])\n\nwith open("members.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f"{row["이름"]}({row["나이"]}) - {row["도시"]}")',
              feedback: {
                perfect: 'DictReader를 완벽하게 활용했어요!',
                good: '딕셔너리로 잘 읽었어요!',
                partial: 'csv.DictReader(f)를 사용하세요.',
                wrong: 'csv.DictReader(f)로 읽으면 row["이름"]처럼 키로 접근할 수 있어요.'
              }
            },
            {
              id: 'c4',
              title: 'CSV 데이터 분석',
              description: 'CSV 데이터를 읽고 통계를 구하세요.',
              difficulty: 'medium',
              hints: ['숫자 데이터는 int()로 변환', '합계, 평균, 최대/최소 구하기', '리스트에 모아서 계산'],
              estimatedMinutes: 7,
              starterCode: 'import csv\n\n# CSV 생성\nwith open("sales.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["월", "매출"])\n    for m, s in [(1,1200),(2,1500),(3,1800),(4,1300),(5,2000),(6,1700)]:\n        w.writerow([m, s])\n\n# TODO: 월별 매출 데이터를 읽고\n# 총 매출, 평균 매출, 최고 매출 월을 구하세요\n',
              solution: 'import csv\n\nwith open("sales.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["월", "매출"])\n    for m, s in [(1,1200),(2,1500),(3,1800),(4,1300),(5,2000),(6,1700)]:\n        w.writerow([m, s])\n\nwith open("sales.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    sales = []\n    for row in reader:\n        sales.append({"월": int(row["월"]), "매출": int(row["매출"])})\n    \n    total = sum(s["매출"] for s in sales)\n    avg = total / len(sales)\n    best = max(sales, key=lambda x: x["매출"])\n    print(f"총 매출: {total}")\n    print(f"평균 매출: {avg:.0f}")\n    print(f"최고 매출: {best["월"]}월 ({best["매출"]})")',
              feedback: {
                perfect: 'CSV 데이터 분석을 완벽하게 했어요!',
                good: '통계 계산이 정확해요!',
                partial: '숫자 변환과 통계 계산을 완성하세요.',
                wrong: 'int()로 숫자 변환 후 sum(), max() 등으로 통계를 구하세요.'
              }
            },
            {
              id: 'c5',
              title: 'CSV 성적 처리 시스템',
              description: '성적 CSV를 읽고 등급을 매겨 새 파일에 저장하세요.',
              difficulty: 'hard',
              hints: ['입력 CSV 읽기 -> 분석 -> 출력 CSV 쓰기', '평균으로 등급 매기기', 'DictWriter로 결과 저장'],
              estimatedMinutes: 8,
              starterCode: 'import csv\n\n# 입력 CSV 생성\nwith open("input_scores.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "국어", "영어", "수학"])\n    w.writerow(["철수", 85, 90, 78])\n    w.writerow(["영희", 92, 88, 95])\n    w.writerow(["민수", 78, 82, 88])\n\n# TODO: 읽기 -> 평균/등급 계산 -> 결과 CSV 저장\n# 등급: 90이상 A, 80이상 B, 나머지 C\n',
              solution: 'import csv\n\nwith open("input_scores.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "국어", "영어", "수학"])\n    w.writerow(["철수", 85, 90, 78])\n    w.writerow(["영희", 92, 88, 95])\n    w.writerow(["민수", 78, 82, 88])\n\nresults = []\nwith open("input_scores.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        avg = (int(row["국어"]) + int(row["영어"]) + int(row["수학"])) / 3\n        grade = "A" if avg >= 90 else "B" if avg >= 80 else "C"\n        results.append({"이름": row["이름"], "평균": f"{avg:.1f}", "등급": grade})\n\nwith open("result_scores.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.DictWriter(f, fieldnames=["이름", "평균", "등급"])\n    w.writeheader()\n    w.writerows(results)\n\nprint("결과 저장 완료!")\nwith open("result_scores.csv", "r", encoding="utf-8") as f:\n    print(f.read())',
              feedback: {
                perfect: 'CSV 처리 파이프라인을 완벽하게 만들었어요!',
                good: '입력/분석/출력 흐름이 좋아요!',
                partial: 'DictWriter로 결과를 저장하세요.',
                wrong: '읽기 -> 평균/등급 계산 -> DictWriter로 결과 CSV 저장 순서로 진행하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-8',
          title: '파일 존재 확인',
          description: '파일이 있는지 확인하고 처리해요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: '파일 확인',
          conceptExplanation: `
파일 확인은 파일 존재 여부, 크기, 수정 시간 등을 체크하는 작업입니다.
os.path 또는 pathlib 모듈로 파일 정보를 안전하게 확인할 수 있습니다.
파일 작업 전 확인하면 에러를 미리 방지할 수 있습니다.
예: 파일 존재 확인 후 읽기, 백업 파일 체크, 디렉토리 구조 검증 등에 활용됩니다.
`,
          starterCode: 'import os\n\nfilename = "test.txt"\n\n# 파일 존재 확인\nif os.path.exists(filename):\n    print(f"{filename} 존재함")\nelse:\n    print(f"{filename} 없음")\n\n# 파일인지 폴더인지\nif os.path.isfile(filename):\n    print("파일입니다")\nif os.path.isdir("."):\n    print("폴더입니다")\n\n# 현재 폴더의 파일 목록\nprint("\\n현재 폴더의 파일들:")\nfor item in os.listdir("."):\n    print(f"  {item}")\n',
          hints: [
            'os.path.exists(): 존재 확인',
            'os.path.isfile(): 파일인지',
            'os.listdir(): 폴더 내용 목록',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '파일 존재 확인',
              description: 'os.path.exists로 파일 존재를 확인하세요.',
              difficulty: 'easy',
              hints: ['os.path.exists(파일경로)', 'True/False를 반환', 'import os 필요'],
              estimatedMinutes: 3,
              starterCode: 'import os\n\n# 테스트 파일 생성\nwith open("test_file.txt", "w") as f:\n    f.write("테스트")\n\n# TODO: 파일 존재 여부 확인\nfiles = ["test_file.txt", "없는파일.txt", "data.csv"]\nfor fname in files:\n    # exists = ???\n    # print(f"{fname}: {"존재" if exists else "없음"}")\n    pass\n',
              solution: 'import os\n\nwith open("test_file.txt", "w") as f:\n    f.write("테스트")\n\nfiles = ["test_file.txt", "없는파일.txt", "data.csv"]\nfor fname in files:\n    exists = os.path.exists(fname)\n    print(f"{fname}: {"존재" if exists else "없음"}")',
              feedback: {
                perfect: '파일 존재 확인을 정확히 이해했어요!',
                good: '파일 확인이 잘 돼요!',
                partial: 'os.path.exists(파일명)을 사용하세요.',
                wrong: 'os.path.exists(fname)으로 파일 존재를 True/False로 확인하세요.'
              }
            },
            {
              id: 'c2',
              title: '파일 vs 폴더 구분',
              description: 'isfile과 isdir로 파일과 폴더를 구분하세요.',
              difficulty: 'easy',
              hints: ['os.path.isfile(): 파일인지', 'os.path.isdir(): 폴더인지', '파일 목록에서 구분할 때 유용'],
              estimatedMinutes: 4,
              starterCode: 'import os\n\n# TODO: 현재 폴더의 항목들을 파일/폴더로 구분하세요\nitems = os.listdir(".")\n\nfor item in items[:10]:  # 처음 10개만\n    # TODO: 파일인지 폴더인지 구분하여 출력\n    # [파일] 이름 또는 [폴더] 이름\n    pass\n',
              solution: 'import os\n\nitems = os.listdir(".")\n\nfor item in items[:10]:\n    if os.path.isfile(item):\n        print(f"[파일] {item}")\n    elif os.path.isdir(item):\n        print(f"[폴더] {item}")',
              feedback: {
                perfect: '파일/폴더 구분을 정확히 이해했어요!',
                good: '구분이 잘 돼요!',
                partial: 'os.path.isfile()과 os.path.isdir()을 사용하세요.',
                wrong: 'os.path.isfile(item)이면 파일, os.path.isdir(item)이면 폴더예요.'
              }
            },
            {
              id: 'c3',
              title: '파일 정보 확인',
              description: '파일 크기와 수정 시간을 확인하세요.',
              difficulty: 'medium',
              hints: ['os.path.getsize(): 파일 크기(바이트)', 'os.path.getmtime(): 수정 시간', 'datetime으로 시간 변환'],
              estimatedMinutes: 5,
              starterCode: 'import os\nfrom datetime import datetime\n\n# 테스트 파일 생성\nwith open("info_test.txt", "w") as f:\n    f.write("파일 정보 테스트" * 100)\n\n# TODO: 파일 크기와 수정 시간 출력\nfilename = "info_test.txt"\n# size = ???\n# mtime = ???\n# print(f"크기: {size} 바이트")\n# print(f"수정: {mtime}")\n',
              solution: 'import os\nfrom datetime import datetime\n\nwith open("info_test.txt", "w") as f:\n    f.write("파일 정보 테스트" * 100)\n\nfilename = "info_test.txt"\nsize = os.path.getsize(filename)\nmtime = os.path.getmtime(filename)\nmod_time = datetime.fromtimestamp(mtime)\nprint(f"크기: {size} 바이트")\nprint(f"수정: {mod_time.strftime("%Y-%m-%d %H:%M")}")',
              feedback: {
                perfect: '파일 정보 확인을 완벽히 이해했어요!',
                good: '파일 정보를 잘 가져왔어요!',
                partial: 'os.path.getsize()와 getmtime()을 사용하세요.',
                wrong: 'os.path.getsize(파일)로 크기, getmtime(파일)로 수정 시간을 구하세요.'
              }
            },
            {
              id: 'c4',
              title: '안전한 파일 읽기',
              description: '파일 존재를 확인하고 안전하게 읽으세요.',
              difficulty: 'medium',
              hints: ['먼저 exists로 확인', '없으면 에러 대신 메시지 출력', '함수로 만들면 재사용 가능'],
              estimatedMinutes: 6,
              starterCode: 'import os\n\ndef safe_read(filename):\n    """파일이 있으면 읽고, 없으면 None 반환"""\n    # TODO: os.path.exists로 확인 후 읽기\n    pass\n\n# 테스트\nwith open("safe_test.txt", "w") as f:\n    f.write("안전하게 읽었어요!")\n\nresult1 = safe_read("safe_test.txt")\nresult2 = safe_read("없는파일.txt")\nprint(f"결과1: {result1}")\nprint(f"결과2: {result2}")\n',
              solution: 'import os\n\ndef safe_read(filename):\n    if not os.path.exists(filename):\n        print(f"파일을 찾을 수 없습니다: {filename}")\n        return None\n    with open(filename, "r", encoding="utf-8") as f:\n        return f.read()\n\nwith open("safe_test.txt", "w") as f:\n    f.write("안전하게 읽었어요!")\n\nresult1 = safe_read("safe_test.txt")\nresult2 = safe_read("없는파일.txt")\nprint(f"결과1: {result1}")\nprint(f"결과2: {result2}")',
              feedback: {
                perfect: '안전한 파일 읽기를 완벽히 구현했어요!',
                good: '파일 확인 후 읽기가 잘 돼요!',
                partial: 'os.path.exists() 확인을 추가하세요.',
                wrong: 'if not os.path.exists(filename): return None 후 파일을 읽으세요.'
              }
            },
            {
              id: 'c5',
              title: '폴더 파일 목록 정리',
              description: '특정 폴더의 파일들을 종류별로 분류하세요.',
              difficulty: 'hard',
              hints: ['os.path.splitext()로 확장자 분리', '딕셔너리로 확장자별 그룹화', 'os.listdir()로 파일 목록'],
              estimatedMinutes: 8,
              starterCode: 'import os\n\ndef classify_files(folder="."):\n    """폴더의 파일을 확장자별로 분류"""\n    # TODO: 확장자별로 파일을 그룹화하여 딕셔너리로 반환\n    # 예: {".py": ["a.py", "b.py"], ".txt": ["c.txt"]}\n    pass\n\nresult = classify_files()\nfor ext, files in sorted(result.items()):\n    print(f"{ext}: {len(files)}개 - {files[:3]}")\n',
              solution: 'import os\n\ndef classify_files(folder="."):\n    result = {}\n    for item in os.listdir(folder):\n        if os.path.isfile(os.path.join(folder, item)):\n            _, ext = os.path.splitext(item)\n            ext = ext if ext else "(없음)"\n            if ext not in result:\n                result[ext] = []\n            result[ext].append(item)\n    return result\n\nresult = classify_files()\nfor ext, files in sorted(result.items()):\n    print(f"{ext}: {len(files)}개 - {files[:3]}")',
              feedback: {
                perfect: '파일 분류를 완벽하게 구현했어요!',
                good: '확장자별 분류가 잘 돼요!',
                partial: 'os.path.splitext()로 확장자를 분리하세요.',
                wrong: 'os.path.splitext(파일명)으로 이름과 확장자를 분리해 딕셔너리에 모으세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-9',
          title: '나만의 모듈 만들기',
          description: '직접 모듈을 만들어봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: '모듈 만들기',
          conceptExplanation: `
모듈 만들기는 자신만의 코드 라이브러리를 구축하는 과정입니다.
파이썬 파일(.py)에 함수와 클래스를 작성하면 다른 파일에서 import할 수 있습니다.
__name__ == "__main__" 패턴으로 모듈 테스트와 실행을 분리할 수 있습니다.
예: 유틸리티 함수 모음, 설정 관리, 공통 클래스 등 재사용 가능한 컴포넌트로 만듭니다.
`,
          hints: [
            'Python 파일 = 모듈',
            'mymodule.py 만들고 import mymodule',
            '__name__ == "__main__" 으로 직접 실행 확인',
          ],
                    challenges: [
          {
            id: 'c1',
            title: '파이썬 파일이 곧 모듈',
            description: '함수를 정의한 .py 파일을 모듈로 사용하세요',
            difficulty: 'easy',
            hints: ['파이썬 파일 = 모듈', 'import 파일이름으로 가져와요'],
            estimatedMinutes: 3,
            starterCode: '# mymath.py\ndef add(a, b):\n    return a + b\ndef mul(a, b):\n    return a * b\n\n# main.py\n# import mymath\n# print(mymath.add(3, 5))  # 8',
            solution: '# mymath.py\ndef add(a, b):\n    return a + b\ndef mul(a, b):\n    return a * b\n\n# main.py에서:\n# import mymath\n# print(mymath.add(3, 5))',
            feedback: {
              perfect: '모듈 만들기를 완벽하게 이해했어요!',
              good: '.py 파일이 모듈임을 잘 파악했어요!',
              partial: '함수를 .py 파일에 정의하세요.',
              wrong: 'import 파일이름으로 다른 파일에서 사용하세요.'
            }
          },
          {
            id: 'c2',
            title: '__name__ == "__main__"',
            description: '직접 실행과 import를 구분하세요',
            difficulty: 'easy',
            hints: ['직접 실행 시 __name__은 "__main__"', 'import 시 __name__은 모듈 이름'],
            estimatedMinutes: 5,
            starterCode: 'def greet(name):\n    return f"안녕, {name}!"\n\nif __name__ == "____":\n    print(greet("테스트"))',
            solution: 'def greet(name):\n    return f"안녕, {name}!"\n\nif __name__ == "__main__":\n    print(greet("테스트"))',
            feedback: {
              perfect: '__name__ 패턴을 완벽하게 이해했어요!',
              good: 'main 가드를 잘 사용했어요!',
              partial: '빈칸에 __main__을 넣으세요.',
              wrong: '직접 실행 시에만 True가 됩니다.'
            }
          },
          {
            id: 'c3',
            title: '유틸리티 함수 모음',
            description: '재사용 가능한 유틸리티 모듈을 만드세요',
            difficulty: 'medium',
            hints: ['자주 쓰는 함수를 모아두세요', '용도별로 모듈을 나누세요'],
            estimatedMinutes: 7,
            starterCode: '# string_utils.py\ndef capitalize_words(text):\n    return " ".join(w.capitalize() for w in text.split())\n\ndef is_palindrome(text):\n    clean = text.replace(" ", "").lower()\n    return clean == clean[::-1]\n\nif __name__ == "__main__":\n    print(capitalize_words("hello world"))\n    print(is_palindrome("level"))',
            solution: 'def capitalize_words(text):\n    return " ".join(w.capitalize() for w in text.split())\n\ndef is_palindrome(text):\n    clean = text.replace(" ", "").lower()\n    return clean == clean[::-1]\n\nif __name__ == "__main__":\n    print(capitalize_words("hello world"))\n    print(is_palindrome("level"))',
            feedback: {
              perfect: '유틸리티 모듈을 완벽하게 만들었어요!',
              good: '재사용 가능한 함수를 잘 구성했어요!',
              partial: '관련 함수를 하나의 파일에 모으세요.',
              wrong: '__main__ 가드로 테스트 코드를 분리하세요.'
            }
          },
          {
            id: 'c4',
            title: '패키지 구조',
            description: '__init__.py로 패키지를 구성하세요',
            difficulty: 'medium',
            hints: ['폴더 + __init__.py = 패키지', 'from 패키지 import 모듈'],
            estimatedMinutes: 10,
            starterCode: '# mypackage/\n#   __init__.py\n#   math_utils.py\n#   string_utils.py\n\n# __init__.py:\n# from .math_utils import add\n# from .string_utils import reverse\n\n# 사용:\n# from mypackage import add, reverse\nprint("패키지 구조 이해 완료!")',
            solution: '# __init__.py에서:\n# from .math_utils import add\n# from .string_utils import reverse\n\n# 사용 시:\n# from mypackage import add, reverse\nprint("패키지 구조 이해 완료!")',
            feedback: {
              perfect: '패키지 구조를 완벽하게 이해했어요!',
              good: '__init__.py 역할을 잘 파악했어요!',
              partial: '__init__.py에서 하위 모듈을 import하세요.',
              wrong: '폴더에 __init__.py를 넣으면 패키지가 됩니다.'
            }
          },
          {
            id: 'c5',
            title: '설정 관리 모듈',
            description: 'JSON 기반 설정 관리 모듈을 만드세요',
            difficulty: 'hard',
            hints: ['json.load와 json.dump를 사용', '딕셔너리로 설정을 관리'],
            estimatedMinutes: 15,
            starterCode: 'import json, os\n\nclass Config:\n    def __init__(self, path="config.json"):\n        self.path = path\n        self.data = {}\n        if os.path.exists(path):\n            with open(path) as f:\n                self.data = json.load(f)\n\n    def get(self, key, default=None):\n        return self.data.get(key, default)\n\n    def set(self, key, value):\n        self.data[key] = value\n        with open(self.path, "w") as f:\n            json.dump(self.data, f, indent=2)',
            solution: 'import json, os\n\nclass Config:\n    def __init__(self, path="config.json"):\n        self.path = path\n        self.data = {}\n        if os.path.exists(path):\n            with open(path) as f:\n                self.data = json.load(f)\n\n    def get(self, key, default=None):\n        return self.data.get(key, default)\n\n    def set(self, key, value):\n        self.data[key] = value\n        with open(self.path, "w") as f:\n            json.dump(self.data, f, indent=2)',
            feedback: {
              perfect: '설정 관리 모듈을 완벽하게 구현했어요!',
              good: 'JSON과 클래스를 잘 조합했어요!',
              partial: 'json.load/dump로 파일 읽기/쓰기를 하세요.',
              wrong: '클래스로 설정 데이터와 메서드를 묶으세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-28-10',
          title: '주간 도전: 메모장 프로그램',
          description: '파일에 메모를 저장하고 불러오는 프로그램',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '파일 I/O 종합',
          conceptExplanation: `
파일 입출력은 프로그램과 외부 데이터를 연결하는 필수 기능입니다.
텍스트, CSV, JSON 등 다양한 형식을 다루고, 예외 처리로 안정성을 확보해야 합니다.
데이터 영속성, 설정 관리, 로그 기록 등 실무의 거의 모든 곳에서 사용됩니다.
예: 데이터 백업/복원, 설정 저장/로드, 로그 분석, 외부 시스템 연동 등에 활용됩니다.
`,
          starterCode: 'import os\nimport json\nfrom datetime import datetime\n\nMEMO_FILE = "memos.json"\n\ndef load_memos():\n    if os.path.exists(MEMO_FILE):\n        with open(MEMO_FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return []\n\ndef save_memos(memos):\n    with open(MEMO_FILE, "w", encoding="utf-8") as f:\n        json.dump(memos, f, ensure_ascii=False, indent=2)\n\ndef main():\n    memos = load_memos()\n    \n    while True:\n        print("\\n=== 메모장 ===")\n        print("1. 메모 추가")\n        print("2. 메모 보기")\n        print("3. 메모 삭제")\n        print("4. 종료")\n        \n        choice = input("선택: ")\n        \n        if choice == "1":\n            content = input("메모 내용: ")\n            memo = {\n                "content": content,\n                "created": datetime.now().strftime("%Y-%m-%d %H:%M")\n            }\n            memos.append(memo)\n            save_memos(memos)\n            print("저장되었습니다.")\n        \n        elif choice == "2":\n            for i, memo in enumerate(memos, 1):\n                print(f"[{i}] ({memo[\'created\"]}) {memo[\'content\"]}")\n        \n        elif choice == "3":\n            idx = int(input("삭제할 번호: ")) - 1\n            if 0 <= idx < len(memos):\n                memos.pop(idx)\n                save_memos(memos)\n                print("삭제되었습니다.")\n        \n        elif choice == "4":\n            break\n\nmain()\n',
          hints: [
            'JSON으로 메모 데이터 저장',
            'datetime으로 작성 시간 기록',
            '프로그램 종료해도 데이터 유지',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '메모 저장하기',
              description: 'JSON으로 메모를 저장하고 불러오세요.',
              difficulty: 'easy',
              hints: ['json.dump으로 저장', 'json.load로 불러오기', '리스트에 메모를 추가'],
              estimatedMinutes: 4,
              starterCode: 'import json\n\n# TODO: 메모를 JSON에 저장하는 함수\ndef save_memo(memo, filename="memos.json"):\n    pass\n\ndef load_memos(filename="memos.json"):\n    pass\n\n# 테스트\nsave_memo("첫 번째 메모")\nsave_memo("두 번째 메모")\nprint(load_memos())\n',
              solution: 'import json\nimport os\n\ndef save_memo(memo, filename="memos.json"):\n    memos = load_memos(filename)\n    memos.append(memo)\n    with open(filename, "w", encoding="utf-8") as f:\n        json.dump(memos, f, ensure_ascii=False, indent=2)\n\ndef load_memos(filename="memos.json"):\n    if os.path.exists(filename):\n        with open(filename, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return []\n\nsave_memo("첫 번째 메모")\nsave_memo("두 번째 메모")\nprint(load_memos())',
              feedback: {
                perfect: '메모 저장/로드를 완벽히 구현했어요!',
                good: 'JSON 파일 관리가 잘 돼요!',
                partial: 'load -> append -> save 순서를 지키세요.',
                wrong: 'load로 기존 데이터를 읽고, append 후 dump로 저장하세요.'
              }
            },
            {
              id: 'c2',
              title: 'CSV에서 JSON으로 변환',
              description: 'CSV 파일을 읽어 JSON으로 저장하세요.',
              difficulty: 'medium',
              hints: ['csv.DictReader로 읽기', 'json.dump으로 저장', '리스트에 딕셔너리 모으기'],
              estimatedMinutes: 5,
              starterCode: 'import csv\nimport json\n\n# CSV 생성\nwith open("convert.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "점수", "등급"])\n    w.writerow(["철수", 85, "B"])\n    w.writerow(["영희", 95, "A"])\n\n# TODO: CSV -> JSON 변환\ndef csv_to_json(csv_file, json_file):\n    pass\n\ncsv_to_json("convert.csv", "convert.json")\n',
              solution: 'import csv\nimport json\n\nwith open("convert.csv", "w", encoding="utf-8", newline="") as f:\n    w = csv.writer(f)\n    w.writerow(["이름", "점수", "등급"])\n    w.writerow(["철수", 85, "B"])\n    w.writerow(["영희", 95, "A"])\n\ndef csv_to_json(csv_file, json_file):\n    data = []\n    with open(csv_file, "r", encoding="utf-8") as f:\n        reader = csv.DictReader(f)\n        for row in reader:\n            data.append(dict(row))\n    with open(json_file, "w", encoding="utf-8") as f:\n        json.dump(data, f, ensure_ascii=False, indent=2)\n    print(f"변환 완료: {csv_file} -> {json_file}")\n\ncsv_to_json("convert.csv", "convert.json")',
              feedback: {
                perfect: 'CSV -> JSON 변환을 완벽히 구현했어요!',
                good: '파일 변환이 잘 돼요!',
                partial: 'DictReader로 읽고 json.dump로 저장하세요.',
                wrong: 'csv.DictReader로 읽어 리스트에 모은 후 json.dump로 저장하세요.'
              }
            },
            {
              id: 'c3',
              title: '파일 백업 함수',
              description: '파일을 안전하게 백업하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['원본을 읽고 백업 파일에 쓰기', '파일명에 날짜 추가', 'os.path.exists로 확인'],
              estimatedMinutes: 6,
              starterCode: 'import os\nfrom datetime import datetime\n\ndef backup_file(filename):\n    """파일을 백업합니다. 예: data.txt -> data_20260207.txt"""\n    # TODO\n    pass\n\n# 테스트\nwith open("important.txt", "w") as f:\n    f.write("중요한 데이터!")\n\nbackup_file("important.txt")\n',
              solution: 'import os\nfrom datetime import datetime\n\ndef backup_file(filename):\n    if not os.path.exists(filename):\n        print(f"파일 없음: {filename}")\n        return\n    name, ext = os.path.splitext(filename)\n    date_str = datetime.now().strftime("%Y%m%d")\n    backup_name = f"{name}_{date_str}{ext}"\n    with open(filename, "r", encoding="utf-8") as src:\n        content = src.read()\n    with open(backup_name, "w", encoding="utf-8") as dst:\n        dst.write(content)\n    print(f"백업 완료: {backup_name}")\n\nwith open("important.txt", "w") as f:\n    f.write("중요한 데이터!")\n\nbackup_file("important.txt")',
              feedback: {
                perfect: '파일 백업 함수를 완벽하게 만들었어요!',
                good: '백업이 잘 돼요!',
                partial: '날짜를 파일명에 추가하세요.',
                wrong: 'os.path.splitext()로 이름과 확장자를 분리하고 날짜를 넣어 백업하세요.'
              }
            },
            {
              id: 'c4',
              title: '로그 기록 시스템',
              description: '프로그램 로그를 파일에 기록하세요.',
              difficulty: 'medium',
              hints: ['"a" 모드로 추가 쓰기', 'datetime으로 시간 기록', '로그 레벨(INFO, ERROR) 포함'],
              estimatedMinutes: 7,
              starterCode: 'from datetime import datetime\n\ndef log(message, level="INFO", filename="app.log"):\n    """로그를 파일에 기록"""\n    # TODO: "[시간] [레벨] 메시지" 형태로 저장\n    pass\n\n# 테스트\nlog("프로그램 시작")\nlog("데이터 로딩 완료")\nlog("파일을 찾을 수 없음", "ERROR")\nlog("프로그램 종료")\n\n# 로그 확인\nwith open("app.log", "r") as f:\n    print(f.read())\n',
              solution: 'from datetime import datetime\n\ndef log(message, level="INFO", filename="app.log"):\n    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")\n    log_entry = f"[{timestamp}] [{level}] {message}\n"\n    with open(filename, "a", encoding="utf-8") as f:\n        f.write(log_entry)\n\nlog("프로그램 시작")\nlog("데이터 로딩 완료")\nlog("파일을 찾을 수 없음", "ERROR")\nlog("프로그램 종료")\n\nwith open("app.log", "r") as f:\n    print(f.read())',
              feedback: {
                perfect: '로그 시스템을 완벽하게 만들었어요!',
                good: '로그 기록이 잘 돼요!',
                partial: '"a" 모드와 시간 포맷을 사용하세요.',
                wrong: '"a" 모드로 열고 f"[{시간}] [{레벨}] {메시지}" 형태로 쓰세요.'
              }
            },
            {
              id: 'c5',
              title: '주소록 프로그램',
              description: 'JSON 기반 주소록을 만드세요.',
              difficulty: 'hard',
              hints: ['JSON으로 연락처 저장/로드', '추가/검색/삭제 기능', '예외 처리 포함'],
              estimatedMinutes: 10,
              starterCode: 'import json\nimport os\n\ndef load_contacts():\n    # TODO\n    pass\n\ndef save_contacts(contacts):\n    # TODO\n    pass\n\ndef add_contact(contacts):\n    # TODO: 이름, 전화번호, 이메일 입력받아 추가\n    pass\n\ndef search_contact(contacts):\n    # TODO: 이름으로 검색\n    pass\n\n# 메인 루프\n# TODO\n',
              solution: 'import json\nimport os\n\nFILE = "contacts.json"\n\ndef load_contacts():\n    if os.path.exists(FILE):\n        with open(FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return {}\n\ndef save_contacts(contacts):\n    with open(FILE, "w", encoding="utf-8") as f:\n        json.dump(contacts, f, ensure_ascii=False, indent=2)\n\ndef add_contact(contacts):\n    name = input("이름: ")\n    phone = input("전화번호: ")\n    email = input("이메일: ")\n    contacts[name] = {"phone": phone, "email": email}\n    save_contacts(contacts)\n    print(f"{name} 추가 완료!")\n\ndef search_contact(contacts):\n    name = input("검색할 이름: ")\n    if name in contacts:\n        info = contacts[name]\n        print(f"이름: {name}")\n        print(f"전화: {info["phone"]}")\n        print(f"이메일: {info["email"]}")\n    else:\n        print("찾을 수 없습니다.")\n\ncontacts = load_contacts()\nprint("=== 주소록 ===")\nprint("1.추가 2.검색 3.종료")\nchoice = input("선택: ")\nif choice == "1":\n    add_contact(contacts)\nelif choice == "2":\n    search_contact(contacts)',
              feedback: {
                perfect: '주소록 프로그램을 완벽하게 만들었어요!',
                good: '기본 기능이 잘 작동해요!',
                partial: '추가와 검색 기능을 모두 완성하세요.',
                wrong: 'JSON으로 데이터를 저장/로드하고 딕셔너리로 관리하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-28',
        title: 'Week 28 퀴즈',
        questions: [
          {
            id: 'q28-1',
            question: '파일을 읽기 모드로 열 때 사용하는 모드는?',
            options: ['"w"', '"r"', '"a"', '"x"'],
            correctAnswer: 1,
            explanation: '"r"은 read(읽기) 모드예요. "w"는 쓰기, "a"는 추가, "x"는 새로 만들기 모드입니다. open("파일", "r")로 읽기 모드로 열어요!'
          },
          {
            id: 'q28-2',
            question: 'JSON 파일을 딕셔너리로 읽는 함수는?',
            options: ['json.read()', 'json.load()', 'json.parse()', 'json.get()'],
            correctAnswer: 1,
            explanation: 'json.load()는 JSON 파일을 읽어서 Python 딕셔너리로 변환해요. json.dump()는 딕셔너리를 JSON으로 저장합니다!'
          },
          {
            id: 'q28-3',
            question: 'with 문을 사용하는 이유는?',
            options: ['속도 향상', '자동 파일 닫기', '에러 무시', '필수 문법'],
            correctAnswer: 1,
            explanation: 'with 문은 블록이 끝나면 파일을 자동으로 닫아줘요. f.close()를 깜빡해도 안전하고, 에러가 나도 파일이 제대로 닫혀요!'
          },
          {
            id: 'q28-4',
            question: 'import math 후 원주율 pi에 접근하려면?',
            options: ['pi', 'math.pi', 'math(pi)', 'import.pi'],
            correctAnswer: 1,
            explanation: '모듈을 import하면 모듈명.함수명 형식으로 접근해요. math.pi, math.sqrt() 처럼 사용합니다!'
          },
          {
            id: 'q28-5',
            question: 'from random import randint의 의미는?',
            options: ['random 전체 가져오기', 'randint만 가져오기', 'random 이름 바꾸기', '에러'],
            correctAnswer: 1,
            explanation: 'from 모듈 import 함수는 특정 함수만 가져와요. 이후 random.randint()가 아니라 randint()로 바로 사용할 수 있어요!'
          },
        ],
      },
    },

    // Week 29: 에러 처리
    {
      id: 'week-29',
      number: 29,
      title: '예외 처리: 에러 다루기',
      description: '프로그램이 멈추지 않도록 에러를 처리해요',
      missions: [
        {
          id: '4-29-1',
          title: '에러의 종류',
          description: '파이썬의 다양한 에러를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '에러 종류',
          cstaStandard: '1B-AP-14',
          learningObjectives: [
            '파이썬의 주요 에러 유형을 구분할 수 있다',
            '에러 메시지를 읽고 문제를 파악할 수 있다',
            '에러가 발생하는 상황을 예측할 수 있다'
          ],
          realWorldExample: '자동차 계기판의 경고등처럼, 에러 메시지는 무엇이 잘못되었는지 알려줘요. SyntaxError는 빨간불, ValueError는 노란불처럼요!',
          conceptCards: [
            {
              title: 'SyntaxError',
              description: '문법 오류 - 코드가 잘못 작성됨',
              icon: '❌',
              example: 'print("안녕"  # 괄호 안 닫음'
            },
            {
              title: 'NameError',
              description: '정의되지 않은 변수 사용',
              icon: '🔍',
              example: 'print(x)  # x가 없음'
            },
            {
              title: 'ValueError',
              description: '잘못된 값 - 타입은 맞지만 값이 이상함',
              icon: '⚠️',
              example: 'int("abc")  # 숫자 아님'
            }
          ],
          hints: [
            '💡 힌트 1: SyntaxError - 문법 오류 (괄호, 콜론 등)',
            '💡 힌트 2: NameError - 정의되지 않은 변수 사용',
            '💡 힌트 3: TypeError - 타입 불일치, ValueError - 잘못된 값, ZeroDivisionError - 0으로 나눔'
          ],
                    challenges: [
          {
            id: 'c1',
            title: 'SyntaxError 수정',
            description: '문법 에러를 찾아 수정하세요',
            difficulty: 'easy',
            hints: ['콜론, 괄호, 들여쓰기를 확인', 'SyntaxError는 실행 전에 발생'],
            estimatedMinutes: 3,
            starterCode: '# 에러를 찾아 수정하세요\ndef greet(name)  # 콜론 빠짐\n    print(f"안녕, {name}!")',
            solution: 'def greet(name):\n    print(f"안녕, {name}!")\n\ngreet("철수")',
            feedback: {
              perfect: 'SyntaxError를 완벽하게 이해했어요!',
              good: '문법 에러를 잘 찾았어요!',
              partial: 'def 줄 끝에 콜론이 필요해요.',
              wrong: '함수 정의 줄 끝에 :를 붙이세요.'
            }
          },
          {
            id: 'c2',
            title: 'NameError 이해',
            description: '정의되지 않은 변수 에러를 수정하세요',
            difficulty: 'easy',
            hints: ['변수가 정의 전에 사용되면 NameError', '오타도 NameError 원인'],
            estimatedMinutes: 5,
            starterCode: '# NameError 수정\ndef calc():\n    result = number * 2  # number 미정의\n    return result\n\n# 수정: 매개변수로 받기\ndef calc(number):\n    return number * 2\n\nprint(calc(5))',
            solution: 'def calc(number):\n    return number * 2\n\nprint(calc(5))  # 10',
            feedback: {
              perfect: 'NameError를 완벽하게 이해했어요!',
              good: '변수 스코프를 잘 파악했어요!',
              partial: '변수를 매개변수로 전달하세요.',
              wrong: '함수 안에서 쓸 변수는 매개변수로 받아야 해요.'
            }
          },
          {
            id: 'c3',
            title: 'TypeError와 ValueError',
            description: '타입 관련 에러를 구분하세요',
            difficulty: 'medium',
            hints: ['타입 불일치 = TypeError', '값 부적절 = ValueError'],
            estimatedMinutes: 7,
            starterCode: '# TypeError vs ValueError\ntry:\n    result = "3" + 5  # TypeError\nexcept TypeError:\n    print("타입이 맞지 않아요")\n\ntry:\n    num = int("abc")  # ValueError\nexcept ValueError:\n    print("숫자로 변환할 수 없어요")',
            solution: 'try:\n    result = "3" + 5\nexcept TypeError:\n    print("타입이 맞지 않아요")\n\ntry:\n    num = int("abc")\nexcept ValueError:\n    print("숫자로 변환할 수 없어요")',
            feedback: {
              perfect: 'TypeError와 ValueError를 완벽하게 구분했어요!',
              good: '에러 종류를 잘 이해했어요!',
              partial: '각 에러 타입에 맞는 except를 사용하세요.',
              wrong: 'TypeError는 타입, ValueError는 값 문제입니다.'
            }
          },
          {
            id: 'c4',
            title: 'IndexError와 KeyError',
            description: '접근 에러를 안전하게 처리하세요',
            difficulty: 'medium',
            hints: ['리스트 범위 초과 = IndexError', '딕셔너리 키 없음 = KeyError'],
            estimatedMinutes: 10,
            starterCode: 'scores = [85, 92, 78]\nstudent = {"name": "철수"}\n\n# 안전한 접근\ndef safe_get(lst, idx):\n    if 0 <= idx < len(lst):\n        return lst[idx]\n    return None\n\nprint(safe_get(scores, 5))  # None\nprint(student.get("grade", "없음"))  # 없음',
            solution: 'scores = [85, 92, 78]\nstudent = {"name": "철수"}\n\ndef safe_get(lst, idx):\n    if 0 <= idx < len(lst):\n        return lst[idx]\n    return None\n\nprint(safe_get(scores, 5))\nprint(student.get("grade", "없음"))',
            feedback: {
              perfect: '안전한 접근을 완벽하게 구현했어요!',
              good: '방어적 프로그래밍을 잘 적용했어요!',
              partial: '범위 확인이나 .get()을 사용하세요.',
              wrong: 'IndexError는 범위 확인, KeyError는 .get()으로 방지하세요.'
            }
          },
          {
            id: 'c5',
            title: '커스텀 에러 만들기',
            description: '사용자 정의 예외 클래스를 만드세요',
            difficulty: 'hard',
            hints: ['Exception을 상속하세요', 'raise로 에러를 발생시켜요'],
            estimatedMinutes: 15,
            starterCode: 'class AgeError(Exception):\n    pass\n\ndef set_age(age):\n    if age < 0:\n        raise AgeError("나이는 음수일 수 없어요")\n    if age > 150:\n        raise AgeError("나이가 너무 커요")\n    return age\n\ntry:\n    set_age(-5)\nexcept AgeError as e:\n    print(f"에러: {e}")',
            solution: 'class AgeError(Exception):\n    pass\n\ndef set_age(age):\n    if age < 0:\n        raise AgeError("나이는 음수일 수 없어요")\n    if age > 150:\n        raise AgeError("나이가 너무 커요")\n    return age\n\ntry:\n    set_age(-5)\nexcept AgeError as e:\n    print(f"에러: {e}")',
            feedback: {
              perfect: '커스텀 에러를 완벽하게 만들었어요!',
              good: '예외 클래스 상속을 잘 이해했어요!',
              partial: 'Exception을 상속받는 클래스를 만드세요.',
              wrong: 'class MyError(Exception): pass로 정의하세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-2',
          title: 'try-except 기본',
          description: '에러를 잡아서 처리해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'try-except',
          conceptExplanation: `
try-except는 프로그램 실행 중 발생하는 에러를 처리하는 예외 처리 구문입니다.
예상 가능한 에러를 미리 대비하여 프로그램이 중단되지 않고 계속 실행되게 합니다.
사용자에게 친절한 에러 메시지를 보여주고 대안을 제시할 수 있습니다.
예: 파일 없음, 네트워크 오류, 잘못된 입력값 등에 대응하여 안정적인 프로그램을 만듭니다.
`,
          starterCode: '# 에러가 나면 프로그램이 멈춤\n# num = int("abc")  # ValueError!\n\n# try-except로 처리\ntry:\n    num = int("abc")\n    print(num)\nexcept:\n    print("숫자로 변환할 수 없습니다.")\n\nprint("프로그램 계속 진행...")  # 멈추지 않음!\n\n# 실용 예시: 사용자 입력\nwhile True:\n    try:\n        age = int(input("나이: "))\n        break  # 성공하면 탈출\n    except:\n        print("숫자를 입력하세요.")\n\nprint(f"입력한 나이: {age}")\n',
          hints: [
            'try: 에러가 날 수 있는 코드',
            'except: 에러 발생 시 실행할 코드',
            '에러가 나도 프로그램이 계속 진행',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '숫자 입력 보호',
              description: 'try-except로 잘못된 입력을 처리하세요.',
              difficulty: 'easy',
              hints: ['try: 에러가 날 수 있는 코드', 'except: 에러 발생 시 대체 코드', 'int("abc")는 ValueError 발생'],
              estimatedMinutes: 3,
              starterCode: '# TODO: try-except로 안전한 숫자 입력\n# int("abc")를 시도하면 에러 발생\n\ntry:\n    num = int("abc")\n    print(f"숫자: {num}")\n# TODO: except로 에러를 처리하세요\n',
              solution: 'try:\n    num = int("abc")\n    print(f"숫자: {num}")\nexcept ValueError:\n    print("숫자로 변환할 수 없습니다.")',
              feedback: {
                perfect: 'try-except를 정확히 사용했어요!',
                good: '에러 처리가 잘 돼요!',
                partial: 'except ValueError: 를 추가하세요.',
                wrong: 'try: 다음 코드에서 에러가 나면 except: 블록이 실행돼요.'
              }
            },
            {
              id: 'c2',
              title: '0 나누기 방지',
              description: '0으로 나누기 에러를 처리하세요.',
              difficulty: 'easy',
              hints: ['ZeroDivisionError가 발생', 'except ZeroDivisionError:', '에러 메시지를 친절하게'],
              estimatedMinutes: 3,
              starterCode: '# TODO: 0으로 나누기 에러 처리\na = 10\nb = 0\n\n# try-except로 감싸세요\nresult = a / b\nprint(f"결과: {result}")\n',
              solution: 'a = 10\nb = 0\n\ntry:\n    result = a / b\n    print(f"결과: {result}")\nexcept ZeroDivisionError:\n    print("0으로 나눌 수 없습니다!")',
              feedback: {
                perfect: '0 나누기 처리를 정확히 했어요!',
                good: '에러를 잘 잡았어요!',
                partial: 'ZeroDivisionError를 except에 넣으세요.',
                wrong: 'try: result = a / b 후 except ZeroDivisionError: 로 처리하세요.'
              }
            },
            {
              id: 'c3',
              title: '안전한 숫자 입력 함수',
              description: '유효한 숫자를 입력할 때까지 반복하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['while True로 반복', 'try-except 안에서 break', '올바른 입력이면 반환'],
              estimatedMinutes: 5,
              starterCode: '# 안전한 입력 함수\ndef safe_input(prompt):\n    """숫자를 입력할 때까지 반복"""\n    # TODO: while + try-except로 구현\n    pass\n\nnum = safe_input("숫자를 입력하세요: ")\nprint(f"입력한 숫자: {num}")\n',
              solution: 'def safe_input(prompt):\n    while True:\n        try:\n            return int(input(prompt))\n        except ValueError:\n            print("올바른 숫자를 입력하세요.")\n\nnum = safe_input("숫자를 입력하세요: ")\nprint(f"입력한 숫자: {num}")',
              feedback: {
                perfect: 'while + try-except 조합을 완벽히 이해했어요!',
                good: '안전한 입력이 잘 돼요!',
                partial: 'while True 안에 try-except를 넣으세요.',
                wrong: 'while True: try: return int(input()) except: 메시지 출력 반복'
              }
            },
            {
              id: 'c4',
              title: '리스트 인덱스 보호',
              description: 'IndexError를 처리하여 안전하게 리스트에 접근하세요.',
              difficulty: 'medium',
              hints: ['리스트 범위 밖 접근 시 IndexError', 'except IndexError:', '안전한 접근 함수를 만드세요'],
              estimatedMinutes: 6,
              starterCode: 'fruits = ["사과", "바나나", "포도"]\n\n# TODO: 안전한 리스트 접근 함수\ndef safe_get(lst, index):\n    """인덱스가 범위 밖이면 None 반환"""\n    # TODO\n    pass\n\nprint(safe_get(fruits, 0))   # 사과\nprint(safe_get(fruits, 5))   # None\nprint(safe_get(fruits, -1))  # 포도\n',
              solution: 'fruits = ["사과", "바나나", "포도"]\n\ndef safe_get(lst, index):\n    try:\n        return lst[index]\n    except IndexError:\n        return None\n\nprint(safe_get(fruits, 0))\nprint(safe_get(fruits, 5))\nprint(safe_get(fruits, -1))',
              feedback: {
                perfect: 'IndexError 처리를 완벽히 이해했어요!',
                good: '안전한 접근 함수가 잘 돼요!',
                partial: 'try-except IndexError를 사용하세요.',
                wrong: 'try: return lst[index] except IndexError: return None'
              }
            },
            {
              id: 'c5',
              title: '계산기에 에러 처리 추가',
              description: '기존 계산기에 다양한 에러 처리를 추가하세요.',
              difficulty: 'hard',
              hints: ['ValueError: 숫자가 아닌 입력', 'ZeroDivisionError: 0으로 나누기', '여러 except를 사용'],
              estimatedMinutes: 8,
              starterCode: '# 에러 처리가 있는 계산기\ndef calculator():\n    # TODO: 에러 처리를 포함한 계산기\n    # 숫자 입력 에러, 0 나누기 에러 등 처리\n    pass\n\ncalculator()\n',
              solution: 'def calculator():\n    try:\n        a = float(input("첫 번째 숫자: "))\n        op = input("연산자 (+,-,*,/): ")\n        b = float(input("두 번째 숫자: "))\n        \n        if op == "+":\n            result = a + b\n        elif op == "-":\n            result = a - b\n        elif op == "*":\n            result = a * b\n        elif op == "/":\n            result = a / b\n        else:\n            print("잘못된 연산자입니다.")\n            return\n        print(f"결과: {result}")\n    except ValueError:\n        print("올바른 숫자를 입력하세요.")\n    except ZeroDivisionError:\n        print("0으로 나눌 수 없습니다.")\n\ncalculator()',
              feedback: {
                perfect: '여러 에러를 완벽하게 처리했어요!',
                good: '계산기가 안전해졌어요!',
                partial: 'ValueError와 ZeroDivisionError 모두 처리하세요.',
                wrong: 'try 안에 계산 코드를 넣고 except로 각 에러를 처리하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-3',
          title: '특정 에러 처리',
          description: '에러 종류별로 다르게 처리해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '에러 종류별 처리',
          conceptExplanation: `
에러 종류별로 다른 처리를 하면 더 정교한 프로그램을 만들 수 있습니다.
여러 except 블록으로 각 예외 타입에 맞는 대응을 정의합니다.
일반적인 Exception보다 구체적인 예외를 먼저 처리하는 것이 좋습니다.
예: ValueError는 재입력 요청, FileNotFoundError는 파일 생성, TypeError는 타입 변환 등으로 대응합니다.
`,
          starterCode: 'try:\n    x = int(input("숫자: "))\n    result = 10 / x\n    print(f"결과: {result}")\n\nexcept ValueError:\n    print("유효한 숫자를 입력하세요.")\n\nexcept ZeroDivisionError:\n    print("0으로 나눌 수 없습니다.")\n\nexcept Exception as e:\n    print(f"알 수 없는 에러: {e}")\n',
          hints: [
            'except 에러타입: 으로 특정 에러 처리',
            '여러 except를 사용 가능',
            'Exception은 모든 에러의 부모',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'ValueError와 TypeError 구분',
              description: '에러 종류에 따라 다른 메시지를 출력하세요.',
              difficulty: 'easy',
              hints: ['except ValueError: 따로', 'except TypeError: 따로', '각각 다른 메시지 출력'],
              estimatedMinutes: 3,
              starterCode: '# TODO: 에러 종류별 처리\ndef convert(value):\n    try:\n        result = int(value)\n        return result\n    # TODO: ValueError와 TypeError를 다르게 처리\n    except:\n        print("변환 실패")\n\nprint(convert("123"))    # 123\nprint(convert("abc"))    # ValueError\nprint(convert(None))     # TypeError\n',
              solution: 'def convert(value):\n    try:\n        result = int(value)\n        return result\n    except ValueError:\n        print("숫자 형식이 아닙니다.")\n        return None\n    except TypeError:\n        print("변환할 수 없는 타입입니다.")\n        return None\n\nprint(convert("123"))\nprint(convert("abc"))\nprint(convert(None))',
              feedback: {
                perfect: '에러 종류별 처리를 완벽히 이해했어요!',
                good: '각 에러를 잘 구분했어요!',
                partial: 'except TypeError: 도 추가하세요.',
                wrong: 'except ValueError: 와 except TypeError: 를 따로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '에러 메시지 출력 (as e)',
              description: 'except에서 에러 메시지를 변수로 받으세요.',
              difficulty: 'easy',
              hints: ['except ValueError as e:', 'e에 에러 메시지가 저장됨', 'print(f"에러: {e}")'],
              estimatedMinutes: 3,
              starterCode: '# TODO: as e로 에러 메시지 받기\ndef divide(a, b):\n    try:\n        return a / b\n    # TODO: except로 에러 메시지를 출력하세요\n    except:\n        print("에러 발생")\n        return None\n\nprint(divide(10, 0))\nprint(divide("a", 2))\n',
              solution: 'def divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError as e:\n        print(f"나누기 에러: {e}")\n        return None\n    except TypeError as e:\n        print(f"타입 에러: {e}")\n        return None\n\nprint(divide(10, 0))\nprint(divide("a", 2))',
              feedback: {
                perfect: 'as e로 에러 메시지를 완벽히 활용했어요!',
                good: '에러 메시지 출력이 좋아요!',
                partial: 'except 에러타입 as e: 형태로 작성하세요.',
                wrong: 'except ZeroDivisionError as e: 에서 e가 에러 메시지를 담고 있어요.'
              }
            },
            {
              id: 'c3',
              title: '여러 에러 한번에 처리',
              description: '튜플로 여러 에러를 하나의 except에서 처리하세요.',
              difficulty: 'medium',
              hints: ['except (ValueError, TypeError):', '괄호로 여러 에러 묶기', '공통 처리가 필요할 때 사용'],
              estimatedMinutes: 5,
              starterCode: '# TODO: 여러 에러를 한번에 처리\ndef safe_calc(a, b, op):\n    try:\n        a, b = float(a), float(b)\n        if op == "+": return a + b\n        elif op == "-": return a - b\n        elif op == "*": return a * b\n        elif op == "/": return a / b\n    # TODO: ValueError, TypeError, ZeroDivisionError를 처리\n    except:\n        return "에러"\n\nprint(safe_calc(10, 3, "+"))\nprint(safe_calc("abc", 3, "+"))\nprint(safe_calc(10, 0, "/"))\n',
              solution: 'def safe_calc(a, b, op):\n    try:\n        a, b = float(a), float(b)\n        if op == "+": return a + b\n        elif op == "-": return a - b\n        elif op == "*": return a * b\n        elif op == "/": return a / b\n    except (ValueError, TypeError) as e:\n        return f"입력 오류: {e}"\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없습니다"\n\nprint(safe_calc(10, 3, "+"))\nprint(safe_calc("abc", 3, "+"))\nprint(safe_calc(10, 0, "/"))',
              feedback: {
                perfect: '여러 에러를 효율적으로 처리했어요!',
                good: '에러 그룹 처리가 잘 돼요!',
                partial: '(ValueError, TypeError) 튜플로 묶으세요.',
                wrong: 'except (에러1, 에러2) as e: 형태로 여러 에러를 한번에 처리하세요.'
              }
            },
            {
              id: 'c4',
              title: '딕셔너리 KeyError 처리',
              description: '딕셔너리에서 없는 키 접근 에러를 처리하세요.',
              difficulty: 'medium',
              hints: ['딕셔너리[없는키]는 KeyError', 'except KeyError:', '.get() 메서드도 대안'],
              estimatedMinutes: 6,
              starterCode: 'students = {\n    "철수": {"score": 85, "grade": "B"},\n    "영희": {"score": 95, "grade": "A"}\n}\n\ndef get_student_info(name, field):\n    """학생 정보를 안전하게 가져오기"""\n    # TODO: KeyError 처리\n    pass\n\nprint(get_student_info("철수", "score"))    # 85\nprint(get_student_info("민수", "score"))    # 에러 처리\nprint(get_student_info("철수", "email"))    # 에러 처리\n',
              solution: 'students = {\n    "철수": {"score": 85, "grade": "B"},\n    "영희": {"score": 95, "grade": "A"}\n}\n\ndef get_student_info(name, field):\n    try:\n        return students[name][field]\n    except KeyError as e:\n        print(f"찾을 수 없음: {e}")\n        return None\n\nprint(get_student_info("철수", "score"))\nprint(get_student_info("민수", "score"))\nprint(get_student_info("철수", "email"))',
              feedback: {
                perfect: 'KeyError 처리를 완벽히 이해했어요!',
                good: '딕셔너리 안전 접근이 잘 돼요!',
                partial: 'except KeyError as e: 를 사용하세요.',
                wrong: 'try: students[name][field] except KeyError: 로 처리하세요.'
              }
            },
            {
              id: 'c5',
              title: '파일 + 변환 에러 종합',
              description: '파일 읽기와 데이터 변환에서 발생하는 다양한 에러를 처리하세요.',
              difficulty: 'hard',
              hints: ['FileNotFoundError: 파일 없음', 'ValueError: 숫자 변환 실패', '각 에러에 적절한 메시지'],
              estimatedMinutes: 8,
              starterCode: 'def read_numbers(filename):\n    """파일에서 숫자 리스트를 읽어 합계와 평균 반환"""\n    # TODO: FileNotFoundError, ValueError 등 처리\n    pass\n\n# 정상 파일 테스트\nwith open("nums.txt", "w") as f:\n    f.write("10\n20\n30\n")\n\nprint(read_numbers("nums.txt"))     # 정상\nprint(read_numbers("없는파일.txt"))   # FileNotFoundError\n\n# 잘못된 데이터 테스트\nwith open("bad.txt", "w") as f:\n    f.write("10\nabc\n30\n")\nprint(read_numbers("bad.txt"))       # ValueError\n',
              solution: 'def read_numbers(filename):\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            numbers = [int(line.strip()) for line in f if line.strip()]\n        total = sum(numbers)\n        avg = total / len(numbers)\n        return {"합계": total, "평균": round(avg, 1)}\n    except FileNotFoundError:\n        return f"파일 없음: {filename}"\n    except ValueError:\n        return "숫자가 아닌 데이터가 포함되어 있습니다"\n    except ZeroDivisionError:\n        return "파일이 비어있습니다"\n\nwith open("nums.txt", "w") as f:\n    f.write("10\n20\n30\n")\n\nprint(read_numbers("nums.txt"))\nprint(read_numbers("없는파일.txt"))\n\nwith open("bad.txt", "w") as f:\n    f.write("10\nabc\n30\n")\nprint(read_numbers("bad.txt"))',
              feedback: {
                perfect: '종합적인 에러 처리를 완벽하게 했어요!',
                good: '다양한 에러를 잘 처리했어요!',
                partial: 'FileNotFoundError와 ValueError 모두 처리하세요.',
                wrong: '파일 작업은 FileNotFoundError, 숫자 변환은 ValueError로 처리하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-4',
          title: 'else와 finally',
          description: '에러 없을 때와 항상 실행할 코드',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'else, finally',
          conceptExplanation: `
else 블록은 예외가 발생하지 않았을 때, finally는 항상 실행됩니다.
finally는 파일 닫기, 연결 종료 등 반드시 실행해야 하는 정리 작업에 사용합니다.
try-except-else-finally 조합으로 완벽한 예외 처리가 가능합니다.
예: 성공 시 로그 기록(else), 항상 리소스 정리(finally) 등에 활용됩니다.
`,
          starterCode: 'try:\n    num = int(input("숫자: "))\n    result = 100 / num\n\nexcept ValueError:\n    print("숫자가 아닙니다.")\n\nexcept ZeroDivisionError:\n    print("0으로 나눌 수 없습니다.")\n\nelse:\n    # 에러가 없을 때만 실행\n    print(f"결과: {result}")\n\nfinally:\n    # 에러 유무와 관계없이 항상 실행\n    print("프로그램 종료")\n',
          hints: [
            'else: 에러 없이 성공했을 때',
            'finally: 에러 유무와 관계없이 항상',
            'finally는 파일 닫기 등에 유용',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'else 블록 사용',
              description: 'try-except-else 구조를 사용하세요.',
              difficulty: 'easy',
              hints: ['else: 에러 없을 때 실행', 'try가 성공하면 else 실행', 'except와 else 중 하나만 실행'],
              estimatedMinutes: 3,
              starterCode: '# TODO: try-except-else 사용\nnum_str = "42"\n\ntry:\n    num = int(num_str)\nexcept ValueError:\n    print("변환 실패!")\n# TODO: else 블록 추가\n# 성공하면 "변환 성공: 42" 출력\n',
              solution: 'num_str = "42"\n\ntry:\n    num = int(num_str)\nexcept ValueError:\n    print("변환 실패!")\nelse:\n    print(f"변환 성공: {num}")',
              feedback: {
                perfect: 'else 블록을 정확히 사용했어요!',
                good: '성공/실패 분리가 잘 돼요!',
                partial: 'else: 블록을 except 다음에 추가하세요.',
                wrong: 'except 다음에 else: 를 추가하면 에러 없을 때 실행돼요.'
              }
            },
            {
              id: 'c2',
              title: 'finally 블록 사용',
              description: 'finally로 항상 실행되는 코드를 작성하세요.',
              difficulty: 'easy',
              hints: ['finally: 항상 실행', '에러 유무와 무관하게 실행', '정리(cleanup) 작업에 사용'],
              estimatedMinutes: 3,
              starterCode: '# TODO: try-except-finally 사용\ndef divide(a, b):\n    try:\n        result = a / b\n        print(f"결과: {result}")\n    except ZeroDivisionError:\n        print("0으로 나눌 수 없습니다")\n    # TODO: finally로 항상 "계산 완료" 출력\n\ndivide(10, 3)\nprint("---")\ndivide(10, 0)\n',
              solution: 'def divide(a, b):\n    try:\n        result = a / b\n        print(f"결과: {result}")\n    except ZeroDivisionError:\n        print("0으로 나눌 수 없습니다")\n    finally:\n        print("계산 완료")\n\ndivide(10, 3)\nprint("---")\ndivide(10, 0)',
              feedback: {
                perfect: 'finally 블록을 정확히 사용했어요!',
                good: '항상 실행되는 코드가 잘 돼요!',
                partial: 'finally: 블록을 추가하세요.',
                wrong: 'finally: 는 에러 유무와 관계없이 항상 실행돼요.'
              }
            },
            {
              id: 'c3',
              title: 'try-except-else-finally 완성',
              description: '4가지 블록을 모두 사용한 코드를 작성하세요.',
              difficulty: 'medium',
              hints: ['try: 시도할 코드', 'except: 에러 시', 'else: 성공 시', 'finally: 항상'],
              estimatedMinutes: 5,
              starterCode: '# TODO: 4블록 모두 사용\ndef safe_divide(a, b):\n    # try-except-else-finally를 모두 사용하세요\n    pass\n\nprint("=== 정상 ===")\nsafe_divide(10, 3)\nprint("\n=== 에러 ===")\nsafe_divide(10, 0)\n',
              solution: 'def safe_divide(a, b):\n    print(f"계산: {a} / {b}")\n    try:\n        result = a / b\n    except ZeroDivisionError:\n        print("에러: 0으로 나눌 수 없습니다")\n    else:\n        print(f"결과: {result:.2f}")\n    finally:\n        print("--- 작업 완료 ---")\n\nprint("=== 정상 ===")\nsafe_divide(10, 3)\nprint("\n=== 에러 ===")\nsafe_divide(10, 0)',
              feedback: {
                perfect: '4블록 구조를 완벽히 이해했어요!',
                good: '모든 블록이 잘 작동해요!',
                partial: 'else와 finally를 모두 추가하세요.',
                wrong: 'try-except-else-finally 순서로 4개 블록을 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: 'finally로 파일 닫기',
              description: 'finally로 파일을 안전하게 닫으세요.',
              difficulty: 'medium',
              hints: ['try에서 파일 열기', 'finally에서 파일 닫기', 'with문이 더 편리하지만 원리 이해'],
              estimatedMinutes: 6,
              starterCode: '# finally로 파일 안전 닫기 (with문 없이)\nwith open("test_finally.txt", "w") as f:\n    f.write("테스트 데이터\n")\n\n# TODO: try-finally로 파일 안전하게 읽기\nf = None\ntry:\n    f = open("test_finally.txt", "r", encoding="utf-8")\n    content = f.read()\n    print(content)\n# TODO: finally로 f.close()\n',
              solution: 'with open("test_finally.txt", "w") as f:\n    f.write("테스트 데이터\n")\n\nf = None\ntry:\n    f = open("test_finally.txt", "r", encoding="utf-8")\n    content = f.read()\n    print(content)\nexcept FileNotFoundError:\n    print("파일을 찾을 수 없습니다")\nfinally:\n    if f:\n        f.close()\n        print("파일이 안전하게 닫혔습니다")',
              feedback: {
                perfect: 'finally로 리소스 정리를 완벽히 이해했어요!',
                good: '파일 닫기가 안전해요!',
                partial: 'finally에서 f.close()를 호출하세요.',
                wrong: 'finally: if f: f.close() 로 파일을 항상 닫으세요.'
              }
            },
            {
              id: 'c5',
              title: '종합: 안전한 데이터 처리',
              description: 'try-except-else-finally로 데이터 파이프라인을 만드세요.',
              difficulty: 'hard',
              hints: ['try: 데이터 읽기/변환', 'except: 에러별 처리', 'else: 성공 시 결과 저장', 'finally: 로그 기록'],
              estimatedMinutes: 8,
              starterCode: 'import json\n\ndef process_data(filename):\n    """데이터 파일을 읽고 처리하는 파이프라인"""\n    # TODO: try-except-else-finally로 구현\n    # try: 파일 읽기 + JSON 파싱\n    # except: 에러 처리\n    # else: 성공 시 결과 출력\n    # finally: 처리 완료 로그\n    pass\n\n# 정상 테스트\nwith open("good.json", "w") as f:\n    json.dump({"name": "테스트", "value": 42}, f)\nprocess_data("good.json")\n\n# 에러 테스트\nprocess_data("없는파일.json")\n',
              solution: 'import json\n\ndef process_data(filename):\n    print(f"\n처리 시작: {filename}")\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            data = json.load(f)\n    except FileNotFoundError:\n        print(f"에러: 파일 없음 - {filename}")\n    except json.JSONDecodeError:\n        print(f"에러: JSON 형식 오류 - {filename}")\n    else:\n        print(f"성공! 데이터: {data}")\n    finally:\n        print(f"처리 완료: {filename}")\n\nwith open("good.json", "w") as f:\n    json.dump({"name": "테스트", "value": 42}, f)\nprocess_data("good.json")\nprocess_data("없는파일.json")',
              feedback: {
                perfect: '데이터 파이프라인을 완벽하게 만들었어요!',
                good: '에러 처리 흐름이 좋아요!',
                partial: 'else와 finally를 모두 활용하세요.',
                wrong: 'try-except-else-finally 4블록으로 데이터 처리를 구현하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-5',
          title: '에러 발생시키기 (raise)',
          description: '직접 에러를 발생시켜요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'raise 문',
          conceptExplanation: `
raise문은 개발자가 의도적으로 예외를 발생시키는 기능입니다.
잘못된 입력이나 논리적 오류를 명시적으로 알리고, 함수 사용자에게 문제를 전달합니다.
커스텀 예외 클래스를 만들어 도메인 특화 에러를 정의할 수도 있습니다.
예: 잔액 부족, 권한 없음, 유효하지 않은 데이터 등 비즈니스 규칙 위반 시 사용됩니다.
`,
          starterCode: 'def set_age(age):\n    if age < 0:\n        raise ValueError("나이는 음수가 될 수 없습니다")\n    if age > 150:\n        raise ValueError("나이가 너무 큽니다")\n    return age\n\n# 사용\ntry:\n    age = set_age(-5)\nexcept ValueError as e:\n    print(f"에러: {e}")\n\n# 정상 케이스\ntry:\n    age = set_age(25)\n    print(f"설정된 나이: {age}")\nexcept ValueError as e:\n    print(f"에러: {e}")\n',
          hints: [
            'raise 에러타입("메시지")로 발생',
            '잘못된 입력을 거부할 때 사용',
            '함수에서 입력 검증에 유용',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'ValueError 발생시키기',
              description: 'raise로 직접 에러를 발생시키세요.',
              difficulty: 'easy',
              hints: ['raise ValueError("메시지")', '조건이 맞지 않을 때 발생', 'try-except로 잡을 수 있음'],
              estimatedMinutes: 3,
              starterCode: '# TODO: 나이가 음수면 에러 발생\ndef set_age(age):\n    if age < 0:\n        # TODO: raise ValueError 사용\n        pass\n    return age\n\ntry:\n    print(set_age(25))\n    print(set_age(-5))\nexcept ValueError as e:\n    print(f"에러: {e}")\n',
              solution: 'def set_age(age):\n    if age < 0:\n        raise ValueError("나이는 음수가 될 수 없습니다")\n    return age\n\ntry:\n    print(set_age(25))\n    print(set_age(-5))\nexcept ValueError as e:\n    print(f"에러: {e}")',
              feedback: {
                perfect: 'raise를 정확히 사용했어요!',
                good: '에러 발생이 잘 돼요!',
                partial: 'raise ValueError("메시지")로 에러를 발생시키세요.',
                wrong: 'raise ValueError("설명") 으로 직접 에러를 만들 수 있어요.'
              }
            },
            {
              id: 'c2',
              title: '범위 검증 함수',
              description: '값이 범위를 벗어나면 에러를 발생시키세요.',
              difficulty: 'easy',
              hints: ['최소/최대 범위 체크', '각 조건에 맞는 에러 메시지', 'raise로 알려주기'],
              estimatedMinutes: 4,
              starterCode: '# TODO: 점수가 0~100 범위인지 검증\ndef validate_score(score):\n    # 0 미만이면 ValueError\n    # 100 초과면 ValueError\n    # 정상이면 score 반환\n    pass\n\nfor s in [85, -10, 105, 0, 100]:\n    try:\n        result = validate_score(s)\n        print(f"{s}점: OK")\n    except ValueError as e:\n        print(f"{s}점: {e}")\n',
              solution: 'def validate_score(score):\n    if score < 0:\n        raise ValueError("점수는 0 이상이어야 합니다")\n    if score > 100:\n        raise ValueError("점수는 100 이하여야 합니다")\n    return score\n\nfor s in [85, -10, 105, 0, 100]:\n    try:\n        result = validate_score(s)\n        print(f"{s}점: OK")\n    except ValueError as e:\n        print(f"{s}점: {e}")',
              feedback: {
                perfect: '범위 검증을 완벽하게 구현했어요!',
                good: '검증 로직이 정확해요!',
                partial: '0 미만과 100 초과를 모두 체크하세요.',
                wrong: 'if score < 0: raise ValueError(...), if score > 100: raise ValueError(...)'
              }
            },
            {
              id: 'c3',
              title: '비밀번호 검증',
              description: '비밀번호 규칙을 위반하면 에러를 발생시키세요.',
              difficulty: 'medium',
              hints: ['길이, 숫자 포함 등 체크', '각 규칙 위반 시 다른 메시지', 'raise로 명확한 피드백'],
              estimatedMinutes: 5,
              starterCode: 'def validate_password(pw):\n    """비밀번호 검증\n    - 8자 이상\n    - 숫자 포함\n    위반 시 ValueError 발생"""\n    # TODO\n    pass\n\nfor pw in ["abc", "abcdefgh", "abc12345"]:\n    try:\n        validate_password(pw)\n        print(f"\"{pw}\": 유효한 비밀번호")\n    except ValueError as e:\n        print(f"\"{pw}\": {e}")\n',
              solution: 'def validate_password(pw):\n    if len(pw) < 8:\n        raise ValueError("비밀번호는 8자 이상이어야 합니다")\n    if not any(c.isdigit() for c in pw):\n        raise ValueError("비밀번호에 숫자가 포함되어야 합니다")\n    return True\n\nfor pw in ["abc", "abcdefgh", "abc12345"]:\n    try:\n        validate_password(pw)\n        print(f"\"{pw}\": 유효한 비밀번호")\n    except ValueError as e:\n        print(f"\"{pw}\": {e}")',
              feedback: {
                perfect: '비밀번호 검증을 완벽하게 구현했어요!',
                good: '검증 규칙이 잘 작동해요!',
                partial: '숫자 포함 체크도 추가하세요.',
                wrong: 'len(pw) < 8 과 숫자 포함을 각각 raise로 체크하세요.'
              }
            },
            {
              id: 'c4',
              title: '은행 계좌 출금',
              description: '잔액 부족 시 에러를 발생시키세요.',
              difficulty: 'medium',
              hints: ['잔액 < 출금액이면 에러', '출금액이 음수여도 에러', '정상이면 잔액 업데이트'],
              estimatedMinutes: 6,
              starterCode: 'class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        """출금: 잔액 부족 또는 음수 금액이면 에러"""\n        # TODO: raise 사용\n        pass\n\naccount = BankAccount(10000)\nfor amount in [3000, 5000, 8000, -1000]:\n    try:\n        account.withdraw(amount)\n        print(f"{amount}원 출금 성공 (잔액: {account.balance}원)")\n    except ValueError as e:\n        print(f"{amount}원 출금 실패: {e}")\n',
              solution: 'class BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        if amount < 0:\n            raise ValueError("출금액은 양수여야 합니다")\n        if amount > self.balance:\n            raise ValueError(f"잔액 부족 (잔액: {self.balance}원)")\n        self.balance -= amount\n\naccount = BankAccount(10000)\nfor amount in [3000, 5000, 8000, -1000]:\n    try:\n        account.withdraw(amount)\n        print(f"{amount}원 출금 성공 (잔액: {account.balance}원)")\n    except ValueError as e:\n        print(f"{amount}원 출금 실패: {e}")',
              feedback: {
                perfect: '은행 계좌 로직을 완벽하게 구현했어요!',
                good: '출금 검증이 잘 돼요!',
                partial: '음수 금액과 잔액 부족을 모두 체크하세요.',
                wrong: 'amount < 0과 amount > balance 각각에 raise ValueError를 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '데이터 검증 시스템',
              description: '여러 필드를 검증하고 모든 에러를 모아서 보고하세요.',
              difficulty: 'hard',
              hints: ['각 필드를 개별 검증', '에러를 리스트에 모으기', '모든 검증 후 한번에 보고'],
              estimatedMinutes: 8,
              starterCode: 'def validate_user(data):\n    """사용자 데이터 검증\n    필수: name(문자열), age(1-150), email(@포함)"""\n    errors = []\n    # TODO: 각 필드를 검증하고 에러를 errors에 추가\n    # 에러가 있으면 ValueError 발생\n    pass\n\ntest_data = [\n    {"name": "철수", "age": 14, "email": "cs@mail.com"},\n    {"name": "", "age": -5, "email": "invalid"},\n    {"name": "영희", "age": 200, "email": "yh@mail.com"}\n]\n\nfor data in test_data:\n    try:\n        validate_user(data)\n        print(f"{data["name"] or "???"}: 유효")\n    except ValueError as e:\n        print(f"검증 실패: {e}")\n',
              solution: 'def validate_user(data):\n    errors = []\n    if not data.get("name"):\n        errors.append("이름이 비어있습니다")\n    age = data.get("age", 0)\n    if not (1 <= age <= 150):\n        errors.append(f"나이가 올바르지 않습니다: {age}")\n    email = data.get("email", "")\n    if "@" not in email:\n        errors.append(f"이메일 형식이 올바르지 않습니다: {email}")\n    if errors:\n        raise ValueError(", ".join(errors))\n    return True\n\ntest_data = [\n    {"name": "철수", "age": 14, "email": "cs@mail.com"},\n    {"name": "", "age": -5, "email": "invalid"},\n    {"name": "영희", "age": 200, "email": "yh@mail.com"}\n]\n\nfor data in test_data:\n    try:\n        validate_user(data)\n        print(f"{data["name"] or "???"}: 유효")\n    except ValueError as e:\n        print(f"검증 실패: {e}")',
              feedback: {
                perfect: '데이터 검증 시스템을 완벽하게 만들었어요!',
                good: '모든 필드 검증이 잘 돼요!',
                partial: '에러를 리스트에 모아 한번에 raise하세요.',
                wrong: '각 필드를 검증해 errors 리스트에 추가하고, 에러가 있으면 raise하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-6',
          title: '사용자 정의 예외',
          description: '나만의 에러 클래스를 만들어요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '커스텀 예외',
          conceptExplanation: `
커스텀 예외는 프로젝트 특화된 에러를 정의하는 것입니다.
Exception 클래스를 상속하여 의미있는 이름의 예외를 만들 수 있습니다.
도메인 로직에 맞는 예외로 코드 가독성과 유지보수성이 높아집니다.
예: InsufficientBalanceError, InvalidUserError, APITimeoutError 등 비즈니스 규칙 표현에 사용됩니다.
`,
          starterCode: '# 사용자 정의 예외\nclass NegativeScoreError(Exception):\n    pass\n\nclass OverScoreError(Exception):\n    pass\n\ndef validate_score(score):\n    if score < 0:\n        raise NegativeScoreError("점수는 음수가 될 수 없습니다")\n    if score > 100:\n        raise OverScoreError("점수는 100을 초과할 수 없습니다")\n    return score\n\n# 사용\ntry:\n    score = validate_score(-10)\nexcept NegativeScoreError as e:\n    print(f"음수 에러: {e}")\nexcept OverScoreError as e:\n    print(f"초과 에러: {e}")\n',
          hints: [
            'Exception을 상속받아 만들어요',
            '의미 있는 에러 이름을 지어요',
            '복잡한 프로그램에서 유용해요',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '커스텀 예외 클래스 만들기',
              description: 'Exception을 상속받아 나만의 예외를 만드세요.',
              difficulty: 'easy',
              hints: ['class MyError(Exception): pass', 'Exception을 상속받아요', 'raise MyError("메시지")로 발생'],
              estimatedMinutes: 3,
              starterCode: '# TODO: 커스텀 예외 클래스 만들기\n# InvalidAgeError 만들기\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        # TODO: InvalidAgeError 발생\n        pass\n    return age\n\ntry:\n    print(set_age(25))\n    print(set_age(-5))\nexcept Exception as e:\n    print(f"에러: {type(e).__name__}: {e}")\n',
              solution: 'class InvalidAgeError(Exception):\n    pass\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise InvalidAgeError(f"유효하지 않은 나이: {age}")\n    return age\n\ntry:\n    print(set_age(25))\n    print(set_age(-5))\nexcept InvalidAgeError as e:\n    print(f"에러: {e}")',
              feedback: {
                perfect: '커스텀 예외를 정확히 만들었어요!',
                good: '예외 클래스가 잘 작동해요!',
                partial: 'class InvalidAgeError(Exception): pass 를 먼저 정의하세요.',
                wrong: 'class 이름(Exception): pass 로 예외 클래스를 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '여러 커스텀 예외',
              description: '상황에 맞는 여러 예외 클래스를 만드세요.',
              difficulty: 'easy',
              hints: ['각 상황에 맞는 예외 이름', '여러 except로 각각 처리', 'Exception을 상속받아요'],
              estimatedMinutes: 4,
              starterCode: '# TODO: 두 개의 커스텀 예외 만들기\n# NegativeScoreError, OverScoreError\n\ndef validate_score(score):\n    if score < 0:\n        # TODO: NegativeScoreError 발생\n        pass\n    if score > 100:\n        # TODO: OverScoreError 발생\n        pass\n    return score\n\nfor s in [85, -10, 110]:\n    try:\n        validate_score(s)\n        print(f"{s}점: OK")\n    except Exception as e:\n        print(f"{s}점: {type(e).__name__} - {e}")\n',
              solution: 'class NegativeScoreError(Exception):\n    pass\n\nclass OverScoreError(Exception):\n    pass\n\ndef validate_score(score):\n    if score < 0:\n        raise NegativeScoreError(f"음수 점수: {score}")\n    if score > 100:\n        raise OverScoreError(f"100 초과 점수: {score}")\n    return score\n\nfor s in [85, -10, 110]:\n    try:\n        validate_score(s)\n        print(f"{s}점: OK")\n    except NegativeScoreError as e:\n        print(f"{s}점: 음수 에러 - {e}")\n    except OverScoreError as e:\n        print(f"{s}점: 초과 에러 - {e}")',
              feedback: {
                perfect: '여러 커스텀 예외를 완벽히 만들었어요!',
                good: '예외 분류가 정확해요!',
                partial: '두 예외 클래스를 모두 만드세요.',
                wrong: 'class 에러이름(Exception): pass 로 각각 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '예외에 추가 정보 저장',
              description: '커스텀 예외에 상세 정보를 포함하세요.',
              difficulty: 'medium',
              hints: ['__init__으로 추가 속성 저장', 'super().__init__(msg) 호출', '에러 객체에서 정보 꺼내기'],
              estimatedMinutes: 5,
              starterCode: '# TODO: 상세 정보가 있는 커스텀 예외\nclass InsufficientFundsError(Exception):\n    # TODO: balance와 amount 속성 추가\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        # TODO: InsufficientFundsError 발생 (잔액과 출금액 포함)\n        pass\n    return balance - amount\n\ntry:\n    result = withdraw(5000, 8000)\nexcept InsufficientFundsError as e:\n    print(f"에러: {e}")\n    # print(f"잔액: {e.balance}, 필요: {e.amount}")\n',
              solution: 'class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"잔액 부족 (잔액: {balance}원, 출금: {amount}원)")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    result = withdraw(5000, 8000)\nexcept InsufficientFundsError as e:\n    print(f"에러: {e}")\n    print(f"잔액: {e.balance}원, 필요: {e.amount}원")',
              feedback: {
                perfect: '예외에 추가 정보를 완벽히 저장했어요!',
                good: '상세 정보 접근이 잘 돼요!',
                partial: '__init__에서 속성을 저장하세요.',
                wrong: 'class의 __init__에서 self.balance = balance 등으로 저장하세요.'
              }
            },
            {
              id: 'c4',
              title: '예외 계층 구조',
              description: '상위 예외와 하위 예외로 계층을 만드세요.',
              difficulty: 'medium',
              hints: ['기본 예외를 먼저 정의', '하위 예외가 기본을 상속', '상위 예외로 잡으면 하위도 잡힘'],
              estimatedMinutes: 7,
              starterCode: '# TODO: 예외 계층 만들기\n# AppError (기본)\n#   |- ValidationError\n#   |- DatabaseError\n\n# 기본 예외와 하위 예외를 정의하세요\n\ndef process(data):\n    if not data:\n        pass  # ValidationError 발생\n    if data == "db_fail":\n        pass  # DatabaseError 발생\n    return f"처리 완료: {data}"\n\nfor d in ["hello", "", "db_fail"]:\n    try:\n        print(process(d))\n    except Exception as e:\n        print(f"{type(e).__name__}: {e}")\n',
              solution: 'class AppError(Exception):\n    pass\n\nclass ValidationError(AppError):\n    pass\n\nclass DatabaseError(AppError):\n    pass\n\ndef process(data):\n    if not data:\n        raise ValidationError("데이터가 비어있습니다")\n    if data == "db_fail":\n        raise DatabaseError("데이터베이스 연결 실패")\n    return f"처리 완료: {data}"\n\nfor d in ["hello", "", "db_fail"]:\n    try:\n        print(process(d))\n    except AppError as e:\n        print(f"{type(e).__name__}: {e}")',
              feedback: {
                perfect: '예외 계층 구조를 완벽히 이해했어요!',
                good: '상속 관계가 정확해요!',
                partial: 'AppError를 상속받는 하위 예외를 만드세요.',
                wrong: 'class ValidationError(AppError): pass 처럼 상위를 상속받으세요.'
              }
            },
            {
              id: 'c5',
              title: '게임 예외 시스템',
              description: '게임에서 사용할 커스텀 예외 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['GameError 기본 클래스', 'InventoryFullError, InsufficientGoldError 등', '게임 로직에서 예외 활용'],
              estimatedMinutes: 8,
              starterCode: '# TODO: 게임 예외 시스템\n# GameError (기본)\n#   |- InventoryFullError (가방 가득 참)\n#   |- InsufficientGoldError (골드 부족)\n\n# 게임 캐릭터\nclass Player:\n    def __init__(self):\n        self.gold = 100\n        self.inventory = []\n        self.max_items = 3\n    \n    def buy_item(self, item, price):\n        # TODO: 골드 부족, 가방 가득 참 에러 처리\n        pass\n\nplayer = Player()\nitems = [("검", 30), ("방패", 40), ("물약", 20), ("활", 50)]\nfor item, price in items:\n    try:\n        player.buy_item(item, price)\n    except Exception as e:\n        print(f"{type(e).__name__}: {e}")\n',
              solution: 'class GameError(Exception):\n    pass\n\nclass InventoryFullError(GameError):\n    pass\n\nclass InsufficientGoldError(GameError):\n    def __init__(self, gold, price):\n        self.gold = gold\n        self.price = price\n        super().__init__(f"골드 부족 (보유: {gold}, 필요: {price})")\n\nclass Player:\n    def __init__(self):\n        self.gold = 100\n        self.inventory = []\n        self.max_items = 3\n    \n    def buy_item(self, item, price):\n        if len(self.inventory) >= self.max_items:\n            raise InventoryFullError(f"가방이 가득 찼습니다 ({self.max_items}개)")\n        if self.gold < price:\n            raise InsufficientGoldError(self.gold, price)\n        self.gold -= price\n        self.inventory.append(item)\n        print(f"{item} 구매! (잔액: {self.gold}골드)")\n\nplayer = Player()\nitems = [("검", 30), ("방패", 40), ("물약", 20), ("활", 50)]\nfor item, price in items:\n    try:\n        player.buy_item(item, price)\n    except GameError as e:\n        print(f"{type(e).__name__}: {e}")',
              feedback: {
                perfect: '게임 예외 시스템을 완벽하게 만들었어요!',
                good: '예외 활용이 잘 돼요!',
                partial: '가방과 골드 검사를 모두 구현하세요.',
                wrong: '커스텀 예외를 만들고 buy_item에서 raise로 발생시키세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-7',
          title: '파일 처리와 예외',
          description: '파일 작업의 에러를 처리해요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 12,
          concept: '파일 예외 처리',
          conceptExplanation: `
파일 작업은 다양한 에러가 발생할 수 있어 예외 처리가 필수입니다.
FileNotFoundError, PermissionError 등을 처리하여 프로그램 안정성을 높입니다.
try-except-finally로 에러 상황에도 안전하게 대응합니다.
예: 파일 없을 때 생성, 권한 거부 시 안내, 항상 파일 닫기 등에 사용됩니다.
`,
          starterCode: 'def read_file(filename):\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            return f.read()\n    except FileNotFoundError:\n        print(f"파일을 찾을 수 없습니다: {filename}")\n        return None\n    except PermissionError:\n        print(f"파일 접근 권한이 없습니다: {filename}")\n        return None\n    except Exception as e:\n        print(f"파일 읽기 오류: {e}")\n        return None\n\n# 테스트\ncontent = read_file("없는파일.txt")\nif content:\n    print(content)\nelse:\n    print("파일을 읽지 못했습니다.")\n',
          hints: [
            'FileNotFoundError: 파일 없음',
            'PermissionError: 권한 없음',
            '반환값으로 성공 여부 판단',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'FileNotFoundError 처리',
              description: '없는 파일을 읽을 때의 에러를 처리하세요.',
              difficulty: 'easy',
              hints: ['FileNotFoundError: 파일 없음', 'try-except로 감싸기', '파일 없으면 안내 메시지'],
              estimatedMinutes: 3,
              starterCode: '# TODO: 없는 파일 읽기 에러 처리\ndef read_file(filename):\n    # TODO: try-except FileNotFoundError\n    pass\n\nread_file("존재하는파일.txt")  # 없어도 에러 안남\n',
              solution: 'def read_file(filename):\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            return f.read()\n    except FileNotFoundError:\n        print(f"파일을 찾을 수 없습니다: {filename}")\n        return None\n\nresult = read_file("존재하는파일.txt")\nif result is None:\n    print("파일 읽기 실패")',
              feedback: {
                perfect: 'FileNotFoundError 처리를 정확히 했어요!',
                good: '파일 에러 처리가 잘 돼요!',
                partial: 'except FileNotFoundError: 를 추가하세요.',
                wrong: 'try: open(파일) except FileNotFoundError: 메시지 출력'
              }
            },
            {
              id: 'c2',
              title: '파일 쓰기 에러 처리',
              description: '파일 쓰기 시 발생할 수 있는 에러를 처리하세요.',
              difficulty: 'easy',
              hints: ['PermissionError: 권한 없음', 'OSError: 디스크 관련 에러', 'try-except로 안전하게'],
              estimatedMinutes: 4,
              starterCode: '# TODO: 안전한 파일 쓰기 함수\ndef safe_write(filename, content):\n    # TODO: try-except로 에러 처리\n    pass\n\nsafe_write("output.txt", "Hello World!")\nsafe_write("", "에러 테스트")  # 빈 파일명\n',
              solution: 'def safe_write(filename, content):\n    try:\n        with open(filename, "w", encoding="utf-8") as f:\n            f.write(content)\n        print(f"저장 완료: {filename}")\n    except FileNotFoundError:\n        print(f"경로를 찾을 수 없습니다: {filename}")\n    except PermissionError:\n        print(f"쓰기 권한이 없습니다: {filename}")\n    except OSError as e:\n        print(f"파일 쓰기 오류: {e}")\n\nsafe_write("output.txt", "Hello World!")\nsafe_write("", "에러 테스트")',
              feedback: {
                perfect: '파일 쓰기 에러를 완벽히 처리했어요!',
                good: '여러 에러를 잘 처리했어요!',
                partial: 'PermissionError도 처리하세요.',
                wrong: 'except FileNotFoundError, PermissionError, OSError 순으로 처리하세요.'
              }
            },
            {
              id: 'c3',
              title: '파일 없으면 생성하기',
              description: '파일이 없으면 기본 내용으로 생성하세요.',
              difficulty: 'medium',
              hints: ['try로 읽기 시도', 'except로 파일 없으면 생성', '기본 데이터 포함'],
              estimatedMinutes: 5,
              starterCode: 'import json\n\ndef get_config(filename="settings.json"):\n    """설정 파일 로드. 없으면 기본 설정으로 생성"""\n    default = {"theme": "dark", "font_size": 14}\n    # TODO: try-except로 구현\n    pass\n\nconfig = get_config()\nprint(config)\n',
              solution: 'import json\n\ndef get_config(filename="settings.json"):\n    default = {"theme": "dark", "font_size": 14}\n    try:\n        with open(filename, "r", encoding="utf-8") as f:\n            return json.load(f)\n    except FileNotFoundError:\n        print(f"설정 파일 없음. 기본 설정으로 생성합니다.")\n        with open(filename, "w", encoding="utf-8") as f:\n            json.dump(default, f, ensure_ascii=False, indent=2)\n        return default\n\nconfig = get_config()\nprint(config)',
              feedback: {
                perfect: '파일 없으면 생성하는 패턴을 완벽히 구현했어요!',
                good: '기본 설정 생성이 잘 돼요!',
                partial: 'except에서 기본 파일을 생성하세요.',
                wrong: 'except FileNotFoundError에서 기본 설정을 파일에 저장하고 반환하세요.'
              }
            },
            {
              id: 'c4',
              title: '파일 처리 재시도',
              description: '파일 에러 시 재시도 로직을 구현하세요.',
              difficulty: 'medium',
              hints: ['for 루프로 최대 N번 시도', 'try-except 안에서 재시도', '성공하면 break'],
              estimatedMinutes: 6,
              starterCode: 'import time\n\ndef read_with_retry(filename, max_retries=3):\n    """파일 읽기를 최대 N번 재시도"""\n    # TODO: 재시도 로직 구현\n    pass\n\n# 테스트 파일 생성\nwith open("retry_test.txt", "w") as f:\n    f.write("재시도 테스트 성공!")\n\nresult = read_with_retry("retry_test.txt")\nprint(f"결과: {result}")\n\nresult2 = read_with_retry("없는파일.txt")\nprint(f"결과: {result2}")\n',
              solution: 'def read_with_retry(filename, max_retries=3):\n    for attempt in range(1, max_retries + 1):\n        try:\n            with open(filename, "r", encoding="utf-8") as f:\n                content = f.read()\n            print(f"성공! (시도 {attempt}번)")\n            return content\n        except FileNotFoundError:\n            print(f"시도 {attempt}/{max_retries}: 파일 없음")\n        except Exception as e:\n            print(f"시도 {attempt}/{max_retries}: {e}")\n    print("모든 재시도 실패")\n    return None\n\nwith open("retry_test.txt", "w") as f:\n    f.write("재시도 테스트 성공!")\n\nresult = read_with_retry("retry_test.txt")\nprint(f"결과: {result}")\n\nresult2 = read_with_retry("없는파일.txt")\nprint(f"결과: {result2}")',
              feedback: {
                perfect: '재시도 로직을 완벽하게 구현했어요!',
                good: '재시도가 잘 작동해요!',
                partial: 'for 루프로 최대 횟수만큼 시도하세요.',
                wrong: 'for attempt in range(max_retries): try-except 안에서 반복하세요.'
              }
            },
            {
              id: 'c5',
              title: '안전한 파일 매니저',
              description: '모든 파일 작업에 에러 처리가 있는 매니저를 만드세요.',
              difficulty: 'hard',
              hints: ['읽기, 쓰기, 삭제 등 모든 작업', '각 작업에 적절한 에러 처리', '로그 기록 포함'],
              estimatedMinutes: 8,
              starterCode: 'import os\n\nclass FileManager:\n    def read(self, filename):\n        # TODO\n        pass\n    \n    def write(self, filename, content):\n        # TODO\n        pass\n    \n    def delete(self, filename):\n        # TODO\n        pass\n    \n    def copy(self, src, dst):\n        # TODO\n        pass\n\nfm = FileManager()\nfm.write("fm_test.txt", "파일 매니저 테스트")\nprint(fm.read("fm_test.txt"))\nfm.copy("fm_test.txt", "fm_copy.txt")\nfm.delete("fm_test.txt")\n',
              solution: 'import os\n\nclass FileManager:\n    def read(self, filename):\n        try:\n            with open(filename, "r", encoding="utf-8") as f:\n                return f.read()\n        except FileNotFoundError:\n            print(f"[읽기 실패] 파일 없음: {filename}")\n            return None\n    \n    def write(self, filename, content):\n        try:\n            with open(filename, "w", encoding="utf-8") as f:\n                f.write(content)\n            print(f"[쓰기 성공] {filename}")\n        except OSError as e:\n            print(f"[쓰기 실패] {e}")\n    \n    def delete(self, filename):\n        try:\n            os.remove(filename)\n            print(f"[삭제 성공] {filename}")\n        except FileNotFoundError:\n            print(f"[삭제 실패] 파일 없음: {filename}")\n    \n    def copy(self, src, dst):\n        content = self.read(src)\n        if content is not None:\n            self.write(dst, content)\n            print(f"[복사 성공] {src} -> {dst}")\n\nfm = FileManager()\nfm.write("fm_test.txt", "파일 매니저 테스트")\nprint(fm.read("fm_test.txt"))\nfm.copy("fm_test.txt", "fm_copy.txt")\nfm.delete("fm_test.txt")',
              feedback: {
                perfect: '안전한 파일 매니저를 완벽하게 만들었어요!',
                good: '모든 작업에 에러 처리가 잘 돼요!',
                partial: '삭제와 복사도 에러 처리를 추가하세요.',
                wrong: '각 메서드에 try-except를 추가하고 적절한 에러를 처리하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-8',
          title: '디버깅 팁',
          description: '에러를 찾고 고치는 방법',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 50,
          estimatedMinutes: 10,
          concept: '디버깅',
          conceptExplanation: `
디버깅은 코드의 버그를 찾고 수정하는 과정입니다.
print 디버깅, 디버거 사용, 로그 기록 등 다양한 기법이 있습니다.
체계적인 디버깅 능력은 개발 생산성을 크게 높입니다.
예: 에러 원인 추적, 로직 검증, 성능 문제 해결 등 모든 개발 단계에서 필수적입니다.
`,
          hints: [
            '에러 메시지를 자세히 읽으세요',
            'print()로 중간값 확인',
            '문제를 작은 단위로 나눠서 테스트',
            '한 번에 많이 수정하지 말고 조금씩',
          ],
                    challenges: [
          {
            id: 'c1',
            title: 'print 디버깅',
            description: 'print문으로 버그를 찾으세요',
            difficulty: 'easy',
            hints: ['중간 변수 값을 print로 확인', 'f-string으로 변수명과 값을 출력'],
            estimatedMinutes: 3,
            starterCode: 'def average(nums):\n    total = 0\n    for n in nums:\n        total = n  # 버그!\n    return total / len(nums)\n\n# 수정하세요\nresult = average([10, 20, 30])\nprint(result)',
            solution: 'def average(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total / len(nums)\n\nresult = average([10, 20, 30])\nprint(result)  # 20.0',
            feedback: {
              perfect: 'print 디버깅을 완벽하게 했어요!',
              good: '버그를 잘 찾았어요!',
              partial: 'total = n을 total += n으로 수정하세요.',
              wrong: '= 대신 +=로 값을 누적해야 합니다.'
            }
          },
          {
            id: 'c2',
            title: '논리 에러 수정',
            description: '결과가 틀린 코드를 수정하세요',
            difficulty: 'easy',
            hints: ['조건문 논리를 확인', '경계값 테스트를 해보세요'],
            estimatedMinutes: 5,
            starterCode: 'def get_grade(score):\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    return "F"\n\nassert get_grade(95) == "A"\nassert get_grade(85) == "B"\nprint("통과!")',
            solution: 'def get_grade(score):\n    if score >= 90: return "A"\n    if score >= 80: return "B"\n    if score >= 70: return "C"\n    return "F"\n\nassert get_grade(95) == "A"\nassert get_grade(85) == "B"\nprint("통과!")',
            feedback: {
              perfect: '논리 에러를 완벽하게 수정했어요!',
              good: '조건 분석을 잘 했어요!',
              partial: 'if-elif 순서를 큰 것부터 작성하세요.',
              wrong: '조건 범위가 겹치지 않도록 주의하세요.'
            }
          },
          {
            id: 'c3',
            title: 'try-except 에러 처리',
            description: '예외 처리를 추가하세요',
            difficulty: 'medium',
            hints: ['위험한 코드를 try에 넣으세요', '적절한 에러를 except하세요'],
            estimatedMinutes: 7,
            starterCode: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없어요"\n    except TypeError:\n        return "숫자만 가능해요"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide("a", 2))',
            solution: 'def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없어요"\n    except TypeError:\n        return "숫자만 가능해요"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide("a", 2))',
            feedback: {
              perfect: '예외 처리를 완벽하게 구현했어요!',
              good: '에러 유형별 처리를 잘 했어요!',
              partial: '각 에러 타입별로 except를 작성하세요.',
              wrong: '구체적 에러를 먼저 catch하세요.'
            }
          },
          {
            id: 'c4',
            title: 'assert로 단위 테스트',
            description: 'assert문으로 함수를 검증하세요',
            difficulty: 'medium',
            hints: ['assert 조건, "메시지"', '예상값과 실제값을 비교'],
            estimatedMinutes: 10,
            starterCode: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nassert factorial(0) == 1\nassert factorial(1) == 1\nassert factorial(5) == 120\nassert factorial(3) == 6\nprint("모든 테스트 통과!")',
            solution: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nassert factorial(0) == 1\nassert factorial(1) == 1\nassert factorial(5) == 120\nassert factorial(3) == 6\nprint("모든 테스트 통과!")',
            feedback: {
              perfect: 'assert 테스트를 완벽하게 작성했어요!',
              good: '단위 테스트를 잘 이해했어요!',
              partial: 'assert 예상값 == 실제값으로 검증하세요.',
              wrong: 'assert는 False면 AssertionError를 발생시킵니다.'
            }
          },
          {
            id: 'c5',
            title: '체계적 디버깅',
            description: '단계별로 버그를 찾아 수정하세요',
            difficulty: 'hard',
            hints: ['재현 > 원인파악 > 수정 > 검증', '경계값과 예외 케이스 테스트'],
            estimatedMinutes: 15,
            starterCode: 'def fizzbuzz(n):\n    result = []\n    for i in range(1, n+1):\n        if i % 3 == 0 and i % 5 == 0:\n            result.append("FizzBuzz")\n        elif i % 3 == 0:\n            result.append("Fizz")\n        elif i % 5 == 0:\n            result.append("Buzz")\n        else:\n            result.append(str(i))\n    return result\n\nassert fizzbuzz(15)[14] == "FizzBuzz"\nprint("통과!")',
            solution: 'def fizzbuzz(n):\n    result = []\n    for i in range(1, n+1):\n        if i % 3 == 0 and i % 5 == 0:\n            result.append("FizzBuzz")\n        elif i % 3 == 0:\n            result.append("Fizz")\n        elif i % 5 == 0:\n            result.append("Buzz")\n        else:\n            result.append(str(i))\n    return result\n\nassert fizzbuzz(15)[14] == "FizzBuzz"\nprint("통과!")',
            feedback: {
              perfect: '체계적 디버깅을 완벽하게 수행했어요!',
              good: '단계별 검증을 잘 했어요!',
              partial: 'FizzBuzz 조건 순서를 확인하세요.',
              wrong: '3과 5의 배수를 동시에 검사하는 조건이 먼저 와야 해요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-9',
          title: 'assert 문',
          description: '조건 검사로 버그를 빨리 찾아요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: 'assert',
          conceptExplanation: `
assert문은 코드의 가정을 검증하고 개발 중 버그를 빠르게 찾는 도구입니다.
조건이 False면 AssertionError를 발생시켜 문제를 즉시 알립니다.
테스트와 디버깅에 유용하지만, 프로덕션 코드의 에러 처리로는 사용하지 않습니다.
예: 함수 입력값 검증, 중간 결과 확인, 단위 테스트 작성 등에 활용됩니다.
`,
          starterCode: 'def calculate_average(scores):\n    # 전제 조건 확인\n    assert len(scores) > 0, "점수가 비어있습니다"\n    assert all(0 <= s <= 100 for s in scores), "점수는 0~100 사이여야 합니다"\n    \n    return sum(scores) / len(scores)\n\n# 정상 케이스\nprint(calculate_average([80, 90, 85]))  # 85.0\n\n# 에러 케이스 (주석 해제하면 AssertionError)\n# print(calculate_average([]))           # 에러!\n# print(calculate_average([80, -10, 90])) # 에러!\n',
          hints: [
            'assert 조건, "메시지" 형식',
            '조건이 False면 AssertionError',
            '개발/테스트 단계에서 버그 찾기에 유용',
          ],
                    challenges: [
            {
              id: 'c1',
              title: 'assert 기본 사용',
              description: 'assert로 조건을 검증하세요.',
              difficulty: 'easy',
              hints: ['assert 조건, "메시지"', '조건이 False면 AssertionError', '개발/테스트 단계에서 유용'],
              estimatedMinutes: 3,
              starterCode: '# assert 기본 사용\ndef calculate_average(scores):\n    # TODO: assert로 전제 조건 검증\n    # 1. scores가 비어있지 않은지\n    # 2. 모든 점수가 0~100 사이인지\n    return sum(scores) / len(scores)\n\n# 정상\nprint(calculate_average([80, 90, 85]))\n\n# 에러 케이스 (주석 해제하면 AssertionError)\n# print(calculate_average([]))\n# print(calculate_average([80, -10, 90]))\n',
              solution: 'def calculate_average(scores):\n    assert len(scores) > 0, "점수 리스트가 비어있습니다"\n    assert all(0 <= s <= 100 for s in scores), "점수는 0~100 사이여야 합니다"\n    return sum(scores) / len(scores)\n\nprint(calculate_average([80, 90, 85]))',
              feedback: {
                perfect: 'assert를 정확히 사용했어요!',
                good: '전제 조건 검증이 잘 돼요!',
                partial: 'assert 조건, "메시지" 형태를 사용하세요.',
                wrong: 'assert len(scores) > 0, "메시지" 형태로 조건을 검증하세요.'
              }
            },
            {
              id: 'c2',
              title: 'assert로 타입 검사',
              description: 'assert로 매개변수 타입을 검사하세요.',
              difficulty: 'easy',
              hints: ['isinstance(값, 타입)으로 타입 확인', 'assert isinstance(x, int)', '타입이 맞지 않으면 에러'],
              estimatedMinutes: 4,
              starterCode: '# TODO: assert로 타입 검사\ndef add_numbers(a, b):\n    # TODO: a, b가 숫자(int 또는 float)인지 확인\n    return a + b\n\nprint(add_numbers(3, 5))       # 8\nprint(add_numbers(1.5, 2.5))   # 4.0\n# print(add_numbers("a", "b"))  # AssertionError\n',
              solution: 'def add_numbers(a, b):\n    assert isinstance(a, (int, float)), f"a는 숫자여야 합니다: {type(a)}"\n    assert isinstance(b, (int, float)), f"b는 숫자여야 합니다: {type(b)}"\n    return a + b\n\nprint(add_numbers(3, 5))\nprint(add_numbers(1.5, 2.5))',
              feedback: {
                perfect: 'assert로 타입 검사를 완벽히 했어요!',
                good: '타입 확인이 정확해요!',
                partial: 'isinstance(a, (int, float))를 사용하세요.',
                wrong: 'assert isinstance(변수, 타입), "메시지" 형태로 타입을 검증하세요.'
              }
            },
            {
              id: 'c3',
              title: 'assert로 함수 테스트',
              description: 'assert로 함수의 결과를 테스트하세요.',
              difficulty: 'medium',
              hints: ['assert 함수() == 예상값', '여러 테스트 케이스 작성', '모두 통과하면 정상'],
              estimatedMinutes: 5,
              starterCode: '# 테스트할 함수\ndef factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\n# TODO: assert로 테스트 케이스 작성\n# factorial(0) == 1\n# factorial(1) == 1\n# factorial(5) == 120\n# factorial(10) == 3628800\n\nprint("모든 테스트 통과!")\n',
              solution: 'def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n - 1)\n\nassert factorial(0) == 1, "0! = 1"\nassert factorial(1) == 1, "1! = 1"\nassert factorial(5) == 120, "5! = 120"\nassert factorial(10) == 3628800, "10! = 3628800"\n\nprint("모든 테스트 통과!")',
              feedback: {
                perfect: 'assert로 테스트를 완벽히 작성했어요!',
                good: '테스트 케이스가 좋아요!',
                partial: 'assert 함수() == 예상값, "설명" 형태로 작성하세요.',
                wrong: 'assert factorial(5) == 120, "5! = 120" 처럼 테스트 케이스를 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: '데이터 검증에 assert 활용',
              description: '딕셔너리 데이터를 assert로 검증하세요.',
              difficulty: 'medium',
              hints: ['필수 키 존재 확인', '값의 타입과 범위 확인', '여러 assert를 연속 사용'],
              estimatedMinutes: 6,
              starterCode: 'def process_student(student):\n    """학생 데이터 처리 전 검증"""\n    # TODO: assert로 데이터 검증\n    # 1. "name" 키가 있는지\n    # 2. "age"가 1~100 사이인지\n    # 3. "scores"가 리스트인지\n    \n    avg = sum(student["scores"]) / len(student["scores"])\n    return f"{student["name"]}: 평균 {avg:.1f}점"\n\n# 정상 데이터\ndata = {"name": "철수", "age": 14, "scores": [85, 90, 78]}\nprint(process_student(data))\n',
              solution: 'def process_student(student):\n    assert "name" in student, "name 키가 필요합니다"\n    assert "age" in student, "age 키가 필요합니다"\n    assert 1 <= student["age"] <= 100, "나이는 1~100 사이"\n    assert "scores" in student, "scores 키가 필요합니다"\n    assert isinstance(student["scores"], list), "scores는 리스트여야 합니다"\n    assert len(student["scores"]) > 0, "scores가 비어있습니다"\n    \n    avg = sum(student["scores"]) / len(student["scores"])\n    return f"{student["name"]}: 평균 {avg:.1f}점"\n\ndata = {"name": "철수", "age": 14, "scores": [85, 90, 78]}\nprint(process_student(data))',
              feedback: {
                perfect: '데이터 검증을 완벽히 구현했어요!',
                good: '모든 필드를 잘 검증했어요!',
                partial: '키 존재, 타입, 범위를 모두 체크하세요.',
                wrong: 'assert "key" in dict, assert isinstance(), assert 범위 조건 등을 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '미니 테스트 프레임워크',
              description: 'assert를 활용한 간단한 테스트 실행기를 만드세요.',
              difficulty: 'hard',
              hints: ['테스트 함수들을 리스트로 관리', 'try-except로 assert 에러 잡기', '통과/실패 결과 집계'],
              estimatedMinutes: 8,
              starterCode: '# 미니 테스트 프레임워크\ndef run_tests(tests):\n    """테스트 함수 리스트를 실행하고 결과 보고"""\n    # TODO: 각 테스트를 실행하고 성공/실패 집계\n    pass\n\n# 테스트 대상 함수\ndef add(a, b): return a + b\ndef is_even(n): return n % 2 == 0\n\n# 테스트 케이스들\ndef test_add():\n    assert add(1, 2) == 3\n    assert add(-1, 1) == 0\n    assert add(0, 0) == 0\n\ndef test_is_even():\n    assert is_even(2) == True\n    assert is_even(3) == False\n    assert is_even(0) == True\n\nrun_tests([test_add, test_is_even])\n',
              solution: 'def run_tests(tests):\n    passed = 0\n    failed = 0\n    for test in tests:\n        try:\n            test()\n            print(f"  PASS: {test.__name__}")\n            passed += 1\n        except AssertionError as e:\n            print(f"  FAIL: {test.__name__} - {e}")\n            failed += 1\n    print(f"\n결과: {passed} 통과, {failed} 실패 (총 {passed + failed}개)")\n\ndef add(a, b): return a + b\ndef is_even(n): return n % 2 == 0\n\ndef test_add():\n    assert add(1, 2) == 3\n    assert add(-1, 1) == 0\n    assert add(0, 0) == 0\n\ndef test_is_even():\n    assert is_even(2) == True\n    assert is_even(3) == False\n    assert is_even(0) == True\n\nrun_tests([test_add, test_is_even])',
              feedback: {
                perfect: '미니 테스트 프레임워크를 완벽하게 만들었어요!',
                good: '테스트 실행과 집계가 잘 돼요!',
                partial: 'try-except AssertionError로 실패를 잡으세요.',
                wrong: '각 테스트 함수를 try-except로 실행하고 결과를 집계하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-29-10',
          title: '주간 도전: 안전한 입력 함수',
          description: '다양한 타입을 안전하게 입력받는 함수',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '예외 처리 종합',
          conceptExplanation: `
예외 처리는 견고한 프로그램의 필수 요소입니다.
try-except로 에러를 잡고, raise로 전파하며, 커스텀 예외로 의미를 명확히 합니다.
적절한 예외 처리는 사용자 경험을 개선하고 디버깅을 쉽게 만듭니다.
예: 웹 서버(에러 페이지), 데이터 처리(실패 로그), API(에러 응답) 등 모든 곳에서 필수적입니다.
`,
          starterCode: 'def safe_int_input(prompt, min_val=None, max_val=None):\n    """안전하게 정수를 입력받습니다."""\n    while True:\n        try:\n            value = int(input(prompt))\n            if min_val is not None and value < min_val:\n                print(f"{min_val} 이상이어야 합니다.")\n                continue\n            if max_val is not None and value > max_val:\n                print(f"{max_val} 이하여야 합니다.")\n                continue\n            return value\n        except ValueError:\n            print("숫자를 입력하세요.")\n\ndef safe_float_input(prompt):\n    """안전하게 실수를 입력받습니다."""\n    while True:\n        try:\n            return float(input(prompt))\n        except ValueError:\n            print("숫자를 입력하세요.")\n\ndef safe_choice_input(prompt, choices):\n    """선택지 중 하나를 입력받습니다."""\n    while True:\n        value = input(prompt)\n        if value in choices:\n            return value\n        print(f"다음 중 선택하세요: {choices}")\n\n# 테스트\nage = safe_int_input("나이: ", min_val=1, max_val=150)\nprint(f"입력된 나이: {age}")\n\ngrade = safe_choice_input("학년 (중1/중2/중3): ", ["중1", "중2", "중3"])\nprint(f"입력된 학년: {grade}")\n',
          hints: [
            '무한 루프 + try-except 조합',
            '범위 검사로 유효성 검증',
            '재사용 가능한 함수로 만들기',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '안전한 정수 입력',
              description: 'while + try-except로 안전한 입력 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['while True로 반복', 'try: int(input()) except: 재입력', '범위 검증 포함'],
              estimatedMinutes: 4,
              starterCode: 'def safe_int(prompt, min_val=None, max_val=None):\n    """안전하게 정수를 입력받습니다"""\n    # TODO: while + try-except로 구현\n    pass\n\nage = safe_int("나이: ", 1, 150)\nprint(f"입력: {age}")\n',
              solution: 'def safe_int(prompt, min_val=None, max_val=None):\n    while True:\n        try:\n            value = int(input(prompt))\n            if min_val is not None and value < min_val:\n                print(f"{min_val} 이상이어야 합니다")\n                continue\n            if max_val is not None and value > max_val:\n                print(f"{max_val} 이하여야 합니다")\n                continue\n            return value\n        except ValueError:\n            print("숫자를 입력하세요")\n\nage = safe_int("나이: ", 1, 150)\nprint(f"입력: {age}")',
              feedback: {
                perfect: '안전한 입력 함수를 완벽하게 만들었어요!',
                good: '입력 검증이 잘 돼요!',
                partial: '범위 검증도 추가하세요.',
                wrong: 'while True + try-except + 범위 체크를 조합하세요.'
              }
            },
            {
              id: 'c2',
              title: '예외 체이닝 이해',
              description: '한 에러가 다른 에러를 유발하는 패턴을 이해하세요.',
              difficulty: 'easy',
              hints: ['첫 번째 에러를 잡고 새 에러 발생', 'raise ... from ... 문법', '원인 추적 가능'],
              estimatedMinutes: 4,
              starterCode: 'class ConfigError(Exception):\n    pass\n\ndef load_config(filename):\n    # TODO: FileNotFoundError를 잡아서 ConfigError로 변환\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except FileNotFoundError:\n        # raise ConfigError(...)\n        pass\n\ntry:\n    config = load_config("없는설정.ini")\nexcept ConfigError as e:\n    print(f"설정 에러: {e}")\n',
              solution: 'class ConfigError(Exception):\n    pass\n\ndef load_config(filename):\n    try:\n        with open(filename, "r") as f:\n            return f.read()\n    except FileNotFoundError as e:\n        raise ConfigError(f"설정 파일 없음: {filename}") from e\n\ntry:\n    config = load_config("없는설정.ini")\nexcept ConfigError as e:\n    print(f"설정 에러: {e}")',
              feedback: {
                perfect: '예외 체이닝을 정확히 이해했어요!',
                good: '에러 변환이 잘 돼요!',
                partial: 'raise ... from e 형태를 사용하세요.',
                wrong: 'except에서 잡은 에러를 raise 새에러 from 원인에러 로 변환하세요.'
              }
            },
            {
              id: 'c3',
              title: '에러 로깅 데코레이터',
              description: '함수의 에러를 자동으로 기록하는 데코레이터를 만드세요.',
              difficulty: 'medium',
              hints: ['데코레이터 함수 패턴', 'try-except로 감싸기', '에러 발생 시 로그 기록'],
              estimatedMinutes: 6,
              starterCode: 'from datetime import datetime\n\ndef log_errors(func):\n    """에러를 자동으로 기록하는 데코레이터"""\n    def wrapper(*args, **kwargs):\n        # TODO: try-except로 감싸서 에러 기록\n        pass\n    return wrapper\n\n@log_errors\ndef divide(a, b):\n    return a / b\n\nprint(divide(10, 3))\nprint(divide(10, 0))\n',
              solution: 'from datetime import datetime\n\ndef log_errors(func):\n    def wrapper(*args, **kwargs):\n        try:\n            return func(*args, **kwargs)\n        except Exception as e:\n            timestamp = datetime.now().strftime("%H:%M:%S")\n            print(f"[{timestamp}] {func.__name__} 에러: {type(e).__name__}: {e}")\n            return None\n    return wrapper\n\n@log_errors\ndef divide(a, b):\n    return a / b\n\nprint(divide(10, 3))\nprint(divide(10, 0))',
              feedback: {
                perfect: '에러 로깅 데코레이터를 완벽히 만들었어요!',
                good: '자동 에러 기록이 좋아요!',
                partial: 'wrapper에서 try-except로 감싸세요.',
                wrong: 'def wrapper(*args, **kwargs): try: return func(...) except: 로그 기록'
              }
            },
            {
              id: 'c4',
              title: '다중 에러 수집기',
              description: '여러 작업의 에러를 모아 한번에 보고하세요.',
              difficulty: 'medium',
              hints: ['에러를 리스트에 모으기', '각 작업을 try-except로 감싸기', '최종 보고서 출력'],
              estimatedMinutes: 7,
              starterCode: 'def process_batch(items):\n    """여러 항목을 처리하고 에러를 모아서 보고"""\n    results = []\n    errors = []\n    \n    for i, item in enumerate(items):\n        # TODO: 각 항목 처리, 에러 수집\n        pass\n    \n    return results, errors\n\ndata = ["10", "20", "abc", "30", "xyz", "40"]\nresults, errors = process_batch(data)\nprint(f"성공: {results}")\nprint(f"에러: {errors}")\n',
              solution: 'def process_batch(items):\n    results = []\n    errors = []\n    \n    for i, item in enumerate(items):\n        try:\n            value = int(item)\n            results.append(value)\n        except ValueError as e:\n            errors.append({"index": i, "item": item, "error": str(e)})\n    \n    return results, errors\n\ndata = ["10", "20", "abc", "30", "xyz", "40"]\nresults, errors = process_batch(data)\nprint(f"성공: {results}")\nprint(f"에러 {len(errors)}건:")\nfor err in errors:\n    print(f"  [{err["index"]}] {err["item"]}: {err["error"]}")',
              feedback: {
                perfect: '에러 수집과 보고를 완벽하게 구현했어요!',
                good: '배치 처리가 안정적이에요!',
                partial: '에러를 리스트에 모아 보고하세요.',
                wrong: '각 항목을 try-except로 처리하고 실패한 것은 errors에 추가하세요.'
              }
            },
            {
              id: 'c5',
              title: '견고한 CLI 프로그램',
              description: '모든 입력과 처리에 에러 처리가 있는 프로그램을 만드세요.',
              difficulty: 'hard',
              hints: ['모든 input에 try-except', '모든 파일 작업에 에러 처리', '사용자 친화적 에러 메시지'],
              estimatedMinutes: 10,
              starterCode: 'import json\n\ndef main():\n    """점수 관리 프로그램 (모든 에러 처리 포함)"""\n    scores = {}\n    \n    while True:\n        print("\n1.추가 2.조회 3.저장 4.로드 5.종료")\n        # TODO: 모든 입력/처리에 에러 처리 추가\n        choice = input("선택: ")\n        if choice == "5":\n            break\n\nmain()\n',
              solution: 'import json\nimport os\n\ndef main():\n    scores = {}\n    while True:\n        print("\n=== 점수 관리 ===")\n        print("1.추가 2.조회 3.저장 4.로드 5.종료")\n        choice = input("선택: ")\n        \n        if choice == "1":\n            try:\n                name = input("이름: ").strip()\n                if not name:\n                    raise ValueError("이름이 비어있습니다")\n                score = int(input("점수: "))\n                if not (0 <= score <= 100):\n                    raise ValueError("점수는 0~100 사이")\n                scores[name] = score\n                print(f"{name}: {score}점 추가!")\n            except ValueError as e:\n                print(f"입력 오류: {e}")\n        elif choice == "2":\n            if scores:\n                for name, score in scores.items():\n                    print(f"  {name}: {score}점")\n            else:\n                print("데이터가 없습니다")\n        elif choice == "3":\n            try:\n                with open("scores_data.json", "w", encoding="utf-8") as f:\n                    json.dump(scores, f, ensure_ascii=False, indent=2)\n                print("저장 완료!")\n            except OSError as e:\n                print(f"저장 실패: {e}")\n        elif choice == "4":\n            try:\n                with open("scores_data.json", "r", encoding="utf-8") as f:\n                    scores = json.load(f)\n                print(f"로드 완료! ({len(scores)}명)")\n            except FileNotFoundError:\n                print("저장된 파일이 없습니다")\n            except json.JSONDecodeError:\n                print("파일 형식이 잘못되었습니다")\n        elif choice == "5":\n            print("종료합니다")\n            break\n\nmain()',
              feedback: {
                perfect: '완벽하게 견고한 프로그램이에요!',
                good: '에러 처리가 전반적으로 잘 돼요!',
                partial: '파일 작업에도 에러 처리를 추가하세요.',
                wrong: '모든 input과 파일 작업에 try-except를 추가하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-29',
        title: 'Week 29 퀴즈',
        questions: [
          {
            id: 'q29-1',
            question: 'try 블록에서 에러가 나면 실행되는 블록은?',
            options: ['else', 'except', 'finally', 'catch'],
            correctAnswer: 1,
            explanation: 'except 블록은 try에서 에러가 발생했을 때 실행돼요. catch는 JavaScript에서 사용하는 키워드입니다!'
          },
          {
            id: 'q29-2',
            question: '에러 유무와 관계없이 항상 실행되는 블록은?',
            options: ['else', 'except', 'finally', 'always'],
            correctAnswer: 2,
            explanation: 'finally 블록은 에러가 있든 없든 항상 실행돼요. 파일 닫기, 연결 종료 등 정리 작업에 사용해요!'
          },
          {
            id: 'q29-3',
            question: '의도적으로 에러를 발생시키는 키워드는?',
            options: ['throw', 'raise', 'error', 'exception'],
            correctAnswer: 1,
            explanation: 'raise 키워드로 의도적으로 예외를 발생시켜요. raise ValueError("잘못된 값")처럼 사용합니다. throw는 JavaScript에서 사용해요!'
          },
          {
            id: 'q29-4',
            question: 'except Exception as e: 에서 e는?',
            options: ['에러 메시지', '에러 객체', '에러 코드', '에러 라인'],
            correctAnswer: 1,
            explanation: 'as e로 에러 객체를 변수에 저장해요. str(e)로 에러 메시지를 볼 수 있고, type(e)로 에러 타입을 확인할 수 있어요!'
          },
          {
            id: 'q29-5',
            question: 'try-except가 필요한 상황은?',
            options: ['모든 코드', '사용자 입력', '수학 계산', '변수 선언'],
            correctAnswer: 1,
            explanation: '사용자 입력은 예측할 수 없어서 try-except가 필요해요! 파일 읽기, 네트워크 통신 등 실패할 수 있는 작업에 사용합니다.'
          },
        ],
      },
    },

    // Week 30: 미니 프로젝트
    {
      id: 'week-30',
      number: 30,
      title: 'Unit 4 종합 프로젝트',
      description: '배운 내용을 모두 활용한 프로젝트를 만들어요',
      missions: [
        {
          id: '4-30-1',
          title: '프로젝트 기획',
          description: '어떤 프로그램을 만들지 계획해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 40,
          estimatedMinutes: 10,
          concept: '프로젝트 기획',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '문제를 작은 단위로 분해하여 계획할 수 있다',
            '프로젝트에 필요한 자료구조와 함수를 설계할 수 있다',
            '배운 개념들을 통합하여 실제 프로그램을 구현할 수 있다'
          ],
          realWorldExample: '집을 지을 때 설계도를 먼저 그리듯이, 프로그램도 기획과 설계가 중요해요. 어떤 기능이 필요하고, 어떻게 만들지 계획해요!',
          conceptCards: [
            {
              title: '문제 분해',
              description: '큰 문제를 작은 기능으로 나누기',
              icon: '🧩',
              example: '성적 관리 = 추가 + 조회 + 통계 + 저장'
            },
            {
              title: '자료구조 선택',
              description: '어떤 데이터를 어떻게 저장할지',
              icon: '📊',
              example: '학생 이름 → 딕셔너리 키, 점수 → 리스트'
            },
            {
              title: '기능 설계',
              description: '각 기능을 함수로 분리',
              icon: '⚙️',
              example: 'add_student(), view_all(), calculate_average()'
            }
          ],
          hints: [
            '💡 힌트 1: 목표 - 리스트, 딕셔너리, 함수, 파일을 모두 활용',
            '💡 힌트 2: 아이디어 - 학생 성적 관리, 가계부, 단어장, 할 일 목록 등',
            '💡 힌트 3: 작은 기능부터 시작해서 점점 확장하세요'
          ],
                    challenges: [
          {
            id: 'c1',
            title: '요구사항 정리',
            description: '프로그램의 기능을 정리하세요',
            difficulty: 'easy',
            hints: ['무엇을 할 수 있어야 하는지 나열', '입력과 출력을 명확히'],
            estimatedMinutes: 3,
            starterCode: 'requirements = {\n    "기능": ["추가", "목록", "완료", "삭제"],\n    "입력": "메뉴 선택 + 텍스트",\n    "출력": "할 일 목록"\n}\nfor f in requirements["기능"]:\n    print(f"- {f}")',
            solution: 'requirements = {\n    "기능": ["추가", "목록", "완료", "삭제"],\n    "입력": "메뉴 선택 + 텍스트",\n    "출력": "할 일 목록"\n}\nfor f in requirements["기능"]:\n    print(f"- {f}")',
            feedback: {
              perfect: '요구사항 정리를 완벽하게 했어요!',
              good: '기능 분석을 잘 했어요!',
              partial: '기능, 입력, 출력을 구조적으로 정리하세요.',
              wrong: '필요한 기능을 목록으로 작성하세요.'
            }
          },
          {
            id: 'c2',
            title: '데이터 구조 설계',
            description: '프로그램의 데이터 구조를 설계하세요',
            difficulty: 'easy',
            hints: ['딕셔너리로 항목 표현', '리스트로 여러 항목 관리'],
            estimatedMinutes: 5,
            starterCode: 'todos = [\n    {"id": 1, "text": "공부", "done": False},\n    {"id": 2, "text": "운동", "done": True}\n]\nfor t in todos:\n    s = "V" if t["done"] else " "\n    print(f"[{s}] {t[\x27text\x27]}")',
            solution: 'todos = [\n    {"id": 1, "text": "공부", "done": False},\n    {"id": 2, "text": "운동", "done": True}\n]\nfor t in todos:\n    s = "V" if t["done"] else " "\n    print(f"[{s}] {t[\x27text\x27]}")',
            feedback: {
              perfect: '데이터 구조를 완벽하게 설계했어요!',
              good: '딕셔너리+리스트 조합을 잘 활용했어요!',
              partial: '각 항목을 딕셔너리로 표현하세요.',
              wrong: '리스트에 딕셔너리를 넣어 관리하세요.'
            }
          },
          {
            id: 'c3',
            title: '함수 분리',
            description: '기능별로 함수를 분리하세요',
            difficulty: 'medium',
            hints: ['한 함수는 한 가지 일만', '매개변수와 반환값을 명확히'],
            estimatedMinutes: 7,
            starterCode: 'todos = []\ndef add_todo(text):\n    todos.append({"text": text, "done": False})\n\ndef show():\n    for i, t in enumerate(todos, 1):\n        s = "V" if t["done"] else " "\n        print(f"[{s}] {i}. {t[\x27text\x27]}")\n\nadd_todo("공부")\nadd_todo("운동")\nshow()',
            solution: 'todos = []\ndef add_todo(text):\n    todos.append({"text": text, "done": False})\n\ndef show():\n    for i, t in enumerate(todos, 1):\n        s = "V" if t["done"] else " "\n        print(f"[{s}] {i}. {t[\x27text\x27]}")\n\nadd_todo("공부")\nadd_todo("운동")\nshow()',
            feedback: {
              perfect: '함수 분리를 완벽하게 했어요!',
              good: '단일 책임을 잘 적용했어요!',
              partial: '각 기능을 별도 함수로 분리하세요.',
              wrong: 'add, show 등을 각각 함수로 만드세요.'
            }
          },
          {
            id: 'c4',
            title: '메뉴 시스템',
            description: '사용자 메뉴 인터페이스를 만드세요',
            difficulty: 'medium',
            hints: ['while로 반복', 'if-elif로 선택 처리'],
            estimatedMinutes: 10,
            starterCode: 'def menu():\n    print("1.추가 2.목록 3.종료")\n    return input("선택: ")\n\ndef main():\n    while True:\n        c = menu()\n        if c == "1": add_todo(input("할일: "))\n        elif c == "2": show()\n        elif c == "3": break\n# main()',
            solution: 'def menu():\n    print("1.추가 2.목록 3.종료")\n    return input("선택: ")\n\ndef main():\n    while True:\n        c = menu()\n        if c == "1": add_todo(input("할일: "))\n        elif c == "2": show()\n        elif c == "3": break',
            feedback: {
              perfect: '메뉴 시스템을 완벽하게 구현했어요!',
              good: 'while+input 패턴을 잘 사용했어요!',
              partial: 'while True로 반복하고 break로 종료하세요.',
              wrong: 'input()으로 선택받고 if-elif로 분기하세요.'
            }
          },
          {
            id: 'c5',
            title: '완성 프로젝트',
            description: '전체 프로젝트를 클래스로 구성하세요',
            difficulty: 'hard',
            hints: ['클래스로 데이터와 메서드를 묶으세요', '파일 저장을 추가하세요'],
            estimatedMinutes: 15,
            starterCode: 'import json\nclass TodoApp:\n    def __init__(self):\n        self.todos = []\n    def add(self, text):\n        self.todos.append({"text": text, "done": False})\n    def complete(self, idx):\n        if 0 <= idx < len(self.todos):\n            self.todos[idx]["done"] = True\n    def show(self):\n        for i, t in enumerate(self.todos):\n            s = "V" if t["done"] else " "\n            print(f"[{s}] {i}. {t[\x27text\x27]}")\n\napp = TodoApp()\napp.add("공부")\napp.add("운동")\napp.complete(0)\napp.show()',
            solution: 'import json\nclass TodoApp:\n    def __init__(self):\n        self.todos = []\n    def add(self, text):\n        self.todos.append({"text": text, "done": False})\n    def complete(self, idx):\n        if 0 <= idx < len(self.todos):\n            self.todos[idx]["done"] = True\n    def show(self):\n        for i, t in enumerate(self.todos):\n            s = "V" if t["done"] else " "\n            print(f"[{s}] {i}. {t[\x27text\x27]}")\n\napp = TodoApp()\napp.add("공부")\napp.add("운동")\napp.complete(0)\napp.show()',
            feedback: {
              perfect: '프로젝트를 완벽하게 구성했어요!',
              good: '클래스 설계를 잘 했어요!',
              partial: '클래스로 데이터와 메서드를 묶으세요.',
              wrong: 'TodoApp 클래스에 CRUD 메서드를 만드세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-30-2',
          title: '프로젝트: 학생 성적 관리 시스템',
          description: 'JSON 파일로 성적을 저장하고 관리해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 150,
          estimatedMinutes: 30,
          concept: '종합 프로젝트',
          conceptExplanation: `
종합 프로젝트는 배운 모든 개념을 통합하여 완성도 있는 프로그램을 만드는 것입니다.
기획, 설계, 구현, 테스트, 디버깅, 문서화 등 전체 개발 프로세스를 경험합니다.
실전 경험을 통해 개념을 확실히 이해하고 실력을 크게 향상시킬 수 있습니다.
예: 게임 제작, 웹 크롤러, 데이터 분석 도구, 자동화 스크립트 등을 완성합니다.
`,
          starterCode: 'import json\nimport os\n\nDATA_FILE = "students.json"\n\ndef load_data():\n    """데이터 파일 로드"""\n    if os.path.exists(DATA_FILE):\n        with open(DATA_FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return {}\n\ndef save_data(data):\n    """데이터 파일 저장"""\n    with open(DATA_FILE, "w", encoding="utf-8") as f:\n        json.dump(data, f, ensure_ascii=False, indent=2)\n\ndef add_student(students):\n    """학생 추가"""\n    name = input("학생 이름: ")\n    if name in students:\n        print("이미 등록된 학생입니다.")\n        return\n    students[name] = {"국어": 0, "영어": 0, "수학": 0}\n    save_data(students)\n    print(f"{name} 학생이 등록되었습니다.")\n\ndef update_score(students):\n    """점수 입력/수정"""\n    name = input("학생 이름: ")\n    if name not in students:\n        print("등록되지 않은 학생입니다.")\n        return\n    \n    subject = input("과목 (국어/영어/수학): ")\n    if subject not in students[name]:\n        print("잘못된 과목입니다.")\n        return\n    \n    try:\n        score = int(input("점수: "))\n        if 0 <= score <= 100:\n            students[name][subject] = score\n            save_data(students)\n            print("저장되었습니다.")\n        else:\n            print("0~100 사이의 점수를 입력하세요.")\n    except ValueError:\n        print("숫자를 입력하세요.")\n\ndef view_student(students):\n    """학생 성적 조회"""\n    name = input("학생 이름: ")\n    if name not in students:\n        print("등록되지 않은 학생입니다.")\n        return\n    \n    scores = students[name]\n    total = sum(scores.values())\n    avg = total / len(scores)\n    \n    print(f"\\n=== {name}의 성적표 ===")\n    for subject, score in scores.items():\n        print(f"{subject}: {score}점")\n    print(f"총점: {total}점, 평균: {avg:.1f}점")\n\ndef view_all(students):\n    """전체 학생 조회"""\n    if not students:\n        print("등록된 학생이 없습니다.")\n        return\n    \n    print("\\n=== 전체 성적표 ===")\n    for name, scores in students.items():\n        total = sum(scores.values())\n        avg = total / len(scores)\n        print(f"{name}: 총점 {total}, 평균 {avg:.1f}")\n\ndef main():\n    students = load_data()\n    \n    while True:\n        print("\\n=== 성적 관리 시스템 ===")\n        print("1. 학생 등록")\n        print("2. 점수 입력")\n        print("3. 개인 조회")\n        print("4. 전체 조회")\n        print("5. 종료")\n        \n        choice = input("선택: ")\n        \n        if choice == "1":\n            add_student(students)\n        elif choice == "2":\n            update_score(students)\n        elif choice == "3":\n            view_student(students)\n        elif choice == "4":\n            view_all(students)\n        elif choice == "5":\n            print("종료합니다.")\n            break\n        else:\n            print("잘못된 선택입니다.")\n\nif __name__ == "__main__":\n    main()\n',
          hints: [
            '딕셔너리: 학생 이름 → 과목별 점수',
            'JSON: 데이터 영구 저장',
            '함수: 기능별로 분리',
            '예외 처리: 잘못된 입력 대응',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '데이터 로드 함수',
              description: 'JSON 파일에서 학생 데이터를 안전하게 로드하세요.',
              difficulty: 'easy',
              hints: ['json.load로 파일 읽기', '파일 없으면 빈 딕셔너리 반환', 'try-except 사용'],
              estimatedMinutes: 4,
              starterCode: 'import json\nimport os\n\ndef load_students(filename="students.json"):\n    """학생 데이터 로드 (없으면 빈 dict)"""\n    # TODO\n    pass\n\n# 테스트\nstudents = load_students()\nprint(f"학생 수: {len(students)}")\n',
              solution: 'import json\nimport os\n\ndef load_students(filename="students.json"):\n    if os.path.exists(filename):\n        try:\n            with open(filename, "r", encoding="utf-8") as f:\n                return json.load(f)\n        except json.JSONDecodeError:\n            print("파일 형식 오류. 빈 데이터로 시작합니다.")\n            return {}\n    return {}\n\nstudents = load_students()\nprint(f"학생 수: {len(students)}")',
              feedback: {
                perfect: '안전한 데이터 로드를 완벽히 구현했어요!',
                good: '에러 처리가 잘 돼요!',
                partial: 'JSONDecodeError도 처리하세요.',
                wrong: 'os.path.exists로 확인 후 json.load로 읽고 에러를 처리하세요.'
              }
            },
            {
              id: 'c2',
              title: '학생 등록 함수',
              description: '학생 이름과 과목별 점수를 등록하세요.',
              difficulty: 'easy',
              hints: ['input으로 이름 입력', '과목별 점수를 딕셔너리로', '점수 검증 포함'],
              estimatedMinutes: 5,
              starterCode: 'def add_student(students):\n    """학생 등록"""\n    # TODO: 이름, 국어/영어/수학 점수 입력\n    # 점수 검증(0~100), 중복 이름 체크\n    pass\n\nstudents = {}\nadd_student(students)\nprint(students)\n',
              solution: 'def add_student(students):\n    name = input("학생 이름: ").strip()\n    if not name:\n        print("이름을 입력하세요")\n        return\n    if name in students:\n        print("이미 등록된 학생입니다")\n        return\n    scores = {}\n    for subject in ["국어", "영어", "수학"]:\n        while True:\n            try:\n                score = int(input(f"{subject} 점수: "))\n                if 0 <= score <= 100:\n                    scores[subject] = score\n                    break\n                print("0~100 사이 점수를 입력하세요")\n            except ValueError:\n                print("숫자를 입력하세요")\n    students[name] = scores\n    print(f"{name} 등록 완료!")\n\nstudents = {}\nadd_student(students)\nprint(students)',
              feedback: {
                perfect: '학생 등록을 완벽하게 구현했어요!',
                good: '입력 검증이 잘 돼요!',
                partial: '점수 범위 검증을 추가하세요.',
                wrong: '각 과목 점수를 입력받고 0~100 범위를 검증하세요.'
              }
            },
            {
              id: 'c3',
              title: '성적 분석 함수',
              description: '학생의 평균, 등급, 석차를 계산하세요.',
              difficulty: 'medium',
              hints: ['sum() / len()으로 평균', '평균으로 등급 매기기', 'sorted()로 석차 계산'],
              estimatedMinutes: 6,
              starterCode: 'def analyze_students(students):\n    """전체 학생 분석"""\n    # TODO: 각 학생의 평균과 등급 계산\n    # 전체 석차 반환\n    pass\n\nstudents = {\n    "철수": {"국어": 85, "영어": 90, "수학": 78},\n    "영희": {"국어": 92, "영어": 88, "수학": 95},\n    "민수": {"국어": 78, "영어": 82, "수학": 88}\n}\n\nresults = analyze_students(students)\nfor r in results:\n    print(f"{r["rank"]}등 {r["name"]}: 평균 {r["avg"]}점 ({r["grade"]})")\n',
              solution: 'def analyze_students(students):\n    results = []\n    for name, scores in students.items():\n        avg = sum(scores.values()) / len(scores)\n        if avg >= 90: grade = "A"\n        elif avg >= 80: grade = "B"\n        elif avg >= 70: grade = "C"\n        else: grade = "D"\n        results.append({"name": name, "avg": round(avg, 1), "grade": grade})\n    results.sort(key=lambda x: x["avg"], reverse=True)\n    for i, r in enumerate(results, 1):\n        r["rank"] = i\n    return results\n\nstudents = {\n    "철수": {"국어": 85, "영어": 90, "수학": 78},\n    "영희": {"국어": 92, "영어": 88, "수학": 95},\n    "민수": {"국어": 78, "영어": 82, "수학": 88}\n}\n\nresults = analyze_students(students)\nfor r in results:\n    print(f"{r["rank"]}등 {r["name"]}: 평균 {r["avg"]}점 ({r["grade"]})")',
              feedback: {
                perfect: '성적 분석을 완벽하게 구현했어요!',
                good: '평균, 등급, 석차가 잘 나와요!',
                partial: '석차 계산을 추가하세요.',
                wrong: '평균을 구한 후 sorted()로 정렬하고 순번을 매기세요.'
              }
            },
            {
              id: 'c4',
              title: '데이터 저장 함수',
              description: '학생 데이터를 JSON으로 안전하게 저장하세요.',
              difficulty: 'medium',
              hints: ['json.dump로 저장', 'ensure_ascii=False', 'try-except로 에러 처리'],
              estimatedMinutes: 5,
              starterCode: 'import json\n\ndef save_students(students, filename="students.json"):\n    """학생 데이터를 JSON으로 저장"""\n    # TODO: 안전한 저장 (에러 처리 포함)\n    pass\n\nstudents = {\n    "철수": {"국어": 85, "영어": 90, "수학": 78}\n}\nsave_students(students)\n',
              solution: 'import json\n\ndef save_students(students, filename="students.json"):\n    try:\n        with open(filename, "w", encoding="utf-8") as f:\n            json.dump(students, f, ensure_ascii=False, indent=2)\n        print(f"저장 완료! ({len(students)}명)")\n    except OSError as e:\n        print(f"저장 실패: {e}")\n\nstudents = {\n    "철수": {"국어": 85, "영어": 90, "수학": 78}\n}\nsave_students(students)',
              feedback: {
                perfect: '안전한 저장을 완벽히 구현했어요!',
                good: '저장이 잘 돼요!',
                partial: 'try-except으로 에러를 처리하세요.',
                wrong: 'json.dump(students, f, ensure_ascii=False, indent=2)로 저장하세요.'
              }
            },
            {
              id: 'c5',
              title: '메인 프로그램 통합',
              description: '모든 기능을 통합한 성적 관리 프로그램을 완성하세요.',
              difficulty: 'hard',
              hints: ['while 루프로 메뉴 반복', '각 기능을 함수로 호출', '입력 검증과 에러 처리'],
              estimatedMinutes: 10,
              starterCode: 'import json\nimport os\n\n# TODO: load, save, add, view, analyze 함수들과\n# main() 메뉴 루프를 완성하세요\n\ndef main():\n    print("=== 성적 관리 시스템 ===")\n    # TODO: 메뉴 루프\n    pass\n\nmain()\n',
              solution: 'import json\nimport os\n\nFILE = "grade_system.json"\n\ndef load_data():\n    if os.path.exists(FILE):\n        with open(FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return {}\n\ndef save_data(data):\n    with open(FILE, "w", encoding="utf-8") as f:\n        json.dump(data, f, ensure_ascii=False, indent=2)\n\ndef main():\n    students = load_data()\n    while True:\n        print("\n=== 성적 관리 ===")\n        print("1.등록 2.조회 3.분석 4.종료")\n        choice = input("선택: ")\n        if choice == "1":\n            name = input("이름: ")\n            try:\n                kor = int(input("국어: "))\n                eng = int(input("영어: "))\n                math_s = int(input("수학: "))\n                students[name] = {"국어": kor, "영어": eng, "수학": math_s}\n                save_data(students)\n                print("등록 완료!")\n            except ValueError:\n                print("숫자를 입력하세요")\n        elif choice == "2":\n            for name, scores in students.items():\n                avg = sum(scores.values()) / len(scores)\n                print(f"{name}: {scores}, 평균={avg:.1f}")\n        elif choice == "3":\n            if students:\n                ranking = sorted(students.items(), key=lambda x: sum(x[1].values()), reverse=True)\n                for i, (name, scores) in enumerate(ranking, 1):\n                    print(f"{i}등 {name}: 총점={sum(scores.values())}")\n            else:\n                print("데이터 없음")\n        elif choice == "4":\n            print("종료!")\n            break\n\nmain()',
              feedback: {
                perfect: '완전한 성적 관리 시스템이에요!',
                good: '모든 기능이 잘 작동해요!',
                partial: '분석 기능을 추가하세요.',
                wrong: 'while 루프로 메뉴를 반복하고 각 기능을 구현하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-30-3',
          title: '프로젝트 확장 아이디어',
          description: '더 많은 기능을 추가해봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 50,
          estimatedMinutes: 10,
          concept: '기능 확장',
          conceptExplanation: `
기능 확장은 기존 코드에 새로운 기능을 추가하는 것입니다.
모듈화된 구조와 확장 가능한 설계가 중요하며, 기존 코드를 최대한 건드리지 않는 것이 좋습니다.
상속, 인터페이스, 플러그인 패턴 등으로 유연한 확장이 가능합니다.
예: 새 결제 방식 추가, 기능 모듈 플러그인, API 엔드포인트 확장 등에 활용됩니다.
`,
          hints: [
            '석차 계산 기능',
            '과목별 평균, 최고점, 최저점',
            '학생 삭제 기능',
            '성적표 출력 (CSV 저장)',
          ],
                    challenges: [
          {
            id: 'c1',
            title: '검색 기능 추가',
            description: '키워드 검색 기능을 추가하세요',
            difficulty: 'easy',
            hints: ['in 연산자로 포함 여부 확인', '리스트 컴프리헨션으로 필터링'],
            estimatedMinutes: 3,
            starterCode: 'todos = [{"text":"파이썬 공부"},{"text":"파이썬 프로젝트"},{"text":"운동"}]\n\ndef search(keyword):\n    return [t for t in todos if keyword in t["text"]]\n\nprint(search("파이썬"))',
            solution: 'todos = [{"text":"파이썬 공부"},{"text":"파이썬 프로젝트"},{"text":"운동"}]\n\ndef search(keyword):\n    return [t for t in todos if keyword in t["text"]]\n\nprint(search("파이썬"))',
            feedback: {
              perfect: '검색 기능을 완벽하게 추가했어요!',
              good: 'in 연산자를 잘 활용했어요!',
              partial: 'keyword in t["text"]로 포함 확인하세요.',
              wrong: 'in 연산자로 부분 문자열 검색이 가능해요.'
            }
          },
          {
            id: 'c2',
            title: '정렬 기능 추가',
            description: '데이터를 다양한 기준으로 정렬하세요',
            difficulty: 'easy',
            hints: ['sorted()와 key 사용', 'lambda로 정렬 기준 지정'],
            estimatedMinutes: 5,
            starterCode: 'items = [{"name":"C","val":3},{"name":"A","val":1},{"name":"B","val":2}]\n\nby_name = sorted(items, key=lambda x: x["name"])\nby_val = sorted(items, key=lambda x: x["val"])\nprint("이름순:", [i["name"] for i in by_name])\nprint("값순:", [i["val"] for i in by_val])',
            solution: 'items = [{"name":"C","val":3},{"name":"A","val":1},{"name":"B","val":2}]\n\nby_name = sorted(items, key=lambda x: x["name"])\nby_val = sorted(items, key=lambda x: x["val"])\nprint("이름순:", [i["name"] for i in by_name])\nprint("값순:", [i["val"] for i in by_val])',
            feedback: {
              perfect: '정렬 기능을 완벽하게 추가했어요!',
              good: 'sorted와 lambda를 잘 활용했어요!',
              partial: 'sorted()의 key에 lambda를 사용하세요.',
              wrong: 'lambda x: x["속성"]으로 정렬 기준을 지정하세요.'
            }
          },
          {
            id: 'c3',
            title: '통계 기능',
            description: '완료율 등 통계를 계산하세요',
            difficulty: 'medium',
            hints: ['len()으로 개수 세기', '비율 = 완료/전체 * 100'],
            estimatedMinutes: 7,
            starterCode: 'todos = [{"done":True},{"done":False},{"done":True},{"done":False}]\n\ndef stats(todos):\n    total = len(todos)\n    done = len([t for t in todos if t["done"]])\n    rate = done/total*100 if total else 0\n    return {"total":total,"done":done,"rate":round(rate,1)}\n\nprint(stats(todos))',
            solution: 'todos = [{"done":True},{"done":False},{"done":True},{"done":False}]\n\ndef stats(todos):\n    total = len(todos)\n    done = len([t for t in todos if t["done"]])\n    rate = done/total*100 if total else 0\n    return {"total":total,"done":done,"rate":round(rate,1)}\n\nprint(stats(todos))',
            feedback: {
              perfect: '통계 기능을 완벽하게 구현했어요!',
              good: '데이터 분석을 잘 적용했어요!',
              partial: '리스트 컴프리헨션으로 완료된 것을 세세요.',
              wrong: '비율 = 완료/전체 * 100으로 계산하세요.'
            }
          },
          {
            id: 'c4',
            title: '데코레이터 로깅',
            description: '함수 호출을 자동 기록하세요',
            difficulty: 'medium',
            hints: ['데코레이터는 함수를 감싸는 함수', '@decorator 문법 사용'],
            estimatedMinutes: 10,
            starterCode: 'def log(func):\n    def wrapper(*args, **kwargs):\n        print(f"[LOG] {func.__name__} 실행")\n        result = func(*args, **kwargs)\n        return result\n    return wrapper\n\n@log\ndef add(text):\n    print(f"  추가: {text}")\n\nadd("공부하기")',
            solution: 'def log(func):\n    def wrapper(*args, **kwargs):\n        print(f"[LOG] {func.__name__} 실행")\n        result = func(*args, **kwargs)\n        return result\n    return wrapper\n\n@log\ndef add(text):\n    print(f"  추가: {text}")\n\nadd("공부하기")',
            feedback: {
              perfect: '데코레이터를 완벽하게 활용했어요!',
              good: '함수 래핑을 잘 이해했어요!',
              partial: '@log를 함수 위에 붙이세요.',
              wrong: '데코레이터는 함수를 받아 새 함수를 반환합니다.'
            }
          },
          {
            id: 'c5',
            title: '플러그인 시스템',
            description: '확장 가능한 플러그인 구조를 만드세요',
            difficulty: 'hard',
            hints: ['딕셔너리에 함수 등록', '이름으로 동적 호출'],
            estimatedMinutes: 15,
            starterCode: 'class Plugins:\n    def __init__(self):\n        self.p = {}\n    def add(self, name, fn):\n        self.p[name] = fn\n    def run(self, name, *args):\n        if name in self.p:\n            return self.p[name](*args)\n\napp = Plugins()\napp.add("upper", lambda t: t.upper())\napp.add("reverse", lambda t: t[::-1])\nprint(app.run("upper", "hello"))\nprint(app.run("reverse", "hello"))',
            solution: 'class Plugins:\n    def __init__(self):\n        self.p = {}\n    def add(self, name, fn):\n        self.p[name] = fn\n    def run(self, name, *args):\n        if name in self.p:\n            return self.p[name](*args)\n\napp = Plugins()\napp.add("upper", lambda t: t.upper())\napp.add("reverse", lambda t: t[::-1])\nprint(app.run("upper", "hello"))\nprint(app.run("reverse", "hello"))',
            feedback: {
              perfect: '플러그인 시스템을 완벽하게 구현했어요!',
              good: '확장 가능한 설계를 잘 만들었어요!',
              partial: '딕셔너리에 함수를 등록하세요.',
              wrong: '이름으로 함수를 찾아 호출하세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-30-4',
          title: 'Unit 4 복습 퀴즈',
          description: 'Unit 4에서 배운 내용을 점검해요',
          type: 'quiz',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: 'Unit 4 복습',
          conceptExplanation: `
Unit 4에서는 파이썬 심화 개념들을 배웠습니다.
리스트/딕셔너리 활용, 함수 설계, 파일 처리, 예외 처리, 모듈화 등이 핵심입니다.
이러한 개념들을 종합적으로 활용하면 실무 수준의 프로그램을 만들 수 있습니다.
예: 실전 프로젝트에서 이 모든 요소를 조합하여 완성도 높은 애플리케이션을 개발합니다.
`,
          hints: [
            '리스트, 딕셔너리, 함수를 복습하세요',
            '파일 I/O와 예외 처리를 복습하세요',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 개념 퀴즈",
                              "description": "핵심 개념을 확인하는 퀴즈입니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 복습하세요"
                              ],
                              "estimatedMinutes": 2,
                              "feedback": {
                                        "perfect": "개념을 완벽히 이해했어요!",
                                        "good": "잘 알고 있어요!",
                                        "partial": "일부 개념을 다시 확인하세요.",
                                        "wrong": "강의를 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "용어 정리",
                              "description": "중요 용어의 의미를 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "각 용어의 정의를 떠올리세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "용어를 정확히 알아요!",
                                        "good": "용어 이해가 좋아요!",
                                        "partial": "일부 용어를 혼동했어요.",
                                        "wrong": "용어집을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "예시 판별",
                              "description": "올바른 예시와 잘못된 예시를 구별합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "각 예시를 신중히 검토하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "판별력이 뛰어나요!",
                                        "good": "잘 구별했어요!",
                                        "partial": "일부 예시를 다시 보세요.",
                                        "wrong": "예시와 개념을 연결지어 생각하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "응용 문제",
                              "description": "개념을 응용한 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 적용하세요",
                                        "차근차근 풀어보세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "응용력이 훌륭해요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "접근은 좋은데 세부가 틀렸어요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "실전 문제",
                              "description": "실제 상황에 적용하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "실제 사례를 떠올리세요",
                                        "개념을 현실에 적용하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실전 대비가 완벽해요!",
                                        "good": "실용적으로 잘 적용했어요!",
                                        "partial": "이론은 맞는데 적용이 부족해요.",
                                        "wrong": "실제 사례를 더 생각해보세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "비교 분석",
                              "description": "유사한 개념들을 비교하고 분석합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "각 개념의 특징을 정리하세요",
                                        "공통점과 차이점을 찾으세요"
                              ],
                              "estimatedMinutes": 7,
                              "feedback": {
                                        "perfect": "분석력이 뛰어나요!",
                                        "good": "비교를 잘 했어요!",
                                        "partial": "일부 차이를 놓쳤어요.",
                                        "wrong": "각 개념을 명확히 구분하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "심화 퀴즈",
                              "description": "더 깊은 이해를 요구하는 퀴즈입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "단순 암기가 아닌 이해가 필요해요",
                                        "깊이 생각하세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "심화 이해가 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "기본은 맞는데 심화가 부족해요.",
                                        "wrong": "개념을 더 깊이 공부하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 복습하세요",
                                        "개념들을 연결지으세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "종합 이해가 완벽해요!",
                                        "good": "개념들을 잘 통합했어요!",
                                        "partial": "일부 개념이 부족해요.",
                                        "wrong": "전체를 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 지식을 동원하세요",
                                        "논리적으로 추론하세요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "모든 개념을 마스터했어요!",
                                        "good": "고급 문제를 잘 풀었어요!",
                                        "partial": "거의 맞았어요. 조금만 더!",
                                        "wrong": "어려워도 괜찮아요. 차근차근 복습하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 마스터 퀴즈",
                              "description": "최고 난이도의 종합 퀴즈입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습을 총동원하세요",
                                        "신중하게 답하세요",
                                        "시간을 충분히 가지세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "완벽한 마스터예요! 축하합니다!",
                                        "good": "최고 난이도를 통과했어요!",
                                        "partial": "좋은 시도예요. 마지막 점검을 하세요.",
                                        "wrong": "최고 난이도예요. 전체 복습 후 재도전하세요."
                              }
                    }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-30-5',
          title: '코드 개선하기',
          description: '작성한 코드를 더 좋게 만들어요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 12,
          concept: '코드 품질',
          conceptExplanation: `
코드 품질은 가독성, 유지보수성, 성능 등을 포함하는 코드의 전반적인 수준입니다.
명확한 변수명, 적절한 주석, 함수 분리, 일관된 스타일 등이 중요합니다.
좋은 코드는 버그가 적고, 이해하기 쉬우며, 확장하기 좋습니다.
예: 코드 리뷰, 리팩토링, 스타일 가이드 준수, 테스트 작성 등으로 품질을 높입니다.
`,
          hints: [
            '변수명을 의미 있게',
            '함수를 작게, 한 가지 일만',
            '주석과 docstring 추가',
            '중복 코드 제거',
          ],
                    challenges: [
          {
            id: 'c1',
            title: '의미 있는 이름짓기',
            description: '변수와 함수에 좋은 이름을 붙이세요',
            difficulty: 'easy',
            hints: ['이름만 봐도 용도를 알 수 있게', 'snake_case 사용'],
            estimatedMinutes: 3,
            starterCode: '# 나쁜 이름 -> 좋은 이름\n# def c(x,y,z): return (x+y+z)/3\n\ndef calculate_average(score1, score2, score3):\n    total = score1 + score2 + score3\n    return total / 3\n\nprint(calculate_average(85, 92, 78))',
            solution: 'def calculate_average(score1, score2, score3):\n    total = score1 + score2 + score3\n    return total / 3\n\nprint(calculate_average(85, 92, 78))',
            feedback: {
              perfect: '변수 명명을 완벽하게 개선했어요!',
              good: '가독성이 크게 향상됐어요!',
              partial: '의미를 담은 이름을 사용하세요.',
              wrong: '약어 대신 명확한 이름을 쓰세요.'
            }
          },
          {
            id: 'c2',
            title: '함수 단순화',
            description: '긴 함수를 작은 함수로 나누세요',
            difficulty: 'easy',
            hints: ['한 함수는 한 가지 일만', '20줄 이상이면 분리 고려'],
            estimatedMinutes: 5,
            starterCode: 'def validate(data):\n    return len(data) > 0\n\ndef transform(data):\n    return [x.strip().lower() for x in data]\n\ndef process(data):\n    if not validate(data): return None\n    return transform(data)\n\nprint(process(["  Hello ", " World  "]))',
            solution: 'def validate(data):\n    return len(data) > 0\n\ndef transform(data):\n    return [x.strip().lower() for x in data]\n\ndef process(data):\n    if not validate(data): return None\n    return transform(data)\n\nprint(process(["  Hello ", " World  "]))',
            feedback: {
              perfect: '함수 분리를 완벽하게 했어요!',
              good: '단일 책임을 잘 적용했어요!',
              partial: '검증과 변환을 각각 함수로 분리하세요.',
              wrong: '큰 함수를 작은 단위로 나누세요.'
            }
          },
          {
            id: 'c3',
            title: 'DRY 원칙',
            description: '반복 코드를 제거하세요',
            difficulty: 'medium',
            hints: ['같은 코드 2번 = 함수로 추출', 'DRY = Dont Repeat Yourself'],
            estimatedMinutes: 7,
            starterCode: 'def validate_score(score, name):\n    if not isinstance(score, (int, float)):\n        return f"{name}: 숫자가 아닙니다"\n    if score < 0 or score > 100:\n        return f"{name}: 범위 초과"\n    return None\n\nfor subj, sc in {"국어":85,"수학":110}.items():\n    err = validate_score(sc, subj)\n    print(err if err else f"{subj}: OK")',
            solution: 'def validate_score(score, name):\n    if not isinstance(score, (int, float)):\n        return f"{name}: 숫자가 아닙니다"\n    if score < 0 or score > 100:\n        return f"{name}: 범위 초과"\n    return None\n\nfor subj, sc in {"국어":85,"수학":110}.items():\n    err = validate_score(sc, subj)\n    print(err if err else f"{subj}: OK")',
            feedback: {
              perfect: 'DRY 원칙을 완벽하게 적용했어요!',
              good: '코드 재사용을 잘 이해했어요!',
              partial: '반복 로직을 함수로 추출하세요.',
              wrong: '같은 패턴을 하나의 함수로 묶으세요.'
            }
          },
          {
            id: 'c4',
            title: '에러 처리 강화',
            description: '견고한 에러 처리를 추가하세요',
            difficulty: 'medium',
            hints: ['예상 가능한 에러를 모두 처리', '친절한 에러 메시지'],
            estimatedMinutes: 10,
            starterCode: 'def divide(a, b):\n    try:\n        if not isinstance(a, (int,float)):\n            raise TypeError("숫자가 아닙니다")\n        if b == 0:\n            raise ValueError("0으로 나눌 수 없습니다")\n        return a / b\n    except (TypeError, ValueError) as e:\n        return f"에러: {e}"\n\nprint(divide(10, 3))\nprint(divide(10, 0))',
            solution: 'def divide(a, b):\n    try:\n        if not isinstance(a, (int,float)):\n            raise TypeError("숫자가 아닙니다")\n        if b == 0:\n            raise ValueError("0으로 나눌 수 없습니다")\n        return a / b\n    except (TypeError, ValueError) as e:\n        return f"에러: {e}"\n\nprint(divide(10, 3))\nprint(divide(10, 0))',
            feedback: {
              perfect: '에러 처리를 완벽하게 강화했어요!',
              good: '방어적 프로그래밍을 잘 적용했어요!',
              partial: 'raise로 명확한 에러를 발생시키세요.',
              wrong: 'isinstance로 타입 검사 후 에러를 raise하세요.'
            }
          },
          {
            id: 'c5',
            title: '리팩토링 종합',
            description: '전체 코드를 리팩토링하세요',
            difficulty: 'hard',
            hints: ['명명, 구조, 에러 처리 모두 개선', '테스트를 먼저 작성'],
            estimatedMinutes: 15,
            starterCode: 'class StudentManager:\n    def __init__(self):\n        self.students = []\n    def add(self, name, score):\n        if not name or not isinstance(score, (int,float)):\n            raise ValueError("유효하지 않은 입력")\n        self.students.append({"name":name,"score":score})\n    def average(self):\n        if not self.students: return 0\n        return sum(s["score"] for s in self.students)/len(self.students)\n\nm = StudentManager()\nm.add("철수", 85)\nm.add("영희", 92)\nprint(f"평균: {m.average():.1f}")',
            solution: 'class StudentManager:\n    def __init__(self):\n        self.students = []\n    def add(self, name, score):\n        if not name or not isinstance(score, (int,float)):\n            raise ValueError("유효하지 않은 입력")\n        self.students.append({"name":name,"score":score})\n    def average(self):\n        if not self.students: return 0\n        return sum(s["score"] for s in self.students)/len(self.students)\n\nm = StudentManager()\nm.add("철수", 85)\nm.add("영희", 92)\nprint(f"평균: {m.average():.1f}")',
            feedback: {
              perfect: '리팩토링을 완벽하게 수행했어요!',
              good: '깨끗한 코드 원칙을 잘 적용했어요!',
              partial: '클래스로 관련 기능을 묶으세요.',
              wrong: '명명, 구조, 에러 처리를 모두 개선하세요.'
            }
          }
        ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '4-30-6',
          title: 'Unit 4 최종 테스트',
          description: 'Python 심화 과정을 마무리해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'intermediate',
          exp: 100,
          estimatedMinutes: 20,
          concept: '최종 테스트',
          conceptExplanation: `
최종 테스트는 배운 모든 내용을 종합적으로 평가하는 단계입니다.
이론 지식뿐만 아니라 실전 적용 능력, 문제 해결 능력을 확인합니다.
완벽하게 통과하면 다음 단계로 나아갈 준비가 완료된 것입니다.
예: 종합 문제 풀이, 실전 프로젝트 완성, 코드 리뷰 등으로 실력을 검증합니다.
`,
          starterCode: '"""\nUnit 4 최종 테스트\n\n다음 조건을 만족하는 프로그램을 작성하세요:\n\n1. 학생 이름과 점수를 입력받아 리스트에 저장\n2. 평균 점수를 계산하는 함수 작성\n3. 최고점 학생을 찾는 함수 작성\n4. 결과를 JSON 파일로 저장\n5. 예외 처리로 잘못된 입력 대응\n"""\n\nimport json\n\ndef get_average(students):\n    """평균 점수 계산"""\n    # 여기에 코드 작성\n    pass\n\ndef get_top_student(students):\n    """최고점 학생 찾기"""\n    # 여기에 코드 작성\n    pass\n\ndef save_result(students, filename="result.json"):\n    """결과 저장"""\n    # 여기에 코드 작성\n    pass\n\n# 메인 프로그램\nstudents = []\n\nwhile True:\n    name = input("학생 이름 (종료: q): ")\n    if name == "q":\n        break\n    try:\n        score = int(input("점수: "))\n        students.append({"name": name, "score": score})\n    except ValueError:\n        print("숫자를 입력하세요.")\n\nif students:\n    print(f"평균: {get_average(students):.1f}")\n    print(f"최고점: {get_top_student(students)}")\n    save_result(students)\n    print("결과가 저장되었습니다.")\n',
          hints: [
            '리스트 안에 딕셔너리 저장',
            '리스트 컴프리헨션 활용',
            'max() 함수와 key 파라미터',
          ],
                    challenges: [
            {
              id: 'c1',
              title: '리스트와 함수 조합',
              description: '리스트를 처리하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['리스트를 매개변수로 받기', 'return으로 결과 반환', '내장 함수 활용'],
              estimatedMinutes: 4,
              starterCode: '# TODO: 리스트의 짝수만 필터링하고 합계를 반환\ndef sum_even(numbers):\n    pass\n\n# TODO: 리스트의 각 요소를 제곱한 새 리스트 반환\ndef square_list(numbers):\n    pass\n\nprint(sum_even([1,2,3,4,5,6]))     # 12\nprint(square_list([1,2,3,4,5]))    # [1,4,9,16,25]\n',
              solution: 'def sum_even(numbers):\n    return sum(n for n in numbers if n % 2 == 0)\n\ndef square_list(numbers):\n    return [n ** 2 for n in numbers]\n\nprint(sum_even([1,2,3,4,5,6]))\nprint(square_list([1,2,3,4,5]))',
              feedback: {
                perfect: '리스트와 함수 조합이 완벽해요!',
                good: '컴프리헨션 사용이 좋아요!',
                partial: '리스트 컴프리헨션을 사용하세요.',
                wrong: 'sum(n for n in numbers if n%2==0), [n**2 for n in numbers]'
              }
            },
            {
              id: 'c2',
              title: '딕셔너리와 파일 조합',
              description: '딕셔너리를 JSON 파일로 저장하고 읽으세요.',
              difficulty: 'easy',
              hints: ['json.dump으로 저장', 'json.load로 읽기', '데이터 검증 포함'],
              estimatedMinutes: 5,
              starterCode: 'import json\n\ndata = {\n    "students": [\n        {"name": "철수", "score": 85},\n        {"name": "영희", "score": 92}\n    ],\n    "subject": "수학"\n}\n\n# TODO: 1. data를 JSON 파일로 저장\n# TODO: 2. 파일에서 읽어와 평균 점수 계산\n',
              solution: 'import json\n\ndata = {\n    "students": [\n        {"name": "철수", "score": 85},\n        {"name": "영희", "score": 92}\n    ],\n    "subject": "수학"\n}\n\nwith open("final_test.json", "w", encoding="utf-8") as f:\n    json.dump(data, f, ensure_ascii=False, indent=2)\n\nwith open("final_test.json", "r", encoding="utf-8") as f:\n    loaded = json.load(f)\n\nscores = [s["score"] for s in loaded["students"]]\navg = sum(scores) / len(scores)\nprint(f"{loaded["subject"]} 평균: {avg:.1f}점")',
              feedback: {
                perfect: '딕셔너리와 파일 조합이 완벽해요!',
                good: 'JSON 처리가 정확해요!',
                partial: '파일에서 읽은 데이터로 평균을 구하세요.',
                wrong: 'json.dump으로 저장, json.load로 읽고 리스트 컴프리헨션으로 처리하세요.'
              }
            },
            {
              id: 'c3',
              title: '함수와 에러 처리 조합',
              description: '에러 처리가 포함된 데이터 처리 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['try-except로 에러 처리', '여러 에러 종류 처리', '함수로 깔끔하게 분리'],
              estimatedMinutes: 6,
              starterCode: 'def get_average(students):\n    """학생 리스트에서 평균 점수 반환"""\n    # TODO: 빈 리스트, 잘못된 데이터 에러 처리\n    pass\n\ndef get_top_student(students):\n    """최고점 학생 반환"""\n    # TODO\n    pass\n\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\n\nprint(f"평균: {get_average(students):.1f}")\nprint(f"최고: {get_top_student(students)}")\nprint(f"빈 리스트: {get_average([])}")\n',
              solution: 'def get_average(students):\n    try:\n        if not students:\n            return 0\n        total = sum(s["score"] for s in students)\n        return total / len(students)\n    except (KeyError, TypeError) as e:\n        print(f"데이터 오류: {e}")\n        return 0\n\ndef get_top_student(students):\n    try:\n        if not students:\n            return None\n        top = max(students, key=lambda s: s["score"])\n        return f"{top["name"]} ({top["score"]}점)"\n    except (KeyError, ValueError) as e:\n        print(f"데이터 오류: {e}")\n        return None\n\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\n\nprint(f"평균: {get_average(students):.1f}")\nprint(f"최고: {get_top_student(students)}")\nprint(f"빈 리스트: {get_average([])}")',
              feedback: {
                perfect: '함수와 에러 처리 조합이 완벽해요!',
                good: '데이터 처리가 안전해요!',
                partial: '빈 리스트 체크와 에러 처리를 추가하세요.',
                wrong: 'try-except로 에러를 처리하고 빈 리스트도 체크하세요.'
              }
            },
            {
              id: 'c4',
              title: '결과 파일 저장',
              description: '분석 결과를 JSON 파일로 저장하세요.',
              difficulty: 'medium',
              hints: ['분석 결과를 딕셔너리로 구성', 'json.dump으로 저장', '예외 처리 포함'],
              estimatedMinutes: 6,
              starterCode: 'import json\nfrom datetime import datetime\n\ndef save_result(students, filename="result.json"):\n    """분석 결과를 파일로 저장"""\n    # TODO: 평균, 최고점, 최저점, 날짜를 포함한 결과 저장\n    pass\n\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\nsave_result(students)\n',
              solution: 'import json\nfrom datetime import datetime\n\ndef save_result(students, filename="result.json"):\n    try:\n        avg = sum(s["score"] for s in students) / len(students)\n        top = max(students, key=lambda s: s["score"])\n        low = min(students, key=lambda s: s["score"])\n        result = {\n            "date": datetime.now().strftime("%Y-%m-%d %H:%M"),\n            "count": len(students),\n            "average": round(avg, 1),\n            "top": {"name": top["name"], "score": top["score"]},\n            "lowest": {"name": low["name"], "score": low["score"]},\n            "students": students\n        }\n        with open(filename, "w", encoding="utf-8") as f:\n            json.dump(result, f, ensure_ascii=False, indent=2)\n        print(f"결과 저장 완료: {filename}")\n    except Exception as e:\n        print(f"저장 실패: {e}")\n\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\nsave_result(students)',
              feedback: {
                perfect: '결과 저장을 완벽하게 구현했어요!',
                good: '분석 결과가 잘 저장돼요!',
                partial: '날짜와 통계 정보를 포함하세요.',
                wrong: '평균, 최고점 등을 계산하고 json.dump로 저장하세요.'
              }
            },
            {
              id: 'c5',
              title: 'Unit 4 종합 과제',
              description: '리스트, 딕셔너리, 함수, 파일, 에러 처리를 모두 활용한 프로그램을 만드세요.',
              difficulty: 'hard',
              hints: ['모든 Unit 4 개념 통합', '함수로 기능 분리', 'JSON으로 데이터 영속화'],
              estimatedMinutes: 10,
              starterCode: '"""\nUnit 4 종합 과제\n\n학생 성적 관리 + 분석 + 저장\n모든 개념을 활용하세요!\n"""\nimport json\nimport os\n\n# TODO: 완전한 프로그램 구현\n# 1. 학생 등록 (이름, 점수)\n# 2. 전체 조회\n# 3. 분석 (평균, 최고, 최저)\n# 4. JSON 저장/로드\n# 5. 에러 처리\n',
              solution: 'import json\nimport os\n\nFILE = "u4_final.json"\n\ndef load():\n    if os.path.exists(FILE):\n        with open(FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return []\n\ndef save(data):\n    with open(FILE, "w", encoding="utf-8") as f:\n        json.dump(data, f, ensure_ascii=False, indent=2)\n\ndef add(students):\n    try:\n        name = input("이름: ")\n        score = int(input("점수: "))\n        assert 0 <= score <= 100, "0~100 사이"\n        students.append({"name": name, "score": score})\n        save(students)\n        print("추가 완료!")\n    except (ValueError, AssertionError) as e:\n        print(f"입력 오류: {e}")\n\ndef view(students):\n    if not students:\n        print("데이터 없음")\n        return\n    for s in students:\n        print(f"  {s["name"]}: {s["score"]}점")\n\ndef analyze(students):\n    if not students:\n        print("데이터 없음")\n        return\n    scores = [s["score"] for s in students]\n    avg = sum(scores) / len(scores)\n    top = max(students, key=lambda x: x["score"])\n    low = min(students, key=lambda x: x["score"])\n    print(f"평균: {avg:.1f}, 최고: {top["name"]}({top["score"]}), 최저: {low["name"]}({low["score"]})")\n\nstudents = load()\nwhile True:\n    print("\n1.추가 2.조회 3.분석 4.종료")\n    c = input("> ")\n    if c == "1": add(students)\n    elif c == "2": view(students)\n    elif c == "3": analyze(students)\n    elif c == "4": break',
              feedback: {
                perfect: 'Unit 4의 모든 개념을 완벽하게 통합했어요! 훌륭합니다!',
                good: '대부분의 기능이 잘 작동해요!',
                partial: '에러 처리와 파일 저장을 완성하세요.',
                wrong: '함수로 분리하고, JSON으로 저장하며, try-except로 에러를 처리하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      project: {
        id: 'project-4',
        title: 'Python 심화 종합 프로젝트',
        description: 'Unit 4에서 배운 모든 내용을 활용한 프로젝트',
        difficulty: 'intermediate',
        duration: '40분',
        requirements: ["함수 정의와 활용', '리스트와 딕셔너리', '파일 처리"],
        exp: 200,
      },
      quiz: {
        id: 'quiz-30',
        title: 'Unit 4 최종 퀴즈',
        questions: [
          {
            id: 'q30-1',
            question: '딕셔너리에서 모든 키-값 쌍을 순회하는 메서드는?',
            options: ['keys()', 'values()', 'items()', 'all()'],
            correctAnswer: 2,
            explanation: 'items() 메서드로 모든 키-값 쌍을 (key, value) 튜플로 순회할 수 있어요. keys()는 키만, values()는 값만 반환합니다!'
          },
          {
            id: 'q30-2',
            question: '함수에서 값을 반환하는 키워드는?',
            options: ['give', 'return', 'send', 'output'],
            correctAnswer: 1,
            explanation: 'return 키워드로 함수에서 값을 반환해요. return을 만나면 함수가 즉시 종료되고 값이 반환됩니다!'
          },
          {
            id: 'q30-3',
            question: 'JSON 파일을 읽어서 딕셔너리로 변환하는 함수는?',
            options: ['json.read()', 'json.load()', 'json.parse()', 'json.decode()'],
            correctAnswer: 1,
            explanation: 'json.load()는 파일에서 JSON을 읽어 딕셔너리로 변환해요. json.dump()는 딕셔너리를 JSON 파일로 저장합니다!'
          },
          {
            id: 'q30-4',
            question: 'Unit 4에서 배운 자료구조가 아닌 것은?',
            options: ['리스트', '딕셔너리', '튜플', '배열'],
            correctAnswer: 3,
            explanation: 'Python에는 배열이 없어요! 리스트, 딕셔너리, 튜플, 집합(set)이 주요 자료구조입니다. 배열은 NumPy 같은 라이브러리에서 사용해요!'
          },
          {
            id: 'q30-5',
            question: '다음 중 불변(immutable) 자료구조는?',
            options: ['리스트', '딕셔너리', '튜플', '집합'],
            correctAnswer: 2,
            explanation: '튜플은 불변이라 생성 후 수정할 수 없어요! 리스트, 딕셔너리, 집합은 모두 가변(mutable)입니다.'
          },
        ],
      },
    },
  ],
};

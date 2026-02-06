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
              solution: 'fruits = [\'사과\', \'바나나\', \'포도\']\nprint(fruits[1])',
              testCases: [
                { input: 'fruits[1]', expected: '바나나' },
                { input: '[10,20,30][1]', expected: '20' },
                { input: '[1,2,3][0]', expected: '1' },
                { input: '[1,2,3][2]', expected: '3' },
                { input: '[\'a\',\'b\'][0]', expected: 'a' },
              ],
              feedback: {
                perfect: '리스트와 인덱싱을 정확히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: '[\'a\',\'b\'][-1]', expected: 'b' },
                { input: '[99][-1]', expected: '99' },
              ],
              feedback: {
                perfect: '음수 인덱스를 완벽히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'colors = [\'빨강\', \'파랑\', \'초록\']\nprint(f\'개수: {len(___)}\') \nfor ___ in colors:\n    print(c)',
              solution: 'print(f\'개수: {len(colors)}\')\nfor c in colors:\n    print(c)',
              testCases: [
                { input: 'len([\'빨강\',\'파랑\',\'초록\'])', expected: '3' },
                { input: 'len([])', expected: '0' },
                { input: 'len([1])', expected: '1' },
                { input: 'len(list(range(10)))', expected: '10' },
                { input: 'len([\'a\',\'b\',\'c\',\'d\'])', expected: '4' },
              ],
              feedback: {
                perfect: 'len()과 for문을 잘 사용했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'shop = [\'사과\', \'빵\', \'계란\']\nshop.___(\'우유\')\nshop.___(\'빵\')\nprint(shop)',
              solution: 'shop.append(\'우유\')\nshop.remove(\'빵\')',
              testCases: [
                { input: '결과', expected: '[\'사과\', \'계란\', \'우유\']' },
                { input: 'len(결과)', expected: '3' },
                { input: '[1,2].append(3)', expected: '[1,2,3]' },
                { input: '[1,2,3].remove(2)', expected: '[1,3]' },
                { input: '[\'a\',\'b\'].append(\'c\')', expected: '[\'a\',\'b\',\'c\']' },
              ],
              feedback: {
                perfect: 'append와 remove를 정확히 사용했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'fruits = [\'사과\', \'바나나\', \'포도\']\nfruit = \'바나나\'\nif ___ ___ fruits:\n    print(\'있습니다!\')',
              solution: 'if fruit in fruits:\n    print(\'있습니다!\')',
              testCases: [
                { input: '\'바나나\' in [\'사과\',\'바나나\']', expected: 'True' },
                { input: '\'수박\' in [\'사과\',\'바나나\']', expected: 'False' },
                { input: '3 in [1,2,3,4]', expected: 'True' },
                { input: '5 not in [1,2,3]', expected: 'True' },
                { input: '\'\' in [\'a\',\'b\']', expected: 'False' },
              ],
              feedback: {
                perfect: 'in 연산자를 완벽히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'students = [\'김철수\', \'이영희\', \'박민수\']\nfor ___, ___ in enumerate(students):\n    print(f\'{i+1}번: {name}\')',
              solution: 'for i, name in enumerate(students):\n    print(f\'{i+1}번: {name}\')',
              testCases: [
                { input: 'list(enumerate([\'a\',\'b\',\'c\']))', expected: '[(0,\'a\'),(1,\'b\'),(2,\'c\')]' },
                { input: 'list(enumerate([\'x\'],start=1))', expected: '[(1,\'x\')]' },
                { input: 'list(enumerate([]))', expected: '[]' },
                { input: 'list(enumerate([10,20]))[0]', expected: '(0, 10)' },
                { input: 'len(list(enumerate([1,2,3])))', expected: '3' },
              ],
              feedback: {
                perfect: 'enumerate를 멋지게 활용했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'split_idx([\'a\',\'b\',\'c\',\'d\'])[0]', expected: '[\'a\',\'c\']' },
                { input: 'split_idx([\'a\',\'b\',\'c\',\'d\'])[1]', expected: '[\'b\',\'d\']' },
                { input: 'split_idx([1,2,3])[0]', expected: '[1,3]' },
                { input: 'split_idx([1])[1]', expected: '[]' },
                { input: 'split_idx([])[0]', expected: '[]' },
              ],
              feedback: {
                perfect: '간격 슬라이싱 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'analyze([10,20,30,40,50],3,2)[\'recent\']', expected: '[30,40,50]' },
                { input: 'analyze([10,20,30,40,50],3,2)[\'top\']', expected: '[50,40]' },
                { input: 'analyze([10,20,30,40,50],3,2)[\'avg\']', expected: '40.0' },
                { input: 'analyze([100,100],2,1)[\'top\']', expected: '[100]' },
                { input: 'len(analyze(list(range(100)),5,3)[\'top\'])', expected: '3' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'sorted()는 새 리스트(원본 불변)', suggestion: 'sorted()는 새 리스트(원본 불변)' },
                { pattern: '일반', message: '빈 리스트 평균 에러 방지', suggestion: '빈 리스트 평균 에러 방지' },
              ],
              feedback: {
                perfect: '파이프라인 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'todo = [\'공부\',\'운동\']\ntodo.append(\'독서\')\ntodo.insert(1,\'식사\')\nprint(todo)',
              solution: '# [\'공부\',\'식사\',\'운동\',\'독서\']',
              testCases: [
                { input: '결과', expected: '[\'공부\',\'식사\',\'운동\',\'독서\']' },
                { input: '[1,3].insert(1,2)', expected: '[1,2,3]' },
                { input: '[].append(1)', expected: '[1]' },
                { input: '[1,2].insert(0,\'a\')', expected: '[\'a\',1,2]' },
                { input: 'len(결과)', expected: '4' },
              ],
              feedback: {
                perfect: 'append와 insert 정확!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'fruits = [\'사과\',\'바나나\',\'포도\',\'바나나\']\nfruits.remove(\'바나나\')\nlast = fruits.pop()\nprint(last, fruits)',
              solution: 'fruits.remove(\'바나나\')\nlast = fruits.pop()',
              testCases: [
                { input: 'remove 후', expected: '[\'사과\',\'포도\',\'바나나\']' },
                { input: 'pop() 반환', expected: '바나나' },
                { input: '[1,2,3].pop(0)', expected: '1' },
                { input: '[1,2,3].pop()', expected: '3' },
                { input: '최종', expected: '[\'사과\',\'포도\']' },
              ],
              feedback: {
                perfect: 'remove와 pop 정확!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'grades = [\'A\',\'B\',\'A\',\'C\',\'B\',\'A\',\'B\']\nprint(grades.count(\'A\'))  # 3\nprint(grades.index(\'B\'))  # 1',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              solution: '# count(\'사과\')=2 -> remove -> sort\n# 결과: [\'바나나\',\'사과\']',
              testCases: [
                { input: 'count before remove', expected: '2' },
                { input: 'sort 후', expected: '[\'바나나\',\'사과\']' },
                { input: 'len(최종)', expected: '2' },
                { input: '\'바나나\' in 결과', expected: 'True' },
                { input: 'count(\'사과\') 최종', expected: '1' },
              ],
              feedback: {
                perfect: '메서드 조합 멋져요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'words = [\'banana\',\'pie\',\'strawberry\',\'kiwi\']\nwords.sort(key=len)\n\nnums = [-5,3,-1,4,-2]\nnums.sort(key=abs)',
              solution: 'words.sort(key=len)\nnums.sort(key=abs)',
              testCases: [
                { input: 'sorted([\'banana\',\'pie\',\'kiwi\'],key=len)', expected: '[\'pie\',\'kiwi\',\'banana\']' },
                { input: 'sorted([-5,3,-1,4],key=abs)', expected: '[-1,3,4,-5]' },
                { input: 'sorted([\'c\',\'aaa\',\'bb\'],key=len)', expected: '[\'c\',\'bb\',\'aaa\']' },
                { input: 'sorted([3,-1,2],key=abs)', expected: '[-1,2,3]' },
                { input: 'sorted([\'B\',\'a\',\'C\'],key=str.lower)', expected: '[\'a\',\'B\',\'C\']' },
              ],
              feedback: {
                perfect: '커스텀 정렬 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'remove_dup([\'a\',\'b\',\'a\'])', expected: '[\'a\',\'b\']' },
              ],
              commonErrors: [
                { pattern: '일반', message: 'list(set())은 순서 비보장', suggestion: 'list(set())은 순서 비보장' },
                { pattern: '일반', message: 'set에서 in 연산은 O(1)', suggestion: 'set에서 in 연산은 O(1)' },
              ],
              feedback: {
                perfect: '중복 제거 효율적!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'def count_votes(votes):\n    candidates = list(set(votes))\n    results = []\n    for c in candidates:\n        results.append({\'name\':c,\'votes\':votes.count(c)})\n    results.sort(key=lambda x:x[\'votes\'], reverse=True)\n    return results',
              solution: 'def count_votes(v):\n    r=[{\'name\':c,\'votes\':v.count(c)} for c in set(v)]\n    r.sort(key=lambda x:x[\'votes\'],reverse=True); return r',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: '[s for s in [\'a\',\'\',\'b\'] if s]', expected: '[\'a\',\'b\']' },
                { input: '[x for x in [] if x>0]', expected: '[]' },
              ],
              feedback: {
                perfect: '조건부 필터링 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'names = [\'alice\',\'bob\',\'charlie\']\nupper = [n.upper() for n in names]\nlengths = [len(n) for n in names]',
              solution: 'upper=[n.upper() for n in names]',
              testCases: [
                { input: '[n.upper() for n in [\'alice\',\'bob\']]', expected: '[\'ALICE\',\'BOB\']' },
                { input: '[len(n) for n in [\'hi\',\'hello\']]', expected: '[2,5]' },
                { input: '[s.strip() for s in [\' a \',\'b \']]', expected: '[\'a\',\'b\']' },
                { input: '[s.title() for s in [\'hello world\']]', expected: '[\'Hello World\']' },
                { input: '[s.replace(\'a\',\'@\') for s in [\'abc\']]', expected: '[\'@bc\']' },
              ],
              feedback: {
                perfect: '문자열 변환 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: '[a+b for a in \'ab\' for b in \'12\']', expected: '[\'a1\',\'a2\',\'b1\',\'b2\']' },
              ],
              feedback: {
                perfect: '중첩 컴프리헨션 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: '[\'짝\' if x%2==0 else \'홀\' for x in range(1,4)]', expected: '[\'홀\',\'짝\',\'홀\']' },
                { input: '[\'합격\' if s>=60 else \'불합격\' for s in [70,50]]', expected: '[\'합격\',\'불합격\']' },
                { input: '[x if x>0 else 0 for x in [-1,2,-3,4]]', expected: '[0,2,0,4]' },
                { input: '[\'O\' if x else \'X\' for x in [True,False]]', expected: '[\'O\',\'X\']' },
                { input: '[abs(x) for x in [-1,-2,3]]', expected: '[1,2,3]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '필터 if는 뒤에, 변환 if-else는 앞에', suggestion: '필터 if는 뒤에, 변환 if-else는 앞에' },
              ],
              feedback: {
                perfect: '삼항연산자 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: '{len(s) for s in [\'hi\',\'hey\',\'ha\']}', expected: '{2,3}' },
                { input: '{x:0 for x in \'abc\'}', expected: '{\'a\':0,\'b\':0,\'c\':0}' },
              ],
              feedback: {
                perfect: '딕셔너리/집합 컴프리헨션 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'raw = [\'  Alice  \',\'\',\'BOB\',\'  \',\'charlie\']\nresult = [s.strip().lower() for s in raw if s.strip()]',
              solution: 'result=[s.strip().lower() for s in raw if s.strip()]',
              testCases: [
                { input: '[s.strip().lower() for s in [\' A \',\'\',\'B \'] if s.strip()]', expected: '[\'a\',\'b\']' },
                { input: '[s for s in [\'a\',\'\',\'b\'] if s]', expected: '[\'a\',\'b\']' },
                { input: 'len(정제 후)', expected: '3' },
                { input: '[s.strip() for s in [\' x \',\' \',\'y\']]', expected: '[\'x\',\'\',\'y\']' },
                { input: '[s.strip() for s in []]', expected: '[]' },
              ],
              commonErrors: [
                { pattern: '일반', message: '조건절에서도 strip() 호출 필요', suggestion: '조건절에서도 strip() 호출 필요' },
                { pattern: '일반', message: '공백만 있는 문자열 필터링', suggestion: '공백만 있는 문자열 필터링' },
              ],
              feedback: {
                perfect: '데이터 정제 멋져요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'fizzbuzz(5)', expected: '[\'1\',\'2\',\'Fizz\',\'4\',\'Buzz\']' },
                { input: 'fizzbuzz(15)[-1]', expected: 'FizzBuzz' },
                { input: 'fizzbuzz(3)', expected: '[\'1\',\'2\',\'Fizz\']' },
                { input: 'fizzbuzz(1)', expected: '[\'1\']' },
                { input: 'fizzbuzz(15).count(\'FizzBuzz\')', expected: '1' },
              ],
              commonErrors: [
                { pattern: '일반', message: '15의 배수를 먼저 체크(3과 5 둘 다 만족)', suggestion: '15의 배수를 먼저 체크(3과 5 둘 다 만족)' },
                { pattern: '일반', message: 'str(i)로 문자열 변환 필수', suggestion: 'str(i)로 문자열 변환 필수' },
              ],
              feedback: {
                perfect: 'FizzBuzz 한 줄 멋져요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'board = [[\' \']*3 for _ in range(3)]\n\ndef place(board, row, col, mark):\n    if board[row][col] == \' \':\n        board[row][col] = mark\n        return True\n    return False\n\ndef show(board):\n    for row in board:\n        print(\'|\'.join(row))\n        print(\'-\'*5)\n\nplace(board, 1, 1, \'X\')\nplace(board, 0, 0, \'O\')\nshow(board)',
              solution: 'board = [[\' \']*3 for _ in range(3)]\ndef place(b,r,c,m):\n    if b[r][c]==\' \': b[r][c]=m; return True\n    return False',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'def find_in_map(game_map, target):\n    """게임 맵에서 target의 위치들을 반환"""\n    positions = []\n    for i, row in enumerate(game_map):\n        for j, cell in enumerate(row):\n            if cell == target:\n                positions.append((i, j))\n    return positions\n\nmap1 = [\n    [\'.\',\'.\',\'#\'],\n    [\'.\',\'P\',\'.\'],\n    [\'#\',\'.\',\'.\'],\n]\nprint(find_in_map(map1, \'P\'))  # [(1,1)]\nprint(find_in_map(map1, \'#\'))  # [(0,2),(2,0)]',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'sentence = \'Hello World Python\'\nwords = sentence.split()\nprint(words)  # [\'Hello\', \'World\', \'Python\']\n\ncsv = \'apple,banana,grape\'\nfruits = csv.split(\',\')\nprint(fruits)',
              solution: 'words = sentence.split()\nfruits = csv.split(\',\')',
              testCases: [
                { input: '\'Hello World\'.split()', expected: '[\'Hello\', \'World\']' },
                { input: '\'a,b,c\'.split(\',\')', expected: '[\'a\', \'b\', \'c\']' },
                { input: '\'\'.split()', expected: '[]' },
                { input: '\'abc\'.split()', expected: '[\'abc\']' },
                { input: '\'1-2-3\'.split(\'-\')', expected: '[\'1\', \'2\', \'3\']' },
              ],
              feedback: {
                perfect: 'split 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'words = [\'Hello\', \'World\']\nresult = \' \'.join(words)\nprint(result)  # \'Hello World\'\n\nnums = [\'1\', \'2\', \'3\']\nprint(\'-\'.join(nums))  # \'1-2-3\'',
              solution: '\' \'.join([\'Hello\',\'World\'])\n\'-\'.join([\'1\',\'2\',\'3\'])',
              testCases: [
                { input: '\' \'.join([\'Hello\',\'World\'])', expected: 'Hello World' },
                { input: '\'-\'.join([\'1\',\'2\',\'3\'])', expected: '1-2-3' },
                { input: '\',\'.join([\'a\',\'b\',\'c\'])', expected: 'a,b,c' },
                { input: '\'\'.join([\'a\',\'b\'])', expected: 'ab' },
                { input: '\' \'.join([])', expected: '' },
              ],
              feedback: {
                perfect: 'join 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '\'구분자\'.join(리스트) 형태',
              },
            },
            {
              id: "c3",
              title: '문자열과 리스트 상호변환',
              description: 'list()와 join()으로 문자열-리스트 변환을 연습하세요.',
              difficulty: "easy",
              hints: [
                'list(\'abc\') = [\'a\',\'b\',\'c\']',
                '\'\'.join([\'a\',\'b\',\'c\']) = \'abc\'',
              ],
              estimatedMinutes: 4,
              starterCode: 'chars = list(\'Python\')\nprint(chars)  # [\'P\',\'y\',\'t\',\'h\',\'o\',\'n\']\nback = \'\'.join(chars)\nprint(back)  # \'Python\'',
              solution: 'chars = list(\'Python\')\nback = \'\'.join(chars)',
              testCases: [
                { input: 'list(\'Python\')', expected: '[\'P\',\'y\',\'t\',\'h\',\'o\',\'n\']' },
                { input: '\'\'.join([\'P\',\'y\'])', expected: 'Py' },
                { input: 'list(\'\')', expected: '[]' },
                { input: '\'\'.join([])', expected: '' },
                { input: 'list(\'abc\')', expected: '[\'a\',\'b\',\'c\']' },
              ],
              feedback: {
                perfect: '문자열-리스트 변환 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'parse_csv(\'a,b\\nc,d\')', expected: '[[\'a\',\'b\'],[\'c\',\'d\']]' },
                { input: 'len(parse_csv(\'a,b\\nc,d\'))', expected: '2' },
                { input: 'parse_csv(\'x\')', expected: '[[\'x\']]' },
                { input: 'parse_csv(\'1,2,3\\n4,5,6\')[1]', expected: '[\'4\',\'5\',\'6\']' },
                { input: 'parse_csv(\'a,b\\nc,d\')[0][1]', expected: 'b' },
              ],
              feedback: {
                perfect: 'CSV 파싱 멋져요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'name = \'Alice\'\nscore = 95.678\nrank = 3\n\n# f-string\nprint(f\'{name}의 점수: {score:.1f}점 (등수: {rank}위)\')\n\n# format()\nprint(\'{0}의 점수: {1:.1f}점\'.format(name, score))\n\n# 정렬\nfor item in [\'사과\',\'바나나\',\'포도\']:\n    print(f\'{item:>10}\')  # 오른쪽 정렬, 10칸',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'def to_markdown(headers, data):\n    widths = [max(len(str(h)), max(len(str(row[i])) for row in data))\n              for i, h in enumerate(headers)]\n    header = \'| \' + \' | \'.join(h.ljust(w) for h, w in zip(headers, widths)) + \' |\'\n    sep = \'|\' + \'|\'.join(\'-\'*(w+2) for w in widths) + \'|\'\n    rows = []\n    for row in data:\n        r = \'| \' + \' | \'.join(str(v).ljust(w) for v, w in zip(row, widths)) + \' |\'\n        rows.append(r)\n    return \'\\n\'.join([header, sep] + rows)\n\nprint(to_markdown([\'이름\',\'점수\'], [[\'Alice\',95],[\'Bob\',87]]))',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'names = [\'Alice\', \'Bob\', \'Charlie\']\nscores = [95, 87, 92]\nfor name, score in zip(names, scores):\n    print(f\'{name}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'names = [\'Alice\',\'Bob\',\'Charlie\']\nscores = [95, 87, 92]\nfor i, (name, score) in enumerate(zip(names, scores), 1):\n    print(f\'{i}. {name}: {score}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'data = [\'  alice  \', \'\', \'  BOB  \', \'  \', \'charlie\']\n# filter로 빈값 제거 + map으로 정리\ncleaned = list(map(str.strip, data))\nresult = list(filter(None, cleaned))\nresult = [s.title() for s in result]\nprint(result)  # [\'Alice\', \'Bob\', \'Charlie\']',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: '# 튜플: 좌표, RGB, 날짜 등 고정 데이터\nposition = (10, 20)\ncolor = (255, 128, 0)\ndate = (2024, 1, 15)\n\n# 리스트: 장바구니, 점수 등 변경 가능\ncart = [\'사과\', \'바나나\']\nscores = [85, 92, 78]',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'from collections import namedtuple\n\nPoint = namedtuple(\'Point\', [\'x\', \'y\'])\np = Point(3, 4)\nprint(p.x, p.y)  # 3 4\nprint(p[0])       # 3 (인덱스도 가능)',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'person = {\'name\': \'김코딩\', \'age\': 14}\nprint(person[\'name\'])  # 김코딩\nprint(person[\'age\'])   # 14',
              solution: 'person = {\'name\':\'김코딩\',\'age\':14}',
              testCases: [
                { input: 'person[\'name\']', expected: '김코딩' },
                { input: 'person[\'age\']', expected: '14' },
                { input: 'len(person)', expected: '2' },
                { input: 'type(person)', expected: '<class \'dict\'>' },
                { input: '{}.keys()', expected: 'dict_keys([])' },
              ],
              feedback: {
                perfect: '딕셔너리 생성 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'd = {\'a\': 1, \'b\': 2}\nprint(d[\'a\'])  # 1\nprint(d.get(\'c\', 0))  # 0 (없으면 기본값)\n# print(d[\'c\'])  # KeyError!',
              solution: 'd[\'a\']  # 직접 접근\nd.get(\'c\', 0)  # 안전 접근',
              testCases: [
                { input: 'd[\'a\']', expected: '1' },
                { input: 'd.get(\'c\',0)', expected: '0' },
                { input: 'd.get(\'b\')', expected: '2' },
                { input: 'd.get(\'x\')', expected: 'None' },
                { input: 'd.get(\'x\',\'없음\')', expected: '없음' },
              ],
              feedback: {
                perfect: '안전한 접근법을 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'student = {\'name\': \'Alice\'}\nstudent[\'age\'] = 14      # 추가\nstudent[\'score\'] = 95    # 추가\nstudent[\'score\'] = 98    # 수정\nprint(student)',
              solution: 'student[\'age\']=14; student[\'score\']=95; student[\'score\']=98',
              testCases: [
                { input: 'student after all', expected: '{\'name\':\'Alice\',\'age\':14,\'score\':98}' },
                { input: 'len(student)', expected: '3' },
                { input: 'student[\'score\']', expected: '98' },
                { input: '새키 추가 후 len', expected: '증가' },
                { input: '기존키 수정 후 len', expected: '동일' },
              ],
              feedback: {
                perfect: '추가와 수정을 정확히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: '# 리스트: 위치(인덱스)로 접근\nstudent_list = [\'Alice\', 14, 95]\nprint(student_list[0])  # Alice\n\n# 딕셔너리: 키로 접근 (더 명확!)\nstudent_dict = {\'name\':\'Alice\', \'age\':14, \'score\':95}\nprint(student_dict[\'name\'])  # Alice',
              solution: '# 딕셔너리가 데이터 의미를 더 잘 표현',
              testCases: [
                { input: '리스트 접근', expected: '인덱스 번호' },
                { input: '딕셔너리 접근', expected: '의미있는 키' },
                { input: '리스트[0]', expected: 'Alice' },
                { input: '딕셔너리[\'name\']', expected: 'Alice' },
                { input: '가독성', expected: '딕셔너리가 더 좋음' },
              ],
              feedback: {
                perfect: '차이를 정확히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'd = {\'a\':1, \'b\':2, \'c\':3}\ndel d[\'a\']      # \'a\' 삭제\nval = d.pop(\'b\')  # \'b\' 삭제하고 값(2) 반환\nprint(d)    # {\'c\': 3}\nprint(val)  # 2',
              solution: 'del d[\'a\']\nval = d.pop(\'b\')',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'list(scores.keys())', expected: '[\'Alice\',\'Bob\',\'Charlie\']' },
                { input: 'list(scores.values())', expected: '[95,87,92]' },
                { input: 'list(scores.items())', expected: '[(\'Alice\',95),(\'Bob\',87),(\'Charlie\',92)]' },
                { input: 'for k in d: k는', expected: '키' },
                { input: 'len(scores.items())', expected: '3' },
              ],
              feedback: {
                perfect: '딕셔너리 순회를 완벽히 이해했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: '# 제곱수 딕셔너리\nsquares = {x: x**2 for x in range(1, 6)}\nprint(squares)  # {1:1, 2:4, 3:9, 4:16, 5:25}\n\n# 두 리스트에서 딕셔너리\nnames = [\'Alice\',\'Bob\']\nscores = [95, 87]\nresult = {n:s for n,s in zip(names, scores)}',
              solution: 'squares={x:x**2 for x in range(1,6)}\nresult={n:s for n,s in zip(names,scores)}',
              testCases: [
                { input: '{x:x**2 for x in range(1,4)}', expected: '{1:1,2:4,3:9}' },
                { input: '{n:s for n,s in zip([\'a\',\'b\'],[1,2])}', expected: '{\'a\':1,\'b\':2}' },
                { input: '{x:0 for x in \'abc\'}', expected: '{\'a\':0,\'b\':0,\'c\':0}' },
                { input: '{k:v for k,v in [(\'x\',1)]}', expected: '{\'x\':1}' },
                { input: 'len({x:x for x in range(5)})', expected: '5' },
              ],
              feedback: {
                perfect: '딕셔너리 컴프리헨션 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'import json\n\n# 딕셔너리 -> JSON 문자열\nperson = {\'name\': \'Alice\', \'age\': 14}\njson_str = json.dumps(person, ensure_ascii=False)\nprint(json_str)  # {"name": "Alice", "age": 14}\n\n# JSON 문자열 -> 딕셔너리\ndata = json.loads(json_str)\nprint(data[\'name\'])  # Alice',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'word_count(\'a a a\')[\'a\']', expected: '3' },
                { input: 'len(word_count(\'a b c\'))', expected: '3' },
              ],
              commonErrors: [
                { pattern: '일반', message: '대소문자 통일 안 하면 \'The\'와 \'the\'가 별도', suggestion: '대소문자 통일 안 하면 \'The\'와 \'the\'가 별도' },
                { pattern: '일반', message: '구두점 처리도 고려할 수 있음', suggestion: '구두점 처리도 고려할 수 있음' },
              ],
              feedback: {
                perfect: '단어 빈도 카운터 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'keys = [\'name\', \'age\', \'score\']\nvalues = [\'Alice\', 14, 95]\nstudent = dict(zip(keys, values))\nprint(student)',
              solution: 'student = dict(zip(keys, values))',
              testCases: [
                { input: 'dict(zip([\'a\',\'b\'],[1,2]))', expected: '{\'a\':1,\'b\':2}' },
                { input: 'dict(zip([],[]))', expected: '{}' },
                { input: 'len(result)', expected: '3' },
                { input: 'result[\'name\']', expected: 'Alice' },
                { input: 'dict(zip(\'ab\',[1,2]))', expected: '{\'a\':1,\'b\':2}' },
              ],
              feedback: {
                perfect: 'zip으로 딕셔너리 생성 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
              starterCode: 'subjects = [\'수학\', \'영어\', \'과학\']\nscores = dict.fromkeys(subjects, 0)\nprint(scores)  # {\'수학\':0, \'영어\':0, \'과학\':0}',
              solution: 'scores = dict.fromkeys(subjects, 0)',
              testCases: [
                { input: 'dict.fromkeys([\'a\',\'b\'],0)', expected: '{\'a\':0,\'b\':0}' },
                { input: 'dict.fromkeys(\'abc\',1)', expected: '{\'a\':1,\'b\':1,\'c\':1}' },
                { input: 'dict.fromkeys([],0)', expected: '{}' },
                { input: 'dict.fromkeys([\'x\'])', expected: '{\'x\':None}' },
                { input: 'len(dict.fromkeys(range(3),0))', expected: '3' },
              ],
              feedback: {
                perfect: 'fromkeys 활용 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'list({\'a\':1,\'b\':2}.keys())', expected: '[\'a\',\'b\']' },
                { input: 'list({\'a\':1,\'b\':2}.values())', expected: '[1,2]' },
                { input: 'list({\'a\':1}.items())', expected: '[(\'a\',1)]' },
                { input: 'list({}.keys())', expected: '[]' },
                { input: 'dict(list(d.items()))', expected: '원본과 동일' },
              ],
              feedback: {
                perfect: '딕셔너리-리스트 변환 완벽!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'group_by_class([(\'A\',1)])[\'A\']', expected: '[1]' },
              ],
              feedback: {
                perfect: '그룹핑을 멋지게 구현했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                { input: 'Counter(\'abc\')[\'a\']', expected: '1' },
                { input: 'Counter(\'abc\')[\'x\']', expected: '0' },
                { input: 'dict(Counter(\'aab\'))', expected: '{\'a\':2,\'b\':1}' },
              ],
              feedback: {
                perfect: 'Counter를 멋지게 활용했어요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'scores = {\'Alice\':85, \'Bob\':92}\nscores[\'Alice\'] = 90\nprint(scores)  # {\'Alice\':90, \'Bob\':92}',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'school = {\n    \'class_a\': {\'teacher\':\'Kim\', \'students\':30},\n    \'class_b\': {\'teacher\':\'Lee\', \'students\':28}\n}\nschool[\'class_a\'][\'students\'] = 31\nprint(school[\'class_a\'])',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'class StudentDB:\n    def __init__(self): self.db = {}\n    def add(self, id, name, score):\n        self.db[id] = {\'name\':name,\'score\':score}\n    def update(self, id, **kwargs):\n        if id in self.db: self.db[id].update(kwargs)\n    def delete(self, id): self.db.pop(id, None)\n    def search(self, name):\n        return {k:v for k,v in self.db.items() if v[\'name\']==name}\n    def top_n(self, n):\n        return dict(sorted(self.db.items(), key=lambda x:x[1][\'score\'], reverse=True)[:n])',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'grades = {\n    \'Alice\': {\'수학\':95,\'영어\':88,\'과학\':92},\n    \'Bob\':   {\'수학\':78,\'영어\':85,\'과학\':80},\n    \'Charlie\':{\'수학\':92,\'영어\':90,\'과학\':88}\n}\n\n# 학생별 평균\nfor name, subjects in grades.items():\n    avg = sum(subjects.values()) / len(subjects)\n    print(f\'{name}: 평균 {avg:.1f}점\')\n\n# 과목별 평균\nfor subject in [\'수학\',\'영어\',\'과학\']:\n    scores = [s[subject] for s in grades.values()]\n    print(f\'{subject} 평균: {sum(scores)/len(scores):.1f}점\')',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'd = {\'name\':\'Alice\',\'age\':14}\nprint(list(d.keys()))    # [\'name\',\'age\']\nprint(list(d.values()))  # [\'Alice\',14]\nprint(list(d.items()))   # [(\'name\',\'Alice\'),(\'age\',14)]',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'import copy\nd = {\'a\': [1,2,3]}\nshallow = d.copy()\ndeep = copy.deepcopy(d)\nd[\'a\'].append(4)\nprint(shallow[\'a\'])  # [1,2,3,4] 영향 받음\nprint(deep[\'a\'])     # [1,2,3] 독립',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'days = [\'월\',\'화\',\'수\',\'목\',\'금\']\nschedule = dict.fromkeys(days, \'자습\')\nschedule[\'수\'] = \'체육\'\nprint(schedule)',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
          starterCode: '# 중첩 딕셔너리\nschool = {\n    "1반": {\n        "담임": "김선생",\n        "학생수": 25,\n        "평균": 82.5\n    },\n    "2반": {\n        "담임": "이선생",\n        "학생수": 27,\n        "평균": 85.3\n    }\n}\n\n# 접근\nprint(school["1반"]["담임"])    # 김선생\nprint(school["2반"]["평균"])    # 85.3\n\n# 수정\nschool["1반"]["학생수"] = 26\n\n# 순회\nfor class_name, info in school.items():\n    print(f"{class_name}: 담임 {info[\'담임\']}, {info[\'학생수\']}명")\n',
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
              starterCode: 'student = {\n    \'name\': \'Alice\',\n    \'scores\': {\'수학\': 95, \'영어\': 88}\n}\nprint(student[\'scores\'][\'수학\'])  # 95',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'data = {\'users\': {\'alice\': {\'age\':14,\'score\':95}}}\nprint(data[\'users\'][\'alice\'][\'age\'])  # 14',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'school = {\'1반\': {\'teacher\':\'Kim\',\'students\':30}}\nschool[\'1반\'][\'students\'] = 31\nschool[\'2반\'] = {\'teacher\':\'Lee\',\'students\':28}\nprint(school)',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'api_response = {\n    \'status\': \'ok\',\n    \'data\': {\n        \'users\': [\n            {\'id\':1,\'name\':\'Alice\',\'scores\':[95,88,92]},\n            {\'id\':2,\'name\':\'Bob\',\'scores\':[78,85,80]}\n        ]\n    }\n}\nfor user in api_response[\'data\'][\'users\']:\n    avg = sum(user[\'scores\'])/len(user[\'scores\'])\n    print(f"{user[\'name\']}: 평균 {avg:.1f}점")',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
              },
            },
            {
              id: "c7",
              title: '딕셔너리 of 리스트',
              description: '키별로 여러 값을 저장할 때.',
              difficulty: "medium",
              hints: [
                '{\'과일\':[\'사과\',\'바나나\'], \'채소\':[\'당근\']}',
                '그룹핑에 적합',
              ],
              estimatedMinutes: 8,
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'list_a = [\'사과\',\'바나나\',\'포도\',\'딸기\']\nlist_b = [\'바나나\',\'딸기\',\'수박\',\'참외\']\ncommon = set(list_a) & set(list_b)\nonly_a = set(list_a) - set(list_b)\nprint(f\'공통: {common}\')\nprint(f\'A에만: {only_a}\')',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
              starterCode: 'articles = {\n    \'글1\': {\'python\',\'tutorial\',\'beginner\'},\n    \'글2\': {\'python\',\'advanced\',\'algorithm\'},\n    \'글3\': {\'javascript\',\'tutorial\',\'web\'}\n}\n\ndef search_by_tags(articles, tags):\n    tags = set(tags)\n    return [title for title, art_tags in articles.items() if tags.issubset(art_tags)]\n\nprint(search_by_tags(articles, [\'python\',\'tutorial\']))',
              feedback: {
                perfect: '완벽해요!',
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                good: '잘했어요!',
                partial: '거의 다 왔어요!',
                wrong: '다시 시도해보세요.',
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
          starterCode: '# 일반 함수\ndef add(a, b):\n    return a + b\n\n# 람다 함수 (같은 기능)\nadd_lambda = lambda a, b: a + b\n\nprint(add(3, 5))        # 8\nprint(add_lambda(3, 5)) # 8\n\n# 주로 정렬이나 map/filter에서 사용\nstudents = [\n    {"name": "철수", "score": 85},\n    {"name": "영희", "score": 92},\n    {"name": "민수", "score": 78}\n]\n\n# 점수순 정렬\nstudents.sort(key=lambda x: x["score"], reverse=True)\nfor s in students:\n    print(f"{s[\'name\']}: {s[\'score\']}점")\n',
          hints: [
            'lambda 매개변수: 표현식 형식',
            '간단한 함수를 한 줄로 작성',
            'sort()의 key, map(), filter()에 자주 사용',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
          starterCode: 'import csv\n\n# CSV 파일 쓰기\nstudents = [\n    ["이름", "국어", "영어", "수학"],\n    ["철수", 85, 90, 78],\n    ["영희", 92, 88, 95],\n    ["민수", 78, 82, 88]\n]\n\nwith open("scores.csv", "w", encoding="utf-8", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerows(students)\n\n# CSV 파일 읽기\nwith open("scores.csv", "r", encoding="utf-8") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)\n\n# 딕셔너리로 읽기\nwith open("scores.csv", "r", encoding="utf-8") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(f"{row[\'이름\']}: {row[\'국어\']}점")\n',
          hints: [
            'CSV = Comma Separated Values',
            'csv.writer/reader: 리스트로 처리',
            'DictReader: 딕셔너리로 편리하게',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "나만의 모듈 만들기에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
          starterCode: 'import os\nimport json\nfrom datetime import datetime\n\nMEMO_FILE = "memos.json"\n\ndef load_memos():\n    if os.path.exists(MEMO_FILE):\n        with open(MEMO_FILE, "r", encoding="utf-8") as f:\n            return json.load(f)\n    return []\n\ndef save_memos(memos):\n    with open(MEMO_FILE, "w", encoding="utf-8") as f:\n        json.dump(memos, f, ensure_ascii=False, indent=2)\n\ndef main():\n    memos = load_memos()\n    \n    while True:\n        print("\\n=== 메모장 ===")\n        print("1. 메모 추가")\n        print("2. 메모 보기")\n        print("3. 메모 삭제")\n        print("4. 종료")\n        \n        choice = input("선택: ")\n        \n        if choice == "1":\n            content = input("메모 내용: ")\n            memo = {\n                "content": content,\n                "created": datetime.now().strftime("%Y-%m-%d %H:%M")\n            }\n            memos.append(memo)\n            save_memos(memos)\n            print("저장되었습니다.")\n        \n        elif choice == "2":\n            for i, memo in enumerate(memos, 1):\n                print(f"[{i}] ({memo[\'created\']}) {memo[\'content\']}")\n        \n        elif choice == "3":\n            idx = int(input("삭제할 번호: ")) - 1\n            if 0 <= idx < len(memos):\n                memos.pop(idx)\n                save_memos(memos)\n                print("삭제되었습니다.")\n        \n        elif choice == "4":\n            break\n\nmain()\n',
          hints: [
            'JSON으로 메모 데이터 저장',
            'datetime으로 작성 시간 기록',
            '프로그램 종료해도 데이터 유지',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "연습 1: 기본 연습에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "코드 개선하기에서 배운 Core Concept의 핵심을 확인합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 내용을 다시 읽어보세요",
                                        "핵심 개념에 집중하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "완벽해요! 개념을 정확히 이해했어요.",
                                        "good": "잘했어요! 이해도가 높아요.",
                                        "partial": "기본은 이해했어요. 세부 사항을 확인하세요.",
                                        "wrong": "강의를 다시 복습한 후 시도해보세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "예제로 배우기",
                              "description": "강의의 예제를 직접 실습해봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 그대로 따라하세요",
                                        "한 단계씩 진행하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "예제를 완벽하게 이해했어요!",
                                        "good": "좋아요! 실습을 잘 따라했어요.",
                                        "partial": "일부만 맞았어요. 예제를 다시 확인하세요.",
                                        "wrong": "예제를 단계별로 천천히 따라해보세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "개념 적용하기",
                              "description": "배운 개념을 비슷한 상황에 적용합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "강의 예제와 비슷하게 생각하세요",
                                        "개념을 새로운 상황에 적용하세요"
                              ],
                              "estimatedMinutes": 5,
                              "feedback": {
                                        "perfect": "개념 적용을 완벽하게 했어요!",
                                        "good": "잘 적용했어요!",
                                        "partial": "방향은 맞아요. 조금 더 정확하게 해보세요.",
                                        "wrong": "강의 예제를 참고해서 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실생활 연결하기",
                              "description": "배운 개념을 실생활 문제에 적용합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "일상생활에서 비슷한 경우를 찾아보세요",
                                        "개념을 실제 상황에 연결하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "실생활 적용이 완벽해요!",
                                        "good": "좋은 연결이에요!",
                                        "partial": "개념은 맞는데 적용이 부족해요.",
                                        "wrong": "실생활 예시를 생각하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 문제",
                              "description": "개념을 활용한 응용 문제를 풉니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "기본 개념을 먼저 떠올리세요",
                                        "단계별로 접근하세요",
                                        "비슷한 문제를 생각해보세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "응용력이 뛰어나요!",
                                        "good": "잘 응용했어요!",
                                        "partial": "접근은 좋아요. 마무리를 다듬어보세요.",
                                        "wrong": "기본 개념부터 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "심화 학습",
                              "description": "개념을 더 깊이 이해하는 문제입니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "왜 그런지 생각해보세요",
                                        "다른 방법도 고려하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "심화 개념까지 완벽해요!",
                                        "good": "깊이 있게 이해했어요!",
                                        "partial": "좋은 시도예요. 더 깊이 생각해보세요.",
                                        "wrong": "기본부터 차근차근 다시 학습하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "창의적 문제",
                              "description": "배운 내용을 창의적으로 활용합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 시도해보세요",
                                        "창의적으로 접근하세요",
                                        "정답은 하나가 아닐 수 있어요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "창의력이 뛰어나요!",
                                        "good": "독창적인 접근이에요!",
                                        "partial": "좋은 아이디어예요. 더 발전시켜보세요.",
                                        "wrong": "자유롭게 생각하며 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "종합 문제 1",
                              "description": "여러 개념을 종합하는 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "배운 내용을 모두 떠올려보세요",
                                        "단계를 나눠 해결하세요",
                                        "하나씩 차근차근 진행하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "종합적 사고력이 뛰어나요!",
                                        "good": "여러 개념을 잘 통합했어요!",
                                        "partial": "일부는 맞았어요. 나머지도 완성하세요.",
                                        "wrong": "각 부분을 나눠서 하나씩 해결해보세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "종합 문제 2",
                              "description": "고급 종합 문제에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 학습 내용을 활용하세요",
                                        "문제를 작은 부분으로 나누세요",
                                        "포기하지 마세요!"
                              ],
                              "estimatedMinutes": 18,
                              "feedback": {
                                        "perfect": "최고예요! 모든 개념을 마스터했어요!",
                                        "good": "어려운 문제를 잘 해결했어요!",
                                        "partial": "좋은 진전이에요. 계속 시도하세요.",
                                        "wrong": "어려워도 괜찮아요. 힌트를 활용하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 챌린지",
                              "description": "최종 마스터 레벨 문제입니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "지금까지 배운 모든 것을 활용하세요",
                                        "천천히, 꼼꼼하게 접근하세요",
                                        "막히면 쉬었다가 다시 시도하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "전설이에요! 완벽한 마스터예요!",
                                        "good": "대단해요! 최고 난이도를 해결했어요!",
                                        "partial": "거의 다 왔어요! 조금만 더 노력하세요.",
                                        "wrong": "최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요."
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
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Core Concept의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Core Concept 기본 연습\n",
                              "feedback": {
                                        "perfect": "완벽한 코드예요!",
                                        "good": "문법을 잘 이해했어요!",
                                        "partial": "코드는 맞는데 일부 수정이 필요해요.",
                                        "wrong": "문법을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "코드 수정하기",
                              "description": "주어진 코드를 수정하여 올바르게 작동하게 만듭니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "에러 메시지를 잘 읽으세요",
                                        "문법 오류를 찾으세요"
                              ],
                              "estimatedMinutes": 4,
                              "starterCode": "# 이 코드를 수정하세요\n",
                              "feedback": {
                                        "perfect": "버그를 완벽하게 수정했어요!",
                                        "good": "오류를 잘 찾았어요!",
                                        "partial": "일부 오류만 수정했어요.",
                                        "wrong": "에러 메시지를 확인하며 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "코드 완성하기",
                              "description": "빈 칸을 채워 코드를 완성합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "빈 칸에 들어갈 내용을 추론하세요",
                                        "전체 흐름을 파악하세요"
                              ],
                              "estimatedMinutes": 5,
                              "starterCode": "# 빈 칸을 채우세요\n",
                              "feedback": {
                                        "perfect": "코드를 완벽하게 완성했어요!",
                                        "good": "논리적으로 잘 채웠어요!",
                                        "partial": "일부 빈 칸이 틀렸어요.",
                                        "wrong": "코드의 흐름을 다시 생각해보세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "실용 코드 작성",
                              "description": "실제로 사용할 수 있는 코드를 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "문제를 단계별로 나누세요",
                                        "이전 예제를 참고하세요"
                              ],
                              "estimatedMinutes": 7,
                              "starterCode": "# 실용적인 코드를 작성하세요\n",
                              "feedback": {
                                        "perfect": "실용적인 코드예요!",
                                        "good": "잘 작동하는 코드예요!",
                                        "partial": "기능은 하는데 개선이 필요해요.",
                                        "wrong": "단계별로 다시 접근해보세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "응용 프로그램",
                              "description": "배운 개념을 응용한 프로그램을 만듭니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "여러 개념을 조합하세요",
                                        "창의적으로 접근하세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 응용 프로그램 만들기\n",
                              "feedback": {
                                        "perfect": "훌륭한 프로그램이에요!",
                                        "good": "개념을 잘 응용했어요!",
                                        "partial": "기본은 맞는데 기능이 부족해요.",
                                        "wrong": "기본 개념을 다시 복습하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "알고리즘 구현",
                              "description": "주어진 알고리즘을 코드로 구현합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "알고리즘을 단계별로 분석하세요",
                                        "의사코드로 먼저 생각하세요"
                              ],
                              "estimatedMinutes": 12,
                              "starterCode": "# 알고리즘 구현\n",
                              "feedback": {
                                        "perfect": "알고리즘을 완벽히 구현했어요!",
                                        "good": "논리가 정확해요!",
                                        "partial": "로직에 일부 오류가 있어요.",
                                        "wrong": "알고리즘을 단계별로 다시 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적화 도전",
                              "description": "같은 기능을 더 효율적인 코드로 작성합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "불필요한 코드를 제거하세요",
                                        "더 간결한 방법을 찾으세요"
                              ],
                              "estimatedMinutes": 10,
                              "starterCode": "# 코드를 최적화하세요\n",
                              "feedback": {
                                        "perfect": "최적화를 완벽하게 했어요!",
                                        "good": "효율적인 코드예요!",
                                        "partial": "좋아졌지만 더 개선할 수 있어요.",
                                        "wrong": "기본 기능부터 확인하세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "프로젝트 1단계",
                              "description": "작은 프로젝트의 첫 단계를 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "전체 구조를 먼저 설계하세요",
                                        "한 기능씩 완성하세요"
                              ],
                              "estimatedMinutes": 15,
                              "starterCode": "# 프로젝트 시작\n",
                              "feedback": {
                                        "perfect": "프로젝트를 훌륭하게 시작했어요!",
                                        "good": "좋은 출발이에요!",
                                        "partial": "기본 구조는 맞아요. 기능을 추가하세요.",
                                        "wrong": "프로젝트 요구사항을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 2단계",
                              "description": "프로젝트에 추가 기능을 구현합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "기존 코드를 활용하세요",
                                        "새 기능을 통합하세요"
                              ],
                              "estimatedMinutes": 18,
                              "starterCode": "# 기능 추가\n",
                              "feedback": {
                                        "perfect": "모든 기능이 완벽해요!",
                                        "good": "기능이 잘 작동해요!",
                                        "partial": "일부 기능이 미완성이에요.",
                                        "wrong": "한 기능씩 차근차근 추가하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "최종 프로젝트",
                              "description": "완성된 프로젝트를 만듭니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요구사항을 확인하세요",
                                        "테스트를 해보세요",
                                        "코드를 정리하세요"
                              ],
                              "estimatedMinutes": 25,
                              "starterCode": "# 최종 프로젝트\n",
                              "feedback": {
                                        "perfect": "완벽한 프로젝트예요! 축하합니다!",
                                        "good": "훌륭한 프로젝트예요!",
                                        "partial": "거의 완성이에요! 마무리하세요.",
                                        "wrong": "요구사항을 하나씩 체크하며 완성하세요."
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
        requirements: ['함수 정의와 활용', '리스트와 딕셔너리', '파일 처리'],
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

import type { Unit } from '../../types';

// Unit 6: JavaScript 기초 (6주, 39-44주차)
// CSTA 표준: 2-AP-13, 2-AP-14, 2-AP-15, 2-AP-16, 2-AP-17
// 목표: 웹 페이지에 동적인 기능을 추가하는 JavaScript 마스터하기
// 교육 원칙: freeCodeCamp (인터랙티브), Codecademy (실습 중심), JavaScript.info (개념 명확)

export const unit6: Unit = {
  id: 'unit-6',
  number: 6,
  title: 'JavaScript 기초',
  description: '웹 페이지에 생명을 불어넣어요! 버튼 클릭, 애니메이션 등 동적 기능을 만들어 완전한 웹 앱을 완성해요',
  icon: '⚡',
  color: '#f7df1e',
  unlockLevel: 45,
  totalMissions: 60,
  estimatedHours: 24,
  weeks: [
    // Week 39: JavaScript 기초 (10미션, 4시간)
    {
      id: 'week-39',
      number: 39,
      title: 'JavaScript 기초',
      description: '웹에 생명을 불어넣는 JavaScript를 시작해요',
      missions: [
        {
          id: 'w39-m1',
          title: 'JavaScript가 뭐예요?',
          description: '웹의 마법사 JavaScript를 만나봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 20,
          estimatedMinutes: 20,
          concept: 'JavaScript 소개',
          conceptExplanation: 'HTML은 뼈대, CSS는 옷, JavaScript는 행동이에요! 버튼을 누르면 반응하고, 데이터를 처리하는 모든 동작이 JavaScript로 만들어져요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'JavaScript의 역할과 중요성을 이해할 수 있다',
            'HTML/CSS와 JavaScript의 관계를 설명할 수 있다',
            '웹에서 JavaScript가 사용되는 예시를 찾을 수 있다'
          ],
          realWorldExample: '유튜브의 좋아요 버튼, 인스타그램의 무한 스크롤, 네이버의 검색 자동완성 모두 JavaScript로 만들어져요!',
          hints: [
            '💡 JavaScript는 웹 브라우저에서 바로 실행돼요',
            '💡 Python과 비슷하지만 문법이 조금 달라요',
            '💡 세미콜론(;)으로 문장을 끝내요',
            '💡 변수 이름은 camelCase로 써요 (myName처럼)'
          ],
          conceptCards: [
            {
              title: 'JavaScript란?',
              description: '웹 페이지를 동적으로 만드는 프로그래밍 언어. 1995년에 만들어졌어요!'
            },
            {
              title: '어디서 실행되나요?',
              description: '웹 브라우저(크롬, 사파리 등)에서 실행돼요. Node.js로 서버에서도 실행 가능!'
            },
            {
              title: 'Python과 다른 점?',
              description: 'Python: print(), JavaScript: console.log(). Python: 들여쓰기, JavaScript: 중괄호 {}'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Python vs JavaScript 출력 비교',
              description: 'Python의 print()와 같은 역할을 하는 JavaScript 함수를 사용하여 "Hello, JavaScript!"를 출력하세요.',
              difficulty: 'easy',
              hints: ['Python: print("Hello") / JS: console.log("Hello")', '세미콜론(;)을 끝에 붙이세요'],
              estimatedMinutes: 3,
              starterCode: '// Python에서는: print("Hello, JavaScript!")\n// JavaScript에서는?\n',
              solution: 'console.log("Hello, JavaScript!");',
              testCases: [{ input: '', expectedOutput: 'Hello, JavaScript!', description: 'console.log 출력 확인' }],
              feedback: { perfect: 'Python의 print()와 JS의 console.log()를 완벽히 이해했어요!', good: '잘했어요!', partial: '출력 함수명을 확인하세요.', wrong: 'console.log("메시지")를 사용하세요.' }
            },
            {
              id: 'c2',
              title: 'JavaScript로 자기소개',
              description: 'console.log()를 3번 사용하여 이름, 나이, 좋아하는 것을 각각 출력하세요.',
              difficulty: 'easy',
              hints: ['console.log()를 3번 사용하세요', '문자열은 따옴표로 감싸세요'],
              estimatedMinutes: 4,
              starterCode: '// 1. 이름 출력\n\n// 2. 나이 출력 (숫자)\n\n// 3. 좋아하는 것 출력\n',
              solution: 'console.log("홍길동");\nconsole.log(15);\nconsole.log("코딩");',
              testCases: [{ input: '', expectedOutput: '3줄 출력', description: '3개의 console.log 사용' }],
              feedback: { perfect: '자기소개 완벽!', good: '잘 출력했어요!', partial: '3개 모두 출력하세요.', wrong: 'console.log()를 사용하세요.' }
            },
            {
              id: 'c3',
              title: 'HTML/CSS/JS 역할 구분',
              description: '주석을 사용하여 HTML(뼈대), CSS(스타일), JavaScript(동작)의 역할을 설명하고, JS로 각각의 비유를 출력하세요.',
              difficulty: 'easy',
              hints: ['// 는 한 줄 주석이에요', 'console.log()로 비유를 출력하세요'],
              estimatedMinutes: 5,
              starterCode: '// HTML은 ?\n// CSS는 ?\n// JavaScript는 ?\n\nconsole.log("HTML = ");\nconsole.log("CSS = ");\nconsole.log("JavaScript = ");\n',
              solution: '// HTML은 건물의 뼈대 (구조)\n// CSS는 건물의 페인트 (디자인)\n// JavaScript는 건물의 엘리베이터 (동작)\n\nconsole.log("HTML = 뼈대");\nconsole.log("CSS = 스타일");\nconsole.log("JavaScript = 동작");',
              feedback: { perfect: '웹 3요소의 역할을 정확히 이해했어요!', good: '좋은 비유예요!', partial: '각 역할을 더 명확히 구분하세요.', wrong: '강의 내용을 다시 확인하세요.' }
            },
            {
              id: 'c4',
              title: '실생활 JavaScript 찾기',
              description: '일상에서 JavaScript가 사용되는 3가지 예를 console.log()로 출력하세요.',
              difficulty: 'medium',
              hints: ['유튜브 좋아요, 네이버 자동완성 등을 생각하세요', '웹사이트의 동적인 부분이 JS예요'],
              estimatedMinutes: 5,
              starterCode: '// 실생활에서 JavaScript가 사용되는 예 3가지\nconsole.log("1. ");\nconsole.log("2. ");\nconsole.log("3. ");\n',
              solution: 'console.log("1. 유튜브 좋아요 버튼 클릭");\nconsole.log("2. 네이버 검색 자동완성");\nconsole.log("3. 인스타그램 무한 스크롤");',
              feedback: { perfect: 'JS가 어디에 쓰이는지 정확히 알고 있어요!', good: '좋은 예시예요!', partial: '동적인 웹 기능을 생각해보세요.', wrong: '웹에서 클릭, 스크롤 같은 반응을 생각하세요.' }
            },
            {
              id: 'c5',
              title: '여러 값 한번에 출력',
              description: 'console.log()에 쉼표(,)로 구분하여 여러 값을 한 번에 출력하세요. "이름:", "홍길동", "나이:", 15를 한 줄에 출력하세요.',
              difficulty: 'medium',
              hints: ['console.log(a, b, c) 형태로 여러 값 출력', '문자열과 숫자를 섞을 수 있어요'],
              estimatedMinutes: 5,
              starterCode: '// 한 번의 console.log로 "이름: 홍길동 나이: 15" 출력\n',
              solution: 'console.log("이름:", "홍길동", "나이:", 15);',
              testCases: [{ input: '', expectedOutput: '이름: 홍길동 나이: 15', description: '여러 값 동시 출력' }],
              feedback: { perfect: '여러 값 출력을 완벽히 이해했어요!', good: '잘했어요!', partial: '쉼표로 구분하세요.', wrong: 'console.log("a", "b", 숫자) 형태를 사용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m2',
          title: 'console.log() - 첫 출력!',
          description: '개발자 콘솔에 메시지를 출력해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 20,
          concept: 'console.log',
          conceptExplanation: 'console.log()는 Python의 print()와 같아요! 값을 확인하거나 디버깅할 때 사용해요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'console.log()로 값을 출력할 수 있다',
            '문자열과 숫자를 출력할 수 있다',
            '여러 값을 동시에 출력할 수 있다'
          ],
          realWorldExample: '프로그래머들은 코드가 잘 작동하는지 확인할 때 console.log()를 써요. "여기까지 왔나?" 확인!',
          starterCode: '// "안녕하세요!"를 출력하세요\n\n// 숫자 2025를 출력하세요\n',
          solution: 'console.log("안녕하세요!");\nconsole.log(2025);',
          expectedOutput: '안녕하세요!\n2025',
          hints: [
            '💡 문자열은 큰따옴표("") 또는 작은따옴표(\'\')로 감싸요',
            '💡 숫자는 따옴표 없이 그냥 써요',
            '💡 세미콜론(;)으로 문장을 끝내는 게 좋아요',
            '💡 console.log(a, b, c)처럼 여러 값을 한 번에 출력 가능'
          ],
          commonMistakes: [
            '따옴표를 빼먹으면 에러: console.log(안녕) ✗',
            '괄호를 닫지 않음: console.log("안녕" ✗',
            '대소문자 틀림: Console.log() ✗ (C는 소문자!)'
          ],
          testCases: [
            { input: '', expectedOutput: '안녕하세요!', description: '문자열 출력', errorHint: 'console.log("안녕하세요!") 사용했나요?' },
            { input: '', expectedOutput: '2025', description: '숫자 출력', errorHint: 'console.log(2025) 사용했나요?' }
          ],
          challenges: [
            {
              id: 'c1',
              title: '문자열 출력하기',
              description: '"나는 JavaScript를 배우고 있어요!"를 콘솔에 출력하세요.',
              difficulty: 'easy',
              hints: ['console.log() 안에 문자열을 넣으세요', '문자열은 따옴표로 감싸세요'],
              estimatedMinutes: 2,
              starterCode: '// "나는 JavaScript를 배우고 있어요!" 출력\n',
              solution: 'console.log("나는 JavaScript를 배우고 있어요!");',
              testCases: [{ input: '', expectedOutput: '나는 JavaScript를 배우고 있어요!', description: '문자열 출력 확인' }],
              feedback: { perfect: 'console.log 완벽!', good: '잘했어요!', partial: '따옴표를 확인하세요.', wrong: 'console.log("텍스트")를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '버그 수정: 대소문자',
              description: '아래 코드의 오류를 찾아 수정하세요.',
              difficulty: 'easy',
              hints: ['JavaScript는 대소문자를 구분해요', 'console의 C는 소문자!'],
              estimatedMinutes: 3,
              starterCode: '// 오류를 수정하세요\nConsole.Log("안녕하세요!");\n',
              solution: 'console.log("안녕하세요!");',
              testCases: [{ input: '', expectedOutput: '안녕하세요!', description: '대소문자 수정' }],
              feedback: { perfect: '대소문자 구분을 정확히 알아요!', good: '오류를 잘 찾았어요!', partial: 'console과 log 모두 소문자예요.', wrong: 'console.log (모두 소문자)를 사용하세요.' }
            },
            {
              id: 'c3',
              title: '숫자와 계산 결과 출력',
              description: 'console.log()로 100 + 200의 계산 결과를 출력하세요.',
              difficulty: 'easy',
              hints: ['숫자는 따옴표 없이 써요', 'console.log(100 + 200)처럼 계산식을 넣을 수 있어요'],
              estimatedMinutes: 3,
              starterCode: '// 100 + 200의 결과를 출력하세요\n',
              solution: 'console.log(100 + 200);',
              testCases: [{ input: '', expectedOutput: '300', description: '계산 결과 출력' }],
              feedback: { perfect: '계산식도 출력 가능하다는 걸 알았어요!', good: '잘했어요!', partial: '따옴표 없이 숫자를 넣으세요.', wrong: 'console.log(100 + 200)을 시도하세요.' }
            },
            {
              id: 'c4',
              title: 'Python vs JS 비교 출력',
              description: 'Python의 print("Hello")에 해당하는 JavaScript 코드를 작성하고, 추가로 "Python: print() / JS: console.log()"를 출력하세요.',
              difficulty: 'medium',
              hints: ['console.log()를 2번 사용하세요', '첫 번째는 Hello, 두 번째는 비교 설명'],
              estimatedMinutes: 5,
              starterCode: '// 1. "Hello" 출력 (Python의 print("Hello") 대응)\n\n// 2. "Python: print() / JS: console.log()" 출력\n',
              solution: 'console.log("Hello");\nconsole.log("Python: print() / JS: console.log()");',
              testCases: [{ input: '', expectedOutput: 'Hello\nPython: print() / JS: console.log()', description: '2줄 출력' }],
              feedback: { perfect: 'Python과 JS의 차이를 완벽히 이해했어요!', good: '잘 비교했어요!', partial: '두 줄 모두 출력하세요.', wrong: 'console.log()를 2번 사용하세요.' }
            },
            {
              id: 'c5',
              title: '여러 줄 프로필 카드 출력',
              description: 'console.log()를 사용하여 이름, 나이, 학교, 취미를 각각 한 줄씩 출력하는 프로필 카드를 만드세요.',
              difficulty: 'medium',
              hints: ['console.log()를 4번 사용하세요', '구분선(===)을 추가하면 더 예뻐요'],
              estimatedMinutes: 7,
              starterCode: '// 프로필 카드 출력\n// ========== 형태로 구분선 넣기\nconsole.log("==========");\n// 이름, 나이, 학교, 취미 출력\n\nconsole.log("==========");\n',
              solution: 'console.log("==========");\nconsole.log("이름: 홍길동");\nconsole.log("나이: 15");\nconsole.log("학교: 코딩중학교");\nconsole.log("취미: 프로그래밍");\nconsole.log("==========");',
              feedback: { perfect: '멋진 프로필 카드를 만들었어요!', good: '잘 출력했어요!', partial: '4가지 정보를 모두 출력하세요.', wrong: 'console.log()로 각 줄을 출력하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m3',
          title: '변수 선언 (let, const)',
          description: '값을 저장하는 상자를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 25,
          concept: '변수 선언',
          conceptExplanation: 'let은 변할 수 있는 변수, const는 변하지 않는 상수예요. var는 옛날 방식이라 안 써요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'let으로 변수를 선언할 수 있다',
            'const로 상수를 선언할 수 있다',
            'let과 const의 차이를 이해할 수 있다'
          ],
          realWorldExample: '게임에서 점수(let)는 계속 바뀌지만, 플레이어 이름(const)은 고정이에요!',
          starterCode: '// 변수 name에 "홍길동" 저장 (const)\n\n// 변수 age에 15 저장 (let)\n\n// name과 age 출력\n',
          solution: 'const name = "홍길동";\nlet age = 15;\n\nconsole.log(name);\nconsole.log(age);',
          hints: [
            '💡 const: 값이 절대 안 바뀜 (상수)',
            '💡 let: 값이 바뀔 수 있음 (변수)',
            '💡 = 은 "같다"가 아니라 "대입"이에요',
            '💡 변수명은 영어로, 첫 글자는 소문자 (camelCase)'
          ],
          commonMistakes: [
            'const를 다시 할당: const x = 5; x = 10; ✗',
            'let/const 없이 선언: name = "홍길동" ✗',
            '변수명에 한글 사용 (가능하지만 권장 안 함)',
            '예약어 사용: let let = 5; ✗'
          ],
          conceptCards: [
            {
              title: 'let',
              description: '값이 바뀔 수 있는 변수. let score = 0; score = 10; ✓'
            },
            {
              title: 'const',
              description: '값이 고정인 상수. const PI = 3.14; PI = 3; ✗ 에러!'
            },
            {
              title: 'var는?',
              description: '옛날 방식. 문제가 많아서 let/const를 쓰세요!'
            }
          ],
          testCases: [
            {
              input: '변수 선언',
              expectedOutput: 'const name, let age 사용',
              description: '올바른 키워드로 선언했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'const로 상수 선언',
              description: 'const를 사용하여 PI에 3.14를 저장하고 출력하세요.',
              difficulty: 'easy',
              hints: ['const 변수명 = 값; 형태예요', 'const는 한번 값을 정하면 변경 불가!'],
              estimatedMinutes: 2,
              starterCode: '// const로 PI에 3.14 저장 후 출력\n',
              solution: 'const PI = 3.14;\nconsole.log(PI);',
              testCases: [{ input: '', expectedOutput: '3.14', description: 'const 선언 확인' }],
              feedback: { perfect: 'const 사용법 완벽!', good: '잘했어요!', partial: 'const를 사용했나요?', wrong: 'const PI = 3.14; 형태를 사용하세요.' }
            },
            {
              id: 'c2',
              title: 'let으로 변수 변경',
              description: 'let으로 score를 0으로 선언한 후, 100으로 변경하고 출력하세요.',
              difficulty: 'easy',
              hints: ['let은 나중에 값을 바꿀 수 있어요', '선언: let score = 0; 변경: score = 100;'],
              estimatedMinutes: 3,
              starterCode: '// let으로 score를 0으로 선언\n\n// score를 100으로 변경\n\n// score 출력\n',
              solution: 'let score = 0;\nscore = 100;\nconsole.log(score);',
              testCases: [{ input: '', expectedOutput: '100', description: 'let 변수 변경' }],
              feedback: { perfect: 'let 변수 변경 완벽!', good: '잘했어요!', partial: '값을 변경할 때는 let 없이 score = 100;', wrong: 'let score = 0; 선언 후 score = 100;으로 변경하세요.' }
            },
            {
              id: 'c3',
              title: '버그 수정: const 재할당',
              description: '아래 코드의 오류를 찾아 수정하세요. (const를 let으로 바꿔야 할 수 있어요)',
              difficulty: 'easy',
              hints: ['const는 값을 변경할 수 없어요', '값이 바뀌어야 하면 let을 사용하세요'],
              estimatedMinutes: 4,
              starterCode: '// 오류를 수정하세요\nconst count = 0;\ncount = count + 1;\nconsole.log(count);\n',
              solution: 'let count = 0;\ncount = count + 1;\nconsole.log(count);',
              testCases: [{ input: '', expectedOutput: '1', description: 'const를 let으로 수정' }],
              feedback: { perfect: 'const vs let 차이를 정확히 알아요!', good: '오류를 잘 수정했어요!', partial: 'const를 let으로 바꿔야 해요.', wrong: 'const는 변경 불가! let으로 바꾸세요.' }
            },
            {
              id: 'c4',
              title: 'Python과 JS 변수 비교',
              description: 'Python에서 name = "홍길동", age = 15를 JavaScript로 변환하세요. name은 const, age는 let을 사용하세요.',
              difficulty: 'medium',
              hints: ['Python: name = "홍길동" -> JS: const name = "홍길동";', '바뀌지 않는 값은 const, 바뀔 수 있는 값은 let'],
              estimatedMinutes: 5,
              starterCode: '// Python: name = "홍길동"  -> JavaScript로 변환 (const)\n// Python: age = 15       -> JavaScript로 변환 (let)\n\n// 둘 다 출력\n',
              solution: 'const name = "홍길동";\nlet age = 15;\nconsole.log(name, age);',
              testCases: [{ input: '', expectedOutput: '홍길동 15', description: 'Python->JS 변환' }],
              feedback: { perfect: 'Python에서 JS로 완벽 변환!', good: '잘 변환했어요!', partial: 'const와 let을 구분하세요.', wrong: 'const name = "홍길동"; let age = 15;' }
            },
            {
              id: 'c5',
              title: '게임 캐릭터 정보 저장',
              description: '게임 캐릭터 정보를 변수에 저장하세요. 이름(const), 레벨(let), 체력(let), 직업(const)을 선언하고 모두 출력하세요.',
              difficulty: 'medium',
              hints: ['바뀌지 않는 것(이름, 직업)은 const', '바뀔 수 있는 것(레벨, 체력)은 let'],
              estimatedMinutes: 7,
              starterCode: '// 게임 캐릭터 정보\n// 이름: "용사" (변경 불가)\n// 레벨: 1 (변경 가능)\n// 체력: 100 (변경 가능)\n// 직업: "전사" (변경 불가)\n\n// 모든 정보 출력\n',
              solution: 'const charName = "용사";\nlet level = 1;\nlet hp = 100;\nconst job = "전사";\nconsole.log(charName, level, hp, job);',
              feedback: { perfect: 'const/let 구분 완벽! 게임 캐릭터 완성!', good: '잘 구분했어요!', partial: '바뀔 수 있는 건 let, 안 바뀌는 건 const!', wrong: '이름/직업은 const, 레벨/체력은 let으로 선언하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m4',
          title: '자료형 (String, Number, Boolean)',
          description: 'JavaScript의 기본 자료형을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: '자료형',
          conceptExplanation: 'String(문자열), Number(숫자), Boolean(참/거짓) 세 가지가 가장 기본이에요!',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '세 가지 기본 자료형을 구분할 수 있다',
            'typeof로 자료형을 확인할 수 있다',
            '각 자료형에 맞는 값을 선언할 수 있다'
          ],
          realWorldExample: '게임에서 플레이어 이름(String), 점수(Number), 게임오버 여부(Boolean)를 저장해요!',
          starterCode: '// String 변수: message = "Hello"\n\n// Number 변수: score = 100\n\n// Boolean 변수: isGameOver = false\n\n// typeof로 각 변수의 타입 출력\n',
          solution: 'const message = "Hello";\nconst score = 100;\nconst isGameOver = false;\n\nconsole.log(typeof message);  // string\nconsole.log(typeof score);     // number\nconsole.log(typeof isGameOver); // boolean',
          hints: [
            '💡 String: "문자열" 또는 \'문자열\'',
            '💡 Number: 정수와 소수 모두 (100, 3.14)',
            '💡 Boolean: true 또는 false (소문자!)',
            '💡 typeof 변수 또는 typeof(변수)'
          ],
          commonMistakes: [
            '숫자를 따옴표로 감싸면 문자열: "100"은 String',
            'Boolean을 대문자로: True ✗, true ✓',
            'typeof를 함수처럼만: typeof x (O), typeof(x) (O)'
          ],
          conceptCards: [
            {
              title: 'String',
              description: '문자열. "안녕", \'Hello\', `템플릿 ${변수}`'
            },
            {
              title: 'Number',
              description: '숫자. 정수와 소수 구분 없음. 42, 3.14, -10'
            },
            {
              title: 'Boolean',
              description: '참/거짓. true 또는 false (소문자만!)'
            }
          ],
          testCases: [
            {
              input: '자료형 확인',
              expectedOutput: 'string, number, boolean',
              description: 'typeof로 자료형 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'typeof로 자료형 확인',
              description: '"Hello", 42, true의 자료형을 typeof로 확인하여 출력하세요.',
              difficulty: 'easy',
              hints: ['typeof "Hello"는 "string"을 반환해요', 'console.log(typeof 값) 형태로 출력'],
              estimatedMinutes: 2,
              starterCode: '// 각 값의 typeof 결과를 출력하세요\nconsole.log(typeof "Hello");\nconsole.log(typeof ___);\nconsole.log(typeof ___);\n',
              solution: 'console.log(typeof "Hello");\nconsole.log(typeof 42);\nconsole.log(typeof true);',
              testCases: [{ input: '', expectedOutput: 'string\nnumber\nboolean', description: 'typeof 확인' }],
              feedback: { perfect: '자료형 확인 완벽!', good: '잘했어요!', partial: 'typeof를 사용하세요.', wrong: 'typeof 값 형태로 확인하세요.' }
            },
            {
              id: 'c2',
              title: '숫자 문자열 함정',
              description: '"100"은 문자열일까 숫자일까? typeof "100"과 typeof 100의 결과를 각각 출력하세요.',
              difficulty: 'easy',
              hints: ['따옴표 안의 숫자는 문자열이에요!', '"100"은 string, 100은 number'],
              estimatedMinutes: 3,
              starterCode: '// "100"의 타입 출력\nconsole.log(typeof "100");\n// 100의 타입 출력\nconsole.log(typeof 100);\n// "100" + 50의 결과는?\nconsole.log("100" + 50);\n',
              solution: 'console.log(typeof "100");  // string\nconsole.log(typeof 100);    // number\nconsole.log("100" + 50);    // "10050" (문자열 연결!)',
              testCases: [{ input: '', expectedOutput: 'string\nnumber\n10050', description: '문자열 vs 숫자' }],
              feedback: { perfect: '문자열 숫자 함정을 완벽히 이해했어요!', good: '잘 구분했어요!', partial: '따옴표 안의 숫자는 문자열이에요.', wrong: '"100"은 String이에요!' }
            },
            {
              id: 'c3',
              title: 'Boolean 활용하기',
              description: 'isStudent를 true, isAdult를 false로 선언하고, 각각의 typeof와 값을 출력하세요.',
              difficulty: 'easy',
              hints: ['Boolean은 true/false 두 가지 값만 가져요', 'true, false는 소문자!'],
              estimatedMinutes: 3,
              starterCode: '// isStudent에 true 저장\n// isAdult에 false 저장\n// 각각의 값과 typeof 출력\n',
              solution: 'const isStudent = true;\nconst isAdult = false;\nconsole.log(isStudent, typeof isStudent);\nconsole.log(isAdult, typeof isAdult);',
              testCases: [{ input: '', expectedOutput: 'true boolean\nfalse boolean', description: 'Boolean 사용' }],
              feedback: { perfect: 'Boolean 완벽!', good: '잘했어요!', partial: 'true/false는 소문자예요.', wrong: 'const isStudent = true; 형태를 사용하세요.' }
            },
            {
              id: 'c4',
              title: 'Python과 JS 자료형 비교',
              description: 'Python의 str, int, bool이 JS에서 어떤 이름인지 주석으로 적고, 각각의 예시를 변수에 저장하여 출력하세요.',
              difficulty: 'medium',
              hints: ['Python: str -> JS: String', 'Python: int/float -> JS: Number', 'Python: bool -> JS: Boolean'],
              estimatedMinutes: 5,
              starterCode: '// Python str -> JS ???\nconst text = "Hello";\n// Python int -> JS ???\nconst num = 42;\n// Python bool -> JS ???\nconst flag = true;\n\n// 각 변수와 타입 출력\n',
              solution: '// Python str -> JS String\nconst text = "Hello";\n// Python int/float -> JS Number\nconst num = 42;\n// Python bool -> JS Boolean\nconst flag = true;\nconsole.log(text, typeof text);\nconsole.log(num, typeof num);\nconsole.log(flag, typeof flag);',
              feedback: { perfect: 'Python-JS 자료형 매핑 완벽!', good: '잘 비교했어요!', partial: '타입 이름을 확인하세요.', wrong: 'String, Number, Boolean을 기억하세요.' }
            },
            {
              id: 'c5',
              title: '프로필 데이터 타입 맞추기',
              description: '사용자 프로필 데이터를 올바른 자료형으로 저장하세요: 이름(String), 나이(Number), 학생여부(Boolean), 평균점수(Number).',
              difficulty: 'medium',
              hints: ['이름은 따옴표, 나이는 숫자, 학생여부는 true/false', '평균 점수는 소수점도 Number예요'],
              estimatedMinutes: 7,
              starterCode: '// 프로필 데이터를 올바른 자료형으로 저장\nconst userName = ___;      // "홍길동" (String)\nconst userAge = ___;       // 15 (Number)\nconst isStudent = ___;     // true (Boolean)\nconst avgScore = ___;      // 92.5 (Number)\n\n// 각 변수의 값과 typeof 출력\n',
              solution: 'const userName = "홍길동";\nconst userAge = 15;\nconst isStudent = true;\nconst avgScore = 92.5;\nconsole.log(userName, typeof userName);\nconsole.log(userAge, typeof userAge);\nconsole.log(isStudent, typeof isStudent);\nconsole.log(avgScore, typeof avgScore);',
              feedback: { perfect: '자료형 선택이 완벽해요!', good: '잘 저장했어요!', partial: '올바른 자료형을 사용하세요.', wrong: '문자열은 "", 숫자는 그냥, Boolean은 true/false' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m5',
          title: '산술 연산자',
          description: '사칙연산으로 계산해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '산술 연산',
          conceptExplanation: '+, -, *, /, % 다섯 가지 연산자로 계산해요. Python과 똑같아요!',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '사칙연산 연산자를 사용할 수 있다',
            '나머지 연산자(%)를 이해할 수 있다',
            '연산 우선순위를 이해할 수 있다'
          ],
          realWorldExample: '쇼핑몰에서 상품 가격 합계, 할인 금액, 배송비 계산 등에 사용해요!',
          starterCode: '// 10 + 20 결과를 sum에 저장하고 출력\n\n// 100 - 30 결과를 diff에 저장하고 출력\n\n// 5 * 6 결과를 product에 저장하고 출력\n\n// 10 % 3 (나머지) 결과를 remainder에 저장하고 출력\n',
          solution: 'const sum = 10 + 20;\nconsole.log(sum);  // 30\n\nconst diff = 100 - 30;\nconsole.log(diff);  // 70\n\nconst product = 5 * 6;\nconsole.log(product);  // 30\n\nconst remainder = 10 % 3;\nconsole.log(remainder);  // 1',
          hints: [
            '💡 + 덧셈, - 뺄셈, * 곱셈, / 나눗셈',
            '💡 % 는 나머지 (10 % 3 = 1)',
            '💡 연산 순서: * / % → + - (곱셈/나눗셈이 먼저!)',
            '💡 괄호로 우선순위 변경: (2 + 3) * 4'
          ],
          commonMistakes: [
            '곱셈을 x로: 5 x 3 ✗, 5 * 3 ✓',
            '나눗셈 결과는 항상 소수 가능: 10 / 3 = 3.333...',
            '0으로 나누면 Infinity'
          ],
          testCases: [
            {
              input: '연산 결과',
              expectedOutput: '30, 70, 30, 1',
              description: '산술 연산이 올바른지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 사칙연산',
              description: '15 + 7, 20 - 8, 6 * 9, 100 / 4의 결과를 각각 출력하세요.',
              difficulty: 'easy',
              hints: ['+, -, *, / 연산자를 사용하세요', '각 결과를 console.log로 출력'],
              estimatedMinutes: 2,
              starterCode: 'console.log(15 + 7);   // ?\nconsole.log(20 - 8);   // ?\nconsole.log(6 * 9);    // ?\nconsole.log(100 / 4);  // ?\n',
              solution: 'console.log(15 + 7);\nconsole.log(20 - 8);\nconsole.log(6 * 9);\nconsole.log(100 / 4);',
              testCases: [{ input: '', expectedOutput: '22\n12\n54\n25', description: '사칙연산 결과' }],
              feedback: { perfect: '사칙연산 완벽!', good: '잘 계산했어요!', partial: '연산자를 확인하세요.', wrong: '+, -, *, / 를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '나머지 연산자 (%)',
              description: '17 % 5, 10 % 3, 20 % 4의 나머지를 출력하세요.',
              difficulty: 'easy',
              hints: ['%는 나눈 나머지를 구해요', '17 % 5 = 17을 5로 나눈 나머지 = 2'],
              estimatedMinutes: 3,
              starterCode: '// 나머지 연산\nconsole.log(17 % 5);  // ?\nconsole.log(10 % 3);  // ?\nconsole.log(20 % 4);  // ?\n',
              solution: 'console.log(17 % 5);  // 2\nconsole.log(10 % 3);  // 1\nconsole.log(20 % 4);  // 0',
              testCases: [{ input: '', expectedOutput: '2\n1\n0', description: '나머지 연산' }],
              feedback: { perfect: '나머지 연산 완벽!', good: '잘했어요!', partial: '%는 나머지를 구하는 연산자예요.', wrong: '% 연산자로 나머지를 구하세요.' }
            },
            {
              id: 'c3',
              title: '짝수/홀수 판별기',
              description: 'number 변수에 저장된 숫자가 짝수인지 홀수인지 나머지 연산으로 확인하세요. number % 2의 결과를 출력하세요.',
              difficulty: 'easy',
              hints: ['짝수면 % 2 === 0', '홀수면 % 2 === 1'],
              estimatedMinutes: 4,
              starterCode: 'const number = 7;\n// number % 2의 결과를 출력하세요 (0이면 짝수, 1이면 홀수)\nconsole.log(number % 2);\n',
              solution: 'const number = 7;\nconsole.log(number % 2);  // 1 (홀수)',
              testCases: [{ input: '', expectedOutput: '1', description: '홀수 판별' }],
              feedback: { perfect: '%로 짝홀수 판별 이해 완벽!', good: '잘했어요!', partial: '% 2 결과가 0이면 짝수예요.', wrong: 'number % 2를 출력하세요.' }
            },
            {
              id: 'c4',
              title: '쇼핑 계산기',
              description: '사과 3개(개당 1500원), 우유 2개(개당 2500원)의 총 금액을 계산하고, 10% 할인 후 금액도 출력하세요.',
              difficulty: 'medium',
              hints: ['총액 = 사과가격*3 + 우유가격*2', '10% 할인 = 총액 * 0.9 또는 총액 - 총액 * 0.1'],
              estimatedMinutes: 6,
              starterCode: 'const applePrice = 1500;\nconst milkPrice = 2500;\n\n// 총 금액 계산\nconst total = ___;\nconsole.log("총 금액:", total);\n\n// 10% 할인 후 금액\nconst discounted = ___;\nconsole.log("할인 후:", discounted);\n',
              solution: 'const applePrice = 1500;\nconst milkPrice = 2500;\nconst total = applePrice * 3 + milkPrice * 2;\nconsole.log("총 금액:", total);\nconst discounted = total * 0.9;\nconsole.log("할인 후:", discounted);',
              testCases: [{ input: '', expectedOutput: '총 금액: 9500\n할인 후: 8550', description: '쇼핑 계산' }],
              feedback: { perfect: '쇼핑 계산기 완벽!', good: '잘 계산했어요!', partial: '곱셈과 덧셈 순서를 확인하세요.', wrong: '총액 = 가격 * 개수를 각각 계산 후 더하세요.' }
            },
            {
              id: 'c5',
              title: '온도 변환기',
              description: '섭씨 온도를 화씨로 변환하세요. 공식: 화씨 = 섭씨 * 9/5 + 32. 섭씨 25도를 화씨로 변환하여 출력하세요.',
              difficulty: 'medium',
              hints: ['공식: F = C * 9 / 5 + 32', '연산 순서를 주의하세요 (곱셈/나눗셈이 먼저!)'],
              estimatedMinutes: 7,
              starterCode: 'const celsius = 25;\n// 화씨로 변환\nconst fahrenheit = ___;\nconsole.log(celsius + "도C = " + fahrenheit + "도F");\n',
              solution: 'const celsius = 25;\nconst fahrenheit = celsius * 9 / 5 + 32;\nconsole.log(celsius + "도C = " + fahrenheit + "도F");',
              testCases: [{ input: '', expectedOutput: '25도C = 77도F', description: '온도 변환' }],
              feedback: { perfect: '온도 변환 공식 완벽!', good: '잘 계산했어요!', partial: '공식을 다시 확인하세요: C * 9/5 + 32', wrong: '화씨 = 섭씨 * 9 / 5 + 32 공식을 사용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m6',
          title: '문자열 연결',
          description: '문자열을 합쳐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '문자열 연결',
          conceptExplanation: '+ 연산자나 템플릿 리터럴(``)로 문자열을 합칠 수 있어요!',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '+ 연산자로 문자열을 합칠 수 있다',
            '템플릿 리터럴을 사용할 수 있다',
            '문자열과 숫자를 합칠 때 주의할 수 있다'
          ],
          realWorldExample: '"안녕하세요, " + 이름 + "님!" 처럼 개인화된 메시지를 만들 때 사용해요!',
          starterCode: '// firstName과 lastName을 합쳐서 fullName 만들기\nconst firstName = "홍";\nconst lastName = "길동";\n\n// + 연산자 사용\n\n// 템플릿 리터럴 사용 (백틱 `)\n',
          solution: 'const firstName = "홍";\nconst lastName = "길동";\n\n// 방법 1: + 연산자\nconst fullName1 = firstName + lastName;\nconsole.log(fullName1);  // 홍길동\n\n// 방법 2: 템플릿 리터럴 (권장!)\nconst fullName2 = `${firstName}${lastName}`;\nconsole.log(fullName2);  // 홍길동\n\nconst greeting = `안녕하세요, ${fullName2}님!`;\nconsole.log(greeting);  // 안녕하세요, 홍길동님!',
          hints: [
            '💡 + 연산자: "안녕" + "하세요" = "안녕하세요"',
            '💡 템플릿 리터럴: 백틱(`)으로 감싸고 ${변수} 형태',
            '💡 템플릿 리터럴이 더 편해요! (권장)',
            '💡 "5" + 3 = "53" (문자열 + 숫자 = 문자열)'
          ],
          commonMistakes: [
            '백틱(`)을 작은따옴표(\')로 착각',
            '${} 빼먹고: `안녕 name님` ✗',
            '"5" + 3은 8이 아니라 "53"',
            '띄어쓰기 까먹기: "홍" + "길동" = "홍길동" (붙음!)'
          ],
          conceptCards: [
            {
              title: '+ 연산자',
              description: '"Hello" + " " + "World" = "Hello World"'
            },
            {
              title: '템플릿 리터럴',
              description: '백틱(`)으로 감싸고 ${변수} 사용. `안녕 ${name}님`'
            },
            {
              title: '문자열 + 숫자',
              description: '"점수: " + 100 = "점수: 100" (모두 문자열로 변환)'
            }
          ],
          testCases: [
            {
              input: '문자열 연결',
              expectedOutput: '홍길동',
              description: '문자열을 올바르게 합쳤는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '+ 연산자로 문자열 합치기',
              description: '"안녕" + "하세요"를 합쳐서 출력하세요.',
              difficulty: 'easy',
              hints: ['+ 연산자로 문자열을 이어 붙여요', '띄어쓰기가 필요하면 " " 추가'],
              estimatedMinutes: 2,
              starterCode: '// "안녕" + "하세요"를 합쳐서 출력\n',
              solution: 'console.log("안녕" + "하세요");',
              testCases: [{ input: '', expectedOutput: '안녕하세요', description: '문자열 연결' }],
              feedback: { perfect: '문자열 연결 완벽!', good: '잘했어요!', partial: '+ 연산자를 사용하세요.', wrong: '"안녕" + "하세요"를 console.log에 넣으세요.' }
            },
            {
              id: 'c2',
              title: '템플릿 리터럴 사용',
              description: '변수 name에 "홍길동"을 저장하고, 템플릿 리터럴(백틱)을 사용하여 "안녕하세요, 홍길동님!"을 출력하세요.',
              difficulty: 'easy',
              hints: ['백틱(`)으로 감싸고 ${변수}를 사용해요', '키보드에서 ~ 키가 백틱이에요'],
              estimatedMinutes: 3,
              starterCode: 'const name = "홍길동";\n// 템플릿 리터럴로 "안녕하세요, 홍길동님!" 출력\nconsole.log(`___`);\n',
              solution: 'const name = "홍길동";\nconsole.log(`안녕하세요, ${name}님!`);',
              testCases: [{ input: '', expectedOutput: '안녕하세요, 홍길동님!', description: '템플릿 리터럴' }],
              feedback: { perfect: '템플릿 리터럴 완벽!', good: '잘 사용했어요!', partial: '${변수} 형태를 사용하세요.', wrong: '백틱 안에 ${name}을 넣으세요.' }
            },
            {
              id: 'c3',
              title: '문자열 + 숫자 함정',
              description: '"5" + 3의 결과와 5 + 3의 결과를 각각 출력하고 차이를 확인하세요.',
              difficulty: 'easy',
              hints: ['문자열 + 숫자 = 문자열 연결!', '"5" + 3 = "53", 5 + 3 = 8'],
              estimatedMinutes: 3,
              starterCode: '// "5" + 3의 결과\nconsole.log("5" + 3);\n// 5 + 3의 결과\nconsole.log(5 + 3);\n// 차이점을 주석으로 설명해보세요\n',
              solution: 'console.log("5" + 3);  // "53" (문자열 연결)\nconsole.log(5 + 3);    // 8 (숫자 덧셈)',
              testCases: [{ input: '', expectedOutput: '53\n8', description: '문자열+숫자 vs 숫자+숫자' }],
              feedback: { perfect: '문자열+숫자 함정을 완벽히 이해했어요!', good: '잘 구분했어요!', partial: '문자열+숫자는 문자열이 돼요.', wrong: '"5"+3은 "53"이 돼요 (연결!)' }
            },
            {
              id: 'c4',
              title: '자기소개 문장 만들기',
              description: 'name, age, hobby 변수를 사용하여 템플릿 리터럴로 "저는 [이름]이고, [나이]살이며, [취미]를 좋아합니다."를 출력하세요.',
              difficulty: 'medium',
              hints: ['백틱 안에 ${변수}를 사용하세요', '여러 변수를 한 문장에 넣을 수 있어요'],
              estimatedMinutes: 5,
              starterCode: 'const name = "홍길동";\nconst age = 15;\nconst hobby = "코딩";\n\n// 템플릿 리터럴로 자기소개 출력\nconsole.log(`___`);\n',
              solution: 'const name = "홍길동";\nconst age = 15;\nconst hobby = "코딩";\nconsole.log(`저는 ${name}이고, ${age}살이며, ${hobby}를 좋아합니다.`);',
              testCases: [{ input: '', expectedOutput: '저는 홍길동이고, 15살이며, 코딩을 좋아합니다.', description: '자기소개 문장' }],
              feedback: { perfect: '템플릿 리터럴 활용 완벽!', good: '잘 만들었어요!', partial: '${변수}를 정확히 사용하세요.', wrong: '백틱 안에 ${name}, ${age}, ${hobby}를 넣으세요.' }
            },
            {
              id: 'c5',
              title: '쇼핑 영수증 출력',
              description: '상품명, 가격, 수량 변수를 사용하여 "상품: [상품명] | 가격: [가격]원 | 수량: [수량]개 | 합계: [가격*수량]원"을 출력하세요.',
              difficulty: 'medium',
              hints: ['템플릿 리터럴 안에서 계산도 가능! ${price * qty}', '변수를 먼저 선언하고 템플릿 리터럴 안에서 사용하세요'],
              estimatedMinutes: 7,
              starterCode: 'const product = "노트북";\nconst price = 1500000;\nconst qty = 2;\n\n// 영수증 형태로 출력 (합계는 계산해서)\nconsole.log(`___`);\n',
              solution: 'const product = "노트북";\nconst price = 1500000;\nconst qty = 2;\nconsole.log(`상품: ${product} | 가격: ${price}원 | 수량: ${qty}개 | 합계: ${price * qty}원`);',
              testCases: [{ input: '', expectedOutput: '상품: 노트북 | 가격: 1500000원 | 수량: 2개 | 합계: 3000000원', description: '영수증 출력' }],
              feedback: { perfect: '영수증 출력 완벽! 템플릿 리터럴 안 계산도 활용했어요!', good: '잘 만들었어요!', partial: '${price * qty}로 계산 결과를 넣으세요.', wrong: '백틱 안에서 ${price * qty}로 계산이 가능해요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m7',
          title: '주석 작성하기',
          description: '코드에 설명을 달아요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 20,
          estimatedMinutes: 15,
          concept: '주석',
          conceptExplanation: '// 한 줄 주석, /* 여러 줄 주석 */ 두 가지 방법이 있어요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '단일 줄 주석을 작성할 수 있다',
            '다중 줄 주석을 작성할 수 있다',
            '주석의 중요성을 이해할 수 있다'
          ],
          realWorldExample: '나중에 코드를 다시 볼 때, 또는 다른 사람이 내 코드를 볼 때 이해하기 쉽게 설명을 달아요!',
          starterCode: '// TODO: 변수 score를 100으로 선언하고 주석으로 "게임 점수" 설명 달기\n\n// TODO: 여러 줄 주석으로 이 프로그램이 무엇을 하는지 설명\n',
          solution: '// 게임 점수를 저장하는 변수\nconst score = 100;\n\n/*\n이 프로그램은 게임 점수를 관리합니다.\n- 초기 점수는 100점입니다.\n- 나중에 점수를 업데이트할 수 있습니다.\n*/\n\nconsole.log(score);',
          hints: [
            '💡 // 뒤는 실행 안 됨 (한 줄)',
            '💡 /* */ 사이는 실행 안 됨 (여러 줄)',
            '💡 주석은 코드 설명, TODO, 임시로 코드 끄기에 사용',
            '💡 너무 많은 주석은 오히려 방해!'
          ],
          commonMistakes: [
            '주석 기호를 문자열 안에: "// 이건 주석 아님"',
            '여러 줄 주석 안 닫기: /* 주석 시작... 끝 없음',
            '의미 없는 주석: const x = 5; // x에 5 대입 ✗ (당연한 거!)'
          ],
          conceptCards: [
            {
              title: '단일 줄 주석',
              description: '// 이 줄은 무시됩니다'
            },
            {
              title: '다중 줄 주석',
              description: '/* 이 사이의\n모든 줄이\n무시됩니다 */'
            },
            {
              title: '좋은 주석',
              description: '"왜" 이렇게 했는지 설명. "무엇"을 하는지는 코드 자체로 명확하게!'
            }
          ],
          testCases: [
            {
              input: '주석 사용',
              expectedOutput: '단일/다중 줄 주석 모두 사용',
              description: '주석을 올바르게 작성했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '한 줄 주석 작성',
              description: '아래 코드 위에 한 줄 주석으로 "학생 점수를 저장하는 변수"라고 설명을 달아주세요.',
              difficulty: 'easy',
              hints: ['// 뒤에 설명을 쓰면 주석이에요', '주석은 코드 실행에 영향을 주지 않아요'],
              estimatedMinutes: 2,
              starterCode: '// ??? 주석을 작성하세요\nconst score = 95;\nconsole.log(score);\n',
              solution: '// 학생 점수를 저장하는 변수\nconst score = 95;\nconsole.log(score);',
              feedback: { perfect: '주석 작성 완벽!', good: '잘했어요!', partial: '// 뒤에 설명을 적으세요.', wrong: '// 로 시작하는 주석을 추가하세요.' }
            },
            {
              id: 'c2',
              title: '여러 줄 주석 작성',
              description: '/* */ 을 사용하여 프로그램 설명 주석을 작성하세요.',
              difficulty: 'easy',
              hints: ['/* 시작, */ 끝', '여러 줄을 한번에 주석 처리할 수 있어요'],
              estimatedMinutes: 3,
              starterCode: '/* ??? 여러 줄 주석 작성 */\nconst name = "코딩";\nconsole.log(name);\n',
              solution: '/*\n  프로그램명: 자기소개\n  작성자: 홍길동\n  날짜: 2025-01-01\n*/\nconst name = "코딩";\nconsole.log(name);',
              feedback: { perfect: '여러 줄 주석 완벽!', good: '잘했어요!', partial: '/* */를 사용하세요.', wrong: '/* 시작, */ 끝으로 주석을 작성하세요.' }
            },
            {
              id: 'c3',
              title: '코드 주석으로 비활성화',
              description: '아래 코드에서 console.log("비밀번호: 1234")를 주석으로 비활성화하세요.',
              difficulty: 'easy',
              hints: ['코드 앞에 //를 붙이면 비활성화돼요', '임시로 코드를 끄고 싶을 때 주석을 사용해요'],
              estimatedMinutes: 3,
              starterCode: 'console.log("사용자명: 홍길동");\nconsole.log("비밀번호: 1234");  // 이 줄을 주석처리!\nconsole.log("로그인 완료!");\n',
              solution: 'console.log("사용자명: 홍길동");\n// console.log("비밀번호: 1234");\nconsole.log("로그인 완료!");',
              testCases: [{ input: '', expectedOutput: '사용자명: 홍길동\n로그인 완료!', description: '비밀번호 주석처리' }],
              feedback: { perfect: '보안을 위해 비밀번호를 숨겼어요!', good: '잘했어요!', partial: '// 를 줄 앞에 붙이세요.', wrong: 'console.log 앞에 //를 추가하세요.' }
            },
            {
              id: 'c4',
              title: 'Python 주석 vs JS 주석',
              description: 'Python 주석(#)을 JavaScript 주석(//)으로 변환하세요.',
              difficulty: 'medium',
              hints: ['Python: # 주석 -> JS: // 주석', 'Python: 여러줄 주석은 """ """ -> JS: /* */'],
              estimatedMinutes: 5,
              starterCode: '// 아래 Python 코드의 주석을 JavaScript로 변환하세요\n// Python: # 이것은 주석입니다\n// Python: x = 10  # 변수 선언\n\n// JavaScript로 변환:\n',
              solution: '// 이것은 주석입니다\nconst x = 10; // 변수 선언',
              feedback: { perfect: 'Python->JS 주석 변환 완벽!', good: '잘 변환했어요!', partial: '#을 //로 바꾸세요.', wrong: 'Python의 #이 JS에서는 //예요.' }
            },
            {
              id: 'c5',
              title: '좋은 주석 vs 나쁜 주석',
              description: '아래 코드에 의미 있는 주석을 추가하세요. "왜" 이렇게 했는지 설명하는 주석이 좋은 주석이에요.',
              difficulty: 'medium',
              hints: ['"무엇"을 하는지보다 "왜" 하는지 설명하세요', '당연한 주석(// x에 5 대입)은 나쁜 주석이에요'],
              estimatedMinutes: 6,
              starterCode: 'const maxRetries = 3;\nconst timeout = 5000;\nconst userAge = 15;\n\n// 위 변수들에 의미있는 주석을 달아주세요\n',
              solution: '// API 호출 실패 시 최대 재시도 횟수 (서버 부하 방지)\nconst maxRetries = 3;\n// 서버 응답 대기 시간 (5초, 밀리초 단위)\nconst timeout = 5000;\n// 14세 미만은 부모 동의 필요하므로 나이 체크용\nconst userAge = 15;',
              feedback: { perfect: '의미 있는 주석을 완벽하게 작성했어요!', good: '좋은 주석이에요!', partial: '"왜" 이 값인지 설명해보세요.', wrong: '변수가 존재하는 이유를 설명하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m8',
          title: 'HTML에 JavaScript 연결',
          description: 'script 태그로 JavaScript를 HTML에 추가해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'script 태그',
          conceptExplanation: '<script> 태그로 HTML과 JavaScript를 연결해요! 내부 방식과 외부 파일 방식이 있어요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'script 태그로 JavaScript를 HTML에 포함할 수 있다',
            '외부 JS 파일을 연결할 수 있다',
            'script 태그의 위치를 이해할 수 있다'
          ],
          realWorldExample: 'HTML은 버튼을 만들고, JavaScript는 버튼 클릭 시 동작을 정의해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>JavaScript 연결</title>\n</head>\n<body>\n  <h1>JavaScript 테스트</h1>\n  <!-- script 태그 추가 -->\n  <!-- console.log("페이지 로드됨!") 실행 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>JavaScript 연결</title>\n</head>\n<body>\n  <h1>JavaScript 테스트</h1>\n  \n  <script>\n    console.log("페이지 로드됨!");\n    const message = "안녕하세요!";\n    console.log(message);\n  </script>\n</body>\n</html>',
          hints: [
            '💡 <script> 태그는 </body> 직전에 넣는 게 좋아요',
            '💡 외부 파일: <script src="script.js"></script>',
            '💡 HTML이 먼저 로딩되어야 요소를 조작 가능',
            '💡 여러 개의 script 태그 사용 가능'
          ],
          commonMistakes: [
            '<head>에 script를 넣어서 HTML 요소를 못 찾는 경우',
            'src와 내부 코드를 동시에: <script src="...">코드</script> ✗',
            'script 태그를 닫지 않음'
          ],
          conceptCards: [
            {
              title: '내부 스크립트',
              description: '<script>코드</script> 형태로 HTML 안에 직접 작성'
            },
            {
              title: '외부 스크립트',
              description: '<script src="파일.js"></script>로 외부 파일 연결 (권장!)'
            },
            {
              title: '위치',
              description: '</body> 직전이 가장 좋음. HTML 로딩 후 실행!'
            }
          ],
          testCases: [
            {
              input: 'script 태그',
              expectedOutput: 'script 태그 존재 및 콘솔 출력',
              description: 'script를 올바르게 추가했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'script 태그 추가',
              description: 'HTML body 안에 script 태그를 추가하고 console.log("JS 연결 성공!")을 실행하세요.',
              difficulty: 'easy',
              hints: ['<script> 코드 </script> 형태', '</body> 바로 위에 넣는 게 좋아요'],
              estimatedMinutes: 3,
              starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>테스트</h1>\n  <!-- 여기에 script 태그 추가 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>테스트</h1>\n  <script>\n    console.log("JS 연결 성공!");\n  </script>\n</body>\n</html>',
              feedback: { perfect: 'script 태그 추가 완벽!', good: '잘했어요!', partial: '<script> 태그를 body 안에 넣으세요.', wrong: '<script>console.log("메시지")</script>를 추가하세요.' }
            },
            {
              id: 'c2',
              title: '외부 JS 파일 연결',
              description: 'script.js 파일을 HTML에 외부 파일로 연결하는 코드를 작성하세요.',
              difficulty: 'easy',
              hints: ['<script src="파일명.js"></script> 형태', 'src 속성에 파일 경로를 넣어요'],
              estimatedMinutes: 3,
              starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>외부 JS 연결</h1>\n  <!-- script.js 파일 연결 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>외부 JS 연결</h1>\n  <script src="script.js"></script>\n</body>\n</html>',
              feedback: { perfect: '외부 JS 연결 완벽!', good: '잘했어요!', partial: 'src 속성을 사용하세요.', wrong: '<script src="script.js"></script>를 추가하세요.' }
            },
            {
              id: 'c3',
              title: 'script 위치 이해',
              description: 'script 태그를 head와 body 끝 두 곳에 넣었을 때 차이를 주석으로 설명하세요.',
              difficulty: 'easy',
              hints: ['head에 넣으면 HTML 로딩 전에 실행돼요', 'body 끝에 넣으면 HTML 로딩 후 실행돼요'],
              estimatedMinutes: 4,
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <!-- 여기에 script를 넣으면? -->\n</head>\n<body>\n  <h1 id="title">제목</h1>\n  <!-- 여기에 script를 넣으면? -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <!-- head에 넣으면: HTML이 아직 로딩 안 됨. getElementById("title")이 null! -->\n</head>\n<body>\n  <h1 id="title">제목</h1>\n  <!-- body 끝에 넣으면: HTML 로딩 완료. getElementById("title") 정상 작동! -->\n  <script>\n    console.log(document.getElementById("title").textContent);\n  </script>\n</body>\n</html>',
              feedback: { perfect: 'script 위치에 따른 차이를 완벽히 이해했어요!', good: '잘 설명했어요!', partial: 'body 끝이 가장 안전한 위치예요.', wrong: 'head vs body 끝의 차이를 생각해보세요.' }
            },
            {
              id: 'c4',
              title: 'HTML + JS 첫 상호작용',
              description: 'HTML에 버튼을 만들고, script에서 document.write()로 메시지를 추가하세요.',
              difficulty: 'medium',
              hints: ['document.write("텍스트")는 페이지에 직접 출력해요', '실무에서는 잘 안 쓰지만 학습용으로 좋아요'],
              estimatedMinutes: 6,
              starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>JavaScript 테스트</h1>\n  <script>\n    // document.write로 현재 날짜 출력\n    // document.write로 "JavaScript 작동 중!" 출력\n  </script>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>JavaScript 테스트</h1>\n  <script>\n    document.write("<p>현재 날짜: " + new Date().toLocaleDateString() + "</p>");\n    document.write("<p>JavaScript 작동 중!</p>");\n  </script>\n</body>\n</html>',
              feedback: { perfect: 'HTML과 JS 상호작용 완벽!', good: '잘했어요!', partial: 'document.write()를 사용하세요.', wrong: 'script 안에서 document.write("텍스트")를 사용하세요.' }
            },
            {
              id: 'c5',
              title: '완전한 HTML+JS 페이지',
              description: 'HTML 페이지를 만들고 script에서 제목 변경, 콘솔 출력, 페이지에 텍스트 추가를 모두 수행하세요.',
              difficulty: 'medium',
              hints: ['document.getElementById로 요소 선택', 'textContent로 텍스트 변경', 'console.log로 콘솔 출력'],
              estimatedMinutes: 8,
              starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">원래 제목</h1>\n  <p id="message"></p>\n  <script>\n    // 1. 제목을 "새로운 제목"으로 변경\n    // 2. p태그에 "JavaScript가 변경했어요!" 추가\n    // 3. 콘솔에 "페이지 수정 완료" 출력\n  </script>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">원래 제목</h1>\n  <p id="message"></p>\n  <script>\n    document.getElementById("title").textContent = "새로운 제목";\n    document.getElementById("message").textContent = "JavaScript가 변경했어요!";\n    console.log("페이지 수정 완료");\n  </script>\n</body>\n</html>',
              feedback: { perfect: 'HTML+JS 통합 페이지 완벽!', good: '잘 만들었어요!', partial: 'getElementById와 textContent를 사용하세요.', wrong: 'document.getElementById("id").textContent = "텍스트"를 사용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m9',
          title: 'alert, prompt, confirm',
          description: '사용자와 대화하는 대화상자를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 25,
          concept: '대화상자',
          conceptExplanation: 'alert(알림), prompt(입력), confirm(확인) 세 가지로 사용자와 소통해요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'alert로 알림 메시지를 표시할 수 있다',
            'prompt로 사용자 입력을 받을 수 있다',
            'confirm으로 확인/취소를 받을 수 있다'
          ],
          realWorldExample: '웹사이트 나갈 때 "정말 나가시겠습니까?" 같은 팝업이 confirm이에요!',
          starterCode: '// alert로 "환영합니다!" 메시지 표시\n\n// prompt로 "이름을 입력하세요" 물어보고 name 변수에 저장\n\n// confirm으로 "계속하시겠습니까?" 물어보고 result 변수에 저장\n\n// 결과 출력\n',
          solution: '// 알림\nalert("환영합니다!");\n\n// 입력받기\nconst name = prompt("이름을 입력하세요");\nconsole.log("입력한 이름:", name);\n\n// 확인/취소\nconst result = confirm("계속하시겠습니까?");\nconsole.log("선택 결과:", result);  // true 또는 false',
          hints: [
            '💡 alert("메시지"): 알림만 표시 (확인 버튼)',
            '💡 prompt("질문"): 입력 받고 문자열 반환',
            '💡 confirm("질문"): true(확인) 또는 false(취소) 반환',
            '💡 prompt에서 취소하면 null 반환'
          ],
          commonMistakes: [
            'prompt 결과를 변수에 안 담음',
            'confirm 결과가 문자열인 줄 착각 (Boolean이에요!)',
            '너무 많은 대화상자는 사용자를 짜증나게 함'
          ],
          conceptCards: [
            {
              title: 'alert',
              description: 'alert("메시지"); - 알림만 표시'
            },
            {
              title: 'prompt',
              description: 'const answer = prompt("질문"); - 입력 받기'
            },
            {
              title: 'confirm',
              description: 'const ok = confirm("확인?"); - true/false 반환'
            }
          ],
          testCases: [
            {
              input: '대화상자 사용',
              expectedOutput: 'alert, prompt, confirm 모두 사용',
              description: '세 가지 대화상자를 올바르게 사용했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'alert 사용하기',
              description: 'alert()를 사용하여 "환영합니다!"라는 팝업을 띄우세요.',
              difficulty: 'easy',
              hints: ['alert("메시지") 형태로 사용해요', '팝업이 뜨고 확인을 누르면 닫혀요'],
              estimatedMinutes: 2,
              starterCode: '// alert로 "환영합니다!" 팝업 띄우기\n',
              solution: 'alert("환영합니다!");',
              feedback: { perfect: 'alert 사용 완벽!', good: '잘했어요!', partial: 'alert() 안에 메시지를 넣으세요.', wrong: 'alert("환영합니다!")를 사용하세요.' }
            },
            {
              id: 'c2',
              title: 'prompt로 입력 받기',
              description: 'prompt()로 이름을 물어보고, 입력받은 이름을 콘솔에 출력하세요.',
              difficulty: 'easy',
              hints: ['const name = prompt("질문") 형태', 'prompt는 입력받은 값을 문자열로 반환해요'],
              estimatedMinutes: 3,
              starterCode: '// prompt로 이름 물어보기\nconst name = ___;\n// 입력받은 이름 출력\nconsole.log("입력한 이름:", name);\n',
              solution: 'const name = prompt("이름을 입력하세요:");\nconsole.log("입력한 이름:", name);',
              feedback: { perfect: 'prompt 사용 완벽!', good: '잘했어요!', partial: 'prompt("질문") 형태를 사용하세요.', wrong: 'const name = prompt("이름을 입력하세요");' }
            },
            {
              id: 'c3',
              title: 'confirm으로 확인 받기',
              description: 'confirm()으로 "계속하시겠습니까?"를 물어보고, 결과(true/false)를 출력하세요.',
              difficulty: 'easy',
              hints: ['confirm()은 true(확인) 또는 false(취소)를 반환해요', 'Boolean 값이에요!'],
              estimatedMinutes: 3,
              starterCode: '// confirm으로 확인/취소 물어보기\nconst result = ___;\nconsole.log("선택:", result);\n',
              solution: 'const result = confirm("계속하시겠습니까?");\nconsole.log("선택:", result);',
              feedback: { perfect: 'confirm 사용 완벽!', good: '잘했어요!', partial: 'confirm("질문") 형태를 사용하세요.', wrong: 'const result = confirm("질문");을 사용하세요.' }
            },
            {
              id: 'c4',
              title: 'prompt로 나이 입력받아 계산',
              description: 'prompt로 태어난 해를 입력받고, 현재 나이를 계산하여 alert로 보여주세요.',
              difficulty: 'medium',
              hints: ['prompt는 문자열을 반환하므로 Number()로 변환!', '나이 = 2025 - 태어난해'],
              estimatedMinutes: 6,
              starterCode: '// 태어난 해 입력받기\nconst birthYear = Number(prompt("태어난 해를 입력하세요:"));\n// 나이 계산\nconst age = ___;\n// alert로 결과 보여주기\nalert(`당신의 나이는 ${age}살입니다!`);\n',
              solution: 'const birthYear = Number(prompt("태어난 해를 입력하세요:"));\nconst age = 2025 - birthYear;\nalert(`당신의 나이는 ${age}살입니다!`);',
              feedback: { perfect: 'prompt+계산+alert 조합 완벽!', good: '잘 계산했어요!', partial: 'Number()로 변환하고 뺄셈하세요.', wrong: '2025 - birthYear로 나이를 계산하세요.' }
            },
            {
              id: 'c5',
              title: '간단한 퀴즈 게임',
              description: 'prompt로 "대한민국의 수도는?" 퀴즈를 내고, confirm으로 "정답을 확인하시겠습니까?" 물어본 후 alert로 정답을 알려주세요.',
              difficulty: 'medium',
              hints: ['prompt -> confirm -> alert 순서', '세 가지 대화상자를 모두 사용하세요'],
              estimatedMinutes: 8,
              starterCode: '// 1. prompt로 퀴즈 내기\nconst answer = prompt("대한민국의 수도는?");\n// 2. confirm으로 정답 확인 여부 물어보기\n// 3. alert로 결과 알려주기\n',
              solution: 'const answer = prompt("대한민국의 수도는?");\nconst wantCheck = confirm("정답을 확인하시겠습니까?");\nif (wantCheck) {\n  if (answer === "서울") {\n    alert("정답입니다!");\n  } else {\n    alert("오답! 정답은 서울입니다.");\n  }\n}',
              feedback: { perfect: '퀴즈 게임 완성! alert, prompt, confirm 모두 활용!', good: '잘 만들었어요!', partial: '3가지 대화상자를 모두 사용하세요.', wrong: 'prompt, confirm, alert를 순서대로 사용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m10',
          title: '주간 프로젝트: 계산기 로직',
          description: '사용자 입력을 받아 계산하는 간단한 계산기를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'create',
          isWeeklyProject: true,
          exp: 50,
          estimatedMinutes: 60,
          concept: 'JavaScript 기초 종합',
          conceptExplanation: '변수, 자료형, 연산자, 대화상자를 모두 활용해서 실용적인 프로그램을 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '배운 모든 JavaScript 기초를 통합할 수 있다',
            '사용자 입력을 받아 처리할 수 있다',
            '결과를 적절히 출력할 수 있다'
          ],
          realWorldExample: '실제 계산기 앱처럼 두 수를 입력받아 덧셈, 뺄셈, 곱셈, 나눗셈을 해봐요!',
          requirements: [
            'prompt로 첫 번째 숫자 입력받기',
            'prompt로 두 번째 숫자 입력받기',
            '두 수의 합, 차, 곱, 몫을 계산',
            '결과를 console.log로 출력',
            'alert로 최종 결과 요약 표시',
            'Number()로 문자열을 숫자로 변환',
            '템플릿 리터럴로 보기 좋게 출력'
          ],
          starterCode: '// 계산기 프로그램\n// TODO: 두 숫자를 입력받아 사칙연산 결과 출력\n',
          hints: [
            '💡 prompt는 항상 문자열을 반환 → Number()로 변환 필요',
            '💡 const num1 = Number(prompt("첫 번째 숫자"));',
            '💡 결과를 변수에 저장 후 출력',
            '💡 템플릿 리터럴로 예쁘게: `${num1} + ${num2} = ${sum}`'
          ],
          commonMistakes: [
            'Number() 변환 안 해서 "5" + "3" = "53" 됨',
            '0으로 나누기 체크 안 함',
            '소수점 결과를 정리 안 함 (toFixed(2) 사용 가능)',
            '변수명을 의미 없게: a, b 대신 num1, num2'
          ],
          testCases: [
            {
              input: '숫자 입력 및 변환',
              expectedOutput: 'Number() 사용 확인',
              description: '문자열을 숫자로 변환했는지 확인'
            },
            {
              input: '사칙연산',
              expectedOutput: '+, -, *, / 모두 계산',
              description: '네 가지 연산을 모두 수행했는지 확인'
            },
            {
              input: '결과 출력',
              expectedOutput: 'console.log와 alert 사용',
              description: '결과를 적절히 출력했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '두 수 입력받기',
              description: 'prompt로 두 숫자를 입력받고 Number()로 변환하여 변수에 저장하세요.',
              difficulty: 'easy',
              hints: ['prompt()는 문자열을 반환해요', 'Number()로 숫자로 변환하세요'],
              estimatedMinutes: 3,
              starterCode: '// 첫 번째 숫자 입력받기\nconst num1 = Number(prompt("첫 번째 숫자:"));\n// 두 번째 숫자 입력받기\nconst num2 = ___;\nconsole.log("입력:", num1, num2);\n',
              solution: 'const num1 = Number(prompt("첫 번째 숫자:"));\nconst num2 = Number(prompt("두 번째 숫자:"));\nconsole.log("입력:", num1, num2);',
              feedback: { perfect: '입력받기 완벽!', good: '잘했어요!', partial: 'Number()로 감싸세요.', wrong: 'Number(prompt("질문")) 형태를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '사칙연산 계산',
              description: '두 수의 합, 차, 곱, 몫을 각각 계산하여 변수에 저장하세요.',
              difficulty: 'easy',
              hints: ['+, -, *, / 연산자 사용', '각 결과를 별도 변수에 저장하세요'],
              estimatedMinutes: 4,
              starterCode: 'const num1 = 10;\nconst num2 = 3;\n\nconst sum = ___;\nconst diff = ___;\nconst product = ___;\nconst quotient = ___;\n\nconsole.log("합:", sum);\nconsole.log("차:", diff);\nconsole.log("곱:", product);\nconsole.log("몫:", quotient);\n',
              solution: 'const num1 = 10;\nconst num2 = 3;\nconst sum = num1 + num2;\nconst diff = num1 - num2;\nconst product = num1 * num2;\nconst quotient = num1 / num2;\nconsole.log("합:", sum);\nconsole.log("차:", diff);\nconsole.log("곱:", product);\nconsole.log("몫:", quotient);',
              testCases: [{ input: '', expectedOutput: '합: 13\n차: 7\n곱: 30\n몫: 3.333', description: '사칙연산' }],
              feedback: { perfect: '사칙연산 완벽!', good: '잘 계산했어요!', partial: '4가지 연산을 모두 하세요.', wrong: '+, -, *, / 를 사용하세요.' }
            },
            {
              id: 'c3',
              title: '템플릿 리터럴로 예쁘게 출력',
              description: '계산 결과를 "10 + 3 = 13" 형태의 템플릿 리터럴로 출력하세요.',
              difficulty: 'medium',
              hints: ['`${num1} + ${num2} = ${sum}` 형태', '4가지 연산 모두 이 형태로 출력'],
              estimatedMinutes: 5,
              starterCode: 'const num1 = 10;\nconst num2 = 3;\n\n// 템플릿 리터럴로 예쁘게 출력\nconsole.log(`${num1} + ${num2} = ${num1 + num2}`);\n// 나머지 3개도 출력하세요\n',
              solution: 'const num1 = 10;\nconst num2 = 3;\nconsole.log(`${num1} + ${num2} = ${num1 + num2}`);\nconsole.log(`${num1} - ${num2} = ${num1 - num2}`);\nconsole.log(`${num1} * ${num2} = ${num1 * num2}`);\nconsole.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);',
              feedback: { perfect: '깔끔한 출력 완벽!', good: '잘 만들었어요!', partial: '4가지 연산을 모두 출력하세요.', wrong: '`${num1} + ${num2} = ${num1+num2}` 형태를 사용하세요.' }
            },
            {
              id: 'c4',
              title: '0 나누기 방지',
              description: '두 번째 숫자가 0일 때 나눗셈을 하지 않도록 처리하세요.',
              difficulty: 'medium',
              hints: ['if (num2 !== 0) 조건을 사용하세요', '0으로 나누면 Infinity가 돼요'],
              estimatedMinutes: 6,
              starterCode: 'const num1 = 10;\nconst num2 = 0;\n\n// 0으로 나누기 방지\nif (___) {\n  console.log(`${num1} / ${num2} = ${num1 / num2}`);\n} else {\n  console.log("0으로 나눌 수 없습니다!");\n}\n',
              solution: 'const num1 = 10;\nconst num2 = 0;\nif (num2 !== 0) {\n  console.log(`${num1} / ${num2} = ${num1 / num2}`);\n} else {\n  console.log("0으로 나눌 수 없습니다!");\n}',
              testCases: [{ input: '', expectedOutput: '0으로 나눌 수 없습니다!', description: '0 나누기 방지' }],
              feedback: { perfect: '예외 처리 완벽!', good: '잘했어요!', partial: 'num2 !== 0 조건을 사용하세요.', wrong: 'if (num2 !== 0) 조건으로 확인하세요.' }
            },
            {
              id: 'c5',
              title: '완전한 계산기',
              description: 'prompt로 두 숫자와 연산자(+,-,*,/)를 입력받아 계산 결과를 alert로 보여주는 완전한 계산기를 만드세요.',
              difficulty: 'hard',
              hints: ['연산자도 prompt로 입력받으세요', 'if/else if로 연산자별 분기 처리'],
              estimatedMinutes: 12,
              starterCode: '// 완전한 계산기\nconst num1 = Number(prompt("첫 번째 숫자:"));\nconst operator = prompt("연산자 (+, -, *, /):");\nconst num2 = Number(prompt("두 번째 숫자:"));\n\nlet result;\n// 연산자별 계산 (if/else if 사용)\n\nalert(`${num1} ${operator} ${num2} = ${result}`);\n',
              solution: 'const num1 = Number(prompt("첫 번째 숫자:"));\nconst operator = prompt("연산자 (+, -, *, /):");\nconst num2 = Number(prompt("두 번째 숫자:"));\nlet result;\nif (operator === "+") {\n  result = num1 + num2;\n} else if (operator === "-") {\n  result = num1 - num2;\n} else if (operator === "*") {\n  result = num1 * num2;\n} else if (operator === "/") {\n  result = num2 !== 0 ? num1 / num2 : "오류(0나누기)";\n} else {\n  result = "잘못된 연산자";\n}\nalert(`${num1} ${operator} ${num2} = ${result}`);',
              feedback: { perfect: '완전한 계산기 완성! 축하합니다!', good: '훌륭해요!', partial: 'if/else if로 4가지 연산자를 처리하세요.', wrong: '연산자에 따라 다른 계산을 하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 40: 조건문과 반복문 (10미션, 4시간)
    {
      id: 'week-40',
      number: 40,
      title: '조건과 반복',
      description: '조건에 따라 다르게 행동하고, 반복 작업을 자동화해요',
      missions: [
        {
          id: 'w40-m1',
          title: 'if 문 - 조건 판단',
          description: '조건이 참일 때만 코드를 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 25,
          concept: 'if 조건문',
          conceptExplanation: 'if (조건) { 실행할 코드 } 형태로 조건이 true일 때만 코드가 실행돼요!',
          cstaStandard: '2-AP-15',
          learningObjectives: [
            'if 문의 기본 구조를 이해할 수 있다',
            '비교 연산자로 조건을 만들 수 있다',
            '중괄호를 올바르게 사용할 수 있다'
          ],
          realWorldExample: '게임에서 "점수가 100 이상이면 레벨업!" 같은 조건 판단에 사용해요!',
          starterCode: '// age 변수를 만들고 15 저장\n\n// age가 18 이상이면 "성인입니다" 출력\n// 아니면 아무것도 안 함\n',
          solution: 'const age = 15;\n\nif (age >= 18) {\n  console.log("성인입니다");\n}\n\n// age가 15이므로 조건이 false, 아무것도 출력 안 됨',
          hints: [
            '💡 if (조건) { 코드 }',
            '💡 비교 연산자: >, <, >=, <=, ===, !==',
            '💡 === 는 "같다", == 보다 엄격해서 좋아요',
            '💡 조건이 false면 { } 안 코드는 무시'
          ],
          commonMistakes: [
            '= 와 === 혼동: if (x = 5) ✗, if (x === 5) ✓',
            '중괄호 빼먹기 (한 줄일 때는 가능하지만 권장 안 함)',
            '세미콜론을 if 뒤에: if (조건); ✗'
          ],
          conceptCards: [
            {
              title: 'if 문',
              description: 'if (조건) { 참일 때 실행 }'
            },
            {
              title: '비교 연산자',
              description: '>, <, >=, <=, ===(같음), !==(다름)'
            },
            {
              title: '중괄호 {}',
              description: '여러 줄을 묶어요. 한 줄이어도 쓰는 게 좋아요!'
            }
          ],
          testCases: [
            {
              input: 'if 문 사용',
              expectedOutput: 'if와 비교 연산자 사용',
              description: 'if 문을 올바르게 작성했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 if 문 작성',
              description: 'score가 60 이상이면 "합격"을 출력하세요.',
              difficulty: 'easy',
              hints: ['if (조건) { 코드 } 형태', '>= 연산자는 "이상"이에요'],
              estimatedMinutes: 2,
              starterCode: 'const score = 75;\n\n// score가 60 이상이면 "합격" 출력\nif (___) {\n  console.log("합격");\n}\n',
              solution: 'const score = 75;\nif (score >= 60) {\n  console.log("합격");\n}',
              testCases: [{ input: '', expectedOutput: '합격', description: 'if 조건 통과' }],
              feedback: { perfect: 'if 문 완벽!', good: '잘했어요!', partial: '>= 연산자를 사용하세요.', wrong: 'if (score >= 60) 형태를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '=== vs == 차이',
              description: '1 == "1"과 1 === "1"의 결과를 각각 출력하고 차이를 확인하세요.',
              difficulty: 'easy',
              hints: ['== 는 값만 비교 (타입 변환)', '=== 는 값과 타입 모두 비교 (엄격)'],
              estimatedMinutes: 3,
              starterCode: '// == (느슨한 비교)\nconsole.log(1 == "1");   // ???\n// === (엄격한 비교)\nconsole.log(1 === "1");  // ???\n// 항상 === 를 사용하세요!\n',
              solution: 'console.log(1 == "1");   // true (타입 무시)\nconsole.log(1 === "1");  // false (타입도 확인)',
              testCases: [{ input: '', expectedOutput: 'true\nfalse', description: '=== vs ==' }],
              feedback: { perfect: '=== vs == 차이를 완벽히 이해했어요!', good: '잘 구분했어요!', partial: '===는 타입까지 비교해요.', wrong: '== 는 true, === 는 false예요.' }
            },
            {
              id: 'c3',
              title: 'Python if vs JS if 비교',
              description: 'Python의 if age >= 18: print("성인")을 JavaScript로 변환하세요.',
              difficulty: 'easy',
              hints: ['Python: 콜론(:), JS: 중괄호({})', 'Python: 들여쓰기, JS: 중괄호 안에 코드'],
              estimatedMinutes: 4,
              starterCode: '// Python:\n// if age >= 18:\n//     print("성인")\n\n// JavaScript로 변환:\nconst age = 20;\n',
              solution: 'const age = 20;\nif (age >= 18) {\n  console.log("성인");\n}',
              testCases: [{ input: '', expectedOutput: '성인', description: 'Python->JS if 변환' }],
              feedback: { perfect: 'Python->JS 변환 완벽!', good: '잘 변환했어요!', partial: '중괄호 {}를 사용하세요.', wrong: 'if (조건) { console.log() } 형태를 사용하세요.' }
            },
            {
              id: 'c4',
              title: '온도에 따른 메시지',
              description: '온도가 30 이상이면 "더워요!", 10 이하면 "추워요!", 그 외엔 "적당해요!"를 출력하세요.',
              difficulty: 'medium',
              hints: ['if / else if / else 구조를 사용하세요', '조건 순서가 중요해요'],
              estimatedMinutes: 6,
              starterCode: 'const temp = 25;\n\n// 온도에 따른 메시지\nif (temp >= 30) {\n  console.log("더워요!");\n}\n// else if와 else를 추가하세요\n',
              solution: 'const temp = 25;\nif (temp >= 30) {\n  console.log("더워요!");\n} else if (temp <= 10) {\n  console.log("추워요!");\n} else {\n  console.log("적당해요!");\n}',
              testCases: [{ input: '', expectedOutput: '적당해요!', description: '온도 판별' }],
              feedback: { perfect: 'if/else if/else 완벽!', good: '잘했어요!', partial: 'else if와 else를 추가하세요.', wrong: 'if/else if/else 구조를 사용하세요.' }
            },
            {
              id: 'c5',
              title: '성적 등급 판별기',
              description: '점수에 따라 등급을 출력하세요: 90이상=A, 80이상=B, 70이상=C, 60이상=D, 나머지=F',
              difficulty: 'hard',
              hints: ['if / else if / else if / else if / else 구조', '높은 점수부터 체크하세요'],
              estimatedMinutes: 10,
              starterCode: 'const score = 85;\n\n// 성적 등급 판별\n// 90이상: A, 80이상: B, 70이상: C, 60이상: D, 나머지: F\n',
              solution: 'const score = 85;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else if (score >= 60) {\n  console.log("D");\n} else {\n  console.log("F");\n}',
              testCases: [{ input: '', expectedOutput: 'B', description: '85점은 B등급' }],
              feedback: { perfect: '성적 판별기 완벽!', good: '잘 만들었어요!', partial: '모든 등급을 체크하세요.', wrong: 'if/else if/else 로 높은 점수부터 체크하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m2',
          title: 'if-else 양갈래 선택',
          description: '조건이 참이면 A, 거짓이면 B를 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 20,
          concept: 'if-else 문',
          conceptExplanation: 'if-else는 양갈래 길! 조건이 true면 if 블록, false면 else 블록이 실행돼요.',
          cstaStandard: '2-AP-15',
          learningObjectives: ['if-else 구조를 이해할 수 있다', '참/거짓에 따라 다른 코드를 실행할 수 있다'],
          realWorldExample: '"비가 오면 우산을 가져가고, 안 오면 선글라스를 쓴다" 같은 이진 선택이에요!',
          hints: ['💡 if (조건) { 참일 때 } else { 거짓일 때 }', '💡 else 뒤에는 조건을 쓰지 않아요'],
          commonMistakes: ['else 뒤에 조건을 쓰는 실수', 'else를 if 블록 안에 넣는 실수'],
          challenges: [
            {
              id: 'c1',
              title: '짝수/홀수 판별',
              description: '숫자가 짝수면 "짝수", 홀수면 "홀수"를 출력하세요.',
              difficulty: 'easy',
              hints: ['% 연산자로 나머지를 구하세요', 'num % 2 === 0이면 짝수입니다'],
              estimatedMinutes: 3,
              starterCode: 'const num = 7;\n\n// num이 짝수인지 홀수인지 판별하세요\n',
              solution: 'const num = 7;\nif (num % 2 === 0) {\n  console.log("짝수");\n} else {\n  console.log("홀수");\n}',
              testCases: [{ input: '', expectedOutput: '홀수', description: '7은 홀수' }],
              feedback: { perfect: '짝수/홀수 판별 완벽! % 연산자를 정확히 사용했어요! 🎯', good: '잘 했어요! 다른 숫자로도 테스트해보세요.', partial: 'if는 맞는데 else를 추가해야 해요.', wrong: 'if (num % 2 === 0) 조건부터 시작하세요.' }
            },
            {
              id: 'c2',
              title: '성인/미성년 판별',
              description: '나이가 18세 이상이면 "성인", 아니면 "미성년"을 출력하세요.',
              difficulty: 'easy',
              hints: ['>= 연산자로 이상을 비교하세요', 'if (age >= 18)'],
              estimatedMinutes: 3,
              starterCode: 'const age = 15;\n\n// 성인인지 미성년인지 판별하세요\n',
              solution: 'const age = 15;\nif (age >= 18) {\n  console.log("성인");\n} else {\n  console.log("미성년");\n}',
              testCases: [{ input: '', expectedOutput: '미성년', description: '15세는 미성년' }],
              feedback: { perfect: '나이 판별 완벽! >= 연산자를 잘 활용했어요! ✨', good: '좋아요! 경계값(18)도 테스트해보세요.', partial: '비교 연산자를 확인해보세요. >= 인지 > 인지.', wrong: 'if (age >= 18) 조건으로 시작하세요.' }
            },
            {
              id: 'c3',
              title: '합격/불합격 판정',
              description: '점수가 60점 이상이면 "합격! 축하합니다!", 아니면 "불합격. 다음 기회에!"를 출력하세요.',
              difficulty: 'easy',
              hints: ['score >= 60 으로 비교하세요', '문자열을 정확히 출력하세요'],
              estimatedMinutes: 3,
              starterCode: 'const score = 75;\n\n// 합격/불합격을 판정하세요\n',
              solution: 'const score = 75;\nif (score >= 60) {\n  console.log("합격! 축하합니다!");\n} else {\n  console.log("불합격. 다음 기회에!");\n}',
              testCases: [{ input: '', expectedOutput: '합격! 축하합니다!', description: '75점은 합격' }],
              feedback: { perfect: '합격 판정 완벽! 🎉', good: '잘 했어요! 출력 메시지를 정확히 맞추세요.', partial: '조건은 맞는데 출력 메시지를 확인하세요.', wrong: 'if (score >= 60) 부터 시작하세요.' }
            },
            {
              id: 'c4',
              title: '로그인 검증',
              description: '비밀번호가 "1234"면 "로그인 성공!", 아니면 "비밀번호가 틀렸습니다."를 출력하세요.',
              difficulty: 'medium',
              hints: ['문자열 비교에는 === 를 쓰세요', 'password === "1234"'],
              estimatedMinutes: 5,
              starterCode: 'const password = "abcd";\n\n// 비밀번호 검증\n',
              solution: 'const password = "abcd";\nif (password === "1234") {\n  console.log("로그인 성공!");\n} else {\n  console.log("비밀번호가 틀렸습니다.");\n}',
              testCases: [{ input: '', expectedOutput: '비밀번호가 틀렸습니다.', description: '"abcd"는 틀린 비밀번호' }],
              feedback: { perfect: '로그인 검증 완벽! 문자열 비교를 정확히 했어요! 🔐', good: '잘 돼요! ===로 비교하는 것이 안전합니다.', partial: '== 대신 ===를 써보세요. 타입까지 비교해요.', wrong: 'if (password === "1234") 형태로 비교하세요.' }
            },
            {
              id: 'c5',
              title: '할인 계산기',
              description: '구매 금액이 50000원 이상이면 10% 할인, 아니면 원래 가격을 출력하세요.',
              difficulty: 'hard',
              hints: ['할인 금액 = price * 0.9', '변수에 결과를 저장하고 출력하세요'],
              estimatedMinutes: 8,
              starterCode: 'const price = 70000;\n\n// 50000원 이상이면 10% 할인\n// 최종 가격을 출력하세요\n',
              solution: 'const price = 70000;\nlet finalPrice;\nif (price >= 50000) {\n  finalPrice = price * 0.9;\n  console.log("10% 할인 적용! 최종 가격: " + finalPrice + "원");\n} else {\n  finalPrice = price;\n  console.log("최종 가격: " + finalPrice + "원");\n}',
              testCases: [{ input: '', expectedOutput: '10% 할인 적용! 최종 가격: 63000원', description: '70000원은 할인 적용' }],
              feedback: { perfect: '할인 계산기 완벽! 조건부 연산까지 마스터했어요! 💰', good: '할인 적용은 잘 했어요! 출력 메시지도 맞추면 완벽해요.', partial: '조건은 맞아요! price * 0.9로 할인을 계산하세요.', wrong: 'if (price >= 50000) 조건부터 시작하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m3',
          title: 'else if - 다중 조건',
          description: '여러 조건을 순서대로 검사해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: 'else if 문',
          conceptExplanation: 'else if로 여러 조건을 체크할 수 있어요! 위에서부터 순서대로 검사하고, 처음 참인 조건의 코드만 실행돼요.',
          cstaStandard: '2-AP-15',
          learningObjectives: ['else if로 다중 조건을 처리할 수 있다', '조건 검사 순서의 중요성을 이해할 수 있다'],
          realWorldExample: '"날씨가 맑으면 소풍, 비 오면 영화관, 눈 오면 스키장" 같은 다중 선택!',
          hints: ['💡 if → else if → else if → else 순서', '💡 조건은 위에서 아래로 검사합니다'],
          commonMistakes: ['조건 순서가 잘못되면 원하지 않는 결과가 나옴', 'else if를 elif로 쓰는 실수(파이썬 문법)'],
          challenges: [
            {
              id: 'c1',
              title: '성적 등급 (A/B/C/D/F)',
              description: '점수에 따라 등급을 출력하세요: 90이상=A, 80이상=B, 70이상=C, 60이상=D, 나머지=F',
              difficulty: 'easy',
              hints: ['높은 점수 조건부터 체크하세요', 'else if를 사용하세요'],
              estimatedMinutes: 5,
              starterCode: 'const score = 85;\n\n// 등급을 출력하세요\n',
              solution: 'const score = 85;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else if (score >= 60) {\n  console.log("D");\n} else {\n  console.log("F");\n}',
              testCases: [{ input: '', expectedOutput: 'B', description: '85점은 B등급' }],
              feedback: { perfect: '등급 판별 완벽! else if 체인을 정확히 구성했어요! 🏅', good: '잘 했어요! 모든 등급이 올바르게 나오나요?', partial: '조건 순서를 확인하세요. 높은 점수부터!', wrong: 'if (score >= 90) { } else if (score >= 80) { } 형태로 작성하세요.' }
            },
            {
              id: 'c2',
              title: '계절 판별',
              description: '월(month)에 따라 계절을 출력하세요: 3-5=봄, 6-8=여름, 9-11=가을, 12,1,2=겨울',
              difficulty: 'easy',
              hints: ['범위를 && 연산자로 결합하세요', 'month >= 3 && month <= 5'],
              estimatedMinutes: 5,
              starterCode: 'const month = 7;\n\n// 몇 월인지에 따라 계절을 출력하세요\n',
              solution: 'const month = 7;\nif (month >= 3 && month <= 5) {\n  console.log("봄");\n} else if (month >= 6 && month <= 8) {\n  console.log("여름");\n} else if (month >= 9 && month <= 11) {\n  console.log("가을");\n} else {\n  console.log("겨울");\n}',
              testCases: [{ input: '', expectedOutput: '여름', description: '7월은 여름' }],
              feedback: { perfect: '계절 판별 완벽! && 연산자로 범위 조건을 잘 만들었어요! 🌸', good: '좋아요! 12, 1, 2월도 겨울로 잘 처리되나요?', partial: '범위 조건에 &&를 사용해보세요.', wrong: 'if (month >= 3 && month <= 5) 형태로 시작하세요.' }
            },
            {
              id: 'c3',
              title: 'BMI 판정',
              description: 'BMI 값에 따라 판정: 18.5 미만=저체중, 25 미만=정상, 30 미만=과체중, 30 이상=비만',
              difficulty: 'medium',
              hints: ['소수점 비교도 가능해요', '낮은 값부터 체크하세요'],
              estimatedMinutes: 7,
              starterCode: 'const bmi = 22.5;\n\n// BMI 판정을 출력하세요\n',
              solution: 'const bmi = 22.5;\nif (bmi < 18.5) {\n  console.log("저체중");\n} else if (bmi < 25) {\n  console.log("정상");\n} else if (bmi < 30) {\n  console.log("과체중");\n} else {\n  console.log("비만");\n}',
              testCases: [{ input: '', expectedOutput: '정상', description: 'BMI 22.5는 정상' }],
              feedback: { perfect: 'BMI 판정 완벽! 소수점 비교도 문제없어요! 🏋️', good: '잘 했어요! 경계값도 확인해보세요.', partial: '조건 순서를 확인하세요. 낮은 값부터!', wrong: 'if (bmi < 18.5) 부터 시작하세요.' }
            },
            {
              id: 'c4',
              title: '교통수단 추천',
              description: '거리(km)에 따라: 1미만=걸어가세요, 5미만=자전거, 20미만=버스, 나머지=기차/비행기',
              difficulty: 'medium',
              hints: ['짧은 거리부터 체크하세요', 'km 단위입니다'],
              estimatedMinutes: 5,
              starterCode: 'const distance = 12;\n\n// 거리에 맞는 교통수단을 추천하세요\n',
              solution: 'const distance = 12;\nif (distance < 1) {\n  console.log("걸어가세요");\n} else if (distance < 5) {\n  console.log("자전거");\n} else if (distance < 20) {\n  console.log("버스");\n} else {\n  console.log("기차/비행기");\n}',
              testCases: [{ input: '', expectedOutput: '버스', description: '12km는 버스' }],
              feedback: { perfect: '교통수단 추천 완벽! 범위 조건을 잘 구성했어요! 🚌', good: '좋아요! 모든 거리 범위를 테스트해보세요.', partial: '조건 순서를 확인하세요.', wrong: 'if (distance < 1) 부터 시작하세요.' }
            },
            {
              id: 'c5',
              title: '시간대별 인사',
              description: '시간(0-23)에 따라: 6-11=좋은 아침!, 12-17=좋은 오후!, 18-21=좋은 저녁!, 나머지=좋은 밤!',
              difficulty: 'hard',
              hints: ['범위 조건을 사용하세요', '&& 연산자로 두 조건을 결합하세요'],
              estimatedMinutes: 8,
              starterCode: 'const hour = 14;\n\n// 시간에 맞는 인사를 출력하세요\n',
              solution: 'const hour = 14;\nif (hour >= 6 && hour <= 11) {\n  console.log("좋은 아침!");\n} else if (hour >= 12 && hour <= 17) {\n  console.log("좋은 오후!");\n} else if (hour >= 18 && hour <= 21) {\n  console.log("좋은 저녁!");\n} else {\n  console.log("좋은 밤!");\n}',
              testCases: [{ input: '', expectedOutput: '좋은 오후!', description: '14시는 오후' }],
              feedback: { perfect: '시간대별 인사 완벽! 복잡한 범위 조건을 정확히 처리했어요! ⏰', good: '잘 했어요! 0시, 5시, 22시 등 경계값도 체크해보세요.', partial: '범위 조건에 &&를 사용해보세요.', wrong: 'if (hour >= 6 && hour <= 11) 형태로 시작하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m4',
          title: 'switch 문',
          description: '하나의 값에 따라 여러 경우를 처리해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: 'switch 문',
          conceptExplanation: 'switch는 하나의 값을 여러 case와 비교해요! if-else if가 너무 길어질 때 깔끔하게 쓸 수 있어요.',
          cstaStandard: '2-AP-15',
          learningObjectives: ['switch 문의 구조를 이해할 수 있다', 'break의 역할을 이해할 수 있다', 'default 케이스를 활용할 수 있다'],
          realWorldExample: '"요일에 따라 시간표가 달라지는 것" 처럼 특정 값에 따른 분기!',
          hints: ['💡 switch (값) { case 1: ... break; }', '💡 break를 빼면 다음 case도 실행됩니다!'],
          commonMistakes: ['break를 빼먹어서 fall-through 발생', 'case 뒤에 === 를 쓰는 실수'],
          challenges: [
            {
              id: 'c1',
              title: '요일 출력',
              description: 'day 값(1-7)에 따라 요일을 출력하세요. 1=월요일, 2=화요일, ... 7=일요일',
              difficulty: 'easy',
              hints: ['switch (day) { case 1: ... }', '각 case마다 break를 넣으세요'],
              estimatedMinutes: 5,
              starterCode: 'const day = 3;\n\n// day에 해당하는 요일을 출력하세요\n',
              solution: 'const day = 3;\nswitch (day) {\n  case 1: console.log("월요일"); break;\n  case 2: console.log("화요일"); break;\n  case 3: console.log("수요일"); break;\n  case 4: console.log("목요일"); break;\n  case 5: console.log("금요일"); break;\n  case 6: console.log("토요일"); break;\n  case 7: console.log("일요일"); break;\n  default: console.log("잘못된 값");\n}',
              testCases: [{ input: '', expectedOutput: '수요일', description: '3은 수요일' }],
              feedback: { perfect: 'switch 문 완벽! 모든 case와 break를 정확히 작성했어요! 📅', good: '잘 했어요! default도 추가하면 완벽해요.', partial: 'case는 맞는데 break를 확인하세요.', wrong: 'switch (day) { case 1: ... break; } 형태로 시작하세요.' }
            },
            {
              id: 'c2',
              title: '가위바위보',
              description: 'choice 값에 따라: "가위"→"✌️ 가위!", "바위"→"✊ 바위!", "보"→"🖐 보!", 그 외→"잘못된 선택"',
              difficulty: 'easy',
              hints: ['문자열도 case로 비교 가능', 'case "가위": 형태'],
              estimatedMinutes: 5,
              starterCode: 'const choice = "바위";\n\n// switch로 가위바위보 결과를 출력하세요\n',
              solution: 'const choice = "바위";\nswitch (choice) {\n  case "가위":\n    console.log("✌️ 가위!");\n    break;\n  case "바위":\n    console.log("✊ 바위!");\n    break;\n  case "보":\n    console.log("🖐 보!");\n    break;\n  default:\n    console.log("잘못된 선택");\n}',
              testCases: [{ input: '', expectedOutput: '✊ 바위!', description: '바위 선택' }],
              feedback: { perfect: '가위바위보 완벽! 문자열 case도 잘 활용했어요! ✌️', good: '좋아요! 이모지도 잘 넣었나요?', partial: 'case 문법을 확인하세요.', wrong: 'switch (choice) { case "가위": ... } 형태로 작성하세요.' }
            },
            {
              id: 'c3',
              title: '계산기',
              description: 'operator에 따라 a와 b를 계산하세요: "+"=덧셈, "-"=뺄셈, "*"=곱셈, "/"=나눗셈',
              difficulty: 'medium',
              hints: ['각 연산자를 case로 처리하세요', '나눗셈은 0으로 나누기를 주의!'],
              estimatedMinutes: 7,
              starterCode: 'const a = 10, b = 3;\nconst operator = "+";\n\n// operator에 따라 계산 결과를 출력하세요\n',
              solution: 'const a = 10, b = 3;\nconst operator = "+";\nswitch (operator) {\n  case "+": console.log(a + b); break;\n  case "-": console.log(a - b); break;\n  case "*": console.log(a * b); break;\n  case "/": console.log(a / b); break;\n  default: console.log("알 수 없는 연산자");\n}',
              testCases: [{ input: '', expectedOutput: '13', description: '10 + 3 = 13' }],
              feedback: { perfect: '계산기 완벽! switch로 깔끔한 분기 처리! 🧮', good: '잘 돼요! default도 처리하면 더 안전해요.', partial: '연산은 맞는데 break를 확인하세요.', wrong: 'switch (operator) { case "+": ... } 형태로 작성하세요.' }
            },
            {
              id: 'c4',
              title: '신호등 판별',
              description: 'color에 따라: "빨강"→"정지!", "노랑"→"주의!", "초록"→"출발!", default→"고장난 신호등"',
              difficulty: 'medium',
              hints: ['break를 꼭 넣으세요', 'default는 예외 처리용'],
              estimatedMinutes: 5,
              starterCode: 'const color = "초록";\n\n// 신호등 색에 따른 행동을 출력하세요\n',
              solution: 'const color = "초록";\nswitch (color) {\n  case "빨강":\n    console.log("정지!");\n    break;\n  case "노랑":\n    console.log("주의!");\n    break;\n  case "초록":\n    console.log("출발!");\n    break;\n  default:\n    console.log("고장난 신호등");\n}',
              testCases: [{ input: '', expectedOutput: '출발!', description: '초록불은 출발' }],
              feedback: { perfect: '신호등 판별 완벽! 🚦', good: '잘 했어요! default도 잘 처리했나요?', partial: 'case 문법을 다시 확인하세요.', wrong: 'switch (color) { case "빨강": ... } 형태입니다.' }
            },
            {
              id: 'c5',
              title: '메뉴 선택기',
              description: '메뉴 번호(1-4)에 따라 음식과 가격을 출력. 1="햄버거 5000원", 2="피자 8000원", 3="파스타 7000원", 4="샐러드 4000원"',
              difficulty: 'hard',
              hints: ['각 case에서 두 가지 정보를 출력하세요', 'let을 사용해 변수에 저장 후 출력해도 돼요'],
              estimatedMinutes: 8,
              starterCode: 'const menu = 2;\n\n// 메뉴 번호에 따라 음식 이름과 가격을 출력하세요\n',
              solution: 'const menu = 2;\nlet name, price;\nswitch (menu) {\n  case 1: name = "햄버거"; price = 5000; break;\n  case 2: name = "피자"; price = 8000; break;\n  case 3: name = "파스타"; price = 7000; break;\n  case 4: name = "샐러드"; price = 4000; break;\n  default: name = "없는 메뉴"; price = 0;\n}\nconsole.log(name + " " + price + "원");',
              testCases: [{ input: '', expectedOutput: '피자 8000원', description: '메뉴 2번은 피자' }],
              feedback: { perfect: '메뉴 선택기 완벽! 변수 활용까지 훌륭해요! 🍕', good: '잘 돼요! 변수에 저장하면 코드가 더 깔끔해져요.', partial: '출력 형식을 확인하세요.', wrong: 'switch (menu) { case 1: ... } 형태로 시작하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m5',
          title: '논리 연산자',
          description: '&&, ||, ! 로 복합 조건을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: '논리 연산자',
          conceptExplanation: '&&(그리고), ||(또는), !(아닌)으로 여러 조건을 조합할 수 있어요!',
          cstaStandard: '2-AP-15',
          learningObjectives: ['&&, ||, ! 연산자의 의미를 이해할 수 있다', '복합 조건을 만들 수 있다'],
          realWorldExample: '"16세 이상이고 보호자 동의가 있으면" 처럼 두 조건 모두 필요한 경우!',
          hints: ['💡 && = 둘 다 참이어야 참', '💡 || = 하나만 참이면 참', '💡 ! = 참↔거짓 뒤집기'],
          commonMistakes: ['&&와 ||의 우선순위 혼동', '!를 조건 전체가 아닌 일부에만 적용'],
          challenges: [
            {
              id: 'c1',
              title: 'AND 조건',
              description: '나이가 13세 이상이고 부모 동의가 true이면 "가입 가능", 아니면 "가입 불가"를 출력하세요.',
              difficulty: 'easy',
              hints: ['age >= 13 && consent === true', '&&는 둘 다 참이어야 합니다'],
              estimatedMinutes: 3,
              starterCode: 'const age = 15;\nconst consent = true;\n\n// 두 조건을 모두 만족하면 가입 가능\n',
              solution: 'const age = 15;\nconst consent = true;\nif (age >= 13 && consent === true) {\n  console.log("가입 가능");\n} else {\n  console.log("가입 불가");\n}',
              testCases: [{ input: '', expectedOutput: '가입 가능', description: '15세, 동의=true' }],
              feedback: { perfect: '&& 연산자 완벽 이해! 두 조건 모두 확인했어요! ✅', good: '잘 했어요! consent는 이미 true/false니까 === true를 생략해도 돼요.', partial: '두 조건을 &&로 연결해보세요.', wrong: 'if (age >= 13 && consent) 형태로 작성하세요.' }
            },
            {
              id: 'c2',
              title: 'OR 조건',
              description: 'VIP이거나 쿠폰이 있으면 "할인 적용!", 아니면 "정가 결제"를 출력하세요.',
              difficulty: 'easy',
              hints: ['isVIP || hasCoupon', '||는 하나만 참이면 됩니다'],
              estimatedMinutes: 3,
              starterCode: 'const isVIP = false;\nconst hasCoupon = true;\n\n// VIP이거나 쿠폰이 있으면 할인\n',
              solution: 'const isVIP = false;\nconst hasCoupon = true;\nif (isVIP || hasCoupon) {\n  console.log("할인 적용!");\n} else {\n  console.log("정가 결제");\n}',
              testCases: [{ input: '', expectedOutput: '할인 적용!', description: '쿠폰 있음' }],
              feedback: { perfect: '|| 연산자 완벽! 하나만 참이어도 할인! 🎫', good: '좋아요! boolean 변수는 직접 조건으로 쓸 수 있어요.', partial: '||로 두 조건을 연결하세요.', wrong: 'if (isVIP || hasCoupon) 형태입니다.' }
            },
            {
              id: 'c3',
              title: 'NOT 연산자',
              description: 'isLoggedIn이 false이면(로그인 안 됨) "로그인이 필요합니다"를 출력하세요.',
              difficulty: 'easy',
              hints: ['!isLoggedIn은 isLoggedIn이 false일 때 true', '!는 참↔거짓을 뒤집어요'],
              estimatedMinutes: 3,
              starterCode: 'const isLoggedIn = false;\n\n// 로그인 안 됐으면 메시지 출력\n',
              solution: 'const isLoggedIn = false;\nif (!isLoggedIn) {\n  console.log("로그인이 필요합니다");\n}',
              testCases: [{ input: '', expectedOutput: '로그인이 필요합니다', description: '미로그인 상태' }],
              feedback: { perfect: '! 연산자 완벽! 부정 조건을 깔끔하게 표현했어요! 🔒', good: '잘 했어요! !는 매우 자주 사용되는 패턴이에요.', partial: '!를 변수 앞에 붙여보세요.', wrong: 'if (!isLoggedIn) 형태로 작성하세요.' }
            },
            {
              id: 'c4',
              title: '놀이기구 탑승 조건',
              description: '키가 120cm 이상이고 나이가 8세 이상이면 "탑승 가능!", 아니면 조건별 안내 메시지를 출력하세요.',
              difficulty: 'medium',
              hints: ['&&로 두 조건을 결합', '어떤 조건이 안 맞는지도 알려주세요'],
              estimatedMinutes: 7,
              starterCode: 'const height = 115;\nconst age = 10;\n\n// 키와 나이 조건을 모두 확인하세요\n',
              solution: 'const height = 115;\nconst age = 10;\nif (height >= 120 && age >= 8) {\n  console.log("탑승 가능!");\n} else if (height < 120) {\n  console.log("키가 부족합니다. " + (120 - height) + "cm 더 자라야 해요!");\n} else {\n  console.log("나이가 부족합니다.");\n}',
              testCases: [{ input: '', expectedOutput: '키가 부족합니다. 5cm 더 자라야 해요!', description: '키 115cm' }],
              feedback: { perfect: '조건별 안내까지 완벽! 사용자 친화적인 메시지예요! 🎢', good: '기본 조건은 잘 했어요! 구체적인 안내 메시지를 추가해보세요.', partial: '&&는 맞아요! else에서 어떤 조건이 안 맞는지 구분해보세요.', wrong: 'if (height >= 120 && age >= 8) 부터 시작하세요.' }
            },
            {
              id: 'c5',
              title: '영화 관람 등급',
              description: '나이와 보호자 동반 여부로 관람 가능 여부를 판단하세요. 18세 이상이면 무조건 가능, 15세 이상이면서 보호자 동반이면 가능, 나머지 불가.',
              difficulty: 'hard',
              hints: ['||로 두 가지 "가능" 조건을 연결하세요', '(age >= 18) || (age >= 15 && withParent)'],
              estimatedMinutes: 8,
              starterCode: 'const age = 16;\nconst withParent = true;\n\n// 관람 가능 여부를 판단하세요\n',
              solution: 'const age = 16;\nconst withParent = true;\nif (age >= 18 || (age >= 15 && withParent)) {\n  console.log("관람 가능");\n} else if (age >= 15) {\n  console.log("보호자 동반 필요");\n} else {\n  console.log("관람 불가");\n}',
              testCases: [{ input: '', expectedOutput: '관람 가능', description: '16세+보호자 동반' }],
              feedback: { perfect: '복합 조건 완벽! &&와 ||의 조합을 정확히 이해했어요! 🎬', good: '잘 했어요! 괄호로 우선순위를 명확히 하면 좋아요.', partial: '||와 &&를 같이 쓸 때는 괄호를 사용하세요.', wrong: '(age >= 18) || (age >= 15 && withParent) 조건을 만들어보세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m6',
          title: 'for 반복문',
          description: '정해진 횟수만큼 반복 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 30,
          concept: 'for 반복문',
          conceptExplanation: 'for (시작; 조건; 증가) { 반복할 코드 } - 정해진 횟수만큼 반복할 때 최고!',
          cstaStandard: '2-AP-15',
          learningObjectives: ['for 문의 3요소(초기화, 조건, 증감)를 이해할 수 있다', 'for 문으로 반복 작업을 할 수 있다'],
          realWorldExample: '"1층부터 10층까지 엘리베이터가 올라가는 것" 처럼 정해진 범위를 반복!',
          hints: ['💡 for (let i = 0; i < 5; i++) { }', '💡 i++는 i = i + 1과 같아요'],
          commonMistakes: ['무한 루프 (조건이 항상 참)', 'off-by-one 에러 (< vs <=)'],
          challenges: [
            {
              id: 'c1',
              title: '1부터 5까지 출력',
              description: 'for 문으로 1, 2, 3, 4, 5를 각각 한 줄씩 출력하세요.',
              difficulty: 'easy',
              hints: ['for (let i = 1; i <= 5; i++)', 'console.log(i)'],
              estimatedMinutes: 3,
              starterCode: '// for 문으로 1부터 5까지 출력하세요\n',
              solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
              testCases: [{ input: '', expectedOutput: '1\n2\n3\n4\n5', description: '1~5 출력' }],
              feedback: { perfect: 'for 문 기본 완벽! 🎯', good: '잘 했어요! i의 시작값과 끝 조건을 확인하세요.', partial: 'for 문 구조는 맞아요! 출력을 확인하세요.', wrong: 'for (let i = 1; i <= 5; i++) { console.log(i); }' }
            },
            {
              id: 'c2',
              title: '구구단 출력',
              description: '7단을 출력하세요. 형식: "7 x 1 = 7", "7 x 2 = 14", ... "7 x 9 = 63"',
              difficulty: 'easy',
              hints: ['for (let i = 1; i <= 9; i++)', '문자열 결합: "7 x " + i + " = " + (7 * i)'],
              estimatedMinutes: 5,
              starterCode: '// 7단을 출력하세요\n',
              solution: 'for (let i = 1; i <= 9; i++) {\n  console.log("7 x " + i + " = " + (7 * i));\n}',
              testCases: [{ input: '', expectedOutput: '7 x 1 = 7', description: '첫 줄 확인' }],
              feedback: { perfect: '구구단 출력 완벽! 🔢', good: '잘 했어요! 출력 형식을 정확히 맞추세요.', partial: '반복은 맞아요! 문자열 결합을 확인하세요.', wrong: 'for (let i = 1; i <= 9; i++) 부터 시작하세요.' }
            },
            {
              id: 'c3',
              title: '합계 구하기',
              description: '1부터 100까지의 합을 구해서 출력하세요.',
              difficulty: 'medium',
              hints: ['let sum = 0으로 시작', 'sum += i 또는 sum = sum + i'],
              estimatedMinutes: 5,
              starterCode: '// 1부터 100까지의 합을 구하세요\nlet sum = 0;\n\n// for 문으로 합계를 구한 후 출력\n',
              solution: 'let sum = 0;\nfor (let i = 1; i <= 100; i++) {\n  sum += i;\n}\nconsole.log("합계: " + sum);',
              testCases: [{ input: '', expectedOutput: '합계: 5050', description: '1~100 합은 5050' }],
              feedback: { perfect: '1부터 100까지의 합 5050! 가우스도 감탄할 거예요! 🧮', good: '합계는 맞아요! 출력 형식을 확인하세요.', partial: '누적 합산: sum += i를 사용하세요.', wrong: 'sum = 0으로 시작하고, for 안에서 sum += i 하세요.' }
            },
            {
              id: 'c4',
              title: '짝수만 출력',
              description: '1부터 20 사이의 짝수만 출력하세요.',
              difficulty: 'medium',
              hints: ['i % 2 === 0이면 짝수', '또는 for (let i = 2; i <= 20; i += 2)'],
              estimatedMinutes: 5,
              starterCode: '// 1~20 중 짝수만 출력하세요\n',
              solution: 'for (let i = 2; i <= 20; i += 2) {\n  console.log(i);\n}',
              testCases: [{ input: '', expectedOutput: '2\n4\n6\n8\n10\n12\n14\n16\n18\n20', description: '짝수 출력' }],
              feedback: { perfect: '짝수 출력 완벽! i += 2로 효율적으로 처리했어요! ✨', good: 'if로 걸러도 맞아요! i += 2가 더 효율적이에요.', partial: '짝수 조건: i % 2 === 0을 사용하세요.', wrong: 'for (let i = 2; i <= 20; i += 2) 또는 if (i % 2 === 0)을 사용하세요.' }
            },
            {
              id: 'c5',
              title: '카운트다운',
              description: '10부터 1까지 역순으로 출력하고, 마지막에 "발사!"를 출력하세요.',
              difficulty: 'hard',
              hints: ['for (let i = 10; i >= 1; i--)', 'i--는 1씩 감소'],
              estimatedMinutes: 7,
              starterCode: '// 10부터 1까지 카운트다운 후 "발사!" 출력\n',
              solution: 'for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}\nconsole.log("발사!");',
              testCases: [{ input: '', expectedOutput: '10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n발사!', description: '카운트다운' }],
              feedback: { perfect: '카운트다운 완벽! 🚀 역순 반복도 마스터했어요!', good: '카운트다운은 맞아요! "발사!"도 출력했나요?', partial: 'i--로 감소하는 것은 맞아요! 조건을 i >= 1로 하세요.', wrong: 'for (let i = 10; i >= 1; i--) 형태로 시작하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m7',
          title: 'while 반복문',
          description: '조건이 참인 동안 계속 반복해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: 'while 반복문',
          conceptExplanation: 'while (조건) { 반복할 코드 } - 언제 끝날지 모를 때, 조건이 참인 동안 계속 반복!',
          cstaStandard: '2-AP-15',
          learningObjectives: ['while 문의 구조를 이해할 수 있다', 'for와 while의 차이를 알 수 있다'],
          realWorldExample: '"체력이 0이 될 때까지 게임 계속" 처럼 언제 끝날지 모르는 반복!',
          hints: ['💡 while (조건) { 코드; 조건변경; }', '💡 조건이 변하지 않으면 무한 루프!'],
          commonMistakes: ['무한 루프 (조건 변경 안 함)', 'off-by-one 에러'],
          challenges: [
            {
              id: 'c1',
              title: '1부터 10까지 (while)',
              description: 'while 문으로 1부터 10까지 출력하세요.',
              difficulty: 'easy',
              hints: ['let i = 1로 시작', 'while (i <= 10) 그리고 i++ 잊지 마세요!'],
              estimatedMinutes: 3,
              starterCode: '// while 문으로 1부터 10까지 출력하세요\nlet i = 1;\n',
              solution: 'let i = 1;\nwhile (i <= 10) {\n  console.log(i);\n  i++;\n}',
              testCases: [{ input: '', expectedOutput: '1\n2\n3\n4\n5\n6\n7\n8\n9\n10', description: '1~10 출력' }],
              feedback: { perfect: 'while 문 기본 완벽! i++ 잊지 않았어요! 🎯', good: '잘 했어요! i++를 반드시 넣어야 무한 루프가 안 돼요.', partial: 'while 구조는 맞아요! i++를 추가하세요.', wrong: 'while (i <= 10) { console.log(i); i++; }' }
            },
            {
              id: 'c2',
              title: '2배씩 증가',
              description: '1부터 시작해서 2배씩 곱하면서 1000 미만까지 출력하세요. (1, 2, 4, 8, 16, ...)',
              difficulty: 'easy',
              hints: ['num *= 2 또는 num = num * 2', 'while (num < 1000)'],
              estimatedMinutes: 4,
              starterCode: '// 1부터 2배씩 증가, 1000 미만까지 출력\nlet num = 1;\n',
              solution: 'let num = 1;\nwhile (num < 1000) {\n  console.log(num);\n  num *= 2;\n}',
              testCases: [{ input: '', expectedOutput: '1\n2\n4\n8\n16\n32\n64\n128\n256\n512', description: '2의 거듭제곱' }],
              feedback: { perfect: '2배 증가 완벽! 512 다음은 1024로 조건을 넘어요! 📈', good: '잘 했어요! *= 2로 간결하게 쓸 수 있어요.', partial: '곱하기 2: num *= 2를 사용하세요.', wrong: 'while (num < 1000) { console.log(num); num *= 2; }' }
            },
            {
              id: 'c3',
              title: '자릿수 세기',
              description: '숫자의 자릿수를 세세요. 예: 12345 → 5자리',
              difficulty: 'medium',
              hints: ['10으로 나누면서 자릿수 카운트', 'while (num > 0) { num = Math.floor(num / 10); }'],
              estimatedMinutes: 7,
              starterCode: 'let num = 12345;\nlet count = 0;\n\n// 자릿수를 세세요\n',
              solution: 'let num = 12345;\nlet count = 0;\nwhile (num > 0) {\n  count++;\n  num = Math.floor(num / 10);\n}\nconsole.log(count + "자리");',
              testCases: [{ input: '', expectedOutput: '5자리', description: '12345는 5자리' }],
              feedback: { perfect: '자릿수 세기 완벽! Math.floor와 나누기를 잘 활용했어요! 🔢', good: '잘 했어요! 0인 경우도 생각해보세요.', partial: 'Math.floor(num / 10)으로 마지막 자리를 제거하세요.', wrong: 'while (num > 0) { count++; num = Math.floor(num/10); }' }
            },
            {
              id: 'c4',
              title: '비밀번호 시도',
              description: '3번의 기회를 주고, 비밀번호가 맞으면 "로그인 성공!", 3번 틀리면 "계정 잠김"을 출력하세요.',
              difficulty: 'medium',
              hints: ['attempts 변수로 시도 횟수 추적', 'while (attempts < 3 && !success)'],
              estimatedMinutes: 8,
              starterCode: 'const correctPassword = "abc123";\nconst attempts_list = ["wrong1", "wrong2", "abc123"];\nlet attempt = 0;\nlet success = false;\n\n// 최대 3번 시도 (attempts_list에서 순서대로)\n',
              solution: 'const correctPassword = "abc123";\nconst attempts_list = ["wrong1", "wrong2", "abc123"];\nlet attempt = 0;\nlet success = false;\nwhile (attempt < 3 && !success) {\n  if (attempts_list[attempt] === correctPassword) {\n    success = true;\n    console.log("로그인 성공!");\n  } else {\n    console.log("틀렸습니다. 남은 기회: " + (2 - attempt) + "번");\n  }\n  attempt++;\n}\nif (!success) {\n  console.log("계정 잠김");\n}',
              testCases: [{ input: '', expectedOutput: '틀렸습니다. 남은 기회: 2번', description: '첫 시도 실패' }],
              feedback: { perfect: '비밀번호 시스템 완벽! 여러 조건을 조합한 while 루프 마스터! 🔐', good: '잘 돼요! 남은 기회 표시도 추가하면 좋아요.', partial: 'while 조건에 attempt < 3과 !success를 &&로 연결하세요.', wrong: 'while (attempt < 3 && !success) 형태로 시작하세요.' }
            },
            {
              id: 'c5',
              title: 'FizzBuzz (1~30)',
              description: '1부터 30까지, 3의 배수면 "Fizz", 5의 배수면 "Buzz", 15의 배수면 "FizzBuzz", 나머지는 숫자 출력.',
              difficulty: 'hard',
              hints: ['15의 배수를 먼저 체크하세요! (3과 5의 공배수)', 'while로도 for로도 풀 수 있어요'],
              estimatedMinutes: 10,
              starterCode: '// FizzBuzz: 1부터 30까지\nlet i = 1;\n',
              solution: 'let i = 1;\nwhile (i <= 30) {\n  if (i % 15 === 0) {\n    console.log("FizzBuzz");\n  } else if (i % 3 === 0) {\n    console.log("Fizz");\n  } else if (i % 5 === 0) {\n    console.log("Buzz");\n  } else {\n    console.log(i);\n  }\n  i++;\n}',
              testCases: [{ input: '', expectedOutput: '1', description: '첫 출력은 1' }],
              feedback: { perfect: 'FizzBuzz 완벽! 프로그래밍 면접 단골 문제를 클리어! 🏆', good: '잘 했어요! 15의 배수를 먼저 체크했나요?', partial: '15의 배수(FizzBuzz)를 먼저 체크해야 해요!', wrong: 'i % 15, i % 3, i % 5 순서로 체크하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m8',
          title: 'break와 continue',
          description: '반복을 중단하거나 건너뛰어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'break/continue',
          conceptExplanation: 'break는 반복문을 즉시 탈출! continue는 현재 회차를 건너뛰고 다음으로!',
          cstaStandard: '2-AP-15',
          learningObjectives: ['break로 반복을 중단할 수 있다', 'continue로 특정 회차를 건너뛸 수 있다'],
          realWorldExample: '"찾는 책을 발견하면 검색 중단(break), 이미 읽은 책은 건너뛰기(continue)"',
          hints: ['💡 break = 반복문 완전 탈출', '💡 continue = 이번 회차만 건너뛰기'],
          commonMistakes: ['break와 continue를 혼동', 'if 문 안에서만 써야 의미 있음'],
          challenges: [
            {
              id: 'c1',
              title: '첫 번째 짝수 찾기',
              description: '배열에서 첫 번째 짝수를 찾으면 출력하고 반복을 멈추세요.',
              difficulty: 'easy',
              hints: ['if 조건에서 break를 사용하세요', 'i % 2 === 0이면 짝수'],
              estimatedMinutes: 3,
              starterCode: 'const nums = [3, 7, 4, 9, 2, 8];\n\n// 첫 번째 짝수를 찾으면 출력하고 멈추세요\nfor (let i = 0; i < nums.length; i++) {\n  // 여기에 코드를 작성하세요\n}',
              solution: 'const nums = [3, 7, 4, 9, 2, 8];\nfor (let i = 0; i < nums.length; i++) {\n  if (nums[i] % 2 === 0) {\n    console.log("첫 번째 짝수: " + nums[i]);\n    break;\n  }\n}',
              testCases: [{ input: '', expectedOutput: '첫 번째 짝수: 4', description: '4가 첫 짝수' }],
              feedback: { perfect: 'break 완벽 사용! 4를 찾자마자 멈췄어요! 🎯', good: '찾긴 했어요! break로 바로 멈추면 효율적이에요.', partial: '짝수 조건은 맞아요! break를 추가하세요.', wrong: 'if (nums[i] % 2 === 0) { ... break; }' }
            },
            {
              id: 'c2',
              title: '홀수만 출력 (continue)',
              description: '1부터 10까지 중 홀수만 출력하세요. 짝수는 continue로 건너뛰세요.',
              difficulty: 'easy',
              hints: ['짝수일 때 continue', 'if (i % 2 === 0) continue;'],
              estimatedMinutes: 3,
              starterCode: '// 1~10 중 홀수만 출력 (continue 사용)\nfor (let i = 1; i <= 10; i++) {\n  // 짝수면 건너뛰세요\n  \n  console.log(i);\n}',
              solution: 'for (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);\n}',
              testCases: [{ input: '', expectedOutput: '1\n3\n5\n7\n9', description: '홀수만' }],
              feedback: { perfect: 'continue 완벽! 짝수를 깔끔하게 건너뛰었어요! ✨', good: '결과는 맞아요! continue를 사용하면 코드가 더 읽기 좋아요.', partial: 'continue는 현재 회차만 건너뛰어요.', wrong: 'if (i % 2 === 0) continue; 를 console.log 전에 넣으세요.' }
            },
            {
              id: 'c3',
              title: '목표 합계 도달',
              description: '1부터 더해가면서 합이 100을 넘으면 멈추고, 그때의 숫자와 합계를 출력하세요.',
              difficulty: 'medium',
              hints: ['sum += i로 누적', 'if (sum > 100) break'],
              estimatedMinutes: 5,
              starterCode: 'let sum = 0;\n\n// 합이 100을 넘는 순간 멈추세요\nfor (let i = 1; i <= 100; i++) {\n  // 여기에 코드 작성\n}',
              solution: 'let sum = 0;\nfor (let i = 1; i <= 100; i++) {\n  sum += i;\n  if (sum > 100) {\n    console.log("숫자: " + i + ", 합계: " + sum);\n    break;\n  }\n}',
              testCases: [{ input: '', expectedOutput: '숫자: 14, 합계: 105', description: '14까지 더하면 105' }],
              feedback: { perfect: '14번째에서 105로 100 초과! break 타이밍 완벽! 🧮', good: '합계는 맞아요! 출력 형식을 확인하세요.', partial: 'sum += i 후에 if로 체크하세요.', wrong: 'sum += i; 후에 if (sum > 100) break;' }
            },
            {
              id: 'c4',
              title: '3의 배수 건너뛰기',
              description: '1부터 20까지 출력하되, 3의 배수는 건너뛰세요.',
              difficulty: 'medium',
              hints: ['i % 3 === 0이면 continue', '3, 6, 9, 12, 15, 18을 건너뜁니다'],
              estimatedMinutes: 5,
              starterCode: '// 1~20 출력 (3의 배수 제외)\nfor (let i = 1; i <= 20; i++) {\n  // 3의 배수면 건너뛰세요\n  \n  console.log(i);\n}',
              solution: 'for (let i = 1; i <= 20; i++) {\n  if (i % 3 === 0) continue;\n  console.log(i);\n}',
              testCases: [{ input: '', expectedOutput: '1\n2\n4\n5\n7', description: '3,6을 건너뜀' }],
              feedback: { perfect: '3의 배수 제외 완벽! continue 활용이 깔끔해요! 🎯', good: '결과는 맞아요! continue로 더 간결하게 만들 수 있어요.', partial: 'i % 3 === 0 조건에서 continue를 사용하세요.', wrong: 'if (i % 3 === 0) continue; 를 추가하세요.' }
            },
            {
              id: 'c5',
              title: '소수 판별기',
              description: '주어진 숫자가 소수인지 판별하세요. 2부터 나눠보다가 나눠지면 break!',
              difficulty: 'hard',
              hints: ['2부터 num-1까지 나눠보세요', '나눠지면 소수가 아님! break 하세요'],
              estimatedMinutes: 10,
              starterCode: 'const num = 17;\nlet isPrime = true;\n\n// num이 소수인지 판별하세요\n',
              solution: 'const num = 17;\nlet isPrime = true;\nfor (let i = 2; i < num; i++) {\n  if (num % i === 0) {\n    isPrime = false;\n    break;\n  }\n}\nif (num < 2) isPrime = false;\nif (isPrime) {\n  console.log(num + "은(는) 소수입니다!");\n} else {\n  console.log(num + "은(는) 소수가 아닙니다.");\n}',
              testCases: [{ input: '', expectedOutput: '17은(는) 소수입니다!', description: '17은 소수' }],
              feedback: { perfect: '소수 판별 완벽! break로 불필요한 반복을 줄였어요! 🔢', good: '판별은 맞아요! break로 효율성을 높이세요.', partial: 'isPrime 플래그를 사용하세요.', wrong: 'for (let i = 2; i < num; i++) 에서 num % i === 0이면 소수가 아니에요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m9',
          title: '중첩 반복과 패턴',
          description: '반복문 안에 반복문으로 2D 패턴을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 40,
          estimatedMinutes: 30,
          concept: '중첩 반복문',
          conceptExplanation: 'for 안에 for! 바깥 루프가 한 번 돌 때 안쪽 루프가 전부 돌아요. 표, 패턴, 2D 게임에 필수!',
          cstaStandard: '2-AP-15',
          learningObjectives: ['중첩 반복문의 동작 원리를 이해할 수 있다', '별 패턴을 출력할 수 있다'],
          realWorldExample: '"체스판(8x8)의 모든 칸을 색칠하는 것" 처럼 행과 열을 모두 순회!',
          hints: ['💡 바깥 for = 행(row), 안쪽 for = 열(col)', '💡 줄바꿈은 바깥 루프에서'],
          commonMistakes: ['안쪽 루프 변수와 바깥 루프 변수 혼동', '줄바꿈 타이밍 실수'],
          challenges: [
            {
              id: 'c1',
              title: '사각형 별 패턴',
              description: '5x5 별(*) 사각형을 출력하세요.',
              difficulty: 'easy',
              hints: ['바깥 for로 행 5번', '안쪽에서 문자열에 *를 5번 추가'],
              estimatedMinutes: 5,
              starterCode: '// 5x5 별 사각형 출력\n// *****\n// *****\n// *****\n// *****\n// *****\n',
              solution: 'for (let i = 0; i < 5; i++) {\n  let row = "";\n  for (let j = 0; j < 5; j++) {\n    row += "*";\n  }\n  console.log(row);\n}',
              testCases: [{ input: '', expectedOutput: '*****\n*****\n*****\n*****\n*****', description: '5x5 사각형' }],
              feedback: { perfect: '5x5 사각형 완벽! 중첩 반복의 기본을 마스터했어요! ⭐', good: '잘 했어요! 한 줄씩 문자열을 만들어서 출력하세요.', partial: '바깥 for와 안쪽 for의 역할을 구분하세요.', wrong: '바깥 for(행) 안에 안쪽 for(열)를 넣으세요.' }
            },
            {
              id: 'c2',
              title: '직각 삼각형',
              description: '줄마다 별이 1개씩 늘어나는 직각 삼각형을 5줄로 출력하세요.',
              difficulty: 'easy',
              hints: ['i번째 줄에 i개의 별', '안쪽 for의 조건을 j <= i로'],
              estimatedMinutes: 5,
              starterCode: '// 직각 삼각형\n// *\n// **\n// ***\n// ****\n// *****\n',
              solution: 'for (let i = 1; i <= 5; i++) {\n  let row = "";\n  for (let j = 0; j < i; j++) {\n    row += "*";\n  }\n  console.log(row);\n}',
              testCases: [{ input: '', expectedOutput: '*\n**\n***\n****\n*****', description: '직각 삼각형' }],
              feedback: { perfect: '직각 삼각형 완벽! 안쪽 루프 조건을 바깥 변수로 제어했어요! 🔺', good: '패턴은 맞아요! j < i 조건이 핵심이에요.', partial: '안쪽 for의 조건을 바깥 변수 i로 설정하세요.', wrong: '안쪽 for: for (let j = 0; j < i; j++)' }
            },
            {
              id: 'c3',
              title: '구구단 전체',
              description: '2단부터 9단까지 구구단을 전부 출력하세요. 각 단 사이에 빈 줄을 넣으세요.',
              difficulty: 'medium',
              hints: ['바깥 for: 단 (2~9)', '안쪽 for: 곱하는 수 (1~9)'],
              estimatedMinutes: 8,
              starterCode: '// 구구단 전체 출력 (2단~9단)\n',
              solution: 'for (let dan = 2; dan <= 9; dan++) {\n  console.log("--- " + dan + "단 ---");\n  for (let i = 1; i <= 9; i++) {\n    console.log(dan + " x " + i + " = " + (dan * i));\n  }\n  console.log("");\n}',
              testCases: [{ input: '', expectedOutput: '--- 2단 ---', description: '첫 줄 확인' }],
              feedback: { perfect: '구구단 전체 출력 완벽! 중첩 반복의 실전 활용! 🔢', good: '구구단은 잘 나와요! 빈 줄 구분도 추가해보세요.', partial: '바깥 for는 단, 안쪽 for는 곱하는 수입니다.', wrong: 'for (let dan = 2; dan <= 9; dan++) 안에 for (let i = 1; i <= 9; i++)' }
            },
            {
              id: 'c4',
              title: '역삼각형',
              description: '별이 줄마다 1개씩 줄어드는 역삼각형 5줄을 출력하세요.',
              difficulty: 'medium',
              hints: ['첫 줄에 5개, 마지막 줄에 1개', 'j < (6 - i) 또는 j <= (5 - i + 1)'],
              estimatedMinutes: 7,
              starterCode: '// 역삼각형\n// *****\n// ****\n// ***\n// **\n// *\n',
              solution: 'for (let i = 5; i >= 1; i--) {\n  let row = "";\n  for (let j = 0; j < i; j++) {\n    row += "*";\n  }\n  console.log(row);\n}',
              testCases: [{ input: '', expectedOutput: '*****\n****\n***\n**\n*', description: '역삼각형' }],
              feedback: { perfect: '역삼각형 완벽! i를 감소시키는 아이디어가 훌륭해요! 🔻', good: '패턴은 맞아요! i--를 사용하면 더 깔끔해요.', partial: '바깥 루프를 5부터 1까지 감소시켜보세요.', wrong: 'for (let i = 5; i >= 1; i--) 형태로 시작하세요.' }
            },
            {
              id: 'c5',
              title: '다이아몬드 패턴',
              description: '높이 7의 다이아몬드(◆) 패턴을 출력하세요. 공백과 별을 조합하세요.',
              difficulty: 'hard',
              hints: ['위쪽 삼각형 + 아래쪽 역삼각형', '각 줄의 공백 수를 계산하세요', 'repeat() 메서드를 활용해도 돼요'],
              estimatedMinutes: 12,
              starterCode: '// 다이아몬드 패턴 (높이 7)\n//    *\n//   ***\n//  *****\n// *******\n//  *****\n//   ***\n//    *\nconst size = 4; // 중앙까지의 크기\n',
              solution: 'const size = 4;\n// 위쪽 삼각형\nfor (let i = 1; i <= size; i++) {\n  let spaces = "";\n  let stars = "";\n  for (let j = 0; j < size - i; j++) spaces += " ";\n  for (let j = 0; j < 2 * i - 1; j++) stars += "*";\n  console.log(spaces + stars);\n}\n// 아래쪽 역삼각형\nfor (let i = size - 1; i >= 1; i--) {\n  let spaces = "";\n  let stars = "";\n  for (let j = 0; j < size - i; j++) spaces += " ";\n  for (let j = 0; j < 2 * i - 1; j++) stars += "*";\n  console.log(spaces + stars);\n}',
              testCases: [{ input: '', expectedOutput: '   *', description: '첫 줄' }],
              feedback: { perfect: '다이아몬드 패턴 완벽! 공백과 별의 수학적 관계를 완전히 이해했어요! 💎', good: '형태는 나와요! 공백 수를 정밀하게 조절해보세요.', partial: '위쪽 삼각형부터 먼저 만들어보세요.', wrong: '공백 = size-i개, 별 = 2*i-1개 규칙을 기억하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m10',
          title: '주간 프로젝트: 숫자 맞추기 게임',
          description: '이번 주 배운 모든 것을 활용한 게임을 만들어요!',
          type: 'project',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 50,
          estimatedMinutes: 35,
          concept: '조건문+반복문 통합',
          conceptExplanation: 'if, else if, switch, for, while, break를 모두 활용하는 종합 프로젝트!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['조건문과 반복문을 조합할 수 있다', '게임 로직을 설계할 수 있다', '사용자 피드백 시스템을 구현할 수 있다'],
          realWorldExample: '실제 게임도 조건문(점수 체크)과 반복문(게임 루프)의 조합이에요!',
          hints: ['💡 while로 게임 루프 만들기', '💡 if-else로 높다/낮다 힌트 주기'],
          commonMistakes: ['무한 루프 조심!', 'break로 게임 종료 잊지 마세요'],
          challenges: [
            {
              id: 'c1',
              title: '랜덤 숫자 생성',
              description: '1~100 사이 랜덤 숫자를 만드세요.',
              difficulty: 'easy',
              hints: ['Math.random()은 0~1 사이 소수', 'Math.floor()로 정수로 만드세요'],
              estimatedMinutes: 3,
              starterCode: '// 1~100 사이 랜덤 숫자 만들기\nconst answer = // TODO: 랜덤 숫자 생성\nconsole.log("정답: " + answer);\n',
              solution: 'const answer = Math.floor(Math.random() * 100) + 1;\nconsole.log("정답: " + answer);',
              testCases: [{ input: '', expectedOutput: '정답:', description: '숫자가 출력됨' }],
              feedback: { perfect: '랜덤 숫자 생성 완벽! Math.random()과 Math.floor() 조합 마스터! 🎲', good: '잘 했어요! +1을 해야 1~100 범위가 돼요.', partial: 'Math.floor(Math.random() * 100) + 1 형태입니다.', wrong: 'Math.floor(Math.random() * 100) + 1로 1~100 랜덤 생성!' }
            },
            {
              id: 'c2',
              title: '높다/낮다 힌트',
              description: '사용자 추측(guess)과 정답(answer)을 비교해서 "더 높아요!", "더 낮아요!", 또는 "정답!"을 출력하세요.',
              difficulty: 'easy',
              hints: ['if-else if-else 사용', '세 가지 경우: 낮다, 높다, 같다'],
              estimatedMinutes: 4,
              starterCode: 'const answer = 42;\nconst guess = 30;\n\n// guess와 answer를 비교해서 힌트를 출력하세요\n',
              solution: 'const answer = 42;\nconst guess = 30;\nif (guess < answer) {\n  console.log("더 높아요!");\n} else if (guess > answer) {\n  console.log("더 낮아요!");\n} else {\n  console.log("정답!");\n}',
              testCases: [{ input: '', expectedOutput: '더 높아요!', description: '30 < 42이므로 더 높아요' }],
              feedback: { perfect: '힌트 시스템 완벽! 세 가지 경우를 정확히 구분했어요! 🎯', good: '비교는 맞아요! 메시지를 정확히 출력하세요.', partial: 'if-else if-else로 세 가지 경우를 처리하세요.', wrong: 'if (guess < answer) → "더 높아요!", guess > answer → "더 낮아요!", 같으면 → "정답!"' }
            },
            {
              id: 'c3',
              title: '시도 횟수 제한 게임',
              description: '최대 7번 안에 정답을 맞추는 게임을 만드세요. 미리 정해진 추측 목록을 사용합니다.',
              difficulty: 'medium',
              hints: ['while (attempts < 7 && !found)', 'attempts를 매번 증가시키세요'],
              estimatedMinutes: 8,
              starterCode: 'const answer = 42;\nconst guesses = [50, 25, 37, 44, 40, 42];\nlet attempts = 0;\nlet found = false;\n\n// while 루프로 게임을 진행하세요\n// 각 추측마다 "n번째 시도: X → 더 높아요/낮아요/정답!" 형태로 출력\n',
              solution: 'const answer = 42;\nconst guesses = [50, 25, 37, 44, 40, 42];\nlet attempts = 0;\nlet found = false;\nwhile (attempts < guesses.length && attempts < 7 && !found) {\n  const guess = guesses[attempts];\n  attempts++;\n  if (guess < answer) {\n    console.log(attempts + "번째 시도: " + guess + " → 더 높아요!");\n  } else if (guess > answer) {\n    console.log(attempts + "번째 시도: " + guess + " → 더 낮아요!");\n  } else {\n    console.log(attempts + "번째 시도: " + guess + " → 정답! 🎉");\n    found = true;\n  }\n}\nif (!found) {\n  console.log("게임 오버! 정답은 " + answer);\n}',
              testCases: [{ input: '', expectedOutput: '1번째 시도: 50 → 더 낮아요!', description: '첫 시도' }],
              feedback: { perfect: '게임 루프 완벽! while + if-else + break 조합 마스터! 🏆', good: '게임은 잘 돌아가요! 시도 횟수도 표시하면 좋겠어요.', partial: 'while 조건에 attempts < 7과 !found를 &&로 연결하세요.', wrong: 'while 루프 안에서 guesses[attempts]를 가져와서 비교하세요.' }
            },
            {
              id: 'c4',
              title: '난이도 선택 시스템',
              description: 'switch로 난이도를 선택하면 범위와 시도 횟수가 달라지는 시스템을 만드세요.',
              difficulty: 'medium',
              hints: ['switch (difficulty)', 'easy: 1~10/5회, medium: 1~50/7회, hard: 1~100/10회'],
              estimatedMinutes: 8,
              starterCode: 'const difficulty = "medium";\nlet maxNum, maxAttempts;\n\n// switch로 난이도별 설정\n// easy: 1~10, 5번\n// medium: 1~50, 7번\n// hard: 1~100, 10번\n\nconsole.log("범위: 1~" + maxNum + ", 시도: " + maxAttempts + "번");\n',
              solution: 'const difficulty = "medium";\nlet maxNum, maxAttempts;\nswitch (difficulty) {\n  case "easy":\n    maxNum = 10; maxAttempts = 5;\n    console.log("쉬움 모드!");\n    break;\n  case "medium":\n    maxNum = 50; maxAttempts = 7;\n    console.log("보통 모드!");\n    break;\n  case "hard":\n    maxNum = 100; maxAttempts = 10;\n    console.log("어려움 모드!");\n    break;\n  default:\n    maxNum = 50; maxAttempts = 7;\n    console.log("기본 모드!");\n}\nconsole.log("범위: 1~" + maxNum + ", 시도: " + maxAttempts + "번");',
              testCases: [{ input: '', expectedOutput: '보통 모드!', description: 'medium 선택' }],
              feedback: { perfect: '난이도 시스템 완벽! switch로 깔끔하게 설정했어요! 🎮', good: '잘 돼요! default도 처리하면 안전해요.', partial: 'switch (difficulty) { case "easy": ... } 형태입니다.', wrong: 'switch (difficulty) 로 시작하세요.' }
            },
            {
              id: 'c5',
              title: '전체 게임 완성',
              description: '모든 기능을 통합한 완전한 숫자 맞추기 게임을 만드세요: 랜덤 생성, 힌트, 시도 제한, 점수 계산.',
              difficulty: 'hard',
              hints: ['빨리 맞출수록 높은 점수', '시도 횟수로 점수 계산: 100 - (attempts - 1) * 15'],
              estimatedMinutes: 15,
              starterCode: '// 숫자 맞추기 게임 완성!\n// 1. 1~50 랜덤 숫자 생성\n// 2. 미리 정한 추측 목록으로 플레이\n// 3. 높다/낮다 힌트\n// 4. 최대 7번 시도\n// 5. 점수 계산: 100 - (시도횟수-1) * 15\n\nconst answer = 23;\nconst guesses = [25, 15, 20, 23];\n',
              solution: 'const answer = 23;\nconst guesses = [25, 15, 20, 23];\nlet attempts = 0;\nlet found = false;\nconst maxAttempts = 7;\n\nconsole.log("=== 숫자 맞추기 게임 ===");\nconsole.log("1~50 사이의 숫자를 맞춰보세요! (최대 " + maxAttempts + "번)");\nconsole.log("");\n\nwhile (attempts < guesses.length && attempts < maxAttempts && !found) {\n  const guess = guesses[attempts];\n  attempts++;\n  \n  if (guess < answer) {\n    console.log(attempts + "번째 시도: " + guess + " → 더 높아요! ⬆️");\n  } else if (guess > answer) {\n    console.log(attempts + "번째 시도: " + guess + " → 더 낮아요! ⬇️");\n  } else {\n    console.log(attempts + "번째 시도: " + guess + " → 정답! 🎉");\n    found = true;\n  }\n}\n\nconsole.log("");\nif (found) {\n  const score = 100 - (attempts - 1) * 15;\n  console.log("축하합니다! " + attempts + "번 만에 맞췄어요!");\n  console.log("점수: " + score + "점");\n  if (score >= 85) console.log("등급: S 🏆");\n  else if (score >= 70) console.log("등급: A ⭐");\n  else if (score >= 55) console.log("등급: B 👍");\n  else console.log("등급: C 💪");\n} else {\n  console.log("게임 오버! 정답은 " + answer + "이었어요.");\n  console.log("점수: 0점");\n}',
              testCases: [{ input: '', expectedOutput: '=== 숫자 맞추기 게임 ===', description: '게임 시작' }],
              feedback: { perfect: '숫자 맞추기 게임 완벽 완성! 조건문+반복문의 모든 것을 마스터했어요! 🏆🎮🎉', good: '게임이 잘 돌아가요! 점수와 등급 시스템도 추가하면 완벽해요.', partial: '기본 게임 루프는 잘 만들었어요! 점수 계산도 추가해보세요.', wrong: 'while 루프 안에서 추측-비교-힌트 순서로 진행하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 41~44는 구조만 표시
    {
      id: 'week-41',
      number: 41,
      title: '함수',
      description: '코드를 재사용 가능한 블록으로 만들어요',
      missions: [
        {
          id: 'w41-m1',
          title: '함수 선언하기',
          description: 'function 키워드로 재사용 가능한 코드 블록을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 25,
          concept: '함수 선언',
          conceptExplanation: '함수는 특정 작업을 수행하는 코드 묶음이에요. Python의 def와 같은 역할로, JavaScript에서는 function 키워드를 사용해요. 한 번 만들면 여러 번 호출하여 재사용할 수 있어요.',
          cstaStandard: '2-AP-14',
          learningObjectives: ['function 키워드로 함수를 선언할 수 있다', '함수를 호출하여 실행할 수 있다', 'Python의 def와 비교하여 이해할 수 있다'],
          realWorldExample: '게임에서 "공격하기" 버튼을 누를 때마다 같은 공격 함수가 실행돼요!',
          starterCode: '// "안녕하세요!"를 출력하는 함수 greet를 만드세요\n\n// Python: def greet():\n//           print("안녕하세요!")\n\n// JavaScript:\nfunction greet() {\n  // 여기에 코드 작성\n}\n\n// 함수 호출\ngreet();\n',
          solution: 'function greet() {\n  console.log("안녕하세요!");\n}\n\ngreet();',
          hints: ['function 함수이름() { 코드 }', 'Python의 def와 같아요!', '함수를 만든 후 함수이름()으로 호출'],
          testCases: [{ input: '', expectedOutput: '안녕하세요!', description: '함수 호출 결과' }],
          challenges: [
            { id: 'c1', title: '기본 함수 만들기', description: '"반갑습니다!"를 출력하는 함수 sayHi를 만들고 호출하세요.', difficulty: 'easy', hints: ['function sayHi() { console.log("반갑습니다!"); }'], estimatedMinutes: 3, starterCode: '// sayHi 함수 만들기\n\n// 호출하기\n', solution: 'function sayHi() {\n  console.log("반갑습니다!");\n}\nsayHi();', testCases: [{ input: '', expectedOutput: '반갑습니다!', description: '함수 호출' }], feedback: { perfect: '함수 선언과 호출 완벽!', good: '잘했어요!', partial: '함수를 호출했나요?', wrong: 'function 함수이름() { } 형태를 사용하세요.' } },
            { id: 'c2', title: '함수 3번 호출', description: '"코딩 파이팅!"을 출력하는 함수를 만들고 3번 호출하세요.', difficulty: 'easy', hints: ['같은 함수를 여러 번 호출할 수 있어요'], estimatedMinutes: 3, starterCode: '// cheer 함수 만들기\n\n// 3번 호출\n', solution: 'function cheer() {\n  console.log("코딩 파이팅!");\n}\ncheer();\ncheer();\ncheer();', testCases: [{ input: '', expectedOutput: '코딩 파이팅!\n코딩 파이팅!\n코딩 파이팅!', description: '3번 출력' }], feedback: { perfect: '함수 재사용의 힘을 알았어요!', good: '잘했어요!', partial: '3번 호출하세요.', wrong: '함수이름()을 3번 적으세요.' } },
            { id: 'c3', title: 'Python def를 JS function으로', description: 'Python 함수 def calculate(): print(10 + 20)을 JavaScript로 변환하세요.', difficulty: 'easy', hints: ['def -> function', 'print -> console.log'], estimatedMinutes: 4, starterCode: '// Python: def calculate():\n//           print(10 + 20)\n// JavaScript로 변환:\n', solution: 'function calculate() {\n  console.log(10 + 20);\n}\ncalculate();', testCases: [{ input: '', expectedOutput: '30', description: 'Python->JS 변환' }], feedback: { perfect: 'Python->JS 변환 완벽!', good: '잘 변환했어요!', partial: 'function 키워드를 사용하세요.', wrong: 'def를 function으로, print를 console.log로 바꾸세요.' } },
            { id: 'c4', title: '구구단 출력 함수', description: '7단을 출력하는 함수 printTimesTable을 만드세요. (7x1=7 부터 7x9=63)', difficulty: 'medium', hints: ['for문을 함수 안에 넣으세요', 'for (let i = 1; i <= 9; i++)'], estimatedMinutes: 7, starterCode: '// 7단 출력 함수\nfunction printTimesTable() {\n  // for문으로 7x1부터 7x9까지 출력\n}\nprintTimesTable();\n', solution: 'function printTimesTable() {\n  for (let i = 1; i <= 9; i++) {\n    console.log(`7 x ${i} = ${7 * i}`);\n  }\n}\nprintTimesTable();', feedback: { perfect: '구구단 함수 완벽!', good: '잘 만들었어요!', partial: 'for문을 사용하세요.', wrong: 'for (let i = 1; i <= 9; i++) 반복문을 사용하세요.' } },
            { id: 'c5', title: '자기소개 함수', description: '이름, 나이, 취미를 한 줄씩 출력하는 함수 introduce를 만드세요.', difficulty: 'medium', hints: ['함수 안에 console.log를 3번 사용', '변수와 템플릿 리터럴 활용'], estimatedMinutes: 7, starterCode: '// 자기소개 함수\nfunction introduce() {\n  // 이름, 나이, 취미 출력\n}\nintroduce();\n', solution: 'function introduce() {\n  console.log("이름: 홍길동");\n  console.log("나이: 15");\n  console.log("취미: 코딩");\n}\nintroduce();', feedback: { perfect: '자기소개 함수 완벽!', good: '잘 만들었어요!', partial: '3가지 정보를 모두 출력하세요.', wrong: '함수 안에 console.log를 3번 넣으세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m2',
          title: '매개변수와 인자',
          description: '함수에 값을 전달하여 유연하게 사용해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 25,
          concept: '매개변수',
          conceptExplanation: '매개변수(parameter)는 함수에 전달하는 값이에요. Python과 동일하게 함수 이름 옆 괄호 안에 적어요. 함수를 호출할 때 넣는 실제 값을 인자(argument)라고 해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: ['함수에 매개변수를 정의할 수 있다', '인자를 전달하여 함수를 호출할 수 있다', '여러 매개변수를 사용할 수 있다'],
          realWorldExample: '게임에서 attack(적이름, 공격력) 함수처럼 상황에 따라 다른 값을 전달해요!',
          starterCode: '// name을 매개변수로 받아서 인사하는 함수\nfunction greet(name) {\n  console.log(`안녕하세요, ${name}님!`);\n}\n\ngreet("홍길동");\ngreet("김철수");\n',
          solution: 'function greet(name) {\n  console.log(`안녕하세요, ${name}님!`);\n}\ngreet("홍길동");\ngreet("김철수");',
          hints: ['function 함수이름(매개변수) { }', '매개변수는 함수 안에서 변수처럼 사용', '여러 매개변수: function add(a, b) { }'],
          testCases: [{ input: '', expectedOutput: '안녕하세요, 홍길동님!\n안녕하세요, 김철수님!', description: '매개변수로 인사' }],
          challenges: [
            { id: 'c1', title: '이름으로 인사하기', description: 'greetUser(name) 함수를 만들어 "환영합니다, [이름]님!"을 출력하세요.', difficulty: 'easy', hints: ['템플릿 리터럴 사용: `환영합니다, ${name}님!`'], estimatedMinutes: 3, starterCode: 'function greetUser(name) {\n  // 여기에 코드\n}\ngreetUser("민수");\n', solution: 'function greetUser(name) {\n  console.log(`환영합니다, ${name}님!`);\n}\ngreetUser("민수");', testCases: [{ input: '', expectedOutput: '환영합니다, 민수님!', description: '인사 함수' }], feedback: { perfect: '매개변수 활용 완벽!', good: '잘했어요!', partial: '매개변수 name을 사용하세요.', wrong: 'console.log(`환영합니다, ${name}님!`)을 사용하세요.' } },
            { id: 'c2', title: '두 수 더하기 함수', description: 'add(a, b) 함수를 만들어 두 수의 합을 출력하세요.', difficulty: 'easy', hints: ['매개변수를 2개 사용: function add(a, b)'], estimatedMinutes: 3, starterCode: 'function add(a, b) {\n  // a + b 출력\n}\nadd(3, 5);\nadd(10, 20);\n', solution: 'function add(a, b) {\n  console.log(a + b);\n}\nadd(3, 5);\nadd(10, 20);', testCases: [{ input: '', expectedOutput: '8\n30', description: '덧셈 함수' }], feedback: { perfect: '두 매개변수 사용 완벽!', good: '잘했어요!', partial: 'a + b를 출력하세요.', wrong: 'console.log(a + b)를 사용하세요.' } },
            { id: 'c3', title: '자기소개 함수 (매개변수)', description: 'introduce(name, age, hobby) 함수를 만드세요.', difficulty: 'medium', hints: ['매개변수 3개를 받는 함수', '템플릿 리터럴로 출력'], estimatedMinutes: 5, starterCode: 'function introduce(name, age, hobby) {\n  // "저는 [이름]이고, [나이]살이며, [취미]를 좋아합니다." 출력\n}\nintroduce("홍길동", 15, "코딩");\n', solution: 'function introduce(name, age, hobby) {\n  console.log(`저는 ${name}이고, ${age}살이며, ${hobby}를 좋아합니다.`);\n}\nintroduce("홍길동", 15, "코딩");', testCases: [{ input: '', expectedOutput: '저는 홍길동이고, 15살이며, 코딩을 좋아합니다.', description: '자기소개' }], feedback: { perfect: '여러 매개변수 활용 완벽!', good: '잘 만들었어요!', partial: '3개 매개변수를 모두 사용하세요.', wrong: '${name}, ${age}, ${hobby}를 템플릿 리터럴에 넣으세요.' } },
            { id: 'c4', title: '할인 계산기', description: 'calcDiscount(price, percent) 함수를 만들어 할인 후 가격을 출력하세요.', difficulty: 'medium', hints: ['할인후 = price - price * percent / 100', '또는 price * (1 - percent/100)'], estimatedMinutes: 6, starterCode: 'function calcDiscount(price, percent) {\n  // 할인 후 가격 계산 및 출력\n}\ncalcDiscount(10000, 20); // 8000\ncalcDiscount(50000, 10); // 45000\n', solution: 'function calcDiscount(price, percent) {\n  const discounted = price - price * percent / 100;\n  console.log(`${price}원의 ${percent}% 할인 = ${discounted}원`);\n}\ncalcDiscount(10000, 20);\ncalcDiscount(50000, 10);', feedback: { perfect: '할인 계산기 완벽!', good: '잘 계산했어요!', partial: '할인 공식을 확인하세요.', wrong: 'price * percent / 100을 빼세요.' } },
            { id: 'c5', title: 'BMI 계산기', description: 'calcBMI(weight, height) 함수를 만드세요. BMI = 체중(kg) / 키(m)의 제곱. 키는 cm로 받아요.', difficulty: 'hard', hints: ['키를 m로 변환: height / 100', 'BMI = weight / (heightM * heightM)', 'toFixed(1)로 소수점 1자리'], estimatedMinutes: 10, starterCode: 'function calcBMI(weight, height) {\n  // height를 m로 변환\n  // BMI 계산\n  // 결과 출력\n}\ncalcBMI(70, 175);\n', solution: 'function calcBMI(weight, height) {\n  const heightM = height / 100;\n  const bmi = weight / (heightM * heightM);\n  console.log(`BMI: ${bmi.toFixed(1)}`);\n}\ncalcBMI(70, 175);', testCases: [{ input: '', expectedOutput: 'BMI: 22.9', description: 'BMI 계산' }], feedback: { perfect: 'BMI 계산기 완벽!', good: '잘 만들었어요!', partial: 'cm를 m로 변환하세요.', wrong: 'height/100으로 m 변환 후 제곱으로 나누세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m3',
          title: 'return으로 값 돌려주기',
          description: '함수가 결과 값을 반환하도록 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 25,
          concept: 'return',
          conceptExplanation: 'return은 함수의 실행 결과를 돌려줘요. Python과 동일하게 return 값; 형태로 사용해요. return이 없으면 undefined가 반환돼요.',
          cstaStandard: '2-AP-14',
          learningObjectives: ['return으로 값을 반환할 수 있다', '반환값을 변수에 저장할 수 있다', '반환값을 다른 연산에 사용할 수 있다'],
          realWorldExample: '계산기 앱에서 계산 함수는 결과를 return하고, 화면 표시 함수가 그 값을 받아 보여줘요!',
          starterCode: '// 두 수의 합을 반환하는 함수\nfunction add(a, b) {\n  return a + b;\n}\n\nconst result = add(3, 5);\nconsole.log(result); // 8\n',
          solution: 'function add(a, b) {\n  return a + b;\n}\nconst result = add(3, 5);\nconsole.log(result);',
          hints: ['return 값; 으로 결과 반환', '반환된 값은 변수에 저장 가능', 'console.log vs return: 출력과 반환은 다른 것!'],
          testCases: [{ input: '', expectedOutput: '8', description: 'return 값 확인' }],
          challenges: [
            { id: 'c1', title: '곱셈 함수', description: 'multiply(a, b) 함수를 만들어 a * b를 return하세요.', difficulty: 'easy', hints: ['return a * b;'], estimatedMinutes: 3, starterCode: 'function multiply(a, b) {\n  // a * b를 반환\n}\nconsole.log(multiply(4, 5));\n', solution: 'function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(4, 5));', testCases: [{ input: '', expectedOutput: '20', description: '곱셈 반환' }], feedback: { perfect: 'return 사용 완벽!', good: '잘했어요!', partial: 'return을 사용하세요.', wrong: 'return a * b;를 추가하세요.' } },
            { id: 'c2', title: '최댓값 찾기', description: 'getMax(a, b) 함수를 만들어 더 큰 값을 return하세요.', difficulty: 'easy', hints: ['if (a > b) return a; else return b;', '또는 삼항연산자: return a > b ? a : b;'], estimatedMinutes: 4, starterCode: 'function getMax(a, b) {\n  // 더 큰 값 반환\n}\nconsole.log(getMax(10, 20));\nconsole.log(getMax(50, 30));\n', solution: 'function getMax(a, b) {\n  if (a > b) return a;\n  return b;\n}\nconsole.log(getMax(10, 20));\nconsole.log(getMax(50, 30));', testCases: [{ input: '', expectedOutput: '20\n50', description: '최댓값' }], feedback: { perfect: '조건부 return 완벽!', good: '잘했어요!', partial: 'if문으로 비교하세요.', wrong: 'if (a > b) return a; else return b;' } },
            { id: 'c3', title: '원의 넓이 계산', description: 'circleArea(radius) 함수를 만들어 원의 넓이(PI * r * r)를 반환하세요.', difficulty: 'medium', hints: ['Math.PI를 사용하세요', 'return Math.PI * radius * radius;'], estimatedMinutes: 5, starterCode: 'function circleArea(radius) {\n  // 원의 넓이 반환 (PI * r * r)\n}\nconsole.log(circleArea(5).toFixed(2));\n', solution: 'function circleArea(radius) {\n  return Math.PI * radius * radius;\n}\nconsole.log(circleArea(5).toFixed(2));', testCases: [{ input: '', expectedOutput: '78.54', description: '원의 넓이' }], feedback: { perfect: 'Math.PI 활용 완벽!', good: '잘 계산했어요!', partial: 'Math.PI를 사용하세요.', wrong: 'return Math.PI * radius * radius;' } },
            { id: 'c4', title: '성적 등급 반환', description: 'getGrade(score) 함수를 만들어 등급 문자열("A","B","C","D","F")을 return하세요.', difficulty: 'medium', hints: ['if/else if/else로 등급 결정', 'return "A"; 형태로 문자열 반환'], estimatedMinutes: 7, starterCode: 'function getGrade(score) {\n  // 90이상:A, 80이상:B, 70이상:C, 60이상:D, 나머지:F\n}\nconsole.log(getGrade(95));\nconsole.log(getGrade(82));\nconsole.log(getGrade(45));\n', solution: 'function getGrade(score) {\n  if (score >= 90) return "A";\n  if (score >= 80) return "B";\n  if (score >= 70) return "C";\n  if (score >= 60) return "D";\n  return "F";\n}\nconsole.log(getGrade(95));\nconsole.log(getGrade(82));\nconsole.log(getGrade(45));', testCases: [{ input: '', expectedOutput: 'A\nB\nF', description: '등급 반환' }], feedback: { perfect: '등급 반환 완벽!', good: '잘 만들었어요!', partial: 'if문으로 등급을 결정하세요.', wrong: 'if (score >= 90) return "A"; 형태를 사용하세요.' } },
            { id: 'c5', title: '반환값 조합하기', description: 'add, multiply 함수를 만들고, add(2,3)의 결과와 multiply(4,5)의 결과를 더하여 출력하세요.', difficulty: 'hard', hints: ['함수의 반환값끼리 연산 가능!', 'add(2,3) + multiply(4,5)'], estimatedMinutes: 8, starterCode: 'function add(a, b) { return a + b; }\nfunction multiply(a, b) { return a * b; }\n\n// add(2,3) + multiply(4,5) = ?\nconsole.log(___);\n', solution: 'function add(a, b) { return a + b; }\nfunction multiply(a, b) { return a * b; }\nconsole.log(add(2,3) + multiply(4,5));', testCases: [{ input: '', expectedOutput: '25', description: '5 + 20 = 25' }], feedback: { perfect: '반환값 조합 완벽!', good: '잘했어요!', partial: '함수 호출 결과끼리 더하세요.', wrong: 'add(2,3) + multiply(4,5)를 사용하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m4',
          title: '화살표 함수 (=>)',
          description: '더 간결하게 함수를 작성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: '화살표 함수',
          conceptExplanation: '화살표 함수(arrow function)는 function 키워드 대신 =>를 사용하는 간결한 문법이에요. Python의 lambda와 비슷하지만 더 강력해요. const 함수명 = (매개변수) => 반환값; 형태로 사용합니다.',
          cstaStandard: '2-AP-14',
          learningObjectives: ['화살표 함수 문법을 이해할 수 있다', 'function 선언을 화살표 함수로 변환할 수 있다', '간결한 한 줄 화살표 함수를 작성할 수 있다'],
          realWorldExample: '배열의 map, filter 등에서 화살표 함수를 사용하면 코드가 훨씬 간결해져요!',
          starterCode: '// 일반 함수\nfunction add(a, b) {\n  return a + b;\n}\n\n// 화살표 함수로 변환\nconst addArrow = (a, b) => a + b;\n\nconsole.log(add(3, 5));\nconsole.log(addArrow(3, 5));\n',
          solution: 'const addArrow = (a, b) => a + b;\nconsole.log(addArrow(3, 5));',
          hints: ['const 이름 = (매개변수) => 반환값;', '한 줄이면 중괄호와 return 생략 가능', 'Python lambda x: x*2 -> JS (x) => x*2'],
          testCases: [{ input: '', expectedOutput: '8\n8', description: '화살표 함수 결과' }],
          challenges: [
            { id: 'c1', title: '기본 화살표 함수', description: '두 수를 곱하는 화살표 함수 multiply를 만드세요.', difficulty: 'easy', hints: ['const multiply = (a, b) => a * b;'], estimatedMinutes: 3, starterCode: '// 화살표 함수로 곱셈\nconst multiply = ___;\nconsole.log(multiply(4, 5));\n', solution: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 5));', testCases: [{ input: '', expectedOutput: '20', description: '화살표 곱셈' }], feedback: { perfect: '화살표 함수 완벽!', good: '잘했어요!', partial: '=> 를 사용하세요.', wrong: 'const multiply = (a, b) => a * b;' } },
            { id: 'c2', title: 'function을 화살표로 변환', description: 'function square(x) { return x * x; }를 화살표 함수로 변환하세요.', difficulty: 'easy', hints: ['const square = (x) => x * x;', '매개변수 1개면 괄호 생략 가능: x => x*x'], estimatedMinutes: 3, starterCode: '// 이 함수를 화살표 함수로 변환하세요\n// function square(x) { return x * x; }\nconst square = ___;\nconsole.log(square(7));\n', solution: 'const square = x => x * x;\nconsole.log(square(7));', testCases: [{ input: '', expectedOutput: '49', description: '제곱 함수' }], feedback: { perfect: '변환 완벽!', good: '잘했어요!', partial: '=> 문법을 사용하세요.', wrong: 'const square = x => x * x;' } },
            { id: 'c3', title: 'Python lambda vs JS 화살표', description: 'Python: double = lambda x: x * 2를 JavaScript 화살표 함수로 변환하세요.', difficulty: 'medium', hints: ['lambda -> 화살표 함수', 'const double = x => x * 2;'], estimatedMinutes: 4, starterCode: '// Python: double = lambda x: x * 2\n// JavaScript 화살표 함수로:\nconst double = ___;\nconsole.log(double(7));\n', solution: 'const double = x => x * 2;\nconsole.log(double(7));', testCases: [{ input: '', expectedOutput: '14', description: 'lambda->arrow 변환' }], feedback: { perfect: 'Python lambda를 JS로 완벽 변환!', good: '잘했어요!', partial: 'x => x * 2 형태를 사용하세요.', wrong: 'const double = x => x * 2;' } },
            { id: 'c4', title: '화살표 함수로 배열 변환', description: '[1,2,3,4,5].map()에 화살표 함수를 넣어 각 요소를 3배로 만드세요.', difficulty: 'medium', hints: ['arr.map(x => x * 3)', 'map은 각 요소에 함수를 적용해요'], estimatedMinutes: 6, starterCode: 'const numbers = [1, 2, 3, 4, 5];\nconst tripled = numbers.map(___);\nconsole.log(tripled);\n', solution: 'const numbers = [1, 2, 3, 4, 5];\nconst tripled = numbers.map(x => x * 3);\nconsole.log(tripled);', testCases: [{ input: '', expectedOutput: '[3, 6, 9, 12, 15]', description: '3배 변환' }], feedback: { perfect: 'map + 화살표 함수 완벽!', good: '잘했어요!', partial: 'x => x * 3를 map에 넣으세요.', wrong: 'numbers.map(x => x * 3)을 사용하세요.' } },
            { id: 'c5', title: '여러 줄 화살표 함수', description: '화살표 함수로 isAdult(age)를 만드세요. 18세 이상이면 "성인", 아니면 "미성년자"를 반환하세요.', difficulty: 'hard', hints: ['여러 줄은 중괄호 필요: () => { return ... }', '삼항연산자: age >= 18 ? "성인" : "미성년자"'], estimatedMinutes: 7, starterCode: 'const isAdult = (age) => {\n  // 18세 이상이면 "성인", 아니면 "미성년자" 반환\n};\nconsole.log(isAdult(20));\nconsole.log(isAdult(15));\n', solution: 'const isAdult = (age) => {\n  if (age >= 18) return "성인";\n  return "미성년자";\n};\nconsole.log(isAdult(20));\nconsole.log(isAdult(15));', testCases: [{ input: '', expectedOutput: '성인\n미성년자', description: '성인 판별' }], feedback: { perfect: '여러 줄 화살표 함수 완벽!', good: '잘했어요!', partial: '중괄호와 return을 사용하세요.', wrong: '여러 줄일 때는 { return } 필요!' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m5',
          title: '기본 매개변수와 스코프',
          description: '매개변수 기본값과 변수의 유효 범위를 이해해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 40,
          estimatedMinutes: 30,
          concept: '기본 매개변수 & 스코프',
          conceptExplanation: '기본 매개변수는 인자를 전달하지 않았을 때 사용되는 기본값이에요. 스코프(scope)는 변수가 접근 가능한 범위로, 함수 안에서 선언한 변수는 함수 밖에서 사용할 수 없어요.',
          cstaStandard: '2-AP-15',
          learningObjectives: ['기본 매개변수를 설정할 수 있다', '전역 스코프와 지역 스코프를 구분할 수 있다', '블록 스코프를 이해할 수 있다'],
          realWorldExample: '게임에서 attack(damage = 10) 함수는 공격력을 안 넣으면 기본 10으로 공격해요!',
          starterCode: '// 기본 매개변수 예시\nfunction greet(name = "친구") {\n  console.log(`안녕, ${name}!`);\n}\n\ngreet("홍길동"); // 안녕, 홍길동!\ngreet();          // 안녕, 친구!\n',
          solution: 'function greet(name = "친구") {\n  console.log(`안녕, ${name}!`);\n}\ngreet("홍길동");\ngreet();',
          hints: ['function f(x = 기본값) { }', '함수 안의 변수는 밖에서 사용 불가 (지역 스코프)', 'let, const는 블록 {} 안에서만 유효'],
          testCases: [{ input: '', expectedOutput: '안녕, 홍길동!\n안녕, 친구!', description: '기본 매개변수' }],
          challenges: [
            { id: 'c1', title: '기본값 있는 함수', description: 'power(base, exp = 2) 함수를 만드세요. exp를 안 주면 제곱을 반환하세요.', difficulty: 'easy', hints: ['function power(base, exp = 2)', 'Math.pow(base, exp) 또는 base ** exp'], estimatedMinutes: 3, starterCode: 'function power(base, exp = 2) {\n  return ___;\n}\nconsole.log(power(3));    // 9 (3의 제곱)\nconsole.log(power(2, 3)); // 8 (2의 세제곱)\n', solution: 'function power(base, exp = 2) {\n  return base ** exp;\n}\nconsole.log(power(3));\nconsole.log(power(2, 3));', testCases: [{ input: '', expectedOutput: '9\n8', description: '거듭제곱' }], feedback: { perfect: '기본 매개변수 완벽!', good: '잘했어요!', partial: 'exp = 2 기본값을 사용하세요.', wrong: 'base ** exp를 반환하세요.' } },
            { id: 'c2', title: '스코프 이해하기', description: '아래 코드의 실행 결과를 예측하고 확인하세요.', difficulty: 'easy', hints: ['함수 안의 x는 밖의 x와 다른 변수예요', '같은 이름이어도 스코프가 다르면 다른 변수'], estimatedMinutes: 4, starterCode: 'let x = 10;\nfunction changeX() {\n  let x = 20;\n  console.log("함수 안:", x);\n}\nchangeX();\nconsole.log("함수 밖:", x);\n// 결과를 예측해보세요!\n', solution: 'let x = 10;\nfunction changeX() {\n  let x = 20;\n  console.log("함수 안:", x); // 20\n}\nchangeX();\nconsole.log("함수 밖:", x); // 10', testCases: [{ input: '', expectedOutput: '함수 안: 20\n함수 밖: 10', description: '스코프 분리' }], feedback: { perfect: '스코프 개념 완벽!', good: '잘 이해했어요!', partial: '함수 안과 밖의 x는 다른 변수예요.', wrong: '같은 이름이어도 스코프가 다르면 다른 변수예요.' } },
            { id: 'c3', title: '인사 함수 기본값', description: 'sayHello(name = "게스트", greeting = "안녕하세요") 함수를 만드세요.', difficulty: 'medium', hints: ['2개 매개변수 모두 기본값 설정', '템플릿 리터럴로 출력'], estimatedMinutes: 5, starterCode: 'function sayHello(name = "게스트", greeting = "안녕하세요") {\n  // "[greeting], [name]님!" 출력\n}\nsayHello();\nsayHello("민수");\nsayHello("영희", "반갑습니다");\n', solution: 'function sayHello(name = "게스트", greeting = "안녕하세요") {\n  console.log(`${greeting}, ${name}님!`);\n}\nsayHello();\nsayHello("민수");\nsayHello("영희", "반갑습니다");', testCases: [{ input: '', expectedOutput: '안녕하세요, 게스트님!\n안녕하세요, 민수님!\n반갑습니다, 영희님!', description: '기본값 활용' }], feedback: { perfect: '여러 기본값 활용 완벽!', good: '잘했어요!', partial: '기본값을 모두 설정하세요.', wrong: '매개변수 = 기본값 형태를 사용하세요.' } },
            { id: 'c4', title: '블록 스코프 실험', description: 'if 블록 안에서 선언한 let 변수가 밖에서 접근 불가능함을 확인하세요.', difficulty: 'medium', hints: ['let, const는 블록 {} 안에서만 유효', 'var는 블록을 무시해요 (그래서 안 쓰는 거!)'], estimatedMinutes: 5, starterCode: 'if (true) {\n  let blockVar = "블록 안";\n  console.log(blockVar); // 작동함\n}\n// console.log(blockVar); // 에러! 블록 밖에서 접근 불가\n// 위 줄의 주석을 풀면 어떤 에러가 나는지 설명하세요\n', solution: 'if (true) {\n  let blockVar = "블록 안";\n  console.log(blockVar);\n}\n// blockVar is not defined 에러 발생\n// let/const는 블록 스코프!', feedback: { perfect: '블록 스코프 완벽히 이해!', good: '잘 이해했어요!', partial: 'let은 블록 안에서만 유효해요.', wrong: 'let 변수는 {} 블록을 벗어나면 사라져요.' } },
            { id: 'c5', title: '카운터 함수 (클로저 맛보기)', description: '호출할 때마다 숫자가 1씩 증가하는 카운터 함수를 만드세요.', difficulty: 'hard', hints: ['함수 밖에 let count = 0; 선언', '함수 안에서 count++; 후 return'], estimatedMinutes: 8, starterCode: 'let count = 0;\n\nfunction counter() {\n  // count를 1 증가시키고 반환\n}\n\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3\n', solution: 'let count = 0;\nfunction counter() {\n  count++;\n  return count;\n}\nconsole.log(counter());\nconsole.log(counter());\nconsole.log(counter());', testCases: [{ input: '', expectedOutput: '1\n2\n3', description: '카운터' }], feedback: { perfect: '클로저 개념 맛보기 완벽!', good: '잘했어요!', partial: 'count++를 사용하세요.', wrong: '함수 밖 변수를 함수 안에서 변경할 수 있어요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m6',
          title: '주간 프로젝트: 유틸리티 함수 모음',
          description: '실용적인 유틸리티 함수 라이브러리를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          isWeeklyProject: true,
          exp: 60,
          estimatedMinutes: 45,
          concept: '함수 종합 프로젝트',
          conceptExplanation: '여러 가지 실용적인 함수를 만들어 모아두면 나만의 유틸리티 라이브러리가 돼요! 실무에서도 자주 쓰는 패턴이에요.',
          cstaStandard: '2-AP-16',
          learningObjectives: ['여러 함수를 조합하여 프로젝트를 완성할 수 있다', '실용적인 유틸리티 함수를 만들 수 있다', '함수 간 협력을 이해할 수 있다'],
          realWorldExample: 'lodash, underscore 같은 유틸리티 라이브러리도 이런 식으로 함수를 모아둔 거예요!',
          starterCode: '// 유틸리티 함수 모음\n\n// 1. 최대값 찾기\nfunction max(a, b) { }\n\n// 2. 최소값 찾기\nfunction min(a, b) { }\n\n// 3. 랜덤 숫자 (min~max)\nfunction randomInt(min, max) { }\n\n// 4. 섭씨->화씨 변환\nfunction toFahrenheit(celsius) { }\n\n// 5. 배열 합계\nfunction sum(arr) { }\n',
          solution: 'function max(a, b) { return a > b ? a : b; }\nfunction min(a, b) { return a < b ? a : b; }\nfunction randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }\nfunction toFahrenheit(celsius) { return celsius * 9/5 + 32; }\nfunction sum(arr) { return arr.reduce((total, n) => total + n, 0); }',
          requirements: ['max(a, b): 두 수 중 큰 값 반환', 'min(a, b): 두 수 중 작은 값 반환', 'randomInt(min, max): 범위 내 랜덤 정수', 'toFahrenheit(celsius): 섭씨를 화씨로', 'sum(arr): 배열의 모든 요소 합계'],
          hints: ['삼항 연산자: a > b ? a : b', 'Math.random()은 0~1 랜덤 소수', 'reduce로 배열 합계 구하기'],
          testCases: [{ input: 'max(10, 20)', expectedOutput: '20', description: '최대값' }, { input: 'toFahrenheit(100)', expectedOutput: '212', description: '섭씨->화씨' }],
          challenges: [
            { id: 'c1', title: 'max/min 함수', description: 'max(a,b)와 min(a,b) 함수를 만드세요.', difficulty: 'easy', hints: ['삼항 연산자: a > b ? a : b'], estimatedMinutes: 4, starterCode: 'function max(a, b) {\n  return ___;\n}\nfunction min(a, b) {\n  return ___;\n}\nconsole.log(max(10, 20));\nconsole.log(min(10, 20));\n', solution: 'function max(a, b) { return a > b ? a : b; }\nfunction min(a, b) { return a < b ? a : b; }\nconsole.log(max(10, 20));\nconsole.log(min(10, 20));', testCases: [{ input: '', expectedOutput: '20\n10', description: 'max/min' }], feedback: { perfect: 'max/min 완벽!', good: '잘했어요!', partial: '삼항 연산자를 사용하세요.', wrong: 'a > b ? a : b 형태를 사용하세요.' } },
            { id: 'c2', title: '랜덤 정수 함수', description: '1~6 사이 랜덤 정수를 반환하는 주사위 함수를 만드세요.', difficulty: 'medium', hints: ['Math.floor(Math.random() * 6) + 1'], estimatedMinutes: 5, starterCode: 'function rollDice() {\n  return ___;\n}\nconsole.log(rollDice());\nconsole.log(rollDice());\n', solution: 'function rollDice() {\n  return Math.floor(Math.random() * 6) + 1;\n}\nconsole.log(rollDice());\nconsole.log(rollDice());', feedback: { perfect: '랜덤 함수 완벽!', good: '잘했어요!', partial: 'Math.random()을 사용하세요.', wrong: 'Math.floor(Math.random() * 6) + 1' } },
            { id: 'c3', title: '온도 변환 쌍', description: 'toFahrenheit(c)와 toCelsius(f) 함수를 만드세요.', difficulty: 'medium', hints: ['F = C * 9/5 + 32', 'C = (F - 32) * 5/9'], estimatedMinutes: 5, starterCode: 'function toFahrenheit(c) { return ___; }\nfunction toCelsius(f) { return ___; }\nconsole.log(toFahrenheit(0));   // 32\nconsole.log(toCelsius(212));     // 100\n', solution: 'function toFahrenheit(c) { return c * 9/5 + 32; }\nfunction toCelsius(f) { return (f - 32) * 5/9; }\nconsole.log(toFahrenheit(0));\nconsole.log(toCelsius(212));', testCases: [{ input: '', expectedOutput: '32\n100', description: '온도 변환' }], feedback: { perfect: '온도 변환 쌍 완벽!', good: '잘했어요!', partial: '공식을 확인하세요.', wrong: 'F = C*9/5+32, C = (F-32)*5/9' } },
            { id: 'c4', title: '배열 유틸리티', description: 'sum(arr)과 average(arr) 함수를 만드세요.', difficulty: 'hard', hints: ['sum: reduce 사용', 'average: sum(arr) / arr.length'], estimatedMinutes: 8, starterCode: 'function sum(arr) {\n  return arr.reduce((total, n) => total + n, 0);\n}\nfunction average(arr) {\n  return ___;\n}\nconsole.log(sum([1,2,3,4,5]));     // 15\nconsole.log(average([1,2,3,4,5])); // 3\n', solution: 'function sum(arr) {\n  return arr.reduce((total, n) => total + n, 0);\n}\nfunction average(arr) {\n  return sum(arr) / arr.length;\n}\nconsole.log(sum([1,2,3,4,5]));\nconsole.log(average([1,2,3,4,5]));', testCases: [{ input: '', expectedOutput: '15\n3', description: '합계/평균' }], feedback: { perfect: '함수 재사용(sum 호출) 완벽!', good: '잘했어요!', partial: 'sum 함수를 재사용하세요.', wrong: 'average = sum(arr) / arr.length' } },
            { id: 'c5', title: '문자열 유틸리티', description: 'capitalize(str) 함수를 만드세요. 첫 글자를 대문자로 바꿔요. capitalize("hello") -> "Hello"', difficulty: 'hard', hints: ['str[0].toUpperCase() + str.slice(1)', 'slice(1)은 두 번째 글자부터 끝까지'], estimatedMinutes: 8, starterCode: 'function capitalize(str) {\n  // 첫 글자만 대문자로\n  return ___;\n}\nconsole.log(capitalize("hello"));   // Hello\nconsole.log(capitalize("javascript")); // Javascript\n', solution: 'function capitalize(str) {\n  return str[0].toUpperCase() + str.slice(1);\n}\nconsole.log(capitalize("hello"));\nconsole.log(capitalize("javascript"));', testCases: [{ input: '', expectedOutput: 'Hello\nJavascript', description: '첫 글자 대문자' }], feedback: { perfect: '문자열 유틸리티 완벽!', good: '잘했어요!', partial: 'str[0].toUpperCase()를 사용하세요.', wrong: '첫 글자 대문자 + 나머지 소문자' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },
    {
      id: 'week-42',
      number: 42,
      title: '배열과 객체',
      description: '여러 데이터를 효율적으로 관리해요',
      missions: [
        // Mission 1: 배열 map 메서드
        {
          id: 'w42-m1',
          title: '배열 map으로 데이터 변환하기',
          description: 'map 메서드로 배열의 모든 요소를 변환해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'Array.map()',
          conceptExplanation: 'map 메서드는 배열의 각 요소를 변환하여 새로운 배열을 만들어요. 원본 배열은 변경하지 않고, 각 요소에 함수를 적용한 결과로 새 배열을 반환합니다. 예를 들어 숫자 배열을 2배로 만들거나, 객체 배열에서 특정 속성만 추출할 때 유용해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'map 메서드의 동작 원리를 이해할 수 있다',
            '콜백 함수를 작성하여 배열 요소를 변환할 수 있다',
            '화살표 함수로 간결하게 map을 사용할 수 있다'
          ],
          realWorldExample: '쇼핑몰에서 모든 상품 가격에 할인율을 적용하거나, 사용자 목록에서 이름만 추출할 때 map을 사용해요!',
          starterCode: `// 숫자 배열을 2배로 만드는 함수를 작성하세요
function doubleNumbers(numbers) {
  // map을 사용하여 각 숫자를 2배로 만들기

}

// 테스트
console.log(doubleNumbers([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]`,
          solution: `function doubleNumbers(numbers) {
  return numbers.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3, 4, 5]));`,
          hints: [
            '💡 map은 배열.map(콜백함수) 형태로 사용해요',
            '💡 콜백 함수는 (요소, 인덱스, 배열) 3개 매개변수를 받아요',
            '💡 화살표 함수로 간단히: arr.map(x => x * 2)',
            '💡 map은 항상 새 배열을 반환해요'
          ],
          testCases: [
            {
              input: '[1, 2, 3, 4, 5]',
              expectedOutput: '[2, 4, 6, 8, 10]',
              description: '각 숫자가 2배가 되어야 해요'
            },
            {
              input: '[10, 20, 30]',
              expectedOutput: '[20, 40, 60]',
              description: '다른 배열에도 작동해야 해요'
            }
          ],
          challenges: [
            { id: 'c1', title: '배열 요소 2배 변환', description: 'map을 사용하여 배열의 각 요소를 2배로 변환하세요.', difficulty: 'easy', hints: ['map은 배열.map(콜백) 형태로 사용해요', '화살표 함수: x => x * 2', 'map은 새 배열을 반환해요'], estimatedMinutes: 3, starterCode: 'const nums = [1, 2, 3, 4, 5];\n// map을 사용하여 각 요소를 2배로 변환하세요\nconst doubled = \nconsole.log(doubled);', solution: 'const nums = [1, 2, 3, 4, 5];\nconst doubled = nums.map(x => x * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]', feedback: { perfect: '완벽해요! map으로 배열 변환을 정확히 이해했어요!', good: 'map 사용법을 잘 알고 있어요!', partial: 'map의 콜백 함수를 확인해보세요.', wrong: 'nums.map(x => x * 2) 형태로 작성하세요.' } },
            { id: 'c2', title: '문자열 배열 대문자 변환', description: 'map으로 모든 단어를 대문자로 변환하세요.', difficulty: 'easy', hints: ['toUpperCase() 메서드를 사용해요', 'w.toUpperCase() 형태로 호출해요'], estimatedMinutes: 3, starterCode: 'const words = ["hello", "world", "javascript"];\n// map으로 모든 단어를 대문자로 변환하세요\nconst upper = \nconsole.log(upper);', solution: 'const words = ["hello", "world", "javascript"];\nconst upper = words.map(w => w.toUpperCase());\nconsole.log(upper); // ["HELLO", "WORLD", "JAVASCRIPT"]', feedback: { perfect: '문자열 메서드와 map의 조합을 완벽히 이해했어요!', good: '잘했어요! 문자열 변환이 정확해요.', partial: 'toUpperCase() 메서드를 map 콜백 안에서 호출하세요.', wrong: 'words.map(w => w.toUpperCase()) 형태를 사용하세요.' } },
            { id: 'c3', title: '객체 배열에서 이름 추출', description: 'map으로 사용자 객체 배열에서 이름만 추출하세요.', difficulty: 'medium', hints: ['객체의 속성에 접근: user.name', 'map 콜백에서 원하는 속성만 반환하세요'], estimatedMinutes: 5, starterCode: 'const users = [\n  { name: "김철수", age: 15 },\n  { name: "이영희", age: 14 },\n  { name: "박민수", age: 16 }\n];\n// map으로 이름만 추출하세요\nconst names = \nconsole.log(names);', solution: 'const users = [\n  { name: "김철수", age: 15 },\n  { name: "이영희", age: 14 },\n  { name: "박민수", age: 16 }\n];\nconst names = users.map(user => user.name);\nconsole.log(names); // ["김철수", "이영희", "박민수"]', feedback: { perfect: '객체에서 특정 속성 추출을 완벽히 해냈어요!', good: '잘했어요! 속성 접근이 정확해요.', partial: '콜백에서 user.name을 반환하세요.', wrong: 'users.map(user => user.name) 형태를 사용하세요.' } },
            { id: 'c4', title: '가격에 부가세 추가', description: 'map으로 10% 부가세가 추가된 가격 배열을 만드세요.', difficulty: 'medium', hints: ['가격 * 1.1로 10%를 추가해요', 'Math.round()로 반올림하면 깔끔해요'], estimatedMinutes: 5, starterCode: 'const prices = [1000, 2000, 3000, 5000];\n// map으로 10% 부가세가 추가된 가격 배열을 만드세요\nconst withTax = \nconsole.log(withTax);', solution: 'const prices = [1000, 2000, 3000, 5000];\nconst withTax = prices.map(p => Math.round(p * 1.1));\nconsole.log(withTax); // [1100, 2200, 3300, 5500]', feedback: { perfect: '부가세 계산까지 완벽해요!', good: '계산이 정확해요!', partial: '가격에 1.1을 곱하면 10% 추가돼요.', wrong: 'prices.map(p => Math.round(p * 1.1)) 형태를 사용하세요.' } },
            { id: 'c5', title: '성적 등급 계산기', description: 'map으로 점수를 등급(A/B/C/D/F)으로 변환하세요. 90이상:A, 80이상:B, 70이상:C, 60이상:D, 그 외:F', difficulty: 'hard', hints: ['if/else 또는 삼항연산자를 사용하세요', '조건을 큰 수부터 확인하세요', 'map 콜백 안에서 조건문 사용 가능해요'], estimatedMinutes: 10, starterCode: 'const scores = [95, 82, 67, 54, 78];\n// map으로 점수를 등급으로 변환하세요\n// 90이상: A, 80이상: B, 70이상: C, 60이상: D, 그 외: F\nconst grades = \nconsole.log(grades);', solution: 'const scores = [95, 82, 67, 54, 78];\nconst grades = scores.map(s => {\n  if (s >= 90) return "A";\n  if (s >= 80) return "B";\n  if (s >= 70) return "C";\n  if (s >= 60) return "D";\n  return "F";\n});\nconsole.log(grades); // ["A", "B", "D", "F", "C"]', feedback: { perfect: '조건 분기와 map의 조합을 완벽히 마스터했어요!', good: '등급 판별 로직이 잘 작동해요!', partial: '조건을 높은 점수부터 확인하세요. 90 -> 80 -> 70 -> 60 순서로요.', wrong: 'map 콜백 안에서 if문으로 점수 구간별 등급을 반환하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 2: 배열 filter 메서드
        {
          id: 'w42-m2',
          title: 'filter로 조건에 맞는 데이터 찾기',
          description: 'filter 메서드로 원하는 요소만 선택해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'Array.filter()',
          conceptExplanation: 'filter 메서드는 조건을 만족하는 요소만 모아서 새로운 배열을 만들어요. 콜백 함수가 true를 반환하는 요소만 남기고, false를 반환하는 요소는 제외합니다. 검색 기능이나 데이터 필터링에 필수적인 메서드예요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'filter 메서드로 조건을 만족하는 요소를 선택할 수 있다',
            '비교 연산자를 사용한 필터링 조건을 작성할 수 있다',
            '여러 조건을 조합하여 복잡한 필터를 만들 수 있다'
          ],
          realWorldExample: '쇼핑몰에서 가격대별 상품 필터링, SNS에서 해시태그 검색, 이메일에서 읽지 않은 메일 찾기 등에 사용해요!',
          starterCode: `// 짝수만 골라내는 함수를 작성하세요
function getEvenNumbers(numbers) {
  // filter를 사용하여 짝수만 선택하기

}

// 테스트
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]`,
          solution: `function getEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));`,
          hints: [
            '💡 filter는 배열.filter(조건함수) 형태로 사용해요',
            '💡 조건 함수는 true/false를 반환해야 해요',
            '💡 짝수는 2로 나눈 나머지가 0이에요 (num % 2 === 0)',
            '💡 filter도 새 배열을 반환해요'
          ],
          testCases: [
            {
              input: '[1, 2, 3, 4, 5, 6]',
              expectedOutput: '[2, 4, 6]',
              description: '짝수만 남아야 해요'
            },
            {
              input: '[10, 15, 20, 25, 30]',
              expectedOutput: '[10, 20, 30]',
              description: '다른 배열에도 작동해야 해요'
            }
          ],
          challenges: [
            { id: 'c1', title: '짝수만 필터링', description: 'filter로 배열에서 짝수만 남기세요.', difficulty: 'easy', hints: ['짝수: n % 2 === 0', 'filter는 조건이 true인 요소만 남겨요'], estimatedMinutes: 3, starterCode: 'const nums = [1, 2, 3, 4, 5, 6, 7, 8];\n// filter로 짝수만 남기세요\nconst evens = \nconsole.log(evens);', solution: 'const nums = [1, 2, 3, 4, 5, 6, 7, 8];\nconst evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4, 6, 8]', feedback: { perfect: 'filter로 짝수 필터링을 완벽히 해냈어요!', good: '잘했어요! 조건식이 정확해요.', partial: 'n % 2 === 0 이 짝수 조건이에요.', wrong: 'nums.filter(n => n % 2 === 0) 형태를 사용하세요.' } },
            { id: 'c2', title: '빈 문자열 제거', description: 'filter로 빈 문자열을 제거하세요.', difficulty: 'easy', hints: ['빈 문자열의 length는 0이에요', 'w.length > 0 또는 w !== "" 사용'], estimatedMinutes: 3, starterCode: 'const words = ["hello", "", "world", "", "javascript"];\n// filter로 빈 문자열을 제거하세요\nconst cleaned = \nconsole.log(cleaned);', solution: 'const words = ["hello", "", "world", "", "javascript"];\nconst cleaned = words.filter(w => w.length > 0);\nconsole.log(cleaned); // ["hello", "world", "javascript"]', feedback: { perfect: '빈 문자열 제거를 완벽히 해냈어요!', good: '잘했어요! 조건이 정확해요.', partial: 'length가 0보다 큰 것만 남기세요.', wrong: 'words.filter(w => w.length > 0) 형태를 사용하세요.' } },
            { id: 'c3', title: '성인만 필터링', description: 'filter로 18세 이상인 사람만 남기세요.', difficulty: 'medium', hints: ['객체의 age 속성에 접근하세요', 'p.age >= 18 조건 사용'], estimatedMinutes: 5, starterCode: 'const people = [\n  { name: "김철수", age: 25 },\n  { name: "이영희", age: 17 },\n  { name: "박민수", age: 30 },\n  { name: "최지우", age: 15 }\n];\n// filter로 18세 이상만 남기세요\nconst adults = \nconsole.log(adults);', solution: 'const people = [\n  { name: "김철수", age: 25 },\n  { name: "이영희", age: 17 },\n  { name: "박민수", age: 30 },\n  { name: "최지우", age: 15 }\n];\nconst adults = people.filter(p => p.age >= 18);\nconsole.log(adults);', feedback: { perfect: '객체 배열 필터링을 완벽히 해냈어요!', good: '잘했어요! 조건이 정확해요.', partial: 'p.age >= 18 조건을 사용하세요.', wrong: 'people.filter(p => p.age >= 18) 형태를 사용하세요.' } },
            { id: 'c4', title: '검색 기능 구현', description: 'filter로 keyword가 포함된 제품만 검색하세요.', difficulty: 'medium', hints: ['includes() 메서드로 포함 여부 확인', 'p.includes(keyword) 형태'], estimatedMinutes: 5, starterCode: 'const products = ["아이폰", "아이패드", "맥북", "에어팟", "맥 미니"];\nconst keyword = "맥";\n// filter로 keyword가 포함된 제품만 검색하세요\nconst results = \nconsole.log(results);', solution: 'const products = ["아이폰", "아이패드", "맥북", "에어팟", "맥 미니"];\nconst keyword = "맥";\nconst results = products.filter(p => p.includes(keyword));\nconsole.log(results); // ["맥북", "맥 미니"]', feedback: { perfect: '검색 기능 구현 완벽해요!', good: '잘했어요! includes 사용이 정확해요.', partial: 'includes() 메서드를 활용하세요.', wrong: 'products.filter(p => p.includes(keyword)) 형태를 사용하세요.' } },
            { id: 'c5', title: '다중 조건 필터', description: '점수 80 이상 AND 출석률 90 이상인 학생만 필터링하세요.', difficulty: 'hard', hints: ['&& 연산자로 두 조건을 결합하세요', 's.score >= 80 && s.attendance >= 90'], estimatedMinutes: 10, starterCode: 'const students = [\n  { name: "김철수", score: 85, attendance: 95 },\n  { name: "이영희", score: 92, attendance: 80 },\n  { name: "박민수", score: 78, attendance: 98 },\n  { name: "최지우", score: 95, attendance: 92 }\n];\n// 점수 80 이상 AND 출석률 90 이상인 학생만 필터링\nconst excellent = \nconsole.log(excellent);', solution: 'const students = [\n  { name: "김철수", score: 85, attendance: 95 },\n  { name: "이영희", score: 92, attendance: 80 },\n  { name: "박민수", score: 78, attendance: 98 },\n  { name: "최지우", score: 95, attendance: 92 }\n];\nconst excellent = students.filter(s => s.score >= 80 && s.attendance >= 90);\nconsole.log(excellent); // [김철수, 최지우]', feedback: { perfect: '다중 조건 필터링을 완벽히 마스터했어요!', good: '두 조건 결합이 정확해요!', partial: '&& 연산자로 두 조건을 모두 만족하는지 확인하세요.', wrong: 'students.filter(s => s.score >= 80 && s.attendance >= 90) 형태를 사용하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 3: 배열 reduce 메서드
        {
          id: 'w42-m3',
          title: 'reduce로 배열 합계 구하기',
          description: 'reduce로 배열의 모든 값을 하나로 합쳐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'Array.reduce()',
          conceptExplanation: 'reduce는 배열의 모든 요소를 순회하면서 하나의 값으로 줄여요. 합계, 평균, 최댓값 찾기 등 다양한 용도로 사용됩니다. 누적값(accumulator)과 현재값(current)을 받아서 처리하고, 초기값을 설정할 수 있어요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'reduce 메서드의 동작 원리를 이해할 수 있다',
            '누적값과 현재값을 활용하여 계산할 수 있다',
            '초기값을 적절히 설정할 수 있다'
          ],
          realWorldExample: '장바구니 총액 계산, 설문조사 평균 점수, 좋아요 개수 합계 등에 사용해요!',
          starterCode: `// 배열의 모든 숫자를 더하는 함수를 작성하세요
function sumArray(numbers) {
  // reduce를 사용하여 합계 구하기

}

// 테스트
console.log(sumArray([1, 2, 3, 4, 5])); // 15`,
          solution: `function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));`,
          hints: [
            '💡 reduce는 배열.reduce((누적, 현재) => 결과, 초기값) 형태예요',
            '💡 누적값에 현재 값을 계속 더해가요',
            '💡 초기값을 0으로 설정하면 좋아요',
            '💡 매번 return한 값이 다음 누적값이 돼요'
          ],
          testCases: [
            {
              input: '[1, 2, 3, 4, 5]',
              expectedOutput: '15',
              description: '1+2+3+4+5 = 15'
            },
            {
              input: '[10, 20, 30]',
              expectedOutput: '60',
              description: '다른 배열의 합계'
            }
          ],
          challenges: [
            { id: 'c1', title: '배열 합계 구하기', description: 'reduce로 배열의 모든 요소 합계를 구하세요.', difficulty: 'easy', hints: ['reduce(누적값, 현재값) => 누적값 + 현재값', '초기값을 0으로 설정하세요'], estimatedMinutes: 3, starterCode: 'const nums = [10, 20, 30, 40, 50];\n// reduce로 합계를 구하세요\nconst sum = \nconsole.log(sum);', solution: 'const nums = [10, 20, 30, 40, 50];\nconst sum = nums.reduce((acc, cur) => acc + cur, 0);\nconsole.log(sum); // 150', feedback: { perfect: 'reduce로 합계 구하기를 완벽히 해냈어요!', good: '잘했어요! reduce 사용법이 정확해요.', partial: '초기값 0을 두 번째 인자로 전달하세요.', wrong: 'nums.reduce((acc, cur) => acc + cur, 0) 형태를 사용하세요.' } },
            { id: 'c2', title: '최대값 찾기', description: 'reduce로 배열에서 최대값을 찾으세요.', difficulty: 'easy', hints: ['삼항연산자: a > b ? a : b', '두 값 중 큰 값을 반환하세요'], estimatedMinutes: 3, starterCode: 'const nums = [3, 7, 2, 9, 4, 1];\n// reduce로 최대값을 구하세요\nconst max = \nconsole.log(max);', solution: 'const nums = [3, 7, 2, 9, 4, 1];\nconst max = nums.reduce((a, b) => a > b ? a : b);\nconsole.log(max); // 9', feedback: { perfect: 'reduce로 최대값 찾기를 완벽히 해냈어요!', good: '잘했어요! 비교 로직이 정확해요.', partial: '삼항연산자로 두 값을 비교하세요.', wrong: 'nums.reduce((a, b) => a > b ? a : b) 형태를 사용하세요.' } },
            { id: 'c3', title: '문자열 합치기', description: 'reduce로 모든 단어를 하나의 문자열로 합치세요.', difficulty: 'medium', hints: ['문자열 연결: acc + " " + w', '공백을 넣어서 합치세요'], estimatedMinutes: 5, starterCode: 'const words = ["JavaScript", "는", "재미있다"];\n// reduce로 모든 단어를 하나의 문자열로 합치세요\nconst sentence = \nconsole.log(sentence);', solution: 'const words = ["JavaScript", "는", "재미있다"];\nconst sentence = words.reduce((acc, w) => acc + " " + w);\nconsole.log(sentence); // "JavaScript 는 재미있다"', feedback: { perfect: 'reduce로 문자열 합치기를 완벽히 해냈어요!', good: '잘했어요! 공백으로 연결이 정확해요.', partial: '누적값과 현재값 사이에 공백을 넣으세요.', wrong: 'words.reduce((acc, w) => acc + " " + w) 형태를 사용하세요.' } },
            { id: 'c4', title: '장바구니 총액 계산', description: 'reduce로 장바구니의 총 금액을 계산하세요. 가격 * 수량의 합입니다.', difficulty: 'medium', hints: ['item.price * item.qty로 각 상품 금액 계산', '초기값 0에서 시작하여 누적'], estimatedMinutes: 7, starterCode: 'const cart = [\n  { item: "노트북", price: 1200000, qty: 1 },\n  { item: "마우스", price: 35000, qty: 2 },\n  { item: "키보드", price: 89000, qty: 1 }\n];\n// reduce로 총 금액을 계산하세요\nconst total = \nconsole.log(total);', solution: 'const cart = [\n  { item: "노트북", price: 1200000, qty: 1 },\n  { item: "마우스", price: 35000, qty: 2 },\n  { item: "키보드", price: 89000, qty: 1 }\n];\nconst total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);\nconsole.log(total); // 1359000', feedback: { perfect: '장바구니 총액 계산을 완벽히 해냈어요!', good: '잘했어요! 가격x수량 계산이 정확해요.', partial: '각 상품의 price * qty를 누적하세요.', wrong: 'cart.reduce((sum, item) => sum + item.price * item.qty, 0) 형태를 사용하세요.' } },
            { id: 'c5', title: '빈도수 카운터', description: 'reduce로 각 과일의 개수를 세는 객체를 만드세요.', difficulty: 'hard', hints: ['초기값으로 빈 객체 {} 사용', 'acc[fruit] = (acc[fruit] || 0) + 1 패턴', '반드시 acc를 return 하세요'], estimatedMinutes: 10, starterCode: 'const fruits = ["사과", "바나나", "사과", "오렌지", "바나나", "사과"];\n// reduce로 각 과일의 개수를 세는 객체를 만드세요\nconst count = \nconsole.log(count);', solution: 'const fruits = ["사과", "바나나", "사과", "오렌지", "바나나", "사과"];\nconst count = fruits.reduce((acc, fruit) => {\n  acc[fruit] = (acc[fruit] || 0) + 1;\n  return acc;\n}, {});\nconsole.log(count); // { 사과: 3, 바나나: 2, 오렌지: 1 }', feedback: { perfect: 'reduce로 빈도수 카운팅을 완벽히 마스터했어요!', good: '잘했어요! 객체 누적 패턴이 정확해요.', partial: 'acc[fruit] = (acc[fruit] || 0) + 1 패턴을 사용하고 acc를 반환하세요.', wrong: '초기값 {}에서 시작하여 각 과일을 키로, 개수를 값으로 누적하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 4: map과 filter 조합
        {
          id: 'w42-m4',
          title: 'map과 filter 함께 사용하기',
          description: '배열 메서드를 체이닝하여 복잡한 작업을 해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: '메서드 체이닝',
          conceptExplanation: '배열 메서드는 체이닝(연결)해서 사용할 수 있어요. map, filter, reduce를 조합하면 복잡한 데이터 처리를 간결하게 표현할 수 있습니다. 각 메서드가 새 배열을 반환하므로 연속으로 메서드를 호출할 수 있어요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '여러 배열 메서드를 체이닝하여 사용할 수 있다',
            '데이터 변환과 필터링을 순차적으로 적용할 수 있다',
            '코드를 간결하고 읽기 쉽게 작성할 수 있다'
          ],
          realWorldExample: 'E-커머스에서 "가격이 10000원 이상인 상품에 10% 할인 적용" 같은 조건부 변환에 사용해요!',
          starterCode: `// 짝수만 골라서 2배로 만드는 함수를 작성하세요
function doubleEvenNumbers(numbers) {
  // filter와 map을 조합하기

}

// 테스트
console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6])); // [4, 8, 12]`,
          solution: `function doubleEvenNumbers(numbers) {
  return numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
}

console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6]));`,
          hints: [
            '💡 먼저 filter로 짝수만 선택하세요',
            '💡 그 다음 map으로 2배로 만드세요',
            '💡 배열.filter().map() 형태로 연결해요',
            '💡 순서가 중요해요! filter 먼저, map 나중에'
          ],
          testCases: [
            {
              input: '[1, 2, 3, 4, 5, 6]',
              expectedOutput: '[4, 8, 12]',
              description: '짝수(2,4,6)를 2배로'
            },
            {
              input: '[5, 10, 15, 20]',
              expectedOutput: '[20, 40]',
              description: '10과 20만 짝수이므로 2배'
            }
          ],
          challenges: [
            { id: 'c1', title: '필터 후 변환', description: 'filter로 짝수만 골라서 map으로 2배 변환하세요.', difficulty: 'easy', hints: ['filter를 먼저, map을 나중에 체이닝', '.filter().map() 형태'], estimatedMinutes: 3, starterCode: 'const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n// filter로 짝수만 골라서 map으로 2배 변환\nconst result = \nconsole.log(result);', solution: 'const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconst result = nums.filter(n => n % 2 === 0).map(n => n * 2);\nconsole.log(result); // [4, 8, 12, 16, 20]', feedback: { perfect: 'filter와 map 체이닝을 완벽히 해냈어요!', good: '잘했어요! 체이닝 순서가 정확해요.', partial: 'filter 다음에 .map()을 바로 연결하세요.', wrong: 'nums.filter(n => n % 2 === 0).map(n => n * 2) 형태를 사용하세요.' } },
            { id: 'c2', title: '문자열 처리 체인', description: 'map으로 trim하고 map으로 소문자 변환하세요.', difficulty: 'easy', hints: ['trim()으로 공백 제거', 'toLowerCase()로 소문자 변환', '.map().map() 체이닝'], estimatedMinutes: 3, starterCode: 'const words = ["  Hello  ", "  WORLD  ", "  JavaScript  "];\n// map으로 trim하고 map으로 소문자 변환\nconst result = \nconsole.log(result);', solution: 'const words = ["  Hello  ", "  WORLD  ", "  JavaScript  "];\nconst result = words.map(w => w.trim()).map(w => w.toLowerCase());\nconsole.log(result); // ["hello", "world", "javascript"]', feedback: { perfect: 'map 체이닝으로 문자열 처리를 완벽히 해냈어요!', good: '잘했어요! trim과 toLowerCase 체이닝이 정확해요.', partial: '.map(w => w.trim()).map(w => w.toLowerCase()) 순서로 연결하세요.', wrong: 'words.map(w => w.trim()).map(w => w.toLowerCase()) 형태를 사용하세요.' } },
            { id: 'c3', title: '학생 성적 처리', description: '60점 이상만 필터링 후 이름만 추출하세요.', difficulty: 'medium', hints: ['filter로 점수 조건 필터링', 'map으로 이름 속성만 추출', '.filter().map() 체이닝'], estimatedMinutes: 5, starterCode: 'const students = [\n  { name: "김철수", score: 85 },\n  { name: "이영희", score: 92 },\n  { name: "박민수", score: 45 },\n  { name: "최지우", score: 78 }\n];\n// 60점 이상만 필터링 후 이름만 추출\nconst passed = \nconsole.log(passed);', solution: 'const students = [\n  { name: "김철수", score: 85 },\n  { name: "이영희", score: 92 },\n  { name: "박민수", score: 45 },\n  { name: "최지우", score: 78 }\n];\nconst passed = students.filter(s => s.score >= 60).map(s => s.name);\nconsole.log(passed); // ["김철수", "이영희", "최지우"]', feedback: { perfect: '필터링 후 속성 추출 체이닝을 완벽히 해냈어요!', good: '잘했어요! 조건과 추출이 정확해요.', partial: 'filter로 60점 이상 선택 후 map으로 name 추출하세요.', wrong: 'students.filter(s => s.score >= 60).map(s => s.name) 형태를 사용하세요.' } },
            { id: 'c4', title: '데이터 파이프라인', description: 'map으로 할인 적용 -> filter로 50만원 이하 -> reduce로 합계를 구하세요.', difficulty: 'medium', hints: ['map으로 finalPrice 계산: price * (1 - discount)', 'filter로 50만원 이하만 선택', 'reduce로 합계 계산'], estimatedMinutes: 7, starterCode: 'const orders = [\n  { product: "노트북", price: 1500000, discount: 0.1 },\n  { product: "마우스", price: 35000, discount: 0 },\n  { product: "모니터", price: 450000, discount: 0.15 }\n];\n// map으로 할인 적용 -> filter로 50만원 이하 -> reduce로 합계\nconst total = \nconsole.log(total);', solution: 'const orders = [\n  { product: "노트북", price: 1500000, discount: 0.1 },\n  { product: "마우스", price: 35000, discount: 0 },\n  { product: "모니터", price: 450000, discount: 0.15 }\n];\nconst total = orders\n  .map(o => ({ ...o, finalPrice: o.price * (1 - o.discount) }))\n  .filter(o => o.finalPrice <= 500000)\n  .reduce((sum, o) => sum + o.finalPrice, 0);\nconsole.log(total); // 417500', feedback: { perfect: 'map->filter->reduce 파이프라인을 완벽히 구현했어요!', good: '잘했어요! 3단계 체이닝이 정확해요.', partial: 'map으로 할인 적용 후 filter, reduce를 순서대로 체이닝하세요.', wrong: '.map(할인적용).filter(가격조건).reduce(합계) 순서로 체이닝하세요.' } },
            { id: 'c5', title: '상품 랭킹 시스템', description: 'rating 4.0 이상 필터 -> 판매량 내림차순 정렬 -> 이름만 추출하세요.', difficulty: 'hard', hints: ['filter로 rating >= 4.0', 'sort((a,b) => b.sales - a.sales)로 내림차순', 'map으로 name 추출'], estimatedMinutes: 10, starterCode: 'const products = [\n  { name: "A", sales: 150, rating: 4.5 },\n  { name: "B", sales: 300, rating: 3.8 },\n  { name: "C", sales: 80, rating: 4.9 },\n  { name: "D", sales: 200, rating: 4.2 }\n];\n// rating 4.0 이상 필터 -> 판매량 내림차순 정렬 -> 이름만 추출\nconst ranking = \nconsole.log(ranking);', solution: 'const products = [\n  { name: "A", sales: 150, rating: 4.5 },\n  { name: "B", sales: 300, rating: 3.8 },\n  { name: "C", sales: 80, rating: 4.9 },\n  { name: "D", sales: 200, rating: 4.2 }\n];\nconst ranking = products\n  .filter(p => p.rating >= 4.0)\n  .sort((a, b) => b.sales - a.sales)\n  .map(p => p.name);\nconsole.log(ranking); // ["D", "A", "C"]', feedback: { perfect: 'filter->sort->map 체이닝으로 랭킹 시스템을 완벽히 구현했어요!', good: '잘했어요! 3단계 체이닝이 정확해요.', partial: 'filter 후 sort로 내림차순 정렬, 그 다음 map으로 이름 추출하세요.', wrong: '.filter(rating조건).sort(판매량내림차순).map(이름추출) 순서로 체이닝하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 5: 객체 기초
        {
          id: 'w42-m5',
          title: '객체로 데이터 관리하기',
          description: '객체를 만들고 속성에 접근해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'JavaScript 객체',
          conceptExplanation: '객체는 관련된 데이터를 하나로 묶어서 관리하는 자료구조예요. key: value 쌍으로 데이터를 저장하며, 점 표기법(obj.key)이나 대괄호 표기법(obj["key"])으로 접근합니다. 실제 세계의 사물이나 개념을 코드로 표현할 때 유용해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '객체 리터럴 문법으로 객체를 생성할 수 있다',
            '점 표기법과 대괄호 표기법으로 속성에 접근할 수 있다',
            '객체의 속성을 추가, 수정, 삭제할 수 있다'
          ],
          realWorldExample: '사용자 프로필(이름, 나이, 이메일), 상품 정보(이름, 가격, 재고) 등을 객체로 표현해요!',
          starterCode: `// 사용자 정보를 담은 객체를 만들고 이름을 출력하세요
function createUser(name, age, email) {
  // 객체 만들기
  const user = {
    // 속성 추가하기
  };

  // 이름 반환하기

}

// 테스트
const user = createUser("김코딩", 15, "kim@example.com");
console.log(user.name); // "김코딩"
console.log(user.age); // 15`,
          solution: `function createUser(name, age, email) {
  const user = {
    name: name,
    age: age,
    email: email
  };

  return user;
}

const user = createUser("김코딩", 15, "kim@example.com");
console.log(user.name);
console.log(user.age);`,
          hints: [
            '💡 객체는 { key: value } 형태로 만들어요',
            '💡 여러 속성은 쉼표(,)로 구분해요',
            '💡 obj.name으로 속성에 접근해요',
            '💡 속성 이름과 변수 이름이 같으면 { name }으로 축약 가능'
          ],
          testCases: [
            {
              input: 'createUser("김코딩", 15, "kim@example.com")',
              expectedOutput: '{ name: "김코딩", age: 15, email: "kim@example.com" }',
              description: '올바른 객체 생성'
            }
          ],
          challenges: [
            { id: 'c1', title: '객체 만들기', description: '이름, 나이, 취미를 가진 객체를 만드세요.', difficulty: 'easy', hints: ['{ } 안에 속성을 넣어요', 'key: value 형태로 작성'], estimatedMinutes: 3, starterCode: '// person 객체를 만드세요\nconst person = {\n  // name, age, hobby 속성 추가\n};\nconsole.log(person.name);', solution: 'const person = {\n  name: "홍길동",\n  age: 15,\n  hobby: "코딩"\n};\nconsole.log(person.name);', feedback: { perfect: '객체를 완벽하게 만들었어요!', good: '좋아요!', partial: '속성 3개를 모두 넣으세요.', wrong: '{ key: value } 형태로 작성하세요.' } },
            { id: 'c2', title: '속성 접근하기', description: '점 표기법과 괄호 표기법으로 객체 속성에 접근하세요.', difficulty: 'easy', hints: ['obj.key 또는 obj["key"]'], estimatedMinutes: 4, starterCode: 'const car = { brand: "현대", model: "아반떼", year: 2024 };\n// 점 표기법으로 brand 출력\nconsole.log();\n// 괄호 표기법으로 model 출력\nconsole.log();', solution: 'const car = { brand: "현대", model: "아반떼", year: 2024 };\nconsole.log(car.brand);\nconsole.log(car["model"]);', feedback: { perfect: '두 가지 접근 방법을 잘 이해했어요!', good: '좋아요!', partial: '괄호 표기법도 시도하세요.', wrong: 'obj.key 또는 obj["key"]를 사용하세요.' } },
            { id: 'c3', title: '속성 추가/수정/삭제', description: '객체의 속성을 동적으로 변경하세요.', difficulty: 'medium', hints: ['obj.newKey = value로 추가', 'delete obj.key로 삭제'], estimatedMinutes: 5, starterCode: 'const user = { name: "코딩왕", level: 1 };\n// level을 5로 수정\n// score 속성을 100으로 추가\n// name 속성 삭제\nconsole.log(user);', solution: 'const user = { name: "코딩왕", level: 1 };\nuser.level = 5;\nuser.score = 100;\ndelete user.name;\nconsole.log(user); // { level: 5, score: 100 }', feedback: { perfect: '속성 조작을 완벽히 이해했어요!', good: '잘했어요!', partial: '삭제도 시도하세요.', wrong: 'obj.key = value로 수정/추가, delete obj.key로 삭제하세요.' } },
            { id: 'c4', title: '학생 프로필 객체', description: '학생 정보를 객체로 구성하고 성적 평균을 계산하세요.', difficulty: 'medium', hints: ['scores를 배열로 저장', 'reduce로 합계 구하기'], estimatedMinutes: 8, starterCode: 'const student = {\n  name: "김철수",\n  scores: [90, 85, 92, 78, 95],\n  // getAverage 메서드 추가\n};\nconsole.log(student.getAverage());', solution: 'const student = {\n  name: "김철수",\n  scores: [90, 85, 92, 78, 95],\n  getAverage() {\n    const sum = this.scores.reduce((a, b) => a + b, 0);\n    return sum / this.scores.length;\n  }\n};\nconsole.log(student.getAverage()); // 88', feedback: { perfect: '메서드까지 완벽하게 구현했어요!', good: '잘했어요!', partial: 'this.scores를 사용하세요.', wrong: 'getAverage() { } 메서드를 추가하세요.' } },
            { id: 'c5', title: '게임 캐릭터 객체', description: '게임 캐릭터 객체를 만들고 레벨업 기능을 구현하세요.', difficulty: 'hard', hints: ['this로 자신의 속성에 접근', '메서드로 상태 변경'], estimatedMinutes: 12, starterCode: 'const hero = {\n  name: "전사",\n  level: 1,\n  hp: 100,\n  atk: 10,\n  // levelUp: 레벨+1, hp+20, atk+5\n  // attack: "name의 공격! atk 데미지!" 출력\n  // status: 모든 정보 출력\n};\nhero.levelUp();\nhero.attack();\nhero.status();', solution: 'const hero = {\n  name: "전사",\n  level: 1,\n  hp: 100,\n  atk: 10,\n  levelUp() {\n    this.level++;\n    this.hp += 20;\n    this.atk += 5;\n    console.log("레벨 업! Lv." + this.level);\n  },\n  attack() {\n    console.log(this.name + "의 공격! " + this.atk + " 데미지!");\n  },\n  status() {\n    console.log("=== " + this.name + " ===");\n    console.log("Lv." + this.level + " HP:" + this.hp + " ATK:" + this.atk);\n  }\n};\nhero.levelUp();\nhero.attack();\nhero.status();', feedback: { perfect: '게임 캐릭터 객체를 완벽하게 구현했어요!', good: '잘했어요!', partial: '메서드에서 this를 사용하세요.', wrong: 'this.level++ 형태로 속성을 변경하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 6: 객체 메서드
        {
          id: 'w42-m6',
          title: '객체에 메서드 추가하기',
          description: '객체 안에 함수를 넣어서 기능을 추가해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: '객체 메서드',
          conceptExplanation: '객체의 속성으로 함수를 저장하면 메서드가 돼요. 메서드는 객체의 데이터를 사용하여 동작을 수행합니다. this 키워드를 사용하면 메서드 내부에서 자신이 속한 객체의 다른 속성에 접근할 수 있어요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '객체에 메서드를 정의할 수 있다',
            'this 키워드로 객체 자신의 속성에 접근할 수 있다',
            '메서드 축약 문법을 사용할 수 있다'
          ],
          realWorldExample: '계좌 객체에 입금/출금 메서드, 게임 캐릭터 객체에 공격/방어 메서드 등을 추가해요!',
          starterCode: `// 계산기 객체를 만들고 add, subtract 메서드를 추가하세요
const calculator = {
  result: 0,

  add(num) {
    // result에 num을 더하기

  },

  subtract(num) {
    // result에서 num을 빼기

  }
};

// 테스트
calculator.add(10);
console.log(calculator.result); // 10
calculator.subtract(3);
console.log(calculator.result); // 7`,
          solution: `const calculator = {
  result: 0,

  add(num) {
    this.result += num;
  },

  subtract(num) {
    this.result -= num;
  }
};

calculator.add(10);
console.log(calculator.result);
calculator.subtract(3);
console.log(calculator.result);`,
          hints: [
            '💡 메서드는 함수명(매개변수) { } 형태로 작성해요',
            '💡 this.result로 객체의 result 속성에 접근해요',
            '💡 += 연산자로 값을 누적해요',
            '💡 화살표 함수는 this가 다르게 동작하니 주의!'
          ],
          testCases: [
            {
              input: 'add(10), subtract(3)',
              expectedOutput: '7',
              description: '10을 더하고 3을 빼면 7'
            }
          ],
          challenges: [
            { id: 'c1', title: 'Object.keys() 사용', description: '객체의 키 목록을 배열로 추출하세요.', difficulty: 'easy', hints: ['Object.keys(obj)는 키 배열 반환'], estimatedMinutes: 3, starterCode: 'const fruit = { apple: 3, banana: 5, orange: 2 };\n// Object.keys()로 키 배열 추출\nconst keys = \nconsole.log(keys);', solution: 'const fruit = { apple: 3, banana: 5, orange: 2 };\nconst keys = Object.keys(fruit);\nconsole.log(keys); // ["apple", "banana", "orange"]', feedback: { perfect: 'Object.keys() 완벽!', good: '좋아요!', partial: 'Object.keys(객체)를 사용하세요.', wrong: 'Object.keys(fruit) 형태입니다.' } },
            { id: 'c2', title: 'Object.values() 사용', description: '객체의 값 목록을 배열로 추출하세요.', difficulty: 'easy', hints: ['Object.values(obj)는 값 배열 반환'], estimatedMinutes: 3, starterCode: 'const scores = { math: 90, eng: 85, sci: 92 };\n// Object.values()로 값 배열 추출\nconst vals = \n// 합계 구하기\nconst total = \nconsole.log(vals, total);', solution: 'const scores = { math: 90, eng: 85, sci: 92 };\nconst vals = Object.values(scores);\nconst total = vals.reduce((a, b) => a + b, 0);\nconsole.log(vals, total); // [90, 85, 92] 267', feedback: { perfect: 'Object.values와 reduce 조합 완벽!', good: '값 추출은 정확해요!', partial: 'reduce로 합계를 구하세요.', wrong: 'Object.values(scores)를 사용하세요.' } },
            { id: 'c3', title: 'Object.entries() 반복', description: 'Object.entries()로 키-값 쌍을 반복하세요.', difficulty: 'medium', hints: ['for (const [key, value] of Object.entries(obj))'], estimatedMinutes: 5, starterCode: 'const menu = { 김밥: 3000, 라면: 4000, 떡볶이: 3500 };\n// Object.entries()로 "메뉴: 가격원" 형태로 출력\nfor () {\n  console.log();\n}', solution: 'const menu = { 김밥: 3000, 라면: 4000, 떡볶이: 3500 };\nfor (const [name, price] of Object.entries(menu)) {\n  console.log(name + ": " + price + "원");\n}', feedback: { perfect: 'entries 반복을 완벽히 이해했어요!', good: '잘했어요!', partial: '구조 분해를 사용해보세요.', wrong: 'for (const [k, v] of Object.entries(obj))를 사용하세요.' } },
            { id: 'c4', title: '객체 변환하기', description: 'Object.entries와 Object.fromEntries로 객체를 변환하세요.', difficulty: 'medium', hints: ['entries → map → fromEntries'], estimatedMinutes: 8, starterCode: 'const prices = { apple: 1000, banana: 1500, orange: 2000 };\n// 모든 가격을 10% 할인한 새 객체 만들기\nconst discounted = \nconsole.log(discounted);', solution: 'const prices = { apple: 1000, banana: 1500, orange: 2000 };\nconst discounted = Object.fromEntries(\n  Object.entries(prices).map(([k, v]) => [k, v * 0.9])\n);\nconsole.log(discounted);', feedback: { perfect: '객체 변환 패턴을 완벽히 이해했어요!', good: '좋은 접근이에요!', partial: 'entries → map → fromEntries 체인을 사용하세요.', wrong: 'Object.entries().map()으로 변환하세요.' } },
            { id: 'c5', title: '계산기 객체', description: 'add, subtract, multiply, divide 메서드가 있는 계산기를 만드세요.', difficulty: 'hard', hints: ['각 메서드에서 this.result를 업데이트', '체이닝을 위해 this를 반환'], estimatedMinutes: 12, starterCode: 'const calc = {\n  result: 0,\n  // add(n): result에 n 더하기\n  // subtract(n): result에서 n 빼기\n  // multiply(n): result에 n 곱하기\n  // reset(): result를 0으로\n  // getResult(): result 반환\n};\ncalc.add(10);\ncalc.multiply(3);\ncalc.subtract(5);\nconsole.log(calc.getResult());', solution: 'const calc = {\n  result: 0,\n  add(n) { this.result += n; return this; },\n  subtract(n) { this.result -= n; return this; },\n  multiply(n) { this.result *= n; return this; },\n  reset() { this.result = 0; return this; },\n  getResult() { return this.result; }\n};\ncalc.add(10).multiply(3).subtract(5);\nconsole.log(calc.getResult()); // 25', feedback: { perfect: '메서드 체이닝까지 완벽!', good: '계산기가 잘 작동해요!', partial: 'this를 반환하면 체이닝이 가능해요.', wrong: '각 메서드에서 this.result를 변경하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 7: 구조 분해 할당
        {
          id: 'w42-m7',
          title: '구조 분해로 값 꺼내기',
          description: '객체와 배열에서 값을 쉽게 추출해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: '구조 분해 할당',
          conceptExplanation: '구조 분해 할당은 배열이나 객체의 값을 개별 변수로 빠르게 추출하는 문법이에요. const { name, age } = user처럼 작성하면 user.name과 user.age를 각각 name, age 변수에 할당합니다. 코드를 더 간결하고 읽기 쉽게 만들어줘요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '객체 구조 분해 문법을 사용할 수 있다',
            '배열 구조 분해 문법을 사용할 수 있다',
            '기본값을 설정하여 안전하게 값을 추출할 수 있다'
          ],
          realWorldExample: 'API 응답 데이터에서 필요한 값만 추출하거나, 함수 매개변수로 객체를 받을 때 사용해요!',
          starterCode: `// 구조 분해 할당으로 사용자 정보를 추출하세요
function printUserInfo(user) {
  // user 객체에서 name과 age를 구조 분해로 추출


  console.log(\`이름: \${name}, 나이: \${age}\`);
}

// 테스트
printUserInfo({ name: "이민수", age: 16, email: "lee@example.com" });
// 출력: "이름: 이민수, 나이: 16"`,
          solution: `function printUserInfo(user) {
  const { name, age } = user;
  console.log(\`이름: \${name}, 나이: \${age}\`);
}

printUserInfo({ name: "이민수", age: 16, email: "lee@example.com" });`,
          hints: [
            '💡 const { key1, key2 } = 객체 형태로 사용해요',
            '💡 변수 이름은 객체의 key 이름과 같아야 해요',
            '💡 필요한 속성만 선택적으로 추출 가능해요',
            '💡 배열은 const [a, b] = 배열 형태로 분해해요'
          ],
          testCases: [
            {
              input: '{ name: "이민수", age: 16, email: "lee@example.com" }',
              expectedOutput: '"이름: 이민수, 나이: 16"',
              description: 'name과 age를 올바르게 추출'
            }
          ],
          challenges: [
            { id: 'c1', title: '배열 구조 분해', description: '배열에서 값을 변수로 추출하세요.', difficulty: 'easy', hints: ['const [a, b] = [1, 2]'], estimatedMinutes: 3, starterCode: 'const colors = ["빨강", "파랑", "초록"];\n// 구조 분해로 first, second, third 변수에 할당\nconst [] = colors;\nconsole.log(first, second, third);', solution: 'const colors = ["빨강", "파랑", "초록"];\nconst [first, second, third] = colors;\nconsole.log(first, second, third);', feedback: { perfect: '배열 구조 분해 완벽!', good: '좋아요!', partial: '변수 3개를 배열에서 추출하세요.', wrong: 'const [a, b, c] = array 형태를 사용하세요.' } },
            { id: 'c2', title: '객체 구조 분해', description: '객체에서 속성을 변수로 추출하세요.', difficulty: 'easy', hints: ['const { name, age } = person'], estimatedMinutes: 4, starterCode: 'const user = { name: "홍길동", age: 15, school: "코딩중학교" };\n// 구조 분해로 name, age, school 추출\nconst { } = user;\nconsole.log(name, age, school);', solution: 'const user = { name: "홍길동", age: 15, school: "코딩중학교" };\nconst { name, age, school } = user;\nconsole.log(name, age, school);', feedback: { perfect: '객체 구조 분해 완벽!', good: '좋아요!', partial: '속성 이름과 같은 변수명을 사용하세요.', wrong: 'const { key1, key2 } = obj 형태입니다.' } },
            { id: 'c3', title: '기본값과 별칭', description: '구조 분해에서 기본값과 별칭을 사용하세요.', difficulty: 'medium', hints: ['{ name: n } 별칭, { age = 0 } 기본값'], estimatedMinutes: 5, starterCode: 'const config = { theme: "dark", lang: "ko" };\n// theme을 t로 별칭, fontSize는 기본값 16\nconst { } = config;\nconsole.log(t, fontSize);', solution: 'const config = { theme: "dark", lang: "ko" };\nconst { theme: t, fontSize = 16 } = config;\nconsole.log(t, fontSize); // "dark" 16', feedback: { perfect: '별칭과 기본값을 완벽히 이해했어요!', good: '좋아요!', partial: '기본값은 = 로 설정하세요.', wrong: '{ key: alias, key2 = default } 형태입니다.' } },
            { id: 'c4', title: '중첩 구조 분해', description: '중첩 객체에서 깊은 값을 추출하세요.', difficulty: 'medium', hints: ['{ address: { city } } 형태'], estimatedMinutes: 7, starterCode: 'const student = {\n  name: "김철수",\n  scores: { math: 90, eng: 85 },\n  address: { city: "서울", district: "강남" }\n};\n// 중첩 구조 분해로 name, math, city 추출\nconst { } = student;\nconsole.log(name, math, city);', solution: 'const student = {\n  name: "김철수",\n  scores: { math: 90, eng: 85 },\n  address: { city: "서울", district: "강남" }\n};\nconst { name, scores: { math }, address: { city } } = student;\nconsole.log(name, math, city); // 김철수 90 서울', feedback: { perfect: '중첩 구조 분해 완벽!', good: '잘했어요!', partial: 'scores: { math } 형태로 깊이 접근하세요.', wrong: '{ outer: { inner } } 패턴을 사용하세요.' } },
            { id: 'c5', title: '함수 매개변수 구조 분해', description: '함수 매개변수에서 직접 구조 분해하세요.', difficulty: 'hard', hints: ['function({ name, age }) 형태'], estimatedMinutes: 10, starterCode: '// 사용자 정보를 출력하는 함수\n// 매개변수에서 name, age, hobby를 구조 분해\nfunction printUser(/* 여기에 구조 분해 */) {\n  console.log(name + " (" + age + "세) - " + hobby);\n}\nprintUser({ name: "홍길동", age: 15, hobby: "코딩", school: "중학교" });', solution: 'function printUser({ name, age, hobby }) {\n  console.log(name + " (" + age + "세) - " + hobby);\n}\nprintUser({ name: "홍길동", age: 15, hobby: "코딩", school: "중학교" });', feedback: { perfect: '함수 매개변수 구조 분해 완벽!', good: '잘했어요!', partial: '매개변수를 { name, age, hobby }로 바꾸세요.', wrong: 'function fn({ key1, key2 }) 형태입니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 8: Spread 연산자
        {
          id: 'w42-m8',
          title: 'Spread 연산자로 배열/객체 합치기',
          description: '...연산자로 배열과 객체를 복사하고 합쳐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'Spread 연산자',
          conceptExplanation: 'Spread 연산자(...)는 배열이나 객체를 펼쳐서 개별 요소로 만들어요. 배열 복사, 배열 합치기, 객체 병합 등에 유용합니다. 원본을 변경하지 않고 새로운 배열/객체를 만들 때 사용하며, 불변성을 유지하는 데 중요한 역할을 해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'Spread 연산자로 배열을 복사할 수 있다',
            '여러 배열을 하나로 합칠 수 있다',
            '객체를 복사하고 속성을 추가/수정할 수 있다'
          ],
          realWorldExample: '장바구니에 상품 추가, 여러 설정 옵션 병합, 배열 복사 등에 사용해요!',
          starterCode: `// 두 배열을 합치는 함수를 작성하세요
function mergeArrays(arr1, arr2) {
  // spread 연산자로 배열 합치기

}

// 테스트
console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]`,
          solution: `function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4]));`,
          hints: [
            '💡 [...배열1, ...배열2]로 배열을 합쳐요',
            '💡 [...배열]로 배열을 복사해요 (얕은 복사)',
            '💡 {...객체1, ...객체2}로 객체도 병합 가능',
            '💡 뒤에 있는 값이 앞의 값을 덮어써요'
          ],
          testCases: [
            {
              input: '[1, 2], [3, 4]',
              expectedOutput: '[1, 2, 3, 4]',
              description: '두 배열이 합쳐져야 해요'
            },
            {
              input: '["a", "b"], ["c"]',
              expectedOutput: '["a", "b", "c"]',
              description: '문자열 배열도 합치기'
            }
          ],
          challenges: [
            { id: 'c1', title: '배열 복사', description: 'Spread로 배열을 복사하세요.', difficulty: 'easy', hints: ['[...arr]로 얕은 복사'], estimatedMinutes: 3, starterCode: 'const original = [1, 2, 3];\n// Spread로 복사본 만들기\nconst copy = \ncopy.push(4);\nconsole.log(original, copy);', solution: 'const original = [1, 2, 3];\nconst copy = [...original];\ncopy.push(4);\nconsole.log(original, copy); // [1,2,3] [1,2,3,4]', feedback: { perfect: 'Spread 복사를 완벽히 이해했어요!', good: '좋아요!', partial: '[...배열] 형태를 사용하세요.', wrong: 'const copy = [...original]을 사용하세요.' } },
            { id: 'c2', title: '배열 합치기', description: 'Spread로 두 배열을 합치세요.', difficulty: 'easy', hints: ['[...arr1, ...arr2]'], estimatedMinutes: 3, starterCode: 'const fruits = ["사과", "바나나"];\nconst vegs = ["당근", "양파"];\n// 두 배열을 합쳐서 하나로\nconst all = \nconsole.log(all);', solution: 'const fruits = ["사과", "바나나"];\nconst vegs = ["당근", "양파"];\nconst all = [...fruits, ...vegs];\nconsole.log(all);', feedback: { perfect: '배열 합치기 완벽!', good: '좋아요!', partial: '두 배열 모두 spread하세요.', wrong: '[...arr1, ...arr2] 형태입니다.' } },
            { id: 'c3', title: '객체 합치기', description: 'Spread로 객체를 합치세요.', difficulty: 'medium', hints: ['{...obj1, ...obj2}'], estimatedMinutes: 5, starterCode: 'const defaults = { theme: "light", lang: "en", size: 14 };\nconst userPref = { theme: "dark", lang: "ko" };\n// 합치기 (userPref가 defaults를 덮어씀)\nconst config = \nconsole.log(config);', solution: 'const defaults = { theme: "light", lang: "en", size: 14 };\nconst userPref = { theme: "dark", lang: "ko" };\nconst config = { ...defaults, ...userPref };\nconsole.log(config); // { theme: "dark", lang: "ko", size: 14 }', feedback: { perfect: '객체 스프레드와 오버라이드를 완벽히 이해!', good: '잘했어요!', partial: '나중에 오는 객체가 앞의 것을 덮어써요.', wrong: '{ ...obj1, ...obj2 } 형태입니다.' } },
            { id: 'c4', title: '불변성 유지 업데이트', description: 'Spread로 원본을 변경하지 않고 업데이트하세요.', difficulty: 'medium', hints: ['{...obj, key: newValue}'], estimatedMinutes: 7, starterCode: 'const user = { name: "홍길동", age: 15, level: 1 };\n// 원본 변경 없이 level만 2로 업데이트\nconst updated = \nconsole.log(user.level, updated.level);', solution: 'const user = { name: "홍길동", age: 15, level: 1 };\nconst updated = { ...user, level: 2 };\nconsole.log(user.level, updated.level); // 1 2', feedback: { perfect: '불변성 유지 패턴 완벽!', good: '좋아요!', partial: '{ ...obj, key: newValue }를 사용하세요.', wrong: '스프레드 후 바꿀 속성을 덮어씁니다.' } },
            { id: 'c5', title: '배열 요소 추가/제거', description: 'Spread로 배열 요소를 불변적으로 추가/제거하세요.', difficulty: 'hard', hints: ['추가: [...arr, newItem]', '제거: arr.filter()와 조합'], estimatedMinutes: 10, starterCode: 'const todos = ["공부", "운동", "독서"];\n// "코딩"을 맨 앞에 추가 (원본 변경 없이)\nconst added = \n// "운동"을 제거 (원본 변경 없이)\nconst removed = \nconsole.log(added);\nconsole.log(removed);', solution: 'const todos = ["공부", "운동", "독서"];\nconst added = ["코딩", ...todos];\nconst removed = todos.filter(t => t !== "운동");\nconsole.log(added); // ["코딩", "공부", "운동", "독서"]\nconsole.log(removed); // ["공부", "독서"]', feedback: { perfect: '불변 배열 조작을 완벽히 이해했어요!', good: '잘했어요!', partial: 'filter로 제거, spread로 추가하세요.', wrong: '["새요소", ...배열]로 앞에 추가합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 9: Rest 파라미터
        {
          id: 'w42-m9',
          title: 'Rest로 가변 인자 받기',
          description: '...연산자로 여러 개의 인자를 배열로 받아요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'Rest 파라미터',
          conceptExplanation: 'Rest 파라미터(...)는 함수 매개변수에서 사용되며, 여러 개의 인자를 하나의 배열로 모아줘요. 인자의 개수가 정해지지 않은 함수를 만들 때 유용합니다. Spread는 펼치고, Rest는 모으는 역할을 해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'Rest 파라미터로 가변 인자를 받을 수 있다',
            'Rest 파라미터를 배열 메서드와 함께 사용할 수 있다',
            'Spread와 Rest의 차이를 이해할 수 있다'
          ],
          realWorldExample: '여러 숫자의 합계, 최댓값, 평균을 구하는 함수 등에 사용해요!',
          starterCode: `// 모든 인자를 더하는 함수를 작성하세요
function sum(...numbers) {
  // numbers 배열의 모든 값을 더하기

}

// 테스트
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15`,
          solution: `function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));`,
          hints: [
            '💡 function sum(...numbers)로 모든 인자를 배열로 받아요',
            '💡 numbers는 일반 배열이므로 reduce를 사용할 수 있어요',
            '💡 Rest는 항상 마지막 매개변수여야 해요',
            '💡 인자가 몇 개든 상관없이 작동해요'
          ],
          testCases: [
            {
              input: '1, 2, 3',
              expectedOutput: '6',
              description: '1+2+3 = 6'
            },
            {
              input: '1, 2, 3, 4, 5',
              expectedOutput: '15',
              description: '인자 개수가 달라도 작동'
            }
          ],
          challenges: [
            { id: 'c1', title: '합계 함수', description: 'Rest 파라미터로 여러 숫자의 합계를 구하세요.', difficulty: 'easy', hints: ['function sum(...nums)'], estimatedMinutes: 3, starterCode: '// 몇 개든 받을 수 있는 합계 함수\nfunction sum(/* rest 파라미터 */) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\nconsole.log(sum(10, 20, 30, 40)); // 100', solution: 'function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\nconsole.log(sum(10, 20, 30, 40)); // 100', feedback: { perfect: 'Rest 파라미터 완벽!', good: '좋아요!', partial: '...nums를 매개변수에 쓰세요.', wrong: 'function fn(...args) 형태입니다.' } },
            { id: 'c2', title: '첫 요소 분리', description: 'Rest로 첫 요소와 나머지를 분리하세요.', difficulty: 'easy', hints: ['const [first, ...rest] = arr'], estimatedMinutes: 3, starterCode: 'const scores = [95, 82, 78, 90, 88];\n// 첫 번째와 나머지 분리\nconst [] = scores;\nconsole.log("최고점:", best);\nconsole.log("나머지:", others);', solution: 'const scores = [95, 82, 78, 90, 88];\nconst [best, ...others] = scores;\nconsole.log("최고점:", best);\nconsole.log("나머지:", others);', feedback: { perfect: '배열 Rest 완벽!', good: '좋아요!', partial: '[first, ...rest] 패턴을 사용하세요.', wrong: 'const [a, ...b] = array 형태입니다.' } },
            { id: 'c3', title: '객체 나머지 속성', description: 'Rest로 특정 속성을 제외한 나머지를 모으세요.', difficulty: 'medium', hints: ['const { id, ...data } = obj'], estimatedMinutes: 5, starterCode: 'const response = { id: 1, name: "홍길동", age: 15, email: "test@test.com" };\n// id를 제외한 나머지를 data로 모으기\nconst { } = response;\nconsole.log("ID:", id);\nconsole.log("데이터:", data);', solution: 'const response = { id: 1, name: "홍길동", age: 15, email: "test@test.com" };\nconst { id, ...data } = response;\nconsole.log("ID:", id);\nconsole.log("데이터:", data);', feedback: { perfect: '객체 Rest 패턴 완벽!', good: '좋아요!', partial: '{ 제외할키, ...나머지 } 형태를 사용하세요.', wrong: 'const { key, ...rest } = obj 형태입니다.' } },
            { id: 'c4', title: '첫 인자 + 나머지', description: 'Rest로 첫 번째 인자와 나머지를 분리하는 함수를 만드세요.', difficulty: 'medium', hints: ['function fn(first, ...rest)'], estimatedMinutes: 7, starterCode: '// 첫 인자를 tag로, 나머지를 items로 받는 함수\nfunction createList(/* 매개변수 */) {\n  console.log("<" + tag + ">");\n  items.forEach(item => console.log("  <li>" + item + "</li>"));\n  console.log("</" + tag + ">");\n}\ncreateList("ul", "사과", "바나나", "딸기");', solution: 'function createList(tag, ...items) {\n  console.log("<" + tag + ">");\n  items.forEach(item => console.log("  <li>" + item + "</li>"));\n  console.log("</" + tag + ">");\n}\ncreateList("ul", "사과", "바나나", "딸기");', feedback: { perfect: '첫 인자 + Rest 조합 완벽!', good: '잘했어요!', partial: '(tag, ...items) 형태를 사용하세요.', wrong: 'function fn(first, ...rest) 형태입니다.' } },
            { id: 'c5', title: 'Rest + Spread 조합', description: 'Rest로 받고 Spread로 전달하는 패턴을 구현하세요.', difficulty: 'hard', hints: ['...로 받아서 ...로 전달'], estimatedMinutes: 10, starterCode: '// wrapper: 로그를 남기고 원래 함수 호출\nfunction withLog(fn, /* 나머지 인자들 */) {\n  console.log("호출:", fn.name, args);\n  return fn(/* args를 spread로 전달 */);\n}\nfunction add(a, b) { return a + b; }\nconsole.log(withLog(add, 3, 5)); // 호출: add [3,5] → 8', solution: 'function withLog(fn, ...args) {\n  console.log("호출:", fn.name, args);\n  return fn(...args);\n}\nfunction add(a, b) { return a + b; }\nconsole.log(withLog(add, 3, 5)); // 8', feedback: { perfect: 'Rest+Spread 고급 패턴 완벽!', good: '잘했어요!', partial: 'fn(...args)로 스프레드 전달하세요.', wrong: '...args로 모아서 fn(...args)로 전달합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 10: JSON 다루기
        {
          id: 'w42-m10',
          title: 'JSON으로 데이터 주고받기',
          description: 'JSON 문자열과 객체를 변환해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'JSON',
          conceptExplanation: 'JSON(JavaScript Object Notation)은 데이터를 저장하고 전송하는 표준 형식이에요. JavaScript 객체와 비슷하지만 문자열 형태입니다. JSON.stringify()로 객체를 문자열로, JSON.parse()로 문자열을 객체로 변환할 수 있어요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'JSON.stringify()로 객체를 문자열로 변환할 수 있다',
            'JSON.parse()로 문자열을 객체로 변환할 수 있다',
            'JSON의 사용 사례를 이해할 수 있다'
          ],
          realWorldExample: 'API 데이터 송수신, 로컬 스토리지 저장, 설정 파일 등에 JSON을 사용해요!',
          starterCode: `// 객체를 JSON 문자열로 변환하고 다시 객체로 복원하세요
function saveAndLoad(user) {
  // 1. 객체를 JSON 문자열로 변환
  const jsonString =

  console.log("저장된 JSON:", jsonString);

  // 2. JSON 문자열을 다시 객체로 변환
  const loadedUser =

  return loadedUser;
}

// 테스트
const user = { name: "박코딩", age: 14 };
const result = saveAndLoad(user);
console.log(result); // { name: "박코딩", age: 14 }`,
          solution: `function saveAndLoad(user) {
  const jsonString = JSON.stringify(user);
  console.log("저장된 JSON:", jsonString);

  const loadedUser = JSON.parse(jsonString);
  return loadedUser;
}

const user = { name: "박코딩", age: 14 };
const result = saveAndLoad(user);
console.log(result);`,
          hints: [
            '💡 JSON.stringify(객체)로 문자열로 변환해요',
            '💡 JSON.parse(문자열)로 객체로 변환해요',
            '💡 JSON은 큰따옴표만 사용해요',
            '💡 함수는 JSON으로 변환할 수 없어요'
          ],
          testCases: [
            {
              input: '{ name: "박코딩", age: 14 }',
              expectedOutput: '{ name: "박코딩", age: 14 }',
              description: '객체가 JSON을 거쳐 복원됨'
            }
          ],
          challenges: [
            { id: 'c1', title: 'JSON.stringify()', description: '객체를 JSON 문자열로 변환하세요.', difficulty: 'easy', hints: ['JSON.stringify(obj)'], estimatedMinutes: 3, starterCode: 'const data = { name: "홍길동", age: 15, skills: ["JS", "Python"] };\n// JSON 문자열로 변환\nconst json = \nconsole.log(json);\nconsole.log(typeof json);', solution: 'const data = { name: "홍길동", age: 15, skills: ["JS", "Python"] };\nconst json = JSON.stringify(data);\nconsole.log(json);\nconsole.log(typeof json); // "string"', feedback: { perfect: 'stringify 완벽!', good: '좋아요!', partial: 'JSON.stringify(객체)를 사용하세요.', wrong: 'JSON.stringify(data)로 문자열로 변환합니다.' } },
            { id: 'c2', title: 'JSON.parse()', description: 'JSON 문자열을 객체로 변환하세요.', difficulty: 'easy', hints: ['JSON.parse(str)'], estimatedMinutes: 3, starterCode: 'const jsonStr = \'{"name":"김철수","score":95}\';\n// 객체로 변환\nconst obj = \nconsole.log(obj.name, obj.score);', solution: 'const jsonStr = \'{"name":"김철수","score":95}\';\nconst obj = JSON.parse(jsonStr);\nconsole.log(obj.name, obj.score); // 김철수 95', feedback: { perfect: 'parse 완벽!', good: '좋아요!', partial: 'JSON.parse(문자열)을 사용하세요.', wrong: 'JSON.parse(jsonStr)로 객체로 변환합니다.' } },
            { id: 'c3', title: 'JSON 포맷팅', description: 'JSON.stringify에 들여쓰기 옵션을 사용하세요.', difficulty: 'medium', hints: ['JSON.stringify(obj, null, 2)'], estimatedMinutes: 4, starterCode: 'const config = { theme: "dark", font: { size: 14, family: "Arial" } };\n// 2칸 들여쓰기로 보기 좋게 출력\nconsole.log(JSON.stringify());', solution: 'const config = { theme: "dark", font: { size: 14, family: "Arial" } };\nconsole.log(JSON.stringify(config, null, 2));', feedback: { perfect: 'JSON 포맷팅 완벽!', good: '좋아요!', partial: '세 번째 인자로 들여쓰기를 지정하세요.', wrong: 'JSON.stringify(obj, null, 2)로 포맷합니다.' } },
            { id: 'c4', title: '깊은 복사', description: 'JSON을 활용한 객체 깊은 복사를 하세요.', difficulty: 'medium', hints: ['JSON.parse(JSON.stringify(obj))'], estimatedMinutes: 6, starterCode: 'const original = { name: "A", scores: [90, 85] };\n// 깊은 복사 (JSON 활용)\nconst deep = \ndeep.scores.push(95);\nconsole.log(original.scores); // [90, 85] (변경 없어야 함)\nconsole.log(deep.scores); // [90, 85, 95]', solution: 'const original = { name: "A", scores: [90, 85] };\nconst deep = JSON.parse(JSON.stringify(original));\ndeep.scores.push(95);\nconsole.log(original.scores); // [90, 85]\nconsole.log(deep.scores); // [90, 85, 95]', feedback: { perfect: 'JSON 깊은 복사 완벽!', good: '잘했어요!', partial: 'stringify 후 parse하면 깊은 복사예요.', wrong: 'JSON.parse(JSON.stringify(obj))를 사용하세요.' } },
            { id: 'c5', title: 'localStorage 데이터 관리', description: 'JSON으로 localStorage에 데이터를 저장/불러오기하세요.', difficulty: 'hard', hints: ['저장: JSON.stringify', '불러오기: JSON.parse'], estimatedMinutes: 10, starterCode: '// localStorage에 배열 저장/불러오기\nfunction saveTodos(todos) {\n  // JSON으로 변환하여 저장\n}\nfunction loadTodos() {\n  // 저장된 JSON을 배열로 변환하여 반환\n  // 없으면 빈 배열 반환\n}\nconst todos = ["공부", "운동"];\nsaveTodos(todos);\nconsole.log(loadTodos());', solution: 'function saveTodos(todos) {\n  localStorage.setItem("todos", JSON.stringify(todos));\n}\nfunction loadTodos() {\n  const saved = localStorage.getItem("todos");\n  return saved ? JSON.parse(saved) : [];\n}\nconst todos = ["공부", "운동"];\nsaveTodos(todos);\nconsole.log(loadTodos());', feedback: { perfect: 'localStorage + JSON 완벽!', good: '잘했어요!', partial: 'setItem에서 stringify, getItem에서 parse하세요.', wrong: 'JSON.stringify로 저장, JSON.parse로 불러옵니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 11: 배열 고급 메서드 - find
        {
          id: 'w42-m11',
          title: 'find로 조건에 맞는 첫 요소 찾기',
          description: 'find 메서드로 원하는 요소를 빠르게 찾아요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 30,
          concept: 'Array.find()',
          conceptExplanation: 'find 메서드는 조건을 만족하는 첫 번째 요소를 반환해요. filter는 모든 요소를 찾지만, find는 첫 번째만 찾고 즉시 멈춥니다. 조건을 만족하는 요소가 없으면 undefined를 반환해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'find 메서드로 조건을 만족하는 요소를 찾을 수 있다',
            'find와 filter의 차이를 이해할 수 있다',
            'undefined 처리를 할 수 있다'
          ],
          realWorldExample: '사용자 목록에서 특정 ID의 사용자 찾기, 상품 목록에서 이름으로 검색하기 등에 사용해요!',
          starterCode: `// 배열에서 짝수를 찾는 함수를 작성하세요
function findFirstEven(numbers) {
  // find로 첫 번째 짝수 찾기

}

// 테스트
console.log(findFirstEven([1, 3, 4, 5, 6])); // 4
console.log(findFirstEven([1, 3, 5])); // undefined`,
          solution: `function findFirstEven(numbers) {
  return numbers.find(num => num % 2 === 0);
}

console.log(findFirstEven([1, 3, 4, 5, 6]));
console.log(findFirstEven([1, 3, 5]));`,
          hints: [
            '💡 find는 배열.find(조건함수) 형태예요',
            '💡 조건을 만족하는 첫 요소를 반환해요',
            '💡 없으면 undefined를 반환해요',
            '💡 짝수는 num % 2 === 0으로 확인'
          ],
          testCases: [
            {
              input: '[1, 3, 4, 5, 6]',
              expectedOutput: '4',
              description: '첫 번째 짝수는 4'
            },
            {
              input: '[1, 3, 5]',
              expectedOutput: 'undefined',
              description: '짝수가 없으면 undefined'
            }
          ],
          challenges: [
            { id: 'c1', title: '요소 찾기', description: 'find로 조건에 맞는 첫 요소를 찾으세요.', difficulty: 'easy', hints: ['arr.find(x => 조건)'], estimatedMinutes: 3, starterCode: 'const nums = [3, 7, 2, 9, 4, 1];\n// 5보다 큰 첫 번째 숫자 찾기\nconst found = \nconsole.log(found);', solution: 'const nums = [3, 7, 2, 9, 4, 1];\nconst found = nums.find(n => n > 5);\nconsole.log(found); // 7', feedback: { perfect: 'find 완벽!', good: '좋아요!', partial: '조건을 콜백으로 전달하세요.', wrong: 'arr.find(x => x > 5) 형태입니다.' } },
            { id: 'c2', title: 'ID로 객체 찾기', description: 'find로 특정 id의 객체를 찾으세요.', difficulty: 'easy', hints: ['arr.find(item => item.id === 찾을값)'], estimatedMinutes: 4, starterCode: 'const users = [\n  { id: 1, name: "김철수" },\n  { id: 2, name: "이영희" },\n  { id: 3, name: "박민수" }\n];\n// id가 2인 사용자 찾기\nconst user = \nconsole.log(user.name);', solution: 'const users = [\n  { id: 1, name: "김철수" },\n  { id: 2, name: "이영희" },\n  { id: 3, name: "박민수" }\n];\nconst user = users.find(u => u.id === 2);\nconsole.log(user.name); // 이영희', feedback: { perfect: 'ID 검색 완벽!', good: '좋아요!', partial: 'u => u.id === 2 형태를 사용하세요.', wrong: 'arr.find(item => item.id === value)입니다.' } },
            { id: 'c3', title: 'findIndex 사용', description: 'findIndex로 인덱스를 찾으세요.', difficulty: 'medium', hints: ['findIndex는 인덱스 반환, 없으면 -1'], estimatedMinutes: 5, starterCode: 'const words = ["apple", "banana", "cherry", "date"];\n// 5글자 이상인 첫 단어의 인덱스\nconst idx = \nconsole.log(idx, words[idx]);', solution: 'const words = ["apple", "banana", "cherry", "date"];\nconst idx = words.findIndex(w => w.length >= 5);\nconsole.log(idx, words[idx]); // 0 apple', feedback: { perfect: 'findIndex 완벽!', good: '좋아요!', partial: 'findIndex(조건)을 사용하세요.', wrong: 'arr.findIndex(x => 조건) 형태입니다.' } },
            { id: 'c4', title: '상품 검색', description: 'find로 상품을 이름 또는 카테고리로 검색하세요.', difficulty: 'medium', hints: ['includes()로 부분 일치 검색'], estimatedMinutes: 7, starterCode: 'const products = [\n  { name: "노트북", price: 1200000, category: "전자제품" },\n  { name: "마우스", price: 35000, category: "전자제품" },\n  { name: "책상", price: 250000, category: "가구" }\n];\n// 이름에 "노트"가 포함된 상품 찾기\nconst result = \nconsole.log(result);', solution: 'const products = [\n  { name: "노트북", price: 1200000, category: "전자제품" },\n  { name: "마우스", price: 35000, category: "전자제품" },\n  { name: "책상", price: 250000, category: "가구" }\n];\nconst result = products.find(p => p.name.includes("노트"));\nconsole.log(result);', feedback: { perfect: '상품 검색 구현 완벽!', good: '잘했어요!', partial: 'includes()로 부분 검색하세요.', wrong: 'p.name.includes("검색어")를 조건에 넣으세요.' } },
            { id: 'c5', title: 'find vs filter 비교', description: 'find와 filter의 차이를 이해하고 활용하세요.', difficulty: 'hard', hints: ['find: 첫 번째 하나만', 'filter: 모든 일치 항목'], estimatedMinutes: 10, starterCode: 'const scores = [85, 92, 78, 95, 88, 90];\n// find: 90 이상인 첫 점수\nconst first90 = \n// filter: 90 이상인 모든 점수\nconst all90 = \n// find: 정확히 100인 점수 (없음)\nconst exact100 = \nconsole.log(first90, all90, exact100);', solution: 'const scores = [85, 92, 78, 95, 88, 90];\nconst first90 = scores.find(s => s >= 90);\nconst all90 = scores.filter(s => s >= 90);\nconst exact100 = scores.find(s => s === 100);\nconsole.log(first90, all90, exact100); // 92 [92,95,90] undefined', feedback: { perfect: 'find와 filter의 차이를 완벽히 이해!', good: '잘했어요!', partial: 'find는 하나, filter는 배열 반환', wrong: 'find는 undefined, filter는 빈 배열을 반환합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 12: 배열 some/every
        {
          id: 'w42-m12',
          title: 'some과 every로 조건 검사하기',
          description: '배열의 일부 또는 전체가 조건을 만족하는지 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 30,
          concept: 'Array.some() / Array.every()',
          conceptExplanation: 'some은 하나라도 조건을 만족하면 true, every는 모두 만족해야 true를 반환해요. 배열 전체를 검사할 필요 없이 조건 만족 여부만 알고 싶을 때 유용합니다. 둘 다 boolean 값을 반환해요.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'some 메서드로 하나라도 조건을 만족하는지 확인할 수 있다',
            'every 메서드로 모두 조건을 만족하는지 확인할 수 있다',
            '두 메서드의 차이를 이해하고 적절히 사용할 수 있다'
          ],
          realWorldExample: '회원 가입 시 모든 필드가 채워졌는지(every), 장바구니에 할인 상품이 하나라도 있는지(some) 확인해요!',
          starterCode: `// 배열에 짝수가 하나라도 있는지 확인하세요
function hasEven(numbers) {
  // some을 사용하기

}

// 배열의 모든 숫자가 양수인지 확인하세요
function allPositive(numbers) {
  // every를 사용하기

}

// 테스트
console.log(hasEven([1, 3, 4])); // true
console.log(hasEven([1, 3, 5])); // false
console.log(allPositive([1, 2, 3])); // true
console.log(allPositive([1, -2, 3])); // false`,
          solution: `function hasEven(numbers) {
  return numbers.some(num => num % 2 === 0);
}

function allPositive(numbers) {
  return numbers.every(num => num > 0);
}

console.log(hasEven([1, 3, 4]));
console.log(hasEven([1, 3, 5]));
console.log(allPositive([1, 2, 3]));
console.log(allPositive([1, -2, 3]));`,
          hints: [
            '💡 some: 하나라도 true면 true',
            '💡 every: 모두 true여야 true',
            '💡 둘 다 boolean을 반환해요',
            '💡 빈 배열: some은 false, every는 true 반환'
          ],
          testCases: [
            {
              input: '[1, 3, 4] (hasEven)',
              expectedOutput: 'true',
              description: '4가 짝수이므로 true'
            },
            {
              input: '[1, 2, 3] (allPositive)',
              expectedOutput: 'true',
              description: '모두 양수이므로 true'
            }
          ],
          challenges: [
            { id: 'c1', title: 'some() 기본', description: 'some으로 하나라도 조건을 만족하는지 확인하세요.', difficulty: 'easy', hints: ['arr.some(x => 조건) → true/false'], estimatedMinutes: 3, starterCode: 'const ages = [12, 15, 8, 20, 17];\n// 성인(18세 이상)이 한 명이라도 있는지\nconst hasAdult = \nconsole.log(hasAdult);', solution: 'const ages = [12, 15, 8, 20, 17];\nconst hasAdult = ages.some(a => a >= 18);\nconsole.log(hasAdult); // true', feedback: { perfect: 'some() 완벽!', good: '좋아요!', partial: 'some(x => 조건)을 사용하세요.', wrong: 'arr.some(a => a >= 18) 형태입니다.' } },
            { id: 'c2', title: 'every() 기본', description: 'every로 모두 조건을 만족하는지 확인하세요.', difficulty: 'easy', hints: ['arr.every(x => 조건) → true/false'], estimatedMinutes: 3, starterCode: 'const scores = [85, 92, 78, 90, 88];\n// 모두 70점 이상인지\nconst allPass = \nconsole.log(allPass);', solution: 'const scores = [85, 92, 78, 90, 88];\nconst allPass = scores.every(s => s >= 70);\nconsole.log(allPass); // true', feedback: { perfect: 'every() 완벽!', good: '좋아요!', partial: 'every(x => 조건)을 사용하세요.', wrong: 'arr.every(s => s >= 70) 형태입니다.' } },
            { id: 'c3', title: '유효성 검사', description: 'every로 모든 입력값이 유효한지 검사하세요.', difficulty: 'medium', hints: ['빈 문자열 체크: str.length > 0'], estimatedMinutes: 5, starterCode: 'const fields = ["홍길동", "test@test.com", "1234"];\nconst emptyFields = ["홍길동", "", "1234"];\n// 모든 필드가 비어있지 않은지 검사\nfunction isValid(arr) {\n  return \n}\nconsole.log(isValid(fields)); // true\nconsole.log(isValid(emptyFields)); // false', solution: 'const fields = ["홍길동", "test@test.com", "1234"];\nconst emptyFields = ["홍길동", "", "1234"];\nfunction isValid(arr) {\n  return arr.every(f => f.length > 0);\n}\nconsole.log(isValid(fields)); // true\nconsole.log(isValid(emptyFields)); // false', feedback: { perfect: 'every로 유효성 검사 완벽!', good: '잘했어요!', partial: 'every로 모든 요소를 검사하세요.', wrong: 'arr.every(f => f.length > 0) 형태입니다.' } },
            { id: 'c4', title: '권한 확인', description: 'some으로 특정 권한이 있는지 확인하세요.', difficulty: 'medium', hints: ['some(r => r === "admin")'], estimatedMinutes: 6, starterCode: 'const user = { name: "김철수", roles: ["user", "editor"] };\n// admin 권한이 있는지 확인\nconst isAdmin = \n// editor 권한이 있는지 확인\nconst isEditor = \nconsole.log("Admin:", isAdmin, "Editor:", isEditor);', solution: 'const user = { name: "김철수", roles: ["user", "editor"] };\nconst isAdmin = user.roles.some(r => r === "admin");\nconst isEditor = user.roles.some(r => r === "editor");\nconsole.log("Admin:", isAdmin, "Editor:", isEditor); // false true', feedback: { perfect: '권한 확인 완벽!', good: '좋아요!', partial: 'roles.some(r => r === "권한")을 사용하세요.', wrong: 'arr.some(x => x === "값") 형태입니다.' } },
            { id: 'c5', title: 'some + every 조합', description: '복합 조건을 some과 every로 검증하세요.', difficulty: 'hard', hints: ['조건을 나눠서 각각 검증'], estimatedMinutes: 10, starterCode: 'const students = [\n  { name: "A", score: 85, attendance: 95 },\n  { name: "B", score: 45, attendance: 80 },\n  { name: "C", score: 92, attendance: 98 }\n];\n// 1. 모든 학생이 출석률 70% 이상인가?\nconst allAttend = \n// 2. 90점 이상인 학생이 있는가?\nconst hasExcellent = \n// 3. 낙제(50점 미만)인 학생이 있는가?\nconst hasFail = \nconsole.log(allAttend, hasExcellent, hasFail);', solution: 'const students = [\n  { name: "A", score: 85, attendance: 95 },\n  { name: "B", score: 45, attendance: 80 },\n  { name: "C", score: 92, attendance: 98 }\n];\nconst allAttend = students.every(s => s.attendance >= 70);\nconst hasExcellent = students.some(s => s.score >= 90);\nconst hasFail = students.some(s => s.score < 50);\nconsole.log(allAttend, hasExcellent, hasFail); // true true true', feedback: { perfect: 'some/every 조합을 완벽히 활용했어요!', good: '잘했어요!', partial: 'every와 some을 적절히 선택하세요.', wrong: '모두 = every, 하나라도 = some입니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 13: 객체 배열 다루기
        {
          id: 'w42-m13',
          title: '객체 배열에서 데이터 추출하기',
          description: '여러 객체가 담긴 배열을 효율적으로 처리해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 120,
          estimatedMinutes: 40,
          concept: '객체 배열 처리',
          conceptExplanation: '실제 웹 개발에서는 객체 배열을 많이 다뤄요. 사용자 목록, 상품 목록 등이 객체 배열 형태예요. map, filter, reduce를 조합하여 객체 배열에서 원하는 정보를 추출하고 가공할 수 있습니다.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '객체 배열에서 특정 속성만 추출할 수 있다',
            '조건에 맞는 객체만 필터링할 수 있다',
            '객체 배열의 통계를 계산할 수 있다'
          ],
          realWorldExample: 'E-커머스에서 카테고리별 상품 필터링, 가격순 정렬, 평균 가격 계산 등에 사용해요!',
          starterCode: `// 상품 목록에서 가격이 10000원 이상인 상품의 이름만 추출하세요
function getExpensiveProductNames(products) {
  // filter와 map을 조합하기

}

// 테스트
const products = [
  { name: "노트북", price: 50000 },
  { name: "마우스", price: 5000 },
  { name: "키보드", price: 15000 },
  { name: "USB", price: 3000 }
];

console.log(getExpensiveProductNames(products));
// ["노트북", "키보드"]`,
          solution: `function getExpensiveProductNames(products) {
  return products
    .filter(product => product.price >= 10000)
    .map(product => product.name);
}

const products = [
  { name: "노트북", price: 50000 },
  { name: "마우스", price: 5000 },
  { name: "키보드", price: 15000 },
  { name: "USB", price: 3000 }
];

console.log(getExpensiveProductNames(products));`,
          hints: [
            '💡 먼저 filter로 price >= 10000인 상품 선택',
            '💡 그 다음 map으로 product.name만 추출',
            '💡 product => product.price로 속성 접근',
            '💡 체이닝으로 간결하게 작성'
          ],
          testCases: [
            {
              input: 'products 배열',
              expectedOutput: '["노트북", "키보드"]',
              description: '10000원 이상 상품 이름'
            }
          ],
          challenges: [
            { id: 'c1', title: '속성 추출', description: 'map으로 객체 배열에서 특정 속성을 추출하세요.', difficulty: 'easy', hints: ['arr.map(item => item.key)'], estimatedMinutes: 3, starterCode: 'const users = [\n  { name: "김철수", email: "cs@test.com" },\n  { name: "이영희", email: "yh@test.com" }\n];\n// 이름만 추출\nconst names = \nconsole.log(names);', solution: 'const users = [\n  { name: "김철수", email: "cs@test.com" },\n  { name: "이영희", email: "yh@test.com" }\n];\nconst names = users.map(u => u.name);\nconsole.log(names); // ["김철수", "이영희"]', feedback: { perfect: '속성 추출 완벽!', good: '좋아요!', partial: 'map(u => u.name)을 사용하세요.', wrong: 'arr.map(item => item.속성) 형태입니다.' } },
            { id: 'c2', title: '조건부 필터', description: 'filter로 특정 조건의 객체만 골라내세요.', difficulty: 'easy', hints: ['arr.filter(item => item.key > value)'], estimatedMinutes: 4, starterCode: 'const products = [\n  { name: "노트북", price: 1200000 },\n  { name: "마우스", price: 35000 },\n  { name: "키보드", price: 89000 }\n];\n// 10만원 이하 상품만\nconst cheap = \nconsole.log(cheap);', solution: 'const products = [\n  { name: "노트북", price: 1200000 },\n  { name: "마우스", price: 35000 },\n  { name: "키보드", price: 89000 }\n];\nconst cheap = products.filter(p => p.price <= 100000);\nconsole.log(cheap);', feedback: { perfect: '조건부 필터 완벽!', good: '좋아요!', partial: 'filter(p => p.price <= 100000)을 사용하세요.', wrong: 'arr.filter(item => 조건) 형태입니다.' } },
            { id: 'c3', title: '정렬하기', description: 'sort로 객체 배열을 속성 기준으로 정렬하세요.', difficulty: 'medium', hints: ['arr.sort((a, b) => a.key - b.key)'], estimatedMinutes: 5, starterCode: 'const students = [\n  { name: "A", score: 78 },\n  { name: "B", score: 92 },\n  { name: "C", score: 85 }\n];\n// 점수 내림차순 정렬\nstudents.sort();\nconsole.log(students);', solution: 'const students = [\n  { name: "A", score: 78 },\n  { name: "B", score: 92 },\n  { name: "C", score: 85 }\n];\nstudents.sort((a, b) => b.score - a.score);\nconsole.log(students);', feedback: { perfect: '객체 정렬 완벽!', good: '잘했어요!', partial: 'sort((a, b) => b.score - a.score)를 사용하세요.', wrong: '비교 함수에서 속성끼리 빼기합니다.' } },
            { id: 'c4', title: '그룹핑', description: 'reduce로 객체 배열을 카테고리별로 그룹핑하세요.', difficulty: 'hard', hints: ['reduce로 객체에 카테고리별 배열 만들기'], estimatedMinutes: 10, starterCode: 'const items = [\n  { name: "사과", category: "과일" },\n  { name: "당근", category: "채소" },\n  { name: "바나나", category: "과일" },\n  { name: "양파", category: "채소" }\n];\n// 카테고리별 그룹핑\nconst grouped = items.reduce((acc, item) => {\n  // 여기에 코드\n  return acc;\n}, {});\nconsole.log(grouped);', solution: 'const items = [\n  { name: "사과", category: "과일" },\n  { name: "당근", category: "채소" },\n  { name: "바나나", category: "과일" },\n  { name: "양파", category: "채소" }\n];\nconst grouped = items.reduce((acc, item) => {\n  if (!acc[item.category]) acc[item.category] = [];\n  acc[item.category].push(item.name);\n  return acc;\n}, {});\nconsole.log(grouped);', feedback: { perfect: '그룹핑을 완벽하게 구현!', good: '잘했어요!', partial: '카테고리 키로 배열을 만드세요.', wrong: 'acc[category] = [] 후 push하세요.' } },
            { id: 'c5', title: '통계 계산', description: '객체 배열에서 평균, 최대, 최소를 구하세요.', difficulty: 'hard', hints: ['reduce로 합계 → 평균', 'Math.max(...arr)'], estimatedMinutes: 10, starterCode: 'const sales = [\n  { month: "1월", amount: 5000000 },\n  { month: "2월", amount: 3500000 },\n  { month: "3월", amount: 7200000 }\n];\n// 총 매출, 평균, 최고/최저 월\nconst total = \nconst avg = \nconst best = \nconsole.log("총:", total, "평균:", avg, "최고:", best.month);', solution: 'const sales = [\n  { month: "1월", amount: 5000000 },\n  { month: "2월", amount: 3500000 },\n  { month: "3월", amount: 7200000 }\n];\nconst total = sales.reduce((sum, s) => sum + s.amount, 0);\nconst avg = Math.round(total / sales.length);\nconst best = sales.reduce((max, s) => s.amount > max.amount ? s : max);\nconsole.log("총:", total, "평균:", avg, "최고:", best.month);', feedback: { perfect: '통계 계산을 완벽하게 구현!', good: '잘했어요!', partial: 'reduce로 합계와 최대를 구하세요.', wrong: 'reduce((sum, item) => sum + item.amount, 0)입니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 14: 객체 배열 정렬
        {
          id: 'w42-m14',
          title: '객체 배열 정렬하기',
          description: 'sort 메서드로 객체 배열을 원하는 순서로 정렬해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 120,
          estimatedMinutes: 40,
          concept: 'Array.sort()',
          conceptExplanation: 'sort 메서드는 배열을 정렬해요. 비교 함수를 제공하면 객체 배열을 특정 속성 기준으로 정렬할 수 있습니다. (a, b) => a - b는 오름차순, (a, b) => b - a는 내림차순으로 정렬해요. 주의: sort는 원본 배열을 변경합니다!',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            'sort 메서드로 배열을 정렬할 수 있다',
            '비교 함수를 작성하여 객체 배열을 정렬할 수 있다',
            '오름차순과 내림차순을 구분할 수 있다'
          ],
          realWorldExample: '상품을 가격순/인기순으로 정렬, 게시글을 날짜순으로 정렬, 랭킹 시스템 등에 사용해요!',
          starterCode: `// 학생들을 점수가 높은 순서대로 정렬하세요
function sortByScore(students) {
  // sort를 사용하여 내림차순 정렬
  // 원본을 바꾸지 않으려면 [...students]로 복사 후 정렬

}

// 테스트
const students = [
  { name: "철수", score: 85 },
  { name: "영희", score: 95 },
  { name: "민수", score: 78 }
];

console.log(sortByScore(students));
// [{ name: "영희", score: 95 }, { name: "철수", score: 85 }, { name: "민수", score: 78 }]`,
          solution: `function sortByScore(students) {
  return [...students].sort((a, b) => b.score - a.score);
}

const students = [
  { name: "철수", score: 85 },
  { name: "영희", score: 95 },
  { name: "민수", score: 78 }
];

console.log(sortByScore(students));`,
          hints: [
            '💡 [...students]로 배열을 복사해요',
            '💡 .sort((a, b) => b.score - a.score)로 내림차순',
            '💡 a - b는 오름차순, b - a는 내림차순',
            '💡 sort는 원본을 변경하니 주의!'
          ],
          testCases: [
            {
              input: 'students 배열',
              expectedOutput: '[영희(95), 철수(85), 민수(78)]',
              description: '점수 높은 순 정렬'
            }
          ],
          challenges: [
            { id: 'c1', title: '숫자 정렬', description: '비교 함수로 숫자를 올바르게 정렬하세요.', difficulty: 'easy', hints: ['sort((a, b) => a - b) 오름차순'], estimatedMinutes: 3, starterCode: 'const nums = [10, 5, 8, 1, 7, 3];\n// 오름차순 정렬\nnums.sort();\nconsole.log(nums);\n// 내림차순 정렬\nnums.sort();\nconsole.log(nums);', solution: 'const nums = [10, 5, 8, 1, 7, 3];\nnums.sort((a, b) => a - b);\nconsole.log(nums); // [1, 3, 5, 7, 8, 10]\nnums.sort((a, b) => b - a);\nconsole.log(nums); // [10, 8, 7, 5, 3, 1]', feedback: { perfect: '숫자 정렬 완벽!', good: '좋아요!', partial: '비교 함수를 사용하세요.', wrong: 'sort((a, b) => a - b) 형태입니다.' } },
            { id: 'c2', title: '문자열 정렬', description: '한글/영어 문자열을 정렬하세요.', difficulty: 'easy', hints: ['localeCompare()로 한글 정렬'], estimatedMinutes: 4, starterCode: 'const names = ["다영", "가영", "나영", "라영"];\n// 한글 가나다순 정렬\nnames.sort();\nconsole.log(names);', solution: 'const names = ["다영", "가영", "나영", "라영"];\nnames.sort((a, b) => a.localeCompare(b));\nconsole.log(names); // ["가영", "나영", "다영", "라영"]', feedback: { perfect: '문자열 정렬 완벽!', good: '좋아요!', partial: 'localeCompare를 사용하세요.', wrong: 'a.localeCompare(b)로 비교합니다.' } },
            { id: 'c3', title: '객체 정렬', description: '객체 배열을 특정 속성으로 정렬하세요.', difficulty: 'medium', hints: ['sort((a, b) => a.속성 - b.속성)'], estimatedMinutes: 5, starterCode: 'const students = [\n  { name: "김철수", score: 78 },\n  { name: "이영희", score: 95 },\n  { name: "박민수", score: 82 }\n];\n// 점수 높은순으로 정렬\nstudents.sort();\nstudents.forEach(s => console.log(s.name + ": " + s.score));', solution: 'const students = [\n  { name: "김철수", score: 78 },\n  { name: "이영희", score: 95 },\n  { name: "박민수", score: 82 }\n];\nstudents.sort((a, b) => b.score - a.score);\nstudents.forEach(s => console.log(s.name + ": " + s.score));', feedback: { perfect: '객체 속성 정렬 완벽!', good: '잘했어요!', partial: 'b.score - a.score로 내림차순', wrong: 'sort((a, b) => b.score - a.score)입니다.' } },
            { id: 'c4', title: '다중 기준 정렬', description: '1차: 학년, 2차: 이름순으로 정렬하세요.', difficulty: 'medium', hints: ['1차 기준이 같으면 2차로 비교'], estimatedMinutes: 8, starterCode: 'const students = [\n  { name: "김철수", grade: 2 },\n  { name: "이영희", grade: 1 },\n  { name: "가나다", grade: 2 },\n  { name: "박민수", grade: 1 }\n];\n// 학년 오름차순, 같은 학년이면 이름순\nstudents.sort();\nstudents.forEach(s => console.log(s.grade + "학년 " + s.name));', solution: 'const students = [\n  { name: "김철수", grade: 2 },\n  { name: "이영희", grade: 1 },\n  { name: "가나다", grade: 2 },\n  { name: "박민수", grade: 1 }\n];\nstudents.sort((a, b) => {\n  if (a.grade !== b.grade) return a.grade - b.grade;\n  return a.name.localeCompare(b.name);\n});\nstudents.forEach(s => console.log(s.grade + "학년 " + s.name));', feedback: { perfect: '다중 기준 정렬 완벽!', good: '잘했어요!', partial: '학년이 같으면 이름으로 비교하세요.', wrong: '먼저 grade로 비교, 같으면 name으로 비교합니다.' } },
            { id: 'c5', title: '커스텀 우선순위 정렬', description: '특정 우선순위 기준으로 정렬하세요.', difficulty: 'hard', hints: ['우선순위 맵을 만들어 참조'], estimatedMinutes: 10, starterCode: 'const tasks = [\n  { title: "보고서", priority: "low" },\n  { title: "버그수정", priority: "high" },\n  { title: "회의준비", priority: "medium" },\n  { title: "배포", priority: "high" }\n];\n// high > medium > low 순서로 정렬\nconst order = { high: 0, medium: 1, low: 2 };\ntasks.sort();\ntasks.forEach(t => console.log(t.priority + " - " + t.title));', solution: 'const tasks = [\n  { title: "보고서", priority: "low" },\n  { title: "버그수정", priority: "high" },\n  { title: "회의준비", priority: "medium" },\n  { title: "배포", priority: "high" }\n];\nconst order = { high: 0, medium: 1, low: 2 };\ntasks.sort((a, b) => order[a.priority] - order[b.priority]);\ntasks.forEach(t => console.log(t.priority + " - " + t.title));', feedback: { perfect: '커스텀 우선순위 정렬 완벽!', good: '잘했어요!', partial: 'order 맵을 비교 함수에서 참조하세요.', wrong: 'order[a.priority] - order[b.priority]로 비교합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 15: 종합 프로젝트 - 학생 성적 관리
        {
          id: 'w42-m15',
          title: '학생 성적 관리 시스템',
          description: '배열과 객체 메서드를 종합하여 성적 통계를 계산해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 150,
          estimatedMinutes: 50,
          concept: '배열/객체 종합 활용',
          conceptExplanation: '지금까지 배운 map, filter, reduce, sort 등을 조합하면 복잡한 데이터 처리를 간결하게 할 수 있어요. 실무에서는 이런 메서드들을 체이닝하여 데이터를 분석하고 가공합니다.',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '여러 배열 메서드를 조합하여 복잡한 작업을 수행할 수 있다',
            '데이터 분석과 통계 계산을 할 수 있다',
            '실용적인 프로그램을 작성할 수 있다'
          ],
          realWorldExample: '학교 성적 관리, 매출 분석, 사용자 통계 등 실무에서 자주 사용하는 패턴이에요!',
          starterCode: `// 학생 성적 분석 시스템
function analyzeScores(students) {
  // 1. 80점 이상인 학생들의 평균 점수 구하기
  const highScorers =
  const average =

  // 2. 가장 높은 점수를 받은 학생 찾기
  const topStudent =

  return {
    average: average,
    topStudent: topStudent.name,
    topScore: topStudent.score
  };
}

// 테스트
const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
  { name: "정수지", score: 88 }
];

console.log(analyzeScores(students));
// { average: 88.33, topStudent: "이영희", topScore: 92 }`,
          solution: `function analyzeScores(students) {
  const highScorers = students.filter(s => s.score >= 80);
  const average = highScorers.reduce((sum, s) => sum + s.score, 0) / highScorers.length;

  const topStudent = students.reduce((max, s) =>
    s.score > max.score ? s : max
  );

  return {
    average: Math.round(average * 100) / 100,
    topStudent: topStudent.name,
    topScore: topStudent.score
  };
}

const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
  { name: "정수지", score: 88 }
];

console.log(analyzeScores(students));`,
          hints: [
            '💡 filter로 80점 이상만 선택',
            '💡 reduce로 합계를 구하고 길이로 나눠요',
            '💡 reduce로 최댓값도 찾을 수 있어요',
            '💡 Math.round로 소수점 반올림'
          ],
          testCases: [
            {
              input: 'students 배열',
              expectedOutput: '{ average: 88.33, topStudent: "이영희", topScore: 92 }',
              description: '올바른 통계 계산'
            }
          ],
          challenges: [
            { id: 'c1', title: '데이터 변환', description: 'map으로 객체 형태를 변환하세요.', difficulty: 'easy', hints: ['map(item => ({ ...item, newKey: value }))'], estimatedMinutes: 4, starterCode: 'const users = [\n  { firstName: "철수", lastName: "김" },\n  { firstName: "영희", lastName: "이" }\n];\n// fullName 속성 추가\nconst result = users.map(u => ({\n  // 여기에 코드\n}));\nconsole.log(result);', solution: 'const users = [\n  { firstName: "철수", lastName: "김" },\n  { firstName: "영희", lastName: "이" }\n];\nconst result = users.map(u => ({\n  ...u,\n  fullName: u.lastName + u.firstName\n}));\nconsole.log(result);', feedback: { perfect: '데이터 변환 완벽!', good: '좋아요!', partial: 'spread로 기존 속성을 유지하세요.', wrong: '{ ...u, fullName: 이름 } 형태입니다.' } },
            { id: 'c2', title: '필터 + 정렬', description: '조건 필터 후 정렬하세요.', difficulty: 'easy', hints: ['filter().sort() 체이닝'], estimatedMinutes: 5, starterCode: 'const products = [\n  { name: "A", price: 15000, rating: 4.5 },\n  { name: "B", price: 8000, rating: 3.8 },\n  { name: "C", price: 25000, rating: 4.9 },\n  { name: "D", price: 12000, rating: 4.2 }\n];\n// 만원 이상만 필터 후 rating 높은순\nconst result = \nconsole.log(result);', solution: 'const products = [\n  { name: "A", price: 15000, rating: 4.5 },\n  { name: "B", price: 8000, rating: 3.8 },\n  { name: "C", price: 25000, rating: 4.9 },\n  { name: "D", price: 12000, rating: 4.2 }\n];\nconst result = products\n  .filter(p => p.price >= 10000)\n  .sort((a, b) => b.rating - a.rating);\nconsole.log(result);', feedback: { perfect: '필터+정렬 체이닝 완벽!', good: '좋아요!', partial: 'filter().sort()를 체이닝하세요.', wrong: '.filter(조건).sort(비교함수)입니다.' } },
            { id: 'c3', title: '그룹 + 집계', description: 'reduce로 그룹핑하고 집계하세요.', difficulty: 'medium', hints: ['reduce로 카테고리별 합계'], estimatedMinutes: 8, starterCode: 'const sales = [\n  { category: "전자", amount: 500000 },\n  { category: "식품", amount: 150000 },\n  { category: "전자", amount: 300000 },\n  { category: "식품", amount: 200000 }\n];\n// 카테고리별 매출 합계\nconst totals = sales.reduce((acc, s) => {\n  // 여기에 코드\n  return acc;\n}, {});\nconsole.log(totals);', solution: 'const sales = [\n  { category: "전자", amount: 500000 },\n  { category: "식품", amount: 150000 },\n  { category: "전자", amount: 300000 },\n  { category: "식품", amount: 200000 }\n];\nconst totals = sales.reduce((acc, s) => {\n  acc[s.category] = (acc[s.category] || 0) + s.amount;\n  return acc;\n}, {});\nconsole.log(totals); // { 전자: 800000, 식품: 350000 }', feedback: { perfect: '그룹 집계 완벽!', good: '잘했어요!', partial: 'acc[category] = (acc[category] || 0) + amount', wrong: 'reduce로 카테고리별 합계를 누적하세요.' } },
            { id: 'c4', title: '다단계 파이프라인', description: '여러 메서드를 체이닝하여 데이터를 처리하세요.', difficulty: 'hard', hints: ['filter → map → sort → slice'], estimatedMinutes: 10, starterCode: 'const students = [\n  { name: "A", score: 85, grade: 2 },\n  { name: "B", score: 92, grade: 1 },\n  { name: "C", score: 45, grade: 2 },\n  { name: "D", score: 78, grade: 1 },\n  { name: "E", score: 95, grade: 2 }\n];\n// 60점 이상 → 등급 추가(A/B/C) → 점수 내림차순 → 상위 3명 이름\nconst top3 = \nconsole.log(top3);', solution: 'const students = [\n  { name: "A", score: 85, grade: 2 },\n  { name: "B", score: 92, grade: 1 },\n  { name: "C", score: 45, grade: 2 },\n  { name: "D", score: 78, grade: 1 },\n  { name: "E", score: 95, grade: 2 }\n];\nconst top3 = students\n  .filter(s => s.score >= 60)\n  .sort((a, b) => b.score - a.score)\n  .slice(0, 3)\n  .map(s => s.name);\nconsole.log(top3); // ["E", "B", "A"]', feedback: { perfect: '다단계 체이닝 완벽!', good: '잘했어요!', partial: 'filter→sort→slice→map 순서로 체이닝하세요.', wrong: '.filter().sort().slice(0,3).map()입니다.' } },
            { id: 'c5', title: '실전 데이터 처리', description: '실전 데이터를 종합적으로 처리하세요.', difficulty: 'hard', hints: ['여러 메서드를 조합하세요', 'reduce로 통계를 계산하세요'], estimatedMinutes: 15, starterCode: 'const orders = [\n  { id: 1, product: "노트북", qty: 2, price: 1000000, status: "완료" },\n  { id: 2, product: "마우스", qty: 5, price: 30000, status: "완료" },\n  { id: 3, product: "키보드", qty: 3, price: 80000, status: "취소" },\n  { id: 4, product: "모니터", qty: 1, price: 500000, status: "완료" }\n];\n// 1. 완료된 주문만 필터\n// 2. 각 주문의 총액(qty * price) 계산\n// 3. 총액 내림차순 정렬\n// 4. 전체 매출 합계\nconst result = \nconst totalRevenue = \nconsole.log(result);\nconsole.log("총 매출:", totalRevenue);', solution: 'const orders = [\n  { id: 1, product: "노트북", qty: 2, price: 1000000, status: "완료" },\n  { id: 2, product: "마우스", qty: 5, price: 30000, status: "완료" },\n  { id: 3, product: "키보드", qty: 3, price: 80000, status: "취소" },\n  { id: 4, product: "모니터", qty: 1, price: 500000, status: "완료" }\n];\nconst result = orders\n  .filter(o => o.status === "완료")\n  .map(o => ({ ...o, total: o.qty * o.price }))\n  .sort((a, b) => b.total - a.total);\nconst totalRevenue = result.reduce((sum, o) => sum + o.total, 0);\nconsole.log(result);\nconsole.log("총 매출:", totalRevenue); // 2650000', feedback: { perfect: '실전 데이터 처리를 완벽하게 해냈어요!', good: '잘했어요!', partial: '필터→변환→정렬→집계 순서로 처리하세요.', wrong: 'filter→map→sort→reduce 체이닝입니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },
    {
      id: 'week-43',
      number: 43,
      title: 'DOM 조작',
      description: 'JavaScript로 HTML을 자유자재로 다뤄요',
      missions: [
        // Mission 1: getElementById로 요소 선택
        {
          id: 'w43-m1',
          title: 'getElementById로 요소 찾기',
          description: 'ID로 HTML 요소를 선택하여 조작해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'document.getElementById()',
          conceptExplanation: 'getElementById는 HTML에서 id 속성을 가진 요소를 찾아서 반환해요. 각 id는 페이지에서 유일해야 하므로, 특정 요소를 정확히 선택할 때 사용합니다. 반환된 요소 객체를 통해 내용, 스타일, 속성 등을 변경할 수 있어요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'getElementById로 HTML 요소를 선택할 수 있다',
            '선택한 요소의 내용을 읽고 변경할 수 있다',
            'DOM 조작의 기본 원리를 이해할 수 있다'
          ],
          realWorldExample: '버튼 클릭 시 특정 영역의 텍스트 변경, 사용자 입력값 가져오기 등에 사용해요!',
          starterCode: `// HTML: <h1 id="title">원래 제목</h1>
// 위 요소의 텍스트를 "새로운 제목"으로 변경하세요

function changeTitle() {
  // 1. id가 "title"인 요소 선택
  const titleElement =

  // 2. textContent로 텍스트 변경
  titleElement.textContent =
}

changeTitle();`,
          solution: `function changeTitle() {
  const titleElement = document.getElementById("title");
  titleElement.textContent = "새로운 제목";
}

changeTitle();`,
          hints: [
            '💡 document.getElementById("id명")으로 선택',
            '💡 textContent 속성으로 텍스트 변경',
            '💡 id는 #없이 문자열로 전달',
            '💡 요소가 없으면 null 반환'
          ],
          testCases: [
            {
              input: '<h1 id="title">원래 제목</h1>',
              expectedOutput: '텍스트가 "새로운 제목"으로 변경',
              description: 'getElementById와 textContent 사용'
            }
          ],
          challenges: [
            { id: 'c1', title: 'ID로 요소 선택하기', description: 'getElementById로 특정 ID의 요소를 선택하세요.', difficulty: 'easy', hints: ['document.getElementById("아이디")를 사용하세요', '선택한 요소를 변수에 저장하세요'], estimatedMinutes: 3, starterCode: '// HTML: <h1 id="title">안녕하세요</h1>\n// id가 "title"인 요소를 선택하세요\nconst heading = // TODO: getElementById 사용\nconsole.log(heading.textContent);', solution: '// HTML: <h1 id="title">안녕하세요</h1>\nconst heading = document.getElementById("title");\nconsole.log(heading.textContent);', feedback: { perfect: 'getElementById를 완벽하게 사용했어요!', good: 'ID로 요소를 잘 선택했어요!', partial: 'document.getElementById("아이디") 형태를 사용하세요.', wrong: 'document.getElementById("title")로 요소를 선택합니다.' } },
            { id: 'c2', title: '선택한 요소 텍스트 변경', description: 'getElementById로 선택한 요소의 텍스트를 변경하세요.', difficulty: 'easy', hints: ['textContent 속성으로 텍스트를 변경합니다', '요소.textContent = "새 텍스트"'], estimatedMinutes: 4, starterCode: '// HTML: <p id="message">원래 메시지</p>\nconst el = document.getElementById("message");\n// TODO: 텍스트를 "변경된 메시지"로 바꾸세요\n', solution: '// HTML: <p id="message">원래 메시지</p>\nconst el = document.getElementById("message");\nel.textContent = "변경된 메시지";', feedback: { perfect: 'textContent로 텍스트 변경을 완벽하게 했어요!', good: '텍스트 변경이 잘 됐어요!', partial: 'el.textContent = "새텍스트" 형태를 사용하세요.', wrong: '선택한 요소의 textContent에 새 문자열을 대입하세요.' } },
            { id: 'c3', title: '여러 요소 선택 및 수정', description: '여러 ID의 요소를 각각 선택하고 내용을 수정하세요.', difficulty: 'medium', hints: ['getElementById를 여러 번 호출하세요', '각 요소의 textContent를 변경하세요'], estimatedMinutes: 5, starterCode: '// HTML: <span id="name">이름</span> <span id="age">나이</span>\n// TODO: name을 "홍길동"으로, age를 "15"로 변경\nconst nameEl = \nconst ageEl = \n', solution: '// HTML: <span id="name">이름</span> <span id="age">나이</span>\nconst nameEl = document.getElementById("name");\nconst ageEl = document.getElementById("age");\nnameEl.textContent = "홍길동";\nageEl.textContent = "15";', feedback: { perfect: '여러 요소를 완벽하게 선택하고 수정했어요!', good: '잘했어요! 두 요소 모두 변경됐어요.', partial: '두 요소 모두 getElementById로 선택하세요.', wrong: 'document.getElementById("id")로 각 요소를 선택합니다.' } },
            { id: 'c4', title: 'null 체크하기', description: 'getElementById가 null을 반환하는 경우를 처리하세요.', difficulty: 'medium', hints: ['존재하지 않는 ID는 null을 반환합니다', 'if문으로 null 체크를 하세요'], estimatedMinutes: 6, starterCode: '// TODO: "content" ID 요소를 찾고, 있으면 텍스트 변경, 없으면 경고 출력\nconst el = document.getElementById("content");\n// TODO: null 체크 후 처리\n', solution: 'const el = document.getElementById("content");\nif (el !== null) {\n  el.textContent = "내용이 변경됨";\n} else {\n  console.log("요소를 찾을 수 없습니다");\n}', feedback: { perfect: 'null 체크까지 완벽하게 처리했어요!', good: '좋아요! 안전한 코드 작성법이에요.', partial: 'if (el !== null) 또는 if (el)로 체크하세요.', wrong: 'getElementById는 요소가 없으면 null을 반환해요. if문으로 확인하세요.' } },
            { id: 'c5', title: '카운터 만들기', description: 'getElementById와 이벤트로 간단한 카운터를 만드세요.', difficulty: 'hard', hints: ['버튼에 onclick을 연결하세요', '숫자를 변수에 저장하고 textContent로 표시'], estimatedMinutes: 8, starterCode: '// HTML: <span id="count">0</span> <button id="btn">+1</button>\nlet count = 0;\nconst display = document.getElementById("count");\nconst btn = document.getElementById("btn");\n// TODO: 버튼 클릭 시 count를 1 증가하고 화면에 표시\n', solution: 'let count = 0;\nconst display = document.getElementById("count");\nconst btn = document.getElementById("btn");\nbtn.addEventListener("click", function() {\n  count++;\n  display.textContent = count;\n});', feedback: { perfect: '카운터를 완벽하게 구현했어요! getElementById 마스터!', good: '카운터가 잘 작동해요!', partial: 'addEventListener로 클릭 이벤트를 연결하세요.', wrong: 'btn.addEventListener("click", function() { count++; display.textContent = count; })' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 2: querySelector로 요소 선택
        {
          id: 'w43-m2',
          title: 'querySelector로 유연하게 선택하기',
          description: 'CSS 선택자로 어떤 요소든 찾을 수 있어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'document.querySelector()',
          conceptExplanation: 'querySelector는 CSS 선택자를 사용하여 요소를 찾아요. id(#), class(.), 태그명, 속성 등 다양한 방법으로 선택할 수 있습니다. 조건에 맞는 첫 번째 요소만 반환하며, 여러 개를 선택하려면 querySelectorAll을 사용해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'querySelector로 CSS 선택자를 사용할 수 있다',
            'id, class, 태그 선택자를 구분하여 사용할 수 있다',
            'getElementById와 querySelector의 차이를 이해할 수 있다'
          ],
          realWorldExample: '복잡한 조건으로 요소 선택, 중첩된 요소 찾기 등에 querySelector를 사용해요!',
          starterCode: `// HTML: <button class="btn-primary">클릭</button>
// class가 "btn-primary"인 버튼의 텍스트를 "클릭됨!"으로 변경하세요

function changeButtonText() {
  // querySelector로 class 선택 (#이 아닌 .사용!)
  const button =

  button.textContent =
}

changeButtonText();`,
          solution: `function changeButtonText() {
  const button = document.querySelector(".btn-primary");
  button.textContent = "클릭됨!";
}

changeButtonText();`,
          hints: [
            '💡 querySelector(".클래스명")으로 class 선택',
            '💡 querySelector("#id명")으로 id 선택',
            '💡 querySelector("태그명")으로 태그 선택',
            '💡 CSS 선택자와 똑같이 사용'
          ],
          testCases: [
            {
              input: '<button class="btn-primary">클릭</button>',
              expectedOutput: '텍스트가 "클릭됨!"으로 변경',
              description: 'class 선택자 사용'
            }
          ],
          challenges: [
            { id: 'c1', title: 'CSS 선택자로 요소 선택', description: 'querySelector로 CSS 선택자를 사용해 요소를 선택하세요.', difficulty: 'easy', hints: ['querySelector는 CSS 선택자를 사용합니다', '#은 ID, .은 클래스 선택자'], estimatedMinutes: 3, starterCode: '// HTML: <p class="intro">소개글입니다</p>\n// TODO: class가 "intro"인 요소를 선택하세요\nconst el = // querySelector 사용\nconsole.log(el.textContent);', solution: '// HTML: <p class="intro">소개글입니다</p>\nconst el = document.querySelector(".intro");\nconsole.log(el.textContent);', feedback: { perfect: 'querySelector를 완벽하게 사용했어요!', good: 'CSS 선택자를 잘 활용했어요!', partial: '.클래스명으로 클래스를 선택합니다.', wrong: 'document.querySelector(".intro")를 사용하세요.' } },
            { id: 'c2', title: 'querySelectorAll로 여러 요소', description: 'querySelectorAll로 여러 요소를 한번에 선택하세요.', difficulty: 'easy', hints: ['querySelectorAll은 NodeList를 반환합니다', 'forEach로 반복할 수 있어요'], estimatedMinutes: 4, starterCode: '// HTML: <li class="item">A</li><li class="item">B</li><li class="item">C</li>\n// TODO: 모든 .item 요소를 선택하고 텍스트 출력\nconst items = // querySelectorAll 사용\nitems.forEach(function(item) {\n  console.log(item.textContent);\n});', solution: '// HTML: <li class="item">A</li><li class="item">B</li><li class="item">C</li>\nconst items = document.querySelectorAll(".item");\nitems.forEach(function(item) {\n  console.log(item.textContent);\n});', feedback: { perfect: 'querySelectorAll과 forEach를 완벽하게 조합했어요!', good: '여러 요소 선택이 잘 됐어요!', partial: 'document.querySelectorAll(".item")을 사용하세요.', wrong: 'querySelectorAll은 NodeList를 반환하고 forEach로 반복합니다.' } },
            { id: 'c3', title: '복합 선택자 활용', description: '자식 선택자, 속성 선택자 등 복합 CSS 선택자를 사용하세요.', difficulty: 'medium', hints: ['"div > p"는 div의 직접 자식 p를 선택', '"[type=text]"는 속성 선택자'], estimatedMinutes: 5, starterCode: '// HTML: <div id="form"><input type="text"><input type="password"></div>\n// TODO: #form 안의 type="text"인 input 선택\nconst textInput = // 복합 선택자 사용\nconsole.log(textInput.type);', solution: '// HTML: <div id="form"><input type="text"><input type="password"></div>\nconst textInput = document.querySelector("#form input[type=text]");\nconsole.log(textInput.type); // "text"', feedback: { perfect: '복합 선택자를 완벽하게 활용했어요!', good: '좋은 선택자 조합이에요!', partial: '"#form input[type=text]" 형태를 사용하세요.', wrong: 'CSS 선택자를 조합하여 사용합니다: "#id 태그[속성=값]"' } },
            { id: 'c4', title: 'querySelector vs getElementById 비교', description: '두 메서드의 차이점을 코드로 확인하세요.', difficulty: 'medium', hints: ['querySelector는 CSS 선택자 문법을 사용', 'getElementById는 ID만 직접 입력'], estimatedMinutes: 6, starterCode: '// HTML: <h1 id="title" class="main">제목</h1>\n// TODO: 같은 요소를 두 가지 방법으로 선택\nconst el1 = // getElementById 사용\nconst el2 = // querySelector 사용\nconsole.log(el1 === el2); // true여야 함', solution: '// HTML: <h1 id="title" class="main">제목</h1>\nconst el1 = document.getElementById("title");\nconst el2 = document.querySelector("#title");\nconsole.log(el1 === el2); // true', feedback: { perfect: '두 메서드의 차이를 완벽히 이해했어요!', good: '좋아요! 같은 요소를 다르게 선택할 수 있어요.', partial: 'querySelector에서는 #을 붙여야 ID 선택이 됩니다.', wrong: 'getElementById("title")과 querySelector("#title")은 같은 요소를 선택합니다.' } },
            { id: 'c5', title: '탭 메뉴 선택 구현', description: 'querySelectorAll로 탭 버튼들을 선택하고 클릭 이벤트를 연결하세요.', difficulty: 'hard', hints: ['querySelectorAll로 모든 탭 선택', 'forEach로 각 탭에 이벤트 연결'], estimatedMinutes: 8, starterCode: '// HTML: <button class="tab" data-target="home">홈</button>\n//        <button class="tab" data-target="about">소개</button>\n// TODO: 모든 .tab 버튼에 클릭 시 data-target 값을 출력하는 이벤트 연결\nconst tabs = document.querySelectorAll(".tab");\n// TODO: forEach로 각 탭에 addEventListener 연결\n', solution: 'const tabs = document.querySelectorAll(".tab");\ntabs.forEach(function(tab) {\n  tab.addEventListener("click", function() {\n    console.log("선택된 탭: " + tab.dataset.target);\n  });\n});', feedback: { perfect: 'querySelectorAll + forEach + addEventListener 조합을 완벽하게 구현했어요!', good: '탭 이벤트가 잘 연결됐어요!', partial: 'forEach 안에서 addEventListener를 사용하세요.', wrong: 'tabs.forEach(function(tab) { tab.addEventListener("click", ...) })' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 3: textContent vs innerHTML
        {
          id: 'w43-m3',
          title: 'textContent와 innerHTML 차이 이해하기',
          description: '텍스트만 vs HTML 태그 포함하여 변경하기',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'textContent vs innerHTML',
          conceptExplanation: 'textContent는 순수 텍스트만 다루고, innerHTML은 HTML 태그를 포함한 내용을 다뤄요. innerHTML로 <strong>, <br> 등 태그를 넣을 수 있지만, 보안 위험(XSS)이 있으므로 사용자 입력은 textContent로 처리해야 해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'textContent와 innerHTML의 차이를 이해할 수 있다',
            'HTML 태그를 포함한 내용을 삽입할 수 있다',
            'XSS 보안 위험을 인식할 수 있다'
          ],
          realWorldExample: '댓글에 링크 추가, 강조 텍스트 표시, 리스트 동적 생성 등에 사용해요!',
          starterCode: `// HTML: <div id="content"></div>
// div에 "안녕하세요 <strong>코딩</strong> 세계!"를 삽입하세요 (코딩은 굵게)

function setContent() {
  const div = document.getElementById("content");

  // innerHTML을 사용하여 HTML 태그 포함

}

setContent();`,
          solution: `function setContent() {
  const div = document.getElementById("content");
  div.innerHTML = "안녕하세요 <strong>코딩</strong> 세계!";
}

setContent();`,
          hints: [
            '💡 innerHTML = "HTML코드" 형태로 사용',
            '💡 <strong> 태그는 굵게 표시',
            '💡 textContent는 태그를 문자 그대로 표시',
            '💡 사용자 입력엔 textContent 사용!'
          ],
          testCases: [
            {
              input: '<div id="content"></div>',
              expectedOutput: '"코딩"이 굵게 표시됨',
              description: 'innerHTML로 HTML 태그 삽입'
            }
          ],
          challenges: [
            { id: 'c1', title: 'textContent로 텍스트 변경', description: 'textContent를 사용하여 순수 텍스트를 설정하세요.', difficulty: 'easy', hints: ['textContent는 HTML 태그를 해석하지 않습니다', '요소.textContent = "텍스트"'], estimatedMinutes: 3, starterCode: '// HTML: <div id="box">기존 내용</div>\nconst box = document.getElementById("box");\n// TODO: textContent로 "Hello World"를 설정\n', solution: 'const box = document.getElementById("box");\nbox.textContent = "Hello World";', feedback: { perfect: 'textContent 사용법을 완벽하게 이해했어요!', good: '텍스트가 잘 변경됐어요!', partial: 'box.textContent = "Hello World"를 사용하세요.', wrong: 'textContent는 순수 텍스트만 설정합니다.' } },
            { id: 'c2', title: 'innerHTML로 HTML 삽입', description: 'innerHTML을 사용하여 HTML 요소를 삽입하세요.', difficulty: 'easy', hints: ['innerHTML은 HTML 태그를 해석합니다', '요소.innerHTML = "<태그>내용</태그>"'], estimatedMinutes: 4, starterCode: '// HTML: <div id="content"></div>\nconst content = document.getElementById("content");\n// TODO: innerHTML로 "<strong>중요한 내용</strong>"을 삽입\n', solution: 'const content = document.getElementById("content");\ncontent.innerHTML = "<strong>중요한 내용</strong>";', feedback: { perfect: 'innerHTML로 HTML 삽입을 완벽하게 했어요!', good: 'HTML이 잘 삽입됐어요!', partial: 'content.innerHTML = "<strong>중요한 내용</strong>"', wrong: 'innerHTML에 HTML 문자열을 대입하면 태그가 해석됩니다.' } },
            { id: 'c3', title: '두 속성의 차이점 확인', description: 'textContent와 innerHTML에 같은 HTML 문자열을 넣고 차이를 확인하세요.', difficulty: 'medium', hints: ['textContent는 태그를 문자 그대로 표시', 'innerHTML은 태그를 해석하여 렌더링'], estimatedMinutes: 5, starterCode: '// HTML: <div id="a"></div> <div id="b"></div>\nconst a = document.getElementById("a");\nconst b = document.getElementById("b");\nconst html = "<em>강조</em> 텍스트";\n// TODO: a에는 textContent로, b에는 innerHTML로 html을 설정\n// 결과 차이를 확인하세요\n', solution: 'const a = document.getElementById("a");\nconst b = document.getElementById("b");\nconst html = "<em>강조</em> 텍스트";\na.textContent = html; // "<em>강조</em> 텍스트" 그대로 표시\nb.innerHTML = html;  // "강조" 가 이탤릭체로 표시', feedback: { perfect: '두 속성의 차이를 완벽하게 이해했어요!', good: '좋아요! 차이가 명확하죠?', partial: 'textContent는 태그를 문자로, innerHTML은 해석합니다.', wrong: 'a.textContent = html은 태그 문자열 그대로, b.innerHTML = html은 렌더링합니다.' } },
            { id: 'c4', title: '리스트를 innerHTML로 생성', description: 'innerHTML로 동적 리스트를 생성하세요.', difficulty: 'medium', hints: ['배열을 map으로 변환하고 join으로 합치세요', 'innerHTML에 전체 HTML을 설정'], estimatedMinutes: 7, starterCode: '// HTML: <ul id="list"></ul>\nconst fruits = ["사과", "바나나", "포도"];\nconst list = document.getElementById("list");\n// TODO: fruits 배열로 <li> 목록을 innerHTML로 생성\n', solution: 'const fruits = ["사과", "바나나", "포도"];\nconst list = document.getElementById("list");\nlist.innerHTML = fruits.map(function(f) {\n  return "<li>" + f + "</li>";\n}).join("");', feedback: { perfect: 'map + join + innerHTML 조합을 완벽하게 활용했어요!', good: '리스트가 잘 생성됐어요!', partial: 'map으로 <li> 태그를 만들고 join("")으로 합치세요.', wrong: 'fruits.map(f => "<li>" + f + "</li>").join("")을 innerHTML에 설정합니다.' } },
            { id: 'c5', title: 'XSS 방지와 안전한 사용', description: '사용자 입력을 안전하게 처리하는 방법을 이해하세요.', difficulty: 'hard', hints: ['사용자 입력에는 textContent를 사용하세요', 'innerHTML에 사용자 입력을 넣으면 위험합니다'], estimatedMinutes: 8, starterCode: '// 사용자가 입력한 값 (악의적일 수 있음)\nconst userInput = "<script>alert(1)</script>안녕";\nconst safe = document.getElementById("safe");\nconst unsafe = document.getElementById("unsafe");\n// TODO: safe에는 안전하게(textContent), unsafe에는 innerHTML로 표시\n// 어느 것이 안전한지 확인하세요\n', solution: 'const userInput = "<script>alert(1)</script>안녕";\nconst safe = document.getElementById("safe");\nconst unsafe = document.getElementById("unsafe");\nsafe.textContent = userInput;  // 안전: 태그가 문자로 표시\nunsafe.innerHTML = userInput;  // 위험: 스크립트 실행 가능', feedback: { perfect: 'XSS 방지의 핵심을 완벽하게 이해했어요!', good: '보안을 고려한 코드 작성을 잘했어요!', partial: '사용자 입력에는 항상 textContent를 사용하세요.', wrong: 'innerHTML에 사용자 입력을 넣으면 XSS 공격에 취약합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 4: style 속성으로 스타일 변경
        {
          id: 'w43-m4',
          title: 'JavaScript로 CSS 스타일 변경하기',
          description: 'style 속성으로 요소의 색상, 크기 등을 바꿔요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'element.style',
          conceptExplanation: 'element.style 속성을 사용하면 인라인 CSS를 JavaScript로 변경할 수 있어요. CSS 속성명은 카멜케이스로 변환됩니다(background-color → backgroundColor). 여러 스타일을 한 번에 바꿀 때는 classList를 사용하는 게 더 좋아요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'style 속성으로 CSS를 변경할 수 있다',
            'CSS 속성명을 카멜케이스로 변환할 수 있다',
            '색상, 크기, 표시 여부 등을 동적으로 조작할 수 있다'
          ],
          realWorldExample: '버튼 hover 효과, 다크모드 전환, 애니메이션 트리거 등에 사용해요!',
          starterCode: `// HTML: <div id="box">박스</div>
// 박스의 배경색을 파란색, 글자색을 흰색으로 변경하세요

function styleBox() {
  const box = document.getElementById("box");

  // style 속성 변경
  box.style.backgroundColor =
  box.style.color =
}

styleBox();`,
          solution: `function styleBox() {
  const box = document.getElementById("box");
  box.style.backgroundColor = "blue";
  box.style.color = "white";
}

styleBox();`,
          hints: [
            '💡 element.style.속성명 = "값"',
            '💡 background-color는 backgroundColor로',
            '💡 색상은 "red", "#ff0000", "rgb(255,0,0)" 모두 가능',
            '💡 크기는 "100px"처럼 단위 포함'
          ],
          testCases: [
            {
              input: '<div id="box">박스</div>',
              expectedOutput: '파란 배경에 흰 글자',
              description: 'style 속성으로 색상 변경'
            }
          ],
          challenges: [
            { id: 'c1', title: '배경색 변경하기', description: 'style 속성으로 요소의 배경색을 변경하세요.', difficulty: 'easy', hints: ['element.style.backgroundColor = "색상"', 'CSS의 background-color는 JS에서 backgroundColor'], estimatedMinutes: 3, starterCode: '// HTML: <div id="box">박스</div>\nconst box = document.getElementById("box");\n// TODO: 배경색을 파란색(#3498db)으로 변경\n', solution: 'const box = document.getElementById("box");\nbox.style.backgroundColor = "#3498db";', feedback: { perfect: 'style로 배경색 변경을 완벽하게 했어요!', good: '배경색이 잘 변경됐어요!', partial: 'box.style.backgroundColor = "색상"을 사용하세요.', wrong: 'element.style.backgroundColor에 색상값을 대입합니다.' } },
            { id: 'c2', title: '여러 스타일 동시 적용', description: '하나의 요소에 여러 CSS 속성을 동시에 적용하세요.', difficulty: 'easy', hints: ['각 속성을 따로 설정하세요', 'fontSize, color, padding 등'], estimatedMinutes: 4, starterCode: '// HTML: <p id="text">스타일 적용</p>\nconst text = document.getElementById("text");\n// TODO: 글자크기 24px, 색상 흰색(#fff), 배경 검정(#333), 패딩 10px\n', solution: 'const text = document.getElementById("text");\ntext.style.fontSize = "24px";\ntext.style.color = "#fff";\ntext.style.backgroundColor = "#333";\ntext.style.padding = "10px";', feedback: { perfect: '여러 스타일을 완벽하게 적용했어요!', good: '잘했어요! 스타일이 잘 적용됐어요!', partial: '각 속성을 element.style.속성명 = "값"으로 설정하세요.', wrong: 'CSS에서 font-size는 JS에서 fontSize (카멜케이스)입니다.' } },
            { id: 'c3', title: 'cssText로 한번에 적용', description: 'cssText를 사용하여 여러 스타일을 한번에 적용하세요.', difficulty: 'medium', hints: ['cssText에 CSS 문자열을 넣으세요', 'CSS 문법 그대로 사용 가능'], estimatedMinutes: 5, starterCode: '// HTML: <div id="card">카드</div>\nconst card = document.getElementById("card");\n// TODO: cssText로 border, border-radius, padding, box-shadow를 한번에 적용\n', solution: 'const card = document.getElementById("card");\ncard.style.cssText = "border: 1px solid #ddd; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);";', feedback: { perfect: 'cssText를 완벽하게 활용했어요!', good: 'cssText로 한번에 적용했어요!', partial: 'element.style.cssText = "속성: 값; 속성: 값;"', wrong: 'cssText에 일반 CSS 문법을 문자열로 넣으면 됩니다.' } },
            { id: 'c4', title: '버튼 호버 효과', description: 'mouseenter/mouseleave로 호버 효과를 구현하세요.', difficulty: 'medium', hints: ['mouseenter 이벤트에서 스타일 변경', 'mouseleave 이벤트에서 원래로 복구'], estimatedMinutes: 7, starterCode: '// HTML: <button id="btn">호버 테스트</button>\nconst btn = document.getElementById("btn");\n// TODO: 마우스 올리면 배경 파랑+글자 흰색, 벗어나면 원래대로\nbtn.addEventListener("mouseenter", function() {\n  // 스타일 변경\n});\nbtn.addEventListener("mouseleave", function() {\n  // 원래대로\n});', solution: 'const btn = document.getElementById("btn");\nbtn.addEventListener("mouseenter", function() {\n  btn.style.backgroundColor = "#3498db";\n  btn.style.color = "#fff";\n});\nbtn.addEventListener("mouseleave", function() {\n  btn.style.backgroundColor = "";\n  btn.style.color = "";\n});', feedback: { perfect: '호버 효과를 이벤트로 완벽하게 구현했어요!', good: '호버 효과가 잘 작동해요!', partial: 'mouseleave에서 스타일을 빈 문자열로 초기화하세요.', wrong: 'mouseenter에서 변경, mouseleave에서 style.속성 = ""로 리셋합니다.' } },
            { id: 'c5', title: '프로그레스 바 만들기', description: 'style.width를 동적으로 변경하여 프로그레스 바를 구현하세요.', difficulty: 'hard', hints: ['width를 퍼센트로 설정: "50%"', 'setInterval로 점진적 증가'], estimatedMinutes: 8, starterCode: '// HTML: <div id="bar" style="height:20px;background:#3498db;width:0%"></div>\nconst bar = document.getElementById("bar");\nlet progress = 0;\n// TODO: 100ms마다 progress를 5씩 증가하고 bar의 width를 업데이트\n// 100%에 도달하면 멈추기\n', solution: 'const bar = document.getElementById("bar");\nlet progress = 0;\nconst timer = setInterval(function() {\n  progress += 5;\n  bar.style.width = progress + "%";\n  if (progress >= 100) {\n    clearInterval(timer);\n    console.log("완료!");\n  }\n}, 100);', feedback: { perfect: '프로그레스 바를 완벽하게 구현했어요!', good: '잘 작동하는 프로그레스 바에요!', partial: 'bar.style.width = progress + "%"로 너비를 설정하세요.', wrong: 'setInterval에서 progress 증가 후 style.width를 업데이트합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 5: classList로 클래스 조작
        {
          id: 'w43-m5',
          title: 'classList로 CSS 클래스 추가/제거하기',
          description: 'add, remove, toggle로 클래스를 쉽게 다뤄요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 80,
          estimatedMinutes: 30,
          concept: 'element.classList',
          conceptExplanation: 'classList는 요소의 CSS 클래스를 관리하는 객체예요. add()로 추가, remove()로 제거, toggle()로 토글(있으면 제거, 없으면 추가)할 수 있습니다. style보다 classList를 사용하는 게 유지보수에 좋아요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'classList.add()로 클래스를 추가할 수 있다',
            'classList.remove()로 클래스를 제거할 수 있다',
            'classList.toggle()로 클래스를 토글할 수 있다'
          ],
          realWorldExample: '모달 열기/닫기, 탭 활성화, 버튼 활성/비활성 상태 등에 사용해요!',
          starterCode: `// HTML: <div id="box">박스</div>
// CSS: .highlight { background: yellow; font-weight: bold; }
// 박스에 highlight 클래스를 추가하세요

function highlightBox() {
  const box = document.getElementById("box");

  // classList로 클래스 추가

}

highlightBox();`,
          solution: `function highlightBox() {
  const box = document.getElementById("box");
  box.classList.add("highlight");
}

highlightBox();`,
          hints: [
            '💡 classList.add("클래스명")으로 추가',
            '💡 classList.remove("클래스명")으로 제거',
            '💡 classList.toggle("클래스명")으로 토글',
            '💡 여러 클래스: .add("class1", "class2")'
          ],
          testCases: [
            {
              input: '<div id="box">박스</div>',
              expectedOutput: 'highlight 클래스 추가됨',
              description: 'classList.add 사용'
            }
          ],
          challenges: [
            { id: 'c1', title: 'classList.add()로 클래스 추가', description: 'classList.add()로 요소에 CSS 클래스를 추가하세요.', difficulty: 'easy', hints: ['element.classList.add("클래스명")', '여러 클래스를 한번에 추가 가능'], estimatedMinutes: 3, starterCode: '// HTML: <div id="box">박스</div>\n// CSS: .highlight { background: yellow; } .rounded { border-radius: 8px; }\nconst box = document.getElementById("box");\n// TODO: "highlight"와 "rounded" 클래스를 추가\n', solution: 'const box = document.getElementById("box");\nbox.classList.add("highlight", "rounded");', feedback: { perfect: 'classList.add를 완벽하게 사용했어요!', good: '클래스가 잘 추가됐어요!', partial: 'classList.add("클래스1", "클래스2")로 여러 개를 추가합니다.', wrong: 'element.classList.add("클래스명")으로 클래스를 추가합니다.' } },
            { id: 'c2', title: 'classList.remove()로 클래스 제거', description: 'classList.remove()로 특정 클래스를 제거하세요.', difficulty: 'easy', hints: ['element.classList.remove("클래스명")'], estimatedMinutes: 3, starterCode: '// HTML: <div id="alert" class="box warning active">경고</div>\nconst alert = document.getElementById("alert");\n// TODO: "warning" 클래스를 제거하세요\nconsole.log(alert.className); // 제거 후 확인', solution: 'const alert = document.getElementById("alert");\nalert.classList.remove("warning");\nconsole.log(alert.className); // "box active"', feedback: { perfect: 'classList.remove를 완벽하게 사용했어요!', good: '클래스가 잘 제거됐어요!', partial: 'classList.remove("warning")을 사용하세요.', wrong: 'element.classList.remove("클래스명")으로 클래스를 제거합니다.' } },
            { id: 'c3', title: 'classList.toggle()로 토글', description: 'classList.toggle()로 클래스를 켜고 끄세요.', difficulty: 'medium', hints: ['toggle은 있으면 제거, 없으면 추가', 'classList.contains()로 존재 여부 확인'], estimatedMinutes: 5, starterCode: '// HTML: <button id="btn">메뉴</button> <nav id="menu" class="hidden">메뉴</nav>\n// CSS: .hidden { display: none; }\nconst btn = document.getElementById("btn");\nconst menu = document.getElementById("menu");\n// TODO: 버튼 클릭 시 menu의 "hidden" 클래스를 토글\nbtn.addEventListener("click", function() {\n  // toggle 사용\n});', solution: 'const btn = document.getElementById("btn");\nconst menu = document.getElementById("menu");\nbtn.addEventListener("click", function() {\n  menu.classList.toggle("hidden");\n});', feedback: { perfect: 'classList.toggle을 완벽하게 활용했어요!', good: '토글이 잘 작동해요!', partial: 'menu.classList.toggle("hidden")을 사용하세요.', wrong: 'toggle("클래스명")은 있으면 제거, 없으면 추가합니다.' } },
            { id: 'c4', title: 'classList.contains()로 확인', description: 'contains로 클래스 존재 여부를 확인하고 분기하세요.', difficulty: 'medium', hints: ['classList.contains("클래스명")는 true/false 반환'], estimatedMinutes: 5, starterCode: '// HTML: <div id="user" class="admin premium">사용자</div>\nconst user = document.getElementById("user");\n// TODO: "admin" 클래스가 있으면 "관리자입니다" 출력\n// TODO: "guest" 클래스가 있으면 "손님입니다" 출력, 없으면 "손님 아닙니다"\n', solution: 'const user = document.getElementById("user");\nif (user.classList.contains("admin")) {\n  console.log("관리자입니다");\n}\nif (user.classList.contains("guest")) {\n  console.log("손님입니다");\n} else {\n  console.log("손님 아닙니다");\n}', feedback: { perfect: 'contains로 조건 분기를 완벽하게 했어요!', good: '클래스 체크가 잘 됐어요!', partial: 'classList.contains("클래스명")으로 확인하세요.', wrong: 'contains는 해당 클래스가 있으면 true, 없으면 false를 반환합니다.' } },
            { id: 'c5', title: '활성 탭 전환 구현', description: 'classList를 활용하여 활성 탭을 전환하세요.', difficulty: 'hard', hints: ['모든 탭에서 active 제거 후 클릭한 탭에 추가', 'querySelectorAll + forEach 사용'], estimatedMinutes: 8, starterCode: '// HTML: <button class="tab active">탭1</button>\n//        <button class="tab">탭2</button>\n//        <button class="tab">탭3</button>\n// CSS: .active { background: blue; color: white; }\nconst tabs = document.querySelectorAll(".tab");\n// TODO: 탭 클릭 시 모든 탭에서 active 제거 후 클릭한 탭에 active 추가\ntabs.forEach(function(tab) {\n  tab.addEventListener("click", function() {\n    // 구현하세요\n  });\n});', solution: 'const tabs = document.querySelectorAll(".tab");\ntabs.forEach(function(tab) {\n  tab.addEventListener("click", function() {\n    tabs.forEach(function(t) { t.classList.remove("active"); });\n    tab.classList.add("active");\n  });\n});', feedback: { perfect: '활성 탭 전환을 완벽하게 구현했어요!', good: '탭 전환이 잘 작동해요!', partial: '먼저 모든 탭에서 active를 제거한 후 클릭된 탭에 추가하세요.', wrong: 'forEach로 모든 탭의 active를 remove한 후, 현재 탭에 add합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 6: addEventListener로 클릭 이벤트
        {
          id: 'w43-m6',
          title: '클릭 이벤트 리스너 추가하기',
          description: '버튼 클릭 시 함수를 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'addEventListener("click")',
          conceptExplanation: 'addEventListener는 이벤트가 발생했을 때 실행할 함수를 등록해요. "click" 이벤트는 요소를 클릭했을 때 발생합니다. 같은 요소에 여러 이벤트 리스너를 추가할 수 있으며, 각각 독립적으로 실행돼요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'addEventListener로 이벤트 리스너를 등록할 수 있다',
            '클릭 이벤트를 처리할 수 있다',
            '이벤트 주도 프로그래밍의 개념을 이해할 수 있다'
          ],
          realWorldExample: '좋아요 버튼, 메뉴 펼치기, 모달 열기 등 모든 인터랙션에 사용해요!',
          starterCode: `// HTML: <button id="myBtn">클릭하세요</button>
// 버튼 클릭 시 "클릭됨!"을 출력하세요

function setupButton() {
  const button = document.getElementById("myBtn");

  // click 이벤트 리스너 추가
  button.addEventListener("click", function() {
    // 클릭 시 실행될 코드

  });
}

setupButton();`,
          solution: `function setupButton() {
  const button = document.getElementById("myBtn");

  button.addEventListener("click", function() {
    console.log("클릭됨!");
  });
}

setupButton();`,
          hints: [
            '💡 addEventListener("이벤트명", 함수)',
            '💡 이벤트 타입: "click", "input", "submit" 등',
            '💡 화살표 함수도 사용 가능',
            '💡 onclick 속성보다 addEventListener 권장'
          ],
          testCases: [
            {
              input: '버튼 클릭',
              expectedOutput: '콘솔에 "클릭됨!" 출력',
              description: 'click 이벤트 처리'
            }
          ],
          challenges: [
            { id: 'c1', title: '클릭 이벤트 연결', description: 'addEventListener로 버튼에 클릭 이벤트를 연결하세요.', difficulty: 'easy', hints: ['element.addEventListener("click", 함수)', '함수 안에 실행할 코드를 작성'], estimatedMinutes: 3, starterCode: '// HTML: <button id="btn">클릭하세요</button>\nconst btn = document.getElementById("btn");\n// TODO: 버튼 클릭 시 "버튼이 클릭됨!" 출력\n', solution: 'const btn = document.getElementById("btn");\nbtn.addEventListener("click", function() {\n  console.log("버튼이 클릭됨!");\n});', feedback: { perfect: 'addEventListener를 완벽하게 사용했어요!', good: '클릭 이벤트가 잘 연결됐어요!', partial: 'addEventListener("click", function() { })를 사용하세요.', wrong: 'btn.addEventListener("click", function() { 코드 })로 이벤트를 연결합니다.' } },
            { id: 'c2', title: '이벤트 객체 활용', description: '이벤트 핸들러에서 event 객체를 활용하세요.', difficulty: 'easy', hints: ['함수의 매개변수로 event를 받을 수 있어요', 'event.target은 이벤트가 발생한 요소'], estimatedMinutes: 4, starterCode: '// HTML: <button id="btn">클릭</button>\nconst btn = document.getElementById("btn");\n// TODO: 클릭 시 event.target의 textContent를 출력\nbtn.addEventListener("click", function(event) {\n  // event.target 사용\n});', solution: 'const btn = document.getElementById("btn");\nbtn.addEventListener("click", function(event) {\n  console.log("클릭된 요소: " + event.target.textContent);\n});', feedback: { perfect: 'event 객체를 완벽하게 활용했어요!', good: 'event.target을 잘 사용했어요!', partial: 'event.target은 이벤트가 발생한 실제 요소입니다.', wrong: 'function(event) { event.target }으로 이벤트 대상을 확인합니다.' } },
            { id: 'c3', title: '여러 버튼에 이벤트 연결', description: 'querySelectorAll과 forEach로 여러 버튼에 이벤트를 연결하세요.', difficulty: 'medium', hints: ['querySelectorAll로 모든 버튼 선택', 'forEach로 각각에 addEventListener'], estimatedMinutes: 5, starterCode: '// HTML: <button class="color-btn" data-color="red">빨강</button>\n//        <button class="color-btn" data-color="blue">파랑</button>\n//        <button class="color-btn" data-color="green">초록</button>\nconst buttons = document.querySelectorAll(".color-btn");\n// TODO: 각 버튼 클릭 시 해당 data-color 값을 출력\n', solution: 'const buttons = document.querySelectorAll(".color-btn");\nbuttons.forEach(function(btn) {\n  btn.addEventListener("click", function() {\n    console.log("선택한 색상: " + btn.dataset.color);\n  });\n});', feedback: { perfect: '여러 요소에 이벤트를 완벽하게 연결했어요!', good: '모든 버튼에 잘 연결됐어요!', partial: 'forEach 안에서 addEventListener를 호출하세요.', wrong: 'buttons.forEach(function(btn) { btn.addEventListener("click", ...) })' } },
            { id: 'c4', title: 'removeEventListener 사용', description: '이벤트 리스너를 제거하는 방법을 이해하세요.', difficulty: 'medium', hints: ['제거하려면 함수에 이름이 있어야 합니다', '같은 함수 참조를 전달해야 제거됨'], estimatedMinutes: 6, starterCode: '// HTML: <button id="btn">한번만 클릭</button>\nconst btn = document.getElementById("btn");\n// TODO: 한 번 클릭하면 "클릭됨!" 출력 후 이벤트 리스너를 제거하세요\n// 힌트: 함수에 이름을 붙여야 remove 가능\n', solution: 'const btn = document.getElementById("btn");\nfunction handleClick() {\n  console.log("클릭됨!");\n  btn.removeEventListener("click", handleClick);\n}\nbtn.addEventListener("click", handleClick);', feedback: { perfect: 'removeEventListener를 완벽하게 이해했어요!', good: '이벤트 제거가 잘 작동해요!', partial: '기명 함수를 만들어 add와 remove에 같은 함수를 전달하세요.', wrong: 'removeEventListener에 addEventListener와 같은 함수 참조를 전달해야 합니다.' } },
            { id: 'c5', title: '좋아요 버튼 만들기', description: '클릭할 때마다 좋아요 수가 증가하는 버튼을 만드세요.', difficulty: 'hard', hints: ['변수에 카운트를 저장하세요', 'textContent로 화면에 표시'], estimatedMinutes: 8, starterCode: '// HTML: <button id="like-btn">좋아요 0</button>\nlet likeCount = 0;\nconst likeBtn = document.getElementById("like-btn");\n// TODO: 클릭마다 likeCount 증가, 버튼 텍스트를 "좋아요 N"으로 업데이트\n', solution: 'let likeCount = 0;\nconst likeBtn = document.getElementById("like-btn");\nlikeBtn.addEventListener("click", function() {\n  likeCount++;\n  likeBtn.textContent = "좋아요 " + likeCount;\n});', feedback: { perfect: '좋아요 버튼을 완벽하게 구현했어요!', good: '카운터가 잘 동작해요!', partial: 'likeCount++ 후 textContent를 업데이트하세요.', wrong: '클릭 이벤트에서 변수를 증가시키고 textContent에 반영합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 7: 클릭 카운터 만들기
        {
          id: 'w43-m7',
          title: '클릭 횟수 세기',
          description: '버튼을 누른 횟수를 화면에 표시해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: '이벤트와 상태 관리',
          conceptExplanation: '이벤트 리스너 안에서 변수를 업데이트하고 DOM을 변경하면 동적인 웹 페이지를 만들 수 있어요. 클릭 횟수 같은 "상태"를 변수로 관리하고, 이벤트마다 상태를 업데이트한 후 화면에 반영합니다.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '상태를 변수로 관리할 수 있다',
            '이벤트 발생 시 상태를 업데이트하고 화면에 반영할 수 있다',
            '간단한 인터랙티브 기능을 구현할 수 있다'
          ],
          realWorldExample: '좋아요 카운터, 페이지 뷰 카운트, 재고 수량 조절 버튼 등에 사용해요!',
          starterCode: `// HTML: <button id="clickBtn">클릭</button>
//        <p id="count">0</p>
// 버튼을 클릭할 때마다 숫자가 1씩 증가하도록 하세요

function setupCounter() {
  const button = document.getElementById("clickBtn");
  const countDisplay = document.getElementById("count");
  let count = 0;

  button.addEventListener("click", function() {
    // count 증가

    // 화면에 표시

  });
}

setupCounter();`,
          solution: `function setupCounter() {
  const button = document.getElementById("clickBtn");
  const countDisplay = document.getElementById("count");
  let count = 0;

  button.addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
  });
}

setupCounter();`,
          hints: [
            '💡 count++ 또는 count += 1로 증가',
            '💡 textContent = count로 화면 업데이트',
            '💡 let으로 변수 선언 (값이 변하므로)',
            '💡 클릭할 때마다 함수가 실행돼요'
          ],
          testCases: [
            {
              input: '버튼 3번 클릭',
              expectedOutput: '화면에 "3" 표시',
              description: '클릭 횟수 정확히 카운트'
            }
          ],
          challenges: [
            { id: 'c1', title: '변수로 상태 관리', description: '변수를 사용하여 현재 상태를 관리하세요.', difficulty: 'easy', hints: ['let으로 상태 변수를 선언하세요', '이벤트에서 상태를 업데이트'], estimatedMinutes: 3, starterCode: '// HTML: <button id="toggle">OFF</button>\nlet isOn = false;\nconst btn = document.getElementById("toggle");\n// TODO: 클릭마다 isOn을 반전시키고 버튼 텍스트를 ON/OFF로 변경\n', solution: 'let isOn = false;\nconst btn = document.getElementById("toggle");\nbtn.addEventListener("click", function() {\n  isOn = !isOn;\n  btn.textContent = isOn ? "ON" : "OFF";\n});', feedback: { perfect: '상태 토글을 완벽하게 구현했어요!', good: 'ON/OFF 전환이 잘 돼요!', partial: 'isOn = !isOn으로 불리언을 반전시키세요.', wrong: '!연산자로 true/false를 반전시키고 삼항연산자로 텍스트를 결정합니다.' } },
            { id: 'c2', title: '상태에 따른 스타일 변경', description: '상태값에 따라 요소의 스타일을 동적으로 변경하세요.', difficulty: 'easy', hints: ['상태에 따라 classList를 토글하세요', '또는 style을 직접 변경'], estimatedMinutes: 4, starterCode: '// HTML: <div id="box">박스</div> <button id="btn">색상 변경</button>\nlet colorIndex = 0;\nconst colors = ["#e74c3c", "#3498db", "#2ecc71"];\nconst box = document.getElementById("box");\nconst btn = document.getElementById("btn");\n// TODO: 클릭마다 다음 색상으로 변경 (순환)\n', solution: 'let colorIndex = 0;\nconst colors = ["#e74c3c", "#3498db", "#2ecc71"];\nconst box = document.getElementById("box");\nconst btn = document.getElementById("btn");\nbtn.addEventListener("click", function() {\n  colorIndex = (colorIndex + 1) % colors.length;\n  box.style.backgroundColor = colors[colorIndex];\n});', feedback: { perfect: '색상 순환을 완벽하게 구현했어요!', good: '색상 변경이 잘 돼요!', partial: '% 연산자로 배열을 순환하세요.', wrong: '(index + 1) % array.length로 순환 인덱스를 만듭니다.' } },
            { id: 'c3', title: '배열로 목록 상태 관리', description: '배열을 상태로 사용하여 목록을 관리하세요.', difficulty: 'medium', hints: ['배열에 push로 추가', '상태 변경 후 화면을 다시 그리세요'], estimatedMinutes: 6, starterCode: '// HTML: <input id="input"> <button id="add">추가</button> <ul id="list"></ul>\nconst items = [];\nconst input = document.getElementById("input");\nconst addBtn = document.getElementById("add");\nconst list = document.getElementById("list");\n// TODO: 추가 버튼 클릭 시 input 값을 items에 추가하고 목록을 다시 그리기\nfunction render() {\n  // items 배열로 <li> 목록 생성\n}\n', solution: 'const items = [];\nconst input = document.getElementById("input");\nconst addBtn = document.getElementById("add");\nconst list = document.getElementById("list");\nfunction render() {\n  list.innerHTML = items.map(function(item) {\n    return "<li>" + item + "</li>";\n  }).join("");\n}\naddBtn.addEventListener("click", function() {\n  if (input.value.trim() !== "") {\n    items.push(input.value);\n    input.value = "";\n    render();\n  }\n});', feedback: { perfect: '상태 기반 렌더링을 완벽하게 구현했어요!', good: '목록 관리가 잘 돼요!', partial: 'push로 추가 후 render 함수로 화면을 갱신하세요.', wrong: 'items 배열을 업데이트하고 innerHTML로 다시 그립니다.' } },
            { id: 'c4', title: '객체로 복합 상태 관리', description: '여러 상태를 하나의 객체로 관리하세요.', difficulty: 'medium', hints: ['state 객체에 여러 속성을 저장', '상태 변경 후 UI를 갱신하세요'], estimatedMinutes: 7, starterCode: '// HTML: <span id="score">0</span> <span id="level">1</span>\n// <button id="earn">점수 획득</button>\nconst state = { score: 0, level: 1 };\n// TODO: earn 클릭 시 score +10, score >= 100이면 level +1, score 리셋\nfunction updateUI() {\n  document.getElementById("score").textContent = state.score;\n  document.getElementById("level").textContent = state.level;\n}\n', solution: 'const state = { score: 0, level: 1 };\nfunction updateUI() {\n  document.getElementById("score").textContent = state.score;\n  document.getElementById("level").textContent = state.level;\n}\ndocument.getElementById("earn").addEventListener("click", function() {\n  state.score += 10;\n  if (state.score >= 100) {\n    state.level++;\n    state.score = 0;\n  }\n  updateUI();\n});', feedback: { perfect: '복합 상태 관리를 완벽하게 구현했어요!', good: '상태와 UI가 잘 동기화돼요!', partial: '상태 변경 후 updateUI()를 호출하세요.', wrong: 'state 객체를 업데이트하고 updateUI로 화면을 갱신합니다.' } },
            { id: 'c5', title: '되돌리기(Undo) 기능', description: '상태 히스토리를 저장하여 되돌리기를 구현하세요.', difficulty: 'hard', hints: ['히스토리 배열에 이전 상태를 push', 'Undo 시 pop으로 이전 상태 복원'], estimatedMinutes: 8, starterCode: '// HTML: <span id="count">0</span>\n// <button id="plus">+1</button> <button id="undo">Undo</button>\nlet count = 0;\nconst history = [];\n// TODO: +1 클릭 시 현재값을 history에 저장 후 count 증가\n// Undo 클릭 시 history에서 pop하여 복원\n', solution: 'let count = 0;\nconst history = [];\nconst display = document.getElementById("count");\ndocument.getElementById("plus").addEventListener("click", function() {\n  history.push(count);\n  count++;\n  display.textContent = count;\n});\ndocument.getElementById("undo").addEventListener("click", function() {\n  if (history.length > 0) {\n    count = history.pop();\n    display.textContent = count;\n  }\n});', feedback: { perfect: 'Undo 기능을 완벽하게 구현했어요!', good: '히스토리 관리가 잘 돼요!', partial: '변경 전에 history.push, Undo 시 history.pop을 사용하세요.', wrong: 'push로 이전 상태를 저장하고, pop으로 복원합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 8: input 이벤트로 실시간 입력 감지
        {
          id: 'w43-m8',
          title: 'input 이벤트로 실시간 검색 구현하기',
          description: '입력할 때마다 즉시 반응하는 기능을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 100,
          estimatedMinutes: 35,
          concept: 'input 이벤트',
          conceptExplanation: 'input 이벤트는 사용자가 입력 필드에 타이핑할 때마다 발생해요. event.target.value로 현재 입력값을 가져올 수 있습니다. 실시간 검색, 글자 수 세기, 유효성 검사 등에 사용돼요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'input 이벤트를 처리할 수 있다',
            'event.target.value로 입력값을 가져올 수 있다',
            '실시간 반응형 UI를 구현할 수 있다'
          ],
          realWorldExample: '검색 자동완성, 비밀번호 강도 표시, 글자 수 제한 표시 등에 사용해요!',
          starterCode: `// HTML: <input type="text" id="nameInput" placeholder="이름 입력">
//        <p id="greeting"></p>
// 입력할 때마다 "안녕하세요, [이름]님!"을 표시하세요

function setupGreeting() {
  const input = document.getElementById("nameInput");
  const greeting = document.getElementById("greeting");

  input.addEventListener("input", function(event) {
    // 입력값 가져오기
    const name =

    // 인사말 표시

  });
}

setupGreeting();`,
          solution: `function setupGreeting() {
  const input = document.getElementById("nameInput");
  const greeting = document.getElementById("greeting");

  input.addEventListener("input", function(event) {
    const name = event.target.value;
    greeting.textContent = \`안녕하세요, \${name}님!\`;
  });
}

setupGreeting();`,
          hints: [
            '💡 event.target.value로 현재 입력값',
            '💡 input 이벤트는 타이핑할 때마다 발생',
            '💡 템플릿 리터럴로 문자열 조합',
            '💡 빈 문자열일 때 처리도 고려'
          ],
          testCases: [
            {
              input: '"철수" 입력',
              expectedOutput: '"안녕하세요, 철수님!"',
              description: '실시간으로 인사말 업데이트'
            }
          ],
          challenges: [
            { id: 'c1', title: 'input 이벤트 기본', description: 'input 이벤트로 실시간 입력값을 감지하세요.', difficulty: 'easy', hints: ['"input" 이벤트는 값이 변경될 때마다 발생', 'event.target.value로 현재 값 읽기'], estimatedMinutes: 3, starterCode: '// HTML: <input id="name" type="text"> <span id="output"></span>\nconst nameInput = document.getElementById("name");\nconst output = document.getElementById("output");\n// TODO: 입력할 때마다 output에 실시간 표시\n', solution: 'const nameInput = document.getElementById("name");\nconst output = document.getElementById("output");\nnameInput.addEventListener("input", function(e) {\n  output.textContent = e.target.value;\n});', feedback: { perfect: 'input 이벤트를 완벽하게 활용했어요!', good: '실시간 입력 감지가 잘 돼요!', partial: 'addEventListener("input", function(e) { })를 사용하세요.', wrong: '"input" 이벤트에서 e.target.value로 현재 입력값을 읽습니다.' } },
            { id: 'c2', title: '글자수 카운터', description: 'input 이벤트로 실시간 글자수를 세세요.', difficulty: 'easy', hints: ['value.length로 글자수를 구하세요'], estimatedMinutes: 4, starterCode: '// HTML: <textarea id="text"></textarea> <span id="charCount">0</span>/200\nconst textarea = document.getElementById("text");\nconst counter = document.getElementById("charCount");\n// TODO: 입력할 때마다 글자수를 counter에 표시\n', solution: 'const textarea = document.getElementById("text");\nconst counter = document.getElementById("charCount");\ntextarea.addEventListener("input", function(e) {\n  counter.textContent = e.target.value.length;\n});', feedback: { perfect: '글자수 카운터를 완벽하게 만들었어요!', good: '실시간 카운팅이 잘 돼요!', partial: 'e.target.value.length로 글자수를 구하세요.', wrong: 'input 이벤트에서 value.length를 textContent에 표시합니다.' } },
            { id: 'c3', title: '실시간 검색 필터', description: 'input 이벤트로 리스트를 실시간 필터링하세요.', difficulty: 'medium', hints: ['입력값을 포함하는 항목만 표시', 'filter + includes 사용'], estimatedMinutes: 6, starterCode: '// HTML: <input id="search"> <ul id="list"></ul>\nconst items = ["사과", "바나나", "포도", "딸기", "오렌지"];\nconst search = document.getElementById("search");\nconst list = document.getElementById("list");\n// TODO: 검색어 입력 시 실시간으로 목록 필터링\nfunction render(filtered) {\n  list.innerHTML = filtered.map(function(f) { return "<li>" + f + "</li>"; }).join("");\n}\nrender(items);\n', solution: 'const items = ["사과", "바나나", "포도", "딸기", "오렌지"];\nconst search = document.getElementById("search");\nconst list = document.getElementById("list");\nfunction render(filtered) {\n  list.innerHTML = filtered.map(function(f) { return "<li>" + f + "</li>"; }).join("");\n}\nrender(items);\nsearch.addEventListener("input", function(e) {\n  const keyword = e.target.value;\n  const filtered = items.filter(function(item) {\n    return item.includes(keyword);\n  });\n  render(filtered);\n});', feedback: { perfect: '실시간 검색 필터를 완벽하게 구현했어요!', good: '필터링이 잘 작동해요!', partial: 'filter + includes로 검색어가 포함된 항목만 골라내세요.', wrong: 'input 이벤트에서 items.filter(item => item.includes(keyword))를 사용합니다.' } },
            { id: 'c4', title: 'change vs input 이벤트', description: 'change와 input 이벤트의 차이를 이해하세요.', difficulty: 'medium', hints: ['input: 값이 바뀔 때마다 발생', 'change: 포커스를 잃을 때 발생'], estimatedMinutes: 5, starterCode: '// HTML: <input id="field"> <p id="inputLog"></p> <p id="changeLog"></p>\nconst field = document.getElementById("field");\n// TODO: input 이벤트와 change 이벤트를 각각 연결하여 차이를 확인\n// input: "입력중: " + 현재값 표시\n// change: "확정: " + 현재값 표시\n', solution: 'const field = document.getElementById("field");\nfield.addEventListener("input", function(e) {\n  document.getElementById("inputLog").textContent = "입력중: " + e.target.value;\n});\nfield.addEventListener("change", function(e) {\n  document.getElementById("changeLog").textContent = "확정: " + e.target.value;\n});', feedback: { perfect: '두 이벤트의 차이를 완벽하게 이해했어요!', good: '좋아요! 타이밍 차이가 명확하죠?', partial: 'input은 매 키입력마다, change는 포커스 잃을 때 발생합니다.', wrong: '"input"은 실시간, "change"는 최종 확정 시 발생하는 이벤트입니다.' } },
            { id: 'c5', title: '비밀번호 강도 체커', description: 'input 이벤트로 비밀번호 강도를 실시간으로 체크하세요.', difficulty: 'hard', hints: ['길이, 숫자 포함, 특수문자 포함 등을 체크', '조건에 따라 강도 텍스트와 색상 변경'], estimatedMinutes: 8, starterCode: '// HTML: <input id="pw" type="password"> <span id="strength"></span>\nconst pw = document.getElementById("pw");\nconst strength = document.getElementById("strength");\n// TODO: 비밀번호 입력 시 강도 표시\n// 6자 미만: 약함(빨강), 6-9자: 보통(주황), 10자 이상+숫자포함: 강함(초록)\n', solution: 'const pw = document.getElementById("pw");\nconst strength = document.getElementById("strength");\npw.addEventListener("input", function(e) {\n  const val = e.target.value;\n  const hasNumber = /[0-9]/.test(val);\n  if (val.length < 6) {\n    strength.textContent = "약함";\n    strength.style.color = "red";\n  } else if (val.length >= 10 && hasNumber) {\n    strength.textContent = "강함";\n    strength.style.color = "green";\n  } else {\n    strength.textContent = "보통";\n    strength.style.color = "orange";\n  }\n});', feedback: { perfect: '비밀번호 강도 체커를 완벽하게 구현했어요!', good: '강도 판별이 잘 돼요!', partial: '길이와 숫자 포함 여부를 조건으로 사용하세요.', wrong: 'if/else로 길이와 정규식 체크 후 텍스트와 색상을 변경합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 9: createElement로 요소 동적 생성
        {
          id: 'w43-m9',
          title: 'JavaScript로 HTML 요소 만들기',
          description: 'createElement로 새로운 요소를 생성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 120,
          estimatedMinutes: 40,
          concept: 'document.createElement()',
          conceptExplanation: 'createElement는 새로운 HTML 요소를 JavaScript로 생성해요. 생성 후 textContent나 속성을 설정하고, appendChild로 DOM에 추가합니다. 동적으로 리스트, 카드, 버튼 등을 만들 때 사용해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'createElement로 새 요소를 만들 수 있다',
            'textContent와 속성을 설정할 수 있다',
            'appendChild로 DOM에 추가할 수 있다'
          ],
          realWorldExample: 'Todo 항목 추가, SNS 피드 무한 스크롤, 댓글 목록 등에 사용해요!',
          starterCode: `// HTML: <ul id="list"></ul>
//        <button id="addBtn">항목 추가</button>
// 버튼 클릭 시 리스트에 새 항목을 추가하세요

function setupList() {
  const list = document.getElementById("list");
  const button = document.getElementById("addBtn");
  let count = 1;

  button.addEventListener("click", function() {
    // 1. li 요소 생성
    const li =

    // 2. 텍스트 설정
    li.textContent =

    // 3. ul에 추가
    list.appendChild(li);

    count++;
  });
}

setupList();`,
          solution: `function setupList() {
  const list = document.getElementById("list");
  const button = document.getElementById("addBtn");
  let count = 1;

  button.addEventListener("click", function() {
    const li = document.createElement("li");
    li.textContent = \`항목 \${count}\`;
    list.appendChild(li);
    count++;
  });
}

setupList();`,
          hints: [
            '💡 document.createElement("태그명")',
            '💡 textContent로 내용 설정',
            '💡 부모.appendChild(자식)으로 추가',
            '💡 템플릿 리터럴로 번호 포함'
          ],
          testCases: [
            {
              input: '버튼 3번 클릭',
              expectedOutput: '항목 1, 항목 2, 항목 3 리스트',
              description: '동적으로 li 요소 생성'
            }
          ],
          challenges: [
            { id: 'c1', title: '요소 생성하고 추가하기', description: 'createElement로 요소를 만들고 DOM에 추가하세요.', difficulty: 'easy', hints: ['document.createElement("태그명")', 'appendChild로 부모에 추가'], estimatedMinutes: 3, starterCode: '// HTML: <ul id="list"></ul>\nconst list = document.getElementById("list");\n// TODO: <li> 요소를 만들어 "새 항목"이라는 텍스트를 넣고 list에 추가\n', solution: 'const list = document.getElementById("list");\nconst li = document.createElement("li");\nli.textContent = "새 항목";\nlist.appendChild(li);', feedback: { perfect: 'createElement + appendChild를 완벽하게 사용했어요!', good: '요소 추가가 잘 됐어요!', partial: 'createElement로 만들고 textContent 설정 후 appendChild하세요.', wrong: 'createElement("li")로 만들고 textContent 설정 후 부모.appendChild(자식)' } },
            { id: 'c2', title: '속성과 스타일 설정', description: '생성한 요소에 속성과 스타일을 설정하세요.', difficulty: 'easy', hints: ['setAttribute로 속성 추가', 'classList.add로 클래스 추가'], estimatedMinutes: 4, starterCode: '// HTML: <div id="container"></div>\nconst container = document.getElementById("container");\n// TODO: <a> 태그를 만들어 href="https://example.com", class="link", 텍스트 "링크" 설정 후 추가\n', solution: 'const container = document.getElementById("container");\nconst link = document.createElement("a");\nlink.setAttribute("href", "https://example.com");\nlink.classList.add("link");\nlink.textContent = "링크";\ncontainer.appendChild(link);', feedback: { perfect: '속성과 클래스 설정을 완벽하게 했어요!', good: '요소 설정이 잘 됐어요!', partial: 'setAttribute로 href, classList.add로 클래스를 추가하세요.', wrong: 'setAttribute("속성명", "값")과 classList.add("클래스명")을 사용합니다.' } },
            { id: 'c3', title: '동적 리스트 만들기', description: '배열 데이터로 리스트를 동적으로 생성하세요.', difficulty: 'medium', hints: ['forEach로 배열을 순회하며 createElement', '각 요소를 appendChild로 추가'], estimatedMinutes: 6, starterCode: '// HTML: <ul id="menu"></ul>\nconst menuItems = ["홈", "소개", "연락처", "블로그"];\nconst menu = document.getElementById("menu");\n// TODO: menuItems 배열로 <li> 요소들을 동적으로 생성하여 추가\n', solution: 'const menuItems = ["홈", "소개", "연락처", "블로그"];\nconst menu = document.getElementById("menu");\nmenuItems.forEach(function(item) {\n  const li = document.createElement("li");\n  li.textContent = item;\n  menu.appendChild(li);\n});', feedback: { perfect: '동적 리스트를 완벽하게 생성했어요!', good: '리스트가 잘 만들어졌어요!', partial: 'forEach 안에서 createElement + appendChild를 반복하세요.', wrong: '배열.forEach에서 각 항목마다 li를 만들어 부모에 추가합니다.' } },
            { id: 'c4', title: 'DocumentFragment 활용', description: 'DocumentFragment로 성능을 최적화하여 여러 요소를 추가하세요.', difficulty: 'medium', hints: ['document.createDocumentFragment()로 가상 컨테이너 생성', 'fragment에 먼저 추가 후 한번에 DOM에 추가'], estimatedMinutes: 7, starterCode: '// HTML: <ul id="list"></ul>\nconst data = Array.from({length: 100}, function(_, i) { return "항목 " + (i + 1); });\nconst list = document.getElementById("list");\n// TODO: DocumentFragment를 사용하여 100개 항목을 효율적으로 추가\n', solution: 'const data = Array.from({length: 100}, function(_, i) { return "항목 " + (i + 1); });\nconst list = document.getElementById("list");\nconst fragment = document.createDocumentFragment();\ndata.forEach(function(text) {\n  const li = document.createElement("li");\n  li.textContent = text;\n  fragment.appendChild(li);\n});\nlist.appendChild(fragment);', feedback: { perfect: 'DocumentFragment를 완벽하게 활용했어요! 성능도 최적!', good: 'fragment 사용이 잘 됐어요!', partial: 'fragment에 먼저 모든 요소를 추가한 후 한번에 DOM에 넣으세요.', wrong: 'createDocumentFragment()로 가상 컨테이너를 만들어 한번에 추가합니다.' } },
            { id: 'c5', title: '삭제 버튼이 있는 목록', description: '각 항목에 삭제 버튼을 추가하여 동적 삭제를 구현하세요.', difficulty: 'hard', hints: ['li 안에 span과 button을 함께 추가', '삭제 버튼에 이벤트로 parentElement.remove()'], estimatedMinutes: 8, starterCode: '// HTML: <ul id="list"></ul>\nconst items = ["공부", "운동", "독서"];\nconst list = document.getElementById("list");\n// TODO: 각 항목에 텍스트와 [삭제] 버튼을 만들고, 삭제 클릭 시 해당 li 제거\nfunction addItem(text) {\n  // li, span, button 생성 및 조합\n}\nitems.forEach(addItem);', solution: 'const items = ["공부", "운동", "독서"];\nconst list = document.getElementById("list");\nfunction addItem(text) {\n  const li = document.createElement("li");\n  const span = document.createElement("span");\n  span.textContent = text;\n  const delBtn = document.createElement("button");\n  delBtn.textContent = "삭제";\n  delBtn.addEventListener("click", function() {\n    li.remove();\n  });\n  li.appendChild(span);\n  li.appendChild(delBtn);\n  list.appendChild(li);\n}\nitems.forEach(addItem);', feedback: { perfect: '삭제 기능이 있는 동적 목록을 완벽하게 구현했어요!', good: '삭제 기능이 잘 작동해요!', partial: 'button에 click 이벤트로 li.remove()를 호출하세요.', wrong: '삭제 버튼의 click에서 부모 li를 remove()로 제거합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 10: 폼 유효성 검사
        {
          id: 'w43-m10',
          title: '폼 제출 전 유효성 검사하기',
          description: '사용자 입력이 올바른지 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 120,
          estimatedMinutes: 40,
          concept: '폼 유효성 검사',
          conceptExplanation: '폼 제출 전에 입력값이 올바른지 확인하는 것을 유효성 검사라고 해요. submit 이벤트를 가로채서 검사하고, event.preventDefault()로 제출을 막을 수 있습니다. 빈 값, 이메일 형식, 비밀번호 길이 등을 확인해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'submit 이벤트를 처리할 수 있다',
            'event.preventDefault()로 기본 동작을 막을 수 있다',
            '입력값의 유효성을 검사할 수 있다'
          ],
          realWorldExample: '회원가입, 로그인, 결제 정보 입력 등 모든 폼에서 사용해요!',
          starterCode: `// HTML: <form id="loginForm">
//          <input type="text" id="username" placeholder="사용자명">
//          <button type="submit">로그인</button>
//        </form>
// 사용자명이 3글자 이상일 때만 제출 허용하세요

function setupForm() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    // 기본 제출 동작 막기
    event.preventDefault();

    const username = document.getElementById("username").value;

    // 유효성 검사
    if (username.length >= 3) {
      console.log("로그인 성공!");
    } else {

    }
  });
}

setupForm();`,
          solution: `function setupForm() {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    if (username.length >= 3) {
      console.log("로그인 성공!");
    } else {
      alert("사용자명은 3글자 이상이어야 합니다!");
    }
  });
}

setupForm();`,
          hints: [
            '💡 submit 이벤트는 폼 제출 시 발생',
            '💡 event.preventDefault()는 필수!',
            '💡 .value로 입력값 가져오기',
            '💡 .length로 글자 수 확인'
          ],
          testCases: [
            {
              input: '"ab" 입력 후 제출',
              expectedOutput: '경고 메시지 표시',
              description: '3글자 미만 거부'
            },
            {
              input: '"abc" 입력 후 제출',
              expectedOutput: '"로그인 성공!" 출력',
              description: '3글자 이상 허용'
            }
          ],
          challenges: [
            { id: 'c1', title: '빈 값 체크하기', description: '입력 필드가 비어있는지 확인하세요.', difficulty: 'easy', hints: ['value.trim() === ""로 빈값 확인', 'trim()은 앞뒤 공백을 제거'], estimatedMinutes: 3, starterCode: '// HTML: <input id="name"> <button id="submit">제출</button> <span id="error"></span>\nconst nameInput = document.getElementById("name");\nconst submitBtn = document.getElementById("submit");\nconst error = document.getElementById("error");\n// TODO: 제출 시 name이 비어있으면 에러 메시지 표시\nsubmitBtn.addEventListener("click", function() {\n  // 빈값 체크\n});', solution: 'const nameInput = document.getElementById("name");\nconst submitBtn = document.getElementById("submit");\nconst error = document.getElementById("error");\nsubmitBtn.addEventListener("click", function() {\n  if (nameInput.value.trim() === "") {\n    error.textContent = "이름을 입력하세요";\n    error.style.color = "red";\n  } else {\n    error.textContent = "";\n    console.log("제출: " + nameInput.value);\n  }\n});', feedback: { perfect: '빈값 검증을 완벽하게 구현했어요!', good: '검증이 잘 돼요!', partial: 'value.trim() === ""로 빈값을 체크하세요.', wrong: 'trim()으로 공백을 제거한 후 빈 문자열인지 확인합니다.' } },
            { id: 'c2', title: '이메일 형식 검증', description: '입력된 이메일이 올바른 형식인지 확인하세요.', difficulty: 'easy', hints: ['@와 .이 포함되어 있는지 확인', 'includes()로 간단히 체크'], estimatedMinutes: 4, starterCode: '// HTML: <input id="email" type="text"> <span id="msg"></span>\nconst emailInput = document.getElementById("email");\nconst msg = document.getElementById("msg");\n// TODO: input 이벤트로 이메일에 @와 .이 포함되어 있는지 실시간 검증\nemailInput.addEventListener("input", function(e) {\n  const value = e.target.value;\n  // 검증 로직\n});', solution: 'const emailInput = document.getElementById("email");\nconst msg = document.getElementById("msg");\nemailInput.addEventListener("input", function(e) {\n  const value = e.target.value;\n  if (value.includes("@") && value.includes(".")) {\n    msg.textContent = "올바른 형식";\n    msg.style.color = "green";\n  } else {\n    msg.textContent = "@와 .을 포함해야 합니다";\n    msg.style.color = "red";\n  }\n});', feedback: { perfect: '이메일 검증을 완벽하게 구현했어요!', good: '기본 검증이 잘 돼요!', partial: 'includes("@") && includes(".")로 확인하세요.', wrong: '문자열.includes()로 특정 문자가 포함되어 있는지 확인합니다.' } },
            { id: 'c3', title: '비밀번호 길이 검증', description: '비밀번호의 최소/최대 길이를 검증하세요.', difficulty: 'medium', hints: ['value.length로 길이를 확인', '최소 8자, 최대 20자 등으로 설정'], estimatedMinutes: 5, starterCode: '// HTML: <input id="pw" type="password"> <span id="pwMsg"></span>\nconst pw = document.getElementById("pw");\nconst pwMsg = document.getElementById("pwMsg");\n// TODO: 8자 미만이면 "8자 이상 필요", 20자 초과면 "20자 이하로", 적합하면 "사용 가능"\npw.addEventListener("input", function(e) {\n  const len = e.target.value.length;\n  // 검증 로직\n});', solution: 'const pw = document.getElementById("pw");\nconst pwMsg = document.getElementById("pwMsg");\npw.addEventListener("input", function(e) {\n  const len = e.target.value.length;\n  if (len < 8) {\n    pwMsg.textContent = "8자 이상 필요 (" + len + "/8)";\n    pwMsg.style.color = "red";\n  } else if (len > 20) {\n    pwMsg.textContent = "20자 이하로 입력하세요";\n    pwMsg.style.color = "red";\n  } else {\n    pwMsg.textContent = "사용 가능 (" + len + "자)";\n    pwMsg.style.color = "green";\n  }\n});', feedback: { perfect: '비밀번호 길이 검증을 완벽하게 했어요!', good: '길이 검증이 잘 돼요!', partial: 'if/else if로 길이 범위를 체크하세요.', wrong: 'value.length로 길이를 구해 조건 분기합니다.' } },
            { id: 'c4', title: '비밀번호 확인 일치', description: '비밀번호와 확인 입력이 일치하는지 검증하세요.', difficulty: 'medium', hints: ['두 input의 value를 비교하세요', '!== 연산자 사용'], estimatedMinutes: 6, starterCode: '// HTML: <input id="pw"> <input id="pwConfirm"> <span id="match"></span>\nconst pw = document.getElementById("pw");\nconst pwConfirm = document.getElementById("pwConfirm");\nconst match = document.getElementById("match");\n// TODO: pwConfirm 입력 시 pw와 일치하는지 실시간 확인\npwConfirm.addEventListener("input", function() {\n  // 일치 여부 표시\n});', solution: 'const pw = document.getElementById("pw");\nconst pwConfirm = document.getElementById("pwConfirm");\nconst match = document.getElementById("match");\npwConfirm.addEventListener("input", function() {\n  if (pwConfirm.value === pw.value) {\n    match.textContent = "비밀번호가 일치합니다";\n    match.style.color = "green";\n  } else {\n    match.textContent = "비밀번호가 일치하지 않습니다";\n    match.style.color = "red";\n  }\n});', feedback: { perfect: '비밀번호 일치 검증을 완벽하게 했어요!', good: '일치 확인이 잘 돼요!', partial: 'pwConfirm.value === pw.value로 비교하세요.', wrong: '두 입력 필드의 value를 === 연산자로 비교합니다.' } },
            { id: 'c5', title: '종합 폼 유효성 검사', description: '여러 필드를 종합적으로 검증하는 폼을 만드세요.', difficulty: 'hard', hints: ['모든 필드를 검사하는 validate 함수', '모두 통과해야 제출 가능'], estimatedMinutes: 8, starterCode: '// HTML: <input id="name"> <input id="email"> <input id="age">\n// <button id="submit">가입</button> <div id="errors"></div>\n// TODO: 제출 시 모든 필드 검증: name(비어있지 않음), email(@포함), age(1-120 숫자)\nfunction validate() {\n  const errors = [];\n  // 검증 로직 - 에러가 있으면 errors 배열에 push\n  return errors;\n}\n', solution: 'function validate() {\n  const errors = [];\n  const name = document.getElementById("name").value.trim();\n  const email = document.getElementById("email").value.trim();\n  const age = parseInt(document.getElementById("age").value);\n  if (name === "") errors.push("이름을 입력하세요");\n  if (!email.includes("@")) errors.push("올바른 이메일을 입력하세요");\n  if (isNaN(age) || age < 1 || age > 120) errors.push("나이는 1-120 사이 숫자");\n  return errors;\n}\ndocument.getElementById("submit").addEventListener("click", function() {\n  const errors = validate();\n  const errDiv = document.getElementById("errors");\n  if (errors.length > 0) {\n    errDiv.innerHTML = errors.map(function(e) { return "<p style=\'color:red\'>" + e + "</p>"; }).join("");\n  } else {\n    errDiv.innerHTML = "<p style=\'color:green\'>가입 성공!</p>";\n  }\n});', feedback: { perfect: '종합 유효성 검사를 완벽하게 구현했어요!', good: '여러 필드 검증이 잘 돼요!', partial: '각 필드별 검증 조건을 추가하고 errors 배열에 push하세요.', wrong: '각 필드를 검사하여 에러 메시지를 배열에 모은 후 표시합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 11: 로컬 스토리지 기초
        {
          id: 'w43-m11',
          title: '로컬 스토리지에 데이터 저장하기',
          description: '브라우저에 데이터를 영구 저장해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'use',
          exp: 120,
          estimatedMinutes: 40,
          concept: 'localStorage',
          conceptExplanation: 'localStorage는 브라우저에 데이터를 저장하는 공간이에요. 페이지를 닫아도 데이터가 남아있습니다. setItem으로 저장, getItem으로 불러오기, removeItem으로 삭제해요. 문자열만 저장 가능하므로 객체는 JSON으로 변환해야 해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'localStorage.setItem()으로 데이터를 저장할 수 있다',
            'localStorage.getItem()으로 데이터를 불러올 수 있다',
            'JSON과 함께 사용하여 객체를 저장할 수 있다'
          ],
          realWorldExample: '설정 저장, 다크모드 상태, 장바구니, 방문 기록 등에 사용해요!',
          starterCode: `// 사용자 이름을 로컬 스토리지에 저장하고 불러오기

function saveAndLoadName(name) {
  // 1. 로컬 스토리지에 저장
  localStorage.setItem("username", name);

  // 2. 불러오기
  const savedName =

  console.log("저장된 이름:", savedName);
  return savedName;
}

// 테스트
saveAndLoadName("김코딩");`,
          solution: `function saveAndLoadName(name) {
  localStorage.setItem("username", name);

  const savedName = localStorage.getItem("username");

  console.log("저장된 이름:", savedName);
  return savedName;
}

saveAndLoadName("김코딩");`,
          hints: [
            '💡 localStorage.setItem("키", "값")',
            '💡 localStorage.getItem("키")',
            '💡 없는 키는 null 반환',
            '💡 객체는 JSON.stringify로 변환 후 저장'
          ],
          testCases: [
            {
              input: '"김코딩"',
              expectedOutput: '저장 후 불러온 값: "김코딩"',
              description: 'localStorage에 저장/불러오기'
            }
          ],
          challenges: [
            { id: 'c1', title: '데이터 저장하기', description: 'localStorage.setItem으로 데이터를 저장하세요.', difficulty: 'easy', hints: ['localStorage.setItem("키", "값")', '문자열만 저장 가능'], estimatedMinutes: 3, starterCode: '// TODO: localStorage에 "username"이라는 키로 "홍길동"을 저장하세요\n// 저장 후 확인\nconsole.log(localStorage.getItem("username"));', solution: 'localStorage.setItem("username", "홍길동");\nconsole.log(localStorage.getItem("username")); // "홍길동"', feedback: { perfect: 'localStorage 저장을 완벽하게 했어요!', good: '데이터가 잘 저장됐어요!', partial: 'localStorage.setItem("키", "값")을 사용하세요.', wrong: 'setItem에 키와 값을 문자열로 전달합니다.' } },
            { id: 'c2', title: '데이터 읽기와 삭제', description: 'getItem과 removeItem을 사용하세요.', difficulty: 'easy', hints: ['getItem으로 읽기, removeItem으로 삭제'], estimatedMinutes: 4, starterCode: 'localStorage.setItem("theme", "dark");\n// TODO: "theme" 값을 읽어서 출력\nconst theme = \nconsole.log(theme);\n// TODO: "theme"을 삭제\n\nconsole.log(localStorage.getItem("theme")); // null', solution: 'localStorage.setItem("theme", "dark");\nconst theme = localStorage.getItem("theme");\nconsole.log(theme); // "dark"\nlocalStorage.removeItem("theme");\nconsole.log(localStorage.getItem("theme")); // null', feedback: { perfect: '읽기와 삭제를 완벽하게 했어요!', good: '잘했어요!', partial: 'getItem으로 읽고 removeItem으로 삭제하세요.', wrong: 'getItem("키")으로 읽고, removeItem("키")으로 삭제합니다.' } },
            { id: 'c3', title: '객체/배열 저장하기', description: 'JSON.stringify로 객체를 localStorage에 저장하세요.', difficulty: 'medium', hints: ['저장: JSON.stringify(obj)', '읽기: JSON.parse(str)'], estimatedMinutes: 5, starterCode: 'const user = { name: "홍길동", age: 15, scores: [90, 85, 92] };\n// TODO: user를 localStorage에 저장하고 다시 읽어오세요\n// 저장\n\n// 읽기\nconst loaded = \nconsole.log(loaded.name, loaded.scores);', solution: 'const user = { name: "홍길동", age: 15, scores: [90, 85, 92] };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst loaded = JSON.parse(localStorage.getItem("user"));\nconsole.log(loaded.name, loaded.scores);', feedback: { perfect: 'JSON + localStorage 조합을 완벽하게 했어요!', good: '객체 저장이 잘 됐어요!', partial: 'JSON.stringify로 변환 후 저장, JSON.parse로 복원하세요.', wrong: '객체는 JSON.stringify()로 문자열로 변환해야 localStorage에 저장됩니다.' } },
            { id: 'c4', title: '설정 저장/불러오기', description: '사용자 설정을 localStorage로 유지하세요.', difficulty: 'medium', hints: ['페이지 로드 시 저장된 설정을 불러오세요', '없으면 기본값을 사용'], estimatedMinutes: 7, starterCode: '// TODO: loadSettings()로 저장된 설정을 불러오고 (없으면 기본값)\n// saveSettings()로 현재 설정을 저장\nfunction loadSettings() {\n  const saved = localStorage.getItem("settings");\n  // TODO: saved가 있으면 파싱, 없으면 기본값 반환\n  return { theme: "light", fontSize: 14, lang: "ko" };\n}\nfunction saveSettings(settings) {\n  // TODO: settings를 localStorage에 저장\n}', solution: 'function loadSettings() {\n  const saved = localStorage.getItem("settings");\n  if (saved) {\n    return JSON.parse(saved);\n  }\n  return { theme: "light", fontSize: 14, lang: "ko" };\n}\nfunction saveSettings(settings) {\n  localStorage.setItem("settings", JSON.stringify(settings));\n}\nconst settings = loadSettings();\nsettings.theme = "dark";\nsaveSettings(settings);', feedback: { perfect: '설정 저장/불러오기를 완벽하게 구현했어요!', good: '설정 관리가 잘 돼요!', partial: 'saved가 null이면 기본값, 아니면 JSON.parse하세요.', wrong: 'getItem이 null이면 기본값 객체를 반환합니다.' } },
            { id: 'c5', title: '장바구니 localStorage 구현', description: 'localStorage로 장바구니 추가/삭제/목록 기능을 만드세요.', difficulty: 'hard', hints: ['배열을 JSON으로 저장/불러오기', '추가/삭제 후 다시 저장'], estimatedMinutes: 8, starterCode: '// TODO: 장바구니 함수 3개 구현\nfunction getCart() {\n  // localStorage에서 cart 배열을 불러오기 (없으면 빈 배열)\n}\nfunction addToCart(item) {\n  // 장바구니에 item 추가 후 저장\n}\nfunction removeFromCart(index) {\n  // 해당 인덱스 항목 제거 후 저장\n}', solution: 'function getCart() {\n  const saved = localStorage.getItem("cart");\n  return saved ? JSON.parse(saved) : [];\n}\nfunction addToCart(item) {\n  const cart = getCart();\n  cart.push(item);\n  localStorage.setItem("cart", JSON.stringify(cart));\n}\nfunction removeFromCart(index) {\n  const cart = getCart();\n  cart.splice(index, 1);\n  localStorage.setItem("cart", JSON.stringify(cart));\n}\naddToCart("노트북");\naddToCart("마우스");\nconsole.log(getCart());', feedback: { perfect: '장바구니 CRUD를 완벽하게 구현했어요!', good: '장바구니 기능이 잘 작동해요!', partial: 'getCart에서 불러오고 push/splice 후 다시 setItem으로 저장하세요.', wrong: 'JSON.parse로 배열 불러오기 → 수정 → JSON.stringify로 다시 저장합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 12: 다크모드 토글
        {
          id: 'w43-m12',
          title: '다크모드 전환 버튼 만들기',
          description: 'classList와 localStorage로 다크모드를 구현해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 150,
          estimatedMinutes: 45,
          concept: '다크모드 구현',
          conceptExplanation: 'body에 "dark" 클래스를 토글하고, 그 상태를 localStorage에 저장하면 다크모드를 구현할 수 있어요. 페이지 로드 시 저장된 설정을 불러와서 적용하면 설정이 유지됩니다. 실무에서 자주 사용하는 패턴이에요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'classList.toggle()로 클래스를 토글할 수 있다',
            'localStorage로 설정을 영구 저장할 수 있다',
            '페이지 로드 시 저장된 설정을 적용할 수 있다'
          ],
          realWorldExample: '거의 모든 웹사이트의 다크모드 기능이 이 방식으로 구현돼요!',
          starterCode: `// HTML: <button id="themeBtn">다크모드</button>
// CSS: body.dark { background: #222; color: white; }

function setupDarkMode() {
  const button = document.getElementById("themeBtn");

  // 페이지 로드 시 저장된 설정 적용
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark");
  }

  // 버튼 클릭 시 토글
  button.addEventListener("click", function() {
    // dark 클래스 토글

    // 현재 상태 저장

  });
}

setupDarkMode();`,
          solution: `function setupDarkMode() {
  const button = document.getElementById("themeBtn");

  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark");
  }

  button.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    const isNowDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isNowDark);
  });
}

setupDarkMode();`,
          hints: [
            '💡 classList.toggle("dark")로 전환',
            '💡 classList.contains("dark")로 확인',
            '💡 boolean을 문자열로 저장',
            '💡 페이지 로드 시 적용 잊지 말기'
          ],
          testCases: [
            {
              input: '버튼 클릭',
              expectedOutput: 'dark 클래스 토글 및 저장',
              description: '다크모드 전환 및 저장'
            }
          ],
          challenges: [
            { id: 'c1', title: 'body에 클래스 토글', description: 'body의 classList를 토글하여 다크모드를 전환하세요.', difficulty: 'easy', hints: ['document.body.classList.toggle("dark")', 'CSS에서 .dark 클래스 스타일 정의'], estimatedMinutes: 3, starterCode: '// CSS: .dark { background: #1a1a2e; color: #eee; }\n// HTML: <button id="toggleBtn">다크모드</button>\nconst toggleBtn = document.getElementById("toggleBtn");\n// TODO: 버튼 클릭 시 body에 "dark" 클래스 토글\n', solution: 'const toggleBtn = document.getElementById("toggleBtn");\ntoggleBtn.addEventListener("click", function() {\n  document.body.classList.toggle("dark");\n});', feedback: { perfect: '다크모드 토글을 완벽하게 구현했어요!', good: '클래스 토글이 잘 돼요!', partial: 'document.body.classList.toggle("dark")를 사용하세요.', wrong: 'body의 classList.toggle("dark")로 다크/라이트 모드를 전환합니다.' } },
            { id: 'c2', title: '버튼 텍스트 변경', description: '다크모드 상태에 따라 버튼 텍스트를 변경하세요.', difficulty: 'easy', hints: ['classList.contains("dark")로 현재 상태 확인', '삼항연산자로 텍스트 결정'], estimatedMinutes: 4, starterCode: '// HTML: <button id="btn">다크모드 켜기</button>\nconst btn = document.getElementById("btn");\n// TODO: 클릭 시 토글 후, 현재 상태에 따라 버튼 텍스트 변경\nbtn.addEventListener("click", function() {\n  document.body.classList.toggle("dark");\n  // 버튼 텍스트 업데이트\n});', solution: 'const btn = document.getElementById("btn");\nbtn.addEventListener("click", function() {\n  document.body.classList.toggle("dark");\n  const isDark = document.body.classList.contains("dark");\n  btn.textContent = isDark ? "라이트모드 켜기" : "다크모드 켜기";\n});', feedback: { perfect: '상태에 따른 텍스트 변경을 완벽하게 했어요!', good: '텍스트가 잘 바뀌어요!', partial: 'contains("dark")로 현재 상태를 확인하세요.', wrong: 'toggle 후 contains로 현재 상태를 확인하여 텍스트를 결정합니다.' } },
            { id: 'c3', title: 'localStorage로 설정 저장', description: '다크모드 설정을 localStorage에 저장하세요.', difficulty: 'medium', hints: ['localStorage.setItem("darkMode", "true/false")', '페이지 로드 시 저장된 설정 적용'], estimatedMinutes: 6, starterCode: '// TODO: 페이지 로드 시 저장된 다크모드 설정을 적용하고\n// 토글할 때마다 설정을 저장하세요\nconst btn = document.getElementById("btn");\n// 페이지 로드 시 설정 적용\nconst savedMode = localStorage.getItem("darkMode");\n// TODO: savedMode가 "true"이면 dark 클래스 추가\n\nbtn.addEventListener("click", function() {\n  document.body.classList.toggle("dark");\n  // TODO: 현재 상태를 localStorage에 저장\n});', solution: 'const btn = document.getElementById("btn");\nconst savedMode = localStorage.getItem("darkMode");\nif (savedMode === "true") {\n  document.body.classList.add("dark");\n}\nbtn.addEventListener("click", function() {\n  document.body.classList.toggle("dark");\n  const isDark = document.body.classList.contains("dark");\n  localStorage.setItem("darkMode", isDark);\n});', feedback: { perfect: '다크모드 설정 저장까지 완벽하게 구현했어요!', good: '설정이 잘 저장돼요!', partial: 'localStorage에 "true"/"false"를 저장하고 로드 시 확인하세요.', wrong: 'setItem으로 저장, getItem으로 불러와 적용합니다.' } },
            { id: 'c4', title: 'CSS 변수로 테마 구현', description: 'CSS 커스텀 속성(변수)을 JS로 변경하여 테마를 구현하세요.', difficulty: 'medium', hints: ['document.documentElement.style.setProperty("--변수", "값")', 'CSS 변수: var(--변수명)'], estimatedMinutes: 7, starterCode: '// CSS: :root { --bg: #fff; --text: #333; --primary: #3498db; }\n//       body { background: var(--bg); color: var(--text); }\n// TODO: 다크모드 시 CSS 변수를 변경하세요\nconst root = document.documentElement;\nfunction setDarkTheme() {\n  // CSS 변수 변경\n}\nfunction setLightTheme() {\n  // CSS 변수 원래대로\n}', solution: 'const root = document.documentElement;\nfunction setDarkTheme() {\n  root.style.setProperty("--bg", "#1a1a2e");\n  root.style.setProperty("--text", "#eee");\n  root.style.setProperty("--primary", "#e94560");\n}\nfunction setLightTheme() {\n  root.style.setProperty("--bg", "#fff");\n  root.style.setProperty("--text", "#333");\n  root.style.setProperty("--primary", "#3498db");\n}', feedback: { perfect: 'CSS 변수로 테마 전환을 완벽하게 구현했어요!', good: 'CSS 변수 활용이 훌륭해요!', partial: 'setProperty("--변수명", "값")으로 CSS 변수를 변경하세요.', wrong: 'document.documentElement.style.setProperty로 CSS 커스텀 속성을 변경합니다.' } },
            { id: 'c5', title: '시스템 다크모드 감지', description: 'matchMedia로 시스템 다크모드 설정을 감지하세요.', difficulty: 'hard', hints: ['window.matchMedia("(prefers-color-scheme: dark)")', '.matches로 현재 상태 확인'], estimatedMinutes: 8, starterCode: '// TODO: 시스템 다크모드 감지하여 자동 적용\n// 1. 현재 시스템 설정 확인\n// 2. 설정 변경 시 자동 반응\nconst darkQuery = window.matchMedia("(prefers-color-scheme: dark)");\n// TODO: 현재 시스템 설정에 따라 적용\n// TODO: 시스템 설정 변경 감지\n', solution: 'const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");\nif (darkQuery.matches) {\n  document.body.classList.add("dark");\n}\ndarkQuery.addEventListener("change", function(e) {\n  if (e.matches) {\n    document.body.classList.add("dark");\n  } else {\n    document.body.classList.remove("dark");\n  }\n});', feedback: { perfect: '시스템 다크모드 감지를 완벽하게 구현했어요!', good: '시스템 설정 연동이 잘 돼요!', partial: 'darkQuery.matches로 현재 상태, "change" 이벤트로 변경을 감지하세요.', wrong: 'matchMedia의 matches 속성과 change 이벤트를 사용합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 13: 간단한 Todo 앱 - 추가
        {
          id: 'w43-m13',
          title: 'Todo 앱 만들기 1: 항목 추가',
          description: '입력한 할 일을 리스트에 추가해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 150,
          estimatedMinutes: 50,
          concept: 'Todo 앱 - CRUD의 C',
          conceptExplanation: 'Todo 앱은 CRUD(생성, 읽기, 수정, 삭제)의 대표적인 예제예요. 먼저 Create(생성) 기능을 구현합니다. 입력값을 받아서 li 요소를 동적으로 생성하고 ul에 추가하는 방식이에요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'input과 submit 이벤트를 조합할 수 있다',
            'createElement로 동적으로 요소를 생성할 수 있다',
            '기본적인 Todo 앱의 구조를 이해할 수 있다'
          ],
          realWorldExample: '할 일 관리, 장바구니, 위시리스트 등 모든 리스트 기반 앱의 기초예요!',
          starterCode: `// HTML: <input type="text" id="todoInput" placeholder="할 일 입력">
//        <button id="addBtn">추가</button>
//        <ul id="todoList"></ul>

function setupTodoApp() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", function() {
    const text = input.value.trim();

    // 빈 값 체크
    if (text === "") {
      alert("할 일을 입력하세요!");
      return;
    }

    // li 요소 생성 및 추가


    // 입력 필드 초기화
    input.value = "";
  });
}

setupTodoApp();`,
          solution: `function setupTodoApp() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", function() {
    const text = input.value.trim();

    if (text === "") {
      alert("할 일을 입력하세요!");
      return;
    }

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    input.value = "";
  });
}

setupTodoApp();`,
          hints: [
            '💡 .trim()으로 공백 제거',
            '💡 빈 문자열 체크 필수',
            '💡 createElement("li") 사용',
            '💡 추가 후 input.value = ""로 초기화'
          ],
          testCases: [
            {
              input: '"운동하기" 입력 후 추가',
              expectedOutput: '리스트에 "운동하기" 추가',
              description: 'Todo 항목 추가'
            }
          ],
          challenges: [
            { id: 'c1', title: 'input에서 값 읽기', description: 'input 요소의 값을 읽어 배열에 추가하세요.', difficulty: 'easy', hints: ['input.value로 현재 입력값 읽기', 'push로 배열에 추가'], estimatedMinutes: 3, starterCode: '// HTML: <input id="todoInput"> <button id="addBtn">추가</button>\nconst todos = [];\nconst input = document.getElementById("todoInput");\nconst addBtn = document.getElementById("addBtn");\n// TODO: 추가 버튼 클릭 시 input 값을 todos에 push하고 input 비우기\naddBtn.addEventListener("click", function() {\n  // 구현\n});', solution: 'const todos = [];\nconst input = document.getElementById("todoInput");\nconst addBtn = document.getElementById("addBtn");\naddBtn.addEventListener("click", function() {\n  if (input.value.trim() !== "") {\n    todos.push(input.value);\n    input.value = "";\n    console.log(todos);\n  }\n});', feedback: { perfect: 'Todo 추가(Create)를 완벽하게 구현했어요!', good: 'input 값 읽기가 잘 돼요!', partial: 'input.value로 값을 읽고 push 후 value를 비우세요.', wrong: 'todos.push(input.value) 후 input.value = ""로 초기화합니다.' } },
            { id: 'c2', title: 'Todo 목록 렌더링', description: '배열을 화면에 리스트로 렌더링하세요.', difficulty: 'easy', hints: ['innerHTML로 리스트 생성', 'map + join 패턴 사용'], estimatedMinutes: 4, starterCode: '// HTML: <ul id="todoList"></ul>\nconst todos = ["공부하기", "운동하기", "독서하기"];\nconst list = document.getElementById("todoList");\n// TODO: render 함수를 완성하여 todos를 <li>로 표시\nfunction render() {\n  list.innerHTML = // todos를 <li>로 변환\n}\nrender();', solution: 'const todos = ["공부하기", "운동하기", "독서하기"];\nconst list = document.getElementById("todoList");\nfunction render() {\n  list.innerHTML = todos.map(function(todo) {\n    return "<li>" + todo + "</li>";\n  }).join("");\n}\nrender();', feedback: { perfect: 'Todo 렌더링을 완벽하게 구현했어요!', good: '목록이 잘 표시돼요!', partial: 'map으로 <li> 태그를 만들고 join("")으로 합치세요.', wrong: 'todos.map(t => "<li>" + t + "</li>").join("")을 innerHTML에 설정합니다.' } },
            { id: 'c3', title: '추가 + 렌더링 연결', description: 'Todo 추가 후 자동으로 화면을 갱신하세요.', difficulty: 'medium', hints: ['push 후 render() 호출', 'render 함수가 전체를 다시 그림'], estimatedMinutes: 5, starterCode: '// HTML: <input id="input"> <button id="add">추가</button> <ul id="list"></ul>\nconst todos = [];\nfunction render() {\n  document.getElementById("list").innerHTML = todos.map(function(t) {\n    return "<li>" + t + "</li>";\n  }).join("");\n}\n// TODO: 추가 버튼 클릭 시 값 추가하고 render() 호출\ndocument.getElementById("add").addEventListener("click", function() {\n  // 구현\n});', solution: 'const todos = [];\nfunction render() {\n  document.getElementById("list").innerHTML = todos.map(function(t) {\n    return "<li>" + t + "</li>";\n  }).join("");\n}\ndocument.getElementById("add").addEventListener("click", function() {\n  const input = document.getElementById("input");\n  if (input.value.trim() !== "") {\n    todos.push(input.value);\n    input.value = "";\n    render();\n  }\n});', feedback: { perfect: '추가 후 렌더링까지 완벽하게 연결했어요!', good: '추가와 렌더링이 잘 연동돼요!', partial: 'push 후에 render()를 호출하세요.', wrong: 'todos.push(값) 후 render()를 호출하면 화면이 갱신됩니다.' } },
            { id: 'c4', title: 'Enter 키로 추가', description: 'Enter 키를 눌러도 Todo가 추가되도록 구현하세요.', difficulty: 'medium', hints: ['keydown 또는 keyup 이벤트 사용', 'event.key === "Enter" 확인'], estimatedMinutes: 6, starterCode: '// HTML: <input id="input"> <button id="add">추가</button>\nconst todos = [];\nfunction addTodo() {\n  const input = document.getElementById("input");\n  if (input.value.trim() !== "") {\n    todos.push(input.value);\n    input.value = "";\n    console.log(todos);\n  }\n}\n// 버튼 클릭으로 추가\ndocument.getElementById("add").addEventListener("click", addTodo);\n// TODO: Enter 키로도 추가\n', solution: 'const todos = [];\nfunction addTodo() {\n  const input = document.getElementById("input");\n  if (input.value.trim() !== "") {\n    todos.push(input.value);\n    input.value = "";\n    console.log(todos);\n  }\n}\ndocument.getElementById("add").addEventListener("click", addTodo);\ndocument.getElementById("input").addEventListener("keydown", function(e) {\n  if (e.key === "Enter") {\n    addTodo();\n  }\n});', feedback: { perfect: 'Enter 키 이벤트를 완벽하게 추가했어요!', good: 'Enter 키가 잘 동작해요!', partial: 'keydown 이벤트에서 e.key === "Enter"를 확인하세요.', wrong: 'addEventListener("keydown", function(e) { if (e.key === "Enter") addTodo() })' } },
            { id: 'c5', title: '빈 값 방지 + 중복 방지', description: '빈 값과 중복된 Todo를 방지하는 로직을 추가하세요.', difficulty: 'hard', hints: ['trim()으로 빈값 체크', 'includes()로 중복 체크'], estimatedMinutes: 8, starterCode: 'const todos = ["공부하기"];\nfunction addTodo(text) {\n  // TODO: 빈 값이면 "할 일을 입력하세요" 경고\n  // TODO: 이미 있는 항목이면 "이미 있는 항목입니다" 경고\n  // TODO: 통과하면 추가\n}\naddTodo(""); // 빈값\naddTodo("공부하기"); // 중복\naddTodo("운동하기"); // 정상 추가', solution: 'const todos = ["공부하기"];\nfunction addTodo(text) {\n  const trimmed = text.trim();\n  if (trimmed === "") {\n    console.log("할 일을 입력하세요");\n    return;\n  }\n  if (todos.includes(trimmed)) {\n    console.log("이미 있는 항목입니다");\n    return;\n  }\n  todos.push(trimmed);\n  console.log("추가됨:", trimmed, todos);\n}\naddTodo(""); // 빈값\naddTodo("공부하기"); // 중복\naddTodo("운동하기"); // 정상 추가', feedback: { perfect: '빈값 + 중복 방지를 완벽하게 구현했어요!', good: '검증 로직이 잘 작동해요!', partial: 'trim()과 includes()로 각각 체크 후 early return하세요.', wrong: '먼저 trim()으로 빈값 확인, includes()로 중복 확인 후 추가합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 14: Todo 앱 - 삭제
        {
          id: 'w43-m14',
          title: 'Todo 앱 만들기 2: 항목 삭제',
          description: '각 항목에 삭제 버튼을 추가해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 150,
          estimatedMinutes: 50,
          concept: 'Todo 앱 - CRUD의 D',
          conceptExplanation: 'Delete(삭제) 기능을 추가해요. 각 li에 삭제 버튼을 함께 생성하고, 버튼 클릭 시 해당 li를 DOM에서 제거합니다. removeChild() 또는 remove()를 사용해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '동적으로 생성한 요소에 이벤트를 추가할 수 있다',
            'removeChild() 또는 remove()로 요소를 삭제할 수 있다',
            '이벤트 위임의 개념을 이해할 수 있다'
          ],
          realWorldExample: '장바구니 상품 삭제, 댓글 삭제, 북마크 해제 등에 사용해요!',
          starterCode: `// 위 Todo 앱에 삭제 기능 추가
function setupTodoAppWithDelete() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    // 삭제 버튼 클릭 시 li 제거


    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
  });
}

setupTodoAppWithDelete();`,
          solution: `function setupTodoAppWithDelete() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");

  button.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";

    deleteBtn.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";
  });
}

setupTodoAppWithDelete();`,
          hints: [
            '💡 li.remove()로 자기 자신 제거',
            '💡 또는 list.removeChild(li)',
            '💡 각 버튼에 개별 이벤트 리스너',
            '💡 텍스트와 버튼 사이 공백 추가'
          ],
          testCases: [
            {
              input: '항목 추가 후 삭제 버튼 클릭',
              expectedOutput: '해당 항목이 리스트에서 제거',
              description: 'Todo 항목 삭제'
            }
          ],
          challenges: [
            { id: 'c1', title: 'splice로 배열 항목 삭제', description: 'splice를 사용하여 배열에서 특정 인덱스의 항목을 삭제하세요.', difficulty: 'easy', hints: ['arr.splice(index, 1)로 1개 삭제', '인덱스를 정확히 지정하세요'], estimatedMinutes: 3, starterCode: 'const todos = ["공부", "운동", "독서", "코딩"];\n// TODO: 인덱스 1의 항목("운동")을 삭제\n\nconsole.log(todos); // ["공부", "독서", "코딩"]', solution: 'const todos = ["공부", "운동", "독서", "코딩"];\ntodos.splice(1, 1);\nconsole.log(todos); // ["공부", "독서", "코딩"]', feedback: { perfect: 'splice 삭제를 완벽하게 이해했어요!', good: '삭제가 잘 됐어요!', partial: 'splice(인덱스, 삭제할개수)를 사용하세요.', wrong: 'arr.splice(1, 1)은 인덱스 1에서 1개를 삭제합니다.' } },
            { id: 'c2', title: 'filter로 항목 삭제', description: 'filter를 사용하여 불변적으로 항목을 제거하세요.', difficulty: 'easy', hints: ['filter는 원본을 변경하지 않고 새 배열 반환', '삭제할 항목을 제외하는 조건'], estimatedMinutes: 4, starterCode: 'const todos = ["공부", "운동", "독서", "코딩"];\n// TODO: "운동"을 제외한 새 배열 만들기 (filter 사용)\nconst newTodos = \nconsole.log(newTodos); // ["공부", "독서", "코딩"]\nconsole.log(todos); // 원본 유지: ["공부", "운동", "독서", "코딩"]', solution: 'const todos = ["공부", "운동", "독서", "코딩"];\nconst newTodos = todos.filter(function(t) { return t !== "운동"; });\nconsole.log(newTodos); // ["공부", "독서", "코딩"]\nconsole.log(todos); // ["공부", "운동", "독서", "코딩"]', feedback: { perfect: 'filter로 불변 삭제를 완벽하게 했어요!', good: 'filter 사용이 잘 됐어요!', partial: 'filter(t => t !== "삭제할값")으로 제외하세요.', wrong: 'filter는 조건에 맞는 것만 남긴 새 배열을 반환합니다.' } },
            { id: 'c3', title: '삭제 버튼으로 Todo 삭제', description: '각 Todo 항목에 삭제 버튼을 추가하고 클릭 시 삭제하세요.', difficulty: 'medium', hints: ['각 li에 data-index 속성으로 인덱스 저장', '삭제 후 render() 호출'], estimatedMinutes: 6, starterCode: 'let todos = ["공부", "운동", "독서"];\nconst list = document.getElementById("list");\nfunction render() {\n  list.innerHTML = todos.map(function(todo, i) {\n    return "<li>" + todo + " <button onclick=\'deleteTodo(" + i + ")\'>삭제</button></li>";\n  }).join("");\n}\n// TODO: deleteTodo 함수 구현 - 해당 인덱스의 항목 삭제 후 render\nfunction deleteTodo(index) {\n  // 구현\n}\nrender();', solution: 'let todos = ["공부", "운동", "독서"];\nconst list = document.getElementById("list");\nfunction render() {\n  list.innerHTML = todos.map(function(todo, i) {\n    return "<li>" + todo + " <button onclick=\'deleteTodo(" + i + ")\'>삭제</button></li>";\n  }).join("");\n}\nfunction deleteTodo(index) {\n  todos.splice(index, 1);\n  render();\n}\nrender();', feedback: { perfect: 'Todo 삭제를 완벽하게 구현했어요!', good: '삭제 기능이 잘 작동해요!', partial: 'splice로 삭제 후 render()를 호출하세요.', wrong: 'todos.splice(index, 1)로 삭제하고 render()로 화면을 갱신합니다.' } },
            { id: 'c4', title: '삭제 확인 대화상자', description: '삭제 전에 확인 대화상자를 표시하세요.', difficulty: 'medium', hints: ['confirm()은 확인/취소 대화상자 표시', 'true이면 삭제 진행'], estimatedMinutes: 5, starterCode: 'let todos = ["공부", "운동", "독서"];\n// TODO: confirm으로 확인 후 삭제하는 함수\nfunction deleteTodo(index) {\n  // confirm 대화상자 표시 후 확인 시에만 삭제\n}\ndeleteTodo(1); // "운동을 삭제할까요?" 확인 후 삭제', solution: 'let todos = ["공부", "운동", "독서"];\nfunction deleteTodo(index) {\n  if (confirm(todos[index] + "을(를) 삭제할까요?")) {\n    todos.splice(index, 1);\n    console.log("삭제됨:", todos);\n  } else {\n    console.log("삭제 취소");\n  }\n}\ndeleteTodo(1);', feedback: { perfect: '삭제 확인 기능을 완벽하게 추가했어요!', good: '확인 대화상자가 잘 작동해요!', partial: 'confirm()의 반환값(true/false)으로 분기하세요.', wrong: 'if (confirm("메시지")) { 삭제 진행 }으로 확인을 받습니다.' } },
            { id: 'c5', title: '전체 삭제 + 개별 삭제', description: '개별 삭제와 전체 삭제 기능을 모두 구현하세요.', difficulty: 'hard', hints: ['전체 삭제: 배열을 비우기', '개별 삭제: splice + render'], estimatedMinutes: 8, starterCode: '// HTML: <button id="clearAll">전체 삭제</button> <ul id="list"></ul>\nlet todos = ["공부", "운동", "독서", "코딩"];\nconst list = document.getElementById("list");\nfunction render() {\n  list.innerHTML = todos.map(function(t, i) {\n    return "<li>" + t + " <button onclick=\'deleteTodo(" + i + ")\'>X</button></li>";\n  }).join("");\n}\n// TODO: 개별 삭제 함수\nfunction deleteTodo(index) {\n}\n// TODO: 전체 삭제 - clearAll 버튼에 이벤트 연결\n\nrender();', solution: 'let todos = ["공부", "운동", "독서", "코딩"];\nconst list = document.getElementById("list");\nfunction render() {\n  list.innerHTML = todos.map(function(t, i) {\n    return "<li>" + t + " <button onclick=\'deleteTodo(" + i + ")\'>X</button></li>";\n  }).join("");\n}\nfunction deleteTodo(index) {\n  todos.splice(index, 1);\n  render();\n}\ndocument.getElementById("clearAll").addEventListener("click", function() {\n  if (confirm("모두 삭제할까요?")) {\n    todos = [];\n    render();\n  }\n});\nrender();', feedback: { perfect: '개별 + 전체 삭제를 완벽하게 구현했어요!', good: '두 가지 삭제 모두 잘 작동해요!', partial: '전체 삭제는 todos = []로 배열을 비우고 render()하세요.', wrong: '개별은 splice, 전체는 빈 배열 대입 후 render()를 호출합니다.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },

        // Mission 15: Todo 앱 - 완성 (localStorage 포함)
        {
          id: 'w43-m15',
          title: 'Todo 앱 완성: localStorage로 저장하기',
          description: '할 일 목록을 localStorage에 저장하여 영구 보관해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 200,
          estimatedMinutes: 60,
          concept: '완전한 Todo 앱',
          conceptExplanation: '추가/삭제 기능에 localStorage를 결합하면 완전한 Todo 앱이 됩니다. 배열로 데이터를 관리하고, JSON.stringify/parse로 저장/불러오기하며, 페이지 로드 시 저장된 데이터를 화면에 렌더링해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '배열과 localStorage를 활용하여 데이터를 영구 저장할 수 있다',
            '페이지 로드 시 저장된 데이터를 불러와 렌더링할 수 있다',
            '실용적인 웹 앱을 처음부터 끝까지 구현할 수 있다'
          ],
          realWorldExample: '실제 서비스되는 Todo 앱의 기본 구조와 동일해요!',
          starterCode: `function setupFullTodoApp() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");
  let todos = [];

  // localStorage에서 불러오기
  function loadTodos() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      todos = JSON.parse(saved);
      renderTodos();
    }
  }

  // 화면에 렌더링
  function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo + " ";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      });

      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  }

  // localStorage에 저장
  function saveTodos() {
    // JSON.stringify로 저장하기

  }

  // 추가 버튼
  button.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    // todos 배열에 추가

    // 저장 및 렌더링


    input.value = "";
  });

  // 초기 로드
  loadTodos();
}

setupFullTodoApp();`,
          solution: `function setupFullTodoApp() {
  const input = document.getElementById("todoInput");
  const button = document.getElementById("addBtn");
  const list = document.getElementById("todoList");
  let todos = [];

  function loadTodos() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      todos = JSON.parse(saved);
      renderTodos();
    }
  }

  function renderTodos() {
    list.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo + " ";

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodos();
        renderTodos();
      });

      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  button.addEventListener("click", function() {
    const text = input.value.trim();
    if (text === "") return;

    todos.push(text);
    saveTodos();
    renderTodos();
    input.value = "";
  });

  loadTodos();
}

setupFullTodoApp();`,
          hints: [
            '💡 배열로 데이터 관리 (todos = [])',
            '💡 JSON.stringify(todos)로 저장',
            '💡 JSON.parse(saved)로 불러오기',
            '💡 변경될 때마다 saveTodos() 호출'
          ],
          testCases: [
            {
              input: '여러 항목 추가 후 페이지 새로고침',
              expectedOutput: '항목이 그대로 남아있음',
              description: 'localStorage에 영구 저장'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },
    {
      id: 'week-44',
      number: 44,
      title: '종합 프로젝트',
      description: '배운 모든 것을 활용해서 완전한 웹 앱을 만들어요',
      missions: [
        {
          id: 'w44-m1',
          title: '프로젝트 기획: 메모 앱 설계',
          description: '메모 앱의 기능과 구조를 기획해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: '프로젝트 설계',
          conceptExplanation: '좋은 프로젝트는 코딩 전에 기획부터! 어떤 기능이 필요한지, 데이터를 어떻게 관리할지 먼저 설계해요. 프로 개발자도 항상 기획 -> 설계 -> 코딩 -> 테스트 순서를 따라요.',
          cstaStandard: '2-AP-16',
          learningObjectives: ['프로젝트 요구사항을 정리할 수 있다', '데이터 구조를 설계할 수 있다', 'HTML 구조를 계획할 수 있다'],
          realWorldExample: '실무에서 개발 전에 항상 기획서를 작성해요. 네이버, 카카오 같은 회사도 마찬가지!',
          starterCode: '// 메모 앱 설계\n// 1. 필요한 기능 목록\nconst features = [\n  "메모 추가",\n  "메모 삭제",\n  // 더 추가하세요\n];\n\n// 2. 메모 데이터 구조\nconst sampleMemo = {\n  id: 1,\n  title: "첫 메모",\n  content: "내용",\n  createdAt: new Date().toISOString()\n};\n\nconsole.log("기능:", features);\nconsole.log("데이터 구조:", sampleMemo);\n',
          solution: 'const features = ["메모 추가", "메모 삭제", "메모 수정", "메모 검색", "localStorage 저장"];\nconst sampleMemo = { id: 1, title: "첫 메모", content: "메모 내용", createdAt: new Date().toISOString() };\nconsole.log("기능:", features);\nconsole.log("데이터 구조:", sampleMemo);',
          hints: ['CRUD: Create, Read, Update, Delete', '데이터 구조는 객체로 설계', 'localStorage로 영구 저장'],
          testCases: [{ input: '', expectedOutput: '기능 목록과 데이터 구조 출력', description: '설계 출력' }],
          challenges: [
            { id: 'c1', title: '기능 목록 작성', description: '메모 앱에 필요한 기능 5가지를 배열에 담으세요.', difficulty: 'easy', hints: ['추가, 삭제, 수정, 검색, 저장'], estimatedMinutes: 3, starterCode: 'const features = [];\n// 5가지 기능을 push하세요\nconsole.log(features);\n', solution: 'const features = [];\nfeatures.push("추가", "삭제", "수정", "검색", "저장");\nconsole.log(features);', feedback: { perfect: '기능 목록 완벽!', good: '잘했어요!', partial: '5가지를 모두 추가하세요.', wrong: 'push()로 배열에 요소를 추가하세요.' } },
            { id: 'c2', title: '메모 데이터 객체', description: '메모 1개를 표현하는 객체를 만드세요. id, title, content, done 속성을 포함하세요.', difficulty: 'easy', hints: ['const memo = { id: 1, title: "...", ... }'], estimatedMinutes: 3, starterCode: 'const memo = {\n  // 속성 추가\n};\nconsole.log(memo);\n', solution: 'const memo = {\n  id: 1,\n  title: "할일 목록",\n  content: "JavaScript 공부하기",\n  done: false\n};\nconsole.log(memo);', feedback: { perfect: '데이터 구조 설계 완벽!', good: '잘했어요!', partial: '모든 속성을 추가하세요.', wrong: '{ id, title, content, done } 속성을 넣으세요.' } },
            { id: 'c3', title: 'HTML 구조 계획', description: '메모 앱의 HTML 구조를 문자열로 작성하세요. input, button, ul 요소가 필요해요.', difficulty: 'medium', hints: ['<input>으로 입력, <button>으로 추가, <ul>로 목록'], estimatedMinutes: 5, starterCode: 'const htmlStructure = `\n<div id="memo-app">\n  <!-- 입력 영역 -->\n  <!-- 추가 버튼 -->\n  <!-- 메모 목록 -->\n</div>\n`;\nconsole.log(htmlStructure);\n', solution: 'const htmlStructure = `\n<div id="memo-app">\n  <input id="memo-input" placeholder="메모 입력...">\n  <button id="add-btn">추가</button>\n  <ul id="memo-list"></ul>\n</div>\n`;\nconsole.log(htmlStructure);', feedback: { perfect: 'HTML 구조 완벽!', good: '잘했어요!', partial: 'input, button, ul 모두 포함하세요.', wrong: '<input>, <button>, <ul> 태그를 넣으세요.' } },
            { id: 'c4', title: 'CRUD 함수 뼈대', description: '추가(addMemo), 삭제(deleteMemo), 전체조회(getAllMemos) 함수의 뼈대를 만드세요.', difficulty: 'medium', hints: ['function addMemo(title) { }', '아직 내용은 비워두고 구조만'], estimatedMinutes: 5, starterCode: 'const memos = [];\n\nfunction addMemo(title) {\n  // TODO: 메모 추가\n}\n\nfunction deleteMemo(id) {\n  // TODO: 메모 삭제\n}\n\nfunction getAllMemos() {\n  // TODO: 전체 메모 반환\n}\n', solution: 'const memos = [];\nfunction addMemo(title) {\n  memos.push({ id: Date.now(), title, done: false });\n}\nfunction deleteMemo(id) {\n  const idx = memos.findIndex(m => m.id === id);\n  if (idx !== -1) memos.splice(idx, 1);\n}\nfunction getAllMemos() {\n  return memos;\n}', feedback: { perfect: 'CRUD 함수 뼈대 완벽!', good: '잘했어요!', partial: '3개 함수를 모두 구현하세요.', wrong: 'push()로 추가, splice()로 삭제하세요.' } },
            { id: 'c5', title: '완성된 메모 CRUD', description: 'addMemo, deleteMemo, getAllMemos를 완성하고 테스트하세요.', difficulty: 'hard', hints: ['push로 추가, filter로 삭제', 'Date.now()로 고유 ID 생성'], estimatedMinutes: 10, starterCode: 'const memos = [];\n\nfunction addMemo(title) {\n  memos.push({ id: Date.now(), title, done: false });\n}\n\nfunction deleteMemo(id) {\n  // filter로 해당 id 제외\n}\n\nfunction getAllMemos() {\n  return memos;\n}\n\n// 테스트\naddMemo("JavaScript 공부");\naddMemo("프로젝트 만들기");\nconsole.log(getAllMemos());\n', solution: 'const memos = [];\nlet nextId = 1;\nfunction addMemo(title) {\n  memos.push({ id: nextId++, title, done: false });\n}\nfunction deleteMemo(id) {\n  const idx = memos.findIndex(m => m.id === id);\n  if (idx !== -1) memos.splice(idx, 1);\n}\nfunction getAllMemos() { return memos; }\naddMemo("JavaScript 공부");\naddMemo("프로젝트 만들기");\nconsole.log(getAllMemos());', feedback: { perfect: 'CRUD 완성 축하합니다!', good: '잘했어요!', partial: 'deleteMemo를 완성하세요.', wrong: 'filter 또는 splice로 삭제 기능을 구현하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m2',
          title: 'DOM으로 메모 앱 UI 구현',
          description: 'HTML과 JavaScript를 연결하여 메모 앱 인터페이스를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          exp: 50,
          estimatedMinutes: 40,
          concept: 'DOM 기반 앱 구현',
          conceptExplanation: '이전에 배운 DOM 조작, 이벤트 리스너, 함수를 모두 조합하여 실제 작동하는 메모 앱을 만들어요. createElement, appendChild, addEventListener 등을 활용합니다.',
          cstaStandard: '2-AP-17',
          learningObjectives: ['DOM 조작으로 동적 UI를 만들 수 있다', '이벤트 리스너로 사용자 입력을 처리할 수 있다', '함수를 조합하여 앱 로직을 구현할 수 있다'],
          realWorldExample: 'Google Keep, Apple Notes 같은 메모 앱도 이런 원리로 만들어졌어요!',
          starterCode: '// 메모 앱 JavaScript\nconst memos = [];\n\nfunction addMemo() {\n  const input = document.getElementById("memo-input");\n  const text = input.value.trim();\n  if (!text) return;\n  \n  memos.push({ id: Date.now(), text, done: false });\n  input.value = "";\n  renderMemos();\n}\n\nfunction renderMemos() {\n  const list = document.getElementById("memo-list");\n  list.innerHTML = "";\n  \n  memos.forEach(memo => {\n    const li = document.createElement("li");\n    li.textContent = memo.text;\n    // TODO: 삭제 버튼 추가\n    list.appendChild(li);\n  });\n}\n\n// 이벤트 연결\n// document.getElementById("add-btn").addEventListener("click", addMemo);\n',
          solution: 'const memos = [];\nfunction addMemo() {\n  const input = document.getElementById("memo-input");\n  const text = input.value.trim();\n  if (!text) return;\n  memos.push({ id: Date.now(), text, done: false });\n  input.value = "";\n  renderMemos();\n}\nfunction deleteMemo(id) {\n  const idx = memos.findIndex(m => m.id === id);\n  memos.splice(idx, 1);\n  renderMemos();\n}\nfunction renderMemos() {\n  const list = document.getElementById("memo-list");\n  list.innerHTML = "";\n  memos.forEach(memo => {\n    const li = document.createElement("li");\n    li.textContent = memo.text;\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "X";\n    delBtn.onclick = () => deleteMemo(memo.id);\n    li.appendChild(delBtn);\n    list.appendChild(li);\n  });\n}',
          hints: ['createElement로 요소 생성', 'appendChild로 추가', 'onclick = () => 함수() 으로 이벤트 연결'],
          testCases: [{ input: '메모 추가 및 삭제', expectedOutput: 'UI가 동적으로 업데이트', description: '메모 앱 동작' }],
          challenges: [
            { id: 'c1', title: '메모 추가 기능', description: 'input에서 텍스트를 가져와 배열에 추가하고 화면에 표시하세요.', difficulty: 'easy', hints: ['input.value로 값 가져오기', 'push로 배열에 추가'], estimatedMinutes: 5, starterCode: 'const memos = [];\nfunction addMemo(text) {\n  memos.push({ id: Date.now(), text });\n  console.log("메모 추가:", text);\n  console.log("전체:", memos);\n}\naddMemo("첫 번째 메모");\naddMemo("두 번째 메모");\n', solution: 'const memos = [];\nfunction addMemo(text) {\n  memos.push({ id: Date.now(), text });\n  console.log("메모 추가:", text);\n  console.log("전체:", memos);\n}\naddMemo("첫 번째 메모");\naddMemo("두 번째 메모");', feedback: { perfect: '추가 기능 완벽!', good: '잘했어요!', partial: 'push()를 사용하세요.', wrong: 'memos.push()로 추가하세요.' } },
            { id: 'c2', title: '메모 삭제 기능', description: 'id를 받아서 해당 메모를 배열에서 삭제하세요.', difficulty: 'medium', hints: ['filter로 해당 id 제외', '또는 findIndex + splice'], estimatedMinutes: 6, starterCode: 'let memos = [\n  { id: 1, text: "첫 번째" },\n  { id: 2, text: "두 번째" },\n  { id: 3, text: "세 번째" }\n];\n\nfunction deleteMemo(id) {\n  // id에 해당하는 메모 삭제\n}\n\ndeleteMemo(2);\nconsole.log(memos); // id:1, id:3만 남음\n', solution: 'let memos = [\n  { id: 1, text: "첫 번째" },\n  { id: 2, text: "두 번째" },\n  { id: 3, text: "세 번째" }\n];\nfunction deleteMemo(id) {\n  memos = memos.filter(m => m.id !== id);\n}\ndeleteMemo(2);\nconsole.log(memos);', feedback: { perfect: '삭제 기능 완벽!', good: '잘했어요!', partial: 'filter로 id가 다른 것만 남기세요.', wrong: 'memos.filter(m => m.id !== id) 사용' } },
            { id: 'c3', title: 'renderMemos 함수', description: '메모 배열을 순회하면서 각 메모를 console.log로 출력하는 renderMemos 함수를 만드세요.', difficulty: 'medium', hints: ['forEach로 순회', 'DOM에서는 createElement를 쓰지만, 여기서는 console.log로 연습'], estimatedMinutes: 5, starterCode: 'const memos = [\n  { id: 1, text: "공부하기", done: false },\n  { id: 2, text: "운동하기", done: true }\n];\n\nfunction renderMemos() {\n  console.log("=== 메모 목록 ===");\n  memos.forEach(memo => {\n    // 각 메모 출력 (done이면 [완료] 표시)\n  });\n}\nrenderMemos();\n', solution: 'const memos = [\n  { id: 1, text: "공부하기", done: false },\n  { id: 2, text: "운동하기", done: true }\n];\nfunction renderMemos() {\n  console.log("=== 메모 목록 ===");\n  memos.forEach(memo => {\n    const status = memo.done ? "[완료]" : "[ ]";\n    console.log(`${status} ${memo.text}`);\n  });\n}\nrenderMemos();', testCases: [{ input: '', expectedOutput: '=== 메모 목록 ===\n[ ] 공부하기\n[완료] 운동하기', description: '메모 렌더링' }], feedback: { perfect: '렌더링 함수 완벽!', good: '잘했어요!', partial: '완료 상태를 표시하세요.', wrong: 'forEach로 각 메모를 출력하세요.' } },
            { id: 'c4', title: 'localStorage 저장', description: '메모 배열을 localStorage에 저장하고 불러오는 함수를 만드세요.', difficulty: 'hard', hints: ['JSON.stringify()로 저장', 'JSON.parse()로 불러오기', 'localStorage.setItem/getItem'], estimatedMinutes: 8, starterCode: 'function saveMemos(memos) {\n  // localStorage에 저장\n}\n\nfunction loadMemos() {\n  // localStorage에서 불러오기\n  // 없으면 빈 배열 반환\n}\n\nconst memos = [{ id: 1, text: "테스트" }];\nsaveMemos(memos);\nconsole.log(loadMemos());\n', solution: 'function saveMemos(memos) {\n  localStorage.setItem("memos", JSON.stringify(memos));\n}\nfunction loadMemos() {\n  const saved = localStorage.getItem("memos");\n  return saved ? JSON.parse(saved) : [];\n}\nconst memos = [{ id: 1, text: "테스트" }];\nsaveMemos(memos);\nconsole.log(loadMemos());', feedback: { perfect: 'localStorage 완벽!', good: '잘했어요!', partial: 'JSON.stringify/parse를 사용하세요.', wrong: 'localStorage.setItem("key", JSON.stringify(data))' } },
            { id: 'c5', title: '완전한 메모 앱 로직', description: 'add, delete, toggle, save, load 기능이 모두 포함된 메모 앱을 완성하세요.', difficulty: 'hard', hints: ['각 기능을 함수로 분리', '변경 시마다 save 호출', 'toggle: done을 true/false 전환'], estimatedMinutes: 12, starterCode: 'let memos = [];\n\nfunction addMemo(text) {\n  memos.push({ id: Date.now(), text, done: false });\n  save();\n}\n\nfunction deleteMemo(id) {\n  memos = memos.filter(m => m.id !== id);\n  save();\n}\n\nfunction toggleMemo(id) {\n  // done을 토글\n}\n\nfunction save() {\n  console.log("저장됨:", JSON.stringify(memos));\n}\n\n// 테스트\naddMemo("JS 공부");\naddMemo("프로젝트");\ntoggleMemo(memos[0].id);\nconsole.log(memos);\n', solution: 'let memos = [];\nfunction addMemo(text) {\n  memos.push({ id: Date.now(), text, done: false });\n  save();\n}\nfunction deleteMemo(id) {\n  memos = memos.filter(m => m.id !== id);\n  save();\n}\nfunction toggleMemo(id) {\n  const memo = memos.find(m => m.id === id);\n  if (memo) memo.done = !memo.done;\n  save();\n}\nfunction save() {\n  console.log("저장됨:", JSON.stringify(memos));\n}\naddMemo("JS 공부");\naddMemo("프로젝트");\ntoggleMemo(memos[0].id);\nconsole.log(memos);', feedback: { perfect: '메모 앱 완성! Unit 6 마스터!', good: '훌륭해요!', partial: 'toggle 기능을 완성하세요.', wrong: 'find()로 메모를 찾고 done = !done으로 토글하세요.' } }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    }
  ]
};

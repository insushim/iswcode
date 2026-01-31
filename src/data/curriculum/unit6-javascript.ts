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
              id: 'w39-m2-c1',
              title: '연습 1: "Hello"',
              description: '"Hello"를 출력하세요',
              difficulty: 'easy',
              starterCode: '// Hello 출력\n',
              solution: 'console.log("Hello");',
              testCases: [{ input: '', expectedOutput: 'Hello', description: 'Hello 출력' }],
              hints: ['console.log("Hello");'],
              estimatedMinutes: 1,
              feedback: { perfect: 'Hello World의 시작! 🎉', good: '잘했어요!', partial: '따옴표 확인', wrong: 'console.log() 사용' }
            },
            {
              id: 'w39-m2-c2',
              title: '연습 2: 숫자 100',
              description: '숫자 100을 출력하세요',
              difficulty: 'easy',
              starterCode: '// 100 출력\n',
              solution: 'console.log(100);',
              testCases: [{ input: '', expectedOutput: '100', description: '100 출력' }],
              hints: ['숫자는 따옴표 없이'],
              estimatedMinutes: 1,
              feedback: { perfect: '숫자 출력 성공! 🎉', good: '잘했어요!', partial: '따옴표 없이', wrong: 'console.log(100)' }
            },
            {
              id: 'w39-m2-c3',
              title: '연습 3: 계산 결과',
              description: '5 + 3의 결과를 출력하세요',
              difficulty: 'easy',
              starterCode: '// 5 + 3 결과\n',
              solution: 'console.log(5 + 3);',
              testCases: [{ input: '', expectedOutput: '8', description: '계산' }],
              hints: ['console.log(5 + 3);'],
              estimatedMinutes: 2,
              feedback: { perfect: '계산까지 완벽! 🎉', good: '잘했어요!', partial: '연산자 확인', wrong: 'console.log() 안에서 계산' }
            },
            {
              id: 'w39-m2-c4',
              title: '연습 4: 문자+숫자',
              description: '"점수: ", 100을 한 줄에 출력하세요',
              difficulty: 'medium',
              starterCode: '// 점수: 100\n',
              solution: 'console.log("점수: ", 100);',
              testCases: [{ input: '', expectedOutput: '점수:  100', description: '조합' }],
              hints: ['쉼표로 여러 값을 연결'],
              estimatedMinutes: 2,
              feedback: { perfect: '여러 값 출력! 🎉', good: '잘했어요!', partial: '쉼표 사용', wrong: 'console.log("텍스트", 숫자)' }
            },
            {
              id: 'w39-m2-c5',
              title: '연습 5: 템플릿 리터럴',
              description: '`점수: ${50 + 50}`을 출력하세요',
              difficulty: 'hard',
              starterCode: '// 템플릿 리터럴 사용\n',
              solution: 'console.log(`점수: ${50 + 50}`);',
              testCases: [{ input: '', expectedOutput: '점수: 100', description: '템플릿' }],
              hints: ['백틱(`)과 ${} 사용'],
              estimatedMinutes: 3,
              feedback: { perfect: '템플릿 리터럴 마스터! 🎉', good: '잘했어요!', partial: '백틱 확인', wrong: '백틱과 ${}를 사용하세요' }
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
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        // ... w40-m2 ~ w40-m10: if-else, else if, switch, 논리 연산자, for, while, break/continue, 중첩 반복, 패턴 출력, 주간 프로젝트: 숫자 맞추기 게임
      ]
    },

    // Week 41~44는 구조만 표시
    {
      id: 'week-41',
      number: 41,
      title: '함수',
      description: '코드를 재사용 가능한 블록으로 만들어요',
      missions: [
        // 10 missions: 함수 선언, 매개변수, 반환값, 화살표 함수, 기본 매개변수, 나머지 매개변수, 스코프, 콜백, 고차함수, 주간 프로젝트: 유틸리티 함수 모음
      ]
    },
    {
      id: 'week-42',
      number: 42,
      title: '배열과 객체',
      description: '여러 데이터를 효율적으로 관리해요',
      missions: [
        // 10 missions: 배열 기초, 배열 메서드(push/pop/shift/unshift), map/filter/reduce, 객체 기초, 객체 메서드, 구조 분해, spread/rest, JSON, 주간 프로젝트: 할일 목록 데이터
      ]
    },
    {
      id: 'week-43',
      number: 43,
      title: 'DOM 조작',
      description: 'JavaScript로 HTML을 자유자재로 다뤄요',
      missions: [
        // 10 missions: DOM이란, getElementById/querySelector, textContent/innerHTML, createElement, 이벤트 리스너, 클릭 이벤트, input 이벤트, 클래스 조작, 스타일 변경, 주간 프로젝트: 인터랙티브 페이지
      ]
    },
    {
      id: 'week-44',
      number: 44,
      title: '종합 프로젝트',
      description: '배운 모든 것을 활용해서 완전한 웹 앱을 만들어요',
      missions: [
        // 10 missions: 프로젝트 기획, HTML 구조, CSS 스타일링, 데이터 관리, CRUD 구현, 이벤트 핸들링, 유효성 검사, 로컬 스토리지, 배포 준비, 최종 프로젝트: Todo 웹 앱
      ]
    }
  ]
};

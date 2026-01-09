import type { Unit } from '../../types';

// Unit 6: JavaScript 기초 (6주, 39-44주차)
// CSTA 표준: 2-AP-13, 2-AP-14, 2-AP-15, 2-AP-16, 2-AP-17
// 목표: 웹 페이지에 동적인 기능을 추가하는 JavaScript 배우기

export const unit6: Unit = {
  id: 'unit-6',
  number: 6,
  title: 'JavaScript 기초',
  description: '웹 페이지에 생명을 불어넣어요! 버튼 클릭, 애니메이션 등 동적 기능을 만들어요',
  icon: '⚡',
  color: '#f7df1e',
  unlockLevel: 45,
  totalMissions: 60,
  estimatedHours: 24,
  weeks: [
    // Week 39: JavaScript 첫걸음
    {
      id: 'week-39',
      number: 39,
      title: 'JavaScript 첫걸음',
      description: '웹 페이지를 움직이게 하는 JavaScript를 시작해요',
      missions: [
        {
          id: 'w39-m1',
          title: 'JavaScript란?',
          description: '웹의 프로그래밍 언어 JavaScript를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 15,
          estimatedMinutes: 10,
          concept: 'JavaScript 소개',
          conceptExplanation: 'HTML은 뼈대, CSS는 옷, JavaScript는 행동이에요! 버튼 클릭, 데이터 처리 등 동적인 기능을 만들어요.',
          hints: [
            '💡 JavaScript는 웹 브라우저에서 바로 실행돼요',
            '💡 HTML/CSS와 함께 웹의 3대 핵심 기술이에요',
            '💡 Python처럼 변수, 반복문, 조건문이 있지만 문법이 조금 달라요'
          ],
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'JavaScript의 역할과 중요성 이해하기',
            'HTML/CSS와의 관계 파악하기',
            '웹 개발에서 JavaScript의 활용 분야 알아보기'
          ],
          realWorldExample: '유튜브의 좋아요 버튼, 인스타그램의 무한 스크롤, 게임의 캐릭터 움직임 모두 JavaScript로 만들어져요!',
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m2',
          title: 'console.log로 출력하기',
          description: '개발자 콘솔에 메시지를 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 20,
          estimatedMinutes: 10,
          concept: 'console.log',
          conceptExplanation: 'console.log()는 Python의 print()처럼 값을 출력해요!',
          starterCode: '// "안녕하세요!"를 출력하세요\n',
          solution: 'console.log("안녕하세요!");',
          expectedOutput: '안녕하세요!',
          hints: [
            '💡 문자열은 큰따옴표("")나 작은따옴표(\'\')로 감싸요',
            '💡 괄호 안에 출력할 내용을 넣어요',
            '💡 세미콜론(;)으로 문장을 끝내는 게 좋아요'
          ],
          commonMistakes: [
            '따옴표를 빼먹으면 에러가 나요: console.log(안녕하세요) ✗',
            '괄호를 안 닫으면 에러가 나요: console.log("안녕" ✗',
            'log의 L은 소문자예요: console.Log("안녕") ✗'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m3',
          title: 'HTML에 JavaScript 연결하기',
          description: 'script 태그로 JavaScript를 연결해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'script 태그',
          conceptExplanation: '<script> 태그 안에 JavaScript 코드를 작성하거나, src로 외부 파일을 연결해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>JavaScript 시작</h1>\n  <!-- script 태그를 추가하세요 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>JavaScript 시작</h1>\n  <script>\n    console.log("JavaScript 실행!");\n  </script>\n</body>\n</html>',
          hints: [
            '💡 <script> 태그는 보통 </body> 태그 직전에 넣어요',
            '💡 외부 파일은 <script src="파일.js"></script>로 연결해요',
            '💡 HTML이 먼저 로딩되어야 JavaScript가 요소를 조작할 수 있어요'
          ],
          commonMistakes: [
            '<script> 태그를 닫지 않으면 페이지가 제대로 로딩되지 않아요',
            'src로 연결할 때 태그 사이에 코드를 넣으면 무시돼요',
            '<head>에 넣으면 body 요소를 찾지 못할 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m4',
          title: '변수 선언 let',
          description: '값을 저장하는 변수를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 12,
          concept: 'let 변수',
          conceptExplanation: 'let 변수명 = 값;으로 변수를 선언해요. Python과 다르게 let 키워드가 필요해요!',
          starterCode: '// 이름을 저장하는 변수 name을 만들고 출력하세요\n',
          solution: 'let name = "홍길동";\nconsole.log(name);',
          expectedOutput: '홍길동',
          hints: [
            '💡 let은 "변수를 선언한다"는 의미예요',
            '💡 변수명은 영어, 한글, 숫자, _만 사용 가능해요',
            '💡 변수는 나중에 다른 값으로 바꿀 수 있어요'
          ],
          commonMistakes: [
            'let 없이 name = "홍길동"만 쓰면 전역 변수가 돼요 (비권장)',
            '같은 변수를 let으로 두 번 선언하면 에러가 나요',
            '변수명 첫 글자는 숫자로 시작할 수 없어요: let 1name ✗'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m5',
          title: '상수 선언 const',
          description: '바뀌지 않는 값은 const로 선언해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'const 상수',
          conceptExplanation: 'const는 constant(상수)의 약자. 한 번 정하면 바꿀 수 없어요!',
          starterCode: '// PI 값을 상수로 선언하세요\n',
          solution: 'const PI = 3.14159;\nconsole.log(PI);',
          expectedOutput: '3.14159',
          hints: [
            '💡 바뀌면 안 되는 값(생년월일, 원주율 등)에 const를 써요',
            '💡 상수는 대문자로 쓰는 게 관례예요 (PI, MAX_SIZE 등)',
            '💡 const로 선언한 변수는 재할당이 불가능해요'
          ],
          commonMistakes: [
            'const로 선언한 후 값을 바꾸려 하면 에러가 나요: PI = 3.14 ✗',
            'const는 선언과 동시에 값을 할당해야 해요: const PI; ✗',
            '배열/객체의 경우 내부 값은 변경 가능해요 (주소만 고정)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m6',
          title: 'let vs const',
          description: 'let과 const의 차이를 알아봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 20,
          estimatedMinutes: 8,
          concept: '변수 vs 상수',
          hints: [
            '💡 기본적으로 const를 쓰고, 값이 바뀔 때만 let을 써요',
            '💡 var는 옛날 방식이니 사용하지 마세요',
            '💡 const는 안전하고 버그를 줄여줘요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m7',
          title: '자료형 알아보기',
          description: '숫자, 문자열, 불리언 등 자료형을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 15,
          concept: '자료형',
          conceptExplanation: 'Number(숫자), String(문자열), Boolean(참/거짓), null, undefined가 있어요!',
          hints: [
            '💡 typeof 연산자로 자료형을 확인할 수 있어요',
            '💡 JavaScript는 자료형을 자동으로 변환하기도 해요',
            '💡 null은 "값이 없음", undefined는 "정의되지 않음"이에요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m8',
          title: '템플릿 리터럴',
          description: '백틱으로 문자열을 더 쉽게 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: '템플릿 리터럴',
          conceptExplanation: '백틱(`)과 ${변수}로 문자열 안에 변수를 넣을 수 있어요! Python의 f-string과 비슷해요.',
          starterCode: 'let name = "홍길동";\nlet age = 15;\n// 템플릿 리터럴로 "저는 홍길동이고, 15살입니다."를 출력하세요\n',
          solution: 'let name = "홍길동";\nlet age = 15;\nconsole.log(`저는 ${name}이고, ${age}살입니다.`);',
          expectedOutput: '저는 홍길동이고, 15살입니다.',
          hints: [
            '💡 백틱(`)은 키보드 숫자 1 왼쪽에 있어요',
            '💡 ${} 안에는 변수뿐만 아니라 식도 넣을 수 있어요',
            '💡 여러 줄 문자열도 백틱으로 쉽게 만들 수 있어요'
          ],
          commonMistakes: [
            "작은따옴표(')나 큰따옴표(\")를 쓰면 안 돼요, 백틱(`)을 써야 해요",
            "'$변수'는 안 되고 ${변수}처럼 중괄호를 써야 해요",
            "백틱 안에서도 백틱을 쓰려면 \\`로 이스케이프해야 해요"
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m9',
          title: '간단한 계산기',
          description: '변수로 계산 결과를 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 15,
          concept: '종합 실습',
          starterCode: '// 두 수를 더하고 결과를 출력하세요\nlet num1 = 10;\nlet num2 = 20;\n',
          solution: 'let num1 = 10;\nlet num2 = 20;\nlet sum = num1 + num2;\nconsole.log(`${num1} + ${num2} = ${sum}`);',
          expectedOutput: '10 + 20 = 30',
          hints: [
            '💡 + 연산자로 숫자를 더해요',
            '💡 결과를 변수에 저장한 후 출력하세요',
            '💡 템플릿 리터럴을 활용하면 보기 좋게 출력할 수 있어요'
          ],
          commonMistakes: [
            '문자열 "10" + "20"은 "1020"이 돼요 (숫자로 변환 필요)',
            '변수명을 잘못 쓰면 undefined가 나와요',
            'sum을 선언하지 않고 바로 쓰면 에러가 나요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w39-m10',
          title: 'JavaScript 기초 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w39',
        title: 'JavaScript 기초 퀴즈',
        questions: [
          {
            id: 'q1',
            question: '콘솔에 값을 출력하는 명령어는?',
            options: ['print()', 'console.log()', 'echo()', 'write()'],
            correctAnswer: 1,
            explanation: 'JavaScript는 console.log()로 콘솔에 값을 출력해요. Python의 print()와 비슷한 역할이에요.'
          },
          {
            id: 'q2',
            question: '값이 변하지 않는 변수를 선언할 때 쓰는 키워드는?',
            options: ['let', 'var', 'const', 'static'],
            correctAnswer: 2,
            explanation: 'const는 constant(상수)의 약자로, 한 번 값을 정하면 바꿀 수 없어요. 재할당을 시도하면 에러가 발생해요.'
          },
          {
            id: 'q3',
            question: '템플릿 리터럴에서 변수를 넣는 방법은?',
            options: ['%s', '{변수}', '${변수}', '#{변수}'],
            correctAnswer: 2,
            explanation: '백틱(`)으로 감싼 문자열 안에서 ${변수} 형태로 변수를 넣어요. Python의 f"{변수}"와 비슷해요.'
          },
          {
            id: 'q4',
            question: 'JavaScript 코드를 HTML에 포함시키는 태그는?',
            options: ['<js>', '<code>', '<script>', '<javascript>'],
            correctAnswer: 2,
            explanation: '<script> 태그 안에 JavaScript 코드를 작성하거나, src 속성으로 외부 파일을 연결해요.'
          },
          {
            id: 'q5',
            question: '다음 중 올바른 변수 선언은?',
            options: ['let 1st = "first";', 'let my-name = "철수";', 'let myName = "철수";', 'let class = "A";'],
            correctAnswer: 2,
            explanation: '변수명은 숫자로 시작할 수 없고, 하이픈(-)을 쓸 수 없으며, 예약어(class 등)를 쓸 수 없어요. camelCase가 관례예요.'
          }
        ]
      }
    },
    // Week 40: 연산자와 조건문
    {
      id: 'week-40',
      number: 40,
      title: '연산자와 조건문',
      description: '비교하고 판단하는 프로그램을 만들어요',
      missions: [
        {
          id: 'w40-m1',
          title: '산술 연산자',
          description: '덧셈, 뺄셈, 곱셈, 나눗셈을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 20,
          estimatedMinutes: 10,
          concept: '산술 연산자',
          conceptExplanation: '+, -, *, /, %(나머지), **(거듭제곱)을 사용해요!',
          starterCode: '// 10을 3으로 나눈 나머지를 출력하세요\n',
          solution: 'console.log(10 % 3);',
          expectedOutput: '1',
          hints: [
            '💡 % 연산자는 나머지를 구해요 (modulo)',
            '💡 ** 연산자는 거듭제곱이에요 (2**3 = 8)',
            '💡 / 연산자는 소수점까지 나눠요 (5/2 = 2.5)'
          ],
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '산술 연산자의 종류와 사용법 이해하기',
            '나머지 연산자의 활용법 익히기',
            '연산자 우선순위 이해하기'
          ],
          realWorldExample: '쇼핑몰에서 10개씩 포장할 때 나머지를 구하거나, 게임에서 경험치를 레벨로 환산할 때 나눗셈을 사용해요!',
          commonMistakes: [
            '문자열 "5" + "3"은 "53"이 돼요. 숫자 계산이 필요하면 Number()로 변환하세요',
            '0으로 나누면 Infinity가 나와요',
            '정수 나눗셈이 없어요. 정수만 원하면 Math.floor()를 쓰세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m2',
          title: '비교 연산자',
          description: '값을 비교해서 참/거짓을 판단해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 12,
          concept: '비교 연산자',
          conceptExplanation: '===(같다), !==(다르다), >, <, >=, <=를 사용해요!',
          starterCode: 'let a = 5;\nlet b = "5";\n// a와 b가 타입까지 같은지 비교하세요\n',
          solution: 'let a = 5;\nlet b = "5";\nconsole.log(a === b);',
          expectedOutput: 'false',
          hints: [
            '💡 ===는 값과 타입을 모두 비교해요 (strict equality)',
            '💡 ==는 값만 비교해요 (타입 변환 후 비교)',
            '💡 항상 ===를 쓰는 게 안전해요'
          ],
          commonMistakes: [
            '= 하나는 할당, ==는 비교예요. 혼동하지 마세요!',
            '5 == "5"는 true지만 5 === "5"는 false예요',
            'NaN === NaN은 false예요. isNaN()을 사용하세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m3',
          title: '논리 연산자',
          description: 'AND, OR, NOT 연산을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 12,
          concept: '논리 연산자',
          conceptExplanation: '&&(AND), ||(OR), !(NOT)으로 조건을 조합해요!',
          starterCode: 'let age = 15;\nlet hasTicket = true;\n// 나이가 10살 이상이고 티켓이 있으면 true\n',
          solution: 'let age = 15;\nlet hasTicket = true;\nconsole.log(age >= 10 && hasTicket);',
          expectedOutput: 'true',
          hints: [
            '💡 &&는 둘 다 참이어야 참 (AND)',
            '💡 ||는 하나만 참이어도 참 (OR)',
            '💡 !는 참을 거짓으로, 거짓을 참으로 바꿔요 (NOT)'
          ],
          commonMistakes: [
            'AND는 &가 아니라 && 두 개예요',
            'OR는 |가 아니라 || 두 개예요',
            '!age > 10이 아니라 !(age > 10)처럼 괄호를 써야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m4',
          title: 'if 문',
          description: '조건에 따라 다른 코드를 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 15,
          concept: 'if 문',
          conceptExplanation: 'if (조건) { 실행 코드 } 형태로 조건부 실행!',
          starterCode: 'let score = 85;\n// 점수가 60점 이상이면 "합격"을 출력하세요\n',
          solution: 'let score = 85;\nif (score >= 60) {\n  console.log("합격");\n}',
          expectedOutput: '합격',
          hints: [
            '💡 조건은 괄호 () 안에 써요',
            '💡 실행할 코드는 중괄호 {} 안에 써요',
            '💡 조건이 true일 때만 중괄호 안 코드가 실행돼요'
          ],
          commonMistakes: [
            'if score >= 60처럼 괄호를 빼먹으면 에러가 나요',
            'if (score = 60)처럼 =를 쓰면 할당이 돼요. ==나 ===를 써야 해요',
            '중괄호를 안 쓰면 바로 다음 한 줄만 실행돼요 (권장하지 않음)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m5',
          title: 'if-else 문',
          description: '참일 때와 거짓일 때 다른 코드를 실행해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 15,
          concept: 'if-else 문',
          conceptExplanation: 'if (조건) { } else { } 로 두 가지 경우를 처리해요!',
          starterCode: 'let age = 12;\n// 18세 이상이면 "성인", 아니면 "미성년자"를 출력하세요\n',
          solution: 'let age = 12;\nif (age >= 18) {\n  console.log("성인");\n} else {\n  console.log("미성년자");\n}',
          expectedOutput: '미성년자',
          hints: [
            '💡 else는 조건이 거짓일 때 실행돼요',
            '💡 else에는 조건을 쓰지 않아요',
            '💡 if와 else 사이에 다른 코드를 넣으면 안 돼요'
          ],
          commonMistakes: [
            'else if가 아닌 단순 else에 조건을 쓰면 에러가 나요',
            'if { } else { } 사이에 코드를 넣으면 에러가 나요',
            'else를 먼저 쓰면 안 돼요. if 다음에 와야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m6',
          title: 'else if로 여러 조건',
          description: '여러 조건을 순차적으로 검사해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 15,
          concept: 'else if',
          conceptExplanation: 'else if (조건)으로 여러 조건을 검사해요!',
          starterCode: 'let score = 75;\n// 90이상 A, 80이상 B, 70이상 C, 나머지 F 출력\n',
          solution: 'let score = 75;\nif (score >= 90) {\n  console.log("A");\n} else if (score >= 80) {\n  console.log("B");\n} else if (score >= 70) {\n  console.log("C");\n} else {\n  console.log("F");\n}',
          expectedOutput: 'C',
          hints: [
            '💡 위에서부터 순서대로 검사해요',
            '💡 처음 만나는 참인 조건만 실행돼요',
            '💡 마지막 else는 선택사항이에요'
          ],
          commonMistakes: [
            '조건 순서가 중요해요. 70 이상을 먼저 검사하면 안 돼요',
            'else if 대신 if를 여러 개 쓰면 모든 조건을 검사해요',
            '등호를 빼먹으면 안 돼요: score > 90이 아니라 score >= 90'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m7',
          title: '삼항 연산자',
          description: '간단한 조건문을 한 줄로 작성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 12,
          concept: '삼항 연산자',
          conceptExplanation: '조건 ? 참일때값 : 거짓일때값 으로 간단히 표현!',
          starterCode: 'let num = 7;\n// 짝수면 "짝수", 홀수면 "홀수"를 출력하세요 (삼항 연산자 사용)\n',
          solution: 'let num = 7;\nlet result = num % 2 === 0 ? "짝수" : "홀수";\nconsole.log(result);',
          expectedOutput: '홀수',
          hints: [
            '💡 ? 앞이 조건, ? 뒤가 참일 때, : 뒤가 거짓일 때예요',
            '💡 간단한 조건에만 사용하세요 (복잡하면 if문이 나아요)',
            '💡 중첩도 가능하지만 읽기 어려워질 수 있어요'
          ],
          commonMistakes: [
            '콜론(:)을 빼먹으면 에러가 나요',
            '조건을 괄호로 감싸지 않아도 되지만, 복잡하면 감싸는 게 좋아요',
            '여러 줄로 나누면 읽기 쉬워져요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m8',
          title: 'switch 문',
          description: '여러 값 중 하나를 선택해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 15,
          concept: 'switch 문',
          conceptExplanation: 'switch(값) { case 값1: break; case 값2: break; default: } 형태!',
          starterCode: 'let day = 3;\n// 1=월, 2=화, 3=수, 4=목, 5=금 출력\n',
          solution: 'let day = 3;\nswitch(day) {\n  case 1:\n    console.log("월요일");\n    break;\n  case 2:\n    console.log("화요일");\n    break;\n  case 3:\n    console.log("수요일");\n    break;\n  case 4:\n    console.log("목요일");\n    break;\n  case 5:\n    console.log("금요일");\n    break;\n  default:\n    console.log("주말");\n}',
          expectedOutput: '수요일',
          hints: [
            '💡 break를 안 쓰면 다음 case도 실행돼요 (fall-through)',
            '💡 default는 모든 case가 맞지 않을 때 실행돼요',
            '💡 여러 case를 하나로 묶을 수도 있어요'
          ],
          commonMistakes: [
            'break를 빼먹으면 의도치 않게 다음 case도 실행돼요',
            'case 뒤에 콜론(:)을 빼먹으면 에러가 나요',
            'switch는 ===로 비교해요. 타입이 달라도 같다고 하지 않아요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m9',
          title: '로그인 검증 만들기',
          description: '조건문으로 로그인을 검증해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 40,
          estimatedMinutes: 18,
          concept: '종합 실습',
          starterCode: 'let username = "admin";\nlet password = "1234";\nlet inputUser = "admin";\nlet inputPass = "1234";\n// 아이디와 비밀번호가 맞으면 "로그인 성공", 아니면 "로그인 실패"\n',
          solution: 'let username = "admin";\nlet password = "1234";\nlet inputUser = "admin";\nlet inputPass = "1234";\n\nif (inputUser === username && inputPass === password) {\n  console.log("로그인 성공");\n} else {\n  console.log("로그인 실패");\n}',
          expectedOutput: '로그인 성공',
          hints: [
            '💡 &&로 두 조건을 모두 확인해요',
            '💡 아이디와 비밀번호가 모두 맞아야 성공이에요',
            '💡 실제로는 비밀번호를 암호화해서 저장해야 해요'
          ],
          commonMistakes: [
            '||을 쓰면 둘 중 하나만 맞아도 성공이 되니 주의하세요',
            '==를 쓰면 타입이 달라도 같다고 할 수 있어요',
            '대소문자를 구분해요: "Admin"과 "admin"은 달라요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w40-m10',
          title: '조건문 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w40',
        title: '조건문 퀴즈',
        questions: [
          {
            id: 'q1',
            question: '===와 ==의 차이점은?',
            options: ['차이 없음', '===는 타입도 비교', '==가 더 엄격함', '===는 문자열만 비교'],
            correctAnswer: 1,
            explanation: '===는 값과 타입을 모두 비교해요(strict equality). 5 === "5"는 false지만 5 == "5"는 true예요. 항상 ===를 쓰는 게 안전해요.'
          },
          {
            id: 'q2',
            question: '&&(AND) 연산자의 결과가 true가 되려면?',
            options: ['하나만 true', '둘 다 true', '둘 다 false', '하나만 false'],
            correctAnswer: 1,
            explanation: 'AND 연산자는 양쪽이 모두 참일 때만 참이에요. true && true = true, true && false = false예요.'
          },
          {
            id: 'q3',
            question: '삼항 연산자의 형태는?',
            options: ['조건 : 참 ? 거짓', '조건 ? 참 : 거짓', 'if 조건 then 참 else 거짓', '조건 && 참 || 거짓'],
            correctAnswer: 1,
            explanation: '삼항 연산자는 조건 ? 참일때값 : 거짓일때값 형태예요. 예: age >= 18 ? "성인" : "미성년자"'
          },
          {
            id: 'q4',
            question: 'switch 문에서 break를 쓰지 않으면?',
            options: ['에러 발생', '다음 case도 실행됨', '아무 일도 안 일어남', '처음으로 돌아감'],
            correctAnswer: 1,
            explanation: 'break가 없으면 fall-through가 발생해 다음 case도 실행돼요. 의도적으로 쓰는 경우도 있지만 보통은 실수예요.'
          },
          {
            id: 'q5',
            question: '다음 중 거짓(false)으로 평가되지 않는 것은?',
            options: ['0', '""(빈 문자열)', 'null', '"false"(문자열)'],
            correctAnswer: 3,
            explanation: '"false"는 문자열이라 참(truthy)이에요. 0, "", null, undefined, NaN, false만 거짓(falsy)으로 평가돼요.'
          }
        ]
      }
    },
    // Week 41: 반복문
    {
      id: 'week-41',
      number: 41,
      title: '반복문',
      description: '같은 작업을 여러 번 반복하는 방법을 배워요',
      missions: [
        {
          id: 'w41-m1',
          title: 'for 문 기초',
          description: '정해진 횟수만큼 반복해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 12,
          concept: 'for 문',
          conceptExplanation: 'for (초기값; 조건; 증감) { } 형태로 반복해요!',
          starterCode: '// 1부터 5까지 출력하세요\n',
          solution: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}',
          expectedOutput: '1\n2\n3\n4\n5',
          hints: [
            '💡 i++는 i = i + 1과 같아요 (1씩 증가)',
            '💡 초기값; 조건; 증감 세 부분이 세미콜론으로 구분돼요',
            '💡 i는 iterator의 약자로 관례적으로 사용해요'
          ],
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'for 문의 구조와 동작 원리 이해하기',
            '반복 횟수를 제어하는 방법 익히기',
            '초기값, 조건, 증감식의 역할 파악하기'
          ],
          realWorldExample: '게임에서 적 10마리 생성하기, 쇼핑몰에서 상품 목록 표시하기, 챗봇에서 메시지 히스토리 보여주기 등에 for 문을 사용해요!',
          commonMistakes: [
            'i++를 빼먹으면 무한 루프가 돼요',
            'i <= 5가 아니라 i < 5로 쓰면 4까지만 출력돼요',
            '세미콜론을 쉼표로 쓰면 에러가 나요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m2',
          title: 'for 문으로 합계 구하기',
          description: '1부터 10까지의 합을 구해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 12,
          concept: 'for 문 활용',
          starterCode: '// 1부터 10까지의 합을 구하세요\nlet sum = 0;\n',
          solution: 'let sum = 0;\nfor (let i = 1; i <= 10; i++) {\n  sum += i;\n}\nconsole.log(sum);',
          expectedOutput: '55',
          hints: [
            '💡 sum += i는 sum = sum + i와 같아요',
            '💡 sum을 0으로 초기화하는 게 중요해요',
            '💡 반복문 밖에서 결과를 출력하세요'
          ],
          commonMistakes: [
            'let sum을 반복문 안에 넣으면 매번 0으로 초기화돼요',
            'console.log를 반복문 안에 넣으면 중간 결과가 계속 출력돼요',
            'sum을 선언하지 않고 쓰면 에러가 나요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m3',
          title: 'while 문',
          description: '조건이 참인 동안 반복해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'while 문',
          conceptExplanation: 'while (조건) { } 형태로, 조건이 참인 동안 계속 반복해요!',
          starterCode: '// while문으로 1부터 5까지 출력하세요\nlet i = 1;\n',
          solution: 'let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}',
          expectedOutput: '1\n2\n3\n4\n5',
          hints: [
            '💡 조건이 거짓이 될 때까지 계속 반복해요',
            '💡 i++를 꼭 넣어야 무한 루프를 피할 수 있어요',
            '💡 조건을 먼저 확인하고 실행해요'
          ],
          commonMistakes: [
            'i++를 빼먹으면 무한 루프가 돼요 (브라우저가 멈출 수 있어요)',
            'while (i <= 5); 처럼 세미콜론을 넣으면 안 돼요',
            '변수를 초기화하지 않으면 undefined로 시작돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m4',
          title: 'do-while 문',
          description: '일단 한 번 실행 후 조건을 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 10,
          concept: 'do-while 문',
          conceptExplanation: 'do { } while(조건); 형태로, 최소 한 번은 실행해요!',
          starterCode: '// do-while로 1부터 3까지 출력하세요\nlet i = 1;\n',
          solution: 'let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 3);',
          expectedOutput: '1\n2\n3',
          hints: [
            '💡 조건 확인 전에 먼저 한 번 실행돼요',
            '💡 while 뒤에 세미콜론(;)을 붙여야 해요',
            '💡 최소 한 번은 실행해야 할 때 유용해요'
          ],
          commonMistakes: [
            'while(조건) 뒤에 세미콜론을 빼먹으면 에러가 나요',
            'while과 do-while을 혼동하면 결과가 달라요',
            '조건이 처음부터 false여도 한 번은 실행돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m5',
          title: 'break로 반복 중단',
          description: '특정 조건에서 반복을 멈춰요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'break',
          conceptExplanation: 'break;를 만나면 반복문을 바로 빠져나와요!',
          starterCode: '// 1부터 출력하다가 5를 만나면 멈추세요\nfor (let i = 1; i <= 10; i++) {\n  // 코드 작성\n}',
          solution: 'for (let i = 1; i <= 10; i++) {\n  if (i === 5) {\n    break;\n  }\n  console.log(i);\n}',
          expectedOutput: '1\n2\n3\n4',
          hints: [
            '💡 break는 반복문 전체를 종료해요',
            '💡 중첩 반복문에서는 가장 안쪽 반복문만 종료해요',
            '💡 switch 문에서도 break를 사용해요'
          ],
          commonMistakes: [
            'break를 출력 후에 넣으면 5도 출력돼요',
            'break는 반복문 밖에서 쓸 수 없어요',
            'return과 혼동하지 마세요 (return은 함수를 종료)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m6',
          title: 'continue로 건너뛰기',
          description: '특정 조건에서 다음 반복으로 건너뛰어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'continue',
          conceptExplanation: 'continue;를 만나면 아래 코드를 건너뛰고 다음 반복으로!',
          starterCode: '// 1부터 5까지 출력하되, 3은 건너뛰세요\n',
          solution: 'for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    continue;\n  }\n  console.log(i);\n}',
          expectedOutput: '1\n2\n4\n5',
          hints: [
            '💡 continue는 현재 반복만 건너뛰어요',
            '💡 continue 아래 코드는 실행되지 않아요',
            '💡 반복문은 계속 진행돼요 (break와 차이)'
          ],
          commonMistakes: [
            'continue를 출력 후에 넣으면 효과가 없어요',
            'while 문에서 continue 전에 증감식을 넣어야 해요',
            'break와 혼동하지 마세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m7',
          title: '중첩 반복문',
          description: '반복문 안에 반복문을 넣어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 15,
          concept: '중첩 for 문',
          conceptExplanation: '구구단처럼 2차원으로 반복할 때 사용해요!',
          starterCode: '// 2단부터 3단까지 출력하세요\n',
          solution: 'for (let i = 2; i <= 3; i++) {\n  for (let j = 1; j <= 9; j++) {\n    console.log(`${i} x ${j} = ${i * j}`);\n  }\n}',
          hints: [
            '💡 바깥 반복문이 한 번 돌 때 안쪽이 전부 돌아요',
            '💡 i와 j처럼 다른 변수명을 써야 해요',
            '💡 3중, 4중 중첩도 가능하지만 복잡해져요'
          ],
          commonMistakes: [
            '같은 변수 i를 양쪽에 쓰면 충돌이 일어나요',
            '중괄호를 제대로 닫지 않으면 에러가 나요',
            '중첩이 많으면 성능이 나빠져요 (시간 복잡도 증가)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m8',
          title: '별 찍기',
          description: '반복문으로 별 패턴을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 15,
          concept: '패턴 출력',
          starterCode: '// 삼각형 모양으로 별을 출력하세요\n// *\n// **\n// ***\n// ****\n// *****\n',
          solution: 'for (let i = 1; i <= 5; i++) {\n  let stars = "";\n  for (let j = 1; j <= i; j++) {\n    stars += "*";\n  }\n  console.log(stars);\n}',
          hints: [
            '💡 바깥 for는 줄 수, 안쪽 for는 별 개수를 제어해요',
            '💡 문자열을 만들고 한 번에 출력하는 게 깔끔해요',
            '💡 j <= i 조건으로 별 개수가 점점 늘어나요'
          ],
          commonMistakes: [
            'stars를 반복문 밖에서 선언하면 계속 누적돼요',
            'console.log를 안쪽 반복문에 넣으면 별이 한 줄로 나와요',
            'j <= 5로 하면 모든 줄이 5개씩 나와요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m9',
          title: '짝수만 출력하기',
          description: '1부터 20까지 중 짝수만 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 12,
          concept: '종합 실습',
          starterCode: '// 1부터 20까지 중 짝수만 출력하세요\n',
          solution: 'for (let i = 1; i <= 20; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}',
          hints: [
            '💡 % 2 === 0이면 짝수예요',
            '💡 continue를 써서 홀수를 건너뛸 수도 있어요',
            '💡 i += 2로 2씩 증가시킬 수도 있어요 (i = 2부터 시작)'
          ],
          commonMistakes: [
            'i % 2 == 1로 짝수를 확인하면 안 돼요 (홀수 조건)',
            'i를 2로 나눈 나머지가 0이 아니라 i / 2로 하면 안 돼요',
            'for (let i = 2; i <= 20; i += 2)로 더 효율적이에요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w41-m10',
          title: '반복문 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w41',
        title: '반복문 퀴즈',
        questions: [
          {
            id: 'q1',
            question: 'for 문의 세 부분은?',
            options: ['시작, 끝, 증가', '초기값, 조건, 증감', '변수, 범위, 단계', '입력, 처리, 출력'],
            correctAnswer: 1,
            explanation: 'for (초기값; 조건; 증감) 형태예요. 예: for (let i = 0; i < 10; i++) { }'
          },
          {
            id: 'q2',
            question: 'break와 continue의 차이는?',
            options: ['같다', 'break는 종료, continue는 건너뛰기', 'break는 건너뛰기, continue는 종료', '둘 다 종료'],
            correctAnswer: 1,
            explanation: 'break는 반복문 전체를 종료하고, continue는 현재 반복만 건너뛰고 다음 반복으로 넘어가요.'
          },
          {
            id: 'q3',
            question: 'while과 do-while의 차이는?',
            options: ['같다', 'do-while은 최소 한 번 실행', 'while은 최소 한 번 실행', '속도 차이만 있다'],
            correctAnswer: 1,
            explanation: 'do-while은 조건 확인 전에 먼저 한 번 실행해요. while은 조건이 처음부터 false면 한 번도 실행 안 돼요.'
          },
          {
            id: 'q4',
            question: '무한 루프가 발생하는 경우는?',
            options: ['for (let i = 0; i < 10; i++)', 'while (true) { }', 'for (let i = 0; i < 10; i--)', 'do { } while (false);'],
            correctAnswer: 1,
            explanation: 'while (true)는 조건이 항상 참이라 무한히 반복돼요. 3번도 i가 계속 감소해 무한 루프가 돼요.'
          },
          {
            id: 'q5',
            question: '중첩 for 문에서 바깥 반복문이 3번, 안쪽이 4번 돌면 총 몇 번 실행되나요?',
            options: ['3번', '4번', '7번', '12번'],
            correctAnswer: 3,
            explanation: '바깥이 한 번 돌 때마다 안쪽이 전부 도니까 3 × 4 = 12번 실행돼요.'
          }
        ]
      }
    },
    // Week 42: 배열
    {
      id: 'week-42',
      number: 42,
      title: '배열',
      description: '여러 데이터를 하나로 묶어서 관리해요',
      missions: [
        {
          id: 'w42-m1',
          title: '배열 만들기',
          description: '여러 값을 담는 배열을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 20,
          estimatedMinutes: 10,
          concept: '배열 생성',
          conceptExplanation: '대괄호 []로 배열을 만들어요. Python의 리스트와 같아요!',
          starterCode: '// 과일 이름 3개가 들어있는 배열을 만드세요\n',
          solution: 'let fruits = ["사과", "바나나", "오렌지"];\nconsole.log(fruits);',
          hints: [
            '💡 대괄호 [] 안에 쉼표로 값을 구분해요',
            '💡 배열은 여러 타입을 섞어서 넣을 수 있어요',
            '💡 빈 배열은 []로 만들어요'
          ],
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '배열의 개념과 필요성 이해하기',
            '배열을 생성하고 초기화하는 방법 익히기',
            '배열이 어떻게 메모리에 저장되는지 이해하기'
          ],
          realWorldExample: '쇼핑몰의 장바구니 목록, 게임의 인벤토리, 음악 앱의 재생 목록 모두 배열로 관리해요!',
          commonMistakes: [
            '중괄호 {}를 쓰면 객체가 돼요. 배열은 []예요',
            '마지막 요소 뒤에 쉼표를 넣어도 되지만, 일관성을 위해 안 넣는 게 좋아요',
            'new Array()로도 만들 수 있지만 []가 더 간단해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m2',
          title: '배열 요소 접근',
          description: '인덱스로 배열의 값에 접근해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 20,
          estimatedMinutes: 10,
          concept: '인덱스 접근',
          conceptExplanation: '배열[인덱스]로 접근해요. 인덱스는 0부터 시작!',
          starterCode: 'let colors = ["빨강", "파랑", "노랑"];\n// 첫 번째 색상을 출력하세요\n',
          solution: 'let colors = ["빨강", "파랑", "노랑"];\nconsole.log(colors[0]);',
          expectedOutput: '빨강',
          hints: [
            '💡 첫 번째는 [0], 두 번째는 [1]이에요',
            '💡 마지막 요소는 [배열.length - 1]이에요',
            '💡 음수 인덱스는 지원하지 않아요 (Python과 차이)'
          ],
          commonMistakes: [
            '[1]이 첫 번째가 아니라 두 번째예요',
            '존재하지 않는 인덱스에 접근하면 undefined가 나와요',
            'colors.0처럼 점 표기법은 안 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m3',
          title: '배열 길이 length',
          description: '배열에 몇 개의 요소가 있는지 알아봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          exp: 20,
          estimatedMinutes: 8,
          concept: 'length 속성',
          conceptExplanation: '배열.length로 배열의 길이를 알 수 있어요!',
          starterCode: 'let numbers = [1, 2, 3, 4, 5];\n// 배열의 길이를 출력하세요\n',
          solution: 'let numbers = [1, 2, 3, 4, 5];\nconsole.log(numbers.length);',
          expectedOutput: '5',
          hints: [
            '💡 length는 메서드가 아니라 속성이라 괄호()를 안 붙여요',
            '💡 빈 배열의 length는 0이에요',
            '💡 length를 직접 바꾸면 배열 크기가 변해요'
          ],
          commonMistakes: [
            'length()처럼 괄호를 붙이면 에러가 나요',
            'length는 항상 마지막 인덱스 + 1이에요',
            'length를 줄이면 뒤의 요소들이 삭제돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m4',
          title: 'push와 pop',
          description: '배열의 끝에 추가하고 제거해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 12,
          concept: 'push, pop',
          conceptExplanation: 'push()는 끝에 추가, pop()는 끝에서 제거해요!',
          starterCode: 'let stack = [1, 2, 3];\n// 4를 추가하고, 마지막 요소를 제거해서 출력하세요\n',
          solution: 'let stack = [1, 2, 3];\nstack.push(4);\nconsole.log(stack);\nlet removed = stack.pop();\nconsole.log("제거됨:", removed);',
          hints: [
            '💡 push()는 여러 값을 한 번에 추가할 수 있어요',
            '💡 pop()은 제거한 값을 반환해요',
            '💡 스택(Stack) 자료구조의 LIFO(Last In First Out)와 같아요'
          ],
          commonMistakes: [
            'pop()을 빈 배열에 쓰면 undefined가 나와요',
            'push는 원본 배열을 변경해요 (새 배열을 만들지 않음)',
            'push의 반환값은 새 길이예요 (추가한 요소가 아님)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m5',
          title: 'unshift와 shift',
          description: '배열의 앞에 추가하고 제거해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'unshift, shift',
          conceptExplanation: 'unshift()는 앞에 추가, shift()는 앞에서 제거해요!',
          starterCode: 'let queue = [2, 3, 4];\n// 앞에 1을 추가하고, 맨 앞 요소를 제거하세요\n',
          solution: 'let queue = [2, 3, 4];\nqueue.unshift(1);\nconsole.log(queue);\nlet first = queue.shift();\nconsole.log("제거됨:", first);',
          hints: [
            '💡 큐(Queue) 자료구조의 FIFO(First In First Out)와 같아요',
            '💡 shift()도 제거한 값을 반환해요',
            '💡 push/pop보다 느려요 (모든 요소를 이동시켜야 해서)'
          ],
          commonMistakes: [
            'shift()를 빈 배열에 쓰면 undefined가 나와요',
            'unshift도 원본 배열을 변경해요',
            '이름이 헷갈려요: unshift는 추가, shift는 제거예요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m6',
          title: 'for...of로 배열 순회',
          description: '배열의 모든 요소를 순회해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'for...of',
          conceptExplanation: 'for (let 요소 of 배열) { }로 모든 요소를 순회해요!',
          starterCode: 'let fruits = ["사과", "바나나", "오렌지"];\n// for...of로 모든 과일을 출력하세요\n',
          solution: 'let fruits = ["사과", "바나나", "오렌지"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}',
          hints: [
            '💡 Python의 for...in과 비슷해요',
            '💡 인덱스 없이 값만 필요할 때 편리해요',
            '💡 for...in은 인덱스를 가져와요 (헷갈리지 마세요)'
          ],
          commonMistakes: [
            'for (fruit of fruits)처럼 let/const를 빼먹으면 전역 변수가 돼요',
            'for...in을 배열에 쓰면 인덱스(문자열)가 나와요',
            'break/continue를 사용할 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m7',
          title: 'forEach 메서드',
          description: '배열의 각 요소에 함수를 적용해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 15,
          concept: 'forEach',
          conceptExplanation: '배열.forEach(함수)로 각 요소에 함수를 실행해요!',
          starterCode: 'let numbers = [1, 2, 3, 4, 5];\n// forEach로 각 숫자의 제곱을 출력하세요\n',
          solution: 'let numbers = [1, 2, 3, 4, 5];\nnumbers.forEach(num => {\n  console.log(num * num);\n});',
          hints: [
            '💡 화살표 함수 =>를 사용해요',
            '💡 forEach는 인덱스도 받을 수 있어요: (값, 인덱스) =>',
            '💡 break/continue를 쓸 수 없어요 (for...of 사용하세요)'
          ],
          commonMistakes: [
            'forEach는 반환값이 없어요 (undefined)',
            'return을 써도 함수만 종료되고 forEach는 계속돼요',
            'forEach를 중간에 멈출 수 없어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m8',
          title: '배열에서 찾기',
          description: 'indexOf와 includes를 배워요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'indexOf, includes',
          conceptExplanation: 'indexOf는 위치를, includes는 포함 여부를 알려줘요!',
          starterCode: 'let animals = ["개", "고양이", "토끼", "햄스터"];\n// "토끼"가 있는지, 어디에 있는지 확인하세요\n',
          solution: 'let animals = ["개", "고양이", "토끼", "햄스터"];\nconsole.log(animals.includes("토끼"));\nconsole.log(animals.indexOf("토끼"));',
          hints: [
            '💡 includes는 true/false를 반환해요',
            '💡 indexOf는 인덱스를 반환하고, 없으면 -1이에요',
            '💡 lastIndexOf는 뒤에서부터 찾아요'
          ],
          commonMistakes: [
            'indexOf가 0을 반환하면 찾은 거예요 (false가 아님)',
            'includes는 ===로 비교해요 (타입도 같아야 함)',
            'find()는 객체 배열에서 조건으로 찾을 때 써요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m9',
          title: '최대값 찾기',
          description: '배열에서 가장 큰 수를 찾아요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 15,
          concept: '종합 실습',
          starterCode: 'let scores = [85, 92, 78, 95, 88];\n// 가장 높은 점수를 찾아서 출력하세요\n',
          solution: 'let scores = [85, 92, 78, 95, 88];\nlet max = scores[0];\nfor (let score of scores) {\n  if (score > max) {\n    max = score;\n  }\n}\nconsole.log("최고 점수:", max);',
          expectedOutput: '최고 점수: 95',
          hints: [
            '💡 첫 번째 값을 최대값으로 시작해서 비교해요',
            '💡 Math.max(...scores)로 더 간단히 할 수 있어요',
            '💡 스프레드 연산자(...)는 배열을 펼쳐요'
          ],
          commonMistakes: [
            'max를 0으로 시작하면 모든 값이 음수일 때 틀려요',
            'Math.max(scores)는 안 돼요. ...scores로 펼쳐야 해요',
            '등호를 빼먹으면 같은 값이 여러 개일 때 문제가 생겨요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w42-m10',
          title: '배열 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w42',
        title: '배열 퀴즈',
        questions: [
          {
            id: 'q1',
            question: '배열의 첫 번째 요소 인덱스는?',
            options: ['1', '0', '-1', 'first'],
            correctAnswer: 1,
            explanation: '배열 인덱스는 0부터 시작해요. colors[0]이 첫 번째 요소예요.'
          },
          {
            id: 'q2',
            question: '배열 끝에 요소를 추가하는 메서드는?',
            options: ['add()', 'append()', 'push()', 'insert()'],
            correctAnswer: 2,
            explanation: 'push()로 배열 끝에 요소를 추가해요. arr.push(4)처럼 사용해요.'
          },
          {
            id: 'q3',
            question: '배열에 값이 있는지 확인하는 메서드는?',
            options: ['has()', 'contains()', 'includes()', 'exists()'],
            correctAnswer: 2,
            explanation: 'includes()는 값이 있으면 true, 없으면 false를 반환해요. arr.includes("사과")'
          },
          {
            id: 'q4',
            question: 'pop()과 shift()의 차이는?',
            options: ['같다', 'pop은 끝에서, shift는 앞에서 제거', 'pop은 앞에서, shift는 끝에서 제거', 'pop은 추가, shift는 제거'],
            correctAnswer: 1,
            explanation: 'pop()은 배열 끝에서, shift()는 배열 앞에서 요소를 제거하고 반환해요.'
          },
          {
            id: 'q5',
            question: 'indexOf()가 -1을 반환하는 경우는?',
            options: ['첫 번째 요소를 찾았을 때', '마지막 요소를 찾았을 때', '요소를 찾지 못했을 때', '에러가 발생했을 때'],
            correctAnswer: 2,
            explanation: 'indexOf()는 요소를 찾지 못하면 -1을 반환해요. 0은 첫 번째 위치예요.'
          }
        ]
      }
    },
    // Week 43: 함수
    {
      id: 'week-43',
      number: 43,
      title: '함수',
      description: '재사용 가능한 코드 블록을 만들어요',
      missions: [
        {
          id: 'w43-m1',
          title: '함수란?',
          description: '함수의 개념과 필요성을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 20,
          estimatedMinutes: 10,
          concept: '함수 소개',
          conceptExplanation: '함수는 특정 작업을 수행하는 코드 블록이에요. 한 번 만들면 여러 번 재사용할 수 있어요!',
          hints: [
            '💡 Python의 def와 같은 역할이에요',
            '💡 같은 코드를 반복하지 않게 해줘요 (DRY 원칙)',
            '💡 코드를 기능별로 나누면 관리가 쉬워져요'
          ],
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '함수의 개념과 필요성 이해하기',
            '함수가 코드 재사용성을 높이는 원리 파악하기',
            '모듈화와 추상화의 개념 익히기'
          ],
          realWorldExample: '로그인 기능을 함수로 만들면 여러 페이지에서 재사용할 수 있어요. 카카오톡 메시지 보내기도 함수로 구현되어 있어요!',
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m2',
          title: '함수 선언하기',
          description: 'function 키워드로 함수를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 12,
          concept: '함수 선언',
          conceptExplanation: 'function 함수이름() { } 형태로 함수를 선언해요!',
          starterCode: '// "안녕하세요!"를 출력하는 greet 함수를 만들고 호출하세요\n',
          solution: 'function greet() {\n  console.log("안녕하세요!");\n}\n\ngreet();',
          expectedOutput: '안녕하세요!',
          hints: [
            '💡 function 키워드로 시작해요',
            '💡 함수 이름 뒤에 괄호()를 붙여요',
            '💡 함수를 만든 후 함수이름()으로 호출해요'
          ],
          commonMistakes: [
            'function을 Function으로 쓰면 안 돼요 (소문자)',
            '함수를 선언만 하고 호출하지 않으면 실행되지 않아요',
            '함수 이름에 공백을 넣으면 안 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m3',
          title: '매개변수 사용하기',
          description: '함수에 값을 전달해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'use',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 12,
          concept: '매개변수',
          conceptExplanation: 'function 함수이름(매개변수) { }로 값을 받아서 사용해요!',
          starterCode: '// 이름을 받아서 "안녕, OOO!"을 출력하는 함수를 만드세요\n',
          solution: 'function greet(name) {\n  console.log(`안녕, ${name}!`);\n}\n\ngreet("철수");',
          expectedOutput: '안녕, 철수!',
          hints: [
            '💡 매개변수는 함수 안에서 변수처럼 사용해요',
            '💡 여러 매개변수는 쉼표로 구분해요',
            '💡 매개변수 이름은 자유롭게 지을 수 있어요'
          ],
          commonMistakes: [
            '매개변수 없이 함수를 호출하면 undefined가 돼요',
            '매개변수 개수를 맞추지 않아도 에러는 안 나지만 이상하게 동작해요',
            '매개변수는 함수 밖에서 사용할 수 없어요 (스코프)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m4',
          title: 'return으로 값 반환',
          description: '함수에서 결과를 돌려줘요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          phase: 'modify',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 15,
          concept: 'return',
          conceptExplanation: 'return 값;으로 함수의 결과를 반환해요!',
          starterCode: '// 두 수를 더한 결과를 반환하는 add 함수를 만드세요\n',
          solution: 'function add(a, b) {\n  return a + b;\n}\n\nlet result = add(3, 5);\nconsole.log(result);',
          expectedOutput: '8',
          hints: [
            '💡 return 뒤의 값이 함수의 결과가 돼요',
            '💡 return을 만나면 함수가 즉시 종료돼요',
            '💡 return이 없으면 undefined를 반환해요'
          ],
          commonMistakes: [
            'return 후에 코드를 쓰면 실행되지 않아요 (unreachable code)',
            'return을 안 쓰면 함수가 undefined를 반환해요',
            'console.log()와 return을 혼동하지 마세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m5',
          title: '화살표 함수',
          description: '간단하게 함수를 만드는 방법을 배워요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 15,
          concept: '화살표 함수',
          conceptExplanation: 'const 함수명 = (매개변수) => { } 형태의 간결한 문법이에요!',
          starterCode: '// 화살표 함수로 두 수를 곱하는 multiply 함수를 만드세요\n',
          solution: 'const multiply = (a, b) => {\n  return a * b;\n};\n\n// 또는 한 줄로\nconst multiply2 = (a, b) => a * b;\n\nconsole.log(multiply(4, 5));',
          expectedOutput: '20',
          hints: [
            '💡 => 화살표로 함수를 만들어요',
            '💡 한 줄이면 중괄호와 return을 생략할 수 있어요',
            '💡 매개변수가 하나면 괄호도 생략 가능: x => x * 2'
          ],
          commonMistakes: [
            '화살표는 =>예요. ->가 아니에요',
            '중괄호를 쓰면 return을 명시해야 해요',
            'function 키워드와 함께 쓸 수 없어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m6',
          title: '기본 매개변수',
          description: '매개변수에 기본값을 지정해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: '기본 매개변수',
          conceptExplanation: '매개변수 = 기본값 형태로 기본값을 지정해요!',
          starterCode: '// 이름이 없으면 "손님"이라고 인사하는 함수를 만드세요\n',
          solution: 'function greet(name = "손님") {\n  console.log(`안녕하세요, ${name}님!`);\n}\n\ngreet();\ngreet("철수");',
          hints: [
            '💡 인자를 안 주면 기본값이 사용돼요',
            '💡 undefined를 전달해도 기본값이 사용돼요',
            '💡 null을 전달하면 기본값이 사용되지 않아요'
          ],
          commonMistakes: [
            '기본 매개변수는 뒤쪽에 위치해야 해요',
            'greet(name = "손님")처럼 호출할 때 쓰면 안 돼요',
            '기본값은 함수가 호출될 때마다 새로 평가돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m7',
          title: '콜백 함수',
          description: '함수를 다른 함수에 전달해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 18,
          concept: '콜백 함수',
          conceptExplanation: '함수를 다른 함수의 인자로 전달하는 것을 콜백이라고 해요!',
          starterCode: '// calculate 함수가 연산 함수를 받아서 실행하게 만드세요\nfunction calculate(a, b, operation) {\n  // operation 함수를 호출하세요\n}\n',
          solution: 'function calculate(a, b, operation) {\n  return operation(a, b);\n}\n\nconst add = (x, y) => x + y;\nconst subtract = (x, y) => x - y;\n\nconsole.log(calculate(10, 5, add));\nconsole.log(calculate(10, 5, subtract));',
          hints: [
            '💡 함수도 값처럼 변수에 저장하고 전달할 수 있어요',
            '💡 콜백은 비동기 작업에서 많이 써요',
            '💡 forEach, map 같은 메서드도 콜백을 받아요'
          ],
          commonMistakes: [
            'operation()처럼 괄호를 붙여 전달하면 함수 실행 결과가 전달돼요',
            '콜백 함수 안의 this는 다르게 동작할 수 있어요',
            '화살표 함수와 일반 함수의 this는 다르게 작동해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m8',
          title: '스코프 이해하기',
          description: '변수가 보이는 범위를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 15,
          concept: '스코프',
          conceptExplanation: '함수 안에서 선언한 변수는 함수 밖에서 사용할 수 없어요. 이것을 스코프라고 해요!',
          hints: [
            '💡 지역 변수는 함수 안에서만 사용 가능해요',
            '💡 전역 변수는 어디서든 사용 가능하지만 주의해서 써야 해요',
            '💡 블록 스코프: let/const는 {}로 범위가 제한돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m9',
          title: '계산기 함수 만들기',
          description: '사칙연산을 하는 계산기 함수를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          phase: 'create',
          isKeyMission: true,
          exp: 40,
          estimatedMinutes: 20,
          concept: '종합 실습',
          starterCode: '// 두 수와 연산자를 받아서 계산하는 calculator 함수를 만드세요\n// calculator(10, 5, "+") → 15\n',
          solution: 'function calculator(a, b, operator) {\n  switch(operator) {\n    case "+":\n      return a + b;\n    case "-":\n      return a - b;\n    case "*":\n      return a * b;\n    case "/":\n      return a / b;\n    default:\n      return "잘못된 연산자";\n  }\n}\n\nconsole.log(calculator(10, 5, "+"));\nconsole.log(calculator(10, 5, "-"));\nconsole.log(calculator(10, 5, "*"));\nconsole.log(calculator(10, 5, "/"));',
          hints: [
            '💡 switch문이나 if문을 활용하세요',
            '💡 0으로 나누기를 확인하면 더 좋아요',
            '💡 잘못된 연산자에 대한 처리도 필요해요'
          ],
          commonMistakes: [
            'break를 빼먹으면 다음 case도 실행돼요',
            'return을 안 쓰면 결과를 받을 수 없어요',
            '0으로 나누면 Infinity가 나와요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w43-m10',
          title: '함수 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w43',
        title: '함수 퀴즈',
        questions: [
          {
            id: 'q1',
            question: '함수의 결과를 돌려주는 키워드는?',
            options: ['give', 'return', 'output', 'send'],
            correctAnswer: 1,
            explanation: 'return 키워드로 함수의 결과를 반환해요. return 뒤의 값이 함수 호출의 결과가 돼요.'
          },
          {
            id: 'q2',
            question: '화살표 함수의 기호는?',
            options: ['->', '=>', '-->', '~>'],
            correctAnswer: 1,
            explanation: '=>가 화살표 함수 기호예요. const add = (a, b) => a + b; 형태로 사용해요.'
          },
          {
            id: 'q3',
            question: '함수를 다른 함수에 전달하는 것을 뭐라고 하나요?',
            options: ['재귀', '콜백', '클로저', '호이스팅'],
            correctAnswer: 1,
            explanation: '콜백 함수라고 해요. 함수를 인자로 전달해서 나중에 실행되게 해요. forEach(callback) 같은 형태예요.'
          },
          {
            id: 'q4',
            question: '다음 중 올바른 함수 선언은?',
            options: ['function Add(a, b) { return a + b }', 'def add(a, b): return a + b', 'func add(a, b) { return a + b }', 'fn add(a, b) => a + b'],
            correctAnswer: 0,
            explanation: 'JavaScript는 function 키워드를 사용해요. Python의 def, Go의 func 등과 다릅니다.'
          },
          {
            id: 'q5',
            question: 'return이 없는 함수는 무엇을 반환하나요?',
            options: ['0', 'null', 'undefined', '에러'],
            correctAnswer: 2,
            explanation: 'return이 없으면 함수는 자동으로 undefined를 반환해요.'
          }
        ]
      }
    },
    // Week 44: DOM 조작
    {
      id: 'week-44',
      number: 44,
      title: 'DOM 조작',
      description: 'JavaScript로 웹 페이지를 변경해요',
      missions: [
        {
          id: 'w44-m1',
          title: 'DOM이란?',
          description: '문서 객체 모델을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'DOM 소개',
          conceptExplanation: 'DOM(Document Object Model)은 HTML을 JavaScript로 조작할 수 있게 해주는 인터페이스예요!',
          hints: [
            '💡 HTML 요소를 JavaScript 객체로 다룰 수 있어요',
            '💡 트리 구조로 되어 있어서 부모-자식 관계가 있어요',
            '💡 브라우저가 자동으로 HTML을 DOM으로 변환해요'
          ],
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'DOM의 개념과 구조 이해하기',
            'JavaScript가 웹 페이지를 동적으로 만드는 원리 파악하기',
            'DOM API를 활용한 웹 인터랙션 구현하기'
          ],
          realWorldExample: '좋아요 버튼 클릭, 댓글 추가, 다크모드 전환 등 모든 웹 인터랙션이 DOM 조작으로 이루어져요!',
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m2',
          title: '요소 선택하기 - getElementById',
          description: 'ID로 요소를 선택해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 12,
          concept: 'getElementById',
          conceptExplanation: 'document.getElementById("아이디")로 요소를 선택해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">제목</h1>\n  <script>\n    // title 요소를 선택해서 콘솔에 출력하세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">제목</h1>\n  <script>\n    const title = document.getElementById("title");\n    console.log(title);\n  </script>\n</body>\n</html>',
          hints: [
            '💡 id 앞에 #을 붙이지 않아요',
            '💡 없는 id를 찾으면 null을 반환해요',
            '💡 id는 문서에서 유일해야 해요'
          ],
          commonMistakes: [
            'getElementById("title")이지 getElementByID가 아니에요 (대소문자 주의)',
            'id 앞에 #을 붙이면 안 돼요. querySelector에서만 붙여요',
            'script가 HTML보다 위에 있으면 요소를 찾지 못해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m3',
          title: '요소 선택하기 - querySelector',
          description: 'CSS 선택자로 요소를 선택해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 12,
          concept: 'querySelector',
          conceptExplanation: 'document.querySelector("선택자")로 첫 번째 일치 요소를 선택해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <p class="message">첫 번째</p>\n  <p class="message">두 번째</p>\n  <script>\n    // 첫 번째 .message 요소를 선택하세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <p class="message">첫 번째</p>\n  <p class="message">두 번째</p>\n  <script>\n    const msg = document.querySelector(".message");\n    console.log(msg.textContent);\n  </script>\n</body>\n</html>',
          hints: [
            '💡 CSS 선택자를 그대로 사용해요 (.클래스, #아이디)',
            '💡 querySelectorAll()은 모든 일치 요소를 반환해요',
            '💡 querySelector가 더 유연하고 강력해요'
          ],
          commonMistakes: [
            '.을 빼먹으면 안 돼요: querySelector("message") ✗',
            'querySelector는 첫 번째만 반환해요. 전부 원하면 querySelectorAll',
            'querySelectorAll의 결과는 배열이 아니라 NodeList예요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m4',
          title: '텍스트 변경하기',
          description: 'textContent로 텍스트를 바꿔요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'modify',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'textContent',
          conceptExplanation: '요소.textContent = "새 텍스트"로 내용을 변경해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">이전 제목</h1>\n  <script>\n    // 제목을 "새로운 제목"으로 바꾸세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="title">이전 제목</h1>\n  <script>\n    const title = document.getElementById("title");\n    title.textContent = "새로운 제목";\n  </script>\n</body>\n</html>',
          hints: [
            '💡 textContent는 순수 텍스트만 다뤄요',
            '💡 innerHTML은 HTML 태그도 해석해요',
            '💡 보안상 textContent가 더 안전해요'
          ],
          commonMistakes: [
            'innerHTML은 <script> 같은 태그를 실행할 수 있어 위험해요',
            'innerText는 CSS에 영향을 받아요 (display:none이면 안 보임)',
            'textContent = 없이 title.textContent만 쓰면 읽기만 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m5',
          title: '스타일 변경하기',
          description: 'style 속성으로 CSS를 바꿔요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'modify',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 12,
          concept: 'style 속성',
          conceptExplanation: '요소.style.속성 = "값"으로 스타일을 변경해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <p id="text">색이 바뀔 텍스트</p>\n  <script>\n    // 텍스트 색상을 빨간색으로 바꾸세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <p id="text">색이 바뀔 텍스트</p>\n  <script>\n    const text = document.getElementById("text");\n    text.style.color = "red";\n    text.style.fontSize = "24px";\n  </script>\n</body>\n</html>',
          hints: [
            '💡 CSS의 font-size는 JS에서 fontSize로 써요 (camelCase)',
            '💡 단위를 꼭 붙여야 해요: "24px", "50%"',
            '💡 여러 스타일을 한 번에 바꾸려면 className이나 classList를 써요'
          ],
          commonMistakes: [
            'font-size처럼 하이픈을 쓰면 안 돼요. fontSize로 써야 해요',
            '값에 단위를 안 붙이면 안 돼요: fontSize = 24 ✗',
            'style은 인라인 스타일이라 우선순위가 높아요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m6',
          title: '클래스 조작하기',
          description: 'classList로 클래스를 추가/제거해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 15,
          concept: 'classList',
          conceptExplanation: 'classList.add(), remove(), toggle()로 클래스를 조작해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .highlight { background-color: yellow; }\n    .big { font-size: 24px; }\n  </style>\n</head>\n<body>\n  <p id="text">텍스트</p>\n  <script>\n    // text에 highlight와 big 클래스를 추가하세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    .highlight { background-color: yellow; }\n    .big { font-size: 24px; }\n  </style>\n</head>\n<body>\n  <p id="text">텍스트</p>\n  <script>\n    const text = document.getElementById("text");\n    text.classList.add("highlight");\n    text.classList.add("big");\n  </script>\n</body>\n</html>',
          hints: [
            '💡 add()는 클래스 추가, remove()는 제거예요',
            '💡 toggle()은 있으면 제거, 없으면 추가해요',
            '💡 contains()로 클래스 존재 여부를 확인해요'
          ],
          commonMistakes: [
            'className은 문자열이라 덮어써요. classList가 더 안전해요',
            'classList.add(".highlight")처럼 점을 붙이면 안 돼요',
            'toggle()의 두 번째 인자로 true/false를 줄 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m7',
          title: '이벤트 처리하기',
          description: '클릭 같은 이벤트에 반응해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'modify',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 18,
          concept: 'addEventListener',
          conceptExplanation: '요소.addEventListener("이벤트", 함수)로 이벤트를 처리해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <button id="btn">클릭하세요</button>\n  <p id="result"></p>\n  <script>\n    // 버튼을 클릭하면 "클릭됨!"이 표시되게 하세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <button id="btn">클릭하세요</button>\n  <p id="result"></p>\n  <script>\n    const btn = document.getElementById("btn");\n    const result = document.getElementById("result");\n    \n    btn.addEventListener("click", function() {\n      result.textContent = "클릭됨!";\n    });\n  </script>\n</body>\n</html>',
          hints: [
            '💡 click, mouseover, keydown 등 다양한 이벤트가 있어요',
            '💡 화살표 함수를 써도 돼요',
            '💡 이벤트 객체(e)로 상세 정보를 받을 수 있어요'
          ],
          commonMistakes: [
            'addEventListener("click")처럼 함수를 안 넣으면 안 돼요',
            'onclick 속성보다 addEventListener가 더 권장돼요',
            '같은 이벤트를 여러 번 추가할 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m8',
          title: '요소 생성하기',
          description: '새로운 HTML 요소를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 15,
          concept: 'createElement',
          conceptExplanation: 'document.createElement()로 요소를 만들고 appendChild()로 추가해요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <ul id="list">\n    <li>항목 1</li>\n  </ul>\n  <script>\n    // "항목 2" li를 추가하세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <ul id="list">\n    <li>항목 1</li>\n  </ul>\n  <script>\n    const list = document.getElementById("list");\n    const newItem = document.createElement("li");\n    newItem.textContent = "항목 2";\n    list.appendChild(newItem);\n  </script>\n</body>\n</html>',
          hints: [
            '💡 createElement로 만들고, textContent로 내용 설정',
            '💡 appendChild로 부모에 추가해요',
            '💡 insertBefore()로 특정 위치에 삽입할 수 있어요'
          ],
          commonMistakes: [
            'createElement만 하면 메모리에만 있어요. appendChild로 추가해야 해요',
            'appendChild는 맨 끝에 추가돼요',
            'remove()로 요소를 삭제할 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m9',
          title: '카운터 앱 만들기',
          description: '버튼으로 숫자를 증가/감소시켜요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          exp: 45,
          estimatedMinutes: 25,
          concept: '종합 실습',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="count">0</h1>\n  <button id="increase">+</button>\n  <button id="decrease">-</button>\n  <script>\n    // 카운터를 만드세요\n  </script>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <h1 id="count">0</h1>\n  <button id="increase">+</button>\n  <button id="decrease">-</button>\n  <script>\n    let count = 0;\n    const countDisplay = document.getElementById("count");\n    const increaseBtn = document.getElementById("increase");\n    const decreaseBtn = document.getElementById("decrease");\n    \n    increaseBtn.addEventListener("click", () => {\n      count++;\n      countDisplay.textContent = count;\n    });\n    \n    decreaseBtn.addEventListener("click", () => {\n      count--;\n      countDisplay.textContent = count;\n    });\n  </script>\n</body>\n</html>',
          hints: [
            '💡 변수로 현재 값을 저장하고, 버튼 클릭 시 업데이트해요',
            '💡 화면에 표시할 때마다 textContent를 업데이트해요',
            '💡 리셋 버튼을 추가해도 좋아요'
          ],
          commonMistakes: [
            'count 변수를 함수 안에 넣으면 값이 유지되지 않아요',
            'textContent 업데이트를 빼먹으면 화면이 안 바뀌어요',
            '숫자를 문자열로 연결하면 "01"처럼 이상해져요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w44-m10',
          title: 'DOM 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w44',
        title: 'DOM 퀴즈',
        questions: [
          {
            id: 'q1',
            question: 'ID로 요소를 선택하는 메서드는?',
            options: ['getElementByClass()', 'getElementById()', 'selectById()', 'findById()'],
            correctAnswer: 1,
            explanation: 'document.getElementById("id")로 ID로 요소를 선택해요. 대소문자에 주의하세요 (Id가 맞아요).'
          },
          {
            id: 'q2',
            question: '클릭 이벤트를 추가하는 방법은?',
            options: ['onClick()', 'addClick()', 'addEventListener("click")', 'setClickHandler()'],
            correctAnswer: 2,
            explanation: 'addEventListener("click", 함수)로 이벤트를 추가해요. 여러 이벤트를 동시에 등록할 수 있어요.'
          },
          {
            id: 'q3',
            question: '새 요소를 만드는 메서드는?',
            options: ['newElement()', 'createElement()', 'makeElement()', 'buildElement()'],
            correctAnswer: 1,
            explanation: 'document.createElement("태그명")으로 새 요소를 만들어요. appendChild()로 DOM에 추가해야 화면에 나타나요.'
          },
          {
            id: 'q4',
            question: 'textContent와 innerHTML의 차이는?',
            options: ['같다', 'textContent는 텍스트만, innerHTML은 HTML도', 'innerHTML이 더 빠르다', 'textContent가 더 최신'],
            correctAnswer: 1,
            explanation: 'textContent는 순수 텍스트만 다루고, innerHTML은 HTML 태그를 해석해요. 보안상 textContent가 더 안전해요.'
          },
          {
            id: 'q5',
            question: 'classList.toggle()의 역할은?',
            options: ['클래스 추가만', '클래스 제거만', '있으면 제거, 없으면 추가', '클래스 확인만'],
            correctAnswer: 2,
            explanation: 'toggle()은 클래스가 있으면 제거하고, 없으면 추가해요. 버튼을 눌러 on/off할 때 유용해요.'
          }
        ]
      },
      project: {
        id: 'project-w44',
        title: 'To-Do 리스트 앱',
        description: 'JavaScript로 할 일 목록 앱을 만들어보세요.',
        difficulty: 'intermediate',
        duration: '2-3시간',
        requirements: [
          '할 일 입력 폼',
          '추가 버튼으로 목록에 추가',
          '삭제 버튼으로 항목 제거',
          '완료 체크박스로 취소선 표시',
          '남은 할 일 개수 표시'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'DOM'],
        exp: 100,
        badge: 'JS 개발자'
      }
    }
  ]
};

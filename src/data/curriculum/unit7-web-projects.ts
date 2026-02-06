import type { Unit } from '../../types';

// Unit 7: 웹 프로젝트 (4주, 45-48주차)
// CSTA 표준: 2-AP-13, 2-AP-14, 2-AP-15, 2-AP-16, 2-AP-17, 2-AP-18, 2-AP-19
// 목표: HTML, CSS, JavaScript를 활용한 실전 프로젝트 개발
// 교차 검증: freeCodeCamp, The Odin Project, Frontend Mentor, Wes Bos JS30, DevChallenges.io

export const unit7: Unit = {
  id: 'unit-7',
  number: 7,
  title: '웹 프로젝트',
  description: '배운 모든 것을 활용해서 실제 웹 애플리케이션을 만들어요!',
  icon: '🚀',
  color: '#8b5cf6',
  unlockLevel: 55,
  totalMissions: 40,
  estimatedHours: 20,
  weeks: [
    // ============================================================
    // Week 45: 인터랙티브 퀴즈 앱 (HTML+CSS+JS, 점수 시스템)
    // ============================================================
    {
      id: 'week-45',
      number: 45,
      title: '퀴즈 앱 만들기',
      description: '대화형 퀴즈 웹 앱을 만들어요',
      missions: [
        {
          id: 'w45-m1',
          title: '프로젝트 계획',
          description: '퀴즈 앱의 구조를 설계해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 25,
          estimatedMinutes: 15,
          concept: '프로젝트 설계',
          conceptExplanation: '좋은 프로젝트는 계획에서 시작해요! 기능, 화면, 데이터 구조를 먼저 정해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '프로젝트 계획의 중요성을 이해하고 단계별로 설계할 수 있다',
            '사용자 인터페이스를 화면별로 분리하여 구조화할 수 있다',
            '프로그램에 필요한 데이터 구조를 미리 계획할 수 있다'
          ],
          realWorldExample: '건축가가 집을 짓기 전에 설계도를 그리는 것처럼, 프로그래머도 앱을 만들기 전에 어떤 화면이 필요한지, 어떤 기능이 있어야 하는지 먼저 계획해요.',
          hints: [
            '💡 힌트 1: 시작 화면, 문제 화면, 결과 화면이 필요해요',
            '💡 힌트 2: 각 화면에서 사용자가 무엇을 할 수 있는지 생각해보세요',
            '💡 힌트 3: 문제와 정답을 어떻게 저장할지 고민해보세요'
          ],
          commonMistakes: [
            '계획 없이 바로 코드를 작성하다가 중간에 막히는 경우',
            '모든 기능을 한 번에 만들려고 해서 복잡해지는 경우',
            '사용자 경험을 고려하지 않고 기능만 생각하는 경우'
          ],
          conceptCards: [
            { title: '프로젝트 설계란?', description: '프로그램을 만들기 전에 어떤 기능이 필요하고, 어떻게 구성할지 미리 계획하는 과정이에요.' },
            { title: '화면 설계', description: '퀴즈 앱은 시작 화면, 문제 화면, 결과 화면 세 가지로 나눌 수 있어요.' },
            { title: '데이터 구조', description: '퀴즈 문제, 선택지, 정답, 점수 등 필요한 데이터를 어떻게 저장할지 미리 정해요.' }
          ],
          challenges: [
            {
              id: 'c1',
              title: '퀴즈 앱 화면 구조 나누기',
              description: '퀴즈 앱에 필요한 3개의 화면(시작, 문제, 결과)을 HTML 주석으로 구분하여 작성하세요.',
              difficulty: 'easy',
              starterCode: '<!-- 퀴즈 앱의 화면 구조를 주석으로 설계하세요 -->\n<div id=\"app\">\n  <!-- 화면 1: ??? -->\n  \n  <!-- 화면 2: ??? -->\n  \n  <!-- 화면 3: ??? -->\n</div>',
              solution: '<div id=\"app\">\n  <!-- 화면 1: 시작 화면 -->\n  <div id=\"start-screen\">\n    <h1>퀴즈 도전!</h1>\n    <button>시작하기</button>\n  </div>\n  <!-- 화면 2: 문제 화면 -->\n  <div id=\"quiz-screen\">\n    <h2>문제</h2>\n    <div id=\"options\"></div>\n  </div>\n  <!-- 화면 3: 결과 화면 -->\n  <div id=\"result-screen\">\n    <h1>결과</h1>\n    <p>점수: 0</p>\n  </div>\n</div>',
              hints: ['시작, 문제, 결과 세 가지 화면이 필요해요', '각 화면에 id를 붙여주세요'],
              estimatedMinutes: 3,
              feedback: { perfect: '화면 구조를 완벽하게 설계했어요!', good: '좋아요! 기본 구조를 잘 잡았어요.', partial: '화면이 빠졌어요. 시작/문제/결과 세 가지가 필요해요.', wrong: '퀴즈 앱은 시작, 문제, 결과 세 화면이 필요해요.' }
            },
            {
              id: 'c2',
              title: '퀴즈 데이터 설계하기',
              description: 'JavaScript 객체로 퀴즈 문제 1개의 데이터 구조를 설계하세요. question, options, correct 속성이 필요합니다.',
              difficulty: 'easy',
              starterCode: '// 퀴즈 문제 1개를 객체로 만드세요\nconst question1 = {\n  // 여기에 속성을 추가하세요\n};',
              solution: 'const question1 = {\n  question: \"HTML의 약자는?\",\n  options: [\"Hyper Text Markup Language\", \"High Tech Modern Language\", \"Hyper Transfer Markup Language\", \"Home Tool Markup Language\"],\n  correct: 0\n};',
              hints: ['question은 문자열, options는 배열, correct는 숫자예요', '정답 인덱스는 0부터 시작해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '데이터 구조를 완벽하게 설계했어요!', good: '객체 구조를 잘 이해했어요!', partial: '속성이 빠졌어요. question, options, correct 모두 필요해요.', wrong: '객체에는 question(문자열), options(배열), correct(숫자)가 필요해요.' }
            },
            {
              id: 'c3',
              title: '버튼 요소 만들기',
              description: 'HTML로 퀴즈 시작 버튼을 만드세요. id=\"start-btn\"과 onclick 속성을 포함해야 합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 시작 버튼을 만드세요 -->\n',
              solution: '<button id=\"start-btn\" onclick=\"startQuiz()\">퀴즈 시작하기</button>',
              hints: ['button 태그를 사용하세요', 'id 속성으로 버튼을 식별해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '완벽한 버튼이에요!', good: '버튼을 잘 만들었어요!', partial: 'id나 onclick이 빠졌어요.', wrong: '<button> 태그에 id=\"start-btn\"을 추가하세요.' }
            },
            {
              id: 'c4',
              title: '화면 숨기기/보이기 CSS',
              description: 'CSS로 quiz-screen과 result-screen을 숨기고, start-screen만 보이게 하세요.',
              difficulty: 'medium',
              starterCode: '/* 화면 표시/숨김 스타일을 작성하세요 */\n#start-screen {\n  \n}\n#quiz-screen {\n  \n}\n#result-screen {\n  \n}',
              solution: '#start-screen {\n  display: block;\n}\n#quiz-screen {\n  display: none;\n}\n#result-screen {\n  display: none;\n}',
              hints: ['display: none은 요소를 숨겨요', 'display: block은 요소를 보여요'],
              estimatedMinutes: 5,
              feedback: { perfect: '화면 전환 기초를 완벽하게 이해했어요!', good: 'CSS display 속성을 잘 사용했어요!', partial: '일부 화면의 display 값이 잘못됐어요.', wrong: 'display: none으로 숨기고 display: block으로 보여요.' }
            },
            {
              id: 'c5',
              title: '퀴즈 문제 배열 만들기',
              description: '3개 이상의 퀴즈 문제를 배열로 만드세요. 각 문제는 question, options(4개), correct 속성을 가져야 합니다.',
              difficulty: 'medium',
              starterCode: 'const quizData = [\n  // 문제 1\n  {\n    question: \"\",\n    options: [],\n    correct: 0\n  },\n  // 문제 2, 3도 추가하세요\n];',
              solution: 'const quizData = [\n  {\n    question: \"CSS에서 id 선택자 기호는?\",\n    options: [\".\", \"#\", \"@\", \"*\"],\n    correct: 1\n  },\n  {\n    question: \"JavaScript 변수 선언 키워드가 아닌 것은?\",\n    options: [\"let\", \"const\", \"var\", \"int\"],\n    correct: 3\n  },\n  {\n    question: \"HTML에서 가장 큰 제목 태그는?\",\n    options: [\"<h6>\", \"<h1>\", \"<header>\", \"<title>\"],\n    correct: 1\n  }\n];',
              hints: ['배열 안에 객체를 여러 개 넣으세요', '각 객체 사이에 쉼표를 잊지 마세요', 'options는 정확히 4개씩 넣어요'],
              estimatedMinutes: 8,
              feedback: { perfect: '완벽한 퀴즈 데이터예요!', good: '배열과 객체를 잘 조합했어요!', partial: '문제 수가 부족하거나 구조가 불완전해요.', wrong: '각 문제에 question, options(4개), correct가 필요해요.' }
            },
            {
              id: 'c6',
              title: '진행 상황 표시 HTML',
              description: '\"문제 1/5\" 형태의 진행 표시줄을 HTML로 만드세요. 프로그레스 바와 텍스트를 포함해야 합니다.',
              difficulty: 'medium',
              starterCode: '<!-- 진행 상황 표시 영역을 만드세요 -->\n<div id=\"progress-area\">\n  \n</div>',
              solution: '<div id=\"progress-area\">\n  <div id=\"progress-bar\" style=\"width: 20%; height: 8px; background: #4CAF50; border-radius: 4px;\"></div>\n  <p id=\"progress-text\">문제 1/5</p>\n</div>',
              hints: ['진행률을 시각적으로 보여주는 바를 만들어요', 'width를 %로 설정하면 진행률을 표현할 수 있어요'],
              estimatedMinutes: 6,
              feedback: { perfect: '사용자 경험을 고려한 훌륭한 UI예요!', good: '진행 상황 표시를 잘 만들었어요!', partial: '프로그레스 바나 텍스트 중 하나가 빠졌어요.', wrong: '진행률 바(div)와 텍스트(p) 두 가지가 필요해요.' }
            },
            {
              id: 'c7',
              title: '결과 화면 설계',
              description: '점수, 메시지, 다시하기 버튼이 있는 결과 화면 HTML을 작성하세요.',
              difficulty: 'medium',
              starterCode: '<div id=\"result-screen\">\n  <!-- 점수, 메시지, 다시하기 버튼을 추가하세요 -->\n</div>',
              solution: '<div id=\"result-screen\">\n  <h1 id=\"result-title\">퀴즈 완료!</h1>\n  <p id=\"score-text\">5문제 중 3개 맞았어요!</p>\n  <p id=\"result-message\">잘했어요! 조금만 더 노력하면 만점!</p>\n  <button id=\"restart-btn\" onclick=\"restartQuiz()\">다시 도전하기</button>\n</div>',
              hints: ['점수를 보여줄 요소에 id를 붙여요', 'JavaScript에서 내용을 바꿀 수 있도록 id가 중요해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '완벽한 결과 화면이에요!', good: '필요한 요소들을 잘 넣었어요!', partial: '점수, 메시지, 버튼 중 빠진 것이 있어요.', wrong: '점수 표시(p), 메시지(p), 다시하기 버튼(button)이 필요해요.' }
            },
            {
              id: 'c8',
              title: '전체 앱 레이아웃 HTML',
              description: '시작/퀴즈/결과 세 화면을 모두 포함하는 완전한 퀴즈 앱 HTML 구조를 작성하세요.',
              difficulty: 'hard',
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <div id=\"app\">\n    <!-- 세 화면을 모두 작성하세요 -->\n  </div>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <div id=\"app\">\n    <div id=\"start-screen\">\n      <h1>퀴즈에 도전하세요!</h1>\n      <p>웹 개발 지식을 테스트해보세요</p>\n      <button id=\"start-btn\">시작하기</button>\n    </div>\n    <div id=\"quiz-screen\" style=\"display:none\">\n      <div id=\"progress\">문제 1/5</div>\n      <h2 id=\"question\"></h2>\n      <div id=\"options\"></div>\n    </div>\n    <div id=\"result-screen\" style=\"display:none\">\n      <h1>퀴즈 완료!</h1>\n      <p id=\"score\"></p>\n      <button id=\"restart-btn\">다시 하기</button>\n    </div>\n  </div>\n</body>\n</html>',
              hints: ['세 div에 각각 고유한 id를 붙여요', 'quiz-screen과 result-screen은 처음에 숨겨요', 'JavaScript가 찾을 요소에는 반드시 id를 붙여요'],
              estimatedMinutes: 12,
              feedback: { perfect: '완벽한 HTML 구조예요! 프로 개발자 수준!', good: '전체 구조를 잘 잡았어요!', partial: '화면이 빠졌거나 id가 누락됐어요.', wrong: '시작/퀴즈/결과 세 화면을 div로 구분하고 id를 붙여야 해요.' }
            },
            {
              id: 'c9',
              title: '사용자 흐름 설계',
              description: '퀴즈 앱의 사용자 흐름을 JavaScript 주석으로 설계하세요: 시작 → 문제풀기 → 다음문제 → 결과보기 → 다시하기',
              difficulty: 'hard',
              starterCode: '// 퀴즈 앱의 전체 흐름을 주석으로 설계하세요\n// 1단계: 시작 버튼 클릭\n// → \n// 2단계: \n// → \n// ...',
              solution: '// 1단계: 시작 버튼 클릭\n// → startQuiz() 호출, start-screen 숨기고 quiz-screen 보여줌\n// 2단계: 문제 표시\n// → showQuestion()으로 현재 문제/선택지 화면에 표시\n// 3단계: 답 선택\n// → selectAnswer(index)로 정답 확인, score 업데이트\n// 4단계: 다음 문제\n// → currentQuestion++, 마지막이면 결과 화면으로\n// 5단계: 결과 표시\n// → showResult()로 점수/메시지 표시\n// 6단계: 다시하기\n// → restartQuiz()로 변수 초기화, 시작 화면으로',
              hints: ['각 단계에서 어떤 함수가 필요한지 생각해요', '변수가 어떻게 변하는지도 적어보세요'],
              estimatedMinutes: 10,
              feedback: { perfect: '체계적인 설계예요! 이대로 구현하면 됩니다!', good: '전체 흐름을 잘 이해했어요!', partial: '일부 단계가 빠졌어요. 전체 흐름을 다시 생각해보세요.', wrong: '시작→문제표시→답선택→다음문제→결과→다시하기 순서로 정리하세요.' }
            },
            {
              id: 'c10',
              title: '반응형 퀴즈 앱 레이아웃',
              description: '모바일에서도 잘 보이는 퀴즈 앱 CSS를 작성하세요. max-width, 미디어쿼리를 포함해야 합니다.',
              difficulty: 'hard',
              starterCode: '/* 반응형 퀴즈 앱 스타일 */\n#app {\n  \n}\n\n/* 모바일 대응 */\n@media (max-width: 480px) {\n  \n}',
              solution: '#app {\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 30px;\n  font-family: Arial, sans-serif;\n  text-align: center;\n}\n\nbutton {\n  padding: 12px 24px;\n  font-size: 16px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  background: #4CAF50;\n  color: white;\n}\n\n@media (max-width: 480px) {\n  #app {\n    margin: 10px;\n    padding: 15px;\n  }\n  button {\n    width: 100%;\n    padding: 15px;\n    font-size: 18px;\n  }\n}',
              hints: ['max-width로 최대 너비를 제한해요', '@media 쿼리로 작은 화면에서 스타일을 바꿔요', '모바일에서는 버튼을 더 크게 만들어요'],
              estimatedMinutes: 15,
              feedback: { perfect: '프로 수준의 반응형 디자인이에요!', good: '반응형을 잘 적용했어요!', partial: '미디어쿼리가 불완전해요.', wrong: '@media (max-width: 480px) {} 안에 모바일 스타일을 넣으세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m2',
          title: 'HTML 구조 만들기',
          description: '퀴즈 앱의 HTML 뼈대를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'HTML 구조',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'HTML로 여러 화면을 구조화하고 ID를 활용하여 요소를 식별할 수 있다',
            'display 속성을 사용하여 화면 전환을 위한 기반을 만들 수 있다'
          ],
          realWorldExample: '여러 방이 있는 집을 만드는 것과 같아요! 각 div가 다른 화면이에요.',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <!-- 퀴즈 앱 구조를 만드세요 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <div id=\"app\">\n    <div id=\"start-screen\">\n      <h1>퀴즈에 도전하세요!</h1>\n      <button id=\"start-btn\">시작하기</button>\n    </div>\n    <div id=\"quiz-screen\" style=\"display:none\">\n      <div id=\"progress\">문제 1/5</div>\n      <h2 id=\"question\">문제가 여기에 표시됩니다</h2>\n      <div id=\"options\"></div>\n    </div>\n    <div id=\"result-screen\" style=\"display:none\">\n      <h1>퀴즈 완료!</h1>\n      <p id=\"score\">점수: 0/5</p>\n      <button id=\"restart-btn\">다시 하기</button>\n    </div>\n  </div>\n</body>\n</html>',
          hints: [
            '💡 힌트 1: 시작, 퀴즈, 결과 세 화면을 div로 구분해요',
            '💡 힌트 2: 각 div에 고유한 id를 붙여요',
            '💡 힌트 3: style=\"display:none\"으로 숨겨진 화면을 만들어요'
          ],
          commonMistakes: [
            'id를 중복으로 사용하는 경우',
            '화면을 숨기는 것을 잊어서 모든 화면이 동시에 보이는 경우',
            '버튼에 id를 붙이지 않아서 JavaScript로 제어할 수 없는 경우'
          ],
          testCases: [
            { input: 'HTML 구조 확인', expectedOutput: 'start-screen, quiz-screen, result-screen 3개의 div 존재', description: '세 개의 주요 화면이 모두 있는지 확인' },
            { input: 'ID 확인', expectedOutput: 'start-btn, question, options, score, restart-btn 등의 ID 존재', description: 'JavaScript에서 사용할 주요 요소들에 ID가 있는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: 'div로 섹션 나누기',
              description: '<div> 태그로 header, main, footer 세 영역을 만드세요. 각각 id를 붙여주세요.',
              difficulty: 'easy',
              starterCode: '<body>\n  <!-- header, main, footer 영역을 만드세요 -->\n</body>',
              solution: '<body>\n  <div id=\"header\">\n    <h1>퀴즈 앱</h1>\n  </div>\n  <div id=\"main\">\n    <p>메인 콘텐츠</p>\n  </div>\n  <div id=\"footer\">\n    <p>만든이: 나</p>\n  </div>\n</body>',
              hints: ['div 태그로 영역을 구분해요', '각 div에 id를 붙여요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'HTML 구조를 완벽하게 나눴어요!', good: '영역 구분을 잘했어요!', partial: 'id가 빠진 div가 있어요.', wrong: '<div id=\"header\">, <div id=\"main\">, <div id=\"footer\"> 세 개를 만드세요.' }
            },
            {
              id: 'c2', title: '시작 화면 HTML 작성',
              description: '퀴즈 앱의 시작 화면을 만드세요. 제목(h1), 설명(p), 시작 버튼(button)을 포함해야 합니다.',
              difficulty: 'easy',
              starterCode: '<div id=\"start-screen\">\n  <!-- 제목, 설명, 시작 버튼을 추가하세요 -->\n</div>',
              solution: '<div id=\"start-screen\">\n  <h1>웹 개발 퀴즈</h1>\n  <p>HTML, CSS, JavaScript 지식을 테스트해보세요!</p>\n  <button id=\"start-btn\">시작하기</button>\n</div>',
              hints: ['h1, p, button 태그를 사용하세요', '버튼에는 id를 꼭 붙여주세요'],
              estimatedMinutes: 4,
              feedback: { perfect: '멋진 시작 화면이에요!', good: '필요한 요소를 잘 넣었어요!', partial: '요소가 빠졌어요.', wrong: 'h1, p, button 세 가지가 필요해요.' }
            },
            {
              id: 'c3', title: '퀴즈 화면 HTML 작성',
              description: '문제 화면을 만드세요. 진행도(div), 문제(h2), 선택지 영역(div)을 포함하세요.',
              difficulty: 'easy',
              starterCode: '<div id=\"quiz-screen\" style=\"display:none\">\n  <!-- 진행도, 문제, 선택지 영역을 추가하세요 -->\n</div>',
              solution: '<div id=\"quiz-screen\" style=\"display:none\">\n  <div id=\"progress\">문제 1/5</div>\n  <h2 id=\"question\">문제가 표시됩니다</h2>\n  <div id=\"options\"></div>\n</div>',
              hints: ['options div는 JavaScript가 버튼을 넣을 빈 공간이에요', 'style=\"display:none\"으로 처음에 숨겨요'],
              estimatedMinutes: 5,
              feedback: { perfect: '퀴즈 화면 구조가 완벽해요!', good: '잘 만들었어요!', partial: 'id가 빠진 요소가 있어요.', wrong: 'progress, question, options 세 가지 id가 필요해요.' }
            },
            {
              id: 'c4', title: 'style 속성으로 요소 숨기기',
              description: '세 개의 div 중 두 번째와 세 번째를 style 속성으로 숨기세요.',
              difficulty: 'medium',
              starterCode: '<div id=\"screen-1\">보이는 화면</div>\n<div id=\"screen-2\">숨길 화면</div>\n<div id=\"screen-3\">숨길 화면</div>',
              solution: '<div id=\"screen-1\">보이는 화면</div>\n<div id=\"screen-2\" style=\"display:none\">숨길 화면</div>\n<div id=\"screen-3\" style=\"display:none\">숨길 화면</div>',
              hints: ['style=\"display:none\"을 추가하면 숨겨져요', '첫 번째 화면만 보여야 해요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'display 속성을 완벽하게 이해했어요!', good: '요소 숨기기를 잘했어요!', partial: '하나만 숨겼어요.', wrong: 'screen-2와 screen-3에 style=\"display:none\"을 추가하세요.' }
            },
            {
              id: 'c5', title: '결과 화면 HTML 작성',
              description: '퀴즈 결과 화면을 만드세요. 축하 제목, 점수 텍스트, 다시하기 버튼을 포함하세요.',
              difficulty: 'medium',
              starterCode: '<div id=\"result-screen\" style=\"display:none\">\n  <!-- 결과 화면 내용을 추가하세요 -->\n</div>',
              solution: '<div id=\"result-screen\" style=\"display:none\">\n  <h1>퀴즈 완료!</h1>\n  <p id=\"score\">점수: 0/5</p>\n  <p id=\"result-message\">수고했어요!</p>\n  <button id=\"restart-btn\">다시 도전하기</button>\n</div>',
              hints: ['점수를 동적으로 바꿀 수 있도록 id를 붙여요', '다시하기 버튼도 id가 필요해요'],
              estimatedMinutes: 6,
              feedback: { perfect: '완벽한 결과 화면이에요!', good: '결과 화면을 잘 만들었어요!', partial: '점수 표시나 버튼이 빠졌어요.', wrong: '점수(id=\"score\"), 메시지, 다시하기 버튼(id=\"restart-btn\")이 필요해요.' }
            },
            {
              id: 'c6', title: '전체 HTML 뼈대 완성',
              description: '<!DOCTYPE html>부터 시작하여 head(title, meta charset)와 body를 포함하는 완전한 HTML 문서를 작성하세요.',
              difficulty: 'medium',
              starterCode: '<!-- 완전한 HTML 문서를 작성하세요 -->',
              solution: '<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <div id=\"app\">\n    <!-- 앱 내용 -->\n  </div>\n</body>\n</html>',
              hints: ['DOCTYPE 선언은 맨 위에 와야 해요', 'meta charset=\"UTF-8\"은 한글을 위해 필수예요', 'viewport meta는 모바일 대응을 위해 필요해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '프로 수준의 HTML 문서 구조예요!', good: '기본 구조를 잘 이해했어요!', partial: 'head에 필수 메타 태그가 빠졌어요.', wrong: 'DOCTYPE, html, head(meta charset, title), body가 모두 필요해요.' }
            },
            {
              id: 'c7', title: '시맨틱 태그 적용',
              description: 'div 대신 header, main, footer 시맨틱 태그를 사용하여 퀴즈 앱 구조를 개선하세요.',
              difficulty: 'hard',
              starterCode: '<div id=\"app\">\n  <div>퀴즈 앱</div>\n  <div>퀴즈 내용</div>\n  <div>푸터</div>\n</div>',
              solution: '<div id=\"app\">\n  <header>\n    <h1>퀴즈 앱</h1>\n    <nav id=\"progress\">문제 1/5</nav>\n  </header>\n  <main id=\"quiz-content\">\n    <section id=\"start-screen\">시작</section>\n    <section id=\"quiz-screen\">퀴즈</section>\n    <section id=\"result-screen\">결과</section>\n  </main>\n  <footer>\n    <p>만든이: 나</p>\n  </footer>\n</div>',
              hints: ['header, main, footer는 의미를 가진 태그예요', 'section으로 각 화면을 구분할 수 있어요'],
              estimatedMinutes: 10,
              feedback: { perfect: '시맨틱 HTML을 완벽하게 이해했어요!', good: '의미있는 태그를 잘 사용했어요!', partial: '일부 시맨틱 태그가 적절하지 않아요.', wrong: 'header, main, footer 태그로 구조를 나눠보세요.' }
            },
            {
              id: 'c8', title: '선택지 버튼 그룹 만들기',
              description: '4개의 선택지 버튼을 담는 div를 만드세요. 각 버튼에 class=\"option-btn\"과 data-index 속성을 추가하세요.',
              difficulty: 'hard',
              starterCode: '<div id=\"options\">\n  <!-- 4개의 선택지 버튼을 만드세요 -->\n</div>',
              solution: '<div id=\"options\">\n  <button class=\"option-btn\" data-index=\"0\">선택지 1</button>\n  <button class=\"option-btn\" data-index=\"1\">선택지 2</button>\n  <button class=\"option-btn\" data-index=\"2\">선택지 3</button>\n  <button class=\"option-btn\" data-index=\"3\">선택지 4</button>\n</div>',
              hints: ['data-* 속성으로 커스텀 데이터를 저장할 수 있어요', 'class로 같은 스타일을 적용해요'],
              estimatedMinutes: 8,
              feedback: { perfect: 'data 속성까지 완벽하게 활용했어요!', good: '버튼 그룹을 잘 만들었어요!', partial: 'data-index가 빠진 버튼이 있어요.', wrong: '각 button에 class=\"option-btn\"과 data-index를 추가하세요.' }
            },
            {
              id: 'c9', title: '접근성 고려한 HTML',
              description: '버튼에 aria-label, 이미지에 alt, 폼에 label을 추가하여 접근성을 개선하세요.',
              difficulty: 'hard',
              starterCode: '<button id=\"start-btn\">▶</button>\n<img src=\"quiz.png\">\n<input type=\"text\" id=\"name\">',
              solution: '<button id=\"start-btn\" aria-label=\"퀴즈 시작하기\">▶</button>\n<img src=\"quiz.png\" alt=\"퀴즈 앱 로고\">\n<label for=\"name\">이름:</label>\n<input type=\"text\" id=\"name\" placeholder=\"이름을 입력하세요\">',
              hints: ['aria-label은 스크린 리더가 읽어요', 'img에는 항상 alt 속성을 넣어요', 'input에는 label을 연결해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '접근성까지 고려한 프로 개발자예요!', good: '접근성을 잘 적용했어요!', partial: '일부 접근성 속성이 빠졌어요.', wrong: 'aria-label, alt, label for를 각각 추가하세요.' }
            },
            {
              id: 'c10', title: '퀴즈 앱 전체 HTML 통합',
              description: '시작/퀴즈/결과 세 화면, head 메타태그, script/style 링크를 모두 포함하는 완전한 HTML 파일을 작성하세요.',
              difficulty: 'hard',
              starterCode: '<!-- 완전한 퀴즈 앱 HTML을 작성하세요 -->',
              solution: '<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>퀴즈 앱</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <div id=\"app\">\n    <div id=\"start-screen\">\n      <h1>퀴즈에 도전하세요!</h1>\n      <p>5개의 문제에 답해보세요</p>\n      <button id=\"start-btn\">시작하기</button>\n    </div>\n    <div id=\"quiz-screen\" style=\"display:none\">\n      <div id=\"progress\">문제 1/5</div>\n      <h2 id=\"question\"></h2>\n      <div id=\"options\"></div>\n    </div>\n    <div id=\"result-screen\" style=\"display:none\">\n      <h1>퀴즈 완료!</h1>\n      <p id=\"score\"></p>\n      <button id=\"restart-btn\">다시 하기</button>\n    </div>\n  </div>\n  <script src=\"quiz.js\"></script>\n</body>\n</html>',
              hints: ['script 태그는 body 끝에 넣어요', 'CSS는 head에 link로 연결해요', '모든 화면에 필요한 id가 있는지 확인해요'],
              estimatedMinutes: 15,
              feedback: { perfect: '배포 가능한 완벽한 HTML이에요!', good: '전체 구조를 훌륭하게 완성했어요!', partial: '일부 요소나 연결이 빠졌어요.', wrong: 'head(메타, CSS링크), body(세 화면, script) 모두 필요해요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m3',
          title: 'CSS 스타일링',
          description: '퀴즈 앱을 예쁘게 꾸며요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'CSS 스타일',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'CSS를 사용하여 사용자 친화적인 인터페이스를 디자인할 수 있다',
            '호버 효과를 적용하여 인터랙티브한 버튼을 만들 수 있다'
          ],
          realWorldExample: '버튼에 마우스를 올리면 색이 바뀌는 것처럼, CSS로 멋진 인터랙션을 만들 수 있어요!',
          starterCode: '/* 퀴즈 앱 스타일을 작성하세요 */\n#app {\n  \n}',
          solution: '#app {\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 30px;\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\n\nbutton {\n  padding: 15px 30px;\n  font-size: 18px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n.option-btn {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  padding: 15px;\n  background-color: #f0f0f0;\n  color: #333;\n}\n\n.option-btn:hover {\n  background-color: #ddd;\n}',
          hints: [
            '💡 힌트 1: margin: 0 auto로 가운데 정렬해요',
            '💡 힌트 2: :hover로 마우스 올렸을 때 스타일이 바뀌어요',
            '💡 힌트 3: cursor: pointer로 손가락 모양이 나와요'
          ],
          commonMistakes: [
            'max-width 없이 만들어서 큰 화면에서 너무 넓어 보이는 경우',
            'hover 효과를 빠뜨려서 클릭 가능한 요소인지 알기 어려운 경우',
            '색상 대비가 약해서 텍스트가 잘 안 보이는 경우'
          ],
          testCases: [
            { input: '가운데 정렬', expectedOutput: 'margin: auto 또는 text-align: center 사용', description: '앱이 화면 가운데에 위치하는지 확인' },
            { input: '버튼 호버', expectedOutput: 'button:hover 스타일 존재', description: '버튼에 마우스를 올렸을 때 변화가 있는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: '앱 컨테이너 가운데 정렬',
              description: '#app을 화면 가운데에 배치하세요. max-width: 600px, margin: auto를 사용합니다.',
              difficulty: 'easy',
              starterCode: '#app {\n  /* 가운데 정렬 스타일을 작성하세요 */\n}',
              solution: '#app {\n  max-width: 600px;\n  margin: 40px auto;\n  padding: 20px;\n  text-align: center;\n}',
              hints: ['margin: auto는 좌우 마진을 자동으로 맞춰요', 'max-width는 최대 너비를 제한해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '가운데 정렬을 완벽하게 했어요!', good: '레이아웃을 잘 잡았어요!', partial: 'margin: auto가 빠졌어요.', wrong: 'max-width와 margin: auto를 함께 사용하세요.' }
            },
            {
              id: 'c2', title: '시작 버튼 스타일링',
              description: '시작 버튼을 초록색 배경, 흰색 글자, 둥근 모서리로 꾸미세요.',
              difficulty: 'easy',
              starterCode: '#start-btn {\n  /* 버튼 스타일을 작성하세요 */\n}',
              solution: '#start-btn {\n  padding: 15px 40px;\n  font-size: 20px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n}',
              hints: ['background-color로 배경색을 바꿔요', 'border-radius로 모서리를 둥글게 해요', 'cursor: pointer는 마우스 커서를 변경해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '멋진 버튼이에요!', good: '스타일을 잘 적용했어요!', partial: '일부 속성이 빠졌어요.', wrong: 'background-color, color, border-radius를 모두 설정하세요.' }
            },
            {
              id: 'c3', title: '호버 효과 추가',
              description: '버튼에 마우스를 올리면 배경색이 진해지고 그림자가 나타나게 하세요.',
              difficulty: 'easy',
              starterCode: 'button:hover {\n  /* 호버 스타일을 작성하세요 */\n}',
              solution: 'button:hover {\n  background-color: #45a049;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.2);\n  transform: translateY(-2px);\n}',
              hints: [':hover는 마우스를 올렸을 때 적용돼요', 'box-shadow로 그림자를 추가해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '인터랙티브한 버튼이에요!', good: '호버 효과를 잘 적용했어요!', partial: '호버 시 변화가 너무 적어요.', wrong: 'button:hover 안에 background-color 변경을 넣으세요.' }
            },
            {
              id: 'c4', title: '선택지 버튼 스타일',
              description: '.option-btn 클래스에 전체 너비, 여백, 밝은 회색 배경 스타일을 적용하세요.',
              difficulty: 'medium',
              starterCode: '.option-btn {\n  /* 선택지 버튼 스타일 */\n}\n\n.option-btn:hover {\n  /* 호버 스타일 */\n}',
              solution: '.option-btn {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  padding: 15px;\n  font-size: 16px;\n  background-color: #f0f0f0;\n  color: #333;\n  border: 2px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n\n.option-btn:hover {\n  background-color: #e0e0e0;\n  border-color: #4CAF50;\n}',
              hints: ['width: 100%로 전체 너비를 차지해요', 'transition으로 부드러운 변화를 만들어요'],
              estimatedMinutes: 7,
              feedback: { perfect: '프로 수준의 버튼 스타일이에요!', good: '선택지 버튼을 잘 꾸몄어요!', partial: '호버 효과나 transition이 빠졌어요.', wrong: 'display: block, width: 100%로 전체 너비 버튼을 만드세요.' }
            },
            {
              id: 'c5', title: '정답/오답 시각적 피드백',
              description: '.correct 클래스는 초록색, .wrong 클래스는 빨간색 배경으로 스타일링하세요.',
              difficulty: 'medium',
              starterCode: '/* 정답/오답 피드백 스타일 */\n.correct {\n  \n}\n.wrong {\n  \n}',
              solution: '.correct {\n  background-color: #4CAF50 !important;\n  color: white !important;\n  border-color: #388E3C !important;\n}\n\n.wrong {\n  background-color: #f44336 !important;\n  color: white !important;\n  border-color: #d32f2f !important;\n}',
              hints: ['!important로 기존 스타일을 덮어써요', '초록은 정답, 빨강은 오답을 의미해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '시각적 피드백이 완벽해요!', good: '색상 구분을 잘했어요!', partial: '색상이 충분히 눈에 띄지 않아요.', wrong: '초록(#4CAF50)은 정답, 빨강(#f44336)은 오답에 사용하세요.' }
            },
            {
              id: 'c6', title: '프로그레스 바 CSS',
              description: '진행률을 보여주는 프로그레스 바를 CSS로 만드세요. 배경, 높이, 색상, 애니메이션을 포함하세요.',
              difficulty: 'medium',
              starterCode: '#progress-bar-bg {\n  /* 프로그레스 바 배경 */\n}\n#progress-bar {\n  /* 프로그레스 바 채움 */\n}',
              solution: '#progress-bar-bg {\n  width: 100%;\n  height: 10px;\n  background-color: #e0e0e0;\n  border-radius: 5px;\n  margin-bottom: 20px;\n}\n\n#progress-bar {\n  height: 100%;\n  background-color: #4CAF50;\n  border-radius: 5px;\n  transition: width 0.5s ease;\n}',
              hints: ['배경 바 안에 채움 바를 넣어요', 'transition으로 부드럽게 늘어나요', 'border-radius로 둥글게 만들어요'],
              estimatedMinutes: 8,
              feedback: { perfect: '프로 수준의 프로그레스 바예요!', good: '진행률 표시를 잘 만들었어요!', partial: 'transition이 빠져서 변화가 딱딱해요.', wrong: '배경(#e0e0e0)과 채움(#4CAF50) 두 div를 중첩하세요.' }
            },
            {
              id: 'c7', title: '결과 화면 CSS',
              description: '결과 화면에 큰 점수 텍스트, 결과 메시지, 그라데이션 배경을 적용하세요.',
              difficulty: 'hard',
              starterCode: '#result-screen {\n  /* 결과 화면 스타일 */\n}\n#score {\n  /* 점수 스타일 */\n}',
              solution: '#result-screen {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 40px;\n  border-radius: 20px;\n}\n\n#score {\n  font-size: 48px;\n  font-weight: bold;\n  margin: 20px 0;\n}\n\n#result-message {\n  font-size: 20px;\n  opacity: 0.9;\n}',
              hints: ['linear-gradient로 그라데이션 배경을 만들어요', '큰 폰트 사이즈로 점수를 강조해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '눈에 띄는 멋진 결과 화면이에요!', good: '결과 화면을 잘 꾸몄어요!', partial: '그라데이션이나 폰트 크기 조절이 부족해요.', wrong: 'background: linear-gradient()로 그라데이션을 적용하세요.' }
            },
            {
              id: 'c8', title: '카드 스타일 디자인',
              description: '문제 영역을 카드 스타일로 꾸미세요. 그림자, 둥근 모서리, 패딩을 포함합니다.',
              difficulty: 'hard',
              starterCode: '.quiz-card {\n  /* 카드 스타일을 작성하세요 */\n}',
              solution: '.quiz-card {\n  background: white;\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n  margin: 20px 0;\n  transition: transform 0.3s;\n}\n\n.quiz-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0,0,0,0.15);\n}',
              hints: ['box-shadow로 그림자를 추가해요', 'border-radius로 모서리를 둥글게 해요', 'transition으로 호버 시 부드럽게 올라가요'],
              estimatedMinutes: 10,
              feedback: { perfect: '프로 디자이너 수준의 카드예요!', good: '카드 스타일을 잘 만들었어요!', partial: '그림자나 호버 효과가 빠졌어요.', wrong: 'box-shadow, border-radius, padding을 모두 적용하세요.' }
            },
            {
              id: 'c9', title: '모바일 반응형 CSS',
              description: '@media 쿼리로 480px 이하에서 패딩 줄이기, 버튼 전체 너비, 폰트 크기 조정을 하세요.',
              difficulty: 'hard',
              starterCode: '/* 데스크톱 스타일은 이미 있다고 가정 */\n\n@media (max-width: 480px) {\n  /* 모바일 스타일을 작성하세요 */\n}',
              solution: '@media (max-width: 480px) {\n  #app {\n    margin: 10px;\n    padding: 15px;\n  }\n  h1 {\n    font-size: 24px;\n  }\n  button {\n    width: 100%;\n    padding: 15px;\n    font-size: 18px;\n  }\n  .option-btn {\n    padding: 12px;\n    font-size: 14px;\n  }\n  #score {\n    font-size: 36px;\n  }\n}',
              hints: ['@media (max-width: 480px) 안에 모바일 스타일을 넣어요', '모바일에서는 버튼을 더 크게 만들어요', '패딩과 마진을 줄여서 공간을 확보해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '완벽한 반응형 디자인이에요!', good: '모바일 대응을 잘했어요!', partial: '일부 요소의 모바일 스타일이 빠졌어요.', wrong: '@media 안에 #app, button, .option-btn의 모바일 스타일을 넣으세요.' }
            },
            {
              id: 'c10', title: 'CSS 애니메이션 추가',
              description: '@keyframes로 결과 화면 등장 시 페이드인+슬라이드업 애니메이션을 만드세요.',
              difficulty: 'hard',
              starterCode: '/* 페이드인 슬라이드업 애니메이션을 만드세요 */\n@keyframes fadeInUp {\n  \n}\n\n.animate-in {\n  \n}',
              solution: '@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.animate-in {\n  animation: fadeInUp 0.5s ease forwards;\n}',
              hints: ['from에서 to로 변하는 과정을 정의해요', 'opacity로 투명도를, transform으로 위치를 바꿔요', 'animation 속성으로 적용해요'],
              estimatedMinutes: 12,
              feedback: { perfect: 'CSS 애니메이션 마스터예요!', good: '애니메이션을 잘 만들었어요!', partial: 'from/to 중 하나가 잘못됐어요.', wrong: '@keyframes 안에 from(opacity:0)과 to(opacity:1)를 정의하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m4',
          title: '퀴즈 데이터 구조',
          description: 'JavaScript로 퀴즈 문제를 저장해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '데이터 구조',
          cstaStandard: '2-AP-14',
          learningObjectives: [
            '배열과 객체를 활용하여 복잡한 데이터를 구조화할 수 있다',
            '프로그램에 필요한 데이터 형식을 설계할 수 있다'
          ],
          realWorldExample: '퀴즈 문제집처럼 각 문제를 객체로 만들고, 모든 문제를 배열에 담아요.',
          starterCode: '// 퀴즈 문제 배열을 만드세요\nconst quizData = [\n  // 문제 객체들\n];',
          solution: 'const quizData = [\n  {\n    question: \"HTML은 무엇의 약자인가요?\",\n    options: [\"Hyper Text Markup Language\", \"High Tech Modern Language\", \"Hyper Transfer Markup Language\", \"Home Tool Markup Language\"],\n    correct: 0\n  },\n  {\n    question: \"CSS에서 id 선택자 기호는?\",\n    options: [\".\", \"#\", \"@\", \"*\"],\n    correct: 1\n  },\n  {\n    question: \"JavaScript 변수 선언 키워드가 아닌 것은?\",\n    options: [\"let\", \"const\", \"var\", \"int\"],\n    correct: 3\n  }\n];',
          hints: [
            '💡 힌트 1: 각 문제는 question, options, correct 속성을 가진 객체예요',
            '💡 힌트 2: options는 배열로, 여러 선택지를 저장해요',
            '💡 힌트 3: correct는 정답의 인덱스 번호예요 (0부터 시작!)'
          ],
          commonMistakes: [
            'correct를 문자열로 저장하는 경우',
            '객체 속성 이름을 일관성 없이 사용하는 경우',
            '배열에 쉼표를 빠뜨리는 경우'
          ],
          testCases: [
            { input: 'quizData.length', expectedOutput: '3 이상', description: '최소 3개 이상의 문제가 있는지 확인' },
            { input: 'quizData[0].question', expectedOutput: '문자열', description: '각 문제에 질문이 있는지 확인' },
            { input: 'quizData[0].options.length', expectedOutput: '4', description: '각 문제에 4개의 선택지가 있는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: '문제 객체 1개 만들기',
              description: 'question, options(4개), correct 속성을 가진 퀴즈 문제 객체 1개를 만드세요.',
              difficulty: 'easy',
              starterCode: 'const q1 = {\n  // 속성을 추가하세요\n};',
              solution: 'const q1 = {\n  question: \"1 + 1은?\",\n  options: [\"1\", \"2\", \"3\", \"4\"],\n  correct: 1\n};',
              hints: ['question은 문자열이에요', 'options는 배열이에요'],
              estimatedMinutes: 3,
              feedback: { perfect: '객체 구조를 완벽하게 이해했어요!', good: '잘 만들었어요!', partial: '속성이 빠졌어요.', wrong: 'question, options, correct 세 속성이 필요해요.' }
            },
            {
              id: 'c2', title: '문제 배열에 추가하기',
              description: '빈 배열에 push()로 문제 객체 2개를 추가하세요.',
              difficulty: 'easy',
              starterCode: 'const quizData = [];\n// push로 문제 2개를 추가하세요\n',
              solution: 'const quizData = [];\nquizData.push({\n  question: \"HTML 태그를 여는 기호는?\",\n  options: [\"<\", \">\", \"/\", \"#\"],\n  correct: 0\n});\nquizData.push({\n  question: \"CSS는 무엇의 약자?\",\n  options: [\"Cascading Style Sheets\", \"Computer Style System\", \"Creative Style Sheets\", \"Colorful Style Scripts\"],\n  correct: 0\n});',
              hints: ['push()로 배열에 요소를 추가해요', '객체를 직접 push 안에 넣을 수 있어요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'push를 완벽하게 활용했어요!', good: '배열 조작을 잘했어요!', partial: '문제가 1개만 추가됐어요.', wrong: 'quizData.push({question: ..., options: [...], correct: N})으로 추가하세요.' }
            },
            {
              id: 'c3', title: '문제 데이터 접근하기',
              description: 'quizData[0]의 question과 options[2]를 각각 변수에 저장하세요.',
              difficulty: 'easy',
              starterCode: 'const quizData = [{question: \"수도는?\", options: [\"부산\", \"인천\", \"서울\", \"대구\"], correct: 2}];\n// 문제 텍스트와 세 번째 선택지를 변수에 저장하세요\n',
              solution: 'const quizData = [{question: \"수도는?\", options: [\"부산\", \"인천\", \"서울\", \"대구\"], correct: 2}];\nconst questionText = quizData[0].question;\nconst thirdOption = quizData[0].options[2];',
              hints: ['배열[인덱스].속성으로 접근해요', '옵션 배열도 인덱스로 접근해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '데이터 접근을 완벽하게 이해했어요!', good: '잘 접근했어요!', partial: '접근 방법이 일부 틀렸어요.', wrong: 'quizData[0].question, quizData[0].options[2]로 접근하세요.' }
            },
            {
              id: 'c4', title: '정답 확인 함수',
              description: '선택한 인덱스가 정답인지 확인하는 함수를 작성하세요.',
              difficulty: 'medium',
              starterCode: 'const quizData = [{question: \"1+1?\", options: [\"1\",\"2\",\"3\",\"4\"], correct: 1}];\n\nfunction checkAnswer(questionIndex, selectedIndex) {\n  // 정답이면 true, 오답이면 false 반환\n}',
              solution: 'const quizData = [{question: \"1+1?\", options: [\"1\",\"2\",\"3\",\"4\"], correct: 1}];\n\nfunction checkAnswer(questionIndex, selectedIndex) {\n  return quizData[questionIndex].correct === selectedIndex;\n}',
              hints: ['quizData[questionIndex].correct로 정답을 가져와요', '===로 비교해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '정답 확인 로직이 완벽해요!', good: '잘 만들었어요!', partial: '비교 연산이 잘못됐어요.', wrong: 'quizData[questionIndex].correct === selectedIndex를 반환하세요.' }
            },
            {
              id: 'c5', title: '5개 문제 배열 완성',
              description: '웹 개발 관련 퀴즈 문제 5개를 배열로 만드세요. 각 문제의 정답 인덱스가 모두 달라야 합니다.',
              difficulty: 'medium',
              starterCode: 'const quizData = [\n  // 5개의 웹 개발 문제를 만드세요\n];',
              solution: 'const quizData = [\n  {question: \"<p>의 의미는?\", options: [\"picture\", \"paragraph\", \"page\", \"point\"], correct: 1},\n  {question: \"CSS 클래스 선택자는?\", options: [\"#\", \".\", \"@\", \"&\"], correct: 1},\n  {question: \"JS에서 콘솔 출력은?\", options: [\"print()\", \"echo()\", \"console.log()\", \"write()\"], correct: 2},\n  {question: \"배열 길이 속성은?\", options: [\"size\", \"count\", \"num\", \"length\"], correct: 3},\n  {question: \"HTML 주석은?\", options: [\"// 주석\", \"/* 주석 */\", \"<!-- 주석 -->\", \"# 주석\"], correct: 2}\n];',
              hints: ['5개 문제를 모두 채워야 해요', '정답 인덱스(correct)를 다양하게 섞으세요'],
              estimatedMinutes: 10,
              feedback: { perfect: '풍부한 퀴즈 데이터예요!', good: '5개 문제를 잘 만들었어요!', partial: '문제 수가 부족하거나 구조가 틀렸어요.', wrong: '각 문제에 question, options(4개), correct가 필요해요.' }
            },
            {
              id: 'c6', title: '랜덤 문제 순서',
              description: 'Fisher-Yates 알고리즘으로 quizData 배열을 섞는 shuffle 함수를 작성하세요.',
              difficulty: 'medium',
              starterCode: 'function shuffleArray(arr) {\n  // 배열을 랜덤으로 섞으세요\n  return arr;\n}',
              solution: 'function shuffleArray(arr) {\n  for (let i = arr.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}',
              hints: ['뒤에서부터 랜덤 위치와 교환해요', 'Math.random()으로 랜덤 인덱스를 만들어요', '구조분해로 값을 교환할 수 있어요'],
              estimatedMinutes: 10,
              feedback: { perfect: '셔플 알고리즘을 완벽하게 구현했어요!', good: '배열 섞기를 잘했어요!', partial: '로직에 오류가 있어요.', wrong: 'for 루프로 뒤에서부터 랜덤 위치와 교환하세요.' }
            },
            {
              id: 'c7', title: '난이도별 문제 분류',
              description: '문제 객체에 difficulty 속성을 추가하고, filter로 easy 문제만 가져오세요.',
              difficulty: 'hard',
              starterCode: 'const quizData = [\n  {question: \"1+1?\", options: [\"1\",\"2\",\"3\",\"4\"], correct: 1, difficulty: \"easy\"},\n  {question: \"피보나치?\", options: [\"1\",\"2\",\"3\",\"5\"], correct: 3, difficulty: \"hard\"}\n];\n// easy 문제만 필터링하세요\n',
              solution: 'const quizData = [\n  {question: \"1+1?\", options: [\"1\",\"2\",\"3\",\"4\"], correct: 1, difficulty: \"easy\"},\n  {question: \"피보나치?\", options: [\"1\",\"2\",\"3\",\"5\"], correct: 3, difficulty: \"hard\"}\n];\nconst easyQuestions = quizData.filter(q => q.difficulty === \"easy\");',
              hints: ['filter()는 조건에 맞는 요소만 새 배열로 만들어요', '화살표 함수로 간결하게 작성해요'],
              estimatedMinutes: 8,
              feedback: { perfect: 'filter를 완벽하게 활용했어요!', good: '필터링을 잘했어요!', partial: 'filter 조건이 잘못됐어요.', wrong: 'quizData.filter(q => q.difficulty === \"easy\")를 사용하세요.' }
            },
            {
              id: 'c8', title: '점수 계산 객체',
              description: '점수, 정답 수, 오답 수, 정답률을 관리하는 scoreData 객체와 업데이트 함수를 만드세요.',
              difficulty: 'hard',
              starterCode: 'const scoreData = {\n  // 점수 관련 속성들\n};\n\nfunction updateScore(isCorrect) {\n  // 정답이면 점수 증가, 오답이면 오답 수 증가\n}',
              solution: 'const scoreData = {\n  score: 0,\n  correct: 0,\n  wrong: 0,\n  total: 5,\n  getPercentage() {\n    return Math.round((this.correct / this.total) * 100);\n  }\n};\n\nfunction updateScore(isCorrect) {\n  if (isCorrect) {\n    scoreData.score += 10;\n    scoreData.correct++;\n  } else {\n    scoreData.wrong++;\n  }\n}',
              hints: ['메서드로 정답률을 계산해요', 'this로 객체 자신의 속성에 접근해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '체계적인 점수 관리 시스템이에요!', good: '점수 객체를 잘 만들었어요!', partial: '메서드나 업데이트 로직이 부족해요.', wrong: 'score, correct, wrong 속성과 updateScore 함수가 필요해요.' }
            },
            {
              id: 'c9', title: '타이머 데이터 구조',
              description: '문제당 30초 제한시간을 관리하는 타이머 객체를 만드세요. start, stop, reset 메서드를 포함하세요.',
              difficulty: 'hard',
              starterCode: 'const timer = {\n  timeLeft: 30,\n  timerId: null,\n  // start, stop, reset 메서드를 추가하세요\n};',
              solution: 'const timer = {\n  timeLeft: 30,\n  timerId: null,\n  start() {\n    this.timerId = setInterval(() => {\n      this.timeLeft--;\n      if (this.timeLeft <= 0) {\n        this.stop();\n        nextQuestion();\n      }\n    }, 1000);\n  },\n  stop() {\n    clearInterval(this.timerId);\n  },\n  reset() {\n    this.stop();\n    this.timeLeft = 30;\n  }\n};',
              hints: ['setInterval로 1초마다 감소시켜요', 'clearInterval로 타이머를 멈춰요'],
              estimatedMinutes: 12,
              feedback: { perfect: '타이머 시스템을 완벽하게 구현했어요!', good: '타이머 로직을 잘 만들었어요!', partial: 'start나 stop이 불완전해요.', wrong: 'setInterval과 clearInterval을 사용하세요.' }
            },
            {
              id: 'c10', title: '완성된 퀴즈 데이터 모듈',
              description: '문제 배열, 점수 객체, 타이머, 설정을 모두 포함하는 종합 게임 상태 객체를 만드세요.',
              difficulty: 'hard',
              starterCode: 'const gameState = {\n  // 전체 게임 상태를 관리하세요\n};',
              solution: 'const gameState = {\n  questions: [],\n  currentIndex: 0,\n  score: 0,\n  totalCorrect: 0,\n  isPlaying: false,\n  settings: {\n    timeLimit: 30,\n    totalQuestions: 5,\n    shuffleQuestions: true\n  },\n  start() {\n    this.currentIndex = 0;\n    this.score = 0;\n    this.totalCorrect = 0;\n    this.isPlaying = true;\n  },\n  getCurrentQuestion() {\n    return this.questions[this.currentIndex];\n  },\n  nextQuestion() {\n    this.currentIndex++;\n    return this.currentIndex < this.questions.length;\n  }\n};',
              hints: ['게임에 필요한 모든 데이터를 하나로 모아요', '메서드로 상태를 변경해요', 'settings로 설정을 분리해요'],
              estimatedMinutes: 15,
              feedback: { perfect: '프로 수준의 상태 관리예요!', good: '게임 상태를 잘 구조화했어요!', partial: '일부 메서드나 속성이 부족해요.', wrong: 'questions, score, settings, 메서드들을 모두 포함하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m5',
          title: '화면 전환 기능',
          description: '시작 -> 퀴즈 -> 결과 화면 전환을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '화면 전환',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'DOM 조작을 통해 동적으로 화면을 전환할 수 있다',
            '이벤트 리스너를 사용하여 사용자 입력에 반응할 수 있다'
          ],
          realWorldExample: 'TV 채널을 바꾸는 것처럼, 버튼을 누르면 다른 화면으로 전환돼요!',
          starterCode: '// 화면 전환 함수를 만드세요\nfunction showScreen(screenId) {\n  // 모든 화면 숨기고, 해당 화면만 표시\n}',
          solution: 'function showScreen(screenId) {\n  document.getElementById(\"start-screen\").style.display = \"none\";\n  document.getElementById(\"quiz-screen\").style.display = \"none\";\n  document.getElementById(\"result-screen\").style.display = \"none\";\n  document.getElementById(screenId).style.display = \"block\";\n}\n\ndocument.getElementById(\"start-btn\").addEventListener(\"click\", () => {\n  showScreen(\"quiz-screen\");\n  showQuestion();\n});',
          hints: [
            '💡 힌트 1: 먼저 모든 화면을 display: none으로 숨겨요',
            '💡 힌트 2: 원하는 화면만 display: block으로 보여요',
            '💡 힌트 3: addEventListener로 버튼 클릭을 감지해요'
          ],
          commonMistakes: [
            '하나의 화면만 숨기고 다른 화면을 안 숨기는 경우',
            'getElementById의 ID 이름을 잘못 입력하는 경우',
            '이벤트 리스너를 추가하지 않는 경우'
          ],
          testCases: [
            { input: '시작 버튼 클릭', expectedOutput: 'quiz-screen 표시, 나머지 화면 숨김', description: '시작 버튼을 누르면 퀴즈 화면만 보이는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: 'getElementById 연습',
              description: 'document.getElementById로 \"title\" 요소를 가져와서 텍스트를 변경하세요.',
              difficulty: 'easy',
              starterCode: '// id가 \"title\"인 요소의 텍스트를 \"퀴즈 시작!\"으로 바꾸세요\n',
              solution: 'document.getElementById(\"title\").textContent = \"퀴즈 시작!\";',
              hints: ['getElementById로 요소를 가져와요', '.textContent로 텍스트를 바꿔요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'DOM 접근을 완벽하게 했어요!', good: '잘했어요!', partial: 'textContent 대신 다른 속성을 사용했어요.', wrong: 'document.getElementById(\"title\").textContent = \"새 텍스트\"를 사용하세요.' }
            },
            {
              id: 'c2', title: 'display 속성 변경',
              description: 'JavaScript로 \"box\" 요소의 display를 none으로 바꿔서 숨기세요.',
              difficulty: 'easy',
              starterCode: '// id가 \"box\"인 요소를 숨기세요\n',
              solution: 'document.getElementById(\"box\").style.display = \"none\";',
              hints: ['.style.display로 CSS display를 바꿔요', '\"none\"으로 설정하면 숨겨져요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'display 제어를 완벽하게 이해했어요!', good: '잘 숨겼어요!', partial: '속성 접근이 잘못됐어요.', wrong: '.style.display = \"none\"으로 숨기세요.' }
            },
            {
              id: 'c3', title: '클릭 이벤트 연결',
              description: '\"btn\" 버튼을 클릭하면 alert(\"클릭!\")이 실행되도록 이벤트 리스너를 추가하세요.',
              difficulty: 'easy',
              starterCode: '// btn 버튼에 클릭 이벤트를 추가하세요\n',
              solution: 'document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  alert(\"클릭!\");\n});',
              hints: ['addEventListener(\"click\", 함수)를 사용해요', '함수 안에 실행할 코드를 넣어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '이벤트 리스너를 완벽하게 추가했어요!', good: '잘 연결했어요!', partial: '이벤트 타입이 잘못됐어요.', wrong: 'addEventListener(\"click\", function() {...})를 사용하세요.' }
            },
            {
              id: 'c4', title: '두 화면 전환하기',
              description: 'screen-a를 숨기고 screen-b를 보여주는 함수를 작성하세요.',
              difficulty: 'medium',
              starterCode: 'function switchToB() {\n  // screen-a 숨기고 screen-b 보여주기\n}',
              solution: 'function switchToB() {\n  document.getElementById(\"screen-a\").style.display = \"none\";\n  document.getElementById(\"screen-b\").style.display = \"block\";\n}',
              hints: ['먼저 하나를 숨기고 다른 하나를 보여요', 'display: \"block\"으로 보여요'],
              estimatedMinutes: 5,
              feedback: { perfect: '화면 전환을 완벽하게 구현했어요!', good: '잘 전환했어요!', partial: '하나만 처리했어요.', wrong: 'screen-a는 none, screen-b는 block으로 설정하세요.' }
            },
            {
              id: 'c5', title: '범용 화면 전환 함수',
              description: '화면 ID를 매개변수로 받아서 해당 화면만 보여주는 showScreen 함수를 완성하세요.',
              difficulty: 'medium',
              starterCode: 'const screens = [\"start-screen\", \"quiz-screen\", \"result-screen\"];\n\nfunction showScreen(screenId) {\n  // 모든 화면을 숨기고 screenId만 보여주세요\n}',
              solution: 'const screens = [\"start-screen\", \"quiz-screen\", \"result-screen\"];\n\nfunction showScreen(screenId) {\n  screens.forEach(id => {\n    document.getElementById(id).style.display = \"none\";\n  });\n  document.getElementById(screenId).style.display = \"block\";\n}',
              hints: ['forEach로 모든 화면을 순회해요', '매개변수 screenId만 block으로 설정해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '범용 함수를 훌륭하게 만들었어요!', good: '반복문을 잘 활용했어요!', partial: '일부 화면이 숨겨지지 않아요.', wrong: 'forEach로 모든 화면을 none으로 하고, screenId만 block으로 하세요.' }
            },
            {
              id: 'c6', title: '버튼 3개 이벤트 연결',
              description: 'start-btn, restart-btn, home-btn 세 버튼에 각각 다른 화면으로 전환하는 이벤트를 연결하세요.',
              difficulty: 'medium',
              starterCode: '// 세 버튼에 이벤트 리스너를 추가하세요\n',
              solution: 'document.getElementById(\"start-btn\").addEventListener(\"click\", () => {\n  showScreen(\"quiz-screen\");\n});\n\ndocument.getElementById(\"restart-btn\").addEventListener(\"click\", () => {\n  showScreen(\"quiz-screen\");\n});\n\ndocument.getElementById(\"home-btn\").addEventListener(\"click\", () => {\n  showScreen(\"start-screen\");\n});',
              hints: ['각 버튼마다 addEventListener를 추가해요', '화살표 함수 () => {}를 사용하면 간결해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '모든 이벤트를 완벽하게 연결했어요!', good: '이벤트 연결을 잘했어요!', partial: '일부 버튼의 이벤트가 빠졌어요.', wrong: '세 버튼 모두 addEventListener(\"click\", ...)를 추가하세요.' }
            },
            {
              id: 'c7', title: '전환 시 콜백 실행',
              description: 'showScreen 함수에 콜백 매개변수를 추가하여 화면 전환 후 추가 작업을 실행하세요.',
              difficulty: 'hard',
              starterCode: 'function showScreen(screenId, callback) {\n  // 화면 전환 + 콜백 실행\n}',
              solution: 'function showScreen(screenId, callback) {\n  const screens = [\"start-screen\", \"quiz-screen\", \"result-screen\"];\n  screens.forEach(id => {\n    document.getElementById(id).style.display = \"none\";\n  });\n  document.getElementById(screenId).style.display = \"block\";\n  if (callback) callback();\n}\n\n// 사용 예:\n// showScreen(\"quiz-screen\", () => showQuestion());',
              hints: ['callback이 있을 때만 실행해요', 'if (callback) callback()으로 안전하게 호출해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '콜백 패턴을 완벽하게 이해했어요!', good: '콜백을 잘 활용했어요!', partial: 'callback 호출이 빠졌어요.', wrong: 'if (callback) callback()을 화면 전환 후에 추가하세요.' }
            },
            {
              id: 'c8', title: '전환 애니메이션 구현',
              description: '화면 전환 시 classList를 사용하여 fade-in 애니메이션을 적용하세요.',
              difficulty: 'hard',
              starterCode: '// 화면 전환 시 fade-in 클래스를 추가/제거하세요\nfunction showScreenAnimated(screenId) {\n  \n}',
              solution: 'function showScreenAnimated(screenId) {\n  const screens = [\"start-screen\", \"quiz-screen\", \"result-screen\"];\n  screens.forEach(id => {\n    const el = document.getElementById(id);\n    el.style.display = \"none\";\n    el.classList.remove(\"fade-in\");\n  });\n  const target = document.getElementById(screenId);\n  target.style.display = \"block\";\n  target.classList.add(\"fade-in\");\n}',
              hints: ['classList.add()로 클래스를 추가해요', 'classList.remove()로 제거해요', '전환 전에 이전 애니메이션을 제거해야 해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '부드러운 화면 전환이에요!', good: 'classList를 잘 활용했어요!', partial: '이전 화면의 클래스 제거가 빠졌어요.', wrong: 'classList.add(\"fade-in\")과 classList.remove(\"fade-in\")을 사용하세요.' }
            },
            {
              id: 'c9', title: '키보드 네비게이션',
              description: '숫자 키 1-4를 누르면 해당 선택지를 선택하고, Enter를 누르면 다음으로 넘어가는 기능을 만드세요.',
              difficulty: 'hard',
              starterCode: '// 키보드 이벤트를 추가하세요\ndocument.addEventListener(\"keydown\", function(e) {\n  \n});',
              solution: 'document.addEventListener(\"keydown\", function(e) {\n  if (e.key >= \"1\" && e.key <= \"4\") {\n    const index = parseInt(e.key) - 1;\n    selectAnswer(index);\n  }\n  if (e.key === \"Enter\") {\n    nextQuestion();\n  }\n});',
              hints: ['e.key로 눌린 키를 확인해요', '\"1\"~\"4\"를 인덱스 0~3으로 변환해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '키보드 접근성까지 완벽해요!', good: '키보드 이벤트를 잘 처리했어요!', partial: 'Enter 키 처리가 빠졌어요.', wrong: 'e.key를 확인하여 \"1\"~\"4\"와 \"Enter\"를 처리하세요.' }
            },
            {
              id: 'c10', title: '완전한 화면 전환 시스템',
              description: '시작/퀴즈/결과 전환, 이벤트 연결, 애니메이션, 키보드 지원을 모두 포함하는 전환 시스템을 완성하세요.',
              difficulty: 'hard',
              starterCode: '// 완전한 화면 전환 시스템을 구현하세요\n',
              solution: 'const screens = [\"start-screen\", \"quiz-screen\", \"result-screen\"];\n\nfunction showScreen(screenId) {\n  screens.forEach(id => {\n    const el = document.getElementById(id);\n    el.style.display = \"none\";\n    el.classList.remove(\"fade-in\");\n  });\n  const target = document.getElementById(screenId);\n  target.style.display = \"block\";\n  target.classList.add(\"fade-in\");\n}\n\ndocument.getElementById(\"start-btn\").addEventListener(\"click\", () => {\n  showScreen(\"quiz-screen\");\n  showQuestion();\n});\n\ndocument.getElementById(\"restart-btn\").addEventListener(\"click\", () => {\n  currentQuestion = 0;\n  score = 0;\n  showScreen(\"start-screen\");\n});',
              hints: ['모든 버튼에 이벤트를 연결해요', 'showScreen 함수를 재사용해요', '다시하기 시 변수도 초기화해요'],
              estimatedMinutes: 15,
              feedback: { perfect: '완벽한 전환 시스템이에요!', good: '전체 시스템을 잘 구현했어요!', partial: '일부 이벤트 연결이 빠졌어요.', wrong: 'showScreen 함수, 3개 이벤트 리스너, 초기화 로직이 필요해요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m6',
          title: '문제 표시 기능',
          description: '현재 문제를 화면에 표시해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 20,
          concept: '동적 UI',
          cstaStandard: '2-AP-15',
          learningObjectives: [
            'JavaScript로 HTML 요소를 동적으로 생성하고 추가할 수 있다',
            'forEach를 사용하여 반복 작업을 수행할 수 있다'
          ],
          realWorldExample: '유튜브 댓글처럼 데이터를 하나씩 읽으면서 화면에 표시해요!',
          starterCode: 'let currentQuestion = 0;\n\nfunction showQuestion() {\n  // 현재 문제를 화면에 표시\n}',
          solution: 'let currentQuestion = 0;\nlet score = 0;\n\nfunction showQuestion() {\n  const quiz = quizData[currentQuestion];\n  document.getElementById("progress").textContent = `문제 ${currentQuestion + 1}/${quizData.length}`;\n  document.getElementById("question").textContent = quiz.question;\n  const optionsDiv = document.getElementById("options");\n  optionsDiv.innerHTML = "";\n  quiz.options.forEach((option, index) => {\n    const btn = document.createElement("button");\n    btn.className = "option-btn";\n    btn.textContent = option;\n    btn.addEventListener("click", () => selectAnswer(index));\n    optionsDiv.appendChild(btn);\n  });\n}',
          hints: [
            '💡 힌트 1: quizData[currentQuestion]으로 현재 문제를 가져와요',
            '💡 힌트 2: innerHTML = ""으로 이전 선택지를 지워요',
            '💡 힌트 3: forEach로 각 선택지마다 버튼을 만들어요'
          ],
          commonMistakes: [
            '이전 선택지를 지우지 않아서 버튼이 계속 쌓이는 경우',
            'createElement를 잊고 HTML 문자열로만 만들려는 경우'
          ],
          testCases: [
            { input: 'showQuestion() 호출', expectedOutput: '질문 텍스트와 4개의 선택지 버튼 표시', description: '문제와 선택지가 올바르게 나타나는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: 'textContent로 텍스트 변경',
              description: 'getElementById와 textContent를 사용하여 "question" 요소의 텍스트를 변경하세요.',
              difficulty: 'easy',
              starterCode: '// question 요소의 텍스트를 "첫 번째 문제입니다"로 바꾸세요\n',
              solution: 'document.getElementById("question").textContent = "첫 번째 문제입니다";',
              hints: ['getElementById로 요소를 찾고 .textContent를 설정해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'DOM 텍스트 변경을 완벽하게 했어요!', good: '잘했어요!', partial: '속성 이름이 틀렸어요.', wrong: '.textContent = "텍스트"를 사용하세요.' }
            },
            {
              id: 'c2', title: 'createElement로 버튼 만들기',
              description: 'document.createElement로 버튼을 만들고 textContent를 설정한 뒤 body에 추가하세요.',
              difficulty: 'easy',
              starterCode: '// 버튼을 만들어서 body에 추가하세요\n',
              solution: 'const btn = document.createElement("button");\nbtn.textContent = "클릭하세요";\nbtn.className = "option-btn";\ndocument.body.appendChild(btn);',
              hints: ['createElement("button")으로 만들어요', 'appendChild로 추가해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '요소 생성을 완벽하게 이해했어요!', good: '잘 만들었어요!', partial: 'appendChild가 빠졌어요.', wrong: 'createElement → textContent 설정 → appendChild 순서예요.' }
            },
            {
              id: 'c3', title: 'innerHTML 비우기',
              description: 'options div의 내용을 innerHTML = ""로 비우세요.',
              difficulty: 'easy',
              starterCode: '// options div의 내용을 비우세요\n',
              solution: 'document.getElementById("options").innerHTML = "";',
              hints: ['innerHTML = ""은 내부 HTML을 모두 삭제해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'innerHTML 사용을 완벽하게 이해했어요!', good: '잘했어요!', partial: '속성이 틀렸어요.', wrong: '.innerHTML = ""으로 내용을 비우세요.' }
            },
            {
              id: 'c4', title: 'forEach로 버튼 4개 생성',
              description: '배열의 forEach를 사용하여 4개의 선택지 버튼을 동적으로 생성하고 options div에 추가하세요.',
              difficulty: 'medium',
              starterCode: 'const options = ["답1", "답2", "답3", "답4"];\nconst optionsDiv = document.getElementById("options");\n// forEach로 버튼 4개를 만들어 추가하세요\n',
              solution: 'const options = ["답1", "답2", "답3", "답4"];\nconst optionsDiv = document.getElementById("options");\noptions.forEach((text, index) => {\n  const btn = document.createElement("button");\n  btn.textContent = text;\n  btn.className = "option-btn";\n  btn.dataset.index = index;\n  optionsDiv.appendChild(btn);\n});',
              hints: ['forEach의 두 번째 매개변수가 인덱스예요', 'dataset으로 커스텀 데이터를 저장해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '동적 요소 생성을 완벽하게 했어요!', good: 'forEach를 잘 활용했어요!', partial: '버튼 생성이 불완전해요.', wrong: 'forEach 안에서 createElement → textContent → appendChild를 하세요.' }
            },
            {
              id: 'c5', title: '버튼에 클릭 이벤트 추가',
              description: 'forEach 안에서 생성한 각 버튼에 클릭 이벤트를 추가하여 인덱스를 전달하세요.',
              difficulty: 'medium',
              starterCode: 'options.forEach((text, index) => {\n  const btn = document.createElement("button");\n  btn.textContent = text;\n  // 클릭하면 selectAnswer(index)를 호출하도록 이벤트를 추가하세요\n  optionsDiv.appendChild(btn);\n});',
              solution: 'options.forEach((text, index) => {\n  const btn = document.createElement("button");\n  btn.textContent = text;\n  btn.addEventListener("click", () => selectAnswer(index));\n  optionsDiv.appendChild(btn);\n});',
              hints: ['화살표 함수로 index를 캡처해요', 'addEventListener를 appendChild 전에 추가해요'],
              estimatedMinutes: 6,
              feedback: { perfect: '이벤트 위임을 완벽하게 이해했어요!', good: '이벤트를 잘 연결했어요!', partial: 'index가 전달되지 않아요.', wrong: 'btn.addEventListener("click", () => selectAnswer(index))를 추가하세요.' }
            },
            {
              id: 'c6', title: '템플릿 리터럴로 진행도 표시',
              description: '템플릿 리터럴(백틱)을 사용하여 "문제 2/5" 형태의 진행도를 표시하세요.',
              difficulty: 'medium',
              starterCode: 'let currentQuestion = 1;\nconst total = 5;\n// progress 요소에 "문제 2/5" 형태로 표시하세요\n',
              solution: 'let currentQuestion = 1;\nconst total = 5;\ndocument.getElementById("progress").textContent = `문제 ${currentQuestion + 1}/${total}`;',
              hints: ['백틱(`)으로 감싸고 ${변수}로 삽입해요', 'currentQuestion은 0부터 시작하므로 +1 해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '템플릿 리터럴을 완벽하게 사용했어요!', good: '잘 표시했어요!', partial: '인덱스 계산이 틀렸어요.', wrong: '`문제 ${currentQuestion + 1}/${total}`을 사용하세요.' }
            },
            {
              id: 'c7', title: 'showQuestion 함수 완성',
              description: '문제 텍스트 표시, 이전 선택지 삭제, 새 선택지 생성을 모두 포함하는 showQuestion 함수를 완성하세요.',
              difficulty: 'hard',
              starterCode: 'function showQuestion() {\n  const quiz = quizData[currentQuestion];\n  // 1. progress 업데이트\n  // 2. question 텍스트 설정\n  // 3. options 비우기\n  // 4. 선택지 버튼 생성\n}',
              solution: 'function showQuestion() {\n  const quiz = quizData[currentQuestion];\n  document.getElementById("progress").textContent = `문제 ${currentQuestion + 1}/${quizData.length}`;\n  document.getElementById("question").textContent = quiz.question;\n  const optionsDiv = document.getElementById("options");\n  optionsDiv.innerHTML = "";\n  quiz.options.forEach((option, index) => {\n    const btn = document.createElement("button");\n    btn.className = "option-btn";\n    btn.textContent = option;\n    btn.addEventListener("click", () => selectAnswer(index));\n    optionsDiv.appendChild(btn);\n  });\n}',
              hints: ['4단계를 순서대로 구현해요', 'forEach 안에서 버튼 생성+이벤트 추가해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '완벽한 showQuestion 함수예요!', good: '전체 함수를 잘 만들었어요!', partial: '일부 단계가 빠졌어요.', wrong: 'progress 업데이트, question 설정, options 비우기, 버튼 생성 4단계가 필요해요.' }
            },
            {
              id: 'c8', title: '정답/오답 시각 피드백',
              description: '선택한 버튼에 정답이면 correct 클래스, 오답이면 wrong 클래스를 추가하세요.',
              difficulty: 'hard',
              starterCode: 'function selectAnswer(index) {\n  const buttons = document.querySelectorAll(".option-btn");\n  const correct = quizData[currentQuestion].correct;\n  // 정답/오답 피드백을 추가하세요\n}',
              solution: 'function selectAnswer(index) {\n  const buttons = document.querySelectorAll(".option-btn");\n  const correct = quizData[currentQuestion].correct;\n  buttons.forEach(btn => btn.disabled = true);\n  buttons[correct].classList.add("correct");\n  if (index !== correct) {\n    buttons[index].classList.add("wrong");\n  } else {\n    score++;\n  }\n}',
              hints: ['모든 버튼을 비활성화해요', '정답 버튼에는 항상 correct 클래스를 추가해요', '오답 선택 시 wrong 클래스도 추가해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '시각적 피드백이 완벽해요!', good: '정답/오답 구분을 잘했어요!', partial: '정답 표시가 빠졌어요.', wrong: '정답 버튼에 .correct, 오답 버튼에 .wrong 클래스를 추가하세요.' }
            },
            {
              id: 'c9', title: '다음 문제로 이동',
              description: '1.5초 후 자동으로 다음 문제를 표시하거나 마지막이면 결과 화면으로 전환하세요.',
              difficulty: 'hard',
              starterCode: '// selectAnswer 끝에 추가: 다음 문제 또는 결과로 이동\nsetTimeout(() => {\n  // 다음 문제 또는 결과 화면\n}, 1500);',
              solution: 'setTimeout(() => {\n  currentQuestion++;\n  if (currentQuestion < quizData.length) {\n    showQuestion();\n  } else {\n    showResult();\n  }\n}, 1500);',
              hints: ['setTimeout으로 지연시켜요', 'currentQuestion이 배열 길이보다 작으면 다음 문제'],
              estimatedMinutes: 8,
              feedback: { perfect: '흐름 제어를 완벽하게 구현했어요!', good: '자동 이동을 잘했어요!', partial: '결과 화면 전환이 빠졌어요.', wrong: 'currentQuestion++하고 length와 비교하세요.' }
            },
            {
              id: 'c10', title: '결과 표시 함수',
              description: '총 점수, 정답률 메시지, 등급(만점/잘함/노력)을 계산하여 결과 화면에 표시하는 showResult 함수를 작성하세요.',
              difficulty: 'hard',
              starterCode: 'function showResult() {\n  showScreen("result-screen");\n  // 점수와 메시지를 표시하세요\n}',
              solution: 'function showResult() {\n  showScreen("result-screen");\n  const percentage = Math.round((score / quizData.length) * 100);\n  document.getElementById("score").textContent = `${score}/${quizData.length} (${percentage}%)`;\n  let message = "";\n  if (percentage === 100) message = "만점이에요! 천재!";\n  else if (percentage >= 70) message = "잘했어요! 거의 다 맞았어요!";\n  else if (percentage >= 40) message = "괜찮아요! 다시 도전해보세요!";\n  else message = "더 공부하고 다시 도전!";\n  document.getElementById("result-message").textContent = message;\n}',
              hints: ['점수/전체로 백분율을 계산해요', '조건문으로 등급별 메시지를 표시해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '결과 시스템을 완벽하게 구현했어요!', good: '점수 표시를 잘했어요!', partial: '등급 메시지가 빠졌어요.', wrong: '점수 계산 → 등급 판별 → 메시지 표시 순서로 구현하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m7',
          title: '정답 확인 기능',
          description: '선택한 답이 맞는지 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '조건문 활용',
          cstaStandard: '2-AP-15',
          learningObjectives: ['조건문으로 정답을 판별하고 점수를 업데이트할 수 있다'],
          realWorldExample: '시험 채점처럼 학생의 답과 정답을 비교하는 과정이에요!',
          starterCode: 'function selectAnswer(index) {\n  // 정답 확인 로직\n}',
          solution: 'function selectAnswer(index) {\n  if (index === quizData[currentQuestion].correct) {\n    score++;\n  }\n  currentQuestion++;\n  if (currentQuestion < quizData.length) {\n    showQuestion();\n  } else {\n    showScreen("result-screen");\n    document.getElementById("score").textContent = `${score}/${quizData.length}`;\n  }\n}',
          hints: ['💡 힌트 1: quizData[currentQuestion].correct가 정답 인덱스예요', '💡 힌트 2: ===로 비교하면 정답인지 확인해요'],
          testCases: [
            { input: '정답 선택', expectedOutput: 'score 1 증가', description: '정답을 선택하면 점수가 올라가는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: '정답 비교하기',
              description: 'if문으로 선택한 인덱스와 정답 인덱스를 비교하세요.',
              difficulty: 'easy',
              starterCode: 'const correct = 2;\nconst selected = 2;\n// 같으면 "정답!" 다르면 "오답!" 출력\n',
              solution: 'const correct = 2;\nconst selected = 2;\nif (selected === correct) {\n  console.log("정답!");\n} else {\n  console.log("오답!");\n}',
              hints: ['=== 로 비교해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '조건 비교를 완벽하게 했어요!', good: '잘했어요!', partial: '비교 연산자를 확인하세요.', wrong: 'if (selected === correct)로 비교하세요.' }
            },
            {
              id: 'c2', title: '점수 증가시키기',
              description: '정답이면 score를 1 증가시키세요.',
              difficulty: 'easy',
              starterCode: 'let score = 0;\nconst isCorrect = true;\n// 정답이면 score를 증가시키세요\n',
              solution: 'let score = 0;\nconst isCorrect = true;\nif (isCorrect) {\n  score++;\n}',
              hints: ['score++ 또는 score += 1'],
              estimatedMinutes: 3,
              feedback: { perfect: '점수 업데이트를 완벽하게 했어요!', good: '잘했어요!', partial: '조건이 빠졌어요.', wrong: 'if (isCorrect) { score++; }를 사용하세요.' }
            },
            {
              id: 'c3', title: '다음 문제로 이동',
              description: 'currentQuestion을 증가시키고 마지막 문제인지 확인하세요.',
              difficulty: 'easy',
              starterCode: 'let currentQuestion = 0;\nconst totalQuestions = 5;\n// 다음 문제로 이동하고 마지막인지 확인\n',
              solution: 'let currentQuestion = 0;\nconst totalQuestions = 5;\ncurrentQuestion++;\nif (currentQuestion >= totalQuestions) {\n  console.log("퀴즈 끝!");\n} else {\n  console.log("다음 문제!");\n}',
              hints: ['currentQuestion++로 증가', '>= totalQuestions면 마지막'],
              estimatedMinutes: 4,
              feedback: { perfect: '흐름 제어를 완벽하게 했어요!', good: '잘했어요!', partial: '경계값 처리를 확인하세요.', wrong: 'currentQuestion++하고 totalQuestions와 비교하세요.' }
            },
            {
              id: 'c4', title: '버튼 비활성화',
              description: '답을 선택한 후 모든 선택지 버튼을 비활성화(disabled)하세요.',
              difficulty: 'medium',
              starterCode: '// 모든 .option-btn을 비활성화하세요\n',
              solution: 'const buttons = document.querySelectorAll(".option-btn");\nbuttons.forEach(btn => btn.disabled = true);',
              hints: ['querySelectorAll로 모든 버튼을 가져와요', 'disabled = true로 비활성화해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '버튼 비활성화를 완벽하게 했어요!', good: '잘했어요!', partial: '일부 버튼만 비활성화됐어요.', wrong: 'querySelectorAll로 모든 버튼을 가져와서 forEach로 disabled해요.' }
            },
            {
              id: 'c5', title: '정답/오답 색상 표시',
              description: '정답 버튼은 초록색, 오답 선택 버튼은 빨간색으로 표시하세요.',
              difficulty: 'medium',
              starterCode: 'function highlightAnswer(selectedIndex, correctIndex) {\n  const buttons = document.querySelectorAll(".option-btn");\n  // 색상 표시 로직\n}',
              solution: 'function highlightAnswer(selectedIndex, correctIndex) {\n  const buttons = document.querySelectorAll(".option-btn");\n  buttons[correctIndex].classList.add("correct");\n  if (selectedIndex !== correctIndex) {\n    buttons[selectedIndex].classList.add("wrong");\n  }\n}',
              hints: ['정답 버튼에는 항상 .correct 추가', '오답이면 선택 버튼에 .wrong 추가'],
              estimatedMinutes: 7,
              feedback: { perfect: '시각 피드백이 완벽해요!', good: '색상 표시를 잘했어요!', partial: '정답 표시가 빠졌어요.', wrong: '정답에 .correct, 오답에 .wrong 클래스를 추가하세요.' }
            },
            {
              id: 'c6', title: 'selectAnswer 전체 구현',
              description: '정답 확인, 점수 업데이트, 색상 표시, 버튼 비활성화, 다음 문제 이동을 포함하세요.',
              difficulty: 'hard',
              starterCode: 'function selectAnswer(index) {\n  // 전체 로직을 구현하세요\n}',
              solution: 'function selectAnswer(index) {\n  const correct = quizData[currentQuestion].correct;\n  const buttons = document.querySelectorAll(".option-btn");\n  buttons.forEach(btn => btn.disabled = true);\n  buttons[correct].classList.add("correct");\n  if (index === correct) {\n    score++;\n  } else {\n    buttons[index].classList.add("wrong");\n  }\n  setTimeout(() => {\n    currentQuestion++;\n    if (currentQuestion < quizData.length) showQuestion();\n    else showResult();\n  }, 1500);\n}',
              hints: ['비활성화 → 색상 → 점수 → 지연 이동 순서로 구현해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '완벽한 정답 확인 시스템이에요!', good: '전체 로직을 잘 구현했어요!', partial: '일부 기능이 빠졌어요.', wrong: '비활성화, 색상, 점수, setTimeout 이동이 모두 필요해요.' }
            },
            {
              id: 'c7', title: '점수 메시지 생성',
              description: '점수에 따른 등급 메시지를 반환하는 함수를 작성하세요. 100%: 만점, 70%+: 잘함, 40%+: 보통, 나머지: 노력',
              difficulty: 'hard',
              starterCode: 'function getResultMessage(score, total) {\n  // 등급 메시지를 반환하세요\n}',
              solution: 'function getResultMessage(score, total) {\n  const pct = Math.round((score / total) * 100);\n  if (pct === 100) return "완벽해요! 만점이에요!";\n  if (pct >= 70) return "잘했어요! 거의 다 맞았어요!";\n  if (pct >= 40) return "괜찮아요! 다시 도전해보세요!";\n  return "더 공부하고 다시 도전해요!";\n}',
              hints: ['백분율을 먼저 계산해요', '조건을 큰 값부터 비교해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '등급 시스템을 완벽하게 만들었어요!', good: '메시지 분류를 잘했어요!', partial: '일부 등급이 빠졌어요.', wrong: '백분율 계산 후 if-else로 등급을 나누세요.' }
            },
            {
              id: 'c8', title: '연속 정답 보너스',
              description: '연속으로 정답을 맞추면 보너스 점수를 주는 콤보 시스템을 만드세요.',
              difficulty: 'hard',
              starterCode: 'let combo = 0;\nlet totalScore = 0;\n\nfunction addScore(isCorrect) {\n  // 콤보 시스템 구현\n}',
              solution: 'let combo = 0;\nlet totalScore = 0;\n\nfunction addScore(isCorrect) {\n  if (isCorrect) {\n    combo++;\n    const bonus = combo >= 3 ? 5 : 0;\n    totalScore += 10 + bonus;\n    console.log(`정답! 콤보 ${combo}x (+${10 + bonus}점)`);\n  } else {\n    combo = 0;\n    console.log("오답! 콤보 초기화");\n  }\n}',
              hints: ['정답이면 combo++, 오답이면 combo = 0', '3콤보 이상이면 보너스 추가'],
              estimatedMinutes: 10,
              feedback: { perfect: '게임처럼 재미있는 시스템이에요!', good: '콤보 시스템을 잘 만들었어요!', partial: '보너스 계산이 틀렸어요.', wrong: '정답 시 combo++, 오답 시 combo=0, 3이상이면 보너스.' }
            },
            {
              id: 'c9', title: '오답 노트 기록',
              description: '틀린 문제를 배열에 저장하고 나중에 복습할 수 있게 하세요.',
              difficulty: 'hard',
              starterCode: 'const wrongAnswers = [];\n\nfunction recordWrong(questionIndex, selectedIndex) {\n  // 오답 기록\n}',
              solution: 'const wrongAnswers = [];\n\nfunction recordWrong(questionIndex, selectedIndex) {\n  wrongAnswers.push({\n    question: quizData[questionIndex].question,\n    yourAnswer: quizData[questionIndex].options[selectedIndex],\n    correctAnswer: quizData[questionIndex].options[quizData[questionIndex].correct],\n    questionIndex: questionIndex\n  });\n}',
              hints: ['객체로 문제, 내 답, 정답을 저장해요', 'push로 배열에 추가해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '오답 노트 시스템이 완벽해요!', good: '오답을 잘 기록했어요!', partial: '일부 정보가 빠졌어요.', wrong: '문제, 내 답, 정답을 객체로 push하세요.' }
            },
            {
              id: 'c10', title: '전체 퀴즈 흐름 통합',
              description: 'selectAnswer에서 정답확인, 점수업데이트, 색상표시, 오답기록, 콤보, 다음이동을 모두 통합하세요.',
              difficulty: 'hard',
              starterCode: 'function selectAnswer(index) {\n  // 모든 기능을 통합하세요\n}',
              solution: 'function selectAnswer(index) {\n  const correct = quizData[currentQuestion].correct;\n  const buttons = document.querySelectorAll(".option-btn");\n  buttons.forEach(btn => btn.disabled = true);\n  buttons[correct].classList.add("correct");\n  if (index === correct) {\n    score++;\n    combo++;\n  } else {\n    buttons[index].classList.add("wrong");\n    recordWrong(currentQuestion, index);\n    combo = 0;\n  }\n  setTimeout(() => {\n    currentQuestion++;\n    currentQuestion < quizData.length ? showQuestion() : showResult();\n  }, 1500);\n}',
              hints: ['모든 기능을 순서대로 넣어요'],
              estimatedMinutes: 15,
              feedback: { perfect: '완벽한 통합이에요!', good: '모든 기능을 잘 합쳤어요!', partial: '일부 기능이 빠졌어요.', wrong: '비활성화→색상→점수→오답→콤보→이동 순서로 구현하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m8',
          title: '다시하기 기능',
          description: '게임을 처음부터 다시 시작해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 12,
          concept: '초기화',
          cstaStandard: '2-AP-13',
          learningObjectives: ['프로그램의 상태를 초기화할 수 있다'],
          realWorldExample: '게임을 리셋하는 것처럼 모든 값을 처음으로 되돌려요!',
          starterCode: '// 다시하기 버튼 기능을 만드세요',
          solution: 'document.getElementById("restart-btn").addEventListener("click", () => {\n  currentQuestion = 0;\n  score = 0;\n  showScreen("start-screen");\n});',
          hints: ['💡 힌트 1: currentQuestion과 score를 0으로 리셋해요', '💡 힌트 2: showScreen("start-screen")으로 시작 화면으로 돌아가요'],
          testCases: [
            { input: '다시하기 버튼 클릭', expectedOutput: 'currentQuestion=0, score=0, 시작 화면 표시', description: '모든 값이 초기화되는지 확인' }
          ],
          challenges: [
            {
              id: 'c1', title: '변수 초기화',
              description: 'currentQuestion과 score를 0으로 리셋하세요.',
              difficulty: 'easy',
              starterCode: 'let currentQuestion = 3;\nlet score = 2;\n// 두 변수를 0으로 초기화하세요\n',
              solution: 'let currentQuestion = 3;\nlet score = 2;\ncurrentQuestion = 0;\nscore = 0;',
              hints: ['= 0으로 값을 재할당해요'],
              estimatedMinutes: 2,
              feedback: { perfect: '초기화를 완벽하게 했어요!', good: '잘했어요!', partial: '하나만 초기화했어요.', wrong: '두 변수 모두 = 0으로 설정하세요.' }
            },
            {
              id: 'c2', title: '배열 비우기',
              description: 'wrongAnswers 배열을 빈 배열로 초기화하세요.',
              difficulty: 'easy',
              starterCode: 'const wrongAnswers = ["q1", "q3"];\n// 배열을 비우세요\n',
              solution: 'const wrongAnswers = ["q1", "q3"];\nwrongAnswers.length = 0;',
              hints: ['.length = 0으로 배열을 비울 수 있어요'],
              estimatedMinutes: 3,
              feedback: { perfect: '배열 초기화를 잘했어요!', good: '잘 비웠어요!', partial: '방법이 다르지만 동작해요.', wrong: 'wrongAnswers.length = 0 또는 wrongAnswers.splice(0)을 사용하세요.' }
            },
            {
              id: 'c3', title: '리셋 버튼 이벤트',
              description: 'restart-btn에 클릭 이벤트를 추가하여 restartQuiz 함수를 호출하세요.',
              difficulty: 'easy',
              starterCode: '// restart-btn에 클릭 이벤트를 추가하세요\n',
              solution: 'document.getElementById("restart-btn").addEventListener("click", restartQuiz);',
              hints: ['addEventListener("click", 함수이름)'],
              estimatedMinutes: 3,
              feedback: { perfect: '이벤트를 완벽하게 연결했어요!', good: '잘했어요!', partial: '이벤트 타입을 확인하세요.', wrong: 'addEventListener("click", restartQuiz)를 사용하세요.' }
            },
            {
              id: 'c4', title: 'restartQuiz 함수',
              description: '변수 초기화 + 시작 화면 전환 + 오답 배열 비우기를 포함하는 restartQuiz 함수를 작성하세요.',
              difficulty: 'medium',
              starterCode: 'function restartQuiz() {\n  // 모든 것을 초기화하세요\n}',
              solution: 'function restartQuiz() {\n  currentQuestion = 0;\n  score = 0;\n  combo = 0;\n  wrongAnswers.length = 0;\n  showScreen("start-screen");\n}',
              hints: ['모든 상태 변수를 초기값으로 되돌려요', '화면 전환도 잊지 마세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '완전한 초기화 함수예요!', good: '잘 초기화했어요!', partial: '일부 변수 초기화가 빠졌어요.', wrong: '모든 상태(currentQuestion, score, combo, wrongAnswers)를 리셋하세요.' }
            },
            {
              id: 'c5', title: 'localStorage에 최고점수 저장',
              description: '현재 점수가 최고점수보다 높으면 localStorage에 저장하세요.',
              difficulty: 'medium',
              starterCode: 'function saveHighScore(score) {\n  // localStorage에 최고점수 저장\n}',
              solution: 'function saveHighScore(score) {\n  const highScore = localStorage.getItem("highScore") || 0;\n  if (score > Number(highScore)) {\n    localStorage.setItem("highScore", score);\n    console.log("새 최고점수!");\n  }\n}',
              hints: ['localStorage.getItem으로 가져오고 setItem으로 저장해요', 'Number()로 문자열을 숫자로 변환해요'],
              estimatedMinutes: 7,
              feedback: { perfect: 'localStorage를 완벽하게 활용했어요!', good: '최고점수 저장을 잘했어요!', partial: '비교 로직이 불완전해요.', wrong: 'getItem으로 기존 점수를 가져와서 비교 후 setItem으로 저장하세요.' }
            },
            {
              id: 'c6', title: '최고점수 불러오기',
              description: '앱 시작 시 localStorage에서 최고점수를 불러와 화면에 표시하세요.',
              difficulty: 'medium',
              starterCode: '// 최고점수를 불러와서 표시하세요\n',
              solution: 'const highScore = localStorage.getItem("highScore") || 0;\ndocument.getElementById("high-score").textContent = `최고점수: ${highScore}점`;',
              hints: ['|| 0으로 null인 경우 기본값을 설정해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '데이터 불러오기를 완벽하게 했어요!', good: '잘 불러왔어요!', partial: 'null 처리가 빠졌어요.', wrong: 'getItem("highScore") || 0으로 null을 처리하세요.' }
            },
            {
              id: 'c7', title: '게임 히스토리 저장',
              description: '매 게임 결과(점수, 날짜, 소요시간)를 배열로 localStorage에 저장하세요.',
              difficulty: 'hard',
              starterCode: 'function saveGameHistory(score, timeSpent) {\n  // 게임 결과를 히스토리에 추가\n}',
              solution: 'function saveGameHistory(score, timeSpent) {\n  const history = JSON.parse(localStorage.getItem("gameHistory") || "[]");\n  history.push({\n    score: score,\n    date: new Date().toLocaleDateString(),\n    time: timeSpent\n  });\n  localStorage.setItem("gameHistory", JSON.stringify(history));\n}',
              hints: ['JSON.parse/stringify로 배열을 저장/불러와요', 'push로 새 결과를 추가해요'],
              estimatedMinutes: 10,
              feedback: { perfect: 'JSON 직렬화까지 완벽해요!', good: '히스토리 저장을 잘했어요!', partial: 'JSON 파싱이 빠졌어요.', wrong: 'JSON.parse로 불러오고, push하고, JSON.stringify로 저장하세요.' }
            },
            {
              id: 'c8', title: '오답 복습 기능',
              description: '이전에 틀린 문제만 다시 출제하는 retryWrong 함수를 만드세요.',
              difficulty: 'hard',
              starterCode: 'function retryWrong() {\n  // 오답만 다시 풀기\n}',
              solution: 'function retryWrong() {\n  if (wrongAnswers.length === 0) {\n    alert("틀린 문제가 없어요!");\n    return;\n  }\n  const wrongQuestions = wrongAnswers.map(w => quizData[w.questionIndex]);\n  quizData.length = 0;\n  wrongQuestions.forEach(q => quizData.push(q));\n  currentQuestion = 0;\n  score = 0;\n  wrongAnswers.length = 0;\n  showScreen("quiz-screen");\n  showQuestion();\n}',
              hints: ['wrongAnswers에서 문제 인덱스를 가져와요', '새 quizData를 오답만으로 구성해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '복습 기능까지 완벽해요!', good: '오답 복습을 잘 구현했어요!', partial: '데이터 교체가 불완전해요.', wrong: 'wrongAnswers의 인덱스로 문제를 가져와 새 퀴즈를 시작하세요.' }
            },
            {
              id: 'c9', title: '전체 리셋 확인 대화상자',
              description: 'confirm()으로 진짜 초기화할 것인지 확인 후 모든 데이터(localStorage 포함)를 삭제하세요.',
              difficulty: 'hard',
              starterCode: 'function fullReset() {\n  // 확인 후 전체 초기화\n}',
              solution: 'function fullReset() {\n  if (confirm("모든 데이터를 삭제하시겠습니까?")) {\n    localStorage.removeItem("highScore");\n    localStorage.removeItem("gameHistory");\n    currentQuestion = 0;\n    score = 0;\n    combo = 0;\n    wrongAnswers.length = 0;\n    showScreen("start-screen");\n    alert("초기화 완료!");\n  }\n}',
              hints: ['confirm()은 확인/취소를 반환해요', 'localStorage.removeItem으로 삭제해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '안전한 초기화 시스템이에요!', good: '확인 대화상자를 잘 사용했어요!', partial: 'localStorage 삭제가 빠졌어요.', wrong: 'confirm()으로 확인 후 removeItem과 변수 초기화를 하세요.' }
            },
            {
              id: 'c10', title: '퀴즈 앱 초기화 시스템 완성',
              description: '일반 리셋, 오답 복습, 전체 초기화 기능을 모두 포함하고 각 버튼에 연결하세요.',
              difficulty: 'hard',
              starterCode: '// 3가지 리셋 기능을 모두 구현하고 버튼에 연결하세요\n',
              solution: 'document.getElementById("restart-btn").addEventListener("click", () => {\n  currentQuestion = 0;\n  score = 0;\n  combo = 0;\n  wrongAnswers.length = 0;\n  showScreen("start-screen");\n});\n\ndocument.getElementById("retry-wrong-btn").addEventListener("click", retryWrong);\n\ndocument.getElementById("full-reset-btn").addEventListener("click", fullReset);',
              hints: ['각 기능을 함수로 분리해요', '3개 버튼에 각각 이벤트를 연결해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '완전한 초기화 시스템이에요!', good: '세 기능을 잘 연결했어요!', partial: '일부 기능이 빠졌어요.', wrong: '리셋, 오답복습, 전체초기화 3가지를 각 버튼에 연결하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m9',
          title: '퀴즈 앱 완성',
          description: '모든 기능을 합쳐서 완성해요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'html',
          exp: 50,
          estimatedMinutes: 25,
          concept: '프로젝트 완성',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'HTML, CSS, JavaScript를 통합하여 완전한 웹 앱을 만들 수 있다',
            '여러 기능을 조합하여 동작하는 프로그램을 완성할 수 있다'
          ],
          realWorldExample: '레고 블록을 조립하여 완성품을 만드는 것처럼 모든 기능을 합쳐요!',
          hints: [
            '💡 힌트 1: HTML에 <script> 태그로 JavaScript를 연결해요',
            '💡 힌트 2: <style> 태그로 CSS를 적용해요',
            '💡 힌트 3: 모든 ID가 일치하는지 확인해요'
          ],
          testCases: [
            { input: '전체 흐름', expectedOutput: '시작 -> 퀴즈 -> 결과 -> 다시하기', description: '전체 흐름이 작동하는지 확인' }
          ],
          projectCheckpoints: [
            { id: 'w45-cp1', title: 'HTML 구조 완성', description: '세 화면이 올바르게 구성됐나요?', criteria: ['시작 화면에 제목과 시작 버튼', '퀴즈 화면에 문제/선택지 영역', '결과 화면에 점수와 다시하기 버튼'], points: 20 },
            { id: 'w45-cp2', title: 'CSS 스타일 적용', description: '앱이 보기 좋게 스타일링 됐나요?', criteria: ['가운데 정렬', '버튼 호버 효과', '정답/오답 색상 구분'], points: 15 },
            { id: 'w45-cp3', title: '퀴즈 데이터', description: '5개 이상의 문제가 있나요?', criteria: ['5개 이상 문제', '각 문제 선택지 4개', '정답 인덱스 포함'], points: 15 },
            { id: 'w45-cp4', title: '화면 전환', description: '버튼 클릭 시 화면이 전환되나요?', criteria: ['시작 -> 퀴즈', '마지막 문제 후 -> 결과', '다시하기 -> 시작'], points: 20 },
            { id: 'w45-cp5', title: '점수 계산', description: '점수가 올바르게 계산되나요?', criteria: ['정답 시 점수 증가', '결과에 최종 점수 표시', '등급 메시지 표시'], points: 20 },
            { id: 'w45-cp6', title: '완성도', description: '오류 없이 작동하나요?', criteria: ['콘솔 에러 없음', '모든 흐름 테스트 통과', '반응형 대응'], points: 10 }
          ],
          challenges: [
            {
              id: 'c1', title: 'HTML+CSS 통합',
              description: 'HTML 파일 안에 <style> 태그로 CSS를 작성하세요.',
              difficulty: 'easy',
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    /* CSS 작성 */\n  </style>\n</head>\n<body>\n  <div id="app">앱</div>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    #app { max-width: 600px; margin: 40px auto; padding: 20px; text-align: center; font-family: sans-serif; }\n  </style>\n</head>\n<body>\n  <div id="app">앱</div>\n</body>\n</html>',
              hints: ['<style> 태그는 <head> 안에 넣어요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'HTML+CSS 통합을 완벽하게 했어요!', good: '잘 통합했어요!', partial: 'style 태그 위치를 확인하세요.', wrong: '<head> 안에 <style> 태그를 넣으세요.' }
            },
            {
              id: 'c2', title: 'HTML+JS 통합',
              description: 'HTML 파일 끝에 <script> 태그로 JavaScript를 작성하세요.',
              difficulty: 'easy',
              starterCode: '<body>\n  <button id="btn">클릭</button>\n  <!-- script 추가 -->\n</body>',
              solution: '<body>\n  <button id="btn">클릭</button>\n  <script>\n    document.getElementById("btn").addEventListener("click", () => alert("클릭!"));\n  </script>\n</body>',
              hints: ['<script>는 </body> 바로 앞에 넣어요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'JS 통합을 완벽하게 했어요!', good: '잘 연결했어요!', partial: 'script 위치를 확인하세요.', wrong: '</body> 앞에 <script> 태그를 넣으세요.' }
            },
            {
              id: 'c3', title: 'ID 일관성 확인',
              description: 'HTML의 id와 JavaScript의 getElementById가 일치하도록 수정하세요.',
              difficulty: 'easy',
              starterCode: '<div id="quiz-screen"></div>\n<script>\n  document.getElementById("quizScreen").style.display = "block";\n</script>',
              solution: '<div id="quiz-screen"></div>\n<script>\n  document.getElementById("quiz-screen").style.display = "block";\n</script>',
              hints: ['HTML id와 JS의 문자열이 정확히 같아야 해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'ID 매칭을 완벽하게 했어요!', good: '잘 수정했어요!', partial: '아직 불일치가 있어요.', wrong: 'HTML id="quiz-screen"과 JS "quiz-screen"이 같아야 해요.' }
            },
            {
              id: 'c4', title: '퀴즈 데이터 + showQuestion 통합',
              description: 'quizData 배열과 showQuestion 함수를 함께 작성하세요.',
              difficulty: 'medium',
              starterCode: '// 데이터와 표시 함수를 함께 작성하세요\n',
              solution: 'const quizData = [\n  {question: "HTML 태그는?", options: ["<p>", "{p}", "[p]", "(p)"], correct: 0},\n  {question: "CSS 색상?", options: ["font-color", "text-color", "color", "font-style"], correct: 2}\n];\nlet currentQuestion = 0;\n\nfunction showQuestion() {\n  const q = quizData[currentQuestion];\n  document.getElementById("question").textContent = q.question;\n  const div = document.getElementById("options");\n  div.innerHTML = "";\n  q.options.forEach((opt, i) => {\n    const btn = document.createElement("button");\n    btn.textContent = opt;\n    btn.className = "option-btn";\n    btn.onclick = () => selectAnswer(i);\n    div.appendChild(btn);\n  });\n}',
              hints: ['데이터 정의 후 함수에서 참조해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '데이터와 함수 통합이 완벽해요!', good: '잘 통합했어요!', partial: '데이터나 함수가 불완전해요.', wrong: 'quizData 배열과 showQuestion 함수를 둘 다 작성하세요.' }
            },
            {
              id: 'c5', title: '전체 JavaScript 로직',
              description: 'showScreen, showQuestion, selectAnswer, showResult 네 함수를 모두 작성하세요.',
              difficulty: 'medium',
              starterCode: '// 네 가지 핵심 함수를 작성하세요\n',
              solution: 'function showScreen(id) {\n  ["start-screen","quiz-screen","result-screen"].forEach(s => document.getElementById(s).style.display = "none");\n  document.getElementById(id).style.display = "block";\n}\nfunction showQuestion() {\n  const q = quizData[currentQuestion];\n  document.getElementById("question").textContent = q.question;\n  document.getElementById("progress").textContent = `${currentQuestion+1}/${quizData.length}`;\n  const div = document.getElementById("options");\n  div.innerHTML = "";\n  q.options.forEach((o,i) => { const b = document.createElement("button"); b.textContent = o; b.className = "option-btn"; b.onclick = () => selectAnswer(i); div.appendChild(b); });\n}\nfunction selectAnswer(i) {\n  if (i === quizData[currentQuestion].correct) score++;\n  currentQuestion++;\n  currentQuestion < quizData.length ? showQuestion() : showResult();\n}\nfunction showResult() {\n  showScreen("result-screen");\n  document.getElementById("score").textContent = `${score}/${quizData.length}`;\n}',
              hints: ['4개 함수를 순서대로 구현해요', '각 함수는 독립적으로 동작해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '핵심 로직을 완벽하게 구현했어요!', good: '네 함수를 잘 만들었어요!', partial: '일부 함수가 불완전해요.', wrong: 'showScreen, showQuestion, selectAnswer, showResult 네 함수가 필요해요.' }
            },
            {
              id: 'c6', title: '이벤트 연결 완성',
              description: 'start-btn과 restart-btn에 이벤트를 연결하여 전체 흐름을 완성하세요.',
              difficulty: 'medium',
              starterCode: '// 시작 버튼과 다시하기 버튼에 이벤트를 연결하세요\n',
              solution: 'document.getElementById("start-btn").addEventListener("click", () => {\n  currentQuestion = 0;\n  score = 0;\n  showScreen("quiz-screen");\n  showQuestion();\n});\n\ndocument.getElementById("restart-btn").addEventListener("click", () => {\n  currentQuestion = 0;\n  score = 0;\n  showScreen("start-screen");\n});',
              hints: ['시작 시 quiz-screen으로, 다시하기 시 start-screen으로'],
              estimatedMinutes: 7,
              feedback: { perfect: '이벤트 연결이 완벽해요!', good: '잘 연결했어요!', partial: '한 버튼의 이벤트가 빠졌어요.', wrong: '두 버튼 모두 addEventListener를 추가하세요.' }
            },
            {
              id: 'c7', title: '완성된 HTML 파일',
              description: 'HTML+CSS+JS를 하나의 파일로 통합하여 완성된 퀴즈 앱을 만드세요.',
              difficulty: 'hard',
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <style>/* CSS */</style>\n</head>\n<body>\n  <!-- HTML -->\n  <script>/* JS */</script>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>퀴즈 앱</title>\n  <style>\n    #app { max-width: 600px; margin: 40px auto; padding: 20px; text-align: center; font-family: sans-serif; }\n    button { padding: 12px 24px; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; background: #4CAF50; color: white; margin: 5px; }\n    button:hover { background: #45a049; }\n    .option-btn { display: block; width: 100%; margin: 8px 0; background: #f0f0f0; color: #333; }\n    .option-btn:hover { background: #ddd; }\n    .correct { background: #4CAF50 !important; color: white !important; }\n    .wrong { background: #f44336 !important; color: white !important; }\n  </style>\n</head>\n<body>\n  <div id="app">\n    <div id="start-screen"><h1>퀴즈 도전!</h1><button id="start-btn">시작하기</button></div>\n    <div id="quiz-screen" style="display:none"><p id="progress"></p><h2 id="question"></h2><div id="options"></div></div>\n    <div id="result-screen" style="display:none"><h1>완료!</h1><p id="score"></p><button id="restart-btn">다시하기</button></div>\n  </div>\n  <script>\n    const quizData = [{question:"HTML 뜻은?",options:["Hyper Text Markup Language","High Tech ML","Hyper Transfer ML","Home Tool ML"],correct:0},{question:"CSS # 선택자는?",options:["클래스","아이디","태그","속성"],correct:1},{question:"JS 출력?",options:["print","echo","console.log","write"],correct:2}];\n    let currentQuestion=0, score=0;\n    function showScreen(id){["start-screen","quiz-screen","result-screen"].forEach(s=>document.getElementById(s).style.display="none");document.getElementById(id).style.display="block";}\n    function showQuestion(){const q=quizData[currentQuestion];document.getElementById("progress").textContent=`${currentQuestion+1}/${quizData.length}`;document.getElementById("question").textContent=q.question;const d=document.getElementById("options");d.innerHTML="";q.options.forEach((o,i)=>{const b=document.createElement("button");b.textContent=o;b.className="option-btn";b.onclick=()=>selectAnswer(i);d.appendChild(b);});}\n    function selectAnswer(i){const c=quizData[currentQuestion].correct;document.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);document.querySelectorAll(".option-btn")[c].classList.add("correct");if(i===c)score++;else document.querySelectorAll(".option-btn")[i].classList.add("wrong");setTimeout(()=>{currentQuestion++;currentQuestion<quizData.length?showQuestion():showResult();},1000);}\n    function showResult(){showScreen("result-screen");document.getElementById("score").textContent=`${score}/${quizData.length}점`;}\n    document.getElementById("start-btn").onclick=()=>{currentQuestion=0;score=0;showScreen("quiz-screen");showQuestion();};\n    document.getElementById("restart-btn").onclick=()=>{showScreen("start-screen");};\n  </script>\n</body>\n</html>',
              hints: ['HTML구조 → CSS스타일 → JS로직 순서로 작성해요', 'script는 body 끝에 넣어요'],
              estimatedMinutes: 20,
              feedback: { perfect: '완벽한 퀴즈 앱이에요! 배포 가능!', good: '전체를 잘 통합했어요!', partial: '일부 기능이 빠졌어요.', wrong: 'HTML+CSS(head)+JS(body끝)를 모두 포함하세요.' }
            },
            {
              id: 'c8', title: '디버깅: ID 불일치 찾기',
              description: '아래 코드에서 ID 불일치 3곳을 찾아 수정하세요.',
              difficulty: 'hard',
              starterCode: '<div id="start-screen"><button id="startBtn">시작</button></div>\n<div id="quiz_screen"><h2 id="Question"></h2></div>\n<script>\ndocument.getElementById("start-btn").onclick = () => {};\ndocument.getElementById("quiz-screen").style.display = "block";\ndocument.getElementById("question").textContent = "문제";\n</script>',
              solution: '<div id="start-screen"><button id="start-btn">시작</button></div>\n<div id="quiz-screen"><h2 id="question"></h2></div>\n<script>\ndocument.getElementById("start-btn").onclick = () => {};\ndocument.getElementById("quiz-screen").style.display = "block";\ndocument.getElementById("question").textContent = "문제";\n</script>',
              hints: ['HTML id와 JS 문자열을 비교해요', '대소문자와 구분자(-, _)를 확인해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '모든 버그를 찾았어요!', good: '디버깅을 잘했어요!', partial: '아직 불일치가 남아있어요.', wrong: 'startBtn→start-btn, quiz_screen→quiz-screen, Question→question으로 통일하세요.' }
            },
            {
              id: 'c9', title: '기능 테스트 체크리스트',
              description: '퀴즈 앱의 6가지 기능을 테스트하는 코드를 작성하세요.',
              difficulty: 'hard',
              starterCode: '// 각 기능을 테스트하세요\nfunction testQuizApp() {\n  const results = [];\n  // 테스트 코드\n  return results;\n}',
              solution: 'function testQuizApp() {\n  const results = [];\n  results.push({test: "데이터 존재", pass: quizData.length >= 3});\n  results.push({test: "시작화면 보임", pass: document.getElementById("start-screen").style.display !== "none"});\n  results.push({test: "퀴즈화면 숨김", pass: document.getElementById("quiz-screen").style.display === "none"});\n  results.push({test: "시작버튼 존재", pass: !!document.getElementById("start-btn")});\n  results.push({test: "showQuestion 함수", pass: typeof showQuestion === "function"});\n  results.push({test: "showScreen 함수", pass: typeof showScreen === "function"});\n  return results;\n}',
              hints: ['각 기능의 존재/동작을 확인해요', '!!로 존재 여부를 boolean으로 변환해요'],
              estimatedMinutes: 12,
              feedback: { perfect: '체계적인 테스트예요!', good: '테스트를 잘 작성했어요!', partial: '테스트 케이스가 부족해요.', wrong: '데이터, 화면, 버튼, 함수 존재를 각각 테스트하세요.' }
            },
            {
              id: 'c10', title: '퀴즈 앱 확장: 카테고리 선택',
              description: '시작 화면에 카테고리(HTML/CSS/JS) 선택 버튼을 추가하고, 선택한 카테고리의 문제만 출제하세요.',
              difficulty: 'hard',
              starterCode: '// 카테고리별 문제 필터링 + UI를 구현하세요\n',
              solution: 'const allQuestions = [\n  {question: "p태그는?", options: ["단락","링크","이미지","제목"], correct: 0, category: "html"},\n  {question: "color 속성은?", options: ["JS","HTML","CSS","API"], correct: 2, category: "css"},\n  {question: "let은?", options: ["CSS","HTML","JS","SQL"], correct: 2, category: "js"}\n];\n\nfunction startCategory(cat) {\n  quizData.length = 0;\n  allQuestions.filter(q => q.category === cat).forEach(q => quizData.push(q));\n  currentQuestion = 0;\n  score = 0;\n  showScreen("quiz-screen");\n  showQuestion();\n}',
              hints: ['category 속성을 추가해요', 'filter로 카테고리별 문제를 분류해요'],
              estimatedMinutes: 15,
              feedback: { perfect: '카테고리 시스템까지 완벽해요!', good: '확장 기능을 잘 만들었어요!', partial: '필터링이 불완전해요.', wrong: '각 문제에 category를 추가하고 filter로 분류하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w45-m10',
          title: '퀴즈 앱 리뷰',
          description: '완성된 프로젝트를 점검해요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 20,
          estimatedMinutes: 10,
          concept: '프로젝트 리뷰',
          cstaStandard: '2-AP-19',
          learningObjectives: ['완성된 프로젝트의 구조와 로직을 설명할 수 있다'],
          hints: ['전체 흐름을 되돌아보세요'],
          challenges: [
            {
              id: 'c1', title: 'HTML 구조 점검',
              description: '퀴즈 앱에 반드시 필요한 HTML 요소 3가지를 작성하세요.',
              difficulty: 'easy',
              starterCode: '// 퀴즈 앱의 필수 HTML 요소 3가지를 주석으로 적으세요\n',
              solution: '// 1. start-screen: 시작 화면 (제목, 시작 버튼)\n// 2. quiz-screen: 퀴즈 화면 (문제, 선택지, 진행도)\n// 3. result-screen: 결과 화면 (점수, 다시하기)',
              hints: ['세 가지 화면을 생각해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'HTML 구조를 완벽하게 이해했어요!', good: '잘 정리했어요!', partial: '요소가 빠졌어요.', wrong: '시작/퀴즈/결과 세 화면이 필요해요.' }
            },
            {
              id: 'c2', title: 'CSS 핵심 스타일',
              description: '퀴즈 앱에서 가장 중요한 CSS 속성 5가지를 나열하세요.',
              difficulty: 'easy',
              starterCode: '// 중요한 CSS 속성 5가지를 적으세요\n',
              solution: '// 1. display: none/block (화면 전환)\n// 2. max-width + margin: auto (가운데 정렬)\n// 3. button:hover (인터랙션)\n// 4. .correct/.wrong 색상 (피드백)\n// 5. border-radius (둥근 디자인)',
              hints: ['화면 전환, 레이아웃, 인터랙션을 생각해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'CSS 핵심을 완벽하게 파악했어요!', good: '잘 정리했어요!', partial: '일부가 빠졌어요.', wrong: 'display, margin, hover, 정답색상, border-radius를 기억하세요.' }
            },
            {
              id: 'c3', title: 'JS 함수 역할 매칭',
              description: '각 함수의 역할을 설명하세요: showScreen, showQuestion, selectAnswer, showResult',
              difficulty: 'easy',
              starterCode: '// 각 함수의 역할을 적으세요\n// showScreen:\n// showQuestion:\n// selectAnswer:\n// showResult:',
              solution: '// showScreen: 특정 화면만 보여주고 나머지를 숨김\n// showQuestion: 현재 문제와 선택지를 화면에 표시\n// selectAnswer: 정답 확인, 점수 업데이트, 다음 이동\n// showResult: 결과 화면에 최종 점수 표시',
              hints: ['각 함수가 무엇을 하는지 한 줄로 설명해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '함수 역할을 정확히 이해했어요!', good: '잘 설명했어요!', partial: '일부 함수의 역할이 부정확해요.', wrong: '각 함수의 주요 기능을 한 줄로 적어보세요.' }
            },
            {
              id: 'c4', title: '데이터 흐름 추적',
              description: 'currentQuestion 변수가 어떤 함수에서 변경되는지 추적하세요.',
              difficulty: 'medium',
              starterCode: '// currentQuestion이 변경되는 함수와 시점을 적으세요\n',
              solution: '// 1. 시작 시: 0으로 초기화 (start-btn 이벤트)\n// 2. selectAnswer: currentQuestion++ (다음 문제로)\n// 3. restartQuiz: 0으로 리셋 (restart-btn 이벤트)',
              hints: ['변수가 어디서 =, ++, = 0 되는지 찾아요'],
              estimatedMinutes: 5,
              feedback: { perfect: '데이터 흐름을 완벽하게 추적했어요!', good: '잘 추적했어요!', partial: '일부 변경 지점을 놓쳤어요.', wrong: '초기화, 증가, 리셋 세 시점을 찾으세요.' }
            },
            {
              id: 'c5', title: '개선점 찾기',
              description: '퀴즈 앱을 더 좋게 만들 수 있는 개선점 3가지를 제안하세요.',
              difficulty: 'medium',
              starterCode: '// 개선점 3가지를 적으세요\n',
              solution: '// 1. 타이머 추가: 문제당 시간 제한으로 긴장감\n// 2. 난이도 선택: 쉬움/보통/어려움 카테고리\n// 3. 애니메이션: 정답/오답 시 시각 효과\n// (보너스: 최고점수 저장, 오답 복습)',
              hints: ['사용자 경험을 개선할 수 있는 것을 생각해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '창의적인 개선안이에요!', good: '좋은 아이디어예요!', partial: '더 구체적으로 제안해보세요.', wrong: '타이머, 난이도, 애니메이션 등을 생각해보세요.' }
            },
            {
              id: 'c6', title: '코드 리팩토링',
              description: '중복된 getElementById 호출을 변수로 캐싱하여 코드를 개선하세요.',
              difficulty: 'medium',
              starterCode: '// 비효율적인 코드를 개선하세요\ndocument.getElementById("question").textContent = "문제";\ndocument.getElementById("question").style.color = "blue";\ndocument.getElementById("question").classList.add("active");',
              solution: '// 개선된 코드\nconst questionEl = document.getElementById("question");\nquestionEl.textContent = "문제";\nquestionEl.style.color = "blue";\nquestionEl.classList.add("active");',
              hints: ['같은 요소를 여러 번 찾지 말고 변수에 저장해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '코드 최적화를 잘했어요!', good: '캐싱을 잘 적용했어요!', partial: '일부만 캐싱했어요.', wrong: '변수에 저장하고 재사용하세요.' }
            },
            {
              id: 'c7', title: '에러 핸들링 추가',
              description: 'getElementById가 null을 반환할 때를 대비한 안전한 코드를 작성하세요.',
              difficulty: 'hard',
              starterCode: '// null 체크를 추가하세요\nfunction safeSetText(id, text) {\n  \n}',
              solution: 'function safeSetText(id, text) {\n  const el = document.getElementById(id);\n  if (el) {\n    el.textContent = text;\n  } else {\n    console.warn(`요소 #${id}를 찾을 수 없어요`);\n  }\n}',
              hints: ['if (el)로 null 체크를 해요', 'console.warn으로 경고 메시지를 남겨요'],
              estimatedMinutes: 7,
              feedback: { perfect: '방어적 프로그래밍을 잘했어요!', good: 'null 체크를 잘 했어요!', partial: '경고 메시지가 빠졌어요.', wrong: 'if (el) 체크 후 textContent를 설정하세요.' }
            },
            {
              id: 'c8', title: '접근성 개선',
              description: '퀴즈 앱에 키보드 탐색과 스크린 리더 지원을 추가하세요.',
              difficulty: 'hard',
              starterCode: '// 접근성을 개선하세요\n',
              solution: '// 키보드 지원\ndocument.addEventListener("keydown", (e) => {\n  if (e.key >= "1" && e.key <= "4") selectAnswer(parseInt(e.key) - 1);\n});\n\n// aria 속성 추가\ndocument.getElementById("quiz-screen").setAttribute("role", "main");\ndocument.getElementById("progress").setAttribute("aria-live", "polite");',
              hints: ['키보드 이벤트로 숫자 키 입력을 처리해요', 'aria 속성으로 스크린 리더를 지원해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '접근성까지 고려한 완벽한 앱이에요!', good: '접근성을 잘 개선했어요!', partial: '키보드 또는 aria 중 하나가 빠졌어요.', wrong: '키보드 이벤트와 aria 속성을 모두 추가하세요.' }
            },
            {
              id: 'c9', title: '성능 분석',
              description: 'DOM 접근을 줄이기 위해 요소 참조를 캐싱하는 초기화 함수를 작성하세요.',
              difficulty: 'hard',
              starterCode: '// 요소 참조를 캐싱하세요\nconst DOM = {};\nfunction initDOM() {\n  \n}',
              solution: 'const DOM = {};\nfunction initDOM() {\n  DOM.startScreen = document.getElementById("start-screen");\n  DOM.quizScreen = document.getElementById("quiz-screen");\n  DOM.resultScreen = document.getElementById("result-screen");\n  DOM.question = document.getElementById("question");\n  DOM.options = document.getElementById("options");\n  DOM.progress = document.getElementById("progress");\n  DOM.score = document.getElementById("score");\n  DOM.startBtn = document.getElementById("start-btn");\n  DOM.restartBtn = document.getElementById("restart-btn");\n}\ninitDOM();',
              hints: ['자주 사용하는 요소를 한 번만 찾아 저장해요', '객체에 모아두면 관리가 편해요'],
              estimatedMinutes: 10,
              feedback: { perfect: '성능 최적화를 완벽하게 이해했어요!', good: '캐싱을 잘 적용했어요!', partial: '일부 요소가 빠졌어요.', wrong: '모든 주요 요소를 DOM 객체에 저장하세요.' }
            },
            {
              id: 'c10', title: '프로젝트 회고',
              description: '이번 프로젝트에서 배운 점, 어려웠던 점, 다음에 개선할 점을 정리하세요.',
              difficulty: 'hard',
              starterCode: '// 프로젝트 회고를 작성하세요\n// 배운 점:\n// 어려웠던 점:\n// 개선할 점:',
              solution: '// 배운 점:\n// - HTML/CSS/JS를 통합하여 완전한 앱을 만들 수 있다\n// - DOM 조작으로 동적 UI를 만들 수 있다\n// - 이벤트 리스너로 사용자 입력을 처리한다\n//\n// 어려웠던 점:\n// - 여러 함수간 데이터 공유 (전역변수)\n// - ID 일치시키기\n// - 비동기 처리 (setTimeout)\n//\n// 개선할 점:\n// - 타이머, 난이도, 애니메이션 추가\n// - 코드 모듈화\n// - localStorage로 데이터 영속성',
              hints: ['솔직하게 적어보세요', '기술적 측면과 경험적 측면 모두 생각해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '체계적인 회고예요! 성장하는 개발자!', good: '좋은 회고예요!', partial: '더 구체적으로 적어보세요.', wrong: '배운 점, 어려운 점, 개선점을 각각 2개 이상 적으세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w45',
        title: '나만의 퀴즈 앱',
        description: 'HTML, CSS, JavaScript로 완전한 퀴즈 앱을 만드세요.',
        difficulty: 'intermediate',
        duration: '3-4시간',
        requirements: ['시작/퀴즈/결과 3개 화면', '5개 이상 문제', '점수 계산', '다시하기 기능', '반응형 디자인'],
        tech: ['HTML', 'CSS', 'JavaScript'],
        exp: 100,
        badge: '퀴즈 마스터'
      }
    },
    // ============================================================
    // Week 46: 날씨 앱 (API 연동, fetch, JSON 파싱)
    // ============================================================
    {
      id: 'week-46',
      number: 46,
      title: '날씨 앱 만들기',
      description: 'API를 활용한 날씨 정보 앱을 만들어요',
      missions: [
        {
          id: 'w46-m1',
          title: 'API란?',
          description: '외부 데이터를 가져오는 API를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 15,
          concept: 'API 소개',
          conceptExplanation: 'API(Application Programming Interface)는 다른 서비스의 데이터를 가져오는 방법이에요!',
          cstaStandard: '2-AP-18',
          learningObjectives: ['API가 무엇인지 이해하고 설명할 수 있다', 'API를 통해 외부 데이터를 가져오는 원리를 이해한다'],
          realWorldExample: '식당에서 메뉴판으로 주문하면 음식이 나오듯, API로 데이터를 요청하면 응답이 와요!',
          hints: ['💡 API는 Application Programming Interface의 약자예요', '💡 날씨, 뉴스, 영화 등 다양한 API가 있어요'],
          conceptCards: [
            { title: 'API란?', description: 'API는 프로그램끼리 대화하는 방법이에요.' },
            { title: 'API의 예시', description: '날씨 앱은 기상청 API로 날씨를, 지도 앱은 구글 맵 API로 위치를 가져와요.' },
            { title: '왜 API를 사용할까?', description: '모든 데이터를 직접 만들 필요 없이 다른 서비스의 API를 사용하면 됩니다!' }
          ],
          challenges: [
            { id: 'c1', title: 'API URL 구성하기', description: '날씨 API URL에 도시명과 API키를 포함하는 URL을 만드세요.', difficulty: 'easy', starterCode: 'const city = "seoul";\nconst apiKey = "abc123";\n// URL을 만드세요\n', solution: 'const city = "seoul";\nconst apiKey = "abc123";\nconst url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`;', hints: ['템플릿 리터럴(백틱)을 사용하세요', '${변수}로 값을 삽입해요'], estimatedMinutes: 4, feedback: { perfect: 'URL 구성을 완벽하게 했어요!', good: '잘했어요!', partial: '쿼리 파라미터가 빠졌어요.', wrong: '백틱과 ${}를 사용하여 변수를 URL에 삽입하세요.' } },
            { id: 'c2', title: 'JSON 데이터 파싱', description: '날씨 JSON 데이터에서 온도, 도시명, 날씨 설명을 추출하세요.', difficulty: 'easy', starterCode: 'const weatherData = {\n  name: "Seoul",\n  main: { temp: 22.5, humidity: 65 },\n  weather: [{ description: "맑음", icon: "01d" }]\n};\n// 온도, 도시명, 설명을 변수에 저장하세요\n', solution: 'const weatherData = {\n  name: "Seoul",\n  main: { temp: 22.5, humidity: 65 },\n  weather: [{ description: "맑음", icon: "01d" }]\n};\nconst cityName = weatherData.name;\nconst temperature = weatherData.main.temp;\nconst description = weatherData.weather[0].description;', hints: ['중첩 객체는 점(.)으로 접근해요', 'weather는 배열이므로 [0]이 필요해요'], estimatedMinutes: 5, feedback: { perfect: 'JSON 파싱을 완벽하게 했어요!', good: '데이터 접근을 잘했어요!', partial: '중첩 접근이 잘못됐어요.', wrong: 'weatherData.main.temp, weatherData.weather[0].description으로 접근하세요.' } },
            { id: 'c3', title: 'fetch 기본 사용법', description: 'fetch()로 URL을 호출하고 JSON을 콘솔에 출력하세요.', difficulty: 'easy', starterCode: '// fetch로 데이터를 가져오세요\nconst url = "https://api.example.com/weather";\n', solution: 'const url = "https://api.example.com/weather";\nfetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("에러:", error));', hints: ['fetch(url).then().then().catch() 패턴', 'response.json()으로 JSON 변환'], estimatedMinutes: 5, feedback: { perfect: 'fetch를 완벽하게 이해했어요!', good: '잘했어요!', partial: '.catch()가 빠졌어요.', wrong: 'fetch(url).then(r => r.json()).then(data => console.log(data))를 사용하세요.' } },
            { id: 'c4', title: 'async/await로 변환', description: 'fetch를 async/await 구문으로 변환하세요.', difficulty: 'medium', starterCode: 'async function getWeather() {\n  // async/await로 날씨 데이터를 가져오세요\n}', solution: 'async function getWeather() {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("에러:", error);\n  }\n}', hints: ['async 함수 안에서 await 사용', 'try/catch로 에러 처리'], estimatedMinutes: 7, feedback: { perfect: 'async/await를 완벽하게 이해했어요!', good: '잘 변환했어요!', partial: 'try/catch가 빠졌어요.', wrong: 'async function 안에서 await fetch()를 사용하세요.' } },
            { id: 'c5', title: '날씨 앱 HTML 구조', description: '도시 검색 입력창, 검색 버튼, 날씨 정보 표시 영역을 포함하는 HTML을 작성하세요.', difficulty: 'medium', starterCode: '<div id="weather-app">\n  <!-- 검색창, 버튼, 정보 영역 -->\n</div>', solution: '<div id="weather-app">\n  <h1>날씨 앱</h1>\n  <div id="search-area">\n    <input type="text" id="city-input" placeholder="도시 이름 입력">\n    <button id="search-btn">검색</button>\n  </div>\n  <div id="weather-info" style="display:none">\n    <h2 id="city-name"></h2>\n    <p id="temperature"></p>\n    <p id="description"></p>\n    <p id="humidity"></p>\n  </div>\n  <p id="error-msg" style="display:none; color:red"></p>\n</div>', hints: ['input과 button으로 검색 기능을', 'id를 붙여서 JS에서 접근할 수 있게'], estimatedMinutes: 8, feedback: { perfect: '완벽한 날씨 앱 UI예요!', good: '구조를 잘 잡았어요!', partial: '일부 요소가 빠졌어요.', wrong: '검색 input, 검색 button, 날씨 정보 표시 영역이 필요해요.' } },
            { id: 'c6', title: '날씨 데이터 화면에 표시', description: 'API에서 받은 데이터를 HTML 요소에 표시하세요.', difficulty: 'medium', starterCode: 'function displayWeather(data) {\n  // 날씨 데이터를 화면에 표시하세요\n}', solution: 'function displayWeather(data) {\n  document.getElementById("city-name").textContent = data.name;\n  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}도`;\n  document.getElementById("description").textContent = data.weather[0].description;\n  document.getElementById("humidity").textContent = `습도: ${data.main.humidity}%`;\n  document.getElementById("weather-info").style.display = "block";\n}', hints: ['textContent로 텍스트를 설정해요', 'Math.round로 온도를 반올림해요'], estimatedMinutes: 8, feedback: { perfect: '데이터 표시를 완벽하게 했어요!', good: '잘 표시했어요!', partial: '일부 데이터가 빠졌어요.', wrong: '각 요소에 textContent로 데이터를 설정하세요.' } },
            { id: 'c7', title: '검색 기능 연결', description: '검색 버튼 클릭 시 입력된 도시의 날씨를 가져오는 기능을 연결하세요.', difficulty: 'hard', starterCode: '// 검색 버튼에 이벤트를 연결하세요\n', solution: 'document.getElementById("search-btn").addEventListener("click", async () => {\n  const city = document.getElementById("city-input").value.trim();\n  if (!city) { alert("도시 이름을 입력하세요"); return; }\n  try {\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;\n    const res = await fetch(url);\n    if (!res.ok) throw new Error("도시를 찾을 수 없어요");\n    const data = await res.json();\n    displayWeather(data);\n  } catch (err) {\n    document.getElementById("error-msg").textContent = err.message;\n    document.getElementById("error-msg").style.display = "block";\n  }\n});', hints: ['.value.trim()으로 입력값을 가져와요', 'response.ok로 에러를 확인해요'], estimatedMinutes: 12, feedback: { perfect: '검색 기능을 완벽하게 연결했어요!', good: '잘 연결했어요!', partial: '에러 처리가 부족해요.', wrong: '입력값 확인 → fetch → 에러처리 → 표시 순서로 구현하세요.' } },
            { id: 'c8', title: '날씨 아이콘 표시', description: 'OpenWeatherMap 아이콘 URL을 사용하여 날씨 아이콘을 표시하세요.', difficulty: 'hard', starterCode: '// 날씨 아이콘을 img 태그로 표시하세요\nfunction showIcon(iconCode) {\n  \n}', solution: 'function showIcon(iconCode) {\n  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;\n  document.getElementById("weather-icon").src = iconUrl;\n  document.getElementById("weather-icon").alt = "날씨 아이콘";\n  document.getElementById("weather-icon").style.display = "block";\n}', hints: ['아이콘 URL: openweathermap.org/img/wn/{코드}@2x.png', 'img 요소의 src 속성을 변경해요'], estimatedMinutes: 8, feedback: { perfect: '아이콘 표시를 완벽하게 했어요!', good: '잘 표시했어요!', partial: 'alt 속성이 빠졌어요.', wrong: 'img의 src를 아이콘 URL로 설정하세요.' } },
            { id: 'c9', title: '로딩 상태와 에러 처리', description: 'API 호출 중 로딩 표시, 에러 시 사용자 친화적 메시지를 보여주세요.', difficulty: 'hard', starterCode: 'async function searchWeather(city) {\n  // 로딩 → 데이터 표시 → 에러 처리\n}', solution: 'async function searchWeather(city) {\n  const loading = document.getElementById("loading");\n  const errorMsg = document.getElementById("error-msg");\n  loading.style.display = "block";\n  errorMsg.style.display = "none";\n  try {\n    const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=kr`);\n    if (!res.ok) {\n      if (res.status === 404) throw new Error("도시를 찾을 수 없어요");\n      throw new Error("서버 오류가 발생했어요");\n    }\n    const data = await res.json();\n    displayWeather(data);\n  } catch (err) {\n    errorMsg.textContent = err.message;\n    errorMsg.style.display = "block";\n  } finally {\n    loading.style.display = "none";\n  }\n}', hints: ['finally는 성공/실패 모두 실행돼요', '404는 도시 없음, 500은 서버 에러'], estimatedMinutes: 12, feedback: { perfect: 'UX를 고려한 완벽한 에러 처리예요!', good: '로딩과 에러를 잘 처리했어요!', partial: 'finally가 빠졌어요.', wrong: 'loading 표시 → try/catch → finally로 로딩 숨기기 순서예요.' } },
            { id: 'c10', title: '날씨 앱 CSS 완성', description: '카드 디자인, 그라데이션 배경, 반응형을 포함한 날씨 앱 CSS를 작성하세요.', difficulty: 'hard', starterCode: '/* 날씨 앱 스타일 */\n#weather-app {\n  \n}', solution: '#weather-app {\n  max-width: 500px;\n  margin: 40px auto;\n  padding: 30px;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 20px;\n  color: white;\n  text-align: center;\n  font-family: sans-serif;\n}\n\n#city-input {\n  padding: 12px 20px;\n  font-size: 16px;\n  border: none;\n  border-radius: 25px;\n  width: 60%;\n}\n\n#search-btn {\n  padding: 12px 24px;\n  background: rgba(255,255,255,0.3);\n  color: white;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n}\n\n#temperature {\n  font-size: 48px;\n  font-weight: bold;\n}\n\n@media (max-width: 480px) {\n  #weather-app { margin: 10px; padding: 20px; }\n  #city-input { width: 100%; margin-bottom: 10px; }\n}', hints: ['그라데이션 배경으로 세련된 느낌을', '둥근 입력창과 버튼으로 현대적 디자인을'], estimatedMinutes: 15, feedback: { perfect: '프로 디자이너 수준의 CSS예요!', good: '스타일링을 잘했어요!', partial: '반응형이 빠졌어요.', wrong: 'linear-gradient, border-radius, @media 쿼리를 사용하세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m2', title: 'fetch로 데이터 가져오기', description: 'fetch API로 외부 데이터를 가져와요', type: 'coding', difficulty: 'intermediate', language: 'javascript', exp: 35, estimatedMinutes: 20, concept: 'fetch API',
          cstaStandard: '2-AP-18',
          learningObjectives: ['fetch()를 사용하여 API를 호출할 수 있다', 'Promise와 then 체이닝을 이해한다'],
          starterCode: '// fetch로 날씨 데이터를 가져오세요\n',
          solution: 'fetch("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=YOUR_KEY&units=metric")\n  .then(response => response.json())\n  .then(data => {\n    console.log(`온도: ${data.main.temp}도`);\n    console.log(`날씨: ${data.weather[0].description}`);\n  })\n  .catch(error => console.error("에러:", error));',
          hints: ['💡 fetch().then().then().catch() 패턴을 사용해요'],
          testCases: [{ input: 'fetch 호출', expectedOutput: '날씨 데이터 JSON 출력', description: 'API 응답을 성공적으로 받는지 확인' }],
          challenges: [
            { id: 'c1', title: 'fetch 기본 호출', description: 'fetch()로 URL을 호출하고 응답을 콘솔에 출력하세요.', difficulty: 'easy', starterCode: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\\n// .then()을 추가하세요', solution: 'fetch("https://jsonplaceholder.typicode.com/posts/1")\\n  .then(res => res.json())\\n  .then(data => console.log(data));', hints: ['.then(res => res.json())으로 JSON 변환'], estimatedMinutes: 4, feedback: { perfect: 'fetch를 잘 사용했어요!', good: '잘했어요!', partial: '.json()이 빠졌어요.', wrong: 'fetch(url).then(r => r.json()).then(d => console.log(d))' } },
            { id: 'c2', title: 'response.ok 체크', description: 'fetch 응답의 ok 속성을 확인하여 에러를 처리하세요.', difficulty: 'easy', starterCode: 'fetch(url).then(response => {\\n  // ok 체크를 추가하세요\\n});', solution: 'fetch(url).then(response => {\\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\\n  return response.json();\\n}).catch(err => console.error(err));', hints: ['response.ok는 200-299일 때 true'], estimatedMinutes: 5, feedback: { perfect: '에러 체크를 잘했어요!', good: '잘했어요!', partial: 'throw가 빠졌어요.', wrong: 'if (!response.ok) throw new Error()를 추가하세요.' } },
            { id: 'c3', title: 'async/await 사용', description: 'async/await로 fetch를 호출하세요.', difficulty: 'easy', starterCode: 'async function fetchData() {\\n  // await fetch를 사용하세요\\n}', solution: 'async function fetchData() {\\n  const response = await fetch(url);\\n  const data = await response.json();\\n  return data;\\n}', hints: ['await는 async 함수 안에서만 사용 가능'], estimatedMinutes: 5, feedback: { perfect: 'async/await를 잘 사용했어요!', good: '잘했어요!', partial: 'await가 빠졌어요.', wrong: 'async function 안에서 await fetch()를 사용하세요.' } },
            { id: 'c4', title: 'try/catch 에러 처리', description: 'async/await에 try/catch를 추가하세요.', difficulty: 'medium', starterCode: 'async function safeFetch(url) {\\n  // try/catch를 추가하세요\\n}', solution: 'async function safeFetch(url) {\\n  try {\\n    const res = await fetch(url);\\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\\n    return await res.json();\\n  } catch (err) {\\n    console.error("요청 실패:", err.message);\\n    return null;\\n  }\\n}', hints: ['try 안에서 fetch, catch에서 에러 처리'], estimatedMinutes: 7, feedback: { perfect: '에러 처리가 완벽해요!', good: '잘했어요!', partial: 'ok 체크가 빠졌어요.', wrong: 'try { await fetch } catch(err) { } 구조를 사용하세요.' } },
            { id: 'c5', title: '쿼리 파라미터 조합', description: '여러 파라미터를 URLSearchParams로 조합하세요.', difficulty: 'medium', starterCode: '// URLSearchParams를 사용하세요\\nconst params = {};', solution: 'const params = new URLSearchParams({\\n  q: "seoul",\\n  appid: "YOUR_KEY",\\n  units: "metric",\\n  lang: "kr"\\n});\\nconst url = `https://api.openweathermap.org/data/2.5/weather?${params}`;', hints: ['new URLSearchParams(객체)로 생성', '자동으로 &로 연결돼요'], estimatedMinutes: 6, feedback: { perfect: 'URLSearchParams를 잘 사용했어요!', good: '잘했어요!', partial: '파라미터가 부족해요.', wrong: 'new URLSearchParams({key: value})를 사용하세요.' } },
            { id: 'c6', title: '응답 데이터 가공', description: 'API 응답에서 필요한 데이터만 추출하는 함수를 만드세요.', difficulty: 'medium', starterCode: 'function extractWeather(apiData) {\\n  // 필요한 데이터만 반환\\n}', solution: 'function extractWeather(apiData) {\\n  return {\\n    city: apiData.name,\\n    temp: Math.round(apiData.main.temp),\\n    description: apiData.weather[0].description,\\n    humidity: apiData.main.humidity,\\n    icon: apiData.weather[0].icon\\n  };\\n}', hints: ['필요한 속성만 새 객체로 반환해요'], estimatedMinutes: 7, feedback: { perfect: '데이터 가공을 잘했어요!', good: '잘했어요!', partial: '일부 데이터가 빠졌어요.', wrong: '새 객체에 필요한 속성만 담아 반환하세요.' } },
            { id: 'c7', title: '날씨 데이터를 DOM에 표시', description: '추출된 날씨 데이터를 화면에 표시하세요.', difficulty: 'hard', starterCode: 'function displayWeather(weather) {\\n  // DOM에 표시하세요\\n}', solution: 'function displayWeather(weather) {\\n  document.getElementById("city-name").textContent = weather.city;\\n  document.getElementById("temp").textContent = `${weather.temp}도`;\\n  document.getElementById("desc").textContent = weather.description;\\n  document.getElementById("humidity").textContent = `습도 ${weather.humidity}%`;\\n  document.getElementById("weather-info").style.display = "block";\\n}', hints: ['textContent로 텍스트 설정', 'display: block으로 보이게'], estimatedMinutes: 8, feedback: { perfect: 'DOM 업데이트를 완벽하게 했어요!', good: '잘했어요!', partial: '표시 영역이 숨겨진 채로예요.', wrong: '각 요소의 textContent를 설정하고 display를 block으로 바꾸세요.' } },
            { id: 'c8', title: '검색 이벤트 연결', description: '버튼 클릭과 Enter 키 모두에서 검색이 되도록 하세요.', difficulty: 'hard', starterCode: '// 버튼 클릭 + Enter 키 검색\\n', solution: 'async function search() {\\n  const city = document.getElementById("city-input").value.trim();\\n  if (!city) return;\\n  const data = await safeFetch(`${BASE_URL}?q=${city}&appid=${KEY}&units=metric`);\\n  if (data) displayWeather(extractWeather(data));\\n}\\ndocument.getElementById("search-btn").addEventListener("click", search);\\ndocument.getElementById("city-input").addEventListener("keypress", (e) => {\\n  if (e.key === "Enter") search();\\n});', hints: ['keypress 이벤트에서 e.key === "Enter" 확인', '같은 함수를 두 이벤트에서 재사용'], estimatedMinutes: 10, feedback: { perfect: '두 가지 이벤트를 완벽하게 연결했어요!', good: '잘했어요!', partial: 'Enter 키 처리가 빠졌어요.', wrong: 'click과 keypress 두 이벤트를 모두 연결하세요.' } },
            { id: 'c9', title: '5일 예보 가져오기', description: 'forecast API로 5일치 날씨 예보를 가져오세요.', difficulty: 'hard', starterCode: 'async function getForecast(city) {\\n  // 5일 예보를 가져오세요\\n}', solution: 'async function getForecast(city) {\\n  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}&units=metric&lang=kr`;\\n  const res = await fetch(url);\\n  const data = await res.json();\\n  const daily = data.list.filter((item, i) => i % 8 === 0);\\n  return daily.map(d => ({\\n    date: d.dt_txt.split(" ")[0],\\n    temp: Math.round(d.main.temp),\\n    desc: d.weather[0].description\\n  }));\\n}', hints: ['forecast API는 3시간 간격 데이터', '8개마다 하루'], estimatedMinutes: 12, feedback: { perfect: '5일 예보를 완벽하게 가져왔어요!', good: '잘했어요!', partial: '필터링이 부족해요.', wrong: 'filter로 하루에 하나씩 추출하세요.' } },
            { id: 'c10', title: '날씨 앱 전체 통합', description: 'HTML+CSS+JS를 통합한 완전한 날씨 앱을 만드세요.', difficulty: 'hard', starterCode: '// 전체 날씨 앱을 완성하세요\\n', solution: 'const API_KEY = "YOUR_KEY";\\nconst BASE_URL = "https://api.openweathermap.org/data/2.5/weather";\\n\\nasync function searchWeather() {\\n  const city = document.getElementById("city-input").value.trim();\\n  if (!city) return;\\n  document.getElementById("loading").style.display = "block";\\n  document.getElementById("error-msg").style.display = "none";\\n  try {\\n    const res = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=kr`);\\n    if (!res.ok) throw new Error("도시를 찾을 수 없어요");\\n    const data = await res.json();\\n    displayWeather(data);\\n  } catch (err) {\\n    document.getElementById("error-msg").textContent = err.message;\\n    document.getElementById("error-msg").style.display = "block";\\n  } finally {\\n    document.getElementById("loading").style.display = "none";\\n  }\\n}', hints: ['모든 기능을 하나로 합쳐요'], estimatedMinutes: 15, feedback: { perfect: '배포 가능한 날씨 앱이에요!', good: '전체를 잘 통합했어요!', partial: '에러 처리가 부족해요.', wrong: 'fetch + displayWeather + 에러처리를 모두 포함하세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m3', title: 'async/await 사용하기', description: '비동기 코드를 깔끔하게 작성해요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 18,
          concept: 'async/await', cstaStandard: '2-AP-18',
          learningObjectives: ['async/await을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: 'async 함수 선언', description: 'async function을 선언하세요.', difficulty: 'easy', starterCode: 'async function hello() {}', solution: 'async function hello() {\n  return "안녕";\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: 'await 사용', description: 'await로 Promise를 기다리세요.', difficulty: 'easy', starterCode: 'async function wait() {}', solution: 'async function wait() {\n  const result = await fetch(url);\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: 'try/catch 추가', description: '에러를 처리하세요.', difficulty: 'easy', starterCode: 'async function safe() {}', solution: 'async function safe() {\n  try { await fetch(url); } catch(e) { console.error(e); }\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: '여러 await 순차', description: '두 API를 순서대로 호출하세요.', difficulty: 'medium', starterCode: 'async function seq() {}', solution: 'async function seq() {\n  const a = await fetch(url1);\n  const b = await fetch(url2);\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: 'Promise.all 병렬', description: '두 API를 동시에 호출하세요.', difficulty: 'medium', starterCode: 'async function par() {}', solution: 'async function par() {\n  const [a,b] = await Promise.all([fetch(url1),fetch(url2)]);\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: '응답 처리', description: 'JSON으로 변환하세요.', difficulty: 'medium', starterCode: '// 변환', solution: 'const data = await response.json();', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: '에러 타입 구분', description: '네트워크/HTTP 에러를 구분하세요.', difficulty: 'hard', starterCode: 'async function check() {}', solution: 'async function check() {\n  try {\n    const r = await fetch(url);\n    if(!r.ok) throw new Error("HTTP "+r.status);\n  } catch(e) { console.error(e); }\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: '로딩 상태', description: '로딩 표시를 추가하세요.', difficulty: 'hard', starterCode: 'async function load() {}', solution: 'async function load() {\n  showLoading();\n  try { await fetch(url); } finally { hideLoading(); }\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: '재시도 로직', description: '실패 시 3번 재시도하세요.', difficulty: 'hard', starterCode: 'async function retry(url,n) {}', solution: 'async function retry(url,n=3) {\n  for(let i=0;i<n;i++) {\n    try { return await fetch(url).then(r=>r.json()); } catch(e) { if(i===n-1) throw e; }\n  }\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: '타임아웃 구현', description: '5초 타임아웃을 추가하세요.', difficulty: 'hard', starterCode: 'async function fetchTimeout() {}', solution: 'async function fetchTimeout(url,ms=5000) {\n  const ctrl = new AbortController();\n  setTimeout(()=>ctrl.abort(),ms);\n  return fetch(url,{signal:ctrl.signal});\n}', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m4', title: '날씨 앱 UI 만들기', description: '날씨 앱의 화면을 디자인해요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 19,
          concept: '날씨 UI', cstaStandard: '2-AP-18',
          learningObjectives: ['날씨 UI을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: '검색 입력창', description: 'input과 button을 만드세요.', difficulty: 'easy', starterCode: '<div id="search"></div>', solution: '<div id="search"><input type="text" id="city" placeholder="도시"><button id="btn">검색</button></div>', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: '날씨 카드', description: '온도/설명/습도를 보여주는 카드를 만드세요.', difficulty: 'easy', starterCode: '<div class="card"></div>', solution: '<div class="card"><h2 id="temp">22도</h2><p id="desc">맑음</p><p id="hum">습도 65%</p></div>', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: '아이콘 영역', description: '날씨 아이콘 img를 추가하세요.', difficulty: 'easy', starterCode: '<!-- 아이콘 -->', solution: '<img id="icon" src="" alt="날씨 아이콘" style="display:none">', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: '카드 CSS', description: '카드에 그림자와 둥근 모서리를 적용하세요.', difficulty: 'medium', starterCode: '.card {}', solution: '.card {padding:20px;border-radius:16px;box-shadow:0 4px 15px rgba(0,0,0,0.1);}', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: '그라데이션 배경', description: '날씨에 따른 그라데이션을 적용하세요.', difficulty: 'medium', starterCode: 'body {}', solution: 'body {background:linear-gradient(135deg,#667eea,#764ba2);min-height:100vh;}', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: '반응형 레이아웃', description: '모바일에서도 잘 보이게 하세요.', difficulty: 'medium', starterCode: '@media (max-width:480px) {}', solution: '@media (max-width:480px) {.card{margin:10px;padding:15px;} input{width:100%;}}', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: '예보 리스트', description: '5일 예보를 리스트로 표시하세요.', difficulty: 'hard', starterCode: '<div id="forecast"></div>', solution: '<div id="forecast"><div class="day"><span>월</span><span>22도</span></div></div>', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: '로딩 스피너', description: 'CSS 로딩 애니메이션을 만드세요.', difficulty: 'hard', starterCode: '.spinner {}', solution: '.spinner {width:40px;height:40px;border:4px solid #eee;border-top:4px solid #667eea;border-radius:50%;animation:spin 1s linear infinite;} @keyframes spin{to{transform:rotate(360deg)}}', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: '에러 메시지 UI', description: '에러 메시지를 빨간색 박스로 표시하세요.', difficulty: 'hard', starterCode: '.error {}', solution: '.error {background:#fee;color:#c33;padding:12px;border-radius:8px;border:1px solid #fcc;}', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: '전체 UI 통합', description: '모든 UI 요소를 하나로 합치세요.', difficulty: 'hard', starterCode: '<!-- 전체 UI -->', solution: '<div id="app"><h1>날씨 앱</h1><div id="search"><input id="city" placeholder="도시"><button id="btn">검색</button></div><div id="loading" class="spinner" style="display:none"></div><div class="card" id="weather" style="display:none"><img id="icon"><h2 id="temp"></h2><p id="desc"></p></div><div id="error" class="error" style="display:none"></div></div>', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m5', title: '날씨 데이터 가져오기', description: '실제 API로 날씨를 가져와요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 20,
          concept: 'API 호출', cstaStandard: '2-AP-18',
          learningObjectives: ['API 호출을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: 'API 호출 기초 1', description: 'API 호출의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// API 호출 연습\n', solution: '// API 호출 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: 'API 호출 실습 2', description: 'API 호출을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: 'API 호출 기초 3', description: 'API 호출의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// API 호출 연습\n', solution: '// API 호출 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: 'API 호출 실습 4', description: 'API 호출을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: 'API 호출 기초 5', description: 'API 호출의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// API 호출 연습\n', solution: '// API 호출 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: 'API 호출 실습 6', description: 'API 호출을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: 'API 호출 기초 7', description: 'API 호출의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// API 호출 연습\n', solution: '// API 호출 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: 'API 호출 실습 8', description: 'API 호출을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: 'API 호출 기초 9', description: 'API 호출의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// API 호출 연습\n', solution: '// API 호출 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: 'API 호출 실습 10', description: 'API 호출을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m6', title: '날씨 정보 표시하기', description: '받은 데이터를 화면에 보여요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 21,
          concept: 'DOM 업데이트', cstaStandard: '2-AP-18',
          learningObjectives: ['DOM 업데이트을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: 'DOM 업데이트 기초 1', description: 'DOM 업데이트의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// DOM 업데이트 연습\n', solution: '// DOM 업데이트 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: 'DOM 업데이트 실습 2', description: 'DOM 업데이트을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: 'DOM 업데이트 기초 3', description: 'DOM 업데이트의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// DOM 업데이트 연습\n', solution: '// DOM 업데이트 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: 'DOM 업데이트 실습 4', description: 'DOM 업데이트을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: 'DOM 업데이트 기초 5', description: 'DOM 업데이트의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// DOM 업데이트 연습\n', solution: '// DOM 업데이트 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: 'DOM 업데이트 실습 6', description: 'DOM 업데이트을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: 'DOM 업데이트 기초 7', description: 'DOM 업데이트의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// DOM 업데이트 연습\n', solution: '// DOM 업데이트 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: 'DOM 업데이트 실습 8', description: 'DOM 업데이트을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: 'DOM 업데이트 기초 9', description: 'DOM 업데이트의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// DOM 업데이트 연습\n', solution: '// DOM 업데이트 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: 'DOM 업데이트 실습 10', description: 'DOM 업데이트을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m7', title: '검색 기능 연결', description: '도시 검색으로 날씨를 조회해요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 22,
          concept: '이벤트+API', cstaStandard: '2-AP-18',
          learningObjectives: ['이벤트+API을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: '이벤트+API 기초 1', description: '이벤트+API의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// 이벤트+API 연습\n', solution: '// 이벤트+API 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: '이벤트+API 실습 2', description: '이벤트+API을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: '이벤트+API 기초 3', description: '이벤트+API의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// 이벤트+API 연습\n', solution: '// 이벤트+API 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: '이벤트+API 실습 4', description: '이벤트+API을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: '이벤트+API 기초 5', description: '이벤트+API의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// 이벤트+API 연습\n', solution: '// 이벤트+API 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: '이벤트+API 실습 6', description: '이벤트+API을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: '이벤트+API 기초 7', description: '이벤트+API의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// 이벤트+API 연습\n', solution: '// 이벤트+API 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: '이벤트+API 실습 8', description: '이벤트+API을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: '이벤트+API 기초 9', description: '이벤트+API의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// 이벤트+API 연습\n', solution: '// 이벤트+API 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: '이벤트+API 실습 10', description: '이벤트+API을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m8', title: '에러 처리', description: '에러 상황을 우아하게 처리해요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 23,
          concept: '에러 처리', cstaStandard: '2-AP-18',
          learningObjectives: ['에러 처리을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: '에러 처리 기초 1', description: '에러 처리의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// 에러 처리 연습\n', solution: '// 에러 처리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: '에러 처리 실습 2', description: '에러 처리을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: '에러 처리 기초 3', description: '에러 처리의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// 에러 처리 연습\n', solution: '// 에러 처리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: '에러 처리 실습 4', description: '에러 처리을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: '에러 처리 기초 5', description: '에러 처리의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// 에러 처리 연습\n', solution: '// 에러 처리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: '에러 처리 실습 6', description: '에러 처리을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: '에러 처리 기초 7', description: '에러 처리의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// 에러 처리 연습\n', solution: '// 에러 처리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: '에러 처리 실습 8', description: '에러 처리을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: '에러 처리 기초 9', description: '에러 처리의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// 에러 처리 연습\n', solution: '// 에러 처리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: '에러 처리 실습 10', description: '에러 처리을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m9', title: '스타일 완성', description: '날씨 앱을 예쁘게 마무리해요',
          type: 'coding', difficulty: 'advanced', language: 'css',
          exp: 40, estimatedMinutes: 24,
          concept: 'CSS 마무리', cstaStandard: '2-AP-18',
          learningObjectives: ['CSS 마무리을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          projectCheckpoints: [
            { id: 'w46-cp1', title: 'API 연동', description: 'fetch로 날씨 데이터를 가져오나요?', criteria: ['fetch 호출', 'JSON 파싱', '에러 처리'], points: 25 },
            { id: 'w46-cp2', title: '검색 기능', description: '도시명으로 검색이 되나요?', criteria: ['입력값 처리', '검색 버튼', 'Enter키 지원'], points: 20 },
            { id: 'w46-cp3', title: '데이터 표시', description: '날씨 정보가 화면에 표시되나요?', criteria: ['온도 표시', '날씨 설명', '아이콘'], points: 20 },
            { id: 'w46-cp4', title: 'UI 디자인', description: '앱이 보기 좋나요?', criteria: ['카드 디자인', '그라데이션', '반응형'], points: 20 },
            { id: 'w46-cp5', title: '에러 처리', description: '에러가 우아하게 처리되나요?', criteria: ['로딩 표시', '에러 메시지', '빈 입력 체크'], points: 15 }
          ],
          challenges: [
            { id: 'c1', title: 'CSS 마무리 기초 1', description: 'CSS 마무리의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// CSS 마무리 연습\n', solution: '// CSS 마무리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: 'CSS 마무리 실습 2', description: 'CSS 마무리을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: 'CSS 마무리 기초 3', description: 'CSS 마무리의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// CSS 마무리 연습\n', solution: '// CSS 마무리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: 'CSS 마무리 실습 4', description: 'CSS 마무리을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: 'CSS 마무리 기초 5', description: 'CSS 마무리의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// CSS 마무리 연습\n', solution: '// CSS 마무리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: 'CSS 마무리 실습 6', description: 'CSS 마무리을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: 'CSS 마무리 기초 7', description: 'CSS 마무리의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// CSS 마무리 연습\n', solution: '// CSS 마무리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: 'CSS 마무리 실습 8', description: 'CSS 마무리을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: 'CSS 마무리 기초 9', description: 'CSS 마무리의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// CSS 마무리 연습\n', solution: '// CSS 마무리 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: 'CSS 마무리 실습 10', description: 'CSS 마무리을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w46-m10', title: 'API 활용 퀴즈', description: 'API 지식을 점검해요',
          type: 'quiz', difficulty: 'intermediate', language: 'javascript',
          exp: 20, estimatedMinutes: 25,
          concept: 'API 복습', cstaStandard: '2-AP-18',
          learningObjectives: ['API 복습을 이해하고 구현할 수 있다'],
          hints: ['💡 단계별로 접근하세요'],
          challenges: [
            { id: 'c1', title: 'API 복습 기초 1', description: 'API 복습의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// API 복습 연습\n', solution: '// API 복습 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c2', title: 'API 복습 실습 2', description: 'API 복습을 직접 구현하세요.', difficulty: 'easy', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c3', title: 'API 복습 기초 3', description: 'API 복습의 기본을 연습하세요.', difficulty: 'easy', starterCode: '// API 복습 연습\n', solution: '// API 복습 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c4', title: 'API 복습 실습 4', description: 'API 복습을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c5', title: 'API 복습 기초 5', description: 'API 복습의 기본을 연습하세요.', difficulty: 'medium', starterCode: '// API 복습 연습\n', solution: '// API 복습 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c6', title: 'API 복습 실습 6', description: 'API 복습을 직접 구현하세요.', difficulty: 'medium', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c7', title: 'API 복습 기초 7', description: 'API 복습의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// API 복습 연습\n', solution: '// API 복습 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c8', title: 'API 복습 실습 8', description: 'API 복습을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c9', title: 'API 복습 기초 9', description: 'API 복습의 기본을 연습하세요.', difficulty: 'hard', starterCode: '// API 복습 연습\n', solution: '// API 복습 완성!\nconsole.log("완료");', hints: ['단계별로 접근하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } },
            { id: 'c10', title: 'API 복습 실습 10', description: 'API 복습을 직접 구현하세요.', difficulty: 'hard', starterCode: '// 구현하세요\n', solution: '// 구현 완료!', hints: ['단계별로 접근하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '조금 더 수정하세요.', wrong: '다시 시도해보세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
      ],
      project: {
        id: 'project-w46',
        title: '실시간 날씨 앱',
        description: 'API를 활용하여 실시간 날씨를 보여주는 웹 앱을 만드세요.',
        difficulty: 'intermediate',
        duration: '4-5시간',
        requirements: ['도시 검색 기능', 'API 연동', '날씨 정보 표시', '에러 처리', '반응형 디자인'],
        tech: ['HTML', 'CSS', 'JavaScript', 'Fetch API'],
        exp: 120,
        badge: 'API 마스터'
      }
    },
    // ============================================================
    // Week 47: 소셜 미디어 UI 클론 (반응형, 컴포넌트 구조)
    // ============================================================
    {
      id: 'week-47',
      number: 47,
      title: '소셜 미디어 UI 클론',
      description: '인스타그램 스타일의 반응형 소셜 미디어 UI를 만들어요',
      missions: [
        {
          id: 'w47-m1', title: '소셜 미디어 UI 분석', description: '인스타그램/트위터 UI를 분석해요',
          type: 'interactive-lesson', difficulty: 'intermediate', language: 'html',
          exp: 25, estimatedMinutes: 14,
          concept: 'UI 분석', cstaStandard: '2-AP-17',
          learningObjectives: ['UI 분석을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '인스타그램 레이아웃 분석',
              description: '인스타그램의 3단 레이아웃(헤더/피드/사이드바)을 HTML 주석으로 구분해서 작성하세요.',
              difficulty: 'easy',
              starterCode: '<!-- 인스타그램 레이아웃을 분석하세요 -->\n<div id="app">\n  <!-- 영역 1: ??? -->\n  <!-- 영역 2: ??? -->\n  <!-- 영역 3: ??? -->\n</div>',
              solution: '<div id="app">\n  <!-- 영역 1: 상단 헤더 (로고, 검색, 아이콘) -->\n  <header class="top-header"></header>\n  <!-- 영역 2: 메인 피드 (게시물 목록) -->\n  <main class="feed"></main>\n  <!-- 영역 3: 사이드바 (추천, 프로필) -->\n  <aside class="sidebar"></aside>\n</div>',
              hints: ['인스타그램 웹 버전을 떠올려보세요', '상단, 중앙, 우측 세 영역이 있어요'],
              estimatedMinutes: 3,
              feedback: { perfect: '레이아웃 구조를 정확하게 파악했어요!', good: '좋아요! 대부분의 영역을 잘 구분했어요.', partial: '영역이 빠졌어요. 헤더/피드/사이드바를 모두 포함하세요.', wrong: '인스타그램은 상단 헤더, 중앙 피드, 우측 사이드바로 나뉘어요.' }
            },
            {
              id: 'c2', title: '트위터 카드 구조 분석',
              description: '트위터(X) 게시물 하나의 HTML 구조를 작성하세요. 프로필 이미지, 사용자명, 내용, 액션 버튼이 포함되어야 합니다.',
              difficulty: 'easy',
              starterCode: '<article class="tweet">\n  <!-- 트윗 구조를 완성하세요 -->\n</article>',
              solution: '<article class="tweet">\n  <img class="avatar" src="user.jpg" alt="프로필">\n  <div class="tweet-content">\n    <div class="user-info">\n      <strong>사용자</strong>\n      <span>@username</span>\n    </div>\n    <p>트윗 내용입니다</p>\n    <div class="actions">\n      <button>💬 3</button>\n      <button>🔁 5</button>\n      <button>❤️ 12</button>\n    </div>\n  </div>\n</article>',
              hints: ['좌측에 아바타, 우측에 내용이 배치돼요', '하단에 댓글/리트윗/좋아요 버튼이 있어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '트윗 구조를 완벽하게 분석했어요!', good: '좋아요! 주요 요소들이 잘 포함됐어요.', partial: '프로필 이미지나 액션 버튼이 빠졌어요.', wrong: '트윗은 아바타 + 내용(유저정보 + 텍스트 + 액션)으로 구성돼요.' }
            },
            {
              id: 'c3', title: 'SNS 공통 패턴 찾기',
              description: '인스타그램과 트위터에서 공통적으로 사용하는 UI 패턴을 HTML 주석으로 3개 이상 나열하세요.',
              difficulty: 'easy',
              starterCode: '<!-- SNS 앱들의 공통 UI 패턴 -->\n<!-- 패턴 1: ??? -->\n<!-- 패턴 2: ??? -->\n<!-- 패턴 3: ??? -->',
              solution: '<!-- SNS 앱들의 공통 UI 패턴 -->\n<!-- 패턴 1: 프로필 아바타 (원형 이미지) -->\n<!-- 패턴 2: 좋아요/하트 토글 버튼 -->\n<!-- 패턴 3: 무한 스크롤 피드 -->\n<!-- 패턴 4: 상단 고정 네비게이션 -->\n<!-- 패턴 5: 알림 배지 (숫자 표시) -->',
              hints: ['프로필, 좋아요, 피드 같은 공통 요소를 생각해보세요'],
              estimatedMinutes: 3,
              feedback: { perfect: '공통 패턴을 정확히 파악했어요!', good: '좋은 분석이에요!', partial: '좀 더 구체적인 UI 패턴을 찾아보세요.', wrong: '프로필 아바타, 좋아요 버튼, 피드 스크롤은 모든 SNS에 있어요.' }
            },
            {
              id: 'c4', title: '피드 카드 HTML 구조',
              description: 'SNS 게시물 카드의 완전한 HTML을 작성하세요. 헤더(아바타+이름), 이미지, 액션바, 좋아요 수, 설명을 포함합니다.',
              difficulty: 'medium',
              starterCode: '<div class="post-card">\n  <!-- 게시물 헤더 -->\n  \n  <!-- 게시물 이미지 -->\n  \n  <!-- 액션 바 -->\n  \n  <!-- 좋아요 수 -->\n  \n  <!-- 설명 -->\n</div>',
              solution: '<div class="post-card">\n  <div class="post-header">\n    <img class="avatar" src="user.jpg" alt="">\n    <span class="username">코딩학생</span>\n  </div>\n  <img class="post-image" src="photo.jpg" alt="게시물">\n  <div class="action-bar">\n    <button class="like-btn">♡</button>\n    <button class="comment-btn">💬</button>\n    <button class="share-btn">📤</button>\n  </div>\n  <p class="likes"><strong>좋아요 42개</strong></p>\n  <p class="caption"><strong>코딩학생</strong> 오늘의 코딩 결과물!</p>\n</div>',
              hints: ['인스타그램 게시물 구조를 참고하세요', '시멘틱한 HTML 태그를 사용하세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '실제 SNS와 동일한 구조예요!', good: '좋아요! 핵심 요소가 잘 들어있어요.', partial: '액션바나 좋아요 수가 빠졌어요.', wrong: '게시물은 헤더/이미지/액션바/좋아요/설명 순으로 구성돼요.' }
            },
            {
              id: 'c5', title: '스토리 바 만들기',
              description: '인스타그램 스토리 바를 HTML로 만드세요. 원형 아바타 5개가 가로로 나열되어야 합니다.',
              difficulty: 'medium',
              starterCode: '<div class="stories">\n  <!-- 스토리 아이템 5개 -->\n</div>',
              solution: '<div class="stories">\n  <div class="story-item">\n    <div class="story-ring"><img src="u1.jpg" alt=""></div>\n    <span>나</span>\n  </div>\n  <div class="story-item">\n    <div class="story-ring"><img src="u2.jpg" alt=""></div>\n    <span>친구1</span>\n  </div>\n  <div class="story-item">\n    <div class="story-ring"><img src="u3.jpg" alt=""></div>\n    <span>친구2</span>\n  </div>\n  <div class="story-item">\n    <div class="story-ring"><img src="u4.jpg" alt=""></div>\n    <span>친구3</span>\n  </div>\n  <div class="story-item">\n    <div class="story-ring"><img src="u5.jpg" alt=""></div>\n    <span>친구4</span>\n  </div>\n</div>',
              hints: ['각 스토리는 원형 이미지 + 이름으로 구성돼요', '첫 번째는 내 스토리예요'],
              estimatedMinutes: 5,
              feedback: { perfect: '스토리 바를 완벽하게 구현했어요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '아이템 구조를 통일해주세요.', wrong: '각 스토리 아이템에 이미지와 이름이 필요해요.' }
            },
            {
              id: 'c6', title: '스토리 바 CSS',
              description: '스토리 바의 CSS를 작성하세요. 가로 스크롤, 원형 아바타, 그라데이션 테두리를 포함합니다.',
              difficulty: 'medium',
              starterCode: '.stories {\n  /* 가로 스크롤 */\n}\n.story-item {\n  /* 스토리 아이템 */\n}\n.story-ring {\n  /* 그라데이션 테두리 */\n}\n.story-ring img {\n  /* 원형 이미지 */\n}',
              solution: '.stories {\n  display: flex;\n  gap: 16px;\n  padding: 16px;\n  overflow-x: auto;\n  border-bottom: 1px solid #eee;\n}\n.story-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 64px;\n}\n.story-ring {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  padding: 3px;\n  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);\n}\n.story-ring img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 2px solid white;\n  object-fit: cover;\n}',
              hints: ['overflow-x: auto로 가로 스크롤을 만들어요', 'linear-gradient로 인스타 그라데이션을 만들어요'],
              estimatedMinutes: 6,
              feedback: { perfect: '인스타그램 스토리와 똑같아요!', good: '잘했어요! 핵심 스타일이 적용됐어요.', partial: '그라데이션 테두리나 원형 처리를 확인하세요.', wrong: 'border-radius: 50%로 원형, linear-gradient로 테두리를 만들어요.' }
            },
            {
              id: 'c7', title: '하단 탭 네비게이션',
              description: '모바일 SNS의 하단 탭 바를 만드세요. 홈/검색/추가/좋아요/프로필 5개 아이콘이 필요합니다.',
              difficulty: 'hard',
              starterCode: '<nav class="bottom-nav">\n  <!-- 5개 탭 -->\n</nav>\n\n<style>\n.bottom-nav {\n  /* 하단 고정 */\n}\n</style>',
              solution: '<nav class="bottom-nav">\n  <a href="#" class="tab active">🏠</a>\n  <a href="#" class="tab">🔍</a>\n  <a href="#" class="tab">➕</a>\n  <a href="#" class="tab">♡</a>\n  <a href="#" class="tab">👤</a>\n</nav>\n\n<style>\n.bottom-nav {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: space-around;\n  padding: 10px 0;\n  background: white;\n  border-top: 1px solid #eee;\n  z-index: 100;\n}\n.tab { font-size: 24px; text-decoration: none; }\n.tab.active { color: #000; }\n</style>',
              hints: ['position: fixed로 하단 고정', 'justify-content: space-around로 균등 배치'],
              estimatedMinutes: 7,
              feedback: { perfect: '모바일 탭 바를 완벽하게 구현했어요!', good: '좋아요! 하단 고정이 잘 됐어요.', partial: 'position: fixed와 bottom: 0을 확인하세요.', wrong: '하단 탭은 position: fixed; bottom: 0으로 고정해요.' }
            },
            {
              id: 'c8', title: '알림 배지 만들기',
              description: '아이콘 위에 빨간 숫자 배지를 표시하세요. position: absolute를 활용합니다.',
              difficulty: 'hard',
              starterCode: '<div class="icon-wrapper">\n  <span class="icon">♡</span>\n  <!-- 배지 추가 -->\n</div>\n\n<style>\n.icon-wrapper { /* ??? */ }\n.badge { /* ??? */ }\n</style>',
              solution: '<div class="icon-wrapper">\n  <span class="icon">♡</span>\n  <span class="badge">3</span>\n</div>\n\n<style>\n.icon-wrapper {\n  position: relative;\n  display: inline-block;\n  font-size: 24px;\n}\n.badge {\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  background: #ff3b30;\n  color: white;\n  font-size: 11px;\n  min-width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n}\n</style>',
              hints: ['부모는 position: relative, 배지는 position: absolute', 'top과 right에 음수값을 주면 아이콘 밖으로 나와요'],
              estimatedMinutes: 7,
              feedback: { perfect: '알림 배지가 완벽해요!', good: '좋아요! 위치가 잘 잡혔어요.', partial: 'position: relative/absolute 관계를 확인하세요.', wrong: '부모에 relative, 배지에 absolute를 설정하세요.' }
            },
            {
              id: 'c9', title: 'SNS 전체 레이아웃 조합',
              description: '헤더 + 스토리 + 피드 + 하단탭을 하나로 합친 SNS 레이아웃을 완성하세요.',
              difficulty: 'hard',
              starterCode: '<div id="sns-app">\n  <!-- 전체 레이아웃을 조합하세요 -->\n</div>',
              solution: '<div id="sns-app">\n  <header class="top-header">\n    <h1 class="logo">MySNS</h1>\n    <div class="header-icons">\n      <span class="icon-wrapper">♡<span class="badge">3</span></span>\n      <span>📤</span>\n    </div>\n  </header>\n  <div class="stories">\n    <div class="story-item"><div class="story-ring"><img src="u1.jpg" alt=""></div><span>나</span></div>\n  </div>\n  <main class="feed">\n    <article class="post-card">\n      <div class="post-header"><img class="avatar" src="u.jpg"><span>user1</span></div>\n      <img class="post-image" src="p.jpg" alt="">\n      <div class="action-bar"><button>♡</button><button>💬</button><button>📤</button></div>\n      <p><strong>좋아요 10개</strong></p>\n    </article>\n  </main>\n  <nav class="bottom-nav"><a>🏠</a><a>🔍</a><a>➕</a><a>♡</a><a>👤</a></nav>\n</div>',
              hints: ['위에서 아래로 헤더→스토리→피드→탭바 순서', '각 섹션을 시멘틱 태그로 구분하세요'],
              estimatedMinutes: 8,
              feedback: { perfect: 'SNS 전체 레이아웃을 완벽하게 조합했어요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '빠진 섹션이 있어요. 4개 모두 포함하세요.', wrong: '헤더/스토리/피드/하단탭 4개 섹션이 모두 필요해요.' }
            },
            {
              id: 'c10', title: 'SNS 레이아웃 CSS 완성',
              description: 'SNS 앱 레이아웃의 CSS를 작성하세요. 상단/하단 고정, 피드 스크롤, 반응형을 포함합니다.',
              difficulty: 'hard',
              starterCode: '* { box-sizing: border-box; margin: 0; }\n\n.top-header { /* ??? */ }\n.feed { /* ??? */ }\n.bottom-nav { /* ??? */ }',
              solution: '* { box-sizing: border-box; margin: 0; }\nbody { font-family: -apple-system, sans-serif; }\n\n.top-header {\n  position: fixed; top: 0; left: 0; right: 0;\n  height: 54px; display: flex; justify-content: space-between;\n  align-items: center; padding: 0 16px;\n  background: white; border-bottom: 1px solid #eee; z-index: 100;\n}\n.feed {\n  margin-top: 54px; margin-bottom: 50px;\n  max-width: 614px; margin-left: auto; margin-right: auto;\n}\n.bottom-nav {\n  position: fixed; bottom: 0; left: 0; right: 0;\n  display: flex; justify-content: space-around;\n  padding: 10px; background: white;\n  border-top: 1px solid #eee; z-index: 100;\n}',
              hints: ['상단/하단 모두 position: fixed', 'feed에 margin-top/bottom으로 고정 영역만큼 여백을 줘요'],
              estimatedMinutes: 8,
              feedback: { perfect: 'CSS 레이아웃이 완벽해요!', good: '잘했어요! 핵심 스타일이 잘 적용됐어요.', partial: '고정 요소의 여백 처리를 확인하세요.', wrong: 'header와 nav를 fixed로 고정하고 feed에 margin을 줘야 해요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m2', title: '헤더 네비게이션', description: '고정 헤더와 네비게이션을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 16,
          concept: 'Flexbox 레이아웃', cstaStandard: '2-AP-17',
          learningObjectives: ['Flexbox 레이아웃을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'Flexbox 네비게이션 기초', difficulty: 'easy',
              description: 'display: flex를 사용해서 네비게이션 아이템을 가로로 배치하세요.',
              starterCode: `<!-- 네비게이션을 Flexbox로 만들기 -->
<nav class="navbar">
  <div class="logo">MySNS</div>
  <ul class="nav-links">
    <li><a href="#">홈</a></li>
    <li><a href="#">탐색</a></li>
    <li><a href="#">알림</a></li>
  </ul>
</nav>

<style>
.navbar {
  /* TODO: Flexbox로 가로 배치하고 양쪽 끝 정렬 */
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.nav-links {
  /* TODO: 리스트를 가로로 배치 */
  list-style: none;
}
.nav-links li { margin-left: 20px; }
.nav-links a { text-decoration: none; color: #262626; }
</style>`,
              solution: `<nav class="navbar">
  <div class="logo">MySNS</div>
  <ul class="nav-links">
    <li><a href="#">홈</a></li>
    <li><a href="#">탐색</a></li>
    <li><a href="#">알림</a></li>
  </ul>
</nav>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-links li { margin-left: 20px; }
.nav-links a { text-decoration: none; color: #262626; }
</style>`,
              hints: [
                'display: flex를 부모 요소에 적용하면 자식들이 가로로 배치됩니다',
                'justify-content: space-between은 첫 번째와 마지막 아이템을 양 끝에 배치합니다',
                'align-items: center로 세로 중앙 정렬을 할 수 있어요'
              ],
              estimatedMinutes: 5,
              feedback: {
                perfect: 'Flexbox 완벽 이해! justify-content와 align-items를 정확히 사용했어요! 🎯',
                good: 'Flexbox 적용은 맞아요! space-between으로 간격을 더 개선해보세요.',
                partial: 'display: flex는 맞지만 정렬 속성이 빠졌어요. justify-content를 추가해보세요.',
                wrong: 'display: flex를 .navbar에 추가하는 것부터 시작해보세요!'
              }
            },
            {
              id: 'c2', title: '검색 바 추가', difficulty: 'easy',
              description: '네비게이션 가운데에 검색 입력 필드를 추가하세요.',
              starterCode: `<!-- 검색 바가 있는 네비게이션 -->
<nav class="navbar">
  <div class="logo">MySNS</div>
  <!-- TODO: 검색 바 추가 -->
  <div class="nav-icons">
    <span>🏠</span>
    <span>💬</span>
    <span>👤</span>
  </div>
</nav>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.search-bar {
  /* TODO: 검색 바 스타일링 */
}
.search-bar input {
  /* TODO: 입력 필드 스타일링 */
}
</style>`,
              solution: `<nav class="navbar">
  <div class="logo">MySNS</div>
  <div class="search-bar">
    <input type="text" placeholder="검색">
  </div>
  <div class="nav-icons">
    <span>🏠</span>
    <span>💬</span>
    <span>👤</span>
  </div>
</nav>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.search-bar {
  flex: 0 1 250px;
}
.search-bar input {
  width: 100%;
  padding: 8px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  background: #fafafa;
  font-size: 14px;
  outline: none;
}
.search-bar input:focus {
  border-color: #a8a8a8;
}
</style>`,
              hints: [
                'div.search-bar 안에 input 요소를 넣으세요',
                'flex: 0 1 250px로 검색 바의 기본 크기를 설정할 수 있어요',
                'border-radius로 둥근 모서리를 만드세요'
              ],
              estimatedMinutes: 7,
              feedback: {
                perfect: '검색 바가 완벽하게 중앙에 배치되었어요! 스타일링도 깔끔합니다! ✨',
                good: '검색 바 위치는 좋아요! CSS 스타일링을 더 다듬어보세요.',
                partial: 'input 요소는 잘 추가했어요. flex 속성으로 크기를 조절해보세요.',
                wrong: '<div class="search-bar"><input> 구조를 로고와 아이콘 사이에 추가하세요.'
              }
            },
            {
              id: 'c3', title: '고정 헤더 만들기', difficulty: 'easy',
              description: 'position: fixed로 스크롤해도 고정되는 헤더를 만드세요.',
              starterCode: `<!-- 고정 헤더 -->
<header class="header">
  <div class="logo">MySNS</div>
  <nav class="nav-links">
    <a href="#">홈</a>
    <a href="#">탐색</a>
  </nav>
</header>
<main class="content">
  <p>스크롤 테스트용 콘텐츠...</p>
  <p>아래로 스크롤해보세요!</p>
</main>

<style>
.header {
  /* TODO: 화면 상단에 고정 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.content {
  /* TODO: 헤더 높이만큼 상단 여백 추가 */
}
</style>`,
              solution: `<header class="header">
  <div class="logo">MySNS</div>
  <nav class="nav-links">
    <a href="#">홈</a>
    <a href="#">탐색</a>
  </nav>
</header>
<main class="content">
  <p>스크롤 테스트용 콘텐츠...</p>
  <p>아래로 스크롤해보세요!</p>
</main>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
  z-index: 100;
}
.content {
  margin-top: 60px;
  padding: 20px;
}
</style>`,
              hints: [
                'position: fixed는 스크롤과 관계없이 화면에 고정됩니다',
                'top: 0, left: 0, right: 0으로 화면 상단 전체를 차지하게 하세요',
                'z-index를 높게 설정해야 다른 콘텐츠 위에 표시됩니다',
                'main에 margin-top을 헤더 높이만큼 주어야 콘텐츠가 가려지지 않아요'
              ],
              estimatedMinutes: 8,
              feedback: {
                perfect: 'position: fixed + z-index + margin-top 모두 완벽! 실제 SNS처럼 작동해요! 🎉',
                good: 'fixed 헤더는 잘 만들었어요! content의 margin-top도 확인해보세요.',
                partial: 'position: fixed는 맞아요! top, left, right 값을 추가해보세요.',
                wrong: '.header에 position: fixed를 추가하는 것부터 시작하세요.'
              }
            },
            {
              id: 'c4', title: '네비게이션 아이콘', difficulty: 'medium',
              description: '텍스트 대신 아이콘으로 네비게이션을 만들고 hover 효과를 추가하세요.',
              starterCode: `<!-- 아이콘 네비게이션 -->
<nav class="icon-nav">
  <a href="#" class="nav-item active">
    <span class="icon">🏠</span>
    <span class="label">홈</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">🔍</span>
    <span class="label">탐색</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">➕</span>
    <span class="label">만들기</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">❤️</span>
    <span class="label">알림</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">👤</span>
    <span class="label">프로필</span>
  </a>
</nav>

<style>
.icon-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: white;
  border-top: 1px solid #dbdbdb;
}
.nav-item {
  /* TODO: 세로 중앙 정렬, 텍스트 꾸미기 제거 */
  text-decoration: none;
  color: #262626;
}
.icon { font-size: 24px; }
.label {
  /* TODO: 작은 글씨, 아이콘 아래 배치 */
}
.nav-item:hover {
  /* TODO: hover 효과 */
}
.nav-item.active {
  /* TODO: 활성 탭 스타일 */
}
</style>`,
              solution: `<nav class="icon-nav">
  <a href="#" class="nav-item active">
    <span class="icon">🏠</span>
    <span class="label">홈</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">🔍</span>
    <span class="label">탐색</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">➕</span>
    <span class="label">만들기</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">❤️</span>
    <span class="label">알림</span>
  </a>
  <a href="#" class="nav-item">
    <span class="icon">👤</span>
    <span class="label">프로필</span>
  </a>
</nav>

<style>
.icon-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: white;
  border-top: 1px solid #dbdbdb;
}
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #8e8e8e;
  transition: color 0.2s;
}
.icon { font-size: 24px; }
.label {
  font-size: 10px;
  margin-top: 2px;
}
.nav-item:hover {
  color: #262626;
  transform: scale(1.1);
}
.nav-item.active {
  color: #262626;
  font-weight: bold;
}
</style>`,
              hints: [
                'flex-direction: column으로 아이콘과 라벨을 세로로 배치하세요',
                'transition 속성으로 부드러운 hover 효과를 만들 수 있어요',
                'active 클래스에 다른 색상이나 font-weight를 적용하세요'
              ],
              estimatedMinutes: 10,
              feedback: {
                perfect: '아이콘 네비게이션이 인스타그램처럼 완벽해요! hover 효과도 훌륭합니다! 📱',
                good: '좋은 구조예요! transition을 추가하면 더 부드러워질 거예요.',
                partial: 'flex-direction: column은 잘 적용했어요! active 상태도 구분해보세요.',
                wrong: '.nav-item에 flex-direction: column을 적용해서 세로 배치부터 해보세요.'
              }
            },
            {
              id: 'c5', title: '드롭다운 메뉴', difficulty: 'medium',
              description: '프로필 아이콘 클릭 시 나타나는 드롭다운 메뉴를 만드세요.',
              starterCode: `<!-- 드롭다운 메뉴 -->
<div class="profile-menu">
  <button class="profile-btn" onclick="toggleDropdown()">
    <img src="avatar.png" class="mini-avatar" alt="프로필">
  </button>
  <div class="dropdown" id="dropdown">
    <a href="#">👤 프로필</a>
    <a href="#">⚙️ 설정</a>
    <a href="#">📌 저장됨</a>
    <hr>
    <a href="#">🚪 로그아웃</a>
  </div>
</div>

<style>
.profile-menu { position: relative; }
.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
}
.mini-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.dropdown {
  /* TODO: 숨겨진 상태, 절대 위치 */
  display: none;
}
.dropdown.show {
  /* TODO: 보이는 상태 */
}
.dropdown a {
  /* TODO: 링크 스타일 */
}
.dropdown a:hover {
  /* TODO: hover 효과 */
}
</style>

<script>
function toggleDropdown() {
  // TODO: dropdown의 show 클래스 토글
}
</script>`,
              solution: `<div class="profile-menu">
  <button class="profile-btn" onclick="toggleDropdown()">
    <img src="avatar.png" class="mini-avatar" alt="프로필">
  </button>
  <div class="dropdown" id="dropdown">
    <a href="#">👤 프로필</a>
    <a href="#">⚙️ 설정</a>
    <a href="#">📌 저장됨</a>
    <hr>
    <a href="#">🚪 로그아웃</a>
  </div>
</div>

<style>
.profile-menu { position: relative; }
.profile-btn {
  background: none;
  border: none;
  cursor: pointer;
}
.mini-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  min-width: 200px;
  padding: 8px 0;
  z-index: 100;
}
.dropdown.show {
  display: block;
}
.dropdown a {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: #262626;
  font-size: 14px;
}
.dropdown a:hover {
  background: #fafafa;
}
.dropdown hr {
  border: none;
  border-top: 1px solid #efefef;
  margin: 4px 0;
}
</style>

<script>
function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('show');
}
</script>`,
              hints: [
                'position: absolute + top: 100%로 버튼 바로 아래에 표시하세요',
                'classList.toggle("show")로 보이기/숨기기를 전환하세요',
                'box-shadow로 그림자를 추가하면 카드처럼 떠 보여요'
              ],
              estimatedMinutes: 12,
              feedback: {
                perfect: '드롭다운이 완벽하게 작동해요! 위치, 그림자, 토글 모두 훌륭합니다! 🎯',
                good: '잘 작동해요! box-shadow와 border-radius를 추가하면 더 예뻐져요.',
                partial: 'toggle은 잘 했어요! position: absolute로 위치를 잡아보세요.',
                wrong: '.dropdown에 position: absolute, display: none부터 설정하세요.'
              }
            },
            {
              id: 'c6', title: '반응형 네비게이션', difficulty: 'medium',
              description: '@media 쿼리로 모바일에서는 하단 탭, 데스크톱에서는 상단 헤더를 보여주세요.',
              starterCode: `<!-- 반응형 네비게이션 -->
<header class="top-nav">
  <div class="logo">MySNS</div>
  <input type="text" class="search" placeholder="검색">
  <div class="icons">🏠 💬 👤</div>
</header>

<nav class="bottom-nav">
  <a href="#">🏠</a>
  <a href="#">🔍</a>
  <a href="#">➕</a>
  <a href="#">❤️</a>
  <a href="#">👤</a>
</nav>

<style>
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.bottom-nav a {
  font-size: 24px;
  text-decoration: none;
}

/* TODO: 모바일(768px 이하)에서 top-nav 숨기기, bottom-nav 보이기 */
/* TODO: 데스크톱(768px 초과)에서 top-nav 보이기, bottom-nav 숨기기 */
</style>`,
              solution: `<header class="top-nav">
  <div class="logo">MySNS</div>
  <input type="text" class="search" placeholder="검색">
  <div class="icons">🏠 💬 👤</div>
</header>

<nav class="bottom-nav">
  <a href="#">🏠</a>
  <a href="#">🔍</a>
  <a href="#">➕</a>
  <a href="#">❤️</a>
  <a href="#">👤</a>
</nav>

<style>
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
}
.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: white;
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.bottom-nav a {
  font-size: 24px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .top-nav { display: none; }
  .bottom-nav { display: flex; }
}

@media (min-width: 769px) {
  .top-nav { display: flex; }
  .bottom-nav { display: none; }
}
</style>`,
              hints: [
                '@media (max-width: 768px)는 모바일 화면 조건입니다',
                'display: none으로 요소를 숨기고 display: flex로 보여줄 수 있어요',
                '모바일에서는 bottom-nav를, 데스크톱에서는 top-nav를 보여주세요'
              ],
              estimatedMinutes: 12,
              feedback: {
                perfect: '반응형 네비게이션 완벽! 모바일/데스크톱 전환이 자연스럽습니다! 📱💻',
                good: '@media 쿼리 잘 사용했어요! breakpoint 값을 확인해보세요.',
                partial: '한쪽은 잘 했어요! 반대쪽 화면도 처리해보세요.',
                wrong: '@media (max-width: 768px) { } 블록부터 추가해보세요.'
              }
            },
            {
              id: 'c7', title: '알림 배지', difficulty: 'hard',
              description: '네비게이션 아이콘 위에 빨간 알림 배지를 CSS로 만드세요.',
              starterCode: `<!-- 알림 배지 -->
<nav class="nav">
  <a href="#" class="nav-icon">
    🏠
  </a>
  <a href="#" class="nav-icon">
    💬
    <span class="badge">3</span>
  </a>
  <a href="#" class="nav-icon">
    ❤️
    <span class="badge">12</span>
  </a>
  <a href="#" class="nav-icon">
    👤
  </a>
</nav>

<style>
.nav {
  display: flex;
  gap: 30px;
  padding: 15px;
}
.nav-icon {
  /* TODO: position relative로 배지의 기준점 설정 */
  font-size: 24px;
  text-decoration: none;
}
.badge {
  /* TODO: 빨간 원형 배지, 절대 위치 */
}
</style>`,
              solution: `<nav class="nav">
  <a href="#" class="nav-icon">
    🏠
  </a>
  <a href="#" class="nav-icon">
    💬
    <span class="badge">3</span>
  </a>
  <a href="#" class="nav-icon">
    ❤️
    <span class="badge">12</span>
  </a>
  <a href="#" class="nav-icon">
    👤
  </a>
</nav>

<style>
.nav {
  display: flex;
  gap: 30px;
  padding: 15px;
}
.nav-icon {
  position: relative;
  font-size: 24px;
  text-decoration: none;
}
.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff3040;
  color: white;
  font-size: 11px;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}
</style>`,
              hints: [
                'position: relative를 부모에, position: absolute를 배지에 적용하세요',
                'top과 right에 음수 값을 주면 아이콘 바깥으로 약간 튀어나와요',
                'border-radius를 높이의 절반으로 하면 원형이 됩니다',
                'min-width를 사용하면 한 자리/두 자리 숫자 모두 예쁘게 표시돼요'
              ],
              estimatedMinutes: 15,
              feedback: {
                perfect: '알림 배지가 완벽해요! 실제 인스타그램 배지와 똑같습니다! 🔴',
                good: '잘 배치했어요! min-width로 다양한 숫자에 대응해보세요.',
                partial: 'position: absolute는 맞아요! top/right 값을 음수로 조정해보세요.',
                wrong: '.nav-icon에 position: relative를 먼저 추가하세요.'
              }
            },
            {
              id: 'c8', title: '햄버거 메뉴 토글', difficulty: 'hard',
              description: '햄버거 버튼 클릭 시 사이드 메뉴가 슬라이드되는 모바일 메뉴를 만드세요.',
              starterCode: `<!-- 모바일 사이드 메뉴 -->
<button class="hamburger" onclick="toggleMenu()">
  <span></span><span></span><span></span>
</button>
<div class="overlay" id="overlay" onclick="toggleMenu()"></div>
<aside class="side-menu" id="sideMenu">
  <div class="menu-header">
    <img src="avatar.png" class="avatar">
    <h3>사용자이름</h3>
  </div>
  <nav>
    <a href="#">🏠 홈</a>
    <a href="#">🔍 탐색</a>
    <a href="#">❤️ 활동</a>
    <a href="#">⚙️ 설정</a>
  </nav>
</aside>

<style>
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: #262626;
  border-radius: 2px;
}
.overlay {
  /* TODO: 전체 화면 반투명 배경, 기본은 숨김 */
}
.overlay.show { /* TODO: 보이기 */ }
.side-menu {
  /* TODO: 왼쪽에서 슬라이드, 기본은 화면 밖 */
}
.side-menu.open {
  /* TODO: 화면 안으로 슬라이드 */
}
.side-menu nav a {
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #262626;
}
</style>

<script>
function toggleMenu() {
  // TODO: sideMenu와 overlay의 클래스 토글
}
</script>`,
              solution: `<button class="hamburger" onclick="toggleMenu()">
  <span></span><span></span><span></span>
</button>
<div class="overlay" id="overlay" onclick="toggleMenu()"></div>
<aside class="side-menu" id="sideMenu">
  <div class="menu-header">
    <img src="avatar.png" class="avatar">
    <h3>사용자이름</h3>
  </div>
  <nav>
    <a href="#">🏠 홈</a>
    <a href="#">🔍 탐색</a>
    <a href="#">❤️ 활동</a>
    <a href="#">⚙️ 설정</a>
  </nav>
</aside>

<style>
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.hamburger span {
  width: 25px;
  height: 3px;
  background: #262626;
  border-radius: 2px;
}
.overlay {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 99;
}
.overlay.show { display: block; }
.side-menu {
  position: fixed;
  top: 0;
  left: -280px;
  width: 280px;
  height: 100vh;
  background: white;
  transition: left 0.3s ease;
  z-index: 100;
  padding: 20px;
}
.side-menu.open {
  left: 0;
}
.side-menu nav a {
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: #262626;
  border-radius: 8px;
}
.side-menu nav a:hover {
  background: #fafafa;
}
</style>

<script>
function toggleMenu() {
  document.getElementById('sideMenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
</script>`,
              hints: [
                'left: -280px로 화면 밖에 숨기고, .open에서 left: 0으로 슬라이드하세요',
                'transition: left 0.3s ease로 부드러운 애니메이션을 만드세요',
                'overlay는 메뉴 뒤의 어두운 배경입니다. 클릭하면 메뉴가 닫혀야 해요',
                'z-index로 overlay와 side-menu의 순서를 관리하세요'
              ],
              estimatedMinutes: 18,
              feedback: {
                perfect: '슬라이드 메뉴가 완벽하게 작동해요! 오버레이와 트랜지션까지 훌륭합니다! 🎯',
                good: '메뉴 열림/닫힘은 잘 돼요! overlay 클릭으로 닫기도 추가해보세요.',
                partial: 'classList.toggle은 잘 했어요! CSS transition을 추가해보세요.',
                wrong: 'side-menu에 position: fixed와 left: -280px부터 설정하세요.'
              }
            },
            {
              id: 'c9', title: '스크롤 시 헤더 변화', difficulty: 'hard',
              description: '스크롤하면 헤더가 축소되고 그림자가 생기는 효과를 JavaScript로 구현하세요.',
              starterCode: `<!-- 스크롤 반응 헤더 -->
<header class="header" id="header">
  <div class="logo">MySNS</div>
  <nav>
    <a href="#">홈</a>
    <a href="#">탐색</a>
  </nav>
</header>
<main style="height:2000px; padding-top:80px;">
  <p>아래로 스크롤해보세요!</p>
</main>

<style>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: white;
  transition: all 0.3s ease;
  z-index: 100;
}
.header.scrolled {
  /* TODO: 스크롤 시 축소된 헤더 스타일 */
}
</style>

<script>
// TODO: 스크롤 이벤트에서 50px 이상 스크롤하면 .scrolled 클래스 추가
</script>`,
              solution: `<header class="header" id="header">
  <div class="logo">MySNS</div>
  <nav>
    <a href="#">홈</a>
    <a href="#">탐색</a>
  </nav>
</header>
<main style="height:2000px; padding-top:80px;">
  <p>아래로 스크롤해보세요!</p>
</main>

<style>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: white;
  transition: all 0.3s ease;
  z-index: 100;
}
.header.scrolled {
  height: 50px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  background: rgba(255,255,255,0.95);
}
</style>

<script>
window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
</script>`,
              hints: [
                'window.addEventListener("scroll", function() { })로 스크롤 이벤트를 감지하세요',
                'window.scrollY로 현재 스크롤 위치를 알 수 있어요',
                'classList.add()와 classList.remove()로 클래스를 추가/제거하세요',
                '.scrolled에서 height를 줄이고 box-shadow를 추가하세요'
              ],
              estimatedMinutes: 15,
              feedback: {
                perfect: '스크롤 반응 헤더 완벽 구현! transition과 scrollY 활용이 훌륭해요! 🌟',
                good: '스크롤 감지는 잘 돼요! CSS transition으로 더 부드럽게 만들어보세요.',
                partial: '이벤트 리스너는 잘 추가했어요! scrollY 조건문을 확인해보세요.',
                wrong: 'window.addEventListener("scroll", ...) 부터 작성해보세요.'
              }
            },
            {
              id: 'c10', title: '전체 헤더 시스템 완성', difficulty: 'hard',
              description: '데스크톱 상단 네비 + 모바일 하단 탭 + 드롭다운 + 알림 배지를 모두 통합하세요.',
              starterCode: `<!-- 통합 네비게이션 시스템 -->
<!-- TODO: 데스크톱 상단 네비게이션 -->
<!-- TODO: 모바일 하단 탭 바 -->
<!-- TODO: 프로필 드롭다운 -->
<!-- TODO: 알림 배지 -->

<style>
/* TODO: 모든 네비게이션 스타일 통합 */
/* 데스크톱: 상단 네비 표시, 하단 탭 숨김 */
/* 모바일: 상단 네비 숨김, 하단 탭 표시 */
</style>

<script>
// TODO: 드롭다운 토글, 스크롤 반응
</script>`,
              solution: `<header class="desktop-nav" id="header">
  <div class="logo">MySNS</div>
  <div class="search-bar">
    <input type="text" placeholder="검색">
  </div>
  <div class="nav-actions">
    <a href="#" class="nav-icon">🏠</a>
    <a href="#" class="nav-icon">💬 <span class="badge">3</span></a>
    <a href="#" class="nav-icon">❤️ <span class="badge">5</span></a>
    <div class="profile-menu">
      <button onclick="toggleDropdown()">👤</button>
      <div class="dropdown" id="dropdown">
        <a href="#">프로필</a>
        <a href="#">설정</a>
        <a href="#">로그아웃</a>
      </div>
    </div>
  </div>
</header>

<nav class="mobile-tab">
  <a href="#" class="tab active">🏠</a>
  <a href="#" class="tab">🔍</a>
  <a href="#" class="tab">➕</a>
  <a href="#" class="tab">❤️ <span class="badge">5</span></a>
  <a href="#" class="tab">👤</a>
</nav>

<style>
.desktop-nav {
  position: fixed; top: 0; left: 0; right: 0;
  height: 60px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px;
  background: white;
  border-bottom: 1px solid #dbdbdb;
  z-index: 100;
  transition: box-shadow 0.3s;
}
.desktop-nav.scrolled { box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.search-bar input {
  padding: 8px 16px; border: 1px solid #dbdbdb;
  border-radius: 8px; background: #fafafa; width: 250px;
}
.nav-actions { display: flex; gap: 20px; align-items: center; }
.nav-icon { position: relative; font-size: 22px; text-decoration: none; }
.badge {
  position: absolute; top: -6px; right: -6px;
  background: #ff3040; color: white; font-size: 10px;
  min-width: 16px; height: 16px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
}
.dropdown {
  display: none; position: absolute; top: 100%; right: 0;
  background: white; border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  min-width: 180px;
}
.dropdown.show { display: block; }
.dropdown a { display: block; padding: 10px 16px; text-decoration: none; color: #262626; }
.dropdown a:hover { background: #fafafa; }
.profile-menu { position: relative; }
.profile-menu button { background: none; border: none; font-size: 22px; cursor: pointer; }
.mobile-tab {
  position: fixed; bottom: 0; left: 0; right: 0;
  display: flex; justify-content: space-around;
  padding: 10px; background: white;
  border-top: 1px solid #dbdbdb; z-index: 100;
}
.tab { font-size: 22px; text-decoration: none; position: relative; }
.tab.active { transform: scale(1.1); }

@media (min-width: 769px) { .mobile-tab { display: none; } }
@media (max-width: 768px) { .desktop-nav { display: none; } .mobile-tab { display: flex; } }
</style>

<script>
function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('show');
}
window.addEventListener('scroll', function() {
  var h = document.getElementById('header');
  if (window.scrollY > 30) h.classList.add('scrolled');
  else h.classList.remove('scrolled');
});
</script>`,
              hints: [
                '이전 챌린지에서 배운 모든 기법을 조합하세요',
                '@media 쿼리로 데스크톱/모바일 표시를 전환하세요',
                'badge, dropdown, scroll 이벤트를 모두 통합하세요',
                '구조: header(로고+검색+아이콘) + mobile-tab(아이콘5개)'
              ],
              estimatedMinutes: 20,
              feedback: {
                perfect: '네비게이션 시스템 통합 완벽! 반응형+드롭다운+배지+스크롤 모두 훌륭합니다! 🏆',
                good: '전체 구조가 잘 잡혀있어요! 반응형 전환을 확인해보세요.',
                partial: '좋은 시작이에요! 모바일/데스크톱 전환 @media 쿼리를 추가해보세요.',
                wrong: '데스크톱 헤더 HTML부터 만들고, 하나씩 기능을 추가해보세요.'
              }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m3', title: '프로필 카드', description: '사용자 프로필 카드를 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 18,
          concept: '카드 컴포넌트', cstaStandard: '2-AP-17',
          learningObjectives: ['카드 컴포넌트을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '프로필 카드 구조', difficulty: 'easy',
              description: 'HTML로 프로필 카드의 기본 구조(아바타, 이름, 소개)를 만드세요.',
              starterCode: `<!-- 프로필 카드 기본 구조 -->
<div class="profile-card">
  <!-- TODO: 프로필 이미지, 이름, 소개글 추가 -->
</div>

<style>
.profile-card {
  max-width: 350px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  text-align: center;
}
</style>`,
              solution: `<div class="profile-card">
  <img src="avatar.jpg" alt="프로필" class="avatar">
  <h2 class="username">김코딩</h2>
  <p class="bio">프론트엔드 개발자 | 코딩을 사랑하는 학생</p>
</div>

<style>
.profile-card {
  max-width: 350px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}
.username {
  font-size: 20px;
  margin: 0 0 8px;
  color: #262626;
}
.bio {
  font-size: 14px;
  color: #8e8e8e;
  margin: 0;
}
</style>`,
              hints: [
                'img 태그로 아바타, h2로 이름, p로 소개글을 넣으세요',
                'border-radius: 50%로 원형 이미지를 만들 수 있어요',
                'object-fit: cover는 이미지 비율을 유지하면서 잘라줍니다'
              ],
              estimatedMinutes: 5,
              feedback: {
                perfect: '프로필 카드 기본 구조 완벽! 시맨틱한 HTML 사용이 훌륭해요! ✨',
                good: '좋은 구조예요! 이미지에 border-radius: 50%를 추가해보세요.',
                partial: 'HTML 요소는 잘 넣었어요! CSS 스타일링을 추가해보세요.',
                wrong: 'profile-card 안에 img, h2, p 태그를 순서대로 추가하세요.'
              }
            },
            {
              id: 'c2', title: '팔로워 카운터', difficulty: 'easy',
              description: '게시물, 팔로워, 팔로잉 숫자를 Flexbox로 가로 배치하세요.',
              starterCode: `<!-- 팔로워 카운터 -->
<div class="stats">
  <div class="stat">
    <span class="count">42</span>
    <span class="label">게시물</span>
  </div>
  <div class="stat">
    <span class="count">1,234</span>
    <span class="label">팔로워</span>
  </div>
  <div class="stat">
    <span class="count">567</span>
    <span class="label">팔로잉</span>
  </div>
</div>

<style>
.stats {
  /* TODO: Flexbox로 가로 배치, 균등 분배 */
  padding: 20px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.stat {
  /* TODO: 숫자와 라벨을 세로 배치 */
}
.count {
  /* TODO: 큰 굵은 숫자 */
}
.label {
  /* TODO: 작은 회색 텍스트 */
}
</style>`,
              solution: `<div class="stats">
  <div class="stat">
    <span class="count">42</span>
    <span class="label">게시물</span>
  </div>
  <div class="stat">
    <span class="count">1,234</span>
    <span class="label">팔로워</span>
  </div>
  <div class="stat">
    <span class="count">567</span>
    <span class="label">팔로잉</span>
  </div>
</div>

<style>
.stats {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.count {
  font-size: 18px;
  font-weight: bold;
  color: #262626;
}
.label {
  font-size: 12px;
  color: #8e8e8e;
}
</style>`,
              hints: [
                'display: flex와 justify-content: space-around로 균등 분배하세요',
                '.stat에 flex-direction: column으로 숫자/라벨을 세로 배치하세요',
                'font-weight: bold로 숫자를 강조하세요'
              ],
              estimatedMinutes: 7,
              feedback: {
                perfect: '팔로워 카운터 완벽! Flexbox 활용이 인스타그램 그대로예요! 📊',
                good: 'Flexbox 배치는 좋아요! font-size와 color를 다듬어보세요.',
                partial: 'display: flex는 맞아요! justify-content를 추가해보세요.',
                wrong: '.stats에 display: flex를 먼저 적용하세요.'
              }
            },
            {
              id: 'c3', title: '팔로우 버튼', difficulty: 'easy',
              description: '클릭하면 팔로우/팔로잉으로 토글되는 버튼을 만드세요.',
              starterCode: `<!-- 팔로우 버튼 -->
<button class="follow-btn" id="followBtn" onclick="toggleFollow()">
  팔로우
</button>

<style>
.follow-btn {
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: #0095f6;
  color: white;
  transition: all 0.2s;
}
.follow-btn:hover {
  background: #1877f2;
}
.follow-btn.following {
  /* TODO: 팔로잉 상태 스타일 (회색 배경, 검은 글자) */
}
</style>

<script>
function toggleFollow() {
  // TODO: 버튼 텍스트를 팔로우<->팔로잉 전환
  // TODO: .following 클래스 토글
}
</script>`,
              solution: `<button class="follow-btn" id="followBtn" onclick="toggleFollow()">
  팔로우
</button>

<style>
.follow-btn {
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: #0095f6;
  color: white;
  transition: all 0.2s;
}
.follow-btn:hover {
  background: #1877f2;
}
.follow-btn.following {
  background: #efefef;
  color: #262626;
}
.follow-btn.following:hover {
  background: #dbdbdb;
}
</style>

<script>
function toggleFollow() {
  var btn = document.getElementById('followBtn');
  btn.classList.toggle('following');
  if (btn.classList.contains('following')) {
    btn.textContent = '팔로잉';
  } else {
    btn.textContent = '팔로우';
  }
}
</script>`,
              hints: [
                'classList.toggle("following")으로 클래스를 추가/제거하세요',
                'classList.contains("following")로 현재 상태를 확인하세요',
                'textContent로 버튼 텍스트를 변경하세요'
              ],
              estimatedMinutes: 8,
              feedback: {
                perfect: '팔로우 토글 완벽! 상태에 따른 스타일 변화도 자연스러워요! 💙',
                good: '토글은 잘 돼요! hover 상태도 다르게 만들어보세요.',
                partial: 'classList.toggle은 맞아요! 텍스트 변경도 추가해보세요.',
                wrong: 'classList.toggle("following")부터 시작하세요.'
              }
            },
            {
              id: 'c4', title: '커버 이미지 레이어', difficulty: 'medium',
              description: 'position을 활용해 커버 사진 위에 프로필 사진이 겹치는 레이아웃을 만드세요.',
              starterCode: `<!-- 커버 + 프로필 레이어 -->
<div class="profile-header">
  <div class="cover">
    <img src="cover.jpg" alt="커버">
  </div>
  <img src="avatar.jpg" alt="프로필" class="avatar">
</div>

<style>
.profile-header {
  /* TODO: 자식 요소의 위치 기준점 */
  max-width: 400px;
}
.cover img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}
.avatar {
  /* TODO: 커버 이미지 하단에 걸치도록 배치 */
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
</style>`,
              solution: `<div class="profile-header">
  <div class="cover">
    <img src="cover.jpg" alt="커버">
  </div>
  <img src="avatar.jpg" alt="프로필" class="avatar">
</div>

<style>
.profile-header {
  position: relative;
  max-width: 400px;
}
.cover img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}
.avatar {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>`,
              hints: [
                'position: relative를 부모에, position: absolute를 아바타에 적용하세요',
                'bottom: -40px으로 커버 이미지 아래로 반쯤 내리세요',
                'left: 50% + transform: translateX(-50%)로 가운데 정렬하세요',
                'border: 4px solid white로 테두리를 만드세요'
              ],
              estimatedMinutes: 10,
              feedback: {
                perfect: '커버-아바타 레이어링 완벽! 실제 SNS 프로필 그대로예요! 🖼️',
                good: '위치 잡기 잘 했어요! 가운데 정렬과 border를 추가해보세요.',
                partial: 'position: absolute는 맞아요! bottom 값을 음수로 조정해보세요.',
                wrong: '.profile-header에 position: relative를 먼저 추가하세요.'
              }
            },
            {
              id: 'c5', title: '프로필 탭 메뉴', difficulty: 'medium',
              description: '게시물/릴스/태그 탭을 만들고 클릭 시 활성 탭이 전환되게 하세요.',
              starterCode: `<!-- 프로필 탭 -->
<div class="tab-menu">
  <button class="tab active" data-tab="posts" onclick="switchTab(this)">
    📷 게시물
  </button>
  <button class="tab" data-tab="reels" onclick="switchTab(this)">
    🎬 릴스
  </button>
  <button class="tab" data-tab="tagged" onclick="switchTab(this)">
    🏷️ 태그됨
  </button>
</div>

<div class="tab-content" id="posts">게시물 영역</div>
<div class="tab-content" id="reels" style="display:none">릴스 영역</div>
<div class="tab-content" id="tagged" style="display:none">태그됨 영역</div>

<style>
.tab-menu {
  display: flex;
  border-top: 1px solid #efefef;
}
.tab {
  /* TODO: 균등 분배, 배경 없음, 하단 보더 */
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: #8e8e8e;
}
.tab.active {
  /* TODO: 활성 탭 스타일 */
}
</style>

<script>
function switchTab(clicked) {
  // TODO: 모든 탭에서 active 제거 후 클릭된 탭에 active 추가
  // TODO: 모든 콘텐츠 숨기고 해당 콘텐츠만 표시
}
</script>`,
              solution: `<div class="tab-menu">
  <button class="tab active" data-tab="posts" onclick="switchTab(this)">
    📷 게시물
  </button>
  <button class="tab" data-tab="reels" onclick="switchTab(this)">
    🎬 릴스
  </button>
  <button class="tab" data-tab="tagged" onclick="switchTab(this)">
    🏷️ 태그됨
  </button>
</div>

<div class="tab-content" id="posts">게시물 영역</div>
<div class="tab-content" id="reels" style="display:none">릴스 영역</div>
<div class="tab-content" id="tagged" style="display:none">태그됨 영역</div>

<style>
.tab-menu {
  display: flex;
  border-top: 1px solid #efefef;
}
.tab {
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  border-top: 2px solid transparent;
  cursor: pointer;
  font-size: 13px;
  color: #8e8e8e;
  transition: all 0.2s;
}
.tab.active {
  color: #262626;
  font-weight: 600;
  border-top-color: #262626;
}
.tab:hover {
  color: #262626;
}
</style>

<script>
function switchTab(clicked) {
  var tabs = document.querySelectorAll('.tab');
  var contents = document.querySelectorAll('.tab-content');

  tabs.forEach(function(t) { t.classList.remove('active'); });
  contents.forEach(function(c) { c.style.display = 'none'; });

  clicked.classList.add('active');
  var target = clicked.getAttribute('data-tab');
  document.getElementById(target).style.display = 'block';
}
</script>`,
              hints: [
                'querySelectorAll로 모든 탭과 콘텐츠를 선택하세요',
                'forEach로 모든 요소의 active를 제거하고 display를 none으로 설정하세요',
                'getAttribute("data-tab")으로 대상 콘텐츠 id를 가져오세요'
              ],
              estimatedMinutes: 12,
              feedback: {
                perfect: '탭 전환 완벽 구현! data 속성 활용과 DOM 조작이 훌륭해요! 🎯',
                good: '탭 전환은 잘 돼요! 활성 탭의 border-top 스타일도 추가해보세요.',
                partial: 'active 토글은 잘 했어요! 콘텐츠 표시/숨김도 연동해보세요.',
                wrong: 'querySelectorAll(".tab")로 모든 탭을 선택하는 것부터 시작하세요.'
              }
            },
            {
              id: 'c6', title: '포스트 그리드', difficulty: 'medium',
              description: 'CSS Grid로 인스타그램 스타일의 3열 사진 그리드를 만드세요.',
              starterCode: `<!-- 포스트 그리드 -->
<div class="post-grid">
  <div class="post"><img src="post1.jpg" alt=""></div>
  <div class="post"><img src="post2.jpg" alt=""></div>
  <div class="post"><img src="post3.jpg" alt=""></div>
  <div class="post"><img src="post4.jpg" alt=""></div>
  <div class="post"><img src="post5.jpg" alt=""></div>
  <div class="post"><img src="post6.jpg" alt=""></div>
  <div class="post"><img src="post7.jpg" alt=""></div>
  <div class="post"><img src="post8.jpg" alt=""></div>
  <div class="post"><img src="post9.jpg" alt=""></div>
</div>

<style>
.post-grid {
  /* TODO: 3열 그리드, 간격 3px */
}
.post {
  /* TODO: 정사각형 비율 유지 */
}
.post img {
  /* TODO: 컨테이너에 맞게 채우기 */
}
.post:hover {
  /* TODO: 호버 시 어두워지는 효과 */
}
</style>`,
              solution: `<div class="post-grid">
  <div class="post"><img src="post1.jpg" alt=""></div>
  <div class="post"><img src="post2.jpg" alt=""></div>
  <div class="post"><img src="post3.jpg" alt=""></div>
  <div class="post"><img src="post4.jpg" alt=""></div>
  <div class="post"><img src="post5.jpg" alt=""></div>
  <div class="post"><img src="post6.jpg" alt=""></div>
  <div class="post"><img src="post7.jpg" alt=""></div>
  <div class="post"><img src="post8.jpg" alt=""></div>
  <div class="post"><img src="post9.jpg" alt=""></div>
</div>

<style>
.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
}
.post {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
}
.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post:hover {
  opacity: 0.85;
}
</style>`,
              hints: [
                'display: grid와 grid-template-columns: repeat(3, 1fr)로 3열을 만드세요',
                'aspect-ratio: 1로 정사각형 비율을 유지하세요',
                'object-fit: cover로 이미지가 잘리더라도 비율을 유지하세요'
              ],
              estimatedMinutes: 10,
              feedback: {
                perfect: 'CSS Grid 포스트 그리드 완벽! 인스타그램 프로필 페이지와 동일해요! 📸',
                good: 'Grid 레이아웃 좋아요! aspect-ratio로 정사각형을 만들어보세요.',
                partial: 'grid-template-columns는 맞아요! gap을 3px로 줄여보세요.',
                wrong: '.post-grid에 display: grid부터 적용하세요.'
              }
            },
            {
              id: 'c7', title: '호버 오버레이', difficulty: 'hard',
              description: '포스트에 마우스를 올리면 좋아요/댓글 수가 표시되는 오버레이를 만드세요.',
              starterCode: `<!-- 호버 오버레이 -->
<div class="post">
  <img src="post1.jpg" alt="">
  <div class="overlay">
    <span>❤️ 128</span>
    <span>💬 24</span>
  </div>
</div>

<style>
.post {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
}
.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  /* TODO: 전체를 덮는 반투명 검정 배경 */
  /* TODO: 기본은 숨기기, 가운데 정렬 */
}
.post:hover .overlay {
  /* TODO: hover 시 표시 */
}
.overlay span {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
</style>`,
              solution: `<div class="post">
  <img src="post1.jpg" alt="">
  <div class="overlay">
    <span>❤️ 128</span>
    <span>💬 24</span>
  </div>
</div>

<style>
.post {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
}
.post img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: 0;
  transition: opacity 0.2s;
}
.post:hover .overlay {
  opacity: 1;
}
.overlay span {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
</style>`,
              hints: [
                'position: absolute로 이미지 위에 겹치게 배치하세요',
                'top/left/right/bottom 모두 0으로 설정하면 전체를 덮어요',
                'opacity: 0에서 hover 시 opacity: 1로 전환하세요',
                'transition: opacity 0.2s로 부드러운 효과를 만드세요'
              ],
              estimatedMinutes: 15,
              feedback: {
                perfect: '호버 오버레이 완벽! 인스타그램의 탐색 페이지 효과와 동일해요! 🌟',
                good: 'opacity 전환 잘 했어요! background 투명도를 조절해보세요.',
                partial: 'position: absolute는 맞아요! opacity 전환을 추가해보세요.',
                wrong: '.overlay에 position: absolute와 top/left/right/bottom: 0을 추가하세요.'
              }
            },
            {
              id: 'c8', title: 'box-shadow 카드 효과', difficulty: 'hard',
              description: '프로필 카드에 다양한 box-shadow 효과를 적용하고, hover 시 떠오르는 효과를 만드세요.',
              starterCode: `<!-- 그림자 카드 효과 -->
<div class="card card-soft">소프트 그림자</div>
<div class="card card-medium">미디엄 그림자</div>
<div class="card card-strong">강한 그림자</div>
<div class="card card-hover">호버 효과</div>

<style>
.card {
  padding: 30px;
  margin: 15px;
  border-radius: 12px;
  background: white;
  text-align: center;
  transition: all 0.3s ease;
}
.card-soft {
  /* TODO: 은은한 그림자 */
}
.card-medium {
  /* TODO: 중간 그림자 */
}
.card-strong {
  /* TODO: 강한 그림자 */
}
.card-hover:hover {
  /* TODO: hover 시 떠오르는 효과 (그림자 + transform) */
}
</style>`,
              solution: `<div class="card card-soft">소프트 그림자</div>
<div class="card card-medium">미디엄 그림자</div>
<div class="card card-strong">강한 그림자</div>
<div class="card card-hover">호버 효과</div>

<style>
.card {
  padding: 30px;
  margin: 15px;
  border-radius: 12px;
  background: white;
  text-align: center;
  transition: all 0.3s ease;
}
.card-soft {
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.card-medium {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.card-strong {
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.2);
}
</style>`,
              hints: [
                'box-shadow: x y blur spread color 형식입니다',
                'rgba(0,0,0,0.1)에서 마지막 숫자가 클수록 진해져요',
                'transform: translateY(-4px)로 위로 살짝 올라가는 효과를 만드세요',
                'transition으로 hover 전환을 부드럽게 하세요'
              ],
              estimatedMinutes: 12,
              feedback: {
                perfect: 'box-shadow 마스터! 다양한 강도와 hover 효과가 완벽해요! ✨',
                good: '그림자 차이가 잘 느껴져요! hover 시 transform도 추가해보세요.',
                partial: 'box-shadow는 맞아요! blur 값을 다르게 해서 강도를 구분해보세요.',
                wrong: 'box-shadow: 0 2px 8px rgba(0,0,0,0.1) 형식으로 시작하세요.'
              }
            },
            {
              id: 'c9', title: '모바일 프로필 레이아웃', difficulty: 'hard',
              description: '@media 쿼리로 모바일에서 최적화된 프로필 레이아웃을 만드세요.',
              starterCode: `<!-- 반응형 프로필 -->
<div class="profile">
  <div class="profile-top">
    <img src="avatar.jpg" class="avatar">
    <div class="info">
      <h2>김코딩</h2>
      <div class="stats">
        <span><b>42</b> 게시물</span>
        <span><b>1.2K</b> 팔로워</span>
        <span><b>89</b> 팔로잉</span>
      </div>
    </div>
  </div>
  <p class="bio">프론트엔드 개발자</p>
  <button class="follow-btn">팔로우</button>
</div>

<style>
.profile { max-width: 600px; padding: 20px; }
.profile-top {
  display: flex;
  align-items: center;
  gap: 30px;
}
.avatar { width: 100px; height: 100px; border-radius: 50%; }
.stats { display: flex; gap: 20px; margin-top: 10px; }
.follow-btn {
  width: 100%;
  padding: 8px;
  background: #0095f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 15px;
}

/* TODO: 모바일(480px 이하) 최적화 */
/* 아바타 크기 줄이기, stats 레이아웃 변경 등 */
</style>`,
              solution: `<div class="profile">
  <div class="profile-top">
    <img src="avatar.jpg" class="avatar">
    <div class="info">
      <h2>김코딩</h2>
      <div class="stats">
        <span><b>42</b> 게시물</span>
        <span><b>1.2K</b> 팔로워</span>
        <span><b>89</b> 팔로잉</span>
      </div>
    </div>
  </div>
  <p class="bio">프론트엔드 개발자</p>
  <button class="follow-btn">팔로우</button>
</div>

<style>
.profile { max-width: 600px; padding: 20px; }
.profile-top {
  display: flex;
  align-items: center;
  gap: 30px;
}
.avatar { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; }
.stats { display: flex; gap: 20px; margin-top: 10px; }
.follow-btn {
  width: 100%;
  padding: 8px;
  background: #0095f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 15px;
}

@media (max-width: 480px) {
  .profile-top {
    gap: 15px;
  }
  .avatar {
    width: 70px;
    height: 70px;
  }
  .stats {
    gap: 10px;
    font-size: 13px;
  }
  .info h2 {
    font-size: 16px;
  }
  .bio {
    font-size: 13px;
  }
}
</style>`,
              hints: [
                '@media (max-width: 480px)로 모바일 조건을 설정하세요',
                '아바타 크기를 70px로, gap을 15px로 줄이세요',
                'font-size를 작게 조절하면 모바일에서 읽기 좋아요'
              ],
              estimatedMinutes: 15,
              feedback: {
                perfect: '반응형 프로필 완벽! 모바일에서도 깔끔하게 표시돼요! 📱',
                good: '좋은 반응형이에요! 작은 화면에서 간격도 줄여보세요.',
                partial: '@media 쿼리는 맞아요! 더 많은 속성을 조절해보세요.',
                wrong: '@media (max-width: 480px) { } 블록을 추가해보세요.'
              }
            },
            {
              id: 'c10', title: '전체 프로필 카드 완성', difficulty: 'hard',
              description: '커버 이미지, 아바타, 정보, 팔로워 수, 탭, 그리드를 모두 통합한 프로필 페이지를 완성하세요.',
              starterCode: `<!-- 전체 프로필 페이지 -->
<!-- TODO: 커버 이미지 + 아바타 -->
<!-- TODO: 사용자 정보 (이름, 소개) -->
<!-- TODO: 팔로워 카운터 -->
<!-- TODO: 팔로우 버튼 -->
<!-- TODO: 탭 메뉴 (게시물/릴스/태그) -->
<!-- TODO: 포스트 그리드 -->

<style>
/* TODO: 이전 챌린지의 모든 스타일 통합 */
</style>

<script>
// TODO: 팔로우 토글 + 탭 전환
</script>`,
              solution: `<div class="profile-page">
  <div class="cover-section">
    <img src="cover.jpg" class="cover-img" alt="커버">
    <img src="avatar.jpg" class="avatar" alt="프로필">
  </div>

  <div class="profile-info">
    <h2>김코딩</h2>
    <p class="bio">프론트엔드 개발자 | 코딩을 사랑하는 학생</p>
  </div>

  <div class="stats">
    <div class="stat"><b>42</b><span>게시물</span></div>
    <div class="stat"><b>1,234</b><span>팔로워</span></div>
    <div class="stat"><b>567</b><span>팔로잉</span></div>
  </div>

  <button class="follow-btn" id="followBtn" onclick="toggleFollow()">팔로우</button>

  <div class="tab-menu">
    <button class="tab active" onclick="switchTab(this, 'posts')">📷 게시물</button>
    <button class="tab" onclick="switchTab(this, 'reels')">🎬 릴스</button>
    <button class="tab" onclick="switchTab(this, 'tagged')">🏷️ 태그됨</button>
  </div>

  <div class="post-grid" id="posts">
    <div class="post"><div class="placeholder">📸</div></div>
    <div class="post"><div class="placeholder">📸</div></div>
    <div class="post"><div class="placeholder">📸</div></div>
    <div class="post"><div class="placeholder">📸</div></div>
    <div class="post"><div class="placeholder">📸</div></div>
    <div class="post"><div class="placeholder">📸</div></div>
  </div>
</div>

<style>
.profile-page { max-width: 450px; margin: 0 auto; background: white; }
.cover-section { position: relative; }
.cover-img { width: 100%; height: 180px; object-fit: cover; }
.avatar {
  position: absolute; bottom: -40px; left: 50%;
  transform: translateX(-50%);
  width: 80px; height: 80px; border-radius: 50%;
  border: 4px solid white; object-fit: cover;
}
.profile-info { text-align: center; margin-top: 50px; padding: 0 20px; }
.profile-info h2 { margin: 0 0 5px; font-size: 20px; }
.bio { color: #8e8e8e; font-size: 14px; margin: 0; }
.stats {
  display: flex; justify-content: space-around;
  padding: 20px; border-bottom: 1px solid #efefef;
}
.stat { text-align: center; }
.stat b { display: block; font-size: 18px; }
.stat span { font-size: 12px; color: #8e8e8e; }
.follow-btn {
  display: block; width: calc(100% - 40px); margin: 15px 20px;
  padding: 8px; background: #0095f6; color: white;
  border: none; border-radius: 8px; font-weight: 600; cursor: pointer;
}
.follow-btn.following { background: #efefef; color: #262626; }
.tab-menu { display: flex; border-top: 1px solid #efefef; }
.tab {
  flex: 1; padding: 12px; background: none; border: none;
  border-top: 2px solid transparent; cursor: pointer;
  font-size: 13px; color: #8e8e8e;
}
.tab.active { color: #262626; font-weight: 600; border-top-color: #262626; }
.post-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3px; }
.post { aspect-ratio: 1; }
.placeholder {
  width: 100%; height: 100%; background: #fafafa;
  display: flex; align-items: center; justify-content: center;
  font-size: 30px;
}
</style>

<script>
function toggleFollow() {
  var btn = document.getElementById('followBtn');
  btn.classList.toggle('following');
  btn.textContent = btn.classList.contains('following') ? '팔로잉' : '팔로우';
}
function switchTab(clicked, tabId) {
  document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
  clicked.classList.add('active');
}
</script>`,
              hints: [
                '이전 챌린지에서 배운 모든 기법을 조합하세요',
                '커버+아바타, stats, 팔로우 버튼, 탭, 그리드를 순서대로 배치하세요',
                'max-width와 margin: 0 auto로 중앙에 배치하세요',
                'JavaScript로 팔로우 토글과 탭 전환을 모두 구현하세요'
              ],
              estimatedMinutes: 20,
              feedback: {
                perfect: '프로필 페이지 완벽 통합! 실제 인스타그램 프로필과 동일해요! 🏆🎉',
                good: '전체 구조가 훌륭해요! 세부 스타일링을 다듬으면 더 좋아질 거예요.',
                partial: '좋은 시작이에요! 누락된 섹션을 하나씩 추가해보세요.',
                wrong: 'HTML 구조를 먼저 잡고 - cover, info, stats, button, tabs, grid 순서로 작성하세요.'
              }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m4', title: '피드 레이아웃', description: '게시물 피드 레이아웃을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'css',
          exp: 35, estimatedMinutes: 20,
          concept: 'CSS Grid', cstaStandard: '2-AP-17',
          learningObjectives: ['CSS Grid을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'Grid 기본 설정',
              description: '.feed-grid에 CSS Grid를 적용하고 3열 레이아웃을 만드세요.',
              difficulty: 'easy',
              starterCode: '.feed-grid {\n  /* Grid 레이아웃을 적용하세요 */\n}',
              solution: '.feed-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4px;\n}',
              hints: ['display: grid로 시작해요', 'repeat(3, 1fr)은 동일한 3열을 만들어요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'Grid 기본을 완벽히 이해했어요!', good: '좋아요! Grid가 잘 적용됐어요.', partial: 'grid-template-columns를 확인하세요.', wrong: 'display: grid와 grid-template-columns: repeat(3, 1fr)이 필요해요.' }
            },
            {
              id: 'c2', title: '인스타 프로필 그리드',
              description: '인스타그램 프로필의 정사각형 이미지 그리드를 만드세요. 이미지가 정사각형으로 잘려야 합니다.',
              difficulty: 'easy',
              starterCode: '.profile-grid {\n  /* 그리드 설정 */\n}\n.profile-grid img {\n  /* 정사각형 이미지 */\n}',
              solution: '.profile-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 4px;\n}\n.profile-grid img {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n}',
              hints: ['aspect-ratio: 1로 정사각형을 만들어요', 'object-fit: cover로 이미지를 채워요'],
              estimatedMinutes: 4,
              feedback: { perfect: '인스타 그리드와 동일해요!', good: '좋아요! 정사각형 처리가 잘 됐어요.', partial: 'aspect-ratio나 object-fit을 확인하세요.', wrong: 'aspect-ratio: 1과 object-fit: cover를 사용하세요.' }
            },
            {
              id: 'c3', title: '2열 피드 레이아웃',
              description: '메인 피드(넓은 열)와 사이드바(좁은 열)를 Grid로 배치하세요. 비율은 2:1입니다.',
              difficulty: 'easy',
              starterCode: '.main-layout {\n  /* 2:1 비율 레이아웃 */\n}',
              solution: '.main-layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n  max-width: 935px;\n  margin: 0 auto;\n  padding: 20px;\n}',
              hints: ['2fr 1fr로 2:1 비율을 만들어요', 'max-width로 최대 너비를 제한해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '인스타 메인 레이아웃과 동일해요!', good: '좋아요! 비율이 잘 적용됐어요.', partial: 'fr 단위로 비율을 설정하세요.', wrong: 'grid-template-columns: 2fr 1fr로 2:1 비율을 만들어요.' }
            },
            {
              id: 'c4', title: '게시물 카드 Grid',
              description: '게시물 카드 내부를 Grid로 배치하세요. 아바타와 사용자 정보가 나란히, 아래에 이미지와 액션이 오는 구조입니다.',
              difficulty: 'medium',
              starterCode: '.post-card {\n  /* 카드 내부 Grid */\n}',
              solution: '.post-card {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  grid-template-rows: auto auto auto;\n  gap: 8px;\n  background: white;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.post-image {\n  grid-column: 1 / -1;\n  width: 100%;\n}',
              hints: ['grid-column: 1 / -1은 전체 열을 차지해요', '아바타 열은 고정 크기(40px)로 설정해요'],
              estimatedMinutes: 5,
              feedback: { perfect: 'Grid로 카드 내부를 완벽히 배치했어요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: 'grid-column: 1 / -1로 이미지를 전체 너비로 만드세요.', wrong: '고정 크기(40px)와 유동 크기(1fr)를 조합하세요.' }
            },
            {
              id: 'c5', title: 'Grid로 탐색 페이지',
              description: '인스타그램 탐색(Explore) 페이지의 비대칭 그리드를 만드세요. 큰 이미지 1개 + 작은 이미지 4개 패턴입니다.',
              difficulty: 'medium',
              starterCode: '.explore-grid {\n  /* 탐색 페이지 그리드 */\n}\n.explore-grid .big {\n  /* 큰 이미지 */\n}',
              solution: '.explore-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 200px;\n  gap: 4px;\n}\n.explore-grid .big {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n.explore-grid img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}',
              hints: ['grid-column: span 2로 2칸을 차지해요', 'grid-row: span 2로 세로로도 2칸을 차지해요'],
              estimatedMinutes: 6,
              feedback: { perfect: '탐색 페이지 그리드를 완벽하게 구현했어요!', good: '좋아요! span으로 크기 조절이 잘 됐어요.', partial: 'span을 사용해서 큰 이미지 영역을 만드세요.', wrong: 'grid-column: span 2와 grid-row: span 2로 큰 영역을 만들어요.' }
            },
            {
              id: 'c6', title: '반응형 Grid 열 수',
              description: 'auto-fill과 minmax를 사용해서 화면 크기에 따라 열 수가 자동 조절되는 그리드를 만드세요.',
              difficulty: 'medium',
              starterCode: '.auto-grid {\n  /* 자동 반응형 그리드 */\n}',
              solution: '.auto-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 16px;\n}',
              hints: ['auto-fill은 공간이 있으면 자동으로 열을 추가해요', 'minmax(250px, 1fr)은 최소 250px, 최대 1fr이에요'],
              estimatedMinutes: 5,
              feedback: { perfect: '자동 반응형 Grid를 완벽히 구현했어요!', good: '좋아요! auto-fill을 잘 사용했어요.', partial: 'minmax의 최소/최대값을 확인하세요.', wrong: 'repeat(auto-fill, minmax(250px, 1fr))을 사용하세요.' }
            },
            {
              id: 'c7', title: '피드 카드 정렬',
              description: '피드 카드 목록에서 카드 높이가 다를 때 깔끔하게 정렬되도록 Grid를 설정하세요.',
              difficulty: 'hard',
              starterCode: '.feed-list {\n  /* 세로 피드 리스트 */\n}\n.feed-card {\n  /* 카드 스타일 */\n}',
              solution: '.feed-list {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n  max-width: 614px;\n  margin: 0 auto;\n}\n.feed-card {\n  background: white;\n  border: 1px solid #dbdbdb;\n  border-radius: 8px;\n  overflow: hidden;\n}',
              hints: ['단일 열 Grid는 카드 간격을 일정하게 유지해요', 'max-width로 피드 너비를 제한하세요'],
              estimatedMinutes: 6,
              feedback: { perfect: '피드 리스트가 깔끔하게 정렬됐어요!', good: '좋아요! 간격과 정렬이 잘 됐어요.', partial: 'gap으로 카드 간격을 설정하세요.', wrong: '1열 Grid + gap + max-width로 피드를 구성하세요.' }
            },
            {
              id: 'c8', title: 'Grid gap과 border',
              description: 'Grid 아이템 사이에 border 대신 gap + 배경색으로 구분선 효과를 만드세요 (인스타 프로필 그리드 스타일).',
              difficulty: 'hard',
              starterCode: '.photo-grid-container {\n  /* 배경색으로 구분선 효과 */\n}\n.photo-grid-container img {\n  /* 이미지 */\n}',
              solution: '.photo-grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 3px;\n  background: #fafafa;\n}\n.photo-grid-container img {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  display: block;\n}',
              hints: ['gap으로 만들어진 빈 공간에 부모의 배경색이 보여요', '이미지에 display: block을 추가해야 아래 여백이 사라져요'],
              estimatedMinutes: 6,
              feedback: { perfect: 'gap과 배경색 기법을 완벽히 이해했어요!', good: '좋아요! 구분선 효과가 잘 나왔어요.', partial: 'display: block을 img에 추가하세요.', wrong: '부모 배경색 + 작은 gap으로 구분선 효과를 만들어요.' }
            },
            {
              id: 'c9', title: '모바일 반응형 피드',
              description: '@media 쿼리로 모바일(480px 이하)에서 사이드바를 숨기고 1열 레이아웃으로 변경하세요.',
              difficulty: 'hard',
              starterCode: '.main-layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n}\n\n/* 모바일 반응형 추가 */',
              solution: '.main-layout {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 24px;\n}\n\n@media (max-width: 768px) {\n  .main-layout {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    display: none;\n  }\n}\n\n@media (max-width: 480px) {\n  .feed-card {\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n  }\n}',
              hints: ['768px 이하에서 1열로 변경하세요', '480px 이하에서는 카드 모서리를 없애면 모바일 느낌이 나요'],
              estimatedMinutes: 7,
              feedback: { perfect: '반응형 피드를 완벽하게 구현했어요!', good: '좋아요! 모바일 대응이 잘 됐어요.', partial: '사이드바 숨김 처리를 확인하세요.', wrong: '@media 쿼리로 grid-template-columns를 1fr로 변경하세요.' }
            },
            {
              id: 'c10', title: '전체 피드 레이아웃 완성',
              description: '헤더 아래에 메인(피드)+사이드바, 그리고 프로필 탭(그리드/리스트/저장됨) 전환이 가능한 전체 레이아웃을 완성하세요.',
              difficulty: 'hard',
              starterCode: '<!-- 전체 피드 레이아웃 -->\n<div class="app-layout">\n  <!-- 완성하세요 -->\n</div>',
              solution: '<div class="app-layout">\n  <header class="app-header">MySNS</header>\n  <div class="main-layout">\n    <main class="feed-list">\n      <article class="feed-card">\n        <div class="post-header"><img class="avatar" src="u.jpg"><b>user</b></div>\n        <img class="post-image" src="p.jpg">\n        <div class="actions"><button>♡</button><button>💬</button></div>\n      </article>\n    </main>\n    <aside class="sidebar">\n      <div class="suggestion">추천 계정</div>\n    </aside>\n  </div>\n</div>',
              hints: ['app-layout > header + main-layout(feed + sidebar)'],
              estimatedMinutes: 8,
              feedback: { perfect: '전체 레이아웃이 완벽해요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '사이드바가 빠졌어요.', wrong: '메인 피드와 사이드바를 2:1 Grid로 배치하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m5', title: '게시물 컴포넌트', description: '좋아요/댓글이 있는 게시물을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 22,
          concept: '컴포넌트 구조', cstaStandard: '2-AP-17',
          learningObjectives: ['컴포넌트 구조을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '게시물 헤더 만들기',
              description: '게시물 상단의 프로필 영역을 만드세요. 아바타(32px 원형), 사용자명, 더보기(...) 버튼을 포함합니다.',
              difficulty: 'easy',
              starterCode: '<div class="post-header">\n  <!-- 프로필 + 이름 + 더보기 -->\n</div>',
              solution: '<div class="post-header">\n  <img class="avatar" src="user.jpg" alt="" style="width:32px;height:32px;border-radius:50%;">\n  <span class="username"><strong>coding_student</strong></span>\n  <button class="more-btn" style="margin-left:auto;background:none;border:none;font-size:18px;">...</button>\n</div>',
              hints: ['avatar를 원형으로 만드세요', 'margin-left: auto로 더보기 버튼을 오른쪽에 배치해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '게시물 헤더를 완벽하게 만들었어요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '더보기 버튼 위치를 확인하세요.', wrong: '아바타 + 사용자명 + 더보기(...)가 모두 필요해요.' }
            },
            {
              id: 'c2', title: '게시물 이미지 영역',
              description: '게시물 이미지가 가로 전체를 채우고, 비율을 유지하면서 표시되도록 CSS를 작성하세요.',
              difficulty: 'easy',
              starterCode: '.post-image {\n  /* 이미지 스타일 */\n}',
              solution: '.post-image {\n  width: 100%;\n  max-height: 600px;\n  object-fit: cover;\n  display: block;\n}',
              hints: ['width: 100%로 전체 너비를 채워요', 'object-fit: cover로 비율을 유지하면서 채워요'],
              estimatedMinutes: 3,
              feedback: { perfect: '이미지 처리가 완벽해요!', good: '좋아요! 이미지가 잘 표시돼요.', partial: 'object-fit을 확인하세요.', wrong: 'width: 100%와 object-fit: cover를 사용하세요.' }
            },
            {
              id: 'c3', title: '액션 바 (좋아요/댓글/공유/저장)',
              description: 'HTML로 4개의 액션 버튼을 만드세요. 좋아요, 댓글, 공유는 왼쪽에, 저장은 오른쪽에 배치합니다.',
              difficulty: 'easy',
              starterCode: '<div class="action-bar">\n  <!-- 액션 버튼들 -->\n</div>\n<style>.action-bar { display: flex; padding: 8px 12px; }</style>',
              solution: '<div class="action-bar">\n  <button class="action-btn like-btn">♡</button>\n  <button class="action-btn comment-btn">💬</button>\n  <button class="action-btn share-btn">📤</button>\n  <button class="action-btn save-btn" style="margin-left:auto;">🔖</button>\n</div>\n<style>\n.action-bar { display: flex; padding: 8px 12px; gap: 12px; }\n.action-btn { background: none; border: none; font-size: 22px; cursor: pointer; }\n</style>',
              hints: ['margin-left: auto로 저장 버튼을 오른쪽으로 밀어요', '배경과 테두리를 없앤 투명 버튼을 사용해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '인스타그램 액션바와 동일해요!', good: '좋아요! 버튼 배치가 잘 됐어요.', partial: '저장 버튼은 오른쪽에 있어야 해요.', wrong: '좋아요/댓글/공유는 왼쪽, 저장은 오른쪽이에요.' }
            },
            {
              id: 'c4', title: '좋아요 수와 캡션',
              description: '좋아요 수(볼드)와 캡션(사용자명 + 텍스트)을 표시하세요.',
              difficulty: 'medium',
              starterCode: '<div class="post-info">\n  <!-- 좋아요 수와 캡션 -->\n</div>',
              solution: '<div class="post-info" style="padding: 0 12px;">\n  <p class="likes"><strong>좋아요 142개</strong></p>\n  <p class="caption"><strong>coding_student</strong> 오늘 만든 웹사이트! #코딩 #HTML</p>\n  <p class="timestamp" style="color:#999;font-size:12px;margin-top:4px;">2시간 전</p>\n</div>',
              hints: ['strong 태그로 좋아요 수를 강조해요', '해시태그도 같이 표시하면 더 실감나요'],
              estimatedMinutes: 4,
              feedback: { perfect: '게시물 정보가 완벽해요!', good: '좋아요! 핵심 정보가 잘 표시돼요.', partial: '좋아요 수, 캡션, 시간을 모두 포함하세요.', wrong: '좋아요 수(bold) + 캡션(유저명+텍스트) + 시간을 표시하세요.' }
            },
            {
              id: 'c5', title: '댓글 입력 영역',
              description: '게시물 하단의 댓글 입력 폼을 만드세요. 이모지 버튼, 입력 필드, 게시 버튼을 포함합니다.',
              difficulty: 'medium',
              starterCode: '<div class="comment-form">\n  <!-- 댓글 입력 폼 -->\n</div>',
              solution: '<div class="comment-form" style="display:flex;align-items:center;padding:12px;border-top:1px solid #eee;">\n  <button style="background:none;border:none;font-size:20px;">😊</button>\n  <input type="text" placeholder="댓글 달기..." style="flex:1;border:none;outline:none;padding:8px;">\n  <button style="background:none;border:none;color:#0095f6;font-weight:bold;">게시</button>\n</div>',
              hints: ['flex: 1로 입력 필드가 남은 공간을 차지하게 해요', '테두리 없는 깔끔한 입력 필드를 만드세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '댓글 입력 폼이 완벽해요!', good: '좋아요! 레이아웃이 잘 됐어요.', partial: '이모지 버튼이나 게시 버튼이 빠졌어요.', wrong: '이모지 + 입력필드(flex:1) + 게시 버튼 구성이에요.' }
            },
            {
              id: 'c6', title: '이미지 캐러셀 표시',
              description: '게시물에 여러 이미지가 있을 때 점(dot) 인디케이터를 표시하세요.',
              difficulty: 'medium',
              starterCode: '<div class="carousel-dots">\n  <!-- 이미지 3장일 때 인디케이터 -->\n</div>\n<style>.carousel-dots {}</style>',
              solution: '<div class="carousel-dots">\n  <span class="dot active"></span>\n  <span class="dot"></span>\n  <span class="dot"></span>\n</div>\n<style>\n.carousel-dots { display: flex; justify-content: center; gap: 4px; padding: 8px; }\n.dot { width: 6px; height: 6px; border-radius: 50%; background: #ccc; }\n.dot.active { background: #0095f6; }\n</style>',
              hints: ['작은 원형 점으로 현재 이미지 위치를 표시해요', 'active 클래스로 현재 이미지를 강조해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '캐러셀 인디케이터가 완벽해요!', good: '좋아요! 점 표시가 잘 됐어요.', partial: 'active 상태를 구분해야 해요.', wrong: '점 + active 클래스로 현재 위치를 표시하세요.' }
            },
            {
              id: 'c7', title: '게시물 더보기 메뉴',
              description: '더보기(...) 버튼 클릭 시 팝업 메뉴를 표시하세요. 신고/팔로우취소/링크복사 옵션이 있습니다.',
              difficulty: 'hard',
              starterCode: '<div class="more-menu" style="display:none;">\n  <!-- 메뉴 항목들 -->\n</div>\n<script>\nfunction toggleMenu() {\n  // 메뉴 토글\n}\n</script>',
              solution: '<div class="more-menu" id="moreMenu" style="display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:12px;width:260px;box-shadow:0 4px 20px rgba(0,0,0,0.15);z-index:200;">\n  <button style="display:block;width:100%;padding:14px;border:none;background:none;color:red;font-weight:bold;border-bottom:1px solid #eee;">신고</button>\n  <button style="display:block;width:100%;padding:14px;border:none;background:none;color:red;border-bottom:1px solid #eee;">팔로우 취소</button>\n  <button style="display:block;width:100%;padding:14px;border:none;background:none;border-bottom:1px solid #eee;">링크 복사</button>\n  <button onclick="toggleMenu()" style="display:block;width:100%;padding:14px;border:none;background:none;">취소</button>\n</div>\n<script>\nfunction toggleMenu() {\n  const menu = document.getElementById("moreMenu");\n  menu.style.display = menu.style.display === "none" ? "block" : "none";\n}\n</script>',
              hints: ['fixed 위치로 화면 중앙에 모달처럼 표시해요', 'display를 toggle하는 함수를 만드세요'],
              estimatedMinutes: 7,
              feedback: { perfect: '팝업 메뉴가 완벽해요!', good: '좋아요! 메뉴가 잘 동작해요.', partial: '취소 버튼으로 메뉴를 닫을 수 있어야 해요.', wrong: 'display를 none/block으로 토글하세요.' }
            },
            {
              id: 'c8', title: '게시물 카드 조합',
              description: '헤더 + 이미지 + 액션바 + 정보 + 댓글입력을 모두 합쳐 완전한 게시물 카드를 만드세요.',
              difficulty: 'hard',
              starterCode: '<article class="post-card">\n  <!-- 전체 게시물 카드 -->\n</article>',
              solution: '<article class="post-card" style="background:white;border:1px solid #dbdbdb;border-radius:8px;margin-bottom:24px;">\n  <div class="post-header" style="display:flex;align-items:center;padding:12px;">\n    <img src="u.jpg" style="width:32px;height:32px;border-radius:50%;margin-right:8px;">\n    <strong>coder123</strong>\n    <button onclick="toggleMenu()" style="margin-left:auto;background:none;border:none;">...</button>\n  </div>\n  <img src="photo.jpg" style="width:100%;display:block;">\n  <div style="display:flex;padding:8px 12px;gap:12px;">\n    <button style="background:none;border:none;font-size:22px;">♡</button>\n    <button style="background:none;border:none;font-size:22px;">💬</button>\n    <button style="background:none;border:none;font-size:22px;margin-left:auto;">🔖</button>\n  </div>\n  <div style="padding:0 12px 12px;">\n    <p><strong>좋아요 89개</strong></p>\n    <p><strong>coder123</strong> 오늘의 프로젝트!</p>\n  </div>\n</article>',
              hints: ['위에서 만든 모든 컴포넌트를 순서대로 조합하세요'],
              estimatedMinutes: 8,
              feedback: { perfect: '완전한 게시물 카드를 만들었어요!', good: '좋아요! 핵심 요소가 모두 있어요.', partial: '빠진 섹션을 확인하세요.', wrong: '헤더/이미지/액션바/정보를 순서대로 넣으세요.' }
            },
            {
              id: 'c9', title: '더블탭 좋아요 하트',
              description: '이미지를 더블클릭하면 큰 하트 아이콘이 잠깐 나타났다 사라지는 효과를 CSS + JS로 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="post-image-wrapper">\n  <img src="photo.jpg" class="post-img">\n  <div class="heart-overlay" id="heart">❤️</div>\n</div>\n<style>.heart-overlay { display: none; }</style>\n<script>\n// 더블클릭 이벤트\n</script>',
              solution: '<div class="post-image-wrapper" ondblclick="showHeart()" style="position:relative;">\n  <img src="photo.jpg" class="post-img" style="width:100%;display:block;">\n  <div class="heart-overlay" id="heart" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);font-size:80px;transition:transform 0.3s;">❤️</div>\n</div>\n<script>\nfunction showHeart() {\n  const h = document.getElementById("heart");\n  h.style.display = "block";\n  h.style.transform = "translate(-50%,-50%) scale(1)";\n  setTimeout(() => {\n    h.style.transform = "translate(-50%,-50%) scale(0)";\n    setTimeout(() => h.style.display = "none", 300);\n  }, 800);\n}\n</script>',
              hints: ['ondblclick 이벤트로 더블클릭을 감지해요', 'scale 애니메이션으로 하트가 커졌다 작아져요'],
              estimatedMinutes: 8,
              feedback: { perfect: '더블탭 좋아요를 완벽하게 구현했어요!', good: '좋아요! 하트 애니메이션이 동작해요.', partial: 'setTimeout으로 일정 시간 후 사라지게 하세요.', wrong: 'scale(0→1→0) 애니메이션 + setTimeout을 사용하세요.' }
            },
            {
              id: 'c10', title: '여러 게시물 피드',
              description: '게시물 카드 3개를 만들고, 각각 다른 사용자/이미지/좋아요 수를 가진 피드를 완성하세요.',
              difficulty: 'hard',
              starterCode: '<div class="feed">\n  <!-- 게시물 3개 -->\n</div>',
              solution: '<div class="feed" style="max-width:614px;margin:0 auto;">\n  <article class="post-card" style="background:white;border:1px solid #dbdbdb;border-radius:8px;margin-bottom:24px;">\n    <div style="display:flex;align-items:center;padding:12px;"><img src="u1.jpg" style="width:32px;height:32px;border-radius:50%;margin-right:8px;"><strong>alice</strong></div>\n    <img src="p1.jpg" style="width:100%;display:block;">\n    <div style="padding:8px 12px;"><button style="background:none;border:none;font-size:22px;">♡</button></div>\n    <div style="padding:0 12px 12px;"><strong>좋아요 234개</strong></div>\n  </article>\n  <article class="post-card" style="background:white;border:1px solid #dbdbdb;border-radius:8px;margin-bottom:24px;">\n    <div style="display:flex;align-items:center;padding:12px;"><img src="u2.jpg" style="width:32px;height:32px;border-radius:50%;margin-right:8px;"><strong>bob</strong></div>\n    <img src="p2.jpg" style="width:100%;display:block;">\n    <div style="padding:8px 12px;"><button style="background:none;border:none;font-size:22px;">♡</button></div>\n    <div style="padding:0 12px 12px;"><strong>좋아요 56개</strong></div>\n  </article>\n  <article class="post-card" style="background:white;border:1px solid #dbdbdb;border-radius:8px;margin-bottom:24px;">\n    <div style="display:flex;align-items:center;padding:12px;"><img src="u3.jpg" style="width:32px;height:32px;border-radius:50%;margin-right:8px;"><strong>charlie</strong></div>\n    <img src="p3.jpg" style="width:100%;display:block;">\n    <div style="padding:8px 12px;"><button style="background:none;border:none;font-size:22px;">♡</button></div>\n    <div style="padding:0 12px 12px;"><strong>좋아요 891개</strong></div>\n  </article>\n</div>',
              hints: ['동일한 카드 구조를 반복하되 데이터만 다르게 하세요'],
              estimatedMinutes: 8,
              feedback: { perfect: '실제 SNS 피드와 동일한 결과물이에요!', good: '좋아요! 여러 게시물이 잘 표시돼요.', partial: '게시물마다 다른 사용자와 이미지를 사용하세요.', wrong: '동일한 카드 구조를 3번 반복하면서 데이터를 다르게 하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m6', title: '좋아요 기능', description: 'JavaScript로 좋아요 토글을 구현해요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 24,
          concept: '이벤트 처리', cstaStandard: '2-AP-17',
          learningObjectives: ['이벤트 처리을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'onclick 이벤트 기본',
              description: '좋아요 버튼을 클릭하면 alert("좋아요!")가 나타나도록 onclick 속성을 추가하세요.',
              difficulty: 'easy',
              starterCode: '<button class="like-btn">♡ 좋아요</button>',
              solution: '<button class="like-btn" onclick="alert(\'좋아요!\')">♡ 좋아요</button>',
              hints: ['onclick 속성에 JavaScript 코드를 넣으세요', 'alert()로 메시지를 표시해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'onclick 이벤트를 완벽히 사용했어요!', good: '좋아요! 클릭 이벤트가 동작해요.', partial: 'onclick 속성을 button에 추가하세요.', wrong: 'onclick="alert(\'좋아요!\')" 형태로 작성하세요.' }
            },
            {
              id: 'c2', title: '좋아요 텍스트 변경',
              description: '버튼 클릭 시 ♡를 ❤️로 변경하는 함수를 만드세요.',
              difficulty: 'easy',
              starterCode: '<button id="likeBtn" onclick="toggleLike()">♡</button>\n<script>\nfunction toggleLike() {\n  // 하트를 빨간색으로 변경\n}\n</script>',
              solution: '<button id="likeBtn" onclick="toggleLike()">♡</button>\n<script>\nfunction toggleLike() {\n  const btn = document.getElementById("likeBtn");\n  btn.textContent = btn.textContent === "♡" ? "❤️" : "♡";\n}\n</script>',
              hints: ['textContent로 버튼 텍스트를 바꿀 수 있어요', '삼항연산자로 토글 로직을 만드세요'],
              estimatedMinutes: 4,
              feedback: { perfect: '토글 로직이 완벽해요!', good: '좋아요! 하트가 바뀌어요.', partial: '삼항연산자로 두 상태를 전환하세요.', wrong: 'textContent를 ♡/❤️ 사이에서 토글하세요.' }
            },
            {
              id: 'c3', title: '좋아요 숫자 카운터',
              description: '좋아요를 누르면 숫자가 1 증가하고, 다시 누르면 1 감소하는 카운터를 만드세요.',
              difficulty: 'easy',
              starterCode: '<button onclick="toggleLike()">♡</button>\n<span id="count">42</span>\n<script>\nlet liked = false;\nfunction toggleLike() {\n  // 좋아요 토글 + 숫자 변경\n}\n</script>',
              solution: '<button id="likeBtn" onclick="toggleLike()">♡</button>\n<span id="count">42</span>\n<script>\nlet liked = false;\nlet count = 42;\nfunction toggleLike() {\n  liked = !liked;\n  count += liked ? 1 : -1;\n  document.getElementById("likeBtn").textContent = liked ? "❤️" : "♡";\n  document.getElementById("count").textContent = count;\n}\n</script>',
              hints: ['liked 변수로 상태를 추적해요', 'liked가 true면 +1, false면 -1'],
              estimatedMinutes: 4,
              feedback: { perfect: '좋아요 카운터가 완벽해요!', good: '좋아요! 숫자가 잘 바뀌어요.', partial: '숫자 증가/감소 로직을 확인하세요.', wrong: 'liked 변수로 상태를 추적하고 count를 변경하세요.' }
            },
            {
              id: 'c4', title: 'classList.toggle 활용',
              description: 'classList.toggle을 사용해서 좋아요 버튼의 CSS 클래스를 토글하세요. liked 클래스가 추가되면 빨간색이 됩니다.',
              difficulty: 'medium',
              starterCode: '<button class="like-btn" onclick="toggleLike(this)">♡</button>\n<style>\n.like-btn { font-size: 24px; background: none; border: none; cursor: pointer; }\n.like-btn.liked { color: red; }\n</style>\n<script>\nfunction toggleLike(btn) {\n  // classList.toggle 사용\n}\n</script>',
              solution: '<button class="like-btn" onclick="toggleLike(this)">♡</button>\n<style>\n.like-btn { font-size: 24px; background: none; border: none; cursor: pointer; transition: transform 0.2s; }\n.like-btn.liked { color: red; }\n.like-btn:active { transform: scale(1.3); }\n</style>\n<script>\nfunction toggleLike(btn) {\n  btn.classList.toggle("liked");\n  btn.textContent = btn.classList.contains("liked") ? "❤️" : "♡";\n}\n</script>',
              hints: ['classList.toggle("liked")로 클래스를 추가/제거해요', 'classList.contains()로 현재 상태를 확인해요'],
              estimatedMinutes: 5,
              feedback: { perfect: 'classList.toggle을 완벽히 이해했어요!', good: '좋아요! 클래스 토글이 잘 동작해요.', partial: 'contains()로 상태를 확인하세요.', wrong: 'classList.toggle("liked")을 사용하세요.' }
            },
            {
              id: 'c5', title: '좋아요 애니메이션',
              description: '좋아요 클릭 시 하트가 커졌다 돌아오는 CSS 애니메이션을 추가하세요.',
              difficulty: 'medium',
              starterCode: '.like-btn { font-size: 24px; }\n/* 애니메이션 추가 */',
              solution: '.like-btn {\n  font-size: 24px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.like-btn:active {\n  transform: scale(1.4);\n}\n.like-btn.liked {\n  animation: heartBeat 0.4s ease;\n}\n@keyframes heartBeat {\n  0% { transform: scale(1); }\n  25% { transform: scale(1.3); }\n  50% { transform: scale(0.95); }\n  100% { transform: scale(1); }\n}',
              hints: ['@keyframes로 애니메이션을 정의해요', 'scale로 크기를 변화시켜요'],
              estimatedMinutes: 5,
              feedback: { perfect: '하트 애니메이션이 아름다워요!', good: '좋아요! 애니메이션이 동작해요.', partial: '@keyframes를 확인하세요.', wrong: '@keyframes + scale로 하트가 커졌다 돌아오는 효과를 만드세요.' }
            },
            {
              id: 'c6', title: 'addEventListener 사용',
              description: 'onclick 속성 대신 addEventListener로 좋아요 이벤트를 등록하세요.',
              difficulty: 'medium',
              starterCode: '<button id="likeBtn">♡</button>\n<script>\n// addEventListener로 이벤트 등록\n</script>',
              solution: '<button id="likeBtn">♡</button>\n<script>\nconst likeBtn = document.getElementById("likeBtn");\nlet liked = false;\nlikeBtn.addEventListener("click", function() {\n  liked = !liked;\n  this.textContent = liked ? "❤️" : "♡";\n  this.classList.toggle("liked");\n});\n</script>',
              hints: ['addEventListener("click", function)으로 등록해요', '함수 안에서 this는 클릭된 요소를 가리켜요'],
              estimatedMinutes: 5,
              feedback: { perfect: 'addEventListener를 완벽히 사용했어요!', good: '좋아요! 이벤트 리스너가 잘 동작해요.', partial: '이벤트 타입은 "click"이에요.', wrong: 'addEventListener("click", function() {...})을 사용하세요.' }
            },
            {
              id: 'c7', title: '여러 게시물 좋아요',
              description: '게시물이 여러 개일 때 각각 독립적으로 좋아요가 동작하도록 만드세요. querySelectorAll을 활용합니다.',
              difficulty: 'hard',
              starterCode: '<div class="post"><button class="like-btn">♡</button><span class="count">10</span></div>\n<div class="post"><button class="like-btn">♡</button><span class="count">25</span></div>\n<div class="post"><button class="like-btn">♡</button><span class="count">7</span></div>\n<script>\n// 모든 좋아요 버튼에 이벤트 등록\n</script>',
              solution: '<div class="post"><button class="like-btn">♡</button><span class="count">10</span></div>\n<div class="post"><button class="like-btn">♡</button><span class="count">25</span></div>\n<div class="post"><button class="like-btn">♡</button><span class="count">7</span></div>\n<script>\ndocument.querySelectorAll(".like-btn").forEach(btn => {\n  let liked = false;\n  btn.addEventListener("click", function() {\n    liked = !liked;\n    this.textContent = liked ? "❤️" : "♡";\n    const countEl = this.nextElementSibling;\n    let num = parseInt(countEl.textContent);\n    countEl.textContent = liked ? num + 1 : num - 1;\n  });\n});\n</script>',
              hints: ['querySelectorAll로 모든 버튼을 선택해요', 'forEach로 각 버튼에 이벤트를 등록해요', 'nextElementSibling으로 옆의 count 요소를 찾아요'],
              estimatedMinutes: 7,
              feedback: { perfect: '각 게시물이 독립적으로 동작해요!', good: '좋아요! querySelectorAll을 잘 활용했어요.', partial: '각 버튼에 독립적인 liked 변수가 필요해요.', wrong: 'querySelectorAll + forEach로 각 버튼에 이벤트를 등록하세요.' }
            },
            {
              id: 'c8', title: '북마크(저장) 토글',
              description: '저장 버튼을 클릭하면 🔖과 빈 아이콘 사이를 토글하고, localStorage에 상태를 저장하세요.',
              difficulty: 'hard',
              starterCode: '<button id="saveBtn">☆</button>\n<script>\n// 저장 토글 + localStorage\n</script>',
              solution: '<button id="saveBtn">☆</button>\n<script>\nconst saveBtn = document.getElementById("saveBtn");\nlet saved = localStorage.getItem("saved") === "true";\nsaveBtn.textContent = saved ? "★" : "☆";\n\nsaveBtn.addEventListener("click", function() {\n  saved = !saved;\n  this.textContent = saved ? "★" : "☆";\n  localStorage.setItem("saved", saved);\n});\n</script>',
              hints: ['localStorage.getItem/setItem으로 상태를 저장해요', '페이지를 새로고침해도 상태가 유지돼요'],
              estimatedMinutes: 7,
              feedback: { perfect: 'localStorage까지 완벽하게 구현했어요!', good: '좋아요! 저장 기능이 동작해요.', partial: 'localStorage로 상태를 기억하게 하세요.', wrong: 'localStorage.setItem으로 저장, getItem으로 불러오세요.' }
            },
            {
              id: 'c9', title: '이벤트 위임 패턴',
              description: '피드 컨테이너에 하나의 이벤트 리스너만 등록하고, 어떤 버튼이 클릭됐는지 판별하세요 (이벤트 위임).',
              difficulty: 'hard',
              starterCode: '<div id="feed">\n  <div class="post"><button class="like-btn" data-id="1">♡</button></div>\n  <div class="post"><button class="like-btn" data-id="2">♡</button></div>\n</div>\n<script>\n// 이벤트 위임으로 구현\n</script>',
              solution: '<div id="feed">\n  <div class="post"><button class="like-btn" data-id="1">♡</button></div>\n  <div class="post"><button class="like-btn" data-id="2">♡</button></div>\n</div>\n<script>\ndocument.getElementById("feed").addEventListener("click", function(e) {\n  if (e.target.classList.contains("like-btn")) {\n    const id = e.target.dataset.id;\n    e.target.classList.toggle("liked");\n    e.target.textContent = e.target.classList.contains("liked") ? "❤️" : "♡";\n    console.log("게시물 " + id + " 좋아요 토글");\n  }\n});\n</script>',
              hints: ['부모에 이벤트 리스너를 하나만 등록해요', 'e.target으로 실제 클릭된 요소를 확인해요', 'data-id 속성으로 어떤 게시물인지 구분해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '이벤트 위임을 완벽히 이해했어요!', good: '좋아요! e.target을 잘 활용했어요.', partial: 'e.target.classList.contains로 클릭된 요소를 판별하세요.', wrong: '부모에 리스너를 등록하고 e.target으로 클릭된 요소를 확인하세요.' }
            },
            {
              id: 'c10', title: '좋아요 시스템 완성',
              description: '좋아요 토글 + 카운터 + 애니메이션 + localStorage를 모두 합친 완전한 좋아요 시스템을 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="post">\n  <button class="like-btn">♡</button>\n  <span class="like-count">42</span>개\n</div>\n<style>/* 스타일 */</style>\n<script>/* 완전한 좋아요 시스템 */</script>',
              solution: '<div class="post">\n  <button class="like-btn" id="likeBtn">♡</button>\n  <strong><span class="like-count" id="likeCount">42</span>개</strong>\n</div>\n<style>\n.like-btn { font-size: 24px; background: none; border: none; cursor: pointer; }\n.like-btn.liked { color: red; animation: heartPop 0.4s ease; }\n@keyframes heartPop { 0%{transform:scale(1)} 50%{transform:scale(1.3)} 100%{transform:scale(1)} }\n</style>\n<script>\nlet liked = localStorage.getItem("post1_liked") === "true";\nlet count = parseInt(localStorage.getItem("post1_count") || "42");\nconst btn = document.getElementById("likeBtn");\nconst countEl = document.getElementById("likeCount");\n\nif (liked) { btn.textContent = "❤️"; btn.classList.add("liked"); }\ncountEl.textContent = count;\n\nbtn.addEventListener("click", () => {\n  liked = !liked;\n  count += liked ? 1 : -1;\n  btn.textContent = liked ? "❤️" : "♡";\n  btn.classList.toggle("liked");\n  countEl.textContent = count;\n  localStorage.setItem("post1_liked", liked);\n  localStorage.setItem("post1_count", count);\n});\n</script>',
              hints: ['이전 챌린지들에서 배운 것을 모두 합치세요'],
              estimatedMinutes: 8,
              feedback: { perfect: '완전한 좋아요 시스템을 만들었어요! 프로급이에요!', good: '좋아요! 핵심 기능이 모두 동작해요.', partial: 'localStorage나 애니메이션이 빠졌어요.', wrong: '토글 + 카운터 + 애니메이션 + localStorage를 모두 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m7', title: '댓글 추가 기능', description: '댓글을 동적으로 추가해요',
          type: 'coding', difficulty: 'intermediate', language: 'javascript',
          exp: 35, estimatedMinutes: 26,
          concept: 'DOM 조작', cstaStandard: '2-AP-17',
          learningObjectives: ['DOM 조작을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'createElement 기본',
              description: 'document.createElement로 새 p 요소를 만들고 화면에 추가하세요.',
              difficulty: 'easy',
              starterCode: '<div id="comments"></div>\n<script>\n// 새 댓글 요소를 만들어서 추가하세요\n</script>',
              solution: '<div id="comments"></div>\n<script>\nconst comment = document.createElement("p");\ncomment.textContent = "첫 번째 댓글입니다!";\ndocument.getElementById("comments").appendChild(comment);\n</script>',
              hints: ['createElement로 요소를 만들어요', 'appendChild로 부모에 추가해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'createElement를 완벽히 이해했어요!', good: '좋아요! 요소가 추가됐어요.', partial: 'appendChild로 부모에 추가하세요.', wrong: 'createElement("p") → textContent 설정 → appendChild 순서예요.' }
            },
            {
              id: 'c2', title: '입력값으로 댓글 추가',
              description: 'input에 입력한 텍스트를 댓글 목록에 추가하는 함수를 만드세요.',
              difficulty: 'easy',
              starterCode: '<input id="commentInput" placeholder="댓글 입력...">\n<button onclick="addComment()">게시</button>\n<div id="comments"></div>\n<script>\nfunction addComment() {\n  // 입력값을 댓글로 추가\n}\n</script>',
              solution: '<input id="commentInput" placeholder="댓글 입력...">\n<button onclick="addComment()">게시</button>\n<div id="comments"></div>\n<script>\nfunction addComment() {\n  const input = document.getElementById("commentInput");\n  if (input.value.trim() === "") return;\n  const comment = document.createElement("p");\n  comment.textContent = input.value;\n  document.getElementById("comments").appendChild(comment);\n  input.value = "";\n}\n</script>',
              hints: ['input.value로 입력값을 가져와요', '빈 입력은 무시하세요', '추가 후 input을 비워주세요'],
              estimatedMinutes: 4,
              feedback: { perfect: '댓글 추가 기능이 완벽해요!', good: '좋아요! 입력값이 잘 추가돼요.', partial: '빈 입력 체크나 초기화가 필요해요.', wrong: 'input.value → createElement → appendChild → input 초기화 순서예요.' }
            },
            {
              id: 'c3', title: 'Enter 키로 댓글 게시',
              description: 'Enter 키를 눌러도 댓글이 게시되도록 keydown 이벤트를 추가하세요.',
              difficulty: 'easy',
              starterCode: '<input id="commentInput" placeholder="댓글 입력...">\n<script>\n// Enter 키 이벤트 추가\n</script>',
              solution: '<input id="commentInput" placeholder="댓글 입력...">\n<script>\ndocument.getElementById("commentInput").addEventListener("keydown", function(e) {\n  if (e.key === "Enter") {\n    addComment();\n  }\n});\n</script>',
              hints: ['keydown 이벤트를 사용해요', 'e.key === "Enter"로 엔터키를 감지해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'Enter 키 이벤트를 완벽히 구현했어요!', good: '좋아요! 엔터로 게시가 돼요.', partial: 'e.key를 사용해서 엔터를 감지하세요.', wrong: 'keydown + e.key === "Enter"를 사용하세요.' }
            },
            {
              id: 'c4', title: '사용자명 + 댓글 표시',
              description: '댓글에 사용자명(볼드)과 내용을 함께 표시하세요.',
              difficulty: 'medium',
              starterCode: '<div id="comments"></div>\n<script>\nfunction addComment(username, text) {\n  // 사용자명(bold) + 댓글 내용\n}\n</script>',
              solution: '<div id="comments"></div>\n<script>\nfunction addComment(username, text) {\n  const comment = document.createElement("p");\n  comment.style.padding = "8px 12px";\n  const name = document.createElement("strong");\n  name.textContent = username + " ";\n  comment.appendChild(name);\n  comment.appendChild(document.createTextNode(text));\n  document.getElementById("comments").appendChild(comment);\n}\naddComment("coding_kid", "멋진 프로젝트!");\naddComment("web_master", "좋아요!");\n</script>',
              hints: ['createElement("strong")로 볼드 사용자명을 만들어요', 'createTextNode로 일반 텍스트를 추가해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '사용자명이 볼드로 잘 표시돼요!', good: '좋아요! 구조가 잘 됐어요.', partial: 'strong 태그로 사용자명을 감싸세요.', wrong: 'createElement("strong") + createTextNode를 조합하세요.' }
            },
            {
              id: 'c5', title: '댓글 삭제 버튼',
              description: '각 댓글에 X 버튼을 추가하고, 클릭하면 해당 댓글이 삭제되도록 만드세요.',
              difficulty: 'medium',
              starterCode: '<div id="comments">\n  <p>기존 댓글 1 <button>X</button></p>\n</div>\n<script>\n// 삭제 기능 구현\n</script>',
              solution: '<div id="comments"></div>\n<script>\nfunction addComment(text) {\n  const comment = document.createElement("div");\n  comment.style.cssText = "display:flex;justify-content:space-between;padding:8px 12px;";\n  comment.innerHTML = "<span><strong>user</strong> " + text + "</span>";\n  const delBtn = document.createElement("button");\n  delBtn.textContent = "X";\n  delBtn.style.cssText = "background:none;border:none;color:#999;cursor:pointer;";\n  delBtn.onclick = () => comment.remove();\n  comment.appendChild(delBtn);\n  document.getElementById("comments").appendChild(comment);\n}\naddComment("좋아요!");\naddComment("멋져요!");\n</script>',
              hints: ['comment.remove()로 요소를 DOM에서 삭제해요', '삭제 버튼의 onclick에 remove를 연결하세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '댓글 삭제가 완벽해요!', good: '좋아요! 삭제가 동작해요.', partial: 'remove()로 DOM에서 삭제하세요.', wrong: '삭제 버튼 onclick에 comment.remove()를 연결하세요.' }
            },
            {
              id: 'c6', title: '댓글 시간 표시',
              description: '댓글에 작성 시간(방금, 1분 전 등)을 표시하세요. Date 객체를 활용합니다.',
              difficulty: 'medium',
              starterCode: 'function timeAgo(date) {\n  // "방금", "N분 전", "N시간 전" 반환\n}',
              solution: 'function timeAgo(date) {\n  const seconds = Math.floor((new Date() - date) / 1000);\n  if (seconds < 60) return "방금";\n  const minutes = Math.floor(seconds / 60);\n  if (minutes < 60) return minutes + "분 전";\n  const hours = Math.floor(minutes / 60);\n  if (hours < 24) return hours + "시간 전";\n  const days = Math.floor(hours / 24);\n  return days + "일 전";\n}',
              hints: ['Date 객체끼리 빼면 밀리초 차이가 나와요', '1000으로 나누면 초, 60으로 나누면 분이에요'],
              estimatedMinutes: 6,
              feedback: { perfect: '시간 표시 함수가 완벽해요!', good: '좋아요! 시간이 잘 계산돼요.', partial: '분/시간/일 경계값을 확인하세요.', wrong: 'Date 빼기 + Math.floor로 시간 차이를 계산하세요.' }
            },
            {
              id: 'c7', title: '댓글 좋아요 기능',
              description: '각 댓글에 작은 하트 버튼과 좋아요 수를 추가하세요.',
              difficulty: 'hard',
              starterCode: 'function createComment(user, text) {\n  // 댓글 + 좋아요 버튼 생성\n}',
              solution: 'function createComment(user, text) {\n  const div = document.createElement("div");\n  div.style.cssText = "display:flex;align-items:center;padding:8px 12px;gap:8px;";\n  div.innerHTML = "<div style=\"flex:1\"><strong>" + user + "</strong> " + text + "</div>";\n  let liked = false, count = 0;\n  const likeArea = document.createElement("span");\n  likeArea.style.cssText = "font-size:12px;cursor:pointer;color:#999;";\n  likeArea.textContent = "♡";\n  likeArea.onclick = () => {\n    liked = !liked;\n    count += liked ? 1 : -1;\n    likeArea.textContent = liked ? "❤️ " + count : "♡";\n    likeArea.style.color = liked ? "red" : "#999";\n  };\n  div.appendChild(likeArea);\n  return div;\n}',
              hints: ['각 댓글에 독립적인 liked/count 변수가 필요해요', '클로저로 각 댓글의 상태를 유지해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '댓글 좋아요를 완벽하게 구현했어요!', good: '좋아요! 각 댓글이 독립적으로 동작해요.', partial: '클로저로 상태를 유지하세요.', wrong: '함수 스코프 안에 liked/count를 선언하면 클로저가 돼요.' }
            },
            {
              id: 'c8', title: '답글 기능',
              description: '댓글에 "답글 달기" 버튼을 추가하고, 클릭하면 해당 댓글 아래에 입력 필드가 나타나도록 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="comment" id="c1">\n  <p><strong>user1</strong> 멋져요!</p>\n  <button class="reply-btn">답글 달기</button>\n  <div class="replies"></div>\n</div>\n<script>\n// 답글 기능\n</script>',
              solution: '<div class="comment" id="c1">\n  <p><strong>user1</strong> 멋져요!</p>\n  <button class="reply-btn" onclick="showReplyInput(this)">답글 달기</button>\n  <div class="replies" style="margin-left:24px;"></div>\n</div>\n<script>\nfunction showReplyInput(btn) {\n  const comment = btn.parentElement;\n  const existing = comment.querySelector(".reply-input");\n  if (existing) { existing.remove(); return; }\n  const inputDiv = document.createElement("div");\n  inputDiv.className = "reply-input";\n  inputDiv.style.marginLeft = "24px";\n  inputDiv.innerHTML = \'<input placeholder="답글..." style="border:none;border-bottom:1px solid #ddd;padding:4px;"><button onclick="postReply(this)">게시</button>\';\n  btn.after(inputDiv);\n}\nfunction postReply(btn) {\n  const input = btn.previousElementSibling;\n  const replies = btn.parentElement.parentElement.querySelector(".replies");\n  const reply = document.createElement("p");\n  reply.innerHTML = "<strong>me</strong> " + input.value;\n  reply.style.fontSize = "13px";\n  replies.appendChild(reply);\n  btn.parentElement.remove();\n}\n</script>',
              hints: ['답글 입력 필드를 동적으로 생성해요', 'margin-left로 들여쓰기하면 답글 느낌이 나요'],
              estimatedMinutes: 8,
              feedback: { perfect: '답글 기능이 완벽해요!', good: '좋아요! 답글이 댓글 아래에 표시돼요.', partial: '입력 필드 토글과 답글 추가를 확인하세요.', wrong: '답글 입력 필드를 동적 생성하고, 게시 시 replies에 추가하세요.' }
            },
            {
              id: 'c9', title: '댓글 더보기',
              description: '댓글이 3개 이상이면 나머지를 숨기고 "댓글 N개 모두 보기" 버튼을 표시하세요.',
              difficulty: 'hard',
              starterCode: '<div id="comments">\n  <!-- 댓글 5개 -->\n</div>\n<script>\n// 댓글 3개까지만 표시, 나머지 숨기기\n</script>',
              solution: '<div id="comments"></div>\n<script>\nconst comments = ["좋아요!", "멋져요!", "최고!", "대박!", "완벽!"];\nconst container = document.getElementById("comments");\n\ncomments.forEach((text, i) => {\n  const p = document.createElement("p");\n  p.textContent = text;\n  p.style.padding = "4px 12px";\n  if (i >= 2) p.style.display = "none";\n  p.className = "comment-item";\n  container.appendChild(p);\n});\n\nif (comments.length > 2) {\n  const btn = document.createElement("button");\n  btn.textContent = "댓글 " + comments.length + "개 모두 보기";\n  btn.style.cssText = "border:none;background:none;color:#999;cursor:pointer;padding:4px 12px;";\n  btn.onclick = () => {\n    container.querySelectorAll(".comment-item").forEach(c => c.style.display = "block");\n    btn.remove();\n  };\n  container.insertBefore(btn, container.children[2]);\n}\n</script>',
              hints: ['3번째부터 display: none으로 숨겨요', '버튼 클릭 시 모든 댓글을 표시하고 버튼을 제거해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '댓글 더보기를 완벽하게 구현했어요!', good: '좋아요! 숨김/표시가 잘 동작해요.', partial: '버튼 제거를 잊지 마세요.', wrong: 'display: none으로 숨기고 클릭 시 block으로 표시하세요.' }
            },
            {
              id: 'c10', title: '댓글 시스템 완성',
              description: '입력 + 사용자명 + 시간 + 삭제 + 좋아요를 모두 갖춘 완전한 댓글 시스템을 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="comment-section">\n  <div id="commentList"></div>\n  <div class="comment-form">\n    <input id="commentInput" placeholder="댓글 달기...">\n    <button onclick="postComment()">게시</button>\n  </div>\n</div>\n<script>\nfunction postComment() { /* 완전한 댓글 시스템 */ }\n</script>',
              solution: '<div class="comment-section" style="border-top:1px solid #eee;">\n  <div id="commentList"></div>\n  <div style="display:flex;padding:12px;gap:8px;">\n    <input id="commentInput" placeholder="댓글 달기..." style="flex:1;border:none;outline:none;">\n    <button onclick="postComment()" style="background:none;border:none;color:#0095f6;font-weight:bold;cursor:pointer;">게시</button>\n  </div>\n</div>\n<script>\nfunction postComment() {\n  const input = document.getElementById("commentInput");\n  if (!input.value.trim()) return;\n  const div = document.createElement("div");\n  div.style.cssText = "display:flex;align-items:center;padding:8px 12px;gap:8px;";\n  const time = new Date();\n  div.innerHTML = "<div style=\"flex:1\"><strong>me</strong> " + input.value + " <span style=\"color:#999;font-size:11px;\">방금</span></div>";\n  const del = document.createElement("button");\n  del.textContent = "X";\n  del.style.cssText = "background:none;border:none;color:#ccc;cursor:pointer;font-size:10px;";\n  del.onclick = () => div.remove();\n  div.appendChild(del);\n  document.getElementById("commentList").appendChild(div);\n  input.value = "";\n  input.focus();\n}\ndocument.getElementById("commentInput").addEventListener("keydown", e => { if (e.key === "Enter") postComment(); });\n</script>',
              hints: ['이전 챌린지들에서 배운 것을 모두 합치세요'],
              estimatedMinutes: 8,
              feedback: { perfect: '완전한 댓글 시스템이에요! 실제 SNS 수준!', good: '좋아요! 핵심 기능이 모두 있어요.', partial: '빠진 기능이 있어요. Enter 키, 삭제 등을 확인하세요.', wrong: '입력 + 추가 + 삭제 + Enter키 + 시간 표시를 모두 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m8', title: '반응형 사이드바', description: '데스크톱/모바일 반응형 사이드바를 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'css',
          exp: 35, estimatedMinutes: 28,
          concept: '반응형 디자인', cstaStandard: '2-AP-17',
          learningObjectives: ['반응형 디자인을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'media query 기본',
              description: '@media 쿼리를 사용해서 768px 이하에서 배경색이 변하도록 만드세요.',
              difficulty: 'easy',
              starterCode: 'body {\n  background: white;\n}\n/* 768px 이하에서 배경 변경 */',
              solution: 'body {\n  background: white;\n}\n@media (max-width: 768px) {\n  body {\n    background: #f5f5f5;\n  }\n}',
              hints: ['@media (max-width: 768px)로 모바일 스타일을 지정해요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'media query를 완벽히 이해했어요!', good: '좋아요! 반응형 기본이 잘 됐어요.', partial: '@media 문법을 확인하세요.', wrong: '@media (max-width: 768px) { ... }를 사용하세요.' }
            },
            {
              id: 'c2', title: '사이드바 기본 구조',
              description: '데스크톱에서 왼쪽 사이드바(240px) + 메인 콘텐츠를 Flexbox로 배치하세요.',
              difficulty: 'easy',
              starterCode: '.app-layout { /* 전체 레이아웃 */ }\n.sidebar { /* 사이드바 */ }\n.main-content { /* 메인 */ }',
              solution: '.app-layout {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  width: 240px;\n  background: #fafafa;\n  border-right: 1px solid #eee;\n  padding: 20px;\n}\n.main-content {\n  flex: 1;\n  padding: 20px;\n}',
              hints: ['flex로 가로 배치, 사이드바는 고정 너비', 'flex: 1로 메인이 나머지를 차지해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '사이드바 레이아웃이 완벽해요!', good: '좋아요! Flex 배치가 잘 됐어요.', partial: 'flex: 1로 메인 영역을 설정하세요.', wrong: '사이드바 고정 너비 + 메인 flex: 1이에요.' }
            },
            {
              id: 'c3', title: '사이드바 메뉴',
              description: '사이드바에 홈/탐색/알림/프로필 메뉴를 만드세요. 각 항목은 아이콘 + 텍스트입니다.',
              difficulty: 'easy',
              starterCode: '<nav class="sidebar-nav">\n  <!-- 메뉴 항목들 -->\n</nav>\n<style>.sidebar-nav a { /* 메뉴 스타일 */ }</style>',
              solution: '<nav class="sidebar-nav">\n  <a href="#" class="nav-item active"><span>🏠</span> 홈</a>\n  <a href="#" class="nav-item"><span>🔍</span> 탐색</a>\n  <a href="#" class="nav-item"><span>🔔</span> 알림</a>\n  <a href="#" class="nav-item"><span>👤</span> 프로필</a>\n</nav>\n<style>\n.sidebar-nav { display: flex; flex-direction: column; gap: 4px; }\n.nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; text-decoration: none; color: #333; font-size: 15px; }\n.nav-item:hover { background: #f0f0f0; }\n.nav-item.active { font-weight: bold; }\n</style>',
              hints: ['flex-direction: column으로 세로 배치', '각 항목에 아이콘과 텍스트를 함께 넣으세요'],
              estimatedMinutes: 4,
              feedback: { perfect: '사이드바 메뉴가 완벽해요!', good: '좋아요! 메뉴 구조가 잘 됐어요.', partial: '아이콘과 텍스트를 함께 표시하세요.', wrong: '아이콘 + 텍스트를 flex로 가로 배치하세요.' }
            },
            {
              id: 'c4', title: '모바일에서 사이드바 숨기기',
              description: '768px 이하에서 사이드바를 숨기고 하단 탭 바를 표시하세요.',
              difficulty: 'medium',
              starterCode: '.sidebar { width: 240px; }\n.bottom-tab { display: none; }\n\n/* 모바일 반응형 */',
              solution: '.sidebar { width: 240px; }\n.bottom-tab { display: none; }\n\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .bottom-tab {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    justify-content: space-around;\n    padding: 10px;\n    background: white;\n    border-top: 1px solid #eee;\n  }\n}',
              hints: ['사이드바를 display: none으로 숨겨요', '하단 탭을 display: flex로 표시해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '모바일 전환이 완벽해요!', good: '좋아요! 사이드바와 탭 전환이 잘 돼요.', partial: 'display: none/flex 전환을 확인하세요.', wrong: '사이드바 숨기기 + 하단탭 표시를 @media 안에 넣으세요.' }
            },
            {
              id: 'c5', title: '슬라이드 사이드바',
              description: '모바일에서 햄버거 메뉴 클릭 시 사이드바가 왼쪽에서 슬라이드되어 나오도록 만드세요.',
              difficulty: 'medium',
              starterCode: '.sidebar {\n  /* 슬라이드 사이드바 */\n}\n.sidebar.open {\n  /* 열린 상태 */\n}',
              solution: '.sidebar {\n  position: fixed;\n  top: 0;\n  left: -260px;\n  width: 260px;\n  height: 100vh;\n  background: white;\n  z-index: 200;\n  transition: left 0.3s ease;\n  box-shadow: 2px 0 10px rgba(0,0,0,0.1);\n}\n.sidebar.open {\n  left: 0;\n}\n.overlay {\n  display: none;\n  position: fixed;\n  top: 0; left: 0; right: 0; bottom: 0;\n  background: rgba(0,0,0,0.5);\n  z-index: 199;\n}\n.sidebar.open ~ .overlay {\n  display: block;\n}',
              hints: ['left: -260px로 화면 밖에 숨겨요', 'transition으로 부드럽게 이동해요', '반투명 오버레이로 배경을 어둡게 해요'],
              estimatedMinutes: 6,
              feedback: { perfect: '슬라이드 사이드바가 완벽해요!', good: '좋아요! 부드럽게 열려요.', partial: 'transition을 추가해서 부드럽게 만드세요.', wrong: 'left를 음수→0으로 전환하고 transition을 추가하세요.' }
            },
            {
              id: 'c6', title: '햄버거 메뉴 토글',
              description: 'JavaScript로 햄버거 버튼 클릭 시 사이드바 open 클래스를 토글하세요.',
              difficulty: 'medium',
              starterCode: '<button id="menuBtn">☰</button>\n<aside class="sidebar" id="sidebar">메뉴</aside>\n<div class="overlay" id="overlay"></div>\n<script>\n// 토글 기능\n</script>',
              solution: '<button id="menuBtn" style="font-size:24px;background:none;border:none;cursor:pointer;">☰</button>\n<aside class="sidebar" id="sidebar">메뉴</aside>\n<div class="overlay" id="overlay"></div>\n<script>\nconst sidebar = document.getElementById("sidebar");\nconst overlay = document.getElementById("overlay");\nconst menuBtn = document.getElementById("menuBtn");\n\nmenuBtn.addEventListener("click", () => sidebar.classList.toggle("open"));\noverlay.addEventListener("click", () => sidebar.classList.remove("open"));\n</script>',
              hints: ['classList.toggle로 클래스를 추가/제거해요', '오버레이 클릭 시 사이드바를 닫아요'],
              estimatedMinutes: 5,
              feedback: { perfect: '토글 기능이 완벽해요!', good: '좋아요! 열기/닫기가 잘 돼요.', partial: '오버레이 클릭으로 닫는 기능을 추가하세요.', wrong: 'classList.toggle + 오버레이 닫기를 구현하세요.' }
            },
            {
              id: 'c7', title: '축소 사이드바',
              description: '태블릿(768-1024px)에서 사이드바를 아이콘만 표시되는 좁은 버전으로 축소하세요.',
              difficulty: 'hard',
              starterCode: '.sidebar { width: 240px; }\n.nav-item span.label { /* 텍스트 */ }\n\n/* 태블릿에서 축소 */',
              solution: '.sidebar { width: 240px; transition: width 0.3s; }\n.nav-item { display: flex; gap: 12px; padding: 12px 16px; }\n\n@media (max-width: 1024px) and (min-width: 769px) {\n  .sidebar {\n    width: 72px;\n    align-items: center;\n  }\n  .nav-item .label {\n    display: none;\n  }\n  .nav-item {\n    justify-content: center;\n    padding: 12px;\n  }\n}',
              hints: ['텍스트를 display: none으로 숨기고 아이콘만 표시해요', '너비를 72px로 줄여요'],
              estimatedMinutes: 6,
              feedback: { perfect: '축소 사이드바가 완벽해요!', good: '좋아요! 아이콘 모드가 잘 돼요.', partial: '텍스트 숨김을 확인하세요.', wrong: '텍스트를 display: none, 사이드바 너비를 72px로 줄이세요.' }
            },
            {
              id: 'c8', title: '사이드바 hover 확장',
              description: '축소된 사이드바 위에 마우스를 올리면 전체 너비로 확장되도록 만드세요.',
              difficulty: 'hard',
              starterCode: '.sidebar {\n  width: 72px;\n  /* hover 시 확장 */\n}',
              solution: '.sidebar {\n  width: 72px;\n  overflow: hidden;\n  transition: width 0.3s ease;\n  white-space: nowrap;\n}\n.sidebar:hover {\n  width: 240px;\n}\n.sidebar:hover .label {\n  opacity: 1;\n}\n.label {\n  opacity: 0;\n  transition: opacity 0.2s;\n}',
              hints: ['hover 시 width를 변경해요', 'overflow: hidden + white-space: nowrap으로 넘침을 방지해요'],
              estimatedMinutes: 6,
              feedback: { perfect: 'hover 확장이 완벽해요!', good: '좋아요! 부드럽게 확장돼요.', partial: 'transition을 추가해서 부드럽게 만드세요.', wrong: ':hover에서 width를 변경하고 transition을 추가하세요.' }
            },
            {
              id: 'c9', title: '사이드바 active 상태',
              description: '현재 페이지에 해당하는 메뉴에 active 스타일을 적용하고, 클릭 시 active를 전환하세요.',
              difficulty: 'hard',
              starterCode: '<nav class="sidebar-nav">\n  <a class="nav-item active">🏠 홈</a>\n  <a class="nav-item">🔍 탐색</a>\n  <a class="nav-item">🔔 알림</a>\n</nav>\n<script>// active 전환</script>',
              solution: '<nav class="sidebar-nav" id="sideNav">\n  <a class="nav-item active">🏠 홈</a>\n  <a class="nav-item">🔍 탐색</a>\n  <a class="nav-item">🔔 알림</a>\n</nav>\n<style>.nav-item.active { background: #f0f0f0; font-weight: bold; }</style>\n<script>\ndocument.getElementById("sideNav").addEventListener("click", (e) => {\n  const item = e.target.closest(".nav-item");\n  if (!item) return;\n  document.querySelectorAll(".nav-item").forEach(a => a.classList.remove("active"));\n  item.classList.add("active");\n});\n</script>',
              hints: ['먼저 모든 active를 제거하고 클릭된 항목에만 추가해요', 'closest()로 부모 요소를 찾아요'],
              estimatedMinutes: 6,
              feedback: { perfect: 'active 전환이 완벽해요!', good: '좋아요! 메뉴 전환이 잘 돼요.', partial: '기존 active를 먼저 제거하세요.', wrong: '모든 항목에서 active 제거 → 클릭된 항목에 active 추가.' }
            },
            {
              id: 'c10', title: '반응형 사이드바 완성',
              description: '데스크톱(전체) → 태블릿(아이콘) → 모바일(슬라이드)로 변하는 완전한 반응형 사이드바를 만드세요.',
              difficulty: 'hard',
              starterCode: '/* 완전한 반응형 사이드바 CSS */',
              solution: '.sidebar {\n  width: 240px; position: fixed; top: 0; left: 0; height: 100vh;\n  background: white; border-right: 1px solid #eee; padding: 20px;\n  transition: all 0.3s ease; z-index: 200;\n}\n.main-content { margin-left: 240px; transition: margin-left 0.3s; }\n\n@media (max-width: 1024px) and (min-width: 769px) {\n  .sidebar { width: 72px; }\n  .sidebar:hover { width: 240px; }\n  .sidebar .label { display: none; }\n  .sidebar:hover .label { display: inline; }\n  .main-content { margin-left: 72px; }\n}\n\n@media (max-width: 768px) {\n  .sidebar { left: -260px; width: 260px; box-shadow: 2px 0 10px rgba(0,0,0,0.1); }\n  .sidebar.open { left: 0; }\n  .main-content { margin-left: 0; }\n  .bottom-tab { display: flex; }\n}',
              hints: ['3단계 반응형: 전체→아이콘→슬라이드'],
              estimatedMinutes: 8,
              feedback: { perfect: '3단계 반응형 사이드바를 완벽하게 구현했어요!', good: '좋아요! 대부분의 브레이크포인트가 잘 동작해요.', partial: '태블릿/모바일 구분을 확인하세요.', wrong: '3개의 @media 쿼리로 데스크톱/태블릿/모바일을 구분하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m9', title: '소셜 미디어 UI 완성', description: '모든 컴포넌트를 합쳐요',
          type: 'coding', difficulty: 'advanced', language: 'html',
          exp: 50, estimatedMinutes: 30,
          concept: '프로젝트 완성', cstaStandard: '2-AP-17',
          learningObjectives: ['프로젝트 완성을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          projectCheckpoints: [
            { id: 'w47-cp1', title: '헤더/네비게이션', description: '고정 헤더가 있나요?', criteria: ['로고', '메뉴', '반응형'], points: 15 },
            { id: 'w47-cp2', title: '프로필 카드', description: '프로필이 완성됐나요?', criteria: ['아바타', '통계', '팔로우 버튼'], points: 20 },
            { id: 'w47-cp3', title: '피드 레이아웃', description: '게시물 피드가 있나요?', criteria: ['카드 디자인', '이미지', '텍스트'], points: 20 },
            { id: 'w47-cp4', title: '인터랙션', description: '좋아요/댓글이 동작하나요?', criteria: ['좋아요 토글', '댓글 추가', '카운터 업데이트'], points: 25 },
            { id: 'w47-cp5', title: '반응형', description: '모바일에서 잘 보이나요?', criteria: ['사이드바 숨김', '그리드 변경', '터치 친화적'], points: 20 }
          ],
          challenges: [
            {
              id: 'c1', title: 'HTML 골격 만들기',
              description: '소셜 미디어 앱의 전체 HTML 골격을 작성하세요. header, main(stories+feed), aside(sidebar), nav(bottom-tab)를 포함합니다.',
              difficulty: 'easy',
              starterCode: '<!DOCTYPE html>\n<html>\n<head><title>MySNS</title></head>\n<body>\n  <!-- 전체 구조 작성 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>MySNS</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header class="app-header">\n    <h1 class="logo">MySNS</h1>\n    <div class="header-actions">\n      <button class="icon-btn">♡</button>\n      <button class="icon-btn">📤</button>\n    </div>\n  </header>\n  <div class="app-layout">\n    <main class="feed-area">\n      <div class="stories"></div>\n      <div class="feed"></div>\n    </main>\n    <aside class="sidebar"></aside>\n  </div>\n  <nav class="bottom-tab"></nav>\n  <script src="app.js"></script>\n</body>\n</html>',
              hints: ['시멘틱 태그를 사용하세요: header, main, aside, nav', 'viewport 메타 태그를 잊지 마세요'],
              estimatedMinutes: 5,
              feedback: { perfect: 'HTML 골격이 완벽해요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '시멘틱 태그를 사용하세요.', wrong: 'header/main/aside/nav를 모두 포함하세요.' }
            },
            {
              id: 'c2', title: 'CSS 리셋 & 기본 스타일',
              description: 'CSS 리셋과 기본 변수(색상, 폰트)를 설정하세요.',
              difficulty: 'easy',
              starterCode: '/* CSS 리셋 & 변수 */',
              solution: '*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }\n:root {\n  --primary: #0095f6;\n  --bg: #fafafa;\n  --card-bg: #fff;\n  --border: #dbdbdb;\n  --text: #262626;\n  --text-light: #8e8e8e;\n}\nbody { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: var(--bg); color: var(--text); }\na { text-decoration: none; color: inherit; }\nbutton { cursor: pointer; }\nimg { max-width: 100%; display: block; }',
              hints: ['CSS 변수로 색상을 관리하면 나중에 다크모드 적용이 쉬워요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'CSS 기반이 완벽해요!', good: '좋아요! 리셋이 잘 됐어요.', partial: ':root 변수를 추가하세요.', wrong: '*, box-sizing 리셋 + :root 변수를 설정하세요.' }
            },
            {
              id: 'c3', title: '헤더 조립',
              description: '고정 헤더에 로고(왼쪽), 액션 버튼(오른쪽)을 배치하세요.',
              difficulty: 'easy',
              starterCode: '.app-header {\n  /* 고정 헤더 스타일 */\n}',
              solution: '.app-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 54px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  background: var(--card-bg);\n  border-bottom: 1px solid var(--border);\n  z-index: 100;\n}\n.logo { font-size: 22px; font-weight: 700; }\n.header-actions { display: flex; gap: 16px; }\n.icon-btn { background: none; border: none; font-size: 22px; }',
              hints: ['position: fixed + z-index로 최상단 고정', 'justify-content: space-between으로 좌우 배치'],
              estimatedMinutes: 4,
              feedback: { perfect: '헤더가 완벽해요!', good: '좋아요! 고정 헤더가 잘 됐어요.', partial: 'position: fixed를 확인하세요.', wrong: 'fixed 헤더에 flex로 좌우 배치하세요.' }
            },
            {
              id: 'c4', title: '스토리 + 피드 조립',
              description: '스토리 바(가로 스크롤)와 게시물 피드를 main 영역에 배치하세요.',
              difficulty: 'medium',
              starterCode: '.feed-area {\n  /* 메인 피드 영역 */\n}\n.stories {\n  /* 스토리 바 */\n}',
              solution: '.feed-area {\n  max-width: 614px;\n  margin: 54px auto 50px;\n  padding: 0 20px;\n}\n.stories {\n  display: flex;\n  gap: 16px;\n  padding: 16px 0;\n  overflow-x: auto;\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 24px;\n  background: var(--card-bg);\n  border-radius: 8px;\n  padding: 16px;\n}',
              hints: ['margin-top으로 헤더 높이만큼 여백', 'overflow-x: auto로 스토리 가로 스크롤'],
              estimatedMinutes: 5,
              feedback: { perfect: '피드 영역이 완벽해요!', good: '좋아요! 배치가 잘 됐어요.', partial: '헤더/하단탭 여백을 확인하세요.', wrong: 'margin-top: 54px(헤더) + margin-bottom: 50px(하단탭).' }
            },
            {
              id: 'c5', title: '사이드바 조립',
              description: '데스크톱에서 오른쪽에 사이드바(추천 계정, 프로필)를 배치하세요.',
              difficulty: 'medium',
              starterCode: '.app-layout {\n  /* 메인 + 사이드바 */\n}\n.sidebar {\n  /* 사이드바 */\n}',
              solution: '.app-layout {\n  display: flex;\n  justify-content: center;\n  gap: 32px;\n  padding-top: 54px;\n}\n.sidebar {\n  width: 320px;\n  padding: 24px 0;\n  position: sticky;\n  top: 78px;\n  height: fit-content;\n}\n.sidebar .user-info { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }\n.sidebar .suggestions h4 { color: var(--text-light); font-size: 14px; margin-bottom: 12px; }',
              hints: ['position: sticky로 스크롤 시에도 고정', 'height: fit-content로 내용 크기만큼만'],
              estimatedMinutes: 5,
              feedback: { perfect: '사이드바가 완벽해요!', good: '좋아요! 고정 사이드바가 잘 됐어요.', partial: 'sticky 포지션을 확인하세요.', wrong: 'position: sticky + top으로 스크롤 시 고정하세요.' }
            },
            {
              id: 'c6', title: '하단 탭 바 조립',
              description: '모바일 하단 탭 바를 만들고, 데스크톱에서는 숨기세요.',
              difficulty: 'medium',
              starterCode: '.bottom-tab {\n  /* 모바일 하단 탭 */\n}',
              solution: '.bottom-tab {\n  display: none;\n}\n@media (max-width: 768px) {\n  .bottom-tab {\n    display: flex;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    justify-content: space-around;\n    align-items: center;\n    height: 50px;\n    background: var(--card-bg);\n    border-top: 1px solid var(--border);\n    z-index: 100;\n  }\n  .bottom-tab a { font-size: 22px; color: var(--text); }\n  .sidebar { display: none; }\n}',
              hints: ['데스크톱: display: none, 모바일: display: flex', '모바일에서 사이드바도 숨기세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '하단 탭 전환이 완벽해요!', good: '좋아요! 반응형 전환이 잘 돼요.', partial: '사이드바 숨김도 확인하세요.', wrong: '데스크톱/모바일에서 탭바와 사이드바를 토글하세요.' }
            },
            {
              id: 'c7', title: 'JavaScript 기능 연결',
              description: '좋아요 토글, 댓글 추가, 메뉴 토글 등 핵심 JS 기능을 app.js에 작성하세요.',
              difficulty: 'hard',
              starterCode: '// app.js - 핵심 기능\n// 1. 좋아요 토글\n// 2. 댓글 추가\n// 3. 메뉴 토글',
              solution: '// app.js\n\n// 1. 좋아요 토글 (이벤트 위임)\ndocument.querySelector(".feed").addEventListener("click", (e) => {\n  if (e.target.classList.contains("like-btn")) {\n    e.target.classList.toggle("liked");\n    e.target.textContent = e.target.classList.contains("liked") ? "❤️" : "♡";\n    const countEl = e.target.parentElement.querySelector(".like-count");\n    if (countEl) {\n      let n = parseInt(countEl.textContent);\n      countEl.textContent = e.target.classList.contains("liked") ? n + 1 : n - 1;\n    }\n  }\n});\n\n// 2. 댓글 추가\nfunction postComment(postId) {\n  const input = document.querySelector("#" + postId + " .comment-input");\n  if (!input || !input.value.trim()) return;\n  const list = document.querySelector("#" + postId + " .comment-list");\n  const div = document.createElement("p");\n  div.innerHTML = "<strong>me</strong> " + input.value;\n  list.appendChild(div);\n  input.value = "";\n}\n\n// 3. 모바일 메뉴 토글\nfunction toggleSidebar() {\n  document.querySelector(".sidebar").classList.toggle("open");\n  document.querySelector(".overlay").classList.toggle("active");\n}',
              hints: ['이벤트 위임으로 동적 요소도 처리 가능', '각 기능을 모듈화하세요'],
              estimatedMinutes: 7,
              feedback: { perfect: 'JS 기능이 완벽하게 연결됐어요!', good: '좋아요! 핵심 기능이 동작해요.', partial: '이벤트 위임을 사용해보세요.', wrong: '좋아요/댓글/메뉴 3가지 기능을 모두 구현하세요.' }
            },
            {
              id: 'c8', title: '더미 데이터 생성',
              description: 'JavaScript 배열로 게시물 5개의 더미 데이터를 만들고, DOM에 동적으로 렌더링하세요.',
              difficulty: 'hard',
              starterCode: 'const posts = [\n  // 게시물 데이터 5개\n];\n\nfunction renderPosts() {\n  // 게시물을 DOM에 렌더링\n}',
              solution: 'const posts = [\n  { id: 1, user: "alice", avatar: "a1.jpg", image: "p1.jpg", likes: 42, caption: "오늘의 코딩!" },\n  { id: 2, user: "bob", avatar: "a2.jpg", image: "p2.jpg", likes: 15, caption: "새 프로젝트 시작" },\n  { id: 3, user: "charlie", avatar: "a3.jpg", image: "p3.jpg", likes: 89, caption: "CSS 마스터" },\n  { id: 4, user: "diana", avatar: "a4.jpg", image: "p4.jpg", likes: 234, caption: "첫 배포 성공!" },\n  { id: 5, user: "evan", avatar: "a5.jpg", image: "p5.jpg", likes: 7, caption: "디버깅 중..." }\n];\n\nfunction renderPosts() {\n  const feed = document.querySelector(".feed");\n  posts.forEach(post => {\n    const card = document.createElement("article");\n    card.className = "post-card";\n    card.id = "post-" + post.id;\n    card.innerHTML = "<div class=\"post-header\"><img class=\"avatar\" src=\"" + post.avatar + "\"><strong>" + post.user + "</strong></div>"\n      + "<img class=\"post-image\" src=\"" + post.image + "\">"\n      + "<div class=\"post-actions\"><button class=\"like-btn\">♡</button><span class=\"like-count\">" + post.likes + "</span></div>"\n      + "<p class=\"caption\"><strong>" + post.user + "</strong> " + post.caption + "</p>";\n    feed.appendChild(card);\n  });\n}\nrenderPosts();',
              hints: ['배열의 forEach로 각 게시물을 순회해요', 'innerHTML로 카드를 생성해요'],
              estimatedMinutes: 7,
              feedback: { perfect: '동적 렌더링이 완벽해요!', good: '좋아요! 데이터 기반 렌더링이 잘 돼요.', partial: 'innerHTML로 카드 구조를 만드세요.', wrong: '배열 데이터 + forEach + innerHTML로 카드를 생성하세요.' }
            },
            {
              id: 'c9', title: '반응형 테스트',
              description: '3개 브레이크포인트(데스크톱 1024+, 태블릿 768-1024, 모바일 768-)에서 레이아웃이 올바르게 전환되는지 CSS를 완성하세요.',
              difficulty: 'hard',
              starterCode: '/* 반응형 브레이크포인트 */',
              solution: '/* 태블릿 */\n@media (max-width: 1024px) {\n  .sidebar { display: none; }\n  .feed-area { max-width: 100%; padding: 0 16px; }\n}\n\n/* 모바일 */\n@media (max-width: 768px) {\n  .app-header { padding: 0 12px; }\n  .logo { font-size: 18px; }\n  .feed-area { margin-top: 54px; margin-bottom: 50px; padding: 0; }\n  .post-card { border-radius: 0; border-left: none; border-right: none; }\n  .stories { border-radius: 0; margin: 0 0 8px; }\n  .bottom-tab { display: flex; }\n}\n\n/* 작은 모바일 */\n@media (max-width: 480px) {\n  .avatar { width: 28px; height: 28px; }\n  .post-header { padding: 8px; }\n}',
              hints: ['3단계: 데스크톱→태블릿→모바일', '모바일에서 카드 모서리를 없애면 인스타 느낌'],
              estimatedMinutes: 7,
              feedback: { perfect: '3단계 반응형이 완벽해요!', good: '좋아요! 반응형 전환이 잘 돼요.', partial: '브레이크포인트를 더 추가하세요.', wrong: '1024px, 768px, 480px 3개의 브레이크포인트를 사용하세요.' }
            },
            {
              id: 'c10', title: '소셜 미디어 UI 최종 점검',
              description: '전체 프로젝트의 완성도를 점검하세요. 누락된 기능이 있으면 추가하고, 코드를 정리하세요.',
              difficulty: 'hard',
              starterCode: '// 최종 점검 체크리스트를 주석으로 작성하세요',
              solution: '// === 소셜 미디어 UI 최종 점검 ===\n// [O] 고정 헤더 (로고 + 액션 버튼)\n// [O] 스토리 바 (가로 스크롤, 그라데이션 링)\n// [O] 게시물 피드 (헤더/이미지/액션/캡션/댓글)\n// [O] 좋아요 토글 + 카운터 + 애니메이션\n// [O] 댓글 추가 (입력 + Enter + 삭제)\n// [O] 사이드바 (추천 계정)\n// [O] 하단 탭 바 (모바일)\n// [O] 반응형 (데스크톱/태블릿/모바일)\n// [O] CSS 변수 활용\n// [O] 이벤트 위임 패턴\n//\n// 개선 가능: 다크 모드, 무한 스크롤, 이미지 캐러셀\n// 파일 구조: index.html, style.css, app.js',
              hints: ['체크리스트로 빠진 기능이 없는지 확인해요'],
              estimatedMinutes: 5,
              feedback: { perfect: '체크리스트가 완벽해요! 모든 기능을 구현했어요!', good: '좋아요! 대부분의 기능이 완성됐어요.', partial: '빠진 항목을 확인하세요.', wrong: '10가지 핵심 기능을 모두 체크하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w47-m10', title: '소셜 미디어 UI 리뷰', description: 'UI 지식을 점검해요',
          type: 'quiz', difficulty: 'intermediate', language: 'html',
          exp: 20, estimatedMinutes: 32,
          concept: 'UI 복습', cstaStandard: '2-AP-17',
          learningObjectives: ['UI 복습을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 앱의 UI를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'Flexbox vs Grid 선택',
              description: '다음 중 Flexbox가 더 적합한 경우는? (1) 1차원 가로 정렬 (2) 2차원 그리드 레이아웃 (3) 행과 열 동시 제어',
              difficulty: 'easy',
              starterCode: '// 정답 번호를 적으세요\nconst answer = ',
              solution: '// 정답: 1번 - Flexbox는 1차원(가로 또는 세로) 정렬에 적합\nconst answer = 1;\n// Flexbox: 한 방향 정렬 (네비게이션, 버튼 그룹)\n// Grid: 2차원 배치 (갤러리, 대시보드)',
              hints: ['Flexbox는 한 방향, Grid는 두 방향이에요'],
              estimatedMinutes: 2,
              feedback: { perfect: 'Flexbox와 Grid의 차이를 정확히 알고 있어요!', good: '좋아요! 개념을 이해했어요.', partial: '1차원 vs 2차원 차이를 기억하세요.', wrong: 'Flexbox는 1차원(한 줄), Grid는 2차원(행+열)이에요.' }
            },
            {
              id: 'c2', title: 'position 속성 이해',
              description: '하단 탭 바가 항상 화면 하단에 고정되려면 어떤 position 값을 사용해야 하나요?',
              difficulty: 'easy',
              starterCode: '.bottom-tab {\n  position: ???;\n  bottom: 0;\n}',
              solution: '.bottom-tab {\n  position: fixed;\n  bottom: 0;\n}\n/* fixed: 뷰포트 기준 고정 (스크롤해도 고정)\n   sticky: 스크롤 위치에 따라 고정\n   absolute: 부모 기준 위치\n   relative: 원래 위치 기준 */',
              hints: ['뷰포트에 고정하려면 fixed를 사용해요'],
              estimatedMinutes: 2,
              feedback: { perfect: 'position: fixed를 정확히 알고 있어요!', good: '좋아요!', partial: 'fixed vs sticky의 차이를 확인하세요.', wrong: 'fixed는 화면에 고정, sticky는 스크롤 위치에 따라 고정이에요.' }
            },
            {
              id: 'c3', title: 'classList 메서드',
              description: 'classList의 4가지 메서드(add, remove, toggle, contains)의 역할을 주석으로 설명하세요.',
              difficulty: 'easy',
              starterCode: '// classList 메서드 설명\n// add: ???\n// remove: ???\n// toggle: ???\n// contains: ???',
              solution: '// classList 메서드 설명\n// add("클래스명"): 클래스를 추가\n// remove("클래스명"): 클래스를 제거\n// toggle("클래스명"): 있으면 제거, 없으면 추가\n// contains("클래스명"): 클래스가 있는지 true/false 반환',
              hints: ['toggle은 add와 remove를 합친 것이에요'],
              estimatedMinutes: 2,
              feedback: { perfect: '4가지 메서드를 모두 이해했어요!', good: '좋아요! 잘 설명했어요.', partial: '빠진 메서드가 있어요.', wrong: 'add(추가), remove(제거), toggle(전환), contains(확인)이에요.' }
            },
            {
              id: 'c4', title: '@media 쿼리 문법',
              description: '768px 이하에서 사이드바를 숨기는 올바른 @media 쿼리를 작성하세요.',
              difficulty: 'medium',
              starterCode: '/* 모바일에서 사이드바 숨기기 */',
              solution: '@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}',
              hints: ['max-width는 "이하"를 의미해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '@media 쿼리를 정확히 작성했어요!', good: '좋아요! 문법이 맞아요.', partial: 'max-width와 min-width를 구분하세요.', wrong: '@media (max-width: 768px) { .sidebar { display: none; } }' }
            },
            {
              id: 'c5', title: 'CSS 변수 활용',
              description: ':root에 primary 색상 변수를 정의하고, 버튼에서 var()로 사용하세요.',
              difficulty: 'medium',
              starterCode: '/* CSS 변수 정의 및 사용 */',
              solution: ':root {\n  --primary: #0095f6;\n}\n.btn-primary {\n  background: var(--primary);\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n}',
              hints: [':root에 --변수명으로 정의, var(--변수명)으로 사용'],
              estimatedMinutes: 3,
              feedback: { perfect: 'CSS 변수를 완벽히 활용했어요!', good: '좋아요! 변수가 잘 적용됐어요.', partial: ':root에 변수를 정의하세요.', wrong: ':root { --primary: 색상; } → background: var(--primary);' }
            },
            {
              id: 'c6', title: 'DOM 조작 순서',
              description: '새 요소를 만들어서 추가하는 올바른 순서를 나열하세요.',
              difficulty: 'medium',
              starterCode: '// 올바른 순서로 번호를 매기세요\n// A: appendChild(element)\n// B: element.textContent = "텍스트"\n// C: document.createElement("div")\n// 순서: ???',
              solution: '// 올바른 순서\n// 1. C: document.createElement("div") - 요소 생성\n// 2. B: element.textContent = "텍스트" - 내용 설정\n// 3. A: appendChild(element) - DOM에 추가\n// 순서: C -> B -> A',
              hints: ['만들고 → 설정하고 → 추가하는 순서예요'],
              estimatedMinutes: 3,
              feedback: { perfect: 'DOM 조작 순서를 완벽히 이해했어요!', good: '좋아요! 순서가 맞아요.', partial: '생성 → 설정 → 추가 순서를 기억하세요.', wrong: 'createElement → 속성설정 → appendChild 순서예요.' }
            },
            {
              id: 'c7', title: '이벤트 위임 장점',
              description: '각 버튼에 개별적으로 이벤트를 등록하는 대신, 이벤트 위임을 사용하면 좋은 이유 3가지를 설명하세요.',
              difficulty: 'hard',
              starterCode: '// 이벤트 위임의 장점 3가지\n// 1: ???\n// 2: ???\n// 3: ???',
              solution: '// 이벤트 위임의 장점 3가지\n// 1: 메모리 절약 - 이벤트 리스너가 하나만 필요\n// 2: 동적 요소 처리 - 나중에 추가된 요소도 자동으로 이벤트가 동작\n// 3: 코드 간결 - 반복문 없이 한 번에 처리 가능',
              hints: ['리스너 수, 동적 요소, 코드량을 생각해보세요'],
              estimatedMinutes: 4,
              feedback: { perfect: '이벤트 위임의 장점을 정확히 알고 있어요!', good: '좋아요! 핵심을 잘 짚었어요.', partial: '동적 요소 처리 장점도 중요해요.', wrong: '메모리 절약, 동적 요소 대응, 코드 간결화가 핵심이에요.' }
            },
            {
              id: 'c8', title: 'object-fit 이해',
              description: 'object-fit: cover와 object-fit: contain의 차이를 설명하고, SNS 게시물 이미지에 적합한 것을 선택하세요.',
              difficulty: 'hard',
              starterCode: '// cover vs contain\n// cover: ???\n// contain: ???\n// SNS 게시물에 적합한 것: ???',
              solution: '// cover: 비율 유지하면서 영역을 꽉 채움 (잘릴 수 있음)\n// contain: 비율 유지하면서 영역 안에 맞춤 (여백이 생길 수 있음)\n// SNS 게시물에 적합한 것: cover\n// 이유: 프로필 아바타, 게시물 썸네일 등은 빈 공간 없이 채우는 게 좋음',
              hints: ['cover는 채우기, contain은 맞추기'],
              estimatedMinutes: 3,
              feedback: { perfect: 'object-fit을 완벽히 이해했어요!', good: '좋아요! 차이를 잘 설명했어요.', partial: 'cover는 잘릴 수 있고, contain은 여백이 생겨요.', wrong: 'cover는 꽉 채움(잘림), contain은 안에 맞춤(여백).' }
            },
            {
              id: 'c9', title: 'localStorage 활용',
              description: 'localStorage에 데이터를 저장하고 불러오는 코드를 작성하세요. JSON 데이터도 처리할 수 있어야 합니다.',
              difficulty: 'hard',
              starterCode: '// 1. 문자열 저장/불러오기\n\n// 2. 객체(JSON) 저장/불러오기',
              solution: '// 1. 문자열 저장/불러오기\nlocalStorage.setItem("username", "coder123");\nconst name = localStorage.getItem("username"); // "coder123"\n\n// 2. 객체(JSON) 저장/불러오기\nconst likes = { post1: true, post2: false };\nlocalStorage.setItem("likes", JSON.stringify(likes));\nconst saved = JSON.parse(localStorage.getItem("likes"));\nconsole.log(saved.post1); // true',
              hints: ['JSON.stringify로 객체→문자열', 'JSON.parse로 문자열→객체'],
              estimatedMinutes: 4,
              feedback: { perfect: 'localStorage와 JSON 변환을 완벽히 이해했어요!', good: '좋아요! 기본 사용법을 잘 알아요.', partial: 'JSON.stringify/parse를 확인하세요.', wrong: '객체는 JSON.stringify로 변환해서 저장하고, JSON.parse로 복원해요.' }
            },
            {
              id: 'c10', title: '전체 프로젝트 회고',
              description: '이번 프로젝트에서 배운 핵심 기술 5가지와 개선할 점 2가지를 정리하세요.',
              difficulty: 'hard',
              starterCode: '// 배운 것 5가지:\n// 1: ???\n// 개선할 점 2가지:\n// 1: ???',
              solution: '// 배운 것 5가지:\n// 1: CSS Flexbox & Grid 레이아웃\n// 2: 반응형 디자인 (@media query)\n// 3: DOM 조작 (createElement, appendChild)\n// 4: 이벤트 처리 (addEventListener, 이벤트 위임)\n// 5: localStorage로 상태 저장\n//\n// 개선할 점 2가지:\n// 1: 다크 모드 추가 (CSS 변수 활용)\n// 2: 무한 스크롤 또는 페이지네이션 구현',
              hints: ['CSS, JS, DOM, 이벤트, 저장소를 생각해보세요'],
              estimatedMinutes: 3,
              feedback: { perfect: '훌륭한 회고예요! 학습을 잘 정리했어요!', good: '좋아요! 핵심 기술을 잘 짚었어요.', partial: '빠진 기술이 있어요.', wrong: 'CSS(Flex/Grid), 반응형, DOM, 이벤트, localStorage 5가지예요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        }
      ],
      project: {
        id: 'project-w47',
        title: '소셜 미디어 UI',
        description: '인스타그램/트위터 스타일의 반응형 소셜 미디어 UI를 만드세요.',
        difficulty: 'advanced',
        duration: '5-6시간',
        requirements: ['고정 헤더', '프로필 카드', '게시물 피드', '좋아요/댓글', '반응형'],
        tech: ['HTML', 'CSS', 'JavaScript', 'Flexbox', 'Grid'],
        exp: 130,
        badge: 'UI 디자이너'
      }
    },
    // ============================================================
    // Week 48: 개인 포트폴리오 + GitHub Pages 배포
    // ============================================================
    {
      id: 'week-48',
      number: 48,
      title: '포트폴리오 + GitHub Pages 배포',
      description: '개인 포트폴리오 웹사이트를 만들고 GitHub Pages로 배포해요',
      missions: [
        {
          id: 'w48-m1', title: '포트폴리오 기획', description: '나를 소개하는 웹사이트를 기획해요',
          type: 'interactive-lesson', difficulty: 'intermediate', language: 'html',
          exp: 25, estimatedMinutes: 17,
          concept: '포트폴리오 설계', cstaStandard: '2-AP-19',
          learningObjectives: ['포트폴리오 설계을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '포트폴리오 섹션 기획',
              description: '포트폴리오에 필요한 섹션 5가지를 HTML 주석으로 작성하세요.',
              difficulty: 'easy',
              starterCode: '<!-- 포트폴리오 섹션 기획 -->\n<!-- 섹션 1: ??? -->\n<!-- 섹션 2: ??? -->\n<!-- 섹션 3: ??? -->\n<!-- 섹션 4: ??? -->\n<!-- 섹션 5: ??? -->',
              solution: '<!-- 포트폴리오 섹션 기획 -->\n<!-- 섹션 1: 히어로 (이름, 직함, CTA) -->\n<!-- 섹션 2: 자기소개 (About Me) -->\n<!-- 섹션 3: 프로젝트 갤러리 (작품 목록) -->\n<!-- 섹션 4: 스킬 (기술 스택) -->\n<!-- 섹션 5: 연락처 (Contact Form) -->',
              hints: ['첫인상, 소개, 작품, 기술, 연락처 순서가 일반적이에요'],
              estimatedMinutes: 3,
              feedback: { perfect: '포트폴리오 구조를 완벽하게 기획했어요!', good: '좋아요! 핵심 섹션이 포함됐어요.', partial: '프로젝트 갤러리나 연락처가 빠졌어요.', wrong: '히어로/소개/프로젝트/스킬/연락처 5개 섹션이 기본이에요.' }
            },
            {
              id: 'c2', title: 'HTML 시멘틱 구조',
              description: '포트폴리오의 HTML 골격을 시멘틱 태그(header, section, footer)로 작성하세요.',
              difficulty: 'easy',
              starterCode: '<!DOCTYPE html>\n<html lang="ko">\n<body>\n  <!-- 시멘틱 태그로 구조 작성 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <header>\n    <nav>네비게이션</nav>\n  </header>\n  <section id="hero">히어로</section>\n  <section id="about">소개</section>\n  <section id="projects">프로젝트</section>\n  <section id="skills">스킬</section>\n  <section id="contact">연락처</section>\n  <footer>푸터</footer>\n</body>\n</html>',
              hints: ['각 섹션에 id를 부여하면 앵커 링크로 이동할 수 있어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '시멘틱 HTML 구조가 완벽해요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: 'section에 id를 추가하세요.', wrong: 'header/section/footer 시멘틱 태그를 사용하세요.' }
            },
            {
              id: 'c3', title: '네비게이션 만들기',
              description: '각 섹션으로 이동하는 앵커 링크 네비게이션을 만드세요.',
              difficulty: 'easy',
              starterCode: '<nav>\n  <!-- 메뉴 링크들 -->\n</nav>',
              solution: '<nav style="display:flex;justify-content:space-between;align-items:center;padding:16px 24px;position:fixed;top:0;left:0;right:0;background:white;z-index:100;">\n  <a href="#" style="font-weight:bold;font-size:20px;">Portfolio</a>\n  <div style="display:flex;gap:24px;">\n    <a href="#about">소개</a>\n    <a href="#projects">프로젝트</a>\n    <a href="#skills">스킬</a>\n    <a href="#contact">연락처</a>\n  </div>\n</nav>',
              hints: ['href="#섹션id"로 앵커 링크를 만들어요', 'position: fixed로 상단 고정'],
              estimatedMinutes: 4,
              feedback: { perfect: '네비게이션이 완벽해요!', good: '좋아요! 링크가 잘 연결됐어요.', partial: '앵커 링크(#id)를 사용하세요.', wrong: 'href="#about" 형태로 섹션 id에 연결하세요.' }
            },
            {
              id: 'c4', title: '스무스 스크롤',
              description: 'CSS로 부드러운 스크롤 효과를 추가하세요.',
              difficulty: 'medium',
              starterCode: '/* 부드러운 스크롤 */',
              solution: 'html {\n  scroll-behavior: smooth;\n}\n\nsection {\n  scroll-margin-top: 70px; /* 고정 헤더 높이만큼 여백 */\n}',
              hints: ['scroll-behavior: smooth 한 줄이면 돼요', 'scroll-margin-top으로 헤더에 가리지 않게 해요'],
              estimatedMinutes: 3,
              feedback: { perfect: '스무스 스크롤이 완벽해요!', good: '좋아요! 부드럽게 이동해요.', partial: 'scroll-margin-top을 추가하면 헤더 아래에 정확히 멈춰요.', wrong: 'html { scroll-behavior: smooth; }를 추가하세요.' }
            },
            {
              id: 'c5', title: '색상 팔레트 설정',
              description: 'CSS 변수로 포트폴리오 색상 팔레트를 설정하세요. 메인, 보조, 배경, 텍스트 색상이 필요합니다.',
              difficulty: 'medium',
              starterCode: ':root {\n  /* 색상 변수 정의 */\n}',
              solution: ':root {\n  --primary: #667eea;\n  --secondary: #764ba2;\n  --bg: #f8f9fa;\n  --card-bg: #ffffff;\n  --text: #333333;\n  --text-light: #6c757d;\n  --gradient: linear-gradient(135deg, var(--primary), var(--secondary));\n}',
              hints: ['그라데이션도 변수로 정의할 수 있어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '색상 팔레트가 완벽해요!', good: '좋아요! 변수가 잘 정의됐어요.', partial: '그라데이션 변수도 추가하면 좋아요.', wrong: '--primary, --secondary, --bg, --text 변수를 정의하세요.' }
            },
            {
              id: 'c6', title: '타이포그래피 설정',
              description: 'CSS로 제목과 본문의 타이포그래피(폰트, 크기, 간격)를 설정하세요.',
              difficulty: 'medium',
              starterCode: '/* 타이포그래피 */',
              solution: 'body {\n  font-family: "Pretendard", -apple-system, sans-serif;\n  font-size: 16px;\n  line-height: 1.6;\n  color: var(--text);\n}\nh1 { font-size: 3rem; font-weight: 800; line-height: 1.2; }\nh2 { font-size: 2rem; font-weight: 700; margin-bottom: 24px; }\nh3 { font-size: 1.25rem; font-weight: 600; }\np { margin-bottom: 16px; color: var(--text-light); }',
              hints: ['rem 단위로 반응형 폰트 크기를 설정해요', 'line-height로 가독성을 높여요'],
              estimatedMinutes: 4,
              feedback: { perfect: '타이포그래피가 완벽해요!', good: '좋아요! 폰트 계층이 잘 잡혔어요.', partial: 'line-height를 추가하세요.', wrong: 'rem 단위 + line-height + font-weight로 계층을 만드세요.' }
            },
            {
              id: 'c7', title: '반응형 컨테이너',
              description: '최대 너비를 제한하고 가운데 정렬되는 반응형 컨테이너를 만드세요.',
              difficulty: 'hard',
              starterCode: '.container {\n  /* 반응형 컨테이너 */\n}',
              solution: '.container {\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n\nsection {\n  padding: 80px 0;\n}\n\n@media (max-width: 768px) {\n  .container { padding: 0 16px; }\n  section { padding: 60px 0; }\n  h1 { font-size: 2rem; }\n  h2 { font-size: 1.5rem; }\n}',
              hints: ['max-width + margin: 0 auto로 가운데 정렬', '모바일에서 패딩과 폰트 크기를 줄이세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '반응형 컨테이너가 완벽해요!', good: '좋아요! 기본 레이아웃이 잘 됐어요.', partial: '모바일 대응을 추가하세요.', wrong: 'max-width + margin: auto + 반응형을 조합하세요.' }
            },
            {
              id: 'c8', title: '파비콘과 메타 태그',
              description: 'head에 파비콘, description, OG 태그를 추가하세요.',
              difficulty: 'hard',
              starterCode: '<head>\n  <!-- 메타 태그 추가 -->\n</head>',
              solution: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="프론트엔드 개발자 포트폴리오">\n  <meta property="og:title" content="나의 포트폴리오">\n  <meta property="og:description" content="웹 개발 프로젝트 모음">\n  <meta property="og:image" content="preview.png">\n  <link rel="icon" href="favicon.ico">\n  <title>나의 포트폴리오</title>\n</head>',
              hints: ['og: 태그는 SNS에서 링크 공유 시 미리보기에 사용돼요'],
              estimatedMinutes: 5,
              feedback: { perfect: 'SEO 메타 태그가 완벽해요!', good: '좋아요! 핵심 태그가 포함됐어요.', partial: 'OG 태그를 추가하세요.', wrong: 'description, og:title, og:image를 포함하세요.' }
            },
            {
              id: 'c9', title: '파일 구조 설계',
              description: '포트폴리오 프로젝트의 폴더/파일 구조를 주석으로 작성하세요.',
              difficulty: 'hard',
              starterCode: '// 프로젝트 파일 구조\n// / (루트)\n// ├── ???',
              solution: '// 프로젝트 파일 구조\n// / (루트)\n// ├── index.html\n// ├── style.css\n// ├── script.js\n// ├── favicon.ico\n// ├── images/\n// │   ├── profile.jpg\n// │   ├── project1.png\n// │   ├── project2.png\n// │   └── preview.png\n// └── README.md',
              hints: ['HTML/CSS/JS 파일과 이미지 폴더가 기본이에요'],
              estimatedMinutes: 3,
              feedback: { perfect: '파일 구조가 잘 정리됐어요!', good: '좋아요! 기본 구조가 맞아요.', partial: 'images 폴더를 추가하세요.', wrong: 'index.html, style.css, script.js + images/ 폴더가 기본이에요.' }
            },
            {
              id: 'c10', title: '포트폴리오 기획서 완성',
              description: '전체 포트폴리오의 기획서를 주석으로 작성하세요. 섹션별 내용, 색상, 폰트, 참고 사이트를 포함합니다.',
              difficulty: 'hard',
              starterCode: '// === 포트폴리오 기획서 ===',
              solution: '// === 포트폴리오 기획서 ===\n// 테마: 미니멀 & 모던\n// 색상: #667eea(메인), #764ba2(보조), #f8f9fa(배경)\n// 폰트: Pretendard (한글), system-ui (영문)\n//\n// 섹션 1: 히어로 - 이름, 한 줄 소개, CTA 버튼\n// 섹션 2: About - 프로필 사진, 자기소개, 연차\n// 섹션 3: Projects - 카드형 갤러리, 호버 효과\n// 섹션 4: Skills - 프로그레스 바, 아이콘\n// 섹션 5: Contact - 이메일 폼, 소셜 링크\n//\n// 기능: 반응형, 다크모드, 스무스 스크롤\n// 배포: GitHub Pages',
              hints: ['색상, 폰트, 섹션 내용, 기능을 모두 포함하세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '완벽한 기획서예요!', good: '좋아요! 핵심 정보가 포함됐어요.', partial: '기능이나 배포 계획을 추가하세요.', wrong: '테마/색상/폰트/섹션/기능/배포를 모두 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m2', title: '히어로 섹션', description: '임팩트 있는 첫 화면을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 19,
          concept: '히어로 레이아웃', cstaStandard: '2-AP-19',
          learningObjectives: ['히어로 레이아웃을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            { id: 'c1', title: '히어로 배경', description: '전체 화면 배경 이미지를 설정하세요.', difficulty: 'easy', starterCode: '.hero {}', solution: '.hero {height:100vh;background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(bg.jpg) center/cover;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c2', title: '가운데 텍스트', description: '히어로 텍스트를 정중앙에 배치하세요.', difficulty: 'easy', starterCode: '.hero-content {}', solution: '.hero-content {position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:white;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c3', title: 'CTA 버튼', description: '눈에 띄는 CTA 버튼을 만드세요.', difficulty: 'easy', starterCode: '.cta {}', solution: '.cta {padding:15px 40px;font-size:18px;background:#667eea;color:white;border:none;border-radius:30px;cursor:pointer;transition:transform 0.3s;} .cta:hover{transform:scale(1.05);}', hints: ['단계별로 진행하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c4', title: '타이핑 효과', description: 'CSS로 타이핑 애니메이션을 만드세요.', difficulty: 'medium', starterCode: '.typing {}', solution: '.typing {border-right:3px solid;white-space:nowrap;overflow:hidden;animation:typing 3s steps(20) forwards, blink 0.8s infinite;} @keyframes typing{from{width:0}to{width:100%}} @keyframes blink{50%{border-color:transparent}}', hints: ['단계별로 진행하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c5', title: '스크롤 화살표', description: '아래로 스크롤을 유도하는 화살표를 만드세요.', difficulty: 'medium', starterCode: '.scroll-arrow {}', solution: '.scroll-arrow {position:absolute;bottom:30px;left:50%;transform:translateX(-50%);animation:bounce 2s infinite;} @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(10px)}}', hints: ['단계별로 진행하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c6', title: '파티클 배경', description: '움직이는 배경 효과를 CSS로 만드세요.', difficulty: 'medium', starterCode: '.particles {}', solution: '.particles {background:radial-gradient(circle,rgba(255,255,255,0.1) 1px,transparent 1px);background-size:30px 30px;animation:float 20s linear infinite;} @keyframes float{to{background-position:100px 200px}}', hints: ['단계별로 진행하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c7', title: '네비게이션 통합', description: '히어로 위에 투명 네비게이션을 올리세요.', difficulty: 'hard', starterCode: 'nav {}', solution: 'nav {position:fixed;top:0;width:100%;display:flex;justify-content:space-between;padding:20px 40px;background:transparent;z-index:10;transition:background 0.3s;} nav.scrolled{background:rgba(0,0,0,0.9);}', hints: ['단계별로 진행하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c8', title: '반응형 히어로', description: '모바일 대응 히어로를 만드세요.', difficulty: 'hard', starterCode: '@media {}', solution: '@media (max-width:768px){.hero-content h1{font-size:28px;} .cta{padding:12px 30px;font-size:16px;}}', hints: ['단계별로 진행하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c9', title: '소셜 링크', description: 'GitHub/LinkedIn 링크를 아이콘으로 추가하세요.', difficulty: 'hard', starterCode: '<div class="social"></div>', solution: '<div class="social"><a href="#" aria-label="GitHub">GH</a><a href="#" aria-label="LinkedIn">LI</a></div>', hints: ['단계별로 진행하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c10', title: '전체 히어로 통합', description: '완전한 히어로 섹션을 만드세요.', difficulty: 'hard', starterCode: '<!-- 히어로 -->', solution: '<section class="hero"><nav><a class="logo">Portfolio</a><div class="nav-links"><a href="#about">소개</a><a href="#projects">프로젝트</a><a href="#contact">연락처</a></div></nav><div class="hero-content"><h1>안녕하세요, 개발자입니다</h1><p>웹을 만드는 것을 좋아해요</p><a href="#projects" class="cta">프로젝트 보기</a></div><div class="scroll-arrow">v</div></section>', hints: ['단계별로 진행하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m3', title: '자기소개 섹션', description: 'About Me 섹션을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 21,
          concept: '섹션 디자인', cstaStandard: '2-AP-19',
          learningObjectives: ['섹션 디자인을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'About 섹션 HTML',
              description: 'About Me 섹션의 기본 HTML을 작성하세요. 프로필 이미지와 소개 텍스트를 포함합니다.',
              difficulty: 'easy',
              starterCode: '<section id="about">\n  <div class="container">\n    <!-- About 내용 -->\n  </div>\n</section>',
              solution: '<section id="about">\n  <div class="container">\n    <h2>About Me</h2>\n    <div class="about-content">\n      <img src="profile.jpg" alt="프로필" class="about-image">\n      <div class="about-text">\n        <h3>안녕하세요!</h3>\n        <p>웹 개발을 좋아하는 학생이에요. HTML, CSS, JavaScript로 다양한 프로젝트를 만들고 있어요.</p>\n        <p>새로운 기술을 배우고 문제를 해결하는 것을 즐깁니다.</p>\n      </div>\n    </div>\n  </div>\n</section>',
              hints: ['이미지와 텍스트를 나란히 배치할 구조를 만드세요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'About 섹션 HTML이 완벽해요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '프로필 이미지를 포함하세요.', wrong: '이미지 + 텍스트 구조로 만드세요.' }
            },
            {
              id: 'c2', title: 'About 2열 레이아웃',
              description: '프로필 이미지(왼쪽)와 텍스트(오른쪽)를 Flexbox로 나란히 배치하세요.',
              difficulty: 'easy',
              starterCode: '.about-content {\n  /* 2열 레이아웃 */\n}\n.about-image {\n  /* 이미지 스타일 */\n}',
              solution: '.about-content {\n  display: flex;\n  gap: 48px;\n  align-items: center;\n}\n.about-image {\n  width: 300px;\n  height: 300px;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.1);\n}\n.about-text {\n  flex: 1;\n}',
              hints: ['flex + gap으로 간격을 줘요', 'border-radius로 둥근 모서리를 만들어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '2열 레이아웃이 완벽해요!', good: '좋아요! 배치가 잘 됐어요.', partial: '이미지에 border-radius를 추가하세요.', wrong: 'display: flex + gap으로 나란히 배치하세요.' }
            },
            {
              id: 'c3', title: '프로필 이미지 효과',
              description: '프로필 이미지에 그라데이션 테두리와 hover 효과를 추가하세요.',
              difficulty: 'easy',
              starterCode: '.about-image {\n  width: 300px;\n  /* 테두리와 hover 추가 */\n}',
              solution: '.about-image {\n  width: 300px;\n  height: 300px;\n  border-radius: 20px;\n  object-fit: cover;\n  border: 4px solid transparent;\n  background-image: linear-gradient(white, white), var(--gradient);\n  background-origin: border-box;\n  background-clip: padding-box, border-box;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.about-image:hover {\n  transform: scale(1.03);\n  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);\n}',
              hints: ['background-clip으로 그라데이션 테두리를 만들어요'],
              estimatedMinutes: 5,
              feedback: { perfect: '이미지 효과가 멋져요!', good: '좋아요! hover 효과가 잘 동작해요.', partial: 'transition을 추가하세요.', wrong: 'hover에 transform + box-shadow를 변경하세요.' }
            },
            {
              id: 'c4', title: '타임라인 UI',
              description: '학습/경험 타임라인을 CSS로 만드세요. 왼쪽 세로 선 + 점 + 오른쪽 내용 구조입니다.',
              difficulty: 'medium',
              starterCode: '<div class="timeline">\n  <div class="timeline-item">\n    <div class="timeline-dot"></div>\n    <div class="timeline-content">\n      <h4>2024</h4>\n      <p>코딩 시작</p>\n    </div>\n  </div>\n</div>\n<style>/* 타임라인 스타일 */</style>',
              solution: '<div class="timeline">\n  <div class="timeline-item">\n    <div class="timeline-dot"></div>\n    <div class="timeline-content"><h4>2024</h4><p>HTML/CSS 학습 시작</p></div>\n  </div>\n  <div class="timeline-item">\n    <div class="timeline-dot"></div>\n    <div class="timeline-content"><h4>2025</h4><p>JavaScript 프로젝트 시작</p></div>\n  </div>\n</div>\n<style>\n.timeline { position: relative; padding-left: 30px; }\n.timeline::before { content: ""; position: absolute; left: 8px; top: 0; bottom: 0; width: 2px; background: var(--primary); }\n.timeline-item { position: relative; margin-bottom: 24px; }\n.timeline-dot { position: absolute; left: -26px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--primary); border: 2px solid white; }\n.timeline-content h4 { color: var(--primary); margin-bottom: 4px; }\n</style>',
              hints: ['::before로 세로 선을 만들어요', 'position: absolute로 점을 배치해요'],
              estimatedMinutes: 6,
              feedback: { perfect: '타임라인이 아름다워요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: '세로 선이나 점의 위치를 조정하세요.', wrong: '::before로 세로 선, absolute로 점을 배치하세요.' }
            },
            {
              id: 'c5', title: '숫자 카운터 UI',
              description: '프로젝트 수, 학습 시간 등을 숫자로 보여주는 카운터 UI를 만드세요.',
              difficulty: 'medium',
              starterCode: '<div class="counters">\n  <!-- 카운터 3개 -->\n</div>',
              solution: '<div class="counters" style="display:flex;gap:48px;margin-top:32px;">\n  <div class="counter" style="text-align:center;">\n    <span style="font-size:36px;font-weight:800;color:var(--primary);">10+</span>\n    <p style="color:var(--text-light);font-size:14px;">프로젝트</p>\n  </div>\n  <div class="counter" style="text-align:center;">\n    <span style="font-size:36px;font-weight:800;color:var(--primary);">200+</span>\n    <p style="color:var(--text-light);font-size:14px;">학습 시간</p>\n  </div>\n  <div class="counter" style="text-align:center;">\n    <span style="font-size:36px;font-weight:800;color:var(--primary);">5</span>\n    <p style="color:var(--text-light);font-size:14px;">기술 스택</p>\n  </div>\n</div>',
              hints: ['큰 숫자 + 작은 라벨 구조'],
              estimatedMinutes: 4,
              feedback: { perfect: '카운터 UI가 멋져요!', good: '좋아요! 숫자가 눈에 띄어요.', partial: '숫자 크기를 키워서 강조하세요.', wrong: '큰 font-size + bold 숫자 + 작은 설명 텍스트로 만드세요.' }
            },
            {
              id: 'c6', title: '관심 분야 태그',
              description: '관심 분야를 태그(pill) 형태로 나열하세요.',
              difficulty: 'medium',
              starterCode: '<div class="interests">\n  <!-- 관심 분야 태그 -->\n</div>\n<style>.tag { /* 태그 스타일 */ }</style>',
              solution: '<div class="interests" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px;">\n  <span class="tag">🌐 웹 개발</span>\n  <span class="tag">🎨 UI/UX</span>\n  <span class="tag">🐍 Python</span>\n  <span class="tag">🤖 AI</span>\n  <span class="tag">🎮 게임 개발</span>\n</div>\n<style>\n.tag {\n  padding: 6px 16px;\n  background: linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));\n  color: var(--primary);\n  border-radius: 20px;\n  font-size: 14px;\n  font-weight: 500;\n}\n</style>',
              hints: ['flex-wrap: wrap으로 줄바꿈 허용', 'border-radius: 20px로 pill 모양'],
              estimatedMinutes: 4,
              feedback: { perfect: '태그 UI가 깔끔해요!', good: '좋아요! 태그가 잘 표시돼요.', partial: 'flex-wrap을 추가하세요.', wrong: 'pill 모양(큰 border-radius) + flex-wrap으로 나열하세요.' }
            },
            {
              id: 'c7', title: 'About 모바일 반응형',
              description: '모바일(768px 이하)에서 이미지가 위, 텍스트가 아래로 배치되도록 변경하세요.',
              difficulty: 'hard',
              starterCode: '/* 모바일 About 반응형 */',
              solution: '@media (max-width: 768px) {\n  .about-content {\n    flex-direction: column;\n    text-align: center;\n  }\n  .about-image {\n    width: 200px;\n    height: 200px;\n    margin: 0 auto;\n  }\n  .counters {\n    justify-content: center;\n  }\n  .interests {\n    justify-content: center;\n  }\n}',
              hints: ['flex-direction: column으로 세로 배치', 'text-align: center로 가운데 정렬'],
              estimatedMinutes: 5,
              feedback: { perfect: '모바일 About이 완벽해요!', good: '좋아요! 세로 배치가 잘 됐어요.', partial: 'flex-direction: column을 확인하세요.', wrong: 'column 방향으로 바꾸고 이미지 크기를 줄이세요.' }
            },
            {
              id: 'c8', title: '다운로드 버튼',
              description: '이력서 다운로드 버튼을 만드세요. 그라데이션 배경, hover 효과, download 속성을 포함합니다.',
              difficulty: 'hard',
              starterCode: '<a class="download-btn">이력서 다운로드</a>\n<style>.download-btn { /* 스타일 */ }</style>',
              solution: '<a href="resume.pdf" download class="download-btn">📄 이력서 다운로드</a>\n<style>\n.download-btn {\n  display: inline-block;\n  padding: 12px 32px;\n  background: var(--gradient);\n  color: white;\n  border-radius: 30px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: transform 0.3s, box-shadow 0.3s;\n  margin-top: 16px;\n}\n.download-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\n}\n</style>',
              hints: ['download 속성으로 파일을 다운로드할 수 있어요', '그라데이션 + hover로 버튼을 꾸미세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '다운로드 버튼이 멋져요!', good: '좋아요! download 속성을 잘 사용했어요.', partial: 'download 속성을 추가하세요.', wrong: 'a 태그에 download 속성 + href로 파일 경로를 지정하세요.' }
            },
            {
              id: 'c9', title: '소셜 링크 아이콘',
              description: 'GitHub, LinkedIn, 이메일 링크를 아이콘으로 표시하세요.',
              difficulty: 'hard',
              starterCode: '<div class="social-links">\n  <!-- 소셜 아이콘 -->\n</div>',
              solution: '<div class="social-links" style="display:flex;gap:16px;margin-top:16px;">\n  <a href="https://github.com" target="_blank" class="social-icon" aria-label="GitHub" style="width:40px;height:40px;border-radius:50%;background:#333;color:white;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:transform 0.3s;">GH</a>\n  <a href="https://linkedin.com" target="_blank" class="social-icon" aria-label="LinkedIn" style="width:40px;height:40px;border-radius:50%;background:#0077b5;color:white;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:transform 0.3s;">LI</a>\n  <a href="mailto:me@email.com" class="social-icon" aria-label="Email" style="width:40px;height:40px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;text-decoration:none;transition:transform 0.3s;">@</a>\n</div>',
              hints: ['원형 아이콘 + 각 서비스 색상', 'aria-label로 접근성 확보'],
              estimatedMinutes: 5,
              feedback: { perfect: '소셜 링크가 완벽해요!', good: '좋아요! 아이콘이 잘 표시돼요.', partial: 'aria-label을 추가해서 접근성을 개선하세요.', wrong: '원형 + 서비스 색상 + aria-label로 만드세요.' }
            },
            {
              id: 'c10', title: 'About 섹션 완성',
              description: '프로필 이미지 + 소개 + 타임라인 + 카운터 + 태그 + 다운로드 버튼을 모두 합친 About 섹션을 완성하세요.',
              difficulty: 'hard',
              starterCode: '<section id="about">\n  <!-- 전체 About 섹션 -->\n</section>',
              solution: '<section id="about" style="padding:80px 0;background:white;">\n  <div class="container">\n    <h2 style="text-align:center;">About Me</h2>\n    <div class="about-content" style="display:flex;gap:48px;align-items:center;margin-top:40px;">\n      <img src="profile.jpg" class="about-image" style="width:300px;height:300px;border-radius:20px;object-fit:cover;">\n      <div class="about-text" style="flex:1;">\n        <h3>코딩을 사랑하는 학생</h3>\n        <p>HTML, CSS, JavaScript로 웹사이트를 만들어요.</p>\n        <div class="counters" style="display:flex;gap:32px;margin:24px 0;">\n          <div><strong style="font-size:24px;color:var(--primary);">10+</strong><br><small>프로젝트</small></div>\n          <div><strong style="font-size:24px;color:var(--primary);">200+</strong><br><small>학습시간</small></div>\n        </div>\n        <a href="resume.pdf" download class="download-btn" style="display:inline-block;padding:10px 24px;background:var(--gradient);color:white;border-radius:20px;text-decoration:none;">이력서 다운로드</a>\n      </div>\n    </div>\n  </div>\n</section>',
              hints: ['위에서 만든 모든 요소를 조합하세요'],
              estimatedMinutes: 6,
              feedback: { perfect: 'About 섹션이 완벽해요!', good: '좋아요! 핵심 요소가 모두 있어요.', partial: '빠진 요소를 확인하세요.', wrong: '이미지/소개/카운터/다운로드를 모두 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m4', title: '프로젝트 갤러리', description: '만든 프로젝트를 보여주는 갤러리를 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'css',
          exp: 35, estimatedMinutes: 23,
          concept: 'CSS Grid 갤러리', cstaStandard: '2-AP-19',
          learningObjectives: ['CSS Grid 갤러리을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            { id: 'c1', title: 'Grid 기본', description: 'display: grid를 적용하세요.', difficulty: 'easy', starterCode: '.gallery {}', solution: '.gallery {display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c2', title: '카드 만들기', description: '프로젝트 카드를 만드세요.', difficulty: 'easy', starterCode: '<div class="project-card"></div>', solution: '<div class="project-card"><img src="project.png" alt="프로젝트"><h3>퀴즈 앱</h3><p>HTML/CSS/JS</p><a href="#" class="btn">보기</a></div>', hints: ['단계별로 진행하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c3', title: '카드 호버', description: '호버 시 확대+그림자 효과를 만드세요.', difficulty: 'easy', starterCode: '.project-card {}', solution: '.project-card {border-radius:12px;overflow:hidden;transition:transform 0.3s,box-shadow 0.3s;} .project-card:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.15);}', hints: ['단계별로 진행하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c4', title: '이미지 오버레이', description: '호버 시 이미지 위에 오버레이를 표시하세요.', difficulty: 'medium', starterCode: '.overlay {}', solution: '.project-card{position:relative;} .overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);opacity:0;transition:opacity 0.3s;display:flex;align-items:center;justify-content:center;} .project-card:hover .overlay{opacity:1;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c5', title: '기술 태그', description: '프로젝트에 사용한 기술 태그를 표시하세요.', difficulty: 'medium', starterCode: '.tags {}', solution: '.tags {display:flex;gap:8px;flex-wrap:wrap;} .tag{padding:4px 12px;background:#e8e8ff;color:#667eea;border-radius:20px;font-size:12px;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c6', title: '반응형 그리드', description: '화면 크기에 따라 열 수를 조정하세요.', difficulty: 'medium', starterCode: '@media {}', solution: '@media (max-width:768px){.gallery{grid-template-columns:repeat(2,1fr);}} @media (max-width:480px){.gallery{grid-template-columns:1fr;}}', hints: ['단계별로 진행하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c7', title: '필터 버튼', description: '카테고리별 필터 버튼을 만드세요.', difficulty: 'hard', starterCode: '.filters {}', solution: '.filters {display:flex;gap:10px;margin-bottom:20px;} .filter-btn{padding:8px 16px;border:2px solid #667eea;border-radius:20px;background:transparent;cursor:pointer;} .filter-btn.active{background:#667eea;color:white;}', hints: ['단계별로 진행하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c8', title: 'JS 필터 기능', description: '버튼 클릭 시 프로젝트를 필터링하세요.', difficulty: 'hard', starterCode: 'function filter(cat) {}', solution: 'function filter(cat) {\n  document.querySelectorAll(".project-card").forEach(card => {\n    card.style.display = (cat === "all" || card.dataset.category === cat) ? "block" : "none";\n  });\n}', hints: ['단계별로 진행하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c9', title: '프로젝트 모달', description: '프로젝트 클릭 시 상세 모달을 표시하세요.', difficulty: 'hard', starterCode: 'function openModal() {}', solution: 'function openModal(card) {\n  document.getElementById("modal").style.display = "flex";\n  document.getElementById("modal-title").textContent = card.querySelector("h3").textContent;\n}', hints: ['단계별로 진행하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c10', title: '갤러리 완성', description: '필터+그리드+모달을 통합하세요.', difficulty: 'hard', starterCode: '<!-- 갤러리 -->', solution: '<section id="projects"><h2>프로젝트</h2><div class="filters"><button class="filter-btn active" onclick="filter(\'all\')">전체</button><button class="filter-btn" onclick="filter(\'web\')">웹</button></div><div class="gallery"><div class="project-card" data-category="web"><img src="p1.png"><h3>퀴즈 앱</h3></div></div></section>', hints: ['단계별로 진행하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m5', title: '스킬 섹션', description: '기술 스택을 시각적으로 표현해요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 25,
          concept: '프로그레스 바', cstaStandard: '2-AP-19',
          learningObjectives: ['프로그레스 바을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '프로그레스 바 HTML',
              description: 'HTML과 CSS만으로 스킬 프로그레스 바를 만드세요. 라벨, 퍼센트, 바를 포함합니다.',
              difficulty: 'easy',
              starterCode: '<div class="skill">\n  <!-- 스킬 바 -->\n</div>',
              solution: '<div class="skill">\n  <div class="skill-header" style="display:flex;justify-content:space-between;margin-bottom:6px;">\n    <span>HTML/CSS</span>\n    <span>90%</span>\n  </div>\n  <div class="skill-bar" style="height:8px;background:#e9ecef;border-radius:4px;overflow:hidden;">\n    <div class="skill-fill" style="width:90%;height:100%;background:var(--gradient);border-radius:4px;"></div>\n  </div>\n</div>',
              hints: ['외부 바(배경) + 내부 바(채움)로 구성해요', 'width 퍼센트로 스킬 수준을 표현해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '프로그레스 바가 완벽해요!', good: '좋아요! 바가 잘 표시돼요.', partial: '배경 바와 채움 바를 분리하세요.', wrong: '외부 div(배경) 안에 내부 div(width: 90%)를 넣으세요.' }
            },
            {
              id: 'c2', title: '여러 스킬 나열',
              description: '스킬 5개를 각각 다른 퍼센트로 나열하세요.',
              difficulty: 'easy',
              starterCode: '<div class="skills-list">\n  <!-- 스킬 5개 -->\n</div>',
              solution: '<div class="skills-list" style="display:flex;flex-direction:column;gap:16px;">\n  <div class="skill"><div style="display:flex;justify-content:space-between;"><span>HTML/CSS</span><span>90%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:90%;height:100%;background:#667eea;border-radius:4px;"></div></div></div>\n  <div class="skill"><div style="display:flex;justify-content:space-between;"><span>JavaScript</span><span>75%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:75%;height:100%;background:#764ba2;border-radius:4px;"></div></div></div>\n  <div class="skill"><div style="display:flex;justify-content:space-between;"><span>Python</span><span>60%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:60%;height:100%;background:#f093fb;border-radius:4px;"></div></div></div>\n  <div class="skill"><div style="display:flex;justify-content:space-between;"><span>React</span><span>40%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:40%;height:100%;background:#4facfe;border-radius:4px;"></div></div></div>\n  <div class="skill"><div style="display:flex;justify-content:space-between;"><span>Git</span><span>70%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:70%;height:100%;background:#43e97b;border-radius:4px;"></div></div></div>\n</div>',
              hints: ['각 스킬마다 다른 색상을 사용하면 더 보기 좋아요'],
              estimatedMinutes: 5,
              feedback: { perfect: '스킬 목록이 완벽해요!', good: '좋아요! 5개 스킬이 잘 표시돼요.', partial: '각 스킬의 퍼센트를 다르게 설정하세요.', wrong: '5개 스킬을 각각 다른 width로 나열하세요.' }
            },
            {
              id: 'c3', title: '프로그레스 바 애니메이션',
              description: 'CSS 애니메이션으로 프로그레스 바가 0%에서 목표까지 채워지는 효과를 만드세요.',
              difficulty: 'easy',
              starterCode: '.skill-fill {\n  /* 채워지는 애니메이션 */\n}',
              solution: '.skill-fill {\n  height: 100%;\n  border-radius: 4px;\n  animation: fillBar 1.5s ease-out forwards;\n  transform-origin: left;\n}\n@keyframes fillBar {\n  from { transform: scaleX(0); }\n  to { transform: scaleX(1); }\n}',
              hints: ['scaleX(0→1) 애니메이션으로 채우는 효과', 'transform-origin: left로 왼쪽에서 시작'],
              estimatedMinutes: 4,
              feedback: { perfect: '채워지는 애니메이션이 멋져요!', good: '좋아요! 애니메이션이 동작해요.', partial: 'transform-origin: left를 추가하세요.', wrong: '@keyframes + scaleX(0→1)로 채우는 효과를 만드세요.' }
            },
            {
              id: 'c4', title: '원형 프로그레스',
              description: 'SVG circle로 원형 프로그레스를 만드세요.',
              difficulty: 'medium',
              starterCode: '<svg width="120" height="120">\n  <!-- 원형 프로그레스 -->\n</svg>',
              solution: '<svg width="120" height="120" style="transform:rotate(-90deg);">\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#e9ecef" stroke-width="8"/>\n  <circle cx="60" cy="60" r="50" fill="none" stroke="#667eea" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="63" stroke-linecap="round" style="transition: stroke-dashoffset 1.5s ease;"/>\n</svg>\n<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;font-weight:bold;">80%</div>',
              hints: ['stroke-dasharray와 stroke-dashoffset으로 진행도를 표현해요', '둘레 = 2 * PI * r = 314px'],
              estimatedMinutes: 6,
              feedback: { perfect: '원형 프로그레스가 완벽해요!', good: '좋아요! SVG를 잘 활용했어요.', partial: 'stroke-dashoffset을 조절하세요.', wrong: 'stroke-dashoffset = 둘레 * (1 - 퍼센트/100)으로 계산해요.' }
            },
            {
              id: 'c5', title: '스킬 카드 그리드',
              description: 'CSS Grid로 스킬을 카드 형태로 배치하세요. 아이콘 + 이름 + 레벨을 포함합니다.',
              difficulty: 'medium',
              starterCode: '<div class="skill-grid">\n  <!-- 스킬 카드들 -->\n</div>\n<style>.skill-grid { /* Grid 레이아웃 */ }</style>',
              solution: '<div class="skill-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:16px;">\n  <div class="skill-card" style="padding:24px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,0.05);transition:transform 0.3s;"><div style="font-size:32px;">🌐</div><h4>HTML/CSS</h4><small style="color:#8e8e8e;">고급</small></div>\n  <div class="skill-card" style="padding:24px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,0.05);transition:transform 0.3s;"><div style="font-size:32px;">⚡</div><h4>JavaScript</h4><small style="color:#8e8e8e;">중급</small></div>\n  <div class="skill-card" style="padding:24px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,0.05);transition:transform 0.3s;"><div style="font-size:32px;">🐍</div><h4>Python</h4><small style="color:#8e8e8e;">중급</small></div>\n  <div class="skill-card" style="padding:24px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 10px rgba(0,0,0,0.05);transition:transform 0.3s;"><div style="font-size:32px;">🗃️</div><h4>Git</h4><small style="color:#8e8e8e;">중급</small></div>\n</div>',
              hints: ['auto-fill + minmax로 반응형 그리드', '각 카드에 아이콘+이름+레벨'],
              estimatedMinutes: 5,
              feedback: { perfect: '스킬 카드 그리드가 완벽해요!', good: '좋아요! 카드가 잘 배치돼요.', partial: 'auto-fill로 반응형을 만드세요.', wrong: 'Grid + auto-fill + minmax로 반응형 카드를 만드세요.' }
            },
            {
              id: 'c6', title: '스킬 카드 hover',
              description: '스킬 카드에 마우스를 올리면 올라오면서 그림자가 커지는 효과를 추가하세요.',
              difficulty: 'medium',
              starterCode: '.skill-card {\n  transition: transform 0.3s;\n  /* hover 효과 추가 */\n}',
              solution: '.skill-card {\n  padding: 24px;\n  background: white;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.05);\n  transition: transform 0.3s, box-shadow 0.3s;\n  cursor: pointer;\n}\n.skill-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 30px rgba(0,0,0,0.12);\n}',
              hints: ['translateY(-8px)로 위로 올라오는 효과', 'box-shadow를 크게 해서 떠 있는 느낌'],
              estimatedMinutes: 3,
              feedback: { perfect: 'hover 효과가 멋져요!', good: '좋아요! 자연스러운 효과예요.', partial: 'translateY와 box-shadow를 함께 변경하세요.', wrong: 'translateY(-8px) + 큰 box-shadow로 떠오르는 효과.' }
            },
            {
              id: 'c7', title: 'JS 프로그레스 애니메이션',
              description: 'JavaScript로 숫자가 0에서 목표까지 올라가는 카운트업 애니메이션을 만드세요.',
              difficulty: 'hard',
              starterCode: '<span class="counter" data-target="90">0</span>%\n<script>\nfunction animateCounter(el) {\n  // 카운트업 애니메이션\n}\n</script>',
              solution: '<span class="counter" data-target="90">0</span>%\n<script>\nfunction animateCounter(el) {\n  const target = parseInt(el.dataset.target);\n  let current = 0;\n  const increment = target / 50;\n  const timer = setInterval(() => {\n    current += increment;\n    if (current >= target) {\n      current = target;\n      clearInterval(timer);\n    }\n    el.textContent = Math.floor(current);\n  }, 30);\n}\ndocument.querySelectorAll(".counter").forEach(animateCounter);\n</script>',
              hints: ['setInterval로 조금씩 증가시켜요', 'clearInterval로 목표 도달 시 멈춰요'],
              estimatedMinutes: 6,
              feedback: { perfect: '카운트업 애니메이션이 완벽해요!', good: '좋아요! 숫자가 올라가요.', partial: 'clearInterval로 멈추는 처리를 하세요.', wrong: 'setInterval + clearInterval로 카운트업을 만드세요.' }
            },
            {
              id: 'c8', title: '카테고리 탭',
              description: '스킬을 카테고리(프론트엔드/백엔드/도구)별로 분류하는 탭 UI를 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="skill-tabs">\n  <!-- 탭 버튼 + 내용 -->\n</div>\n<script>// 탭 전환</script>',
              solution: '<div class="skill-tabs">\n  <div class="tab-buttons" style="display:flex;gap:8px;margin-bottom:24px;">\n    <button class="tab-btn active" onclick="switchTab(\'frontend\')" style="padding:8px 20px;border:none;border-radius:20px;cursor:pointer;background:var(--primary);color:white;">프론트엔드</button>\n    <button class="tab-btn" onclick="switchTab(\'backend\')" style="padding:8px 20px;border:2px solid #ddd;border-radius:20px;cursor:pointer;background:white;">백엔드</button>\n    <button class="tab-btn" onclick="switchTab(\'tools\')" style="padding:8px 20px;border:2px solid #ddd;border-radius:20px;cursor:pointer;background:white;">도구</button>\n  </div>\n  <div class="tab-content" id="frontend">HTML, CSS, JavaScript</div>\n  <div class="tab-content" id="backend" style="display:none;">Python, Node.js</div>\n  <div class="tab-content" id="tools" style="display:none;">Git, VS Code</div>\n</div>\n<script>\nfunction switchTab(tabId) {\n  document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");\n  document.getElementById(tabId).style.display = "block";\n  document.querySelectorAll(".tab-btn").forEach(b => { b.style.background = "white"; b.style.color = "#333"; });\n  event.target.style.background = "var(--primary)"; event.target.style.color = "white";\n}\n</script>',
              hints: ['모든 탭을 숨기고 선택된 탭만 표시', 'active 버튼 스타일을 전환하세요'],
              estimatedMinutes: 7,
              feedback: { perfect: '탭 전환이 완벽해요!', good: '좋아요! 탭이 잘 동작해요.', partial: 'active 상태 전환을 확인하세요.', wrong: '모든 content를 숨기고 선택된 것만 block으로 표시하세요.' }
            },
            {
              id: 'c9', title: '스킬 레이더 차트',
              description: 'CSS만으로 간단한 레이더(오각형) 차트를 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="radar">\n  <!-- 레이더 차트 -->\n</div>',
              solution: '<div class="radar" style="position:relative;width:200px;height:200px;margin:0 auto;">\n  <div style="position:absolute;width:100%;height:100%;border:2px solid #e9ecef;clip-path:polygon(50% 0%,100% 38%,82% 100%,18% 100%,0% 38%);"></div>\n  <div style="position:absolute;width:70%;height:70%;top:15%;left:15%;background:rgba(102,126,234,0.3);clip-path:polygon(50% 10%,90% 38%,75% 90%,25% 90%,10% 38%);border:2px solid var(--primary);"></div>\n  <span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:12px;">HTML</span>\n  <span style="position:absolute;top:35%;right:-30px;font-size:12px;">JS</span>\n  <span style="position:absolute;bottom:-20px;right:10%;font-size:12px;">CSS</span>\n  <span style="position:absolute;bottom:-20px;left:10%;font-size:12px;">Python</span>\n  <span style="position:absolute;top:35%;left:-20px;font-size:12px;">Git</span>\n</div>',
              hints: ['clip-path: polygon()으로 오각형을 만들어요', '두 개의 오각형을 겹쳐서 차트를 표현해요'],
              estimatedMinutes: 8,
              feedback: { perfect: '레이더 차트가 멋져요!', good: '좋아요! 시각적으로 잘 표현됐어요.', partial: 'clip-path로 오각형을 만드세요.', wrong: 'clip-path: polygon()으로 오각형을 그리세요.' }
            },
            {
              id: 'c10', title: '스킬 섹션 완성',
              description: '프로그레스 바 + 카드 그리드 + 탭 + 카운트업을 모두 합친 스킬 섹션을 완성하세요.',
              difficulty: 'hard',
              starterCode: '<section id="skills">\n  <!-- 전체 스킬 섹션 -->\n</section>',
              solution: '<section id="skills" style="padding:80px 0;background:var(--bg);">\n  <div class="container" style="max-width:1200px;margin:0 auto;padding:0 24px;">\n    <h2 style="text-align:center;margin-bottom:40px;">Skills</h2>\n    <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;">\n      <div class="skills-bars">\n        <h3 style="margin-bottom:16px;">기술 수준</h3>\n        <div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;"><span>HTML/CSS</span><span>90%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:90%;height:100%;background:#667eea;border-radius:4px;"></div></div></div>\n        <div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;"><span>JavaScript</span><span>75%</span></div><div style="height:8px;background:#e9ecef;border-radius:4px;"><div style="width:75%;height:100%;background:#764ba2;border-radius:4px;"></div></div></div>\n      </div>\n      <div class="skills-cards" style="display:grid;grid-template-columns:repeat(2,1fr);gap:12px;">\n        <div style="padding:20px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">🌐<br><strong>HTML/CSS</strong></div>\n        <div style="padding:20px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">⚡<br><strong>JavaScript</strong></div>\n        <div style="padding:20px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">🐍<br><strong>Python</strong></div>\n        <div style="padding:20px;background:white;border-radius:12px;text-align:center;box-shadow:0 2px 8px rgba(0,0,0,0.05);">🗃️<br><strong>Git</strong></div>\n      </div>\n    </div>\n  </div>\n</section>',
              hints: ['왼쪽 프로그레스 바 + 오른쪽 카드 그리드'],
              estimatedMinutes: 6,
              feedback: { perfect: '스킬 섹션이 완벽해요!', good: '좋아요! 바와 카드가 잘 조합됐어요.', partial: '빠진 요소를 확인하세요.', wrong: '프로그레스 바 + 스킬 카드를 2열 Grid로 배치하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m6', title: '연락처 폼', description: '연락처 양식을 만들어요',
          type: 'coding', difficulty: 'intermediate', language: 'html',
          exp: 35, estimatedMinutes: 27,
          concept: 'HTML Form', cstaStandard: '2-AP-19',
          learningObjectives: ['HTML Form을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'form 태그 기본',
              description: 'form 태그로 이름, 이메일, 메시지 입력 폼을 만드세요.',
              difficulty: 'easy',
              starterCode: '<form>\n  <!-- 이름, 이메일, 메시지 -->\n</form>',
              solution: '<form>\n  <div class="form-group">\n    <label for="name">이름</label>\n    <input type="text" id="name" placeholder="이름을 입력하세요" required>\n  </div>\n  <div class="form-group">\n    <label for="email">이메일</label>\n    <input type="email" id="email" placeholder="email@example.com" required>\n  </div>\n  <div class="form-group">\n    <label for="message">메시지</label>\n    <textarea id="message" rows="5" placeholder="메시지를 입력하세요" required></textarea>\n  </div>\n  <button type="submit">보내기</button>\n</form>',
              hints: ['label + input을 짝으로 만드세요', 'required 속성으로 필수 입력을 설정해요'],
              estimatedMinutes: 4,
              feedback: { perfect: '폼 구조가 완벽해요!', good: '좋아요! 핵심 필드가 포함됐어요.', partial: 'label과 required를 추가하세요.', wrong: 'label + input(text/email) + textarea + button이 필요해요.' }
            },
            {
              id: 'c2', title: '폼 스타일링',
              description: 'CSS로 폼을 세련되게 스타일링하세요. 포커스 시 테두리 색 변경을 포함합니다.',
              difficulty: 'easy',
              starterCode: '.form-group { /* 그룹 */ }\ninput, textarea { /* 입력 필드 */ }\ninput:focus, textarea:focus { /* 포커스 */ }',
              solution: '.form-group {\n  margin-bottom: 20px;\n}\nlabel {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 14px;\n}\ninput, textarea {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e9ecef;\n  border-radius: 8px;\n  font-size: 15px;\n  transition: border-color 0.3s;\n  outline: none;\n  font-family: inherit;\n}\ninput:focus, textarea:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}',
              hints: ['focus 시 border-color 변경 + box-shadow 추가', 'outline: none + 커스텀 포커스 스타일'],
              estimatedMinutes: 4,
              feedback: { perfect: '폼 스타일이 세련됐어요!', good: '좋아요! 포커스 효과가 잘 동작해요.', partial: ':focus 스타일을 추가하세요.', wrong: ':focus에서 border-color와 box-shadow를 변경하세요.' }
            },
            {
              id: 'c3', title: '제출 버튼 디자인',
              description: '그라데이션 배경, hover 효과, 로딩 상태를 가진 제출 버튼을 만드세요.',
              difficulty: 'easy',
              starterCode: '.submit-btn { /* 제출 버튼 */ }\n.submit-btn:hover { /* hover */ }',
              solution: '.submit-btn {\n  width: 100%;\n  padding: 14px;\n  background: var(--gradient);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);\n}\n.submit-btn:active {\n  transform: translateY(0);\n}',
              hints: ['그라데이션 배경 + hover에서 위로 올라오는 효과', ':active에서 원위치'],
              estimatedMinutes: 4,
              feedback: { perfect: '버튼이 멋져요!', good: '좋아요! hover가 잘 동작해요.', partial: ':active 상태를 추가하세요.', wrong: 'hover에서 translateY(-2px) + box-shadow.' }
            },
            {
              id: 'c4', title: '폼 유효성 검사',
              description: 'JavaScript로 빈 필드와 이메일 형식을 검사하세요.',
              difficulty: 'medium',
              starterCode: 'function validateForm() {\n  // 유효성 검사\n  return true;\n}',
              solution: 'function validateForm() {\n  const name = document.getElementById("name").value.trim();\n  const email = document.getElementById("email").value.trim();\n  const message = document.getElementById("message").value.trim();\n  \n  if (!name) { showError("name", "이름을 입력하세요"); return false; }\n  if (!email) { showError("email", "이메일을 입력하세요"); return false; }\n  if (!email.includes("@")) { showError("email", "올바른 이메일 형식이 아닙니다"); return false; }\n  if (!message) { showError("message", "메시지를 입력하세요"); return false; }\n  return true;\n}\nfunction showError(fieldId, msg) {\n  const field = document.getElementById(fieldId);\n  field.style.borderColor = "red";\n  let err = field.parentElement.querySelector(".error");\n  if (!err) { err = document.createElement("span"); err.className = "error"; err.style.cssText = "color:red;font-size:12px;"; field.parentElement.appendChild(err); }\n  err.textContent = msg;\n}',
              hints: ['trim()으로 빈 공백을 제거해요', 'includes("@")로 이메일 기본 검증'],
              estimatedMinutes: 6,
              feedback: { perfect: '유효성 검사가 완벽해요!', good: '좋아요! 기본 검증이 잘 돼요.', partial: '에러 메시지 표시를 추가하세요.', wrong: '빈 값 + 이메일 형식을 검사하세요.' }
            },
            {
              id: 'c5', title: '실시간 유효성 표시',
              description: '입력 중 실시간으로 유효/무효를 표시하세요. 유효하면 초록 테두리, 무효하면 빨간 테두리.',
              difficulty: 'medium',
              starterCode: '// 실시간 유효성 체크\ndocument.getElementById("email").addEventListener("input", function() {\n  // 실시간 검증\n});',
              solution: 'document.getElementById("email").addEventListener("input", function() {\n  if (this.value.includes("@") && this.value.includes(".")) {\n    this.style.borderColor = "#28a745";\n    this.style.boxShadow = "0 0 0 3px rgba(40,167,69,0.1)";\n  } else if (this.value.length > 0) {\n    this.style.borderColor = "#dc3545";\n    this.style.boxShadow = "0 0 0 3px rgba(220,53,69,0.1)";\n  } else {\n    this.style.borderColor = "#e9ecef";\n    this.style.boxShadow = "none";\n  }\n});',
              hints: ['input 이벤트로 입력할 때마다 체크', '초록/빨강/기본 3가지 상태'],
              estimatedMinutes: 5,
              feedback: { perfect: '실시간 검증이 완벽해요!', good: '좋아요! 색상이 잘 바뀌어요.', partial: '빈 상태도 처리하세요.', wrong: 'input 이벤트 + borderColor 변경으로 실시간 피드백.' }
            },
            {
              id: 'c6', title: '전송 성공 메시지',
              description: '폼 전송 시 성공 메시지를 표시하고, 폼을 초기화하세요.',
              difficulty: 'medium',
              starterCode: 'form.addEventListener("submit", function(e) {\n  e.preventDefault();\n  // 전송 처리\n});',
              solution: 'document.querySelector("form").addEventListener("submit", function(e) {\n  e.preventDefault();\n  if (!validateForm()) return;\n  \n  // 성공 메시지\n  const msg = document.createElement("div");\n  msg.style.cssText = "padding:16px;background:#d4edda;color:#155724;border-radius:8px;margin-top:16px;text-align:center;";\n  msg.textContent = "메시지가 전송되었습니다!";\n  this.appendChild(msg);\n  \n  // 폼 초기화\n  this.reset();\n  \n  // 3초 후 메시지 제거\n  setTimeout(() => msg.remove(), 3000);\n});',
              hints: ['e.preventDefault()로 새로고침 방지', 'this.reset()으로 폼 초기화'],
              estimatedMinutes: 5,
              feedback: { perfect: '전송 처리가 완벽해요!', good: '좋아요! 성공 메시지가 표시돼요.', partial: '폼 리셋을 추가하세요.', wrong: 'preventDefault + 메시지 표시 + reset + setTimeout 제거.' }
            },
            {
              id: 'c7', title: '연락처 정보 영역',
              description: '폼 옆에 이메일, 위치, 소셜 링크를 표시하는 연락처 정보 영역을 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="contact-info">\n  <!-- 연락처 정보 -->\n</div>',
              solution: '<div class="contact-info" style="flex:1;">\n  <h3 style="margin-bottom:24px;">연락처</h3>\n  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">\n    <span style="font-size:24px;">📧</span>\n    <div><p style="font-weight:600;">이메일</p><p style="color:var(--text-light);">me@example.com</p></div>\n  </div>\n  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">\n    <span style="font-size:24px;">📍</span>\n    <div><p style="font-weight:600;">위치</p><p style="color:var(--text-light);">서울, 대한민국</p></div>\n  </div>\n  <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">\n    <span style="font-size:24px;">🕐</span>\n    <div><p style="font-weight:600;">응답 시간</p><p style="color:var(--text-light);">24시간 이내</p></div>\n  </div>\n</div>',
              hints: ['아이콘 + 라벨 + 값 구조로 각 항목을 만드세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '연락처 정보가 완벽해요!', good: '좋아요! 깔끔하게 표시돼요.', partial: '아이콘을 추가하세요.', wrong: '아이콘 + 라벨 + 값 구조를 만드세요.' }
            },
            {
              id: 'c8', title: '2열 Contact 레이아웃',
              description: '왼쪽에 연락처 정보, 오른쪽에 폼을 Grid로 배치하세요.',
              difficulty: 'hard',
              starterCode: '.contact-section {\n  /* 2열 레이아웃 */\n}',
              solution: '.contact-section {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 48px;\n  align-items: start;\n}\n@media (max-width: 768px) {\n  .contact-section {\n    grid-template-columns: 1fr;\n  }\n}',
              hints: ['1fr 1.5fr로 폼이 약간 더 넓게', '모바일에서 1열로 변경'],
              estimatedMinutes: 4,
              feedback: { perfect: '2열 레이아웃이 완벽해요!', good: '좋아요! 배치가 잘 됐어요.', partial: '모바일 반응형을 추가하세요.', wrong: 'grid-template-columns: 1fr 1.5fr + 모바일 1fr.' }
            },
            {
              id: 'c9', title: '폼 접근성 개선',
              description: 'aria 속성과 키보드 탐색을 개선하세요.',
              difficulty: 'hard',
              starterCode: '<!-- 접근성이 개선된 폼 -->\n<form>\n  <!-- 접근성 추가 -->\n</form>',
              solution: '<form role="form" aria-label="연락처 폼">\n  <div class="form-group">\n    <label for="name">이름 <span aria-hidden="true" style="color:red;">*</span></label>\n    <input type="text" id="name" name="name" required aria-required="true" autocomplete="name">\n  </div>\n  <div class="form-group">\n    <label for="email">이메일 <span aria-hidden="true" style="color:red;">*</span></label>\n    <input type="email" id="email" name="email" required aria-required="true" autocomplete="email">\n  </div>\n  <div class="form-group">\n    <label for="message">메시지 <span aria-hidden="true" style="color:red;">*</span></label>\n    <textarea id="message" name="message" required aria-required="true"></textarea>\n  </div>\n  <button type="submit" aria-label="메시지 보내기">보내기</button>\n</form>',
              hints: ['aria-required, aria-label로 접근성 확보', 'autocomplete으로 자동 채우기 지원'],
              estimatedMinutes: 5,
              feedback: { perfect: '접근성이 우수한 폼이에요!', good: '좋아요! aria 속성을 잘 사용했어요.', partial: 'autocomplete을 추가하세요.', wrong: 'aria-required, aria-label, autocomplete을 사용하세요.' }
            },
            {
              id: 'c10', title: '연락처 섹션 완성',
              description: '정보 + 폼 + 유효성검사 + 성공메시지를 모두 합친 연락처 섹션을 완성하세요.',
              difficulty: 'hard',
              starterCode: '<section id="contact">\n  <!-- 전체 연락처 섹션 -->\n</section>',
              solution: '<section id="contact" style="padding:80px 0;">\n  <div class="container" style="max-width:1200px;margin:0 auto;padding:0 24px;">\n    <h2 style="text-align:center;margin-bottom:40px;">Contact</h2>\n    <div style="display:grid;grid-template-columns:1fr 1.5fr;gap:48px;">\n      <div>\n        <h3>연락하기</h3>\n        <p style="color:var(--text-light);margin:16px 0;">프로젝트나 협업에 관심이 있으시면 연락해 주세요!</p>\n        <div style="margin-top:24px;"><p>📧 me@email.com</p><p>📍 서울, 한국</p></div>\n      </div>\n      <form style="display:flex;flex-direction:column;gap:16px;">\n        <input type="text" placeholder="이름" required style="padding:12px;border:2px solid #e9ecef;border-radius:8px;outline:none;">\n        <input type="email" placeholder="이메일" required style="padding:12px;border:2px solid #e9ecef;border-radius:8px;outline:none;">\n        <textarea rows="5" placeholder="메시지" required style="padding:12px;border:2px solid #e9ecef;border-radius:8px;outline:none;font-family:inherit;"></textarea>\n        <button type="submit" style="padding:14px;background:var(--gradient);color:white;border:none;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">보내기</button>\n      </form>\n    </div>\n  </div>\n</section>',
              hints: ['이전 챌린지를 조합하세요'],
              estimatedMinutes: 6,
              feedback: { perfect: '연락처 섹션이 완벽해요!', good: '좋아요! 핵심 요소가 모두 있어요.', partial: '빠진 요소를 확인하세요.', wrong: '정보 + 폼을 2열로 배치하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m7', title: '스크롤 애니메이션', description: '스크롤 시 요소가 나타나는 효과를 만들어요',
          type: 'coding', difficulty: 'advanced', language: 'javascript',
          exp: 35, estimatedMinutes: 29,
          concept: 'Intersection Observer', cstaStandard: '2-AP-19',
          learningObjectives: ['Intersection Observer을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: '페이드인 CSS 클래스',
              description: '요소가 투명했다가 나타나는 fade-in CSS 클래스를 만드세요.',
              difficulty: 'easy',
              starterCode: '.fade-in {\n  /* 초기: 투명 */\n}\n.fade-in.visible {\n  /* 보이는 상태 */\n}',
              solution: '.fade-in {\n  opacity: 0;\n  transform: translateY(30px);\n  transition: opacity 0.6s ease, transform 0.6s ease;\n}\n.fade-in.visible {\n  opacity: 1;\n  transform: translateY(0);\n}',
              hints: ['초기 상태: opacity: 0, 아래로 이동', 'visible 클래스 추가 시 원위치로 이동'],
              estimatedMinutes: 3,
              feedback: { perfect: '페이드인 CSS가 완벽해요!', good: '좋아요! 기본 애니메이션이에요.', partial: 'transform도 추가하면 더 멋져요.', wrong: 'opacity: 0→1 + translateY(30px→0)으로 만드세요.' }
            },
            {
              id: 'c2', title: 'Intersection Observer 기본',
              description: 'Intersection Observer로 요소가 화면에 보일 때 visible 클래스를 추가하세요.',
              difficulty: 'easy',
              starterCode: '// Intersection Observer 생성\nconst observer = new IntersectionObserver(/* 콜백 */, /* 옵션 */);',
              solution: 'const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add("visible");\n    }\n  });\n}, { threshold: 0.1 });\n\ndocument.querySelectorAll(".fade-in").forEach(el => {\n  observer.observe(el);\n});',
              hints: ['isIntersecting이 true면 화면에 보이는 상태', 'threshold: 0.1은 10% 보이면 트리거'],
              estimatedMinutes: 5,
              feedback: { perfect: 'Intersection Observer를 완벽히 사용했어요!', good: '좋아요! 스크롤 감지가 잘 돼요.', partial: 'querySelectorAll로 모든 요소를 관찰하세요.', wrong: 'new IntersectionObserver + observe로 요소를 관찰하세요.' }
            },
            {
              id: 'c3', title: '슬라이드 방향 변형',
              description: '왼쪽에서, 오른쪽에서, 아래에서 올라오는 3가지 슬라이드 방향을 만드세요.',
              difficulty: 'easy',
              starterCode: '.slide-left { /* 왼쪽에서 */ }\n.slide-right { /* 오른쪽에서 */ }\n.slide-up { /* 아래에서 */ }',
              solution: '.slide-left { opacity: 0; transform: translateX(-50px); transition: all 0.6s ease; }\n.slide-right { opacity: 0; transform: translateX(50px); transition: all 0.6s ease; }\n.slide-up { opacity: 0; transform: translateY(50px); transition: all 0.6s ease; }\n.slide-left.visible, .slide-right.visible, .slide-up.visible { opacity: 1; transform: translate(0); }',
              hints: ['translateX(음수) = 왼쪽, translateX(양수) = 오른쪽', 'translateY(양수) = 아래에서 위로'],
              estimatedMinutes: 4,
              feedback: { perfect: '3방향 슬라이드가 완벽해요!', good: '좋아요! 다양한 방향이 잘 돼요.', partial: '모든 방향에 .visible 상태를 추가하세요.', wrong: 'translateX/Y로 시작 위치를 다르게 설정하세요.' }
            },
            {
              id: 'c4', title: '순차적 등장 효과',
              description: '여러 카드가 순차적으로(0.1초 간격) 나타나도록 transition-delay를 추가하세요.',
              difficulty: 'medium',
              starterCode: '<div class="cards">\n  <div class="card fade-in">1</div>\n  <div class="card fade-in">2</div>\n  <div class="card fade-in">3</div>\n</div>\n<script>// 순차적 delay 추가</script>',
              solution: '<div class="cards" style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">\n  <div class="card fade-in" style="padding:24px;background:white;border-radius:8px;text-align:center;">1</div>\n  <div class="card fade-in" style="padding:24px;background:white;border-radius:8px;text-align:center;">2</div>\n  <div class="card fade-in" style="padding:24px;background:white;border-radius:8px;text-align:center;">3</div>\n</div>\n<script>\ndocument.querySelectorAll(".card.fade-in").forEach((card, i) => {\n  card.style.transitionDelay = (i * 0.15) + "s";\n});\n</script>',
              hints: ['인덱스 * 0.15초로 각 카드에 delay를 줘요', 'CSS transition-delay를 동적으로 설정'],
              estimatedMinutes: 5,
              feedback: { perfect: '순차적 등장이 아름다워요!', good: '좋아요! 카드가 차례로 나타나요.', partial: 'transitionDelay를 인덱스 기반으로 설정하세요.', wrong: 'forEach의 인덱스 * 0.15로 delay를 계산하세요.' }
            },
            {
              id: 'c5', title: '스크롤 진행 바',
              description: '페이지 상단에 스크롤 진행도를 나타내는 프로그레스 바를 만드세요.',
              difficulty: 'medium',
              starterCode: '<div class="scroll-progress" id="progress"></div>\n<style>.scroll-progress { /* 진행 바 */ }</style>\n<script>// 스크롤 이벤트</script>',
              solution: '<div class="scroll-progress" id="progress"></div>\n<style>\n.scroll-progress {\n  position: fixed; top: 0; left: 0; height: 3px;\n  background: var(--gradient); z-index: 1000;\n  width: 0%; transition: width 0.1s;\n}\n</style>\n<script>\nwindow.addEventListener("scroll", () => {\n  const scrollTop = document.documentElement.scrollTop;\n  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;\n  const progress = (scrollTop / scrollHeight) * 100;\n  document.getElementById("progress").style.width = progress + "%";\n});\n</script>',
              hints: ['scrollTop / (scrollHeight - innerHeight) * 100 = 퍼센트', 'width를 동적으로 변경'],
              estimatedMinutes: 5,
              feedback: { perfect: '스크롤 진행 바가 완벽해요!', good: '좋아요! 바가 잘 움직여요.', partial: '계산식을 확인하세요.', wrong: 'scroll 이벤트 + scrollTop/scrollHeight로 퍼센트를 계산하세요.' }
            },
            {
              id: 'c6', title: '네비게이션 배경 변경',
              description: '스크롤 시 네비게이션 배경이 투명→불투명으로 변하도록 만드세요.',
              difficulty: 'medium',
              starterCode: 'nav { background: transparent; }\n/* 스크롤 시 변경 */',
              solution: 'nav {\n  background: transparent;\n  transition: background 0.3s, box-shadow 0.3s;\n}\nnav.scrolled {\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}',
              hints: ['스크롤 위치에 따라 클래스를 추가/제거', 'backdrop-filter: blur로 글래스 효과'],
              estimatedMinutes: 4,
              feedback: { perfect: '네비 배경 전환이 멋져요!', good: '좋아요! 부드럽게 바뀌어요.', partial: 'backdrop-filter를 추가하면 더 멋져요.', wrong: 'scrolled 클래스를 토글하세요.' }
            },
            {
              id: 'c7', title: '패럴랙스 효과',
              description: 'CSS만으로 간단한 패럴랙스 스크롤 효과를 만드세요.',
              difficulty: 'hard',
              starterCode: '.parallax-section {\n  /* 패럴랙스 효과 */\n}',
              solution: '.parallax-section {\n  height: 400px;\n  background-image: url("bg.jpg");\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 2rem;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);\n}',
              hints: ['background-attachment: fixed로 패럴랙스 효과', '배경이 고정되면서 콘텐츠가 위로 지나가는 효과'],
              estimatedMinutes: 5,
              feedback: { perfect: '패럴랙스가 멋져요!', good: '좋아요! 배경 고정 효과가 잘 돼요.', partial: 'background-attachment: fixed를 추가하세요.', wrong: 'background-attachment: fixed가 핵심이에요.' }
            },
            {
              id: 'c8', title: '스크롤 시 카운트업',
              description: 'Intersection Observer와 카운트업 애니메이션을 결합해서, 섹션이 보일 때 숫자가 올라가도록 만드세요.',
              difficulty: 'hard',
              starterCode: '<div class="stat" data-target="150">0</div>\n<script>// 보일 때 카운트업</script>',
              solution: '<div class="stat" data-target="150">0</div>\n<script>\nconst counterObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const el = entry.target;\n      const target = parseInt(el.dataset.target);\n      let current = 0;\n      const step = target / 40;\n      const timer = setInterval(() => {\n        current += step;\n        if (current >= target) { current = target; clearInterval(timer); }\n        el.textContent = Math.floor(current);\n      }, 30);\n      counterObserver.unobserve(el);\n    }\n  });\n}, { threshold: 0.5 });\ndocument.querySelectorAll(".stat").forEach(el => counterObserver.observe(el));\n</script>',
              hints: ['unobserve로 한 번만 실행되도록 해요', 'threshold: 0.5로 절반 이상 보일 때 시작'],
              estimatedMinutes: 7,
              feedback: { perfect: '스크롤 카운트업이 완벽해요!', good: '좋아요! 보일 때 시작돼요.', partial: 'unobserve로 중복 실행을 방지하세요.', wrong: 'IntersectionObserver + setInterval + unobserve를 조합하세요.' }
            },
            {
              id: 'c9', title: '맨 위로 버튼',
              description: '스크롤이 200px 이상이면 나타나는 "맨 위로" 버튼을 만드세요.',
              difficulty: 'hard',
              starterCode: '<button id="topBtn" style="display:none;">↑</button>\n<script>// 맨 위로 버튼</script>',
              solution: '<button id="topBtn" style="display:none;position:fixed;bottom:24px;right:24px;width:48px;height:48px;border-radius:50%;background:var(--primary);color:white;border:none;font-size:20px;cursor:pointer;box-shadow:0 4px 15px rgba(0,0,0,0.15);transition:opacity 0.3s,transform 0.3s;z-index:99;">↑</button>\n<script>\nconst topBtn = document.getElementById("topBtn");\nwindow.addEventListener("scroll", () => {\n  if (window.scrollY > 200) {\n    topBtn.style.display = "block";\n    topBtn.style.opacity = "1";\n  } else {\n    topBtn.style.opacity = "0";\n    setTimeout(() => { if (window.scrollY <= 200) topBtn.style.display = "none"; }, 300);\n  }\n});\ntopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));\n</script>',
              hints: ['scrollY > 200에서 표시', 'scrollTo({ top: 0, behavior: "smooth" })로 부드럽게 이동'],
              estimatedMinutes: 6,
              feedback: { perfect: '맨 위로 버튼이 완벽해요!', good: '좋아요! 잘 동작해요.', partial: 'smooth scroll을 추가하세요.', wrong: 'scrollY 감지 + scrollTo smooth로 구현하세요.' }
            },
            {
              id: 'c10', title: '스크롤 애니메이션 통합',
              description: '모든 섹션에 스크롤 애니메이션을 적용하세요. 섹션별로 다른 방향/딜레이를 설정합니다.',
              difficulty: 'hard',
              starterCode: '// 전체 스크롤 애니메이션 시스템',
              solution: '// 전체 스크롤 애니메이션 시스템\nconst animObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add("visible");\n      animObserver.unobserve(entry.target);\n    }\n  });\n}, { threshold: 0.15 });\n\n// 모든 애니메이션 대상 관찰\ndocument.querySelectorAll(".fade-in, .slide-left, .slide-right, .slide-up").forEach(el => {\n  animObserver.observe(el);\n});\n\n// 네비게이션 배경 변경\nwindow.addEventListener("scroll", () => {\n  const nav = document.querySelector("nav");\n  nav.classList.toggle("scrolled", window.scrollY > 50);\n});',
              hints: ['하나의 Observer로 모든 애니메이션을 처리', 'classList.toggle의 두 번째 인수로 조건 지정'],
              estimatedMinutes: 6,
              feedback: { perfect: '전체 스크롤 애니메이션 시스템이 완벽해요!', good: '좋아요! 통합이 잘 됐어요.', partial: 'unobserve를 잊지 마세요.', wrong: '하나의 Observer + querySelectorAll로 모든 요소를 처리하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m8', title: '다크 모드 토글', description: '라이트/다크 모드 전환을 구현해요',
          type: 'coding', difficulty: 'advanced', language: 'javascript',
          exp: 35, estimatedMinutes: 31,
          concept: 'CSS 변수', cstaStandard: '2-AP-19',
          learningObjectives: ['CSS 변수을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            {
              id: 'c1', title: 'CSS 변수 라이트 모드',
              description: ':root에 라이트 모드 색상 변수를 정의하세요.',
              difficulty: 'easy',
              starterCode: ':root {\n  /* 라이트 모드 변수 */\n}',
              solution: ':root {\n  --bg: #ffffff;\n  --bg-secondary: #f8f9fa;\n  --text: #333333;\n  --text-light: #6c757d;\n  --card-bg: #ffffff;\n  --border: #e9ecef;\n  --primary: #667eea;\n  --shadow: rgba(0, 0, 0, 0.1);\n}',
              hints: ['배경, 텍스트, 카드, 테두리 색상을 변수로 정의'],
              estimatedMinutes: 3,
              feedback: { perfect: '라이트 모드 변수가 완벽해요!', good: '좋아요! 변수가 잘 정의됐어요.', partial: '그림자 색상도 변수로 만드세요.', wrong: '--bg, --text, --card-bg, --border를 모두 정의하세요.' }
            },
            {
              id: 'c2', title: '다크 모드 변수',
              description: '[data-theme="dark"]에 다크 모드 색상 변수를 정의하세요.',
              difficulty: 'easy',
              starterCode: '[data-theme="dark"] {\n  /* 다크 모드 변수 */\n}',
              solution: '[data-theme="dark"] {\n  --bg: #1a1a2e;\n  --bg-secondary: #16213e;\n  --text: #e0e0e0;\n  --text-light: #a0a0a0;\n  --card-bg: #0f3460;\n  --border: #2a2a4a;\n  --primary: #e94560;\n  --shadow: rgba(0, 0, 0, 0.3);\n}',
              hints: ['같은 변수명을 어두운 색상으로 재정의해요', '배경은 어두운 남색, 텍스트는 밝은 회색'],
              estimatedMinutes: 3,
              feedback: { perfect: '다크 모드 색상이 멋져요!', good: '좋아요! 대비가 적절해요.', partial: '텍스트가 배경과 충분히 대비되는지 확인하세요.', wrong: '같은 변수명에 어두운 색상값을 넣으세요.' }
            },
            {
              id: 'c3', title: '변수 적용하기',
              description: 'body와 주요 요소에 CSS 변수를 적용하세요.',
              difficulty: 'easy',
              starterCode: 'body { /* 변수 사용 */ }\n.card { /* 변수 사용 */ }',
              solution: 'body {\n  background: var(--bg);\n  color: var(--text);\n  transition: background 0.3s, color 0.3s;\n}\n.card {\n  background: var(--card-bg);\n  border: 1px solid var(--border);\n  box-shadow: 0 2px 10px var(--shadow);\n  transition: background 0.3s, border-color 0.3s;\n}\na { color: var(--primary); }\np { color: var(--text-light); }',
              hints: ['var(--변수명)으로 적용', 'transition으로 부드러운 전환'],
              estimatedMinutes: 3,
              feedback: { perfect: '변수 적용이 완벽해요!', good: '좋아요! 전환이 부드러워요.', partial: 'transition을 추가하세요.', wrong: 'var(--변수)로 색상을 적용하고 transition을 추가하세요.' }
            },
            {
              id: 'c4', title: '토글 버튼 만들기',
              description: '해/달 아이콘으로 전환되는 다크모드 토글 버튼을 만드세요.',
              difficulty: 'medium',
              starterCode: '<button id="themeToggle">🌙</button>\n<script>// 토글 기능</script>',
              solution: '<button id="themeToggle" style="position:fixed;top:20px;right:20px;width:48px;height:48px;border-radius:50%;border:none;font-size:20px;cursor:pointer;background:var(--card-bg);box-shadow:0 2px 10px var(--shadow);transition:transform 0.3s;z-index:200;">🌙</button>\n<script>\nconst toggle = document.getElementById("themeToggle");\ntoggle.addEventListener("click", () => {\n  const isDark = document.documentElement.dataset.theme === "dark";\n  document.documentElement.dataset.theme = isDark ? "" : "dark";\n  toggle.textContent = isDark ? "🌙" : "☀️";\n  toggle.style.transform = "rotate(360deg)";\n  setTimeout(() => toggle.style.transform = "", 300);\n});\n</script>',
              hints: ['dataset.theme으로 테마를 전환해요', '아이콘도 함께 전환하세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '토글 버튼이 완벽해요!', good: '좋아요! 전환이 잘 돼요.', partial: '아이콘 전환을 추가하세요.', wrong: 'dataset.theme을 "" / "dark"로 토글하세요.' }
            },
            {
              id: 'c5', title: 'localStorage로 테마 저장',
              description: '선택한 테마를 localStorage에 저장하고, 페이지 로드 시 복원하세요.',
              difficulty: 'medium',
              starterCode: '// 테마 저장 및 복원',
              solution: '// 페이지 로드 시 저장된 테마 복원\nconst savedTheme = localStorage.getItem("theme");\nif (savedTheme) {\n  document.documentElement.dataset.theme = savedTheme;\n  document.getElementById("themeToggle").textContent = savedTheme === "dark" ? "☀️" : "🌙";\n}\n\n// 테마 변경 시 저장\nfunction toggleTheme() {\n  const isDark = document.documentElement.dataset.theme === "dark";\n  const newTheme = isDark ? "" : "dark";\n  document.documentElement.dataset.theme = newTheme;\n  localStorage.setItem("theme", newTheme);\n  document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";\n}',
              hints: ['로드 시 getItem, 변경 시 setItem', '페이지 깜빡임을 방지하려면 head에 스크립트를 넣으세요'],
              estimatedMinutes: 5,
              feedback: { perfect: '테마 저장이 완벽해요!', good: '좋아요! 새로고침해도 유지돼요.', partial: '로드 시 복원을 추가하세요.', wrong: 'localStorage.setItem/getItem으로 저장/복원하세요.' }
            },
            {
              id: 'c6', title: 'prefers-color-scheme 감지',
              description: 'OS 다크모드 설정을 자동 감지해서 초기 테마를 설정하세요.',
              difficulty: 'medium',
              starterCode: '// OS 설정 감지',
              solution: '// OS 다크 모드 감지\nconst prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;\nconst savedTheme = localStorage.getItem("theme");\n\nif (savedTheme) {\n  document.documentElement.dataset.theme = savedTheme;\n} else if (prefersDark) {\n  document.documentElement.dataset.theme = "dark";\n}\n\n// OS 설정 변경 감지\nwindow.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {\n  if (!localStorage.getItem("theme")) {\n    document.documentElement.dataset.theme = e.matches ? "dark" : "";\n  }\n});',
              hints: ['matchMedia로 OS 설정을 확인해요', 'localStorage가 있으면 그게 우선'],
              estimatedMinutes: 5,
              feedback: { perfect: 'OS 감지가 완벽해요!', good: '좋아요! 자동 감지가 잘 돼요.', partial: 'localStorage 우선순위를 확인하세요.', wrong: 'matchMedia + localStorage 우선순위를 설정하세요.' }
            },
            {
              id: 'c7', title: '이미지 다크 모드 대응',
              description: '다크 모드에서 이미지 밝기를 조절하고, 그림자 색을 변경하세요.',
              difficulty: 'hard',
              starterCode: '/* 다크 모드 이미지 처리 */',
              solution: '[data-theme="dark"] img:not(.logo) {\n  filter: brightness(0.85);\n}\n[data-theme="dark"] .card {\n  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);\n}\n[data-theme="dark"] input,\n[data-theme="dark"] textarea {\n  background: var(--bg-secondary);\n  color: var(--text);\n  border-color: var(--border);\n}\n[data-theme="dark"] ::placeholder {\n  color: var(--text-light);\n}',
              hints: ['filter: brightness(0.85)로 약간 어둡게', '입력 필드도 다크 배경으로'],
              estimatedMinutes: 5,
              feedback: { perfect: '이미지 대응이 완벽해요!', good: '좋아요! 다크 모드에서 자연스러워요.', partial: '입력 필드 대응을 추가하세요.', wrong: 'brightness 필터 + input 배경 변경을 하세요.' }
            },
            {
              id: 'c8', title: '토글 애니메이션',
              description: '토글 버튼에 회전 + 스케일 애니메이션을 추가하세요.',
              difficulty: 'hard',
              starterCode: '#themeToggle {\n  /* 애니메이션 */\n}',
              solution: '#themeToggle {\n  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n#themeToggle:active {\n  transform: scale(0.85);\n}\n#themeToggle.rotating {\n  transform: rotate(360deg) scale(1.1);\n}',
              hints: ['cubic-bezier로 탄성 있는 애니메이션', 'rotating 클래스를 잠깐 추가했다 제거'],
              estimatedMinutes: 4,
              feedback: { perfect: '토글 애니메이션이 멋져요!', good: '좋아요! 부드러운 전환이에요.', partial: 'cubic-bezier를 사용해보세요.', wrong: 'rotate + scale + cubic-bezier를 조합하세요.' }
            },
            {
              id: 'c9', title: '테마 전환 트랜지션',
              description: '전체 페이지에 부드러운 테마 전환 효과를 만드세요. 원형으로 퍼지는 듯한 효과입니다.',
              difficulty: 'hard',
              starterCode: '/* 전환 효과 */',
              solution: 'body {\n  transition: background-color 0.4s ease, color 0.3s ease;\n}\n.card, nav, .sidebar, section {\n  transition: background-color 0.4s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;\n}',
              hints: ['모든 색상 관련 속성에 transition 추가', '0.3~0.4초가 자연스러운 속도'],
              estimatedMinutes: 4,
              feedback: { perfect: '전환 효과가 아름다워요!', good: '좋아요! 부드럽게 바뀌어요.', partial: 'border-color도 transition에 포함하세요.', wrong: 'background, color, border에 모두 transition을 추가하세요.' }
            },
            {
              id: 'c10', title: '다크 모드 시스템 완성',
              description: 'CSS 변수 + 토글 + localStorage + OS 감지를 모두 합친 다크 모드 시스템을 완성하세요.',
              difficulty: 'hard',
              starterCode: '// 완전한 다크 모드 시스템',
              solution: '// 완전한 다크 모드 시스템\n(function() {\n  // 1. 저장된 테마 또는 OS 설정 확인\n  const saved = localStorage.getItem("theme");\n  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;\n  const theme = saved || (prefersDark ? "dark" : "");\n  if (theme) document.documentElement.dataset.theme = theme;\n  \n  // 2. 토글 버튼 이벤트\n  document.addEventListener("DOMContentLoaded", () => {\n    const btn = document.getElementById("themeToggle");\n    if (!btn) return;\n    btn.textContent = document.documentElement.dataset.theme === "dark" ? "☀️" : "🌙";\n    btn.addEventListener("click", () => {\n      const isDark = document.documentElement.dataset.theme === "dark";\n      const newTheme = isDark ? "" : "dark";\n      document.documentElement.dataset.theme = newTheme;\n      localStorage.setItem("theme", newTheme);\n      btn.textContent = isDark ? "🌙" : "☀️";\n    });\n  });\n  \n  // 3. OS 설정 변경 감지\n  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {\n    if (!localStorage.getItem("theme")) {\n      document.documentElement.dataset.theme = e.matches ? "dark" : "";\n    }\n  });\n})();',
              hints: ['IIFE로 즉시 실행', 'localStorage > OS 설정 우선순위'],
              estimatedMinutes: 6,
              feedback: { perfect: '완전한 다크 모드 시스템이에요! 프로급!', good: '좋아요! 핵심 기능이 모두 있어요.', partial: 'OS 감지를 추가하세요.', wrong: '변수 + 토글 + localStorage + OS 감지를 모두 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m9', title: '포트폴리오 완성', description: '모든 섹션을 합쳐 완성해요',
          type: 'coding', difficulty: 'advanced', language: 'html',
          exp: 50, estimatedMinutes: 33,
          concept: '프로젝트 통합', cstaStandard: '2-AP-19',
          learningObjectives: ['프로젝트 통합을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          projectCheckpoints: [
            { id: 'w48-cp1', title: '히어로 섹션', description: '임팩트 있는 첫 화면인가요?', criteria: ['풀스크린 히어로', 'CTA 버튼', '네비게이션'], points: 15 },
            { id: 'w48-cp2', title: '자기소개', description: 'About Me가 있나요?', criteria: ['프로필 사진', '소개 텍스트', '스킬 표시'], points: 15 },
            { id: 'w48-cp3', title: '프로젝트 갤러리', description: '프로젝트가 잘 보이나요?', criteria: ['Grid 레이아웃', '호버 효과', '상세 링크'], points: 25 },
            { id: 'w48-cp4', title: '연락처 폼', description: '연락 방법이 있나요?', criteria: ['폼 UI', '유효성 검사', '소셜 링크'], points: 15 },
            { id: 'w48-cp5', title: '반응형+다크모드', description: '모바일/다크모드 대응인가요?', criteria: ['모바일 레이아웃', '다크 모드 토글', '부드러운 전환'], points: 15 },
            { id: 'w48-cp6', title: 'GitHub Pages 배포', description: '실제 URL로 접근 가능한가요?', criteria: ['GitHub 저장소', 'Pages 활성화', 'URL 접근 가능'], points: 15 }
          ],
          challenges: [
            {
              id: 'c1', title: '전체 HTML 통합',
              description: '모든 섹션(히어로/소개/프로젝트/스킬/연락처)을 하나의 index.html에 통합하세요.',
              difficulty: 'easy',
              starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <!-- 모든 섹션 통합 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>포트폴리오</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <nav class="navbar">네비게이션</nav>\n  <section id="hero" class="hero">히어로</section>\n  <section id="about">About Me</section>\n  <section id="projects">Projects</section>\n  <section id="skills">Skills</section>\n  <section id="contact">Contact</section>\n  <footer>Footer</footer>\n  <button id="themeToggle">🌙</button>\n  <button id="topBtn">↑</button>\n  <script src="script.js"></script>\n</body>\n</html>',
              hints: ['CSS와 JS는 외부 파일로 분리', '다크모드 토글과 맨위로 버튼도 포함'],
              estimatedMinutes: 5,
              feedback: { perfect: 'HTML 통합이 완벽해요!', good: '좋아요! 구조가 잘 잡혔어요.', partial: 'CSS/JS 파일 링크를 확인하세요.', wrong: '모든 섹션 + 외부 CSS/JS + 토글 버튼을 포함하세요.' }
            },
            {
              id: 'c2', title: 'CSS 파일 정리',
              description: 'CSS를 리셋/변수/레이아웃/섹션/반응형/다크모드 순으로 정리하세요.',
              difficulty: 'easy',
              starterCode: '/* style.css - 섹션별 정리 */',
              solution: '/* === 1. 리셋 & 변수 === */\n*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }\n:root { --bg:#fff; --text:#333; --primary:#667eea; }\n[data-theme="dark"] { --bg:#1a1a2e; --text:#e0e0e0; --primary:#e94560; }\n\n/* === 2. 기본 스타일 === */\nbody { font-family:system-ui,sans-serif; background:var(--bg); color:var(--text); transition:background 0.3s; }\nhtml { scroll-behavior:smooth; }\n\n/* === 3. 레이아웃 === */\n.container { max-width:1200px; margin:0 auto; padding:0 24px; }\nsection { padding:80px 0; }\n\n/* === 4. 컴포넌트 === */\n/* 네비 / 버튼 / 카드 등 */\n\n/* === 5. 반응형 === */\n@media(max-width:768px) { section{padding:60px 0;} }',
              hints: ['논리적 순서로 정리: 리셋→변수→기본→컴포넌트→반응형'],
              estimatedMinutes: 4,
              feedback: { perfect: 'CSS 정리가 완벽해요!', good: '좋아요! 섹션별로 잘 분류됐어요.', partial: '반응형을 마지막에 넣으세요.', wrong: '리셋→변수→기본→컴포넌트→반응형 순서로 정리하세요.' }
            },
            {
              id: 'c3', title: 'JS 파일 정리',
              description: 'JavaScript를 테마/스크롤/네비/폼 모듈로 정리하세요.',
              difficulty: 'easy',
              starterCode: '// script.js - 모듈별 정리',
              solution: '// === 1. 다크 모드 ===\nconst savedTheme = localStorage.getItem("theme");\nif (savedTheme) document.documentElement.dataset.theme = savedTheme;\n\n// === 2. 스크롤 애니메이션 ===\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });\n}, {threshold:0.1});\ndocument.querySelectorAll(".fade-in").forEach(el => observer.observe(el));\n\n// === 3. 네비게이션 ===\nwindow.addEventListener("scroll", () => {\n  document.querySelector("nav").classList.toggle("scrolled", scrollY > 50);\n});\n\n// === 4. 맨 위로 버튼 ===\ndocument.getElementById("topBtn").addEventListener("click", () => scrollTo({top:0,behavior:"smooth"}));',
              hints: ['기능별로 섹션을 나누세요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'JS 정리가 깔끔해요!', good: '좋아요! 모듈별로 잘 분류됐어요.', partial: '주석으로 섹션을 구분하세요.', wrong: '기능별 주석 + 코드 그룹화로 정리하세요.' }
            },
            {
              id: 'c4', title: '크로스 브라우저 테스트',
              description: '다양한 브라우저/기기에서 확인해야 할 체크리스트를 작성하세요.',
              difficulty: 'medium',
              starterCode: '// 테스트 체크리스트',
              solution: '// === 크로스 브라우저 테스트 체크리스트 ===\n// 브라우저: Chrome, Firefox, Safari, Edge\n// 기기: 데스크톱, 태블릿, 모바일\n//\n// [ ] 모든 섹션 표시 확인\n// [ ] 네비게이션 링크 동작\n// [ ] 반응형 레이아웃 (320px~1920px)\n// [ ] 다크 모드 전환\n// [ ] 스크롤 애니메이션\n// [ ] 폼 유효성 검사\n// [ ] 이미지 로딩\n// [ ] 폰트 렌더링\n// [ ] 콘솔 에러 없음\n// [ ] 접근성 (Tab 키 탐색)',
              hints: ['주요 브라우저 4개 + 기기 3종류'],
              estimatedMinutes: 3,
              feedback: { perfect: '완벽한 테스트 체크리스트예요!', good: '좋아요! 핵심 항목이 포함됐어요.', partial: '접근성 테스트를 추가하세요.', wrong: '브라우저/기기/기능/접근성을 모두 확인하세요.' }
            },
            {
              id: 'c5', title: '성능 최적화',
              description: '이미지 최적화와 CSS/JS 최소화 방법을 설명하세요.',
              difficulty: 'medium',
              starterCode: '// 성능 최적화 방법',
              solution: '// === 성능 최적화 ===\n// 1. 이미지 최적화\n//    - WebP 포맷 사용 (JPG보다 30% 작음)\n//    - width/height 속성 명시 (레이아웃 시프트 방지)\n//    - loading="lazy" 추가 (지연 로딩)\n//\n// 2. CSS 최적화\n//    - 사용하지 않는 CSS 제거\n//    - CSS 파일 minify\n//\n// 3. JS 최적화\n//    - script에 defer 속성 추가\n//    - 이벤트 리스너 최소화 (이벤트 위임)\n//\n// 4. 기타\n//    - 파비콘 최적화\n//    - meta description 추가 (SEO)',
              hints: ['이미지, CSS, JS 각각 최적화 방법이 있어요'],
              estimatedMinutes: 4,
              feedback: { perfect: '최적화 방법을 잘 알고 있어요!', good: '좋아요! 핵심을 짚었어요.', partial: 'lazy loading을 추가하세요.', wrong: '이미지 최적화 + CSS/JS 최소화 + defer를 사용하세요.' }
            },
            {
              id: 'c6', title: 'Footer 만들기',
              description: '저작권 텍스트, 소셜 링크, 맨 위로 링크가 포함된 footer를 만드세요.',
              difficulty: 'medium',
              starterCode: '<footer>\n  <!-- 푸터 내용 -->\n</footer>',
              solution: '<footer style="padding:40px 0;background:var(--bg-secondary,#f8f9fa);text-align:center;border-top:1px solid var(--border,#eee);">\n  <div class="container">\n    <div style="display:flex;justify-content:center;gap:16px;margin-bottom:16px;">\n      <a href="#" style="color:var(--text-light);">GitHub</a>\n      <a href="#" style="color:var(--text-light);">LinkedIn</a>\n      <a href="#" style="color:var(--text-light);">Email</a>\n    </div>\n    <p style="color:var(--text-light);font-size:14px;">Made with ❤️ by Me</p>\n    <a href="#hero" style="display:inline-block;margin-top:12px;color:var(--primary);font-size:13px;">맨 위로 ↑</a>\n  </div>\n</footer>',
              hints: ['소셜 링크 + 저작권 + 맨 위로 링크'],
              estimatedMinutes: 4,
              feedback: { perfect: 'Footer가 완벽해요!', good: '좋아요! 필수 요소가 있어요.', partial: '맨 위로 링크를 추가하세요.', wrong: '소셜 링크, 저작권 텍스트, 맨 위로 앵커를 포함하세요.' }
            },
            {
              id: 'c7', title: 'loading="lazy" 적용',
              description: '모든 이미지에 loading="lazy"와 alt 텍스트를 추가하세요.',
              difficulty: 'hard',
              starterCode: '<!-- 이미지 최적화 -->\n<img src="project1.png">\n<img src="project2.png">\n<img src="profile.jpg">',
              solution: '<img src="project1.png" alt="퀴즈 앱 프로젝트" loading="lazy" width="400" height="300">\n<img src="project2.png" alt="날씨 앱 프로젝트" loading="lazy" width="400" height="300">\n<img src="profile.jpg" alt="프로필 사진" width="300" height="300">',
              hints: ['loading="lazy"는 화면 밖 이미지를 나중에 로딩', 'alt 텍스트는 접근성에 필수', '프로필 사진은 eager(기본값)로 유지'],
              estimatedMinutes: 4,
              feedback: { perfect: '이미지 최적화가 완벽해요!', good: '좋아요! lazy loading이 적용됐어요.', partial: 'width/height를 추가하면 레이아웃 시프트를 방지해요.', wrong: 'loading="lazy" + alt + width/height를 추가하세요.' }
            },
            {
              id: 'c8', title: 'script defer 적용',
              description: 'script 태그에 defer를 추가하고, DOMContentLoaded 이벤트를 활용하세요.',
              difficulty: 'hard',
              starterCode: '<script src="script.js"></script>\n<!-- defer 적용 -->',
              solution: '<script src="script.js" defer></script>\n<!-- defer: HTML 파싱과 병렬로 다운로드, 파싱 완료 후 실행 -->\n<!-- async: 다운로드 완료 즉시 실행 (순서 보장 안됨) -->\n<!-- defer를 사용하면 DOMContentLoaded 불필요 -->',
              hints: ['defer = HTML 파싱 후 실행', 'head에 넣어도 body 끝에 넣은 것과 같은 효과'],
              estimatedMinutes: 3,
              feedback: { perfect: 'defer를 정확히 이해했어요!', good: '좋아요! 올바르게 적용했어요.', partial: 'defer vs async의 차이를 확인하세요.', wrong: 'defer는 파싱 후 실행, async는 즉시 실행이에요.' }
            },
            {
              id: 'c9', title: '최종 통합 테스트',
              description: '포트폴리오의 모든 기능이 동작하는지 최종 확인 코드를 작성하세요.',
              difficulty: 'hard',
              starterCode: '// 최종 통합 테스트',
              solution: '// === 최종 통합 테스트 ===\nconsole.log("=== 포트폴리오 테스트 ===");\n\n// 1. 섹션 존재 확인\n["hero","about","projects","skills","contact"].forEach(id => {\n  console.log(id + ": " + (document.getElementById(id) ? "OK" : "MISSING"));\n});\n\n// 2. 다크 모드 테스트\ndocument.documentElement.dataset.theme = "dark";\nconsole.log("다크모드: " + (getComputedStyle(document.body).backgroundColor !== "rgb(255, 255, 255)" ? "OK" : "FAIL"));\ndocument.documentElement.dataset.theme = "";\n\n// 3. 네비게이션 링크 확인\nconst navLinks = document.querySelectorAll("nav a[href^=\"#\"]");\nconsole.log("네비 링크: " + navLinks.length + "개");\n\n// 4. 이미지 alt 확인\nconst noAlt = document.querySelectorAll("img:not([alt])");\nconsole.log("alt 없는 이미지: " + noAlt.length + "개");\n\nconsole.log("=== 테스트 완료 ===");',
              hints: ['각 기능을 console.log로 확인', '자동화된 간단한 테스트'],
              estimatedMinutes: 5,
              feedback: { perfect: '통합 테스트가 훌륭해요!', good: '좋아요! 핵심 기능을 확인해요.', partial: '이미지 alt 체크를 추가하세요.', wrong: '섹션 존재 + 다크모드 + 링크 + 이미지 검증을 하세요.' }
            },
            {
              id: 'c10', title: '포트폴리오 완성 선언',
              description: '완성된 포트폴리오의 기능 목록과 사용 기술을 README 형식으로 정리하세요.',
              difficulty: 'hard',
              starterCode: '// README.md 내용',
              solution: '// # 나의 포트폴리오\n//\n// 프론트엔드 개발자 포트폴리오 웹사이트입니다.\n//\n// ## 기능\n// - 반응형 디자인 (모바일/태블릿/데스크톱)\n// - 다크 모드 (OS 설정 자동 감지)\n// - 스크롤 애니메이션 (Intersection Observer)\n// - 프로젝트 갤러리 (필터링 + 모달)\n// - 연락처 폼 (유효성 검사)\n// - 스무스 스크롤 네비게이션\n//\n// ## 기술 스택\n// - HTML5 (시멘틱 태그, 접근성)\n// - CSS3 (변수, Grid, Flexbox, 애니메이션)\n// - JavaScript (DOM 조작, 이벤트, Observer)\n//\n// ## 배포\n// GitHub Pages: https://username.github.io',
              hints: ['기능, 기술 스택, 배포 정보를 포함하세요'],
              estimatedMinutes: 4,
              feedback: { perfect: 'README가 완벽해요! 이 포트폴리오로 취업 가능!', good: '좋아요! 잘 정리됐어요.', partial: '배포 정보를 추가하세요.', wrong: '기능 목록 + 기술 스택 + 배포 URL을 포함하세요.' }
            }
          ],
          unlocked: true, completed: false, perfectScore: false
        },
        {
          id: 'w48-m10', title: 'GitHub Pages 배포', description: 'GitHub Pages로 배포해요',
          type: 'interactive-lesson', difficulty: 'advanced', language: 'html',
          exp: 25, estimatedMinutes: 35,
          concept: '배포', cstaStandard: '2-AP-19',
          learningObjectives: ['배포을 이해하고 구현할 수 있다'],
          hints: ['💡 실제 포트폴리오 사이트를 참고하세요'],
          challenges: [
            { id: 'c1', title: 'Git 초기화', description: 'git init으로 저장소를 초기화하세요.', difficulty: 'easy', starterCode: '# 터미널 명령어를 적으세요', solution: 'git init\ngit add .\ngit commit -m "first commit"', hints: ['단계별로 진행하세요'], estimatedMinutes: 5, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c2', title: 'GitHub 저장소 생성', description: 'GitHub에서 새 저장소를 만드는 단계를 적으세요.', difficulty: 'easy', starterCode: '# GitHub 저장소 생성 단계', solution: '# 1. github.com에서 New Repository 클릭\n# 2. 저장소 이름 입력 (username.github.io)\n# 3. Public 선택\n# 4. Create Repository', hints: ['단계별로 진행하세요'], estimatedMinutes: 7, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c3', title: '원격 저장소 연결', description: 'git remote add로 연결하세요.', difficulty: 'easy', starterCode: '# 원격 저장소 연결', solution: 'git remote add origin https://github.com/user/repo.git\ngit push -u origin main', hints: ['단계별로 진행하세요'], estimatedMinutes: 9, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c4', title: 'GitHub Pages 설정', description: 'Settings에서 Pages를 활성화하는 단계를 적으세요.', difficulty: 'medium', starterCode: '# GitHub Pages 설정 단계', solution: '# 1. Settings 탭 클릭\n# 2. Pages 메뉴 선택\n# 3. Source: main branch 선택\n# 4. Save 클릭\n# 5. URL 확인: https://user.github.io/repo', hints: ['단계별로 진행하세요'], estimatedMinutes: 11, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c5', title: 'index.html 필수', description: '메인 파일이 index.html이어야 하는 이유를 설명하세요.', difficulty: 'medium', starterCode: '// 왜 index.html?', solution: '// GitHub Pages는 index.html을 기본 페이지로 사용\n// 다른 이름이면 404 에러 발생\n// 모든 파일이 루트에 있어야 함', hints: ['단계별로 진행하세요'], estimatedMinutes: 13, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c6', title: '파일 구조 정리', description: '포트폴리오 파일 구조를 정리하세요.', difficulty: 'medium', starterCode: '// 파일 구조', solution: '// /\n// ├── index.html\n// ├── style.css\n// ├── script.js\n// └── images/\n//     ├── profile.jpg\n//     └── projects/', hints: ['단계별로 진행하세요'], estimatedMinutes: 15, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c7', title: '메타 태그 SEO', description: '검색엔진 최적화 메타 태그를 추가하세요.', difficulty: 'hard', starterCode: '<head>\n  <!-- 메타 태그 -->\n</head>', solution: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="프론트엔드 개발자 포트폴리오">\n  <meta property="og:title" content="나의 포트폴리오">\n  <meta property="og:image" content="preview.png">\n  <title>나의 포트폴리오</title>\n</head>', hints: ['단계별로 진행하세요'], estimatedMinutes: 17, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c8', title: '파비콘 추가', description: '브라우저 탭에 표시될 아이콘을 추가하세요.', difficulty: 'hard', starterCode: '<!-- 파비콘 -->', solution: '<link rel="icon" type="image/png" href="favicon.png">\n<link rel="apple-touch-icon" href="apple-touch-icon.png">', hints: ['단계별로 진행하세요'], estimatedMinutes: 19, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c9', title: '배포 확인', description: '배포된 사이트를 테스트하는 체크리스트를 만드세요.', difficulty: 'hard', starterCode: '// 배포 체크리스트', solution: '// 1. URL 접속 확인\n// 2. 모든 이미지 로드 확인\n// 3. 링크 동작 확인\n// 4. 모바일 테스트\n// 5. 콘솔 에러 확인\n// 6. 로딩 속도 확인', hints: ['단계별로 진행하세요'], estimatedMinutes: 21, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } },
            { id: 'c10', title: 'README 작성', description: 'GitHub 저장소의 README.md를 작성하세요.', difficulty: 'hard', starterCode: '# README 내용', solution: '# 나의 포트폴리오\n\n프론트엔드 개발자 포트폴리오 웹사이트입니다.\n\n## 기술 스택\n- HTML5\n- CSS3 (Flexbox, Grid)\n- JavaScript\n\n## 배포\nhttps://user.github.io\n\n## 기능\n- 반응형 디자인\n- 다크 모드\n- 프로젝트 갤러리', hints: ['단계별로 진행하세요'], estimatedMinutes: 23, feedback: { perfect: '완벽해요!', good: '잘했어요!', partial: '수정이 필요해요.', wrong: '다시 시도하세요.' } }
          ],
          unlocked: true, completed: false, perfectScore: false
        }
      ],
      project: {
        id: 'project-w48',
        title: '나만의 포트폴리오',
        description: '자신의 포트폴리오 웹사이트를 만들고 GitHub Pages로 배포하세요.',
        difficulty: 'advanced',
        duration: '5-6시간',
        requirements: ['히어로 섹션', '자기소개', '프로젝트 갤러리', '연락처 폼', '반응형 디자인', 'GitHub Pages 배포'],
        tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub Pages'],
        exp: 150,
        badge: '웹 개발자'
      }
    }
  ]
};

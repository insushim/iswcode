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
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "JavaScript 기초에서 배운 Core Concept의 핵심을 확인합니다.",
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
        // 10 missions: 프로젝트 기획, HTML 구조, CSS 스타일링, 데이터 관리, CRUD 구현, 이벤트 핸들링, 유효성 검사, 로컬 스토리지, 배포 준비, 최종 프로젝트: Todo 웹 앱
      ]
    }
  ]
};

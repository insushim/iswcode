import type { Unit } from '../../types';

// Unit 7: 웹 프로젝트 (4주, 45-48주차)
// CSTA 표준: 2-AP-13, 2-AP-14, 2-AP-15, 2-AP-16, 2-AP-17, 2-AP-18, 2-AP-19
// 목표: HTML, CSS, JavaScript를 활용한 실전 프로젝트 개발

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
    // Week 45: 퀴즈 앱 프로젝트
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
          realWorldExample: '건축가가 집을 짓기 전에 설계도를 그리는 것처럼, 프로그래머도 앱을 만들기 전에 어떤 화면이 필요한지, 어떤 기능이 있어야 하는지 먼저 계획해요. 레고로 집을 만들 때도 먼저 어떤 모양으로 만들지 생각하는 것과 비슷해요!',
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
            {
              title: '프로젝트 설계란?',
              description: '프로그램을 만들기 전에 어떤 기능이 필요하고, 어떻게 구성할지 미리 계획하는 과정이에요.'
            },
            {
              title: '화면 설계',
              description: '퀴즈 앱은 시작 화면, 문제 화면, 결과 화면 세 가지로 나눌 수 있어요. 각 화면의 역할을 명확히 해요.'
            },
            {
              title: '데이터 구조',
              description: '퀴즈 문제, 선택지, 정답, 점수 등 필요한 데이터를 어떻게 저장하고 관리할지 미리 정해요.'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "프로젝트 설계 이해하기",
                              "description": "웹 프로젝트에서 배운 프로젝트 설계의 핵심을 확인합니다.",
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
          realWorldExample: '여러 방이 있는 집을 만드는 것과 같아요! 거실, 침실, 부엌처럼 각 div가 다른 화면이에요. 필요할 때 원하는 방(화면)으로 이동하면 돼요.',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <!-- 퀴즈 앱 구조를 만드세요 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>퀴즈 앱</title>\n</head>\n<body>\n  <div id="app">\n    <div id="start-screen">\n      <h1>퀴즈에 도전하세요!</h1>\n      <button id="start-btn">시작하기</button>\n    </div>\n    <div id="quiz-screen" style="display:none">\n      <div id="progress">문제 1/5</div>\n      <h2 id="question">문제가 여기에 표시됩니다</h2>\n      <div id="options"></div>\n    </div>\n    <div id="result-screen" style="display:none">\n      <h1>퀴즈 완료!</h1>\n      <p id="score">점수: 0/5</p>\n      <button id="restart-btn">다시 하기</button>\n    </div>\n  </div>\n</body>\n</html>',
          hints: [
            '💡 힌트 1: 시작, 퀴즈, 결과 세 화면을 div로 구분해요',
            '💡 힌트 2: 각 div에 고유한 id를 붙여서 JavaScript로 찾을 수 있게 해요',
            '💡 힌트 3: style="display:none"으로 숨겨진 화면을 만들 수 있어요'
          ],
          commonMistakes: [
            'id를 중복으로 사용하는 경우 (id는 페이지에서 유일해야 해요)',
            '화면을 숨기는 것을 잊어서 모든 화면이 동시에 보이는 경우',
            '버튼에 id를 붙이지 않아서 JavaScript로 제어할 수 없는 경우'
          ],
          testCases: [
            {
              input: 'HTML 구조 확인',
              expectedOutput: 'start-screen, quiz-screen, result-screen 3개의 div 존재',
              description: '세 개의 주요 화면이 모두 있는지 확인'
            },
            {
              input: 'ID 확인',
              expectedOutput: 'start-btn, question, options, score, restart-btn 등의 ID 존재',
              description: 'JavaScript에서 사용할 주요 요소들에 ID가 있는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "HTML 구조의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# HTML 구조 기본 연습\n",
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
          realWorldExample: '좋아하는 게임 앱이나 웹사이트를 생각해보세요! 버튼에 마우스를 올리면 색이 바뀌고, 클릭하고 싶게 만들어져 있어요. CSS로 이런 멋진 디자인을 만들 수 있어요!',
          starterCode: '/* 퀴즈 앱 스타일을 작성하세요 */\n#app {\n  \n}',
          solution: '#app {\n  max-width: 600px;\n  margin: 50px auto;\n  padding: 30px;\n  text-align: center;\n  font-family: Arial, sans-serif;\n}\n\nbutton {\n  padding: 15px 30px;\n  font-size: 18px;\n  background-color: #4CAF50;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton:hover {\n  background-color: #45a049;\n}\n\n.option-btn {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  padding: 15px;\n  background-color: #f0f0f0;\n  color: #333;\n}\n\n.option-btn:hover {\n  background-color: #ddd;\n}',
          hints: [
            '💡 힌트 1: margin: 0 auto로 가운데 정렬을 할 수 있어요',
            '💡 힌트 2: :hover를 사용하면 마우스를 올렸을 때 스타일이 바뀌어요',
            '💡 힌트 3: cursor: pointer로 버튼에 마우스를 올렸을 때 손가락 모양이 나와요'
          ],
          commonMistakes: [
            'max-width 없이 만들어서 큰 화면에서 너무 넓어 보이는 경우',
            'hover 효과를 빠뜨려서 클릭 가능한 요소인지 알기 어려운 경우',
            '색상 대비가 약해서 텍스트가 잘 안 보이는 경우'
          ],
          testCases: [
            {
              input: '가운데 정렬',
              expectedOutput: 'margin: auto 또는 text-align: center 사용',
              description: '앱이 화면 가운데에 위치하는지 확인'
            },
            {
              input: '버튼 호버',
              expectedOutput: 'button:hover 스타일 존재',
              description: '버튼에 마우스를 올렸을 때 변화가 있는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "CSS 스타일의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# CSS 스타일 기본 연습\n",
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
          realWorldExample: '퀴즈 문제집을 생각해보세요! 각 문제는 질문, 선택지, 정답으로 이루어져 있어요. 프로그래밍에서도 똑같이 각 문제를 객체로 만들고, 모든 문제를 배열에 담아요.',
          starterCode: '// 퀴즈 문제 배열을 만드세요\nconst quizData = [\n  // 문제 객체들\n];',
          solution: 'const quizData = [\n  {\n    question: "HTML은 무엇의 약자인가요?",\n    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],\n    correct: 0\n  },\n  {\n    question: "CSS에서 id 선택자 기호는?",\n    options: [".", "#", "@", "*"],\n    correct: 1\n  },\n  {\n    question: "JavaScript 변수 선언 키워드가 아닌 것은?",\n    options: ["let", "const", "var", "int"],\n    correct: 3\n  }\n];',
          hints: [
            '💡 힌트 1: 각 문제는 question, options, correct 속성을 가진 객체예요',
            '💡 힌트 2: options는 배열로, 여러 선택지를 저장해요',
            '💡 힌트 3: correct는 정답의 인덱스 번호예요 (0부터 시작!)'
          ],
          commonMistakes: [
            'correct를 문자열로 저장하는 경우 (인덱스 번호여야 해요)',
            '객체 속성 이름을 일관성 없이 사용하는 경우',
            '배열에 쉼표를 빠뜨려서 문법 오류가 나는 경우'
          ],
          testCases: [
            {
              input: 'quizData.length',
              expectedOutput: '3 이상',
              description: '최소 3개 이상의 문제가 있는지 확인'
            },
            {
              input: 'quizData[0].question',
              expectedOutput: '문자열',
              description: '각 문제에 질문이 있는지 확인'
            },
            {
              input: 'quizData[0].options.length',
              expectedOutput: '4',
              description: '각 문제에 4개의 선택지가 있는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "데이터 구조의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 데이터 구조 기본 연습\n",
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
          id: 'w45-m5',
          title: '화면 전환 기능',
          description: '시작 → 퀴즈 → 결과 화면 전환을 만들어요',
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
          realWorldExample: 'TV 리모컨으로 채널을 바꾸는 것처럼, 버튼을 누르면 다른 화면으로 전환돼요. 실제로는 모든 채널이 동시에 방송되지만, 우리는 하나만 보는 거예요!',
          starterCode: '// 화면 전환 함수를 만드세요\nfunction showScreen(screenId) {\n  // 모든 화면 숨기고, 해당 화면만 표시\n}',
          solution: 'function showScreen(screenId) {\n  document.getElementById("start-screen").style.display = "none";\n  document.getElementById("quiz-screen").style.display = "none";\n  document.getElementById("result-screen").style.display = "none";\n  document.getElementById(screenId).style.display = "block";\n}\n\ndocument.getElementById("start-btn").addEventListener("click", () => {\n  showScreen("quiz-screen");\n  showQuestion();\n});',
          hints: [
            '💡 힌트 1: 먼저 모든 화면을 display: none으로 숨겨요',
            '💡 힌트 2: 그 다음 원하는 화면만 display: block으로 보여요',
            '💡 힌트 3: addEventListener로 버튼 클릭을 감지해요'
          ],
          commonMistakes: [
            '하나의 화면만 숨기고 다른 화면을 안 숨겨서 여러 화면이 동시에 보이는 경우',
            'getElementById의 ID 이름을 잘못 입력해서 오류가 나는 경우',
            '이벤트 리스너를 추가하지 않아서 버튼이 작동하지 않는 경우'
          ],
          testCases: [
            {
              input: '시작 버튼 클릭',
              expectedOutput: 'quiz-screen 표시, 나머지 화면 숨김',
              description: '시작 버튼을 누르면 퀴즈 화면만 보이는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "화면 전환의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 화면 전환 기본 연습\n",
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
            '배열의 forEach 메서드를 사용하여 반복 작업을 수행할 수 있다',
            'textContent와 innerHTML을 적절히 활용할 수 있다'
          ],
          realWorldExample: '유튜브에서 댓글 목록이 로드되는 것을 본 적 있나요? 서버에서 받은 댓글 데이터를 하나씩 읽으면서 화면에 표시해요. 우리 퀴즈 앱도 똑같이 문제 데이터를 읽어서 버튼을 만들어요!',
          starterCode: 'let currentQuestion = 0;\n\nfunction showQuestion() {\n  // 현재 문제를 화면에 표시\n}',
          solution: 'let currentQuestion = 0;\nlet score = 0;\n\nfunction showQuestion() {\n  const quiz = quizData[currentQuestion];\n  document.getElementById("progress").textContent = `문제 ${currentQuestion + 1}/${quizData.length}`;\n  document.getElementById("question").textContent = quiz.question;\n  \n  const optionsDiv = document.getElementById("options");\n  optionsDiv.innerHTML = "";\n  \n  quiz.options.forEach((option, index) => {\n    const btn = document.createElement("button");\n    btn.className = "option-btn";\n    btn.textContent = option;\n    btn.addEventListener("click", () => selectAnswer(index));\n    optionsDiv.appendChild(btn);\n  });\n}',
          hints: [
            '💡 힌트 1: quizData[currentQuestion]으로 현재 문제를 가져와요',
            '💡 힌트 2: innerHTML = ""으로 이전 선택지를 지워요',
            '💡 힌트 3: forEach로 각 선택지마다 버튼을 만들어 appendChild로 추가해요'
          ],
          commonMistakes: [
            '이전 선택지를 지우지 않아서 버튼이 계속 쌓이는 경우',
            'createElement를 잊고 HTML 문자열로만 만들려는 경우',
            '이벤트 리스너를 추가하지 않아서 선택지를 클릭해도 반응이 없는 경우'
          ],
          testCases: [
            {
              input: 'showQuestion() 호출',
              expectedOutput: '질문 텍스트와 4개의 선택지 버튼 표시',
              description: '문제와 선택지가 화면에 올바르게 나타나는지 확인'
            },
            {
              input: '두 번째 문제로 이동',
              expectedOutput: '이전 선택지는 사라지고 새 선택지만 표시',
              description: '선택지가 중복으로 쌓이지 않는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "동적 UI의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 동적 UI 기본 연습\n",
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
          id: 'w45-m7',
          title: '정답 확인 기능',
          description: '선택한 답이 맞는지 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 20,
          concept: '정답 처리',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '조건문을 사용하여 정답 여부를 판단할 수 있다',
            '변수를 사용하여 점수를 누적할 수 있다',
            '프로그램의 흐름을 제어하여 다음 단계로 진행할 수 있다'
          ],
          realWorldExample: '시험을 볼 때 선생님이 답안을 채점하는 것처럼, 프로그램도 정답과 비교해서 맞으면 점수를 올려요. 마지막 문제까지 끝나면 자동으로 결과를 보여줘요!',
          starterCode: 'function selectAnswer(selectedIndex) {\n  // 정답 확인 및 다음 문제로\n}',
          solution: 'function selectAnswer(selectedIndex) {\n  const quiz = quizData[currentQuestion];\n  \n  if (selectedIndex === quiz.correct) {\n    score++;\n  }\n  \n  currentQuestion++;\n  \n  if (currentQuestion < quizData.length) {\n    showQuestion();\n  } else {\n    showResult();\n  }\n}\n\nfunction showResult() {\n  showScreen("result-screen");\n  document.getElementById("score").textContent = `점수: ${score}/${quizData.length}`;\n}',
          hints: [
            '💡 힌트 1: 선택한 인덱스와 quiz.correct를 비교해요',
            '💡 힌트 2: 맞으면 score++로 점수를 1 증가시켜요',
            '💡 힌트 3: currentQuestion < quizData.length로 문제가 남았는지 확인해요'
          ],
          commonMistakes: [
            '==(비교)와 =(대입)을 혼동하여 조건문이 작동하지 않는 경우',
            'currentQuestion을 증가시키지 않아서 같은 문제가 반복되는 경우',
            '마지막 문제 체크를 빠뜨려서 무한 반복되는 경우'
          ],
          testCases: [
            {
              input: '정답 선택',
              expectedOutput: 'score 1 증가',
              description: '정답을 선택하면 점수가 올라가는지 확인'
            },
            {
              input: '오답 선택',
              expectedOutput: 'score 변화 없음',
              description: '오답을 선택하면 점수가 그대로인지 확인'
            },
            {
              input: '마지막 문제 완료',
              expectedOutput: '결과 화면 표시',
              description: '모든 문제를 풀면 결과 화면으로 이동하는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "정답 처리의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 정답 처리 기본 연습\n",
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
          learningObjectives: [
            '프로그램의 상태를 초기화할 수 있다',
            '변수의 값을 리셋하여 프로그램을 재시작할 수 있다'
          ],
          realWorldExample: '게임을 다시 시작하거나 계산기를 초기화하는 것처럼, 모든 값을 처음으로 되돌려요. 마치 시계를 0으로 맞추는 것과 같아요!',
          starterCode: '// 다시하기 버튼 기능을 만드세요',
          solution: 'document.getElementById("restart-btn").addEventListener("click", () => {\n  currentQuestion = 0;\n  score = 0;\n  showScreen("start-screen");\n});',
          hints: [
            '💡 힌트 1: currentQuestion과 score를 0으로 리셋해요',
            '💡 힌트 2: showScreen("start-screen")으로 시작 화면으로 돌아가요',
            '💡 힌트 3: restart-btn에 클릭 이벤트 리스너를 추가해요'
          ],
          commonMistakes: [
            'currentQuestion만 리셋하고 score는 리셋하지 않는 경우',
            '화면 전환을 하지 않아서 결과 화면에 그대로 있는 경우'
          ],
          testCases: [
            {
              input: '다시하기 버튼 클릭',
              expectedOutput: 'currentQuestion=0, score=0, 시작 화면 표시',
              description: '모든 값이 초기화되고 시작 화면이 나타나는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "초기화의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 초기화 기본 연습\n",
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
            'HTML, CSS, JavaScript를 통합하여 완전한 웹 애플리케이션을 만들 수 있다',
            '여러 기능을 조합하여 동작하는 프로그램을 완성할 수 있다',
            '프로젝트의 모든 부분이 올바르게 연결되도록 테스트할 수 있다'
          ],
          realWorldExample: '레고 블록들을 하나씩 조립해서 완성된 작품을 만드는 것처럼, 지금까지 만든 모든 기능을 합쳐서 실제로 작동하는 퀴즈 앱을 완성해요!',
          hints: [
            '💡 힌트 1: HTML에 <script> 태그로 JavaScript를 연결해요',
            '💡 힌트 2: <style> 태그나 외부 CSS 파일로 스타일을 적용해요',
            '💡 힌트 3: 모든 ID가 일치하는지, 함수 이름이 올바른지 확인해요'
          ],
          commonMistakes: [
            'JavaScript 코드를 </body> 태그 앞에 두지 않아서 요소를 찾지 못하는 경우',
            'ID 이름이 HTML과 JavaScript에서 다른 경우',
            '함수를 정의하지 않고 호출해서 오류가 나는 경우'
          ],
          testCases: [
            {
              input: '전체 흐름 테스트',
              expectedOutput: '시작 → 퀴즈 → 결과 → 다시하기 모두 작동',
              description: '앱의 전체 흐름이 끊김없이 작동하는지 확인'
            },
            {
              input: '점수 계산 테스트',
              expectedOutput: '정답 개수만큼 점수 표시',
              description: '점수가 정확하게 계산되는지 확인'
            }
          ],
          projectCheckpoints: [
            {
              id: 'w45-m9-cp1',
              title: 'HTML 구조 완성',
              description: '세 화면(시작, 퀴즈, 결과)이 올바르게 구성됐나요?',
              criteria: ['시작 화면에 제목과 시작 버튼', '퀴즈 화면에 문제/선택지 영역', '결과 화면에 점수와 다시하기 버튼'],
              points: 20
            },
            {
              id: 'w45-m9-cp2',
              title: 'CSS 스타일 적용',
              description: '앱이 보기 좋게 스타일링 됐나요?',
              criteria: ['가운데 정렬', '버튼 호버 효과', '적절한 색상과 여백'],
              points: 15
            },
            {
              id: 'w45-m9-cp3',
              title: '퀴즈 데이터 구조',
              description: '5개 이상의 문제가 배열로 저장됐나요?',
              criteria: ['5개 이상 문제', '각 문제에 선택지 4개', '정답 인덱스 포함'],
              points: 15
            },
            {
              id: 'w45-m9-cp4',
              title: '화면 전환 기능',
              description: '버튼 클릭 시 화면이 전환되나요?',
              criteria: ['시작 → 퀴즈 전환', '마지막 문제 후 → 결과 전환', '다시하기 → 시작 전환'],
              points: 20
            },
            {
              id: 'w45-m9-cp5',
              title: '점수 계산 로직',
              description: '정답/오답이 올바르게 계산되나요?',
              criteria: ['정답 시 score 증가', '오답 시 score 유지', '결과 화면에 최종 점수 표시'],
              points: 20
            },
            {
              id: 'w45-m9-cp6',
              title: '완성도 및 테스트',
              description: '모든 기능이 오류 없이 작동하나요?',
              criteria: ['콘솔 에러 없음', '모든 흐름 테스트 통과', '다양한 시나리오 동작 확인'],
              points: 10
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "프로젝트 완성의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 프로젝트 완성 기본 연습\n",
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
          id: 'w45-m10',
          title: '퀴즈 앱 리뷰',
          description: '완성된 프로젝트를 점검해요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '프로젝트 복습',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '프로젝트 개발 과정을 이해하고 설명할 수 있다',
            '각 기능의 작동 원리를 파악하고 있다'
          ],
          realWorldExample: '완성된 퀴즈 앱을 친구들에게 보여주기 전에, 모든 기능이 제대로 작동하는지 마지막으로 점검해요!',
          hints: [
            '💡 힌트 1: 각 화면 전환이 올바르게 작동하는지 확인하세요',
            '💡 힌트 2: 점수가 정확하게 계산되는지 확인하세요',
            '💡 힌트 3: 다시하기 버튼이 모든 값을 초기화하는지 확인하세요'
          ],
          commonMistakes: [
            '테스트 없이 완성했다고 판단하는 경우',
            '한 가지 경로만 테스트하고 다른 시나리오는 확인하지 않는 경우'
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
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w45',
        title: '나만의 퀴즈 앱',
        description: '자신만의 주제로 퀴즈 앱을 만들어보세요.',
        difficulty: 'intermediate',
        duration: '3-4시간',
        requirements: ['최소 5개 문제', '점수 계산', '결과 화면', '다시하기 기능'],
        tech: ['HTML', 'CSS', 'JavaScript'],
        exp: 100,
        badge: '퀴즈 마스터'
      }
    },
    // Week 46: 날씨 앱 프로젝트
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
          learningObjectives: [
            'API가 무엇인지 이해하고 설명할 수 있다',
            'API를 통해 외부 데이터를 가져오는 원리를 이해한다',
            '다양한 API의 활용 사례를 파악할 수 있다'
          ],
          realWorldExample: '식당에서 메뉴판을 보고 주문하면 음식이 나오는 것처럼, API는 프로그램이 다른 서비스에 "날씨 정보 주세요"라고 요청하면 데이터를 받아오는 거예요. 유튜브, 지도, 날씨 앱 모두 API를 사용해요!',
          hints: [
            '💡 힌트 1: API는 Application Programming Interface의 약자예요',
            '💡 힌트 2: 날씨, 뉴스, 영화, 음악 정보 등 다양한 API가 있어요',
            '💡 힌트 3: 우리가 만든 앱에서 다른 회사의 데이터를 쉽게 사용할 수 있게 해줘요'
          ],
          commonMistakes: [
            'API를 복잡하게만 생각하는 경우 (사실은 데이터를 요청하고 받는 단순한 과정이에요)',
            'API 키를 공개하면 안 된다는 것을 모르는 경우'
          ],
          conceptCards: [
            {
              title: 'API란?',
              description: 'API는 프로그램끼리 대화하는 방법이에요. 한 프로그램이 다른 프로그램에게 "이 정보 좀 줘!"라고 요청하면, 정해진 형식으로 데이터를 보내줘요.'
            },
            {
              title: 'API의 예시',
              description: '날씨 앱은 기상청 API로 날씨 정보를, 지도 앱은 구글 맵 API로 위치 정보를, 유튜브는 영상 API로 동영상 정보를 가져와요.'
            },
            {
              title: '왜 API를 사용할까?',
              description: '모든 데이터를 직접 만들 필요가 없어요! 다른 회사가 제공하는 API를 사용하면 빠르고 쉽게 멋진 기능을 추가할 수 있어요.'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "API 소개 이해하기",
                              "description": "나만의 퀴즈 앱에서 배운 API 소개의 핵심을 확인합니다.",
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
          id: 'w46-m2',
          title: 'fetch로 데이터 가져오기',
          description: 'JavaScript fetch API를 배워요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: 'fetch API',
          conceptExplanation: 'fetch(url).then(res => res.json()).then(data => {...})로 데이터를 가져와요!',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            'fetch API를 사용하여 외부 데이터를 요청할 수 있다',
            'Promise와 then을 사용하여 비동기 데이터를 처리할 수 있다',
            'catch를 사용하여 에러를 적절히 처리할 수 있다'
          ],
          realWorldExample: '친구에게 메시지를 보내고 답장을 기다리는 것과 같아요! fetch로 서버에 "데이터 주세요"라고 요청하면, 서버가 답장(데이터)을 보내줄 때까지 기다렸다가 받아요.',
          starterCode: '// fetch로 데이터를 가져오세요\nconst url = "https://api.example.com/data";\n',
          solution: 'const url = "https://api.example.com/data";\n\nfetch(url)\n  .then(response => response.json())\n  .then(data => {\n    console.log(data);\n  })\n  .catch(error => {\n    console.log("에러:", error);\n  });',
          hints: [
            '💡 힌트 1: fetch(url)로 데이터를 요청해요',
            '💡 힌트 2: .then(response => response.json())으로 응답을 JSON으로 변환해요',
            '💡 힌트 3: .catch(error => {...})로 에러가 나면 처리해요'
          ],
          commonMistakes: [
            'response.json()을 호출하지 않고 바로 데이터를 사용하려는 경우',
            'catch를 빠뜨려서 네트워크 에러 시 프로그램이 멈추는 경우',
            'then 체인을 잘못 연결해서 데이터를 받지 못하는 경우'
          ],
          testCases: [
            {
              input: 'fetch API 호출',
              expectedOutput: '데이터를 받아서 console.log로 출력',
              description: 'fetch가 정상적으로 데이터를 가져오는지 확인'
            },
            {
              input: '잘못된 URL',
              expectedOutput: 'catch 블록에서 에러 처리',
              description: '에러 발생 시 적절히 처리되는지 확인'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "fetch API의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# fetch API 기본 연습\n",
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
          id: 'w46-m3',
          title: 'async/await 사용하기',
          description: '더 깔끔한 비동기 코드를 작성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: 'async/await',
          conceptExplanation: 'async function과 await를 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있어요!',
          starterCode: '// async/await로 데이터를 가져오세요\n',
          solution: 'async function fetchData() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.log("에러:", error);\n  }\n}\n\nfetchData();',
          hints: ['await는 async 함수 안에서만 사용해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "async/await의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# async/await 기본 연습\n",
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
          id: 'w46-m4',
          title: '날씨 앱 UI 만들기',
          description: '날씨 정보를 표시할 화면을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'UI 구성',
          starterCode: '<!-- 날씨 앱 UI를 만드세요 -->',
          solution: '<div id="weather-app">\n  <h1>날씨 정보</h1>\n  <div class="search-box">\n    <input type="text" id="city-input" placeholder="도시 이름 입력">\n    <button id="search-btn">검색</button>\n  </div>\n  <div id="weather-info">\n    <h2 id="city-name">--</h2>\n    <p id="temperature">--°C</p>\n    <p id="description">--</p>\n    <p id="humidity">습도: --%</p>\n  </div>\n</div>',
          hints: ['입력 폼과 결과 표시 영역을 구분해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "UI 구성의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# UI 구성 기본 연습\n",
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
          id: 'w46-m5',
          title: '날씨 데이터 가져오기',
          description: 'OpenWeatherMap API로 날씨를 가져와요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 25,
          concept: '날씨 API',
          phase: 'create',
          isKeyMission: true,
          starterCode: 'const API_KEY = "your_api_key";\n\nasync function getWeather(city) {\n  // 날씨 API를 호출하세요\n}',
          solution: 'const API_KEY = "your_api_key";\n\nasync function getWeather(city) {\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;\n  \n  try {\n    const response = await fetch(url);\n    if (!response.ok) throw new Error("도시를 찾을 수 없습니다");\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log("에러:", error);\n    return null;\n  }\n}',
          hints: ['템플릿 리터럴로 URL을 만들어요', 'units=metric은 섭씨 온도'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "날씨 API의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 날씨 API 기본 연습\n",
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
          id: 'w46-m6',
          title: '날씨 정보 표시하기',
          description: 'API 응답을 화면에 표시해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 20,
          concept: 'UI 업데이트',
          starterCode: 'function displayWeather(data) {\n  // 날씨 정보를 화면에 표시\n}',
          solution: 'function displayWeather(data) {\n  document.getElementById("city-name").textContent = data.name;\n  document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;\n  document.getElementById("description").textContent = data.weather[0].description;\n  document.getElementById("humidity").textContent = `습도: ${data.main.humidity}%`;\n}',
          hints: ['API 응답 구조를 확인하고 필요한 값을 추출해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "UI 업데이트의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# UI 업데이트 기본 연습\n",
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
          id: 'w46-m7',
          title: '검색 기능 연결',
          description: '버튼 클릭 시 검색 기능을 연결해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 15,
          concept: '이벤트 연결',
          starterCode: '// 검색 버튼에 이벤트를 연결하세요',
          solution: 'document.getElementById("search-btn").addEventListener("click", async () => {\n  const city = document.getElementById("city-input").value;\n  if (!city) return;\n  \n  const weatherData = await getWeather(city);\n  if (weatherData) {\n    displayWeather(weatherData);\n  }\n});\n\n// Enter 키로도 검색\ndocument.getElementById("city-input").addEventListener("keypress", (e) => {\n  if (e.key === "Enter") {\n    document.getElementById("search-btn").click();\n  }\n});',
          hints: ['버튼 클릭과 Enter 키 둘 다 처리해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "이벤트 연결의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 이벤트 연결 기본 연습\n",
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
          id: 'w46-m8',
          title: '에러 처리',
          description: '도시를 찾을 수 없을 때 메시지를 표시해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '에러 처리',
          hints: ['사용자에게 친절한 에러 메시지를 보여주세요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "에러 처리의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 에러 처리 기본 연습\n",
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
          id: 'w46-m9',
          title: '스타일 완성',
          description: 'CSS로 날씨 앱을 예쁘게 꾸며요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'CSS 마무리',
          hints: ['날씨에 맞는 색상과 아이콘을 사용해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "CSS 마무리의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# CSS 마무리 기본 연습\n",
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
          id: 'w46-m10',
          title: 'API 활용 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
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
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w46',
        title: 'API 활용 퀴즈',
        questions: [
          {
            id: 'q1',
            question: 'API는 무엇의 약자인가요?',
            options: ['Application Programming Interface', 'Advanced Program Integration', 'Auto Processing Input', 'Application Process Integration'],
            correctAnswer: 0,
            explanation: 'API는 Application Programming Interface의 약자예요'
          },
          {
            id: 'q2',
            question: 'fetch의 응답을 JSON으로 변환하는 메서드는?',
            options: ['.toJSON()', '.json()', '.parse()', '.convert()'],
            correctAnswer: 1,
            explanation: 'response.json()으로 JSON 변환해요'
          }
        ]
      },
      project: {
        id: 'project-w46',
        title: '실시간 날씨 앱',
        description: 'OpenWeatherMap API를 활용하여 실시간 날씨 정보를 보여주는 앱을 만드세요.',
        difficulty: 'intermediate',
        duration: '3-4시간',
        requirements: ['도시 검색 기능', 'API 데이터 표시', '에러 처리', '반응형 디자인'],
        tech: ['HTML', 'CSS', 'JavaScript', 'API'],
        exp: 100,
        badge: 'API 마스터'
      }
    },
    // Week 47: 그림판 앱 프로젝트
    {
      id: 'week-47',
      number: 47,
      title: '그림판 앱 만들기',
      description: 'Canvas를 사용한 그림판 앱을 만들어요',
      missions: [
        {
          id: 'w47-m1',
          title: 'Canvas 소개',
          description: 'HTML Canvas 요소를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 25,
          estimatedMinutes: 12,
          concept: 'Canvas 소개',
          conceptExplanation: '<canvas>는 JavaScript로 그림을 그릴 수 있는 HTML 요소예요!',
          hints: ['게임, 차트, 그림판 등에 사용돼요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Canvas 소개 이해하기",
                              "description": "API 활용 퀴즈에서 배운 Canvas 소개의 핵심을 확인합니다.",
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
          id: 'w47-m2',
          title: 'Canvas 기본 설정',
          description: 'Canvas와 컨텍스트를 설정해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: 'Canvas 설정',
          starterCode: '<!-- Canvas를 설정하세요 -->',
          solution: '<canvas id="canvas" width="800" height="600"></canvas>\n<script>\n  const canvas = document.getElementById("canvas");\n  const ctx = canvas.getContext("2d");\n  \n  // 배경 흰색으로\n  ctx.fillStyle = "white";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n</script>',
          hints: ['getContext("2d")로 2D 그리기 컨텍스트를 가져와요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "Canvas 설정의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# Canvas 설정 기본 연습\n",
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
          id: 'w47-m3',
          title: '마우스 이벤트',
          description: '마우스로 그리기 위한 이벤트를 설정해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '마우스 이벤트',
          starterCode: 'let isDrawing = false;\n\n// 마우스 이벤트를 설정하세요',
          solution: 'let isDrawing = false;\nlet lastX = 0;\nlet lastY = 0;\n\ncanvas.addEventListener("mousedown", (e) => {\n  isDrawing = true;\n  lastX = e.offsetX;\n  lastY = e.offsetY;\n});\n\ncanvas.addEventListener("mousemove", (e) => {\n  if (!isDrawing) return;\n  draw(e.offsetX, e.offsetY);\n});\n\ncanvas.addEventListener("mouseup", () => isDrawing = false);\ncanvas.addEventListener("mouseout", () => isDrawing = false);',
          hints: ['mousedown으로 시작, mousemove로 그리기, mouseup으로 종료'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "마우스 이벤트의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 마우스 이벤트 기본 연습\n",
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
          id: 'w47-m4',
          title: '선 그리기',
          description: 'Canvas에 선을 그려요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '선 그리기',
          starterCode: 'function draw(x, y) {\n  // 선을 그리세요\n}',
          solution: 'function draw(x, y) {\n  ctx.beginPath();\n  ctx.moveTo(lastX, lastY);\n  ctx.lineTo(x, y);\n  ctx.stroke();\n  \n  lastX = x;\n  lastY = y;\n}',
          hints: ['moveTo로 시작점, lineTo로 끝점, stroke로 그리기'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "선 그리기의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 선 그리기 기본 연습\n",
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
          id: 'w47-m5',
          title: '색상 선택',
          description: '그리기 색상을 변경하는 기능을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '색상 변경',
          starterCode: '// 색상 선택 기능을 만드세요',
          solution: 'const colors = ["black", "red", "blue", "green", "yellow", "orange", "purple"];\n\ncolors.forEach(color => {\n  const btn = document.createElement("button");\n  btn.style.backgroundColor = color;\n  btn.style.width = "30px";\n  btn.style.height = "30px";\n  btn.addEventListener("click", () => {\n    ctx.strokeStyle = color;\n  });\n  document.getElementById("colors").appendChild(btn);\n});',
          hints: ['ctx.strokeStyle로 선 색상을 바꿔요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "색상 변경의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 색상 변경 기본 연습\n",
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
          id: 'w47-m6',
          title: '브러시 크기',
          description: '선 굵기를 조절하는 기능을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 12,
          concept: '선 굵기',
          starterCode: '// 브러시 크기 조절 기능',
          solution: 'const sizeSlider = document.getElementById("brush-size");\nsizeSlider.addEventListener("input", (e) => {\n  ctx.lineWidth = e.target.value;\n});\n\n// 초기 설정\nctx.lineWidth = 5;\nctx.lineCap = "round";\nctx.lineJoin = "round";',
          hints: ['ctx.lineWidth로 선 굵기를 바꿔요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "선 굵기의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 선 굵기 기본 연습\n",
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
          id: 'w47-m7',
          title: '지우개 기능',
          description: '그림을 지우는 기능을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '지우개',
          starterCode: '// 지우개 기능을 만드세요',
          solution: 'let isEraser = false;\n\ndocument.getElementById("eraser-btn").addEventListener("click", () => {\n  isEraser = true;\n  ctx.strokeStyle = "white";\n  ctx.lineWidth = 20;\n});\n\ndocument.getElementById("pen-btn").addEventListener("click", () => {\n  isEraser = false;\n  ctx.strokeStyle = "black";\n  ctx.lineWidth = 5;\n});',
          hints: ['흰색으로 그리면 지우개 효과예요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "지우개의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 지우개 기본 연습\n",
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
          id: 'w47-m8',
          title: '전체 지우기',
          description: 'Canvas 전체를 지우는 기능을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 20,
          estimatedMinutes: 10,
          concept: '캔버스 클리어',
          solution: 'document.getElementById("clear-btn").addEventListener("click", () => {\n  ctx.fillStyle = "white";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n});',
          hints: ['fillRect로 전체를 흰색으로 채워요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "캔버스 클리어의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 캔버스 클리어 기본 연습\n",
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
          id: 'w47-m9',
          title: '그림 저장',
          description: '그린 그림을 이미지로 저장해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 15,
          concept: '이미지 저장',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          solution: 'document.getElementById("save-btn").addEventListener("click", () => {\n  const link = document.createElement("a");\n  link.download = "my-drawing.png";\n  link.href = canvas.toDataURL();\n  link.click();\n});',
          hints: ['toDataURL()로 캔버스를 이미지 URL로 변환해요'],
          projectCheckpoints: [
            {
              id: 'w47-m9-cp1',
              title: 'Canvas 설정',
              description: 'Canvas 요소가 올바르게 설정됐나요?',
              criteria: ['canvas 요소 존재', 'getContext("2d") 호출', '적절한 크기 설정'],
              points: 15
            },
            {
              id: 'w47-m9-cp2',
              title: '그리기 기능',
              description: '마우스로 그림을 그릴 수 있나요?',
              criteria: ['mousedown, mousemove, mouseup 이벤트', 'beginPath, lineTo, stroke 사용', '부드러운 선 그리기'],
              points: 25
            },
            {
              id: 'w47-m9-cp3',
              title: '색상 변경',
              description: '다양한 색상으로 그릴 수 있나요?',
              criteria: ['색상 선택 UI', 'strokeStyle 변경', '최소 5가지 색상'],
              points: 15
            },
            {
              id: 'w47-m9-cp4',
              title: '브러시/지우개',
              description: '브러시 크기와 지우개가 작동하나요?',
              criteria: ['lineWidth 조절', '지우개 모드 전환', '전체 지우기 버튼'],
              points: 20
            },
            {
              id: 'w47-m9-cp5',
              title: '이미지 저장',
              description: '그림을 이미지 파일로 다운로드할 수 있나요?',
              criteria: ['toDataURL() 사용', 'a태그 download 속성', 'PNG 형식 저장'],
              points: 15
            },
            {
              id: 'w47-m9-cp6',
              title: 'UI 완성도',
              description: '사용하기 편하게 디자인됐나요?',
              criteria: ['도구 버튼 배치', '색상 팔레트 UI', '직관적인 사용 경험'],
              points: 10
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "이미지 저장의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 이미지 저장 기본 연습\n",
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
          id: 'w47-m10',
          title: 'Canvas 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 10,
          concept: '주간 복습',
          hints: [],
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
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w47',
        title: '나만의 그림판',
        description: '다양한 기능이 있는 그림판 앱을 완성하세요.',
        difficulty: 'intermediate',
        duration: '3-4시간',
        requirements: ['펜 그리기', '색상 선택', '브러시 크기 조절', '지우개', '전체 지우기', '저장 기능'],
        tech: ['HTML Canvas', 'CSS', 'JavaScript'],
        exp: 100,
        badge: '아티스트'
      }
    },
    // Week 48: 종합 프로젝트
    {
      id: 'week-48',
      number: 48,
      title: '나만의 웹 앱',
      description: '자신만의 아이디어로 웹 앱을 만들어요',
      missions: [
        {
          id: 'w48-m1',
          title: '아이디어 구상',
          description: '어떤 앱을 만들지 계획해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 30,
          estimatedMinutes: 20,
          concept: '프로젝트 기획',
          conceptExplanation: '좋은 아이디어는 문제 해결에서 나와요. 무엇을 만들고 싶은지, 누가 사용할지 생각해봐요!',
          hints: ['게임, 도구, 정보 앱 등 다양한 가능성이 있어요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "프로젝트 기획 이해하기",
                              "description": "나만의 그림판에서 배운 프로젝트 기획의 핵심을 확인합니다.",
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
          id: 'w48-m2',
          title: '기능 정의',
          description: '앱에 필요한 기능을 정리해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 25,
          estimatedMinutes: 15,
          concept: '기능 설계',
          hints: ['꼭 필요한 기능과 있으면 좋은 기능을 구분해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기능 설계 이해하기",
                              "description": "기능 정의에서 배운 기능 설계의 핵심을 확인합니다.",
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
          id: 'w48-m3',
          title: 'HTML 구조 작성',
          description: '앱의 HTML 구조를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 40,
          estimatedMinutes: 25,
          concept: 'HTML 구조화',
          phase: 'create',
          isKeyMission: true,
          hints: ['시맨틱 태그를 사용해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "HTML 구조화의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# HTML 구조화 기본 연습\n",
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
          id: 'w48-m4',
          title: 'CSS 스타일링',
          description: '앱을 예쁘게 디자인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 40,
          estimatedMinutes: 25,
          concept: 'CSS 디자인',
          phase: 'create',
          isKeyMission: true,
          hints: ['일관된 색상 테마를 사용해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "CSS 디자인의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# CSS 디자인 기본 연습\n",
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
          id: 'w48-m5',
          title: 'JavaScript 기능 1',
          description: '핵심 기능을 구현해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 30,
          concept: 'JS 핵심 기능',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          hints: ['가장 중요한 기능부터 만들어요'],
          projectCheckpoints: [
            {
              id: 'w48-m5-cp1',
              title: '아이디어 선정',
              description: '나만의 웹 앱 아이디어를 정했나요?',
              criteria: ['명확한 목적 정의', '대상 사용자 설정', '기능 목록 작성'],
              points: 10
            },
            {
              id: 'w48-m5-cp2',
              title: 'HTML 구조',
              description: '의미있는 HTML 구조를 작성했나요?',
              criteria: ['시맨틱 태그 사용', '접근성 고려', '논리적 구조'],
              points: 15
            },
            {
              id: 'w48-m5-cp3',
              title: 'CSS 디자인',
              description: '일관된 디자인을 적용했나요?',
              criteria: ['색상 팔레트 통일', '반응형 레이아웃', '사용자 친화적 UI'],
              points: 15
            },
            {
              id: 'w48-m5-cp4',
              title: '핵심 JavaScript 기능',
              description: '앱의 핵심 기능이 작동하나요?',
              criteria: ['메인 기능 구현', '이벤트 처리', 'DOM 조작'],
              points: 25
            },
            {
              id: 'w48-m5-cp5',
              title: '추가 기능',
              description: '사용자 경험을 개선하는 기능이 있나요?',
              criteria: ['보조 기능 1개 이상', '에러 처리', '피드백 제공'],
              points: 15
            },
            {
              id: 'w48-m5-cp6',
              title: '테스트 및 완성도',
              description: '앱이 오류 없이 작동하나요?',
              criteria: ['모든 기능 테스트', '버그 수정 완료', '배포 가능 상태'],
              points: 20
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "JS 핵심 기능의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# JS 핵심 기능 기본 연습\n",
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
          id: 'w48-m6',
          title: 'JavaScript 기능 2',
          description: '추가 기능을 구현해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 30,
          concept: 'JS 추가 기능',
          phase: 'create',
          isKeyMission: true,
          hints: ['사용자 경험을 개선하는 기능을 추가해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "JS 추가 기능의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# JS 추가 기능 기본 연습\n",
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
          id: 'w48-m7',
          title: '테스트 및 디버깅',
          description: '버그를 찾고 수정해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 20,
          concept: '디버깅',
          hints: ['console.log로 값을 확인해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "디버깅의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 디버깅 기본 연습\n",
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
          id: 'w48-m8',
          title: '마무리 및 개선',
          description: '세부 사항을 다듬어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 35,
          estimatedMinutes: 20,
          concept: '마무리',
          hints: ['작은 디테일이 완성도를 높여요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "마무리의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 마무리 기본 연습\n",
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
          id: 'w48-m9',
          title: '프로젝트 발표 준비',
          description: '프로젝트를 소개하는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 25,
          estimatedMinutes: 15,
          concept: '발표 준비',
          hints: ['무엇을, 왜, 어떻게 만들었는지 설명해요'],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "발표 준비 이해하기",
                              "description": "프로젝트 발표 준비에서 배운 발표 준비의 핵심을 확인합니다.",
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
          id: 'w48-m10',
          title: '웹 프로젝트 종합 퀴즈',
          description: '유닛 전체 복습',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 15,
          concept: '유닛 복습',
          hints: [],
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
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w48',
        title: '나만의 웹 앱',
        description: '자신의 아이디어로 완전한 웹 애플리케이션을 만드세요.',
        difficulty: 'advanced',
        duration: '5-6시간',
        requirements: ['독창적인 아이디어', 'HTML 구조화', 'CSS 스타일링', 'JavaScript 기능', '사용자 친화적 UI'],
        tech: ['HTML', 'CSS', 'JavaScript'],
        exp: 150,
        badge: '웹 개발자'
      }
    }
  ]
};

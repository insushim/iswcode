import type { Unit } from '../../types';

// Unit 3: Python 기초 (17-24주차)
// CSTA 표준: 1B-AP-08, 1B-AP-09, 1B-AP-10, 1B-AP-11, 1B-AP-12, 1B-AP-15
// 블록 코딩에서 텍스트 코딩으로의 자연스러운 전환

export const unit3: Unit = {
  id: 'unit-3',
  number: 3,
  title: 'Python 첫걸음',
  description: '블록에서 텍스트로! 세계에서 가장 인기 있는 프로그래밍 언어를 배워요',
  icon: '🐍',
  color: '#3776ab',
  unlockLevel: 15,
  totalMissions: 80,
  estimatedHours: 32,
  weeks: [
    // Week 17: Python 환경과 첫 출력
    {
      id: 'week-17',
      number: 17,
      title: 'Python과의 첫 만남',
      description: '블록 코딩의 개념을 Python 텍스트로 표현해요',
      missions: [
        {
          id: '3-17-1',
          title: '블록에서 텍스트로',
          description: '블록 코딩과 텍스트 코딩의 관계를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: '블록 → 텍스트 전환 개념 이해',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            '블록 코딩과 텍스트 코딩의 관계를 이해한다',
            'Python이 어떤 언어인지 알 수 있다',
            '텍스트 코딩의 장점을 설명할 수 있다'
          ],
          realWorldExample: '블록 코딩이 레고라면, 텍스트 코딩은 설계도를 직접 그리는 것과 같아요. 더 자유롭고 강력해요!',
          conceptCards: [
            {
              title: '블록 → 텍스트',
              description: '블록을 쌓는 것 = 코드를 줄마다 쓰는 것',
              icon: '🧱→📝',
              example: '"말하기" 블록 = print()'
            },
            {
              title: 'Python이란?',
              description: '세계에서 가장 인기 있는 프로그래밍 언어',
              icon: '🐍',
              example: 'AI, 게임, 웹 등 모든 곳에 사용!'
            }
          ],
          hints: [
            '💡 힌트 1: 블록 코딩에서 배운 "말하기" 블록은 Python의 print()와 같아요',
            '💡 힌트 2: 블록을 쌓는 것 = 코드를 줄마다 쓰는 것',
            '💡 힌트 3: 색깔 블록 → 키워드(예약어)로 바뀌어요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Python 첫걸음에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-17-2',
          title: '첫 번째 코드: print()',
          description: 'Python으로 "안녕하세요!"를 화면에 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: 'print() 함수의 기본 사용법',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'print() 함수의 기본 사용법을 익힌다',
            '문자열을 따옴표로 감싸야 함을 이해한다'
          ],
          realWorldExample: '카카오톡에서 메시지를 보내면 상대방 화면에 나타나는 것처럼, print()는 결과를 화면에 보여줘요!',
          starterCode: '# 블록 코딩의 "말하기" 블록을 Python으로!\n# 아래에 print() 함수를 작성해보세요\n\n',
          solution: "print('안녕하세요!')",
          expectedOutput: '안녕하세요!',
          hints: [
            '💡 힌트 1: print()는 화면에 글자를 보여주는 함수예요',
            "💡 힌트 2: 글자는 따옴표(' 또는 \")로 감싸야 해요",
            "💡 힌트 3: print('안녕하세요!') 형식으로 작성해요"
          ],
          commonMistakes: [
            '따옴표를 빼먹는 경우',
            '괄호를 닫지 않는 경우',
            'Print(대문자)로 쓰는 경우 - Python은 대소문자를 구분해요!'
          ],
          testCases: [
            { input: '', expectedOutput: '안녕하세요!', description: '기본 출력', errorHint: 'print() 함수를 사용했나요?' },
            { input: '', expectedOutput: '안녕하세요!', description: '따옴표 확인', isHidden: true },
          ],
          // 추가 연습문제 (5개)
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
          id: '3-17-3',
          title: 'print() 연습 1: 이름 출력',
          description: '자신의 이름을 출력해보세요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: 'print() 반복 연습',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'print() 함수 사용법을 반복 연습한다',
            '문자열을 직접 작성할 수 있다'
          ],
          realWorldExample: '게임에서 캐릭터 이름을 입력하면 화면에 표시되는 것처럼, 우리도 이름을 출력할 수 있어요!',
          starterCode: '# 여러분의 이름을 출력해보세요\n# 예: print("홍길동")\n\n',
          solution: 'print("코딩왕")',
          expectedOutput: '코딩왕',
          testCases: [
            { input: '', expectedOutput: '코딩왕', description: '이름 출력', errorHint: 'print("이름")을 사용했나요?' }
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
          hints: [
            '💡 힌트 1: print() 괄호 안에 이름을 넣어요',
            '💡 힌트 2: 이름은 따옴표로 감싸야 해요 (작은따옴표 \' 또는 큰따옴표 ")',
            '💡 힌트 3: print("홍길동") 형식으로 작성하면 돼요!'
          ],
          commonMistakes: [
            '따옴표를 빼먹는 경우 - print(홍길동) ❌',
            '괄호를 빼먹는 경우 - print "홍길동" ❌',
            '한글 자음/모음이 아닌 한글 전체를 입력해야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-4',
          title: 'print() 연습 2: 음식 출력',
          description: '좋아하는 음식을 출력해보세요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: 'print() 반복 연습',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'print() 함수를 자유롭게 활용할 수 있다',
            '다양한 문자열을 출력할 수 있다'
          ],
          realWorldExample: '배달 앱에서 음식 이름이 화면에 보이는 것처럼, 우리도 원하는 음식을 출력할 수 있어요!',
          starterCode: '# 좋아하는 음식을 출력해보세요\n# 예: print("피자")\n\n',
          solution: 'print("치킨")',
          expectedOutput: '치킨',
          testCases: [
            { input: '', expectedOutput: '치킨', description: '음식 출력', errorHint: '좋아하는 음식을 따옴표 안에 넣었나요?' }
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
          hints: [
            '💡 힌트 1: 좋아하는 음식 이름을 생각해봐요',
            '💡 힌트 2: print("음식이름") 형식으로 작성해요',
            '💡 힌트 3: 예를 들어 print("피자"), print("치킨") 등!'
          ],
          commonMistakes: [
            '영어 음식 이름을 쓸 때 대소문자 주의',
            '따옴표 짝이 맞지 않는 경우 - print("피자\') ❌'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-5',
          title: '여러 줄 출력하기',
          description: 'print()를 여러 번 사용해서 3줄을 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '여러 print() 문 사용 - 순차 실행',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            '여러 개의 print() 문을 순서대로 사용할 수 있다',
            '코드가 위에서 아래로 순차적으로 실행됨을 이해한다'
          ],
          realWorldExample: '카카오톡에서 메시지를 여러 개 보내면 순서대로 채팅창에 나타나듯이, print()도 순서대로 실행돼요!',
          starterCode: '# 3줄을 출력하세요\n# 1. 이름\n# 2. 나이\n# 3. 취미\n\n',
          solution: 'print("코딩왕")\nprint("12살")\nprint("게임")',
          expectedOutput: '코딩왕\n12살\n게임',
          testCases: [
            { input: '', expectedOutput: '코딩왕\n12살\n게임', description: '3줄 출력 확인' }
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
          hints: [
            '💡 힌트 1: print()를 3번 사용하면 3줄이 출력돼요',
            '💡 힌트 2: 각 print()는 자동으로 새 줄에 출력해요',
            '💡 힌트 3: print("이름")\\nprint("나이")\\nprint("취미") 형식이에요!'
          ],
          commonMistakes: [
            '하나의 print()에 모든 내용을 넣으려는 경우',
            'print() 사이에 세미콜론(;)을 넣는 경우 - Python에서는 필요 없어요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-6',
          title: '숫자 출력하기',
          description: '숫자는 따옴표 없이 출력할 수 있어요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '숫자와 문자열의 차이',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            '숫자(정수)와 문자열의 차이를 이해한다',
            '따옴표 사용 여부에 따른 데이터 타입 구분'
          ],
          realWorldExample: '계산기에서 숫자를 입력할 때는 숫자 그대로, 이름을 입력할 때는 문자로 인식하는 것과 같아요.',
          starterCode: '# 숫자 2024를 출력하세요\n# 힌트: 숫자는 따옴표 없이!\n\n',
          solution: 'print(2024)',
          expectedOutput: '2024',
          testCases: [
            { input: '', expectedOutput: '2024', description: '숫자 출력 테스트' }
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
          hints: [
            '💡 힌트 1: 숫자는 따옴표 없이 그대로 쓰면 돼요',
            '💡 힌트 2: print(2024)와 print("2024")는 다른 의미예요',
            '💡 힌트 3: 첫 번째는 숫자, 두 번째는 글자(문자열)예요',
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-7',
          title: '간단한 계산',
          description: 'Python으로 3 + 5의 결과를 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: 'print() 안에서 계산하기',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'print() 안에서 수식을 계산할 수 있다',
            '덧셈 연산자(+)를 사용할 수 있다'
          ],
          realWorldExample: '계산기에서 3+5=를 누르면 8이 나오듯이, Python도 계산해서 결과를 보여줘요!',
          starterCode: '# 3 + 5의 결과를 출력하세요\n# 숫자는 따옴표 없이!\n\n',
          solution: 'print(3 + 5)',
          expectedOutput: '8',
          testCases: [
            { input: '', expectedOutput: '8', description: '3+5 덧셈 결과' },
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
          hints: [
            '💡 힌트 1: print() 안에 계산식을 넣을 수 있어요',
            '💡 힌트 2: 숫자와 +는 따옴표 없이 그대로 써요',
            '💡 힌트 3: print(3 + 5) 라고 작성하면 8이 출력돼요!'
          ],
          commonMistakes: [
            'print("3 + 5")로 쓰면 계산 없이 "3 + 5"가 그대로 출력돼요',
            '따옴표 안에 넣으면 문자열로 인식해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-8',
          title: '다양한 계산: 사칙연산',
          description: '덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '사칙연산 기호 (+, -, *, /)',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            '사칙연산 기호를 Python에서 사용할 수 있다',
            '곱셈(*)과 나눗셈(/) 기호가 수학과 다름을 안다'
          ],
          realWorldExample: '계산기 앱에서 ×, ÷ 버튼 대신 *, /를 사용하는 것과 같아요!',
          starterCode: '# 10 + 3 의 결과\n\n# 10 - 3 의 결과\n\n# 10 * 3 의 결과 (곱셈은 *)\n\n# 10 / 2 의 결과 (나눗셈은 /)\n\n',
          solution: 'print(10 + 3)\nprint(10 - 3)\nprint(10 * 3)\nprint(10 / 2)',
          expectedOutput: '13\n7\n30\n5.0',
          testCases: [
            { input: '', expectedOutput: '13\n7\n30\n5.0', description: '사칙연산 4가지 결과' }
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
          hints: [
            '💡 힌트 1: 덧셈 +, 뺄셈 -, 곱셈 *, 나눗셈 / 를 사용해요',
            '💡 힌트 2: 각 계산마다 print()를 따로 사용해요',
            '💡 힌트 3: 나눗셈 결과는 5.0처럼 소수점이 나와요!'
          ],
          commonMistakes: [
            '곱셈에 × 또는 x를 쓰는 경우 - Python에서는 * 사용!',
            '나눗셈에 ÷를 쓰는 경우 - Python에서는 / 사용!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-9',
          title: '주석 달기',
          description: '# 기호로 코드 설명을 달아봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '주석(comment)의 사용',
          cstaStandard: '1B-AP-15',
          learningObjectives: [
            '주석의 역할과 사용법을 이해한다',
            '# 기호로 주석을 작성할 수 있다'
          ],
          realWorldExample: '책에 메모를 붙이는 것처럼, 코드에도 설명을 달 수 있어요! 나중에 보면 도움이 돼요.',
          starterCode: '# 이 줄은 주석이에요. 컴퓨터가 무시해요!\n\n# 아래에 자신만의 주석을 달고\n# 인사말을 출력하는 코드를 작성하세요\n\n',
          solution: '# 인사말 출력하기\nprint("안녕하세요!")',
          expectedOutput: '안녕하세요!',
          testCases: [
            { input: '', expectedOutput: '안녕하세요!', description: '주석과 함께 인사말 출력' }
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
          hints: [
            '💡 힌트 1: # 으로 시작하는 줄은 컴퓨터가 실행하지 않아요',
            '💡 힌트 2: 주석은 코드가 무엇을 하는지 설명해요',
            '💡 힌트 3: # 내 인사말\\nprint("안녕하세요!") 처럼 써보세요!'
          ],
          commonMistakes: [
            '주석 # 뒤에 바로 붙여 쓰는 것 - 띄어쓰기하면 읽기 좋아요',
            '주석에 한글을 못 쓴다고 생각하는 경우 - 한글도 OK!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-17-10',
          title: '주간 도전: 자기소개 프로그램',
          description: '5줄짜리 자기소개 프로그램을 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: 'print()와 주석 종합 활용',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            '여러 개의 print()를 조합해 프로그램을 만들 수 있다',
            '주석을 활용해 코드를 설명할 수 있다',
            'Week 17에서 배운 내용을 종합적으로 활용한다'
          ],
          realWorldExample: 'SNS 프로필처럼 나를 소개하는 프로그램을 만들어봐요! 첫 Python 프로젝트예요!',
          starterCode: '# 자기소개 프로그램\n# 5줄을 출력하세요: 이름, 나이, 학교, 취미, 꿈\n\n# 이름\n\n# 나이\n\n# 학교\n\n# 취미\n\n# 꿈\n\n',
          solution: '# 자기소개 프로그램\n# 이름\nprint("저는 코딩왕입니다")\n# 나이\nprint("12살이에요")\n# 학교\nprint("코딩초등학교 6학년")\n# 취미\nprint("취미는 게임과 코딩이에요")\n# 꿈\nprint("나중에 게임 개발자가 될 거예요!")',
          expectedOutput: '저는 코딩왕입니다\n12살이에요\n코딩초등학교 6학년\n취미는 게임과 코딩이에요\n나중에 게임 개발자가 될 거예요!',
          testCases: [
            { input: '', expectedOutput: '저는 코딩왕입니다\n12살이에요\n코딩초등학교 6학년\n취미는 게임과 코딩이에요\n나중에 게임 개발자가 될 거예요!', description: '5줄 자기소개 출력' }
          ],
          projectCheckpoints: [
            {
              id: '3-17-10-cp1',
              title: '기본 구조',
              description: 'print() 함수를 5번 사용했나요?',
              criteria: ['print() 5회 사용', '각 줄에 서로 다른 내용'],
              points: 20
            },
            {
              id: '3-17-10-cp2',
              title: '주석 사용',
              description: '각 print() 위에 주석을 달았나요?',
              criteria: ['# 주석 5개 이상', '각 항목 설명'],
              points: 20
            },
            {
              id: '3-17-10-cp3',
              title: '필수 정보',
              description: '이름, 나이, 학교, 취미, 꿈 정보가 포함됐나요?',
              criteria: ['5가지 정보 모두 포함', '실제 자신의 정보'],
              points: 20
            },
            {
              id: '3-17-10-cp4',
              title: '문법 정확성',
              description: '따옴표, 괄호가 올바르게 사용됐나요?',
              criteria: ['따옴표 짝 맞음', '괄호 짝 맞음', '오류 없이 실행'],
              points: 20
            },
            {
              id: '3-17-10-cp5',
              title: '창의성',
              description: '자신만의 개성이 담긴 내용인가요?',
              criteria: ['이모지 사용 (선택)', '재미있는 표현', '자신만의 스타일'],
              points: 20
            }
          ],
          hints: [
            '💡 힌트 1: print()를 5번 사용해서 5줄을 출력해요',
            '💡 힌트 2: 각 print() 위에 주석(#)으로 설명을 달아요',
            '💡 힌트 3: 자신의 정보를 따옴표 안에 넣으면 완성!'
          ],
          commonMistakes: [
            'print() 4번만 사용하는 경우 - 5개 모두 출력해요!',
            '주석에도 print()를 쓰는 경우 - 주석은 # 만 사용!'
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
        id: 'quiz-17',
        title: 'Week 17 퀴즈: Python 첫걸음',
        questions: [
          {
            id: 'q17-1',
            question: 'Python에서 화면에 글자를 출력하는 함수는?',
            options: ['show()', 'print()', 'display()', 'write()'],
            correctAnswer: 1,
            explanation: 'Python에서 화면에 출력하려면 print() 함수를 사용해요. 블록 코딩의 "말하기" 블록과 같은 역할이에요!'
          },
          {
            id: 'q17-2',
            question: '문자열을 감싸는 기호로 올바른 것은?',
            options: ['{ }', '( )', '" " 또는 \' \'', '[ ]'],
            correctAnswer: 2,
            explanation: '문자열(글자)은 큰따옴표(") 또는 작은따옴표(\')로 감싸야 해요. 둘 다 사용 가능합니다!'
          },
          {
            id: 'q17-3',
            question: 'Python에서 주석을 시작하는 기호는?',
            options: ['//', '#', '--', '/*'],
            correctAnswer: 1,
            explanation: '#으로 시작하는 줄은 주석이에요. 컴퓨터가 실행하지 않고 무시해요. 코드 설명에 사용해요!'
          },
          {
            id: 'q17-4',
            question: 'print(3 + 5)를 실행하면 무엇이 출력되나요?',
            options: ['3 + 5', '8', '35', '오류 발생'],
            correctAnswer: 1,
            explanation: 'print() 안에 계산식을 넣으면 계산 결과가 출력돼요. 3 + 5 = 8이 출력됩니다!'
          },
          {
            id: 'q17-5',
            question: 'print(2024)와 print("2024")의 차이는?',
            options: ['차이 없음', '첫 번째는 숫자, 두 번째는 문자열', '첫 번째는 오류', '두 번째는 오류'],
            correctAnswer: 1,
            explanation: '따옴표 없이 쓰면 숫자(계산 가능), 따옴표로 감싸면 문자열(글자)로 인식해요!'
          }
        ],
      },
    },

    // Week 18: 변수 - 데이터를 담는 상자
    {
      id: 'week-18',
      number: 18,
      title: '변수: 데이터를 담는 상자',
      description: '블록 코딩의 변수 개념을 Python으로 구현해요',
      missions: [
        {
          id: '3-18-1',
          title: '변수란 무엇일까?',
          description: '블록 코딩에서 배운 변수를 Python으로 표현해봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: '변수의 개념과 역할',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '변수가 데이터를 저장하는 공간임을 이해한다',
            '블록 코딩의 변수와 Python 변수의 연관성을 안다'
          ],
          realWorldExample: '서랍에 이름표를 붙여 물건을 정리하듯, 변수는 데이터에 이름을 붙여 저장해요!',
          conceptCards: [
            {
              title: '변수 = 이름표 붙은 상자',
              description: '값을 넣고 꺼낼 수 있어요',
              icon: '📦',
              example: 'name = "코딩왕" → name 상자에 "코딩왕" 저장'
            },
            {
              title: '블록 → Python',
              description: '블록의 "변수 만들기" = Python의 변수 = 값',
              icon: '🔄',
              example: '[name ▾] 을(를) [코딩왕] (으)로 정하기 → name = "코딩왕"'
            }
          ],
          hints: [
            '💡 힌트 1: 변수는 값을 담는 이름표가 붙은 상자예요',
            '💡 힌트 2: 블록 코딩에서 "변수 만들기"와 같아요',
            '💡 힌트 3: 나중에 값을 바꿀 수도 있어요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Week 17 퀴즈: Python 첫걸음에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-18-2',
          title: '첫 변수 만들기',
          description: 'name이라는 변수에 자신의 이름을 저장해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '변수 선언과 할당',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '변수를 선언하고 값을 할당할 수 있다',
            '= 기호가 "같다"가 아닌 "저장하다"임을 이해한다'
          ],
          realWorldExample: '게임에서 닉네임을 저장하면 계속 쓸 수 있듯이, 변수에 저장하면 계속 사용할 수 있어요!',
          starterCode: '# name 변수에 이름을 저장하세요\nname = \n\n# 변수 출력\nprint(name)\n',
          solution: 'name = "코딩왕"\nprint(name)',
          expectedOutput: '코딩왕',
          testCases: [
            { input: '', expectedOutput: '코딩왕', description: '이름 변수 출력' }
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
          hints: [
            '💡 힌트 1: 변수이름 = 값 형식으로 작성해요',
            '💡 힌트 2: name = "홍길동" 처럼요',
            '💡 힌트 3: 문자열은 따옴표로 감싸야 해요'
          ],
          commonMistakes: [
            '= 를 == 로 쓰는 경우 (==는 비교할 때 사용해요)',
            '따옴표 없이 이름을 쓰는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-3',
          title: '숫자 변수',
          description: 'age 변수에 나이를 저장하고 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '정수형 변수',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '정수(int)형 변수를 만들 수 있다',
            '문자열과 숫자의 저장 방법 차이를 안다'
          ],
          realWorldExample: '게임 캐릭터의 레벨처럼, 숫자 정보도 변수에 저장할 수 있어요!',
          starterCode: '# age 변수에 나이를 저장하세요\nage = \n\n# 변수 출력\nprint(age)\n',
          solution: 'age = 12\nprint(age)',
          expectedOutput: '12',
          testCases: [
            { input: '', expectedOutput: '12', description: '나이 변수 출력' }
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
          hints: [
            '💡 힌트 1: 숫자는 따옴표 없이 저장해요',
            '💡 힌트 2: age = 12 처럼 바로 숫자를 써요',
            '💡 힌트 3: "12"는 문자열, 12는 숫자예요!'
          ],
          commonMistakes: [
            '숫자를 따옴표로 감싸는 경우 - 계산이 안 돼요!',
            'age = "12살" 처럼 단위를 붙이면 문자열이 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-4',
          title: '변수 이름 규칙',
          description: '올바른 변수 이름을 골라봐요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '변수 명명 규칙',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'Python 변수 이름 규칙을 이해한다',
            '올바른 변수 이름과 잘못된 변수 이름을 구분할 수 있다'
          ],
          realWorldExample: '파일 이름에 특수문자를 쓸 수 없는 것처럼, 변수 이름에도 규칙이 있어요!',
          checkQuestions: [
            {
              question: '다음 중 올바른 변수 이름은?',
              options: ['1st_name', 'my name', 'myName', '@age'],
              correctAnswer: 2,
              feedback: {
                correct: '맞아요! 변수 이름은 문자나 밑줄(_)로 시작하고, 띄어쓰기나 특수문자는 쓸 수 없어요.',
                incorrect: '변수 이름은 문자나 밑줄(_)로 시작해야 하고, 띄어쓰기나 @같은 특수문자는 쓸 수 없어요!'
              }
            }
          ],
          hints: [
            '💡 힌트 1: 변수 이름은 문자나 밑줄(_)로 시작해요',
            '💡 힌트 2: 숫자로 시작하면 안 돼요 (1st_name ❌)',
            '💡 힌트 3: 띄어쓰기 대신 밑줄(_) 또는 카멜케이스(myName)를 사용해요'
          ],
          commonMistakes: [
            '숫자로 시작하는 변수 이름 (1st, 2nd 등)',
            '띄어쓰기가 있는 변수 이름 (my name)',
            '특수문자가 있는 변수 이름 (@, #, $ 등)'
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
          id: '3-18-5',
          title: '변수로 계산하기',
          description: '두 숫자 변수를 더해서 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '변수를 이용한 연산',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '변수에 저장된 값으로 계산할 수 있다',
            '변수를 사용하면 값을 쉽게 바꿀 수 있음을 이해한다'
          ],
          realWorldExample: '쇼핑몰에서 물건 가격을 변수에 저장하고 합계를 계산하는 것과 같아요!',
          starterCode: '# 두 숫자를 변수에 저장하세요\na = 10\nb = 20\n\n# a와 b를 더한 결과를 출력하세요\nprint()\n',
          solution: 'a = 10\nb = 20\nprint(a + b)',
          expectedOutput: '30',
          testCases: [
            { input: '', expectedOutput: '30', description: '변수 덧셈' },
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
          hints: [
            '💡 힌트 1: print() 안에 a + b를 넣어요',
            '💡 힌트 2: 변수끼리 계산하면 저장된 값으로 계산해요',
            '💡 힌트 3: print(a + b)라고 작성하면 30이 출력돼요!'
          ],
          commonMistakes: [
            'print("a + b")로 쓰면 "a + b"가 그대로 출력돼요',
            '따옴표 없이 print(a + b)라고 써야 계산돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-6',
          title: '결과를 변수에 저장',
          description: '계산 결과를 새 변수에 저장해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '계산 결과 저장',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '계산 결과를 새 변수에 저장할 수 있다',
            '여러 단계의 계산을 수행할 수 있다'
          ],
          realWorldExample: '용돈 + 세뱃돈 = 총액 처럼, 계산 결과를 새 변수에 저장해두면 나중에 쓸 수 있어요!',
          starterCode: 'a = 15\nb = 25\n\n# a와 b를 더한 결과를 total 변수에 저장하세요\ntotal = \n\nprint(total)\n',
          solution: 'a = 15\nb = 25\ntotal = a + b\nprint(total)',
          expectedOutput: '40',
          testCases: [
            { input: '', expectedOutput: '40', description: '결과 저장' },
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
          hints: [
            '💡 힌트 1: total = 뒤에 a + b를 써요',
            '💡 힌트 2: 계산 결과(40)가 total에 저장돼요',
            '💡 힌트 3: total = a + b 라고 작성하면 돼요!'
          ],
          commonMistakes: [
            'total = "a + b"로 쓰면 문자열이 저장돼요',
            'print(total) 전에 total 변수가 있어야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-7',
          title: '변수 값 바꾸기',
          description: '변수의 값을 업데이트해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '변수 재할당',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '변수의 값을 업데이트(재할당)할 수 있다',
            '자기 자신을 활용한 계산을 이해한다'
          ],
          realWorldExample: '게임에서 점수가 올라갈 때마다 점수판이 업데이트되듯이, 변수 값도 바꿀 수 있어요!',
          starterCode: 'score = 0\nprint(score)  # 0 출력\n\n# score에 10을 더해서 다시 저장하세요\nscore = \n\nprint(score)  # 10 출력\n',
          solution: 'score = 0\nprint(score)\nscore = score + 10\nprint(score)',
          expectedOutput: '0\n10',
          testCases: [
            { input: '', expectedOutput: '0\n10', description: '변수 값 업데이트' }
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
          hints: [
            '💡 힌트 1: score = score + 10 처럼 작성해요',
            '💡 힌트 2: 오른쪽(score + 10)을 먼저 계산해요',
            '💡 힌트 3: 계산 결과(10)가 왼쪽 score에 저장돼요!'
          ],
          commonMistakes: [
            'score + 10만 쓰면 저장이 안 돼요 - score = score + 10',
            '수학에서 x = x + 10은 불가능하지만, 프로그래밍에서는 가능해요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-8',
          title: '문자열 연결하기',
          description: '문자열 변수를 + 로 연결해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '문자열 연결(concatenation)',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '문자열 연결(concatenation)을 이해한다',
            '+ 연산자가 문자열에서 다른 동작을 함을 안다'
          ],
          realWorldExample: '"안녕" + "하세요" = "안녕하세요" 처럼 문자열도 이어붙일 수 있어요!',
          starterCode: 'first_name = "김"\nlast_name = "코딩"\n\n# 두 이름을 연결해서 full_name에 저장하세요\nfull_name = \n\nprint(full_name)\n',
          solution: 'first_name = "김"\nlast_name = "코딩"\nfull_name = first_name + last_name\nprint(full_name)',
          expectedOutput: '김코딩',
          testCases: [
            { input: '', expectedOutput: '김코딩', description: '문자열 연결' },
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
          hints: [
            '💡 힌트 1: 문자열도 + 로 연결할 수 있어요',
            '💡 힌트 2: full_name = first_name + last_name',
            '💡 힌트 3: 숫자 + 는 덧셈, 문자열 + 는 이어붙이기!'
          ],
          commonMistakes: [
            '숫자와 문자열을 + 로 연결하면 에러 - 타입이 같아야 해요!',
            '문자열 사이에 공백이 필요하면 " " 를 추가해야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '3-18-9',
          title: '데이터 타입 알아보기',
          description: 'type() 함수로 데이터 종류를 확인해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '기본 데이터 타입',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '기본 데이터 타입(int, str, float)을 구분할 수 있다',
            'type() 함수로 데이터 타입을 확인할 수 있다'
          ],
          realWorldExample: '숫자, 글자, 소수점 숫자는 각각 다른 종류예요. 마치 물, 기름, 공기처럼요!',
          starterCode: 'number = 42\ntext = "Hello"\ndecimal = 3.14\n\n# 각 변수의 타입을 출력해보세요\nprint(type(number))\nprint(type(text))\nprint(type(decimal))\n',
          solution: 'number = 42\ntext = "Hello"\ndecimal = 3.14\nprint(type(number))\nprint(type(text))\nprint(type(decimal))',
          expectedOutput: "<class 'int'>\n<class 'str'>\n<class 'float'>",
          testCases: [
            { input: '', expectedOutput: "<class 'int'>\n<class 'str'>\n<class 'float'>", description: '데이터 타입 확인' }
          ],
          hints: [
            '💡 힌트 1: int = 정수(1, 2, 100 등)',
            '💡 힌트 2: str = 문자열("hello", "안녕" 등)',
            '💡 힌트 3: float = 소수(3.14, 2.5 등)'
          ],
          commonMistakes: [
            '"42"는 str(문자열)이고, 42는 int(정수)예요!',
            '따옴표 유무로 타입이 달라져요'
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
          id: '3-18-10',
          title: '주간 도전: 나의 프로필',
          description: '변수를 활용해 프로필 카드를 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '변수 종합 활용',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '다양한 타입의 변수를 함께 사용할 수 있다',
            '변수를 활용한 프로그램을 만들 수 있다',
            'Week 18에서 배운 내용을 종합적으로 활용한다'
          ],
          realWorldExample: 'SNS 프로필이나 게임 캐릭터 정보처럼, 변수에 저장된 정보를 보여주는 프로그램이에요!',
          starterCode: '# 나의 프로필\nname = ""\nage = 0\nschool = ""\nhobby = ""\n\n# 프로필 출력\nprint("===== 나의 프로필 =====")\nprint("이름: " + name)\nprint("나이: ")\nprint("학교: ")\nprint("취미: ")\nprint("=====================")\n',
          solution: '# 나의 프로필\nname = "코딩왕"\nage = 12\nschool = "코딩초등학교"\nhobby = "게임"\n\n# 프로필 출력\nprint("===== 나의 프로필 =====")\nprint("이름: " + name)\nprint("나이: " + str(age))\nprint("학교: " + school)\nprint("취미: " + hobby)\nprint("=====================")',
          expectedOutput: '===== 나의 프로필 =====\n이름: 코딩왕\n나이: 12\n학교: 코딩초등학교\n취미: 게임\n=====================',
          testCases: [
            { input: '', expectedOutput: '===== 나의 프로필 =====\n이름: 코딩왕\n나이: 12\n학교: 코딩초등학교\n취미: 게임\n=====================', description: '프로필 카드 출력' }
          ],
          hints: [
            '💡 힌트 1: 변수에 자신의 정보를 입력해요',
            '💡 힌트 2: print("이름: " + name)처럼 문자열과 변수를 연결해요',
            '💡 힌트 3: 숫자 변수는 str(age)로 문자열로 바꿔서 연결해요!'
          ],
          commonMistakes: [
            '숫자 변수를 문자열과 + 로 연결하면 에러 - str()로 변환해요!',
            '변수에 값을 넣지 않고 빈 상태로 두는 경우'
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
        id: 'quiz-18',
        title: 'Week 18 퀴즈: 변수 마스터',
        questions: [
          {
            id: 'q18-1',
            question: '변수에 값을 저장하는 기호는?',
            options: [':', '==', '=', '=>'],
            correctAnswer: 2,
            explanation: '= 기호는 "저장하다"의 의미예요. name = "코딩왕" 처럼 사용해요. ==는 비교할 때 쓰는 기호예요!'
          },
          {
            id: 'q18-2',
            question: '올바른 변수 이름이 아닌 것은?',
            options: ['my_name', '_age', '1st_place', 'userName'],
            correctAnswer: 2,
            explanation: '변수 이름은 숫자로 시작할 수 없어요! 1st_place (❌), first_place (✓). 문자나 밑줄(_)로 시작해야 해요.'
          },
          {
            id: 'q18-3',
            question: '정수를 나타내는 데이터 타입은?',
            options: ['str', 'float', 'int', 'bool'],
            correctAnswer: 2,
            explanation: 'int = 정수(1, 100), str = 문자열("안녕"), float = 소수(3.14), bool = 참/거짓(True, False)이에요!'
          },
          {
            id: 'q18-4',
            question: 'name = "김" + "코딩" 의 결과는?',
            options: ['김 코딩', '김코딩', '에러 발생', '김+코딩'],
            correctAnswer: 1,
            explanation: '문자열 + 문자열은 두 문자열을 이어붙여요! "김" + "코딩" = "김코딩"이 됩니다.'
          },
          {
            id: 'q18-5',
            question: 'score = 10, score = score + 5 실행 후 score의 값은?',
            options: ['10', '5', '15', '에러'],
            correctAnswer: 2,
            explanation: 'score = score + 5는 현재 score 값(10)에 5를 더해 다시 저장해요. 10 + 5 = 15!'
          }
        ],
      },
    },

    // Week 19: 입력과 출력
    {
      id: 'week-19',
      number: 19,
      title: '입력과 출력: 대화하는 프로그램',
      description: '사용자로부터 입력을 받아 처리하는 방법을 배워요',
      missions: [
        {
          id: '3-19-1',
          title: 'input() 함수 소개',
          description: '사용자에게 입력을 받는 방법을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: 'input() 함수 기본',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'input() 함수의 역할을 이해한다',
            '사용자 입력을 변수에 저장할 수 있다'
          ],
          realWorldExample: '카카오톡에서 메시지를 입력하고 보내기를 누르듯이, input()도 입력을 받아서 프로그램에 전달해요!',
          conceptCards: [
            {
              title: 'input() = 입력받기',
              description: '사용자가 키보드로 입력한 값을 받아요',
              icon: '⌨️',
              example: 'name = input("이름: ") → 사용자 입력을 name에 저장'
            },
            {
              title: '블록 → Python',
              description: '블록 코딩의 "묻고 기다리기" = Python의 input()',
              icon: '🔄',
              example: '"[이름을 입력하세요] 묻고 기다리기" → input("이름을 입력하세요")'
            }
          ],
          hints: [
            '💡 힌트 1: input()은 사용자가 키보드로 입력한 값을 받아요',
            '💡 힌트 2: 블록 코딩의 "묻고 기다리기"와 같아요',
            '💡 힌트 3: 입력받은 값은 변수에 저장해요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Week 18 퀴즈: 변수 마스터에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-19-2',
          title: '이름 입력받기',
          description: 'input()으로 이름을 입력받고 인사해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: 'input() 기본 사용',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'input() 함수로 사용자 입력을 받을 수 있다',
            '입력받은 값을 활용해 출력할 수 있다'
          ],
          realWorldExample: '게임 시작 시 닉네임을 입력받아 "○○○님 환영합니다!"라고 인사하는 것과 같아요!',
          starterCode: '# 이름을 입력받아 name 변수에 저장하세요\nname = input("이름을 입력하세요: ")\n\n# 인사 출력\nprint("안녕하세요, " + name + "님!")\n',
          solution: 'name = input("이름을 입력하세요: ")\nprint("안녕하세요, " + name + "님!")',
          hints: [
            '💡 힌트 1: input("메시지") 형식으로 사용해요',
            '💡 힌트 2: 괄호 안의 메시지가 먼저 출력돼요',
            '💡 힌트 3: 사용자가 입력한 값이 name 변수에 저장돼요'
          ],
          commonMistakes: [
            'input() 결과를 변수에 저장하지 않는 경우',
            '괄호 안 메시지에 따옴표를 빼먹는 경우'
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
          id: '3-19-3',
          title: '여러 개 입력받기',
          description: '이름과 나이를 각각 입력받아봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '다중 입력 처리',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '여러 개의 input()을 사용할 수 있다',
            '여러 변수를 조합해 출력할 수 있다'
          ],
          realWorldExample: '회원가입 할 때 이름, 나이, 이메일 등 여러 정보를 입력받는 것과 같아요!',
          starterCode: '# 이름 입력\nname = input("이름: ")\n\n# 나이 입력\nage = input("나이: ")\n\n# 출력\nprint(name + "님은 " + age + "살입니다.")\n',
          solution: 'name = input("이름: ")\nage = input("나이: ")\nprint(name + "님은 " + age + "살입니다.")',
          hints: [
            '💡 힌트 1: input()을 여러 번 사용하면 여러 값을 받을 수 있어요',
            '💡 힌트 2: 각각 다른 변수에 저장해요',
            '💡 힌트 3: + 로 문자열과 변수를 연결해요'
          ],
          commonMistakes: [
            '같은 변수 이름을 사용하면 덮어써져요',
            '각 입력마다 다른 변수 이름을 사용해야 해요'
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
          id: '3-19-4',
          title: '주의! input은 문자열',
          description: 'input()이 항상 문자열을 반환하는 것을 이해해요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: 'input()의 반환 타입',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'input()의 반환 타입이 항상 문자열(str)임을 이해한다',
            '문자열 숫자로는 계산이 안 됨을 안다'
          ],
          realWorldExample: '"10" + "20" = "1020"이 되는 이유! 문자열은 이어붙이기가 되지 계산이 안 돼요!',
          conceptCards: [
            {
              title: 'input()은 항상 문자열',
              description: '10을 입력해도 "10"(문자열)으로 저장돼요',
              icon: '🔤',
              example: 'input으로 10 입력 → "10" (숫자 아님!)'
            },
            {
              title: '문자열 + 문자열 = 이어붙이기',
              description: '"10" + "20" = "1020" (계산 ❌)',
              icon: '➕',
              example: '계산하려면 int()로 변환해야 해요!'
            }
          ],
          hints: [
            '💡 힌트 1: input()으로 받은 값은 항상 문자열(str)이에요',
            '💡 힌트 2: 숫자를 입력해도 "10"처럼 문자열이 돼요',
            '💡 힌트 3: 계산하려면 int()나 float()로 숫자로 바꿔야 해요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "주의! input은 문자열에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-19-5',
          title: '문자열을 숫자로 바꾸기',
          description: 'int()와 float()로 형변환을 해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '형변환 (type conversion)',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            '형변환(type conversion)의 개념을 이해한다',
            'int(), float(), str() 함수를 사용할 수 있다'
          ],
          realWorldExample: '문자를 숫자로 바꾸는 것은 외국어를 한국어로 번역하는 것과 비슷해요!',
          starterCode: '# 숫자를 입력받아 계산하기\nnum_str = input("숫자를 입력하세요: ")\n\n# 문자열을 정수로 변환\nnum = int(num_str)\n\n# 2배 계산\nresult = num * 2\nprint("2배:", result)\n',
          solution: 'num_str = input("숫자를 입력하세요: ")\nnum = int(num_str)\nresult = num * 2\nprint("2배:", result)',
          hints: [
            '💡 힌트 1: int("10") → 정수 10으로 변환',
            '💡 힌트 2: float("3.14") → 소수 3.14로 변환',
            '💡 힌트 3: str(42) → 문자열 "42"로 변환'
          ],
          commonMistakes: [
            'int("abc")처럼 숫자가 아닌 문자열은 변환 불가 - 에러 발생!',
            'int("3.14")는 에러 - 소수는 float() 먼저!'
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
          id: '3-19-6',
          title: '간단한 계산기',
          description: '두 숫자를 입력받아 더해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '입력 + 형변환 + 계산',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'input()과 int()를 함께 사용할 수 있다',
            '사용자 입력을 활용해 계산을 수행할 수 있다'
          ],
          realWorldExample: '스마트폰 계산기처럼 숫자를 입력받아 계산하는 프로그램을 만들어요!',
          starterCode: '# 두 숫자 입력받기\na = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\n\n# 더하기 결과 출력\nprint("합계:", a + b)\n',
          solution: 'a = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\nprint("합계:", a + b)',
          hints: [
            '💡 힌트 1: input()과 int()를 함께 사용하면 편리해요',
            '💡 힌트 2: int(input("...")) 형식으로 한 줄에 입력받고 변환!',
            '💡 힌트 3: 변환된 숫자로 바로 계산할 수 있어요'
          ],
          commonMistakes: [
            'int()를 빼먹으면 문자열 연결이 돼요: "10" + "20" = "1020"',
            '숫자가 아닌 값을 입력하면 에러가 발생해요'
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
          id: '3-19-7',
          title: 'f-string 출력',
          description: '더 쉽게 변수를 출력하는 방법을 배워요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'f-string 포맷팅',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'f-string 문법을 이해한다',
            '변수를 더 쉽게 출력할 수 있다'
          ],
          realWorldExample: '빈칸 채우기 문제처럼, {}에 변수 값이 자동으로 들어가요!',
          starterCode: 'name = "코딩"\nage = 12\n\n# f-string 사용하기\nprint(f"안녕하세요, {name}님! {age}살이시네요.")\n\n# 직접 해보세요\nfruit = "사과"\ncount = 5\nprint(f"")\n',
          solution: 'name = "코딩"\nage = 12\nprint(f"안녕하세요, {name}님! {age}살이시네요.")\nfruit = "사과"\ncount = 5\nprint(f"{fruit}가 {count}개 있어요.")',
          hints: [
            '💡 힌트 1: f"문자열 {변수}" 형식으로 사용해요',
            '💡 힌트 2: 중괄호 {} 안에 변수를 넣으면 값이 출력돼요',
            '💡 힌트 3: 문자열 연결(+)보다 훨씬 편리해요!'
          ],
          commonMistakes: [
            'f를 빼먹으면 {변수}가 그대로 출력돼요',
            '따옴표 앞에 f를 꼭 붙여야 해요: f"..."'
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
          id: '3-19-8',
          title: 'f-string으로 계산하기',
          description: 'f-string 안에서 계산도 할 수 있어요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: 'f-string 내 표현식',
          cstaStandard: '1B-AP-08',
          learningObjectives: [
            'f-string 안에서 수식을 사용할 수 있다',
            '복잡한 출력을 간단하게 작성할 수 있다'
          ],
          realWorldExample: '영수증처럼 "1,000원 x 3개 = 3,000원"을 한 줄로 출력할 수 있어요!',
          starterCode: 'price = 1000\nquantity = 3\n\n# f-string 안에서 계산하기\nprint(f"가격: {price}원 x {quantity}개 = {price * quantity}원")\n',
          solution: 'price = 1000\nquantity = 3\nprint(f"가격: {price}원 x {quantity}개 = {price * quantity}원")',
          hints: [
            '💡 힌트 1: {} 안에서 계산식도 사용할 수 있어요',
            '💡 힌트 2: {price * quantity}처럼 변수와 연산자를 함께!',
            '💡 힌트 3: 결과가 바로 계산되어 출력돼요'
          ],
          commonMistakes: [
            '{}를 빼먹으면 계산 결과가 아닌 수식이 그대로 출력돼요'
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
          id: '3-19-9',
          title: '에러 처리 맛보기',
          description: '잘못된 입력을 처리하는 방법을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '에러와 예외 처리 개념',
          cstaStandard: '1B-AP-11',
          learningObjectives: [
            '에러(오류)가 발생하는 상황을 이해한다',
            '에러를 미리 예방하는 방법을 안다'
          ],
          realWorldExample: 'ATM에서 비밀번호를 잘못 입력하면 "다시 입력해주세요"라고 안내하듯이, 프로그램도 잘못된 입력을 처리할 수 있어요!',
          conceptCards: [
            {
              title: '에러가 나는 상황',
              description: '숫자가 아닌 값을 int()로 변환하면 에러!',
              icon: '❌',
              example: 'int("abc") → ValueError 에러 발생!'
            },
            {
              title: '에러 예방하기',
              description: 'try-except로 에러를 잡을 수 있어요',
              icon: '🛡️',
              example: 'try: ... except: "잘못된 입력입니다" (나중에 배워요!)'
            }
          ],
          hints: [
            '💡 힌트 1: 숫자가 아닌 값을 int()로 바꾸면 에러가 나요',
            '💡 힌트 2: 에러가 나면 프로그램이 멈춰요',
            '💡 힌트 3: try-except로 에러를 처리할 수 있어요 (나중에 배워요!)'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "에러 처리 맛보기에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-19-10',
          title: '주간 도전: 대화형 프로그램',
          description: '사용자와 대화하는 자기소개 프로그램을 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '입출력 종합',
          cstaStandard: '1B-AP-09',
          learningObjectives: [
            'input(), int(), f-string을 종합적으로 활용할 수 있다',
            '대화형 프로그램을 만들 수 있다',
            'Week 19에서 배운 내용을 종합적으로 활용한다'
          ],
          realWorldExample: '챗봇처럼 대화하는 프로그램을 만들어요! 첫 대화형 프로젝트!',
          starterCode: '# 대화형 자기소개 프로그램\nprint("=== 친구 알아가기 ===")\n\nname = input("이름이 뭐예요? ")\nage = int(input("몇 살이에요? "))\nhobby = input("취미가 뭐예요? ")\n\nprint(f"\\n만나서 반가워요, {name}님!")\nprint(f"{age}살이고 {hobby}를 좋아하시는군요!")\nprint(f"{age + 10}살이 되면 어떤 사람이 될까요?")\n',
          solution: 'print("=== 친구 알아가기 ===")\nname = input("이름이 뭐예요? ")\nage = int(input("몇 살이에요? "))\nhobby = input("취미가 뭐예요? ")\nprint(f"\\n만나서 반가워요, {name}님!")\nprint(f"{age}살이고 {hobby}를 좋아하시는군요!")\nprint(f"{age + 10}살이 되면 어떤 사람이 될까요?")',
          hints: [
            '💡 힌트 1: input()으로 여러 정보를 입력받아요',
            '💡 힌트 2: 나이는 int()로 변환해서 계산에 사용해요',
            '💡 힌트 3: f-string으로 깔끔하게 출력해요!'
          ],
          commonMistakes: [
            '나이 입력에 int()를 빼먹으면 계산({age + 10})에서 에러!',
            'f-string의 f를 빼먹으면 변수가 출력 안 돼요'
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
        id: 'quiz-19',
        title: 'Week 19 퀴즈: 입출력 마스터',
        questions: [
          {
            id: 'q19-1',
            question: 'input()으로 받은 값의 데이터 타입은?',
            options: ['int', 'float', 'str', '입력에 따라 다름'],
            correctAnswer: 2,
            explanation: 'input()으로 받은 값은 항상 문자열(str)이에요! 숫자를 입력해도 "10"처럼 문자열이 돼요.'
          },
          {
            id: 'q19-2',
            question: '문자열 "123"을 정수로 바꾸는 함수는?',
            options: ['str()', 'int()', 'float()', 'num()'],
            correctAnswer: 1,
            explanation: 'int()는 문자열이나 소수를 정수로 변환해요. int("123") = 123!'
          },
          {
            id: 'q19-3',
            question: 'f-string에서 변수를 표시하는 기호는?',
            options: ['( )', '[ ]', '{ }', '< >'],
            correctAnswer: 2,
            explanation: 'f-string에서 {}(중괄호) 안에 변수를 넣으면 값이 출력돼요. f"이름: {name}"'
          },
          {
            id: 'q19-4',
            question: 'int(input("숫자: "))에서 "abc"를 입력하면?',
            options: ['0이 저장됨', '"abc"가 저장됨', '에러 발생', 'None이 저장됨'],
            correctAnswer: 2,
            explanation: '숫자가 아닌 문자열을 int()로 변환하면 ValueError 에러가 발생해요!'
          },
          {
            id: 'q19-5',
            question: 'f"{10 + 20}"의 결과는?',
            options: ['10 + 20', '30', '{10 + 20}', '1020'],
            correctAnswer: 1,
            explanation: 'f-string의 {} 안에서 계산도 할 수 있어요! {10 + 20}은 30을 출력해요.'
          }
        ],
      },
    },

    // Week 20: 연산자와 표현식
    {
      id: 'week-20',
      number: 20,
      title: '연산자: 계산과 비교의 달인',
      description: '다양한 연산자로 데이터를 처리하는 방법을 배워요',
      missions: [
        {
          id: '3-20-1',
          title: '산술 연산자 총정리',
          description: '덧셈, 뺄셈, 곱셈, 나눗셈을 복습해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '기본 산술 연산자',
          starterCode: 'a = 20\nb = 7\n\nprint(f"덧셈: {a + b}")\nprint(f"뺄셈: {a - b}")\nprint(f"곱셈: {a * b}")\nprint(f"나눗셈: {a / b}")\n',
          hints: [
            '+, -, *, / 가 기본 산술 연산자예요',
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
          id: '3-20-2',
          title: '나눗셈의 종류',
          description: '몫과 나머지를 구하는 연산자를 배워요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '정수 나눗셈과 나머지',
          starterCode: 'a = 17\nb = 5\n\nprint(f"일반 나눗셈: {a / b}")   # 3.4\nprint(f"몫(정수 나눗셈): {a // b}")  # 3\nprint(f"나머지: {a % b}")  # 2\n',
          hints: [
            '/ = 일반 나눗셈 (소수점 포함)',
            '// = 몫만 (정수 나눗셈)',
            '% = 나머지 (모듈로)',
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
          id: '3-20-3',
          title: '거듭제곱',
          description: '** 연산자로 거듭제곱을 계산해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '거듭제곱 연산자',
          starterCode: '# 2의 10승\nprint(2 ** 10)\n\n# 3의 4승 (3을 4번 곱한 것)\nprint(3 ** 4)\n\n# 5의 제곱\nprint(5 ** 2)\n',
          hints: [
            '** 연산자는 거듭제곱을 계산해요',
            '2 ** 3 = 2 × 2 × 2 = 8',
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
          id: '3-20-4',
          title: '비교 연산자',
          description: '두 값을 비교하는 연산자를 배워요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '비교 연산자와 불리언',
          starterCode: 'a = 10\nb = 5\n\nprint(f"{a} == {b}: {a == b}")  # 같은가?\nprint(f"{a} != {b}: {a != b}")  # 다른가?\nprint(f"{a} > {b}: {a > b}")    # 큰가?\nprint(f"{a} < {b}: {a < b}")    # 작은가?\nprint(f"{a} >= {b}: {a >= b}")  # 크거나 같은가?\nprint(f"{a} <= {b}: {a <= b}")  # 작거나 같은가?\n',
          hints: [
            '비교 결과는 True 또는 False예요',
            '== 는 같음, = 는 할당이에요 (헷갈리지 마세요!)',
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
          id: '3-20-5',
          title: '비교 연산 연습',
          description: '비교 연산자를 직접 사용해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '비교 연산 응용',
          starterCode: 'score = 85\npass_score = 60\n\n# score가 pass_score보다 크거나 같은지 확인\nis_passed = score >= pass_score\nprint(f"점수: {score}, 합격 기준: {pass_score}")\nprint(f"합격 여부: {is_passed}")\n',
          hints: [
            '비교 결과를 변수에 저장할 수 있어요',
            'True/False 값을 불리언(boolean)이라고 해요',
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
          id: '3-20-6',
          title: '논리 연산자: and',
          description: '두 조건이 모두 참인지 확인해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'and 연산자',
          starterCode: 'age = 15\nhas_ticket = True\n\n# 나이가 12세 이상이고 티켓이 있으면 입장 가능\ncan_enter = age >= 12 and has_ticket\nprint(f"입장 가능: {can_enter}")\n\n# and: 둘 다 True여야 True\nprint(f"True and True: {True and True}")\nprint(f"True and False: {True and False}")\n',
          hints: [
            'and: 둘 다 참이면 참',
            '하나라도 거짓이면 거짓',
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
          id: '3-20-7',
          title: '논리 연산자: or',
          description: '두 조건 중 하나라도 참인지 확인해요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'or 연산자',
          starterCode: 'is_weekend = True\nis_holiday = False\n\n# 주말이거나 공휴일이면 쉬는 날\nis_off = is_weekend or is_holiday\nprint(f"쉬는 날: {is_off}")\n\n# or: 하나라도 True면 True\nprint(f"True or False: {True or False}")\nprint(f"False or False: {False or False}")\n',
          hints: [
            'or: 하나라도 참이면 참',
            '둘 다 거짓이어야 거짓',
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
          id: '3-20-8',
          title: '논리 연산자: not',
          description: '참/거짓을 뒤집어요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: 'not 연산자',
          starterCode: 'is_raining = True\n\n# 비가 오지 않으면 놀러 갈 수 있음\ncan_play = not is_raining\nprint(f"비 오는 중: {is_raining}")\nprint(f"놀러 갈 수 있음: {can_play}")\n\nprint(f"not True: {not True}")\nprint(f"not False: {not False}")\n',
          hints: [
            'not: 참을 거짓으로, 거짓을 참으로',
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
          id: '3-20-9',
          title: '복합 할당 연산자',
          description: '+=, -= 등 축약 연산자를 배워요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '복합 할당 연산자',
          starterCode: 'score = 100\n\nscore += 10  # score = score + 10\nprint(f"10점 추가: {score}")\n\nscore -= 20  # score = score - 20\nprint(f"20점 감소: {score}")\n\nscore *= 2   # score = score * 2\nprint(f"2배: {score}")\n',
          hints: [
            '+= : 더해서 저장',
            '-= : 빼서 저장',
            '*= : 곱해서 저장',
            '/= : 나눠서 저장',
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
          id: '3-20-10',
          title: '주간 도전: 성적 계산기',
          description: '입력받은 점수로 평균과 합격 여부를 계산해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '연산자 종합',
          starterCode: '# 성적 계산기\nkor = int(input("국어 점수: "))\neng = int(input("영어 점수: "))\nmath = int(input("수학 점수: "))\n\n# 합계와 평균 계산\ntotal = kor + eng + math\naverage = total / 3\n\nprint(f"\\n=== 성적표 ===")\nprint(f"합계: {total}점")\nprint(f"평균: {average:.1f}점")  # 소수점 1자리\n\n# 합격 여부 (평균 60점 이상)\nis_passed = average >= 60\nprint(f"합격 여부: {is_passed}")\n',
          hints: [
            ':.1f 는 소수점 첫째 자리까지 표시해요',
            '평균 60점 이상이면 합격!',
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
        id: 'quiz-20',
        title: 'Week 20 퀴즈: 연산자 마스터',
        questions: [
          {
            id: 'q20-1',
            question: '17 % 5 의 결과는?',
            options: ['3', '2', '3.4', '12'],
            correctAnswer: 1,
            explanation: '% 연산자는 나머지를 구해요. 17 ÷ 5 = 3 나머지 2. 그래서 답은 2!'
          },
          {
            id: 'q20-2',
            question: 'and 연산자의 결과가 True가 되려면?',
            options: ['둘 다 True', '하나만 True', '둘 다 False', '상관없음'],
            correctAnswer: 0,
            explanation: 'and는 둘 다 True여야 True! True and True = True, 나머지는 모두 False'
          },
          {
            id: 'q20-3',
            question: 'score += 5 는 무엇과 같은가?',
            options: ['score = 5', 'score == 5', 'score = score + 5', 'score + 5'],
            correctAnswer: 2,
            explanation: '+= 는 복합 대입 연산자예요. score += 5 는 score = score + 5 의 줄임말!'
          },
          {
            id: 'q20-4',
            question: '2 ** 3 의 결과는?',
            options: ['5', '6', '8', '9'],
            correctAnswer: 2,
            explanation: '** 는 거듭제곱 연산자예요. 2 ** 3 = 2 × 2 × 2 = 8!'
          },
          {
            id: 'q20-5',
            question: 'not True 의 결과는?',
            options: ['True', 'False', '0', '에러'],
            correctAnswer: 1,
            explanation: 'not은 논리값을 반대로 뒤집어요. not True = False!'
          }
        ],
      },
    },

    // Week 21: 조건문 기초
    {
      id: 'week-21',
      number: 21,
      title: '조건문: if-else',
      description: '상황에 따라 다르게 행동하는 프로그램을 만들어요',
      missions: [
        {
          id: '3-21-1',
          title: '조건문이란?',
          description: '블록 코딩의 "만약~라면"을 Python으로!',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: '조건문의 개념',
          hints: [
            '조건문은 "만약 ~라면 ...하고, 아니면 ...한다"',
            '블록 코딩에서 배운 조건 블록과 같아요',
            '조건이 참(True)이면 실행해요',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Week 20 퀴즈: 연산자 마스터에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-21-2',
          title: '첫 번째 if 문',
          description: '간단한 if 문을 작성해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: 'if 문 기본 구조',
          starterCode: 'age = 15\n\n# 18세 이상이면 "성인입니다" 출력\nif age >= 18:\n    print("성인입니다")\n\nprint("프로그램 끝")\n',
          hints: [
            'if 조건: 형식으로 작성해요',
            '조건 뒤에 콜론(:)을 붙여요',
            '조건이 참일 때 실행할 코드는 들여쓰기해요',
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
          id: '3-21-3',
          title: '들여쓰기의 중요성',
          description: 'Python에서 들여쓰기가 왜 중요한지 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '들여쓰기(indentation)',
          hints: [
            'Python은 들여쓰기로 코드 블록을 구분해요',
            '보통 스페이스 4칸 또는 탭 1개를 사용해요',
            '같은 블록은 같은 들여쓰기를 유지해야 해요',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "들여쓰기의 중요성에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-21-4',
          title: 'if-else 문',
          description: '조건이 거짓일 때도 처리해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'if-else 구조',
          starterCode: 'score = 75\n\nif score >= 60:\n    print("합격입니다!")\nelse:\n    print("불합격입니다.")\n',
          hints: [
            'else:는 if 조건이 거짓일 때 실행돼요',
            'else도 콜론(:)이 필요해요',
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
          id: '3-21-5',
          title: '짝수/홀수 판별',
          description: '숫자가 짝수인지 홀수인지 판별해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '나머지 연산과 조건문',
          starterCode: 'number = int(input("숫자를 입력하세요: "))\n\nif number % 2 == 0:\n    print(f"{number}은(는) 짝수입니다")\nelse:\n    print(f"{number}은(는) 홀수입니다")\n',
          hints: [
            '짝수는 2로 나눈 나머지가 0이에요',
            'number % 2 == 0 이면 짝수',
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
          id: '3-21-6',
          title: '양수/음수/0 판별',
          description: '숫자의 부호를 판별해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '다중 조건 연습',
          starterCode: 'number = int(input("숫자: "))\n\nif number > 0:\n    print("양수입니다")\nelse:\n    if number < 0:\n        print("음수입니다")\n    else:\n        print("0입니다")\n',
          hints: [
            'if 안에 if를 넣을 수 있어요 (중첩 조건문)',
            '하지만 더 좋은 방법이 있어요 (다음에 배워요!)',
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
          id: '3-21-7',
          title: '비밀번호 확인',
          description: '입력한 비밀번호가 맞는지 확인해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '문자열 비교',
          starterCode: 'correct_password = "python123"\n\npassword = input("비밀번호를 입력하세요: ")\n\nif password == correct_password:\n    print("로그인 성공!")\nelse:\n    print("비밀번호가 틀렸습니다.")\n',
          hints: [
            '문자열도 == 로 비교할 수 있어요',
            '대소문자를 정확히 맞춰야 해요',
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
          id: '3-21-8',
          title: '논리 연산자와 조건문',
          description: 'and, or를 조건문에서 사용해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '복합 조건',
          starterCode: 'age = int(input("나이: "))\nhas_id = input("신분증 있나요? (y/n): ")\n\n# 18세 이상이고 신분증이 있으면 입장 가능\nif age >= 18 and has_id == "y":\n    print("입장 가능합니다")\nelse:\n    print("입장할 수 없습니다")\n',
          hints: [
            'and: 두 조건 모두 만족해야 함',
            'or: 하나라도 만족하면 됨',
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
          id: '3-21-9',
          title: '최댓값 찾기',
          description: '두 숫자 중 큰 수를 찾아봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '비교와 조건문',
          starterCode: 'a = int(input("첫 번째 숫자: "))\nb = int(input("두 번째 숫자: "))\n\nif a > b:\n    max_num = a\nelse:\n    max_num = b\n\nprint(f"더 큰 수: {max_num}")\n',
          hints: [
            '두 수를 비교해서 큰 쪽을 변수에 저장해요',
            '나중에 max() 함수도 배울 거예요',
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
          id: '3-21-10',
          title: '주간 도전: 놀이공원 입장',
          description: '조건에 따라 입장 가능 여부를 판단해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '조건문 종합',
          starterCode: '# 놀이공원 입장 시스템\n# 조건: 키 120cm 이상, 티켓 있음\n\nprint("=== 놀이기구 탑승 확인 ===")\nheight = int(input("키(cm): "))\nhas_ticket = input("티켓이 있나요? (y/n): ")\n\nif height >= 120 and has_ticket == "y":\n    print("탑승 가능합니다! 즐거운 시간 되세요!")\nelse:\n    if height < 120:\n        print(f"키가 {120 - height}cm 더 커야 해요.")\n    if has_ticket != "y":\n        print("티켓이 필요합니다.")\n',
          hints: [
            '여러 조건을 and로 연결하세요',
            '왜 탑승 불가인지도 알려주면 좋아요',
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
        id: 'quiz-21',
        title: 'Week 21 퀴즈: 조건문 기초',
        questions: [
          {
            id: 'q21-1',
            question: 'if 문 뒤에 반드시 붙여야 하는 기호는?',
            options: [';', ':', '{', '('],
            correctAnswer: 1,
            explanation: 'Python에서 if 조건: 형식으로 콜론(:)을 붙여야 해요!'
          },
          {
            id: 'q21-2',
            question: 'if 조건이 거짓일 때 실행되는 키워드는?',
            options: ['then', 'otherwise', 'else', 'false'],
            correctAnswer: 2,
            explanation: 'else는 if 조건이 거짓(False)일 때 실행돼요. "아니면"이라는 뜻!'
          },
          {
            id: 'q21-3',
            question: 'Python에서 코드 블록을 구분하는 방법은?',
            options: ['{ }', '들여쓰기', '( )', '[ ]'],
            correctAnswer: 1,
            explanation: 'Python은 들여쓰기로 코드 블록을 구분해요! 보통 스페이스 4칸을 사용해요.'
          },
          {
            id: 'q21-4',
            question: '10 % 2 == 0 의 결과는? (10이 짝수인지 확인)',
            options: ['True', 'False', '0', '10'],
            correctAnswer: 0,
            explanation: '10 % 2 = 0 (나머지가 0), 0 == 0 은 True! 10은 짝수예요!'
          },
          {
            id: 'q21-5',
            question: 'if 문에서 두 조건 모두 만족해야 할 때 사용하는 것은?',
            options: ['or', 'and', 'not', 'both'],
            correctAnswer: 1,
            explanation: 'and는 두 조건 모두 True여야 True! if age >= 18 and has_ticket:'
          }
        ],
      },
    },

    // Week 22: 조건문 심화 (elif)
    {
      id: 'week-22',
      number: 22,
      title: '조건문 심화: elif',
      description: '여러 조건을 순서대로 검사하는 방법을 배워요',
      missions: [
        {
          id: '3-22-1',
          title: 'elif 소개',
          description: '세 가지 이상의 경우를 처리하는 방법',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: 'elif의 필요성',
          hints: [
            'elif = else + if 의 줄임말',
            '여러 조건을 순서대로 검사해요',
            '첫 번째로 참인 조건만 실행해요',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Week 21 퀴즈: 조건문 기초에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-22-2',
          title: '성적 등급 매기기',
          description: 'elif로 A, B, C, D, F 등급을 매겨봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'if-elif-else 구조',
          starterCode: 'score = int(input("점수: "))\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"등급: {grade}")\n',
          hints: [
            '위에서부터 순서대로 검사해요',
            '90점 이상이면 첫 번째 조건에서 처리됨',
            '85점은 첫 조건(>=90) 거짓, 두 번째(>=80) 참 → B',
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
          id: '3-22-3',
          title: 'elif 연습: 나이대 분류',
          description: '나이에 따라 분류해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: 'elif 연습',
          starterCode: 'age = int(input("나이: "))\n\nif age < 8:\n    group = "미취학"\nelif age < 14:\n    group = "초등학생"\nelif age < 17:\n    group = "중학생"\nelif age < 20:\n    group = "고등학생"\nelse:\n    group = "성인"\n\nprint(f"분류: {group}")\n',
          hints: [
            '순서대로 검사하니까 범위를 명확히 정해요',
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
          id: '3-22-4',
          title: '요일 판별기',
          description: '숫자를 요일로 변환해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '값 매칭',
          starterCode: 'day_num = int(input("요일 번호(1-7): "))\n\nif day_num == 1:\n    day = "월요일"\nelif day_num == 2:\n    day = "화요일"\nelif day_num == 3:\n    day = "수요일"\nelif day_num == 4:\n    day = "목요일"\nelif day_num == 5:\n    day = "금요일"\nelif day_num == 6:\n    day = "토요일"\nelif day_num == 7:\n    day = "일요일"\nelse:\n    day = "잘못된 입력"\n\nprint(f"오늘은 {day}입니다")\n',
          hints: [
            '특정 값과 일치하는지 == 로 검사해요',
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
          id: '3-22-5',
          title: 'BMI 계산기',
          description: '체질량지수를 계산하고 판정해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 15,
          concept: 'elif 실전 활용',
          starterCode: 'height = float(input("키(m): "))  # 예: 1.75\nweight = float(input("몸무게(kg): "))\n\n# BMI = 몸무게 / 키^2\nbmi = weight / (height ** 2)\n\nif bmi < 18.5:\n    result = "저체중"\nelif bmi < 23:\n    result = "정상"\nelif bmi < 25:\n    result = "과체중"\nelse:\n    result = "비만"\n\nprint(f"BMI: {bmi:.1f}")\nprint(f"판정: {result}")\n',
          hints: [
            'BMI = 몸무게(kg) / 키(m)의 제곱',
            '소수점 입력은 float()을 사용해요',
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
          id: '3-22-6',
          title: '중첩 조건문',
          description: 'if 안에 if를 넣어봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '중첩 if 문',
          starterCode: 'is_member = input("회원이신가요? (y/n): ")\n\nif is_member == "y":\n    age = int(input("나이: "))\n    if age >= 65:\n        discount = 50\n    elif age < 14:\n        discount = 30\n    else:\n        discount = 10\n    print(f"회원 할인 {discount}%")\nelse:\n    print("비회원은 할인이 없습니다")\n',
          hints: [
            '조건문 안에 또 조건문을 넣을 수 있어요',
            '들여쓰기에 주의하세요!',
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
          id: '3-22-7',
          title: '가위바위보 게임',
          description: '컴퓨터와 가위바위보를 해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '조건문 응용',
          starterCode: 'import random\n\nchoices = ["가위", "바위", "보"]\ncomputer = random.choice(choices)\n\nuser = input("가위, 바위, 보 중 하나를 입력하세요: ")\n\nprint(f"컴퓨터: {computer}")\n\nif user == computer:\n    print("비겼습니다!")\nelif (user == "가위" and computer == "보") or \\\n     (user == "바위" and computer == "가위") or \\\n     (user == "보" and computer == "바위"):\n    print("이겼습니다!")\nelse:\n    print("졌습니다...")\n',
          hints: [
            'random.choice()는 리스트에서 무작위로 하나를 선택해요',
            '\\는 긴 줄을 다음 줄로 이어요',
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
          id: '3-22-8',
          title: '윤년 판별기',
          description: '어떤 해가 윤년인지 판별해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 12,
          concept: '복잡한 조건 조합',
          starterCode: 'year = int(input("연도: "))\n\n# 윤년 조건:\n# 1. 4로 나눠지고\n# 2. 100으로 나눠지지 않거나\n# 3. 400으로 나눠지면\n\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print(f"{year}년은 윤년입니다 (366일)")\nelse:\n    print(f"{year}년은 평년입니다 (365일)")\n',
          hints: [
            '윤년 규칙을 조건문으로 표현해요',
            '괄호로 조건을 묶으면 이해하기 쉬워요',
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
          id: '3-22-9',
          title: '간단한 챗봇',
          description: '키워드에 따라 응답하는 챗봇을 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 12,
          concept: '문자열 처리와 조건문',
          starterCode: 'print("안녕하세요! 무엇이든 물어보세요.")\nprint("종료하려면 \'끝\'을 입력하세요.")\n\nmessage = input("You: ")\n\nif "안녕" in message:\n    print("Bot: 안녕하세요! 반갑습니다!")\nelif "날씨" in message:\n    print("Bot: 오늘 날씨가 좋네요!")\nelif "이름" in message:\n    print("Bot: 저는 파이봇이에요!")\nelif "끝" in message:\n    print("Bot: 안녕히 가세요!")\nelse:\n    print("Bot: 잘 모르겠어요. 다시 물어봐 주세요.")\n',
          hints: [
            '"단어" in 문자열: 문자열에 단어가 포함되어 있는지 확인',
            '대소문자 구분에 주의하세요',
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
          id: '3-22-10',
          title: '주간 도전: 자판기 프로그램',
          description: '음료를 선택하고 잔돈을 계산하는 자판기를 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 120,
          estimatedMinutes: 20,
          concept: '조건문 종합 프로젝트',
          starterCode: 'print("=== 자판기 ===")\nprint("1. 콜라 (1000원)")\nprint("2. 사이다 (1000원)")\nprint("3. 커피 (800원)")\nprint("4. 물 (500원)")\n\nchoice = int(input("음료 번호: "))\nmoney = int(input("투입 금액: "))\n\nif choice == 1 or choice == 2:\n    price = 1000\n    drink = "콜라" if choice == 1 else "사이다"\nelif choice == 3:\n    price = 800\n    drink = "커피"\nelif choice == 4:\n    price = 500\n    drink = "물"\nelse:\n    print("잘못된 선택입니다")\n    price = 0\n    drink = ""\n\nif price > 0:\n    if money >= price:\n        change = money - price\n        print(f"\\n{drink}를 드립니다!")\n        print(f"잔돈: {change}원")\n    else:\n        print(f"\\n금액이 부족합니다. {price - money}원 더 필요해요.")\n',
          hints: [
            '음료 선택 → 가격 결정 → 잔돈 계산',
            '금액이 부족한 경우도 처리하세요',
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
        id: 'quiz-22',
        title: 'Week 22 퀴즈: 조건문 심화',
        questions: [
          {
            id: 'q22-1',
            question: 'elif는 무엇의 줄임말인가?',
            options: ['else only if', 'else if', 'element if', 'elif는 줄임말이 아님'],
            correctAnswer: 1,
            explanation: 'elif = else if의 줄임말이에요. "아니면 만약~라면"이라는 뜻!'
          },
          {
            id: 'q22-2',
            question: 'if-elif-else에서 실행되는 블록의 수는?',
            options: ['조건에 맞는 모든 블록', '정확히 하나', '0개 또는 1개', 'else만'],
            correctAnswer: 1,
            explanation: 'if-elif-else에서는 정확히 하나의 블록만 실행돼요! 첫 번째로 참인 조건만!'
          },
          {
            id: 'q22-3',
            question: '"hello" in "hello world"의 결과는?',
            options: ['True', 'False', '에러', '"hello"'],
            correctAnswer: 0,
            explanation: 'in 연산자는 문자열이 포함되어 있는지 확인해요. "hello"가 있으니 True!'
          },
          {
            id: 'q22-4',
            question: 'score = 85일 때 성적이 B인 조건은? (A: 90이상, B: 80이상)',
            options: ['score >= 90', 'score >= 80 and score < 90', 'score == 85', 'score > 80'],
            correctAnswer: 1,
            explanation: 'B등급은 80 이상이면서 90 미만이어야 해요! elif에서 순서대로 체크하면 자동으로 처리됩니다.'
          },
          {
            id: 'q22-5',
            question: 'if 문 없이 elif만 쓸 수 있나요?',
            options: ['예', '아니오', '조건에 따라 다름', 'else와 함께면 가능'],
            correctAnswer: 1,
            explanation: 'elif는 항상 if 뒤에 와야 해요! if 없이 elif만 쓰면 에러 발생!'
          }
        ],
      },
    },

    // Week 23: 반복문 기초 (for, while)
    {
      id: 'week-23',
      number: 23,
      title: '반복문: for와 while',
      description: '같은 작업을 여러 번 반복하는 방법을 배워요',
      missions: [
        {
          id: '3-23-1',
          title: '반복문이란?',
          description: '블록 코딩의 반복 블록을 Python으로!',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: '반복문의 개념',
          hints: [
            '같은 코드를 여러 번 실행해요',
            '블록 코딩의 "~번 반복하기"와 같아요',
            '지루한 반복 작업을 자동화해요',
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Core Concept 이해하기",
                              "description": "Week 22 퀴즈: 조건문 심화에서 배운 Core Concept의 핵심을 확인합니다.",
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
          id: '3-23-2',
          title: '첫 번째 for 문',
          description: '"안녕"을 5번 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: 'for + range() 기본',
          starterCode: '# "안녕"을 5번 출력\nfor i in range(5):\n    print("안녕")\n',
          hints: [
            'for 변수 in range(횟수): 형식이에요',
            'range(5)는 0, 1, 2, 3, 4를 생성해요',
            'i는 반복할 때마다 바뀌는 변수예요',
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
          id: '3-23-3',
          title: 'range() 이해하기',
          description: 'range() 함수의 동작을 이해해요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'range() 함수',
          starterCode: '# range(5): 0부터 4까지\nprint("range(5):")\nfor i in range(5):\n    print(i)\n\nprint()\n\n# range(1, 6): 1부터 5까지\nprint("range(1, 6):")\nfor i in range(1, 6):\n    print(i)\n',
          hints: [
            'range(n): 0부터 n-1까지',
            'range(a, b): a부터 b-1까지',
            '끝 숫자는 포함되지 않아요!',
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
          id: '3-23-4',
          title: '1부터 10까지 합계',
          description: 'for 문으로 1+2+...+10을 계산해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '누적 합계',
          starterCode: 'total = 0\n\nfor i in range(1, 11):  # 1부터 10까지\n    total += i\n    print(f"현재까지 합: {total}")\n\nprint(f"최종 합계: {total}")\n',
          hints: [
            'total += i 는 total = total + i 와 같아요',
            '반복할 때마다 i 값이 더해져요',
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
          id: '3-23-5',
          title: '구구단 출력',
          description: '특정 단의 구구단을 출력해봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'for 문 활용',
          starterCode: 'dan = int(input("몇 단? "))\n\nprint(f"=== {dan}단 ===")\nfor i in range(1, 10):\n    result = dan * i\n    print(f"{dan} x {i} = {result}")\n',
          hints: [
            '1부터 9까지 반복해요',
            '단 x i = 결과를 출력해요',
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
          id: '3-23-6',
          title: 'while 문 소개',
          description: '조건이 참인 동안 반복해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'while 문 기본',
          starterCode: '# while: 조건이 참인 동안 반복\ncount = 0\n\nwhile count < 5:\n    print(f"count: {count}")\n    count += 1  # 이걸 빼면 무한 반복!\n\nprint("반복 끝!")\n',
          hints: [
            'while 조건: 형식이에요',
            '조건이 거짓이 될 때까지 반복해요',
            '조건이 계속 참이면 무한 반복되니 주의!',
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
          id: '3-23-7',
          title: 'while로 입력받기',
          description: '올바른 값이 입력될 때까지 반복해요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: 'while 조건 활용',
          starterCode: 'password = ""\n\nwhile password != "1234":\n    password = input("비밀번호를 입력하세요: ")\n    if password != "1234":\n        print("틀렸습니다. 다시 시도하세요.")\n\nprint("정답입니다! 접근 허용.")\n',
          hints: [
            '비밀번호가 맞을 때까지 계속 물어봐요',
            '조건이 거짓이 되면 반복이 끝나요',
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
          id: '3-23-8',
          title: 'break: 반복 탈출',
          description: 'break로 반복문을 즉시 종료해요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: 'break 문',
          starterCode: '# 1부터 10까지 중 5를 찾으면 멈추기\nfor i in range(1, 11):\n    print(f"검사 중: {i}")\n    if i == 5:\n        print("5를 찾았습니다!")\n        break  # 반복 종료\n\nprint("반복 끝")\n',
          hints: [
            'break는 반복문을 즉시 종료해요',
            'for, while 모두에서 사용할 수 있어요',
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
          id: '3-23-9',
          title: 'continue: 다음으로 건너뛰기',
          description: 'continue로 현재 반복을 건너뛰어요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: 'continue 문',
          starterCode: '# 홀수만 출력하기\nfor i in range(1, 11):\n    if i % 2 == 0:  # 짝수면\n        continue    # 건너뛰기\n    print(i)\n',
          hints: [
            'continue는 아래 코드를 건너뛰고 다음 반복으로',
            '조건에 맞지 않는 것을 걸러낼 때 유용해요',
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
          id: '3-23-10',
          title: '주간 도전: 숫자 맞추기 게임',
          description: '컴퓨터가 생각한 숫자를 맞춰봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          difficulty: 'beginner',
          exp: 120,
          estimatedMinutes: 20,
          concept: '반복문 종합',
          starterCode: 'import random\n\nsecret = random.randint(1, 100)\nattempts = 0\n\nprint("1부터 100 사이의 숫자를 맞춰보세요!")\n\nwhile True:\n    guess = int(input("추측: "))\n    attempts += 1\n    \n    if guess == secret:\n        print(f"정답! {attempts}번 만에 맞추셨습니다!")\n        break\n    elif guess < secret:\n        print("더 높은 숫자예요.")\n    else:\n        print("더 낮은 숫자예요.")\n',
          hints: [
            'while True: 는 무한 반복이에요',
            'break로 정답일 때 탈출해요',
            '시도 횟수를 세어보세요',
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
        id: 'quiz-23',
        title: 'Week 23 퀴즈: 반복문 기초',
        questions: [
          {
            id: 'q23-1',
            question: 'range(3)이 생성하는 숫자는?',
            options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
            correctAnswer: 1,
            explanation: 'range(3)은 0부터 시작해서 3 직전까지! 0, 1, 2를 생성해요.'
          },
          {
            id: 'q23-2',
            question: '반복문을 즉시 종료하는 키워드는?',
            options: ['stop', 'exit', 'break', 'end'],
            correctAnswer: 2,
            explanation: 'break는 반복문을 즉시 탈출해요! while과 for 모두에서 사용 가능!'
          },
          {
            id: 'q23-3',
            question: 'while True: 의 의미는?',
            options: ['한 번만 실행', '무한 반복', '조건부 실행', '실행 안 함'],
            correctAnswer: 1,
            explanation: 'while True:는 조건이 항상 True라서 무한 반복해요! break로 탈출해야 해요.'
          },
          {
            id: 'q23-4',
            question: '1부터 10까지 합을 구할 때 사용하는 range()는?',
            options: ['range(10)', 'range(1, 10)', 'range(1, 11)', 'range(0, 10)'],
            correctAnswer: 2,
            explanation: 'range(1, 11)은 1부터 10까지예요. 끝 숫자(11)는 포함 안 됨!'
          },
          {
            id: 'q23-5',
            question: 'continue의 역할은?',
            options: ['반복문 종료', '현재 반복 건너뛰기', '다음 함수로', '프로그램 종료'],
            correctAnswer: 1,
            explanation: 'continue는 현재 반복을 건너뛰고 다음 반복으로 넘어가요!'
          }
        ],
      },
    },

    // Week 24: 반복문 활용과 미니 프로젝트
    {
      id: 'week-24',
      number: 24,
      title: '반복문 활용과 프로젝트',
      description: '반복문을 활용한 다양한 프로젝트를 만들어봐요',
      missions: [
        {
          id: '3-24-1',
          title: '리스트와 for 문',
          description: '리스트의 각 항목을 순회해봐요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '리스트 순회',
          starterCode: 'fruits = ["사과", "바나나", "포도", "딸기"]\n\nfor fruit in fruits:\n    print(f"좋아하는 과일: {fruit}")\n',
          hints: [
            'for 항목 in 리스트: 형식으로 순회해요',
            '리스트의 각 항목이 차례로 변수에 들어가요',
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
          id: '3-24-2',
          title: 'enumerate() 함수',
          description: '인덱스와 값을 함께 가져와요',
          type: 'coding',
          language: 'python',
          phase: 'use',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: 'enumerate 사용법',
          starterCode: 'students = ["김철수", "이영희", "박민수"]\n\nfor index, name in enumerate(students):\n    print(f"{index + 1}번: {name}")\n',
          hints: [
            'enumerate()는 (인덱스, 값) 쌍을 반환해요',
            '순서 번호가 필요할 때 유용해요',
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
          id: '3-24-3',
          title: '중첩 반복문',
          description: '반복문 안에 반복문을 넣어봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 15,
          concept: '중첩 for 문',
          starterCode: '# 구구단 전체 출력\nfor dan in range(2, 10):\n    print(f"=== {dan}단 ===")\n    for i in range(1, 10):\n        print(f"{dan} x {i} = {dan * i}")\n    print()  # 빈 줄\n',
          hints: [
            '바깥 반복문이 한 번 돌 때 안쪽 반복문은 전체 실행',
            '2단이 끝나면 3단으로, 3단이 끝나면 4단으로...',
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
          id: '3-24-4',
          title: '별 찍기: 직각삼각형',
          description: '별로 직각삼각형을 그려봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '중첩 반복문 활용',
          starterCode: '# 직각삼각형\n# *\n# **\n# ***\n# ****\n# *****\n\nfor i in range(1, 6):\n    print("*" * i)\n',
          hints: [
            '"*" * 3 은 "***"가 돼요',
            '줄마다 별 개수가 1씩 늘어나요',
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
          id: '3-24-5',
          title: '별 찍기: 피라미드',
          description: '가운데 정렬된 피라미드를 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 15,
          concept: '문자열 곱셈과 반복',
          starterCode: '#     *\n#    ***\n#   *****\n#  *******\n# *********\n\nheight = 5\n\nfor i in range(1, height + 1):\n    spaces = " " * (height - i)\n    stars = "*" * (2 * i - 1)\n    print(spaces + stars)\n',
          hints: [
            '공백과 별의 개수를 계산해야 해요',
            '공백: 높이 - 현재줄, 별: 2 * 현재줄 - 1',
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
          id: '3-24-6',
          title: '소수 찾기',
          description: '1부터 N까지의 소수를 찾아봐요',
          type: 'coding',
          language: 'python',
          phase: 'modify',
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '중첩 반복과 조건문',
          starterCode: 'n = int(input("어디까지 소수를 찾을까요? "))\n\nprint(f"1부터 {n}까지의 소수:")\n\nfor num in range(2, n + 1):\n    is_prime = True\n    for i in range(2, num):\n        if num % i == 0:\n            is_prime = False\n            break\n    if is_prime:\n        print(num, end=" ")\n',
          hints: [
            '소수: 1과 자신만으로 나누어지는 수',
            '2부터 num-1까지 나눠보고, 나눠지면 소수가 아님',
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
          id: '3-24-7',
          title: '리스트에서 최댓값 찾기',
          description: '반복문으로 직접 최댓값을 찾아봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '반복문과 비교',
          starterCode: 'numbers = [34, 67, 23, 89, 12, 45, 78]\n\nmax_num = numbers[0]  # 첫 번째 값으로 시작\n\nfor num in numbers:\n    if num > max_num:\n        max_num = num\n\nprint(f"숫자들: {numbers}")\nprint(f"최댓값: {max_num}")\n\n# 파이썬 내장 함수로도 가능\nprint(f"max() 사용: {max(numbers)}")\n',
          hints: [
            '첫 번째 값을 최댓값으로 가정해요',
            '더 큰 값을 찾으면 업데이트해요',
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
          id: '3-24-8',
          title: '문자열 반복',
          description: '문자열의 각 문자를 처리해봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 10,
          concept: '문자열 순회',
          starterCode: 'word = "Python"\n\nfor char in word:\n    print(char)\n\nprint()  # 빈 줄\n\n# 모음 개수 세기\nvowels = "aeiouAEIOU"\ncount = 0\n\nfor char in word:\n    if char in vowels:\n        count += 1\n\nprint(f"{word}의 모음 개수: {count}")\n',
          hints: [
            '문자열도 for 문으로 순회할 수 있어요',
            '한 글자씩 차례로 변수에 들어가요',
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
          id: '3-24-9',
          title: 'Unit 3 복습 퀴즈 프로그램',
          description: '지금까지 배운 내용으로 퀴즈 프로그램을 만들어봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          difficulty: 'beginner',
          exp: 100,
          estimatedMinutes: 15,
          concept: '종합 복습',
          starterCode: 'questions = [\n    ("Python에서 출력 함수는?", "print"),\n    ("변수에 값을 저장하는 기호는?", "="),\n    ("조건문 키워드는?", "if")\n]\n\nscore = 0\n\nprint("=== Python 퀴즈 ==="")\n\nfor i, (question, answer) in enumerate(questions):\n    print(f"\\n문제 {i + 1}: {question}")\n    user_answer = input("정답: ")\n    \n    if user_answer.lower() == answer.lower():\n        print("정답입니다!")\n        score += 1\n    else:\n        print(f"틀렸습니다. 정답: {answer}")\n\nprint(f"\\n최종 점수: {score}/{len(questions)}")\n',
          hints: [
            '문제와 정답을 튜플로 저장해요',
            'enumerate()로 문제 번호를 표시해요',
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
          id: '3-24-10',
          title: 'Unit 3 종합 프로젝트: 간단한 텍스트 게임',
          description: '모험가가 되어 선택의 기로에 서봐요',
          type: 'coding',
          language: 'python',
          phase: 'create',
          isKeyMission: true,
          difficulty: 'beginner',
          exp: 150,
          estimatedMinutes: 25,
          concept: 'Unit 3 종합 프로젝트',
          starterCode: 'import random\n\nprint("="*40)\nprint("   환영합니다, 용감한 모험가여!   ")\nprint("="*40)\n\nname = input("\\n당신의 이름은? ")\nhp = 100\ngold = 50\n\nprint(f"\\n{name}님, 모험을 시작합니다!")\nprint(f"HP: {hp}, 골드: {gold}")\n\nplaying = True\n\nwhile playing:\n    print("\\n--- 갈림길입니다 ---")\n    print("1. 동굴 탐험 (보물? 몬스터?)")\n    print("2. 마을 방문 (회복)")\n    print("3. 모험 종료")\n    \n    choice = input("선택: ")\n    \n    if choice == "1":\n        # 동굴 탐험\n        event = random.choice(["treasure", "monster", "empty"])\n        if event == "treasure":\n            found = random.randint(10, 50)\n            gold += found\n            print(f"보물 발견! +{found} 골드")\n        elif event == "monster":\n            damage = random.randint(10, 30)\n            hp -= damage\n            print(f"몬스터! -{damage} HP")\n        else:\n            print("아무것도 없었습니다...")\n    elif choice == "2":\n        # 마을 방문\n        if gold >= 30:\n            gold -= 30\n            hp = 100\n            print("회복했습니다! HP: 100")\n        else:\n            print("골드가 부족합니다.")\n    elif choice == "3":\n        playing = False\n    else:\n        print("잘못된 선택입니다.")\n    \n    print(f"\\n[상태] HP: {hp}, 골드: {gold}")\n    \n    if hp <= 0:\n        print("\\n게임 오버!")\n        playing = False\n\nprint(f"\\n{name}의 모험 결과: 골드 {gold}")\nprint("다음에 또 만나요!")\n',
          hints: [
            'while 문으로 게임 루프를 만들어요',
            'if-elif-else로 선택을 처리해요',
            'random으로 이벤트를 결정해요',
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
        id: 'project-3',
        title: 'Python 첫걸음 종합 프로젝트',
        description: 'Unit 3에서 배운 내용을 활용한 프로젝트',
        difficulty: 'beginner',
        duration: '30분',
        requirements: ['변수와 자료형 이해', '조건문 활용', '반복문 활용'],
        exp: 200,
      },
      quiz: {
        id: 'quiz-24',
        title: 'Week 24 퀴즈: Unit 3 종합 평가',
        questions: [
          {
            id: 'q24-1',
            question: 'for fruit in ["사과", "배"]에서 fruit에 들어가는 값은?',
            options: ['["사과", "배"]', '"사과"와 "배"가 차례로', '0과 1', '인덱스'],
            correctAnswer: 1,
            explanation: 'for 문에서 리스트의 각 항목이 차례로 변수에 들어가요! 먼저 "사과", 그 다음 "배"'
          },
          {
            id: 'q24-2',
            question: '"*" * 3의 결과는?',
            options: ['3', '*3', '***', '에러'],
            correctAnswer: 2,
            explanation: '문자열 * 숫자 = 문자열 반복! "*" * 3 = "***"'
          },
          {
            id: 'q24-3',
            question: '중첩 반복문에서 바깥이 3번, 안쪽이 4번이면 총 실행 횟수는?',
            options: ['7번', '12번', '3번', '4번'],
            correctAnswer: 1,
            explanation: '바깥 × 안쪽 = 3 × 4 = 12번! 바깥 1번마다 안쪽이 4번 실행돼요.'
          },
          {
            id: 'q24-4',
            question: 'enumerate(["A", "B"])의 결과는?',
            options: ['["A", "B"]', '[(0, "A"), (1, "B")]', '[0, 1]', '["A", 0, "B", 1]'],
            correctAnswer: 1,
            explanation: 'enumerate()는 인덱스와 값을 함께 반환해요! (0, "A"), (1, "B")'
          },
          {
            id: 'q24-5',
            question: 'Python에서 들여쓰기를 잘못하면?',
            options: ['무시됨', '경고만 나옴', 'IndentationError 발생', '자동 수정됨'],
            correctAnswer: 2,
            explanation: 'Python은 들여쓰기가 매우 중요해요! 잘못하면 IndentationError 에러 발생!'
          }
        ],
      },
    },
  ],
};

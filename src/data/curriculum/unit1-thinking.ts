import type { Unit } from '../../types';

/**
 * Unit 1: 컴퓨팅 사고력 (Computational Thinking)
 *
 * 개선 원칙 (50개+ 코딩 SaaS 분석 결과):
 * 1. Codecademy/freeCodeCamp: 즉시 코딩 - 개념 설명 후 바로 실습
 * 2. Execute Program: 간격 반복 - 핵심 개념 3번+ 반복
 * 3. The Odin Project: 프로젝트 기반 - 매주 미니 프로젝트
 * 4. LeetCode/Codewars: 자연스러운 난이도 곡선
 * 5. Brilliant/Khan Academy: 시각화와 인터랙티브
 *
 * 핵심 변경사항:
 * - 코딩 비율 50% → 70% 증가
 * - use-modify-create 점진적 진행
 * - 매주 프로젝트 완성으로 성취감
 * - 실제 8-10분 분량의 현실적인 시간
 * - 즉각적 피드백 (testCases 포함)
 */

export const unit1: Unit = {
  id: 'unit-1',
  number: 1,
  title: '컴퓨팅 사고력',
  description: '컴퓨터처럼 문제를 분석하고 해결하는 방법을 배워요',
  icon: '🧠',
  color: '#10b981',
  unlockLevel: 1,
  totalMissions: 80,
  estimatedHours: 32,
  weeks: [
    // ============================================
    // Week 1: 알고리즘 입문 (10 missions, 4 hours)
    // ============================================
    {
      id: 'week-1',
      number: 1,
      title: '알고리즘 첫 만남',
      description: '알고리즘이 무엇인지 배우고, 첫 Python 코드를 작성해요',
      missions: [
        // Mission 1-2: 개념 소개 (interactive-lesson, 15분)
        {
          id: '1-1-1',
          title: '알고리즘이란 무엇일까?',
          description: '일상 속 알고리즘을 발견하고, 프로그래밍의 기초를 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          phase: 'use',
          isKeyMission: true,
          concept: '알고리즘의 정의',
          conceptExplanation: '알고리즘은 문제를 해결하기 위한 단계별 지시사항이에요. 라면 끓이기, 학교 가기, 게임 공략법 모두 알고리즘이에요!',
          learningObjectives: [
            '알고리즘의 개념을 이해한다',
            '일상 속 알고리즘을 찾을 수 있다',
            '컴퓨터 프로그램도 알고리즘임을 안다'
          ],
          realWorldExample: '아침에 학교 가는 순서: 1) 일어나기 → 2) 씻기 → 3) 옷 입기 → 4) 가방 챙기기 → 5) 등교',
          hints: [
            '요리 레시피를 생각해보세요',
            '순서가 중요한 일상 활동을 떠올려보세요',
            '게임 공략법도 일종의 알고리즘이에요'
          ],
          conceptCards: [
            {
              title: '알고리즘 = 레시피',
              description: '요리 레시피처럼 순서대로 따라하면 원하는 결과가 나와요',
              icon: '📖',
              example: '라면 끓이기: 물 끓이기 → 면 넣기 → 3분 기다리기 → 스프 넣기'
            },
            {
              title: '알고리즘 = 게임 공략',
              description: '마인크래프트에서 다이아몬드 찾는 방법도 알고리즘이에요',
              icon: '🎮',
              example: '다이아 찾기: Y 11층 가기 → 2칸 간격 채굴 → 다이아 발견!'
            },
            {
              title: '알고리즘 = 프로그램',
              description: '컴퓨터 프로그램은 컴퓨터가 실행하는 알고리즘이에요',
              icon: '💻',
              example: 'YouTube 추천: 시청 기록 분석 → 비슷한 영상 찾기 → 추천!'
            }
          ],
          checkQuestions: [
            {
              question: '다음 중 알고리즘이 아닌 것은?',
              options: ['라면 끓이는 방법', '좋아하는 음식', '학교 가는 길', '게임 공략법'],
              correctAnswer: 1,
              feedback: {
                correct: '정답이에요! 좋아하는 음식은 단계별 지시사항이 아니라 단순 정보예요.',
                incorrect: '알고리즘은 "단계별 지시사항"이에요. 좋아하는 음식은 순서가 없는 정보예요.'
              }
            },
            {
              question: '알고리즘에서 가장 중요한 것은?',
              options: ['빠른 속도', '순서', '복잡함', '긴 길이'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 순서가 바뀌면 결과가 달라져요. 옷 입기 전에 씻어야 하죠!',
                incorrect: '순서가 가장 중요해요. 샌드위치 만들 때 순서를 바꾸면 이상하겠죠?'
              }
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "알고리즘의 정의 이해하기",
                              "description": "컴퓨팅 사고력에서 배운 알고리즘의 정의의 핵심을 확인합니다.",
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
          id: '1-1-2',
          title: '컴퓨터와 대화하기',
          description: 'Python이 무엇인지 배우고, 첫 코드를 실행할 준비를 해요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          phase: 'use',
          concept: 'Python 프로그래밍 언어',
          conceptExplanation: 'Python은 컴퓨터와 대화하는 언어예요. 영어나 한국어처럼, Python으로 컴퓨터에게 명령을 내릴 수 있어요!',
          learningObjectives: [
            'Python이 프로그래밍 언어임을 이해한다',
            'print() 명령어의 역할을 안다',
            '코드를 작성하고 실행하는 과정을 이해한다'
          ],
          realWorldExample: 'YouTube, Instagram, Spotify 모두 Python으로 만들어졌어요!',
          hints: [
            'Python은 뱀이 아니라 프로그래밍 언어예요',
            'print()는 화면에 글자를 보여주는 명령이에요',
            '괄호 안에 쓴 내용이 화면에 나타나요'
          ],
          conceptCards: [
            {
              title: 'Python = 컴퓨터 언어',
              description: '한국어로 말하듯이, Python으로 컴퓨터에게 명령해요',
              icon: '🐍',
              example: 'print("안녕!") → 컴퓨터가 "안녕!"을 화면에 보여줘'
            },
            {
              title: 'print() = 말하기',
              description: 'print()는 컴퓨터가 말하게 하는 명령이에요',
              icon: '💬',
              example: 'print("Hello") → 화면에 Hello 출력'
            },
            {
              title: '따옴표 = 말풍선',
              description: '따옴표 안의 내용은 컴퓨터가 그대로 말해요',
              icon: '""',
              example: 'print("오늘 날씨 좋다!") → 오늘 날씨 좋다!'
            }
          ],
          checkQuestions: [
            {
              question: 'print("Hello")를 실행하면 무엇이 나올까요?',
              options: ['Hello', 'print', '"Hello"', '아무것도 안 나와요'],
              correctAnswer: 0,
              feedback: {
                correct: '정확해요! 따옴표 안의 내용이 그대로 화면에 나타나요.',
                incorrect: 'print()는 따옴표 안의 내용을 화면에 보여줘요. "Hello"가 나와요!'
              }
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "Python 프로그래밍 언어 이해하기",
                              "description": "컴퓨터와 대화하기에서 배운 Python 프로그래밍 언어의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3-5: 시각적 알고리즘 (drag-drop, visual-puzzle, 30분)
        {
          id: '1-1-3',
          title: '아침 준비 알고리즘',
          description: '학교 가는 순서를 올바르게 배열해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 8,
          phase: 'use',
          concept: '순차 실행',
          conceptExplanation: '순차 실행은 명령을 위에서 아래로 순서대로 실행하는 거예요. 순서가 바뀌면 결과도 달라져요!',
          learningObjectives: [
            '순차 실행의 개념을 이해한다',
            '올바른 순서를 판단할 수 있다',
            '순서가 바뀌면 결과가 달라짐을 안다'
          ],
          realWorldExample: '옷 입기 전에 씻어야 해요. 순서를 바꾸면 이상하겠죠?',
          hints: [
            '가장 먼저 해야 할 일은 일어나기예요',
            '신발은 집 나가기 직전에 신어요',
            '아침은 옷 입은 후에 먹어요'
          ],
          blocks: [
            '알람 끄기',
            '침대에서 일어나기',
            '세수하기',
            '이 닦기',
            '옷 입기',
            '아침 먹기',
            '가방 챙기기',
            '신발 신기',
            '집 나가기'
          ],
          correctBlocks: [
            '알람 끄기',
            '침대에서 일어나기',
            '세수하기',
            '이 닦기',
            '옷 입기',
            '아침 먹기',
            '가방 챙기기',
            '신발 신기',
            '집 나가기'
          ],
          commonMistakes: [
            '옷 입기 전에 아침 먹기 - 옷에 음식이 묻을 수 있어요',
            '신발 먼저 신기 - 집 안에서 신발 신고 돌아다니면 불편해요',
            '알람 끄지 않기 - 계속 울려서 시끄러워요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "순서 맞추기 연습",
                              "description": "간단한 순서를 맞춰봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "논리적 순서를 생각하세요",
                                        "앞뒤 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "순서를 완벽하게 맞췄어요!",
                                        "good": "논리적으로 잘 배열했어요!",
                                        "partial": "일부 순서가 틀렸어요.",
                                        "wrong": "처음부터 끝까지 흐름을 생각하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "3단계 배열",
                              "description": "3단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "시작, 중간, 끝을 생각하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "3단계를 완벽하게 배열했어요!",
                                        "good": "순서가 정확해요!",
                                        "partial": "일부만 맞았어요.",
                                        "wrong": "각 단계의 역할을 생각하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "5단계 배열",
                              "description": "5단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "단계를 하나씩 확인하세요",
                                        "빠진 단계가 없는지 체크하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "5단계를 완벽하게 배열했어요!",
                                        "good": "순서 감각이 좋아요!",
                                        "partial": "대부분 맞았어요. 일부만 수정하세요.",
                                        "wrong": "단계를 하나씩 차근차근 배열하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "복잡한 순서",
                              "description": "더 복잡한 단계를 올바르게 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "전체 과정을 상상하세요",
                                        "각 단계의 필요성을 생각하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "복잡한 순서도 완벽해요!",
                                        "good": "어려운 배열을 잘 했어요!",
                                        "partial": "핵심 순서는 맞아요. 세부를 다듬으세요.",
                                        "wrong": "전체 흐름을 그려보고 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "실생활 순서",
                              "description": "실생활 활동의 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "직접 해본다고 상상하세요",
                                        "자연스러운 순서를 찾으세요"
                              ],
                              "estimatedMinutes": 7,
                              "feedback": {
                                        "perfect": "실생활 순서를 완벽히 이해했어요!",
                                        "good": "자연스러운 순서예요!",
                                        "partial": "대체로 맞는데 일부 조정이 필요해요.",
                                        "wrong": "실제로 한다면 어떻게 할지 생각하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "조건부 순서",
                              "description": "조건에 따라 달라지는 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "조건을 먼저 확인하세요",
                                        "경우에 따른 차이를 파악하세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "조건부 순서를 완벽히 이해했어요!",
                                        "good": "조건을 잘 고려했어요!",
                                        "partial": "조건 처리에 실수가 있어요.",
                                        "wrong": "각 조건별로 나눠서 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적 순서 찾기",
                              "description": "가장 효율적인 순서를 찾습니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 비교하세요",
                                        "불필요한 단계를 제거하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "최적의 순서를 찾았어요!",
                                        "good": "효율적인 순서예요!",
                                        "partial": "좋지만 더 나은 순서가 있어요.",
                                        "wrong": "다양한 방법을 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "다중 경로 순서",
                              "description": "여러 경로가 있는 복잡한 순서를 배열합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "각 경로를 별도로 생각하세요",
                                        "합쳐지는 지점을 파악하세요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "복잡한 경로를 완벽히 배열했어요!",
                                        "good": "다중 경로를 잘 처리했어요!",
                                        "partial": "일부 경로에 오류가 있어요.",
                                        "wrong": "한 경로씩 차근차근 정리하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 순서",
                              "description": "프로젝트의 전체 순서를 기획합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "시작부터 완성까지 전체를 보세요",
                                        "의존 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "프로젝트 기획이 완벽해요!",
                                        "good": "전체 흐름을 잘 잡았어요!",
                                        "partial": "큰 흐름은 맞는데 세부 조정이 필요해요.",
                                        "wrong": "단계별 의존성을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 순서 배열",
                              "description": "최고 난이도의 순서 배열에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요소를 고려하세요",
                                        "논리적 오류가 없는지 검증하세요",
                                        "천천히 신중하게 배열하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "순서 배열의 달인이에요!",
                                        "good": "최고 난이도를 해결했어요!",
                                        "partial": "거의 다 맞았어요. 마지막 검토를 하세요.",
                                        "wrong": "복잡해도 포기하지 마세요. 단계별로 접근하세요."
                              }
                    }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-4',
          title: '샌드위치 만들기',
          description: '맛있는 샌드위치를 만드는 순서를 정해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          phase: 'modify',
          concept: '순차 실행',
          conceptExplanation: '요리도 알고리즘이에요! 순서를 잘못 지키면 이상한 음식이 될 수 있어요.',
          learningObjectives: [
            '요리 과정에서 순서의 중요성을 이해한다',
            '논리적 순서를 판단할 수 있다'
          ],
          realWorldExample: '피자 만들 때도 순서가 중요해요: 도우 → 소스 → 토핑 → 굽기',
          hints: [
            '재료는 가장 먼저 준비해요',
            '빵 위에 재료를 올려요',
            '마지막에 빵으로 덮고 자르면 완성!'
          ],
          blocks: [
            '재료 준비하기',
            '빵 한 장 놓기',
            '상추 올리기',
            '치즈 올리기',
            '햄 올리기',
            '토마토 올리기',
            '소스 뿌리기',
            '빵으로 덮기',
            '반으로 자르기'
          ],
          correctBlocks: [
            '재료 준비하기',
            '빵 한 장 놓기',
            '상추 올리기',
            '치즈 올리기',
            '햄 올리기',
            '토마토 올리기',
            '소스 뿌리기',
            '빵으로 덮기',
            '반으로 자르기'
          ],
          extensionActivities: [
            '자기만의 샌드위치 레시피를 만들어보세요',
            '가족과 함께 실제로 샌드위치를 만들어보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "순서 맞추기 연습",
                              "description": "간단한 순서를 맞춰봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "논리적 순서를 생각하세요",
                                        "앞뒤 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "순서를 완벽하게 맞췄어요!",
                                        "good": "논리적으로 잘 배열했어요!",
                                        "partial": "일부 순서가 틀렸어요.",
                                        "wrong": "처음부터 끝까지 흐름을 생각하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "3단계 배열",
                              "description": "3단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "시작, 중간, 끝을 생각하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "3단계를 완벽하게 배열했어요!",
                                        "good": "순서가 정확해요!",
                                        "partial": "일부만 맞았어요.",
                                        "wrong": "각 단계의 역할을 생각하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "5단계 배열",
                              "description": "5단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "단계를 하나씩 확인하세요",
                                        "빠진 단계가 없는지 체크하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "5단계를 완벽하게 배열했어요!",
                                        "good": "순서 감각이 좋아요!",
                                        "partial": "대부분 맞았어요. 일부만 수정하세요.",
                                        "wrong": "단계를 하나씩 차근차근 배열하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "복잡한 순서",
                              "description": "더 복잡한 단계를 올바르게 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "전체 과정을 상상하세요",
                                        "각 단계의 필요성을 생각하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "복잡한 순서도 완벽해요!",
                                        "good": "어려운 배열을 잘 했어요!",
                                        "partial": "핵심 순서는 맞아요. 세부를 다듬으세요.",
                                        "wrong": "전체 흐름을 그려보고 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "실생활 순서",
                              "description": "실생활 활동의 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "직접 해본다고 상상하세요",
                                        "자연스러운 순서를 찾으세요"
                              ],
                              "estimatedMinutes": 7,
                              "feedback": {
                                        "perfect": "실생활 순서를 완벽히 이해했어요!",
                                        "good": "자연스러운 순서예요!",
                                        "partial": "대체로 맞는데 일부 조정이 필요해요.",
                                        "wrong": "실제로 한다면 어떻게 할지 생각하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "조건부 순서",
                              "description": "조건에 따라 달라지는 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "조건을 먼저 확인하세요",
                                        "경우에 따른 차이를 파악하세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "조건부 순서를 완벽히 이해했어요!",
                                        "good": "조건을 잘 고려했어요!",
                                        "partial": "조건 처리에 실수가 있어요.",
                                        "wrong": "각 조건별로 나눠서 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적 순서 찾기",
                              "description": "가장 효율적인 순서를 찾습니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 비교하세요",
                                        "불필요한 단계를 제거하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "최적의 순서를 찾았어요!",
                                        "good": "효율적인 순서예요!",
                                        "partial": "좋지만 더 나은 순서가 있어요.",
                                        "wrong": "다양한 방법을 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "다중 경로 순서",
                              "description": "여러 경로가 있는 복잡한 순서를 배열합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "각 경로를 별도로 생각하세요",
                                        "합쳐지는 지점을 파악하세요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "복잡한 경로를 완벽히 배열했어요!",
                                        "good": "다중 경로를 잘 처리했어요!",
                                        "partial": "일부 경로에 오류가 있어요.",
                                        "wrong": "한 경로씩 차근차근 정리하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 순서",
                              "description": "프로젝트의 전체 순서를 기획합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "시작부터 완성까지 전체를 보세요",
                                        "의존 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "프로젝트 기획이 완벽해요!",
                                        "good": "전체 흐름을 잘 잡았어요!",
                                        "partial": "큰 흐름은 맞는데 세부 조정이 필요해요.",
                                        "wrong": "단계별 의존성을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 순서 배열",
                              "description": "최고 난이도의 순서 배열에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요소를 고려하세요",
                                        "논리적 오류가 없는지 검증하세요",
                                        "천천히 신중하게 배열하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "순서 배열의 달인이에요!",
                                        "good": "최고 난이도를 해결했어요!",
                                        "partial": "거의 다 맞았어요. 마지막 검토를 하세요.",
                                        "wrong": "복잡해도 포기하지 마세요. 단계별로 접근하세요."
                              }
                    }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-5',
          title: '로봇 청소기 프로그래밍',
          description: '로봇이 방을 청소하도록 명령 순서를 정해요',
          type: 'visual-puzzle',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          phase: 'modify',
          concept: '알고리즘 설계',
          conceptExplanation: '로봇도 프로그램대로 움직여요. 명령을 잘 설계하면 똑똑하게 일해요!',
          learningObjectives: [
            '구체적인 명령어로 알고리즘을 만든다',
            '로봇 관점에서 생각하는 법을 배운다'
          ],
          realWorldExample: '실제 로봇 청소기도 프로그램된 알고리즘으로 움직여요!',
          hints: [
            '로봇은 명령어를 순서대로 실행해요',
            '모든 칸을 지나가야 방이 깨끗해져요',
            '장애물은 피해서 가야 해요'
          ],
          blocks: [
            '위로 이동',
            '아래로 이동',
            '왼쪽으로 이동',
            '오른쪽으로 이동',
            '청소하기',
            '충전하러 가기'
          ],
          gridSize: { rows: 4, cols: 4 },
          startPosition: { row: 0, col: 0 },
          goalPosition: { row: 3, col: 3 },
          obstacles: [
            { row: 1, col: 1 },
            { row: 2, col: 2 }
          ],
          mustVisitAll: true,
          drawPath: true,
                    challenges: [
                    {
                              "id": "c1",
                              "title": "순서 맞추기 연습",
                              "description": "간단한 순서를 맞춰봅니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "논리적 순서를 생각하세요",
                                        "앞뒤 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "순서를 완벽하게 맞췄어요!",
                                        "good": "논리적으로 잘 배열했어요!",
                                        "partial": "일부 순서가 틀렸어요.",
                                        "wrong": "처음부터 끝까지 흐름을 생각하세요."
                              }
                    },
                    {
                              "id": "c2",
                              "title": "3단계 배열",
                              "description": "3단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "시작, 중간, 끝을 생각하세요"
                              ],
                              "estimatedMinutes": 3,
                              "feedback": {
                                        "perfect": "3단계를 완벽하게 배열했어요!",
                                        "good": "순서가 정확해요!",
                                        "partial": "일부만 맞았어요.",
                                        "wrong": "각 단계의 역할을 생각하세요."
                              }
                    },
                    {
                              "id": "c3",
                              "title": "5단계 배열",
                              "description": "5단계 순서를 올바르게 배열합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "단계를 하나씩 확인하세요",
                                        "빠진 단계가 없는지 체크하세요"
                              ],
                              "estimatedMinutes": 4,
                              "feedback": {
                                        "perfect": "5단계를 완벽하게 배열했어요!",
                                        "good": "순서 감각이 좋아요!",
                                        "partial": "대부분 맞았어요. 일부만 수정하세요.",
                                        "wrong": "단계를 하나씩 차근차근 배열하세요."
                              }
                    },
                    {
                              "id": "c4",
                              "title": "복잡한 순서",
                              "description": "더 복잡한 단계를 올바르게 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "전체 과정을 상상하세요",
                                        "각 단계의 필요성을 생각하세요"
                              ],
                              "estimatedMinutes": 6,
                              "feedback": {
                                        "perfect": "복잡한 순서도 완벽해요!",
                                        "good": "어려운 배열을 잘 했어요!",
                                        "partial": "핵심 순서는 맞아요. 세부를 다듬으세요.",
                                        "wrong": "전체 흐름을 그려보고 다시 시도하세요."
                              }
                    },
                    {
                              "id": "c5",
                              "title": "실생활 순서",
                              "description": "실생활 활동의 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "직접 해본다고 상상하세요",
                                        "자연스러운 순서를 찾으세요"
                              ],
                              "estimatedMinutes": 7,
                              "feedback": {
                                        "perfect": "실생활 순서를 완벽히 이해했어요!",
                                        "good": "자연스러운 순서예요!",
                                        "partial": "대체로 맞는데 일부 조정이 필요해요.",
                                        "wrong": "실제로 한다면 어떻게 할지 생각하세요."
                              }
                    },
                    {
                              "id": "c6",
                              "title": "조건부 순서",
                              "description": "조건에 따라 달라지는 순서를 배열합니다.",
                              "difficulty": "medium",
                              "hints": [
                                        "조건을 먼저 확인하세요",
                                        "경우에 따른 차이를 파악하세요"
                              ],
                              "estimatedMinutes": 8,
                              "feedback": {
                                        "perfect": "조건부 순서를 완벽히 이해했어요!",
                                        "good": "조건을 잘 고려했어요!",
                                        "partial": "조건 처리에 실수가 있어요.",
                                        "wrong": "각 조건별로 나눠서 생각하세요."
                              }
                    },
                    {
                              "id": "c7",
                              "title": "최적 순서 찾기",
                              "description": "가장 효율적인 순서를 찾습니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "여러 방법을 비교하세요",
                                        "불필요한 단계를 제거하세요"
                              ],
                              "estimatedMinutes": 10,
                              "feedback": {
                                        "perfect": "최적의 순서를 찾았어요!",
                                        "good": "효율적인 순서예요!",
                                        "partial": "좋지만 더 나은 순서가 있어요.",
                                        "wrong": "다양한 방법을 시도해보세요."
                              }
                    },
                    {
                              "id": "c8",
                              "title": "다중 경로 순서",
                              "description": "여러 경로가 있는 복잡한 순서를 배열합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "각 경로를 별도로 생각하세요",
                                        "합쳐지는 지점을 파악하세요"
                              ],
                              "estimatedMinutes": 12,
                              "feedback": {
                                        "perfect": "복잡한 경로를 완벽히 배열했어요!",
                                        "good": "다중 경로를 잘 처리했어요!",
                                        "partial": "일부 경로에 오류가 있어요.",
                                        "wrong": "한 경로씩 차근차근 정리하세요."
                              }
                    },
                    {
                              "id": "c9",
                              "title": "프로젝트 순서",
                              "description": "프로젝트의 전체 순서를 기획합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "시작부터 완성까지 전체를 보세요",
                                        "의존 관계를 파악하세요"
                              ],
                              "estimatedMinutes": 15,
                              "feedback": {
                                        "perfect": "프로젝트 기획이 완벽해요!",
                                        "good": "전체 흐름을 잘 잡았어요!",
                                        "partial": "큰 흐름은 맞는데 세부 조정이 필요해요.",
                                        "wrong": "단계별 의존성을 다시 확인하세요."
                              }
                    },
                    {
                              "id": "c10",
                              "title": "마스터 순서 배열",
                              "description": "최고 난이도의 순서 배열에 도전합니다.",
                              "difficulty": "hard",
                              "hints": [
                                        "모든 요소를 고려하세요",
                                        "논리적 오류가 없는지 검증하세요",
                                        "천천히 신중하게 배열하세요"
                              ],
                              "estimatedMinutes": 20,
                              "feedback": {
                                        "perfect": "순서 배열의 달인이에요!",
                                        "good": "최고 난이도를 해결했어요!",
                                        "partial": "거의 다 맞았어요. 마지막 검토를 하세요.",
                                        "wrong": "복잡해도 포기하지 마세요. 단계별로 접근하세요."
                              }
                    }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6-8: 첫 Python 출력 (coding, 30분)
        {
          id: '1-1-6',
          title: '내 첫 Python 코드: Hello!',
          description: 'print() 명령어로 화면에 글자를 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 10,
          phase: 'use',
          isKeyMission: true,
          concept: 'print() 함수',
          conceptExplanation: `print() 함수는 Python에서 가장 기본적인 출력 함수예요. 화면에 텍스트, 숫자, 계산 결과 등을 표시할 수 있어요. 게임에서 점수를 보여주거나, 앱에서 메시지를 띄우거나, 프로그램의 결과를 알려줄 때 사용해요.

예제 코드:
\`\`\`python
print("안녕하세요!")  # 문자열 출력
print(100)  # 숫자 출력
print("내 점수:", 95)  # 여러 값 출력
\`\`\`

모든 프로그램의 시작점이며, 코드가 제대로 작동하는지 확인할 때도 가장 많이 사용하는 명령이에요!`,
          learningObjectives: [
            'print() 함수를 사용할 수 있다',
            '따옴표의 역할을 이해한다',
            '코드를 작성하고 실행할 수 있다'
          ],
          realWorldExample: '게임에서 "미션 성공!"이 뜨는 것도 print()로 만든 거예요',
          starterCode: `# 여기에 코드를 작성하세요
# print("Hello, World!")를 입력해보세요

`,
          solution: `print("Hello, World!")`,
          expectedOutput: 'Hello, World!',
          hints: [
            'print() 괄호 안에 "Hello, World!"를 넣어보세요',
            '따옴표("")를 꼭 써야 해요',
            '대소문자를 정확히 맞춰보세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: 'Hello, World!',
              description: '"Hello, World!"를 정확히 출력해야 해요'
            },
            {
              input: '',
              expectedOutput: 'Hello, World!',
              description: '대소문자를 정확히 맞춰야 해요 (H와 W는 대문자)'
            },
            {
              input: '',
              expectedOutput: 'Hello, World!',
              description: '쉼표와 느낌표 위치를 정확히 지켜야 해요'
            },
            {
              input: '',
              expectedOutput: 'Hello, World!',
              description: 'print() 함수를 올바르게 사용해야 해요'
            }
          ],
          commonMistakes: [
            '따옴표 빼먹기 - print(Hello) ❌',
            '괄호 빼먹기 - print "Hello" ❌',
            'Print로 대문자 쓰기 - Print() ❌'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "print() 함수의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# print() 함수 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-7',
          title: '자기소개 프로그램',
          description: '내 이름과 나이를 출력하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 12,
          phase: 'modify',
          concept: 'print() 여러 줄',
          conceptExplanation: `print() 함수를 여러 번 사용하면 각각의 출력이 새로운 줄에 나타나요. 이것을 이용해서 여러 줄의 메시지나 정보를 표시할 수 있어요. 실제 앱에서 사용자 정보를 보여주거나, 게임에서 스토리를 전개하거나, 보고서를 만들 때 아주 유용해요.

예제 코드:
\`\`\`python
print("이름: 김민수")
print("나이: 12살")
print("학교: 코딩중학교")
\`\`\`

출력 결과:
이름: 김민수
나이: 12살
학교: 코딩중학교

각 print()가 자동으로 줄바꿈을 해주기 때문에 깔끔하게 정리된 출력을 만들 수 있어요!`,
          learningObjectives: [
            'print()를 여러 번 사용할 수 있다',
            '자기만의 내용으로 코드를 수정할 수 있다'
          ],
          realWorldExample: '앱 로그인하면 "환영합니다, OOO님!" 나오는 것도 이렇게 만들어요',
          starterCode: `# 자기소개 프로그램을 만들어요
# 이름과 나이를 출력하세요

print("내 이름은 민수입니다")
# 여기에 나이를 출력하는 코드를 추가하세요
`,
          solution: `print("내 이름은 민수입니다")
print("나는 10살입니다")`,
          expectedOutput: `내 이름은 민수입니다
나는 10살입니다`,
          hints: [
            'print()를 한 번 더 써보세요',
            '나이를 "나는 __살입니다" 형식으로 써보세요',
            '자신의 실제 이름과 나이로 바꿔보세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `내 이름은 민수입니다
나는 10살입니다`,
              description: '이름과 나이를 두 줄로 출력해야 해요'
            },
            {
              input: '',
              expectedOutput: `내 이름은 민수입니다
나는 10살입니다`,
              description: 'print()를 2번 사용해야 해요'
            },
            {
              input: '',
              expectedOutput: `내 이름은 민수입니다
나는 10살입니다`,
              description: '첫 줄에는 이름, 둘째 줄에는 나이가 나와야 해요'
            },
            {
              input: '',
              expectedOutput: `내 이름은 민수입니다
나는 10살입니다`,
              description: '각 줄의 형식을 정확히 지켜야 해요'
            }
          ],
          requirements: [
            'print()를 2번 사용하세요',
            '첫 줄에는 이름을 출력하세요',
            '둘째 줄에는 나이를 출력하세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "print() 여러 줄의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# print() 여러 줄 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-8',
          title: '좋아하는 것 3가지 출력',
          description: '내가 좋아하는 음식, 색깔, 취미를 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '여러 줄 출력',
          conceptExplanation: `print() 함수를 여러 번 사용하면 리스트처럼 여러 개의 정보를 깔끔하게 나열할 수 있어요. 이것은 실제 프로그램에서 정보 목록을 표시할 때 가장 많이 사용하는 방법이에요. Netflix의 영화 목록, 쇼핑몰의 장바구니, 게임의 아이템 인벤토리 등이 모두 이런 방식으로 만들어져요.

예제 코드:
\`\`\`python
print("좋아하는 음식: 피자")
print("좋아하는 색깔: 파란색")
print("좋아하는 취미: 게임")
\`\`\`

출력 결과:
좋아하는 음식: 피자
좋아하는 색깔: 파란색
좋아하는 취미: 게임

각 print()가 한 줄씩 정보를 출력하면서 보기 좋은 리스트가 만들어져요!`,
          learningObjectives: [
            'print()를 3번 이상 사용할 수 있다',
            '자기만의 내용으로 완전히 새 프로그램을 만든다'
          ],
          realWorldExample: 'Netflix에서 "내가 본 영화 목록" 보여주는 것도 이런 방식이에요',
          starterCode: `# 내가 좋아하는 것 3가지를 출력하세요
# 음식, 색깔, 취미를 각각 한 줄씩 출력하세요

`,
          solution: `print("좋아하는 음식: 피자")
print("좋아하는 색깔: 파란색")
print("좋아하는 취미: 게임")`,
          expectedOutput: null, // 자유 응답
          hints: [
            'print()를 3번 써보세요',
            '"좋아하는 음식: ___" 형식으로 써보세요',
            '자신이 진짜 좋아하는 것으로 채워보세요'
          ],
          requirements: [
            'print()를 3번 사용하세요',
            '좋아하는 음식을 출력하세요',
            '좋아하는 색깔을 출력하세요',
            '좋아하는 취미를 출력하세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "여러 줄 출력의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 여러 줄 출력 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 9: 미니 챌린지 (coding-modify, 20분)
        {
          id: '1-1-9',
          title: '시 쓰기 프로그램',
          description: '5줄짜리 짧은 시를 출력하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'create',
          concept: '창작 프로그래밍',
          conceptExplanation: `창작 프로그래밍은 배운 기술을 활용해서 자신만의 작품을 만드는 거예요. print() 함수만 알아도 시, 이야기, 게임 대사, 노래 가사 등 다양한 창작물을 코드로 표현할 수 있어요. 프로그래밍은 단순히 계산만 하는 게 아니라 예술 작품을 만드는 도구가 될 수도 있어요!

예제 코드 (계절 시):
\`\`\`python
print("봄이 왔어요")
print("꽃이 피어나고")
print("나비가 날아와")
print("따뜻한 바람이 불어요")
print("모두가 행복해요")
\`\`\`

프로그래머는 시인이 될 수도 있고, 작가가 될 수도 있고, 예술가가 될 수도 있어요!`,
          learningObjectives: [
            'print()를 자유롭게 활용할 수 있다',
            '창의적인 내용을 프로그램으로 만든다'
          ],
          realWorldExample: '작가가 쓴 소설이 전자책으로 나오는 것처럼, 시도 코드로 표현할 수 있어요',
          starterCode: `# 5줄짜리 시를 만들어보세요
# 주제는 자유예요 (계절, 친구, 가족, 학교 등)

`,
          solution: `print("겨울 아침")
print("하얀 눈이 내려와")
print("세상이 조용해")
print("나무도 잠들고")
print("모두가 평화로워")`,
          expectedOutput: null, // 자유 창작
          hints: [
            '5줄 시니까 print()를 5번 써보세요',
            '계절, 친구, 가족 등 주제를 정해보세요',
            '첫 줄은 제목으로 시작하면 좋아요'
          ],
          requirements: [
            'print()를 5번 사용하세요',
            '각 줄이 서로 연결된 내용이어야 해요',
            '첫 줄은 제목으로 시작하세요'
          ],
          extensionActivities: [
            '7줄 또는 10줄로 더 긴 시를 만들어보세요',
            '친구나 가족에게 시를 보여주고 반응을 들어보세요',
            '좋아하는 노래 가사를 출력해보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "창작 프로그래밍의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 창작 프로그래밍 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 10: 주간 프로젝트 (coding-create, 30분)
        {
          id: '1-1-10',
          title: '주간 프로젝트: 나를 소개합니다',
          description: '이름, 나이, 좋아하는 것, 꿈을 출력하는 멋진 자기소개 프로그램',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 150,
          estimatedMinutes: 30,
          phase: 'create',
          isWeeklyProject: true,
          isKeyMission: true,
          concept: '주간 프로젝트',
          conceptExplanation: `주간 프로젝트는 그 주에 배운 모든 개념과 기술을 활용해서 완성도 있는 프로그램을 만드는 특별한 미션이에요. 단순히 코드를 작성하는 것을 넘어서, 디자인하고, 구조화하고, 창의성을 발휘하는 연습이에요. 실제 프로그래머들도 매주 작은 프로젝트를 완성하면서 실력을 키워나가요!

예제 코드 (자기소개 프로그램):
\`\`\`python
print("====================")
print("  내 프로필  ")
print("====================")
print("이름: 김민수")
print("나이: 12살")
print("취미: 코딩, 게임")
print("꿈: 게임 개발자")
print("====================")
\`\`\`

주간 프로젝트를 완성하면 큰 성취감을 느낄 수 있고, 배운 내용이 확실하게 내 것이 되는 경험을 할 수 있어요!`,
          learningObjectives: [
            '배운 내용을 종합하여 완성도 있는 프로그램을 만든다',
            '창의성을 발휘하여 자기만의 프로그램을 디자인한다',
            '성취감을 느끼고 다음 주 학습 동기를 높인다'
          ],
          realWorldExample: '회원가입할 때 입력한 정보가 프로필 페이지에 나오는 것과 비슷해요',
          starterCode: `# 나를 소개하는 프로그램을 만들어요!
#
# 포함할 내용:
# 1. 이름
# 2. 나이
# 3. 좋아하는 음식 3가지
# 4. 좋아하는 색깔
# 5. 취미
# 6. 장래 희망
# 7. 특기
# 8. 좋아하는 과목
#
# 멋지게 꾸며보세요! (이모지, 선 등 활용)

`,
          solution: `print("=" * 30)
print("     내 프로필     ")
print("=" * 30)
print("")
print("이름: 김민수")
print("나이: 10살")
print("")
print("=== 좋아하는 것들 ===")
print("음식: 피자, 치킨, 떡볶이")
print("색깔: 파란색")
print("취미: 게임하기, 그림그리기")
print("")
print("=== 나의 꿈 ===")
print("장래희망: 게임 개발자")
print("특기: 코딩")
print("좋아하는 과목: 수학, 과학")
print("")
print("=" * 30)`,
          expectedOutput: null, // 자유 창작
          hints: [
            '제목을 먼저 만들고 시작해보세요',
            '섹션을 나눠서 정리하면 보기 좋아요',
            '빈 줄(print(""))을 넣으면 더 깔끔해요',
            '선(===)이나 별(*) 같은 걸로 꾸며보세요'
          ],
          requirements: [
            'print()를 최소 10번 사용하세요',
            '이름, 나이, 좋아하는 것, 꿈 모두 포함하세요',
            '제목이나 구분선으로 멋지게 꾸미세요',
            '최소 3가지 카테고리로 나눠서 정보를 정리하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '프로필 정보가 보기 좋게 정리되어 있어야 해요',
              description: '창의성과 완성도를 평가해요'
            }
          ],
          extensionActivities: [
            '가족이나 친구 프로필도 만들어보세요',
            '더 많은 정보를 추가해보세요 (좋아하는 영화, 책 등)',
            '아스키 아트로 더 멋지게 꾸며보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "주간 프로젝트의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 주간 프로젝트 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 2: 순차 실행 마스터 (10 missions, 4 hours)
    // ============================================
    {
      id: 'week-2',
      number: 2,
      title: '순서가 중요해요',
      description: '순차 실행을 완벽히 이해하고, 순서 바꾸기 실험을 해요',
      missions: [
        // Mission 1-2: 순서의 중요성 체험
        {
          id: '1-2-1',
          title: '순서를 바꾸면 어떻게 될까?',
          description: '같은 명령이라도 순서가 바뀌면 결과가 달라져요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          phase: 'use',
          isKeyMission: true,
          concept: '순서 의존성',
          conceptExplanation: '프로그래밍에서 순서는 매우 중요해요. 옷 입기 전에 씻어야 하듯이, 코드도 순서가 중요해요!',
          learningObjectives: [
            '순서가 결과에 미치는 영향을 이해한다',
            '순서 의존성 개념을 배운다',
            '디버깅 사고를 기른다'
          ],
          realWorldExample: '게임에서 무기를 먼저 사야 강화할 수 있듯이, 순서가 중요해요',
          conceptCards: [
            {
              title: '순서 바꾸기 실험',
              description: '같은 행동도 순서가 바뀌면 전혀 다른 결과가 나와요',
              icon: '🔄',
              example: '정상: 양치 → 물 마시기 vs 이상: 물 마시기 → 양치'
            },
            {
              title: '의존성',
              description: 'A가 끝나야 B를 할 수 있는 관계를 의존성이라고 해요',
              icon: '🔗',
              example: '신발 신기는 "옷 입기"에 의존해요'
            }
          ],
          checkQuestions: [
            {
              question: '다음 중 순서를 바꿔도 되는 것은?',
              options: [
                '옷 입기 → 신발 신기',
                '아침 먹기 → 이 닦기',
                '세수하기 → 이 닦기',
                '신발 신기 → 집 나가기'
              ],
              correctAnswer: 2,
              feedback: {
                correct: '맞아요! 세수와 양치는 순서가 바뀌어도 괜찮아요.',
                incorrect: '세수하기와 이 닦기는 순서를 바꿔도 괜찮아요. 나머지는 순서가 중요해요!'
              }
            }
          ],
          hints: [
            '의존성이 있는지 생각해보세요',
            '순서를 바꿨을 때 이상한지 확인해보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "순서 의존성 이해하기",
                              "description": "순서가 중요해요에서 배운 순서 의존성의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-2',
          title: '로봇에게 명령하기',
          description: '로봇은 명령을 정확한 순서대로 실행해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 15,
          phase: 'use',
          concept: '명령 순서',
          conceptExplanation: '로봇은 프로그램된 순서대로만 움직여요. 순서가 틀리면 목표에 도달할 수 없어요!',
          learningObjectives: [
            '순차적 명령을 설계할 수 있다',
            '로봇 관점에서 문제를 바라본다',
            '알고리즘을 시각적으로 테스트한다'
          ],
          realWorldExample: '자율주행 자동차도 프로그램된 명령을 순서대로 실행해요',
          hints: [
            '로봇은 왼쪽 위에서 시작해요',
            '오른쪽 아래까지 가야 해요',
            '벽은 통과할 수 없어요'
          ],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 0, col: 0 },
          goalPosition: { row: 4, col: 4 },
          obstacles: [
            { row: 1, col: 1 },
            { row: 2, col: 3 },
            { row: 3, col: 1 }
          ],
          blocks: ['위로', '아래로', '왼쪽으로', '오른쪽으로'],
          solutionSequence: ['오른쪽으로', '오른쪽으로', '아래로', '아래로', '오른쪽으로', '아래로', '오른쪽으로', '아래로'],
          maxCommands: 12,
          drawPath: true,
                    challenges: [
                    {
                              "id": "c1",
                              "title": "명령 순서 이해하기",
                              "description": "로봇에게 명령하기에서 배운 명령 순서의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3-5: Python 순차 명령
        {
          id: '1-2-3',
          title: '계산기 만들기 1단계',
          description: '숫자를 더하고 결과를 출력하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 12,
          phase: 'use',
          concept: '연산과 출력',
          conceptExplanation: 'Python은 계산기처럼 덧셈, 뺄셈을 할 수 있어요!',
          learningObjectives: [
            '기본 연산(+, -, *, /)을 사용할 수 있다',
            '계산 결과를 출력할 수 있다'
          ],
          realWorldExample: '쇼핑 앱에서 총 금액 계산하는 기능도 이렇게 만들어요',
          starterCode: `# 계산기 프로그램을 만들어요
# 10 + 5의 결과를 출력하세요

print(10 + 5)
`,
          solution: `print(10 + 5)`,
          expectedOutput: '15',
          hints: [
            'print() 안에 10 + 5를 넣으면 돼요',
            'Python이 자동으로 계산해줘요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '15',
              description: '10 + 5의 결과인 15가 출력되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "연산과 출력의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 연산과 출력 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-4',
          title: '여러 계산 한꺼번에',
          description: '덧셈, 뺄셈, 곱셈 결과를 순서대로 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '여러 연산',
          conceptExplanation: `Python에서는 한 프로그램 안에서 여러 가지 계산을 순서대로 수행할 수 있어요. 각 연산은 위에서 아래로 순차적으로 실행되며, 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)을 자유롭게 조합할 수 있어요. 게임에서 공격력 계산, 점수 합산, 아이템 가격 계산 등을 동시에 처리할 때 이런 방식을 사용해요!

예제 코드:
\`\`\`python
print("공격력:", 10 + 5)  # 15
print("방어력:", 20 - 3)  # 17
print("총 데미지:", 10 * 2)  # 20
print("회복량:", 100 / 4)  # 25.0
\`\`\`

여러 연산을 조합하면 복잡한 게임 로직이나 계산기 프로그램을 만들 수 있어요!`,
          learningObjectives: [
            '여러 연산을 순서대로 수행할 수 있다',
            '+, -, *, / 연산자를 모두 사용할 수 있다'
          ],
          realWorldExample: '게임에서 점수, 체력, 마나를 따로 계산하는 것과 같아요',
          starterCode: `# 여러 계산을 해봐요
print("10 + 5 =", 10 + 5)
# 여기에 10 - 3의 결과를 출력하세요
# 여기에 10 * 2의 결과를 출력하세요
`,
          solution: `print("10 + 5 =", 10 + 5)
print("10 - 3 =", 10 - 3)
print("10 * 2 =", 10 * 2)`,
          expectedOutput: `10 + 5 = 15
10 - 3 = 7
10 * 2 = 20`,
          hints: [
            'print()를 3번 써보세요',
            '뺄셈은 - 기호를 써요',
            '곱셈은 * 기호를 써요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `10 + 5 = 15
10 - 3 = 7
10 * 2 = 20`,
              description: '세 가지 계산 결과가 순서대로 나와야 해요'
            },
            {
              input: '',
              expectedOutput: `10 + 5 = 15
10 - 3 = 7
10 * 2 = 20`,
              description: '덧셈, 뺄셈, 곱셈을 모두 사용해야 해요'
            },
            {
              input: '',
              expectedOutput: `10 + 5 = 15
10 - 3 = 7
10 * 2 = 20`,
              description: '각 줄의 형식과 계산이 정확해야 해요'
            },
            {
              input: '',
              expectedOutput: `10 + 5 = 15
10 - 3 = 7
10 * 2 = 20`,
              description: 'print()를 3번 사용해야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "여러 연산의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 여러 연산 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-5',
          title: '나이 계산기',
          description: '태어난 년도를 입력하면 나이를 계산해줘요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'modify',
          concept: '실생활 계산',
          conceptExplanation: `프로그래밍의 가장 강력한 능력은 실생활의 문제를 자동화하고 해결하는 거예요! 나이 계산, 할인 가격 계산, 여행 경비 계산 등 일상의 모든 계산을 프로그램으로 만들 수 있어요. 변수에 값을 저장하고, 연산자로 계산하고, 결과를 출력하는 이 3단계만 알면 실용적인 프로그램을 만들 수 있어요!

예제 코드:
\`\`\`python
birth_year = 2014
current_year = 2024
age = current_year - birth_year
print("나이:", age)  # 나이: 10
\`\`\`

이런 간단한 계산 프로그램이 실제 웹사이트나 앱에서 수천만 명이 사용하는 기능이 돼요!`,
          learningObjectives: [
            '실생활 문제를 프로그래밍으로 해결한다',
            '뺄셈을 활용한 계산을 한다'
          ],
          realWorldExample: '회원가입할 때 생년월일로 나이를 자동 계산하는 기능',
          starterCode: `# 나이 계산기를 만들어요
# 2024 - 태어난 년도 = 나이

birth_year = 2014
current_year = 2024

# 여기에 나이를 계산하고 출력하세요
`,
          solution: `birth_year = 2014
current_year = 2024
age = current_year - birth_year
print("나이:", age)`,
          expectedOutput: `나이: 10`,
          hints: [
            '2024 - 2014를 계산하면 나이가 나와요',
            'age = current_year - birth_year 형식으로 계산하세요',
            'print("나이:", age)로 결과를 보여주세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '나이: 10',
              description: '나이 계산 결과가 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '나이: 10',
              description: 'current_year - birth_year 계산이 올바르게 되어야 해요'
            },
            {
              input: '',
              expectedOutput: '나이: 10',
              description: '변수를 사용하여 계산해야 해요'
            },
            {
              input: '',
              expectedOutput: '나이: 10',
              description: '출력 형식이 "나이: 10"과 정확히 일치해야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "실생활 계산의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 실생활 계산 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6-7: 순서 디버깅
        {
          id: '1-2-6',
          title: '코드 순서 고치기',
          description: '순서가 뒤죽박죽인 코드를 바르게 고쳐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '디버깅',
          conceptExplanation: `디버깅은 코드에서 버그(오류)를 찾아서 고치는 과정이에요. 실제 프로그래머들은 코드를 작성하는 시간만큼이나 디버깅에 시간을 써요! 특히 코드의 순서가 잘못되면 전혀 다른 결과가 나오기 때문에 논리적 순서를 잘 파악하는 것이 중요해요. 디버깅 능력은 프로그래머의 핵심 실력이에요!

예제 코드 (순서 문제):
\`\`\`python
# 잘못된 순서
print("3. 가방 챙기기")
print("1. 일어나기")
print("2. 옷 입기")

# 올바른 순서
print("1. 일어나기")
print("2. 옷 입기")
print("3. 가방 챙기기")
\`\`\`

디버깅을 잘하면 어떤 복잡한 프로그램도 고칠 수 있어요!`,
          learningObjectives: [
            '잘못된 순서를 찾아낼 수 있다',
            '논리적 순서로 코드를 재배열한다',
            '디버깅 능력을 기른다'
          ],
          realWorldExample: '게임 버그 수정도 이런 디버깅으로 해요',
          starterCode: `# 이 코드는 순서가 이상해요!
# 올바른 순서로 고쳐주세요

print("3. 가방을 챙겼어요")
print("1. 일어났어요")
print("4. 학교에 갔어요")
print("2. 옷을 입었어요")
`,
          solution: `print("1. 일어났어요")
print("2. 옷을 입었어요")
print("3. 가방을 챙겼어요")
print("4. 학교에 갔어요")`,
          expectedOutput: `1. 일어났어요
2. 옷을 입었어요
3. 가방을 챙겼어요
4. 학교에 갔어요`,
          hints: [
            '번호 순서대로 정렬하세요',
            '일어나는 것이 가장 먼저예요',
            '학교 가는 것이 마지막이에요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `1. 일어났어요
2. 옷을 입었어요
3. 가방을 챙겼어요
4. 학교에 갔어요`,
              description: '1, 2, 3, 4 순서대로 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: `1. 일어났어요
2. 옷을 입었어요
3. 가방을 챙겼어요
4. 학교에 갔어요`,
              description: '각 단계가 논리적 순서로 정렬되어야 해요'
            },
            {
              input: '',
              expectedOutput: `1. 일어났어요
2. 옷을 입었어요
3. 가방을 챙겼어요
4. 학교에 갔어요`,
              description: 'print() 문의 순서만 바꿔야 해요'
            },
            {
              input: '',
              expectedOutput: `1. 일어났어요
2. 옷을 입었어요
3. 가방을 챙겼어요
4. 학교에 갔어요`,
              description: '모든 줄이 올바른 위치에 있어야 해요'
            }
          ],
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-7',
          title: '요리 레시피 완성하기',
          description: '뒤섞인 요리 순서를 올바르게 정리해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'create',
          concept: '논리적 순서',
          conceptExplanation: `프로그래밍에서 논리적 순서는 매우 중요해요. 요리할 때 물을 먼저 끓이고 면을 넣는 것처럼, 코드도 논리적 순서를 따라야 해요. 실생활의 경험과 상식을 활용하면 코드의 올바른 순서를 판단할 수 있어요. 요리 앱, 조립 설명서, 게임 튜토리얼 등 모든 순차적 과정이 이런 논리로 만들어져요!

예제 코드 (라면 끓이기):
\`\`\`python
print("1. 냄비에 물 붓기")
print("2. 불 켜기")
print("3. 면 넣기")
print("4. 3분 기다리기")
print("5. 스프 넣기")
print("6. 맛있게 먹기")
\`\`\`

실생활 지식을 코딩에 적용하는 능력이 바로 컴퓨팅 사고력이에요!`,
          learningObjectives: [
            '논리적 순서를 스스로 판단한다',
            '실생활 지식을 코딩에 적용한다'
          ],
          realWorldExample: '요리 앱의 레시피도 이렇게 순서대로 보여줘요',
          starterCode: `# 라면 끓이는 순서를 올바르게 정리하세요
# 현재 순서가 이상해요!

print("스프를 넣는다")
print("냄비에 물을 붓는다")
print("맛있게 먹는다")
print("3분 기다린다")
print("불을 켠다")
print("면을 넣는다")
`,
          solution: `print("냄비에 물을 붓는다")
print("불을 켠다")
print("면을 넣는다")
print("3분 기다린다")
print("스프를 넣는다")
print("맛있게 먹는다")`,
          expectedOutput: `냄비에 물을 붓는다
불을 켠다
면을 넣는다
3분 기다린다
스프를 넣는다
맛있게 먹는다`,
          hints: [
            '물을 먼저 붓고 불을 켜요',
            '면을 넣고 기다려요',
            '마지막에 스프를 넣어요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `냄비에 물을 붓는다
불을 켠다
면을 넣는다
3분 기다린다
스프를 넣는다
맛있게 먹는다`,
              description: '논리적인 요리 순서로 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: `냄비에 물을 붓는다
불을 켠다
면을 넣는다
3분 기다린다
스프를 넣는다
맛있게 먹는다`,
              description: '물 붓기 → 불 켜기 → 면 넣기 순서가 맞아야 해요'
            },
            {
              input: '',
              expectedOutput: `냄비에 물을 붓는다
불을 켠다
면을 넣는다
3분 기다린다
스프를 넣는다
맛있게 먹는다`,
              description: '스프는 마지막에 넣어야 해요'
            },
            {
              input: '',
              expectedOutput: `냄비에 물을 붓는다
불을 켠다
면을 넣는다
3분 기다린다
스프를 넣는다
맛있게 먹는다`,
              description: '6단계가 모두 올바른 순서로 있어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "논리적 순서의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 논리적 순서 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 8-9: 복잡한 순차 프로그램
        {
          id: '1-2-8',
          title: '하루 일과 프로그램',
          description: '아침부터 저녁까지 일과를 순서대로 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 110,
          estimatedMinutes: 20,
          phase: 'create',
          concept: '복잡한 순차 실행',
          conceptExplanation: '많은 단계도 순서대로 정리하면 프로그램으로 만들 수 있어요!',
          learningObjectives: [
            '많은 단계를 순서대로 정리할 수 있다',
            '실생활을 프로그래밍으로 표현한다'
          ],
          realWorldExample: '스마트 알람 앱의 루틴 기능도 이렇게 만들어요',
          starterCode: `# 하루 일과를 프로그램으로 만들어요
# 아침 7시부터 저녁 9시까지
# 최소 10가지 활동을 순서대로 출력하세요

`,
          solution: `print("07:00 - 일어나기")
print("07:10 - 세수하기")
print("07:20 - 아침 먹기")
print("08:00 - 학교 가기")
print("12:00 - 점심 먹기")
print("15:00 - 수업 끝")
print("16:00 - 집에 도착")
print("17:00 - 숙제하기")
print("18:00 - 저녁 먹기")
print("19:00 - 게임하기")
print("20:00 - 씻기")
print("21:00 - 자기")`,
          expectedOutput: null,
          hints: [
            '시간 순서대로 써보세요',
            '아침, 점심, 저녁으로 나눠보세요',
            '학교 시간도 포함하세요'
          ],
          requirements: [
            'print()를 10번 이상 사용하세요',
            '시간 순서대로 작성하세요',
            '실제 하루 일과를 반영하세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "복잡한 순차 실행의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 복잡한 순차 실행 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-9',
          title: '게임 시나리오 만들기',
          description: '간단한 모험 게임의 스토리를 순서대로 출력해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 25,
          phase: 'create',
          concept: '스토리텔링 프로그래밍',
          conceptExplanation: '게임 스토리도 순차적으로 진행돼요. 프로그래밍으로 표현할 수 있어요!',
          learningObjectives: [
            '창의적인 스토리를 프로그래밍으로 만든다',
            '순차 실행을 게임에 적용한다'
          ],
          realWorldExample: 'RPG 게임의 스토리 진행도 이런 방식으로 만들어요',
          starterCode: `# 모험 게임 스토리를 만들어요
# 주인공이 마을 → 숲 → 동굴 → 보물을 찾는 이야기
# 최소 12줄 이상 작성하세요

`,
          solution: `print("=== 모험의 시작 ===")
print("주인공이 평화로운 마을에서 깨어났다")
print("마을 사람들이 숲 속 보물 이야기를 해줬다")
print("")
print("=== 숲 탐험 ===")
print("용감하게 어두운 숲으로 들어갔다")
print("길을 잃었지만 나침반을 발견했다")
print("")
print("=== 동굴 발견 ===")
print("신비로운 동굴을 발견했다")
print("조심스럽게 동굴 안으로 들어갔다")
print("")
print("=== 보물 획득 ===")
print("반짝이는 보물 상자를 발견했다!")
print("상자를 열자 황금 검이 나왔다")
print("마을로 돌아가 영웅이 되었다!")`,
          expectedOutput: null,
          hints: [
            '시작, 중간, 끝으로 나눠보세요',
            '섹션마다 제목을 붙이세요',
            '빈 줄로 구분하면 보기 좋아요'
          ],
          requirements: [
            'print()를 12번 이상 사용하세요',
            '시작-중간-끝 구조를 갖추세요',
            '모험 스토리가 논리적으로 진행되어야 해요'
          ],
          extensionActivities: [
            '더 긴 스토리를 만들어보세요',
            '다른 장르(SF, 판타지 등)로 만들어보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "스토리텔링 프로그래밍의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 스토리텔링 프로그래밍 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 10: 주간 프로젝트
        {
          id: '1-2-10',
          title: '주간 프로젝트: 나만의 레시피북',
          description: '좋아하는 요리 3가지의 레시피를 프로그램으로 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 200,
          estimatedMinutes: 35,
          phase: 'create',
          isWeeklyProject: true,
          isKeyMission: true,
          concept: '주간 프로젝트',
          conceptExplanation: '순차 실행을 완벽히 활용해서 멋진 레시피북을 만들어요!',
          learningObjectives: [
            '배운 모든 것을 종합하여 완성도 높은 프로그램을 만든다',
            '실생활 지식을 코드로 완벽히 표현한다',
            '프로젝트 완성의 성취감을 느낀다'
          ],
          realWorldExample: '쿠팡이츠, 배달의민족 앱의 레시피 기능도 이렇게 만들어요',
          starterCode: `# 나만의 레시피북 프로그램
#
# 포함할 내용:
# 1. 레시피북 제목과 설명
# 2. 첫 번째 요리 레시피 (재료, 순서)
# 3. 두 번째 요리 레시피
# 4. 세 번째 요리 레시피
# 5. 마무리 메시지
#
# 요구사항:
# - 각 레시피는 최소 5단계 이상
# - 재료 목록 포함
# - 섹션 구분 명확히
# - 보기 좋게 꾸미기

`,
          solution: `print("=" * 40)
print("      나만의 레시피북      ")
print("       by 김민수")
print("=" * 40)
print()

print("【 레시피 1: 김치볶음밥 】")
print("-" * 40)
print("[재료]")
print("- 밥 1공기")
print("- 김치 반 컵")
print("- 계란 1개")
print("- 참기름 1스푼")
print()
print("[만드는 법]")
print("1. 프라이팬에 기름을 두른다")
print("2. 김치를 볶는다")
print("3. 밥을 넣고 같이 볶는다")
print("4. 계란을 넣는다")
print("5. 참기름을 넣고 완성!")
print()

print("【 레시피 2: 계란 샌드위치 】")
print("-" * 40)
print("[재료]")
print("- 식빵 2장")
print("- 계란 2개")
print("- 소금 약간")
print("- 버터")
print()
print("[만드는 법]")
print("1. 계란을 삶는다")
print("2. 삶은 계란을 으깬다")
print("3. 소금으로 간한다")
print("4. 식빵에 버터를 바른다")
print("5. 계란을 올리고 빵으로 덮기")
print()

print("【 레시피 3: 초코 우유 】")
print("-" * 40)
print("[재료]")
print("- 우유 1컵")
print("- 초코 시럽 2스푼")
print("- 얼음")
print()
print("[만드는 법]")
print("1. 컵에 얼음을 넣는다")
print("2. 우유를 붓는다")
print("3. 초코 시럽을 넣는다")
print("4. 잘 저어준다")
print("5. 맛있게 마신다!")
print()

print("=" * 40)
print("  즐거운 요리 되세요! 😊")
print("=" * 40)`,
          expectedOutput: null,
          hints: [
            '각 레시피마다 제목을 붙이세요',
            '재료와 만드는 법을 구분하세요',
            '선이나 빈 줄로 깔끔하게 정리하세요',
            '자신이 실제로 만들 수 있는 요리를 선택하세요'
          ],
          requirements: [
            'print()를 30번 이상 사용하세요',
            '3가지 레시피를 모두 포함하세요',
            '각 레시피는 재료 목록이 있어야 해요',
            '각 레시피는 5단계 이상의 과정이 있어야 해요',
            '섹션 구분이 명확해야 해요',
            '제목과 마무리가 있어야 해요'
          ],
          extensionActivities: [
            '5가지 이상의 레시피를 추가해보세요',
            '난이도별로 분류해보세요 (쉬움/보통/어려움)',
            '조리 시간 정보를 추가해보세요',
            '가족에게 레시피북을 보여주고 함께 요리해보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "주간 프로젝트의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 주간 프로젝트 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 3: 패턴 인식 (10 missions, 4 hours)
    // ============================================
    {
      id: 'week-3',
      number: 3,
      title: '패턴을 찾아라!',
      description: '반복되는 패턴을 발견하고, Python 반복문을 맛보아요',
      missions: [
        // Mission 1-2: 패턴 인식 기초
        {
          id: '1-3-1',
          title: '패턴이란 무엇일까?',
          description: '일상 속 반복되는 패턴을 찾아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          phase: 'use',
          isKeyMission: true,
          concept: '패턴 인식',
          conceptExplanation: '패턴은 규칙적으로 반복되는 것이에요. 패턴을 찾으면 문제를 쉽게 풀 수 있어요!',
          learningObjectives: [
            '패턴의 개념을 이해한다',
            '일상에서 패턴을 찾을 수 있다',
            '패턴이 프로그래밍에 중요함을 안다'
          ],
          realWorldExample: '음악의 후렴구, 벽지 무늬, 시간표 모두 패턴이에요',
          conceptCards: [
            {
              title: '반복 패턴',
              description: '같은 것이 계속 반복되는 패턴',
              icon: '🔄',
              example: '🔴🔵🔴🔵🔴🔵'
            },
            {
              title: '증가 패턴',
              description: '점점 커지거나 늘어나는 패턴',
              icon: '📈',
              example: '1, 2, 3, 4, 5...'
            },
            {
              title: '규칙 패턴',
              description: '특정 규칙을 따르는 패턴',
              icon: '✨',
              example: '2, 4, 6, 8... (2씩 증가)'
            }
          ],
          checkQuestions: [
            {
              question: '🔴🔵🔴🔵🔴🔵 다음에 올 것은?',
              options: ['🔴', '🔵', '🟡', '🟢'],
              correctAnswer: 0,
              feedback: {
                correct: '정답! 🔴🔵이 반복되니까 다음은 🔴예요',
                incorrect: '🔴🔵이 반복되는 패턴이에요'
              }
            },
            {
              question: '2, 4, 6, 8, 다음 숫자는?',
              options: ['9', '10', '11', '12'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 2씩 증가하니까 10이에요',
                incorrect: '2씩 증가하는 패턴이에요'
              }
            }
          ],
          hints: [
            '반복되는 것을 찾아보세요',
            '어떤 규칙이 있는지 생각해보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "패턴 인식 이해하기",
                              "description": "패턴을 찾아라!에서 배운 패턴 인식의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-2',
          title: '패턴 찾기 게임',
          description: '여러 가지 패턴을 찾고 다음 것을 예측해요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          phase: 'use',
          concept: '패턴 발견',
          conceptExplanation: '패턴을 찾으면 다음에 올 것을 예측할 수 있어요!',
          learningObjectives: [
            '다양한 패턴을 식별할 수 있다',
            '패턴의 규칙을 발견한다',
            '논리적 사고력을 기른다'
          ],
          realWorldExample: '날씨 예보도 과거 패턴을 분석해서 예측해요',
          hints: [
            '처음 몇 개를 잘 관찰하세요',
            '무엇이 반복되는지 찾으세요',
            '숫자가 어떻게 변하는지 보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "패턴 발견 이해하기",
                              "description": "패턴 찾기 게임에서 배운 패턴 발견의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3-5: 코드에서 패턴 찾기
        {
          id: '1-3-3',
          title: '반복되는 코드 발견',
          description: '같은 코드가 계속 반복되고 있어요. 어떻게 줄일까요?',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'use',
          concept: '코드 반복 발견',
          conceptExplanation: '같은 코드를 여러 번 쓰는 대신, 반복문을 쓰면 간단해져요!',
          learningObjectives: [
            '반복되는 코드를 발견한다',
            '비효율을 인식한다',
            '반복문의 필요성을 이해한다'
          ],
          realWorldExample: '100명에게 생일 축하 메시지 보낼 때 일일이 치지 않고 반복문을 써요',
          starterCode: `# 이 코드는 같은 것을 계속 반복하고 있어요
print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")

# 5번이나 똑같은 걸 썼네요!
# 다음 미션에서 더 좋은 방법을 배울 거예요
`,
          solution: `print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")
print("안녕하세요!")`,
          expectedOutput: `안녕하세요!
안녕하세요!
안녕하세요!
안녕하세요!
안녕하세요!`,
          hints: [
            '코드를 실행해보세요',
            '무엇이 반복되는지 관찰하세요',
            '더 좋은 방법이 있을 것 같나요?'
          ],
          conceptCards: [
            {
              title: 'DRY 원칙',
              description: "Don't Repeat Yourself - 같은 코드를 반복하지 마세요",
              icon: '🔁',
              example: '같은 코드 5번 vs 반복문 1번'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "코드 반복 발견의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 코드 반복 발견 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-4',
          title: '숫자 패턴 출력하기',
          description: '1부터 10까지 출력하는데, 일일이 다 써야 할까요?',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 12,
          phase: 'use',
          concept: '숫자 패턴',
          conceptExplanation: '1, 2, 3, 4... 같은 숫자 패턴도 반복문으로 쉽게 만들 수 있어요',
          learningObjectives: [
            '숫자 패턴을 인식한다',
            '반복문 필요성을 더 깊이 이해한다'
          ],
          realWorldExample: '온라인 시험의 문제 번호도 반복문으로 자동 생성해요',
          starterCode: `# 1부터 10까지 출력하기
print(1)
print(2)
print(3)
print(4)
print(5)
print(6)
print(7)
print(8)
print(9)
print(10)

# 10줄이나 써야 해요... 더 좋은 방법이 있을까요?
`,
          solution: `print(1)
print(2)
print(3)
print(4)
print(5)
print(6)
print(7)
print(8)
print(9)
print(10)`,
          expectedOutput: `1
2
3
4
5
6
7
8
9
10`,
          hints: [
            '숫자가 1씩 증가하고 있어요',
            '이런 패턴을 쉽게 만드는 방법이 있을 거예요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "숫자 패턴의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 숫자 패턴 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-5',
          title: 'for문 첫 만남',
          description: 'Python의 for문으로 반복을 쉽게 만들어요!',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'use',
          isKeyMission: true,
          concept: 'for 반복문',
          conceptExplanation: 'for문은 같은 일을 여러 번 반복할 때 쓰는 마법 같은 명령이에요!',
          learningObjectives: [
            'for문의 기본 구조를 이해한다',
            'range()의 역할을 안다',
            '반복문을 실행할 수 있다'
          ],
          realWorldExample: 'YouTube 재생목록 자동 재생도 for문으로 만들어요',
          starterCode: `# for문으로 "안녕!"을 5번 출력해봐요

for i in range(5):
    print("안녕!")

# 단 2줄로 5번 출력했어요!
`,
          solution: `for i in range(5):
    print("안녕!")`,
          expectedOutput: `안녕!
안녕!
안녕!
안녕!
안녕!`,
          hints: [
            'range(5)는 0부터 4까지 5번 반복해요',
            'print 앞에 공백(들여쓰기) 4칸을 꼭 넣으세요',
            '들여쓰기가 중요해요!'
          ],
          conceptCards: [
            {
              title: 'for문 구조',
              description: 'for 변수 in range(횟수):',
              icon: '🔄',
              example: 'for i in range(3): → 3번 반복'
            },
            {
              title: '들여쓰기',
              description: '반복할 코드는 들여쓰기(4칸)를 해야 해요',
              icon: '→',
              example: 'for i in range(5):\n    print("Hi")'
            },
            {
              title: 'range()',
              description: 'range(n)은 0부터 n-1까지 숫자를 만들어요',
              icon: '🔢',
              example: 'range(3) → 0, 1, 2'
            }
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `안녕!
안녕!
안녕!
안녕!
안녕!`,
              description: '"안녕!"이 5번 출력되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "for 반복문의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# for 반복문 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6-8: for문 연습
        {
          id: '1-3-6',
          title: '1부터 10까지 쉽게 출력',
          description: 'for문으로 숫자를 10번 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: 'for문 활용',
          conceptExplanation: 'for문 안에서 변수(i)를 사용하면 숫자를 하나씩 출력할 수 있어요',
          learningObjectives: [
            'for문에서 변수를 활용한다',
            'range()로 숫자 범위를 지정한다'
          ],
          realWorldExample: '게시판의 게시물 번호도 이렇게 자동으로 붙여요',
          starterCode: `# for문으로 1부터 10까지 출력하세요

for i in range(1, 11):
    print(i)

# range(1, 11)은 1부터 10까지예요
`,
          solution: `for i in range(1, 11):
    print(i)`,
          expectedOutput: `1
2
3
4
5
6
7
8
9
10`,
          hints: [
            'range(1, 11)은 1부터 10까지예요',
            'print(i)로 변수 i를 출력해요',
            '들여쓰기를 꼭 하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `1
2
3
4
5
6
7
8
9
10`,
              description: '1부터 10까지 숫자가 순서대로 출력되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "for문 활용의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# for문 활용 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-7',
          title: '구구단 2단',
          description: 'for문으로 2단을 출력해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'modify',
          concept: 'for문 + 연산',
          conceptExplanation: 'for문 안에서 계산도 할 수 있어요!',
          learningObjectives: [
            'for문에서 연산을 수행한다',
            '실생활 문제를 for문으로 해결한다'
          ],
          realWorldExample: '온라인 쇼핑몰의 수량별 가격 계산도 이런 방식이에요',
          starterCode: `# 2단 구구단을 출력하세요
# 2 x 1 = 2
# 2 x 2 = 4
# ...
# 2 x 9 = 18

for i in range(1, 10):
    # 여기에 코드를 작성하세요
    pass
`,
          solution: `for i in range(1, 10):
    print("2 x", i, "=", 2 * i)`,
          expectedOutput: `2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18`,
          hints: [
            'range(1, 10)으로 1부터 9까지 반복해요',
            'print("2 x", i, "=", 2 * i) 형식으로 출력해요',
            '2 * i로 2단 계산을 해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18`,
              description: '2단 구구단이 정확히 출력되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "for문 + 연산의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# for문 + 연산 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-8',
          title: '별 그리기',
          description: 'for문으로 별(*)을 그려요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 110,
          estimatedMinutes: 20,
          phase: 'create',
          concept: 'for문 창작',
          conceptExplanation: 'for문으로 다양한 모양을 그릴 수 있어요!',
          learningObjectives: [
            'for문으로 패턴을 만든다',
            '문자열 반복을 활용한다'
          ],
          realWorldExample: '게임에서 체력바나 진행바도 이렇게 그려요',
          starterCode: `# 별(*)을 5줄 출력하세요
# *
# **
# ***
# ****
# *****

for i in range(1, 6):
    # 여기에 코드를 작성하세요
    pass
`,
          solution: `for i in range(1, 6):
    print("*" * i)`,
          expectedOutput: `*
**
***
****
*****`,
          hints: [
            '"*" * i는 별을 i개 만들어요',
            '"*" * 3은 "***"이 돼요',
            'i가 1부터 5까지 증가해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `*
**
***
****
*****`,
              description: '별이 1개부터 5개까지 증가해야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "for문 창작의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# for문 창작 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 9: 챌린지
        {
          id: '1-3-9',
          title: '역순 카운트다운',
          description: '10부터 1까지 거꾸로 세어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 22,
          phase: 'create',
          concept: '역순 반복',
          conceptExplanation: 'range()를 거꾸로 사용할 수도 있어요!',
          learningObjectives: [
            'range()의 step 매개변수를 이해한다',
            '역순 반복을 구현한다'
          ],
          realWorldExample: '로켓 발사 카운트다운, 게임 타이머도 이렇게 만들어요',
          starterCode: `# 10부터 1까지 거꾸로 세세요
# 그리고 마지막에 "발사!" 출력

# range(10, 0, -1)은 10부터 1까지 거꾸로 가요

`,
          solution: `for i in range(10, 0, -1):
    print(i)
print("발사!")`,
          expectedOutput: `10
9
8
7
6
5
4
3
2
1
발사!`,
          hints: [
            'range(10, 0, -1)로 거꾸로 세요',
            '10부터 1까지 출력해요',
            '마지막에 "발사!" 출력하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: `10
9
8
7
6
5
4
3
2
1
발사!`,
              description: '10부터 1까지 거꾸로 센 후 "발사!"가 나와야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "역순 반복의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 역순 반복 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 10: 주간 프로젝트
        {
          id: '1-3-10',
          title: '주간 프로젝트: 구구단 전체 출력기',
          description: '2단부터 9단까지 모든 구구단을 출력하는 프로그램',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 250,
          estimatedMinutes: 40,
          phase: 'create',
          isWeeklyProject: true,
          isKeyMission: true,
          concept: '중첩 반복문',
          conceptExplanation: 'for문 안에 또 for문을 쓸 수 있어요! 구구단 전체를 쉽게 만들 수 있어요',
          learningObjectives: [
            '중첩 반복문을 이해한다',
            '복잡한 패턴을 프로그래밍으로 만든다',
            '완성도 높은 프로젝트를 만든다'
          ],
          realWorldExample: '수학 학습 앱의 구구단 기능도 이렇게 만들어요',
          starterCode: `# 구구단 2단부터 9단까지 모두 출력하세요
#
# 요구사항:
# 1. 각 단마다 제목 출력 (예: === 2단 ===)
# 2. 1부터 9까지 곱셈 출력
# 3. 각 단 사이에 빈 줄 추가
# 4. 멋지게 꾸미기
#
# 힌트: for문 2개를 사용하세요!

`,
          solution: `print("=" * 30)
print("    구구단 전체")
print("=" * 30)
print()

for dan in range(2, 10):
    print(f"=== {dan}단 ===")
    for i in range(1, 10):
        print(f"{dan} x {i} = {dan * i}")
    print()

print("=" * 30)
print("완료!")`,
          expectedOutput: null,
          hints: [
            '바깥 for문으로 2단부터 9단을 반복하세요',
            '안쪽 for문으로 1부터 9까지 곱셈을 반복하세요',
            'print()로 빈 줄을 넣으면 보기 좋아요',
            '제목과 구분선을 추가하세요'
          ],
          requirements: [
            '2단부터 9단까지 모두 출력하세요',
            '각 단마다 제목을 붙이세요',
            '각 단은 1부터 9까지 곱셈이 있어야 해요',
            '단 사이에 빈 줄을 넣으세요',
            '전체 제목과 마무리 메시지를 넣으세요'
          ],
          extensionActivities: [
            '사용자가 원하는 단만 출력하게 만들어보세요',
            '가로로 구구단을 출력해보세요',
            '색깔이나 이모지로 더 예쁘게 꾸며보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "중첩 반복문의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 중첩 반복문 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 4: 조건 분기 (10 missions, 4 hours)
    // ============================================
    {
      id: 'week-4',
      number: 4,
      title: '만약에... 그렇다면?',
      description: '조건에 따라 다른 행동을 하는 프로그램을 만들어요',
      missions: [
        // Mission 1-2: 조건 사고 기초
        {
          id: '1-4-1',
          title: '조건부 사고란?',
          description: '"만약 ~라면 ~한다"는 우리가 매일 하는 생각이에요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          phase: 'use',
          isKeyMission: true,
          concept: '조건문 개념',
          conceptExplanation: '조건문은 상황에 따라 다르게 행동하는 명령이에요. 실생활에서도 항상 쓰고 있어요!',
          learningObjectives: [
            '조건부 사고를 이해한다',
            '일상 속 조건문을 발견한다',
            'if의 필요성을 안다'
          ],
          realWorldExample: '비 오면 우산, 안 오면 모자. 이것도 조건문이에요!',
          conceptCards: [
            {
              title: 'IF (만약)',
              description: '조건이 참이면 실행해요',
              icon: '🤔',
              example: '만약 배고프면 → 밥 먹기'
            },
            {
              title: 'ELSE (아니면)',
              description: '조건이 거짓이면 실행해요',
              icon: '↔️',
              example: '안 배고프면 → 공부하기'
            },
            {
              title: '조건 판단',
              description: '참인지 거짓인지 확인해요',
              icon: '✅',
              example: '비가 오는가? 예/아니오'
            }
          ],
          checkQuestions: [
            {
              question: '다음 중 조건문이 아닌 것은?',
              options: [
                '비 오면 우산 쓰기',
                '시험 100점이면 칭찬받기',
                '매일 아침 일어나기',
                '추우면 옷 입기'
              ],
              correctAnswer: 2,
              feedback: {
                correct: '맞아요! "매일"은 조건이 아니라 항상 하는 거예요',
                incorrect: '"매일 아침"은 조건이 없어요. 나머지는 "~면"이라는 조건이 있어요'
              }
            }
          ],
          hints: [
            '"~면"이라는 말이 나오면 조건이에요',
            '상황에 따라 달라지는 것을 생각해보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "조건문 개념 이해하기",
                              "description": "만약에... 그렇다면?에서 배운 조건문 개념의 핵심을 확인합니다.",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-2',
          title: '선택 게임',
          description: '여러 상황에서 올바른 선택을 해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          phase: 'use',
          concept: '조건부 판단',
          conceptExplanation: '조건을 보고 올바른 선택을 하는 연습을 해요',
          learningObjectives: [
            '조건을 읽고 판단한다',
            '논리적 사고를 기른다'
          ],
          realWorldExample: '게임에서 선택지에 따라 스토리가 바뀌는 것도 조건문이에요',
          hints: [
            '조건을 잘 읽어보세요',
            '각 선택의 결과를 생각해보세요'
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3-5: Python if문
        {
          id: '1-4-3',
          title: 'if문 첫 만남',
          description: 'Python의 if문을 처음 사용해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 15,
          phase: 'use',
          isKeyMission: true,
          concept: 'if문 기초',
          conceptExplanation: 'if는 "만약 ~라면"이라는 뜻이에요. 조건이 참일 때만 코드를 실행해요!',
          learningObjectives: [
            'if문의 기본 구조를 이해한다',
            '조건식을 작성할 수 있다',
            '들여쓰기의 중요성을 안다'
          ],
          realWorldExample: '로그인할 때 비밀번호가 맞으면 로그인, 틀리면 실패 메시지',
          starterCode: `# if문을 사용해봐요
age = 10

if age >= 10:
    print("초등학생이에요!")

# age가 10 이상이면 출력돼요
`,
          solution: `age = 10

if age >= 10:
    print("초등학생이에요!")`,
          expectedOutput: `초등학생이에요!`,
          hints: [
            'if 조건: 형식으로 써요',
            '>= 는 "이상"이라는 뜻이에요',
            '들여쓰기(4칸)를 꼭 하세요'
          ],
          conceptCards: [
            {
              title: 'if문 구조',
              description: 'if 조건:\n    실행할 코드',
              icon: '📝',
              example: 'if age >= 10:\n    print("초등학생")'
            },
            {
              title: '비교 연산자',
              description: '>, <, >=, <=, ==, !=',
              icon: '⚖️',
              example: 'age >= 10 (10 이상인가?)'
            }
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '초등학생이에요!',
              description: 'age가 10이므로 메시지가 출력되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "if문 기초의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# if문 기초 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-4',
          title: 'if-else 배우기',
          description: '조건이 참일 때와 거짓일 때를 모두 처리해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 18,
          phase: 'modify',
          concept: 'if-else',
          conceptExplanation: 'else는 "그렇지 않으면"이라는 뜻이에요. if 조건이 거짓일 때 실행돼요',
          learningObjectives: [
            'if-else 구조를 이해한다',
            '양방향 조건 처리를 할 수 있다'
          ],
          realWorldExample: '게임에서 체력이 0이면 게임 오버, 아니면 계속',
          starterCode: `# if-else를 사용해봐요
score = 85

if score >= 90:
    print("A등급이에요!")
else:
    print("더 노력해요!")

# score가 85니까 else가 실행돼요
`,
          solution: `score = 85

if score >= 90:
    print("A등급이에요!")
else:
    print("더 노력해요!")`,
          expectedOutput: `더 노력해요!`,
          hints: [
            'else: 다음에는 조건이 없어요',
            'if와 else의 들여쓰기를 맞추세요',
            '85는 90보다 작으니까 else가 실행돼요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '더 노력해요!',
              description: 'score가 90 미만이므로 else가 실행되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "if-else의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# if-else 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-5',
          title: '온도에 따른 옷차림',
          description: '온도를 보고 어떤 옷을 입을지 알려주는 프로그램',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 110,
          estimatedMinutes: 20,
          phase: 'modify',
          concept: 'if-elif-else',
          conceptExplanation: 'elif는 "그것도 아니고 만약 ~라면"이에요. 여러 조건을 확인할 때 써요',
          learningObjectives: [
            'if-elif-else 구조를 이해한다',
            '다중 조건을 처리할 수 있다'
          ],
          realWorldExample: '날씨 앱이 온도별로 다른 조언을 주는 것도 이렇게 만들어요',
          starterCode: `# 온도에 따라 다른 메시지를 출력하세요
temp = 15

if temp >= 25:
    print("반팔 입으세요")
elif temp >= 15:
    print("긴팔 입으세요")
else:
    print("패딩 입으세요")

# temp가 15니까 elif가 실행돼요
`,
          solution: `temp = 15

if temp >= 25:
    print("반팔 입으세요")
elif temp >= 15:
    print("긴팔 입으세요")
else:
    print("패딩 입으세요")`,
          expectedOutput: `긴팔 입으세요`,
          hints: [
            'elif는 여러 개 쓸 수 있어요',
            '위에서부터 순서대로 확인해요',
            '15는 25보다 작고 15 이상이에요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '긴팔 입으세요',
              description: 'temp가 15이므로 두 번째 조건이 실행되어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "if-elif-else의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# if-elif-else 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6-8: 실전 조건문
        {
          id: '1-4-6',
          title: '점수 등급 판정기',
          description: '시험 점수를 입력하면 등급을 알려줘요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 120,
          estimatedMinutes: 22,
          phase: 'create',
          concept: '다중 조건',
          conceptExplanation: '여러 조건을 차례로 확인해서 정확한 등급을 판정해요',
          learningObjectives: [
            '복잡한 다중 조건을 구현한다',
            '실생활 문제를 해결한다'
          ],
          realWorldExample: '온라인 시험 사이트의 등급 판정 시스템',
          starterCode: `# 점수에 따라 등급을 출력하세요
# 90점 이상: A
# 80점 이상: B
# 70점 이상: C
# 60점 이상: D
# 그 외: F

score = 88

# 여기에 코드를 작성하세요
`,
          solution: `score = 88

if score >= 90:
    print("등급: A")
elif score >= 80:
    print("등급: B")
elif score >= 70:
    print("등급: C")
elif score >= 60:
    print("등급: D")
else:
    print("등급: F")`,
          expectedOutput: `등급: B`,
          hints: [
            '높은 점수부터 확인하세요',
            'elif를 4번 사용하세요',
            '88은 80 이상이니까 B등급이에요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '등급: B',
              description: '88점은 B등급이어야 해요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "다중 조건의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 다중 조건 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-7',
          title: '홀수 짝수 판별기',
          description: '숫자가 홀수인지 짝수인지 알려줘요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 110,
          estimatedMinutes: 18,
          phase: 'create',
          concept: '나머지 연산',
          conceptExplanation: '% 연산자로 나머지를 구해서 홀짝을 판별해요',
          learningObjectives: [
            '% 연산자를 이해한다',
            '조건문과 연산을 결합한다'
          ],
          realWorldExample: '게임에서 턴을 나누거나 번갈아 하는 것도 홀짝으로 판별해요',
          starterCode: `# 숫자가 홀수인지 짝수인지 판별하세요
# 짝수: 2로 나눈 나머지가 0
# 홀수: 2로 나눈 나머지가 1

number = 7

# 여기에 코드를 작성하세요
`,
          solution: `number = 7

if number % 2 == 0:
    print("짝수예요")
else:
    print("홀수예요")`,
          expectedOutput: `홀수예요`,
          hints: [
            '% 는 나머지를 구하는 연산자예요',
            '7 % 2는 1이에요 (7을 2로 나눈 나머지)',
            'if number % 2 == 0: 으로 짝수를 확인해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '홀수예요',
              description: '7은 홀수예요'
            }
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "나머지 연산의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 나머지 연산 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-8',
          title: '나이별 입장료 계산',
          description: '나이에 따라 다른 입장료를 계산해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 130,
          estimatedMinutes: 25,
          phase: 'create',
          concept: '조건문 + 변수',
          conceptExplanation: '조건에 따라 다른 값을 변수에 저장하고 사용해요',
          learningObjectives: [
            '조건문과 변수를 결합한다',
            '실생활 계산 프로그램을 만든다'
          ],
          realWorldExample: '놀이공원, 영화관 티켓 판매 시스템',
          starterCode: `# 나이에 따른 입장료를 계산하세요
# 7세 이하: 무료
# 8-13세: 5000원
# 14-18세: 7000원
# 19세 이상: 10000원

age = 12

# 여기에 코드를 작성하세요
`,
          solution: `age = 12

if age <= 7:
    price = 0
elif age <= 13:
    price = 5000
elif age <= 18:
    price = 7000
else:
    price = 10000

print(f"입장료: {price}원")`,
          expectedOutput: `입장료: 5000원`,
          hints: [
            '변수 price에 입장료를 저장하세요',
            '나이 조건을 잘 확인하세요',
            'f-string으로 출력하면 깔끔해요'
          ],
          requirements: [
            '조건문을 사용하세요',
            'price 변수에 입장료를 저장하세요',
            '마지막에 입장료를 출력하세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "조건문 + 변수의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 조건문 + 변수 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 9: 복합 조건
        {
          id: '1-4-9',
          title: '비밀번호 검증기',
          description: '비밀번호가 안전한지 확인하는 프로그램',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 140,
          estimatedMinutes: 28,
          phase: 'create',
          concept: '복합 조건 (and, or)',
          conceptExplanation: 'and와 or로 여러 조건을 동시에 확인할 수 있어요',
          learningObjectives: [
            'and와 or를 사용한다',
            '복합 조건을 구현한다'
          ],
          realWorldExample: '회원가입할 때 비밀번호 안전도 검사',
          starterCode: `# 비밀번호 안전도를 검사하세요
# 안전: 길이가 8자 이상이고 숫자를 포함
# 보통: 길이가 6자 이상
# 위험: 그 외

password = "hello123"

# 여기에 코드를 작성하세요
# 힌트: len(password)로 길이를 알 수 있어요
# any(c.isdigit() for c in password)로 숫자 포함 여부를 확인해요
`,
          solution: `password = "hello123"

has_number = any(c.isdigit() for c in password)

if len(password) >= 8 and has_number:
    print("안전한 비밀번호예요!")
elif len(password) >= 6:
    print("보통 비밀번호예요")
else:
    print("위험한 비밀번호예요!")`,
          expectedOutput: `안전한 비밀번호예요!`,
          hints: [
            'len()으로 길이를 확인해요',
            'and로 두 조건을 모두 만족하는지 확인해요',
            '"hello123"은 8자이고 숫자를 포함해요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "복합 조건 (and, or)의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 복합 조건 (and, or) 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 10: 주간 프로젝트
        {
          id: '1-4-10',
          title: '주간 프로젝트: 선택형 어드벤처 게임',
          description: '플레이어의 선택에 따라 스토리가 달라지는 게임',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 300,
          estimatedMinutes: 45,
          phase: 'create',
          isWeeklyProject: true,
          isKeyMission: true,
          concept: '주간 프로젝트',
          conceptExplanation: '조건문을 활용해서 선택에 따라 결과가 달라지는 게임을 만들어요!',
          learningObjectives: [
            '조건문을 종합적으로 활용한다',
            '인터랙티브 프로그램을 만든다',
            '창의적인 스토리를 구현한다'
          ],
          realWorldExample: '텔테일 게임즈의 선택형 게임들',
          starterCode: `# 선택형 어드벤처 게임을 만드세요!
#
# 요구사항:
# 1. 최소 3번의 선택 기회
# 2. 선택에 따라 다른 스토리 전개
# 3. 여러 가지 엔딩 (최소 3가지)
# 4. 스토리가 논리적으로 연결
#
# 예시 시나리오:
# - 숲에서 길을 잃은 주인공
# - 왼쪽/오른쪽 선택
# - 동굴 들어가기/지나가기 선택
# - 보물 가지기/두고가기 선택
# - 결과: 성공/실패/특별 엔딩

print("=== 마법의 숲 어드벤처 ===")
print("숲에서 길을 잃었습니다...")
print()

# 여기에 게임 코드를 작성하세요
`,
          solution: `print("=== 마법의 숲 어드벤처 ===")
print("당신은 어두운 숲에서 길을 잃었습니다...")
print()

# 첫 번째 선택
choice1 = "왼쪽"  # 실제로는 input()으로 받아요

if choice1 == "왼쪽":
    print("왼쪽 길로 갔습니다.")
    print("신비로운 동굴을 발견했어요!")
    print()

    # 두 번째 선택
    choice2 = "들어간다"

    if choice2 == "들어간다":
        print("용감하게 동굴로 들어갔습니다.")
        print("반짝이는 보물 상자가 있어요!")
        print()

        # 세 번째 선택
        choice3 = "연다"

        if choice3 == "연다":
            print("상자를 열었습니다...")
            print("황금 검을 얻었어요!")
            print("=== 해피 엔딩! ===")
        else:
            print("상자를 두고 나왔습니다.")
            print("=== 일반 엔딩 ===")
    else:
        print("동굴을 지나쳤습니다.")
        print("마을을 찾았어요!")
        print("=== 안전 엔딩 ===")
else:
    print("오른쪽 길로 갔습니다.")
    print("늑대를 만났어요!")
    print("=== 게임 오버 ===")`,
          expectedOutput: null,
          hints: [
            '중첩 if문을 사용하세요',
            '각 선택마다 스토리를 추가하세요',
            '엔딩마다 다른 메시지를 보여주세요',
            '빈 줄과 구분선으로 보기 좋게 만드세요'
          ],
          requirements: [
            '최소 3번의 선택이 있어야 해요',
            '3가지 이상의 엔딩이 있어야 해요',
            '스토리가 논리적으로 연결되어야 해요',
            '각 선택마다 적절한 설명이 있어야 해요',
            '게임 제목과 마무리가 있어야 해요'
          ],
          extensionActivities: [
            '선택지를 더 추가해보세요',
            '점수 시스템을 만들어보세요',
            'input()을 사용해서 실제로 선택할 수 있게 만들어보세요',
            '다른 장르(SF, 판타지 등)로 만들어보세요'
          ],
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "주간 프로젝트의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 주간 프로젝트 기본 연습\n",
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
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // 나머지 Week 5-8은 유사한 구조로 작성합니다
    // 시간 관계상 Week 5-8의 구조만 간략히 표시합니다

    // ============================================
    // Week 5: 연산자와 입출력 (6 missions, 3 hours)
    // ============================================
    {
      id: 'week-5',
      number: 5,
      title: '계산하고 소통하기',
      description: '연산자로 계산하고, input()으로 사용자와 대화하는 프로그램을 만들어요',
      missions: [
        // Mission 1: 사칙연산 기초
        {
          id: '1-5-1',
          title: '계산기 만들기',
          description: '덧셈, 뺄셈, 곱셈, 나눗셈으로 간단한 계산기를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'use',
          isKeyMission: true,
          concept: '사칙연산 연산자',
          conceptExplanation: `Python에서는 수학 계산을 아주 쉽게 할 수 있어요! 사칙연산 연산자를 사용하면 계산기처럼 동작하는 프로그램을 만들 수 있답니다.

예제 코드:
\`\`\`python
print(10 + 5)   # 덧셈: 15
print(20 - 8)   # 뺄셈: 12
print(7 * 3)    # 곱셈: 21
print(15 / 3)   # 나눗셈: 5.0
print(10 // 3)  # 몫: 3
print(10 % 3)   # 나머지: 1
\`\`\`

게임에서 체력 계산, 쇼핑앱에서 가격 계산 등 모든 프로그램에서 사용되는 기본 중의 기본이에요!`,
          learningObjectives: [
            '사칙연산 연산자를 사용할 수 있다',
            '연산 우선순위를 이해한다',
            '계산 결과를 출력할 수 있다'
          ],
          realWorldExample: '게임에서 "공격력 50 - 방어력 20 = 데미지 30"을 계산하는 것도 연산자예요',
          starterCode: `# 간단한 계산기를 만들어보세요
# 두 수를 더하고, 빼고, 곱하고, 나눈 결과를 출력하세요

a = 20
b = 4

# 여기에 코드를 작성하세요
# 덧셈 결과 출력 (힌트: a + b)

`,
          solution: `a = 20
b = 4

print(a + b)   # 24
print(a - b)   # 16
print(a * b)   # 80
print(a / b)   # 5.0`,
          expectedOutput: '24\n16\n80\n5.0',
          hints: [
            '+ 는 덧셈, - 는 뺄셈, * 는 곱셈, / 는 나눗셈이에요',
            'print(a + b) 형태로 계산 결과를 출력할 수 있어요',
            '각 연산마다 print()를 한 번씩 써야 해요',
            '나눗셈 결과는 소수점이 나올 수 있어요 (5.0처럼)'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '24',
              description: '20 + 4 = 24가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '16',
              description: '20 - 4 = 16이 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '80',
              description: '20 * 4 = 80이 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '5.0',
              description: '20 / 4 = 5.0이 올바르게 출력되어야 해요'
            }
          ],
          commonMistakes: [
            '곱셈을 x로 쓰기 - 20 x 4 ❌ (올바름: 20 * 4)',
            '나눗셈을 ÷로 쓰기 - 20 ÷ 4 ❌ (올바름: 20 / 4)',
            '연산자 앞뒤 띄어쓰기 안 하기 - 괜찮지만 띄우는 게 읽기 좋아요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 연산 연습',
              description: '사칙연산의 기본을 연습합니다.',
              difficulty: 'easy',
              hints: ['연산자를 정확히 사용하세요', '결과를 print()로 출력하세요'],
              estimatedMinutes: 3,
              starterCode: '# 10과 5를 사칙연산하세요\n',
              feedback: {
                perfect: '사칙연산을 완벽하게 이해했어요!',
                good: '연산자를 잘 사용했어요!',
                partial: '일부 연산이 틀렸어요.',
                wrong: '연산자 기호를 다시 확인하세요.'
              }
            },
            {
              id: 'c2',
              title: '연산 결과 예측',
              description: '코드를 실행하기 전에 결과를 예측해봅니다.',
              difficulty: 'easy',
              hints: ['머릿속으로 계산해보세요', '연산 우선순위를 고려하세요'],
              estimatedMinutes: 4,
              starterCode: '# 결과를 예측하고 실행해보세요\nprint(10 + 5 * 2)\n',
              feedback: {
                perfect: '연산 우선순위를 완벽히 이해했어요!',
                good: '예측을 잘했어요!',
                partial: '일부 결과가 틀렸어요.',
                wrong: '곱셈이 덧셈보다 먼저 계산돼요.'
              }
            },
            {
              id: 'c3',
              title: '복합 계산',
              description: '여러 연산을 조합한 계산을 합니다.',
              difficulty: 'medium',
              hints: ['괄호로 우선순위를 조정할 수 있어요', '단계별로 계산하세요'],
              estimatedMinutes: 6,
              starterCode: '# (10 + 5) * 2를 계산하세요\n',
              feedback: {
                perfect: '복합 계산을 완벽하게 했어요!',
                good: '괄호를 잘 사용했어요!',
                partial: '계산 순서를 다시 확인하세요.',
                wrong: '괄호 안을 먼저 계산하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 2: 나머지 연산
        {
          id: '1-5-2',
          title: '홀수와 짝수 판별하기',
          description: '나머지 연산자(%)로 숫자의 특성을 알아내요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '나머지 연산자 (%)',
          conceptExplanation: `나머지 연산자 %는 나눗셈의 나머지를 구해요. 이걸로 홀수/짝수 판별, 배수 확인 등 다양한 문제를 해결할 수 있어요!

예제 코드:
\`\`\`python
print(10 % 3)   # 10을 3으로 나눈 나머지: 1
print(8 % 2)    # 8을 2로 나눈 나머지: 0 (짝수!)
print(7 % 2)    # 7을 2로 나눈 나머지: 1 (홀수!)
print(15 % 5)   # 15를 5로 나눈 나머지: 0 (5의 배수!)
\`\`\`

숫자를 2로 나눈 나머지가 0이면 짝수, 1이면 홀수예요. 게임에서 턴제 시스템, 달력 프로그램 등에 많이 사용돼요!`,
          learningObjectives: [
            '나머지 연산자 %를 사용할 수 있다',
            '홀수와 짝수를 판별할 수 있다',
            '배수를 확인할 수 있다'
          ],
          realWorldExample: '게임에서 "10턴마다 보너스"를 주려면 턴 수 % 10 == 0 을 확인해요',
          starterCode: `# 나머지 연산으로 홀수/짝수를 확인하세요
# 5, 8, 13을 2로 나눈 나머지를 출력하세요

# 여기에 코드를 작성하세요
# 5 % 2 출력
# 8 % 2 출력
# 13 % 2 출력

`,
          solution: `print(5 % 2)   # 1 (홀수)
print(8 % 2)   # 0 (짝수)
print(13 % 2)  # 1 (홀수)`,
          expectedOutput: '1\n0\n1',
          hints: [
            '% 연산자는 나머지를 구해요',
            '숫자를 2로 나눈 나머지는 0 또는 1만 나와요',
            '나머지가 0이면 짝수, 1이면 홀수예요',
            'print(5 % 2) 형태로 출력하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '1',
              description: '5를 2로 나눈 나머지는 1이에요 (홀수)'
            },
            {
              input: '',
              expectedOutput: '0',
              description: '8을 2로 나눈 나머지는 0이에요 (짝수)'
            },
            {
              input: '',
              expectedOutput: '1',
              description: '13을 2로 나눈 나머지는 1이에요 (홀수)'
            },
            {
              input: '',
              expectedOutput: '',
              description: '세 개의 나머지가 모두 올바르게 출력되어야 해요'
            }
          ],
          commonMistakes: [
            '나머지 연산자를 mod로 쓰기 - 5 mod 2 ❌ (올바름: 5 % 2)',
            '나눗셈 /와 헷갈리기 - 10 / 3 은 3.333..., 10 % 3 은 1',
            '나머지가 항상 나누는 수보다 작다는 것을 모르기'
          ],
          challenges: [
            {
              id: 'c1',
              title: '나머지 연산 기초',
              description: '나머지 연산의 기본을 이해합니다.',
              difficulty: 'easy',
              hints: ['나머지는 나눗셈의 남은 값이에요', '항상 나누는 수보다 작아요'],
              estimatedMinutes: 3,
              starterCode: '# 다양한 나머지 연산을 해보세요\n',
              feedback: {
                perfect: '나머지 연산을 완벽히 이해했어요!',
                good: '% 연산자를 잘 사용했어요!',
                partial: '일부 계산이 틀렸어요.',
                wrong: '나머지의 개념을 다시 복습하세요.'
              }
            },
            {
              id: 'c2',
              title: '홀짝 판별 마스터',
              description: '다양한 숫자의 홀짝을 판별합니다.',
              difficulty: 'easy',
              hints: ['% 2 의 결과가 0이면 짝수예요', '1이면 홀수예요'],
              estimatedMinutes: 4,
              starterCode: '# 여러 숫자가 홀수인지 짝수인지 확인하세요\n',
              feedback: {
                perfect: '홀짝 판별을 완벽하게 했어요!',
                good: '패턴을 잘 이해했어요!',
                partial: '일부 판별이 틀렸어요.',
                wrong: '2로 나눈 나머지를 확인하세요.'
              }
            },
            {
              id: 'c3',
              title: '배수 확인',
              description: '특정 수의 배수인지 확인합니다.',
              difficulty: 'medium',
              hints: ['배수면 나머지가 0이에요', '% 연산자를 활용하세요'],
              estimatedMinutes: 6,
              starterCode: '# 숫자가 5의 배수인지 확인하세요\n',
              feedback: {
                perfect: '배수 개념을 완벽히 이해했어요!',
                good: '논리적으로 잘 접근했어요!',
                partial: '배수 조건을 다시 확인하세요.',
                wrong: '나머지가 0인지 확인하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3: 문자열 연결
        {
          id: '1-5-3',
          title: '문자열 조합하기',
          description: '+ 연산자로 문자열을 이어붙여 새로운 문장을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '문자열 연결',
          conceptExplanation: `Python에서 + 연산자는 숫자뿐 아니라 문자열도 연결할 수 있어요! 작은 단어들을 조합해서 긴 문장을 만들 수 있답니다.

예제 코드:
\`\`\`python
print("안녕" + "하세요")  # 안녕하세요
print("파이썬" + " " + "공부")  # 파이썬 공부
name = "철수"
greeting = "안녕! " + name + "야!"
print(greeting)  # 안녕! 철수야!
\`\`\`

게임에서 "플레이어 이름 + 님 환영합니다!" 같은 메시지를 만들 때 사용해요. 채팅 앱, 문자 메시지 등 모든 곳에서 쓰여요!`,
          learningObjectives: [
            '+ 연산자로 문자열을 연결할 수 있다',
            '변수에 저장된 문자열을 조합할 수 있다',
            '띄어쓰기를 포함한 문자열을 만들 수 있다'
          ],
          realWorldExample: 'SNS에서 "000님이 좋아요를 눌렀습니다"는 이름 + "님이 좋아요를 눌렀습니다"로 만들어요',
          starterCode: `# 문자열을 조합해서 자기소개를 만드세요
# "내 이름은 [이름]이고, [나이]살입니다." 형식으로 출력하세요

name = "민지"
age = "12"

# 여기에 코드를 작성하세요
# "내 이름은 " + name + ... 형태로 만드세요

`,
          solution: `name = "민지"
age = "12"

print("내 이름은 " + name + "이고, " + age + "살입니다.")`,
          expectedOutput: '내 이름은 민지이고, 12살입니다.',
          hints: [
            '문자열을 + 로 연결할 수 있어요',
            '띄어쓰기도 문자열에 포함시켜야 해요',
            '"내 이름은 " + name + "이고, " + ... 형태로 만드세요',
            '마침표(.)도 문자열 끝에 넣어야 해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '내 이름은 민지이고, 12살입니다.',
              description: '정확한 형식으로 자기소개가 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '민지',
              description: '이름이 포함되어야 해요'
            },
            {
              input: '',
              expectedOutput: '12',
              description: '나이가 포함되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '띄어쓰기와 구두점이 정확해야 해요'
            }
          ],
          commonMistakes: [
            '띄어쓰기를 빼먹기 - "안녕"+"하세요" 는 "안녕하세요"가 돼요',
            '숫자와 문자열 더하기 - "나이: " + 12 ❌ (올바름: "나이: " + "12")',
            '따옴표를 잘못 사용하기 - "안녕"하세요" ❌'
          ],
          challenges: [
            {
              id: 'c1',
              title: '문자열 연결 기초',
              description: '간단한 문자열 연결을 연습합니다.',
              difficulty: 'easy',
              hints: ['+ 로 문자열을 이어요', '따옴표 안이 문자열이에요'],
              estimatedMinutes: 3,
              starterCode: '# 두 단어를 연결해보세요\n',
              feedback: {
                perfect: '문자열 연결을 완벽하게 했어요!',
                good: '+ 연산자를 잘 사용했어요!',
                partial: '일부 연결이 틀렸어요.',
                wrong: '문자열끼리만 + 로 연결할 수 있어요.'
              }
            },
            {
              id: 'c2',
              title: '띄어쓰기 연습',
              description: '띄어쓰기가 있는 문장을 만듭니다.',
              difficulty: 'easy',
              hints: ['띄어쓰기도 " " 문자열이에요', '단어 사이에 넣으세요'],
              estimatedMinutes: 4,
              starterCode: '# "Hello World"를 만드세요\n',
              feedback: {
                perfect: '띄어쓰기를 완벽하게 처리했어요!',
                good: '문장 형식이 좋아요!',
                partial: '띄어쓰기 위치를 확인하세요.',
                wrong: '" "를 추가해야 해요.'
              }
            },
            {
              id: 'c3',
              title: '변수 조합',
              description: '여러 변수를 조합한 문장을 만듭니다.',
              difficulty: 'medium',
              hints: ['변수명은 따옴표 없이 써요', '문자열 부분만 따옴표로 감싸요'],
              estimatedMinutes: 6,
              starterCode: '# 이름, 나이, 취미를 조합하세요\n',
              feedback: {
                perfect: '변수 조합을 완벽하게 했어요!',
                good: '문장 구조가 좋아요!',
                partial: '일부 변수가 빠졌어요.',
                wrong: '변수와 문자열을 구분하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 4: input() 기초
        {
          id: '1-5-4',
          title: '사용자와 대화하기',
          description: 'input() 함수로 사용자의 입력을 받아 상호작용하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 20,
          phase: 'create',
          isKeyMission: true,
          concept: 'input() 함수',
          conceptExplanation: `input() 함수는 사용자로부터 데이터를 입력받는 가장 기본적인 방법이에요! 이걸로 대화형 프로그램, 게임, 설문조사 등을 만들 수 있어요.

예제 코드:
\`\`\`python
name = input("이름을 입력하세요: ")
print("안녕하세요, " + name + "님!")

age = input("나이를 입력하세요: ")
print("당신은 " + age + "살이군요!")
\`\`\`

input()은 항상 문자열로 입력을 받아요. 숫자 계산이 필요하면 int()로 변환해야 해요. 모든 앱과 게임의 입력 시스템의 기초예요!`,
          learningObjectives: [
            'input() 함수로 사용자 입력을 받을 수 있다',
            '입력받은 값을 변수에 저장할 수 있다',
            '입력값을 활용한 출력을 만들 수 있다'
          ],
          realWorldExample: '로그인할 때 아이디와 비밀번호를 입력하는 것도 input() 같은 함수로 만들어요',
          starterCode: `# 사용자의 이름과 좋아하는 색을 물어보고
# "안녕하세요 [이름]님! [색]색을 좋아하시는군요!" 출력하세요

# 여기에 코드를 작성하세요
# name = input("이름을 입력하세요: ")
# ...

`,
          solution: `name = input("이름을 입력하세요: ")
color = input("좋아하는 색을 입력하세요: ")
print("안녕하세요 " + name + "님! " + color + "색을 좋아하시는군요!")`,
          expectedOutput: '안녕하세요 철수님! 파란색을 좋아하시는군요!',
          hints: [
            'input("질문 메시지")로 입력을 받아요',
            '입력받은 값을 변수에 저장하세요: name = input(...)',
            '저장한 변수를 문자열 연결로 출력하세요',
            'input()은 항상 문자열을 반환해요'
          ],
          testCases: [
            {
              input: '철수\n파란',
              expectedOutput: '안녕하세요 철수님! 파란색을 좋아하시는군요!',
              description: '입력받은 이름과 색이 올바르게 출력되어야 해요'
            },
            {
              input: '영희\n분홍',
              expectedOutput: '안녕하세요 영희님! 분홍색을 좋아하시는군요!',
              description: '다른 입력에도 정확하게 작동해야 해요'
            },
            {
              input: 'Alice\nRed',
              expectedOutput: '안녕하세요 Alice님! Red색을 좋아하시는군요!',
              description: '영어 입력도 처리할 수 있어야 해요'
            },
            {
              input: '김코딩\n초록',
              expectedOutput: '안녕하세요 김코딩님! 초록색을 좋아하시는군요!',
              description: '모든 입력이 정확한 형식으로 출력되어야 해요'
            }
          ],
          commonMistakes: [
            'input() 결과를 저장 안 하기 - input("이름: ") ❌ (올바름: name = input("이름: "))',
            '괄호 빼먹기 - input "이름" ❌',
            'Input으로 대문자 쓰기 - Input() ❌ (올바름: input())'
          ],
          challenges: [
            {
              id: 'c1',
              title: 'input() 기초',
              description: 'input() 함수의 기본 사용법을 연습합니다.',
              difficulty: 'easy',
              hints: ['input("메시지")로 입력받아요', '결과를 변수에 저장하세요'],
              estimatedMinutes: 4,
              starterCode: '# 이름을 입력받아 출력하세요\n',
              feedback: {
                perfect: 'input()을 완벽하게 사용했어요!',
                good: '입력 처리를 잘했어요!',
                partial: '입력은 받았지만 출력이 틀렸어요.',
                wrong: 'input()의 반환값을 저장하세요.'
              }
            },
            {
              id: 'c2',
              title: '대화형 프로그램',
              description: '여러 질문을 하는 프로그램을 만듭니다.',
              difficulty: 'medium',
              hints: ['여러 번 input()을 사용하세요', '각 입력을 다른 변수에 저장하세요'],
              estimatedMinutes: 7,
              starterCode: '# 3가지를 물어보는 프로그램을 만드세요\n',
              feedback: {
                perfect: '훌륭한 대화형 프로그램이에요!',
                good: '여러 입력을 잘 처리했어요!',
                partial: '일부 질문이 빠졌어요.',
                wrong: '각 질문마다 input()이 필요해요.'
              }
            },
            {
              id: 'c3',
              title: '입력 활용 마스터',
              description: '입력받은 값을 창의적으로 활용합니다.',
              difficulty: 'medium',
              hints: ['입력을 조합해서 새로운 문장을 만드세요', '문자열 연결을 활용하세요'],
              estimatedMinutes: 10,
              starterCode: '# 입력을 활용한 이야기를 만드세요\n',
              feedback: {
                perfect: '입력 활용을 완벽히 마스터했어요!',
                good: '창의적인 프로그램이에요!',
                partial: '입력 활용이 부족해요.',
                wrong: '입력받은 변수를 출력에 사용하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 5: 숫자 입력과 계산
        {
          id: '1-5-5',
          title: '계산기 업그레이드',
          description: 'input()으로 숫자를 입력받아 계산하는 진짜 계산기를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 100,
          estimatedMinutes: 20,
          phase: 'create',
          concept: '형변환 (int, float)',
          conceptExplanation: `input()은 항상 문자열을 반환해요. 숫자 계산을 하려면 int() (정수) 또는 float() (실수)로 변환해야 해요!

예제 코드:
\`\`\`python
age_text = input("나이: ")  # "25" (문자열)
age_number = int(age_text)  # 25 (숫자)
next_year = age_number + 1  # 26

# 한 줄로도 가능
height = float(input("키(cm): "))  # 실수로 변환
print("당신의 키는 " + str(height) + "cm예요")
\`\`\`

int()는 정수, float()는 소수점 숫자로 변환해요. 계산 후 출력할 때는 다시 str()로 문자열로 바꿔야 +로 연결할 수 있어요!`,
          learningObjectives: [
            'int()로 문자열을 정수로 변환할 수 있다',
            'float()로 실수를 다룰 수 있다',
            'str()로 숫자를 문자열로 변환할 수 있다'
          ],
          realWorldExample: '쇼핑앱에서 "수량: 3"을 입력받아 "가격 1000 * 수량 3 = 3000원"을 계산해요',
          starterCode: `# 두 숫자를 입력받아 더한 결과를 출력하세요
# 예: 10 + 20 = 30

# 여기에 코드를 작성하세요
# num1 = int(input("첫 번째 숫자: "))
# ...

`,
          solution: `num1 = int(input("첫 번째 숫자: "))
num2 = int(input("두 번째 숫자: "))
result = num1 + num2
print(str(num1) + " + " + str(num2) + " = " + str(result))`,
          expectedOutput: '10 + 20 = 30',
          hints: [
            'input()으로 입력받은 값은 문자열이에요',
            'int()로 정수로 변환하세요: int(input(...))',
            '계산한 결과를 출력할 때는 str()로 문자열로 변환하세요',
            '"숫자1 + 숫자2 = 결과" 형식으로 출력하세요'
          ],
          testCases: [
            {
              input: '10\n20',
              expectedOutput: '10 + 20 = 30',
              description: '10과 20을 더한 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '5\n7',
              expectedOutput: '5 + 7 = 12',
              description: '다른 숫자에도 정확하게 작동해야 해요'
            },
            {
              input: '100\n200',
              expectedOutput: '100 + 200 = 300',
              description: '큰 숫자도 계산할 수 있어야 해요'
            },
            {
              input: '0\n0',
              expectedOutput: '0 + 0 = 0',
              description: '0도 올바르게 처리해야 해요 (엣지케이스)'
            }
          ],
          commonMistakes: [
            'int() 변환 안 하기 - input()은 문자열이라 "10" + "20" = "1020"이 돼요',
            '출력 시 str() 변환 안 하기 - "결과: " + 30 ❌ (올바름: "결과: " + str(30))',
            '괄호 순서 틀리기 - int(input("숫자: ")) 순서가 중요해요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '형변환 기초',
              description: 'int()와 str()의 사용법을 연습합니다.',
              difficulty: 'easy',
              hints: ['int()는 문자열을 숫자로', 'str()는 숫자를 문자열로'],
              estimatedMinutes: 4,
              starterCode: '# 숫자를 입력받아 계산하세요\n',
              feedback: {
                perfect: '형변환을 완벽하게 이해했어요!',
                good: '타입 변환을 잘했어요!',
                partial: '변환이 일부 빠졌어요.',
                wrong: 'input()은 문자열이므로 int()가 필요해요.'
              }
            },
            {
              id: 'c2',
              title: '사칙연산 계산기',
              description: '네 가지 연산을 모두 하는 계산기를 만듭니다.',
              difficulty: 'medium',
              hints: ['두 숫자를 입력받으세요', '네 가지 연산 결과를 모두 출력하세요'],
              estimatedMinutes: 8,
              starterCode: '# 두 숫자로 +, -, *, /를 계산하세요\n',
              feedback: {
                perfect: '완벽한 계산기예요!',
                good: '모든 연산을 잘 처리했어요!',
                partial: '일부 연산이 빠졌어요.',
                wrong: '네 가지 연산을 모두 해야 해요.'
              }
            },
            {
              id: 'c3',
              title: '실용 계산 프로그램',
              description: '실생활에 사용할 수 있는 계산 프로그램을 만듭니다.',
              difficulty: 'medium',
              hints: ['물건 개수와 가격을 입력받으세요', '총 금액을 계산하세요'],
              estimatedMinutes: 10,
              starterCode: '# 쇼핑 총액 계산 프로그램\n',
              feedback: {
                perfect: '실용적인 프로그램이에요!',
                good: '계산 로직이 정확해요!',
                partial: '일부 기능이 부족해요.',
                wrong: '가격과 수량을 곱해야 해요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6: 주간 프로젝트 - 나만의 프로필 생성기
        {
          id: '1-5-6',
          title: '나만의 프로필 생성기',
          description: '입력과 출력을 활용해 멋진 프로필 카드를 만드는 프로젝트',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 25,
          phase: 'create',
          isKeyMission: true,
          concept: '주간 프로젝트: 입출력 종합',
          conceptExplanation: `이번 주에 배운 모든 것을 활용하는 프로젝트예요! 사용자 정보를 입력받아 예쁜 프로필 카드를 만들어봐요.

사용할 개념:
- input(): 사용자 정보 입력
- 문자열 연결: 정보를 조합
- 형변환: 숫자 계산
- print(): 결과 출력

예제 출력:
\`\`\`
====================
  프로필 카드
====================
이름: 김코딩
나이: 12살
학년: 6학년
좋아하는 과목: 수학
특기: 피아노
====================
\`\`\``,
          learningObjectives: [
            '여러 입력을 조합한 프로그램을 만들 수 있다',
            '보기 좋은 출력 형식을 디자인할 수 있다',
            '배운 개념을 종합적으로 활용할 수 있다'
          ],
          realWorldExample: 'SNS 프로필, 회원가입 폼, 명함 생성기 등에 사용되는 기술이에요',
          starterCode: `# 나만의 프로필 카드를 만드세요!
# 최소 5가지 정보를 입력받아 예쁘게 출력하세요

# 여기에 코드를 작성하세요
# 1. 이름 입력받기
# 2. 나이 입력받기 (숫자로 변환)
# 3. 좋아하는 것 3가지 입력받기
# 4. 프로필 카드 형식으로 출력하기

`,
          solution: `print("=== 프로필 생성기 ===")
name = input("이름: ")
age = int(input("나이: "))
grade = input("학년: ")
subject = input("좋아하는 과목: ")
hobby = input("취미: ")

print()
print("====================")
print("  프로필 카드")
print("====================")
print("이름: " + name)
print("나이: " + str(age) + "살")
print("학년: " + grade)
print("좋아하는 과목: " + subject)
print("취미: " + hobby)
print("====================")`,
          expectedOutput: '====================\n  프로필 카드\n====================\n이름: 김코딩\n나이: 12살\n학년: 6학년\n좋아하는 과목: 수학\n취미: 피아노\n====================',
          hints: [
            '먼저 어떤 정보를 받을지 계획하세요',
            '각 정보마다 input()을 사용하세요',
            '나이는 int()로 변환하세요',
            '="=" 같은 문자로 테두리를 만들면 예뻐요',
            'print()만 쓰면 빈 줄이 나와요'
          ],
          testCases: [
            {
              input: '김코딩\n12\n6학년\n수학\n피아노',
              expectedOutput: '프로필 카드',
              description: '프로필 카드 제목이 있어야 해요'
            },
            {
              input: '김코딩\n12\n6학년\n수학\n피아노',
              expectedOutput: '김코딩',
              description: '입력받은 이름이 출력되어야 해요'
            },
            {
              input: '김코딩\n12\n6학년\n수학\n피아노',
              expectedOutput: '12',
              description: '나이가 포함되어야 해요'
            },
            {
              input: '김코딩\n12\n6학년\n수학\n피아노',
              expectedOutput: '수학',
              description: '모든 입력 정보가 출력되어야 해요'
            }
          ],
          commonMistakes: [
            '입력을 받기만 하고 출력 안 하기',
            '형식 없이 그냥 print()만 나열하기 - 보기 좋게 디자인하세요',
            '나이를 int() 변환 안 해서 계산 못하기'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 프로필',
              description: '3가지 정보로 간단한 프로필을 만듭니다.',
              difficulty: 'easy',
              hints: ['이름, 나이, 취미 정도만', '간단한 형식으로 출력하세요'],
              estimatedMinutes: 8,
              starterCode: '# 간단한 프로필을 만드세요\n',
              feedback: {
                perfect: '기본 프로필을 완벽하게 만들었어요!',
                good: '구조가 좋아요!',
                partial: '일부 정보가 빠졌어요.',
                wrong: '최소 3가지 정보를 입력받으세요.'
              }
            },
            {
              id: 'c2',
              title: '상세 프로필',
              description: '5가지 이상의 정보로 상세한 프로필을 만듭니다.',
              difficulty: 'medium',
              hints: ['더 많은 질문을 하세요', '정보를 체계적으로 배치하세요'],
              estimatedMinutes: 12,
              starterCode: '# 상세한 프로필을 만드세요\n',
              feedback: {
                perfect: '완벽한 프로필이에요!',
                good: '정보가 풍부해요!',
                partial: '더 많은 정보를 추가하세요.',
                wrong: '5가지 이상 정보가 필요해요.'
              }
            },
            {
              id: 'c3',
              title: '프로필 카드 마스터',
              description: '장식과 계산이 포함된 프로페셔널한 프로필을 만듭니다.',
              difficulty: 'hard',
              hints: ['테두리를 예쁘게 꾸미세요', '태어난 년도 계산 같은 기능 추가', '여러 줄 spacing 활용'],
              estimatedMinutes: 20,
              starterCode: '# 최고급 프로필 카드를 만드세요\n',
              feedback: {
                perfect: '프로페셔널한 프로필이에요!',
                good: '디자인이 훌륭해요!',
                partial: '기능이나 디자인을 더 추가하세요.',
                wrong: '창의성을 발휘해보세요!'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 6: 리스트 기초 (6 missions, 3 hours)
    // ============================================
    {
      id: 'week-6',
      number: 6,
      title: '데이터 모아 관리하기',
      description: '리스트로 여러 데이터를 효율적으로 저장하고 다루는 방법을 배워요',
      missions: [
        // Mission 1: 리스트 생성과 인덱싱
        {
          id: '1-6-1',
          title: '리스트 첫 만남',
          description: '리스트를 만들고 원하는 위치의 값을 꺼내는 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'use',
          isKeyMission: true,
          concept: '리스트 생성과 인덱싱',
          conceptExplanation: `리스트는 여러 개의 데이터를 하나로 묶어서 저장하는 자료구조예요. 대괄호 []로 만들고, 각 요소는 쉼표로 구분해요.

예제 코드:
\`\`\`python
fruits = ["사과", "바나나", "포도"]
print(fruits[0])  # 사과 (첫 번째)
print(fruits[1])  # 바나나 (두 번째)
print(fruits[2])  # 포도 (세 번째)
print(fruits[-1]) # 포도 (마지막)

numbers = [10, 20, 30, 40, 50]
print(numbers[3])  # 40
\`\`\`

인덱스는 0부터 시작해요! fruits[0]이 첫 번째, fruits[1]이 두 번째예요. 음수 인덱스는 뒤에서부터 세요 (-1이 마지막). 게임 인벤토리, 친구 목록, 점수 리스트 등 모든 곳에서 사용돼요!`,
          learningObjectives: [
            '리스트를 생성할 수 있다',
            '인덱스로 리스트 요소에 접근할 수 있다',
            '음수 인덱스를 이해한다'
          ],
          realWorldExample: 'YouTube 재생목록, 장바구니, 게임 인벤토리가 모두 리스트로 만들어져요',
          starterCode: `# 좋아하는 게임 3개를 리스트로 만들고
# 첫 번째 게임과 마지막 게임을 출력하세요

# 여기에 코드를 작성하세요
# games = ["마인크래프트", "로블록스", "포트나이트"]
# print(games[0])  # 첫 번째
# ...

`,
          solution: `games = ["마인크래프트", "로블록스", "포트나이트"]
print(games[0])   # 첫 번째
print(games[-1])  # 마지막 (또는 games[2])`,
          expectedOutput: '마인크래프트\n포트나이트',
          hints: [
            '리스트는 [요소1, 요소2, 요소3] 형태로 만들어요',
            '첫 번째 요소는 인덱스 0이에요',
            '마지막 요소는 인덱스 -1 또는 리스트 길이-1이에요',
            '문자열 요소는 따옴표로 감싸야 해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '마인크래프트',
              description: '첫 번째 게임이 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '포트나이트',
              description: '마지막 게임이 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '리스트에 3개의 게임이 있어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '인덱스를 올바르게 사용해야 해요'
            }
          ],
          commonMistakes: [
            '인덱스를 1부터 시작 - fruits[1]이 첫 번째가 아니라 두 번째예요',
            '괄호 대신 대괄호 - fruits(0) ❌ (올바름: fruits[0])',
            '범위 초과 - 3개 리스트에서 fruits[3]은 에러예요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '리스트 만들기',
              description: '다양한 리스트를 만들어봅니다.',
              difficulty: 'easy',
              hints: ['대괄호 []를 사용하세요', '요소를 쉼표로 구분하세요'],
              estimatedMinutes: 3,
              starterCode: '# 숫자 리스트와 문자열 리스트를 만드세요\n',
              feedback: {
                perfect: '리스트를 완벽하게 만들었어요!',
                good: '리스트 문법을 잘 이해했어요!',
                partial: '일부 문법이 틀렸어요.',
                wrong: '[요소1, 요소2] 형태로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '인덱싱 연습',
              description: '다양한 인덱스로 요소를 접근합니다.',
              difficulty: 'easy',
              hints: ['0부터 시작해요', '음수는 뒤에서부터예요'],
              estimatedMinutes: 4,
              starterCode: '# 리스트의 특정 요소들을 출력하세요\n',
              feedback: {
                perfect: '인덱싱을 완벽하게 했어요!',
                good: '인덱스 사용을 잘했어요!',
                partial: '일부 인덱스가 틀렸어요.',
                wrong: '인덱스는 0부터 시작해요.'
              }
            },
            {
              id: 'c3',
              title: '음수 인덱스 마스터',
              description: '음수 인덱스를 자유자재로 사용합니다.',
              difficulty: 'medium',
              hints: ['-1이 마지막', '-2가 끝에서 두 번째'],
              estimatedMinutes: 6,
              starterCode: '# 음수 인덱스로 뒤에서부터 접근하세요\n',
              feedback: {
                perfect: '음수 인덱스를 완벽히 이해했어요!',
                good: '거꾸로 접근을 잘했어요!',
                partial: '음수 인덱스 개념을 다시 확인하세요.',
                wrong: '-1이 마지막 요소예요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 2: 리스트 슬라이싱
        {
          id: '1-6-2',
          title: '리스트 자르기',
          description: '슬라이싱으로 리스트의 일부분을 꺼내는 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: '리스트 슬라이싱',
          conceptExplanation: `슬라이싱은 리스트에서 연속된 여러 요소를 한 번에 가져오는 방법이에요. [시작:끝] 형태로 사용해요.

예제 코드:
\`\`\`python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])    # [2, 3, 4] (인덱스 2부터 4까지)
print(numbers[:3])     # [0, 1, 2] (처음부터 2까지)
print(numbers[7:])     # [7, 8, 9] (7부터 끝까지)
print(numbers[::2])    # [0, 2, 4, 6, 8] (2칸씩 건너뛰기)
print(numbers[::-1])   # [9, 8, 7, ..., 0] (역순)
\`\`\`

주의: [시작:끝]에서 끝 인덱스는 포함되지 않아요! [2:5]는 인덱스 2, 3, 4만 가져와요. 게임에서 상위 3명, 최근 5개 기록 등을 가져올 때 사용해요!`,
          learningObjectives: [
            '슬라이싱 문법을 사용할 수 있다',
            '시작, 끝, 간격을 조절할 수 있다',
            '리스트 역순을 만들 수 있다'
          ],
          realWorldExample: '뉴스 앱에서 "최신 뉴스 5개"를 보여줄 때 슬라이싱을 사용해요',
          starterCode: `# 1부터 10까지 숫자 리스트에서
# 처음 3개, 마지막 3개, 짝수 번째만 출력하세요

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 여기에 코드를 작성하세요
# print(numbers[:3])  # 처음 3개
# ...

`,
          solution: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(numbers[:3])      # [1, 2, 3]
print(numbers[-3:])     # [8, 9, 10]
print(numbers[1::2])    # [2, 4, 6, 8, 10]`,
          expectedOutput: '[1, 2, 3]\n[8, 9, 10]\n[2, 4, 6, 8, 10]',
          hints: [
            '[:3]은 처음부터 인덱스 2까지 (3개)예요',
            '[-3:]은 마지막 3개예요',
            '[1::2]는 인덱스 1부터 2칸씩 건너뛰기예요',
            '[::2]는 처음부터 2칸씩, [::-1]은 역순이에요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '[1, 2, 3]',
              description: '처음 3개가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '[8, 9, 10]',
              description: '마지막 3개가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '[2, 4, 6, 8, 10]',
              description: '짝수 번째 요소들이 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '슬라이싱 문법을 올바르게 사용해야 해요'
            }
          ],
          commonMistakes: [
            '끝 인덱스 포함 착각 - [0:3]은 인덱스 0, 1, 2만 가져와요 (3은 X)',
            '간격을 두 번째 콜론에 - [::2]가 맞아요 ([:2:]가 아님)',
            '범위 초과 걱정 - [5:100]처럼 범위를 넘어도 에러 안 나요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 슬라이싱',
              description: '기본적인 슬라이싱을 연습합니다.',
              difficulty: 'easy',
              hints: ['[시작:끝] 형태', '끝은 포함되지 않아요'],
              estimatedMinutes: 4,
              starterCode: '# 리스트의 일부를 잘라보세요\n',
              feedback: {
                perfect: '슬라이싱을 완벽하게 했어요!',
                good: '범위 지정을 잘했어요!',
                partial: '일부 범위가 틀렸어요.',
                wrong: '[시작:끝] 형태를 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '생략 슬라이싱',
              description: '시작이나 끝을 생략한 슬라이싱을 연습합니다.',
              difficulty: 'easy',
              hints: ['[:3]은 처음부터', '[5:]는 끝까지'],
              estimatedMinutes: 5,
              starterCode: '# 시작 또는 끝을 생략해서 슬라이싱하세요\n',
              feedback: {
                perfect: '생략 문법을 완벽히 이해했어요!',
                good: '범위를 잘 지정했어요!',
                partial: '생략 위치를 확인하세요.',
                wrong: '콜론 앞뒤로 생략할 수 있어요.'
              }
            },
            {
              id: 'c3',
              title: '간격 슬라이싱',
              description: '간격을 지정한 슬라이싱을 마스터합니다.',
              difficulty: 'medium',
              hints: ['[::간격] 형태', '[-1]은 역순'],
              estimatedMinutes: 7,
              starterCode: '# 간격을 사용한 슬라이싱을 해보세요\n',
              feedback: {
                perfect: '간격 슬라이싱을 완벽하게 했어요!',
                good: '고급 문법을 잘 사용했어요!',
                partial: '간격 설정을 다시 확인하세요.',
                wrong: '세 번째 값이 간격이에요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3: append()로 요소 추가
        {
          id: '1-6-3',
          title: '리스트 키우기',
          description: 'append()로 리스트에 새로운 요소를 추가하는 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'modify',
          concept: 'append() 메서드',
          conceptExplanation: `append()는 리스트의 끝에 새로운 요소를 추가하는 메서드예요. 리스트를 동적으로 확장할 수 있어요!

예제 코드:
\`\`\`python
fruits = ["사과", "바나나"]
print(fruits)  # ["사과", "바나나"]

fruits.append("포도")
print(fruits)  # ["사과", "바나나", "포도"]

fruits.append("딸기")
print(fruits)  # ["사과", "바나나", "포도", "딸기"]

numbers = []  # 빈 리스트
numbers.append(10)
numbers.append(20)
print(numbers)  # [10, 20]
\`\`\`

빈 리스트로 시작해서 필요할 때마다 요소를 추가할 수 있어요. 게임 인벤토리에 아이템 추가, 할 일 목록에 작업 추가 등에 사용돼요!`,
          learningObjectives: [
            'append() 메서드를 사용할 수 있다',
            '빈 리스트를 만들고 확장할 수 있다',
            '메서드 호출 방법을 이해한다'
          ],
          realWorldExample: '쇼핑몰 장바구니에 물건 담기, SNS 팔로우 추가가 모두 append()예요',
          starterCode: `# 빈 장바구니 리스트를 만들고
# "우유", "빵", "계란"을 차례로 추가한 후 출력하세요

# 여기에 코드를 작성하세요
# cart = []
# cart.append("우유")
# ...

`,
          solution: `cart = []
cart.append("우유")
cart.append("빵")
cart.append("계란")
print(cart)`,
          expectedOutput: "['우유', '빵', '계란']",
          hints: [
            'cart = []로 빈 리스트를 만들어요',
            'cart.append("우유") 형태로 추가해요',
            '리스트명.append(값) 순서를 지켜야 해요',
            'append()는 항상 맨 뒤에 추가해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: "['우유', '빵', '계란']",
              description: '3개 항목이 순서대로 들어있어야 해요'
            },
            {
              input: '',
              expectedOutput: '우유',
              description: '우유가 포함되어야 해요'
            },
            {
              input: '',
              expectedOutput: '빵',
              description: '빵이 포함되어야 해요'
            },
            {
              input: '',
              expectedOutput: '계란',
              description: '계란이 포함되어야 해요'
            }
          ],
          commonMistakes: [
            '괄호 없이 사용 - cart.append "우유" ❌ (올바름: cart.append("우유"))',
            'append 철자 틀리기 - cart.apend() ❌',
            '여러 개 한 번에 추가 - cart.append("우유", "빵") ❌ (한 번에 하나씩)'
          ],
          challenges: [
            {
              id: 'c1',
              title: 'append() 기초',
              description: 'append() 메서드의 기본 사용법을 연습합니다.',
              difficulty: 'easy',
              hints: ['리스트명.append(값)', '괄호를 꼭 써야 해요'],
              estimatedMinutes: 3,
              starterCode: '# 빈 리스트에 요소를 추가하세요\n',
              feedback: {
                perfect: 'append()를 완벽하게 사용했어요!',
                good: '메서드 호출을 잘했어요!',
                partial: '문법을 다시 확인하세요.',
                wrong: 'list.append(value) 형태로 써야 해요.'
              }
            },
            {
              id: 'c2',
              title: '반복 추가',
              description: '여러 요소를 연속으로 추가합니다.',
              difficulty: 'easy',
              hints: ['append()를 여러 번 호출하세요', '순서대로 추가돼요'],
              estimatedMinutes: 5,
              starterCode: '# 5개 요소를 추가하세요\n',
              feedback: {
                perfect: '반복 추가를 완벽하게 했어요!',
                good: '여러 번 추가를 잘했어요!',
                partial: '일부만 추가됐어요.',
                wrong: '각 요소마다 append()를 써야 해요.'
              }
            },
            {
              id: 'c3',
              title: '동적 리스트 구축',
              description: '입력을 받아 동적으로 리스트를 만듭니다.',
              difficulty: 'medium',
              hints: ['input()과 append() 조합', '빈 리스트로 시작하세요'],
              estimatedMinutes: 8,
              starterCode: '# 사용자 입력을 받아 리스트를 만드세요\n',
              feedback: {
                perfect: '동적 리스트를 완벽하게 만들었어요!',
                good: 'input과 append 조합을 잘했어요!',
                partial: '일부 기능이 부족해요.',
                wrong: '입력받은 값을 append()로 추가하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 4: len() 함수
        {
          id: '1-6-4',
          title: '리스트 길이 재기',
          description: 'len() 함수로 리스트에 몇 개의 요소가 있는지 확인해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'create',
          concept: 'len() 함수',
          conceptExplanation: `len() 함수는 리스트의 길이(요소 개수)를 반환해요. 리스트가 비어있는지, 몇 개나 있는지 확인할 때 사용해요!

예제 코드:
\`\`\`python
fruits = ["사과", "바나나", "포도"]
print(len(fruits))  # 3

empty_list = []
print(len(empty_list))  # 0

numbers = [10, 20, 30, 40, 50]
print("숫자 개수:", len(numbers))  # 5
print("마지막 인덱스:", len(numbers) - 1)  # 4
\`\`\`

len()은 리스트뿐 아니라 문자열, 튜플 등 다양한 자료구조의 길이를 잴 수 있어요. 게임에서 인벤토리 개수 확인, 메시지 글자 수 세기 등에 사용돼요!`,
          learningObjectives: [
            'len() 함수를 사용할 수 있다',
            '리스트 길이를 활용한 계산을 할 수 있다',
            '빈 리스트를 확인할 수 있다'
          ],
          realWorldExample: 'SNS에서 "팔로워 253명"을 표시할 때 len(followers)를 사용해요',
          starterCode: `# 친구 목록을 만들고
# 친구가 몇 명인지 출력하세요
# "친구가 [숫자]명 있습니다." 형식으로 출력

# 여기에 코드를 작성하세요
# friends = ["철수", "영희", "민수", "지영"]
# count = len(friends)
# ...

`,
          solution: `friends = ["철수", "영희", "민수", "지영"]
count = len(friends)
print("친구가 " + str(count) + "명 있습니다.")`,
          expectedOutput: '친구가 4명 있습니다.',
          hints: [
            'len(리스트명)으로 길이를 구해요',
            'len()의 결과는 숫자예요',
            '출력할 때 str()로 문자열로 변환해야 해요',
            'len([1, 2, 3])은 3이에요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '친구가 4명 있습니다.',
              description: '정확한 친구 수가 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '4',
              description: 'len() 결과가 올바르게 포함되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '리스트에 4명의 이름이 있어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '형식이 정확해야 해요'
            }
          ],
          commonMistakes: [
            'length() 사용 - Python에서는 len()이에요',
            'len을 괄호 없이 - len fruits ❌ (올바름: len(fruits))',
            '인덱스와 헷갈림 - len([1,2,3])은 3이지만 마지막 인덱스는 2예요'
          ],
          challenges: [
            {
              id: 'c1',
              title: 'len() 기초',
              description: 'len() 함수의 기본 사용법을 연습합니다.',
              difficulty: 'easy',
              hints: ['len(리스트) 형태', '결과는 정수예요'],
              estimatedMinutes: 3,
              starterCode: '# 다양한 리스트의 길이를 출력하세요\n',
              feedback: {
                perfect: 'len()을 완벽하게 사용했어요!',
                good: '길이 계산을 잘했어요!',
                partial: '일부 len() 사용이 틀렸어요.',
                wrong: 'len(리스트명)으로 써야 해요.'
              }
            },
            {
              id: 'c2',
              title: '빈 리스트 확인',
              description: '리스트가 비어있는지 확인하는 방법을 배웁니다.',
              difficulty: 'easy',
              hints: ['빈 리스트의 len()은 0이에요', 'len() == 0으로 확인'],
              estimatedMinutes: 5,
              starterCode: '# 빈 리스트와 차있는 리스트를 비교하세요\n',
              feedback: {
                perfect: '빈 리스트 확인을 완벽하게 했어요!',
                good: 'len() 활용을 잘했어요!',
                partial: '확인 방법을 다시 보세요.',
                wrong: 'len()이 0이면 비어있어요.'
              }
            },
            {
              id: 'c3',
              title: 'len() 활용',
              description: 'len()을 계산에 활용합니다.',
              difficulty: 'medium',
              hints: ['마지막 인덱스 = len() - 1', '평균 = 합계 / len()'],
              estimatedMinutes: 7,
              starterCode: '# 리스트 평균을 계산하세요\n',
              feedback: {
                perfect: 'len() 활용을 완벽하게 했어요!',
                good: '계산을 잘 했어요!',
                partial: '일부 계산이 틀렸어요.',
                wrong: 'len()을 나누기에 사용하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 5: 리스트 종합 활용
        {
          id: '1-6-5',
          title: 'To-Do 리스트 만들기',
          description: '리스트 기능을 모두 활용해서 할 일 관리 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 100,
          estimatedMinutes: 20,
          phase: 'create',
          concept: '리스트 종합 활용',
          conceptExplanation: `지금까지 배운 리스트 기능을 모두 활용하면 실용적인 프로그램을 만들 수 있어요!

사용할 개념:
- 빈 리스트 생성: []
- append(): 할 일 추가
- len(): 할 일 개수 확인
- 인덱싱: 특정 할 일 확인
- 슬라이싱: 일부 할 일 보기

예제 코드:
\`\`\`python
todo_list = []
todo_list.append("숙제하기")
todo_list.append("운동하기")
print("할 일 개수:", len(todo_list))
print("첫 번째 할 일:", todo_list[0])
print("모든 할 일:", todo_list)
\`\`\``,
          learningObjectives: [
            '리스트 기능을 종합적으로 활용할 수 있다',
            '실용적인 프로그램을 설계할 수 있다',
            '사용자 친화적인 출력을 만들 수 있다'
          ],
          realWorldExample: '스마트폰의 메모앱, 할 일 관리 앱이 이런 방식으로 작동해요',
          starterCode: `# To-Do 리스트 프로그램을 만드세요
# 1. 빈 리스트 생성
# 2. 할 일 3개 추가
# 3. 전체 개수 출력
# 4. 첫 번째 할 일 출력
# 5. 모든 할 일 출력

# 여기에 코드를 작성하세요

`,
          solution: `todo_list = []
todo_list.append("영어 단어 외우기")
todo_list.append("수학 문제 풀기")
todo_list.append("피아노 연습하기")

print("오늘의 할 일:", len(todo_list), "개")
print("가장 중요한 할 일:", todo_list[0])
print("전체 목록:", todo_list)`,
          expectedOutput: '오늘의 할 일: 3 개\n가장 중요한 할 일: 영어 단어 외우기\n전체 목록: [\'영어 단어 외우기\', \'수학 문제 풀기\', \'피아노 연습하기\']',
          hints: [
            '빈 리스트로 시작하세요: todo_list = []',
            'append()로 3개 추가하세요',
            'len()으로 개수를 세세요',
            '인덱스 0이 첫 번째예요',
            '리스트명만 print하면 전체가 나와요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '3',
              description: '할 일이 3개 있어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: 'len()을 사용해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '첫 번째 할 일을 인덱싱으로 가져와야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '모든 할 일이 출력되어야 해요'
            }
          ],
          commonMistakes: [
            '할 일을 리스트 리터럴로 만들기 - 빈 리스트에서 시작해야 해요',
            'append() 대신 수동으로 추가 - append()를 연습하는 미션이에요',
            '개수를 하드코딩 - len()을 사용해야 해요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 To-Do',
              description: '간단한 할 일 목록을 만듭니다.',
              difficulty: 'easy',
              hints: ['3개 할 일만', '기본 정보만 출력'],
              estimatedMinutes: 6,
              starterCode: '# 간단한 할 일 목록\n',
              feedback: {
                perfect: '기본 To-Do를 완벽하게 만들었어요!',
                good: '구조가 좋아요!',
                partial: '일부 기능이 빠졌어요.',
                wrong: 'append()와 len()을 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '고급 To-Do',
              description: '더 많은 기능을 추가합니다.',
              difficulty: 'medium',
              hints: ['5개 이상 할 일', '슬라이싱으로 일부만 보기'],
              estimatedMinutes: 10,
              starterCode: '# 기능이 많은 할 일 목록\n',
              feedback: {
                perfect: '고급 기능을 완벽하게 구현했어요!',
                good: '다양한 기능을 잘 추가했어요!',
                partial: '더 많은 기능을 추가하세요.',
                wrong: '슬라이싱도 활용해보세요.'
              }
            },
            {
              id: 'c3',
              title: 'To-Do 마스터',
              description: '사용자 입력까지 받는 완전한 프로그램을 만듭니다.',
              difficulty: 'hard',
              hints: ['input()으로 할 일 입력받기', '번호 매기기', '예쁜 형식'],
              estimatedMinutes: 15,
              starterCode: '# 사용자 입력 To-Do\n',
              feedback: {
                perfect: '완벽한 To-Do 프로그램이에요!',
                good: '실용적인 프로그램이에요!',
                partial: '기능을 더 추가하세요.',
                wrong: '사용자와 상호작용하게 만드세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6: 주간 프로젝트 - 성적 관리 시스템
        {
          id: '1-6-6',
          title: '성적 관리 시스템',
          description: '리스트로 점수를 관리하고 통계를 내는 프로젝트',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 25,
          phase: 'create',
          isKeyMission: true,
          concept: '주간 프로젝트: 리스트 종합',
          conceptExplanation: `리스트의 모든 기능을 활용해서 실용적인 성적 관리 시스템을 만들어봐요!

구현할 기능:
1. 점수 리스트 생성/추가
2. 총점, 평균 계산 (sum(), len() 활용)
3. 최고점, 최저점 찾기 (max(), min())
4. 특정 점수 확인 (인덱싱)
5. 상위 N개 보기 (슬라이싱)

예제 출력:
\`\`\`
=== 성적 관리 시스템 ===
과목 수: 5
총점: 450
평균: 90.0
최고점: 98
최저점: 85
상위 3과목: [98, 95, 92]
\`\`\``,
          learningObjectives: [
            '리스트 메서드를 종합적으로 활용할 수 있다',
            '통계 계산 로직을 구현할 수 있다',
            '복합적인 프로그램을 설계할 수 있다'
          ],
          realWorldExample: '학교 성적 시스템, 게임 점수 랭킹, 판매 통계가 이렇게 만들어져요',
          starterCode: `# 성적 관리 시스템을 만드세요
# 점수 리스트: [85, 92, 78, 95, 88]
# 계산할 것: 과목 수, 총점, 평균, 최고점, 최저점

# 여기에 코드를 작성하세요
# scores = [85, 92, 78, 95, 88]
# ...

`,
          solution: `scores = [85, 92, 78, 95, 88]

print("=== 성적 관리 시스템 ===")
print("과목 수:", len(scores))
print("총점:", sum(scores))
print("평균:", sum(scores) / len(scores))
print("최고점:", max(scores))
print("최저점:", min(scores))

# 정렬된 상위 3개
sorted_scores = sorted(scores, reverse=True)
print("상위 3과목:", sorted_scores[:3])`,
          expectedOutput: '=== 성적 관리 시스템 ===\n과목 수: 5\n총점: 438\n평균: 87.6\n최고점: 95\n최저점: 78\n상위 3과목: [95, 92, 88]',
          hints: [
            'sum(리스트)로 총합을 구해요',
            '평균 = sum() / len()',
            'max()와 min()으로 최대/최소를 구해요',
            'sorted(리스트, reverse=True)로 내림차순 정렬',
            '[:3]으로 상위 3개를 가져와요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '5',
              description: '과목 수가 올바르게 표시되어야 해요'
            },
            {
              input: '',
              expectedOutput: '438',
              description: '총점이 정확해야 해요'
            },
            {
              input: '',
              expectedOutput: '87.6',
              description: '평균이 정확해야 해요'
            },
            {
              input: '',
              expectedOutput: '95',
              description: '최고점이 올바르게 표시되어야 해요'
            }
          ],
          commonMistakes: [
            '평균을 수동 계산 - sum()과 len()을 사용하세요',
            'max/min을 직접 찾기 - 내장 함수를 사용하세요',
            '정렬 안 하고 슬라이싱 - sorted()로 먼저 정렬해야 해요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 통계',
              description: '기본적인 통계 값을 계산합니다.',
              difficulty: 'easy',
              hints: ['sum(), len(), max(), min()', '기본 사칙연산'],
              estimatedMinutes: 7,
              starterCode: '# 기본 통계 계산\n',
              feedback: {
                perfect: '통계 계산을 완벽하게 했어요!',
                good: '기본 함수를 잘 사용했어요!',
                partial: '일부 계산이 빠졌어요.',
                wrong: '내장 함수를 활용하세요.'
              }
            },
            {
              id: 'c2',
              title: '고급 통계',
              description: '정렬과 슬라이싱을 활용한 고급 통계를 만듭니다.',
              difficulty: 'medium',
              hints: ['sorted() 사용', '상위/하위 N개', '백분위 계산'],
              estimatedMinutes: 12,
              starterCode: '# 고급 통계 프로그램\n',
              feedback: {
                perfect: '고급 통계를 완벽하게 구현했어요!',
                good: '정렬 활용을 잘했어요!',
                partial: '더 많은 통계를 추가하세요.',
                wrong: 'sorted()와 슬라이싱을 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '완전한 성적 시스템',
              description: '입력, 계산, 출력이 모두 포함된 시스템을 만듭니다.',
              difficulty: 'hard',
              hints: ['점수 입력받기', '모든 통계 계산', '예쁜 표 형식'],
              estimatedMinutes: 20,
              starterCode: '# 완전한 성적 관리 시스템\n',
              feedback: {
                perfect: '완벽한 시스템이에요! 실제로 사용할 수 있겠어요!',
                good: '훌륭한 프로그램이에요!',
                partial: '기능을 더 추가하세요.',
                wrong: '모든 요구사항을 충족하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 7: 함수 기초 (6 missions, 3 hours)
    // ============================================
    {
      id: 'week-7',
      number: 7,
      title: '코드 재사용하기',
      description: '함수로 코드를 묶어서 재사용하고 프로그램을 체계적으로 만들어요',
      missions: [
        // Mission 1: 함수 정의와 호출
        {
          id: '1-7-1',
          title: '나만의 명령어 만들기',
          description: '함수를 정의하고 호출하는 기본 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 15,
          phase: 'use',
          isKeyMission: true,
          concept: '함수 정의와 호출',
          conceptExplanation: `함수는 여러 명령을 하나로 묶어서 이름을 붙인 거예요. def로 정의하고, 이름()으로 호출해서 사용해요!

예제 코드:
\`\`\`python
def greet():
    print("안녕하세요!")
    print("오늘도 좋은 하루 되세요!")

# 함수 호출
greet()  # 안녕하세요! 오늘도 좋은 하루 되세요!
greet()  # 또 실행됨!
greet()  # 몇 번이든 재사용 가능!
\`\`\`

한 번 정의하면 여러 번 재사용할 수 있어요. 코드 중복을 줄이고, 프로그램을 체계적으로 만들 수 있어요. 모든 프로그램의 핵심이에요!`,
          learningObjectives: [
            'def 키워드로 함수를 정의할 수 있다',
            '함수 이름()으로 호출할 수 있다',
            '함수를 재사용할 수 있다'
          ],
          realWorldExample: '게임에서 "공격하기" 버튼을 누르면 attack() 함수가 실행돼요',
          starterCode: `# "환영합니다!"를 3번 출력하는 함수를 만들고
# 그 함수를 2번 호출하세요 (총 6번 출력됨)

# 여기에 코드를 작성하세요
# def welcome():
#     print("환영합니다!")
#     ...
# welcome()  # 호출

`,
          solution: `def welcome():
    print("환영합니다!")
    print("환영합니다!")
    print("환영합니다!")

welcome()
welcome()`,
          expectedOutput: '환영합니다!\n환영합니다!\n환영합니다!\n환영합니다!\n환영합니다!\n환영합니다!',
          hints: [
            'def 함수명(): 형태로 시작해요',
            '함수 안의 코드는 들여쓰기(4칸)를 해야 해요',
            '함수명()으로 호출해요',
            '호출할 때마다 함수 안의 코드가 실행돼요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '환영합니다!',
              description: '"환영합니다!"가 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '총 6번 출력되어야 해요 (3 × 2)'
            },
            {
              input: '',
              expectedOutput: '',
              description: '함수를 정의하고 호출해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '들여쓰기가 올바르게 되어있어야 해요'
            }
          ],
          commonMistakes: [
            '들여쓰기 안 하기 - 함수 안의 코드는 반드시 들여쓰기해요',
            '괄호 빼먹기 - def greet: ❌ (올바름: def greet():)',
            '호출 안 하기 - 함수를 정의만 하고 호출 안 하면 실행 안 돼요'
          ],
          challenges: [
            {
              id: 'c1',
              title: '함수 정의 기초',
              description: '간단한 함수를 정의하고 호출합니다.',
              difficulty: 'easy',
              hints: ['def 함수명():', '들여쓰기 4칸', '함수명() 호출'],
              estimatedMinutes: 4,
              starterCode: '# hello() 함수를 만들어보세요\n',
              feedback: {
                perfect: '함수를 완벽하게 만들었어요!',
                good: 'def와 호출을 잘했어요!',
                partial: '들여쓰기를 확인하세요.',
                wrong: 'def 함수명(): 형태로 시작하세요.'
              }
            },
            {
              id: 'c2',
              title: '함수 재사용',
              description: '같은 함수를 여러 번 호출합니다.',
              difficulty: 'easy',
              hints: ['한 번 정의하고', '여러 번 호출하세요'],
              estimatedMinutes: 5,
              starterCode: '# 함수를 5번 호출하세요\n',
              feedback: {
                perfect: '재사용을 완벽하게 했어요!',
                good: '함수의 장점을 이해했어요!',
                partial: '더 많이 호출하세요.',
                wrong: '같은 함수를 여러 번 쓸 수 있어요.'
              }
            },
            {
              id: 'c3',
              title: '여러 함수 만들기',
              description: '2개 이상의 함수를 만들고 각각 호출합니다.',
              difficulty: 'medium',
              hints: ['각 함수마다 다른 이름', '각각 따로 호출'],
              estimatedMinutes: 8,
              starterCode: '# 인사, 작별 함수 2개를 만드세요\n',
              feedback: {
                perfect: '여러 함수를 완벽하게 만들었어요!',
                good: '함수를 잘 분리했어요!',
                partial: '더 많은 함수를 만드세요.',
                wrong: '각 기능마다 함수를 만드세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 2: 매개변수 기초
        {
          id: '1-7-2',
          title: '함수에 값 전달하기',
          description: '매개변수로 함수에 값을 전달하는 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 90,
          estimatedMinutes: 18,
          phase: 'modify',
          isKeyMission: true,
          concept: '함수 매개변수',
          conceptExplanation: `매개변수는 함수에 값을 전달하는 변수예요. 괄호 안에 매개변수를 넣으면 함수가 그 값을 받아서 사용할 수 있어요!

예제 코드:
\`\`\`python
def greet(name):
    print("안녕하세요, " + name + "님!")

greet("철수")  # 안녕하세요, 철수님!
greet("영희")  # 안녕하세요, 영희님!

def add(a, b):
    print(a + b)

add(10, 20)  # 30
add(5, 7)    # 12
\`\`\`

매개변수가 있으면 같은 함수로 다른 값을 처리할 수 있어요. 여러 개의 매개변수를 쉼표로 구분해서 받을 수 있어요. 함수를 훨씬 유연하게 만들어줘요!`,
          learningObjectives: [
            '매개변수를 받는 함수를 정의할 수 있다',
            '인자를 전달해서 함수를 호출할 수 있다',
            '여러 매개변수를 사용할 수 있다'
          ],
          realWorldExample: '유튜브 검색창에 "마인크래프트"를 입력하면 search("마인크래프트") 함수가 실행돼요',
          starterCode: `# 이름을 매개변수로 받아서
# "[이름]님, 코딩을 시작합니다!" 를 출력하는 함수를 만드세요
# 그 함수를 "민지", "준호" 두 이름으로 호출하세요

# 여기에 코드를 작성하세요
# def start_coding(name):
#     ...

`,
          solution: `def start_coding(name):
    print(name + "님, 코딩을 시작합니다!")

start_coding("민지")
start_coding("준호")`,
          expectedOutput: '민지님, 코딩을 시작합니다!\n준호님, 코딩을 시작합니다!',
          hints: [
            'def 함수명(매개변수): 형태로 정의해요',
            '매개변수는 함수 안에서 변수처럼 사용해요',
            '호출할 때 괄호 안에 값을 넣어요: 함수명("값")',
            '문자열 매개변수는 따옴표로 감싸서 전달해요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '민지님, 코딩을 시작합니다!',
              description: '민지로 호출한 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '준호님, 코딩을 시작합니다!',
              description: '준호로 호출한 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '매개변수를 사용하는 함수를 정의해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '함수를 2번 호출해야 해요'
            }
          ],
          commonMistakes: [
            '매개변수 없이 정의 - def greet(): ❌ (올바름: def greet(name):)',
            '호출할 때 값 안 넣기 - greet() ❌ (올바름: greet("철수"))',
            '매개변수와 인자 개수 불일치 - greet()에 greet("철수", "영희") ❌'
          ],
          challenges: [
            {
              id: 'c1',
              title: '매개변수 1개',
              description: '매개변수 하나를 받는 함수를 만듭니다.',
              difficulty: 'easy',
              hints: ['def 함수명(매개변수):', '매개변수를 함수 안에서 사용'],
              estimatedMinutes: 4,
              starterCode: '# 이름을 받아 인사하는 함수\n',
              feedback: {
                perfect: '매개변수를 완벽하게 사용했어요!',
                good: '값 전달을 잘했어요!',
                partial: '매개변수 사용을 확인하세요.',
                wrong: '괄호 안에 매개변수를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: '매개변수 2개',
              description: '두 개의 매개변수를 받는 함수를 만듭니다.',
              difficulty: 'easy',
              hints: ['def 함수명(a, b):', '쉼표로 구분'],
              estimatedMinutes: 6,
              starterCode: '# 두 수를 더하는 함수\n',
              feedback: {
                perfect: '여러 매개변수를 완벽하게 사용했어요!',
                good: '두 값을 잘 받았어요!',
                partial: '매개변수 순서를 확인하세요.',
                wrong: '쉼표로 매개변수를 구분하세요.'
              }
            },
            {
              id: 'c3',
              title: '매개변수 활용',
              description: '매개변수를 계산과 출력에 활용합니다.',
              difficulty: 'medium',
              hints: ['매개변수로 계산', '결과 출력', '여러 번 호출'],
              estimatedMinutes: 8,
              starterCode: '# 이름과 나이를 받아 소개하는 함수\n',
              feedback: {
                perfect: '매개변수 활용을 완벽하게 했어요!',
                good: '값을 잘 처리했어요!',
                partial: '더 많이 활용하세요.',
                wrong: '매개변수를 계산에 사용하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 3: 반환값 (return)
        {
          id: '1-7-3',
          title: '함수에서 결과 받기',
          description: 'return으로 함수가 계산한 결과를 받아오는 방법을 배워요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 100,
          estimatedMinutes: 20,
          phase: 'create',
          isKeyMission: true,
          concept: '함수 반환값 (return)',
          conceptExplanation: `return은 함수가 계산한 결과를 돌려주는 명령이에요. return을 만나면 함수가 즉시 종료되고 값을 반환해요!

예제 코드:
\`\`\`python
def add(a, b):
    result = a + b
    return result

answer = add(10, 20)  # 30을 받아서 answer에 저장
print(answer)  # 30

def multiply(x, y):
    return x * y  # 계산 결과를 바로 반환

print(multiply(5, 6))  # 30
\`\`\`

return이 있으면 함수의 결과를 변수에 저장하거나 다른 계산에 사용할 수 있어요. print()는 화면에 보여주기만 하지만, return은 값을 돌려줘요. 진짜 "계산기" 같은 함수를 만들 수 있어요!`,
          learningObjectives: [
            'return 문을 사용할 수 있다',
            '반환값을 변수에 저장할 수 있다',
            '반환값과 출력의 차이를 이해한다'
          ],
          realWorldExample: '계산기 앱에서 "2 + 3"을 누르면 calculate(2, 3)이 5를 return해요',
          starterCode: `# 두 수를 곱한 결과를 반환하는 함수를 만들고
# 5 × 8의 결과를 변수에 저장한 후 출력하세요

# 여기에 코드를 작성하세요
# def multiply(a, b):
#     return a * b
# result = multiply(5, 8)
# ...

`,
          solution: `def multiply(a, b):
    return a * b

result = multiply(5, 8)
print(result)`,
          expectedOutput: '40',
          hints: [
            'return 키워드 뒤에 돌려줄 값을 써요',
            '함수 호출 결과를 변수에 저장할 수 있어요',
            'return a * b 처럼 계산식을 바로 반환할 수 있어요',
            'return 이후의 코드는 실행되지 않아요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '40',
              description: '5 × 8 = 40이 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: 'return을 사용해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '반환값을 변수에 저장해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '최종 결과를 print()로 출력해야 해요'
            }
          ],
          commonMistakes: [
            'print와 return 혼동 - print()는 출력만, return은 값을 돌려줘요',
            'return 없이 값만 쓰기 - a + b ❌ (올바름: return a + b)',
            '반환값을 저장 안 하기 - multiply(5, 8)만 쓰면 결과가 사라져요'
          ],
          challenges: [
            {
              id: 'c1',
              title: 'return 기초',
              description: '간단한 계산 결과를 반환합니다.',
              difficulty: 'easy',
              hints: ['return 값', '결과를 변수에 저장'],
              estimatedMinutes: 5,
              starterCode: '# 두 수를 더한 결과를 반환하세요\n',
              feedback: {
                perfect: 'return을 완벽하게 사용했어요!',
                good: '반환을 잘 이해했어요!',
                partial: 'return 위치를 확인하세요.',
                wrong: 'return 키워드를 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '여러 계산 함수',
              description: '사칙연산을 각각 반환하는 함수들을 만듭니다.',
              difficulty: 'medium',
              hints: ['add, sub, mul, div 함수', '각각 return'],
              estimatedMinutes: 8,
              starterCode: '# 사칙연산 4개 함수를 만드세요\n',
              feedback: {
                perfect: '모든 함수를 완벽하게 만들었어요!',
                good: '여러 함수를 잘 만들었어요!',
                partial: '일부 함수가 빠졌어요.',
                wrong: '각 연산마다 함수를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '반환값 연쇄 사용',
              description: '함수의 반환값을 다른 함수의 인자로 사용합니다.',
              difficulty: 'medium',
              hints: ['add(multiply(2, 3), 5) 같은 형태', '안쪽부터 계산'],
              estimatedMinutes: 10,
              starterCode: '# 함수 결과를 다른 함수에 전달하세요\n',
              feedback: {
                perfect: '반환값 연쇄를 완벽하게 했어요!',
                good: '중첩 호출을 잘했어요!',
                partial: '더 복잡하게 조합하세요.',
                wrong: '함수의 결과를 바로 사용하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 4: 기본값 매개변수
        {
          id: '1-7-4',
          title: '기본값으로 편리하게',
          description: '매개변수에 기본값을 설정하는 방법을 배워요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 90,
          estimatedMinutes: 18,
          phase: 'create',
          concept: '기본값 매개변수',
          conceptExplanation: `매개변수에 기본값을 설정하면, 값을 전달하지 않았을 때 기본값이 사용돼요. 선택적 매개변수를 만들 수 있어요!

예제 코드:
\`\`\`python
def greet(name="친구"):
    print("안녕, " + name + "!")

greet("철수")  # 안녕, 철수!
greet()        # 안녕, 친구! (기본값 사용)

def power(base, exponent=2):
    return base ** exponent

print(power(5))     # 25 (5의 2제곱)
print(power(5, 3))  # 125 (5의 3제곱)
\`\`\`

기본값이 있는 매개변수는 생략할 수 있어요. 자주 쓰는 값을 기본값으로 설정하면 함수 사용이 더 편해져요. 기본값은 항상 뒤쪽 매개변수에만 설정할 수 있어요!`,
          learningObjectives: [
            '기본값 매개변수를 정의할 수 있다',
            '선택적 매개변수를 사용할 수 있다',
            '기본값 매개변수의 위치 규칙을 이해한다'
          ],
          realWorldExample: 'print("안녕", end="\\n")에서 end는 기본값이 줄바꿈이에요',
          starterCode: `# 이름과 인사말을 매개변수로 받되,
# 인사말의 기본값은 "안녕하세요"로 설정하세요
# greet("철수")와 greet("영희", "환영합니다") 호출하세요

# 여기에 코드를 작성하세요
# def greet(name, message="안녕하세요"):
#     ...

`,
          solution: `def greet(name, message="안녕하세요"):
    print(message + ", " + name + "님!")

greet("철수")
greet("영희", "환영합니다")`,
          expectedOutput: '안녕하세요, 철수님!\n환영합니다, 영희님!',
          hints: [
            'def 함수명(매개변수=기본값): 형태로 정의해요',
            '기본값이 있는 매개변수는 생략 가능해요',
            '기본값 매개변수는 뒤쪽에 와야 해요',
            '호출할 때 값을 주면 기본값 대신 그 값이 사용돼요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '안녕하세요, 철수님!',
              description: '기본값이 사용되어야 해요'
            },
            {
              input: '',
              expectedOutput: '환영합니다, 영희님!',
              description: '전달한 값이 기본값을 덮어써야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '기본값 매개변수를 정의해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '두 가지 방식으로 호출해야 해요'
            }
          ],
          commonMistakes: [
            '기본값 매개변수를 앞에 - def f(a=1, b): ❌ (기본값은 뒤에)',
            '기본값을 문자열인데 따옴표 안 쓰기 - def f(name=철수): ❌',
            '기본값과 일반 매개변수 순서 혼동'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본값 기초',
              description: '기본값이 있는 간단한 함수를 만듭니다.',
              difficulty: 'easy',
              hints: ['매개변수=값', '생략하고 호출해보기'],
              estimatedMinutes: 5,
              starterCode: '# 기본값이 있는 함수를 만드세요\n',
              feedback: {
                perfect: '기본값을 완벽하게 설정했어요!',
                good: '선택적 매개변수를 잘 만들었어요!',
                partial: '기본값 문법을 확인하세요.',
                wrong: '= 로 기본값을 설정하세요.'
              }
            },
            {
              id: 'c2',
              title: '여러 기본값',
              description: '2개 이상의 기본값 매개변수를 사용합니다.',
              difficulty: 'medium',
              hints: ['여러 개 설정 가능', '모두 뒤쪽에'],
              estimatedMinutes: 7,
              starterCode: '# 여러 기본값을 가진 함수\n',
              feedback: {
                perfect: '여러 기본값을 완벽하게 설정했어요!',
                good: '복잡한 함수를 잘 만들었어요!',
                partial: '기본값 위치를 확인하세요.',
                wrong: '기본값 매개변수는 뒤에 와야 해요.'
              }
            },
            {
              id: 'c3',
              title: '기본값 활용 마스터',
              description: '기본값을 실용적으로 활용하는 함수를 만듭니다.',
              difficulty: 'medium',
              hints: ['자주 쓰는 값을 기본값으로', '선택적 설정 만들기'],
              estimatedMinutes: 10,
              starterCode: '# 실용적인 기본값 함수\n',
              feedback: {
                perfect: '기본값을 실용적으로 활용했어요!',
                good: '함수 설계를 잘했어요!',
                partial: '더 유용한 기본값을 생각해보세요.',
                wrong: '자주 쓰는 값을 기본값으로 하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 5: 함수 종합 활용
        {
          id: '1-7-5',
          title: '계산기 프로그램',
          description: '함수를 활용해서 완전한 계산기 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 110,
          estimatedMinutes: 22,
          phase: 'create',
          concept: '함수 종합 활용',
          conceptExplanation: `지금까지 배운 함수 기능을 모두 활용하면 체계적인 프로그램을 만들 수 있어요!

사용할 개념:
- 함수 정의: 각 기능을 함수로 분리
- 매개변수: 계산할 값 전달
- return: 계산 결과 반환
- 기본값: 선택적 옵션 제공

예제 코드:
\`\`\`python
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

result1 = add(10, 5)
result2 = subtract(10, 5)
print("덧셈:", result1)
print("뺄셈:", result2)
\`\`\``,
          learningObjectives: [
            '함수로 프로그램을 체계적으로 구조화할 수 있다',
            '여러 함수를 조합해서 사용할 수 있다',
            '재사용 가능한 코드를 작성할 수 있다'
          ],
          realWorldExample: '실제 계산기 앱도 이렇게 각 연산을 함수로 만들어요',
          starterCode: `# 사칙연산 계산기를 만드세요
# 1. add, subtract, multiply, divide 함수 4개 정의
# 2. 각 함수는 두 매개변수를 받아 계산 결과를 반환
# 3. 각 함수를 테스트해서 결과 출력

# 여기에 코드를 작성하세요

`,
          solution: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    return a / b

print("10 + 5 =", add(10, 5))
print("10 - 5 =", subtract(10, 5))
print("10 × 5 =", multiply(10, 5))
print("10 ÷ 5 =", divide(10, 5))`,
          expectedOutput: '10 + 5 = 15\n10 - 5 = 5\n10 × 5 = 50\n10 ÷ 5 = 2.0',
          hints: [
            '각 연산마다 함수를 하나씩 만드세요',
            '모든 함수는 2개의 매개변수를 받아요',
            'return으로 계산 결과를 돌려주세요',
            '함수를 호출해서 결과를 출력하세요',
            '같은 숫자(10, 5)로 모든 함수를 테스트하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '15',
              description: '덧셈 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '5',
              description: '뺄셈 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '50',
              description: '곱셈 결과가 올바르게 출력되어야 해요'
            },
            {
              input: '',
              expectedOutput: '2.0',
              description: '나눗셈 결과가 올바르게 출력되어야 해요'
            }
          ],
          commonMistakes: [
            '함수 안에서 print만 하고 return 안 하기',
            '함수를 정의만 하고 호출 안 하기',
            '각 함수의 결과를 변수에 저장 안 하거나 바로 출력 안 하기'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 계산기',
              description: '4가지 연산 함수를 만듭니다.',
              difficulty: 'easy',
              hints: ['각 연산마다 함수', 'return 사용'],
              estimatedMinutes: 8,
              starterCode: '# 사칙연산 함수 4개\n',
              feedback: {
                perfect: '계산기 함수를 완벽하게 만들었어요!',
                good: '모든 연산을 잘 구현했어요!',
                partial: '일부 함수가 빠졌어요.',
                wrong: '4개 함수를 모두 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '고급 계산기',
              description: '나머지, 거듭제곱 등 추가 연산을 구현합니다.',
              difficulty: 'medium',
              hints: ['% 연산', '** 거듭제곱', '// 몫'],
              estimatedMinutes: 12,
              starterCode: '# 7개 이상의 연산 함수\n',
              feedback: {
                perfect: '고급 계산기를 완벽하게 만들었어요!',
                good: '다양한 연산을 잘 추가했어요!',
                partial: '더 많은 연산을 추가하세요.',
                wrong: '추가 연산들을 구현하세요.'
              }
            },
            {
              id: 'c3',
              title: '대화형 계산기',
              description: '사용자 입력을 받는 완전한 계산기를 만듭니다.',
              difficulty: 'hard',
              hints: ['input()으로 숫자와 연산 입력', 'if로 연산 선택', '반복 가능'],
              estimatedMinutes: 20,
              starterCode: '# 대화형 계산기 프로그램\n',
              feedback: {
                perfect: '완벽한 계산기 프로그램이에요!',
                good: '실용적인 프로그램이에요!',
                partial: '더 많은 기능을 추가하세요.',
                wrong: '사용자 입력과 반복을 구현하세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },

        // Mission 6: 주간 프로젝트 - 유틸리티 함수 라이브러리
        {
          id: '1-7-6',
          title: '나만의 함수 라이브러리',
          description: '유용한 함수들을 모아서 나만의 도구 모음을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 130,
          estimatedMinutes: 30,
          phase: 'create',
          isKeyMission: true,
          concept: '주간 프로젝트: 함수 종합',
          conceptExplanation: `프로그래머는 자주 쓰는 기능을 함수로 만들어서 라이브러리를 만들어요. 이번 프로젝트에서 나만의 유틸리티 함수 모음을 만들어봐요!

만들 함수들:
1. 문자열 함수: 반복, 거꾸로, 대문자 등
2. 수학 함수: 평균, 최대/최소, 절댓값 등
3. 리스트 함수: 합계, 개수, 필터 등
4. 변환 함수: 온도 변환, 단위 변환 등

예제 코드:
\`\`\`python
def repeat_string(text, count=3):
    return text * count

def celsius_to_fahrenheit(celsius):
    return celsius * 9/5 + 32

print(repeat_string("안녕", 2))  # 안녕안녕
print(celsius_to_fahrenheit(25))  # 77.0
\`\`\``,
          learningObjectives: [
            '실용적인 함수들을 설계할 수 있다',
            '함수 라이브러리를 체계적으로 구성할 수 있다',
            '재사용 가능한 코드의 가치를 이해한다'
          ],
          realWorldExample: 'NumPy, Pandas 같은 유명 라이브러리도 유용한 함수들의 모음이에요',
          starterCode: `# 나만의 유틸리티 함수 라이브러리를 만드세요
# 최소 6개 이상의 유용한 함수를 만들고 테스트하세요

# 1. 문자열 관련 함수 (2개)
# 2. 수학 관련 함수 (2개)
# 3. 기타 유용한 함수 (2개)

# 여기에 코드를 작성하세요

`,
          solution: `# 문자열 함수
def repeat_text(text, count=3):
    """문자열을 count번 반복"""
    return text * count

def reverse_text(text):
    """문자열을 거꾸로"""
    return text[::-1]

# 수학 함수
def average(numbers):
    """리스트의 평균 계산"""
    return sum(numbers) / len(numbers)

def is_even(number):
    """짝수 판별"""
    return number % 2 == 0

# 변환 함수
def celsius_to_fahrenheit(celsius):
    """섭씨를 화씨로 변환"""
    return celsius * 9/5 + 32

def seconds_to_minutes(seconds):
    """초를 분:초로 변환"""
    minutes = seconds // 60
    secs = seconds % 60
    return f"{minutes}분 {secs}초"

# 테스트
print("=== 문자열 함수 ===")
print(repeat_text("Hi", 3))
print(reverse_text("Python"))

print("\\n=== 수학 함수 ===")
print("평균:", average([10, 20, 30]))
print("10은 짝수?", is_even(10))

print("\\n=== 변환 함수 ===")
print("25°C =", celsius_to_fahrenheit(25), "°F")
print("125초 =", seconds_to_minutes(125))`,
          expectedOutput: '=== 문자열 함수 ===\nHiHiHi\nnohtyP\n\n=== 수학 함수 ===\n평균: 20.0\n10은 짝수? True\n\n=== 변환 함수 ===\n25°C = 77.0 °F\n125초 = 2분 5초',
          hints: [
            '각 함수는 하나의 명확한 기능만 해야 해요',
            '함수 이름은 기능을 잘 설명해야 해요',
            '주석으로 함수 설명을 달면 좋아요',
            '기본값 매개변수를 활용하면 편리해요',
            '모든 함수를 테스트 코드로 확인하세요'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '',
              description: '최소 6개의 함수가 정의되어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '모든 함수가 return을 사용해야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '각 함수를 테스트하는 코드가 있어야 해요'
            },
            {
              input: '',
              expectedOutput: '',
              description: '출력 결과가 체계적으로 정리되어야 해요'
            }
          ],
          commonMistakes: [
            '함수가 너무 복잡 - 각 함수는 하나의 기능만',
            '테스트 코드 없음 - 모든 함수를 실행해서 확인해야 해요',
            '함수명이 불명확 - 기능을 잘 나타내는 이름 사용'
          ],
          challenges: [
            {
              id: 'c1',
              title: '기본 라이브러리',
              description: '6개의 기본 함수를 만듭니다.',
              difficulty: 'medium',
              hints: ['다양한 카테고리', '간단한 기능부터'],
              estimatedMinutes: 12,
              starterCode: '# 6개 함수 라이브러리\n',
              feedback: {
                perfect: '기본 라이브러리를 완벽하게 만들었어요!',
                good: '유용한 함수들이에요!',
                partial: '더 많은 함수를 추가하세요.',
                wrong: '최소 6개 함수가 필요해요.'
              }
            },
            {
              id: 'c2',
              title: '고급 라이브러리',
              description: '10개 이상의 함수로 확장합니다.',
              difficulty: 'hard',
              hints: ['리스트 처리', '문자열 처리', '수학 계산'],
              estimatedMinutes: 20,
              starterCode: '# 10개 이상 함수 라이브러리\n',
              feedback: {
                perfect: '풍부한 라이브러리예요!',
                good: '많은 함수를 잘 만들었어요!',
                partial: '더 다양한 기능을 추가하세요.',
                wrong: '10개 이상 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '프로페셔널 라이브러리',
              description: '주석, 에러 처리, 사용 예제가 포함된 완성도 높은 라이브러리를 만듭니다.',
              difficulty: 'hard',
              hints: ['독스트링 작성', '입력 검증', '사용 예제'],
              estimatedMinutes: 30,
              starterCode: '# 완전한 함수 라이브러리\n',
              feedback: {
                perfect: '프로페셔널한 라이브러리예요!',
                good: '완성도가 높아요!',
                partial: '주석과 예제를 더 추가하세요.',
                wrong: '품질을 높이세요.'
              }
            }
          ],
          unlocked: false,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // Week 8: 종합 프로젝트
    {
      id: 'week-8',
      number: 8,
      title: '최종 프로젝트',
      description: '배운 모든 것을 활용해서 나만의 게임을 만들어요',
      missions: [
        // 10 missions building up to a final comprehensive project
        // (e.g., Number guessing game with all concepts integrated)
      ],
    },
  ],
};

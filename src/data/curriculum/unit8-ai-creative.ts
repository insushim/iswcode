import type { Unit } from '../../types';

// Unit 8: AI와 창의적 코딩 (4주, 49-52주차)
// CSTA 표준: 2-AP-17, 2-AP-18, 2-AP-19, 2-IC-20, 2-IC-21
// 목표: AI 도구 활용, 창의적 문제 해결, 미래 기술 탐색

export const unit8: Unit = {
  id: 'unit-8',
  number: 8,
  title: 'AI와 창의적 코딩',
  description: 'AI 도구를 활용하고 창의적인 프로젝트를 만들어요!',
  icon: '🤖',
  color: '#ec4899',
  unlockLevel: 65,
  totalMissions: 40,
  estimatedHours: 16,
  weeks: [
    // Week 49: AI 기초
    {
      id: 'week-49',
      number: 49,
      title: 'AI 이해하기',
      description: '인공지능의 기본 개념을 알아봐요',
      missions: [
        {
          id: 'w49-m1',
          title: 'AI란 무엇인가?',
          description: '인공지능의 개념을 이해해요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 15,
          concept: 'AI 소개',
          conceptExplanation: 'AI(인공지능)는 컴퓨터가 사람처럼 생각하고 배우는 기술이에요!',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            'AI의 정의와 기본 개념을 이해할 수 있다',
            'AI가 우리 생활에 미치는 영향을 설명할 수 있다',
            'AI와 일반 프로그램의 차이를 구분할 수 있다'
          ],
          realWorldExample: '스마트폰의 얼굴 인식, 넷플릭스의 추천 시스템, 자율주행 자동차 등 우리 주변에서 AI가 활용되고 있어요!',
          hints: [
            '💡 힌트 1: AI는 데이터에서 패턴을 찾아 학습해요',
            '💡 힌트 2: 사람의 뇌가 학습하는 것처럼 컴퓨터도 경험으로 배워요',
            '💡 힌트 3: AI는 새로운 상황에서도 학습한 내용을 활용할 수 있어요'
          ],
          commonMistakes: [
            'AI가 모든 문제를 완벽하게 해결할 수 있다고 생각하기',
            'AI와 단순한 if-else 프로그램을 같다고 생각하기',
            'AI가 사람처럼 감정을 가지고 있다고 오해하기'
          ],
          conceptCards: [
            { title: 'AI (인공지능)', description: '컴퓨터가 사람처럼 생각하고 학습하며 문제를 해결하는 기술', example: '시리, 알렉사 같은 음성 비서' },
            { title: '머신러닝', description: '데이터를 통해 컴퓨터가 스스로 학습하는 방법', example: '스팸메일을 자동으로 분류하기' },
            { title: '딥러닝', description: '사람의 뇌 구조를 모방한 인공신경망을 사용하는 학습 방법', example: '사진 속 얼굴 인식, 자율주행' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m2',
          title: 'AI의 종류',
          description: '다양한 AI 기술을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: 'AI 분류',
          conceptExplanation: '이미지 인식, 음성 인식, 자연어 처리, 게임 AI 등 다양한 종류가 있어요!',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '다양한 AI 기술의 종류를 분류할 수 있다',
            '각 AI 기술의 활용 분야를 설명할 수 있다',
            '실생활에서 사용되는 AI 사례를 찾을 수 있다'
          ],
          realWorldExample: '유튜브는 내가 좋아할 영상을 추천하고, 구글 번역은 외국어를 한국어로 바꿔주고, 게임 속 몬스터는 AI로 움직여요!',
          hints: [
            '💡 힌트 1: 우리 주변에 AI가 많이 사용되고 있어요',
            '💡 힌트 2: 이미지, 소리, 글 등 데이터 종류에 따라 다른 AI를 사용해요',
            '💡 힌트 3: 한 가지 일만 잘하는 약한 AI와 여러 일을 하는 강한 AI로 나뉘어요'
          ],
          commonMistakes: [
            '모든 AI가 같은 방식으로 작동한다고 생각하기',
            '게임 속 캐릭터 AI를 진짜 지능이라고 착각하기',
            'AI가 한 번에 모든 것을 할 수 있다고 기대하기'
          ],
          conceptCards: [
            { title: '이미지 인식 AI', description: '사진이나 영상 속 물체를 알아보는 AI', example: '얼굴 인식 잠금 해제, 사진 속 친구 찾기' },
            { title: '음성 인식 AI', description: '사람의 말을 듣고 이해하는 AI', example: '시리, 빅스비, 구글 어시스턴트' },
            { title: '자연어 처리 AI', description: '사람의 언어를 이해하고 생성하는 AI', example: 'ChatGPT, 파파고 번역' },
            { title: '게임 AI', description: '게임 속에서 캐릭터를 움직이는 AI', example: '체스 AI, 게임 몬스터' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m3',
          title: '머신러닝 기초',
          description: '기계가 배우는 방법을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 15,
          concept: '머신러닝',
          conceptExplanation: '머신러닝은 데이터를 통해 컴퓨터가 스스로 학습하는 방법이에요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '머신러닝의 기본 원리를 이해할 수 있다',
            '학습 데이터와 패턴 인식의 관계를 설명할 수 있다',
            '지도학습과 비지도학습의 차이를 구분할 수 있다'
          ],
          realWorldExample: '스팸 메일 필터는 많은 이메일을 보고 배워서 스팸을 자동으로 걸러내요. 넷플릭스는 여러분이 본 영화를 보고 좋아할 만한 영화를 추천해줘요!',
          hints: [
            '💡 힌트 1: 많은 예시를 보여주면 AI가 패턴을 찾아요',
            '💡 힌트 2: 사람이 정답을 알려주며 학습하는 것을 지도학습이라고 해요',
            '💡 힌트 3: 데이터가 많을수록 AI의 예측이 정확해져요'
          ],
          commonMistakes: [
            '데이터가 적어도 AI가 잘 학습할 수 있다고 생각하기',
            '학습 데이터에 편향이 있으면 AI도 편향될 수 있다는 것을 모르기',
            '한 번 학습하면 끝이라고 생각하기 (계속 학습이 필요해요)'
          ],
          conceptCards: [
            { title: '머신러닝', description: '데이터를 통해 컴퓨터가 스스로 패턴을 찾아 학습하는 방법', example: '스팸 메일 분류, 영화 추천' },
            { title: '지도학습', description: '정답이 있는 데이터로 학습하는 방법', example: '사진에 고양이/강아지 라벨을 붙여서 학습' },
            { title: '비지도학습', description: '정답 없이 데이터의 패턴을 스스로 찾는 학습', example: '비슷한 물건끼리 그룹 만들기' },
            { title: '학습 데이터', description: 'AI가 학습하는데 사용하는 예시 데이터', example: '1000장의 고양이 사진' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m4',
          title: '이미지 분류 체험',
          description: 'Teachable Machine으로 이미지 분류를 체험해요',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 30,
          estimatedMinutes: 20,
          concept: '이미지 분류',
          conceptExplanation: 'Teachable Machine은 간단하게 AI 모델을 만들 수 있는 도구예요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '이미지 분류 AI 모델을 직접 만들 수 있다',
            '학습 데이터의 중요성을 체험할 수 있다',
            'AI 모델의 정확도를 평가할 수 있다'
          ],
          realWorldExample: '구글 포토는 사진을 보고 친구들의 얼굴을 자동으로 분류해요. 병원에서는 X-ray 사진을 보고 질병을 찾는 AI를 사용해요!',
          hints: [
            '💡 힌트 1: 사진을 찍어서 AI를 훈련시켜봐요',
            '💡 힌트 2: 다양한 각도와 조명에서 사진을 찍으면 더 정확해져요',
            '💡 힌트 3: 충분한 양의 사진이 필요해요 (각 클래스마다 최소 30장)'
          ],
          commonMistakes: [
            '사진이 너무 적게 찍어서 AI가 제대로 학습하지 못하기',
            '비슷한 각도의 사진만 찍어서 다양성이 부족하기',
            '배경이 너무 복잡해서 AI가 헷갈리기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m5',
          title: 'AI 윤리',
          description: 'AI를 올바르게 사용하는 방법을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: 'AI 윤리',
          conceptExplanation: 'AI도 편향될 수 있고, 잘못 사용될 수 있어요. 책임감 있게 사용해야 해요!',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            'AI의 윤리적 문제점을 이해할 수 있다',
            'AI 편향성의 원인과 결과를 설명할 수 있다',
            'AI를 책임감 있게 사용하는 방법을 제안할 수 있다'
          ],
          realWorldExample: '얼굴 인식 AI가 특정 인종을 잘 못 알아보는 문제가 있었어요. 채용 AI가 성별로 차별하는 경우도 있었죠. 그래서 공정한 데이터로 학습시키는 것이 중요해요!',
          hints: [
            '💡 힌트 1: AI가 모든 것을 대신할 수 없어요',
            '💡 힌트 2: AI는 학습 데이터에 있는 편견을 그대로 배울 수 있어요',
            '💡 힌트 3: AI의 결정을 사람이 최종적으로 확인해야 해요'
          ],
          commonMistakes: [
            'AI는 항상 공정하다고 생각하기',
            'AI가 내린 결정을 무조건 믿기',
            'AI 개발자의 책임이 없다고 생각하기'
          ],
          conceptCards: [
            { title: 'AI 편향성', description: '학습 데이터의 편견이 AI에 반영되는 현상', example: '특정 그룹을 차별하는 AI' },
            { title: '개인정보 보호', description: 'AI가 개인 데이터를 안전하게 다루는 것', example: '얼굴 인식 데이터의 보안' },
            { title: 'AI 책임성', description: 'AI의 결정에 대한 설명과 책임', example: '왜 그런 결정을 내렸는지 설명하기' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m6',
          title: 'ChatGPT와 대화하기',
          description: '대화형 AI를 체험해요',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 15,
          concept: '대화형 AI',
          conceptExplanation: 'ChatGPT 같은 대화형 AI는 질문에 답하고 글을 작성할 수 있어요!',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '대화형 AI의 작동 원리를 이해할 수 있다',
            '효과적으로 AI와 대화하는 방법을 익힐 수 있다',
            'AI가 생성한 정보를 비판적으로 평가할 수 있다'
          ],
          realWorldExample: '고객센터 챗봇이 24시간 질문에 답해줘요. 작가들이 아이디어를 얻기 위해 AI와 대화하기도 해요!',
          hints: [
            '💡 힌트 1: 좋은 질문을 하면 좋은 답변을 얻어요',
            '💡 힌트 2: 구체적이고 명확하게 질문하세요',
            '💡 힌트 3: AI의 답변이 항상 정확한 것은 아니에요'
          ],
          commonMistakes: [
            'AI가 모든 것을 알고 있다고 생각하기',
            'AI의 답변을 검증 없이 그대로 사용하기',
            '너무 모호한 질문을 해서 원하는 답을 못 얻기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m7',
          title: '프롬프트 엔지니어링',
          description: 'AI에게 좋은 질문하는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'blocks',
          exp: 30,
          estimatedMinutes: 18,
          concept: '프롬프트',
          conceptExplanation: '프롬프트는 AI에게 하는 요청이에요. 명확하고 구체적일수록 좋은 결과를 얻어요!',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '효과적인 프롬프트 작성법을 이해할 수 있다',
            '역할, 맥락, 형식을 포함한 프롬프트를 작성할 수 있다',
            '프롬프트를 반복적으로 개선할 수 있다'
          ],
          realWorldExample: '"그림 그려줘" 보다 "귀여운 고양이가 우주복을 입고 달에서 놀고 있는 만화 스타일 그림을 그려줘"라고 하면 원하는 결과를 얻을 수 있어요!',
          hints: [
            '💡 힌트 1: 역할, 맥락, 형식을 명시해요',
            '💡 힌트 2: 예시를 함께 제공하면 더 좋아요',
            '💡 힌트 3: 한 번에 완벽한 프롬프트를 만들기 어려워요. 계속 수정하세요!'
          ],
          commonMistakes: [
            '너무 짧고 모호한 프롬프트 작성하기',
            '한 번에 너무 많은 것을 요구하기',
            '결과가 마음에 안 들어도 프롬프트를 개선하지 않기'
          ],
          conceptCards: [
            { title: '프롬프트', description: 'AI에게 주는 명령이나 질문', example: '"초등학생이 이해할 수 있게 설명해줘"' },
            { title: '역할 지정', description: 'AI가 어떤 역할을 해야 하는지 알려주기', example: '"너는 친절한 선생님이야"' },
            { title: '컨텍스트 제공', description: '상황이나 배경 정보 제공', example: '"초등학교 4학년을 위한 과학 숙제"' },
            { title: '형식 지정', description: '원하는 답변의 형식 명시', example: '"3가지 항목으로 정리해줘"' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m8',
          title: 'AI로 코드 생성하기',
          description: 'AI를 활용해서 코드를 작성해요',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'AI 코딩',
          conceptExplanation: 'AI가 코드를 작성하는 것을 도와줄 수 있어요. 하지만 결과를 이해하고 확인해야 해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'AI를 활용해 코드를 생성할 수 있다',
            'AI가 생성한 코드의 품질을 평가할 수 있다',
            'AI 코드를 자신의 프로젝트에 적용할 수 있다'
          ],
          realWorldExample: '프로그래머들이 GitHub Copilot 같은 AI 도구를 사용해서 더 빠르게 코드를 작성해요. 버그를 찾거나 코드를 개선하는데도 도움을 받아요!',
          hints: [
            '💡 힌트 1: 생성된 코드가 맞는지 확인하세요',
            '💡 힌트 2: 코드가 어떻게 작동하는지 이해해야 해요',
            '💡 힌트 3: AI 코드를 그대로 쓰지 말고 자신의 스타일로 수정하세요'
          ],
          commonMistakes: [
            'AI가 만든 코드를 이해하지 않고 그대로 복사하기',
            '코드에 버그가 있어도 확인하지 않기',
            'AI에게만 의존하고 직접 코딩 연습을 안 하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m9',
          title: 'AI 활용 프로젝트',
          description: 'AI 도구를 활용한 프로젝트를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 25,
          concept: '종합 실습',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'AI 도구를 프로젝트에 통합할 수 있다',
            'AI의 장단점을 고려하여 활용할 수 있다',
            '창의적으로 AI를 활용한 해결책을 제시할 수 있다'
          ],
          realWorldExample: '학생들이 Teachable Machine으로 제스처 인식 게임을 만들거나, AI 챗봇으로 퀴즈 앱을 만들 수 있어요!',
          hints: [
            '💡 힌트 1: AI의 장단점을 이해하고 활용해요',
            '💡 힌트 2: 간단한 프로젝트부터 시작하세요',
            '💡 힌트 3: AI가 실수할 수 있다는 것을 고려한 설계를 하세요'
          ],
          commonMistakes: [
            '너무 복잡한 프로젝트를 시도하기',
            'AI가 완벽하게 작동할 것이라고 기대하기',
            '사용자 피드백을 고려하지 않기'
          ],
          testCases: [
            { input: '간단한 AI 기능', expectedOutput: '정상 작동', description: '기본 기능이 작동하는지 확인' },
            { input: '예외 상황', expectedOutput: '적절한 에러 처리', description: 'AI가 실수했을 때 대처' },
            { input: '다양한 입력', expectedOutput: '일관된 결과', description: '여러 상황에서 테스트' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w49-m10',
          title: 'AI 기초 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 10,
          concept: '주간 복습',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            'AI 기초 개념을 정확히 이해했는지 확인할 수 있다',
            '학습한 내용을 실제 상황에 적용할 수 있다'
          ],
          realWorldExample: '퀴즈를 통해 AI 개념을 복습하고 실생활 활용 사례를 생각해봐요!',
          hints: [
            '💡 힌트 1: 이번 주 학습 내용을 떠올려보세요',
            '💡 힌트 2: 실생활 예시를 생각하면 도움이 돼요',
            '💡 힌트 3: 천천히 문제를 읽어보세요'
          ],
          commonMistakes: [
            '문제를 급하게 읽고 오답 선택하기',
            '개념을 정확히 이해하지 못하고 추측하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'quiz-w49',
        title: 'AI 기초 퀴즈',
        questions: [
          {
            id: 'q1',
            question: 'AI는 무엇의 약자인가요?',
            options: ['Automatic Intelligence', 'Artificial Intelligence', 'Advanced Internet', 'Auto Integration'],
            correctAnswer: 1,
            explanation: 'AI는 Artificial Intelligence(인공지능)의 약자예요. 컴퓨터가 사람처럼 생각하고 학습하는 기술을 말해요!'
          },
          {
            id: 'q2',
            question: '머신러닝이 학습하기 위해 필요한 것은?',
            options: ['전기', '데이터', '인터넷', '화면'],
            correctAnswer: 1,
            explanation: '머신러닝은 데이터를 통해 학습해요. 많은 예시 데이터를 보고 패턴을 찾아 학습하는 거예요!'
          },
          {
            id: 'q3',
            question: '프롬프트 엔지니어링에서 가장 중요한 것은?',
            options: ['짧게 쓰기', '명확하고 구체적으로 작성', '어려운 단어 사용', '많이 질문하기'],
            correctAnswer: 1,
            explanation: '프롬프트는 명확하고 구체적일수록 AI가 원하는 결과를 더 잘 만들어줘요. 역할, 맥락, 형식을 포함하면 더 좋아요!'
          }
        ]
      }
    },
    // Week 50: 창의적 코딩
    {
      id: 'week-50',
      number: 50,
      title: '창의적 코딩',
      description: '코드로 예술 작품을 만들어요',
      missions: [
        {
          id: 'w50-m1',
          title: '제너러티브 아트',
          description: '코드로 만드는 예술을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 15,
          concept: '제너러티브 아트',
          conceptExplanation: '제너러티브 아트는 알고리즘과 규칙으로 만드는 예술이에요!',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            '제너러티브 아트의 개념을 이해할 수 있다',
            '알고리즘으로 예술 작품을 만드는 방법을 설명할 수 있다',
            '창의적인 코딩 프로젝트를 기획할 수 있다'
          ],
          realWorldExample: 'NFT 아트 작품 중 많은 것이 제너러티브 아트예요. 컴퓨터가 규칙에 따라 자동으로 수천 개의 독특한 작품을 만들어내요!',
          hints: [
            '💡 힌트 1: 무작위성과 규칙의 조합으로 아름다운 패턴이 탄생해요',
            '💡 힌트 2: Math.random()과 반복문을 활용해요',
            '💡 힌트 3: 색상, 위치, 크기를 변화시켜보세요'
          ],
          commonMistakes: [
            '완전히 랜덤하게만 만들어서 예술성이 없어지기',
            '너무 복잡한 규칙을 만들어서 작동하지 않기',
            '색상 조합을 고려하지 않아서 보기 불편해지기'
          ],
          conceptCards: [
            { title: '제너러티브 아트', description: '알고리즘과 규칙으로 자동 생성되는 예술', example: '랜덤 패턴, 프랙탈 아트' },
            { title: '알고리즘 예술', description: '수학적 규칙으로 만드는 시각 작품', example: '만다라, 기하학 패턴' },
            { title: '창의적 코딩', description: '코드를 예술적 표현 도구로 사용', example: 'Processing, p5.js' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m2',
          title: '랜덤 패턴 만들기',
          description: 'Math.random()으로 랜덤 패턴을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '랜덤 패턴',
          starterCode: '// 랜덤한 원을 100개 그리세요',
          solution: 'for (let i = 0; i < 100; i++) {\n  const x = Math.random() * canvas.width;\n  const y = Math.random() * canvas.height;\n  const radius = Math.random() * 30 + 5;\n  const hue = Math.random() * 360;\n  \n  ctx.beginPath();\n  ctx.arc(x, y, radius, 0, Math.PI * 2);\n  ctx.fillStyle = `hsl(${hue}, 70%, 50%)`;\n  ctx.fill();\n}',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'Math.random()을 사용하여 랜덤 값을 생성할 수 있다',
            '반복문으로 여러 도형을 그릴 수 있다',
            'HSL 색상 시스템을 활용할 수 있다'
          ],
          realWorldExample: '배경화면, 책 표지, 웹사이트 디자인에 랜덤 패턴이 많이 사용돼요. 매번 다른 느낌을 줄 수 있어요!',
          hints: [
            '💡 힌트 1: Math.random()은 0~1 사이 값을 반환해요',
            '💡 힌트 2: canvas.width를 곱하면 캔버스 전체에 분산돼요',
            '💡 힌트 3: HSL(색조, 채도, 명도) 형식을 사용하면 다채로운 색을 만들 수 있어요'
          ],
          commonMistakes: [
            'Math.random()에 곱하기를 안 해서 작은 값만 나오기',
            '너무 많은 도형을 그려서 느려지기',
            '색상 범위를 잘못 설정해서 보기 불편하기'
          ],
          testCases: [
            { input: '100개 원 그리기', expectedOutput: '화면에 다양한 크기와 색의 원 100개', description: '기본 기능 테스트' },
            { input: '새로고침', expectedOutput: '매번 다른 패턴', description: '랜덤성 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m3',
          title: '애니메이션 만들기',
          description: 'requestAnimationFrame으로 움직이는 그래픽을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 22,
          concept: '애니메이션',
          starterCode: '// 움직이는 원을 만드세요',
          solution: 'let x = 0;\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  \n  ctx.beginPath();\n  ctx.arc(x, canvas.height/2, 30, 0, Math.PI * 2);\n  ctx.fillStyle = "blue";\n  ctx.fill();\n  \n  x += 2;\n  if (x > canvas.width) x = 0;\n  \n  requestAnimationFrame(animate);\n}\n\nanimate();',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'requestAnimationFrame을 사용하여 애니메이션을 만들 수 있다',
            '캔버스를 지우고 다시 그리는 과정을 이해할 수 있다',
            '연속적인 움직임을 구현할 수 있다'
          ],
          realWorldExample: '게임, 웹사이트 효과, 인터랙티브 아트에서 부드러운 애니메이션이 필수예요!',
          hints: [
            '💡 힌트 1: requestAnimationFrame으로 부드러운 애니메이션을 만들어요',
            '💡 힌트 2: clearRect로 이전 프레임을 지워야 해요',
            '💡 힌트 3: 위치를 조금씩 변경하면 움직이는 것처럼 보여요'
          ],
          commonMistakes: [
            'clearRect를 안 해서 잔상이 남기',
            '이동 속도가 너무 빨라서 보기 어렵기',
            '경계 처리를 안 해서 화면 밖으로 사라지기'
          ],
          testCases: [
            { input: '애니메이션 시작', expectedOutput: '원이 왼쪽에서 오른쪽으로 부드럽게 이동', description: '기본 움직임' },
            { input: '화면 끝 도달', expectedOutput: '다시 왼쪽부터 시작', description: '경계 처리' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m4',
          title: '파티클 시스템',
          description: '많은 입자가 움직이는 효과를 만들어요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 25,
          concept: '파티클',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '객체 배열을 사용하여 여러 요소를 관리할 수 있다',
            '파티클 시스템의 원리를 이해할 수 있다',
            '속도와 가속도 개념을 적용할 수 있다'
          ],
          realWorldExample: '불꽃놀이, 연기, 눈 내리는 효과, 게임 속 폭발 효과가 모두 파티클 시스템으로 만들어져요!',
          hints: [
            '💡 힌트 1: 각 파티클은 위치, 속도, 색상 등을 가져요',
            '💡 힌트 2: 배열로 여러 파티클을 관리해요',
            '💡 힌트 3: 매 프레임마다 각 파티클의 위치를 업데이트해요'
          ],
          commonMistakes: [
            '파티클이 너무 많아서 성능 저하',
            '속도 계산을 잘못해서 부자연스러운 움직임',
            '화면 밖 파티클을 제거하지 않아서 메모리 낭비'
          ],
          testCases: [
            { input: '100개 파티클 생성', expectedOutput: '자연스럽게 흩어지는 입자들', description: '기본 효과' },
            { input: '5초 후', expectedOutput: '파티클이 계속 새로 생성되고 사라짐', description: '지속성' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m5',
          title: '인터랙티브 아트',
          description: '마우스에 반응하는 아트를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 20,
          concept: '인터랙티브',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '마우스 이벤트를 처리할 수 있다',
            '사용자 입력에 반응하는 비주얼을 만들 수 있다',
            '인터랙티브 디자인 원칙을 적용할 수 있다'
          ],
          realWorldExample: '박물관의 인터랙티브 전시물, 웹사이트의 동적 효과가 마우스 움직임에 반응해요!',
          hints: [
            '💡 힌트 1: 마우스 위치에 따라 그래픽이 변해요',
            '💡 힌트 2: mousemove 이벤트를 사용해요',
            '💡 힌트 3: 마우스 좌표를 이용해 색상이나 크기를 바꿔보세요'
          ],
          commonMistakes: [
            '마우스 이벤트를 너무 많이 발생시켜서 느려지기',
            '피드백이 부족해서 인터랙션이 명확하지 않기',
            '모바일 터치를 고려하지 않기'
          ],
          testCases: [
            { input: '마우스 이동', expectedOutput: '마우스 위치에 따라 그래픽 변화', description: '인터랙션 확인' },
            { input: '빠른 마우스 움직임', expectedOutput: '부드럽게 반응', description: '성능 테스트' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m6',
          title: '사운드와 비주얼',
          description: '소리에 반응하는 비주얼을 만들어요',
          type: 'interactive-lesson',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '오디오 비주얼',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            'Web Audio API의 기초를 이해할 수 있다',
            '오디오 데이터를 시각화할 수 있다',
            '소리와 그래픽을 동기화할 수 있다'
          ],
          realWorldExample: '음악 플레이어의 스펙트럼 분석기, 게임의 리듬 게임 비주얼이 소리에 반응해요!',
          hints: [
            '💡 힌트 1: Web Audio API로 소리를 분석할 수 있어요',
            '💡 힌트 2: 주파수 데이터를 막대 그래프로 표현해요',
            '💡 힌트 3: 소리 크기에 따라 색상이나 크기를 조절해요'
          ],
          commonMistakes: [
            '오디오 권한을 요청하지 않기',
            '주파수 범위를 잘못 설정해서 보기 어렵기',
            '성능 최적화를 안 해서 끊기기'
          ],
          conceptCards: [
            { title: 'Web Audio API', description: '브라우저에서 소리를 다루는 기술', example: '음악 재생, 소리 효과' },
            { title: '주파수 분석', description: '소리를 주파수별로 나누어 분석', example: '이퀄라이저, 스펙트럼' },
            { title: '오디오 비주얼라이저', description: '소리를 시각적으로 표현', example: 'Winamp, Windows Media Player' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m7',
          title: '프랙탈 그리기',
          description: '재귀로 프랙탈 패턴을 만들어요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 25,
          concept: '프랙탈',
          conceptExplanation: '프랙탈은 작은 부분이 전체와 비슷한 패턴이에요. 재귀 함수로 만들 수 있어요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '재귀 함수의 개념을 이해하고 사용할 수 있다',
            '프랙탈 패턴의 원리를 이해할 수 있다',
            '복잡한 패턴을 간단한 규칙으로 만들 수 있다'
          ],
          realWorldExample: '나무 가지, 눈송이, 브로콜리, 해안선 등 자연에는 프랙탈 패턴이 가득해요!',
          hints: [
            '💡 힌트 1: 함수가 자기 자신을 호출해요',
            '💡 힌트 2: 종료 조건이 꼭 필요해요 (무한 루프 방지)',
            '💡 힌트 3: 크기를 점점 줄여가며 그려요'
          ],
          commonMistakes: [
            '종료 조건이 없어서 무한 루프 발생',
            '재귀 깊이가 너무 깊어서 스택 오버플로우',
            '크기 조절을 잘못해서 보이지 않기'
          ],
          conceptCards: [
            { title: '프랙탈', description: '부분이 전체와 닮은 자기 유사성 패턴', example: '눈송이, 나무 가지' },
            { title: '재귀 함수', description: '자기 자신을 호출하는 함수', example: '팩토리얼, 피보나치' },
            { title: '자기 유사성', description: '작은 부분이 전체를 닮음', example: '만델브로트 집합' }
          ],
          testCases: [
            { input: '깊이 5로 그리기', expectedOutput: '5단계 프랙탈 패턴', description: '재귀 깊이 테스트' },
            { input: '다른 각도', expectedOutput: '다양한 형태의 프랙탈', description: '매개변수 변경' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m8',
          title: '나만의 스크린세이버',
          description: '자동으로 움직이는 예술 작품을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 22,
          concept: '스크린세이버',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '여러 기법을 조합하여 작품을 만들 수 있다',
            '자동으로 변화하는 애니메이션을 설계할 수 있다',
            '시각적으로 매력적인 효과를 구현할 수 있다'
          ],
          realWorldExample: 'Windows의 파이프 스크린세이버, Mac의 플레어 스크린세이버처럼 보는 재미가 있어요!',
          hints: [
            '💡 힌트 1: 애니메이션 + 랜덤 + 색상 변화를 조합해요',
            '💡 힌트 2: 천천히 움직이며 계속 변화해요',
            '💡 힌트 3: 색상이 서서히 바뀌면 더 아름다워요'
          ],
          commonMistakes: [
            '너무 빠르게 변해서 정신없기',
            '패턴이 단조로워서 지루하기',
            '색상 조합이 좋지 않아서 불편하기'
          ],
          testCases: [
            { input: '30초 관찰', expectedOutput: '계속 다른 패턴 생성', description: '다양성 확인' },
            { input: '색상 변화', expectedOutput: '부드러운 그라데이션', description: '시각적 품질' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m9',
          title: '창의적 작품 완성',
          description: '배운 기법으로 자신만의 작품을 만들어요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 50,
          estimatedMinutes: 30,
          concept: '종합 작품',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '2-AP-18',
          learningObjectives: [
            '여러 코딩 기법을 창의적으로 조합할 수 있다',
            '자신만의 예술적 비전을 코드로 표현할 수 있다',
            '작품을 완성하고 공유할 수 있다'
          ],
          realWorldExample: '디지털 아티스트들이 코드로 작품을 만들어 갤러리에 전시하거나 NFT로 판매해요!',
          hints: [
            '💡 힌트 1: 자신만의 스타일을 표현해요',
            '💡 힌트 2: 랜덤, 애니메이션, 인터랙션을 자유롭게 조합하세요',
            '💡 힌트 3: 완벽하지 않아도 괜찮아요. 실험하며 즐기세요!'
          ],
          commonMistakes: [
            '너무 복잡하게 만들려다가 완성 못 하기',
            '다른 사람 작품을 그대로 따라하기',
            '실험을 두려워해서 안전한 것만 시도하기'
          ],
          testCases: [
            { input: '기본 작동', expectedOutput: '에러 없이 실행', description: '기술적 완성도' },
            { input: '사용자 반응', expectedOutput: '흥미로운 비주얼', description: '창의성 평가' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w50-m10',
          title: '창의적 코딩 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 10,
          concept: '주간 복습',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            '창의적 코딩 기법을 정확히 이해했는지 확인할 수 있다',
            '배운 개념을 실제 프로젝트에 적용할 수 있다'
          ],
          realWorldExample: '퀴즈를 통해 제너러티브 아트와 애니메이션 개념을 복습해봐요!',
          hints: [
            '💡 힌트 1: 이번 주에 만든 작품들을 떠올려보세요',
            '💡 힌트 2: 각 기법의 특징을 비교해보세요',
            '💡 힌트 3: 실제로 코드를 써보면서 확인하세요'
          ],
          commonMistakes: [
            '개념은 알지만 코드로 구현하는 방법을 모르기',
            '비슷한 기법들을 혼동하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },
    // Week 51: 게임 개발
    {
      id: 'week-51',
      number: 51,
      title: '간단한 게임 만들기',
      description: 'JavaScript로 간단한 게임을 만들어요',
      missions: [
        {
          id: 'w51-m1',
          title: '게임 루프 이해하기',
          description: '게임의 기본 구조를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 15,
          concept: '게임 루프',
          conceptExplanation: '게임은 입력 → 업데이트 → 렌더링을 반복해요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '게임 루프의 구조를 이해할 수 있다',
            '입력, 업데이트, 렌더링 단계를 구분할 수 있다',
            '게임 상태 관리의 중요성을 설명할 수 있다'
          ],
          realWorldExample: '모든 게임(마인크래프트, 포트나이트 등)이 초당 60번 이 과정을 반복하며 작동해요!',
          hints: [
            '💡 힌트 1: requestAnimationFrame으로 매 프레임 실행해요',
            '💡 힌트 2: 입력 → 게임 상태 변경 → 화면에 그리기 순서예요',
            '💡 힌트 3: 초당 60프레임(60 FPS)이 기본이에요'
          ],
          commonMistakes: [
            '업데이트와 렌더링을 분리하지 않기',
            '게임 루프 없이 이벤트만으로 게임 만들기',
            '프레임 시간을 고려하지 않아서 속도가 일정하지 않기'
          ],
          conceptCards: [
            { title: '게임 루프', description: '게임이 계속 실행되는 반복 구조', example: '입력 → 업데이트 → 렌더링' },
            { title: '프레임', description: '게임 화면이 그려지는 한 순간', example: '60 FPS = 1초에 60프레임' },
            { title: '게임 상태', description: '게임의 현재 정보 (위치, 점수 등)', example: '플레이어 HP, 적 위치' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m2',
          title: '플레이어 움직임',
          description: '키보드로 캐릭터를 움직여요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 20,
          concept: '키보드 입력',
          starterCode: '// 키보드로 움직이는 플레이어를 만드세요',
          solution: 'const player = { x: 400, y: 300, speed: 5 };\nconst keys = {};\n\ndocument.addEventListener("keydown", e => keys[e.key] = true);\ndocument.addEventListener("keyup", e => keys[e.key] = false);\n\nfunction update() {\n  if (keys["ArrowUp"]) player.y -= player.speed;\n  if (keys["ArrowDown"]) player.y += player.speed;\n  if (keys["ArrowLeft"]) player.x -= player.speed;\n  if (keys["ArrowRight"]) player.x += player.speed;\n}',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '키보드 이벤트를 처리할 수 있다',
            '객체로 게임 캐릭터를 표현할 수 있다',
            '부드러운 움직임을 구현할 수 있다'
          ],
          realWorldExample: '슈퍼마리오, 젤다 같은 게임에서 방향키로 캐릭터를 움직이는 것과 같아요!',
          hints: [
            '💡 힌트 1: 키 상태를 객체로 관리해요',
            '💡 힌트 2: keydown과 keyup 이벤트를 모두 사용해요',
            '💡 힌트 3: 여러 키를 동시에 누를 수 있어야 해요'
          ],
          commonMistakes: [
            'keydown만 사용해서 키를 떼도 계속 움직이기',
            '동시 입력을 처리하지 못하기',
            '화면 경계를 벗어나도 계속 이동하기'
          ],
          testCases: [
            { input: '방향키 위 누름', expectedOutput: '플레이어가 위로 이동', description: '기본 이동' },
            { input: '위+오른쪽 동시', expectedOutput: '대각선으로 이동', description: '동시 입력' },
            { input: '화면 경계', expectedOutput: '경계에서 멈춤', description: '경계 처리' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m3',
          title: '충돌 감지',
          description: '두 물체가 충돌했는지 확인해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '충돌 감지',
          starterCode: 'function checkCollision(rect1, rect2) {\n  // 두 사각형의 충돌 여부를 반환하세요\n}',
          solution: 'function checkCollision(rect1, rect2) {\n  return rect1.x < rect2.x + rect2.width &&\n         rect1.x + rect1.width > rect2.x &&\n         rect1.y < rect2.y + rect2.height &&\n         rect1.y + rect1.height > rect2.y;\n}',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'AABB 충돌 감지 알고리즘을 이해할 수 있다',
            '불린 연산자를 활용할 수 있다',
            '게임에서 충돌 처리의 중요성을 설명할 수 있다'
          ],
          realWorldExample: '슈퍼마리오가 적에게 닿으면 데미지를 입고, 코인을 먹으면 점수가 올라가는 것이 충돌 감지예요!',
          hints: [
            '💡 힌트 1: AABB 충돌 감지를 사용해요',
            '💡 힌트 2: 두 사각형이 겹치는지 확인해요',
            '💡 힌트 3: 모든 조건이 참일 때 충돌이에요'
          ],
          commonMistakes: [
            '조건식을 잘못 작성해서 충돌을 놓치기',
            '원형 충돌과 사각형 충돌을 혼동하기',
            '충돌 후 처리를 안 해서 계속 충돌 상태로 있기'
          ],
          conceptCards: [
            { title: 'AABB 충돌', description: '축에 정렬된 바운딩 박스 충돌 감지', example: '사각형 vs 사각형' },
            { title: '바운딩 박스', description: '물체를 감싸는 가상의 상자', example: '캐릭터 주변 보이지 않는 사각형' },
            { title: '충돌 처리', description: '충돌 후 게임 로직 실행', example: '데미지, 점수, 아이템 획득' }
          ],
          testCases: [
            { input: 'rect1과 rect2가 겹침', expectedOutput: 'true', description: '충돌 확인' },
            { input: 'rect1과 rect2가 떨어짐', expectedOutput: 'false', description: '비충돌 확인' },
            { input: '모서리만 살짝 닿음', expectedOutput: 'true', description: '경계 케이스' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m4',
          title: '점수 시스템',
          description: '점수를 기록하고 표시해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 12,
          concept: '점수 관리',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '게임 점수를 변수로 관리할 수 있다',
            '점수를 화면에 표시할 수 있다',
            '최고 점수를 저장하고 불러올 수 있다'
          ],
          realWorldExample: '테트리스, 팩맨 등 모든 아케이드 게임에 점수 시스템이 있어요!',
          hints: [
            '💡 힌트 1: 변수로 점수를 관리하고 화면에 표시해요',
            '💡 힌트 2: localStorage로 최고 점수를 저장해요',
            '💡 힌트 3: 점수가 올라갈 때 효과를 추가하면 재미있어요'
          ],
          commonMistakes: [
            '점수를 문자열로 저장해서 계산 오류',
            '최고 점수를 저장하지 않아서 새로고침하면 사라지기',
            '점수 증가 효과가 없어서 재미 없기'
          ],
          testCases: [
            { input: '적 처치', expectedOutput: '점수 +10', description: '점수 증가' },
            { input: '게임 종료', expectedOutput: '최고 점수와 비교', description: '최고 점수 갱신' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m5',
          title: '적 생성하기',
          description: '랜덤 위치에 적을 생성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '적 생성',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '배열로 여러 객체를 관리할 수 있다',
            '랜덤 생성 로직을 구현할 수 있다',
            '적의 AI 움직임을 만들 수 있다'
          ],
          realWorldExample: '좀비 서바이벌 게임에서 계속 새로운 좀비가 나타나는 것처럼요!',
          hints: [
            '💡 힌트 1: 배열로 여러 적을 관리해요',
            '💡 힌트 2: setInterval이나 일정 시간마다 적을 추가해요',
            '💡 힌트 3: 화면 밖에서 적이 나타나게 해요'
          ],
          commonMistakes: [
            '너무 많은 적을 생성해서 게임이 느려지기',
            '적이 플레이어 위치에 바로 생성되기',
            '화면 밖 적을 제거하지 않아서 메모리 낭비'
          ],
          testCases: [
            { input: '2초 경과', expectedOutput: '새로운 적 1마리 생성', description: '생성 주기' },
            { input: '적 20마리', expectedOutput: '정상 작동', description: '다중 객체 관리' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m6',
          title: '게임 오버 처리',
          description: '게임 종료 조건을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '게임 상태',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '게임 상태를 관리할 수 있다',
            '게임 오버 조건을 구현할 수 있다',
            '재시작 기능을 추가할 수 있다'
          ],
          realWorldExample: 'HP가 0이 되면 게임 오버 화면이 나오고 다시 시작할 수 있어요!',
          hints: [
            '💡 힌트 1: isGameOver 변수로 게임 상태를 관리해요',
            '💡 힌트 2: 게임 오버 시 게임 루프를 멈춰요',
            '💡 힌트 3: 재시작 버튼으로 모든 값을 초기화해요'
          ],
          commonMistakes: [
            '게임 오버 후에도 게임 루프가 계속 실행되기',
            '재시작 시 일부 값만 초기화해서 버그 발생',
            '게임 오버 화면이 없어서 끝났는지 모르기'
          ],
          testCases: [
            { input: 'HP 0', expectedOutput: '게임 오버 화면 표시', description: '게임 오버' },
            { input: '재시작 버튼', expectedOutput: '모든 값 초기화', description: '재시작' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m7',
          title: '사운드 효과',
          description: '게임에 소리를 추가해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '오디오',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            'HTML Audio를 사용할 수 있다',
            '게임 이벤트에 맞는 사운드를 재생할 수 있다',
            '배경 음악과 효과음을 관리할 수 있다'
          ],
          realWorldExample: '마리오가 코인을 먹을 때 "띠링", 점프할 때 "퐁" 소리가 나는 것처럼요!',
          hints: [
            '💡 힌트 1: new Audio()로 소리를 재생해요',
            '💡 힌트 2: 효과음은 짧고, 배경음악은 loop로 반복해요',
            '💡 힌트 3: 볼륨 조절 기능을 추가하면 좋아요'
          ],
          commonMistakes: [
            '소리 파일이 너무 커서 로딩이 느리기',
            '같은 소리를 동시에 재생해서 겹치기',
            '사용자가 음소거할 수 없기'
          ],
          testCases: [
            { input: '점수 획득', expectedOutput: '효과음 재생', description: '효과음' },
            { input: '음소거 버튼', expectedOutput: '소리 끄기', description: '볼륨 컨트롤' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m8',
          title: '레벨 디자인',
          description: '난이도가 올라가는 레벨을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 18,
          concept: '레벨',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '난이도 곡선을 설계할 수 있다',
            '시간에 따라 게임을 어렵게 만들 수 있다',
            '레벨 시스템을 구현할 수 있다'
          ],
          realWorldExample: '게임을 하다 보면 점점 어려워지죠? 적이 빨라지거나 많아지는 거예요!',
          hints: [
            '💡 힌트 1: 시간이 지나면 적이 빨라지거나 많아져요',
            '💡 힌트 2: 점수에 따라 레벨을 올려요',
            '💡 힌트 3: 너무 급격하게 어려워지면 재미없어요'
          ],
          commonMistakes: [
            '너무 빨리 어려워져서 초보자가 못 하기',
            '레벨이 올라도 변화가 없어서 지루하기',
            '난이도 밸런싱을 안 해서 불공평하기'
          ],
          testCases: [
            { input: '30초 생존', expectedOutput: '적 속도 증가', description: '난이도 증가' },
            { input: '점수 100', expectedOutput: '레벨 2 진입', description: '레벨 업' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m9',
          title: '미니 게임 완성',
          description: '모든 요소를 합쳐서 게임을 완성해요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'javascript',
          exp: 50,
          estimatedMinutes: 30,
          concept: '게임 완성',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '2-AP-18',
          learningObjectives: [
            '게임의 모든 요소를 통합할 수 있다',
            '완전한 게임 루프를 구현할 수 있다',
            '게임을 테스트하고 개선할 수 있다'
          ],
          realWorldExample: '여러분이 즐기는 모바일 게임들도 이런 요소들로 만들어져요!',
          hints: [
            '💡 힌트 1: 플레이어, 적, 점수, 충돌, 게임오버를 모두 합쳐요',
            '💡 힌트 2: 한 번에 다 만들지 말고 하나씩 추가하며 테스트해요',
            '💡 힌트 3: 친구에게 플레이하게 해서 피드백 받으세요'
          ],
          commonMistakes: [
            '모든 기능을 한 번에 구현하려다가 버그 투성이',
            '테스트를 안 해서 게임이 제대로 작동하지 않기',
            '재미를 생각하지 않고 기능만 넣기'
          ],
          testCases: [
            { input: '게임 시작', expectedOutput: '모든 기능 정상 작동', description: '전체 기능' },
            { input: '5분 플레이', expectedOutput: '버그 없이 진행', description: '안정성' },
            { input: '여러 번 재시작', expectedOutput: '초기화 정상', description: '재시작' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w51-m10',
          title: '게임 개발 퀴즈',
          description: '이번 주에 배운 내용을 확인해봐요',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 25,
          estimatedMinutes: 10,
          concept: '주간 복습',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '게임 개발 개념을 정확히 이해했는지 확인할 수 있다',
            '게임 프로그래밍 기초를 설명할 수 있다'
          ],
          realWorldExample: '게임 개발자가 되기 위한 첫걸음을 떼었어요!',
          hints: [
            '💡 힌트 1: 게임 루프의 각 단계를 생각해보세요',
            '💡 힌트 2: 실제 게임을 만들며 배운 것을 떠올려요',
            '💡 힌트 3: 충돌 감지, 점수 시스템 등을 복습하세요'
          ],
          commonMistakes: [
            '개념은 알지만 실제 구현 방법을 모르기',
            '게임 루프의 중요성을 간과하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w51',
        title: '나만의 게임',
        description: '자신만의 간단한 게임을 완성하세요.',
        difficulty: 'advanced',
        duration: '4-5시간',
        requirements: ['플레이어 조작', '적 또는 장애물', '점수 시스템', '게임 오버', '다시 시작'],
        tech: ['HTML Canvas', 'JavaScript'],
        exp: 120,
        badge: '게임 개발자'
      }
    },
    // Week 52: 미래 기술 탐색
    {
      id: 'week-52',
      number: 52,
      title: '미래 기술과 코딩',
      description: '미래 기술 트렌드와 진로를 탐색해요',
      missions: [
        {
          id: 'w52-m1',
          title: '메타버스와 VR/AR',
          description: '가상현실과 증강현실을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 15,
          concept: 'VR/AR',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            'VR과 AR의 차이를 이해할 수 있다',
            '메타버스의 개념과 활용을 설명할 수 있다',
            '미래 기술의 가능성을 상상할 수 있다'
          ],
          realWorldExample: '포켓몬고는 AR로 현실 세상에 포켓몬이 나타나요. 메타버스 게임인 로블록스에서는 친구들과 가상 세계에서 놀 수 있어요!',
          hints: [
            '💡 힌트 1: 게임, 교육, 의료 등 다양하게 활용돼요',
            '💡 힌트 2: VR은 완전히 가상, AR은 현실+가상이에요',
            '💡 힌트 3: 메타버스는 가상 세계에서 생활하는 거예요'
          ],
          commonMistakes: [
            'VR과 AR을 같다고 생각하기',
            '게임에만 쓰인다고 생각하기',
            '먼 미래 기술이라고 생각하기 (이미 많이 쓰여요!)'
          ],
          conceptCards: [
            { title: 'VR (가상현실)', description: '완전히 가상의 세계에 들어가는 기술', example: 'VR 헤드셋으로 게임하기' },
            { title: 'AR (증강현실)', description: '현실 세계에 가상 정보를 덧붙이는 기술', example: '포켓몬고, IKEA 가구 배치 앱' },
            { title: '메타버스', description: '가상 세계에서 소통하고 활동하는 공간', example: '로블록스, 제페토, 마인크래프트' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m2',
          title: '블록체인과 Web3',
          description: '분산 기술의 개념을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: '블록체인',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '블록체인의 기본 원리를 이해할 수 있다',
            '분산 시스템의 장점을 설명할 수 있다',
            'Web3의 개념을 이해할 수 있다'
          ],
          realWorldExample: '비트코인, NFT 그림이 블록체인 기술로 만들어져요. 한 곳에 저장되지 않고 여러 곳에 분산 저장돼요!',
          hints: [
            '💡 힌트 1: 중앙 서버 없이 데이터를 관리해요',
            '💡 힌트 2: 블록이 체인처럼 연결돼요',
            '💡 힌트 3: 한 번 기록되면 수정이 어려워서 안전해요'
          ],
          commonMistakes: [
            '블록체인 = 암호화폐라고만 생각하기',
            '완전히 안전하다고 과신하기',
            '모든 곳에 블록체인이 필요하다고 생각하기'
          ],
          conceptCards: [
            { title: '블록체인', description: '데이터를 블록에 담아 체인처럼 연결하는 기술', example: '비트코인, NFT' },
            { title: '분산 시스템', description: '중앙 서버 없이 여러 컴퓨터가 협력', example: 'P2P 파일 공유' },
            { title: 'Web3', description: '사용자가 데이터를 직접 소유하는 인터넷', example: '탈중앙화 앱' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m3',
          title: 'IoT와 스마트 기기',
          description: '사물인터넷의 세계를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: 'IoT',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            'IoT의 개념을 이해할 수 있다',
            '스마트 홈의 작동 원리를 설명할 수 있다',
            'IoT 활용 사례를 찾을 수 있다'
          ],
          realWorldExample: '집에서 "아리아, 불 켜줘" 하면 조명이 켜지고, 냉장고가 우유가 떨어졌다고 알려줘요!',
          hints: [
            '💡 힌트 1: 모든 것이 인터넷에 연결되는 세상이에요',
            '💡 힌트 2: 센서로 정보를 모으고 자동으로 작동해요',
            '💡 힌트 3: 스마트폰으로 집 안 기기를 제어할 수 있어요'
          ],
          commonMistakes: [
            'IoT가 단순히 와이파이 연결이라고 생각하기',
            '보안 문제를 간과하기',
            '항상 인터넷이 필요하다고 생각하기'
          ],
          conceptCards: [
            { title: 'IoT', description: '사물이 인터넷에 연결되어 데이터를 주고받음', example: '스마트 전구, 웨어러블' },
            { title: '스마트 홈', description: 'IoT로 집 안 기기를 제어', example: 'AI 스피커로 가전 제어' },
            { title: '센서', description: '주변 환경을 감지하는 장치', example: '온도, 습도, 움직임 감지' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m4',
          title: '로봇 공학',
          description: '로봇과 자동화 기술을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: '로봇 공학',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '로봇의 구성 요소를 이해할 수 있다',
            '자동화의 장단점을 설명할 수 있다',
            '로봇 공학의 미래를 상상할 수 있다'
          ],
          realWorldExample: '테슬라 자동차 공장에서 로봇이 차를 만들고, 병원에서 수술 로봇이 정밀한 수술을 도와요!',
          hints: [
            '💡 힌트 1: 로봇은 코딩으로 작동해요',
            '💡 힌트 2: 센서 + 제어 + 동작으로 이뤄져요',
            '💡 힌트 3: 반복 작업을 자동화하는 데 유용해요'
          ],
          commonMistakes: [
            '로봇이 사람 모양이어야 한다고 생각하기',
            '로봇이 모든 일을 할 수 있다고 기대하기',
            '로봇이 일자리를 빼앗는다고만 생각하기'
          ],
          conceptCards: [
            { title: '로봇', description: '프로그램에 따라 자동으로 작업하는 기계', example: '청소 로봇, 산업용 로봇' },
            { title: '자동화', description: '사람 없이 자동으로 작업 수행', example: '공장 조립 라인' },
            { title: '로봇 프로그래밍', description: '로봇의 동작을 코드로 제어', example: '아두이노, 레고 마인드스톰' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m5',
          title: '개발자가 되려면',
          description: '프로그래머의 진로를 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 15,
          concept: '개발자 진로',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            '다양한 개발자 직업을 알 수 있다',
            '개발자가 되기 위한 경로를 이해할 수 있다',
            '자신에게 맞는 분야를 탐색할 수 있다'
          ],
          realWorldExample: '웹 개발자는 웹사이트를, 게임 개발자는 게임을, AI 개발자는 인공지능을 만들어요. 어떤 개발자가 되고 싶나요?',
          hints: [
            '💡 힌트 1: 웹, 앱, 게임, AI 등 다양한 분야가 있어요',
            '💡 힌트 2: 계속 배우고 실습하는 것이 중요해요',
            '💡 힌트 3: 작은 프로젝트부터 시작해서 포트폴리오를 만들어요'
          ],
          commonMistakes: [
            '한 분야만 있다고 생각하기',
            '대학에 가야만 개발자가 될 수 있다고 생각하기',
            '혼자서만 공부해야 한다고 생각하기'
          ],
          conceptCards: [
            { title: '프론트엔드 개발자', description: '사용자가 보는 화면을 만드는 개발자', example: '웹사이트, 앱 UI' },
            { title: '백엔드 개발자', description: '서버와 데이터베이스를 다루는 개발자', example: '로그인, 데이터 저장' },
            { title: '풀스택 개발자', description: '프론트엔드와 백엔드 모두 하는 개발자', example: '웹 서비스 전체' },
            { title: '게임 개발자', description: '게임을 만드는 개발자', example: 'Unity, Unreal Engine' },
            { title: 'AI/ML 엔지니어', description: '인공지능 모델을 만드는 개발자', example: 'ChatGPT 같은 AI' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m6',
          title: '코딩을 넘어서',
          description: '코딩 외에 필요한 능력을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 20,
          estimatedMinutes: 12,
          concept: '소프트 스킬',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            '개발자에게 필요한 소프트 스킬을 이해할 수 있다',
            '협업의 중요성을 설명할 수 있다',
            '평생 학습 마인드를 가질 수 있다'
          ],
          realWorldExample: '구글, 애플 같은 회사에서는 코딩 실력뿐 아니라 팀워크, 문제 해결 능력도 중요하게 봐요!',
          hints: [
            '💡 힌트 1: 커뮤니케이션, 문제 해결, 협업이 중요해요',
            '💡 힌트 2: 혼자 코딩만 하는 게 아니라 팀과 일해요',
            '💡 힌트 3: 새로운 기술을 계속 배워야 해요'
          ],
          commonMistakes: [
            '코딩 실력만 있으면 된다고 생각하기',
            '혼자 일하는 직업이라고 오해하기',
            '한 번 배우면 끝이라고 생각하기'
          ],
          conceptCards: [
            { title: '커뮤니케이션', description: '생각을 명확히 전달하고 이해하는 능력', example: '기획자와 디자이너와 소통' },
            { title: '문제 해결', description: '복잡한 문제를 분석하고 해결하는 능력', example: '버그 찾기, 최적화' },
            { title: '협업', description: '팀원들과 함께 프로젝트를 완성', example: 'Git으로 코드 공유' },
            { title: '평생 학습', description: '계속 새로운 기술을 배우는 자세', example: '새 언어, 프레임워크 학습' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m7',
          title: '오픈소스 참여하기',
          description: '오픈소스 프로젝트에 기여하는 방법을 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 15,
          concept: '오픈소스',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            '오픈소스의 개념을 이해할 수 있다',
            'GitHub 사용 방법을 배울 수 있다',
            '오픈소스 커뮤니티에 참여하는 방법을 알 수 있다'
          ],
          realWorldExample: 'Linux, Python, React 등 우리가 사용하는 많은 도구가 오픈소스예요. 누구나 코드를 보고 기여할 수 있어요!',
          hints: [
            '💡 힌트 1: GitHub에서 다른 사람의 코드에 기여할 수 있어요',
            '💡 힌트 2: 문서 번역, 버그 리포트부터 시작할 수 있어요',
            '💡 힌트 3: 오픈소스 기여는 포트폴리오가 돼요'
          ],
          commonMistakes: [
            '실력이 좋아야만 기여할 수 있다고 생각하기',
            '코드만 기여할 수 있다고 생각하기',
            'GitHub 사용이 어렵다고 포기하기'
          ],
          conceptCards: [
            { title: '오픈소스', description: '소스 코드를 공개하여 누구나 사용·수정·배포', example: 'Linux, Python, VSCode' },
            { title: 'GitHub', description: '코드를 공유하고 협업하는 플랫폼', example: '프로젝트 저장소' },
            { title: 'Pull Request', description: '내가 수정한 코드를 프로젝트에 반영 요청', example: '버그 수정 제안' },
            { title: 'Issue', description: '버그 리포트나 기능 제안', example: '"로그인 버튼이 안 눌려요"' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m8',
          title: '포트폴리오 만들기',
          description: '자신의 작품을 정리해요',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'html',
          exp: 35,
          estimatedMinutes: 25,
          concept: '포트폴리오',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            '포트폴리오의 중요성을 이해할 수 있다',
            '자신의 프로젝트를 효과적으로 정리할 수 있다',
            '포트폴리오 웹사이트를 만들 수 있다'
          ],
          realWorldExample: '개발자들은 자신이 만든 프로젝트를 포트폴리오로 정리해서 취업이나 프리랜서 일을 구해요!',
          hints: [
            '💡 힌트 1: 지금까지 만든 프로젝트를 정리하세요',
            '💡 힌트 2: 스크린샷, 설명, 배운 점을 포함해요',
            '💡 힌트 3: GitHub Pages로 무료로 호스팅할 수 있어요'
          ],
          commonMistakes: [
            '완벽한 프로젝트만 넣으려고 하기',
            '설명 없이 코드만 올리기',
            '지속적으로 업데이트하지 않기'
          ],
          conceptCards: [
            { title: '포트폴리오', description: '자신의 작품과 경험을 모은 자료집', example: '프로젝트 모음 웹사이트' },
            { title: '프로젝트 설명', description: '무엇을 만들었는지, 어떤 기술을 사용했는지 설명', example: '"채팅 앱 - React, Firebase"' },
            { title: 'GitHub Pages', description: 'GitHub에서 무료로 웹사이트 호스팅', example: 'username.github.io' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m9',
          title: '다음 단계 계획',
          description: '앞으로의 학습 계획을 세워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'blocks',
          exp: 25,
          estimatedMinutes: 15,
          concept: '학습 계획',
          cstaStandard: '2-IC-21',
          learningObjectives: [
            '자신의 관심 분야를 파악할 수 있다',
            '단계별 학습 계획을 세울 수 있다',
            '지속적인 학습 습관을 만들 수 있다'
          ],
          realWorldExample: '성공한 개발자들은 명확한 목표를 가지고 꾸준히 학습하며 성장해요!',
          hints: [
            '💡 힌트 1: 관심 분야를 정하고 깊이 파고들어요',
            '💡 힌트 2: 작은 목표부터 달성하며 성취감을 느껴요',
            '💡 힌트 3: 온라인 강의, 책, 커뮤니티를 활용해요'
          ],
          commonMistakes: [
            '너무 많은 것을 한 번에 배우려고 하기',
            '계획만 세우고 실행하지 않기',
            '혼자만 공부하려고 하기'
          ],
          conceptCards: [
            { title: '학습 로드맵', description: '단계별 학습 계획', example: 'HTML → CSS → JavaScript → React' },
            { title: '프로젝트 기반 학습', description: '만들면서 배우기', example: '간단한 앱부터 복잡한 서비스까지' },
            { title: '커뮤니티 참여', description: '다른 학습자들과 소통', example: '개발자 모임, 온라인 포럼' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w52-m10',
          title: 'AI와 창의적 코딩 종합 퀴즈',
          description: '유닛 전체 복습',
          type: 'quiz',
          difficulty: 'intermediate',
          language: 'blocks',
          exp: 30,
          estimatedMinutes: 12,
          concept: '유닛 복습',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            '유닛 8의 모든 개념을 복습할 수 있다',
            'AI와 미래 기술 전반을 이해했는지 확인할 수 있다'
          ],
          realWorldExample: '지금까지 배운 AI, 창의적 코딩, 게임 개발, 미래 기술을 모두 복습해봐요!',
          hints: [
            '💡 힌트 1: 4주간 배운 내용을 전체적으로 복습하세요',
            '💡 힌트 2: AI, 제너러티브 아트, 게임 루프 등을 떠올려요',
            '💡 힌트 3: 실제로 만든 프로젝트를 생각하면 도움이 돼요'
          ],
          commonMistakes: [
            '한 주제만 집중해서 다른 내용을 놓치기',
            '개념만 외우고 실제 활용을 생각하지 않기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'project-w52',
        title: '미래 기술 발표',
        description: '관심 있는 미래 기술에 대해 발표 자료를 만드세요.',
        difficulty: 'intermediate',
        duration: '2-3시간',
        requirements: ['기술 소개', '활용 사례', '코딩과의 연관성', '미래 전망'],
        tech: ['리서치', '발표'],
        exp: 80,
        badge: '미래 탐험가'
      }
    }
  ]
};

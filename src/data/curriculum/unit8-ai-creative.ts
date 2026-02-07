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
          challenges: [
            {
              id: 'c1',
              title: 'AI vs 일반 프로그램 구분하기',
              description: 'AI 프로그램과 일반 프로그램을 올바르게 분류하세요. 다음 중 AI가 사용된 것을 모두 고르세요: 계산기, 번역기, 시리(음성비서), 메모장, 자율주행',
              difficulty: 'easy',
              hints: ['AI는 데이터에서 패턴을 학습해요', '단순 규칙으로 작동하는 건 AI가 아니에요'],
              estimatedMinutes: 3,
              blocks: ['계산기', '번역기', '시리(음성비서)', '메모장', '자율주행'],
              correctSequence: ['번역기', '시리(음성비서)', '자율주행'],
              feedback: { perfect: 'AI와 일반 프로그램의 차이를 정확히 구분했어요!', good: '대부분 맞았어요! AI는 학습 능력이 핵심이에요.', partial: '일부만 맞았어요. AI는 데이터로 학습하는 프로그램이에요.', wrong: 'AI는 스스로 학습하는 프로그램이에요. 계산기나 메모장은 정해진 규칙만 따라요.' }
            },
            {
              id: 'c2',
              title: 'AI 학습 과정 순서 맞추기',
              description: 'AI가 학습하는 과정을 올바른 순서대로 배열하세요.',
              difficulty: 'easy',
              hints: ['AI는 먼저 데이터가 필요해요', '학습 후 예측을 하고, 결과를 평가해요'],
              estimatedMinutes: 3,
              blocks: ['데이터 수집', '패턴 학습', '예측/판단', '결과 평가', '모델 개선'],
              correctSequence: ['데이터 수집', '패턴 학습', '예측/판단', '결과 평가', '모델 개선'],
              feedback: { perfect: 'AI 학습 과정을 완벽하게 이해했어요!', good: '거의 맞았어요! 순서를 다시 확인해보세요.', partial: '일부 순서가 바뀌었어요. 데이터 수집이 항상 먼저예요.', wrong: 'AI는 데이터 수집 → 학습 → 예측 → 평가 → 개선 순서예요.' }
            },
            {
              id: 'c3',
              title: '우리 생활 속 AI 찾기',
              description: '스마트폰에서 AI가 사용되는 기능 5가지를 순서대로 배열하세요: 가장 자주 사용하는 것부터 정렬하세요.',
              difficulty: 'easy',
              hints: ['매일 사용하는 기능부터 생각해보세요', '사진 찍기, 검색, 음성 등을 떠올려보세요'],
              estimatedMinutes: 4,
              blocks: ['얼굴 인식 잠금해제', '음성 비서(시리/빅스비)', '사진 자동 보정', '맞춤법 자동 교정', '앱 추천'],
              correctSequence: ['얼굴 인식 잠금해제', '맞춤법 자동 교정', '사진 자동 보정', '음성 비서(시리/빅스비)', '앱 추천'],
              feedback: { perfect: '스마트폰 속 AI를 잘 찾았어요!', good: '좋아요! 우리 주변에 AI가 정말 많죠?', partial: '순서가 조금 달라요. 매일 쓰는 기능을 생각해보세요.', wrong: '얼굴인식은 매일 사용하고, 앱 추천은 가끔 사용해요.' }
            },
            {
              id: 'c4',
              title: 'AI 데이터 분류 시뮬레이션',
              description: 'AI처럼 생각해봐요! 다음 과일 데이터를 보고 규칙을 찾으세요: 빨간색+둥근형=사과, 노란색+긴형=바나나, 주황색+둥근형=오렌지. "빨간색+둥근형"의 과일은?',
              difficulty: 'medium',
              hints: ['색상과 모양 두 가지 특징을 함께 봐요', 'AI도 이렇게 특징(feature)을 조합해서 판단해요'],
              estimatedMinutes: 5,
              blocks: ['사과', '바나나', '오렌지', '포도'],
              correctSequence: ['사과'],
              feedback: { perfect: 'AI의 분류 원리를 완벽히 이해했어요!', good: '잘했어요! AI도 이런 식으로 패턴을 찾아요.', partial: '특징 조합을 다시 확인해보세요.', wrong: '빨간색+둥근형 조합의 과일을 찾아보세요.' }
            },
            {
              id: 'c5',
              title: '머신러닝 vs 딥러닝 비교',
              description: '머신러닝과 딥러닝의 특징을 올바르게 연결하세요. 머신러닝 특징과 딥러닝 특징을 순서대로 분류하세요.',
              difficulty: 'medium',
              hints: ['딥러닝은 머신러닝의 한 종류예요', '딥러닝은 인공신경망을 사용해요'],
              estimatedMinutes: 6,
              blocks: ['사람이 특징을 알려줌(ML)', '스스로 특징을 찾음(DL)', '적은 데이터로 가능(ML)', '많은 데이터 필요(DL)', '단순한 문제에 적합(ML)', '복잡한 문제에 적합(DL)'],
              correctSequence: ['사람이 특징을 알려줌(ML)', '적은 데이터로 가능(ML)', '단순한 문제에 적합(ML)', '스스로 특징을 찾음(DL)', '많은 데이터 필요(DL)', '복잡한 문제에 적합(DL)'],
              feedback: { perfect: 'ML과 DL의 차이를 완벽히 구분했어요!', good: '대부분 맞았어요! 핵심 차이를 잘 이해하고 있어요.', partial: '일부 특징이 바뀌었어요. DL은 더 많은 데이터가 필요해요.', wrong: 'ML은 사람이 특징을 정해주고, DL은 스스로 찾아요.' }
            },
            {
              id: 'c6',
              title: 'AI 학습 데이터 설계하기',
              description: '"고양이 vs 강아지" 분류 AI를 만들려면 어떤 학습 데이터가 필요할까요? 좋은 학습 데이터의 조건을 순서대로 배열하세요.',
              difficulty: 'medium',
              hints: ['다양한 종류의 사진이 필요해요', '한쪽으로 치우치면 편향된 AI가 돼요'],
              estimatedMinutes: 7,
              blocks: ['다양한 품종의 사진 수집', '밝은/어두운 조명 모두 포함', '여러 각도에서 촬영', '고양이/강아지 라벨 붙이기', '비슷한 수량으로 균형 맞추기'],
              correctSequence: ['다양한 품종의 사진 수집', '여러 각도에서 촬영', '밝은/어두운 조명 모두 포함', '비슷한 수량으로 균형 맞추기', '고양이/강아지 라벨 붙이기'],
              feedback: { perfect: '완벽한 학습 데이터 설계예요! AI 엔지니어 자질이 있어요!', good: '좋은 설계예요! 데이터 다양성이 핵심이에요.', partial: '순서를 조정해보세요. 데이터 수집이 먼저예요.', wrong: '좋은 AI를 만들려면 다양하고 균형 잡힌 데이터가 필요해요.' }
            },
            {
              id: 'c7',
              title: 'AI가 틀릴 수 있는 상황 예측',
              description: '자율주행 AI가 어려움을 겪을 수 있는 상황을 심각한 순서대로 배열하세요.',
              difficulty: 'hard',
              hints: ['AI는 학습하지 못한 상황에서 실수할 수 있어요', '날씨, 조명, 예상치 못한 물체 등을 생각해보세요'],
              estimatedMinutes: 8,
              blocks: ['눈보라로 차선이 안 보임', '공사 중 임시 표지판', '야간 역광 상황', '자전거 타는 어린이', '낙엽이 쌓인 도로'],
              correctSequence: ['눈보라로 차선이 안 보임', '자전거 타는 어린이', '야간 역광 상황', '공사 중 임시 표지판', '낙엽이 쌓인 도로'],
              feedback: { perfect: 'AI의 한계를 정확히 파악했어요! 비판적 사고력이 뛰어나요!', good: '좋은 분석이에요! AI 안전 전문가가 될 수 있어요.', partial: '위험도 순서를 다시 생각해보세요. 생명 위험이 가장 심각해요.', wrong: '사람의 안전과 직결되는 상황이 가장 심각해요.' }
            },
            {
              id: 'c8',
              title: 'AI 서비스 기획하기',
              description: '학교에서 사용할 AI 서비스를 기획해보세요. 다음 단계를 올바른 순서로 배열하세요.',
              difficulty: 'hard',
              hints: ['어떤 문제를 해결할지 먼저 정해요', '데이터 → 학습 → 테스트 → 배포 순서예요'],
              estimatedMinutes: 10,
              blocks: ['해결할 문제 정하기 (급식 메뉴 추천)', '필요한 데이터 조사 (학생 선호도)', 'AI 모델 선택 (추천 시스템)', '데이터로 AI 학습시키기', '테스트 및 피드백 수집', '서비스 개선 및 배포'],
              correctSequence: ['해결할 문제 정하기 (급식 메뉴 추천)', '필요한 데이터 조사 (학생 선호도)', 'AI 모델 선택 (추천 시스템)', '데이터로 AI 학습시키기', '테스트 및 피드백 수집', '서비스 개선 및 배포'],
              feedback: { perfect: 'AI 서비스 기획 과정을 완벽하게 이해했어요!', good: '훌륭한 기획이에요! 실제로 만들어볼 수 있겠어요.', partial: '좋은 시도예요. 문제 정의가 항상 첫 단계예요.', wrong: '문제 정의 → 데이터 → 모델 → 학습 → 테스트 → 배포 순서예요.' }
            },
            {
              id: 'c9',
              title: 'AI 발전 타임라인',
              description: 'AI 기술의 주요 사건을 시간 순서대로 배열하세요.',
              difficulty: 'hard',
              hints: ['체스 AI가 먼저, 바둑 AI가 나중이에요', 'ChatGPT는 가장 최근이에요'],
              estimatedMinutes: 10,
              blocks: ['튜링 테스트 제안 (1950)', '체스 AI가 세계 챔피언 이김 (1997)', '시리 출시 (2011)', '알파고가 이세돌 이김 (2016)', 'ChatGPT 출시 (2022)'],
              correctSequence: ['튜링 테스트 제안 (1950)', '체스 AI가 세계 챔피언 이김 (1997)', '시리 출시 (2011)', '알파고가 이세돌 이김 (2016)', 'ChatGPT 출시 (2022)'],
              feedback: { perfect: 'AI 역사를 완벽하게 알고 있어요!', good: '대부분 맞았어요! AI는 70년 넘게 발전해왔어요.', partial: '순서가 일부 바뀌었어요. 연도를 확인해보세요.', wrong: '1950년 튜링 테스트부터 2022년 ChatGPT까지 순서대로 배열해보세요.' }
            },
            {
              id: 'c10',
              title: 'AI 미래 시나리오 설계',
              description: '2030년 학교에서 AI가 어떻게 사용될지 시나리오를 만들어보세요. 가장 현실적인 것부터 가장 먼 미래 기술 순서로 배열하세요.',
              difficulty: 'hard',
              hints: ['이미 존재하는 기술부터 생각해보세요', '완전 자율 AI는 아직 먼 미래예요'],
              estimatedMinutes: 12,
              blocks: ['AI 맞춤 학습 추천 (현재 가능)', 'AI 자동 채점 + 피드백 (곧 가능)', 'AI 가상 실험실 (5년 내)', 'AI 개인 튜터 로봇 (10년 내)', 'AI가 커리큘럼 자체를 설계 (먼 미래)'],
              correctSequence: ['AI 맞춤 학습 추천 (현재 가능)', 'AI 자동 채점 + 피드백 (곧 가능)', 'AI 가상 실험실 (5년 내)', 'AI 개인 튜터 로봇 (10년 내)', 'AI가 커리큘럼 자체를 설계 (먼 미래)'],
              feedback: { perfect: 'AI 미래를 정확히 예측했어요! 미래학자 자질이 있어요!', good: '현실적인 시각이에요! AI 발전 속도를 잘 이해하고 있어요.', partial: '가까운 미래와 먼 미래를 다시 구분해보세요.', wrong: '이미 가능한 기술부터 먼 미래 기술 순서로 배열해보세요.' }
            }
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
          challenges: [
            { id: 'c1', title: 'AI 종류와 활용 연결', description: '이미지인식→의료진단, 음성인식→스마트스피커, 자연어처리→번역을 올바르게 연결하세요.', difficulty: 'easy', hints: ['각 AI가 다루는 데이터 종류를 생각해보세요', '이미지=사진, 음성=소리, 자연어=글'], estimatedMinutes: 3, blocks: ['이미지 인식 → 의료 진단', '음성 인식 → 스마트 스피커', '자연어 처리 → 자동 번역'], correctSequence: ['이미지 인식 → 의료 진단', '음성 인식 → 스마트 스피커', '자연어 처리 → 자동 번역'], feedback: { perfect: 'AI 종류와 활용을 정확히 연결했어요!', good: '대부분 맞았어요!', partial: '각 AI가 다루는 데이터를 생각해보세요.', wrong: '이미지AI=사진, 음성AI=소리, 자연어AI=글' } },
            { id: 'c2', title: '약한AI vs 강한AI 분류', description: '약한 AI(특정 작업)와 강한 AI(범용)를 구분하세요. 약한AI를 먼저 배열하세요.', difficulty: 'easy', hints: ['현재 AI는 대부분 약한 AI예요', '강한 AI는 아직 미래 기술이에요'], estimatedMinutes: 3, blocks: ['체스 AI(약한AI)', '번역 AI(약한AI)', '추천 시스템(약한AI)', '사람처럼 생각하는 AI(강한AI)', '모든 일 하는 AI(강한AI)'], correctSequence: ['체스 AI(약한AI)', '번역 AI(약한AI)', '추천 시스템(약한AI)', '사람처럼 생각하는 AI(강한AI)', '모든 일 하는 AI(강한AI)'], feedback: { perfect: '약한AI와 강한AI를 정확히 구분했어요!', good: '좋아요!', partial: '한 가지 일만 하는 AI가 약한AI예요.', wrong: '체스AI, 번역AI는 한 가지만 잘하는 약한AI예요.' } },
            { id: 'c3', title: '이미지 인식 AI 활용', description: '이미지 인식 AI가 사용되는 곳만 골라 순서대로 배열하세요.', difficulty: 'easy', hints: ['사진/영상을 분석하는 곳을 찾아요', '소리 분석은 이미지 인식이 아니에요'], estimatedMinutes: 4, blocks: ['얼굴 인식 출입통제', 'X-ray 질병 진단', '자율주행 신호등 인식', '음악 장르 분류(X)', '음성 명령 인식(X)'], correctSequence: ['얼굴 인식 출입통제', 'X-ray 질병 진단', '자율주행 신호등 인식'], feedback: { perfect: '이미지 인식 활용을 정확히 이해했어요!', good: '대부분 맞았어요!', partial: '소리 관련은 이미지 인식이 아니에요.', wrong: '눈으로 보는 것(사진,영상)을 분석하는 게 이미지 인식이에요.' } },
            { id: 'c4', title: '자연어 처리 기술 순서', description: 'AI 챗봇이 대화하는 과정을 순서대로 배열하세요.', difficulty: 'medium', hints: ['먼저 사용자의 말을 이해해야 해요', '이해→분석→생성→출력 순서예요'], estimatedMinutes: 5, blocks: ['사용자 입력 받기', '문장 의미 분석(NLU)', '감정/의도 파악', '적절한 답변 생성(NLG)', '답변 출력'], correctSequence: ['사용자 입력 받기', '문장 의미 분석(NLU)', '감정/의도 파악', '적절한 답변 생성(NLG)', '답변 출력'], feedback: { perfect: 'NLP 처리 과정을 완벽히 이해했어요!', good: '거의 맞았어요!', partial: '의미 분석이 답변 생성보다 먼저예요.', wrong: '입력→분석→이해→생성→출력 순이에요.' } },
            { id: 'c5', title: '게임 AI 난이도 설계', description: '게임 AI 적 캐릭터의 난이도를 쉬운 것부터 어려운 순서로 배열하세요.', difficulty: 'medium', hints: ['랜덤 행동이 가장 쉽고, 학습하는 AI가 가장 어려워요'], estimatedMinutes: 6, blocks: ['랜덤 행동(쉬움)', '정해진 패턴 반복(보통)', '플레이어 위치 추적(어려움)', '상황별 전략 변경(매우 어려움)', '플레이어 행동 학습(최고난이도)'], correctSequence: ['랜덤 행동(쉬움)', '정해진 패턴 반복(보통)', '플레이어 위치 추적(어려움)', '상황별 전략 변경(매우 어려움)', '플레이어 행동 학습(최고난이도)'], feedback: { perfect: '게임AI 난이도를 완벽히 이해했어요!', good: '좋은 분석이에요!', partial: '더 똑똑한 행동일수록 어려운 AI예요.', wrong: '랜덤<패턴<추적<전략<학습 순이에요.' } },
            { id: 'c6', title: 'AI 기술 발전 순서', description: 'AI 기술이 발전한 순서대로 배열하세요.', difficulty: 'medium', hints: ['규칙 기반이 가장 먼저, 생성형 AI가 가장 최근이에요'], estimatedMinutes: 7, blocks: ['규칙 기반 전문가 시스템', '통계적 머신러닝', '딥러닝(CNN, RNN)', '강화학습(알파고)', '생성형 AI(GPT, DALL-E)'], correctSequence: ['규칙 기반 전문가 시스템', '통계적 머신러닝', '딥러닝(CNN, RNN)', '강화학습(알파고)', '생성형 AI(GPT, DALL-E)'], feedback: { perfect: 'AI 기술 발전을 정확히 이해했어요!', good: '대부분 맞았어요!', partial: '규칙기반→통계→딥러닝→강화학습→생성형 순이에요.', wrong: '가장 단순한 규칙 기반부터 최신 생성형 AI까지 생각해보세요.' } },
            { id: 'c7', title: 'AI 문제 적합도 판단', description: '각 문제에 가장 적합한 AI 종류를 연결하고, 적합도가 높은 순서로 배열하세요.', difficulty: 'hard', hints: ['데이터 종류에 따라 적합한 AI가 달라요'], estimatedMinutes: 8, blocks: ['스팸필터→머신러닝(높음)', '얼굴인식→딥러닝(높음)', '게임전략→강화학습(높음)', '주가예측→머신러닝(중간)', '감정이해→딥러닝(낮음)'], correctSequence: ['스팸필터→머신러닝(높음)', '얼굴인식→딥러닝(높음)', '게임전략→강화학습(높음)', '주가예측→머신러닝(중간)', '감정이해→딥러닝(낮음)'], feedback: { perfect: 'AI 종류별 적합도를 완벽히 판단했어요!', good: '대부분 정확해요!', partial: '적합도를 다시 생각해보세요.', wrong: '각 문제에 가장 맞는 AI 종류를 연결해보세요.' } },
            { id: 'c8', title: '자율주행 AI 시스템 설계', description: '자율주행차에 사용되는 AI 기술을 처리 순서대로 배열하세요.', difficulty: 'hard', hints: ['센서→인식→판단→행동 순이에요'], estimatedMinutes: 10, blocks: ['카메라로 주변 촬영(센서)', '이미지AI로 물체 인식', '거리 측정 AI(라이다)', '상황 판단 AI(경로 계획)', '차량 제어(가속/감속/회전)'], correctSequence: ['카메라로 주변 촬영(센서)', '이미지AI로 물체 인식', '거리 측정 AI(라이다)', '상황 판단 AI(경로 계획)', '차량 제어(가속/감속/회전)'], feedback: { perfect: '자율주행 AI 시스템을 완벽히 설계했어요!', good: '복합 AI의 작동 원리를 이해했어요!', partial: '인식→판단→행동 순서를 기억하세요.', wrong: '센서→인식→판단→제어 순서예요.' } },
            { id: 'c9', title: 'AI 기술 융합 사례', description: '하나의 서비스에 여러 AI가 함께 사용되는 사례를 복잡도 순서로 배열하세요.', difficulty: 'hard', hints: ['AI 기술이 많이 결합될수록 복잡해요'], estimatedMinutes: 10, blocks: ['스팸필터(텍스트분류 1개)', '음성비서(음성+자연어 2개)', '자동번역기(자연어+음성 2개)', '자율주행(영상+센서+판단 3개+)', 'AI 메타버스(영상+음성+자연어+생성 4개+)'], correctSequence: ['스팸필터(텍스트분류 1개)', '음성비서(음성+자연어 2개)', '자동번역기(자연어+음성 2개)', '자율주행(영상+센서+판단 3개+)', 'AI 메타버스(영상+음성+자연어+생성 4개+)'], feedback: { perfect: 'AI 기술 융합을 완벽히 이해했어요!', good: '복잡도를 잘 판단했어요!', partial: 'AI 기술 개수로 복잡도를 판단해보세요.', wrong: '사용 AI 기술이 많을수록 복잡해요.' } },
            { id: 'c10', title: 'AI 전문가 역할 매칭', description: 'AI 프로젝트에 필요한 전문가를 작업 순서대로 배열하세요.', difficulty: 'hard', hints: ['데이터를 먼저 준비하고, 모델을 만들고, 배포해요'], estimatedMinutes: 12, blocks: ['데이터 엔지니어(수집/정리)', '데이터 사이언티스트(분석/설계)', 'ML 엔지니어(모델 개발/학습)', 'QA 엔지니어(테스트/검증)', 'DevOps 엔지니어(배포/운영)'], correctSequence: ['데이터 엔지니어(수집/정리)', '데이터 사이언티스트(분석/설계)', 'ML 엔지니어(모델 개발/학습)', 'QA 엔지니어(테스트/검증)', 'DevOps 엔지니어(배포/운영)'], feedback: { perfect: 'AI 팀 구성과 역할을 완벽히 이해했어요!', good: '대부분 맞았어요!', partial: '데이터준비→개발→테스트→배포 순이에요.', wrong: '프로젝트 진행 순서에 맞는 전문가를 배열해보세요.' } }
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
                    challenges: [
            { id: 'c1', title: '지도학습 데이터 만들기', description: '강아지 사진 분류 지도학습 데이터를 만드는 과정을 순서대로 배열하세요.', difficulty: 'easy', hints: ['사진을 모으고 라벨을 붙여요'], estimatedMinutes: 3, blocks: ['강아지 사진 수집', '품종별 라벨 붙이기', '학습/테스트용 분리', 'AI 모델에 학습데이터 입력', '테스트 데이터로 정확도 확인'], correctSequence: ['강아지 사진 수집', '품종별 라벨 붙이기', '학습/테스트용 분리', 'AI 모델에 학습데이터 입력', '테스트 데이터로 정확도 확인'], feedback: { perfect: '지도학습 데이터 준비를 완벽히 이해했어요!', good: '좋아요!', partial: '라벨 붙이기가 학습 전에 필요해요.', wrong: '수집->라벨링->분리->학습->테스트 순이에요.' } },
            { id: 'c2', title: '비지도학습 클러스터링', description: '비지도학습으로 과일을 그룹으로 나누는 과정을 배열하세요.', difficulty: 'easy', hints: ['라벨 없이 패턴을 찾아요'], estimatedMinutes: 3, blocks: ['과일 특징 데이터 수집', 'AI가 특징 분석', '비슷한 것끼리 그룹', '각 그룹 공통점 확인', '그룹에 이름 붙이기'], correctSequence: ['과일 특징 데이터 수집', 'AI가 특징 분석', '비슷한 것끼리 그룹', '각 그룹 공통점 확인', '그룹에 이름 붙이기'], feedback: { perfect: '비지도학습을 정확히 이해했어요!', good: '잘했어요!', partial: 'AI가 먼저 분석해요.', wrong: '수집->분석->그룹핑->확인->이름붙이기 순이에요.' } },
            { id: 'c3', title: '과적합(Overfitting) 이해', description: 'AI가 과적합되는 과정을 순서대로 배열하세요.', difficulty: 'easy', hints: ['시험 답만 외우고 응용 못하는 것과 같아요'], estimatedMinutes: 4, blocks: ['적은 학습 데이터', '같은 데이터 반복 학습', '학습데이터 정확도 100%', '새 데이터 테스트', '정확도 급격히 하락!'], correctSequence: ['적은 학습 데이터', '같은 데이터 반복 학습', '학습데이터 정확도 100%', '새 데이터 테스트', '정확도 급격히 하락!'], feedback: { perfect: '과적합을 완벽히 이해했어요!', good: '좋아요!', partial: '학습데이터에서만 잘하면 과적합이에요.', wrong: '답만 외우면 새 문제를 못 푸는 것과 같아요.' } },
            { id: 'c4', title: '학습률 조절', description: 'AI 학습률이 크거나 작을 때 결과를 순서대로 배열하세요.', difficulty: 'medium', hints: ['너무 크면 정답을 지나쳐요'], estimatedMinutes: 5, blocks: ['너무 큼: 발산', '큼: 불안정', '적절: 안정적 수렴', '작음: 느리지만 안정', '너무 작음: 학습 안됨'], correctSequence: ['너무 큼: 발산', '큼: 불안정', '적절: 안정적 수렴', '작음: 느리지만 안정', '너무 작음: 학습 안됨'], feedback: { perfect: '학습률을 완벽히 이해했어요!', good: '좋아요!', partial: '너무 크면 발산해요.', wrong: '너무큼->발산, 적절->수렴, 너무작음->정체' } },
            { id: 'c5', title: '스팸필터 특징 추출', description: '스팸 필터에서 AI가 학습하는 특징을 중요도 순으로 배열하세요.', difficulty: 'medium', hints: ['스팸의 공통 특징을 생각해보세요'], estimatedMinutes: 6, blocks: ['특정 단어 빈도(무료,당첨)', '의심스러운 링크', '발신자 신뢰도', '첨부파일 유무', '전송 시간'], correctSequence: ['특정 단어 빈도(무료,당첨)', '의심스러운 링크', '발신자 신뢰도', '첨부파일 유무', '전송 시간'], feedback: { perfect: '특징 중요도를 정확히 판단했어요!', good: '좋은 분석이에요!', partial: '스팸 키워드가 가장 중요해요.', wrong: '키워드와 링크가 가장 중요한 특징이에요.' } },
            { id: 'c6', title: '모델 평가 지표', description: 'AI 모델 성능 평가 과정을 순서대로 배열하세요.', difficulty: 'medium', hints: ['학습->예측->평가 순이에요'], estimatedMinutes: 7, blocks: ['학습데이터로 훈련', '테스트데이터로 예측', '예측과 정답 비교', '정확도/정밀도/재현율 계산', '부족시 모델 개선'], correctSequence: ['학습데이터로 훈련', '테스트데이터로 예측', '예측과 정답 비교', '정확도/정밀도/재현율 계산', '부족시 모델 개선'], feedback: { perfect: '모델 평가를 완벽히 이해했어요!', good: '좋아요!', partial: '예측 후에 평가해요.', wrong: '훈련->예측->비교->계산->개선 순이에요.' } },
            { id: 'c7', title: '강화학습 원리', description: '강화학습으로 게임을 배우는 과정을 배열하세요.', difficulty: 'hard', hints: ['시행착오로 배우고 보상을 최대화해요'], estimatedMinutes: 8, blocks: ['AI가 행동 선택', '환경이 결과 반환', '보상/벌점 받기', '좋은 행동 기억', '나쁜 행동 회피', '전략 개선'], correctSequence: ['AI가 행동 선택', '환경이 결과 반환', '보상/벌점 받기', '좋은 행동 기억', '나쁜 행동 회피', '전략 개선'], feedback: { perfect: '강화학습을 완벽히 이해했어요!', good: '시행착오 학습을 잘 이해했어요!', partial: '행동->결과->보상->학습 순이에요.', wrong: 'AI가 행동->결과확인->보상으로 학습해요.' } },
            { id: 'c8', title: '데이터 전처리', description: 'AI 데이터 전처리 과정을 순서대로 배열하세요.', difficulty: 'hard', hints: ['더러운 데이터를 먼저 정리해요'], estimatedMinutes: 10, blocks: ['결측값 처리', '이상값 제거', '데이터 정규화(0~1)', '카테고리 인코딩', '특징 선택'], correctSequence: ['결측값 처리', '이상값 제거', '데이터 정규화(0~1)', '카테고리 인코딩', '특징 선택'], feedback: { perfect: '전처리를 완벽히 이해했어요!', good: '좋아요!', partial: '결측값 처리가 먼저예요.', wrong: '결측값->이상값->정규화->인코딩->선택 순이에요.' } },
            { id: 'c9', title: 'ML 프로젝트 전체 흐름', description: '머신러닝 프로젝트 전체 과정을 배열하세요.', difficulty: 'hard', hints: ['문제 정의부터 시작해요'], estimatedMinutes: 10, blocks: ['문제 정의', '데이터 수집', '전처리', '모델 학습', '평가/튜닝', '배포/모니터링'], correctSequence: ['문제 정의', '데이터 수집', '전처리', '모델 학습', '평가/튜닝', '배포/모니터링'], feedback: { perfect: 'ML 프로젝트를 완벽히 이해했어요!', good: '훌륭해요!', partial: '문제 정의가 첫 단계예요.', wrong: '문제정의->데이터->전처리->학습->평가->배포' } },
            { id: 'c10', title: 'ML 알고리즘 선택', description: 'ML 알고리즘을 복잡도 순서대로 배열하세요.', difficulty: 'hard', hints: ['단순한 것부터 복잡한 것 순이에요'], estimatedMinutes: 12, blocks: ['선형 회귀', 'K-최근접 이웃', '결정 트리', '랜덤 포레스트', '신경망(딥러닝)'], correctSequence: ['선형 회귀', 'K-최근접 이웃', '결정 트리', '랜덤 포레스트', '신경망(딥러닝)'], feedback: { perfect: 'ML 알고리즘을 완벽히 이해했어요!', good: '복잡도를 잘 판단했어요!', partial: '선형회귀가 가장 단순해요.', wrong: '단순(선형회귀)->복잡(딥러닝) 순으로 배열하세요.' } }
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
                    challenges: [
            { id: 'c1', title: 'Teachable Machine 시작', description: '이미지 분류를 시작하는 단계를 순서대로 배열하세요.', difficulty: 'easy', hints: ['먼저 클래스를 만들어야 해요'], estimatedMinutes: 3, blocks: ['사이트 접속', '이미지 프로젝트 선택', 'Class 이름 설정', '이미지 추가', 'Train Model 클릭'], correctSequence: ['사이트 접속', '이미지 프로젝트 선택', 'Class 이름 설정', '이미지 추가', 'Train Model 클릭'], feedback: { perfect: '사용법을 완벽히 이해했어요!', good: '좋아요!', partial: '클래스 설정이 이미지 추가보다 먼저예요.', wrong: '접속->선택->설정->추가->학습 순이에요.' } },
            { id: 'c2', title: '좋은 학습 사진 조건', description: '좋은 학습 사진의 조건을 중요한 순서대로 배열하세요.', difficulty: 'easy', hints: ['충분한 양이 가장 중요해요'], estimatedMinutes: 3, blocks: ['충분한 양(30장+)', '다양한 각도', '다양한 조명', '깨끗한 배경', '대상 중앙 배치'], correctSequence: ['충분한 양(30장+)', '다양한 각도', '다양한 조명', '깨끗한 배경', '대상 중앙 배치'], feedback: { perfect: '학습 데이터 조건을 알고 있어요!', good: '대부분 맞았어요!', partial: '충분한 양이 가장 중요해요.', wrong: '양>각도>조명>배경>위치 순이에요.' } },
            { id: 'c3', title: '분류 정확도 높이기', description: '정확도를 높이는 방법을 효과 순서로 배열하세요.', difficulty: 'easy', hints: ['데이터가 가장 중요해요'], estimatedMinutes: 4, blocks: ['데이터 양 늘리기', '다양성 확보', '전처리(크기 통일)', '학습 횟수 늘리기', '모델 복잡도 조정'], correctSequence: ['데이터 양 늘리기', '다양성 확보', '전처리(크기 통일)', '학습 횟수 늘리기', '모델 복잡도 조정'], feedback: { perfect: '정확도 향상법을 완벽히 이해했어요!', good: '좋은 순서예요!', partial: '데이터가 가장 효과적이에요.', wrong: '데이터양>다양성>전처리>학습횟수>모델 순이에요.' } },
            { id: 'c4', title: '혼동 행렬 이해', description: '분류 결과를 좋은 것부터 나쁜 것 순으로 배열하세요.', difficulty: 'medium', hints: ['정확한 분류가 좋은 결과예요'], estimatedMinutes: 5, blocks: ['고양이->고양이(정답)', '강아지->강아지(정답)', '고양이->강아지(오답)', '강아지->고양이(오답)', '분류 불가(에러)'], correctSequence: ['고양이->고양이(정답)', '강아지->강아지(정답)', '고양이->강아지(오답)', '강아지->고양이(오답)', '분류 불가(에러)'], feedback: { perfect: '혼동 행렬을 완벽히 이해했어요!', good: '정답과 오답을 잘 구분했어요!', partial: '정답이 먼저예요.', wrong: '올바른 분류가 가장 좋은 결과예요.' } },
            { id: 'c5', title: '데이터 증강', description: '데이터 부족시 증강 방법을 간단한 순서대로 배열하세요.', difficulty: 'medium', hints: ['원본을 변형해 새 데이터를 만들어요'], estimatedMinutes: 6, blocks: ['좌우 반전', '이미지 회전', '밝기/대비 조절', '잘라내기(crop)', '색상 변환'], correctSequence: ['좌우 반전', '이미지 회전', '밝기/대비 조절', '잘라내기(crop)', '색상 변환'], feedback: { perfect: '데이터 증강을 모두 알아요!', good: '좋아요!', partial: '간단한 변환부터 복잡한 변환 순이에요.', wrong: '반전이 가장 간단, 색상변환이 가장 복잡해요.' } },
            { id: 'c6', title: '전이학습 이해', description: '전이학습 과정을 순서대로 배열하세요.', difficulty: 'medium', hints: ['기존 모델을 재활용해요'], estimatedMinutes: 7, blocks: ['기존 모델 선택', '특징추출 부분 유지', '분류 부분 새로 설계', '적은 데이터로 미세조정', '새 작업에 활용'], correctSequence: ['기존 모델 선택', '특징추출 부분 유지', '분류 부분 새로 설계', '적은 데이터로 미세조정', '새 작업에 활용'], feedback: { perfect: '전이학습을 완벽히 이해했어요!', good: '좋아요!', partial: '기존 모델을 가져오는 게 첫 단계예요.', wrong: '모델선택->특징유지->분류설계->미세조정->활용' } },
            { id: 'c7', title: '다중 클래스 분류 설계', description: '물건 5가지 분류 AI 설계 과정을 배열하세요.', difficulty: 'hard', hints: ['카테고리를 먼저 정해요'], estimatedMinutes: 8, blocks: ['카테고리 5가지 선정', '차이점 분석', '사진 50장+ 수집', 'Teachable Machine 학습', '테스트 후 개선'], correctSequence: ['카테고리 5가지 선정', '차이점 분석', '사진 50장+ 수집', 'Teachable Machine 학습', '테스트 후 개선'], feedback: { perfect: '다중 분류를 완벽히 설계했어요!', good: '좋은 설계예요!', partial: '카테고리가 먼저예요.', wrong: '카테고리->분석->수집->학습->개선' } },
            { id: 'c8', title: '실시간 분류 앱', description: '웹캠 실시간 분류 앱 단계를 배열하세요.', difficulty: 'hard', hints: ['모델을 먼저 만들어요'], estimatedMinutes: 10, blocks: ['모델 학습', '모델 Export', 'HTML 페이지 생성', 'TensorFlow.js 로드', '웹캠+실시간 분류'], correctSequence: ['모델 학습', '모델 Export', 'HTML 페이지 생성', 'TensorFlow.js 로드', '웹캠+실시간 분류'], feedback: { perfect: '실시간 앱을 완벽히 설계했어요!', good: '훌륭해요!', partial: '모델 학습이 먼저예요.', wrong: '학습->내보내기->페이지->로드->분류' } },
            { id: 'c9', title: '분류 에러 분석', description: '분류가 틀리는 원인을 빈도 순서대로 배열하세요.', difficulty: 'hard', hints: ['데이터 문제가 가장 흔해요'], estimatedMinutes: 10, blocks: ['학습 데이터 부족', '데이터 편향', '비슷한 클래스 혼동', '노이즈(흐린 사진)', '모델 부적합'], correctSequence: ['학습 데이터 부족', '데이터 편향', '비슷한 클래스 혼동', '노이즈(흐린 사진)', '모델 부적합'], feedback: { perfect: '에러 원인을 완벽히 분석했어요!', good: '좋은 분석이에요!', partial: '데이터 부족이 가장 흔해요.', wrong: '데이터부족이 가장 흔한 원인이에요.' } },
            { id: 'c10', title: '분류 AI 프로젝트 기획', description: '나만의 이미지 분류 프로젝트 전체 과정을 배열하세요.', difficulty: 'hard', hints: ['아이디어부터 배포까지'], estimatedMinutes: 12, blocks: ['아이디어 선정', '카테고리+데이터 계획', '프로토타입 제작', '정확도 테스트', '웹앱 배포', '피드백으로 보강'], correctSequence: ['아이디어 선정', '카테고리+데이터 계획', '프로토타입 제작', '정확도 테스트', '웹앱 배포', '피드백으로 보강'], feedback: { perfect: '프로젝트 기획을 완벽히 수립했어요!', good: '훌륭한 기획이에요!', partial: '아이디어가 먼저예요.', wrong: '아이디어->계획->프로토타입->테스트->배포->개선' } }
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
                    challenges: [
            { id: 'c1', title: 'AI 편향 사례 식별', description: '편향된 AI 사례만 골라 배열하세요.', difficulty: 'easy', hints: ['특정 그룹에 불공정하면 편향이에요'], estimatedMinutes: 3, blocks: ['채용AI 여성 불리(편향)', '얼굴인식 특정인종 실패(편향)', '번역AI 성별고정관념(편향)', '계산기 정확한 답(X)', '추천AI 인기영화(X)'], correctSequence: ['채용AI 여성 불리(편향)', '얼굴인식 특정인종 실패(편향)', '번역AI 성별고정관념(편향)'], feedback: { perfect: 'AI 편향을 정확히 식별했어요!', good: '대부분 맞았어요!', partial: '불공정한 결과가 편향이에요.', wrong: '특정 그룹을 불공정하게 대하면 편향이에요.' } },
            { id: 'c2', title: 'AI 윤리 5대 원칙', description: '윤리 원칙을 중요도 순서대로 배열하세요.', difficulty: 'easy', hints: ['안전이 최우선이에요'], estimatedMinutes: 3, blocks: ['안전성', '공정성', '투명성', '개인정보 보호', '책임성'], correctSequence: ['안전성', '공정성', '투명성', '개인정보 보호', '책임성'], feedback: { perfect: 'AI 윤리를 완벽히 이해했어요!', good: '좋아요!', partial: '안전이 가장 중요해요.', wrong: '안전>공정>투명>보호>책임 순이에요.' } },
            { id: 'c3', title: '개인정보 보호 단계', description: '개인정보 보호 방법을 순서대로 배열하세요.', difficulty: 'easy', hints: ['동의가 먼저예요'], estimatedMinutes: 4, blocks: ['수집 전 동의', '최소 수집', '암호화 저장', '목적 외 금지', '기간 후 삭제'], correctSequence: ['수집 전 동의', '최소 수집', '암호화 저장', '목적 외 금지', '기간 후 삭제'], feedback: { perfect: '개인정보 보호를 완벽히 이해했어요!', good: '좋은 순서예요!', partial: '동의가 먼저예요.', wrong: '동의->최소수집->암호화->제한->삭제 순이에요.' } },
            { id: 'c4', title: 'AI 편향 해결법', description: '편향 해결법을 효과 순서대로 배열하세요.', difficulty: 'medium', hints: ['데이터 다양화가 가장 효과적이에요'], estimatedMinutes: 5, blocks: ['데이터 다양화', '공정성 지표 도입', '편향 탐지 도구', '정기 감사', '다양한 팀 구성'], correctSequence: ['데이터 다양화', '공정성 지표 도입', '편향 탐지 도구', '정기 감사', '다양한 팀 구성'], feedback: { perfect: '편향 해결을 완벽히 이해했어요!', good: '좋은 분석이에요!', partial: '데이터 다양화가 가장 중요해요.', wrong: '다양한 데이터가 가장 효과적이에요.' } },
            { id: 'c5', title: 'AI 투명성 중요도', description: '투명성이 필요한 분야를 중요도 순으로 배열하세요.', difficulty: 'medium', hints: ['생명/권리에 큰 영향이 먼저예요'], estimatedMinutes: 6, blocks: ['의료 진단(생명)', '자율주행(안전)', '재판/법률(권리)', '대출(경제)', '영화 추천(일상)'], correctSequence: ['의료 진단(생명)', '자율주행(안전)', '재판/법률(권리)', '대출(경제)', '영화 추천(일상)'], feedback: { perfect: 'AI 투명성 중요도를 정확히 판단했어요!', good: '좋은 분석이에요!', partial: '생명이 가장 중요해요.', wrong: '생명>안전>권리>경제>일상 순이에요.' } },
            { id: 'c6', title: 'AI 저작권 쟁점', description: '저작권 논란이 큰 순서대로 배열하세요.', difficulty: 'medium', hints: ['AI 그림이 가장 큰 논란이에요'], estimatedMinutes: 7, blocks: ['AI 생성 그림(가장 큰 논란)', 'AI 학습 원작', 'AI 생성 코드', 'AI 음악', 'AI 번역문'], correctSequence: ['AI 생성 그림(가장 큰 논란)', 'AI 학습 원작', 'AI 생성 코드', 'AI 음악', 'AI 번역문'], feedback: { perfect: '저작권 쟁점을 완벽히 이해했어요!', good: '좋은 분석이에요!', partial: '그림이 가장 큰 논란이에요.', wrong: '이미지>학습데이터>코드>음악>번역 순이에요.' } },
            { id: 'c7', title: '자율주행 윤리 딜레마', description: '고려할 요소를 중요도 순으로 배열하세요.', difficulty: 'hard', hints: ['인간 안전이 최우선이에요'], estimatedMinutes: 8, blocks: ['피해 최소화', '약자 보호(어린이,노인)', '탑승자 vs 보행자', 'AI 판단 투명성', '사고 책임 소재'], correctSequence: ['피해 최소화', '약자 보호(어린이,노인)', '탑승자 vs 보행자', 'AI 판단 투명성', '사고 책임 소재'], feedback: { perfect: '윤리 딜레마를 깊이 분석했어요!', good: '좋은 분석이에요!', partial: '피해 최소화가 가장 중요해요.', wrong: '피해최소>약자보호>가치판단>투명성>책임 순이에요.' } },
            { id: 'c8', title: 'AI 규제 프레임워크', description: '세계 AI 규제를 강도 순서대로 배열하세요.', difficulty: 'hard', hints: ['EU가 가장 강력해요'], estimatedMinutes: 10, blocks: ['EU AI Act(강력)', '중국 AI 관리규정', '한국 AI 윤리기준', '미국 AI 권리장전', '일본 AI 사회원칙'], correctSequence: ['EU AI Act(강력)', '중국 AI 관리규정', '한국 AI 윤리기준', '미국 AI 권리장전', '일본 AI 사회원칙'], feedback: { perfect: '세계 AI 규제를 정확히 알고 있어요!', good: '좋은 이해예요!', partial: 'EU가 가장 강력해요.', wrong: 'EU가 가장 강력, 일본이 가장 느슨해요.' } },
            { id: 'c9', title: '책임있는 AI 개발', description: '윤리 확인 항목을 개발 단계 순서대로 배열하세요.', difficulty: 'hard', hints: ['기획부터 윤리를 고려해요'], estimatedMinutes: 10, blocks: ['기획: 윤리 영향 평가', '데이터: 편향 검토', '개발: 공정성 테스트', '배포: 투명성 보고서', '운영: 지속적 모니터링'], correctSequence: ['기획: 윤리 영향 평가', '데이터: 편향 검토', '개발: 공정성 테스트', '배포: 투명성 보고서', '운영: 지속적 모니터링'], feedback: { perfect: '책임있는 AI 개발을 완벽히 이해했어요!', good: '훌륭해요!', partial: '기획부터 윤리를 고려해요.', wrong: '기획->데이터->개발->배포->운영 순서예요.' } },
            { id: 'c10', title: '학교 AI 윤리 강령', description: '윤리 강령을 기본 원칙부터 세부 실천 순서로 배열하세요.', difficulty: 'hard', hints: ['기본 원칙이 먼저예요'], estimatedMinutes: 12, blocks: ['AI는 도구, 판단은 사람이', 'AI 한계/편향 인식', 'AI 결과 맹신 금지', '타인 개인정보 입력 금지', 'AI 표절/속임수 금지', 'AI 사용시 출처 표기'], correctSequence: ['AI는 도구, 판단은 사람이', 'AI 한계/편향 인식', 'AI 결과 맹신 금지', '타인 개인정보 입력 금지', 'AI 표절/속임수 금지', 'AI 사용시 출처 표기'], feedback: { perfect: '훌륭한 윤리 강령이에요!', good: '좋은 강령이에요!', partial: '기본 원칙이 먼저예요.', wrong: '기본원칙->인식->실천->세부규칙 순이에요.' } }
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
                    challenges: [
            { id: 'c1', title: '좋은 질문 vs 나쁜 질문', description: 'ChatGPT에 좋은 질문과 나쁜 질문을 구분하세요. 좋은 것 먼저 배열하세요.', difficulty: 'easy', hints: ['구체적이고 명확한 질문이 좋아요'], estimatedMinutes: 3, blocks: ['광합성을 초등학생 수준으로 설명해줘(좋음)', '파이썬 구구단 코드 작성해줘(좋음)', '뭔가 알려줘(나쁨)', '모든것을 설명해줘(나쁨)', '숙제 대신 해줘(나쁨)'], correctSequence: ['광합성을 초등학생 수준으로 설명해줘(좋음)', '파이썬 구구단 코드 작성해줘(좋음)', '뭔가 알려줘(나쁨)', '모든것을 설명해줘(나쁨)', '숙제 대신 해줘(나쁨)'], feedback: { perfect: '좋은 질문을 정확히 구분했어요!', good: '대부분 맞았어요!', partial: '구체적 질문이 좋아요.', wrong: '구체적 vs 모호한 질문을 구분하세요.' } },
            { id: 'c2', title: 'AI 대화 절차', description: '효과적인 AI 대화 단계를 배열하세요.', difficulty: 'easy', hints: ['목적을 먼저 정해요'], estimatedMinutes: 3, blocks: ['대화 목적 정하기', '구체적으로 질문', 'AI 응답 확인', '추가 질문', '결과물 검증'], correctSequence: ['대화 목적 정하기', '구체적으로 질문', 'AI 응답 확인', '추가 질문', '결과물 검증'], feedback: { perfect: '대화 과정을 완벽히 이해했어요!', good: '좋아요!', partial: '목적이 먼저예요.', wrong: '목적->질문->확인->추가질문->검증 순이에요.' } },
            { id: 'c3', title: 'AI 응답 신뢰도', description: 'ChatGPT 응답 신뢰도를 높은 순서부터 배열하세요.', difficulty: 'easy', hints: ['확인 쉬운 것이 신뢰도 높아요'], estimatedMinutes: 4, blocks: ['일반 상식 설명(높음)', '코드 작성(높음)', '역사적 사실(중간)', '최신 뉴스(낮음)', '미래 예측(매우 낮음)'], correctSequence: ['일반 상식 설명(높음)', '코드 작성(높음)', '역사적 사실(중간)', '최신 뉴스(낮음)', '미래 예측(매우 낮음)'], feedback: { perfect: '신뢰도를 정확히 판단했어요!', good: '좋은 판단이에요!', partial: '코드는 실행으로 검증 가능해서 높아요.', wrong: '확인가능(상식,코드)>역사>뉴스>예측 순이에요.' } },
            { id: 'c4', title: '컨텍스트 대화 전략', description: '점점 구체적인 질문 순서를 배열하세요.', difficulty: 'medium', hints: ['넓은 주제에서 좁은 주제로'], estimatedMinutes: 5, blocks: ['파이썬으로 할 수 있는 것들', '게임 만들기 자세히', '캐릭터 움직이는 코드', '키보드로 상하 이동', '점프 물리 효과'], correctSequence: ['파이썬으로 할 수 있는 것들', '게임 만들기 자세히', '캐릭터 움직이는 코드', '키보드로 상하 이동', '점프 물리 효과'], feedback: { perfect: '컨텍스트 활용을 완벽히 이해했어요!', good: '좋아요!', partial: '넓은->좁은 주제로 좁혀가세요.', wrong: '넓은주제->세부->구체코드->상세->고급 순이에요.' } },
            { id: 'c5', title: 'AI 환각 탐지', description: '환각 가능성이 높은 상황 순으로 배열하세요.', difficulty: 'medium', hints: ['구체적 수치에서 환각이 잘 일어나요'], estimatedMinutes: 6, blocks: ['없는 논문 인용(매우높음)', '가짜 통계(높음)', '인물 잘못된 정보(높음)', '코드 오류(중간)', '개념 설명 오류(낮음)'], correctSequence: ['없는 논문 인용(매우높음)', '가짜 통계(높음)', '인물 잘못된 정보(높음)', '코드 오류(중간)', '개념 설명 오류(낮음)'], feedback: { perfect: '환각을 정확히 이해했어요!', good: '좋은 분석!', partial: '논문 인용이 가장 위험해요.', wrong: '인용>수치>인물>코드>개념 순이에요.' } },
            { id: 'c6', title: 'AI 답변 검증', description: '검증 방법을 효과적인 순서대로 배열하세요.', difficulty: 'medium', hints: ['직접 실행이 가장 확실해요'], estimatedMinutes: 7, blocks: ['코드는 직접 실행', '검색엔진 사실 확인', '같은 질문 재시도', '다른 AI에 질문', '전문가 의견'], correctSequence: ['코드는 직접 실행', '검색엔진 사실 확인', '같은 질문 재시도', '다른 AI에 질문', '전문가 의견'], feedback: { perfect: '검증법을 완벽히 이해했어요!', good: '좋은 전략이에요!', partial: '직접 확인이 가장 효과적이에요.', wrong: '직접확인>검색>재질문>교차검증>전문가 순이에요.' } },
            { id: 'c7', title: 'AI 학습 계획 활용', description: 'AI로 학습 계획을 세우는 단계를 배열하세요.', difficulty: 'hard', hints: ['현재 수준 파악이 먼저예요'], estimatedMinutes: 8, blocks: ['현재 실력 설명', '목표 설정 요청', '로드맵 받기', '주간 계획 세부화', '이해도 테스트', '약점 분석+조정'], correctSequence: ['현재 실력 설명', '목표 설정 요청', '로드맵 받기', '주간 계획 세부화', '이해도 테스트', '약점 분석+조정'], feedback: { perfect: 'AI 학습 계획을 완벽히 세웠어요!', good: '훌륭한 전략이에요!', partial: '수준 파악이 먼저예요.', wrong: '수준->목표->로드맵->계획->테스트->조정 순이에요.' } },
            { id: 'c8', title: 'AI 대화 디버깅', description: '원하는 답을 못 받을 때 개선법을 효과 순서로 배열하세요.', difficulty: 'hard', hints: ['구체적으로 바꾸는 게 가장 효과적이에요'], estimatedMinutes: 10, blocks: ['질문을 더 구체적으로', '답변 형식 지정', '역할 지정(선생님 등)', '예시 입출력 제공', '단계별로 나눠 질문'], correctSequence: ['질문을 더 구체적으로', '답변 형식 지정', '역할 지정(선생님 등)', '예시 입출력 제공', '단계별로 나눠 질문'], feedback: { perfect: '대화 디버깅을 완벽히 이해했어요!', good: '좋은 전략이에요!', partial: '구체적 질문이 가장 효과적이에요.', wrong: '구체화->형식->역할->예시->분할 순이에요.' } },
            { id: 'c9', title: '윤리적 AI 활용', description: '적절한 활용부터 부적절한 순서로 배열하세요.', difficulty: 'hard', hints: ['학습도구=적절, 속임수=부적절'], estimatedMinutes: 10, blocks: ['개념 설명 요청(적절)', '코드 오류 분석(적절)', '에세이 교정 요청(보통)', '시험 답 물어보기(부적절)', '타인 사칭 글(매우 부적절)'], correctSequence: ['개념 설명 요청(적절)', '코드 오류 분석(적절)', '에세이 교정 요청(보통)', '시험 답 물어보기(부적절)', '타인 사칭 글(매우 부적절)'], feedback: { perfect: '윤리적 활용을 완벽히 판단했어요!', good: '좋은 판단이에요!', partial: '학습 도구 활용은 적절해요.', wrong: '학습도움>교정>시험>사칭 순이에요.' } },
            { id: 'c10', title: 'AI 마스터 전략', description: 'ChatGPT 고급 활용 전략을 효과 순서로 배열하세요.', difficulty: 'hard', hints: ['맥락 제공이 가장 효과적이에요'], estimatedMinutes: 12, blocks: ['충분한 맥락 제공', '단계별 사고 요청(CoT)', '예시로 패턴 안내', '형식 명확히 지정', '자기 반성 요청', '여러 대안 후 선택'], correctSequence: ['충분한 맥락 제공', '단계별 사고 요청(CoT)', '예시로 패턴 안내', '형식 명확히 지정', '자기 반성 요청', '여러 대안 후 선택'], feedback: { perfect: 'AI 마스터예요!', good: '훌륭한 전략이에요!', partial: '맥락이 가장 중요해요.', wrong: '맥락->CoT->예시->형식->반성->대안 순이에요.' } }
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
                    challenges: [
            { id: 'c1', title: '프롬프트 기본 구조', description: '좋은 프롬프트 구성요소를 순서대로 배열하세요.', difficulty: 'easy', hints: ['역할->맥락->지시->형식 순이에요'], estimatedMinutes: 3, blocks: ['역할 지정', '맥락 제공', '구체적 지시', '출력 형식', '제약 조건'], correctSequence: ['역할 지정', '맥락 제공', '구체적 지시', '출력 형식', '제약 조건'], feedback: { perfect: '프롬프트 구조를 완벽히 이해했어요!', good: '좋아요!', partial: '역할이 먼저예요.', wrong: '역할->맥락->지시->형식->제약 순이에요.' } },
            { id: 'c2', title: '역할 지정 연습', description: '간단한 역할부터 복잡한 역할 순서로 배열하세요.', difficulty: 'easy', hints: ['간단->복잡 순이에요'], estimatedMinutes: 3, blocks: ['친절한 선생님', '파이썬 전문가', '10년차 개발자', '코드 리뷰어+멘토', '풀스택 아키텍트'], correctSequence: ['친절한 선생님', '파이썬 전문가', '10년차 개발자', '코드 리뷰어+멘토', '풀스택 아키텍트'], feedback: { perfect: '역할 지정을 완벽히 이해했어요!', good: '좋아요!', partial: '간단한 역할부터 순서예요.', wrong: '단순역할->전문역할->복합역할 순이에요.' } },
            { id: 'c3', title: '프롬프트 개선', description: '나쁜 프롬프트를 좋은 것으로 개선하는 과정을 배열하세요.', difficulty: 'easy', hints: ['모호한 것을 구체적으로 바꿔가요'], estimatedMinutes: 4, blocks: ['"코드 짜줘"(나쁨)', '"파이썬 코드"(조금나음)', '"파이썬 계산기"(보통)', '"사칙연산 계산기,함수사용"(좋음)', '"에러처리+주석 포함"(최고)'], correctSequence: ['"코드 짜줘"(나쁨)', '"파이썬 코드"(조금나음)', '"파이썬 계산기"(보통)', '"사칙연산 계산기,함수사용"(좋음)', '"에러처리+주석 포함"(최고)'], feedback: { perfect: '프롬프트 개선을 완벽히 이해했어요!', good: '좋아요!', partial: '더 구체적일수록 좋아요.', wrong: '모호->구체->상세->정교->완벽 순이에요.' } },
            { id: 'c4', title: 'Few-shot 프롬프팅', description: 'Few-shot(예시 제공) 프롬프팅 단계를 배열하세요.', difficulty: 'medium', hints: ['예시를 먼저 보여주고 새 입력을 줘요'], estimatedMinutes: 5, blocks: ['작업 설명', '예시 입력 1', '예시 출력 1', '예시 입출력 2', '새 입력으로 요청'], correctSequence: ['작업 설명', '예시 입력 1', '예시 출력 1', '예시 입출력 2', '새 입력으로 요청'], feedback: { perfect: 'Few-shot을 완벽히 이해했어요!', good: '좋아요!', partial: '작업 설명이 먼저예요.', wrong: '설명->예시1->예시2->새입력 순이에요.' } },
            { id: 'c5', title: 'CoT 프롬프팅', description: '단계별 사고(CoT) 프롬프팅 과정을 배열하세요.', difficulty: 'medium', hints: ['"단계별로 풀어봐"를 추가하면 돼요'], estimatedMinutes: 6, blocks: ['문제 제시', '"단계별로 풀어봐" 추가', 'AI 1단계 분석', 'AI 2단계 계산', 'AI 최종 답 도출'], correctSequence: ['문제 제시', '"단계별로 풀어봐" 추가', 'AI 1단계 분석', 'AI 2단계 계산', 'AI 최종 답 도출'], feedback: { perfect: 'CoT를 완벽히 이해했어요!', good: '좋아요!', partial: '"단계별로"가 핵심이에요.', wrong: '문제->"단계별로"->분석->계산->답 순이에요.' } },
            { id: 'c6', title: '프롬프트 템플릿', description: '재사용 가능한 프롬프트 템플릿 구성요소를 배열하세요.', difficulty: 'medium', hints: ['변수({주제},{대상})를 사용해요'], estimatedMinutes: 7, blocks: ['역할: {전문분야} 전문가', '대상: {학년} 학생', '작업: {주제}를 {형식}으로', '조건: {길이} 이내', '톤: {말투}로 작성'], correctSequence: ['역할: {전문분야} 전문가', '대상: {학년} 학생', '작업: {주제}를 {형식}으로', '조건: {길이} 이내', '톤: {말투}로 작성'], feedback: { perfect: '프롬프트 템플릿을 완벽히 설계했어요!', good: '좋은 템플릿이에요!', partial: '역할이 먼저예요.', wrong: '역할->대상->작업->조건->톤 순이에요.' } },
            { id: 'c7', title: '코드 생성 프롬프트', description: 'AI에게 좋은 코드를 생성시키기 위한 요소를 중요도 순서대로 배열하세요.', difficulty: 'hard', hints: ['언어와 기능 명세가 가장 중요해요'], estimatedMinutes: 8, blocks: ['프로그래밍 언어 지정', '기능 상세 설명', '입출력 예시', '에러 처리 요구', '코드 스타일/주석 요구'], correctSequence: ['프로그래밍 언어 지정', '기능 상세 설명', '입출력 예시', '에러 처리 요구', '코드 스타일/주석 요구'], feedback: { perfect: '코드 생성 프롬프트를 완벽히 이해했어요!', good: '좋아요!', partial: '언어 지정이 가장 중요해요.', wrong: '언어->기능->입출력->에러처리->스타일 순이에요.' } },
            { id: 'c8', title: '프롬프트 안티패턴', description: '나쁜 프롬프트 패턴을 심각한 순서대로 배열하세요.', difficulty: 'hard', hints: ['모호한 요청이 가장 나빠요'], estimatedMinutes: 10, blocks: ['모호한 요청', '너무 방대한 요청', '모순된 지시', '맥락 없는 전문용어', '출력 형식 미지정'], correctSequence: ['모호한 요청', '너무 방대한 요청', '모순된 지시', '맥락 없는 전문용어', '출력 형식 미지정'], feedback: { perfect: '안티패턴을 정확히 파악했어요!', good: '좋은 분석이에요!', partial: '모호한 요청이 가장 나빠요.', wrong: '모호>방대>모순>전문용어>형식미지정 순이에요.' } },
            { id: 'c9', title: '멀티턴 대화', description: '여러 대화로 원하는 결과를 얻는 전략을 배열하세요.', difficulty: 'hard', hints: ['큰 그림->세부 순으로 진행해요'], estimatedMinutes: 10, blocks: ['전체 구조 요청', '각 부분 상세 요청', '코드 생성 요청', '코드 리뷰+개선', '테스트 케이스 생성', '문서화 요청'], correctSequence: ['전체 구조 요청', '각 부분 상세 요청', '코드 생성 요청', '코드 리뷰+개선', '테스트 케이스 생성', '문서화 요청'], feedback: { perfect: '멀티턴 전략을 완벽히 이해했어요!', good: '훌륭해요!', partial: '큰 그림부터 시작해요.', wrong: '구조->상세->코드->리뷰->테스트->문서 순이에요.' } },
            { id: 'c10', title: '프롬프트 엔지니어링 마스터', description: '고급 프롬프팅 기법을 난이도 순서로 배열하세요.', difficulty: 'hard', hints: ['기본부터 고급 순이에요'], estimatedMinutes: 12, blocks: ['Zero-shot(예시 없이)', 'Few-shot(예시 제공)', 'Chain-of-Thought(단계적)', 'Self-consistency(여러 답 비교)', 'Tree-of-Thought(분기 탐색)'], correctSequence: ['Zero-shot(예시 없이)', 'Few-shot(예시 제공)', 'Chain-of-Thought(단계적)', 'Self-consistency(여러 답 비교)', 'Tree-of-Thought(분기 탐색)'], feedback: { perfect: '프롬프트 엔지니어링 마스터예요!', good: '고급 기법을 잘 이해했어요!', partial: 'Zero-shot이 가장 기본이에요.', wrong: 'Zero->Few->CoT->SC->ToT 순이에요.' } }
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
                    challenges: [
            { id: 'c1', title: 'AI 코드 생성 기본', description: 'AI에게 코드를 생성시키는 기본 단계를 배열하세요.', difficulty: 'easy', hints: ['언어와 기능을 먼저 정해요'], estimatedMinutes: 3, blocks: ['언어 선택', '기능 설명', 'AI에게 요청', '코드 확인', '실행+테스트'], correctSequence: ['언어 선택', '기능 설명', 'AI에게 요청', '코드 확인', '실행+테스트'], feedback: { perfect: 'AI 코드 생성을 이해했어요!', good: '좋아요!', partial: '언어 선택이 먼저예요.', wrong: '언어->기능->요청->확인->테스트 순이에요.' } },
            { id: 'c2', title: 'AI 코드 이해하기', description: 'AI가 생성한 코드를 이해하는 단계를 배열하세요.', difficulty: 'easy', hints: ['전체 구조를 먼저 파악해요'], estimatedMinutes: 3, blocks: ['전체 구조 파악', '함수/변수 역할 확인', '코드 흐름 따라가기', '모르는 부분 AI에 질문', '직접 수정하며 이해'], correctSequence: ['전체 구조 파악', '함수/변수 역할 확인', '코드 흐름 따라가기', '모르는 부분 AI에 질문', '직접 수정하며 이해'], feedback: { perfect: '코드 이해법을 완벽히 알아요!', good: '좋은 방법이에요!', partial: '구조를 먼저 파악해요.', wrong: '구조->역할->흐름->질문->수정 순이에요.' } },
            { id: 'c3', title: 'AI 코드 검증', description: '코드 검증 방법을 효과 순서대로 배열하세요.', difficulty: 'easy', hints: ['직접 실행이 가장 확실해요'], estimatedMinutes: 4, blocks: ['직접 실행', '다양한 입력 테스트', '에지 케이스 확인', '코드 리뷰 요청', '성능/보안 점검'], correctSequence: ['직접 실행', '다양한 입력 테스트', '에지 케이스 확인', '코드 리뷰 요청', '성능/보안 점검'], feedback: { perfect: '코드 검증을 완벽히 이해했어요!', good: '좋은 검증 순서예요!', partial: '직접 실행이 먼저예요.', wrong: '실행->테스트->에지케이스->리뷰->보안 순이에요.' } },
            { id: 'c4', title: 'AI 코드 디버깅 요청', description: 'AI에게 디버깅을 요청하는 효과적 순서를 배열하세요.', difficulty: 'medium', hints: ['에러 메시지를 먼저 보여줘요'], estimatedMinutes: 5, blocks: ['에러 메시지 전달', '관련 코드 전체 제공', '원래 의도 설명', '시도한 해결책 공유', 'AI 수정 코드 검증'], correctSequence: ['에러 메시지 전달', '관련 코드 전체 제공', '원래 의도 설명', '시도한 해결책 공유', 'AI 수정 코드 검증'], feedback: { perfect: 'AI 디버깅을 완벽히 이해했어요!', good: '좋은 방법이에요!', partial: '에러 메시지가 가장 중요해요.', wrong: '에러->코드->의도->시도->검증 순이에요.' } },
            { id: 'c5', title: 'AI 코드 리팩토링', description: 'AI에게 코드 개선을 요청하는 단계를 배열하세요.', difficulty: 'medium', hints: ['가독성->구조->성능 순이에요'], estimatedMinutes: 6, blocks: ['변수명/함수명 개선', '중복 코드 제거', '함수 분리/모듈화', '에러 처리 추가', '성능 최적화'], correctSequence: ['변수명/함수명 개선', '중복 코드 제거', '함수 분리/모듈화', '에러 처리 추가', '성능 최적화'], feedback: { perfect: '리팩토링을 완벽히 이해했어요!', good: '좋은 순서예요!', partial: '가독성 개선이 먼저예요.', wrong: '가독성->구조->모듈화->에러->성능 순이에요.' } },
            { id: 'c6', title: 'AI 코드 생성 한계', description: 'AI 코드 생성의 한계를 심각한 순서대로 배열하세요.', difficulty: 'medium', hints: ['보안 취약점이 가장 심각해요'], estimatedMinutes: 7, blocks: ['보안 취약점 포함(가장 심각)', '오래된 라이브러리', '비효율적 알고리즘', '코딩 컨벤션 불일치', '주석/문서 부족'], correctSequence: ['보안 취약점 포함(가장 심각)', '오래된 라이브러리', '비효율적 알고리즘', '코딩 컨벤션 불일치', '주석/문서 부족'], feedback: { perfect: 'AI 코드 한계를 정확히 파악했어요!', good: '좋은 분석이에요!', partial: '보안이 가장 심각해요.', wrong: '보안>라이브러리>알고리즘>컨벤션>문서 순이에요.' } },
            { id: 'c7', title: 'AI 페어 프로그래밍', description: 'AI와 페어 프로그래밍 전략을 배열하세요.', difficulty: 'hard', hints: ['사람이 설계, AI가 구현해요'], estimatedMinutes: 8, blocks: ['사람: 설계/아키텍처', 'AI: 보일러플레이트 코드', '사람: 핵심 비즈니스 로직', 'AI: 테스트 코드', '사람: 코드 리뷰+최종결정'], correctSequence: ['사람: 설계/아키텍처', 'AI: 보일러플레이트 코드', '사람: 핵심 비즈니스 로직', 'AI: 테스트 코드', '사람: 코드 리뷰+최종결정'], feedback: { perfect: '페어 프로그래밍을 완벽히 이해했어요!', good: '훌륭한 전략이에요!', partial: '사람이 설계, AI가 구현해요.', wrong: '사람(설계)->AI(코드)->사람(로직)->AI(테스트)->사람(리뷰)' } },
            { id: 'c8', title: 'AI 코드 학습 전략', description: 'AI로 코딩 실력을 키우는 전략을 효과 순서대로 배열하세요.', difficulty: 'hard', hints: ['맡기기만 하면 실력이 안 늘어요'], estimatedMinutes: 10, blocks: ['AI 코드 한줄씩 이해', 'AI 코드 직접 타이핑', 'AI 코드 변형 실험', '스스로 작성 후 AI 비교', 'AI 없이 코딩 후 리뷰'], correctSequence: ['AI 코드 한줄씩 이해', 'AI 코드 직접 타이핑', 'AI 코드 변형 실험', '스스로 작성 후 AI 비교', 'AI 없이 코딩 후 리뷰'], feedback: { perfect: 'AI 학습 전략을 완벽히 이해했어요!', good: '좋은 학습법이에요!', partial: '이해->따라하기->변형->직접작성 순이에요.', wrong: '이해->따라하기->변형->비교->독립코딩 순이에요.' } },
            { id: 'c9', title: 'GitHub Copilot 활용', description: 'AI 코딩 도구 활용 단계를 배열하세요.', difficulty: 'hard', hints: ['설정->사용->검증->학습 순이에요'], estimatedMinutes: 10, blocks: ['확장 프로그램 설치', '주석으로 의도 설명', 'AI 자동완성 확인', '제안 코드 검증+수정', '자주 사용 패턴 학습'], correctSequence: ['확장 프로그램 설치', '주석으로 의도 설명', 'AI 자동완성 확인', '제안 코드 검증+수정', '자주 사용 패턴 학습'], feedback: { perfect: 'AI 코딩 도구를 완벽히 이해했어요!', good: '좋아요!', partial: '설치가 먼저예요.', wrong: '설치->의도설명->확인->검증->학습 순이에요.' } },
            { id: 'c10', title: 'AI 코드 프로젝트', description: 'AI로 프로젝트를 완성하는 전체 과정을 배열하세요.', difficulty: 'hard', hints: ['기획->구현->테스트->배포'], estimatedMinutes: 12, blocks: ['요구사항 정리', 'AI에 구조 설계 요청', '기능별 코드 AI 생성', '직접 리뷰+수정', '테스트 코드 AI 생성+실행', 'README AI로 작성'], correctSequence: ['요구사항 정리', 'AI에 구조 설계 요청', '기능별 코드 AI 생성', '직접 리뷰+수정', '테스트 코드 AI 생성+실행', 'README AI로 작성'], feedback: { perfect: 'AI 프로젝트를 완벽히 이해했어요!', good: '훌륭한 워크플로우예요!', partial: '요구사항이 먼저예요.', wrong: '요구사항->설계->구현->리뷰->테스트->문서 순이에요.' } }
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
                    challenges: [
            { id: 'c1', title: 'AI 감정 분석기', description: '텍스트에서 긍정/부정을 분류하는 함수를 작성하세요. 긍정 키워드(좋아,행복,최고)면 "긍정", 부정 키워드(싫어,슬픔,나쁜)면 "부정", 없으면 "중립" 반환.', difficulty: 'easy', hints: ['includes()로 키워드를 찾아요', '긍정/부정 키워드 배열을 만들어요'], estimatedMinutes: 5, starterCode: '// 감정 분석 함수\nfunction analyzeSentiment(text) {\n  const positive = ["좋아", "행복", "최고"];\n  const negative = ["싫어", "슬픔", "나쁜"];\n  // 여기에 코드를 작성하세요\n}\nconsole.log(analyzeSentiment("오늘 정말 행복해"));\nconsole.log(analyzeSentiment("나쁜 하루"));\nconsole.log(analyzeSentiment("평범한 하루"));', solution: 'function analyzeSentiment(text) {\n  const positive = ["좋아", "행복", "최고"];\n  const negative = ["싫어", "슬픔", "나쁜"];\n  for (const w of positive) if (text.includes(w)) return "긍정";\n  for (const w of negative) if (text.includes(w)) return "부정";\n  return "중립";\n}', feedback: { perfect: '감정 분석기를 완벽하게 만들었어요!', good: '잘 작동해요!', partial: '키워드 매칭을 확인하세요.', wrong: 'includes()로 각 키워드가 포함되는지 확인하세요.' } },
            { id: 'c2', title: 'AI 영화 추천', description: '장르 선호도 점수 기반으로 가장 좋아할 영화를 추천하는 함수를 만드세요.', difficulty: 'easy', hints: ['각 영화의 장르 점수를 비교해요'], estimatedMinutes: 5, starterCode: '// 영화 추천\nconst movies = [\n  { title: "어벤져스", genre: "액션" },\n  { title: "토이스토리", genre: "애니" },\n  { title: "인터스텔라", genre: "SF" }\n];\nconst pref = { "액션": 3, "애니": 5, "SF": 4 };\n\nfunction recommend(movies, pref) {\n  // 가장 선호하는 장르의 영화 title 반환\n}\nconsole.log(recommend(movies, pref));', solution: 'function recommend(movies, pref) {\n  let best = movies[0];\n  let max = pref[movies[0].genre] || 0;\n  for (const m of movies) {\n    const s = pref[m.genre] || 0;\n    if (s > max) { max = s; best = m; }\n  }\n  return best.title;\n}', feedback: { perfect: '추천 시스템을 완벽하게 만들었어요!', good: '잘 작동하는 추천이에요!', partial: '점수 비교를 확인하세요.', wrong: '각 영화의 장르 점수를 비교해서 최고를 찾으세요.' } },
            { id: 'c3', title: 'AI 키워드 챗봇', description: '키워드 기반 챗봇을 만드세요. 인사/날씨/시간에 맞는 응답 반환.', difficulty: 'easy', hints: ['toLowerCase()+includes()로 키워드 찾기'], estimatedMinutes: 6, starterCode: '// 챗봇\nfunction chatbot(msg) {\n  const m = msg.toLowerCase();\n  // "안녕" -> "안녕하세요!"\n  // "날씨" -> "오늘 맑아요!"\n  // "시간" -> "현재 시간 알려드릴게요!"\n  // 그외 -> "다시 질문해주세요."\n}\nconsole.log(chatbot("안녕하세요"));\nconsole.log(chatbot("날씨 어때?"));', solution: 'function chatbot(msg) {\n  const m = msg.toLowerCase();\n  if (m.includes("안녕")) return "안녕하세요!";\n  if (m.includes("날씨")) return "오늘 맑아요!";\n  if (m.includes("시간")) return "현재 시간 알려드릴게요!";\n  return "다시 질문해주세요.";\n}', feedback: { perfect: '챗봇을 완벽하게 만들었어요!', good: '잘 작동하는 챗봇이에요!', partial: 'includes()로 키워드를 확인하세요.', wrong: 'if문으로 키워드를 확인하고 응답을 반환하세요.' } },
            { id: 'c4', title: '텍스트 요약기', description: '텍스트를 주어진 글자 수로 요약하세요. 단어 중간에 자르지 말고 "..." 붙이기.', difficulty: 'medium', hints: ['slice()로 자르고 lastIndexOf(" ")로 단어 경계를 찾으세요'], estimatedMinutes: 7, starterCode: '// 텍스트 요약\nfunction summarize(text, maxLen) {\n  if (text.length <= maxLen) return text;\n  // maxLen까지 자르되 단어 중간에 자르지 마세요\n  // "..." 붙이기\n}\nconst t = "인공지능은 컴퓨터가 사람처럼 생각하고 학습하는 기술입니다. 머신러닝이 대표적입니다.";\nconsole.log(summarize(t, 30));', solution: 'function summarize(text, maxLen) {\n  if (text.length <= maxLen) return text;\n  let t = text.slice(0, maxLen);\n  const sp = t.lastIndexOf(" ");\n  if (sp > 0) t = t.slice(0, sp);\n  return t + "...";\n}', feedback: { perfect: '텍스트 요약기를 완벽하게 만들었어요!', good: '잘 작동해요!', partial: '단어 경계를 처리하세요.', wrong: 'slice()로 자르고 lastIndexOf(" ")로 단어 경계를 찾으세요.' } },
            { id: 'c5', title: 'AI 가위바위보', description: '사용자 패턴을 분석해 점점 강해지는 AI 가위바위보를 만드세요.', difficulty: 'medium', hints: ['history에서 가장 많이 낸 것을 이기는 것을 내세요'], estimatedMinutes: 10, starterCode: '// AI 가위바위보\nconst history = [];\nconst beats = { "가위": "바위", "바위": "보", "보": "가위" };\n\nfunction aiChoice() {\n  if (history.length < 3) {\n    return ["가위","바위","보"][Math.floor(Math.random()*3)];\n  }\n  // 사용자가 가장 많이 낸 것을 이기는 것을 반환\n}\n\nfunction play(user) {\n  history.push(user);\n  const ai = aiChoice();\n  // 결과 반환\n}', solution: 'function aiChoice() {\n  if (history.length < 3) return ["가위","바위","보"][Math.floor(Math.random()*3)];\n  const c = {"가위":0,"바위":0,"보":0};\n  history.forEach(h => c[h]++);\n  const most = Object.entries(c).sort((a,b)=>b[1]-a[1])[0][0];\n  return beats[most];\n}\nfunction play(user) {\n  history.push(user);\n  const ai = aiChoice();\n  if (user===ai) return "무승부! AI:"+ai;\n  if (beats[user]===ai) return "AI승! AI:"+ai;\n  return "당신승! AI:"+ai;\n}', feedback: { perfect: '패턴 분석 AI를 완벽하게 만들었어요!', good: '잘 작동해요!', partial: '패턴 분석 부분을 확인하세요.', wrong: 'history에서 최빈값을 찾고 beats로 이기는 것을 내세요.' } },
            { id: 'c6', title: '단어 예측기', description: '이전 단어 기반 다음 단어를 예측하세요. 바이그램(2단어 연속) 빈도 기반.', difficulty: 'medium', hints: ['바이그램을 저장하고 가장 빈도 높은 다음 단어를 찾아요'], estimatedMinutes: 12, starterCode: '// 단어 예측기\nfunction buildModel(text) {\n  const words = text.split(" ");\n  const bi = {};\n  for (let i = 0; i < words.length-1; i++) {\n    // bi[words[i]] = {다음단어: 빈도}\n  }\n  return bi;\n}\nfunction predict(model, word) {\n  // model[word]에서 빈도 최고인 단어 반환\n}\nconst m = buildModel("나는 학생 나는 학생 나는 선생님");\nconsole.log(predict(m, "나는"));', solution: 'function buildModel(text) {\n  const words = text.split(" ");\n  const bi = {};\n  for (let i = 0; i < words.length-1; i++) {\n    if (!bi[words[i]]) bi[words[i]] = {};\n    bi[words[i]][words[i+1]] = (bi[words[i]][words[i+1]]||0)+1;\n  }\n  return bi;\n}\nfunction predict(model, word) {\n  if (!model[word]) return "?";\n  return Object.entries(model[word]).sort((a,b)=>b[1]-a[1])[0][0];\n}', feedback: { perfect: '단어 예측기를 완벽하게 만들었어요! NLP 기초예요.', good: '잘 작동해요!', partial: '바이그램 빈도 계산을 확인하세요.', wrong: '각 단어 쌍 빈도를 세고 최고를 반환하세요.' } },
            { id: 'c7', title: 'AI 이미지 필터', description: '픽셀 [R,G,B]를 조작하는 흑백/밝기/반전 필터를 구현하세요.', difficulty: 'hard', hints: ['흑백=(R+G+B)/3, 반전=255-값'], estimatedMinutes: 12, starterCode: '// 이미지 필터\nfunction grayscale(p) {\n  // [R,G,B] -> 흑백(평균값)\n}\nfunction brightness(p, amt) {\n  // 밝기 조절 (0~255 유지)\n}\nfunction invert(p) {\n  // 색상 반전\n}\nconsole.log(grayscale([100,150,200]));\nconsole.log(brightness([100,150,200], 50));\nconsole.log(invert([100,150,200]));', solution: 'function grayscale(p) {\n  const avg = Math.round((p[0]+p[1]+p[2])/3);\n  return [avg,avg,avg];\n}\nfunction brightness(p, amt) {\n  return p.map(v => Math.min(255, Math.max(0, v+amt)));\n}\nfunction invert(p) {\n  return p.map(v => 255-v);\n}', feedback: { perfect: '이미지 필터를 완벽하게 구현했어요!', good: '잘 작동해요!', partial: '0~255 범위를 유지하세요.', wrong: '흑백=(R+G+B)/3, 반전=255-값, 밝기=값+amt' } },
            { id: 'c8', title: 'AI 스팸 필터', description: '키워드 빈도+링크 수+대문자 비율로 스팸 점수를 계산하세요. 10점 이상이면 스팸.', difficulty: 'hard', hints: ['키워드x2점, 링크x3점, 대문자30%이상+5점'], estimatedMinutes: 15, starterCode: '// 스팸 필터\nconst spamWords = ["무료","당첨","할인","클릭","지금"];\nfunction spamScore(email) {\n  let score = 0;\n  // 1. 스팸키워드 x 2점\n  // 2. 링크(http) x 3점\n  // 3. 대문자비율 30%이상 +5점\n  return score;\n}\nfunction isSpam(email) { return spamScore(email) >= 10; }\nconsole.log(isSpam("무료 당첨! http://fake.com 클릭"));\nconsole.log(isSpam("안녕하세요, 회의 일정입니다"));', solution: 'function spamScore(email) {\n  let score = 0;\n  for (const kw of spamWords) if (email.includes(kw)) score += 2;\n  score += (email.match(/http/g)||[]).length * 3;\n  const upper = email.replace(/[^A-Z]/g,"").length;\n  const total = email.replace(/\\s/g,"").length;\n  if (total > 0 && upper/total > 0.3) score += 5;\n  return score;\n}', feedback: { perfect: '스팸 필터를 완벽하게 구현했어요!', good: '잘 작동해요!', partial: '세 가지 특징 점수를 모두 합산하세요.', wrong: '키워드x2 + 링크x3 + 대문자30%->+5 합산하세요.' } },
            { id: 'c9', title: '자동 태그 생성기', description: '텍스트에서 가장 자주 나오는 단어 상위 3개를 태그로 추출하세요. 불용어(은,는,이,가,을,를) 제외.', difficulty: 'hard', hints: ['불용어 제외 후 빈도를 세고 정렬하세요'], estimatedMinutes: 15, starterCode: '// 자동 태그\nconst stop = ["은","는","이","가","을","를","의","에"];\nfunction extractTags(text, n=3) {\n  // 1. 단어 분리\n  // 2. 불용어 제거\n  // 3. 빈도 계산\n  // 4. 상위 n개 반환\n}\nconst a = "인공지능은 미래 기술이다 인공지능은 머신러닝을 포함한다 머신러닝은 데이터로 학습하는 인공지능 방법이다";\nconsole.log(extractTags(a));', solution: 'function extractTags(text, n=3) {\n  const words = text.replace(/[.!?,]/g,"").split(/\\s+/);\n  const filtered = words.filter(w => w.length>1 && !stop.includes(w));\n  const freq = {};\n  filtered.forEach(w => freq[w]=(freq[w]||0)+1);\n  return Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,n).map(e=>e[0]);\n}', feedback: { perfect: '자동 태그를 완벽하게 만들었어요!', good: '잘 작동해요!', partial: '불용어 제거와 빈도 계산을 확인하세요.', wrong: '분리->불용어제거->빈도->정렬->상위N개' } },
            { id: 'c10', title: 'AI Q&A 시스템', description: '질문과 가장 유사한 FAQ를 찾아 답변 반환. 공통 키워드 수로 유사도 판단.', difficulty: 'hard', hints: ['질문 단어와 FAQ 단어의 공통 수를 세요'], estimatedMinutes: 18, starterCode: '// Q&A 시스템\nconst faq = [\n  { q: "비밀번호 변경", a: "설정>보안>비밀번호변경" },\n  { q: "회원 탈퇴", a: "설정>계정>탈퇴" },\n  { q: "결제 환불", a: "고객센터>환불신청" },\n  { q: "배송 조회", a: "주문내역>배송추적" }\n];\nfunction findAnswer(question) {\n  // 공통 키워드 가장 많은 FAQ 답변 반환\n}\nconsole.log(findAnswer("비밀번호 바꾸고 싶어요"));\nconsole.log(findAnswer("환불하고 싶습니다"));', solution: 'function findAnswer(question) {\n  const qw = question.split(/\\s+/);\n  let best = faq[0], max = 0;\n  for (const item of faq) {\n    const fw = item.q.split(/\\s+/);\n    let common = 0;\n    for (const q of qw) for (const f of fw) if (q.includes(f)||f.includes(q)) common++;\n    if (common > max) { max = common; best = item; }\n  }\n  return best.a;\n}', feedback: { perfect: 'Q&A 시스템을 완벽하게 만들었어요! 실제 챗봇 기본 원리예요.', good: '잘 작동해요!', partial: '키워드 유사도 비교를 확인하세요.', wrong: '질문 단어와 FAQ 단어를 비교해서 공통 수가 가장 많은 것을 찾으세요.' } }
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
                    challenges: [
            { id: 'c1', title: 'AI 핵심 용어', description: 'AI 용어를 정의와 올바르게 연결하세요.', difficulty: 'easy', hints: ['AI>ML>DL 포함 관계예요'], estimatedMinutes: 3, blocks: ['AI=컴퓨터가 학습하는 기술', 'ML=데이터로 패턴 학습', 'DL=인공신경망 학습', 'NLP=자연어 이해/생성'], correctSequence: ['AI=컴퓨터가 학습하는 기술', 'ML=데이터로 패턴 학습', 'DL=인공신경망 학습', 'NLP=자연어 이해/생성'], feedback: { perfect: 'AI 핵심 용어를 완벽히 이해했어요!', good: '대부분 맞았어요!', partial: '정의를 다시 확인하세요.', wrong: 'AI>ML>DL 포함 관계를 기억하세요.' } },
            { id: 'c2', title: 'AI 활용 분야', description: 'AI 기술과 활용 분야를 연결하세요.', difficulty: 'easy', hints: ['각 AI가 다루는 데이터를 생각하세요'], estimatedMinutes: 3, blocks: ['이미지인식->자율주행', '음성인식->스마트스피커', '자연어처리->챗봇', '추천시스템->넷플릭스'], correctSequence: ['이미지인식->자율주행', '음성인식->스마트스피커', '자연어처리->챗봇', '추천시스템->넷플릭스'], feedback: { perfect: 'AI 활용을 정확히 연결했어요!', good: '대부분 맞았어요!', partial: '데이터 종류를 생각하세요.', wrong: '이미지=사진, 음성=소리, 자연어=글' } },
            { id: 'c3', title: 'AI 윤리', description: 'AI 윤리 원칙을 중요도 순서대로 배열하세요.', difficulty: 'easy', hints: ['안전이 최우선이에요'], estimatedMinutes: 3, blocks: ['안전성', '공정성', '투명성', '개인정보보호', '책임성'], correctSequence: ['안전성', '공정성', '투명성', '개인정보보호', '책임성'], feedback: { perfect: '윤리를 완벽히 이해했어요!', good: '좋아요!', partial: '안전이 가장 중요해요.', wrong: '안전>공정>투명>보호>책임 순이에요.' } },
            { id: 'c4', title: '프롬프트 구성', description: '좋은 프롬프트 구성요소를 순서대로 배열하세요.', difficulty: 'medium', hints: ['역할->맥락->지시->형식 순이에요'], estimatedMinutes: 5, blocks: ['역할 지정', '맥락 제공', '구체적 지시', '출력 형식', '제약 조건'], correctSequence: ['역할 지정', '맥락 제공', '구체적 지시', '출력 형식', '제약 조건'], feedback: { perfect: '프롬프트 구성을 완벽히 이해했어요!', good: '좋아요!', partial: '역할이 먼저예요.', wrong: '역할->맥락->지시->형식->제약 순이에요.' } },
            { id: 'c5', title: 'ML 프로젝트', description: 'ML 프로젝트 흐름을 순서대로 배열하세요.', difficulty: 'medium', hints: ['문제 정의부터 시작해요'], estimatedMinutes: 5, blocks: ['문제 정의', '데이터 수집', '전처리', '모델 학습', '평가', '배포'], correctSequence: ['문제 정의', '데이터 수집', '전처리', '모델 학습', '평가', '배포'], feedback: { perfect: 'ML 프로젝트를 완벽히 알아요!', good: '좋아요!', partial: '문제 정의가 먼저예요.', wrong: '문제->데이터->전처리->학습->평가->배포 순이에요.' } },
            { id: 'c6', title: 'AI 한계', description: 'AI가 잘 못하는 것을 어려운 순서대로 배열하세요.', difficulty: 'medium', hints: ['도덕적 판단이 가장 어려워요'], estimatedMinutes: 6, blocks: ['도덕적 판단(가장 어려움)', '상식적 추론', '감정 이해', '창의적 사고', '최신 정보 파악'], correctSequence: ['도덕적 판단(가장 어려움)', '상식적 추론', '감정 이해', '창의적 사고', '최신 정보 파악'], feedback: { perfect: 'AI 한계를 정확히 인식했어요!', good: '좋은 분석이에요!', partial: '도덕적 판단이 가장 어려워요.', wrong: '도덕>상식>감정>창의>최신정보 순이에요.' } },
            { id: 'c7', title: 'AI 역사', description: 'AI 주요 사건을 시간 순서대로 배열하세요.', difficulty: 'hard', hints: ['오래된 것부터 최신 순이에요'], estimatedMinutes: 7, blocks: ['튜링 테스트(1950)', '전문가 시스템(1970s)', '딥블루 체스 승리(1997)', '알파고 바둑 승리(2016)', 'ChatGPT 출시(2022)'], correctSequence: ['튜링 테스트(1950)', '전문가 시스템(1970s)', '딥블루 체스 승리(1997)', '알파고 바둑 승리(2016)', 'ChatGPT 출시(2022)'], feedback: { perfect: 'AI 역사를 완벽히 알아요!', good: '대부분 맞았어요!', partial: '연도를 확인하세요.', wrong: '1950->1970s->1997->2016->2022 순이에요.' } },
            { id: 'c8', title: 'AI 직군', description: 'AI 프로젝트 팀 직군을 업무 순서대로 배열하세요.', difficulty: 'hard', hints: ['데이터부터 시작해요'], estimatedMinutes: 8, blocks: ['데이터 엔지니어', '데이터 사이언티스트', 'ML 엔지니어', 'QA 엔지니어', 'MLOps 엔지니어'], correctSequence: ['데이터 엔지니어', '데이터 사이언티스트', 'ML 엔지니어', 'QA 엔지니어', 'MLOps 엔지니어'], feedback: { perfect: 'AI 팀을 완벽히 이해했어요!', good: '좋아요!', partial: '데이터 준비가 먼저예요.', wrong: '데이터준비->분석->개발->테스트->배포 순이에요.' } },
            { id: 'c9', title: 'AI 기술 종합', description: '이번 주 AI 기술을 발전 순서대로 배열하세요.', difficulty: 'hard', hints: ['기초->응용->고급 순이에요'], estimatedMinutes: 10, blocks: ['AI 기초 개념', 'ML/DL 종류', '이미지 분류 체험', '프롬프트 엔지니어링', 'AI 코드 생성'], correctSequence: ['AI 기초 개념', 'ML/DL 종류', '이미지 분류 체험', '프롬프트 엔지니어링', 'AI 코드 생성'], feedback: { perfect: '기술 학습 흐름을 완벽히 이해했어요!', good: '좋아요!', partial: '기초가 먼저예요.', wrong: '기초->종류->체험->프롬프트->코드 순이에요.' } },
            { id: 'c10', title: 'AI 미래', description: 'AI 기술 발전을 가까운 것부터 먼 미래 순으로 배열하세요.', difficulty: 'hard', hints: ['현재 가능한 것부터 배열하세요'], estimatedMinutes: 10, blocks: ['AI 코딩 도우미(현재)', 'AI 맞춤 교육(곧)', 'AI 의료 진단(5년)', 'AI 완전자율주행(10년)', '범용AGI(먼 미래)'], correctSequence: ['AI 코딩 도우미(현재)', 'AI 맞춤 교육(곧)', 'AI 의료 진단(5년)', 'AI 완전자율주행(10년)', '범용AGI(먼 미래)'], feedback: { perfect: 'AI 미래를 정확히 예측했어요!', good: '좋은 전망이에요!', partial: '현재 가능한 것부터 배열하세요.', wrong: '현재->곧->5년->10년->먼미래 순이에요.' } }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '제너러티브 아트 핵심 이해',
                                        description: '제너러티브 아트의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['제너러티브 아트의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '제너러티브 아트 개념을 완벽하게 이해했어요!',
                                          good: '제너러티브 아트의 핵심을 잘 파악했어요!',
                                          partial: '제너러티브 아트의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '제너러티브 아트의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '제너러티브 아트 예제 분석',
                                        description: '제너러티브 아트 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '제너러티브 아트 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '제너러티브 아트 코드 수정',
                                        description: '주어진 코드에서 제너러티브 아트 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '제너러티브 아트의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '제너러티브 아트 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '제너러티브 아트 직접 구현',
                                        description: '제너러티브 아트을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '제너러티브 아트의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '제너러티브 아트 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '제너러티브 아트 심화 도전',
                                        description: '제너러티브 아트을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '제너러티브 아트을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '제너러티브 아트 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "랜덤 패턴의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 랜덤 패턴 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "애니메이션의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 애니메이션 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "파티클의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 파티클 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "인터랙티브의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 인터랙티브 기본 연습\n",
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '오디오 비주얼 핵심 이해',
                                        description: '오디오 비주얼의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['오디오 비주얼의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '오디오 비주얼 개념을 완벽하게 이해했어요!',
                                          good: '오디오 비주얼의 핵심을 잘 파악했어요!',
                                          partial: '오디오 비주얼의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '오디오 비주얼의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '오디오 비주얼 예제 분석',
                                        description: '오디오 비주얼 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '오디오 비주얼 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '오디오 비주얼 코드 수정',
                                        description: '주어진 코드에서 오디오 비주얼 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '오디오 비주얼의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '오디오 비주얼 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '오디오 비주얼 직접 구현',
                                        description: '오디오 비주얼을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '오디오 비주얼의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '오디오 비주얼 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '오디오 비주얼 심화 도전',
                                        description: '오디오 비주얼을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '오디오 비주얼을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '오디오 비주얼 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "프랙탈의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 프랙탈 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "스크린세이버의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 스크린세이버 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "종합 작품의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 종합 작품 기본 연습\n",
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '게임 루프 핵심 이해',
                                        description: '게임 루프의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['게임 루프의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '게임 루프 개념을 완벽하게 이해했어요!',
                                          good: '게임 루프의 핵심을 잘 파악했어요!',
                                          partial: '게임 루프의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '게임 루프의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '게임 루프 예제 분석',
                                        description: '게임 루프 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '게임 루프 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '게임 루프 코드 수정',
                                        description: '주어진 코드에서 게임 루프 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '게임 루프의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '게임 루프 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '게임 루프 직접 구현',
                                        description: '게임 루프을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '게임 루프의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '게임 루프 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '게임 루프 심화 도전',
                                        description: '게임 루프을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '게임 루프을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '게임 루프 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "키보드 입력의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 키보드 입력 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "충돌 감지의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 충돌 감지 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "점수 관리의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 점수 관리 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "적 생성의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 적 생성 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "게임 상태의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 게임 상태 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "오디오의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 오디오 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "레벨의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 레벨 기본 연습\n",
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
                    challenges: [
                    {
                              "id": "c1",
                              "title": "기본 실습",
                              "description": "게임 완성의 기본 문법을 연습합니다.",
                              "difficulty": "easy",
                              "hints": [
                                        "제시된 예제를 따라하세요",
                                        "문법을 정확히 지키세요"
                              ],
                              "estimatedMinutes": 3,
                              "starterCode": "# 게임 완성 기본 연습\n",
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: 'VR/AR 핵심 이해',
                                        description: 'VR/AR의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['VR/AR의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: 'VR/AR 개념을 완벽하게 이해했어요!',
                                          good: 'VR/AR의 핵심을 잘 파악했어요!',
                                          partial: 'VR/AR의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: 'VR/AR의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: 'VR/AR 예제 분석',
                                        description: 'VR/AR 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', 'VR/AR 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: 'VR/AR 코드 수정',
                                        description: '주어진 코드에서 VR/AR 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', 'VR/AR의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: 'VR/AR 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: 'VR/AR 직접 구현',
                                        description: 'VR/AR을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', 'VR/AR의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: 'VR/AR 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: 'VR/AR 심화 도전',
                                        description: 'VR/AR을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', 'VR/AR을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: 'VR/AR 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '블록체인 핵심 이해',
                                        description: '블록체인의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['블록체인의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '블록체인 개념을 완벽하게 이해했어요!',
                                          good: '블록체인의 핵심을 잘 파악했어요!',
                                          partial: '블록체인의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '블록체인의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '블록체인 예제 분석',
                                        description: '블록체인 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '블록체인 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '블록체인 코드 수정',
                                        description: '주어진 코드에서 블록체인 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '블록체인의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '블록체인 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '블록체인 직접 구현',
                                        description: '블록체인을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '블록체인의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '블록체인 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '블록체인 심화 도전',
                                        description: '블록체인을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '블록체인을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '블록체인 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: 'IoT 핵심 이해',
                                        description: 'IoT의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['IoT의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: 'IoT 개념을 완벽하게 이해했어요!',
                                          good: 'IoT의 핵심을 잘 파악했어요!',
                                          partial: 'IoT의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: 'IoT의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: 'IoT 예제 분석',
                                        description: 'IoT 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', 'IoT 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: 'IoT 코드 수정',
                                        description: '주어진 코드에서 IoT 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', 'IoT의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: 'IoT 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: 'IoT 직접 구현',
                                        description: 'IoT을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', 'IoT의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: 'IoT 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: 'IoT 심화 도전',
                                        description: 'IoT을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', 'IoT을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: 'IoT 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '로봇 공학 핵심 이해',
                                        description: '로봇 공학의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['로봇 공학의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '로봇 공학 개념을 완벽하게 이해했어요!',
                                          good: '로봇 공학의 핵심을 잘 파악했어요!',
                                          partial: '로봇 공학의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '로봇 공학의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '로봇 공학 예제 분석',
                                        description: '로봇 공학 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '로봇 공학 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '로봇 공학 코드 수정',
                                        description: '주어진 코드에서 로봇 공학 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '로봇 공학의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '로봇 공학 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '로봇 공학 직접 구현',
                                        description: '로봇 공학을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '로봇 공학의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '로봇 공학 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '로봇 공학 심화 도전',
                                        description: '로봇 공학을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '로봇 공학을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '로봇 공학 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '개발자 진로 핵심 이해',
                                        description: '개발자 진로의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['개발자 진로의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '개발자 진로 개념을 완벽하게 이해했어요!',
                                          good: '개발자 진로의 핵심을 잘 파악했어요!',
                                          partial: '개발자 진로의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '개발자 진로의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '개발자 진로 예제 분석',
                                        description: '개발자 진로 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '개발자 진로 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '개발자 진로 코드 수정',
                                        description: '주어진 코드에서 개발자 진로 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '개발자 진로의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '개발자 진로 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '개발자 진로 직접 구현',
                                        description: '개발자 진로을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '개발자 진로의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '개발자 진로 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '개발자 진로 심화 도전',
                                        description: '개발자 진로을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '개발자 진로을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '개발자 진로 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '소프트 스킬 핵심 이해',
                                        description: '소프트 스킬의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['소프트 스킬의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '소프트 스킬 개념을 완벽하게 이해했어요!',
                                          good: '소프트 스킬의 핵심을 잘 파악했어요!',
                                          partial: '소프트 스킬의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '소프트 스킬의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '소프트 스킬 예제 분석',
                                        description: '소프트 스킬 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '소프트 스킬 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '소프트 스킬 코드 수정',
                                        description: '주어진 코드에서 소프트 스킬 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '소프트 스킬의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '소프트 스킬 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '소프트 스킬 직접 구현',
                                        description: '소프트 스킬을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '소프트 스킬의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '소프트 스킬 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '소프트 스킬 심화 도전',
                                        description: '소프트 스킬을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '소프트 스킬을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '소프트 스킬 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '오픈소스 핵심 이해',
                                        description: '오픈소스의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['오픈소스의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '오픈소스 개념을 완벽하게 이해했어요!',
                                          good: '오픈소스의 핵심을 잘 파악했어요!',
                                          partial: '오픈소스의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '오픈소스의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '오픈소스 예제 분석',
                                        description: '오픈소스 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '오픈소스 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '오픈소스 코드 수정',
                                        description: '주어진 코드에서 오픈소스 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '오픈소스의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '오픈소스 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '오픈소스 직접 구현',
                                        description: '오픈소스을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '오픈소스의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '오픈소스 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '오픈소스 심화 도전',
                                        description: '오픈소스을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '오픈소스을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '오픈소스 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '포트폴리오 핵심 이해',
                                        description: '포트폴리오의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['포트폴리오의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '포트폴리오 개념을 완벽하게 이해했어요!',
                                          good: '포트폴리오의 핵심을 잘 파악했어요!',
                                          partial: '포트폴리오의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '포트폴리오의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '포트폴리오 예제 분석',
                                        description: '포트폴리오 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '포트폴리오 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '포트폴리오 코드 수정',
                                        description: '주어진 코드에서 포트폴리오 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '포트폴리오의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '포트폴리오 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '포트폴리오 직접 구현',
                                        description: '포트폴리오을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '포트폴리오의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '포트폴리오 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '포트폴리오 심화 도전',
                                        description: '포트폴리오을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '포트폴리오을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '포트폴리오 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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
                    challenges: [
                              {
                                        id: 'c1',
                                        title: '학습 계획 핵심 이해',
                                        description: '학습 계획의 핵심 개념과 원리를 확인합니다.',
                                        difficulty: 'easy',
                                        hints: ['학습 계획의 정의를 떠올려보세요', '핵심 키워드에 집중하세요'],
                                        estimatedMinutes: 3,
                                        feedback: {
                                          perfect: '학습 계획 개념을 완벽하게 이해했어요!',
                                          good: '학습 계획의 핵심을 잘 파악했어요!',
                                          partial: '학습 계획의 일부만 이해했어요. 핵심을 다시 확인하세요.',
                                          wrong: '학습 계획의 기본 개념부터 다시 학습해보세요.'
                                        }
                              },
                              {
                                        id: 'c2',
                                        title: '학습 계획 예제 분석',
                                        description: '학습 계획 관련 예제를 분석하고 동작 원리를 파악합니다.',
                                        difficulty: 'easy',
                                        hints: ['예제를 한 줄씩 읽어보세요', '학습 계획 관련 문법을 확인하세요'],
                                        estimatedMinutes: 5,
                                        feedback: {
                                          perfect: '예제 분석을 완벽하게 했어요!',
                                          good: '대부분 잘 분석했어요!',
                                          partial: '기본은 파악했어요. 세부 동작을 더 확인하세요.',
                                          wrong: '예제를 천천히 한 줄씩 따라해보세요.'
                                        }
                              },
                              {
                                        id: 'c3',
                                        title: '학습 계획 코드 수정',
                                        description: '주어진 코드에서 학습 계획 관련 부분을 수정합니다.',
                                        difficulty: 'medium',
                                        hints: ['기존 코드의 문제점을 찾아보세요', '학습 계획의 올바른 사용법을 적용하세요'],
                                        estimatedMinutes: 7,
                                        feedback: {
                                          perfect: '코드 수정을 완벽하게 했어요!',
                                          good: '수정 방향이 정확해요!',
                                          partial: '일부만 수정했어요. 나머지도 확인하세요.',
                                          wrong: '학습 계획 문법을 다시 확인한 후 수정하세요.'
                                        }
                              },
                              {
                                        id: 'c4',
                                        title: '학습 계획 직접 구현',
                                        description: '학습 계획을 활용한 코드를 직접 작성합니다.',
                                        difficulty: 'medium',
                                        hints: ['요구사항을 먼저 파악하세요', '학습 계획의 핵심 패턴을 사용하세요', '단계별로 구현하세요'],
                                        estimatedMinutes: 10,
                                        feedback: {
                                          perfect: '직접 구현을 완벽하게 해냈어요!',
                                          good: '핵심 기능을 잘 구현했어요!',
                                          partial: '기본 구조는 맞아요. 세부 기능을 보완하세요.',
                                          wrong: '학습 계획 기본 문법부터 복습한 후 시도하세요.'
                                        }
                              },
                              {
                                        id: 'c5',
                                        title: '학습 계획 심화 도전',
                                        description: '학습 계획을 창의적으로 활용하는 심화 문제입니다.',
                                        difficulty: 'hard',
                                        hints: ['여러 개념을 조합해보세요', '학습 계획을 실생활에 적용해보세요', '정답은 여러 가지일 수 있어요'],
                                        estimatedMinutes: 15,
                                        feedback: {
                                          perfect: '학습 계획 마스터! 심화 문제까지 완벽해요!',
                                          good: '창의적인 접근이에요!',
                                          partial: '좋은 시도예요. 더 발전시켜보세요.',
                                          wrong: '기본 문제를 충분히 연습한 후 다시 도전하세요.'
                                        }
                              }
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

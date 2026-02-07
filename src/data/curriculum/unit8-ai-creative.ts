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
              title: '스마트폰 AI 기능 발전 순서',
              description: '스마트폰 AI 기능이 처음 상용화된 시간 순서대로 배열하세요 (가장 오래된 것부터).',
              difficulty: 'easy',
              hints: ['맞춤법 교정은 1990년대부터 있었어요', 'Siri는 2011년, Face ID는 2017년에 나왔어요'],
              estimatedMinutes: 4,
              blocks: ['맞춤법 자동 교정 (1990년대)', '음성 비서 - Siri (2011년)', '사진 AI 보정 (2014년)', '얼굴 인식 잠금해제 (2017년)', 'AI 맞춤 앱 추천 (2018년)'],
              correctSequence: ['맞춤법 자동 교정 (1990년대)', '음성 비서 - Siri (2011년)', '사진 AI 보정 (2014년)', '얼굴 인식 잠금해제 (2017년)', 'AI 맞춤 앱 추천 (2018년)'],
              feedback: { perfect: '스마트폰 AI의 발전 역사를 완벽히 알고 있어요!', good: '좋아요! AI 기능이 점점 발전해왔다는 걸 잘 이해했어요!', partial: '연도 힌트를 참고해서 다시 배열해보세요.', wrong: '각 블록의 연도를 보고 오래된 순서대로 배열하세요.' }
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
              title: 'AI 데이터 파이프라인 설계',
              description: '"고양이 vs 강아지" 분류 AI를 만드는 데이터 준비 과정을 올바른 순서로 배열하세요.',
              difficulty: 'medium',
              hints: ['데이터를 먼저 모아야 정리할 수 있어요', '라벨을 붙여야 AI가 학습할 수 있어요'],
              estimatedMinutes: 7,
              blocks: ['사진 데이터 수집하기', '불량 사진 제거 (흐릿한 사진 등)', '고양이/강아지 라벨 붙이기', '고양이·강아지 수량 균형 맞추기', '학습용/테스트용 데이터 나누기'],
              correctSequence: ['사진 데이터 수집하기', '불량 사진 제거 (흐릿한 사진 등)', '고양이/강아지 라벨 붙이기', '고양이·강아지 수량 균형 맞추기', '학습용/테스트용 데이터 나누기'],
              feedback: { perfect: '완벽한 데이터 파이프라인이에요! AI 엔지니어 자질이 있어요!', good: '좋은 설계예요! 데이터 준비 과정을 잘 이해했어요.', partial: '데이터 수집 → 정제 → 라벨링 → 균형 → 분할 순서를 기억하세요.', wrong: '데이터를 먼저 모으고, 정리하고, 라벨을 붙이고, 균형을 맞추고, 나누는 순서예요.' }
            },
            {
              id: 'c7',
              title: '자율주행 AI 판단 과정',
              description: '자율주행 AI가 도로에서 장애물을 발견했을 때의 처리 과정을 올바른 순서로 배열하세요.',
              difficulty: 'hard',
              hints: ['먼저 주변을 감지해야 판단할 수 있어요', '판단 후에 행동(조작)을 해요'],
              estimatedMinutes: 8,
              blocks: ['센서로 주변 환경 감지', '물체 인식 (차, 사람, 신호등)', '위험도 판단 및 우선순위 결정', '안전한 주행 경로 계산', '핸들/브레이크 조작 실행'],
              correctSequence: ['센서로 주변 환경 감지', '물체 인식 (차, 사람, 신호등)', '위험도 판단 및 우선순위 결정', '안전한 주행 경로 계산', '핸들/브레이크 조작 실행'],
              feedback: { perfect: '자율주행 AI의 판단 과정을 완벽히 이해했어요!', good: '좋은 분석이에요! 감지 → 인식 → 판단 → 계획 → 실행 순서를 잘 알고 있어요.', partial: '감지가 먼저이고, 실행이 마지막이에요. 중간 순서를 다시 생각해보세요.', wrong: '센서 감지 → 물체 인식 → 위험 판단 → 경로 계산 → 조작 실행 순서예요.' }
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
              title: '캔버스에 랜덤 원 그리기',
              description: 'Math.random()을 사용해 캔버스에 랜덤 위치, 크기, 색상의 원을 그리는 함수를 완성하세요.',
              difficulty: 'easy',
              hints: ['Math.random()은 0~1 사이 값을 반환해요', 'arc(x, y, r, 0, Math.PI*2)로 원을 그려요', 'fillStyle로 색상을 지정해요'],
              estimatedMinutes: 5,
              starterCode: 'function drawRandomCircle(ctx, width, height) {\n' +
                '  // TODO: 랜덤 x, y, 반지름, 색상으로 원 그리기\n' +
                '  var x = ___; // 0 ~ width 랜덤\n' +
                '  var y = ___; // 0 ~ height 랜덤\n' +
                '  var r = ___; // 5 ~ 50 랜덤\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "rgba(" + Math.floor(Math.random()*256) + ",0,200,0.5)";\n' +
                '  ctx.fill();\n' +
                '}',
              solution: 'function drawRandomCircle(ctx, width, height) {\n' +
                '  var x = Math.random() * width;\n' +
                '  var y = Math.random() * height;\n' +
                '  var r = Math.random() * 45 + 5;\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "rgba(" + Math.floor(Math.random()*256) + ",0,200,0.5)";\n' +
                '  ctx.fill();\n' +
                '}',
              feedback: {
                perfect: '랜덤 좌표와 크기를 완벽하게 구현했어요! 제너러티브 아트의 기초를 잘 이해했어요.',
                good: '대부분 맞았어요! Math.random() 범위 조절을 다시 확인해보세요.',
                partial: '랜덤 값 생성은 했지만 범위가 올바르지 않아요.',
                wrong: 'Math.random() * 범위값 패턴을 사용해서 랜덤 좌표를 만들어보세요.'
              }
            },
            {
              id: 'c2',
              title: '반복문으로 패턴 생성',
              description: 'for 반복문을 사용해 100개의 랜덤 원을 캔버스에 그리는 코드를 작성하세요.',
              difficulty: 'easy',
              hints: ['for문으로 100번 반복하세요', '매 반복마다 drawRandomCircle을 호출하세요', '캔버스 크기는 400x400이에요'],
              estimatedMinutes: 5,
              starterCode: '// drawRandomCircle(ctx, w, h) 함수가 이미 있다고 가정\n' +
                'function generateArt(ctx) {\n' +
                '  var w = 400;\n' +
                '  var h = 400;\n' +
                '  // TODO: 100개의 랜덤 원 그리기\n' +
                '}',
              solution: 'function generateArt(ctx) {\n' +
                '  var w = 400;\n' +
                '  var h = 400;\n' +
                '  for (var i = 0; i < 100; i++) {\n' +
                '    drawRandomCircle(ctx, w, h);\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '반복문으로 대량 패턴 생성을 완벽히 구현했어요!',
                good: '잘했어요! 반복 횟수나 함수 호출을 다시 확인해보세요.',
                partial: '반복문은 있지만 함수 호출이 빠졌어요.',
                wrong: 'for (var i = 0; i < 100; i++) 패턴으로 반복하세요.'
              }
            },
            {
              id: 'c3',
              title: '색상 그라데이션 패턴',
              description: 'HSL 색상을 활용해 위치에 따라 색이 변하는 그라데이션 원 패턴을 만드세요.',
              difficulty: 'medium',
              hints: ['hsl(hue, 70%, 50%) 형식을 사용하세요', 'hue는 0~360 범위에요', 'x 좌표에 비례해서 hue를 계산하세요'],
              estimatedMinutes: 8,
              starterCode: 'function gradientPattern(ctx) {\n' +
                '  var w = 400;\n' +
                '  for (var i = 0; i < 200; i++) {\n' +
                '    var x = Math.random() * w;\n' +
                '    var y = Math.random() * w;\n' +
                '    var r = Math.random() * 20 + 5;\n' +
                '    // TODO: x 위치에 따라 hue 계산 (0~360)\n' +
                '    var hue = ___;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = "hsl(" + hue + ", 70%, 50%)";\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              solution: 'function gradientPattern(ctx) {\n' +
                '  var w = 400;\n' +
                '  for (var i = 0; i < 200; i++) {\n' +
                '    var x = Math.random() * w;\n' +
                '    var y = Math.random() * w;\n' +
                '    var r = Math.random() * 20 + 5;\n' +
                '    var hue = (x / w) * 360;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = "hsl(" + hue + ", 70%, 50%)";\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: 'HSL 그라데이션을 완벽하게 구현했어요! 아름다운 패턴이에요!',
                good: '좋아요! hue 계산 비율을 미세 조정하면 더 좋겠어요.',
                partial: 'HSL 형식은 이해했지만 위치 비례 계산이 필요해요.',
                wrong: 'x좌표를 캔버스 너비로 나누고 360을 곱하면 hue가 돼요.'
              }
            },
            {
              id: 'c4',
              title: '대칭 패턴 생성기',
              description: '좌우 대칭인 제너러티브 아트 패턴을 만드세요. 왼쪽에 그린 것을 오른쪽에도 미러링하세요.',
              difficulty: 'medium',
              hints: ['왼쪽 x좌표의 미러는 width - x 에요', '같은 y, r, color로 두 번 그리세요', '캔버스 중심은 width/2에요'],
              estimatedMinutes: 10,
              starterCode: 'function symmetricArt(ctx) {\n' +
                '  var w = 400;\n' +
                '  for (var i = 0; i < 80; i++) {\n' +
                '    var x = Math.random() * (w / 2);\n' +
                '    var y = Math.random() * w;\n' +
                '    var r = Math.random() * 15 + 3;\n' +
                '    var color = "hsl(" + Math.floor(Math.random()*360) + ",60%,50%)";\n' +
                '    // TODO: 왼쪽에 원 그리기\n' +
                '    // TODO: 오른쪽에 대칭 원 그리기 (미러 x)\n' +
                '  }\n' +
                '}',
              solution: 'function symmetricArt(ctx) {\n' +
                '  var w = 400;\n' +
                '  for (var i = 0; i < 80; i++) {\n' +
                '    var x = Math.random() * (w / 2);\n' +
                '    var y = Math.random() * w;\n' +
                '    var r = Math.random() * 15 + 3;\n' +
                '    var color = "hsl(" + Math.floor(Math.random()*360) + ",60%,50%)";\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = color;\n' +
                '    ctx.fill();\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(w - x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '좌우 대칭 패턴을 완벽하게 구현했어요! 만다라 패턴의 기초예요!',
                good: '대칭 개념을 잘 이해했어요! 미러 좌표 계산을 확인해보세요.',
                partial: '한쪽은 그렸지만 미러링이 정확하지 않아요.',
                wrong: '왼쪽 x의 대칭 좌표는 w - x 에요. 같은 y, r, color를 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '재생성 가능한 아트 시스템',
              description: '시드(seed) 기반으로 동일한 패턴을 재생성할 수 있는 제너러티브 아트 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['간단한 난수 생성기를 만드세요', 'seed 값으로 항상 같은 순서의 숫자가 나와야 해요', 'mulberry32 같은 간단한 알고리즘을 사용하세요'],
              estimatedMinutes: 15,
              starterCode: '// 시드 기반 난수 생성기\n' +
                'function seededRandom(seed) {\n' +
                '  // TODO: seed를 받아 0~1 사이 값을 반환하는 함수 반환\n' +
                '  // 호출할 때마다 다른 값이지만 같은 seed면 같은 순서\n' +
                '}\n' +
                '\n' +
                'function generateSeededArt(ctx, seed) {\n' +
                '  var rng = seededRandom(seed);\n' +
                '  for (var i = 0; i < 50; i++) {\n' +
                '    var x = rng() * 400;\n' +
                '    var y = rng() * 400;\n' +
                '    var r = rng() * 30 + 5;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = "hsl(" + Math.floor(rng()*360) + ",70%,50%)";\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              solution: 'function seededRandom(seed) {\n' +
                '  var s = seed;\n' +
                '  return function() {\n' +
                '    s = (s * 9301 + 49297) % 233280;\n' +
                '    return s / 233280;\n' +
                '  };\n' +
                '}\n' +
                '\n' +
                'function generateSeededArt(ctx, seed) {\n' +
                '  var rng = seededRandom(seed);\n' +
                '  for (var i = 0; i < 50; i++) {\n' +
                '    var x = rng() * 400;\n' +
                '    var y = rng() * 400;\n' +
                '    var r = rng() * 30 + 5;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = "hsl(" + Math.floor(rng()*360) + ",70%,50%)";\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '시드 기반 난수 생성기를 완벽히 구현했어요! 같은 seed로 동일한 작품을 재현할 수 있어요!',
                good: '좋은 접근이에요! 난수 생성 알고리즘의 분포를 확인해보세요.',
                partial: '함수 구조는 맞지만 난수 생성 로직이 불완전해요.',
                wrong: '클로저를 사용해 seed 상태를 유지하는 함수를 반환하세요.'
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
              id: 'c1',
              title: '캔버스에 랜덤 점 찍기',
              description: 'Math.random()을 사용해 캔버스에 100개의 랜덤 위치에 점을 찍는 코드를 완성하세요.',
              difficulty: 'easy',
              hints: ['Math.random() * canvas.width로 x좌표를', 'fillRect(x, y, 2, 2)로 작은 점을 그려요'],
              estimatedMinutes: 3,
              starterCode: '// 캔버스에 100개 랜덤 점 찍기\n' +
                'for (var i = 0; i < 100; i++) {\n' +
                '  var x = ___; // 0 ~ 400 랜덤\n' +
                '  var y = ___; // 0 ~ 400 랜덤\n' +
                '  ctx.fillRect(x, y, 2, 2);\n' +
                '}',
              solution: 'for (var i = 0; i < 100; i++) {\n' +
                '  var x = Math.random() * 400;\n' +
                '  var y = Math.random() * 400;\n' +
                '  ctx.fillRect(x, y, 2, 2);\n' +
                '}',
              feedback: { perfect: '랜덤 점 찍기를 완벽하게 구현했어요!', good: '좋아요! 좌표 범위를 확인해보세요.', partial: '점은 찍히지만 범위가 정확하지 않아요.', wrong: 'Math.random() * 400 으로 0~400 범위의 좌표를 만드세요.' }
            },
            {
              id: 'c2',
              title: '랜덤 색상 원 그리기',
              description: '랜덤 RGB 색상으로 원을 그리는 코드의 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['Math.floor로 정수로 변환하세요', 'RGB 각 값은 0~255 범위'],
              estimatedMinutes: 4,
              starterCode: '// 버그를 수정하세요\n' +
                'var r = Math.random() * 256; // 문제: 정수가 아님\n' +
                'var g = Math.random() * 256;\n' +
                'var b = Math.random() * 256;\n' +
                'ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";\n' +
                'ctx.beginPath();\n' +
                'ctx.arc(200, 200, 50, 0, Math.PI * 2);\n' +
                'ctx.fill();',
              solution: 'var r = Math.floor(Math.random() * 256);\n' +
                'var g = Math.floor(Math.random() * 256);\n' +
                'var b = Math.floor(Math.random() * 256);\n' +
                'ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";\n' +
                'ctx.beginPath();\n' +
                'ctx.arc(200, 200, 50, 0, Math.PI * 2);\n' +
                'ctx.fill();',
              feedback: { perfect: 'Math.floor를 완벽하게 적용했어요!', good: '대부분 수정했어요!', partial: '일부만 수정했어요. 모든 변수에 Math.floor를 적용하세요.', wrong: 'Math.floor(Math.random() * 256)으로 정수 RGB값을 만드세요.' }
            },
            {
              id: 'c3',
              title: '랜덤 크기 사각형 패턴',
              description: '빈칸을 채워 랜덤 크기(10~50px)의 사각형 50개를 그리는 코드를 완성하세요.',
              difficulty: 'easy',
              hints: ['Math.random() * 40 + 10은 10~50 범위', 'fillRect(x, y, size, size)로 정사각형'],
              estimatedMinutes: 5,
              starterCode: 'for (var i = 0; i < 50; i++) {\n' +
                '  var x = Math.random() * 400;\n' +
                '  var y = Math.random() * 400;\n' +
                '  var size = ___; // 10~50 범위\n' +
                '  ctx.fillStyle = "hsl(" + (i * 7) + ", 70%, 50%)";\n' +
                '  ctx.fillRect(x, y, ___, ___);\n' +
                '}',
              solution: 'for (var i = 0; i < 50; i++) {\n' +
                '  var x = Math.random() * 400;\n' +
                '  var y = Math.random() * 400;\n' +
                '  var size = Math.random() * 40 + 10;\n' +
                '  ctx.fillStyle = "hsl(" + (i * 7) + ", 70%, 50%)";\n' +
                '  ctx.fillRect(x, y, size, size);\n' +
                '}',
              feedback: { perfect: '랜덤 크기 패턴을 완벽하게 만들었어요!', good: '잘했어요! 크기 범위를 확인해보세요.', partial: '사각형은 그려지지만 크기가 정확하지 않아요.', wrong: 'Math.random() * 40 + 10으로 10~50 범위의 크기를 만드세요.' }
            },
            {
              id: 'c4',
              title: '랜덤 라인 아트 함수',
              description: '랜덤 시작점과 끝점을 가진 선을 그리는 drawRandomLine 함수를 작성하세요.',
              difficulty: 'medium',
              hints: ['moveTo로 시작점, lineTo로 끝점', 'stroke()로 실제로 그려요'],
              estimatedMinutes: 7,
              starterCode: 'function drawRandomLine(ctx, w, h) {\n' +
                '  // TODO: 랜덤 시작점과 끝점으로 선 그리기\n' +
                '  // beginPath, moveTo, lineTo, strokeStyle, stroke 사용\n' +
                '}',
              solution: 'function drawRandomLine(ctx, w, h) {\n' +
                '  ctx.beginPath();\n' +
                '  ctx.moveTo(Math.random() * w, Math.random() * h);\n' +
                '  ctx.lineTo(Math.random() * w, Math.random() * h);\n' +
                '  ctx.strokeStyle = "hsl(" + Math.floor(Math.random()*360) + ",70%,50%)";\n' +
                '  ctx.stroke();\n' +
                '}',
              feedback: { perfect: '랜덤 라인 함수를 완벽하게 구현했어요!', good: '좋아요! 색상도 랜덤으로 해보세요.', partial: '선은 그리지만 일부 API 호출이 빠졌어요.', wrong: 'beginPath -> moveTo -> lineTo -> strokeStyle -> stroke 순서로 호출하세요.' }
            },
            {
              id: 'c5',
              title: '패턴 갤러리 생성기',
              description: '캔버스를 4등분하여 각 영역에 다른 랜덤 패턴을 그리는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['save/restore로 클리핑 영역을 설정하세요', '각 사분면에 다른 도형을 그리세요'],
              estimatedMinutes: 10,
              starterCode: 'function drawGallery(ctx) {\n' +
                '  var w = 400, h = 400;\n' +
                '  // TODO: 좌상 영역에 원 패턴 (0,0 ~ 200,200)\n' +
                '  // TODO: 우상 영역에 사각형 패턴 (200,0 ~ 400,200)\n' +
                '  // TODO: 좌하 영역에 선 패턴 (0,200 ~ 200,400)\n' +
                '  // TODO: 우하 영역에 삼각형 패턴 (200,200 ~ 400,400)\n' +
                '}',
              solution: 'function drawGallery(ctx) {\n' +
                '  var w = 400, h = 400;\n' +
                '  for (var i = 0; i < 20; i++) {\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(Math.random()*200, Math.random()*200, Math.random()*20+5, 0, Math.PI*2);\n' +
                '    ctx.fillStyle = "hsl("+Math.floor(Math.random()*360)+",70%,50%)"; ctx.fill();\n' +
                '  }\n' +
                '  for (var j = 0; j < 20; j++) {\n' +
                '    var s = Math.random()*30+5;\n' +
                '    ctx.fillStyle = "hsl("+Math.floor(Math.random()*360)+",70%,50%)";\n' +
                '    ctx.fillRect(200+Math.random()*170, Math.random()*170, s, s);\n' +
                '  }\n' +
                '  for (var k = 0; k < 20; k++) {\n' +
                '    ctx.beginPath();\n' +
                '    ctx.moveTo(Math.random()*200, 200+Math.random()*200);\n' +
                '    ctx.lineTo(Math.random()*200, 200+Math.random()*200);\n' +
                '    ctx.strokeStyle = "hsl("+Math.floor(Math.random()*360)+",70%,50%)"; ctx.stroke();\n' +
                '  }\n' +
                '  for (var l = 0; l < 20; l++) {\n' +
                '    ctx.beginPath();\n' +
                '    ctx.moveTo(200+Math.random()*200, 200+Math.random()*200);\n' +
                '    ctx.lineTo(200+Math.random()*200, 200+Math.random()*200);\n' +
                '    ctx.lineTo(200+Math.random()*200, 200+Math.random()*200);\n' +
                '    ctx.closePath();\n' +
                '    ctx.fillStyle = "hsl("+Math.floor(Math.random()*360)+",70%,40%)"; ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '패턴 갤러리를 완벽하게 만들었어요! 4가지 패턴이 조화롭네요!', good: '좋은 시도예요! 영역 분할을 확인해보세요.', partial: '일부 영역만 채웠어요. 4개 영역 모두 다른 패턴을 그리세요.', wrong: '각 영역 좌표 범위를 계산하고 다른 도형(원, 사각형, 선, 삼각형)을 그리세요.' }
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
              id: 'c1',
              title: '움직이는 원 만들기',
              description: 'requestAnimationFrame으로 원이 오른쪽으로 이동하는 애니메이션을 만드세요.',
              difficulty: 'easy',
              hints: ['clearRect로 이전 프레임을 지우세요', 'x 값을 매 프레임 증가시키세요'],
              estimatedMinutes: 3,
              starterCode: 'var x = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(___, 200, 20, 0, Math.PI * 2);\n' +
                '  ctx.fill();\n' +
                '  ___; // x를 2만큼 증가\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var x = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, 200, 20, 0, Math.PI * 2);\n' +
                '  ctx.fill();\n' +
                '  x += 2;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '움직이는 원 애니메이션을 완벽하게 구현했어요!', good: '거의 맞았어요! x 증가값을 확인하세요.', partial: '원은 보이지만 움직이지 않아요.', wrong: 'arc에 x 변수를 넣고, x += 2 로 매 프레임 이동시키세요.' }
            },
            {
              id: 'c2',
              title: '경계에서 반사하기',
              description: '화면 경계에 닿으면 방향이 바뀌는 공 애니메이션의 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['x > canvas.width 이면 dx를 음수로', 'x < 0 이면 dx를 양수로'],
              estimatedMinutes: 4,
              starterCode: 'var x = 200, dx = 3;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath(); ctx.arc(x, 200, 20, 0, Math.PI*2); ctx.fill();\n' +
                '  x += dx;\n' +
                '  // 버그: 경계 반사가 안됨\n' +
                '  // TODO: x가 경계에 닿으면 dx 방향 반전\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              solution: 'var x = 200, dx = 3;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath(); ctx.arc(x, 200, 20, 0, Math.PI*2); ctx.fill();\n' +
                '  x += dx;\n' +
                '  if (x > 380 || x < 20) { dx = -dx; }\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              feedback: { perfect: '경계 반사를 완벽하게 구현했어요!', good: '좋아요! 반지름도 고려하면 더 정확해요.', partial: '한쪽 경계만 처리했어요. 양쪽 다 해야 해요.', wrong: 'if (x > 380 || x < 20) dx = -dx; 로 방향을 반전시키세요.' }
            },
            {
              id: 'c3',
              title: '부드러운 색상 변화',
              description: '시간에 따라 색상(hue)이 0에서 360까지 천천히 변하는 원을 만드세요.',
              difficulty: 'easy',
              hints: ['hue를 매 프레임 1씩 증가', '360 넘으면 0으로 리셋 (% 360)'],
              estimatedMinutes: 5,
              starterCode: 'var hue = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "hsl(" + ___ + ", 80%, 50%)";\n' +
                '  ctx.beginPath(); ctx.arc(200, 200, 80, 0, Math.PI*2); ctx.fill();\n' +
                '  ___; // hue 증가 + 360 순환\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              solution: 'var hue = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "hsl(" + hue + ", 80%, 50%)";\n' +
                '  ctx.beginPath(); ctx.arc(200, 200, 80, 0, Math.PI*2); ctx.fill();\n' +
                '  hue = (hue + 1) % 360;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              feedback: { perfect: '색상 애니메이션을 완벽하게 구현했어요!', good: '잘했어요! hue 순환을 확인하세요.', partial: '색은 변하지만 순환이 안 돼요.', wrong: 'hue = (hue + 1) % 360 으로 0~360 순환시키세요.' }
            },
            {
              id: 'c4',
              title: '여러 공 동시 애니메이션',
              description: '배열로 관리되는 5개의 공이 동시에 움직이는 애니메이션을 작성하세요.',
              difficulty: 'medium',
              hints: ['공 배열에 x, y, dx, dy를 저장', 'for문으로 모든 공을 업데이트'],
              estimatedMinutes: 7,
              starterCode: 'var balls = [];\n' +
                'for (var i = 0; i < 5; i++) {\n' +
                '  balls.push({ x: Math.random()*400, y: Math.random()*400, dx: 2, dy: 2 });\n' +
                '}\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  // TODO: for문으로 각 공을 그리고 이동시키기\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              solution: 'var balls = [];\n' +
                'for (var i = 0; i < 5; i++) {\n' +
                '  balls.push({ x: Math.random()*400, y: Math.random()*400, dx: 2, dy: 2 });\n' +
                '}\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  for (var i = 0; i < balls.length; i++) {\n' +
                '    var b = balls[i];\n' +
                '    ctx.beginPath(); ctx.arc(b.x, b.y, 15, 0, Math.PI*2); ctx.fill();\n' +
                '    b.x += b.dx; b.y += b.dy;\n' +
                '    if (b.x > 385 || b.x < 15) b.dx = -b.dx;\n' +
                '    if (b.y > 385 || b.y < 15) b.dy = -b.dy;\n' +
                '  }\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              feedback: { perfect: '여러 공 애니메이션을 완벽하게 구현했어요!', good: '좋아요! 경계 처리를 추가하면 완벽해요.', partial: '공이 그려지지만 움직임이 없어요.', wrong: 'for문에서 각 ball의 x,y를 dx,dy만큼 업데이트하세요.' }
            },
            {
              id: 'c5',
              title: '사인파 애니메이션',
              description: 'Math.sin을 사용해 위아래로 부드럽게 움직이는 웨이브 애니메이션을 만드세요.',
              difficulty: 'medium',
              hints: ['Math.sin은 -1~1 값을 반환해요', '시간을 증가시켜 sin 입력에 사용'],
              estimatedMinutes: 10,
              starterCode: 'var time = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  for (var i = 0; i < 20; i++) {\n' +
                '    var x = i * 20 + 10;\n' +
                '    // TODO: Math.sin으로 y 좌표 계산 (200 중심, 진폭 80)\n' +
                '    var y = ___;\n' +
                '    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI*2); ctx.fill();\n' +
                '  }\n' +
                '  time += 0.05;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              solution: 'var time = 0;\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  for (var i = 0; i < 20; i++) {\n' +
                '    var x = i * 20 + 10;\n' +
                '    var y = 200 + Math.sin(time + i * 0.3) * 80;\n' +
                '    ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI*2); ctx.fill();\n' +
                '  }\n' +
                '  time += 0.05;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}',
              feedback: { perfect: '사인파 애니메이션을 완벽하게 구현했어요! 수학의 아름다움이네요!', good: '좋아요! 진폭이나 위상차를 조절해보세요.', partial: 'sin은 사용했지만 위치가 정확하지 않아요.', wrong: 'y = 200 + Math.sin(time + i * 0.3) * 80 으로 웨이브를 만드세요.' }
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
              id: 'c1',
              title: '파티클 객체 만들기',
              description: '위치, 속도, 크기, 수명을 가진 파티클 객체를 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['객체로 파티클 속성을 묶으세요', '랜덤 속도와 방향이 필요해요'],
              estimatedMinutes: 3,
              starterCode: 'function createParticle(x, y) {\n' +
                '  return {\n' +
                '    x: x, y: y,\n' +
                '    vx: ___, // -2 ~ 2 랜덤 속도\n' +
                '    vy: ___, // -2 ~ 2 랜덤 속도\n' +
                '    size: ___, // 2 ~ 8 랜덤 크기\n' +
                '    life: 1.0 // 수명 (1.0 = 100%)\n' +
                '  };\n' +
                '}',
              solution: 'function createParticle(x, y) {\n' +
                '  return {\n' +
                '    x: x, y: y,\n' +
                '    vx: Math.random() * 4 - 2,\n' +
                '    vy: Math.random() * 4 - 2,\n' +
                '    size: Math.random() * 6 + 2,\n' +
                '    life: 1.0\n' +
                '  };\n' +
                '}',
              feedback: { perfect: '파티클 객체를 완벽하게 만들었어요!', good: '좋아요! 속도 범위를 확인하세요.', partial: '일부 속성만 올바른 범위에요.', wrong: 'Math.random() * 4 - 2 로 -2~2 범위를 만드세요.' }
            },
            {
              id: 'c2',
              title: '파티클 업데이트 함수',
              description: '파티클의 위치를 속도만큼 이동시키고 수명을 감소시키는 함수를 수정하세요.',
              difficulty: 'easy',
              hints: ['x += vx, y += vy 로 이동', 'life를 0.02씩 감소'],
              estimatedMinutes: 4,
              starterCode: 'function updateParticle(p) {\n' +
                '  // TODO: 위치 이동\n' +
                '  // TODO: 수명 감소 (0.02씩)\n' +
                '  // TODO: 중력 효과 (vy += 0.05)\n' +
                '}',
              solution: 'function updateParticle(p) {\n' +
                '  p.x += p.vx;\n' +
                '  p.y += p.vy;\n' +
                '  p.vy += 0.05;\n' +
                '  p.life -= 0.02;\n' +
                '}',
              feedback: { perfect: '파티클 업데이트를 완벽하게 구현했어요!', good: '좋아요! 중력 효과를 추가해보세요.', partial: '이동은 되지만 수명이나 중력이 빠졌어요.', wrong: 'p.x += p.vx 로 이동하고 p.life -= 0.02 로 수명을 줄이세요.' }
            },
            {
              id: 'c3',
              title: '파티클 시스템 렌더링',
              description: '파티클 배열을 순회하며 각 파티클을 원으로 그리는 함수를 완성하세요. 수명에 따라 투명도가 변합니다.',
              difficulty: 'easy',
              hints: ['life 값을 투명도(alpha)로 사용', 'rgba에서 네번째 값이 투명도'],
              estimatedMinutes: 5,
              starterCode: 'function drawParticles(ctx, particles) {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\n' +
                '    // TODO: life를 투명도로 사용하여 fillStyle 설정\n' +
                '    ctx.fillStyle = ___;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              solution: 'function drawParticles(ctx, particles) {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = "rgba(255, 100, 0, " + p.life + ")";\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '파티클 렌더링을 완벽하게 구현했어요! 투명도 효과가 아름다워요!', good: '좋아요! 투명도 값을 확인해보세요.', partial: '그리기는 되지만 투명도가 적용 안 돼요.', wrong: '"rgba(255, 100, 0, " + p.life + ")" 로 수명을 투명도로 사용하세요.' }
            },
            {
              id: 'c4',
              title: '파티클 생성 & 제거',
              description: '클릭 위치에 파티클을 생성하고 수명이 다한 파티클을 제거하는 시스템을 만드세요.',
              difficulty: 'medium',
              hints: ['클릭마다 10개 파티클 생성', 'life <= 0 인 것은 제거', '뒤에서부터 splice로 제거'],
              estimatedMinutes: 7,
              starterCode: 'var particles = [];\n' +
                '\n' +
                'function spawnParticles(x, y) {\n' +
                '  // TODO: 10개 파티클 생성하여 배열에 추가\n' +
                '}\n' +
                '\n' +
                'function removeDeadParticles() {\n' +
                '  // TODO: life <= 0 인 파티클 제거\n' +
                '}',
              solution: 'var particles = [];\n' +
                '\n' +
                'function spawnParticles(x, y) {\n' +
                '  for (var i = 0; i < 10; i++) {\n' +
                '    particles.push(createParticle(x, y));\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                'function removeDeadParticles() {\n' +
                '  for (var i = particles.length - 1; i >= 0; i--) {\n' +
                '    if (particles[i].life <= 0) {\n' +
                '      particles.splice(i, 1);\n' +
                '    }\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '파티클 생성/제거를 완벽하게 구현했어요!', good: '좋아요! splice로 뒤에서부터 제거하면 인덱스 문제가 안 생겨요.', partial: '생성은 되지만 제거가 올바르지 않아요.', wrong: '뒤에서부터 순회(i--)하며 splice(i, 1)로 제거하세요.' }
            },
            {
              id: 'c5',
              title: '불꽃놀이 파티클 시스템',
              description: '폭발 효과를 내는 불꽃놀이 파티클 시스템을 구현하세요. 중심에서 방사형으로 퍼집니다.',
              difficulty: 'medium',
              hints: ['각도를 사용해 방사형으로 속도 설정', '2*PI를 파티클 수로 나누면 균등 분배'],
              estimatedMinutes: 10,
              starterCode: 'function createFirework(cx, cy, count) {\n' +
                '  var particles = [];\n' +
                '  for (var i = 0; i < count; i++) {\n' +
                '    var angle = (i / count) * Math.PI * 2;\n' +
                '    var speed = Math.random() * 3 + 1;\n' +
                '    // TODO: cos, sin으로 vx, vy 계산\n' +
                '    particles.push({ x: cx, y: cy, vx: ___, vy: ___, life: 1.0, size: 3 });\n' +
                '  }\n' +
                '  return particles;\n' +
                '}',
              solution: 'function createFirework(cx, cy, count) {\n' +
                '  var particles = [];\n' +
                '  for (var i = 0; i < count; i++) {\n' +
                '    var angle = (i / count) * Math.PI * 2;\n' +
                '    var speed = Math.random() * 3 + 1;\n' +
                '    particles.push({ x: cx, y: cy, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1.0, size: 3 });\n' +
                '  }\n' +
                '  return particles;\n' +
                '}',
              feedback: { perfect: '불꽃놀이 효과를 완벽하게 구현했어요! 삼각함수 활용이 훌륭해요!', good: '좋아요! cos과 sin의 사용을 확인하세요.', partial: '방사형은 되지만 각도 계산이 정확하지 않아요.', wrong: 'vx = Math.cos(angle) * speed, vy = Math.sin(angle) * speed 로 방사형 속도를 만드세요.' }
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
              id: 'c1',
              title: '마우스 위치 추적',
              description: '마우스 위치에 원을 그리는 이벤트 리스너를 완성하세요.',
              difficulty: 'easy',
              hints: ['mousemove 이벤트 사용', 'e.offsetX, e.offsetY로 좌표 얻기'],
              estimatedMinutes: 3,
              starterCode: 'var mouseX = 0, mouseY = 0;\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  mouseX = ___; // 마우스 x 좌표\n' +
                '  mouseY = ___; // 마우스 y 좌표\n' +
                '});\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath(); ctx.arc(mouseX, mouseY, 20, 0, Math.PI*2); ctx.fill();\n' +
                '  requestAnimationFrame(draw);\n' +
                '}',
              solution: 'var mouseX = 0, mouseY = 0;\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  mouseX = e.offsetX;\n' +
                '  mouseY = e.offsetY;\n' +
                '});\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath(); ctx.arc(mouseX, mouseY, 20, 0, Math.PI*2); ctx.fill();\n' +
                '  requestAnimationFrame(draw);\n' +
                '}',
              feedback: { perfect: '마우스 추적을 완벽하게 구현했어요!', good: '좋아요! offsetX/offsetY가 캔버스 내 좌표예요.', partial: '이벤트 리스너는 있지만 좌표가 정확하지 않아요.', wrong: 'e.offsetX와 e.offsetY를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '클릭으로 도형 추가',
              description: '클릭한 위치에 원을 추가하고 화면에 표시하는 코드의 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['click 이벤트에서 좌표 얻기', '배열에 push로 추가'],
              estimatedMinutes: 4,
              starterCode: 'var circles = [];\n' +
                'canvas.addEventListener("click", function(e) {\n' +
                '  // 버그: 원이 추가되지 않음\n' +
                '  var circle = { x: e.offsetX, y: e.offsetY, r: 15 };\n' +
                '  // TODO: circles 배열에 추가\n' +
                '});\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  for (var i = 0; i < circles.length; i++) {\n' +
                '    ctx.beginPath(); ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI*2); ctx.fill();\n' +
                '  }\n' +
                '  requestAnimationFrame(draw);\n' +
                '}',
              solution: 'var circles = [];\n' +
                'canvas.addEventListener("click", function(e) {\n' +
                '  var circle = { x: e.offsetX, y: e.offsetY, r: 15 };\n' +
                '  circles.push(circle);\n' +
                '});\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  for (var i = 0; i < circles.length; i++) {\n' +
                '    ctx.beginPath(); ctx.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI*2); ctx.fill();\n' +
                '  }\n' +
                '  requestAnimationFrame(draw);\n' +
                '}',
              feedback: { perfect: '클릭으로 도형 추가를 완벽하게 구현했어요!', good: '좋아요! push 사용법을 확인하세요.', partial: '이벤트는 작동하지만 배열에 추가가 안 돼요.', wrong: 'circles.push(circle)로 배열에 추가하세요.' }
            },
            {
              id: 'c3',
              title: '마우스로 그리기',
              description: '마우스를 누른 상태에서 움직이면 선을 그리는 그림판을 완성하세요.',
              difficulty: 'easy',
              hints: ['mousedown에서 isDrawing=true', 'mouseup에서 isDrawing=false', 'mousemove에서 isDrawing일 때만 그리기'],
              estimatedMinutes: 5,
              starterCode: 'var isDrawing = false;\n' +
                'canvas.addEventListener("mousedown", function() { ___ });\n' +
                'canvas.addEventListener("mouseup", function() { ___ });\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  if (___) {\n' +
                '    ctx.fillRect(e.offsetX-2, e.offsetY-2, 4, 4);\n' +
                '  }\n' +
                '});',
              solution: 'var isDrawing = false;\n' +
                'canvas.addEventListener("mousedown", function() { isDrawing = true; });\n' +
                'canvas.addEventListener("mouseup", function() { isDrawing = false; });\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  if (isDrawing) {\n' +
                '    ctx.fillRect(e.offsetX-2, e.offsetY-2, 4, 4);\n' +
                '  }\n' +
                '});',
              feedback: { perfect: '그림판을 완벽하게 구현했어요!', good: '좋아요! 상태 변수 관리를 확인하세요.', partial: '마우스 움직임은 감지하지만 드래그 상태가 안 돼요.', wrong: 'mousedown시 isDrawing=true, mouseup시 false, move시 isDrawing 체크하세요.' }
            },
            {
              id: 'c4',
              title: '호버 효과 구현',
              description: '마우스가 원 위에 올라가면 색이 변하는 호버 효과를 구현하세요.',
              difficulty: 'medium',
              hints: ['두 점 사이 거리로 충돌 판정', 'Math.sqrt(dx*dx + dy*dy) < radius 이면 호버'],
              estimatedMinutes: 7,
              starterCode: 'var circle = { x: 200, y: 200, r: 40 };\n' +
                'var isHover = false;\n' +
                '\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  var dx = e.offsetX - circle.x;\n' +
                '  var dy = e.offsetY - circle.y;\n' +
                '  // TODO: 거리 계산 후 호버 상태 판정\n' +
                '  isHover = ___;\n' +
                '});',
              solution: 'var circle = { x: 200, y: 200, r: 40 };\n' +
                'var isHover = false;\n' +
                '\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  var dx = e.offsetX - circle.x;\n' +
                '  var dy = e.offsetY - circle.y;\n' +
                '  isHover = Math.sqrt(dx * dx + dy * dy) < circle.r;\n' +
                '});',
              feedback: { perfect: '호버 감지를 완벽하게 구현했어요!', good: '좋아요! 거리 공식을 확인하세요.', partial: '거리는 구했지만 비교가 정확하지 않아요.', wrong: 'Math.sqrt(dx*dx + dy*dy) < circle.r 로 호버를 판정하세요.' }
            },
            {
              id: 'c5',
              title: '드래그 앤 드롭 구현',
              description: '원을 마우스로 드래그하여 이동시키는 기능을 구현하세요.',
              difficulty: 'medium',
              hints: ['mousedown에서 원 위인지 확인', 'mousemove에서 원 위치 업데이트', 'mouseup에서 드래그 종료'],
              estimatedMinutes: 10,
              starterCode: 'var ball = { x: 200, y: 200, r: 30 };\n' +
                'var isDragging = false;\n' +
                '\n' +
                'canvas.addEventListener("mousedown", function(e) {\n' +
                '  // TODO: 공 위에서 클릭했는지 확인 후 isDragging 설정\n' +
                '});\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  // TODO: 드래깅 중이면 공 위치 업데이트\n' +
                '});\n' +
                'canvas.addEventListener("mouseup", function() {\n' +
                '  isDragging = false;\n' +
                '});',
              solution: 'var ball = { x: 200, y: 200, r: 30 };\n' +
                'var isDragging = false;\n' +
                '\n' +
                'canvas.addEventListener("mousedown", function(e) {\n' +
                '  var dx = e.offsetX - ball.x;\n' +
                '  var dy = e.offsetY - ball.y;\n' +
                '  if (Math.sqrt(dx*dx + dy*dy) < ball.r) {\n' +
                '    isDragging = true;\n' +
                '  }\n' +
                '});\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  if (isDragging) {\n' +
                '    ball.x = e.offsetX;\n' +
                '    ball.y = e.offsetY;\n' +
                '  }\n' +
                '});\n' +
                'canvas.addEventListener("mouseup", function() {\n' +
                '  isDragging = false;\n' +
                '});',
              feedback: { perfect: '드래그 앤 드롭을 완벽하게 구현했어요!', good: '좋아요! 클릭 판정 로직을 확인하세요.', partial: '드래그는 되지만 원 위 판정이 빠졌어요.', wrong: 'mousedown에서 거리 확인 후 isDragging=true, mousemove에서 위치 업데이트하세요.' }
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
              title: '오디오 주파수 배열 만들기',
              description: '음표 이름과 주파수를 매핑하는 객체를 만들고, 주어진 음표의 주파수를 반환하는 함수를 작성하세요.',
              difficulty: 'easy',
              hints: ['객체에 키-값 쌍으로 음표와 주파수를 저장하세요', 'C4=261.63, D4=293.66, E4=329.63', '대괄호 또는 점 표기법으로 값에 접근하세요'],
              estimatedMinutes: 5,
              starterCode: 'function getFrequency(note) {\n' +
                '  var notes = {\n' +
                '    // TODO: C4, D4, E4, F4, G4 주파수 추가\n' +
                '  };\n' +
                '  return notes[note] || 0;\n' +
                '}',
              solution: 'function getFrequency(note) {\n' +
                '  var notes = {\n' +
                '    C4: 261.63,\n' +
                '    D4: 293.66,\n' +
                '    E4: 329.63,\n' +
                '    F4: 349.23,\n' +
                '    G4: 392.00\n' +
                '  };\n' +
                '  return notes[note] || 0;\n' +
                '}',
              feedback: {
                perfect: '음표-주파수 매핑을 완벽하게 만들었어요! 오디오 프로그래밍의 첫걸음이에요!',
                good: '대부분 맞았어요! 일부 주파수 값을 확인해보세요.',
                partial: '객체 구조는 맞지만 주파수 값이 정확하지 않아요.',
                wrong: '{ C4: 261.63, D4: 293.66 } 형식으로 주파수를 매핑하세요.'
              }
            },
            {
              id: 'c2',
              title: '주파수 시각화 바 그리기',
              description: '주파수 데이터 배열을 받아 막대 그래프로 시각화하는 함수를 작성하세요.',
              difficulty: 'easy',
              hints: ['배열 길이만큼 반복하세요', '각 막대의 너비는 캔버스너비/배열길이', '높이는 주파수 값에 비례하세요'],
              estimatedMinutes: 7,
              starterCode: 'function drawBars(ctx, data, width, height) {\n' +
                '  var barWidth = width / data.length;\n' +
                '  for (var i = 0; i < data.length; i++) {\n' +
                '    // TODO: 각 막대의 높이를 data[i] 비율로 계산\n' +
                '    var barHeight = ___;\n' +
                '    // TODO: fillRect로 막대 그리기 (아래에서 위로)\n' +
                '    ctx.fillStyle = "hsl(" + (i * 20) + ", 80%, 50%)";\n' +
                '    ctx.fillRect(___, ___, ___, ___);\n' +
                '  }\n' +
                '}',
              solution: 'function drawBars(ctx, data, width, height) {\n' +
                '  var barWidth = width / data.length;\n' +
                '  for (var i = 0; i < data.length; i++) {\n' +
                '    var barHeight = (data[i] / 255) * height;\n' +
                '    ctx.fillStyle = "hsl(" + (i * 20) + ", 80%, 50%)";\n' +
                '    ctx.fillRect(i * barWidth, height - barHeight, barWidth - 2, barHeight);\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '주파수 바 시각화를 완벽하게 구현했어요! 오디오 비주얼라이저의 핵심이에요!',
                good: '잘했어요! 막대 위치나 크기를 미세 조정해보세요.',
                partial: '반복문은 맞지만 좌표 계산이 정확하지 않아요.',
                wrong: 'fillRect(x, y, width, height)에서 y는 height - barHeight로 아래에서 위로 그려요.'
              }
            },
            {
              id: 'c3',
              title: '비트 감지 함수 만들기',
              description: '주파수 데이터에서 비트(강한 저음)를 감지하는 함수를 만드세요. 저주파 평균이 임계값을 넘으면 비트로 판단합니다.',
              difficulty: 'medium',
              hints: ['저주파는 배열의 앞쪽 요소들이에요', '평균을 구해서 임계값과 비교하세요', '임계값은 보통 200 정도에요'],
              estimatedMinutes: 8,
              starterCode: 'function detectBeat(frequencyData, threshold) {\n' +
                '  // frequencyData: 0~255 값의 배열\n' +
                '  // 저주파 영역 (인덱스 0~10)의 평균을 구하세요\n' +
                '  var sum = 0;\n' +
                '  var lowFreqCount = 10;\n' +
                '  // TODO: 0~lowFreqCount까지 합산\n' +
                '  // TODO: 평균이 threshold 이상이면 true 반환\n' +
                '  return false;\n' +
                '}',
              solution: 'function detectBeat(frequencyData, threshold) {\n' +
                '  var sum = 0;\n' +
                '  var lowFreqCount = 10;\n' +
                '  for (var i = 0; i < lowFreqCount; i++) {\n' +
                '    sum += frequencyData[i];\n' +
                '  }\n' +
                '  var average = sum / lowFreqCount;\n' +
                '  return average >= threshold;\n' +
                '}',
              feedback: {
                perfect: '비트 감지 알고리즘을 완벽하게 구현했어요! 음악 시각화의 핵심이에요!',
                good: '좋아요! 평균 계산이나 비교 로직을 확인해보세요.',
                partial: '합산은 했지만 평균 계산이나 비교가 빠졌어요.',
                wrong: 'for문으로 합산 후 lowFreqCount로 나눠 평균을 구하고 threshold와 비교하세요.'
              }
            },
            {
              id: 'c4',
              title: '원형 비주얼라이저 구현',
              description: '주파수 데이터를 원형으로 시각화하세요. 각 주파수가 중심에서 바깥으로 뻗는 선이 됩니다.',
              difficulty: 'medium',
              hints: ['각도 = i / 배열길이 * Math.PI * 2', 'sin과 cos로 원형 좌표를 계산하세요', '선 길이는 주파수 값에 비례하세요'],
              estimatedMinutes: 12,
              starterCode: 'function circularVisualizer(ctx, data, cx, cy) {\n' +
                '  var baseRadius = 50;\n' +
                '  for (var i = 0; i < data.length; i++) {\n' +
                '    var angle = (i / data.length) * Math.PI * 2;\n' +
                '    var lineLen = (data[i] / 255) * 100;\n' +
                '    // TODO: 시작점 (원 위의 점) 계산\n' +
                '    var x1 = cx + Math.cos(angle) * baseRadius;\n' +
                '    var y1 = cy + Math.sin(angle) * baseRadius;\n' +
                '    // TODO: 끝점 (시작점에서 lineLen만큼 바깥) 계산\n' +
                '    var x2 = ___;\n' +
                '    var y2 = ___;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.moveTo(x1, y1);\n' +
                '    ctx.lineTo(x2, y2);\n' +
                '    ctx.strokeStyle = "hsl(" + (i * 2) + ", 80%, 60%)";\n' +
                '    ctx.stroke();\n' +
                '  }\n' +
                '}',
              solution: 'function circularVisualizer(ctx, data, cx, cy) {\n' +
                '  var baseRadius = 50;\n' +
                '  for (var i = 0; i < data.length; i++) {\n' +
                '    var angle = (i / data.length) * Math.PI * 2;\n' +
                '    var lineLen = (data[i] / 255) * 100;\n' +
                '    var x1 = cx + Math.cos(angle) * baseRadius;\n' +
                '    var y1 = cy + Math.sin(angle) * baseRadius;\n' +
                '    var x2 = cx + Math.cos(angle) * (baseRadius + lineLen);\n' +
                '    var y2 = cy + Math.sin(angle) * (baseRadius + lineLen);\n' +
                '    ctx.beginPath();\n' +
                '    ctx.moveTo(x1, y1);\n' +
                '    ctx.lineTo(x2, y2);\n' +
                '    ctx.strokeStyle = "hsl(" + (i * 2) + ", 80%, 60%)";\n' +
                '    ctx.stroke();\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '원형 비주얼라이저를 완벽하게 구현했어요! 삼각함수 활용이 훌륭해요!',
                good: '좋아요! 끝점 좌표 계산을 다시 확인해보세요.',
                partial: '원형 좌표 개념은 이해했지만 lineLen 적용이 정확하지 않아요.',
                wrong: '끝점은 cx + cos(angle) * (baseRadius + lineLen) 형식으로 계산하세요.'
              }
            },
            {
              id: 'c5',
              title: '비트 반응 애니메이션 시스템',
              description: '비트를 감지해 화면 배경색과 도형 크기가 변하는 반응형 비주얼 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['detectBeat 함수를 활용하세요', '비트 감지시 크기를 키우고 서서히 줄이세요', 'lerp(선형보간)으로 부드럽게 전환하세요'],
              estimatedMinutes: 15,
              starterCode: 'var currentSize = 50;\n' +
                'var targetSize = 50;\n' +
                '\n' +
                'function updateVisual(ctx, frequencyData) {\n' +
                '  var isBeat = detectBeat(frequencyData, 200);\n' +
                '  // TODO: 비트 감지시 targetSize를 150으로 설정\n' +
                '  // TODO: 비트 아닐 때 targetSize를 50으로 복귀\n' +
                '  // TODO: currentSize를 targetSize로 부드럽게 전환 (lerp)\n' +
                '  // TODO: 원 그리기\n' +
                '}',
              solution: 'var currentSize = 50;\n' +
                'var targetSize = 50;\n' +
                '\n' +
                'function updateVisual(ctx, frequencyData) {\n' +
                '  var isBeat = detectBeat(frequencyData, 200);\n' +
                '  if (isBeat) {\n' +
                '    targetSize = 150;\n' +
                '  } else {\n' +
                '    targetSize = 50;\n' +
                '  }\n' +
                '  currentSize += (targetSize - currentSize) * 0.1;\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(200, 200, currentSize, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = isBeat ? "red" : "blue";\n' +
                '  ctx.fill();\n' +
                '}',
              feedback: {
                perfect: '비트 반응 시스템을 완벽하게 구현했어요! 진짜 오디오 비주얼 작품이에요!',
                good: '좋은 구조예요! lerp 전환을 더 부드럽게 만들어보세요.',
                partial: '비트 감지는 되지만 크기 전환이 부자연스러워요.',
                wrong: 'if (isBeat)로 분기하고, currentSize += (targetSize - currentSize) * 0.1 로 보간하세요.'
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
              id: 'c1',
              title: '재귀 카운트다운 이해',
              description: '재귀 함수의 기본 구조를 이해하세요. n에서 1까지 카운트다운하는 재귀 함수를 완성하세요.',
              difficulty: 'easy',
              hints: ['종료 조건(base case)이 필요해요', 'n <= 0이면 멈춰야 해요', '자기 자신을 n-1로 호출'],
              estimatedMinutes: 3,
              starterCode: 'function countdown(n) {\n' +
                '  // TODO: 종료 조건\n' +
                '  if (___) return;\n' +
                '  console.log(n);\n' +
                '  // TODO: 재귀 호출\n' +
                '  ___;\n' +
                '}',
              solution: 'function countdown(n) {\n' +
                '  if (n <= 0) return;\n' +
                '  console.log(n);\n' +
                '  countdown(n - 1);\n' +
                '}',
              feedback: { perfect: '재귀의 기본 구조를 완벽하게 이해했어요!', good: '좋아요! 종료 조건을 확인하세요.', partial: '호출은 하지만 종료 조건이 빠졌어요.', wrong: 'if (n <= 0) return; 으로 종료하고 countdown(n - 1)로 재귀 호출하세요.' }
            },
            {
              id: 'c2',
              title: '재귀 선 분할',
              description: '선분을 재귀적으로 반으로 나누어 그리는 함수의 버그를 수정하세요.',
              difficulty: 'easy',
              hints: ['깊이(depth)가 0이면 종료', '중간점을 계산하세요', '양쪽을 각각 재귀 호출'],
              estimatedMinutes: 4,
              starterCode: 'function divideLine(ctx, x1, y1, x2, y2, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();\n' +
                '    return;\n' +
                '  }\n' +
                '  var mx = (x1 + x2) / 2;\n' +
                '  var my = (y1 + y2) / 2;\n' +
                '  // 버그: 재귀 호출이 빠짐\n' +
                '  // TODO: 왼쪽 반과 오른쪽 반 재귀 호출\n' +
                '}',
              solution: 'function divideLine(ctx, x1, y1, x2, y2, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();\n' +
                '    return;\n' +
                '  }\n' +
                '  var mx = (x1 + x2) / 2;\n' +
                '  var my = (y1 + y2) / 2;\n' +
                '  divideLine(ctx, x1, y1, mx, my, depth - 1);\n' +
                '  divideLine(ctx, mx, my, x2, y2, depth - 1);\n' +
                '}',
              feedback: { perfect: '재귀 분할을 완벽하게 수정했어요!', good: '좋아요! depth를 감소시키는 것을 잊지 마세요.', partial: '한쪽만 호출했어요. 양쪽 다 해야 해요.', wrong: 'divideLine(ctx, x1,y1, mx,my, depth-1)과 divideLine(ctx, mx,my, x2,y2, depth-1) 두 번 호출하세요.' }
            },
            {
              id: 'c3',
              title: '시어핀스키 삼각형',
              description: '시어핀스키 삼각형을 재귀적으로 그리는 함수를 완성하세요.',
              difficulty: 'medium',
              hints: ['삼각형 세 꼭짓점의 중점을 구하세요', '3개의 작은 삼각형으로 재귀 호출', '깊이 0이면 삼각형을 직접 그리세요'],
              estimatedMinutes: 8,
              starterCode: 'function sierpinski(ctx, x1,y1, x2,y2, x3,y3, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);\n' +
                '    ctx.closePath(); ctx.fill();\n' +
                '    return;\n' +
                '  }\n' +
                '  var mx1 = (x1+x2)/2, my1 = (y1+y2)/2;\n' +
                '  var mx2 = (x2+x3)/2, my2 = (y2+y3)/2;\n' +
                '  var mx3 = (x1+x3)/2, my3 = (y1+y3)/2;\n' +
                '  // TODO: 3개의 작은 삼각형으로 재귀 호출\n' +
                '}',
              solution: 'function sierpinski(ctx, x1,y1, x2,y2, x3,y3, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.lineTo(x3,y3);\n' +
                '    ctx.closePath(); ctx.fill();\n' +
                '    return;\n' +
                '  }\n' +
                '  var mx1 = (x1+x2)/2, my1 = (y1+y2)/2;\n' +
                '  var mx2 = (x2+x3)/2, my2 = (y2+y3)/2;\n' +
                '  var mx3 = (x1+x3)/2, my3 = (y1+y3)/2;\n' +
                '  sierpinski(ctx, x1,y1, mx1,my1, mx3,my3, depth-1);\n' +
                '  sierpinski(ctx, mx1,my1, x2,y2, mx2,my2, depth-1);\n' +
                '  sierpinski(ctx, mx3,my3, mx2,my2, x3,y3, depth-1);\n' +
                '}',
              feedback: { perfect: '시어핀스키 삼각형을 완벽하게 구현했어요! 아름다운 프랙탈이에요!', good: '좋아요! 3개의 재귀 호출 좌표를 확인하세요.', partial: '일부 삼각형만 그려졌어요. 3개 모두 재귀 호출해야 해요.', wrong: '중점으로 3개의 작은 삼각형(상, 좌하, 우하)을 재귀 호출하세요.' }
            },
            {
              id: 'c4',
              title: '재귀 트리 그리기',
              description: '프랙탈 나무를 그리는 재귀 함수를 만드세요. 가지가 두 갈래로 나뉩니다.',
              difficulty: 'medium',
              hints: ['각도와 길이를 줄여가며 재귀', 'cos, sin으로 끝점 계산', '좌우 30도씩 분기'],
              estimatedMinutes: 10,
              starterCode: 'function drawTree(ctx, x, y, angle, length, depth) {\n' +
                '  if (depth <= 0 || length < 2) return;\n' +
                '  var endX = x + Math.cos(angle) * length;\n' +
                '  var endY = y + Math.sin(angle) * length;\n' +
                '  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(endX,endY); ctx.stroke();\n' +
                '  // TODO: 좌우 가지 재귀 호출 (각도 +-0.5, 길이 *0.7)\n' +
                '}',
              solution: 'function drawTree(ctx, x, y, angle, length, depth) {\n' +
                '  if (depth <= 0 || length < 2) return;\n' +
                '  var endX = x + Math.cos(angle) * length;\n' +
                '  var endY = y + Math.sin(angle) * length;\n' +
                '  ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(endX,endY); ctx.stroke();\n' +
                '  drawTree(ctx, endX, endY, angle - 0.5, length * 0.7, depth - 1);\n' +
                '  drawTree(ctx, endX, endY, angle + 0.5, length * 0.7, depth - 1);\n' +
                '}',
              feedback: { perfect: '프랙탈 나무를 완벽하게 구현했어요! 자연의 패턴이에요!', good: '좋아요! 가지 각도와 길이 감소를 확인하세요.', partial: '한쪽 가지만 그려졌어요. 양쪽 다 호출하세요.', wrong: '끝점에서 angle+-0.5, length*0.7, depth-1 로 양쪽 재귀 호출하세요.' }
            },
            {
              id: 'c5',
              title: '코흐 눈송이',
              description: '코흐 곡선을 사용해 눈송이를 그리는 함수를 구현하세요.',
              difficulty: 'hard',
              hints: ['선분을 3등분하세요', '가운데 부분에 정삼각형 꼭짓점을 만드세요', '4개의 선분으로 재귀 호출'],
              estimatedMinutes: 15,
              starterCode: 'function kochCurve(ctx, x1,y1, x2,y2, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();\n' +
                '    return;\n' +
                '  }\n' +
                '  // TODO: 3등분점 (ax,ay), (bx,by) 계산\n' +
                '  // TODO: 꼭짓점 (px,py) 계산 (60도 회전)\n' +
                '  // TODO: 4구간 재귀 호출\n' +
                '}',
              solution: 'function kochCurve(ctx, x1,y1, x2,y2, depth) {\n' +
                '  if (depth <= 0) {\n' +
                '    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();\n' +
                '    return;\n' +
                '  }\n' +
                '  var dx = (x2-x1)/3, dy = (y2-y1)/3;\n' +
                '  var ax = x1+dx, ay = y1+dy;\n' +
                '  var bx = x1+2*dx, by = y1+2*dy;\n' +
                '  var px = ax + dx*Math.cos(-Math.PI/3) - dy*Math.sin(-Math.PI/3);\n' +
                '  var py = ay + dx*Math.sin(-Math.PI/3) + dy*Math.cos(-Math.PI/3);\n' +
                '  kochCurve(ctx, x1,y1, ax,ay, depth-1);\n' +
                '  kochCurve(ctx, ax,ay, px,py, depth-1);\n' +
                '  kochCurve(ctx, px,py, bx,by, depth-1);\n' +
                '  kochCurve(ctx, bx,by, x2,y2, depth-1);\n' +
                '}',
              feedback: { perfect: '코흐 눈송이를 완벽하게 구현했어요! 프랙탈의 아름다움을 마스터했어요!', good: '좋은 시도예요! 꼭짓점 계산을 확인하세요.', partial: '분할은 했지만 꼭짓점 좌표가 정확하지 않아요.', wrong: '3등분점을 구한 후 60도 회전으로 꼭짓점을 계산하고 4구간으로 재귀 호출하세요.' }
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
              id: 'c1',
              title: '랜덤 별 배경 그리기',
              description: '캔버스에 랜덤 위치와 크기의 별(원)을 100개 그려서 밤하늘 배경을 만드세요.',
              difficulty: 'easy',
              hints: ['Math.random()으로 x, y, 반지름을 랜덤 생성하세요', 'for문으로 100번 반복하세요', 'arc()로 원을 그리고 fillStyle로 색상을 지정하세요'],
              estimatedMinutes: 5,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'ctx.fillStyle = "black";\n' +
                'ctx.fillRect(0, 0, 400, 400);\n\n' +
                'for (var i = 0; i < 100; i++) {\n' +
                '  var x = ___;  // 0~400 랜덤\n' +
                '  var y = ___;  // 0~400 랜덤\n' +
                '  var r = ___;  // 1~3 랜덤\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.fill();\n' +
                '}',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'ctx.fillStyle = "black";\n' +
                'ctx.fillRect(0, 0, 400, 400);\n\n' +
                'for (var i = 0; i < 100; i++) {\n' +
                '  var x = Math.random() * 400;\n' +
                '  var y = Math.random() * 400;\n' +
                '  var r = Math.random() * 2 + 1;\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.fill();\n' +
                '}',
              feedback: { perfect: '아름다운 밤하늘을 만들었어요! 랜덤과 반복문을 잘 활용했어요!', good: '별이 잘 그려졌어요! 크기 범위를 조금 더 조정해보세요.', partial: '별이 그려지긴 하는데 위치나 크기가 고정되어 있어요.', wrong: 'Math.random() * 400으로 랜덤 좌표를, Math.random() * 2 + 1로 크기를 만드세요.' }
            },
            {
              id: 'c2',
              title: '떠다니는 원 애니메이션',
              description: '원이 화면을 가로로 이동하고, 오른쪽 끝에 도달하면 왼쪽에서 다시 나타나는 애니메이션을 만드세요.',
              difficulty: 'easy',
              hints: ['x 좌표를 매 프레임 증가시키세요', 'x가 캔버스 너비를 넘으면 0으로 초기화하세요', 'requestAnimationFrame으로 반복하세요'],
              estimatedMinutes: 5,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 0, y = 200, speed = 2;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, 20, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "cyan";\n' +
                '  ctx.fill();\n' +
                '  // TODO: x를 speed만큼 이동\n' +
                '  // TODO: x > 420이면 -20으로 리셋\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 0, y = 200, speed = 2;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, 20, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "cyan";\n' +
                '  ctx.fill();\n' +
                '  x += speed;\n' +
                '  if (x > 420) x = -20;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '부드러운 애니메이션이에요! 스크린세이버의 기본 원리를 마스터했어요!', good: '원이 움직여요! 경계 처리를 조금 더 다듬어보세요.', partial: '원은 보이지만 움직이지 않아요. x += speed를 추가하세요.', wrong: 'x += speed로 이동시키고, if (x > 420) x = -20으로 되감기 하세요.' }
            },
            {
              id: 'c3',
              title: '색상이 변하는 원',
              description: 'hsl 색상을 프레임마다 변경하여 무지개처럼 색이 바뀌는 원을 만드세요.',
              difficulty: 'medium',
              hints: ['hue 값(0~360)을 매 프레임 1씩 증가시키세요', 'hsl(hue, 80%, 50%) 형식으로 색상을 지정하세요', 'hue가 360을 넘으면 0으로 리셋하세요'],
              estimatedMinutes: 6,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var hue = 0;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(200, 200, 80, 0, Math.PI * 2);\n' +
                '  // TODO: hsl 색상으로 fillStyle 설정\n' +
                '  ctx.fill();\n' +
                '  // TODO: hue를 1 증가, 360 넘으면 0으로\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var hue = 0;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(200, 200, 80, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "hsl(" + hue + ", 80%, 50%)";\n' +
                '  ctx.fill();\n' +
                '  hue = (hue + 1) % 360;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '무지개 원을 완벽하게 만들었어요! HSL 색상 모델을 잘 활용했어요!', good: '색이 변해요! hue 범위 처리를 확인해보세요.', partial: '원은 보이지만 색이 변하지 않아요. hue 값을 증가시키세요.', wrong: 'ctx.fillStyle = "hsl(" + hue + ", 80%, 50%)"로 색상을 지정하세요.' }
            },
            {
              id: 'c4',
              title: '바운스하는 공 스크린세이버',
              description: '공이 벽에 부딪히면 튕기는 스크린세이버를 만드세요.',
              difficulty: 'medium',
              hints: ['dx, dy로 속도를 관리하세요', '벽에 닿으면 해당 방향의 속도를 -1 곱하세요', '공의 반지름도 경계 계산에 포함하세요'],
              estimatedMinutes: 7,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 200, y = 200, r = 15;\n' +
                'var dx = 3, dy = 2;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "lime";\n' +
                '  ctx.fill();\n' +
                '  x += dx; y += dy;\n' +
                '  // TODO: x가 벽에 닿으면 dx 반전\n' +
                '  // TODO: y가 벽에 닿으면 dy 반전\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 200, y = 200, r = 15;\n' +
                'var dx = 3, dy = 2;\n\n' +
                'function animate() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "lime";\n' +
                '  ctx.fill();\n' +
                '  x += dx; y += dy;\n' +
                '  if (x + r > 400 || x - r < 0) dx = -dx;\n' +
                '  if (y + r > 400 || y - r < 0) dy = -dy;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: 'DVD 로고처럼 완벽하게 바운스해요! 경계 처리를 정확하게 했어요!', good: '공이 튕겨요! 반지름을 경계 계산에 포함하면 더 자연스러워요.', partial: '공이 움직이지만 벽에서 멈추거나 사라져요.', wrong: 'if (x+r > 400 || x-r < 0) dx = -dx; 로 벽 충돌 시 방향을 반전하세요.' }
            },
            {
              id: 'c5',
              title: '궤적을 남기는 스크린세이버',
              description: '바운스하는 공이 궤적(trail)을 남기도록 만드세요. 배경을 반투명하게 덮어서 페이드 효과를 만듭니다.',
              difficulty: 'hard',
              hints: ['clearRect 대신 반투명 배경을 그리세요', 'rgba(0,0,0,0.05)로 서서히 지워지게 하세요', '색상도 hue로 변하게 하면 더 아름다워요'],
              estimatedMinutes: 8,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 200, y = 200, r = 10;\n' +
                'var dx = 4, dy = 3, hue = 0;\n\n' +
                'function animate() {\n' +
                '  // TODO: 반투명 검정 배경으로 페이드 효과\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  // TODO: hsl 색상 설정\n' +
                '  ctx.fill();\n' +
                '  x += dx; y += dy;\n' +
                '  if (x+r > 400 || x-r < 0) dx = -dx;\n' +
                '  if (y+r > 400 || y-r < 0) dy = -dy;\n' +
                '  // TODO: hue 증가\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 200, y = 200, r = 10;\n' +
                'var dx = 4, dy = 3, hue = 0;\n\n' +
                'function animate() {\n' +
                '  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(x, y, r, 0, Math.PI * 2);\n' +
                '  ctx.fillStyle = "hsl(" + hue + ", 100%, 60%)";\n' +
                '  ctx.fill();\n' +
                '  x += dx; y += dy;\n' +
                '  if (x+r > 400 || x-r < 0) dx = -dx;\n' +
                '  if (y+r > 400 || y-r < 0) dy = -dy;\n' +
                '  hue = (hue + 2) % 360;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '환상적인 궤적 스크린세이버에요! 페이드 효과와 색상 변화가 아름다워요!', good: '궤적이 보여요! 페이드 속도를 조정해서 더 예쁘게 만들어보세요.', partial: '공은 움직이지만 궤적이 남지 않아요. 반투명 배경을 사용하세요.', wrong: 'clearRect 대신 rgba(0,0,0,0.05)로 fillRect하면 이전 프레임이 서서히 사라져요.' }
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
              id: 'c1',
              title: '파티클 객체 생성 함수',
              description: '위치, 속도, 색상, 수명을 가진 파티클 객체를 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['객체에 x, y, vx, vy, life 속성을 넣으세요', 'life는 1.0에서 시작하여 점점 줄어들어요', '색상은 hsl로 랜덤하게 지정하세요'],
              estimatedMinutes: 4,
              starterCode: 'function createParticle(x, y) {\n' +
                '  return {\n' +
                '    x: x, y: y,\n' +
                '    vx: ___,  // -2 ~ 2 랜덤\n' +
                '    vy: ___,  // -2 ~ 2 랜덤\n' +
                '    life: ___,\n' +
                '    color: "hsl(" + Math.floor(Math.random()*360) + ",80%,60%)"\n' +
                '  };\n' +
                '}',
              solution: 'function createParticle(x, y) {\n' +
                '  return {\n' +
                '    x: x, y: y,\n' +
                '    vx: (Math.random() - 0.5) * 4,\n' +
                '    vy: (Math.random() - 0.5) * 4,\n' +
                '    life: 1.0,\n' +
                '    color: "hsl(" + Math.floor(Math.random()*360) + ",80%,60%)"\n' +
                '  };\n' +
                '}',
              feedback: { perfect: '파티클 객체를 완벽하게 설계했어요!', good: '잘 만들었어요! 속도 범위를 확인해보세요.', partial: '객체는 만들었지만 랜덤 속도가 없어요.', wrong: '(Math.random() - 0.5) * 4로 -2~2 사이 랜덤 속도를 만드세요.' }
            },
            {
              id: 'c2',
              title: '파티클 배열 관리',
              description: '파티클 배열에 추가하고 수명이 끝난 파티클을 제거하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['push로 추가, filter로 제거하세요', 'life > 0인 파티클만 남기세요', '매 프레임 life를 0.02씩 감소시키세요'],
              estimatedMinutes: 5,
              starterCode: 'var particles = [];\n\n' +
                'function addParticles(x, y, count) {\n' +
                '  for (var i = 0; i < count; i++) {\n' +
                '    // TODO: createParticle 결과를 push\n' +
                '  }\n' +
                '}\n\n' +
                'function updateParticles() {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    particles[i].x += particles[i].vx;\n' +
                '    particles[i].y += particles[i].vy;\n' +
                '    // TODO: life 감소\n' +
                '  }\n' +
                '  // TODO: 살아있는 파티클만 남기기\n' +
                '}',
              solution: 'var particles = [];\n\n' +
                'function addParticles(x, y, count) {\n' +
                '  for (var i = 0; i < count; i++) {\n' +
                '    particles.push(createParticle(x, y));\n' +
                '  }\n' +
                '}\n\n' +
                'function updateParticles() {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    particles[i].x += particles[i].vx;\n' +
                '    particles[i].y += particles[i].vy;\n' +
                '    particles[i].life -= 0.02;\n' +
                '  }\n' +
                '  particles = particles.filter(function(p) { return p.life > 0; });\n' +
                '}',
              feedback: { perfect: '파티클 배열을 완벽하게 관리해요!', good: '잘했어요! 제거 로직을 확인해보세요.', partial: '추가는 되지만 제거가 안 돼요.', wrong: 'filter(function(p) { return p.life > 0; })로 죽은 파티클을 제거하세요.' }
            },
            {
              id: 'c3',
              title: '마우스 따라다니는 파티클',
              description: '마우스 위치에서 파티클이 생성되고 사라지는 인터랙티브 효과를 만드세요.',
              difficulty: 'medium',
              hints: ['mousemove 이벤트로 마우스 좌표를 얻으세요', '매 프레임 마우스 위치에 파티클 생성', 'life를 투명도로 사용하세요'],
              estimatedMinutes: 7,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var mouseX = 200, mouseY = 200;\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  // TODO: 마우스 좌표 저장\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.1)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  addParticles(mouseX, mouseY, 3);\n' +
                '  updateParticles();\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, 3, 0, Math.PI*2);\n' +
                '    ctx.fillStyle = p.color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var mouseX = 200, mouseY = 200;\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  mouseX = e.offsetX;\n' +
                '  mouseY = e.offsetY;\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.1)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  addParticles(mouseX, mouseY, 3);\n' +
                '  updateParticles();\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, 3, 0, Math.PI*2);\n' +
                '    ctx.fillStyle = p.color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '아름다운 마우스 파티클 효과에요!', good: '파티클이 잘 보여요! 마우스 추적을 확인하세요.', partial: '파티클은 보이지만 마우스를 따라가지 않아요.', wrong: 'mouseX = e.offsetX; mouseY = e.offsetY;로 좌표를 업데이트하세요.' }
            },
            {
              id: 'c4',
              title: '중력 파티클 분수',
              description: '위로 발사된 파티클이 중력에 의해 떨어지는 분수 효과를 만드세요.',
              difficulty: 'medium',
              hints: ['vy에 매 프레임 중력값(0.05)을 더하세요', '초기 vy는 음수(위쪽)로 설정하세요', '하단 중앙에서 생성하세요'],
              estimatedMinutes: 7,
              starterCode: 'function createFountainParticle() {\n' +
                '  return {\n' +
                '    x: 200, y: 380,\n' +
                '    vx: (Math.random() - 0.5) * 3,\n' +
                '    vy: ___,  // -4 ~ -2 (위쪽)\n' +
                '    life: 1.0,\n' +
                '    color: "hsl(" + Math.floor(Math.random()*60+180) + ",90%,60%)"\n' +
                '  };\n' +
                '}\n\n' +
                'function updateFountain() {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    particles[i].x += particles[i].vx;\n' +
                '    particles[i].y += particles[i].vy;\n' +
                '    // TODO: 중력 적용\n' +
                '    particles[i].life -= 0.01;\n' +
                '  }\n' +
                '  particles = particles.filter(function(p) { return p.life > 0; });\n' +
                '}',
              solution: 'function createFountainParticle() {\n' +
                '  return {\n' +
                '    x: 200, y: 380,\n' +
                '    vx: (Math.random() - 0.5) * 3,\n' +
                '    vy: -Math.random() * 2 - 2,\n' +
                '    life: 1.0,\n' +
                '    color: "hsl(" + Math.floor(Math.random()*60+180) + ",90%,60%)"\n' +
                '  };\n' +
                '}\n\n' +
                'function updateFountain() {\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    particles[i].x += particles[i].vx;\n' +
                '    particles[i].y += particles[i].vy;\n' +
                '    particles[i].vy += 0.05;\n' +
                '    particles[i].life -= 0.01;\n' +
                '  }\n' +
                '  particles = particles.filter(function(p) { return p.life > 0; });\n' +
                '}',
              feedback: { perfect: '아름다운 파티클 분수에요! 중력 시뮬레이션을 완벽하게 구현했어요!', good: '분수가 잘 나와요! 중력 값을 조절해보세요.', partial: '파티클이 올라가지만 내려오지 않아요.', wrong: 'vy를 음수로 시작하고 매 프레임 vy += 0.05로 중력을 적용하세요.' }
            },
            {
              id: 'c5',
              title: '클릭 폭죽 + 마우스 궤적 종합',
              description: '클릭하면 폭죽이 터지고, 마우스 이동 시 궤적이 남는 종합 작품을 만드세요.',
              difficulty: 'hard',
              hints: ['click에서 폭죽 파티클 20개 생성', 'mousemove에서 궤적 파티클 2개 생성', '같은 배열에서 관리하세요'],
              estimatedMinutes: 8,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var particles = [];\n\n' +
                'canvas.addEventListener("click", function(e) {\n' +
                '  // TODO: 클릭 위치에 파티클 20개 생성\n' +
                '});\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  // TODO: 마우스 위치에 파티클 2개 생성\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.08)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  updateParticles();\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, 4*p.life, 0, Math.PI*2);\n' +
                '    ctx.fillStyle = p.color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var particles = [];\n\n' +
                'canvas.addEventListener("click", function(e) {\n' +
                '  addParticles(e.offsetX, e.offsetY, 20);\n' +
                '});\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  addParticles(e.offsetX, e.offsetY, 2);\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.08)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  updateParticles();\n' +
                '  for (var i = 0; i < particles.length; i++) {\n' +
                '    var p = particles[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(p.x, p.y, 4*p.life, 0, Math.PI*2);\n' +
                '    ctx.fillStyle = p.color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '놀라운 인터랙티브 아트에요!', good: '멋진 작품이에요! 파티클 수를 조절해보세요.', partial: '이벤트는 등록했지만 파티클이 생성되지 않아요.', wrong: 'addParticles(e.offsetX, e.offsetY, 20)으로 클릭 위치에 파티클을 생성하세요.' }
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
              title: '기본 게임 루프 이해',
              description: 'requestAnimationFrame을 사용한 기본 게임 루프를 완성하세요. update와 draw를 매 프레임 호출합니다.',
              difficulty: 'easy',
              hints: ['requestAnimationFrame(함수)로 다음 프레임을 예약해요', 'gameLoop 함수 안에서 자기 자신을 다시 호출해요', 'update -> draw -> 다음프레임 순서예요'],
              estimatedMinutes: 5,
              starterCode: 'function update() {\n' +
                '  // 게임 로직 업데이트\n' +
                '}\n' +
                '\n' +
                'function draw() {\n' +
                '  // 화면 그리기\n' +
                '}\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  // TODO: update 호출\n' +
                '  // TODO: draw 호출\n' +
                '  // TODO: 다음 프레임 예약\n' +
                '}\n' +
                '\n' +
                '// 게임 시작\n' +
                'gameLoop();',
              solution: 'function update() {\n' +
                '  // 게임 로직 업데이트\n' +
                '}\n' +
                '\n' +
                'function draw() {\n' +
                '  // 화면 그리기\n' +
                '}\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  update();\n' +
                '  draw();\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}\n' +
                '\n' +
                'gameLoop();',
              feedback: {
                perfect: '게임 루프의 기본 구조를 완벽하게 이해했어요!',
                good: '거의 맞았어요! 호출 순서를 확인해보세요.',
                partial: '일부 함수 호출이 빠졌어요.',
                wrong: 'update() -> draw() -> requestAnimationFrame(gameLoop) 순서로 호출하세요.'
              }
            },
            {
              id: 'c2',
              title: '델타 타임 계산하기',
              description: '프레임 간 시간 차이(deltaTime)를 계산하여 일정한 속도의 게임을 만드세요.',
              difficulty: 'easy',
              hints: ['Date.now()로 현재 시간(밀리초)을 얻어요', '이전 시간을 저장해두고 차이를 구하세요', 'deltaTime = (현재시간 - 이전시간) / 1000 으로 초 단위로 변환해요'],
              estimatedMinutes: 6,
              starterCode: 'var lastTime = Date.now();\n' +
                'var playerX = 0;\n' +
                'var speed = 100; // 초당 100픽셀\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  var now = Date.now();\n' +
                '  // TODO: deltaTime 계산 (초 단위)\n' +
                '  var deltaTime = ___;\n' +
                '  lastTime = now;\n' +
                '  // TODO: playerX를 speed * deltaTime만큼 이동\n' +
                '  playerX += ___;\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}',
              solution: 'var lastTime = Date.now();\n' +
                'var playerX = 0;\n' +
                'var speed = 100;\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  var now = Date.now();\n' +
                '  var deltaTime = (now - lastTime) / 1000;\n' +
                '  lastTime = now;\n' +
                '  playerX += speed * deltaTime;\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}',
              feedback: {
                perfect: '델타 타임을 완벽하게 구현했어요! 어떤 FPS에서도 일정한 속도를 보장해요!',
                good: '잘했어요! 밀리초를 초로 변환하는 부분을 확인하세요.',
                partial: '시간 차이는 구했지만 단위 변환이 빠졌어요.',
                wrong: '(now - lastTime) / 1000 으로 밀리초를 초로 변환하세요.'
              }
            },
            {
              id: 'c3',
              title: '게임 상태 머신 만들기',
              description: '게임의 상태(메뉴, 플레이, 일시정지, 게임오버)를 관리하는 상태 머신을 구현하세요.',
              difficulty: 'medium',
              hints: ['상태를 문자열 변수로 관리하세요', 'switch문으로 상태별 로직을 분기하세요', '상태 전환 조건을 명확히 하세요'],
              estimatedMinutes: 10,
              starterCode: 'var gameState = "menu";\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  // TODO: switch문으로 gameState에 따라 다른 함수 호출\n' +
                '  // "menu" -> updateMenu()\n' +
                '  // "playing" -> updateGame()\n' +
                '  // "paused" -> updatePause()\n' +
                '  // "gameover" -> updateGameOver()\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}\n' +
                '\n' +
                'function changeState(newState) {\n' +
                '  // TODO: 유효한 상태인지 확인 후 변경\n' +
                '}',
              solution: 'var gameState = "menu";\n' +
                'var validStates = ["menu", "playing", "paused", "gameover"];\n' +
                '\n' +
                'function gameLoop() {\n' +
                '  switch (gameState) {\n' +
                '    case "menu": updateMenu(); break;\n' +
                '    case "playing": updateGame(); break;\n' +
                '    case "paused": updatePause(); break;\n' +
                '    case "gameover": updateGameOver(); break;\n' +
                '  }\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}\n' +
                '\n' +
                'function changeState(newState) {\n' +
                '  if (validStates.indexOf(newState) !== -1) {\n' +
                '    gameState = newState;\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '게임 상태 머신을 완벽하게 구현했어요! 체계적인 게임 관리가 가능해요!',
                good: '잘했어요! 상태 검증 로직을 추가하면 더 안전해요.',
                partial: 'switch문은 맞지만 상태 전환 검증이 빠졌어요.',
                wrong: 'switch(gameState)로 분기하고 각 case에서 해당 함수를 호출하세요.'
              }
            },
            {
              id: 'c4',
              title: 'FPS 카운터 구현',
              description: '현재 FPS(초당 프레임 수)를 계산하고 화면에 표시하는 기능을 구현하세요.',
              difficulty: 'medium',
              hints: ['1초 동안의 프레임 수를 세세요', '1초마다 카운터를 리셋하세요', 'ctx.fillText로 FPS를 표시하세요'],
              estimatedMinutes: 10,
              starterCode: 'var frameCount = 0;\n' +
                'var fps = 0;\n' +
                'var lastFpsTime = Date.now();\n' +
                '\n' +
                'function updateFPS() {\n' +
                '  frameCount++;\n' +
                '  var now = Date.now();\n' +
                '  // TODO: 1초(1000ms) 지났으면 fps 계산 후 리셋\n' +
                '}\n' +
                '\n' +
                'function drawFPS(ctx) {\n' +
                '  // TODO: 화면 좌상단에 FPS 표시\n' +
                '}',
              solution: 'var frameCount = 0;\n' +
                'var fps = 0;\n' +
                'var lastFpsTime = Date.now();\n' +
                '\n' +
                'function updateFPS() {\n' +
                '  frameCount++;\n' +
                '  var now = Date.now();\n' +
                '  if (now - lastFpsTime >= 1000) {\n' +
                '    fps = frameCount;\n' +
                '    frameCount = 0;\n' +
                '    lastFpsTime = now;\n' +
                '  }\n' +
                '}\n' +
                '\n' +
                'function drawFPS(ctx) {\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.font = "16px Arial";\n' +
                '  ctx.fillText("FPS: " + fps, 10, 20);\n' +
                '}',
              feedback: {
                perfect: 'FPS 카운터를 완벽하게 구현했어요! 게임 성능 모니터링의 기초예요!',
                good: '좋아요! 1초마다 리셋하는 타이밍을 확인해보세요.',
                partial: '프레임 카운팅은 되지만 1초 간격 리셋이 정확하지 않아요.',
                wrong: 'if (now - lastFpsTime >= 1000)로 1초 체크 후 fps = frameCount로 저장하세요.'
              }
            },
            {
              id: 'c5',
              title: '고정 시간 스텝 게임 루프',
              description: '물리 시뮬레이션을 위한 고정 시간 스텝(fixed timestep) 게임 루프를 구현하세요.',
              difficulty: 'hard',
              hints: ['물리 업데이트는 고정 간격(16ms)으로 실행해요', '누적된 시간이 간격보다 크면 여러 번 업데이트해요', '렌더링은 매 프레임 한 번이에요'],
              estimatedMinutes: 15,
              starterCode: 'var FIXED_STEP = 1 / 60; // 60fps 고정\n' +
                'var accumulator = 0;\n' +
                'var lastTime = Date.now();\n' +
                '\n' +
                'function fixedGameLoop() {\n' +
                '  var now = Date.now();\n' +
                '  var delta = (now - lastTime) / 1000;\n' +
                '  lastTime = now;\n' +
                '  // TODO: delta를 accumulator에 누적\n' +
                '  // TODO: accumulator >= FIXED_STEP 동안 반복 업데이트\n' +
                '  // TODO: draw 한 번 호출\n' +
                '  requestAnimationFrame(fixedGameLoop);\n' +
                '}',
              solution: 'var FIXED_STEP = 1 / 60;\n' +
                'var accumulator = 0;\n' +
                'var lastTime = Date.now();\n' +
                '\n' +
                'function fixedGameLoop() {\n' +
                '  var now = Date.now();\n' +
                '  var delta = (now - lastTime) / 1000;\n' +
                '  lastTime = now;\n' +
                '  accumulator += delta;\n' +
                '  while (accumulator >= FIXED_STEP) {\n' +
                '    update(FIXED_STEP);\n' +
                '    accumulator -= FIXED_STEP;\n' +
                '  }\n' +
                '  draw();\n' +
                '  requestAnimationFrame(fixedGameLoop);\n' +
                '}',
              feedback: {
                perfect: '고정 시간 스텝 루프를 완벽하게 구현했어요! 프로 게임 엔진과 같은 방식이에요!',
                good: '좋은 구조예요! while 루프의 조건이나 누적 감소를 확인하세요.',
                partial: '누적은 되지만 고정 스텝 반복 로직이 불완전해요.',
                wrong: 'accumulator += delta 후 while(accumulator >= FIXED_STEP)로 반복 업데이트하세요.'
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
              id: 'c1',
              title: '키 이벤트 감지하기',
              description: 'keydown 이벤트를 등록해서 어떤 키가 눌렸는지 표시하세요.',
              difficulty: 'easy',
              hints: ['document.addEventListener("keydown", ...)를 사용하세요', 'e.key로 눌린 키 이름을 얻을 수 있어요', 'textContent로 화면에 표시하세요'],
              estimatedMinutes: 4,
              starterCode: 'var display = document.getElementById("display");\n\n' +
                '// TODO: keydown 이벤트 리스너 등록\n' +
                '// 눌린 키를 display.textContent에 표시\n',
              solution: 'var display = document.getElementById("display");\n\n' +
                'document.addEventListener("keydown", function(e) {\n' +
                '  display.textContent = "눌린 키: " + e.key;\n' +
                '});',
              feedback: { perfect: '키 이벤트를 완벽하게 감지해요!', good: '이벤트가 잘 등록됐어요!', partial: '이벤트는 등록했지만 키 이름이 표시되지 않아요.', wrong: 'document.addEventListener("keydown", function(e) { ... })를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '방향키로 사각형 이동',
              description: '방향키를 누르면 사각형이 해당 방향으로 이동하도록 만드세요.',
              difficulty: 'easy',
              hints: ['ArrowUp, ArrowDown, ArrowLeft, ArrowRight를 확인하세요', 'if-else로 각 방향별 이동을 처리하세요', '이동 후 화면을 다시 그려야 해요'],
              estimatedMinutes: 5,
              starterCode: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 190, y = 190;\n\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "blue";\n' +
                '  ctx.fillRect(x, y, 20, 20);\n' +
                '}\n\n' +
                'document.addEventListener("keydown", function(e) {\n' +
                '  // TODO: ArrowUp이면 y -= 5\n' +
                '  // TODO: ArrowDown이면 y += 5\n' +
                '  // TODO: ArrowLeft이면 x -= 5\n' +
                '  // TODO: ArrowRight이면 x += 5\n' +
                '  draw();\n' +
                '});\n' +
                'draw();',
              solution: 'var canvas = document.getElementById("canvas");\n' +
                'var ctx = canvas.getContext("2d");\n' +
                'var x = 190, y = 190;\n\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "blue";\n' +
                '  ctx.fillRect(x, y, 20, 20);\n' +
                '}\n\n' +
                'document.addEventListener("keydown", function(e) {\n' +
                '  if (e.key === "ArrowUp") y -= 5;\n' +
                '  else if (e.key === "ArrowDown") y += 5;\n' +
                '  else if (e.key === "ArrowLeft") x -= 5;\n' +
                '  else if (e.key === "ArrowRight") x += 5;\n' +
                '  draw();\n' +
                '});\n' +
                'draw();',
              feedback: { perfect: '방향키로 완벽하게 이동해요!', good: '이동은 되지만 일부 방향이 빠졌어요.', partial: '키 이벤트는 잡지만 이동이 안 돼요.', wrong: 'if (e.key === "ArrowUp") y -= 5; 형태로 4방향을 모두 처리하세요.' }
            },
            {
              id: 'c3',
              title: '동시 키 입력 처리',
              description: 'keys 객체로 여러 키를 동시에 추적하여 대각선 이동을 가능하게 만드세요.',
              difficulty: 'medium',
              hints: ['keydown에서 true, keyup에서 false를 저장하세요', 'animate 루프에서 keys 상태를 확인하세요', '대각선은 두 조건이 동시에 true일 때에요'],
              estimatedMinutes: 7,
              starterCode: 'var x = 190, y = 190, speed = 3;\n' +
                'var keys = {};\n\n' +
                'document.addEventListener("keydown", function(e) {\n' +
                '  // TODO: keys[e.key] = true\n' +
                '});\n' +
                'document.addEventListener("keyup", function(e) {\n' +
                '  // TODO: keys[e.key] = false\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  if (keys["ArrowUp"]) y -= speed;\n' +
                '  if (keys["ArrowDown"]) y += speed;\n' +
                '  if (keys["ArrowLeft"]) x -= speed;\n' +
                '  if (keys["ArrowRight"]) x += speed;\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "green";\n' +
                '  ctx.fillRect(x, y, 20, 20);\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              solution: 'var x = 190, y = 190, speed = 3;\n' +
                'var keys = {};\n\n' +
                'document.addEventListener("keydown", function(e) {\n' +
                '  keys[e.key] = true;\n' +
                '});\n' +
                'document.addEventListener("keyup", function(e) {\n' +
                '  keys[e.key] = false;\n' +
                '});\n\n' +
                'function animate() {\n' +
                '  if (keys["ArrowUp"]) y -= speed;\n' +
                '  if (keys["ArrowDown"]) y += speed;\n' +
                '  if (keys["ArrowLeft"]) x -= speed;\n' +
                '  if (keys["ArrowRight"]) x += speed;\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "green";\n' +
                '  ctx.fillRect(x, y, 20, 20);\n' +
                '  requestAnimationFrame(animate);\n' +
                '}\n' +
                'animate();',
              feedback: { perfect: '동시 입력 처리를 완벽하게 했어요!', good: '잘했어요! keyup도 잊지 마세요.', partial: 'keydown은 되지만 keyup이 없어요.', wrong: 'keydown에서 keys[e.key]=true, keyup에서 keys[e.key]=false를 설정하세요.' }
            },
            {
              id: 'c4',
              title: '화면 경계 제한',
              description: '플레이어가 캔버스 밖으로 나가지 않도록 경계를 제한하세요.',
              difficulty: 'medium',
              hints: ['Math.max와 Math.min을 사용하세요', 'x는 0 이상, 캔버스너비-크기 이하', 'y도 같은 방식으로 제한하세요'],
              estimatedMinutes: 5,
              starterCode: 'var canvasW = 400, canvasH = 400;\n' +
                'var pw = 20, ph = 20;\n' +
                'var x = 190, y = 190;\n\n' +
                'function clampPosition() {\n' +
                '  // TODO: x를 0 ~ (canvasW-pw) 범위로 제한\n' +
                '  // TODO: y를 0 ~ (canvasH-ph) 범위로 제한\n' +
                '}',
              solution: 'var canvasW = 400, canvasH = 400;\n' +
                'var pw = 20, ph = 20;\n' +
                'var x = 190, y = 190;\n\n' +
                'function clampPosition() {\n' +
                '  x = Math.max(0, Math.min(x, canvasW - pw));\n' +
                '  y = Math.max(0, Math.min(y, canvasH - ph));\n' +
                '}',
              feedback: { perfect: '경계 처리를 완벽하게 했어요!', good: '한 방향은 잘 되지만 다른 방향을 확인하세요.', partial: 'x만 제한하고 y는 빠졌어요.', wrong: 'Math.max(0, Math.min(x, canvasW - pw))로 범위를 제한하세요.' }
            },
            {
              id: 'c5',
              title: '스프린트 기능 추가',
              description: 'Shift 키를 누르고 있으면 이동 속도가 2배가 되는 스프린트 기능을 추가하세요.',
              difficulty: 'hard',
              hints: ['keys["Shift"]가 true이면 속도를 2배로', '기본 속도와 스프린트 속도를 분리하세요', 'Shift를 떼면 원래 속도로 돌아와야 해요'],
              estimatedMinutes: 6,
              starterCode: 'var baseSpeed = 3;\n' +
                'var keys = {};\n' +
                'var x = 190, y = 190;\n\n' +
                'function update() {\n' +
                '  // TODO: Shift면 baseSpeed*2, 아니면 baseSpeed\n' +
                '  var currentSpeed = ___;\n' +
                '  if (keys["ArrowUp"]) y -= currentSpeed;\n' +
                '  if (keys["ArrowDown"]) y += currentSpeed;\n' +
                '  if (keys["ArrowLeft"]) x -= currentSpeed;\n' +
                '  if (keys["ArrowRight"]) x += currentSpeed;\n' +
                '}',
              solution: 'var baseSpeed = 3;\n' +
                'var keys = {};\n' +
                'var x = 190, y = 190;\n\n' +
                'function update() {\n' +
                '  var currentSpeed = keys["Shift"] ? baseSpeed * 2 : baseSpeed;\n' +
                '  if (keys["ArrowUp"]) y -= currentSpeed;\n' +
                '  if (keys["ArrowDown"]) y += currentSpeed;\n' +
                '  if (keys["ArrowLeft"]) x -= currentSpeed;\n' +
                '  if (keys["ArrowRight"]) x += currentSpeed;\n' +
                '}',
              feedback: { perfect: '스프린트 기능을 완벽하게 구현했어요!', good: '속도 변화가 잘 돼요!', partial: '항상 빠른 속도이거나 항상 느려요.', wrong: 'keys["Shift"] ? baseSpeed * 2 : baseSpeed 로 조건부 속도를 설정하세요.' }
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
              id: 'c1',
              title: '두 점 사이 거리 계산',
              description: '두 점 (x1,y1)과 (x2,y2) 사이의 거리를 계산하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['피타고라스 정리를 사용하세요', 'Math.sqrt와 곱셈을 사용하세요', '이것이 원형 충돌 감지의 기본이에요'],
              estimatedMinutes: 4,
              starterCode: 'function distance(x1, y1, x2, y2) {\n' +
                '  var dx = ___;  // x2 - x1\n' +
                '  var dy = ___;  // y2 - y1\n' +
                '  return ___;   // sqrt(dx*dx + dy*dy)\n' +
                '}',
              solution: 'function distance(x1, y1, x2, y2) {\n' +
                '  var dx = x2 - x1;\n' +
                '  var dy = y2 - y1;\n' +
                '  return Math.sqrt(dx * dx + dy * dy);\n' +
                '}',
              feedback: { perfect: '거리 계산을 완벽하게 했어요!', good: '거의 맞았어요! 제곱근을 잊지 마세요.', partial: '차이값은 구했지만 제곱합의 제곱근을 계산하세요.', wrong: 'Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))로 거리를 구하세요.' }
            },
            {
              id: 'c2',
              title: '원과 원의 충돌 감지',
              description: '두 원이 겹치는지 확인하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['distance 함수로 중심 간 거리를 구하세요', '거리 < 반지름1 + 반지름2 이면 충돌', '등호도 충돌로 판정하세요'],
              estimatedMinutes: 5,
              starterCode: 'function circleCollision(c1, c2) {\n' +
                '  var dist = distance(c1.x, c1.y, c2.x, c2.y);\n' +
                '  // TODO: 거리와 반지름 합 비교\n' +
                '  return ___;\n' +
                '}',
              solution: 'function circleCollision(c1, c2) {\n' +
                '  var dist = distance(c1.x, c1.y, c2.x, c2.y);\n' +
                '  return dist <= c1.r + c2.r;\n' +
                '}',
              feedback: { perfect: '원형 충돌 감지를 완벽하게 구현했어요!', good: '잘했어요! 경계 조건도 처리하면 더 정확해요.', partial: '거리는 구했지만 비교가 빠졌어요.', wrong: 'return dist <= c1.r + c2.r;로 반지름 합과 비교하세요.' }
            },
            {
              id: 'c3',
              title: 'AABB 사각형 충돌 감지',
              description: '두 사각형(x,y,w,h)이 겹치는지 확인하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['4가지 비충돌 조건 중 하나라도 해당되면 false', 'r1.x+r1.w < r2.x 이면 r1이 왼쪽', '상하좌우 모두 확인하세요'],
              estimatedMinutes: 7,
              starterCode: 'function rectCollision(r1, r2) {\n' +
                '  if (r1.x + r1.w < r2.x) return false;\n' +
                '  if (___) return false;  // r1이 오른쪽\n' +
                '  if (___) return false;  // r1이 위쪽\n' +
                '  if (___) return false;  // r1이 아래쪽\n' +
                '  return true;\n' +
                '}',
              solution: 'function rectCollision(r1, r2) {\n' +
                '  if (r1.x + r1.w < r2.x) return false;\n' +
                '  if (r1.x > r2.x + r2.w) return false;\n' +
                '  if (r1.y + r1.h < r2.y) return false;\n' +
                '  if (r1.y > r2.y + r2.h) return false;\n' +
                '  return true;\n' +
                '}',
              feedback: { perfect: 'AABB 충돌 감지를 완벽하게 구현했어요!', good: '거의 맞았어요! 하나의 조건을 다시 확인하세요.', partial: '일부 방향만 확인했어요.', wrong: '4방향 비충돌 조건을 모두 확인 후 true를 반환하세요.' }
            },
            {
              id: 'c4',
              title: '충돌 시 색상 변경',
              description: '마우스로 움직이는 원이 고정 원과 충돌하면 빨간색으로 변하게 만드세요.',
              difficulty: 'medium',
              hints: ['mousemove로 좌표 업데이트', 'circleCollision으로 충돌 확인', '충돌이면 red, 아니면 green'],
              estimatedMinutes: 6,
              starterCode: 'var player = { x: 200, y: 200, r: 20 };\n' +
                'var target = { x: 300, y: 250, r: 30 };\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  player.x = e.offsetX;\n' +
                '  player.y = e.offsetY;\n' +
                '});\n\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  var hit = ___;  // circleCollision 호출\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(player.x, player.y, player.r, 0, Math.PI*2);\n' +
                '  ctx.fillStyle = hit ? "red" : "green";\n' +
                '  ctx.fill();\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);\n' +
                '  ctx.fillStyle = "orange";\n' +
                '  ctx.fill();\n' +
                '  requestAnimationFrame(draw);\n' +
                '}\n' +
                'draw();',
              solution: 'var player = { x: 200, y: 200, r: 20 };\n' +
                'var target = { x: 300, y: 250, r: 30 };\n\n' +
                'canvas.addEventListener("mousemove", function(e) {\n' +
                '  player.x = e.offsetX;\n' +
                '  player.y = e.offsetY;\n' +
                '});\n\n' +
                'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  var hit = circleCollision(player, target);\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(player.x, player.y, player.r, 0, Math.PI*2);\n' +
                '  ctx.fillStyle = hit ? "red" : "green";\n' +
                '  ctx.fill();\n' +
                '  ctx.beginPath();\n' +
                '  ctx.arc(target.x, target.y, target.r, 0, Math.PI*2);\n' +
                '  ctx.fillStyle = "orange";\n' +
                '  ctx.fill();\n' +
                '  requestAnimationFrame(draw);\n' +
                '}\n' +
                'draw();',
              feedback: { perfect: '충돌 시각화를 완벽하게 했어요!', good: '충돌 감지는 되지만 색상 변경을 확인하세요.', partial: '원은 그려지지만 충돌 판정이 없어요.', wrong: 'var hit = circleCollision(player, target);로 충돌 여부를 확인하세요.' }
            },
            {
              id: 'c5',
              title: '다중 적 충돌 처리',
              description: '여러 적 원과 플레이어의 충돌을 감지하고 충돌한 적을 제거하세요.',
              difficulty: 'hard',
              hints: ['적 배열을 filter로 처리하세요', '충돌하지 않은 적만 남기세요', '제거된 수만큼 점수를 올리세요'],
              estimatedMinutes: 8,
              starterCode: 'var player = { x: 200, y: 200, r: 15 };\n' +
                'var enemies = [];\n' +
                'var score = 0;\n\n' +
                'for (var i = 0; i < 5; i++) {\n' +
                '  enemies.push({ x: Math.random()*360+20, y: Math.random()*360+20, r: 10 });\n' +
                '}\n\n' +
                'function checkCollisions() {\n' +
                '  var before = enemies.length;\n' +
                '  // TODO: 충돌하지 않은 적만 남기기\n' +
                '  enemies = ___;\n' +
                '  // TODO: 제거된 수만큼 score 증가\n' +
                '  score += ___;\n' +
                '}',
              solution: 'var player = { x: 200, y: 200, r: 15 };\n' +
                'var enemies = [];\n' +
                'var score = 0;\n\n' +
                'for (var i = 0; i < 5; i++) {\n' +
                '  enemies.push({ x: Math.random()*360+20, y: Math.random()*360+20, r: 10 });\n' +
                '}\n\n' +
                'function checkCollisions() {\n' +
                '  var before = enemies.length;\n' +
                '  enemies = enemies.filter(function(e) { return !circleCollision(player, e); });\n' +
                '  score += before - enemies.length;\n' +
                '}',
              feedback: { perfect: '다중 충돌 처리를 완벽하게 했어요!', good: '충돌 감지는 되는데 점수 계산을 확인하세요.', partial: '충돌은 감지하지만 적이 제거되지 않아요.', wrong: 'enemies.filter(function(e) { return !circleCollision(player, e); })로 충돌한 적을 제거하세요.' }
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
              id: 'c1',
              title: '점수 변수 관리',
              description: '점수를 저장하고 증감하는 기본 점수 시스템을 만드세요.',
              difficulty: 'easy',
              hints: ['score 변수를 0으로 초기화하세요', 'addScore에서 더하세요', '음수 방지에 Math.max(0, ...)를 사용하세요'],
              estimatedMinutes: 4,
              starterCode: 'var score = 0;\n\n' +
                'function addScore(points) {\n' +
                '  // TODO: score에 points 더하기\n' +
                '}\n\n' +
                'function loseScore(points) {\n' +
                '  // TODO: score에서 빼기 (0 미만 방지)\n' +
                '}\n\n' +
                'function getScore() { return score; }',
              solution: 'var score = 0;\n\n' +
                'function addScore(points) {\n' +
                '  score += points;\n' +
                '}\n\n' +
                'function loseScore(points) {\n' +
                '  score = Math.max(0, score - points);\n' +
                '}\n\n' +
                'function getScore() { return score; }',
              feedback: { perfect: '점수 시스템의 기본을 완벽하게 만들었어요!', good: '점수 증감은 되지만 음수 방지를 추가하세요.', partial: '더하기만 되고 빼기가 안 돼요.', wrong: 'score += points로 더하고, Math.max(0, score - points)로 빼세요.' }
            },
            {
              id: 'c2',
              title: '점수 화면에 표시',
              description: '캔버스에 현재 점수를 표시하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['ctx.font로 글꼴을 설정하세요', 'ctx.fillText로 텍스트를 그리세요', '좌상단에 표시하면 좋아요'],
              estimatedMinutes: 4,
              starterCode: 'function drawScore(ctx, score) {\n' +
                '  // TODO: 글꼴 설정 (20px Arial)\n' +
                '  // TODO: 흰색으로 설정\n' +
                '  // TODO: "Score: "+score를 (10,30)에 표시\n' +
                '}',
              solution: 'function drawScore(ctx, score) {\n' +
                '  ctx.font = "20px Arial";\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.fillText("Score: " + score, 10, 30);\n' +
                '}',
              feedback: { perfect: '깔끔한 점수 표시에요!', good: '표시는 되는데 위치를 조정해보세요.', partial: '글꼴은 설정했지만 텍스트가 안 보여요.', wrong: 'ctx.fillText("Score: " + score, 10, 30)을 사용하세요.' }
            },
            {
              id: 'c3',
              title: '최고 점수 저장',
              description: 'localStorage로 최고 점수를 저장하고 불러오는 기능을 만드세요.',
              difficulty: 'medium',
              hints: ['localStorage.setItem으로 저장하세요', 'localStorage.getItem으로 불러오세요', '값이 없으면 0을 기본값으로 사용하세요'],
              estimatedMinutes: 6,
              starterCode: 'function saveHighScore(score) {\n' +
                '  var current = getHighScore();\n' +
                '  if (score > current) {\n' +
                '    // TODO: localStorage에 저장\n' +
                '  }\n' +
                '}\n\n' +
                'function getHighScore() {\n' +
                '  // TODO: localStorage에서 가져오기 (없으면 0)\n' +
                '  return ___;\n' +
                '}',
              solution: 'function saveHighScore(score) {\n' +
                '  var current = getHighScore();\n' +
                '  if (score > current) {\n' +
                '    localStorage.setItem("highScore", score);\n' +
                '  }\n' +
                '}\n\n' +
                'function getHighScore() {\n' +
                '  return parseInt(localStorage.getItem("highScore")) || 0;\n' +
                '}',
              feedback: { perfect: '최고 점수 저장을 완벽하게 했어요!', good: '저장은 되는데 불러오기 타입 변환을 확인하세요.', partial: 'localStorage 사용법을 다시 확인하세요.', wrong: 'localStorage.setItem("highScore", score)로 저장하세요.' }
            },
            {
              id: 'c4',
              title: '콤보 시스템 구현',
              description: '연속 처치 시 콤보가 쌓이고 보너스 점수를 주는 시스템을 만드세요.',
              difficulty: 'medium',
              hints: ['combo로 연속 횟수 추적', '처치 시 combo++, 놓치면 0', '점수 = 기본점수 * (1 + combo * 0.1)'],
              estimatedMinutes: 6,
              starterCode: 'var score = 0;\n' +
                'var combo = 0;\n\n' +
                'function onEnemyKill(basePoints) {\n' +
                '  // TODO: combo 증가\n' +
                '  // TODO: 배율 계산: 1 + combo * 0.1\n' +
                '  // TODO: score에 basePoints * 배율 더하기\n' +
                '}\n\n' +
                'function onMiss() {\n' +
                '  // TODO: combo 리셋\n' +
                '}',
              solution: 'var score = 0;\n' +
                'var combo = 0;\n\n' +
                'function onEnemyKill(basePoints) {\n' +
                '  combo++;\n' +
                '  var multiplier = 1 + combo * 0.1;\n' +
                '  score += Math.floor(basePoints * multiplier);\n' +
                '}\n\n' +
                'function onMiss() {\n' +
                '  combo = 0;\n' +
                '}',
              feedback: { perfect: '콤보 시스템을 완벽하게 만들었어요!', good: '콤보는 올라가는데 배율 계산을 확인하세요.', partial: 'combo 증가는 되지만 점수에 반영이 안 돼요.', wrong: 'combo++ 후 multiplier = 1 + combo * 0.1로 계산하세요.' }
            },
            {
              id: 'c5',
              title: '점수 팝업 효과',
              description: '점수 획득 시 "+10" 텍스트가 떠올랐다 사라지는 효과를 만드세요.',
              difficulty: 'hard',
              hints: ['팝업 객체에 x, y, text, life 속성을 넣으세요', '매 프레임 y를 줄여서 위로 올리세요', 'life를 투명도로 사용하세요'],
              estimatedMinutes: 7,
              starterCode: 'var popups = [];\n\n' +
                'function createPopup(x, y, text) {\n' +
                '  popups.push({ x: x, y: y, text: text, life: 1.0 });\n' +
                '}\n\n' +
                'function updatePopups() {\n' +
                '  for (var i = 0; i < popups.length; i++) {\n' +
                '    // TODO: y를 1씩 감소\n' +
                '    // TODO: life를 0.02씩 감소\n' +
                '  }\n' +
                '  // TODO: life > 0인 것만 남기기\n' +
                '}\n\n' +
                'function drawPopups(ctx) {\n' +
                '  ctx.font = "16px Arial";\n' +
                '  for (var i = 0; i < popups.length; i++) {\n' +
                '    var p = popups[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.fillStyle = "yellow";\n' +
                '    ctx.fillText(p.text, p.x, p.y);\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '}',
              solution: 'var popups = [];\n\n' +
                'function createPopup(x, y, text) {\n' +
                '  popups.push({ x: x, y: y, text: text, life: 1.0 });\n' +
                '}\n\n' +
                'function updatePopups() {\n' +
                '  for (var i = 0; i < popups.length; i++) {\n' +
                '    popups[i].y -= 1;\n' +
                '    popups[i].life -= 0.02;\n' +
                '  }\n' +
                '  popups = popups.filter(function(p) { return p.life > 0; });\n' +
                '}\n\n' +
                'function drawPopups(ctx) {\n' +
                '  ctx.font = "16px Arial";\n' +
                '  for (var i = 0; i < popups.length; i++) {\n' +
                '    var p = popups[i];\n' +
                '    ctx.globalAlpha = p.life;\n' +
                '    ctx.fillStyle = "yellow";\n' +
                '    ctx.fillText(p.text, p.x, p.y);\n' +
                '  }\n' +
                '  ctx.globalAlpha = 1;\n' +
                '}',
              feedback: { perfect: '점수 팝업 효과가 완벽해요!', good: '팝업은 보이지만 위로 올라가는 효과를 확인하세요.', partial: '팝업이 생기지만 사라지지 않아요.', wrong: 'y -= 1로 위로 올리고 life -= 0.02로 서서히 사라지게 하세요.' }
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
              id: 'c1',
              title: '적 객체 생성 함수',
              description: '랜덤 위치와 속도를 가진 적 객체를 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['x는 0~400 랜덤, y는 화면 위(-20)에서 시작', 'speed는 1~3 사이 랜덤', '객체에 x, y, speed, r 속성을 넣으세요'],
              estimatedMinutes: 4,
              starterCode: 'function createEnemy() {\n' +
                '  return {\n' +
                '    x: ___,    // 0~400 랜덤\n' +
                '    y: ___,    // 화면 위에서 시작\n' +
                '    speed: ___, // 1~3 랜덤\n' +
                '    r: 15\n' +
                '  };\n' +
                '}',
              solution: 'function createEnemy() {\n' +
                '  return {\n' +
                '    x: Math.random() * 400,\n' +
                '    y: -20,\n' +
                '    speed: Math.random() * 2 + 1,\n' +
                '    r: 15\n' +
                '  };\n' +
                '}',
              feedback: { perfect: '적 객체를 완벽하게 만들었어요!', good: '잘 만들었어요! 시작 위치를 확인하세요.', partial: '객체는 만들었지만 랜덤 값이 없어요.', wrong: 'Math.random() * 400으로 x를, -20으로 y를 설정하세요.' }
            },
            {
              id: 'c2',
              title: '적 배열에 주기적으로 추가',
              description: '일정 간격으로 적을 생성하여 배열에 추가하는 로직을 만드세요.',
              difficulty: 'easy',
              hints: ['프레임 카운터로 간격을 조절하세요', '60프레임(약 1초)마다 적 추가', '% 연산자로 주기를 확인하세요'],
              estimatedMinutes: 5,
              starterCode: 'var enemies = [];\n' +
                'var frameCount = 0;\n' +
                'var spawnInterval = 60;\n\n' +
                'function spawnEnemies() {\n' +
                '  frameCount++;\n' +
                '  // TODO: frameCount가 spawnInterval의 배수이면 적 추가\n' +
                '  if (___) {\n' +
                '    enemies.push(createEnemy());\n' +
                '  }\n' +
                '}',
              solution: 'var enemies = [];\n' +
                'var frameCount = 0;\n' +
                'var spawnInterval = 60;\n\n' +
                'function spawnEnemies() {\n' +
                '  frameCount++;\n' +
                '  if (frameCount % spawnInterval === 0) {\n' +
                '    enemies.push(createEnemy());\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '주기적 적 생성을 완벽하게 구현했어요!', good: '적이 생성돼요! 간격을 조정해보세요.', partial: '프레임은 세지만 조건이 맞지 않아요.', wrong: 'frameCount % spawnInterval === 0으로 주기를 확인하세요.' }
            },
            {
              id: 'c3',
              title: '적 이동 및 화면 밖 제거',
              description: '적을 아래로 이동시키고, 화면 밖으로 나간 적을 배열에서 제거하세요.',
              difficulty: 'medium',
              hints: ['y += speed로 아래로 이동시키세요', 'y > 420이면 화면 밖이에요', 'filter로 화면 안의 적만 남기세요'],
              estimatedMinutes: 6,
              starterCode: 'function updateEnemies() {\n' +
                '  for (var i = 0; i < enemies.length; i++) {\n' +
                '    // TODO: 아래로 이동\n' +
                '  }\n' +
                '  // TODO: 화면 안의 적만 남기기 (y < 420)\n' +
                '  enemies = ___;\n' +
                '}',
              solution: 'function updateEnemies() {\n' +
                '  for (var i = 0; i < enemies.length; i++) {\n' +
                '    enemies[i].y += enemies[i].speed;\n' +
                '  }\n' +
                '  enemies = enemies.filter(function(e) { return e.y < 420; });\n' +
                '}',
              feedback: { perfect: '적 이동과 제거를 완벽하게 했어요!', good: '이동은 되지만 화면 밖 제거를 확인하세요.', partial: '적이 움직이지 않아요. y += speed를 추가하세요.', wrong: 'enemies[i].y += enemies[i].speed로 이동, filter로 y < 420인 적만 남기세요.' }
            },
            {
              id: 'c4',
              title: '적 그리기 함수',
              description: '배열의 모든 적을 캔버스에 빨간 원으로 그리는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['for문으로 배열을 순회하세요', 'arc()로 원을 그리세요', 'fillStyle을 red로 설정하세요'],
              estimatedMinutes: 5,
              starterCode: 'function drawEnemies(ctx) {\n' +
                '  ctx.fillStyle = "red";\n' +
                '  for (var i = 0; i < enemies.length; i++) {\n' +
                '    var e = enemies[i];\n' +
                '    // TODO: beginPath, arc, fill로 원 그리기\n' +
                '  }\n' +
                '}',
              solution: 'function drawEnemies(ctx) {\n' +
                '  ctx.fillStyle = "red";\n' +
                '  for (var i = 0; i < enemies.length; i++) {\n' +
                '    var e = enemies[i];\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '적 그리기를 완벽하게 했어요!', good: '원이 보여요! 크기를 확인하세요.', partial: '루프는 돌지만 원이 안 그려져요.', wrong: 'ctx.beginPath(); ctx.arc(e.x, e.y, e.r, 0, Math.PI*2); ctx.fill();로 그리세요.' }
            },
            {
              id: 'c5',
              title: '난이도 증가 적 생성',
              description: '시간이 지나면 적 생성 간격이 줄어들고 속도가 빨라지는 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['spawnInterval을 서서히 줄이세요', '최소 간격(예: 20)을 설정하세요', '시간에 따라 적 속도 보너스를 추가하세요'],
              estimatedMinutes: 7,
              starterCode: 'var spawnInterval = 60;\n' +
                'var minInterval = 20;\n' +
                'var difficultyTimer = 0;\n\n' +
                'function increaseDifficulty() {\n' +
                '  difficultyTimer++;\n' +
                '  // TODO: 300프레임(5초)마다 spawnInterval을 5 줄이기\n' +
                '  // TODO: minInterval 미만으로 내려가지 않게\n' +
                '}',
              solution: 'var spawnInterval = 60;\n' +
                'var minInterval = 20;\n' +
                'var difficultyTimer = 0;\n\n' +
                'function increaseDifficulty() {\n' +
                '  difficultyTimer++;\n' +
                '  if (difficultyTimer % 300 === 0) {\n' +
                '    spawnInterval = Math.max(minInterval, spawnInterval - 5);\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '난이도 증가를 완벽하게 구현했어요! 게임이 점점 어려워져요!', good: '난이도가 올라가요! 최소 간격 제한을 확인하세요.', partial: '간격은 줄지만 제한이 없어서 0 이하로 내려가요.', wrong: 'Math.max(minInterval, spawnInterval - 5)로 최소값을 보장하세요.' }
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
              id: 'c1',
              title: '게임 오버 변수 관리',
              description: 'isGameOver 변수로 게임 상태를 관리하고, 게임 오버 시 루프를 멈추는 코드를 작성하세요.',
              difficulty: 'easy',
              hints: ['isGameOver가 true이면 requestAnimationFrame을 호출하지 마세요', '조건문으로 분기하세요', 'return으로 함수를 일찍 종료하세요'],
              estimatedMinutes: 4,
              starterCode: 'var isGameOver = false;\n\n' +
                'function gameLoop() {\n' +
                '  // TODO: isGameOver가 true이면 return\n' +
                '  update();\n' +
                '  draw();\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}',
              solution: 'var isGameOver = false;\n\n' +
                'function gameLoop() {\n' +
                '  if (isGameOver) return;\n' +
                '  update();\n' +
                '  draw();\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}',
              feedback: { perfect: '게임 루프 제어를 완벽하게 했어요!', good: '거의 맞았어요! return 위치를 확인하세요.', partial: '조건문은 있지만 루프가 멈추지 않아요.', wrong: 'if (isGameOver) return;을 루프 맨 처음에 넣으세요.' }
            },
            {
              id: 'c2',
              title: 'HP 시스템 구현',
              description: '플레이어의 HP를 관리하고, HP가 0이 되면 게임 오버를 발생시키는 시스템을 만드세요.',
              difficulty: 'easy',
              hints: ['hp 변수를 초기화하세요', 'takeDamage에서 hp를 줄이세요', 'hp <= 0이면 isGameOver = true'],
              estimatedMinutes: 5,
              starterCode: 'var hp = 100;\n' +
                'var isGameOver = false;\n\n' +
                'function takeDamage(amount) {\n' +
                '  // TODO: hp에서 amount 빼기\n' +
                '  // TODO: hp가 0 이하면 게임 오버\n' +
                '}',
              solution: 'var hp = 100;\n' +
                'var isGameOver = false;\n\n' +
                'function takeDamage(amount) {\n' +
                '  hp -= amount;\n' +
                '  if (hp <= 0) {\n' +
                '    hp = 0;\n' +
                '    isGameOver = true;\n' +
                '  }\n' +
                '}',
              feedback: { perfect: 'HP 시스템을 완벽하게 만들었어요!', good: 'HP 감소는 되지만 게임 오버 조건을 확인하세요.', partial: 'HP는 줄지만 게임 오버가 발생하지 않아요.', wrong: 'hp -= amount 후 if (hp <= 0) isGameOver = true;로 처리하세요.' }
            },
            {
              id: 'c3',
              title: '게임 오버 화면 표시',
              description: '게임 오버 시 "GAME OVER"와 최종 점수를 화면 중앙에 표시하세요.',
              difficulty: 'medium',
              hints: ['큰 폰트(40px)로 GAME OVER를 표시하세요', 'textAlign을 center로 설정하세요', '아래에 최종 점수도 표시하세요'],
              estimatedMinutes: 6,
              starterCode: 'function drawGameOver(ctx, score) {\n' +
                '  // TODO: 반투명 검정 오버레이\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.7)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  // TODO: "GAME OVER" 텍스트 (40px, 흰색, 중앙)\n' +
                '  // TODO: "Score: " + score (20px, 중앙 아래)\n' +
                '}',
              solution: 'function drawGameOver(ctx, score) {\n' +
                '  ctx.fillStyle = "rgba(0,0,0,0.7)";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  ctx.textAlign = "center";\n' +
                '  ctx.font = "40px Arial";\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.fillText("GAME OVER", 200, 180);\n' +
                '  ctx.font = "20px Arial";\n' +
                '  ctx.fillText("Score: " + score, 200, 220);\n' +
                '  ctx.textAlign = "left";\n' +
                '}',
              feedback: { perfect: '게임 오버 화면이 완벽해요!', good: '텍스트가 보여요! 정렬을 확인하세요.', partial: '오버레이는 있지만 텍스트가 안 보여요.', wrong: 'ctx.textAlign = "center"로 중앙 정렬 후 fillText로 텍스트를 표시하세요.' }
            },
            {
              id: 'c4',
              title: '재시작 기능 구현',
              description: '모든 게임 변수를 초기화하고 게임을 다시 시작하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['모든 변수를 초기값으로 되돌리세요', 'enemies 배열을 비우세요', 'isGameOver를 false로 바꾸고 gameLoop를 다시 시작하세요'],
              estimatedMinutes: 5,
              starterCode: 'function restart() {\n' +
                '  // TODO: score를 0으로\n' +
                '  // TODO: hp를 100으로\n' +
                '  // TODO: enemies 배열 비우기\n' +
                '  // TODO: isGameOver를 false로\n' +
                '  // TODO: gameLoop() 재시작\n' +
                '}',
              solution: 'function restart() {\n' +
                '  score = 0;\n' +
                '  hp = 100;\n' +
                '  enemies = [];\n' +
                '  isGameOver = false;\n' +
                '  frameCount = 0;\n' +
                '  gameLoop();\n' +
                '}',
              feedback: { perfect: '재시작을 완벽하게 구현했어요!', good: '대부분 초기화했지만 빠진 변수가 있어요.', partial: '일부만 초기화해서 이전 게임 데이터가 남아요.', wrong: '모든 변수(score, hp, enemies, isGameOver)를 초기값으로 리셋하세요.' }
            },
            {
              id: 'c5',
              title: '클릭으로 재시작하기',
              description: '게임 오버 상태에서 클릭하면 재시작되는 이벤트를 등록하세요.',
              difficulty: 'hard',
              hints: ['click 이벤트를 등록하세요', 'isGameOver가 true일 때만 재시작하세요', '게임 중에는 클릭이 재시작을 하면 안 돼요'],
              estimatedMinutes: 6,
              starterCode: 'canvas.addEventListener("click", function(e) {\n' +
                '  // TODO: 게임 오버 상태일 때만 restart() 호출\n' +
                '});',
              solution: 'canvas.addEventListener("click", function(e) {\n' +
                '  if (isGameOver) {\n' +
                '    restart();\n' +
                '  }\n' +
                '});',
              feedback: { perfect: '클릭 재시작을 완벽하게 구현했어요!', good: '재시작은 되지만 게임 중에도 클릭 시 재시작돼요.', partial: '이벤트는 등록했지만 조건 분기가 없어요.', wrong: 'if (isGameOver) restart();로 게임 오버일 때만 재시작하세요.' }
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
              id: 'c1',
              title: 'Audio 객체로 소리 재생',
              description: 'new Audio()로 효과음을 재생하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['new Audio(url)로 오디오 객체를 만드세요', '.play()로 재생하세요', '볼륨은 volume 속성으로 조절해요'],
              estimatedMinutes: 4,
              starterCode: 'function playSound(url) {\n' +
                '  // TODO: new Audio로 소리 만들기\n' +
                '  // TODO: 볼륨 0.5로 설정\n' +
                '  // TODO: play() 호출\n' +
                '}',
              solution: 'function playSound(url) {\n' +
                '  var sound = new Audio(url);\n' +
                '  sound.volume = 0.5;\n' +
                '  sound.play();\n' +
                '}',
              feedback: { perfect: '소리 재생을 완벽하게 했어요!', good: '소리가 나요! 볼륨 설정을 확인하세요.', partial: 'Audio 객체는 만들었지만 play가 없어요.', wrong: 'var sound = new Audio(url); sound.volume = 0.5; sound.play();를 사용하세요.' }
            },
            {
              id: 'c2',
              title: '배경 음악 루프 재생',
              description: '배경 음악을 반복 재생하고 일시정지/재개할 수 있는 컨트롤러를 만드세요.',
              difficulty: 'easy',
              hints: ['loop 속성을 true로 설정하세요', 'pause()로 일시정지하세요', 'play()로 다시 재생하세요'],
              estimatedMinutes: 5,
              starterCode: 'var bgm = new Audio("bgm.mp3");\n' +
                '// TODO: loop를 true로 설정\n\n' +
                'function toggleBGM() {\n' +
                '  // TODO: paused 상태이면 play, 아니면 pause\n' +
                '}',
              solution: 'var bgm = new Audio("bgm.mp3");\n' +
                'bgm.loop = true;\n\n' +
                'function toggleBGM() {\n' +
                '  if (bgm.paused) {\n' +
                '    bgm.play();\n' +
                '  } else {\n' +
                '    bgm.pause();\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '배경 음악 컨트롤을 완벽하게 했어요!', good: '재생은 되지만 토글을 확인하세요.', partial: 'loop는 설정했지만 토글이 안 돼요.', wrong: 'bgm.paused를 확인해서 play()와 pause()를 전환하세요.' }
            },
            {
              id: 'c3',
              title: '볼륨 슬라이더 연결',
              description: 'range input으로 게임 볼륨을 조절하는 기능을 만드세요.',
              difficulty: 'medium',
              hints: ['input 이벤트를 사용하세요', 'value는 0~100이므로 100으로 나누세요', 'volume은 0~1 사이 값이에요'],
              estimatedMinutes: 5,
              starterCode: 'var slider = document.getElementById("volume");\n' +
                'var bgm = new Audio("bgm.mp3");\n\n' +
                'slider.addEventListener("input", function(e) {\n' +
                '  // TODO: slider 값(0~100)을 0~1로 변환하여 bgm.volume에 설정\n' +
                '  bgm.volume = ___;\n' +
                '});',
              solution: 'var slider = document.getElementById("volume");\n' +
                'var bgm = new Audio("bgm.mp3");\n\n' +
                'slider.addEventListener("input", function(e) {\n' +
                '  bgm.volume = e.target.value / 100;\n' +
                '});',
              feedback: { perfect: '볼륨 조절을 완벽하게 했어요!', good: '볼륨이 바뀌어요! 범위 변환을 확인하세요.', partial: '이벤트는 잡지만 볼륨이 안 바뀌어요.', wrong: 'e.target.value / 100으로 0~1 범위로 변환하세요.' }
            },
            {
              id: 'c4',
              title: '효과음 풀 만들기',
              description: '같은 효과음을 여러 번 겹쳐서 재생할 수 있도록 오디오 풀을 만드세요.',
              difficulty: 'medium',
              hints: ['Audio 객체를 미리 여러 개 만들어두세요', '재생 중이 아닌 것을 찾아 사용하세요', 'ended 상태인 것부터 재사용하세요'],
              estimatedMinutes: 7,
              starterCode: 'function createSoundPool(url, size) {\n' +
                '  var pool = [];\n' +
                '  for (var i = 0; i < size; i++) {\n' +
                '    pool.push(new Audio(url));\n' +
                '  }\n' +
                '  return pool;\n' +
                '}\n\n' +
                'function playFromPool(pool) {\n' +
                '  for (var i = 0; i < pool.length; i++) {\n' +
                '    // TODO: paused 또는 ended 상태인 소리 찾아 재생\n' +
                '    if (___) {\n' +
                '      pool[i].currentTime = 0;\n' +
                '      pool[i].play();\n' +
                '      return;\n' +
                '    }\n' +
                '  }\n' +
                '}',
              solution: 'function createSoundPool(url, size) {\n' +
                '  var pool = [];\n' +
                '  for (var i = 0; i < size; i++) {\n' +
                '    pool.push(new Audio(url));\n' +
                '  }\n' +
                '  return pool;\n' +
                '}\n\n' +
                'function playFromPool(pool) {\n' +
                '  for (var i = 0; i < pool.length; i++) {\n' +
                '    if (pool[i].paused || pool[i].ended) {\n' +
                '      pool[i].currentTime = 0;\n' +
                '      pool[i].play();\n' +
                '      return;\n' +
                '    }\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '사운드 풀을 완벽하게 구현했어요! 겹치는 효과음 처리의 핵심이에요!', good: '풀은 만들었지만 재사용 조건을 확인하세요.', partial: '풀은 있지만 재생 가능한 소리를 못 찾아요.', wrong: 'pool[i].paused || pool[i].ended로 사용 가능한 소리를 찾으세요.' }
            },
            {
              id: 'c5',
              title: '음소거 토글 버튼',
              description: '모든 게임 소리를 한 번에 음소거/해제하는 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['isMuted 플래그를 사용하세요', '모든 오디오의 muted 속성을 변경하세요', '버튼 텍스트도 함께 바꾸세요'],
              estimatedMinutes: 6,
              starterCode: 'var isMuted = false;\n' +
                'var allSounds = [bgm, sfxPool[0], sfxPool[1]];\n\n' +
                'function toggleMute() {\n' +
                '  // TODO: isMuted 반전\n' +
                '  // TODO: 모든 소리의 muted 속성을 isMuted로 설정\n' +
                '  // TODO: 버튼 텍스트 업데이트\n' +
                '}',
              solution: 'var isMuted = false;\n' +
                'var allSounds = [bgm, sfxPool[0], sfxPool[1]];\n\n' +
                'function toggleMute() {\n' +
                '  isMuted = !isMuted;\n' +
                '  for (var i = 0; i < allSounds.length; i++) {\n' +
                '    allSounds[i].muted = isMuted;\n' +
                '  }\n' +
                '  document.getElementById("muteBtn").textContent = isMuted ? "Unmute" : "Mute";\n' +
                '}',
              feedback: { perfect: '음소거 시스템을 완벽하게 만들었어요!', good: '소리는 꺼지지만 버튼 텍스트 업데이트를 확인하세요.', partial: '일부 소리만 음소거돼요. 모든 소리를 처리하세요.', wrong: 'isMuted = !isMuted 후 모든 소리의 muted 속성을 변경하세요.' }
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
              id: 'c1',
              title: '레벨 변수와 경험치',
              description: '경험치가 일정량 쌓이면 레벨이 올라가는 시스템을 만드세요.',
              difficulty: 'easy',
              hints: ['exp가 expToLevel 이상이면 레벨업', '레벨업 시 exp에서 expToLevel을 빼세요', 'expToLevel도 레벨에 따라 증가시키세요'],
              estimatedMinutes: 4,
              starterCode: 'var level = 1;\n' +
                'var exp = 0;\n' +
                'var expToLevel = 100;\n\n' +
                'function addExp(amount) {\n' +
                '  exp += amount;\n' +
                '  // TODO: exp >= expToLevel이면 레벨업\n' +
                '  // TODO: exp에서 expToLevel 빼기\n' +
                '  // TODO: level 1 증가\n' +
                '  // TODO: expToLevel을 1.5배로 증가\n' +
                '}',
              solution: 'var level = 1;\n' +
                'var exp = 0;\n' +
                'var expToLevel = 100;\n\n' +
                'function addExp(amount) {\n' +
                '  exp += amount;\n' +
                '  while (exp >= expToLevel) {\n' +
                '    exp -= expToLevel;\n' +
                '    level++;\n' +
                '    expToLevel = Math.floor(expToLevel * 1.5);\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '레벨 시스템을 완벽하게 만들었어요!', good: '레벨업이 되요! 연속 레벨업 처리를 확인하세요.', partial: '한 번은 레벨업하지만 경험치 초과분이 사라져요.', wrong: 'while(exp >= expToLevel)로 연속 레벨업을 처리하세요.' }
            },
            {
              id: 'c2',
              title: '레벨별 적 속도 조절',
              description: '레벨이 올라갈수록 적의 이동 속도가 빨라지는 시스템을 만드세요.',
              difficulty: 'easy',
              hints: ['baseSpeed에 레벨 보너스를 더하세요', '너무 빨라지지 않도록 최대 속도를 제한하세요', 'Math.min으로 제한하세요'],
              estimatedMinutes: 4,
              starterCode: 'function getEnemySpeed(level) {\n' +
                '  var baseSpeed = 1;\n' +
                '  var bonus = ___;  // level * 0.3\n' +
                '  var maxSpeed = 5;\n' +
                '  // TODO: baseSpeed + bonus를 maxSpeed로 제한하여 반환\n' +
                '  return ___;\n' +
                '}',
              solution: 'function getEnemySpeed(level) {\n' +
                '  var baseSpeed = 1;\n' +
                '  var bonus = level * 0.3;\n' +
                '  var maxSpeed = 5;\n' +
                '  return Math.min(baseSpeed + bonus, maxSpeed);\n' +
                '}',
              feedback: { perfect: '레벨별 속도 조절을 완벽하게 했어요!', good: '속도가 올라가요! 최대 속도 제한을 확인하세요.', partial: '보너스는 있지만 제한이 없어요.', wrong: 'Math.min(baseSpeed + bonus, maxSpeed)로 제한하세요.' }
            },
            {
              id: 'c3',
              title: '레벨 진행바 그리기',
              description: '현재 경험치 진행률을 시각적으로 보여주는 진행바를 그리세요.',
              difficulty: 'medium',
              hints: ['exp / expToLevel로 비율을 구하세요', '배경 바를 먼저 그리고 위에 진행 바를 그리세요', '비율 * 전체 너비로 진행 바 너비를 계산하세요'],
              estimatedMinutes: 6,
              starterCode: 'function drawExpBar(ctx, exp, expToLevel) {\n' +
                '  var barWidth = 200;\n' +
                '  var barHeight = 15;\n' +
                '  var x = 100, y = 380;\n' +
                '  var ratio = ___;  // exp / expToLevel\n' +
                '  // TODO: 회색 배경 바 그리기\n' +
                '  // TODO: 초록색 진행 바 그리기 (너비 = barWidth * ratio)\n' +
                '}',
              solution: 'function drawExpBar(ctx, exp, expToLevel) {\n' +
                '  var barWidth = 200;\n' +
                '  var barHeight = 15;\n' +
                '  var x = 100, y = 380;\n' +
                '  var ratio = exp / expToLevel;\n' +
                '  ctx.fillStyle = "gray";\n' +
                '  ctx.fillRect(x, y, barWidth, barHeight);\n' +
                '  ctx.fillStyle = "lime";\n' +
                '  ctx.fillRect(x, y, barWidth * ratio, barHeight);\n' +
                '}',
              feedback: { perfect: '경험치 진행바를 완벽하게 그렸어요!', good: '바가 보여요! 진행률 계산을 확인하세요.', partial: '배경만 보이고 진행 바가 안 채워져요.', wrong: 'exp / expToLevel로 비율을 구해서 barWidth * ratio로 너비를 계산하세요.' }
            },
            {
              id: 'c4',
              title: '레벨업 알림 효과',
              description: '레벨업 시 "LEVEL UP!" 텍스트가 나타났다 사라지는 효과를 만드세요.',
              difficulty: 'medium',
              hints: ['showTimer 변수로 표시 시간을 관리하세요', '레벨업 시 showTimer를 큰 값으로 설정', '매 프레임 감소시키며 0이면 안 보여요'],
              estimatedMinutes: 6,
              starterCode: 'var levelUpTimer = 0;\n\n' +
                'function onLevelUp() {\n' +
                '  // TODO: levelUpTimer를 120(2초)으로 설정\n' +
                '}\n\n' +
                'function drawLevelUp(ctx) {\n' +
                '  if (levelUpTimer > 0) {\n' +
                '    // TODO: levelUpTimer를 투명도로 사용 (timer/120)\n' +
                '    ctx.globalAlpha = ___;\n' +
                '    ctx.font = "30px Arial";\n' +
                '    ctx.fillStyle = "gold";\n' +
                '    ctx.textAlign = "center";\n' +
                '    ctx.fillText("LEVEL UP!", 200, 200);\n' +
                '    ctx.textAlign = "left";\n' +
                '    ctx.globalAlpha = 1;\n' +
                '    // TODO: levelUpTimer 감소\n' +
                '  }\n' +
                '}',
              solution: 'var levelUpTimer = 0;\n\n' +
                'function onLevelUp() {\n' +
                '  levelUpTimer = 120;\n' +
                '}\n\n' +
                'function drawLevelUp(ctx) {\n' +
                '  if (levelUpTimer > 0) {\n' +
                '    ctx.globalAlpha = levelUpTimer / 120;\n' +
                '    ctx.font = "30px Arial";\n' +
                '    ctx.fillStyle = "gold";\n' +
                '    ctx.textAlign = "center";\n' +
                '    ctx.fillText("LEVEL UP!", 200, 200);\n' +
                '    ctx.textAlign = "left";\n' +
                '    ctx.globalAlpha = 1;\n' +
                '    levelUpTimer--;\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '레벨업 알림을 완벽하게 구현했어요!', good: '텍스트가 보여요! 페이드 효과를 확인하세요.', partial: '텍스트가 나타나지만 사라지지 않아요.', wrong: 'levelUpTimer / 120으로 투명도를 설정하고 매 프레임 감소시키세요.' }
            },
            {
              id: 'c5',
              title: '웨이브 시스템 구현',
              description: '정해진 수의 적을 처치하면 다음 웨이브로 넘어가는 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['wave 변수와 enemiesPerWave를 관리하세요', '처치한 적 수를 세서 웨이브 클리어를 판단하세요', '다음 웨이브는 적이 더 많아요'],
              estimatedMinutes: 7,
              starterCode: 'var wave = 1;\n' +
                'var enemiesPerWave = 5;\n' +
                'var killsInWave = 0;\n\n' +
                'function onEnemyKilled() {\n' +
                '  killsInWave++;\n' +
                '  // TODO: killsInWave >= enemiesPerWave이면 다음 웨이브\n' +
                '  // TODO: wave 증가, killsInWave 리셋\n' +
                '  // TODO: enemiesPerWave를 wave * 5로 증가\n' +
                '}',
              solution: 'var wave = 1;\n' +
                'var enemiesPerWave = 5;\n' +
                'var killsInWave = 0;\n\n' +
                'function onEnemyKilled() {\n' +
                '  killsInWave++;\n' +
                '  if (killsInWave >= enemiesPerWave) {\n' +
                '    wave++;\n' +
                '    killsInWave = 0;\n' +
                '    enemiesPerWave = wave * 5;\n' +
                '  }\n' +
                '}',
              feedback: { perfect: '웨이브 시스템을 완벽하게 만들었어요!', good: '웨이브 전환이 돼요! 적 수 증가를 확인하세요.', partial: '킬은 세지만 웨이브 전환이 안 돼요.', wrong: 'if (killsInWave >= enemiesPerWave)로 웨이브 클리어를 확인하세요.' }
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
              id: 'c1',
              title: '게임 초기화 함수',
              description: '게임에 필요한 모든 변수와 객체를 초기화하는 init 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['플레이어, 적, 점수, HP 등을 모두 초기화하세요', 'player 객체를 화면 중앙에 배치하세요', '배열은 빈 배열로 초기화하세요'],
              estimatedMinutes: 5,
              starterCode: 'var player, enemies, score, hp, isGameOver;\n\n' +
                'function init() {\n' +
                '  // TODO: player 초기화 (x:200, y:350, r:15)\n' +
                '  // TODO: enemies를 빈 배열로\n' +
                '  // TODO: score를 0으로\n' +
                '  // TODO: hp를 100으로\n' +
                '  // TODO: isGameOver를 false로\n' +
                '}',
              solution: 'var player, enemies, score, hp, isGameOver;\n\n' +
                'function init() {\n' +
                '  player = { x: 200, y: 350, r: 15 };\n' +
                '  enemies = [];\n' +
                '  score = 0;\n' +
                '  hp = 100;\n' +
                '  isGameOver = false;\n' +
                '}',
              feedback: { perfect: '게임 초기화를 완벽하게 했어요!', good: '대부분 초기화했지만 빠진 항목이 있어요.', partial: '일부만 초기화해서 이전 데이터가 남아요.', wrong: '모든 변수를 초기값으로 설정하세요.' }
            },
            {
              id: 'c2',
              title: '메인 게임 루프 작성',
              description: 'update와 draw를 순서대로 호출하는 메인 게임 루프를 작성하세요.',
              difficulty: 'easy',
              hints: ['게임 오버가 아닐 때만 실행하세요', 'update -> draw -> requestAnimationFrame 순서', 'isGameOver이면 drawGameOver를 호출하세요'],
              estimatedMinutes: 5,
              starterCode: 'function gameLoop() {\n' +
                '  if (isGameOver) {\n' +
                '    // TODO: 게임 오버 화면 그리기\n' +
                '    return;\n' +
                '  }\n' +
                '  // TODO: update() 호출\n' +
                '  // TODO: draw() 호출\n' +
                '  // TODO: requestAnimationFrame(gameLoop)\n' +
                '}',
              solution: 'function gameLoop() {\n' +
                '  if (isGameOver) {\n' +
                '    drawGameOver(ctx, score);\n' +
                '    return;\n' +
                '  }\n' +
                '  update();\n' +
                '  draw();\n' +
                '  requestAnimationFrame(gameLoop);\n' +
                '}',
              feedback: { perfect: '게임 루프를 완벽하게 작성했어요!', good: '루프가 돌아요! 게임 오버 처리를 확인하세요.', partial: '루프는 있지만 게임 오버 시 멈추지 않아요.', wrong: 'isGameOver이면 drawGameOver 후 return, 아니면 update/draw/requestAnimationFrame 순서에요.' }
            },
            {
              id: 'c3',
              title: 'update 함수 통합',
              description: '적 생성, 이동, 충돌, 점수를 한 곳에서 관리하는 update 함수를 작성하세요.',
              difficulty: 'medium',
              hints: ['spawnEnemies, updateEnemies, checkCollisions 순서로 호출', '난이도 증가도 호출하세요', '각 함수가 독립적으로 작동해야 해요'],
              estimatedMinutes: 6,
              starterCode: 'function update() {\n' +
                '  // TODO: 적 생성 (spawnEnemies)\n' +
                '  // TODO: 적 이동 (updateEnemies)\n' +
                '  // TODO: 충돌 확인 (checkCollisions)\n' +
                '  // TODO: 난이도 증가 (increaseDifficulty)\n' +
                '}',
              solution: 'function update() {\n' +
                '  spawnEnemies();\n' +
                '  updateEnemies();\n' +
                '  checkCollisions();\n' +
                '  increaseDifficulty();\n' +
                '}',
              feedback: { perfect: 'update를 깔끔하게 통합했어요! 모듈화의 장점이에요!', good: '대부분 포함했지만 빠진 단계가 있어요.', partial: '일부 함수만 호출하고 있어요.', wrong: 'spawnEnemies, updateEnemies, checkCollisions, increaseDifficulty를 순서대로 호출하세요.' }
            },
            {
              id: 'c4',
              title: 'draw 함수 통합',
              description: '배경, 플레이어, 적, HUD(점수, HP)를 모두 그리는 draw 함수를 작성하세요.',
              difficulty: 'medium',
              hints: ['배경을 먼저 그리세요 (clearRect)', '플레이어, 적, UI 순서로 그리세요', 'UI는 게임 위에 그려야 해요'],
              estimatedMinutes: 6,
              starterCode: 'function draw() {\n' +
                '  // TODO: 화면 지우기\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  // TODO: 배경색 칠하기 (검정)\n' +
                '  // TODO: 플레이어 그리기 (drawPlayer)\n' +
                '  // TODO: 적들 그리기 (drawEnemies)\n' +
                '  // TODO: 점수 표시 (drawScore)\n' +
                '  // TODO: HP 표시\n' +
                '}',
              solution: 'function draw() {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  ctx.fillStyle = "black";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  drawPlayer(ctx);\n' +
                '  drawEnemies(ctx);\n' +
                '  drawScore(ctx, score);\n' +
                '  drawExpBar(ctx, exp, expToLevel);\n' +
                '}',
              feedback: { perfect: 'draw를 완벽하게 통합했어요! 렌더링 순서가 정확해요!', good: '대부분 그려지지만 빠진 요소가 있어요.', partial: '배경만 보이고 게임 요소가 안 그려져요.', wrong: 'clearRect 후 배경, 플레이어, 적, UI 순서로 그리세요.' }
            },
            {
              id: 'c5',
              title: '게임 시작 화면',
              description: '"CLICK TO START" 시작 화면을 만들고, 클릭하면 게임이 시작되게 하세요.',
              difficulty: 'hard',
              hints: ['gameStarted 변수로 시작 여부를 관리하세요', '시작 전에는 타이틀 화면만 보여주세요', '클릭 시 init() 후 gameLoop()를 시작하세요'],
              estimatedMinutes: 7,
              starterCode: 'var gameStarted = false;\n\n' +
                'function drawTitleScreen(ctx) {\n' +
                '  ctx.fillStyle = "black";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  ctx.textAlign = "center";\n' +
                '  // TODO: 게임 제목 (30px, 흰색)\n' +
                '  // TODO: "Click to Start" (18px, 회색)\n' +
                '  ctx.textAlign = "left";\n' +
                '}\n\n' +
                'canvas.addEventListener("click", function() {\n' +
                '  if (!gameStarted) {\n' +
                '    // TODO: gameStarted = true, init(), gameLoop()\n' +
                '  } else if (isGameOver) {\n' +
                '    // TODO: restart()\n' +
                '  }\n' +
                '});\n\n' +
                'drawTitleScreen(ctx);',
              solution: 'var gameStarted = false;\n\n' +
                'function drawTitleScreen(ctx) {\n' +
                '  ctx.fillStyle = "black";\n' +
                '  ctx.fillRect(0, 0, 400, 400);\n' +
                '  ctx.textAlign = "center";\n' +
                '  ctx.font = "30px Arial";\n' +
                '  ctx.fillStyle = "white";\n' +
                '  ctx.fillText("Space Dodger", 200, 170);\n' +
                '  ctx.font = "18px Arial";\n' +
                '  ctx.fillStyle = "gray";\n' +
                '  ctx.fillText("Click to Start", 200, 220);\n' +
                '  ctx.textAlign = "left";\n' +
                '}\n\n' +
                'canvas.addEventListener("click", function() {\n' +
                '  if (!gameStarted) {\n' +
                '    gameStarted = true;\n' +
                '    init();\n' +
                '    gameLoop();\n' +
                '  } else if (isGameOver) {\n' +
                '    restart();\n' +
                '  }\n' +
                '});\n\n' +
                'drawTitleScreen(ctx);',
              feedback: { perfect: '게임 시작 화면을 완벽하게 만들었어요! 완성도 높은 게임이에요!', good: '시작 화면이 보여요! 클릭 처리를 확인하세요.', partial: '화면은 있지만 클릭이 작동하지 않아요.', wrong: '클릭 시 gameStarted=true, init(), gameLoop()를 순서대로 호출하세요.' }
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
              title: '3D 좌표 변환 이해',
              description: '3D 좌표(x, y, z)를 2D 화면 좌표로 변환하는 원근 투영 함수를 완성하세요.',
              difficulty: 'easy',
              hints: ['원근법: 멀리 있으면 작게 보여요', 'scale = fov / (fov + z) 공식을 사용하세요', 'screenX = x * scale + centerX'],
              estimatedMinutes: 5,
              starterCode: 'function project3Dto2D(x, y, z, centerX, centerY) {\n' +
                '  var fov = 300; // 시야각\n' +
                '  // TODO: scale 계산 (z가 클수록 작아짐)\n' +
                '  var scale = ___;\n' +
                '  // TODO: 2D 좌표 반환\n' +
                '  return {\n' +
                '    screenX: ___,\n' +
                '    screenY: ___,\n' +
                '    scale: scale\n' +
                '  };\n' +
                '}',
              solution: 'function project3Dto2D(x, y, z, centerX, centerY) {\n' +
                '  var fov = 300;\n' +
                '  var scale = fov / (fov + z);\n' +
                '  return {\n' +
                '    screenX: x * scale + centerX,\n' +
                '    screenY: y * scale + centerY,\n' +
                '    scale: scale\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: '3D->2D 투영을 완벽하게 이해했어요! VR의 기초 수학이에요!',
                good: '거의 맞았어요! scale 공식을 다시 확인해보세요.',
                partial: '투영 개념은 이해했지만 공식이 정확하지 않아요.',
                wrong: 'scale = fov / (fov + z)이고, screenX = x * scale + centerX 에요.'
              }
            },
            {
              id: 'c2',
              title: 'AR 마커 위치 추적',
              description: '화면의 특정 좌표에 AR 오버레이 요소를 배치하는 함수를 작성하세요.',
              difficulty: 'easy',
              hints: ['마커 좌표를 기준으로 오프셋을 계산하세요', 'CSS transform을 활용하세요', 'translate(x, y)로 위치를 지정해요'],
              estimatedMinutes: 5,
              starterCode: 'function placeAROverlay(markerX, markerY, overlayWidth, overlayHeight) {\n' +
                '  // TODO: 오버레이를 마커 중심에 배치\n' +
                '  var left = ___;\n' +
                '  var top = ___;\n' +
                '  return {\n' +
                '    left: left + "px",\n' +
                '    top: top + "px",\n' +
                '    width: overlayWidth + "px",\n' +
                '    height: overlayHeight + "px"\n' +
                '  };\n' +
                '}',
              solution: 'function placeAROverlay(markerX, markerY, overlayWidth, overlayHeight) {\n' +
                '  var left = markerX - overlayWidth / 2;\n' +
                '  var top = markerY - overlayHeight / 2;\n' +
                '  return {\n' +
                '    left: left + "px",\n' +
                '    top: top + "px",\n' +
                '    width: overlayWidth + "px",\n' +
                '    height: overlayHeight + "px"\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: 'AR 오버레이 배치를 완벽하게 구현했어요!',
                good: '좋아요! 중심 맞추기 계산을 확인해보세요.',
                partial: '위치는 설정했지만 중심 정렬이 안 됐어요.',
                wrong: '마커 좌표에서 오버레이 크기의 절반을 빼면 중심에 배치돼요.'
              }
            },
            {
              id: 'c3',
              title: '자이로스코프 데이터로 회전',
              description: '자이로스코프 센서값(alpha, beta, gamma)을 받아 3D 객체의 회전을 계산하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['각도를 라디안으로 변환하세요', 'degree * Math.PI / 180 = radian', '각 축별로 회전 행렬을 적용하세요'],
              estimatedMinutes: 8,
              starterCode: 'function gyroToRotation(alpha, beta, gamma) {\n' +
                '  // alpha: 0~360 (z축 회전)\n' +
                '  // beta: -180~180 (x축 회전)\n' +
                '  // gamma: -90~90 (y축 회전)\n' +
                '  // TODO: 각도를 라디안으로 변환\n' +
                '  var alphaRad = ___;\n' +
                '  var betaRad = ___;\n' +
                '  var gammaRad = ___;\n' +
                '  return { x: betaRad, y: gammaRad, z: alphaRad };\n' +
                '}',
              solution: 'function gyroToRotation(alpha, beta, gamma) {\n' +
                '  var alphaRad = alpha * Math.PI / 180;\n' +
                '  var betaRad = beta * Math.PI / 180;\n' +
                '  var gammaRad = gamma * Math.PI / 180;\n' +
                '  return { x: betaRad, y: gammaRad, z: alphaRad };\n' +
                '}',
              feedback: {
                perfect: '자이로스코프 데이터 변환을 완벽하게 구현했어요! VR 헤드 트래킹의 기초예요!',
                good: '거의 맞았어요! 라디안 변환 공식을 확인하세요.',
                partial: '일부 축의 변환만 맞았어요.',
                wrong: '각도 * Math.PI / 180 으로 라디안으로 변환하세요.'
              }
            },
            {
              id: 'c4',
              title: 'AR 거리 측정기 구현',
              description: '두 AR 마커 사이의 3D 거리를 계산하는 함수를 작성하세요.',
              difficulty: 'medium',
              hints: ['3D 거리 공식을 사용하세요', 'sqrt((x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2)', 'Math.sqrt와 Math.pow를 활용하세요'],
              estimatedMinutes: 8,
              starterCode: 'function measure3DDistance(marker1, marker2) {\n' +
                '  // marker1 = { x: 10, y: 20, z: 30 }\n' +
                '  // marker2 = { x: 40, y: 50, z: 60 }\n' +
                '  var dx = marker2.x - marker1.x;\n' +
                '  var dy = marker2.y - marker1.y;\n' +
                '  var dz = marker2.z - marker1.z;\n' +
                '  // TODO: 3D 유클리드 거리 계산\n' +
                '  return ___;\n' +
                '}',
              solution: 'function measure3DDistance(marker1, marker2) {\n' +
                '  var dx = marker2.x - marker1.x;\n' +
                '  var dy = marker2.y - marker1.y;\n' +
                '  var dz = marker2.z - marker1.z;\n' +
                '  return Math.sqrt(dx * dx + dy * dy + dz * dz);\n' +
                '}',
              feedback: {
                perfect: '3D 거리 계산을 완벽하게 구현했어요! AR 거리 측정 앱의 핵심이에요!',
                good: '좋아요! 제곱근 계산을 확인해보세요.',
                partial: '차이는 구했지만 거리 공식이 불완전해요.',
                wrong: 'Math.sqrt(dx*dx + dy*dy + dz*dz)로 유클리드 거리를 구하세요.'
              }
            },
            {
              id: 'c5',
              title: '간단한 VR 씬 렌더러',
              description: '여러 3D 객체를 원근법으로 렌더링하고 z-정렬(먼 것부터 그리기)하는 VR 씬 렌더러를 만드세요.',
              difficulty: 'hard',
              hints: ['객체를 z값으로 내림차순 정렬하세요', 'sort() 함수를 사용하세요', '멀리 있는 것부터 먼저 그려야 가려짐 효과가 나요'],
              estimatedMinutes: 15,
              starterCode: 'var objects = [\n' +
                '  { x: 0, y: 0, z: 100, size: 20, color: "red" },\n' +
                '  { x: 50, y: -30, z: 200, size: 30, color: "blue" },\n' +
                '  { x: -40, y: 20, z: 50, size: 15, color: "green" }\n' +
                '];\n' +
                '\n' +
                'function renderScene(ctx, cx, cy) {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  // TODO: objects를 z값 내림차순으로 정렬 (먼 것 먼저)\n' +
                '  // TODO: 정렬된 순서로 각 객체를 3D->2D 투영 후 그리기\n' +
                '}',
              solution: 'var objects = [\n' +
                '  { x: 0, y: 0, z: 100, size: 20, color: "red" },\n' +
                '  { x: 50, y: -30, z: 200, size: 30, color: "blue" },\n' +
                '  { x: -40, y: 20, z: 50, size: 15, color: "green" }\n' +
                '];\n' +
                '\n' +
                'function renderScene(ctx, cx, cy) {\n' +
                '  ctx.clearRect(0, 0, 400, 400);\n' +
                '  var sorted = objects.slice().sort(function(a, b) { return b.z - a.z; });\n' +
                '  for (var i = 0; i < sorted.length; i++) {\n' +
                '    var obj = sorted[i];\n' +
                '    var scale = 300 / (300 + obj.z);\n' +
                '    var sx = obj.x * scale + cx;\n' +
                '    var sy = obj.y * scale + cy;\n' +
                '    var sz = obj.size * scale;\n' +
                '    ctx.beginPath();\n' +
                '    ctx.arc(sx, sy, sz, 0, Math.PI * 2);\n' +
                '    ctx.fillStyle = obj.color;\n' +
                '    ctx.fill();\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: 'VR 씬 렌더러를 완벽하게 구현했어요! z-정렬과 원근 투영이 모두 정확해요!',
                good: '좋은 구조예요! 정렬 순서나 투영 계산을 확인해보세요.',
                partial: '일부 기능만 구현됐어요. 정렬과 투영 모두 필요해요.',
                wrong: 'sort(function(a,b){return b.z-a.z})로 내림차순 정렬 후 원근 투영으로 그리세요.'
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
              title: '간단한 해시 함수 만들기',
              description: '문자열을 입력받아 간단한 해시값을 반환하는 함수를 만드세요. 각 문자의 charCode를 활용합니다.',
              difficulty: 'easy',
              hints: ['charCodeAt(i)로 문자의 숫자값을 구해요', '모든 문자의 숫자값을 조합하세요', '같은 입력은 항상 같은 출력이어야 해요'],
              estimatedMinutes: 5,
              starterCode: 'function simpleHash(str) {\n' +
                '  var hash = 0;\n' +
                '  for (var i = 0; i < str.length; i++) {\n' +
                '    // TODO: 각 문자의 charCode를 hash에 반영\n' +
                '    // hash = hash * 31 + charCode 패턴 사용\n' +
                '  }\n' +
                '  return Math.abs(hash).toString(16);\n' +
                '}',
              solution: 'function simpleHash(str) {\n' +
                '  var hash = 0;\n' +
                '  for (var i = 0; i < str.length; i++) {\n' +
                '    hash = hash * 31 + str.charCodeAt(i);\n' +
                '  }\n' +
                '  return Math.abs(hash).toString(16);\n' +
                '}',
              feedback: {
                perfect: '해시 함수를 완벽하게 구현했어요! 블록체인의 핵심 기술이에요!',
                good: '잘했어요! 해시 조합 방식을 확인해보세요.',
                partial: '문자 코드는 가져왔지만 조합이 불완전해요.',
                wrong: 'hash = hash * 31 + str.charCodeAt(i) 패턴을 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '블록 구조 만들기',
              description: '인덱스, 타임스탬프, 데이터, 이전 해시를 포함하는 블록 객체를 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['객체에 필요한 속성을 모두 담으세요', '블록의 hash는 모든 데이터를 합쳐서 생성해요', 'simpleHash 함수를 재사용하세요'],
              estimatedMinutes: 6,
              starterCode: 'function createBlock(index, data, previousHash) {\n' +
                '  var block = {\n' +
                '    index: index,\n' +
                '    timestamp: Date.now(),\n' +
                '    data: data,\n' +
                '    previousHash: previousHash,\n' +
                '    // TODO: hash 생성 (index + timestamp + data + previousHash 합쳐서)\n' +
                '    hash: ___\n' +
                '  };\n' +
                '  return block;\n' +
                '}',
              solution: 'function createBlock(index, data, previousHash) {\n' +
                '  var timestamp = Date.now();\n' +
                '  var block = {\n' +
                '    index: index,\n' +
                '    timestamp: timestamp,\n' +
                '    data: data,\n' +
                '    previousHash: previousHash,\n' +
                '    hash: simpleHash(index + "" + timestamp + data + previousHash)\n' +
                '  };\n' +
                '  return block;\n' +
                '}',
              feedback: {
                perfect: '블록 구조를 완벽하게 만들었어요! 블록체인의 기본 단위예요!',
                good: '잘했어요! 해시 생성에 모든 필드를 포함시키세요.',
                partial: '블록 구조는 맞지만 해시 생성이 불완전해요.',
                wrong: 'simpleHash(index + timestamp + data + previousHash)로 해시를 생성하세요.'
              }
            },
            {
              id: 'c3',
              title: '체인 유효성 검증',
              description: '블록체인의 무결성을 검증하는 함수를 만드세요. 각 블록의 previousHash가 이전 블록의 hash와 일치하는지 확인합니다.',
              difficulty: 'medium',
              hints: ['첫 블록(제네시스)은 건너뛰세요', '각 블록의 previousHash와 이전 블록의 hash를 비교하세요', '하나라도 불일치하면 false'],
              estimatedMinutes: 8,
              starterCode: 'function isChainValid(chain) {\n' +
                '  // chain: 블록 배열\n' +
                '  for (var i = 1; i < chain.length; i++) {\n' +
                '    // TODO: chain[i].previousHash === chain[i-1].hash 확인\n' +
                '    // 불일치하면 false 반환\n' +
                '  }\n' +
                '  return true;\n' +
                '}',
              solution: 'function isChainValid(chain) {\n' +
                '  for (var i = 1; i < chain.length; i++) {\n' +
                '    if (chain[i].previousHash !== chain[i - 1].hash) {\n' +
                '      return false;\n' +
                '    }\n' +
                '  }\n' +
                '  return true;\n' +
                '}',
              feedback: {
                perfect: '체인 검증을 완벽하게 구현했어요! 블록체인 보안의 핵심이에요!',
                good: '좋아요! 비교 조건을 정확히 확인해보세요.',
                partial: '반복문은 맞지만 비교 로직이 정확하지 않아요.',
                wrong: 'chain[i].previousHash !== chain[i-1].hash 이면 false를 반환하세요.'
              }
            },
            {
              id: 'c4',
              title: '블록 채굴 시뮬레이션',
              description: '해시값이 특정 조건(앞자리 0의 개수)을 만족할 때까지 nonce를 증가시키는 채굴 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['nonce를 0부터 1씩 증가시키세요', '해시 앞자리가 "00"으로 시작하는지 확인', '조건을 만족하면 nonce와 hash를 반환하세요'],
              estimatedMinutes: 10,
              starterCode: 'function mineBlock(data, difficulty) {\n' +
                '  // difficulty: 앞자리 0의 개수 (예: 2면 "00"으로 시작)\n' +
                '  var target = "";\n' +
                '  for (var d = 0; d < difficulty; d++) { target += "0"; }\n' +
                '  var nonce = 0;\n' +
                '  // TODO: hash가 target으로 시작할 때까지 nonce 증가\n' +
                '  // TODO: 결과 반환 { nonce, hash }\n' +
                '}',
              solution: 'function mineBlock(data, difficulty) {\n' +
                '  var target = "";\n' +
                '  for (var d = 0; d < difficulty; d++) { target += "0"; }\n' +
                '  var nonce = 0;\n' +
                '  var hash = "";\n' +
                '  while (true) {\n' +
                '    hash = simpleHash(data + nonce);\n' +
                '    if (hash.substring(0, difficulty) === target) {\n' +
                '      return { nonce: nonce, hash: hash };\n' +
                '    }\n' +
                '    nonce++;\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '블록 채굴을 완벽하게 구현했어요! 비트코인과 같은 방식이에요!',
                good: '좋은 접근이에요! 해시 비교 조건을 확인하세요.',
                partial: '반복은 하지만 종료 조건이 정확하지 않아요.',
                wrong: 'while루프에서 hash.substring(0, difficulty) === target 조건을 확인하세요.'
              }
            },
            {
              id: 'c5',
              title: '미니 블록체인 시스템',
              description: '제네시스 블록 생성, 블록 추가, 검증 기능을 갖춘 미니 블록체인 시스템을 완성하세요.',
              difficulty: 'hard',
              hints: ['제네시스 블록의 previousHash는 "0"이에요', 'addBlock은 마지막 블록의 hash를 참조해요', 'getChain으로 전체 체인을 반환하세요'],
              estimatedMinutes: 15,
              starterCode: 'function MiniBlockchain() {\n' +
                '  this.chain = [];\n' +
                '  // TODO: 제네시스 블록 생성하여 chain에 추가\n' +
                '}\n' +
                '\n' +
                'MiniBlockchain.prototype.addBlock = function(data) {\n' +
                '  // TODO: 새 블록 생성 후 체인에 추가\n' +
                '};\n' +
                '\n' +
                'MiniBlockchain.prototype.isValid = function() {\n' +
                '  // TODO: 체인 유효성 검증\n' +
                '};\n' +
                '\n' +
                'MiniBlockchain.prototype.getChain = function() {\n' +
                '  return this.chain;\n' +
                '}',
              solution: 'function MiniBlockchain() {\n' +
                '  this.chain = [];\n' +
                '  this.chain.push(createBlock(0, "Genesis Block", "0"));\n' +
                '}\n' +
                '\n' +
                'MiniBlockchain.prototype.addBlock = function(data) {\n' +
                '  var lastBlock = this.chain[this.chain.length - 1];\n' +
                '  var newBlock = createBlock(this.chain.length, data, lastBlock.hash);\n' +
                '  this.chain.push(newBlock);\n' +
                '};\n' +
                '\n' +
                'MiniBlockchain.prototype.isValid = function() {\n' +
                '  return isChainValid(this.chain);\n' +
                '};\n' +
                '\n' +
                'MiniBlockchain.prototype.getChain = function() {\n' +
                '  return this.chain;\n' +
                '}',
              feedback: {
                perfect: '미니 블록체인 시스템을 완벽하게 구현했어요! 블록체인 개발자의 첫 걸음이에요!',
                good: '좋은 구조예요! 제네시스 블록이나 블록 추가 로직을 확인하세요.',
                partial: '일부 메서드만 구현됐어요. 모든 기능을 완성하세요.',
                wrong: '제네시스 블록을 먼저 만들고, addBlock에서 마지막 블록의 hash를 previousHash로 사용하세요.'
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
              title: '센서 데이터 읽기 시뮬레이션',
              description: '온도, 습도, 조도 센서 데이터를 시뮬레이션하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['각 센서에 적절한 범위를 설정하세요', '온도: 15~35도, 습도: 30~90%', 'Math.random() 범위를 조절하세요'],
              estimatedMinutes: 5,
              starterCode: 'function readSensors() {\n' +
                '  // TODO: 온도 (15~35), 습도 (30~90), 조도 (0~1000) 시뮬레이션\n' +
                '  return {\n' +
                '    temperature: ___,\n' +
                '    humidity: ___,\n' +
                '    light: ___,\n' +
                '    timestamp: Date.now()\n' +
                '  };\n' +
                '}',
              solution: 'function readSensors() {\n' +
                '  return {\n' +
                '    temperature: Math.random() * 20 + 15,\n' +
                '    humidity: Math.random() * 60 + 30,\n' +
                '    light: Math.random() * 1000,\n' +
                '    timestamp: Date.now()\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: '센서 시뮬레이션을 완벽하게 구현했어요! IoT의 첫 단계예요!',
                good: '좋아요! 각 센서의 범위를 확인해보세요.',
                partial: '일부 센서만 올바른 범위에요.',
                wrong: 'Math.random() * 범위 + 최솟값 으로 원하는 범위를 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '센서 임계값 알림 시스템',
              description: '센서값이 임계값을 초과하면 알림을 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['각 센서별 임계값을 설정하세요', 'if문으로 초과 여부를 확인하세요', '알림 배열에 메시지를 추가하세요'],
              estimatedMinutes: 6,
              starterCode: 'function checkAlerts(sensorData) {\n' +
                '  var alerts = [];\n' +
                '  // TODO: 온도가 30도 초과면 알림 추가\n' +
                '  // TODO: 습도가 80% 초과면 알림 추가\n' +
                '  // TODO: 조도가 100 미만이면 알림 추가\n' +
                '  return alerts;\n' +
                '}',
              solution: 'function checkAlerts(sensorData) {\n' +
                '  var alerts = [];\n' +
                '  if (sensorData.temperature > 30) {\n' +
                '    alerts.push("Warning: High temperature " + sensorData.temperature.toFixed(1) + "C");\n' +
                '  }\n' +
                '  if (sensorData.humidity > 80) {\n' +
                '    alerts.push("Warning: High humidity " + sensorData.humidity.toFixed(1) + "%");\n' +
                '  }\n' +
                '  if (sensorData.light < 100) {\n' +
                '    alerts.push("Warning: Low light " + sensorData.light.toFixed(0) + " lux");\n' +
                '  }\n' +
                '  return alerts;\n' +
                '}',
              feedback: {
                perfect: '센서 알림 시스템을 완벽하게 구현했어요! 스마트홈의 기본이에요!',
                good: '잘했어요! 조건문 방향(초과/미만)을 확인하세요.',
                partial: '일부 센서만 처리했어요. 모든 센서를 체크하세요.',
                wrong: 'if (sensorData.temperature > 30)처럼 각 센서를 임계값과 비교하세요.'
              }
            },
            {
              id: 'c3',
              title: '데이터 이동 평균 계산',
              description: '센서 데이터 배열에서 이동 평균(Moving Average)을 계산하는 함수를 만드세요. 노이즈를 줄이는 중요한 기법입니다.',
              difficulty: 'medium',
              hints: ['window 크기만큼 최근 값을 평균내세요', '배열의 끝에서 window 크기만큼 잘라내세요', 'slice를 활용하세요'],
              estimatedMinutes: 8,
              starterCode: 'function movingAverage(data, windowSize) {\n' +
                '  var results = [];\n' +
                '  for (var i = windowSize - 1; i < data.length; i++) {\n' +
                '    // TODO: i 위치에서 windowSize만큼 이전 값들의 평균 계산\n' +
                '    var sum = 0;\n' +
                '    // TODO: 합산 후 평균 구하기\n' +
                '    results.push(___);\n' +
                '  }\n' +
                '  return results;\n' +
                '}',
              solution: 'function movingAverage(data, windowSize) {\n' +
                '  var results = [];\n' +
                '  for (var i = windowSize - 1; i < data.length; i++) {\n' +
                '    var sum = 0;\n' +
                '    for (var j = 0; j < windowSize; j++) {\n' +
                '      sum += data[i - j];\n' +
                '    }\n' +
                '    results.push(sum / windowSize);\n' +
                '  }\n' +
                '  return results;\n' +
                '}',
              feedback: {
                perfect: '이동 평균을 완벽하게 구현했어요! IoT 데이터 필터링의 핵심이에요!',
                good: '좋은 접근이에요! 윈도우 범위를 다시 확인해보세요.',
                partial: '합산은 했지만 윈도우 범위가 정확하지 않아요.',
                wrong: 'i 위치에서 windowSize만큼 이전 값을 합산하고 windowSize로 나누세요.'
              }
            },
            {
              id: 'c4',
              title: '스마트홈 규칙 엔진',
              description: '센서 데이터에 따라 자동으로 기기를 제어하는 규칙 엔진을 만드세요.',
              difficulty: 'medium',
              hints: ['규칙 배열을 순회하며 조건을 평가하세요', '각 규칙에 condition과 action이 있어요', '조건이 참이면 action을 실행하세요'],
              estimatedMinutes: 10,
              starterCode: 'var rules = [\n' +
                '  { name: "AC", condition: function(d) { return d.temperature > 28; }, action: "에어컨 켜기" },\n' +
                '  { name: "Light", condition: function(d) { return d.light < 100; }, action: "조명 켜기" },\n' +
                '  { name: "Humidifier", condition: function(d) { return d.humidity < 40; }, action: "가습기 켜기" }\n' +
                '];\n' +
                '\n' +
                'function evaluateRules(sensorData, rules) {\n' +
                '  var actions = [];\n' +
                '  // TODO: 각 규칙의 condition을 평가하고 참이면 action 추가\n' +
                '  return actions;\n' +
                '}',
              solution: 'var rules = [\n' +
                '  { name: "AC", condition: function(d) { return d.temperature > 28; }, action: "에어컨 켜기" },\n' +
                '  { name: "Light", condition: function(d) { return d.light < 100; }, action: "조명 켜기" },\n' +
                '  { name: "Humidifier", condition: function(d) { return d.humidity < 40; }, action: "가습기 켜기" }\n' +
                '];\n' +
                '\n' +
                'function evaluateRules(sensorData, rules) {\n' +
                '  var actions = [];\n' +
                '  for (var i = 0; i < rules.length; i++) {\n' +
                '    if (rules[i].condition(sensorData)) {\n' +
                '      actions.push(rules[i].action);\n' +
                '    }\n' +
                '  }\n' +
                '  return actions;\n' +
                '}',
              feedback: {
                perfect: '규칙 엔진을 완벽하게 구현했어요! 스마트홈 자동화의 핵심이에요!',
                good: '좋아요! 조건 함수 호출 방식을 확인해보세요.',
                partial: '반복문은 맞지만 조건 평가가 정확하지 않아요.',
                wrong: 'rules[i].condition(sensorData)로 조건을 평가하고 참이면 action을 추가하세요.'
              }
            },
            {
              id: 'c5',
              title: 'IoT 데이터 대시보드',
              description: '센서 데이터를 수집하고 통계(최소, 최대, 평균)를 계산하는 IoT 대시보드 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['데이터를 배열에 저장하세요', '최소/최대/평균을 계산하는 함수를 만드세요', '최대 저장 개수를 제한하세요'],
              estimatedMinutes: 15,
              starterCode: 'function IoTDashboard(maxRecords) {\n' +
                '  this.records = [];\n' +
                '  this.maxRecords = maxRecords || 100;\n' +
                '}\n' +
                '\n' +
                'IoTDashboard.prototype.addRecord = function(data) {\n' +
                '  // TODO: 데이터 추가, maxRecords 초과시 가장 오래된 것 제거\n' +
                '};\n' +
                '\n' +
                'IoTDashboard.prototype.getStats = function(field) {\n' +
                '  // TODO: field의 min, max, avg 반환\n' +
                '}',
              solution: 'function IoTDashboard(maxRecords) {\n' +
                '  this.records = [];\n' +
                '  this.maxRecords = maxRecords || 100;\n' +
                '}\n' +
                '\n' +
                'IoTDashboard.prototype.addRecord = function(data) {\n' +
                '  this.records.push(data);\n' +
                '  if (this.records.length > this.maxRecords) {\n' +
                '    this.records.shift();\n' +
                '  }\n' +
                '};\n' +
                '\n' +
                'IoTDashboard.prototype.getStats = function(field) {\n' +
                '  if (this.records.length === 0) return { min: 0, max: 0, avg: 0 };\n' +
                '  var min = this.records[0][field];\n' +
                '  var max = this.records[0][field];\n' +
                '  var sum = 0;\n' +
                '  for (var i = 0; i < this.records.length; i++) {\n' +
                '    var val = this.records[i][field];\n' +
                '    if (val < min) min = val;\n' +
                '    if (val > max) max = val;\n' +
                '    sum += val;\n' +
                '  }\n' +
                '  return { min: min, max: max, avg: sum / this.records.length };\n' +
                '}',
              feedback: {
                perfect: 'IoT 대시보드를 완벽하게 구현했어요! 실제 IoT 서비스의 기본 구조예요!',
                good: '좋은 구조예요! 통계 계산이나 레코드 관리를 확인하세요.',
                partial: '일부 메서드만 구현됐어요. 모든 기능을 완성하세요.',
                wrong: 'addRecord에서 push + shift로 관리하고, getStats에서 min/max/avg를 계산하세요.'
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
              title: '로봇 방향 제어',
              description: '명령어(forward, left, right, back)를 받아 로봇의 위치와 방향을 업데이트하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['방향을 숫자로 표현하세요 (0=북, 1=동, 2=남, 3=서)', 'left는 방향-1, right는 방향+1', '4로 나눈 나머지를 사용하세요'],
              estimatedMinutes: 5,
              starterCode: 'var robot = { x: 0, y: 0, direction: 0 }; // 0=N, 1=E, 2=S, 3=W\n' +
                '\n' +
                'function moveRobot(command) {\n' +
                '  if (command === "left") {\n' +
                '    // TODO: 방향 왼쪽 회전\n' +
                '  } else if (command === "right") {\n' +
                '    // TODO: 방향 오른쪽 회전\n' +
                '  } else if (command === "forward") {\n' +
                '    // TODO: 현재 방향으로 한 칸 이동\n' +
                '  }\n' +
                '}',
              solution: 'var robot = { x: 0, y: 0, direction: 0 };\n' +
                'var dx = [0, 1, 0, -1];\n' +
                'var dy = [-1, 0, 1, 0];\n' +
                '\n' +
                'function moveRobot(command) {\n' +
                '  if (command === "left") {\n' +
                '    robot.direction = (robot.direction + 3) % 4;\n' +
                '  } else if (command === "right") {\n' +
                '    robot.direction = (robot.direction + 1) % 4;\n' +
                '  } else if (command === "forward") {\n' +
                '    robot.x += dx[robot.direction];\n' +
                '    robot.y += dy[robot.direction];\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '로봇 방향 제어를 완벽하게 구현했어요! 로봇 프로그래밍의 기초예요!',
                good: '잘했어요! 방향 회전 로직을 확인해보세요.',
                partial: '회전은 되지만 이동이 정확하지 않아요.',
                wrong: '방향별 dx, dy 배열을 만들고 direction 인덱스로 이동하세요.'
              }
            },
            {
              id: 'c2',
              title: '명령어 시퀀스 실행',
              description: '명령어 문자열 배열을 받아 순서대로 로봇을 제어하고 최종 위치를 반환하세요.',
              difficulty: 'easy',
              hints: ['배열을 순회하며 각 명령을 실행하세요', 'moveRobot 함수를 재사용하세요', '최종 x, y를 반환하세요'],
              estimatedMinutes: 5,
              starterCode: 'function executeSequence(commands) {\n' +
                '  robot.x = 0; robot.y = 0; robot.direction = 0;\n' +
                '  // TODO: commands 배열의 각 명령을 순서대로 실행\n' +
                '  return { x: robot.x, y: robot.y };\n' +
                '}',
              solution: 'function executeSequence(commands) {\n' +
                '  robot.x = 0; robot.y = 0; robot.direction = 0;\n' +
                '  for (var i = 0; i < commands.length; i++) {\n' +
                '    moveRobot(commands[i]);\n' +
                '  }\n' +
                '  return { x: robot.x, y: robot.y };\n' +
                '}',
              feedback: {
                perfect: '명령어 시퀀스를 완벽하게 실행했어요!',
                good: '좋아요! 반복문에서 함수 호출을 확인하세요.',
                partial: '반복문은 있지만 함수 호출이 빠졌어요.',
                wrong: 'for문으로 commands를 순회하며 moveRobot(commands[i])를 호출하세요.'
              }
            },
            {
              id: 'c3',
              title: '장애물 회피 알고리즘',
              description: '그리드 맵에서 장애물을 감지하고 회피하는 로봇 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['grid[y][x]가 1이면 장애물이에요', '이동 전에 목표 위치를 확인하세요', '장애물이면 오른쪽으로 회전하세요'],
              estimatedMinutes: 10,
              starterCode: 'function moveWithAvoidance(robot, grid) {\n' +
                '  var dx = [0, 1, 0, -1];\n' +
                '  var dy = [-1, 0, 1, 0];\n' +
                '  var nextX = robot.x + dx[robot.direction];\n' +
                '  var nextY = robot.y + dy[robot.direction];\n' +
                '  // TODO: 범위 체크 및 장애물 확인\n' +
                '  // 장애물이면 오른쪽 회전, 아니면 전진\n' +
                '  return robot;\n' +
                '}',
              solution: 'function moveWithAvoidance(robot, grid) {\n' +
                '  var dx = [0, 1, 0, -1];\n' +
                '  var dy = [-1, 0, 1, 0];\n' +
                '  var nextX = robot.x + dx[robot.direction];\n' +
                '  var nextY = robot.y + dy[robot.direction];\n' +
                '  if (nextX < 0 || nextX >= grid[0].length || nextY < 0 || nextY >= grid.length || grid[nextY][nextX] === 1) {\n' +
                '    robot.direction = (robot.direction + 1) % 4;\n' +
                '  } else {\n' +
                '    robot.x = nextX;\n' +
                '    robot.y = nextY;\n' +
                '  }\n' +
                '  return robot;\n' +
                '}',
              feedback: {
                perfect: '장애물 회피를 완벽하게 구현했어요! 자율주행 로봇의 기초 알고리즘이에요!',
                good: '좋아요! 범위 체크나 회피 로직을 확인하세요.',
                partial: '장애물 감지는 되지만 범위 체크가 빠졌어요.',
                wrong: 'nextX, nextY가 유효 범위이고 grid[nextY][nextX]가 0이면 이동, 아니면 회전하세요.'
              }
            },
            {
              id: 'c4',
              title: '센서 기반 라인 추적',
              description: '바닥의 라인을 감지하는 센서 데이터를 기반으로 로봇이 라인을 따라가는 알고리즘을 구현하세요.',
              difficulty: 'medium',
              hints: ['왼쪽/중앙/오른쪽 3개 센서가 있어요', '중앙 감지시 직진, 왼쪽 감지시 좌회전', '모두 미감지시 유턴하세요'],
              estimatedMinutes: 10,
              starterCode: 'function followLine(sensors) {\n' +
                '  // sensors = { left: true/false, center: true/false, right: true/false }\n' +
                '  // 반환: "forward", "left", "right", "uturn"\n' +
                '  // TODO: 센서 조합에 따른 방향 결정\n' +
                '  return "forward";\n' +
                '}',
              solution: 'function followLine(sensors) {\n' +
                '  if (sensors.center) {\n' +
                '    return "forward";\n' +
                '  } else if (sensors.left) {\n' +
                '    return "left";\n' +
                '  } else if (sensors.right) {\n' +
                '    return "right";\n' +
                '  } else {\n' +
                '    return "uturn";\n' +
                '  }\n' +
                '}',
              feedback: {
                perfect: '라인 추적 알고리즘을 완벽하게 구현했어요! 로봇 경진대회의 기본 과제예요!',
                good: '좋아요! 센서 우선순위를 확인해보세요.',
                partial: '일부 조건만 처리했어요. 모든 경우를 고려하세요.',
                wrong: 'center면 직진, left면 좌회전, right면 우회전, 모두 없으면 유턴하세요.'
              }
            },
            {
              id: 'c5',
              title: '경로 계획 알고리즘',
              description: '출발점에서 목표점까지의 경로를 계획하는 간단한 BFS 경로 탐색기를 구현하세요.',
              difficulty: 'hard',
              hints: ['BFS는 큐를 사용해요', '방문한 위치를 기록하세요', '목표에 도달하면 경로를 역추적하세요'],
              estimatedMinutes: 15,
              starterCode: 'function findPath(grid, startX, startY, goalX, goalY) {\n' +
                '  var queue = [{ x: startX, y: startY, path: [] }];\n' +
                '  var visited = {};\n' +
                '  visited[startX + "," + startY] = true;\n' +
                '  var dx = [0, 1, 0, -1];\n' +
                '  var dy = [-1, 0, 1, 0];\n' +
                '  // TODO: BFS로 최단 경로 찾기\n' +
                '  // queue가 빌 때까지 반복\n' +
                '  // 4방향 탐색, 유효하고 방문 안한 곳 추가\n' +
                '  return []; // 경로 없음\n' +
                '}',
              solution: 'function findPath(grid, startX, startY, goalX, goalY) {\n' +
                '  var queue = [{ x: startX, y: startY, path: [] }];\n' +
                '  var visited = {};\n' +
                '  visited[startX + "," + startY] = true;\n' +
                '  var dx = [0, 1, 0, -1];\n' +
                '  var dy = [-1, 0, 1, 0];\n' +
                '  while (queue.length > 0) {\n' +
                '    var current = queue.shift();\n' +
                '    if (current.x === goalX && current.y === goalY) {\n' +
                '      return current.path;\n' +
                '    }\n' +
                '    for (var d = 0; d < 4; d++) {\n' +
                '      var nx = current.x + dx[d];\n' +
                '      var ny = current.y + dy[d];\n' +
                '      var key = nx + "," + ny;\n' +
                '      if (nx >= 0 && nx < grid[0].length && ny >= 0 && ny < grid.length && grid[ny][nx] === 0 && !visited[key]) {\n' +
                '        visited[key] = true;\n' +
                '        queue.push({ x: nx, y: ny, path: current.path.concat([{ x: nx, y: ny }]) });\n' +
                '      }\n' +
                '    }\n' +
                '  }\n' +
                '  return [];\n' +
                '}',
              feedback: {
                perfect: 'BFS 경로 탐색을 완벽하게 구현했어요! 자율주행 로봇의 핵심 알고리즘이에요!',
                good: '좋은 구조예요! 방문 체크나 큐 관리를 확인하세요.',
                partial: 'BFS 구조는 이해했지만 경로 기록이 불완전해요.',
                wrong: '큐에서 꺼내고, 4방향 탐색 후 유효한 칸을 큐에 추가하세요.'
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
              title: '개발 분야 매칭 함수',
              description: '관심사(배열)를 입력받아 적합한 개발 분야를 추천하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['관심사 키워드와 분야를 매핑하세요', 'indexOf로 키워드 포함 여부를 확인하세요', '여러 분야를 추천할 수 있어요'],
              estimatedMinutes: 5,
              starterCode: 'function recommendCareer(interests) {\n' +
                '  var careers = [];\n' +
                '  // TODO: "디자인" 포함시 "프론트엔드" 추가\n' +
                '  // TODO: "데이터" 포함시 "데이터 과학" 추가\n' +
                '  // TODO: "보안" 포함시 "보안 엔지니어" 추가\n' +
                '  // TODO: "게임" 포함시 "게임 개발자" 추가\n' +
                '  return careers;\n' +
                '}',
              solution: 'function recommendCareer(interests) {\n' +
                '  var careers = [];\n' +
                '  if (interests.indexOf("디자인") !== -1) careers.push("프론트엔드");\n' +
                '  if (interests.indexOf("데이터") !== -1) careers.push("데이터 과학");\n' +
                '  if (interests.indexOf("보안") !== -1) careers.push("보안 엔지니어");\n' +
                '  if (interests.indexOf("게임") !== -1) careers.push("게임 개발자");\n' +
                '  return careers;\n' +
                '}',
              feedback: {
                perfect: '진로 매칭 함수를 완벽하게 만들었어요!',
                good: '대부분 맞았어요! 일부 매핑을 확인하세요.',
                partial: '일부 분야만 매핑했어요. 모든 키워드를 처리하세요.',
                wrong: 'interests.indexOf("키워드") !== -1 로 포함 여부를 확인하세요.'
              }
            },
            {
              id: 'c2',
              title: '기술 스택 점수 계산기',
              description: '보유 기술 목록과 직무 요구 기술을 비교해 적합도 점수를 계산하세요.',
              difficulty: 'easy',
              hints: ['두 배열을 비교해 공통 요소를 찾으세요', '일치하는 기술 수 / 요구 기술 수 * 100 = 점수', 'indexOf로 포함 여부를 확인하세요'],
              estimatedMinutes: 6,
              starterCode: 'function calculateFitScore(mySkills, requiredSkills) {\n' +
                '  var matchCount = 0;\n' +
                '  // TODO: requiredSkills 각각이 mySkills에 있는지 확인\n' +
                '  // TODO: 백분율 점수 반환\n' +
                '  return 0;\n' +
                '}',
              solution: 'function calculateFitScore(mySkills, requiredSkills) {\n' +
                '  var matchCount = 0;\n' +
                '  for (var i = 0; i < requiredSkills.length; i++) {\n' +
                '    if (mySkills.indexOf(requiredSkills[i]) !== -1) {\n' +
                '      matchCount++;\n' +
                '    }\n' +
                '  }\n' +
                '  return Math.round((matchCount / requiredSkills.length) * 100);\n' +
                '}',
              feedback: {
                perfect: '기술 매칭 점수를 완벽하게 구현했어요!',
                good: '좋아요! 백분율 계산을 확인하세요.',
                partial: '비교는 하지만 점수 계산이 정확하지 않아요.',
                wrong: '일치 수를 세고 (matchCount / requiredSkills.length) * 100 으로 점수를 구하세요.'
              }
            },
            {
              id: 'c3',
              title: '경력 성장 시뮬레이터',
              description: '연차별 레벨(주니어, 미드, 시니어)과 예상 연봉을 계산하는 시뮬레이터를 만드세요.',
              difficulty: 'medium',
              hints: ['연차에 따라 레벨을 분류하세요', '0-2년: 주니어, 3-6년: 미드, 7년+: 시니어', '연봉은 기본급 * (1 + 연차 * 성장률)'],
              estimatedMinutes: 8,
              starterCode: 'function careerSimulation(years, baseSalary, growthRate) {\n' +
                '  // TODO: 연차에 따른 레벨 결정\n' +
                '  var level = ___;\n' +
                '  // TODO: 예상 연봉 계산\n' +
                '  var salary = ___;\n' +
                '  return { level: level, salary: salary, years: years };\n' +
                '}',
              solution: 'function careerSimulation(years, baseSalary, growthRate) {\n' +
                '  var level = "주니어";\n' +
                '  if (years >= 7) { level = "시니어"; }\n' +
                '  else if (years >= 3) { level = "미드"; }\n' +
                '  var salary = Math.round(baseSalary * (1 + years * growthRate));\n' +
                '  return { level: level, salary: salary, years: years };\n' +
                '}',
              feedback: {
                perfect: '경력 시뮬레이터를 완벽하게 구현했어요!',
                good: '좋아요! 레벨 분류 기준을 확인하세요.',
                partial: '레벨은 맞지만 연봉 계산이 정확하지 않아요.',
                wrong: 'if/else if로 연차별 레벨을 분류하고 baseSalary * (1 + years * rate)로 계산하세요.'
              }
            },
            {
              id: 'c4',
              title: '기술 트리 시스템',
              description: '기술 트리(의존관계)에서 특정 기술을 배우기 위한 선수 과목을 확인하는 시스템을 만드세요.',
              difficulty: 'medium',
              hints: ['각 기술의 선수 과목을 객체로 저장하세요', '재귀적으로 선수 과목의 선수 과목도 확인하세요', '이미 확인한 기술은 건너뛰세요'],
              estimatedMinutes: 10,
              starterCode: 'var techTree = {\n' +
                '  "React": ["JavaScript", "HTML"],\n' +
                '  "JavaScript": ["프로그래밍 기초"],\n' +
                '  "HTML": [],\n' +
                '  "프로그래밍 기초": []\n' +
                '};\n' +
                '\n' +
                'function getPrerequisites(skill, tree) {\n' +
                '  // TODO: skill의 모든 선수 과목 (재귀적) 반환\n' +
                '  var result = [];\n' +
                '  return result;\n' +
                '}',
              solution: 'var techTree = {\n' +
                '  "React": ["JavaScript", "HTML"],\n' +
                '  "JavaScript": ["프로그래밍 기초"],\n' +
                '  "HTML": [],\n' +
                '  "프로그래밍 기초": []\n' +
                '};\n' +
                '\n' +
                'function getPrerequisites(skill, tree) {\n' +
                '  var result = [];\n' +
                '  var prereqs = tree[skill] || [];\n' +
                '  for (var i = 0; i < prereqs.length; i++) {\n' +
                '    if (result.indexOf(prereqs[i]) === -1) {\n' +
                '      result.push(prereqs[i]);\n' +
                '      var sub = getPrerequisites(prereqs[i], tree);\n' +
                '      for (var j = 0; j < sub.length; j++) {\n' +
                '        if (result.indexOf(sub[j]) === -1) result.push(sub[j]);\n' +
                '      }\n' +
                '    }\n' +
                '  }\n' +
                '  return result;\n' +
                '}',
              feedback: {
                perfect: '기술 트리 탐색을 완벽하게 구현했어요! 재귀적 사고가 훌륭해요!',
                good: '좋아요! 중복 제거를 확인해보세요.',
                partial: '1단계는 되지만 재귀 탐색이 불완전해요.',
                wrong: '선수 과목을 순회하며 재귀적으로 하위 선수 과목도 수집하세요.'
              }
            },
            {
              id: 'c5',
              title: '개발자 프로필 분석기',
              description: '개발자 프로필(기술, 경력, 관심사)을 분석해 종합 리포트를 생성하는 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['여러 함수를 조합하세요', '강점과 약점을 분석하세요', '추천 학습 경로를 제시하세요'],
              estimatedMinutes: 15,
              starterCode: 'function analyzeProfile(profile) {\n' +
                '  // profile = { name, skills: [], years, interests: [] }\n' +
                '  // TODO: 추천 직무 계산\n' +
                '  // TODO: 레벨 및 예상 연봉 계산\n' +
                '  // TODO: 부족한 기술 파악\n' +
                '  return {};\n' +
                '}',
              solution: 'function analyzeProfile(profile) {\n' +
                '  var careers = recommendCareer(profile.interests);\n' +
                '  var sim = careerSimulation(profile.years, 3000, 0.1);\n' +
                '  var targetSkills = ["JavaScript", "HTML", "CSS", "React", "Node.js"];\n' +
                '  var fitScore = calculateFitScore(profile.skills, targetSkills);\n' +
                '  var missing = [];\n' +
                '  for (var i = 0; i < targetSkills.length; i++) {\n' +
                '    if (profile.skills.indexOf(targetSkills[i]) === -1) {\n' +
                '      missing.push(targetSkills[i]);\n' +
                '    }\n' +
                '  }\n' +
                '  return {\n' +
                '    name: profile.name,\n' +
                '    recommendedCareers: careers,\n' +
                '    level: sim.level,\n' +
                '    estimatedSalary: sim.salary,\n' +
                '    fitScore: fitScore,\n' +
                '    missingSkills: missing\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: '프로필 분석기를 완벽하게 구현했어요! 여러 함수를 훌륭하게 통합했어요!',
                good: '좋은 구조예요! 부족한 기술 분석을 추가하면 더 좋겠어요.',
                partial: '일부 분석만 구현됐어요. 모든 항목을 포함하세요.',
                wrong: '이전에 만든 함수들(recommendCareer, calculateFitScore, careerSimulation)을 활용하세요.'
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
              title: '코드 리뷰 코멘트 생성기',
              description: '코드의 문제점을 분석하고 건설적인 리뷰 코멘트를 생성하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['코드 패턴을 문자열 검색으로 찾으세요', 'indexOf로 문제 패턴을 감지하세요', '건설적인 피드백 메시지를 반환하세요'],
              estimatedMinutes: 5,
              starterCode: 'function reviewCode(code) {\n' +
                '  var comments = [];\n' +
                '  // TODO: "var " 포함시 "let/const 사용을 권장합니다" 추가\n' +
                '  // TODO: "console.log" 포함시 "디버그 코드를 제거해주세요" 추가\n' +
                '  // TODO: 함수 길이가 200자 초과시 "함수를 분리해주세요" 추가\n' +
                '  return comments;\n' +
                '}',
              solution: 'function reviewCode(code) {\n' +
                '  var comments = [];\n' +
                '  if (code.indexOf("var ") !== -1) {\n' +
                '    comments.push("let/const 사용을 권장합니다");\n' +
                '  }\n' +
                '  if (code.indexOf("console.log") !== -1) {\n' +
                '    comments.push("디버그 코드를 제거해주세요");\n' +
                '  }\n' +
                '  if (code.length > 200) {\n' +
                '    comments.push("함수를 분리해주세요");\n' +
                '  }\n' +
                '  return comments;\n' +
                '}',
              feedback: {
                perfect: '코드 리뷰 함수를 완벽하게 만들었어요! 팀워크의 핵심 스킬이에요!',
                good: '잘했어요! 일부 체크 조건을 확인하세요.',
                partial: '일부 패턴만 감지했어요. 모든 조건을 추가하세요.',
                wrong: 'code.indexOf("패턴") !== -1 으로 각 패턴을 감지하세요.'
              }
            },
            {
              id: 'c2',
              title: '태스크 우선순위 정렬',
              description: '긴급도와 중요도를 기준으로 태스크를 우선순위에 따라 정렬하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['sort 함수를 사용하세요', '긴급+중요가 가장 높은 우선순위예요', '점수를 계산해 비교하세요'],
              estimatedMinutes: 6,
              starterCode: 'function prioritizeTasks(tasks) {\n' +
                '  // tasks = [{ name, urgent: true/false, important: true/false }]\n' +
                '  // TODO: 점수 계산 (urgent=2점, important=1점)\n' +
                '  // TODO: 점수 내림차순 정렬\n' +
                '  return tasks;\n' +
                '}',
              solution: 'function prioritizeTasks(tasks) {\n' +
                '  return tasks.sort(function(a, b) {\n' +
                '    var scoreA = (a.urgent ? 2 : 0) + (a.important ? 1 : 0);\n' +
                '    var scoreB = (b.urgent ? 2 : 0) + (b.important ? 1 : 0);\n' +
                '    return scoreB - scoreA;\n' +
                '  });\n' +
                '}',
              feedback: {
                perfect: '태스크 우선순위 정렬을 완벽하게 구현했어요! 효율적인 업무 관리의 핵심이에요!',
                good: '좋아요! 점수 계산이나 정렬 방향을 확인하세요.',
                partial: '정렬은 되지만 점수 계산이 정확하지 않아요.',
                wrong: 'urgent ? 2 : 0 + important ? 1 : 0 으로 점수를 구하고 sort로 내림차순 정렬하세요.'
              }
            },
            {
              id: 'c3',
              title: '팀 역할 배분기',
              description: '팀원의 기술과 선호도를 기반으로 최적의 역할을 배분하는 알고리즘을 만드세요.',
              difficulty: 'medium',
              hints: ['각 역할에 필요한 기술을 정의하세요', '팀원별 적합도 점수를 계산하세요', '가장 높은 점수의 팀원에게 역할을 배분하세요'],
              estimatedMinutes: 10,
              starterCode: 'var roles = {\n' +
                '  "프론트엔드": ["HTML", "CSS", "JavaScript"],\n' +
                '  "백엔드": ["Node.js", "Database", "API"],\n' +
                '  "디자이너": ["Figma", "UX", "CSS"]\n' +
                '};\n' +
                '\n' +
                'function assignRoles(members, roles) {\n' +
                '  // members = [{ name, skills: [] }]\n' +
                '  var assignments = {};\n' +
                '  // TODO: 각 역할에 가장 적합한 멤버 배분\n' +
                '  return assignments;\n' +
                '}',
              solution: 'var roles = {\n' +
                '  "프론트엔드": ["HTML", "CSS", "JavaScript"],\n' +
                '  "백엔드": ["Node.js", "Database", "API"],\n' +
                '  "디자이너": ["Figma", "UX", "CSS"]\n' +
                '};\n' +
                '\n' +
                'function assignRoles(members, roles) {\n' +
                '  var assignments = {};\n' +
                '  var assigned = {};\n' +
                '  var roleNames = Object.keys(roles);\n' +
                '  for (var r = 0; r < roleNames.length; r++) {\n' +
                '    var role = roleNames[r];\n' +
                '    var bestScore = -1;\n' +
                '    var bestMember = null;\n' +
                '    for (var m = 0; m < members.length; m++) {\n' +
                '      if (assigned[members[m].name]) continue;\n' +
                '      var score = 0;\n' +
                '      for (var s = 0; s < roles[role].length; s++) {\n' +
                '        if (members[m].skills.indexOf(roles[role][s]) !== -1) score++;\n' +
                '      }\n' +
                '      if (score > bestScore) { bestScore = score; bestMember = members[m].name; }\n' +
                '    }\n' +
                '    if (bestMember) { assignments[role] = bestMember; assigned[bestMember] = true; }\n' +
                '  }\n' +
                '  return assignments;\n' +
                '}',
              feedback: {
                perfect: '역할 배분 알고리즘을 완벽하게 구현했어요! 팀 리더에게 필요한 능력이에요!',
                good: '좋은 접근이에요! 이미 배정된 멤버 처리를 확인하세요.',
                partial: '점수 계산은 되지만 중복 배정 방지가 빠졌어요.',
                wrong: '각 역할에 대해 모든 멤버의 점수를 계산하고 최고 점수 멤버를 배정하세요.'
              }
            },
            {
              id: 'c4',
              title: '프로젝트 일정 추정기',
              description: '태스크 목록과 의존성을 기반으로 전체 프로젝트 소요 시간을 추정하세요.',
              difficulty: 'medium',
              hints: ['의존성이 없는 태스크는 병렬 실행 가능해요', '의존 태스크는 선행 완료 후 시작', '가장 긴 경로(크리티컬 패스)가 전체 시간이에요'],
              estimatedMinutes: 10,
              starterCode: 'function estimateProject(tasks) {\n' +
                '  // tasks = [{ id, name, hours, dependsOn: [] }]\n' +
                '  var completed = {};\n' +
                '  // TODO: 각 태스크의 시작 시간 계산\n' +
                '  // TODO: 전체 프로젝트 소요 시간 반환\n' +
                '  return 0;\n' +
                '}',
              solution: 'function estimateProject(tasks) {\n' +
                '  var endTimes = {};\n' +
                '  function getEndTime(taskId) {\n' +
                '    if (endTimes[taskId] !== undefined) return endTimes[taskId];\n' +
                '    var task = null;\n' +
                '    for (var i = 0; i < tasks.length; i++) {\n' +
                '      if (tasks[i].id === taskId) { task = tasks[i]; break; }\n' +
                '    }\n' +
                '    var startTime = 0;\n' +
                '    for (var d = 0; d < task.dependsOn.length; d++) {\n' +
                '      var depEnd = getEndTime(task.dependsOn[d]);\n' +
                '      if (depEnd > startTime) startTime = depEnd;\n' +
                '    }\n' +
                '    endTimes[taskId] = startTime + task.hours;\n' +
                '    return endTimes[taskId];\n' +
                '  }\n' +
                '  var maxTime = 0;\n' +
                '  for (var i = 0; i < tasks.length; i++) {\n' +
                '    var end = getEndTime(tasks[i].id);\n' +
                '    if (end > maxTime) maxTime = end;\n' +
                '  }\n' +
                '  return maxTime;\n' +
                '}',
              feedback: {
                perfect: '프로젝트 일정 추정을 완벽하게 구현했어요! 크리티컬 패스 분석의 기초예요!',
                good: '좋은 접근이에요! 의존성 처리를 확인하세요.',
                partial: '기본 구조는 맞지만 의존성 체인 계산이 불완전해요.',
                wrong: '각 태스크의 시작 시간은 의존 태스크들의 최대 종료 시간이에요.'
              }
            },
            {
              id: 'c5',
              title: '회고 분석 도구',
              description: '프로젝트 회고 데이터를 분석하여 개선점과 잘한 점을 요약하는 도구를 만드세요.',
              difficulty: 'hard',
              hints: ['피드백을 카테고리별로 분류하세요', '키워드 빈도를 분석하세요', '가장 많이 언급된 항목을 우선 표시하세요'],
              estimatedMinutes: 15,
              starterCode: 'function analyzeRetro(feedbacks) {\n' +
                '  // feedbacks = [{ type: "good"/"improve", text: "..." }]\n' +
                '  // TODO: type별 그룹화\n' +
                '  // TODO: 키워드 빈도 분석\n' +
                '  // TODO: 요약 반환\n' +
                '  return {};\n' +
                '}',
              solution: 'function analyzeRetro(feedbacks) {\n' +
                '  var good = [];\n' +
                '  var improve = [];\n' +
                '  var keywords = {};\n' +
                '  for (var i = 0; i < feedbacks.length; i++) {\n' +
                '    if (feedbacks[i].type === "good") {\n' +
                '      good.push(feedbacks[i].text);\n' +
                '    } else {\n' +
                '      improve.push(feedbacks[i].text);\n' +
                '    }\n' +
                '    var words = feedbacks[i].text.split(" ");\n' +
                '    for (var w = 0; w < words.length; w++) {\n' +
                '      if (words[w].length > 2) {\n' +
                '        keywords[words[w]] = (keywords[words[w]] || 0) + 1;\n' +
                '      }\n' +
                '    }\n' +
                '  }\n' +
                '  var topKeywords = Object.keys(keywords).sort(function(a, b) {\n' +
                '    return keywords[b] - keywords[a];\n' +
                '  }).slice(0, 5);\n' +
                '  return { good: good, improve: improve, topKeywords: topKeywords, total: feedbacks.length };\n' +
                '}',
              feedback: {
                perfect: '회고 분석 도구를 완벽하게 구현했어요! 팀 성장에 필수적인 도구예요!',
                good: '좋은 구조예요! 키워드 분석을 더 정교하게 만들어보세요.',
                partial: '분류는 되지만 키워드 분석이 빠졌어요.',
                wrong: 'type으로 분류하고 text를 split해서 키워드 빈도를 세세요.'
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
              title: '라이선스 확인 함수',
              description: '오픈소스 라이선스 이름을 받아 주요 조건(상업적 사용, 수정, 배포)을 반환하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['MIT, GPL, Apache 등 주요 라이선스를 객체로 정의하세요', '각 라이선스별 허용 조건을 설정하세요', '대소문자를 통일해서 비교하세요'],
              estimatedMinutes: 5,
              starterCode: 'function checkLicense(name) {\n' +
                '  var licenses = {\n' +
                '    // TODO: MIT, GPL, Apache 라이선스 정보 추가\n' +
                '    // 각각 commercial, modify, distribute 속성\n' +
                '  };\n' +
                '  return licenses[name.toUpperCase()] || { error: "Unknown license" };\n' +
                '}',
              solution: 'function checkLicense(name) {\n' +
                '  var licenses = {\n' +
                '    MIT: { commercial: true, modify: true, distribute: true, copyleft: false },\n' +
                '    GPL: { commercial: true, modify: true, distribute: true, copyleft: true },\n' +
                '    APACHE: { commercial: true, modify: true, distribute: true, copyleft: false }\n' +
                '  };\n' +
                '  return licenses[name.toUpperCase()] || { error: "Unknown license" };\n' +
                '}',
              feedback: {
                perfect: '라이선스 정보를 완벽하게 구현했어요! 오픈소스 활용의 첫걸음이에요!',
                good: '대부분 맞았어요! 일부 라이선스 조건을 확인하세요.',
                partial: '일부 라이선스만 구현했어요. 나머지도 추가하세요.',
                wrong: '각 라이선스를 객체로 정의하고 대문자 변환 후 비교하세요.'
              }
            },
            {
              id: 'c2',
              title: '시맨틱 버전 비교',
              description: '시맨틱 버전(x.y.z) 두 개를 비교하여 어느 것이 더 높은 버전인지 반환하세요.',
              difficulty: 'easy',
              hints: ['버전 문자열을 .으로 split하세요', 'major, minor, patch 순서로 비교하세요', '문자를 숫자로 변환하세요'],
              estimatedMinutes: 6,
              starterCode: 'function compareVersions(v1, v2) {\n' +
                '  // "1.2.3" vs "1.3.0"\n' +
                '  // 반환: 1(v1>v2), -1(v1<v2), 0(같음)\n' +
                '  var parts1 = v1.split(".");\n' +
                '  var parts2 = v2.split(".");\n' +
                '  // TODO: major, minor, patch 순서로 비교\n' +
                '  return 0;\n' +
                '}',
              solution: 'function compareVersions(v1, v2) {\n' +
                '  var parts1 = v1.split(".");\n' +
                '  var parts2 = v2.split(".");\n' +
                '  for (var i = 0; i < 3; i++) {\n' +
                '    var n1 = parseInt(parts1[i] || "0");\n' +
                '    var n2 = parseInt(parts2[i] || "0");\n' +
                '    if (n1 > n2) return 1;\n' +
                '    if (n1 < n2) return -1;\n' +
                '  }\n' +
                '  return 0;\n' +
                '}',
              feedback: {
                perfect: '버전 비교를 완벽하게 구현했어요! npm 패키지 관리의 핵심이에요!',
                good: '좋아요! 문자열을 숫자로 변환하는 부분을 확인하세요.',
                partial: 'split은 맞지만 비교 로직이 불완전해요.',
                wrong: 'split(".") 후 parseInt로 변환하고 순서대로 비교하세요.'
              }
            },
            {
              id: 'c3',
              title: 'Git 커밋 메시지 파서',
              description: 'Conventional Commit 형식(type: description)의 커밋 메시지를 파싱하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['":"로 type과 description을 분리하세요', 'type은 feat, fix, docs 등이에요', 'trim()으로 공백을 제거하세요'],
              estimatedMinutes: 8,
              starterCode: 'function parseCommit(message) {\n' +
                '  // "feat: add login page" -> { type: "feat", description: "add login page" }\n' +
                '  // TODO: 메시지를 파싱하여 type과 description 추출\n' +
                '  // 유효하지 않은 형식이면 null 반환\n' +
                '  return null;\n' +
                '}',
              solution: 'function parseCommit(message) {\n' +
                '  var colonIdx = message.indexOf(":");\n' +
                '  if (colonIdx === -1) return null;\n' +
                '  var type = message.substring(0, colonIdx).trim();\n' +
                '  var description = message.substring(colonIdx + 1).trim();\n' +
                '  var validTypes = ["feat", "fix", "docs", "style", "refactor", "test", "chore"];\n' +
                '  if (validTypes.indexOf(type) === -1) return null;\n' +
                '  return { type: type, description: description };\n' +
                '}',
              feedback: {
                perfect: '커밋 메시지 파서를 완벽하게 구현했어요! 오픈소스 기여의 필수 규칙이에요!',
                good: '좋아요! 유효성 검사를 추가하면 더 좋겠어요.',
                partial: '파싱은 되지만 유효한 타입 검증이 빠졌어요.',
                wrong: 'indexOf(":")로 분리하고 substring으로 type과 description을 추출하세요.'
              }
            },
            {
              id: 'c4',
              title: '의존성 충돌 감지기',
              description: '두 패키지의 의존성 목록을 비교해 버전 충돌을 감지하는 함수를 만드세요.',
              difficulty: 'medium',
              hints: ['같은 패키지 이름을 찾으세요', '같은 이름인데 다른 버전이면 충돌이에요', 'compareVersions를 재사용하세요'],
              estimatedMinutes: 10,
              starterCode: 'function findConflicts(depsA, depsB) {\n' +
                '  // depsA = { "react": "17.0.0", "lodash": "4.17.0" }\n' +
                '  // depsB = { "react": "18.0.0", "axios": "1.0.0" }\n' +
                '  var conflicts = [];\n' +
                '  // TODO: 공통 패키지 중 버전이 다른 것 찾기\n' +
                '  return conflicts;\n' +
                '}',
              solution: 'function findConflicts(depsA, depsB) {\n' +
                '  var conflicts = [];\n' +
                '  var keysA = Object.keys(depsA);\n' +
                '  for (var i = 0; i < keysA.length; i++) {\n' +
                '    var pkg = keysA[i];\n' +
                '    if (depsB[pkg] && depsA[pkg] !== depsB[pkg]) {\n' +
                '      conflicts.push({ package: pkg, versionA: depsA[pkg], versionB: depsB[pkg] });\n' +
                '    }\n' +
                '  }\n' +
                '  return conflicts;\n' +
                '}',
              feedback: {
                perfect: '의존성 충돌 감지를 완벽하게 구현했어요! 패키지 관리의 핵심이에요!',
                good: '좋아요! 버전 비교 방식을 확인하세요.',
                partial: '공통 패키지는 찾지만 버전 비교가 빠졌어요.',
                wrong: 'Object.keys로 순회하며 같은 이름이지만 다른 버전인 패키지를 찾으세요.'
              }
            },
            {
              id: 'c5',
              title: '오픈소스 기여 시뮬레이터',
              description: '이슈 선택, 브랜치 생성, PR 제출 과정을 시뮬레이션하는 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['상태를 단계별로 관리하세요', '각 단계에서 유효성 검사를 하세요', '이전 단계 완료 여부를 확인하세요'],
              estimatedMinutes: 15,
              starterCode: 'function ContributionFlow() {\n' +
                '  this.step = "start";\n' +
                '  this.issue = null;\n' +
                '  this.branch = null;\n' +
                '  this.pr = null;\n' +
                '}\n' +
                '\n' +
                'ContributionFlow.prototype.selectIssue = function(issue) {\n' +
                '  // TODO: 이슈 선택 (start 단계에서만)\n' +
                '};\n' +
                '\n' +
                'ContributionFlow.prototype.createBranch = function(name) {\n' +
                '  // TODO: 브랜치 생성 (issue-selected 단계에서만)\n' +
                '};\n' +
                '\n' +
                'ContributionFlow.prototype.submitPR = function(title, desc) {\n' +
                '  // TODO: PR 제출 (branch-created 단계에서만)\n' +
                '}',
              solution: 'function ContributionFlow() {\n' +
                '  this.step = "start";\n' +
                '  this.issue = null;\n' +
                '  this.branch = null;\n' +
                '  this.pr = null;\n' +
                '}\n' +
                '\n' +
                'ContributionFlow.prototype.selectIssue = function(issue) {\n' +
                '  if (this.step !== "start") return "Wrong step";\n' +
                '  this.issue = issue;\n' +
                '  this.step = "issue-selected";\n' +
                '  return "Issue #" + issue + " selected";\n' +
                '};\n' +
                '\n' +
                'ContributionFlow.prototype.createBranch = function(name) {\n' +
                '  if (this.step !== "issue-selected") return "Wrong step";\n' +
                '  this.branch = name;\n' +
                '  this.step = "branch-created";\n' +
                '  return "Branch " + name + " created";\n' +
                '};\n' +
                '\n' +
                'ContributionFlow.prototype.submitPR = function(title, desc) {\n' +
                '  if (this.step !== "branch-created") return "Wrong step";\n' +
                '  this.pr = { title: title, description: desc, branch: this.branch, issue: this.issue };\n' +
                '  this.step = "pr-submitted";\n' +
                '  return "PR submitted: " + title;\n' +
                '}',
              feedback: {
                perfect: '오픈소스 기여 흐름을 완벽하게 구현했어요! 실제 GitHub 기여 과정과 동일해요!',
                good: '좋은 구조예요! 단계 검증을 확인하세요.',
                partial: '일부 단계만 구현했어요. 모든 메서드를 완성하세요.',
                wrong: '각 메서드에서 this.step을 확인하고, 올바른 단계일 때만 실행하세요.'
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
              title: '프로젝트 카드 데이터 생성',
              description: '포트폴리오 프로젝트 정보를 구조화된 객체로 만드는 함수를 작성하세요.',
              difficulty: 'easy',
              hints: ['필요한 필드: title, description, techStack, link', '기본값을 설정하세요', '배열로 기술 스택을 관리하세요'],
              estimatedMinutes: 5,
              starterCode: 'function createProject(title, description, techStack, link) {\n' +
                '  // TODO: 프로젝트 객체 반환\n' +
                '  // techStack이 없으면 빈 배열\n' +
                '  // link가 없으면 "#"\n' +
                '  return {};\n' +
                '}',
              solution: 'function createProject(title, description, techStack, link) {\n' +
                '  return {\n' +
                '    title: title,\n' +
                '    description: description,\n' +
                '    techStack: techStack || [],\n' +
                '    link: link || "#",\n' +
                '    createdAt: Date.now()\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: '프로젝트 카드 구조를 완벽하게 만들었어요!',
                good: '좋아요! 기본값 처리를 확인하세요.',
                partial: '기본 구조는 맞지만 기본값 처리가 빠졌어요.',
                wrong: '|| 연산자로 기본값을 설정하세요. techStack || [] 처럼요.'
              }
            },
            {
              id: 'c2',
              title: '기술별 프로젝트 필터링',
              description: '특정 기술을 사용한 프로젝트만 필터링하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['filter 대신 for문과 if문을 사용해도 돼요', 'indexOf로 기술 포함 여부를 확인하세요', '일치하는 프로젝트를 새 배열에 담으세요'],
              estimatedMinutes: 5,
              starterCode: 'function filterByTech(projects, tech) {\n' +
                '  var result = [];\n' +
                '  // TODO: techStack에 tech가 포함된 프로젝트만 result에 추가\n' +
                '  return result;\n' +
                '}',
              solution: 'function filterByTech(projects, tech) {\n' +
                '  var result = [];\n' +
                '  for (var i = 0; i < projects.length; i++) {\n' +
                '    if (projects[i].techStack.indexOf(tech) !== -1) {\n' +
                '      result.push(projects[i]);\n' +
                '    }\n' +
                '  }\n' +
                '  return result;\n' +
                '}',
              feedback: {
                perfect: '프로젝트 필터링을 완벽하게 구현했어요!',
                good: '좋아요! indexOf 사용법을 확인하세요.',
                partial: '반복문은 맞지만 필터 조건이 정확하지 않아요.',
                wrong: 'projects[i].techStack.indexOf(tech) !== -1 로 포함 여부를 확인하세요.'
              }
            },
            {
              id: 'c3',
              title: '포트폴리오 통계 생성',
              description: '전체 포트폴리오에서 사용된 기술 빈도와 프로젝트 수 등 통계를 생성하세요.',
              difficulty: 'medium',
              hints: ['모든 프로젝트의 techStack을 순회하세요', '기술별 사용 횟수를 객체로 세세요', '가장 많이 사용한 기술을 찾으세요'],
              estimatedMinutes: 8,
              starterCode: 'function portfolioStats(projects) {\n' +
                '  var techCount = {};\n' +
                '  // TODO: 모든 프로젝트의 기술 빈도 세기\n' +
                '  // TODO: 가장 많이 사용한 기술 Top 3 찾기\n' +
                '  return { totalProjects: projects.length, techCount: techCount, topTech: [] };\n' +
                '}',
              solution: 'function portfolioStats(projects) {\n' +
                '  var techCount = {};\n' +
                '  for (var i = 0; i < projects.length; i++) {\n' +
                '    for (var j = 0; j < projects[i].techStack.length; j++) {\n' +
                '      var tech = projects[i].techStack[j];\n' +
                '      techCount[tech] = (techCount[tech] || 0) + 1;\n' +
                '    }\n' +
                '  }\n' +
                '  var topTech = Object.keys(techCount).sort(function(a, b) {\n' +
                '    return techCount[b] - techCount[a];\n' +
                '  }).slice(0, 3);\n' +
                '  return { totalProjects: projects.length, techCount: techCount, topTech: topTech };\n' +
                '}',
              feedback: {
                perfect: '포트폴리오 통계를 완벽하게 구현했어요! 자기 분석 능력이 훌륭해요!',
                good: '좋아요! Top 기술 정렬을 확인하세요.',
                partial: '빈도는 세지만 정렬이 빠졌어요.',
                wrong: '이중 for문으로 빈도를 세고 Object.keys().sort()로 정렬하세요.'
              }
            },
            {
              id: 'c4',
              title: '포트폴리오 HTML 생성기',
              description: '프로젝트 배열을 받아 HTML 카드 목록을 문자열로 생성하세요.',
              difficulty: 'medium',
              hints: ['문자열 결합으로 HTML을 만드세요', '각 프로젝트마다 카드 div를 만드세요', 'techStack은 span으로 표시하세요'],
              estimatedMinutes: 10,
              starterCode: 'function generateHTML(projects) {\n' +
                '  var html = "<div class=\\"portfolio\\">";\n' +
                '  // TODO: 각 프로젝트를 카드 HTML로 변환\n' +
                '  html += "</div>";\n' +
                '  return html;\n' +
                '}',
              solution: 'function generateHTML(projects) {\n' +
                '  var html = "<div class=\\"portfolio\\">";\n' +
                '  for (var i = 0; i < projects.length; i++) {\n' +
                '    var p = projects[i];\n' +
                '    html += "<div class=\\"card\\">";\n' +
                '    html += "<h3>" + p.title + "</h3>";\n' +
                '    html += "<p>" + p.description + "</p>";\n' +
                '    html += "<div class=\\"tech\\">";\n' +
                '    for (var j = 0; j < p.techStack.length; j++) {\n' +
                '      html += "<span>" + p.techStack[j] + "</span>";\n' +
                '    }\n' +
                '    html += "</div>";\n' +
                '    html += "<a href=\\"" + p.link + "\\">View</a>";\n' +
                '    html += "</div>";\n' +
                '  }\n' +
                '  html += "</div>";\n' +
                '  return html;\n' +
                '}',
              feedback: {
                perfect: 'HTML 생성기를 완벽하게 구현했어요! 동적 웹페이지의 기초예요!',
                good: '좋은 구조예요! HTML 태그 닫기를 확인하세요.',
                partial: '일부 요소만 생성했어요. 모든 필드를 포함하세요.',
                wrong: '문자열 결합(+)으로 HTML 태그를 순서대로 조립하세요.'
              }
            },
            {
              id: 'c5',
              title: '포트폴리오 관리 시스템',
              description: '프로젝트 CRUD(생성, 조회, 수정, 삭제)와 검색 기능을 갖춘 포트폴리오 관리 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['배열로 프로젝트를 관리하세요', 'ID로 프로젝트를 찾으세요', '검색은 제목과 설명에서 키워드를 찾으세요'],
              estimatedMinutes: 15,
              starterCode: 'function Portfolio() {\n' +
                '  this.projects = [];\n' +
                '  this.nextId = 1;\n' +
                '}\n' +
                '\n' +
                'Portfolio.prototype.add = function(title, desc, tech) {\n' +
                '  // TODO: 프로젝트 추가\n' +
                '};\n' +
                '\n' +
                'Portfolio.prototype.remove = function(id) {\n' +
                '  // TODO: ID로 프로젝트 삭제\n' +
                '};\n' +
                '\n' +
                'Portfolio.prototype.search = function(keyword) {\n' +
                '  // TODO: 제목/설명에서 키워드 검색\n' +
                '}',
              solution: 'function Portfolio() {\n' +
                '  this.projects = [];\n' +
                '  this.nextId = 1;\n' +
                '}\n' +
                '\n' +
                'Portfolio.prototype.add = function(title, desc, tech) {\n' +
                '  var project = { id: this.nextId++, title: title, description: desc, techStack: tech || [] };\n' +
                '  this.projects.push(project);\n' +
                '  return project;\n' +
                '};\n' +
                '\n' +
                'Portfolio.prototype.remove = function(id) {\n' +
                '  for (var i = 0; i < this.projects.length; i++) {\n' +
                '    if (this.projects[i].id === id) {\n' +
                '      this.projects.splice(i, 1);\n' +
                '      return true;\n' +
                '    }\n' +
                '  }\n' +
                '  return false;\n' +
                '};\n' +
                '\n' +
                'Portfolio.prototype.search = function(keyword) {\n' +
                '  var results = [];\n' +
                '  var kw = keyword.toLowerCase();\n' +
                '  for (var i = 0; i < this.projects.length; i++) {\n' +
                '    var p = this.projects[i];\n' +
                '    if (p.title.toLowerCase().indexOf(kw) !== -1 || p.description.toLowerCase().indexOf(kw) !== -1) {\n' +
                '      results.push(p);\n' +
                '    }\n' +
                '  }\n' +
                '  return results;\n' +
                '}',
              feedback: {
                perfect: '포트폴리오 관리 시스템을 완벽하게 구현했어요! CRUD 마스터예요!',
                good: '좋은 구조예요! 검색 기능의 대소문자 처리를 확인하세요.',
                partial: '일부 메서드만 구현했어요. 모든 CRUD를 완성하세요.',
                wrong: 'add에서 push, remove에서 splice, search에서 indexOf를 사용하세요.'
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
              title: '학습 진도 추적기',
              description: '학습 항목별 완료 상태를 추적하고 전체 진행률을 계산하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['각 항목에 completed 속성을 두세요', '완료된 항목 수를 세세요', '(완료/전체) * 100 = 진행률'],
              estimatedMinutes: 5,
              starterCode: 'function calculateProgress(topics) {\n' +
                '  // topics = [{ name, completed: true/false }]\n' +
                '  var completed = 0;\n' +
                '  // TODO: completed가 true인 항목 수 세기\n' +
                '  // TODO: 백분율 진행률 반환\n' +
                '  return 0;\n' +
                '}',
              solution: 'function calculateProgress(topics) {\n' +
                '  var completed = 0;\n' +
                '  for (var i = 0; i < topics.length; i++) {\n' +
                '    if (topics[i].completed) completed++;\n' +
                '  }\n' +
                '  return Math.round((completed / topics.length) * 100);\n' +
                '}',
              feedback: {
                perfect: '진도 추적기를 완벽하게 구현했어요!',
                good: '좋아요! 백분율 계산을 확인하세요.',
                partial: '카운팅은 맞지만 백분율 계산이 빠졌어요.',
                wrong: 'completed가 true인 것을 세고 (completed / total) * 100 으로 계산하세요.'
              }
            },
            {
              id: 'c2',
              title: '일일 학습 시간 기록기',
              description: '날짜별 학습 시간을 기록하고 주간/월간 통계를 계산하는 함수를 만드세요.',
              difficulty: 'easy',
              hints: ['날짜를 키로 사용하는 객체를 만드세요', '같은 날짜면 시간을 더하세요', '최근 7일의 합계를 구하세요'],
              estimatedMinutes: 6,
              starterCode: 'function StudyTracker() {\n' +
                '  this.logs = {}; // { "2024-01-15": 2.5 }\n' +
                '}\n' +
                '\n' +
                'StudyTracker.prototype.addTime = function(date, hours) {\n' +
                '  // TODO: 해당 날짜에 시간 추가 (기존 있으면 합산)\n' +
                '};\n' +
                '\n' +
                'StudyTracker.prototype.getTotal = function() {\n' +
                '  // TODO: 전체 합계 반환\n' +
                '}',
              solution: 'function StudyTracker() {\n' +
                '  this.logs = {};\n' +
                '}\n' +
                '\n' +
                'StudyTracker.prototype.addTime = function(date, hours) {\n' +
                '  this.logs[date] = (this.logs[date] || 0) + hours;\n' +
                '};\n' +
                '\n' +
                'StudyTracker.prototype.getTotal = function() {\n' +
                '  var total = 0;\n' +
                '  var dates = Object.keys(this.logs);\n' +
                '  for (var i = 0; i < dates.length; i++) {\n' +
                '    total += this.logs[dates[i]];\n' +
                '  }\n' +
                '  return total;\n' +
                '}',
              feedback: {
                perfect: '학습 시간 기록기를 완벽하게 만들었어요!',
                good: '좋아요! 시간 합산 로직을 확인하세요.',
                partial: '기록은 되지만 합계 계산이 빠졌어요.',
                wrong: 'this.logs[date] = (this.logs[date] || 0) + hours 로 합산하세요.'
              }
            },
            {
              id: 'c3',
              title: '학습 로드맵 생성기',
              description: '목표 기술과 현재 수준을 입력받아 단계별 학습 로드맵을 생성하세요.',
              difficulty: 'medium',
              hints: ['기술별 학습 순서를 미리 정의하세요', '현재 수준 이후의 단계만 반환하세요', '각 단계에 예상 시간을 포함하세요'],
              estimatedMinutes: 8,
              starterCode: 'var roadmaps = {\n' +
                '  "웹개발": [\n' +
                '    { step: 1, topic: "HTML 기초", hours: 20 },\n' +
                '    { step: 2, topic: "CSS 기초", hours: 30 },\n' +
                '    { step: 3, topic: "JavaScript 기초", hours: 50 },\n' +
                '    { step: 4, topic: "React", hours: 40 },\n' +
                '    { step: 5, topic: "Node.js", hours: 40 }\n' +
                '  ]\n' +
                '};\n' +
                '\n' +
                'function generateRoadmap(field, currentStep) {\n' +
                '  // TODO: currentStep 이후의 단계만 반환\n' +
                '  // TODO: 총 예상 시간도 포함\n' +
                '  return { steps: [], totalHours: 0 };\n' +
                '}',
              solution: 'var roadmaps = {\n' +
                '  "웹개발": [\n' +
                '    { step: 1, topic: "HTML 기초", hours: 20 },\n' +
                '    { step: 2, topic: "CSS 기초", hours: 30 },\n' +
                '    { step: 3, topic: "JavaScript 기초", hours: 50 },\n' +
                '    { step: 4, topic: "React", hours: 40 },\n' +
                '    { step: 5, topic: "Node.js", hours: 40 }\n' +
                '  ]\n' +
                '};\n' +
                '\n' +
                'function generateRoadmap(field, currentStep) {\n' +
                '  var all = roadmaps[field] || [];\n' +
                '  var remaining = [];\n' +
                '  var totalHours = 0;\n' +
                '  for (var i = 0; i < all.length; i++) {\n' +
                '    if (all[i].step > currentStep) {\n' +
                '      remaining.push(all[i]);\n' +
                '      totalHours += all[i].hours;\n' +
                '    }\n' +
                '  }\n' +
                '  return { steps: remaining, totalHours: totalHours };\n' +
                '}',
              feedback: {
                perfect: '학습 로드맵 생성기를 완벽하게 구현했어요!',
                good: '좋아요! 필터링 조건을 확인하세요.',
                partial: '단계는 필터링하지만 총 시간 계산이 빠졌어요.',
                wrong: 'step > currentStep 인 것만 필터링하고 hours를 합산하세요.'
              }
            },
            {
              id: 'c4',
              title: '스페이싱 복습 스케줄러',
              description: '에빙하우스 망각곡선에 기반한 복습 스케줄을 생성하세요. 1, 3, 7, 14, 30일 간격으로 복습합니다.',
              difficulty: 'medium',
              hints: ['학습일로부터 간격을 더하세요', 'Date 객체를 활용하세요', '각 복습 날짜를 배열에 담으세요'],
              estimatedMinutes: 10,
              starterCode: 'function createReviewSchedule(topic, startDate) {\n' +
                '  var intervals = [1, 3, 7, 14, 30]; // 복습 간격 (일)\n' +
                '  var schedule = [];\n' +
                '  // TODO: 각 간격에 해당하는 복습 날짜 생성\n' +
                '  // startDate는 "2024-01-15" 형식\n' +
                '  return schedule;\n' +
                '}',
              solution: 'function createReviewSchedule(topic, startDate) {\n' +
                '  var intervals = [1, 3, 7, 14, 30];\n' +
                '  var schedule = [];\n' +
                '  var start = new Date(startDate);\n' +
                '  for (var i = 0; i < intervals.length; i++) {\n' +
                '    var reviewDate = new Date(start.getTime() + intervals[i] * 24 * 60 * 60 * 1000);\n' +
                '    var dateStr = reviewDate.getFullYear() + "-" + String(reviewDate.getMonth() + 1).padStart(2, "0") + "-" + String(reviewDate.getDate()).padStart(2, "0");\n' +
                '    schedule.push({ topic: topic, date: dateStr, interval: intervals[i] });\n' +
                '  }\n' +
                '  return schedule;\n' +
                '}',
              feedback: {
                perfect: '복습 스케줄러를 완벽하게 구현했어요! 과학적 학습법의 핵심이에요!',
                good: '좋아요! 날짜 계산을 확인해보세요.',
                partial: '간격은 맞지만 날짜 변환이 정확하지 않아요.',
                wrong: 'new Date(start.getTime() + days * 24*60*60*1000)으로 날짜를 계산하세요.'
              }
            },
            {
              id: 'c5',
              title: '통합 학습 관리 시스템',
              description: '학습 추적, 복습 스케줄, 진도 관리를 통합한 학습 관리 시스템을 만드세요.',
              difficulty: 'hard',
              hints: ['이전에 만든 함수들을 통합하세요', '학습 데이터를 중앙에서 관리하세요', '오늘 할 복습 목록을 제공하세요'],
              estimatedMinutes: 15,
              starterCode: 'function LearningSystem() {\n' +
                '  this.topics = [];\n' +
                '  this.reviews = [];\n' +
                '  this.tracker = new StudyTracker();\n' +
                '}\n' +
                '\n' +
                'LearningSystem.prototype.addTopic = function(name) {\n' +
                '  // TODO: 주제 추가 + 복습 스케줄 생성\n' +
                '};\n' +
                '\n' +
                'LearningSystem.prototype.completeTopic = function(name) {\n' +
                '  // TODO: 주제 완료 처리\n' +
                '};\n' +
                '\n' +
                'LearningSystem.prototype.getDashboard = function() {\n' +
                '  // TODO: 전체 현황 반환\n' +
                '}',
              solution: 'function LearningSystem() {\n' +
                '  this.topics = [];\n' +
                '  this.reviews = [];\n' +
                '  this.tracker = new StudyTracker();\n' +
                '}\n' +
                '\n' +
                'LearningSystem.prototype.addTopic = function(name) {\n' +
                '  this.topics.push({ name: name, completed: false });\n' +
                '  var today = new Date();\n' +
                '  var dateStr = today.getFullYear() + "-" + String(today.getMonth()+1).padStart(2,"0") + "-" + String(today.getDate()).padStart(2,"0");\n' +
                '  var schedule = createReviewSchedule(name, dateStr);\n' +
                '  for (var i = 0; i < schedule.length; i++) {\n' +
                '    this.reviews.push(schedule[i]);\n' +
                '  }\n' +
                '};\n' +
                '\n' +
                'LearningSystem.prototype.completeTopic = function(name) {\n' +
                '  for (var i = 0; i < this.topics.length; i++) {\n' +
                '    if (this.topics[i].name === name) {\n' +
                '      this.topics[i].completed = true;\n' +
                '      break;\n' +
                '    }\n' +
                '  }\n' +
                '};\n' +
                '\n' +
                'LearningSystem.prototype.getDashboard = function() {\n' +
                '  return {\n' +
                '    progress: calculateProgress(this.topics),\n' +
                '    totalTopics: this.topics.length,\n' +
                '    totalStudyHours: this.tracker.getTotal(),\n' +
                '    upcomingReviews: this.reviews.length\n' +
                '  };\n' +
                '}',
              feedback: {
                perfect: '통합 학습 관리 시스템을 완벽하게 구현했어요! 모든 기능이 잘 통합됐어요!',
                good: '좋은 구조예요! 대시보드 데이터를 더 풍부하게 만들어보세요.',
                partial: '일부 메서드만 구현했어요. 모든 기능을 완성하세요.',
                wrong: '이전에 만든 함수들(calculateProgress, createReviewSchedule, StudyTracker)을 활용하세요.'
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

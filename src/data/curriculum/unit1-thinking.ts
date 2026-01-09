import type { Unit } from '../../types';

/**
 * Unit 1: 컴퓨팅 사고력 (Computational Thinking)
 *
 * 학습 목표:
 * - 알고리즘적 사고 이해 (순차, 반복, 조건)
 * - 패턴 인식과 추상화
 * - 문제 분해와 알고리즘 설계
 * - 디버깅과 논리적 사고
 *
 * 참고 자료:
 * - CS Unplugged (https://csunplugged.org)
 * - Code.org CS Fundamentals
 * - CSTA K-12 Standards (1A-AP-08, 1A-AP-09, 1A-AP-10)
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
    // Week 1: 알고리즘 입문 - 순차 실행의 이해
    // CSTA 1A-AP-08: 알고리즘의 개념 이해
    // ============================================
    {
      id: 'week-1',
      number: 1,
      title: '알고리즘이란?',
      description: '일상생활 속 알고리즘을 발견해요',
      missions: [
        {
          id: '1-1-1',
          title: '알고리즘 첫 만남',
          description: '알고리즘이 무엇인지 재미있는 영상으로 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '알고리즘 정의',
          conceptExplanation: '알고리즘은 문제를 해결하기 위한 단계별 지시사항이에요. 요리 레시피처럼 순서대로 따라하면 원하는 결과를 얻을 수 있어요!',
          hints: ['우리 주변에서 알고리즘을 찾아보세요', '요리법, 조립 설명서 모두 알고리즘이에요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-2',
          title: '아침 준비 알고리즘',
          description: '아침에 일어나서 학교 가기까지의 순서를 정리해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 10,
          concept: '순차 실행',
          conceptExplanation: '순차 실행은 명령을 위에서 아래로 순서대로 실행하는 것이에요. 순서가 바뀌면 결과도 달라져요!',
          hints: ['가장 먼저 해야 할 일은 무엇인가요?', '순서가 바뀌면 어떤 일이 생길까요?'],
          blocks: ['알람 끄기', '침대에서 일어나기', '세수하기', '이 닦기', '옷 입기', '아침 먹기', '가방 챙기기', '신발 신기', '집에서 나가기'],
          correctBlocks: ['알람 끄기', '침대에서 일어나기', '세수하기', '이 닦기', '옷 입기', '아침 먹기', '가방 챙기기', '신발 신기', '집에서 나가기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-3',
          title: '샌드위치 만들기',
          description: '맛있는 샌드위치를 만드는 순서를 정해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 8,
          concept: '순차 실행',
          conceptExplanation: '요리도 알고리즘이에요! 순서를 잘못 지키면 맛없는 음식이 될 수 있어요.',
          hints: ['재료 준비가 가장 먼저예요', '마지막에는 빵으로 덮어야 해요'],
          blocks: ['재료 준비하기', '빵 한 장 놓기', '상추 올리기', '치즈 올리기', '햄 올리기', '소스 뿌리기', '빵으로 덮기', '반으로 자르기'],
          correctBlocks: ['재료 준비하기', '빵 한 장 놓기', '상추 올리기', '치즈 올리기', '햄 올리기', '소스 뿌리기', '빵으로 덮기', '반으로 자르기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-4',
          title: '손 씻기 순서',
          description: '올바른 손 씻기 순서를 맞춰보세요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 35,
          estimatedMinutes: 6,
          concept: '순차 실행',
          hints: ['물을 먼저 틀어야 해요', '비누칠 후에는 충분히 헹궈야 해요'],
          blocks: ['수도꼭지 열기', '손을 적시기', '비누 칠하기', '손바닥 문지르기', '손등 문지르기', '손가락 사이 문지르기', '물로 헹구기', '수도꼭지 잠그기', '손 말리기'],
          correctBlocks: ['수도꼭지 열기', '손을 적시기', '비누 칠하기', '손바닥 문지르기', '손등 문지르기', '손가락 사이 문지르기', '물로 헹구기', '수도꼭지 잠그기', '손 말리기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-5',
          title: '로봇 첫 걸음',
          description: '로봇을 목표 지점(⭐)까지 이동시켜요. "앞으로" 블록을 사용해보세요!',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '명령어와 실행',
          conceptExplanation: '로봇은 우리가 준 명령대로만 움직여요. 명령을 순서대로 잘 배열해야 원하는 곳으로 갈 수 있어요!',
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '순차 실행의 개념을 이해한다',
            '명령어를 올바른 순서로 배열할 수 있다',
            '로봇의 이동을 예측할 수 있다'
          ],
          realWorldExample: '엘리베이터 버튼을 누르면 엘리베이터가 정확히 그 층으로 이동하는 것처럼, 로봇도 명령대로 움직여요.',
          hints: [
            '💡 힌트 1: 로봇은 처음에 위쪽(↑)을 바라보고 있어요',
            '💡 힌트 2: 별까지 몇 칸인지 세어보세요',
            '💡 힌트 3: "앞으로" 블록을 3번 사용하면 돼요'
          ],
          commonMistakes: [
            '블록 개수를 잘못 세는 경우',
            '로봇의 시작 방향을 고려하지 않는 경우'
          ],
          blocks: ['앞으로'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 2 },
          goalPosition: { row: 1, col: 2 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['앞으로', '앞으로', '앞으로'],
          maxCommands: 5,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-6',
          title: '로봇 회전하기',
          description: '로봇을 회전시켜서 다른 방향으로 이동해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 12,
          concept: '방향 전환',
          conceptExplanation: '로봇은 바라보는 방향으로만 앞으로 갈 수 있어요. 다른 방향으로 가려면 먼저 회전해야 해요!',
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '회전 명령어의 기능을 이해한다',
            '로봇의 방향과 이동의 관계를 파악한다',
            '회전과 이동을 조합하여 문제를 해결한다'
          ],
          realWorldExample: '자동차가 교차로에서 방향을 바꿀 때 먼저 핸들을 돌리고 앞으로 가는 것과 같아요.',
          hints: [
            '💡 힌트 1: 로봇은 처음에 위쪽(↑)을 바라보고 있어요',
            '💡 힌트 2: 오른쪽으로 가려면 먼저 오른쪽회전!',
            '💡 힌트 3: 회전 1번 + 앞으로 4번'
          ],
          commonMistakes: [
            '회전 없이 바로 앞으로 가려는 경우',
            '왼쪽회전과 오른쪽회전을 혼동하는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 4, cols: 5 },
          startPosition: { row: 2, col: 0 },
          goalPosition: { row: 2, col: 4 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['오른쪽회전', '앞으로', '앞으로', '앞으로', '앞으로'],
          maxCommands: 7,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-7',
          title: 'ㄱ자 경로',
          description: '로봇이 ㄱ자 모양으로 이동하도록 해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '경로 계획',
          conceptExplanation: '복잡한 경로도 간단한 명령들의 조합으로 만들 수 있어요!',
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '여러 명령어를 조합하여 복잡한 경로를 만든다',
            '목표까지의 경로를 미리 계획할 수 있다'
          ],
          realWorldExample: '네비게이션이 "직진 후 우회전"처럼 안내하는 것과 같아요.',
          hints: [
            '💡 힌트 1: 먼저 위로 3칸 올라가세요',
            '💡 힌트 2: 그 다음 오른쪽으로 회전!',
            '💡 힌트 3: 마지막으로 오른쪽으로 3칸'
          ],
          commonMistakes: [
            '경로를 중간에서 꺾지 않고 대각선으로 가려는 경우',
            '회전 타이밍을 놓치는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전'],
          gridSize: { rows: 4, cols: 4 },
          startPosition: { row: 3, col: 0 },
          goalPosition: { row: 0, col: 3 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['앞으로', '앞으로', '앞으로', '오른쪽회전', '앞으로', '앞으로', '앞으로'],
          maxCommands: 10,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-8',
          title: '보석 수집하기',
          description: '💎 보석을 지나가면서 목표에 도착해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 15,
          concept: '경유지 설계',
          conceptExplanation: '목표로 가는 동안 보석을 모으면 보너스 점수를 얻어요! 경로를 잘 계획해보세요.',
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '여러 목표를 고려한 경로를 설계한다',
            '최적의 경로를 찾는 방법을 이해한다'
          ],
          realWorldExample: '배달 기사가 여러 집에 택배를 배달하면서 가장 효율적인 경로를 찾는 것과 같아요.',
          hints: [
            '💡 힌트 1: 보석 위치를 먼저 확인하세요 (2,0), (1,1), (0,2)',
            '💡 힌트 2: 대각선 방향으로 이동하면 모든 보석을 모을 수 있어요',
            '💡 힌트 3: 지그재그로 이동해보세요'
          ],
          commonMistakes: [
            '직선 경로만 생각하고 보석을 놓치는 경우',
            '모든 보석을 모으려다 목표에 도착하지 못하는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 4, cols: 4 },
          startPosition: { row: 3, col: 0 },
          goalPosition: { row: 0, col: 3 },
          obstacles: [],
          checkpoints: [],
          collectibles: [{ row: 2, col: 0 }, { row: 1, col: 1 }, { row: 0, col: 2 }],
          mustVisitAll: true,
          solutionSequence: ['앞으로', '오른쪽회전', '앞으로', '왼쪽회전', '앞으로', '오른쪽회전', '앞으로', '왼쪽회전', '앞으로', '오른쪽회전', '앞으로'],
          maxCommands: 15,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-9',
          title: '나만의 알고리즘 작성',
          description: '좋아하는 활동(게임하기, 요리 등)의 순서를 직접 작성해요',
          type: 'writing',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 15,
          concept: '알고리즘 문서화',
          conceptExplanation: '알고리즘을 글로 적으면 다른 사람도 따라할 수 있어요. 명확하고 순서대로 적는 것이 중요해요!',
          requirements: ['최소 6단계 이상 작성', '각 단계에 번호 붙이기', '누가 봐도 따라할 수 있게 상세히 작성'],
          hints: ['시작과 끝을 명확히 하세요', '각 단계는 하나의 동작만 포함하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ==========================================
        // 🐍 Python 코딩 입문 - Use-Modify-Create
        // ==========================================
        {
          id: '1-1-py-use',
          title: '🐍 첫 코드 실행하기 (USE)',
          description: '▶ 실행 버튼을 눌러 Python 코드가 어떻게 작동하는지 확인해요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 5,
          concept: '코드 실행 체험',
          conceptExplanation: 'Python은 우리가 쓴 명령을 컴퓨터가 실행해요. print()는 화면에 글자를 출력하는 명령이에요!',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '코드 실행 버튼을 사용할 수 있다',
            'print() 함수가 화면에 텍스트를 출력함을 안다',
            '코드 실행 결과를 관찰할 수 있다'
          ],
          realWorldExample: '알람 앱에서 "울리기" 버튼을 누르면 소리가 나는 것처럼, Python에서 print()를 실행하면 글자가 화면에 나타나요!',
          starterCode: `# 🎉 축하해요! 첫 Python 코드입니다!
# 아래 코드를 읽고 ▶ 실행 버튼을 눌러보세요

print("안녕하세요!")
print("저는 Python입니다")
print("만나서 반가워요!")`,
          solution: `print("안녕하세요!")
print("저는 Python입니다")
print("만나서 반가워요!")`,
          expectedOutput: `안녕하세요!
저는 Python입니다
만나서 반가워요!`,
          hints: [
            '💡 힌트 1: 코드를 수정하지 말고 그냥 실행해보세요',
            '💡 힌트 2: ▶ 실행 버튼은 오른쪽 위에 있어요',
            '💡 힌트 3: 실행 결과가 아래 터미널에 나타나요'
          ],
          testCases: [
            { input: '', expectedOutput: '안녕하세요!\n저는 Python입니다\n만나서 반가워요!', description: '3줄 모두 출력 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-py-mod',
          title: '🐍 메시지 바꾸기 (MODIFY)',
          description: '"안녕"을 "반가워"로 바꿔서 실행해보세요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 8,
          concept: '코드 수정하기',
          conceptExplanation: '따옴표 안의 글자를 바꾸면 출력되는 내용도 바뀌어요!',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '문자열을 수정할 수 있다',
            '코드 변경이 출력에 미치는 영향을 이해한다'
          ],
          realWorldExample: '메모 앱에서 글자를 바꾸면 저장된 내용도 바뀌는 것처럼, 코드의 글자를 바꾸면 결과도 달라져요!',
          starterCode: `# "안녕"을 "반가워"로 바꿔보세요!
# 따옴표 안의 글자만 바꾸면 돼요

print("안녕")`,
          solution: `print("반가워")`,
          expectedOutput: `반가워`,
          hints: [
            '💡 힌트 1: "안녕"을 지우고 "반가워"를 입력하세요',
            '💡 힌트 2: 따옴표("")는 그대로 두세요',
            '💡 힌트 3: print("반가워") 가 정답이에요'
          ],
          commonMistakes: [
            '따옴표를 같이 지우는 경우 - 따옴표는 필수예요!',
            'print를 수정하는 경우 - 괄호 안의 내용만 바꾸세요'
          ],
          testCases: [
            { input: '', expectedOutput: '반가워', description: '"반가워" 출력 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-py-create',
          title: '🐍 내 첫 코드 작성 (CREATE)',
          description: '여러분의 이름을 출력하는 코드를 직접 작성해보세요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 10,
          concept: '코드 직접 작성',
          conceptExplanation: 'print() 안에 출력하고 싶은 내용을 따옴표로 감싸서 넣으면 돼요!',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            'print() 함수를 직접 작성할 수 있다',
            '문자열을 따옴표로 감싸야 함을 안다',
            '처음부터 코드를 작성하는 경험을 한다'
          ],
          realWorldExample: '일기를 쓸 때 제목부터 내용까지 직접 쓰는 것처럼, 코드도 처음부터 직접 작성할 수 있어요!',
          starterCode: `# 여러분의 이름을 출력해보세요!
# 예: print("홍길동")
# 아래에 코드를 작성하세요:

`,
          solution: `print("코딩왕")`,
          expectedOutput: null,  // 자유 응답이므로 특정 출력 없음
          hints: [
            '💡 힌트 1: print()를 입력하세요',
            '💡 힌트 2: 괄호 안에 따옴표("")를 넣으세요',
            '💡 힌트 3: 따옴표 안에 여러분의 이름을 쓰세요'
          ],
          commonMistakes: [
            '따옴표를 빼먹는 경우: print(홍길동) ❌ → print("홍길동") ✓',
            '괄호를 빼먹는 경우: print "홍길동" ❌ → print("홍길동") ✓',
            'print를 대문자로 쓰는 경우: Print("홍길동") ❌ → print("홍길동") ✓'
          ],
          testCases: [],  // 자유 응답
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-10',
          title: '1주차 확인 퀴즈',
          description: '알고리즘에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-1-project',
          title: '🎯 주간 프로젝트: 자기소개 프로그램',
          description: '배운 것을 활용해서 자기소개 프로그램을 만들어요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 150,
          estimatedMinutes: 20,
          concept: '종합 프로젝트',
          conceptExplanation: '여러 개의 print()를 사용해서 자기소개를 만들어보세요!',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '1A-AP-08',
          learningObjectives: [
            '여러 print()문을 조합할 수 있다',
            '순차 실행을 코드로 표현할 수 있다',
            '완성된 프로그램을 만드는 경험을 한다'
          ],
          realWorldExample: '웹사이트의 "About Me" 페이지처럼, 코드로도 자기소개를 만들 수 있어요!',
          starterCode: `# 🎯 주간 프로젝트: 자기소개 프로그램
# 아래 예시를 참고해서 여러분만의 자기소개를 만들어보세요!

# === 자기소개 시작 ===
print("="*20)
print("🎉 나를 소개합니다!")
print("="*20)

# 이름
print("이름: ")  # 여기에 이름을 넣으세요

# 나이
print("나이: ")  # 여기에 나이를 넣으세요

# 좋아하는 것
print("좋아하는 것: ")  # 여기에 좋아하는 것을 넣으세요

# 꿈
print("나의 꿈: ")  # 여기에 꿈을 넣으세요

print("="*20)
print("감사합니다! 👋")
`,
          solution: `print("="*20)
print("🎉 나를 소개합니다!")
print("="*20)
print("이름: 코딩왕")
print("나이: 12살")
print("좋아하는 것: 게임, 코딩")
print("나의 꿈: 프로그래머")
print("="*20)
print("감사합니다! 👋")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: print("이름: 홍길동") 처럼 콜론 뒤에 정보를 넣으세요',
            '💡 힌트 2: 각 줄마다 원하는 정보를 추가하세요',
            '💡 힌트 3: 이모지를 추가하면 더 예뻐져요! 🎮🎨🎵'
          ],
          requirements: [
            '최소 6줄 이상의 print() 사용',
            '이름, 나이, 좋아하는 것 포함',
            '실행하면 자기소개가 출력됨'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-1-1',
        title: '알고리즘 기초 퀴즈',
        questions: [
          {
            id: 'q-1-1-1',
            question: '알고리즘이란 무엇인가요?',
            options: ['컴퓨터 부품 이름', '문제를 해결하기 위한 단계별 지시사항', '프로그래밍 언어 이름', '게임 캐릭터 이름'],
            correctAnswer: 1,
            explanation: '알고리즘은 문제를 해결하기 위한 단계별 지시사항입니다. 요리 레시피처럼 순서대로 따라하면 결과를 얻을 수 있어요.',
          },
          {
            id: 'q-1-1-2',
            question: '순차 실행에서 가장 중요한 것은?',
            options: ['실행 속도', '명령의 순서', '명령의 개수', '컴퓨터의 성능'],
            correctAnswer: 1,
            explanation: '순차 실행에서는 명령의 순서가 가장 중요해요. 순서가 바뀌면 결과도 달라집니다!',
          },
          {
            id: 'q-1-1-3',
            question: '다음 중 일상생활의 알고리즘이 아닌 것은?',
            options: ['요리 레시피', '가구 조립 설명서', '수학 공식', '날씨'],
            correctAnswer: 3,
            explanation: '날씨는 자연 현상이지 단계별 지시사항이 아니에요. 요리 레시피, 조립 설명서, 수학 공식은 모두 순서가 있는 알고리즘이에요.',
          },
        ],
      },
    },

    // ============================================
    // Week 2: 순차 실행 심화
    // CSTA 1A-AP-09: 순차적 알고리즘 구현
    // ============================================
    {
      id: 'week-2',
      number: 2,
      title: '순차 실행 마스터',
      description: '더 복잡한 순서 문제를 해결해요',
      missions: [
        {
          id: '1-2-1',
          title: '장애물 피하기',
          description: '🪨 장애물을 피해 목표까지 가세요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 12,
          concept: '장애물 회피',
          conceptExplanation: '장애물이 있으면 돌아가는 길을 찾아야 해요. 경로를 미리 계획하는 것이 중요해요!',
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '장애물을 고려하여 경로를 계획한다',
            '대안적인 경로를 찾는 능력을 기른다',
            '제약 조건 하에서 문제를 해결한다'
          ],
          realWorldExample: '자율주행 자동차가 도로 위 장애물을 피해 목적지로 가는 것과 같아요.',
          hints: [
            '💡 힌트 1: 장애물 위치를 먼저 파악하세요',
            '💡 힌트 2: 가장자리를 따라 가면 피할 수 있어요',
            '💡 힌트 3: 왼쪽 또는 오른쪽 벽을 따라가 보세요'
          ],
          commonMistakes: [
            '장애물 위치를 확인하지 않고 직진하는 경우',
            '돌아가는 길이 더 길다고 포기하는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 0, col: 4 },
          obstacles: [{ row: 3, col: 1 }, { row: 2, col: 2 }, { row: 1, col: 3 }],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['앞으로', '앞으로', '앞으로', '앞으로', '오른쪽회전', '앞으로', '앞으로', '앞으로', '앞으로'],
          maxCommands: 12,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-2',
          title: '체크포인트 방문',
          description: '🔷 체크포인트를 모두 방문하고 목표에 도착하세요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 15,
          concept: '필수 경유지',
          conceptExplanation: '체크포인트는 반드시 방문해야 하는 곳이에요. 모든 체크포인트를 지나야 미션 성공!',
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '필수 조건이 있는 문제를 해결한다',
            '경유지를 포함한 경로를 설계한다'
          ],
          realWorldExample: '택배 기사가 여러 곳에 들러 배달하고 물류센터로 돌아오는 것과 같아요.',
          hints: [
            '💡 힌트 1: 체크포인트 위치: (4,2)와 (2,2)',
            '💡 힌트 2: 먼저 오른쪽으로 가서 첫 번째 체크포인트',
            '💡 힌트 3: 위로 올라가서 두 번째 체크포인트'
          ],
          commonMistakes: [
            '체크포인트를 건너뛰고 목표로 직접 가는 경우',
            '체크포인트 순서를 고려하지 않는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 0, col: 4 },
          obstacles: [],
          checkpoints: [{ row: 4, col: 2 }, { row: 2, col: 2 }],
          collectibles: [],
          mustVisitAll: true,
          solutionSequence: ['오른쪽회전', '앞으로', '앞으로', '왼쪽회전', '앞으로', '앞으로', '오른쪽회전', '앞으로', '앞으로', '왼쪽회전', '앞으로', '앞으로'],
          maxCommands: 15,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-3',
          title: '복합 미션',
          description: '장애물을 피하고, 체크포인트를 방문하고, 보석도 모아요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 100,
          estimatedMinutes: 18,
          concept: '종합 문제',
          conceptExplanation: '여러 조건을 만족하는 최적의 경로를 찾아보세요!',
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '복합적인 제약 조건을 분석한다',
            '우선순위를 정해 문제를 해결한다',
            '최적의 해결책을 찾는다'
          ],
          realWorldExample: '여행 계획을 세울 때 예산, 시간, 가고 싶은 곳을 모두 고려하는 것과 같아요.',
          hints: [
            '💡 힌트 1: 체크포인트(🔷)는 필수! 먼저 방문 경로를 계획하세요',
            '💡 힌트 2: 장애물(🪨)을 피해 가세요 - 위치: (3,2), (2,2)',
            '💡 힌트 3: 보석(💎)은 보너스 - 가능하면 모아보세요'
          ],
          commonMistakes: [
            '필수 조건(체크포인트)을 무시하고 보석만 모으려는 경우',
            '장애물 위치를 확인하지 않는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 0, col: 4 },
          obstacles: [{ row: 3, col: 2 }, { row: 2, col: 2 }],
          checkpoints: [{ row: 4, col: 3 }],
          collectibles: [{ row: 2, col: 4 }, { row: 1, col: 1 }],
          mustVisitAll: true,
          solutionSequence: ['오른쪽회전', '앞으로', '앞으로', '앞으로', '왼쪽회전', '앞으로', '앞으로', '앞으로', '앞으로', '오른쪽회전', '앞으로'],
          maxCommands: 15,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-4',
          title: '요리 대회',
          description: '시간 안에 요리를 완성하는 최적의 순서를 찾아요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '효율적 순서',
          hints: ['시간이 오래 걸리는 것부터 시작하면 효율적이에요'],
          blocks: ['냄비에 물 끓이기 (5분)', '야채 손질하기 (3분)', '면 삶기 (8분)', '소스 만들기 (4분)', '고기 굽기 (6분)', '플레이팅하기 (2분)'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-5',
          title: '여행 계획 세우기',
          description: '서울에서 부산까지 여행 일정을 세워요',
          type: 'writing',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 15,
          concept: '계획 수립',
          requirements: ['출발 준비부터 도착까지', '최소 8단계', '각 단계의 목적 포함'],
          hints: ['출발 전 준비도 중요해요', '교통수단, 목적지 등을 포함하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-6',
          title: '미로 탈출 I',
          description: '간단한 미로를 탈출하세요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 15,
          concept: '경로 탐색',
          hints: ['막다른 길은 피하세요', '한 방향으로 쭉 가보세요'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 0, col: 4 },
          obstacles: [
            { row: 3, col: 1 }, { row: 2, col: 1 },
            { row: 2, col: 3 }, { row: 1, col: 3 }
          ],
          checkpoints: [],
          collectibles: [],
          mazeWalls: true,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-7',
          title: '미로 탈출 II',
          description: '더 복잡한 미로에서 탈출하세요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 110,
          estimatedMinutes: 18,
          concept: '복잡한 경로',
          hints: ['오른쪽 벽을 따라가는 규칙을 사용해보세요'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 6, cols: 6 },
          startPosition: { row: 5, col: 0 },
          goalPosition: { row: 0, col: 5 },
          obstacles: [
            { row: 4, col: 1 }, { row: 3, col: 1 }, { row: 2, col: 1 },
            { row: 2, col: 2 }, { row: 2, col: 3 },
            { row: 4, col: 3 }, { row: 4, col: 4 },
            { row: 0, col: 1 }, { row: 0, col: 2 }, { row: 0, col: 3 }
          ],
          checkpoints: [],
          collectibles: [{ row: 3, col: 5 }],
          mazeWalls: true,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-8',
          title: '순서 바꾸기 게임',
          description: '주어진 카드를 목표 순서로 정렬하세요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '순서 정렬',
          hints: ['한 번에 두 카드의 위치를 바꿀 수 있어요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-9',
          title: '이야기 순서 맞추기',
          description: '섞인 이야기 문장을 올바른 순서로 배열하세요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '논리적 순서',
          hints: ['이야기의 시작과 끝을 먼저 찾아보세요'],
          blocks: ['옛날에 한 소년이 살았어요', '소년은 숲에서 길을 잃었어요', '친절한 동물들이 도와줬어요', '소년은 집으로 돌아왔어요', '가족들이 기뻐했어요'],
          correctBlocks: ['옛날에 한 소년이 살았어요', '소년은 숲에서 길을 잃었어요', '친절한 동물들이 도와줬어요', '소년은 집으로 돌아왔어요', '가족들이 기뻐했어요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ==========================================
        // 🐍 Python 코딩 - 변수와 계산
        // ==========================================
        {
          id: '1-2-py-use',
          title: '🐍 변수 체험하기 (USE)',
          description: '▶ 실행해서 변수가 값을 저장하는 것을 확인해요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 5,
          concept: '변수 체험',
          conceptExplanation: '변수는 값을 저장하는 상자예요! 이름을 붙여서 나중에 다시 사용할 수 있어요.',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '변수가 값을 저장하는 것을 관찰한다',
            '변수 이름으로 값을 불러올 수 있음을 안다'
          ],
          starterCode: `# 📦 변수: 값을 저장하는 상자!
# ▶ 실행 버튼을 눌러보세요

# 변수에 값 저장하기
name = "코딩왕"
age = 12

# 변수 사용하기
print("이름:", name)
print("나이:", age)
print(name, "님 안녕하세요!")`,
          solution: `name = "코딩왕"
age = 12
print("이름:", name)
print("나이:", age)
print(name, "님 안녕하세요!")`,
          expectedOutput: `이름: 코딩왕
나이: 12
코딩왕 님 안녕하세요!`,
          hints: [
            '💡 힌트 1: 코드를 수정하지 말고 실행해보세요',
            '💡 힌트 2: name = "코딩왕"은 name이라는 상자에 "코딩왕"을 저장해요',
            '💡 힌트 3: print(name)은 상자 안의 값을 출력해요'
          ],
          testCases: [
            { input: '', expectedOutput: '이름: 코딩왕\n나이: 12\n코딩왕 님 안녕하세요!', description: '변수 출력 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-py-mod',
          title: '🐍 변수 값 바꾸기 (MODIFY)',
          description: 'name 변수의 값을 여러분의 이름으로 바꿔보세요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 8,
          concept: '변수 값 수정',
          conceptExplanation: '따옴표 안의 내용을 바꾸면 변수에 저장된 값이 바뀌어요!',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '변수에 새로운 값을 저장할 수 있다',
            '변수 값을 바꾸면 출력도 바뀜을 이해한다'
          ],
          starterCode: `# "코딩왕"을 여러분의 이름으로 바꿔보세요!

name = "코딩왕"  # 이 부분을 수정하세요!

print("안녕하세요,", name, "님!")
print(name, "님의 코딩 여행을 시작합니다! 🚀")`,
          solution: `name = "홍길동"
print("안녕하세요,", name, "님!")
print(name, "님의 코딩 여행을 시작합니다! 🚀")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: name = "코딩왕" 줄에서 "코딩왕"만 바꾸세요',
            '💡 힌트 2: 따옴표는 그대로 두세요',
            '💡 힌트 3: 예: name = "철수" 또는 name = "영희"'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-py-calc',
          title: '🐍 계산기 만들기 (CREATE)',
          description: 'Python으로 간단한 계산을 해보세요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '연산과 계산',
          conceptExplanation: 'Python은 계산기처럼 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/)을 할 수 있어요!',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '사칙연산 기호를 사용할 수 있다',
            '변수에 계산 결과를 저장할 수 있다'
          ],
          starterCode: `# 🧮 Python 계산기!
# 아래 코드를 완성해서 사과 총 개수를 계산하세요

# 내가 가진 사과
my_apples = 5

# 친구가 준 사과
friend_apples = 3

# 🎯 목표: 총 사과 개수를 계산해서 출력하세요
# total = my_apples + friend_apples 를 작성하고
# print("총 사과:", total) 를 작성하세요

# 여기에 코드를 작성하세요:

`,
          solution: `my_apples = 5
friend_apples = 3
total = my_apples + friend_apples
print("총 사과:", total)`,
          expectedOutput: `총 사과: 8`,
          hints: [
            '💡 힌트 1: total = my_apples + friend_apples 를 입력하세요',
            '💡 힌트 2: 다음 줄에 print("총 사과:", total) 를 입력하세요',
            '💡 힌트 3: 5 + 3 = 8이 나와야 해요'
          ],
          commonMistakes: [
            '변수 이름을 다르게 쓰는 경우 - my_apples, friend_apples 정확히 쓰세요',
            'print에서 total을 따옴표 안에 넣는 경우 - print("total")은 글자 "total"을 출력해요'
          ],
          testCases: [
            { input: '', expectedOutput: '총 사과: 8', description: '덧셈 결과 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-10',
          title: '2주차 확인 퀴즈',
          description: '순차 실행에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-2-project',
          title: '🎯 주간 프로젝트: 나의 프로필 카드',
          description: '변수를 사용해서 나만의 프로필 카드를 만들어요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 150,
          estimatedMinutes: 20,
          concept: '종합 프로젝트 - 변수 활용',
          conceptExplanation: '여러 변수를 사용해서 프로필 카드를 만들어보세요!',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '1A-AP-09',
          learningObjectives: [
            '여러 변수를 선언하고 활용할 수 있다',
            '변수와 print()를 조합해 정보를 출력할 수 있다',
            '코드를 체계적으로 구성할 수 있다'
          ],
          starterCode: `# 🎯 주간 프로젝트: 나의 프로필 카드
# 변수를 사용해서 프로필 카드를 만들어보세요!

# === 기본 정보 변수 ===
name = ""      # 이름을 입력하세요
age = 0        # 나이를 입력하세요
school = ""    # 학교를 입력하세요
hobby = ""     # 취미를 입력하세요
dream = ""     # 꿈을 입력하세요

# === 프로필 카드 출력 ===
print("╔" + "═"*30 + "╗")
print("║" + " "*10 + "📋 프로필 카드" + " "*6 + "║")
print("╠" + "═"*30 + "╣")
print("║ 이름:", name)
print("║ 나이:", age, "살")
print("║ 학교:", school)
print("║ 취미:", hobby)
print("║ 꿈: ", dream)
print("╚" + "═"*30 + "╝")

# 🎨 보너스: 추가 정보도 넣어보세요!
# favorite_food = ""
# favorite_color = ""
`,
          solution: `name = "코딩왕"
age = 12
school = "코딩초등학교"
hobby = "게임, 코딩"
dream = "프로그래머"
print("╔" + "═"*30 + "╗")
print("║" + " "*10 + "📋 프로필 카드" + " "*6 + "║")
print("╠" + "═"*30 + "╣")
print("║ 이름:", name)
print("║ 나이:", age, "살")
print("║ 학교:", school)
print("║ 취미:", hobby)
print("║ 꿈: ", dream)
print("╚" + "═"*30 + "╝")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: 따옴표 안에 정보를 입력하세요 (예: name = "홍길동")',
            '💡 힌트 2: 숫자는 따옴표 없이 입력하세요 (예: age = 12)',
            '💡 힌트 3: 모든 변수를 채우면 예쁜 카드가 완성돼요!'
          ],
          requirements: [
            '5개의 기본 변수 모두 채우기',
            '실행하면 프로필 카드가 출력됨',
            '보너스: 추가 정보 변수 만들기'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 3: 패턴 인식 기초
    // CSTA 1A-AP-10: 패턴 인식과 추상화
    // ============================================
    {
      id: 'week-3',
      number: 3,
      title: '패턴을 찾아라!',
      description: '반복되는 규칙과 패턴을 발견해요',
      missions: [
        {
          id: '1-3-1',
          title: '패턴이란?',
          description: '우리 주변에서 패턴을 찾아보아요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '패턴 인식 소개',
          conceptExplanation: '패턴은 규칙적으로 반복되는 것이에요. 무늬, 숫자, 소리 등 어디에나 패턴이 있어요!',
          hints: ['옷의 무늬, 음악의 리듬도 패턴이에요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-2',
          title: '숫자 패턴 I',
          description: '2, 4, 6, 8, ? 다음에 올 숫자는?',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 6,
          concept: '등차 패턴',
          conceptExplanation: '숫자가 일정한 간격으로 증가하는 패턴이에요. 2씩 커지고 있네요!',
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '등차수열(일정한 차이로 증가/감소하는 패턴)을 인식한다',
            '다음에 올 수를 예측할 수 있다'
          ],
          realWorldExample: '계단을 오를 때 한 계단씩 높아지는 것처럼, 숫자도 일정하게 커질 수 있어요.',
          hints: [
            '💡 힌트 1: 연속된 숫자의 차이를 계산해보세요',
            '💡 힌트 2: 4-2=2, 6-4=2, 8-6=2... 규칙이 보이나요?',
            '💡 힌트 3: 8에 2를 더하면?'
          ],
          expectedOutput: '10',
          checkQuestions: [
            {
              question: '이 패턴에서 숫자는 몇씩 증가하나요?',
              options: ['1씩', '2씩', '3씩', '4씩'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 2씩 증가하는 패턴이에요.',
                incorrect: '다시 생각해보세요. 4-2, 6-4, 8-6을 계산해보세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-3',
          title: '숫자 패턴 II',
          description: '1, 3, 5, 7, ? 다음에 올 숫자는?',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 6,
          concept: '홀수 패턴',
          hints: ['이것은 홀수만 나열한 것이에요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-4',
          title: '숫자 패턴 III',
          description: '1, 4, 9, 16, ? 다음에 올 숫자는?',
          type: 'pattern-recognition',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 10,
          concept: '제곱수 패턴',
          conceptExplanation: '각 숫자는 1², 2², 3², 4²... 제곱수 패턴이에요!',
          hints: ['1×1, 2×2, 3×3, 4×4...를 계산해보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-5',
          title: '피보나치 수열',
          description: '1, 1, 2, 3, 5, 8, ? 다음에 올 숫자는?',
          type: 'pattern-recognition',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '피보나치 패턴',
          conceptExplanation: '앞의 두 숫자를 더하면 다음 숫자가 되는 신기한 패턴이에요!',
          hints: ['앞의 두 숫자를 더해보세요', '5 + 8 = ?'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-6',
          title: '도형 패턴',
          description: '반복되는 도형 패턴을 찾아요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '시각적 패턴',
          conceptExplanation: '도형의 모양, 색깔, 크기가 규칙적으로 반복돼요!',
          hints: ['모양, 색깔, 크기 중 무엇이 변하는지 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-7',
          title: '색깔 패턴',
          description: '빨강-파랑-노랑이 반복되는 패턴을 완성하세요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 8,
          concept: '색상 패턴',
          hints: ['3가지 색이 순서대로 반복돼요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-8',
          title: '리듬 패턴',
          description: '쿵-쿵-짝 리듬 패턴을 인식해요',
          type: 'audio-visual',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '청각 패턴',
          conceptExplanation: '음악에도 패턴이 있어요. 리듬이 반복되면 박자가 만들어져요!',
          hints: ['같은 리듬이 반복되는 부분을 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-9',
          title: '자연 속 패턴',
          description: '자연에서 발견할 수 있는 패턴을 탐구해요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 12,
          concept: '자연 패턴',
          conceptExplanation: '해바라기 씨앗의 배열, 조개껍데기의 나선, 눈송이의 대칭... 자연은 패턴으로 가득해요!',
          hints: ['나뭇잎의 잎맥, 거미줄의 모양을 떠올려보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ==========================================
        // 🐍 Python 코딩 - 패턴 생성하기
        // ==========================================
        {
          id: '1-3-py-use',
          title: '🐍 코드로 패턴 만들기 (USE)',
          description: '▶ 실행해서 Python이 어떻게 패턴을 만드는지 확인해요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 5,
          concept: '코드로 패턴 생성',
          conceptExplanation: 'print()를 여러 번 쓰면 패턴을 만들 수 있어요! 같은 것을 반복하면 패턴이 돼요.',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '코드로 패턴을 만들 수 있음을 안다',
            '같은 코드가 반복되면 패턴이 됨을 이해한다'
          ],
          starterCode: `# 🎨 코드로 패턴을 만들어봐요!
# ▶ 실행 버튼을 눌러서 결과를 확인하세요

print("⭐")
print("⭐⭐")
print("⭐⭐⭐")
print("⭐⭐⭐⭐")
print("⭐⭐⭐⭐⭐")`,
          solution: `print("⭐")
print("⭐⭐")
print("⭐⭐⭐")
print("⭐⭐⭐⭐")
print("⭐⭐⭐⭐⭐")`,
          expectedOutput: `⭐
⭐⭐
⭐⭐⭐
⭐⭐⭐⭐
⭐⭐⭐⭐⭐`,
          hints: [
            '💡 힌트 1: 코드를 수정하지 말고 실행만 해보세요',
            '💡 힌트 2: 별이 1개, 2개, 3개... 늘어나는 패턴이에요'
          ],
          testCases: [
            { input: '', expectedOutput: '⭐\n⭐⭐\n⭐⭐⭐\n⭐⭐⭐⭐\n⭐⭐⭐⭐⭐', description: '별 패턴 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-py-mod',
          title: '🐍 패턴 바꾸기 (MODIFY)',
          description: '별(⭐)을 하트(❤️)로 바꿔서 하트 패턴을 만들어요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 8,
          concept: '패턴 수정하기',
          conceptExplanation: '기호만 바꾸면 다른 패턴이 돼요!',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '패턴의 요소를 수정할 수 있다',
            '코드 수정이 결과에 미치는 영향을 이해한다'
          ],
          starterCode: `# ⭐를 ❤️로 바꿔서 하트 패턴을 만들어보세요!

print("⭐")
print("⭐⭐")
print("⭐⭐⭐")`,
          solution: `print("❤️")
print("❤️❤️")
print("❤️❤️❤️")`,
          expectedOutput: `❤️
❤️❤️
❤️❤️❤️`,
          hints: [
            '💡 힌트 1: ⭐를 찾아서 ❤️로 바꾸세요',
            '💡 힌트 2: 모든 줄에서 바꿔야 해요',
            '💡 힌트 3: 복사(Ctrl+C)와 붙여넣기(Ctrl+V)를 활용하세요'
          ],
          testCases: [
            { input: '', expectedOutput: '❤️\n❤️❤️\n❤️❤️❤️', description: '하트 패턴 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-py-create',
          title: '🐍 나만의 패턴 (CREATE)',
          description: '원하는 이모지로 나만의 패턴을 만들어보세요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 12,
          concept: '패턴 직접 만들기',
          conceptExplanation: '원하는 모양으로 패턴을 만들 수 있어요! 창의력을 발휘해보세요!',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '독창적인 패턴을 코드로 구현할 수 있다',
            '창의적으로 코드를 작성하는 경험을 한다'
          ],
          starterCode: `# 🎨 나만의 패턴을 만들어보세요!
# 예시: 🌈, 🎮, 🎵, 🚀, 🌸 등 원하는 이모지를 사용하세요
# 힌트: 줄마다 개수가 늘어나거나 줄어드는 패턴을 만들어보세요!

# 여기에 코드를 작성하세요:

`,
          solution: `print("🚀")
print("🚀🚀")
print("🚀🚀🚀")
print("🚀🚀🚀🚀")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: 좋아하는 이모지를 고르세요 (🎮, 🎵, 🚀, 🌸 등)',
            '💡 힌트 2: 첫 줄에 1개, 둘째 줄에 2개... 패턴을 만들어보세요',
            '💡 힌트 3: 최소 4줄 이상 만들어보세요'
          ],
          requirements: [
            '최소 4줄 이상의 패턴',
            '일정한 규칙이 있는 패턴',
            '실행하면 패턴이 출력됨'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-10',
          title: '3주차 확인 퀴즈',
          description: '패턴에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-3-project',
          title: '🎯 주간 프로젝트: ASCII 아트',
          description: 'print()로 그림을 그려요! 텍스트 아트 작품을 만들어보세요.',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 150,
          estimatedMinutes: 25,
          concept: '종합 프로젝트 - 텍스트 아트',
          conceptExplanation: 'print()를 창의적으로 사용하면 그림도 그릴 수 있어요!',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '여러 print()를 활용해 복잡한 출력을 만들 수 있다',
            '패턴과 대칭을 코드로 표현할 수 있다',
            '창의적 문제 해결 능력을 기른다'
          ],
          starterCode: `# 🎯 주간 프로젝트: ASCII 아트
# 문자와 기호로 그림을 그려보세요!

# 예시 1: 집
print("    🏠    ")
print("   /  \\   ")
print("  /    \\  ")
print(" /______\\ ")
print(" |  🚪  | ")
print(" |______|")

print()  # 빈 줄

# 예시 2: 나무
print("    🌟    ")
print("   /🎄\\   ")
print("  /🎄🎄\\  ")
print(" /🎄🎄🎄\\ ")
print("    ||    ")

print()

# 🎨 여러분만의 아트를 만들어보세요!
# 아이디어: 동물, 로봇, 자동차, 하트, 별 등
# 아래에 코드를 작성하세요:

`,
          solution: `print("    🌙    ")
print("  ⭐    ⭐  ")
print("    🚀    ")
print("   /||\\   ")
print("  🔥🔥🔥  ")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: 공백(스페이스)을 사용해 위치를 조절하세요',
            '💡 힌트 2: 대칭이 되면 더 예뻐요',
            '💡 힌트 3: 이모지를 섞어서 사용해보세요'
          ],
          requirements: [
            '최소 5줄 이상의 아트',
            '의미 있는 그림 (무작위 기호 X)',
            '창의적인 작품'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
    },

    // ============================================
    // Week 4: 반복의 힘
    // CSTA 1A-AP-10: 반복 구조 이해
    // ============================================
    {
      id: 'week-4',
      number: 4,
      title: '반복의 힘',
      description: '같은 동작을 효율적으로 반복해요',
      missions: [
        {
          id: '1-4-1',
          title: '반복이 필요한 이유',
          description: '같은 동작을 여러 번 하는 것의 효율성을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '반복문 소개',
          conceptExplanation: '같은 일을 100번 하려면 100번 명령을 쓸까요? 반복을 사용하면 한 번만 써도 돼요!',
          hints: ['"앞으로"를 10번 쓰는 대신 "10번 반복: 앞으로"라고 할 수 있어요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-2',
          title: '반복 로봇 - 직선',
          description: '반복 블록으로 긴 직선 경로를 이동해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '반복문 기초',
          conceptExplanation: '"앞으로"를 5번 쓰는 대신 "5번 반복 { 앞으로 }"라고 하면 코드가 짧아져요!',
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '반복문의 개념과 필요성을 이해한다',
            '반복문을 사용하여 코드를 간결하게 만든다',
            '반복 횟수를 정확하게 계산한다'
          ],
          realWorldExample: '"물 마시기"를 8번 반복하면 하루 권장 물 섭취량을 채울 수 있어요. 매번 새로 적을 필요 없이 "8번 반복: 물 마시기"면 돼요!',
          hints: [
            '💡 힌트 1: 목표까지 몇 칸인지 세어보세요',
            '💡 힌트 2: "앞으로"를 6번 쓰는 대신 반복 블록을 사용해요',
            '💡 힌트 3: "6번 반복 { 앞으로 }" 형태로 작성하세요'
          ],
          commonMistakes: [
            '반복 횟수를 잘못 세는 경우',
            '반복 블록 안에 넣을 명령을 잘못 선택하는 경우'
          ],
          blocks: ['앞으로', '반복'],
          gridSize: { rows: 3, cols: 7 },
          startPosition: { row: 1, col: 0 },
          goalPosition: { row: 1, col: 6 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['반복(6) { 앞으로 }'],
          maxCommands: 3,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-3',
          title: '반복 로봇 - 정사각형',
          description: '반복을 사용해 정사각형 모양으로 이동해요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 80,
          estimatedMinutes: 15,
          concept: '반복과 패턴',
          conceptExplanation: '정사각형은 "앞으로 + 오른쪽회전"을 4번 반복하면 만들 수 있어요!',
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '도형의 규칙성을 패턴으로 인식한다',
            '반복되는 동작 묶음을 찾아낸다',
            '반복문 안에 여러 명령을 넣을 수 있다'
          ],
          realWorldExample: '운동장을 한 바퀴 도는 것은 "직진 후 코너 돌기"를 4번 반복하는 것과 같아요.',
          hints: [
            '💡 힌트 1: 정사각형은 몇 개의 변이 있나요?',
            '💡 힌트 2: 한 변을 그리려면 "앞으로 2번 + 오른쪽회전"이 필요해요',
            '💡 힌트 3: 4번 반복 { 앞으로, 앞으로, 오른쪽회전 }'
          ],
          commonMistakes: [
            '반복 횟수를 3이나 5로 잘못 설정하는 경우',
            '회전 방향을 잘못 선택하는 경우',
            '한 변의 길이를 일정하게 유지하지 않는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '반복'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 4, col: 0 },
          obstacles: [],
          checkpoints: [],
          collectibles: [{ row: 4, col: 2 }, { row: 2, col: 4 }, { row: 0, col: 2 }, { row: 2, col: 0 }],
          solutionSequence: ['반복(4) { 앞으로, 앞으로, 오른쪽회전 }'],
          drawPath: true,
          expectedShape: 'square',
          maxCommands: 5,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-4',
          title: '반복 로봇 - 삼각형',
          description: '반복을 사용해 삼각형 모양으로 이동해요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 18,
          concept: '도형과 반복',
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            '삼각형의 기하학적 특성을 이해한다',
            '회전 각도와 반복 횟수의 관계를 파악한다'
          ],
          realWorldExample: '삼각김밥을 만들 때 세 번 접어서 삼각형 모양을 만드는 것과 같아요.',
          hints: [
            '💡 힌트 1: 삼각형은 3개의 변이 있어요',
            '💡 힌트 2: 한 꼭짓점에서 120도 회전해요',
            '💡 힌트 3: 3번 반복 { 앞으로, 앞으로, 왼쪽회전, 왼쪽회전 }'
          ],
          commonMistakes: [
            '90도 회전으로 잘못 설정하는 경우 (삼각형은 120도!)',
            '반복 횟수를 4로 잘못 설정하는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 1 },
          goalPosition: { row: 4, col: 1 },
          obstacles: [],
          checkpoints: [],
          collectibles: [{ row: 4, col: 3 }, { row: 1, col: 2 }],
          solutionSequence: ['반복(3) { 앞으로, 앞으로, 왼쪽회전, 왼쪽회전 }'],
          drawPath: true,
          expectedShape: 'triangle',
          maxCommands: 6,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-5',
          title: '계단 오르기',
          description: '계단 패턴을 반복으로 만들어요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 100,
          estimatedMinutes: 18,
          concept: '중첩 패턴',
          hints: ['계단 한 칸은 "앞으로 + 위로"예요'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복'],
          gridSize: { rows: 6, cols: 6 },
          startPosition: { row: 5, col: 0 },
          goalPosition: { row: 0, col: 5 },
          obstacles: [],
          checkpoints: [],
          collectibles: [{ row: 4, col: 1 }, { row: 3, col: 2 }, { row: 2, col: 3 }, { row: 1, col: 4 }],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-6',
          title: '패턴 타일 깔기',
          description: '바닥에 반복 패턴으로 타일을 깔아요',
          type: 'visual-puzzle',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 12,
          concept: '2D 패턴',
          hints: ['가로와 세로 모두 패턴이 있어요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-7',
          title: '이모지 패턴',
          description: '😀😍😎가 반복되는 패턴을 만들어요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 40,
          estimatedMinutes: 8,
          concept: '시퀀스 패턴',
          hints: ['3개가 한 그룹이에요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-8',
          title: '비트 만들기',
          description: '간단한 음악 비트를 반복 패턴으로 만들어요',
          type: 'audio-visual',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 15,
          concept: '청각 패턴',
          hints: ['쿵-쿵-짝을 반복해보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-9',
          title: '나선형 미로',
          description: '나선형으로 안쪽으로 들어가요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 20,
          concept: '변하는 반복',
          conceptExplanation: '나선은 점점 짧아지는 반복이에요. 반복 횟수가 변할 수 있어요!',
          hints: ['처음에는 4칸, 다음은 3칸... 점점 짧아져요'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복'],
          gridSize: { rows: 7, cols: 7 },
          startPosition: { row: 6, col: 0 },
          goalPosition: { row: 3, col: 3 },
          obstacles: [
            { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }, { row: 1, col: 4 }, { row: 1, col: 5 },
            { row: 3, col: 1 }, { row: 3, col: 2 }, { row: 3, col: 4 }, { row: 3, col: 5 }, { row: 3, col: 6 },
            { row: 5, col: 0 }, { row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }, { row: 5, col: 4 }, { row: 5, col: 5 }
          ],
          checkpoints: [],
          collectibles: [{ row: 6, col: 3 }, { row: 4, col: 3 }, { row: 2, col: 3 }],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ==========================================
        // 🐍 Python 코딩 - for 반복문 입문
        // ==========================================
        {
          id: '1-4-py-use',
          title: '🐍 for 반복문 체험 (USE)',
          description: '▶ 실행해서 for 반복문이 어떻게 작동하는지 확인해요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 6,
          concept: 'for 반복문 체험',
          conceptExplanation: 'for 반복문은 같은 코드를 여러 번 실행해요! range(5)는 0부터 4까지 5번 반복해요.',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            'for 반복문이 여러 번 실행됨을 관찰한다',
            'range() 함수가 숫자를 만드는 것을 안다'
          ],
          starterCode: `# 🔄 for 반복문: 같은 동작을 여러 번!
# ▶ 실행 버튼을 눌러보세요

print("🚀 카운트다운 시작!")

for i in range(5):
    print(i)

print("발사! 🎉")`,
          solution: `print("🚀 카운트다운 시작!")
for i in range(5):
    print(i)
print("발사! 🎉")`,
          expectedOutput: `🚀 카운트다운 시작!
0
1
2
3
4
발사! 🎉`,
          hints: [
            '💡 힌트 1: 코드를 수정하지 말고 실행해보세요',
            '💡 힌트 2: range(5)는 0, 1, 2, 3, 4를 만들어요 (5개!)',
            '💡 힌트 3: i는 매 반복마다 바뀌는 숫자예요'
          ],
          testCases: [
            { input: '', expectedOutput: '🚀 카운트다운 시작!\n0\n1\n2\n3\n4\n발사! 🎉', description: '카운트다운 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-py-mod',
          title: '🐍 반복 횟수 바꾸기 (MODIFY)',
          description: 'range(5)를 range(10)으로 바꿔서 더 많이 반복해요',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 8,
          concept: '반복 횟수 수정',
          conceptExplanation: 'range() 안의 숫자를 바꾸면 반복 횟수가 달라져요!',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            'range()의 숫자가 반복 횟수를 결정함을 이해한다',
            '코드를 수정해 결과를 바꿀 수 있다'
          ],
          starterCode: `# range(5)를 range(10)으로 바꿔보세요!
# 5번 반복 → 10번 반복

for i in range(5):
    print("⭐", end="")

print()  # 줄바꿈
print("완료!")`,
          solution: `for i in range(10):
    print("⭐", end="")
print()
print("완료!")`,
          expectedOutput: `⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
완료!`,
          hints: [
            '💡 힌트 1: range(5)를 range(10)으로 바꾸세요',
            '💡 힌트 2: 숫자 5만 10으로 바꾸면 돼요',
            '💡 힌트 3: 별이 10개 나오면 성공!'
          ],
          commonMistakes: [
            'range를 바꾸지 않고 print를 수정하는 경우',
            'range(10)을 range(9)로 쓰는 경우 - 10개가 나와야 해요'
          ],
          testCases: [
            { input: '', expectedOutput: '⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐\n완료!', description: '별 10개 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-py-create',
          title: '🐍 반복으로 패턴 만들기 (CREATE)',
          description: 'for 반복문을 사용해서 하트 5개를 출력하세요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 90,
          estimatedMinutes: 12,
          concept: '반복문 직접 작성',
          conceptExplanation: 'for i in range(숫자): 형식으로 반복문을 만들어요!',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            'for 반복문을 직접 작성할 수 있다',
            'range()를 활용해 반복 횟수를 지정할 수 있다'
          ],
          starterCode: `# 🎯 목표: for 반복문으로 ❤️를 5개 출력하세요!
# 예상 결과: ❤️❤️❤️❤️❤️

# 힌트: for i in range(5):
#          print("❤️", end="")

# 여기에 코드를 작성하세요:

`,
          solution: `for i in range(5):
    print("❤️", end="")`,
          expectedOutput: `❤️❤️❤️❤️❤️`,
          hints: [
            '💡 힌트 1: for i in range(5): 를 입력하세요',
            '💡 힌트 2: 다음 줄에 들여쓰기(Tab 또는 스페이스 4개) 하고 print("❤️", end="")',
            '💡 힌트 3: end=""는 줄바꿈 없이 이어서 출력해요'
          ],
          commonMistakes: [
            '들여쓰기를 안 하는 경우 - for문 안의 코드는 들여쓰기 필수!',
            'range(5)를 range(4)로 쓰는 경우 - 5개가 나와야 해요',
            ':를 빼먹는 경우 - for i in range(5): 에서 콜론 필수!'
          ],
          testCases: [
            { input: '', expectedOutput: '❤️❤️❤️❤️❤️', description: '하트 5개 확인' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-10',
          title: '4주차 확인 퀴즈',
          description: '반복에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-4-project',
          title: '🎯 주간 프로젝트: 반복 아트',
          description: 'for 반복문을 사용해서 멋진 패턴 아트를 만들어요!',
          type: 'coding',
          language: 'python',
          difficulty: 'beginner',
          exp: 180,
          estimatedMinutes: 25,
          concept: '종합 프로젝트 - 반복 아트',
          conceptExplanation: 'for 반복문을 활용하면 복잡한 패턴도 쉽게 만들 수 있어요!',
          isKeyMission: true,
          isWeeklyProject: true,
          cstaStandard: '1A-AP-10',
          learningObjectives: [
            'for 반복문을 활용해 패턴을 생성할 수 있다',
            '중첩 반복문의 개념을 이해한다',
            '창의적으로 코드를 작성하는 경험을 한다'
          ],
          starterCode: `# 🎯 주간 프로젝트: 반복 아트
# for 반복문으로 멋진 패턴을 만들어보세요!

# 예시 1: 피라미드
print("🔺 피라미드:")
for i in range(1, 6):
    print("⭐" * i)

print()

# 예시 2: 역피라미드
print("🔻 역피라미드:")
for i in range(5, 0, -1):
    print("🔷" * i)

print()

# 예시 3: 숫자 피라미드
print("🔢 숫자 피라미드:")
for i in range(1, 6):
    print("".join(str(j) for j in range(1, i+1)))

print()

# 🎨 여러분만의 반복 아트를 만들어보세요!
# 아이디어: 다이아몬드, 하트 타워, 무지개 등
# 아래에 코드를 작성하세요:

`,
          solution: `print("💎 다이아몬드:")
for i in range(1, 4):
    print(" " * (3-i) + "◆" * i)
for i in range(3, 0, -1):
    print(" " * (3-i) + "◆" * i)`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: "문자" * 숫자 는 문자를 숫자만큼 반복해요',
            '💡 힌트 2: range(1, 6)은 1부터 5까지예요',
            '💡 힌트 3: range(5, 0, -1)은 5, 4, 3, 2, 1 역순이에요'
          ],
          requirements: [
            'for 반복문을 최소 2개 이상 사용',
            '눈에 보이는 패턴 생성',
            '창의적인 아트 작품'
          ],
          testCases: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      project: {
        id: 'proj-1-1',
        title: '나만의 패턴 아트',
        description: '반복 패턴을 활용해 디지털 아트 작품을 만들어요',
        difficulty: 'beginner',
        duration: '45분',
        requirements: ['최소 2가지 이상의 패턴 사용', '반복 블록 활용', '색상 조합 고려'],
        exp: 200,
      },
    },

    // ============================================
    // Week 5: 조건과 선택
    // CSTA 1A-AP-11: 조건문 이해
    // ============================================
    {
      id: 'week-5',
      number: 5,
      title: '조건과 선택',
      description: '상황에 따라 다르게 행동해요',
      missions: [
        {
          id: '1-5-1',
          title: '조건이란?',
          description: '상황에 따라 다르게 행동하는 것을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '조건문 소개',
          conceptExplanation: '"만약 비가 오면 우산을 챙겨요"처럼, 조건에 따라 다른 행동을 할 수 있어요!',
          hints: ['일상생활에서 조건을 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-2',
          title: '신호등 규칙',
          description: '신호등 색깔에 따라 어떻게 행동하는지 정해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '조건 분기',
          conceptExplanation: '빨간불이면 멈추고, 초록불이면 건너가요. 이것이 조건문이에요!',
          hints: ['빨간불일 때는 멈추고, 초록불일 때는 건너가요'],
          blocks: ['빨간불이면', '멈춘다', '초록불이면', '건넌다', '노란불이면', '주의한다'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-3',
          title: '날씨에 맞는 옷',
          description: '날씨 조건에 따라 알맞은 옷을 선택해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '조건 매칭',
          hints: ['비가 오면 우산이 필요해요', '추우면 따뜻한 옷을 입어요'],
          blocks: ['비가 오면', '우산을 챙긴다', '추우면', '패딩을 입는다', '더우면', '반팔을 입는다', '눈이 오면', '장갑을 낀다'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-4',
          title: '로봇의 선택',
          description: '로봇이 벽을 감지하면 자동으로 방향을 바꿔요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '조건부 실행',
          conceptExplanation: '로봇이 앞에 벽이 있는지 확인하고, 있으면 회전해요!',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '조건문의 기본 구조를 이해한다',
            '센서 정보를 활용한 의사결정을 이해한다',
            '조건에 따른 분기 처리를 할 수 있다'
          ],
          realWorldExample: '로봇 청소기가 벽을 만나면 자동으로 방향을 바꾸는 것과 같아요.',
          hints: [
            '💡 힌트 1: 로봇은 앞에 벽이 있는지 확인할 수 있어요',
            '💡 힌트 2: 벽이 있으면 위나 아래로 돌아가야 해요',
            '💡 힌트 3: "만약 앞이 벽이면 { 회전 } 아니면 { 앞으로 }"'
          ],
          commonMistakes: [
            '조건 확인 없이 무조건 직진하는 경우',
            '벽을 만났을 때 돌아갈 방향을 잘못 선택하는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '만약 앞이 벽이면', '아니면'],
          gridSize: { rows: 4, cols: 5 },
          startPosition: { row: 2, col: 0 },
          goalPosition: { row: 2, col: 4 },
          obstacles: [{ row: 2, col: 2 }, { row: 1, col: 2 }, { row: 3, col: 2 }],
          checkpoints: [],
          collectibles: [],
          solutionSequence: ['앞으로', '앞으로', '만약 앞이 벽이면 { 왼쪽회전 }', '앞으로', '오른쪽회전', '앞으로', '앞으로', '오른쪽회전', '앞으로', '왼쪽회전', '앞으로', '앞으로'],
          useConditional: true,
          maxCommands: 15,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-5',
          title: '숫자 비교하기',
          description: '두 숫자를 비교해서 크고 작음을 판단해요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '비교 연산',
          conceptExplanation: '크다(>), 작다(<), 같다(=)를 사용해 숫자를 비교해요!',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '비교 연산자(>, <, =)의 의미를 이해한다',
            '두 수의 대소 관계를 판단할 수 있다',
            '조건문에서 비교 연산자를 사용하는 방법을 안다'
          ],
          realWorldExample: '키 재기에서 "150cm 이상이면 롤러코스터 탑승 가능"처럼 비교를 사용해요.',
          hints: [
            '💡 힌트 1: >는 "크다", <는 "작다"를 의미해요',
            '💡 힌트 2: 5 > 3은 "5는 3보다 크다"라고 읽어요',
            '💡 힌트 3: 같은지 비교할 때는 = 또는 ==를 써요'
          ],
          commonMistakes: [
            '> 와 < 기호를 헷갈리는 경우',
            '같다(=)와 대입(=)을 혼동하는 경우'
          ],
          expectedOutput: '올바른 비교 결과',
          checkQuestions: [
            {
              question: '7 > 4는 참(True)일까요, 거짓(False)일까요?',
              options: ['참(True)', '거짓(False)'],
              correctAnswer: 0,
              feedback: {
                correct: '맞아요! 7은 4보다 크므로 참이에요.',
                incorrect: '7이 4보다 큰지 생각해보세요. 7 > 4니까 참이에요.'
              }
            },
            {
              question: '3 < 3은 참일까요, 거짓일까요?',
              options: ['참(True)', '거짓(False)'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 3은 3보다 작지 않으므로 거짓이에요.',
                incorrect: '3이 3보다 "작은지" 물어보는 거예요. 같으면 "작다"가 아니에요!'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-6',
          title: '홀수 짝수',
          description: '숫자가 홀수인지 짝수인지 구분해요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 10,
          concept: '조건 판단',
          conceptExplanation: '2로 나누어 떨어지면 짝수, 아니면 홀수예요!',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '홀수와 짝수의 정의를 이해한다',
            '나머지 연산(%)의 개념을 알 수 있다',
            '조건문으로 홀짝을 판별하는 로직을 이해한다'
          ],
          realWorldExample: '짝꿍 정하기에서 번호가 짝수인 학생끼리, 홀수인 학생끼리 짝이 되는 것과 같아요.',
          hints: [
            '💡 힌트 1: 2, 4, 6, 8...은 짝수, 1, 3, 5, 7...은 홀수예요',
            '💡 힌트 2: 짝수는 2로 나누면 딱 떨어져요 (나머지가 0)',
            '💡 힌트 3: 숫자 % 2 == 0이면 짝수, 아니면 홀수!'
          ],
          commonMistakes: [
            '0을 홀수로 잘못 분류하는 경우 (0은 짝수!)',
            '나머지 연산(%)을 나눗셈(/)과 혼동하는 경우'
          ],
          expectedOutput: '홀수 또는 짝수',
          checkQuestions: [
            {
              question: '15는 홀수일까요, 짝수일까요?',
              options: ['홀수', '짝수'],
              correctAnswer: 0,
              feedback: {
                correct: '맞아요! 15 ÷ 2 = 7...1 (나머지 1)이므로 홀수예요.',
                incorrect: '15를 2로 나눠보세요. 나머지가 있으면 홀수예요!'
              }
            },
            {
              question: '0은 홀수일까요, 짝수일까요?',
              options: ['홀수', '짝수'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 0 ÷ 2 = 0 (나머지 0)이므로 짝수예요.',
                incorrect: '0을 2로 나누면 나머지가 0이에요. 그러므로 0은 짝수!'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-7',
          title: '점수에 따른 등급',
          description: '점수에 따라 등급을 매겨요',
          type: 'drag-drop',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '다중 조건',
          conceptExplanation: '90점 이상이면 A, 80점 이상이면 B... 여러 조건을 순서대로 확인해요!',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '다중 조건문(else if)의 구조를 이해한다',
            '조건의 순서가 결과에 영향을 미침을 안다',
            '범위에 따른 분류를 조건문으로 표현할 수 있다'
          ],
          realWorldExample: '시험 점수에 따라 수/우/미/양/가 등급을 매기는 것처럼, 컴퓨터도 점수 범위에 따라 분류해요.',
          hints: [
            '💡 힌트 1: 가장 높은 점수 조건부터 확인해야 해요',
            '💡 힌트 2: 90점 이상이면 A, 80점 이상이면 B 순서로 확인해요',
            '💡 힌트 3: 조건에 맞는 등급 블록을 짝지어 배치하세요'
          ],
          commonMistakes: [
            '조건 순서를 뒤바꿔서 70점을 먼저 확인하면 85점도 C등급이 됨',
            '조건과 결과 블록을 잘못 연결하는 경우'
          ],
          blocks: ['90점 이상이면', 'A등급', '80점 이상이면', 'B등급', '70점 이상이면', 'C등급', '그 외', 'D등급'],
          correctBlocks: ['90점 이상이면', 'A등급', '80점 이상이면', 'B등급', '70점 이상이면', 'C등급', '그 외', 'D등급'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-8',
          title: '자판기 시뮬레이션',
          description: '버튼에 따라 다른 음료가 나오는 자판기를 만들어요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '선택 구조',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            'switch/case 구조의 개념을 이해한다',
            '입력 값에 따라 다른 출력을 만드는 방법을 안다',
            '선택 구조가 실생활에서 어떻게 사용되는지 이해한다'
          ],
          realWorldExample: '실제 자판기에서 콜라 버튼을 누르면 콜라가, 사이다 버튼을 누르면 사이다가 나오는 것과 같아요!',
          conceptCards: [
            {
              title: '선택 구조란?',
              description: '여러 선택지 중 하나를 골라 실행하는 구조예요',
              icon: '🎯',
              example: '버튼 1 → 콜라, 버튼 2 → 사이다, 버튼 3 → 주스'
            },
            {
              title: 'switch/case',
              description: '조건이 여러 개일 때 깔끔하게 분기하는 방법이에요',
              icon: '🔀',
              example: 'switch(버튼) { case 1: 콜라; case 2: 사이다; }'
            }
          ],
          hints: [
            '💡 힌트 1: 자판기 버튼은 각각 다른 음료와 연결되어 있어요',
            '💡 힌트 2: "만약 버튼1이면 콜라, 버튼2이면 사이다..." 구조예요',
            '💡 힌트 3: 존재하지 않는 버튼을 누르면? default 처리가 필요해요!'
          ],
          commonMistakes: [
            '모든 버튼에 같은 음료를 연결하는 경우',
            '존재하지 않는 버튼에 대한 처리를 빼먹는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-9',
          title: 'AND와 OR',
          description: '여러 조건을 조합하는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 12,
          concept: '논리 연산',
          conceptExplanation: 'AND는 둘 다 참이어야 참, OR는 하나만 참이어도 참이에요!',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            'AND(그리고) 연산의 의미와 결과를 이해한다',
            'OR(또는) 연산의 의미와 결과를 이해한다',
            '복합 조건을 사용하여 더 정교한 조건문을 만들 수 있다'
          ],
          realWorldExample: '"아침이고(AND) 학교 가는 날이면 일어나야 해요" / "토요일이거나(OR) 일요일이면 쉬는 날이에요"',
          conceptCards: [
            {
              title: 'AND (그리고)',
              description: '두 조건이 모두 참이어야 전체가 참이에요',
              icon: '🤝',
              example: '비가 오고 AND 우산이 없으면 → 젖는다'
            },
            {
              title: 'OR (또는)',
              description: '하나만 참이어도 전체가 참이에요',
              icon: '🔄',
              example: '콜라 OR 사이다가 있으면 → 마실 수 있다'
            },
            {
              title: 'NOT (부정)',
              description: '참을 거짓으로, 거짓을 참으로 바꿔요',
              icon: '🔃',
              example: 'NOT 비가 온다 = 비가 안 온다'
            }
          ],
          hints: [
            '💡 힌트 1: AND는 "그리고", OR는 "또는"으로 생각해요',
            '💡 힌트 2: AND: 참 AND 참 = 참, 그 외는 모두 거짓',
            '💡 힌트 3: OR: 거짓 OR 거짓 = 거짓, 그 외는 모두 참'
          ],
          commonMistakes: [
            'AND와 OR를 반대로 사용하는 경우',
            'NOT을 적용할 위치를 잘못 잡는 경우'
          ],
          checkQuestions: [
            {
              question: '"비가 오고 AND 우산이 있다"에서 비가 오지만 우산이 없다면?',
              options: ['참(True)', '거짓(False)'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! AND는 둘 다 참이어야 해요. 우산이 없으니 거짓!',
                incorrect: 'AND는 두 조건 모두 참이어야 참이에요. 하나라도 거짓이면 거짓!'
              }
            },
            {
              question: '"토요일 OR 일요일"에서 오늘이 토요일이면?',
              options: ['참(True)', '거짓(False)'],
              correctAnswer: 0,
              feedback: {
                correct: '맞아요! OR는 하나만 참이어도 참이에요!',
                incorrect: 'OR는 둘 중 하나만 참이어도 전체가 참이에요!'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ========== Week 5 Python 코딩 미션 (조건문) ==========
        {
          id: '1-5-py-use',
          title: '🐍 if문 체험하기 (USE)',
          description: '조건문이 어떻게 동작하는지 직접 실행해서 확인해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 10,
          concept: 'if 조건문',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            'if문의 기본 구조를 이해한다',
            '조건이 참/거짓에 따라 다르게 실행됨을 확인한다'
          ],
          conceptExplanation: 'if문은 조건이 참(True)일 때만 실행되는 코드 블록이에요!',
          starterCode: `# 🎮 조건문을 실행해보세요!
# 점수에 따라 다른 메시지가 나와요

score = 85

if score >= 90:
    print("🏆 A등급! 최고에요!")
elif score >= 80:
    print("🥈 B등급! 잘했어요!")
elif score >= 70:
    print("🥉 C등급! 괜찮아요!")
else:
    print("💪 조금 더 노력하면 돼요!")

print(f"당신의 점수: {score}점")`,
          solution: `score = 85

if score >= 90:
    print("🏆 A등급! 최고에요!")
elif score >= 80:
    print("🥈 B등급! 잘했어요!")
elif score >= 70:
    print("🥉 C등급! 괜찮아요!")
else:
    print("💪 조금 더 노력하면 돼요!")

print(f"당신의 점수: {score}점")`,
          expectedOutput: '🥈 B등급! 잘했어요!\n당신의 점수: 85점',
          hints: [
            '💡 힌트 1: ▶ 실행 버튼을 눌러 결과를 확인하세요',
            '💡 힌트 2: score가 85이면 어떤 조건에 해당할까요?',
            '💡 힌트 3: 85는 90보다 작고, 80보다 크거나 같아요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-py-mod',
          title: '🐍 점수 바꿔보기 (MODIFY)',
          description: '점수를 바꿔서 다른 등급이 나오게 해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 12,
          concept: 'if-elif-else',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '조건 값을 변경하면 결과가 달라짐을 체험한다',
            'elif와 else의 역할을 이해한다'
          ],
          starterCode: `# 🎯 미션: 점수를 바꿔서 "A등급"이 나오게 하세요!
# score 값을 90 이상으로 바꿔보세요

score = 75  # ← 이 숫자를 바꿔보세요!

if score >= 90:
    print("🏆 A등급! 최고에요!")
elif score >= 80:
    print("🥈 B등급! 잘했어요!")
elif score >= 70:
    print("🥉 C등급! 괜찮아요!")
else:
    print("💪 조금 더 노력하면 돼요!")`,
          solution: `score = 95

if score >= 90:
    print("🏆 A등급! 최고에요!")
elif score >= 80:
    print("🥈 B등급! 잘했어요!")
elif score >= 70:
    print("🥉 C등급! 괜찮아요!")
else:
    print("💪 조금 더 노력하면 돼요!")`,
          expectedOutput: '🏆 A등급! 최고에요!',
          hints: [
            '💡 힌트 1: A등급이 되려면 score가 90 이상이어야 해요',
            '💡 힌트 2: score = 75를 score = 95로 바꿔보세요',
            '💡 힌트 3: 90, 91, 92, 100... 어떤 숫자든 90 이상이면 돼요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-py-create',
          title: '🐍 홀짝 판별기 만들기 (CREATE)',
          description: '숫자가 홀수인지 짝수인지 판별하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 15,
          concept: '조건문 작성',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '나머지 연산자(%)를 사용할 수 있다',
            'if-else 문을 직접 작성할 수 있다'
          ],
          starterCode: `# 🎯 미션: 숫자가 홀수인지 짝수인지 판별하세요!
# 힌트: 짝수는 2로 나눈 나머지가 0이에요 (숫자 % 2 == 0)

number = 7

# 여기에 if-else문을 작성하세요
# 짝수면 "짝수입니다" 출력
# 홀수면 "홀수입니다" 출력

`,
          solution: `number = 7

if number % 2 == 0:
    print("짝수입니다")
else:
    print("홀수입니다")`,
          expectedOutput: '홀수입니다',
          hints: [
            '💡 힌트 1: number % 2는 number를 2로 나눈 나머지예요',
            '💡 힌트 2: if number % 2 == 0: 이면 짝수!',
            '💡 힌트 3: else: 를 사용하면 조건이 아닐 때 실행돼요'
          ],
          testCases: [
            { input: '', expectedOutput: '홀수입니다', description: '7은 홀수' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-project',
          title: '🎯 주간 프로젝트: 온도 판단기',
          description: '온도에 따라 옷차림을 추천하는 프로그램을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 150,
          estimatedMinutes: 20,
          concept: '다중 조건문 활용',
          phase: 'create',
          isWeeklyProject: true,
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '여러 조건을 순서대로 확인하는 코드를 작성할 수 있다',
            '실생활 문제를 조건문으로 해결할 수 있다'
          ],
          realWorldExample: '날씨 앱이 온도에 따라 "패딩 추천", "반팔 추천" 등을 알려주는 것처럼!',
          starterCode: `# 🌡️ 온도 판단기
# 미션: 온도에 따라 옷차림을 추천해주세요!
#
# 조건:
# - 30도 이상: "🥵 너무 더워요! 반팔과 반바지를 입으세요"
# - 20도 이상: "😊 날씨가 좋아요! 가벼운 옷을 입으세요"
# - 10도 이상: "🧥 쌀쌀해요! 겉옷을 챙기세요"
# - 10도 미만: "🥶 추워요! 패딩을 입으세요"

temperature = 25

# 여기에 if-elif-else문을 작성하세요!

`,
          solution: `temperature = 25

if temperature >= 30:
    print("🥵 너무 더워요! 반팔과 반바지를 입으세요")
elif temperature >= 20:
    print("😊 날씨가 좋아요! 가벼운 옷을 입으세요")
elif temperature >= 10:
    print("🧥 쌀쌀해요! 겉옷을 챙기세요")
else:
    print("🥶 추워요! 패딩을 입으세요")`,
          expectedOutput: '😊 날씨가 좋아요! 가벼운 옷을 입으세요',
          hints: [
            '💡 힌트 1: 높은 온도부터 순서대로 확인하세요',
            '💡 힌트 2: if temperature >= 30: 부터 시작!',
            '💡 힌트 3: elif는 "아니면 만약"이라는 뜻이에요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-5-10',
          title: '5주차 확인 퀴즈',
          description: '조건문에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          cstaStandard: '1A-AP-11',
          learningObjectives: [
            '조건문의 기본 개념을 확인한다',
            '비교 연산자와 논리 연산자를 이해했는지 확인한다'
          ],
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-1-5',
        title: '조건문 마스터 퀴즈',
        questions: [
          {
            id: 'q-1-5-1',
            question: '조건문이란 무엇인가요?',
            options: [
              '같은 동작을 반복하는 것',
              '조건에 따라 다른 동작을 하는 것',
              '변수에 값을 저장하는 것',
              '오류를 찾는 것'
            ],
            correctAnswer: 1,
            explanation: '조건문은 "만약 ~이면 ~하고, 아니면 ~해라"처럼 조건에 따라 다른 동작을 수행하는 것이에요.'
          },
          {
            id: 'q-1-5-2',
            question: '5 > 3의 결과는?',
            options: ['참(True)', '거짓(False)'],
            correctAnswer: 0,
            explanation: '5는 3보다 크므로 "5 > 3"은 참(True)이에요.'
          },
          {
            id: 'q-1-5-3',
            question: '참 AND 거짓의 결과는?',
            options: ['참(True)', '거짓(False)'],
            correctAnswer: 1,
            explanation: 'AND는 두 조건이 모두 참이어야 참이에요. 하나라도 거짓이면 결과는 거짓!'
          },
          {
            id: 'q-1-5-4',
            question: '거짓 OR 참의 결과는?',
            options: ['참(True)', '거짓(False)'],
            correctAnswer: 0,
            explanation: 'OR는 하나만 참이어도 전체가 참이에요. 하나가 참이니까 결과는 참!'
          },
          {
            id: 'q-1-5-5',
            question: '8은 홀수인가요, 짝수인가요?',
            options: ['홀수', '짝수'],
            correctAnswer: 1,
            explanation: '8 ÷ 2 = 4 (나머지 0)이므로 짝수예요!'
          }
        ]
      },
    },

    // ============================================
    // Week 6: 문제 분해
    // CSTA 1A-AP-12: 문제 분해
    // ============================================
    {
      id: 'week-6',
      number: 6,
      title: '문제 쪼개기',
      description: '큰 문제를 작은 문제로 나눠요',
      missions: [
        {
          id: '1-6-1',
          title: '문제 분해란?',
          description: '큰 문제를 작은 문제로 나누는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '문제 분해 소개',
          conceptExplanation: '코끼리를 어떻게 먹을까요? 한 입씩! 큰 문제도 작은 부분으로 나누면 해결할 수 있어요!',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '문제 분해(Decomposition)의 개념을 이해한다',
            '큰 문제를 작은 문제로 나누는 것의 장점을 안다',
            '일상생활에서 문제 분해 사례를 찾을 수 있다'
          ],
          realWorldExample: '집 청소가 너무 힘들면? 거실, 방, 화장실로 나눠서 하나씩 청소하면 쉬워져요!',
          conceptCards: [
            {
              title: '문제 분해란?',
              description: '큰 문제를 관리 가능한 작은 문제로 나누는 것',
              icon: '🧩',
              example: '케이크 만들기 = 재료 준비 + 반죽 + 굽기 + 장식'
            },
            {
              title: '왜 분해할까?',
              description: '작은 문제는 이해하기 쉽고 해결하기도 쉬워요!',
              icon: '💡',
              example: '1000조각 퍼즐 = 코너 먼저 + 테두리 + 중앙 부분'
            }
          ],
          hints: [
            '💡 힌트 1: 큰 문제를 보면 "이걸 더 작게 나눌 수 있을까?" 생각해요',
            '💡 힌트 2: 각 작은 문제는 독립적으로 해결할 수 있어야 해요',
            '💡 힌트 3: 분해한 문제들을 합치면 원래 문제가 해결되어야 해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-2',
          title: '생일 파티 계획',
          description: '생일 파티 준비를 작은 작업들로 나눠요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 12,
          concept: '작업 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '복합적인 작업을 독립적인 세부 작업으로 분해할 수 있다',
            '작업의 카테고리별 분류를 이해한다'
          ],
          realWorldExample: '결혼식 준비처럼 큰 이벤트도 초대장, 음식, 장소, 의상 등으로 나눠서 준비하면 덜 혼란스러워요.',
          hints: [
            '💡 힌트 1: 파티 준비에 필요한 것들을 종류별로 묶어보세요',
            '💡 힌트 2: 음식 관련, 장식 관련, 사람 관련으로 나눌 수 있어요',
            '💡 힌트 3: 각 작업이 서로 겹치지 않게 분류해보세요'
          ],
          commonMistakes: [
            '한 카테고리에 모든 작업을 넣으려는 경우',
            '작업의 순서와 분류를 혼동하는 경우'
          ],
          blocks: ['친구 초대하기', '케이크 주문하기', '풍선 장식하기', '게임 준비하기', '음식 준비하기', '음악 선곡하기', '선물 포장하기', '청소하기'],
          correctBlocks: ['친구 초대하기', '케이크 주문하기', '풍선 장식하기', '게임 준비하기', '음식 준비하기', '음악 선곡하기', '선물 포장하기', '청소하기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-3',
          title: '그림 그리기 분해',
          description: '집 그림을 그리는 과정을 단계로 나눠요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '순서화된 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '순서가 중요한 작업을 단계별로 분해할 수 있다',
            '작업 간의 의존성(선후 관계)을 이해한다'
          ],
          realWorldExample: '요리 레시피처럼 순서가 중요해요. 밥을 짓기 전에 쌀을 씻어야 하고, 볶음밥은 밥이 있어야 만들 수 있어요!',
          hints: [
            '💡 힌트 1: 집 그림에는 어떤 요소가 있나요? (지붕, 벽, 문, 창문)',
            '💡 힌트 2: 가장 먼저 해야 할 일은 무엇일까요?',
            '💡 힌트 3: 준비 → 큰 도형 → 작은 도형 → 마무리 순서로 해요'
          ],
          commonMistakes: [
            '색칠하기를 먼저 하려는 경우 (도형을 다 그린 후에!)',
            '준비 단계를 건너뛰는 경우'
          ],
          blocks: ['도화지 준비', '사각형(벽) 그리기', '삼각형(지붕) 그리기', '작은 사각형(문) 그리기', '정사각형(창문) 그리기', '색칠하기'],
          correctBlocks: ['도화지 준비', '사각형(벽) 그리기', '삼각형(지붕) 그리기', '작은 사각형(문) 그리기', '정사각형(창문) 그리기', '색칠하기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-4',
          title: '레고 조립 분해',
          description: '레고 자동차를 부분별로 나눠서 조립해요',
          type: 'visual-puzzle',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 15,
          concept: '구성 요소 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '복잡한 물체를 구성 요소(부품)로 분해할 수 있다',
            '각 부품의 역할과 연결 관계를 이해한다'
          ],
          realWorldExample: '컴퓨터도 CPU, 메모리, 하드디스크, 모니터 등의 부품으로 나뉘어요. 각 부품이 역할을 해야 컴퓨터가 작동해요!',
          hints: [
            '💡 힌트 1: 자동차를 보면 어떤 부분들이 보이나요?',
            '💡 힌트 2: 바퀴(4개), 차체(1개), 창문, 문 등으로 나눠보세요',
            '💡 힌트 3: 각 부품을 따로 조립한 후 합치면 완성!'
          ],
          commonMistakes: [
            '부품을 너무 작게 나누는 경우 (레고 블록 하나하나까지)',
            '부품 간의 연결 부분을 고려하지 않는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-5',
          title: '게임 캐릭터 분해',
          description: '게임 캐릭터의 구성 요소를 분석해요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 12,
          concept: '추상화',
          conceptExplanation: '캐릭터 = 외모 + 능력치 + 기술 + 장비',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '추상적인 개념도 구성 요소로 분해할 수 있음을 안다',
            '게임 캐릭터를 속성(attribute)으로 분석할 수 있다'
          ],
          realWorldExample: '마인크래프트 캐릭터도 체력, 허기, 인벤토리, 위치 등의 정보로 이루어져 있어요!',
          conceptCards: [
            {
              title: '캐릭터의 외모',
              description: '키, 머리색, 눈색, 옷 등 눈에 보이는 특징',
              icon: '👤',
              example: '키: 170cm, 머리색: 검정'
            },
            {
              title: '캐릭터의 능력치',
              description: '힘, 민첩, 지능 등 숫자로 표현되는 능력',
              icon: '💪',
              example: '힘: 50, 민첩: 30, 마법: 80'
            },
            {
              title: '캐릭터의 기술',
              description: '캐릭터가 사용할 수 있는 동작들',
              icon: '⚡',
              example: '점프, 공격, 방어, 마법 시전'
            }
          ],
          hints: [
            '💡 힌트 1: 게임 캐릭터 창을 떠올려보세요',
            '💡 힌트 2: 캐릭터를 만들 때 무엇을 정하나요?',
            '💡 힌트 3: 외모/능력치/기술/장비 4가지로 나눌 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-6',
          title: '학교 하루 일과 분해',
          description: '학교에서의 하루를 시간대별로 나눠요',
          type: 'writing',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 15,
          concept: '시간 기반 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '시간을 기준으로 활동을 분해할 수 있다',
            '하루 일과를 구조화하여 표현할 수 있다'
          ],
          realWorldExample: '시간표처럼 하루를 1교시, 2교시...로 나누면 어떤 수업이 언제인지 알기 쉬워요!',
          requirements: ['아침-점심-오후-저녁으로 나누기', '각 시간대별 주요 활동 작성', '최소 8가지 활동'],
          hints: [
            '💡 힌트 1: 아침에 일어나서 학교 가기 전까지 무엇을 하나요?',
            '💡 힌트 2: 학교에서는 수업, 점심, 쉬는 시간이 있어요',
            '💡 힌트 3: 시간 순서대로 활동을 나열해보세요'
          ],
          commonMistakes: [
            '시간 순서를 뒤바꾸는 경우',
            '활동을 너무 크게만 분해하는 경우 (학교 생활 → 더 세분화 필요)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-7',
          title: '복잡한 미로 분해',
          description: '큰 미로를 작은 구역으로 나눠서 해결해요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 100,
          estimatedMinutes: 20,
          concept: '전략적 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '복잡한 경로를 구역별로 분해하여 해결할 수 있다',
            '분해한 부분을 조합하여 전체 해결책을 만들 수 있다'
          ],
          realWorldExample: '큰 지도에서 목적지를 찾을 때도 "우리 동네 → 시내 → 목적지 동네"처럼 구간을 나눠서 길을 찾아요!',
          hints: [
            '💡 힌트 1: 미로를 4등분해서 각 구역의 출구를 먼저 찾아보세요',
            '💡 힌트 2: 시작점 구역 → 중간 구역 → 목표 구역 순서로 해결해요',
            '💡 힌트 3: 각 구역 해결책을 연결하면 전체 해결책이 돼요!'
          ],
          commonMistakes: [
            '전체를 한번에 해결하려고 하는 경우',
            '구역 간 연결 부분을 고려하지 않는 경우'
          ],
          solutionSequence: ['앞으로 6번', '오른쪽회전', '앞으로 2번', '왼쪽회전', '앞으로 4번', '오른쪽회전', '앞으로 4번'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복'],
          gridSize: { rows: 7, cols: 7 },
          startPosition: { row: 6, col: 0 },
          goalPosition: { row: 0, col: 6 },
          obstacles: [
            { row: 5, col: 1 }, { row: 4, col: 1 }, { row: 3, col: 1 },
            { row: 3, col: 2 }, { row: 3, col: 3 },
            { row: 1, col: 3 }, { row: 1, col: 4 }, { row: 1, col: 5 },
            { row: 5, col: 3 }, { row: 5, col: 4 },
            { row: 3, col: 5 }, { row: 4, col: 5 }
          ],
          checkpoints: [{ row: 3, col: 0 }, { row: 0, col: 3 }],
          collectibles: [],
          mazeWalls: true,
          maxCommands: 20,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-8',
          title: '앱 기능 분해',
          description: '간단한 앱의 기능을 나눠서 설계해요',
          type: 'writing',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 18,
          concept: '기능 분해',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '소프트웨어를 기능 단위로 분해할 수 있다',
            '각 기능의 세부 동작을 설명할 수 있다',
            '실제 앱 개발 과정의 기초를 이해한다'
          ],
          realWorldExample: '카카오톡 = 채팅 + 전화 + 프로필 + 친구목록 + 설정... 각 기능이 따로 만들어져서 합쳐진 거예요!',
          requirements: ['앱 이름 정하기', '주요 기능 5가지 이상 나열', '각 기능의 세부 단계 설명'],
          hints: [
            '💡 힌트 1: 좋아하는 앱을 하나 골라 기능들을 나열해보세요',
            '💡 힌트 2: 메모장 앱이라면 → 메모 작성, 저장, 삭제, 검색, 공유',
            '💡 힌트 3: 각 기능을 더 작은 단계로 나눠보세요 (저장 → 내용 확인 → 저장 버튼 → 완료 알림)'
          ],
          commonMistakes: [
            '기능을 너무 크게만 나누는 경우 (채팅 → 메시지 보내기, 받기, 읽음 표시로 나눌 수 있어요)',
            '비슷한 기능을 중복으로 나열하는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-9',
          title: '퍼즐 조각 맞추기',
          description: '큰 그림을 완성하기 위해 퍼즐 조각을 분석해요',
          type: 'visual-puzzle',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 15,
          concept: '패턴 분석',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '조각의 특징을 분석하여 전체 구조를 파악할 수 있다',
            '분해된 부분들을 논리적으로 조합할 수 있다'
          ],
          realWorldExample: '퍼즐을 맞출 때 코너 조각 → 테두리 조각 → 안쪽 조각 순서로 맞추면 더 쉬워요!',
          hints: [
            '💡 힌트 1: 먼저 특징적인 조각(코너, 테두리)을 찾으세요',
            '💡 힌트 2: 색상이 비슷한 조각들을 그룹으로 모아보세요',
            '💡 힌트 3: 조각의 돌출부와 홈 모양을 매칭해보세요'
          ],
          commonMistakes: [
            '무작위로 조각을 맞추려고 하는 경우',
            '조각의 방향을 고려하지 않는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ========== Week 6 Python 코딩 미션 (함수 - 문제 분해) ==========
        {
          id: '1-6-py-use',
          title: '🐍 함수 체험하기 (USE)',
          description: '함수가 무엇인지 직접 실행해서 알아봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 10,
          concept: '함수 기초',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '함수가 코드를 재사용하는 방법임을 이해한다',
            '함수 호출 방법을 익힌다'
          ],
          conceptExplanation: '함수는 이름이 있는 코드 묶음이에요. 한 번 만들면 이름만 불러서 재사용할 수 있어요!',
          starterCode: `# 🎁 함수 = 이름이 있는 코드 묶음!
# 한 번 만들면 여러 번 재사용할 수 있어요

# 인사하는 함수
def say_hello():
    print("안녕하세요! 👋")
    print("반가워요!")

# 함수 호출하기 (사용하기)
print("=== 첫 번째 인사 ===")
say_hello()

print("=== 두 번째 인사 ===")
say_hello()

print("=== 세 번째 인사 ===")
say_hello()`,
          solution: `def say_hello():
    print("안녕하세요! 👋")
    print("반가워요!")

print("=== 첫 번째 인사 ===")
say_hello()

print("=== 두 번째 인사 ===")
say_hello()

print("=== 세 번째 인사 ===")
say_hello()`,
          expectedOutput: `=== 첫 번째 인사 ===
안녕하세요! 👋
반가워요!
=== 두 번째 인사 ===
안녕하세요! 👋
반가워요!
=== 세 번째 인사 ===
안녕하세요! 👋
반가워요!`,
          hints: [
            '💡 힌트 1: ▶ 실행 버튼을 눌러보세요',
            '💡 힌트 2: say_hello()를 호출할 때마다 같은 내용이 출력돼요',
            '💡 힌트 3: 함수를 한 번 정의하면 여러 번 사용할 수 있어요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-py-mod',
          title: '🐍 함수 내용 바꾸기 (MODIFY)',
          description: '함수 안의 내용을 수정해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 12,
          concept: '함수 수정',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '함수 정의 부분을 수정하면 모든 호출에 영향을 줌을 안다',
            '함수의 재사용성을 이해한다'
          ],
          starterCode: `# 🎯 미션: 함수를 수정해서 자기소개가 나오게 하세요!
# "안녕!" 대신 여러분의 이름과 좋아하는 것을 출력하세요

def introduce():
    print("안녕!")  # ← 이 줄을 바꿔보세요
    # 여기에 더 추가해도 돼요!

# 함수 테스트
print("🎤 자기소개 시작!")
introduce()
print("🎤 자기소개 끝!")`,
          solution: `def introduce():
    print("안녕하세요! 저는 코딩왕이에요")
    print("저는 게임을 좋아해요!")
    print("잘 부탁드려요 😊")

print("🎤 자기소개 시작!")
introduce()
print("🎤 자기소개 끝!")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: print("안녕!") 를 다른 내용으로 바꿔보세요',
            '💡 힌트 2: print()를 여러 줄 추가해도 괜찮아요',
            '💡 힌트 3: 함수 안에 들여쓰기(스페이스 4칸)를 잊지 마세요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-py-create',
          title: '🐍 나만의 함수 만들기 (CREATE)',
          description: '직접 함수를 정의하고 호출해봐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 15,
          concept: '함수 작성',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            'def 키워드로 함수를 정의할 수 있다',
            '함수를 호출하여 사용할 수 있다'
          ],
          starterCode: `# 🎯 미션: "축하합니다!"를 출력하는 함수를 만드세요
#
# 1. celebrate라는 이름의 함수를 만드세요
# 2. 함수 안에서 "🎉 축하합니다! 🎉"를 출력하세요
# 3. 함수를 3번 호출하세요

# 여기에 함수를 정의하세요 (def celebrate(): ...)


# 여기서 함수를 3번 호출하세요

`,
          solution: `def celebrate():
    print("🎉 축하합니다! 🎉")

celebrate()
celebrate()
celebrate()`,
          expectedOutput: `🎉 축하합니다! 🎉
🎉 축하합니다! 🎉
🎉 축하합니다! 🎉`,
          hints: [
            '💡 힌트 1: def celebrate(): 로 함수 정의를 시작하세요',
            '💡 힌트 2: 함수 안의 코드는 스페이스 4칸 들여쓰기!',
            '💡 힌트 3: celebrate() 를 3번 적어서 3번 호출하세요'
          ],
          testCases: [
            { input: '', expectedOutput: '🎉 축하합니다! 🎉\n🎉 축하합니다! 🎉\n🎉 축하합니다! 🎉', description: '함수 3번 호출' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-project',
          title: '🎯 주간 프로젝트: 로봇 명령 함수',
          description: '로봇에게 명령을 내리는 함수들을 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 150,
          estimatedMinutes: 20,
          concept: '함수로 문제 분해',
          phase: 'create',
          isWeeklyProject: true,
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '복잡한 동작을 함수로 분해할 수 있다',
            '여러 함수를 조합하여 프로그램을 만들 수 있다'
          ],
          realWorldExample: '게임 캐릭터도 걷기(), 점프(), 공격() 같은 함수들로 만들어져요!',
          starterCode: `# 🤖 로봇 명령 프로그램
# 미션: 로봇에게 명령을 내리는 함수들을 완성하세요!
#
# 만들어야 할 함수:
# 1. walk() - "🚶 걷는 중..." 출력
# 2. jump() - "🦘 점프!" 출력
# 3. dance() - "💃 춤추는 중~" 출력

# 여기에 함수들을 만드세요
def walk():
    # walk 함수를 완성하세요
    pass

def jump():
    # jump 함수를 완성하세요
    pass

def dance():
    # dance 함수를 완성하세요
    pass

# 로봇 시퀀스 실행
print("🤖 로봇 시작!")
walk()
walk()
jump()
dance()
print("🤖 로봇 종료!")`,
          solution: `def walk():
    print("🚶 걷는 중...")

def jump():
    print("🦘 점프!")

def dance():
    print("💃 춤추는 중~")

print("🤖 로봇 시작!")
walk()
walk()
jump()
dance()
print("🤖 로봇 종료!")`,
          expectedOutput: `🤖 로봇 시작!
🚶 걷는 중...
🚶 걷는 중...
🦘 점프!
💃 춤추는 중~
🤖 로봇 종료!`,
          hints: [
            '💡 힌트 1: pass를 print("...")로 바꾸세요',
            '💡 힌트 2: def walk(): 다음 줄에 print()를 작성하세요',
            '💡 힌트 3: 각 함수는 한 줄의 print문만 있으면 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-6-10',
          title: '6주차 확인 퀴즈',
          description: '문제 분해에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          cstaStandard: '1A-AP-12',
          learningObjectives: [
            '문제 분해의 개념을 확인한다',
            '분해의 장점과 방법을 이해했는지 확인한다'
          ],
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-1-6',
        title: '문제 분해 마스터 퀴즈',
        questions: [
          {
            id: 'q-1-6-1',
            question: '문제 분해(Decomposition)란 무엇인가요?',
            options: [
              '문제를 삭제하는 것',
              '큰 문제를 작은 문제로 나누는 것',
              '문제를 외우는 것',
              '문제를 다른 사람에게 넘기는 것'
            ],
            correctAnswer: 1,
            explanation: '문제 분해는 복잡하고 큰 문제를 관리 가능한 작은 문제들로 나누는 것이에요.'
          },
          {
            id: 'q-1-6-2',
            question: '문제를 분해하면 좋은 점은?',
            options: [
              '더 어려워진다',
              '이해하기 쉽고 해결하기 쉬워진다',
              '시간이 더 오래 걸린다',
              '혼란스러워진다'
            ],
            correctAnswer: 1,
            explanation: '작은 문제들은 이해하기 쉽고, 하나씩 해결할 수 있어서 전체 문제를 더 쉽게 풀 수 있어요!'
          },
          {
            id: 'q-1-6-3',
            question: '"케이크 만들기"를 분해하면?',
            options: [
              '케이크, 만들기',
              '재료 준비 → 반죽 → 굽기 → 장식',
              '맛있는, 케이크',
              '먹기, 치우기'
            ],
            correctAnswer: 1,
            explanation: '케이크 만들기는 재료 준비, 반죽하기, 굽기, 장식하기 등의 단계로 분해할 수 있어요!'
          },
          {
            id: 'q-1-6-4',
            question: '분해할 때 주의할 점은?',
            options: [
              '최대한 작게 나눈다',
              '순서를 무시한다',
              '각 부분이 독립적으로 해결 가능해야 한다',
              '나누지 않고 한번에 해결한다'
            ],
            correctAnswer: 2,
            explanation: '분해된 각 부분은 독립적으로 해결할 수 있어야 하고, 합치면 전체 문제가 해결되어야 해요!'
          }
        ]
      },
    },

    // ============================================
    // Week 7: 추상화
    // CSTA 1A-DA-05: 추상화
    // ============================================
    {
      id: 'week-7',
      number: 7,
      title: '핵심만 골라내기',
      description: '중요한 정보만 추출해요',
      missions: [
        {
          id: '1-7-1',
          title: '추상화란?',
          description: '복잡한 것에서 중요한 것만 골라내는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '추상화 소개',
          conceptExplanation: '지도를 보세요. 실제 도시의 모든 것이 그려져 있나요? 아니죠! 중요한 도로와 건물만 있어요. 이것이 추상화예요!',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '추상화(Abstraction)의 개념을 이해한다',
            '복잡한 정보에서 핵심을 추출하는 방법을 안다',
            '일상생활에서 추상화 사례를 찾을 수 있다'
          ],
          realWorldExample: '지하철 노선도는 실제 거리와 방향을 무시하고 역의 순서와 환승 정보만 보여줘요. 이것이 추상화!',
          conceptCards: [
            {
              title: '추상화란?',
              description: '복잡한 것에서 중요한 정보만 남기고 나머지는 숨기는 것',
              icon: '🎯',
              example: '사람 → 막대 그림 (팔, 다리, 머리만 표현)'
            },
            {
              title: '왜 추상화할까?',
              description: '불필요한 정보를 제거하면 핵심에 집중할 수 있어요!',
              icon: '✨',
              example: '지하철 노선도에서 건물, 공원은 안 보여줘요'
            }
          ],
          hints: [
            '💡 힌트 1: 핵심만 남기고 불필요한 것을 제거해요',
            '💡 힌트 2: 지도, 아이콘, 이모지 모두 추상화의 예시예요',
            '💡 힌트 3: 목적에 맞는 정보만 남기는 것이 중요해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-2',
          title: '동물 분류하기',
          description: '여러 동물의 공통점을 찾아 분류해요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '분류와 추상화',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '공통 특성을 기준으로 분류할 수 있다',
            '같은 대상도 다른 기준으로 다르게 분류할 수 있음을 안다'
          ],
          realWorldExample: '도서관에서 책을 분류하는 것처럼, 동물도 특성에 따라 그룹으로 나눌 수 있어요!',
          hints: [
            '💡 힌트 1: 날 수 있는 동물 vs 날 수 없는 동물로 나눠보세요',
            '💡 힌트 2: 포유류 vs 조류 vs 어류 vs 파충류로도 나눌 수 있어요',
            '💡 힌트 3: 같은 동물도 기준에 따라 다른 그룹에 들어갈 수 있어요'
          ],
          commonMistakes: [
            '펭귄은 새지만 날 수 없어요!',
            '고래는 바다에 살지만 포유류예요!'
          ],
          blocks: ['참새', '독수리', '펭귄', '고래', '상어', '개', '고양이', '뱀'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-3',
          title: '캐릭터 단순화',
          description: '복잡한 캐릭터를 간단한 도형으로 표현해요',
          type: 'visual-puzzle',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 12,
          concept: '시각적 추상화',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '복잡한 형태를 기본 도형으로 단순화할 수 있다',
            '핵심 특징만으로 대상을 표현할 수 있다'
          ],
          realWorldExample: '화장실 표지판의 사람 모양처럼, 간단한 도형만으로도 "사람"을 알아볼 수 있어요!',
          hints: [
            '💡 힌트 1: 머리 = 원, 몸 = 사각형이나 삼각형으로 표현해보세요',
            '💡 힌트 2: 팔과 다리는 간단한 선으로 표현할 수 있어요',
            '💡 힌트 3: 핵심 특징만 남기고 세부 사항은 생략하세요'
          ],
          commonMistakes: [
            '너무 많은 세부 사항을 포함하려는 경우',
            '핵심 특징(예: 머리)을 빼먹는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-4',
          title: '이모지로 표현하기',
          description: '복잡한 감정이나 상황을 이모지 하나로 표현해요',
          type: 'pattern-recognition',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '상징적 추상화',
          conceptExplanation: '😊 하나로 "기분 좋음"을 표현할 수 있어요. 이것도 추상화예요!',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '복잡한 감정이나 상황을 기호로 표현할 수 있다',
            '상징의 의미를 이해하고 활용할 수 있다'
          ],
          realWorldExample: '카카오톡에서 이모티콘 하나로 긴 말 대신 감정을 표현하는 것과 같아요!',
          hints: [
            '💡 힌트 1: 😊는 기쁨, 😢는 슬픔을 나타내요',
            '💡 힌트 2: 상황을 가장 잘 나타내는 이모지 하나를 골라요',
            '💡 힌트 3: 여러 의미가 있다면 가장 핵심적인 것을 선택해요'
          ],
          checkQuestions: [
            {
              question: '"시험에서 100점 받았어요!"를 가장 잘 표현하는 이모지는?',
              options: ['😊', '🎉', '😢', '😴'],
              correctAnswer: 1,
              feedback: {
                correct: '맞아요! 🎉는 축하와 기쁨을 잘 표현해요!',
                incorrect: '100점은 축하할 일이에요! 어떤 이모지가 어울릴까요?'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-5',
          title: '지도 만들기',
          description: '학교에서 집까지의 간단한 지도를 만들어요',
          type: 'writing',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 15,
          concept: '공간 추상화',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '실제 공간을 추상화된 지도로 표현할 수 있다',
            '목적에 따라 필요한 정보만 선택할 수 있다'
          ],
          realWorldExample: '네이버 지도에서 "학교에서 집까지"를 검색하면 필요한 길만 보여주는 것처럼!',
          requirements: ['주요 길만 표시', '중요한 건물만 표시', '방향 표시 포함'],
          hints: [
            '💡 힌트 1: 모든 건물이 아닌 길찾기에 필요한 곳만 그리세요',
            '💡 힌트 2: 횡단보도, 편의점, 공원 등 랜드마크를 활용해요',
            '💡 힌트 3: 북쪽 화살표나 방향 표시를 넣으세요'
          ],
          commonMistakes: [
            '너무 많은 건물을 포함하는 경우',
            '길의 방향을 표시하지 않는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-6',
          title: '게임 아이템 설계',
          description: '게임 아이템의 핵심 속성만 정의해요',
          type: 'writing',
          difficulty: 'intermediate',
          exp: 70,
          estimatedMinutes: 15,
          concept: '데이터 추상화',
          conceptExplanation: '칼 아이템: 공격력, 무게, 내구도... 핵심 속성만 정의하면 돼요!',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '게임 데이터를 속성으로 추상화할 수 있다',
            '핵심 속성을 식별하고 값을 정의할 수 있다'
          ],
          realWorldExample: '포켓몬 게임에서 포켓몬은 이름, 타입, HP, 공격력, 기술 등의 속성으로 정의돼요!',
          requirements: ['아이템 이름', '핵심 속성 3-5개', '각 속성의 값'],
          hints: [
            '💡 힌트 1: 검 아이템이라면: 이름, 공격력, 무게, 가격, 내구도',
            '💡 힌트 2: 포션이라면: 이름, 회복량, 개수, 사용 시간',
            '💡 힌트 3: 불필요한 속성(예: 색상, 소리)은 생략해요'
          ],
          commonMistakes: [
            '게임 플레이에 영향 없는 속성을 포함하는 경우',
            '핵심 속성을 빠뜨리는 경우 (무기인데 공격력이 없다면?)'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-7',
          title: '인물 카드 만들기',
          description: '사람의 핵심 정보만 담은 카드를 만들어요',
          type: 'writing',
          difficulty: 'beginner',
          exp: 60,
          estimatedMinutes: 12,
          concept: '정보 추상화',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '사람의 정보를 핵심 속성으로 추상화할 수 있다',
            '목적에 맞는 정보만 선택할 수 있다'
          ],
          realWorldExample: '학생증에는 이름, 학교, 학년, 사진만 있어요. 키, 취미, 좋아하는 음식은 없죠!',
          requirements: ['이름, 나이, 직업, 특기 포함', '사진이나 아바타', '핵심 정보만 포함'],
          hints: [
            '💡 힌트 1: 신분증처럼 중요한 정보만 넣으세요',
            '💡 힌트 2: 그 사람을 구별할 수 있는 정보가 핵심이에요',
            '💡 힌트 3: 좋아하는 색깔 같은 건 굳이 안 넣어도 돼요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-8',
          title: '교통 표지판 이해',
          description: '교통 표지판이 어떻게 추상화를 사용하는지 분석해요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '기호 추상화',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '기호가 복잡한 의미를 간단하게 전달함을 이해한다',
            '표지판의 색상, 모양이 의미를 갖는다는 것을 안다'
          ],
          realWorldExample: '🛑 빨간 팔각형만 봐도 "정지"를 알 수 있어요. 글자가 없어도!',
          conceptCards: [
            {
              title: '색상의 의미',
              description: '빨강 = 금지/정지, 노랑 = 주의, 파랑 = 안내',
              icon: '🎨',
              example: '빨간 원 = 금지, 파란 원 = 지시'
            },
            {
              title: '모양의 의미',
              description: '삼각형 = 주의, 원 = 금지/지시, 팔각형 = 정지',
              icon: '📐',
              example: '역삼각형 = 양보, 정사각형 = 안내'
            }
          ],
          hints: [
            '💡 힌트 1: 표지판은 운전자가 빠르게 이해할 수 있도록 추상화되어 있어요',
            '💡 힌트 2: 색상과 모양만으로도 의미를 전달해요',
            '💡 힌트 3: 전 세계에서 비슷한 표지판을 사용해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-9',
          title: '함수 만들기 맛보기',
          description: '자주 쓰는 동작을 하나로 묶어요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 90,
          estimatedMinutes: 18,
          concept: '절차 추상화',
          conceptExplanation: '"정사각형 그리기"를 매번 4번 반복 대신 "정사각형()"이라고 부르면 편해요!',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '반복되는 동작을 함수로 묶을 수 있다',
            '함수 호출의 개념을 이해한다',
            '코드 재사용의 장점을 안다'
          ],
          realWorldExample: '"아침 루틴"이라고 하면 기상→세수→식사가 다 포함돼요. 매번 설명 안 해도 돼요!',
          hints: [
            '💡 힌트 1: 정사각형 = 앞으로 + 오른쪽회전을 4번 반복',
            '💡 힌트 2: "정사각형()" 블록 하나로 정사각형을 그릴 수 있어요',
            '💡 힌트 3: 자주 쓰는 동작에 이름을 붙이면 편해요!'
          ],
          commonMistakes: [
            '함수 안의 동작을 이해하지 않고 사용하는 경우',
            '함수를 정의만 하고 호출하지 않는 경우'
          ],
          solutionSequence: ['정사각형()', '앞으로', '앞으로', '삼각형()'],
          blocks: ['앞으로', '오른쪽회전', '반복', '정사각형()', '삼각형()'],
          gridSize: { rows: 6, cols: 6 },
          startPosition: { row: 5, col: 0 },
          goalPosition: { row: 5, col: 0 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          drawPath: true,
          maxCommands: 10,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ========== Week 7 Python 코딩 미션 (추상화 - 리스트) ==========
        {
          id: '1-7-py-use',
          title: '🐍 리스트 체험하기 (USE)',
          description: '여러 데이터를 하나의 리스트로 묶어봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 10,
          concept: '리스트 기초',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '리스트가 여러 데이터를 모아놓는 방법임을 이해한다',
            '리스트 요소에 접근하는 방법을 익힌다'
          ],
          conceptExplanation: '리스트는 여러 데이터를 하나로 묶는 상자예요! 추상화의 핵심 - 복잡한 것을 단순하게!',
          starterCode: `# 🎒 리스트 = 여러 데이터를 담는 가방!
# 과일 목록을 하나의 리스트로 표현해요

fruits = ["사과", "바나나", "오렌지", "포도", "딸기"]

print("🍎 과일 목록:")
print(fruits)

print("\\n첫 번째 과일:", fruits[0])
print("세 번째 과일:", fruits[2])
print("마지막 과일:", fruits[-1])

print("\\n총 과일 개수:", len(fruits))`,
          solution: `fruits = ["사과", "바나나", "오렌지", "포도", "딸기"]

print("🍎 과일 목록:")
print(fruits)

print("\\n첫 번째 과일:", fruits[0])
print("세 번째 과일:", fruits[2])
print("마지막 과일:", fruits[-1])

print("\\n총 과일 개수:", len(fruits))`,
          expectedOutput: `🍎 과일 목록:
['사과', '바나나', '오렌지', '포도', '딸기']

첫 번째 과일: 사과
세 번째 과일: 오렌지
마지막 과일: 딸기

총 과일 개수: 5`,
          hints: [
            '💡 힌트 1: ▶ 실행 버튼을 눌러 결과를 확인하세요',
            '💡 힌트 2: [0]은 첫 번째, [1]은 두 번째 요소예요 (0부터 시작!)',
            '💡 힌트 3: [-1]은 마지막 요소를 의미해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-py-mod',
          title: '🐍 리스트 수정하기 (MODIFY)',
          description: '리스트에 항목을 추가하고 수정해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 12,
          concept: '리스트 조작',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '리스트에 요소를 추가하는 방법을 안다',
            '리스트 요소를 변경하는 방법을 안다'
          ],
          starterCode: `# 🎯 미션: 친구 목록에 2명을 더 추가하세요!
# append()를 사용해서 친구를 추가할 수 있어요

friends = ["민수", "지영", "현우"]

print("원래 친구 목록:", friends)

# 여기에 친구 2명을 추가하세요!
# 힌트: friends.append("이름")

friends.append("수진")  # 첫 번째 친구 추가
# 두 번째 친구도 추가해보세요!


print("새 친구 목록:", friends)
print("친구 수:", len(friends), "명")`,
          solution: `friends = ["민수", "지영", "현우"]

print("원래 친구 목록:", friends)

friends.append("수진")
friends.append("태영")

print("새 친구 목록:", friends)
print("친구 수:", len(friends), "명")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: friends.append("이름")으로 친구를 추가해요',
            '💡 힌트 2: 두 번째 append도 같은 방식으로!',
            '💡 힌트 3: 이름은 아무거나 괜찮아요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-py-create',
          title: '🐍 나만의 데이터 모음 (CREATE)',
          description: '좋아하는 것들의 리스트를 만들고 출력해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 15,
          concept: '리스트 생성',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '직접 리스트를 생성할 수 있다',
            'for문으로 리스트를 순회할 수 있다'
          ],
          starterCode: `# 🎯 미션: 좋아하는 게임 5개의 리스트를 만들고,
# for문으로 하나씩 출력하세요!

# 1. 좋아하는 게임 5개의 리스트를 만드세요
games = []  # ← 여기에 게임 이름들을 넣으세요!

# 2. for문으로 하나씩 출력하세요
print("🎮 내가 좋아하는 게임:")
# for game in games:
#     print("-", game)

`,
          solution: `games = ["마인크래프트", "로블록스", "포트나이트", "젤다", "마리오"]

print("🎮 내가 좋아하는 게임:")
for game in games:
    print("-", game)`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: games = ["게임1", "게임2", ...] 형식으로 리스트를 만드세요',
            '💡 힌트 2: for game in games: 로 반복해요',
            '💡 힌트 3: print("-", game)으로 각 게임을 출력해요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-project',
          title: '🎯 주간 프로젝트: 간단한 투표 프로그램',
          description: '리스트로 투표 결과를 저장하고 집계하는 프로그램',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 150,
          estimatedMinutes: 20,
          concept: '리스트 활용',
          phase: 'create',
          isWeeklyProject: true,
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '리스트로 데이터를 관리할 수 있다',
            'count() 메서드를 사용할 수 있다'
          ],
          realWorldExample: '학급 회장 선거나 급식 메뉴 투표를 프로그램으로 집계할 수 있어요!',
          starterCode: `# 🗳️ 반장 선거 투표 결과 집계 프로그램
# 미션: 투표 결과를 집계해서 출력하세요!

# 투표 결과 (학생들이 투표한 이름들)
votes = ["민수", "지영", "민수", "현우", "지영",
         "민수", "민수", "현우", "지영", "민수"]

print("🗳️ 투표 결과 집계")
print("=" * 30)

# 각 후보의 득표수를 구하세요!
# 힌트: votes.count("이름") 으로 특정 이름이 몇 번 나오는지 셀 수 있어요

# 민수의 득표수
minsu_votes = votes.count("민수")
print(f"민수: {minsu_votes}표")

# 지영의 득표수 (여기를 완성하세요!)
# jiyoung_votes = ...
# print(...)

# 현우의 득표수 (여기를 완성하세요!)
# hyunwoo_votes = ...
# print(...)

print("=" * 30)
print(f"총 투표수: {len(votes)}표")`,
          solution: `votes = ["민수", "지영", "민수", "현우", "지영",
         "민수", "민수", "현우", "지영", "민수"]

print("🗳️ 투표 결과 집계")
print("=" * 30)

minsu_votes = votes.count("민수")
print(f"민수: {minsu_votes}표")

jiyoung_votes = votes.count("지영")
print(f"지영: {jiyoung_votes}표")

hyunwoo_votes = votes.count("현우")
print(f"현우: {hyunwoo_votes}표")

print("=" * 30)
print(f"총 투표수: {len(votes)}표")`,
          expectedOutput: `🗳️ 투표 결과 집계
==============================
민수: 5표
지영: 3표
현우: 2표
==============================
총 투표수: 10표`,
          hints: [
            '💡 힌트 1: votes.count("지영")으로 지영의 득표수를 구해요',
            '💡 힌트 2: f-string으로 예쁘게 출력: print(f"지영: {jiyoung_votes}표")',
            '💡 힌트 3: 현우도 같은 방식으로 해보세요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-7-10',
          title: '7주차 확인 퀴즈',
          description: '추상화에 대해 배운 것을 확인해요',
          type: 'quiz',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 8,
          concept: '개념 확인',
          cstaStandard: '1A-DA-05',
          learningObjectives: [
            '추상화의 개념을 확인한다',
            '다양한 추상화 사례를 이해했는지 확인한다'
          ],
          hints: [],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-1-7',
        title: '추상화 마스터 퀴즈',
        questions: [
          {
            id: 'q-1-7-1',
            question: '추상화(Abstraction)란 무엇인가요?',
            options: [
              '모든 정보를 다 포함하는 것',
              '핵심 정보만 남기고 불필요한 것을 숨기는 것',
              '정보를 삭제하는 것',
              '정보를 복사하는 것'
            ],
            correctAnswer: 1,
            explanation: '추상화는 복잡한 것에서 핵심만 남기고 불필요한 세부사항을 숨기는 것이에요!'
          },
          {
            id: 'q-1-7-2',
            question: '지하철 노선도는 왜 실제 지도와 다를까요?',
            options: [
              '만들기 어려워서',
              '역의 순서와 환승 정보만 필요해서',
              '색깔이 예뻐서',
              '잘못 만들어서'
            ],
            correctAnswer: 1,
            explanation: '지하철 노선도는 실제 거리나 방향보다 역의 순서와 환승이 중요하기 때문에 추상화되어 있어요!'
          },
          {
            id: 'q-1-7-3',
            question: '다음 중 추상화의 예시가 아닌 것은?',
            options: [
              '이모지 😊로 기분 표현하기',
              '지도에서 중요한 건물만 표시하기',
              '사진의 모든 픽셀을 다 보여주기',
              '신호등의 색깔로 신호 전달하기'
            ],
            correctAnswer: 2,
            explanation: '모든 픽셀을 다 보여주는 것은 추상화가 아니에요. 추상화는 핵심만 남기는 것!'
          },
          {
            id: 'q-1-7-4',
            question: '함수를 사용하면 좋은 점은?',
            options: [
              '코드가 더 길어진다',
              '같은 동작을 반복해서 쓸 필요가 없다',
              '실행 속도가 느려진다',
              '오류가 더 많이 생긴다'
            ],
            correctAnswer: 1,
            explanation: '함수를 사용하면 같은 동작을 반복해서 쓸 필요 없이 함수 이름만 호출하면 돼요!'
          }
        ]
      },
    },

    // ============================================
    // Week 8: 디버깅과 종합
    // CSTA 1A-AP-14: 디버깅
    // ============================================
    {
      id: 'week-8',
      number: 8,
      title: '오류 찾기와 종합',
      description: '버그를 찾고 고치는 방법을 배워요',
      missions: [
        {
          id: '1-8-1',
          title: '버그란?',
          description: '프로그램 오류의 개념을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          exp: 30,
          estimatedMinutes: 8,
          concept: '디버깅 소개',
          conceptExplanation: '버그(bug)는 원래 "벌레"라는 뜻이에요. 옛날에 컴퓨터에 진짜 벌레가 들어가서 고장난 적이 있대요! 지금은 프로그램 오류를 버그라고 불러요.',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '버그(오류)의 개념을 이해한다',
            '디버깅(오류 수정)의 의미를 안다',
            '버그는 프로그래밍에서 자연스러운 일임을 이해한다'
          ],
          realWorldExample: '1947년 하버드 대학교 컴퓨터에 진짜 나방이 들어가서 고장났어요. 그래서 "버그"라고 부르게 됐죠!',
          conceptCards: [
            {
              title: '버그(Bug)란?',
              description: '프로그램이 예상과 다르게 동작하는 오류',
              icon: '🐛',
              example: '3+3=7이라고 나오면 버그!'
            },
            {
              title: '디버깅(Debugging)이란?',
              description: '버그를 찾아서 고치는 과정',
              icon: '🔍',
              example: '왜 7이 나왔는지 찾고 수정하기'
            }
          ],
          hints: [
            '💡 힌트 1: 버그는 프로그래머라면 누구나 만들어요',
            '💡 힌트 2: 버그를 찾아서 고치는 것을 디버깅이라고 해요',
            '💡 힌트 3: 디버깅은 프로그래밍의 중요한 부분이에요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-2',
          title: '순서 오류 찾기',
          description: '잘못된 순서를 찾아 고쳐요',
          type: 'drag-drop',
          difficulty: 'beginner',
          exp: 50,
          estimatedMinutes: 10,
          concept: '순서 오류',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '순서 오류(Sequence Error)를 식별할 수 있다',
            '올바른 순서로 재배열할 수 있다'
          ],
          realWorldExample: '샤워하기 전에 옷을 벗어야 해요. 순서가 바뀌면 문제가 생겨요!',
          hints: [
            '💡 힌트 1: 양치 전에 치약을 짜야 해요',
            '💡 힌트 2: 가장 먼저 해야 할 일은?',
            '💡 힌트 3: 마지막에는 정리해야겠죠?'
          ],
          commonMistakes: [
            '준비 단계를 건너뛰는 경우',
            '마무리 단계를 빠뜨리는 경우'
          ],
          blocks: ['이 닦기', '치약 짜기', '칫솔 꺼내기', '입 헹구기', '칫솔 정리하기'],
          correctBlocks: ['칫솔 꺼내기', '치약 짜기', '이 닦기', '입 헹구기', '칫솔 정리하기'],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-3',
          title: '로봇 경로 오류 찾기',
          description: '로봇이 목표에 도착하지 못하는 이유를 찾아요',
          type: 'visual-programming',
          difficulty: 'beginner',
          exp: 70,
          estimatedMinutes: 15,
          concept: '경로 디버깅',
          conceptExplanation: '로봇의 경로를 따라가면서 어디서 잘못됐는지 찾아보세요!',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '주어진 코드를 한 단계씩 실행해볼 수 있다',
            '경로 오류를 식별하고 수정할 수 있다'
          ],
          realWorldExample: '네비게이션이 잘못된 길을 안내하면, 어디서부터 잘못됐는지 확인하고 다시 길을 찾아야 해요!',
          hints: [
            '💡 힌트 1: 로봇의 이동 경로를 한 단계씩 따라가보세요',
            '💡 힌트 2: 손가락으로 그리드를 따라가면서 확인해보세요',
            '💡 힌트 3: 어디서 잘못됐는지 찾으면 그 부분만 고치면 돼요'
          ],
          commonMistakes: [
            '회전 방향을 확인하지 않는 경우',
            '장애물을 피하는 경로를 생각하지 않는 경우'
          ],
          solutionSequence: ['앞으로', '앞으로', '앞으로', '오른쪽회전', '앞으로', '왼쪽회전', '앞으로', '앞으로', '오른쪽회전', '앞으로', '앞으로', '앞으로'],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전'],
          gridSize: { rows: 4, cols: 4 },
          startPosition: { row: 3, col: 0 },
          goalPosition: { row: 0, col: 3 },
          obstacles: [{ row: 2, col: 1 }],
          checkpoints: [],
          collectibles: [],
          maxCommands: 15,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-4',
          title: '반복 오류 찾기',
          description: '반복 횟수가 잘못된 것을 찾아 고쳐요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '반복 디버깅',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '반복문의 횟수 오류를 식별할 수 있다',
            '올바른 반복 횟수를 계산할 수 있다'
          ],
          realWorldExample: '줄넘기 100개를 해야 하는데 99개에서 멈추면 목표 달성 실패! 횟수를 정확히 세야 해요.',
          hints: [
            '💡 힌트 1: 반복 횟수를 세어보세요',
            '💡 힌트 2: 시작점에서 목표까지 몇 칸인가요?',
            '💡 힌트 3: 반복(4)인데 3번만 필요하다면?'
          ],
          commonMistakes: [
            '반복 횟수를 1 적게 또는 1 많이 설정하는 경우 (Off-by-one error)',
            '반복 안에 들어가야 할 명령을 빼먹는 경우'
          ],
          solutionSequence: ['반복(4) { 앞으로 }', '오른쪽회전', '반복(4) { 앞으로 }'],
          blocks: ['앞으로', '오른쪽회전', '반복'],
          gridSize: { rows: 5, cols: 5 },
          startPosition: { row: 4, col: 0 },
          goalPosition: { row: 0, col: 4 },
          obstacles: [],
          checkpoints: [],
          collectibles: [],
          maxCommands: 10,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-5',
          title: '조건 오류 찾기',
          description: '잘못된 조건을 찾아 고쳐요',
          type: 'pattern-recognition',
          difficulty: 'intermediate',
          exp: 80,
          estimatedMinutes: 15,
          concept: '조건 디버깅',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '조건문의 논리 오류를 식별할 수 있다',
            '조건을 올바르게 수정할 수 있다'
          ],
          realWorldExample: '"온도가 30도 이상이면 에어컨 끄기"라고 했는데 30도 이상일 때 켜져야 하면? 조건이 거꾸로!',
          hints: [
            '💡 힌트 1: 조건이 거꾸로 되어있지는 않은가요?',
            '💡 힌트 2: "이상"과 "이하", "크다"와 "작다"를 확인해보세요',
            '💡 힌트 3: 조건이 참일 때와 거짓일 때 어떤 일이 일어나는지 확인해요'
          ],
          commonMistakes: [
            '조건을 반대로 쓰는 경우 (> 대신 <)',
            '경계값을 잘못 처리하는 경우 (>=와 >의 차이)'
          ],
          checkQuestions: [
            {
              question: '"점수가 60 이상이면 합격"인데, 점수가 60일 때 불합격이 나왔어요. 뭐가 잘못됐을까요?',
              options: ['조건이 > 60으로 되어있다', '조건이 < 60으로 되어있다', '문제없다'],
              correctAnswer: 0,
              feedback: {
                correct: '맞아요! > 60은 60보다 클 때만 참이에요. >= 60이어야 60도 포함돼요!',
                incorrect: '>= 60과 > 60의 차이를 생각해보세요. 60은 60보다 크지 않아요!'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-6',
          title: '디버깅 전략',
          description: '효과적으로 버그를 찾는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          exp: 60,
          estimatedMinutes: 12,
          concept: '디버깅 전략',
          conceptExplanation: '1. 문제가 무엇인지 이해하기 2. 한 단계씩 따라가보기 3. 의심되는 부분 확인하기 4. 수정하고 테스트하기',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '체계적인 디버깅 전략을 이해한다',
            '디버깅 4단계를 적용할 수 있다'
          ],
          realWorldExample: '의사가 환자를 진단할 때처럼, 증상 파악 → 원인 추측 → 검사 → 치료 순서로 진행해요!',
          conceptCards: [
            {
              title: '1단계: 문제 이해',
              description: '무엇이 잘못됐는지, 예상 결과는 무엇인지 파악',
              icon: '🤔',
              example: '"로봇이 목표에 안 도착해요"'
            },
            {
              title: '2단계: 추적하기',
              description: '코드를 한 줄씩 따라가며 동작 확인',
              icon: '🔍',
              example: '손으로 그리드를 따라가보기'
            },
            {
              title: '3단계: 원인 찾기',
              description: '의심되는 부분을 좁혀나가기',
              icon: '🎯',
              example: '세 번째 회전에서 방향이 잘못됐네!'
            },
            {
              title: '4단계: 수정 및 테스트',
              description: '고치고 다시 실행해서 확인',
              icon: '✅',
              example: '왼쪽회전을 오른쪽회전으로 바꾸고 재실행'
            }
          ],
          hints: [
            '💡 힌트 1: 무작정 고치지 말고 먼저 문제를 이해하세요',
            '💡 힌트 2: 한 번에 하나씩만 수정하세요',
            '💡 힌트 3: 수정 후에는 반드시 테스트하세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-7',
          title: '종합 미션 I',
          description: '지금까지 배운 모든 것을 활용해요',
          type: 'visual-programming',
          difficulty: 'intermediate',
          exp: 120,
          estimatedMinutes: 25,
          concept: '종합 실습',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '순차, 반복, 조건을 복합적으로 사용할 수 있다',
            '복잡한 문제를 단계별로 해결할 수 있다'
          ],
          realWorldExample: '실제 코딩에서는 여러 개념을 동시에 사용해요. 이제 배운 것을 모두 합쳐볼 시간!',
          hints: [
            '💡 힌트 1: 먼저 전체 경로를 계획해보세요',
            '💡 힌트 2: 반복되는 패턴이 있으면 반복문으로 줄여요',
            '💡 힌트 3: 장애물이 있으면 조건문으로 처리해요'
          ],
          commonMistakes: [
            '모든 것을 순차로만 해결하려는 경우',
            '반복 가능한 부분을 놓치는 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복', '만약 앞이 벽이면'],
          gridSize: { rows: 6, cols: 6 },
          startPosition: { row: 5, col: 0 },
          goalPosition: { row: 0, col: 5 },
          obstacles: [
            { row: 4, col: 1 }, { row: 3, col: 2 },
            { row: 2, col: 3 }, { row: 1, col: 4 }
          ],
          checkpoints: [{ row: 3, col: 4 }],
          collectibles: [{ row: 4, col: 5 }, { row: 2, col: 1 }],
          useConditional: true,
          maxCommands: 25,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-8',
          title: '종합 미션 II',
          description: '모든 보석을 수집하고 체크포인트를 방문해요',
          type: 'visual-programming',
          difficulty: 'advanced',
          exp: 150,
          estimatedMinutes: 30,
          concept: '종합 실습',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '복잡한 경로 계획을 수립할 수 있다',
            '효율적인 코드를 작성할 수 있다'
          ],
          realWorldExample: '택배 기사님이 여러 집을 방문할 때 가장 효율적인 경로를 계획하는 것과 같아요!',
          hints: [
            '💡 힌트 1: 경로를 미리 계획하세요 - 종이에 그려보면 좋아요!',
            '💡 힌트 2: 모든 보석과 체크포인트를 방문하는 순서를 정하세요',
            '💡 힌트 3: 반복으로 코드를 줄여보세요'
          ],
          commonMistakes: [
            '보석이나 체크포인트를 빠뜨리는 경우',
            '경로가 비효율적인 경우'
          ],
          blocks: ['앞으로', '오른쪽회전', '왼쪽회전', '반복', '만약 앞이 벽이면'],
          gridSize: { rows: 7, cols: 7 },
          startPosition: { row: 6, col: 0 },
          goalPosition: { row: 0, col: 6 },
          obstacles: [
            { row: 5, col: 1 }, { row: 4, col: 1 }, { row: 3, col: 1 },
            { row: 3, col: 3 }, { row: 3, col: 4 },
            { row: 1, col: 3 }, { row: 1, col: 4 }, { row: 1, col: 5 }
          ],
          checkpoints: [{ row: 4, col: 4 }, { row: 2, col: 2 }],
          collectibles: [{ row: 6, col: 3 }, { row: 4, col: 6 }, { row: 2, col: 0 }, { row: 0, col: 4 }],
          mustVisitAll: true,
          useConditional: true,
          maxCommands: 40,
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-9',
          title: '나만의 알고리즘 프로젝트',
          description: '자유 주제로 알고리즘을 설계하고 문서화해요',
          type: 'writing',
          difficulty: 'intermediate',
          exp: 150,
          estimatedMinutes: 30,
          concept: '종합 프로젝트',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '실생활 문제를 알고리즘으로 표현할 수 있다',
            '배운 개념들을 종합적으로 활용할 수 있다'
          ],
          realWorldExample: '프로그래머들은 항상 새로운 문제를 해결하기 위한 알고리즘을 설계해요. 이제 여러분 차례!',
          requirements: ['문제 정의', '알고리즘 단계 (최소 10단계)', '패턴 또는 반복 사용', '조건문 포함', '예상 결과'],
          hints: [
            '💡 힌트 1: 게임 규칙, 요리 레시피, 일상 루틴 등 자유롭게 선택하세요',
            '💡 힌트 2: 순차, 반복, 조건, 분해, 추상화 개념을 활용하세요',
            '💡 힌트 3: 다른 사람이 따라할 수 있게 명확하게 작성하세요'
          ],
          commonMistakes: [
            '단계가 너무 모호한 경우',
            '조건문이나 반복을 사용하지 않는 경우'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        // ========== Week 8 Python 코딩 미션 (디버깅) ==========
        {
          id: '1-8-py-use',
          title: '🐍 버그 찾기 체험 (USE)',
          description: '버그가 있는 코드를 실행해서 문제를 파악해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 80,
          estimatedMinutes: 10,
          concept: '디버깅 기초',
          phase: 'use',
          isKeyMission: true,
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '코드 실행 결과를 예상과 비교할 수 있다',
            '에러 메시지를 읽고 이해할 수 있다'
          ],
          conceptExplanation: '버그를 고치려면 먼저 무엇이 잘못됐는지 알아야 해요. 실행해서 확인해보세요!',
          starterCode: `# 🐛 이 코드에는 버그가 있어요!
# 실행해서 어떤 오류가 나는지 확인해보세요

# 목표: 1부터 5까지 더한 결과(15)를 출력하기
total = 0

total = total + 1
total = total + 2
total = total + 3
total = total + 4
# 🐛 여기서 뭔가 빠진 것 같아요...

print("1부터 5까지의 합:", total)
print("예상 결과: 15")
print("실제 결과:", total)

if total == 15:
    print("✅ 정답!")
else:
    print("❌ 버그가 있어요! 뭐가 빠졌을까요?")`,
          solution: `total = 0

total = total + 1
total = total + 2
total = total + 3
total = total + 4
total = total + 5  # 이 줄이 빠져있었어요!

print("1부터 5까지의 합:", total)
print("예상 결과: 15")
print("실제 결과:", total)`,
          expectedOutput: `1부터 5까지의 합: 10
예상 결과: 15
실제 결과: 10
❌ 버그가 있어요! 뭐가 빠졌을까요?`,
          hints: [
            '💡 힌트 1: 먼저 실행해서 결과를 확인하세요',
            '💡 힌트 2: 1+2+3+4 = 10, 하지만 1+2+3+4+5 = 15',
            '💡 힌트 3: 5를 더하는 줄이 빠졌어요!'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-py-mod',
          title: '🐍 버그 고치기 (MODIFY)',
          description: '코드의 버그를 찾아서 고쳐보세요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'python',
          exp: 100,
          estimatedMinutes: 12,
          concept: '버그 수정',
          phase: 'modify',
          isKeyMission: true,
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '구문 오류(Syntax Error)를 수정할 수 있다',
            '논리 오류(Logic Error)를 수정할 수 있다'
          ],
          starterCode: `# 🐛 버그 3개를 찾아서 고치세요!
# 목표: 이름과 나이를 출력하고, 10년 후 나이를 계산하기

# 버그 1: 따옴표가 빠졌어요
name = 코딩왕

# 버그 2: 변수 이름이 잘못됐어요
age = 12

# 버그 3: 계산이 잘못됐어요 (빼기가 아니라 더해야 해요!)
future_age = age - 10

print(f"이름: {name}")
print(f"현재 나이: {age}살")
print(f"10년 후 나이: {future_age}살")`,
          solution: `name = "코딩왕"  # 따옴표 추가

age = 12

future_age = age + 10  # 빼기를 더하기로 수정

print(f"이름: {name}")
print(f"현재 나이: {age}살")
print(f"10년 후 나이: {future_age}살")`,
          expectedOutput: `이름: 코딩왕
현재 나이: 12살
10년 후 나이: 22살`,
          hints: [
            '💡 힌트 1: 문자열은 따옴표로 감싸야 해요 → "코딩왕"',
            '💡 힌트 2: 10년 후니까 나이에 10을 더해야 해요',
            '💡 힌트 3: - 를 + 로 바꿔보세요'
          ],
          testCases: [
            { input: '', expectedOutput: '이름: 코딩왕\n현재 나이: 12살\n10년 후 나이: 22살', description: '버그 수정 완료' }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-py-create',
          title: '🐍 테스트 코드 작성하기 (CREATE)',
          description: '버그를 찾기 위한 테스트 코드를 작성해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'python',
          exp: 120,
          estimatedMinutes: 15,
          concept: '테스트 작성',
          phase: 'create',
          isKeyMission: true,
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            'print문으로 값을 확인하는 방법을 안다',
            '예상 결과와 실제 결과를 비교하는 코드를 작성할 수 있다'
          ],
          starterCode: `# 🐛 디버깅 연습: 테스트 코드 작성하기
# 아래 함수가 올바르게 동작하는지 테스트하세요!

def multiply(a, b):
    """두 수를 곱하는 함수 (버그가 있을 수도 있어요!)"""
    return a + b  # 🐛 이 줄에 버그가 있어요!

# 미션: 테스트 코드를 작성해서 버그를 찾아내세요!
# 힌트: print()로 예상 결과와 실제 결과를 비교하세요

# 테스트 1: 2 x 3 = ?
result1 = multiply(2, 3)
print("테스트 1: 2 x 3")
print("예상:", 6)
print("실제:", result1)
# 테스트 결과를 확인하는 코드를 추가하세요!

# 테스트 2: 5 x 4 = ?
# 여기에 테스트 코드를 작성하세요!

`,
          solution: `def multiply(a, b):
    return a + b  # 버그: + 대신 *이어야 함

# 테스트 1
result1 = multiply(2, 3)
print("테스트 1: 2 x 3")
print("예상:", 6)
print("실제:", result1)
if result1 == 6:
    print("✅ 통과!")
else:
    print("❌ 실패! 버그 발견!")

# 테스트 2
result2 = multiply(5, 4)
print("\\n테스트 2: 5 x 4")
print("예상:", 20)
print("실제:", result2)
if result2 == 20:
    print("✅ 통과!")
else:
    print("❌ 실패! 버그 발견!")`,
          expectedOutput: null,
          hints: [
            '💡 힌트 1: multiply(5, 4)를 호출해서 result2에 저장하세요',
            '💡 힌트 2: 5 x 4의 예상 결과는 20이에요',
            '💡 힌트 3: if result == 예상값: 으로 확인할 수 있어요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-project',
          title: '🎯 최종 프로젝트: 계산기 만들기',
          description: 'Unit 1에서 배운 모든 것을 활용해 간단한 계산기를 만들어요',
          type: 'coding',
          difficulty: 'advanced',
          language: 'python',
          exp: 200,
          estimatedMinutes: 25,
          concept: '종합 프로젝트',
          phase: 'create',
          isWeeklyProject: true,
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '변수, 조건문, 함수를 종합적으로 활용할 수 있다',
            '실제 동작하는 프로그램을 완성할 수 있다'
          ],
          realWorldExample: '우리가 매일 쓰는 계산기 앱도 Python으로 만들 수 있어요!',
          starterCode: `# 🧮 간단한 계산기 만들기
# Unit 1 최종 프로젝트!
#
# 기능:
# 1. 덧셈 (+)
# 2. 뺄셈 (-)
# 3. 곱셈 (*)
# 4. 나눗셈 (/)

# 계산할 숫자들
num1 = 10
num2 = 5

# 연산자 선택 (+, -, *, / 중 하나)
operator = "+"

# 여기에 if-elif-else를 사용해서 계산기를 완성하세요!
# 힌트: operator 값에 따라 다른 계산을 해요

print(f"계산: {num1} {operator} {num2}")

# 조건문으로 계산 결과 구하기
if operator == "+":
    result = num1 + num2
# elif와 else를 추가해서 완성하세요!


print(f"결과: {result}")`,
          solution: `num1 = 10
num2 = 5
operator = "+"

print(f"계산: {num1} {operator} {num2}")

if operator == "+":
    result = num1 + num2
elif operator == "-":
    result = num1 - num2
elif operator == "*":
    result = num1 * num2
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "오류: 0으로 나눌 수 없어요!"
else:
    result = "오류: 알 수 없는 연산자"

print(f"결과: {result}")`,
          expectedOutput: `계산: 10 + 5
결과: 15`,
          hints: [
            '💡 힌트 1: elif operator == "-": 로 뺄셈 추가',
            '💡 힌트 2: 곱셈은 *, 나눗셈은 / 를 사용해요',
            '💡 힌트 3: 0으로 나누면 오류! num2 != 0 체크 추가'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
        {
          id: '1-8-10',
          title: 'Unit 1 종합 평가',
          description: '컴퓨팅 사고력에 대해 배운 모든 것을 확인해요',
          type: 'quiz',
          difficulty: 'intermediate',
          exp: 100,
          estimatedMinutes: 15,
          concept: '종합 평가',
          cstaStandard: '1A-AP-14',
          learningObjectives: [
            '8주간 배운 모든 개념을 종합적으로 확인한다',
            '컴퓨팅 사고력의 핵심 요소를 이해했는지 점검한다'
          ],
          hints: [
            '💡 순차, 반복, 조건, 패턴, 분해, 추상화, 디버깅을 복습하세요'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false,
        },
      ],
      quiz: {
        id: 'quiz-1-8',
        title: 'Unit 1 종합 평가',
        questions: [
          {
            id: 'q-1-8-1',
            question: '알고리즘이란 무엇인가요?',
            options: [
              '컴퓨터 부품의 이름',
              '문제를 해결하기 위한 단계별 절차',
              '프로그래밍 언어',
              '인터넷 주소'
            ],
            correctAnswer: 1,
            explanation: '알고리즘은 문제를 해결하기 위한 단계별 절차나 규칙이에요.'
          },
          {
            id: 'q-1-8-2',
            question: '반복문은 언제 사용하나요?',
            options: [
              '조건에 따라 다른 동작을 할 때',
              '같은 동작을 여러 번 해야 할 때',
              '버그를 찾을 때',
              '문제를 나눌 때'
            ],
            correctAnswer: 1,
            explanation: '같은 동작을 여러 번 반복해야 할 때 반복문을 사용하면 코드가 짧아져요!'
          },
          {
            id: 'q-1-8-3',
            question: '다음 중 추상화의 예시는?',
            options: [
              '지하철 노선도',
              '모든 건물이 표시된 지도',
              '사진의 모든 픽셀',
              '책의 전체 내용'
            ],
            correctAnswer: 0,
            explanation: '지하철 노선도는 필요한 정보(역, 환승)만 남긴 추상화의 좋은 예시예요!'
          },
          {
            id: 'q-1-8-4',
            question: '디버깅이란?',
            options: [
              '코드를 작성하는 것',
              '버그를 찾아서 고치는 것',
              '프로그램을 실행하는 것',
              '새 기능을 추가하는 것'
            ],
            correctAnswer: 1,
            explanation: '디버깅은 프로그램의 오류(버그)를 찾아서 수정하는 과정이에요.'
          },
          {
            id: 'q-1-8-5',
            question: '문제 분해란?',
            options: [
              '문제를 삭제하는 것',
              '큰 문제를 작은 문제로 나누는 것',
              '문제를 외우는 것',
              '문제를 복사하는 것'
            ],
            correctAnswer: 1,
            explanation: '큰 문제를 작고 관리 가능한 부분으로 나누면 해결하기 쉬워져요!'
          }
        ]
      },
      project: {
        id: 'proj-1-final',
        title: '컴퓨팅 사고력 마스터',
        description: '컴퓨팅 사고력의 모든 개념을 활용한 종합 프로젝트',
        difficulty: 'intermediate',
        duration: '60분',
        requirements: [
          '문제 분해 활용',
          '패턴 인식 활용',
          '추상화 활용',
          '알고리즘 설계',
          '디버깅 경험'
        ],
        exp: 300,
        badge: 'computational_thinking_master'
      },
    },
  ],
};

export default unit1;

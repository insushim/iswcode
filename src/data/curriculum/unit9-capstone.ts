// Unit 9: 종합 프로젝트 (Capstone Projects)
// CSTA K-12 Standards: 3A-AP-13, 3A-AP-14, 3A-AP-15, 3A-AP-16, 3A-AP-17
// 학습 목표: 전체 과정 통합, 포트폴리오 제작, 진로 탐색
// 참고: Code.org Capstone, Google CS First, CSTA Guidelines

import type { Unit } from '../../types';

export const unit9: Unit = {
  id: 'unit-9',
  number: 9,
  title: '종합 프로젝트',
  description: '지금까지 배운 모든 것을 종합하여 나만의 프로젝트를 완성하고, 포트폴리오를 만들어 미래를 준비합니다.',
  icon: '🏆',
  color: '#10b981',
  unlockLevel: 75,
  totalMissions: 32,
  estimatedHours: 16,
  weeks: [
    // Week 53: 포트폴리오 웹사이트
    {
      id: 'week-53',
      number: 53,
      title: '나의 포트폴리오 웹사이트',
      description: '지금까지 만든 작품들을 소개하는 개인 포트폴리오 웹사이트를 제작합니다.',
      missions: [
        {
          id: 'w53-m1',
          title: '포트폴리오란?',
          description: '포트폴리오의 의미와 중요성을 알아봅니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 10,
          concept: '포트폴리오 이해하기',
          conceptExplanation: '포트폴리오는 자신의 작품과 능력을 보여주는 모음집이에요. 내가 무엇을 할 수 있는지 증명하고, 성장 과정을 기록해요!',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '포트폴리오의 목적과 중요성을 이해한다',
            '자신의 프로젝트를 체계적으로 정리하는 방법을 안다',
            '디지털 포트폴리오의 구성 요소를 파악한다'
          ],
          realWorldExample: '화가가 자신의 그림을 모아서 전시회를 여는 것처럼, 개발자도 자신이 만든 웹사이트와 앱을 모아서 다른 사람에게 보여줄 수 있어요. 대학 입학이나 취업할 때 아주 중요한 자료가 돼요!',
          hints: ['💡 힌트 1: 포트폴리오는 미래의 나를 위한 자산이에요', '💡 힌트 2: 작은 프로젝트라도 괜찮아요, 지금부터 모아보세요', '💡 힌트 3: 포트폴리오는 계속 업데이트되는 살아있는 문서예요'],
          commonMistakes: [
            '포트폴리오는 나중에 만들면 된다고 생각하기',
            '완벽한 프로젝트만 포함하려고 하기',
            '성장 과정과 배운 점을 기록하지 않기'
          ],
          conceptCards: [
            {
              title: '포트폴리오',
              description: '자신의 작품과 능력을 체계적으로 정리한 모음집',
              example: '웹사이트, 앱, 게임 등 내가 만든 프로젝트들을 한곳에 모아 보여주기'
            },
            {
              title: '디지털 포트폴리오',
              description: '온라인으로 공개하는 웹 기반 포트폴리오',
              example: '개인 웹사이트, GitHub 프로필, 노션 페이지 등'
            },
            {
              title: '프로젝트 문서화',
              description: '프로젝트의 목적, 과정, 결과를 기록하는 것',
              example: '어떤 문제를 해결하려 했는지, 어떤 기술을 사용했는지 설명하기'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m2',
          title: '포트폴리오 구조 설계',
          description: '포트폴리오 웹사이트의 구조를 계획합니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 35,
          estimatedMinutes: 15,
          concept: '웹사이트 와이어프레임',
          conceptExplanation: '좋은 포트폴리오는 헤더, About Me, Skills, Projects, Contact 섹션으로 구성돼요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '웹사이트 구조를 계획하는 와이어프레임을 이해한다',
            '사용자 경험(UX)을 고려한 레이아웃을 설계한다',
            '반응형 디자인의 중요성을 파악한다'
          ],
          realWorldExample: '집을 짓기 전에 설계도를 그리는 것처럼, 웹사이트도 먼저 각 섹션을 어디에 배치할지 그림으로 그려봐요. 이렇게 하면 코딩할 때 훨씬 쉬워져요!',
          hints: ['💡 힌트 1: 먼저 종이에 스케치해보세요', '💡 힌트 2: 모바일 버전도 고려하세요', '💡 힌트 3: 중요한 정보는 위쪽에 배치하세요'],
          commonMistakes: [
            '계획 없이 바로 코딩을 시작하기',
            '너무 많은 섹션을 추가하려고 하기',
            '모바일 화면을 고려하지 않기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m3',
          title: '포트폴리오 HTML 구조',
          description: '포트폴리오의 HTML 기본 구조를 작성합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: '시맨틱 HTML',
          phase: 'create',
          isKeyMission: true,
          conceptExplanation: 'header, nav, main, section, footer 등 시맨틱 태그를 사용하면 구조가 명확해져요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '시맨틱 HTML 태그의 의미와 사용법을 이해한다',
            'HTML 문서의 계층 구조를 설계한다',
            '접근성을 고려한 마크업을 작성한다'
          ],
          realWorldExample: '책에 제목, 목차, 본문, 각주가 있는 것처럼, 웹사이트도 header(머리말), nav(목차), main(본문), footer(꼬리말)로 나눠요. 이렇게 하면 검색엔진과 스크린 리더가 웹사이트를 더 잘 이해해요!',
          starterCode: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <!-- 헤더와 네비게이션을 작성하세요 -->\n  \n  <!-- About Me 섹션을 작성하세요 -->\n  \n  <!-- Projects 섹션을 작성하세요 -->\n  \n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <header>\n    <nav>\n      <a href="#about">소개</a>\n      <a href="#projects">프로젝트</a>\n    </nav>\n    <h1>안녕하세요!</h1>\n  </header>\n  \n  <section id="about">\n    <h2>About Me</h2>\n    <p>저는 코딩을 배우고 있는 학생입니다.</p>\n  </section>\n  \n  <section id="projects">\n    <h2>Projects</h2>\n    <article class="project">\n      <h3>프로젝트 1</h3>\n    </article>\n  </section>\n</body>\n</html>',
          hints: ['💡 힌트 1: 시맨틱 태그를 사용하세요', '💡 힌트 2: id를 활용해 네비게이션 링크를 만드세요', '💡 힌트 3: section 태그로 큰 영역을 나누고, article로 개별 콘텐츠를 묶으세요'],
          commonMistakes: [
            'div 태그만 사용하고 시맨틱 태그를 사용하지 않기',
            '제목 태그(h1-h6)의 순서를 무시하기',
            'id 이름을 중복으로 사용하기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: 'header, nav, section 태그가 포함된 구조',
              description: '시맨틱 HTML 태그를 올바르게 사용했는지 확인'
            },
            {
              input: '',
              expectedOutput: 'id 속성을 가진 section과 해당 id를 링크하는 a 태그',
              description: '네비게이션 링크가 제대로 연결되었는지 확인'
            },
            {
              input: '',
              expectedOutput: 'h1, h2 등 제목 태그의 계층 구조',
              description: '제목 태그가 논리적 순서로 사용되었는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m4',
          title: '포트폴리오 CSS 스타일링',
          description: '포트폴리오에 멋진 스타일을 적용합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 45,
          estimatedMinutes: 25,
          concept: 'CSS 변수와 그라데이션',
          phase: 'create',
          isKeyMission: true,
          conceptExplanation: 'CSS 변수(:root)로 색상을 관리하고, linear-gradient로 멋진 배경을 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'CSS 변수를 사용하여 재사용 가능한 스타일을 작성한다',
            '그라데이션과 색상 이론을 이해한다',
            '일관된 디자인 시스템을 구축한다'
          ],
          realWorldExample: '큰 회사들은 "디자인 시스템"을 만들어서 모든 제품에 같은 색상과 스타일을 사용해요. CSS 변수를 쓰면 나중에 색상을 한 번만 바꿔도 전체 웹사이트가 바뀌어요!',
          starterCode: ':root {\n  /* 색상 변수를 정의하세요 */\n}\n\nbody {\n  /* 기본 스타일을 작성하세요 */\n}\n\nheader {\n  /* 헤더 스타일을 작성하세요 */\n}',
          solution: ':root {\n  --primary: #667eea;\n  --secondary: #764ba2;\n  --text: #333;\n}\n\nbody {\n  font-family: sans-serif;\n  color: var(--text);\n  margin: 0;\n}\n\nheader {\n  background: linear-gradient(135deg, var(--primary), var(--secondary));\n  color: white;\n  text-align: center;\n  padding: 4rem 2rem;\n}',
          hints: ['💡 힌트 1: CSS 변수로 색상을 관리하면 나중에 수정하기 쉬워요', '💡 힌트 2: :root에 정의한 변수는 var(--변수명)으로 사용해요', '💡 힌트 3: linear-gradient는 각도와 색상 두 개 이상 필요해요'],
          commonMistakes: [
            'CSS 변수명에 하이픈(--)을 빼먹기',
            '색상 값에 따옴표를 붙이기',
            'linear-gradient의 각도를 빼먹기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: ':root에 최소 3개의 CSS 변수 정의',
              description: 'CSS 변수를 올바르게 정의했는지 확인'
            },
            {
              input: '',
              expectedOutput: 'var() 함수를 사용하여 변수 참조',
              description: '정의한 변수를 제대로 사용했는지 확인'
            },
            {
              input: '',
              expectedOutput: 'linear-gradient 속성 사용',
              description: '그라데이션이 적용되었는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m5',
          title: '프로젝트 카드 만들기',
          description: '작품을 보여줄 프로젝트 카드를 만듭니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: '카드 컴포넌트',
          conceptExplanation: '프로젝트 카드에는 이미지, 제목, 설명, 기술 태그, 링크를 포함해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '재사용 가능한 컴포넌트 구조를 이해한다',
            '정보를 효과적으로 시각화하는 방법을 배운다',
            'article 태그를 활용한 독립적인 콘텐츠를 작성한다'
          ],
          realWorldExample: '쇼핑몰 앱에서 상품 카드, 유튜브에서 영상 카드처럼 똑같은 구조를 반복해서 사용해요. 한 번 카드를 만들면 내용만 바꿔서 여러 번 쓸 수 있어요!',
          starterCode: '<!-- 프로젝트 카드를 완성하세요 -->\n<article class="project-card">\n  <!-- 이미지, 제목, 설명, 링크를 추가하세요 -->\n</article>',
          solution: '<article class="project-card">\n  <img src="project.png" alt="프로젝트">\n  <h3>웹 게임</h3>\n  <p>JavaScript로 만든 게임</p>\n  <div class="tags">\n    <span>HTML</span>\n    <span>CSS</span>\n    <span>JS</span>\n  </div>\n  <a href="#" class="btn">Demo</a>\n</article>',
          hints: ['💡 힌트 1: 이미지와 설명을 포함하세요', '💡 힌트 2: 기술 태그를 추가하세요', '💡 힌트 3: article 태그는 독립적인 콘텐츠에 사용해요'],
          commonMistakes: [
            'img 태그의 alt 속성을 빼먹기',
            '카드 내부 요소의 순서를 고려하지 않기',
            '링크에 의미 있는 텍스트를 사용하지 않기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: 'img, h3, p, div.tags, a 태그가 포함된 article',
              description: '카드에 필요한 모든 요소가 포함되었는지 확인'
            },
            {
              input: '',
              expectedOutput: 'img 태그에 alt 속성이 있음',
              description: '이미지 접근성을 고려했는지 확인'
            },
            {
              input: '',
              expectedOutput: '최소 2개 이상의 기술 태그',
              description: '프로젝트에 사용된 기술을 표시했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m6',
          title: '스킬 섹션 시각화',
          description: '기술 스택을 시각적으로 표현합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 40,
          estimatedMinutes: 20,
          concept: '프로그레스 바',
          conceptExplanation: '스킬 레벨을 프로그레스 바로 시각화하면 한눈에 볼 수 있어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '데이터를 시각적으로 표현하는 방법을 이해한다',
            'CSS의 overflow와 position 속성을 활용한다',
            'transition으로 부드러운 효과를 구현한다'
          ],
          realWorldExample: '스마트폰의 배터리 잔량, 다운로드 진행 상태처럼 숫자를 막대 그래프로 보여주면 훨씬 이해하기 쉬워요!',
          starterCode: '.skill-bar {\n  /* 스킬 바 배경 스타일 */\n}\n\n.skill-level {\n  /* 채워진 부분 스타일 */\n}',
          solution: '.skill-bar {\n  background: #e0e0e0;\n  border-radius: 10px;\n  height: 20px;\n  overflow: hidden;\n}\n\n.skill-level {\n  background: linear-gradient(90deg, #667eea, #764ba2);\n  height: 100%;\n  border-radius: 10px;\n  transition: width 1s ease;\n}',
          hints: ['💡 힌트 1: border-radius로 둥글게 만드세요', '💡 힌트 2: transition으로 애니메이션을 추가하세요', '💡 힌트 3: overflow: hidden으로 넘치는 부분을 숨겨요'],
          commonMistakes: [
            'overflow: hidden을 빼먹어서 모서리가 깨지기',
            '부모와 자식의 height를 다르게 설정하기',
            'transition을 부모 요소에 적용하기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '.skill-bar에 overflow: hidden',
              description: '프로그레스 바 배경이 올바르게 설정되었는지 확인'
            },
            {
              input: '',
              expectedOutput: '.skill-level에 transition 속성',
              description: '애니메이션 효과가 추가되었는지 확인'
            },
            {
              input: '',
              expectedOutput: 'border-radius가 양쪽 요소에 적용',
              description: '둥근 모서리가 제대로 표현되는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m7',
          title: '애니메이션 효과 추가',
          description: '포트폴리오에 부드러운 애니메이션을 추가합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 45,
          estimatedMinutes: 20,
          concept: 'CSS 애니메이션',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          conceptExplanation: '@keyframes와 animation 속성으로 요소에 움직임을 줄 수 있어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '@keyframes를 사용한 애니메이션을 정의한다',
            'animation 속성의 다양한 옵션을 이해한다',
            '순차적 애니메이션을 구현한다'
          ],
          realWorldExample: '앱을 열 때 화면이 아래에서 위로 부드럽게 올라오거나, 알림이 서서히 나타나는 효과를 CSS 애니메이션으로 만들 수 있어요!',
          starterCode: '@keyframes fadeIn {\n  /* 페이드인 애니메이션 정의 */\n}\n\n.project-card {\n  /* 애니메이션 적용 */\n}',
          solution: '@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.project-card {\n  animation: fadeIn 0.5s ease forwards;\n}\n\n.project-card:nth-child(2) {\n  animation-delay: 0.1s;\n}',
          hints: ['💡 힌트 1: from과 to로 시작과 끝 상태를 정의해요', '💡 힌트 2: animation-delay로 순차적 효과를 줘요', '💡 힌트 3: forwards를 쓰면 애니메이션이 끝난 후 마지막 상태를 유지해요'],
          commonMistakes: [
            'animation-name을 @keyframes 이름과 다르게 쓰기',
            'forwards를 빼먹어서 애니메이션이 원래 상태로 돌아가기',
            'animation-delay 단위(s)를 빼먹기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: '@keyframes fadeIn 정의',
              description: '애니메이션이 정의되었는지 확인'
            },
            {
              input: '',
              expectedOutput: 'opacity와 transform 속성 변화',
              description: '페이드인과 이동 효과가 포함되었는지 확인'
            },
            {
              input: '',
              expectedOutput: 'animation-delay를 사용한 순차 효과',
              description: '여러 요소가 순차적으로 나타나는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w53-m8',
          title: '포트폴리오 완성',
          description: '포트폴리오를 완성하고 배포 준비를 합니다.',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'html',
          exp: 50,
          estimatedMinutes: 25,
          concept: '웹사이트 배포',
          conceptExplanation: 'GitHub Pages, Netlify 등 무료 서비스로 포트폴리오를 전 세계에 공개할 수 있어요!',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '웹사이트 배포 과정을 이해한다',
            '웹 호스팅 서비스를 활용한다',
            '프로젝트를 완성하고 테스트하는 방법을 배운다'
          ],
          realWorldExample: '유튜버가 영상을 편집한 후 유튜브에 업로드하는 것처럼, 우리도 웹사이트를 만든 후 인터넷에 올려서 전 세계 사람들이 볼 수 있게 해요!',
          hints: ['💡 힌트 1: 모든 링크가 작동하는지 확인하세요', '💡 힌트 2: 모바일에서도 테스트하세요', '💡 힌트 3: 파일 이름에 공백이나 한글이 없는지 확인하세요'],
          commonMistakes: [
            '이미지 경로를 절대 경로로 써서 배포 후 깨지기',
            '모바일 테스트를 하지 않기',
            '메타 태그를 추가하지 않아서 SNS 공유 시 미리보기가 안 보이기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'w53-project',
        title: '나만의 포트폴리오 웹사이트',
        description: '학습한 모든 기술을 활용하여 개인 포트폴리오 웹사이트를 완성합니다.',
        difficulty: 'intermediate',
        duration: '60분',
        requirements: ['반응형 디자인', '최소 4개 섹션', '프로젝트 3개 이상', '애니메이션 효과'],
        exp: 150
      }
    },
    // Week 54: 통합 프로젝트
    {
      id: 'week-54',
      number: 54,
      title: '나만의 앱 프로젝트',
      description: '배운 모든 기술을 통합하여 나만의 웹 애플리케이션을 기획하고 개발합니다.',
      missions: [
        {
          id: 'w54-m1',
          title: '프로젝트 아이디어 발굴',
          description: '해결하고 싶은 문제나 만들고 싶은 것을 찾아봅니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 30,
          estimatedMinutes: 15,
          concept: '아이디어 발상',
          conceptExplanation: '좋은 프로젝트는 일상의 불편함이나 관심사에서 시작해요. 내가 직접 사용할 것을 만들어 보세요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '문제를 발견하고 정의하는 방법을 배운다',
            '일상 속 불편함을 기술로 해결하는 사고방식을 기른다',
            '실현 가능한 프로젝트 범위를 설정한다'
          ],
          realWorldExample: '카카오톡은 문자 메시지 비용이 비싸다는 불편함에서 시작됐어요. 유튜브는 영상을 쉽게 공유하고 싶다는 아이디어에서 나왔죠. 작은 불편함이 큰 서비스가 될 수 있어요!',
          hints: ['💡 힌트 1: 할 일 관리 앱, 학습 타이머, 퀴즈 앱 등을 생각해보세요', '💡 힌트 2: 나와 친구들이 실제로 사용할 만한 것을 생각해요', '💡 힌트 3: 너무 복잡하지 않게, 핵심 기능 1-2개로 시작하세요'],
          commonMistakes: [
            '너무 크고 복잡한 프로젝트를 계획하기',
            '내가 사용하지 않을 것을 만들려고 하기',
            '아이디어만 생각하고 실행하지 않기'
          ],
          conceptCards: [
            {
              title: '문제 정의',
              description: '해결하고자 하는 문제를 명확히 설명하는 것',
              example: '"아침에 늦게 일어나는 문제" → "재미있는 알람 앱 만들기"'
            },
            {
              title: 'MVP (최소 기능 제품)',
              description: '가장 핵심적인 기능만 포함한 초기 버전',
              example: '할 일 앱이라면 추가, 삭제, 완료 표시만 먼저 만들기'
            },
            {
              title: '브레인스토밍',
              description: '자유롭게 여러 아이디어를 떠올리는 과정',
              example: '10가지 아이디어를 적고, 가장 재미있는 것 선택하기'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m2',
          title: '프로젝트 기획서 작성',
          description: '선택한 아이디어를 구체화하는 기획서를 작성합니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'javascript',
          exp: 35,
          estimatedMinutes: 20,
          concept: '기획서 작성',
          conceptExplanation: '기획서에는 프로젝트명, 목적, 대상, 주요 기능, 기술 스택을 포함해요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '프로젝트 계획을 체계적으로 문서화한다',
            '목표와 범위를 명확히 정의한다',
            '개발에 필요한 기술과 자원을 파악한다'
          ],
          realWorldExample: '영화를 찍기 전에 시나리오를 쓰는 것처럼, 앱을 만들기 전에 기획서를 작성해요. 무엇을 만들지 명확히 하면 개발이 훨씬 쉬워져요!',
          hints: ['💡 힌트 1: 간단하게 시작하세요', '💡 힌트 2: 핵심 기능에 집중하세요', '💡 힌트 3: "누가, 왜, 무엇을, 어떻게"를 답하세요'],
          commonMistakes: [
            '너무 길고 복잡하게 쓰기',
            '구체적인 기능 설명 없이 추상적으로만 쓰기',
            '실현 불가능한 기술을 포함하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m3',
          title: '와이어프레임 설계',
          description: 'UI/UX 와이어프레임을 설계합니다.',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: '와이어프레임',
          conceptExplanation: '와이어프레임은 웹사이트의 뼈대 설계도예요. 필요한 화면과 버튼 위치를 먼저 그려봐요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            'UI/UX 설계의 중요성을 이해한다',
            '사용자 흐름(User Flow)을 설계한다',
            '와이어프레임 도구를 활용한다'
          ],
          realWorldExample: '건물을 지을 때 청사진을 먼저 그리듯이, 앱도 화면 구성을 먼저 그려요. 이렇게 하면 사용자가 어떻게 앱을 사용할지 미리 볼 수 있어요!',
          hints: ['💡 힌트 1: 종이에 먼저 스케치하세요', '💡 힌트 2: 사용자 관점에서 생각하세요', '💡 힌트 3: 버튼을 누르면 어떤 화면으로 이동할지 화살표로 표시하세요'],
          commonMistakes: [
            '색상과 디자인에 너무 집중하기 (와이어프레임은 구조만!)',
            '한 화면에 너무 많은 정보를 넣기',
            '사용자의 행동 흐름을 고려하지 않기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m4',
          title: 'HTML 구조 만들기',
          description: '프로젝트의 HTML 기본 구조를 작성합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          exp: 45,
          estimatedMinutes: 25,
          concept: '프로젝트 HTML',
          phase: 'create',
          isKeyMission: true,
          conceptExplanation: '기획서와 와이어프레임을 바탕으로 HTML 구조를 만들어요.',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '와이어프레임을 HTML 코드로 변환한다',
            '의미 있는 id와 class 이름을 사용한다',
            '접근성을 고려한 마크업을 작성한다'
          ],
          realWorldExample: '레고 설명서를 보고 블록을 쌓듯이, 와이어프레임을 보고 HTML 태그를 배치해요. 구조가 탄탄해야 나중에 스타일 입히기 쉬워요!',
          starterCode: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>나의 프로젝트</title>\n</head>\n<body>\n  <!-- 프로젝트 HTML을 작성하세요 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>공부 버디</title>\n</head>\n<body>\n  <header>\n    <h1>공부 버디</h1>\n  </header>\n  <main>\n    <section id="timer">\n      <div class="timer-display">25:00</div>\n      <button id="startBtn">시작</button>\n    </section>\n  </main>\n</body>\n</html>',
          hints: ['💡 힌트 1: 시맨틱 태그를 사용하세요', '💡 힌트 2: id를 적절히 사용하세요', '💡 힌트 3: 와이어프레임의 각 영역을 section이나 div로 변환해요'],
          commonMistakes: [
            'id와 class를 영어 외의 언어로 작성하기',
            '모든 요소에 id를 붙이기 (필요한 곳에만!)',
            'div만 사용하고 시맨틱 태그를 무시하기'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: 'header, main 등 시맨틱 태그 사용',
              description: 'HTML5 시맨틱 구조를 사용했는지 확인'
            },
            {
              input: '',
              expectedOutput: 'JavaScript에서 접근할 요소에 id 부여',
              description: '필요한 요소에 id가 있는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m5',
          title: 'CSS 스타일 적용',
          description: '프로젝트에 스타일을 적용합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'css',
          exp: 45,
          estimatedMinutes: 25,
          concept: '프로젝트 스타일링',
          conceptExplanation: '색상 테마를 정하고 반응형으로 만들어요.',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '일관된 디자인 시스템을 구축한다',
            'CSS 변수로 테마를 관리한다',
            '모바일 우선 반응형 디자인을 적용한다'
          ],
          realWorldExample: '인스타그램, 페이스북 같은 앱들은 다크모드와 라이트모드가 있어요. CSS 변수를 쓰면 테마 전환이 쉬워요!',
          starterCode: ':root {\n  /* 색상 변수 */\n}\n\nbody {\n  /* 기본 스타일 */\n}',
          solution: ':root {\n  --primary: #6366f1;\n  --bg: #0f172a;\n  --text: #e2e8f0;\n}\n\nbody {\n  font-family: sans-serif;\n  background: var(--bg);\n  color: var(--text);\n  min-height: 100vh;\n}',
          hints: ['💡 힌트 1: 색상 테마를 정하세요', '💡 힌트 2: 반응형으로 만드세요', '💡 힌트 3: :root에 색상 변수를 모두 모아두세요'],
          commonMistakes: [
            '하드코딩된 색상 값을 여기저기 사용하기',
            '모바일 화면을 고려하지 않기',
            '폰트 크기를 px로만 고정하기 (rem 사용 권장)'
          ],
          testCases: [
            {
              input: '',
              expectedOutput: ':root에 CSS 변수 정의',
              description: '색상 변수를 사용했는지 확인'
            },
            {
              input: '',
              expectedOutput: 'var() 함수로 변수 참조',
              description: '변수를 실제로 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m6',
          title: 'JavaScript 기능 구현 (1)',
          description: '핵심 기능을 JavaScript로 구현합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 50,
          estimatedMinutes: 30,
          concept: 'DOM 조작',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          conceptExplanation: 'querySelector와 addEventListener로 요소를 선택하고 이벤트를 처리해요.',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'DOM API를 사용하여 HTML 요소를 조작한다',
            '이벤트 리스너를 활용한 인터랙티브 기능을 구현한다',
            'setInterval/setTimeout으로 시간 기반 기능을 만든다'
          ],
          realWorldExample: '유튜브의 재생 버튼을 누르면 영상이 재생되고, 타이머가 움직이는 것처럼 JavaScript가 HTML 요소를 제어해요. 버튼 클릭, 타이머, 애니메이션 모두 JavaScript로 만들어요!',
          starterCode: '// 요소 선택\nconst timerDisplay = document.querySelector(".timer-display");\nconst startBtn = document.getElementById("startBtn");\n\n// 타이머 기능을 구현하세요\n',
          solution: 'const timerDisplay = document.querySelector(".timer-display");\nconst startBtn = document.getElementById("startBtn");\n\nlet timeLeft = 25 * 60;\nlet timerId = null;\n\nfunction updateDisplay() {\n  const min = Math.floor(timeLeft / 60);\n  const sec = timeLeft % 60;\n  timerDisplay.textContent = `${min}:${String(sec).padStart(2, "0")}`;\n}\n\nstartBtn.addEventListener("click", () => {\n  timerId = setInterval(() => {\n    timeLeft--;\n    updateDisplay();\n    if (timeLeft <= 0) clearInterval(timerId);\n  }, 1000);\n});',
          hints: ['💡 힌트 1: setInterval로 1초마다 실행해요', '💡 힌트 2: padStart로 숫자를 두 자리로 표시해요', '💡 힌트 3: timeLeft가 0이 되면 clearInterval로 타이머를 멈춰야 해요'],
          commonMistakes: [
            'clearInterval을 호출하지 않아서 타이머가 계속 실행되기',
            'timerId 변수를 저장하지 않아서 멈출 수 없게 되기',
            'padStart를 빼먹어서 1:5처럼 한 자리로 표시되기'
          ],
          testCases: [
            {
              input: '시작 버튼 클릭',
              expectedOutput: '1초마다 timeLeft 감소 및 화면 업데이트',
              description: 'setInterval이 제대로 작동하는지 확인'
            },
            {
              input: 'timeLeft = 65 (1분 5초)',
              expectedOutput: '1:05 형식으로 표시',
              description: '시간 형식이 올바르게 표시되는지 확인'
            },
            {
              input: 'timeLeft = 0',
              expectedOutput: 'clearInterval 호출로 타이머 정지',
              description: '타이머가 0이 되면 멈추는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m7',
          title: 'JavaScript 기능 구현 (2)',
          description: '데이터 저장 기능을 구현합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 50,
          estimatedMinutes: 25,
          concept: 'localStorage',
          conceptExplanation: 'localStorage.setItem과 getItem으로 데이터를 저장하고 불러와요.',
          cstaStandard: '2-AP-18',
          learningObjectives: [
            'localStorage API를 사용하여 데이터를 저장하고 불러온다',
            'JSON 직렬화/역직렬화를 이해한다',
            '로컬 스토리지의 한계와 활용법을 안다'
          ],
          realWorldExample: '게임을 하다가 끄고 다시 켜도 저장된 점수가 남아있는 것처럼, localStorage를 쓰면 브라우저를 닫았다 열어도 데이터가 유지돼요!',
          starterCode: '// localStorage에 저장하는 함수를 작성하세요\nfunction saveData(key, value) {\n  // 구현\n}\n\n// localStorage에서 불러오는 함수를 작성하세요\nfunction loadData(key) {\n  // 구현\n}',
          solution: 'function saveData(key, value) {\n  localStorage.setItem(key, JSON.stringify(value));\n}\n\nfunction loadData(key) {\n  const saved = localStorage.getItem(key);\n  return saved ? JSON.parse(saved) : null;\n}',
          hints: ['💡 힌트 1: JSON.stringify로 객체를 문자열로 변환해요', '💡 힌트 2: JSON.parse로 문자열을 객체로 변환해요', '💡 힌트 3: getItem은 데이터가 없으면 null을 반환해요'],
          commonMistakes: [
            'JSON.stringify 없이 객체를 바로 저장하기 ([object Object]로 저장됨)',
            'getItem이 null을 반환할 때 처리하지 않아서 에러 발생',
            'JSON.parse를 빼먹어서 문자열 그대로 받기'
          ],
          testCases: [
            {
              input: 'saveData("score", {points: 100, level: 5})',
              expectedOutput: 'localStorage에 JSON 문자열로 저장',
              description: '객체가 올바르게 저장되는지 확인'
            },
            {
              input: 'loadData("score")',
              expectedOutput: '{points: 100, level: 5} 객체 반환',
              description: '저장된 데이터를 객체로 불러오는지 확인'
            },
            {
              input: 'loadData("notExist")',
              expectedOutput: 'null 반환',
              description: '존재하지 않는 데이터를 안전하게 처리하는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w54-m8',
          title: '테스트 및 디버깅',
          description: '프로젝트를 테스트하고 버그를 수정합니다.',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 40,
          estimatedMinutes: 20,
          concept: '디버깅',
          conceptExplanation: 'console.log와 개발자 도구를 활용해서 버그를 찾고 수정해요.',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '체계적인 디버깅 방법을 배운다',
            '브라우저 개발자 도구를 활용한다',
            '테스트 케이스를 작성하고 검증한다'
          ],
          realWorldExample: '의사가 환자를 진찰하듯이, 개발자도 코드의 문제를 찾고 고쳐요. console.log는 코드의 체온계 같은 거예요!',
          hints: ['💡 힌트 1: console.log를 적극 활용하세요', '💡 힌트 2: 모든 버튼이 동작하는지 확인하세요', '💡 힌트 3: F12를 눌러 개발자 도구의 Console 탭을 확인하세요'],
          commonMistakes: [
            'console.log를 지우지 않고 배포하기',
            '한 번에 여러 곳을 수정해서 어디가 문제인지 모르기',
            '에러 메시지를 읽지 않고 무시하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'w54-project',
        title: '나만의 웹 앱',
        description: '기획부터 개발까지 완성한 나만의 웹 애플리케이션',
        difficulty: 'intermediate',
        duration: '90분',
        requirements: ['명확한 목적', 'UI/UX 설계', '핵심 기능 동작', 'localStorage 활용'],
        exp: 200
      }
    },
    // Week 55: 발표와 피드백
    {
      id: 'week-55',
      number: 55,
      title: '프로젝트 발표와 피드백',
      description: '완성한 프로젝트를 발표하고, 피드백을 주고받으며 개선합니다.',
      missions: [
        {
          id: 'w55-m1',
          title: '발표 준비하기',
          description: '효과적인 프로젝트 발표를 준비합니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: '발표 준비',
          conceptExplanation: '좋은 발표는 도입, 문제, 해결책, 데모, 배운 점 순서로 구성해요.',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '효과적인 발표 구조를 이해한다',
            '청중과 소통하는 방법을 배운다',
            '프로젝트를 명확하게 설명하는 능력을 기른다'
          ],
          realWorldExample: '스티브 잡스가 아이폰을 소개할 때처럼, 좋은 발표는 스토리가 있어요. "여러분, 문제가 있었어요. 우리가 해결했어요. 이렇게요!"라는 흐름으로 말하면 청중이 집중해요!',
          hints: ['💡 힌트 1: 연습, 연습, 연습!', '💡 힌트 2: 청중과 눈 맞춤을 해요', '💡 힌트 3: 시작할 때 재미있는 질문이나 이야기로 관심을 끌어요'],
          commonMistakes: [
            '너무 많은 내용을 넣으려고 하기',
            '청중을 보지 않고 화면만 보기',
            '준비 없이 즉흥으로 발표하기'
          ],
          conceptCards: [
            {
              title: '도입 (Hook)',
              description: '청중의 관심을 끄는 시작 부분',
              example: '"여러분은 숙제를 까먹은 적 있나요? 저는 이 문제를 해결했어요!"'
            },
            {
              title: '문제 정의',
              description: '왜 이 프로젝트를 만들었는지 설명',
              example: '"할 일을 자주 잊어버리는 문제가 있었어요"'
            },
            {
              title: '데모 (시연)',
              description: '실제로 작동하는 모습을 보여주기',
              example: '화면을 공유해서 버튼을 클릭하며 기능을 보여주기'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m2',
          title: '발표 자료 만들기',
          description: '발표용 슬라이드를 제작합니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 35,
          estimatedMinutes: 20,
          concept: '슬라이드 제작',
          conceptExplanation: '한 슬라이드에 한 가지 내용만! 글자는 크게, 이미지를 활용해요.',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '효과적인 시각 자료를 디자인한다',
            '정보를 간결하게 정리하는 방법을 배운다',
            '청중의 관점에서 자료를 구성한다'
          ],
          realWorldExample: 'TED 강연자들의 슬라이드를 보면 글자가 적고 이미지가 많아요. "한 슬라이드, 한 메시지" 원칙으로 만들면 청중이 집중하기 쉬워요!',
          hints: ['💡 힌트 1: 스크린샷을 꼭 포함하세요', '💡 힌트 2: 5-7장이 적당해요', '💡 힌트 3: 폰트 크기는 최소 24pt 이상으로 크게!'],
          commonMistakes: [
            '슬라이드에 글자를 너무 많이 쓰기',
            '작은 폰트 사용하기',
            '어두운 배경에 어두운 글자 사용하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m3',
          title: '데모 영상 녹화',
          description: '프로젝트 데모 영상을 녹화합니다.',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: '데모 영상',
          conceptExplanation: '1-2분 분량으로 핵심 기능을 보여주는 영상을 녹화해요.',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '프로젝트를 시각적으로 설명하는 방법을 배운다',
            '화면 녹화 도구를 활용한다',
            '명확한 내레이션을 작성한다'
          ],
          realWorldExample: '앱스토어에 올라가는 앱들은 짧은 미리보기 영상이 있어요. 사람들은 긴 설명보다 짧은 영상을 선호해요!',
          hints: ['💡 힌트 1: 조용한 곳에서 녹화하세요', '💡 힌트 2: 천천히 명확하게 설명하세요', '💡 힌트 3: 마우스 커서 움직임도 부드럽게!'],
          commonMistakes: [
            '너무 빨리 화면을 넘기기',
            '배경 소음이 많은 곳에서 녹화하기',
            '기능만 보여주고 설명 없이 끝내기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m4',
          title: '발표 연습',
          description: '발표를 연습하고 피드백을 받습니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 35,
          estimatedMinutes: 15,
          concept: '발표 연습',
          conceptExplanation: '혼자 연습, 거울 보며 연습, 가족 앞에서 연습해요.',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '발표 연습의 중요성을 이해한다',
            '발표 시간을 조절하는 방법을 배운다',
            '긴장을 관리하는 기술을 익힌다'
          ],
          realWorldExample: '올림픽 선수들도 실제 경기 전에 수백 번 연습해요. 발표도 마찬가지예요. 연습할수록 자신감이 생겨요!',
          hints: ['💡 힌트 1: 시간을 재면서 연습하세요', '💡 힌트 2: 최소 3번 연습하세요', '💡 힌트 3: 스마트폰으로 자신의 발표를 녹화해서 보세요'],
          commonMistakes: [
            '연습 없이 즉흥으로 발표하기',
            '슬라이드만 보고 읽기',
            '너무 빨리 말하기'
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m5',
          title: '피드백 주고받기',
          description: '건설적인 피드백을 주고받는 방법을 배웁니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: '건설적인 피드백',
          conceptExplanation: '좋은 피드백은 구체적이고, 긍정 먼저, 건설적으로, 존중하며 말해요.',
          cstaStandard: '2-AP-19',
          learningObjectives: [
            '건설적인 피드백의 원칙을 이해한다',
            '피드백을 긍정적으로 받아들이는 태도를 기른다',
            '구체적이고 실행 가능한 피드백을 제공한다'
          ],
          realWorldExample: '좋아하는 유튜버에게 댓글을 달 때도 "별로예요"보다 "이 부분은 좋았는데, 다음엔 이렇게 하면 더 좋을 것 같아요!"라고 말하면 더 도움이 되죠!',
          hints: ['💡 힌트 1: 샌드위치 기법: 칭찬 → 개선점 → 격려', '💡 힌트 2: "넌 틀렸어" 대신 "이렇게 하면 어떨까?"', '💡 힌트 3: 구체적인 예시를 들어서 설명해요'],
          commonMistakes: [
            '너무 비판적으로만 말하기',
            '추상적으로 말해서 무엇을 개선할지 모르게 하기',
            '피드백을 개인적인 공격으로 받아들이기'
          ],
          conceptCards: [
            {
              title: '샌드위치 피드백',
              description: '긍정 → 개선점 → 격려 순서로 전달하는 방법',
              example: '"색상이 예뻐요 → 버튼이 좀 작아요 → 크기만 키우면 완벽해요!"'
            },
            {
              title: '구체적 피드백',
              description: '정확히 무엇을, 어떻게 개선할지 말하기',
              example: '"좋아요" 대신 "15줄의 if문을 switch로 바꾸면 읽기 쉬워요"'
            },
            {
              title: '성장 마인드셋',
              description: '피드백을 성장의 기회로 받아들이는 태도',
              example: '"비판받았어" 대신 "개선할 점을 배웠어"'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m6',
          title: '피드백 반영하기',
          description: '받은 피드백을 바탕으로 프로젝트를 개선합니다.',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'javascript',
          exp: 45,
          estimatedMinutes: 25,
          concept: '코드 개선',
          phase: 'create',
          isKeyMission: true,
          isWeeklyProject: true,
          conceptExplanation: '피드백을 분석하고 우선순위를 정해 개선해요.',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '피드백을 분석하고 우선순위를 정한다',
            '반복적 개선(Iteration) 과정을 경험한다',
            '사용자 의견을 반영한 제품 개선을 이해한다'
          ],
          realWorldExample: '인스타그램도 처음엔 위치 공유 앱이었다가 사용자 피드백을 듣고 사진 중심으로 바뀌었어요. 좋은 제품은 사용자 의견을 듣고 계속 개선돼요!',
          starterCode: '/* 피드백 반영 계획\n\n받은 피드백:\n1. \n2. \n\n개선할 부분:\n1. \n*/\n\n// 개선 코드 작성',
          solution: '/* 피드백 반영 예시\n\n받은 피드백:\n1. 버튼이 작음\n2. 다크모드 필요\n\n개선할 부분:\n1. 버튼 크기 확대\n*/\n\n// 버튼 크기 개선\nbutton {\n  padding: 1rem 2rem;\n  font-size: 1.1rem;\n}',
          hints: ['💡 힌트 1: 모든 피드백을 반영할 필요는 없어요', '💡 힌트 2: 우선순위를 정하세요 (중요도 + 구현 난이도)', '💡 힌트 3: 작은 개선부터 시작해서 테스트하세요'],
          commonMistakes: [
            '모든 피드백을 한 번에 반영하려고 하기',
            '우선순위 없이 무작위로 개선하기',
            '개선 후 테스트하지 않기'
          ],
          testCases: [
            {
              input: '피드백: 버튼 크기 증가 필요',
              expectedOutput: 'padding과 font-size 증가',
              description: '버튼이 클릭하기 쉬운 크기로 개선되었는지 확인'
            },
            {
              input: '여러 피드백 동시 수신',
              expectedOutput: '우선순위에 따른 순차적 개선',
              description: '중요한 것부터 개선했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m7',
          title: '최종 발표',
          description: '완성된 프로젝트를 최종 발표합니다.',
          type: 'hands-on',
          difficulty: 'intermediate',
          language: 'html',
          exp: 50,
          estimatedMinutes: 20,
          concept: '최종 발표',
          conceptExplanation: '자신감을 가지고 열정을 보여주세요! 실수해도 괜찮아요.',
          hints: ['심호흡하고 시작하세요', '여러분의 노력을 자랑스러워하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w55-m8',
          title: '발표 회고',
          description: '발표를 돌아보고 배운 점을 정리합니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 35,
          estimatedMinutes: 15,
          concept: '회고',
          conceptExplanation: '무엇이 잘 되었고, 다음에 어떻게 할지 생각해봐요.',
          hints: ['솔직하게 작성하세요', '성장한 점을 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      quiz: {
        id: 'w55-quiz',
        title: '발표와 피드백 퀴즈',
        questions: [
          {
            id: 'w55-q1',
            question: '효과적인 피드백의 원칙이 아닌 것은?',
            options: ['구체적으로 말하기', '긍정적인 점 먼저', '비판만 하기', '존중하며 말하기'],
            correctAnswer: 2,
            explanation: '좋은 피드백은 구체적이고 긍정적인 점과 개선점을 함께 전달해요. "샌드위치 기법"처럼 칭찬 → 개선점 → 격려 순서로 말하면 상대방이 받아들이기 쉬워요!'
          },
          {
            id: 'w55-q2',
            question: '발표 준비 시 가장 중요한 것은?',
            options: ['멋진 슬라이드', '충분한 연습', '비싼 장비', '긴 발표 시간'],
            correctAnswer: 1,
            explanation: '충분한 연습이 자신감 있는 발표를 만들어요. 스티브 잡스도 발표 전에 수십 번 연습했다고 해요. 최소 3번은 연습해보세요!'
          },
          {
            id: 'w55-q3',
            question: '프로젝트 데모 영상에 꼭 포함해야 할 것은?',
            options: ['내 얼굴', '핵심 기능 시연', '배경 음악', '30분 이상 분량'],
            correctAnswer: 1,
            explanation: '데모 영상에서 가장 중요한 것은 핵심 기능을 명확하게 보여주는 거예요. 1-2분 분량으로 짧고 명확하게 만드는 것이 좋아요!'
          }
        ]
      }
    },
    // Week 56: 미래를 향한 여정
    {
      id: 'week-56',
      number: 56,
      title: '미래를 향한 여정',
      description: 'IT 분야의 다양한 진로를 탐색하고, 지속적인 학습을 위한 로드맵을 세웁니다.',
      missions: [
        {
          id: 'w56-m1',
          title: 'IT 분야 직업 탐색',
          description: 'IT 분야의 다양한 직업과 역할을 알아봅니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: 'IT 직업',
          conceptExplanation: '프론트엔드, 백엔드, 풀스택, 모바일, 게임, AI, 데이터, 보안 등 다양한 분야가 있어요!',
          cstaStandard: '2-IC-20',
          learningObjectives: [
            'IT 분야의 다양한 직업을 이해한다',
            '각 직업의 역할과 필요한 기술을 파악한다',
            '자신의 관심사와 적성을 탐색한다'
          ],
          realWorldExample: '웹사이트를 만들 때도 디자이너, 프론트엔드 개발자, 백엔드 개발자, 데이터베이스 관리자 등 여러 사람이 협력해요. 마치 축구팀에 공격수, 수비수, 골키퍼가 있는 것처럼요!',
          hints: ['💡 힌트 1: 관심 있는 직업 3개를 선택해보세요', '💡 힌트 2: 각 직업이 하는 일을 유튜브나 블로그에서 찾아보세요', '💡 힌트 3: 완벽한 선택은 없어요. 여러 분야를 경험하면서 찾아가요!'],
          commonMistakes: [
            '한 가지 직업만 있다고 생각하기',
            '지금 당장 진로를 결정해야 한다고 생각하기',
            '연봉만 보고 선택하기'
          ],
          conceptCards: [
            {
              title: '프론트엔드 개발자',
              description: '사용자가 보고 클릭하는 화면을 만드는 개발자',
              example: 'HTML, CSS, JavaScript로 웹사이트의 버튼, 메뉴, 애니메이션 만들기'
            },
            {
              title: '백엔드 개발자',
              description: '서버와 데이터베이스를 관리하는 개발자',
              example: '로그인 처리, 데이터 저장, API 만들기'
            },
            {
              title: 'AI/ML 엔지니어',
              description: '인공지능과 기계학습 모델을 만드는 개발자',
              example: '챗GPT 같은 AI 모델 개발, 이미지 인식 프로그램 만들기'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m2',
          title: '성공한 개발자 이야기',
          description: '성공한 개발자들의 이야기를 통해 영감을 얻습니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: '롤모델',
          conceptExplanation: '어릴 때 시작한 개발자들도 많아요. 꾸준한 연습과 호기심이 중요해요!',
          hints: ['지금 시작해도 늦지 않았어요', '롤모델을 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m3',
          title: '학습 로드맵 만들기',
          description: '앞으로의 학습 계획을 세웁니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: '학습 로드맵',
          conceptExplanation: '웹 개발, 앱 개발, 게임, AI 등 관심 분야를 선택하고 단계별 계획을 세워요.',
          hints: ['6개월 계획을 세워보세요', '무료 학습 자료를 활용하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m4',
          title: '온라인 프로필 만들기',
          description: '개발자로서의 온라인 존재감을 만듭니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 35,
          estimatedMinutes: 20,
          concept: 'GitHub 프로필',
          conceptExplanation: 'GitHub은 코드 저장소이자 포트폴리오예요. 프로필 README를 작성해보세요!',
          hints: ['GitHub 계정을 만드세요', '프로젝트를 업로드하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m5',
          title: '오픈소스 기여하기',
          description: '오픈소스 프로젝트에 기여하는 방법을 배웁니다.',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 35,
          estimatedMinutes: 15,
          concept: '오픈소스',
          conceptExplanation: '오픈소스는 누구나 참여할 수 있어요. 문서 수정, 번역, 버그 리포트부터 시작해요!',
          hints: ['Good First Issue 라벨을 찾아보세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m6',
          title: '코딩 커뮤니티 참여',
          description: '다른 개발자들과 교류하는 방법을 배웁니다.',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 30,
          estimatedMinutes: 15,
          concept: '개발자 커뮤니티',
          conceptExplanation: 'Stack Overflow, Discord, 코딩 동아리 등에서 질문하고 답변하며 성장해요!',
          hints: ['좋은 질문하는 법을 배우세요', '다른 사람을 도와주세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m7',
          title: '1년 목표 설정',
          description: '1년 후 나의 모습을 상상하고 목표를 세웁니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 40,
          estimatedMinutes: 20,
          concept: 'SMART 목표',
          conceptExplanation: 'Specific(구체적), Measurable(측정가능), Achievable(달성가능), Relevant(관련성), Time-bound(기한) 목표를 세워요!',
          hints: ['5개 목표를 SMART하게 작성하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w56-m8',
          title: '졸업과 새로운 시작',
          description: '52주 커리큘럼을 마무리하고 새로운 여정을 시작합니다.',
          type: 'hands-on',
          difficulty: 'beginner',
          language: 'html',
          exp: 100,
          estimatedMinutes: 20,
          concept: '졸업',
          conceptExplanation: '축하합니다! 컴퓨팅 사고력, 블록코딩, Python, HTML/CSS, JavaScript를 모두 배웠어요. 이제 시작이에요!',
          hints: ['지금까지의 여정을 회고하세요', '앞으로의 다짐을 작성하세요'],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ],
      project: {
        id: 'w56-project',
        title: '나의 개발자 로드맵',
        description: '앞으로의 1년 학습 계획과 목표를 담은 개인 로드맵을 완성합니다.',
        difficulty: 'beginner',
        duration: '45분',
        requirements: ['관심 분야 3개 선택', '6개월 학습 계획', 'SMART 목표 5개', '참여할 커뮤니티'],
        exp: 200
      },
      quiz: {
        id: 'w56-quiz',
        title: '최종 퀴즈',
        questions: [
          {
            id: 'w56-q1',
            question: 'SMART 목표에서 M은 무엇을 의미하나요?',
            options: ['Meaningful', 'Measurable', 'Motivated', 'Modern'],
            correctAnswer: 1,
            explanation: 'Measurable은 목표가 측정 가능해야 한다는 의미예요. "열심히 하기"보다 "주 3회 1시간씩 코딩하기"처럼 구체적인 숫자로 표현하면 달성 여부를 확인할 수 있어요!'
          },
          {
            id: 'w56-q2',
            question: '오픈소스 기여의 장점이 아닌 것은?',
            options: ['실력 향상', '경력 증명', '돈을 많이 벌 수 있다', '커뮤니티 참여'],
            correctAnswer: 2,
            explanation: '오픈소스는 보통 무료로 기여하지만 실력과 경력을 쌓을 수 있어요. GitHub에 기여 기록이 남아서 포트폴리오로 활용할 수 있답니다!'
          },
          {
            id: 'w56-q3',
            question: '좋은 질문의 조건이 아닌 것은?',
            options: ['시도한 것 설명', '에러 메시지 공유', '정답만 요구', '코드 포함'],
            correctAnswer: 2,
            explanation: '좋은 질문은 자신이 시도한 것과 상황을 설명하고 도움을 요청해요. "이 에러가 뭐예요?"보다 "이런 시도를 했는데 이 에러가 나요. 어떻게 해결할까요?"가 훨씬 좋은 질문이에요!'
          },
          {
            id: 'w56-q4',
            question: 'GitHub 프로필 README의 주요 목적은?',
            options: ['코드 저장', '자기소개 및 프로젝트 소개', '친구 추가', '게임하기'],
            correctAnswer: 1,
            explanation: 'GitHub 프로필 README는 나를 소개하고 주요 프로젝트를 보여주는 공간이에요. 마치 온라인 명함 같은 역할을 해요!'
          }
        ]
      }
    }
  ]
};

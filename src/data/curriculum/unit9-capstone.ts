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
                    challenges: [
            {
              id: 'c1',
              title: '포트폴리오 HTML 구조 이해',
              description: '포트폴리오 웹사이트의 기본 HTML 구조를 파악합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 포트폴리오 기본 구조를 확인하세요 -->\n<html>\n<head>\n  <title>???</title>\n</head>\n<body>\n  <header>\n    <h1>이름</h1>\n  </header>\n  <!-- 어떤 섹션이 필요할까요? -->\n</body>\n</html>',
              solution: '<!-- 포트폴리오 기본 구조 -->\n<html>\n<head>\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <header>\n    <h1>홍길동</h1>\n    <p>주니어 웹 개발자</p>\n  </header>\n  <section id="about">\n    <h2>소개</h2>\n  </section>\n  <section id="projects">\n    <h2>프로젝트</h2>\n  </section>\n  <footer>\n    <p>연락처 정보</p>\n  </footer>\n</body>\n</html>',
              hints: ['포트폴리오에는 소개, 프로젝트, 연락처 섹션이 필요해요', 'header에는 이름과 직함을 넣어요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '포트폴리오 구조를 완벽하게 이해했어요!',
                good: '기본 구조를 잘 파악했어요!',
                partial: '일부 섹션이 빠졌어요. 소개, 프로젝트, 연락처를 모두 넣어보세요.',
                wrong: 'header, section, footer 태그를 활용해서 구조를 만들어보세요.'
              }
            },
            {
              id: 'c2',
              title: '포트폴리오 소개 섹션',
              description: '자기소개 섹션의 HTML을 분석합니다.',
              difficulty: 'easy',
              starterCode: '<section id="about">\n  <h2>About Me</h2>\n  <!-- 자기소개 내용을 추가하세요 -->\n  <!-- 기술 스택 목록을 추가하세요 -->\n</section>',
              solution: '<section id="about">\n  <h2>About Me</h2>\n  <p>안녕하세요! 코딩을 사랑하는 학생 개발자입니다.</p>\n  <h3>기술 스택</h3>\n  <ul>\n    <li>HTML/CSS</li>\n    <li>JavaScript</li>\n    <li>Python</li>\n  </ul>\n</section>',
              hints: ['p 태그로 자기소개를 작성하세요', 'ul과 li 태그로 기술 목록을 만들어요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '소개 섹션을 멋지게 완성했어요!',
                good: '자기소개가 잘 작성되었어요!',
                partial: '기술 스택 목록을 ul/li로 추가해보세요.',
                wrong: 'p 태그로 소개글을, ul/li 태그로 기술 목록을 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '프로젝트 카드 수정',
              description: '포트폴리오의 프로젝트 카드 HTML에서 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '<article class="project-card">\n  <img src="game.png">\n  <h3>웹 게임</h3>\n  <p>JavaScript로 만든 재미있는 게임<p>\n  <div class="tags">\n    <span>HTML<span>\n    <span>JS</span>\n  </div>\n  <a href="#">데모 보기<a>\n</article>',
              solution: '<article class="project-card">\n  <img src="game.png" alt="웹 게임 스크린샷">\n  <h3>웹 게임</h3>\n  <p>JavaScript로 만든 재미있는 게임</p>\n  <div class="tags">\n    <span>HTML</span>\n    <span>JS</span>\n  </div>\n  <a href="#">데모 보기</a>\n</article>',
              hints: ['닫는 태그가 빠진 곳을 찾아보세요', 'img 태그에 alt 속성이 필요해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '모든 오류를 완벽하게 수정했어요!',
                good: '대부분의 오류를 잘 찾았어요!',
                partial: '닫는 태그와 alt 속성을 다시 확인하세요.',
                wrong: 'p, span, a 태그의 닫는 태그를 확인하고, img에 alt를 추가하세요.'
              }
            },
            {
              id: 'c4',
              title: '포트폴리오 네비게이션 구현',
              description: '포트폴리오 상단 네비게이션 바를 직접 작성합니다.',
              difficulty: 'medium',
              starterCode: '<nav>\n  <!-- 홈, 소개, 프로젝트, 연락처 링크를 만드세요 -->\n  <!-- 각 링크는 해당 섹션의 id로 이동해야 합니다 -->\n</nav>',
              solution: '<nav>\n  <a href="#home">홈</a>\n  <a href="#about">소개</a>\n  <a href="#projects">프로젝트</a>\n  <a href="#contact">연락처</a>\n</nav>',
              hints: ['a 태그의 href에 #id를 사용하면 해당 섹션으로 이동해요', '각 섹션에 대응하는 id가 있어야 해요', '네비게이션은 보통 4-6개 링크가 적당해요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '네비게이션을 완벽하게 구현했어요!',
                good: '링크 구조가 잘 되어있어요!',
                partial: 'href에 #을 사용해서 페이지 내 이동을 구현하세요.',
                wrong: 'a 태그와 href="#id" 문법을 복습한 후 다시 시도하세요.'
              }
            },
            {
              id: 'c5',
              title: '완성형 포트폴리오 통합',
              description: '모든 섹션을 통합한 포트폴리오 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <!-- 네비게이션, 헤더, 소개, 프로젝트(2개), 연락처, 푸터를 모두 포함하세요 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <nav>\n    <a href="#about">소개</a>\n    <a href="#projects">프로젝트</a>\n    <a href="#contact">연락처</a>\n  </nav>\n  <header>\n    <h1>홍길동</h1>\n    <p>웹 개발자 지망생</p>\n  </header>\n  <section id="about">\n    <h2>About Me</h2>\n    <p>코딩을 좋아하는 학생입니다.</p>\n  </section>\n  <section id="projects">\n    <h2>Projects</h2>\n    <article>\n      <h3>프로젝트 1</h3>\n      <p>설명</p>\n    </article>\n    <article>\n      <h3>프로젝트 2</h3>\n      <p>설명</p>\n    </article>\n  </section>\n  <section id="contact">\n    <h2>Contact</h2>\n    <p>email@example.com</p>\n  </section>\n  <footer>\n    <p>Copyright 2024</p>\n  </footer>\n</body>\n</html>',
              hints: ['시맨틱 태그를 적극 활용하세요', '각 섹션에 고유한 id를 부여하세요', '프로젝트는 article 태그로 감싸세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '완벽한 포트폴리오 구조예요! 모든 섹션이 잘 통합되었어요!',
                good: '전체 구조가 훌륭해요!',
                partial: '일부 섹션이 빠졌어요. 모든 섹션을 포함시키세요.',
                wrong: 'nav, header, section, footer 태그를 순서대로 배치해보세요.'
              }
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
                    challenges: [
            {
              id: 'c1',
              title: '와이어프레임 구조 분석',
              description: '와이어프레임에서 HTML 구조를 파악합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 이 와이어프레임을 HTML로 변환하세요 -->\n<!-- [헤더: 로고 | 메뉴] -->\n<!-- [메인: 제목, 설명] -->\n<!-- [푸터: 저작권] -->',
              solution: '<header>\n  <div class="logo">My Site</div>\n  <nav>\n    <a href="#">메뉴1</a>\n    <a href="#">메뉴2</a>\n  </nav>\n</header>\n<main>\n  <h1>제목</h1>\n  <p>설명</p>\n</main>\n<footer>\n  <p>&copy; 2024</p>\n</footer>',
              hints: ['와이어프레임의 각 영역을 시맨틱 태그로 변환하세요', '헤더에는 로고와 네비게이션이 들어가요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '와이어프레임을 HTML로 완벽하게 변환했어요!',
                good: '구조 변환을 잘 했어요!',
                partial: '시맨틱 태그를 더 활용해보세요.',
                wrong: 'header, main, footer로 큰 영역을 먼저 나눠보세요.'
              }
            },
            {
              id: 'c2',
              title: '레이아웃 설계 분석',
              description: '2단 레이아웃 와이어프레임을 분석합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 사이드바 + 메인 콘텐츠 레이아웃 -->\n<div class="layout">\n  <!-- 왼쪽: 사이드바(메뉴 목록) -->\n  <!-- 오른쪽: 메인 콘텐츠 -->\n</div>',
              solution: '<div class="layout">\n  <aside class="sidebar">\n    <nav>\n      <ul>\n        <li><a href="#">메뉴 1</a></li>\n        <li><a href="#">메뉴 2</a></li>\n        <li><a href="#">메뉴 3</a></li>\n      </ul>\n    </nav>\n  </aside>\n  <main class="content">\n    <h1>메인 콘텐츠</h1>\n    <p>여기에 내용이 들어갑니다.</p>\n  </main>\n</div>',
              hints: ['사이드바는 aside 태그를 사용해요', '메뉴는 nav와 ul/li로 구성해요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '2단 레이아웃을 완벽하게 구현했어요!',
                good: '레이아웃 구조가 좋아요!',
                partial: 'aside와 main 태그를 활용해보세요.',
                wrong: 'aside 태그로 사이드바를, main 태그로 메인 영역을 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '반응형 와이어프레임 수정',
              description: '모바일 대응 HTML 구조에서 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <!-- 반응형을 위한 메타태그가 빠졌어요! -->\n  <title>반응형 사이트</title>\n</head>\n<body>\n  <header>\n    <h1>My Portfolio</h1>\n  </header>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>반응형 사이트</title>\n</head>\n<body>\n  <header>\n    <h1>My Portfolio</h1>\n  </header>\n</body>\n</html>',
              hints: ['모바일 반응형에는 viewport 메타태그가 필수예요', 'width=device-width를 사용하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'viewport 메타태그를 정확하게 추가했어요!',
                good: '반응형 설정을 잘 이해했어요!',
                partial: 'viewport 메타태그의 content 값을 확인하세요.',
                wrong: 'meta name="viewport" content="width=device-width, initial-scale=1.0" 을 추가하세요.'
              }
            },
            {
              id: 'c4',
              title: '그리드 레이아웃 구현',
              description: '와이어프레임 기반 카드 그리드를 CSS Grid로 구현합니다.',
              difficulty: 'medium',
              starterCode: '/* 3열 카드 그리드 와이어프레임 구현 */\n.card-grid {\n  /* 3개 열로 나누세요 */\n  /* 카드 사이 간격 20px */\n}\n\n.card {\n  /* 카드 스타일 */\n}',
              solution: '.card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 20px;\n}\n\n.card {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 16px;\n  background: white;\n}',
              hints: ['display: grid를 사용하세요', 'grid-template-columns로 열 수를 지정해요', 'gap으로 카드 사이 간격을 넣어요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: 'CSS Grid를 완벽하게 활용했어요!',
                good: '그리드 레이아웃이 잘 구현되었어요!',
                partial: 'grid-template-columns 속성을 확인하세요.',
                wrong: 'display: grid와 grid-template-columns: repeat(3, 1fr)을 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '전체 페이지 와이어프레임 구현',
              description: '복잡한 와이어프레임을 HTML+CSS로 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 전체 페이지 레이아웃 -->\n<!-- 헤더(네비게이션) + 히어로 + 3열 카드 + 푸터 -->\n<style>\n  /* 스타일을 작성하세요 */\n</style>',
              solution: '<style>\n  * { margin: 0; box-sizing: border-box; }\n  body { font-family: sans-serif; }\n  nav { display: flex; justify-content: space-between; padding: 1rem; background: #333; color: white; }\n  .hero { text-align: center; padding: 4rem 2rem; background: #667eea; color: white; }\n  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding: 2rem; }\n  .card { border: 1px solid #ddd; padding: 1rem; border-radius: 8px; }\n  footer { text-align: center; padding: 2rem; background: #333; color: white; }\n</style>\n<nav>\n  <span>Logo</span>\n  <div><a href="#">About</a> <a href="#">Work</a></div>\n</nav>\n<section class="hero">\n  <h1>Welcome</h1>\n  <p>My Portfolio</p>\n</section>\n<section class="cards">\n  <article class="card"><h3>Project 1</h3><p>Description</p></article>\n  <article class="card"><h3>Project 2</h3><p>Description</p></article>\n  <article class="card"><h3>Project 3</h3><p>Description</p></article>\n</section>\n<footer><p>Copyright 2024</p></footer>',
              hints: ['큰 영역부터 먼저 배치하세요', 'Flexbox와 Grid를 조합하세요', '히어로 섹션에는 큰 제목과 설명을 넣으세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '전체 페이지를 와이어프레임 그대로 완벽하게 구현했어요!',
                good: '레이아웃 구현이 훌륭해요!',
                partial: '카드 그리드 부분을 CSS Grid로 다시 구현해보세요.',
                wrong: '각 섹션을 순서대로 배치하고 CSS를 적용해보세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1', title: '시맨틱 태그 기본', description: '시맨틱 HTML 태그의 올바른 사용법을 연습합니다.', difficulty: 'easy',
              starterCode: '<!-- div 대신 시맨틱 태그를 사용하세요 -->\n<div class="header">\n  <div class="nav">메뉴</div>\n</div>\n<div class="content">본문</div>\n<div class="footer">푸터</div>',
              solution: '<header>\n  <nav>메뉴</nav>\n</header>\n<main>본문</main>\n<footer>푸터</footer>',
              hints: ['header, nav, main, footer 태그를 사용하세요', 'div를 의미에 맞는 태그로 바꾸세요', 'main 태그는 페이지당 하나만 사용하세요'], estimatedMinutes: 3,
              feedback: { perfect: '시맨틱 태그를 완벽하게 변환했어요!', good: '태그 사용이 정확해요!', partial: 'main 태그도 사용해보세요.', wrong: 'div를 header, nav, main, footer로 바꾸세요.' }
            },
            {
              id: 'c2', title: '섹션 구조화', description: '포트폴리오 페이지의 섹션을 시맨틱하게 구조화합니다.', difficulty: 'easy',
              starterCode: '<!-- 포트폴리오 섹션을 시맨틱 태그로 변환하세요 -->\n<div id="about">\n  <h2>소개</h2>\n  <p>저는 학생 개발자입니다.</p>\n</div>\n<div id="projects">\n  <h2>프로젝트</h2>\n  <div class="project">프로젝트 1</div>\n</div>',
              solution: '<section id="about">\n  <h2>소개</h2>\n  <p>저는 학생 개발자입니다.</p>\n</section>\n<section id="projects">\n  <h2>프로젝트</h2>\n  <article class="project">\n    <h3>프로젝트 1</h3>\n    <p>설명</p>\n  </article>\n</section>',
              hints: ['section으로 큰 영역을 감싸세요', 'article로 독립적인 콘텐츠를 감싸세요', '각 section에 제목(h2)이 있어야 해요'], estimatedMinutes: 5,
              feedback: { perfect: '섹션 구조화를 완벽하게 했어요!', good: 'section과 article 사용이 정확해요!', partial: 'article 태그도 사용해보세요.', wrong: 'div를 section과 article로 바꾸세요.' }
            },
            {
              id: 'c3', title: '접근성 향상', description: '포트폴리오 HTML의 접근성 문제를 수정합니다.', difficulty: 'easy',
              starterCode: '<!-- 접근성 문제를 수정하세요 -->\n<img src="photo.jpg">\n<a href="#">클릭</a>\n<div onclick="submit()">제출</div>\n<input type="text">',
              solution: '<img src="photo.jpg" alt="프로필 사진">\n<a href="#projects">프로젝트 보기</a>\n<button onclick="submit()">제출</button>\n<label for="name">이름</label>\n<input type="text" id="name">',
              hints: ['img에 alt 속성을 추가하세요', '의미 있는 링크 텍스트를 작성하세요', 'div 대신 button 태그를 사용하세요'], estimatedMinutes: 5,
              feedback: { perfect: '접근성을 완벽하게 개선했어요!', good: '주요 문제를 잘 수정했어요!', partial: 'label과 input을 연결하세요.', wrong: 'alt, 의미있는 텍스트, button, label을 추가하세요.' }
            },
            {
              id: 'c4', title: '포트폴리오 헤더 구현', description: '포트폴리오 헤더와 네비게이션을 직접 구현합니다.', difficulty: 'medium',
              starterCode: '<!-- 포트폴리오 헤더를 완성하세요 -->\n<!-- 로고, 네비게이션(4개 링크), 모바일 메뉴 버튼 포함 -->\n<header>\n  <!-- 여기에 구현 -->\n</header>',
              solution: '<header>\n  <div class="logo">\n    <h1>My Portfolio</h1>\n  </div>\n  <nav>\n    <a href="#about">소개</a>\n    <a href="#skills">기술</a>\n    <a href="#projects">프로젝트</a>\n    <a href="#contact">연락처</a>\n  </nav>\n  <button class="menu-btn" aria-label="메뉴 열기">\n    &#9776;\n  </button>\n</header>',
              hints: ['aria-label로 버튼에 설명을 추가하세요', '&#9776;은 햄버거 메뉴 아이콘입니다', 'nav 안에 링크를 배치하세요'], estimatedMinutes: 8,
              feedback: { perfect: '헤더를 완벽하게 구현했어요!', good: '네비게이션 구조가 좋아요!', partial: '모바일 메뉴 버튼도 추가하세요.', wrong: 'header 안에 logo, nav, button을 배치하세요.' }
            },
            {
              id: 'c5', title: '프로젝트 카드 섹션', description: '포트폴리오의 프로젝트 카드 섹션을 완성합니다.', difficulty: 'medium',
              starterCode: '<!-- 프로젝트 카드 2개를 포함한 섹션을 만드세요 -->\n<!-- 각 카드: 이미지, 제목, 설명, 기술 태그, 데모 링크 -->\n<section id="projects">\n  <h2>Projects</h2>\n  <!-- 여기에 카드 구현 -->\n</section>',
              solution: '<section id="projects">\n  <h2>Projects</h2>\n  <div class="project-grid">\n    <article class="card">\n      <img src="project1.png" alt="할 일 앱 스크린샷">\n      <h3>할 일 관리 앱</h3>\n      <p>JavaScript로 만든 할 일 관리 앱</p>\n      <div class="tags">\n        <span>HTML</span><span>CSS</span><span>JS</span>\n      </div>\n      <a href="#" class="btn">Demo</a>\n    </article>\n    <article class="card">\n      <img src="project2.png" alt="게임 스크린샷">\n      <h3>웹 게임</h3>\n      <p>Canvas로 만든 게임</p>\n      <div class="tags">\n        <span>HTML</span><span>Canvas</span><span>JS</span>\n      </div>\n      <a href="#" class="btn">Demo</a>\n    </article>\n  </div>\n</section>',
              hints: ['article 태그로 각 프로젝트를 감싸세요', 'img에 alt 속성을 꼭 추가하세요', 'span으로 기술 태그를 만드세요'], estimatedMinutes: 10,
              feedback: { perfect: '프로젝트 섹션을 완벽하게 구현했어요!', good: '카드 구조가 잘 되었어요!', partial: '기술 태그와 링크를 추가하세요.', wrong: 'article 안에 img, h3, p, tags, a를 배치하세요.' }
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
                    challenges: [
            {
              id: 'c1', title: 'CSS 변수 정의하기', description: 'CSS 커스텀 프로퍼티를 정의하고 사용합니다.', difficulty: 'easy',
              starterCode: ':root {\n  /* primary, secondary, text 색상 변수를 정의하세요 */\n}\n\nh1 {\n  /* primary 변수를 사용하세요 */\n  color: ;\n}',
              solution: ':root {\n  --primary: #667eea;\n  --secondary: #764ba2;\n  --text: #333333;\n}\n\nh1 {\n  color: var(--primary);\n}\n\np {\n  color: var(--text);\n}',
              hints: ['--이름 형식으로 변수를 만들어요', 'var(--이름)으로 변수를 사용해요', ':root는 최상위 요소를 의미해요'], estimatedMinutes: 3,
              feedback: { perfect: 'CSS 변수를 완벽하게 사용했어요!', good: '변수 정의가 정확해요!', partial: 'var()로 변수를 참조해야 해요.', wrong: ':root에 --이름: 값; 형식으로 변수를 만드세요.' }
            },
            {
              id: 'c2', title: '그라데이션 배경 만들기', description: 'linear-gradient로 그라데이션 배경을 만듭니다.', difficulty: 'easy',
              starterCode: '.hero {\n  /* 대각선 그라데이션 배경을 만드세요 */\n  /* 파란색(#667eea)에서 보라색(#764ba2)으로 */\n  color: white;\n  padding: 4rem;\n}',
              solution: '.hero {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: white;\n  padding: 4rem;\n  text-align: center;\n}',
              hints: ['linear-gradient(각도, 색1, 색2) 형식이에요', '135deg은 왼쪽 위에서 오른쪽 아래 방향이에요', 'background 속성에 gradient를 적용해요'], estimatedMinutes: 4,
              feedback: { perfect: '그라데이션을 완벽하게 적용했어요!', good: '색상 조합이 아름다워요!', partial: '각도(135deg)를 추가해보세요.', wrong: 'background: linear-gradient(135deg, 색1, 색2)를 사용하세요.' }
            },
            {
              id: 'c3', title: 'CSS 변수로 다크모드', description: 'CSS 변수로 라이트/다크 테마를 전환합니다.', difficulty: 'medium',
              starterCode: '/* 라이트/다크 테마를 CSS 변수로 구현하세요 */\n:root {\n  /* 라이트 테마 변수 */\n}\n\n[data-theme="dark"] {\n  /* 다크 테마 변수 (같은 변수명, 다른 값) */\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n}',
              solution: ':root {\n  --bg: #ffffff;\n  --text: #333333;\n  --card-bg: #f5f5f5;\n  --primary: #667eea;\n}\n\n[data-theme="dark"] {\n  --bg: #0f172a;\n  --text: #e2e8f0;\n  --card-bg: #1e293b;\n  --primary: #818cf8;\n}\n\nbody {\n  background: var(--bg);\n  color: var(--text);\n  transition: background 0.3s, color 0.3s;\n}\n\n.card {\n  background: var(--card-bg);\n  padding: 1rem;\n  border-radius: 8px;\n}',
              hints: ['같은 변수명으로 다른 값을 정의하면 테마 전환이 돼요', 'transition으로 부드러운 전환을 만들어요', 'data-theme 선택자가 :root 변수를 덮어씌워요'], estimatedMinutes: 8,
              feedback: { perfect: '다크모드 전환을 완벽하게 구현했어요!', good: '테마 변수 구조가 좋아요!', partial: 'transition을 추가하면 부드럽게 전환돼요.', wrong: ':root와 [data-theme] 모두에 같은 변수명을 정의하세요.' }
            },
            {
              id: 'c4', title: '카드 호버 효과', description: '프로젝트 카드에 CSS 변수와 호버 효과를 적용합니다.', difficulty: 'medium',
              starterCode: '/* 프로젝트 카드 스타일을 완성하세요 */\n.project-card {\n  /* CSS 변수와 그림자, 둥근 모서리 적용 */\n}\n\n.project-card:hover {\n  /* 떠오르는 호버 효과 */\n}',
              solution: '.project-card {\n  background: var(--card-bg, white);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n\n.project-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.15);\n}\n\n.project-card img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n\n.project-card .content {\n  padding: 1rem;\n}',
              hints: ['var(--name, 기본값) 형식으로 기본값을 줄 수 있어요', 'hover에 transform과 shadow를 변경하면 효과적이에요', 'transition으로 부드러운 변화를 만드세요'], estimatedMinutes: 10,
              feedback: { perfect: '카드 스타일이 세련되게 완성되었어요!', good: '호버 효과가 자연스러워요!', partial: 'transition을 추가해보세요.', wrong: 'box-shadow와 border-radius로 카드를 만드세요.' }
            },
            {
              id: 'c5', title: '포트폴리오 통합 스타일', description: 'CSS 변수 + 그라데이션 + 호버 + 반응형을 통합합니다.', difficulty: 'hard',
              starterCode: '/* 포트폴리오 전체 스타일을 완성하세요 */\n/* CSS 변수 정의 -> 기본 스타일 -> 그라데이션 헤더 -> 카드 -> 반응형 */\n:root {\n  /* 변수 정의 */\n}',
              solution: ':root {\n  --primary: #667eea;\n  --secondary: #764ba2;\n  --bg: #f8f9fa;\n  --text: #333;\n  --card-bg: white;\n}\n\n* { margin: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; background: var(--bg); color: var(--text); }\n\nheader {\n  background: linear-gradient(135deg, var(--primary), var(--secondary));\n  color: white;\n  padding: 4rem 2rem;\n  text-align: center;\n}\n\nnav { display: flex; justify-content: center; gap: 2rem; padding: 1rem; }\nnav a { color: var(--primary); text-decoration: none; }\nnav a:hover { text-decoration: underline; }\n\n.projects { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; padding: 2rem; max-width: 1000px; margin: 0 auto; }\n\n.card { background: var(--card-bg); border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s; }\n.card:hover { transform: translateY(-4px); }\n\nfooter { background: var(--text); color: var(--bg); text-align: center; padding: 2rem; }',
              hints: ['CSS 변수로 색상을 통일하세요', 'auto-fit과 minmax로 반응형 그리드를 만드세요', 'gradient에 CSS 변수를 활용하세요'], estimatedMinutes: 15,
              feedback: { perfect: '완성도 높은 포트폴리오 스타일이에요!', good: '전체 스타일이 일관적이에요!', partial: '반응형 그리드를 추가해보세요.', wrong: 'CSS 변수 정의부터 시작해서 각 섹션 스타일을 추가하세요.' }
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
                    challenges: [
            { id: 'c1', title: '기본 카드 HTML', description: '프로젝트 카드의 기본 HTML을 작성합니다.', difficulty: 'easy',
              starterCode: '<article class="card">\n  <!-- 이미지, 제목, 설명, 버튼을 추가하세요 -->\n</article>',
              solution: '<article class="card">\n  <img src="project.png" alt="프로젝트">\n  <div class="card-body">\n    <h3>웹 게임</h3>\n    <p>JavaScript로 만든 게임</p>\n    <a href="#" class="btn">보기</a>\n  </div>\n</article>',
              hints: ['article로 카드를 감싸세요', 'img에 alt 필수'], estimatedMinutes: 3,
              feedback: { perfect: '카드 HTML이 완벽해요!', good: '구조가 좋아요!', partial: 'alt 속성을 추가하세요.', wrong: 'img, h3, p, a를 순서대로 넣으세요.' } },
            { id: 'c2', title: '카드 CSS 스타일', description: '카드에 CSS 스타일을 적용합니다.', difficulty: 'easy',
              starterCode: '.card {\n  /* 그림자, 둥근 모서리, 넘침 숨기기 */\n}\n.card img {\n  /* 이미지 전체 너비 */\n}',
              solution: '.card {\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  overflow: hidden;\n  background: white;\n}\n.card img {\n  width: 100%;\n  height: 180px;\n  object-fit: cover;\n}\n.card-body {\n  padding: 1rem;\n}',
              hints: ['border-radius로 둥근 모서리', 'overflow: hidden으로 넘침 숨기기'], estimatedMinutes: 5,
              feedback: { perfect: '카드 스타일이 세련되어요!', good: '핵심 속성을 잘 사용했어요!', partial: 'overflow: hidden을 추가하세요.', wrong: 'border-radius, box-shadow, overflow를 사용하세요.' } },
            { id: 'c3', title: '카드 호버 효과', description: '마우스 올릴 때 카드가 떠오르는 효과를 만듭니다.', difficulty: 'medium',
              starterCode: '.card {\n  /* transition 추가 */\n}\n.card:hover {\n  /* 떠오르는 효과 */\n}',
              solution: '.card {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 24px rgba(0,0,0,0.15);\n}',
              hints: ['transition으로 부드러운 변화를', 'translateY로 위로 이동'], estimatedMinutes: 7,
              feedback: { perfect: '호버 효과가 자연스러워요!', good: 'transition 사용이 정확해요!', partial: 'translateY 값을 음수로 하세요.', wrong: 'transition과 transform: translateY를 사용하세요.' } },
            { id: 'c4', title: '기술 태그 구현', description: '카드 안에 기술 스택 태그를 추가합니다.', difficulty: 'medium',
              starterCode: '<!-- 기술 태그 스타일 -->\n<style>\n.tags { /* 가로 배치 */ }\n.tag { /* 둥근 알약 모양 */ }\n</style>\n<div class="tags">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JS</span>\n</div>',
              solution: '<style>\n.tags { display: flex; gap: 6px; flex-wrap: wrap; padding: 0.5rem 1rem; }\n.tag { background: #e8e8ff; color: #6366f1; padding: 2px 10px; border-radius: 12px; font-size: 0.8rem; }\n</style>\n<div class="tags">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JS</span>\n</div>',
              hints: ['flex로 가로 배치, gap으로 간격', 'border-radius로 알약 모양'], estimatedMinutes: 8,
              feedback: { perfect: '기술 태그가 세련돼요!', good: '레이아웃이 깔끔해요!', partial: 'flex-wrap을 추가하세요.', wrong: 'display: flex, gap, border-radius를 사용하세요.' } },
            { id: 'c5', title: '카드 그리드 레이아웃', description: '여러 카드를 반응형 그리드로 배치합니다.', difficulty: 'hard',
              starterCode: '.card-grid {\n  /* 반응형 3열 그리드 */\n}',
              solution: '.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n  padding: 2rem;\n  max-width: 1000px;\n  margin: 0 auto;\n}',
              hints: ['auto-fit과 minmax로 반응형을', 'max-width로 최대 너비 제한'], estimatedMinutes: 10,
              feedback: { perfect: '반응형 그리드가 완벽해요!', good: 'auto-fit 사용이 좋아요!', partial: 'minmax(280px, 1fr)을 사용하세요.', wrong: 'display: grid + auto-fit + minmax를 사용하세요.' } }
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
                    challenges: [
            { id: 'c1', title: '프로그레스 바 HTML', description: '프로그레스 바의 HTML 구조를 만듭니다.', difficulty: 'easy',
              starterCode: '<!-- 스킬 프로그레스 바를 만드세요 -->\n<div class="skill">\n  <!-- 스킬명 + 퍼센트 + 바 -->\n</div>',
              solution: '<div class="skill">\n  <div class="skill-info">\n    <span>HTML/CSS</span>\n    <span>90%</span>\n  </div>\n  <div class="progress-bar">\n    <div class="progress-fill" style="width: 90%"></div>\n  </div>\n</div>',
              hints: ['바깥 div가 트랙, 안쪽 div가 채움'], estimatedMinutes: 3,
              feedback: { perfect: '프로그레스 바 구조가 완벽해요!', good: 'HTML 구조가 좋아요!', partial: 'width로 진행률을 표시하세요.', wrong: '바깥 div 안에 채움 div를 넣으세요.' } },
            { id: 'c2', title: '프로그레스 바 CSS', description: '프로그레스 바에 스타일을 적용합니다.', difficulty: 'easy',
              starterCode: '.progress-bar {\n  /* 트랙 스타일 */\n}\n.progress-fill {\n  /* 채움 스타일 */\n}',
              solution: '.progress-bar {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: linear-gradient(90deg, #667eea, #764ba2);\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}',
              hints: ['overflow: hidden으로 넘침 방지', 'gradient로 멋진 색상을'], estimatedMinutes: 5,
              feedback: { perfect: '프로그레스 바가 아름다워요!', good: '그라데이션이 멋져요!', partial: 'transition을 추가하세요.', wrong: 'height, background, border-radius를 설정하세요.' } },
            { id: 'c3', title: '스킬 목록 표시', description: '여러 스킬의 프로그레스 바를 표시합니다.', difficulty: 'medium',
              starterCode: '<!-- 3개 스킬을 프로그레스 바로 표시하세요 -->\n<div class="skills">\n  <!-- HTML 90%, JS 70%, Python 50% -->\n</div>',
              solution: '<div class="skills">\n  <div class="skill">\n    <div class="skill-info"><span>HTML/CSS</span><span>90%</span></div>\n    <div class="progress-bar"><div class="progress-fill" style="width:90%"></div></div>\n  </div>\n  <div class="skill">\n    <div class="skill-info"><span>JavaScript</span><span>70%</span></div>\n    <div class="progress-bar"><div class="progress-fill" style="width:70%"></div></div>\n  </div>\n  <div class="skill">\n    <div class="skill-info"><span>Python</span><span>50%</span></div>\n    <div class="progress-bar"><div class="progress-fill" style="width:50%"></div></div>\n  </div>\n</div>',
              hints: ['각 스킬을 같은 구조로 반복하세요', 'width 값만 다르게 설정해요'], estimatedMinutes: 7,
              feedback: { perfect: '스킬 목록이 깔끔해요!', good: '반복 구조가 일관적이에요!', partial: '각 바의 width를 다르게 하세요.', wrong: '같은 HTML 구조를 반복하고 width만 변경하세요.' } },
            { id: 'c4', title: '애니메이션 프로그레스', description: '페이지 로드 시 바가 채워지는 애니메이션을 만듭니다.', difficulty: 'medium',
              starterCode: '/* 프로그레스 바 채움 애니메이션 */\n@keyframes fillBar {\n  /* 0%에서 목표까지 */\n}\n.progress-fill {\n  /* 애니메이션 적용 */\n}',
              solution: '@keyframes fillBar {\n  from { width: 0; }\n  to { width: var(--target-width, 100%); }\n}\n.progress-fill {\n  animation: fillBar 1s ease-out forwards;\n  height: 100%;\n  background: linear-gradient(90deg, #667eea, #764ba2);\n  border-radius: 4px;\n}',
              hints: ['@keyframes로 from/to를 정의하세요', 'forwards로 애니메이션 끝 상태를 유지해요'], estimatedMinutes: 10,
              feedback: { perfect: '애니메이션이 부드럽게 작동해요!', good: '@keyframes 사용이 정확해요!', partial: 'forwards를 추가하세요.', wrong: '@keyframes에 from/to를 정의하고 animation 속성을 사용하세요.' } },
            { id: 'c5', title: '인터랙티브 프로그레스 바', description: 'JavaScript로 동적 프로그레스 바를 만듭니다.', difficulty: 'hard',
              starterCode: '// 버튼 클릭 시 프로그레스 바를 업데이트하세요\nconst bar = document.querySelector(".progress-fill");\nconst label = document.querySelector(".percent");\nlet progress = 0;\n\nfunction increment() {\n  // 10%씩 증가, 100% 넘지 않도록\n}',
              solution: 'const bar = document.querySelector(".progress-fill");\nconst label = document.querySelector(".percent");\nlet progress = 0;\n\nfunction increment() {\n  if (progress < 100) {\n    progress += 10;\n    bar.style.width = progress + "%";\n    label.textContent = progress + "%";\n    if (progress >= 100) {\n      label.textContent = "완료!";\n    }\n  }\n}',
              hints: ['style.width로 너비를 변경해요', '100%를 넘지 않도록 조건을 확인하세요'], estimatedMinutes: 12,
              feedback: { perfect: '인터랙티브 바가 완벽해요!', good: '조건 처리가 정확해요!', partial: '100% 초과 방지를 추가하세요.', wrong: 'bar.style.width와 textContent를 업데이트하세요.' } }
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
                    challenges: [
            {
              id: 'c1', title: 'CSS transition 기본', description: 'transition으로 부드러운 변화를 만듭니다.', difficulty: 'easy',
              starterCode: '.btn {\n  background: #667eea;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  /* 호버 시 부드러운 전환 추가 */\n}\n\n.btn:hover {\n  background: #764ba2;\n}',
              solution: '.btn {\n  background: #667eea;\n  color: white;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.3s ease, transform 0.2s ease;\n}\n\n.btn:hover {\n  background: #764ba2;\n  transform: scale(1.05);\n}',
              hints: ['transition: 속성 시간 ease 형식이에요', '여러 속성은 쉼표로 구분해요', 'ease는 부드러운 속도 곡선이에요'], estimatedMinutes: 3,
              feedback: { perfect: 'transition을 완벽하게 적용했어요!', good: '부드러운 전환이에요!', partial: 'transform도 transition에 추가해보세요.', wrong: 'transition: background 0.3s ease를 .btn에 추가하세요.' }
            },
            {
              id: 'c2', title: '@keyframes 페이드인', description: '@keyframes로 페이드인 애니메이션을 만듭니다.', difficulty: 'easy',
              starterCode: '/* 페이드인 애니메이션을 만드세요 */\n@keyframes fadeIn {\n  /* from: 투명+아래, to: 불투명+제자리 */\n}\n\n.fade-in {\n  /* fadeIn 애니메이션 적용 */\n}',
              solution: '@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.fade-in {\n  animation: fadeIn 0.6s ease-out forwards;\n}',
              hints: ['opacity로 투명도를 제어해요', 'translateY로 위아래 이동 효과를 만들어요', 'forwards는 끝 상태를 유지해요'], estimatedMinutes: 5,
              feedback: { perfect: '페이드인 애니메이션이 완벽해요!', good: '@keyframes 사용이 정확해요!', partial: 'forwards를 추가하면 끝 상태가 유지돼요.', wrong: '@keyframes에 from/to를 정의하고 animation으로 적용하세요.' }
            },
            {
              id: 'c3', title: '카드 순차 등장', description: '카드가 순서대로 나타나는 애니메이션을 만듭니다.', difficulty: 'medium',
              starterCode: '/* 카드가 순서대로 나타나는 애니메이션 */\n@keyframes slideUp {\n  /* 아래에서 위로 나타남 */\n}\n\n.card { /* 기본: 숨김 상태 */ }\n.card:nth-child(1) { /* 0초 지연 */ }\n.card:nth-child(2) { /* 0.2초 지연 */ }\n.card:nth-child(3) { /* 0.4초 지연 */ }',
              solution: '@keyframes slideUp {\n  from { opacity: 0; transform: translateY(30px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.card {\n  opacity: 0;\n  animation: slideUp 0.5s ease forwards;\n}\n\n.card:nth-child(1) { animation-delay: 0s; }\n.card:nth-child(2) { animation-delay: 0.2s; }\n.card:nth-child(3) { animation-delay: 0.4s; }',
              hints: ['animation-delay로 지연 시간을 설정해요', 'nth-child로 순서별 다른 지연을 줘요', 'opacity: 0으로 초기 상태를 숨겨요'], estimatedMinutes: 7,
              feedback: { perfect: '순차 애니메이션이 멋져요!', good: 'delay 설정이 정확해요!', partial: 'animation-delay를 nth-child별로 다르게 하세요.', wrong: 'animation-delay: 0s, 0.2s, 0.4s를 각 카드에 적용하세요.' }
            },
            {
              id: 'c4', title: '로딩 스피너 만들기', description: 'CSS만으로 회전하는 로딩 스피너를 만듭니다.', difficulty: 'medium',
              starterCode: '/* 회전하는 로딩 스피너 */\n@keyframes spin {\n  /* 0도에서 360도 회전 */\n}\n\n.spinner {\n  /* 원형 + 부분 테두리 + 회전 애니메이션 */\n  width: 40px;\n  height: 40px;\n}',
              solution: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #e5e7eb;\n  border-top: 4px solid #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}',
              hints: ['border-top만 다른 색으로 하면 스피너가 돼요', 'infinite로 계속 회전시켜요', 'linear는 일정한 속도로 회전해요'], estimatedMinutes: 10,
              feedback: { perfect: '로딩 스피너가 완벽해요!', good: '회전 애니메이션이 자연스러워요!', partial: 'infinite 키워드를 추가하세요.', wrong: 'border-top 색상을 다르게 하고 spin 애니메이션을 적용하세요.' }
            },
            {
              id: 'c5', title: '포트폴리오 애니메이션 통합', description: '포트폴리오에 페이드인 + 슬라이드업 + 펄스 애니메이션을 통합합니다.', difficulty: 'hard',
              starterCode: '/* 포트폴리오에 적용할 애니메이션을 모두 만드세요 */\n/* 1. 헤더 텍스트: 페이드인 */\n/* 2. 프로젝트 카드: 순차 슬라이드업 */\n/* 3. CTA 버튼: 반복 펄스 */',
              solution: '@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }\n@keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }\n\nheader h1 { animation: fadeIn 1s ease; }\nheader p { animation: fadeIn 1s ease 0.3s both; }\n\n.card { animation: slideUp 0.6s ease forwards; opacity: 0; }\n.card:nth-child(2) { animation-delay: 0.2s; }\n.card:nth-child(3) { animation-delay: 0.4s; }\n\n.cta-btn { animation: pulse 2s ease infinite; }',
              hints: ['여러 @keyframes를 정의하세요', 'both는 forwards와 backwards를 합친 것이에요', 'infinite는 무한 반복이에요'], estimatedMinutes: 15,
              feedback: { perfect: '애니메이션 통합이 완벽해요! 프로 수준이에요!', good: '여러 애니메이션을 잘 조합했어요!', partial: 'pulse 애니메이션도 추가해보세요.', wrong: '각 애니메이션을 @keyframes로 정의하고 적절한 요소에 적용하세요.' }
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
                    challenges: [
            {
              id: 'c1',
              title: '배포용 메타태그 작성',
              description: '웹사이트 배포에 필요한 메타태그를 이해합니다.',
              difficulty: 'easy',
              starterCode: '<head>\n  <meta charset="UTF-8">\n  <!-- SEO와 SNS 공유를 위한 메타태그를 추가하세요 -->\n  <title>나의 포트폴리오</title>\n</head>',
              solution: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="홍길동의 웹 개발 포트폴리오">\n  <meta property="og:title" content="나의 포트폴리오">\n  <meta property="og:description" content="웹 개발 프로젝트 모음">\n  <title>나의 포트폴리오</title>\n</head>',
              hints: ['viewport 메타태그는 모바일 대응에 필수예요', 'og: 태그는 SNS 공유 시 미리보기에 사용돼요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '배포용 메타태그를 완벽하게 작성했어요!',
                good: '메타태그의 역할을 잘 이해했어요!',
                partial: 'og:title, og:description 태그도 추가해보세요.',
                wrong: 'meta 태그의 name과 content 속성을 확인하세요.'
              }
            },
            {
              id: 'c2',
              title: '상대 경로 점검',
              description: '배포 시 깨지는 경로 문제를 분석합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 어떤 경로가 배포 시 문제가 될까요? -->\n<img src="C:/Users/me/Desktop/photo.jpg" alt="사진">\n<link rel="stylesheet" href="./styles/main.css">\n<script src="/scripts/app.js"></script>\n<img src="images/logo.png" alt="로고">',
              solution: '<!-- 절대 경로(C:/)는 배포 시 깨져요! 상대 경로를 사용하세요 -->\n<img src="./images/photo.jpg" alt="사진">\n<link rel="stylesheet" href="./styles/main.css">\n<script src="./scripts/app.js"></script>\n<img src="./images/logo.png" alt="로고">',
              hints: ['C:/로 시작하는 절대 경로는 배포 시 작동하지 않아요', './로 시작하는 상대 경로를 사용하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '경로 문제를 완벽하게 해결했어요!',
                good: '상대 경로의 중요성을 잘 이해했어요!',
                partial: 'C:/로 시작하는 경로를 찾아서 수정하세요.',
                wrong: '모든 파일 경로를 ./ 또는 ../ 상대 경로로 바꾸세요.'
              }
            },
            {
              id: 'c3',
              title: 'GitHub Pages 설정 수정',
              description: 'GitHub Pages 배포를 위한 파일 구조를 수정합니다.',
              difficulty: 'medium',
              starterCode: '<!-- GitHub Pages는 index.html이 루트에 있어야 해요 -->\n<!-- 현재 구조: -->\n<!-- my-project/ -->\n<!--   src/ -->\n<!--     homepage.html (이것이 메인 페이지) -->\n<!--     style.css -->\n<!-- 어떻게 수정해야 할까요? -->',
              solution: '<!-- 수정된 구조: -->\n<!-- my-project/ -->\n<!--   index.html (메인 페이지, 이름 변경!) -->\n<!--   style.css (루트로 이동) -->\n<!--   images/ -->\n<!--     logo.png -->\n\n<!-- index.html 내용 -->\n<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <link rel="stylesheet" href="style.css">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>',
              hints: ['GitHub Pages는 index.html 파일을 찾아요', '메인 페이지 파일명을 index.html로 바꾸세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'GitHub Pages 배포 구조를 완벽하게 이해했어요!',
                good: '파일 구조 수정을 잘 했어요!',
                partial: '파일명을 index.html로 바꾸는 것을 잊지 마세요.',
                wrong: 'GitHub Pages는 루트의 index.html을 메인 페이지로 사용해요.'
              }
            },
            {
              id: 'c4',
              title: '배포 체크리스트 구현',
              description: '배포 전 확인사항을 체크하는 JavaScript를 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 배포 전 체크리스트 검증 함수\nfunction validateForDeploy(html) {\n  const issues = [];\n  // 1. title 태그가 있는지 확인\n  // 2. viewport 메타태그가 있는지 확인\n  // 3. 절대 경로(C:/ 또는 D:/)가 있는지 확인\n  return issues;\n}',
              solution: 'function validateForDeploy(html) {\n  const issues = [];\n  if (!html.includes("<title>")) {\n    issues.push("title 태그가 없습니다");\n  }\n  if (!html.includes("viewport")) {\n    issues.push("viewport 메타태그가 없습니다");\n  }\n  if (html.match(/[A-Z]:\\//)) {\n    issues.push("절대 경로가 발견되었습니다");\n  }\n  if (!html.includes("alt=")) {\n    issues.push("이미지 alt 속성이 없습니다");\n  }\n  return issues;\n}',
              hints: ['includes()로 문자열 포함 여부를 확인하세요', '정규식으로 절대 경로 패턴을 찾을 수 있어요', '발견된 문제를 배열에 push하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '배포 검증 함수를 완벽하게 구현했어요!',
                good: '핵심 검증 로직이 잘 작동해요!',
                partial: '절대 경로 검사 부분을 추가해보세요.',
                wrong: 'includes()와 push()를 사용해서 조건별로 검사하세요.'
              }
            },
            {
              id: 'c5',
              title: '종합 배포 준비 페이지',
              description: '모든 배포 요구사항을 만족하는 완성 페이지를 작성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 배포 준비가 완료된 완벽한 HTML 페이지를 작성하세요 -->\n<!-- 요구사항: viewport, og태그, 상대경로, alt속성, 시맨틱 태그 -->',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="나의 포트폴리오 웹사이트">\n  <meta property="og:title" content="포트폴리오">\n  <meta property="og:description" content="웹 개발 프로젝트 모음">\n  <meta property="og:image" content="./images/preview.png">\n  <link rel="stylesheet" href="./styles/main.css">\n  <title>나의 포트폴리오</title>\n</head>\n<body>\n  <header>\n    <nav><a href="#about">소개</a> <a href="#projects">프로젝트</a></nav>\n  </header>\n  <main>\n    <section id="about">\n      <h1>홍길동</h1>\n      <img src="./images/profile.jpg" alt="프로필 사진">\n    </section>\n    <section id="projects">\n      <h2>프로젝트</h2>\n    </section>\n  </main>\n  <footer><p>&copy; 2024</p></footer>\n</body>\n</html>',
              hints: ['모든 메타태그를 빠짐없이 추가하세요', '이미지 경로는 반드시 상대 경로로!', 'og:image도 상대 경로를 사용하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '배포 준비가 완벽한 페이지예요! 실제로 바로 올릴 수 있어요!',
                good: '대부분의 배포 요구사항을 충족했어요!',
                partial: 'og 태그나 alt 속성을 빠뜨린 부분이 있어요.',
                wrong: 'viewport, og태그, 상대경로, alt속성을 모두 확인하세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '문제 정의 연습',
              description: '일상의 불편함을 코드로 해결하는 첫 단계를 연습합니다.',
              difficulty: 'easy',
              starterCode: '// 일상의 문제를 객체로 정의해보세요\nconst myProblem = {\n  problem: "",      // 어떤 불편함?\n  target: "",       // 누구를 위한 것?\n  solution: "",     // 어떻게 해결?\n  features: []      // 필요한 기능들\n};',
              solution: 'const myProblem = {\n  problem: "할 일을 자주 잊어버린다",\n  target: "학생",\n  solution: "할 일 관리 웹 앱",\n  features: ["할 일 추가", "완료 체크", "삭제", "날짜별 정렬"]\n};\nconsole.log("프로젝트:", myProblem.solution);\nconsole.log("핵심 기능:", myProblem.features.join(", "));',
              hints: ['내가 실제로 겪는 불편함을 생각해보세요', '기능은 구체적으로 적어요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '문제 정의를 명확하게 잘 했어요!',
                good: '좋은 아이디어 시작이에요!',
                partial: 'features 배열에 구체적인 기능을 추가해보세요.',
                wrong: '각 속성에 빈 문자열 대신 실제 내용을 넣어보세요.'
              }
            },
            {
              id: 'c2',
              title: '브레인스토밍 도구',
              description: '아이디어를 배열로 관리하는 코드를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 브레인스토밍: 아이디어를 자유롭게 추가하고 관리\nconst ideas = [];\n\nfunction addIdea(title, category) {\n  // 아이디어 객체를 배열에 추가하세요\n}\n\nfunction getIdeasByCategory(category) {\n  // 특정 카테고리의 아이디어만 필터링\n}',
              solution: 'const ideas = [];\n\nfunction addIdea(title, category) {\n  ideas.push({\n    id: ideas.length + 1,\n    title: title,\n    category: category,\n    createdAt: new Date().toLocaleDateString()\n  });\n}\n\nfunction getIdeasByCategory(category) {\n  return ideas.filter(idea => idea.category === category);\n}\n\naddIdea("할 일 앱", "생산성");\naddIdea("퀴즈 게임", "교육");\naddIdea("가계부", "생산성");\nconsole.log(getIdeasByCategory("생산성"));',
              hints: ['push()로 배열에 추가하세요', 'filter()로 조건에 맞는 것만 골라요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '브레인스토밍 도구를 완벽하게 구현했어요!',
                good: '배열과 필터링을 잘 활용했어요!',
                partial: 'filter 메서드를 사용해서 카테고리를 필터링하세요.',
                wrong: 'push()로 추가하고 filter()로 검색하는 패턴을 복습하세요.'
              }
            },
            {
              id: 'c3',
              title: 'MVP 기능 우선순위',
              description: 'MVP에 포함할 핵심 기능을 선별하는 코드를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// MVP 기능 우선순위 정하기\nconst features = [\n  { name: "회원가입", priority: "high", difficulty: "hard" },\n  { name: "할 일 추가", priority: "high", difficulty: "easy" },\n  { name: "다크모드", priority: "low", difficulty: "medium" },\n  { name: "할 일 삭제", priority: "high", difficulty: "easy" },\n  { name: "소셜 로그인", priority: "low", difficulty: "hard" }\n];\n\n// MVP에 포함할 기능만 필터링하세요\n// 조건: priority가 high이고 difficulty가 hard가 아닌 것\nconst mvpFeatures = features.filter(f => /* 조건 작성 */);',
              solution: 'const features = [\n  { name: "회원가입", priority: "high", difficulty: "hard" },\n  { name: "할 일 추가", priority: "high", difficulty: "easy" },\n  { name: "다크모드", priority: "low", difficulty: "medium" },\n  { name: "할 일 삭제", priority: "high", difficulty: "easy" },\n  { name: "소셜 로그인", priority: "low", difficulty: "hard" }\n];\n\nconst mvpFeatures = features.filter(f => f.priority === "high" && f.difficulty !== "hard");\nconsole.log("MVP 기능:", mvpFeatures.map(f => f.name).join(", "));',
              hints: ['filter의 조건에 &&를 사용하세요', 'priority가 "high"인 것과 difficulty가 "hard"가 아닌 것'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'MVP 기능 선별을 정확하게 했어요!',
                good: '필터링 조건이 논리적이에요!',
                partial: '두 가지 조건을 && 로 연결하세요.',
                wrong: 'filter 안에서 f.priority === "high" && f.difficulty !== "hard"를 사용하세요.'
              }
            },
            {
              id: 'c4',
              title: '프로젝트 기획 객체 구현',
              description: '프로젝트 기획서를 JavaScript 객체로 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 프로젝트 기획서를 객체로 만드세요\nconst projectPlan = {\n  // name, description, targetUser, mvpFeatures, timeline 포함\n};\n\n// 기획서를 출력하는 함수\nfunction printPlan(plan) {\n  // 기획서 내용을 보기 좋게 출력\n}',
              solution: 'const projectPlan = {\n  name: "공부 버디",\n  description: "학습 시간을 관리하는 타이머 앱",\n  targetUser: "학생",\n  mvpFeatures: ["타이머 시작/정지", "학습 기록 저장", "통계 보기"],\n  timeline: { week1: "HTML/CSS", week2: "JavaScript", week3: "테스트/배포" }\n};\n\nfunction printPlan(plan) {\n  console.log("=== " + plan.name + " ===");\n  console.log("설명: " + plan.description);\n  console.log("대상: " + plan.targetUser);\n  console.log("핵심 기능:");\n  plan.mvpFeatures.forEach((f, i) => console.log("  " + (i+1) + ". " + f));\n}\n\nprintPlan(projectPlan);',
              hints: ['객체 안에 배열과 중첩 객체를 사용할 수 있어요', 'forEach로 배열 요소를 순서대로 출력하세요', 'timeline은 중첩 객체로 만들어요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '프로젝트 기획서를 체계적으로 잘 구현했어요!',
                good: '기획 구조가 논리적이에요!',
                partial: 'mvpFeatures를 배열로, timeline을 객체로 구성해보세요.',
                wrong: '객체의 각 속성에 적절한 값을 넣고 출력 함수를 완성하세요.'
              }
            },
            {
              id: 'c5',
              title: '아이디어 평가 시스템',
              description: '여러 아이디어를 점수로 평가하고 최적을 선택하는 시스템을 만듭니다.',
              difficulty: 'hard',
              starterCode: '// 아이디어 평가 시스템\n// 각 아이디어를 실현가능성, 영향력, 관심도로 평가\nconst ideas = [];\n\nfunction addIdea(name, feasibility, impact, interest) {\n  // 점수 계산: (feasibility + impact + interest) / 3\n}\n\nfunction getBestIdea() {\n  // 평균 점수가 가장 높은 아이디어 반환\n}\n\nfunction rankIdeas() {\n  // 점수 높은 순으로 정렬하여 출력\n}',
              solution: 'const ideas = [];\n\nfunction addIdea(name, feasibility, impact, interest) {\n  const score = Math.round((feasibility + impact + interest) / 3 * 10) / 10;\n  ideas.push({ name, feasibility, impact, interest, score });\n}\n\nfunction getBestIdea() {\n  return ideas.reduce((best, idea) => idea.score > best.score ? idea : best);\n}\n\nfunction rankIdeas() {\n  const sorted = [...ideas].sort((a, b) => b.score - a.score);\n  sorted.forEach((idea, i) => {\n    console.log((i+1) + ". " + idea.name + " (점수: " + idea.score + ")");\n  });\n  return sorted;\n}\n\naddIdea("할 일 앱", 9, 7, 8);\naddIdea("게임", 5, 6, 10);\naddIdea("가계부", 8, 8, 6);\nrankIdeas();\nconsole.log("최고 아이디어:", getBestIdea().name);',
              hints: ['reduce로 최대값을 찾을 수 있어요', 'sort로 점수 내림차순 정렬하세요', 'Math.round를 사용해서 소수점을 정리하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '평가 시스템이 완벽하게 작동해요! 데이터 기반 의사결정이에요!',
                good: '점수 계산과 정렬이 잘 되었어요!',
                partial: 'sort()를 사용해서 정렬 기능을 추가해보세요.',
                wrong: 'reduce, sort, forEach를 활용하여 단계별로 구현하세요.'
              }
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
                    challenges: [
            {
              id: 'c1',
              title: '기획서 데이터 구조',
              description: '기획서의 핵심 요소를 JavaScript 객체로 표현합니다.',
              difficulty: 'easy',
              starterCode: '// 기획서 템플릿 객체를 완성하세요\nconst planTemplate = {\n  projectName: "",\n  problem: "",\n  solution: "",\n  // targetUsers, keyFeatures, techStack을 추가하세요\n};',
              solution: 'const planTemplate = {\n  projectName: "스터디 타이머",\n  problem: "공부 시간을 체계적으로 관리하기 어렵다",\n  solution: "뽀모도로 기법 기반 학습 타이머",\n  targetUsers: ["학생", "수험생", "자기개발 중인 직장인"],\n  keyFeatures: ["25분 타이머", "휴식 알림", "학습 통계"],\n  techStack: ["HTML", "CSS", "JavaScript"]\n};\nconsole.log(planTemplate.projectName + ": " + planTemplate.keyFeatures.length + "개 기능");',
              hints: ['targetUsers와 keyFeatures는 배열로 만드세요', 'techStack에는 사용할 기술을 나열해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '기획서 구조를 완벽하게 만들었어요!',
                good: '핵심 요소를 잘 포함했어요!',
                partial: '배열 속성을 추가해보세요.',
                wrong: '각 속성을 빈 문자열이나 빈 배열이라도 추가하세요.'
              }
            },
            {
              id: 'c2',
              title: '기획서 유효성 검사',
              description: '기획서에 필수 항목이 모두 포함되었는지 검사합니다.',
              difficulty: 'easy',
              starterCode: '// 기획서 유효성 검사 함수\nfunction validatePlan(plan) {\n  const required = ["projectName", "problem", "solution", "keyFeatures"];\n  const missing = [];\n  // required 배열의 각 항목이 plan에 있는지 확인\n  // 없으면 missing에 추가\n  return missing;\n}',
              solution: 'function validatePlan(plan) {\n  const required = ["projectName", "problem", "solution", "keyFeatures"];\n  const missing = [];\n  required.forEach(field => {\n    if (!plan[field] || (Array.isArray(plan[field]) && plan[field].length === 0)) {\n      missing.push(field);\n    }\n  });\n  return missing;\n}\n\nconst goodPlan = { projectName: "앱", problem: "문제", solution: "해결", keyFeatures: ["기능1"] };\nconst badPlan = { projectName: "", solution: "해결" };\nconsole.log("좋은 기획:", validatePlan(goodPlan));\nconsole.log("나쁜 기획:", validatePlan(badPlan));',
              hints: ['forEach로 required 배열을 순회하세요', '빈 문자열과 빈 배열도 체크해야 해요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '유효성 검사를 완벽하게 구현했어요!',
                good: '필수 항목 체크가 잘 되었어요!',
                partial: '빈 배열 검사도 추가해보세요.',
                wrong: 'forEach와 조건문을 사용해서 각 필드를 확인하세요.'
              }
            },
            {
              id: 'c3',
              title: '기획서 출력 포맷 수정',
              description: '기획서를 보기 좋게 출력하는 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 이 코드에 버그가 있어요! 수정하세요\nfunction formatPlan(plan) {\n  let output = "=== " + plan.projectName + " ===\n";\n  output += "문제: " + plan.problem + "\n";\n  output += "해결: " + plan.solution + "\n";\n  output += "기능:\n";\n  for (let i = 0; i <= plan.keyFeatures.length; i++) {\n    output += "  " + (i+1) + ". " + plan.keyFeatures[i] + "\n";\n  }\n  return output;\n}\nconst plan = { projectName: "앱", problem: "문제", solution: "해결", keyFeatures: ["추가", "삭제", "수정"] };\nconsole.log(formatPlan(plan));',
              solution: 'function formatPlan(plan) {\n  let output = "=== " + plan.projectName + " ===\n";\n  output += "문제: " + plan.problem + "\n";\n  output += "해결: " + plan.solution + "\n";\n  output += "기능:\n";\n  for (let i = 0; i < plan.keyFeatures.length; i++) {\n    output += "  " + (i+1) + ". " + plan.keyFeatures[i] + "\n";\n  }\n  return output;\n}\nconst plan = { projectName: "앱", problem: "문제", solution: "해결", keyFeatures: ["추가", "삭제", "수정"] };\nconsole.log(formatPlan(plan));',
              hints: ['for 루프의 조건을 확인하세요', '<= 대신 <를 사용해야 할 수도 있어요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'off-by-one 에러를 정확히 찾아 수정했어요!',
                good: '루프 조건 버그를 잘 찾았어요!',
                partial: 'i <= length는 배열 범위를 넘어가요.',
                wrong: 'for 루프에서 i <= 를 i < 로 바꿔야 해요.'
              }
            },
            {
              id: 'c4',
              title: '기획서 비교 기능',
              description: '두 기획서를 비교하는 함수를 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 두 기획서의 공통 기능과 차이점을 찾는 함수\nfunction comparePlans(plan1, plan2) {\n  // common: 두 기획의 공통 기능\n  // onlyIn1: plan1에만 있는 기능\n  // onlyIn2: plan2에만 있는 기능\n  return { common: [], onlyIn1: [], onlyIn2: [] };\n}',
              solution: 'function comparePlans(plan1, plan2) {\n  const common = plan1.keyFeatures.filter(f => plan2.keyFeatures.includes(f));\n  const onlyIn1 = plan1.keyFeatures.filter(f => !plan2.keyFeatures.includes(f));\n  const onlyIn2 = plan2.keyFeatures.filter(f => !plan1.keyFeatures.includes(f));\n  return { common, onlyIn1, onlyIn2 };\n}\n\nconst p1 = { keyFeatures: ["타이머", "통계", "알림"] };\nconst p2 = { keyFeatures: ["타이머", "로그인", "통계", "공유"] };\nconst result = comparePlans(p1, p2);\nconsole.log("공통:", result.common);\nconsole.log("Plan1만:", result.onlyIn1);\nconsole.log("Plan2만:", result.onlyIn2);',
              hints: ['filter와 includes를 조합하세요', '공통은 양쪽 다 있는 것, 차이는 한쪽에만 있는 것'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '기획서 비교 기능을 완벽하게 구현했어요!',
                good: 'filter와 includes를 잘 활용했어요!',
                partial: 'includes로 포함 여부를 체크하세요.',
                wrong: 'filter(f => arr.includes(f))로 공통 요소를 찾으세요.'
              }
            },
            {
              id: 'c5',
              title: '종합 기획서 시스템',
              description: '기획서를 생성, 수정, 출력하는 종합 시스템을 완성합니다.',
              difficulty: 'hard',
              starterCode: '// 기획서 관리 시스템\nconst planManager = {\n  plans: [],\n  create: function(name, problem, solution, features) { /* 구현 */ },\n  update: function(id, field, value) { /* 구현 */ },\n  display: function(id) { /* 구현 */ },\n  listAll: function() { /* 구현 */ }\n};',
              solution: 'const planManager = {\n  plans: [],\n  create: function(name, problem, solution, features) {\n    const plan = {\n      id: this.plans.length + 1,\n      projectName: name,\n      problem: problem,\n      solution: solution,\n      keyFeatures: features,\n      createdAt: new Date().toLocaleDateString()\n    };\n    this.plans.push(plan);\n    return plan;\n  },\n  update: function(id, field, value) {\n    const plan = this.plans.find(p => p.id === id);\n    if (plan) { plan[field] = value; return true; }\n    return false;\n  },\n  display: function(id) {\n    const plan = this.plans.find(p => p.id === id);\n    if (!plan) return "기획서를 찾을 수 없습니다";\n    return plan.projectName + ": " + plan.keyFeatures.join(", ");\n  },\n  listAll: function() {\n    return this.plans.map(p => p.id + ". " + p.projectName).join("\n");\n  }\n};\n\nplanManager.create("타이머 앱", "시간 관리", "뽀모도로", ["타이머", "통계"]);\nplanManager.create("퀴즈 게임", "학습", "게임화", ["문제 출제", "점수"]);\nconsole.log(planManager.listAll());',
              hints: ['this.plans로 배열에 접근하세요', 'find()로 id에 해당하는 기획서를 찾으세요', 'map()과 join()으로 목록을 출력하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '종합 기획서 시스템을 완벽하게 구현했어요! CRUD 패턴을 마스터했어요!',
                good: '핵심 기능이 잘 작동해요!',
                partial: 'update 함수에서 find()를 사용해보세요.',
                wrong: 'this를 사용해서 plans 배열에 접근하고, find/map을 활용하세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '와이어프레임 HTML 변환',
              description: '간단한 와이어프레임을 HTML로 변환합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 와이어프레임: 상단(제목) + 입력창 + 버튼 + 목록 -->\n<!-- 할 일 앱의 기본 구조를 만드세요 -->\n<div id="app">\n  <!-- 여기에 구조를 작성하세요 -->\n</div>',
              solution: '<div id="app">\n  <h1>할 일 목록</h1>\n  <div class="input-area">\n    <input type="text" id="todoInput" placeholder="할 일을 입력하세요">\n    <button id="addBtn">추가</button>\n  </div>\n  <ul id="todoList">\n    <li>예시 할 일 1</li>\n    <li>예시 할 일 2</li>\n  </ul>\n</div>',
              hints: ['input과 button을 하나의 div로 묶으세요', '목록은 ul/li 태그를 사용해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '와이어프레임을 HTML로 완벽하게 변환했어요!',
                good: '기본 구조를 잘 만들었어요!',
                partial: 'input과 button, 그리고 ul을 모두 포함하세요.',
                wrong: 'h1, input, button, ul/li 태그를 순서대로 배치하세요.'
              }
            },
            {
              id: 'c2',
              title: '폼 와이어프레임 분석',
              description: '회원가입 폼 와이어프레임의 HTML 구조를 분석합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 회원가입 폼의 와이어프레임을 HTML로 구현하세요 -->\n<form>\n  <!-- 이름, 이메일, 비밀번호 입력 필드 -->\n  <!-- 가입 버튼 -->\n</form>',
              solution: '<form id="signupForm">\n  <label for="name">이름:</label>\n  <input type="text" id="name" required>\n  <label for="email">이메일:</label>\n  <input type="email" id="email" required>\n  <label for="password">비밀번호:</label>\n  <input type="password" id="password" required>\n  <button type="submit">가입하기</button>\n</form>',
              hints: ['label과 input을 짝지어 사용하세요', 'input type을 적절히 설정하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '폼 구조를 완벽하게 구현했어요!',
                good: 'label과 input 매핑이 잘 되었어요!',
                partial: 'label의 for 속성과 input의 id를 매칭하세요.',
                wrong: 'label, input, button 태그로 폼을 구성하세요.'
              }
            },
            {
              id: 'c3',
              title: '대시보드 레이아웃 수정',
              description: '대시보드 와이어프레임의 CSS 레이아웃 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '/* 대시보드: 사이드바 + 메인 영역 레이아웃 */\n.dashboard {\n  display: flex;\n  /* 사이드바가 왼쪽에 고정되어야 해요 */\n}\n.sidebar {\n  width: 250px;\n  /* 높이가 화면 전체여야 해요 */\n}\n.main-content {\n  /* 나머지 공간을 모두 차지해야 해요 */\n}',
              solution: '.dashboard {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  width: 250px;\n  min-height: 100vh;\n  background: #1a1a2e;\n  color: white;\n  padding: 20px;\n}\n.main-content {\n  flex: 1;\n  padding: 20px;\n  background: #f5f5f5;\n}',
              hints: ['min-height: 100vh로 전체 높이를 설정하세요', 'flex: 1로 나머지 공간을 차지하게 하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '대시보드 레이아웃을 완벽하게 수정했어요!',
                good: 'Flexbox를 잘 활용했어요!',
                partial: 'flex: 1 속성을 main-content에 추가하세요.',
                wrong: 'display: flex + flex: 1 조합으로 레이아웃을 만드세요.'
              }
            },
            {
              id: 'c4',
              title: '모바일 와이어프레임 구현',
              description: '모바일 우선 반응형 와이어프레임을 구현합니다.',
              difficulty: 'medium',
              starterCode: '/* 모바일 우선 반응형 레이아웃 */\n.container {\n  /* 모바일: 1열 */\n}\n\n.card {\n  /* 카드 기본 스타일 */\n}\n\n/* 태블릿(768px 이상): 2열 */\n\n/* 데스크탑(1024px 이상): 3열 */',
              solution: '.container {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  padding: 16px;\n}\n\n.card {\n  background: white;\n  border-radius: 8px;\n  padding: 16px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n@media (min-width: 768px) {\n  .container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 1024px) {\n  .container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}',
              hints: ['모바일은 1열, 태블릿은 2열, 데스크탑은 3열이에요', '@media (min-width: ...)로 브레이크포인트를 설정하세요', 'grid-template-columns로 열 수를 바꿔요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '반응형 레이아웃을 완벽하게 구현했어요!',
                good: '미디어 쿼리를 잘 활용했어요!',
                partial: '@media 쿼리로 768px, 1024px 브레이크포인트를 추가하세요.',
                wrong: '@media (min-width: 768px)로 태블릿 스타일을 추가하세요.'
              }
            },
            {
              id: 'c5',
              title: '프로젝트 전체 와이어프레임 구현',
              description: '실제 프로젝트의 전체 와이어프레임을 HTML+CSS로 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 할 일 앱 전체 와이어프레임 구현 -->\n<!-- 헤더 + 입력영역 + 필터 + 목록 + 푸터 -->\n<style>\n  /* 스타일 작성 */\n</style>',
              solution: '<style>\n  * { margin: 0; box-sizing: border-box; }\n  body { font-family: sans-serif; background: #f0f0f0; }\n  header { background: #6366f1; color: white; padding: 1rem; text-align: center; }\n  .input-area { display: flex; padding: 1rem; gap: 8px; }\n  .input-area input { flex: 1; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }\n  .input-area button { padding: 0.5rem 1rem; background: #6366f1; color: white; border: none; border-radius: 4px; }\n  .filters { padding: 0 1rem; display: flex; gap: 8px; }\n  .filters button { padding: 4px 12px; border: 1px solid #ddd; border-radius: 16px; background: white; }\n  .todo-list { list-style: none; padding: 1rem; }\n  .todo-list li { background: white; padding: 12px; margin-bottom: 8px; border-radius: 4px; display: flex; justify-content: space-between; }\n  footer { text-align: center; padding: 1rem; color: #666; }\n</style>\n<header><h1>Todo App</h1></header>\n<div class="input-area">\n  <input type="text" placeholder="할 일 입력">\n  <button>추가</button>\n</div>\n<div class="filters">\n  <button>전체</button><button>진행중</button><button>완료</button>\n</div>\n<ul class="todo-list">\n  <li><span>할 일 1</span><button>삭제</button></li>\n  <li><span>할 일 2</span><button>삭제</button></li>\n</ul>\n<footer><p>2개 남음</p></footer>',
              hints: ['Flexbox로 입력 영역을 정렬하세요', '필터 버튼은 가로로 배치하세요', '각 할 일 항목은 내용과 삭제 버튼을 양 끝에 배치하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '전체 와이어프레임을 완벽하게 구현했어요! 실제 앱처럼 보여요!',
                good: '레이아웃이 깔끔하게 잘 구현되었어요!',
                partial: '필터 영역이나 푸터를 추가해보세요.',
                wrong: '헤더, 입력, 필터, 목록, 푸터를 순서대로 배치하세요.'
              }
            }
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
                    challenges: [
            { id: 'c1', title: '프로젝트 기본 구조', description: '프로젝트 HTML의 기본 뼈대를 만듭니다.', difficulty: 'easy',
              starterCode: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>My App</title>\n</head>\n<body>\n  <!-- header, main, footer를 추가하세요 -->\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>공부 버디</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <header><h1>공부 버디</h1></header>\n  <main>\n    <section id="timer"><div class="display">25:00</div><button>시작</button></section>\n  </main>\n  <footer><p>Made with love</p></footer>\n  <script src="app.js"></script>\n</body>\n</html>',
              hints: ['viewport 메타태그를 추가하세요', 'CSS와 JS 파일을 연결하세요'], estimatedMinutes: 3,
              feedback: { perfect: '프로젝트 구조가 완벽해요!', good: '기본 구조가 좋아요!', partial: 'viewport 메타태그를 추가하세요.', wrong: 'header, main, footer로 구조를 만드세요.' } },
            { id: 'c2', title: '인터랙티브 요소 추가', description: '버튼, 입력창 등 인터랙티브 요소를 추가합니다.', difficulty: 'easy',
              starterCode: '<section id="controls">\n  <!-- 시작/정지/리셋 버튼 3개를 만드세요 -->\n  <!-- 각 버튼에 id를 부여하세요 -->\n</section>',
              solution: '<section id="controls">\n  <button id="startBtn" class="btn primary">시작</button>\n  <button id="stopBtn" class="btn">정지</button>\n  <button id="resetBtn" class="btn">리셋</button>\n</section>',
              hints: ['각 버튼에 고유한 id를 부여하세요'], estimatedMinutes: 4,
              feedback: { perfect: '버튼이 깔끔하게 구현되었어요!', good: 'id 부여가 정확해요!', partial: '모든 버튼에 id를 추가하세요.', wrong: 'button 태그에 id 속성을 추가하세요.' } },
            { id: 'c3', title: '폼 구현', description: '데이터 입력 폼을 구현합니다.', difficulty: 'medium',
              starterCode: '<!-- 학습 기록 입력 폼 -->\n<form id="recordForm">\n  <!-- 과목(text), 시간(number), 메모(textarea), 제출 버튼 -->\n</form>',
              solution: '<form id="recordForm">\n  <label for="subject">과목:</label>\n  <input type="text" id="subject" required>\n  <label for="duration">시간(분):</label>\n  <input type="number" id="duration" min="1" max="180" required>\n  <label for="memo">메모:</label>\n  <textarea id="memo" rows="3"></textarea>\n  <button type="submit">기록 저장</button>\n</form>',
              hints: ['label과 input을 for/id로 연결하세요', 'number 타입에 min/max를 설정하세요'], estimatedMinutes: 7,
              feedback: { perfect: '폼 구현이 완벽해요!', good: '입력 검증이 잘 되었어요!', partial: 'label의 for와 input의 id를 매칭하세요.', wrong: 'label, input, textarea, button으로 폼을 구성하세요.' } },
            { id: 'c4', title: '리스트 동적 구조', description: 'JavaScript로 채울 목록의 HTML을 준비합니다.', difficulty: 'medium',
              starterCode: '<!-- 학습 기록 목록 영역 -->\n<!-- JS로 동적으로 항목이 추가될 영역 -->',
              solution: '<section id="records">\n  <h2>학습 기록</h2>\n  <div id="recordList">\n    <!-- JavaScript로 항목이 추가됩니다 -->\n  </div>\n  <p id="emptyMessage">아직 기록이 없습니다. 공부를 시작해보세요!</p>\n</section>',
              hints: ['빈 div에 id를 주어 JS에서 접근하세요', '빈 상태 메시지를 미리 만들어두세요'], estimatedMinutes: 8,
              feedback: { perfect: '동적 목록 구조가 완벽해요!', good: '빈 상태 처리가 좋아요!', partial: '빈 상태 메시지를 추가하세요.', wrong: 'id가 있는 빈 div를 만들어 JS에서 채우세요.' } },
            { id: 'c5', title: '전체 프로젝트 HTML 통합', description: '모든 섹션을 통합한 완성 HTML을 만듭니다.', difficulty: 'hard',
              starterCode: '<!-- 전체 프로젝트 HTML을 완성하세요 -->\n<!-- 헤더 + 타이머 + 입력폼 + 기록목록 + 푸터 -->',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>공부 버디</title>\n</head>\n<body>\n  <header><h1>공부 버디</h1><p>학습 시간을 관리하세요</p></header>\n  <main>\n    <section id="timer">\n      <div class="timer-display">25:00</div>\n      <div class="controls">\n        <button id="startBtn">시작</button>\n        <button id="resetBtn">리셋</button>\n      </div>\n    </section>\n    <section id="records">\n      <h2>학습 기록</h2>\n      <div id="recordList"></div>\n    </section>\n  </main>\n  <footer><p>Made by Me</p></footer>\n</body>\n</html>',
              hints: ['시맨틱 태그로 큰 구조를 먼저 잡으세요', '각 섹션에 id를 부여하세요'], estimatedMinutes: 12,
              feedback: { perfect: '전체 HTML이 완벽하게 통합되었어요!', good: '구조가 논리적이에요!', partial: '빠진 섹션을 추가하세요.', wrong: 'header, main(sections), footer 순서로 구성하세요.' } }
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
                    challenges: [
            { id: 'c1', title: '색상 테마 설정', description: 'CSS 변수로 프로젝트 색상 테마를 설정합니다.', difficulty: 'easy',
              starterCode: ':root {\n  /* 프로젝트 색상 변수 3개 이상 정의하세요 */\n}\nbody {\n  /* 변수 적용 */\n}',
              solution: ':root {\n  --primary: #6366f1;\n  --bg: #0f172a;\n  --text: #e2e8f0;\n  --card: #1e293b;\n  --accent: #10b981;\n}\nbody {\n  font-family: sans-serif;\n  background: var(--bg);\n  color: var(--text);\n  margin: 0;\n  min-height: 100vh;\n}',
              hints: ['다크 테마에 어울리는 색상을 선택하세요'], estimatedMinutes: 3,
              feedback: { perfect: '색상 테마가 일관적이에요!', good: '변수 활용이 좋아요!', partial: '최소 3개 변수를 정의하세요.', wrong: ':root에 --이름: 색상; 형식으로 변수를 만드세요.' } },
            { id: 'c2', title: '타이머 스타일링', description: '타이머 디스플레이에 스타일을 적용합니다.', difficulty: 'easy',
              starterCode: '.timer-display {\n  /* 큰 폰트, 가운데 정렬, 여백 */\n}\n.controls button {\n  /* 버튼 스타일 */\n}',
              solution: '.timer-display {\n  font-size: 4rem;\n  font-weight: bold;\n  text-align: center;\n  padding: 2rem;\n  color: var(--accent, #10b981);\n  font-family: monospace;\n}\n.controls {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n.controls button {\n  padding: 0.75rem 1.5rem;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}',
              hints: ['monospace 폰트가 숫자에 적합해요', 'flex로 버튼을 가운데 배치하세요'], estimatedMinutes: 5,
              feedback: { perfect: '타이머 스타일이 멋져요!', good: '폰트와 레이아웃이 좋아요!', partial: 'monospace 폰트를 사용해보세요.', wrong: 'font-size, text-align, padding을 설정하세요.' } },
            { id: 'c3', title: '카드 스타일', description: '학습 기록 카드에 스타일을 적용합니다.', difficulty: 'medium',
              starterCode: '.record-card {\n  /* 카드 스타일: 배경, 둥근 모서리, 그림자 */\n}',
              solution: '.record-card {\n  background: var(--card);\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: transform 0.2s;\n}\n.record-card:hover {\n  transform: translateX(4px);\n}',
              hints: ['flex로 양쪽 정렬하세요', 'hover에 미세한 이동 효과를'], estimatedMinutes: 7,
              feedback: { perfect: '카드 스타일이 깔끔해요!', good: 'hover 효과가 좋아요!', partial: 'flex로 양쪽 정렬을 해보세요.', wrong: 'background, border-radius, padding을 설정하세요.' } },
            { id: 'c4', title: '반응형 레이아웃', description: '모바일 대응 반응형 스타일을 적용합니다.', difficulty: 'medium',
              starterCode: '/* 모바일 우선 반응형 */\n.container { /* 기본 */ }\n@media (min-width: 768px) {\n  .container { /* 태블릿 이상 */ }\n}',
              solution: '.container {\n  padding: 1rem;\n  max-width: 100%;\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 600px;\n    margin: 0 auto;\n    padding: 2rem;\n  }\n  .timer-display {\n    font-size: 6rem;\n  }\n}',
              hints: ['모바일 기본 -> 태블릿 확장 순서로', 'max-width와 margin: auto로 센터링'], estimatedMinutes: 10,
              feedback: { perfect: '반응형이 완벽해요!', good: '미디어 쿼리 사용이 정확해요!', partial: 'max-width로 최대 너비를 제한하세요.', wrong: '@media (min-width: 768px)으로 태블릿 스타일을 추가하세요.' } },
            { id: 'c5', title: '전체 스타일 통합', description: '프로젝트의 모든 스타일을 통합합니다.', difficulty: 'hard',
              starterCode: '/* 프로젝트 전체 스타일시트를 완성하세요 */\n/* 변수 + 기본 + 타이머 + 카드 + 반응형 */',
              solution: ':root { --primary: #6366f1; --bg: #0f172a; --text: #e2e8f0; --card: #1e293b; --accent: #10b981; }\n* { margin: 0; box-sizing: border-box; }\nbody { font-family: sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }\nheader { background: var(--primary); padding: 1.5rem; text-align: center; }\n.timer-display { font-size: 4rem; font-family: monospace; text-align: center; padding: 2rem; color: var(--accent); }\n.controls { display: flex; justify-content: center; gap: 1rem; }\nbutton { padding: 0.75rem 1.5rem; background: var(--primary); color: white; border: none; border-radius: 8px; cursor: pointer; }\nbutton:hover { opacity: 0.9; }\n.record-card { background: var(--card); border-radius: 8px; padding: 1rem; margin: 8px 1rem; }\nfooter { text-align: center; padding: 2rem; color: #666; }',
              hints: ['변수 정의 -> 기본 스타일 -> 컴포넌트 순서로'], estimatedMinutes: 15,
              feedback: { perfect: '전체 스타일이 통합되고 일관적이에요!', good: '스타일 구조가 좋아요!', partial: '반응형 스타일을 추가하세요.', wrong: ':root 변수부터 시작해서 각 요소에 스타일을 적용하세요.' } }
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
                    challenges: [
            {
              id: 'c1', title: 'DOM 요소 선택하기', description: 'querySelector로 HTML 요소를 선택합니다.', difficulty: 'easy',
              starterCode: '// 다양한 방법으로 요소를 선택하세요\n// 1. id가 "timer"인 요소 선택\nconst timer = \n// 2. class가 "display"인 요소 선택\nconst display = \n// 3. 모든 button 요소 선택\nconst buttons = ',
              solution: 'const timer = document.getElementById("timer");\nconst display = document.querySelector(".display");\nconst buttons = document.querySelectorAll("button");\n\nconsole.log("타이머:", timer);\nconsole.log("디스플레이:", display.textContent);\nconsole.log("버튼 수:", buttons.length);',
              hints: ['getElementById는 id로 선택해요', 'querySelector는 CSS 선택자를 사용해요', 'querySelectorAll은 여러 요소를 선택해요'], estimatedMinutes: 3,
              feedback: { perfect: 'DOM 선택을 완벽하게 했어요!', good: '선택자 사용이 정확해요!', partial: 'querySelectorAll도 사용해보세요.', wrong: 'getElementById나 querySelector를 사용하세요.' }
            },
            {
              id: 'c2', title: '이벤트 리스너 등록', description: '버튼 클릭 이벤트를 처리합니다.', difficulty: 'easy',
              starterCode: 'const startBtn = document.getElementById("startBtn");\n\n// startBtn 클릭 시 "타이머 시작!" 출력하고\n// 버튼 텍스트를 "진행 중..."으로 변경하세요',
              solution: 'const startBtn = document.getElementById("startBtn");\n\nstartBtn.addEventListener("click", function() {\n  console.log("타이머 시작!");\n  startBtn.textContent = "진행 중...";\n  startBtn.disabled = true;\n});',
              hints: ['addEventListener("click", 함수)를 사용하세요', 'textContent로 텍스트를 변경해요', 'disabled = true로 중복 클릭을 방지해요'], estimatedMinutes: 4,
              feedback: { perfect: '이벤트 처리가 완벽해요!', good: '클릭 이벤트를 잘 처리했어요!', partial: 'disabled로 중복 클릭을 방지하세요.', wrong: 'addEventListener("click", function() {...})를 사용하세요.' }
            },
            {
              id: 'c3', title: '카운트다운 타이머 구현', description: 'setInterval로 카운트다운 타이머를 만듭니다.', difficulty: 'medium',
              starterCode: 'let timeLeft = 25 * 60; // 25분\nlet timerId = null;\nconst display = document.querySelector(".display");\n\n// 1초마다 timeLeft를 감소시키고 화면을 업데이트하세요\n// 0이 되면 타이머를 멈추세요\nfunction startTimer() {\n  // 구현하세요\n}\n\n// 초를 "25:00" 형식으로 변환하세요\nfunction formatTime(seconds) {\n  // 구현하세요\n}',
              solution: 'let timeLeft = 25 * 60;\nlet timerId = null;\nconst display = document.querySelector(".display");\n\nfunction startTimer() {\n  timerId = setInterval(function() {\n    timeLeft--;\n    display.textContent = formatTime(timeLeft);\n    if (timeLeft <= 0) {\n      clearInterval(timerId);\n      display.textContent = "Done!";\n    }\n  }, 1000);\n}\n\nfunction formatTime(seconds) {\n  const m = Math.floor(seconds / 60);\n  const s = seconds % 60;\n  return m + ":" + String(s).padStart(2, "0");\n}',
              hints: ['setInterval(함수, 1000)으로 1초마다 실행해요', 'padStart(2, "0")로 한 자리 수를 두 자리로 만들어요', 'clearInterval(timerId)로 멈춰요'], estimatedMinutes: 10,
              feedback: { perfect: '타이머를 완벽하게 구현했어요!', good: '시간 포맷팅이 정확해요!', partial: 'clearInterval로 0에서 멈추게 하세요.', wrong: 'setInterval로 1초마다 감소시키고 clearInterval로 멈추세요.' }
            },
            {
              id: 'c4', title: '동적 목록 추가', description: 'JavaScript로 학습 기록을 DOM에 추가합니다.', difficulty: 'medium',
              starterCode: '// 학습 기록을 화면에 추가하는 함수를 만드세요\n// subject: 과목 이름, duration: 학습 시간(분)\nfunction addRecord(subject, duration) {\n  const list = document.getElementById("recordList");\n  // createElement로 새 항목을 만들고 list에 추가하세요\n}',
              solution: 'function addRecord(subject, duration) {\n  const list = document.getElementById("recordList");\n  const card = document.createElement("div");\n  card.className = "record-card";\n  card.innerHTML = "<span>" + subject + "</span><span>" + duration + "분</span>";\n  list.prepend(card);\n\n  const empty = document.getElementById("emptyMessage");\n  if (empty) empty.style.display = "none";\n}\n\naddRecord("수학", 25);\naddRecord("영어", 30);',
              hints: ['createElement로 새 요소를 만들어요', 'innerHTML로 내부 HTML을 설정해요', 'prepend로 맨 위에 추가해요'], estimatedMinutes: 10,
              feedback: { perfect: '동적 목록 추가가 완벽해요!', good: 'DOM 조작이 정확해요!', partial: 'prepend로 최신 기록을 위에 추가하세요.', wrong: 'createElement + className + innerHTML + prepend를 사용하세요.' }
            },
            {
              id: 'c5', title: '타이머 + 기록 통합', description: '타이머 완료 시 자동으로 기록을 추가하는 앱을 완성합니다.', difficulty: 'hard',
              starterCode: '// 전체 앱 로직을 통합하세요\n// 시작 버튼 -> 타이머 시작 -> 완료 시 기록 추가\n// 리셋 버튼 -> 타이머 초기화\nlet timeLeft = 25 * 60;\nlet timerId = null;',
              solution: 'let timeLeft = 25 * 60;\nlet timerId = null;\nconst display = document.querySelector(".display");\nconst startBtn = document.getElementById("startBtn");\nconst resetBtn = document.getElementById("resetBtn");\n\nfunction formatTime(s) {\n  return Math.floor(s/60) + ":" + String(s%60).padStart(2,"0");\n}\n\nstartBtn.addEventListener("click", function() {\n  if (timerId) return;\n  timerId = setInterval(function() {\n    timeLeft--;\n    display.textContent = formatTime(timeLeft);\n    if (timeLeft <= 0) {\n      clearInterval(timerId);\n      timerId = null;\n      addRecord("학습", 25);\n      alert("25분 완료!");\n    }\n  }, 1000);\n});\n\nresetBtn.addEventListener("click", function() {\n  clearInterval(timerId);\n  timerId = null;\n  timeLeft = 25 * 60;\n  display.textContent = formatTime(timeLeft);\n});',
              hints: ['시작 시 if(timerId) return으로 중복 방지하세요', '리셋 시 clearInterval + 초기화를 하세요', '완료 시 addRecord로 기록을 추가하세요'], estimatedMinutes: 15,
              feedback: { perfect: '앱 로직이 완벽하게 통합되었어요!', good: '이벤트 흐름이 잘 구성되었어요!', partial: '리셋 기능을 추가하세요.', wrong: '시작->타이머->완료->기록 흐름을 구현하세요.' }
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
                    challenges: [
            {
              id: 'c1', title: 'localStorage 기본 사용', description: 'localStorage에 데이터를 저장하고 불러옵니다.', difficulty: 'easy',
              starterCode: '// localStorage에 이름을 저장하고 불러오세요\n// 1. setItem으로 "username" 키에 값 저장\n// 2. getItem으로 불러와서 출력',
              solution: 'localStorage.setItem("username", "홍길동");\nconst name = localStorage.getItem("username");\nconsole.log("저장된 이름:", name);\n\n// 확인 후 삭제\n// localStorage.removeItem("username");',
              hints: ['setItem(키, 값)으로 저장해요', 'getItem(키)으로 불러와요', 'removeItem(키)으로 삭제해요'], estimatedMinutes: 3,
              feedback: { perfect: 'localStorage 사용이 완벽해요!', good: '기본 사용법을 잘 이해했어요!', partial: 'getItem으로 불러오는 것도 해보세요.', wrong: 'setItem("key", "value")와 getItem("key")를 사용하세요.' }
            },
            {
              id: 'c2', title: 'JSON 데이터 저장', description: '객체를 JSON으로 변환하여 localStorage에 저장합니다.', difficulty: 'easy',
              starterCode: '// 객체를 localStorage에 저장하세요\nconst record = { subject: "수학", duration: 25, date: "2024-03-01" };\n\n// 1. JSON.stringify로 문자열로 변환 후 저장\n// 2. getItem으로 불러온 후 JSON.parse로 복원',
              solution: 'const record = { subject: "수학", duration: 25, date: "2024-03-01" };\nlocalStorage.setItem("lastRecord", JSON.stringify(record));\n\nconst saved = JSON.parse(localStorage.getItem("lastRecord"));\nconsole.log("과목:", saved.subject);\nconsole.log("시간:", saved.duration + "분");',
              hints: ['JSON.stringify()로 객체를 문자열로 변환해요', 'JSON.parse()로 문자열을 객체로 복원해요', 'localStorage는 문자열만 저장할 수 있어요'], estimatedMinutes: 5,
              feedback: { perfect: 'JSON 변환을 완벽하게 활용했어요!', good: 'stringify/parse 사용이 정확해요!', partial: 'JSON.parse로 복원해보세요.', wrong: 'JSON.stringify()로 저장하고 JSON.parse()로 불러오세요.' }
            },
            {
              id: 'c3', title: '배열 데이터 관리', description: '학습 기록 배열을 localStorage로 관리합니다.', difficulty: 'medium',
              starterCode: '// 학습 기록 배열을 localStorage로 관리하세요\nfunction saveRecords(records) {\n  // 배열을 localStorage에 저장\n}\n\nfunction loadRecords() {\n  // localStorage에서 배열을 불러오기 (없으면 빈 배열)\n}\n\nfunction addRecord(subject, duration) {\n  // 기존 기록에 새 항목 추가 후 저장\n}',
              solution: 'function saveRecords(records) {\n  localStorage.setItem("records", JSON.stringify(records));\n}\n\nfunction loadRecords() {\n  const saved = localStorage.getItem("records");\n  return saved ? JSON.parse(saved) : [];\n}\n\nfunction addRecord(subject, duration) {\n  const records = loadRecords();\n  records.push({ subject, duration, date: new Date().toLocaleDateString() });\n  saveRecords(records);\n  return records;\n}\n\naddRecord("수학", 25);\naddRecord("영어", 30);\nconsole.log("기록:", loadRecords());',
              hints: ['getItem이 null을 반환할 때 빈 배열을 반환하세요', 'push로 배열에 추가한 후 다시 저장하세요', '삼항 연산자로 null 체크를 할 수 있어요'], estimatedMinutes: 8,
              feedback: { perfect: '배열 관리를 완벽하게 구현했어요!', good: 'null 처리가 정확해요!', partial: 'getItem이 null일 때 빈 배열을 반환하세요.', wrong: 'JSON.stringify/parse로 배열을 저장/로드하세요.' }
            },
            {
              id: 'c4', title: '삭제와 통계 기능', description: '기록 삭제와 통계 계산 기능을 구현합니다.', difficulty: 'medium',
              starterCode: '// 데이터 관리 함수를 구현하세요\nfunction clearAllRecords() {\n  // 모든 기록 삭제\n}\n\nfunction deleteRecord(index) {\n  // 특정 인덱스의 기록 삭제\n}\n\nfunction getStats() {\n  // 총 학습시간과 기록 수 반환\n}',
              solution: 'function clearAllRecords() {\n  localStorage.removeItem("records");\n  console.log("모든 기록이 삭제되었습니다");\n}\n\nfunction deleteRecord(index) {\n  const records = loadRecords();\n  if (index >= 0 && index < records.length) {\n    records.splice(index, 1);\n    saveRecords(records);\n  }\n}\n\nfunction getStats() {\n  const records = loadRecords();\n  const totalTime = records.reduce(function(sum, r) { return sum + r.duration; }, 0);\n  return { count: records.length, totalMinutes: totalTime };\n}\n\nconsole.log("통계:", getStats());',
              hints: ['removeItem으로 키를 삭제해요', 'splice(index, 1)로 배열에서 하나를 제거해요', 'reduce로 합계를 계산할 수 있어요'], estimatedMinutes: 10,
              feedback: { perfect: '데이터 관리를 완벽하게 구현했어요!', good: 'CRUD 기능이 잘 작동해요!', partial: 'splice로 특정 항목을 삭제하세요.', wrong: 'removeItem, splice, reduce를 활용하세요.' }
            },
            {
              id: 'c5', title: 'localStorage 통합 앱', description: '저장/로드/삭제/통계를 모두 포함한 데이터 관리 앱을 완성합니다.', difficulty: 'hard',
              starterCode: '// localStorage를 활용한 완전한 데이터 관리 앱\n// save, load, add, remove, stats 기능을 모두 구현하세요\nconst app = {\n  // 메서드들을 구현하세요\n};',
              solution: 'const app = {\n  save: function(records) { localStorage.setItem("records", JSON.stringify(records)); },\n  load: function() { const d = localStorage.getItem("records"); return d ? JSON.parse(d) : []; },\n  add: function(subject, duration) {\n    const r = this.load();\n    r.push({ subject: subject, duration: duration, date: new Date().toLocaleDateString(), id: Date.now() });\n    this.save(r);\n    return r;\n  },\n  remove: function(id) {\n    const r = this.load().filter(function(item) { return item.id !== id; });\n    this.save(r);\n    return r;\n  },\n  stats: function() {\n    const r = this.load();\n    return { count: r.length, total: r.reduce(function(s, x) { return s + x.duration; }, 0) };\n  }\n};\n\napp.add("수학", 25);\napp.add("영어", 30);\nconsole.log("통계:", app.stats());\nconsole.log("기록:", app.load());',
              hints: ['this로 같은 객체의 메서드를 호출하세요', 'Date.now()로 고유 id를 만들 수 있어요', 'filter로 특정 id를 제외할 수 있어요'], estimatedMinutes: 15,
              feedback: { perfect: 'localStorage 통합 앱이 완벽해요!', good: '객체 메서드 구조가 깔끔해요!', partial: 'stats 함수에 reduce를 사용하세요.', wrong: 'this를 사용해서 save/load를 재활용하세요.' }
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
                    challenges: [
            {
              id: 'c1',
              title: 'console.log 디버깅',
              description: 'console.log를 사용한 기본 디버깅을 연습합니다.',
              difficulty: 'easy',
              starterCode: '// 이 함수가 왜 잘못된 결과를 내는지 찾아보세요\nfunction addPrices(items) {\n  let total = 0;\n  for (let i = 0; i < items.length; i++) {\n    total += items[i];\n  }\n  return total;\n}\n// console.log를 추가해서 디버깅하세요\nconst prices = ["100", "200", "300"];\nconsole.log(addPrices(prices));',
              solution: 'function addPrices(items) {\n  let total = 0;\n  for (let i = 0; i < items.length; i++) {\n    console.log("현재 값:", items[i], "타입:", typeof items[i]);\n    total += Number(items[i]);\n  }\n  console.log("총합:", total);\n  return total;\n}\nconst prices = ["100", "200", "300"];\nconsole.log("결과:", addPrices(prices));\n// 문제: 문자열 "100" + "200" = "100200" (연결됨)\n// 해결: Number()로 변환',
              hints: ['typeof로 데이터 타입을 확인해보세요', '문자열 + 숫자는 문자열 연결이 돼요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '타입 문제를 정확하게 찾아 수정했어요!',
                good: 'console.log로 디버깅을 잘 했어요!',
                partial: 'typeof를 사용해서 타입을 확인해보세요.',
                wrong: '각 값의 타입을 console.log로 확인하면 문제가 보여요.'
              }
            },
            {
              id: 'c2',
              title: '에러 메시지 분석',
              description: '일반적인 JavaScript 에러를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 이 코드들의 에러를 분석하고 수정하세요\n\n// 에러 1: ReferenceError\nfunction greet() {\n  console.log(mesage); // typo!\n}\n\n// 에러 2: TypeError\nconst user = null;\n// console.log(user.name);\n\n// 에러 3: SyntaxError를 수정하세요\n// function sayHi( {\n//   console.log("Hi");\n// }',
              solution: '// 에러 1: ReferenceError - 변수명 오타\nfunction greet() {\n  const message = "Hello!";\n  console.log(message); // mesage -> message\n}\n\n// 에러 2: TypeError - null 체크\nconst user = null;\nif (user !== null) {\n  console.log(user.name);\n} else {\n  console.log("user가 없습니다");\n}\n\n// 에러 3: SyntaxError - 괄호 수정\nfunction sayHi() {\n  console.log("Hi");\n}\n\ngreet();\nsayHi();',
              hints: ['ReferenceError는 보통 오타에요', 'TypeError는 null/undefined에 접근할 때 발생해요', 'SyntaxError는 괄호나 중괄호를 확인하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '세 가지 에러 유형을 모두 정확하게 수정했어요!',
                good: '대부분의 에러를 잘 해결했어요!',
                partial: '에러 메시지를 읽고 해당 줄을 확인하세요.',
                wrong: '각 에러 유형의 원인을 다시 학습해보세요.'
              }
            },
            {
              id: 'c3',
              title: '논리 오류 수정',
              description: '실행은 되지만 결과가 잘못된 논리 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 이 함수는 배열에서 최대값을 찾아야 하지만 잘못된 결과를 반환해요\nfunction findMax(arr) {\n  let max = 0; // 문제가 있을 수 있어요\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n      max = arr[i];\n    }\n  }\n  return max;\n}\n\nconsole.log(findMax([3, 7, 2, 9, 4]));  // 예상: 9\nconsole.log(findMax([-5, -2, -8]));     // 예상: -2, 실제: ?',
              solution: 'function findMax(arr) {\n  if (arr.length === 0) return undefined;\n  let max = arr[0]; // 첫 번째 요소로 초기화!\n  for (let i = 1; i < arr.length; i++) {\n    if (arr[i] > max) {\n      max = arr[i];\n    }\n  }\n  return max;\n}\n\nconsole.log(findMax([3, 7, 2, 9, 4]));  // 9\nconsole.log(findMax([-5, -2, -8]));     // -2\nconsole.log(findMax([]));               // undefined',
              hints: ['음수만 있을 때 max = 0이면 어떻게 될까요?', '초기값을 배열의 첫 번째 요소로 설정하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '논리 오류를 정확하게 찾아 수정했어요!',
                good: '초기값 문제를 잘 해결했어요!',
                partial: '음수 배열의 경우를 테스트해보세요.',
                wrong: 'max의 초기값을 0 대신 arr[0]으로 바꾸세요.'
              }
            },
            {
              id: 'c4',
              title: '이벤트 핸들러 디버깅',
              description: 'DOM 이벤트 처리 코드의 버그를 찾아 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 버튼 클릭 시 카운터가 증가해야 하는데 작동하지 않아요\nlet count = 0;\nconst display = document.getElementById("counter");\nconst btn = document.getElementById("addBtn");\n\n// 문제 1: 이벤트 리스너 등록 방식\nbtn.onclick = incrementCount();\n\nfunction incrementCount() {\n  count++;\n  display.textContent = count;\n  // 문제 2: 항상 count가 1이에요\n}',
              solution: 'let count = 0;\nconst display = document.getElementById("counter");\nconst btn = document.getElementById("addBtn");\n\n// 수정: 함수 참조를 전달 (괄호 제거!)\nbtn.onclick = incrementCount;\n// 또는: btn.addEventListener("click", incrementCount);\n\nfunction incrementCount() {\n  count++;\n  display.textContent = count;\n}',
              hints: ['onclick에 함수를 할당할 때 ()를 붙이면 즉시 실행돼요', 'incrementCount()는 호출, incrementCount는 참조예요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '이벤트 핸들러 버그를 완벽하게 수정했어요!',
                good: '함수 참조와 함수 호출의 차이를 잘 이해했어요!',
                partial: 'onclick = func()와 onclick = func의 차이를 확인하세요.',
                wrong: '함수명 뒤의 ()를 제거하면 참조로 전달돼요.'
              }
            },
            {
              id: 'c5',
              title: '종합 디버깅 도전',
              description: '여러 유형의 버그가 있는 할 일 앱을 디버깅합니다.',
              difficulty: 'hard',
              starterCode: '// 할 일 앱에 여러 버그가 있어요! 모두 찾아 수정하세요\nconst todos = [];\n\nfunction addTodo(text) {\n  todos.push({ id: todos.length, text: text, done: flase }); // 버그1\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id == id);\n  todo.done = !todo.done; // 버그2: todo가 없을 수 있어요\n}\n\nfunction getActiveTodos() {\n  return todos.filter(t => t.done = false); // 버그3\n}\n\nfunction removeTodo(id) {\n  const index = todos.findIndex(t => t.id === id);\n  todos.splice(index); // 버그4\n}',
              solution: 'const todos = [];\n\nfunction addTodo(text) {\n  todos.push({ id: todos.length, text: text, done: false }); // flase -> false\n}\n\nfunction toggleTodo(id) {\n  const todo = todos.find(t => t.id === id);\n  if (todo) { // null 체크 추가\n    todo.done = !todo.done;\n  }\n}\n\nfunction getActiveTodos() {\n  return todos.filter(t => t.done === false); // = 를 === 로 수정\n}\n\nfunction removeTodo(id) {\n  const index = todos.findIndex(t => t.id === id);\n  if (index !== -1) {\n    todos.splice(index, 1); // 두 번째 인수 1 추가\n  }\n}\n\naddTodo("공부하기");\naddTodo("운동하기");\ntoggleTodo(0);\nconsole.log("활성:", getActiveTodos().length);',
              hints: ['flase는 오타예요', '= 하나는 대입, === 세 개는 비교예요', 'splice(index)는 index부터 끝까지 삭제해요, splice(index, 1)은 1개만 삭제'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '4개 버그를 모두 찾아 수정했어요! 디버깅 마스터!',
                good: '대부분의 버그를 잘 찾았어요!',
                partial: 'splice의 두 번째 인수와 === 연산자를 확인하세요.',
                wrong: '각 함수를 하나씩 테스트하면서 오류를 찾아보세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '발표 구조 HTML 작성',
              description: '발표 슬라이드의 기본 구조를 HTML로 만듭니다.',
              difficulty: 'easy',
              starterCode: '<!-- 프로젝트 발표 슬라이드 구조를 만드세요 -->\n<div class="slide" id="slide1">\n  <!-- 제목 슬라이드: 프로젝트 이름, 만든 사람 -->\n</div>',
              solution: '<div class="slide" id="slide1">\n  <h1>공부 버디 앱</h1>\n  <p class="subtitle">학습 시간 관리 도우미</p>\n  <p class="author">만든 사람: 홍길동</p>\n  <p class="date">2024년 3월</p>\n</div>\n<div class="slide" id="slide2">\n  <h2>문제 정의</h2>\n  <p>공부 시간을 체계적으로 관리하기 어렵다</p>\n</div>\n<div class="slide" id="slide3">\n  <h2>해결 방법</h2>\n  <ul>\n    <li>뽀모도로 타이머</li>\n    <li>학습 기록 저장</li>\n    <li>통계 시각화</li>\n  </ul>\n</div>',
              hints: ['각 슬라이드는 div로 감싸세요', '제목, 문제, 해결, 데모, 마무리 순서로 구성해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '발표 슬라이드 구조를 완벽하게 만들었어요!',
                good: '슬라이드 구성이 논리적이에요!',
                partial: '문제와 해결 슬라이드를 추가해보세요.',
                wrong: '각 슬라이드를 div로 감싸고 h1/h2로 제목을 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '발표 타이머 분석',
              description: '발표 시간을 관리하는 타이머 코드를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 5분 발표 타이머\nlet timeLeft = 5 * 60; // 300초\nlet timerId = null;\n\nfunction startTimer() {\n  // setInterval로 1초마다 감소\n  // 남은 시간을 분:초 형식으로 표시\n}\n\nfunction formatTime(seconds) {\n  // 300 -> "5:00", 65 -> "1:05"\n}',
              solution: 'let timeLeft = 5 * 60;\nlet timerId = null;\n\nfunction startTimer() {\n  timerId = setInterval(function() {\n    timeLeft--;\n    console.log(formatTime(timeLeft));\n    if (timeLeft <= 60) {\n      console.log("1분 남았습니다!");\n    }\n    if (timeLeft <= 0) {\n      clearInterval(timerId);\n      console.log("시간 종료!");\n    }\n  }, 1000);\n}\n\nfunction formatTime(seconds) {\n  const min = Math.floor(seconds / 60);\n  const sec = seconds % 60;\n  return min + ":" + String(sec).padStart(2, "0");\n}\n\nconsole.log("시작:", formatTime(timeLeft));',
              hints: ['Math.floor로 분을 계산하세요', '% 60으로 초를 계산하세요', 'padStart(2, "0")로 두 자리를 만들어요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '발표 타이머를 완벽하게 구현했어요!',
                good: '시간 포맷팅이 정확해요!',
                partial: 'padStart로 초를 두 자리로 만드세요.',
                wrong: 'Math.floor(seconds / 60)과 seconds % 60을 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '발표 스크립트 생성기 수정',
              description: '발표 스크립트를 자동 생성하는 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 발표 스크립트 생성기 - 버그를 수정하세요\nfunction generateScript(project) {\n  const parts = [];\n  parts.push("안녕하세요, " + project.name + "을 소개합니다.");\n  parts.push("이 프로젝트는 " + project.problem + " 문제를 해결합니다.");\n  // 버그: features가 undefined일 때 에러 발생\n  parts.push("주요 기능은 " + project.features.join(", ") + "입니다.");\n  parts.push("감사합니다!");\n  return parts.join("\n");\n}\n\nconst project = { name: "타이머 앱", problem: "시간 관리" };\nconsole.log(generateScript(project));',
              solution: 'function generateScript(project) {\n  const parts = [];\n  parts.push("안녕하세요, " + project.name + "을 소개합니다.");\n  parts.push("이 프로젝트는 " + project.problem + " 문제를 해결합니다.");\n  if (project.features && project.features.length > 0) {\n    parts.push("주요 기능은 " + project.features.join(", ") + "입니다.");\n  } else {\n    parts.push("자세한 기능은 데모에서 보여드리겠습니다.");\n  }\n  parts.push("감사합니다!");\n  return parts.join("\n");\n}\n\nconst project1 = { name: "타이머 앱", problem: "시간 관리" };\nconst project2 = { name: "퀴즈", problem: "학습", features: ["문제 출제", "점수"] };\nconsole.log(generateScript(project1));\nconsole.log(generateScript(project2));',
              hints: ['project.features가 없을 수 있어요', 'if문으로 존재 여부를 확인하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'null/undefined 방어 코드를 완벽하게 추가했어요!',
                good: '존재 여부 체크를 잘 했어요!',
                partial: 'features가 undefined인 경우를 처리하세요.',
                wrong: 'if (project.features)로 존재 여부를 먼저 확인하세요.'
              }
            },
            {
              id: 'c4',
              title: '슬라이드 네비게이션 구현',
              description: '발표 슬라이드를 이전/다음으로 넘기는 기능을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 슬라이드 네비게이션\nconst slides = ["제목", "문제 정의", "해결 방법", "데모", "Q&A"];\nlet currentSlide = 0;\n\nfunction nextSlide() {\n  // 다음 슬라이드로 이동 (마지막이면 이동하지 않음)\n}\n\nfunction prevSlide() {\n  // 이전 슬라이드로 이동 (첫 번째면 이동하지 않음)\n}\n\nfunction showSlide() {\n  // 현재 슬라이드 정보 출력\n}',
              solution: 'const slides = ["제목", "문제 정의", "해결 방법", "데모", "Q&A"];\nlet currentSlide = 0;\n\nfunction nextSlide() {\n  if (currentSlide < slides.length - 1) {\n    currentSlide++;\n    showSlide();\n  } else {\n    console.log("마지막 슬라이드입니다");\n  }\n}\n\nfunction prevSlide() {\n  if (currentSlide > 0) {\n    currentSlide--;\n    showSlide();\n  } else {\n    console.log("첫 번째 슬라이드입니다");\n  }\n}\n\nfunction showSlide() {\n  console.log("[" + (currentSlide + 1) + "/" + slides.length + "] " + slides[currentSlide]);\n}\n\nshowSlide();\nnextSlide();\nnextSlide();\nprevSlide();',
              hints: ['배열 범위를 벗어나지 않도록 체크하세요', 'currentSlide < slides.length - 1 조건으로 마지막 체크'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '슬라이드 네비게이션을 완벽하게 구현했어요!',
                good: '경계 조건 처리가 잘 되었어요!',
                partial: '첫 번째와 마지막 슬라이드 경계 체크를 추가하세요.',
                wrong: 'if 조건으로 0 이상, length-1 이하 범위를 확인하세요.'
              }
            },
            {
              id: 'c5',
              title: '종합 발표 도구',
              description: '타이머 + 슬라이드 + 스크립트를 통합한 발표 도구를 완성합니다.',
              difficulty: 'hard',
              starterCode: '// 발표 도구 통합 시스템\nconst presentationTool = {\n  slides: [],\n  currentIndex: 0,\n  timer: null,\n  timeLimit: 300,\n  addSlide: function(title, notes) { /* 구현 */ },\n  start: function() { /* 타이머 시작 + 첫 슬라이드 표시 */ },\n  next: function() { /* 다음 슬라이드 */ },\n  getProgress: function() { /* 진행률 반환 */ }\n};',
              solution: 'const presentationTool = {\n  slides: [],\n  currentIndex: 0,\n  timer: null,\n  timeLimit: 300,\n  addSlide: function(title, notes) {\n    this.slides.push({ title, notes, index: this.slides.length + 1 });\n  },\n  start: function() {\n    console.log("=== 발표 시작 ===");\n    this.currentIndex = 0;\n    this.showCurrent();\n    let timeLeft = this.timeLimit;\n    this.timer = setInterval(() => {\n      timeLeft--;\n      if (timeLeft === 60) console.log("1분 남았습니다!");\n      if (timeLeft <= 0) {\n        clearInterval(this.timer);\n        console.log("시간 종료!");\n      }\n    }, 1000);\n  },\n  next: function() {\n    if (this.currentIndex < this.slides.length - 1) {\n      this.currentIndex++;\n      this.showCurrent();\n    }\n  },\n  showCurrent: function() {\n    const s = this.slides[this.currentIndex];\n    console.log("[" + s.index + "/" + this.slides.length + "] " + s.title);\n    console.log("노트: " + s.notes);\n  },\n  getProgress: function() {\n    return Math.round((this.currentIndex + 1) / this.slides.length * 100) + "%";\n  }\n};\n\npresentationTool.addSlide("소개", "프로젝트 이름과 목적 설명");\npresentationTool.addSlide("데모", "핵심 기능 시연");\npresentationTool.addSlide("마무리", "배운 점과 감사 인사");\nconsole.log("진행률:", presentationTool.getProgress());',
              hints: ['this를 사용해서 객체 속성에 접근하세요', 'setInterval로 타이머를, 배열로 슬라이드를 관리하세요', 'getProgress는 (현재+1)/전체 * 100으로 계산하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '통합 발표 도구를 완벽하게 구현했어요! 실전 발표에 바로 활용할 수 있어요!',
                good: '핵심 기능이 잘 통합되었어요!',
                partial: 'showCurrent 함수를 추가해서 현재 슬라이드를 표시하세요.',
                wrong: 'this를 활용해서 slides 배열과 currentIndex를 관리하세요.'
              }
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
                    challenges: [
            {
              id: 'c1',
              title: '슬라이드 HTML 구조',
              description: '프레젠테이션 슬라이드의 HTML 구조를 만듭니다.',
              difficulty: 'easy',
              starterCode: '<!-- 발표 슬라이드 페이지를 만드세요 -->\n<div class="presentation">\n  <!-- 슬라이드 1: 제목 -->\n  <!-- 슬라이드 2: 핵심 기능 목록 -->\n</div>',
              solution: '<div class="presentation">\n  <div class="slide active">\n    <h1>나의 프로젝트</h1>\n    <h2>학습 도우미 앱</h2>\n    <p>발표자: 홍길동</p>\n  </div>\n  <div class="slide">\n    <h2>핵심 기능</h2>\n    <ul>\n      <li>타이머 기능</li>\n      <li>학습 기록</li>\n      <li>통계 차트</li>\n    </ul>\n  </div>\n</div>',
              hints: ['각 슬라이드는 div.slide로 감싸세요', '첫 슬라이드에 active 클래스를 추가해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '슬라이드 구조를 완벽하게 만들었어요!',
                good: 'HTML 구조가 깔끔해요!',
                partial: '각 슬라이드를 div.slide로 감싸세요.',
                wrong: 'div 안에 제목과 내용을 넣어 슬라이드를 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '슬라이드 스타일 분석',
              description: '슬라이드에 적용할 CSS 스타일을 분석합니다.',
              difficulty: 'easy',
              starterCode: '/* 슬라이드 기본 스타일을 완성하세요 */\n.slide {\n  /* 화면 전체를 차지하도록 */\n  /* 내용을 가운데 정렬 */\n  /* 기본은 숨김 */\n}\n.slide.active {\n  /* 활성 슬라이드만 보이게 */\n}',
              solution: '.slide {\n  width: 100vw;\n  height: 100vh;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: sans-serif;\n  padding: 2rem;\n}\n.slide.active {\n  display: flex;\n}\n.slide h1 {\n  font-size: 3rem;\n  color: #333;\n}\n.slide h2 {\n  font-size: 2rem;\n  color: #666;\n}',
              hints: ['display: none으로 기본 숨김, display: flex로 표시해요', '100vw/100vh로 전체 화면을 사용하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '슬라이드 스타일을 완벽하게 구현했어요!',
                good: 'Flexbox 중앙 정렬이 잘 되었어요!',
                partial: 'display: none과 display: flex를 활용하세요.',
                wrong: 'Flexbox로 가운데 정렬: justify-content + align-items를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '슬라이드 전환 코드 수정',
              description: '슬라이드 전환 JavaScript의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 슬라이드 전환 - 버그를 수정하세요\nconst slides = document.querySelectorAll(".slide");\nlet current = 0;\n\nfunction goToSlide(index) {\n  // 버그: 모든 슬라이드의 active를 제거하지 않음\n  slides[index].classList.add("active");\n  current = index;\n}\n\nfunction nextSlide() {\n  if (current < slides.length) { // 버그 있음\n    goToSlide(current + 1);\n  }\n}',
              solution: 'const slides = document.querySelectorAll(".slide");\nlet current = 0;\n\nfunction goToSlide(index) {\n  slides.forEach(slide => slide.classList.remove("active"));\n  slides[index].classList.add("active");\n  current = index;\n}\n\nfunction nextSlide() {\n  if (current < slides.length - 1) {\n    goToSlide(current + 1);\n  }\n}\n\nfunction prevSlide() {\n  if (current > 0) {\n    goToSlide(current - 1);\n  }\n}',
              hints: ['goToSlide에서 먼저 모든 active를 제거해야 해요', 'slides.length - 1이 마지막 인덱스예요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '두 가지 버그를 모두 정확하게 수정했어요!',
                good: 'active 클래스 관리를 잘 이해했어요!',
                partial: 'forEach로 모든 슬라이드의 active를 제거하세요.',
                wrong: '먼저 모든 active를 제거하고, 해당 슬라이드에만 추가하세요.'
              }
            },
            {
              id: 'c4',
              title: '키보드 슬라이드 제어',
              description: '키보드 화살표로 슬라이드를 제어하는 기능을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 키보드로 슬라이드 제어\n// 왼쪽 화살표: 이전, 오른쪽 화살표: 다음\n// 스페이스바: 다음\n\ndocument.addEventListener("keydown", function(event) {\n  // event.key를 사용해서 키를 구분하세요\n  // "ArrowLeft", "ArrowRight", " " (스페이스)\n});',
              solution: 'let currentSlide = 0;\nconst totalSlides = 5;\n\ndocument.addEventListener("keydown", function(event) {\n  switch(event.key) {\n    case "ArrowRight":\n    case " ":\n      if (currentSlide < totalSlides - 1) {\n        currentSlide++;\n        console.log("슬라이드 " + (currentSlide + 1));\n      }\n      break;\n    case "ArrowLeft":\n      if (currentSlide > 0) {\n        currentSlide--;\n        console.log("슬라이드 " + (currentSlide + 1));\n      }\n      break;\n    case "Escape":\n      console.log("발표 종료");\n      break;\n  }\n});',
              hints: ['event.key로 어떤 키를 눌렀는지 확인해요', 'switch문으로 키를 구분하면 깔끔해요', '스페이스바는 " " (공백)이에요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '키보드 이벤트를 완벽하게 처리했어요!',
                good: 'switch문 활용이 깔끔해요!',
                partial: 'event.key 값을 확인하세요: "ArrowLeft", "ArrowRight"',
                wrong: 'addEventListener("keydown", ...)과 event.key를 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '프레젠테이션 시스템 통합',
              description: '슬라이드 + 스타일 + 제어를 통합한 미니 프레젠테이션을 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 미니 프레젠테이션 시스템 -->\n<style>/* 스타일 작성 */</style>\n<!-- 3개 슬라이드 + 네비게이션 버튼 + 진행 표시 -->',
              solution: '<style>\n  body { margin: 0; font-family: sans-serif; overflow: hidden; }\n  .slide { width: 100vw; height: 100vh; display: none; flex-direction: column; justify-content: center; align-items: center; }\n  .slide.active { display: flex; }\n  .slide:nth-child(1) { background: linear-gradient(135deg, #667eea, #764ba2); color: white; }\n  .slide:nth-child(2) { background: #f8f9fa; }\n  .slide:nth-child(3) { background: #1a1a2e; color: white; }\n  .nav-btn { position: fixed; top: 50%; padding: 1rem; background: rgba(0,0,0,0.3); color: white; border: none; cursor: pointer; z-index: 10; }\n  .nav-btn.prev { left: 10px; }\n  .nav-btn.next { right: 10px; }\n  .progress { position: fixed; bottom: 0; left: 0; height: 4px; background: #667eea; transition: width 0.3s; }\n</style>\n<div class="slide active"><h1>My Project</h1><p>Welcome!</p></div>\n<div class="slide"><h2>Features</h2><ul><li>Timer</li><li>Stats</li></ul></div>\n<div class="slide"><h2>Thank You!</h2><p>Questions?</p></div>\n<button class="nav-btn prev" onclick="prev()">&#8592;</button>\n<button class="nav-btn next" onclick="next()">&#8594;</button>\n<div class="progress" id="progress"></div>\n<script>\nlet cur = 0;\nconst s = document.querySelectorAll(".slide");\nfunction show(i) { s.forEach(x=>x.classList.remove("active")); s[i].classList.add("active"); document.getElementById("progress").style.width=((i+1)/s.length*100)+"%"; }\nfunction next() { if(cur<s.length-1){cur++;show(cur);} }\nfunction prev() { if(cur>0){cur--;show(cur);} }\n</script>',
              hints: ['각 슬라이드에 다른 배경색을 적용하세요', '진행 바는 현재 슬라이드/전체 비율로 너비를 조절해요', 'fixed 포지션으로 버튼과 진행 바를 고정하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '미니 프레젠테이션 시스템을 완벽하게 구현했어요! 바로 발표에 사용할 수 있어요!',
                good: '전체 구조와 기능이 잘 작동해요!',
                partial: '진행 바나 네비게이션 버튼을 추가해보세요.',
                wrong: 'HTML 슬라이드 구조를 먼저 만들고, CSS와 JS를 순서대로 추가하세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '데모 시나리오 구조화',
              description: '데모 영상의 시나리오를 JavaScript 객체로 구조화합니다.',
              difficulty: 'easy',
              starterCode: '// 데모 시나리오를 객체 배열로 만드세요\nconst scenario = [\n  // { step: 1, action: "행동", duration: 초, narration: "설명" }\n];',
              solution: 'const scenario = [\n  { step: 1, action: "앱 화면 보여주기", duration: 10, narration: "이것은 공부 버디 앱입니다." },\n  { step: 2, action: "타이머 시작 클릭", duration: 15, narration: "시작 버튼을 누르면 25분 타이머가 시작됩니다." },\n  { step: 3, action: "학습 기록 저장", duration: 10, narration: "공부가 끝나면 자동으로 기록됩니다." },\n  { step: 4, action: "통계 화면 보기", duration: 15, narration: "이번 주 얼마나 공부했는지 차트로 볼 수 있어요." }\n];\n\nconst totalTime = scenario.reduce((sum, s) => sum + s.duration, 0);\nconsole.log("총 데모 시간:", totalTime, "초");\nscenario.forEach(s => console.log(s.step + ". " + s.action + " (" + s.duration + "초)"));',
              hints: ['각 단계를 객체로 만들어 배열에 넣으세요', 'reduce로 전체 시간을 합산할 수 있어요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '데모 시나리오를 체계적으로 잘 구조화했어요!',
                good: '시나리오 구조가 명확해요!',
                partial: 'narration 필드를 추가해서 설명을 넣어보세요.',
                wrong: '각 단계를 { step, action, duration, narration } 형식으로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '데모 타임라인 표시',
              description: '데모 영상의 타임라인을 시각적으로 표시합니다.',
              difficulty: 'easy',
              starterCode: '// 데모 단계별 진행 바를 텍스트로 표시\nconst steps = [\n  { name: "소개", percent: 20 },\n  { name: "기능1", percent: 30 },\n  { name: "기능2", percent: 30 },\n  { name: "마무리", percent: 20 }\n];\n\n// 각 단계를 막대 그래프로 표시해보세요\n// 예: 소개  |========          | 20%',
              solution: 'const steps = [\n  { name: "소개", percent: 20 },\n  { name: "기능1", percent: 30 },\n  { name: "기능2", percent: 30 },\n  { name: "마무리", percent: 20 }\n];\n\nsteps.forEach(step => {\n  const filled = Math.round(step.percent / 5);\n  const empty = 20 - filled;\n  const bar = "=".repeat(filled) + " ".repeat(empty);\n  const label = step.name.padEnd(8);\n  console.log(label + "|" + bar + "| " + step.percent + "%");\n});\nconsole.log("\n총합:", steps.reduce((s, x) => s + x.percent, 0) + "%");',
              hints: ['"=".repeat(n)으로 반복 문자열을 만들어요', 'padEnd로 이름 길이를 맞추면 정렬돼요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '타임라인을 시각적으로 멋지게 표시했어요!',
                good: '텍스트 기반 시각화를 잘 했어요!',
                partial: 'repeat()와 padEnd()를 사용해서 정렬하세요.',
                wrong: 'repeat()으로 = 문자를 반복해서 막대를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '화면 녹화 체크리스트 수정',
              description: '데모 녹화 전 체크리스트 코드의 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 체크리스트 관리 - 버그를 수정하세요\nconst checklist = [\n  { item: "브라우저 탭 정리", checked: false },\n  { item: "알림 끄기", checked: false },\n  { item: "해상도 확인", checked: true },\n  { item: "마이크 테스트", checked: false }\n];\n\nfunction toggleItem(index) {\n  checklist[index].checked != checklist[index].checked; // 버그\n}\n\nfunction isReady() {\n  return checklist.every(item => item.checked = true); // 버그\n}\n\nconsole.log("준비 완료?", isReady());',
              solution: 'const checklist = [\n  { item: "브라우저 탭 정리", checked: false },\n  { item: "알림 끄기", checked: false },\n  { item: "해상도 확인", checked: true },\n  { item: "마이크 테스트", checked: false }\n];\n\nfunction toggleItem(index) {\n  checklist[index].checked = !checklist[index].checked; // != -> = !\n}\n\nfunction isReady() {\n  return checklist.every(item => item.checked === true); // = -> ===\n}\n\nfunction showStatus() {\n  checklist.forEach(c => {\n    console.log((c.checked ? "[v]" : "[ ]") + " " + c.item);\n  });\n  console.log("준비 완료?", isReady());\n}\n\nshowStatus();\ntoggleItem(0);\ntoggleItem(1);\ntoggleItem(3);\nshowStatus();',
              hints: ['!= 는 비교, = ! 는 토글이에요', 'every 안에서 = 대신 === 을 사용해야 해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '두 가지 연산자 버그를 정확하게 수정했어요!',
                good: '대입과 비교 연산자 차이를 잘 이해했어요!',
                partial: 'toggleItem에서 = ! 로 토글하세요.',
                wrong: '!= 은 비교, = 은 대입, === 은 일치 비교예요.'
              }
            },
            {
              id: 'c4',
              title: '데모 스크립트 생성기',
              description: '데모 영상의 대본을 자동 생성하는 함수를 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 데모 대본 생성기\nfunction generateDemoScript(projectName, features) {\n  // 인트로 + 각 기능 시연 + 아웃트로를 생성\n  // 반환: 대본 문자열\n}',
              solution: 'function generateDemoScript(projectName, features) {\n  const lines = [];\n  lines.push("=== " + projectName + " 데모 ===");\n  lines.push("");\n  lines.push("[인트로] 안녕하세요, " + projectName + "을 소개합니다.");\n  lines.push("");\n  features.forEach((feat, i) => {\n    lines.push("[기능 " + (i+1) + "] " + feat.name);\n    lines.push("  설명: " + feat.description);\n    lines.push("  시연: " + feat.demo);\n    lines.push("");\n  });\n  lines.push("[마무리] 감사합니다! 질문 있으신가요?");\n  return lines.join("\n");\n}\n\nconst features = [\n  { name: "타이머", description: "25분 집중 타이머", demo: "시작 버튼 클릭 시연" },\n  { name: "기록", description: "학습 시간 자동 저장", demo: "저장된 기록 보여주기" }\n];\nconsole.log(generateDemoScript("공부 버디", features));',
              hints: ['배열에 줄을 추가하고 join("\n")으로 합치세요', 'forEach의 인덱스를 활용해서 번호를 매기세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '대본 생성기를 완벽하게 구현했어요!',
                good: '구조적인 대본이 잘 생성되었어요!',
                partial: 'features를 forEach로 순회하면서 각 기능을 추가하세요.',
                wrong: '배열에 push하고 join으로 합쳐서 문자열을 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '인터랙티브 데모 페이지',
              description: '클릭하면 각 기능을 보여주는 인터랙티브 데모 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 인터랙티브 데모 페이지 -->\n<style>/* 스타일 */</style>\n<!-- 기능 목록 + 클릭 시 설명 표시 영역 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; }\n  h1 { color: #333; }\n  .feature-btn { display: block; width: 100%; padding: 12px; margin: 8px 0; border: 2px solid #6366f1; background: white; color: #6366f1; border-radius: 8px; cursor: pointer; font-size: 1rem; text-align: left; }\n  .feature-btn:hover { background: #6366f1; color: white; }\n  .demo-area { margin-top: 20px; padding: 20px; background: #f8f9fa; border-radius: 8px; min-height: 100px; }\n  .demo-area h3 { color: #6366f1; }\n</style>\n<h1>공부 버디 데모</h1>\n<button class="feature-btn" onclick="showDemo(0)">1. 타이머 기능</button>\n<button class="feature-btn" onclick="showDemo(1)">2. 학습 기록</button>\n<button class="feature-btn" onclick="showDemo(2)">3. 통계 보기</button>\n<div class="demo-area" id="demoArea">\n  <p>위 버튼을 클릭하면 기능 데모가 표시됩니다.</p>\n</div>\n<script>\nconst demos = [\n  { title: "타이머", content: "25:00 타이머가 시작되고 1초마다 감소합니다." },\n  { title: "학습 기록", content: "완료된 학습 세션이 localStorage에 저장됩니다." },\n  { title: "통계", content: "일별/주별 학습 시간 차트가 표시됩니다." }\n];\nfunction showDemo(i) {\n  const area = document.getElementById("demoArea");\n  area.innerHTML = "<h3>" + demos[i].title + "</h3><p>" + demos[i].content + "</p>";\n}\n</script>',
              hints: ['버튼 클릭 시 innerHTML로 영역 내용을 교체하세요', '데모 데이터를 배열로 관리하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '인터랙티브 데모 페이지를 완벽하게 구현했어요!',
                good: '클릭 이벤트와 DOM 조작이 잘 되었어요!',
                partial: '버튼 클릭 시 해당 기능 설명을 표시하세요.',
                wrong: 'onclick 이벤트와 innerHTML을 활용해서 내용을 교체하세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '발표 연습 체크리스트',
              description: '발표 연습용 체크리스트를 HTML로 만듭니다.',
              difficulty: 'easy',
              starterCode: '<!-- 발표 연습 체크리스트 -->\n<div class="checklist">\n  <h2>발표 전 체크리스트</h2>\n  <!-- 체크박스 목록을 만드세요 -->\n</div>',
              solution: '<div class="checklist">\n  <h2>발표 전 체크리스트</h2>\n  <label>\n    <input type="checkbox"> 슬라이드 완성\n  </label><br>\n  <label>\n    <input type="checkbox"> 데모 테스트\n  </label><br>\n  <label>\n    <input type="checkbox"> 대본 연습 3회\n  </label><br>\n  <label>\n    <input type="checkbox"> 타이머 설정\n  </label><br>\n  <label>\n    <input type="checkbox"> 질문 대비\n  </label>\n</div>',
              hints: ['input type="checkbox"로 체크박스를 만들어요', 'label 태그로 텍스트와 체크박스를 묶으세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '체크리스트를 완벽하게 만들었어요!',
                good: 'HTML 폼 요소를 잘 활용했어요!',
                partial: 'label과 input을 함께 사용하세요.',
                wrong: 'input type="checkbox"를 사용하고 label로 감싸세요.'
              }
            },
            {
              id: 'c2',
              title: '발표 시간 계산기',
              description: '슬라이드별 발표 시간을 계산합니다.',
              difficulty: 'easy',
              starterCode: '// 슬라이드별 시간을 계산하세요\nconst slides = [\n  { title: "소개", words: 50 },\n  { title: "문제", words: 80 },\n  { title: "해결", words: 100 },\n  { title: "데모", words: 30 },\n  { title: "마무리", words: 40 }\n];\n// 평균 말하기 속도: 분당 150단어\n// 각 슬라이드의 예상 시간(초)과 전체 시간을 계산하세요',
              solution: 'const slides = [\n  { title: "소개", words: 50 },\n  { title: "문제", words: 80 },\n  { title: "해결", words: 100 },\n  { title: "데모", words: 30 },\n  { title: "마무리", words: 40 }\n];\n\nconst WORDS_PER_MIN = 150;\nlet totalSeconds = 0;\n\nslides.forEach(slide => {\n  const seconds = Math.round(slide.words / WORDS_PER_MIN * 60);\n  totalSeconds += seconds;\n  console.log(slide.title + ": " + seconds + "초");\n});\n\nconst min = Math.floor(totalSeconds / 60);\nconst sec = totalSeconds % 60;\nconsole.log("\n총 발표 시간: " + min + "분 " + sec + "초");',
              hints: ['단어수 / 분당단어수 = 소요 시간(분)', '분 단위를 초로 바꾸려면 60을 곱하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '발표 시간을 정확하게 계산했어요!',
                good: '시간 계산 로직이 잘 되었어요!',
                partial: 'words / WORDS_PER_MIN * 60으로 초를 계산하세요.',
                wrong: '단어 수를 분당 속도로 나누고 60을 곱해 초로 변환하세요.'
              }
            },
            {
              id: 'c3',
              title: '연습 기록 코드 수정',
              description: '발표 연습 기록 시스템의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 연습 기록 - 버그를 찾아 수정하세요\nconst practices = [];\n\nfunction recordPractice(duration, rating) {\n  practices.push({\n    id: practices.length,\n    date: new Date().toLocaleDateString(),\n    duration: duration,\n    rating: rating // 1-5점\n  });\n}\n\nfunction getAverageRating() {\n  const sum = practices.reduce((total, p) => total + p.rating);\n  // 버그: reduce 초기값 누락\n  return sum / practices.length;\n}\n\nfunction getBestPractice() {\n  return practices.sort((a, b) => a.rating - b.rating)[0];\n  // 버그: 최고점인데 오름차순 정렬\n}',
              solution: 'const practices = [];\n\nfunction recordPractice(duration, rating) {\n  practices.push({\n    id: practices.length + 1,\n    date: new Date().toLocaleDateString(),\n    duration: duration,\n    rating: rating\n  });\n}\n\nfunction getAverageRating() {\n  if (practices.length === 0) return 0;\n  const sum = practices.reduce((total, p) => total + p.rating, 0);\n  return Math.round(sum / practices.length * 10) / 10;\n}\n\nfunction getBestPractice() {\n  return [...practices].sort((a, b) => b.rating - a.rating)[0];\n}\n\nrecordPractice(5, 3);\nrecordPractice(5, 4);\nrecordPractice(5, 5);\nconsole.log("평균:", getAverageRating());\nconsole.log("최고:", getBestPractice().rating + "점");',
              hints: ['reduce에 초기값 0을 추가하세요', '내림차순은 b - a 순서예요', '원본 배열을 보호하려면 스프레드 연산자를 사용하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'reduce와 sort 버그를 모두 정확하게 수정했어요!',
                good: '핵심 버그를 잘 찾았어요!',
                partial: 'reduce의 두 번째 인수에 0을 추가하세요.',
                wrong: 'reduce(fn, 0)으로 초기값을 주고, sort에서 b-a로 내림차순하세요.'
              }
            },
            {
              id: 'c4',
              title: '발표 피드백 카드 구현',
              description: '청중 피드백을 수집하고 표시하는 카드를 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 피드백 수집 및 요약 시스템\nconst feedbacks = [];\n\nfunction addFeedback(reviewer, scores, comment) {\n  // scores: { content: 1-5, delivery: 1-5, design: 1-5 }\n  // 평균 점수도 계산해서 저장\n}\n\nfunction getSummary() {\n  // 전체 평균, 카테고리별 평균, 베스트 코멘트 반환\n}',
              solution: 'const feedbacks = [];\n\nfunction addFeedback(reviewer, scores, comment) {\n  const avg = Math.round((scores.content + scores.delivery + scores.design) / 3 * 10) / 10;\n  feedbacks.push({ reviewer, scores, comment, average: avg });\n}\n\nfunction getSummary() {\n  const totalAvg = Math.round(feedbacks.reduce((s, f) => s + f.average, 0) / feedbacks.length * 10) / 10;\n  const contentAvg = Math.round(feedbacks.reduce((s, f) => s + f.scores.content, 0) / feedbacks.length * 10) / 10;\n  const deliveryAvg = Math.round(feedbacks.reduce((s, f) => s + f.scores.delivery, 0) / feedbacks.length * 10) / 10;\n  const best = [...feedbacks].sort((a, b) => b.average - a.average)[0];\n  return { totalAvg, contentAvg, deliveryAvg, bestComment: best.comment };\n}\n\naddFeedback("친구1", { content: 5, delivery: 4, design: 4 }, "내용이 좋아!");\naddFeedback("친구2", { content: 4, delivery: 5, design: 3 }, "발표 잘해!");\nconsole.log(getSummary());',
              hints: ['객체의 여러 속성 평균을 구하세요', 'reduce로 카테고리별 합계를 구할 수 있어요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '피드백 시스템을 완벽하게 구현했어요!',
                good: '통계 계산이 정확해요!',
                partial: 'reduce로 각 카테고리의 합계를 구해보세요.',
                wrong: 'addFeedback으로 데이터를 저장하고 getSummary로 통계를 내세요.'
              }
            },
            {
              id: 'c5',
              title: '발표 연습 대시보드',
              description: '연습 기록을 시각화하는 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 연습 기록 대시보드 -->\n<style>/* 대시보드 스타일 */</style>\n<!-- 통계 카드 + 연습 목록 + 진행 그래프 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 1rem; background: #f0f0f0; }\n  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 1rem; }\n  .stat-card { background: white; padding: 1rem; border-radius: 8px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }\n  .stat-card .number { font-size: 2rem; font-weight: bold; color: #6366f1; }\n  .stat-card .label { color: #888; font-size: 0.9rem; }\n  .practice-list { background: white; border-radius: 8px; padding: 1rem; }\n  .practice-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }\n  .rating { color: #f59e0b; }\n</style>\n<h2>발표 연습 대시보드</h2>\n<div class="stats">\n  <div class="stat-card"><div class="number">5</div><div class="label">연습 횟수</div></div>\n  <div class="stat-card"><div class="number">4.2</div><div class="label">평균 점수</div></div>\n  <div class="stat-card"><div class="number">25분</div><div class="label">총 연습시간</div></div>\n</div>\n<div class="practice-list">\n  <h3>연습 기록</h3>\n  <div class="practice-item"><span>1회차</span><span class="rating">3점</span></div>\n  <div class="practice-item"><span>2회차</span><span class="rating">4점</span></div>\n  <div class="practice-item"><span>3회차</span><span class="rating">4점</span></div>\n  <div class="practice-item"><span>4회차</span><span class="rating">5점</span></div>\n  <div class="practice-item"><span>5회차</span><span class="rating">5점</span></div>\n</div>',
              hints: ['통계 카드는 CSS Grid로 3열 배치하세요', '연습 목록은 flexbox로 양쪽 정렬하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '대시보드를 완벽하게 구현했어요! 실제 앱 수준이에요!',
                good: '레이아웃과 스타일이 깔끔해요!',
                partial: '통계 카드 영역을 Grid로 구성해보세요.',
                wrong: 'CSS Grid로 카드를 배치하고, Flexbox로 목록을 정렬하세요.'
              }
            }
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
                    challenges: [
            {
              id: 'c1',
              title: '피드백 양식 HTML',
              description: '건설적인 피드백을 위한 HTML 폼을 만듭니다.',
              difficulty: 'easy',
              starterCode: '<!-- 피드백 양식을 만드세요 -->\n<form id="feedbackForm">\n  <!-- 프로젝트명, 점수(1-5), 좋은 점, 개선할 점 -->\n</form>',
              solution: '<form id="feedbackForm">\n  <h2>피드백 양식</h2>\n  <label>프로젝트:  \n    <input type="text" id="project" required>\n  </label>\n  <label>점수:  \n    <select id="rating">\n      <option value="5">5 - 훌륭해요</option>\n      <option value="4">4 - 좋아요</option>\n      <option value="3">3 - 괜찮아요</option>\n      <option value="2">2 - 아쉬워요</option>\n      <option value="1">1 - 노력해요</option>\n    </select>\n  </label>\n  <label>좋은 점:  \n    <textarea id="strengths" rows="3"></textarea>\n  </label>\n  <label>개선할 점:  \n    <textarea id="improvements" rows="3"></textarea>\n  </label>\n  <button type="submit">제출</button>\n</form>',
              hints: ['select와 option으로 점수를 선택하게 해요', 'textarea로 긴 텍스트를 입력받아요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '피드백 양식을 완벽하게 만들었어요!',
                good: 'HTML 폼 요소를 잘 활용했어요!',
                partial: 'select로 점수를, textarea로 의견을 입력받으세요.',
                wrong: 'input, select, textarea 태그로 각 항목을 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '샌드위치 피드백 생성',
              description: '긍정-개선-격려 순서의 피드백을 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 샌드위치 피드백 생성기\nfunction createFeedback(strength, improvement, encouragement) {\n  // 샌드위치 구조: 긍정 -> 개선 -> 격려\n  return "";\n}\n\n// 예시 사용\nconsole.log(createFeedback(\n  "UI가 깔끔해요",\n  "에러 처리를 추가하면 좋겠어요",\n  "전체적으로 잘 만들었어요"\n));',
              solution: 'function createFeedback(strength, improvement, encouragement) {\n  const lines = [];\n  lines.push("좋은 점: " + strength);\n  lines.push("개선 제안: " + improvement);\n  lines.push("응원: " + encouragement);\n  return lines.join("\n");\n}\n\nconsole.log(createFeedback(\n  "UI가 깔끔하고 사용하기 편해요",\n  "입력이 비어있을 때 에러 메시지를 보여주면 좋겠어요",\n  "첫 프로젝트치고 정말 잘 만들었어요! 계속 발전할 거예요"\n));',
              hints: ['배열에 넣고 join으로 합치면 깔끔해요', '각 부분에 적절한 레이블을 붙이세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '샌드위치 피드백을 완벽하게 구현했어요!',
                good: '피드백 구조가 잘 되었어요!',
                partial: '긍정, 개선, 격려 세 부분을 모두 포함하세요.',
                wrong: '세 가지 인수를 순서대로 문자열에 포함시키세요.'
              }
            },
            {
              id: 'c3',
              title: '피드백 분류기 수정',
              description: '피드백을 카테고리별로 분류하는 코드를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 피드백을 카테고리별로 분류 - 버그를 수정하세요\nfunction categorizeFeedback(feedbacks) {\n  const result = { ui: [], feature: [], bug: [], other: [] };\n  feedbacks.forEach(fb => {\n    if (fb.category = "ui") result.ui.push(fb); // 버그\n    else if (fb.category = "feature") result.feature.push(fb); // 버그\n    else if (fb.category = "bug") result.bug.push(fb); // 버그\n    else result.other.push(fb);\n  });\n  return result;\n}',
              solution: 'function categorizeFeedback(feedbacks) {\n  const result = { ui: [], feature: [], bug: [], other: [] };\n  feedbacks.forEach(fb => {\n    if (fb.category === "ui") result.ui.push(fb);\n    else if (fb.category === "feature") result.feature.push(fb);\n    else if (fb.category === "bug") result.bug.push(fb);\n    else result.other.push(fb);\n  });\n  return result;\n}\n\nconst feedbacks = [\n  { text: "색상이 예뻐요", category: "ui" },\n  { text: "검색 기능 추가해주세요", category: "feature" },\n  { text: "버튼이 안 눌려요", category: "bug" }\n];\nconst sorted = categorizeFeedback(feedbacks);\nconsole.log("UI:", sorted.ui.length, "기능:", sorted.feature.length, "버그:", sorted.bug.length);',
              hints: ['= 하나는 대입, === 세 개는 비교예요', 'if 조건문에서는 === 을 사용해야 해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '모든 대입 연산자를 비교 연산자로 정확하게 수정했어요!',
                good: '= 과 === 의 차이를 잘 이해했어요!',
                partial: '모든 if 조건에서 = 를 === 로 바꾸세요.',
                wrong: 'if (x = y)는 대입, if (x === y)는 비교예요.'
              }
            },
            {
              id: 'c4',
              title: '피드백 통계 시스템',
              description: '받은 피드백의 통계를 계산하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 피드백 통계 시스템\nconst allFeedback = [];\n\nfunction addFeedback(from, scores, comment) {\n  // scores: { ui: 1-5, feature: 1-5, code: 1-5 }\n}\n\nfunction getStats() {\n  // 카테고리별 평균, 전체 평균, 가장 높은/낮은 카테고리 반환\n}',
              solution: 'const allFeedback = [];\n\nfunction addFeedback(from, scores, comment) {\n  allFeedback.push({ from, scores, comment, date: new Date().toLocaleDateString() });\n}\n\nfunction getStats() {\n  const len = allFeedback.length;\n  if (len === 0) return null;\n  const uiAvg = Math.round(allFeedback.reduce((s, f) => s + f.scores.ui, 0) / len * 10) / 10;\n  const featAvg = Math.round(allFeedback.reduce((s, f) => s + f.scores.feature, 0) / len * 10) / 10;\n  const codeAvg = Math.round(allFeedback.reduce((s, f) => s + f.scores.code, 0) / len * 10) / 10;\n  const categories = { ui: uiAvg, feature: featAvg, code: codeAvg };\n  const best = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];\n  const worst = Object.entries(categories).sort((a, b) => a[1] - b[1])[0];\n  return { categories, best: best[0], worst: worst[0], overall: Math.round((uiAvg + featAvg + codeAvg) / 3 * 10) / 10 };\n}\n\naddFeedback("김철수", { ui: 5, feature: 4, code: 3 }, "UI가 좋아요");\naddFeedback("이영희", { ui: 4, feature: 5, code: 4 }, "기능이 좋아요");\nconsole.log(getStats());',
              hints: ['reduce로 각 카테고리의 합을 구하세요', 'Object.entries로 객체를 배열로 변환하면 정렬이 가능해요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '피드백 통계 시스템을 완벽하게 구현했어요!',
                good: '카테고리별 통계가 잘 계산되었어요!',
                partial: 'Object.entries를 사용해서 최고/최저를 찾아보세요.',
                wrong: 'reduce로 합을 구하고, Object.entries + sort로 순위를 정하세요.'
              }
            },
            {
              id: 'c5',
              title: '피드백 대시보드 통합',
              description: '피드백 입력 + 통계 + 목록을 통합한 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 피드백 대시보드 -->\n<style>/* 스타일 */</style>\n<!-- 피드백 입력 폼 + 통계 카드 + 피드백 목록 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 700px; margin: 0 auto; padding: 1rem; }\n  .stats { display: flex; gap: 1rem; margin-bottom: 1rem; }\n  .stat { flex: 1; background: #f0f0ff; padding: 1rem; border-radius: 8px; text-align: center; }\n  .stat .value { font-size: 2rem; color: #6366f1; font-weight: bold; }\n  .feedback-card { background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 8px; }\n  .feedback-card .meta { color: #888; font-size: 0.85rem; }\n  .stars { color: #f59e0b; }\n  form { background: #fafafa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem; }\n  textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }\n  button { background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }\n</style>\n<h2>피드백 대시보드</h2>\n<div class="stats">\n  <div class="stat"><div class="value">4.3</div><div>평균 점수</div></div>\n  <div class="stat"><div class="value">6</div><div>총 피드백</div></div>\n  <div class="stat"><div class="value">UI</div><div>최고 분야</div></div>\n</div>\n<form>\n  <textarea placeholder="피드백을 작성하세요..."></textarea>\n  <button type="button">제출</button>\n</form>\n<div class="feedback-card">\n  <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>\n  <p>디자인이 깔끔하고 기능이 잘 작동해요!</p>\n  <div class="meta">김철수 - 2024.03.01</div>\n</div>\n<div class="feedback-card">\n  <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\n  <p>에러 처리가 잘 되어있고, 코드가 깔끔해요.</p>\n  <div class="meta">이영희 - 2024.03.01</div>\n</div>',
              hints: ['통계 카드는 flex로 가로 배치하세요', '별점은 &#9733;(채움)과 &#9734;(빈)으로 표현해요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '피드백 대시보드를 완벽하게 구현했어요! 실전에서 바로 사용할 수 있는 수준이에요!',
                good: '전체 구조와 스타일이 깔끔해요!',
                partial: '통계 카드 영역을 추가해보세요.',
                wrong: 'Flexbox로 통계 카드를 배치하고 피드백 목록을 만드세요.'
              }
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
                    challenges: [
            { id: 'c1', title: '버튼 크기 개선', description: '피드백을 반영하여 버튼 크기를 개선합니다.', difficulty: 'easy',
              starterCode: '/* 피드백: 버튼이 너무 작아요! */\n.btn {\n  padding: 4px 8px;\n  font-size: 12px;\n  /* 더 크게 수정하세요 */\n}',
              solution: '.btn {\n  padding: 12px 24px;\n  font-size: 1rem;\n  border-radius: 8px;\n  cursor: pointer;\n  min-width: 120px;\n  min-height: 44px; /* 터치 대상 최소 크기 */\n}',
              hints: ['모바일 터치 대상은 최소 44px이에요', 'rem 단위가 px보다 반응형에 좋아요'], estimatedMinutes: 3,
              feedback: { perfect: '버튼 크기가 완벽해요!', good: '접근성을 고려했어요!', partial: 'min-height: 44px를 추가하세요.', wrong: 'padding과 font-size를 키우세요.' } },
            { id: 'c2', title: '에러 메시지 추가', description: '피드백을 반영하여 입력 검증 에러 메시지를 추가합니다.', difficulty: 'easy',
              starterCode: '// 피드백: 잘못 입력해도 아무 메시지가 안 나와요\nfunction validateInput(value) {\n  // 빈 값, 숫자가 아닌 경우 에러 메시지 반환\n  return "";\n}',
              solution: 'function validateInput(value) {\n  if (!value || value.trim() === "") {\n    return "값을 입력해주세요";\n  }\n  if (isNaN(value)) {\n    return "숫자를 입력해주세요";\n  }\n  if (Number(value) < 1 || Number(value) > 180) {\n    return "1~180 사이의 숫자를 입력해주세요";\n  }\n  return ""; // 에러 없음\n}\n\nconsole.log(validateInput(""));     // 값을 입력해주세요\nconsole.log(validateInput("abc"));   // 숫자를 입력해주세요\nconsole.log(validateInput("25"));    // (빈 문자열 = 유효)',
              hints: ['여러 조건을 순서대로 체크하세요', '빈 문자열 반환은 에러 없음을 의미해요'], estimatedMinutes: 5,
              feedback: { perfect: '에러 검증을 완벽하게 구현했어요!', good: '검증 로직이 정확해요!', partial: '범위 검사도 추가해보세요.', wrong: 'if 조건으로 빈 값, 숫자 체크를 하세요.' } },
            { id: 'c3', title: '코드 리팩토링', description: '반복되는 코드를 함수로 추출합니다.', difficulty: 'medium',
              starterCode: '// 이 코드를 리팩토링하세요 - 반복을 줄이세요\nconst math = document.getElementById("math");\nmath.textContent = "수학: 25분";\nmath.style.color = "#333";\nmath.style.padding = "8px";\n\nconst eng = document.getElementById("eng");\neng.textContent = "영어: 30분";\neng.style.color = "#333";\neng.style.padding = "8px";\n\nconst sci = document.getElementById("sci");\nsci.textContent = "과학: 20분";\nsci.style.color = "#333";\nsci.style.padding = "8px";',
              solution: 'function updateSubject(id, name, minutes) {\n  const el = document.getElementById(id);\n  if (el) {\n    el.textContent = name + ": " + minutes + "분";\n    el.style.color = "#333";\n    el.style.padding = "8px";\n  }\n}\n\nupdateSubject("math", "수학", 25);\nupdateSubject("eng", "영어", 30);\nupdateSubject("sci", "과학", 20);',
              hints: ['공통 패턴을 함수로 추출하세요', '달라지는 부분만 매개변수로 받으세요'], estimatedMinutes: 7,
              feedback: { perfect: '리팩토링이 완벽해요! DRY 원칙을 잘 지켰어요!', good: '함수 추출이 깔끔해요!', partial: '공통 스타일 설정도 함수 안에 넣으세요.', wrong: '반복되는 3줄을 함수로 묶고 매개변수를 사용하세요.' } },
            { id: 'c4', title: '성능 개선', description: '비효율적인 코드를 개선합니다.', difficulty: 'medium',
              starterCode: '// 이 코드를 더 효율적으로 개선하세요\nfunction findRecord(records, subject) {\n  for (let i = 0; i < records.length; i++) {\n    if (records[i].subject === subject) {\n      return records[i];\n    }\n  }\n  return null;\n}\n\nfunction getTotalTime(records) {\n  let total = 0;\n  for (let i = 0; i < records.length; i++) {\n    total = total + records[i].duration;\n  }\n  return total;\n}',
              solution: 'function findRecord(records, subject) {\n  return records.find(r => r.subject === subject) || null;\n}\n\nfunction getTotalTime(records) {\n  return records.reduce((total, r) => total + r.duration, 0);\n}\n\nconst records = [\n  { subject: "수학", duration: 25 },\n  { subject: "영어", duration: 30 }\n];\nconsole.log(findRecord(records, "수학"));\nconsole.log("총 시간:", getTotalTime(records), "분");',
              hints: ['find()와 reduce()를 사용하면 간결해져요', '화살표 함수로 더 짧게 작성할 수 있어요'], estimatedMinutes: 10,
              feedback: { perfect: '모던 JavaScript로 깔끔하게 개선했어요!', good: 'find와 reduce 활용이 좋아요!', partial: 'reduce로 합계를 구해보세요.', wrong: 'for 루프를 find(), reduce()로 대체하세요.' } },
            { id: 'c5', title: '종합 코드 개선', description: '피드백 기반으로 전체 코드를 개선합니다.', difficulty: 'hard',
              starterCode: '// 피드백 목록:\n// 1. 에러 처리 추가\n// 2. 함수 분리\n// 3. 변수명 개선\n// 4. 주석 추가\n\nfunction f(a) {\n  let x = localStorage.getItem("d");\n  let y = x ? JSON.parse(x) : [];\n  y.push({n: a, t: Date.now()});\n  localStorage.setItem("d", JSON.stringify(y));\n}',
              solution: '/**\n * 학습 기록을 localStorage에 저장합니다\n * @param {string} subject - 과목 이름\n */\nfunction saveStudyRecord(subject) {\n  if (!subject || subject.trim() === "") {\n    console.error("과목명을 입력하세요");\n    return;\n  }\n  \n  try {\n    const savedData = localStorage.getItem("studyRecords");\n    const records = savedData ? JSON.parse(savedData) : [];\n    \n    records.push({\n      subject: subject,\n      timestamp: Date.now(),\n      date: new Date().toLocaleDateString()\n    });\n    \n    localStorage.setItem("studyRecords", JSON.stringify(records));\n    console.log(subject + " 기록이 저장되었습니다");\n  } catch (error) {\n    console.error("저장 실패:", error.message);\n  }\n}\n\nsaveStudyRecord("수학");',
              hints: ['의미 있는 변수명을 사용하세요', 'try-catch로 에러를 처리하세요', 'JSDoc 주석으로 함수를 설명하세요'], estimatedMinutes: 15,
              feedback: { perfect: '코드 품질이 크게 향상되었어요! 프로 수준의 리팩토링이에요!', good: '가독성과 안정성이 좋아졌어요!', partial: 'try-catch 에러 처리를 추가하세요.', wrong: '변수명을 의미있게, 에러 처리를 추가하세요.' } }
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
                    challenges: [
            {
              id: 'c1',
              title: '최종 발표 페이지 구조',
              description: '최종 발표용 랜딩 페이지의 HTML을 작성합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 프로젝트 소개 랜딩 페이지를 만드세요 -->\n<main>\n  <!-- 히어로 영역: 프로젝트 이름, 한 줄 소개 -->\n  <!-- 기능 소개: 3가지 핵심 기능 -->\n</main>',
              solution: '<main>\n  <section class="hero">\n    <h1>공부 버디</h1>\n    <p>학습 시간을 스마트하게 관리하세요</p>\n    <a href="#features" class="cta-btn">자세히 보기</a>\n  </section>\n  <section id="features">\n    <h2>핵심 기능</h2>\n    <div class="feature">\n      <h3>뽀모도로 타이머</h3>\n      <p>25분 집중 + 5분 휴식</p>\n    </div>\n    <div class="feature">\n      <h3>학습 기록</h3>\n      <p>자동 저장되는 학습 로그</p>\n    </div>\n    <div class="feature">\n      <h3>통계 대시보드</h3>\n      <p>일별/주별 학습 분석</p>\n    </div>\n  </section>\n</main>',
              hints: ['히어로 영역에는 큰 제목과 CTA 버튼을 넣어요', '기능 소개는 3개 정도가 적당해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '랜딩 페이지를 완벽하게 만들었어요!',
                good: '히어로와 기능 섹션이 잘 구성되었어요!',
                partial: 'CTA 버튼과 기능 카드를 추가하세요.',
                wrong: '히어로(h1 + p + a) + 기능 소개(3개 div) 구조를 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '발표 요약 JavaScript',
              description: '프로젝트 발표 요약을 생성하는 코드를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 발표 요약 생성기\nconst project = {\n  name: "공부 버디",\n  description: "학습 관리 앱",\n  techStack: ["HTML", "CSS", "JavaScript"],\n  features: 3,\n  duration: "3주"\n};\n\nfunction createSummary(proj) {\n  // 프로젝트 요약 문자열을 반환\n  // "프로젝트명: ... | 기술: ... | 기능: ...개 | 기간: ..."\n}',
              solution: 'const project = {\n  name: "공부 버디",\n  description: "학습 관리 앱",\n  techStack: ["HTML", "CSS", "JavaScript"],\n  features: 3,\n  duration: "3주"\n};\n\nfunction createSummary(proj) {\n  const parts = [\n    "프로젝트: " + proj.name,\n    "설명: " + proj.description,\n    "기술: " + proj.techStack.join(", "),\n    "기능: " + proj.features + "개",\n    "기간: " + proj.duration\n  ];\n  return parts.join(" | ");\n}\n\nconsole.log(createSummary(project));',
              hints: ['배열의 join 메서드로 기술 스택을 합쳐요', '각 정보를 | 로 구분하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '프로젝트 요약을 깔끔하게 생성했어요!',
                good: '정보 조합이 잘 되었어요!',
                partial: 'techStack.join(", ")으로 기술 목록을 합치세요.',
                wrong: '객체의 각 속성을 문자열로 조합하세요.'
              }
            },
            {
              id: 'c3',
              title: '발표 점수 계산기 수정',
              description: '발표 점수를 계산하는 코드의 오류를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 발표 점수 계산 - 버그 수정\nfunction calculateScore(evaluations) {\n  const weights = { content: 0.4, delivery: 0.3, design: 0.3 };\n  let weightedSum = 0;\n  evaluations.forEach(ev => {\n    const score = ev.content * weights.content\n                + ev.delivery * weights.delivery\n                + ev.design * weights.design;\n    weightedSum += score;\n  });\n  return weightedSum; // 버그: 평균이 아닌 합계를 반환\n}\n\nconst evals = [\n  { content: 5, delivery: 4, design: 5 },\n  { content: 4, delivery: 5, design: 4 }\n];\nconsole.log("점수:", calculateScore(evals));',
              solution: 'function calculateScore(evaluations) {\n  if (evaluations.length === 0) return 0;\n  const weights = { content: 0.4, delivery: 0.3, design: 0.3 };\n  let weightedSum = 0;\n  evaluations.forEach(ev => {\n    const score = ev.content * weights.content\n                + ev.delivery * weights.delivery\n                + ev.design * weights.design;\n    weightedSum += score;\n  });\n  return Math.round(weightedSum / evaluations.length * 10) / 10;\n}\n\nconst evals = [\n  { content: 5, delivery: 4, design: 5 },\n  { content: 4, delivery: 5, design: 4 }\n];\nconsole.log("평균 점수:", calculateScore(evals));',
              hints: ['합계를 evaluations.length로 나눠야 평균이 돼요', '빈 배열 체크도 추가하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '가중 평균 계산을 정확하게 수정했어요!',
                good: '평균 계산 버그를 잘 찾았어요!',
                partial: 'weightedSum을 배열 길이로 나누세요.',
                wrong: '합계를 evaluations.length로 나누면 평균이 됩니다.'
              }
            },
            {
              id: 'c4',
              title: '발표 Q&A 시스템',
              description: 'Q&A 질문을 관리하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 발표 Q&A 관리\nconst questions = [];\n\nfunction askQuestion(from, text) {\n  // 질문 추가 (answered: false)\n}\n\nfunction answerQuestion(id, answer) {\n  // 질문에 답변 달기\n}\n\nfunction getUnanswered() {\n  // 아직 답변하지 않은 질문 목록\n}',
              solution: 'const questions = [];\n\nfunction askQuestion(from, text) {\n  questions.push({\n    id: questions.length + 1,\n    from: from,\n    text: text,\n    answered: false,\n    answer: null\n  });\n}\n\nfunction answerQuestion(id, answer) {\n  const q = questions.find(q => q.id === id);\n  if (q) {\n    q.answered = true;\n    q.answer = answer;\n    return true;\n  }\n  return false;\n}\n\nfunction getUnanswered() {\n  return questions.filter(q => !q.answered);\n}\n\naskQuestion("김철수", "어떤 기술을 사용했나요?");\naskQuestion("이영희", "개발 기간은 얼마나 걸렸나요?");\nanswerQuestion(1, "HTML, CSS, JavaScript를 사용했어요");\nconsole.log("미답변:", getUnanswered().length + "개");',
              hints: ['find로 id에 해당하는 질문을 찾으세요', 'filter로 answered가 false인 것만 골라요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: 'Q&A 시스템을 완벽하게 구현했어요!',
                good: '질문과 답변 관리가 잘 되었어요!',
                partial: 'find로 질문을 찾고 속성을 업데이트하세요.',
                wrong: 'push로 추가, find로 검색, filter로 필터링하세요.'
              }
            },
            {
              id: 'c5',
              title: '최종 발표 종합 페이지',
              description: '프로젝트 소개 + 발표 내용 + Q&A를 통합한 최종 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 최종 발표 통합 페이지 -->\n<style>/* 스타일 */</style>\n<!-- 히어로 + 프로젝트 소개 + 기능 + Q&A 섹션 -->',
              solution: '<style>\n  * { margin: 0; box-sizing: border-box; }\n  body { font-family: sans-serif; }\n  .hero { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 4rem 2rem; text-align: center; }\n  .hero h1 { font-size: 3rem; margin-bottom: 1rem; }\n  .hero .cta { display: inline-block; background: white; color: #667eea; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 1rem; font-weight: bold; }\n  .section { padding: 3rem 2rem; max-width: 800px; margin: 0 auto; }\n  .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }\n  .feature-card { background: #f8f9fa; padding: 1.5rem; border-radius: 8px; text-align: center; }\n  .qa { background: #fafafa; }\n  .qa-item { padding: 1rem; border-bottom: 1px solid #eee; }\n  .qa-item .q { font-weight: bold; color: #333; }\n  .qa-item .a { color: #666; margin-top: 4px; }\n</style>\n<div class="hero">\n  <h1>공부 버디</h1>\n  <p>학습 시간을 스마트하게 관리하세요</p>\n  <a href="#features" class="cta">더 알아보기</a>\n</div>\n<div class="section" id="features">\n  <h2>핵심 기능</h2>\n  <div class="features">\n    <div class="feature-card"><h3>타이머</h3><p>뽀모도로 기법</p></div>\n    <div class="feature-card"><h3>기록</h3><p>자동 저장</p></div>\n    <div class="feature-card"><h3>통계</h3><p>차트 분석</p></div>\n  </div>\n</div>\n<div class="section qa">\n  <h2>Q&A</h2>\n  <div class="qa-item"><p class="q">Q: 어떤 기술을 사용했나요?</p><p class="a">A: HTML, CSS, JavaScript</p></div>\n  <div class="qa-item"><p class="q">Q: 개발 기간은?</p><p class="a">A: 약 3주입니다</p></div>\n</div>',
              hints: ['그라데이션 히어로 섹션을 먼저 만드세요', '기능 카드는 CSS Grid 3열로 배치', 'Q&A는 질문-답변 쌍을 반복 구조로'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '최종 발표 페이지를 완벽하게 구현했어요! 프로 수준의 랜딩 페이지예요!',
                good: '전체 구조와 디자인이 훌륭해요!',
                partial: 'Q&A 섹션을 추가해보세요.',
                wrong: '히어로, 기능, Q&A 세 섹션을 순서대로 만드세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: '회고 데이터 구조',
              description: '프로젝트 회고를 JavaScript 객체로 표현합니다.',
              difficulty: 'easy',
              starterCode: '// 프로젝트 회고 객체를 작성하세요\nconst retrospective = {\n  projectName: "",\n  // what_went_well: 잘한 점 배열\n  // what_to_improve: 개선할 점 배열\n  // lessons_learned: 배운 것 배열\n};',
              solution: 'const retrospective = {\n  projectName: "공부 버디 앱",\n  duration: "3주",\n  what_went_well: [\n    "시맨틱 HTML을 잘 활용했다",\n    "CSS 변수로 일관된 디자인을 구현했다",\n    "localStorage로 데이터 저장에 성공했다"\n  ],\n  what_to_improve: [\n    "에러 처리를 더 꼼꼼하게",\n    "모바일 반응형을 더 개선",\n    "코드 주석을 더 많이 작성"\n  ],\n  lessons_learned: [\n    "계획이 중요하다",\n    "작은 기능부터 만들면 좋다",\n    "피드백은 성장의 기회다"\n  ]\n};\nconsole.log(retrospective.projectName + " 회고");\nconsole.log("잘한 점:", retrospective.what_went_well.length + "개");',
              hints: ['세 가지 카테고리를 배열로 만드세요', '구체적인 내용을 넣어보세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '회고를 체계적으로 잘 정리했어요!',
                good: '핵심 카테고리를 잘 포함했어요!',
                partial: 'lessons_learned 배열을 추가하세요.',
                wrong: '잘한 점, 개선할 점, 배운 것 세 가지 배열을 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '회고 시각화',
              description: '회고 결과를 텍스트 차트로 시각화합니다.',
              difficulty: 'easy',
              starterCode: '// 회고를 카테고리별로 보기 좋게 출력\nconst retro = {\n  well: ["계획", "협업", "디자인"],\n  improve: ["테스트", "문서화"],\n  learned: ["계획의 중요성", "피드백 활용법", "디버깅 기법", "반응형 CSS"]\n};\n// 각 카테고리를 시각적으로 출력하세요',
              solution: 'const retro = {\n  well: ["계획", "협업", "디자인"],\n  improve: ["테스트", "문서화"],\n  learned: ["계획의 중요성", "피드백 활용법", "디버깅 기법", "반응형 CSS"]\n};\n\nfunction displayCategory(title, items, symbol) {\n  console.log("\n" + title + " (" + items.length + "개)");\n  console.log("-".repeat(30));\n  items.forEach((item, i) => {\n    console.log("  " + symbol + " " + item);\n  });\n}\n\ndisplayCategory("잘한 점", retro.well, "+");\ndisplayCategory("개선할 점", retro.improve, "!");\ndisplayCategory("배운 것", retro.learned, "*");',
              hints: ['함수로 반복되는 출력을 재사용하세요', 'repeat()으로 구분선을 만들 수 있어요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '회고를 시각적으로 잘 표현했어요!',
                good: '함수 재사용이 깔끔해요!',
                partial: '함수를 만들어서 세 카테고리를 동일한 형식으로 출력하세요.',
                wrong: 'forEach로 각 항목을 출력하고, 카테고리별 기호를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '성장 지표 계산기 수정',
              description: '프로젝트 전후의 성장을 측정하는 코드를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 성장 지표 계산 - 수정하세요\nfunction calculateGrowth(before, after) {\n  const skills = Object.keys(before);\n  const results = {};\n  skills.forEach(skill => {\n    results[skill] = {\n      before: before[skill],\n      after: after[skill],\n      growth: after[skill] - before[skill],\n      percent: (after[skill] - before[skill]) / before[skill] * 100\n      // 버그: before[skill]이 0이면?\n    };\n  });\n  return results;\n}\n\nconst before = { html: 3, css: 2, js: 0, debugging: 1 };\nconst after = { html: 5, css: 4, js: 3, debugging: 4 };\nconsole.log(calculateGrowth(before, after));',
              solution: 'function calculateGrowth(before, after) {\n  const skills = Object.keys(before);\n  const results = {};\n  skills.forEach(skill => {\n    const growth = after[skill] - before[skill];\n    const percent = before[skill] === 0\n      ? (after[skill] > 0 ? 100 : 0)\n      : Math.round(growth / before[skill] * 100);\n    results[skill] = {\n      before: before[skill],\n      after: after[skill],\n      growth: growth,\n      percent: percent + "%"\n    };\n  });\n  return results;\n}\n\nconst before = { html: 3, css: 2, js: 0, debugging: 1 };\nconst after = { html: 5, css: 4, js: 3, debugging: 4 };\nconst growth = calculateGrowth(before, after);\nObject.entries(growth).forEach(([skill, data]) => {\n  console.log(skill + ": " + data.before + " -> " + data.after + " (" + data.percent + ")");\n});',
              hints: ['0으로 나누기를 방어해야 해요', '삼항 연산자로 before가 0인 경우를 처리하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '나누기 0 방어를 포함해서 완벽하게 수정했어요!',
                good: '엣지 케이스를 잘 처리했어요!',
                partial: 'before[skill] === 0인 경우를 체크하세요.',
                wrong: '나누기 전에 분모가 0인지 확인하는 조건을 추가하세요.'
              }
            },
            {
              id: 'c4',
              title: '액션 아이템 관리',
              description: '회고에서 도출된 액션 아이템을 관리하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 회고 액션 아이템 관리\nconst actionItems = [];\n\nfunction addAction(description, priority, deadline) {\n  // priority: "high", "medium", "low"\n}\n\nfunction getByPriority(priority) {\n  // 특정 우선순위의 액션 아이템 반환\n}\n\nfunction markDone(id) {\n  // 완료 처리\n}\n\nfunction getProgress() {\n  // 완료율 반환\n}',
              solution: 'const actionItems = [];\n\nfunction addAction(description, priority, deadline) {\n  actionItems.push({\n    id: actionItems.length + 1,\n    description,\n    priority,\n    deadline,\n    done: false\n  });\n}\n\nfunction getByPriority(priority) {\n  return actionItems.filter(item => item.priority === priority);\n}\n\nfunction markDone(id) {\n  const item = actionItems.find(item => item.id === id);\n  if (item) item.done = true;\n}\n\nfunction getProgress() {\n  const done = actionItems.filter(item => item.done).length;\n  return Math.round(done / actionItems.length * 100) + "%";\n}\n\naddAction("에러 처리 추가", "high", "1주일");\naddAction("반응형 개선", "medium", "2주일");\naddAction("코드 주석 작성", "low", "3일");\nmarkDone(1);\nconsole.log("진행률:", getProgress());\nconsole.log("High:", getByPriority("high").length + "개");',
              hints: ['filter로 우선순위별 필터링', 'find로 ID 검색', '완료율은 (완료수/전체수)*100'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '액션 아이템 관리 시스템을 완벽하게 구현했어요!',
                good: '핵심 기능이 잘 작동해요!',
                partial: 'getProgress에서 완료 비율을 계산하세요.',
                wrong: 'push, filter, find를 활용해서 CRUD를 구현하세요.'
              }
            },
            {
              id: 'c5',
              title: '회고 보고서 생성기',
              description: '종합 회고 보고서를 자동 생성하는 시스템을 완성합니다.',
              difficulty: 'hard',
              starterCode: '// 회고 보고서 자동 생성\nfunction generateReport(project, retro, growth, actions) {\n  // 프로젝트 정보 + 회고 + 성장 지표 + 액션 아이템을 포함한\n  // 종합 보고서 문자열 생성\n}',
              solution: 'function generateReport(project, retro, growth, actions) {\n  const lines = [];\n  lines.push("=" .repeat(40));\n  lines.push("  프로젝트 회고 보고서");\n  lines.push("=".repeat(40));\n  lines.push("");\n  lines.push("프로젝트: " + project.name);\n  lines.push("기간: " + project.duration);\n  lines.push("");\n  lines.push("--- 잘한 점 ---");\n  retro.well.forEach(item => lines.push("  + " + item));\n  lines.push("");\n  lines.push("--- 개선할 점 ---");\n  retro.improve.forEach(item => lines.push("  ! " + item));\n  lines.push("");\n  lines.push("--- 성장 지표 ---");\n  Object.entries(growth).forEach(([skill, val]) => {\n    lines.push("  " + skill + ": " + val.before + " -> " + val.after);\n  });\n  lines.push("");\n  lines.push("--- 다음 액션 ---");\n  actions.forEach((a, i) => {\n    lines.push("  " + (i+1) + ". [" + a.priority + "] " + a.description);\n  });\n  lines.push("");\n  lines.push("=".repeat(40));\n  return lines.join("\n");\n}\n\nconst report = generateReport(\n  { name: "공부 버디", duration: "3주" },\n  { well: ["UI 디자인", "기능 구현"], improve: ["테스트", "문서화"] },\n  { html: { before: 3, after: 5 }, js: { before: 1, after: 4 } },\n  [{ priority: "high", description: "에러 처리" }]\n);\nconsole.log(report);',
              hints: ['배열에 각 줄을 push하고 join("\n")으로 합치세요', 'Object.entries로 성장 지표를 순회하세요', 'repeat()으로 구분선을 만드세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '종합 보고서 생성기를 완벽하게 구현했어요! 전문적인 수준이에요!',
                good: '보고서 구조가 논리적이에요!',
                partial: '성장 지표와 액션 아이템 섹션을 추가하세요.',
                wrong: '각 섹션을 순서대로 배열에 추가하고 join으로 합치세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: 'IT 직업 데이터 구조',
              description: 'IT 직업 정보를 객체 배열로 구조화합니다.',
              difficulty: 'easy',
              starterCode: '// IT 직업 정보를 배열로 만드세요\nconst careers = [\n  // { title, description, skills, avgSalary }\n];',
              solution: 'const careers = [\n  {\n    title: "프론트엔드 개발자",\n    description: "사용자가 보는 화면을 만드는 개발자",\n    skills: ["HTML", "CSS", "JavaScript", "React"],\n    avgSalary: "연봉 5000만원"\n  },\n  {\n    title: "백엔드 개발자",\n    description: "서버와 데이터베이스를 관리하는 개발자",\n    skills: ["Python", "Node.js", "SQL", "AWS"],\n    avgSalary: "연봉 5500만원"\n  },\n  {\n    title: "AI 엔지니어",\n    description: "인공지능 모델을 만드는 개발자",\n    skills: ["Python", "TensorFlow", "수학", "데이터분석"],\n    avgSalary: "연봉 7000만원"\n  }\n];\n\ncareers.forEach(c => {\n  console.log(c.title + ": " + c.skills.join(", "));\n});',
              hints: ['각 직업을 객체로 만들어 배열에 넣으세요', 'skills는 배열로 관리해요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: 'IT 직업 데이터를 체계적으로 잘 구조화했어요!',
                good: '직업 정보가 잘 정리되었어요!',
                partial: 'skills를 배열로 추가하세요.',
                wrong: '각 직업을 { title, description, skills, avgSalary } 형식으로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '직업 검색 함수',
              description: '기술 스택으로 적합한 직업을 검색합니다.',
              difficulty: 'easy',
              starterCode: '// 내가 가진 기술로 적합한 직업 찾기\nconst careers = [\n  { title: "프론트엔드", skills: ["HTML", "CSS", "JavaScript"] },\n  { title: "백엔드", skills: ["Python", "SQL", "Node.js"] },\n  { title: "풀스택", skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"] },\n  { title: "데이터 분석가", skills: ["Python", "SQL", "통계"] }\n];\n\nfunction findCareers(mySkills) {\n  // mySkills 중 하나라도 매칭되는 직업 반환\n}',
              solution: 'const careers = [\n  { title: "프론트엔드", skills: ["HTML", "CSS", "JavaScript"] },\n  { title: "백엔드", skills: ["Python", "SQL", "Node.js"] },\n  { title: "풀스택", skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"] },\n  { title: "데이터 분석가", skills: ["Python", "SQL", "통계"] }\n];\n\nfunction findCareers(mySkills) {\n  return careers.filter(career => {\n    const matched = career.skills.filter(s => mySkills.includes(s));\n    return matched.length > 0;\n  }).map(career => {\n    const matched = career.skills.filter(s => mySkills.includes(s));\n    return { title: career.title, matchCount: matched.length, totalSkills: career.skills.length };\n  });\n}\n\nconst mySkills = ["HTML", "CSS", "JavaScript"];\nconst results = findCareers(mySkills);\nresults.forEach(r => console.log(r.title + ": " + r.matchCount + "/" + r.totalSkills + " 매칭"));',
              hints: ['filter와 includes를 조합하세요', '매칭 개수를 함께 반환하면 더 유용해요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '직업 매칭 시스템을 완벽하게 구현했어요!',
                good: '필터링 로직이 정확해요!',
                partial: 'includes로 기술 매칭 여부를 확인하세요.',
                wrong: 'filter로 직업을 골라내고 includes로 기술을 비교하세요.'
              }
            },
            {
              id: 'c3',
              title: '직업 카드 HTML 수정',
              description: '직업 소개 카드 HTML의 접근성 문제를 수정합니다.',
              difficulty: 'medium',
              starterCode: '<!-- 접근성 문제를 수정하세요 -->\n<div onclick="showDetail(1)">\n  <img src="frontend.png">\n  <div>프론트엔드 개발자</div>\n  <div>화면을 만드는 개발자</div>\n  <div style="color: #ccc;">HTML, CSS, JS</div>\n</div>',
              solution: '<article class="career-card" role="button" tabindex="0" onclick="showDetail(1)" onkeydown="if(event.key===\'Enter\')showDetail(1)">\n  <img src="frontend.png" alt="프론트엔드 개발자 아이콘">\n  <h3>프론트엔드 개발자</h3>\n  <p>화면을 만드는 개발자</p>\n  <p class="skills">HTML, CSS, JS</p>\n</article>',
              hints: ['img에 alt 속성을 추가하세요', 'div 대신 시맨틱 태그를 사용하세요', '키보드 접근성을 위해 tabindex와 onkeydown을 추가하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '접근성을 완벽하게 개선했어요!',
                good: 'alt 속성과 시맨틱 태그를 잘 활용했어요!',
                partial: 'img에 alt를, div에 적절한 태그를 사용하세요.',
                wrong: 'alt, 시맨틱 태그, tabindex로 접근성을 개선하세요.'
              }
            },
            {
              id: 'c4',
              title: '기술 스택 매칭 시스템',
              description: '직업에 필요한 기술과 현재 기술의 매칭률을 계산합니다.',
              difficulty: 'medium',
              starterCode: '// 기술 매칭률 계산 시스템\nfunction calculateMatch(required, mySkills) {\n  // 매칭률과 부족한 기술을 반환\n  // { matchPercent, matched, missing }\n}',
              solution: 'function calculateMatch(required, mySkills) {\n  const matched = required.filter(skill => mySkills.includes(skill));\n  const missing = required.filter(skill => !mySkills.includes(skill));\n  const matchPercent = Math.round(matched.length / required.length * 100);\n  return { matchPercent, matched, missing };\n}\n\nconst frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];\nconst mySkills = ["HTML", "CSS", "JavaScript"];\n\nconst result = calculateMatch(frontendSkills, mySkills);\nconsole.log("매칭률: " + result.matchPercent + "%");\nconsole.log("보유: " + result.matched.join(", "));\nconsole.log("필요: " + result.missing.join(", "));',
              hints: ['filter와 includes로 매칭/미매칭을 분리하세요', '매칭률은 (매칭수/필요수)*100'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '기술 매칭 시스템을 완벽하게 구현했어요!',
                good: '매칭과 미매칭 분리가 정확해요!',
                partial: 'missing 배열도 계산해보세요.',
                wrong: 'filter(s => mySkills.includes(s))로 매칭을 확인하세요.'
              }
            },
            {
              id: 'c5',
              title: '진로 탐색 대시보드',
              description: '직업 목록 + 기술 매칭 + 추천을 통합한 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 진로 탐색 대시보드 -->\n<style>/* 스타일 */</style>\n<!-- 내 기술 표시 + 직업 카드들 + 매칭률 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 700px; margin: 0 auto; padding: 1rem; background: #f5f5f5; }\n  h1 { color: #333; }\n  .my-skills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 1rem; }\n  .skill-tag { background: #6366f1; color: white; padding: 4px 12px; border-radius: 16px; font-size: 0.9rem; }\n  .career-card { background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 1rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }\n  .career-card h3 { margin: 0 0 8px; }\n  .match-bar { height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden; margin: 8px 0; }\n  .match-fill { height: 100%; background: #10b981; border-radius: 4px; }\n  .missing { color: #ef4444; font-size: 0.85rem; }\n</style>\n<h1>진로 탐색</h1>\n<h3>내 기술</h3>\n<div class="my-skills">\n  <span class="skill-tag">HTML</span>\n  <span class="skill-tag">CSS</span>\n  <span class="skill-tag">JavaScript</span>\n</div>\n<div class="career-card">\n  <h3>프론트엔드 개발자</h3>\n  <p>화면을 만드는 개발자</p>\n  <div class="match-bar"><div class="match-fill" style="width:60%"></div></div>\n  <p>매칭률: 60% (3/5)</p>\n  <p class="missing">필요: React, TypeScript</p>\n</div>\n<div class="career-card">\n  <h3>백엔드 개발자</h3>\n  <p>서버를 관리하는 개발자</p>\n  <div class="match-bar"><div class="match-fill" style="width:0%"></div></div>\n  <p>매칭률: 0% (0/4)</p>\n  <p class="missing">필요: Python, Node.js, SQL, AWS</p>\n</div>',
              hints: ['기술 태그는 span으로, 매칭률은 프로그레스 바로 표시', '매칭률이 높은 순으로 정렬하면 좋아요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '진로 탐색 대시보드를 완벽하게 구현했어요! 실용적이에요!',
                good: '레이아웃과 시각화가 잘 되었어요!',
                partial: '매칭률 프로그레스 바를 추가하세요.',
                wrong: '기술 태그와 직업 카드를 만들고 매칭률을 표시하세요.'
              }
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
                    challenges: [
            {
              id: 'c1',
              title: '개발자 프로필 구조',
              description: '롤모델 개발자의 정보를 객체로 구조화합니다.',
              difficulty: 'easy',
              starterCode: '// 롤모델 개발자 프로필을 작성하세요\nconst roleModel = {\n  // name, age_started, achievement, advice, technologies\n};',
              solution: 'const roleModel = {\n  name: "탄야 쿠르솔라",\n  age_started: 10,\n  achievement: "18세에 애플에서 일하게 됨",\n  advice: "포기하지 마세요, 매일 조금씩 배우세요",\n  technologies: ["Swift", "iOS", "Python"],\n  story: "10살에 코딩을 시작해서 꾸준히 앱을 만들며 성장했어요"\n};\n\nconsole.log(roleModel.name + " (" + roleModel.age_started + "세에 시작)");\nconsole.log("성과: " + roleModel.achievement);\nconsole.log("조언: " + roleModel.advice);',
              hints: ['실제 또는 가상의 개발자 정보를 넣어보세요', '나이, 성과, 조언을 포함하세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '롤모델 프로필을 체계적으로 잘 만들었어요!',
                good: '핵심 정보가 잘 포함되었어요!',
                partial: 'advice 필드에 영감을 주는 조언을 추가하세요.',
                wrong: '각 속성에 의미 있는 값을 넣어보세요.'
              }
            },
            {
              id: 'c2',
              title: '개발자 타임라인',
              description: '개발자의 성장 과정을 타임라인으로 표시합니다.',
              difficulty: 'easy',
              starterCode: '// 개발자 성장 타임라인\nconst timeline = [\n  { year: 2015, event: "첫 코딩 수업" },\n  { year: 2016, event: "첫 웹사이트 제작" },\n  { year: 2018, event: "첫 앱 출시" },\n  { year: 2020, event: "인턴십" },\n  { year: 2022, event: "정식 취업" }\n];\n// 타임라인을 보기 좋게 출력하세요',
              solution: 'const timeline = [\n  { year: 2015, event: "첫 코딩 수업" },\n  { year: 2016, event: "첫 웹사이트 제작" },\n  { year: 2018, event: "첫 앱 출시" },\n  { year: 2020, event: "인턴십" },\n  { year: 2022, event: "정식 취업" }\n];\n\nconsole.log("=== 개발자 성장 타임라인 ===");\ntimeline.forEach((item, i) => {\n  const connector = i < timeline.length - 1 ? " |" : "  ";\n  console.log(" " + item.year + " --- " + item.event);\n  if (i < timeline.length - 1) console.log("        |");\n});\nconsole.log("\n총 " + (timeline[timeline.length-1].year - timeline[0].year) + "년의 여정");',
              hints: ['forEach로 각 이벤트를 출력하세요', '연결선(|)으로 타임라인 느낌을 주세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '타임라인을 시각적으로 멋지게 표현했어요!',
                good: '이벤트 출력이 깔끔해요!',
                partial: '각 이벤트 사이에 연결선을 추가하세요.',
                wrong: 'forEach로 year와 event를 출력하세요.'
              }
            },
            {
              id: 'c3',
              title: '영감 카드 HTML 수정',
              description: '롤모델 소개 카드의 HTML/CSS를 수정합니다.',
              difficulty: 'medium',
              starterCode: '<!-- 롤모델 카드를 개선하세요 -->\n<style>\n.card { width: 300px; border: 1px solid gray; }\n.card img { width: 300px; }\n</style>\n<div class="card">\n  <img src="developer.jpg">\n  <div>탄야 쿠르솔라</div>\n  <div style="font-size:12px;color:gray">10세에 코딩 시작, 18세에 애플 입사</div>\n  <div>"포기하지 마세요"</div>\n</div>',
              solution: '<style>\n  .card { width: 300px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n  .card img { width: 100%; height: 200px; object-fit: cover; }\n  .card-body { padding: 1rem; }\n  .card-body h3 { margin: 0 0 4px; color: #333; }\n  .card-body .bio { font-size: 0.9rem; color: #666; margin-bottom: 8px; }\n  .card-body blockquote { font-style: italic; color: #6366f1; border-left: 3px solid #6366f1; padding-left: 8px; margin: 8px 0; }\n</style>\n<article class="card">\n  <img src="developer.jpg" alt="탄야 쿠르솔라 사진">\n  <div class="card-body">\n    <h3>탄야 쿠르솔라</h3>\n    <p class="bio">10세에 코딩 시작, 18세에 애플 입사</p>\n    <blockquote>포기하지 마세요</blockquote>\n  </div>\n</article>',
              hints: ['border-radius와 box-shadow로 카드 스타일을 개선하세요', 'blockquote로 인용문을 표현하세요', 'alt 속성을 추가하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '롤모델 카드를 세련되게 개선했어요!',
                good: '시맨틱 태그와 스타일이 잘 적용되었어요!',
                partial: 'blockquote와 border-radius를 사용해보세요.',
                wrong: 'article, h3, p, blockquote로 구조를 개선하세요.'
              }
            },
            {
              id: 'c4',
              title: '학습 습관 분석기',
              description: '성공한 개발자들의 공통 습관을 분석하는 코드를 작성합니다.',
              difficulty: 'medium',
              starterCode: '// 성공 개발자들의 공통 습관 분석\nconst developers = [\n  { name: "A", habits: ["매일코딩", "독서", "커뮤니티", "사이드프로젝트"] },\n  { name: "B", habits: ["매일코딩", "블로그", "사이드프로젝트", "멘토링"] },\n  { name: "C", habits: ["매일코딩", "독서", "커뮤니티", "멘토링"] }\n];\n\n// 모든 개발자에게 공통된 습관을 찾으세요\n// 각 습관이 몇 명의 개발자에게 있는지 세세요',
              solution: 'const developers = [\n  { name: "A", habits: ["매일코딩", "독서", "커뮤니티", "사이드프로젝트"] },\n  { name: "B", habits: ["매일코딩", "블로그", "사이드프로젝트", "멘토링"] },\n  { name: "C", habits: ["매일코딩", "독서", "커뮤니티", "멘토링"] }\n];\n\nconst habitCount = {};\ndevelopers.forEach(dev => {\n  dev.habits.forEach(habit => {\n    habitCount[habit] = (habitCount[habit] || 0) + 1;\n  });\n});\n\nconst sorted = Object.entries(habitCount).sort((a, b) => b[1] - a[1]);\nconsole.log("=== 습관 분석 결과 ===");\nsorted.forEach(([habit, count]) => {\n  const bar = "#".repeat(count);\n  console.log(habit + ": " + bar + " (" + count + "/" + developers.length + ")");\n});\n\nconst common = sorted.filter(([h, c]) => c === developers.length).map(([h]) => h);\nconsole.log("\n공통 습관: " + common.join(", "));',
              hints: ['객체로 각 습관의 등장 횟수를 세세요', 'Object.entries로 정렬하세요', '모든 개발자에게 공통인 것을 filter로 찾으세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '습관 분석을 완벽하게 구현했어요! 데이터 분석 실력이 훌륭해요!',
                good: '빈도 계산과 정렬이 잘 되었어요!',
                partial: 'Object.entries와 sort로 정렬해보세요.',
                wrong: '객체에 습관별 카운트를 저장하고 정렬하세요.'
              }
            },
            {
              id: 'c5',
              title: '롤모델 갤러리 페이지',
              description: '여러 롤모델을 소개하는 갤러리 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 롤모델 갤러리 페이지 -->\n<style>/* 스타일 */</style>\n<!-- 히어로 + 개발자 카드 그리드 + 공통 습관 섹션 -->',
              solution: '<style>\n  body { font-family: sans-serif; margin: 0; background: #f5f5f5; }\n  .hero { background: #1a1a2e; color: white; padding: 3rem 2rem; text-align: center; }\n  .hero h1 { font-size: 2.5rem; }\n  .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; padding: 2rem; max-width: 900px; margin: 0 auto; }\n  .dev-card { background: white; border-radius: 12px; padding: 1.5rem; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }\n  .dev-card h3 { color: #333; }\n  .dev-card .quote { font-style: italic; color: #6366f1; margin: 12px 0; }\n  .dev-card .started { color: #888; font-size: 0.85rem; }\n  .habits { max-width: 600px; margin: 0 auto; padding: 2rem; }\n  .habit-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }\n</style>\n<div class="hero">\n  <h1>영감을 주는 개발자들</h1>\n  <p>그들의 이야기에서 배우세요</p>\n</div>\n<div class="gallery">\n  <article class="dev-card">\n    <h3>마크 저커버그</h3>\n    <p class="started">12세에 시작</p>\n    <p class="quote">"Done is better than perfect"</p>\n  </article>\n  <article class="dev-card">\n    <h3>탄야 쿠르솔라</h3>\n    <p class="started">10세에 시작</p>\n    <p class="quote">"포기하지 마세요"</p>\n  </article>\n  <article class="dev-card">\n    <h3>데이비드 카프</h3>\n    <p class="started">11세에 시작</p>\n    <p class="quote">"열정을 따라가세요"</p>\n  </article>\n</div>\n<div class="habits">\n  <h2>공통 성공 습관</h2>\n  <div class="habit-item"><span>매일 코딩</span><span>100%</span></div>\n  <div class="habit-item"><span>사이드 프로젝트</span><span>90%</span></div>\n  <div class="habit-item"><span>커뮤니티 참여</span><span>80%</span></div>\n</div>',
              hints: ['auto-fit과 minmax로 반응형 그리드를 만드세요', '개발자 카드에 이름, 시작 나이, 인용문을 넣으세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '롤모델 갤러리를 완벽하게 구현했어요! 영감을 주는 페이지예요!',
                good: '카드 그리드와 콘텐츠가 잘 구성되었어요!',
                partial: '공통 습관 섹션을 추가해보세요.',
                wrong: 'CSS Grid로 카드를 배치하고 롤모델 정보를 넣으세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: '로드맵 데이터 구조',
              description: '학습 로드맵을 JavaScript 객체로 구조화합니다.',
              difficulty: 'easy',
              starterCode: '// 6개월 학습 로드맵을 작성하세요\nconst roadmap = {\n  goal: "",\n  months: [\n    // { month: 1, topic: "", resources: [], milestone: "" }\n  ]\n};',
              solution: 'const roadmap = {\n  goal: "풀스택 웹 개발자 되기",\n  months: [\n    { month: 1, topic: "HTML/CSS 심화", resources: ["MDN", "freeCodeCamp"], milestone: "포트폴리오 사이트 완성" },\n    { month: 2, topic: "JavaScript 심화", resources: ["Eloquent JS", "코딩앙마"], milestone: "인터랙티브 웹앱" },\n    { month: 3, topic: "React 기초", resources: ["React 공식문서", "Nomad Coders"], milestone: "React 앱 1개" },\n    { month: 4, topic: "Node.js 기초", resources: ["Node.js 공식문서"], milestone: "REST API 구축" },\n    { month: 5, topic: "프로젝트", resources: ["YouTube", "Stack Overflow"], milestone: "풀스택 프로젝트" },\n    { month: 6, topic: "배포/취업준비", resources: ["GitHub", "프로그래머스"], milestone: "포트폴리오 배포" }\n  ]\n};\n\nroadmap.months.forEach(m => {\n  console.log(m.month + "개월차: " + m.topic + " -> " + m.milestone);\n});',
              hints: ['각 월을 객체로 만들어 배열에 넣으세요', 'resources와 milestone을 포함하세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '학습 로드맵을 체계적으로 잘 만들었어요!',
                good: '월별 계획이 명확해요!',
                partial: 'milestone 필드를 추가해서 목표를 구체화하세요.',
                wrong: '각 월에 topic, resources, milestone을 포함하세요.'
              }
            },
            {
              id: 'c2',
              title: '학습 진행률 추적',
              description: '로드맵의 진행 상황을 추적하는 코드를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 학습 진행률 추적기\nconst topics = [\n  { name: "HTML", total: 10, completed: 10 },\n  { name: "CSS", total: 10, completed: 8 },\n  { name: "JavaScript", total: 15, completed: 6 },\n  { name: "React", total: 10, completed: 0 }\n];\n\n// 각 토픽의 진행률을 계산하고 전체 진행률도 구하세요',
              solution: 'const topics = [\n  { name: "HTML", total: 10, completed: 10 },\n  { name: "CSS", total: 10, completed: 8 },\n  { name: "JavaScript", total: 15, completed: 6 },\n  { name: "React", total: 10, completed: 0 }\n];\n\nlet totalItems = 0;\nlet totalDone = 0;\n\ntopics.forEach(topic => {\n  const percent = Math.round(topic.completed / topic.total * 100);\n  const bar = "#".repeat(Math.floor(percent / 5)) + ".".repeat(20 - Math.floor(percent / 5));\n  console.log(topic.name.padEnd(12) + "[" + bar + "] " + percent + "%");\n  totalItems += topic.total;\n  totalDone += topic.completed;\n});\n\nconsole.log("\n전체 진행률: " + Math.round(totalDone / totalItems * 100) + "%");',
              hints: ['completed / total * 100으로 진행률을 구하세요', '#과 .으로 프로그레스 바를 만들어요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '진행률 추적을 시각적으로 멋지게 구현했어요!',
                good: '퍼센트 계산이 정확해요!',
                partial: '전체 진행률도 계산해보세요.',
                wrong: 'completed / total * 100으로 각 토픽의 진행률을 구하세요.'
              }
            },
            {
              id: 'c3',
              title: '로드맵 시각화 수정',
              description: '학습 로드맵 시각화 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 로드맵 타임라인 시각화 - 버그 수정\nfunction visualizeRoadmap(months) {\n  months.forEach((m, i) => {\n    const status = m.done ? "[완료]" : "[진행]";\n    const line = i < months.length ? "  |" : ""; // 버그\n    console.log(status + " " + m.month + "개월: " + m.topic);\n    console.log(line);\n  });\n  // 완료율 계산\n  const doneCount = months.filter(m => m.done === true);\n  console.log("완료: " + doneCount + "/" + months.length); // 버그\n}\n\nconst plan = [\n  { month: 1, topic: "HTML", done: true },\n  { month: 2, topic: "CSS", done: true },\n  { month: 3, topic: "JS", done: false }\n];\nvisualizeRoadmap(plan);',
              solution: 'function visualizeRoadmap(months) {\n  months.forEach((m, i) => {\n    const status = m.done ? "[완료]" : "[진행]";\n    console.log(status + " " + m.month + "개월: " + m.topic);\n    if (i < months.length - 1) {\n      console.log("  |");\n    }\n  });\n  const doneCount = months.filter(m => m.done === true).length;\n  console.log("\n완료: " + doneCount + "/" + months.length);\n}\n\nconst plan = [\n  { month: 1, topic: "HTML", done: true },\n  { month: 2, topic: "CSS", done: true },\n  { month: 3, topic: "JS", done: false }\n];\nvisualizeRoadmap(plan);',
              hints: ['마지막 항목 뒤에는 연결선이 없어야 해요', 'filter는 배열을 반환하므로 .length가 필요해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '두 가지 버그를 정확하게 수정했어요!',
                good: 'filter와 length 문제를 잘 찾았어요!',
                partial: 'filter().length로 개수를 구하세요.',
                wrong: 'i < months.length - 1로 마지막 체크, filter().length로 개수를 구하세요.'
              }
            },
            {
              id: 'c4',
              title: '학습 추천 시스템',
              description: '현재 수준에 따라 다음 학습 주제를 추천하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 학습 추천 시스템\nconst curriculum = [\n  { topic: "HTML 기초", level: 1, prereqs: [] },\n  { topic: "CSS 기초", level: 1, prereqs: [] },\n  { topic: "JavaScript 기초", level: 2, prereqs: ["HTML 기초"] },\n  { topic: "React", level: 3, prereqs: ["JavaScript 기초", "CSS 기초"] },\n  { topic: "Node.js", level: 3, prereqs: ["JavaScript 기초"] }\n];\n\nfunction getRecommendations(completedTopics) {\n  // 선수과목을 모두 완료한 과목 중 아직 안 한 것을 추천\n}',
              solution: 'const curriculum = [\n  { topic: "HTML 기초", level: 1, prereqs: [] },\n  { topic: "CSS 기초", level: 1, prereqs: [] },\n  { topic: "JavaScript 기초", level: 2, prereqs: ["HTML 기초"] },\n  { topic: "React", level: 3, prereqs: ["JavaScript 기초", "CSS 기초"] },\n  { topic: "Node.js", level: 3, prereqs: ["JavaScript 기초"] }\n];\n\nfunction getRecommendations(completedTopics) {\n  return curriculum.filter(course => {\n    if (completedTopics.includes(course.topic)) return false;\n    const allPrereqsMet = course.prereqs.every(pre => completedTopics.includes(pre));\n    return allPrereqsMet;\n  });\n}\n\nconst done = ["HTML 기초", "CSS 기초"];\nconst recs = getRecommendations(done);\nconsole.log("추천 과목:");\nrecs.forEach(r => console.log("  Lv" + r.level + " " + r.topic));',
              hints: ['every로 모든 선수과목을 완료했는지 확인하세요', '이미 완료한 과목은 제외하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '학습 추천 시스템을 완벽하게 구현했어요!',
                good: '선수과목 체크가 정확해요!',
                partial: 'every()로 모든 prereqs가 완료되었는지 확인하세요.',
                wrong: 'filter + every + includes를 조합해서 구현하세요.'
              }
            },
            {
              id: 'c5',
              title: '인터랙티브 로드맵 페이지',
              description: '학습 로드맵을 시각화한 인터랙티브 웹 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 학습 로드맵 페이지 -->\n<style>/* 스타일 */</style>\n<!-- 목표 + 타임라인 + 진행률 바 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f5f5f5; }\n  h1 { color: #333; }\n  .goal { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 1.5rem; border-radius: 12px; text-align: center; margin-bottom: 2rem; }\n  .timeline { position: relative; padding-left: 30px; }\n  .timeline::before { content: ""; position: absolute; left: 14px; top: 0; bottom: 0; width: 2px; background: #ddd; }\n  .step { position: relative; margin-bottom: 1.5rem; }\n  .step::before { content: ""; position: absolute; left: -22px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: #ddd; border: 2px solid white; }\n  .step.done::before { background: #10b981; }\n  .step.current::before { background: #6366f1; }\n  .step h3 { margin: 0; font-size: 1rem; }\n  .step p { margin: 4px 0 0; color: #666; font-size: 0.9rem; }\n  .progress { background: #e0e0e0; border-radius: 8px; height: 12px; margin-top: 2rem; overflow: hidden; }\n  .progress-fill { height: 100%; background: #10b981; border-radius: 8px; transition: width 0.5s; }\n</style>\n<div class="goal"><h1>풀스택 개발자 되기</h1><p>6개월 로드맵</p></div>\n<div class="timeline">\n  <div class="step done"><h3>1. HTML/CSS</h3><p>완료! 포트폴리오 사이트 완성</p></div>\n  <div class="step done"><h3>2. JavaScript</h3><p>완료! 인터랙티브 웹앱 제작</p></div>\n  <div class="step current"><h3>3. React</h3><p>진행 중...</p></div>\n  <div class="step"><h3>4. Node.js</h3><p>예정</p></div>\n  <div class="step"><h3>5. 프로젝트</h3><p>예정</p></div>\n  <div class="step"><h3>6. 배포</h3><p>예정</p></div>\n</div>\n<div class="progress"><div class="progress-fill" style="width:40%"></div></div>\n<p style="text-align:center;color:#666">40% 완료 (2/5 단계)</p>',
              hints: ['::before로 타임라인 점을 만드세요', 'done, current 클래스로 상태를 구분하세요', '프로그레스 바의 width로 진행률을 표시하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '인터랙티브 로드맵을 완벽하게 구현했어요! 전문가 수준이에요!',
                good: '타임라인 시각화가 깔끔해요!',
                partial: '::before로 타임라인 점을 만들어보세요.',
                wrong: '수직 타임라인 구조를 CSS로 먼저 만들고 내용을 채우세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: 'GitHub 프로필 마크다운',
              description: 'GitHub 프로필 README의 기본 구조를 이해합니다.',
              difficulty: 'easy',
              starterCode: '<!-- GitHub 프로필 README를 HTML로 구현하세요 -->\n<!-- 인사말, 기술 스택, 프로젝트 링크 포함 -->\n<div id="github-profile">\n  <!-- 여기에 작성 -->\n</div>',
              solution: '<div id="github-profile">\n  <h1>안녕하세요! 홍길동입니다</h1>\n  <p>웹 개발을 좋아하는 학생 개발자입니다</p>\n  <h2>기술 스택</h2>\n  <ul>\n    <li>HTML/CSS</li>\n    <li>JavaScript</li>\n    <li>Python</li>\n  </ul>\n  <h2>프로젝트</h2>\n  <ul>\n    <li><a href="#">공부 버디</a> - 학습 타이머 앱</li>\n    <li><a href="#">포트폴리오</a> - 개인 웹사이트</li>\n  </ul>\n  <h2>연락처</h2>\n  <p>Email: example@email.com</p>\n</div>',
              hints: ['자기소개, 기술, 프로젝트, 연락처 순서로 구성하세요', '프로젝트에는 링크를 포함하세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: 'GitHub 프로필을 완벽하게 구성했어요!',
                good: '핵심 정보가 잘 포함되었어요!',
                partial: '프로젝트 링크를 a 태그로 추가하세요.',
                wrong: 'h1으로 이름, h2로 섹션 제목, ul/li로 목록을 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '커밋 기록 분석',
              description: 'Git 커밋 기록을 분석하는 코드를 작성합니다.',
              difficulty: 'easy',
              starterCode: '// 커밋 기록을 분석하세요\nconst commits = [\n  { date: "2024-03-01", message: "feat: 타이머 추가", type: "feat" },\n  { date: "2024-03-02", message: "fix: 버그 수정", type: "fix" },\n  { date: "2024-03-02", message: "feat: 통계 기능", type: "feat" },\n  { date: "2024-03-03", message: "docs: README 업데이트", type: "docs" },\n  { date: "2024-03-03", message: "fix: 타이머 오류", type: "fix" }\n];\n// 타입별 커밋 수를 세세요',
              solution: 'const commits = [\n  { date: "2024-03-01", message: "feat: 타이머 추가", type: "feat" },\n  { date: "2024-03-02", message: "fix: 버그 수정", type: "fix" },\n  { date: "2024-03-02", message: "feat: 통계 기능", type: "feat" },\n  { date: "2024-03-03", message: "docs: README 업데이트", type: "docs" },\n  { date: "2024-03-03", message: "fix: 타이머 오류", type: "fix" }\n];\n\nconst typeCounts = {};\ncommits.forEach(c => {\n  typeCounts[c.type] = (typeCounts[c.type] || 0) + 1;\n});\n\nconsole.log("총 커밋:", commits.length);\nObject.entries(typeCounts).forEach(([type, count]) => {\n  console.log(type + ": " + count + "개 (" + Math.round(count / commits.length * 100) + "%)");\n});',
              hints: ['객체로 각 타입의 카운트를 저장하세요', 'Object.entries로 결과를 출력해요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '커밋 분석을 정확하게 구현했어요!',
                good: '타입별 집계가 잘 되었어요!',
                partial: '비율(%)도 함께 계산해보세요.',
                wrong: '객체에 typeCounts[type]을 증가시켜서 세세요.'
              }
            },
            {
              id: 'c3',
              title: '기여 그래프 수정',
              description: '깃허브 스타일 기여 그래프를 생성하는 코드를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 기여 그래프 텍스트 버전 - 버그 수정\nfunction makeGraph(weekData) {\n  const levels = [" ", ".", "#", "@"]; // 0, 1-2, 3-5, 6+\n  return weekData.map(day => {\n    if (day === 0) return levels[0];\n    if (day < 3) return levels[1];\n    if (day < 6) return levels[2];\n    return levels[3];\n  });\n  // 버그: join이 빠짐\n}\n\nconst week1 = [0, 3, 1, 5, 2, 0, 7];\nconst week2 = [1, 4, 6, 0, 2, 3, 1];\nconsole.log("Mon-Sun: " + makeGraph(week1));\nconsole.log("Mon-Sun: " + makeGraph(week2));',
              solution: 'function makeGraph(weekData) {\n  const levels = [" ", ".", "#", "@"];\n  return weekData.map(day => {\n    if (day === 0) return levels[0];\n    if (day < 3) return levels[1];\n    if (day < 6) return levels[2];\n    return levels[3];\n  }).join("");\n}\n\nconst week1 = [0, 3, 1, 5, 2, 0, 7];\nconst week2 = [1, 4, 6, 0, 2, 3, 1];\nconsole.log("Week 1: [" + makeGraph(week1) + "]");\nconsole.log("Week 2: [" + makeGraph(week2) + "]");\nconsole.log("범례:   =공백, .=1-2, #=3-5, @=6+");',
              hints: ['map은 배열을 반환하므로 join이 필요해요', '.join("")으로 문자열로 변환하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '.join()을 정확하게 추가했어요!',
                good: 'map과 join의 관계를 잘 이해했어요!',
                partial: 'map().join("")을 체이닝하세요.',
                wrong: 'map()은 배열을 반환하므로 .join("")으로 합쳐야 해요.'
              }
            },
            {
              id: 'c4',
              title: '프로필 통계 생성기',
              description: 'GitHub 프로필 통계를 자동 생성하는 함수를 구현합니다.',
              difficulty: 'medium',
              starterCode: '// GitHub 프로필 통계 생성기\nfunction generateStats(repos) {\n  // totalStars, totalForks, topLanguages, mostPopular 계산\n}\n\nconst repos = [\n  { name: "portfolio", stars: 12, forks: 3, language: "HTML" },\n  { name: "todo-app", stars: 25, forks: 8, language: "JavaScript" },\n  { name: "timer", stars: 18, forks: 5, language: "JavaScript" },\n  { name: "blog", stars: 5, forks: 1, language: "HTML" }\n];',
              solution: 'function generateStats(repos) {\n  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);\n  const totalForks = repos.reduce((sum, r) => sum + r.forks, 0);\n  const langCount = {};\n  repos.forEach(r => {\n    langCount[r.language] = (langCount[r.language] || 0) + 1;\n  });\n  const topLanguages = Object.entries(langCount).sort((a, b) => b[1] - a[1]);\n  const mostPopular = [...repos].sort((a, b) => b.stars - a.stars)[0];\n  return { totalStars, totalForks, topLanguages, mostPopular: mostPopular.name };\n}\n\nconst repos = [\n  { name: "portfolio", stars: 12, forks: 3, language: "HTML" },\n  { name: "todo-app", stars: 25, forks: 8, language: "JavaScript" },\n  { name: "timer", stars: 18, forks: 5, language: "JavaScript" },\n  { name: "blog", stars: 5, forks: 1, language: "HTML" }\n];\n\nconst stats = generateStats(repos);\nconsole.log("Stars:", stats.totalStars);\nconsole.log("Forks:", stats.totalForks);\nconsole.log("인기 저장소:", stats.mostPopular);',
              hints: ['reduce로 총합을 구하세요', '객체로 언어별 카운트를 세세요', 'sort로 가장 인기 있는 저장소를 찾으세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '프로필 통계를 완벽하게 계산했어요!',
                good: '핵심 통계가 잘 계산되었어요!',
                partial: '언어별 카운트를 객체로 세보세요.',
                wrong: 'reduce로 합계, 객체로 카운트, sort로 정렬하세요.'
              }
            },
            {
              id: 'c5',
              title: 'GitHub 프로필 카드 페이지',
              description: 'GitHub 프로필을 시각화한 카드 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- GitHub 프로필 카드 -->\n<style>/* 스타일 */</style>\n<!-- 프로필 카드 + 통계 + 저장소 목록 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #0d1117; color: #c9d1d9; }\n  .profile-card { background: #161b22; border: 1px solid #30363d; border-radius: 12px; padding: 2rem; text-align: center; }\n  .profile-card h1 { color: #58a6ff; margin-bottom: 4px; }\n  .profile-card .bio { color: #8b949e; }\n  .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1rem 0; }\n  .stat { background: #21262d; padding: 1rem; border-radius: 8px; text-align: center; }\n  .stat .num { font-size: 1.5rem; color: #58a6ff; font-weight: bold; }\n  .repo { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 1rem; margin-top: 8px; }\n  .repo h3 { color: #58a6ff; margin: 0 0 4px; font-size: 1rem; }\n  .repo .lang { display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin-right: 4px; }\n  .repo .meta { color: #8b949e; font-size: 0.85rem; }\n</style>\n<div class="profile-card">\n  <h1>@honggildong</h1>\n  <p class="bio">Student Developer | Web Enthusiast</p>\n  <div class="stats">\n    <div class="stat"><div class="num">4</div>Repos</div>\n    <div class="stat"><div class="num">60</div>Stars</div>\n    <div class="stat"><div class="num">17</div>Forks</div>\n  </div>\n</div>\n<div class="repo">\n  <h3>todo-app</h3>\n  <p class="meta"><span class="lang" style="background:#f7df1e"></span>JavaScript - 25 stars</p>\n</div>\n<div class="repo">\n  <h3>timer</h3>\n  <p class="meta"><span class="lang" style="background:#f7df1e"></span>JavaScript - 18 stars</p>\n</div>',
              hints: ['다크 테마를 적용하세요 (#0d1117 배경)', '언어 색상은 작은 원으로 표시해요', 'Grid로 통계 카드를 배치하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: 'GitHub 스타일 프로필 페이지를 완벽하게 구현했어요!',
                good: '다크 테마와 레이아웃이 깔끔해요!',
                partial: '저장소 카드에 언어 색상 표시를 추가하세요.',
                wrong: '다크 배경 + 통계 Grid + 저장소 카드 순서로 만드세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: '오픈소스 프로젝트 구조',
              description: '오픈소스 프로젝트의 기본 파일 구조를 이해합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 오픈소스 프로젝트 README 구조를 만드세요 -->\n<!-- 프로젝트명, 설명, 설치법, 사용법, 기여방법 -->\n<div class="readme">\n  <!-- 작성하세요 -->\n</div>',
              solution: '<div class="readme">\n  <h1>Todo App</h1>\n  <p>간단하고 강력한 할 일 관리 앱</p>\n  <h2>설치</h2>\n  <pre><code>git clone https://github.com/user/todo-app.git\ncd todo-app\nopen index.html</code></pre>\n  <h2>사용법</h2>\n  <ol>\n    <li>할 일 입력 후 추가 버튼 클릭</li>\n    <li>완료 시 체크박스 클릭</li>\n    <li>삭제 버튼으로 제거</li>\n  </ol>\n  <h2>기여 방법</h2>\n  <ol>\n    <li>Fork하기</li>\n    <li>브랜치 만들기</li>\n    <li>변경사항 커밋</li>\n    <li>Pull Request 보내기</li>\n  </ol>\n</div>',
              hints: ['README에는 설치, 사용법, 기여방법이 필수예요', 'pre/code 태그로 코드 블록을 만들어요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: 'README 구조를 완벽하게 만들었어요!',
                good: '핵심 섹션이 잘 포함되었어요!',
                partial: '기여 방법 섹션을 추가하세요.',
                wrong: 'h1으로 제목, h2로 섹션을 나누고 내용을 채우세요.'
              }
            },
            {
              id: 'c2',
              title: '라이선스 비교',
              description: '오픈소스 라이선스를 비교하는 코드를 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 오픈소스 라이선스 비교 도구\nconst licenses = [\n  { name: "MIT", commercial: true, modify: true, shareCode: false },\n  { name: "GPL", commercial: true, modify: true, shareCode: true },\n  { name: "Apache", commercial: true, modify: true, shareCode: false }\n];\n\n// 각 라이선스의 특징을 보기 좋게 출력하세요',
              solution: 'const licenses = [\n  { name: "MIT", commercial: true, modify: true, shareCode: false },\n  { name: "GPL", commercial: true, modify: true, shareCode: true },\n  { name: "Apache", commercial: true, modify: true, shareCode: false }\n];\n\nfunction compareLicenses(licenses) {\n  console.log("라이선스".padEnd(10) + "상업적".padEnd(8) + "수정".padEnd(8) + "코드공개");\n  console.log("-".repeat(35));\n  licenses.forEach(lic => {\n    const c = lic.commercial ? "O" : "X";\n    const m = lic.modify ? "O" : "X";\n    const s = lic.shareCode ? "필수" : "선택";\n    console.log(lic.name.padEnd(10) + c.padEnd(8) + m.padEnd(8) + s);\n  });\n}\n\ncompareLicenses(licenses);\nconsole.log("\n추천: 개인 프로젝트에는 MIT가 가장 간편해요!");',
              hints: ['padEnd로 열을 맞추세요', '삼항 연산자로 O/X를 표시해요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '라이선스 비교를 깔끔하게 구현했어요!',
                good: '표 형식 출력이 잘 되었어요!',
                partial: 'padEnd로 열 너비를 맞추세요.',
                wrong: 'padEnd와 삼항 연산자로 정렬된 표를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: 'PR 리뷰 체크리스트 수정',
              description: 'Pull Request 리뷰 체크리스트 코드를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// PR 리뷰 체크리스트 - 버그 수정\nfunction reviewPR(pr) {\n  const checks = [\n    { name: "코드 스타일", check: pr.linted },\n    { name: "테스트 통과", check: pr.testsPassed },\n    { name: "문서 업데이트", check: pr.docsUpdated },\n    { name: "브랜치 최신", check: pr.upToDate }\n  ];\n  \n  const passed = checks.filter(c => c.check = true); // 버그\n  const failed = checks.filter(c => c.check = false); // 버그\n  \n  return {\n    canMerge: failed.length === 0,\n    passRate: passed.length / checks.length * 100\n  };\n}',
              solution: 'function reviewPR(pr) {\n  const checks = [\n    { name: "코드 스타일", check: pr.linted },\n    { name: "테스트 통과", check: pr.testsPassed },\n    { name: "문서 업데이트", check: pr.docsUpdated },\n    { name: "브랜치 최신", check: pr.upToDate }\n  ];\n  \n  const passed = checks.filter(c => c.check === true);\n  const failed = checks.filter(c => c.check === false);\n  \n  return {\n    canMerge: failed.length === 0,\n    passRate: Math.round(passed.length / checks.length * 100) + "%",\n    failedItems: failed.map(c => c.name)\n  };\n}\n\nconst pr = { linted: true, testsPassed: true, docsUpdated: false, upToDate: true };\nconst result = reviewPR(pr);\nconsole.log("머지 가능:", result.canMerge);\nconsole.log("통과율:", result.passRate);\nif (!result.canMerge) console.log("실패:", result.failedItems.join(", "));',
              hints: ['= 는 대입, === 는 비교예요', 'filter 안에서 === 를 사용해야 해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '대입/비교 연산자 버그를 정확하게 수정했어요!',
                good: '=와 ===의 차이를 잘 이해했어요!',
                partial: '두 filter 모두 = 를 === 로 바꾸세요.',
                wrong: 'filter 조건에서 = 를 === 로 수정하세요.'
              }
            },
            {
              id: 'c4',
              title: 'Issue 관리 시스템',
              description: 'GitHub Issue를 관리하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// Issue 관리 시스템\nconst issues = [];\n\nfunction createIssue(title, type, priority) {\n  // type: "bug", "feature", "docs"\n  // priority: "high", "medium", "low"\n}\n\nfunction closeIssue(id) { /* 구현 */ }\nfunction getOpenIssues() { /* 구현 */ }\nfunction getByType(type) { /* 구현 */ }',
              solution: 'const issues = [];\n\nfunction createIssue(title, type, priority) {\n  issues.push({\n    id: issues.length + 1,\n    title, type, priority,\n    status: "open",\n    createdAt: new Date().toLocaleDateString()\n  });\n}\n\nfunction closeIssue(id) {\n  const issue = issues.find(i => i.id === id);\n  if (issue) issue.status = "closed";\n}\n\nfunction getOpenIssues() {\n  return issues.filter(i => i.status === "open");\n}\n\nfunction getByType(type) {\n  return issues.filter(i => i.type === type);\n}\n\ncreateIssue("버튼 안 눌림", "bug", "high");\ncreateIssue("다크모드 추가", "feature", "medium");\ncreateIssue("README 업데이트", "docs", "low");\ncloseIssue(1);\nconsole.log("열린 이슈:", getOpenIssues().length);\nconsole.log("버그:", getByType("bug").length);',
              hints: ['status 필드로 open/closed를 관리하세요', 'filter로 상태나 타입별 필터링하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: 'Issue 관리 시스템을 완벽하게 구현했어요!',
                good: 'CRUD 기능이 잘 작동해요!',
                partial: 'closeIssue에서 find로 찾고 status를 변경하세요.',
                wrong: 'push로 생성, find로 검색, filter로 필터링하세요.'
              }
            },
            {
              id: 'c5',
              title: '오픈소스 기여 대시보드',
              description: '오픈소스 기여 현황을 시각화하는 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 오픈소스 기여 대시보드 -->\n<style>/* 스타일 */</style>\n<!-- 기여 통계 + 기여한 프로젝트 목록 + 기여 그래프 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 700px; margin: 0 auto; padding: 2rem; background: #f6f8fa; }\n  h1 { color: #24292e; }\n  .contrib-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 1.5rem; }\n  .contrib-stat { background: white; border: 1px solid #e1e4e8; border-radius: 8px; padding: 1rem; text-align: center; }\n  .contrib-stat .number { font-size: 1.8rem; font-weight: bold; color: #2ea44f; }\n  .project-card { background: white; border: 1px solid #e1e4e8; border-radius: 8px; padding: 1rem; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }\n  .project-card h3 { margin: 0; color: #0366d6; font-size: 1rem; }\n  .tag { background: #ddf4ff; color: #0366d6; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }\n  .graph { display: flex; gap: 2px; margin-top: 1rem; }\n  .graph-cell { width: 14px; height: 14px; border-radius: 2px; }\n</style>\n<h1>My Contributions</h1>\n<div class="contrib-stats">\n  <div class="contrib-stat"><div class="number">127</div>Commits</div>\n  <div class="contrib-stat"><div class="number">15</div>PRs</div>\n  <div class="contrib-stat"><div class="number">8</div>Issues</div>\n  <div class="contrib-stat"><div class="number">3</div>Projects</div>\n</div>\n<h2>Contributed Projects</h2>\n<div class="project-card"><div><h3>awesome-library</h3><p style="margin:4px 0 0;color:#586069;font-size:0.85rem">버그 수정 기여</p></div><span class="tag">merged</span></div>\n<div class="project-card"><div><h3>cool-framework</h3><p style="margin:4px 0 0;color:#586069;font-size:0.85rem">문서 번역 기여</p></div><span class="tag">merged</span></div>\n<h2>Activity Graph</h2>\n<div class="graph">\n  <div class="graph-cell" style="background:#9be9a8"></div>\n  <div class="graph-cell" style="background:#40c463"></div>\n  <div class="graph-cell" style="background:#ebedf0"></div>\n  <div class="graph-cell" style="background:#30a14e"></div>\n  <div class="graph-cell" style="background:#9be9a8"></div>\n  <div class="graph-cell" style="background:#216e39"></div>\n  <div class="graph-cell" style="background:#ebedf0"></div>\n</div>',
              hints: ['GitHub 스타일 색상을 사용하세요', '기여 그래프는 작은 사각형으로 표현해요', 'Grid로 통계 카드를 4열 배치하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '오픈소스 기여 대시보드를 완벽하게 구현했어요!',
                good: '깃허브 스타일이 잘 반영되었어요!',
                partial: '기여 그래프를 색상 사각형으로 추가해보세요.',
                wrong: '통계 Grid + 프로젝트 카드 + 활동 그래프 순서로 만드세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: '커뮤니티 프로필 카드',
              description: '개발자 커뮤니티 프로필 카드의 HTML을 작성합니다.',
              difficulty: 'easy',
              starterCode: '<!-- 개발자 커뮤니티 프로필 카드를 만드세요 -->\n<div class="profile">\n  <!-- 이름, 소개, 관심분야(태그), 활동 통계 -->\n</div>',
              solution: '<div class="profile">\n  <h2>홍길동</h2>\n  <p>주니어 웹 개발자 | 배움을 좋아합니다</p>\n  <div class="tags">\n    <span class="tag">JavaScript</span>\n    <span class="tag">React</span>\n    <span class="tag">웹 접근성</span>\n  </div>\n  <div class="stats">\n    <span>게시글 15</span>\n    <span>답변 23</span>\n    <span>좋아요 42</span>\n  </div>\n  <a href="#" class="follow-btn">팔로우</a>\n</div>',
              hints: ['관심분야는 span 태그로 태그를 만드세요', '활동 통계를 숫자로 표시하세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '프로필 카드를 완벽하게 만들었어요!',
                good: '핵심 요소가 잘 포함되었어요!',
                partial: '활동 통계와 팔로우 버튼을 추가하세요.',
                wrong: 'h2, p, span, a 태그로 프로필을 구성하세요.'
              }
            },
            {
              id: 'c2',
              title: '좋은 질문 작성법',
              description: '개발자 커뮤니티에서 좋은 질문을 작성하는 패턴을 분석합니다.',
              difficulty: 'easy',
              starterCode: '// 좋은 질문 템플릿 생성기\nfunction createQuestion(title, tried, error, code) {\n  // 제목 + 시도한 것 + 에러 메시지 + 코드를 포함한 질문 생성\n  return "";\n}',
              solution: 'function createQuestion(title, tried, error, code) {\n  const parts = [\n    "## " + title,\n    "",\n    "### 시도한 것",\n    tried,\n    "",\n    "### 에러 메시지",\n    error,\n    "",\n    "### 코드",\n    code,\n    "",\n    "### 환경",\n    "- 브라우저: Chrome",\n    "- OS: Windows"\n  ];\n  return parts.join("\n");\n}\n\nconst question = createQuestion(\n  "배열 정렬이 안 됩니다",\n  "sort() 메서드를 사용해 숫자를 정렬하려고 했습니다",\n  "TypeError: Cannot read property",\n  "const arr = [3,1,2]; arr.sort();"\n);\nconsole.log(question);',
              hints: ['마크다운 형식으로 구조화하세요', '시도한 것과 에러 메시지는 필수예요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '좋은 질문 템플릿을 완벽하게 구현했어요!',
                good: '질문 구조가 명확해요!',
                partial: '환경 정보도 추가해보세요.',
                wrong: '제목, 시도한 것, 에러, 코드를 순서대로 포함하세요.'
              }
            },
            {
              id: 'c3',
              title: '커뮤니티 글 검색 수정',
              description: '커뮤니티 글 검색 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 글 검색 기능 - 버그 수정\nconst posts = [\n  { id: 1, title: "React 시작하기", tags: ["react", "javascript"], likes: 15 },\n  { id: 2, title: "CSS Grid 완벽 가이드", tags: ["css", "layout"], likes: 23 },\n  { id: 3, title: "JavaScript 비동기", tags: ["javascript", "async"], likes: 18 }\n];\n\nfunction searchPosts(keyword) {\n  return posts.filter(p => p.title.include(keyword)); // 버그: include -> includes\n}\n\nfunction getPopular(minLikes) {\n  return posts.filter(p => p.likes > minLikes).sort((a, b) => a.likes - b.likes); // 버그: 정렬 방향\n}',
              solution: 'const posts = [\n  { id: 1, title: "React 시작하기", tags: ["react", "javascript"], likes: 15 },\n  { id: 2, title: "CSS Grid 완벽 가이드", tags: ["css", "layout"], likes: 23 },\n  { id: 3, title: "JavaScript 비동기", tags: ["javascript", "async"], likes: 18 }\n];\n\nfunction searchPosts(keyword) {\n  return posts.filter(p => p.title.includes(keyword));\n}\n\nfunction getPopular(minLikes) {\n  return posts.filter(p => p.likes >= minLikes).sort((a, b) => b.likes - a.likes);\n}\n\nconsole.log("검색 결과:", searchPosts("JavaScript").map(p => p.title));\nconsole.log("인기글:", getPopular(15).map(p => p.title + "(" + p.likes + ")"));',
              hints: ['include는 존재하지 않는 메서드예요, includes를 사용하세요', '내림차순은 b - a 순서예요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '두 가지 버그를 정확하게 수정했어요!',
                good: 'includes와 정렬 방향을 잘 이해했어요!',
                partial: 'include -> includes, sort 방향 확인',
                wrong: 'includes()로 문자열 포함 확인, b-a로 내림차순 정렬하세요.'
              }
            },
            {
              id: 'c4',
              title: '스터디 그룹 매칭',
              description: '관심사 기반으로 스터디 그룹을 매칭하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 스터디 그룹 매칭 시스템\nconst members = [\n  { name: "A", interests: ["react", "javascript"] },\n  { name: "B", interests: ["python", "ai"] },\n  { name: "C", interests: ["javascript", "node"] },\n  { name: "D", interests: ["react", "typescript"] }\n];\n\nfunction findStudyPartners(myName, myInterests) {\n  // 공통 관심사가 있는 멤버를 찾아서 공통 관심사 수로 정렬\n}',
              solution: 'const members = [\n  { name: "A", interests: ["react", "javascript"] },\n  { name: "B", interests: ["python", "ai"] },\n  { name: "C", interests: ["javascript", "node"] },\n  { name: "D", interests: ["react", "typescript"] }\n];\n\nfunction findStudyPartners(myName, myInterests) {\n  return members\n    .filter(m => m.name !== myName)\n    .map(m => {\n      const common = m.interests.filter(i => myInterests.includes(i));\n      return { name: m.name, commonInterests: common, matchScore: common.length };\n    })\n    .filter(m => m.matchScore > 0)\n    .sort((a, b) => b.matchScore - a.matchScore);\n}\n\nconst partners = findStudyPartners("me", ["react", "javascript"]);\npartners.forEach(p => {\n  console.log(p.name + ": " + p.commonInterests.join(", ") + " (" + p.matchScore + "개 매칭)");\n});',
              hints: ['filter로 자기 자신을 제외하세요', 'map으로 공통 관심사를 계산하세요', 'matchScore로 정렬하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '스터디 매칭 시스템을 완벽하게 구현했어요!',
                good: '관심사 매칭 로직이 정확해요!',
                partial: 'matchScore로 정렬을 추가해보세요.',
                wrong: 'filter + map + sort 체이닝으로 구현하세요.'
              }
            },
            {
              id: 'c5',
              title: '커뮤니티 대시보드',
              description: '개발자 커뮤니티 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 커뮤니티 대시보드 -->\n<style>/* 스타일 */</style>\n<!-- 프로필 + 인기 글 + 추천 스터디 + 활동 피드 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 700px; margin: 0 auto; padding: 1rem; background: #f5f5f5; }\n  .welcome { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 1rem; }\n  .section { background: white; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }\n  .post { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }\n  .post .title { color: #333; font-weight: 500; }\n  .post .likes { color: #6366f1; }\n  .study-card { display: flex; gap: 1rem; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }\n  .study-card .members { color: #888; font-size: 0.85rem; }\n  .tag { display: inline-block; background: #e8e8ff; color: #6366f1; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; margin-right: 4px; }\n</style>\n<div class="welcome">\n  <h1>Welcome, 홍길동!</h1>\n  <p>오늘도 함께 성장해요</p>\n</div>\n<div class="section">\n  <h2>인기 글</h2>\n  <div class="post"><span class="title">React 18 새 기능 정리</span><span class="likes">42 좋아요</span></div>\n  <div class="post"><span class="title">CSS Container Query 가이드</span><span class="likes">38 좋아요</span></div>\n  <div class="post"><span class="title">TypeScript 5.0 핵심 변경점</span><span class="likes">35 좋아요</span></div>\n</div>\n<div class="section">\n  <h2>추천 스터디</h2>\n  <div class="study-card"><div><strong>React 스터디</strong><div><span class="tag">react</span><span class="tag">javascript</span></div><p class="members">멤버 5명</p></div></div>\n  <div class="study-card"><div><strong>알고리즘 스터디</strong><div><span class="tag">python</span><span class="tag">algorithm</span></div><p class="members">멤버 8명</p></div></div>\n</div>',
              hints: ['그라데이션 환영 배너로 시작하세요', '인기 글은 좋아요 수와 함께 표시', '스터디는 태그와 멤버 수를 표시하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '커뮤니티 대시보드를 완벽하게 구현했어요! 실제 서비스 수준이에요!',
                good: '전체 구조와 디자인이 훌륭해요!',
                partial: '추천 스터디 섹션을 추가해보세요.',
                wrong: '환영 배너 + 인기 글 + 추천 스터디 순서로 만드세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: 'SMART 목표 객체',
              description: 'SMART 기준에 맞는 목표를 JavaScript 객체로 작성합니다.',
              difficulty: 'easy',
              starterCode: '// SMART 목표를 객체로 만드세요\nconst goal = {\n  specific: "",       // 구체적\n  measurable: "",     // 측정 가능\n  achievable: "",     // 달성 가능\n  relevant: "",       // 관련성\n  timeBound: ""       // 기한\n};',
              solution: 'const goal = {\n  specific: "React로 개인 포트폴리오 웹사이트 만들기",\n  measurable: "5개 프로젝트를 포함한 반응형 사이트",\n  achievable: "주 5시간 학습으로 3개월 내 완성",\n  relevant: "프론트엔드 개발자 취업 준비",\n  timeBound: "2024년 6월 30일까지"\n};\n\nconsole.log("=== SMART 목표 ===");\nObject.entries(goal).forEach(([key, value]) => {\n  console.log(key.charAt(0).toUpperCase() + ": " + value);\n});',
              hints: ['각 항목을 구체적으로 작성하세요', 'S, M, A, R, T 다섯 가지를 모두 채우세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: 'SMART 목표를 완벽하게 작성했어요!',
                good: '다섯 가지 기준을 잘 충족했어요!',
                partial: 'timeBound에 구체적인 날짜를 넣으세요.',
                wrong: '각 속성에 SMART 기준에 맞는 구체적인 내용을 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: 'SMART 유효성 검사',
              description: '목표가 SMART 기준을 충족하는지 검사합니다.',
              difficulty: 'easy',
              starterCode: '// SMART 검증기\nfunction validateSMART(goal) {\n  const criteria = {\n    specific: goal.specific.length > 10,   // 10자 이상\n    measurable: /\\d/.test(goal.measurable), // 숫자 포함\n    achievable: goal.achievable.length > 0,\n    relevant: goal.relevant.length > 0,\n    timeBound: /\\d{4}/.test(goal.timeBound) // 연도 포함\n  };\n  // 모든 기준을 통과하는지 확인하세요\n}',
              solution: 'function validateSMART(goal) {\n  const criteria = {\n    specific: goal.specific.length > 10,\n    measurable: /\\d/.test(goal.measurable),\n    achievable: goal.achievable.length > 0,\n    relevant: goal.relevant.length > 0,\n    timeBound: /\\d{4}/.test(goal.timeBound)\n  };\n  const passed = Object.values(criteria).filter(v => v === true).length;\n  const total = Object.values(criteria).length;\n  const isValid = passed === total;\n\n  Object.entries(criteria).forEach(([key, ok]) => {\n    console.log((ok ? "[O]" : "[X]") + " " + key);\n  });\n  console.log("결과: " + passed + "/" + total + (isValid ? " SMART!" : " 개선 필요"));\n  return isValid;\n}\n\nvalidateSMART({\n  specific: "React로 포트폴리오 사이트 만들기",\n  measurable: "5개 프로젝트 포함",\n  achievable: "주 5시간 학습",\n  relevant: "취업 준비",\n  timeBound: "2024년 6월까지"\n});',
              hints: ['Object.values로 모든 기준의 결과를 확인하세요', 'filter(v => v === true).length로 통과 개수를 세세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: 'SMART 검증기를 완벽하게 구현했어요!',
                good: '검증 로직이 정확해요!',
                partial: '모든 criteria가 true인지 확인하세요.',
                wrong: 'Object.values와 filter로 통과 여부를 판단하세요.'
              }
            },
            {
              id: 'c3',
              title: '목표 추적기 수정',
              description: '목표 달성률을 추적하는 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 목표 추적기 - 버그 수정\nconst goals = [\n  { name: "HTML 마스터", target: 10, current: 10 },\n  { name: "JS 프로젝트 3개", target: 3, current: 1 },\n  { name: "커뮤니티 글 5개", target: 5, current: 3 }\n];\n\nfunction getProgress() {\n  return goals.map(g => ({\n    name: g.name,\n    percent: g.current / g.target * 100, // 소수점 문제\n    status: g.current >= g.target ? "완료" : "진행중"\n  }));\n}\n\nfunction getOverallProgress() {\n  const total = goals.reduce((sum, g) => sum + g.current / g.target, 0);\n  return total; // 버그: 평균이 아닌 합계\n}',
              solution: 'const goals = [\n  { name: "HTML 마스터", target: 10, current: 10 },\n  { name: "JS 프로젝트 3개", target: 3, current: 1 },\n  { name: "커뮤니티 글 5개", target: 5, current: 3 }\n];\n\nfunction getProgress() {\n  return goals.map(g => ({\n    name: g.name,\n    percent: Math.round(g.current / g.target * 100),\n    status: g.current >= g.target ? "완료" : "진행중"\n  }));\n}\n\nfunction getOverallProgress() {\n  const total = goals.reduce((sum, g) => sum + g.current / g.target, 0);\n  return Math.round(total / goals.length * 100);\n}\n\ngetProgress().forEach(g => {\n  console.log(g.name + ": " + g.percent + "% [" + g.status + "]");\n});\nconsole.log("전체: " + getOverallProgress() + "%");',
              hints: ['Math.round로 소수점을 정리하세요', '합계를 goals.length로 나눠서 평균을 구하세요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: '소수점과 평균 버그를 정확하게 수정했어요!',
                good: '두 가지 문제를 잘 찾았어요!',
                partial: '전체 진행률에서 goals.length로 나누세요.',
                wrong: 'Math.round로 정수화, / goals.length로 평균을 구하세요.'
              }
            },
            {
              id: 'c4',
              title: '목표 달성 알림 시스템',
              description: '목표 달성 시 알림을 보내는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 목표 관리 + 알림 시스템\nconst goalManager = {\n  goals: [],\n  notifications: [],\n  addGoal: function(name, target) { /* 구현 */ },\n  updateProgress: function(id, amount) { /* 구현, 달성 시 알림 */ },\n  getNotifications: function() { /* 구현 */ }\n};',
              solution: 'const goalManager = {\n  goals: [],\n  notifications: [],\n  addGoal: function(name, target) {\n    this.goals.push({ id: this.goals.length + 1, name, target, current: 0 });\n  },\n  updateProgress: function(id, amount) {\n    const goal = this.goals.find(g => g.id === id);\n    if (!goal) return;\n    goal.current += amount;\n    if (goal.current >= goal.target) {\n      goal.current = goal.target;\n      this.notifications.push({\n        message: goal.name + " 목표를 달성했어요!",\n        date: new Date().toLocaleDateString()\n      });\n    }\n  },\n  getNotifications: function() {\n    return this.notifications;\n  }\n};\n\ngoalManager.addGoal("커밋 30개", 30);\ngoalManager.addGoal("블로그 5개", 5);\ngoalManager.updateProgress(1, 30);\ngoalManager.updateProgress(2, 3);\nconsole.log("알림:", goalManager.getNotifications());\nconsole.log("목표:", goalManager.goals);',
              hints: ['달성 여부를 체크해서 알림을 추가하세요', 'current가 target을 넘지 않도록 하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '목표 달성 알림 시스템을 완벽하게 구현했어요!',
                good: '달성 감지와 알림이 잘 작동해요!',
                partial: '달성 시 notifications 배열에 알림을 추가하세요.',
                wrong: 'current >= target 조건으로 달성을 감지하고 알림을 push하세요.'
              }
            },
            {
              id: 'c5',
              title: '목표 관리 대시보드',
              description: 'SMART 목표를 관리하는 대시보드를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- SMART 목표 대시보드 -->\n<style>/* 스타일 */</style>\n<!-- 진행률 요약 + 목표 카드 목록 + 알림 -->',
              solution: '<style>\n  body { font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 1rem; background: #f5f5f5; }\n  .summary { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 2rem; border-radius: 12px; text-align: center; margin-bottom: 1rem; }\n  .summary .big { font-size: 3rem; font-weight: bold; }\n  .goal-card { background: white; border-radius: 8px; padding: 1rem; margin-bottom: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }\n  .goal-card h3 { margin: 0 0 8px; font-size: 1rem; }\n  .progress-bar { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; }\n  .progress-fill { height: 100%; border-radius: 4px; }\n  .complete .progress-fill { background: #10b981; }\n  .in-progress .progress-fill { background: #6366f1; }\n  .meta { display: flex; justify-content: space-between; margin-top: 4px; font-size: 0.85rem; color: #888; }\n  .badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; }\n  .badge.done { background: #dcfce7; color: #16a34a; }\n  .badge.progress { background: #e0e7ff; color: #4f46e5; }\n</style>\n<div class="summary">\n  <div class="big">67%</div>\n  <p>전체 목표 달성률</p>\n</div>\n<div class="goal-card complete">\n  <h3>HTML/CSS 마스터 <span class="badge done">완료</span></h3>\n  <div class="progress-bar"><div class="progress-fill" style="width:100%"></div></div>\n  <div class="meta"><span>10/10 레슨</span><span>100%</span></div>\n</div>\n<div class="goal-card in-progress">\n  <h3>JS 프로젝트 3개 <span class="badge progress">진행중</span></h3>\n  <div class="progress-bar"><div class="progress-fill" style="width:33%"></div></div>\n  <div class="meta"><span>1/3 프로젝트</span><span>33%</span></div>\n</div>\n<div class="goal-card in-progress">\n  <h3>커뮤니티 글 5개 <span class="badge progress">진행중</span></h3>\n  <div class="progress-bar"><div class="progress-fill" style="width:60%"></div></div>\n  <div class="meta"><span>3/5 글</span><span>60%</span></div>\n</div>',
              hints: ['그라데이션 요약 카드를 상단에 배치하세요', '각 목표에 프로그레스 바와 뱃지를 포함하세요', '완료와 진행중을 다른 색상으로 구분하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: 'SMART 목표 대시보드를 완벽하게 구현했어요! 동기부여가 되는 디자인이에요!',
                good: '프로그레스 바와 뱃지가 잘 구현되었어요!',
                partial: '프로그레스 바를 각 목표에 추가하세요.',
                wrong: '요약 카드 + 목표 카드(프로그레스 바 포함) 순서로 만드세요.'
              }
            }
          ],
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
                    challenges: [
            {
              id: 'c1',
              title: '학습 여정 요약',
              description: '전체 커리큘럼의 학습 내용을 JavaScript로 요약합니다.',
              difficulty: 'easy',
              starterCode: '// 52주 학습 여정을 요약하세요\nconst journey = {\n  units: [\n    // { name, weeks, keySkills }\n  ],\n  totalWeeks: 52\n};',
              solution: 'const journey = {\n  units: [\n    { name: "컴퓨팅 사고력", weeks: 8, keySkills: ["논리적 사고", "문제 분해", "패턴 인식"] },\n    { name: "블록코딩", weeks: 6, keySkills: ["순차", "반복", "조건"] },\n    { name: "Python 기초", weeks: 8, keySkills: ["변수", "함수", "리스트"] },\n    { name: "Python 심화", weeks: 6, keySkills: ["클래스", "파일", "모듈"] },\n    { name: "HTML/CSS", weeks: 8, keySkills: ["시맨틱 HTML", "Flexbox", "Grid"] },\n    { name: "JavaScript", weeks: 8, keySkills: ["DOM", "이벤트", "API"] },\n    { name: "프로젝트", weeks: 4, keySkills: ["기획", "개발", "배포"] },\n    { name: "종합", weeks: 4, keySkills: ["포트폴리오", "발표", "진로"] }\n  ],\n  totalWeeks: 52\n};\n\nconsole.log("=== 52주 학습 여정 ===");\njourney.units.forEach((u, i) => {\n  console.log((i+1) + ". " + u.name + " (" + u.weeks + "주) - " + u.keySkills.join(", "));\n});',
              hints: ['각 유닛의 이름, 기간, 핵심 기술을 정리하세요', 'forEach로 보기 좋게 출력하세요'],
              estimatedMinutes: 3,
              feedback: {
                perfect: '학습 여정을 완벽하게 정리했어요!',
                good: '유닛별 요약이 잘 되었어요!',
                partial: 'keySkills 배열을 모든 유닛에 추가하세요.',
                wrong: '각 유닛을 { name, weeks, keySkills } 형태로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '성장 그래프 생성',
              description: '학습 진행에 따른 실력 성장을 텍스트 그래프로 표현합니다.',
              difficulty: 'easy',
              starterCode: '// 월별 실력 성장을 텍스트 그래프로 표현\nconst monthlyLevel = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];\n// 각 달의 레벨을 막대 그래프로 출력하세요\n// 예: 1월: #### (Lv.4)',
              solution: 'const monthlyLevel = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];\n\nconsole.log("=== 실력 성장 그래프 ===");\nmonthlyLevel.forEach((level, i) => {\n  const month = String(i + 1).padStart(2, " ") + "월";\n  const bar = "#".repeat(level) + ".".repeat(10 - level);\n  console.log(month + ": [" + bar + "] Lv." + level);\n});\n\nconst growth = monthlyLevel[monthlyLevel.length - 1] - monthlyLevel[0];\nconsole.log("\n총 성장: Lv." + monthlyLevel[0] + " -> Lv." + monthlyLevel[monthlyLevel.length - 1]);\nconsole.log("성장폭: +" + growth + " 레벨!");',
              hints: ['repeat()으로 막대를 만드세요', 'padStart로 월 표시를 정렬하세요'],
              estimatedMinutes: 5,
              feedback: {
                perfect: '성장 그래프를 시각적으로 멋지게 표현했어요!',
                good: '텍스트 시각화가 잘 되었어요!',
                partial: '총 성장폭도 계산해서 출력해보세요.',
                wrong: 'repeat()과 padStart()로 정렬된 그래프를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '졸업 인증서 생성기 수정',
              description: '졸업 인증서를 HTML로 생성하는 코드의 버그를 수정합니다.',
              difficulty: 'medium',
              starterCode: '// 인증서 HTML 생성 - 버그 수정\nfunction generateCertificate(name, completedUnits, totalUnits) {\n  const percent = completedUnits / totalUnits * 100;\n  const grade = percent >= 90 ? "우수" :\n                percent >= 70 ? "양호" :\n                percent >= 50 ? "보통" : "미달";\n  \n  // 버그: 문자열 연결이 잘못됨\n  let html = "<div class=certificate>";\n  html += "<h1>수료 인증서<h1>";  // 닫는 태그 버그\n  html += "<p>이름: " + name + "<p>";  // 닫는 태그 버그\n  html += "<p>등급: " + grade + "</p>";\n  html += "<p>완료: " + completedUnits + "/" + totalUnits + " (" + percent + "%)</p>";\n  html += "</div>";\n  return html;\n}',
              solution: 'function generateCertificate(name, completedUnits, totalUnits) {\n  const percent = Math.round(completedUnits / totalUnits * 100);\n  const grade = percent >= 90 ? "우수" :\n                percent >= 70 ? "양호" :\n                percent >= 50 ? "보통" : "미달";\n  \n  let html = "<div class=\'certificate\'>";\n  html += "<h1>수료 인증서</h1>";\n  html += "<p>이름: " + name + "</p>";\n  html += "<p>등급: " + grade + "</p>";\n  html += "<p>완료: " + completedUnits + "/" + totalUnits + " (" + percent + "%)</p>";\n  html += "<p>날짜: " + new Date().toLocaleDateString() + "</p>";\n  html += "</div>";\n  return html;\n}\n\nconsole.log(generateCertificate("홍길동", 50, 52));',
              hints: ['닫는 태그가 올바른지 확인하세요', '</h1>, </p>처럼 /가 있어야 해요'],
              estimatedMinutes: 7,
              feedback: {
                perfect: 'HTML 태그 오류를 모두 정확하게 수정했어요!',
                good: '닫는 태그 문제를 잘 찾았어요!',
                partial: '<h1>과 <p>의 닫는 태그를 확인하세요.',
                wrong: '모든 여는 태그에 올바른 닫는 태그(</h1>, </p>)를 매칭하세요.'
              }
            },
            {
              id: 'c4',
              title: '미래 계획 시스템',
              description: '졸업 후 미래 계획을 관리하는 시스템을 구현합니다.',
              difficulty: 'medium',
              starterCode: '// 미래 계획 관리 시스템\nconst futurePlan = {\n  shortTerm: [],  // 1-3개월\n  midTerm: [],    // 3-6개월\n  longTerm: [],   // 6-12개월\n  addPlan: function(term, plan) { /* 구현 */ },\n  getPlansByTerm: function(term) { /* 구현 */ },\n  getTimeline: function() { /* 전체 타임라인 */ }\n};',
              solution: 'const futurePlan = {\n  shortTerm: [],\n  midTerm: [],\n  longTerm: [],\n  addPlan: function(term, plan) {\n    if (this[term]) {\n      this[term].push({ text: plan, added: new Date().toLocaleDateString() });\n    }\n  },\n  getPlansByTerm: function(term) {\n    return this[term] || [];\n  },\n  getTimeline: function() {\n    const labels = { shortTerm: "1-3개월", midTerm: "3-6개월", longTerm: "6-12개월" };\n    console.log("=== 미래 계획 타임라인 ===");\n    ["shortTerm", "midTerm", "longTerm"].forEach(term => {\n      console.log("\n[" + labels[term] + "]");\n      this[term].forEach((p, i) => console.log("  " + (i+1) + ". " + p.text));\n    });\n  }\n};\n\nfuturePlan.addPlan("shortTerm", "React 학습 시작");\nfuturePlan.addPlan("shortTerm", "포트폴리오 업데이트");\nfuturePlan.addPlan("midTerm", "사이드 프로젝트 완성");\nfuturePlan.addPlan("longTerm", "인턴십 지원");\nfuturePlan.getTimeline();',
              hints: ['this[term]으로 동적 속성에 접근하세요', '세 가지 기간을 forEach로 순회하세요'],
              estimatedMinutes: 10,
              feedback: {
                perfect: '미래 계획 시스템을 완벽하게 구현했어요!',
                good: '기간별 관리가 잘 되었어요!',
                partial: 'this[term]으로 해당 배열에 접근하세요.',
                wrong: 'this로 객체 속성에 접근하고, push로 추가하세요.'
              }
            },
            {
              id: 'c5',
              title: '졸업 기념 페이지',
              description: '52주 과정 수료를 축하하는 졸업 기념 페이지를 완성합니다.',
              difficulty: 'hard',
              starterCode: '<!-- 졸업 기념 페이지 -->\n<style>/* 스타일 */</style>\n<!-- 축하 메시지 + 성과 요약 + 인증서 + 미래 계획 -->',
              solution: '<style>\n  body { font-family: sans-serif; margin: 0; }\n  .celebration { background: linear-gradient(135deg, #667eea, #764ba2, #f093fb); color: white; padding: 4rem 2rem; text-align: center; }\n  .celebration h1 { font-size: 3rem; margin-bottom: 0.5rem; }\n  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; max-width: 800px; margin: -2rem auto 0; padding: 0 1rem; position: relative; }\n  .stat-card { background: white; border-radius: 12px; padding: 1.5rem; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }\n  .stat-card .num { font-size: 2rem; font-weight: bold; color: #6366f1; }\n  .certificate { max-width: 600px; margin: 2rem auto; border: 3px solid #d4af37; border-radius: 12px; padding: 2rem; text-align: center; background: #fffef5; }\n  .certificate h2 { color: #d4af37; font-size: 1.5rem; border-bottom: 2px solid #d4af37; padding-bottom: 0.5rem; }\n  .certificate .name { font-size: 2rem; color: #333; margin: 1rem 0; }\n  .future { max-width: 600px; margin: 0 auto; padding: 2rem; }\n  .future-item { padding: 12px; border-left: 3px solid #6366f1; margin-bottom: 8px; padding-left: 16px; }\n</style>\n<div class="celebration">\n  <h1>Congratulations!</h1>\n  <p>52주 커리큘럼을 수료했습니다</p>\n</div>\n<div class="stats-grid">\n  <div class="stat-card"><div class="num">52</div>완료한 주차</div>\n  <div class="stat-card"><div class="num">320</div>해결한 미션</div>\n  <div class="stat-card"><div class="num">8</div>완성한 프로젝트</div>\n  <div class="stat-card"><div class="num">Lv.9</div>최종 레벨</div>\n</div>\n<div class="certificate">\n  <h2>수료 인증서</h2>\n  <p class="name">홍길동</p>\n  <p>위 학생은 52주 코딩 커리큘럼을 성실히 이수하였음을 인증합니다.</p>\n  <p>2024년 12월</p>\n</div>\n<div class="future">\n  <h2>앞으로의 여정</h2>\n  <div class="future-item"><strong>1-3개월:</strong> React 학습, 포트폴리오 업데이트</div>\n  <div class="future-item"><strong>3-6개월:</strong> 풀스택 프로젝트, 오픈소스 기여</div>\n  <div class="future-item"><strong>6-12개월:</strong> 인턴십 도전, 개발자 커뮤니티 활동</div>\n</div>',
              hints: ['그라데이션 축하 배너를 상단에 배치하세요', '골드 색상(#d4af37)으로 인증서를 꾸미세요', 'Grid로 통계 카드를 배치하세요'],
              estimatedMinutes: 15,
              feedback: {
                perfect: '졸업 기념 페이지를 완벽하게 구현했어요! 정말 감동적인 페이지예요!',
                good: '축하 분위기가 잘 전달되었어요!',
                partial: '인증서 섹션을 추가해보세요.',
                wrong: '축하 배너 + 통계 + 인증서 + 미래 계획 순서로 만드세요.'
              }
            }
          ],
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

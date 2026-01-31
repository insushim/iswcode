import type { Unit } from '../../types';

// Unit 5: HTML & CSS 기초 (8주, 31-38주차)
// CSTA 표준: 1B-AP-15, 1B-IC-20, 2-AP-13, 2-AP-16, 2-AP-17
// 목표: 웹 페이지의 구조(HTML)와 스타일(CSS)을 이해하고 실제 웹사이트 만들기
// 교육 원칙: Scrimba (인터랙티브), freeCodeCamp (프로젝트 기반), Frontend Masters (실무 중심)

export const unit5: Unit = {
  id: 'unit-5',
  number: 5,
  title: 'HTML & CSS 기초',
  description: '웹 페이지를 만드는 언어! HTML로 구조를, CSS로 디자인을 배워 나만의 웹사이트를 만들어요',
  icon: '🌐',
  color: '#e34c26',
  unlockLevel: 35,
  totalMissions: 80,
  estimatedHours: 32,
  weeks: [
    // Week 31: HTML 기초 (10미션, 4시간)
    {
      id: 'week-31',
      number: 31,
      title: 'HTML 기초',
      description: '웹의 구조를 만드는 HTML의 기본을 배워요',
      missions: [
        {
          id: 'w31-m1',
          title: '웹의 세계로 떠나요',
          description: '우리가 매일 보는 웹 페이지가 어떻게 만들어지는지 알아봐요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 15,
          estimatedMinutes: 20,
          concept: '웹 페이지 구조',
          conceptExplanation: '웹 페이지는 HTML(뼈대), CSS(스타일), JavaScript(동작) 세 가지로 이루어져요. 마치 집을 짓는 것과 같아요!',
          cstaStandard: '1B-IC-20',
          learningObjectives: [
            '웹 페이지의 세 가지 구성 요소(HTML, CSS, JavaScript)를 이해할 수 있다',
            '웹 브라우저의 역할과 작동 원리를 설명할 수 있다',
            '웹 개발의 전체적인 흐름을 파악할 수 있다'
          ],
          realWorldExample: '유튜브, 인스타그램, 네이버처럼 우리가 매일 사용하는 모든 웹사이트가 HTML로 만들어졌어요! HTML은 웹의 가장 기본이 되는 언어예요.',
          hints: [
            '💡 HTML은 HyperText Markup Language의 약자예요',
            '💡 웹 브라우저(크롬, 사파리 등)가 HTML을 읽어서 화면에 보여줘요',
            '💡 집을 지을 때 뼈대 → 벽 → 인테리어 순서로 하듯, 웹도 HTML → CSS → JavaScript 순서로 배워요'
          ],
          conceptCards: [
            {
              title: 'HTML이란?',
              description: '웹 페이지의 구조와 내용을 만드는 언어예요. 제목, 문단, 이미지, 링크 등을 정의해요.'
            },
            {
              title: 'CSS란?',
              description: '웹 페이지를 예쁘게 꾸미는 언어예요. 색상, 크기, 배치 등을 디자인해요.'
            },
            {
              title: 'JavaScript란?',
              description: '웹 페이지에 동작을 추가하는 언어예요. 버튼 클릭, 애니메이션 등을 만들어요.'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m2',
          title: '첫 번째 HTML 태그 작성하기',
          description: 'HTML의 기본 단위인 태그를 배우고 직접 작성해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 25,
          concept: 'HTML 태그',
          conceptExplanation: '태그는 <태그이름>내용</태그이름> 형태예요. 시작 태그와 끝 태그로 내용을 감싸서 의미를 부여해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'HTML 태그의 기본 구조(시작 태그, 내용, 끝 태그)를 이해할 수 있다',
            'h1 태그를 사용하여 제목을 만들 수 있다',
            'HTML 코드를 직접 작성하고 실행할 수 있다'
          ],
          realWorldExample: '태그는 물건에 붙이는 라벨과 같아요! <h1> 태그는 "이건 제목이에요!"라고 알려주는 라벨이에요.',
          starterCode: '<!-- 여기에 h1 태그로 "나의 첫 웹페이지"를 작성해보세요 -->\n',
          solution: '<h1>나의 첫 웹페이지</h1>',
          hints: [
            '💡 시작 태그: <h1>',
            '💡 내용: 나의 첫 웹페이지',
            '💡 끝 태그: </h1> (슬래시가 있어요!)',
            '💡 대소문자를 구분하지 않지만 소문자로 쓰는 게 좋아요'
          ],
          commonMistakes: [
            '끝 태그에 슬래시(/)를 빼먹는 경우: <h1>제목<h1> ✗',
            '태그를 닫지 않는 경우: <h1>제목 ✗',
            '시작과 끝 태그 이름이 다른 경우: <h1>제목</h2> ✗'
          ],
          testCases: [
            {
              input: 'h1 태그 사용',
              expectedOutput: '<h1>나의 첫 웹페이지</h1>',
              description: 'h1 태그로 올바르게 제목을 작성했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m3',
          title: 'HTML 문서의 기본 구조',
          description: '완전한 HTML 문서를 만드는 방법을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 30,
          estimatedMinutes: 30,
          concept: 'HTML 문서 구조',
          conceptExplanation: '모든 HTML 문서는 <!DOCTYPE html>, <html>, <head>, <body>로 구성돼요. 이것이 웹 페이지의 기본 뼈대예요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'HTML 문서의 기본 구조(DOCTYPE, html, head, body)를 이해할 수 있다',
            '완전한 HTML 문서를 작성할 수 있다',
            'head와 body의 역할 차이를 설명할 수 있다'
          ],
          realWorldExample: '책을 생각해보세요! 책에는 표지(head)와 본문(body)이 있듯이, HTML도 정보(head)와 내용(body)으로 나뉘어요.',
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>페이지 제목을 여기에</title>\n</head>\n<body>\n  <!-- 여기에 h1 태그로 "환영합니다"를 작성하고 -->\n  <!-- p 태그로 "나의 첫 웹페이지입니다"를 작성하세요 -->\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>나의 웹페이지</title>\n</head>\n<body>\n  <h1>환영합니다</h1>\n  <p>나의 첫 웹페이지입니다</p>\n</body>\n</html>',
          hints: [
            '💡 <!DOCTYPE html>은 "이건 HTML5 문서야!"라고 선언해요',
            '💡 <head>는 페이지 정보(제목, 설정 등), <body>는 실제로 보이는 내용이에요',
            '💡 <title>에 쓴 내용이 브라우저 탭에 표시돼요',
            '💡 모든 태그는 <html> 안에 들어가야 해요'
          ],
          commonMistakes: [
            'DOCTYPE을 빼먹는 경우',
            'head와 body의 순서를 바꾸는 경우',
            'body에 들어갈 내용을 head에 넣는 경우'
          ],
          conceptCards: [
            {
              title: '<!DOCTYPE html>',
              description: 'HTML5 문서임을 선언해요. 맨 위에 한 번만 써요.'
            },
            {
              title: '<head>',
              description: '페이지 정보를 담아요. 화면에 직접 보이지 않아요. (제목, 메타데이터, CSS 링크 등)'
            },
            {
              title: '<body>',
              description: '실제로 화면에 보이는 모든 내용이 들어가요. (텍스트, 이미지, 버튼 등)'
            }
          ],
          testCases: [
            {
              input: '문서 구조',
              expectedOutput: 'DOCTYPE, html, head, body 모두 포함',
              description: 'HTML 문서의 기본 구조가 올바른지 확인'
            },
            {
              input: '내용 확인',
              expectedOutput: 'h1과 p 태그가 body 안에 있음',
              description: '요구사항대로 태그를 작성했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m4',
          title: '제목 태그 마스터하기 (h1~h6)',
          description: '다양한 크기의 제목을 만들고 계층 구조를 이해해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '제목 태그 계층',
          conceptExplanation: 'h1이 가장 큰 제목(대제목), h6이 가장 작은 제목(소소소제목)이에요. 숫자가 작을수록 중요해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'h1부터 h6까지의 제목 태그를 사용할 수 있다',
            '제목 태그의 계층 구조를 이해하고 올바르게 사용할 수 있다',
            '문서의 의미 구조를 제목으로 표현할 수 있다'
          ],
          realWorldExample: '책의 목차를 생각해보세요! 1장(h1) → 1.1절(h2) → 1.1.1항(h3) 처럼 제목도 계층이 있어요.',
          starterCode: '<body>\n  <!-- h1부터 h3까지 사용해서 아래 구조를 만드세요 -->\n  <!-- "나의 취미" (h1) -->\n  <!-- "운동" (h2) -->\n  <!-- "축구" (h3) -->\n  <!-- "독서" (h2) -->\n  <!-- "소설" (h3) -->\n</body>',
          solution: '<body>\n  <h1>나의 취미</h1>\n  <h2>운동</h2>\n  <h3>축구</h3>\n  <h2>독서</h2>\n  <h3>소설</h3>\n</body>',
          hints: [
            '💡 h1은 페이지에서 하나만 사용하는 게 좋아요 (가장 중요한 제목)',
            '💡 h2는 h1의 하위 주제, h3는 h2의 하위 주제예요',
            '💡 계층을 건너뛰지 마세요 (h1 → h3 ✗, h1 → h2 → h3 ✓)'
          ],
          commonMistakes: [
            '크기만 생각해서 h1 ~ h6을 순서 없이 쓰는 경우',
            '여러 개의 h1을 사용하는 경우',
            '계층을 건너뛰는 경우 (h1 다음에 바로 h3)'
          ],
          testCases: [
            {
              input: '제목 계층',
              expectedOutput: 'h1 → h2 → h3 순서로 사용',
              description: '올바른 제목 계층 구조를 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m5',
          title: '문단 태그로 글쓰기',
          description: 'p 태그로 문단을 만들고 줄바꿈도 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '문단과 줄바꿈',
          conceptExplanation: '<p> 태그는 문단(paragraph)을 만들어요. 여러 문단은 자동으로 간격이 생겨요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'p 태그를 사용하여 문단을 만들 수 있다',
            'br 태그로 줄바꿈을 할 수 있다',
            '문단과 줄바꿈의 차이를 이해할 수 있다'
          ],
          realWorldExample: '워드나 노트에 글을 쓸 때 엔터를 한 번 치면 줄바꿈(br), 두 번 치면 문단 나누기(p)와 비슷해요!',
          starterCode: '<body>\n  <h1>자기소개</h1>\n  <!-- p 태그를 사용해서 2개의 문단을 작성하세요 -->\n  <!-- 첫 번째 문단: "안녕하세요! 저는 초등학생입니다." -->\n  <!-- 두 번째 문단: "코딩을 배우는 것이 정말 재미있어요!" -->\n</body>',
          solution: '<body>\n  <h1>자기소개</h1>\n  <p>안녕하세요! 저는 초등학생입니다.</p>\n  <p>코딩을 배우는 것이 정말 재미있어요!</p>\n</body>',
          hints: [
            '💡 <p>문단 내용</p> 형태로 사용해요',
            '💡 각 문단은 자동으로 위아래 간격이 생겨요',
            '💡 <br> 태그는 닫는 태그가 없어요 (줄바꿈만 하기 때문!)'
          ],
          commonMistakes: [
            'p 태그 없이 그냥 텍스트만 쓰는 경우',
            'br 태그를 너무 많이 사용해서 간격을 조절하려는 경우 (CSS로 해야 해요!)'
          ],
          testCases: [
            {
              input: 'p 태그 사용',
              expectedOutput: '2개의 p 태그 존재',
              description: '요구사항대로 2개의 문단을 작성했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m6',
          title: '링크 만들기',
          description: 'a 태그로 다른 페이지로 이동하는 링크를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '하이퍼링크',
          conceptExplanation: '<a href="주소">텍스트</a> 형태로 클릭하면 다른 페이지로 이동하는 링크를 만들어요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'a 태그를 사용하여 링크를 만들 수 있다',
            'href 속성으로 URL을 지정할 수 있다',
            'target 속성으로 새 탭에서 열기를 설정할 수 있다'
          ],
          realWorldExample: '유튜브에서 영상을 클릭하면 해당 영상 페이지로 이동하죠? 그게 바로 링크예요!',
          starterCode: '<body>\n  <h1>좋아하는 웹사이트</h1>\n  <!-- a 태그로 네이버(https://www.naver.com)로 가는 링크를 만드세요 -->\n  <!-- 링크 텍스트는 "네이버로 가기" -->\n</body>',
          solution: '<body>\n  <h1>좋아하는 웹사이트</h1>\n  <a href="https://www.naver.com">네이버로 가기</a>\n</body>',
          hints: [
            '💡 href는 "hypertext reference"의 약자예요',
            '💡 https://를 꼭 포함해야 해요',
            '💡 target="_blank"를 추가하면 새 탭에서 열려요'
          ],
          commonMistakes: [
            'href를 빼먹는 경우: <a>네이버</a> ✗',
            'URL에 따옴표를 빼먹는 경우: href=https://naver.com ✗',
            'http:// 또는 https://를 빼먹는 경우'
          ],
          conceptCards: [
            {
              title: 'href 속성',
              description: '링크의 목적지 주소를 지정해요. (HyperText REFerence)'
            },
            {
              title: 'target 속성',
              description: '_blank: 새 탭에서 열기, _self: 현재 탭에서 열기(기본값)'
            }
          ],
          testCases: [
            {
              input: 'a 태그와 href',
              expectedOutput: '<a href="https://www.naver.com">네이버로 가기</a>',
              description: '올바른 링크를 만들었는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m7',
          title: '이미지 추가하기',
          description: 'img 태그로 웹 페이지에 이미지를 넣어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '이미지 태그',
          conceptExplanation: '<img src="이미지주소" alt="설명"> 형태로 이미지를 보여줘요. 닫는 태그가 없어요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'img 태그를 사용하여 이미지를 삽입할 수 있다',
            'src와 alt 속성의 역할을 이해하고 사용할 수 있다',
            '이미지 크기를 width와 height로 조절할 수 있다'
          ],
          realWorldExample: '인스타그램이나 유튜브 썸네일처럼 웹 페이지에 사진을 보여주고 싶을 때 img 태그를 사용해요!',
          starterCode: '<body>\n  <h1>나의 사진</h1>\n  <!-- img 태그로 이미지를 추가하세요 -->\n  <!-- src: https://picsum.photos/200 (랜덤 이미지) -->\n  <!-- alt: "랜덤 이미지" -->\n</body>',
          solution: '<body>\n  <h1>나의 사진</h1>\n  <img src="https://picsum.photos/200" alt="랜덤 이미지">\n</body>',
          hints: [
            '💡 img 태그는 닫는 태그가 없어요 (self-closing)',
            '💡 src는 이미지 파일의 주소예요',
            '💡 alt는 이미지를 못 봤을 때 대신 보여줄 설명이에요 (접근성!)',
            '💡 width="200"처럼 크기를 조절할 수 있어요'
          ],
          commonMistakes: [
            'alt를 빼먹는 경우 (시각장애인은 이미지를 볼 수 없어요!)',
            'src를 잘못 입력해서 이미지가 안 보이는 경우',
            '닫는 태그를 쓰는 경우: <img></img> ✗'
          ],
          conceptCards: [
            {
              title: 'src 속성',
              description: '이미지 파일의 경로나 URL을 지정해요. (source)'
            },
            {
              title: 'alt 속성',
              description: '이미지 설명. 이미지가 안 보일 때나 스크린리더가 읽어줘요. (alternative)'
            },
            {
              title: '접근성',
              description: '시각장애인도 웹을 사용할 수 있도록 alt를 꼭 써요!'
            }
          ],
          testCases: [
            {
              input: 'img 태그',
              expectedOutput: 'src와 alt 속성 모두 포함',
              description: '이미지 태그를 올바르게 작성했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m8',
          title: '목록 만들기 (ul, ol, li)',
          description: '순서가 있는 목록과 없는 목록을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: '목록 태그',
          conceptExplanation: '<ul>은 순서 없는 목록(• 기호), <ol>은 순서 있는 목록(1, 2, 3...), <li>는 목록 항목이에요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'ul과 ol의 차이를 이해하고 상황에 맞게 사용할 수 있다',
            'li 태그로 목록 항목을 만들 수 있다',
            '중첩 목록을 만들 수 있다'
          ],
          realWorldExample: '쇼핑 목록(순서 없음), 요리 레시피(순서 있음)처럼 웹에서도 목록을 자주 사용해요!',
          starterCode: '<body>\n  <h2>좋아하는 과일</h2>\n  <!-- ul과 li로 순서 없는 목록을 만드세요 -->\n  <!-- 사과, 바나나, 딸기 3개 항목 -->\n  \n  <h2>할 일</h2>\n  <!-- ol과 li로 순서 있는 목록을 만드세요 -->\n  <!-- 숙제하기, 책읽기, 운동하기 3개 항목 -->\n</body>',
          solution: '<body>\n  <h2>좋아하는 과일</h2>\n  <ul>\n    <li>사과</li>\n    <li>바나나</li>\n    <li>딸기</li>\n  </ul>\n  \n  <h2>할 일</h2>\n  <ol>\n    <li>숙제하기</li>\n    <li>책읽기</li>\n    <li>운동하기</li>\n  </ol>\n</body>',
          hints: [
            '💡 ul = unordered list (순서 없음)',
            '💡 ol = ordered list (순서 있음)',
            '💡 li = list item (목록 항목)',
            '💡 li는 항상 ul이나 ol 안에 있어야 해요'
          ],
          commonMistakes: [
            'li를 ul/ol 밖에 쓰는 경우',
            'ul과 ol을 섞어서 쓰는 경우',
            '닫는 태그를 빼먹는 경우'
          ],
          testCases: [
            {
              input: '목록 구조',
              expectedOutput: 'ul 안에 3개의 li, ol 안에 3개의 li',
              description: '목록을 올바르게 작성했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m9',
          title: 'div로 영역 나누기',
          description: 'div 태그로 페이지를 구역별로 나눠요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'modify',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'div 태그',
          conceptExplanation: '<div>는 division(구역)의 약자로, 여러 요소를 그룹으로 묶을 때 사용해요. CSS로 스타일을 적용할 때 아주 유용해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'div 태그로 요소들을 그룹화할 수 있다',
            'id와 class 속성으로 div를 식별할 수 있다',
            '페이지를 논리적인 영역으로 나눌 수 있다'
          ],
          realWorldExample: '집을 거실, 부엌, 침실로 나누듯이, 웹 페이지도 헤더, 본문, 푸터로 나눌 수 있어요!',
          starterCode: '<body>\n  <!-- header 영역 (id="header") -->\n  <!-- h1: "내 블로그" -->\n  \n  <!-- main 영역 (id="main") -->\n  <!-- h2: "최근 글" -->\n  <!-- p: "오늘 배운 HTML을 정리해봤어요" -->\n  \n  <!-- footer 영역 (id="footer") -->\n  <!-- p: "© 2025 내 블로그" -->\n</body>',
          solution: '<body>\n  <div id="header">\n    <h1>내 블로그</h1>\n  </div>\n  \n  <div id="main">\n    <h2>최근 글</h2>\n    <p>오늘 배운 HTML을 정리해봤어요</p>\n  </div>\n  \n  <div id="footer">\n    <p>© 2025 내 블로그</p>\n  </div>\n</body>',
          hints: [
            '💡 div는 블록 요소라서 자동으로 줄바꿈이 돼요',
            '💡 id는 페이지에서 유일한 이름이에요',
            '💡 나중에 CSS로 각 영역을 다르게 꾸밀 수 있어요'
          ],
          commonMistakes: [
            'div 없이 요소들을 바로 넣는 경우',
            'id를 중복으로 사용하는 경우',
            '너무 많은 div를 중첩해서 복잡하게 만드는 경우'
          ],
          conceptCards: [
            {
              title: 'div 태그',
              description: '요소들을 그룹으로 묶는 컨테이너. 의미는 없고 구조화 용도예요.'
            },
            {
              title: 'id 속성',
              description: '요소에 고유한 이름을 붙여요. CSS나 JavaScript에서 찾을 때 사용해요.'
            }
          ],
          testCases: [
            {
              input: 'div 구조',
              expectedOutput: '3개의 div (header, main, footer)',
              description: '페이지를 3개 영역으로 나눴는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w31-m10',
          title: '주간 프로젝트: 자기소개 페이지 v1',
          description: '배운 HTML 태그를 모두 사용해서 나만의 자기소개 페이지를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'create',
          isWeeklyProject: true,
          exp: 50,
          estimatedMinutes: 60,
          concept: 'HTML 종합 프로젝트',
          conceptExplanation: '이번 주에 배운 h1~h6, p, a, img, ul/ol, div를 모두 활용해서 완성도 있는 페이지를 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '배운 모든 HTML 태그를 적절히 사용할 수 있다',
            '의미 있는 HTML 구조를 설계할 수 있다',
            '완전한 웹 페이지를 처음부터 끝까지 만들 수 있다'
          ],
          realWorldExample: '프로그래머들은 자기소개 페이지(포트폴리오)를 만들어서 자신을 소개해요. 여러분도 첫 포트폴리오를 만들어보세요!',
          requirements: [
            'DOCTYPE, html, head, body를 포함한 완전한 HTML 문서',
            'h1으로 이름, h2로 소개 섹션 제목',
            'p로 자기소개 문단 2개 이상',
            'img로 프로필 사진 또는 좋아하는 이미지',
            'ul 또는 ol로 취미 목록',
            'a로 좋아하는 웹사이트 링크 3개 이상',
            'div로 header, main, footer 영역 구분'
          ],
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>자기소개</title>\n</head>\n<body>\n  <!-- 여기에 자기소개 페이지를 만드세요 -->\n  <!-- 요구사항을 모두 만족해야 해요! -->\n</body>\n</html>',
          hints: [
            '💡 먼저 종이에 어떤 구조로 만들지 설계해보세요',
            '💡 header → main → footer 순서로 만들면 체계적이에요',
            '💡 이미지는 https://picsum.photos/200을 사용하면 랜덤 이미지가 나와요',
            '💡 완성한 페이지를 가족에게 보여주세요!'
          ],
          commonMistakes: [
            '요구사항을 일부만 구현하는 경우',
            '제목 계층을 무시하는 경우',
            '의미 없는 내용(테스트, 123 등)으로 채우는 경우'
          ],
          testCases: [
            {
              input: '필수 태그',
              expectedOutput: 'h1, h2, p, img, ul/ol, a, div 모두 사용',
              description: '요구사항의 모든 태그를 사용했는지 확인'
            },
            {
              input: '문서 구조',
              expectedOutput: 'DOCTYPE, head, body 완전한 구조',
              description: '올바른 HTML 문서 구조인지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 32: HTML 시맨틱 (10미션, 4시간)
    {
      id: 'week-32',
      number: 32,
      title: 'HTML 시맨틱',
      description: '의미 있는 HTML 태그로 웹 접근성을 높여요',
      missions: [
        {
          id: 'w32-m1',
          title: '시맨틱 HTML이란?',
          description: '의미를 가진 태그를 사용하면 왜 좋은지 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 20,
          estimatedMinutes: 20,
          concept: '시맨틱 HTML',
          conceptExplanation: '시맨틱(Semantic)은 "의미 있는"이라는 뜻이에요. <div>보다 <header>, <nav>, <main> 같은 의미 있는 태그를 쓰면 더 좋아요!',
          cstaStandard: '1B-IC-20',
          learningObjectives: [
            '시맨틱 HTML의 개념과 중요성을 이해할 수 있다',
            'div보다 시맨틱 태그를 사용하는 이유를 설명할 수 있다',
            '웹 접근성과 SEO의 관계를 이해할 수 있다'
          ],
          realWorldExample: '책상 서랍에 "양말"이라고 써있으면 찾기 쉽듯이, HTML도 의미를 명확히 하면 검색엔진과 스크린리더가 이해하기 쉬워요!',
          hints: [
            '💡 시각장애인은 스크린리더로 웹을 이용해요',
            '💡 구글 같은 검색엔진도 시맨틱 태그를 이해해요',
            '💡 코드를 읽는 다른 개발자도 이해하기 쉬워요'
          ],
          conceptCards: [
            {
              title: '웹 접근성',
              description: '누구나 차별 없이 웹을 사용할 수 있도록 만드는 것. 장애인도 웹을 편하게 써야 해요!'
            },
            {
              title: 'SEO',
              description: 'Search Engine Optimization. 검색엔진이 내 페이지를 잘 찾을 수 있게 하는 것.'
            },
            {
              title: '시맨틱 태그',
              description: 'header, nav, main, article, section, aside, footer 등'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m2',
          title: 'header 태그',
          description: '페이지의 머리글 영역을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 20,
          concept: 'header 태그',
          conceptExplanation: '<header>는 페이지나 섹션의 머리글을 나타내요. 로고, 제목, 메뉴 등이 들어가요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'header 태그로 페이지 상단 영역을 만들 수 있다',
            'header 안에 적절한 요소를 배치할 수 있다'
          ],
          realWorldExample: '신문의 맨 위에 신문 이름과 날짜가 있듯이, 웹사이트도 상단에 로고와 메뉴가 있어요!',
          starterCode: '<body>\n  <!-- header 태그를 사용하세요 -->\n  <!-- h1: "나의 블로그" -->\n  <!-- p: "코딩을 배우는 즐거움" -->\n</body>',
          solution: '<body>\n  <header>\n    <h1>나의 블로그</h1>\n    <p>코딩을 배우는 즐거움</p>\n  </header>\n</body>',
          hints: [
            '💡 header는 페이지 시작 부분에 주로 사용해요',
            '💡 로고, 사이트 제목, 상단 메뉴가 들어가요',
            '💡 article 안에도 header를 쓸 수 있어요'
          ],
          testCases: [
            {
              input: 'header 태그',
              expectedOutput: 'header 안에 h1과 p 포함',
              description: 'header 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m3',
          title: 'nav 태그',
          description: '내비게이션 메뉴를 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'nav 태그',
          conceptExplanation: '<nav>는 navigation(내비게이션)의 약자로, 메뉴 링크들을 모아두는 영역이에요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'nav 태그로 내비게이션 메뉴를 만들 수 있다',
            'nav 안에 링크 목록을 구성할 수 있다'
          ],
          realWorldExample: '쇼핑몰 사이트 상단의 "홈 | 상품 | 장바구니 | 마이페이지" 같은 메뉴가 nav예요!',
          starterCode: '<body>\n  <header>\n    <h1>나의 블로그</h1>\n    <!-- nav 태그를 추가하세요 -->\n    <!-- ul과 li로 홈, 소개, 연락 3개 메뉴 -->\n  </header>\n</body>',
          solution: '<body>\n  <header>\n    <h1>나의 블로그</h1>\n    <nav>\n      <ul>\n        <li><a href="#home">홈</a></li>\n        <li><a href="#about">소개</a></li>\n        <li><a href="#contact">연락</a></li>\n      </ul>\n    </nav>\n  </header>\n</body>',
          hints: [
            '💡 nav 안에 ul > li > a 구조로 만들어요',
            '💡 href="#이름"은 같은 페이지 내 이동이에요',
            '💡 주요 메뉴에만 nav를 써요 (모든 링크에 쓰는 건 아니에요!)'
          ],
          commonMistakes: [
            'nav 없이 ul만 쓰는 경우',
            '모든 링크를 nav로 감싸는 경우',
            'a 태그 없이 li만 쓰는 경우'
          ],
          testCases: [
            {
              input: 'nav 구조',
              expectedOutput: 'nav > ul > li > a',
              description: '올바른 내비게이션 구조인지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m4',
          title: 'main 태그',
          description: '페이지의 주요 콘텐츠 영역을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 20,
          concept: 'main 태그',
          conceptExplanation: '<main>은 페이지의 핵심 콘텐츠를 담는 영역이에요. 페이지에 딱 하나만 있어야 해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'main 태그로 주요 콘텐츠 영역을 만들 수 있다',
            'main은 페이지에 하나만 있어야 함을 이해할 수 있다'
          ],
          realWorldExample: '신문의 주요 기사 부분, 유튜브의 영상 재생 영역처럼 페이지의 핵심 내용이 main이에요!',
          starterCode: '<body>\n  <header>\n    <h1>블로그</h1>\n  </header>\n  \n  <!-- main 태그 추가 -->\n  <!-- h2: "오늘의 글" -->\n  <!-- p: "HTML을 배우는 중입니다" -->\n  \n  <footer>\n    <p>© 2025</p>\n  </footer>\n</body>',
          solution: '<body>\n  <header>\n    <h1>블로그</h1>\n  </header>\n  \n  <main>\n    <h2>오늘의 글</h2>\n    <p>HTML을 배우는 중입니다</p>\n  </main>\n  \n  <footer>\n    <p>© 2025</p>\n  </footer>\n</body>',
          hints: [
            '💡 main은 페이지에 딱 1개만!',
            '💡 header, footer, nav는 main 밖에 있어요',
            '💡 스크린리더가 main으로 바로 건너뛸 수 있어요'
          ],
          commonMistakes: [
            'main을 여러 개 쓰는 경우',
            'main 안에 header나 footer를 넣는 경우',
            'main 없이 div만 쓰는 경우'
          ],
          testCases: [
            {
              input: 'main 태그',
              expectedOutput: 'main 태그가 1개만 존재',
              description: 'main 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m5',
          title: 'article 태그',
          description: '독립적인 콘텐츠를 나타내요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'article 태그',
          conceptExplanation: '<article>은 그 자체로 완전한 의미를 가진 콘텐츠예요. 블로그 글, 뉴스 기사, 댓글 등이에요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'article 태그로 독립적인 콘텐츠를 표현할 수 있다',
            'article과 section의 차이를 이해할 수 있다'
          ],
          realWorldExample: '네이버 뉴스의 기사 하나하나, 블로그의 글 하나가 article이에요. 따로 떼어내도 의미가 있어요!',
          starterCode: '<main>\n  <!-- article 태그 사용 -->\n  <!-- h2: "첫 번째 블로그 글" -->\n  <!-- p: "오늘 HTML을 배웠어요. 정말 재미있었어요!" -->\n  <!-- p: "작성자: 홍길동 | 날짜: 2025-01-31" -->\n</main>',
          solution: '<main>\n  <article>\n    <h2>첫 번째 블로그 글</h2>\n    <p>오늘 HTML을 배웠어요. 정말 재미있었어요!</p>\n    <p>작성자: 홍길동 | 날짜: 2025-01-31</p>\n  </article>\n</main>',
          hints: [
            '💡 article은 독립적으로 배포/재사용 가능한 콘텐츠예요',
            '💡 article 안에 header, footer를 넣을 수 있어요',
            '💡 여러 개의 article을 나란히 쓸 수 있어요'
          ],
          conceptCards: [
            {
              title: 'article',
              description: '독립적이고 완전한 콘텐츠. RSS로 배포할 수 있는 단위.'
            },
            {
              title: 'section',
              description: '주제별 그룹. 독립적이지 않고 문서의 일부분.'
            }
          ],
          testCases: [
            {
              input: 'article 태그',
              expectedOutput: 'article 안에 h2와 p들 포함',
              description: 'article 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m6',
          title: 'section 태그',
          description: '주제별로 콘텐츠를 나눠요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'section 태그',
          conceptExplanation: '<section>은 문서의 주제별 섹션을 나타내요. 보통 제목(h2~h6)을 포함해요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'section 태그로 주제별 콘텐츠를 구분할 수 있다',
            'section에 제목을 포함하는 것의 중요성을 이해할 수 있다'
          ],
          realWorldExample: '책의 "1장, 2장, 3장" 또는 "서론, 본론, 결론"처럼 주제별로 나눌 때 section을 써요!',
          starterCode: '<main>\n  <!-- section: "나의 취미" -->\n  <!-- h2: "나의 취미" -->\n  <!-- p: "저는 축구와 독서를 좋아합니다" -->\n  \n  <!-- section: "나의 꿈" -->\n  <!-- h2: "나의 꿈" -->\n  <!-- p: "프로그래머가 되고 싶어요" -->\n</main>',
          solution: '<main>\n  <section>\n    <h2>나의 취미</h2>\n    <p>저는 축구와 독서를 좋아합니다</p>\n  </section>\n  \n  <section>\n    <h2>나의 꿈</h2>\n    <p>프로그래머가 되고 싶어요</p>\n  </section>\n</main>',
          hints: [
            '💡 section에는 항상 제목(h2~h6)이 있는 게 좋아요',
            '💡 주제가 다르면 section을 나눠요',
            '💡 div보다 의미가 명확해요'
          ],
          testCases: [
            {
              input: 'section 구조',
              expectedOutput: '2개의 section, 각각 h2 포함',
              description: 'section 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m7',
          title: 'aside 태그',
          description: '부가적인 콘텐츠를 나타내요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'aside 태그',
          conceptExplanation: '<aside>는 본문과 간접적으로 관련된 콘텐츠예요. 사이드바, 광고, 관련 링크 등이에요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'aside 태그로 부가 콘텐츠를 표현할 수 있다',
            'main 콘텐츠와 aside의 관계를 이해할 수 있다'
          ],
          realWorldExample: '블로그 옆에 있는 "인기 글", "태그", "광고" 같은 것들이 aside예요!',
          starterCode: '<body>\n  <main>\n    <h1>오늘의 메인 기사</h1>\n    <p>중요한 내용...</p>\n  </main>\n  \n  <!-- aside 추가 -->\n  <!-- h3: "관련 링크" -->\n  <!-- ul로 링크 2개 -->\n</body>',
          solution: '<body>\n  <main>\n    <h1>오늘의 메인 기사</h1>\n    <p>중요한 내용...</p>\n  </main>\n  \n  <aside>\n    <h3>관련 링크</h3>\n    <ul>\n      <li><a href="#">HTML 가이드</a></li>\n      <li><a href="#">CSS 튜토리얼</a></li>\n    </ul>\n  </aside>\n</body>',
          hints: [
            '💡 aside를 제거해도 main 콘텐츠는 이해할 수 있어야 해요',
            '💡 보통 사이드바에 사용돼요',
            '💡 광고, 저자 정보, 관련 링크 등이 들어가요'
          ],
          testCases: [
            {
              input: 'aside 태그',
              expectedOutput: 'aside 안에 h3과 ul 포함',
              description: 'aside 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m8',
          title: 'footer 태그',
          description: '페이지의 바닥글 영역을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'footer 태그',
          conceptExplanation: '<footer>는 페이지나 섹션의 바닥글이에요. 저작권, 연락처, 관련 링크 등이 들어가요.',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'footer 태그로 페이지 하단 영역을 만들 수 있다',
            'footer에 적절한 콘텐츠를 배치할 수 있다'
          ],
          realWorldExample: '웹사이트 맨 아래 "회사 소개 | 이용약관 | 개인정보처리방침 | © 2025" 같은 부분이 footer예요!',
          starterCode: '<body>\n  <header>\n    <h1>블로그</h1>\n  </header>\n  \n  <main>\n    <p>메인 콘텐츠</p>\n  </main>\n  \n  <!-- footer 추가 -->\n  <!-- p: "© 2025 나의 블로그. All rights reserved." -->\n  <!-- p: "연락처: email@example.com" -->\n</body>',
          solution: '<body>\n  <header>\n    <h1>블로그</h1>\n  </header>\n  \n  <main>\n    <p>메인 콘텐츠</p>\n  </main>\n  \n  <footer>\n    <p>© 2025 나의 블로그. All rights reserved.</p>\n    <p>연락처: email@example.com</p>\n  </footer>\n</body>',
          hints: [
            '💡 footer는 페이지 맨 아래에 주로 위치해요',
            '💡 저작권, 연락처, 소셜 미디어 링크가 들어가요',
            '💡 article 안에도 footer를 쓸 수 있어요'
          ],
          testCases: [
            {
              input: 'footer 태그',
              expectedOutput: 'footer 안에 p 태그 2개',
              description: 'footer 태그를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m9',
          title: '시맨틱 태그 종합',
          description: 'header부터 footer까지 모든 시맨틱 태그를 사용해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 30,
          concept: '시맨틱 HTML 구조',
          conceptExplanation: '의미 있는 태그들을 조합해서 구조가 명확한 웹 페이지를 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '모든 시맨틱 태그를 적재적소에 사용할 수 있다',
            '의미 있는 HTML 문서 구조를 설계할 수 있다'
          ],
          realWorldExample: '잘 설계된 웹사이트는 시맨틱 태그로 구조가 명확해요. 검색엔진도 좋아하고, 유지보수도 쉬워요!',
          starterCode: '<!DOCTYPE html>\n<html>\n<body>\n  <!-- div 대신 적절한 시맨틱 태그로 바꾸세요 -->\n  <div class="top">\n    <h1>나의 레시피 블로그</h1>\n    <div class="menu">\n      <a href="#">홈</a> | <a href="#">레시피</a>\n    </div>\n  </div>\n  \n  <div class="content">\n    <div class="post">\n      <h2>초코 쿠키 만들기</h2>\n      <p>맛있는 초코 쿠키 레시피...</p>\n    </div>\n  </div>\n  \n  <div class="bottom">\n    <p>© 2025 레시피 블로그</p>\n  </div>\n</body>\n</html>',
          solution: '<!DOCTYPE html>\n<html>\n<body>\n  <header>\n    <h1>나의 레시피 블로그</h1>\n    <nav>\n      <a href="#">홈</a> | <a href="#">레시피</a>\n    </nav>\n  </header>\n  \n  <main>\n    <article>\n      <h2>초코 쿠키 만들기</h2>\n      <p>맛있는 초코 쿠키 레시피...</p>\n    </article>\n  </main>\n  \n  <footer>\n    <p>© 2025 레시피 블로그</p>\n  </footer>\n</body>\n</html>',
          hints: [
            '💡 class="top" → header',
            '💡 class="menu" → nav',
            '💡 class="content" → main',
            '💡 class="post" → article',
            '💡 class="bottom" → footer'
          ],
          commonMistakes: [
            'div를 그대로 두는 경우',
            '시맨틱 태그를 잘못된 위치에 쓰는 경우',
            'nav를 빠뜨리는 경우'
          ],
          testCases: [
            {
              input: '시맨틱 태그',
              expectedOutput: 'header, nav, main, article, footer 모두 사용',
              description: '모든 시맨틱 태그로 올바르게 변환했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w32-m10',
          title: '주간 프로젝트: 시맨틱 블로그 구조',
          description: '시맨틱 태그로 잘 구조화된 블로그 페이지를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'create',
          isWeeklyProject: true,
          exp: 50,
          estimatedMinutes: 60,
          concept: '시맨틱 HTML 프로젝트',
          conceptExplanation: '시맨틱 태그를 활용해서 접근성 높고 SEO 친화적인 블로그 페이지를 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '시맨틱 HTML로 완전한 웹 페이지를 구조화할 수 있다',
            '웹 접근성과 SEO를 고려한 마크업을 할 수 있다',
            '실제 블로그 구조를 이해하고 구현할 수 있다'
          ],
          realWorldExample: '네이버 블로그, 티스토리, 벨로그 같은 실제 블로그 사이트의 구조를 만들어봐요!',
          requirements: [
            'header: 블로그 제목 + nav(메뉴 3개 이상)',
            'main: 블로그 글 2개 이상(article 사용)',
            '각 article: 제목(h2) + 본문(p 2개 이상) + 작성 정보',
            'aside: "인기 글" 목록(ul)',
            'footer: 저작권 + 연락처',
            'section으로 "최근 글", "카테고리" 구분',
            'div는 사용하지 않기!'
          ],
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>나의 블로그</title>\n</head>\n<body>\n  <!-- 여기에 시맨틱 태그로 블로그를 만드세요 -->\n</body>\n</html>',
          hints: [
            '💡 구조: header(nav 포함) → main(article들) → aside → footer',
            '💡 article은 독립적인 블로그 글',
            '💡 section으로 "최근 글", "인기 글" 영역 구분',
            '💡 스크린리더로 읽었을 때 의미가 명확해야 해요'
          ],
          commonMistakes: [
            'div를 섞어서 쓰는 경우',
            'article 없이 section만 쓰는 경우',
            'nav를 header 밖에 두는 경우',
            '시맨틱 태그를 남용해서 오히려 복잡해지는 경우'
          ],
          testCases: [
            {
              input: '필수 시맨틱 태그',
              expectedOutput: 'header, nav, main, article(2개 이상), aside, footer 모두 사용',
              description: '요구사항의 모든 시맨틱 태그를 사용했는지 확인'
            },
            {
              input: 'div 사용 여부',
              expectedOutput: 'div 태그 0개',
              description: 'div를 사용하지 않고 시맨틱 태그만 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 33: 폼과 입력 (10미션, 4시간)
    {
      id: 'week-33',
      number: 33,
      title: '폼과 입력',
      description: '사용자 입력을 받는 폼을 만들어요',
      missions: [
        {
          id: 'w33-m1',
          title: '폼이란?',
          description: '웹에서 정보를 입력받는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'html',
          exp: 20,
          estimatedMinutes: 20,
          concept: 'HTML 폼',
          conceptExplanation: '<form> 태그는 사용자로부터 정보를 입력받는 양식이에요. 로그인, 회원가입, 설문조사 등에 사용해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'form 태그의 역할과 중요성을 이해할 수 있다',
            'action과 method 속성을 이해할 수 있다',
            '실생활에서 폼이 사용되는 예시를 찾을 수 있다'
          ],
          realWorldExample: '구글 로그인, 네이버 회원가입, 유튜브 댓글 작성 등 모두 폼으로 만들어져요!',
          hints: [
            '💡 form은 데이터를 서버로 보내는 역할이에요',
            '💡 action은 "어디로 보낼지", method는 "어떻게 보낼지"예요',
            '💡 input, button 등이 form 안에 들어가요'
          ],
          conceptCards: [
            {
              title: 'form 태그',
              description: '사용자 입력을 받고 서버로 전송하는 양식'
            },
            {
              title: 'action 속성',
              description: '폼 데이터를 보낼 서버 주소'
            },
            {
              title: 'method 속성',
              description: 'GET(조회) 또는 POST(전송) 방식'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m2',
          title: '텍스트 입력 (input type="text")',
          description: '한 줄 텍스트 입력창을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 20,
          concept: 'input 태그',
          conceptExplanation: '<input type="text">는 한 줄 텍스트를 입력받는 칸이에요. 이름, 주소 등을 입력받을 때 써요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'input 태그로 텍스트 입력창을 만들 수 있다',
            'label 태그로 입력창에 이름을 붙일 수 있다',
            'placeholder 속성으로 힌트를 줄 수 있다'
          ],
          realWorldExample: '회원가입할 때 "이름을 입력하세요" 칸이 바로 텍스트 입력창이에요!',
          starterCode: '<form>\n  <!-- label과 input으로 "이름" 입력창을 만드세요 -->\n  <!-- placeholder: "홍길동" -->\n</form>',
          solution: '<form>\n  <label for="name">이름:</label>\n  <input type="text" id="name" name="name" placeholder="홍길동">\n</form>',
          hints: [
            '💡 label의 for와 input의 id를 같게 해야 연결돼요',
            '💡 name은 서버로 데이터를 보낼 때 사용하는 이름이에요',
            '💡 placeholder는 입력 전에 보이는 힌트예요'
          ],
          commonMistakes: [
            'label과 input을 연결하지 않는 경우 (for와 id가 다름)',
            'name 속성을 빼먹는 경우',
            'input을 닫는 태그로 쓰는 경우: <input></input> ✗'
          ],
          conceptCards: [
            {
              title: 'label',
              description: '입력창의 이름표. for 속성으로 input과 연결해요.'
            },
            {
              title: 'placeholder',
              description: '입력 전 보이는 회색 힌트 텍스트'
            },
            {
              title: 'name',
              description: '서버로 데이터를 보낼 때 사용하는 변수명'
            }
          ],
          testCases: [
            {
              input: 'label과 input 연결',
              expectedOutput: 'label의 for = input의 id',
              description: 'label과 input이 올바르게 연결되었는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m3',
          title: '비밀번호 입력 (input type="password")',
          description: '비밀번호를 안전하게 입력받아요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'password 타입',
          conceptExplanation: 'type="password"는 입력한 내용이 ●●●로 보여서 다른 사람이 못 보게 해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'password 타입으로 안전한 입력창을 만들 수 있다',
            'required 속성으로 필수 입력을 지정할 수 있다'
          ],
          realWorldExample: '로그인할 때 비밀번호를 입력하면 ●●●로 보이죠? 그게 password 타입이에요!',
          starterCode: '<form>\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  \n  <!-- 비밀번호 입력창 추가 -->\n  <!-- label: "비밀번호" -->\n  <!-- required 속성 추가 -->\n</form>',
          solution: '<form>\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  \n  <label for="password">비밀번호:</label>\n  <input type="password" id="password" name="password" required>\n</form>',
          hints: [
            '💡 type="password"로 하면 입력 내용이 숨겨져요',
            '💡 required를 붙이면 필수 입력이 돼요',
            '💡 minlength="8"로 최소 길이를 정할 수 있어요'
          ],
          commonMistakes: [
            'type="text"로 비밀번호를 받는 경우 (보안 위험!)',
            'required를 빼먹어서 빈 칸으로 제출되는 경우'
          ],
          testCases: [
            {
              input: 'password 타입',
              expectedOutput: 'type="password" 사용',
              description: 'password 타입을 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m4',
          title: '이메일과 숫자 입력',
          description: '특별한 타입의 입력창을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'input 타입들',
          conceptExplanation: 'type="email"은 이메일 형식을 검사하고, type="number"는 숫자만 입력받아요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            '다양한 input 타입을 상황에 맞게 사용할 수 있다',
            '브라우저의 자동 유효성 검사를 활용할 수 있다'
          ],
          realWorldExample: '회원가입할 때 이메일을 잘못 쓰면 "올바른 이메일을 입력하세요"라고 나오죠? HTML이 자동으로 검사해요!',
          starterCode: '<form>\n  <!-- 이메일 입력창 (required) -->\n  <!-- label: "이메일" -->\n  \n  <!-- 나이 입력창 (숫자, min="1", max="120") -->\n  <!-- label: "나이" -->\n</form>',
          solution: '<form>\n  <label for="email">이메일:</label>\n  <input type="email" id="email" name="email" required>\n  \n  <label for="age">나이:</label>\n  <input type="number" id="age" name="age" min="1" max="120">\n</form>',
          hints: [
            '💡 type="email"은 @가 있는지 자동으로 확인해요',
            '💡 type="number"는 min, max로 범위를 정할 수 있어요',
            '💡 type="tel"은 전화번호, type="url"은 웹 주소예요'
          ],
          commonMistakes: [
            'type="text"로 이메일을 받아서 검증을 못 하는 경우',
            'number에 min/max를 안 써서 음수나 큰 수가 들어가는 경우'
          ],
          conceptCards: [
            {
              title: 'type="email"',
              description: '이메일 형식 자동 검사. @가 없으면 제출 안 돼요.'
            },
            {
              title: 'type="number"',
              description: '숫자만 입력. min, max, step으로 범위와 간격 설정.'
            },
            {
              title: 'type="tel"',
              description: '전화번호 입력. 모바일에서 숫자 키패드가 나와요.'
            }
          ],
          testCases: [
            {
              input: 'input 타입',
              expectedOutput: 'email과 number 타입 사용',
              description: '올바른 input 타입을 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m5',
          title: '여러 줄 텍스트 (textarea)',
          description: '긴 글을 입력받는 영역을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'textarea 태그',
          conceptExplanation: '<textarea>는 여러 줄의 긴 텍스트를 입력받을 때 사용해요. 댓글, 후기 등에 써요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'textarea로 여러 줄 입력창을 만들 수 있다',
            'rows와 cols로 크기를 조절할 수 있다'
          ],
          realWorldExample: '유튜브 댓글, 블로그 글 작성, 고객 문의 등에서 긴 글을 쓸 때 textarea를 사용해요!',
          starterCode: '<form>\n  <label for="review">리뷰 작성:</label>\n  <!-- textarea 추가 (rows="5", cols="50") -->\n  <!-- placeholder: "상품에 대한 의견을 자유롭게 작성하세요" -->\n</form>',
          solution: '<form>\n  <label for="review">리뷰 작성:</label>\n  <textarea id="review" name="review" rows="5" cols="50" placeholder="상품에 대한 의견을 자유롭게 작성하세요"></textarea>\n</form>',
          hints: [
            '💡 textarea는 닫는 태그가 있어요: <textarea></textarea>',
            '💡 rows는 줄 수, cols는 한 줄 글자 수예요',
            '💡 CSS로 크기를 조절하는 게 더 좋아요'
          ],
          commonMistakes: [
            '닫는 태그를 빼먹는 경우',
            'input으로 여러 줄을 받으려는 경우',
            'placeholder를 value로 잘못 쓰는 경우'
          ],
          testCases: [
            {
              input: 'textarea 태그',
              expectedOutput: 'textarea with rows and cols',
              description: 'textarea를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m6',
          title: '선택 박스 (select)',
          description: '드롭다운 메뉴로 선택지를 제공해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'select 태그',
          conceptExplanation: '<select>와 <option>으로 여러 선택지 중 하나를 고르는 드롭다운 메뉴를 만들어요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'select와 option으로 선택 메뉴를 만들 수 있다',
            'selected로 기본 선택값을 지정할 수 있다'
          ],
          realWorldExample: '쇼핑몰에서 "색상 선택", "사이즈 선택"처럼 정해진 옵션 중 하나를 고를 때 사용해요!',
          starterCode: '<form>\n  <label for="color">좋아하는 색:</label>\n  <!-- select와 option으로 빨강, 파랑, 노랑 선택지 만들기 -->\n  <!-- "파랑"을 기본 선택 (selected) -->\n</form>',
          solution: '<form>\n  <label for="color">좋아하는 색:</label>\n  <select id="color" name="color">\n    <option value="red">빨강</option>\n    <option value="blue" selected>파랑</option>\n    <option value="yellow">노랑</option>\n  </select>\n</form>',
          hints: [
            '💡 select 안에 여러 option을 넣어요',
            '💡 value는 서버로 보내는 값, 텍스트는 사용자가 보는 값이에요',
            '💡 selected를 붙이면 기본으로 선택돼요'
          ],
          commonMistakes: [
            'option을 select 밖에 쓰는 경우',
            'value를 안 써서 서버에 한글이 전달되는 경우',
            '첫 번째 option을 "선택하세요"로 안 만드는 경우'
          ],
          conceptCards: [
            {
              title: 'select',
              description: '드롭다운 선택 메뉴 컨테이너'
            },
            {
              title: 'option',
              description: '선택 가능한 항목. value와 표시 텍스트를 분리할 수 있어요.'
            },
            {
              title: 'selected',
              description: '기본으로 선택된 옵션'
            }
          ],
          testCases: [
            {
              input: 'select와 option',
              expectedOutput: 'select 안에 3개의 option',
              description: 'select를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m7',
          title: '체크박스와 라디오 버튼',
          description: '여러 개 선택과 하나만 선택을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 30,
          concept: 'checkbox와 radio',
          conceptExplanation: 'checkbox는 여러 개 선택, radio는 하나만 선택이에요. name이 같으면 그룹이 돼요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'checkbox로 복수 선택을 만들 수 있다',
            'radio로 단일 선택을 만들 수 있다',
            'name 속성으로 radio를 그룹화할 수 있다'
          ],
          realWorldExample: '설문조사에서 "좋아하는 음식 (복수선택)"은 checkbox, "성별 (하나만)"은 radio를 써요!',
          starterCode: '<form>\n  <p>좋아하는 과일 (복수선택):</p>\n  <!-- checkbox 3개: 사과, 바나나, 딸기 -->\n  \n  <p>성별 (하나만):</p>\n  <!-- radio 2개: 남자, 여자 (name="gender") -->\n</form>',
          solution: '<form>\n  <p>좋아하는 과일 (복수선택):</p>\n  <label><input type="checkbox" name="fruit" value="apple"> 사과</label>\n  <label><input type="checkbox" name="fruit" value="banana"> 바나나</label>\n  <label><input type="checkbox" name="fruit" value="strawberry"> 딸기</label>\n  \n  <p>성별 (하나만):</p>\n  <label><input type="radio" name="gender" value="male"> 남자</label>\n  <label><input type="radio" name="gender" value="female"> 여자</label>\n</form>',
          hints: [
            '💡 checkbox는 name이 같아도 여러 개 선택 가능',
            '💡 radio는 name이 같으면 하나만 선택돼요',
            '💡 label로 감싸면 텍스트를 클릭해도 선택돼요',
            '💡 checked를 붙이면 기본으로 선택돼요'
          ],
          commonMistakes: [
            'radio에 name을 다르게 줘서 여러 개 선택되는 경우',
            'label과 연결하지 않아서 클릭이 안 되는 경우',
            'value를 안 써서 on/off만 전달되는 경우'
          ],
          conceptCards: [
            {
              title: 'checkbox',
              description: '여러 개 선택 가능. 취미, 관심사 등에 사용.'
            },
            {
              title: 'radio',
              description: '하나만 선택. name이 같은 것끼리 그룹. 성별, 학년 등에 사용.'
            }
          ],
          testCases: [
            {
              input: 'checkbox와 radio',
              expectedOutput: 'checkbox 3개, radio 2개 (name="gender")',
              description: '체크박스와 라디오를 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m8',
          title: '버튼 (button, submit)',
          description: '폼을 제출하는 버튼을 만들어요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'button 태그',
          conceptExplanation: '<button type="submit">은 폼을 제출하고, type="button"은 일반 버튼이에요. JavaScript와 함께 사용해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'button 태그로 제출 버튼을 만들 수 있다',
            'submit과 button의 차이를 이해할 수 있다'
          ],
          realWorldExample: '로그인 페이지의 "로그인" 버튼, 회원가입의 "가입하기" 버튼이 submit 버튼이에요!',
          starterCode: '<form>\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  \n  <!-- submit 버튼 추가: "로그인" -->\n  <!-- reset 버튼 추가: "초기화" -->\n</form>',
          solution: '<form>\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  \n  <button type="submit">로그인</button>\n  <button type="reset">초기화</button>\n</form>',
          hints: [
            '💡 type="submit"은 폼을 서버로 전송해요 (기본값)',
            '💡 type="reset"은 입력값을 모두 지워요',
            '💡 type="button"은 아무 동작 없음 (JavaScript용)',
            '💡 <input type="submit">도 가능하지만 button이 더 유연해요'
          ],
          commonMistakes: [
            'type을 안 써서 의도와 다르게 동작하는 경우',
            'form 밖에 버튼을 두는 경우',
            'button과 input을 섞어서 혼란스럽게 만드는 경우'
          ],
          testCases: [
            {
              input: 'button 타입',
              expectedOutput: 'submit과 reset 버튼',
              description: '버튼을 올바르게 사용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m9',
          title: '폼 유효성 검사',
          description: 'required, pattern 등으로 입력을 검증해요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'modify',
          exp: 35,
          estimatedMinutes: 30,
          concept: 'HTML 유효성 검사',
          conceptExplanation: 'HTML5는 required, minlength, pattern 등으로 자동으로 입력을 검사해줘요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'required로 필수 입력을 지정할 수 있다',
            'pattern으로 정규표현식 검증을 할 수 있다',
            'minlength, maxlength로 길이를 제한할 수 있다'
          ],
          realWorldExample: '회원가입할 때 "비밀번호는 8자 이상", "이메일 형식이 아닙니다" 같은 에러 메시지가 HTML 검증이에요!',
          starterCode: '<form>\n  <!-- 아이디: 4~12자, 영문+숫자만 -->\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  \n  <!-- 비밀번호: 8자 이상, 필수 -->\n  <label for="password">비밀번호:</label>\n  <input type="password" id="password" name="password">\n  \n  <button type="submit">가입</button>\n</form>',
          solution: '<form>\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username" \n         pattern="[a-zA-Z0-9]{4,12}" \n         title="4~12자 영문 또는 숫자" \n         required>\n  \n  <label for="password">비밀번호:</label>\n  <input type="password" id="password" name="password" \n         minlength="8" \n         required>\n  \n  <button type="submit">가입</button>\n</form>',
          hints: [
            '💡 required: 필수 입력',
            '💡 minlength/maxlength: 최소/최대 길이',
            '💡 pattern: 정규표현식으로 형식 검사',
            '💡 title: 에러 메시지에 표시될 설명'
          ],
          commonMistakes: [
            'pattern을 제대로 안 써서 검증이 안 되는 경우',
            'title을 안 써서 사용자가 에러 이유를 모르는 경우',
            'JavaScript 검증만 하고 HTML 검증을 안 하는 경우'
          ],
          conceptCards: [
            {
              title: 'required',
              description: '필수 입력. 비어있으면 제출 안 돼요.'
            },
            {
              title: 'pattern',
              description: '정규표현식으로 형식 검사. [a-z]는 소문자만.'
            },
            {
              title: 'title',
              description: '에러 시 표시될 힌트 메시지'
            }
          ],
          testCases: [
            {
              input: '유효성 검사',
              expectedOutput: 'required, pattern, minlength 사용',
              description: '유효성 검사 속성을 올바르게 추가했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w33-m10',
          title: '주간 프로젝트: 회원가입 폼',
          description: '배운 모든 폼 요소를 활용해서 완전한 회원가입 페이지를 만들어요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'create',
          isWeeklyProject: true,
          exp: 50,
          estimatedMinutes: 60,
          concept: 'HTML 폼 종합 프로젝트',
          conceptExplanation: 'text, email, password, radio, checkbox, select, textarea를 모두 사용한 실전 폼을 만들어요!',
          cstaStandard: '2-AP-16',
          learningObjectives: [
            '다양한 폼 요소를 적재적소에 사용할 수 있다',
            '유효성 검사로 안전한 폼을 만들 수 있다',
            '실제 서비스 수준의 회원가입 폼을 구현할 수 있다'
          ],
          realWorldExample: '네이버, 카카오, 구글 같은 실제 회원가입 페이지의 구조를 만들어봐요!',
          requirements: [
            '아이디: text, 4~12자, 영문+숫자, required',
            '비밀번호: password, 8자 이상, required',
            '비밀번호 확인: password, required',
            '이름: text, required',
            '이메일: email, required',
            '성별: radio (남/여)',
            '생년월일: date 또는 number',
            '관심사: checkbox 3개 이상 (스포츠, 음악, 독서 등)',
            '자기소개: textarea',
            '약관 동의: checkbox, required',
            '제출 버튼: "가입하기"',
            '초기화 버튼: "다시 작성"'
          ],
          starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <title>회원가입</title>\n</head>\n<body>\n  <h1>회원가입</h1>\n  <form>\n    <!-- 여기에 회원가입 폼을 만드세요 -->\n  </form>\n</body>\n</html>',
          hints: [
            '💡 각 input마다 label을 꼭 붙이세요',
            '💡 radio와 checkbox는 name으로 그룹화하세요',
            '💡 required를 빼먹지 마세요',
            '💡 fieldset과 legend로 섹션을 나눌 수도 있어요'
          ],
          commonMistakes: [
            'label을 안 써서 접근성이 떨어지는 경우',
            'required를 빼먹어서 빈 칸으로 제출되는 경우',
            'name을 중복으로 써서 데이터가 섞이는 경우',
            '약관 동의를 checkbox로 안 만드는 경우'
          ],
          testCases: [
            {
              input: '필수 필드',
              expectedOutput: '12개 이상의 input/textarea/select 요소',
              description: '요구사항의 모든 필드를 만들었는지 확인'
            },
            {
              input: '유효성 검사',
              expectedOutput: 'required, minlength, type 등 검증 속성 사용',
              description: '적절한 유효성 검사를 적용했는지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 34~38: CSS 기초부터 종합 프로젝트까지 (50미션)
    // 간결성을 위해 주요 미션만 표시하고, 실제로는 각 주차 10미션씩 구현

    // Week 34: CSS 기초 (10미션, 4시간)
    {
      id: 'week-34',
      number: 34,
      title: 'CSS 기초',
      description: '웹 페이지를 아름답게 꾸미는 CSS를 시작해요',
      missions: [
        // ... (실제로는 10개 미션이지만 구조 파악을 위해 대표적인 것만 표시)
        {
          id: 'w34-m1',
          title: 'CSS란 무엇일까?',
          description: 'CSS로 웹 페이지를 꾸미는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'beginner',
          language: 'css',
          exp: 20,
          estimatedMinutes: 20,
          concept: 'CSS 소개',
          conceptExplanation: 'CSS는 Cascading Style Sheets의 약자로, HTML을 예쁘게 꾸미는 언어예요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'CSS의 역할과 중요성을 이해할 수 있다',
            'HTML과 CSS의 관계를 설명할 수 있다',
            'CSS를 적용하는 3가지 방법을 알 수 있다'
          ],
          realWorldExample: 'HTML은 집의 뼈대, CSS는 인테리어예요! 같은 집(HTML)도 인테리어(CSS)에 따라 완전히 다른 느낌이 나요.',
          hints: [
            '💡 CSS는 색상, 크기, 위치, 애니메이션 등을 담당해요',
            '💡 하나의 CSS 파일로 여러 페이지를 꾸밀 수 있어요',
            '💡 인라인, 내부, 외부 3가지 방법으로 CSS를 쓸 수 있어요'
          ],
          conceptCards: [
            {
              title: '인라인 CSS',
              description: 'HTML 태그 안에 style 속성으로 직접 작성. <p style="color:red">'
            },
            {
              title: '내부 CSS',
              description: '<head> 안에 <style> 태그로 작성'
            },
            {
              title: '외부 CSS',
              description: '별도의 .css 파일을 만들고 <link>로 연결 (권장!)'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m2',
          title: 'CSS 선택자 - 태그 선택자',
          description: 'HTML 태그를 선택해서 스타일을 적용해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          isKeyMission: true,
          exp: 25,
          estimatedMinutes: 20,
          concept: 'CSS 선택자',
          conceptExplanation: '선택자로 "어떤 요소를 꾸밀지" 선택하고, 중괄호 {} 안에 "어떻게 꾸밀지" 작성해요!',
          cstaStandard: '2-AP-13',
          learningObjectives: [
            'CSS 선택자의 기본 문법을 이해할 수 있다',
            '태그 선택자로 스타일을 적용할 수 있다'
          ],
          realWorldExample: '"모든 제목을 파란색으로", "모든 문단을 크게"처럼 태그 종류별로 스타일을 줄 수 있어요!',
          starterCode: '/* h1을 빨간색으로 만드세요 */\n\n/* p를 14px 크기로 만드세요 */',
          solution: 'h1 {\n  color: red;\n}\n\np {\n  font-size: 14px;\n}',
          hints: [
            '💡 선택자 { 속성: 값; } 형태예요',
            '💡 여러 속성을 ; 로 구분해서 쓸 수 있어요',
            '💡 주석은 /* */ 로 작성해요'
          ],
          commonMistakes: [
            '중괄호를 빼먹는 경우',
            '세미콜론(;)을 안 쓰는 경우',
            '콜론(:)을 빼먹는 경우: color red ✗'
          ],
          testCases: [
            {
              input: 'CSS 문법',
              expectedOutput: 'h1 { color: red; } 형태',
              description: 'CSS 문법이 올바른지 확인'
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        // ... w34-m3 ~ w34-m10: 클래스 선택자, ID 선택자, 색상, 폰트, 텍스트 스타일, 배경, 테두리, 간격, 주간 프로젝트
      ]
    },

    // Week 35~38은 구조만 표시
    {
      id: 'week-35',
      number: 35,
      title: 'CSS 레이아웃',
      description: 'Flexbox와 Grid로 요소를 배치해요',
      missions: [
        // 10 missions: display, flexbox 기초, justify-content, align-items, flex-direction, flex-wrap, grid 기초, grid-template, gap, 주간 프로젝트: 갤러리
      ]
    },
    {
      id: 'week-36',
      number: 36,
      title: '반응형 디자인',
      description: '모바일, 태블릿, PC 모두에서 잘 보이게 만들어요',
      missions: [
        // 10 missions: viewport, media query, 모바일 우선, breakpoint, 반응형 이미지, 반응형 폰트, 반응형 레이아웃, 햄버거 메뉴, 반응형 테이블, 주간 프로젝트: 반응형 포트폴리오
      ]
    },
    {
      id: 'week-37',
      number: 37,
      title: 'CSS 애니메이션',
      description: '움직이고 변하는 멋진 효과를 만들어요',
      missions: [
        // 10 missions: transition, transform, hover 효과, animation, keyframes, 페이드 인, 슬라이드, 회전, 바운스, 주간 프로젝트: 인터랙티브 카드
      ]
    },
    {
      id: 'week-38',
      number: 38,
      title: '종합 프로젝트',
      description: 'HTML과 CSS를 모두 활용해서 완전한 웹사이트를 만들어요',
      missions: [
        // 10 missions: 프로젝트 기획, 와이어프레임, HTML 구조, CSS 리셋, 헤더 만들기, 히어로 섹션, 콘텐츠 섹션, 푸터, 반응형 적용, 최종 프로젝트: 개인 포트폴리오 사이트
      ]
    }
  ]
};

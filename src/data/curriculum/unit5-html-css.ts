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
          challenges: [
            {
              id: 'c1',
              title: '첫 HTML 태그 작성',
              description: 'h1 태그로 제목을 만들어보세요',
              difficulty: 'easy',
              hints: ["<h1>과 </h1> 사이에 내용을 넣으세요", "태그 이름은 소문자로 작성해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- h1 태그로 "안녕하세요!"를 작성하세요 -->\n',
              solution: '<h1>안녕하세요!</h1>',
              feedback: {
                perfect: 'h1 태그를 완벽하게 작성했어요!',
                good: '태그 구조를 잘 이해했어요!',
                partial: '태그를 닫는 부분을 확인하세요.',
                wrong: '<h1>내용</h1> 형태로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: 'p 태그로 문단 만들기',
              description: 'p 태그로 간단한 문단을 작성하세요',
              difficulty: 'easy',
              hints: ["p는 paragraph(문단)의 약자예요", "시작 태그와 끝 태그를 모두 작성하세요"],
              estimatedMinutes: 3,
              starterCode: '<!-- p 태그로 "웹 개발은 재미있어요!" 문단을 만드세요 -->\n',
              solution: '<p>웹 개발은 재미있어요!</p>',
              feedback: {
                perfect: 'p 태그를 완벽하게 사용했어요!',
                good: '문단을 잘 만들었어요!',
                partial: '태그를 닫았는지 확인하세요.',
                wrong: '<p>내용</p> 형태로 작성하세요.'
              }
            },
            {
              id: 'c3',
              title: '제목과 문단 조합',
              description: 'h1 제목과 p 문단을 함께 작성하세요',
              difficulty: 'easy',
              hints: ["h1을 먼저, p를 아래에 작성하세요", "각 태그는 별도의 줄에 작성해요"],
              estimatedMinutes: 4,
              starterCode: '<!-- h1으로 "나의 일기" 제목, p로 "오늘은 HTML을 배웠다." 문단 -->\n',
              solution: '<h1>나의 일기</h1>\n<p>오늘은 HTML을 배웠다.</p>',
              feedback: {
                perfect: '제목과 문단을 완벽하게 조합했어요!',
                good: '태그를 잘 조합했어요!',
                partial: '두 태그 모두 작성했는지 확인하세요.',
                wrong: 'h1과 p 태그를 각각 작성해보세요.'
              }
            },
            {
              id: 'c4',
              title: '인라인 스타일 맛보기',
              description: 'style 속성으로 h1의 색상을 파란색으로 바꾸세요',
              difficulty: 'medium',
              hints: ["style=\"color: blue\" 형태를 사용하세요", "style 속성은 시작 태그 안에 넣어요"],
              estimatedMinutes: 5,
              starterCode: '<!-- h1에 style 속성을 추가해서 파란색으로 만드세요 -->\n<h1>파란 제목</h1>',
              solution: '<h1 style="color: blue">파란 제목</h1>',
              feedback: {
                perfect: '인라인 CSS를 완벽하게 적용했어요!',
                good: '스타일을 잘 적용했어요!',
                partial: 'style 속성의 문법을 확인하세요.',
                wrong: 'style="color: blue"를 태그 안에 넣으세요.'
              }
            },
            {
              id: 'c5',
              title: '웹 명함 만들기',
              description: '이름(h1), 직업(h2), 소개(p)로 명함을 만드세요',
              difficulty: 'medium',
              hints: ["h1 > h2 > p 순서로 작성하세요", "3개의 태그를 모두 사용해야 해요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 나만의 웹 명함 -->\n<!-- h1: 이름, h2: 직업, p: 한 줄 소개 -->\n',
              solution: '<h1>홍길동</h1>\n<h2>웹 개발자</h2>\n<p>안녕하세요! 웹을 사랑하는 개발자입니다.</p>',
              feedback: {
                perfect: '멋진 웹 명함이에요!',
                good: '구조가 잘 잡혀있어요!',
                partial: '3가지 태그를 모두 사용했는지 확인하세요.',
                wrong: 'h1, h2, p 태그를 순서대로 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'h2 태그로 부제목 만들기',
              description: 'h2 태그로 부제목을 작성하세요',
              difficulty: 'easy',
              hints: ["h2는 h1보다 작은 제목이에요", "<h2>내용</h2> 형태로 작성하세요"],
              estimatedMinutes: 3,
              starterCode: '<h1>나의 블로그</h1>\n<!-- h2 태그로 "오늘의 이야기" 부제목을 추가하세요 -->\n',
              solution: '<h1>나의 블로그</h1>\n<h2>오늘의 이야기</h2>',
              feedback: {
                perfect: 'h2 태그를 완벽하게 사용했어요!',
                good: '부제목을 잘 만들었어요!',
                partial: '태그 이름을 확인하세요.',
                wrong: '<h2>오늘의 이야기</h2>를 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '태그 오류 고치기',
              description: '닫는 태그가 빠진 코드를 수정하세요',
              difficulty: 'easy',
              hints: ["모든 태그는 </태그이름>으로 닫아야 해요", "슬래시(/)를 잊지 마세요"],
              estimatedMinutes: 3,
              starterCode: '<h1>제목이에요\n<p>문단이에요\n',
              solution: '<h1>제목이에요</h1>\n<p>문단이에요</p>',
              feedback: {
                perfect: '모든 태그를 올바르게 닫았어요!',
                good: '태그 닫기를 잘 이해했어요!',
                partial: '아직 닫지 않은 태그가 있어요.',
                wrong: '</h1>과 </p>로 태그를 닫으세요.'
              }
            },
            {
              id: 'c3',
              title: 'strong과 em 태그',
              description: '텍스트를 굵게(strong)와 기울임(em)으로 만드세요',
              difficulty: 'easy',
              hints: ["<strong>은 굵은 글씨, <em>은 기울임 글씨예요", "태그 안에 태그를 넣을 수 있어요"],
              estimatedMinutes: 4,
              starterCode: '<p>HTML은 <!-- "정말" 을 strong 태그로 --> 재미있고 <!-- "쉬워요" 를 em 태그로 --></p>\n',
              solution: '<p>HTML은 <strong>정말</strong> 재미있고 <em>쉬워요</em></p>',
              feedback: {
                perfect: '텍스트 강조 태그를 완벽하게 사용했어요!',
                good: 'strong과 em을 잘 구분했어요!',
                partial: '두 태그를 모두 사용했는지 확인하세요.',
                wrong: '<strong>과 <em> 태그로 텍스트를 감싸세요.'
              }
            },
            {
              id: 'c4',
              title: '여러 태그 조합하기',
              description: '제목, 문단, 강조를 조합한 소개 글을 만드세요',
              difficulty: 'medium',
              hints: ["h1 → p → strong/em 순서로 조합해요", "p 태그 안에 strong이나 em을 넣을 수 있어요"],
              estimatedMinutes: 6,
              starterCode: '<!-- h1: "코딩 교실" -->\n<!-- p: "HTML은 (strong)웹의 기초(/strong)입니다." -->\n',
              solution: '<h1>코딩 교실</h1>\n<p>HTML은 <strong>웹의 기초</strong>입니다.</p>',
              feedback: {
                perfect: '태그 조합을 완벽하게 했어요!',
                good: '여러 태그를 잘 조합했어요!',
                partial: '중첩 태그 구조를 확인하세요.',
                wrong: 'p 태그 안에 strong 태그를 넣으세요.'
              }
            },
            {
              id: 'c5',
              title: '자기소개 카드',
              description: 'h1(이름), h2(학년), p(취미를 strong으로 강조)를 만드세요',
              difficulty: 'medium',
              hints: ["3종류의 태그를 모두 사용하세요", "p 안에서 취미를 strong으로 감싸세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 자기소개 카드를 만드세요 -->\n<!-- h1: 이름, h2: 학년, p: 취미(strong으로 강조) -->\n',
              solution: '<h1>김코딩</h1>\n<h2>5학년</h2>\n<p>취미는 <strong>프로그래밍</strong>입니다.</p>',
              feedback: {
                perfect: '멋진 자기소개 카드예요!',
                good: '다양한 태그를 잘 활용했어요!',
                partial: 'strong 태그를 p 안에서 사용했는지 확인하세요.',
                wrong: 'h1, h2, p, strong 태그를 모두 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'DOCTYPE 선언 추가',
              description: 'HTML5 문서 선언을 작성하세요',
              difficulty: 'easy',
              hints: ["<!DOCTYPE html>을 맨 위에 작성해요", "대소문자를 구분하지 않아요"],
              estimatedMinutes: 3,
              starterCode: '<!-- DOCTYPE 선언을 추가하세요 -->\n<html>\n<head><title>테스트</title></head>\n<body><p>내용</p></body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head><title>테스트</title></head>\n<body><p>내용</p></body>\n</html>',
              feedback: {
                perfect: 'DOCTYPE 선언을 완벽하게 추가했어요!',
                good: 'HTML5 선언을 잘 이해했어요!',
                partial: 'DOCTYPE 철자를 확인하세요.',
                wrong: '<!DOCTYPE html>을 첫 줄에 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: 'head와 body 구분하기',
              description: 'title은 head에, 내용은 body에 넣으세요',
              difficulty: 'easy',
              hints: ["<head>에는 메타 정보, <body>에는 보이는 내용", "title 태그는 head 안에 들어가요"],
              estimatedMinutes: 4,
              starterCode: '<!DOCTYPE html>\n<html>\n<!-- head 안에 title "내 페이지" 넣기 -->\n<!-- body 안에 h1 "환영합니다" 넣기 -->\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <title>내 페이지</title>\n</head>\n<body>\n  <h1>환영합니다</h1>\n</body>\n</html>',
              feedback: {
                perfect: 'head와 body를 완벽하게 구분했어요!',
                good: '문서 구조를 잘 이해했어요!',
                partial: 'head와 body 태그를 모두 닫았는지 확인하세요.',
                wrong: '<head>와 <body>를 <html> 안에 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: 'meta 태그 추가',
              description: '문자 인코딩(UTF-8) meta 태그를 head에 추가하세요',
              difficulty: 'easy',
              hints: ["<meta charset=\"UTF-8\">은 한글을 표시하는 데 필요해요", "meta 태그는 닫는 태그가 없어요(self-closing)"],
              estimatedMinutes: 4,
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <!-- 여기에 charset UTF-8 meta 태그 추가 -->\n  <title>한글 페이지</title>\n</head>\n<body>\n  <p>안녕하세요</p>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>한글 페이지</title>\n</head>\n<body>\n  <p>안녕하세요</p>\n</body>\n</html>',
              feedback: {
                perfect: 'meta 태그를 완벽하게 추가했어요!',
                good: '문자 인코딩을 잘 설정했어요!',
                partial: 'charset 속성값을 확인하세요.',
                wrong: '<meta charset="UTF-8">을 head 안에 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: '완전한 HTML 문서 작성',
              description: 'DOCTYPE부터 body까지 완전한 문서를 만드세요',
              difficulty: 'medium',
              hints: ["DOCTYPE → html → head(title) → body(h1, p) 순서", "들여쓰기로 구조를 깔끔하게 만드세요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 완전한 HTML5 문서를 처음부터 작성하세요 -->\n<!-- title: "나의 첫 사이트" -->\n<!-- body: h1 "시작!", p "HTML은 쉬워요" -->\n',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>나의 첫 사이트</title>\n</head>\n<body>\n  <h1>시작!</h1>\n  <p>HTML은 쉬워요</p>\n</body>\n</html>',
              feedback: {
                perfect: '완전한 HTML 문서를 완벽하게 작성했어요!',
                good: '문서 구조가 올바르게 갖춰졌어요!',
                partial: '빠진 태그가 없는지 확인하세요.',
                wrong: 'DOCTYPE, html, head, body를 순서대로 작성하세요.'
              }
            },
            {
              id: 'c5',
              title: '나만의 홈페이지 뼈대',
              description: '제목, 부제목 2개, 문단 2개가 있는 완전한 HTML 문서를 만드세요',
              difficulty: 'hard',
              hints: ["h1 하나, h2 두 개, p 두 개를 body에 넣으세요", "완전한 문서 구조(DOCTYPE, html, head, body)를 갖추세요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 완전한 HTML 문서로 홈페이지 뼈대를 만드세요 -->\n<!-- title: "나의 홈페이지" -->\n<!-- body에 h1 하나, h2 두 개, p 두 개 -->\n',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>나의 홈페이지</title>\n</head>\n<body>\n  <h1>나의 홈페이지</h1>\n  <h2>소개</h2>\n  <p>안녕하세요! 저의 홈페이지에 오신 것을 환영합니다.</p>\n  <h2>취미</h2>\n  <p>코딩과 게임을 좋아합니다.</p>\n</body>\n</html>',
              feedback: {
                perfect: '홈페이지 뼈대가 완벽해요!',
                good: '구조가 잘 잡혀있어요!',
                partial: '요구한 태그 수를 확인하세요.',
                wrong: '완전한 HTML 문서 구조 안에 h1, h2, p를 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'h1부터 h6까지 작성',
              description: '6단계 제목 태그를 모두 작성해보세요',
              difficulty: 'easy',
              hints: ["h1이 가장 크고, h6이 가장 작아요", "숫자 순서대로 작성하세요"],
              estimatedMinutes: 3,
              starterCode: '<!-- h1부터 h6까지 각각 작성하세요 -->\n<!-- 내용은 "제목 1" ~ "제목 6" -->\n',
              solution: '<h1>제목 1</h1>\n<h2>제목 2</h2>\n<h3>제목 3</h3>\n<h4>제목 4</h4>\n<h5>제목 5</h5>\n<h6>제목 6</h6>',
              feedback: {
                perfect: '6단계 제목을 모두 작성했어요!',
                good: '제목 태그를 잘 이해했어요!',
                partial: '빠진 제목 레벨이 있어요.',
                wrong: 'h1부터 h6까지 순서대로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '올바른 계층 구조',
              description: '요리 레시피의 목차를 h 태그로 만드세요',
              difficulty: 'easy',
              hints: ["대주제는 h1, 소주제는 h2, 세부사항은 h3", "계층을 건너뛰지 마세요"],
              estimatedMinutes: 4,
              starterCode: '<!-- 요리 레시피 목차 -->\n<!-- h1: 김치찌개 만들기 -->\n<!-- h2: 재료 -->\n<!-- h3: 주재료 -->\n<!-- h3: 양념 -->\n<!-- h2: 만드는 법 -->\n',
              solution: '<h1>김치찌개 만들기</h1>\n<h2>재료</h2>\n<h3>주재료</h3>\n<h3>양념</h3>\n<h2>만드는 법</h2>',
              feedback: {
                perfect: '계층 구조가 완벽해요!',
                good: '목차를 잘 구성했어요!',
                partial: 'h 태그의 순서를 확인하세요.',
                wrong: 'h1 > h2 > h3 계층 순서를 지키세요.'
              }
            },
            {
              id: 'c3',
              title: '잘못된 계층 수정',
              description: '계층이 잘못된 코드를 올바르게 고치세요',
              difficulty: 'medium',
              hints: ["h1 다음에 바로 h4가 오면 안 돼요", "h1 → h2 → h3 순서를 지키세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 계층 오류를 수정하세요 -->\n<h1>동물의 세계</h1>\n<h4>포유류</h4>\n<h6>고양이</h6>\n<h4>조류</h4>\n',
              solution: '<h1>동물의 세계</h1>\n<h2>포유류</h2>\n<h3>고양이</h3>\n<h2>조류</h2>',
              feedback: {
                perfect: '계층을 올바르게 수정했어요!',
                good: '계층 구조를 잘 이해하고 있어요!',
                partial: '모든 태그의 레벨을 확인하세요.',
                wrong: 'h1 → h2 → h3 순서로 수정하세요.'
              }
            },
            {
              id: 'c4',
              title: '학교 시간표 구조',
              description: '학교 시간표를 제목 태그로 구성하세요',
              difficulty: 'medium',
              hints: ["학교이름은 h1, 학년은 h2, 과목은 h3", "같은 레벨은 같은 h 태그를 사용해요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 학교 시간표를 제목 태그로 만드세요 -->\n<!-- h1: 코딩초등학교, h2: 월요일/화요일, h3: 각 과목 -->\n',
              solution: '<h1>코딩초등학교</h1>\n<h2>월요일</h2>\n<h3>국어</h3>\n<h3>수학</h3>\n<h2>화요일</h2>\n<h3>영어</h3>\n<h3>과학</h3>',
              feedback: {
                perfect: '시간표 구조가 완벽해요!',
                good: '계층을 잘 나누었어요!',
                partial: '같은 레벨에 같은 h 태그를 사용했는지 확인하세요.',
                wrong: 'h1(학교), h2(요일), h3(과목) 구조로 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '게임 공략 가이드 구조',
              description: '게임 공략을 h1~h4로 체계적으로 구성하세요',
              difficulty: 'hard',
              hints: ["h1: 게임명, h2: 대분류, h3: 중분류, h4: 소분류", "4단계까지 사용하세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 게임 공략 가이드 -->\n<!-- h1: 마인크래프트 가이드 -->\n<!-- h2: 초보자 가이드 / 건축 가이드 -->\n<!-- h3: 각 하위 주제 -->\n<!-- h4: 세부 팁 -->\n',
              solution: '<h1>마인크래프트 가이드</h1>\n<h2>초보자 가이드</h2>\n<h3>첫날 생존법</h3>\n<h4>나무 채집 팁</h4>\n<h4>집 짓기 팁</h4>\n<h3>도구 만들기</h3>\n<h2>건축 가이드</h2>\n<h3>기본 건축</h3>\n<h3>고급 건축</h3>',
              feedback: {
                perfect: '4단계 계층을 완벽하게 구성했어요!',
                good: '가이드 구조가 잘 잡혀있어요!',
                partial: 'h4까지 사용했는지 확인하세요.',
                wrong: 'h1 > h2 > h3 > h4 4단계로 만드세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'p 태그 3개 만들기',
              description: '3개의 문단을 p 태그로 작성하세요',
              difficulty: 'easy',
              hints: ["각 문단은 별도의 p 태그로 감싸요", "p 태그 사이에 자동 간격이 생겨요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 3개의 p 태그로 자기소개를 작성하세요 -->\n',
              solution: '<p>안녕하세요, 저는 김코딩입니다.</p>\n<p>저는 코딩을 좋아합니다.</p>\n<p>특히 웹 개발이 재미있어요!</p>',
              feedback: {
                perfect: '3개의 문단을 잘 만들었어요!',
                good: 'p 태그를 잘 사용했어요!',
                partial: '3개 모두 p 태그로 감쌌는지 확인하세요.',
                wrong: '각 문장을 <p>...</p>로 감싸세요.'
              }
            },
            {
              id: 'c2',
              title: 'br 태그로 줄바꿈',
              description: 'p 태그 안에서 br 태그로 줄바꿈을 해보세요',
              difficulty: 'easy',
              hints: ["<br>은 닫는 태그가 없어요", "p 안에서 강제 줄바꿈할 때 사용해요"],
              estimatedMinutes: 3,
              starterCode: '<p>\n  1줄: 이름: 김코딩<!-- 여기서 줄바꿈 -->\n  2줄: 나이: 12살<!-- 여기서 줄바꿈 -->\n  3줄: 취미: 코딩\n</p>',
              solution: '<p>\n  이름: 김코딩<br>\n  나이: 12살<br>\n  취미: 코딩\n</p>',
              feedback: {
                perfect: 'br 태그로 줄바꿈을 완벽하게 했어요!',
                good: '줄바꿈을 잘 사용했어요!',
                partial: '모든 줄바꿈 위치에 br을 넣었는지 확인하세요.',
                wrong: '줄바꿈하고 싶은 곳에 <br>을 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: 'hr 태그로 구분선',
              description: '문단 사이에 수평선을 추가하세요',
              difficulty: 'easy',
              hints: ["<hr>은 수평 구분선이에요", "hr도 닫는 태그가 없어요"],
              estimatedMinutes: 3,
              starterCode: '<h1>뉴스</h1>\n<p>첫 번째 기사입니다.</p>\n<!-- 여기에 hr 구분선 추가 -->\n<p>두 번째 기사입니다.</p>',
              solution: '<h1>뉴스</h1>\n<p>첫 번째 기사입니다.</p>\n<hr>\n<p>두 번째 기사입니다.</p>',
              feedback: {
                perfect: '구분선을 완벽하게 추가했어요!',
                good: 'hr 태그를 잘 사용했어요!',
                partial: 'hr 태그의 위치를 확인하세요.',
                wrong: '문단 사이에 <hr>을 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: '블로그 포스트 작성',
              description: '제목(h1), 부제목(h2), 문단(p) 3개, 구분선(hr)으로 블로그를 만드세요',
              difficulty: 'medium',
              hints: ["h1 → p → hr → h2 → p → p 순서로 작성", "구분선으로 섹션을 나눠요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 블로그 포스트를 만드세요 -->\n<!-- h1: 제목, p: 소개글, hr: 구분선 -->\n<!-- h2: 본문 제목, p: 본문1, p: 본문2 -->\n',
              solution: '<h1>오늘의 코딩 일기</h1>\n<p>오늘은 HTML을 배운 날입니다.</p>\n<hr>\n<h2>배운 것</h2>\n<p>h1부터 h6까지 제목 태그를 배웠어요.</p>\n<p>p 태그로 문단도 만들 수 있어요.</p>',
              feedback: {
                perfect: '블로그 구조가 완벽해요!',
                good: '다양한 태그를 잘 조합했어요!',
                partial: 'hr 구분선을 넣었는지 확인하세요.',
                wrong: 'h1, p, hr, h2, p 순서로 작성하세요.'
              }
            },
            {
              id: 'c5',
              title: '시(poem) 페이지 만들기',
              description: '제목, 작가, br로 줄바꿈된 시 본문을 만드세요',
              difficulty: 'hard',
              hints: ["시의 각 행은 br로 줄바꿈해요", "작가 이름은 em(기울임)으로 표시해요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 시 페이지를 만드세요 -->\n<!-- h1: 시 제목 -->\n<!-- p에 em으로 작가 이름 -->\n<!-- p 안에서 br로 줄바꿈하며 시 본문 -->\n',
              solution: '<h1>봄</h1>\n<p><em>김소월</em></p>\n<p>봄이 오면 산에 들에<br>진달래꽃 피네<br>갈 봄 여름 없이<br>피는 꽃이여</p>',
              feedback: {
                perfect: '아름다운 시 페이지예요!',
                good: 'br로 줄바꿈을 잘 활용했어요!',
                partial: '시 본문에 br 태그를 사용했는지 확인하세요.',
                wrong: 'p 안에서 <br>로 각 행을 줄바꿈하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 링크 만들기',
              description: '구글로 가는 링크를 만드세요',
              difficulty: 'easy',
              hints: ["<a href=\"URL\">텍스트</a> 형태예요", "https://를 포함해야 해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 구글(https://www.google.com)로 가는 링크를 만드세요 -->\n<!-- 링크 텍스트: "구글로 가기" -->\n',
              solution: '<a href="https://www.google.com">구글로 가기</a>',
              feedback: {
                perfect: '링크를 완벽하게 만들었어요!',
                good: 'href 속성을 잘 사용했어요!',
                partial: 'URL이 올바른지 확인하세요.',
                wrong: '<a href="URL">텍스트</a> 형태로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '새 탭에서 열기',
              description: 'target="_blank"로 새 탭에서 열리는 링크를 만드세요',
              difficulty: 'easy',
              hints: ["target=\"_blank\"를 a 태그에 추가하세요", "href 다음에 공백으로 구분해서 넣어요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 네이버 링크를 새 탭에서 열리도록 만드세요 -->\n<a href="https://www.naver.com">네이버</a>\n',
              solution: '<a href="https://www.naver.com" target="_blank">네이버</a>',
              feedback: {
                perfect: '새 탭 열기를 완벽하게 설정했어요!',
                good: 'target 속성을 잘 사용했어요!',
                partial: 'target 값을 확인하세요.',
                wrong: 'target="_blank"를 a 태그에 추가하세요.'
              }
            },
            {
              id: 'c3',
              title: '이미지를 링크로 감싸기',
              description: '이미지를 클릭하면 링크로 이동하게 만드세요',
              difficulty: 'medium',
              hints: ["a 태그 안에 img 태그를 넣어요", "<a href=\"...\"><img src=\"...\"></a>"],
              estimatedMinutes: 5,
              starterCode: '<!-- 이미지를 클릭하면 https://example.com으로 이동 -->\n<img src="logo.png" alt="로고">\n',
              solution: '<a href="https://example.com">\n  <img src="logo.png" alt="로고">\n</a>',
              feedback: {
                perfect: '이미지 링크를 완벽하게 만들었어요!',
                good: '태그 중첩을 잘 이해했어요!',
                partial: 'a 태그가 img 태그를 감싸고 있는지 확인하세요.',
                wrong: '<a> 태그 안에 <img>를 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: '내비게이션 링크 3개',
              description: '3개의 링크를 나란히 만드세요',
              difficulty: 'medium',
              hints: ["각 링크는 별도의 a 태그로 만들어요", "링크 사이에 공백이나 | 을 넣어도 돼요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 3개의 링크를 만드세요 -->\n<!-- 홈(#), 소개(#about), 연락(#contact) -->\n',
              solution: '<a href="#">홈</a> | \n<a href="#about">소개</a> | \n<a href="#contact">연락</a>',
              feedback: {
                perfect: '내비게이션 링크를 완벽하게 만들었어요!',
                good: '여러 링크를 잘 구성했어요!',
                partial: '3개의 링크를 모두 만들었는지 확인하세요.',
                wrong: '각각 <a href="...">텍스트</a>로 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '링크 모음 페이지',
              description: '제목과 설명이 있는 링크 목록 페이지를 만드세요',
              difficulty: 'hard',
              hints: ["h1 제목 아래 각 링크마다 h2와 p를 붙여요", "a 태그를 p 안에 넣을 수도 있어요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 추천 사이트 모음 페이지 -->\n<!-- h1: "추천 사이트", 그 아래 사이트 2개 -->\n<!-- 각 사이트: h2(이름), p(설명), p(a 태그 링크) -->\n',
              solution: '<h1>추천 사이트</h1>\n<h2>코드닷오알지</h2>\n<p>무료로 코딩을 배울 수 있는 사이트예요.</p>\n<p><a href="https://code.org" target="_blank">방문하기</a></p>\n<h2>스크래치</h2>\n<p>블록 코딩으로 게임을 만들 수 있어요.</p>\n<p><a href="https://scratch.mit.edu" target="_blank">방문하기</a></p>',
              feedback: {
                perfect: '링크 모음 페이지가 완벽해요!',
                good: '구조화된 링크 목록이에요!',
                partial: '각 사이트에 설명과 링크를 모두 넣었는지 확인하세요.',
                wrong: 'h2, p, a 태그를 조합해서 각 사이트를 만드세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 이미지 삽입',
              description: 'img 태그로 이미지를 추가하세요',
              difficulty: 'easy',
              hints: ["<img src=\"파일명\" alt=\"설명\"> 형태예요", "img 태그는 닫는 태그가 없어요"],
              estimatedMinutes: 3,
              starterCode: '<!-- cat.jpg 이미지를 추가하세요 -->\n<!-- alt: "귀여운 고양이" -->\n',
              solution: '<img src="cat.jpg" alt="귀여운 고양이">',
              feedback: {
                perfect: '이미지를 완벽하게 추가했어요!',
                good: 'img 태그를 잘 사용했어요!',
                partial: 'alt 속성을 추가했는지 확인하세요.',
                wrong: '<img src="파일명" alt="설명"> 형태로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '이미지 크기 설정',
              description: 'width와 height 속성으로 이미지 크기를 설정하세요',
              difficulty: 'easy',
              hints: ["width=\"300\"처럼 픽셀 단위로 지정해요", "하나만 지정하면 비율이 유지돼요"],
              estimatedMinutes: 3,
              starterCode: '<!-- photo.jpg를 300x200 크기로 추가하세요 -->\n<!-- alt: "풍경 사진" -->\n',
              solution: '<img src="photo.jpg" alt="풍경 사진" width="300" height="200">',
              feedback: {
                perfect: '이미지 크기를 완벽하게 설정했어요!',
                good: '크기 속성을 잘 사용했어요!',
                partial: 'width와 height를 모두 설정했는지 확인하세요.',
                wrong: 'width="300" height="200"을 img 태그에 추가하세요.'
              }
            },
            {
              id: 'c3',
              title: 'alt 속성의 중요성',
              description: '적절한 alt 텍스트를 작성하세요',
              difficulty: 'medium',
              hints: ["이미지가 무엇을 보여주는지 설명해요", "시각장애인도 내용을 이해할 수 있게 작성해요"],
              estimatedMinutes: 4,
              starterCode: '<!-- 각 이미지에 적절한 alt를 작성하세요 -->\n<img src="sunset.jpg" alt="">\n<img src="coding-class.jpg" alt="">\n<img src="happy-dog.jpg" alt="">\n',
              solution: '<img src="sunset.jpg" alt="바다 위로 지는 아름다운 석양">\n<img src="coding-class.jpg" alt="컴퓨터로 코딩하는 학생들">\n<img src="happy-dog.jpg" alt="공원에서 뛰어노는 강아지">',
              feedback: {
                perfect: 'alt 텍스트가 매우 설명적이에요!',
                good: '이미지를 잘 설명했어요!',
                partial: '좀 더 구체적으로 설명해보세요.',
                wrong: '이미지가 보여주는 내용을 설명하세요.'
              }
            },
            {
              id: 'c4',
              title: 'figure와 figcaption',
              description: 'figure로 이미지에 캡션을 추가하세요',
              difficulty: 'medium',
              hints: ["figure 안에 img와 figcaption을 넣어요", "figcaption은 이미지 아래 설명이에요"],
              estimatedMinutes: 6,
              starterCode: '<!-- figure와 figcaption으로 이미지에 캡션 추가 -->\n<img src="space.jpg" alt="우주">\n',
              solution: '<figure>\n  <img src="space.jpg" alt="밤하늘의 은하수">\n  <figcaption>2024년 제주도에서 촬영한 은하수</figcaption>\n</figure>',
              feedback: {
                perfect: 'figure와 figcaption을 완벽하게 사용했어요!',
                good: '이미지 캡션을 잘 추가했어요!',
                partial: 'figcaption을 figure 안에 넣었는지 확인하세요.',
                wrong: '<figure> 안에 <img>과 <figcaption>을 넣으세요.'
              }
            },
            {
              id: 'c5',
              title: '이미지 갤러리',
              description: '3개의 이미지를 figure로 감싸고 캡션을 붙인 갤러리를 만드세요',
              difficulty: 'hard',
              hints: ["각 이미지를 별도의 figure로 감싸요", "h1 제목 아래 3개의 figure를 배치해요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 이미지 갤러리를 만드세요 -->\n<!-- h1: "나의 사진첩" -->\n<!-- 3개의 figure(img + figcaption) -->\n',
              solution: '<h1>나의 사진첩</h1>\n<figure>\n  <img src="beach.jpg" alt="해변 풍경" width="300">\n  <figcaption>여름 해변 여행</figcaption>\n</figure>\n<figure>\n  <img src="mountain.jpg" alt="산 풍경" width="300">\n  <figcaption>가을 산 등산</figcaption>\n</figure>\n<figure>\n  <img src="snow.jpg" alt="눈 풍경" width="300">\n  <figcaption>겨울 눈 내리는 날</figcaption>\n</figure>',
              feedback: {
                perfect: '멋진 이미지 갤러리예요!',
                good: 'figure를 잘 활용했어요!',
                partial: '3개의 figure를 모두 만들었는지 확인하세요.',
                wrong: '각 이미지를 figure > img + figcaption으로 만드세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '순서 없는 목록 만들기',
              description: 'ul과 li로 장보기 목록을 만드세요',
              difficulty: 'easy',
              hints: ["<ul> 안에 <li>를 넣어요", "각 항목마다 li 태그를 사용해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- ul로 장보기 목록 만들기 -->\n<!-- 사과, 우유, 빵 -->\n',
              solution: '<ul>\n  <li>사과</li>\n  <li>우유</li>\n  <li>빵</li>\n</ul>',
              feedback: {
                perfect: '순서 없는 목록을 완벽하게 만들었어요!',
                good: 'ul과 li를 잘 사용했어요!',
                partial: 'li를 ul 안에 넣었는지 확인하세요.',
                wrong: '<ul> 안에 <li>항목</li>을 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: '순서 있는 목록 만들기',
              description: 'ol과 li로 요리 순서를 만드세요',
              difficulty: 'easy',
              hints: ["<ol>은 번호가 자동으로 붙어요", "순서가 중요할 때 ol을 사용해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- ol로 라면 끓이는 순서 -->\n<!-- 1. 물 넣기, 2. 끓이기, 3. 면 넣기, 4. 스프 넣기 -->\n',
              solution: '<ol>\n  <li>물 넣기</li>\n  <li>끓이기</li>\n  <li>면 넣기</li>\n  <li>스프 넣기</li>\n</ol>',
              feedback: {
                perfect: '순서 있는 목록이 완벽해요!',
                good: 'ol을 잘 사용했어요!',
                partial: 'li를 ol 안에 넣었는지 확인하세요.',
                wrong: '<ol> 안에 <li>를 넣으세요. 번호는 자동이에요.'
              }
            },
            {
              id: 'c3',
              title: '중첩 목록 만들기',
              description: '목록 안에 목록을 넣어보세요',
              difficulty: 'medium',
              hints: ["li 안에 새로운 ul이나 ol을 넣으면 중첩돼요", "들여쓰기로 구조를 파악하세요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 중첩 목록: 과일 아래에 종류를 넣으세요 -->\n<ul>\n  <li>과일\n    <!-- 여기에 ul로 사과, 바나나 추가 -->\n  </li>\n  <li>채소\n    <!-- 여기에 ul로 당근, 시금치 추가 -->\n  </li>\n</ul>',
              solution: '<ul>\n  <li>과일\n    <ul>\n      <li>사과</li>\n      <li>바나나</li>\n    </ul>\n  </li>\n  <li>채소\n    <ul>\n      <li>당근</li>\n      <li>시금치</li>\n    </ul>\n  </li>\n</ul>',
              feedback: {
                perfect: '중첩 목록을 완벽하게 만들었어요!',
                good: '목록 중첩을 잘 이해했어요!',
                partial: 'ul을 li 안에 넣었는지 확인하세요.',
                wrong: 'li 안에 새로운 <ul>과 <li>를 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: '게임 랭킹 만들기',
              description: 'ol로 게임 Top 5 랭킹을 만들고 h2 제목도 추가하세요',
              difficulty: 'medium',
              hints: ["h2 제목 아래 ol을 배치하세요", "start 속성으로 시작 번호를 바꿀 수도 있어요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 게임 랭킹 페이지 -->\n<!-- h2: "이번 주 인기 게임 Top 5" -->\n<!-- ol로 5개의 게임 이름을 나열하세요 -->\n',
              solution: '<h2>이번 주 인기 게임 Top 5</h2>\n<ol>\n  <li>마인크래프트</li>\n  <li>로블록스</li>\n  <li>포트나이트</li>\n  <li>브롤스타즈</li>\n  <li>젤다의 전설</li>\n</ol>',
              feedback: {
                perfect: '게임 랭킹이 완벽해요!',
                good: 'ol로 순위를 잘 표현했어요!',
                partial: '5개 항목을 모두 넣었는지 확인하세요.',
                wrong: 'h2 아래 <ol>로 5개의 <li>를 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '할 일 목록 앱 구조',
              description: '카테고리별 할 일 목록을 ul/ol 조합으로 만드세요',
              difficulty: 'hard',
              hints: ["큰 분류는 ul, 순서가 있는 할 일은 ol", "h1 제목, h2 카테고리, 목록으로 구성해요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 할 일 목록 -->\n<!-- h1: 오늘의 할 일 -->\n<!-- h2: 공부(ol), h2: 운동(ol) -->\n',
              solution: '<h1>오늘의 할 일</h1>\n<h2>공부</h2>\n<ol>\n  <li>수학 문제 풀기</li>\n  <li>영어 단어 외우기</li>\n  <li>HTML 연습하기</li>\n</ol>\n<h2>운동</h2>\n<ol>\n  <li>스트레칭</li>\n  <li>줄넘기 100번</li>\n  <li>산책하기</li>\n</ol>',
              feedback: {
                perfect: '체계적인 할 일 목록이에요!',
                good: '카테고리를 잘 나누었어요!',
                partial: '두 카테고리 모두 ol을 사용했는지 확인하세요.',
                wrong: '각 카테고리에 h2와 ol을 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'div로 섹션 나누기',
              description: '3개의 div로 페이지를 헤더, 본문, 푸터로 나누세요',
              difficulty: 'easy',
              hints: ["각 영역을 div 태그로 감싸세요", "id 속성으로 이름을 붙여요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 3개의 div로 페이지를 나누세요 -->\n<!-- div id="header": h1 "나의 사이트" -->\n<!-- div id="content": p "내용" -->\n<!-- div id="footer": p "연락처" -->\n',
              solution: '<div id="header">\n  <h1>나의 사이트</h1>\n</div>\n<div id="content">\n  <p>내용</p>\n</div>\n<div id="footer">\n  <p>연락처</p>\n</div>',
              feedback: {
                perfect: 'div로 영역을 완벽하게 나누었어요!',
                good: 'id 속성을 잘 사용했어요!',
                partial: '3개의 div를 모두 만들었는지 확인하세요.',
                wrong: '<div id="이름">내용</div> 형태로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: 'class로 스타일 그룹',
              description: '같은 class를 가진 div 카드 3개를 만드세요',
              difficulty: 'easy',
              hints: ["class=\"card\"처럼 같은 이름을 여러 요소에 줄 수 있어요", "id는 하나만, class는 여러 개 가능해요"],
              estimatedMinutes: 4,
              starterCode: '<!-- class="card"인 div 3개를 만드세요 -->\n<!-- 각 카드에 h3 제목과 p 설명 넣기 -->\n',
              solution: '<div class="card">\n  <h3>카드 1</h3>\n  <p>첫 번째 카드입니다.</p>\n</div>\n<div class="card">\n  <h3>카드 2</h3>\n  <p>두 번째 카드입니다.</p>\n</div>\n<div class="card">\n  <h3>카드 3</h3>\n  <p>세 번째 카드입니다.</p>\n</div>',
              feedback: {
                perfect: 'class를 활용한 카드를 완벽하게 만들었어요!',
                good: 'class 속성을 잘 이해했어요!',
                partial: '3개의 카드에 모두 class="card"를 넣었는지 확인하세요.',
                wrong: '<div class="card">로 3개의 카드를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: 'span으로 인라인 강조',
              description: '문장 안에서 span으로 특정 단어를 감싸세요',
              difficulty: 'medium',
              hints: ["span은 인라인 요소로 줄바꿈 없이 텍스트를 감싸요", "div는 블록, span은 인라인이에요"],
              estimatedMinutes: 4,
              starterCode: '<!-- span으로 중요한 단어를 감싸세요 -->\n<p>오늘의 날씨는 맑음이고 기온은 25도입니다.</p>\n<!-- "맑음"과 "25도"를 span class="highlight"로 감싸세요 -->\n',
              solution: '<p>오늘의 날씨는 <span class="highlight">맑음</span>이고 기온은 <span class="highlight">25도</span>입니다.</p>',
              feedback: {
                perfect: 'span을 완벽하게 사용했어요!',
                good: '인라인 요소를 잘 활용했어요!',
                partial: '두 단어 모두 span으로 감쌌는지 확인하세요.',
                wrong: '<span class="highlight">단어</span>로 감싸세요.'
              }
            },
            {
              id: 'c4',
              title: '레이아웃 구조 만들기',
              description: 'div를 중첩해서 2단 레이아웃을 만드세요',
              difficulty: 'medium',
              hints: ["wrapper > sidebar + main 구조예요", "div 안에 div를 넣을 수 있어요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 2단 레이아웃 만들기 -->\n<!-- div id="wrapper" 안에 -->\n<!--   div id="sidebar": h2 "메뉴" + ul 목록 -->\n<!--   div id="main": h2 "본문" + p -->\n',
              solution: '<div id="wrapper">\n  <div id="sidebar">\n    <h2>메뉴</h2>\n    <ul>\n      <li>홈</li>\n      <li>소개</li>\n      <li>연락처</li>\n    </ul>\n  </div>\n  <div id="main">\n    <h2>본문</h2>\n    <p>메인 콘텐츠가 여기에 들어갑니다.</p>\n  </div>\n</div>',
              feedback: {
                perfect: '2단 레이아웃을 완벽하게 구성했어요!',
                good: 'div 중첩을 잘 이해했어요!',
                partial: 'sidebar와 main을 wrapper 안에 넣었는지 확인하세요.',
                wrong: 'div를 중첩해서 wrapper > sidebar + main을 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '카드 레이아웃 페이지',
              description: 'container 안에 3개의 카드(이미지, 제목, 설명, 버튼)를 만드세요',
              difficulty: 'hard',
              hints: ["div.container > div.card * 3", "각 카드에 img, h3, p, a 태그를 넣어요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 카드 레이아웃 페이지 -->\n<!-- div class="container" 안에 3개의 div class="card" -->\n<!-- 각 카드: img, h3 제목, p 설명, a "자세히 보기" 링크 -->\n',
              solution: '<div class="container">\n  <div class="card">\n    <img src="img1.jpg" alt="프로젝트 1">\n    <h3>프로젝트 1</h3>\n    <p>첫 번째 프로젝트 설명입니다.</p>\n    <a href="#project1">자세히 보기</a>\n  </div>\n  <div class="card">\n    <img src="img2.jpg" alt="프로젝트 2">\n    <h3>프로젝트 2</h3>\n    <p>두 번째 프로젝트 설명입니다.</p>\n    <a href="#project2">자세히 보기</a>\n  </div>\n  <div class="card">\n    <img src="img3.jpg" alt="프로젝트 3">\n    <h3>프로젝트 3</h3>\n    <p>세 번째 프로젝트 설명입니다.</p>\n    <a href="#project3">자세히 보기</a>\n  </div>\n</div>',
              feedback: {
                perfect: '카드 레이아웃이 완벽해요!',
                good: '카드 구조를 잘 만들었어요!',
                partial: '각 카드에 4가지 요소(img, h3, p, a)를 넣었는지 확인하세요.',
                wrong: 'div.container 안에 div.card 3개를 만들고 각각 img, h3, p, a를 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '페이지 기본 구조',
              description: '완전한 HTML 문서 구조를 만드세요',
              difficulty: 'easy',
              hints: ["DOCTYPE, html, head, body를 갖추세요", "title에 \"자기소개\"를 넣으세요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 자기소개 페이지의 기본 HTML 구조를 만드세요 -->\n',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>자기소개</title>\n</head>\n<body>\n</body>\n</html>',
              feedback: {
                perfect: 'HTML 문서 구조가 완벽해요!',
                good: '기본 구조를 잘 갖추었어요!',
                partial: '빠진 태그가 없는지 확인하세요.',
                wrong: 'DOCTYPE, html, head, body를 순서대로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: '프로필 섹션',
              description: '이름(h1), 사진(img), 한 줄 소개(p)를 만드세요',
              difficulty: 'easy',
              hints: ["h1, img, p 순서로 작성하세요", "img에 alt를 꼭 넣으세요"],
              estimatedMinutes: 4,
              starterCode: '<!-- 프로필 섹션 -->\n<div id="profile">\n  <!-- h1: 이름 -->\n  <!-- img: 프로필 사진 -->\n  <!-- p: 한 줄 소개 -->\n</div>',
              solution: '<div id="profile">\n  <h1>김코딩</h1>\n  <img src="profile.jpg" alt="나의 프로필 사진" width="200">\n  <p>코딩을 사랑하는 초등학생입니다!</p>\n</div>',
              feedback: {
                perfect: '프로필 섹션이 완벽해요!',
                good: '기본 정보를 잘 구성했어요!',
                partial: 'img에 alt 속성을 넣었는지 확인하세요.',
                wrong: 'div 안에 h1, img, p를 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: '취미 섹션',
              description: '취미를 ul 목록으로 만드세요',
              difficulty: 'medium',
              hints: ["h2 제목 아래 ul 목록을 넣어요", "취미는 3개 이상 작성하세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 취미 섹션 -->\n<div id="hobbies">\n  <!-- h2: "나의 취미" -->\n  <!-- ul로 취미 3개 이상 -->\n</div>',
              solution: '<div id="hobbies">\n  <h2>나의 취미</h2>\n  <ul>\n    <li>코딩</li>\n    <li>게임</li>\n    <li>독서</li>\n    <li>축구</li>\n  </ul>\n</div>',
              feedback: {
                perfect: '취미 섹션이 완벽해요!',
                good: '목록을 잘 만들었어요!',
                partial: '취미를 3개 이상 넣었는지 확인하세요.',
                wrong: 'h2 아래 ul > li로 취미를 나열하세요.'
              }
            },
            {
              id: 'c4',
              title: '좋아하는 것 섹션',
              description: '순위가 있는 좋아하는 것(ol)과 링크를 추가하세요',
              difficulty: 'medium',
              hints: ["순위에는 ol을 사용해요", "좋아하는 사이트는 a 태그로 링크해요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 좋아하는 것 섹션 -->\n<div id="favorites">\n  <!-- h2: "좋아하는 것 TOP 3" -->\n  <!-- ol로 순위, 각 li에 링크 포함 -->\n</div>',
              solution: '<div id="favorites">\n  <h2>좋아하는 것 TOP 3</h2>\n  <ol>\n    <li><a href="https://www.youtube.com">유튜브</a></li>\n    <li><a href="https://www.minecraft.net">마인크래프트</a></li>\n    <li><a href="https://scratch.mit.edu">스크래치</a></li>\n  </ol>\n</div>',
              feedback: {
                perfect: '링크가 포함된 순위를 완벽하게 만들었어요!',
                good: 'ol과 a 태그를 잘 조합했어요!',
                partial: 'li 안에 a 태그를 넣었는지 확인하세요.',
                wrong: 'ol > li > a 구조로 만드세요.'
              }
            },
            {
              id: 'c5',
              title: '완성! 자기소개 페이지',
              description: '지금까지 만든 모든 섹션을 하나의 완전한 페이지로 조합하세요',
              difficulty: 'hard',
              hints: ["profile, hobbies, favorites, footer를 모두 포함", "완전한 HTML 문서 구조 안에 넣으세요"],
              estimatedMinutes: 15,
              starterCode: '<!-- 완전한 자기소개 페이지를 만드세요 -->\n<!-- DOCTYPE, html, head(title), body -->\n<!-- body: profile, hobbies, favorites, footer -->\n',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="UTF-8">\n  <title>김코딩의 자기소개</title>\n</head>\n<body>\n  <div id="profile">\n    <h1>김코딩</h1>\n    <img src="profile.jpg" alt="프로필 사진" width="200">\n    <p>코딩을 사랑하는 초등학생입니다!</p>\n  </div>\n  <hr>\n  <div id="hobbies">\n    <h2>나의 취미</h2>\n    <ul>\n      <li>코딩</li>\n      <li>게임</li>\n      <li>독서</li>\n    </ul>\n  </div>\n  <hr>\n  <div id="favorites">\n    <h2>좋아하는 것 TOP 3</h2>\n    <ol>\n      <li><a href="#">유튜브</a></li>\n      <li><a href="#">마인크래프트</a></li>\n      <li><a href="#">스크래치</a></li>\n    </ol>\n  </div>\n  <hr>\n  <div id="footer">\n    <p>만든 사람: 김코딩 | 이메일: coding@example.com</p>\n  </div>\n</body>\n</html>',
              feedback: {
                perfect: '자기소개 페이지가 완벽하게 완성됐어요!',
                good: '모든 섹션을 잘 조합했어요!',
                partial: '빠진 섹션이 없는지 확인하세요.',
                wrong: '완전한 HTML 문서 안에 모든 div 섹션을 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'div를 시맨틱 태그로 바꾸기',
              description: 'div id="header"를 header 태그로 바꾸세요',
              difficulty: 'easy',
              hints: ["<header>는 <div id=\"header\">를 대체해요", "시맨틱 태그는 의미를 가지고 있어요"],
              estimatedMinutes: 3,
              starterCode: '<div id="header">\n  <h1>나의 블로그</h1>\n</div>\n<div id="content">\n  <p>본문입니다.</p>\n</div>\n<div id="footer">\n  <p>저작권 2024</p>\n</div>',
              solution: '<header>\n  <h1>나의 블로그</h1>\n</header>\n<main>\n  <p>본문입니다.</p>\n</main>\n<footer>\n  <p>저작권 2024</p>\n</footer>',
              feedback: {
                perfect: '시맨틱 태그로 완벽하게 변환했어요!',
                good: '시맨틱 태그를 잘 이해했어요!',
                partial: '일부 태그만 변환했어요. 나머지도 바꿔보세요.',
                wrong: 'header, main, footer 태그를 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '시맨틱 vs 비시맨틱',
              description: '어떤 태그가 시맨틱인지 구분하세요 - 비시맨틱 태그를 시맨틱으로 교체',
              difficulty: 'easy',
              hints: ["div와 span은 비시맨틱이에요", "header, nav, main, footer는 시맨틱이에요"],
              estimatedMinutes: 4,
              starterCode: '<!-- 비시맨틱 코드를 시맨틱으로 바꾸세요 -->\n<div class="navigation">\n  <a href="#">홈</a>\n  <a href="#">소개</a>\n</div>',
              solution: '<nav>\n  <a href="#">홈</a>\n  <a href="#">소개</a>\n</nav>',
              feedback: {
                perfect: 'nav 태그를 정확히 사용했어요!',
                good: '시맨틱 태그를 잘 구분했어요!',
                partial: '더 적절한 시맨틱 태그를 찾아보세요.',
                wrong: '네비게이션에는 <nav> 태그를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '웹 접근성 개선',
              description: '시맨틱 태그로 스크린리더가 이해할 수 있는 구조를 만드세요',
              difficulty: 'medium',
              hints: ["시맨틱 태그는 스크린리더에게 페이지 구조를 알려줘요", "header, nav, main, footer를 모두 사용하세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 시맨틱 태그로 접근성 높은 페이지를 만드세요 -->\n<!-- header: h1 + nav -->\n<!-- main: article 안에 h2 + p -->\n<!-- footer: p -->\n',
              solution: '<header>\n  <h1>접근성 좋은 사이트</h1>\n  <nav>\n    <a href="#">메뉴1</a>\n    <a href="#">메뉴2</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>기사 제목</h2>\n    <p>기사 내용입니다.</p>\n  </article>\n</main>\n<footer>\n  <p>Copyright 2024</p>\n</footer>',
              feedback: {
                perfect: '접근성 높은 구조를 완벽하게 만들었어요!',
                good: '시맨틱 태그를 잘 활용했어요!',
                partial: '빠진 시맨틱 태그가 있는지 확인하세요.',
                wrong: 'header, nav, main, article, footer를 사용하세요.'
              }
            },
            {
              id: 'c4',
              title: 'SEO를 위한 시맨틱 구조',
              description: '검색엔진이 잘 이해할 수 있는 블로그 구조를 만드세요',
              difficulty: 'medium',
              hints: ["article 태그는 독립적인 콘텐츠를 나타내요", "section은 주제별 그룹이에요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 검색엔진 친화적인 블로그 구조 -->\n<!-- header(h1, nav), main(article 2개), aside, footer -->\n',
              solution: '<header>\n  <h1>코딩 블로그</h1>\n  <nav>\n    <a href="#">최신글</a>\n    <a href="#">인기글</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>HTML 배우기</h2>\n    <p>HTML은 웹의 기초입니다.</p>\n  </article>\n  <article>\n    <h2>CSS 배우기</h2>\n    <p>CSS로 웹을 꾸밀 수 있어요.</p>\n  </article>\n</main>\n<aside>\n  <h3>인기 태그</h3>\n  <p>#HTML #CSS #웹개발</p>\n</aside>\n<footer>\n  <p>코딩 블로그 2024</p>\n</footer>',
              feedback: {
                perfect: 'SEO 친화적인 구조예요!',
                good: '시맨틱 태그를 잘 조합했어요!',
                partial: 'aside나 article을 빠뜨리지 않았는지 확인하세요.',
                wrong: 'header, main(article), aside, footer를 모두 사용하세요.'
              }
            },
            {
              id: 'c5',
              title: '뉴스 사이트 시맨틱 구조',
              description: '뉴스 사이트의 전체 구조를 시맨틱 태그로 설계하세요',
              difficulty: 'hard',
              hints: ["section으로 뉴스 카테고리를 나누세요", "각 뉴스는 article로 감싸요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 뉴스 사이트 구조를 시맨틱 태그로 만드세요 -->\n<!-- header(h1, nav), main(section 2개, 각각 article 포함), aside, footer -->\n',
              solution: '<header>\n  <h1>코딩 뉴스</h1>\n  <nav>\n    <a href="#">정치</a>\n    <a href="#">경제</a>\n    <a href="#">IT</a>\n  </nav>\n</header>\n<main>\n  <section>\n    <h2>주요 뉴스</h2>\n    <article>\n      <h3>AI 기술 발전</h3>\n      <p>인공지능이 빠르게 발전하고 있습니다.</p>\n    </article>\n    <article>\n      <h3>새로운 프로그래밍 언어</h3>\n      <p>새로운 언어가 등장했습니다.</p>\n    </article>\n  </section>\n  <section>\n    <h2>IT 뉴스</h2>\n    <article>\n      <h3>웹 기술 트렌드</h3>\n      <p>2024년 웹 기술 트렌드를 살펴봅니다.</p>\n    </article>\n  </section>\n</main>\n<aside>\n  <h3>인기 기사</h3>\n  <ol>\n    <li>AI란 무엇인가</li>\n    <li>코딩 입문 가이드</li>\n  </ol>\n</aside>\n<footer>\n  <p>코딩 뉴스 2024. All rights reserved.</p>\n</footer>',
              feedback: {
                perfect: '뉴스 사이트 구조가 완벽해요!',
                good: '복잡한 시맨틱 구조를 잘 만들었어요!',
                partial: 'section과 article을 구분했는지 확인하세요.',
                wrong: 'section(카테고리) > article(개별 뉴스) 구조를 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 header 만들기',
              description: 'header 안에 로고(h1)와 부제목(p)을 넣으세요',
              difficulty: 'easy',
              hints: ["<header> 안에 h1과 p를 넣어요", "header는 페이지 상단 영역이에요"],
              estimatedMinutes: 3,
              starterCode: '<!-- header 태그 안에 h1과 p를 넣으세요 -->\n',
              solution: '<header>\n  <h1>My Website</h1>\n  <p>웹 개발을 배우는 곳</p>\n</header>',
              feedback: {
                perfect: 'header를 완벽하게 만들었어요!',
                good: 'header 구조가 좋아요!',
                partial: 'header 안에 두 태그를 모두 넣었는지 확인하세요.',
                wrong: '<header> 안에 <h1>과 <p>를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'header에 nav 추가',
              description: 'header 안에 로고와 내비게이션을 함께 넣으세요',
              difficulty: 'easy',
              hints: ["header 안에 h1과 nav를 넣어요", "nav 안에 a 태그로 링크를 만들어요"],
              estimatedMinutes: 4,
              starterCode: '<!-- header에 h1 로고와 nav(링크 3개)를 넣으세요 -->\n',
              solution: '<header>\n  <h1>코딩스쿨</h1>\n  <nav>\n    <a href="#">홈</a>\n    <a href="#">강의</a>\n    <a href="#">문의</a>\n  </nav>\n</header>',
              feedback: {
                perfect: '로고와 내비게이션이 완벽해요!',
                good: 'header 구성이 좋아요!',
                partial: 'nav를 header 안에 넣었는지 확인하세요.',
                wrong: 'header > h1 + nav > a 구조로 만드세요.'
              }
            },
            {
              id: 'c3',
              title: 'CSS로 header 꾸미기',
              description: 'header에 배경색과 패딩을 적용하세요',
              difficulty: 'medium',
              hints: ["style 속성으로 background-color와 padding을 설정해요", "color로 글자색도 바꿀 수 있어요"],
              estimatedMinutes: 5,
              starterCode: '<!-- header에 배경색(#333), 글자색(white), 패딩(20px) 적용 -->\n<header>\n  <h1>Dark Header</h1>\n</header>',
              solution: '<header style="background-color: #333; color: white; padding: 20px;">\n  <h1>Dark Header</h1>\n</header>',
              feedback: {
                perfect: '헤더 스타일링이 완벽해요!',
                good: 'CSS 속성을 잘 적용했어요!',
                partial: 'background-color, color, padding을 모두 적용했는지 확인하세요.',
                wrong: 'style="background-color: #333; color: white; padding: 20px;"를 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: '반응형 header',
              description: '로고와 내비게이션이 있는 실전 header를 만드세요',
              difficulty: 'medium',
              hints: ["div로 로고 영역과 nav 영역을 감싸세요", "실제 웹사이트 헤더를 떠올려보세요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 실전 header 만들기 -->\n<!-- 로고(h1) + 설명(p) + nav(링크 4개) -->\n',
              solution: '<header style="background-color: #2c3e50; color: white; padding: 15px 20px;">\n  <h1 style="margin: 0;">CodeSchool</h1>\n  <p style="margin: 5px 0;">최고의 코딩 교육 플랫폼</p>\n  <nav>\n    <a href="#" style="color: #ecf0f1; margin-right: 15px;">홈</a>\n    <a href="#" style="color: #ecf0f1; margin-right: 15px;">강의</a>\n    <a href="#" style="color: #ecf0f1; margin-right: 15px;">커뮤니티</a>\n    <a href="#" style="color: #ecf0f1;">로그인</a>\n  </nav>\n</header>',
              feedback: {
                perfect: '실전급 header예요!',
                good: '로고와 내비게이션을 잘 조합했어요!',
                partial: '스타일까지 적용했는지 확인하세요.',
                wrong: 'header에 h1, p, nav를 넣고 style을 적용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 nav 만들기',
              description: 'nav 태그 안에 링크 3개를 만드세요',
              difficulty: 'easy',
              hints: ["nav 안에 a 태그를 넣어요", "각 링크는 공백으로 구분돼요"],
              estimatedMinutes: 3,
              starterCode: '<!-- nav 안에 홈, 소개, 연락 링크 3개 -->\n',
              solution: '<nav>\n  <a href="#">홈</a>\n  <a href="#">소개</a>\n  <a href="#">연락</a>\n</nav>',
              feedback: {
                perfect: 'nav를 완벽하게 만들었어요!',
                good: '내비게이션 링크가 좋아요!',
                partial: '3개의 링크를 모두 만들었는지 확인하세요.',
                wrong: '<nav> 안에 <a> 태그 3개를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'ul로 내비게이션',
              description: 'nav 안에 ul > li > a 구조로 메뉴를 만드세요',
              difficulty: 'easy',
              hints: ["nav > ul > li > a 구조가 일반적이에요", "li 안에 a 태그를 넣어요"],
              estimatedMinutes: 4,
              starterCode: '<!-- nav > ul > li > a 구조로 메뉴 만들기 -->\n',
              solution: '<nav>\n  <ul>\n    <li><a href="#">홈</a></li>\n    <li><a href="#">소개</a></li>\n    <li><a href="#">서비스</a></li>\n    <li><a href="#">연락</a></li>\n  </ul>\n</nav>',
              feedback: {
                perfect: '리스트 내비게이션이 완벽해요!',
                good: 'ul 구조를 잘 활용했어요!',
                partial: 'li 안에 a 태그를 넣었는지 확인하세요.',
                wrong: 'nav > ul > li > a 순서로 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '스타일된 내비게이션 바',
              description: '가로형 내비게이션 바를 CSS로 만드세요',
              difficulty: 'medium',
              hints: ["li에 display: inline을 적용하면 가로로 배치돼요", "a 태그에 padding을 추가하세요"],
              estimatedMinutes: 6,
              starterCode: '<!-- 가로형 내비게이션 바를 만드세요 -->\n<!-- nav > ul(list-style: none) > li(display: inline) > a -->\n',
              solution: '<nav style="background-color: #333; padding: 10px;">\n  <ul style="list-style: none; margin: 0; padding: 0;">\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none;">홈</a></li>\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none;">소개</a></li>\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none;">서비스</a></li>\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none;">연락</a></li>\n  </ul>\n</nav>',
              feedback: {
                perfect: '가로형 내비게이션 바가 완벽해요!',
                good: 'CSS 스타일링을 잘 적용했어요!',
                partial: 'display: inline을 적용했는지 확인하세요.',
                wrong: 'li에 display: inline, a에 padding과 color를 적용하세요.'
              }
            },
            {
              id: 'c4',
              title: '현재 페이지 표시 내비게이션',
              description: '현재 페이지를 class="active"로 강조하는 내비게이션을 만드세요',
              difficulty: 'hard',
              hints: ["현재 페이지의 a 태그에 class=\"active\"를 추가해요", "active 클래스에 다른 배경색을 적용하세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 현재 페이지(홈)를 강조하는 nav 만들기 -->\n<!-- active인 링크는 배경색을 다르게 -->\n',
              solution: '<nav style="background-color: #333;">\n  <ul style="list-style: none; margin: 0; padding: 0;">\n    <li style="display: inline;"><a href="#" class="active" style="color: white; padding: 10px 15px; text-decoration: none; background-color: #e74c3c; display: inline-block;">홈</a></li>\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none; display: inline-block;">소개</a></li>\n    <li style="display: inline;"><a href="#" style="color: white; padding: 10px 15px; text-decoration: none; display: inline-block;">서비스</a></li>\n  </ul>\n</nav>',
              feedback: {
                perfect: '현재 페이지 표시가 완벽해요!',
                good: 'active 스타일을 잘 적용했어요!',
                partial: 'active 클래스의 스타일을 다르게 했는지 확인하세요.',
                wrong: 'class="active"인 링크에 다른 background-color를 적용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'main 태그 사용',
              description: '페이지의 주요 콘텐츠를 main 태그로 감싸세요',
              difficulty: 'easy',
              hints: ["main 태그는 페이지당 하나만 사용해요", "header, footer를 제외한 주요 내용을 감싸요"],
              estimatedMinutes: 3,
              starterCode: '<header><h1>사이트</h1></header>\n<!-- 아래 내용을 main 태그로 감싸세요 -->\n<h2>환영합니다</h2>\n<p>이것은 메인 콘텐츠입니다.</p>\n<footer><p>2024</p></footer>',
              solution: '<header><h1>사이트</h1></header>\n<main>\n  <h2>환영합니다</h2>\n  <p>이것은 메인 콘텐츠입니다.</p>\n</main>\n<footer><p>2024</p></footer>',
              feedback: {
                perfect: 'main 태그를 완벽하게 사용했어요!',
                good: '주요 콘텐츠를 잘 감쌌어요!',
                partial: 'header와 footer는 main 밖에 있어야 해요.',
                wrong: '<main>으로 주요 콘텐츠만 감싸세요.'
              }
            },
            {
              id: 'c2',
              title: 'main 안에 section 나누기',
              description: 'main 안에 2개의 section을 만드세요',
              difficulty: 'easy',
              hints: ["section은 주제별 그룹이에요", "각 section에 h2 제목을 넣으세요"],
              estimatedMinutes: 4,
              starterCode: '<main>\n  <!-- section 1: h2 "소개" + p -->\n  <!-- section 2: h2 "서비스" + p -->\n</main>',
              solution: '<main>\n  <section>\n    <h2>소개</h2>\n    <p>저희 회사를 소개합니다.</p>\n  </section>\n  <section>\n    <h2>서비스</h2>\n    <p>다양한 서비스를 제공합니다.</p>\n  </section>\n</main>',
              feedback: {
                perfect: 'section으로 잘 나누었어요!',
                good: '주제별 구분이 명확해요!',
                partial: '각 section에 h2가 있는지 확인하세요.',
                wrong: '<section> 안에 <h2>와 <p>를 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: 'main + aside 레이아웃',
              description: 'main(본문)과 aside(사이드바)를 조합하세요',
              difficulty: 'medium',
              hints: ["main은 주요 콘텐츠, aside는 부가 정보예요", "main과 aside는 형제 관계예요"],
              estimatedMinutes: 6,
              starterCode: '<!-- main과 aside를 나란히 배치하세요 -->\n<!-- main: article(h2, p) -->\n<!-- aside: h3 "관련 글" + ul 목록 -->\n',
              solution: '<main>\n  <article>\n    <h2>HTML 배우기</h2>\n    <p>HTML은 웹의 구조를 만드는 언어입니다.</p>\n  </article>\n</main>\n<aside>\n  <h3>관련 글</h3>\n  <ul>\n    <li><a href="#">CSS 기초</a></li>\n    <li><a href="#">JavaScript 입문</a></li>\n  </ul>\n</aside>',
              feedback: {
                perfect: 'main과 aside를 완벽하게 조합했어요!',
                good: '레이아웃 구조가 좋아요!',
                partial: 'aside에 관련 콘텐츠를 넣었는지 확인하세요.',
                wrong: 'main과 aside를 형제로 배치하세요.'
              }
            },
            {
              id: 'c4',
              title: '완전한 페이지 레이아웃',
              description: 'header, main(section*2), aside, footer 전체 구조를 만드세요',
              difficulty: 'hard',
              hints: ["header → main + aside → footer 순서예요", "main 안에 section을 넣어 주제를 나누세요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 완전한 페이지 레이아웃 -->\n<!-- header(h1, nav), main(section 2개), aside, footer -->\n',
              solution: '<header>\n  <h1>웹 아카데미</h1>\n  <nav><a href="#">홈</a> <a href="#">강의</a></nav>\n</header>\n<main>\n  <section>\n    <h2>인기 강의</h2>\n    <p>가장 인기 있는 강의를 만나보세요.</p>\n  </section>\n  <section>\n    <h2>새로운 강의</h2>\n    <p>최근 추가된 강의입니다.</p>\n  </section>\n</main>\n<aside>\n  <h3>공지사항</h3>\n  <p>새 학기 할인 이벤트!</p>\n</aside>\n<footer>\n  <p>웹 아카데미 2024</p>\n</footer>',
              feedback: {
                perfect: '완전한 시맨틱 레이아웃이에요!',
                good: '모든 시맨틱 태그를 잘 사용했어요!',
                partial: '빠진 시맨틱 태그가 있는지 확인하세요.',
                wrong: 'header, main, aside, footer를 모두 포함하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'article로 블로그 글 작성',
              description: 'article 태그로 하나의 블로그 글을 만드세요',
              difficulty: 'easy',
              hints: ["article은 독립적인 콘텐츠예요", "h2 제목, p 내용, p 작성일을 넣으세요"],
              estimatedMinutes: 3,
              starterCode: '<!-- article로 블로그 글 하나를 만드세요 -->\n<!-- h2: 제목, p: 내용, p: 작성일 -->\n',
              solution: '<article>\n  <h2>HTML을 배우다</h2>\n  <p>오늘 HTML 태그에 대해 배웠습니다. 정말 재미있었어요!</p>\n  <p><small>2024년 3월 15일</small></p>\n</article>',
              feedback: {
                perfect: 'article을 완벽하게 사용했어요!',
                good: '블로그 글 구조가 좋아요!',
                partial: 'article 안에 제목과 내용을 넣었는지 확인하세요.',
                wrong: '<article> 안에 h2, p를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: '여러 article 나열',
              description: '3개의 독립적인 기사를 article로 만드세요',
              difficulty: 'easy',
              hints: ["각 article은 독립적이에요", "같은 구조를 반복하세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 뉴스 기사 3개를 article로 만드세요 -->\n<!-- 각 article: h3 제목 + p 내용 -->\n',
              solution: '<article>\n  <h3>첫 번째 뉴스</h3>\n  <p>첫 번째 뉴스 내용입니다.</p>\n</article>\n<article>\n  <h3>두 번째 뉴스</h3>\n  <p>두 번째 뉴스 내용입니다.</p>\n</article>\n<article>\n  <h3>세 번째 뉴스</h3>\n  <p>세 번째 뉴스 내용입니다.</p>\n</article>',
              feedback: {
                perfect: '3개의 article을 완벽하게 만들었어요!',
                good: '독립적인 콘텐츠를 잘 구분했어요!',
                partial: '3개 모두 article로 감쌌는지 확인하세요.',
                wrong: '각 뉴스를 별도의 <article>로 감싸세요.'
              }
            },
            {
              id: 'c3',
              title: 'article vs section 구분',
              description: '블로그에서 article(개별 글)과 section(카테고리)을 올바르게 사용하세요',
              difficulty: 'medium',
              hints: ["section은 주제 그룹, article은 독립 콘텐츠", "section 안에 article을 넣을 수 있어요"],
              estimatedMinutes: 6,
              starterCode: '<!-- section(카테고리) 안에 article(글)을 넣으세요 -->\n<!-- section "기술 블로그": article 2개 -->\n',
              solution: '<section>\n  <h2>기술 블로그</h2>\n  <article>\n    <h3>React vs Vue</h3>\n    <p>프론트엔드 프레임워크를 비교합니다.</p>\n  </article>\n  <article>\n    <h3>CSS Grid 완벽 가이드</h3>\n    <p>Grid로 레이아웃을 만드는 방법입니다.</p>\n  </article>\n</section>',
              feedback: {
                perfect: 'section과 article을 완벽하게 구분했어요!',
                good: '구분을 잘 이해하고 있어요!',
                partial: 'section 안에 article을 넣었는지 확인하세요.',
                wrong: '<section>(카테고리) > <article>(개별 글) 구조를 사용하세요.'
              }
            },
            {
              id: 'c4',
              title: '완전한 블로그 메인 페이지',
              description: 'header, main(section > article*2), aside, footer 구조의 블로그를 만드세요',
              difficulty: 'hard',
              hints: ["실제 블로그처럼 header에 제목과 nav를", "main 안에 section > article 구조로"],
              estimatedMinutes: 10,
              starterCode: '<!-- 블로그 메인 페이지 전체 구조 -->\n',
              solution: '<header>\n  <h1>나의 블로그</h1>\n  <nav>\n    <a href="#">전체</a> <a href="#">기술</a> <a href="#">일상</a>\n  </nav>\n</header>\n<main>\n  <section>\n    <h2>최신 글</h2>\n    <article>\n      <h3>HTML 시맨틱 태그</h3>\n      <p>시맨틱 태그를 배웠습니다.</p>\n      <p><small>2024-03-15</small></p>\n    </article>\n    <article>\n      <h3>CSS Flexbox</h3>\n      <p>Flexbox로 레이아웃을 만들었어요.</p>\n      <p><small>2024-03-14</small></p>\n    </article>\n  </section>\n</main>\n<aside>\n  <h3>카테고리</h3>\n  <ul>\n    <li>기술 (5)</li>\n    <li>일상 (3)</li>\n  </ul>\n</aside>\n<footer>\n  <p>나의 블로그 2024</p>\n</footer>',
              feedback: {
                perfect: '완전한 블로그 구조예요!',
                good: '시맨틱 태그를 잘 활용했어요!',
                partial: 'aside와 footer도 포함했는지 확인하세요.',
                wrong: 'header, main(section>article), aside, footer를 모두 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'section으로 주제 나누기',
              description: '3개의 section으로 페이지를 주제별로 나누세요',
              difficulty: 'easy',
              hints: ["각 section에는 h2 제목이 있어야 해요", "section은 주제가 같은 내용을 그룹화해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 3개의 section으로 나누세요 -->\n<!-- section 1: h2 "소개" + p -->\n<!-- section 2: h2 "특징" + p -->\n<!-- section 3: h2 "가격" + p -->\n',
              solution: '<section>\n  <h2>소개</h2>\n  <p>우리 서비스를 소개합니다.</p>\n</section>\n<section>\n  <h2>특징</h2>\n  <p>다양한 특징이 있습니다.</p>\n</section>\n<section>\n  <h2>가격</h2>\n  <p>합리적인 가격을 제공합니다.</p>\n</section>',
              feedback: {
                perfect: 'section을 완벽하게 사용했어요!',
                good: '주제별 구분이 명확해요!',
                partial: '각 section에 h2를 넣었는지 확인하세요.',
                wrong: '3개의 <section>을 만들고 각각 h2와 p를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'section 안에 카드 배치',
              description: 'section 안에 여러 div 카드를 배치하세요',
              difficulty: 'medium',
              hints: ["section은 큰 주제, div.card는 개별 항목", "section > div.card * 3 구조"],
              estimatedMinutes: 5,
              starterCode: '<!-- section 안에 3개의 카드(div.card) 넣기 -->\n<!-- 각 카드: h3 + p -->\n',
              solution: '<section>\n  <h2>우리 팀</h2>\n  <div class="card">\n    <h3>김개발</h3>\n    <p>프론트엔드 개발자</p>\n  </div>\n  <div class="card">\n    <h3>이디자인</h3>\n    <p>UI/UX 디자이너</p>\n  </div>\n  <div class="card">\n    <h3>박기획</h3>\n    <p>프로젝트 매니저</p>\n  </div>\n</section>',
              feedback: {
                perfect: 'section과 카드를 잘 조합했어요!',
                good: '구조가 깔끔해요!',
                partial: '카드를 3개 만들었는지 확인하세요.',
                wrong: 'section > div.card 구조로 3개를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '랜딩 페이지 섹션들',
              description: '히어로, 특징, 리뷰, CTA 4개의 section으로 랜딩 페이지를 만드세요',
              difficulty: 'hard',
              hints: ["각 section에 id를 부여하세요", "히어로(hero), 특징(features), 리뷰(reviews), CTA(cta)"],
              estimatedMinutes: 10,
              starterCode: '<!-- 랜딩 페이지 4개 section 만들기 -->\n<!-- hero, features, reviews, cta -->\n',
              solution: '<section id="hero">\n  <h1>최고의 코딩 교육</h1>\n  <p>지금 바로 시작하세요!</p>\n  <a href="#cta">시작하기</a>\n</section>\n<section id="features">\n  <h2>특징</h2>\n  <div class="card"><h3>쉬운 설명</h3><p>누구나 이해할 수 있어요</p></div>\n  <div class="card"><h3>실전 프로젝트</h3><p>실제 웹사이트를 만들어요</p></div>\n</section>\n<section id="reviews">\n  <h2>후기</h2>\n  <article><p>"정말 재미있어요!" - 김학생</p></article>\n  <article><p>"이해가 잘 돼요!" - 이학생</p></article>\n</section>\n<section id="cta">\n  <h2>지금 시작하세요</h2>\n  <p>무료로 체험해보세요.</p>\n  <a href="#">가입하기</a>\n</section>',
              feedback: {
                perfect: '랜딩 페이지 구조가 완벽해요!',
                good: '4개 섹션을 잘 구성했어요!',
                partial: '4개의 section을 모두 만들었는지 확인하세요.',
                wrong: 'hero, features, reviews, cta 4개의 section을 만드세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 aside 만들기',
              description: 'aside로 사이드바를 만드세요',
              difficulty: 'easy',
              hints: ["aside는 본문과 관련된 부가 정보예요", "광고, 관련 링크, 프로필 등에 사용해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- aside로 사이드바 만들기 -->\n<!-- h3 "관련 링크" + ul(li 3개) -->\n',
              solution: '<aside>\n  <h3>관련 링크</h3>\n  <ul>\n    <li><a href="#">HTML 기초</a></li>\n    <li><a href="#">CSS 입문</a></li>\n    <li><a href="#">JavaScript 시작</a></li>\n  </ul>\n</aside>',
              feedback: {
                perfect: 'aside를 완벽하게 만들었어요!',
                good: '사이드바 구조가 좋아요!',
                partial: 'ul 안에 li를 넣었는지 확인하세요.',
                wrong: '<aside> 안에 h3과 ul을 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'main과 aside 조합',
              description: 'main(본문)과 aside(사이드바)를 함께 배치하세요',
              difficulty: 'easy',
              hints: ["main과 aside는 형제 관계예요", "main이 주요 내용, aside가 부가 내용"],
              estimatedMinutes: 4,
              starterCode: '<!-- main과 aside를 함께 배치하세요 -->\n',
              solution: '<main>\n  <h2>오늘의 레시피</h2>\n  <p>김치찌개를 만들어봅시다.</p>\n</main>\n<aside>\n  <h3>추천 레시피</h3>\n  <ul>\n    <li>된장찌개</li>\n    <li>미역국</li>\n  </ul>\n</aside>',
              feedback: {
                perfect: 'main과 aside를 완벽하게 조합했어요!',
                good: '본문과 부가 정보를 잘 나누었어요!',
                partial: 'main과 aside를 형제로 배치했는지 확인하세요.',
                wrong: '<main>과 <aside>를 나란히 배치하세요.'
              }
            },
            {
              id: 'c3',
              title: 'aside에 프로필 위젯',
              description: '블로그 aside에 작성자 프로필을 만드세요',
              difficulty: 'medium',
              hints: ["img, h3(이름), p(소개)를 aside에 넣으세요", "실제 블로그 사이드바를 떠올려보세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- aside에 블로그 작성자 프로필 만들기 -->\n<!-- img(프로필), h3(이름), p(소개), ul(SNS 링크) -->\n',
              solution: '<aside>\n  <h3>작성자</h3>\n  <img src="author.jpg" alt="작성자 프로필" width="100">\n  <h4>김코딩</h4>\n  <p>웹 개발을 공부하는 학생입니다.</p>\n  <ul>\n    <li><a href="#">GitHub</a></li>\n    <li><a href="#">Twitter</a></li>\n  </ul>\n</aside>',
              feedback: {
                perfect: '프로필 위젯이 완벽해요!',
                good: 'aside를 잘 활용했어요!',
                partial: '이미지와 링크를 모두 포함했는지 확인하세요.',
                wrong: 'aside에 img, h4, p, ul을 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 footer 만들기',
              description: 'footer에 저작권 정보를 넣으세요',
              difficulty: 'easy',
              hints: ["&copy;로 저작권 기호를 표시해요", "footer는 페이지 맨 아래에 위치해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- footer에 저작권 정보 넣기 -->\n',
              solution: '<footer>\n  <p>&copy; 2024 코딩스쿨. All rights reserved.</p>\n</footer>',
              feedback: {
                perfect: 'footer를 완벽하게 만들었어요!',
                good: '저작권 표시가 좋아요!',
                partial: '&copy; 기호를 사용했는지 확인하세요.',
                wrong: '<footer> 안에 저작권 <p>를 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'footer에 링크 추가',
              description: 'footer에 개인정보처리방침, 이용약관 링크를 추가하세요',
              difficulty: 'easy',
              hints: ["footer에 nav를 넣어 링크를 모을 수 있어요", "a 태그로 각 링크를 만드세요"],
              estimatedMinutes: 4,
              starterCode: '<!-- footer에 링크들과 저작권 정보 -->\n',
              solution: '<footer>\n  <nav>\n    <a href="#">개인정보처리방침</a> | \n    <a href="#">이용약관</a> | \n    <a href="#">문의하기</a>\n  </nav>\n  <p>&copy; 2024 코딩스쿨</p>\n</footer>',
              feedback: {
                perfect: 'footer 링크가 완벽해요!',
                good: 'footer 구성이 좋아요!',
                partial: '링크와 저작권 모두 포함했는지 확인하세요.',
                wrong: 'footer에 nav(링크)와 p(저작권)를 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: '풍성한 footer',
              description: '여러 섹션이 있는 풍성한 footer를 만드세요',
              difficulty: 'medium',
              hints: ["footer 안에 div로 섹션을 나누세요", "회사 정보, 링크, SNS를 포함하세요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 풍성한 footer 만들기 -->\n<!-- div: 회사 정보(h4, p) -->\n<!-- div: 빠른 링크(h4, ul) -->\n<!-- div: SNS(h4, a 링크들) -->\n<!-- p: 저작권 -->\n',
              solution: '<footer>\n  <div>\n    <h4>코딩스쿨</h4>\n    <p>최고의 코딩 교육 플랫폼</p>\n  </div>\n  <div>\n    <h4>빠른 링크</h4>\n    <ul>\n      <li><a href="#">강의 목록</a></li>\n      <li><a href="#">가격</a></li>\n      <li><a href="#">FAQ</a></li>\n    </ul>\n  </div>\n  <div>\n    <h4>SNS</h4>\n    <a href="#">Instagram</a>\n    <a href="#">YouTube</a>\n    <a href="#">GitHub</a>\n  </div>\n  <p>&copy; 2024 코딩스쿨. All rights reserved.</p>\n</footer>',
              feedback: {
                perfect: '풍성한 footer가 완벽해요!',
                good: '다양한 정보를 잘 구성했어요!',
                partial: '3개의 div 섹션을 모두 만들었는지 확인하세요.',
                wrong: 'footer에 div 3개(정보, 링크, SNS)와 저작권 p를 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '전체 시맨틱 구조 만들기',
              description: 'header, nav, main, aside, footer를 모두 사용하세요',
              difficulty: 'easy',
              hints: ["5개의 시맨틱 태그를 모두 사용하세요", "각 태그에 간단한 내용을 넣어요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 5개 시맨틱 태그를 모두 사용한 페이지 -->\n',
              solution: '<header>\n  <h1>웹사이트</h1>\n</header>\n<nav>\n  <a href="#">홈</a> <a href="#">소개</a>\n</nav>\n<main>\n  <h2>메인 콘텐츠</h2>\n  <p>주요 내용입니다.</p>\n</main>\n<aside>\n  <h3>부가 정보</h3>\n  <p>관련 내용입니다.</p>\n</aside>\n<footer>\n  <p>&copy; 2024</p>\n</footer>',
              feedback: {
                perfect: '5개 시맨틱 태그를 모두 사용했어요!',
                good: '시맨틱 구조를 잘 이해했어요!',
                partial: '빠진 태그가 있는지 확인하세요.',
                wrong: 'header, nav, main, aside, footer를 모두 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: '시맨틱 쇼핑몰',
              description: '쇼핑몰 페이지를 시맨틱 태그로 구성하세요',
              difficulty: 'medium',
              hints: ["상품 목록은 section > article", "카테고리 네비게이션은 nav"],
              estimatedMinutes: 7,
              starterCode: '<!-- 시맨틱 쇼핑몰 페이지 -->\n<!-- header(로고, nav), main(section > article상품), aside(카테고리), footer -->\n',
              solution: '<header>\n  <h1>코딩 마트</h1>\n  <nav><a href="#">전체</a> <a href="#">신상품</a> <a href="#">인기</a></nav>\n</header>\n<main>\n  <section>\n    <h2>인기 상품</h2>\n    <article>\n      <h3>키보드</h3>\n      <p>기계식 키보드 - 50,000원</p>\n    </article>\n    <article>\n      <h3>마우스</h3>\n      <p>무선 마우스 - 30,000원</p>\n    </article>\n  </section>\n</main>\n<aside>\n  <h3>카테고리</h3>\n  <ul><li>전자제품</li><li>도서</li><li>의류</li></ul>\n</aside>\n<footer>\n  <p>&copy; 2024 코딩 마트</p>\n</footer>',
              feedback: {
                perfect: '시맨틱 쇼핑몰이 완벽해요!',
                good: '쇼핑몰 구조를 잘 만들었어요!',
                partial: 'article로 상품을 감쌌는지 확인하세요.',
                wrong: 'header, nav, main(section>article), aside, footer를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '시맨틱 포트폴리오',
              description: '개인 포트폴리오를 시맨틱 태그로 만드세요',
              difficulty: 'hard',
              hints: ["section: 소개, 프로젝트, 기술스택, 연락처", "각 프로젝트는 article로"],
              estimatedMinutes: 10,
              starterCode: '<!-- 시맨틱 포트폴리오 페이지 -->\n<!-- header, nav, main(4개 section), footer -->\n',
              solution: '<header>\n  <h1>김코딩의 포트폴리오</h1>\n  <nav>\n    <a href="#about">소개</a>\n    <a href="#projects">프로젝트</a>\n    <a href="#skills">기술</a>\n    <a href="#contact">연락</a>\n  </nav>\n</header>\n<main>\n  <section id="about">\n    <h2>소개</h2>\n    <p>안녕하세요! 웹 개발을 공부하는 학생입니다.</p>\n  </section>\n  <section id="projects">\n    <h2>프로젝트</h2>\n    <article>\n      <h3>할 일 목록 앱</h3>\n      <p>HTML과 CSS로 만든 첫 프로젝트</p>\n    </article>\n    <article>\n      <h3>날씨 페이지</h3>\n      <p>반응형 날씨 정보 페이지</p>\n    </article>\n  </section>\n  <section id="skills">\n    <h2>기술 스택</h2>\n    <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n  </section>\n  <section id="contact">\n    <h2>연락하기</h2>\n    <p>이메일: coding@example.com</p>\n  </section>\n</main>\n<footer>\n  <p>&copy; 2024 김코딩</p>\n</footer>',
              feedback: {
                perfect: '포트폴리오 구조가 완벽해요!',
                good: '다양한 시맨틱 태그를 잘 활용했어요!',
                partial: '4개 section을 모두 만들었는지 확인하세요.',
                wrong: 'header, nav, main(section*4), footer 구조를 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '블로그 헤더와 네비게이션',
              description: '블로그의 header(로고+설명)와 nav(메뉴)를 만드세요',
              difficulty: 'easy',
              hints: ["header 안에 h1, p, nav를 넣으세요", "nav에 5개의 메뉴 링크"],
              estimatedMinutes: 4,
              starterCode: '<!-- 블로그 헤더 + 네비게이션 -->\n',
              solution: '<header>\n  <h1>Daily Coding Blog</h1>\n  <p>매일 코딩을 기록합니다</p>\n  <nav>\n    <a href="#">홈</a>\n    <a href="#">기술</a>\n    <a href="#">일상</a>\n    <a href="#">독서</a>\n    <a href="#">소개</a>\n  </nav>\n</header>',
              feedback: {
                perfect: '블로그 헤더가 완벽해요!',
                good: 'header와 nav를 잘 구성했어요!',
                partial: 'nav에 5개 링크를 넣었는지 확인하세요.',
                wrong: 'header > h1 + p + nav(a*5) 구조로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '메인 콘텐츠 영역',
              description: 'main 안에 section과 article로 블로그 글을 구성하세요',
              difficulty: 'medium',
              hints: ["section으로 카테고리를 나누고", "각 글은 article(h3, p, small) 구조"],
              estimatedMinutes: 6,
              starterCode: '<!-- 블로그 메인 콘텐츠 -->\n<!-- main > section "최신 글" > article 3개 -->\n',
              solution: '<main>\n  <section>\n    <h2>최신 글</h2>\n    <article>\n      <h3>HTML 시맨틱 태그 정리</h3>\n      <p>시맨틱 태그의 종류와 사용법을 정리합니다.</p>\n      <p><small>2024-03-15 | 기술</small></p>\n    </article>\n    <article>\n      <h3>CSS Flexbox로 레이아웃 만들기</h3>\n      <p>Flexbox를 사용한 반응형 레이아웃 예제입니다.</p>\n      <p><small>2024-03-14 | 기술</small></p>\n    </article>\n    <article>\n      <h3>주말 독서 기록</h3>\n      <p>이번 주에 읽은 책을 정리합니다.</p>\n      <p><small>2024-03-13 | 일상</small></p>\n    </article>\n  </section>\n</main>',
              feedback: {
                perfect: '블로그 메인 영역이 완벽해요!',
                good: 'article 구조를 잘 만들었어요!',
                partial: '3개의 article을 모두 포함했는지 확인하세요.',
                wrong: 'main > section > article(h3+p+small) 구조를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '사이드바와 푸터',
              description: 'aside(카테고리, 인기글)와 footer를 만드세요',
              difficulty: 'medium',
              hints: ["aside에 2개의 위젯(카테고리 ul, 인기글 ol)", "footer에 저작권과 SNS 링크"],
              estimatedMinutes: 5,
              starterCode: '<!-- aside(카테고리+인기글) + footer -->\n',
              solution: '<aside>\n  <div>\n    <h3>카테고리</h3>\n    <ul>\n      <li><a href="#">기술 (12)</a></li>\n      <li><a href="#">일상 (8)</a></li>\n      <li><a href="#">독서 (5)</a></li>\n    </ul>\n  </div>\n  <div>\n    <h3>인기 글</h3>\n    <ol>\n      <li><a href="#">HTML 완벽 가이드</a></li>\n      <li><a href="#">CSS 꿀팁 모음</a></li>\n    </ol>\n  </div>\n</aside>\n<footer>\n  <nav>\n    <a href="#">GitHub</a> | <a href="#">Twitter</a>\n  </nav>\n  <p>&copy; 2024 Daily Coding Blog</p>\n</footer>',
              feedback: {
                perfect: '사이드바와 푸터가 완벽해요!',
                good: 'aside를 잘 활용했어요!',
                partial: '인기글 목록을 ol로 만들었는지 확인하세요.',
                wrong: 'aside(ul+ol)와 footer(nav+p)를 만드세요.'
              }
            },
            {
              id: 'c4',
              title: '완성! 시맨틱 블로그',
              description: '지금까지 만든 모든 파트를 하나의 완전한 블로그로 합치세요',
              difficulty: 'hard',
              hints: ["DOCTYPE부터 시작하는 완전한 HTML 문서", "header, nav, main, aside, footer 모두 포함"],
              estimatedMinutes: 12,
              starterCode: '<!-- 완전한 시맨틱 블로그를 조합하세요 -->\n<!-- 완전한 HTML5 문서 구조 -->\n',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>Daily Coding Blog</title>\n</head>\n<body>\n  <header>\n    <h1>Daily Coding Blog</h1>\n    <p>매일 코딩을 기록합니다</p>\n    <nav>\n      <a href="#">홈</a> <a href="#">기술</a> <a href="#">일상</a>\n    </nav>\n  </header>\n  <main>\n    <section>\n      <h2>최신 글</h2>\n      <article>\n        <h3>HTML 시맨틱 태그</h3>\n        <p>시맨틱 태그로 접근성을 높이는 방법입니다.</p>\n        <p><small>2024-03-15</small></p>\n      </article>\n      <article>\n        <h3>CSS Flexbox</h3>\n        <p>유연한 레이아웃을 만드는 방법입니다.</p>\n        <p><small>2024-03-14</small></p>\n      </article>\n    </section>\n  </main>\n  <aside>\n    <h3>카테고리</h3>\n    <ul>\n      <li><a href="#">기술</a></li>\n      <li><a href="#">일상</a></li>\n    </ul>\n  </aside>\n  <footer>\n    <p>&copy; 2024 Daily Coding Blog</p>\n  </footer>\n</body>\n</html>',
              feedback: {
                perfect: '완전한 시맨틱 블로그예요! 축하합니다!',
                good: '모든 시맨틱 태그를 잘 활용했어요!',
                partial: '완전한 HTML 문서 구조인지 확인하세요.',
                wrong: 'DOCTYPE부터 시작하는 완전한 HTML에 모든 시맨틱 태그를 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 form 만들기',
              description: 'form 태그로 간단한 폼을 만드세요',
              difficulty: 'easy',
              hints: ["<form> 안에 input과 button을 넣어요", "action 속성은 데이터를 보낼 주소예요"],
              estimatedMinutes: 3,
              starterCode: '<!-- form 태그로 간단한 검색 폼 만들기 -->\n<!-- input(text) + button "검색" -->\n',
              solution: '<form action="/search">\n  <input type="text" name="query" placeholder="검색어 입력">\n  <button type="submit">검색</button>\n</form>',
              feedback: {
                perfect: 'form을 완벽하게 만들었어요!',
                good: '폼 구조를 잘 이해했어요!',
                partial: 'form 태그로 감쌌는지 확인하세요.',
                wrong: '<form> 안에 input과 button을 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'label과 input 연결',
              description: 'label의 for와 input의 id를 연결하세요',
              difficulty: 'easy',
              hints: ["label의 for=\"id값\"과 input의 id=\"id값\"이 같아야 해요", "label을 클릭하면 input에 포커스가 가요"],
              estimatedMinutes: 3,
              starterCode: '<!-- label과 input을 연결하세요 -->\n<label>이름:</label>\n<input type="text">\n',
              solution: '<label for="name">이름:</label>\n<input type="text" id="name" name="name">',
              feedback: {
                perfect: 'label과 input을 완벽하게 연결했어요!',
                good: 'for와 id를 잘 매칭했어요!',
                partial: 'for와 id 값이 같은지 확인하세요.',
                wrong: 'label의 for="name"과 input의 id="name"을 일치시키세요.'
              }
            },
            {
              id: 'c3',
              title: '간단한 로그인 폼',
              description: '이름과 비밀번호 입력이 있는 로그인 폼을 만드세요',
              difficulty: 'medium',
              hints: ["type=\"text\"와 type=\"password\"를 사용하세요", "각 input에 label을 붙여요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 로그인 폼: 이름(text) + 비밀번호(password) + 로그인 버튼 -->\n',
              solution: '<form action="/login" method="POST">\n  <label for="username">아이디:</label>\n  <input type="text" id="username" name="username">\n  <br>\n  <label for="pw">비밀번호:</label>\n  <input type="password" id="pw" name="password">\n  <br>\n  <button type="submit">로그인</button>\n</form>',
              feedback: {
                perfect: '로그인 폼이 완벽해요!',
                good: 'text와 password를 잘 구분했어요!',
                partial: 'label을 모두 연결했는지 확인하세요.',
                wrong: 'type="text"와 type="password" input을 form 안에 넣으세요.'
              }
            },
            {
              id: 'c4',
              title: 'method 속성 이해하기',
              description: 'GET과 POST의 차이를 이해하고 적절한 method를 선택하세요',
              difficulty: 'medium',
              hints: ["GET: 검색처럼 데이터 조회용", "POST: 로그인, 회원가입처럼 데이터 전송용"],
              estimatedMinutes: 5,
              starterCode: '<!-- 1. 검색 폼 (GET) -->\n<form>\n  <input type="text" name="q">\n  <button>검색</button>\n</form>\n<!-- 2. 회원가입 폼 (POST) -->\n<form>\n  <input type="text" name="email">\n  <button>가입</button>\n</form>',
              solution: '<form action="/search" method="GET">\n  <input type="text" name="q">\n  <button type="submit">검색</button>\n</form>\n<form action="/register" method="POST">\n  <input type="text" name="email">\n  <button type="submit">가입</button>\n</form>',
              feedback: {
                perfect: 'method를 완벽하게 구분했어요!',
                good: 'GET과 POST를 잘 이해했어요!',
                partial: '검색은 GET, 가입은 POST인지 확인하세요.',
                wrong: '검색엔 method="GET", 가입엔 method="POST"를 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'placeholder 추가',
              description: 'input에 placeholder를 추가하세요',
              difficulty: 'easy',
              hints: ["placeholder는 빈 칸에 보이는 힌트예요", "placeholder=\"여기에 입력\""],
              estimatedMinutes: 3,
              starterCode: '<!-- input에 placeholder "이름을 입력하세요" 추가 -->\n<input type="text" name="name">\n',
              solution: '<input type="text" name="name" placeholder="이름을 입력하세요">',
              feedback: {
                perfect: 'placeholder를 완벽하게 추가했어요!',
                good: 'placeholder를 잘 사용했어요!',
                partial: 'placeholder 텍스트를 확인하세요.',
                wrong: 'placeholder="이름을 입력하세요"를 input에 추가하세요.'
              }
            },
            {
              id: 'c2',
              title: '다양한 텍스트 입력 폼',
              description: '이름, 닉네임, 전화번호 입력 폼을 만드세요',
              difficulty: 'easy',
              hints: ["각 input에 label, name, placeholder를 넣어요", "전화번호는 type=\"tel\"을 사용해도 돼요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 3개의 입력: 이름, 닉네임, 전화번호 -->\n<!-- 각각 label + input -->\n',
              solution: '<form>\n  <label for="name">이름:</label>\n  <input type="text" id="name" name="name" placeholder="홍길동">\n  <br>\n  <label for="nick">닉네임:</label>\n  <input type="text" id="nick" name="nickname" placeholder="코딩왕">\n  <br>\n  <label for="tel">전화번호:</label>\n  <input type="tel" id="tel" name="phone" placeholder="010-1234-5678">\n</form>',
              feedback: {
                perfect: '3가지 입력을 완벽하게 만들었어요!',
                good: 'label과 input을 잘 연결했어요!',
                partial: 'placeholder를 각각 넣었는지 확인하세요.',
                wrong: 'label+input 쌍을 3개 만들고 placeholder를 추가하세요.'
              }
            },
            {
              id: 'c3',
              title: 'maxlength와 required',
              description: '입력 제한과 필수 입력을 설정하세요',
              difficulty: 'medium',
              hints: ["maxlength=\"10\"으로 글자 수 제한", "required로 필수 입력 설정"],
              estimatedMinutes: 5,
              starterCode: '<!-- 닉네임: 최대 10자, 필수 -->\n<!-- 자기소개: 최대 100자 -->\n<form>\n  <input type="text" name="nickname">\n  <input type="text" name="bio">\n  <button type="submit">저장</button>\n</form>',
              solution: '<form>\n  <label for="nick">닉네임 (필수, 최대 10자):</label>\n  <input type="text" id="nick" name="nickname" maxlength="10" required placeholder="닉네임">\n  <br>\n  <label for="bio">자기소개 (최대 100자):</label>\n  <input type="text" id="bio" name="bio" maxlength="100" placeholder="자기소개">\n  <br>\n  <button type="submit">저장</button>\n</form>',
              feedback: {
                perfect: '입력 제한을 완벽하게 설정했어요!',
                good: 'maxlength와 required를 잘 사용했어요!',
                partial: 'required와 maxlength를 모두 설정했는지 확인하세요.',
                wrong: '닉네임에 maxlength="10" required를 추가하세요.'
              }
            },
            {
              id: 'c4',
              title: '실전 프로필 편집 폼',
              description: '이름, 이메일, 웹사이트, 소개를 입력받는 프로필 폼을 만드세요',
              difficulty: 'hard',
              hints: ["이메일은 type=\"email\", 웹사이트는 type=\"url\"", "각 필드에 적절한 type, placeholder, label을 사용하세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 프로필 편집 폼 -->\n<!-- 이름(text, 필수), 이메일(email, 필수) -->\n<!-- 웹사이트(url), 소개(text, 100자) -->\n<!-- 저장 버튼 -->\n',
              solution: '<form action="/profile" method="POST">\n  <label for="name">이름 *</label>\n  <input type="text" id="name" name="name" required placeholder="홍길동">\n  <br>\n  <label for="email">이메일 *</label>\n  <input type="email" id="email" name="email" required placeholder="example@email.com">\n  <br>\n  <label for="web">웹사이트</label>\n  <input type="url" id="web" name="website" placeholder="https://example.com">\n  <br>\n  <label for="bio">소개</label>\n  <input type="text" id="bio" name="bio" maxlength="100" placeholder="간단한 자기소개">\n  <br>\n  <button type="submit">저장</button>\n</form>',
              feedback: {
                perfect: '프로필 편집 폼이 완벽해요!',
                good: '다양한 input type을 잘 사용했어요!',
                partial: '이메일에 type="email"을 사용했는지 확인하세요.',
                wrong: '각 필드에 적절한 type과 속성을 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'password 입력 만들기',
              description: 'type="password"로 비밀번호 입력을 만드세요',
              difficulty: 'easy',
              hints: ["password 타입은 입력한 글자가 점으로 보여요", "보안을 위해 비밀번호에 항상 사용해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 비밀번호 입력 만들기 -->\n<label for="pw">비밀번호:</label>\n<input type="text" id="pw" name="password">\n',
              solution: '<label for="pw">비밀번호:</label>\n<input type="password" id="pw" name="password" placeholder="비밀번호 입력">',
              feedback: {
                perfect: 'password 타입을 완벽하게 사용했어요!',
                good: '비밀번호 입력을 잘 만들었어요!',
                partial: 'type을 password로 바꿨는지 확인하세요.',
                wrong: 'type="text"를 type="password"로 바꾸세요.'
              }
            },
            {
              id: 'c2',
              title: '비밀번호 확인 필드',
              description: '비밀번호와 비밀번호 확인 2개의 필드를 만드세요',
              difficulty: 'easy',
              hints: ["같은 type=\"password\"를 2개 사용해요", "name을 다르게 해서 구분해요"],
              estimatedMinutes: 4,
              starterCode: '<!-- 비밀번호 + 비밀번호 확인 -->\n',
              solution: '<label for="pw">비밀번호:</label>\n<input type="password" id="pw" name="password" placeholder="비밀번호">\n<br>\n<label for="pw2">비밀번호 확인:</label>\n<input type="password" id="pw2" name="password_confirm" placeholder="비밀번호 재입력">',
              feedback: {
                perfect: '비밀번호 확인 필드를 완벽하게 만들었어요!',
                good: '2개의 password 필드를 잘 만들었어요!',
                partial: 'name을 다르게 설정했는지 확인하세요.',
                wrong: 'password 타입 input을 2개 만들고 name을 다르게 하세요.'
              }
            },
            {
              id: 'c3',
              title: '비밀번호 길이 제한',
              description: 'minlength와 maxlength로 비밀번호 길이를 제한하세요',
              difficulty: 'medium',
              hints: ["minlength=\"8\"로 최소 길이 설정", "maxlength=\"20\"으로 최대 길이 설정"],
              estimatedMinutes: 4,
              starterCode: '<!-- 비밀번호: 최소 8자, 최대 20자, 필수 -->\n<input type="password" name="password">\n',
              solution: '<label for="pw">비밀번호 (8~20자):</label>\n<input type="password" id="pw" name="password" minlength="8" maxlength="20" required placeholder="8자 이상 입력">',
              feedback: {
                perfect: '비밀번호 제한을 완벽하게 설정했어요!',
                good: '길이 제한을 잘 적용했어요!',
                partial: 'minlength와 maxlength를 모두 설정했는지 확인하세요.',
                wrong: 'minlength="8" maxlength="20" required를 추가하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'email 입력 만들기',
              description: 'type="email"로 이메일 입력을 만드세요',
              difficulty: 'easy',
              hints: ["email 타입은 @가 없으면 제출 안 돼요", "자동으로 형식을 검사해줘요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 이메일 입력 만들기 -->\n<label for="email">이메일:</label>\n<input type="text" id="email" name="email">\n',
              solution: '<label for="email">이메일:</label>\n<input type="email" id="email" name="email" required placeholder="example@email.com">',
              feedback: {
                perfect: 'email 타입을 완벽하게 사용했어요!',
                good: '이메일 입력을 잘 만들었어요!',
                partial: 'type을 email로 바꿨는지 확인하세요.',
                wrong: 'type="email"로 변경하세요.'
              }
            },
            {
              id: 'c2',
              title: 'number 입력 만들기',
              description: 'type="number"로 나이 입력을 만드세요 (1~120)',
              difficulty: 'easy',
              hints: ["min=\"1\" max=\"120\"으로 범위 설정", "step으로 증가 단위를 설정할 수 있어요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 나이 입력: 1~120, 기본값 10 -->\n<label for="age">나이:</label>\n<input type="text" id="age" name="age">\n',
              solution: '<label for="age">나이:</label>\n<input type="number" id="age" name="age" min="1" max="120" value="10">',
              feedback: {
                perfect: 'number 타입을 완벽하게 설정했어요!',
                good: '범위를 잘 설정했어요!',
                partial: 'min과 max를 설정했는지 확인하세요.',
                wrong: 'type="number" min="1" max="120"을 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: 'range 슬라이더',
              description: 'type="range"로 만족도 슬라이더를 만드세요',
              difficulty: 'medium',
              hints: ["range는 슬라이더 바를 만들어요", "min, max, value로 초기값 설정"],
              estimatedMinutes: 4,
              starterCode: '<!-- 만족도 슬라이더: 0~10, 기본 5 -->\n<label for="rate">만족도:</label>\n',
              solution: '<label for="rate">만족도: </label>\n<input type="range" id="rate" name="rating" min="0" max="10" value="5">\n<span>0</span> ~ <span>10</span>',
              feedback: {
                perfect: 'range 슬라이더를 완벽하게 만들었어요!',
                good: '슬라이더를 잘 만들었어요!',
                partial: 'min, max, value를 모두 설정했는지 확인하세요.',
                wrong: 'type="range" min="0" max="10" value="5"를 사용하세요.'
              }
            },
            {
              id: 'c4',
              title: '다양한 입력 타입 조합',
              description: 'email, number, date, color를 모두 사용하는 폼을 만드세요',
              difficulty: 'hard',
              hints: ["type=\"date\"는 날짜 선택기가 나와요", "type=\"color\"는 색상 선택기가 나와요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 이벤트 등록 폼 -->\n<!-- email, number(인원 1~100), date, color(테마색) -->\n',
              solution: '<form>\n  <label for="email">이메일:</label>\n  <input type="email" id="email" name="email" required>\n  <br>\n  <label for="people">인원:</label>\n  <input type="number" id="people" name="people" min="1" max="100" value="1">\n  <br>\n  <label for="date">날짜:</label>\n  <input type="date" id="date" name="date" required>\n  <br>\n  <label for="color">테마 색상:</label>\n  <input type="color" id="color" name="theme" value="#3498db">\n  <br>\n  <button type="submit">등록</button>\n</form>',
              feedback: {
                perfect: '다양한 input 타입을 완벽하게 사용했어요!',
                good: '4가지 타입을 잘 조합했어요!',
                partial: '4가지 타입을 모두 사용했는지 확인하세요.',
                wrong: 'email, number, date, color 타입을 모두 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 textarea',
              description: 'textarea로 여러 줄 입력을 만드세요',
              difficulty: 'easy',
              hints: ["<textarea>와 </textarea>로 감싸요", "rows와 cols로 크기를 설정해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- textarea로 자기소개 입력 만들기 -->\n<!-- rows="5" cols="40" -->\n',
              solution: '<label for="intro">자기소개:</label>\n<br>\n<textarea id="intro" name="introduction" rows="5" cols="40" placeholder="자기소개를 입력하세요"></textarea>',
              feedback: {
                perfect: 'textarea를 완벽하게 만들었어요!',
                good: '여러 줄 입력을 잘 만들었어요!',
                partial: 'rows와 cols를 설정했는지 확인하세요.',
                wrong: '<textarea rows="5" cols="40">을 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: 'textarea 속성 활용',
              description: 'maxlength, placeholder, required를 적용하세요',
              difficulty: 'medium',
              hints: ["maxlength로 최대 글자 수 제한", "required로 필수 입력 설정"],
              estimatedMinutes: 4,
              starterCode: '<!-- 리뷰 입력: 최대 500자, 필수, placeholder -->\n<textarea name="review"></textarea>\n',
              solution: '<label for="review">리뷰 (최대 500자, 필수):</label>\n<br>\n<textarea id="review" name="review" rows="4" cols="50" maxlength="500" required placeholder="제품 리뷰를 작성해주세요 (최대 500자)"></textarea>',
              feedback: {
                perfect: 'textarea 속성을 완벽하게 활용했어요!',
                good: '속성들을 잘 적용했어요!',
                partial: 'maxlength와 required를 모두 넣었는지 확인하세요.',
                wrong: 'maxlength="500" required placeholder="..."를 추가하세요.'
              }
            },
            {
              id: 'c3',
              title: '피드백 폼 만들기',
              description: '이름(input) + 제목(input) + 내용(textarea) + 제출 버튼',
              difficulty: 'hard',
              hints: ["form 안에 input 2개 + textarea 1개 + button", "각각 label과 연결하세요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 피드백 폼 만들기 -->\n<!-- 이름(text), 제목(text), 내용(textarea), 제출 -->\n',
              solution: '<form action="/feedback" method="POST">\n  <label for="name">이름:</label>\n  <input type="text" id="name" name="name" required>\n  <br>\n  <label for="title">제목:</label>\n  <input type="text" id="title" name="title" required>\n  <br>\n  <label for="msg">내용:</label>\n  <br>\n  <textarea id="msg" name="message" rows="6" cols="50" required placeholder="의견을 남겨주세요"></textarea>\n  <br>\n  <button type="submit">제출</button>\n</form>',
              feedback: {
                perfect: '피드백 폼이 완벽해요!',
                good: 'input과 textarea를 잘 조합했어요!',
                partial: 'textarea의 속성들을 확인하세요.',
                wrong: 'input 2개 + textarea 1개 + button을 form 안에 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 select 만들기',
              description: 'select로 학년 선택 드롭다운을 만드세요',
              difficulty: 'easy',
              hints: ["<select> 안에 <option>을 넣어요", "value는 서버로 보내는 값이에요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 학년 선택 드롭다운 -->\n<!-- 1학년~6학년 -->\n',
              solution: '<label for="grade">학년:</label>\n<select id="grade" name="grade">\n  <option value="">선택하세요</option>\n  <option value="1">1학년</option>\n  <option value="2">2학년</option>\n  <option value="3">3학년</option>\n  <option value="4">4학년</option>\n  <option value="5">5학년</option>\n  <option value="6">6학년</option>\n</select>',
              feedback: {
                perfect: 'select를 완벽하게 만들었어요!',
                good: '드롭다운을 잘 만들었어요!',
                partial: 'option에 value를 넣었는지 확인하세요.',
                wrong: '<select> 안에 <option value="값">텍스트</option>을 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: 'optgroup으로 그룹 나누기',
              description: 'optgroup으로 옵션을 그룹별로 나누세요',
              difficulty: 'medium',
              hints: ["<optgroup label=\"그룹명\">으로 분류해요", "과일/채소로 나눠보세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 음식 선택 드롭다운 (과일/채소 그룹) -->\n',
              solution: '<label for="food">음식 선택:</label>\n<select id="food" name="food">\n  <optgroup label="과일">\n    <option value="apple">사과</option>\n    <option value="banana">바나나</option>\n  </optgroup>\n  <optgroup label="채소">\n    <option value="carrot">당근</option>\n    <option value="spinach">시금치</option>\n  </optgroup>\n</select>',
              feedback: {
                perfect: 'optgroup을 완벽하게 사용했어요!',
                good: '그룹을 잘 나누었어요!',
                partial: 'optgroup의 label을 설정했는지 확인하세요.',
                wrong: '<optgroup label="그룹명"> 안에 option들을 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: '주문 폼 완성',
              description: '이름(input) + 메뉴(select) + 수량(number) + 주문 버튼',
              difficulty: 'hard',
              hints: ["select로 메뉴 선택, number로 수량 입력", "form 안에 모든 요소를 넣으세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 카페 주문 폼 -->\n<!-- 이름, 메뉴(아메리카노/라떼/카푸치노), 수량(1~10), 주문 -->\n',
              solution: '<form action="/order" method="POST">\n  <label for="name">이름:</label>\n  <input type="text" id="name" name="name" required>\n  <br>\n  <label for="menu">메뉴:</label>\n  <select id="menu" name="menu" required>\n    <option value="">선택하세요</option>\n    <option value="americano">아메리카노</option>\n    <option value="latte">카페라떼</option>\n    <option value="cappuccino">카푸치노</option>\n  </select>\n  <br>\n  <label for="qty">수량:</label>\n  <input type="number" id="qty" name="quantity" min="1" max="10" value="1">\n  <br>\n  <button type="submit">주문하기</button>\n</form>',
              feedback: {
                perfect: '주문 폼이 완벽해요!',
                good: '다양한 입력 요소를 잘 조합했어요!',
                partial: 'select에 option들을 넣었는지 확인하세요.',
                wrong: 'input, select, number를 form 안에 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'checkbox로 취미 선택',
              description: '여러 개 선택 가능한 체크박스를 만드세요',
              difficulty: 'easy',
              hints: ["type=\"checkbox\"는 여러 개 선택 가능해요", "같은 name으로 묶어요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 취미 체크박스: 코딩, 게임, 독서, 운동 -->\n',
              solution: '<p>취미를 선택하세요 (복수 선택 가능):</p>\n<label><input type="checkbox" name="hobby" value="coding"> 코딩</label>\n<label><input type="checkbox" name="hobby" value="game"> 게임</label>\n<label><input type="checkbox" name="hobby" value="reading"> 독서</label>\n<label><input type="checkbox" name="hobby" value="sports"> 운동</label>',
              feedback: {
                perfect: '체크박스를 완벽하게 만들었어요!',
                good: 'checkbox를 잘 사용했어요!',
                partial: 'name을 모두 같게 설정했는지 확인하세요.',
                wrong: 'type="checkbox" name="hobby" value="값"을 사용하세요.'
              }
            },
            {
              id: 'c2',
              title: 'radio로 성별 선택',
              description: '하나만 선택 가능한 라디오 버튼을 만드세요',
              difficulty: 'easy',
              hints: ["type=\"radio\"는 하나만 선택 가능해요", "같은 name이면 하나만 선택돼요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 성별 라디오: 남자, 여자, 선택안함 -->\n',
              solution: '<p>성별:</p>\n<label><input type="radio" name="gender" value="male"> 남자</label>\n<label><input type="radio" name="gender" value="female"> 여자</label>\n<label><input type="radio" name="gender" value="none" checked> 선택안함</label>',
              feedback: {
                perfect: '라디오 버튼을 완벽하게 만들었어요!',
                good: 'radio를 잘 사용했어요!',
                partial: 'name이 모두 같은지 확인하세요.',
                wrong: '같은 name="gender"로 radio 3개를 만드세요.'
              }
            },
            {
              id: 'c3',
              title: '설문조사 폼',
              description: '라디오(만족도)와 체크박스(관심분야)를 조합하세요',
              difficulty: 'medium',
              hints: ["만족도는 radio(하나만 선택)", "관심분야는 checkbox(여러 개 선택)"],
              estimatedMinutes: 6,
              starterCode: '<!-- 설문조사 폼 -->\n<!-- radio: 만족도(매우만족/만족/보통/불만족) -->\n<!-- checkbox: 관심분야(웹/앱/게임/AI) -->\n',
              solution: '<form>\n  <fieldset>\n    <legend>만족도</legend>\n    <label><input type="radio" name="satisfaction" value="5"> 매우만족</label>\n    <label><input type="radio" name="satisfaction" value="4"> 만족</label>\n    <label><input type="radio" name="satisfaction" value="3" checked> 보통</label>\n    <label><input type="radio" name="satisfaction" value="2"> 불만족</label>\n  </fieldset>\n  <fieldset>\n    <legend>관심 분야</legend>\n    <label><input type="checkbox" name="interest" value="web"> 웹 개발</label>\n    <label><input type="checkbox" name="interest" value="app"> 앱 개발</label>\n    <label><input type="checkbox" name="interest" value="game"> 게임</label>\n    <label><input type="checkbox" name="interest" value="ai"> AI</label>\n  </fieldset>\n  <button type="submit">제출</button>\n</form>',
              feedback: {
                perfect: '설문조사 폼이 완벽해요!',
                good: 'radio와 checkbox를 잘 구분했어요!',
                partial: 'fieldset과 legend를 사용했는지 확인하세요.',
                wrong: '만족도는 radio, 관심분야는 checkbox로 만드세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '3가지 버튼 타입',
              description: 'submit, reset, button 3가지 타입을 만드세요',
              difficulty: 'easy',
              hints: ["submit: 폼 제출, reset: 초기화, button: 일반 버튼", "type 속성으로 구분해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 3가지 타입의 버튼 만들기 -->\n<form>\n  <input type="text" name="name" placeholder="이름">\n  <!-- submit, reset, button 3가지 -->\n</form>',
              solution: '<form>\n  <input type="text" name="name" placeholder="이름">\n  <br>\n  <button type="submit">제출</button>\n  <button type="reset">초기화</button>\n  <button type="button">일반 버튼</button>\n</form>',
              feedback: {
                perfect: '3가지 버튼을 완벽하게 만들었어요!',
                good: '버튼 타입을 잘 구분했어요!',
                partial: '3가지 타입을 모두 사용했는지 확인하세요.',
                wrong: 'type="submit", type="reset", type="button"을 각각 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '스타일된 버튼',
              description: '버튼에 배경색, 글자색, 패딩, 테두리를 적용하세요',
              difficulty: 'medium',
              hints: ["style 속성으로 CSS를 적용해요", "background-color, color, padding, border를 사용해요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 예쁜 버튼 만들기 -->\n<!-- 파란 배경, 흰 글자, 패딩 10px 20px, 테두리 없음 -->\n<button>클릭하세요</button>',
              solution: '<button style="background-color: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">클릭하세요</button>',
              feedback: {
                perfect: '멋진 버튼 스타일이에요!',
                good: 'CSS 속성을 잘 적용했어요!',
                partial: 'border: none을 추가했는지 확인하세요.',
                wrong: 'style에 background-color, color, padding, border를 넣으세요.'
              }
            },
            {
              id: 'c3',
              title: '버튼이 있는 카드',
              description: '제품 카드에 "장바구니 담기"와 "바로 구매" 버튼을 추가하세요',
              difficulty: 'hard',
              hints: ["div.card 안에 제품 정보와 버튼을 넣어요", "2개의 버튼에 각각 다른 스타일을 주세요"],
              estimatedMinutes: 8,
              starterCode: '<!-- 제품 카드 + 버튼 2개 -->\n<div class="card">\n  <h3>무선 키보드</h3>\n  <p>가격: 50,000원</p>\n  <!-- 장바구니 담기 버튼 (회색) + 바로 구매 버튼 (파란색) -->\n</div>',
              solution: '<div class="card" style="border: 1px solid #ddd; padding: 20px; border-radius: 8px; width: 250px;">\n  <h3>무선 키보드</h3>\n  <p>가격: 50,000원</p>\n  <p>인기 있는 기계식 키보드입니다.</p>\n  <button style="background-color: #95a5a6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">장바구니 담기</button>\n  <button style="background-color: #3498db; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">바로 구매</button>\n</div>',
              feedback: {
                perfect: '제품 카드가 완벽해요!',
                good: '버튼 스타일을 잘 구분했어요!',
                partial: '두 버튼에 다른 색상을 적용했는지 확인하세요.',
                wrong: '카드 안에 2개의 스타일된 버튼을 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: 'required 필수 입력',
              description: '필수 입력 필드에 required를 추가하세요',
              difficulty: 'easy',
              hints: ["required를 추가하면 비어있을 때 제출이 안 돼요", "별표(*)로 필수 표시를 해줘요"],
              estimatedMinutes: 3,
              starterCode: '<!-- 이름과 이메일을 필수로 만드세요 -->\n<form>\n  <label>이름: <input type="text" name="name"></label>\n  <label>이메일: <input type="email" name="email"></label>\n  <label>전화번호: <input type="tel" name="phone"></label>\n  <button type="submit">제출</button>\n</form>',
              solution: '<form>\n  <label>이름 *: <input type="text" name="name" required></label>\n  <br>\n  <label>이메일 *: <input type="email" name="email" required></label>\n  <br>\n  <label>전화번호: <input type="tel" name="phone"></label>\n  <br>\n  <button type="submit">제출</button>\n</form>',
              feedback: {
                perfect: 'required를 완벽하게 적용했어요!',
                good: '필수 입력을 잘 설정했어요!',
                partial: '이름과 이메일 모두에 required를 넣었는지 확인하세요.',
                wrong: '이름과 이메일 input에 required를 추가하세요.'
              }
            },
            {
              id: 'c2',
              title: 'pattern으로 형식 검사',
              description: '전화번호 형식(010-0000-0000)을 pattern으로 검증하세요',
              difficulty: 'medium',
              hints: ["pattern 속성에 정규표현식을 넣어요", "[0-9]는 숫자, {3}은 3자리를 의미해요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 전화번호 형식 검증: 010-0000-0000 -->\n<input type="tel" name="phone" placeholder="010-0000-0000">\n',
              solution: '<label for="phone">전화번호:</label>\n<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="010-0000-0000" title="010-0000-0000 형식으로 입력하세요" required>',
              feedback: {
                perfect: 'pattern을 완벽하게 사용했어요!',
                good: '형식 검증을 잘 설정했어요!',
                partial: 'title 속성도 추가했는지 확인하세요.',
                wrong: 'pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"를 사용하세요.'
              }
            },
            {
              id: 'c3',
              title: '완전한 유효성 검사 폼',
              description: '다양한 유효성 검사가 적용된 회원가입 폼을 만드세요',
              difficulty: 'hard',
              hints: ["이름: required+minlength, 이메일: required+email", "비밀번호: required+minlength, 전화번호: pattern"],
              estimatedMinutes: 10,
              starterCode: '<!-- 유효성 검사가 적용된 회원가입 폼 -->\n',
              solution: '<form action="/register" method="POST">\n  <label for="name">이름 *:</label>\n  <input type="text" id="name" name="name" required minlength="2" placeholder="2자 이상">\n  <br>\n  <label for="email">이메일 *:</label>\n  <input type="email" id="email" name="email" required placeholder="example@email.com">\n  <br>\n  <label for="pw">비밀번호 *:</label>\n  <input type="password" id="pw" name="password" required minlength="8" placeholder="8자 이상">\n  <br>\n  <label for="phone">전화번호:</label>\n  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="010-0000-0000" title="010-0000-0000 형식">\n  <br>\n  <button type="submit">가입하기</button>\n</form>',
              feedback: {
                perfect: '유효성 검사를 완벽하게 적용했어요!',
                good: '다양한 검증을 잘 설정했어요!',
                partial: '모든 필드에 적절한 검증을 넣었는지 확인하세요.',
                wrong: 'required, minlength, pattern을 적절히 사용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '기본 정보 섹션',
              description: '이름, 이메일, 비밀번호 입력 필드를 만드세요',
              difficulty: 'easy',
              hints: ["fieldset과 legend로 그룹화하세요", "각 필드에 label을 연결하세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 기본 정보 섹션 -->\n<form>\n  <fieldset>\n    <legend>기본 정보</legend>\n    <!-- 이름(text), 이메일(email), 비밀번호(password) -->\n  </fieldset>\n</form>',
              solution: '<form>\n  <fieldset>\n    <legend>기본 정보</legend>\n    <label for="name">이름 *:</label>\n    <input type="text" id="name" name="name" required minlength="2">\n    <br>\n    <label for="email">이메일 *:</label>\n    <input type="email" id="email" name="email" required>\n    <br>\n    <label for="pw">비밀번호 *:</label>\n    <input type="password" id="pw" name="password" required minlength="8">\n  </fieldset>\n</form>',
              feedback: {
                perfect: '기본 정보 섹션이 완벽해요!',
                good: 'fieldset을 잘 사용했어요!',
                partial: '모든 필드를 필수로 설정했는지 확인하세요.',
                wrong: 'fieldset > legend + label+input 구조로 만드세요.'
              }
            },
            {
              id: 'c2',
              title: '추가 정보 섹션',
              description: '나이(number), 성별(radio), 관심분야(checkbox)를 추가하세요',
              difficulty: 'medium',
              hints: ["나이는 number, 성별은 radio, 관심분야는 checkbox", "fieldset으로 그룹화하세요"],
              estimatedMinutes: 7,
              starterCode: '<!-- 추가 정보 섹션 -->\n<fieldset>\n  <legend>추가 정보</legend>\n  <!-- 나이(number), 성별(radio), 관심분야(checkbox) -->\n</fieldset>',
              solution: '<fieldset>\n  <legend>추가 정보</legend>\n  <label for="age">나이:</label>\n  <input type="number" id="age" name="age" min="1" max="120">\n  <br>\n  <p>성별:</p>\n  <label><input type="radio" name="gender" value="male"> 남자</label>\n  <label><input type="radio" name="gender" value="female"> 여자</label>\n  <label><input type="radio" name="gender" value="other"> 기타</label>\n  <br>\n  <p>관심 분야:</p>\n  <label><input type="checkbox" name="interest" value="web"> 웹</label>\n  <label><input type="checkbox" name="interest" value="app"> 앱</label>\n  <label><input type="checkbox" name="interest" value="game"> 게임</label>\n</fieldset>',
              feedback: {
                perfect: '추가 정보 섹션이 완벽해요!',
                good: 'radio와 checkbox를 잘 구분했어요!',
                partial: 'fieldset으로 그룹화했는지 확인하세요.',
                wrong: 'number, radio, checkbox를 각각 만들고 fieldset으로 감싸세요.'
              }
            },
            {
              id: 'c3',
              title: '자기소개와 약관 동의',
              description: 'textarea(자기소개) + checkbox(약관동의) + submit',
              difficulty: 'medium',
              hints: ["textarea로 긴 글 입력", "체크박스로 약관 동의를 받으세요"],
              estimatedMinutes: 5,
              starterCode: '<!-- 자기소개 + 약관동의 + 가입 버튼 -->\n',
              solution: '<fieldset>\n  <legend>자기소개</legend>\n  <label for="intro">한 마디:</label>\n  <br>\n  <textarea id="intro" name="introduction" rows="4" cols="40" maxlength="300" placeholder="자기소개를 작성하세요 (최대 300자)"></textarea>\n</fieldset>\n<br>\n<label><input type="checkbox" name="agree" required> 이용약관에 동의합니다 *</label>\n<br><br>\n<button type="submit">가입하기</button>\n<button type="reset">초기화</button>',
              feedback: {
                perfect: '마무리 섹션이 완벽해요!',
                good: 'textarea와 동의 체크를 잘 만들었어요!',
                partial: '약관 동의 체크박스에 required를 넣었는지 확인하세요.',
                wrong: 'textarea + checkbox(required) + submit 버튼을 만드세요.'
              }
            },
            {
              id: 'c4',
              title: '완성! 회원가입 페이지',
              description: '모든 섹션을 하나의 완전한 회원가입 페이지로 합치세요',
              difficulty: 'hard',
              hints: ["완전한 HTML 문서(DOCTYPE~body)", "form 안에 모든 fieldset을 넣으세요"],
              estimatedMinutes: 12,
              starterCode: '<!-- 완전한 회원가입 페이지 -->\n',
              solution: '<!DOCTYPE html>\n<html lang="ko">\n<head>\n  <meta charset="UTF-8">\n  <title>회원가입</title>\n</head>\n<body>\n  <header>\n    <h1>회원가입</h1>\n    <p>코딩스쿨에 오신 것을 환영합니다!</p>\n  </header>\n  <main>\n    <form action="/register" method="POST">\n      <fieldset>\n        <legend>기본 정보</legend>\n        <label for="name">이름 *:</label>\n        <input type="text" id="name" name="name" required>\n        <br>\n        <label for="email">이메일 *:</label>\n        <input type="email" id="email" name="email" required>\n        <br>\n        <label for="pw">비밀번호 *:</label>\n        <input type="password" id="pw" name="password" required minlength="8">\n      </fieldset>\n      <fieldset>\n        <legend>추가 정보</legend>\n        <label for="age">나이:</label>\n        <input type="number" id="age" name="age" min="1" max="120">\n        <br>\n        <p>성별:</p>\n        <label><input type="radio" name="gender" value="male"> 남자</label>\n        <label><input type="radio" name="gender" value="female"> 여자</label>\n      </fieldset>\n      <br>\n      <label><input type="checkbox" required> 이용약관 동의 *</label>\n      <br><br>\n      <button type="submit">가입하기</button>\n      <button type="reset">초기화</button>\n    </form>\n  </main>\n  <footer>\n    <p>&copy; 2024 코딩스쿨</p>\n  </footer>\n</body>\n</html>',
              feedback: {
                perfect: '완전한 회원가입 페이지예요! 축하합니다!',
                good: '모든 폼 요소를 잘 조합했어요!',
                partial: '완전한 HTML 문서 구조인지 확인하세요.',
                wrong: 'DOCTYPE부터 시작하는 완전한 HTML에 form과 fieldset을 넣으세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '인라인 CSS 적용',
              description: 'style 속성으로 h1의 색상과 크기를 바꾸세요',
              difficulty: 'easy',
              hints: ["style=\"color: red; font-size: 32px\"", "세미콜론(;)으로 속성을 구분해요"],
              estimatedMinutes: 3,
              starterCode: '<!-- h1에 인라인 CSS 적용: 빨간색, 32px -->\n<h1>CSS는 멋져요!</h1>',
              solution: '<h1 style="color: red; font-size: 32px;">CSS는 멋져요!</h1>',
              feedback: {
                perfect: '인라인 CSS를 완벽하게 적용했어요!',
                good: 'style 속성을 잘 사용했어요!',
                partial: '세미콜론(;)으로 구분했는지 확인하세요.',
                wrong: 'style="color: red; font-size: 32px;"를 h1에 넣으세요.'
              }
            },
            {
              id: 'c2',
              title: '내부 CSS (style 태그)',
              description: 'head 안에 style 태그로 CSS를 작성하세요',
              difficulty: 'easy',
              hints: ["<style> 태그를 <head> 안에 넣어요", "선택자 { 속성: 값; } 형태"],
              estimatedMinutes: 4,
              starterCode: '<!DOCTYPE html>\n<html>\n<head>\n  <!-- 여기에 style 태그로 h1은 파란색, p는 회색 설정 -->\n</head>\n<body>\n  <h1>제목</h1>\n  <p>내용</p>\n</body>\n</html>',
              solution: '<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    h1 { color: blue; }\n    p { color: gray; }\n  </style>\n</head>\n<body>\n  <h1>제목</h1>\n  <p>내용</p>\n</body>\n</html>',
              feedback: {
                perfect: '내부 CSS를 완벽하게 작성했어요!',
                good: 'style 태그를 잘 사용했어요!',
                partial: 'h1과 p 모두에 스타일을 줬는지 확인하세요.',
                wrong: '<style> 안에 h1 { color: blue; } 형태로 작성하세요.'
              }
            },
            {
              id: 'c3',
              title: '배경색과 글자색 바꾸기',
              description: 'body에 배경색, h1에 글자색을 적용하세요',
              difficulty: 'medium',
              hints: ["background-color로 배경색을 설정해요", "color로 글자색을 설정해요"],
              estimatedMinutes: 5,
              starterCode: '<style>\n  /* body: 배경색 #f0f0f0 */\n  /* h1: 글자색 #2c3e50, 가운데 정렬 */\n  /* p: 글자색 #666, 줄간격 1.6 */\n</style>',
              solution: '<style>\n  body { background-color: #f0f0f0; }\n  h1 { color: #2c3e50; text-align: center; }\n  p { color: #666; line-height: 1.6; }\n</style>',
              feedback: {
                perfect: '색상과 정렬을 완벽하게 설정했어요!',
                good: 'CSS 속성을 잘 활용했어요!',
                partial: 'text-align: center를 추가했는지 확인하세요.',
                wrong: 'background-color, color, text-align, line-height를 사용하세요.'
              }
            },
            {
              id: 'c4',
              title: 'CSS로 카드 스타일링',
              description: 'div 카드에 테두리, 패딩, 둥근 모서리를 적용하세요',
              difficulty: 'medium',
              hints: ["border, padding, border-radius를 사용해요", "box-shadow로 그림자를 넣을 수도 있어요"],
              estimatedMinutes: 6,
              starterCode: '<style>\n  .card {\n    /* 테두리: 1px solid #ddd */\n    /* 패딩: 20px */\n    /* 둥근 모서리: 8px */\n    /* 그림자: 0 2px 4px rgba(0,0,0,0.1) */\n  }\n</style>\n<div class="card">\n  <h3>카드 제목</h3>\n  <p>카드 내용입니다.</p>\n</div>',
              solution: '<style>\n  .card {\n    border: 1px solid #ddd;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  }\n</style>\n<div class="card">\n  <h3>카드 제목</h3>\n  <p>카드 내용입니다.</p>\n</div>',
              feedback: {
                perfect: '카드 스타일이 완벽해요!',
                good: 'CSS 속성을 잘 적용했어요!',
                partial: 'box-shadow도 추가했는지 확인하세요.',
                wrong: 'border, padding, border-radius, box-shadow를 설정하세요.'
              }
            },
            {
              id: 'c5',
              title: '완전한 스타일 페이지',
              description: 'header, main, footer에 각각 다른 스타일을 적용하세요',
              difficulty: 'hard',
              hints: ["각 요소에 background-color, color, padding을 설정", "font-family로 글꼴도 바꿔보세요"],
              estimatedMinutes: 10,
              starterCode: '<!-- 스타일 태그로 header/main/footer 꾸미기 -->\n<style>\n  /* body, header, main, footer 각각 스타일 적용 */\n</style>\n<header><h1>My Site</h1></header>\n<main><p>내용</p></main>\n<footer><p>2024</p></footer>',
              solution: '<style>\n  body { font-family: Arial, sans-serif; margin: 0; }\n  header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }\n  main { padding: 30px; max-width: 800px; margin: 0 auto; }\n  footer { background-color: #34495e; color: #bdc3c7; padding: 15px; text-align: center; }\n</style>\n<header><h1>My Site</h1></header>\n<main><p>내용</p></main>\n<footer><p>2024</p></footer>',
              feedback: {
                perfect: '스타일 페이지가 완벽해요!',
                good: '각 영역을 잘 꾸몄어요!',
                partial: '모든 영역에 스타일을 적용했는지 확인하세요.',
                wrong: 'header, main, footer 각각에 background-color와 padding을 적용하세요.'
              }
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
          challenges: [
            {
              id: 'c1',
              title: '태그 선택자 기본',
              description: 'h1, h2, p 각각에 다른 색상을 적용하세요',
              difficulty: 'easy',
              hints: ["태그이름 { 속성: 값; } 형태예요", "h1 { color: red; }"],
              estimatedMinutes: 3,
              starterCode: '<style>\n  /* h1: 파란색 */\n  /* h2: 초록색 */\n  /* p: 회색 */\n</style>',
              solution: '<style>\n  h1 { color: blue; }\n  h2 { color: green; }\n  p { color: gray; }\n</style>',
              feedback: {
                perfect: '태그 선택자를 완벽하게 사용했어요!',
                good: '각 태그에 색상을 잘 적용했어요!',
                partial: '3개 태그 모두에 color를 줬는지 확인하세요.',
                wrong: 'h1 { color: blue; } 형태로 작성하세요.'
              }
            },
            {
              id: 'c2',
              title: 'class 선택자',
              description: '.highlight 클래스에 노란 배경을 적용하세요',
              difficulty: 'easy',
              hints: ["클래스 선택자는 .클래스이름 형태예요", ".highlight { background-color: yellow; }"],
              estimatedMinutes: 3,
              starterCode: '<style>\n  /* .highlight: 노란 배경, 패딩 2px 5px */\n  /* .important: 빨간 글자, 굵게 */\n</style>\n<p>이것은 <span class="highlight">중요한</span> 내용입니다.</p>\n<p class="important">매우 중요!</p>',
              solution: '<style>\n  .highlight { background-color: yellow; padding: 2px 5px; }\n  .important { color: red; font-weight: bold; }\n</style>\n<p>이것은 <span class="highlight">중요한</span> 내용입니다.</p>\n<p class="important">매우 중요!</p>',
              feedback: {
                perfect: 'class 선택자를 완벽하게 사용했어요!',
                good: 'class 스타일을 잘 적용했어요!',
                partial: '두 클래스 모두에 스타일을 줬는지 확인하세요.',
                wrong: '.클래스이름 { 속성: 값; } 형태로 작성하세요.'
              }
            },
            {
              id: 'c3',
              title: 'id 선택자',
              description: '#main-title에 특별한 스타일을 적용하세요',
              difficulty: 'medium',
              hints: ["id 선택자는 #id이름 형태예요", "id는 페이지에서 하나만 사용해요"],
              estimatedMinutes: 4,
              starterCode: '<style>\n  /* #main-title: 32px, 파란색, 밑줄 */\n  /* #subtitle: 20px, 회색 */\n</style>\n<h1 id="main-title">메인 제목</h1>\n<h2 id="subtitle">부제목</h2>',
              solution: '<style>\n  #main-title { font-size: 32px; color: blue; text-decoration: underline; }\n  #subtitle { font-size: 20px; color: gray; }\n</style>\n<h1 id="main-title">메인 제목</h1>\n<h2 id="subtitle">부제목</h2>',
              feedback: {
                perfect: 'id 선택자를 완벽하게 사용했어요!',
                good: 'id 스타일을 잘 적용했어요!',
                partial: 'text-decoration을 추가했는지 확인하세요.',
                wrong: '#id이름 { 속성: 값; } 형태로 작성하세요.'
              }
            },
            {
              id: 'c4',
              title: '선택자 조합하기',
              description: '태그, class, id 선택자를 조합해서 페이지를 꾸미세요',
              difficulty: 'hard',
              hints: ["태그 선택자: body, h1 등", "class: .card, .btn 등, id: #header 등"],
              estimatedMinutes: 8,
              starterCode: '<style>\n  /* body: 글꼴 Arial, 배경 #f5f5f5 */\n  /* #header: 배경 #333, 글자 white, 패딩 20px */\n  /* .card: 배경 white, 테두리 1px solid #ddd, 패딩 15px, 둥근모서리 8px */\n  /* .btn: 배경 #3498db, 글자 white, 패딩 10px 20px, 테두리 없음 */\n</style>\n<div id="header"><h1>사이트</h1></div>\n<div class="card"><h3>카드</h3><p>내용</p><button class="btn">버튼</button></div>',
              solution: '<style>\n  body { font-family: Arial, sans-serif; background-color: #f5f5f5; }\n  #header { background-color: #333; color: white; padding: 20px; }\n  .card { background-color: white; border: 1px solid #ddd; padding: 15px; border-radius: 8px; }\n  .btn { background-color: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }\n</style>\n<div id="header"><h1>사이트</h1></div>\n<div class="card"><h3>카드</h3><p>내용</p><button class="btn">버튼</button></div>',
              feedback: {
                perfect: '선택자 조합이 완벽해요!',
                good: '다양한 선택자를 잘 활용했어요!',
                partial: '모든 선택자에 스타일을 적용했는지 확인하세요.',
                wrong: '태그, .class, #id 선택자를 모두 사용하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m3',
          title: '클래스 선택자',
          description: '.클래스이름으로 여러 요소에 같은 스타일을 적용해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 20,
          concept: 'CSS 클래스 선택자',
          conceptExplanation: '.클래스명 { 스타일 } - 같은 클래스를 가진 모든 요소에 스타일이 적용돼요! 하나의 요소에 여러 클래스도 가능!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['클래스 선택자를 사용할 수 있다', '같은 클래스로 여러 요소를 스타일링할 수 있다'],
          hints: ['💡 .클래스이름 { color: red; }', '💡 HTML: class="이름"으로 적용'],
          commonMistakes: ['.을 빼먹는 실수', 'class를 id로 혼동'],
          challenges: [
            {
              id: 'c1',
              title: '기본 클래스 선택자',
              description: '.highlight 클래스에 노란색 배경을 적용하세요.',
              difficulty: 'easy',
              hints: ['.highlight로 선택', 'background-color: yellow'],
              estimatedMinutes: 3,
              starterCode: '<p class="highlight">중요한 내용</p>\n<p>일반 내용</p>\n<p class="highlight">또 다른 중요한 내용</p>\n\n<style>\n/* .highlight에 노란색 배경 적용 */\n\n</style>',
              solution: '<p class="highlight">중요한 내용</p>\n<p>일반 내용</p>\n<p class="highlight">또 다른 중요한 내용</p>\n\n<style>\n.highlight {\n  background-color: yellow;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '.highlight 스타일 적용', description: '두 요소에 적용' }],
              feedback: { perfect: '클래스 선택자 완벽! 같은 클래스를 가진 모든 요소에 적용돼요! ✨', good: '잘 했어요! .을 빼먹지 않았죠?', partial: '선택자 앞에 .을 붙이세요.', wrong: '.highlight { background-color: yellow; }' }
            },
            {
              id: 'c2',
              title: '다중 클래스',
              description: '.btn 클래스에 기본 버튼 스타일, .btn-primary에 파란색, .btn-danger에 빨간색을 적용하세요.',
              difficulty: 'easy',
              hints: ['하나의 요소에 클래스 여러 개: class="btn btn-primary"', '각 클래스별로 스타일 작성'],
              estimatedMinutes: 5,
              starterCode: '<button class="btn btn-primary">확인</button>\n<button class="btn btn-danger">삭제</button>\n<button class="btn">기본</button>\n\n<style>\n/* .btn: 패딩, 둥근 모서리, 흰색 글자 */\n/* .btn-primary: 파란색 배경 */\n/* .btn-danger: 빨간색 배경 */\n\n</style>',
              solution: '<button class="btn btn-primary">확인</button>\n<button class="btn btn-danger">삭제</button>\n<button class="btn">기본</button>\n\n<style>\n.btn {\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  color: white;\n  cursor: pointer;\n}\n.btn-primary {\n  background-color: #3498db;\n}\n.btn-danger {\n  background-color: #e74c3c;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '다중 클래스 적용', description: 'btn + btn-primary' }],
              feedback: { perfect: '다중 클래스 완벽! 기본 스타일 + 변형 스타일 패턴은 실무에서 매우 많이 쓰여요! 🎨', good: '잘 했어요! .btn에 공통 스타일을 넣는 것이 핵심이에요.', partial: '공통 스타일은 .btn에, 색상은 각각에 넣으세요.', wrong: '.btn에 padding, border-radius를, .btn-primary에 background-color를 적용하세요.' }
            },
            {
              id: 'c3',
              title: '카드 스타일',
              description: '.card 클래스에 그림자, 둥근 모서리, 패딩을 적용하세요.',
              difficulty: 'medium',
              hints: ['box-shadow: 0 2px 4px rgba(0,0,0,0.1)', 'border-radius, padding도 추가'],
              estimatedMinutes: 5,
              starterCode: '<div class="card">\n  <h3>제목</h3>\n  <p>내용입니다.</p>\n</div>\n\n<style>\n/* .card: 그림자, 둥근 모서리, 패딩, 흰색 배경 */\n\n</style>',
              solution: '<div class="card">\n  <h3>제목</h3>\n  <p>내용입니다.</p>\n</div>\n\n<style>\n.card {\n  background: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '.card 스타일 적용', description: '카드 스타일' }],
              feedback: { perfect: '카드 컴포넌트 완벽! 현대 웹 디자인의 기본 요소예요! 🃏', good: '좋아요! box-shadow로 입체감을 더하세요.', partial: 'border-radius와 box-shadow를 추가하세요.', wrong: '.card { padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }' }
            },
            {
              id: 'c4',
              title: '상태 클래스',
              description: '.active, .disabled, .hidden 클래스를 만들어 각각 활성, 비활성, 숨김 상태를 표현하세요.',
              difficulty: 'medium',
              hints: ['opacity로 비활성 표현', 'display: none으로 숨기기'],
              estimatedMinutes: 5,
              starterCode: '<button class="btn active">활성 버튼</button>\n<button class="btn disabled">비활성 버튼</button>\n<button class="btn hidden">숨긴 버튼</button>\n\n<style>\n.btn { padding: 8px 16px; border: 1px solid #ccc; }\n/* .active: 파란색 배경, 흰색 글자 */\n/* .disabled: 회색, 반투명, 클릭 불가 */\n/* .hidden: 숨기기 */\n\n</style>',
              solution: '<button class="btn active">활성 버튼</button>\n<button class="btn disabled">비활성 버튼</button>\n<button class="btn hidden">숨긴 버튼</button>\n\n<style>\n.btn { padding: 8px 16px; border: 1px solid #ccc; }\n.active {\n  background-color: #3498db;\n  color: white;\n  border-color: #3498db;\n}\n.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.hidden {\n  display: none;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '상태 클래스 적용', description: '3가지 상태' }],
              feedback: { perfect: '상태 클래스 완벽! active/disabled/hidden은 실무 필수 패턴이에요! 🎯', good: '잘 했어요! pointer-events: none으로 클릭도 막아보세요.', partial: 'opacity로 비활성, display: none으로 숨기기를 해보세요.', wrong: '.active { background: blue; color: white; } .disabled { opacity: 0.5; } .hidden { display: none; }' }
            },
            {
              id: 'c5',
              title: '메시지 박스',
              description: '.message 기본 스타일과 .success(초록), .warning(노랑), .error(빨강) 변형을 만드세요.',
              difficulty: 'hard',
              hints: ['공통 스타일은 .message에', '색상만 변형 클래스에서 변경'],
              estimatedMinutes: 7,
              starterCode: '<div class="message success">성공했습니다!</div>\n<div class="message warning">주의하세요!</div>\n<div class="message error">오류가 발생했습니다!</div>\n\n<style>\n/* .message: 공통 스타일 (패딩, 둥근 모서리, 마진) */\n/* .success: 초록색 배경 + 테두리 */\n/* .warning: 노란색 배경 + 테두리 */\n/* .error: 빨간색 배경 + 테두리 */\n\n</style>',
              solution: '<div class="message success">성공했습니다!</div>\n<div class="message warning">주의하세요!</div>\n<div class="message error">오류가 발생했습니다!</div>\n\n<style>\n.message {\n  padding: 12px 16px;\n  border-radius: 4px;\n  margin: 8px 0;\n  border-left: 4px solid;\n}\n.success {\n  background-color: #d4edda;\n  border-color: #28a745;\n  color: #155724;\n}\n.warning {\n  background-color: #fff3cd;\n  border-color: #ffc107;\n  color: #856404;\n}\n.error {\n  background-color: #f8d7da;\n  border-color: #dc3545;\n  color: #721c24;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '메시지 박스 스타일', description: '3종 메시지' }],
              feedback: { perfect: '메시지 박스 시스템 완벽! 배경+테두리+텍스트 색상 조화가 프로급이에요! 💬', good: '색상 구분이 잘 돼요! border-left로 포인트를 주면 더 좋아요.', partial: '공통 스타일을 .message에 모아보세요.', wrong: '.message에 공통 패딩/마진을, 각 변형에 색상을 적용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m4',
          title: 'ID 선택자',
          description: '#아이디로 특정 하나의 요소를 선택해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 18,
          concept: 'CSS ID 선택자',
          conceptExplanation: '#아이디명 { 스타일 } - 페이지에서 딱 하나만 있는 요소에 사용! 클래스보다 우선순위가 높아요.',
          cstaStandard: '2-AP-17',
          learningObjectives: ['ID 선택자를 사용할 수 있다', 'ID와 클래스의 차이를 이해할 수 있다'],
          hints: ['💡 #아이디명 { } - #을 붙여요', '💡 ID는 페이지에서 유일해야 해요'],
          commonMistakes: ['같은 ID를 여러 요소에 사용', '#을 빼먹는 실수'],
          challenges: [
            {
              id: 'c1',
              title: '헤더 스타일링',
              description: '#header에 배경색과 패딩을 적용하세요.',
              difficulty: 'easy',
              hints: ['#header로 선택', 'background-color와 padding'],
              estimatedMinutes: 3,
              starterCode: '<div id="header">\n  <h1>내 웹사이트</h1>\n</div>\n\n<style>\n/* #header 스타일 */\n\n</style>',
              solution: '<div id="header">\n  <h1>내 웹사이트</h1>\n</div>\n\n<style>\n#header {\n  background-color: #2c3e50;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '#header 스타일 적용', description: '헤더 스타일' }],
              feedback: { perfect: 'ID 선택자 완벽! #을 잘 사용했어요! 🎯', good: '잘 했어요! ID는 페이지에 하나만 쓰세요.', partial: '#을 선택자 앞에 붙이세요.', wrong: '#header { background-color: ...; padding: ...; }' }
            },
            {
              id: 'c2',
              title: 'ID vs 클래스 차이',
              description: '#main-title에 빨간색, .subtitle에 파란색을 적용하세요.',
              difficulty: 'easy',
              hints: ['#은 ID, .은 클래스', '각각 다른 스타일 적용'],
              estimatedMinutes: 4,
              starterCode: '<h1 id="main-title">메인 제목</h1>\n<h2 class="subtitle">부제목 1</h2>\n<h2 class="subtitle">부제목 2</h2>\n\n<style>\n/* #main-title: 빨간색 */\n/* .subtitle: 파란색 */\n\n</style>',
              solution: '<h1 id="main-title">메인 제목</h1>\n<h2 class="subtitle">부제목 1</h2>\n<h2 class="subtitle">부제목 2</h2>\n\n<style>\n#main-title {\n  color: red;\n}\n.subtitle {\n  color: blue;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: 'ID와 클래스 구분', description: '#과 . 차이' }],
              feedback: { perfect: 'ID(#)와 클래스(.) 구분 완벽! 🎨', good: '잘 했어요! ID는 1개, 클래스는 여러 개에 적용된다는 차이를 기억하세요.', partial: '#과 .을 정확히 구분하세요.', wrong: 'ID는 #, 클래스는 .으로 선택합니다.' }
            },
            {
              id: 'c3',
              title: '네비게이션 스타일',
              description: '#navbar에 가로 배치, 배경색, 링크 스타일을 적용하세요.',
              difficulty: 'medium',
              hints: ['display: flex로 가로 배치', '#navbar a로 자식 링크 선택'],
              estimatedMinutes: 5,
              starterCode: '<nav id="navbar">\n  <a href="#">홈</a>\n  <a href="#">소개</a>\n  <a href="#">연락처</a>\n</nav>\n\n<style>\n/* #navbar: 배경, 패딩, 가로 배치 */\n/* #navbar a: 링크 스타일 */\n\n</style>',
              solution: '<nav id="navbar">\n  <a href="#">홈</a>\n  <a href="#">소개</a>\n  <a href="#">연락처</a>\n</nav>\n\n<style>\n#navbar {\n  background-color: #333;\n  padding: 10px 20px;\n  display: flex;\n  gap: 20px;\n}\n#navbar a {\n  color: white;\n  text-decoration: none;\n}\n#navbar a:hover {\n  color: #3498db;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '네비게이션 스타일', description: '네비 완성' }],
              feedback: { perfect: '네비게이션 완벽! ID + 자손 선택자 조합이 훌륭해요! 🧭', good: '잘 돼요! hover 효과도 추가하면 더 좋아요.', partial: 'display: flex로 가로 배치를 해보세요.', wrong: '#navbar { display: flex; background: #333; } #navbar a { color: white; }' }
            },
            {
              id: 'c4',
              title: '푸터 디자인',
              description: '#footer에 하단 고정 스타일을 적용하세요.',
              difficulty: 'medium',
              hints: ['text-align: center로 가운데 정렬', '배경색과 패딩 추가'],
              estimatedMinutes: 5,
              starterCode: '<footer id="footer">\n  <p>2024 내 웹사이트. All rights reserved.</p>\n</footer>\n\n<style>\n/* #footer 스타일 */\n\n</style>',
              solution: '<footer id="footer">\n  <p>2024 내 웹사이트. All rights reserved.</p>\n</footer>\n\n<style>\n#footer {\n  background-color: #2c3e50;\n  color: #bdc3c7;\n  text-align: center;\n  padding: 20px;\n  margin-top: 40px;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '#footer 스타일', description: '푸터 완성' }],
              feedback: { perfect: '푸터 디자인 완벽! 깔끔하고 읽기 좋아요! 🦶', good: '잘 했어요! 텍스트 색상을 약간 연하게 하면 세련돼요.', partial: 'text-align: center로 가운데 정렬하세요.', wrong: '#footer { background: #2c3e50; color: white; text-align: center; padding: 20px; }' }
            },
            {
              id: 'c5',
              title: '선택자 우선순위 퀴즈',
              description: '같은 요소에 태그, 클래스, ID 선택자가 모두 적용될 때, 어떤 색이 나올까요? 코드를 작성하고 확인하세요.',
              difficulty: 'hard',
              hints: ['우선순위: ID > 클래스 > 태그', '같은 우선순위면 나중에 쓴 것이 적용'],
              estimatedMinutes: 7,
              starterCode: '<p id="special" class="colored">이 텍스트는 무슨 색?</p>\n\n<style>\np { color: green; }    /* 태그 선택자 */\n.colored { color: blue; }  /* 클래스 선택자 */\n#special { color: red; }   /* ID 선택자 */\n\n/* 질문: 이 텍스트는 무슨 색일까요? */\n/* 답을 주석으로 쓰세요: */\n/* 답: */\n</style>',
              solution: '<p id="special" class="colored">이 텍스트는 무슨 색?</p>\n\n<style>\np { color: green; }\n.colored { color: blue; }\n#special { color: red; }\n\n/* 답: red (빨간색) */\n/* 이유: ID 선택자(#)가 클래스(.)보다, 클래스가 태그보다 우선순위가 높습니다 */\n/* 우선순위: ID(100) > 클래스(10) > 태그(1) */\n</style>',
              testCases: [{ input: '', expectedOutput: 'red', description: 'ID가 가장 우선' }],
              feedback: { perfect: '우선순위 이해 완벽! ID > 클래스 > 태그 순서를 정확히 알고 있어요! 🏆', good: '정답! 우선순위 숫자도 기억해두면 좋아요.', partial: 'ID(#)가 가장 높은 우선순위를 가져요.', wrong: '우선순위: ID(#) > 클래스(.) > 태그. 답은 red!' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m5',
          title: 'CSS 색상',
          description: '다양한 방법으로 색상을 지정해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 20,
          concept: 'CSS 색상 지정',
          conceptExplanation: 'CSS에서 색상은 이름(red), 헥스(#ff0000), RGB(rgb(255,0,0))로 지정할 수 있어요!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['색상 이름, 헥스코드, RGB로 색상을 지정할 수 있다', 'opacity와 rgba를 활용할 수 있다'],
          hints: ['💡 색상 이름: red, blue, green', '💡 헥스: #ff0000', '💡 RGB: rgb(255, 0, 0)'],
          commonMistakes: ['#을 빼먹는 실수', 'rgb에서 쉼표 빼먹기'],
          challenges: [
            {
              id: 'c1',
              title: '색상 이름 사용',
              description: '제목을 navy, 본문을 gray 색상으로 만드세요.',
              difficulty: 'easy',
              hints: ['color: navy', 'color: gray'],
              estimatedMinutes: 2,
              starterCode: '<h1>제목</h1>\n<p>본문 텍스트입니다.</p>\n\n<style>\n/* h1: navy 색상 */\n/* p: gray 색상 */\n\n</style>',
              solution: '<h1>제목</h1>\n<p>본문 텍스트입니다.</p>\n\n<style>\nh1 { color: navy; }\np { color: gray; }\n</style>',
              testCases: [{ input: '', expectedOutput: '색상 이름 적용', description: 'navy와 gray' }],
              feedback: { perfect: '색상 이름 사용 완벽! 가장 쉬운 방법이에요! 🎨', good: '잘 했어요! CSS에는 140개 이상의 색상 이름이 있어요.', partial: 'color 속성을 사용하세요.', wrong: 'h1 { color: navy; } p { color: gray; }' }
            },
            {
              id: 'c2',
              title: '헥스 코드(HEX)',
              description: '#3498db(파랑), #2ecc71(초록), #e74c3c(빨강)을 각 요소에 적용하세요.',
              difficulty: 'easy',
              hints: ['#뒤에 6자리 16진수', '# 필수!'],
              estimatedMinutes: 3,
              starterCode: '<h2 class="blue">파란 제목</h2>\n<h2 class="green">초록 제목</h2>\n<h2 class="red">빨간 제목</h2>\n\n<style>\n/* 헥스 코드로 색상 적용 */\n\n</style>',
              solution: '<h2 class="blue">파란 제목</h2>\n<h2 class="green">초록 제목</h2>\n<h2 class="red">빨간 제목</h2>\n\n<style>\n.blue { color: #3498db; }\n.green { color: #2ecc71; }\n.red { color: #e74c3c; }\n</style>',
              testCases: [{ input: '', expectedOutput: 'HEX 색상 적용', description: '3가지 HEX 색상' }],
              feedback: { perfect: '헥스 코드 완벽! 웹에서 가장 많이 쓰이는 색상 표현법이에요! 🔢', good: '잘 했어요! #을 꼭 붙이세요.', partial: '#을 붙여야 헥스 코드로 인식돼요.', wrong: '.blue { color: #3498db; } 형태로 작성하세요.' }
            },
            {
              id: 'c3',
              title: 'RGB 색상',
              description: 'rgb() 함수로 배경색을 지정하세요. 빨강=rgb(231,76,60), 배경=rgb(236,240,241).',
              difficulty: 'easy',
              hints: ['rgb(빨강, 초록, 파랑)', '각 값은 0~255'],
              estimatedMinutes: 4,
              starterCode: '<div class="container">\n  <h2>RGB 색상</h2>\n  <p class="accent">강조 텍스트</p>\n</div>\n\n<style>\n/* .container: rgb로 배경색 */\n/* .accent: rgb로 텍스트 색상 */\n\n</style>',
              solution: '<div class="container">\n  <h2>RGB 색상</h2>\n  <p class="accent">강조 텍스트</p>\n</div>\n\n<style>\n.container {\n  background-color: rgb(236, 240, 241);\n  padding: 20px;\n}\n.accent {\n  color: rgb(231, 76, 60);\n  font-weight: bold;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: 'RGB 색상 적용', description: 'rgb() 사용' }],
              feedback: { perfect: 'RGB 색상 완벽! 세밀한 색상 조절이 가능해요! 🌈', good: '잘 했어요! RGB는 빛의 삼원색(빨-초-파)이에요.', partial: 'rgb(숫자, 숫자, 숫자) 형식을 사용하세요.', wrong: 'background-color: rgb(236, 240, 241); 형태입니다.' }
            },
            {
              id: 'c4',
              title: '투명도 (rgba)',
              description: 'rgba로 반투명 오버레이를 만드세요. 검정 배경 50% 투명도.',
              difficulty: 'medium',
              hints: ['rgba(0, 0, 0, 0.5) = 50% 투명 검정', '네 번째 값이 투명도 (0~1)'],
              estimatedMinutes: 5,
              starterCode: '<div class="image-container">\n  <div class="overlay">\n    <h2>텍스트 오버레이</h2>\n  </div>\n</div>\n\n<style>\n.image-container {\n  width: 300px;\n  height: 200px;\n  background-color: #3498db;\n  position: relative;\n}\n.overlay {\n  /* TODO: rgba로 반투명 검정 배경 */\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.overlay h2 { color: white; }\n</style>',
              solution: '<div class="image-container">\n  <div class="overlay">\n    <h2>텍스트 오버레이</h2>\n  </div>\n</div>\n\n<style>\n.image-container {\n  width: 300px;\n  height: 200px;\n  background-color: #3498db;\n  position: relative;\n}\n.overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 0; left: 0; right: 0; bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.overlay h2 { color: white; }\n</style>',
              testCases: [{ input: '', expectedOutput: 'rgba 오버레이', description: '반투명 오버레이' }],
              feedback: { perfect: 'rgba 오버레이 완벽! 이미지 위 텍스트에 자주 쓰이는 기법이에요! ✨', good: '잘 했어요! 0.5는 50% 투명도예요.', partial: 'rgba의 4번째 값이 투명도(0~1)예요.', wrong: 'background-color: rgba(0, 0, 0, 0.5);' }
            },
            {
              id: 'c5',
              title: '색상 팔레트 만들기',
              description: '5가지 색상 박스로 나만의 색상 팔레트를 만드세요. HEX, RGB를 섞어서 사용하세요.',
              difficulty: 'hard',
              hints: ['각 박스에 다른 배경색', 'flex로 가로 배치'],
              estimatedMinutes: 8,
              starterCode: '<div class="palette">\n  <div class="swatch s1">1</div>\n  <div class="swatch s2">2</div>\n  <div class="swatch s3">3</div>\n  <div class="swatch s4">4</div>\n  <div class="swatch s5">5</div>\n</div>\n\n<style>\n.palette {\n  display: flex;\n}\n.swatch {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n/* 각 .s1~.s5에 다른 배경색 적용 */\n\n</style>',
              solution: '<div class="palette">\n  <div class="swatch s1">1</div>\n  <div class="swatch s2">2</div>\n  <div class="swatch s3">3</div>\n  <div class="swatch s4">4</div>\n  <div class="swatch s5">5</div>\n</div>\n\n<style>\n.palette {\n  display: flex;\n}\n.swatch {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n}\n.s1 { background-color: #2c3e50; }\n.s2 { background-color: #e74c3c; }\n.s3 { background-color: rgb(46, 204, 113); }\n.s4 { background-color: #3498db; }\n.s5 { background-color: rgb(155, 89, 182); }\n</style>',
              testCases: [{ input: '', expectedOutput: '색상 팔레트', description: '5가지 색상' }],
              feedback: { perfect: '색상 팔레트 완벽! HEX와 RGB를 자유자재로 사용해요! 🎨🌈', good: '예쁜 팔레트예요! 다양한 색상 표현법을 섞어 써보세요.', partial: '각 .s1~.s5에 background-color를 지정하세요.', wrong: '.s1 { background-color: #2c3e50; } 식으로 각각 색상을 지정하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m6',
          title: '폰트 스타일링',
          description: '글꼴, 크기, 굵기를 자유롭게 바꿔요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 20,
          concept: 'CSS 폰트 속성',
          conceptExplanation: 'font-family(글꼴), font-size(크기), font-weight(굵기)로 글자 모양을 바꿔요!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['font-family, font-size, font-weight를 활용할 수 있다'],
          hints: ['💡 font-family: Arial, sans-serif', '💡 font-size: 16px', '💡 font-weight: bold'],
          commonMistakes: ['폰트 이름에 공백이 있으면 따옴표 필요', 'font-family에 대체 폰트 지정 잊기'],
          challenges: [
            {
              id: 'c1',
              title: '글꼴 변경',
              description: '제목에 Georgia, 본문에 Arial 글꼴을 적용하세요.',
              difficulty: 'easy',
              hints: ['font-family: Georgia, serif', 'font-family: Arial, sans-serif'],
              estimatedMinutes: 3,
              starterCode: '<h1>제목</h1>\n<p>본문 텍스트입니다. 여러 줄의 텍스트를 넣어보세요.</p>\n\n<style>\n/* h1에 Georgia, p에 Arial 적용 */\n\n</style>',
              solution: '<h1>제목</h1>\n<p>본문 텍스트입니다. 여러 줄의 텍스트를 넣어보세요.</p>\n\n<style>\nh1 {\n  font-family: Georgia, serif;\n}\np {\n  font-family: Arial, sans-serif;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '글꼴 변경', description: '두 글꼴 적용' }],
              feedback: { perfect: '글꼴 변경 완벽! 대체 글꼴(serif, sans-serif)도 잘 지정했어요! 🔤', good: '잘 했어요! 대체 글꼴도 추가하면 안전해요.', partial: 'font-family 속성을 사용하세요.', wrong: 'font-family: Georgia, serif; 형태로 작성하세요.' }
            },
            {
              id: 'c2',
              title: '글자 크기 체계',
              description: 'h1=32px, h2=24px, h3=18px, p=16px, small=12px로 크기 체계를 만드세요.',
              difficulty: 'easy',
              hints: ['font-size: 32px 형태', '각 태그별로 설정'],
              estimatedMinutes: 4,
              starterCode: '<h1>대제목</h1>\n<h2>중제목</h2>\n<h3>소제목</h3>\n<p>본문</p>\n<p><small>작은 글씨</small></p>\n\n<style>\n/* 크기 체계 설정 */\n\n</style>',
              solution: '<h1>대제목</h1>\n<h2>중제목</h2>\n<h3>소제목</h3>\n<p>본문</p>\n<p><small>작은 글씨</small></p>\n\n<style>\nh1 { font-size: 32px; }\nh2 { font-size: 24px; }\nh3 { font-size: 18px; }\np { font-size: 16px; }\nsmall { font-size: 12px; }\n</style>',
              testCases: [{ input: '', expectedOutput: '크기 체계', description: '5단계 크기' }],
              feedback: { perfect: '타이포그래피 체계 완벽! 일관된 크기 체계가 디자인의 기본이에요! 📐', good: '잘 했어요! 크기 간 비율이 중요해요.', partial: 'font-size 속성을 사용하세요.', wrong: 'font-size: 32px; 형태로 각 태그에 적용하세요.' }
            },
            {
              id: 'c3',
              title: '굵기와 기울임',
              description: 'font-weight와 font-style로 다양한 텍스트 스타일을 만드세요.',
              difficulty: 'medium',
              hints: ['font-weight: bold 또는 700', 'font-style: italic'],
              estimatedMinutes: 5,
              starterCode: '<p class="bold">굵은 텍스트</p>\n<p class="italic">기울인 텍스트</p>\n<p class="light">가벼운 텍스트</p>\n<p class="bold-italic">굵고 기울인 텍스트</p>\n\n<style>\n/* 각 클래스에 적절한 font-weight, font-style 적용 */\n\n</style>',
              solution: '<p class="bold">굵은 텍스트</p>\n<p class="italic">기울인 텍스트</p>\n<p class="light">가벼운 텍스트</p>\n<p class="bold-italic">굵고 기울인 텍스트</p>\n\n<style>\n.bold { font-weight: bold; }\n.italic { font-style: italic; }\n.light { font-weight: 300; }\n.bold-italic {\n  font-weight: bold;\n  font-style: italic;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '굵기와 기울임', description: '4가지 스타일' }],
              feedback: { perfect: '텍스트 스타일 완벽! font-weight와 font-style 조합을 잘 활용했어요! ✍️', good: '잘 했어요! font-weight는 숫자(100-900)로도 지정 가능해요.', partial: 'font-weight: bold와 font-style: italic을 사용하세요.', wrong: '.bold { font-weight: bold; } .italic { font-style: italic; }' }
            },
            {
              id: 'c4',
              title: '줄 간격과 자간',
              description: 'line-height(줄 간격)와 letter-spacing(자간)을 조절하세요.',
              difficulty: 'medium',
              hints: ['line-height: 1.6 (배수)', 'letter-spacing: 2px'],
              estimatedMinutes: 5,
              starterCode: '<p class="normal">기본 줄 간격의 텍스트입니다. 여러 줄로 쓰면 차이를 볼 수 있어요. 긴 텍스트를 넣어보세요.</p>\n<p class="spacious">넓은 줄 간격의 텍스트입니다. 여러 줄로 쓰면 차이를 볼 수 있어요. 긴 텍스트를 넣어보세요.</p>\n<h2 class="wide-letters">자간이 넓은 제목</h2>\n\n<style>\n/* .normal: 기본 줄 간격 */\n/* .spacious: 넓은 줄 간격 (1.8) */\n/* .wide-letters: 넓은 자간 (3px) */\n\n</style>',
              solution: '<p class="normal">기본 줄 간격의 텍스트입니다. 여러 줄로 쓰면 차이를 볼 수 있어요. 긴 텍스트를 넣어보세요.</p>\n<p class="spacious">넓은 줄 간격의 텍스트입니다. 여러 줄로 쓰면 차이를 볼 수 있어요. 긴 텍스트를 넣어보세요.</p>\n<h2 class="wide-letters">자간이 넓은 제목</h2>\n\n<style>\n.normal { line-height: 1.4; }\n.spacious { line-height: 1.8; }\n.wide-letters { letter-spacing: 3px; }\n</style>',
              testCases: [{ input: '', expectedOutput: '줄 간격과 자간', description: 'line-height, letter-spacing' }],
              feedback: { perfect: '줄 간격/자간 조절 완벽! 읽기 편한 텍스트의 비밀이에요! 📖', good: '잘 했어요! line-height 1.6~1.8이 가장 읽기 편해요.', partial: 'line-height와 letter-spacing 속성을 사용하세요.', wrong: '.spacious { line-height: 1.8; } .wide-letters { letter-spacing: 3px; }' }
            },
            {
              id: 'c5',
              title: '블로그 타이포그래피',
              description: '블로그 글처럼 제목, 날짜, 본문의 폰트를 종합적으로 스타일링하세요.',
              difficulty: 'hard',
              hints: ['font 단축 속성: font: bold 16px/1.6 Arial', '다양한 속성을 조합하세요'],
              estimatedMinutes: 8,
              starterCode: '<article class="blog-post">\n  <h1 class="title">블로그 제목</h1>\n  <p class="date">2024년 1월 1일</p>\n  <p class="content">블로그 본문입니다. 여러 줄의 텍스트가 있어요.</p>\n  <p class="tag">태그: CSS, 디자인</p>\n</article>\n\n<style>\n/* 블로그 포스트 전체 타이포그래피 */\n\n</style>',
              solution: '<article class="blog-post">\n  <h1 class="title">블로그 제목</h1>\n  <p class="date">2024년 1월 1일</p>\n  <p class="content">블로그 본문입니다. 여러 줄의 텍스트가 있어요.</p>\n  <p class="tag">태그: CSS, 디자인</p>\n</article>\n\n<style>\n.blog-post {\n  max-width: 600px;\n  font-family: Arial, sans-serif;\n}\n.title {\n  font-size: 28px;\n  font-weight: bold;\n  color: #2c3e50;\n  margin-bottom: 5px;\n}\n.date {\n  font-size: 13px;\n  color: #95a5a6;\n  font-style: italic;\n}\n.content {\n  font-size: 16px;\n  line-height: 1.7;\n  color: #34495e;\n}\n.tag {\n  font-size: 12px;\n  color: #7f8c8d;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '블로그 타이포그래피', description: '종합 스타일' }],
              feedback: { perfect: '블로그 타이포그래피 완벽! 실제 블로그처럼 읽기 편하고 아름다워요! 📝', good: '좋은 구성이에요! line-height를 추가하면 더 읽기 편해져요.', partial: '각 요소별로 font-size, color를 다르게 설정하세요.', wrong: '.title에 큰 font-size를, .content에 적절한 line-height를 적용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m7',
          title: '텍스트 꾸미기',
          description: '정렬, 밑줄, 그림자로 텍스트를 꾸며요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 18,
          concept: '텍스트 스타일 속성',
          conceptExplanation: 'text-align(정렬), text-decoration(꾸미기), text-transform(대소문자), text-shadow(그림자)!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['text-align으로 정렬할 수 있다', 'text-decoration으로 꾸밀 수 있다'],
          hints: ['💡 text-align: center/left/right', '💡 text-decoration: underline/none'],
          commonMistakes: ['text-align을 inline 요소에 적용하는 실수'],
          challenges: [
            {
              id: 'c1',
              title: '텍스트 정렬',
              description: '왼쪽, 가운데, 오른쪽 정렬을 각각 적용하세요.',
              difficulty: 'easy',
              hints: ['text-align: left/center/right'],
              estimatedMinutes: 3,
              starterCode: '<p class="left">왼쪽 정렬</p>\n<p class="center">가운데 정렬</p>\n<p class="right">오른쪽 정렬</p>\n\n<style>\n/* 각 클래스에 정렬 적용 */\n\n</style>',
              solution: '<p class="left">왼쪽 정렬</p>\n<p class="center">가운데 정렬</p>\n<p class="right">오른쪽 정렬</p>\n\n<style>\n.left { text-align: left; }\n.center { text-align: center; }\n.right { text-align: right; }\n</style>',
              testCases: [{ input: '', expectedOutput: '텍스트 정렬', description: '3방향 정렬' }],
              feedback: { perfect: '텍스트 정렬 완벽! 가장 기본적인 레이아웃 도구예요! ↔️', good: '잘 했어요! center가 가장 많이 쓰여요.', partial: 'text-align 속성을 사용하세요.', wrong: '.center { text-align: center; }' }
            },
            {
              id: 'c2',
              title: '밑줄과 취소선',
              description: '밑줄, 취소선, 윗줄을 적용하고, 링크의 밑줄을 제거하세요.',
              difficulty: 'easy',
              hints: ['text-decoration: underline/line-through/overline/none'],
              estimatedMinutes: 3,
              starterCode: '<p class="underline">밑줄 텍스트</p>\n<p class="strikethrough">취소선 텍스트</p>\n<a href="#" class="no-underline">밑줄 없는 링크</a>\n\n<style>\n/* text-decoration 적용 */\n\n</style>',
              solution: '<p class="underline">밑줄 텍스트</p>\n<p class="strikethrough">취소선 텍스트</p>\n<a href="#" class="no-underline">밑줄 없는 링크</a>\n\n<style>\n.underline { text-decoration: underline; }\n.strikethrough { text-decoration: line-through; }\n.no-underline { text-decoration: none; }\n</style>',
              testCases: [{ input: '', expectedOutput: '텍스트 꾸미기', description: '3가지 decoration' }],
              feedback: { perfect: 'text-decoration 완벽! 링크에 none 쓰는 것은 실무 필수 기술! 🔗', good: '잘 했어요! none으로 밑줄 제거가 가장 많이 쓰여요.', partial: 'text-decoration 속성을 사용하세요.', wrong: '.underline { text-decoration: underline; } .no-underline { text-decoration: none; }' }
            },
            {
              id: 'c3',
              title: '대소문자 변환',
              description: 'text-transform으로 대문자, 소문자, 첫글자 대문자를 적용하세요.',
              difficulty: 'medium',
              hints: ['uppercase(전체 대문자), lowercase(전체 소문자), capitalize(첫글자 대문자)'],
              estimatedMinutes: 4,
              starterCode: '<p class="upper">hello world</p>\n<p class="lower">HELLO WORLD</p>\n<p class="cap">hello world css</p>\n\n<style>\n/* text-transform 적용 */\n\n</style>',
              solution: '<p class="upper">hello world</p>\n<p class="lower">HELLO WORLD</p>\n<p class="cap">hello world css</p>\n\n<style>\n.upper { text-transform: uppercase; }\n.lower { text-transform: lowercase; }\n.cap { text-transform: capitalize; }\n</style>',
              testCases: [{ input: '', expectedOutput: '대소문자 변환', description: '3가지 변환' }],
              feedback: { perfect: 'text-transform 완벽! uppercase는 버튼이나 메뉴에 자주 써요! 🔠', good: '잘 했어요! capitalize는 제목에 유용해요.', partial: 'text-transform 속성을 사용하세요.', wrong: '.upper { text-transform: uppercase; }' }
            },
            {
              id: 'c4',
              title: '텍스트 그림자',
              description: 'text-shadow로 다양한 그림자 효과를 만드세요.',
              difficulty: 'medium',
              hints: ['text-shadow: x y blur color', '예: text-shadow: 2px 2px 4px gray'],
              estimatedMinutes: 5,
              starterCode: '<h1 class="soft-shadow">부드러운 그림자</h1>\n<h1 class="hard-shadow">선명한 그림자</h1>\n<h1 class="glow">빛나는 효과</h1>\n\n<style>\n/* text-shadow 적용 */\n\n</style>',
              solution: '<h1 class="soft-shadow">부드러운 그림자</h1>\n<h1 class="hard-shadow">선명한 그림자</h1>\n<h1 class="glow">빛나는 효과</h1>\n\n<style>\n.soft-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }\n.hard-shadow { text-shadow: 3px 3px 0 #333; }\n.glow { text-shadow: 0 0 10px #3498db, 0 0 20px #3498db; color: #3498db; }\n</style>',
              testCases: [{ input: '', expectedOutput: '텍스트 그림자', description: '3가지 그림자' }],
              feedback: { perfect: '텍스트 그림자 완벽! glow 효과는 여러 그림자를 겹치는 기법이에요! ✨', good: '잘 했어요! blur 값을 0으로 하면 선명한 그림자가 돼요.', partial: 'text-shadow: x y blur color 형식입니다.', wrong: 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3);' }
            },
            {
              id: 'c5',
              title: '레터링 아트',
              description: '모든 텍스트 속성을 조합해서 멋진 제목을 만드세요.',
              difficulty: 'hard',
              hints: ['font, text-align, text-transform, text-shadow 모두 활용', 'letter-spacing으로 자간도 조절'],
              estimatedMinutes: 8,
              starterCode: '<div class="hero">\n  <h1 class="hero-title">CREATIVE CSS</h1>\n  <p class="hero-subtitle">텍스트로 만드는 예술</p>\n</div>\n\n<style>\n.hero {\n  padding: 40px;\n  text-align: center;\n}\n/* .hero-title: 큰 글씨, 넓은 자간, 그림자 */\n/* .hero-subtitle: 기울임, 연한 색상 */\n\n</style>',
              solution: '<div class="hero">\n  <h1 class="hero-title">CREATIVE CSS</h1>\n  <p class="hero-subtitle">텍스트로 만드는 예술</p>\n</div>\n\n<style>\n.hero {\n  padding: 40px;\n  text-align: center;\n  background: #2c3e50;\n}\n.hero-title {\n  font-size: 48px;\n  font-weight: 900;\n  letter-spacing: 8px;\n  text-transform: uppercase;\n  color: white;\n  text-shadow: 3px 3px 0 #e74c3c, 6px 6px 0 #3498db;\n}\n.hero-subtitle {\n  font-style: italic;\n  font-size: 18px;\n  color: #bdc3c7;\n  letter-spacing: 3px;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '레터링 아트', description: '종합 텍스트 스타일' }],
              feedback: { perfect: '레터링 아트 완벽! 텍스트만으로도 이렇게 멋진 디자인이 가능해요! 🎨🏆', good: '멋진 디자인이에요! 다중 text-shadow로 더 화려하게 만들어보세요.', partial: 'font-size, letter-spacing, text-shadow를 모두 활용하세요.', wrong: '큰 font-size + letter-spacing + text-shadow를 조합하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m8',
          title: 'CSS 배경',
          description: '배경색, 이미지, 그라디언트를 적용해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 20,
          concept: 'CSS 배경 속성',
          conceptExplanation: 'background-color(단색), background-image(이미지), linear-gradient(그라디언트)로 배경을 꾸며요!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['배경색과 그라디언트를 적용할 수 있다', 'background 단축 속성을 이해할 수 있다'],
          hints: ['💡 background-color: #색상', '💡 background: linear-gradient(방향, 색1, 색2)'],
          commonMistakes: ['background-image와 background-color 동시 사용 시 주의'],
          challenges: [
            {
              id: 'c1',
              title: '배경색 적용',
              description: '다양한 영역에 배경색을 적용하세요.',
              difficulty: 'easy',
              hints: ['background-color 속성 사용'],
              estimatedMinutes: 3,
              starterCode: '<div class="header-bg">헤더</div>\n<div class="main-bg">메인</div>\n<div class="footer-bg">푸터</div>\n\n<style>\n/* 각 영역에 배경색 적용 */\ndiv { padding: 20px; margin: 5px; color: white; }\n\n</style>',
              solution: '<div class="header-bg">헤더</div>\n<div class="main-bg">메인</div>\n<div class="footer-bg">푸터</div>\n\n<style>\ndiv { padding: 20px; margin: 5px; color: white; }\n.header-bg { background-color: #2c3e50; }\n.main-bg { background-color: #3498db; }\n.footer-bg { background-color: #2c3e50; }\n</style>',
              testCases: [{ input: '', expectedOutput: '배경색', description: '3가지 배경' }],
              feedback: { perfect: '배경색 적용 완벽! 🎨', good: '잘 했어요! 배경색으로 영역을 구분할 수 있어요.', partial: 'background-color 속성을 사용하세요.', wrong: '.header-bg { background-color: #2c3e50; }' }
            },
            {
              id: 'c2',
              title: '그라디언트 배경',
              description: 'linear-gradient로 그라디언트 배경을 만드세요.',
              difficulty: 'easy',
              hints: ['background: linear-gradient(방향, 색1, 색2)', 'to right, to bottom 등'],
              estimatedMinutes: 5,
              starterCode: '<div class="gradient-1">좌에서 우로</div>\n<div class="gradient-2">위에서 아래로</div>\n<div class="gradient-3">대각선</div>\n\n<style>\ndiv { padding: 30px; margin: 10px; color: white; text-align: center; border-radius: 8px; }\n/* 그라디언트 배경 적용 */\n\n</style>',
              solution: '<div class="gradient-1">좌에서 우로</div>\n<div class="gradient-2">위에서 아래로</div>\n<div class="gradient-3">대각선</div>\n\n<style>\ndiv { padding: 30px; margin: 10px; color: white; text-align: center; border-radius: 8px; }\n.gradient-1 { background: linear-gradient(to right, #e74c3c, #f39c12); }\n.gradient-2 { background: linear-gradient(to bottom, #3498db, #2ecc71); }\n.gradient-3 { background: linear-gradient(135deg, #9b59b6, #3498db); }\n</style>',
              testCases: [{ input: '', expectedOutput: '그라디언트', description: '3방향 그라디언트' }],
              feedback: { perfect: '그라디언트 완벽! 현대 웹디자인의 핵심 기법이에요! 🌈', good: '잘 했어요! 135deg처럼 각도로 방향을 지정할 수도 있어요.', partial: 'linear-gradient(방향, 색1, 색2) 형태입니다.', wrong: 'background: linear-gradient(to right, #e74c3c, #f39c12);' }
            },
            {
              id: 'c3',
              title: '다중 색상 그라디언트',
              description: '3가지 이상의 색이 들어간 그라디언트와 무지개 그라디언트를 만드세요.',
              difficulty: 'medium',
              hints: ['색상을 쉼표로 구분해서 여러 개 넣기', '무지개: 빨주노초파남보'],
              estimatedMinutes: 5,
              starterCode: '<div class="sunset">석양 그라디언트</div>\n<div class="rainbow">무지개 그라디언트</div>\n\n<style>\ndiv { padding: 30px; margin: 10px; color: white; text-align: center; border-radius: 8px; }\n/* 다중 색상 그라디언트 */\n\n</style>',
              solution: '<div class="sunset">석양 그라디언트</div>\n<div class="rainbow">무지개 그라디언트</div>\n\n<style>\ndiv { padding: 30px; margin: 10px; color: white; text-align: center; border-radius: 8px; }\n.sunset {\n  background: linear-gradient(to right, #e74c3c, #f39c12, #9b59b6);\n}\n.rainbow {\n  background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '다중 그라디언트', description: '석양+무지개' }],
              feedback: { perfect: '다중 색상 그라디언트 완벽! 색상을 자유자재로 조합해요! 🌅', good: '예쁜 그라디언트예요! 색상 수는 무제한이에요.', partial: '쉼표로 색상을 나열하세요.', wrong: 'linear-gradient(to right, 색1, 색2, 색3, ...)' }
            },
            {
              id: 'c4',
              title: '패턴 배경 (줄무늬)',
              description: 'repeating-linear-gradient로 줄무늬 패턴을 만드세요.',
              difficulty: 'hard',
              hints: ['repeating-linear-gradient는 그라디언트를 반복', '색상 중지점을 지정하세요'],
              estimatedMinutes: 7,
              starterCode: '<div class="stripes">줄무늬 패턴</div>\n\n<style>\n.stripes {\n  width: 300px;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  /* TODO: repeating-linear-gradient로 줄무늬 */\n}\n</style>',
              solution: '<div class="stripes">줄무늬 패턴</div>\n\n<style>\n.stripes {\n  width: 300px;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: bold;\n  border-radius: 8px;\n  background: repeating-linear-gradient(\n    45deg,\n    #3498db,\n    #3498db 10px,\n    #2980b9 10px,\n    #2980b9 20px\n  );\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '줄무늬 패턴', description: '대각선 줄무늬' }],
              feedback: { perfect: '줄무늬 패턴 완벽! CSS만으로 이런 패턴을 만들 수 있어요! 🎨', good: '패턴이 나와요! 색상 중지점(10px, 20px)을 조절해보세요.', partial: 'repeating-linear-gradient를 사용하세요.', wrong: 'repeating-linear-gradient(45deg, 색1, 색1 10px, 색2 10px, 색2 20px)' }
            },
            {
              id: 'c5',
              title: '히어로 섹션 배경',
              description: '그라디언트 오버레이가 있는 히어로 섹션을 만드세요.',
              difficulty: 'hard',
              hints: ['background에 gradient와 색상을 겹칠 수 있어요', '높이와 중앙 정렬도 설정하세요'],
              estimatedMinutes: 8,
              starterCode: '<section class="hero">\n  <h1>환영합니다</h1>\n  <p>아름다운 웹사이트의 시작</p>\n</section>\n\n<style>\n.hero {\n  /* TODO: 그라디언트 배경, 큰 높이, 텍스트 중앙 */\n}\n.hero h1 { }\n.hero p { }\n</style>',
              solution: '<section class="hero">\n  <h1>환영합니다</h1>\n  <p>아름다운 웹사이트의 시작</p>\n</section>\n\n<style>\n.hero {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  text-align: center;\n}\n.hero h1 {\n  font-size: 48px;\n  margin-bottom: 10px;\n  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n}\n.hero p {\n  font-size: 20px;\n  opacity: 0.9;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '히어로 섹션', description: '완성된 히어로' }],
              feedback: { perfect: '히어로 섹션 완벽! 실제 랜딩 페이지 수준이에요! 🏆🎉', good: '멋진 히어로예요! text-shadow와 opacity로 디테일을 추가해보세요.', partial: '큰 min-height와 flex로 중앙 정렬을 해보세요.', wrong: 'background: linear-gradient(...); min-height: 400px; display: flex;' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m9',
          title: '테두리와 간격',
          description: 'border, padding, margin으로 요소를 꾸미고 간격을 조절해요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'css',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 25,
          concept: 'border, padding, margin',
          conceptExplanation: 'border(테두리)는 요소의 경계, padding(안쪽 여백)은 내용과 테두리 사이, margin(바깥 여백)은 요소들 사이의 간격이에요!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['border 속성으로 테두리를 만들 수 있다', 'padding과 margin의 차이를 이해할 수 있다', 'box model을 이해할 수 있다'],
          realWorldExample: '액자를 생각해보세요! 그림=content, 여백=padding, 프레임=border, 벽과의 간격=margin!',
          hints: ['💡 border: 2px solid black', '💡 padding: 안쪽 여백', '💡 margin: 바깥 여백'],
          commonMistakes: ['padding과 margin 혼동', 'border 단축 속성 순서 틀림'],
          challenges: [
            {
              id: 'c1',
              title: '테두리 만들기',
              description: 'solid(실선), dashed(점선), dotted(점) 테두리를 각각 만드세요.',
              difficulty: 'easy',
              hints: ['border: 2px solid black', 'border: 2px dashed blue'],
              estimatedMinutes: 3,
              starterCode: '<div class="solid-box">실선 테두리</div>\n<div class="dashed-box">점선 테두리</div>\n<div class="dotted-box">점 테두리</div>\n\n<style>\ndiv { padding: 15px; margin: 10px; }\n/* 각 박스에 다른 스타일의 테두리 적용 */\n\n</style>',
              solution: '<div class="solid-box">실선 테두리</div>\n<div class="dashed-box">점선 테두리</div>\n<div class="dotted-box">점 테두리</div>\n\n<style>\ndiv { padding: 15px; margin: 10px; }\n.solid-box { border: 2px solid #2c3e50; }\n.dashed-box { border: 2px dashed #3498db; }\n.dotted-box { border: 2px dotted #e74c3c; }\n</style>',
              testCases: [{ input: '', expectedOutput: '3종 테두리', description: 'solid, dashed, dotted' }],
              feedback: { perfect: '테두리 3종 완벽! solid, dashed, dotted를 정확히 구분했어요! 🖼️', good: '잘 했어요! border: 두께 스타일 색상 순서예요.', partial: 'border: 2px solid black 형태를 사용하세요.', wrong: 'border: 두께 스타일 색상; 순서로 작성하세요.' }
            },
            {
              id: 'c2',
              title: 'border-radius 둥글게',
              description: 'border-radius로 둥근 모서리, 원, 물방울 모양을 만드세요.',
              difficulty: 'easy',
              hints: ['border-radius: 8px 약간 둥글게', 'border-radius: 50% 완전한 원'],
              estimatedMinutes: 4,
              starterCode: '<div class="rounded">둥근 모서리</div>\n<div class="circle">원</div>\n<div class="pill">약처럼</div>\n\n<style>\ndiv { padding: 20px; margin: 10px; background: #3498db; color: white; text-align: center; display: inline-block; }\n.circle { width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; }\n/* border-radius 적용 */\n\n</style>',
              solution: '<div class="rounded">둥근 모서리</div>\n<div class="circle">원</div>\n<div class="pill">약처럼</div>\n\n<style>\ndiv { padding: 20px; margin: 10px; background: #3498db; color: white; text-align: center; display: inline-block; }\n.circle { width: 80px; height: 80px; display: flex; align-items: center; justify-content: center; }\n.rounded { border-radius: 8px; }\n.circle { border-radius: 50%; }\n.pill { border-radius: 50px; }\n</style>',
              testCases: [{ input: '', expectedOutput: '둥근 모양', description: '3가지 모양' }],
              feedback: { perfect: 'border-radius 완벽! 50%로 완전한 원을 만드는 것은 핵심 기술! ⭕', good: '잘 했어요! pill 모양은 큰 border-radius로 만들어요.', partial: 'border-radius 값을 조절해보세요.', wrong: '.rounded { border-radius: 8px; } .circle { border-radius: 50%; }' }
            },
            {
              id: 'c3',
              title: 'padding vs margin',
              description: 'padding(안쪽 여백)과 margin(바깥 여백)의 차이를 실습하세요.',
              difficulty: 'medium',
              hints: ['padding은 배경색 안쪽', 'margin은 요소 바깥 간격'],
              estimatedMinutes: 5,
              starterCode: '<div class="outer">\n  <div class="padding-demo">padding: 안쪽 여백 (배경색 포함)</div>\n</div>\n<div class="outer">\n  <div class="margin-demo">margin: 바깥 여백 (배경색 미포함)</div>\n</div>\n\n<style>\n.outer { background: #ecf0f1; margin: 10px; }\n.padding-demo {\n  background: #3498db;\n  color: white;\n  /* TODO: padding 20px 적용 (배경색이 넓어짐) */\n}\n.margin-demo {\n  background: #e74c3c;\n  color: white;\n  /* TODO: margin 20px 적용 (요소 주변에 공간) */\n}\n</style>',
              solution: '<div class="outer">\n  <div class="padding-demo">padding: 안쪽 여백 (배경색 포함)</div>\n</div>\n<div class="outer">\n  <div class="margin-demo">margin: 바깥 여백 (배경색 미포함)</div>\n</div>\n\n<style>\n.outer { background: #ecf0f1; margin: 10px; }\n.padding-demo {\n  background: #3498db;\n  color: white;\n  padding: 20px;\n}\n.margin-demo {\n  background: #e74c3c;\n  color: white;\n  margin: 20px;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: 'padding vs margin', description: '차이점 확인' }],
              feedback: { perfect: 'padding/margin 차이 완벽 이해! padding은 안쪽, margin은 바깥! 📦', good: '잘 했어요! 배경색으로 차이를 확인하면 이해가 쉬워요.', partial: '두 속성의 차이를 비교해보세요.', wrong: '.padding-demo { padding: 20px; } .margin-demo { margin: 20px; }' }
            },
            {
              id: 'c4',
              title: '방향별 여백',
              description: 'padding-top, margin-left 등 방향별 여백과 단축 속성을 사용하세요.',
              difficulty: 'medium',
              hints: ['padding: 상 우 하 좌 (시계방향)', 'padding: 상하 좌우 (2값)'],
              estimatedMinutes: 5,
              starterCode: '<div class="box1">상하 10px, 좌우 20px</div>\n<div class="box2">위만 30px</div>\n<div class="box3">4방향 다 다르게</div>\n\n<style>\ndiv { background: #3498db; color: white; margin: 5px; }\n/* 단축 속성 연습 */\n\n</style>',
              solution: '<div class="box1">상하 10px, 좌우 20px</div>\n<div class="box2">위만 30px</div>\n<div class="box3">4방향 다 다르게</div>\n\n<style>\ndiv { background: #3498db; color: white; margin: 5px; }\n.box1 { padding: 10px 20px; }\n.box2 { padding-top: 30px; padding-left: 10px; padding-right: 10px; padding-bottom: 10px; }\n.box3 { padding: 5px 10px 15px 20px; }\n</style>',
              testCases: [{ input: '', expectedOutput: '방향별 여백', description: '다양한 방식' }],
              feedback: { perfect: '방향별 여백 완벽! 단축 속성 순서(상 우 하 좌)를 정확히 이해했어요! 🧭', good: '잘 했어요! 4값은 시계방향(상 우 하 좌)이에요.', partial: '단축 속성: padding: 상 우 하 좌; 순서입니다.', wrong: 'padding: 10px 20px;는 상하 10, 좌우 20이에요.' }
            },
            {
              id: 'c5',
              title: 'Box Model 완전 정복',
              description: 'content, padding, border, margin을 모두 활용한 카드를 만드세요. box-sizing도 적용하세요.',
              difficulty: 'hard',
              hints: ['box-sizing: border-box면 padding과 border가 width 안에 포함', '시각적으로 구분되게 만드세요'],
              estimatedMinutes: 8,
              starterCode: '<div class="card">\n  <h2>Box Model 카드</h2>\n  <p>content + padding + border + margin</p>\n</div>\n\n<style>\n/* box-sizing 설정 */\n/* .card: width, padding, border, margin, background, border-radius 모두 적용 */\n\n</style>',
              solution: '<div class="card">\n  <h2>Box Model 카드</h2>\n  <p>content + padding + border + margin</p>\n</div>\n\n<style>\n* { box-sizing: border-box; }\n.card {\n  width: 300px;\n  padding: 24px;\n  margin: 20px auto;\n  background: white;\n  border: 2px solid #ecf0f1;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n.card h2 {\n  margin: 0 0 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ecf0f1;\n}\n.card p {\n  margin: 0;\n  color: #7f8c8d;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: 'Box Model 카드', description: '완성된 카드' }],
              feedback: { perfect: 'Box Model 완전 정복! content-padding-border-margin 모두 마스터! 📦🏆', good: '좋은 카드예요! box-sizing: border-box도 추가하면 크기 계산이 편해져요.', partial: 'width + padding + border + margin을 모두 적용하세요.', wrong: '* { box-sizing: border-box; } 를 먼저 추가하고, .card에 각 속성을 적용하세요.' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        },
        {
          id: 'w34-m10',
          title: '주간 프로젝트: 자기소개 카드',
          description: '이번 주 배운 모든 CSS를 활용해 자기소개 카드를 만들어요!',
          type: 'project',
          difficulty: 'intermediate',
          language: 'css',
          phase: 'create',
          isKeyMission: true,
          exp: 50,
          estimatedMinutes: 35,
          concept: 'CSS 종합 프로젝트',
          conceptExplanation: '선택자, 색상, 폰트, 텍스트, 배경, 테두리, 간격을 모두 활용하는 종합 프로젝트!',
          cstaStandard: '2-AP-17',
          learningObjectives: ['CSS 속성을 종합적으로 활용할 수 있다', '디자인 감각을 기를 수 있다'],
          hints: ['💡 구조부터 잡고 하나씩 스타일링하세요'],
          commonMistakes: ['한꺼번에 다 하려는 실수', '색상 조화를 무시하는 실수'],
          challenges: [
            {
              id: 'c1',
              title: '카드 기본 구조',
              description: 'HTML 구조를 만들고 카드 컨테이너에 기본 스타일(너비, 패딩, 둥근 모서리, 그림자)을 적용하세요.',
              difficulty: 'easy',
              hints: ['max-width: 350px로 너비 제한', 'margin: 0 auto로 중앙 배치'],
              estimatedMinutes: 5,
              starterCode: '<!-- 자기소개 카드 -->\n<div class="profile-card">\n  <div class="card-header">\n    <!-- 프로필 이미지 영역 -->\n  </div>\n  <div class="card-body">\n    <!-- 이름, 소개, 취미 -->\n  </div>\n  <div class="card-footer">\n    <!-- 소셜 링크 -->\n  </div>\n</div>\n\n<style>\n/* .profile-card 기본 스타일 */\n\n</style>',
              solution: '<div class="profile-card">\n  <div class="card-header"></div>\n  <div class="card-body"></div>\n  <div class="card-footer"></div>\n</div>\n\n<style>\nbody { background: #ecf0f1; font-family: Arial, sans-serif; }\n.profile-card {\n  max-width: 350px;\n  margin: 40px auto;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  overflow: hidden;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '카드 기본 구조', description: '컨테이너 완성' }],
              feedback: { perfect: '카드 구조 완벽! overflow: hidden으로 모서리를 깔끔하게! 🃏', good: '기본 구조 잘 잡았어요! overflow: hidden을 추가하면 더 좋아요.', partial: 'max-width와 margin: 0 auto로 중앙 배치하세요.', wrong: '.profile-card { max-width: 350px; margin: 40px auto; border-radius: 16px; }' }
            },
            {
              id: 'c2',
              title: '헤더 배경과 프로필',
              description: '카드 헤더에 그라디언트 배경을 넣고, 프로필 이미지 자리를 만드세요.',
              difficulty: 'easy',
              hints: ['linear-gradient로 예쁜 배경', 'width/height + border-radius: 50%로 원형'],
              estimatedMinutes: 5,
              starterCode: '<div class="profile-card">\n  <div class="card-header">\n    <div class="avatar">ME</div>\n  </div>\n</div>\n\n<style>\n.profile-card { max-width: 350px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; }\n.card-header {\n  /* TODO: 그라디언트 배경, 높이, 중앙 정렬 */\n}\n.avatar {\n  /* TODO: 원형, 흰색 배경, 테두리 */\n}\n</style>',
              solution: '<div class="profile-card">\n  <div class="card-header">\n    <div class="avatar">ME</div>\n  </div>\n</div>\n\n<style>\n.profile-card { max-width: 350px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; }\n.card-header {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  height: 150px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: white;\n  border: 4px solid white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 24px;\n  color: #667eea;\n  position: relative;\n  top: 40px;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '헤더 + 프로필', description: '그라디언트 헤더' }],
              feedback: { perfect: '헤더 디자인 완벽! 그라디언트 + 아바타 레이어링이 프로급이에요! 🎨', good: '좋은 디자인이에요! 아바타를 헤더 아래로 걸치게 하면 더 멋져요.', partial: 'linear-gradient와 border-radius: 50%를 사용하세요.', wrong: '.card-header { background: linear-gradient(135deg, 색1, 색2); }' }
            },
            {
              id: 'c3',
              title: '이름과 소개',
              description: '카드 본문에 이름, 직업, 자기소개를 넣고 폰트와 색상을 적용하세요.',
              difficulty: 'medium',
              hints: ['text-align: center로 가운데 정렬', '이름은 크게, 직업은 작고 연하게'],
              estimatedMinutes: 5,
              starterCode: '<div class="card-body">\n  <h2 class="name">김코딩</h2>\n  <p class="role">프론트엔드 개발자</p>\n  <p class="bio">코딩으로 세상을 바꾸고 싶은 학생입니다. CSS를 열심히 공부하고 있어요!</p>\n</div>\n\n<style>\n.card-body {\n  /* TODO: 패딩, 가운데 정렬 */\n}\n.name { /* TODO: 큰 글씨, 진한 색 */ }\n.role { /* TODO: 작은 글씨, 연한 색 */ }\n.bio { /* TODO: 본문 스타일 */ }\n</style>',
              solution: '<div class="card-body">\n  <h2 class="name">김코딩</h2>\n  <p class="role">프론트엔드 개발자</p>\n  <p class="bio">코딩으로 세상을 바꾸고 싶은 학생입니다. CSS를 열심히 공부하고 있어요!</p>\n</div>\n\n<style>\n.card-body {\n  padding: 50px 24px 24px;\n  text-align: center;\n}\n.name {\n  font-size: 22px;\n  color: #2c3e50;\n  margin: 0 0 5px;\n}\n.role {\n  font-size: 14px;\n  color: #95a5a6;\n  margin: 0 0 15px;\n}\n.bio {\n  font-size: 14px;\n  color: #7f8c8d;\n  line-height: 1.6;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '이름과 소개', description: '텍스트 스타일링' }],
              feedback: { perfect: '텍스트 스타일링 완벽! 크기와 색상으로 계층 구조가 명확해요! 📝', good: '잘 했어요! line-height를 추가하면 읽기 편해져요.', partial: 'text-align: center와 다양한 font-size를 사용하세요.', wrong: '.name { font-size: 22px; } .role { font-size: 14px; color: gray; }' }
            },
            {
              id: 'c4',
              title: '취미 태그',
              description: '취미/관심사를 태그(배지) 형태로 표시하세요.',
              difficulty: 'medium',
              hints: ['display: inline-block으로 가로 배치', 'padding + border-radius + background로 태그 모양'],
              estimatedMinutes: 7,
              starterCode: '<div class="tags">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JavaScript</span>\n  <span class="tag">게임</span>\n  <span class="tag">음악</span>\n</div>\n\n<style>\n.tags { text-align: center; padding: 10px; }\n.tag {\n  /* TODO: 태그 스타일 (배경, 패딩, 둥근 모서리, 간격) */\n}\n</style>',
              solution: '<div class="tags">\n  <span class="tag">HTML</span>\n  <span class="tag">CSS</span>\n  <span class="tag">JavaScript</span>\n  <span class="tag">게임</span>\n  <span class="tag">음악</span>\n</div>\n\n<style>\n.tags { text-align: center; padding: 10px; }\n.tag {\n  display: inline-block;\n  background: #ecf0f1;\n  color: #2c3e50;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  margin: 3px;\n}\n</style>',
              testCases: [{ input: '', expectedOutput: '취미 태그', description: '태그 배지' }],
              feedback: { perfect: '태그 배지 완벽! 깔끔하고 보기 좋아요! 🏷️', good: '잘 했어요! border-radius를 크게 하면 알약 모양이 돼요.', partial: 'display: inline-block과 border-radius를 사용하세요.', wrong: '.tag { display: inline-block; padding: 4px 12px; border-radius: 20px; background: #ecf0f1; }' }
            },
            {
              id: 'c5',
              title: '전체 카드 완성',
              description: '헤더(그라디언트+아바타) + 본문(이름+소개+태그) + 푸터(소셜링크)를 모두 통합한 자기소개 카드를 완성하세요.',
              difficulty: 'hard',
              hints: ['이전 챌린지의 모든 스타일을 합치세요', '푸터에 소셜 아이콘도 추가'],
              estimatedMinutes: 15,
              starterCode: '<!-- 전체 자기소개 카드 -->\n<!-- TODO: 모든 섹션 통합 -->\n\n<style>\n/* TODO: 전체 스타일 */\n</style>',
              solution: '<div class="profile-card">\n  <div class="card-header">\n    <div class="avatar">ME</div>\n  </div>\n  <div class="card-body">\n    <h2 class="name">김코딩</h2>\n    <p class="role">프론트엔드 개발자</p>\n    <p class="bio">코딩으로 세상을 바꾸고 싶은 학생입니다!</p>\n    <div class="tags">\n      <span class="tag">HTML</span>\n      <span class="tag">CSS</span>\n      <span class="tag">JavaScript</span>\n    </div>\n  </div>\n  <div class="card-footer">\n    <a href="#" class="social">GitHub</a>\n    <a href="#" class="social">Blog</a>\n    <a href="#" class="social">Email</a>\n  </div>\n</div>\n\n<style>\nbody { background: #ecf0f1; font-family: Arial, sans-serif; }\n.profile-card {\n  max-width: 350px;\n  margin: 40px auto;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 4px 15px rgba(0,0,0,0.1);\n  overflow: hidden;\n}\n.card-header {\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  height: 120px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n}\n.avatar {\n  width: 80px; height: 80px;\n  border-radius: 50%;\n  background: white;\n  border: 4px solid white;\n  display: flex; align-items: center; justify-content: center;\n  font-weight: bold; font-size: 24px; color: #667eea;\n  position: relative; top: 40px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.15);\n}\n.card-body {\n  padding: 50px 24px 20px;\n  text-align: center;\n}\n.name { font-size: 22px; color: #2c3e50; margin: 0 0 4px; }\n.role { font-size: 14px; color: #95a5a6; margin: 0 0 12px; }\n.bio { font-size: 14px; color: #7f8c8d; line-height: 1.6; margin: 0 0 15px; }\n.tags { margin-bottom: 10px; }\n.tag {\n  display: inline-block;\n  background: #f0f0f5;\n  color: #667eea;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  margin: 3px;\n}\n.card-footer {\n  display: flex;\n  border-top: 1px solid #ecf0f1;\n}\n.social {\n  flex: 1;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background 0.2s;\n}\n.social:hover { background: #f8f9fa; }\n.social + .social { border-left: 1px solid #ecf0f1; }\n</style>',
              testCases: [{ input: '', expectedOutput: '자기소개 카드 완성', description: '종합 프로젝트' }],
              feedback: { perfect: '자기소개 카드 완벽 완성! CSS 기초를 완전히 마스터했어요! 이 카드는 실제 포트폴리오에 쓸 수 있을 정도예요! 🏆🎉🎨', good: '훌륭한 카드예요! 소셜 링크 hover 효과를 추가하면 더 완벽해요.', partial: '좋은 시작이에요! 각 섹션을 하나씩 스타일링하세요.', wrong: '구조: card-header(그라디언트+아바타) + card-body(이름+소개+태그) + card-footer(링크)' }
            }
          ],
          unlocked: true,
          completed: false,
          perfectScore: false
        }
      ]
    },

    // Week 35~38은 구조만 표시
    {
      id: 'week-35',
      number: 35,
      title: 'CSS 레이아웃',
      description: 'Flexbox와 Grid로 요소를 배치해요',
      missions: [
        {
          id: 'w35-m1',
          title: 'Display 속성 이해하기',
          description: 'block, inline, inline-block의 차이를 알아봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'CSS Display',
          conceptExplanation: 'display 속성은 요소가 어떻게 보여질지 결정해요. block은 한 줄을 다 차지하고, inline은 내용만큼만 차지해요. inline-block은 줄을 바꾸지 않으면서 너비와 높이를 설정할 수 있어요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'display 속성의 종류와 특성을 이해할 수 있다',
            'block과 inline의 차이를 설명할 수 있다',
            '상황에 맞는 display 속성을 선택할 수 있다'
          ],
          realWorldExample: 'block은 책의 문단처럼 한 줄을 다 차지해요. inline은 문장 안의 단어처럼 옆으로 나란히 배치돼요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    /* div를 inline으로 만들어보세요 */
    .inline-box {
      /* 여기에 코드 작성 */
      width: 100px;
      height: 50px;
      background: lightblue;
      margin: 10px;
    }

    /* span을 block으로 만들어보세요 */
    .block-text {
      /* 여기에 코드 작성 */
      background: lightcoral;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="inline-box">Box 1</div>
  <div class="inline-box">Box 2</div>
  <span class="block-text">Text 1</span>
  <span class="block-text">Text 2</span>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .inline-box {
      display: inline-block;
      width: 100px;
      height: 50px;
      background: lightblue;
      margin: 10px;
    }

    .block-text {
      display: block;
      background: lightcoral;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="inline-box">Box 1</div>
  <div class="inline-box">Box 2</div>
  <span class="block-text">Text 1</span>
  <span class="block-text">Text 2</span>
</body>
</html>`,
          hints: [
            '💡 display: inline-block으로 div를 옆으로 나란히 배치할 수 있어요',
            '💡 display: block으로 span을 한 줄씩 차지하게 만들 수 있어요',
            '💡 inline-block은 너비와 높이를 설정할 수 있어요'
          ],
          commonMistakes: [
            'inline에 너비/높이를 설정하려고 하는 경우 (inline-block 사용 필요)',
            'display 속성 이름을 잘못 쓰는 경우',
            '부모 요소의 display에 영향받는다는 것을 모르는 경우'
          ],
          testCases: [
            {
              input: 'inline-block 적용',
              expectedOutput: 'display: inline-block',
              description: 'div가 옆으로 나란히 배치되는지 확인'
            },
            {
              input: 'block 적용',
              expectedOutput: 'display: block',
              description: 'span이 한 줄씩 차지하는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Display 기본 실습',
              description: 'block, inline, inline-block을 각각 적용해보세요',
              difficulty: 'easy',
              hints: [
                '기본 태그들의 display 값을 확인하세요',
                '각 속성의 차이를 직접 보세요'
              ],
              estimatedMinutes: 5,
              starterCode: '/* display 속성 연습 */\n',
              feedback: {
                perfect: '완벽하게 이해했어요!',
                good: 'Display 속성을 잘 사용했어요!',
                partial: '일부만 맞았어요. 다시 확인하세요.',
                wrong: 'Display 개념을 다시 복습하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m2',
          title: 'Flexbox 기초',
          description: 'Flexbox로 요소를 유연하게 배치해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 35,
          estimatedMinutes: 30,
          concept: 'Flexbox',
          conceptExplanation: 'Flexbox는 요소를 가로나 세로로 유연하게 배치하는 강력한 레이아웃 도구예요! 부모 요소에 display: flex를 적용하면 자식 요소들을 쉽게 정렬할 수 있어요. 복잡한 레이아웃도 간단하게 만들 수 있답니다!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'Flexbox의 개념과 장점을 이해할 수 있다',
            'display: flex를 사용하여 컨테이너를 만들 수 있다',
            'flex 방향을 변경할 수 있다'
          ],
          realWorldExample: '상점의 진열대처럼 물건을 가지런히 배치하는 거예요! Flexbox를 사용하면 요소들이 자동으로 정렬돼요.',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      /* 여기에 flexbox 설정 */
      width: 500px;
      height: 200px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightblue;
      border: 2px solid blue;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      width: 500px;
      height: 200px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightblue;
      border: 2px solid blue;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 부모 요소에 display: flex를 추가하세요',
            '💡 flex를 적용하면 자식들이 자동으로 가로로 배치돼요',
            '💡 flex-direction으로 방향을 바꿀 수 있어요'
          ],
          commonMistakes: [
            '자식 요소에 flex를 적용하는 경우 (부모에 적용해야 함)',
            'display: flexbox라고 쓰는 경우 (flex가 맞음)',
            'flex 컨테이너와 flex 아이템을 혼동하는 경우'
          ],
          testCases: [
            {
              input: 'flex 적용',
              expectedOutput: 'display: flex',
              description: '요소들이 가로로 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Flex 컨테이너 만들기',
              description: '부모 요소를 flex 컨테이너로 만드세요',
              difficulty: 'easy',
              hints: [
                'display 속성을 사용하세요',
                '부모 요소에 적용해야 해요'
              ],
              estimatedMinutes: 5,
              starterCode: '/* flex 컨테이너 만들기 */\n',
              feedback: {
                perfect: 'Flexbox를 완벽히 이해했어요!',
                good: 'Flex 컨테이너를 잘 만들었어요!',
                partial: '거의 다 됐어요!',
                wrong: 'Flexbox 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m3',
          title: 'justify-content로 가로 정렬',
          description: 'flex 아이템을 가로 방향으로 정렬해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'justify-content',
          conceptExplanation: 'justify-content는 flex 아이템들을 주축(기본적으로 가로)을 따라 정렬해요! flex-start(왼쪽), center(중앙), flex-end(오른쪽), space-between(양 끝에 붙이고 사이 균등 배치), space-around(좌우 여백 포함 균등 배치) 등이 있어요.',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'justify-content 속성의 다양한 값을 이해할 수 있다',
            '상황에 맞는 정렬 방식을 선택할 수 있다',
            'flex 아이템의 수평 배치를 조절할 수 있다'
          ],
          realWorldExample: '사진을 액자에 넣을 때 왼쪽, 중앙, 오른쪽 중 어디에 둘지 선택하는 것과 같아요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      /* 아이템들을 중앙에 배치하세요 */
      width: 600px;
      height: 150px;
      background: #f0f0f0;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .container2 {
      display: flex;
      /* 아이템들을 양 끝에 배치하고 사이를 균등하게 하세요 */
      width: 600px;
      height: 150px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightcoral;
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>

  <div class="container2">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      justify-content: center;
      width: 600px;
      height: 150px;
      background: #f0f0f0;
      border: 2px solid #333;
      margin-bottom: 20px;
    }

    .container2 {
      display: flex;
      justify-content: space-between;
      width: 600px;
      height: 150px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightcoral;
      border: 2px solid red;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>

  <div class="container2">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 justify-content: center로 중앙 정렬',
            '💡 justify-content: space-between으로 균등 배치',
            '💡 flex-start, flex-end, space-around도 있어요'
          ],
          commonMistakes: [
            'text-align을 사용하려는 경우 (flex에서는 justify-content 사용)',
            'align-items와 justify-content를 혼동하는 경우',
            '속성 이름의 철자를 틀리는 경우'
          ],
          testCases: [
            {
              input: 'center 정렬',
              expectedOutput: 'justify-content: center',
              description: '아이템들이 중앙에 배치되는지 확인'
            },
            {
              input: 'space-between 정렬',
              expectedOutput: 'justify-content: space-between',
              description: '아이템들이 균등하게 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '다양한 정렬 실습',
              description: 'justify-content의 모든 값을 적용해보세요',
              difficulty: 'easy',
              hints: [
                '5가지 주요 값이 있어요',
                '각각 어떻게 다른지 확인하세요'
              ],
              estimatedMinutes: 6,
              starterCode: '/* 정렬 연습 */\n',
              feedback: {
                perfect: '모든 정렬을 완벽히 이해했어요!',
                good: 'justify-content를 잘 사용했어요!',
                partial: '일부 정렬만 맞았어요.',
                wrong: '정렬 방식을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m4',
          title: 'align-items로 세로 정렬',
          description: 'flex 아이템을 세로 방향으로 정렬해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'align-items',
          conceptExplanation: 'align-items는 flex 아이템들을 교차축(기본적으로 세로)을 따라 정렬해요! flex-start(위), center(중앙), flex-end(아래), stretch(늘림), baseline(텍스트 기준선) 등이 있어요. justify-content가 가로라면 align-items는 세로예요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'align-items 속성을 이해하고 사용할 수 있다',
            'justify-content와 align-items의 차이를 설명할 수 있다',
            '수직 정렬을 자유롭게 조절할 수 있다'
          ],
          realWorldExample: '선반에 물건을 놓을 때 위쪽에 둘지, 중간에 둘지, 아래쪽에 둘지 정하는 거예요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      /* 아이템을 세로 중앙에 배치하세요 */
      width: 500px;
      height: 300px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      background: lightgreen;
      border: 2px solid green;
      margin: 10px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item" style="padding: 40px;">Item 2<br>(더 큼)</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      align-items: center;
      width: 500px;
      height: 300px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 100px;
      background: lightgreen;
      border: 2px solid green;
      margin: 10px;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Item 1</div>
    <div class="item" style="padding: 40px;">Item 2<br>(더 큼)</div>
    <div class="item">Item 3</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 align-items: center로 세로 중앙 정렬',
            '💡 justify-content는 가로, align-items는 세로',
            '💡 둘을 함께 사용하면 완벽한 중앙 정렬!'
          ],
          commonMistakes: [
            'vertical-align을 사용하려는 경우 (flex에서는 align-items)',
            'justify-content와 헷갈리는 경우',
            '높이가 없으면 효과가 없다는 것을 모르는 경우'
          ],
          testCases: [
            {
              input: 'center 정렬',
              expectedOutput: 'align-items: center',
              description: '아이템들이 세로 중앙에 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '완벽한 중앙 정렬',
              description: 'justify-content와 align-items를 함께 사용하세요',
              difficulty: 'easy',
              hints: [
                '두 속성을 모두 center로 설정하세요',
                '가로와 세로 모두 중앙에 오게 해요'
              ],
              estimatedMinutes: 5,
              starterCode: '/* 중앙 정렬 연습 */\n',
              feedback: {
                perfect: '완벽한 중앙 정렬이에요!',
                good: 'align-items를 잘 사용했어요!',
                partial: '한 방향만 정렬되었어요.',
                wrong: '두 속성을 함께 사용해보세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m5',
          title: 'flex-direction으로 방향 바꾸기',
          description: 'flex 아이템의 배치 방향을 바꿔봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'flex-direction',
          conceptExplanation: 'flex-direction은 flex 아이템이 배치되는 방향을 결정해요! row(가로, 기본값), row-reverse(가로 역순), column(세로), column-reverse(세로 역순)가 있어요. 방향을 바꾸면 주축과 교차축도 바뀐다는 게 중요해요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'flex-direction의 네 가지 값을 이해할 수 있다',
            '주축과 교차축의 개념을 설명할 수 있다',
            '레이아웃 방향을 자유롭게 변경할 수 있다'
          ],
          realWorldExample: '책을 가로로 쌓을지 세로로 쌓을지, 왼쪽부터 쌓을지 오른쪽부터 쌓을지 정하는 거예요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      /* 세로 방향으로 배치하세요 */
      width: 200px;
      height: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 150px;
      height: 80px;
      background: lightyellow;
      border: 2px solid orange;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1번</div>
    <div class="item">2번</div>
    <div class="item">3번</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      flex-direction: column;
      width: 200px;
      height: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
    }

    .item {
      width: 150px;
      height: 80px;
      background: lightyellow;
      border: 2px solid orange;
      margin: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1번</div>
    <div class="item">2번</div>
    <div class="item">3번</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 flex-direction: column으로 세로 배치',
            '💡 flex-direction: row는 가로 배치 (기본값)',
            '💡 reverse를 붙이면 역순으로 배치돼요'
          ],
          commonMistakes: [
            'direction: column이라고 쓰는 경우 (flex-direction)',
            '방향을 바꾸면 justify-content와 align-items의 축도 바뀐다는 것을 모르는 경우',
            'flex-flow와 flex-direction을 혼동하는 경우'
          ],
          testCases: [
            {
              input: 'column 적용',
              expectedOutput: 'flex-direction: column',
              description: '아이템들이 세로로 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '방향 전환 연습',
              description: '4가지 flex-direction을 모두 적용해보세요',
              difficulty: 'easy',
              hints: [
                'row, row-reverse, column, column-reverse',
                '각각 어떻게 다른지 확인하세요'
              ],
              estimatedMinutes: 6,
              starterCode: '/* 방향 전환 연습 */\n',
              feedback: {
                perfect: '모든 방향을 완벽히 이해했어요!',
                good: 'flex-direction을 잘 사용했어요!',
                partial: '일부 방향만 맞았어요.',
                wrong: '방향 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m6',
          title: 'flex-wrap으로 줄바꿈하기',
          description: '공간이 부족할 때 자동으로 줄을 바꿔봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'flex-wrap',
          conceptExplanation: 'flex-wrap은 flex 아이템이 한 줄에 다 들어가지 않을 때 어떻게 할지 결정해요! nowrap(안 바꿈, 기본값), wrap(아래로 줄바꿈), wrap-reverse(위로 줄바꿈)가 있어요. 반응형 레이아웃을 만들 때 아주 유용해요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'flex-wrap 속성의 역할을 이해할 수 있다',
            '반응형 레이아웃에서 flex-wrap을 활용할 수 있다',
            'wrap과 nowrap의 차이를 설명할 수 있다'
          ],
          realWorldExample: '상자에 물건이 다 안 들어가면 새 상자를 가져오는 것처럼, flex-wrap은 줄을 바꿔요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      /* 아이템이 많으면 자동으로 줄바꿈하게 하세요 */
      width: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
      padding: 10px;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightpink;
      border: 2px solid hotpink;
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
      flex-wrap: wrap;
      width: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
      padding: 10px;
    }

    .item {
      width: 100px;
      height: 100px;
      background: lightpink;
      border: 2px solid hotpink;
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 flex-wrap: wrap으로 자동 줄바꿈',
            '💡 nowrap은 줄바꿈하지 않고 크기를 줄여요',
            '💡 반응형 디자인에 아주 유용해요'
          ],
          commonMistakes: [
            'word-wrap이나 text-wrap과 혼동하는 경우',
            'flex-wrap을 자식 요소에 적용하는 경우 (부모에 적용)',
            'wrap-reverse의 동작을 이해하지 못하는 경우'
          ],
          testCases: [
            {
              input: 'wrap 적용',
              expectedOutput: 'flex-wrap: wrap',
              description: '아이템들이 여러 줄로 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '반응형 카드 레이아웃',
              description: 'flex-wrap을 사용해 카드들이 자동으로 줄바꿈되게 하세요',
              difficulty: 'medium',
              hints: [
                'wrap을 사용하세요',
                '아이템 너비를 조절해보세요'
              ],
              estimatedMinutes: 8,
              starterCode: '/* 반응형 카드 만들기 */\n',
              feedback: {
                perfect: '완벽한 반응형 레이아웃이에요!',
                good: 'flex-wrap을 잘 활용했어요!',
                partial: '일부만 작동해요.',
                wrong: 'wrap 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m7',
          title: 'Grid 기초',
          description: 'CSS Grid로 2차원 레이아웃을 만들어봐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 40,
          estimatedMinutes: 30,
          concept: 'CSS Grid',
          conceptExplanation: 'CSS Grid는 행과 열을 동시에 다루는 2차원 레이아웃 시스템이에요! Flexbox는 1차원(가로 또는 세로)이지만, Grid는 가로와 세로를 동시에 제어할 수 있어요. 복잡한 레이아웃을 간단하게 만들 수 있는 강력한 도구예요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'CSS Grid의 개념과 장점을 이해할 수 있다',
            'Grid 컨테이너를 만들 수 있다',
            'Flexbox와 Grid의 차이를 설명할 수 있다'
          ],
          realWorldExample: '바둑판이나 체스판처럼 가로와 세로로 칸이 나뉘어진 구조를 만들 수 있어요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      /* Grid 컨테이너로 만드세요 */
      width: 400px;
      height: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
      gap: 10px;
      padding: 10px;
    }

    .grid-item {
      background: lavender;
      border: 2px solid purple;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 400px;
      height: 400px;
      background: #f0f0f0;
      border: 2px solid #333;
      gap: 10px;
      padding: 10px;
    }

    .grid-item {
      background: lavender;
      border: 2px solid purple;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 display: grid로 Grid 컨테이너 만들기',
            '💡 grid-template-columns로 열 개수와 크기 정하기',
            '💡 repeat()와 fr 단위를 사용하면 편해요'
          ],
          commonMistakes: [
            'display: grid-container라고 쓰는 경우 (grid가 맞음)',
            'Flexbox와 Grid를 혼동하는 경우',
            'grid-template를 빠뜨리는 경우'
          ],
          testCases: [
            {
              input: 'grid 적용',
              expectedOutput: 'display: grid',
              description: 'Grid 컨테이너가 생성되는지 확인'
            },
            {
              input: '3열 레이아웃',
              expectedOutput: 'grid-template-columns',
              description: '3개의 열이 생성되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Grid 컨테이너 만들기',
              description: '3x2 Grid를 만들어보세요',
              difficulty: 'medium',
              hints: [
                'display: grid를 사용하세요',
                'columns와 rows를 설정하세요'
              ],
              estimatedMinutes: 10,
              starterCode: '/* Grid 만들기 */\n',
              feedback: {
                perfect: 'Grid를 완벽히 이해했어요!',
                good: 'Grid 컨테이너를 잘 만들었어요!',
                partial: '일부만 맞았어요.',
                wrong: 'Grid 기본 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m8',
          title: 'grid-template으로 레이아웃 정의',
          description: 'Grid의 행과 열을 자유롭게 설정해봐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'use',
          exp: 35,
          estimatedMinutes: 30,
          concept: 'grid-template',
          conceptExplanation: 'grid-template-columns는 열의 개수와 크기를, grid-template-rows는 행의 개수와 크기를 정해요! px, %, fr(fraction), auto 등 다양한 단위를 사용할 수 있어요. repeat() 함수로 반복 패턴을 쉽게 만들 수 있답니다!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'grid-template-columns와 rows를 사용할 수 있다',
            'fr 단위의 개념을 이해하고 활용할 수 있다',
            'repeat() 함수를 사용할 수 있다'
          ],
          realWorldExample: '건물을 지을 때 방의 개수와 크기를 정하는 것처럼, Grid로 레이아웃의 구조를 설계해요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      /* 첫 번째 열: 200px, 나머지 두 열: 같은 크기로 */
      /* 3개의 행: 각각 100px */
      width: 600px;
      background: #f0f0f0;
      border: 2px solid #333;
      gap: 10px;
      padding: 10px;
    }

    .grid-item {
      background: lightcyan;
      border: 2px solid darkcyan;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">Header</div>
    <div class="grid-item">Menu</div>
    <div class="grid-item">Content</div>
    <div class="grid-item">Sidebar</div>
    <div class="grid-item">Main</div>
    <div class="grid-item">Ads</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 200px 1fr 1fr;
      grid-template-rows: repeat(3, 100px);
      width: 600px;
      background: #f0f0f0;
      border: 2px solid #333;
      gap: 10px;
      padding: 10px;
    }

    .grid-item {
      background: lightcyan;
      border: 2px solid darkcyan;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">Header</div>
    <div class="grid-item">Menu</div>
    <div class="grid-item">Content</div>
    <div class="grid-item">Sidebar</div>
    <div class="grid-item">Main</div>
    <div class="grid-item">Ads</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 grid-template-columns: 200px 1fr 1fr',
            '💡 grid-template-rows: repeat(3, 100px)',
            '💡 fr은 남은 공간을 비율로 나눠요'
          ],
          commonMistakes: [
            'fr을 px처럼 사용하는 경우',
            'columns와 rows를 혼동하는 경우',
            'repeat() 문법을 잘못 사용하는 경우'
          ],
          testCases: [
            {
              input: 'columns 설정',
              expectedOutput: 'grid-template-columns: 200px 1fr 1fr',
              description: '열이 올바르게 설정되는지 확인'
            },
            {
              input: 'rows 설정',
              expectedOutput: 'repeat(3, 100px)',
              description: '행이 올바르게 설정되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '복잡한 레이아웃 만들기',
              description: '다양한 크기의 Grid를 만들어보세요',
              difficulty: 'medium',
              hints: [
                '여러 단위를 섞어 사용하세요',
                'repeat()를 활용하세요'
              ],
              estimatedMinutes: 12,
              starterCode: '/* 레이아웃 설계 */\n',
              feedback: {
                perfect: '복잡한 레이아웃을 완벽히 만들었어요!',
                good: 'grid-template을 잘 사용했어요!',
                partial: '일부 크기가 맞지 않아요.',
                wrong: 'template 문법을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m9',
          title: 'gap으로 간격 조절하기',
          description: 'Grid 아이템 사이의 간격을 설정해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'gap',
          conceptExplanation: 'gap은 Grid나 Flex 아이템 사이의 간격을 설정해요! row-gap(행 간격), column-gap(열 간격)을 따로 설정하거나, gap으로 한번에 설정할 수 있어요. margin보다 훨씬 편리하고 깔끔해요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'gap 속성의 역할을 이해할 수 있다',
            'row-gap과 column-gap을 구분해서 사용할 수 있다',
            'margin 대신 gap을 사용하는 이유를 설명할 수 있다'
          ],
          realWorldExample: '책장에 책을 꽂을 때 책 사이의 간격을 정하는 것처럼, gap으로 요소 간격을 조절해요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      /* 가로 간격 20px, 세로 간격 30px로 설정하세요 */
      width: 500px;
      background: #f0f0f0;
      border: 2px solid #333;
      padding: 15px;
    }

    .grid-item {
      background: peachpuff;
      border: 2px solid coral;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      row-gap: 30px;
      column-gap: 20px;
      width: 500px;
      background: #f0f0f0;
      border: 2px solid #333;
      padding: 15px;
    }

    .grid-item {
      background: peachpuff;
      border: 2px solid coral;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 row-gap: 30px으로 행 간격 설정',
            '💡 column-gap: 20px으로 열 간격 설정',
            '💡 gap: 30px 20px로 한번에 설정할 수도 있어요'
          ],
          commonMistakes: [
            'grid-gap이라고 쓰는 경우 (현재는 gap 권장)',
            'gap의 순서를 헷갈리는 경우 (row column 순)',
            'margin과 gap을 혼동하는 경우'
          ],
          testCases: [
            {
              input: 'row-gap 설정',
              expectedOutput: 'row-gap: 30px',
              description: '행 간격이 올바른지 확인'
            },
            {
              input: 'column-gap 설정',
              expectedOutput: 'column-gap: 20px',
              description: '열 간격이 올바른지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'gap 활용 연습',
              description: 'gap을 사용해 깔끔한 레이아웃을 만드세요',
              difficulty: 'easy',
              hints: [
                'gap 하나로 통일된 간격을 만들 수 있어요',
                'margin 없이도 간격을 만들 수 있어요'
              ],
              estimatedMinutes: 5,
              starterCode: '/* gap 활용 */\n',
              feedback: {
                perfect: 'gap을 완벽히 활용했어요!',
                good: '간격을 잘 설정했어요!',
                partial: '일부 간격만 맞았어요.',
                wrong: 'gap 사용법을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w35-m10',
          title: '주간 프로젝트: 이미지 갤러리',
          description: 'Grid로 멋진 이미지 갤러리를 만들어봐요!',
          type: 'project',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'create',
          isKeyMission: true,
          exp: 50,
          estimatedMinutes: 45,
          concept: 'Grid 레이아웃 프로젝트',
          conceptExplanation: '이번 주에 배운 Flexbox와 Grid를 활용해서 실제 웹사이트에서 볼 수 있는 이미지 갤러리를 만들어봐요! Grid로 기본 배치를 하고, Flex로 세부 요소를 정렬하면 완벽한 레이아웃이 완성돼요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'Grid를 사용해 실제 프로젝트를 완성할 수 있다',
            'Flexbox와 Grid를 상황에 맞게 조합할 수 있다',
            '반응형 갤러리 레이아웃을 구현할 수 있다'
          ],
          realWorldExample: '인스타그램, 핀터레스트 같은 사진 공유 사이트의 이미지 배치가 바로 Grid를 사용한 거예요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }

    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .gallery-header {
      /* Flex로 헤더를 만드세요 */
      /* 제목과 버튼을 양 끝에 배치하고 세로 중앙 정렬 */
      background: white;
      padding: 20px;
      margin-bottom: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .gallery-header h1 {
      color: #333;
    }

    .view-btn {
      padding: 10px 20px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .gallery-grid {
      /* Grid로 3열 갤러리를 만드세요 */
      /* 간격은 20px */
      /* wrap을 사용해서 반응형으로 만드세요 */
    }

    .gallery-item {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
    }

    .image-placeholder {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 48px;
    }

    .item-info {
      padding: 15px;
    }

    .item-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #333;
    }

    .item-description {
      font-size: 14px;
      color: #666;
      margin-bottom: 12px;
    }

    .item-footer {
      /* Flex로 아이콘들을 배치하세요 */
      /* 요소들 사이에 간격을 균등하게 */
    }

    .icon {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #999;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="gallery-container">
    <div class="gallery-header">
      <h1>My Gallery</h1>
      <button class="view-btn">Grid View</button>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item">
        <div class="image-placeholder">🌅</div>
        <div class="item-info">
          <div class="item-title">Sunset Paradise</div>
          <div class="item-description">Beautiful sunset over the ocean</div>
          <div class="item-footer">
            <span class="icon">❤️ 125</span>
            <span class="icon">💬 23</span>
            <span class="icon">👁️ 1.2K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🏔️</div>
        <div class="item-info">
          <div class="item-title">Mountain Peak</div>
          <div class="item-description">Snowy mountain landscape</div>
          <div class="item-footer">
            <span class="icon">❤️ 89</span>
            <span class="icon">💬 12</span>
            <span class="icon">👁️ 856</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌲</div>
        <div class="item-info">
          <div class="item-title">Forest Trail</div>
          <div class="item-description">Path through the green forest</div>
          <div class="item-footer">
            <span class="icon">❤️ 234</span>
            <span class="icon">💬 45</span>
            <span class="icon">👁️ 2.1K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌊</div>
        <div class="item-info">
          <div class="item-title">Ocean Waves</div>
          <div class="item-description">Crystal clear blue water</div>
          <div class="item-footer">
            <span class="icon">❤️ 167</span>
            <span class="icon">💬 34</span>
            <span class="icon">👁️ 1.5K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌸</div>
        <div class="item-info">
          <div class="item-title">Cherry Blossoms</div>
          <div class="item-description">Spring flowers in bloom</div>
          <div class="item-footer">
            <span class="icon">❤️ 312</span>
            <span class="icon">💬 67</span>
            <span class="icon">👁️ 3.2K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌃</div>
        <div class="item-info">
          <div class="item-title">City Lights</div>
          <div class="item-description">Urban skyline at night</div>
          <div class="item-footer">
            <span class="icon">❤️ 198</span>
            <span class="icon">💬 41</span>
            <span class="icon">👁️ 1.8K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      padding: 20px;
    }

    .gallery-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .gallery-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: white;
      padding: 20px;
      margin-bottom: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .gallery-header h1 {
      color: #333;
    }

    .view-btn {
      padding: 10px 20px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .gallery-item {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
    }

    .image-placeholder {
      width: 100%;
      height: 250px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 48px;
    }

    .item-info {
      padding: 15px;
    }

    .item-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
      color: #333;
    }

    .item-description {
      font-size: 14px;
      color: #666;
      margin-bottom: 12px;
    }

    .item-footer {
      display: flex;
      justify-content: space-between;
    }

    .icon {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #999;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="gallery-container">
    <div class="gallery-header">
      <h1>My Gallery</h1>
      <button class="view-btn">Grid View</button>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item">
        <div class="image-placeholder">🌅</div>
        <div class="item-info">
          <div class="item-title">Sunset Paradise</div>
          <div class="item-description">Beautiful sunset over the ocean</div>
          <div class="item-footer">
            <span class="icon">❤️ 125</span>
            <span class="icon">💬 23</span>
            <span class="icon">👁️ 1.2K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🏔️</div>
        <div class="item-info">
          <div class="item-title">Mountain Peak</div>
          <div class="item-description">Snowy mountain landscape</div>
          <div class="item-footer">
            <span class="icon">❤️ 89</span>
            <span class="icon">💬 12</span>
            <span class="icon">👁️ 856</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌲</div>
        <div class="item-info">
          <div class="item-title">Forest Trail</div>
          <div class="item-description">Path through the green forest</div>
          <div class="item-footer">
            <span class="icon">❤️ 234</span>
            <span class="icon">💬 45</span>
            <span class="icon">👁️ 2.1K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌊</div>
        <div class="item-info">
          <div class="item-title">Ocean Waves</div>
          <div class="item-description">Crystal clear blue water</div>
          <div class="item-footer">
            <span class="icon">❤️ 167</span>
            <span class="icon">💬 34</span>
            <span class="icon">👁️ 1.5K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌸</div>
        <div class="item-info">
          <div class="item-title">Cherry Blossoms</div>
          <div class="item-description">Spring flowers in bloom</div>
          <div class="item-footer">
            <span class="icon">❤️ 312</span>
            <span class="icon">💬 67</span>
            <span class="icon">👁️ 3.2K</span>
          </div>
        </div>
      </div>

      <div class="gallery-item">
        <div class="image-placeholder">🌃</div>
        <div class="item-info">
          <div class="item-title">City Lights</div>
          <div class="item-description">Urban skyline at night</div>
          <div class="item-footer">
            <span class="icon">❤️ 198</span>
            <span class="icon">💬 41</span>
            <span class="icon">👁️ 1.8K</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`,
          hints: [
            '💡 헤더: display: flex, justify-content: space-between',
            '💡 갤러리: display: grid, grid-template-columns: repeat(3, 1fr)',
            '💡 footer: display: flex, justify-content: space-between',
            '💡 gap으로 간격을 조절하세요'
          ],
          commonMistakes: [
            'Grid와 Flex를 적절한 곳에 사용하지 않는 경우',
            'gap을 빠뜨려서 요소가 붙어있는 경우',
            '반응형을 고려하지 않는 경우'
          ],
          testCases: [
            {
              input: '헤더 레이아웃',
              expectedOutput: 'display: flex',
              description: '헤더가 올바르게 배치되는지 확인'
            },
            {
              input: '갤러리 그리드',
              expectedOutput: 'display: grid',
              description: '갤러리가 3열로 배치되는지 확인'
            },
            {
              input: '아이템 푸터',
              expectedOutput: 'justify-content: space-between',
              description: '푸터 아이콘들이 균등 배치되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '반응형 갤러리',
              description: '화면 크기에 따라 열 개수가 바뀌게 만드세요',
              difficulty: 'hard',
              hints: [
                'media query를 사용하세요',
                '태블릿은 2열, 모바일은 1열로'
              ],
              estimatedMinutes: 20,
              starterCode: '/* 반응형 갤러리 */\n',
              feedback: {
                perfect: '완벽한 갤러리 프로젝트예요!',
                good: '훌륭한 레이아웃이에요!',
                partial: '일부 기능이 부족해요.',
                wrong: '기본 레이아웃부터 다시 만들어보세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        }
      ]
    },
    {
      id: 'week-36',
      number: 36,
      title: '반응형 디자인',
      description: '모바일, 태블릿, PC 모두에서 잘 보이게 만들어요',
      missions: [
        {
          id: 'w36-m1',
          title: 'Viewport 메타 태그',
          description: '모바일에서 제대로 보이게 하는 설정을 배워요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: 'Viewport',
          conceptExplanation: 'Viewport는 사용자가 웹 페이지를 보는 화면 영역이에요! 모바일 브라우저는 기본적으로 페이지를 축소해서 보여주는데, viewport 메타 태그로 이를 조절할 수 있어요. width=device-width로 기기 화면 너비에 맞추고, initial-scale=1.0으로 확대/축소 없이 보여줄 수 있어요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'viewport 메타 태그의 역할을 이해할 수 있다',
            '모바일 최적화를 위한 기본 설정을 할 수 있다',
            'device-width와 initial-scale의 의미를 설명할 수 있다'
          ],
          realWorldExample: '스마트폰으로 웹사이트를 볼 때 글자가 너무 작거나 화면이 이상하게 보이는 경우가 있죠? viewport 설정으로 이를 해결해요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <!-- 모바일 최적화를 위한 viewport 메타 태그를 추가하세요 -->
  <title>반응형 웹사이트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f0f0f0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
    }

    h1 {
      color: #333;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>반응형 웹 디자인</h1>
    <p>이 페이지는 다양한 기기에서 최적화되어 보여요!</p>
    <p>Viewport 설정을 추가하면 모바일에서도 완벽하게 보입니다.</p>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>반응형 웹사이트</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f0f0f0;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 20px;
      border-radius: 10px;
    }

    h1 {
      color: #333;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>반응형 웹 디자인</h1>
    <p>이 페이지는 다양한 기기에서 최적화되어 보여요!</p>
    <p>Viewport 설정을 추가하면 모바일에서도 완벽하게 보입니다.</p>
  </div>
</body>
</html>`,
          hints: [
            '💡 <meta name="viewport" content="...">',
            '💡 width=device-width로 기기 너비에 맞춤',
            '💡 initial-scale=1.0으로 확대/축소 없이 표시'
          ],
          commonMistakes: [
            'viewport를 body에 넣는 경우 (head에 넣어야 함)',
            'content 속성을 빠뜨리는 경우',
            'user-scalable=no를 사용하는 경우 (접근성 문제)'
          ],
          testCases: [
            {
              input: 'viewport 설정',
              expectedOutput: 'meta name="viewport"',
              description: 'viewport 메타 태그가 있는지 확인'
            },
            {
              input: 'device-width 설정',
              expectedOutput: 'width=device-width',
              description: '너비가 올바르게 설정되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Viewport 설정하기',
              description: '완벽한 viewport 메타 태그를 작성하세요',
              difficulty: 'easy',
              hints: [
                '<head> 안에 넣으세요',
                'width와 initial-scale을 모두 포함하세요'
              ],
              estimatedMinutes: 5,
              starterCode: '<!-- viewport 메타 태그 -->\n',
              feedback: {
                perfect: '완벽한 viewport 설정이에요!',
                good: 'Viewport를 잘 설정했어요!',
                partial: '일부 속성이 빠졌어요.',
                wrong: 'Viewport 문법을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w36-m2',
          title: 'Media Query 기초',
          description: '화면 크기에 따라 스타일을 바꿔봐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'use',
          isKeyMission: true,
          exp: 40,
          estimatedMinutes: 30,
          concept: 'Media Query',
          conceptExplanation: 'Media Query는 화면 크기, 방향, 해상도 등에 따라 다른 CSS를 적용하는 기술이에요! @media (조건) { 스타일 } 형태로 사용해요. 예를 들어 @media (max-width: 768px)는 화면이 768px 이하일 때만 적용되는 스타일이에요. 반응형 디자인의 핵심 기술입니다!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'Media Query의 문법을 이해하고 사용할 수 있다',
            'max-width와 min-width의 차이를 설명할 수 있다',
            '화면 크기에 따라 레이아웃을 변경할 수 있다'
          ],
          realWorldExample: 'PC에서는 3열, 태블릿에서는 2열, 모바일에서는 1열로 보이는 웹사이트가 바로 Media Query를 사용한 거예요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f0f0f0;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .box {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    /* 태블릿 (768px 이하): 2열로 변경 */
    /* 여기에 media query 작성 */

    /* 모바일 (480px 이하): 1열로 변경 */
    /* 여기에 media query 작성 */
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div class="box">Box 6</div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f0f0f0;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .box {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    /* 태블릿 (768px 이하): 2열로 변경 */
    @media (max-width: 768px) {
      .container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* 모바일 (480px 이하): 1열로 변경 */
    @media (max-width: 480px) {
      .container {
        grid-template-columns: 1fr;
      }

      .box {
        font-size: 18px;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
    <div class="box">Box 4</div>
    <div class="box">Box 5</div>
    <div class="box">Box 6</div>
  </div>
</body>
</html>`,
          hints: [
            '💡 @media (max-width: 768px) { ... }',
            '💡 작은 화면일수록 열 개수를 줄이세요',
            '💡 여러 media query를 순서대로 사용할 수 있어요'
          ],
          commonMistakes: [
            '@media를 빠뜨리는 경우',
            'max-width와 min-width를 헷갈리는 경우',
            'media query 순서가 잘못된 경우 (큰 것부터 작은 순으로)'
          ],
          testCases: [
            {
              input: '태블릿 media query',
              expectedOutput: '@media (max-width: 768px)',
              description: '768px 이하에서 2열로 변경되는지 확인'
            },
            {
              input: '모바일 media query',
              expectedOutput: '@media (max-width: 480px)',
              description: '480px 이하에서 1열로 변경되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Media Query 실습',
              description: '다양한 breakpoint에서 레이아웃을 변경하세요',
              difficulty: 'medium',
              hints: [
                '3단계 breakpoint를 만드세요',
                '각 화면 크기에 맞게 조절하세요'
              ],
              estimatedMinutes: 12,
              starterCode: '/* Media Query 연습 */\n',
              feedback: {
                perfect: 'Media Query를 완벽히 이해했어요!',
                good: '반응형 디자인을 잘 만들었어요!',
                partial: '일부 breakpoint가 작동하지 않아요.',
                wrong: 'Media Query 문법을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w36-m3',
          title: '모바일 우선 접근법',
          description: '작은 화면부터 설계하는 방법을 배워요',
          type: 'interactive-lesson',
          difficulty: 'intermediate',
          language: 'html',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'Mobile First',
          conceptExplanation: '모바일 우선(Mobile First)은 작은 화면(모바일)을 기본으로 디자인하고, 큰 화면(태블릿, PC)으로 확장하는 방법이에요! min-width를 사용해서 "이 크기 이상에서는 이렇게"라고 추가해가는 방식이에요. 더 효율적이고 성능도 좋아요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '모바일 우선 접근법의 장점을 이해할 수 있다',
            'min-width를 사용한 media query를 작성할 수 있다',
            'Desktop First와 Mobile First의 차이를 설명할 수 있다'
          ],
          realWorldExample: '전 세계 웹 트래픽의 60% 이상이 모바일이에요! 그래서 모바일을 먼저 생각하는 게 중요해요.',
          hints: [
            '💡 기본 스타일은 모바일용으로 작성',
            '💡 min-width로 큰 화면에 추가 스타일 적용',
            '💡 모바일 → 태블릿 → PC 순서로 확장'
          ],
          conceptCards: [
            {
              title: 'Desktop First',
              description: 'PC를 기본으로 max-width로 줄여가는 방식. 예전 방법.'
            },
            {
              title: 'Mobile First',
              description: '모바일을 기본으로 min-width로 늘려가는 방식. 현대적 방법!'
            },
            {
              title: '장점',
              description: '성능 향상, 코드 간결, 모바일 사용자 우선, 점진적 개선'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Mobile First 이해하기',
              description: 'Mobile First 접근법의 핵심을 이해했는지 확인합니다',
              difficulty: 'easy',
              hints: [
                '강의 내용을 다시 읽어보세요',
                'min-width를 사용하는 이유를 생각해보세요'
              ],
              estimatedMinutes: 5,
              feedback: {
                perfect: 'Mobile First를 완벽히 이해했어요!',
                good: '개념을 잘 파악했어요!',
                partial: '기본은 이해했어요.',
                wrong: '강의를 다시 복습해보세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w36-m4',
          title: 'Breakpoint 설정하기',
          description: '화면 크기 기준점을 정해봐요',
          type: 'coding',
          difficulty: 'intermediate',
          language: 'html',
          phase: 'use',
          exp: 30,
          estimatedMinutes: 25,
          concept: 'Breakpoint',
          conceptExplanation: 'Breakpoint는 레이아웃이 바뀌는 화면 크기의 기준점이에요! 일반적으로 모바일(~576px), 태블릿(577px~768px), 작은 PC(769px~992px), 큰 PC(993px~)로 나눠요. Bootstrap 같은 프레임워크들도 비슷한 breakpoint를 사용해요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '표준 breakpoint 값들을 이해할 수 있다',
            '프로젝트에 맞는 breakpoint를 선택할 수 있다',
            'CSS 변수로 breakpoint를 관리할 수 있다'
          ],
          realWorldExample: '아이폰 SE(375px), 아이패드(768px), 맥북(1440px) 등 실제 기기 크기를 고려해서 breakpoint를 정해요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
    }

    .header {
      background: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card {
      background: white;
      border: 2px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .card h3 {
      color: #333;
      margin-bottom: 10px;
    }

    .card p {
      color: #666;
      line-height: 1.6;
    }

    /* 태블릿 (576px 이상): 2열 */
    /* 여기에 breakpoint 추가 */

    /* 작은 PC (768px 이상): 3열 */
    /* 여기에 breakpoint 추가 */

    /* 큰 PC (992px 이상): 4열 */
    /* 여기에 breakpoint 추가 */
  </style>
</head>
<body>
  <div class="header">
    <h1>반응형 카드 레이아웃</h1>
    <p>화면 크기를 조절해보세요!</p>
  </div>

  <div class="container">
    <div class="card">
      <h3>카드 1</h3>
      <p>화면 크기에 따라 열 개수가 바뀌어요</p>
    </div>
    <div class="card">
      <h3>카드 2</h3>
      <p>모바일: 1열, 태블릿: 2열</p>
    </div>
    <div class="card">
      <h3>카드 3</h3>
      <p>작은 PC: 3열, 큰 PC: 4열</p>
    </div>
    <div class="card">
      <h3>카드 4</h3>
      <p>Breakpoint를 잘 설정하면 완벽!</p>
    </div>
    <div class="card">
      <h3>카드 5</h3>
      <p>실제 기기에서 테스트해보세요</p>
    </div>
    <div class="card">
      <h3>카드 6</h3>
      <p>반응형 디자인은 필수예요!</p>
    </div>
    <div class="card">
      <h3>카드 7</h3>
      <p>사용자 경험이 중요해요</p>
    </div>
    <div class="card">
      <h3>카드 8</h3>
      <p>모든 화면에서 완벽하게!</p>
    </div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
    }

    .header {
      background: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 15px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card {
      background: white;
      border: 2px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .card h3 {
      color: #333;
      margin-bottom: 10px;
    }

    .card p {
      color: #666;
      line-height: 1.6;
    }

    /* 태블릿 (576px 이상): 2열 */
    @media (min-width: 576px) {
      .container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* 작은 PC (768px 이상): 3열 */
    @media (min-width: 768px) {
      .container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    /* 큰 PC (992px 이상): 4열 */
    @media (min-width: 992px) {
      .container {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>반응형 카드 레이아웃</h1>
    <p>화면 크기를 조절해보세요!</p>
  </div>

  <div class="container">
    <div class="card">
      <h3>카드 1</h3>
      <p>화면 크기에 따라 열 개수가 바뀌어요</p>
    </div>
    <div class="card">
      <h3>카드 2</h3>
      <p>모바일: 1열, 태블릿: 2열</p>
    </div>
    <div class="card">
      <h3>카드 3</h3>
      <p>작은 PC: 3열, 큰 PC: 4열</p>
    </div>
    <div class="card">
      <h3>카드 4</h3>
      <p>Breakpoint를 잘 설정하면 완벽!</p>
    </div>
    <div class="card">
      <h3>카드 5</h3>
      <p>실제 기기에서 테스트해보세요</p>
    </div>
    <div class="card">
      <h3>카드 6</h3>
      <p>반응형 디자인은 필수예요!</p>
    </div>
    <div class="card">
      <h3>카드 7</h3>
      <p>사용자 경험이 중요해요</p>
    </div>
    <div class="card">
      <h3>카드 8</h3>
      <p>모든 화면에서 완벽하게!</p>
    </div>
  </div>
</body>
</html>`,
          hints: [
            '💡 Mobile First: min-width 사용',
            '💡 576px, 768px, 992px breakpoint 사용',
            '💡 작은 화면부터 큰 화면 순서로'
          ],
          commonMistakes: [
            'breakpoint 순서가 잘못된 경우',
            'max-width를 사용하는 경우 (Mobile First에서는 min-width)',
            'breakpoint 값을 중복해서 사용하는 경우'
          ],
          testCases: [
            {
              input: '576px breakpoint',
              expectedOutput: '@media (min-width: 576px)',
              description: '2열로 변경되는지 확인'
            },
            {
              input: '768px breakpoint',
              expectedOutput: '@media (min-width: 768px)',
              description: '3열로 변경되는지 확인'
            },
            {
              input: '992px breakpoint',
              expectedOutput: '@media (min-width: 992px)',
              description: '4열로 변경되는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: 'Breakpoint 마스터하기',
              description: '표준 breakpoint로 완벽한 반응형을 만드세요',
              difficulty: 'medium',
              hints: [
                '4단계 breakpoint를 모두 사용하세요',
                '각 단계에서 최적의 레이아웃을 생각하세요'
              ],
              estimatedMinutes: 10,
              starterCode: '/* Breakpoint 설정 */\n',
              feedback: {
                perfect: 'Breakpoint를 완벽히 설정했어요!',
                good: '반응형 레이아웃이 잘 작동해요!',
                partial: '일부 breakpoint가 빠졌어요.',
                wrong: 'Breakpoint 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        {
          id: 'w36-m5',
          title: '반응형 이미지',
          description: '화면 크기에 맞게 이미지를 조절해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '반응형 이미지',
          conceptExplanation: '반응형 이미지는 화면 크기에 따라 자동으로 크기가 조절되는 이미지예요! max-width: 100%와 height: auto를 사용하면 부모 요소에 맞춰서 크기가 조절돼요. 큰 이미지도 작은 화면에서 잘 보이게 만들 수 있어요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            '반응형 이미지의 기본 CSS를 작성할 수 있다',
            'object-fit 속성을 이해하고 사용할 수 있다',
            '이미지 비율을 유지하는 방법을 알 수 있다'
          ],
          realWorldExample: '인스타그램이나 유튜브에서 이미지와 동영상이 화면 크기에 맞춰 자동으로 조절되는 것처럼요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f5f5f5;
    }

    .image-container {
      max-width: 800px;
      margin: 0 auto 30px;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333;
      margin-bottom: 15px;
    }

    /* 반응형 이미지 스타일을 추가하세요 */
    .responsive-img {
      /* 여기에 반응형 이미지 CSS */
    }

    /* 비율을 유지하는 컨테이너 */
    .aspect-ratio-box {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 비율 */
      background: #ddd;
      border-radius: 8px;
      overflow: hidden;
    }

    .aspect-ratio-box .img-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  </style>
</head>
<body>
  <div class="image-container">
    <h2>기본 반응형 이미지</h2>
    <div class="img-placeholder responsive-img" style="background: linear-gradient(to right, #ff6b6b, #ffa500); height: 300px; display: flex; align-items: center; justify-content: center; color: white; font-size: 36px; border-radius: 8px;">
      📸 이미지
    </div>
  </div>

  <div class="image-container">
    <h2>16:9 비율 유지</h2>
    <div class="aspect-ratio-box">
      <div class="img-placeholder">🎬</div>
    </div>
  </div>

  <div class="image-container">
    <h2>여러 이미지 갤러리</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🌅</div>
      <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🏔️</div>
      <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🌲</div>
    </div>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f5f5f5;
    }

    .image-container {
      max-width: 800px;
      margin: 0 auto 30px;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    h2 {
      color: #333;
      margin-bottom: 15px;
    }

    .responsive-img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .aspect-ratio-box {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 비율 */
      background: #ddd;
      border-radius: 8px;
      overflow: hidden;
    }

    .aspect-ratio-box .img-placeholder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  </style>
</head>
<body>
  <div class="image-container">
    <h2>기본 반응형 이미지</h2>
    <div class="img-placeholder responsive-img" style="background: linear-gradient(to right, #ff6b6b, #ffa500); height: 300px; display: flex; align-items: center; justify-content: center; color: white; font-size: 36px; border-radius: 8px;">
      📸 이미지
    </div>
  </div>

  <div class="image-container">
    <h2>16:9 비율 유지</h2>
    <div class="aspect-ratio-box">
      <div class="img-placeholder">🎬</div>
    </div>
  </div>

  <div class="image-container">
    <h2>여러 이미지 갤러리</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🌅</div>
      <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🏔️</div>
      <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); height: 150px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 36px;">🌲</div>
    </div>
  </div>
</body>
</html>`,
          hints: [
            '💡 max-width: 100%로 부모 요소보다 커지지 않게',
            '💡 height: auto로 비율 유지',
            '💡 display: block으로 하단 여백 제거'
          ],
          commonMistakes: [
            'width: 100%와 max-width: 100%를 혼동하는 경우',
            'height를 고정값으로 주는 경우 (비율이 깨짐)',
            'object-fit을 모르는 경우'
          ],
          testCases: [
            {
              input: '반응형 이미지 설정',
              expectedOutput: 'max-width: 100%',
              description: '이미지가 반응형으로 작동하는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '완벽한 반응형 이미지',
              description: '모든 화면에서 완벽하게 보이는 이미지를 만드세요',
              difficulty: 'easy',
              hints: [
                'max-width와 height를 모두 설정하세요',
                '비율을 유지하는 것이 중요해요'
              ],
              estimatedMinutes: 6,
              starterCode: '/* 반응형 이미지 */\n',
              feedback: {
                perfect: '완벽한 반응형 이미지예요!',
                good: '이미지가 잘 조절돼요!',
                partial: '일부 속성이 빠졌어요.',
                wrong: '반응형 이미지 개념을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        },
        // Due to length, I'll add missions 6-10 in the next edit
        {
          id: 'w36-m6',
          title: '반응형 폰트 크기',
          description: '화면에 맞게 글자 크기를 조절해봐요',
          type: 'coding',
          difficulty: 'beginner',
          language: 'html',
          phase: 'use',
          exp: 25,
          estimatedMinutes: 20,
          concept: '반응형 타이포그래피',
          conceptExplanation: '반응형 폰트는 화면 크기에 따라 글자 크기가 자동으로 조절돼요! vw(viewport width) 단위를 사용하거나, clamp() 함수로 최소/최대 크기를 지정할 수 있어요. 작은 화면에서도 읽기 쉽고, 큰 화면에서도 예쁘게 보이게 만들 수 있어요!',
          cstaStandard: '2-AP-17',
          learningObjectives: [
            'vw, vh 같은 viewport 단위를 이해할 수 있다',
            'clamp() 함수로 폰트 크기를 제한할 수 있다',
            '가독성을 고려한 폰트 크기를 설정할 수 있다'
          ],
          realWorldExample: '뉴욕타임스 같은 뉴스 사이트에서 제목이 화면 크기에 맞춰 자동으로 조절되는 것이 반응형 폰트예요!',
          starterCode: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f9f9f9;
    }

    .hero {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
      margin-bottom: 40px;
    }

    .hero h1 {
      /* clamp()를 사용해 24px~64px 사이로 조절하세요 */
      /* 화면 너비의 5%를 기본값으로 */
      margin: 0 0 20px 0;
    }

    .hero p {
      /* clamp()를 사용해 16px~24px 사이로 조절하세요 */
      /* 화면 너비의 2%를 기본값으로 */
      margin: 0;
      opacity: 0.9;
    }

    .content {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .content h2 {
      /* 반응형 폰트 크기 설정 */
      color: #333;
      margin-bottom: 20px;
    }

    .content p {
      font-size: 16px;
      line-height: 1.6;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>반응형 타이포그래피</h1>
    <p>화면 크기를 조절하면 글자 크기도 자동으로 변해요!</p>
  </div>

  <div class="content">
    <h2>clamp() 함수</h2>
    <p>clamp(최소값, 선호값, 최대값) 형태로 사용해요. 선호값은 보통 vw 단위를 사용하고, 최소/최대값으로 범위를 제한해요.</p>

    <h2>vw 단위</h2>
    <p>vw는 viewport width의 약자로, 화면 너비의 %를 의미해요. 1vw = 화면 너비의 1%예요.</p>

    <h2>가독성</h2>
    <p>본문은 16px 이상, 제목은 화면에 맞게 조절하되 너무 작거나 크지 않게 해요!</p>
  </div>
</body>
</html>`,
          solution: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f9f9f9;
    }

    .hero {
      text-align: center;
      padding: 60px 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 15px;
      margin-bottom: 40px;
    }

    .hero h1 {
      font-size: clamp(24px, 5vw, 64px);
      margin: 0 0 20px 0;
    }

    .hero p {
      font-size: clamp(16px, 2vw, 24px);
      margin: 0;
      opacity: 0.9;
    }

    .content {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .content h2 {
      font-size: clamp(20px, 3vw, 32px);
      color: #333;
      margin-bottom: 20px;
    }

    .content p {
      font-size: 16px;
      line-height: 1.6;
      color: #666;
    }
  </style>
</head>
<body>
  <div class="hero">
    <h1>반응형 타이포그래피</h1>
    <p>화면 크기를 조절하면 글자 크기도 자동으로 변해요!</p>
  </div>

  <div class="content">
    <h2>clamp() 함수</h2>
    <p>clamp(최소값, 선호값, 최대값) 형태로 사용해요. 선호값은 보통 vw 단위를 사용하고, 최소/최대값으로 범위를 제한해요.</p>

    <h2>vw 단위</h2>
    <p>vw는 viewport width의 약자로, 화면 너비의 %를 의미해요. 1vw = 화면 너비의 1%예요.</p>

    <h2>가독성</h2>
    <p>본문은 16px 이상, 제목은 화면에 맞게 조절하되 너무 작거나 크지 않게 해요!</p>
  </div>
</body>
</html>`,
          hints: [
            '💡 clamp(최소, 선호, 최대) 형태로 사용',
            '💡 제목: clamp(24px, 5vw, 64px)',
            '💡 설명: clamp(16px, 2vw, 24px)'
          ],
          commonMistakes: [
            'clamp() 문법을 잘못 사용하는 경우',
            'vw만 사용해서 너무 작아지거나 커지는 경우',
            '본문 폰트를 너무 작게 하는 경우 (가독성 저하)'
          ],
          testCases: [
            {
              input: '제목 폰트 크기',
              expectedOutput: 'clamp',
              description: 'clamp() 함수를 사용했는지 확인'
            }
          ],
          challenges: [
            {
              id: 'c1',
              title: '반응형 타이포그래피 마스터',
              description: '완벽한 반응형 폰트 시스템을 만드세요',
              difficulty: 'medium',
              hints: [
                'clamp()를 모든 제목에 적용하세요',
                '가독성을 최우선으로 생각하세요'
              ],
              estimatedMinutes: 8,
              starterCode: '/* 반응형 폰트 */\n',
              feedback: {
                perfect: '완벽한 타이포그래피예요!',
                good: '반응형 폰트를 잘 설정했어요!',
                partial: '일부 폰트 크기를 조정하세요.',
                wrong: 'clamp() 사용법을 다시 확인하세요.'
              }
            }
          ],
          unlocked: true,
          completed: false
        }
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

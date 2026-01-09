# 커리큘럼 개선 가이드

## 개요
국내외 100개 코딩 코스웨어 벤치마킹 결과를 바탕으로 한 커리큘럼 개선 가이드입니다.

---

## 1. 미션 유형별 필수 요소

### 1.1 visual-programming (시각적 프로그래밍)

```typescript
{
  id: '1-1-5',
  title: '로봇 첫 걸음',
  type: 'visual-programming',

  // ✅ 필수 추가 요소
  cstaStandard: '1A-AP-08',  // CSTA 표준 코드
  learningObjectives: [      // 학습 목표 (2-3개)
    '순차 실행의 개념을 이해한다',
    '명령어를 올바른 순서로 배열할 수 있다'
  ],
  realWorldExample: '엘리베이터 버튼을 누르면...', // 실생활 예시
  hints: [                    // 3단계 힌트 (💡 아이콘 포함)
    '💡 힌트 1: 로봇은 처음에 위쪽을 바라보고 있어요',
    '💡 힌트 2: 별까지 몇 칸인지 세어보세요',
    '💡 힌트 3: "앞으로" 블록을 3번 사용하면 돼요'
  ],
  commonMistakes: [           // 흔한 실수
    '블록 개수를 잘못 세는 경우',
    '로봇의 시작 방향을 고려하지 않는 경우'
  ],
  solutionSequence: ['앞으로', '앞으로', '앞으로'], // ⭐ 정답 시퀀스
  maxCommands: 5,             // 최대 명령어 수
}
```

### 1.2 coding (코딩 미션)

```typescript
{
  id: '3-17-2',
  title: '첫 번째 코드: print()',
  type: 'coding',
  language: 'python',

  // ✅ 필수 추가 요소
  cstaStandard: '1B-AP-08',
  learningObjectives: [
    'print() 함수의 기본 사용법을 익힌다',
    '문자열을 화면에 출력할 수 있다'
  ],
  realWorldExample: '카카오톡에서 메시지를 보내면 상대방 화면에 나타나는 것과 같아요.',
  starterCode: '# 아래에 print() 함수를 작성해보세요\n\n',
  solution: "print('안녕하세요!')",
  expectedOutput: '안녕하세요!',
  testCases: [                // ⭐ 테스트 케이스 (최소 1개)
    { input: '', expectedOutput: '안녕하세요!', description: '인사말 출력' }
  ],
  hints: [
    '💡 힌트 1: print()는 화면에 글자를 보여주는 함수예요',
    "💡 힌트 2: 글자는 따옴표(' 또는 \")로 감싸야 해요",
    "💡 힌트 3: print('내용') 형식으로 작성해요"
  ],
  commonMistakes: [
    '따옴표를 빼먹는 경우',
    '괄호를 닫지 않는 경우'
  ],
}
```

### 1.3 pattern-recognition (패턴 인식)

```typescript
{
  id: '1-3-2',
  title: '숫자 패턴 I',
  description: '2, 4, 6, 8, ? 다음에 올 숫자는?',
  type: 'pattern-recognition',

  // ✅ 필수 추가 요소
  cstaStandard: '1A-AP-10',
  learningObjectives: [
    '등차수열을 인식한다',
    '다음에 올 수를 예측할 수 있다'
  ],
  expectedOutput: '10',       // ⭐ 정답
  checkQuestions: [           // ⭐ 확인 질문
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
  hints: [
    '💡 힌트 1: 연속된 숫자의 차이를 계산해보세요',
    '💡 힌트 2: 4-2=2, 6-4=2, 8-6=2...',
    '💡 힌트 3: 8에 2를 더하면?'
  ],
}
```

### 1.4 drag-drop (드래그앤드롭)

```typescript
{
  id: '1-1-2',
  title: '아침 준비 알고리즘',
  type: 'drag-drop',

  // 기본 요소
  blocks: ['알람 끄기', '침대에서 일어나기', ...],
  correctBlocks: ['알람 끄기', '침대에서 일어나기', ...], // ⭐ 정답 순서

  // ✅ 추가 요소
  cstaStandard: '1A-AP-08',
  learningObjectives: [
    '순차 실행의 개념을 이해한다',
    '일상생활에서 알고리즘을 찾을 수 있다'
  ],
  realWorldExample: '레고 조립 설명서처럼 순서대로 해야 완성할 수 있어요.',
  hints: [
    '💡 힌트 1: 가장 먼저 해야 할 일은?',
    '💡 힌트 2: 순서가 바뀌면 어떻게 될까요?'
  ],
}
```

### 1.5 quiz (퀴즈)

```typescript
{
  id: 'quiz-1-1',
  title: '알고리즘 기초 퀴즈',
  questions: [
    {
      id: 'q-1-1-1',
      question: '알고리즘이란 무엇인가요?',
      options: ['컴퓨터 부품', '단계별 지시사항', '프로그래밍 언어', '게임 캐릭터'],
      correctAnswer: 1,
      explanation: '알고리즘은 문제를 해결하기 위한 단계별 지시사항입니다.' // ⭐ 해설 필수
    },
  ],
}
```

---

## 2. CSTA 표준 코드 참조

| 코드 | 레벨 | 설명 |
|------|------|------|
| 1A-AP-08 | K-2 | 알고리즘의 개념 이해 |
| 1A-AP-09 | K-2 | 순차적 알고리즘 구현 |
| 1A-AP-10 | K-2 | 패턴 인식과 추상화 |
| 1A-AP-11 | K-2 | 프로그램 디버깅 |
| 1B-AP-08 | 3-5 | 알고리즘 비교/개선 |
| 1B-AP-09 | 3-5 | 변수와 데이터 저장 |
| 1B-AP-10 | 3-5 | 반복문(루프) 사용 |
| 1B-AP-11 | 3-5 | 조건문 사용 |
| 1B-AP-12 | 3-5 | 이벤트 기반 프로그래밍 |
| 1B-AP-15 | 3-5 | 협력적 문제 해결 |

---

## 3. 힌트 시스템 가이드

### 3단계 힌트 원칙
1. **힌트 1 (약간)**: 문제 이해를 돕는 질문이나 관찰 포인트
2. **힌트 2 (중간)**: 접근 방법이나 핵심 개념 안내
3. **힌트 3 (상세)**: 거의 정답에 가까운 구체적 안내

### 예시
```typescript
hints: [
  '💡 힌트 1: 로봇이 어느 방향을 보고 있는지 확인하세요',  // 관찰
  '💡 힌트 2: 목표까지 몇 칸을 가야 하나요?',           // 분석
  '💡 힌트 3: 앞으로 3번 가면 도착해요!'              // 거의 정답
],
```

---

## 4. 테스트 케이스 작성 가이드

### 기본 원칙
- 최소 1개, 권장 3개 이상
- 정상 케이스, 경계 케이스, 에러 케이스 포함

### 예시
```typescript
// 짝수/홀수 판별
testCases: [
  { input: '4', expectedOutput: '4은(는) 짝수입니다', description: '양수 짝수' },
  { input: '7', expectedOutput: '7은(는) 홀수입니다', description: '양수 홀수' },
  { input: '0', expectedOutput: '0은(는) 짝수입니다', description: '0 처리' },
],

// 덧셈
testCases: [
  { input: '', expectedOutput: '8', description: '3+5 계산' },
],
```

---

## 5. 실생활 예시 작성 가이드

### 좋은 예시의 조건
- 초등학생이 공감할 수 있는 상황
- 개념과 직접적으로 연결
- 짧고 명확한 설명

### 카테고리별 예시

| 개념 | 실생활 예시 |
|------|------------|
| 순차 실행 | 레시피 따라 요리하기, 레고 조립 설명서 |
| 반복 | 계단 오르기, 줄넘기 100번 |
| 조건문 | 비오면 우산, 아니면 안 가져감 |
| 변수 | 점수판에 숫자 바꾸기, 저금통 |
| 함수 | 자판기 버튼 (콜라 버튼 = 콜라 나옴) |
| 디버깅 | 퍼즐 맞추다 틀린 조각 찾기 |

---

## 6. 개선 우선순위

### P0 (필수)
- [ ] 모든 visual-programming에 solutionSequence 추가
- [ ] 모든 coding에 testCases 추가
- [ ] 모든 quiz에 explanation 추가

### P1 (권장)
- [ ] 모든 미션에 cstaStandard 추가
- [ ] 모든 미션에 learningObjectives 추가
- [ ] 모든 미션에 3단계 힌트 적용

### P2 (선택)
- [ ] realWorldExample 추가
- [ ] commonMistakes 추가
- [ ] extensionActivities 추가

---

## 7. 개선 적용 체크리스트

### Unit 1 (컴퓨팅 사고력)
- [x] Week 1: 알고리즘 입문 (미션 1-5, 1-6, 1-7, 1-8 개선 완료)
- [x] Week 2: 순차 실행 심화 (미션 2-1, 2-2, 2-3 개선 완료)
- [x] Week 3: 패턴 인식 (미션 3-2 개선 완료)
- [ ] Week 4-8: 동일 패턴 적용 필요

### Unit 2 (블록 코딩)
- [ ] Week 9-16: solutionSequence 추가 필요

### Unit 3 (Python 기초)
- [x] Week 17: print() (미션 17-6 개선 완료)
- [ ] Week 18-24: testCases 추가 필요

### Unit 4-9
- [ ] 동일 패턴 적용 필요

---

## 8. 참고 자료

### 국내 코스웨어 (50개)
- 엔트리, 플레이엔트리, 스크래치 한글판, Code.org 한글
- 구름EDU, 프로그래머스, 백준, 코드잇, 인프런
- 이솦(EBS SW), PlaySW, 온라인코딩파티
- 삼성 주니어SW아카데미, SSAFY, 부스트캠프
- 디랩, 씨큐브코딩, 잼코딩 등

### 국외 코스웨어 (50개)
- Scratch, Code.org, Blockly, Tynker, Kodable
- Codecademy, freeCodeCamp, Khan Academy, Replit
- CodeCombat, CodinGame, CodeHS, Brilliant
- micro:bit, Arduino, Raspberry Pi
- Swift Playgrounds, MIT App Inventor
- Alice, Greenfoot, CS50 등

### 교육 표준
- CSTA K-12 Computer Science Standards (2017)
- COS/COS Pro 시험 기준 (YBM)
- 한국 2022 개정 교육과정 정보 교과

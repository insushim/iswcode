# Sample Challenges Showcase

이 문서는 각 Unit에서 추가된 연습문제(challenges)의 샘플을 보여줍니다.

## Unit 1: 컴퓨팅 사고력 (Interactive Lesson)

### Mission: "알고리즘이란 무엇일까?"

**Challenge 1 (Easy)**
```typescript
{
  id: 'c1',
  title: '알고리즘의 정의 이해하기',
  description: '알고리즘이란 무엇일까?에서 배운 알고리즘의 정의의 핵심을 확인합니다.',
  difficulty: 'easy',
  hints: ['강의 내용을 다시 읽어보세요', '핵심 개념에 집중하세요'],
  estimatedMinutes: 3,
  feedback: {
    perfect: '완벽해요! 개념을 정확히 이해했어요.',
    good: '잘했어요! 이해도가 높아요.',
    partial: '기본은 이해했어요. 세부 사항을 확인하세요.',
    wrong: '강의를 다시 복습한 후 시도해보세요.'
  }
}
```

**Challenge 5 (Medium)**
```typescript
{
  id: 'c5',
  title: '응용 문제',
  description: '개념을 활용한 응용 문제를 풉니다.',
  difficulty: 'medium',
  hints: [
    '기본 개념을 먼저 떠올리세요',
    '단계별로 접근하세요',
    '비슷한 문제를 생각해보세요'
  ],
  estimatedMinutes: 8,
  feedback: {
    perfect: '응용력이 뛰어나요!',
    good: '잘 응용했어요!',
    partial: '접근은 좋아요. 마무리를 다듬어보세요.',
    wrong: '기본 개념부터 다시 확인하세요.'
  }
}
```

**Challenge 10 (Hard)**
```typescript
{
  id: 'c10',
  title: '마스터 챌린지',
  description: '최종 마스터 레벨 문제입니다.',
  difficulty: 'hard',
  hints: [
    '지금까지 배운 모든 것을 활용하세요',
    '천천히, 꼼꼼하게 접근하세요',
    '막히면 쉬었다가 다시 시도하세요'
  ],
  estimatedMinutes: 20,
  feedback: {
    perfect: '전설이에요! 완벽한 마스터예요!',
    good: '대단해요! 최고 난이도를 해결했어요!',
    partial: '거의 다 왔어요! 조금만 더 노력하세요.',
    wrong: '최고 난이도예요. 이전 문제를 다시 풀어보고 도전하세요.'
  }
}
```

## Unit 2: 블록 코딩 (Drag-Drop)

### Mission: "아침 준비 알고리즘"

**Challenge 1 (Easy)**
```typescript
{
  id: 'c1',
  title: '순서 맞추기 연습',
  description: '간단한 순서를 맞춰봅니다.',
  difficulty: 'easy',
  hints: ['논리적 순서를 생각하세요', '앞뒤 관계를 파악하세요'],
  estimatedMinutes: 3,
  feedback: {
    perfect: '순서를 완벽하게 맞췄어요!',
    good: '논리적으로 잘 배열했어요!',
    partial: '일부 순서가 틀렸어요.',
    wrong: '처음부터 끝까지 흐름을 생각하세요.'
  }
}
```

**Challenge 6 (Medium)**
```typescript
{
  id: 'c6',
  title: '조건부 순서',
  description: '조건에 따라 달라지는 순서를 배열합니다.',
  difficulty: 'medium',
  hints: ['조건을 먼저 확인하세요', '경우에 따른 차이를 파악하세요'],
  estimatedMinutes: 8,
  feedback: {
    perfect: '조건부 순서를 완벽히 이해했어요!',
    good: '조건을 잘 고려했어요!',
    partial: '조건 처리에 실수가 있어요.',
    wrong: '각 조건별로 나눠서 생각하세요.'
  }
}
```

## Unit 3: Python 기초 (Coding)

### Mission: "내 첫 Python 코드: Hello!"

**Challenge 1 (Easy)**
```typescript
{
  id: 'c1',
  title: '기본 실습',
  description: 'print() 함수의 기본 문법을 연습합니다.',
  difficulty: 'easy',
  hints: ['제시된 예제를 따라하세요', '문법을 정확히 지키세요'],
  estimatedMinutes: 3,
  starterCode: '# print() 함수 기본 연습\n',
  feedback: {
    perfect: '완벽한 코드예요!',
    good: '문법을 잘 이해했어요!',
    partial: '코드는 맞는데 일부 수정이 필요해요.',
    wrong: '문법을 다시 확인하세요.'
  }
}
```

**Challenge 4 (Medium)**
```typescript
{
  id: 'c4',
  title: '실용 코드 작성',
  description: '실제로 사용할 수 있는 코드를 작성합니다.',
  difficulty: 'medium',
  hints: ['문제를 단계별로 나누세요', '이전 예제를 참고하세요'],
  estimatedMinutes: 7,
  starterCode: '# 실용적인 코드를 작성하세요\n',
  feedback: {
    perfect: '실용적인 코드예요!',
    good: '잘 작동하는 코드예요!',
    partial: '기능은 하는데 개선이 필요해요.',
    wrong: '단계별로 다시 접근해보세요.'
  }
}
```

**Challenge 8 (Hard)**
```typescript
{
  id: 'c8',
  title: '프로젝트 1단계',
  description: '작은 프로젝트의 첫 단계를 구현합니다.',
  difficulty: 'hard',
  hints: ['전체 구조를 먼저 설계하세요', '한 기능씩 완성하세요'],
  estimatedMinutes: 15,
  starterCode: '# 프로젝트 시작\n',
  feedback: {
    perfect: '프로젝트를 훌륭하게 시작했어요!',
    good: '좋은 출발이에요!',
    partial: '기본 구조는 맞아요. 기능을 추가하세요.',
    wrong: '프로젝트 요구사항을 다시 확인하세요.'
  }
}
```

**Challenge 10 (Hard)**
```typescript
{
  id: 'c10',
  title: '최종 프로젝트',
  description: '완성된 프로젝트를 만듭니다.',
  difficulty: 'hard',
  hints: [
    '모든 요구사항을 확인하세요',
    '테스트를 해보세요',
    '코드를 정리하세요'
  ],
  estimatedMinutes: 25,
  starterCode: '# 최종 프로젝트\n',
  feedback: {
    perfect: '완벽한 프로젝트예요! 축하합니다!',
    good: '훌륭한 프로젝트예요!',
    partial: '거의 완성이에요! 마무리하세요.',
    wrong: '요구사항을 하나씩 체크하며 완성하세요.'
  }
}
```

## Unit 5: HTML/CSS (Coding - Web)

### Mission: "첫 웹페이지 만들기"

**Challenge 2 (Easy)**
```typescript
{
  id: 'c2',
  title: '코드 수정하기',
  description: '주어진 HTML 코드를 수정하여 올바르게 작동하게 만듭니다.',
  difficulty: 'easy',
  hints: ['에러 메시지를 잘 읽으세요', '태그 문법 오류를 찾으세요'],
  estimatedMinutes: 4,
  starterCode: '<!-- 이 코드를 수정하세요 -->\n',
  feedback: {
    perfect: '버그를 완벽하게 수정했어요!',
    good: '오류를 잘 찾았어요!',
    partial: '일부 오류만 수정했어요.',
    wrong: '에러 메시지를 확인하며 다시 시도하세요.'
  }
}
```

**Challenge 7 (Medium)**
```typescript
{
  id: 'c7',
  title: '최적화 도전',
  description: '같은 기능을 더 효율적인 HTML/CSS로 작성합니다.',
  difficulty: 'medium',
  hints: ['불필요한 태그를 제거하세요', '더 간결한 방법을 찾으세요'],
  estimatedMinutes: 10,
  starterCode: '<!-- 코드를 최적화하세요 -->\n',
  feedback: {
    perfect: '최적화를 완벽하게 했어요!',
    good: '효율적인 코드예요!',
    partial: '좋아졌지만 더 개선할 수 있어요.',
    wrong: '기본 기능부터 확인하세요.'
  }
}
```

## Unit 6: JavaScript (Coding)

### Mission: "변수로 데이터 저장하기"

**Challenge 3 (Easy)**
```typescript
{
  id: 'c3',
  title: '코드 완성하기',
  description: '빈 칸을 채워 변수 선언 코드를 완성합니다.',
  difficulty: 'easy',
  hints: ['빈 칸에 들어갈 내용을 추론하세요', '전체 흐름을 파악하세요'],
  estimatedMinutes: 5,
  starterCode: '// 빈 칸을 채우세요\n',
  feedback: {
    perfect: '코드를 완벽하게 완성했어요!',
    good: '논리적으로 잘 채웠어요!',
    partial: '일부 빈 칸이 틀렸어요.',
    wrong: '코드의 흐름을 다시 생각해보세요.'
  }
}
```

**Challenge 9 (Hard)**
```typescript
{
  id: 'c9',
  title: '프로젝트 2단계',
  description: '프로젝트에 추가 기능을 구현합니다.',
  difficulty: 'hard',
  hints: ['기존 코드를 활용하세요', '새 기능을 통합하세요'],
  estimatedMinutes: 18,
  starterCode: '// 기능 추가\n',
  feedback: {
    perfect: '모든 기능이 완벽해요!',
    good: '기능이 잘 작동해요!',
    partial: '일부 기능이 미완성이에요.',
    wrong: '한 기능씩 차근차근 추가하세요.'
  }
}
```

## 퀴즈 형식 미션 (Quiz)

**Challenge 1 (Easy)**
```typescript
{
  id: 'c1',
  title: '기본 개념 퀴즈',
  description: '핵심 개념을 확인하는 퀴즈입니다.',
  difficulty: 'easy',
  hints: ['강의 내용을 복습하세요'],
  estimatedMinutes: 2,
  feedback: {
    perfect: '개념을 완벽히 이해했어요!',
    good: '잘 알고 있어요!',
    partial: '일부 개념을 다시 확인하세요.',
    wrong: '강의를 다시 복습하세요.'
  }
}
```

**Challenge 7 (Hard)**
```typescript
{
  id: 'c7',
  title: '심화 퀴즈',
  description: '더 깊은 이해를 요구하는 퀴즈입니다.',
  difficulty: 'hard',
  hints: ['단순 암기가 아닌 이해가 필요해요', '깊이 생각하세요'],
  estimatedMinutes: 8,
  feedback: {
    perfect: '심화 이해가 완벽해요!',
    good: '깊이 있게 이해했어요!',
    partial: '기본은 맞는데 심화가 부족해요.',
    wrong: '개념을 더 깊이 공부하세요.'
  }
}
```

## 난이도 분포 (전체)

### Easy Challenges (c1-c3)
- **목적**: 기본 개념 이해 및 연습
- **소요 시간**: 2-5분
- **특징**: 명확한 힌트, 단계별 안내
- **예시**: 기본 실습, 용어 정리, 간단한 순서 맞추기

### Medium Challenges (c4-c7)
- **목적**: 개념 응용 및 통합
- **소요 시간**: 6-12분
- **특징**: 문제 해결 능력, 창의성 요구
- **예시**: 실용 코드 작성, 조건부 문제, 비교 분석

### Hard Challenges (c8-c10)
- **목적**: 종합 이해 및 마스터
- **소요 시간**: 15-25분
- **특징**: 복잡한 문제, 프로젝트 수준
- **예시**: 최종 프로젝트, 최적화, 마스터 챌린지

## 공통 특징

### 1. 명확한 피드백
모든 챌린지는 4가지 수준의 피드백 제공:
- **perfect**: 완벽한 답
- **good**: 좋은 답
- **partial**: 부분 정답
- **wrong**: 오답

### 2. 유용한 힌트
- Easy: 2개 힌트
- Medium: 2-3개 힌트
- Hard: 3-4개 힌트

### 3. 현실적인 시간 예측
- 실제 학생이 문제를 푸는 데 걸리는 시간 반영
- Easy: 2-5분
- Medium: 6-12분
- Hard: 15-25분

### 4. 교육적 가치
- 단순 반복이 아닌 의미 있는 연습
- 개념 이해에서 응용까지 점진적 발전
- 실제 프로그래밍 스킬 향상에 기여

---

*이 샘플들은 전체 4,300개 챌린지 중 일부입니다.*
*각 미션마다 10개의 유사한 품질의 챌린지가 포함되어 있습니다.*

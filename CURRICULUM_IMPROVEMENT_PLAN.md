# 코딩교육 커리큘럼 전면 개편 계획

## 현재 상태 분석

### 인프라 (이미 구축됨 - 우수)
- **Python 실행**: Pyodide 기반 브라우저 내 실행 환경
- **JavaScript 실행**: 네이티브 실행 환경
- **HTML/CSS 미리보기**: iframe 기반 Live Preview
- **코드 에디터**: Monaco Editor with 구문 강조, 자동완성
- **테스트 케이스 실행**: 자동 채점 시스템
- **AI 힌트 시스템**: Gemini 기반 스마트 힌트

### 문제점

#### 1. 코드 실행 환경 미활용 (치명적)
- 대부분의 미션이 `type='interactive-lesson'` (개념 카드만 표시)
- `type='coding'` 미션은 전체의 30% 미만
- 실제 코드를 작성하고 실행해보는 경험 부족

#### 2. 게임화가 학습을 대체 (위험)
- 패턴 매칭, 드래그앤드롭 게임이 코딩 학습을 대체
- 게임을 완료해도 실제 코딩 능력은 향상되지 않음
- 개념만 이해하고 적용 능력은 부족

#### 3. Use-Modify-Create 진행 부재
- 바로 "Create"로 넘어감
- 기존 코드를 읽고 실행해보는 "Use" 단계 없음
- 코드를 수정해보는 "Modify" 단계 없음

#### 4. 프로젝트 기반 학습 부족
- 실제 프로젝트는 Unit 7 (45주차)부터
- 44주간 프로젝트 없이 개념만 학습
- 학생들이 "왜 배우는지" 동기부여 부족

#### 5. 마스터리 기반 진행 미구현
- 이해 없이 다음으로 넘어갈 수 있음
- 핵심 개념을 놓치고 진행 가능

---

## 글로벌 베스트 프랙티스 (벤치마킹)

### Code.org
- **Use-Modify-Create 진행**: 기존 코드 실행 → 수정 → 새로 작성
- **나선형 커리큘럼**: 같은 개념을 점점 깊게 재방문
- **언플러그드 + 온라인**: 컴퓨터 없이 → 컴퓨터로 적용

### Scratch (MIT)
- **프로젝트 중심**: 첫 날부터 무언가를 만듦
- **리믹스 문화**: 남의 코드를 수정하며 학습
- **공유 커뮤니티**: 만든 것을 보여주고 피드백

### CSTA K-12 Standards
- **학년별 목표 명확**: K-2, 3-5, 6-8, 9-12
- **컴퓨팅 사고력 + 코딩 병행**
- **포트폴리오 구축**

### 프리미엄 플랫폼 (Codecademy, freeCodeCamp)
- **즉각적 피드백**: 코드 실행 결과 즉시 확인
- **프로젝트 기반 인증**: 실제 프로젝트 완성으로 수료
- **커뮤니티 지원**: 질문하고 도움받을 수 있음

---

## 개편 원칙

### 1. 실제 코딩이 50% 이상
- 모든 주차에 최소 3개의 `type='coding'` 미션
- `interactive-lesson`은 개념 도입에만 사용

### 2. Use-Modify-Create 진행
- **Use (15%)**: 완성된 코드 실행, 결과 관찰
- **Modify (35%)**: 부분 수정, 값 변경, 기능 추가
- **Create (50%)**: 처음부터 작성

### 3. 주간 미니 프로젝트
- 매주 마지막 미션은 작은 프로젝트
- 그 주에 배운 것을 활용한 실용적 결과물

### 4. 마스터리 게이트
- 핵심 미션 80% 이상 통과해야 다음 주차 해금
- "완벽" 점수 없어도 되지만, "통과"는 필수

---

## Unit별 개편 계획

### Unit 1: 컴퓨팅 사고력 (8주)

#### 현재 문제
- `interactive-lesson`과 `drag-drop`만 존재
- 실제 코드 작성 없음

#### 개편 방향
- **Week 1-2**: 알고리즘 + Pseudocode 작성
- **Week 3-4**: 패턴 인식 + 간단한 Python print() 실습
- **Week 5-6**: 조건문 개념 + 간단한 if문 Python 실습
- **Week 7-8**: 반복문 개념 + 간단한 for문 Python 실습

#### 추가할 미션 유형
```typescript
// Use 단계: 완성된 코드 실행
{
  type: 'coding',
  starterCode: `# 이 코드를 실행해보세요!
print("안녕하세요!")
print("저는 파이썬입니다")`,
  instructions: '▶ 실행 버튼을 눌러 결과를 확인하세요',
  expectedOutput: '안녕하세요!\n저는 파이썬입니다',
  phase: 'use'
}

// Modify 단계: 일부 수정
{
  type: 'coding',
  starterCode: `# "안녕"을 "반가워"로 바꿔보세요
print("안녕")`,
  instructions: '"안녕"을 "반가워"로 바꾸고 실행하세요',
  expectedOutput: '반가워',
  phase: 'modify'
}

// Create 단계: 직접 작성
{
  type: 'coding',
  starterCode: '# 여러분의 이름을 출력하세요\n',
  instructions: 'print() 함수를 사용해 여러분의 이름을 출력하세요',
  expectedOutput: null, // 자유 응답
  phase: 'create'
}
```

### Unit 2: 블록 코딩 (8주)

#### 현재 문제
- `visual-programming`만 존재
- 실제 Scratch/블록 에디터 없음

#### 개편 방향
- Blockly 기반 블록 에디터 컴포넌트 추가
- 블록 코드 → Python 코드 변환 시각화
- 매주 블록으로 만든 프로젝트 1개

### Unit 3-4: Python (14주)

#### 현재 상태
- `type='coding'` 미션 존재
- starterCode, solution, expectedOutput 정의됨

#### 개편 방향
- 모든 미션에 Use → Modify → Create 3단계 적용
- 주간 미니 프로젝트 추가
  - Week 17: 자기소개 프로그램
  - Week 18: 계산기
  - Week 19: 숫자 맞히기 게임
  - Week 20: 성적 계산기
  - ...

### Unit 5-6: HTML/CSS/JS (14주)

#### 개편 방향
- Live Preview iframe 적극 활용
- Split 뷰: 코드 | 미리보기
- 매주 실제 웹페이지 1개 완성

### Unit 7-9: 프로젝트 (12주)

#### 현재 상태
- 이미 프로젝트 중심 (양호)

#### 개편 방향
- 이전 유닛에서 미니 프로젝트를 해왔기 때문에 자연스러운 연결
- 포트폴리오 자동 생성 기능 추가

---

## 기술 구현 계획

### 1. 미션 스키마 확장
```typescript
interface Mission {
  // 기존 필드
  id: string;
  type: 'coding' | 'interactive-lesson' | ...;

  // 새로운 필드
  phase?: 'use' | 'modify' | 'create';  // Use-Modify-Create 단계
  prerequisiteMissions?: string[];  // 선행 미션 (마스터리 게이트)
  isKeyMission?: boolean;  // 핵심 미션 여부
  projectOutput?: {  // 프로젝트 결과물
    type: 'web' | 'python' | 'image';
    saveToPortfolio: boolean;
  };
}
```

### 2. 마스터리 게이트 시스템
```typescript
// progressStore에 추가
const canUnlockWeek = (weekId: string): boolean => {
  const previousWeek = getPreviousWeek(weekId);
  if (!previousWeek) return true;

  const keyMissions = previousWeek.missions.filter(m => m.isKeyMission);
  const completedKey = keyMissions.filter(m => isCompleted(m.id));

  return completedKey.length / keyMissions.length >= 0.8;
}
```

### 3. 포트폴리오 시스템
```typescript
interface PortfolioItem {
  id: string;
  missionId: string;
  createdAt: Date;
  type: 'web' | 'python' | 'image';
  title: string;
  code: string;
  preview?: string;  // 스크린샷 URL
}
```

---

## 즉시 실행 계획

### Phase 1: Unit 1 개편 (오늘)
1. 각 주차에 Use → Modify → Create 미션 3개씩 추가
2. 주간 미니 프로젝트 미션 추가
3. 핵심 미션(isKeyMission) 마킹

### Phase 2: Unit 2-4 개편
1. Python 유닛에 Use-Modify-Create 적용
2. 블록 코딩 유닛에 Blockly 연동 검토

### Phase 3: Unit 5-6 개편
1. HTML/CSS/JS Live Preview 강화
2. 웹 프로젝트 미니 과제 추가

### Phase 4: 시스템 기능
1. 마스터리 게이트 구현
2. 포트폴리오 시스템 구현
3. 진행률 대시보드 개선

---

## 성공 지표

### 학습 효과
- [ ] 실제 코드 작성 미션 비율 50% 이상
- [ ] 모든 주차에 프로젝트 미션 포함
- [ ] Use-Modify-Create 3단계 진행

### 사용자 경험
- [ ] 첫 코드 실행까지 10분 이내
- [ ] 주간 완료 시 눈에 보이는 결과물
- [ ] 포트폴리오에 프로젝트 10개 이상 수집

### 학습 지속성
- [ ] 주간 완료율 70% 이상
- [ ] 마스터리 게이트 통과율 80% 이상

---

## 결론

현재 커리큘럼은 **콘텐츠 양은 충분**하지만 **실제 코딩 실습 비율이 너무 낮습니다**.

코드 실행 인프라(Pyodide, Monaco Editor, 테스트 러너)는 이미 우수하게 구축되어 있으므로,
커리큘럼 데이터만 개선하면 "돈 주고 살 만한" 교육 콘텐츠가 될 수 있습니다.

핵심 개편:
1. **게임 → 코딩**: interactive-lesson, drag-drop 줄이고 coding 미션 늘리기
2. **Use-Modify-Create**: 3단계 진행으로 점진적 학습
3. **주간 프로젝트**: 매주 실용적 결과물 완성
4. **마스터리 게이트**: 핵심 미션 통과 없이 진행 불가

이 계획을 실행하면 Code.org, Scratch, Codecademy 수준의 교육 품질을 달성할 수 있습니다.

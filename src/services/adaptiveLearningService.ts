// 적응형 학습 서비스 - 수준별 난이도 자동 조절

import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export interface LearnerProfile {
  id: string;
  masteryLevels: Record<string, number>; // 개념별 숙달도 0-100
  currentZPD: ZoneOfProximalDevelopment;
  learningVelocity: number; // 학습 속도 지수
  engagementScore: number; // 참여도 0-100
  frustrationThreshold: number; // 좌절 임계점
  optimalChallengeLevel: number; // 최적 도전 수준 0.5-2.0
  totalMissionsCompleted: number;
  averageAccuracy: number;
  lastUpdated: string;
}

export interface ZoneOfProximalDevelopment {
  knownConcepts: string[]; // 이미 아는 개념
  learningConcepts: string[]; // 배우고 있는 개념
  nextConcepts: string[]; // 다음에 배울 개념
}

export interface PerformanceMetrics {
  missionId: string;
  attempts: number;
  timeSpent: number; // 초
  hintsUsed: number;
  success: boolean;
  accuracy: number; // 0-100
  concept: string;
}

export interface DifficultyAdjustment {
  action: 'increase' | 'maintain' | 'decrease';
  factor: number; // 0.5 ~ 2.0
  reason: string;
  nextMissionRecommendation: string;
  scaffoldNeeded: boolean;
}

export interface Scaffold {
  type: 'hint' | 'partial-solution' | 'worked-example' | 'peer-code' | 'video';
  content: string;
  fadeOutAfter: number; // 몇 번 성공 후 제거
  priority: number;
}

// 기본 학습자 프로필 생성
export function createDefaultProfile(userId: string): LearnerProfile {
  return {
    id: userId,
    masteryLevels: {},
    currentZPD: {
      knownConcepts: [],
      learningConcepts: [],
      nextConcepts: ['변수', '자료형', '출력']
    },
    learningVelocity: 1.0,
    engagementScore: 50,
    frustrationThreshold: 5, // 5번 실패 시 좌절
    optimalChallengeLevel: 1.0,
    totalMissionsCompleted: 0,
    averageAccuracy: 0,
    lastUpdated: new Date().toISOString()
  };
}

// Firebase에서 프로필 로드
export async function loadLearnerProfile(userId: string): Promise<LearnerProfile> {
  try {
    const docRef = doc(db, 'learnerProfiles', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as LearnerProfile;
    } else {
      const defaultProfile = createDefaultProfile(userId);
      await setDoc(docRef, defaultProfile);
      return defaultProfile;
    }
  } catch (error) {
    console.error('프로필 로드 오류:', error);
    return createDefaultProfile(userId);
  }
}

// 프로필 업데이트
export async function updateLearnerProfile(
  userId: string,
  updates: Partial<LearnerProfile>
): Promise<void> {
  try {
    const docRef = doc(db, 'learnerProfiles', userId);
    await updateDoc(docRef, {
      ...updates,
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('프로필 업데이트 오류:', error);
  }
}

// 성과 기반 프로필 업데이트
export function updateProfileWithPerformance(
  profile: LearnerProfile,
  performance: PerformanceMetrics
): LearnerProfile {
  const updated = { ...profile };

  // 숙달도 업데이트
  const currentMastery = updated.masteryLevels[performance.concept] || 0;
  let masteryChange = 0;

  if (performance.success) {
    // 성공 시 숙달도 증가
    masteryChange = Math.max(5, 20 - performance.attempts * 3 - performance.hintsUsed * 5);
    masteryChange = Math.min(masteryChange, 100 - currentMastery);
  } else {
    // 실패 시 약간 감소 (최소 0)
    masteryChange = -Math.min(5, currentMastery);
  }

  updated.masteryLevels[performance.concept] = Math.max(
    0,
    Math.min(100, currentMastery + masteryChange)
  );

  // ZPD 업데이트
  if (updated.masteryLevels[performance.concept] >= 80) {
    // 숙달 개념으로 이동
    if (!updated.currentZPD.knownConcepts.includes(performance.concept)) {
      updated.currentZPD.knownConcepts.push(performance.concept);
      updated.currentZPD.learningConcepts = updated.currentZPD.learningConcepts.filter(
        c => c !== performance.concept
      );
    }
  } else if (updated.masteryLevels[performance.concept] >= 30) {
    // 학습 중 개념으로 이동
    if (!updated.currentZPD.learningConcepts.includes(performance.concept)) {
      updated.currentZPD.learningConcepts.push(performance.concept);
      updated.currentZPD.nextConcepts = updated.currentZPD.nextConcepts.filter(
        c => c !== performance.concept
      );
    }
  }

  // 학습 속도 업데이트
  const expectedTime = 10 * 60; // 예상 10분
  const speedRatio = expectedTime / Math.max(performance.timeSpent, 60);
  updated.learningVelocity = updated.learningVelocity * 0.8 + speedRatio * 0.2;
  updated.learningVelocity = Math.max(0.5, Math.min(2.0, updated.learningVelocity));

  // 참여도 업데이트
  if (performance.success) {
    updated.engagementScore = Math.min(100, updated.engagementScore + 5);
  } else if (performance.attempts > updated.frustrationThreshold) {
    updated.engagementScore = Math.max(0, updated.engagementScore - 10);
  }

  // 통계 업데이트
  updated.totalMissionsCompleted++;
  updated.averageAccuracy =
    (updated.averageAccuracy * (updated.totalMissionsCompleted - 1) + performance.accuracy) /
    updated.totalMissionsCompleted;

  return updated;
}

// 난이도 조절 알고리즘
export function adjustDifficulty(
  performance: PerformanceMetrics,
  profile: LearnerProfile
): DifficultyAdjustment {
  const mastery = profile.masteryLevels[performance.concept] || 0;

  // Flow 이론 기반 난이도 조절
  // 너무 쉬우면 지루함, 너무 어려우면 불안함
  // 최적: 현재 능력보다 약간 어려운 수준

  let action: 'increase' | 'maintain' | 'decrease' = 'maintain';
  let factor = 1.0;
  let reason = '';
  let scaffoldNeeded = false;

  // 성공했고 시도 횟수가 적으면 난이도 증가
  if (performance.success && performance.attempts <= 2 && performance.hintsUsed === 0) {
    action = 'increase';
    factor = 1.2 + profile.learningVelocity * 0.1;
    reason = '쉽게 풀었네요! 더 도전적인 문제를 드릴게요.';
  }
  // 성공했지만 많이 시도했으면 유지
  else if (performance.success && performance.attempts <= 5) {
    action = 'maintain';
    factor = 1.0;
    reason = '좋은 속도예요! 비슷한 난이도로 계속할게요.';
  }
  // 성공했지만 너무 오래 걸렸으면 약간 감소
  else if (performance.success && performance.attempts > 5) {
    action = 'decrease';
    factor = 0.9;
    reason = '잘 해냈어요! 조금 쉬운 문제로 자신감을 키워볼까요?';
    scaffoldNeeded = true;
  }
  // 실패했으면 감소
  else if (!performance.success) {
    action = 'decrease';
    factor = 0.7;
    reason = '괜찮아요! 기초를 더 다지고 다시 도전해요.';
    scaffoldNeeded = true;
  }

  // 좌절 감지
  if (performance.attempts >= profile.frustrationThreshold) {
    action = 'decrease';
    factor = 0.6;
    reason = '잠깐 쉬어가요. 더 쉬운 문제부터 다시 시작해볼까요?';
    scaffoldNeeded = true;
  }

  // 최적 도전 수준 업데이트
  const newOptimalLevel = profile.optimalChallengeLevel * 0.8 + factor * 0.2;

  return {
    action,
    factor: Math.max(0.5, Math.min(2.0, newOptimalLevel)),
    reason,
    nextMissionRecommendation: getRecommendedMission(profile, action),
    scaffoldNeeded
  };
}

// 추천 미션 결정
function getRecommendedMission(
  profile: LearnerProfile,
  action: 'increase' | 'maintain' | 'decrease'
): string {
  const { learningConcepts, nextConcepts, knownConcepts } = profile.currentZPD;

  if (action === 'decrease') {
    // 복습 미션 추천
    const weakestConcept = Object.entries(profile.masteryLevels)
      .filter(([, v]) => v < 80)
      .sort(([, a], [, b]) => a - b)[0];

    if (weakestConcept) {
      return `${weakestConcept[0]} 복습 미션`;
    }
  }

  if (action === 'increase' && nextConcepts.length > 0) {
    return `${nextConcepts[0]} 학습 미션`;
  }

  if (learningConcepts.length > 0) {
    return `${learningConcepts[0]} 심화 미션`;
  }

  return '다음 추천 미션';
}

// 스캐폴드 제공
export function provideScaffold(
  profile: LearnerProfile,
  missionConcept: string,
  attempts: number
): Scaffold | null {
  const mastery = profile.masteryLevels[missionConcept] || 0;

  // 숙달도가 높으면 스캐폴드 불필요
  if (mastery >= 70 && attempts < 3) {
    return null;
  }

  // 시도 횟수에 따른 스캐폴드
  if (attempts >= 8) {
    return {
      type: 'worked-example',
      content: '비슷한 문제의 풀이 과정을 보여드릴게요.',
      fadeOutAfter: 2,
      priority: 1
    };
  }

  if (attempts >= 5) {
    return {
      type: 'partial-solution',
      content: '코드의 일부를 미리 채워드릴게요.',
      fadeOutAfter: 3,
      priority: 2
    };
  }

  if (attempts >= 3) {
    return {
      type: 'hint',
      content: '구체적인 힌트를 드릴게요.',
      fadeOutAfter: 5,
      priority: 3
    };
  }

  // 숙달도가 낮으면 기본 스캐폴드
  if (mastery < 30) {
    return {
      type: 'video',
      content: '이 개념에 대한 짧은 설명 영상이에요.',
      fadeOutAfter: 1,
      priority: 4
    };
  }

  return null;
}

// 실시간 개입 감지
export interface Intervention {
  type: 'encouragement' | 'challenge' | 'break' | 'review' | 'help';
  message: string;
  action?: string;
}

export function detectIntervention(
  profile: LearnerProfile,
  currentAttempts: number,
  timeOnMission: number, // 초
  idleTime: number // 초
): Intervention | null {
  // 좌절 감지 - 많은 시도
  if (currentAttempts >= profile.frustrationThreshold) {
    return {
      type: 'encouragement',
      message: '어려운 문제네요! 잠깐 쉬었다가 다시 해볼까요?',
      action: 'showHint'
    };
  }

  // 장시간 멈춤 감지
  if (idleTime > 120) {
    // 2분 이상 멈춤
    return {
      type: 'help',
      message: '막히셨나요? 힌트가 필요하면 말씀해주세요!',
      action: 'offerHint'
    };
  }

  // 너무 오래 걸림
  if (timeOnMission > 20 * 60) {
    // 20분 이상
    return {
      type: 'break',
      message: '오래 집중했네요! 5분 휴식 후 다시 해보는 건 어떨까요?',
      action: 'suggestBreak'
    };
  }

  // 너무 빨리 풀면 도전 제안
  if (currentAttempts === 1 && timeOnMission < 30) {
    return {
      type: 'challenge',
      message: '와! 정말 빠르네요! 더 어려운 문제에 도전해볼까요?',
      action: 'offerChallenge'
    };
  }

  // 참여도가 낮으면 격려
  if (profile.engagementScore < 30) {
    return {
      type: 'encouragement',
      message: '조금씩 꾸준히 하면 돼요! 오늘 하나만 더 해볼까요?',
      action: 'encourage'
    };
  }

  return null;
}

// 개념 연결 그래프 (다음에 배울 개념 추천용)
const conceptGraph: Record<string, string[]> = {
  변수: ['자료형', '연산자'],
  자료형: ['형변환', '문자열'],
  연산자: ['조건문', '비교연산'],
  조건문: ['반복문', '논리연산'],
  반복문: ['리스트', '함수'],
  리스트: ['딕셔너리', '튜플'],
  함수: ['매개변수', '반환값'],
  매개변수: ['기본값', '가변인자'],
  클래스: ['상속', '메서드'],
  상속: ['다형성', '추상클래스']
};

// 다음 학습할 개념 추천
export function recommendNextConcepts(profile: LearnerProfile): string[] {
  const { knownConcepts, learningConcepts } = profile.currentZPD;
  const allKnown = new Set([...knownConcepts, ...learningConcepts]);

  const candidates = new Set<string>();

  // 알고 있는 개념의 다음 개념들을 후보로
  allKnown.forEach(concept => {
    const next = conceptGraph[concept] || [];
    next.forEach(n => {
      if (!allKnown.has(n)) {
        candidates.add(n);
      }
    });
  });

  // 아무것도 없으면 기본 시작 개념
  if (candidates.size === 0) {
    return ['변수', '출력', '입력'];
  }

  return Array.from(candidates).slice(0, 3);
}

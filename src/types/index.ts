// Auth & Role Types
export type UserRole = 'student' | 'teacher' | 'admin';
export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface AuthUser {
  uid: string;
  email: string;
  role: UserRole;
  displayName: string;
  photoURL?: string;
  createdAt: string;
  approvalStatus: ApprovalStatus;
  approvedBy?: string;
  approvedAt?: string;
  classId?: string; // 학생: 소속 학급, 선생님: 관리 학급
}

export interface Teacher extends AuthUser {
  role: 'teacher';
  school?: string;
  subject?: string;
  classIds: string[]; // 관리하는 학급들
}

export interface Student extends AuthUser {
  role: 'student';
  teacherId: string;
  classId: string;
}

export interface ClassRoom {
  id: string;
  name: string;
  teacherId: string;
  teacherName: string;
  joinCode: string; // 6자리 학급 코드
  studentIds: string[];
  createdAt: string;
  isActive: boolean;
}

export interface StudentProgress {
  studentId: string;
  studentName: string;
  studentAvatar: string;
  level: number;
  totalExp: number;
  completedMissions: number;
  totalMissions: number;
  streak: number;
  lastActiveDate: string;
  weeklyProgress: number; // 이번 주 완료 미션
}

// User Types
export interface User {
  id: string;
  name: string;
  avatar: string;
  level: number;
  exp: number;
  totalExp: number;
  title: string;
  streak: number;
  longestStreak: number;
  lastActiveDate: string;
  createdAt: string;
  settings: UserSettings;
  stats: UserStats;
  // Auth 연동
  authUid?: string;
  role?: UserRole;
  classId?: string;
  teacherId?: string;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  fontSize: number;
  soundEnabled: boolean;
  musicEnabled: boolean;
  notificationsEnabled: boolean;
  tutorPersonality: 'friendly' | 'professional' | 'gamey';
  language: 'ko' | 'en';
}

export interface UserStats {
  totalMissionsCompleted: number;
  totalProjectsCompleted: number;
  totalCodeWritten: number;
  totalTimeSpent: number;
  perfectScores: number;
  hintsUsed: number;
  aiConversations: number;
  longestStreak: number;
  averageAccuracy: number;
}

// Curriculum Types
export interface Unit {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  weeks: Week[];
  unlockLevel: number;
  totalMissions: number;
  estimatedHours: number;
}

export interface Week {
  id: string;
  number: number;
  title: string;
  description: string;
  missions: Mission[];
  project?: Project;
  quiz?: Quiz;
  miniGame?: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  type: MissionType;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  language?: 'python' | 'javascript' | 'html' | 'css' | 'blocks';
  exp: number;
  estimatedMinutes: number;
  concept?: string;
  conceptExplanation?: string; // 개념 설명 (튜토리얼용)
  starterCode?: string;
  solution?: string;
  expectedOutput?: string | null; // null for free-response
  hints: string[];
  // Use-Modify-Create 진행 단계
  phase?: 'use' | 'modify' | 'create';
  // 마스터리 시스템
  isKeyMission?: boolean;  // 핵심 미션 (80% 통과 필요)
  isWeeklyProject?: boolean;  // 주간 프로젝트
  prerequisiteMissions?: string[];  // 선행 미션 ID 목록
  testCases?: TestCase[];
  requirements?: string[];
  // 연습 문제 배열 (미션당 5-10개)
  challenges?: PracticeChallenge[];
  // 프로젝트 체크포인트 (프로젝트 미션용)
  projectCheckpoints?: ProjectCheckpoint[];
  blocks?: string[];
  correctBlocks?: string[];
  unlocked: boolean;
  completed: boolean;
  perfectScore: boolean;
  // 실제 교육을 위한 추가 속성
  videoUrl?: string; // 개념 설명 영상 URL
  conceptCards?: ConceptCard[]; // 핵심 개념 카드
  checkQuestions?: CheckQuestion[]; // 학습 확인 질문
  solutionSequence?: string[]; // visual-programming 정답 시퀀스
  learningObjectives?: string[]; // 학습 목표
  prerequisiteKnowledge?: string[]; // 선수 지식
  cstaStandard?: string; // CSTA 표준 코드
  realWorldExample?: string; // 실생활 적용 예시
  commonMistakes?: string[]; // 흔한 실수들
  extensionActivities?: string[]; // 심화 활동
  // Visual programming grid properties
  gridSize?: { rows: number; cols: number };
  startPosition?: { row: number; col: number };
  goalPosition?: { row: number; col: number };
  obstacles?: { row: number; col: number }[];
  checkpoints?: { row: number; col: number }[];
  collectibles?: { row: number; col: number }[];
  mustVisitAll?: boolean;
  maxCommands?: number;
  drawPath?: boolean;
  expectedShape?: string;
  useConditional?: boolean;
  mazeWalls?: boolean;
  // Variable programming properties
  targetVariables?: { name: string; value: number | string }[];
  initialVariables?: { name: string; value: number | string }[];
  variableBlocks?: string[];
  // Game maker properties
  gameType?: GameType;
  winCondition?: { type: string; target: number };
  gameElements?: {
    characters?: string[];
    collectibles?: string[];
    obstacles?: string[];
  };
  gameBlocks?: string[];
}

export type MissionType =
  | 'coding'
  | 'drag-drop'
  | 'visual-programming'
  | 'variable-programming'
  | 'game-maker'
  | 'writing'
  | 'pattern-recognition'
  | 'quiz'
  | 'audio-visual'
  | 'visual-puzzle'
  | 'interactive-lesson'
  | 'hands-on'
  | 'discussion';

export type GameType =
  | 'click-game'
  | 'collect-game'
  | 'dodge-game'
  | 'timer-game'
  | 'shooting-game'
  | 'quiz-game';

export interface TestCase {
  input: string;
  expectedOutput: string;
  description?: string;
  isHidden?: boolean; // 숨겨진 테스트 케이스 (제출 시에만 확인)
  explanation?: string; // 왜 이 테스트가 중요한지 설명
  errorHint?: string; // 틀렸을 때 보여줄 힌트
}

// 미션 내 연습 문제 (미션당 5-10개)
export interface PracticeChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  estimatedMinutes: number;
  // 코딩 연습용 (선택적)
  starterCode?: string;
  solution?: string;
  testCases?: TestCase[];
  // 드래그앤드롭/순서 배열용 (선택적)
  blocks?: string[];
  correctSequence?: string[];
  // 상세 피드백
  feedback: {
    perfect: string; // 완벽할 때
    good: string; // 대부분 맞았을 때
    partial: string; // 일부만 맞았을 때
    wrong: string; // 틀렸을 때
    syntaxError?: string; // 문법 오류일 때 (선택적)
  };
  // 틀렸을 때 구체적인 도움
  commonErrors?: {
    pattern: string; // 정규식 패턴
    message: string; // 보여줄 메시지
    suggestion: string; // 수정 제안
  }[];
}

// 프로젝트 체크리스트
export interface ProjectCheckpoint {
  id: string;
  title: string;
  description: string;
  criteria: string[]; // 통과 조건들
  points: number;
}

// 핵심 개념 카드 (시각적 학습용)
export interface ConceptCard {
  title: string;
  description: string;
  icon?: string;
  example?: string;
  animation?: string; // 애니메이션 ID
}

// 학습 확인 질문 (즉각적 피드백용)
export interface CheckQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  requirements: string[];
  tech?: string[];
  exp: number;
  badge?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

// Progress Types
export interface Progress {
  unitsProgress: Record<string, UnitProgress>;
  completedMissions: string[];
  completedProjects: string[];
  earnedBadges: string[];
  dailyChallenges: DailyChallengeProgress;
  weeklyChallenges: WeeklyChallengeProgress;
}

export interface UnitProgress {
  unitId: string;
  started: boolean;
  completed: boolean;
  missionsCompleted: number;
  totalMissions: number;
  lastMissionId?: string;
  startedAt?: string;
  completedAt?: string;
}

export interface DailyChallengeProgress {
  date: string;
  completed: boolean;
  challengeId: string;
}

export interface WeeklyChallengeProgress {
  weekStart: string;
  completed: boolean;
  challengeId: string;
  progress: number;
}

// Badge Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'progress' | 'challenge' | 'skill' | 'social' | 'special';
  condition: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt?: string;
}

// Gamification Types
export interface Level {
  level: number;
  expRequired: number;
  title: string;
  rewards?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  target: number;
  completed: boolean;
  reward: number;
}

export interface Challenge {
  id: string;
  type: 'daily' | 'weekly' | 'seasonal';
  title: string;
  description: string;
  task: string;
  reward: number;
  progress: number;
  target: number;
  completed: boolean;
  expiresAt: string;
}

// AI Tutor Types
export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string | Date;
  codeBlocks?: CodeBlock[];
}

export interface CodeBlock {
  language: string;
  code: string;
}

export interface AITutorConfig {
  personality: 'friendly' | 'professional' | 'gamey';
  name: string;
  avatar: string;
  systemPrompt: string;
}

// Code Execution Types
export interface CodeExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number;
  testResults?: TestResult[];
}

export interface TestResult {
  passed: boolean;
  input: string;
  expected: string;
  actual: string;
  description?: string;
}

// Leaderboard Types
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  avatar: string;
  level: number;
  exp: number;
  streak: number;
  badges: number;
}

// Activity Types
export interface Activity {
  id: string;
  type: 'mission' | 'project' | 'badge' | 'level' | 'streak' | 'achievement';
  title: string;
  description: string;
  timestamp: string;
  exp?: number;
  icon?: string;
}

// Game Types
export interface GameScore {
  gameId: string;
  score: number;
  playedAt: string;
  duration: number;
}

export interface MiniGame {
  id: string;
  name: string;
  description: string;
  icon: string;
  difficulty: 'easy' | 'medium' | 'hard';
  highScore: number;
  playCount: number;
}

// Vibe Coding Types
export interface VibeCodingRequest {
  prompt: string;
  language: 'python' | 'javascript' | 'html';
  complexity: 'simple' | 'medium' | 'complex';
}

export interface VibeCodingResponse {
  understanding: string;
  code: string;
  explanation: string;
  customizationIdeas: string[];
  nextSteps: string[];
}

// Avatar System Types
export interface AvatarItem {
  id: string;
  name: string;
  category: AvatarCategory;
  image: string;
  price: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockLevel?: number;
  unlockBadge?: string;
  owned: boolean;
}

export type AvatarCategory = 'character' | 'hair' | 'face' | 'outfit' | 'accessory' | 'pet' | 'background';

export interface AvatarConfig {
  character: string;
  hair?: string;
  face?: string;
  outfit?: string;
  accessory?: string;
  pet?: string;
  background: string;
}

// My Room Types
export interface RoomItem {
  id: string;
  name: string;
  category: RoomCategory;
  image: string;
  price: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockLevel?: number;
  owned: boolean;
  position?: { x: number; y: number };
  size?: { width: number; height: number };
}

export type RoomCategory = 'wallpaper' | 'floor' | 'furniture' | 'decoration' | 'plant' | 'tech' | 'trophy';

export interface RoomConfig {
  wallpaper: string;
  floor: string;
  furniture: RoomPlacement[];
  decorations: RoomPlacement[];
}

export interface RoomPlacement {
  itemId: string;
  x: number;
  y: number;
  rotation?: number;
  scale?: number;
}

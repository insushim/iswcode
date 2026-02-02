import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Lock, CheckCircle2, Clock, Star, ChevronDown,
  BookOpen, Target, ArrowLeft, Play, PlayCircle, Bot, Layers,
  TrendingUp, Award, Flame, Map, Filter, Sparkles, GraduationCap,
  Code2, Palette, Brain, Rocket, Zap, Trophy
} from 'lucide-react';
import { allUnits, getUnitById } from '../data/curriculum';
import { useProgressStore } from '../stores/progressStore';
import { useUserStore } from '../stores/userStore';
import type { Unit, Week, Mission } from '../types';

// 학년 그룹 정의
const GRADE_GROUPS = [
  { id: 'all', label: '전체', grades: [1,2,3,4,5,6,7,8,9,10,11,12], color: 'from-indigo-500 to-purple-500' },
  { id: 'elementary-low', label: '초등 저학년', grades: [1,2,3], color: 'from-green-400 to-emerald-500', icon: '🌱' },
  { id: 'elementary-high', label: '초등 고학년', grades: [4,5,6], color: 'from-blue-400 to-cyan-500', icon: '🌿' },
  { id: 'middle', label: '중학교', grades: [7,8,9], color: 'from-purple-400 to-pink-500', icon: '🌳' },
  { id: 'high', label: '고등학교', grades: [10,11,12], color: 'from-orange-400 to-red-500', icon: '🏔️' },
];

// 유닛별 학년 매핑 (2022 개정교육과정 기반)
const UNIT_GRADE_MAP: Record<string, { grades: number[]; standard: string; skills: string[] }> = {
  'unit-1': {
    grades: [3,4],
    standard: '[4정01-01] 컴퓨터 과학의 기초 개념',
    skills: ['논리적 사고', '문제 분해', '패턴 인식']
  },
  'unit-2': {
    grades: [3,4,5],
    standard: '[4정02-01] 블록형 프로그래밍',
    skills: ['순차', '반복', '조건']
  },
  'unit-3': {
    grades: [5,6],
    standard: '[6정02-01] 텍스트 프로그래밍 기초',
    skills: ['변수', '자료형', '입출력']
  },
  'unit-4': {
    grades: [6,7],
    standard: '[6정02-02] 프로그래밍 심화',
    skills: ['함수', '리스트', '알고리즘']
  },
  'unit-5': {
    grades: [5,6,7],
    standard: '[6정03-01] 웹 기초',
    skills: ['HTML', 'CSS', '웹구조']
  },
  'unit-6': {
    grades: [7,8,9],
    standard: '[9정02-01] 자바스크립트',
    skills: ['DOM', '이벤트', '웹앱']
  },
  'unit-7': {
    grades: [8,9,10],
    standard: '[9정03-01] 웹 프로젝트',
    skills: ['프론트엔드', 'API', '배포']
  },
  'unit-8': {
    grades: [9,10,11],
    standard: '[고정02-01] AI/창작 코딩',
    skills: ['AI API', '창작', '자동화']
  },
  'unit-9': {
    grades: [10,11,12],
    standard: '[고정03-01] 캡스톤 프로젝트',
    skills: ['설계', '구현', '협업']
  },
};

const Learn: React.FC = () => {
  const { unitId, weekId } = useParams();
  const navigate = useNavigate();

  if (!unitId) {
    return <UnitList />;
  }

  const unit = getUnitById(unitId);
  if (!unit) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">유닛을 찾을 수 없습니다.</p>
      </div>
    );
  }

  if (!weekId) {
    return <WeekList unit={unit} />;
  }

  const week = unit.weeks.find(w => w.id === weekId);
  if (!week) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">주차를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return <MissionList unit={unit} week={week} />;
};

// Unit Header Component (The Big Card)
const UnitHeader: React.FC<{ unit: Unit; progressPercent: number; completedMissions: number; totalMissions: number }> = ({
  unit, progressPercent, completedMissions, totalMissions
}) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate-700 border border-slate-600 shadow-2xl mb-8 group isolate">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-indigo-500/20 transition-all duration-1000 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 -z-10"></div>
      <div className="absolute inset-0 bg-grid-slate-600/[0.1] -z-10 mask-image-gradient"></div>

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-bold uppercase tracking-wider mb-5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Current Unit
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Unit {unit.number}. <br className="md:hidden"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 drop-shadow-sm">
              {unit.title}
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed font-light opacity-90 break-keep">
            {unit.description}
          </p>

          <div className="flex items-center gap-8 mt-10">
            <div className="flex flex-col gap-1.5">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">진행률</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white tracking-tighter">{progressPercent}<span className="text-lg text-slate-400 ml-0.5">%</span></span>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-600/50"></div>
            <div className="flex flex-col gap-1.5">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">학습 강의</span>
              <span className="text-white font-bold text-lg">{completedMissions} <span className="text-slate-400 font-medium text-sm">/ {totalMissions} 강</span></span>
            </div>
          </div>
        </div>

        {/* Action / Icon Area */}
        <div className="flex-shrink-0 relative hidden md:block">
          <div className="w-48 h-48 bg-gradient-to-br from-slate-600/50 to-slate-700/50 backdrop-blur-md rounded-3xl flex items-center justify-center border border-slate-500/50 shadow-2xl rotate-3 group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
            <span className="text-7xl">{unit.icon}</span>
            <div className="absolute inset-0 rounded-3xl border-2 border-white/5"></div>
          </div>
        </div>
      </div>

      {/* Progress Bar at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800/50">
        <div
          className="h-full bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 shadow-[0_0_15px_rgba(45,212,191,0.6)] relative transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Lesson Item Component
const LessonItem: React.FC<{
  lesson: Week;
  index: number;
  onExpand: () => void;
  isExpanded: boolean;
  weekProgress: { completed: number; total: number };
  unitId: string;
  isLocked: boolean;
  keyMissionProgress?: { completed: number; total: number; percent: number };
}> = ({
  lesson, index, onExpand, isExpanded, weekProgress, unitId, isLocked, keyMissionProgress
}) => {
  const isCompleted = weekProgress.completed === weekProgress.total && weekProgress.total > 0;
  const hasProgress = weekProgress.completed > 0;
  const isActive = hasProgress && !isCompleted;

  return (
    <div
      className={`
        group relative flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300
        ${isLocked
          ? 'bg-slate-800/40 border-slate-700 opacity-60 cursor-not-allowed'
          : 'cursor-pointer ' + (isActive
            ? 'bg-slate-700/80 border-indigo-500/50 shadow-[0_4px_20px_rgba(79,70,229,0.15)] ring-1 ring-indigo-500/20 translate-x-1'
            : 'bg-slate-700/40 border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500')
        }
      `}
      onClick={!isLocked ? onExpand : undefined}
    >
      {/* Number Badge */}
      <div className={`
        flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold border-2 transition-transform duration-300 group-hover:scale-105
        ${isLocked ? 'bg-slate-700 text-slate-500 border-slate-600' : ''}
        ${!isLocked && isActive ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/40' : ''}
        ${!isLocked && isCompleted ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : ''}
        ${!isLocked && !isActive && !isCompleted ? 'bg-slate-700 text-slate-300 border-slate-600 group-hover:border-slate-500 group-hover:text-white' : ''}
      `}>
        {isLocked ? (
          <Lock className="w-6 h-6" />
        ) : isCompleted ? (
          <CheckCircle2 className="w-7 h-7" />
        ) : (
          <span className="font-logo">{lesson.number}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 py-1">
        <div className="flex items-center gap-3 mb-1.5">
          <h3 className={`text-lg font-bold truncate tracking-tight ${
            isLocked ? 'text-slate-500' : isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
          }`}>
            {lesson.title}
          </h3>
          {isActive && !isLocked && (
            <span className="text-[10px] font-bold text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded-full border border-indigo-500/30 animate-pulse tracking-wide">
              학습 중
            </span>
          )}
          {isLocked && (
            <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30 tracking-wide">
              잠김
            </span>
          )}
        </div>
        <p className={`text-sm truncate font-medium ${
          isLocked ? 'text-slate-600' : 'text-slate-500 group-hover:text-slate-400'
        } transition-colors`}>
          {isLocked ? '핵심 미션 80% 완료 필요' : lesson.description}
        </p>

        {/* Progress Bar for Lesson */}
        <div className="mt-4 flex items-center gap-3 max-w-md">
          <div className="flex-1 h-1.5 bg-slate-600/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className={`h-full rounded-full transition-all duration-500 ${isCompleted ? 'bg-emerald-500' : 'bg-indigo-500'}`}
              style={{ width: `${(weekProgress.completed / weekProgress.total) * 100}%` }}
            ></div>
          </div>
          <span className="text-[11px] font-bold text-slate-500 min-w-[3rem] text-right">
            {weekProgress.completed} <span className="text-slate-500">/ {weekProgress.total}</span>
          </span>
        </div>

        {/* Key Mission Progress for previous week if current is locked */}
        {isLocked && keyMissionProgress && keyMissionProgress.total > 0 && (
          <div className="mt-2 flex items-center gap-2 text-xs text-amber-400">
            <Star className="w-3 h-3" />
            <span>이전 주차 핵심 미션: {keyMissionProgress.completed}/{keyMissionProgress.total} ({keyMissionProgress.percent}%)</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0">
        {isLocked ? (
          <Lock className="w-5 h-5 text-slate-600" />
        ) : (
          <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        )}
      </div>
    </div>
  );
};

// 진도 통계 대시보드 컴포넌트
const ProgressDashboard: React.FC<{
  totalMissions: number;
  completedMissions: number;
  totalUnits: number;
  completedUnits: number;
  streak: number;
  level: number;
}> = ({ totalMissions, completedMissions, totalUnits, completedUnits, streak, level }) => {
  const overallProgress = totalMissions > 0 ? Math.round((completedMissions / totalMissions) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 border border-slate-600/50 relative overflow-hidden"
    >
      {/* 배경 데코레이션 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-400" />
              나의 학습 현황
            </h2>
            <p className="text-slate-400 text-sm mt-1">꾸준히 성장하고 있어요!</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-300">{streak}일 연속</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-300">Lv.{level}</span>
            </div>
          </div>
        </div>

        {/* 진행률 바 */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-400">전체 진행률</span>
            <span className="font-bold text-white">{overallProgress}%</span>
          </div>
          <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-center">
            <div className="text-2xl font-bold text-white mb-1">{completedMissions}</div>
            <div className="text-xs text-slate-400">완료한 미션</div>
            <div className="text-[10px] text-slate-500 mt-1">/ {totalMissions}개</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">{completedUnits}</div>
            <div className="text-xs text-slate-400">완료한 유닛</div>
            <div className="text-[10px] text-slate-500 mt-1">/ {totalUnits}개</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-center">
            <div className="text-2xl font-bold text-amber-400 mb-1">{Math.round(totalMissions * 10 * (overallProgress / 100))}</div>
            <div className="text-xs text-slate-400">획득 XP</div>
            <div className="text-[10px] text-slate-500 mt-1">총 예상</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {Math.ceil((totalMissions - completedMissions) * 8 / 60)}h
            </div>
            <div className="text-xs text-slate-400">남은 학습</div>
            <div className="text-[10px] text-slate-500 mt-1">예상 시간</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 학년 필터 컴포넌트
const GradeFilter: React.FC<{
  selectedGrade: string;
  onSelectGrade: (grade: string) => void;
}> = ({ selectedGrade, onSelectGrade }) => {
  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      {GRADE_GROUPS.map((group) => (
        <button
          key={group.id}
          onClick={() => onSelectGrade(group.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all
            ${selectedGrade === group.id
              ? `bg-gradient-to-r ${group.color} text-white shadow-lg`
              : 'bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-600/50'
            }
          `}
        >
          {group.icon && <span>{group.icon}</span>}
          {group.label}
        </button>
      ))}
    </div>
  );
};

// 학습 경로 로드맵 컴포넌트
const LearningRoadmap: React.FC<{
  units: Unit[];
  progress: Record<string, { missionsCompleted: number }>;
  userLevel: number;
  onSelectUnit: (unitId: string) => void;
}> = ({ units, progress, userLevel, onSelectUnit }) => {
  return (
    <div className="mb-8 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50">
      <div className="flex items-center gap-2 mb-6">
        <Map className="w-5 h-5 text-indigo-400" />
        <h3 className="text-lg font-bold text-white">학습 경로</h3>
        <span className="text-xs text-slate-500">클릭하여 바로 이동</span>
      </div>

      <div className="relative">
        {/* 연결선 */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2 z-0" />

        <div className="flex items-center justify-between relative z-10">
          {units.slice(0, 9).map((unit, index) => {
            const isLocked = userLevel < unit.unlockLevel;
            const unitProgress = progress[unit.id];
            const percent = unitProgress
              ? Math.round((unitProgress.missionsCompleted / unit.totalMissions) * 100)
              : 0;
            const isCompleted = percent === 100;
            const isInProgress = percent > 0 && percent < 100;

            return (
              <motion.button
                key={unit.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isLocked && onSelectUnit(unit.id)}
                disabled={isLocked}
                className={`
                  relative flex flex-col items-center group
                  ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {/* 노드 */}
                <div
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-xl border-2 transition-all
                    ${isCompleted
                      ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/30'
                      : isInProgress
                      ? 'bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/30 animate-pulse'
                      : isLocked
                      ? 'bg-slate-700 border-slate-600 opacity-50'
                      : 'bg-slate-700 border-slate-600 group-hover:border-indigo-400 group-hover:bg-slate-600'
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  ) : isLocked ? (
                    <Lock className="w-5 h-5 text-slate-500" />
                  ) : (
                    <span>{unit.icon}</span>
                  )}
                </div>

                {/* 진행률 링 */}
                {!isLocked && !isCompleted && percent > 0 && (
                  <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-indigo-500/30"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${percent * 1.5} 150`}
                      className="text-indigo-400"
                    />
                  </svg>
                )}

                {/* 라벨 */}
                <div className="mt-2 text-center">
                  <div className={`text-[10px] font-bold ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                    Unit {unit.number}
                  </div>
                  {!isLocked && percent > 0 && (
                    <div className="text-[9px] text-indigo-400">{percent}%</div>
                  )}
                </div>

                {/* 툴팁 */}
                <div className="absolute bottom-full mb-2 px-3 py-2 bg-slate-900 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-700 shadow-xl z-20">
                  <div className="font-bold text-white">{unit.title}</div>
                  <div className="text-slate-400">{unit.totalMissions}개 미션</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Unit List Component
const UnitList: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const { progress } = useProgressStore();
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  // 필터링된 유닛
  const filteredUnits = useMemo(() => {
    if (selectedGrade === 'all') return allUnits;
    const gradeGroup = GRADE_GROUPS.find(g => g.id === selectedGrade);
    if (!gradeGroup) return allUnits;

    return allUnits.filter(unit => {
      const unitGrades = UNIT_GRADE_MAP[unit.id]?.grades || [];
      return unitGrades.some(g => gradeGroup.grades.includes(g));
    });
  }, [selectedGrade]);

  // 전체 통계 계산
  const stats = useMemo(() => {
    const totalMissions = allUnits.reduce((sum, u) => sum + u.totalMissions, 0);
    const completedMissions = Object.values(progress.unitsProgress).reduce(
      (sum, p) => sum + (p?.missionsCompleted || 0), 0
    );
    const completedUnits = allUnits.filter(u => {
      const p = progress.unitsProgress[u.id];
      return p && p.missionsCompleted === u.totalMissions;
    }).length;
    return { totalMissions, completedMissions, totalUnits: allUnits.length, completedUnits };
  }, [progress]);

  return (
    <div className="animate-fade-in-up">
      {/* 진도 통계 대시보드 */}
      <ProgressDashboard
        totalMissions={stats.totalMissions}
        completedMissions={stats.completedMissions}
        totalUnits={stats.totalUnits}
        completedUnits={stats.completedUnits}
        streak={user?.streak || 0}
        level={user?.level || 1}
      />

      {/* 학습 경로 로드맵 */}
      <LearningRoadmap
        units={allUnits}
        progress={progress.unitsProgress}
        userLevel={user?.level || 1}
        onSelectUnit={(unitId) => navigate(`/learn/${unitId}`)}
      />

      {/* 학년 필터 */}
      <div className="flex items-center justify-between mb-4">
        <GradeFilter selectedGrade={selectedGrade} onSelectGrade={setSelectedGrade} />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            <Layers className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}
          >
            <Target className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 필터 결과 정보 */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-slate-700 rounded-lg text-[11px] font-bold text-slate-400 border border-slate-600 tracking-wide flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" />
            {selectedGrade === 'all' ? '전체' : GRADE_GROUPS.find(g => g.id === selectedGrade)?.label} 커리큘럼
          </span>
        </div>
        <div className="text-xs font-medium text-slate-500">
          총 <span className="text-slate-300">{filteredUnits.length}개</span> 유닛
        </div>
      </div>

      {/* Practice Mode Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 p-4 rounded-xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 cursor-pointer hover:border-indigo-400/50 transition-all group"
        onClick={() => navigate('/practice')}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <h3 className="text-white font-bold flex items-center gap-2">
                고급 연습 모드
                <span className="px-2 py-0.5 text-xs rounded bg-indigo-500 text-white">NEW</span>
              </h3>
              <p className="text-slate-400 text-sm">
                디버깅, 코드 리뷰, 알고리즘 - 실력 향상 미션!
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
        </div>
      </motion.div>

      {/* 유닛 목록 */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}>
        {filteredUnits.map((unit, index) => {
          const isLocked = user ? user.level < unit.unlockLevel : true;
          const unitProgress = progress.unitsProgress[unit.id];
          const progressPercent = unitProgress
            ? Math.round((unitProgress.missionsCompleted / unit.totalMissions) * 100)
            : 0;
          const isCompleted = progressPercent === 100;
          const unitGradeInfo = UNIT_GRADE_MAP[unit.id];

          return (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => !isLocked && navigate(`/learn/${unit.id}`)}
                disabled={isLocked}
                className={`
                  w-full text-left p-6 rounded-2xl border transition-all duration-300 group
                  ${isLocked
                    ? 'bg-slate-800/40 border-slate-700 opacity-50 cursor-not-allowed grayscale-[0.5]'
                    : 'bg-slate-700/40 border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500 hover:translate-x-1'}
                `}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl border-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-105
                      ${isCompleted
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : isLocked
                        ? 'bg-slate-700 border-slate-600'
                        : 'bg-slate-700 border-slate-600 group-hover:border-slate-500'}`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    ) : isLocked ? (
                      <Lock className="w-6 h-6 text-slate-500" />
                    ) : (
                      unit.icon
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-black px-2 py-1 rounded bg-slate-600 text-slate-200">
                        Unit {unit.number}
                      </span>
                      {unitGradeInfo && (
                        <span className="text-[10px] font-bold px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {unitGradeInfo.grades.map(g => g <= 6 ? `초${g}` : g <= 9 ? `중${g-6}` : `고${g-9}`).join(', ')}
                        </span>
                      )}
                      {isLocked && (
                        <span className="text-xs font-bold px-2 py-1 rounded bg-slate-700 text-slate-400">
                          Lv.{unit.unlockLevel} 필요
                        </span>
                      )}
                      {isCompleted && (
                        <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                          <Trophy className="w-3 h-3" /> 완료!
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-1 text-white">{unit.title}</h3>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{unit.description}</p>

                    {/* 2022 개정교육과정 성취기준 */}
                    {unitGradeInfo && !isLocked && (
                      <div className="mb-3 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <div className="text-[10px] text-slate-500 mb-1 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          2022 개정교육과정
                        </div>
                        <div className="text-xs text-slate-400">{unitGradeInfo.standard}</div>
                        <div className="flex gap-1 mt-1.5 flex-wrap">
                          {unitGradeInfo.skills.map((skill, i) => (
                            <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {unit.totalMissions}개 미션
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        약 {unit.estimatedHours}시간
                      </span>
                      <span className="flex items-center gap-1">
                        <Target className="w-4 h-4" />
                        {unit.weeks.length}주
                      </span>
                    </div>

                    {!isLocked && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-slate-500">진행률</span>
                          <span className="font-bold text-slate-300">{progressPercent}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-600/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.5 }}
                            className={`h-full ${isCompleted ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <ChevronRight className={`w-6 h-6 flex-shrink-0 transition-colors ${isLocked ? 'text-slate-600' : 'text-slate-400 group-hover:text-slate-200'}`} />
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* 필터 결과가 없을 때 */}
      {filteredUnits.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-700/50 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-slate-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">해당 학년의 커리큘럼 준비 중</h3>
          <p className="text-slate-400 text-sm">곧 새로운 콘텐츠가 추가될 예정이에요!</p>
        </div>
      )}
    </div>
  );
};

// Week List Component
const WeekList: React.FC<{ unit: Unit }> = ({ unit }) => {
  const navigate = useNavigate();
  const { progress, isWeekUnlocked, getWeekKeyMissionProgress } = useProgressStore();
  const [expandedWeek, setExpandedWeek] = useState<string | null>(null);

  const getWeekProgress = (week: Week) => {
    const completed = week.missions.filter(m =>
      progress.completedMissions.includes(m.id)
    ).length;
    return { completed, total: week.missions.length };
  };

  // Calculate unit progress
  const totalMissions = unit.weeks.reduce((sum, week) => sum + week.missions.length, 0);
  const completedMissions = unit.weeks.reduce((sum, week) => {
    return sum + week.missions.filter(m => progress.completedMissions.includes(m.id)).length;
  }, 0);
  const progressPercent = totalMissions > 0 ? Math.round((completedMissions / totalMissions) * 100) : 0;

  return (
    <div className="animate-fade-in-up">
      {/* Back Button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/learn')}
          className="flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          전체 유닛
        </button>
        <div className="text-xs font-medium text-slate-500">
          Last updated: <span className="text-slate-300">Just now</span>
        </div>
      </div>

      {/* Main Unit Card */}
      <UnitHeader
        unit={unit}
        progressPercent={progressPercent}
        completedMissions={completedMissions}
        totalMissions={totalMissions}
      />

      {/* Lesson List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-3 px-2">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
            상세 커리큘럼
          </h3>
          <button className="text-xs font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg transition-colors hover:bg-indigo-500/20">
            모두 펼치기
          </button>
        </div>

        {unit.weeks.map((week, index) => {
          const weekProgress = getWeekProgress(week);
          const isExpanded = expandedWeek === week.id;
          const isLocked = !isWeekUnlocked(unit.id, week.id);

          // Get previous week's key mission progress if current week is locked
          let keyMissionProgress;
          if (isLocked && index > 0) {
            const previousWeek = unit.weeks[index - 1];
            keyMissionProgress = getWeekKeyMissionProgress(unit.id, previousWeek.id);
          }

          return (
            <motion.div
              key={week.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <LessonItem
                lesson={week}
                index={index}
                onExpand={() => setExpandedWeek(isExpanded ? null : week.id)}
                isExpanded={isExpanded}
                weekProgress={weekProgress}
                unitId={unit.id}
                isLocked={isLocked}
                keyMissionProgress={keyMissionProgress}
              />

              <AnimatePresence>
                {isExpanded && !isLocked && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-8 mt-2 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 space-y-2">
                      {week.missions.map((mission, mIndex) => {
                        const missionCompleted = progress.completedMissions.includes(mission.id);
                        const missionLocked = isLocked; // Week is already locked, so all missions are locked

                        return (
                          <button
                            key={mission.id}
                            onClick={() => !missionLocked && navigate(`/mission/${mission.id}`)}
                            disabled={missionLocked}
                            className={`w-full p-4 flex items-center gap-4 rounded-xl border transition-all text-left group ${
                              missionLocked
                                ? 'border-slate-700 bg-slate-800/40 opacity-50 cursor-not-allowed'
                                : 'border-slate-600/50 hover:border-indigo-500/50 hover:bg-slate-700/50'
                            }`}
                          >
                            {missionCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            ) : missionLocked ? (
                              <Lock className="w-5 h-5 text-slate-600 flex-shrink-0" />
                            ) : (
                              <div className="w-5 h-5 rounded-full border-2 border-slate-500 flex-shrink-0 group-hover:border-indigo-400 transition-colors" />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <p className={`font-bold truncate ${
                                  missionLocked ? 'text-slate-600' : missionCompleted ? 'text-slate-400' : 'text-slate-200'
                                }`}>
                                  {mission.title}
                                </p>
                                {mission.isKeyMission && (
                                  <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/30">
                                    핵심
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                                  mission.difficulty === 'beginner' ? 'bg-emerald-500/20 text-emerald-400' :
                                  mission.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-red-500/20 text-red-400'
                                }`}>
                                  {mission.difficulty === 'beginner' ? '초급' :
                                   mission.difficulty === 'intermediate' ? '중급' : '고급'}
                                </span>
                                <span className="text-xs text-slate-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {mission.estimatedMinutes}분
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-bold ${missionLocked ? 'text-slate-600' : 'text-yellow-500'}`}>
                                +{mission.exp} XP
                              </span>
                              {!missionLocked && (
                                <PlayCircle className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                              )}
                            </div>
                          </button>
                        );
                      })}

                      {week.project && (
                        <div className="mt-4 p-4 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-xl border border-indigo-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-indigo-400" />
                            <span className="font-bold text-indigo-300">
                              프로젝트: {week.project.title}
                            </span>
                          </div>
                          <p className="text-sm text-indigo-300/70 mb-2">
                            {week.project.description}
                          </p>
                          <span className="text-xs font-bold text-indigo-400">+{week.project.exp} XP</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Coming Soon Section */}
      <div className="mt-12 pt-10 border-t border-slate-700 text-center">
        <div className="inline-block p-3 rounded-full bg-slate-700/50 mb-4 text-slate-500">
          <BookOpen className="w-6 h-6" />
        </div>
        <p className="text-slate-400 mb-5 font-medium">더 많은 학습 컨텐츠가 준비 중입니다</p>
        <button
          onClick={() => navigate('/learn')}
          className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 hover:text-white rounded-xl text-sm font-bold transition-all border border-slate-600 hover:border-slate-500 shadow-sm"
        >
          전체 커리큘럼 로드맵 보기
        </button>
      </div>
    </div>
  );
};

// Mission List Component
const MissionList: React.FC<{ unit: Unit; week: Week }> = ({ unit, week }) => {
  const navigate = useNavigate();
  const { progress, isWeekUnlocked, isMissionUnlocked, getWeekKeyMissionProgress } = useProgressStore();

  const weekIsLocked = !isWeekUnlocked(unit.id, week.id);
  const keyMissionProgress = getWeekKeyMissionProgress(unit.id, week.id);

  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate(`/learn/${unit.id}`)}
          className="flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {unit.title}
        </button>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl font-bold text-white">
            Week {week.number}: {week.title}
          </h1>
          {weekIsLocked && (
            <span className="text-xs font-bold text-amber-400 bg-amber-500/20 px-3 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1">
              <Lock className="w-3 h-3" />
              잠김
            </span>
          )}
        </div>
        <p className="text-slate-400">{weekIsLocked ? '이전 주차의 핵심 미션을 80% 이상 완료해야 합니다.' : week.description}</p>

        {/* Key Mission Progress */}
        {keyMissionProgress.total > 0 && (
          <div className="mt-4 p-4 bg-slate-700/40 rounded-xl border border-slate-600/50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-slate-300">핵심 미션 진행률</span>
              </div>
              <span className="text-sm font-bold text-slate-300">
                {keyMissionProgress.completed} / {keyMissionProgress.total} ({keyMissionProgress.percent}%)
              </span>
            </div>
            <div className="h-2 bg-slate-600/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-500"
                style={{ width: `${keyMissionProgress.percent}%` }}
              />
            </div>
            {keyMissionProgress.percent >= 80 && (
              <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                다음 주차가 해금되었습니다!
              </p>
            )}
          </div>
        )}
      </div>

      {/* Missions */}
      <div className="space-y-3">
        {week.missions.map((mission, index) => {
          const isCompleted = progress.completedMissions.includes(mission.id);
          const missionIsLocked = weekIsLocked || !isMissionUnlocked(mission.id, unit.id, week.id);

          return (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => {
                  if (missionIsLocked) {
                    alert('이 미션은 아직 잠겨있습니다. 이전 주차의 핵심 미션을 먼저 완료해주세요.');
                  } else {
                    navigate(`/mission/${mission.id}`);
                  }
                }}
                disabled={missionIsLocked}
                className={`w-full text-left p-5 rounded-2xl border transition-all group ${
                  missionIsLocked
                    ? 'border-slate-700 bg-slate-800/40 opacity-60 cursor-not-allowed'
                    : 'border-slate-600/50 bg-slate-700/40 hover:bg-slate-700/60 hover:border-slate-500'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 transition-transform duration-300 ${
                      !missionIsLocked && 'group-hover:scale-105'
                    } ${
                      missionIsLocked
                        ? 'bg-slate-800 border-slate-700'
                        : isCompleted
                        ? 'bg-emerald-500/10 border-emerald-500/30'
                        : 'bg-slate-700 border-slate-600'
                    }`}
                  >
                    {missionIsLocked ? (
                      <Lock className="w-6 h-6 text-slate-600" />
                    ) : isCompleted ? (
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    ) : (
                      <span className="text-2xl">
                        {mission.type === 'coding' ? '💻' :
                         mission.type === 'drag-drop' ? '🧩' :
                         mission.type === 'quiz' ? '📝' :
                         mission.type === 'pattern-recognition' ? '🔍' :
                         mission.type === 'visual-programming' ? '🤖' :
                         mission.type === 'interactive-lesson' ? '📖' :
                         mission.type === 'hands-on' ? '🛠️' :
                         mission.type === 'discussion' ? '💬' :
                         mission.type === 'writing' ? '✍️' : '📋'}
                      </span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className={`font-bold ${missionIsLocked ? 'text-slate-600' : 'text-white'}`}>
                        {mission.title}
                      </h3>
                      {mission.isKeyMission && (
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          핵심
                        </span>
                      )}
                    </div>
                    <p className={`text-sm line-clamp-1 ${missionIsLocked ? 'text-slate-600' : 'text-slate-400'}`}>
                      {mission.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        mission.difficulty === 'beginner'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : mission.difficulty === 'intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {mission.difficulty === 'beginner' ? '초급' :
                         mission.difficulty === 'intermediate' ? '중급' : '고급'}
                      </span>
                      {mission.concept && (
                        <span className={`text-xs ${missionIsLocked ? 'text-slate-600' : 'text-slate-500'}`}>
                          {mission.concept}
                        </span>
                      )}
                      <span className={`text-xs flex items-center gap-1 ${missionIsLocked ? 'text-slate-600' : 'text-slate-500'}`}>
                        <Clock className="w-3 h-3" /> {mission.estimatedMinutes}분
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className={`text-sm font-bold ${missionIsLocked ? 'text-slate-600' : 'text-yellow-500'}`}>
                      +{mission.exp} XP
                    </p>
                  </div>

                  {missionIsLocked ? (
                    <Lock className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                  )}
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Learn;

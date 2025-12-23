import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle, Lightbulb, Gamepad2, Star, Target, Clock, Zap, HelpCircle, ChevronRight, BookOpen, AlertCircle } from 'lucide-react';
import type { Mission, GameType } from '../types';

interface Props {
  mission: Mission;
  onComplete: (perfect: boolean) => void;
}

interface GameObject {
  id: string;
  type: 'player' | 'item' | 'obstacle' | 'projectile' | 'boss';
  x: number;
  y: number;
  emoji: string;
  active: boolean;
  health?: number;
}

interface AssembledBlock {
  id: string;
  type: string;
}

interface BlockInfo {
  name: string;
  description: string;
  example: string;
  category: 'start' | 'character' | 'movement' | 'item' | 'collision' | 'score' | 'timer' | 'loop' | 'end';
}

// 블록별 상세 설명
const BLOCK_DESCRIPTIONS: Record<string, BlockInfo> = {
  '🎮 게임 시작': {
    name: '게임 시작',
    description: '모든 게임은 이 블록으로 시작해요! 게임이 실행될 때 가장 먼저 실행돼요.',
    example: '게임을 실행하면 이 블록 아래의 모든 블록이 순서대로 실행돼요.',
    category: 'start',
  },
  '👤 캐릭터 추가': {
    name: '캐릭터 추가',
    description: '게임 화면에 조종할 수 있는 캐릭터가 나타나요!',
    example: '귀여운 고양이 캐릭터가 화면 중앙에 등장해요.',
    category: 'character',
  },
  '⬆️ 키보드로 이동': {
    name: '키보드로 이동',
    description: '방향키(↑↓←→)나 WASD 키로 캐릭터를 움직일 수 있어요!',
    example: '↑키를 누르면 위로, →키를 누르면 오른쪽으로 이동해요.',
    category: 'movement',
  },
  '⌨️ 키보드로 이동': {
    name: '키보드로 이동',
    description: '방향키(↑↓←→)나 WASD 키로 캐릭터를 움직일 수 있어요!',
    example: '↑키를 누르면 위로, →키를 누르면 오른쪽으로 이동해요.',
    category: 'movement',
  },
  '⭐ 아이템 생성': {
    name: '아이템 생성',
    description: '게임 화면에 수집할 수 있는 아이템(별, 보석 등)이 나타나요!',
    example: '랜덤한 위치에 반짝이는 별이 생성돼요.',
    category: 'item',
  },
  '💣 장애물 생성': {
    name: '장애물 생성',
    description: '피해야 하는 장애물이 화면에 나타나요!',
    example: '위에서 폭탄이 떨어져요. 닿으면 게임 오버!',
    category: 'item',
  },
  '💥 충돌 감지': {
    name: '충돌 감지',
    description: '캐릭터가 아이템이나 장애물에 닿았는지 확인해요!',
    example: '별에 닿으면 수집, 폭탄에 닿으면 점수 감소!',
    category: 'collision',
  },
  '💥 충돌하면': {
    name: '충돌하면',
    description: '캐릭터가 다른 물체와 부딪히면 이 블록 안의 내용이 실행돼요!',
    example: '아이템에 닿으면 → 점수 올리기',
    category: 'collision',
  },
  '🔢 점수 +1': {
    name: '점수 +1',
    description: '점수를 1점 올려요!',
    example: '아이템을 수집할 때마다 점수가 1씩 올라가요.',
    category: 'score',
  },
  '⭐ 점수 +1': {
    name: '점수 +1',
    description: '점수를 1점 올려요!',
    example: '아이템을 수집할 때마다 점수가 1씩 올라가요.',
    category: 'score',
  },
  '⏱️ 타이머 설정': {
    name: '타이머 설정',
    description: '제한 시간을 설정해요! 시간이 다 되면 게임이 끝나요.',
    example: '30초 안에 목표 점수를 달성해야 해요!',
    category: 'timer',
  },
  '⏱️ 타이머': {
    name: '타이머',
    description: '제한 시간을 설정해요!',
    example: '30초 카운트다운이 시작돼요.',
    category: 'timer',
  },
  '🔄 계속 반복': {
    name: '계속 반복',
    description: '게임이 끝날 때까지 계속해서 블록을 실행해요!',
    example: '아이템이 계속 새로 생성되고, 충돌 체크가 계속 일어나요.',
    category: 'loop',
  },
  '🏁 목표 달성시 성공': {
    name: '목표 달성시 성공',
    description: '목표 점수에 도달하면 게임 클리어!',
    example: '10점을 모으면 "게임 클리어!" 메시지가 나와요.',
    category: 'end',
  },
  '🏁 게임 오버': {
    name: '게임 오버',
    description: '장애물에 닿거나 시간이 다 되면 게임이 끝나요.',
    example: '폭탄에 3번 닿으면 게임 오버!',
    category: 'end',
  },
  '🖱️ 클릭하면': {
    name: '클릭하면',
    description: '화면을 클릭(터치)하면 이 블록 안의 내용이 실행돼요!',
    example: '화면 클릭 → 점수 +1',
    category: 'collision',
  },
  '🎯 목표물 생성': {
    name: '목표물 생성',
    description: '맞춰야 하는 목표물이 나타나요!',
    example: '과녁이나 외계인이 화면에 등장해요.',
    category: 'item',
  },
  '💫 발사하기': {
    name: '발사하기',
    description: '스페이스바를 누르면 탄환을 발사해요!',
    example: '캐릭터 위치에서 위쪽으로 탄환이 날아가요.',
    category: 'movement',
  },
  '👹 보스 등장': {
    name: '보스 등장',
    description: '강력한 보스가 나타나요! 여러 번 맞춰야 물리칠 수 있어요.',
    example: '보스는 체력이 5칸이에요. 5번 맞추면 처치!',
    category: 'item',
  },
  '❤️ 보스 체력 -1': {
    name: '보스 체력 -1',
    description: '보스의 체력을 1 줄여요.',
    example: '탄환이 보스에 맞으면 체력이 1 줄어들어요.',
    category: 'score',
  },
  '🌟 파워업 생성': {
    name: '파워업 생성',
    description: '특별한 아이템이 생성돼요! 먹으면 강해져요!',
    example: '무적, 2배 점수, 속도 증가 효과!',
    category: 'item',
  },
  '💪 파워업 효과': {
    name: '파워업 효과',
    description: '파워업 아이템을 먹으면 적용되는 효과예요.',
    example: '5초간 무적 상태가 돼요!',
    category: 'score',
  },
  '📊 레벨 체크': {
    name: '레벨 체크',
    description: '현재 점수에 따라 레벨을 확인해요.',
    example: '10점마다 레벨이 1 올라가요.',
    category: 'score',
  },
  '📈 레벨 업': {
    name: '레벨 업',
    description: '레벨이 올라가면 게임이 더 어려워져요!',
    example: '레벨 2가 되면 장애물이 더 빨라져요.',
    category: 'score',
  },
  '📈 속도 증가': {
    name: '속도 증가',
    description: '게임 속도가 빨라져요!',
    example: '시간이 지날수록 장애물이 더 빨리 떨어져요.',
    category: 'timer',
  },
  '❓ 질문 표시': {
    name: '질문 표시',
    description: '퀴즈 문제가 화면에 나타나요!',
    example: '"3 + 5 = ?" 같은 문제가 표시돼요.',
    category: 'item',
  },
  '✅ 정답 버튼': {
    name: '정답 버튼',
    description: '정답을 선택하는 버튼이에요!',
    example: '정답을 클릭하면 점수가 올라가요.',
    category: 'item',
  },
  '❌ 오답 버튼': {
    name: '오답 버튼',
    description: '오답을 선택하는 버튼이에요.',
    example: '오답을 클릭하면 게임 오버!',
    category: 'item',
  },
  '🏆 보스 처치': {
    name: '보스 처치',
    description: '보스를 물리치면 게임 클리어!',
    example: '보스 체력이 0이 되면 승리!',
    category: 'end',
  },
  '🔄 목표물 이동': {
    name: '목표물 이동',
    description: '목표물이 좌우로 움직여요.',
    example: '과녁이 왔다 갔다 움직여서 맞추기 어려워요!',
    category: 'movement',
  },
};

// 미션별 올바른 블록 순서 정의
const getMissionBlockOrder = (missionId: string): string[] => {
  const orders: Record<string, string[]> = {
    // Week 10 미션들
    '2-10-1': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1'],
    '2-10-2': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1', '🏁 목표 달성시 성공'],
    '2-10-3': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '🔄 계속 반복'],
    '2-10-4': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '⭐ 아이템 생성', '💥 충돌 감지', '🔢 점수 +1', '🏁 목표 달성시 성공'],
    '2-10-5': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '⭐ 아이템 생성', '💥 충돌 감지', '🔢 점수 +1', '⏱️ 타이머 설정', '🏁 목표 달성시 성공'],
    // Week 15 - 게임 메이커 I
    '2-15-2': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1'],
    '2-15-3': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '⭐ 아이템 생성', '🔄 계속 반복', '💥 충돌하면', '⭐ 점수 +1', '🏁 목표 달성시 성공'],
    '2-15-4': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '💣 장애물 생성', '🔄 계속 반복', '💥 충돌하면', '🏁 게임 오버'],
    '2-15-5': ['🎮 게임 시작', '👤 캐릭터 추가', '⏱️ 타이머 설정', '🔄 계속 반복', '🏁 게임 오버'],
    '2-15-6': ['🎮 게임 시작', '👤 캐릭터 추가', '⭐ 점수 +1', '📊 레벨 체크', '📈 레벨 업', '📈 속도 증가'],
    '2-15-7': ['🎮 게임 시작', '👤 캐릭터 추가', '💣 장애물 생성', '🔄 계속 반복', '💥 충돌하면', '❤️ 보스 체력 -1', '🏁 게임 오버'],
    '2-15-8': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1', '🏁 목표 달성시 성공'],
    '2-15-9': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1', '📊 레벨 체크', '📈 레벨 업', '📈 속도 증가', '🏁 목표 달성시 성공'],
    // Week 16 - 게임 메이커 II
    '2-16-1': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '💫 발사하기', '🎯 목표물 생성', '💥 충돌하면', '⭐ 점수 +1'],
    '2-16-2': ['🎮 게임 시작', '🎯 목표물 생성', '🔄 목표물 이동', '🔄 계속 반복', '💫 발사하기', '💥 충돌하면', '⭐ 점수 +1'],
    '2-16-3': ['🎮 게임 시작', '❓ 질문 표시', '✅ 정답 버튼', '❌ 오답 버튼', '⭐ 점수 +1', '🏁 목표 달성시 성공'],
    '2-16-4': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '💣 장애물 생성', '🔄 계속 반복', '💥 충돌하면', '🏁 목표 달성시 성공', '🏁 게임 오버'],
    '2-16-5': ['🎮 게임 시작', '👤 캐릭터 추가', '🖱️ 클릭하면', '⭐ 점수 +1', '📊 레벨 체크', '🏁 목표 달성시 성공'],
    '2-16-6': ['🎮 게임 시작', '🖱️ 클릭하면', '👤 캐릭터 추가', '🔄 계속 반복'],
    '2-16-7': ['🎮 게임 시작', '💥 충돌하면', '🏁 게임 오버', '🖱️ 클릭하면'],
    '2-16-8': ['🎮 게임 시작', '👤 캐릭터 추가', '🔄 계속 반복', '🖱️ 클릭하면', '⭐ 점수 +1'],
    '2-16-9': ['🎮 게임 시작', '👤 캐릭터 추가', '⬆️ 키보드로 이동', '⭐ 아이템 생성', '💣 장애물 생성', '🔄 계속 반복', '💥 충돌하면', '⭐ 점수 +1', '📊 레벨 체크', '📈 레벨 업', '⏱️ 타이머 설정', '🏁 목표 달성시 성공', '🏁 게임 오버'],
  };
  return orders[missionId] || [];
};

// 단계별 튜토리얼 메시지
const getTutorialSteps = (missionId: string): { block: string; message: string; tip: string }[] => {
  const tutorials: Record<string, { block: string; message: string; tip: string }[]> = {
    '2-10-1': [
      { block: '🎮 게임 시작', message: '먼저 "게임 시작" 블록을 추가하세요!', tip: '모든 게임은 이 블록으로 시작해요.' },
      { block: '👤 캐릭터 추가', message: '이제 "캐릭터 추가" 블록을 넣으세요!', tip: '화면에 조종할 캐릭터가 나타나요.' },
      { block: '🖱️ 클릭하면', message: '"클릭하면" 블록을 추가하세요!', tip: '화면을 클릭하면 다음 블록이 실행돼요.' },
      { block: '⭐ 점수 +1', message: '마지막으로 "점수 +1" 블록!', tip: '클릭할 때마다 점수가 올라가요!' },
    ],
    '2-10-2': [
      { block: '🎮 게임 시작', message: '"게임 시작" 블록부터!', tip: '게임의 첫 시작점이에요.' },
      { block: '👤 캐릭터 추가', message: '"캐릭터 추가" 블록!', tip: '플레이어 캐릭터를 만들어요.' },
      { block: '🖱️ 클릭하면', message: '"클릭하면" 블록!', tip: '클릭 이벤트를 감지해요.' },
      { block: '⭐ 점수 +1', message: '"점수 +1" 블록!', tip: '점수를 올리는 블록이에요.' },
      { block: '🏁 목표 달성시 성공', message: '"목표 달성시 성공" 블록!', tip: '목표 점수에 도달하면 클리어!' },
    ],
    '2-10-3': [
      { block: '🎮 게임 시작', message: '"게임 시작"으로 시작!', tip: '항상 이 블록이 첫 번째예요.' },
      { block: '👤 캐릭터 추가', message: '"캐릭터 추가"!', tip: '움직일 캐릭터가 필요해요.' },
      { block: '⬆️ 키보드로 이동', message: '"키보드로 이동" 블록!', tip: '방향키로 캐릭터를 조종해요.' },
      { block: '🔄 계속 반복', message: '"계속 반복" 블록!', tip: '이동이 계속 체크되어야 해요!' },
    ],
    '2-10-4': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '첫 번째 블록!' },
      { block: '👤 캐릭터 추가', message: '캐릭터 추가!', tip: '플레이어 생성!' },
      { block: '⬆️ 키보드로 이동', message: '키보드로 이동!', tip: '방향키 조작!' },
      { block: '⭐ 아이템 생성', message: '아이템 생성!', tip: '수집할 별이 나타나요!' },
      { block: '💥 충돌 감지', message: '충돌 감지!', tip: '별에 닿으면 감지!' },
      { block: '🔢 점수 +1', message: '점수 +1!', tip: '별을 모으면 점수 UP!' },
      { block: '🏁 목표 달성시 성공', message: '목표 달성시 성공!', tip: '10점 모으면 클리어!' },
    ],
    '2-10-5': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '' },
      { block: '⬆️ 키보드로 이동', message: '이동!', tip: '' },
      { block: '⭐ 아이템 생성', message: '아이템!', tip: '' },
      { block: '💥 충돌 감지', message: '충돌!', tip: '' },
      { block: '🔢 점수 +1', message: '점수!', tip: '' },
      { block: '⏱️ 타이머 설정', message: '타이머 추가!', tip: '30초 제한 시간!' },
      { block: '🏁 목표 달성시 성공', message: '성공 조건!', tip: '' },
    ],
    // Week 15 - 게임 메이커 I
    '2-15-2': [
      { block: '🎮 게임 시작', message: '게임 시작 블록!', tip: '클리커 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '클릭할 캐릭터!', tip: '클릭 대상이 될 캐릭터예요.' },
      { block: '🖱️ 클릭하면', message: '클릭 이벤트!', tip: '캐릭터를 클릭하면 실행돼요.' },
      { block: '⭐ 점수 +1', message: '점수 올리기!', tip: '클릭할 때마다 점수 UP!' },
    ],
    '2-15-3': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '수집 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '플레이어!', tip: '아이템을 수집할 캐릭터예요.' },
      { block: '⬆️ 키보드로 이동', message: '이동 설정!', tip: '방향키로 움직여요.' },
      { block: '⭐ 아이템 생성', message: '아이템 생성!', tip: '수집할 별이 나타나요.' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '계속 아이템을 체크해요.' },
      { block: '💥 충돌하면', message: '충돌 감지!', tip: '아이템에 닿으면!' },
      { block: '⭐ 점수 +1', message: '점수 획득!', tip: '아이템 수집 성공!' },
      { block: '🏁 목표 달성시 성공', message: '목표 달성!', tip: '20점 모으면 클리어!' },
    ],
    '2-15-4': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '피하기 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '플레이어!', tip: '장애물을 피할 캐릭터예요.' },
      { block: '⬆️ 키보드로 이동', message: '이동!', tip: '방향키로 피해요.' },
      { block: '💣 장애물 생성', message: '장애물!', tip: '피해야 할 장애물이에요.' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '계속 체크해요.' },
      { block: '💥 충돌하면', message: '충돌!', tip: '장애물에 닿으면...' },
      { block: '🏁 게임 오버', message: '게임 오버!', tip: '닿으면 게임 끝!' },
    ],
    '2-15-5': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '타이머 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '플레이어 캐릭터예요.' },
      { block: '⏱️ 타이머 설정', message: '타이머!', tip: '30초 제한 시간!' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '시간을 계속 체크해요.' },
      { block: '🏁 게임 오버', message: '시간 초과!', tip: '시간이 다 되면 끝!' },
    ],
    '2-15-6': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '레벨 시스템을 배워요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '플레이어예요.' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '점수를 모아요.' },
      { block: '📊 레벨 체크', message: '레벨 체크!', tip: '점수가 일정량이면...' },
      { block: '📈 레벨 업', message: '레벨 업!', tip: '레벨이 올라가요!' },
      { block: '📈 속도 증가', message: '속도 증가!', tip: '게임이 빨라져요!' },
    ],
    '2-15-7': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '생명 시스템을 배워요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '3번의 기회가 있어요.' },
      { block: '💣 장애물 생성', message: '장애물!', tip: '피해야 해요.' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '계속 체크!' },
      { block: '💥 충돌하면', message: '충돌!', tip: '장애물에 닿으면...' },
      { block: '❤️ 보스 체력 -1', message: '생명 -1!', tip: '기회가 줄어요.' },
      { block: '🏁 게임 오버', message: '게임 오버!', tip: '생명이 0이면 끝!' },
    ],
    '2-15-8': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '소리 효과를 배워요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '클릭할 대상이에요.' },
      { block: '🖱️ 클릭하면', message: '클릭!', tip: '클릭하면 소리가 나요.' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '효과음과 함께!' },
      { block: '🏁 목표 달성시 성공', message: '완료!', tip: '목표 달성!' },
    ],
    '2-15-9': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '완성 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '클릭 대상이에요.' },
      { block: '🖱️ 클릭하면', message: '클릭!', tip: '클릭 이벤트!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '점수를 모아요.' },
      { block: '📊 레벨 체크', message: '레벨 체크!', tip: '레벨업 조건!' },
      { block: '📈 레벨 업', message: '레벨 업!', tip: '더 빨라져요!' },
      { block: '📈 속도 증가', message: '속도!', tip: '난이도 상승!' },
      { block: '🏁 목표 달성시 성공', message: '클리어!', tip: '50점 달성!' },
    ],
    // Week 16 - 게임 메이커 II
    '2-16-1': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '슈팅 게임을 만들어요.' },
      { block: '👤 캐릭터 추가', message: '플레이어!', tip: '탄환을 발사해요.' },
      { block: '⬆️ 키보드로 이동', message: '이동!', tip: '좌우로 움직여요.' },
      { block: '💫 발사하기', message: '발사!', tip: '스페이스바로 발사!' },
      { block: '🎯 목표물 생성', message: '적!', tip: '맞춰야 할 적이에요.' },
      { block: '💥 충돌하면', message: '명중!', tip: '탄환이 적에 닿으면!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '처치 성공!' },
    ],
    '2-16-2': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '적 움직임을 배워요.' },
      { block: '🎯 목표물 생성', message: '적 생성!', tip: '움직이는 적이에요.' },
      { block: '🔄 목표물 이동', message: '적 이동!', tip: '좌우로 움직여요.' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '계속 움직여요.' },
      { block: '💫 발사하기', message: '발사!', tip: '움직이는 적을 맞춰요.' },
      { block: '💥 충돌하면', message: '명중!', tip: '맞추면!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '점수 획득!' },
    ],
    '2-16-3': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '퀴즈 게임을 만들어요.' },
      { block: '❓ 질문 표시', message: '문제!', tip: '퀴즈 문제예요.' },
      { block: '✅ 정답 버튼', message: '정답!', tip: '정답을 클릭하면!' },
      { block: '❌ 오답 버튼', message: '오답!', tip: '오답은 피해요.' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '정답이면 점수 UP!' },
      { block: '🏁 목표 달성시 성공', message: '클리어!', tip: '문제를 다 풀면 성공!' },
    ],
    '2-16-4': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '플랫포머를 만들어요.' },
      { block: '👤 캐릭터 추가', message: '플레이어!', tip: '점프하는 캐릭터예요.' },
      { block: '⬆️ 키보드로 이동', message: '점프!', tip: '스페이스로 점프!' },
      { block: '💣 장애물 생성', message: '플랫폼!', tip: '밟을 수 있어요.' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '중력이 작용해요.' },
      { block: '💥 충돌하면', message: '착지!', tip: '플랫폼에 닿으면!' },
      { block: '🏁 목표 달성시 성공', message: '목표!', tip: '골인지점 도달!' },
      { block: '🏁 게임 오버', message: '실패!', tip: '떨어지면 게임 오버!' },
    ],
    '2-16-5': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '하이스코어를 배워요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '점수를 모아요.' },
      { block: '🖱️ 클릭하면', message: '클릭!', tip: '클릭해서 점수!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '점수가 올라가요.' },
      { block: '📊 레벨 체크', message: '기록 체크!', tip: '최고 점수인지 확인!' },
      { block: '🏁 목표 달성시 성공', message: '신기록!', tip: '최고 점수 달성!' },
    ],
    '2-16-6': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '시작 화면을 만들어요.' },
      { block: '🖱️ 클릭하면', message: '시작 버튼!', tip: '클릭하면 게임 시작!' },
      { block: '👤 캐릭터 추가', message: '캐릭터 등장!', tip: '게임이 시작돼요.' },
      { block: '🔄 계속 반복', message: '게임 시작!', tip: '게임이 진행돼요.' },
    ],
    '2-16-7': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '게임 오버 화면을 만들어요.' },
      { block: '💥 충돌하면', message: '충돌!', tip: '장애물에 닿으면!' },
      { block: '🏁 게임 오버', message: '게임 오버!', tip: '게임이 끝나요.' },
      { block: '🖱️ 클릭하면', message: '다시 시작!', tip: '클릭해서 재시작!' },
    ],
    '2-16-8': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '배경 음악을 넣어요.' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '플레이어예요.' },
      { block: '🔄 계속 반복', message: '음악 재생!', tip: '배경 음악이 계속 나와요.' },
      { block: '🖱️ 클릭하면', message: '클릭!', tip: '클릭하면 효과음!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '점수가 올라가요.' },
    ],
    '2-16-9': [
      { block: '🎮 게임 시작', message: '게임 시작!', tip: '완성 게임을 만들어요!' },
      { block: '👤 캐릭터 추가', message: '캐릭터!', tip: '주인공이에요.' },
      { block: '⬆️ 키보드로 이동', message: '이동!', tip: '방향키로 조작해요.' },
      { block: '⭐ 아이템 생성', message: '아이템!', tip: '수집해요!' },
      { block: '💣 장애물 생성', message: '장애물!', tip: '피해야 해요!' },
      { block: '🔄 계속 반복', message: '게임 루프!', tip: '계속 진행!' },
      { block: '💥 충돌하면', message: '충돌!', tip: '닿으면 반응!' },
      { block: '⭐ 점수 +1', message: '점수!', tip: '아이템 수집!' },
      { block: '📊 레벨 체크', message: '레벨!', tip: '레벨업 체크!' },
      { block: '📈 레벨 업', message: '레벨 업!', tip: '더 어려워져요!' },
      { block: '⏱️ 타이머 설정', message: '타이머!', tip: '제한 시간!' },
      { block: '🏁 목표 달성시 성공', message: '클리어!', tip: '목표 달성!' },
      { block: '🏁 게임 오버', message: '게임 오버!', tip: '실패하면 끝!' },
    ],
  };
  return tutorials[missionId] || [];
};

const GameMakerMission: React.FC<Props> = ({ mission, onComplete }) => {
  const [assembledBlocks, setAssembledBlocks] = useState<AssembledBlock[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gameObjects, setGameObjects] = useState<GameObject[]>([]);
  const [playerPos, setPlayerPos] = useState({ x: 150, y: 150 });
  const [playerDirection, setPlayerDirection] = useState<'up' | 'down' | 'left' | 'right'>('up');
  const [selectedBlockInfo, setSelectedBlockInfo] = useState<BlockInfo | null>(null);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showLearningPanel, setShowLearningPanel] = useState(true);
  const [blockValidation, setBlockValidation] = useState<{ valid: boolean; message: string } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const keysPressed = useRef<Set<string>>(new Set());

  const gameType = mission.gameType || 'collect-game';
  const winCondition = mission.winCondition || { type: 'score', target: 10 };
  const tutorialSteps = getTutorialSteps(mission.id);
  const correctBlockOrder = getMissionBlockOrder(mission.id);

  // 블록 추가 시 튜토리얼 진행
  useEffect(() => {
    if (tutorialSteps.length > 0 && assembledBlocks.length > 0) {
      const currentStep = tutorialSteps[tutorialStep];
      if (currentStep) {
        const lastBlock = assembledBlocks[assembledBlocks.length - 1];
        if (lastBlock.type === currentStep.block || lastBlock.type.includes(currentStep.block.slice(2))) {
          if (tutorialStep < tutorialSteps.length - 1) {
            setTutorialStep(tutorialStep + 1);
          } else {
            setShowTutorial(false);
          }
        }
      }
    }
  }, [assembledBlocks, tutorialStep, tutorialSteps]);

  // 블록 순서 검증
  useEffect(() => {
    if (correctBlockOrder.length === 0) {
      setBlockValidation(null);
      return;
    }

    if (assembledBlocks.length === 0) {
      setBlockValidation({ valid: true, message: '블록을 추가해주세요!' });
      return;
    }

    let isValid = true;
    let message = '';

    for (let i = 0; i < assembledBlocks.length; i++) {
      const expectedBlock = correctBlockOrder[i];
      const actualBlock = assembledBlocks[i].type;

      // 이모지 제거하고 비교
      const expectedName = expectedBlock?.replace(/^[^\s]+\s/, '') || '';
      const actualName = actualBlock.replace(/^[^\s]+\s/, '');

      if (expectedBlock && !actualBlock.includes(expectedName) && actualName !== expectedName) {
        isValid = false;
        message = `${i + 1}번째 블록은 "${expectedBlock}"이어야 해요!`;
        break;
      }
    }

    if (isValid && assembledBlocks.length < correctBlockOrder.length) {
      message = `다음 블록: "${correctBlockOrder[assembledBlocks.length]}"`;
    } else if (isValid && assembledBlocks.length === correctBlockOrder.length) {
      message = '완벽해요! 게임을 실행해보세요! 🎮';
    }

    setBlockValidation({ valid: isValid, message });
  }, [assembledBlocks, correctBlockOrder]);

  // 게임 블록 정의
  const getAvailableBlocks = (): string[] => {
    return mission.gameBlocks || [
      '🎮 게임 시작',
      '👤 캐릭터 추가',
      '⬆️ 키보드로 이동',
      '⭐ 아이템 생성',
      '💥 충돌 감지',
      '🔢 점수 +1',
      '⏱️ 타이머 설정',
      '🔄 계속 반복',
      '🏁 목표 달성시 성공',
    ];
  };

  // 블록 스타일
  const getBlockStyle = (block: string) => {
    if (block.includes('게임 시작')) return 'from-green-500 to-green-700';
    if (block.includes('캐릭터')) return 'from-blue-500 to-blue-700';
    if (block.includes('이동') || block.includes('키보드')) return 'from-cyan-500 to-cyan-700';
    if (block.includes('아이템') || block.includes('⭐') || block.includes('생성')) return 'from-yellow-500 to-yellow-700';
    if (block.includes('충돌') || block.includes('클릭')) return 'from-red-500 to-red-700';
    if (block.includes('점수') || block.includes('레벨')) return 'from-purple-500 to-purple-700';
    if (block.includes('타이머') || block.includes('속도')) return 'from-orange-500 to-orange-700';
    if (block.includes('반복')) return 'from-indigo-500 to-indigo-700';
    if (block.includes('목표') || block.includes('성공') || block.includes('오버') || block.includes('처치')) return 'from-emerald-500 to-emerald-700';
    if (block.includes('보스') || block.includes('장애물')) return 'from-rose-500 to-rose-700';
    if (block.includes('파워업')) return 'from-pink-500 to-pink-700';
    if (block.includes('발사')) return 'from-amber-500 to-amber-700';
    return 'from-slate-500 to-slate-700';
  };

  // 블록 카테고리별 색상
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'start': return 'bg-green-500';
      case 'character': return 'bg-blue-500';
      case 'movement': return 'bg-cyan-500';
      case 'item': return 'bg-yellow-500';
      case 'collision': return 'bg-red-500';
      case 'score': return 'bg-purple-500';
      case 'timer': return 'bg-orange-500';
      case 'loop': return 'bg-indigo-500';
      case 'end': return 'bg-emerald-500';
      default: return 'bg-slate-500';
    }
  };

  // 블록 추가
  const addBlock = (type: string) => {
    setAssembledBlocks([...assembledBlocks, {
      id: `block-${Date.now()}`,
      type,
    }]);

    // 블록 정보 표시
    const info = BLOCK_DESCRIPTIONS[type];
    if (info) {
      setSelectedBlockInfo(info);
      setTimeout(() => setSelectedBlockInfo(null), 3000);
    }
  };

  // 블록 삭제
  const removeBlock = (index: number) => {
    setAssembledBlocks(assembledBlocks.filter((_, i) => i !== index));
    // 튜토리얼 스텝 조정
    if (tutorialStep > 0 && index < tutorialStep) {
      setTutorialStep(Math.max(0, tutorialStep - 1));
    }
  };

  // 블록 이동
  const moveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index > 0) {
      const newBlocks = [...assembledBlocks];
      [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
      setAssembledBlocks(newBlocks);
    } else if (direction === 'down' && index < assembledBlocks.length - 1) {
      const newBlocks = [...assembledBlocks];
      [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      setAssembledBlocks(newBlocks);
    }
  };

  // 아이템 생성
  const spawnItem = useCallback(() => {
    const emojis = ['⭐', '💎', '🍎', '🍕', '🎁'];
    const newItem: GameObject = {
      id: `item-${Date.now()}-${Math.random()}`,
      type: 'item',
      x: Math.random() * 260 + 20,
      y: Math.random() * 260 + 20,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      active: true,
    };
    setGameObjects(prev => [...prev, newItem]);
  }, []);

  // 장애물 생성
  const spawnObstacle = useCallback(() => {
    const emojis = ['🪨', '💣', '🔥', '⚡'];
    const newObstacle: GameObject = {
      id: `obs-${Date.now()}-${Math.random()}`,
      type: 'obstacle',
      x: Math.random() * 260 + 20,
      y: 0,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      active: true,
    };
    setGameObjects(prev => [...prev, newObstacle]);
  }, []);

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current.add(e.key);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 게임 루프
  const runGameLoop = useCallback(() => {
    if (!isRunning || isPaused) return;

    const hasMovement = assembledBlocks.some(b => b.type.includes('이동') || b.type.includes('키보드'));
    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    const hasCollision = assembledBlocks.some(b => b.type.includes('충돌'));
    const hasScore = assembledBlocks.some(b => b.type.includes('점수'));

    // 플레이어 이동
    if (hasMovement) {
      const speed = 5;
      let newX = playerPos.x;
      let newY = playerPos.y;

      if (keysPressed.current.has('ArrowUp') || keysPressed.current.has('w')) {
        newY = Math.max(20, newY - speed);
        setPlayerDirection('up');
      }
      if (keysPressed.current.has('ArrowDown') || keysPressed.current.has('s')) {
        newY = Math.min(280, newY + speed);
        setPlayerDirection('down');
      }
      if (keysPressed.current.has('ArrowLeft') || keysPressed.current.has('a')) {
        newX = Math.max(20, newX - speed);
        setPlayerDirection('left');
      }
      if (keysPressed.current.has('ArrowRight') || keysPressed.current.has('d')) {
        newX = Math.min(280, newX + speed);
        setPlayerDirection('right');
      }

      setPlayerPos({ x: newX, y: newY });
    }

    // 장애물 이동 (피하기 게임)
    if (gameType === 'dodge-game') {
      setGameObjects(prev => prev.map(obj => {
        if (obj.type === 'obstacle') {
          const newY = obj.y + 3;
          if (newY > 320) {
            return { ...obj, y: -20, x: Math.random() * 260 + 20 };
          }
          return { ...obj, y: newY };
        }
        return obj;
      }));
    }

    // 충돌 감지
    if (hasCollision) {
      setGameObjects(prev => {
        let itemCollected = false;
        let hitObstacle = false;

        const updated = prev.map(obj => {
          if (!obj.active) return obj;

          const distance = Math.sqrt(
            Math.pow(obj.x - playerPos.x, 2) + Math.pow(obj.y - playerPos.y, 2)
          );

          if (distance < 30) {
            if (obj.type === 'item') {
              itemCollected = true;
              return { ...obj, active: false };
            } else if (obj.type === 'obstacle') {
              hitObstacle = true;
            }
          }
          return obj;
        });

        if (itemCollected && hasScore) {
          setScore(s => s + 1);
        }

        if (hitObstacle) {
          setScore(s => Math.max(0, s - 1));
        }

        return updated.filter(obj => obj.active || obj.type === 'obstacle');
      });
    }

    gameLoopRef.current = requestAnimationFrame(runGameLoop);
  }, [isRunning, isPaused, playerPos, assembledBlocks, gameType]);

  // 게임 루프 시작/정지
  useEffect(() => {
    if (isRunning && !isPaused) {
      gameLoopRef.current = requestAnimationFrame(runGameLoop);
    }
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isRunning, isPaused, runGameLoop]);

  // 타이머
  useEffect(() => {
    if (!isRunning || isPaused) return;

    const hasTimer = assembledBlocks.some(b => b.type.includes('타이머'));
    if (!hasTimer) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isPaused, assembledBlocks]);

  // 아이템 자동 생성
  useEffect(() => {
    if (!isRunning || isPaused) return;

    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    if (!hasItems) return;

    const interval = setInterval(() => {
      if (gameObjects.filter(o => o.type === 'item' && o.active).length < 5) {
        spawnItem();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isRunning, isPaused, assembledBlocks, gameObjects, spawnItem]);

  // 장애물 자동 생성 (피하기 게임)
  useEffect(() => {
    if (!isRunning || isPaused || gameType !== 'dodge-game') return;

    const interval = setInterval(() => {
      if (gameObjects.filter(o => o.type === 'obstacle').length < 3) {
        spawnObstacle();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isRunning, isPaused, gameType, gameObjects, spawnObstacle]);

  // 클릭 게임 처리
  const handleCanvasClick = () => {
    if (!isRunning) return;
    const hasClick = assembledBlocks.some(b => b.type.includes('클릭'));
    const hasScore = assembledBlocks.some(b => b.type.includes('점수'));
    if (hasClick && hasScore) {
      setScore(s => s + 1);
    }
  };

  // 승리 조건 확인 - 목표 점수 달성 시 자동 완료
  useEffect(() => {
    if (!isRunning) return;

    // 목표 점수 달성하면 미션 완료 (목표 달성시 성공 블록 없어도 됨)
    if (winCondition.type === 'score' && score >= winCondition.target) {
      setIsRunning(false);
      setShowSuccess(true);
      setTimeout(() => {
        onComplete(true);
      }, 2000);
    }
  }, [isRunning, score, winCondition, onComplete]);

  // 게임 시작
  const startGame = () => {
    if (assembledBlocks.length === 0) {
      setShowHint(true);
      return;
    }

    // 필수 블록 확인
    const hasStart = assembledBlocks.some(b => b.type.includes('게임 시작'));
    if (!hasStart) {
      alert('🎮 "게임 시작" 블록을 먼저 추가하세요!');
      return;
    }

    setIsRunning(true);
    setIsPaused(false);
    setScore(0);
    setTimeLeft(30);
    setGameObjects([]);
    setPlayerPos({ x: 150, y: 150 });

    // 초기 아이템 생성
    const hasItems = assembledBlocks.some(b => b.type.includes('아이템') || b.type.includes('⭐'));
    if (hasItems) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => spawnItem(), i * 500);
      }
    }
  };

  // 초기화
  const reset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setScore(0);
    setTimeLeft(30);
    setGameObjects([]);
    setPlayerPos({ x: 150, y: 150 });
    setShowSuccess(false);
    setAssembledBlocks([]);
    setTutorialStep(0);
    setShowTutorial(true);
  };

  // 게임 타입별 설명
  const getGameTypeInfo = () => {
    switch (gameType) {
      case 'click-game':
        return { icon: '🖱️', name: '클릭 게임', desc: '화면을 클릭해서 점수를 올려요!' };
      case 'collect-game':
        return { icon: '⭐', name: '수집 게임', desc: '아이템을 모아 점수를 올려요!' };
      case 'dodge-game':
        return { icon: '💨', name: '피하기 게임', desc: '장애물을 피하며 살아남아요!' };
      case 'timer-game':
        return { icon: '⏱️', name: '타이머 게임', desc: '제한 시간 내에 목표를 달성해요!' };
      case 'shooting-game':
        return { icon: '🎯', name: '슈팅 게임', desc: '목표물을 맞춰 점수를 올려요!' };
      case 'quiz-game':
        return { icon: '❓', name: '퀴즈 게임', desc: '정답을 맞춰 점수를 올려요!' };
      default:
        return { icon: '🎮', name: '미니 게임', desc: '재미있는 게임을 만들어요!' };
    }
  };

  const gameInfo = getGameTypeInfo();
  const currentTutorialStep = tutorialSteps[tutorialStep];

  return (
    <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-3xl border-2 border-slate-600 shadow-2xl p-4 md:p-6">
      {/* 헤더 */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{gameInfo.icon}</span>
          <h2 className="text-xl font-bold text-white">{mission.title}</h2>
          <span className="px-2 py-0.5 bg-indigo-500/30 text-indigo-300 text-xs rounded-full">
            {gameInfo.name}
          </span>
        </div>
        <p className="text-slate-300 text-sm">{mission.description}</p>

        {/* 개념 설명 패널 */}
        {mission.concept && showLearningPanel && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 p-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <p className="text-indigo-300 font-bold text-sm">오늘 배울 개념: {mission.concept}</p>
              </div>
              <button
                onClick={() => setShowLearningPanel(false)}
                className="text-indigo-400 hover:text-indigo-300 text-xs"
              >
                접기
              </button>
            </div>
            {mission.conceptExplanation && (
              <p className="text-indigo-200 text-sm mt-2 leading-relaxed">{mission.conceptExplanation}</p>
            )}
          </motion.div>
        )}

        {/* 목표 표시 */}
        <div className="mt-3 flex gap-2">
          <div className="flex-1 p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
            <p className="text-emerald-300 text-sm flex items-center gap-1">
              <Target className="w-4 h-4" />
              <span className="font-bold">목표:</span> {winCondition.target}점 달성
            </p>
          </div>
          <div className="flex-1 p-2 bg-amber-500/20 rounded-lg border border-amber-500/30">
            <p className="text-amber-300 text-sm flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span className="font-bold">보상:</span> +{mission.exp} XP
            </p>
          </div>
        </div>
      </div>

      {/* 튜토리얼 안내 */}
      {showTutorial && currentTutorialStep && !isRunning && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/40"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {tutorialStep + 1}
            </div>
            <p className="text-cyan-300 font-bold text-sm">{currentTutorialStep.message}</p>
          </div>
          {currentTutorialStep.tip && (
            <p className="text-cyan-200 text-xs ml-8">{currentTutorialStep.tip}</p>
          )}
          <div className="mt-2 ml-8 flex items-center gap-1 text-xs text-cyan-400">
            진행: {tutorialStep + 1} / {tutorialSteps.length}
            <div className="flex gap-0.5 ml-2">
              {tutorialSteps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i <= tutorialStep ? 'bg-cyan-400' : 'bg-cyan-800'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 블록 검증 메시지 */}
      {blockValidation && !isRunning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`mb-4 p-2 rounded-lg flex items-center gap-2 text-sm ${
            blockValidation.valid
              ? 'bg-green-500/20 border border-green-500/30 text-green-300'
              : 'bg-red-500/20 border border-red-500/30 text-red-300'
          }`}
        >
          {blockValidation.valid ? (
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span>{blockValidation.message}</span>
        </motion.div>
      )}

      {/* 메인 레이아웃 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 좌측: 블록 팔레트 + 내 코드 */}
        <div className="space-y-4">
          {/* 블록 상자 */}
          <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3">
            <p className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-xs">🎮</span>
              게임 블록
              <button
                onClick={() => setShowHint(true)}
                className="ml-auto text-amber-400 hover:text-amber-300"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </p>

            <div className="flex flex-col gap-1.5 max-h-[220px] overflow-y-auto">
              {getAvailableBlocks().map((block, i) => {
                const blockInfo = BLOCK_DESCRIPTIONS[block];
                const isNextInTutorial = currentTutorialStep?.block === block ||
                  (currentTutorialStep && block.includes(currentTutorialStep.block.slice(2)));

                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addBlock(block)}
                    disabled={isRunning}
                    className={`relative bg-gradient-to-r ${getBlockStyle(block)} text-white px-3 py-2 rounded-lg font-bold text-xs shadow-md text-left disabled:opacity-50 transition-all ${
                      isNextInTutorial ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-800' : ''
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{block}</span>
                      {blockInfo && (
                        <span className={`w-2 h-2 rounded-full ${getCategoryColor(blockInfo.category)}`} />
                      )}
                    </span>
                    {isNextInTutorial && (
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute -right-1 top-1/2 -translate-y-1/2 text-cyan-400"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* 내 코드 */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl p-3 min-h-[150px]">
            <p className="text-sm font-bold text-violet-300 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center text-xs">📝</span>
              내 게임 코드
              <span className="ml-auto text-xs text-slate-500">
                {assembledBlocks.length}개 블록
              </span>
            </p>
            <div className="flex flex-col gap-1 max-h-[180px] overflow-y-auto">
              {assembledBlocks.map((block, index) => (
                <motion.div
                  key={block.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`bg-gradient-to-r ${getBlockStyle(block.type)} text-white px-2 py-1.5 rounded-lg text-xs flex items-center gap-2`}
                >
                  <span className="w-5 h-5 bg-black/20 rounded flex items-center justify-center text-xs font-bold">{index + 1}</span>
                  <span className="flex-1 truncate">{block.type}</span>
                  <div className="flex gap-1">
                    <button onClick={() => moveBlock(index, 'up')} className="hover:bg-white/20 px-1 rounded" disabled={isRunning}>▲</button>
                    <button onClick={() => moveBlock(index, 'down')} className="hover:bg-white/20 px-1 rounded" disabled={isRunning}>▼</button>
                    <button onClick={() => removeBlock(index)} className="hover:bg-red-500/50 px-1 rounded" disabled={isRunning}>✕</button>
                  </div>
                </motion.div>
              ))}
              {assembledBlocks.length === 0 && (
                <div className="text-slate-500 text-xs text-center py-6">
                  <p className="mb-1">👆 위에서 블록을 클릭하세요!</p>
                  <p className="text-slate-600">블록을 순서대로 조립해서 게임을 만들어요</p>
                </div>
              )}
            </div>
          </div>

          {/* 블록 정보 팝업 */}
          <AnimatePresence>
            {selectedBlockInfo && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-3 rounded-xl border border-blue-500/30"
              >
                <p className="font-bold text-blue-300 text-sm mb-1">✨ {selectedBlockInfo.name}</p>
                <p className="text-blue-200 text-xs">{selectedBlockInfo.description}</p>
                <p className="text-blue-300/70 text-xs mt-1 italic">예: {selectedBlockInfo.example}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 우측: 게임 캔버스 */}
        <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-green-400" />
              <p className="text-sm font-bold text-white">게임 화면</p>
            </div>
            <div className="flex items-center gap-3">
              {/* 점수 */}
              <div className="flex items-center gap-1 bg-purple-500/30 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-bold text-sm">{score}</span>
                <span className="text-purple-300 text-xs">/ {winCondition.target}</span>
              </div>
              {/* 타이머 */}
              {assembledBlocks.some(b => b.type.includes('타이머')) && (
                <div className="flex items-center gap-1 bg-orange-500/30 px-2 py-1 rounded-lg">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-bold text-sm">{timeLeft}s</span>
                </div>
              )}
            </div>
          </div>

          {/* 게임 캔버스 */}
          <div
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="relative w-full aspect-square max-w-[300px] mx-auto bg-gradient-to-br from-slate-900 to-slate-950 rounded-xl border-2 border-slate-600 overflow-hidden cursor-pointer"
            style={{ touchAction: 'none' }}
          >
            {!isRunning ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-4">
                <Gamepad2 className="w-12 h-12 mb-3 opacity-30" />
                <p className="text-sm text-center mb-1">게임 블록을 순서대로 조립하고</p>
                <p className="text-sm text-center text-emerald-400 font-bold">▶ 게임 시작 버튼을 누르세요!</p>
              </div>
            ) : (
              <>
                {/* 플레이어 */}
                {assembledBlocks.some(b => b.type.includes('캐릭터')) && (
                  <motion.div
                    animate={{ x: playerPos.x - 15, y: playerPos.y - 15 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    className="absolute text-3xl"
                    style={{ width: 30, height: 30 }}
                  >
                    🐱
                  </motion.div>
                )}

                {/* 게임 오브젝트들 */}
                <AnimatePresence>
                  {gameObjects.map(obj => (
                    obj.active && (
                      <motion.div
                        key={obj.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, x: obj.x - 15, y: obj.y - 15 }}
                        exit={{ scale: 0 }}
                        className="absolute text-2xl"
                        style={{ width: 30, height: 30 }}
                      >
                        {obj.emoji}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>

                {/* 조작 안내 */}
                {assembledBlocks.some(b => b.type.includes('이동') || b.type.includes('키보드')) && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 bg-slate-900/80 px-2 py-1 rounded">
                    ⬆️⬇️⬅️➡️ 또는 WASD로 이동
                  </div>
                )}

                {/* 클릭 게임 안내 */}
                {assembledBlocks.some(b => b.type.includes('클릭')) && (
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 bg-slate-900/80 px-2 py-1 rounded">
                    화면을 클릭하세요!
                  </div>
                )}
              </>
            )}
          </div>

          {/* 조작법 안내 */}
          <div className="mt-3 grid grid-cols-3 gap-1 text-xs text-slate-400">
            <span className="bg-slate-800 px-2 py-1 rounded text-center">🎮 방향키</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-center">⭐ 수집</span>
            <span className="bg-slate-800 px-2 py-1 rounded text-center">🎯 목표 달성</span>
          </div>
        </div>
      </div>

      {/* 실행 버튼 */}
      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold"
        >
          <RotateCcw className="w-5 h-5" />
          초기화
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isRunning ? () => setIsPaused(!isPaused) : startGame}
          disabled={assembledBlocks.length === 0}
          className={`flex items-center gap-2 px-8 py-3 ${
            isRunning
              ? isPaused
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                : 'bg-gradient-to-r from-orange-500 to-red-500'
              : 'bg-gradient-to-r from-green-500 to-emerald-600'
          } hover:opacity-90 text-white rounded-xl font-bold shadow-lg disabled:opacity-50`}
        >
          {isRunning ? (
            isPaused ? (
              <>
                <Play className="w-5 h-5" />
                계속
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                일시정지
              </>
            )
          ) : (
            <>
              <Play className="w-5 h-5" />
              게임 시작
            </>
          )}
        </motion.button>
      </div>

      {/* 힌트 패널 */}
      <AnimatePresence>
        {showHint && mission.hints && mission.hints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 bg-amber-500/10 p-4 rounded-xl border border-amber-500/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              <p className="font-bold text-amber-300">힌트</p>
              <button onClick={() => setShowHint(false)} className="ml-auto text-amber-400 hover:text-amber-300">✕</button>
            </div>
            <ul className="text-amber-200 text-sm space-y-2">
              {mission.hints.map((hint, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">{i + 1}.</span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>

            {/* 추가 도움말 */}
            <div className="mt-4 pt-3 border-t border-amber-500/20">
              <p className="text-amber-300 font-bold text-sm mb-2">📚 블록 조립 순서</p>
              <div className="flex flex-wrap gap-1">
                {correctBlockOrder.map((block, i) => (
                  <span key={i} className="text-xs bg-amber-500/20 px-2 py-1 rounded text-amber-200">
                    {i + 1}. {block}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 성공 메시지 */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          >
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              className="bg-gradient-to-br from-emerald-500 to-green-600 p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-6xl mb-4"
              >
                🎮
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">게임 클리어!</h2>
              <p className="text-emerald-100">최종 점수: {score}점</p>
              <p className="text-emerald-100 mt-1">+{mission.exp} XP 획득!</p>

              <div className="mt-4 p-3 bg-white/10 rounded-xl">
                <p className="text-white text-sm font-bold mb-1">🎓 배운 내용</p>
                <p className="text-emerald-100 text-xs">{mission.concept}: {mission.conceptExplanation}</p>
              </div>

              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameMakerMission;

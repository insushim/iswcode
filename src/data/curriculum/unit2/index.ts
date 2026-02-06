/**
 * Unit 2: 블록 코딩 마스터
 *
 * 주차별 파일로 분리하여 관리
 * - Week 9: 블록 코딩 세계로! (순차 실행)
 * - Week 10: 반복의 마법 (반복문)
 * - Week 11: 조건문의 힘 (조건문)
 * - Week 12: 변수 상자 (변수)
 * - Week 13: 이벤트와 메시지 (이벤트)
 * - Week 14: 종합 프로젝트 (프로젝트)
 * - Week 15: 애니메이션 (모션)
 * - Week 16: 미니 게임 만들기 (프로젝트)
 */

import type { Unit } from '../../../types';
import { week9 } from './week9';
import { week10 } from './week10';
import { week11 } from './week11';
import { week12 } from './week12';
import { week13 } from './week13';
import { week14 } from './week14';
// import { week15 } from './week15';
// import { week16 } from './week16';

export const unit2: Unit = {
  id: 'unit-2',
  number: 2,
  title: '블록 코딩 마스터',
  description: '블록을 조합해서 멋진 프로그램을 만들어요',
  icon: '🧱',
  color: '#6366f1',
  unlockLevel: 5,
  totalMissions: 60, // 10 missions × 6 weeks
  estimatedHours: 12, // 주 2회 × 40분 × 6주
  weeks: [
    week9,
    week10, // 반복의 마법
    week11, // 조건문의 힘
    week12, // 변수 상자
    week13, // 이벤트와 메시지
    week14, // 종합 프로젝트
    // week15, // 애니메이션
    // week16, // 미니 게임 만들기
  ]
};

export { week9, week10, week11, week12, week13, week14 };

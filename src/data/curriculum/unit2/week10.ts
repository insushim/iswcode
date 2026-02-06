import type { Week } from '../../../types';

export const week10: Week = {
  id: 'week-10',
  number: 10,
  title: '반복의 마법',
  description: '반복문으로 효율적인 코드를 만들어요',
  missions: [
    {
      id: 'u2-w10-1',
      title: '반복 블록 소개',
      description: '같은 동작을 여러 번 반복해봐요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 10,
      concept: '반복문',
      conceptExplanation: `## 반복문이란?

같은 동작을 여러 번 할 때 **반복 블록**을 사용해요.

### 예시
- "앞으로 가기"를 5번 반복
- 반복 블록 하나로 5개 블록 효과!`,
      hints: ['반복 블록 안에 동작을 넣으세요', '반복 횟수를 설정하세요', '효율적이에요!'],
    },
    {
      id: 'u2-w10-2',
      title: '반복으로 정사각형 그리기',
      description: '4번 반복해서 정사각형을 그려봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 70,
      estimatedMinutes: 15,
      concept: '반복문 활용',
      conceptExplanation: '정사각형은 4번 같은 동작을 반복하면 그릴 수 있어요.',
      starterCode: '# 반복 블록으로 정사각형 그리기',
      testCases: [
        { input: '', expectedOutput: '정사각형 완성!' },
      ],
      hints: ['앞으로 + 오른쪽 90도를 4번 반복', '반복 횟수: 4', '각도: 90도'],
    },
  ],
};

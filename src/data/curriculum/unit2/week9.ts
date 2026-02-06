import type { Week } from '../../../types';

export const week9: Week = {
  id: 'week-9',
  number: 9,
  title: '블록 코딩 세계로!',
  description: '순차 실행의 기초를 배워요',
  missions: [
    {
      id: 'u2-w9-1',
      title: '블록 쌓기 시작',
      description: '블록을 순서대로 연결해서 캐릭터를 움직여봐요',
      type: 'interactive-lesson',
      difficulty: 'beginner',
      exp: 50,
      estimatedMinutes: 10,
      concept: '순차 실행',
      conceptExplanation: `## 순차 실행이란?

컴퓨터는 명령을 **위에서 아래로 순서대로** 실행해요.

### 예시
\`\`\`
1. 앞으로 가기
2. 오른쪽으로 돌기
3. 앞으로 가기
\`\`\`

이 순서대로 캐릭터가 움직여요!`,
      hints: ['블록을 위에서 아래로 연결하세요', '순서가 중요해요!', '실행 버튼을 눌러 확인하세요'],
    },
    {
      id: 'u2-w9-2',
      title: '여러 동작 연결하기',
      description: '3개 이상의 블록을 연결해봐요',
      type: 'coding',
      difficulty: 'beginner',
      exp: 60,
      estimatedMinutes: 10,
      concept: '순차 실행',
      conceptExplanation: '여러 블록을 연결하면 복잡한 동작을 만들 수 있어요.',
      starterCode: '# 블록을 순서대로 배치하세요',
      testCases: [
        { input: '', expectedOutput: '앞으로\n오른쪽\n앞으로' },
      ],
      hints: ['블록 3개를 연결하세요', '순서를 잘 생각해보세요', '실행해서 확인하세요'],
    },
  ],
};

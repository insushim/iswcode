import { readFileSync, writeFileSync } from 'fs';

// Challenge template generator
const generateChallengesForMission = (missionType, missionTitle, concept) => {
  const challenges = [];

  // Easy challenges (3)
  for (let i = 1; i <= 3; i++) {
    challenges.push({
      id: `c${i}`,
      title: `${concept} 기초 연습 ${i}`,
      description: `${missionTitle}의 핵심 개념을 연습합니다.`,
      difficulty: 'easy',
      hints: ['주어진 예제를 참고하세요', '개념을 단계별로 적용하세요'],
      estimatedMinutes: 2 + i,
      starterCode: `// ${missionTitle} 연습\n`,
      feedback: {
        perfect: '완벽해요! 개념을 잘 이해했어요.',
        good: '잘했어요! 조금만 더 다듬으면 완벽해요.',
        partial: '절반은 맞았어요. 나머지도 완성해보세요.',
        wrong: '힌트를 다시 읽고 천천히 시도해보세요.'
      }
    });
  }

  // Medium challenges (4)
  for (let i = 4; i <= 7; i++) {
    challenges.push({
      id: `c${i}`,
      title: `${concept} 응용 ${i-3}`,
      description: `${missionTitle}의 개념을 실전에 적용합니다.`,
      difficulty: 'medium',
      hints: ['이전 연습을 활용하세요', '단계를 나눠서 생각하세요', '비슷한 문제와 비교해보세요'],
      estimatedMinutes: 5 + (i-3),
      starterCode: `// ${missionTitle} 응용\n`,
      feedback: {
        perfect: '훌륭해요! 응용력이 뛰어나요.',
        good: '좋아요! 개념을 잘 활용했어요.',
        partial: '방향은 맞아요. 세부 사항을 확인하세요.',
        wrong: '힌트를 활용해서 다시 시도해보세요.'
      }
    });
  }

  // Hard challenges (3)
  for (let i = 8; i <= 10; i++) {
    challenges.push({
      id: `c${i}`,
      title: `${concept} 도전 ${i-7}`,
      description: `${missionTitle}의 고급 개념에 도전합니다.`,
      difficulty: 'hard',
      hints: [
        '문제를 작은 단계로 나누세요',
        '이전 지식을 종합적으로 활용하세요',
        '창의적으로 접근해보세요',
        '막히면 비슷한 문제를 먼저 풀어보세요'
      ],
      estimatedMinutes: 10 + (i-7) * 2,
      starterCode: `// ${missionTitle} 도전 과제\n`,
      feedback: {
        perfect: '대단해요! 고급 개념까지 완벽하게 마스터했어요!',
        good: '잘했어요! 어려운 문제를 해결했어요.',
        partial: '좋은 시도예요. 조금 더 생각해보세요.',
        wrong: '어려운 문제예요. 힌트를 활용하고 천천히 접근하세요.'
      }
    });
  }

  return challenges;
};

// Function to inject challenges into a mission
const injectChallengesIntoFile = (filePath) => {
  console.log(`Processing ${filePath}...`);
  let content = readFileSync(filePath, 'utf8');

  // Find missions that don't have challenges
  const missionPattern = /{[\s\S]*?id:\s*'([^']+)',[\s\S]*?title:\s*'([^']+)',[\s\S]*?concept:\s*'([^']*)'[\s\S]*?(?=unlocked:|challenges:)/g;

  let match;
  let modifications = 0;

  // Store all matches first to avoid modification during iteration
  const matches = [];
  while ((match = missionPattern.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      id: match[1],
      title: match[2],
      concept: match[3] || 'Core Concept',
      index: match.index
    });
  }

  // Process matches in reverse order to maintain indices
  for (let i = matches.length - 1; i >= 0; i--) {
    const matchData = matches[i];
    const missionBlock = matchData.fullMatch;

    // Check if this mission already has challenges
    const nextContent = content.slice(matchData.index + missionBlock.length, matchData.index + missionBlock.length + 500);

    if (!nextContent.includes('challenges:')) {
      // Generate challenges
      const challenges = generateChallengesForMission('coding', matchData.title, matchData.concept);
      const challengesCode = `          challenges: ${JSON.stringify(challenges, null, 12).split('\n').join('\n          ')},\n          `;

      // Find the position to insert (before 'unlocked:')
      const insertPos = matchData.index + missionBlock.length;
      content = content.slice(0, insertPos) + challengesCode + content.slice(insertPos);
      modifications++;
    }
  }

  if (modifications > 0) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Added challenges to ${modifications} missions in ${filePath}`);
  } else {
    console.log(`○ No missions needed challenges in ${filePath}`);
  }
};

// Process all curriculum files
const files = [
  'src/data/curriculum/unit1-thinking.ts',
  'src/data/curriculum/unit2-blocks.ts',
  'src/data/curriculum/unit7-web-projects.ts',
  'src/data/curriculum/unit8-ai-creative.ts',
  'src/data/curriculum/unit9-capstone.ts'
];

console.log('Starting to add challenges to all missions...\n');

files.forEach(file => {
  try {
    injectChallengesIntoFile(file);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
});

console.log('\n✓ Challenge injection complete!');

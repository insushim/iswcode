# Achievement Report Component

## Overview

The Achievement Report component provides comprehensive analytics and insights into student learning progress. It analyzes mission completion data, concept mastery, learning patterns, and achievements.

## Features

### 1. Summary Statistics
- **Completed Missions**: Total missions completed out of all available missions
- **Average Accuracy**: Percentage of missions completed with perfect scores
- **Learning Time**: Total accumulated learning hours and minutes
- **Current Level**: User's current level and XP needed for next level

### 2. Concept-Based Analysis
The most important feature that analyzes learning by concept:

#### Progress Overview
- Lists all concepts with completion rate
- Shows accuracy percentage for each concept
- Color-coded progress bars:
  - Green: 80%+ accuracy (strong understanding)
  - Yellow: 60-79% accuracy (good understanding)
  - Orange: Below 60% accuracy (needs improvement)

#### Concept Mastery Circles
- Visual circular progress indicators for top 6 concepts
- Shows completion percentage and mission count
- Animated with framer-motion for smooth appearance

### 3. Strengths and Weaknesses

#### Top 3 Strengths
- Identifies concepts with highest accuracy (minimum 3 missions completed)
- Displays in green cards with ranking
- Shows completion count and accuracy percentage

#### Top 3 Weaknesses
- Identifies concepts with accuracy below 70% (minimum 3 missions completed)
- Displays in orange cards with ranking
- **Includes recommended review missions** for each weak concept
- Provides specific mission titles for targeted practice

### 4. Learning Heatmap
- GitHub-style 30-day learning calendar
- Visual representation of daily activity
- Color intensity based on missions completed per day:
  - Light gray: No missions
  - Light blue: 1-2 missions
  - Medium blue: 3-5 missions
  - Dark blue: 6+ missions

### 5. Badges and Achievements

#### Earned Badges
- Displays all earned badges in a grid
- Color-coded by rarity:
  - Gray gradient: Common
  - Blue gradient: Rare
  - Purple gradient: Epic
  - Gold gradient: Legendary
- Hover animation for interactive feel

#### Next Challenges
- Shows top 3 incomplete achievements
- Progress bars for each achievement
- Displays current progress vs. target
- Shows XP rewards for completion

## Implementation Details

### Data Analysis Logic

```typescript
interface ConceptAnalysis {
  concept: string;              // Concept name
  totalMissions: number;        // Total missions for this concept
  completedMissions: number;    // Missions completed
  perfectCount: number;         // Missions with perfect score
  accuracy: number;             // Percentage (0-100)
}
```

### Perfect Score Tracking

Perfect scores are tracked with a special suffix in the progress store:
- Completed mission: `mission.id` in `completedMissions` array
- Perfect score: `mission.id_perfect` also in `completedMissions` array

### Concept Analysis Algorithm

1. Iterate through all units → weeks → missions
2. Group missions by `mission.concept` field
3. Count total missions per concept
4. Count completed missions from `progress.completedMissions`
5. Count perfect scores by checking for `_perfect` suffix
6. Calculate accuracy: `(perfectCount / completedMissions) * 100`

### Strengths/Weaknesses Criteria

**Strengths:**
- Minimum 3 missions completed
- Sorted by accuracy (highest first)
- Top 3 results

**Weaknesses:**
- Minimum 3 missions completed
- Accuracy below 70%
- Sorted by accuracy (lowest first)
- Top 3 results
- Includes 2 recommended review missions per concept

## Usage

### In Profile Page

```typescript
import AchievementReport from '../components/AchievementReport';

// Tab-based navigation
<button onClick={() => setShowReport(true)}>
  성취도 리포트
</button>

{showReport && <AchievementReport />}
```

### Standalone Usage

```typescript
import AchievementReport from '../components/AchievementReport';

function Dashboard() {
  return (
    <div className="container">
      <AchievementReport />
    </div>
  );
}
```

## Component Dependencies

- **React**: Core framework
- **framer-motion**: Animations
- **lucide-react**: Icons
- **Card, ProgressRing**: Common components
- **useUserStore**: User data and XP progress
- **useProgressStore**: Mission completion data, badges, achievements
- **allUnits, getMissionById**: Curriculum data

## Customization

### Color Themes
The component respects the global dark/light theme:
- Slate/violet color scheme
- Dark mode compatible with `dark:` classes
- Gradient accents for emphasis

### Animation Timing
All animations use framer-motion with staggered delays:
- Summary cards: 0.1s delays
- Concept circles: 0.05s delays
- Lists: Sequential 0.05s delays

### Performance Optimization
- Uses `useMemo` for expensive calculations
- Memoizes concept analysis, strengths, and weaknesses
- Only recalculates when `progress.completedMissions` changes

## Future Enhancements

1. **Real Activity Tracking**: Currently the heatmap is a placeholder. Could integrate with:
   - Activity timestamps from progressStore
   - Daily mission completion tracking
   - Actual learning time per day

2. **Comparative Analytics**:
   - Compare with class average (for teacher dashboard)
   - Show percentile ranking
   - Week-over-week progress

3. **Export Report**:
   - PDF export functionality
   - Shareable report links
   - Print-friendly version

4. **Recommendations Engine**:
   - AI-powered learning path suggestions
   - Personalized mission recommendations
   - Study schedule optimization

5. **Historical Trends**:
   - Progress charts over time
   - Concept mastery trends
   - Learning velocity metrics

## Testing

To test the component:

1. Complete several missions with varying accuracy
2. Ensure missions have `concept` field populated
3. Navigate to Profile → 성취도 리포트 tab
4. Verify all sections display correctly
5. Check responsive behavior on mobile/tablet

## Troubleshooting

**No concepts showing:**
- Check that missions have `concept` field defined
- Verify `allUnits` includes all curriculum data

**Accuracy always 0%:**
- Ensure perfect scores are tracked with `_perfect` suffix
- Check `completeMission` function includes perfect parameter

**Strengths/Weaknesses empty:**
- Need at least 3 completed missions per concept
- Check that concepts exist in curriculum data

## File Locations

- Component: `src/components/AchievementReport.tsx`
- Profile integration: `src/pages/Profile.tsx`
- Progress store: `src/stores/progressStore.ts`
- User store: `src/stores/userStore.ts`
- Curriculum data: `src/data/curriculum/`

# Achievement Report UI Structure

## Visual Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 학습 성취도 리포트                                           │
│  나의 학습 현황을 한눈에 확인하세요                              │
└─────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┬──────────────┐
│  ✓ 완료 미션  │  🎯 평균 정답률 │  ⏱ 누적 학습  │  ⚡ 현재 레벨  │
│              │              │              │              │
│     42       │    85%       │   12h 30m    │     15       │
│   / 125개    │  35개 완벽    │   총 750분    │  250 XP 남음  │
└──────────────┴──────────────┴──────────────┴──────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  📚 개념별 분석                                                  │
├──────────────────────────────┬──────────────────────────────────┤
│ 학습 진행 현황                │ 주요 개념 숙련도                  │
│                              │                                  │
│ 변수와 자료형 [████████░░] 80%│   ⭕ 75%    ⭕ 68%    ⭕ 90%    │
│   5/6  정확도: 85%            │   변수      조건문     반복문     │
│                              │                                  │
│ 조건문 [███████░░░] 70%      │   ⭕ 82%    ⭕ 55%    ⭕ 73%    │
│   7/10 정확도: 68%            │   함수      배열      객체        │
│                              │                                  │
│ 반복문 [██████████] 100%     │                                  │
│   8/8  정확도: 90%            │                                  │
│                              │                                  │
│ 함수 [█████████░] 90%        │                                  │
│   9/10 정확도: 82%            │                                  │
└──────────────────────────────┴──────────────────────────────────┘

┌────────────────────────────────┬─────────────────────────────────┐
│  🏆 강점 개념 TOP 3            │  ⚠️ 보완할 개념 TOP 3           │
│                                │                                 │
│  1️⃣ 반복문                    │  1️⃣ 배열                       │
│     8개 완료 · 90% 정확도       │     6개 완료 · 55% 정확도        │
│     ⭐                         │     복습 추천:                   │
│                                │     • 배열 기초 다지기           │
│  2️⃣ 함수                      │     • 배열 메서드 활용하기       │
│     9개 완료 · 82% 정확도       │                                 │
│     ⭐                         │  2️⃣ 조건문                     │
│                                │     7개 완료 · 68% 정확도        │
│  3️⃣ 변수와 자료형              │     복습 추천:                   │
│     5개 완료 · 85% 정확도       │     • if-else 마스터하기        │
│     ⭐                         │     • 조건 연산자 익히기         │
│                                │                                 │
│                                │  3️⃣ 객체                       │
│                                │     4개 완료 · 73% 정확도        │
│                                │     복습 추천:                   │
│                                │     • 객체 생성과 접근           │
│                                │     • 객체 메서드 활용           │
└────────────────────────────────┴─────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  📅 최근 30일 학습 현황                                          │
│                                                                 │
│  일  월  화  수  목  금  토                                      │
│  ░░  ▓▓  ▓▓  ░░  ▓▓  ███  ░░   Week 1                        │
│  ███  ▓▓  ▓▓  ███  ░░  ▓▓  ░░   Week 2                        │
│  ▓▓  ███  ░░  ▓▓  ███  ▓▓  ░░   Week 3                        │
│  ░░  ▓▓  ███  ▓▓  ░░  ███  ▓▓   Week 4                        │
│  ▓▓  ░░  ▓▓  ░░  ░░  ░░  ░░   Week 5 (partial)               │
│                                                                 │
│  적음 ░░ ▓▓ ▓▓ ███ 많음                                        │
└─────────────────────────────────────────────────────────────────┘

┌────────────────────────────────┬─────────────────────────────────┐
│  🏅 획득한 배지 (8)            │  📈 다음 도전 과제              │
│                                │                                 │
│  🎉   🧠   🔥   💯             │  ✅ 미션 전문가                 │
│  첫코드 사고력 7일연속 퍼펙트10  │  50개의 미션을 완료하세요        │
│                                │  [████████████░░░░░░] 42/50    │
│  ⚡   🐍   💛   🌐             │                                 │
│  스피드 Python JS입문 웹빌더    │  📝 코드 작가                   │
│                                │  1000줄의 코드를 작성하세요      │
│                                │  [███████░░░░░░░░░] 680/1000   │
│                                │                                 │
│                                │  🏗️ 프로젝트 빌더              │
│                                │  5개의 프로젝트를 완료하세요     │
│                                │  [██████░░░░░░░░░░] 3/5        │
└────────────────────────────────┴─────────────────────────────────┘
```

## Color Scheme

### Light Mode
- **Background**: White (#FFFFFF)
- **Cards**: Light gray (#F8FAFC)
- **Primary**: Indigo (#6366F1)
- **Secondary**: Purple (#A855F7)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Text**: Slate (#1E293B)

### Dark Mode
- **Background**: Dark slate (#0F172A)
- **Cards**: Dark surface (#1E293B)
- **Primary**: Light indigo (#818CF8)
- **Secondary**: Light purple (#C084FC)
- **Success**: Light green (#34D399)
- **Warning**: Light orange (#FBBF24)
- **Text**: Light slate (#F1F5F9)

## Component Sections

### 1. Header
```
📊 학습 성취도 리포트
나의 학습 현황을 한눈에 확인하세요
```
- Icon: BarChart3
- Title: 2xl font, bold
- Subtitle: Slate-500 text

### 2. Summary Statistics (4 Cards)
Each card contains:
- Icon circle with colored background
- Large number (2xl, bold)
- Label (sm text)
- Secondary info (xs text, slate-400)

### 3. Concept Analysis (Large Card)
Split into two columns:
- **Left**: Scrollable list of all concepts with progress bars
- **Right**: Grid of 6 circular progress indicators

Progress bar colors:
- Green (80-100%): Strong understanding
- Yellow (60-79%): Good understanding
- Orange (0-59%): Needs improvement

### 4. Strengths & Weaknesses (2 Cards Side-by-Side)

**Strengths Card:**
- Green theme (#10B981)
- Trophy icon
- Numbered rankings (1-3)
- Star icons for each

**Weaknesses Card:**
- Orange theme (#F59E0B)
- AlertCircle icon
- Numbered rankings (1-3)
- Recommended missions listed below each concept

### 5. Learning Heatmap
GitHub-style calendar grid:
- 7 columns (days of week)
- 5 rows (weeks)
- Color intensity based on activity:
  - Light gray: No activity
  - Light blue: 1-2 missions
  - Medium blue: 3-5 missions
  - Dark blue: 6+ missions

### 6. Badges & Achievements (2 Cards Side-by-Side)

**Badges Card:**
- 4-column grid
- Each badge in colored gradient background
- Rarity-based colors:
  - Common: Gray
  - Rare: Blue
  - Epic: Purple
  - Legendary: Gold

**Achievements Card:**
- List of 3 upcoming achievements
- Each with:
  - Icon (emoji)
  - Title and description
  - Progress bar
  - Current/Target count

## Animations

### Entry Animations
- Header: Fade in from top (-20px)
- Summary cards: Staggered fade in with 0.05s delays
- Concept analysis: Fade in after 0.3s
- Strengths/Weaknesses: Slide in from sides (±20px)
- Heatmap: Fade in with grid animation
- Badges: Scale in with rotation
- Achievements: Slide in from right

### Hover Effects
- Badge cards: Scale to 1.1
- Interactive elements: Subtle color changes

### Transitions
- All: Smooth 300ms transitions
- Spring animations for hover effects

## Responsive Breakpoints

### Mobile (< 768px)
- Summary: 2 columns
- Concept analysis: Stacked (full width)
- Strengths/Weaknesses: Stacked
- Badges/Achievements: Stacked
- Heatmap: Scrollable horizontally

### Tablet (768px - 1024px)
- Summary: 4 columns (2 rows if needed)
- Concept analysis: 2 columns
- Strengths/Weaknesses: 2 columns
- Badges/Achievements: 2 columns

### Desktop (> 1024px)
- All sections: Full layout as shown
- Max width: 5xl (1280px)

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast meets WCAG AA standards
- Screen reader friendly

## Interactive Elements

### Clickable Areas (Potential Future)
- Badge cards: Click to view badge details
- Concept rows: Click to see related missions
- Achievement cards: Click to view requirements
- Heatmap cells: Hover to see date and count

### Tooltips (Potential Future)
- Badge names and descriptions
- Achievement details
- Heatmap activity counts
- Concept explanations

## Empty States

### No Completed Missions
Shows placeholder message:
"아직 활동 기록이 없어요
첫 미션을 시작해보세요!"

### No Badges
Shows trophy icon with message:
"아직 획득한 배지가 없어요
미션을 완료해서 배지를 모아보세요!"

### No Weaknesses
Shows positive message:
"모든 개념을 잘 이해하고 있어요!
계속 열심히 공부해보세요 🎉"

## Performance Considerations

- Memoized calculations prevent unnecessary re-renders
- Only recalculates when progress changes
- Lazy loading for images (if added)
- Optimized animations with transform/opacity
- CSS containment for better rendering performance

## Browser Support

- Modern browsers (ES6+)
- CSS Grid and Flexbox
- CSS custom properties (variables)
- No polyfills required

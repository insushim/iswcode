import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Search, Filter, Heart, Eye, MessageCircle, Share2, Code,
  Star, TrendingUp, Clock, User, Play, Copy, ExternalLink,
  Bookmark, Flag, ChevronDown, X, Send, Sparkles, GitBranch
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { db } from '../config/firebase';
import {
  collection, query, orderBy, limit, getDocs, addDoc, updateDoc,
  doc, increment, where, serverTimestamp
} from 'firebase/firestore';

interface GalleryProject {
  id: string;
  title: string;
  description: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  code: string;
  language: 'python' | 'javascript' | 'html';
  thumbnail: string;
  tags: string[];
  likes: number;
  views: number;
  remixes: number;
  comments: Comment[];
  createdAt: string;
  featured: boolean;
  originalId?: string;
  originalAuthor?: string;
}

interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  content: string;
  likes: number;
  createdAt: string;
}

// 샘플 프로젝트 데이터
const sampleProjects: GalleryProject[] = [
  {
    id: 'p1',
    title: '무지개 그리기 🌈',
    description: '파이썬 터틀로 예쁜 무지개를 그려봤어요!',
    authorId: 'u1',
    authorName: '코딩천재',
    authorAvatar: '🦊',
    code: `import turtle

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
t = turtle.Turtle()
t.speed(0)

for i, color in enumerate(colors):
    t.color(color)
    t.circle(100 - i*15, 180)
    t.left(180)

turtle.done()`,
    language: 'python',
    thumbnail: '🌈',
    tags: ['터틀', '그래픽', '입문'],
    likes: 128,
    views: 542,
    remixes: 23,
    comments: [],
    createdAt: '2024-01-15',
    featured: true
  },
  {
    id: 'p2',
    title: '숫자 맞추기 게임',
    description: '1부터 100 사이의 숫자를 맞춰보세요!',
    authorId: 'u2',
    authorName: '게임개발자',
    authorAvatar: '🎮',
    code: `import random

number = random.randint(1, 100)
attempts = 0

print("1~100 사이의 숫자를 맞춰보세요!")

while True:
    guess = int(input("숫자 입력: "))
    attempts += 1

    if guess < number:
        print("더 큰 숫자입니다!")
    elif guess > number:
        print("더 작은 숫자입니다!")
    else:
        print(f"정답! {attempts}번 만에 맞췄습니다!")
        break`,
    language: 'python',
    thumbnail: '🎲',
    tags: ['게임', '입문', '조건문'],
    likes: 95,
    views: 389,
    remixes: 15,
    comments: [],
    createdAt: '2024-01-20',
    featured: true
  },
  {
    id: 'p3',
    title: '별 피라미드',
    description: '반복문으로 별 피라미드를 만들었어요',
    authorId: 'u3',
    authorName: '반복문마스터',
    authorAvatar: '⭐',
    code: `n = 5

for i in range(1, n + 1):
    spaces = ' ' * (n - i)
    stars = '*' * (2 * i - 1)
    print(spaces + stars)`,
    language: 'python',
    thumbnail: '⭐',
    tags: ['반복문', '패턴', '입문'],
    likes: 76,
    views: 298,
    remixes: 8,
    comments: [],
    createdAt: '2024-01-25',
    featured: false
  },
  {
    id: 'p4',
    title: '할 일 목록 앱',
    description: 'JavaScript로 만든 간단한 To-Do 앱입니다',
    authorId: 'u4',
    authorName: '웹개발러',
    authorAvatar: '💻',
    code: `const todos = [];

function addTodo(text) {
  todos.push({ id: Date.now(), text, done: false });
  render();
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = !todo.done;
  render();
}

function render() {
  console.log('=== 할 일 목록 ===');
  todos.forEach(t => {
    const status = t.done ? '✅' : '⬜';
    console.log(\`\${status} \${t.text}\`);
  });
}

addTodo('코딩 공부하기');
addTodo('운동하기');`,
    language: 'javascript',
    thumbnail: '📝',
    tags: ['JavaScript', '앱', '중급'],
    likes: 112,
    views: 456,
    remixes: 31,
    comments: [],
    createdAt: '2024-01-28',
    featured: true
  },
  {
    id: 'p5',
    title: '계산기 HTML',
    description: 'HTML/CSS/JS로 만든 계산기예요!',
    authorId: 'u5',
    authorName: 'UI디자이너',
    authorAvatar: '🎨',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .calculator {
      width: 200px;
      padding: 20px;
      background: #333;
      border-radius: 10px;
    }
    .display {
      background: #fff;
      padding: 10px;
      text-align: right;
      font-size: 24px;
      margin-bottom: 10px;
    }
    button {
      width: 45px;
      height: 45px;
      margin: 2px;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <div class="display">0</div>
    <button>7</button><button>8</button><button>9</button><button>+</button>
    <button>4</button><button>5</button><button>6</button><button>-</button>
    <button>1</button><button>2</button><button>3</button><button>*</button>
    <button>0</button><button>C</button><button>=</button><button>/</button>
  </div>
</body>
</html>`,
    language: 'html',
    thumbnail: '🧮',
    tags: ['HTML', 'CSS', '웹'],
    likes: 89,
    views: 367,
    remixes: 19,
    comments: [],
    createdAt: '2024-01-30',
    featured: false
  }
];

type SortOption = 'popular' | 'recent' | 'trending';
type FilterTag = string | null;

const ProjectGallery: React.FC = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();
  const [projects, setProjects] = useState<GalleryProject[]>(sampleProjects);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [filterTag, setFilterTag] = useState<FilterTag>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [commentText, setCommentText] = useState('');

  // 정렬된 프로젝트
  const sortedProjects = [...projects]
    .filter(p => {
      if (filterTag && !p.tags.includes(filterTag)) return false;
      if (searchQuery && !p.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.likes - a.likes;
        case 'recent':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'trending':
          return (b.views + b.likes * 2) - (a.views + a.likes * 2);
        default:
          return 0;
      }
    });

  // 모든 태그 추출
  const allTags = [...new Set(projects.flatMap(p => p.tags))];

  // 좋아요
  const handleLike = (projectId: string) => {
    setProjects(prev =>
      prev.map(p => p.id === projectId ? { ...p, likes: p.likes + 1 } : p)
    );
  };

  // 코드 복사
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    alert('코드가 복사되었습니다!');
  };

  // 리믹스
  const handleRemix = (project: GalleryProject) => {
    // VibeCoding 페이지로 코드와 함께 이동
    navigate('/vibe-coding', { state: { code: project.code, language: project.language } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 p-4 md:p-8">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              프로젝트 갤러리
            </h1>
            <p className="text-slate-400 mt-1">친구들의 멋진 프로젝트를 구경하고 리믹스해보세요!</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/vibe-coding')}
            className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl px-6 py-3 font-medium"
          >
            <Code className="w-5 h-5" />
            프로젝트 만들기
          </motion.button>
        </div>
      </motion.div>

      {/* 검색 및 필터 */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 검색 */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="프로젝트 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
            />
          </div>

          {/* 정렬 */}
          <div className="flex gap-2">
            {[
              { key: 'popular', label: '인기', icon: Heart },
              { key: 'recent', label: '최신', icon: Clock },
              { key: 'trending', label: '트렌딩', icon: TrendingUp }
            ].map(option => (
              <motion.button
                key={option.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSortBy(option.key as SortOption)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  sortBy === option.key
                    ? 'bg-violet-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                <option.icon className="w-4 h-4" />
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* 태그 필터 */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setFilterTag(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              filterTag === null ? 'bg-violet-500 text-white' : 'bg-slate-700 text-slate-300'
            }`}
          >
            전체
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                filterTag === tag ? 'bg-violet-500 text-white' : 'bg-slate-700 text-slate-300'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* 추천 프로젝트 */}
      {filterTag === null && searchQuery === '' && (
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            추천 프로젝트
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {projects.filter(p => p.featured).map(project => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="flex-shrink-0 w-72 bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 rounded-xl p-4 cursor-pointer"
              >
                <div className="text-4xl mb-2">{project.thumbnail}</div>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm truncate">{project.description}</p>
                <div className="flex items-center gap-4 mt-3 text-slate-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> {project.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" /> {project.views}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 프로젝트 그리드 */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden cursor-pointer hover:border-violet-500/50 transition-colors"
            >
              {/* 썸네일 */}
              <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-6xl">
                {project.thumbnail}
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  {project.originalId && (
                    <div className="flex items-center gap-1 text-violet-400 text-xs">
                      <GitBranch className="w-3 h-3" />
                      리믹스
                    </div>
                  )}
                </div>

                <p className="text-slate-400 text-sm line-clamp-2 mb-3">{project.description}</p>

                {/* 작성자 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{project.authorAvatar}</span>
                  <span className="text-slate-300 text-sm">{project.authorName}</span>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 통계 */}
                <div className="flex items-center justify-between text-slate-400 text-sm pt-3 border-t border-slate-700">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" /> {project.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {project.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" /> {project.remixes}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* 헤더 */}
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProject.thumbnail}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <span>{selectedProject.authorAvatar}</span>
                      <span>{selectedProject.authorName}</span>
                      <span>•</span>
                      <span>{selectedProject.createdAt}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="p-6">
                {/* 설명 */}
                <p className="text-slate-300 mb-6">{selectedProject.description}</p>

                {/* 코드 */}
                <div className="bg-slate-900 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm uppercase">{selectedProject.language}</span>
                    <button
                      onClick={() => handleCopyCode(selectedProject.code)}
                      className="flex items-center gap-1 text-slate-400 hover:text-white text-sm"
                    >
                      <Copy className="w-4 h-4" />
                      복사
                    </button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{selectedProject.code}</code>
                  </pre>
                </div>

                {/* 액션 버튼 */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLike(selectedProject.id)}
                    className="flex items-center gap-2 bg-pink-500/20 text-pink-400 border border-pink-500/30 rounded-lg px-4 py-2"
                  >
                    <Heart className="w-5 h-5" />
                    좋아요 {selectedProject.likes}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRemix(selectedProject)}
                    className="flex items-center gap-2 bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-lg px-4 py-2"
                  >
                    <GitBranch className="w-5 h-5" />
                    리믹스
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-slate-700 text-slate-300 rounded-lg px-4 py-2"
                  >
                    <Share2 className="w-5 h-5" />
                    공유
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-slate-700 text-slate-300 rounded-lg px-4 py-2"
                  >
                    <Bookmark className="w-5 h-5" />
                    저장
                  </motion.button>
                </div>

                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* 댓글 섹션 */}
                <div className="border-t border-slate-700 pt-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    댓글
                  </h3>

                  {/* 댓글 입력 */}
                  <div className="flex gap-3 mb-6">
                    <span className="text-2xl">😊</span>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="댓글을 남겨보세요..."
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-violet-500 text-white rounded-lg px-4 py-2"
                    >
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* 댓글 목록 */}
                  <div className="text-center text-slate-400 py-8">
                    아직 댓글이 없어요. 첫 번째 댓글을 남겨보세요!
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery;

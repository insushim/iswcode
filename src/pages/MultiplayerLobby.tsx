import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Users, Zap, Trophy, Clock, Play, Plus, Search, Crown,
  Swords, Users2, Code, Timer, Star, ChevronRight, Copy,
  RefreshCw, Shield, Target, Gamepad2
} from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

interface GameRoom {
  id: string;
  name: string;
  mode: 'race' | 'battle' | 'coop';
  hostId: string;
  hostName: string;
  hostAvatar: string;
  players: Player[];
  maxPlayers: number;
  missionId: string;
  missionTitle: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'waiting' | 'playing' | 'finished';
  createdAt: string;
}

interface Player {
  id: string;
  name: string;
  avatar: string;
  level: number;
  ready: boolean;
}

// 샘플 게임 방
const sampleRooms: GameRoom[] = [
  {
    id: 'room1',
    name: '초보자 환영! 🌱',
    mode: 'race',
    hostId: 'h1',
    hostName: '코딩천재',
    hostAvatar: '🦊',
    players: [
      { id: 'h1', name: '코딩천재', avatar: '🦊', level: 15, ready: true },
      { id: 'p1', name: '파이썬러버', avatar: '🐍', level: 8, ready: true }
    ],
    maxPlayers: 4,
    missionId: 'm1',
    missionTitle: '변수 교환하기',
    difficulty: 'easy',
    status: 'waiting',
    createdAt: '2024-01-31T10:00:00'
  },
  {
    id: 'room2',
    name: '고수들만 오세요 💪',
    mode: 'battle',
    hostId: 'h2',
    hostName: '알고리즘킹',
    hostAvatar: '👑',
    players: [
      { id: 'h2', name: '알고리즘킹', avatar: '👑', level: 42, ready: true },
      { id: 'p2', name: '코드마스터', avatar: '⚡', level: 38, ready: false },
      { id: 'p3', name: '디버거', avatar: '🔧', level: 35, ready: true }
    ],
    maxPlayers: 4,
    missionId: 'm2',
    missionTitle: '소수 판별 최적화',
    difficulty: 'hard',
    status: 'waiting',
    createdAt: '2024-01-31T10:15:00'
  },
  {
    id: 'room3',
    name: '같이 풀어요~ 🤝',
    mode: 'coop',
    hostId: 'h3',
    hostName: '친절한코더',
    hostAvatar: '😊',
    players: [
      { id: 'h3', name: '친절한코더', avatar: '😊', level: 20, ready: true }
    ],
    maxPlayers: 2,
    missionId: 'm3',
    missionTitle: '미로 탈출 알고리즘',
    difficulty: 'medium',
    status: 'waiting',
    createdAt: '2024-01-31T10:20:00'
  }
];

const modeInfo = {
  race: {
    name: '레이스',
    description: '먼저 정답을 맞추는 사람이 승리!',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30'
  },
  battle: {
    name: '배틀',
    description: '더 효율적인 코드를 작성한 사람이 승리!',
    icon: Swords,
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30'
  },
  coop: {
    name: '협동',
    description: '함께 힘을 합쳐 문제를 해결해요!',
    icon: Users2,
    color: 'from-green-500 to-teal-500',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30'
  }
};

const MultiplayerLobby: React.FC = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthStore();
  const [rooms, setRooms] = useState<GameRoom[]>(sampleRooms);
  const [selectedMode, setSelectedMode] = useState<'all' | 'race' | 'battle' | 'coop'>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링된 방 목록
  const filteredRooms = rooms.filter(room => {
    if (selectedMode !== 'all' && room.mode !== selectedMode) return false;
    if (searchQuery && !room.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return room.status === 'waiting';
  });

  // 방 참가
  const handleJoinRoom = (roomId: string) => {
    navigate(`/collab/${roomId}`);
  };

  // 방 새로고침
  const handleRefresh = () => {
    // Firebase에서 방 목록 다시 로드
    console.log('Refreshing rooms...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 p-4 md:p-8">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-violet-400" />
              멀티플레이어
            </h1>
            <p className="text-slate-400 mt-1">친구들과 함께 코딩 대결을 즐겨보세요!</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl px-6 py-3 font-medium"
          >
            <Plus className="w-5 h-5" />
            방 만들기
          </motion.button>
        </div>
      </motion.div>

      {/* 모드 선택 */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(modeInfo).map(([key, info]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMode(selectedMode === key ? 'all' : key as any)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedMode === key
                  ? `${info.bgColor} ${info.borderColor} border-2`
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color}`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{info.name}</h3>
                  <p className="text-slate-400 text-sm">{info.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 검색 및 필터 */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="방 이름 검색..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-700"
          >
            <RefreshCw className="w-5 h-5" />
            새로고침
          </motion.button>
        </div>
      </div>

      {/* 방 목록 */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            대기 중인 방 ({filteredRooms.length})
          </h2>
        </div>

        {filteredRooms.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/50 rounded-2xl border border-slate-700">
            <Users className="w-16 h-16 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400 text-lg mb-2">대기 중인 방이 없습니다</p>
            <p className="text-slate-500">새로운 방을 만들어보세요!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredRooms.map((room, index) => {
              const mode = modeInfo[room.mode];
              return (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 hover:border-violet-500/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* 방 정보 */}
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${mode.color}`}>
                        <mode.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">{room.name}</h3>
                          <span className={`px-2 py-0.5 rounded text-xs ${mode.bgColor} text-white`}>
                            {mode.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            room.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                            room.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {room.difficulty === 'easy' ? '쉬움' : room.difficulty === 'medium' ? '보통' : '어려움'}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          {room.missionTitle}
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                          <Crown className="w-4 h-4 text-yellow-500" />
                          <span>{room.hostAvatar} {room.hostName}</span>
                        </div>
                      </div>
                    </div>

                    {/* 플레이어 & 참가 */}
                    <div className="flex items-center gap-4">
                      {/* 플레이어 아바타 */}
                      <div className="flex -space-x-2">
                        {room.players.map(player => (
                          <div
                            key={player.id}
                            className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-800 flex items-center justify-center text-lg"
                            title={`${player.name} (Lv.${player.level})`}
                          >
                            {player.avatar}
                          </div>
                        ))}
                        {Array.from({ length: room.maxPlayers - room.players.length }).map((_, i) => (
                          <div
                            key={`empty-${i}`}
                            className="w-10 h-10 rounded-full bg-slate-700/50 border-2 border-dashed border-slate-600 flex items-center justify-center"
                          >
                            <Users className="w-4 h-4 text-slate-500" />
                          </div>
                        ))}
                      </div>

                      <div className="text-slate-400 text-sm">
                        {room.players.length}/{room.maxPlayers}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleJoinRoom(room.id)}
                        disabled={room.players.length >= room.maxPlayers}
                        className={`flex items-center gap-2 rounded-xl px-6 py-3 font-medium ${
                          room.players.length >= room.maxPlayers
                            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white'
                        }`}
                      >
                        {room.players.length >= room.maxPlayers ? '만석' : '참가'}
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* 방 만들기 모달 */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-lg w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-6">새 방 만들기</h2>

              <div className="space-y-4">
                {/* 방 이름 */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">방 이름</label>
                  <input
                    type="text"
                    placeholder="예: 초보자 환영!"
                    className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-violet-500"
                  />
                </div>

                {/* 게임 모드 */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">게임 모드</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(modeInfo).map(([key, info]) => (
                      <button
                        key={key}
                        className={`p-3 rounded-xl border text-center transition-all ${info.bgColor} ${info.borderColor}`}
                      >
                        <info.icon className="w-6 h-6 mx-auto mb-1 text-white" />
                        <span className="text-white text-sm">{info.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 최대 인원 */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">최대 인원</label>
                  <div className="flex gap-2">
                    {[2, 3, 4].map(num => (
                      <button
                        key={num}
                        className="flex-1 py-3 rounded-xl bg-slate-700 text-white hover:bg-violet-500 transition-colors"
                      >
                        {num}명
                      </button>
                    ))}
                  </div>
                </div>

                {/* 미션 선택 */}
                <div>
                  <label className="block text-slate-400 text-sm mb-2">문제 선택</label>
                  <select className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500">
                    <option>변수 교환하기 (쉬움)</option>
                    <option>피보나치 수열 (보통)</option>
                    <option>소수 판별 (어려움)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-3 rounded-xl bg-slate-700 text-slate-300 hover:bg-slate-600"
                >
                  취소
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium"
                >
                  방 만들기
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiplayerLobby;

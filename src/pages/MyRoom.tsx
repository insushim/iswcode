import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Coins, Lock, Check, ShoppingBag, Wallpaper, Grid3X3, Sofa, Flower2, Cpu, Trophy, Trash2 } from 'lucide-react';
import { useCustomizationStore, roomItems, avatarItems } from '../stores/customizationStore';
import { useUserStore } from '../stores/userStore';
import type { RoomCategory } from '../types';

const categoryConfig: { id: RoomCategory; name: string; icon: React.ReactNode }[] = [
  { id: 'wallpaper', name: '벽지', icon: <Wallpaper className="w-5 h-5" /> },
  { id: 'floor', name: '바닥', icon: <Grid3X3 className="w-5 h-5" /> },
  { id: 'furniture', name: '가구', icon: <Sofa className="w-5 h-5" /> },
  { id: 'decoration', name: '장식', icon: <Trophy className="w-5 h-5" /> },
  { id: 'plant', name: '식물', icon: <Flower2 className="w-5 h-5" /> },
  { id: 'tech', name: '테크', icon: <Cpu className="w-5 h-5" /> },
  { id: 'trophy', name: '트로피', icon: <Trophy className="w-5 h-5" /> },
];

const rarityColors = {
  common: 'from-slate-400 to-slate-500',
  rare: 'from-blue-400 to-blue-600',
  epic: 'from-purple-400 to-purple-600',
  legendary: 'from-yellow-400 to-orange-500',
};

const rarityBorder = {
  common: 'border-slate-400',
  rare: 'border-blue-500',
  epic: 'border-purple-500',
  legendary: 'border-yellow-500',
};

const wallpaperStyles: Record<string, string> = {
  'wall-white': 'bg-gradient-to-b from-slate-100 to-slate-200',
  'wall-blue': 'bg-gradient-to-b from-blue-200 to-blue-300',
  'wall-pink': 'bg-gradient-to-b from-pink-200 to-pink-300',
  'wall-green': 'bg-gradient-to-b from-emerald-200 to-emerald-300',
  'wall-wood': 'bg-gradient-to-b from-amber-700 to-amber-800',
  'wall-brick': 'bg-gradient-to-b from-red-700 to-red-900',
  'wall-space': 'bg-gradient-to-b from-indigo-900 to-purple-900',
  'wall-neon': 'bg-gradient-to-b from-purple-800 to-pink-900',
  'wall-gold': 'bg-gradient-to-b from-yellow-400 to-amber-500',
};

const floorStyles: Record<string, string> = {
  'floor-wood': 'bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600',
  'floor-carpet': 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400',
  'floor-marble': 'bg-gradient-to-r from-slate-200 via-white to-slate-200',
  'floor-grass': 'bg-gradient-to-r from-green-500 via-green-400 to-green-500',
  'floor-space': 'bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800',
  'floor-rainbow': 'bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400',
};

const MyRoom: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory>('wallpaper');
  const [showPurchaseModal, setShowPurchaseModal] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);

  const { user } = useUserStore();
  const {
    coins,
    roomConfig,
    ownedRoomItems,
    avatarConfig,
    buyRoomItem,
    setRoomWallpaper,
    setRoomFloor,
    addRoomFurniture,
    removeRoomFurniture,
    getRoomItem,
    getAvatarItem,
  } = useCustomizationStore();

  const filteredItems = roomItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (itemId: string) => {
    const item = getRoomItem(itemId);
    if (!item) return;

    if (ownedRoomItems.includes(itemId)) {
      // 카테고리에 따라 적용
      if (item.category === 'wallpaper') {
        setRoomWallpaper(itemId);
      } else if (item.category === 'floor') {
        setRoomFloor(itemId);
      } else {
        // 가구/장식품은 룸에 배치
        addRoomFurniture(itemId, 50, 60);
      }
    } else {
      setShowPurchaseModal(itemId);
    }
  };

  const handlePurchase = (itemId: string) => {
    const success = buyRoomItem(itemId);
    if (success) {
      const item = getRoomItem(itemId);
      if (item) {
        if (item.category === 'wallpaper') {
          setRoomWallpaper(itemId);
        } else if (item.category === 'floor') {
          setRoomFloor(itemId);
        } else {
          addRoomFurniture(itemId, 50, 60);
        }
      }
    }
    setShowPurchaseModal(null);
  };

  const isItemPlaced = (itemId: string) => {
    return roomConfig.furniture.some(f => f.itemId === itemId) ||
           roomConfig.decorations.some(d => d.itemId === itemId);
  };

  const wallStyle = wallpaperStyles[roomConfig.wallpaper] || 'bg-slate-100';
  const floorStyle = floorStyles[roomConfig.floor] || 'bg-amber-600';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Home className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">마이룸 꾸미기</h1>
              <p className="text-white/80">나만의 공간을 만들어보세요!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                editMode
                  ? 'bg-red-500 text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white'
              }`}
            >
              {editMode ? '편집 완료' : '편집 모드'}
            </button>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl">
              <Coins className="w-6 h-6 text-yellow-300" />
              <span className="text-2xl font-bold">{coins.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* 마이룸 미리보기 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-dark-surface rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold mb-4">내 방</h2>

            {/* 룸 디스플레이 */}
            <div className={`relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-slate-300 dark:border-slate-600`}>
              {/* 벽 */}
              <div className={`absolute inset-0 ${wallStyle}`}>
                {/* 벽 패턴 */}
                {roomConfig.wallpaper === 'wall-space' && (
                  <>
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 60}%` }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1 + Math.random() * 2, repeat: Infinity }}
                      />
                    ))}
                  </>
                )}
                {roomConfig.wallpaper === 'wall-neon' && (
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-20 h-1 bg-pink-400 animate-pulse rounded" />
                    <div className="absolute top-8 right-8 w-16 h-1 bg-cyan-400 animate-pulse rounded" />
                    <div className="absolute top-16 left-12 w-12 h-1 bg-purple-400 animate-pulse rounded" />
                  </div>
                )}
              </div>

              {/* 바닥 */}
              <div className={`absolute bottom-0 left-0 right-0 h-1/3 ${floorStyle}`}>
                {/* 바닥 패턴 */}
                {roomConfig.floor === 'floor-wood' && (
                  <div className="absolute inset-0 opacity-30">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 bottom-0 w-px bg-amber-900"
                        style={{ left: `${12.5 * i}%` }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* 배치된 가구들 */}
              {roomConfig.furniture.map((placement) => {
                const item = getRoomItem(placement.itemId);
                if (!item) return null;
                return (
                  <motion.div
                    key={placement.itemId}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute cursor-move"
                    style={{
                      left: `${placement.x}%`,
                      bottom: `${placement.y}%`,
                      transform: 'translate(-50%, 50%)',
                    }}
                  >
                    <div className="relative group">
                      <span className="text-5xl md:text-6xl drop-shadow-lg">{item.image}</span>
                      {editMode && (
                        <button
                          onClick={() => removeRoomFurniture(placement.itemId)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                );
              })}

              {/* 아바타 */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute bottom-1/4 left-1/2 -translate-x-1/2"
              >
                <div className="relative">
                  <span className="text-7xl md:text-8xl drop-shadow-lg">
                    {getAvatarItem(avatarConfig.character)?.image || '🐱'}
                  </span>
                  {avatarConfig.pet && avatarConfig.pet !== 'pet-none' && (
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute -left-8 bottom-0 text-3xl"
                    >
                      {getAvatarItem(avatarConfig.pet)?.image}
                    </motion.span>
                  )}
                </div>
              </motion.div>

              {/* 창문 (장식) */}
              <div className="absolute top-4 right-4 w-16 h-20 bg-gradient-to-b from-sky-300 to-sky-400 rounded-lg border-4 border-amber-700 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-full bg-amber-700" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-amber-700" />
                </div>
              </div>
            </div>

            {/* 현재 배치된 아이템 */}
            <div className="mt-4 p-4 bg-slate-100 dark:bg-dark-surfaceHover rounded-xl">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">배치된 아이템</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-dark-surface rounded-lg text-sm">
                  <span>{getRoomItem(roomConfig.wallpaper)?.image}</span>
                  <span>{getRoomItem(roomConfig.wallpaper)?.name}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-dark-surface rounded-lg text-sm">
                  <span>{getRoomItem(roomConfig.floor)?.image}</span>
                  <span>{getRoomItem(roomConfig.floor)?.name}</span>
                </span>
                {roomConfig.furniture.map((f) => {
                  const item = getRoomItem(f.itemId);
                  return item ? (
                    <span key={f.itemId} className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-dark-surface rounded-lg text-sm">
                      <span>{item.image}</span>
                      <span>{item.name}</span>
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 아이템 선택 영역 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-dark-surface rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            {/* 카테고리 탭 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categoryConfig.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-xl font-medium text-sm transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-dark-surfaceHover text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {cat.icon}
                  <span className="hidden sm:inline">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* 아이템 그리드 */}
            <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-2">
              {filteredItems.map((item) => {
                const isOwned = ownedRoomItems.includes(item.id);
                const isSelected = roomConfig.wallpaper === item.id ||
                                   roomConfig.floor === item.id ||
                                   isItemPlaced(item.id);
                const isLocked = item.unlockLevel && user && user.level < item.unlockLevel;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => !isLocked && handleItemClick(item.id)}
                    whileHover={{ scale: isLocked ? 1 : 1.05 }}
                    whileTap={{ scale: isLocked ? 1 : 0.95 }}
                    className={`relative aspect-square rounded-2xl border-2 transition-all overflow-hidden ${
                      isSelected
                        ? `${rarityBorder[item.rarity]} border-4`
                        : 'border-slate-200 dark:border-slate-700'
                    } ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[item.rarity]} opacity-20`} />
                    <div className="absolute inset-0 flex items-center justify-center text-3xl">
                      {item.image}
                    </div>

                    {isSelected && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}

                    {isLocked && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                        <Lock className="w-5 h-5 text-white mb-1" />
                        <span className="text-xs text-white">Lv.{item.unlockLevel}</span>
                      </div>
                    )}

                    {!isOwned && !isLocked && (
                      <div className="absolute bottom-1 left-1 right-1 bg-black/70 rounded-lg py-0.5 px-1 flex items-center justify-center gap-1">
                        <Coins className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-white font-bold">{item.price}</span>
                      </div>
                    )}

                    {isOwned && !isSelected && (
                      <div className="absolute top-1 right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-2.5 h-2.5 text-white" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* 아이템 이름 목록 */}
            <div className="mt-4 p-3 bg-slate-50 dark:bg-dark-surfaceHover rounded-xl max-h-48 overflow-y-auto">
              <p className="text-xs font-medium text-slate-500 mb-2">아이템 목록</p>
              <div className="space-y-1">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-1.5 rounded-lg text-xs ${
                      roomConfig.wallpaper === item.id ||
                      roomConfig.floor === item.id ||
                      isItemPlaced(item.id)
                        ? 'bg-cyan-100 dark:bg-cyan-900/30'
                        : ''
                    }`}
                  >
                    <span className="text-lg">{item.image}</span>
                    <span className="font-medium">{item.name}</span>
                    <span className={`ml-auto px-1.5 py-0.5 rounded text-[10px] ${
                      item.rarity === 'legendary' ? 'bg-yellow-200 text-yellow-800' :
                      item.rarity === 'epic' ? 'bg-purple-200 text-purple-800' :
                      item.rarity === 'rare' ? 'bg-blue-200 text-blue-800' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {item.rarity === 'legendary' ? '전설' :
                       item.rarity === 'epic' ? '에픽' :
                       item.rarity === 'rare' ? '레어' : '일반'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 구매 모달 */}
      <AnimatePresence>
        {showPurchaseModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPurchaseModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-dark-surface rounded-3xl p-6 max-w-sm w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {(() => {
                const item = getRoomItem(showPurchaseModal);
                if (!item) return null;
                const canAfford = coins >= item.price;

                return (
                  <>
                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${rarityColors[item.rarity]} flex items-center justify-center mb-4`}>
                      <span className="text-6xl">{item.image}</span>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2">{item.name}</h3>
                    <p className="text-center text-slate-500 mb-4">
                      {item.rarity === 'legendary' ? '전설' : item.rarity === 'epic' ? '에픽' : item.rarity === 'rare' ? '레어' : '일반'} 아이템
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <Coins className="w-6 h-6 text-yellow-500" />
                      <span className="text-2xl font-bold">{item.price}</span>
                    </div>
                    {!canAfford && (
                      <p className="text-center text-red-500 text-sm mb-4">
                        코인이 부족합니다! (보유: {coins})
                      </p>
                    )}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowPurchaseModal(null)}
                        className="flex-1 py-3 bg-slate-200 dark:bg-slate-700 rounded-xl font-bold"
                      >
                        취소
                      </button>
                      <button
                        onClick={() => handlePurchase(showPurchaseModal)}
                        disabled={!canAfford}
                        className={`flex-1 py-3 rounded-xl font-bold text-white ${
                          canAfford
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : 'bg-slate-400 cursor-not-allowed'
                        }`}
                      >
                        구매하기
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyRoom;

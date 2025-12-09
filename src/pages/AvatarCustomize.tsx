import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coins, Lock, Check, ShoppingBag, User, Crown, Glasses, Shirt, Star, Heart, Palette } from 'lucide-react';
import { useCustomizationStore, avatarItems } from '../stores/customizationStore';
import { useUserStore } from '../stores/userStore';
import type { AvatarCategory } from '../types';

const categoryConfig: { id: AvatarCategory; name: string; icon: React.ReactNode }[] = [
  { id: 'character', name: '캐릭터', icon: <User className="w-5 h-5" /> },
  { id: 'hair', name: '모자/헤어', icon: <Crown className="w-5 h-5" /> },
  { id: 'face', name: '얼굴', icon: <Glasses className="w-5 h-5" /> },
  { id: 'outfit', name: '의상', icon: <Shirt className="w-5 h-5" /> },
  { id: 'accessory', name: '액세서리', icon: <Star className="w-5 h-5" /> },
  { id: 'pet', name: '펫', icon: <Heart className="w-5 h-5" /> },
  { id: 'background', name: '배경', icon: <Palette className="w-5 h-5" /> },
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

const bgGradients: Record<string, string> = {
  'bg-blue': 'from-blue-400 to-cyan-400',
  'bg-green': 'from-green-400 to-emerald-400',
  'bg-purple': 'from-purple-500 to-indigo-600',
  'bg-orange': 'from-orange-400 to-red-400',
  'bg-rainbow': 'from-red-400 via-yellow-400 via-green-400 to-blue-400',
  'bg-galaxy': 'from-indigo-900 via-purple-800 to-pink-700',
  'bg-aurora': 'from-green-400 via-cyan-400 to-blue-500',
  'bg-matrix': 'from-green-900 via-green-700 to-green-500',
};

const AvatarCustomize: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AvatarCategory>('character');
  const [showPurchaseModal, setShowPurchaseModal] = useState<string | null>(null);

  const { user } = useUserStore();
  const {
    coins,
    avatarConfig,
    ownedAvatarItems,
    buyAvatarItem,
    setAvatarPart,
    getAvatarItem,
  } = useCustomizationStore();

  const filteredItems = avatarItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (itemId: string) => {
    if (ownedAvatarItems.includes(itemId)) {
      setAvatarPart(selectedCategory, itemId);
    } else {
      setShowPurchaseModal(itemId);
    }
  };

  const handlePurchase = (itemId: string) => {
    const success = buyAvatarItem(itemId);
    if (success) {
      setAvatarPart(selectedCategory, itemId);
    }
    setShowPurchaseModal(null);
  };

  const getCurrentItem = (category: AvatarCategory): string => {
    switch (category) {
      case 'character': return avatarConfig.character;
      case 'hair': return avatarConfig.hair || '';
      case 'face': return avatarConfig.face || '';
      case 'outfit': return avatarConfig.outfit || '';
      case 'accessory': return avatarConfig.accessory || '';
      case 'pet': return avatarConfig.pet || '';
      case 'background': return avatarConfig.background;
      default: return '';
    }
  };

  const bgGradient = bgGradients[avatarConfig.background] || 'from-blue-400 to-cyan-400';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* 헤더 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-3xl p-6 text-white shadow-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">아바타 꾸미기</h1>
              <p className="text-white/80">나만의 캐릭터를 만들어보세요!</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-2xl">
            <Coins className="w-6 h-6 text-yellow-300" />
            <span className="text-2xl font-bold">{coins.toLocaleString()}</span>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* 아바타 미리보기 */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white dark:bg-dark-surface rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold mb-4 text-center">미리보기</h2>

            {/* 아바타 디스플레이 */}
            <div className={`relative w-full aspect-square rounded-2xl bg-gradient-to-br ${bgGradient} flex items-center justify-center overflow-hidden`}>
              {/* 배경 효과 */}
              <div className="absolute inset-0 opacity-30">
                {avatarConfig.background === 'bg-galaxy' && (
                  <>
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1 + Math.random() * 2, repeat: Infinity }}
                      />
                    ))}
                  </>
                )}
              </div>

              {/* 아바타 조합 */}
              <div className="relative z-10 flex flex-col items-center">
                {/* 헤어/모자 */}
                {avatarConfig.hair && avatarConfig.hair !== 'hair-none' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-4 text-4xl"
                  >
                    {getAvatarItem(avatarConfig.hair)?.image}
                  </motion.div>
                )}

                {/* 메인 캐릭터 + 얼굴 + 의상 */}
                <div className="relative">
                  <motion.div
                    key={avatarConfig.character}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="text-8xl"
                  >
                    {getAvatarItem(avatarConfig.character)?.image}
                  </motion.div>

                  {/* 얼굴 액세서리 */}
                  {avatarConfig.face && avatarConfig.face !== 'face-none' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 left-1/2 -translate-x-1/2 text-3xl"
                    >
                      {getAvatarItem(avatarConfig.face)?.image}
                    </motion.div>
                  )}

                  {/* 의상 */}
                  {avatarConfig.outfit && avatarConfig.outfit !== 'outfit-none' && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-3xl"
                    >
                      {getAvatarItem(avatarConfig.outfit)?.image}
                    </motion.div>
                  )}
                </div>

                {/* 액세서리 */}
                {avatarConfig.accessory && avatarConfig.accessory !== 'acc-none' && (
                  <motion.div
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 text-4xl"
                  >
                    {getAvatarItem(avatarConfig.accessory)?.image}
                  </motion.div>
                )}

                {/* 펫 */}
                {avatarConfig.pet && avatarConfig.pet !== 'pet-none' && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, y: [0, -5, 0] }}
                    transition={{ y: { repeat: Infinity, duration: 2 } }}
                    className="absolute -left-8 bottom-0 text-4xl"
                  >
                    {getAvatarItem(avatarConfig.pet)?.image}
                  </motion.div>
                )}
              </div>
            </div>

            {/* 현재 장착 정보 */}
            <div className="mt-4 p-4 bg-slate-100 dark:bg-dark-surfaceHover rounded-xl">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">현재 장착</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(avatarConfig).map(([key, itemId]) => {
                  if (!itemId || itemId.includes('-none')) return null;
                  const item = getAvatarItem(itemId);
                  if (!item) return null;
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white dark:bg-dark-surface rounded-lg text-xs"
                    >
                      <span>{item.image}</span>
                      <span>{item.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 아이템 선택 영역 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-dark-surface rounded-3xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            {/* 카테고리 탭 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categoryConfig.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-dark-surfaceHover text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* 아이템 그리드 */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {filteredItems.map((item) => {
                const isOwned = ownedAvatarItems.includes(item.id);
                const isSelected = getCurrentItem(selectedCategory) === item.id;
                const isLocked = item.unlockLevel && user && user.level < item.unlockLevel;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => !isLocked && handleItemClick(item.id)}
                    whileHover={{ scale: isLocked ? 1 : 1.05 }}
                    whileTap={{ scale: isLocked ? 1 : 0.95 }}
                    className={`relative aspect-square rounded-2xl border-3 transition-all overflow-hidden ${
                      isSelected
                        ? `${rarityBorder[item.rarity]} border-4 ring-4 ring-${item.rarity === 'legendary' ? 'yellow' : item.rarity === 'epic' ? 'purple' : item.rarity === 'rare' ? 'blue' : 'slate'}-500/30`
                        : 'border-slate-200 dark:border-slate-700'
                    } ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {/* 배경 그라데이션 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${rarityColors[item.rarity]} opacity-20`} />

                    {/* 아이템 이미지 */}
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">
                      {item.image}
                    </div>

                    {/* 선택됨 표시 */}
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}

                    {/* 잠김 표시 */}
                    {isLocked && (
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                        <Lock className="w-6 h-6 text-white mb-1" />
                        <span className="text-xs text-white">Lv.{item.unlockLevel}</span>
                      </div>
                    )}

                    {/* 미보유 + 가격 표시 */}
                    {!isOwned && !isLocked && (
                      <div className="absolute bottom-1 left-1 right-1 bg-black/70 rounded-lg py-1 px-2 flex items-center justify-center gap-1">
                        <Coins className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-white font-bold">{item.price}</span>
                      </div>
                    )}

                    {/* 보유 표시 */}
                    {isOwned && !isSelected && (
                      <div className="absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <ShoppingBag className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* 아이템 이름 범례 */}
            <div className="mt-6 p-4 bg-slate-50 dark:bg-dark-surfaceHover rounded-xl">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">아이템 목록</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-2 p-2 rounded-lg ${
                      getCurrentItem(selectedCategory) === item.id
                        ? 'bg-purple-100 dark:bg-purple-900/30'
                        : 'bg-white dark:bg-dark-surface'
                    }`}
                  >
                    <span className="text-xl">{item.image}</span>
                    <span className="text-xs font-medium truncate">{item.name}</span>
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
                const item = getAvatarItem(showPurchaseModal);
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
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
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

export default AvatarCustomize;

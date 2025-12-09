import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { AvatarItem, AvatarConfig, AvatarCategory, RoomItem, RoomConfig, RoomCategory, RoomPlacement } from '../types';

// 아바타 아이템 데이터 - 이름과 이미지가 확실히 매칭됨
export const avatarItems: AvatarItem[] = [
  // 캐릭터 (기본 얼굴)
  { id: 'char-cat', name: '코딩 고양이', category: 'character', image: '🐱', price: 0, rarity: 'common', owned: true },
  { id: 'char-dog', name: '코딩 강아지', category: 'character', image: '🐶', price: 100, rarity: 'common', owned: false },
  { id: 'char-rabbit', name: '토끼 개발자', category: 'character', image: '🐰', price: 100, rarity: 'common', owned: false },
  { id: 'char-bear', name: '곰돌이 코더', category: 'character', image: '🐻', price: 150, rarity: 'common', owned: false },
  { id: 'char-panda', name: '판다 프로그래머', category: 'character', image: '🐼', price: 200, rarity: 'rare', owned: false },
  { id: 'char-fox', name: '여우 해커', category: 'character', image: '🦊', price: 200, rarity: 'rare', owned: false },
  { id: 'char-lion', name: '사자왕 개발자', category: 'character', image: '🦁', price: 300, rarity: 'rare', owned: false },
  { id: 'char-unicorn', name: '유니콘 마법사', category: 'character', image: '🦄', price: 500, rarity: 'epic', owned: false },
  { id: 'char-dragon', name: '드래곤 마스터', category: 'character', image: '🐲', price: 800, rarity: 'epic', owned: false },
  { id: 'char-robot', name: 'AI 로봇', category: 'character', image: '🤖', price: 1000, rarity: 'legendary', unlockLevel: 50, owned: false },
  { id: 'char-alien', name: '외계인 천재', category: 'character', image: '👽', price: 1200, rarity: 'legendary', unlockLevel: 75, owned: false },
  { id: 'char-ninja', name: '코드 닌자', category: 'character', image: '🥷', price: 1500, rarity: 'legendary', unlockLevel: 100, owned: false },

  // 헤어스타일
  { id: 'hair-none', name: '없음', category: 'hair', image: '✨', price: 0, rarity: 'common', owned: true },
  { id: 'hair-crown', name: '왕관', category: 'hair', image: '👑', price: 300, rarity: 'rare', owned: false },
  { id: 'hair-cap', name: '야구 모자', category: 'hair', image: '🧢', price: 150, rarity: 'common', owned: false },
  { id: 'hair-tophat', name: '신사 모자', category: 'hair', image: '🎩', price: 250, rarity: 'rare', owned: false },
  { id: 'hair-ribbon', name: '리본', category: 'hair', image: '🎀', price: 200, rarity: 'common', owned: false },
  { id: 'hair-party', name: '파티 모자', category: 'hair', image: '🥳', price: 400, rarity: 'epic', owned: false },
  { id: 'hair-grad', name: '학사모', category: 'hair', image: '🎓', price: 500, rarity: 'epic', unlockLevel: 30, owned: false },
  { id: 'hair-wizard', name: '마법사 모자', category: 'hair', image: '🧙', price: 600, rarity: 'epic', owned: false },

  // 얼굴 표정/액세서리
  { id: 'face-none', name: '없음', category: 'face', image: '✨', price: 0, rarity: 'common', owned: true },
  { id: 'face-glasses', name: '안경', category: 'face', image: '👓', price: 100, rarity: 'common', owned: false },
  { id: 'face-sunglasses', name: '선글라스', category: 'face', image: '🕶️', price: 150, rarity: 'common', owned: false },
  { id: 'face-mask', name: '가면', category: 'face', image: '🎭', price: 200, rarity: 'rare', owned: false },
  { id: 'face-monocle', name: '외알 안경', category: 'face', image: '🧐', price: 250, rarity: 'rare', owned: false },
  { id: 'face-nerd', name: '너드 안경', category: 'face', image: '🤓', price: 300, rarity: 'rare', owned: false },
  { id: 'face-star', name: '별 눈', category: 'face', image: '🤩', price: 400, rarity: 'epic', owned: false },

  // 의상
  { id: 'outfit-none', name: '없음', category: 'outfit', image: '✨', price: 0, rarity: 'common', owned: true },
  { id: 'outfit-tshirt', name: '티셔츠', category: 'outfit', image: '👕', price: 100, rarity: 'common', owned: false },
  { id: 'outfit-hoodie', name: '후드티', category: 'outfit', image: '🧥', price: 200, rarity: 'common', owned: false },
  { id: 'outfit-suit', name: '정장', category: 'outfit', image: '🤵', price: 300, rarity: 'rare', owned: false },
  { id: 'outfit-dress', name: '드레스', category: 'outfit', image: '👗', price: 300, rarity: 'rare', owned: false },
  { id: 'outfit-superhero', name: '슈퍼히어로', category: 'outfit', image: '🦸', price: 500, rarity: 'epic', owned: false },
  { id: 'outfit-astronaut', name: '우주복', category: 'outfit', image: '👨‍🚀', price: 800, rarity: 'epic', unlockLevel: 40, owned: false },
  { id: 'outfit-scientist', name: '과학자 가운', category: 'outfit', image: '👨‍🔬', price: 600, rarity: 'epic', owned: false },

  // 액세서리
  { id: 'acc-none', name: '없음', category: 'accessory', image: '✨', price: 0, rarity: 'common', owned: true },
  { id: 'acc-laptop', name: '노트북', category: 'accessory', image: '💻', price: 200, rarity: 'common', owned: false },
  { id: 'acc-phone', name: '스마트폰', category: 'accessory', image: '📱', price: 150, rarity: 'common', owned: false },
  { id: 'acc-coffee', name: '커피', category: 'accessory', image: '☕', price: 100, rarity: 'common', owned: false },
  { id: 'acc-book', name: '코딩 책', category: 'accessory', image: '📚', price: 150, rarity: 'common', owned: false },
  { id: 'acc-trophy', name: '트로피', category: 'accessory', image: '🏆', price: 500, rarity: 'epic', owned: false },
  { id: 'acc-medal', name: '금메달', category: 'accessory', image: '🥇', price: 400, rarity: 'epic', owned: false },
  { id: 'acc-gem', name: '보석', category: 'accessory', image: '💎', price: 1000, rarity: 'legendary', owned: false },
  { id: 'acc-rocket', name: '로켓', category: 'accessory', image: '🚀', price: 800, rarity: 'legendary', unlockLevel: 60, owned: false },

  // 펫
  { id: 'pet-none', name: '없음', category: 'pet', image: '✨', price: 0, rarity: 'common', owned: true },
  { id: 'pet-chick', name: '병아리', category: 'pet', image: '🐤', price: 200, rarity: 'common', owned: false },
  { id: 'pet-hamster', name: '햄스터', category: 'pet', image: '🐹', price: 250, rarity: 'common', owned: false },
  { id: 'pet-turtle', name: '거북이', category: 'pet', image: '🐢', price: 300, rarity: 'rare', owned: false },
  { id: 'pet-owl', name: '부엉이', category: 'pet', image: '🦉', price: 400, rarity: 'rare', owned: false },
  { id: 'pet-parrot', name: '앵무새', category: 'pet', image: '🦜', price: 450, rarity: 'rare', owned: false },
  { id: 'pet-butterfly', name: '나비', category: 'pet', image: '🦋', price: 500, rarity: 'epic', owned: false },
  { id: 'pet-phoenix', name: '피닉스', category: 'pet', image: '🔥', price: 1000, rarity: 'legendary', unlockLevel: 80, owned: false },

  // 배경
  { id: 'bg-blue', name: '하늘빛', category: 'background', image: '🔵', price: 0, rarity: 'common', owned: true },
  { id: 'bg-green', name: '초원', category: 'background', image: '🟢', price: 100, rarity: 'common', owned: false },
  { id: 'bg-purple', name: '우주', category: 'background', image: '🟣', price: 150, rarity: 'common', owned: false },
  { id: 'bg-orange', name: '석양', category: 'background', image: '🟠', price: 150, rarity: 'common', owned: false },
  { id: 'bg-rainbow', name: '무지개', category: 'background', image: '🌈', price: 300, rarity: 'rare', owned: false },
  { id: 'bg-galaxy', name: '은하수', category: 'background', image: '🌌', price: 500, rarity: 'epic', owned: false },
  { id: 'bg-aurora', name: '오로라', category: 'background', image: '✨', price: 600, rarity: 'epic', owned: false },
  { id: 'bg-matrix', name: '매트릭스', category: 'background', image: '💚', price: 800, rarity: 'legendary', unlockLevel: 70, owned: false },
];

// 마이룸 아이템 데이터 - 이름과 이미지가 확실히 매칭됨
export const roomItems: RoomItem[] = [
  // 벽지
  { id: 'wall-white', name: '화이트 벽지', category: 'wallpaper', image: '⬜', price: 0, rarity: 'common', owned: true },
  { id: 'wall-blue', name: '하늘색 벽지', category: 'wallpaper', image: '🔵', price: 100, rarity: 'common', owned: false },
  { id: 'wall-pink', name: '핑크 벽지', category: 'wallpaper', image: '🩷', price: 100, rarity: 'common', owned: false },
  { id: 'wall-green', name: '민트 벽지', category: 'wallpaper', image: '🟢', price: 100, rarity: 'common', owned: false },
  { id: 'wall-wood', name: '나무 패널', category: 'wallpaper', image: '🟫', price: 200, rarity: 'rare', owned: false },
  { id: 'wall-brick', name: '벽돌 벽', category: 'wallpaper', image: '🧱', price: 250, rarity: 'rare', owned: false },
  { id: 'wall-space', name: '우주 벽지', category: 'wallpaper', image: '🌌', price: 500, rarity: 'epic', owned: false },
  { id: 'wall-neon', name: '네온 벽지', category: 'wallpaper', image: '💜', price: 600, rarity: 'epic', owned: false },
  { id: 'wall-gold', name: '골드 벽지', category: 'wallpaper', image: '🌟', price: 1000, rarity: 'legendary', unlockLevel: 50, owned: false },

  // 바닥
  { id: 'floor-wood', name: '원목 바닥', category: 'floor', image: '🟫', price: 0, rarity: 'common', owned: true },
  { id: 'floor-carpet', name: '카펫', category: 'floor', image: '🟦', price: 150, rarity: 'common', owned: false },
  { id: 'floor-marble', name: '대리석', category: 'floor', image: '⬜', price: 300, rarity: 'rare', owned: false },
  { id: 'floor-grass', name: '잔디밭', category: 'floor', image: '🟩', price: 200, rarity: 'rare', owned: false },
  { id: 'floor-space', name: '우주 바닥', category: 'floor', image: '⭐', price: 500, rarity: 'epic', owned: false },
  { id: 'floor-rainbow', name: '무지개 바닥', category: 'floor', image: '🌈', price: 800, rarity: 'legendary', owned: false },

  // 가구
  { id: 'furn-desk', name: '코딩 책상', category: 'furniture', image: '🖥️', price: 200, rarity: 'common', owned: true },
  { id: 'furn-chair', name: '게이밍 의자', category: 'furniture', image: '🪑', price: 150, rarity: 'common', owned: false },
  { id: 'furn-bookshelf', name: '책장', category: 'furniture', image: '📚', price: 250, rarity: 'common', owned: false },
  { id: 'furn-sofa', name: '소파', category: 'furniture', image: '🛋️', price: 300, rarity: 'rare', owned: false },
  { id: 'furn-bed', name: '침대', category: 'furniture', image: '🛏️', price: 350, rarity: 'rare', owned: false },
  { id: 'furn-lamp', name: '스탠드 램프', category: 'furniture', image: '💡', price: 100, rarity: 'common', owned: false },
  { id: 'furn-tv', name: 'TV', category: 'furniture', image: '📺', price: 400, rarity: 'rare', owned: false },
  { id: 'furn-arcade', name: '오락기', category: 'furniture', image: '🕹️', price: 600, rarity: 'epic', owned: false },
  { id: 'furn-piano', name: '피아노', category: 'furniture', image: '🎹', price: 800, rarity: 'epic', owned: false },
  { id: 'furn-throne', name: '왕좌', category: 'furniture', image: '🪑', price: 1500, rarity: 'legendary', unlockLevel: 80, owned: false },

  // 장식품
  { id: 'deco-poster', name: '코딩 포스터', category: 'decoration', image: '🖼️', price: 100, rarity: 'common', owned: false },
  { id: 'deco-clock', name: '시계', category: 'decoration', image: '🕐', price: 80, rarity: 'common', owned: false },
  { id: 'deco-globe', name: '지구본', category: 'decoration', image: '🌍', price: 200, rarity: 'rare', owned: false },
  { id: 'deco-trophy', name: '트로피 진열대', category: 'decoration', image: '🏆', price: 300, rarity: 'rare', owned: false },
  { id: 'deco-medal', name: '메달 벽걸이', category: 'decoration', image: '🥇', price: 250, rarity: 'rare', owned: false },
  { id: 'deco-star', name: '별 장식', category: 'decoration', image: '⭐', price: 150, rarity: 'common', owned: false },
  { id: 'deco-banner', name: '우승 깃발', category: 'decoration', image: '🚩', price: 400, rarity: 'epic', owned: false },
  { id: 'deco-neon', name: '네온 사인', category: 'decoration', image: '💫', price: 500, rarity: 'epic', owned: false },

  // 식물
  { id: 'plant-cactus', name: '선인장', category: 'plant', image: '🌵', price: 50, rarity: 'common', owned: false },
  { id: 'plant-flower', name: '꽃화분', category: 'plant', image: '🌸', price: 80, rarity: 'common', owned: false },
  { id: 'plant-tree', name: '미니 트리', category: 'plant', image: '🌲', price: 150, rarity: 'rare', owned: false },
  { id: 'plant-bonsai', name: '분재', category: 'plant', image: '🌳', price: 300, rarity: 'rare', owned: false },
  { id: 'plant-cherry', name: '벚꽃 나무', category: 'plant', image: '🌸', price: 500, rarity: 'epic', owned: false },
  { id: 'plant-magic', name: '마법 꽃', category: 'plant', image: '✨', price: 800, rarity: 'legendary', owned: false },

  // 테크
  { id: 'tech-computer', name: '고급 PC', category: 'tech', image: '🖥️', price: 400, rarity: 'rare', owned: false },
  { id: 'tech-robot', name: '미니 로봇', category: 'tech', image: '🤖', price: 500, rarity: 'epic', owned: false },
  { id: 'tech-drone', name: '드론', category: 'tech', image: '🛸', price: 600, rarity: 'epic', owned: false },
  { id: 'tech-vr', name: 'VR 세트', category: 'tech', image: '🥽', price: 700, rarity: 'epic', owned: false },
  { id: 'tech-hologram', name: '홀로그램', category: 'tech', image: '💎', price: 1000, rarity: 'legendary', unlockLevel: 60, owned: false },
  { id: 'tech-server', name: '서버 랙', category: 'tech', image: '🗄️', price: 1200, rarity: 'legendary', unlockLevel: 90, owned: false },

  // 트로피
  { id: 'trophy-bronze', name: '브론즈 트로피', category: 'trophy', image: '🥉', price: 0, rarity: 'common', unlockLevel: 5, owned: false },
  { id: 'trophy-silver', name: '실버 트로피', category: 'trophy', image: '🥈', price: 0, rarity: 'rare', unlockLevel: 20, owned: false },
  { id: 'trophy-gold', name: '골드 트로피', category: 'trophy', image: '🥇', price: 0, rarity: 'epic', unlockLevel: 50, owned: false },
  { id: 'trophy-diamond', name: '다이아 트로피', category: 'trophy', image: '💎', price: 0, rarity: 'legendary', unlockLevel: 100, owned: false },
];

interface CustomizationState {
  // 보유 코인
  coins: number;

  // 아바타
  avatarConfig: AvatarConfig;
  ownedAvatarItems: string[];

  // 마이룸
  roomConfig: RoomConfig;
  ownedRoomItems: string[];

  // Actions
  buyAvatarItem: (itemId: string) => boolean;
  buyRoomItem: (itemId: string) => boolean;
  setAvatarPart: (category: AvatarCategory, itemId: string) => void;
  setRoomWallpaper: (itemId: string) => void;
  setRoomFloor: (itemId: string) => void;
  addRoomFurniture: (itemId: string, x: number, y: number) => void;
  removeRoomFurniture: (itemId: string) => void;
  moveRoomFurniture: (itemId: string, x: number, y: number) => void;
  addCoins: (amount: number) => void;
  getAvatarItem: (itemId: string) => AvatarItem | undefined;
  getRoomItem: (itemId: string) => RoomItem | undefined;
  isItemOwned: (itemId: string, type: 'avatar' | 'room') => boolean;
}

export const useCustomizationStore = create<CustomizationState>()(
  persist(
    immer((set, get) => ({
      coins: 500, // 시작 코인

      avatarConfig: {
        character: 'char-cat',
        hair: 'hair-none',
        face: 'face-none',
        outfit: 'outfit-none',
        accessory: 'acc-none',
        pet: 'pet-none',
        background: 'bg-blue',
      },

      ownedAvatarItems: [
        'char-cat', 'hair-none', 'face-none', 'outfit-none',
        'acc-none', 'pet-none', 'bg-blue'
      ],

      roomConfig: {
        wallpaper: 'wall-white',
        floor: 'floor-wood',
        furniture: [{ itemId: 'furn-desk', x: 50, y: 60 }],
        decorations: [],
      },

      ownedRoomItems: ['wall-white', 'floor-wood', 'furn-desk'],

      buyAvatarItem: (itemId: string) => {
        const item = avatarItems.find(i => i.id === itemId);
        if (!item) return false;

        const state = get();
        if (state.ownedAvatarItems.includes(itemId)) return false;
        if (state.coins < item.price) return false;

        set((s) => {
          s.coins -= item.price;
          s.ownedAvatarItems.push(itemId);
        });
        return true;
      },

      buyRoomItem: (itemId: string) => {
        const item = roomItems.find(i => i.id === itemId);
        if (!item) return false;

        const state = get();
        if (state.ownedRoomItems.includes(itemId)) return false;
        if (state.coins < item.price) return false;

        set((s) => {
          s.coins -= item.price;
          s.ownedRoomItems.push(itemId);
        });
        return true;
      },

      setAvatarPart: (category: AvatarCategory, itemId: string) => {
        set((s) => {
          if (category === 'character') s.avatarConfig.character = itemId;
          else if (category === 'hair') s.avatarConfig.hair = itemId;
          else if (category === 'face') s.avatarConfig.face = itemId;
          else if (category === 'outfit') s.avatarConfig.outfit = itemId;
          else if (category === 'accessory') s.avatarConfig.accessory = itemId;
          else if (category === 'pet') s.avatarConfig.pet = itemId;
          else if (category === 'background') s.avatarConfig.background = itemId;
        });
      },

      setRoomWallpaper: (itemId: string) => {
        set((s) => {
          s.roomConfig.wallpaper = itemId;
        });
      },

      setRoomFloor: (itemId: string) => {
        set((s) => {
          s.roomConfig.floor = itemId;
        });
      },

      addRoomFurniture: (itemId: string, x: number, y: number) => {
        set((s) => {
          // 이미 배치되어 있으면 위치만 업데이트
          const existing = s.roomConfig.furniture.findIndex(f => f.itemId === itemId);
          if (existing >= 0) {
            s.roomConfig.furniture[existing].x = x;
            s.roomConfig.furniture[existing].y = y;
          } else {
            s.roomConfig.furniture.push({ itemId, x, y });
          }
        });
      },

      removeRoomFurniture: (itemId: string) => {
        set((s) => {
          s.roomConfig.furniture = s.roomConfig.furniture.filter(f => f.itemId !== itemId);
          s.roomConfig.decorations = s.roomConfig.decorations.filter(d => d.itemId !== itemId);
        });
      },

      moveRoomFurniture: (itemId: string, x: number, y: number) => {
        set((s) => {
          const furn = s.roomConfig.furniture.find(f => f.itemId === itemId);
          if (furn) {
            furn.x = x;
            furn.y = y;
          }
        });
      },

      addCoins: (amount: number) => {
        set((s) => {
          s.coins += amount;
        });
      },

      getAvatarItem: (itemId: string) => {
        return avatarItems.find(i => i.id === itemId);
      },

      getRoomItem: (itemId: string) => {
        return roomItems.find(i => i.id === itemId);
      },

      isItemOwned: (itemId: string, type: 'avatar' | 'room') => {
        const state = get();
        if (type === 'avatar') {
          return state.ownedAvatarItems.includes(itemId);
        }
        return state.ownedRoomItems.includes(itemId);
      },
    })),
    {
      name: 'codequest-customization',
    }
  )
);

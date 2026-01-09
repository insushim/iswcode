import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export interface PortfolioItem {
  id: string;
  missionId: string;
  missionTitle: string;
  unitId: string;
  weekId: string;
  type: 'python' | 'html' | 'javascript' | 'project';
  code: string;
  output?: string;
  screenshot?: string; // base64 or URL
  createdAt: string;
  updatedAt: string;
  isPublic: boolean;
  likes: number;
  tags: string[];
}

interface PortfolioState {
  items: PortfolioItem[];

  // Actions
  saveProject: (item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt' | 'likes'>) => void;
  updateProject: (id: string, updates: Partial<PortfolioItem>) => void;
  deleteProject: (id: string) => void;
  getProjectsByUnit: (unitId: string) => PortfolioItem[];
  getProjectsByType: (type: string) => PortfolioItem[];
  togglePublic: (id: string) => void;
  getProjectById: (id: string) => PortfolioItem | undefined;
  getAllProjects: () => PortfolioItem[];
}

export const usePortfolioStore = create<PortfolioState>()(
  persist(
    immer((set, get) => ({
      items: [],

      saveProject: (item) => {
        set((state) => {
          const newItem: PortfolioItem = {
            ...item,
            id: `portfolio_${Date.now()}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            likes: 0,
          };
          state.items.unshift(newItem);
        });
      },

      updateProject: (id, updates) => {
        set((state) => {
          const index = state.items.findIndex(item => item.id === id);
          if (index !== -1) {
            state.items[index] = {
              ...state.items[index],
              ...updates,
              updatedAt: new Date().toISOString(),
            };
          }
        });
      },

      deleteProject: (id) => {
        set((state) => {
          state.items = state.items.filter(item => item.id !== id);
        });
      },

      getProjectsByUnit: (unitId) => {
        return get().items.filter(item => item.unitId === unitId);
      },

      getProjectsByType: (type) => {
        return get().items.filter(item => item.type === type);
      },

      togglePublic: (id) => {
        set((state) => {
          const index = state.items.findIndex(item => item.id === id);
          if (index !== -1) {
            state.items[index].isPublic = !state.items[index].isPublic;
            state.items[index].updatedAt = new Date().toISOString();
          }
        });
      },

      getProjectById: (id) => {
        return get().items.find(item => item.id === id);
      },

      getAllProjects: () => {
        return get().items;
      },
    })),
    { name: 'codequest-portfolio' }
  )
);

'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PlayerStats {
  health: number;
  energy: number;
  money: number;
  reputation: number;
  level: number;
  experience: number;
}

export interface GameCharacter {
  id: string;
  name: string;
  age: number;
  path: 'Business' | 'Student' | 'Creative' | 'Executive';
  location: string;
  stats: PlayerStats;
  properties: string[];
  businesses: string[];
  friends: string[];
  createdAt: string;
  lastUpdated: string;
}

export interface GameStore {
  character: GameCharacter | null;
  isLoggedIn: boolean;
  currentRoute: string;
  topUpPending: Array<{ id: string; amount: number; status: 'pending' | 'accepted' | 'rejected' }>;
  
  // Character management
  createCharacter: (name: string, age: number, path: string) => void;
  loadCharacter: (character: GameCharacter) => void;
  updateStats: (stats: Partial<PlayerStats>) => void;
  updateLocation: (location: string) => void;
  
  // Money management
  addMoney: (amount: number) => void;
  spendMoney: (amount: number) => boolean;
  
  // Progression
  setRoute: (route: string) => void;
  addExperience: (amount: number) => void;
  
  // Top-up system
  requestTopUp: (amount: number) => string; // returns request ID
  updateTopUpStatus: (id: string, status: 'accepted' | 'rejected') => void;
  
  // Save/Load
  saveGame: () => void;
  loadGame: () => void;
  clearGame: () => void;
}

const defaultStats: PlayerStats = {
  health: 100,
  energy: 100,
  money: 0,
  reputation: 10,
  level: 1,
  experience: 0,
};

export const useGameStore = create<GameStore>(
  persist(
    (set, get) => ({
      character: null,
      isLoggedIn: false,
      currentRoute: '/',
      topUpPending: [],

      createCharacter: (name: string, age: number, path: string) => {
        const newCharacter: GameCharacter = {
          id: `player_${Date.now()}`,
          name,
          age,
          path: path as 'Business' | 'Student' | 'Creative' | 'Executive',
          location: 'Lekki',
          stats: { ...defaultStats, money: 0 },
          properties: [],
          businesses: [],
          friends: [],
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        };
        set({ character: newCharacter, isLoggedIn: true, currentRoute: '/onboarding' });
      },

      loadCharacter: (character: GameCharacter) => {
        set({ character, isLoggedIn: true });
      },

      updateStats: (stats: Partial<PlayerStats>) => {
        set((state) => {
          if (!state.character) return {};
          return {
            character: {
              ...state.character,
              stats: {
                ...state.character.stats,
                ...stats,
                health: Math.min(100, Math.max(0, (stats.health ?? state.character.stats.health))),
                energy: Math.min(100, Math.max(0, (stats.energy ?? state.character.stats.energy))),
                reputation: Math.max(0, (stats.reputation ?? state.character.stats.reputation)),
              },
              lastUpdated: new Date().toISOString(),
            },
          };
        });
      },

      updateLocation: (location: string) => {
        set((state) => {
          if (!state.character) return {};
          return {
            character: {
              ...state.character,
              location,
              lastUpdated: new Date().toISOString(),
            },
          };
        });
      },

      addMoney: (amount: number) => {
        set((state) => {
          if (!state.character) return {};
          return {
            character: {
              ...state.character,
              stats: {
                ...state.character.stats,
                money: state.character.stats.money + amount,
              },
              lastUpdated: new Date().toISOString(),
            },
          };
        });
      },

      spendMoney: (amount: number) => {
        const state = get();
        if (!state.character || state.character.stats.money < amount) {
          return false;
        }
        set((s) => {
          if (!s.character) return {};
          return {
            character: {
              ...s.character,
              stats: {
                ...s.character.stats,
                money: s.character.stats.money - amount,
              },
              lastUpdated: new Date().toISOString(),
            },
          };
        });
        return true;
      },

      setRoute: (route: string) => {
        set({ currentRoute: route });
      },

      addExperience: (amount: number) => {
        set((state) => {
          if (!state.character) return {};
          const newExp = state.character.stats.experience + amount;
          const levelUpThreshold = 1000;
          const newLevel = Math.floor(newExp / levelUpThreshold) + 1;
          return {
            character: {
              ...state.character,
              stats: {
                ...state.character.stats,
                experience: newExp,
                level: newLevel,
              },
              lastUpdated: new Date().toISOString(),
            },
          };
        });
      },

      requestTopUp: (amount: number) => {
        const requestId = `topup_${Date.now()}`;
        set((state) => ({
          topUpPending: [
            ...state.topUpPending,
            { id: requestId, amount, status: 'pending' as const },
          ],
        }));
        return requestId;
      },

      updateTopUpStatus: (id: string, status: 'accepted' | 'rejected') => {
        set((state) => {
          const topUpRequest = state.topUpPending.find((r) => r.id === id);
          if (!topUpRequest) return {};

          if (status === 'accepted') {
            // 1k naira = 1m game cash conversion
            const gameCash = topUpRequest.amount * 1000;
            return {
              topUpPending: state.topUpPending.map((r) =>
                r.id === id ? { ...r, status } : r
              ),
              character: state.character
                ? {
                    ...state.character,
                    stats: {
                      ...state.character.stats,
                      money: state.character.stats.money + gameCash,
                    },
                    lastUpdated: new Date().toISOString(),
                  }
                : null,
            };
          }

          return {
            topUpPending: state.topUpPending.map((r) =>
              r.id === id ? { ...r, status } : r
            ),
          };
        });
      },

      saveGame: () => {
        // Zustand persist middleware handles this automatically
        const state = get();
        localStorage.setItem('lagoslife-save', JSON.stringify(state));
      },

      loadGame: () => {
        const saved = localStorage.getItem('lagoslife-save');
        if (saved) {
          const state = JSON.parse(saved);
          set(state);
        }
      },

      clearGame: () => {
        set({
          character: null,
          isLoggedIn: false,
          currentRoute: '/',
          topUpPending: [],
        });
        localStorage.removeItem('lagoslife-save');
      },
    }),
    {
      name: 'lagoslife-game-store',
    }
  )
);

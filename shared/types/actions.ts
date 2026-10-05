export type GameAction =
  | 'work'
  | 'study'
  | 'travel'
  | 'socialize'
  | 'invest'
  | 'relax'
  | 'shop';

export interface GameActionResult {
  title: string;
  description: string;
  cashDelta: number;
  energyDelta: number;
  healthDelta: number;
  reputationDelta: number;
}

export const GAME_ACTIONS: Record<GameAction, GameActionResult> = {
  work: {
    title: 'Work shift',
    description: 'You take a productive job shift and earn money.',
    cashDelta: 75000,
    energyDelta: -12,
    healthDelta: -4,
    reputationDelta: 2,
  },
  study: {
    title: 'Study session',
    description: 'You sharpen your skills and improve your future prospects.',
    cashDelta: 0,
    energyDelta: -10,
    healthDelta: 0,
    reputationDelta: 3,
  },
  travel: {
    title: 'Travel',
    description: 'You move around Lagos to explore new opportunities.',
    cashDelta: -1500,
    energyDelta: -8,
    healthDelta: 0,
    reputationDelta: 1,
  },
  socialize: {
    title: 'Meet people',
    description: 'You connect with players and build your network.',
    cashDelta: 0,
    energyDelta: -4,
    healthDelta: 2,
    reputationDelta: 4,
  },
  invest: {
    title: 'Invest in business',
    description: 'You invest in a promising opportunity.',
    cashDelta: -250000,
    energyDelta: -5,
    healthDelta: 0,
    reputationDelta: 3,
  },
  relax: {
    title: 'Relax',
    description: 'You rest, recharge, and improve your mood.',
    cashDelta: 0,
    energyDelta: 18,
    healthDelta: 8,
    reputationDelta: 0,
  },
  shop: {
    title: 'Shop',
    description: 'You buy essentials and lifestyle items.',
    cashDelta: -12000,
    energyDelta: -2,
    healthDelta: 1,
    reputationDelta: 1,
  },
};

export type ActionType = 'work' | 'study' | 'travel' | 'socialize' | 'invest' | 'relax' | 'shop';

export interface ActionResult {
  action: ActionType;
  success: boolean;
  message: string;
  statsChanged: {
    money?: number;
    health?: number;
    energy?: number;
    reputation?: number;
  };
}

export interface GameState {
  playerId: string;
  location: string;
  timestamp: Date;
  playerStats: {
    health: number;
    energy: number;
    money: number;
    reputation: number;
  };
}

export const ACTION_EFFECTS: Record<ActionType, { energyDelta: number; healthDelta: number; moneyDelta: number; reputationDelta: number }> = {
  work: { energyDelta: -12, healthDelta: -4, moneyDelta: 75000, reputationDelta: 2 },
  study: { energyDelta: -10, healthDelta: 0, moneyDelta: 0, reputationDelta: 3 },
  travel: { energyDelta: -8, healthDelta: 0, moneyDelta: -1500, reputationDelta: 1 },
  socialize: { energyDelta: -4, healthDelta: 2, moneyDelta: 0, reputationDelta: 4 },
  invest: { energyDelta: -5, healthDelta: 0, moneyDelta: -250000, reputationDelta: 3 },
  relax: { energyDelta: 18, healthDelta: 8, moneyDelta: 0, reputationDelta: 0 },
  shop: { energyDelta: -2, healthDelta: 1, moneyDelta: -12000, reputationDelta: 1 },
};

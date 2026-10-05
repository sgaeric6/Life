import { GameAction, ACTION_EFFECTS } from '@shared/types/gameState';
import { PlayerStats } from '@shared/types/character';

export class GameActionService {
  static async performAction(
    action: GameAction,
    currentStats: PlayerStats
  ): Promise<{ success: boolean; newStats: PlayerStats; message: string }> {
    const effects = ACTION_EFFECTS[action];

    if (!effects) {
      return {
        success: false,
        newStats: currentStats,
        message: 'Unknown action',
      };
    }

    // Check if player has enough energy
    if (currentStats.energy + effects.energyDelta < 0) {
      return {
        success: false,
        newStats: currentStats,
        message: '😴 You are too tired! Rest to recover energy.',
      };
    }

    const newStats: PlayerStats = {
      ...currentStats,
      energy: Math.max(0, Math.min(100, currentStats.energy + effects.energyDelta)),
      health: Math.max(0, Math.min(100, currentStats.health + effects.healthDelta)),
      money: currentStats.money + effects.moneyDelta,
      reputation: currentStats.reputation + effects.reputationDelta,
    };

    const messages: Record<GameAction, string> = {
      work: `💼 You completed a work shift and earned ₦${effects.moneyDelta.toLocaleString()}!`,
      study: '📚 You finished a productive study session!',
      travel: `✈️ You traveled and spent ₦${Math.abs(effects.moneyDelta).toLocaleString()}`,
      socialize: '🤝 You met new people and grew your network!',
      invest: `💰 You invested ₦${Math.abs(effects.moneyDelta).toLocaleString()} in a business!`,
      relax: '😌 You feel refreshed and energized!',
      shop: `🛍️ You went shopping and spent ₦${Math.abs(effects.moneyDelta).toLocaleString()}`,
    };

    return {
      success: true,
      newStats,
      message: messages[action],
    };
  }
}

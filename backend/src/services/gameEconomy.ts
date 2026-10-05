export interface PlayerStats {
  health: number;
  energy: number;
  money: number;
  reputation: number;
  education: number;
  business: number;
}

export class GameEconomy {
  static addMoney(stats: PlayerStats, amount: number): PlayerStats {
    return { ...stats, money: stats.money + amount };
  }

  static spendMoney(stats: PlayerStats, amount: number): PlayerStats {
    return { ...stats, money: Math.max(0, stats.money - amount) };
  }

  static updateStats(stats: PlayerStats, energyDelta: number, healthDelta: number) {
    return {
      ...stats,
      energy: Math.min(100, Math.max(0, stats.energy + energyDelta)),
      health: Math.min(100, Math.max(0, stats.health + healthDelta)),
    };
  }
}

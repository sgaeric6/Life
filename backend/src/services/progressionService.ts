export class ProgressionService {
  static calculateLevel(experience: number): number {
    return Math.floor(experience / 1000) + 1;
  }

  static getExperienceForAction(action: string): number {
    const experienceMap: Record<string, number> = {
      work: 150,
      study: 200,
      socialize: 100,
      travel: 50,
      invest: 250,
      relax: 0,
      shop: 10,
    };
    return experienceMap[action] || 0;
  }

  static getAchievements(stats: any): string[] {
    const achievements: string[] = [];

    if (stats.money > 10000000) achievements.push('Millionaire');
    if (stats.money > 100000000) achievements.push('Billionaire');
    if (stats.reputation > 500) achievements.push('Influencer');
    if (stats.level > 20) achievements.push('High Level');
    if (stats.health > 90) achievements.push('Healthy');

    return achievements;
  }

  static getNextMilestone(currentValue: number, maxValue: number): number {
    const milestones = [25, 50, 75, 100];
    for (const milestone of milestones) {
      if (currentValue < (milestone / 100) * maxValue) {
        return (milestone / 100) * maxValue;
      }
    }
    return maxValue;
  }
}

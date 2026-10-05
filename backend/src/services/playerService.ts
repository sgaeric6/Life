export class PlayerService {
  static createPlayer(name: string, age: number, path: string) {
    return {
      id: `player_${Date.now()}`,
      name,
      age,
      path,
      location: 'Lekki',
      money: 1000000,
      health: 100,
      energy: 100,
      reputation: 10,
      createdAt: new Date().toISOString(),
    };
  }

  static getNearbyPlayers(location: string) {
    return [
      { name: 'Tolu', location, distance: '200m' },
      { name: 'Eve', location, distance: '480m' },
      { name: 'Kola', location, distance: '650m' },
    ];
  }
}

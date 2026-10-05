export interface CharacterStats {
  health: number;
  energy: number;
  money: number;
  reputation: number;
  education: number;
  business: number;
}

export const defaultCharacterStats: CharacterStats = {
  health: 100,
  energy: 100,
  money: 1000000,
  reputation: 10,
  education: 0,
  business: 0,
};

export interface CharacterProfile {
  name: string;
  age: number;
  style: string;
  path: 'Business' | 'Student' | 'Creative' | 'Executive';
  stats: CharacterStats;
  location: string;
}

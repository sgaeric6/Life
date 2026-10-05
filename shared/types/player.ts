export interface Player {
  id: string;
  userId: string;
  name: string;
  age: number;
  avatar: string;
  level: number;
  money: number;
  health: number;
  energy: number;
  reputation: number;
  location: string;
  createdAt: Date;
  lastActive: Date;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlockedAt: Date;
}

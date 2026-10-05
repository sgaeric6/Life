export interface Message {
  id: string;
  fromPlayerId: string;
  toPlayerId?: string;
  content: string;
  chatType: 'local' | 'private' | 'global';
  location?: string;
  createdAt: Date;
}

export interface NearbyPlayer {
  id: string;
  name: string;
  level: number;
  reputation: number;
  distance: number;
}

export interface NearbyPlayer {
  id: string;
  name: string;
  level: number;
  reputation: number;
  location: string;
  status: 'online' | 'idle' | 'offline';
  distance: number; // meters
}

export interface Friend {
  playerId: string;
  name: string;
  reputation: number;
  status: 'online' | 'idle' | 'offline';
  location: string;
}

export interface FriendRequest {
  id: string;
  fromId: string;
  toId: string;
  timestamp: Date;
  status: 'pending' | 'accepted' | 'rejected';
}

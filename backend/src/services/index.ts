import { EconomyService } from './services/economyService';
import { PropertyService } from './services/propertyService';
import { PlayerService } from './services/playerService';
import { ChatService } from './services/chatService';

export const gameServices = {
  economy: EconomyService,
  property: PropertyService,
  player: PlayerService,
  chat: ChatService,
};

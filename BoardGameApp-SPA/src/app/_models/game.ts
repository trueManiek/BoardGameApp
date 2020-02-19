import { GameGenre } from './gameGenre';
import { GameCopy } from './gameCopy';

export interface Game {
  id: number;
  title: string;
  releaseDate: Date;
  addedDate: Date;
  allRentalCount: number;
  minPlayers: number;
  maxPlayers: number;
  minPlayTime: number;
  maxPlayTime: number;
  minAge: number;
  imageUrl: string;
  author: string;
  baseGameId: number;
  gameCopies: GameCopy[];
  gameGenres: GameGenre[];
}

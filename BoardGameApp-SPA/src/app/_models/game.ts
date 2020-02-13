import { Image } from './image';

export interface Game {
  id: number;
  title: string;
  genre: string;
  added: Date;
  lastRental: Date;
  allRental: number;
  eventRental: number;
  minPlayers: number;
  maxPlayers: number;
  minPlayTime: number;
  maxPlayTime: number;
  minAge: number;
  onMarket: number;
  imageUrl: string;
  complexity?: string;
  image?: Image;
}

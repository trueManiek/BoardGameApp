export interface Boardgames {
  boardgame: Boardgame;
}


export interface Boardgame {
  objectid: number;
  yearpublished: number;
  minplayers: number;
  maxplayers: number;
  playingtime: number;
  minplaytime: number;
  maxplaytime: number;
  age: number;
  thumbnail: string;
  boardgamedesigner: any;
  name: any;
}

export interface Name {
  sortindex: number;
  $: $;
  _: string;
}

export interface $ {
  primary: boolean;
  sortindex: number;
}

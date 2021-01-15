export interface PokemonItem {
  name: string;
  url: string;
}

export interface PokemonItemComplete {
  name: string;
  url: string;
  id: number;
  imageUrl: string;
}

export interface PokemonComplete {
  name: string;
  id: number;
  types: any[];
  stats: any[];
  imageUrl: string;
}

// Interfaces and types from component PokemonCard

import { PokemonItemComplete } from "types/pokemon.types";

// Component Props
export interface PokemonCardProps {
  pokemon: PokemonItemComplete;
}

// Styled Component Props
export interface PokemonCardStyledProps {
  className: string;
}

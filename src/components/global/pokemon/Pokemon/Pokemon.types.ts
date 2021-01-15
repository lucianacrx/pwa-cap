// Interfaces and types from component Pokemon

import { PokemonComplete } from "types/pokemon.types";

// Component Props
export interface PokemonProps {
  pokemon: PokemonComplete;
}

// Styled Component Props
export interface PokemonStyledProps {
  className: string;
}

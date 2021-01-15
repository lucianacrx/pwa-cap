import { PokemonItemComplete } from "types/pokemon.types";
// Interfaces and types from component PokemonHome

// Component Props
export interface PokemonHomeProps {
  pokemones: PokemonItemComplete[];
}

// Styled Component Props
export interface PokemonHomeStyledProps {
  className: string;
}

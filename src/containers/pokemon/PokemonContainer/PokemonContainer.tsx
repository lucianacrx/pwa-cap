import React from "react";

import { PokemonContainerProps as Props } from "./PokemonContainer.types";
import Pokemon from "components/global/pokemon/Pokemon/Pokemon";

const PokemonContainer: React.FC<Props> = props => {
  const { pokemon } = props;
  return <Pokemon pokemon={pokemon} />;
};

PokemonContainer.defaultProps = {};

export default PokemonContainer;

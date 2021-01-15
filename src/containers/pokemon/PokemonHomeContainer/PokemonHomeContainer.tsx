import React from "react";

import { PokemonHomeContainerProps as Props } from "./PokemonHomeContainer.types";
import PokemonHome from "components/global/pokemon/PokemonHome/PokemonHome";

const PokemonHomeContainer: React.FC<Props> = props => {
  const { pokemones } = props;
  return <PokemonHome pokemones={pokemones} />;
};

PokemonHomeContainer.defaultProps = {};

export default PokemonHomeContainer;

import Header from "components/global/Header/Header";
import React from "react";
import PokemonCard from "./PokemonCard/PokemonCard";

import Styles from "./PokemonHome.styles";
import { PokemonHomeProps as Props } from "./PokemonHome.types";
import Link from "next/link";

const PokemonHome: React.FC<Props> = props => {
  const { pokemones } = props;
  return (
    <Styles className="PokemonHome">
      <Header pageTitle="Pokemón" />
      <main className="PokemonHome__main">
        {pokemones.map(pokemon => (
          <Link href={`/pokemon/${pokemon.id}`} passHref>
            <a>
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            </a>
          </Link>
        ))}
      </main>
    </Styles>
  );
};

PokemonHome.defaultProps = {};

export default PokemonHome;

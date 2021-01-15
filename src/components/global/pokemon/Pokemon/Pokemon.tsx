import Header from "components/global/Header/Header";
import React from "react";

import Styles from "./Pokemon.styles";
import { PokemonProps as Props } from "./Pokemon.types";
import Link from "next/link";

const Pokemon: React.FC<Props> = props => {
  const { pokemon } = props;
  const { name, imageUrl, stats, types } = pokemon;
  return (
    <Styles className="Pokemon">
      <Header pageTitle={`Pokemón - ${name}`} />
      <Link href="/">
        <a className="Pokemon__back">Volver</a>
      </Link>
      <main className="Pokemon__main">
        <div className="Pokemon__right">
          <div className="Pokemon__name">{name}</div>
          <img
            src={imageUrl}
            alt={`pokemon ${name}`}
            className="Pokemon__img"
          />
        </div>
        <div className="Pokemon__left">
          <div className="Pokemon__subtitle">Stats</div>
          {stats.map((item, index: number) => {
            const { base_stat, stat } = item;
            const { name: statName } = stat;
            return (
              <div className="Pokemon__item" key={index}>
                <div className="Pokemon__item-label">{statName}</div>
                <div className="Pokemon__item-content">{base_stat}</div>
              </div>
            );
          })}
          <div className="Pokemon__subtitle">Types</div>
          {types.map((item, index: number) => {
            const { type } = item;
            const { name: typeName } = type;
            return (
              <div className="Pokemon__item" key={index}>
                <div className="Pokemon__item-label">{typeName}</div>
              </div>
            );
          })}
        </div>
      </main>
    </Styles>
  );
};

Pokemon.defaultProps = {};

export default Pokemon;

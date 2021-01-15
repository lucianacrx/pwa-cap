import React from "react";

import Styles from "./PokemonCard.styles";
import { PokemonCardProps as Props } from "./PokemonCard.types";

const PokemonCard: React.FC<Props> = props => {
  const { pokemon } = props;
  const { name, imageUrl } = pokemon;
  return (
    <Styles className="PokemonCard">
      <div className="PokemonCard__img-box">
        <img
          src={imageUrl}
          alt={`pokemon ${name}`}
          className="PokemonCard__img"
        />
      </div>
      <div className="PokemonCard__name">{name}</div>
    </Styles>
  );
};

PokemonCard.defaultProps = {};

export default PokemonCard;

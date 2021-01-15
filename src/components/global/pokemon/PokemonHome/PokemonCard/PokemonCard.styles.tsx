import styled from "styled-components";

import { PokemonCardStyledProps as Props } from "./PokemonCard.types";

const PokemonCardStyled = styled.div<Props>`
  display: flex;
  border: 1px solid #363b81;
  border-radius: 0.8rem;
  flex-direction: column;
  width: 32rem;
  padding: 2rem 1.6rem;
  margin-left: 4rem;
  margin-bottom: 2rem;
  align-items: center;

  @media only screen and (max-width: 40rem) {
    margin-left: 0;
    margin-bottom: 2rem;
  }
  .PokemonCard {
    &__img {
      height: 8rem;
    }

    &__img-box {
      padding-bottom: 3rem;
    }

    &__name {
      font-size: 3rem;
      font-weight: 700;
    }
  }
`;

export default PokemonCardStyled;

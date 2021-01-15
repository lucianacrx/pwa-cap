import styled from "styled-components";

import { PokemonStyledProps as Props } from "./Pokemon.types";

const PokemonStyled = styled.div<Props>`
  .Pokemon {
    &__main {
      display: flex;
      justify-content: space-between;
      padding: 2rem 3rem;
      @media only screen and (max-width: 40rem) {
        padding: 2rem 2rem;
      }
      flex-wrap: wrap;
    }

    &__back {
      display: flex;
      align-items: center;
      padding: 0.8rem 0.8rem;
      font-size: 2.5rem;
    }

    &__img {
      height: 30rem;
    }

    &__name {
      font-size: 3rem;
    }
    &__right {
      flex: 1;
    }
    &__left {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__subtitle {
      font-size: 2.8rem;
      font-weight: 400;
      padding: 1.6rem 0;
    }

    &__item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0.4rem 0.8rem;
      color: #363b81;
    }

    &__item-label {
      font-size: 2.4rem;
      font-weight: 400;
    }

    &__item-content {
      font-size: 2.4rem;
      font-weight: 400;
    }
  }
`;

export default PokemonStyled;

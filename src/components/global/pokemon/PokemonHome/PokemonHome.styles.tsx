import styled from "styled-components";

import { PokemonHomeStyledProps as Props } from "./PokemonHome.types";

const PokemonHomeStyled = styled.div<Props>`
  .PokemonHome {
    &__main {
      @media only screen and (max-width: 40rem) {
        padding: 2rem 2rem;
      }
      padding: 5rem 5rem;
      display: flex;
      max-width: 100vw;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  a {
    text-decoration: none;
    color: #ee5281;
  }
`;

export default PokemonHomeStyled;

import styled from "styled-components";

import { HeaderStyledProps as Props } from "./Header.types";

const HeaderStyled = styled.main<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10rem;
  background: #363b81;
  .Header {
    &__logo {
      width: 5rem;
      height: 5rem;
    }

    &__logo-box {
      padding: 0 5rem;
    }

    @media only screen and (max-width: 40rem) {
      &__logo-box {
        padding: 0 2rem;
      }
    }

    &__title {
      font-size: 4.8rem;
      color: #fbd743;
      font-family: "Rowdies", arial;
      font-weight: 700;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default HeaderStyled;

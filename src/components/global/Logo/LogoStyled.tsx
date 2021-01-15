import styled from "styled-components";

import LogoSVG from "../../../../public/assets/images/logo.svg";
import { LogoStyledProps as Props } from "./Logo.types";

const Logo = styled(LogoSVG)<Props>`
  height: 25vmin;
  pointer-events: none;
  padding-bottom: 3rem;

  @media (max-width: 450px) {
    height: 30vmin;
  }

  .Logo__circle {
    fill: var(--palette-primary);
  }
`;

export default Logo;

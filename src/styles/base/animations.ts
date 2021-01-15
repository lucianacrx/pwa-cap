import { css } from "styled-components";

const animations = css`
  @keyframes App-logo-bounce {
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(40%);
    }
    20% {
      transform: translateY(15%);
    }
    30% {
      transform: translateY(40%);
    }
    40% {
      transform: translateY(20%);
    }
    50% {
      transform: translateY(40%);
    }
    60% {
      transform: translateY(30%);
    }
    70% {
      transform: translateY(40%);
    }
    /* 100% {
      transform: translateY(40%);
    } */
  }
`;

export default animations;

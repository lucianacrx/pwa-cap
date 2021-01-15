import React from "react";

import Styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";
import PokebolaSVG from "../../../../public/assets/images/pokebola.svg";
import Head from "next/head";

const Header: React.FC<Props> = props => {
  const { pageTitle } = props;
  return (
    <Styles className="Header">
      <Head>
        <title>{pageTitle}</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div className="Header__logo-box">
        <PokebolaSVG className="Header__logo" />
      </div>
      <div className="Header__title">Pokemón</div>
    </Styles>
  );
};

Header.defaultProps = {};

export default Header;

import React from "react";
import Head from "next/head";

import Styles from "./Error.styles";
import { ErrorProps as Props } from "./Error.types";
import Button from "components/global/Button/Button";

import ErrorSVG from "../../../../public/assets/images/500/500.svg";

const Error: React.FC<Props> = props => {
  const reload = () => {
    if (window) {
      window.location.reload();
    }
  };
  return (
    <Styles className="Error">
      <Head>
        <title>Oops ocurrió un error</title>
      </Head>
      <header className="Error__header" />
      <main className="Error__main">
        <div className="Error__wrapper">
          <ErrorSVG className="Error__icon" />
          <Button className="Error__cta" onClick={reload}>
            Recargar
          </Button>
        </div>
      </main>
      <footer className="Error__footer" />
    </Styles>
  );
};

Error.defaultProps = {};

export default Error;

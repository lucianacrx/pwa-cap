import React from "react";
import { ThemeProvider } from "styled-components";

import { ThemeProviderContainerProps as Props } from "./ThemeProviderContainer.types";
import GlobalStyles from "../../styles/base";
import { useSelector } from "redux/store";

const ThemeProviderContainer: React.FC<Props> = props => {
  const selectedTheme = useSelector(state => state.Theme.selectedTheme);

  return (
    <>
      <GlobalStyles theme={selectedTheme} />
      <ThemeProvider theme={selectedTheme}>{props.children}</ThemeProvider>
    </>
  );
};

ThemeProviderContainer.defaultProps = {};

export default ThemeProviderContainer;

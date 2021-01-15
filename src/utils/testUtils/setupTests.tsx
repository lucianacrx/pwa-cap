import "@testing-library/jest-dom/extend-expect";
import "jest-axe/extend-expect";
import "jest-styled-components";

import React from "react";
import { Store } from "redux";
import { Provider } from "react-redux";
import {
  render as rtlRender,
  RenderOptions as rtlRenderOptions,
  RenderResult as RtlRenderResult
} from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { ReactQueryConfigProvider } from "react-query";

import appStore from "redux/store";
import i18n from "i18n/i18n";
import GlobalStyles from "styles/base";
import themes from "styles/theme";
import * as utils from "utils/testUtils";
import CONSTANTS from "config/constants";

interface RenderResult extends RtlRenderResult {
  store: Store<any>;
}

interface RenderOptions extends Omit<rtlRenderOptions, "queries"> {
  // Redux store
  store?: Store<any>;
  // Styles theme
  theme?: typeof themes.defaultTheme;
}

interface WrapperProps {
  children?: HTMLElement;
}

export const render = (
  ui: React.ReactElement,
  options: RenderOptions = {}
): RenderResult => {
  const {
    store = appStore(),
    theme = themes.defaultTheme,
    ...returnOptions
  } = options;
  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    return (
      <ReactQueryConfigProvider config={CONSTANTS.REACT_QUERY_CONFIG}>
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <GlobalStyles theme={theme} />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </Provider>
        </I18nextProvider>
      </ReactQueryConfigProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions }),
    store
  };
};

interface Cases {
  [key: string]: string | number | boolean | undefined | null;
}

interface CasifyRes {
  name: string;
  testValue: string | number | boolean | undefined | null;
}

export const casify = (cases: Cases): CasifyRes[] => {
  return Object.entries(cases).map(([caseTitle, testValue], index: number) => {
    return {
      name: `${index + 1}. ${caseTitle} - ${testValue}`,
      testValue
    };
  });
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

export * from "@testing-library/react";
export { utils };

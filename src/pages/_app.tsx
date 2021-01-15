import React from "react";
import { AppProps as Props } from "next/app";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { ReactQueryConfigProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

import { ErrorBoundary as BugsnagErrorBoundry } from "utils/bugsnag.utils";
import CONSTANTS from "config/constants";
import i18n from "i18n/i18n";
import ThemeProviderContainer from "containers/ThemeProviderContainer/ThemeProviderContainer";
import { withReduxStore } from "redux/store.helpers";
import Error from "components/error/Error/Error";

const App: React.FC<Props> = props => {
  //@ts-ignore
  const { Component, pageProps, store } = props;
  const env = process.env.REACT_APP_ENV as string;
  const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(env);

  const app = (
    <ReactQueryConfigProvider config={CONSTANTS.REACT_QUERY_CONFIG}>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ThemeProviderContainer>
            <ErrorBoundary FallbackComponent={Error}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </ThemeProviderContainer>
        </Provider>
      </I18nextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryConfigProvider>
  );

  return includedEnv ? <BugsnagErrorBoundry>{app}</BugsnagErrorBoundry> : app;
};

export default withReduxStore(App);

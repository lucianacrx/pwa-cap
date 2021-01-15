import React, { Component, ComponentClass, FC } from "react";
import { AppContext } from "next/app";
import { Router } from "next/dist/client/router";
import { AppPropsType } from "next/dist/next-server/lib/utils";

import { getOrCreateStore } from "./store";

export const withReduxStore = (
  App: FC<AppPropsType<Router, any>>
): ComponentClass => {
  return class AppWithRedux extends Component {
    static async getInitialProps(appContext: AppContext): Promise<any> {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const store = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      // @ts-ignore
      appContext.ctx.store = store;

      return {
        // @ts-ignore
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
        initialReduxState: store.getState()
      };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
      // @ts-ignore
      const { initialReduxState } = this.props;
      return (
        // @ts-ignore
        <App {...this.props} store={getOrCreateStore(initialReduxState)} />
      );
    }
  };
};

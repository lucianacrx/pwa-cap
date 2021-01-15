import React from "react";
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";

import packageJSON from "../../package.json";
import CONSTANTS from "../config/constants";

let bugsnagClient: any = null;
let ErrorBoundary: any = null;

const env = process.env.REACT_APP_ENV as string;
const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(env);
// Do something with response error
if (includedEnv) {
  bugsnagClient = bugsnag.start({
    /* bugsnag api key is not required in environments others than production and staging,
         there fore a fake id is provided as a fallback to silent error on other environments*/
    apiKey: process.env.REACT_APP_BUGSNAG_API_KEY as string,
    appVersion: packageJSON.version,
    enabledReleaseStages: CONSTANTS.INCLUDED_LOGGER_ENVS,
    metadata: {
      client: CONSTANTS.CLIENT_NAME,
      project: packageJSON.name,
      version: packageJSON.version,
      env: process.env.NODE_ENV
    }
  });

  bugsnagClient.use(bugsnagReact, React);
  ErrorBoundary = bugsnagClient.getPlugin("react");
}

export default bugsnagClient;
export { ErrorBoundary };

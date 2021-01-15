import axios from "axios";

import CONSTANTS from "../config/constants";
import bugsnagClient from "./bugsnag.utils";

const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: CONSTANTS.DEFAULT_REQUEST_TIMEOUT,
  headers: {
    Platform: process.env.REACT_APP_PLATFORM
  }
});

// Report to logger middleware
const report = (error: any) => {
  const env = process.env.REACT_APP_ENV as string;
  const includedEnv = CONSTANTS.INCLUDED_LOGGER_ENVS.includes(env);
  let excludedCode = true;
  let timeout = false;

  if (error.code === "ECONNABORTED" || error.response.status === 408) {
    timeout = true;
  } else {
    excludedCode = CONSTANTS.EXCLUDED_LOGGER_STATUS_CODES.includes(
      error.response.status
    );
  }

  if (includedEnv && (timeout || !excludedCode)) {
    bugsnagClient.notify(error);
  }
  return Promise.reject(error);
};

axiosDefault.interceptors.response.use(
  (response: any) => {
    // Do something with response data
    return response;
  },
  (error: any) => {
    // Do something with response error
    return report(error);
  }
);

export default axiosDefault;

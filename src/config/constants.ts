// Project constants
const CONSTANTS = {
  // HTML title tag text
  TITLE: "Trade web app",
  // Commerce Name
  CLIENT_NAME: "Trade S.A.",
  // Default max waiting time for a request reply
  DEFAULT_REQUEST_TIMEOUT: 10000,
  // Excluded status codes that should not be logged in bugsnag
  EXCLUDED_LOGGER_STATUS_CODES: [422],
  // Included environments that should be logged in bugsnag
  INCLUDED_LOGGER_ENVS: ["staging", "production"],
  // Included Internationalization environments that should be logged to the console
  INCLUDED_INTL_LOG_ENVS: [""],
  // Router where the user will land initially to check authentication
  ENTRY_PATH: "/",
  // Router where the user will land if not authenticated
  NO_AUTH_PATH: "/signin",
  // Auth Token default expiration time (24h)
  AUTH_TOKEN_DEFAULT_EXPIRATION: 60 * 60 * 24 * 1000,
  // Default country
  COUNTRY: {
    NAME: "Ecuador",
    CODE: "593",
    LANGUAGE: "es"
  },
  // App themes
  THEMES: {
    DARK: "DARK"
  },
  // React Query global config
  REACT_QUERY_CONFIG: {
    retry: 3
  }
};

export default CONSTANTS;

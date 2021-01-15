import moment from "moment";
import CONSTANTS from "config/constants";

// Returns the authToken if it is found on localStorage and it is not expired
export const handleSessionExpiration = (): string | null => {
  const authTokenKey = process.env.REACT_APP_AUTH_TOKEN_KEY as string;
  const authToken = localStorage.getItem(authTokenKey);
  const authTokenExpiracyKey = process.env
    .REACT_APP_AUTH_EXPIRACY_TOKEN_KEY as string;
  const authTokenExpiracy = localStorage.getItem(authTokenExpiracyKey);

  if (!authTokenExpiracy) {
    cleanLocalStorageAuth();
    return null;
  }

  const expired = moment().isAfter(moment(authTokenExpiracy), "seconds");

  if (expired) {
    cleanLocalStorageAuth();
    return null;
  }
  return authToken;
};

// Refresh expiration time on local storage
export const refreshLocalStorageAuth = (
  authToken: string,
  save: boolean
): void => {
  const authTokenKey = process.env.REACT_APP_AUTH_TOKEN_KEY as string;
  const oldToken = localStorage.getItem(authTokenKey);
  if (!oldToken && !save) {
    cleanLocalStorageAuth();
    return;
  }
  // Set the auth token in localStorage
  localStorage.setItem(authTokenKey, authToken);
  // Set the auth token expiration date in localStorage
  const authTokenExpiracyKey = process.env
    .REACT_APP_AUTH_EXPIRACY_TOKEN_KEY as string;
  const defaultExpiration = CONSTANTS.AUTH_TOKEN_DEFAULT_EXPIRATION;
  const expiration = new Date(
    new Date().setSeconds(new Date().getSeconds() + defaultExpiration)
  ).toISOString();
  localStorage.setItem(authTokenExpiracyKey, expiration);
};

// Remove auth related variables from local storage
export const cleanLocalStorageAuth = (): void => {
  const authTokenKey = process.env.REACT_APP_AUTH_TOKEN_KEY as string;
  const authTokenExpiracyKey = process.env
    .REACT_APP_AUTH_EXPIRACY_TOKEN_KEY as string;
  localStorage.removeItem(authTokenKey);
  localStorage.removeItem(authTokenExpiracyKey);
};

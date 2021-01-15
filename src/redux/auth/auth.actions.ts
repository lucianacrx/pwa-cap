import { ThunkDispatch, AppState } from "redux/store.types";
import { User } from "types/user.types";
import {
  handleSessionExpiration,
  refreshLocalStorageAuth
} from "utils/session.utils";
import { cleanLocalStorageAuth } from "utils/session.utils";
import {
  fetchAuthToken,
  logInUser,
  updateUserService,
  logOutService
} from "services/auth/auth.service";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const UPDATE_USER = "UPDATE_USER";

// Fetches the authToken and sets the user as logged in or logs hims out
export const logIn = (
  email: string,
  password: string,
  rememberme: boolean
) => async (dispatch: ThunkDispatch): Promise<void> => {
  try {
    const { token: authToken, user } = await logInUser(email, password);
    if (authToken) {
      dispatch(setLoggedIn(authToken, user, rememberme));
    } else {
      throw new Error("Failed to signin");
    }
  } catch (e) {
    console.error("Sign In falló, inténtelo nuevamente");
  }
};

// Checks whether the user is already loggedIn in the server and sets it as logged in locally
export const isLoggedIn = () => async (
  dispatch: ThunkDispatch,
  getState: () => AppState
): Promise<void> => {
  try {
    const auth = getState().Auth;
    // Check if auth token is stored in local storage
    const localStorageAuthToken = await handleSessionExpiration();
    const localToken = localStorageAuthToken ?? auth.authToken;
    // if authToken in localStorage or redux, check if also signed in in the server
    if (localToken || auth.loggedIn) {
      const { token: authToken, user } = await fetchAuthToken(localToken);
      if (authToken) {
        dispatch(setLoggedIn(authToken, user));
      } else {
        throw new Error("Server: Failed to sign in");
      }
    } else {
      throw new Error("Failed to sign in");
    }
  } catch (e) {
    dispatch(logOut());
  }
};

// Fetches user data and sets the app as logged in
export const setLoggedIn = (
  authToken: string,
  user: User,
  save = false
) => async (dispatch: ThunkDispatch): Promise<void> => {
  try {
    // Set the auth token in localStorage
    await refreshLocalStorageAuth(authToken, save);
    // Fetch user from the server
    if (user) {
      const payload = { authToken, user };
      dispatch({ type: LOG_IN, payload });
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (e) {
    dispatch(logOut());
  }
};

// Update user data
export const updateUser = (user: User) => async (
  dispatch: ThunkDispatch,
  getState: () => AppState
): Promise<void> => {
  try {
    const serverUser = await updateUserService(user);
    dispatch({ type: UPDATE_USER, payload: serverUser });
  } catch (e) {
    throw new Error(e.message);
  }
};

// Logs the user out
export const logOut = () => async (
  dispatch: ThunkDispatch,
  getState: () => AppState
): Promise<void> => {
  try {
    const authToken = getState().Auth.authToken;
    if (authToken) {
      await logOutService(authToken);
    }
    await cleanLocalStorageAuth();
    dispatch({ type: LOG_OUT, payload: null });
  } catch (e) {
    throw new Error(e.message);
  }
};

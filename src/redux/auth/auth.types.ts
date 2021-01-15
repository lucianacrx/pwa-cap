// Reducer types and interfaces
import { LOG_IN, LOG_OUT, UPDATE_USER } from "./auth.actions";
import { User } from "types/user.types";

// Types for the reducer Auth

export interface AuthState {
  loggedIn: boolean | undefined;
  authToken: null | string;
  user?: User;
}

export interface LogInAction {
  type: typeof LOG_IN;
  payload: {
    authToken: string;
    user: User;
  };
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}

export interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

export type AuthActions = LogInAction | LogOutAction | UpdateUserAction;

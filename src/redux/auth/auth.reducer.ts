import {
  AuthState as State,
  AuthActions as Actions,
  LogInAction
} from "./auth.types";
import { LOG_IN, LOG_OUT, UPDATE_USER } from "./auth.actions";

// Initial state
const initialState: State = {
  loggedIn: true,
  authToken: null,
  user: undefined
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case LOG_IN:
      return logIn(state, action.payload);
    case LOG_OUT:
      return { ...state, authToken: null, user: undefined, loggedIn: false };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const logIn = (state: State, payload: LogInAction["payload"]) => {
  const { authToken, user } = payload;
  return { ...state, authToken, user, loggedIn: true };
};

export default reducer;

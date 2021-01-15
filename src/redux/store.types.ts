// Redux store types and interfaces
import { ThunkDispatch as ThunkDispatchRT } from "redux-thunk";

import { reducer } from "./store";
import { AuthActions } from "./auth/auth.types";
import { ThemeActions } from "./theme/theme.types";

export type AppState = ReturnType<typeof reducer>;

export type AppActions = AuthActions | ThemeActions;

export type ThunkDispatch = ThunkDispatchRT<AppState, any, AppActions>;

// Reducer types and interfaces
import { SET_SELECTED_THEME } from "./theme.actions";
import themes from "styles/theme";

// Reducer State interface
export interface ThemeState {
  selectedTheme: typeof themes.defaultTheme;
}

export interface SetSelectedThemeAction {
  type: typeof SET_SELECTED_THEME;
  payload: typeof themes.defaultTheme;
}

// Reducer Actions interface
export type ThemeActions = SetSelectedThemeAction;

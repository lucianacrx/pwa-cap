import { ThemeState as State, ThemeActions as Actions } from "./theme.types";
import { SET_SELECTED_THEME } from "./theme.actions";
import themes from "styles/theme";

const initialState: State = {
  selectedTheme: themes.defaultTheme
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case SET_SELECTED_THEME:
      return { ...state, selectedTheme: action.payload };
    default:
      return state;
  }
};

export default reducer;

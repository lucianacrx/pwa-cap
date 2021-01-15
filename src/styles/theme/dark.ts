import { lighten } from "polished";

import defaultTheme from "./default";

const palette = { ...defaultTheme.palette };
palette.primary = "#000";
palette["primary-light"] = lighten(0.3, palette.primary);

const theme = { ...defaultTheme, palette };

export default theme;

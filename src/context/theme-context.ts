import { createContext } from "react";
import { AppliedThemes } from "../types/applied-theme";
import { ThemeOptions } from "../types/theme-options";

interface ThemeContext {
  themeOption: ThemeOptions;
  appliedTheme: AppliedThemes;
  setTheme: (theme: ThemeOptions) => void;
}

const ThemeContextInitialValue: ThemeContext = {
  themeOption: ThemeOptions.SYSTEM,
  appliedTheme: ThemeOptions.LIGHT,
  setTheme() {},
};

export const ThemeContext = createContext(ThemeContextInitialValue);

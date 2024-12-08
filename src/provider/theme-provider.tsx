import { PropsWithChildren, useEffect, useState } from "react";
import { Constants } from "../constants";
import { AppliedThemes } from "../types/applied-theme";
import { ThemeOptions } from "../types/theme-options";
import { ThemeContext } from "../context/theme-context";

const getSystemTheme = (): AppliedThemes => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return ThemeOptions.DARK;
  }
  return ThemeOptions.LIGHT;
};

const initThemeOption = (): ThemeOptions => {
  const theme = localStorage.getItem(Constants.THEME_STORAGE_KEY);
  if (
    theme === ThemeOptions.LIGHT ||
    theme === ThemeOptions.DARK ||
    theme === ThemeOptions.SYSTEM
  ) {
    return theme;
  }
  return ThemeOptions.SYSTEM;
};
const initAppliedTheme = (): AppliedThemes => {
  const theme = localStorage.getItem(Constants.THEME_STORAGE_KEY);
  if (theme === ThemeOptions.SYSTEM) {
    return getSystemTheme();
  } else if (theme === ThemeOptions.LIGHT || theme === ThemeOptions.DARK) {
    return theme;
  } else {
    return ThemeOptions.LIGHT;
  }
};

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeOption, setThemeOption] = useState<ThemeOptions>(
    initThemeOption()
  );
  const [appliedTheme, setAppliedTheme] = useState<AppliedThemes>(
    initAppliedTheme()
  );

  const applyTheme = (theme: ThemeOptions) => {
    const element = document.getElementById("theme-provider") as HTMLElement;
    if (theme === ThemeOptions.DARK || theme === ThemeOptions.LIGHT) {
      element.className = `bg-background text-foreground ${
        theme === ThemeOptions.LIGHT ? "light" : "dark"
      }`;
      setAppliedTheme(theme);
    } else if (theme === ThemeOptions.SYSTEM) {
      const systemTheme = getSystemTheme();
      if (
        systemTheme === ThemeOptions.LIGHT ||
        systemTheme === ThemeOptions.DARK
      ) {
        element.className = `bg-background text-foreground ${
          systemTheme === ThemeOptions.LIGHT ? "light" : "dark"
        }`;
        setAppliedTheme(systemTheme);
      }
    }
    localStorage.setItem(Constants.THEME_STORAGE_KEY, theme);
  };

  useEffect(() => {
    applyTheme(themeOption);
  }, [themeOption]);

  useEffect(() => {
    const handler = () => {
      setThemeOption((theme) => {
        if (theme === ThemeOptions.SYSTEM) {
          applyTheme(getSystemTheme());
        }
        return theme;
      });
    };

    const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    themeMediaQuery.addEventListener("change", handler);

    return () => {
      themeMediaQuery.removeEventListener("change", handler);
    };
  }, [themeOption]);

  return (
    <ThemeContext.Provider
      value={{
        themeOption: themeOption,
        appliedTheme: appliedTheme,
        setTheme: setThemeOption,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

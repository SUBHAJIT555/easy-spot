import React, { createContext, useContext, useMemo } from "react";
import theme from "@/theme";
import { themeToCssVars } from "@/theme/utils";

const ThemeContext = createContext(theme);

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const cssVars = useMemo(() => themeToCssVars(theme), []);

  return (
    <ThemeContext.Provider value={theme}>
      <div
        id="site-theme-root"
        data-theme={theme.id}
        data-brand={theme.name}
        style={cssVars}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

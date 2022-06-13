import React, { createContext, useContext, useMemo, useState } from "react";
import themes from "../styles/themes";

const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const currentTheme = () => {
    return themes[theme] || themes.dark;
  };

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, handleToggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";

import { ThemeContext, type Theme } from "./theme-context";

export const THEME_STORE_KEY = "devonion-theme";

const getPreferredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // TODO - fix it sometime
  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  useEffect(() => {
    const handleThemeStorageChange = (event: StorageEvent) => {
      if (event.key === THEME_STORE_KEY) {
        setTheme(getPreferredTheme());
      }
    };

    window.addEventListener("storage", handleThemeStorageChange);
    return () => {
      window.removeEventListener("storage", handleThemeStorageChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORE_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark",
        ),
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

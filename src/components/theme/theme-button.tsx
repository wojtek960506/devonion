"use client";

import { Button } from "@/components/ui/button";

import { useTheme } from "./use-theme";
import { Moon, Sun } from "lucide-react";

// TODO extract it to const as in `locale-switcher.tsx` it is duplicated
const ICON_CLASS_NAME = 'w-10 h-10 sm:w-12 sm:h-12';

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={toggleTheme}
      variant="ghost"
    >
      {theme === "dark" ? (
        <Sun className={ICON_CLASS_NAME} strokeWidth={1.5}/>
      ) : (
        <Moon className={ICON_CLASS_NAME} strokeWidth={1.5}/>
      )}
    </Button>
  );
};

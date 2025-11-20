import { useCallback, useEffect } from "react";

import { setTheme } from "../../Model/Global/events";
import { useTheme } from "../../Model/Global/state";
import { Themes } from "../../Shared/types";
import { ThemeIcon } from "../CommonHeader/constants";

import styles from "./Theme.module.css";

const themeKeyList = [Themes.Dark, Themes.Light, Themes.Default] as const;

function Theme() {
  const theme = useTheme((state) => state);
  
  const systemLightTheme = matchMedia(
    "(prefers-color-scheme: light)"
  );

  const toggleTheme = (changedTheme: Themes, isChangeStorage = true) => {
    document.body.className = "";
    document.body.classList.add(changedTheme);

    if (isChangeStorage) {
        localStorage.setItem("theme", changedTheme);
        setTheme(changedTheme);
    }
  };

  const handleTheme = useCallback(() => {
    const themeIndex =
      themeKeyList.indexOf(theme) + 1 < themeKeyList.length
        ? themeKeyList.indexOf(theme) + 1
        : 0;

    toggleTheme(themeKeyList[themeIndex]);
  }, [theme]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      document.body.classList.add(theme);
      return;
    }

    systemLightTheme.addEventListener("change", ({ matches }) => {        
      toggleTheme(matches ? Themes.Light : Themes.Dark, false);
    });
  }, []);

  return (
    <button
      onClick={handleTheme}
      title={ThemeIcon[theme].title}
      className={styles.button}
    >
      {ThemeIcon[theme].component}
    </button>
  );
}

export default Theme;

import { ReactNode } from "react";

import { DarkLight, Moon, Sun } from "../../Components/Icons";
import { Themes } from "../../Shared/types";

import styles from "./CommonHeader.module.css";

export const ThemeIcon: Record<Themes, { title?: string; component: ReactNode }> = {
  [Themes.Dark]: {
    component: Moon({ className: styles.icon }),
    title: "Тёмная тема",
  },
  [Themes.Light]: {
    component: Sun({ className: styles.icon }),
    title: "Светлая тема",
  },
  [Themes.Default]: {
    component: DarkLight({ className: styles.icon }),
    title: "Системная тема",
  },
};
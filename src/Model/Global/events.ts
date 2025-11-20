import { Sections, Themes } from "../../Shared/types";

import { useHighlightSection, useTheme } from "./state";

export function setHighlightSection (section: Sections) {
  useHighlightSection.setState(() => section);
}

export function setTheme(changeTheme: Themes) {
  useTheme.setState(() => changeTheme);
}
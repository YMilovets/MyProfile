import { Sections } from "../../Shared/types";

import { useHighlightSection } from "./state";

export function setHighlightSection (section: Sections) {
  useHighlightSection.setState(() => section);
}
import { ReactNode } from "react";

import { CompetitionUnit } from "../../Model/Profile/types"

export type TabItemType = {
  id: CompetitionUnit;
  tabName?: string;
  tabComponent: ReactNode;
};
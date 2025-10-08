import { CompetitionUnit } from "../../Model/Profile/types";

import CompetitionSkills from "./CompetitionSkills";
import CompetitionTools from "./CompetitionTools";
import { TabItemType } from "./types";

export const ListTabs: Map<CompetitionUnit, TabItemType> = new Map([
  [
    CompetitionUnit.Skills,
    { id: CompetitionUnit.Skills, tabComponent: <CompetitionSkills /> },
  ],
  [
    CompetitionUnit.Tools,
    { id: CompetitionUnit.Tools, tabComponent: <CompetitionTools /> },
  ],
]);

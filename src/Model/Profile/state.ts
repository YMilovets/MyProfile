import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Contacts, Skills, Tools } from "../../Shared/Constants";

import {
  setCompetition,
  setContacts,
  setSkills,
  setTools,
} from "./events";
import {
  CompetitionUnit,
  ContactsType,
  SkillsType,
  ToggleCompetitionType,
  ToolsType,
} from "./types";

export const useTools = create<ToolsType>()(
  devtools((set, get) => ({
    listTools: Tools,
    setTools: setTools(set, get),
  }))
);

export const useSkills = create<SkillsType>()(
  devtools((set, get) => ({
    listSkills: Skills,
    setSkills: setSkills(set, get),
  }))
);

export const useContacts = create<ContactsType>()(
  devtools((set, get) => ({
    listContacts: Contacts,
    setContacts: setContacts(set, get),
  }))
);

export const useToggleCompetition = create<ToggleCompetitionType>()(
  devtools((set, get) => ({
    selectedUnit: CompetitionUnit.Skills,
    setSelectedUnit: setCompetition(set, get),
  }))
);
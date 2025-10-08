import { EventGetParam, EventSetParam } from "../../Shared/types";

import {
  CharactersType,
  ContactsType,
  SkillsType,
  ToggleCompetitionType,
  ToolsType,
} from "./types";

export function setCharacters(
  set: EventSetParam<CharactersType>,
  get: EventGetParam<CharactersType>
) {
  return (characters: CharactersType["listCharacters"]) =>
    set({ ...get(), ...characters });
}

export function setTools(
  set: EventSetParam<ToolsType>,
  get: EventGetParam<ToolsType>
) {
  return (tools: ToolsType["listTools"]) => set({ ...get(), ...tools });
}

export function setSkills(
  set: EventSetParam<SkillsType>,
  get: EventGetParam<SkillsType>
) {
  return (tools: SkillsType["listSkills"]) => set({ ...get(), ...tools });
}
    
export function setCompetition(
  set: EventSetParam<ToggleCompetitionType>,
  get: EventGetParam<ToggleCompetitionType>
) {
  return (competitionUnit: ToggleCompetitionType["selectedUnit"]) =>
    set({ ...get(), selectedUnit: competitionUnit });
}

export function setContacts(
  set: EventSetParam<ContactsType>,
  get: EventGetParam<ContactsType>
) {
  return (contacts: ContactsType["listContacts"]) =>
    set({ ...get(), ...contacts });
}
export type CharactersType = {
  listCharacters: Array<string>;
  setCharacters: (characters: Array<string>) => void;
};

export type ToolsType = {
  listTools: Array<string>;
  setTools: (tools: Array<string>) => void;
};
  
export type SkillsType = {
  listSkills: Array<string>;
  setSkills: (tools: Array<string>) => void;
};

export enum CompetitionUnit {
  Skills = "skills",
  Tools = "tools",
}

export type ToggleCompetitionType = {
  selectedUnit: CompetitionUnit;
  setSelectedUnit: (characters: CompetitionUnit) => void;
};

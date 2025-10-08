import { ProjectIdIndexes, Sections } from "../../Shared/types";

export const SelectTypeById: Record<
  ProjectIdIndexes,
  "personalProjects" | "projects"
> = {
  [Sections.EnterpriseProjects]: "projects",
  [Sections.PersonalProjects]: "personalProjects",
};

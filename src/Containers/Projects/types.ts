import { ProjectItemType } from "../../Model/Project/types";
import { ProjectIdIndexes } from "../../Shared/types";

export interface ProjectsProps {
  id: ProjectIdIndexes;
}

export interface ProjectProps extends ProjectItemType {}
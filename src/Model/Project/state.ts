import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { PersonalProjects, Projects } from "./constants";
import { ProjectsType } from "./types";

export const useProjects = create<ProjectsType>()(
  devtools(() => ({
    projects: Projects,
    personalProjects: PersonalProjects,
    fullscreenImgSrc: null,
  }))
);

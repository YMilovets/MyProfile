import { useProjects } from "./state";
import { ProjectsType } from "./types";

export const setFullscreenImgSrc = (
  fullscreenImgSrc: ProjectsType["fullscreenImgSrc"]
) =>
  useProjects.setState((state) => {
    return { ...state, fullscreenImgSrc };
  });

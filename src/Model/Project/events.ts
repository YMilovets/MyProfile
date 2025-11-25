import { useProjects } from "./state";
import { ProjectsType } from "./types";

export const setFullscreenImgSrc = (
  fullscreenImgSrc: ProjectsType["fullscreenImgSrc"]
) =>
  useProjects.setState((state) => {
    return { ...state, fullscreenImgSrc };
  });

export const setDisplayProjectId = (
  displayProjectId: ProjectsType["displayProjectId"]
) =>
  useProjects.setState((state) => {
    return { ...state, displayProjectId };
  });

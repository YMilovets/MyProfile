export type ProjectItemType = {
  id: string;
  title: string;
  description: Array<string> | string;
  usedSkills: Array<string>;
  imageSources: Array<string>;
  projectYears: [Date, Date];
  URL?: string;
  repository?: string;
};

export type ProjectsType = {
  projects: Array<ProjectItemType>;
  personalProjects: Array<ProjectItemType>;
  fullscreenImgSrc?: string | null;
  setFullscreenImgSrc: (imageSource: string | null) => void;
};

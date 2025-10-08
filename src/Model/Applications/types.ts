export type ApplicationItemType = {
  id: string | number;
  name: string;
  description?: string;
  iconPath: string;
  version: string;
  realizeDate: Date;
  downloadURL: string;
  requirements?: string;
};

export type MaterialItemType = {
  id: string | number;
  name: string;
  linkURL: string;
};

export type ApplicationType = {
  listApplications: Array<ApplicationItemType>;
  listSkills: Array<string>;
  setApplications: (applications: Array<ApplicationItemType>) => void;
};

export type MaterialsType = {
  listMaterials: Array<MaterialItemType>;
  setMaterials: (materials: Array<MaterialItemType>) => void;
};

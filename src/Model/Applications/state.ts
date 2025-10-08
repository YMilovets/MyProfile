import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Applications, Materials } from "./constants";
import { setApplication, setMaterials } from "./events";
import { ApplicationType, MaterialsType } from "./types";

export const useApplications = create<ApplicationType>()(
  devtools((set, get) => ({
    listApplications: Applications,
    listSkills: ["React", "Electron", "Electron Forge", "Electron Packager"],
    setApplications: setApplication(set, get),
  }))
);

export const useMaterials = create<MaterialsType>()(
  devtools((set, get) => ({
    listMaterials: Materials,
    setMaterials: setMaterials(set, get),
  }))
);

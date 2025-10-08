import { EventGetParam, EventSetParam } from "../../Shared/types";

import { ApplicationType, MaterialsType } from "./types";

export function setApplication(
  set: EventSetParam<ApplicationType>,
  get: EventGetParam<ApplicationType>
) {
  return (applications: ApplicationType["listApplications"]) =>
    set({ ...get(), ...applications });
}

export function setMaterials(
  set: EventSetParam<MaterialsType>,
  get: EventGetParam<MaterialsType>
) {
  return (materials: MaterialsType["listMaterials"]) =>
    set({ ...get(), ...materials });
}
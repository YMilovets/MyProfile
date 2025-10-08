import { EventGetParam, EventSetParam } from "../../Shared/types";

import { EnterprisesType } from "./types";

export function setEnterprises(
  set: EventSetParam<EnterprisesType>,
  get: EventGetParam<EnterprisesType>
) {
  return (enterprises: EnterprisesType["listEnterprises"]) =>
    set({
      ...get(),
      listEnterprises: [...get().listEnterprises, ...enterprises],
    });
}
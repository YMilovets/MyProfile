import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Routers } from "../../Components/Header/constants";
import { RoutersType } from "../../Components/Header/types";
import { Sections } from "../../Shared/types";

export const useHighlightSection = create<Sections>()(devtools(() => Sections.About));

export const useHeaders = create<Array<RoutersType>>()(devtools(() => Routers));

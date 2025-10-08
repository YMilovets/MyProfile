import { Sections } from "../../Shared/types";

export type RoutersType = {
  id: string;
  name: string;
  onClick?: () => void;
  isSmoothScroll?: boolean;
};

export interface HeaderProps {
  highlightSection?: Sections;
  routers: Array<RoutersType>;
  isHome?: boolean;
}
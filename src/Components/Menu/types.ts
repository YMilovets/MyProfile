import { Sections } from "../../Shared/types";

export type MenuType = {
  id: string;
  name: string;
  onClick?: () => void;
  isSmoothScroll?: boolean;
};

export interface MenuProps {
  routers: Array<MenuType>;
  highlightSection?: Sections;
  className?: string;
  onHide?: () => void;
  onClick?: () => void;
}
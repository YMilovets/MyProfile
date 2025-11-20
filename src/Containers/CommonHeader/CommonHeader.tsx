import { memo } from "react";

import Header from "../../Components/Header";
import {
  useHeaders,
  useHighlightSection,
} from "../../Model/Global/state";
import Theme from "../Theme";

import { CommonHeaderProps } from "./types";

function CommonHeader({ isHome = false }: CommonHeaderProps) {
  const highlightSection = useHighlightSection((state) => state);

  const routers = useHeaders((state) => state);

  const HeaderContainer = memo(Header);

  return (
    <HeaderContainer
      renderRightFn={<Theme />}
      routers={routers}
      highlightSection={highlightSection}
      isHome={isHome}
    />
  );
}

export default CommonHeader;

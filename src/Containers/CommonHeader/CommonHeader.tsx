import Header from "../../Components/Header";
import { useHeaders, useHighlightSection } from "../../Model/Global/state";
import Theme from "../Theme";

import { CommonHeaderProps } from "./types";

function CommonHeader({ isHome = false, id }: CommonHeaderProps) {
  const highlightSection = useHighlightSection((state) => state);

  const routers = useHeaders((state) => state);

  return (
    <Header
      id={id}
      renderRightFn={<Theme />}
      routers={routers}
      highlightSection={highlightSection}
      isHome={isHome}
    />
  );
}

export default CommonHeader;

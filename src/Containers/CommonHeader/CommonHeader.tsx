import { memo } from "react";

import Header from "../../Components/Header";
import { useHeaders, useHighlightSection } from "../../Model/Global/state";

function CommonHeader() {
  const highlightSection = useHighlightSection((state) => state);

  const routers = useHeaders((state) => state);

  const HeaderContainer = memo(Header);

  return (
    <HeaderContainer routers={routers} highlightSection={highlightSection} />
  );
}

export default CommonHeader;
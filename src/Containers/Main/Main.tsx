import { setHighlightSection } from "../../Model/Global/events";
import { DELTA_SCROLL_POS } from "../../Shared/Constants";
import { useScroll } from "../../Shared/hooks";
import { Sections } from "../../Shared/types";

import { HeaderPosition } from "./constants";
import { ScrollProps } from "./types";

function Main({ children }: ScrollProps) {
  const handleScroll = () => {
    const listPosition = HeaderPosition.map((id) => {
      const section = document.getElementById(id);
      const startSection = section?.offsetTop ?? 0;
      return startSection;
    });

    for (let index = 0; index < listPosition.length - 1; index++) {
      if (
        listPosition[index] - window.innerHeight * DELTA_SCROLL_POS <
          window.scrollY + 1 &&
        listPosition[index + 1] > window.scrollY + 1
      ) {
        setHighlightSection(HeaderPosition[index]);
      }
    }
  };

  useScroll(handleScroll, true);

  return <main id={Sections.Home}>{children}</main>;
}


export default Main;

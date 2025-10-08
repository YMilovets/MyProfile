import { createPortal } from "react-dom";

import { PortalProps } from "./types";

function Portal({ children }: PortalProps) {
  return createPortal(children, document.body);
}

export default Portal
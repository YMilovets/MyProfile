import clsx from "clsx";

import { HeaderLabelProps } from "./types";

import styles from "./HeaderLabel.module.css";

function HeaderLabel({ children, className }: HeaderLabelProps) {
  return <h1 className={clsx(className, styles.root)}>{children}</h1>;
}

export default HeaderLabel;

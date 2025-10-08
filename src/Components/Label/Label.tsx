import clsx from "clsx";

import { LabelProps } from "./types";

import styles from "./Label.module.css";

function Label({ children, className }: LabelProps) {
  return <div className={clsx(className, styles.label)}>{children}</div>;
}

export default Label;

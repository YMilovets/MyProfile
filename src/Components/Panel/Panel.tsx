import clsx from "clsx";

import { PanelProps } from "./types";

import styles from "./Panel.module.css";

function Panel({ className, header, children, id }: PanelProps) {
  return (
    <section id={id} className={clsx(className, styles.root)}>
      {header && <header className={styles.header}>{header}</header>}
      {children}
    </section>
  );
}

export default Panel;

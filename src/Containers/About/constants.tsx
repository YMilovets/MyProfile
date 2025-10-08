import { ReactNode } from "react";

import ImageWithLoad from "../../Components/ImageWithLoad";

import styles from "./About.module.css";

export const CompanyIcons: Record<string, ReactNode> = {
  etech: (
    <ImageWithLoad
      className={styles.icon}
      source="https://companieslogo.com/img/orig/EVZ.F-ff7a84cc.png?t=1720244491"
    />
  ),
};
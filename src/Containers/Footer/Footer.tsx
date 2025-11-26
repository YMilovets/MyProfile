import ProfileInfo from "../../Components/ProfileInfo";
import { useMaterials } from "../../Model/Applications/state";
import { FOOTER_MENU_ID, REALIZE_YEAR } from "../../Shared/Constants";
import { Sections } from "../../Shared/types";
import { getTranslation } from "../../Shared/utils";
import CommonHeader from "../CommonHeader";

import styles from "./Footer.module.css";

function Footer() {
  const { listMaterials } = useMaterials((state) => state);

  return (
    <footer className={styles.root} id={Sections.Footer}>
      <ProfileInfo />
      <CommonHeader id={FOOTER_MENU_ID} />
      <h3 className={styles.sources}>{getTranslation("sources")}:</h3>
      <ul className={styles.list}>
        {listMaterials.map(({ id, linkURL, name }) => (
          <li className={styles.list_item} key={id}>
            {name} -{" "}
            <a className={styles.link} target="_blank" href={linkURL}>
              {linkURL}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        {getTranslation("copyright").replace(
          "%date%",
          `${REALIZE_YEAR}${
            new Date().getFullYear() !== REALIZE_YEAR
              ? new Date().getFullYear()
              : ""
          }`
        )}
        <u>{window.location.origin}</u>.
      </p>
    </footer>
  );
}

export default Footer;

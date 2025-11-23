import clsx from "clsx";
import TypeWriter from "typewriter-effect";

import HeaderLabel from "../../Components/HeaderLabel";
import { ContactCard } from "../../Components/Icons";
import Panel from "../../Components/Panel";
import Plasma from "../../Components/Plasma";
import ProfileInfo from "../../Components/ProfileInfo";
import { useContacts } from "../../Model/Profile/state";
import { getTranslation } from "../../Shared/utils";
import CommonHeader from "../CommonHeader";
import Competition from "../Competition";

import { ContactIcons } from "./contacts";

import styles from "./Profile.module.css";

function Profile() {
  const { listContacts } = useContacts((state) => state);

  return (
    <div className={styles.profile}>
      <Plasma scale={2} className={styles.background} />
      <div className={styles.root}>
        <Panel className={styles.profile_panel}>
          <ProfileInfo className={styles.profile_info}>
            <p className={styles.text}>
              <span>{getTranslation("terminalPath")}</span>
              <TypeWriter
                component="span"
                options={{
                  strings: getTranslation("profileInfo"),
                  autoStart: true,
                  delay: 20,
                  loop: false,
                  deleteSpeed: 0,
                }}
              />
            </p>
          </ProfileInfo>
          <CommonHeader isHome />
        </Panel>
        <div className={styles.details}>
          <Competition />
          <Panel
            className={styles.panel}
            header={
              <HeaderLabel className={styles.header}>
                {getTranslation("contacts")}
              </HeaderLabel>
            }
          >
            <div className={clsx(styles.content, styles.content__center)}>
              <ContactCard className={styles.icon_card} />
              <div className={styles.contacts}>
                {listContacts.map(({ id, linkURL, name }) => (
                  <a
                    target="_blank"
                    key={id}
                    href={linkURL}
                    className={styles.contact}
                  >
                    {ContactIcons[id]} {name}
                  </a>
                ))}
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Profile;

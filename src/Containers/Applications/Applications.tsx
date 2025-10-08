import HeaderLabel from "../../Components/HeaderLabel";
import { ArrowDown } from "../../Components/Icons";
import ImageWithLoad from "../../Components/ImageWithLoad";
import Label from "../../Components/Label";
import Panel from "../../Components/Panel";
import { useApplications } from "../../Model/Applications/state";
import { Sections } from "../../Shared/types";
import { getTranslation } from "../../Shared/utils";
import { getDate } from "../../Shared/utils";

import styles from "./Applications.module.css";

function Applications() {
  const applications = useApplications((state) => state.listApplications);
  const skills = useApplications((state) => state.listSkills);

  return (
    <div id={Sections.Apps} className={styles.root}>
      <div className={styles.downloads}>
        <HeaderLabel className={styles.header}>
          {getTranslation("downloadHeader")}
        </HeaderLabel>
        <div className={styles.skills}>
          {skills.map((id) => (
            <Label key={id}>{id}</Label>
          ))}
        </div>
        <div className={styles.list}>
          {applications.map(
            ({
              downloadURL,
              iconPath,
              id,
              name,
              realizeDate,
              version,
              description,
              requirements,
            }) => (
              <Panel key={id} className={styles.download}>
                <div className={styles.application}>
                  <figure className={styles.application_image}>
                    <ImageWithLoad
                      className={styles.application_icon}
                      source={iconPath}
                    />
                  </figure>
                  <header className={styles.application_header}>
                    <h2>{name}</h2>
                    <div className={styles.application_info}>
                      <span>
                        {getTranslation("version")}: {version}
                      </span>
                      <span>
                        {getTranslation("realizeDate")}:{" "}
                        {getDate(realizeDate).slice(0, -3)}
                      </span>
                    </div>
                    <div className={styles.application_info}>
                      <span>
                        {getTranslation("OS")}: {requirements}
                      </span>
                    </div>
                    {description && (
                      <p className={styles.description}>{description}</p>
                    )}
                  </header>
                  <a
                    href={downloadURL}
                    title={`${getTranslation("download")} ${name}`}
                    className={styles.link}
                    target="_blank"
                  >
                    <ArrowDown />
                  </a>
                </div>
              </Panel>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Applications;

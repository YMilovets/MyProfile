import HeaderLabel from "../../Components/HeaderLabel";
import { Calendar } from "../../Components/Icons";
import Label from "../../Components/Label";
import { getDate } from "../../Shared/utils";

import { ProjectProps } from "./types";

import styles from "./Project.module.css";

function ProjectArticle({
  title,
  usedSkills = [],
  projectYears,
  URL,
  repository,
}: Omit<ProjectProps, "imageSources" | "id">) {
  const isExistSkills = usedSkills.length > 0;

  return (
    <>
      <header className={styles.header}>
        <HeaderLabel className={styles.header_label}>{title}</HeaderLabel>
        {URL && (
          <p className={styles.link}>
            Ссылка на сайт:{" "}
            <a target="_blank" className={styles.link_url} href={URL}>
              {URL}
            </a>
          </p>
        )}
        {repository && (
          <p className={styles.link}>
            Ссылка на репозиторий:{" "}
            <a target="_blank" className={styles.link_url} href={repository}>
              {repository}
            </a>
          </p>
        )}
      </header>
      <div className={styles.profile_info}>
        {projectYears && (
          <div className={styles.used_skills_container}>
            <Label className={styles.label_date}>
              <span className={styles.date}>
                <Calendar className={styles.calendar} />
                {getDate(projectYears[0]).slice(0, -3)} -{" "}
                {getDate(projectYears[1]).slice(0, -3)}
              </span>
            </Label>
          </div>
        )}

        {isExistSkills && (
          <div className={styles.used_skills_container}>
            {usedSkills.map((skillId) => (
              <Label className={styles.label} key={skillId}>
                {skillId}
              </Label>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectArticle;

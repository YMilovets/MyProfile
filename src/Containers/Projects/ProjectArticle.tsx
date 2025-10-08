import { useState } from "react";
import Typewriter from "typewriter-effect";

import HeaderLabel from "../../Components/HeaderLabel";
import { Calendar } from "../../Components/Icons";
import Label from "../../Components/Label";
import Slider from "../../Components/Slider";
import { setFullscreenImgSrc } from "../../Model/Project/events";
import { useScroll } from "../../Shared/hooks";
import { getDate } from "../../Shared/utils";

import { ProjectProps } from "./types";

import styles from "./Project.module.css";

function ProjectArticle({
  description,
  title,
  imageSources = [],
  usedSkills = [],
  projectYears,
  URL,
  id,
  repository,
}: ProjectProps) {
  const isExistImages = imageSources.length > 0;
  const isExistSkills = usedSkills.length > 0;
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offsetTop = document.getElementById(id)?.offsetTop ?? 0;

    if (scrollY >= offsetTop) {
      setIsScrolled(true);
      document.removeEventListener("scroll", handleScroll);
    }
  };

  useScroll(handleScroll);

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
      <div className={styles.project_content}>
        {isExistImages && (
          <Slider
            images={imageSources.map((source) => ({
              source,
            }))}
            onClick={setFullscreenImgSrc}
          />
        )}
        <div className={styles.content}>
          {description && (
            <div className={styles.text}>
              <Typewriter
                component="p"
                options={{
                  strings: description,
                  delay: 10,
                  loop: false,
                  deleteSpeed: 0,
                  autoStart: isScrolled,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProjectArticle;

import { useRef, useState } from "react";

import { useScroll } from "../../Shared/hooks";

import ProjectArticle from "./ProjectArticle";
import { ProjectProps } from "./types";

import styles from "./Project.module.css";

function Project({
  description,
  title,
  imageSources = [],
  usedSkills = [],
  projectYears,
  URL,
  repository,
  id,
}: ProjectProps) {
  const [posY, setPosY] = useState(0);
  const savedPosYRef = useRef(0);

  const articleRef = useRef<HTMLDetailsElement | null>(null);

  const handleScroll = () => {
    const article = articleRef.current;
    const articleTopPosition = article?.offsetTop ?? 0;
    const changedPosY = (articleTopPosition - window.scrollY) * 0.5;

    const isScrollBottom = savedPosYRef.current - changedPosY > 0;

    setPosY((posY) => {
      if (posY <= window.innerHeight * 0.5 && !isScrollBottom) {
        return changedPosY;
      }
      if (posY >= window.innerHeight * -0.5 && isScrollBottom) {
        return changedPosY;
      }
      return posY;
    });

    savedPosYRef.current = changedPosY;
  };

  useScroll(handleScroll);

  return (
    <article id={id} ref={articleRef} className={styles.root}>
      <div
        style={{ transform: `translateY(${posY}px)` }}
        className={styles.project}
      >
        <ProjectArticle
          title={title}
          usedSkills={usedSkills}
          description={description}
          imageSources={imageSources}
          projectYears={projectYears}
          repository={repository}
          URL={URL}
          id={id}
        />
      </div>
    </article>
  );
}

export default Project;

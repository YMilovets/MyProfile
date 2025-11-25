import { useMemo, useRef, useState } from "react";

import Slider from "../../Components/Slider";
import {
  setFullscreenImgSrc,
} from "../../Model/Project/events";
import { useScroll } from "../../Shared/hooks";

import ProjectArticle from "./ProjectArticle";
import ProjectText from "./ProjectText";
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

  const [selectedId, setSelectedId] = useState(0);

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

  const sourcesList = useMemo(
    () =>
      imageSources.map((source) => ({
        source,
      })),
    []
  );

  const isExistImages = sourcesList.length > 0;

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
          projectYears={projectYears}
          repository={repository}
          URL={URL}
        />
        <div className={styles.project_content}>
          {isExistImages && (
            <Slider
              selectedId={selectedId}
              images={sourcesList}
              onClick={setFullscreenImgSrc}
              onSelect={setSelectedId}
        />
          )}
          <div className={styles.content}>
            {description && <ProjectText description={description} />}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;

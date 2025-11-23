import { useState } from "react";
import clsx from "clsx";

import Button from "../../Components/Button";
import { useProjects } from "../../Model/Project/state";
import { DELTA_SCROLL_POS } from "../../Shared/Constants";
import { useScroll } from "../../Shared/hooks";

import { SelectTypeById } from "./constants";
import { ProjectsProps } from "./types";

import styles from "./Project.module.css";

function ProjectNavigation({ id }: ProjectsProps) {
  const [displayProject, setDisplayProject] = useState(0);

  const listProjects = useProjects((state) => {
    return state[SelectTypeById[id]];
  });

  const startPosition = document.getElementById(id)?.offsetTop ?? 0;

  const handleScroll = () => {
    const startPosition = document.getElementById(id)?.offsetTop ?? 0;

    setDisplayProject(
      Math.floor(
        (window.scrollY - startPosition) / innerHeight + DELTA_SCROLL_POS
      )
    );
  };

  useScroll(handleScroll);

  const handleNavClick = (projectIndex: number) => {
    return () => {
      window.scroll({
        top: startPosition + projectIndex * window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    };
  };

  return (
    <div className={styles.nav_root}>
      <nav className={styles.navigation}>
        {listProjects.map(({ id, title }, index) => (
          <Button
            onClick={handleNavClick(index)}
            key={id}
            className={clsx(styles.navigation_item, {
              [styles.navigation_item__visible]: displayProject === index,
            })}
            title={title}
          />
        ))}
      </nav>
    </div>
  );
}

export default ProjectNavigation;

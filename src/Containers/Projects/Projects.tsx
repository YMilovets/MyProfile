import { useProjects } from "../../Model/Project/state";

import { SelectTypeById } from "./constants";
import Project from "./Project";
import ProjectNavigation from "./ProjectNavigation";
import { ProjectsProps } from "./types";

import styles from "./Project.module.css";

function Projects({ id }: ProjectsProps) {
  const listProjects = useProjects((state) => state[SelectTypeById[id]]);

  return (
    <section className={styles.projects} id={id}>
      <div className={styles.project}>
        {listProjects.map(
          ({
            description,
            imageSources,
            title,
            usedSkills,
            id,
            projectYears,
            repository,
            URL,
          }) => (
            <Project
              key={id}
              title={title}
              usedSkills={usedSkills}
              description={description}
              imageSources={imageSources}
              projectYears={projectYears}
              repository={repository}
              URL={URL}
              id={id}
            />
          )
        )}
      </div>
      <ProjectNavigation id={id} />
    </section>
  );
}

export default Projects;

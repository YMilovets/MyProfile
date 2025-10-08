import clsx from "clsx";

import { Code } from "../../Components/Icons";
import Label from "../../Components/Label";
import { useSkills } from "../../Model/Profile/state";

import styles from "./Competition.module.css";

function CompetitionSkills() {
  const skills = useSkills((state) => state.listSkills);

  return (
    <div className={clsx(styles.content, styles.content_tab)}>
      <Code className={styles.icon_code} />
      <div className={styles.skills}>
        {skills.map((id) => (
          <Label key={id}>{id}</Label>
        ))}
      </div>
    </div>
  );
}

export default CompetitionSkills;

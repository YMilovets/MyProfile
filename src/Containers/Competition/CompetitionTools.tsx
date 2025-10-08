import clsx from "clsx";

import { Wrench } from "../../Components/Icons";
import Label from "../../Components/Label";
import { useTools } from "../../Model/Profile/state";

import styles from "./Competition.module.css";

function CompetitionTools() {
  const tools = useTools((state) => state.listTools);

  return (
    <div className={clsx(styles.content, styles.content_tab)}>
      <Wrench className={styles.icon_wrench} />
      <div className={styles.tools}>
        {tools.map((id) => (
          <Label key={id}>{id}</Label>
        ))}
      </div>
    </div>
  );
}

export default CompetitionTools;
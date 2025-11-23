import { Fragment } from "react";
import clsx from "clsx";

import Button from "../../Components/Button";
import HeaderLabel from "../../Components/HeaderLabel";
import Panel from "../../Components/Panel";
import { useToggleCompetition } from "../../Model/Profile/state";
import { getTranslation } from "../../Shared/utils";

import { ListTabs } from "./constants";

import styles from "./Competition.module.css";

function Competition() {
  const { selectedUnit: competitionType, setSelectedUnit } =
    useToggleCompetition((state) => state);

  return (
    <Panel
      className={styles.panel}
      header={
        <div className={styles.header}>
          {Array.from(ListTabs).map(([tabName, { id }], index) => (
            <Fragment key={tabName}>
              <Button
                onClick={() => setSelectedUnit(tabName)}
                className={clsx(styles.tab_item, {
                  [styles.tab_item__active]: competitionType === id,
                })}
              >
                <HeaderLabel>{getTranslation(tabName)}</HeaderLabel>
              </Button>
              {Array.from(ListTabs).length - 1 > index && (
                <span className={styles.divider}>\</span>
              )}
            </Fragment>
          ))}
        </div>
      }
    >
      {ListTabs.get(competitionType)?.tabComponent}
    </Panel>
  );
}

export default Competition;

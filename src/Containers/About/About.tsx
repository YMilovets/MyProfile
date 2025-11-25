import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

import HeaderLabel from "../../Components/HeaderLabel";
import { Calendar } from "../../Components/Icons";
import Panel from "../../Components/Panel";
import { useEnterprises } from "../../Model/About/state";
import { useObserver } from "../../Shared/hooks";
import { Sections } from "../../Shared/types";
import { getDate, getTranslation } from "../../Shared/utils";

import { CompanyIcons } from "./constants";

import styles from "./About.module.css";

function About() {
  const listEnterprises = useEnterprises((state) => state.listEnterprises);
  const about = useEnterprises((state) => state.about);
  const [isScrolled, setIsScrolled] = useState(false);

  const typewriterTextRef = useRef<HTMLDivElement | null>(null);

  useObserver({
    observeElement: typewriterTextRef,
    onObserve: () => setIsScrolled(true),
  });

  return (
    <div className={styles.root} id={Sections.About}>
      <div className={styles.content}>
        {about && (
          <div ref={typewriterTextRef} className={styles.about}>
            <HeaderLabel className={styles.header}>О себе</HeaderLabel>
            <Typewriter
              component="p"
              options={{
                strings: about,
                delay: 10,
                autoStart: isScrolled,
                wrapperClassName: styles.text,
              }}
            />
            <Panel className={styles.info}>
              {getTranslation("nextSections")}
            </Panel>
          </div>
        )}
        {listEnterprises.map(
          ({
            achievements,
            company,
            id,
            positionDate: [startDate = new Date(), lastDate = new Date()],
            teamInfo,
          }) => (
            <Panel
              key={id}
              header={
                <HeaderLabel className={styles.company}>
                  {CompanyIcons[id]}
                  {company}
                </HeaderLabel>
              }
              className={styles.panel}
            >
              <div className={styles.panel_content}>
                <time className={styles.date}>
                  <Calendar />
                  {getDate(startDate).slice(0, -3)} -{" "}
                  {getDate(lastDate).slice(0, -3)}
                </time>
                {teamInfo && (
                  <>
                    <h3>О команде</h3>
                    <p>{teamInfo}</p>
                  </>
                )}
                <h3>Мои достижения</h3>
                <ul className={styles.achievements}>
                  {achievements.map(({ achievementId, text }) => (
                    <li key={achievementId}>{text}</li>
                  ))}
                </ul>
              </div>
            </Panel>
          )
        )}
      </div>
    </div>
  );
}

export default About;

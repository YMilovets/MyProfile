import { memo } from "react";
import clsx from "clsx";

import { getTranslation } from "../../Shared/utils";
import { Home } from "../Icons";

import { HeaderProps } from "./types";

import styles from "./Header.module.css";

function Header({
  highlightSection,
  routers,
  isHome,
  renderRightFn,
}: HeaderProps) {
  const HomeIconContainer = memo(Home);
  return (
    <header className={styles.root}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={clsx(styles.item, styles.item__main)}>
            <a
              className={clsx(styles.link, {
                [styles.link__active]: isHome,
              })}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              title={getTranslation("home")}
            >
              <HomeIconContainer className={styles.home} />
            </a>
          </li>
          {routers.map(({ id, name, onClick, isSmoothScroll = true }) => (
            <li className={styles.item} key={id}>
              <a
                className={clsx(styles.link, {
                  [styles.link__active]: highlightSection === id,
                })}
                onClick={() => {
                  onClick?.();
                  if (!isSmoothScroll) return;
                  window.scroll({
                    top: document.getElementById(id)?.offsetTop ?? 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {name}
              </a>
            </li>
          ))}
          {renderRightFn}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

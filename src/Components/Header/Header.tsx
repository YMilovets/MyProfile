import { memo } from "react";
import clsx from "clsx";

import { getTranslation } from "../../Shared/utils";
import Button from "../Button";
import { Home } from "../Icons";

import { HeaderProps } from "./types";
import useMenu from "./useMenu";

import styles from "./Header.module.css";

function Header({
  highlightSection,
  routers,
  isHome,
  renderRightFn,
}: HeaderProps) {
  const HomeIconContainer = memo(Home);
  const { isVisible, flexMenuRef, buttonRef, handleClick } = useMenu();

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
          <li className={clsx(styles.item, styles.item__button)}>
            <Button
              ref={buttonRef}
              className={styles.button}
              onClick={handleClick}
            >
              {getTranslation("menu")}
            </Button>
          </li>
          <li className={styles.menu}>
            <ul
              ref={flexMenuRef}
              className={clsx(styles.menu__list, {
                [styles.menu__list_closed]: !isVisible,
                [styles.menu__list_active]: isVisible,
              })}
            >
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
            </ul>
          </li>
          <li className={clsx(styles.item, styles.item__main)}>
            {renderRightFn}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

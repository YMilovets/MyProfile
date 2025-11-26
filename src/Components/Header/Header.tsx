import { memo } from "react";
import clsx from "clsx";

import { FOOTER_MENU_ID } from "../../Shared/Constants";
import { getTranslation } from "../../Shared/utils";
import Button from "../Button";
import { Home } from "../Icons";
import Menu from "../Menu";

import { HeaderProps } from "./types";
import useMenu from "./useMenu";

import styles from "./Header.module.css";

function Header({
  highlightSection,
  routers,
  isHome,
  renderRightFn,
  id
}: HeaderProps) {
  const HomeIconContainer = memo(Home);
  
  const {
    isVisible,
    isBottom,
    isDisableMenu,
    flexMenuRef,
    buttonRef,
    handleClick,
    handleHideMenu,
  } = useMenu();

  return (
    <header
      id={id}
      className={clsx(styles.root, {
        [styles.root_disabled]: isDisableMenu && id !== FOOTER_MENU_ID,
      })}
    >
      <div className={styles.container}>
        <nav
          className={clsx(styles.navigation, {
            [styles.navigation_bottom]: isBottom,
          })}
        >
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
                className={clsx(styles.button, {
                  [styles.button_active]: isVisible,
                })}
                onClick={handleClick}
              >
                {getTranslation("menu")}
              </Button>
            </li>
            <li className={clsx(styles.item, styles.item__menu)}>
              <Menu
                className={styles.menu__list}
                routers={routers}
                highlightSection={highlightSection}
                onHide={handleHideMenu}
                onClick={handleClick}
                ref={flexMenuRef}
              />
            </li>
            <li className={clsx(styles.item, styles.item__main)}>
              {renderRightFn}
            </li>
          </ul>

          <Menu
            className={clsx(styles.menu, {
              [styles.menu_active]: isVisible,
              [styles.menu_bottom]: isBottom,
            })}
            routers={routers}
            highlightSection={highlightSection}
            onHide={handleHideMenu}
            onClick={handleClick}
            ref={flexMenuRef}
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;

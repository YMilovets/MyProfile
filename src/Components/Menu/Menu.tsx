import { forwardRef, ForwardRefRenderFunction, MouseEventHandler, RefObject, useRef } from "react";
import clsx from "clsx";

import { useObserver } from "../../Shared/hooks";

import { MenuProps } from "./types";

import styles from "./Menu.module.css";

function Menu(
  { routers, highlightSection, className, onClick, onHide }: MenuProps,
  ref: RefObject<HTMLUListElement>
) {
  const navigationLinkRef = useRef<HTMLAnchorElement | null>(null);
  const navigationFirstLinkRef = useRef<HTMLAnchorElement | null>(null);

  const handleHideMenu = () => {
    onHide?.();
  };

  const handleClick: MouseEventHandler<HTMLElement> = () => {
    onClick?.();
  };

  useObserver({
    observeElement: navigationLinkRef,
    onObserveOver: handleHideMenu,
    isUpdate: true,
  });

  useObserver({
    observeElement: navigationFirstLinkRef,
    onObserveOver: handleHideMenu,
    isUpdate: true,
  });

  return (
    <ul ref={ref} className={clsx(styles.menu, className)}>
      {routers.map(({ id, name, onClick, isSmoothScroll = true }, index) => (
        <li className={styles.item} key={id}>
          <a
            ref={index > 0 ? navigationLinkRef : navigationFirstLinkRef}
            className={clsx(styles.link, {
              [styles.link__active]: highlightSection === id,
            })}
            onClick={(e) => {
              onClick?.();
              handleClick(e);
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
  );
}

const MenuContainer = forwardRef(
  Menu as ForwardRefRenderFunction<HTMLUListElement, MenuProps>
);

export default MenuContainer;

import { useEffect, useRef, useState } from "react";

import { FOOTER_MENU_ID } from "../../Shared/Constants";
import { useObserver, useOutsideClick } from "../../Shared/hooks";

import styles from "./Header.module.css";

export default function useMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [isDisableMenu, setIsDisableMenu] = useState(false);

  const flexMenuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleHideMenu = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  useObserver({
    observeElement: buttonRef,
    onObserveOver: handleHideMenu,
    isUpdate: true,
  });

  useObserver({
    queryElement: document.getElementById(FOOTER_MENU_ID),
    onObserve: () => {
      setIsDisableMenu(true);
      handleHideMenu();
    },
    onObserveOver: () => {
      setIsDisableMenu(false);
    },
  });

  useOutsideClick({
    excluded: [flexMenuRef, buttonRef],
    onClick: handleHideMenu,
  });

  useEffect(() => {
    const menuPosition =
      flexMenuRef.current?.getBoundingClientRect().bottom ?? 0;

    if (menuPosition >= window.innerHeight) {
      setIsBottom(true);
    }

    if (!isVisible) {
      flexMenuRef.current?.classList.add(styles.menu_closed);
      setTimeout(() => {
        flexMenuRef.current?.classList.remove(styles.menu_closed);
        setIsBottom(false);
      }, 300);
    }
  }, [isVisible]);

  return {
    handleClick,
    handleHideMenu,
    flexMenuRef,
    buttonRef,
    isVisible,
    isDisableMenu,
    isBottom,
  };
}

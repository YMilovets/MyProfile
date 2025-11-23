import { MouseEventHandler, useEffect, useRef, useState } from "react";

import { useOutsideClick } from "../../Shared/hooks";

import styles from "./Header.module.css";

export default function useMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const flexMenuRef = useRef<HTMLUListElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
  
    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {      
      setIsVisible((isVisible) => !isVisible);
    };
    
    useOutsideClick({
      excluded: [flexMenuRef, buttonRef],
      onClick: () => {
        setIsVisible(false);
      },
    });
  
    useEffect(() => {
      const menuPosition =
        flexMenuRef.current?.getBoundingClientRect().top ?? 0;
      const menuHeigth =
        flexMenuRef.current?.getBoundingClientRect().height ?? 0;

      if (menuPosition + menuHeigth >= window.innerHeight) {
        flexMenuRef.current?.classList.add(styles.menu__list_bottom);
      }

      if (!isVisible) {
        setTimeout(() => {
          flexMenuRef.current?.classList.remove(styles.menu__list_closed);
        }, 500);
      }
    }, [isVisible]);

    return {
      handleClick,
      flexMenuRef,
      buttonRef,
      isVisible,
    };
}
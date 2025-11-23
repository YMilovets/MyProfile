import { useEffect } from "react";

import { OutsideClickProps } from "./types";

export default function useOutsideClick({
  onClick,
  excluded,
}: OutsideClickProps) {
  const clickHandler = ({ target }: MouseEvent) => {
    if (
      target &&
      excluded?.some((currentRef) =>
        currentRef.current?.contains(target as Node)
      )
    ) {
      return;
    }
    onClick?.();
  };

  useEffect(() => {
    document.body.addEventListener("click", clickHandler);

    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, []);
}

import { forwardRef, ForwardRefRenderFunction, RefObject } from "react";
import clsx from "clsx"

import { ButtonProps } from "./types"

import styles from "./Button.module.css";

function Button(
  { children, className, ...props }: ButtonProps,
  ref: RefObject<HTMLButtonElement>
) {
  return (
    <button ref={ref} {...props} className={clsx(className, styles.button)}>
      {children}
    </button>
  );
}

const ButtonContainer = forwardRef(
  Button as ForwardRefRenderFunction<HTMLButtonElement, ButtonProps>
)

export default ButtonContainer;
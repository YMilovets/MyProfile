import { useEffect, useState } from "react";
import clsx from "clsx";

import { Image as ImageIcon } from "../Icons";

import { ImageWithLoadProps } from "./types";

import styles from "./ImageWithLoad.module.css";

function ImageWithLoad({
  className,
  source,
  description,
  onClick,
}: ImageWithLoadProps) {
  const [isExist, setIsExist] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = source;
    image.onerror = () => {
      setIsExist(false);
    };

    return () => {
      image.onerror = null;
      image.src = "";
      image.remove();
    };
  }, [source]);

  if (!isExist) {
    return (
      <ImageIcon
        className={clsx(styles.image, styles.image__not_found, className)}
      />
    );
  }

  return (
    <img
      className={clsx(styles.image, className)}
      src={source}
      alt={description}
      onClick={onClick}
    />
  );
}
export default ImageWithLoad;
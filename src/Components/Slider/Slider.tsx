import { ReactNode } from "react";
import clsx from "clsx";

import Button from "../Button";
import ImageWithLoad from "../ImageWithLoad";

import { SliderProps } from "./types";

import styles from "./Slider.module.css";

function Slider({ images, onClick, selectedId, onSelect }: SliderProps) {
  return (
    <div className={styles.root}>
      <figure className={styles.figure}>
        {images.map(({ source, description }, index) => (
          <ImageWithLoad
            key={index}
            description={description}
            source={source}
            className={clsx(styles.image, {
              [styles.images__active]: selectedId === index,
            })}
            onClick={() => onClick?.(source)}
          />
        ))}
      </figure>
      <div className={styles.points}>
        {Array<ReactNode>(images.length)
          .fill(null)
          .map((_, index) => (
            <Button
              className={clsx(styles.point, {
                [styles.point__selected]: selectedId === index,
              })}
              key={index}
              onClick={() => onSelect?.(index)}
            >
              {index + 1}
            </Button>
          ))}
      </div>
    </div>
  );
}

export default Slider;

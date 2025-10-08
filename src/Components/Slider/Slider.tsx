import { ReactNode, useState } from "react";
import clsx from "clsx";

import ImageWithLoad from "../ImageWithLoad";

import { SliderProps } from "./types";

import styles from "./Slider.module.css";

function Slider({ images, onClick }: SliderProps) {
  const [selectedId, setSelectedId] = useState(0);

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
            <button
              className={clsx(styles.point, {
                [styles.point__selected]: selectedId === index,
              })}
              key={index}
              onClick={() => setSelectedId(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
    </div>
  );
}

export default Slider;

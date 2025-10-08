import ImageWithLoad from "../../Components/ImageWithLoad";
import Portal from "../../Components/Portal";
import { setFullscreenImgSrc } from "../../Model/Project/events";
import { useProjects } from "../../Model/Project/state";
import { usePreventWheel } from "../../Shared/hooks";

import styles from "./FullscreenImage.module.css";

function FullscreenImage() {
  const imageSource = useProjects((state) => state.fullscreenImgSrc);

  usePreventWheel(!!imageSource);

  if (!imageSource) return null;
  return (
    <Portal>
      <div className={styles.fullscreen}>
        <ImageWithLoad
          onClick={() => setFullscreenImgSrc(null)}
          className={styles.image}
          source={imageSource ?? undefined}
        />
      </div>
    </Portal>
  );
}

export default FullscreenImage;

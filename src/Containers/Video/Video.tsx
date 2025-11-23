import { useEffect, useState } from "react";

import { useTheme } from "../../Model/Global/state";
import { Themes } from "../../Shared/types";

import styles from "./Video.module.css";

function Video() {
  const theme = useTheme((state) => state);
  const [changeTheme, setChangeTheme] = useState(Themes.Light);

  useEffect(() => {
    const systemLightTheme = matchMedia("(prefers-color-scheme: light)");

    systemLightTheme.addEventListener("change", ({ matches }) => {
      setChangeTheme(matches ? Themes.Light : Themes.Dark);
    });
  }, []);

  const currentTheme = theme === Themes.Default ? changeTheme : theme;

  return (
    <video
      className={styles.video}
      autoPlay
      loop
      src={["video", `plasma_${currentTheme}.mp4`].join("/")}
    />
  );
}

export default Video;

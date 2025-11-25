import { useRef, useState } from "react";
import Typewriter from "typewriter-effect";

import { useObserver } from "../../Shared/hooks";

import { ProjectProps } from "./types";

import styles from "./Project.module.css";

function ProjectText({ description }: Pick<ProjectProps, "description">) {
  const typewriterTextRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useObserver({
    observeElement: typewriterTextRef,
    onObserve: () => setIsScrolled(true),
  });

  return (
    <div ref={typewriterTextRef} className={styles.text}>
      <Typewriter
        component="p"
        options={{
          strings: description,
          delay: 10,
          loop: false,
          deleteSpeed: 0,
          autoStart: isScrolled,
        }}
      />
    </div>
  );
}

export default ProjectText;
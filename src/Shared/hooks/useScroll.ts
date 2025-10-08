import { useEffect } from "react";

export default function useScroll(
  handleScroll: () => void,
  isStart: boolean = false
) {
  useEffect(() => {
    if (isStart) handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
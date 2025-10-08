import { useEffect } from "react";

export default function usePreventWheel(isBlocked: boolean) {
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    if (isBlocked) {
      document.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [isBlocked]);
}
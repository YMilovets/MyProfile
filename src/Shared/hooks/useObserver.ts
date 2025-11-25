import {  useEffect, useRef } from "react";

import { ObserverOptions } from "../types";

export default function useObserver<TElement extends Element | null>({
  isUpdate = false,
  observeElement,
  onObserve,
  onObserveOver,
  queryElement,
  threshold = Array.from({ length: 1000 }, (_, i) => i / 1000),
}: ObserverOptions<TElement>) {
  const observerRef = useRef<null | IntersectionObserver>(null);

  useEffect(() => {
    if (observerRef.current && isUpdate) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entities) => {
      entities.forEach(
        ({ intersectionRatio, isIntersecting, target }) => {
          if (!isIntersecting) {
            onObserveOver?.({ intersectionRatio, target });
            return;
          }
          if (target) {
            onObserve?.({ intersectionRatio, target });
          }
        },
        {
          threshold,
        }
      );
    });

    if (observeElement?.current) {
      observerRef.current?.observe(observeElement.current);
    }

    if (queryElement) {
      observerRef.current?.observe(queryElement);
    }

    return () => {
      if (observeElement?.current) {
        observerRef.current?.unobserve(observeElement.current);
      }
      if (queryElement) {
        observerRef.current?.unobserve(queryElement);
      }
    };
  }, [queryElement, isUpdate, observeElement, observerRef]);
}
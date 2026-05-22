import { useEffect, useRef, useState } from "react";

/**
 * Lightweight intersection observer for scroll-triggered animations.
 * @param {Object} options
 * @param {number} [options.threshold=0.12]
 * @param {string} [options.rootMargin="0px 0px -8% 0px"]
 * @param {boolean} [options.once=true]
 */
export default function useInView({
  threshold = 0.12,
  rootMargin = "0px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}

import { useEffect, useRef } from "react";

/**
 * Optional GSAP reveal — lazy-loads gsap only when used (keeps initial bundle lean).
 * Falls back silently if gsap is not installed.
 */
export default function useGsapReveal({
  enabled = true,
  y = 24,
  duration = 0.7,
  delay = 0,
  stagger = 0,
  childrenSelector = null,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!enabled || !ref.current || typeof window === "undefined") return undefined;

    let ctx;
    let cancelled = false;

    async function run() {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        const el = ref.current;
        const targets = childrenSelector
          ? el.querySelectorAll(childrenSelector)
          : el;

        ctx = gsap.context(() => {
          gsap.from(targets, {
            opacity: 0,
            y,
            duration,
            delay,
            stagger: stagger || undefined,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        }, el);
      } catch {
        // gsap optional — CSS MotionReveal handles the default path
      }
    }

    run();
    return () => {
      cancelled = true;
      ctx?.revert?.();
    };
  }, [enabled, y, duration, delay, stagger, childrenSelector]);

  return ref;
}

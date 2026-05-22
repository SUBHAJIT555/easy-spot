import React from "react";
import useInView from "@/hooks/use-in-view";
import useGsapReveal from "@/hooks/use-gsap-reveal";

const VARIANT_CLASS = {
  fade: "site-animate-fade",
  "fade-up": "site-animate-fade-up",
  "fade-down": "site-animate-fade-down",
  scale: "site-animate-scale",
  "slide-left": "site-animate-slide-left",
  "slide-right": "site-animate-slide-right",
  stagger: "site-stagger-children",
};

/**
 * Scroll-triggered reveal wrapper. Default: CSS animations (no extra JS weight).
 * Set engine="gsap" for richer motion when gsap is installed.
 */
export default function MotionReveal({
  as: Tag = "div",
  variant = "fade-up",
  engine = "css",
  className = "",
  delay = 0,
  gsapOptions = {},
  children,
  ...rest
}) {
  const variantClass = VARIANT_CLASS[variant] || VARIANT_CLASS["fade-up"];
  const { ref: inViewRef, isInView } = useInView({ once: true });
  const gsapRef = useGsapReveal({
    enabled: engine === "gsap",
    ...gsapOptions,
  });

  const setRef = (node) => {
    inViewRef.current = node;
    if (engine === "gsap") gsapRef.current = node;
  };

  const visibleClass = engine === "css" && isInView ? "is-visible" : "";
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag
      ref={setRef}
      className={[variantClass, visibleClass, className].filter(Boolean).join(" ")}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}

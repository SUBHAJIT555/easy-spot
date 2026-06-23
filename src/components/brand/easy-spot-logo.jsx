import React from "react";

export default function EasySpotLogo({ variant = "dark", className = "" }) {
  const rootClass = ["es-logo", `es-logo--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={rootClass} role="img" aria-label="Easy Spot">
      <span className="es-logo__easy">Easy</span>
      <span className="es-logo__spot">Spot</span>
    </span>
  );
}

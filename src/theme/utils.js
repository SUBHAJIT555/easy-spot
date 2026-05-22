/**
 * Maps theme JS tokens to CSS custom properties for runtime injection.
 * SCSS --tp-* vars remain the compile-time source for legacy Shofy components.
 */

function flattenTokens(obj, prefix = "") {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = prefix ? `${prefix}-${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flattenTokens(value, cssKey));
    } else if (value !== undefined && value !== null && value !== "") {
      result[`--site-${cssKey}`] = String(value);
    }
  }
  return result;
}

function themeToCssVars(theme) {
  if (!theme) return {};

  const sections = [
    [theme.colors, "color"],
    [theme.fonts, "font"],
    [theme.spacing, "space"],
    [theme.radius, "radius"],
    [theme.shadows, "shadow"],
    [theme.buttons, "btn"],
    [theme.cards, "card"],
    [theme.navbar, "nav"],
    [theme.footer, "footer"],
    [theme.motion, "motion"],
  ];

  const vars = {
    "--site-id": theme.id,
    "--site-name": `"${theme.name || ""}"`,
  };

  for (const [section, prefix] of sections) {
    if (section && typeof section === "object") {
      Object.assign(vars, flattenTokens(section, prefix));
    }
  }

  return vars;
}

function getColor(theme, key = "primary") {
  return theme?.colors?.[key] ?? "#0F172A";
}

module.exports = {
  flattenTokens,
  themeToCssVars,
  getColor,
};

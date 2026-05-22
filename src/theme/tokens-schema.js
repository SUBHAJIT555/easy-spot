/**
 * Canonical theme token shape for all site brands.
 * Copy this structure when adding src/theme/sites/<brand>.js
 */
const tokensSchema = {
  id: "",
  name: "",
  domain: "",

  colors: {
    primary: "",
    secondary: "",
    accent: "",
    primaryRgb: "",
    secondaryRgb: "",
    error: "",
    success: "",
    white: "",
    black: "",
    textBody: "",
    textMuted: "",
    border: "",
    track: "",
    surface: "",
    surfaceMuted: "",
    heading: "",
  },

  fonts: {
    googleUrl: "",
    body: "",
    heading: "",
  },

  spacing: {
    sectionY: "",
    sectionYSm: "",
    container: "",
    gutter: "",
  },

  radius: {
    sm: "",
    md: "",
    lg: "",
    xl: "",
    full: "",
  },

  shadows: {
    sm: "",
    md: "",
    lg: "",
    focus: "",
  },

  buttons: {
    primaryBg: "",
    primaryBgHover: "",
    primaryColor: "",
    primaryBorder: "",
    ghostBg: "",
    ghostBgHover: "",
    ghostColor: "",
    ghostBorder: "",
    radius: "",
    fontWeight: "",
  },

  cards: {
    radius: "",
    shadow: "",
    shadowHover: "",
    border: "",
    background: "",
  },

  navbar: {
    background: "",
    backgroundSticky: "",
    border: "",
    blur: "",
    linkColor: "",
    linkHover: "",
  },

  footer: {
    background: "",
    text: "",
    textMuted: "",
    border: "",
  },

  motion: {
    durationFast: "",
    duration: "",
    durationSlow: "",
    ease: "",
    easeOut: "",
  },

  toastClass: "",
  classPrefix: "",
};

module.exports = tokensSchema;

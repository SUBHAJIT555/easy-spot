/**
 * Easy Spot — premium minimal e-commerce theme.
 * Keep SCSS in public/assets/scss/theme/sites/_easy-spot.scss in sync.
 */
module.exports = {
  id: "easy-spot",
  name: "Easy Spot",
  domain: "easy-spot.com",
  email: "info@easy-spot.com",
  tagline: "Premium essentials, thoughtfully curated — delivered across India.",

  colors: {
    primary: "#0F172A",
    secondary: "#0EA5E9",
    accent: "#6366F1",
    primaryRgb: "15, 23, 42",
    secondaryRgb: "14, 165, 233",
    error: "#EF4444",
    success: "#10B981",
    white: "#FFFFFF",
    black: "#0F172A",
    textBody: "#475569",
    textMuted: "#94A3B8",
    border: "#E2E8F0",
    track: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceMuted: "#F8FAFC",
    heading: "#0F172A",
  },

  fonts: {
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
    body: "var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "var(--font-plus-jakarta), var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  spacing: {
    sectionY: "clamp(4rem, 8vw, 6rem)",
    sectionYSm: "clamp(2.5rem, 5vw, 4rem)",
    container: "80rem",
    gutter: "clamp(1rem, 4vw, 2rem)",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.04)",
    md: "0 4px 16px rgba(15, 23, 42, 0.06)",
    lg: "0 12px 32px rgba(15, 23, 42, 0.08)",
    focus: "0 0 0 3px rgba(14, 165, 233, 0.2)",
  },

  buttons: {
    primaryBg: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    primaryBgHover: "linear-gradient(135deg, #020617 0%, #0F172A 100%)",
    primaryColor: "#F8FAFC",
    primaryBorder: "#1E293B",
    ghostBg: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    ghostBgHover: "linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
    ghostColor: "#334155",
    ghostBorder: "#E2E8F0",
    radius: "0.75rem",
    fontWeight: "600",
  },

  cards: {
    radius: "1rem",
    shadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
    shadowHover: "0 8px 24px rgba(15, 23, 42, 0.08)",
    border: "#E2E8F0",
    background: "#FFFFFF",
  },

  navbar: {
    background: "rgba(255, 255, 255, 0.92)",
    backgroundSticky: "rgba(255, 255, 255, 0.98)",
    border: "#E2E8F0",
    blur: "12px",
    linkColor: "#0F172A",
    linkHover: "#0EA5E9",
  },

  footer: {
    background: "#0F172A",
    text: "#F8FAFC",
    textMuted: "#94A3B8",
    border: "#1E293B",
  },

  motion: {
    durationFast: "150ms",
    duration: "280ms",
    durationSlow: "480ms",
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  },

  toastClass: "es-toast",
  classPrefix: "es",
};

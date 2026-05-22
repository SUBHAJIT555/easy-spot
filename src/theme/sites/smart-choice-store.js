/**
 * Smart Choice Store — site theme tokens.
 * Keep SCSS in theme/sites/_smart-choice-store.scss in sync.
 */
module.exports = {
  id: "smart-choice-store",
  name: "Smart Choice Store",

  colors: {
    primary: "#0E7490",
    secondary: "#BE123C",
    accent: "#0891B2",
    primaryRgb: "14, 116, 144",
    error: "#DC2626",
    white: "#FFFFFF",
    black: "#0C4A6E",
    textBody: "#475569",
    border: "#E2E8F0",
    track: "#F0FDFA",
  },

  fonts: {
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    body: "var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "var(--font-geist-sans), var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  toastClass: "scs-toast",
};

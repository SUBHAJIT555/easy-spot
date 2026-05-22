/**
 * Quick Pick Market — site theme tokens.
 * Keep SCSS in theme/sites/_quick-pick-market.scss in sync.
 */
module.exports = {
  id: "quick-pick-market",
  name: "Quick Pick Market",

  colors: {
    primary: "#18181B",
    secondary: "#16A34A",
    accent: "#22C55E",
    primaryRgb: "24, 24, 27",
    error: "#DC2626",
    white: "#FFFFFF",
    black: "#18181B",
    textBody: "#52525B",
    border: "#E4E4E7",
    track: "#FAFAFA",
  },

  fonts: {
    googleUrl:
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    body: "var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "var(--font-geist-sans), var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  toastClass: "qpm-toast",
};

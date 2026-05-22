const theme = require("./src/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/layout/**/*.{js,jsx,ts,tsx}",
    "./src/ui/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: theme.colors.primary,
          secondary: theme.colors.secondary,
          accent: theme.colors.accent,
          muted: theme.colors.textMuted,
          surface: theme.colors.surface,
          "surface-muted": theme.colors.surfaceMuted,
          border: theme.colors.border,
          heading: theme.colors.heading,
          error: theme.colors.error,
          success: theme.colors.success,
        },
      },
      fontFamily: {
        sans: [theme.fonts.body],
        heading: [theme.fonts.heading],
      },
      borderRadius: {
        brand: theme.radius?.md ?? "0.75rem",
        "brand-lg": theme.radius?.lg ?? "1rem",
      },
      boxShadow: {
        "brand-sm": theme.shadows?.sm,
        "brand-md": theme.shadows?.md,
        "brand-lg": theme.shadows?.lg,
      },
      maxWidth: {
        site: theme.spacing?.container ?? "80rem",
      },
      spacing: {
        "section-y": theme.spacing?.sectionY,
        "section-y-sm": theme.spacing?.sectionYSm,
        gutter: theme.spacing?.gutter,
      },
      transitionDuration: {
        "site-fast": theme.motion?.durationFast?.replace("ms", "") ?? "150",
        site: theme.motion?.duration?.replace("ms", "") ?? "280",
        "site-slow": theme.motion?.durationSlow?.replace("ms", "") ?? "480",
      },
    },
  },
  plugins: [],
};

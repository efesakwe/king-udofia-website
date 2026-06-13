import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#111111",
        card: "#141414",
        "card-border": "#1E1E1E",
        "card-hover": "#1A1A1A",
        foreground: "#F5F5F0",
        gold: {
          DEFAULT: "#C9A96E",
          dark: "#B8924F",
          light: "#D4B97A",
        },
        /** Secondary accent — warm earthy red (#C44536) */
        ember: "#C44536",
        muted: {
          DEFAULT: "#A0A0A0",
          dark: "#666666",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

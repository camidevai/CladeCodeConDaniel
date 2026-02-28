import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        bg: "#F6F1E8",
        surface: "#FBF7F0",
        text: "#121212",
        muted: "#4B4B4B",
        border: "#E7DED2",
        accent: "#D97757",
        accentSoft: "#F1C7B8",
        termBg: "#121212",
        termText: "#EDE7DD",
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        editorial: ['var(--font-editorial)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;


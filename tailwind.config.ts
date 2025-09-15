// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // SALIN DARI PROYEK LAMA ANDA
      colors: {
        primary: "#f97316",
        "primary-dark": "#ea580c",
        secondary: "#1e293b",
        "secondary-light": "#334155",
        accent: "#facc15",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;

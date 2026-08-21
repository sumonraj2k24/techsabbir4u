import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0F19",
        cardBg: "rgba(17, 24, 39, 0.7)",
        accentPurple: "#8B5CF6",
        accentCyan: "#06B6D4",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 50% 20%, #1E1B4B 0%, #0B0F19 80%)",
        "card-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
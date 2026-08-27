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
        terracota: {
          50: '#FBEDE7', 100: '#F5D2C3', 300: '#DE784E',
          500: '#A8441F', 600: '#8A3519', 700: '#6B2813', 800: '#4D1B0D',
        },
      },
    },
  },
  plugins: [],
};
export default config;
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
        primary: "#fa8e59",
        secondary: "#EF4F21",
        yellow: "#FFC706",
        gray: "#474747",
      },
    },
  },
  plugins: [],
};
export default config;

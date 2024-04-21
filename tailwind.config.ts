import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        defaultBlack: '#191919',
        primaryColor: '#792D1D'
      },
      textColor: {
        whiteFont: '#FFFFFF'
      }
    },
  },
  plugins: [],
};
export default config;

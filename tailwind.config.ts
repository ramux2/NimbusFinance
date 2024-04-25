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
        primaryColor: '#792D1D',
        backgroundGray: '#F4F5F7'
      },
      textColor: {
        whiteFont: '#FFFFFF',
        defaultBlackFont: '#191919',
        grayZeroThree: '#9F9F9F',
        grayZeroTwo: '#878787',
        specialGreen: '#4DAF6E',
        specialRed: '#E73D1C'
      }
    },
  },
  plugins: [],
};
export default config;

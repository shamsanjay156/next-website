import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#FFFFFF",
        primary: "#1F3563",
        primaryGrey: "#99999A",
        primaryGold: "#D29F13",
        secondaryGrey: "#8D8D8B",
        profilebg: "rgba(8, 18, 37, 0.20)",
        commonBg: "#F7F8FF",
        greyButton: "#D0DEEB",
        authHomeBg: "#EBF3EE",
        rejected: "#EB5757",
        underProcess: "#F2C94C",
        approved: "#27AE60",
      },
    },
  },
  plugins: [],
};
export default config;

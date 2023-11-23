import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "footer-color": "#0390CB",
        "footer-white": "rgba(255,255,255,0.7)",
        "footer-last": "#0170B9",
      },
      backgroundImage: {
        "boxes-amazon": "url('/background/banner-section1.png')",
        section3: "url('/background/bg-section3.svg')",
        section5: "url('/background/bg-section5.svg')",
      },
    },
  },
  plugins: [],
};
export default config;

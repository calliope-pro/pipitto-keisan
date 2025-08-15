import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rounded: ["ui-rounded", "system-ui", "Arial Rounded MT Bold", "Hiragino Maru Gothic ProN", "Yu Gothic UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
};
export default config;

import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          layout: {
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
          },
          colors: {
            content2: "#f4f7fb",
            foreground: "#3A4E79",
            background: {
              foreground: "#3A4E79",
            },
            default: {
              foreground: "#3A4E79",
            },
            primary: {
              50: "#e5efff",
              100: "#bdcef7",
              200: "#94adec",
              300: "#6b8de1",
              400: "#426cd7",
              500: "#2852bd",
              600: "#1d4094",
              700: "#132e6b",
              800: "#071b43",
              900: "#00091c",
              DEFAULT: "#45D9D9",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          layout: {
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
          },
          colors: {
            content1: "#323640",
            content2: "#242831",
            background: {
              DEFAULT: "#323640",
            },
            default: {
              DEFAULT: "#4a4b5b",
              100: "#23262d",
              200: "#585864",
              400: "#868698",
            },
            primary: {
              50: "#e5efff",
              100: "#bdcef7",
              200: "#94adec",
              300: "#6b8de1",
              400: "#426cd7",
              500: "#2852bd",
              600: "#1d4094",
              700: "#132e6b",
              800: "#071b43",
              900: "#00091c",
              DEFAULT: "#45D9D9",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
};

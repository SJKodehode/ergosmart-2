// tailwind.config.js
import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: { extend: {} },
  plugins: [
    heroui({
  "themes": {
    "light": {
      "colors": {
        "default": {
          "50": "#fafafa",
          "100": "#f2f2f3",
          "200": "#ebebec",
          "300": "#e3e3e6",
          "400": "#dcdcdf",
          "500": "#d4d4d8",
          "600": "#afafb2",
          "700": "#8a8a8c",
          "800": "#656567",
          "900": "#404041",
          "foreground": "#000",
          "DEFAULT": "#d4d4d8"
        },
        "primary": {
          "50": "#eff8e5",
          "100": "#d9efc2",
          "200": "#c3e59e",
          "300": "#addc7a",
          "400": "#97d256",
          "500": "#81c932",
          "600": "#6aa629",
          "700": "#548321",
          "800": "#3d5f18",
          "900": "#273c0f",
          "foreground": "#000",
          "DEFAULT": "#81c932"
        },
        "secondary": {
          "50": "#e8f4ff",
          "100": "#c8e6ff",
          "200": "#a8d7ff",
          "300": "#87c8ff",
          "400": "#67b9ff",
          "500": "#47aaff",
          "600": "#3b8cd2",
          "700": "#2e6fa6",
          "800": "#225179",
          "900": "#15334d",
          "foreground": "#000",
          "DEFAULT": "#47aaff"
        },
        "success": {
          "50": "#e4fbee",
          "100": "#bff5d6",
          "200": "#9aefbe",
          "300": "#75e9a7",
          "400": "#4fe38f",
          "500": "#2add77",
          "600": "#23b662",
          "700": "#1b904d",
          "800": "#146939",
          "900": "#0d4224",
          "foreground": "#000",
          "DEFAULT": "#2add77"
        },
        "warning": {
          "50": "#fef4e4",
          "100": "#fce4bd",
          "200": "#fad497",
          "300": "#f9c571",
          "400": "#f7b54a",
          "500": "#f5a524",
          "600": "#ca881e",
          "700": "#9f6b17",
          "800": "#744e11",
          "900": "#4a320b",
          "foreground": "#000",
          "DEFAULT": "#f5a524"
        },
        "danger": {
          "50": "#fee1eb",
          "100": "#fbb8cf",
          "200": "#f98eb3",
          "300": "#f76598",
          "400": "#f53b7c",
          "500": "#f31260",
          "600": "#c80f4f",
          "700": "#9e0c3e",
          "800": "#73092e",
          "900": "#49051d",
          "foreground": "#000",
          "DEFAULT": "#f31260"
        },
        "background": "#e5e3dc",
        "foreground": {
          "50": "#dfdfdf",
          "100": "#b3b3b3",
          "200": "#868686",
          "300": "#595959",
          "400": "#2d2d2d",
          "500": "#000000",
          "600": "#000000",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000",
          "foreground": "#fff",
          "DEFAULT": "#153203"
        },
        "content1": {
          "DEFAULT": "#ffffff",
          "foreground": "#000"
        },
        "content2": {
          "DEFAULT": "#f4f4f5",
          "foreground": "#000"
        },
        "content3": {
          "DEFAULT": "#e4e4e7",
          "foreground": "#000"
        },
        "content4": {
          "DEFAULT": "#d4d4d8",
          "foreground": "#000"
        },
        "focus": "#006FEE",
        "overlay": "#000000",
        "divider": "#111111"
      }
    },
    "dark": {
      "colors": {
        "default": {
          "50": "#131315",
          "100": "#1e1e21",
          "200": "#29292e",
          "300": "#34343a",
          "400": "#3f3f46",
          "500": "#616166",
          "600": "#828287",
          "700": "#a4a4a7",
          "800": "#c5c5c8",
          "900": "#e7e7e8",
          "foreground": "#fff",
          "DEFAULT": "#3f3f46"
        },
        "primary": {
          "50": "#273c0f",
          "100": "#3d5f18",
          "200": "#548321",
          "300": "#6aa629",
          "400": "#81c932",
          "500": "#97d256",
          "600": "#addc7a",
          "700": "#c3e59e",
          "800": "#d9efc2",
          "900": "#eff8e5",
          "foreground": "#000",
          "DEFAULT": "#81c932"
        },
        "secondary": {
          "50": "#15334d",
          "100": "#225179",
          "200": "#2e6fa6",
          "300": "#3b8cd2",
          "400": "#47aaff",
          "500": "#67b9ff",
          "600": "#87c8ff",
          "700": "#a8d7ff",
          "800": "#c8e6ff",
          "900": "#e8f4ff",
          "foreground": "#000",
          "DEFAULT": "#47aaff"
        },
        "success": {
          "50": "#0d4224",
          "100": "#146939",
          "200": "#1b904d",
          "300": "#23b662",
          "400": "#2add77",
          "500": "#4fe38f",
          "600": "#75e9a7",
          "700": "#9aefbe",
          "800": "#bff5d6",
          "900": "#e4fbee",
          "foreground": "#000",
          "DEFAULT": "#2add77"
        },
        "warning": {
          "50": "#4a320b",
          "100": "#744e11",
          "200": "#9f6b17",
          "300": "#ca881e",
          "400": "#f5a524",
          "500": "#f7b54a",
          "600": "#f9c571",
          "700": "#fad497",
          "800": "#fce4bd",
          "900": "#fef4e4",
          "foreground": "#000",
          "DEFAULT": "#f5a524"
        },
        "danger": {
          "50": "#49051d",
          "100": "#73092e",
          "200": "#9e0c3e",
          "300": "#c80f4f",
          "400": "#f31260",
          "500": "#f53b7c",
          "600": "#f76598",
          "700": "#f98eb3",
          "800": "#fbb8cf",
          "900": "#fee1eb",
          "foreground": "#000",
          "DEFAULT": "#f31260"
        },
        "background": "#153203",
        "foreground": {
          "50": "#4d4d4d",
          "100": "#797979",
          "200": "#a6a6a6",
          "300": "#d2d2d2",
          "400": "#ffffff",
          "500": "#ffffff",
          "600": "#ffffff",
          "700": "#ffffff",
          "800": "#ffffff",
          "900": "#ffffff",
          "foreground": "#000",
          "DEFAULT": "#ffffff"
        },
        "content1": {
          "DEFAULT": "#18181b",
          "foreground": "#fff"
        },
        "content2": {
          "DEFAULT": "#27272a",
          "foreground": "#fff"
        },
        "content3": {
          "DEFAULT": "#3f3f46",
          "foreground": "#fff"
        },
        "content4": {
          "DEFAULT": "#52525b",
          "foreground": "#fff"
        },
        "focus": "#006FEE",
        "overlay": "#ffffff",
        "divider": "#ffffff"
      }
    }
  },
  "layout": {
    "fontSize": {
      "tiny": "0.75rem",
      "small": "0.875rem",
      "medium": "1rem",
      "large": "1.125rem"
    },
    "lineHeight": {
      "tiny": "1rem",
      "small": "1.25rem",
      "medium": "1.5rem",
      "large": "1.75rem"
    },
    "radius": {
      "small": "0.5rem",
      "medium": "0.75rem",
      "large": "0.875rem"
    },
    "borderWidth": {
      "small": "1px",
      "medium": "2px",
      "large": "3px"
    },
    "disabledOpacity": "0.5",
    "dividerWeight": "1",
    "hoverOpacity": "0.9"
  }
}),
  ],
};


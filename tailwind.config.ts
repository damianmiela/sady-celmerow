import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FEFDFB",
          100: "#FAF7F2",
          200: "#F5F0E8",
          300: "#EBE4D6",
        },
        sage: {
          50: "#F0F5EE",
          100: "#DCE8D8",
          200: "#B8D1AF",
          300: "#8FB882",
          400: "#6A9E5B",
          500: "#4A7C59",
          600: "#3B6347",
          700: "#2D4A35",
          800: "#1F3224",
          900: "#111A13",
        },
        bark: {
          100: "#E8DFD0",
          200: "#C4B8A5",
          300: "#A09279",
          400: "#7D6D52",
          500: "#5C4033",
          600: "#463024",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;

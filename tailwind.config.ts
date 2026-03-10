import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1200px"
      }
    },
    extend: {
      colors: {
        brand: {
          50: "#F8EFE6",
          100: "#EACDA9",
          300: "#E8B45E",
          500: "#C87928",
          700: "#87521E",
          base: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"]
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.9rem",
        lg: "1.25rem",
        xl: "1.75rem"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(135, 82, 30, 0.08)",
        card: "0 8px 28px rgba(52, 30, 10, 0.08)"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem"
      }
    }
  },
  plugins: []
};

export default config;

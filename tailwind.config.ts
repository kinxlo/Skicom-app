/* eslint-disable unicorn/prefer-module */
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      //   center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "chart-1": "hsl(var(--chart-1))",
        "chart-2": "hsl(var(--chart-2))",
        "chart-3": "hsl(var(--chart-3))",
        "chart-4": "hsl(var(--chart-4))",
        "chart-5": "hsl(var(--chart-5))",
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        "high-blue": "hsl(var(--high-blue))",
        "mid-blue": "hsl(var(--mid-blue))",
        "low-blue": "hsl(var(--low-blue))",
        "high-danger": "hsl(var(--high-danger))",
        "mid-danger": "hsl(var(--mid-danger))",
        "low-danger": "hsl(var(--low-danger))",
        "high-warning": "hsl(var(--high-warning))",
        "mid-warning": "hsl(var(--mid-warning))",
        "low-warning": "hsl(var(--low-warning))",
        "high-success": "hsl(var(--high-success))",
        "mid-success": "hsl(var(--mid-success))",
        "low-success": "hsl(var(--low-success))",
        "high-grey-III": "hsl(var(--high-grey-III))",
        "mid-grey-III": "hsl(var(--mid-grey-III))",
        "low-grey-III": "hsl(var(--low-grey-III))",
        "high-grey-II": "hsl(var(--high-grey-II))",
        "mid-grey-II": "hsl(var(--mid-grey-II))",
        "low-grey-II": "hsl(var(--low-grey-II))",
        "high-grey-I": "hsl(var(--high-grey-I))",
        "mid-grey-I": "hsl(var(--mid-grey-I))",
        "low-grey-I": "hsl(var(--low-grey-I))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        spread: "0px 1px 18px 0px #0A39B01F",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        sway: {},
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    require("@mertasan/tailwindcss-variables"),
  ],
} satisfies Config;

export default config;

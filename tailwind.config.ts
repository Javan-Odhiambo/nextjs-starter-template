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
        // Primary Colors
        "primary-app-bg": "rgb(var(--primary-1) / <alpha-value>)",
        "primary-subtle-bg": "rgb(var(--primary-2) / <alpha-value>)",
        "primary-element-bg": "rgb(var(--primary-3) / <alpha-value>)",
        "primary-hover-bg": "rgb(var(--primary-4) / <alpha-value>)",
        "primary-active-bg": "rgb(var(--primary-5) / <alpha-value>)",
        "primary-border": "rgb(var(--primary-6) / <alpha-value>)",
        "primary-element-border": "rgb(var(--primary-7) / <alpha-value>)",
        "primary-hover-border": "rgb(var(--primary-8) / <alpha-value>)",
        "primary-solid-bg": "rgb(var(--primary-9) / <alpha-value>)",
        "primary-hover-solid-bg": "rgb(var(--primary-10) / <alpha-value>)",
        "primary-low-constrast-text": "rgb(var(--primary-11) / <alpha-value>)",
        "primary-high-contrast-text": "rgb(var(--primary-12) / <alpha-value>)",

        // Secondary Colors
        "secondary-app-bg": "rgb(var(--secondary-1) / <alpha-value>)",
        "secondary-subtle-bg": "rgb(var(--secondary-2) / <alpha-value>)",
        "secondary-element-bg": "rgb(var(--secondary-3) / <alpha-value>)",
        "secondary-hover-bg": "rgb(var(--secondary-4) / <alpha-value>)",
        "secondary-active-bg": "rgb(var(--secondary-5) / <alpha-value>)",
        "secondary-border": "rgb(var(--secondary-6) / <alpha-value>)",
        "secondary-element-border": "rgb(var(--secondary-7) / <alpha-value>)",
        "secondary-hover-border": "rgb(var(--secondary-8) / <alpha-value>)",
        "secondary-solid-bg": "rgb(var(--secondary-9) / <alpha-value>)",
        "secondary-hover-solid-bg": "rgb(var(--secondary-10) / <alpha-value>)",
        "secondary-low-constrast-text": "rgb(var(--secondary-11) / <alpha-value>)",
        "secondary-high-contrast-text": "rgb(var(--secondary-12) / <alpha-value>)",

        // Tertiary Colors
        "tertiary-app-bg": "rgb(var(--tertiary-1) / <alpha-value>)",
        "tertiary-subtle-bg": "rgb(var(--tertiary-2) / <alpha-value>)",
        "tertiary-element-bg": "rgb(var(--tertiary-3) / <alpha-value>)",
        "tertiary-hover-bg": "rgb(var(--tertiary-4) / <alpha-value>)",
        "tertiary-active-bg": "rgb(var(--tertiary-5) / <alpha-value>)",
        "tertiary-border": "rgb(var(--tertiary-6) / <alpha-value>)",
        "tertiary-element-border": "rgb(var(--tertiary-7) / <alpha-value>)",
        "tertiary-hover-border": "rgb(var(--tertiary-8) / <alpha-value>)",
        "tertiary-solid-bg": "rgb(var(--tertiary-9) / <alpha-value>)",
        "tertiary-hover-solid-bg": "rgb(var(--tertiary-10) / <alpha-value>)",
        "tertiary-low-constrast-text": "rgb(var(--tertiary-11) / <alpha-value>)",
        "tertiary-high-contrast-text": "rgb(var(--tertiary-12) / <alpha-value>)",

        // Error and Success Colors
        "error": "rgb(var(--error-color) / <alpha-value>)",
        "success": "rgb(var(--success-color) / <alpha-value>)",
        "error-container": "rgb(var(--error-container) / <alpha-value>)",
        "success-container": "rgb(var(--success-container) / <alpha-value>)",
        "on-error": "rgb(var(--on-error-color) / <alpha-value>)",
        "on-success": "rgb(var(--on-success-color) / <alpha-value>)",
        "on-error-container": "rgb(var(--on-error-container) / <alpha-value>)",
        "on-success-container": "rgb(var(--on-success-container) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      {
        promatcon: {
          "primary": "#12538b",
          "primary-content": "#ffffff",
          "secondary": "#02c05e",
          "secondary-content": "#ffffff",
          "accent": "#fece14",
          "accent-content": "#111827",
          "neutral": "#1f2937",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          "base-content": "#0f172a",
          "info": "#0284c7",
          "info-content": "#ffffff",
          "success": "#02c05e",
          "success-content": "#ffffff",
          "warning": "#d97706",
          "warning-content": "#ffffff",
          "error": "#dc2626",
          "error-content": "#ffffff",
        },
      },
    ],
  },
}


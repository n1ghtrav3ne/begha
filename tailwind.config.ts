import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#FFFFFF",
      primary: '#09D374',
      surface: {
        30: '#FBFBFB',
        50: "#F1F1F1",
        100: "#DFDFDF",
        200: '#FBFBFB',
        300: '#C6C6C6',
        400: '#A5A5A5',
        500: '#7E7E7E',
        600: '#0B0B0B',
      },
      secondary: {
        400: "#B5D9FB"
      },
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      error: "#ef4444",
      red: "#DB2929"
    },
    fontFamily: {
      yakan: ['"yekan-regular"', '"yekan-bold"'],
      peyda: ['"peyda.regular"', '"peyda-bold"'],
    },
  },
  plugins: [],
} satisfies Config


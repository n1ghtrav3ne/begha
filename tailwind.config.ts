
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
    extend: {
      fontSize: {
        tiny: '11px',
        '22': '22px'
      },
      height: {
        '64': '254px',
        '28': '114px'
      },
      top: {
        '14': '54px'
      },
      rounded: {
        '4': '4px'
      }
    },
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
      primary: {
        50: "#fbfffd",
        100: "#eefef6",
        200: "#d8fdec",
        300: "#b9fcdd",
        400: "#92faca",
        500: "#62f8b2",
        600: "#29f697",
        700: "#09d374",
        800: "#057943",
        900: "#034325",
      },
      secondary: {
        50: '#fcfdff',
        100: '#f3f9fe',
        200: '#e4f1fe',
        300: '#d0e7fd',
        400: '#b5d9fb',
        500: '#95c9f9',
        600: '#6eb5f7',
        700: '#429ff5',
        800: '#08569e',
        900: '#04294c',
      },
      neutral: {
        50: '#fbfbfb',
        100: '#f1f1f1',
        200: '#dfdfdf',
        300: '#c6c6c6',
        400: '#a5a5a5',
        500: '#7e7e7e',
        600: '#4f4f4f',
        700: '#1a1a1a',
        800: '#0b0b0b',
        900: '#030303',
      },
      error: {
        50: '#fefcfc',
        100: '#fdf2f2',
        200: '#fae1e1',
        300: '#f6caca',
        400: '#f1acac',
        500: '#eb8787',
        600: '#e35b5b',
        700: '#db2929',
        800: '#7b1515',
        900: '#3f0b0b',
      },
      success: {
        50: '#fbfefc',
        100: '#f0fcf3',
        200: '#dcf9e3',
        300: '#c2f4cd',
        400: '#9fedb1',
        500: '#75e68f',
        600: '#43dd67',
        700: '#22b945',
        800: '#136a28',
        900: '#0b3b16'
      },
      warning: {
        50: '#fffefb',
        100: '#fffbf0',
        200: '#fff5dc',
        300: '#feeec1',
        400: '#fee59e',
        500: '#fed974',
        600: '#fdcb42',
        700: '#fdbb08',
        800: '#8e6901',
        900: '#493601',
        950: '#322501',
      }
    },
    fontFamily: {
      yakan: ['"yekan-regular"', '"yekan-bold"'],
      peyda: ['"peyda.regular"', '"peyda-bold"'],
    },
  },
  plugins: [],
}

// transparent: "transparent",
// current: "currentColor",
// inherit: "inherit",
// white: "#FFFFFF",

// orange: '#FEBC09',
// "blue-light": '#1fb6ff',
// purple: '#7e5bef',
// pink: '#ff49db',
// green: '#22B945',
// yellow: '#ffc82c',
// 'gray-dark': '#273444',
// 'gray': '#8492a6',
// 'gray-light': '#d3dce6',
// error: "#ef4444",
// red: "#DB2929"
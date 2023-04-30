import type { Config } from 'tailwindcss'

const { createThemes } = require('tw-colors')

export default {
  content: [
    "./app.vue",
    "./layouts/**/*.{vue,ts,md}",
    "./pages/**/*.{vue,ts,md}",
    "./components/**/*.{vue,ts,md}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000'
    },
    fontFamily: {
      'display': ['Unbounded', 'sans-serif'],
      'body': ["'DM Sans'", 'sans-serif'],
      'mono': ["'DM Mono'", 'monaco']
    },
    extend: {
      boxShadow: ({ theme }) => ({
        'flat': '8px 8px 0 rgba(40, 40, 40, .25)'
      }),
    },
  },
  plugins: [
    createThemes({
      'greenpink': {
        primary: {
          500: 'hsla(342, 100%, 88%, 100)',
          900: 'hsla(342, 58%, 53%, 100)'
        },
        secondary: {
          500: 'hsla(169, 53%, 25%, 100)',
          900: 'hsla(169, 68%, 17%, 100)',
        },
      }
    })
  ],
} satisfies Config


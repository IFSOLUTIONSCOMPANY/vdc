/** @type {import('tailwindcss').Config} */

const daisyui = require('daisyui')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#217851",

          "secondary": "#96BB7C",

          "accent": "#FAD586",

          "neutral": "#C64756",

          "base-100": "#000000",

          "info": "#0000ff",

          "success": "#00ff00",

          "warning": "#00ff00",

          "error": "#ff0000",
        },
      },
    ],
  },
}


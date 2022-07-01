const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './elements/**/*.{js,ts,jsx,tsx}'],
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
        },
        colors: {
          blue: colors.blue,
          gray: colors.gray,
          red: colors.red
        },
        fontFamily: {
          // sans: ['Graphik', 'sans-serif'],
          // serif: ['Merriweather', 'serif']
      },
      extend: {}
    },
    plugins: []
}

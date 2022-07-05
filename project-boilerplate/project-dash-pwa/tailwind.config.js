const config = require('configs-front/config/tail')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './elements/**/*.{js,ts,jsx,tsx}'],
    theme: config.theme,
    plugins: []
}

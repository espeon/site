module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault:true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './public/nfl-235.js'],
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
    fontFamily: {
      'sans': ['Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      'serif': ['Georgia', 'Cambria'],
      'mono': ['Menlo','Monaco','Consolas','Liberation Mono','Courier New','monospace'],
    }
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'responsive', 'hover', 'focus'],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder', 'responsive', 'hover', 'focus']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ]
}
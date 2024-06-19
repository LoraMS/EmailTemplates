/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('tailwindcss-preset-email'),
  ],
  theme: {
    screens: {
      'xxl': {max: '1536px'},
      'xl': {max: '1285px'},
      'lg': {max: '1025px'},
      'md': {max: '768px'},
      'sm': {max: '601px'},
      'xs': {max: '426px'},
      'xxs': {max: '376px'},
    }
  }
}

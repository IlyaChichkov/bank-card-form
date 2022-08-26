/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './src/**/*.{ts,vue,css,js}'
  ],
  theme: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      },
    extend: {
        borderWidth:{
            '1': '1px'
        },
        colors: {
            'red': '#FF5252FF',
            'white': '#FFFFFFFF',
            'light-violet': '#DEDDDFFF',
            'violet': '#8E8593FF',
            'dark-violet': '#21092FFF',
            'gd-main': '#6448FEFF',
            'gd-sec': '#600594FF',
        },
    },
  },
  plugins: [],
}

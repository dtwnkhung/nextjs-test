/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-50': 'rgba(255,255,255,0.5)',
      'primary': '#5C81FB',
      'primary-dark': '#273172',
      'secondary': '#EDD695',
      'light': '#F5F5F5',
      'dark': {
        500: '#777777',
        600: '#212121',
        700: '#484848',
        800: '#2E2E2E',
        900: '#1E1E1E',
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
      xl: '1rem',
    },
    extend: {
      fontFamily: {
        buljirya: ["Buljirya"],
        bellisya: ["Bellisya"],
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1900px',
      },
      flex: {
        '0-scroll': '0 0 auto'
      },
      backgroundImage: {
        'feedback-bg': "url('../assets/image/feedback-bg.png')",
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      brightness: {
        100: '100',
      },
    },
  },
  plugins: [],
}

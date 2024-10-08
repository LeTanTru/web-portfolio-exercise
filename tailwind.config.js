/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3'
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '460px',
        'custom-xmd': '1000px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')"
      },
      zIndex: {
        1: '1',
        2: '2',
        5: '5',
        999: '999'
      },
      transform: {
        'custom-rotate': 'rotateX(35deg) rotateY(-45deg)'
      }
    }
  },
  plugins: []
};

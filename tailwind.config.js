/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'press-start': ['"Press Start 2P"', 'system-ui']
    },
    extend: {
      keyframes: {
        slideLeft: {
          '50%': {transform: 'translateX(-5px)'},
          '100%': {transform: 'translateX(0)'},
        },
        slideRight: {
          '50%': {transform: 'translateX(5px)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-in-out infinite',
        slideRight: 'slideRight 1s ease-in-out infinite'
      },
      
    },
  },
  plugins: [],
}


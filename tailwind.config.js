/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: '0',
            filter: 'blur(5px)',
          },
          '70%': {
            transform: 'translateX(10%)',
            opacity: '0.7',
            filter: 'blur(1px)',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        slideInFromRight: {
          '0%': {
            transform: 'translateX(50%)',
            opacity: '0',
            filter: 'blur(5px)',
          },
          '70%': {
            transform: 'translateX(-10%)',
            opacity: '0.7',
            filter: 'blur(1px)',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        aboutSession: {
          from: { opacity: '0', filter: 'blur(30px)' },
          to: { opacity: '1', filter: 'blur(0)' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out forwards',
        slideInFromRight: 'slideInFromRight 0.5s ease-out forwards',
        aboutSession: 'aboutSession 0.5s ease-out forwards',
      },
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, #00a, #333)',
      },
      fontFamily: {
        dos: ["'DOSFont'", 'monospace'],
      },
    },
  },
  plugins: [],
};

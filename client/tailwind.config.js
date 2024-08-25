/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'fadeIn': 'fadeIn 2s ease-in forwards',
        'slideUp': 'slideUp 2s ease-out forwards',
        bounceBall: 'bounceBall 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        bounceBall: {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-in',
          },
          '50%': {
            transform: 'translateY(-100px)',
            animationTimingFunction: 'ease-out',
          },
        },
      },
    },
  },
  plugins: [],
}
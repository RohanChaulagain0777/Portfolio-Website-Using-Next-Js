
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'scroll-left': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee':         'scroll-left 18s linear infinite',
        'marquee-slow':    'scroll-left 30s linear infinite',
        'marquee-fast':    'scroll-left 10s linear infinite',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      clipPath: {
        'polygon-1': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        'polygon-2': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcefdc',
          200: '#bfe0bf',
          300: '#93cc93',
          400: '#65b365',
          500: '#47a347',
          600: '#2e7d32', // Primary green
          700: '#276a2a',
          800: '#235c26',
          900: '#1d4d20',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,php}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E90FF',
        blueGray: '#87CEEB',
      },
    },
  },
  plugins: [],
};

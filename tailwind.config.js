/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins','sans-serif']
      },
      colors: {
        'white': {
          '50': '#FFFFFF',
          '100': '#F8FBFF',
          '200': '#FDFEFF',
          '300': '#f5f6fa',
        },
      },
      boxShadow: {
          'card': `0px 0px 50px -20px rgba(0, 0, 0, 0.2)`,
      }
    },
  },
  plugins: [],
}

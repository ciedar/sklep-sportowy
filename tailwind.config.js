/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
          screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1744px'
    },

  height: {
    xl: '500px'
  },
      backgroundImage: {
        'hero-image': "url('src/images/Rectangle 1.png')"
      }
    },
  },
  plugins: [],
}
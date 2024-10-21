/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
          screens: {
      sm: '480px',
      smd: '660px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1600px'
    },
    fontFamily: {
      // heading: ['Bebas Neue', 'sans-serif'],
      text: ['Inter', 'sans-serif']
    },

  height: {
    xl: '500px'
  },
      backgroundImage: {
        'hero-image': "url('src/images/Rectangle 1.png')",
        'banner-image': "url('src/images/img.png')",
        'about-image': "url('src/images/Dale.png')",
        'mevka-one': "url('src/images/Rectangle 4.png')",
        'mevka-two': "url('src/images/Rectangle 19.png')",
        'mevka-three': "url('src/images/Rectangle 20.png')",
        'new-gero': "url('src/images/image.avif')",
      }
    },
    
  },
  plugins: [],
}

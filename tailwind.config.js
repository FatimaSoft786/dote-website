module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      screens: {
        sm: '375px',
        // => @media (min-width: 640px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
        backgroundImage: { 'background': "url('/src/images/Bg.png')"},
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          noto: ['Noto+Naskh+Arabic','sans-serif']
        },
        fontSize: {
          'header': '1rem'
        },
        fontWeight: {
          regular: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800
        },
        colors: {
          'primary': '#FF5B60',
          'secondary': '#1AAFAFAF',
          'bg': '#FBFDFF',
          'green': '#1ED700',
          'purple': '#9858FF',
          'black1': '#141E3E',
          'blue': '#3D70F3',
          'gray': '#667080'
           
        },
        direction: {
          rtl: 'rtl',
          ltr: 'ltr',
        },
      }
    },
    plugins: [],
  }
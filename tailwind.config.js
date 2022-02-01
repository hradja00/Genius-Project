module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@themesberg/flowbite/**/*.js',
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
      // ...
      borderColor: ['focus-visible', 'first'],
      // ...
      textColor: ['visited', 'group-hover'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
      },
      screens: {
        '3xl': '2000px',
      },
      spacing: {},
    },
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      huge: '2560px',
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@themesberg/flowbite/plugin'),
  ],
};

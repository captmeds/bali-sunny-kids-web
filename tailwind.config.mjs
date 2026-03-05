/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sunny: {
          yellow: '#FFD23F',
          blue: '#4CC9F0',
          green: '#72B01D',
          cream: '#FFFDF5',
          charcoal: '#2D3142',
        },
      },
      fontFamily: {
        heading: ['"Fredoka"', 'sans-serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

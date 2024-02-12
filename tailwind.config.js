/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'container': '1360px',
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'pop': ['Poppins'],      },
      colors: {
        'primary': '#0C2B57',
        'secondary': '#ED1C24',
      },
      clipPath: {
        mypolygon:  "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);"
    }
    },
  },
  plugins: [require('tailwind-clip-path')],
}


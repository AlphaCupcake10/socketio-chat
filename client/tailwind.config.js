/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#46C598',
        background: '#262A29',
        background2: '#1A1D1C',
        text: '#F0FFF9',
      }
    },
  },
  plugins: [],
}

//https://www.realtimecolors.com/?colors=f0fff9-1a1d1c-46c598-46C598-46C598&fonts=Poppins-Poppins
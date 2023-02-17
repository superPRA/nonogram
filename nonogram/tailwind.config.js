/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-12': 'span 12 / span 12',
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f59e0b",

          secondary: "#4b5563",

          accent: "#e7e5e4",

          neutral: "#1D191F",

          "base-100": "#374151",

          info: "#5DD1F4",

          success: "#62DA90",

          warning: "#E5BE10",

          error: "#E73C5B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

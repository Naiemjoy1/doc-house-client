/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: "'Source Sans 3', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#07332F",
          secondary: "F7A582",
          accent: "#E11244",
          neutral: "#343434",
        },
      },
      "light",
      "synthwave",
    ],
  },
};

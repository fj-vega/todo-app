/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Dancing Script"],
      serif: ["IBM Plex Serif"]
    },
    extend: {
      backgroundImage: {
        table: "url('/img/table.jpg')",
      },
    },
  },
  plugins: [],
};

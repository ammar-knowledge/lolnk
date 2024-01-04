/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linearbackground: "var(--linearbackground)",
        linearcloud: "var(--linearcloud)",
        "lineardark-black": "var(--lineardark-black)",
        "lineardark-blue": "var(--lineardark-blue)",
        "lineardark-mud": "var(--lineardark-mud)",
        lineargreen: "var(--lineargreen)",
        lineargrey: "var(--lineargrey)",
        linearred: "var(--linearred)",
        "linearred-orange": "var(--linearred-orange)",
        linearwhite: "var(--linearwhite)",
      },
      boxShadow: {
        "drop-shadow-black": "var(--drop-shadow-black)",
      },
    },
  },
  plugins: [],
};

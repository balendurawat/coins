module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mf: "990px",
      },
      backgroundImage: {
        "bg-1": "url(../public/bg-1.jpg)",
        "bg-2": "url(../public/bg-2.jpg)",
      },
    },
  },
  plugins: [],
};

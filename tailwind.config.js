/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#7E91B4",
      secondaryColor: "#ECDEC5",
      accentColor: "#385FAD",
      textColor: "#120D02",
      backgroundColor1: "#FFFFFF",
      backgroundColor2: "#EDEDED",
      backgroundColor3: "#D9D9D9",
    },
    extend: {},
  },
  plugins: [],
};

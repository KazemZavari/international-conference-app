/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1336px",
      },
      // screens: {
      //   "2xl": { max: "1535px" },
      //   xl: { max: "1279px" },
      //   lg: { max: "1023px" },
      //   md: { max: "767px" },
      //   sm: { max: "639px" },
      // },
    },

    extend: {},
  },
  plugins: [
		require("tailwindcss-animate"),
		// ...
	],
};

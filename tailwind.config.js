/** @type {import('tailwindcss').Config} */
 
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  lightMode: "class",
  theme: {
    screens: {
      "3xl": { max: "1650px" },
      "2xl": { max: "1520px" },
      xl: { max: "1380px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "600px" },
      xs: { max: "340px" },
    },
    fontFamily: {
      Roboto: ["roboto"],

      Raleway: ["Raleway"],
      RalewayBold: ["RalewayBold"],

      OpenSansLight: ["OpenSans-Light"],
      OpenSansMedium: ["OpenSans-Medium"],
      OpenSansRegular: ["OpenSans-Regular"],

      OswaldMedium: ["Oswald-Medium"],
      OswaldBold: ["Oswald-Bold"],
      OswaldRegular: ["Oswald-Regular"],
    },
  },

  extend: {
    backgroundImage: {
      laptap: "url('./src/assets/img/pic-7.jpg')",
      // tablet: "url('./assets/images/bg66.jpg')",
      // mobile2: "url('./assets/images/bg33.jpg')",
      // mobile: "url('./assets/images/bg44.jpg')",
      // contactbg: "url('./assets/images/b2.jpg')",
    },
    transitionDuration: {
      1500: "1500ms",
    },
    
  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};

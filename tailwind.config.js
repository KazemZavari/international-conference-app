/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //   screens: {
    //     'sm': '575px',
    //     // => @media (min-width: 640px) { ... }

    //     'md': '768px',
    //     // => @media (min-width: 768px) { ... }

    //     'lg': '1024px',
    //     // => @media (min-width: 1024px) { ... }

    //     'xl': '1280px',
    //     // => @media (min-width: 1280px) { ... }

    //     '2xl': '1536px',
    //     // => @media (min-width: 1536px) { ... }
    //   }
    // },
    // screens: {
    //   xs: "320px",
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1336px",
    // },
    screens: {
      "2xl": { max: "1535px" },
      "xl": { max: "1440px" },
      "lg": { max: "1023px" },
      "md": { max: "767px" },
      "sm": { max: "600px"},
      "xs": { max: "320px" },
    },
  },

  extend: {
    transitionDuration: {
      1500: "1500ms",
    },
  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};

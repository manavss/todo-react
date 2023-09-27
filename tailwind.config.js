/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
      },
      screens: {
        xs: "370px",
      },
      backgroundImage: {
        // mobile
        "mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
        "mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
        // desktop
        "desktop-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
      },
      colors: {
        primary: {
          "bright-blue": "hsl(220, 98%, 61%)",
        },
        dark: {
          "very-dark-blue": "hsl(235, 21%, 11%)",
          "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
          "light-grayish-blue": "hsl(234, 39%, 85%)",
          "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
          "dark-grayish-blue": "hsl(234, 11%, 52%)",
          "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
          "very-dark-grayish-blue-2": "hsl(237, 14%, 26%)",
        },
        light: {
          "very-light-gray": "hsl(0, 0%, 98%)",
          "very-light-grayish-blue": "hsl(236, 33%, 92%)",
          "light-grayish-blue": "hsl(233, 11%, 84%)",
          "dark-grayish-blue": "hsl(236, 9%, 61%)",
          "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};

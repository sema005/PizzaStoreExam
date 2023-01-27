module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      mobile: { max: "576px" },
      tablet: { min: "577px", max: "970px" },
      desktop: { min: "971px" },
    },
    colors: {
      mainBlue: "#1D448A",
      mainGreen: "#4DD69A",
      vipps: "#FF5B24",
      white: "#FFFFFF",
      black: "#000000",
      darkModeBackGround: "#1c1c1e",
      darkModeElements: "#43436B",
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      podkova: ["Podkova", "serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "45px",
      circle: "100%",
    },
  },
  variants: {},
  plugins: [],
};

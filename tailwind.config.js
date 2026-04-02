/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F27438",
        background: "#FFF9F5",
        surface: "#FFFFFF",
        textMain: "#000000", 
        // Add more as needed based on the theme request:
        // "Terracota/Melocotón" theme suggests warm tones.
        terracota: "#E05A2B",
        peach: "#FFDAB9",
      },
      borderRadius: {
        xl: "24px", 
        // ensure default radii are also available, or override default.
        // User asked: "all containers have borderRadius: 24". 
        // I can use `rounded-xl` or define custom `rounded-card`.
        card: "24px",
      },
      fontFamily: {
        sans: ["PlusJakarta-Regular", "sans-serif"],
        bold: ["PlusJakarta-Bold", "sans-serif"],
        hero: ["LuckiestGuy", "cursive"],
      },
    },
  },
  plugins: [],
}

// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rickBlue: "#00BFFF", // Rick's hair
        mortyYellow: "#FFE100", // Morty's shirt
        portalGreen: "#00FF9F", // Portal color
        galacticPurple: "#6D28D9", // Sci-fi accent
        spaceGray: "#1F1F1F", // Background
        toxicGreen: "#39FF14", // Neon detail
      },
      fontFamily: {
        rick: ['"Orbitron"', "sans-serif"], // Futuristic style
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

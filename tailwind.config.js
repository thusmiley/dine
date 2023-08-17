/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beaver: "#9E7F66",
        coldGray: "#111111",
        mirage: "#17192b",
        ebonyClay: "#242b37",
        shuttleGray: "#5c6779",
      },
      spacing: { container: "var(--container-w)" },
      cx: "calc((100% - var(--container-w)) / 2)",
    },
    screens: {
      ss: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

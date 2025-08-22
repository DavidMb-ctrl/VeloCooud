/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002058",
        primaryAlt: "#001838",
        ink: "#E6F4FF",
        accent: "#98D0E8",
        accent2: "#A0D8F0",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      }
    },
  },
  plugins: [],
};

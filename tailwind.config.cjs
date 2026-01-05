/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#f7f6f2",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px -30px rgba(15, 15, 15, 0.35)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(255, 210, 196, 0.7), transparent 60%), radial-gradient(circle at 80% 0%, rgba(192, 214, 255, 0.7), transparent 45%), radial-gradient(circle at 30% 90%, rgba(233, 226, 255, 0.9), transparent 55%)",
      },
    },
  },
  plugins: [],
};

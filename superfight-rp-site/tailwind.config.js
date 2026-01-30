/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0a1220",
        charcoal: "#0c0f16",
        nova: "#f7d774",
        novaWhite: "#f8f5f0",
        slum: "#7a2bff",
        neonBlue: "#3ecbff",
        steel: "#1a2233"
      },
      fontFamily: {
        display: ["Bebas Neue", "Oswald", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(62, 203, 255, 0.25)",
        gold: "0 0 30px rgba(247, 215, 116, 0.35)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 20% 20%, rgba(62, 203, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 30%, rgba(122, 43, 255, 0.25), transparent 60%)",
        "nova-glow": "radial-gradient(circle at 15% 15%, rgba(247, 215, 116, 0.22), transparent 60%)",
        "slum-glow": "radial-gradient(circle at 20% 20%, rgba(122, 43, 255, 0.2), transparent 60%)"
      }
    }
  },
  plugins: []
};

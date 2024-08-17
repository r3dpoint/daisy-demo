/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        fglight: {
          primary: "#F26722",
          "primary-content": "F7F9FA",
          secondary: "#F7F9FA",
          "secondary-content": "F26722",
          error: "#DB3050",
          "error-content": "FCF2F8",
          "base-100": "#F7F9FA",
          "--rounded-btn": "2px",
        },
      },
      {
        fgdark: {
          primary: "#F26722",
          "primary-content": "1E242A",
          secondary: "#1E242A",
          "secondary-content": "F26722",
          error: "#38050F",
          "error-content": "F15F7B",
          "base-100": "#1E242A",
          "--rounded-btn": "2px",
        },
      },
    ],
  },
};

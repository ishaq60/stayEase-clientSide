import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yeseva": ["Yeseva One", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["luxury", "light", "dark"], // Optional: Set "luxury" as default
  },
};

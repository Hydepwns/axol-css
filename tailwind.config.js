/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightcoral: "#e68476",
        "brand-colors-shadow-blockchain": "#15002e",
        "brand-colors-axol-coral": "#ffcd9c",
        "brand-colors-node-indigo": "#28338b",
        "brand-colors-cryptowave-sky": "#58a1c6",
        "brand-colors-crypto-frost": "#fdfff9",
        lavender: "rgba(242, 232, 255, 0.5)",
        blanchedalmond: "#ffe7ce",
      },
      spacing: {},
      fontFamily: {
        "body-s": "'Plus Jakarta Sans'",
        h5: "Panamera",
      },
      borderRadius: {
        "8981xl": "9000px",
        "81xl": "100px",
        "53xl": "72px",
        lg: "18px",
        "106xl": "125px",
        "77xl": "96px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "45xl": "64px",
      "9xl": "28px",
      "17xl": "36px",
      "sm-9": "13.9px",
      "53xl": "72px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

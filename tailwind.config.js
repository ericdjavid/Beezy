/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'Roboto'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    colors: {
      greybeeliz: "#bdbaba",
      yellowbeeliz: "#FBD160",
      stonebeeliz: "#292524",
    },
    extend: {
      backgroundImage: {
        'blurbeeliz': "url('/assets/rectangle.png')",
        'bundle' : "url('/assets/bundle.png')"
      }
    }
  },
};
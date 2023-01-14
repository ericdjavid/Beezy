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
      'sans': ['ui-sans-serif', 'Robotto'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
};
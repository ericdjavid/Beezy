/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'Robotto'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
};
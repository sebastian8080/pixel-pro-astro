/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Aquí defines tu fuente personalizada
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Puedes añadir otras fuentes si las necesitas, por ejemplo:
        // serif: ['Georgia', 'serif'],
        // mono: ['SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
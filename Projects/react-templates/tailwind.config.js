/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'original': '#86198f',
        'complement': '#64748b',
        'warning': '#dc2626',
        'success': '#22c55e',
        // 'orange': '#ff7849',
        // 'yellow': '#ffc82c',
        // 'gray-dark': '#273444',
        // 'gray': '#8492a6',
        // 'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}


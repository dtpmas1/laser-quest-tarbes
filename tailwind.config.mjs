cat << 'EOF' > tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        laser: {
          dark: '#030712',    // Fond sombre abyssal (slate-950)
          card: '#0f172a',    // Fond des cartes (slate-900)
          cyan: '#06b6d4',    // Cyan néon principal
          magenta: '#ec4899', // Magenta néon secondaire
          neon: '#22d3ee',    // Éclat lumineux
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.4)',
        'neon-magenta': '0 0 25px rgba(236, 72, 153, 0.4)',
      }
    },
  },
  plugins: [],
}
EOF
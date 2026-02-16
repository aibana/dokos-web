/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'primary-dark': '#0e45b5',
        secondary: '#10b981',
        'background-light': '#f6f6f8',
        'background-dark': '#0b0f19',
        'surface-dark': '#151b2b',
        'surface-light': '#ffffff',
        'accent-neon': '#38bdf8',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(19, 91, 236, 0.4)',
        neon: '0 0 10px rgba(56, 189, 248, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

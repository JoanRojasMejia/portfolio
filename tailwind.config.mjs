/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundSize: {
        md: '1400px',
        '100%': '100%'
      },
      backgroundPosition: {
        'position-gradient': 'center top, center bottom'
      },
      backgroundImage: {
        'text-gradient':
          'linear-gradient(90.42deg, #4ab1f1 0.58%,#566cec 37.22%,#d749af 73.87%, #ff7c51 112.26%)',
        'text-sky-gradient': 'linear-gradient(90deg,#80D0F2 0%,#5C82FF 50%,#C480FF 100%)',
        'hover-background': 'linear-gradient(90deg,rgba(30,28,50,0.8) 0%,rgba(43,22,29,0.7) 100%)',
        'dream-gradient': 'linear-gradient(73.19deg,#DC79FF 0%,#256BFA 95.06%);',
        'rainbow-gradient':
          'linear-gradient(90deg,#DC36FA 0%,#A167EF 25%,#609FE4 50%,#3ABFDE 75%,#04D18E 100%)',
        'sunset-gradient': 'linear-gradient(90deg,#F7BE2B 0%,#F537F9 100%)',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        }
      }
    }
  },
  plugins: []
}

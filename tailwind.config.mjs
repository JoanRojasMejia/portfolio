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
        'effect-book':
          'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)',
        'light-book':
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%)'
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
      },
      boxShadow: {
        'box-shadow-book':
          'rgba(0, 0, 0, 0.19) 10px 40px 40px -10px, grey -2px 0px 0px inset, rgb(219, 219, 219) -3px 0px 0px inset, white -4px 0px 0px inset, rgb(219, 219, 219) -5px 0px 0px inset, white -6px 0px 0px inset, rgb(219, 219, 219) -7px 0px 0px inset, white -8px 0px 0px inset, rgb(219, 219, 219) -9px 0px 0px inset',
        'box-shadow-cover':
          'rgba(0, 0, 0, 0.2) 6px 6px 18px -2px, rgba(0, 0, 0, 0.1) 24px 28px 40px -6px',
        'box-shadow-cover-hover':
          'rgba(0, 0, 0, 0.1) 6px 6px 12px -1px, rgba(0, 0, 0, 0.1) 20px 14px 16px -6px'
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        },
        'shine-pulse': {
          '0%': {
            'background-position': '0% 0%'
          },
          '50%': {
            'background-position': '100% 100%'
          },
          to: {
            'background-position': '0% 0%'
          }
        }
      }
    }
  },
  plugins: []
}

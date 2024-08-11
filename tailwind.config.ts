import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['selector'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-sourse-sans-3)',
          ...defaultTheme.fontFamily.sans,
        ],
        logo: [
          'var(--font-shadows-into-light)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        noise: "url('/img/background_noisy.webp')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          to: { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    colors: {
      ...colors,
      black: '#111',
      bg: '#090f16',
      white: '#ffffff',
      cyan: '#b9bcfe',
      yellow: '#f2cb9f',
      transparent: 'transparent',
      current: 'currentColor',
      cyangrey: '#DFE5EC',
      yellowgrey: '#c8c8c3',
      darkgrey: '#1b2227',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      ...defaultTheme.screens,
      '2xl': '64rem',
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
export default config;

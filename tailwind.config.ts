import type { Config } from 'tailwindcss';

const config = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: ['class', '.body--dark'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        accent: {
          DEFAULT: 'var(--accent)',
          orange: 'var(--accent-orange)',
        },
        dark: {
          DEFAULT: 'var(--dark)',
          light: 'var(--dark-light)',
        },
        positive: {
          DEFAULT: 'var(--positive)',
          light: 'var(--positive-light)',
        },
        negative: {
          DEFAULT: 'var(--negative)',
          light: 'var(--negative-light)',
        },
        warning: 'var(--warning)',
        info: 'var(--info)',
        muted: 'var(--muted)',
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
        table: {
          row: 'var(--table-row)',
        },
        gray: {
          DEFAULT: 'var(--gray)',
          light: 'var(--gray-light)',
        },
      },
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
  },
  plugins: [],
} satisfies Config;

export default config;

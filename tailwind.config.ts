import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      serif: ['var(--font-serif)', 'serif'],
      accent: ['var(--font-accent)', 'serif'],
    },
    extend: {
      screens: {
        xs: '420px',
      },
      backgroundImage: {
        'text-grad':
          'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))', // 👈 This is critical
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [animate],
};
export default config;

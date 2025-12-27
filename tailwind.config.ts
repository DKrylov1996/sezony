import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        moss: {
          950: '#0d1f16',
          900: '#14281c',
          800: '#1c3d2d',
          700: '#294a3a',
          600: '#355344',
          500: '#3b5c4c'
        },
        mint: {
          500: '#a3edb9',
          400: '#89d39f',
          300: '#78e599'
        },
        leaf: {
          200: '#e7f9ee'
        }
      },
      fontFamily: {
        sans: ['var(--font-unbounded)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(163, 237, 185, 0.6), 0 0 20px rgba(163, 237, 185, 0.25)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        drift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-12px)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        drift: 'drift 6s ease-in-out infinite alternate'
      }
    }
  },
  plugins: []
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050810',
          900: '#0A0E1A',
          850: '#0D1220',
          800: '#111827',
          700: '#1A2333',
        },
        volt: {
          50: '#EFFDF4',
          100: '#D7FBE4',
          300: '#7FF0AC',
          400: '#4CE595',
          500: '#22D07D',
          600: '#16A968',
          700: '#0F8555',
        },
        amber: {
          400: '#F6C453',
          500: '#EFB13C',
          600: '#D8962A',
        },
        steel: {
          200: '#E4E8F0',
          300: '#C6CDDB',
          400: '#98A2B8',
          500: '#6B7690',
          600: '#4B5468',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 20% 20%, rgba(34,208,125,0.16), transparent 45%), radial-gradient(circle at 80% 0%, rgba(246,196,83,0.10), transparent 40%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px -12px rgba(0,0,0,0.55)',
        'glow-volt': '0 10px 40px -8px rgba(34,208,125,0.45)',
        card: '0 1px 0 rgba(255,255,255,0.05) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'float-slower': 'float 13s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

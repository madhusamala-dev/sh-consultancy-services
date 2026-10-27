/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081421',
          900: '#102A43',
          800: '#183857',
          700: '#234971',
          600: '#2F5F92',
          500: '#3D77B4',
          100: '#E4EDF7',
          50: '#F2F6FB',
        },
        royal: {
          DEFAULT: '#2457A7',
          hover: '#1D4686',
          light: '#356AC0',
        },
        gold: {
          DEFAULT: '#C7A45A',
          hover: '#B59247',
          light: '#DFBE76',
          soft: '#F4ECE0',
          dark: '#9E7B34',
        },
        ivory: {
          DEFAULT: '#FAF8F3',
          surface: '#F4EFE6',
          card: '#FFFFFF',
          border: '#E8E1D3',
        },
        charcoal: {
          DEFAULT: '#25313D',
          muted: '#52606D',
          subtle: '#829AB1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(16, 42, 67, 0.08), 0 2px 6px -1px rgba(16, 42, 67, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(16, 42, 67, 0.14), 0 4px 12px -2px rgba(16, 42, 67, 0.06)',
        'gold-glow': '0 0 25px rgba(199, 164, 90, 0.25)',
        'navy-glow': '0 10px 30px rgba(16, 42, 67, 0.35)',
      }
    },
  },
  plugins: [],
}

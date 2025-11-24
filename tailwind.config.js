/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#0FA958',
          600: '#0B7E40',
          700: '#065F2F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 4px 24px -2px rgba(0,0,0,0.08)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 50% 50%, rgba(15,169,88,0.25), transparent 70%)'
      }
    }
  },
  plugins: []
};

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // updated from 'purge' to 'content'
  theme: {
    extend: {
      colors: {
        'theme-blue': '#1c3256',
        'theme-white': '#F9F5EC',
        'theme-green': '#74b8b8',
        'theme-pink': '#e9e2ee',
        'theme-blue-2': '#6cabca'
      },
      fontFamily: {
        'poetsen': ['PoetsenOne', 'sans-serif'],
        'lora': ['Lora', 'serif']
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateX(20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        }
      },
    },
  },
  plugins: [],
}

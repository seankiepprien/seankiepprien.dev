module.exports = {
    purge: [
        './components/**/*.{vue,js}',

        './layouts/**/*.vue',

        './pages/**/*.vue',

        './plugins/**/*.{js,ts}',

        './nuxt.config.{js,ts}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        'background': '16111c',
        'primary': '#ffffff',
        'secondary': 'b171ff',
        'hover': 'd3afff',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
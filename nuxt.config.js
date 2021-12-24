import getRoutes from './utils/getRoutes'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'seankiepprien.dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      // Quicksand,Poppins,Inter,Varela Round fonts
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Quicksand:wght@500&family=Varela+Round&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap',
      },
    ],
  },

  target: 'static',
  router: {
    base: '/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/variables.css', '@/layouts/globals.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxt/content',
  ],

  proxy: {
    '/api/': {
      target: 'https://api.example.com/',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true,
    },
  },

  fontawesome: {
    icons: {
      solid: ['faArrowRight'],
      regular: ['faEnvelope'],
      brands: [
        'faHtml5',
        'faCss3Alt',
        'faJsSquare',
        'faNode',
        'faVuejs',
        'faGithub',
        'faPhp',
        'faGit',
        'faLaravel',
      ],
    },
  },

  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },

  sitemap: {
    hostname: '',
    routes() {
      return getRoutes()
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

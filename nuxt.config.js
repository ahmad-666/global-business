export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'proj',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/styles/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/globalComponents.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/lottie.js' },
    { src: '~/plugins/transitions.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/vuetify',
      {
        breakpoint: {
          thresholds: {
            xs: 500,
            sm: 750,
            md: 1100,
            lg: 1500,
          },
          mobileBreakpoint: 'sm',
          scrollBarWidth: 16,
        },
        customVariables: ['~/assets/styles/vuetify/_variables.scss'],
        treeShake: true,
        rtl: false,
        theme: {
          dark: false,
          themes: {
            light: {
              primary: '#d1a316',
              secondary: '#24262d',
              error: '#DB524B',
              textColor: '#888',
              bgColor: '#f5f5f5',
              success: '#0ea704',
              adminBackgroundColor: '#1E1E28',
              adminCardColor: '#27293D',
            },
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

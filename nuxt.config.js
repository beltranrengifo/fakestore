import en from './locale/en'

export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
  },

  head: {
    title: 'Fakestore | A fake store made with Nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap',
      },
    ],
  },

  pageTransition: {
    name: 'page-transition',
  },

  css: ['./assets/scss/main.scss'],

  styleResources: {
    scss: [
      '@/assets/scss/config/_config.helpers.scss',
      '@/assets/scss/config/_config.colors.scss',
      '@/assets/scss/config/_config.fonts.scss',
      '@/assets/scss/config/_config.layout.scss',
      '@/assets/scss/config/_config.responsive.scss',
    ],
  },

  components: [
    { path: '@/components/' },
    { path: '@/components/layout' },
    { path: '@/components/common' },
    { path: '@/components/shop' },
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  axios: {},

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
      },
    },
  },

  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
  },
}

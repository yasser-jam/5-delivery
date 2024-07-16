// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['vuetify-nuxt-module', '@unocss/nuxt', '@pinia/nuxt'],

  css: ['~/assets/styles/main.scss'],

  app: {
    head: {
      title: '5 - Delivery'
    }
  },

  vuetify: {
    moduleOptions: {
      /* module specific options */
      styles: {
        configFile: './assets/styles/settings.scss'
      }
    },
    vuetifyOptions: './vuetify.config.ts',
  },

  imports: {
    dirs: ['./types/*']
  }
});

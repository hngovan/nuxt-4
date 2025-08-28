// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/scripts', '@nuxt/ui', '@nuxtjs/i18n'],
  ssr: false,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  app: {
    head: {
      title: 'D-Soft',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true
    },
    checker: {
      lintOnStart: true,
      fix: true
    }
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en'
  }
})

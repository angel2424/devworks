// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
     ssr: false,
        nitro: {
            preset: 'static'
        },
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: ['~/assets/css/global.css'],
    vite: {
        plugins: [tailwindcss(),]
    },
    icon: {
        mode: 'css',
        cssLayer: 'base'
    },
    modules: [
      '@nuxt/eslint',
      '@nuxt/fonts',
      '@nuxt/icon',
      '@nuxt/image',
      'shadcn-nuxt',
      'nuxt-gtag',
      '@nuxtjs/sitemap',
    ],
    gtag: {
        id: 'G-TZPJKZ4ZJH',
        config: {
        anonymize_ip: true,
        },
        debug: false,
    },
    sitemap: {
        siteUrl: 'https://devworksstudio.site',
        gzip: true,
        routes: [
            '/',
        ]
  }
})

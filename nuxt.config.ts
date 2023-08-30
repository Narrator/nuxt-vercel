// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel',
  },
  app: {
    baseURL: '/kau',
    buildAssetsDir: 'goku'
  }
})

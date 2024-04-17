// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  css: ["~/assets/css/main.scss"],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  experimental: {
    renderJsonPayloads: true,
  },
});

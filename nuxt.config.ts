// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  pwa: {
    registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "ایران بقاع",
      short_name: "Iran Begha",
      start_url: "/",
      theme_color: "#FBFFFD",
      background_color: "#29F697",
        icons: [
          {
            src: "pwa.png",
            sizes: "192x192",
            type: "image/png", 
          },
        ],
      }
} , 

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
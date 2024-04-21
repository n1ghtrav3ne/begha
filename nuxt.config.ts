// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" }],

      noscript: [{ children: "JavaScript is required" }],
    },
  },

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
    },
  },

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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@vite-pwa/nuxt",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    '@nuxtjs/device',
  ],

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],

      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,100,1,-25",
        },
      ],

      noscript: [{ children: "JavaScript is required" }],
    },
  },

  pwa: {
    registerType: "autoUpdate",
    strategies: "injectManifest",
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
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,jpg,}"],
    },
  },

  // components: {
  //   dirs: ["~/components/global/"],
  // },

  css: ["~/assets/css/main.scss"],

  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },

  routeRules: {
    '/': { ssr: true },
    '/auth/**': { ssr: false },
    '/mausoleum/profile/**': { ssr: false },
    '/followed-begha/**': { ssr: false },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
      appUrl: process.env.NUXT_PUBLIC_APP_URL
    },
  },

  nitro: {
    devProxy: {
      "/gate": {
        target: process.env.NUXT_PUBLIC_BASE_URL,
        changeOrigin: true,
      },
    },
  },

  plugins: ["~/plugins/sw.client.js"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // pinia: {
  //   storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  // },

  typescript: {
    typeCheck: true,
    strict: true,
  },
  experimental: {
    renderJsonPayloads: true,
  },
});

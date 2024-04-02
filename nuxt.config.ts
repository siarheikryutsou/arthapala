// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: "src",
  components: [
    "~/components",
    "~/../../shared/components"
  ],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Arthapāla — Custodial ETH Staking Service",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { name: "description", content: "Custodial staking of Ethereum" }
      ],
      link: [
        { rel: 'icon', type: "image/svg+xml", href: "/favicon.svg" }
      ]
    }
  },

  modules: [
    "nuxt-icons",
    ["@nuxtjs/google-fonts", {
      families: {
        Inter: [300, 400, 500, 700, 800],
        download: true,
        inject: true,
      },
      display: "swap"
    }]
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  devServer: {
    host: "0.0.0.0",
    port: 3003
  }
});

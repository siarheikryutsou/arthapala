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
      title: "Arthapala",
      htmlAttrs: {
        lang: "en"
      }
    }
  },

  modules: [
    "nuxt-icons",
    ["@nuxtjs/google-fonts", {
      families: {
        Inter: [300, 400, 500, 700, 800]
      }
    }],
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

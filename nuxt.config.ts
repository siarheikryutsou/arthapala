// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 3003
  }
})

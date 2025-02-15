// nuxt.config.ts
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      "@nuxt/ui",
      "@nuxt/fonts",
      "nuxt-svgo",
      "@nuxt/eslint",
      "@nuxt/image",
      [
         "nuxt-mail",
         {
            message: {
               to: process.env.MAIL_TO,
            },
            smtp: {
               host: process.env.MAIL_HOST,
               port: Number(process.env.MAIL_PORT),
               auth: {
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASS,
               },
            },
         },
      ],
   ],
   compatibilityDate: "2025-01-31",
   css: ["~/assets/css/global.css"],
   app: {
      head: {
         htmlAttrs: {
            lang: "fr",
         },
      },
   },
});

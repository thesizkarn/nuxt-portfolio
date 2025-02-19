// nuxt.config.ts
export default defineNuxtConfig({
   devtools: { enabled: true },
   modules: [
      "@nuxt/ui",
      "@nuxt/fonts",
      "nuxt-svgo",
      "@nuxt/eslint",
      "@nuxt/image",
      "@nuxtjs/robots",
      "nuxt-schema-org",
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
         link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
               rel: "apple-touch-icon",
               sizes: "180x180",
               href: "/apple-touch-icon.png",
            },
            {
               rel: "icon",
               type: "image/svg",
               href: "/favicon.svg",
            },
            {
               rel: "icon",
               type: "image/png",
               sizes: "96x96",
               href: "/favicon-96x96.png",
            },
            { rel: "manifest", href: "/site.webmanifest" },
         ],
      },
   },
});

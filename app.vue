<template>
   <div class="relative min-h-screen">
      <SpeedInsights />
      <Analytics />
      <MouseMoveEffect />
      <BackgroundEffect />

      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>

      <UModals />
   </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { Analytics } from "@vercel/analytics/nuxt";

const date = new Date().toISOString();

useHead({
   titleTemplate: (titleChunk) => {
      return titleChunk
         ? `${titleChunk} - Allain Web`
         : "Développeur Web Freelance à Blois: Allain Web";
   },
});
useSeoMeta({
   ogTitle: "Développeur Web Freelance à Blois: Allain Web",
   ogLocale: "fr_FR",
   ogType: "website",
   ogDescription:
      "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
   ogUrl: "https://allain-web.fr/",
   ogSiteName: "Allain Web",
   ogImage: "https://allain-web.fr/logo.png",
   articleModifiedTime: date,
});
</script>

<style></style>

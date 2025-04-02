<template>
   <UApp>
      <div class="relative min-h-screen">
         <!-- <SpeedInsights /> -->
         <!-- <Analytics /> -->
         <MouseMoveEffect />
         <BackgroundEffect />

         <NuxtLayout>
            <NuxtPage />
         </NuxtLayout>
      </div>
   </UApp>
</template>

<script setup lang="ts">
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
   ogUrl: "https://www.allainweb.fr/",
   ogSiteName: "Allain Web",
   ogImage: "https://www.allainweb.fr/logo.png",
   articleModifiedTime: date,
});
</script>

<style></style>

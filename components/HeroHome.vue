<template>
   <div id="hero" class="relative py-20 sm:py-32 md:py-40">
      <div class="relative z-10 flex flex-col items-center px-4 text-center">
         <h1 class="mb-4 text-4xl font-extrabold drop-shadow-lg md:text-7xl">
            Développeur Web<br />
            <strong class="text-(--ui-primary)">Freelance à Blois</strong>
         </h1>
         <p
            class="mx-auto mb-8 max-w-2xl text-xl text-(--ui-primary) drop-shadow-sm md:text-2xl"
         >
            Création de site internet dans la région Centre-Val de Loire.
         </p>
         <p class="max-w-[700px] text-lg">
            Je vous accompagne dans votre projet de site vitrine, boutique en
            ligne, blog, identité visuelle et refonte ou optimisation de site
            web sur CMS ou personnalisé.
         </p>
         <div class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3">
            <UButton to="/services" size="lg">En savoir plus</UButton>
            <UButton to="/#" size="lg" color="neutral"
               >Voir mes projets
            </UButton>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts"></script>

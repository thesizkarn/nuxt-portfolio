<template>
   <section class="py-12 md:py-24">
      <UContainer>
         <div class="grid grid-cols-1 gap-8 select-none md:grid-cols-3">
            <UCard>
               <div class="flex flex-col gap-6">
                  <UIcon
                     name="i-heroicons:swatch"
                     class="size-8 text-(--ui-primary)"
                  />
                  <h2 class="text-lg font-semibold md:text-xl">Web Design</h2>
                  <p class="mt-1 text-neutral-500 dark:text-neutral-400">
                     Un web design créé sur mesure afin de répondre aux attentes
                     du marché, tout en vous démarquant positivement de la
                     concurrence.
                  </p>
               </div>
            </UCard>
            <UCard>
               <div class="flex flex-col gap-6">
                  <UIcon
                     name="i-heroicons:window-16-solid"
                     class="size-8 text-(--ui-primary)"
                  />
                  <h2 class="text-lg font-semibold md:text-xl">
                     Création de site Internet
                  </h2>
                  <p class="mt-1 text-neutral-500 dark:text-neutral-400">
                     La création de site web est indispensable pour améliorer la
                     visibilité de ses activités. Le développement de votre site
                     web est réalisé avec soin et qualité.
                  </p>
               </div>
            </UCard>
            <UCard>
               <div class="flex flex-col gap-6">
                  <UIcon
                     name="i-heroicons:shopping-cart"
                     class="size-8 text-(--ui-primary)"
                  />
                  <h2 class="text-lg font-semibold md:text-xl">
                     Création de site e-commerce
                  </h2>
                  <p class="mt-1 text-neutral-500 dark:text-neutral-400">
                     Lancer votre boutique en ligne c'est l'opportunité de
                     transformer votre vision en une expérience d'achat
                     captivante.
                  </p>
               </div>
            </UCard>
         </div>
      </UContainer>
   </section>
</template>

<script lang="ts" setup></script>

<style></style>

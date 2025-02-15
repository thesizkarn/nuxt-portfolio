<template>
   <section id="projetcs" class="relative py-12 md:py-24">
      <UContainer>
         <div class="flex flex-col gap-12">
            <div class="flex flex-col items-center justify-center gap-4">
               <span class="uppercase text-primary">
                  Développement web Freelance
               </span>
               <h2 class="text-xl font-semibold md:text-3xl lg:text-5xl">
                  Dernières réalisations
               </h2>
            </div>
            <div class="grid select-none grid-cols-1 gap-8 md:grid-cols-3">
               <UCard :ui="{ body: { padding: '' } }">
                  <NuxtPicture
                     src="/developpement-wordpress-site-edas.jpg"
                     alt="Développement d'un site Wordpress pour EDAS Rénovation"
                     format="webp"
                     class="relative block h-52 overflow-hidden rounded-t-md"
                     :img-attrs="{
                        class: 'object-cover size-full transition-transform rounded-t-md hover:scale-105',
                     }"
                  />
                  <div class="flex flex-col gap-5 p-6">
                     <h3 class="text-lg font-semibold">
                        E.D.A.S - Multi-Services Habitat
                     </h3>
                     <p class="text-sm text-muted-foreground">
                        Développement d'un site vitrine WordPress d'un artisant
                        à Selles-sur-Cher
                     </p>
                     <div class="flex gap-2">
                        <UBadge size="xs" color="gray">WordPress</UBadge>
                        <UBadge size="xs" color="gray">Hébergement</UBadge>
                     </div>
                     <UButton to="/#" block>Voir le projet</UButton>
                  </div>
               </UCard>
            </div>
         </div>
      </UContainer>
   </section>
</template>

<script lang="ts" setup>
import { UBadge } from "#components";
</script>

<style></style>

<template>
   <section id="about" class="relative py-12 md:py-24">
      <UContainer>
         <div
            class="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12"
         >
            <div class="flex-1">
               <NuxtPicture
                  src="/allain-web-developpeur-freelance-blois-1168x1000.jpg"
                  alt="Julien Allain - Développeur web"
                  class="w-full rounded-lg object-cover shadow-lg"
                  :img-attrs="{
                     class: 'object-cover size-full rounded-lg',
                  }"
               />
               <!-- <picture>
                  <source
                     srcset="
                        /allain-web-developpeur-freelance-blois-1168x1000.jpg
                     "
                     media="(min-width: 1024px)"
                  />
                  <img
                     src="/allain-web-developpeur-freelance-blois-584x500.jpg"
                     alt="Julien Allain - Développeur web"
                     class="w-full rounded-lg object-cover shadow-lg"
                     width="584"
                     height="500"
                  />
               </picture> -->
            </div>

            <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
               <span class="uppercase text-primary">À Propos</span>
               <h2 class="text-xl font-semibold md:text-3xl lg:text-5xl">
                  Julien Allain,<br />
                  <strong class="font-semibold text-primary"
                     >Développeur web</strong
                  >
                  freelance à Blois
               </h2>
               <p>
                  Sites vitrines et boutiques e-commerce, entièrement responsive
                  et conçus pour s'adapter à tous les formats d'écran, font
                  partie des solutions de développement web que je propose à mes
                  clients.
               </p>
               <p>
                  Que vous soyez artisan, PME ou start-up, je vous accompagne
                  dans la concrétisation de votre projet de création de site
                  internet. N'hésitez pas à me contacter pour discuter de votre
                  projet web et obtenir un devis gratuit et détaillé.
               </p>
               <UButton
                  to="/contact"
                  size="lg"
                  icon="i-heroicons-pencil-square"
               >
                  Contactez-moi
               </UButton>
            </div>
         </div>
      </UContainer>
   </section>
</template>

<script lang="ts" setup></script>

<style></style>

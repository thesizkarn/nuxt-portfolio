<template>
   <section id="skills" class="relative py-12 md:py-24">
      <UContainer>
         <div
            class="flex w-full flex-col items-start gap-8 md:flex-row md:gap-12"
         >
            <div class="flex w-full flex-1 flex-col gap-8 md:gap-16">
               <NuxtPicture
                  src="/developpeur-web-freelance-react-vue-javascript.jpg"
                  alt="Compétences en développement web - programation en language HTML, CSS, JavaScript, TypeScript, React, Vue, PHP et Node.js"
                  class="w-full rounded-lg object-cover shadow-lg"
                  :img-attrs="{
                     class: 'object-cover size-full rounded-lg',
                  }"
               />
               <div
                  class="grid grid-cols-3 gap-12 text-center select-none md:gap-16"
               >
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-html5"
                        class="size-12 md:size-16"
                        title="HTML5"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-css3-shiled"
                        class="size-12 md:size-16"
                        title="CSS3"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-typescript"
                        class="size-12 md:size-16"
                        title="TypeScript"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-react"
                        class="size-12 md:size-16"
                        title="React"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-vue-js"
                        class="size-12 md:size-16"
                        title="Vue"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-wordpress"
                        class="size-12 md:size-16"
                        title="WordPress"
                     />
                  </div>
               </div>
            </div>

            <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
               <span class="text-(--ui-primary) uppercase">Depuis 2018</span>
               <h2 class="text-xl font-semibold md:text-3xl lg:text-5xl">
                  Compétences en
                  <strong class="font-semibold text-(--ui-primary)">
                     développement web
                  </strong>
               </h2>

               <p>
                  De la création de sites web au design soigné à l'amélioration
                  des performances côté serveur, je vous accompagne dans la
                  réalisation de vos projets.
               </p>
               <p>
                  Mes compétences couvrent notamment le développement front-end
                  avec des technologies comme HTML, CSS et JavaScript, ainsi que
                  le développement back-end en Node.js et PHP, avec une maîtrise
                  des bases de données comme MySQL et PostgreSQL.
               </p>
               <p>
                  Découvrez mes domaines d'expertise ci-dessous et voyons
                  ensemble comment concrétiser vos idées web !
               </p>

               <div class="flex w-full flex-col gap-4">
                  <div>
                     <span class="text-sm text-neutral-400">HTML / CSS</span>
                     <UProgress v-model="html" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">
                        JavaScript / TypeScript
                     </span>
                     <UProgress v-model="js" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">
                        React / Next.js
                     </span>
                     <UProgress v-model="react" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">Vue / Nuxt</span>
                     <UProgress v-model="vue" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">WordPress</span>
                     <UProgress v-model="wordpress" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">Node.js</span>
                     <UProgress v-model="node" />
                  </div>

                  <div>
                     <span class="text-sm text-neutral-400">PHP / Symfony</span>
                     <UProgress v-model="php" />
                  </div>
               </div>
            </div>
         </div>
      </UContainer>
   </section>
</template>

<script lang="ts" setup>
const html = ref(100);
const js = ref(100);
const react = ref(95);
const vue = ref(85);
const wordpress = ref(80);
const node = ref(80);
const php = ref(65);
</script>

<style></style>

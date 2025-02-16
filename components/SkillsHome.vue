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
                  class="grid select-none grid-cols-3 gap-12 text-center md:gap-16"
               >
                  <div class="flex justify-center">
                     <UIcon name="i-cib-html5" class="size-16" title="HTML5" />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-css3-shiled"
                        class="size-16"
                        title="CSS3"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-typescript"
                        class="size-16"
                        title="TypeScript"
                     />
                  </div>
                  <div class="flex justify-center">
                     <UIcon name="i-cib-react" class="size-16" title="React" />
                  </div>
                  <div class="flex justify-center">
                     <UIcon name="i-cib-vue-js" class="size-16" title="Vue" />
                  </div>
                  <div class="flex justify-center">
                     <UIcon
                        name="i-cib-wordpress"
                        class="size-16"
                        title="WordPress"
                     />
                  </div>
               </div>
            </div>

            <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
               <span class="uppercase text-primary">Depuis 2018</span>
               <h2 class="text-xl font-semibold md:text-3xl lg:text-5xl">
                  Compétences en
                  <strong class="font-semibold text-primary">
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
                  <UMeter
                     label="HTML / CSS"
                     :value="100"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="JavaScript / TypeScript"
                     :value="100"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="React / Next.js"
                     :value="95"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="Vue / Nuxt"
                     :value="85"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="WordPress"
                     :value="80"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="Node.js"
                     :value="80"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
                  <UMeter
                     label="PHP / Symfony"
                     :value="65"
                     :ui="{ label: { color: 'text-muted-foreground' } }"
                  />
               </div>
            </div>
         </div>
      </UContainer>
   </section>
</template>

<script lang="ts" setup></script>

<style></style>

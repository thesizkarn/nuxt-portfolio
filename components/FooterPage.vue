<template>
   <footer class="relative bg-gray-900 text-white">
      <UContainer>
         <div
            class="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2 md:pt-12 lg:grid-cols-4"
         >
            <!-- Logo et description -->
            <div class="flex flex-col gap-4">
               <ULink
                  to="/"
                  active-class="text-(--color-foreground)"
                  inactive-class="text-(--color-foreground)"
                  class="flex items-center gap-2"
                  aria-label="Allain Web"
               >
                  <SvgoPicto class="size-6" :font-controlled="false" />
                  <SvgoLogo class="w-[130px]" :font-controlled="false" />
               </ULink>
               <p class="text-sm text-gray-400">
                  Julien Allain, développeur web freelance à Blois. Création de
                  sites internet, e-commerce et web design responsive pour votre
                  succès en ligne.
               </p>
            </div>

            <!-- Navigation -->
            <div>
               <h3 class="mb-4 text-lg font-semibold text-(--ui-primary)">
                  Navigation
               </h3>
               <ul class="space-y-2 text-sm">
                  <li>
                     <ULink
                        to="/"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Accueil
                     </ULink>
                  </li>
                  <li>
                     <ULink
                        to="/services"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Services
                     </ULink>
                  </li>
                  <li>
                     <ULink
                        to="/projets"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Projets
                     </ULink>
                  </li>
                  <li>
                     <ULink
                        to="/contact"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Contact
                     </ULink>
                  </li>
               </ul>
            </div>

            <!-- Services -->
            <div>
               <h3 class="mb-4 text-lg font-semibold text-(--ui-primary)">
                  Services
               </h3>
               <ul class="space-y-2 text-sm">
                  <li>
                     <ULink
                        to="/services/web-design"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Web Design
                     </ULink>
                  </li>
                  <li>
                     <ULink
                        to="/services/creation-site-internet"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Création de Site Internet
                     </ULink>
                  </li>
                  <li>
                     <ULink
                        to="/services/creation-site-e-commerce"
                        class="transition-colors hover:text-(--ui-primary)"
                        active-class="text-(--ui-primary)"
                     >
                        Création de Site E-commerce
                     </ULink>
                  </li>
               </ul>
            </div>

            <!-- Contact -->
            <div>
               <h3 class="mb-4 text-lg font-semibold text-(--ui-primary)">
                  Contact
               </h3>
               <address class="text-sm text-gray-400 not-italic">
                  7 Résidence de Bellevue<br />
                  41110 Seigy, France
               </address>
               <p class="mt-2 text-sm text-gray-400">
                  <a
                     href="mailto:contact@allainweb.fr"
                     class="transition-colors hover:text-(--ui-primary)"
                  >
                     contact@allainweb.fr
                  </a>
               </p>
               <p class="mt-2 text-sm text-gray-400">
                  <a
                     href="tel:+33650425221"
                     class="transition-colors hover:text-(--ui-primary)"
                  >
                     +33 6 50 42 52 21
                  </a>
               </p>
               <div class="mt-4 flex gap-4">
                  <ULink
                     to="https://www.linkedin.com/in/julien-allain/"
                     target="_blank"
                     aria-label="LinkedIn"
                     class="transition-colors hover:text-(--ui-primary)"
                  >
                     <UIcon name="i-cib-linkedin" class="size-6" />
                  </ULink>
                  <ULink
                     to="https://github.com/thesizkarn"
                     target="_blank"
                     aria-label="GitHub"
                     class="transition-colors hover:text-(--ui-primary)"
                  >
                     <UIcon name="i-cib-github" class="size-6" />
                  </ULink>
                  <ULink
                     to="https://www.malt.fr/profile/julienallain"
                     target="_blank"
                     aria-label="Malt"
                     class="transition-colors hover:text-(--ui-primary)"
                  >
                     <UIcon name="i-heroicons-briefcase" class="size-6" />
                  </ULink>
               </div>
            </div>
         </div>

         <!-- Copyright -->
         <div
            class="mt-12 border-t border-gray-800 py-6 text-center text-sm text-gray-400"
         >
            &copy; {{ currentYear }} Allain Web. Tous droits réservés.
         </div>
      </UContainer>
   </footer>
</template>

<script lang="ts" setup>
// Calcul de l'année actuelle
const currentYear = new Date().getFullYear();
</script>

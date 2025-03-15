<template>
   <div>
      <header
         class="flex flex-col items-center justify-center gap-4 py-4 md:py-8"
      >
         <span class="uppercase text-primary">
            Concrétisez votre projet web
         </span>
         <h1 class="text-xl font-semibold md:text-3xl lg:text-5xl">
            Création de
            <strong class="font-semibold text-primary">Site Internet</strong> à
            Blois
         </h1>
         <UBreadcrumb
            :links="links"
            :ui="{ li: 'md:text-sm md:gap-x-1.5 gap-x-1 text-xs' }"
         />
      </header>
      <section class="relative py-8 md:py-24">
         <UContainer>
            <div
               class="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex-1 p-0 md:p-8">
                  <NuxtPicture
                     src="/illustration-developpeur-web.svg"
                     alt="Illustration développeur web freelance à Blois - Création de site internet Wordpress et sur mesure"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{
                        class: 'object-cover size-full rounded-lg',
                     }"
                  />
               </div>

               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h2 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     La création de
                     <strong class="font-semibold text-primary"
                        >site internet
                     </strong>
                     : un outil essentiel pour votre visibilité
                  </h2>
                  <p>
                     La création de site internet est devenue incontournable
                     pour booster votre visibilité et toucher vos clients, que
                     vous soyez à Blois ou au-delà. Un site web bien pensé est
                     plus qu’une vitrine : c’est un outil stratégique pour
                     valoriser votre activité, attirer des prospects et
                     renforcer votre crédibilité. À l’heure où le digital
                     domine, investir dans une présence en ligne est essentiel
                     pour rester compétitif.
                  </p>
                  <p>
                     Chez AllainWeb, je vous accompagne dans la réalisation de
                     sites internet adaptés à vos objectifs, avec une expertise
                     ancrée à Blois. Que vous souhaitiez un site rapide à mettre
                     en place ou une solution entièrement personnalisée, je
                     transforme vos idées en projets concrets. Cette page
                     détaille mes services : des sites WordPress pratiques et
                     autonomes, ou des développements sur-mesure pour des
                     besoins uniques. Site vitrine, e-commerce ou optimisation
                     pour le référencement local, je suis là pour vous guider.
                  </p>
                  <p>
                     Un site internet, c’est votre premier pas vers une
                     croissance durable. Découvrez ci-dessous comment je peux
                     vous aider à concrétiser votre projet.
                  </p>
               </div>
            </div>
         </UContainer>
      </section>

      <section class="relative pt-4 md:pt-12">
         <UContainer>
            <div class="flex w-full flex-col items-center justify-center gap-4">
               <span class="uppercase text-primary">
                  Un site à votre image
               </span>
               <h2
                  class="text-center text-lg font-semibold md:text-2xl lg:text-3xl"
               >
                  Les services de création de site web
               </h2>
            </div>
         </UContainer>
      </section>

      <section class="relative py-8 md:py-16">
         <UContainer class="flex flex-col space-y-12 md:space-y-24">
            <div
               class="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h3 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     Création de
                     <strong class="font-semibold text-primary">
                        site vitrine
                     </strong>
                     : votre carte de visite en ligne
                  </h3>
                  <p>
                     Un site vitrine est parfait pour présenter votre activité
                     et attirer des clients à Blois. Simple et professionnel, il
                     met en avant vos services et coordonnées, comme une carte
                     de visite accessible 24/7. Que vous soyez artisan ou
                     commerçant, c’est un outil clé pour votre visibilité.
                  </p>
                  <p>
                     je crée des sites vitrines modernes, responsive (adaptés
                     mobiles) et optimisés pour le référencement local. Design
                     sur mesure, contenu clair, formulaire de contact : tout est
                     pensé pour refléter votre identité et capter votre
                     audience.
                  </p>
                  <p>
                     Gagnez en crédibilité avec une présence en ligne efficace
                     et sans complexité.
                  </p>
               </div>

               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/creation-site-vitrine.svg"
                     alt="Illustration développeur web freelance à Blois - Création de site internet vitrine"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{
                        class: 'object-cover size-full rounded-lg',
                     }"
                  />
               </div>
            </div>

            <div
               class="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/creation-site-ecommerce.svg"
                     alt="Illustration développeur web freelance à Blois - Création de site internet e-commerce"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{
                        class: 'object-cover size-full rounded-lg',
                     }"
                  />
               </div>
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h3 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     Création de
                     <strong class="font-semibold text-primary">
                        site e-commerce
                     </strong>
                     avec
                     <strong class="font-semibold text-primary">
                        WordPress
                     </strong>
                     et
                     <strong class="font-semibold text-primary">
                        WooCommerce
                     </strong>
                  </h3>
                  <p>
                     Envie de vendre en ligne à Blois ou ailleurs ? Un site
                     e-commerce avec WordPress et WooCommerce est parfait pour
                     lancer votre boutique digitale. Flexible et intuitif, cet
                     outil vous permet de gérer produits, paiements et
                     livraisons en toute simplicité.
                  </p>
                  <p>
                     Je conçois des boutiques en ligne modernes et optimisées :
                     design attractif, navigation fluide, paiements sécurisés
                     (PayPal, Stripe, carte bancaire) et compatibilité mobile.
                     Votre site sera aussi pensé pour le référencement pour
                     attirer vos clients via Google. Avec WooCommerce, vous
                     gérez facilement votre catalogue et restez autonome.
                  </p>
                  <p>
                     Démarrez votre activité en ligne avec une solution
                     performante et adaptée à votre budget.
                  </p>
               </div>
            </div>
         </UContainer>
      </section>
   </div>
</template>

<script lang="ts" setup>
const links = [
   {
      label: "Accueil",
      to: "/",
   },
   {
      label: "Services",
      to: "/services",
   },
   {
      label: "Création de site Internet",
      to: "/services/creation-site-internet",
   },
];
</script>

<style></style>

<template>
   <div>
      <header
         class="flex flex-col items-center justify-center gap-4 py-4 md:py-8"
      >
         <span class="text-(--ui-primary) uppercase">
            Mes solutions pour votre projet
         </span>
         <h1 class="text-xl font-semibold md:text-3xl lg:text-5xl">
            Mes
            <strong class="font-semibold text-(--ui-primary)">Services</strong>
            à Blois
         </h1>
         <UBreadcrumb
            :items="links"
            :ui="{ list: 'md:text-sm md:gap-x-1.5 gap-x-1 text-xs' }"
         />
      </header>

      <section class="relative pt-4 md:pt-12">
         <UContainer>
            <div class="flex w-full flex-col items-center justify-center gap-4">
               <span class="text-(--ui-primary) uppercase">
                  Mes expertises
               </span>
               <h2
                  class="text-center text-lg font-semibold md:text-2xl lg:text-3xl"
               >
                  Des services sur mesure pour votre présence en ligne
               </h2>
               <p class="text-center">
                  Vous cherchez à renforcer votre visibilité ou à développer
                  votre activité sur internet ? En tant que développeur web
                  freelance basé à Blois, je mets à votre disposition des
                  solutions personnalisées qui répondent précisément à vos
                  ambitions. Que ce soit pour concevoir un design unique, créer
                  un site vitrine attractif ou développer une boutique en ligne
                  performante, je vous accompagne étape par étape pour
                  transformer vos idées en un projet digital réussi, tout en
                  optimisant votre présence sur le web.
               </p>
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
                     <strong class="font-semibold text-(--ui-primary)"
                        >site internet</strong
                     >
                  </h3>
                  <p>
                     Vous avez besoin d’un site vitrine ou d’une solution unique
                     pour un projet ambitieux ? Je conçois des sites internet
                     modernes avec WordPress pour sa facilité d’utilisation, ou
                     sur mesure avec des technologies comme React ou Vue pour un
                     design interactif côté utilisateur, et principalement Node
                     pour un back-end robuste et performant. Chaque site est
                     optimisé pour le SEO, assurant une visibilité maximale à
                     Blois et au-delà, tout en répondant parfaitement à vos
                     attentes et à celles de vos visiteurs.
                  </p>
                  <UButton
                     trailing-icon="i-heroicons-arrow-right"
                     to="/services/creation-site-internet"
                     size="lg"
                  >
                     En savoir plus
                  </UButton>
               </div>
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/illustration-developpeur-web.svg"
                     alt="Illustration création de site internet - Développeur freelance à Blois"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
            </div>

            <div
               class="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/creer-site-ecommerce.svg"
                     alt="Illustration création de site e-commerce - Développeur freelance à Blois"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h3 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     Création de
                     <strong class="font-semibold text-(--ui-primary)"
                        >site e-commerce</strong
                     >
                  </h3>
                  <p>
                     Prêt à lancer votre boutique en ligne et à conquérir de
                     nouveaux clients ? Avec WordPress et WooCommerce, je
                     développe des sites e-commerce intuitifs, sécurisés et
                     optimisés pour maximiser vos ventes, que vous soyez à Blois
                     ou ailleurs. Chaque boutique bénéficie d’un design
                     attractif, d’une navigation fluide et d’outils de gestion
                     autonome, tout en étant pensée pour le référencement afin
                     d’attirer un trafic qualifié directement depuis Google.
                  </p>
                  <UButton
                     trailing-icon="i-heroicons-arrow-right"
                     to="/services/creation-site-e-commerce"
                     size="lg"
                  >
                     En savoir plus
                  </UButton>
               </div>
            </div>

            <div
               class="flex w-full flex-col-reverse items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h3 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     <strong class="font-semibold text-(--ui-primary)"
                        >Web design</strong
                     >
                     responsive
                  </h3>
                  <p>
                     Vous souhaitez offrir une identité visuelle percutante à
                     votre site internet ? J’utilise Figma pour concevoir des
                     maquettes responsive sur mesure, adaptées aussi bien aux
                     écrans desktop qu’aux mobiles, avec un focus sur
                     l’expérience utilisateur (UX) et l’interface (UI). Mes
                     designs modernes et intuitifs captent l’attention de vos
                     visiteurs, renforcent votre marque et sont prêts à être
                     intégrés dans WordPress или une solution personnalisée,
                     selon vos besoins.
                  </p>
                  <UButton
                     trailing-icon="i-heroicons-arrow-right"
                     to="/services/web-design"
                     size="lg"
                  >
                     En savoir plus
                  </UButton>
               </div>
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/web-design-freelance.svg"
                     alt="Illustration web design responsive - Développeur freelance à Blois"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
            </div>
         </UContainer>
      </section>

      <ContactForm />
   </div>
</template>

<script lang="ts" setup>
const links = ref([
   {
      label: "Accueil",
      to: "/",
   },
   {
      label: "Services",
      to: "/services",
   },
]);

useSeoMeta({
   title: "Services Web à Blois - Développeur Freelance",
   description:
      "Découvrez mes services à Blois : création de sites internet, sites e-commerce avec WooCommerce, et web design responsive avec Figma. Solutions sur mesure pour votre projet.",
   ogTitle: "Services Web à Blois - Allain Web",
   ogDescription:
      "Création de sites vitrines, e-commerce et web design par Julien Allain, développeur freelance à Blois. Contactez-moi pour concrétiser votre projet !",
   ogImage: "https://www.allainweb.fr/illustration-developpeur-web.svg",
   ogUrl: "https://www.allainweb.fr/services",
   twitterCard: "summary_large_image",
   twitterTitle: "Services Web à Blois - Allain Web",
   twitterDescription:
      "Sites internet, e-commerce et web design par un freelance à Blois. Découvrez mes solutions personnalisées !",
   twitterImage: "https://www.allainweb.fr/illustration-developpeur-web.svg",
});

useSchemaOrg([
   {
      "@type": "Service",
      "@id": "https://www.allainweb.fr/services/#service",
      "serviceType": "Services de développement web et design",
      "provider": {
         "@type": "Organization",
         "@id": "https://www.allainweb.fr/#organization",
         "name": "Allain Web",
         "url": "https://www.allainweb.fr",
         "logo": "https://www.allainweb.fr/logo.png",
         "address": {
            "@type": "PostalAddress",
            "streetAddress": "7 Résidence de Bellevue",
            "addressLocality": "Seigy",
            "postalCode": "41110",
            "addressCountry": "FR",
         },
         "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@allainweb.fr",
            "telephone": "+33 6 50 42 52 21",
            "contactType": "Customer Service",
            "availableLanguage": ["French"],
         },
      },
      "areaServed": {
         "@type": "Place",
         "name": "Blois",
      },
      "description":
         "Services de création de sites internet, sites e-commerce avec WordPress et WooCommerce, et web design responsive avec Figma, par un développeur freelance à Blois.",
      "offers": {
         "@type": "Offer",
         "name": "Création de sites et web design",
         "description":
            "Solutions personnalisées : sites vitrines, e-commerce et designs responsive pour votre présence en ligne.",
         "priceCurrency": "EUR",
         "availability": "https://schema.org/InStock",
      },
   },
   {
      "@type": "WebPage",
      "@id": "https://www.allainweb.fr/services/#webpage",
      "url": "https://www.allainweb.fr/services",
      "name": "Services - Allain Web",
      "isPartOf": {
         "@id": "https://www.allainweb.fr/#website",
      },
      "description":
         "Découvrez mes services à Blois : création de sites internet, sites e-commerce avec WooCommerce, et web design responsive avec Figma.",
      "breadcrumb": {
         "@type": "BreadcrumbList",
         "itemListElement": [
            {
               "@type": "ListItem",
               "position": 1,
               "name": "Accueil",
               "item": "https://www.allainweb.fr/",
            },
            {
               "@type": "ListItem",
               "position": 2,
               "name": "Services",
               "item": "https://www.allainweb.fr/services",
            },
         ],
      },
   },
]);
</script>

<style></style>

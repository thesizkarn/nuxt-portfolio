<template>
   <div>
      <header
         class="flex flex-col items-center justify-center gap-4 py-4 md:py-8"
      >
         <span class="text-(--ui-primary) uppercase"
            >Ils m'ont fait confiance</span
         >
         <h1 class="text-xl font-semibold md:text-3xl lg:text-5xl">
            Mes
            <strong class="font-semibold text-(--ui-primary)">projets</strong>
            réalisés
         </h1>
         <UBreadcrumb
            :items="links"
            :ui="{ list: 'md:text-sm md:gap-x-1.5 gap-x-1 text-xs' }"
         />
      </header>

      <section id="projects" class="relative pt-4 md:pt-12">
         <UContainer>
            <p class="pb-12 text-center">
               Découvrez mes dernières réalisations en tant que développeur web
               freelance à Blois. Chaque projet, qu’il s’agisse d’un site
               vitrine, d’une boutique e-commerce ou d’un design sur mesure, est
               conçu pour répondre aux besoins spécifiques de mes clients tout
               en optimisant leur visibilité sur Google. Basé à Blois, je mets
               mon expertise en WordPress, WooCommerce et développement
               personnalisé au service d’artisans, PME et entrepreneurs pour
               transformer leurs idées en solutions digitales performantes.
            </p>
            <div class="grid grid-cols-1 gap-8 select-none md:grid-cols-3">
               <UCard :ui="{ body: 'p-0 sm:p-0' }">
                  <div>
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
                        <p class="text-sm text-neutral-400">
                           Développement d’un site vitrine WordPress pour un
                           artisan à Selles-sur-Cher.
                        </p>
                        <div class="flex gap-2">
                           <UBadge size="sm" color="neutral" variant="soft"
                              >WordPress</UBadge
                           >
                           <UBadge size="sm" color="neutral" variant="soft"
                              >Hébergement</UBadge
                           >
                        </div>
                        <UButton
                           to="https://edas-renovation.fr/"
                           target="_blank"
                           rel="noopener"
                           block
                           aria-label="Voir le projet E.D.A.S sur un site externe"
                        >
                           Voir le projet
                        </UButton>
                     </div>
                  </div>
               </UCard>
            </div>
         </UContainer>
      </section>
   </div>
</template>

<script lang="ts" setup>
import { useSeoMeta, useSchemaOrg } from "#imports";

// Breadcrumb
const links = ref([
   { label: "Accueil", to: "/" },
   { label: "Projets", to: "/projets" },
]);

// SEO Meta
useSeoMeta({
   title: "Projets Réalisés - Allain Web, Développeur Freelance à Blois",
   description:
      "Découvrez les projets réalisés par Julien Allain, développeur web freelance à Blois : sites vitrines, e-commerce avec WordPress et WooCommerce, designs sur mesure optimisés SEO.",
   ogTitle: "Projets Réalisés - Allain Web",
   ogDescription:
      "Sites vitrines, boutiques en ligne et designs personnalisés par Julien Allain, développeur freelance à Blois. Consultez mes réalisations !",
   ogUrl: "https://www.allainweb.fr/projets",
   ogImage: "https://www.allainweb.fr/developpement-wordpress-site-edas.jpg",
   twitterCard: "summary_large_image",
   twitterTitle: "Projets Réalisés - Allain Web",
   twitterDescription:
      "Projets web réalisés par un développeur freelance à Blois : sites WordPress, e-commerce et plus. Voir mes travaux !",
   twitterImage:
      "https://www.allainweb.fr/developpement-wordpress-site-edas.jpg",
});

// Schema.org pour la page et le projet
useSchemaOrg([
   {
      "@type": "WebPage",
      "@id": "https://www.allainweb.fr/projets/#webpage",
      "url": "https://www.allainweb.fr/projets",
      "name": "Projets Réalisés - Allain Web",
      "isPartOf": {
         "@id": "https://www.allainweb.fr/#website",
      },
      "description":
         "Portfolio des projets réalisés par Julien Allain, développeur web freelance à Blois : sites vitrines, e-commerce et designs sur mesure.",
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
               "name": "Projets",
               "item": "https://www.allainweb.fr/projets",
            },
         ],
      },
   },
   {
      "@type": "CreativeWork",
      "@id": "https://www.allainweb.fr/projects/edas-renovation",
      "name": "E.D.A.S - Multi-Services Habitat",
      "url": "https://edas-renovation.fr/",
      "description":
         "Site vitrine WordPress développé pour un artisan à Selles-sur-Cher.",
      "creator": {
         "@type": "Person",
         "@id": "https://www.allainweb.fr/#julien-allain",
         "name": "Julien Allain",
         "url": "https://www.allainweb.fr",
      },
      "publisher": {
         "@type": "Organization",
         "@id": "https://www.allainweb.fr/#organization",
         "name": "Allain Web",
      },
   },
]);
</script>

<style></style>

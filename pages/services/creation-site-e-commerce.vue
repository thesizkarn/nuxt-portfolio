<template>
   <div>
      <header
         class="flex flex-col items-center justify-center gap-4 py-4 md:py-8"
      >
         <span class="text-(--ui-primary) uppercase">
            Lancez votre boutique en ligne
         </span>
         <h1 class="text-xl font-semibold md:text-3xl lg:text-5xl">
            Création de
            <strong class="font-semibold text-(--ui-primary)"
               >Site E-commerce</strong
            >
            à Blois
         </h1>
         <UBreadcrumb
            :items="links"
            :ui="{ list: 'md:text-sm md:gap-x-1.5 gap-x-1 text-xs' }"
         />
      </header>

      <section class="relative py-8 md:py-24">
         <UContainer>
            <div
               class="flex w-full flex-col items-center gap-8 md:flex-row md:gap-12"
            >
               <div class="flex-1 p-0 md:p-8">
                  <NuxtPicture
                     src="/creer-site-ecommerce.svg"
                     alt="Illustration développeur web freelance à Blois - Création de site e-commerce avec WordPress et WooCommerce"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h2 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     La création de
                     <strong class="font-semibold text-(--ui-primary)"
                        >site e-commerce</strong
                     >
                     : vendez en ligne dès aujourd’hui
                  </h2>
                  <p>
                     Un site e-commerce est la clé pour développer votre
                     activité et atteindre vos clients, à Blois ou partout
                     ailleurs. Plus qu’une simple boutique, c’est une plateforme
                     qui travaille pour vous 24/7, augmentant vos ventes et
                     votre visibilité dans un monde de plus en plus connecté.
                  </p>
                  <p>
                     Chez AllainWeb, je vous propose des solutions e-commerce
                     sur mesure avec WordPress et WooCommerce. Basé à Blois, je
                     conçois des boutiques en ligne intuitives, sécurisées et
                     optimisées pour le référencement, adaptées à vos produits
                     et à votre budget. Que vous vendiez des articles artisanaux
                     ou des services, je transforme votre vision en une réalité
                     digitale performante.
                  </p>
                  <p>
                     Lancez votre boutique en ligne avec un partenaire local qui
                     comprend vos besoins. Découvrez comment je peux vous aider
                     ci-dessous.
                  </p>
               </div>
            </div>
         </UContainer>
      </section>

      <section class="relative pt-4 md:pt-12">
         <UContainer>
            <div class="flex w-full flex-col items-center justify-center gap-4">
               <span class="text-(--ui-primary) uppercase">
                  Une boutique à votre mesure
               </span>
               <h2
                  class="text-center text-lg font-semibold md:text-2xl lg:text-3xl"
               >
                  Mes services de création e-commerce
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
                     Boutique en ligne avec
                     <strong class="font-semibold text-(--ui-primary)"
                        >WordPress</strong
                     >
                     et
                     <strong class="font-semibold text-(--ui-primary)"
                        >WooCommerce</strong
                     >
                  </h3>
                  <p>
                     WordPress et WooCommerce forment une combinaison puissante
                     pour créer une boutique en ligne flexible et facile à
                     gérer. Que vous ayez 10 ou 1000 produits, cette solution
                     s’adapte à votre échelle et à vos ambitions.
                  </p>
                  <p>
                     Je développe des sites e-commerce modernes : design
                     attractif, navigation intuitive, paiements sécurisés
                     (Stripe, PayPal, etc.) et compatibilité mobile. Votre
                     boutique est aussi optimisée pour le SEO afin d’attirer
                     plus de clients via Google. Avec WooCommerce, vous gérez
                     vos stocks, commandes et promotions en toute autonomie.
                  </p>
                  <p>
                     Une solution performante pour vendre en ligne, sans
                     compromis sur la qualité ni le budget.
                  </p>
               </div>
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/creation-site-ecommerce.svg"
                     alt="Illustration création de site e-commerce avec WordPress et WooCommerce"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
            </div>
         </UContainer>
      </section>

      <section id="faq" class="relative py-4 md:py-12">
         <UContainer>
            <UCard>
               <template #header>
                  <h2 class="text-lg font-semibold md:text-xl lg:text-2xl">
                     FAQ
                  </h2>
               </template>
               <UAccordion
                  :items="faqItems"
                  :ui="{
                     trigger: 'text-base',
                     body: 'text-base text-neutral-400',
                  }"
               />
            </UCard>
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
   {
      label: "Création de Site E-commerce",
      to: "/services/creation-site-e-commerce",
   },
]);

const faqItems = ref([
   {
      label: "Pourquoi choisir un développeur web freelance pour ma boutique en ligne ?",
      content:
         "Un freelance propose une solution personnalisée et économique par rapport à une agence. Vous avez un contact direct, réactif, qui crée une boutique adaptée à vos besoins et optimisée pour vos ventes.",
   },
   {
      label: "Quels sont les avantages de WooCommerce pour un site e-commerce ?",
      content:
         "WooCommerce est flexible, intuitif et puissant. Il permet de gérer facilement vos produits, paiements et livraisons, tout en offrant des options de personnalisation et une optimisation SEO pour attirer vos clients.",
   },
   {
      label: "Combien de temps faut-il pour créer un site e-commerce ?",
      content:
         "Un site e-commerce prend généralement entre 6 et 8 semaines selon sa complexité (nombre de produits, fonctionnalités). Je définis avec vous un planning précis pour respecter vos délais.",
   },
   {
      label: "Comment optimiser mon site e-commerce pour Google ?",
      content:
         "J’optimise votre boutique avec une structure rapide, un design responsive, des mots-clés ciblés et un contenu pertinent, pour améliorer votre classement sur Google et attirer plus de visiteurs.",
   },
]);

useSeoMeta({
   title: "Création de Site E-commerce à Blois - Développeur Freelance",
   description:
      "Création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques en ligne modernes, sécurisées et optimisées pour le SEO par un développeur web freelance.",
   ogTitle: "Création de Site E-commerce à Blois - Allain Web",
   ogDescription:
      "Lancez votre boutique en ligne avec Julien Allain, développeur freelance à Blois. Solutions WordPress et WooCommerce adaptées à vos besoins.",
   ogImage: "https://www.allainweb.fr/creation-site-ecommerce.svg",
   ogUrl: "https://www.allainweb.fr/services/creation-site-e-commerce",
   twitterCard: "summary_large_image",
   twitterTitle: "Création de Site E-commerce à Blois - Allain Web",
   twitterDescription:
      "Boutiques en ligne avec WordPress et WooCommerce par un freelance à Blois. Contactez-moi pour vendre en ligne !",
   twitterImage: "https://www.allainweb.fr/creation-site-ecommerce.svg",
});

useSchemaOrg([
   {
      "@type": "Service",
      "@id": "https://www.allainweb.fr/services/creation-site-e-commerce/#service",
      "serviceType": "Création de site e-commerce",
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
         "Création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques en ligne modernes, sécurisées et optimisées pour le référencement.",
      "offers": {
         "@type": "Offer",
         "name": "Création de site e-commerce",
         "description":
            "Boutiques en ligne avec WordPress et WooCommerce, design attractif et gestion autonome.",
         "priceCurrency": "EUR",
         "availability": "https://schema.org/InStock",
      },
   },
   {
      "@type": "WebPage",
      "@id": "https://www.allainweb.fr/services/creation-site-e-commerce/#webpage",
      "url": "https://www.allainweb.fr/services/creation-site-e-commerce",
      "name": "Création de Site E-commerce - Allain Web",
      "isPartOf": {
         "@id": "https://www.allainweb.fr/#website",
      },
      "description":
         "Découvrez mes services de création de sites e-commerce à Blois avec WordPress et WooCommerce : boutiques optimisées et prêtes à vendre.",
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
            {
               "@type": "ListItem",
               "position": 3,
               "name": "Création de Site E-commerce",
               "item":
                  "https://www.allainweb.fr/services/creation-site-e-commerce",
            },
         ],
      },
   },
   {
      "@type": "FAQPage",
      "@id": "https://www.allainweb.fr/services/creation-site-e-commerce/#faqpage",
      "mainEntity": faqItems.value.map((item) => ({
         "@type": "Question",
         "name": item.label,
         "acceptedAnswer": {
            "@type": "Answer",
            "text": item.content,
         },
      })),
   },
]);
</script>

<style></style>

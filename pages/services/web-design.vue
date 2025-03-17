<template>
   <div>
      <header
         class="flex flex-col items-center justify-center gap-4 py-4 md:py-8"
      >
         <span class="text-(--ui-primary) uppercase">
            Donnez vie à votre identité visuelle
         </span>
         <h1 class="text-xl font-semibold md:text-3xl lg:text-5xl">
            Services de
            <strong class="font-semibold text-(--ui-primary)"
               >Web Design</strong
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
                     src="/web-design-freelance.svg"
                     alt="Illustration développeur web freelance à Blois - Web design responsive avec Figma"
                     class="w-full rounded-lg object-cover shadow-lg"
                     :img-attrs="{ class: 'object-cover size-full rounded-lg' }"
                  />
               </div>
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <h2 class="text-lg font-semibold md:text-2xl lg:text-3xl">
                     Le
                     <strong class="font-semibold text-(--ui-primary)"
                        >web design</strong
                     >
                     : une première impression qui compte
                  </h2>
                  <p>
                     Le design de votre site internet est bien plus qu’une
                     simple esthétique : c’est le reflet de votre marque et la
                     première chose que vos visiteurs remarquent. Un design
                     soigné et intuitif inspire confiance et incite à l’action,
                     que ce soit à Blois ou ailleurs.
                  </p>
                  <p>
                     Chez AllainWeb, je crée des designs sur mesure, adaptés à
                     vos besoins et à votre audience. Basé à Blois, j’utilise
                     Figma pour concevoir des maquettes fonctionnelles,
                     optimisées pour desktop et mobile (responsive). Que vous
                     ayez besoin d’un site vitrine ou d’une boutique e-commerce,
                     je vous propose une identité visuelle unique qui capte
                     l’attention.
                  </p>
                  <p>
                     Donnez à votre projet web une allure professionnelle dès le
                     départ. Découvrez mes services de web design ci-dessous.
                  </p>
               </div>
            </div>
         </UContainer>
      </section>

      <section class="relative pt-4 md:pt-12">
         <UContainer>
            <div class="flex w-full flex-col items-center justify-center gap-4">
               <span class="text-(--ui-primary) uppercase">
                  Un design qui vous ressemble
               </span>
               <h2
                  class="text-center text-lg font-semibold md:text-2xl lg:text-3xl"
               >
                  Mes services de web design
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
                     Design responsive avec
                     <strong class="font-semibold text-(--ui-primary)"
                        >Figma</strong
                     >
                  </h3>
                  <p>
                     Un site doit être beau et fonctionnel, quel que soit
                     l’écran. Je conçois des designs responsive, parfaitement
                     adaptés aux ordinateurs de bureau et aux mobiles, pour
                     offrir une expérience utilisateur fluide et cohérente.
                  </p>
                  <p>
                     Grâce à Figma, je réalise des maquettes interactives qui
                     vous permettent de visualiser et tester votre site avant
                     son développement. Du wireframe à la version finale, chaque
                     détail est pensé pour refléter votre identité et répondre
                     aux attentes de vos visiteurs. Mes designs sont modernes,
                     intuitifs et prêts à être intégrés dans WordPress ou une
                     solution sur mesure.
                  </p>
                  <p>
                     L’UX (expérience utilisateur) et l’UI (interface
                     utilisateur) sont au cœur de mon approche. L’UX garantit
                     une navigation simple et agréable, tandis que l’UI soigne
                     l’aspect visuel pour séduire vos visiteurs. Ensemble, ils
                     augmentent l’engagement et la fidélité de vos clients.
                  </p>
                  <p>
                     Un design qui séduit et convertit, créé avec soin pour
                     votre projet.
                  </p>
               </div>
               <div class="flex-1 p-4">
                  <NuxtPicture
                     src="/creation-maquette-site.svg"
                     alt="Illustration web design responsive avec Figma - Développeur freelance à Blois"
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
      label: "Web Design",
      to: "/services/web-design",
   },
]);

const faqItems = ref([
   {
      label: "Pourquoi faire appel à un freelance pour le web design ?",
      content:
         "Un freelance offre une approche sur mesure, avec une attention personnalisée à votre projet. À Blois, je vous propose un design unique, sans les coûts élevés d’une agence, tout en restant réactif à vos besoins.",
   },
   {
      label: "Qu’est-ce qu’un design responsive et pourquoi est-ce important ?",
      content:
         "Un design responsive s’adapte à tous les écrans (desktop, mobile, tablette). C’est essentiel pour offrir une expérience fluide à vos visiteurs et améliorer votre référencement sur Google.",
   },
   {
      label: "Comment Figma améliore-t-il la création de mon site ?",
      content:
         "Figma permet de concevoir des maquettes interactives que vous pouvez tester avant développement. Cela garantit un design fidèle à vos attentes, optimisé pour l’utilisateur.",
   },
   {
      label: "Combien de temps faut-il pour concevoir un design de site ?",
      content:
         "Cela dépend de la complexité, mais une maquette simple prend 1 à 2 semaines, tandis qu’un projet plus détaillé peut nécessiter 3 à 4 semaines. Je vous tiens informé à chaque étape.",
   },
]);

useSeoMeta({
   title: "Web Design à Blois - Développeur Freelance avec Figma",
   description:
      "Services de web design à Blois : designs responsive desktop et mobile avec Figma, par un développeur freelance. Maquettes fonctionnelles pour votre site.",
   ogTitle: "Web Design à Blois - Allain Web",
   ogDescription:
      "Besoin d’un design unique pour votre site ? Julien Allain, freelance à Blois, crée des maquettes responsive avec Figma pour desktop et mobile.",
   ogImage: "https://www.allainweb.fr/web-design-illustration.svg",
   ogUrl: "https://www.allainweb.fr/services/web-design",
   twitterCard: "summary_large_image",
   twitterTitle: "Web Design à Blois - Allain Web",
   twitterDescription:
      "Designs responsive avec Figma par un freelance à Blois. Contactez-moi pour un site qui vous ressemble !",
   twitterImage: "https://www.allainweb.fr/web-design-illustration.svg",
});

useSchemaOrg([
   {
      "@type": "Service",
      "@id": "https://www.allainweb.fr/services/web-design/#service",
      "serviceType": "Web Design",
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
         "Services de web design à Blois : création de designs responsive (desktop et mobile) avec Figma, maquettes fonctionnelles pour sites internet.",
      "offers": {
         "@type": "Offer",
         "name": "Web Design Responsive",
         "description":
            "Designs sur mesure avec Figma, adaptés à tous les écrans, pour sites vitrines ou e-commerce.",
         "priceCurrency": "EUR",
         "availability": "https://schema.org/InStock",
      },
   },
   {
      "@type": "WebPage",
      "@id": "https://www.allainweb.fr/services/web-design/#webpage",
      "url": "https://www.allainweb.fr/services/web-design",
      "name": "Web Design - Allain Web",
      "isPartOf": {
         "@id": "https://www.allainweb.fr/#website",
      },
      "description":
         "Découvrez mes services de web design à Blois : designs responsive avec Figma pour desktop et mobile, adaptés à vos projets web.",
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
               "name": "Web Design",
               "item": "https://www.allainweb.fr/services/web-design",
            },
         ],
      },
   },
   {
      "@type": "FAQPage",
      "@id": "https://www.allainweb.fr/services/web-design/#faqpage",
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

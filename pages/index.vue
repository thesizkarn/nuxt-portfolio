<template>
   <div>
      <HeroHome />
      <ServicesCard />
      <AboutHome />
      <ProjectsCard />
      <section class="relative border-y py-12 md:py-24">
         <UContainer>
            <h2
               class="text-center text-xl font-semibold md:text-3xl lg:text-5xl lg:leading-[4rem]!"
            >
               Envie de concrétiser votre projet ?<br />
               Je m'occupe du
               <strong class="font-semibold text-(--ui-primary)">
                  développement web
               </strong>
               de votre site !
            </h2>
         </UContainer>
         <div class="mt-12 flex justify-center">
            <UButton icon="i-heroicons-pencil-square" to="#contact" size="xl">
               Contactez-moi
            </UButton>
         </div>
      </section>
      <SkillsHome />
      <ContactForm />
   </div>
</template>

<script lang="ts" setup>
import { useSchemaOrg } from "#imports";

useSeoMeta({
   description:
      "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
});

useSchemaOrg([
   {
      "@type": "Organization",
      "@id": "https://www.allainweb.fr/#organization",
      "name": "Allain Web",
      "url": "https://www.allainweb.fr",
      "logo": "https://www.allainweb.fr/logo.png",
      "description":
         "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
      "address": {
         "@type": "PostalAddress",
         "streetAddress": "7 Résidence de Bellevue",
         "addressLocality": "Seigy",
         "postalCode": "41110",
         "addressCountry": "FR",
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "contactPoint": {
         "@type": "ContactPoint",
         "email": "contact@allainweb.fr",
         "telephone": "+33 6 50 42 52 21",
         "contactType": "Customer Service",
         "availableLanguage": ["French"],
      },
      "sameAs": [
         "https://www.linkedin.com/in/julien-allain/",
         "https://www.malt.fr/profile/julienallain",
         "https://github.com/TheSizkarn",
      ],
   },
   {
      "@type": "WebSite",
      "@id": "https://www.allainweb.fr/#website",
      "url": "https://www.allainweb.fr",
      "name": "Allain Web - Développeur Web Freelance à Blois",
      "publisher": {
         "@id": "https://www.allainweb.fr/#organization",
      },
   },
]);
</script>

<style></style>

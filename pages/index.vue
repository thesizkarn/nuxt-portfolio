<template>
   <div>
      <HeroHome />
      <ServicesCard />
      <AboutHome />
      <ProjectsCard />
      <section class="relative border-y py-12 md:py-24">
         <UContainer>
            <h2
               class="text-center text-xl font-semibold md:text-3xl lg:text-5xl lg:!leading-[4rem]"
            >
               Envie de concrétiser votre projet ?<br />
               Je m'occupe du
               <strong class="font-semibold text-primary">
                  développement web
               </strong>
               de votre site !
            </h2>
         </UContainer>
         <div class="mt-12 flex justify-center">
            <UButton icon="i-heroicons-pencil-square" size="xl">
               Contactez-moi
            </UButton>
         </div>
      </section>
      <SkillsHome />
      <ContactForm />
   </div>
</template>

<script lang="ts" setup>
import { UContainer } from "#components";

useSeoMeta({
   description:
      "Développeur Web Freelance à Blois, Julien Allain, réalise tout type de projet web comme la création de site internet (site vitrine, WordPress, e-commerce ou plus encore).",
});
</script>

<style></style>

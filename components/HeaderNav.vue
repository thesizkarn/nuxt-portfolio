<template>
   <header
      class="sticky top-0 z-50 -mb-px border-b border-gray-200 bg-background/75 backdrop-blur dark:border-gray-800 lg:mb-0 lg:border-0"
   >
      <UContainer
         class="flex h-[--header-height] items-center justify-between gap-3"
      >
         <div class="flex items-center gap-1.5 lg:flex-1">
            <ULink
               to="/"
               class="flex items-center space-x-2 dark:text-white"
               aria-label="Allain Web"
            >
               <SvgoPicto class="size-6 lg:size-8" :font-controlled="false" />
               <SvgoLogo
                  class="w-[130px] lg:w-[160px]"
                  :font-controlled="false"
               />
            </ULink>
         </div>

         <!-- Navigation -->
         <ul class="hidden items-center gap-x-8 lg:flex">
            <li v-for="item in navigation" :key="item.href" class="relative">
               <!-- Vérifie si l'élément a des sous-menus -->
               <UPopover
                  v-if="item.child"
                  v-model:open="isPopoverOpen"
                  mode="hover"
               >
                  <ULink
                     :to="item.href"
                     active-class="text-primary"
                     inactive-class="hover:text-primary"
                     class="flex items-center gap-1 text-sm/6 font-semibold hover:text-primary"
                  >
                     {{ item.name }}
                     <UIcon
                        name="i-heroicons-chevron-down-20-solid"
                        class="h-4 w-4 flex-shrink-0 transform transition-transform duration-200"
                        :class="{ 'rotate-180': isPopoverOpen }"
                     />
                  </ULink>

                  <template #panel="{ close }">
                     <div class="w-64 rounded-lg p-2 shadow-lg">
                        <ul class="space-y-1">
                           <li
                              v-for="subItem in item.child"
                              :key="subItem.href"
                           >
                              <ULink
                                 :to="subItem.href"
                                 :class="{
                                    'text-primary':
                                       $route.path === subItem.href,
                                    'text-gray-700 dark:text-gray-300':
                                       $route.path !== subItem.href,
                                 }"
                                 class="block rounded px-4 py-2 text-sm"
                                 active-class="bg-gray-100/50 dark:bg-gray-950/50"
                                 inactive-class="hover:bg-gray-100/50 dark:hover:bg-gray-950/50"
                                 @click="close"
                              >
                                 <p class="font-medium">{{ subItem.name }}</p>
                                 <div
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                 >
                                    {{ subItem.description }}
                                 </div>
                              </ULink>
                           </li>
                        </ul>
                     </div>
                  </template>
               </UPopover>

               <!-- Lien normal si pas de sous-menus -->
               <ULink
                  v-else
                  :to="item.href"
                  active-class="text-primary"
                  inactive-class="hover:text-primary"
                  class="flex items-center gap-1 text-sm/6 font-semibold"
               >
                  {{ item.name }}
               </ULink>
            </li>
         </ul>

         <!-- Boutons de droite -->
         <div class="flex items-center justify-end gap-1.5 lg:flex-1">
            <nav class="flex items-center space-x-1">
               <ClientOnly>
                  <UButton
                     :icon="
                        isDark
                           ? 'i-heroicons-moon-20-solid'
                           : 'i-heroicons-sun-20-solid'
                     "
                     color="gray"
                     variant="ghost"
                     aria-label="Theme"
                     @click="isDark = !isDark"
                  />
                  <template #fallback>
                     <div class="h-8 w-8" />
                  </template>
               </ClientOnly>
               <UButton
                  icon="i-heroicons-bars-3-20-solid"
                  color="gray"
                  variant="ghost"
                  class="lg:hidden"
                  aria-label="Toggle menu"
                  @click="isMenuOpen = true"
               />
            </nav>
         </div>
      </UContainer>
   </header>

   <!-- Menu Mobile -->
   <UModal
      v-model="isMenuOpen"
      :overlay="false"
      :transition="false"
      :ui="{
         wrapper: '',
         inner: '',
         container: '',
         padding: '',
         margin: '',
         width: '',
         base: 'fixed block inset-0 z-50 overflow-y-auto bg-background lg:hidden',
         background: 'dark:bg-background',
      }"
   >
      <div
         class="sticky top-0 z-50 -mb-px border-b border-gray-200 bg-background/75 px-4 backdrop-blur dark:border-gray-800 sm:px-6 lg:mb-0 lg:border-0"
      >
         <div
            class="flex h-[--header-height] items-center justify-between gap-3"
         >
            <div class="flex items-center gap-1.5 lg:flex-1">
               <ULink
                  to="/"
                  class="flex items-center space-x-2 dark:text-white"
                  aria-label="Allain Web"
                  @click="isMenuOpen = false"
               >
                  <SvgoPicto class="size-6" :font-controlled="false" />
                  <SvgoLogo class="w-[130px]" :font-controlled="false" />
               </ULink>
            </div>

            <!-- Boutons de droite -->
            <div class="flex items-center justify-end gap-1.5 lg:flex-1">
               <nav class="flex items-center space-x-1">
                  <ClientOnly>
                     <UButton
                        :icon="
                           isDark
                              ? 'i-heroicons-moon-20-solid'
                              : 'i-heroicons-sun-20-solid'
                        "
                        color="gray"
                        variant="ghost"
                        aria-label="Theme"
                        @click="isDark = !isDark"
                     />
                     <template #fallback>
                        <div class="h-8 w-8" />
                     </template>
                  </ClientOnly>
                  <UButton
                     icon="i-heroicons-x-mark-20-solid"
                     color="gray"
                     variant="ghost"
                     class="lg:hidden"
                     aria-label="Toggle menu"
                     @click="isMenuOpen = false"
                  />
               </nav>
            </div>
         </div>
      </div>

      <!-- Navigation Mobile -->
      <div class="px-4 pb-6 pt-3 sm:px-6">
         <nav class="space-y-3">
            <div class="flex w-full flex-col space-y-3">
               <UAccordion
                  color="black"
                  variant="ghost"
                  :items="items"
                  :ui="{
                     wrapper: 'w-full flex flex-col space-y-3',
                     container: 'w-full flex flex-col space-y-3',
                     item: {
                        padding: '',
                        color: 'text-inherit dark:text-inherit',
                     },
                     default: {
                        class: 'flex items-center gap-1.5 group w-full p-0 focus-visible:outline-primary border-transparent',
                     },
                  }"
               >
                  <template #services>
                     <nav
                        class="ml-2.5 space-y-3 border-l border-gray-200 dark:border-gray-800"
                     >
                        <div class="space-y-1.5">
                           <ULink
                              v-for="item in servicesChild"
                              :key="item.name"
                              :to="item.href"
                              active-class="text-primary font-medium border-current"
                              inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
                              class="group -ml-px flex items-center gap-1.5 border-l pl-4"
                              @click="isMenuOpen = false"
                           >
                              {{ item.name }}
                           </ULink>
                        </div>
                     </nav>
                  </template>
               </UAccordion>
            </div>
            <div class="space-y-3">
               <ULink
                  v-for="item in navigation.slice(1)"
                  :key="item.name"
                  :to="item.href"
                  active-class="text-primary font-medium"
                  inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-500"
                  class="flex items-center gap-1.5 text-sm/6"
                  @click="isMenuOpen = false"
               >
                  {{ item.name }}
               </ULink>
            </div>
         </nav>
      </div>
   </UModal>
</template>

<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
const isDark = computed({
   get() {
      return colorMode.value === "dark";
   },
   set() {
      colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
   },
});

const isMenuOpen = ref(false);
const isPopoverOpen = ref(false);

defineShortcuts({
   o: () => (isPopoverOpen.value = !isPopoverOpen.value),
});

const servicesChild = [
   {
      name: "Web Design",
      description: "Création de maquette sur mesure de votre futur site web",
      href: "/services/web-design",
   },
   {
      name: "Création de site web",
      description: "Création de site internet WordPress ou sur mesure",
      href: "/services/creation-site-internet",
   },
   {
      name: "Création de site e-commerce",
      description: "Création de site e-commerce facile d'utilisation",
      href: "/services/creation-site-e-commerce",
   },
];

const navigation = [
   {
      name: "Services",
      href: "/services",
      child: servicesChild,
   },
   { name: "Projets", href: "/projets" },
   { name: "Contact", href: "/contact" },
];

const items = [
   {
      label: "Services",
      slot: "services",
      defaultOpen: false,
   },
];

watch(
   () => route.path,
   (newPath) => {
      // Si la route commence par /services, alors on ouvre l'accordéon
      items[0].defaultOpen = newPath.startsWith("/services");
   },
   { immediate: true },
);
</script>

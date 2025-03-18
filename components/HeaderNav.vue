<template>
   <header
      class="bg-background/70 sticky top-0 z-50 border-b border-(--ui-border)/50 backdrop-blur"
   >
      <UContainer
         class="flex h-(--header-height) items-center justify-between gap-3"
      >
         <div class="flex items-center gap-1.5 lg:flex-1">
            <ULink
               to="/"
               class="flex items-center space-x-2"
               active-class="text-(--color-foreground)"
               inactive-class="text-(--color-foreground)"
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
                     :class="{
                        'text-(--ui-primary)': item.child.some(
                           (child) => $route.path === child.href,
                        ),
                        'hover:text-(--ui-primary)': !item.child.some(
                           (child) => $route.path === child.href,
                        ),
                     }"
                     class="flex items-center gap-1 text-sm/6 font-semibold"
                  >
                     {{ item.name }}
                     <UIcon
                        name="i-heroicons-chevron-down-20-solid"
                        class="size-4 shrink-0 transform transition-transform duration-200"
                        :class="{ 'rotate-180': isPopoverOpen }"
                     />
                  </ULink>

                  <template #content>
                     <div class="w-64 rounded-lg p-2 shadow-lg">
                        <ul class="space-y-1">
                           <li
                              v-for="subItem in item.child"
                              :key="subItem.href"
                           >
                              <ULink
                                 :to="subItem.href"
                                 :class="{
                                    'text-(--ui-primary)':
                                       $route.path === subItem.href,
                                    'text-gray-700 dark:text-gray-300':
                                       $route.path !== subItem.href,
                                 }"
                                 class="block rounded px-4 py-2 text-sm"
                                 active-class="bg-gray-100/50 dark:bg-gray-950/50"
                                 inactive-class="hover:bg-gray-100/50 dark:hover:bg-gray-950/50"
                                 @click="isPopoverOpen = false"
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
                  active-class="text-(--ui-primary)"
                  inactive-class="hover:text-(--ui-primary)"
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
                     color="neutral"
                     variant="ghost"
                     aria-label="Theme"
                     @click="isDark = !isDark"
                  />
                  <template #fallback>
                     <div class="h-8 w-8" />
                  </template>
               </ClientOnly>
               <UModal
                  v-model:open="isMenuOpen"
                  :overlay="false"
                  :transition="false"
                  :fullscreen="true"
                  :ui="{ content: 'bg-background' }"
               >
                  <UButton
                     icon="i-heroicons-bars-3-20-solid"
                     color="neutral"
                     variant="ghost"
                     class="lg:hidden"
                     aria-label="Toggle menu"
                     @click="isMenuOpen = true"
                  />
                  <template #content>
                     <div
                        class="bg-background/75 sticky top-0 z-50 -mb-px border-b border-gray-200 px-4 backdrop-blur-sm sm:px-6 lg:mb-0 lg:border-0 dark:border-gray-800"
                     >
                        <div
                           class="flex h-(--header-height) items-center justify-between gap-3"
                        >
                           <div class="flex items-center gap-1.5 lg:flex-1">
                              <ULink
                                 to="/"
                                 class="flex items-center space-x-2 dark:text-white"
                                 aria-label="Allain Web"
                                 @click="isMenuOpen = false"
                              >
                                 <SvgoPicto
                                    class="size-6"
                                    :font-controlled="false"
                                 />
                                 <SvgoLogo
                                    class="w-[130px]"
                                    :font-controlled="false"
                                 />
                              </ULink>
                           </div>

                           <!-- Boutons de droite -->
                           <div
                              class="flex items-center justify-end gap-1.5 lg:flex-1"
                           >
                              <nav class="flex items-center space-x-1">
                                 <ClientOnly>
                                    <UButton
                                       :icon="
                                          isDark
                                             ? 'i-heroicons-moon-20-solid'
                                             : 'i-heroicons-sun-20-solid'
                                       "
                                       color="neutral"
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
                                    color="neutral"
                                    variant="ghost"
                                    class="lg:hidden"
                                    aria-label="Toggle menu"
                                    @click="isMenuOpen = false"
                                 />
                              </nav>
                           </div>
                        </div>
                     </div>

                     <div
                        class="h-full max-h-[calc(100vh-var(--header-height))]"
                     >
                        <nav class="h-full space-y-3 py-2">
                           <div class="flex w-full flex-col space-y-3">
                              <UAccordion
                                 color="black"
                                 variant="ghost"
                                 :items="items"
                                 :ui="{ trigger: 'py-0' }"
                                 class="px-2"
                              >
                                 <template #services>
                                    <nav
                                       class="mt-2 ml-2.5 space-y-3 border-l border-gray-200 dark:border-gray-800"
                                    >
                                       <div class="space-y-2">
                                          <ULink
                                             v-for="item in servicesChild"
                                             :key="item.name"
                                             :to="item.href"
                                             active-class="text-(--ui-primary) font-medium border-current"
                                             inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400"
                                             class="group flex items-center gap-1.5 border-l pl-4 text-sm"
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
                                 active-class="text-(--ui-primary) font-medium"
                                 inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-500"
                                 class="flex items-center gap-1.5 px-2 text-sm/6"
                                 @click="isMenuOpen = false"
                              >
                                 {{ item.name }}
                              </ULink>
                           </div>
                        </nav>
                     </div>
                  </template>
               </UModal>
            </nav>
         </div>
      </UContainer>
   </header>
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
   // { name: "Contact", href: "#contact" },
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

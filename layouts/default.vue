<template>
   <div class="relative z-10">
      <HeaderNav />
      <main class="min-h-[calc(100vh-var(--header-height))]">
         <slot />
      </main>
      <FooterPage />
   </div>
</template>

<script setup></script>

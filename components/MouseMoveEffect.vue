<template>
   <div
      class="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300"
      :style="{
         background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }"
   />
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";

const mousePosition = reactive({ x: 0, y: 0 });

function handleMouseMove(event: MouseEvent) {
   mousePosition.x = event.clientX;
   mousePosition.y = event.clientY;
}

onMounted(() => {
   window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
   window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <div class="min-h-screen antialiased">
    <AppNavbar />

    <!-- <RouterView /> -->
    <RouterView v-slot="{ Component }">
      <Transition
        name="fade"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
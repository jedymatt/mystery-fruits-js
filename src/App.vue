<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
</script>

<template>
  <div class="antialiased">
    <div class="flex flex-col min-h-screen">
      <AppNavbar />
      <RouterView
        v-slot="{ Component }"
        class="flex-grow"
      >
        <Transition
          name="fade"
          mode="out-in"
        >
          <component
            :is="Component"
          />
        </Transition>
      </RouterView>
    </div>
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
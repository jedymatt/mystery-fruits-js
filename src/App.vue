<script setup>
import { RouterView } from 'vue-router'
import NavLayout from '@/layouts/NavLayout.vue'
import { onMounted } from 'vue';

onMounted(() => {
  // When the page is loaded, apply the dark mode if it's set to dark from localStorage
  if (localStorage.theme === 'dark') {
    document.getElementsByTagName('html')[0].classList.add('dark')
  }
})
</script>

<template>
  <div class="antialiased">
    <div class="flex flex-col min-h-screen">
      <NavLayout />
      <RouterView
        v-slot="{ Component }"
        class="flex-grow"
      >
        <Transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
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
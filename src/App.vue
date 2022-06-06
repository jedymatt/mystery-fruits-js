<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavbar.vue'
</script>

<template>
  <div class="min-h-screen antialiased">
    <AppNavbar />

    <RouterView />
  </div>
</template>

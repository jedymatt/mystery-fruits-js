<script setup lang="ts">
defineProps<{
  to: string;
  active: boolean;
}>();
</script>

<template>
  <NuxtLink
    :to="to"
    class="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-600 dark:text-gray-300 dark:hover:bg-pink-950/40 dark:hover:text-pink-400"
    :class="{ 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400': active }"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';

defineProps<{
  href: string;
}>();
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/80"
  >
    <div class="flex flex-1 items-center gap-3">
      <slot />
    </div>
    <ExternalLink class="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600" />
  </a>
</template>

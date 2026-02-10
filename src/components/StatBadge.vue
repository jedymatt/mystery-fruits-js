<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  count: number;
  color: 'amber' | 'emerald';
}>();

const colorClasses = computed(() => {
  if (props.count === 0) return 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500';
  if (props.color === 'amber') return 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400';
  return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400';
});
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
    :class="colorClasses"
  >
    <slot />
  </span>
</template>

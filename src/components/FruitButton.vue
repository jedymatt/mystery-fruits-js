<script setup lang="ts">
import { computed } from "vue";
import FruitImage from "./FruitImage.vue";

const props = withDefaults(defineProps<{
  fruit: string;
  selectedIndex?: number;
  disabled?: boolean;
}>(), {
  selectedIndex: -1,
  disabled: false,
});

const isSelected = computed(() => props.selectedIndex !== -1);
</script>

<template>
  <button
    class="group relative aspect-square w-full rounded-xl border-2 p-3 transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      isSelected
        ? 'scale-95 border-pink-400 bg-pink-500/15 shadow-md dark:border-pink-500 dark:bg-pink-500/20'
        : 'border-transparent bg-gray-50 hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md dark:bg-gray-700/50 dark:hover:border-pink-600',
    ]"
    :disabled="disabled"
  >
    <FruitImage
      :fruit="fruit"
      class="mx-auto h-12 w-12 transition-transform duration-150 group-hover:scale-110 sm:h-14 sm:w-14"
    />
    <div class="mt-1 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
      {{ fruit }}
    </div>
    <div
      v-if="isSelected"
      class="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-white ring-2 ring-white animate-badge-pop dark:ring-gray-800"
    >
      <span class="text-xs font-bold leading-none">{{ selectedIndex + 1 }}</span>
    </div>
  </button>
</template>

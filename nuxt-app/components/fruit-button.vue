<script setup>
import { computed } from "vue";
const props = defineProps({
  fruit: {
    type: String,
    required: true,
  },

  selectedIndex: {
    type: Number,
    default: -1,
  },
});

// const selectedIndex = computed(() => props.selectedIndex + 1);

const isSelected = computed(() => props.selectedIndex !== -1);
</script>

<template>
  <button
    class="relative flex flex-col items-center justify-center gap-1 p-2 transition-all duration-300 rounded-md hover:cursor-pointer overflow-clip"
    :class="[
      isSelected ? 'bg-pink-500/20' : 'hover:drop-shadow-[0_0_1em_#ec4899] dark:hover:drop-shadow-[0_0_2em_#ec4899]',
    ]"
  >
    <FruitImage class="aspect-square" :fruit="fruit" />
    <div class="text-xs font-semibold uppercase">
      {{ fruit }}
    </div>
    <div
      v-if="isSelected"
      class="absolute flex items-center justify-center w-5 h-5 text-gray-700 bg-white border border-gray-400 rounded-full top-2 right-2"
    >
      <span class="text-xs font-medium text-gray-700">{{
        selectedIndex + 1
      }}</span>
    </div>
  </button>
</template>

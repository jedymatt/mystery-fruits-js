<script setup lang="ts">
import { computed } from "vue";
import FruitImage from "./FruitImage.vue";

const props = withDefaults(defineProps<{
  fruit: string;
  selectedIndex?: number;
}>(), {
  selectedIndex: -1,
});

const isSelected = computed(() => props.selectedIndex !== -1);

</script>

<template>
  <button
    class="relative flex flex-col gap-1 p-2 items-center justify-center hover:cursor-pointer rounded-md"
    :class="[
      isSelected
        ? 'bg-pink-500/20'
        : 'hover:drop-shadow-[0_0_2em_#ec4899]',
    ]"
  >
    <FruitImage
      :fruit="fruit"
      class="h-16 w-16"
    />
    <div class="text-xs uppercase font-semibold">
      {{ fruit }}
    </div>
    <div
      v-if="isSelected"
      class="absolute top-2 right-2 text-gray-700 border border-gray-400 rounded-full flex items-center justify-center h-5 w-5 bg-white"
    >
      <span class="text-xs font-medium text-gray-700">{{
        selectedIndex + 1
      }}</span>
    </div>
  </button>
</template>

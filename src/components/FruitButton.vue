<script setup>
import FruitImage from './FruitImage.vue';
const props = defineProps({
  fruit: {
    type: String,
    required: true,
  },

  selectedIndex: {
    type: Number,
    default: -1,
  }
})

function getSelectedIndex() {
  return props.selectedIndex + 1;
}

function isSelected() {
  return props.selectedIndex !== -1;
}

</script>

<template>
  <button
    class="relative flex flex-col gap-1 p-2 items-center justify-center hover:cursor-pointer rounded-lg"
    :class="[isSelected() ? 'bg-gray-200' : 'hover:bg-gray-100']"
  >
    <FruitImage
      :fruit="fruit"
      class="h-16 w-16"
    />
    <div class="text-xs uppercase font-semibold">
      {{ fruit }}
    </div>
    <div
      v-if="isSelected()"
      class="absolute top-2 right-2 text-gray-700 border border-gray-400 rounded-full flex items-center justify-center h-5 w-5 bg-white"
    >
      <span class="text-xs font-medium text-gray-700">{{ getSelectedIndex() }}</span>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  fruit: {
    type: String,
  },

  selectedIndex: {
    type: Number,
  },
})

const imageUrl = new URL(`../assets/images/${props.fruit}.png`, import.meta.url).href

function getSelectedIndex() {
  return props.selectedIndex + 1;
}

function isSelected() {
  return props.selectedIndex !== -1;
}

</script>

<template>
    <div class="relative flex flex-col gap-1 p-2 items-center hover:cursor-pointer hover:bg-gray-100 rounded-lg"
      :class="{
        'bg-gray-200': isSelected(),
      }">
      <img :src="imageUrl" :alt="`${fruit} image`" class="h-16 w-16 md:h-32 md:w-32">
      <div class="text-xs uppercase font-semibold">
        {{ fruit }}
      </div>
      <div v-if="isSelected()"
        class="absolute top-2 right-2 text-gray-700 border-2 border-gray-400 rounded-full p-0.5 flex items-center justify-center h-6 w-6 bg-white">
        <span class="text-xs font-medium text-gray-700">{{ getSelectedIndex() }}</span>
      </div>
    </div>
</template>

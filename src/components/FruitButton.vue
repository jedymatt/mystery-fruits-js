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

function getIndex(index) {
  return index !== -1 ? index + 1 : null;
}

</script>

<template>
  <div class="flex flex-col gap-1 items-center p-2 hover:cursor-pointer hover:bg-gray-100 rounded-lg"
  :class="[{
    'bg-gray-100 border': selectedIndex !== -1,
  }]">
    <img :src="imageUrl" :alt="`${fruit} image`" class="h-16 w-16 md:h-32 md:w-32">
    <div class="text-xs uppercase font-semibold">
      {{ fruit }}
    </div>
    <div>
      <span :class="[
          {
            'text-gray-700 border-2 rounded-full p-1 text-sm': selectedIndex !== -1,
          }
      ]"
      class="absolute bottom-0 right-0">
        {{ getIndex(selectedIndex) }}
      </span>
    </div>
  </div>
</template>

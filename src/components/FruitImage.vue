<script setup>
const props = defineProps({
    fruit: {
        type: String,
    },
});

const imageUrl = new URL(`../assets/images/${props.fruit}.png`, import.meta.url).href;

</script>

<template>
  <div class="p-4 rounded-md border flex flex-col gap-2 items-center justify-center overflow-clip">
    <img
      :src="imageUrl"
      :alt="fruit"
      class="h-16 w-16 md:h-32 md:w-32"
    >
    <span class="uppercase text-sm font-semibold text-gray-800">{{ fruit }}</span>
  </div>
</template>

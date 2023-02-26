<script setup>
const props = defineProps({
  fruit: {
    type: String,
    required: true,
  },
});

const imageUrl = new URL(`/assets/images/${props.fruit}.png`, import.meta.url)
  .href;
</script>

<template>
  <img class="w-full h-full" :src="imageUrl" :alt="fruit" />
</template>

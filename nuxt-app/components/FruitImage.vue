<script setup>
const props = defineProps({
  fruit: {
    type: String,
    required: true
  },
});

const imageUrl = new URL(`/assets/images/${props.fruit}.png`, import.meta.url).href;

</script>

<template>
  <img
    :src="imageUrl"
    :alt="fruit"
  >
</template>

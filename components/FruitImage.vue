<script setup lang="ts">
const props = defineProps<{
  fruit: string;
}>();

const imageUrl = new URL(`../assets/images/${props.fruit}.png`, import.meta.url).href;

</script>

<template>
  <img
    :src="imageUrl"
    :alt="fruit"
  >
</template>

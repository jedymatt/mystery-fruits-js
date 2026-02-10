<script setup lang="ts">
defineProps<{
  href?: string;
  label?: string;
}>();

defineEmits<{
  click: [];
}>();
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="flex items-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
    @click="!href && $emit('click')"
  >
    <span
      v-if="label"
      class="sr-only"
    >{{ label }}</span>
    <slot />
  </component>
</template>

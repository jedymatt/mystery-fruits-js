<script setup>
import FruitImage from "./fruit-image.vue";

defineProps({
  history: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <div class="grid grid-flow-row mt-4 border divide-y rounded-md">
      <div v-for="items in history" :key="items">
        <div
          class="grid self-center grid-cols-5 place-content-center animate-slide-in"
        >
          <div
            v-for="fruit in items.selectedFruits"
            :key="fruit"
            class="flex flex-col items-center justify-center"
          >
            <FruitImage :fruit="fruit" class="w-6 h-6" />
            <span class="text-xs capitalize">
              {{ fruit }}
            </span>
          </div>

          <div class="border-l self-center flex flex-col items-center p-0.5">
            <div class="flex items-center justify-center w-6 h-6 font-semibold">
              {{ items.correctFruits }}
            </div>
            <span class="text-xs text-center">Correct Fruits</span>
          </div>
          <div class="flex flex-col items-center self-center p-1">
            <div class="flex items-center justify-center w-6 h-6 font-semibold">
              {{ items.correctFruitsOrder }}
            </div>
            <span class="text-xs text-center">Correct Fruits Order</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

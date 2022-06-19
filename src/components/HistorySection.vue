<script setup>
import FruitImage from './FruitImage.vue';

defineProps({
  history: {
    type: Array,
    default: () => []
  },
})
</script>

<template>
  <div class="w-full">
    <h2 class="text-pink-500">
      History
    </h2>
    <div class="p-2 border rounded-md">
      <div
        v-for="items in history"
        :key="items"
        class="border-b last:border-none"
      >
        <div class="grid grid-cols-5 self-center p-1 place-content-center">
          <div
            v-for="fruit in items.selectedFruits"
            :key="fruit"
            class="flex flex-col justify-center items-center"
          >
            <FruitImage
              :fruit="fruit"
              class="h-8 w-8"
            />
            <span class="text-xs capitalize">
              {{ fruit }}
            </span>
          </div>

          <div class="border-l self-center flex flex-col items-center p-1">
            <div class="h-8 w-8 flex items-center justify-center">
              {{ items.correctFruits }}
            </div>
            <span class="text-xs text-center">Correct Fruits</span>
          </div>
          <div class="self-center flex flex-col items-center p-1">
            <div class="h-8 w-8 flex items-center justify-center">
              {{ items.correctFruitsOrder }}
            </div>
            <span class="text-xs text-center">Correct Fruits Order</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
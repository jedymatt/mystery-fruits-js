<script setup lang="ts">
import FruitImage from './FruitImage.vue';
import type { HistoryItem } from '@/composables/history';

withDefaults(defineProps<{
  history?: HistoryItem[];
}>(), {
  history: () => [],
})
</script>

<template>
  <div>
    <h2 class="text-pink-500">
      History
    </h2>
    <div
      class="mt-4 border divide-y rounded-md grid grid-flow-row"
    >
      <div
        v-for="(items, index) in history"
        :key="index"
      >
        <div class="grid grid-cols-5 self-center place-content-center animate-slide-in">
          <div
            v-for="fruit in items.selectedFruits"
            :key="fruit"
            class="flex flex-col justify-center items-center"
          >
            <FruitImage
              :fruit="fruit"
              class="h-6 w-6"
            />
            <span class="text-xs capitalize">
              {{ fruit }}
            </span>
          </div>

          <div class="border-l self-center flex flex-col items-center p-0.5">
            <div class="h-6 w-6 flex items-center justify-center font-semibold">
              {{ items.correctFruits }}
            </div>
            <span class="text-xs text-center">Correct Fruits</span>
          </div>
          <div class="self-center flex flex-col items-center p-1">
            <div class="h-6 w-6 flex items-center justify-center font-semibold">
              {{ items.correctFruitsOrder }}
            </div>
            <span class="text-xs text-center">Correct Fruits Order</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
      >
        <div class="grid grid-cols-2">
          <div class="flex flex-row">
            <div
              v-for="fruit in items.selectedFruits"
              :key="fruit"
              class="flex flex-col items-center justify-center gap-1"
            >
              <FruitImage
                :fruit="fruit"
                class="h-8 w-8"
              />
              <span class="text-xs capitalize">
                {{ fruit }}
              </span>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col items-center justify-center">
              <div class="h-8 w-8">
                {{ items.correctFruits }}
              </div>
              <span class="text-xs">Correct Fruits</span>
            </div>
            <div class="flex flex-col items-center justify-center">
              <div class="h-8 w-8">
                {{ items.correctFruitsOrder }}
              </div>
              <span class="text-xs">Correct Fruits Order</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <div
        v-for="items in history"
        :key="items"
        class="flex flex-row items-center justify-center gap-2 py-2 border-b last:border-b-0"
      >
        <div
          v-for="fruit in items.selectedFruits"
          :key="fruit"
          class="flex flex-col items-center justify-center gap-1"
        >
          <FruitImage
            :fruit="fruit"
            class="h-8 w-8"
          />
          <span class="text-xs capitalize">
            {{ fruit }}
          </span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="h-8 w-8">
            {{ items.correctFruits }}
          </div>
          <span class="text-xs">Correct Fruits</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="h-8 w-8">
            {{ items.correctFruitsOrder }}
          </div>
          <span class="text-xs">Correct Fruits Order</span>
        </div>
      </div> -->
    </div>
  </div>
</template>
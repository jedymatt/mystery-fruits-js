<script setup>
import { computed } from 'vue';
import { countMatchingArrayOrder } from '../lib/counter';

const props = defineProps({
  hiddenFruits: {
    type: Array,
    required: true,
  },
  selectedFruits: {
    type: Array,
    required: true,
  },
  restartGame: {
    type: Function,
    required: true,
  },
  attemptsLeft: {
    type: Number,
    required: true,
    default: 0,
  },
});

const remark = computed(() => isSuccess() ? `You guessed it all with ${props.attemptsLeft} remaining attempts.` : 'You have no more attempts left.');

function isSuccess() {
  return countMatchingArrayOrder(props.hiddenFruits, props.selectedFruits) === props.hiddenFruits.length;
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-pink-500 inline-flex items-center gap-1">
      Game Over
      <div class="h-auto w-8 hover:animate-bounce">
        <IconsTrophyIcon v-if="isSuccess()" />
        <IconsHeartCrackIcon v-else />
      </div>
    </h1>
    <p class="text-gray-800">
      {{ remark }}
    </p>
    <p class="text-gray-800">
      The correct answer is:
    </p>

    <div class="flex flex-wrap flex-row gap-4">
      <div
        v-for="fruit in hiddenFruits"
        :key="fruit"
        class="flex flex-col items-center justify-center gap-2"
      >
        <FruitImage
          :fruit="fruit"
          class="h-16 w-16 lg:h-32 lg:w-32"
        />
        <span class="text-sm uppercase">{{ fruit }}</span>
      </div>
    </div>

    <div class="mt-4">
      <button
        class="p-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 text-sm font-medium inline-flex items-center justify-center gap-2"
        @click="restartGame()"
      >
        <Icon name="heroicons:arrow-path-solid" class="h-5 w-5 inline-block" />
        Retry
      </button>
    </div>
  </div>
</template>
<script setup>
import PrimaryButtonVue from '../components/PrimaryButton.vue';
import FruitImageVue from '../components/FruitImage.vue';
import TrophyIconVue from '../components/icons/TrophyIcon.vue';
import HeartCrackIconVue from '../components/icons/HeartCrackIcon.vue';
import { RefreshIcon } from '@heroicons/vue/solid'
import { countMatchingArrayOrder } from '../lib/counter';
import { computed } from 'vue';

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
        <TrophyIconVue v-if="isSuccess()" />
        <HeartCrackIconVue v-else />
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
        <FruitImageVue
          :fruit="fruit"
          class="h-16 w-16 lg:h-32 lg:w-32"
        />
        <span class="text-sm uppercase">{{ fruit }}</span>
      </div>
    </div>

    <div class="mt-4">
      <PrimaryButtonVue
        class="flex items-center justify-center gap-2"
        @click="restartGame()"
      >
        <RefreshIcon class="h-5 w-5 inline-block" />
        Retry
      </PrimaryButtonVue>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { countMatchingArrayOrder } from "../lib/counter";

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

const remark = computed(() =>
  isSuccess()
    ? `You guessed it all with ${props.attemptsLeft} remaining attempts.`
    : "You have no more attempts left."
);

function isSuccess() {
  return (
    countMatchingArrayOrder(props.hiddenFruits, props.selectedFruits) ===
    props.hiddenFruits.length
  );
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="inline-flex items-center gap-1 text-pink-500">
      Game Over
      <div class="w-8 h-auto hover:animate-bounce">
        <IconsTrophyIcon v-if="isSuccess()" />
        <IconsHeartCrackIcon v-else />
      </div>
    </h1>
    <p class="text-gray-800">
      {{ remark }}
    </p>
    <p class="text-gray-800">The correct answer is:</p>

    <div class="flex flex-row flex-wrap gap-4">
      <div
        v-for="(fruit, index) in hiddenFruits"
        :key="fruit"
        class="flex flex-col items-center justify-center gap-2"
      >
        <FruitImage
          :fruit="fruit"
          class="w-16 h-16 lg:h-32 lg:w-32"
          :class="{
            'drop-shadow-[0_0_2em_#84cc16]':
              hiddenFruits[index] === selectedFruits[index],
            'drop-shadow-[0_0_2em_#ef4444]':
              hiddenFruits[index] !== selectedFruits[index],
          }"
        />
        <span class="text-sm uppercase">{{ fruit }}</span>
      </div>
    </div>

    <div class="mt-6">
      <PrimaryButton @click="restartGame()">
        <Icon name="heroicons:arrow-path-solid" class="inline-block w-5 h-5" />
        Retry
      </PrimaryButton>
    </div>
  </div>
</template>

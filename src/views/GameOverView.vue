<script setup>
import PrimaryButtonVue from '../components/PrimaryButton.vue';
import FruitImageVue from '../components/FruitImage.vue';
import TrophyIconVue from '../components/icons/TrophyIcon.vue';
import HeartCrackIconVue from '../components/icons/HeartCrackIcon.vue';

const props = defineProps({
    answer: {
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

const remark = props.attemptsLeft > 0 ? `You guessed it all with ${props.attemptsLeft} remaining attempts.` : 'You have no more attempts left.';

function isSuccess() {
    return props.attemptsLeft > 0;
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
        v-for="fruit in answer"
        :key="fruit"
      >
        <FruitImageVue :fruit="fruit" />
      </div>
    </div>

    <div class="mt-4">
      <PrimaryButtonVue @click="restartGame()">
        Restart Game
      </PrimaryButtonVue>
    </div>
  </div>
</template>
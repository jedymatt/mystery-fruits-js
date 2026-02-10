<script setup lang="ts">
import { RefreshCw, Trophy, HeartCrack, Sparkles } from 'lucide-vue-next';
import { computed } from 'vue';
import FruitImage from './FruitImage.vue';
import { countMatchingArrayOrder } from '../lib/counter';

const props = withDefaults(defineProps<{
  hiddenFruits: string[];
  selectedFruits: string[];
  restartGame: () => void;
  attemptsLeft?: number;
}>(), {
  attemptsLeft: 0,
});

const isWin = computed(() =>
  countMatchingArrayOrder(props.hiddenFruits, props.selectedFruits) === props.hiddenFruits.length
);

const remark = computed(() =>
  isWin.value
    ? `You guessed it all with ${props.attemptsLeft} remaining attempts.`
    : 'You have no more attempts left.'
);
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 animate-game-over-enter">
    <!-- Icon circle -->
    <div class="relative">
      <div
        class="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br"
        :class="
          isWin
            ? 'from-amber-300 to-amber-500 animate-winner-pulse'
            : 'from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-700'
        "
      >
        <Trophy
          v-if="isWin"
          class="h-10 w-10 text-white"
        />
        <HeartCrack
          v-else
          class="h-10 w-10 text-white"
        />
      </div>
      <Sparkles
        v-if="isWin"
        class="absolute -top-2 -right-2 h-5 w-5 text-amber-400 animate-bounce"
      />
      <Sparkles
        v-if="isWin"
        class="absolute -bottom-1 -left-3 h-4 w-4 text-amber-300 animate-bounce [animation-delay:0.3s]"
      />
    </div>

    <!-- Heading -->
    <div class="text-center">
      <h1
        v-if="isWin"
        class="bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent"
      >
        You Did It!
      </h1>
      <h1
        v-else
        class="text-gray-700 dark:text-gray-300"
      >
        Game Over
      </h1>
      <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {{ remark }}
      </p>
    </div>

    <!-- Answer reveal -->
    <div>
      <p class="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        The Answer
      </p>
      <div class="flex gap-4">
        <div
          v-for="(fruit, index) in hiddenFruits"
          :key="fruit"
          class="flex flex-col items-center gap-2 rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 p-3 shadow-sm animate-fruit-reveal dark:from-gray-700 dark:to-gray-800"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <FruitImage
            :fruit="fruit"
            class="h-14 w-14 sm:h-16 sm:w-16"
          />
          <span class="text-xs font-semibold uppercase text-gray-600 dark:text-gray-300">
            {{ fruit }}
          </span>
        </div>
      </div>
    </div>

    <!-- Play Again button -->
    <button
      class="mt-2 inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-pink-600 active:scale-95"
      @click="restartGame()"
    >
      <RefreshCw class="h-4 w-4" />
      Play Again
    </button>
  </div>
</template>

<script setup lang="ts">
import { countMatchingArray, countMatchingArrayOrder } from "@/lib/counter";
import { computed, onMounted, ref, watch } from "vue";

// user takes an attempt >> disable inputs >> check if gameover (disable inputs) >> add to history >> enable inputs
const { hiddenFruits, initialFruits, resetFruits } = useFruits();
const { history, addToHistory, clearHistory } = useHistory();

const attemptsLeft = ref<number>(6);
const selectedFruits = ref<string[]>([]);
const lastSelectedFruits = ref<string[]>([]);
const isGameOver = ref(false);
const isDisabled = ref(false);

const presentFruitsCount = computed(() => {
  return countMatchingArray(hiddenFruits.value, lastSelectedFruits.value);
});
const orderedFruitsCount = computed(() => {
  return countMatchingArrayOrder(hiddenFruits.value, lastSelectedFruits.value);
});

function toggleFruit(fruit: string) {
  const fruitIndexInSelectedFruits = selectedFruits.value.indexOf(fruit);

  if (fruitIndexInSelectedFruits === -1) {
    selectedFruits.value = [...selectedFruits.value, fruit];
    return;
  }

  if (fruitIndexInSelectedFruits === selectedFruits.value.length - 1) {
    selectedFruits.value = selectedFruits.value.slice(0, -1);
    return;
  }

  if (fruitIndexInSelectedFruits === 0) {
    selectedFruits.value = selectedFruits.value.slice(0, 1);
  }
}

function addSelectedFruitsToHistory() {
  addToHistory({
    selectedFruits: lastSelectedFruits.value,
    correctFruits: presentFruitsCount.value,
    correctFruitsOrder: orderedFruitsCount.value,
  });
}

function getSelectedFruitIndex(fruit: string) {
  return selectedFruits.value.indexOf(fruit);
}

function restartGame() {
  resetFruits();

  selectedFruits.value = [];
  lastSelectedFruits.value = [];
  attemptsLeft.value = 6;
  clearHistory();
  isGameOver.value = false;
  isDisabled.value = false;
  console.log(`Answer: ${hiddenFruits.value}`);
}

watch(selectedFruits, () => {
  if (selectedFruits.value.length === 3) {
    attemptsLeft.value--;
  }
});

watch(attemptsLeft, async () => {
  if (attemptsLeft.value === 6) return;

  isDisabled.value = true;
  await new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 400);
  });

  lastSelectedFruits.value = selectedFruits.value.slice(0);
  selectedFruits.value = [];

  if (presentFruitsCount.value === 3 && orderedFruitsCount.value === 3) {
    isGameOver.value = true;
    isDisabled.value = true;
    return;
  }

  if (attemptsLeft.value === 0) {
    isGameOver.value = true;
    isDisabled.value = true;
    return;
  }

  addSelectedFruitsToHistory();
  isDisabled.value = false;
});

onMounted(() => {
  console.log(`Answer: ${hiddenFruits.value}`);
});
</script>

<template>
  <PageContainer>
    <InstructionBanner />
    <div
      v-if="!isGameOver"
      id="game"
      class="space-y-5"
    >
      <!-- Attempts indicator -->
      <div class="flex flex-col items-center gap-1.5">
        <div class="flex items-center gap-2">
          <div
            v-for="i in 6"
            :key="i"
            class="h-2.5 w-2.5 rounded-full transition-all duration-300"
            :class="
              i <= attemptsLeft
                ? 'bg-pink-500 shadow-[0_0_6px_rgba(236,72,153,0.5)]'
                : 'bg-gray-200 dark:bg-gray-700'
            "
          />
        </div>
        <span class="text-xs font-medium text-gray-400 dark:text-gray-500">
          Attempts: {{ attemptsLeft }}/6
        </span>
      </div>

      <!-- Game board card -->
      <div
        class="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80"
      >
        <div class="grid grid-cols-3 gap-3">
          <FruitButton
            v-for="fruit in initialFruits"
            :key="fruit"
            :fruit="fruit"
            :selected-index="getSelectedFruitIndex(fruit)"
            :disabled="isDisabled"
            @click="toggleFruit(fruit)"
          />
        </div>
      </div>

      <!-- History -->
      <HistorySection :history="history" />
    </div>
    <GameOverSection
      v-if="isGameOver"
      :restart-game="restartGame"
      :hidden-fruits="hiddenFruits"
      :attempts-left="attemptsLeft"
      :selected-fruits="lastSelectedFruits"
    />
  </PageContainer>
</template>

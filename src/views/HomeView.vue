useInstructionuseInstruction
<script setup>
import FruitButton from "@/components/FruitButton.vue";
import GameOverSection from "@/components/GameOverSection.vue";
import HistorySection from "@/components/HistorySection.vue";
import InstructionBanner from "@/components/InstructionBanner.vue";
import { useFruits } from "@/composables/fruits";
import { useHistory } from "@/composables/history";
import { countMatchingArray, countMatchingArrayOrder } from "@/lib/counter";
import { computed, onMounted, ref, watch } from "vue";

// user takes an attempt >> disable inputs >> check if gameover (disable inputs) >> add to history >> enable inputs
const { hiddenFruits, initialFruits, resetFruits } = useFruits();
const { history, addToHistory, clearHistory } = useHistory();

const attemptsLeft = ref(6);
const selectedFruits = ref([]);
const lastSelectedFruits = ref([]);
const isGameOver = ref(false);
const isDisabled = ref(false);

const presentFruitsCount = computed(() => {
  return countMatchingArray(hiddenFruits.value, lastSelectedFruits.value);
});
const orderedFruitsCount = computed(() => {
  return countMatchingArrayOrder(hiddenFruits.value, lastSelectedFruits.value);
});

function toggleFruit(fruit) {
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

function getSelectedFruitIndex(fruit) {
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
  await new Promise((resolve) => {
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
  <main class="md:p-12 p-2 relative">
    <InstructionBanner />
    <div
      v-if="!isGameOver"
      id="game"
      class="grid lg:grid-cols-2 place-items-start justify-items-center content-center gap-4"
    >
      <div class="h-full w-full">
        <div class="mt-4 text-pink-500 font-semibold">
          Remaining Attempts:
          <span class="font-black">{{ attemptsLeft }}</span>
        </div>
        <div class="mt-4 grid grid-cols-3 gap-2 place-items-center">
          <div v-for="fruit in initialFruits" :key="fruit">
            <FruitButton
              :fruit="fruit"
              :selected-index="getSelectedFruitIndex(fruit)"
              :disabled="isDisabled"
              class="h-24 w-24"
              @click="toggleFruit(fruit)"
            />
          </div>
        </div>
      </div>
      <div class="h-full w-full">
        <HistorySection :history="history" />
      </div>
    </div>
    <GameOverSection
      v-if="isGameOver"
      :restart-game="restartGame"
      :hidden-fruits="hiddenFruits"
      :attempts-left="attemptsLeft"
      :selected-fruits="lastSelectedFruits"
    />
  </main>
</template>

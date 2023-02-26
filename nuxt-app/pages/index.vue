<script setup>
import { computed, onMounted, ref } from "vue";

import { countMatchingArray, countMatchingArrayOrder } from "../lib/counter";

const { hiddenFruits, randomFruits, resetFruits } = useFruits();
const { history, addToHistory, clearHistory } = useHistory();

const availableAttempts = ref(6);
const selectedFruits = ref([]);
const isGameOver = ref(false);
const isLoading = ref(false);

function selectFruit(fruit) {
  if (isLoading.value || isGameOver.value) return;

  if (selectedFruits.value.length < 3) {
    if (selectedFruits.value.includes(fruit)) {
      unselectFruit(fruit);
    } else {
      selectedFruits.value.push(fruit);
    }
  }

  if (selectedFruits.value.length === 3) {
    isLoading.value = true;
    availableAttempts.value--;

    setTimeout(function () {
      isGameOver.value =
        availableAttempts.value <= 0 ||
        countMatchingArray(selectedFruits.value, hiddenFruits.value) ===
          hiddenFruits.value.length;

      if (!isGameOver.value) {
        addSelectedFruitsToHistory();
        clearSelectedFruits();
      }

      isLoading.value = false;
    }, 400);
  }
}

function clearSelectedFruits() {
  selectedFruits.value = [];
}

function unselectFruit(fruit) {
  selectedFruits.value = selectedFruits.value.filter((f) => f !== fruit);
}

function addSelectedFruitsToHistory() {
  addToHistory({
    selectedFruits: selectedFruits.value,
    correctFruits: countMatchingArray(hiddenFruits.value, selectedFruits.value),
    correctFruitsOrder: countMatchingArrayOrder(
      hiddenFruits.value,
      selectedFruits.value
    ),
  });
}

function getSelectedFruitIndex(fruit) {
  return selectedFruits.value.indexOf(fruit);
}

function restartGame() {
  resetFruits();

  selectedFruits.value = [];
  availableAttempts.value = 6;
  clearHistory();
  isGameOver.value = false;
  console.log(`Answer: ${hiddenFruits.value}`);
}

onMounted(() => {
  console.log(`Answer: ${hiddenFruits.value}`);
});

const reversedHistory = computed(() => history.value.slice().reverse());
</script>

<template>
  <main class="relative p-2 md:p-12">
    <InstructionBanner />
    <!-- <div
      id="game"
      class="grid content-center gap-4 lg:grid-cols-2 place-items-start justify-items-center"
    >
      <div class="w-full h-full">
        <div class="mt-4 font-semibold text-pink-500">
          Remaining Attempts:
          <span class="font-black">{{ availableAttempts }}</span>
        </div>
        <div class="grid grid-cols-3 gap-2 mt-4 place-items-center">
          <div v-for="fruit in randomFruits" :key="fruit">
            <FruitButton
              :fruit="fruit"
              :selected-index="getSelectedFruitIndex(fruit)"
              :disabled="isLoading"
              @click="selectFruit(fruit)"
            />
          </div>
        </div>
      </div>

      <div class="w-full h-full">
        <HistorySection :history="reversedHistory" />
      </div>
    </div> -->
    <div class="grid grid-cols-2 gap-12 mt-4 font-semibold text-pink-500">
      <div>
        Remaining Attempts:
        <span class="font-black">{{ availableAttempts }}</span>
      </div>
      <div>History</div>
    </div>
    <div class="grid grid-cols-2 gap-12 mt-4">
      <div class="flex justify-center h-min">
        <div class="grid w-2/3 grid-cols-3 gap-4">
          <div v-for="fruit in randomFruits" :key="fruit">
            <FruitButton
              :fruit="fruit"
              :selected-index="getSelectedFruitIndex(fruit)"
              :disabled="isLoading"
              @click="selectFruit(fruit)"
            />
          </div>
        </div>
      </div>

      <div class="w-full h-full">
        <HistorySection :history="reversedHistory" />
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="isGameOver"
        class="fixed inset-0 flex items-center justify-center min-h-screen shadow-lg backdrop-blur-3xl"
      >
        <div class="p-12 rounded-md bg-pink-50">
          <GameOverSection
            :restart-game="restartGame"
            :hidden-fruits="hiddenFruits"
            :attempts-left="availableAttempts"
            :selected-fruits="selectedFruits"
          />
        </div>
      </div>
    </Teleport>
  </main>
</template>

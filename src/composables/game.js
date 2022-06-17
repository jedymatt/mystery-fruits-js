import { ref, computed } from "vue";
import { useFruits } from "./fruits";
import { useHistory } from "./history";

import { countMatchingArray, countMatchingArrayOrder } from "../lib/counter";

export function useGame() {
  const { randomFruits, hiddenFruits, resetFruits } = useFruits();
  const { history, clearHistory, addToHistory } = useHistory();

  const remainingGuessAttempts = ref(6);
  const selectedFruits = ref([]);

  const isGameOver = computed(function () {
    return (
      remainingGuessAttempts.value <= 0 ||
      countMatchingArrayOrder(selectedFruits.value, hiddenFruits.value) ===
      hiddenFruits.value.length
    );
  });

  function restart() {
    resetFruits();
    clearHistory();
    remainingGuessAttempts.value = 6;
  }

  function checkSelectedFruits() {
    if (isGameOver.value) {
      return;
    }

    const matchingFruits = countMatchingArray(
      selectedFruits.value,
      hiddenFruits.value
    );

    const matchingFruitsOrder = countMatchingArrayOrder(
      selectedFruits.value,
      hiddenFruits.value
    );

    addToHistory({
      selectedFruits: selectedFruits.value,
      matchingFruits,
      matchingFruitsOrder,
      remainingGuessAttempts: remainingGuessAttempts.value,
    });

    remainingGuessAttempts.value -= 1;
  }

  return {
    randomFruits,
    hiddenFruits,
    selectedFruits,
    history,
    addToHistory,
    clearHistory,
    remainingGuessAttempts,
    isGameOver,
    restart,
    checkSelectedFruits,
  };
}

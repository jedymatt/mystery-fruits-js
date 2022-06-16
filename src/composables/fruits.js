import { ref } from "vue";
import { randomUniqueFruits, getRandomUniqueFrom } from "../lib/fruits";

export function useFruits() {
  const randomFruits = ref(randomUniqueFruits(6));
  const hiddenFruits = ref(getRandomUniqueFrom(randomFruits.value, 3));

  function resetFruits() {
    randomFruits.value = randomUniqueFruits(6);
    hiddenFruits.value = getRandomUniqueFrom(randomFruits.value, 3);
  }

  return {
    randomFruits,
    hiddenFruits,
    resetFruits,
  };
}

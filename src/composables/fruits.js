import { ref } from "vue";

const fruits = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "watermelon",
  "kiwi",
  "grape",
  "cherry",
  "peach",
  "pineapple",
  "mango",
  "papaya",
  "coconut",
  "avocado",
  "peanut",
];

export function shuffleArray(array) {
  const copiedArray = array.slice(0);
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
  }

  return copiedArray;
}

export function useFruits() {
  const initialFruits = ref(shuffleArray(fruits).slice(0, 6));
  const hiddenFruits = ref(shuffleArray(initialFruits.value).slice(0, 3));

  function resetFruits() {
    initialFruits.value = shuffleArray(fruits).slice(0, 6);
    hiddenFruits.value = shuffleArray(initialFruits.value).slice(0, 3);
  }

  return {
    initialFruits,
    hiddenFruits,
    resetFruits,
  };
}

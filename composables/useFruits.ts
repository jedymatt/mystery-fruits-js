import { ref } from "vue";

const fruits: string[] = [
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

export function shuffleArray<T>(array: T[]): T[] {
  const copiedArray = [...array];
  for (let i = copiedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copiedArray[i]!;
    copiedArray[i] = copiedArray[j]!;
    copiedArray[j] = temp;
  }

  return copiedArray;
}

export function useFruits() {
  const initialFruits = ref<string[]>(shuffleArray(fruits).slice(0, 6));
  const hiddenFruits = ref<string[]>(shuffleArray(initialFruits.value).slice(0, 3));

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

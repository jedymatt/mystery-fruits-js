export const fruits = [
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

export function randomUniqueFruits(length = 6) {
  const randomFruits = [];
  while (randomFruits.length < length) {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomFruit = fruits[randomIndex];
    if (!randomFruits.includes(randomFruit)) {
      randomFruits.push(randomFruit);
    }
  }
  return randomFruits;
}

export function getRandomUniqueFrom(array, length = 3) {
  const randomIndexes = [];
  while (randomIndexes.length < length) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return randomIndexes.map((index) => array[index]);
}

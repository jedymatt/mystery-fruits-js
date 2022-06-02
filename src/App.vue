<script setup>
import { ref, onMounted } from 'vue';

import { randomUniqueFruits, getRandomUniqueFrom } from '@/lib/fruits.js'
import { countCorrectFruits, countCorrectFruitsOrder } from '@/lib/functions.js'
const fruits = randomUniqueFruits(6)
const answer = getRandomUniqueFrom(fruits, 3)

const availableAttempts = ref(6)
const selectedFruits = ref([])
const history = ref([])

function selectFruit(fruit) {
  if (selectedFruits.value.length < 3) {
    if (selectedFruits.value.includes(fruit)) return
    selectedFruits.value.push(fruit)
  }

  if (selectedFruits.value.length === 3) {
    setTimeout(() => {
      checkAnswer();
      addSelectedFruitsToHistory();
      clearSelectedFruits();
    }, 500);
  }
}

function clearSelectedFruits() {
  selectedFruits.value = []
}

function unselectFruit(fruit) {
  selectedFruits.value = selectedFruits.value.filter(f => f !== fruit)
}

function isFruitSelected(fruit) {
  return selectedFruits.value.includes(fruit)
}

function checkAnswer() {
  const correct = isCorrectAnswer()
  if (correct) {
    selectedFruits.value = []
    availableAttempts.value = 6
    history.value = []
  } else {
    availableAttempts.value--
  }
}

function isCorrectAnswer() {
  const correctFruits = countCorrectFruits(answer, selectedFruits.value)
  const correctFruitsOrder = countCorrectFruitsOrder(answer, selectedFruits.value)
  return correctFruits === 3 && correctFruitsOrder === 3
}

function addSelectedFruitsToHistory() {
  history.value.push({
    selectedFruits: selectedFruits.value,
    correctFruits: countCorrectFruits(answer, selectedFruits.value),
    correctFruitsOrder: countCorrectFruitsOrder(answer, selectedFruits.value),
  })
}

onMounted(() => {
  console.log(`Answer: ${answer}`)
});

</script>

<template>
  <div class="min-h-screen">
    <div class="container p-12">
      <div class="grid grid-cols-3 gap-6">
        <button @click="selectFruit(fruit)" v-for="fruit in fruits" :key="fruit"
          :class="{ 'bg-gray-500 text-white': isFruitSelected(fruit) }"
          class="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">
          {{ fruit }}
        </button>
      </div>

      <div class="mt-4">
        <div class="rounded-md border border-gray-200 p-12">
          <div class="grid grid-cols-3 gap-6">
            <button @click="unselectFruit(fruit)" v-for="fruit in selectedFruits" :key="fruit" :class="{
              'bg-red-300': selectedFruits.length === 3 && !isCorrectAnswer(),
              'bg-green-300': selectedFruits.length === 3 && isCorrectAnswer()
            }" class="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">
              {{ fruit }}
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        Remaining attempts: {{ availableAttempts }}
      </div>
      <div class="mt-4">
        History:
        <div class="grid grid-flow-row gap-6">
          <div v-for="attempt in history" :key="attempt">
            Correct Fruits: {{ attempt.correctFruits }}, Correct Fruits Order: {{ attempt.correctFruitsOrder }}
            <div class="mt-1">
              <div class="grid grid-cols-3 gap-6">
                <button v-for="selectedFruit in attempt.selectedFruits" :key="selectedFruit" disabled
                  class="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">
                  {{ selectedFruit }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

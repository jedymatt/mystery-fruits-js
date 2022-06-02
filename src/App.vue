<script setup>
import { ref } from 'vue';

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

  // check if the answer is correct
  if (countCorrectFruits(answer, selectedFruits.value) === 3) {
    history.value.push({
      selectedFruits: selectedFruits.value,
      correct: true
    })
  } else {
    history.value.push({
      selectedFruits: selectedFruits.value,
      correct: false
    })
  }
}

function unselectFruit(fruit) {
  selectedFruits.value = selectedFruits.value.filter(f => f !== fruit)
}

function isFruitSelected(fruit) {
  return selectedFruits.value.includes(fruit)
}

function checkAnswer() {
  const correctFruits = countCorrectFruits(answer, selectedFruits.value)
  const correctFruitsOrder = countCorrectFruitsOrder(answer, selectedFruits.value)
  const correct = correctFruits === 3 && correctFruitsOrder === 3
  if (correct) {
    selectedFruits.value = []
    availableAttempts.value = 6
  } else {
    availableAttempts.value--
  }
}

</script>

<template>
  <div class="min-h-screen">
    <div class="container p-12">
      <div class="grid grid-cols-3 gap-6">
        <button @click="selectFruit(fruit)" v-for="fruit in fruits" :key="fruit"
          :class="isFruitSelected(fruit) ? 'border-gray-700' : ''"
          class="border-2 bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">
          {{ fruit }}
        </button>

      </div>

      <div class="mt-4">
        <div class="rounded-md border border-gray-200 p-12">
          <div class="grid grid-cols-3 gap-6">
            <button @click="unselectFruit(fruit)" v-for="fruit in selectedFruits" :key="fruit"
              class="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">
              {{ fruit }}
            </button>
          </div>
        </div>
      </div>
      <!-- check answer -->
      <div class="mt-4">
        <button @click="checkAnswer()" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          Check answer
        </button>
        answer:
        <span class="block" v-for="fruit in answer" :key="fruit">{{ fruit }}</span>
        <!-- display attempts -->
        <div class="mt-4">
          {{ availableAttempts }}
        </div>
      </div>
    </div>
  </div>
</template>

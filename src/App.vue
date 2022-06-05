<script setup>
import { ref, onMounted } from 'vue';

import { randomUniqueFruits, getRandomUniqueFrom } from '@/lib/fruits.js';
import { countCorrectFruits, countCorrectFruitsOrder } from '@/lib/functions.js';
import HistorySection from './components/HistorySection.vue';
import FruitButton from './components/FruitButton.vue';

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
  history.value.unshift({
    selectedFruits: selectedFruits.value,
    correctFruits: countCorrectFruits(answer, selectedFruits.value),
    correctFruitsOrder: countCorrectFruitsOrder(answer, selectedFruits.value),
  })
}

function getSelectedFruitIndex(fruit) {
  return selectedFruits.value.indexOf(fruit)
}

onMounted(() => {
  console.log(`Answer: ${answer}`)
});

</script>

<template>
  <div class="min-h-screen">
    <div class="container md:p-12 p-2">
      <div class="grid grid-cols-3 gap-6">
        <FruitButton v-for="fruit in fruits" :key="fruit" :fruit="fruit" @click="selectFruit(fruit)"
          :selected-index="getSelectedFruitIndex(fruit)" />
      </div>

      <div class="mt-4">
        <div class="rounded-md border border-gray-200 md:p-12 p-2">
          <div class="grid grid-cols-3 gap-6">
            <button @click="unselectFruit(fruit)" v-for="fruit in selectedFruits" :key="fruit" :class="[
              'bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg',
              {
                'bg-red-300': selectedFruits.length === 3 && !isCorrectAnswer(),
                'bg-green-300': selectedFruits.length === 3 && isCorrectAnswer(),
              },
            ]">
              {{ fruit }}
            </button>
          </div>
        </div>
      </div>
      <div class="mt-4">
        Remaining attempts: {{ availableAttempts }}
      </div>
      <div class="mt-4">
        <HistorySection :history="history" />
      </div>

      <span id="credits" class="text-3xl font-bold">Credits:</span>
      <ul class="list-disc list-inside">
        <li>
          <a href="https://www.flaticon.com/free-icons/fruit" title="fruit icons">Fruit icons created by Smashicons -
            Flaticon</a>
        </li>
        <li>
          <a href="https://www.flaticon.com/free-icons/kiwi" title="kiwi icons">Kiwi icons created by AngDiz -
            Flaticon</a>
        </li>
        <li>
          <a href="https://www.flaticon.com/free-icons/peanut" title="peanut icons">Peanut icons created by wanicon -
            Flaticon</a>
        </li>
        <li>
          <a href="https://www.flaticon.com/free-icons/mango" title="mango icons">Mango icons created by max.icons -
            Flaticon</a>
        </li>
        <li>
          <a href="https://www.flaticon.com/free-icons/papaya" title="papaya icons">Papaya icons created by Freepik -
            Flaticon</a>
        </li>
      </ul>
    </div>
  </div>
</template>

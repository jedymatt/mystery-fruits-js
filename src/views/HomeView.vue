<script setup>
import { ref, onMounted } from 'vue';

import { randomUniqueFruits, getRandomUniqueFrom } from '@/lib/fruits.js';
import { countCorrectFruits, countCorrectFruitsOrder } from '@/lib/functions.js';
import HistorySection from '@/components/HistorySection.vue';
import FruitButton from '@/components/FruitButton.vue';
import GameOver from '../components/GameOver.vue';

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

function isGameOver() {
    return availableAttempts.value <= 0;
}

function restartGame() {
    fruits.value = randomUniqueFruits(6)
    answer.value = getRandomUniqueFrom(fruits, 3)

    selectedFruits.value = []
    availableAttempts.value = 6
    history.value = []

}

onMounted(() => {
    console.log(`Answer: ${answer}`)
});
</script>

<template>
    <main>
        <div class="md:p-12 p-2">
            <div v-if="!isGameOver()" class="lg:flex lg:flex-row lg:gap-6">
                <div class="grid grid-cols-3 gap-6">
                    <FruitButton v-for="fruit in fruits" :key="fruit" :fruit="fruit" @click="selectFruit(fruit)"
                        :selected-index="getSelectedFruitIndex(fruit)" />
                </div>

                <div>
                    <div class="mt-4">
                        <div class="rounded-md border border-gray-200 md:p-12 p-2">
                            <div class="grid grid-cols-3 gap-6">
                                <button @click="unselectFruit(fruit)" v-for="fruit in selectedFruits" :key="fruit"
                                    :class="[
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
                </div>
            </div>
            <div v-if="isGameOver()">
                <GameOver :answer="answer" :restart-game="restartGame" />
            </div>
        </div>
    </main>
</template>

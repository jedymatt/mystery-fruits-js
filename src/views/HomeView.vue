<script setup>
import { ref, onMounted } from 'vue';

import { countCorrectFruits, countCorrectFruitsOrder } from '@/lib/functions.js';
import HistorySection from '@/components/HistorySection.vue';
import FruitButton from '@/components/FruitButton.vue';
import GameOverView from '@/views/GameOverView.vue';
import { useFruits } from '../composables/fruits';
import { useHistory } from '../composables/history';
import { computed } from '@vue/reactivity';

const { hiddenFruits, randomFruits, resetFruits } = useFruits();
const { history, addToHistory, clearHistory } = useHistory();

const availableAttempts = ref(6)
const selectedFruits = ref([])
const isGameOver = ref(false)

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
    availableAttempts.value--

    if (correct) {
        selectedFruits.value = []
        history.value = []
        isGameOver.value = true
    }

    if (availableAttempts.value <= 0) {
        isGameOver.value = true
    }

}

function isCorrectAnswer() {
    const correctFruits = countCorrectFruits(hiddenFruits.value, selectedFruits.value)
    const correctFruitsOrder = countCorrectFruitsOrder(hiddenFruits.value, selectedFruits.value)
    return correctFruits === 3 && correctFruitsOrder === 3
}

function addSelectedFruitsToHistory() {
    addToHistory({
        selectedFruits: selectedFruits.value,
        correctFruits: countCorrectFruits(hiddenFruits.value, selectedFruits.value),
        correctFruitsOrder: countCorrectFruitsOrder(hiddenFruits.value, selectedFruits.value),
    })
}

function getSelectedFruitIndex(fruit) {
    return selectedFruits.value.indexOf(fruit)
}


function restartGame() {
    resetFruits();

    selectedFruits.value = []
    availableAttempts.value = 6
    clearHistory();
    isGameOver.value = false
    console.log(`Answer: ${hiddenFruits.value}`)
}

onMounted(() => {
    console.log(`Answer: ${hiddenFruits.value}`)
});

const reversedHistory = computed(() => history.value.reverse())
</script>

<template>
    <main>
        <div class="md:p-12 p-2">
            <div v-if="!isGameOver" class="lg:flex lg:flex-row lg:gap-6">
                <div class="grid grid-cols-3 gap-6">
                    <FruitButton v-for="fruit in randomFruits" :key="fruit" :fruit="fruit" @click="selectFruit(fruit)"
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
                        <HistorySection :history="reversedHistory" />
                    </div>
                </div>
            </div>
            <div v-if="isGameOver">
                <GameOverView :answer="hiddenFruits" :restart-game="restartGame" :attempts-left="availableAttempts" />
            </div>
        </div>
    </main>
</template>

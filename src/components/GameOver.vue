<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import FruitImage from './FruitImage.vue';

defineProps({
    answer: {
        type: Array,
        required: true,
    },
    restartGame: {
        type: Function,
        required: true,
    },
})
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1>Game Over</h1>
        <p>You have no more attempts left.</p>
        <p>The correct answer was:</p>

        <div class="flex flex-wrap flex-row gap-4">
            <div v-for="fruit in answer" :key="fruit">
                <FruitImage :fruit="fruit" />
            </div>
        </div>
        <PrimaryButton @click="restartGame()">Restart Game</PrimaryButton>
    </div>
</template>
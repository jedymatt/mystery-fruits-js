<script setup>
import PrimaryButton from '@/components/PrimaryButton.vue';
import FruitImage from '@/components/FruitImage.vue';

const props = defineProps({
    answer: {
        type: Array,
        required: true,
    },
    restartGame: {
        type: Function,
        required: true,
    },
    attemptsLeft: {
        type: Number,
        required: true,
        default: 0,
    },
});

const remark = props.attemptsLeft === 0 ? 'You have no more attempts left.' : `You guessed it all with ${props.attemptsLeft} remaining attempts.`;
</script>

<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-pink-500">Game Over</h1>
        <p class="text-gray-800">{{ remark }}</p>
        <p class="text-gray-800">The correct answer is:</p>

        <div class="flex flex-wrap flex-row gap-4">
            <div v-for="fruit in answer" :key="fruit">
                <FruitImage :fruit="fruit" />
            </div>
        </div>

        <div class="mt-4">
            <PrimaryButton @click="restartGame()">Restart Game</PrimaryButton>
        </div>
    </div>
</template>
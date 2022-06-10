<script setup>
defineProps({
    answer: {
        type: Array,
    },
})

function restartGame() {
    // TODO restart game
}
</script>

<template>
    <div>
        <h1>Game Over</h1>
        <p>You have no more attempts left.</p>
        <p>The correct answer was:</p>
        <ul>
            <li v-for="fruit in answer" :key="fruit">{{ fruit }}</li>
        </ul>
        <button @click="restartGame()">Restart Game</button>
    </div>
</template>
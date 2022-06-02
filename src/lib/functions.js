export function countCorrectFruits(fruits, guesses) {
    return guesses.filter(guess => fruits.includes(guess)).length
}

export function countCorrectFruitsOrder(fruits, guesses) {
    return guesses.filter((guess, index) => fruits[index] === guess).length
}

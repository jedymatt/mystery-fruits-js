<script setup>
import { useInstruction } from '@/composables/common';
import { XIcon } from '@heroicons/vue/solid'

const { showInstruction, closeInstruction } = useInstruction();
</script>

<template>
  <Transition leave-active-class="animate-close-section">
    <div
      v-if="showInstruction"
      class="mb-10 bg-red-100 block p-7 border-2 border-red-300 rounded-lg relative overflow-hidden dark:bg-pink-500/50 text-sm"
    >
      <button
        class="bg-red-400 p-1 rounded-full h-6 w-6 flex items-center justify-center  absolute top-3 right-3 hover:bg-red-900  cursor-pointer transition-all delay-75 ease-in "
        @click="closeInstruction"
      >
        <XIcon class="fill-red-900 hover:fill-red-400 dark:fill-white" />
      </button>

      <p>Hello Stranger 🕵️‍♂️</p>
      <p>
        Are you in search of the mystery fruits🍓? You’ve come to the right
        place🌴. All you have to do is select the mystery fruits in the correct
        order 1️⃣ 2️⃣ 3️⃣.
      </p>
      <p>
        You have 6 attempts before the fruits are lost forever😞. You can check
        the history tab on the left to see details on your previous
        selections⌛.
      </p>
      <p>Good luck and Have fun🌟.</p>
    </div>
  </Transition>
</template>
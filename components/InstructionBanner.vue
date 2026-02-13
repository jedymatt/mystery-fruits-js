<script setup lang="ts">
import { X } from 'lucide-vue-next'

const { isVisible, dismiss } = useInstruction();
</script>

<template>
  <Transition leave-active-class="animate-close-section">
    <div
      v-if="isVisible"
      class="mb-5 flex items-start gap-3 overflow-hidden rounded-xl border border-pink-200 bg-pink-50 p-4 text-sm text-pink-900 dark:border-pink-800 dark:bg-pink-950/40 dark:text-pink-100"
    >
      <div class="hidden sm:block w-1 self-stretch shrink-0 rounded-full bg-pink-300 dark:bg-pink-700" />
      <div class="flex-1 space-y-1">
        <p class="font-semibold">
          Find the 3 mystery fruits in the correct order!
        </p>
        <p class="text-pink-700 dark:text-pink-300">
          You have 6 attempts. Check your history below after each guess.
        </p>
      </div>
      <button
        class="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 text-pink-700 transition-colors hover:bg-pink-300 dark:bg-pink-800 dark:text-pink-300 dark:hover:bg-pink-700 cursor-pointer"
        @click="dismiss"
      >
        <X class="h-3.5 w-3.5" />
      </button>
    </div>
  </Transition>
</template>

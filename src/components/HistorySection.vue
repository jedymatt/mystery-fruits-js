<script setup lang="ts">
import FruitImage from './FruitImage.vue';
import { Check, ArrowRightLeft } from 'lucide-vue-next';
import type { HistoryItem } from '@/composables/history';

withDefaults(defineProps<{
  history?: HistoryItem[];
}>(), {
  history: () => [],
})
</script>

<template>
  <div>
    <h2 class="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
      Previous Attempts
    </h2>

    <p
      v-if="history.length === 0"
      class="text-center text-sm text-gray-400 dark:text-gray-500"
    >
      No attempts yet
    </p>

    <TransitionGroup
      tag="div"
      enter-active-class="animate-slide-in"
      class="space-y-2"
    >
      <div
        v-for="(items, index) in history"
        :key="index"
        class="flex items-center justify-center gap-3 rounded-xl bg-gray-50 px-3 py-2.5 dark:bg-gray-800/60"
      >
        <div
          v-for="fruit in items.selectedFruits"
          :key="fruit"
          class="rounded-lg bg-white p-1.5 shadow-sm dark:bg-gray-700"
        >
          <FruitImage
            :fruit="fruit"
            class="h-7 w-7"
          />
        </div>

        <div class="flex items-center gap-2">
          <span
            class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
            :class="
              items.correctFruits > 0
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400'
                : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
            "
          >
            <Check class="h-3 w-3" />
            {{ items.correctFruits }} fruit
          </span>
          <span
            class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium"
            :class="
              items.correctFruitsOrder > 0
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400'
                : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
            "
          >
            <ArrowRightLeft class="h-3 w-3" />
            {{ items.correctFruitsOrder }} order
          </span>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { Check, ArrowRightLeft } from 'lucide-vue-next';
import type { HistoryItem } from '@/composables/useHistory';

withDefaults(defineProps<{
  history?: HistoryItem[];
}>(), {
  history: () => [],
})
</script>

<template>
  <div>
    <SectionLabel>Previous Attempts</SectionLabel>

    <p
      v-if="history.length === 0"
      class="text-center text-sm text-gray-400 dark:text-gray-500"
    >
      No attempts yet
    </p>

    <TransitionGroup
      tag="div"
      name="history"
      class="space-y-2"
    >
      <div
        v-for="(items, index) in history"
        :key="items.id"
        class="flex items-center justify-center gap-3 rounded-xl px-3 py-2.5"
        :class="
          index === 0
            ? 'bg-pink-50/60 ring-1 ring-pink-200/50 dark:bg-pink-950/20 dark:ring-pink-800/30'
            : 'bg-gray-50 dark:bg-gray-800/60'
        "
      >
        <span
          v-if="index === 0"
          class="hidden shrink-0 rounded-full bg-pink-500 px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none text-white sm:inline"
        >
          New
        </span>
        <span
          v-else
          class="hidden w-7 shrink-0 text-center text-[10px] font-semibold text-gray-300 sm:inline dark:text-gray-600"
        >
          #{{ history.length - index }}
        </span>

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
          <StatBadge
            :count="items.correctFruits"
            color="amber"
          >
            <Check class="h-3 w-3" />
            {{ items.correctFruits }} fruit
          </StatBadge>
          <StatBadge
            :count="items.correctFruitsOrder"
            color="emerald"
          >
            <ArrowRightLeft class="h-3 w-3" />
            {{ items.correctFruitsOrder }} order
          </StatBadge>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.history-enter-active {
  animation: slide-in 0.4s ease-out;
}

.history-move {
  transition: transform 0.4s ease;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

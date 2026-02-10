<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next';
</script>

<template>
  <main class="mx-auto w-full max-w-lg px-4 py-6 md:py-10">
    <h1 class="text-center text-pink-500">
      Credits
    </h1>
    <p class="mt-1 text-center text-sm text-gray-400 dark:text-gray-500">
      Icons and assets used in this project
    </p>

    <div class="mt-6 space-y-2">
      <a
        v-for="credit in [
          { href: 'https://www.flaticon.com/free-icons/fruit', title: 'fruit icons', label: 'Fruit icons', author: 'Smashicons' },
          { href: 'https://www.flaticon.com/free-icons/kiwi', title: 'kiwi icons', label: 'Kiwi icons', author: 'AngDiz' },
          { href: 'https://www.flaticon.com/free-icons/peanut', title: 'peanut icons', label: 'Peanut icons', author: 'wanicon' },
          { href: 'https://www.flaticon.com/free-icons/mango', title: 'mango icons', label: 'Mango icons', author: 'max.icons' },
          { href: 'https://www.flaticon.com/free-icons/papaya', title: 'papaya icons', label: 'Papaya icons', author: 'Freepik' },
        ]"
        :key="credit.href"
        :href="credit.href"
        :title="credit.title"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/80"
      >
        <div class="flex-1">
          <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {{ credit.label }}
          </p>
          <p class="text-xs text-gray-400 dark:text-gray-500">
            by {{ credit.author }} — Flaticon
          </p>
        </div>
        <ExternalLink class="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600" />
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Github, Moon, Sun } from 'lucide-vue-next';
import { useTheme } from '@/composables/common';

const { toggleDarkMode } = useTheme();
</script>

<template>
  <nav class="sticky top-0 z-10 border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/80">
    <div class="mx-auto flex max-w-2xl items-center gap-1 px-4 py-2">
      <RouterLink
        to="/"
        class="mr-auto text-lg font-bold text-gray-800 transition-colors hover:text-pink-500 dark:text-white dark:hover:text-pink-400"
      >
        Mystery Fruits
      </RouterLink>

      <RouterLink
        to="/credits"
        class="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-600 dark:text-gray-300 dark:hover:bg-pink-950/40 dark:hover:text-pink-400"
        :class="{ 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400': $route.name === 'credits' }"
      >
        Credits
      </RouterLink>
      <RouterLink
        to="/contributors"
        class="rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-pink-50 hover:text-pink-600 dark:text-gray-300 dark:hover:bg-pink-950/40 dark:hover:text-pink-400"
        :class="{ 'bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400': $route.name === 'contributors' }"
      >
        Contributors
      </RouterLink>

      <div class="ml-1 flex items-center gap-1">
        <a
          class="flex items-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          href="https://www.github.com/jedymatt/mystery-fruits-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Github</span>
          <Github class="h-4.5 w-4.5" />
        </a>
        <button
          class="flex items-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 cursor-pointer"
          @click="toggleDarkMode()"
        >
          <Moon class="block h-4.5 w-4.5 dark:hidden" />
          <Sun class="hidden h-4.5 w-4.5 dark:block" />
        </button>
      </div>
    </div>
  </nav>
</template>

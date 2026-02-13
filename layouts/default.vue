<script setup lang="ts">
import { Github, Moon, Sun } from 'lucide-vue-next';
import { useTheme } from '@/composables/common';

const { toggleDarkMode } = useTheme();
</script>

<template>
  <nav class="sticky top-0 z-10 border-b border-gray-200/60 bg-white/80 backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/80">
    <div class="mx-auto flex max-w-2xl items-center gap-1 px-4 py-2">
      <NuxtLink
        to="/"
        class="mr-auto text-lg font-bold text-gray-800 transition-colors hover:text-pink-500 dark:text-white dark:hover:text-pink-400"
      >
        Mystery Fruits
      </NuxtLink>

      <NavPill
        to="/credits"
        :active="$route.name === 'credits'"
      >
        Credits
      </NavPill>
      <NavPill
        to="/contributors"
        :active="$route.name === 'contributors'"
      >
        Contributors
      </NavPill>

      <div class="ml-1 flex items-center gap-1">
        <IconButton
          href="https://www.github.com/jedymatt/mystery-fruits-js"
          label="Github"
        >
          <Github class="h-4.5 w-4.5" />
        </IconButton>
        <IconButton @click="toggleDarkMode()">
          <Moon class="block h-4.5 w-4.5 dark:hidden" />
          <Sun class="hidden h-4.5 w-4.5 dark:block" />
        </IconButton>
      </div>
    </div>
  </nav>
  <slot />
</template>

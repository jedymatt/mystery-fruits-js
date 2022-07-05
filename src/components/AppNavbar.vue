<script setup>
import { RouterLink } from 'vue-router';
import GithubIcon from './icons/GithubIcon.vue';
</script>

<template>
  <nav class="text-gray-800 font-medium">
    <div class="p-2 flex flex-row gap-2 items-center">
      <RouterLink
        to="/"
        class="font-bold text-xl hover:bg-pink-100 p-2 rounded-md"
      >
        Mystery Fruits
      </RouterLink>
      <div class="flex flex-grow items-stretch justify-between">
        <div class="flex flex-row">
          <RouterLink
            to="/credits"
            class="p-2 rounded-md hover:bg-pink-100"
            :class="{ 'text-pink-600': $route.name === 'credits' }"
          >
            Credits
          </RouterLink>
        </div>
        <div class="flex flex-row">
          <a
            class="flex items-center p-2 hover:bg-pink-100 rounded-md gap-1"
            href="https://www.github.com/jedymatt/mystery-fruits-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="sr-only">Github</span>
            <GithubIcon class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

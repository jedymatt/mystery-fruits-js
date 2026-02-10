<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue';
import { ExternalLink } from 'lucide-vue-next';

interface Contributor {
    login: string;
    avatar_url: string;
    gravatar_id: string;
    html_url: string;
}

const contributors = ref<Contributor[]>([])

const fetchContributors = () => {
    axios.get<Contributor[]>('https://api.github.com/repos/jedymatt/mystery-fruits-js/contributors')
        .then(response => {
            contributors.value = response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

fetchContributors();
</script>

<template>
  <main class="mx-auto w-full max-w-lg px-4 py-6 md:py-10">
    <h1 class="text-center text-pink-500">
      Contributors
    </h1>
    <p class="mt-1 text-center text-sm text-gray-400 dark:text-gray-500">
      People who helped build this project
    </p>

    <div class="mt-6 space-y-2">
      <a
        v-for="contributor in contributors"
        :key="contributor.login"
        :href="contributor.html_url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/80"
      >
        <img
          :src="contributor.avatar_url ?? contributor.gravatar_id"
          :alt="contributor.login"
          class="h-10 w-10 rounded-full ring-2 ring-pink-200 dark:ring-pink-800"
        >
        <span class="flex-1 text-sm font-semibold text-gray-700 dark:text-gray-200">
          {{ contributor.login }}
        </span>
        <ExternalLink class="h-4 w-4 shrink-0 text-gray-300 dark:text-gray-600" />
      </a>
    </div>
  </main>
</template>

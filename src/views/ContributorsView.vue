<script setup>
import axios from 'axios'
import { ref } from 'vue';

const contributors = ref([])

const fetchContributors = () => {
    axios.get('https://api.github.com/repos/jedymatt/mystery-fruits-js/contributors')
        .then(response => {
            // console.log(response.data);
            // set the data to the state
            contributors.value = response.data;
        })
        .catch(error => {
            console.log(error);
        });
}

fetchContributors();
</script>

<template>
  <main>
    <div class="md:p-12 p-2">
      <h1 class="text-pink-500">
        Contributors
      </h1>
      <div class="mt-4">
        <div
          v-for="contributor in contributors"
          :key="contributor"
          class="p-2 rounded-md flex items-center gap-2"
        >
          <img
            :src="contributor.avatar_url ?? contributor.gravatar_id"
            alt="contributor.login"
            class="h-12 w-12 rounded-full border-2 border-pink-500"
          >
          <a
            :href="contributor.html_url"
            target="_blank"
            rel="noopener"
            class="font-semibold text-pink-500"
          >{{
            contributor.login
          }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

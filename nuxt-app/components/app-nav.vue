<script setup>
const colorMode = useColorMode();

const themes = ["system", "light", "dark"];

function toggleTheme() {
  const currentThemeIndex = themes.indexOf(colorMode.preference);
  const nextThemeIndex = (currentThemeIndex + 1) % themes.length;

  colorMode.preference = themes[nextThemeIndex];
}
</script>

<template>
  <div>
    <nav>
      <div class="p-2 flex flex-row gap-2 items-center">
        <NuxtLink
          to="/"
          class="font-bold text-xl hover:bg-pink-100 dark:hover:bg-pink-500 p-2 rounded-md"
        >
          Mystery Fruits
        </NuxtLink>
        <div class="flex flex-grow items-stretch justify-between">
          <div class="flex flex-row">
            <NuxtLink
              to="/credits"
              class="p-2 rounded-md hover:bg-pink-100 dark:hover:bg-pink-500 dark:hover:text-white"
              :class="{ 'text-pink-600': $route.name === 'credits' }"
            >
              Credits
            </NuxtLink>
            <RouterLink
              to="/contributors"
              class="p-2 rounded-md hover:bg-pink-100 dark:hover:bg-pink-500 dark:hover:text-white"
              :class="{
                'text-pink-600': $route.name === 'contributors',
              }"
            >
              Contributors
            </RouterLink>
          </div>
          <div class="flex flex-row gap-2">
            <a
              class="flex items-center p-2 hover:bg-pink-100 rounded-md dark:hover:bg-pink-500"
              href="https://www.github.com/jedymatt/mystery-fruits-js"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="sr-only">Github</span>

              <Icon name="logos:github-icon" />
            </a>
            <!-- Theme button -->
            <button
              class="p-2 rounded-md hover:bg-pink-100"
              @click="toggleTheme()"
            >
              <Icon
                v-if="colorMode.preference === themes[2]"
                name="heroicons:computer-desktop-solid"
              />
              
              <Icon
                v-else-if="colorMode.preference === themes[0]"
                name="heroicons:sun-solid"
              />
              
              <Icon
                v-else="colorMode.preference === themes[1]"
                name="heroicons:moon-solid"
              />
              
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

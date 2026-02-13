import { ref, watch, onMounted } from 'vue'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const theme = ref<Theme>('light')

  // Only access localStorage on client
  onMounted(() => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        theme.value = saved
        document.documentElement.classList.toggle('dark', saved === 'dark')
      }
    }
  })

  // Persist theme changes
  watch(theme, (newTheme) => {
    if (import.meta.client) {
      localStorage.setItem('theme', newTheme)
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }
  })

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme
  }
}

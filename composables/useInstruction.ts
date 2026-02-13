import { ref, onMounted } from 'vue'
import { addDays, isBefore } from 'date-fns'

const STORAGE_KEY = 'instruction-dismissed-until'

export function useInstruction() {
  const isVisible = ref(true)

  onMounted(() => {
    if (process.client) {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const dismissedDate = new Date(stored)
        const expiryDate = addDays(dismissedDate, 3)
        if (isBefore(new Date(), expiryDate)) {
          isVisible.value = false
        }
      }
    }
  })

  function dismiss() {
    if (process.client) {
      const now = new Date().toISOString()
      localStorage.setItem(STORAGE_KEY, now)
      isVisible.value = false
    }
  }

  return {
    isVisible,
    dismiss
  }
}

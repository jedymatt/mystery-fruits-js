import { ref } from "vue";

export interface HistoryItem {
  selectedFruits: string[];
  correctFruits: number;
  correctFruitsOrder: number;
}

export function useHistory() {
  const history = ref<HistoryItem[]>([]);

  function addToHistory(items: HistoryItem) {
    history.value.unshift(items);
  }

  function clearHistory() {
    history.value = [];
  }

  return {
    history,
    addToHistory,
    clearHistory,
  };
}

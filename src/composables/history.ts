import { ref } from "vue";

let nextId = 0;

export interface HistoryItem {
  id: number;
  selectedFruits: string[];
  correctFruits: number;
  correctFruitsOrder: number;
}

export function useHistory() {
  const history = ref<HistoryItem[]>([]);

  function addToHistory(items: Omit<HistoryItem, "id">) {
    history.value.unshift({ ...items, id: nextId++ });
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

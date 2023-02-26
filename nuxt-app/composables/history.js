import { ref } from "vue";

export function useHistory() {
    const history = ref([]);

    function addToHistory(items) {
        history.value.push(items);
    }
    
    function clearHistory() {
        history.value = [];
    }

    return {
        history,
        addToHistory,
        clearHistory,
    }
}
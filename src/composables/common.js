import { ref } from 'vue';
import moment from 'moment';

export const useInstruction = () => {
    const showInstructionAt = localStorage.getItem('common.show_instruction_at');
    
    const showInstruction = ref(showInstructionAt < moment());

    function closeInstruction() {
        localStorage.setItem('common.show_instruction_at', moment().add(3, 'days'));
        showInstruction.value = false;
    }

    return {
        showInstruction,
        closeInstruction,
    }
}

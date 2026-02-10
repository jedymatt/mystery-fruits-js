import { ref } from 'vue';
import moment from 'moment';

export const useInstruction = () => {
    const showInstructionAt = localStorage.getItem('common.show_instruction_at');

    const showInstruction = ref<boolean>(!showInstructionAt || showInstructionAt < moment().toISOString());

    function closeInstruction() {
        localStorage.setItem('common.show_instruction_at', moment().add(3, 'days').toISOString());
        showInstruction.value = false;
    }

    return {
        showInstruction,
        closeInstruction,
    }
}

export const useTheme = () => {
    function toggleDarkMode() {
        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

        // Apply the dark mode
        const element = document.getElementsByTagName('html')[0];
        if (element.classList.contains('dark')) {
            element.classList.remove('dark')
        } else {
            element.classList.add('dark')
        }
    }

    return {
        toggleDarkMode,
    }
}

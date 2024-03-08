import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', () => {

    const snack = ref(
        {
            show: false,
            text: '',
            color: 'success',
            timeout: 3000,
        }
    )

    function showSnackbar(payload) {
        snack.value.show = true;
        snack.value.text = payload.text;
        snack.value.color = payload.color || 'success'; // Set default color if not provided
        snack.value.timeout = payload.timeout || 3000; // Set default timeout if not provided

        setTimeout(() => {
            this.show = false;
        }, this.timeout);
    }

    function hideSnackbar() {
        snack.value.show = false;
    }

    return {
        snack, 
        showSnackbar,
        hideSnackbar
    }

}, { persist: true })

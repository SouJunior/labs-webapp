import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/services/http.js'
import router from "@/router";
import { useSnackbarStore } from '@/stores/snackbar.js'

export const useUserStore = defineStore('user', () => {

    const user = ref({
        name: '',
        email: ''
    })

    const registered = ref(false)

    const useSnackbar = useSnackbarStore();

    async function register(applicant) {
        try {
            const response = await axiosInstance.post('/user', applicant);
            const data = response.data;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else if (data.message) {
                registered.value = true;
                localStorage.setItem('user', data);
                useSnackbar.showSnackbar({
                    text: data.message,
                    color: 'success',
                    timeout: 3000
                });
            }
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 422 || error.response.status === 404 || error.response.status === 500) {
                useSnackbar.showSnackbar({
                    text: error.response.data,
                    color: 'error',
                    timeout: 3000
                });
            }
        }
    }

    function setName(text) {
        user.value.name = text
    }

    const state = reactive({
        users: []
    })

    function addUser(user) {
        state.user = user
    }

    return {
        user, setName, state, addUser,
        register,
        registered
    }

}, { persist: true })

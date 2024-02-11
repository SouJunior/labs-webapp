import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/services/http.js'

export const useUserStore = defineStore('user', () => {

    async function register(applicant) {
        try {
            const response = await axiosInstance.post('/user', applicant);
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                alert(data.message)
            }
            else {
                localStorage.setItem('user', data);
            }
        }
        catch (error) {
            if (error.response.status === 401 || error.response.status === 422 || error.response.status === 404 || error.response.status === 500) {
                alert(error.response.data)
            }
        }
    }

    const user = ref({
        name: '',
        email: ''
    })

    function setName(text) {
        user.value.name = text
    }

    const state = reactive({
        users: []
    })

    function addUser(user) {
        state.user = user
    }

    return { user, setName, state, addUser, register }
}, { persist: true })
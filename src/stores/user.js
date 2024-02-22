import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/services/http.js'
import router from "@/router";

export const useUserStore = defineStore('user', () => {

    const user = ref({
        name: '',
        email: ''
    })

    const registered = ref(false)

    async function register(applicant) {
        try {
            const response = await axiosInstance.post('/user', applicant);
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                registered.value = true;
                localStorage.setItem('user', data);
            }
        } catch (error) {
            if (error.response.status === 401 || error.response.status === 422 || error.response.status === 404 || error.response.status === 500) {
                alert(error.response.data)
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

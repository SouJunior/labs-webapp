import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    /** @type { name: string, id: number } */
    const user = ref({ name: '' })

    const getName = computed(() => user.value.name)

    function setName(text) {
        user.value.name = text
    }

    const state = reactive({
        users: []
    })

    function addUser(user) {
        state.users.push(user)
    }

    return { user, getName, setName, state, addUser }
}, { persist: true })
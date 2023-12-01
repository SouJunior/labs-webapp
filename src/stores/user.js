import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    /** @type { name: string, id: number } */
    const user = ref({ name: '' })

    const getName = computed(() => user.value.name) 

    function setName(text) {
        user.value.name = text 
    }

    return { user, getName, setName }
})

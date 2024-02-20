import { defineStore } from 'pinia'
import squadService from '@/services/squad.js'
import { ref } from 'vue'

export const useSquadStore = defineStore('squad', () => {
    const squad = ref([]);

    async function fetch() {
        try {
            const response = await squadService.fechtBy();
            const data = response.data;

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                alert(data.message)
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
                alert(error)
        }
    }



    return { 
        squad, 
        fetch,
    }
}, 
    { 
        persist: true 
    }
)

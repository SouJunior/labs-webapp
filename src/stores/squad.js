import { defineStore } from 'pinia'
import squadService from '@/services/squad.js'
import { ref } from 'vue'
import { useAuthStore } from './auth.js'

export const useSquadStore = defineStore('squad', () => {
    const squad = ref([]);
    const useAuth = useAuthStore()

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

    async function create(squad) {
        try {
            const data = await squadService.post(squad);

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                await useAuth.fetchSquads(squad.product_uuid)
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
                alert(error)
        }
    }

    async function update(squad) {
        try {
            const data = await squadService.put(squad);

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                await useAuth.fetchSquads(squad.product_uuid)
                return data
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
                alert(error)
        }
    }

    async function del(uuid) {
        console.log('store :', uuid);
        try {
            const data = await squadService.del(uuid);

            if (data.error) {
                alert(data.error)
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                await useAuth.squadReset()
            }
        }
        catch (error) {
                alert(error)
        }
    }

    return { 
        squad, 
        fetch,
        create,
        del,
        update
    }
}, 
    { 
        persist: true 
    }
)

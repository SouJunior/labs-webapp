import { defineStore } from 'pinia'
import squadService from '@/services/squad.js'
import { ref } from 'vue'
import { useAuthStore } from './auth.js'
import { useSnackbarStore } from '@/stores/snackbar.js'
import router from '@/router';

export const useSquadStore = defineStore('squad', () => {
    const squad = ref([]);
    const useAuth = useAuthStore()

    const useSnackbar = useSnackbarStore();

    async function fetch() {
        try {
            const response = await squadService.fechtBy();
            const data = response.data;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else if (data.message) {
                useSnackbar.showSnackbar({
                    text: data.message,
                    color: 'info',
                    timeout: 3000
                });
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function create(squad) {
        try {
            const data = await squadService.post(squad);

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                await useAuth.fetchSquads(squad.product_uuid)
                useSnackbar.showSnackbar({
                    text: 'Squad criado com sucesso',
                    color: 'success',
                    timeout: 3000
                });
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function update(squad) {
        try {
            const data = await squadService.put(squad);

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                await useAuth.fetchSquads(squad.product_uuid)
                useSnackbar.showSnackbar({
                    text: data.message,
                    color: 'success',
                    timeout: 3000
                });
                return data
            }
            else {
                squad.value = data
            }
        }
        catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function del(uuid) {
        console.log('store :', uuid);
        try {
            const data = await squadService.del(uuid);

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else if (data.message) {
                // alert(data.message)
                // await fetch()
                useSnackbar.showSnackbar({
                    text: 'Squad deletado com sucesso',
                    color: 'success',
                    timeout: 3000
                });
                await useAuth.squadReset()
                router.push('/onboarding');
            }
        }
        catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
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

import { defineStore } from 'pinia'
import memberService from '@/services/member.js'
import { ref } from 'vue'
import { useSnackbarStore } from '@/stores/snackbar.js'

export const useMemberStore = defineStore('member', () => {
    const member = ref([]);
    const useSnackbar = useSnackbarStore();

    async function fetch(uuidSquad) {
        try {
            const response = await memberService.fetchBy(uuidSquad);
            const data = response;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else {
                member.value = data
            }
        } catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function create(uuidSquad) {
        try {
            const response = await memberService.create(uuidSquad);
            const data = response;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else {
                fetch(data.member.squad_uuid)
            }
        } catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function update(member) {
        try {
            const response = await memberService.update(member);
            const data = response;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else {
                fetch(data.member.squad_uuid)
            }
        } catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    async function del(uuidSquad, UuidMember) {
        try {
            const response = await memberService.del(uuidSquad, UuidMember);
            const data = response;

            if (data.error) {
                useSnackbar.showSnackbar({
                    text: data.error,
                    color: 'error',
                    timeout: 3000
                });
                return;
            } else {
                fetch(uuidSquad)
            }
        } catch (error) {
            useSnackbar.showSnackbar({
                text: 'Erro: ' + error,
                color: 'error',
                timeout: 3000
            });
        }
    }

    return { 
        member, 
        fetch,
        create,
        update,
        del
    }
}, 
    { 
        persist: true 
    }
)

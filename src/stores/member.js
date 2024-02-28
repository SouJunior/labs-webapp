import { defineStore } from 'pinia'
import memberService from '@/services/member.js'
import { ref } from 'vue'

export const useMemberStore = defineStore('member', () => {
    const member = ref([]);

    async function fetch(uuidSquad) {
        try {
            const response = await memberService.fetchBy(uuidSquad);
            const data = response;

            if (data.error) {
                alert(data.error)
                return;
            } else {
                member.value = data
            }
        } catch (error) {
            alert('Catch: ' + error)
        }
    }

    async function create(uuidSquad) {
        try {
            const response = await memberService.create(uuidSquad);
            const data = response;

            if (data.error) {
                alert(data.error)
                return;
            } else {
                fetch(data.member.squad_uuid)
            }
        } catch (error) {
            alert('Catch: ' + error)
        }
    }

    async function update(member) {
        try {
            const response = await memberService.update(member);
            const data = response;

            if (data.error) {
                alert(data.error)
                return;
            } else {
                fetch(data.member.squad_uuid)
            }
        } catch (error) {
            alert('Catch: ' + error)
        }
    }

    async function del(uuidSquad, UuidMember) {
        try {
            const response = await memberService.del(uuidSquad, UuidMember);
            const data = response;

            if (data.error) {
                alert(data.error)
                return;
            } else {
                fetch(uuidSquad)
            }
        } catch (error) {
            alert('Catch: ' + error)
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

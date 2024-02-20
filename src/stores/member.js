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

    return { 
        member, 
        fetch,
    }
}, 
    { 
        persist: true 
    }
)

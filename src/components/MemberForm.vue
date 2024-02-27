<template>
    <v-form>
        <v-text-field label="Nome*" 
                      variant="outlined"
                      v-model="member.name"></v-text-field>
        <v-text-field 
                      variant="outlined"
                      label="Cargo" v-model="member.role"></v-text-field>
        <v-row  align="center" justify="center">
            <v-col cols="6">
                <v-btn color="primary" @click="submitApplication">Salvar</v-btn>
                <v-btn class="ml-3" :to="{ name: 'onboarding' }">cancelar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { ref, reactive } from 'vue';

import { useAuthStore } from "@/stores/auth";
import { useMemberStore } from "@/stores/member";

const auth = useAuthStore();
const useMembers = useMemberStore();

await useMembers.fetch(auth.squads[0].uuid);

const mySquad = ref([
  {
    id: 1,
    title: auth.squads[0].name,
    subtitle: auth.squads[0].description,
  },
])


const member = reactive({
    uuid: '',
    name: '',
    role: '',
});

</script>

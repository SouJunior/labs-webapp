<template>
    <v-form>
        <v-text-field
v-model="m.name" 
                      label="Nome*"
                      variant="outlined" ></v-text-field>
        <v-text-field 
                      v-model="m.role"
                      variant="outlined"
                      label="Cargo" ></v-text-field>
        <v-row  align="center" justify="center">
            <v-col>
                <v-btn color="primary" @click="submit">Salvar</v-btn>
                <v-btn 
                    class="ml-3" 
                    @click="emit('submitcancel')"
                    >Cancelar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { reactive } from 'vue';

import { useAuthStore } from "@/stores/auth";
import { useMemberStore } from "@/stores/member";

const props = defineProps({
    member: Object,
    type: String,
})
const emit = defineEmits(['submit', 'submitcancel'])

const auth = useAuthStore();
const useMembers = useMemberStore();

await useMembers.fetch(auth.squads[0].uuid);

let m = reactive({
    uuid: '',
    name: '',
    role: '',
    squad_uuid: auth.squads[0].uuid,
});

if (props.type == 'update') {
    m = reactive({
        uuid: props.member.uuid,
        name: props.member.name,
        role: props.member.role,
        squad_uuid: auth.squads[0].uuid,
    });
}

function submit() {
    if (props.type == 'create') {
        useMembers.create(m);
    } else {
        useMembers.update(m);
    }

    emit('submit')
}

</script>

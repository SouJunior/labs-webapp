<template>
    <v-sheet class="py-4 rounded-lg mb-4">
      <div class="px-4 d-flex align-center justify-space-between">
          <h1>Squad do produto</h1>
      </div>

      <v-card class="pa-2">
          <p>Nome: {{auth.getSquad().name}}</p>
          <p>Descrição: {{auth.getSquad().description}}</p>
      </v-card>

      <v-btn :to="{ name: 'squad-update', params: {uuid: auth.squads[0].uuid}}">
          Atualizar
      </v-btn>

    </v-sheet>

    <v-sheet class="py-4 rounded-lg">
        <h2 class="px-4">Equipe do produto</h2>
            <v-dialog width="500">
                <template v-slot:activator="{ props }">
              <v-btn v-bind="props" >Adicionar membro </v-btn>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card title="Criar membro">
                        <v-card-text>
                            <MemberForm type="create" />
                        </v-card-text>
                    </v-card>
                </template>
            </v-dialog>

            <v-data-table 
                :headers="headers"
                :items="useMembers.member">
                <template v-slot:item.actions="{ item }">

                    <v-dialog width="500">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props"> 
                                <v-icon
                                        size="small"
                                        class="me-2"
                                        >
                                        mdi-pencil
                                </v-icon>
                            </v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card title="Criar membro">
                                <v-card-text>
                                    <MemberForm 
                                        type="update" 
                                        :member="item" 
                                        @submit="isActive.value = false"
                                        @submitcancel="isActive.value = false"/>
                                </v-card-text>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-dialog width="500">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" color="red">

                                <v-icon
                                    size="small"
                                    >
                                        mdi-delete
                                </v-icon>
                            </v-btn>

                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card title="Dialog">
                                <v-card-text>
                                    Você tem certeza que deseja excluir a squad? 
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            color="red"
                                            text="excluir"
                                            @click="del(auth.squads[0].uuid)"
                                            ></v-btn>
                                    <v-spacer/>
                                        <v-btn
                                                text="Cancelar"
                                                @click="isActive.value = false"
                                                ></v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>
                </template>
            </v-data-table>

    </v-sheet>
</template>

<script setup>
import { ref, reactive } from 'vue';

import { useAuthStore } from "@/stores/auth";
import { useMemberStore } from "@/stores/member";
import { useSquadStore } from "@/stores/squad";
import MemberForm from "@/components/MemberForm.vue";
import router from "@/router";

const auth = useAuthStore();
const useMembers = useMemberStore();
const useSquad = useSquadStore();

let dialog = ref(false);

if (auth.squads.length !== 0) {
    await useMembers.fetch(auth.squads[0].uuid);
}

const headers = [ 
    { title: 'Nome', key:'name', value: 'name' },
    { title: 'Cargo', key:'role', value: 'role' },
    { title: 'Actions', key: 'actions', sortable: false },
]

const squad = ref([
  {
    id: 2,
    title: 'Squad 1',
    subtitle: 'Descrição da Squad 1',
  },
  {
    id: 3,
    title: 'Squad 2',
    subtitle: 'Descrição da Squad 2',
  },
]);

function del(uuid) {
    useSquad.del(uuid);
    router.push({ name: 'onboarding' });
}
</script>

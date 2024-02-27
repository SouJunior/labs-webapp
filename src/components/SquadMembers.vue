<template>
    <v-sheet class="py-4 rounded-lg mb-4">
      <div class="px-4 d-flex align-center justify-space-between">
        <h1>Squad do produto</h1>
      </div>

      <v-list-item
          v-for="(item, index) in mySquad"
          :key="index"
          lines="three"
          >
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item>
      <v-btn >
          Atualizar
      </v-btn >

      <v-dialog width="500">
          <template v-slot:activator="{ props }">
              <v-btn v-bind="props" color="red">excluir</v-btn>
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
                              @click="del(route.params.uuid)"
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
                            <MemberForm />
                        </v-card-text>
                    </v-card>
                </template>
            </v-dialog>

        <v-list-item
            v-for="(item, index) in useMembers.member"
            :key="index"
            lines="three"
        >

            <v-dialog width="500">
                <template v-slot:activator="{ props }">
                    <v-list-item-title v-bind="props" v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.role"></v-list-item-subtitle>
                </template>
                <template v-slot:default="{ isActive }">
                    <v-card title="Dialog">
                        <v-card-text>
                           Você tem certeza que deseja excluir o produto? 
                        </v-card-text>

                        <v-card-actions>
                            <v-btn
                                color="red"
                                text="excluir"
                                @click=""
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

        </v-list-item>
    </v-sheet>
</template>

<script setup>
import { ref, reactive } from 'vue';

import { useAuthStore } from "@/stores/auth";
import { useMemberStore } from "@/stores/member";
import MemberForm from "@/components/MemberForm.vue";

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


const product = reactive({
    uuid: '',
    name: '',
    description: '',
});

const squad = ref([
  {
    id: 2,
    title: 'Squad 1',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 1',
  },
  {
    id: 3,
    title: 'Squad 2',
    prependAvatar: `https://picsum.photos/600?random=${Math.random()}`,
    subtitle: 'Descrição da Squad 2',
  },
]);
</script>

<style scoped>
</style>

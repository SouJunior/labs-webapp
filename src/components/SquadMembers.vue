<template>
      <div class="px-4 d-flex align-center justify-space-between">
          <h1>Squad do produto</h1>
      </div>

      <v-row>
          <v-col>
          <v-card class="pa-2">


          <v-card-item>

              <p>Nome: {{auth.getSquad().name}}</p>
              <p>Descrição: {{auth.getSquad().description}}</p>
          </v-card-item>
              <v-card-actions>
          <v-btn  color="primary" :to="{ name: 'squad-update', params: {uuid: auth.squads[0].uuid}}">
              Atualizar
          </v-btn>
          <v-spacer/>
          <v-dialog width="500">
              <template #activator="{ props }">
                  <v-btn v-bind="props" color="red">

                      <v-icon
                              size="small"
                              >
                              mdi-delete
                      </v-icon>
                  </v-btn>

              </template>
              <template #default="{ isActive }">
                  <v-card title="Dialog">
                      <v-card-text>
                          Você tem certeza que deseja excluir a squad? 
                          <strong>{{auth.squads[0].name}}</strong>
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

              </v-card-actions>
          </v-card>
          </v-col>
      </v-row>
            <v-dialog width="500">
                <template #activator="{ props }">
              <v-btn class="ma-4" color="primary" v-bind="props" >
                  <v-icon>
                      mdi-plus
                  </v-icon>
                  Adicionar membro </v-btn>
                </template>
                <template #default="{ isActive }">
                    <v-card title="Criar membro">
                        <v-card-text>
                            <MemberForm 
                            type="create"
                            @submit="isActive.value = false"
                            @submitcancel="isActive.value = false"/>

                        </v-card-text>
                    </v-card>
                </template>
            </v-dialog>

            <v-data-table 
                :headers="headers"
                :items="useMembers.member">

                    <template #item.role="{ value }">
                        <v-chip>
                            {{ value }}
                        </v-chip>
                    </template>
                <template #item.actions="{ item }">


                    <v-dialog width="500">
                        <template #activator="{ props }">
                            <v-btn 
                                  variant="text"
                                v-bind="props"> 
                                <v-icon
                                        size="small"
                                        class="me-2"
                                        >
                                        mdi-pencil
                                </v-icon>
                            </v-btn>
                        </template>
                        <template #default="{ isActive }">
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
                        <template #activator="{ props }">
                            <v-btn v-bind="props"  variant="text">

                                <v-icon
                                    size="small"
                                    color="red"
                                    >
                                        mdi-delete
                                </v-icon>
                            </v-btn>

                        </template>
                        <template #default="{ isActive }">
                            <v-card title="Dialog">
                                <v-card-text>
                                    Você tem certeza que deseja excluir o membro squad? 
                                    <strong>{{item.name}}</strong>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                        color="red"
                                        text="excluir"
                                        @click="delMember(item.squad_uuid, item.uuid); isActive.value = false"
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

if (auth.squads.length !== 0) {
    await useMembers.fetch(auth.squads[0].uuid);
}

const headers = [ 
    { title: 'Nome', key:'name', value: 'name' },
    { title: 'Cargo', key:'role' },
    { title: 'Ações', key: 'actions', sortable: false },
]

function del(uuid) {
    useSquad.del(uuid);
    router.push({ name: 'onboarding' });
}

function delMember(uuid, member) {
    useMembers.del(uuid, member);
    //router.push({ name: 'onboarding' });
}
</script>
<style scoped>
.v-table {
    background: rgb(var(--v-theme-background));
}
</style>

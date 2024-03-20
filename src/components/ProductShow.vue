<template>
    <v-row justify="center">
      <v-col cols="6" md="6">
        <v-card>
          <v-card-title class="headline">{{ produto.nome }}</v-card-title>
          <v-card-subtitle>{{ produto.descricaoCurta }}</v-card-subtitle>
          <v-card-actions>

              <v-btn 
                    v-if="auth.getSquad() == false"
                    color="primary" :to="{ name : 'squad-create', params: { productUuid: route.params.uuid} }">Criar Squad</v-btn>
              <v-btn 
                    v-if="auth.getSquad()"
                    color="primary" :to="{ name : 'squads', params: {uuid: auth.getSquad().uuid } }">Squad</v-btn>

            <v-spacer></v-spacer>
            <v-btn color="primary" :to="{ name : 'product-update', params: {uuid:  route.params.uuid} }">Atualizar</v-btn>

            <v-dialog width="500">
                <template #activator="{ props }">
                    <v-btn v-bind="props" color="red">excluir</v-btn>
                </template>
                <template #default="{ isActive }">
                    <v-card title="Dialog">
                        <v-card-text>
                           Você tem certeza que deseja excluir o produto? 
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

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';
import router from "@/router";

import { useAuthStore } from "@/stores/auth";

const auth = useAuthStore();

const route = useRoute();

const product = useProductStore();

const p = auth.getProduct();

console.log(p);

    const produto = ref({
      nome: p.name,
      imagem: "https://placehold.co/400",
      descricaoCurta: p.description,
      descricaoCompleta: "Uma descrição mais detalhada do software, explicando suas principais funcionalidades e benefícios.",
      caracteristicas: [
        "Característica 1",
        "Característica 2",
        "Característica 3"
      ],
      preco: "R$ 999,00"
    });

    const entrarEmContato = () => {
      // Implementar a lógica de contato ou redirecionar para a página de compra
      console.log("Entrar em contato ou ir para a página de compra");
    };


function del(uuid) {
    product.del(uuid);
    router.push({ name: 'onboarding' });
}

</script>

<style scoped>
</style>

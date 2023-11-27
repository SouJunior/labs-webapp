<template>
  <v-container>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(produto, index) in produtos" :key="index">
          <v-list-item-avatar>
            <v-img :src="produto.logo"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title><RouterLink to="/product/1">{{ produto.nome }}</RouterLink></v-list-item-title>
            <v-list-item-subtitle>{{ produto.squad }}</v-list-item-subtitle>
            <v-list-item-subtitle>{{ produto.descricao }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const produtos = ref([
      {
        nome: "Produto 1",
        squad: "Squad A",
        logo: "logo_produto_1.png",
        descricao: "Descrição do Produto 1"
      },
      {
        nome: "Produto 2",
        squad: "Squad B",
        logo: "logo_produto_2.png",
        descricao: "Descrição do Produto 2"
      },
      // Adicione mais produtos conforme necessário
    ]);

    return {
      produtos,
    };
  }
};
</script>

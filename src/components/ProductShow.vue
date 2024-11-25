<template>
  <v-row justify="center">
    <v-col cols="6" md="6">
      <v-card>
        <v-card-title class="headline">{{ produto?.name }}</v-card-title>
        <v-card-subtitle>{{ produto?.description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn
            v-if="!auth.getSquad()"
            color="primary"
            :to="{ name: 'squad-create', params: { productUuid: route.params.uuid } }"
          >
            Criar Squad
          </v-btn>
          <v-btn
            v-if="auth.getSquad()"
            color="primary"
            :to="{ name: 'squads', params: { uuid: auth.getSquad().uuid } }"
          >
            Squad
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            :to="{ name: 'product-update', params: { uuid: route.params.uuid } }"
          >
            Atualizar
          </v-btn>

          <v-dialog width="500">
            <template #activator="{ props }">
              <v-btn v-bind="props" color="red">excluir</v-btn>
            </template>
            <template #default="{ isActive }">
              <v-card title="">
                <v-card-text> Você tem certeza que deseja excluir o produto? </v-card-text>
                <v-card-actions>
                  <v-btn color="red" text="excluir" @click="del(route.params.uuid)"></v-btn>
                  <v-spacer />
                  <v-btn text="Cancelar" @click="isActive.value = false"></v-btn>
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
import { ref, onMounted, watch } from 'vue'
import { useProductStore } from '@/stores/product'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const route = useRoute()
const productStore = useProductStore()

// Criamos uma referência para o produto que será carregado
const produto = ref(null)

// Função para carregar o produto pelo UUID
const loadProduct = async () => {
  const productUuid = route.params.uuid
  produto.value = await productStore.getProduct(productUuid)
}

// Chama a função de carregamento assim que o componente é montado
onMounted(() => {
  loadProduct()
})

// Watcher para recarregar o produto quando o UUID da rota mudar
watch(
  () => route.params.uuid,
  () => {
    loadProduct()
  }
)

// Função para deletar o produto, se não houver squad
function del(uuid) {
  if (!auth.getSquad()) {
    productStore.del(uuid)
    router.push({ name: 'onboarding' })
  } else {
    alert(
      'Seu produto já tem uma squad ativa. Caso queira exclui-lo, entre em contato com os nossos administradores!'
    )
  }
}
</script>

<style scoped></style>

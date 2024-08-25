<template>
  <v-navigation-drawer app v-model="drawer" class="sidebar">
    <div class="sidebar-wrapper">
      <!-- Logo -->
      <v-list-item @click="navigateToHome" class="logo">
        <a class="d-flex align-center logo" @click="navigateToHome">
          <v-img height="36" width="36" :src="imgUrl" alt="Logo SouJunior" />
          <h1 class="text-h6 font-weight-bold font-semibold text-white logo-text">
            SouJunior Labs
          </h1>
        </a>
      </v-list-item>

      <!-- Informação do usuário -->
      <v-list class="sidebar-list">
        <v-list-item class="user-info">
          <v-list-item-avatar>
            <a :href="userProfileLink">
              <v-img class="user-avatar" :src="avatarUrl" height="84" width="84" alt="Avatar" />
            </a>
          </v-list-item-avatar>
          <v-list-item-content class="user-content">
            <v-list-item-title>{{ auth.getName() }}</v-list-item-title>
            <v-list-item-subtitle>{{ userRole }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- Menu para Founder -->
        <template v-if="userRole === 'Founder'">
          <v-list-item class="menu-title">Gerenciar</v-list-item>

          <!-- Meus Produtos -->
          <v-list-group v-model="productsExpanded" no-action>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="menu-item">
                <v-avatar class="menu-icon">
                  <v-icon>mdi-folder-open</v-icon>
                </v-avatar>
                <v-list-item-content class="menu-item-content">Meus Produtos</v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="product in auth.products"
              :key="product.uuid"
              @click="navigateToProduct(product.uuid)"
              class="menu-item-list"
            >
              <v-list-item-content>{{ product.name }}</v-list-item-content>
            </v-list-item>

            <v-list-item v-if="!auth.products" class="menu-item-list">
              <v-list-item-content>Nenhum produto cadastrado</v-list-item-content>
            </v-list-item>
          </v-list-group>

          <!-- Minhas squads -->

          <v-list-group v-model="squadsExpanded" no-action>
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" class="menu-item">
                <v-avatar class="menu-icon">
                  <v-icon>mdi-account-group</v-icon>
                </v-avatar>
                <v-list-item-content class="menu-item-content">Minhas Squads</v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="squad in auth.squads"
              :key="squad.uuid"
              @click="navigateToSquad(squad.uuid)"
              class="menu-item-list"
            >
              <v-list-item-content>{{ squad.name }}</v-list-item-content>
            </v-list-item>

            <v-list-item v-if="!auth.products" class="menu-item">
              <v-list-item-content class="menu-item-list"
                >Nenhuma squad cadastrada</v-list-item-content
              >
            </v-list-item>
          </v-list-group>
        </template>

        <!-- Menu para Admin -->
        <template v-if="userRole === 'Admin'">
          <v-list-item @click="navigateTo('manage-users')" class="menu-item">
            <v-avatar class="menu-icon">
              <v-icon>mdi-account-multiple</v-icon>
            </v-avatar>
            <v-list-item-content class="menu-item-content">Gerenciar Usuários</v-list-item-content>
          </v-list-item>

          <v-list-item @click="navigateTo('manage-products')" class="menu-item">
            <v-avatar class="menu-icon">
              <v-icon>mdi-package-variant-closed</v-icon>
            </v-avatar>
            <v-list-item-content class="menu-item-content">Gerenciar Produtos</v-list-item-content>
          </v-list-item>

          <v-list-item @click="navigateTo('manage-permissions')" class="menu-item">
            <v-avatar class="menu-icon">
              <v-icon>mdi-lock-check</v-icon>
            </v-avatar>
            <v-list-item-content class="menu-item-content"
              >Gerenciar Permissões</v-list-item-content
            >
          </v-list-item>
        </template>

        <v-list-item class="menu-divider">
          <v-divider></v-divider>
        </v-list-item>

        <!-- Menu Geral -->
        <v-list-item @click="navigateTo('profile')" class="menu-global-item">
          <v-avatar class="menu-icon">
            <v-icon>mdi-cog</v-icon>
          </v-avatar>
          <v-list-item-content class="menu-item-content">Configurações</v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout" class="menu-global-item">
          <v-avatar class="menu-icon">
            <v-icon>mdi-logout</v-icon>
          </v-avatar>
          <v-list-item-content class="menu-item-content">Sair</v-list-item-content>
        </v-list-item>

        <!-- Ícone do Discord -->
        <v-spacer></v-spacer>
        <v-list-item
          class="discord-icon"
          @click="window.open('https://discord.gg/soujunior-community-759176734460346423')"
        >
          <DiscordIcon large />
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import DiscordIcon from '@/components/icons/DiscordIcon.vue'
import imgUrl from '@/assets/logo-white-transparent.png'
import defaultAvatar from '@/assets/default-avatar.png'
import { onMounted } from 'vue'

const auth = useAuthStore()
const router = useRouter()

const drawer = ref(true)
const productsExpanded = ref(false)

// Lógica compartilhada entre HeaderMenu e Sidebar
const logged = computed(() => auth.getName() !== '')
const navigateToHome = () => router.push({ name: 'home' })

const userRole = computed(() => {
  return auth.auth.user_type === 'admin' ? 'Admin' : 'Founder'
})

const userProfileLink = computed(() => `/profile`)
const avatarUrl = computed(() => auth.auth.avatar || defaultAvatar)

const navigateTo = (routeName) => router.push({ name: routeName })

const logout = () => {
  auth.logout()
  router.push({ name: 'home' })
}

const toggleProducts = () => {
  productsExpanded.value = !productsExpanded.value
}

const navigateToProduct = (uuid) => {
  router.push({ name: 'product', params: { uuid } })
}

onMounted(async () => {
  await auth.fetchProducts(auth.getUuid())
  if (auth.products.length > 0) {
    await auth.fetchSquads(auth.products[0].uuid)
  }
})
</script>

<style scoped>
.sidebar {
  position: fixed !important;
  top: 50px !important;
  left: -1 !important;
  padding: 25px 0px 0px 0px;
  width: 300px;
  height: 100vh;
  border-radius: 0px 32px 0px 0px;
  border: 1px 1px 0px 0px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-width: 1px, 1px, 0px, 0px;
  border-style: solid;
  border-color: #ffffff1a;
  overflow: hidden; /* Remove a barra de rolagem externa */
}

.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden !important; /* Remove a barra de rolagem externa */
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px); /* Ajusta a altura da lista para caber dentro da sidebar */
  overflow-y: auto; /* Permite o scroll vertical */
  padding: 10px;
}

/* Esconde a barra de rolagem */
.sidebar-list::-webkit-scrollbar {
  width: 0; /* Define a largura da barra de rolagem como 0 para ocultá-la */
  height: 0;
}

.sidebar-list {
  -ms-overflow-style: none; /* Para Internet Explorer e Edge */
  scrollbar-width: none; /* Para Firefox */
}

.menu-title {
  font-family: Radio Canada;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  text-align: left;
  color: #ecf0f1;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

.user-info .user-avatar {
  width: 84px;
  height: 84px;
  border-radius: 90px;
  opacity: 0px;
}

.user-info .v-avatar {
  margin-right: 16px;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: #ecf0f1;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #34495e;
}

.menu-item-content {
  color: #ecf0f1;
  font-family: Radio Canada;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
}

.menu-item .menu-icon {
  color: var(--black-100, #1c1c1c);
  margin-right: 12px;
  width: 32px;
  height: 32px;
  padding: 3px 1px 3px 1px;
  border-radius: 114px;
  background: var(--Logo-Labs, #62d4a4);
}

.menu-item .arrow-icon {
  margin-left: 10px;
  width: 10px;
  height: 10px;
  color: #eefbf54d;
}

.menu-item-list {
  display: flex;
  cursor: pointer;
  color: #ecf0f1;
  transition: background-color 0.2s;
  font-family: Radio Canada;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
}

.menu-global-item {
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: #ecf0f1;
  transition: background-color 0.2s;
}

.menu-global-item:hover {
  background-color: #34495e;
}

.menu-global-item .menu-icon {
  color: var(--black-100, #1c1c1c);
  margin-right: 12px;
  width: 32px;
  height: 32px;
  padding: 3px 1px 3px 1px;
  border-radius: 114px;
  opacity: 0px;
  background: #c4d1cb;
}

.menu-divider {
  margin: 5px;
}

.discord-icon {
  display: flex;
  justify-content: center;
  padding: 20px;
  justify-self: center;
}

.logo {
  cursor: pointer;
  transition: ease-in-out 0.2s;

  &:hover {
    filter: brightness(1.25);
    transition: ease-in-out 0.2s;
  }
}

.logo-text {
  font-family: 'Radio Canada', serif !important;
}
</style>

<template>
  <v-app-bar class="header" color="transparent" app elevation="4">
    <div class="w-100 d-flex align-center justify-space-between main-container">
      <a class="d-flex align-center logo" @click="navigateToHome">
        <v-img height="36" width="36" :src="imgUrl" alt="Logo SouJunior" />
        <h1 class="text-h5 font-weight-bold font-semibold primary-color ml-3 logo-text">
          SouJunior Labs
        </h1>
      </a>
      <div class="d-flex align-center ga-2" v-if="!isMobile">
        <v-btn variant="text" class="font-weight-semibold" :to="{ name: 'home' }"> Home </v-btn>
        <v-btn
          v-if="logged"
          variant="text"
          class="font-weight-semibold"
          :to="{ name: 'onboarding' }"
        >
          Onboarding
        </v-btn>
        <v-btn v-if="!logged" variant="text" class="font-weight-semibold" :to="{ name: 'login' }">
          Login
        </v-btn>
        <v-btn v-if="logged" variant="text" class="font-weight-semibold" :to="{ name: 'products' }">
          Produtos
        </v-btn>
        <v-menu v-if="logged" open-on-hover>
          <template #activator="{ props }">
            <v-btn variant="text" class="font-weight-semibold" v-bind="props">
              {{ auth.getName() }}
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item link :to="{ name: 'profile' }">
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="auth.logout()">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-menu v-else>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link :to="{ name: 'home' }">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="logged" :to="{ name: 'onboarding' }">
            <v-list-item-title>Onboarding</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="!logged" :to="{ name: 'login' }">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="!logged" :to="{ name: 'products' }">
            <v-list-item-title>Produtos</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="logged" :to="{ name: 'profile' }">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item link v-if="logged" @click="auth.logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useTheme } from 'vuetify'
import imgUrl from '@/assets/logo-green-transparent.png'

const router = useRouter()
const theme = useTheme()
const auth = useAuthStore()

const logged = computed(() => auth.getName() != '')

const navigateToHome = () => {
  router.push({ name: 'home' })
}

const isMobile = computed(() => window.innerWidth <= 960)
</script>

<style lang="scss">
.header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.main-container {
  margin-left: 240px;
  margin-right: 240px;
  padding: 0;

  @media (max-width: 1600px) {
    margin-left: 120px;
    margin-right: 120px;
  }

  @media (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
  }
}

.primary-color {
  color: #06d7a0;
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

<template>
  <v-app :class="ef">
    <component :is="currentLayout" />
    <transition name="fade" mode="out-in">
      <v-main class="d-flex flex-grow-1 main-container" style="margin-top: 64px">
        <RouterView />
        <v-snackbar
          v-model="snackbarStore.snack.show"
          v-bind="snackbarStore.snack"
          location="top right"
        >
          {{ text }}
          <template #actions>
            <v-btn variant="text" @click="snackbar = false"> Close </v-btn>
          </template>
        </v-snackbar>
      </v-main>
    </transition>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { useSnackbarStore } from '@/stores/snackbar'
import HeaderMenu from '@/components/HeaderMenu.vue'
import SideMenu from '@/components/dashboard/Sidebar.vue'

const theme = useTheme()
const snackbarStore = useSnackbarStore()
const route = useRoute()

const sideMenuRoutes = [
  '/dashboard',
  '/profile',
  '/onboarding',
  '/products',
  '/product/:uuid',
  '/product/create',
  '/squads/:uuid',
  '/squad/:uuid',
  '/squad/create/:productUuid',
  '/squad/:uuid/update'
]
const currentLayout = computed(() => {
  return sideMenuRoutes.includes(route.path) ? SideMenu : HeaderMenu
})

const currentTheme = computed(() => theme.current.value)

const ef = computed(() => (route.path === '/' ? 'homeBackgroundEffect' : ''))
</script>

<style lang="scss">
.homeBackgroundEffect {
  background-image: url('/src/assets/home/homeBackground.png');
  background-size: cover;
}

.main-container {
  margin-left: 240px;
  margin-right: 240px;
  padding: 0;

  @media (max-width: 1500px) {
    margin-left: 120px;
    margin-right: 120px;
  }

  @media (max-width: 1300px) {
    margin-left: 64px;
    margin-right: 64px;
  }

  @media (max-width: 968px) {
    margin-left: 32px;
    margin-right: 32px;
  }

  @media (max-width: 600px) {
    margin-left: 16px;
    margin-right: 16px;
  }
}

h2 {
  font-size: 36px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
  color: #62d4a4;
}

h3 {
  font-size: 32px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
  color: #62d4a4;
}

h4 {
  font-size: 22px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
}

h5 {
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  color: #ffffff;
}

h6 {
  font-size: 20px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 600;
  color: #ffffff;
}
</style>

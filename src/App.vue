<template>
  <v-app :class="ef">
    <component :is="currentLayout" />
    <transition name="fade" mode="out-in">
      <v-main class="main-container" :class="{ 'route-content-style': !isHomePage }">
        <RouterView />
        <v-snackbar
          v-model="snackbarStore.snack.show"
          v-bind="snackbarStore.snack"
          location="top right"
        >
          {{ text }}
          <template #actions>
            <v-btn variant="text" @click="snackbarStore.hideSnackbar">Fechar</v-btn>
          </template>
        </v-snackbar>
      </v-main>
    </transition>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'
import { useSnackbarStore } from '@/stores/snackbar'
import HeaderMenu from '@/components/HeaderMenu.vue'
import SideMenu from '@/components/dashboard/Sidebar.vue'

const theme = useTheme()
const snackbarStore = useSnackbarStore()
const route = useRoute()

const sideMenuRoutes = [
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

const currentLayout = computed(() =>
  route.matched.some((record) =>
    sideMenuRoutes.some((pattern) =>
      new RegExp(pattern.replace(':uuid', '[^/]+')).test(record.path)
    )
  )
    ? SideMenu
    : HeaderMenu
)

const isHomePage = computed(() => {
  return ['/', '/login', '/registry'].includes(route.path)
})
const ef = computed(() => (route.path === '/' ? 'homeBackgroundEffect' : ''))

const isMobile = ref(window.innerWidth <= 960)

onMounted(() => {
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 960
  })
})
</script>

<style lang="scss">
.homeBackgroundEffect {
  background-image: url('/src/assets/home/homeBackground.png');
  background-size: cover;
}

.main-container {
  margin: 64px auto;
  padding: 0 250px;
  max-width: 100vw;
  width: 100%;

  @media (max-width: 1500px) {
    padding: 0 120px;
  }

  @media (max-width: 1300px) {
    padding: 0 64px;
  }

  @media (max-width: 968px) {
    padding: 0 32px;
  }

  @media (max-width: 600px) {
    padding: 0 16px;
  }
}

.route-content-style {
  padding: 0px 0px 0px 250px;
  @media (max-width: 968px) {
    padding: 0 32px;
  }

  @media (max-width: 600px) {
    padding: 0 16px;
  }
}

h2,
h3,
h4,
h5,
h6 {
  font-family: 'Radio Canada', sans-serif;
  font-weight: 700;
  color: #62d4a4;
}

h2 {
  font-size: 2.25rem;
}
h3 {
  font-size: 2rem;
}
h4 {
  font-size: 1.375rem;
}
h5 {
  font-size: 2.5rem;
  color: #ffffff;
}
h6 {
  font-size: 1.25rem;
  color: #ffffff;
}
</style>

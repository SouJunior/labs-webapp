<template>
  <Sidebar :user="user" :menuItems="menuItems" />
  <v-container>
    <h1>Dashboard</h1>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue' // Importing the SVG icon

const user = ref({
  name: 'Juninho Farias',
  email: 'juninho@soujunior.com',
  avatar:
    'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  roles: ['Founder', 'Admin']
})

const menuItems = ref([
  {
    title: 'Meus Produtos',
    role: 'Founder',
    icon: 'SearchIcon',
    open: false,
    items: [
      { name: 'Carona Fácil', icon: 'mdi-car' },
      { name: 'Projetinho', icon: 'mdi-car' },
      { name: 'Ver todos', icon: 'mdi-eye', showAllLink: true }
    ]
  },
  {
    title: 'Minha Squad',
    role: 'Founder',
    icon: 'SearchIcon',
    open: false,
    items: [
      { name: 'Cadastrar Squad', icon: 'mdi-account-plus' },
      { name: 'Alterar Squad', icon: 'mdi-account-edit' }
    ]
  },
  {
    title: 'Administrativo',
    role: 'Admin',
    icon: 'SearchIcon',
    open: false,
    items: [
      { name: 'Gerenciar Weeklies', icon: 'mdi-account-plus' },
      { name: 'Gerenciar Produtos', icon: 'mdi-account-edit' }
    ]
  }
])
</script>

<style>
/* Estilos adicionais se necessário */
</style>

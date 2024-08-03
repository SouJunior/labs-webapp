<template>
  <v-navigation-drawer app v-model="drawer" class="sidebar">
    <v-list class="sidebar-list">
      <v-list-item class="user-info">
        <v-list-item-avatar>
          <v-avatar>
            <img :src="user.avatar" alt="Avatar" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content class="user-content">
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        v-for="(item, index) in filteredMenuItems"
        :key="index"
        v-model="item.open"
        class="menu-group"
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" class="menu-title" @click="toggleGroup(index)">
            <component :is="getIconComponent(item.icon)" class="menu-icon" />
            <v-list-item-content class="menu-title-content">{{ item.title }}</v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </template>
        <v-list-item v-for="(subItem, subIndex) in item.items" :key="subIndex" class="menu-item">
          <v-avatar>
            <v-icon class="menu-icon">{{ subItem.icon }}</v-icon>
          </v-avatar>
          <v-list-item-content class="menu-item-content">{{ subItem.name }}</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="item.showAllLink" @click="navigateToAll" class="menu-item show-all">
          <v-list-item-content>
            <v-list-item-content>Ver todos</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <v-spacer></v-spacer>

      <v-list-item class="discord-icon">
        <DiscordIcon large />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed, ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import DiscordIcon from '@/components/icons/DiscordIcon.vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
    default: () => ({})
  },
  menuItems: {
    type: Array,
    required: true,
    default: () => []
  }
})

const drawer = ref(true)

const toggleGroup = (index) => {
  props.menuItems[index].open = !props.menuItems[index].open
}

const navigateToAll = () => {
  // Logic to navigate to "Ver todos" page
}

const filteredMenuItems = computed(() => {
  return props.menuItems.filter((item) => props.user.roles.includes(item.role))
})

const getIconComponent = (icon) => {
  const iconComponents = {
    SearchIcon
    // Adicione aqui outros componentes de ícone personalizados, se necessário
  }
  return iconComponents[icon] || 'v-icon'
}
</script>

<style scoped>
.sidebar {
  background-color: #1e1e1e;
  color: white;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 16px;
  margin-bottom: 40px;
}

v-divider {
  color: #62d4a452;
}

.user-info .v-avatar {
  margin-right: 20px;
}

.menu-group {
  margin-bottom: 10px;
}

.menu-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  color: #63f6a5;
  cursor: pointer;
  padding: 0 16px;
}

.menu-title .menu-icon {
  margin-right: 10px;
}

.menu-title-content {
  flex: 1;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.menu-item .v-avatar {
  margin-right: 10px;
}

.show-all {
  color: #63f6a5;
  cursor: pointer;
  padding-left: 32px;
}

.discord-icon {
  display: flex;
  justify-content: center;
  padding: 16px;
  justify-self: center;
}
</style>

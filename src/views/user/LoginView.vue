<template>
<v-container>
  <v-sheet width="300" class="mx-auto pa-2 ma-2">

    <v-row justify="center">
        <v-col cols="4" class="d-flex justify-center">
            <v-img width="100px" :src="imgUrl" class="rounded-circle"/>
        </v-col>
    </v-row>
    <h1>Login</h1>
    <v-form @submit.prevent>
      <v-text-field
        prepend-icon="mdi-email"
        v-model="user.email"
        :rules="rules"
        label="Email"
      />
      <v-text-field
        prepend-icon="mdi-lock"
        v-model="user.password"
        :rules="rules"
        label="Senha"
      />
      <v-btn color="primary" type="submit" block class="mt-2" @click="submitLogin">Login</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>

<script setup>

import { reactive, ref } from 'vue'
import imgUrl from '@/assets/logo.jpg'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore();

const user = reactive({
  email: 'w@w.com',
  password: '12345678'
});

const submitLogin = async () => {
    try {
        await authStore.login(user);
    } catch (error) {
        console.log(error);
    }
}

const rules = ref([
    value => {
        if (value) return true;
        return 'You must enter a first name.';
    },
]);
</script>

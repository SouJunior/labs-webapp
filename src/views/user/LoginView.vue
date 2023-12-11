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
              prepend-icon="mdi-account"
        v-model="user.getName"
        :rules="rules"
        label="Login"
      ></v-text-field>
      <v-text-field
              prepend-icon="mdi-lock"
        v-model="firstName"
        :rules="rules"
        label="Senha"
      ></v-text-field>
      <v-btn color="primary" type="submit" block class="mt-2" @click.prevent="login()">Login</v-btn>
    </v-form>
  </v-sheet>
</v-container>
</template>

<script setup>

import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from "pinia";
import imgUrl from '@/assets/logo.jpg'
//const { form1 } = storeToRefs(useUserStore());

const counter = useCounterStore()
const {user} = storeToRefs(useUserStore())


counter.increment()

const firstName = ref(''); // ref is used for primitive types

const rules = ref([
    value => {
        if (value) return true;
        return 'You must enter a first name.';
    },
]);


</script>

<template>
  <v-sheet width="300" class="mx-auto pa-2 ma-2">
    <v-form @submit.prevent>
      <v-text-field
        v-model="user.getName"
        :rules="rules"
        label="Login"
      ></v-text-field>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" @click.prevent="login()">Submit</v-btn>
    </v-form>
    <p>teste: {{firstName}}, counter: {{user.getName}}</p>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from "pinia";

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

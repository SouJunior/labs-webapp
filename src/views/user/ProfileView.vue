<template>
  <v-container>
    <v-form>
      <v-text-field label="First Name" v-model="profile.firstName"></v-text-field>
      <v-text-field label="Last Name" v-model="profile.lastName"></v-text-field>
      <v-text-field label="Email" v-model="profile.email"></v-text-field>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="profile.birthDate"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="profile.birthDate"
            label="Birthdate"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="profile.birthDate" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="saveDate">OK</v-btn>
        </v-date-picker>
      </v-menu>
      <v-select
        label="Gender"
        :items="genders"
        v-model="profile.gender"
      ></v-select>
      <v-btn color="primary" @click="submitProfile">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, reactive } from 'vue';

const profile = reactive({
  firstName: '',
  lastName: '',
  email: '',
  birthDate: '',
  gender: ''
});

const genders = ref(['Male', 'Female', 'Other']);
const menu = ref(false);

const saveDate = () => {
  menu.value = false;
};

const submitProfile = () => {
  // Submit profile data
};
</script>

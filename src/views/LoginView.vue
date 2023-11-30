<template>
  <v-sheet width="300" class="mx-auto pa-2 ma-2">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Login"
      ></v-text-field>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      firstName: '',
      rules: [
        value => {
          if (value) return true

          return 'You must enter a first name.'
        },
      ],
    }),
  }
</script>

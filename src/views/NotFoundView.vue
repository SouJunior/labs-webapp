<template>
  <v-sheet
    width="300"
    class="mx-auto"
  >
    Not Found
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

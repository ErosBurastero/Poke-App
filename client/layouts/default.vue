<template>
  <v-app>
    <Loading />
    <v-app-bar app color="primary" height="80">
      <div class="wrapper d-flex justify-space-between">
        <figure>
          <VuetifyImage src="/pokemon.svg" max-width="200" height="70" />
        </figure>
        <Icon iconName="mdi-theme-light-dark" size="30" @click="changeTheme" />
      </div>
      <!-- <v-container fluid class="pa-0">
        <v-row>
          <v-col cols="6" align-self="center"> </v-col>
          <v-col cols="6" class="d-flex justify-end"> </v-col>
        </v-row>
      </v-container> -->
    </v-app-bar>
    <v-main class="bodyColor">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

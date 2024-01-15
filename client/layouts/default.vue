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

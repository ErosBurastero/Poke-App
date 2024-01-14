<template>
  <v-app>
    <v-app-bar color="primary" height="100">
      <v-container fluid class="pa-0">
        <v-row>
          <v-col cols="6" align-self="center">
            <VuetifyImage src="/pokemon.svg" max-width="250" height="90" />
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <Icon
              iconName="mdi-theme-light-dark"
              size="30"
              @click="changeTheme"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
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

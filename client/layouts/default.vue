<template>
  <v-app>
    <Loading />
    <Snackbar v-model="isShowingAlert" :color="getAlert.type" top right>
      {{ getAlert.text }}
    </Snackbar>
    <v-app-bar app color="primary" height="80">
      <div class="wrapper d-flex justify-space-between">
        <figure>
          <VuetifyImage
            @click="$router.push('/')"
            imageClass="pointer"
            src="/pokemon.svg"
            max-width="200"
            height="70"
          />
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters(['getAlert']),
    isShowingAlert: {
      get() {
        return this.getAlert.showAlert
      },
      set(val) {
        this.handleAlert({
          showAlert: val,
          type: '',
          text: '',
        })
      },
    },
  },
  methods: {
    ...mapActions(['handleAlert']),
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

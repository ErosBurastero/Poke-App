<template>
  <v-app>
    <v-main class="bodyColor">
      <div v-if="error.statusCode === 404">
        <VuetifyImage max-width="600" max-height="500" src="/error.png" />
        <span class="vt fs-50">{{ pageNotFound }}</span>
      </div>

      <div v-else>
        <VuetifyImage max-width="600" max-height="500" src="/error.png" />
        <span class="vt fs-50">{{ otherError }}</span>
      </div>
      <span @click="refreshPage" class="pointer fs-30 poppins blue--text"
        >Pagina principal</span
      >
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Error 404 Not Found',
      otherError: 'Ha ocurrido un error',
    }
  },
  methods: {
    refreshPage() {
      if (this.$route.name !== 'index') {
        this.$router.push('/')
      } else {
        location.reload()
      }
    },
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

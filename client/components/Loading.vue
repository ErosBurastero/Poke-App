<template>
  <v-overlay :value="getShowLoading" opacity="0.70" z-index="2000">
    <div class="d-flex flex-column align-center">
      <v-progress-circular size="50" color="primary" indeterminate />
      <p class="mt-5 poppins fs-30">{{ message }}</p>
    </div>
  </v-overlay>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ToolkitLoading',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Cargando pokemones, por favor espere...',
    },
  },
  computed: {
    ...mapGetters(['getShowLoading']),
  },
}
</script>

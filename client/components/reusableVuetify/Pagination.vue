<template>
  <v-pagination
    v-bind="$attrs"
    v-on="$listeners"
    :class="paginationClass"
  ></v-pagination>
</template>

<script>
export default {
  props: {
    paginationClass: {
      type: String,
    },
  },
}
</script>
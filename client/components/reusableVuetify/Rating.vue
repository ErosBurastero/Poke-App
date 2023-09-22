<template>
  <v-rating v-bind="$attrs" v-on="$listeners" :class="ratingClass"></v-rating>
</template>

<script>
export default {
  props: {
    ratingClass: {
      type: String,
    },
  },
}
</script>

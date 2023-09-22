<template>
  <v-img v-bind="$attrs" v-on="$listeners" :class="imageClass">
    <slot name="content"></slot>
  </v-img>
</template>

<script>
export default {
  props: {
    imageClass: {
      type: String,
    },
  },
}
</script>
<template>
  <v-card v-on="$listeners" v-bind="$attrs" :class="cardClass">
    <slot name="content"></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    cardClass: {
      type: String,
    },
  },
}
</script>

<template>
  <v-chip v-bind="$attrs" v-on="$listeners" :class="chipClass">
    <slot name="content"></slot>
  </v-chip>
</template>

<script>
export default {
  props: {
    chipClass: {
      type: [Array, String],
      required: false,
    },
  },
};
</script>

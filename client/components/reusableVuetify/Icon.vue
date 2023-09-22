<template>
  <v-icon v-bind="$attrs" v-on="$listeners" :class="iconClass">{{
    iconName
  }}</v-icon>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: [Array, Object, String],
      default: "",
    },
    iconName: {
      type: String,
      default: "mdi-close",
    },
  },
};
</script>

<template>
  <v-avatar v-bind="$attrs" v-on="$listeners" :class="avatarClass">
    <slot name="content"></slot>
  </v-avatar>
</template>

<script>
export default {
  props: {
    avatarClass: {
      type: [Array, String],
    },
  },
};
</script>

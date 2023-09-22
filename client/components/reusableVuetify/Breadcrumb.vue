<template>
  <div :class="containerClass">
    <v-container fluid :class="classWrapper">
      <v-breadcrumbs v-bind="$attrs" large class="pa-0">
        <template v-slot:divider>
          <v-icon :size="size" :color="iconColor">mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :active-class="item.to !== $route.path ? '' : undefined"
            :disabled="item.disabled"
            :link="item.link"
            :to="item.to"
            nuxt
          >
            <span @click="item.click ? item.click : null">
              {{ item.text }}
            </span>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    containerClass: {
      type: [Array, Object, String],
      default: "bg-negro-1",
    },
    iconColor: {
      type: String,
      default: "white",
    },
    size: {
      type: String,
      default: "",
    },
    classWrapper: {
      type: String,
      default: "wrapper pa-0",
    },
  },
};
</script>
<style lang="scss" scoped>
// ::v-deep .v-breadcrumbs__item--disabled {
//   // color: $acento1 !important;
// }
::v-deep .v-breadcrumbs__item {
  color: white;
}
</style>

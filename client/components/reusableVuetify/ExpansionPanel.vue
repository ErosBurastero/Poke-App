<template>
  <v-expansion-panels v-bind="$attrs">
    <v-expansion-panel
      v-for="(item, index) in data"
      :key="index"
      :class="panelClass"
      v-on="$listeners"
    >
      <v-expansion-panel-header :class="item.headerClass">
        <slot name="header" :item="item" :index="index"></slot>
      </v-expansion-panel-header>
      <v-expansion-panel-content :class="contentClass">
        <slot name="content" :item="item" :index="index"></slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    panelClass: {
      type: [Array, Object, String],
      default: '',
    },
    contentClass: {
      type: String,
      default: 'bg-green',
    },
  },
}
</script>
<style scoped>
::v-deep .v-expansion-panel {
  border: solid 1px rgb(207, 203, 203) !important;
}

::v-deep .v-expansion-panel-content__wrap {
  padding: 0px !important;
}
</style>

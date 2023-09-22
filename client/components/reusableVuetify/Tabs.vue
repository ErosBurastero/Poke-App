<template>
  <v-tabs v-bind="$attrs" v-model="model">
    <v-tab
      v-for="(item, index) in items"
      :key="index"
      v-bind="$attrs"
      v-on="$listeners"
      link
      nuxt
      :to="item.to"
    >
      <slot name="tab" :item="item"></slot>
    </v-tab>
    <v-tabs-items v-model="model" class="transparent">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <slot name="content" :item="item" :index="index"></slot>
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      model: null,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<template>
  <v-select v-bind="$attrs" v-on="$listeners" :class="selectClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    selectClass: {
      type: [String, Object],
      required: false,
    },
  },
};
</script>
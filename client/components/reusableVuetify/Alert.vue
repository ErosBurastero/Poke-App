<template>
  <v-alert v-bind="$attrs" v-on="$listeners" :class="alertClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-alert>
</template>

<script>
export default {
  props: {
    alertClass: {
      type: [String, Array],
      required: false,
    },
  },
};
</script>
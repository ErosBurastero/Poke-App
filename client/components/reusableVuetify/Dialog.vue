<template>
  <v-dialog v-bind="$attrs" v-on="$listeners" :class="dialogClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialogClass: {
      type: String,
      default: "",
    },
  },
};
</script>
<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" :class="inputClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-text-field>
</template>
<script>
export default {
  props: {
    inputClass: {
      type: String,
      default: "",
    },
  },
};
</script>
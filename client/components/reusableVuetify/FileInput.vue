<template>
  <v-file-input v-bind="$attrs" v-on="$listeners" :class="fileClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-file-input>
</template>
<script>
export default {
  props: {
    fileClass: {
      type: String,
      default: "",
    },
  },
};
</script>

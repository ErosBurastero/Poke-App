<template>
  <v-data-table v-bind="$attrs" v-on="$listeners" :class="tableClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    tableClass: {
      type: String,
      default: '',
    },
  },
}
</script>

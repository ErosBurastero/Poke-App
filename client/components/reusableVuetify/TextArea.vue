<template>
  <v-textarea v-bind="$attrs" v-on="$listeners" :class="textareaClass">
    <template
      v-for="(_, scopedSlotName) in $scopedSlots"
      #[scopedSlotName]="slotData"
    >
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>

    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </v-textarea>
</template>

<script>
export default {
  props: {
    textareaClass: {
      type: [String, Array, Object],
      required: false,
    },
  },
};
</script>
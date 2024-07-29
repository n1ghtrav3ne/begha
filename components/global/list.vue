<template>
  <div
    class="w-full flex justify-between items-center p-2"
    :class="props?.bordered && 'border-b-[1px] border-surface-100/50'"
  >
    <div class="flex items-center">
      <!-- list icon -->
      <slot name="prepend"></slot>
      <!-- list title -->
      <div class="mr-2">
        <span :class="props.titleClass">
          {{ props?.title }}
        </span>
        <br v-if="props?.subtitle" />
        <span
          v-if="props?.subtitle"
          :class="props.subTitleClass"
          @click="$emit('clickSubtitle')"
        >
          {{ props?.subtitle }}
        </span>
      </div>
    </div>

    <slot name="append"></slot>
  </div>
</template>

<script setup>
const props = defineProps([
  "titleClass",
  "title",
  "subTitleClass",
  "subtitle",
  "bordered",
]);
</script>

<style lang="scss" scoped>
</style>
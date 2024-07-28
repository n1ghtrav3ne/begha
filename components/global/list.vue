<template>
  <div
    class="w-full flex justify-between items-center border-b-[1px] border-surface-50 p-2"
  >
    <div class="flex items-center">
      <!-- list icon -->
      <slot name="prepend"></slot>
      <!-- list title -->
      <div>
        <span class="mr-2" :class="props.titleClass">
          {{ props?.title }}
        </span>
        <br v-if="props?.subtitle" />
        <span
          v-if="props?.subtitle"
          class="mr-2"
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
const props = defineProps(["titleClass", "title", "subTitleClass", "subtitle"]);
</script>

<style lang="scss" scoped>
</style>
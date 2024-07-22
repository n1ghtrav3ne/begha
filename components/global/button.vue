<template>
  <div class="w-full h-11">
    <button class="w-full h-full rounded-xl p-2" :class="`bg-${props.color}`">
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" scoped>
</style>
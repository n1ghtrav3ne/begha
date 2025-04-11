<template>
  <button :class="`bg-${props.color}`" class="w-full h-full rounded-xl p-2">
    <slot></slot>
  </button>
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
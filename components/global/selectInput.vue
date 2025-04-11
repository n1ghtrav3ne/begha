<template>
  <label class="font-normal text-sm text-neutral-800">{{ label }}</label>
  <div
    class="w-full h-[54px] border py-4 px-3 border-neutral-200 rounded-2xl flex items-center justify-between mt-2"
  >
    <span class="text-sm text-neutral-500">{{ text }}</span>
    <!-- icon -->
    <div class="size-6 centered">
      <img src="~/assets/images/icons/arrow-left.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["text", "label"]);
</script>

<style lang="scss" scoped>
</style>
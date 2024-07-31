<template>
  <div>
    <div
      class="h-8 mx-1 bg-secondary-200 border border-blue rounded-2xl py-1 px-2 flex items-center justify-between"
    >
      <span class="text-tiny">{{ props?.label }}</span>
      <img
        v-if="props.closable"
        src="~/assets/images/icons/close.svg"
        class="size-5"
        @click="emit('close', null)"
      />
    </div>
  </div>
</template>
    
  <script setup>
const props = defineProps(["modelValue", "label", "closable"]);
const emit = defineEmits(["close"]);
</script>
    
  <style lang="scss" scoped>
</style>
  
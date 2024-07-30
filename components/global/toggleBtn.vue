<template>
  <div class="w-full h-9 bg-surface-50 flex justify-evenly rounded-md">
    <div
      class="w-[50%] rounded-md centered m-1"
      @click="selectedItemHandle('first')"
      :class="
        selectedItem == 'first'
          ? 'bg-white text-surface-600 shadow-sm'
          : 'bg-transparent text-surface-500'
      "
    >
      {{ props.first }}
      <slot v-if="selectedItem == 'first'" name="append-first"></slot>
    </div>
    <div
      class="w-[50%] rounded-md centered m-1"
      :class="
        selectedItem == 'secend'
          ? 'bg-white text-surface-600 shadow-sm'
          : 'bg-transparent text-surface-500'
      "
      @click="selectedItemHandle('secend')"
    >
      {{ props.secend }}
      <slot v-if="selectedItem == 'secend'" name="append-secend"></slot>
    </div>
  </div>
</template>

<script setup>
const selectedItem = ref("first");
const props = defineProps(["modelValue", "first", "secend"]);
const emit = defineEmits(["update:modelValue"]);
const selectedItemHandle = (item) => {
  selectedItem.value = item;
  emit("update:modelValue", item);
};
</script>

<style lang="scss" scoped>
</style>
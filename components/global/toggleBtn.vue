<template>
  <div class="w-full h-12 bg-neutral-100 flex justify-evenly rounded-md">
    <div
      class="w-1/2 rounded-md centered m-1"
      @click="selectedItemHandle('first')"
      :class="
        selectedItem == 'first'
          ? 'bg-white text-neutral-800 shadow-sm'
          : 'bg-transparent text-neutral-500'
      "
    >
      {{ props.first }}
      <slot v-if="selectedItem == 'first'" name="append-first"></slot>
    </div>
    <div
      class="w-1/2 rounded-md centered m-1"
      :class="
        selectedItem == 'secend'
          ? 'bg-white text-neutral-800 shadow-sm'
          : 'bg-transparent text-neutral-500'
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
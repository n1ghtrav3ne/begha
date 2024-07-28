<template>
  <div class="w-full h-9 bg-surface-50 flex justify-evenly rounded-md">
    <div
      class="w-[50%] rounded-md centered m-1"
      @click="selectedItemHandle('user')"
      :class="
        selectedItem == 'user'
          ? 'bg-white text-surface-600 shadow-sm'
          : 'bg-transparent text-surface-500'
      "
    >
      کاربر عادی
      <div class="size-5 bg-red rounded-full mr-2 centered text-white">1</div>
    </div>
    <div
      class="w-[50%] rounded-md centered m-1"
      :class="
        selectedItem == 'admin'
          ? 'bg-white text-surface-600 shadow-sm'
          : 'bg-transparent text-surface-500'
      "
      @click="selectedItemHandle('admin')"
    >
      کاربر بقعه
      <div class="size-5 bg-red rounded-full mr-2 centered text-white">1</div>
    </div>
  </div>
</template>

<script setup>
const selectedItem = ref("user");
const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const selectedItemHandle = (item) => {
  selectedItem.value = item;
  emit("update:modelValue", item);
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="inline-flex items-center p-2">
    <div
      class="size-5 border border-neutral-200 rounded-4 rounded"
      @click="activeCheckbox()"
    >
      <div
        v-show="checkBoxStatus"
        class="size-full bg-secondary-700 rounded-4 flex items-center justify-center"
      >
        <img src="~/assets/images/icons/check-done.svg" />
      </div>
    </div>
    <span class="mr-2 text-xs">{{ props.item.label }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["item", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const checkBoxStatus = ref(false);

const activeCheckbox = () => {
  checkBoxStatus.value = !checkBoxStatus.value;
  emit("update:modelValue", checkBoxStatus.value ? props.item : null);
};
</script>

<style lang="scss" scoped>
</style>
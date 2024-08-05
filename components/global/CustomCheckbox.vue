<template>
  <div class="inline-flex items-center p-2">
    <div
      class="size-5 border border-neutral-200 rounded-4 rounded"
      @click="activeCheckbox()"
    >
      <div
        v-show="modelValue"
        class="size-full bg-secondary-700 rounded-4 flex items-center justify-center"
      >
        <img src="~/assets/images/icons/check-done.svg" />
      </div>
    </div>
    <span class="mr-2 text-xs">{{ props?.label }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["label", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
const checkBoxStatus = ref(false);

const activeCheckbox = () => {
  emit("update:modelValue", !props.modelValue);
};

watch(
  () => props.modelValue,
  (newValue) => {
    checkBoxStatus.value = newValue;
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
</style>
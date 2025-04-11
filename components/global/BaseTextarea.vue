<template>
  <div class="w-full my-3">
    <ClientOnly>
      <label class="font-normal text-sm text-neutral-800"
        >{{ label }} ({{ props.modelValue.length }} / {{ max }} )</label
      >
      <textarea
        class="border border-neutral-200 rounded-lg w-full outline-none p-4 focus:border-secondary-500 focus:border-2"
        :placeholder="placeholder"
        :maxlength="max"
        rows="6"
        v-model="limitedInput"
      ></textarea>
    </ClientOnly>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  max: {
    type: Number,
    default: 1000,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const input = ref(props.modelValue);

const limitedInput = computed({
  get() {
    return input.value;
  },
  set(value) {
    if (value.length <= props.max) {
      input.value = value;
      emit("update:modelValue", value);
    }
  },
});
</script>

<style lang="scss" scoped>
</style>

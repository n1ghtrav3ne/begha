<template>
  <div class="my-3">
    <ClientOnly>
      <label class="font-normal text-sm text-neutral-800">{{
        props.label
      }}</label>
      <div
        class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center justify-between p-3 bg-white"
      >
        <span class="text-neutral-800 text-xs">{{ props.placeholder }}</span>
        <div class="flex justify-evenly items-center">
          <button
            @click="increaseHandller"
            class="size-6 bg-secondary-200 border border-secondary-700 rounded-md text-secondary-700 font-bold"
          >
            +
          </button>
          <span class="mx-4">{{ number }}</span>
          <button
            @click="decreaseHandller"
            class="size-6 bg-secondary-200 border border-secondary-700 rounded-md text-secondary-700 font-bold"
          >
            -
          </button>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
// const props = defineProps(["label", "placeholder", "modelValue"]);
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);
const number = ref(0);
number.value = props.modelValue;
const increaseHandller = () => {
  ++number.value;
  emit("update:modelValue", number.value);
};

const decreaseHandller = () => {
  if (number.value > 0) {
    --number.value;
    emit("update:modelValue", number.value);
  }
};
</script>

<style lang="scss" scoped>
</style>
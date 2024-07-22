<template>
  <div>
    <label class="font-normal text-sm text-surface-600">
      {{ props.label }}
    </label>
    <div class="w-full h-11 mt-4">
      <input
        class="w-full h-full bg-surface-50 outline-1 outline-primary p-4 rounded-lg"
        :placeholder="props.placeholder"
        :type="props.type"
        v-model="input"
        @change="emit('update:modelValue', input)"
      />
      <span class="text-error text-sm" v-if="props.error">
        {{ props.error }}
      </span>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const input = ref();
const props = defineProps({
  placeholder: {
    typeof: String,
  },
  modelValue: {},
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
  },
  error: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
</style>
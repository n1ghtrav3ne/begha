<template>
  <div class="w-full h-full">
    <label class="font-normal text-sm text-neutral-800">
      {{ label }}
    </label>
    <div
      ref="inputElem"
      class="w-full h-full flex items-center justify-between px-4 mt-2"
      :class="[
        `bg-${color}`,
        `rounded-${rounded}`,
        label ? 'mt-1' : '',
        activeInput
          ? primary
            ? ' border  border-primary'
            : ' border  border-secondary-400 border-shadow'
          : border
          ? ' border  border-neutral-200'
          : '',
      ]"
    >
      <div class="centered">
        <slot name="prepend"></slot>
        <input
          class="h-full outline-none p-2"
          :class="[`rounded-${rounded}`, `bg-${color}`]"
          :placeholder="placeholder"
          :type="type"
          :value="modelValue"
          @input="updateValue($event.target.value)"
        />
      </div>
      <slot name="append"></slot>
    </div>
    <span class="text-error text-sm" v-if="error">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["update:modelValue", "status"]);
const props = defineProps({
  color: {
    type: String,
    default: "neutral-100",
  },
  placeholder: {
    type: String,
  },
  modelValue: [String, Number],
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
  rounded: {
    type: String,
    default: "lg",
  },
  border: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
  },
});

const activeInput = ref(false);
const inputElem = ref(null);

const updateValue = (value) => {
  emit("update:modelValue", value);
};

onMounted(() => {
  document.addEventListener("click", (event) => {
    if (inputElem.value) {
      const outsideClick = !inputElem.value.contains(event.target);

      if (outsideClick) {
        activeInput.value = false;
        emit("status", false);
      } else {
        activeInput.value = true;
        emit("status", true);
      }
    }
  });
});
</script>

<style scoped>
::placeholder {
  font-size: 14px;
  color: #7e7e7e;
}

.border-shadow {
  box-shadow: 0px 1px 8px 0px #429ff573;
}
</style>

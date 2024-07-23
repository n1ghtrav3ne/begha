<template>
  <div>
    <label class="font-normal text-sm text-surface-600">
      {{ props.label }}
    </label>
    <div
      id="input-elem"
      class="w-full h-11 mt-4 flex items-center p-4"
      :class="`rounded-${props.rounded} bg-${props.color}`"
    >
      <slot name="prepend"> </slot>

      <input
        class="w-full h-full outline-none py-4"
        :class="`rounded-${props.rounded} bg-${props.color}`"
        :placeholder="props.placeholder"
        :type="props.type"
        v-model="input"
        @change="emit('update:modelValue', input)"
      />

      <slot name="append"> </slot>
    </div>
    <span class="text-error text-sm" v-if="props.error">
      {{ props.error }}
    </span>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const input = ref();
const props = defineProps({
  color: {
    type: String,
    default: "surface-50",
  },
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
  rounded: {
    type: String,
    default: "lg",
  },

  border: {
    type: Boolean,
    default: false,
  },
});

const activeInput = ref(false);

onMounted(() => {
  document.addEventListener("click", function (event) {
    const elem = document.getElementById("input-elem");
    const input = document.getElementsByTagName("input");
    const outsideClick = !elem.contains(event.target);
    if (outsideClick) {
      activeInput.value = false;
      elem.classList.remove("border-[1px]");
      elem.classList.remove("border-secondary-400");
      elem.classList.remove("border-shadow");
      if (props.border) {
        elem.classList.add("border-surface-100");
      }
    } else {
      activeInput.value = true;
      elem.classList.add("border-[1px]");
      elem.classList.remove("border-surface-100");
      elem.classList.add("border-secondary-400");
      elem.classList.add("border-shadow");
      input[0].focus();
    }
  });

  if (props.border) {
    const elem = document.getElementById("input-elem");
    elem.classList.add("border-[1px]");
    elem.classList.add("border-surface-100");
  }
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
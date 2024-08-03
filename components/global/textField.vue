<template>
  <div class="my-3">
    <ClientOnly>
      <!-- text field label  -->
      <div :class="label && 'mb-2'">
        <label class="font-normal text-sm text-neutral-800">
          {{ label }}
        </label>
      </div>

      <div
        ref="inputElem"
        :class="[
          error ? 'border border-error-400 border-red-shadow' : getClass,
          activeInput
            ? variant == 'filled'
              ? 'border border-primary-700 '
              : 'border border-secondary-400 border-shadow'
            : '',
        ]"
        class="rounded-lg p-4"
      >
        <div class="flex">
          <div class="flex-none">
            <slot name="prepend"></slot>
          </div>
          <div class="grow">
            <input
              v-if="!desabled"
              class="h-full w-full flex text-start outline-none bg-transparent text-xs"
              :placeholder="placeholder"
              :type="type"
              :value="modelValue"
              @input="updateValue($event.target.value)"
            />
            <div v-else>
              {{ modelValue || placeholder }}
            </div>
          </div>
          <div class="flex text-end">
            <slot name="append"></slot>
          </div>
        </div>
      </div>
      <div
        class="mt-2 text-xs text-justify"
        :class="error ? 'text-error-700' : ''"
      >
        {{ error ? error : message }}
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue", "status"]);

const props = defineProps({
  // variant type : initial , filled
  variant: {
    type: String,
    default: "initial",
  },
  placeholder: {
    type: String,
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
  message: {
    type: String,
  },
  desabled: {
    type: Boolean,
    default: false,
  },
});

const getClass = computed(() => {
  switch (props.variant) {
    case "initial":
      return "border border-neutral-200/50 bg-white cursor-pointer";
    case "filled":
      return "bg-neutral-100 cursor-pointer";
  }
});

const activeInput = ref(false);
const inputElem = ref(null);

const updateValue = (value) => {
  emit("update:modelValue", value);
};

onMounted(() => {
  if (!props.desabled) {
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
.border-red-shadow {
  box-shadow: 0px 1px 8px 0px #f1acac;
}
</style>

<template>
  <div
    v-if="props.modelValue"
    class="absolute top-0 w-full h-screen bg-surface-400/40 overflow-hidden"
    @click="handleOutsideClick"
  >
    <div
      id="sheet-elem"
      ref="sheetElem"
      class="w-full max-h-[800px] bg-white bottom-0 absolute rounded-t-2xl translate-y-full animate-slide-up overflow-scroll"
      @click.stop
    >
      <div class="w-full h-full relative">
        <div
          class="w-16 h-[5px] bg-primary top-2 absolute left-0 right-0 mx-auto"
        ></div>
        <div class="p-4 w-full">
          <div class="w-full flex justify-between items-center my-2">
            <span :class="props.class">{{ props?.title }}</span>

            <div
              v-if="props?.closable"
              class="size-6 cursor-pointer"
              @click="closeSheet()"
            >
              <img src="~/assets/images/icons/close.svg" class="size-6" />
            </div>
          </div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sheetStatus = ref(false);
const props = defineProps({
  title: { type: String },
  closable: { type: Boolean },
  modelValue: {},
  class: {},
});
const emit = defineEmits(["update:modelValue"]);
const closeSheet = () => emit("update:modelValue", false);

sheetStatus.value = props.modelValue;

const sheetElem = ref(null);

const handleOutsideClick = (event) => {
  if (sheetElem.value && !sheetElem.value.contains(event.target)) {
    closeSheet();
  }
};
</script>

<style lang="scss" scoped>
@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
}
</style>

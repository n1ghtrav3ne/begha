<template>
  <div
    v-if="props.modelValue"
    class="absolute top-0 right-0 w-full max-w-[600px] mx-auto left-0 h-screen bg-surface-400/40 overflow-hidden"
    @click="handleOutsideClick"
  >
    <div
      id="sheet-elem"
      ref="sheetElem"
      class="w-full sheetElem max-h-[800px] bg-white bottom-0 absolute rounded-t-2xl translate-y-full animate-slide-up overflow-auto"
      @click.stop
    >
      <div class="w-full h-full relative">
        <div
          class="w-16 h-[5px] rounded-[20px] bg-primary top-2 absolute left-0 right-0 mx-auto"
        ></div>
        <div class="p-4 w-full">
          <div class="w-full flex justify-between items-center my-2">
            <span :class="props.class">{{ props?.title }}</span>

            <div
              v-if="props?.closable"
              class="size-6 overflow-auto body cursor-pointer"
              @click="closeSheet()"
            >
              <img src="~/assets/images/icons/close.svg" class="size-6" />
            </div>
          </div>

          <hr v-if="props?.line" class="line" />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

const sheetStatus = ref(false);
const props = defineProps({
  title: { type: String },
  closable: { type: Boolean, default: true },
  modelValue: {},
  class: {},
  line: { type: Boolean },
});
const emit = defineEmits(["update:modelValue"]);
const closeSheet = () => emit("update:modelValue", false);

sheetStatus.value = props.modelValue;

const sheetElem = ref(null);

const handleOutsideClick = (event) => {
  if (sheetElem.value && !sheetElem.value.contains(event.target)) {
    closeSheet();
    closeModal();
  }
};

const closeModal = () => {
  modalStore.activeUserSelection("deactive");
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

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

.base {
  max-width: 600px;
  width: 100% !important;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 9999;
}

.base::-webkit-scrollbar {
  display: none !important;
}

.body::-webkit-scrollbar {
  display: none !important;
}

.sheetElem::-webkit-scrollbar {
  display: none;
}

.line {
  width: 100%;
  margin-top: 18px;
  margin-bottom: 18px;
  color: $outline-variant;
}
</style>

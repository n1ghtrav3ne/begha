<template>
  <div
    v-if="props.modelValue"
    class="top-0 right-0 max-w-[600px] w-full fixed z-[99] h-screen m-auto left-0 bg-neutral-800/70"
    @click="handleOutsideClick"
  >
    <div
      id="sheet-elem"
      ref="sheetElem"
      class="w-full sheetElem min-h-[200px] bg-white fixed max-w-[600px] bottom-0 translate-y-full animate-slide-up overflow-y-hidden"
      :class="
        fullScreen
          ? empty
            ? 'h-screen rounded-none'
            : 'h-[99%] rounded-none'
          : 'rounded-t-2xl'
      "
    >
      <div class="w-full h-full relative">
        <div
          v-if="!empty"
          @click="fullScreen = !fullScreen"
          class="w-16 h-[5px] rounded-[20px] bg-primary-700 top-2 absolute left-0 right-0 mx-auto cursor-pointer"
        ></div>
        <div class="p-4 w-full">
          <!-- bottom sheet header  -->
          <div
            class="w-full flex justify-between items-center my-2 overflow-y-hidden"
            v-if="props.title && !empty"
          >
            <span :class="props.class">{{ props?.title }}</span>

            <div
              v-if="props?.title"
              class="size-6 overflow-auto body cursor-pointer"
              @click="closeSheet()"
            >
              <img src="~/assets/images/icons/close.svg" class="size-6" />
            </div>
          </div>

          <!-- bottom sheet divider -->
          <div v-if="title && !empty" class="pt-4 pb-2">
            <div class="divider"></div>
          </div>

          <!-- bottom sheet search field -->
          <div v-if="props.search" class="h-12 my-4" ref="inputElem">
            <text-field
              :placeholder="props.search.placeholder"
              variant="filled"
              v-model="search"
              @update:model-value="emit('updateSearch', search)"
              @status="screenSizeHandler($event)"
            >
              <template #prepend>
                <div class="cursor-pointer ml-2">
                  <img src="~/assets/images/icons/search-black.svg" alt="" />
                </div>
              </template>
            </text-field>
          </div>

          <div
            class="overflow-y-scroll"
            :class="fullScreen ? 'max-h-[700px]' : 'max-h-[400px]'"
          >
            <div :class="slots?.actions && 'pb-14'">
              <slot></slot>
            </div>

            <div class="fixed bottom-5 right-0 w-full" v-if="slots?.actions">
              <div class="px-3">
                <slot name="actions"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String },
  modelValue: {},
  class: {},
  search: {
    label: { type: String },
    placeholder: { type: String },
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  empty: {
    type: Boolean,
    default: false,
  },
});
const sheetElem = ref(null);
const fullScreen = ref(false);
const slots = useSlots();
const disabledFullScreen = () => {
  fullScreen.value = false;
  sheetElem.value.classList.remove("h-screen");
};
const emit = defineEmits(["update:modelValue", "updateSearch"]);
const closeSheet = () => {
  emit("update:modelValue", false);
  disabledFullScreen();
};

const handleOutsideClick = (event) => {
  if (sheetElem.value && !sheetElem.value.contains(event.target)) {
    closeSheet();
    disabledFullScreen();
  }
};

const search = ref("");

const screenSizeHandler = (e) => {
  if (e) fullScreen.value = true;
  else {
    disabledFullScreen();
  }
};

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      document.body.classList.add("disabled-scroll");
    } else {
      document.body.classList.remove("disabled-scroll");
    }
  }
);

fullScreen.value = props.fullscreen;

watch(
  () => props.fullscreen,
  (newValue) => {
    fullScreen.value = newValue;
  }
);
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
  animation: slideUp 0.3s ease-out forwards;
}
</style>
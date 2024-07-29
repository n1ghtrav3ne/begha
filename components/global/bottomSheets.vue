<template>
  <div
    v-if="props.modelValue"
    class="top-0 right-0 max-w-[600px] w-full fixed z-[99] h-screen mx-auto left-0 bg-surface-600/70"
    @click="handleOutsideClick"
  >
    <div
      id="sheet-elem"
      ref="sheetElem"
      class="w-full sheetElem min-h-[200px] bg-white bottom-0 fixed rounded-t-2xl translate-y-full animate-slide-up overflow-y-hidden"
      :class="fullScreen ? 'h-screen' : ''"
    >
      <div class="w-full h-full relative">
        <div
          class="w-16 h-[5px] rounded-[20px] bg-primary top-2 absolute left-0 right-0 mx-auto"
        ></div>
        <div class="p-4 w-full">
          <!-- bottom sheet header  -->
          <div
            class="w-full flex justify-between items-center my-2 overflow-y-hidden"
            v-if="props.title"
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
          <div v-if="title" class="pt-4 pb-2 px-6">
            <div class="divider"></div>
          </div>

          <!-- bottom sheet search field -->
          <div v-if="props.search" class="px-6 h-12" ref="inputElem">
            <base-input
              :placeholder="props.search.placeholder"
              v-model="search"
              @update:model-value="emit('updateSearch', search)"
              @status="screenSizeHandler($event)"
            >
              <template #prepend>
                <div class="cursor-pointer ml-2">
                  <img src="~/assets/images/icons/search-black.svg" alt="" />
                </div>
              </template>
            </base-input>
          </div>

          <div
            class="overflow-y-scroll"
            :class="fullScreen ? 'max-h-[700px]' : 'max-h-[400px]'"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from "~/components/global/input.vue";

const props = defineProps({
  title: { type: String },
  modelValue: {},
  class: {},
  search: {
    label: { type: String },
    placeholder: { type: String },
  },
});
const sheetElem = ref(null);
const fullScreen = ref(false);

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
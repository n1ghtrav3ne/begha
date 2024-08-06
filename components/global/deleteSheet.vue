<template>
  <div>
    <BottomSheets v-model="dialog" :empty="true">
      <div class="px-4 py-6 text-center">
        <div
          class="size-[52px] bg-error-200 mx-auto left-0 right-0 rounded-full centered"
        >
          <img src="/assets/images/icons/trash.svg" />
        </div>
        <h3 class="my-5">آیا از حذف این {{ text }} اطمینان دارید؟</h3>
        <div class="grid grid-cols-2 mt-9">
          <div class="pl-2">
            <base-btn color="error-700">بله</base-btn>
          </div>
          <div class="pr-2" @click="cancelDeleteHandlle">
            <base-btn variant="outlined" color="neutral-800"> خیر </base-btn>
          </div>
        </div>
      </div>
    </BottomSheets>
  </div>
</template>

<script setup>
const props = defineProps(["modelValue", "text"]);
const emit = defineEmits(["update:modelValue"]);
const dialog = ref(false);

const cancelDeleteHandlle = () => {
  emit("update:modelValue", false);
};

watch(
  () => props.modelValue,
  (newValue) => {
    dialog.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
</style>    
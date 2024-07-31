<template>
  <div>
    <label class="font-normal text-sm text-neutral-800">{{
      props.label
    }}</label>
    <div
      @click="dialog = true"
      class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center justify-between p-3"
    >
      <span class="text-neutral-800 text-xs">{{
        selectedAddress ? selectedAddress : props.placeholder
      }}</span>
      <span class="text-secondary-700">
        <img src="~/assets/images/icons/location.svg" />
      </span>
    </div>
    <!-- select address dialog  -->
    <bottomSheets v-model="dialog" title="آدرس خود را انتخاب کنید.">
      <div></div>
    </bottomSheets>
  </div>
</template>
    
    <script setup>
const props = defineProps(["label", "placeholder"]);
const dialog = ref(false);

const emit = defineEmits(["update:modelValue"]);

const selectedAddress = ref("");

watch(selectedAddress, () => {
  emit("update:modelValue", selectedAddress.value);
  dialog.value = false;
});
</script>
    
    <style lang="scss" scoped>
</style>
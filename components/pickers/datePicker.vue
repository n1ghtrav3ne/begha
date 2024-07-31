<template>
  <div>
    <label class="font-normal text-sm text-neutral-800">{{
      props.label
    }}</label>
    <div
      @click="dateDialog = true"
      class="w-full h-14 bg-neutral-100 rounded-lg mt-2 flex items-center justify-between p-3"
    >
      <span class="text-neutral-800 text-xs">{{
        date ? date : props.placeholder
      }}</span>
      <span class="text-blue">
        <img src="~/assets/images/icons/menue-left.svg" />
      </span>
    </div>
    <bottomSheets v-model="dateDialog"> </bottomSheets>
  </div>
</template>

<script setup>
const props = defineProps(["label", "placeholder"]);
const dateDialog = ref(false);
const date = ref("");

const emit = defineEmits(["update:modelValue"]);
watch(date, () => {
  emit("update:modelValue", date.value);
});
</script>

<style lang="scss" scoped>
</style>
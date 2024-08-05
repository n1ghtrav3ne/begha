<template>
  <div class="my-3">
    <ClientOnly>
      <label class="font-normal text-sm text-neutral-800">{{ label }}</label>
      <div
        @click="triggerFileInput"
        class="w-full h-14 border border-neutral-200 rounded-lg mt-2 flex items-center justify-between p-3 bg-white cursor-pointer"
      >
        <span class="text-neutral-800 text-xs">{{
          fileName || placeholder
        }}</span>
        <img src="/assets/images/icons/file.svg" />
      </div>
      <input
        type="file"
        ref="fileInput"
        class="hidden"
        :accept="accept"
        @change="handleFileChange"
      />
    </ClientOnly>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  accept: {
    type: String,
    default: "*/*", // Default to accept all file types
  },
  modelValue: {},
});
const emit = defineEmits(["update:modelValue"]);
const fileInput = ref(null);
const fileName = ref("");

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  console.log("file :", file);
  emit("update:modelValue", file);
  if (file) {
    fileName.value = file.name;
    // Optionally, you can emit the file or file name to the parent component
    // emit('update:modelValue', file);
  }
};
</script>
  
  <style lang="scss" scoped>
</style>
  
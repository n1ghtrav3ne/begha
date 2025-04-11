<template>
  <div class="w-full h-20 bg-neutral-100 rounded-xl flex items-center p-3">
    <list
      :title="title || 'تصویر'"
      title-class="font-bold"
      :subtitle="profileImage ? 'حذف عکس' : 'انتخاب عکس'"
      :subtitle-class="
        profileImage
          ? ' text-error-700  text-tiny'
          : ' text-secondary-700  text-tiny'
      "
      @clickSubtitle="profileImage ? (profileImage = null) : triggerFileInput()"
    >
      <template #prepend>
        <div class="size-14 bg-secondary-200 rounded-full centered">
          <img :src="profileImage || '/icons/image.svg'" class="rounded-full" />
        </div>
      </template>
      <template #append v-if="profileImage">
        <div class="size-6 rounded-full bg-secondary-700"></div>
      </template>
    </list>
    <input
      type="file"
      ref="fileInput"
      @change="onImageSelected"
      accept="image/*"
      class="hidden"
    />
  </div>
</template>
  
  <script setup>
import list from "~/components/global/list.vue";
const props = defineProps(["title", "modelValue", "cover"]);
const profileImage = ref("");
const fileInput = ref(null);

const emit = defineEmits(["update:modelValue"]);
function triggerFileInput() {
  fileInput.value.click();
}

function onImageSelected(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profileImage.value = reader.result;
    };
    reader.readAsDataURL(file);
    emit("update:modelValue", file);
  }
}
</script>
  
  <style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
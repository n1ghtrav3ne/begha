<template>
  <div class="w-full h-20 bg-surface-50 rounded-xl flex items-center p-3">
    <list
      title="تصویر پروفایل شما"
      title-class="font-bold"
      :subtitle="profileImage ? 'حذف عکس' : 'انتخاب عکس'"
      :sub-title-class="
        profileImage ? 'text-red text-[11px]' : 'text-blue text-[11px]'
      "
      @clickSubtitle="profileImage ? (profileImage = null) : triggerFileInput()"
    >
      <template #prepend>
        <div
          class="size-14 bg-blue/30 rounded-full flex items-center justify-center"
        >
          <img
            :src="profileImage || '/icons/userProfile.svg'"
            class="w-full h-full object-contain rounded-full"
          />
        </div>
      </template>
      <template #append v-if="profileImage">
        <div class="size-6 rounded-full bg-blue"></div>
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

const profileImage = ref("");
const fileInput = ref(null);

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
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  display: none;
}
</style>
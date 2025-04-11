<template>
  <div>
    <!-- page header  -->
    <div class="page-header">
      <div class="flex items-center text-white text-base">
        <span
          @click="useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">افزودن خبر</span>
      </div>
      <div>
        <img src="~/assets/images/icons/search-normal.svg" alt="" />
      </div>
    </div>

    <!-- body -->
    <div class="m-4">
      <imagePicker title="تصویر کاور خبر" />

      <text-field label="عنوان خبر" placeholder="عنوان را وارد کنید" />

      <BaseTextarea
        label="توضیحات"
        placeholder="متن مورد نظر خود را وارد کنید"
      />

      <div class="absolute bottom-3 right-0 w-full p-3">
        <div>
          <base-btn>اعمال</base-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imagePicker from "~/components/pickers/imagePicker.vue";
</script>

<style lang="scss" scoped>
</style>
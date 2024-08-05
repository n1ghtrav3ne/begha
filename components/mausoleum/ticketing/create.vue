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
        <span class="mr-4">ارسال پیغام جدید</span>
      </div>
    </div>

    <!-- body -->
    <div class="p-4">
      <beghaPicker placeholder="بقعه گیرنده" />
      <responseUnitPicker placeholder="واحد گیرنده" />
      <text-field placeholder="عنوان پیام" />
    </div>
  </div>
</template>

<script setup>
import responseUnitPicker from "~/components/pickers/responseUnitPicker.vue";
import beghaPicker from "~/components/pickers/beghaPicker.vue";
</script>

<style lang="scss" scoped>
</style>
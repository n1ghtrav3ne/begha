<template>
  <div>
    <ClientOnly>
      <!-- page header  -->
      <div class="page-header">
        <div class="flex items-center text-white text-base">
          <span
            @click="useRouter().go(-1)"
            class="material-symbols-outlined back-icon"
          >
            arrow_right_alt
          </span>
          <span class="mr-4">افزودن موقوفه جدید</span>
        </div>
      </div>

      <!-- body -->
      <div class="p-4">
        <!-- image  -->
        <imagePicker title="تصویر شاخص" />

        <!-- form body -->
        <div>
          <text-field label="عنوان" placeholder="عنوان موقوفه را وارد کنید" />
          <unitPicker label="واحد" placeholder="واحد را انتخاب کنید" />
          <numberPicker
            label="تعداد"
            placeholder="تعداد را مشخص کنید"
            v-model="object.number"
          />
          <text-field
            label="نام و نام خانوادگی واقف"
            placeholder="نام و نام خانوادگی واقف را وارد کنید"
          />
          <datePicker label="تاریخ وقف" placeholder="روز، ماه، سال" />
          <text-field
            label="کد تفضیلی"
            placeholder="کد تفضیلی ۱۰ رقمی را وارد کنید"
            type="Number"
          />
          <filePicker
            label="وقف‌نامه"
            placeholder="انتخاب فایل ضمیمه"
            v-model="object.file"
          />
          <base-textarea
            v-model="object.description"
            label="توضیحات"
            placeholder="متن مورد نظر خود را وارد کنید"
          />
          <div class="mt-9">
            <base-btn>اعمال</base-btn>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup>
import imagePicker from "~/components/pickers/imagePicker.vue";
import unitPicker from "~/components/pickers/unitPicker.vue";
import numberPicker from "~/components/pickers/numberPicker.vue";
import datePicker from "~/components/pickers/datePicker.vue";
import filePicker from "~/components/pickers/filePicker.vue";
const object = ref({
  number: 0,
  file: null,
  description: "",
});
</script>

<style lang="scss" scoped>
</style>
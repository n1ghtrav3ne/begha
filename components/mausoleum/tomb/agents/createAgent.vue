<template>
  <div>
    <!-- create agent page header -->
    <div class="page-header">
      <NuxtLink to="/mausoleum/tomb/agents">
        <div class="flex items-center text-white text-base">
          <span class="material-symbols-outlined back-icon">
            arrow_right_alt
          </span>
          <span class="mr-4">ایجاد عامل</span>
        </div>
      </NuxtLink>
    </div>

    <div class="py-4 px-6">
      <form @submit="setAgent">
        <text-field
          label="نام ونام خانوادگی"
          placeholder="نام و نام خانوادگی فرد مورد نظر را وارد کنید"
        />
        <text-field
          label="شماره همراه"
          placeholder="شماره همراه فرد مورد نظر را وارد کنید"
        />
        <role-picker placeholder="انتخاب نقش" label="نقش" />
        <div class="absolute bottom-6 w-full">
          <div class="w-[90%]">
            <base-btn type="submit"> اعمال </base-btn>
          </div>
        </div>
      </form>
    </div>
    <bottom-sheets v-model="alertDialog">
      <div class="p-4" v-if="sucessSubmit">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <img src="/assets/images//icons/success.svg" />
            <span class="text-success-700 mr-2"> ارسال درخواست موفق بود </span>
          </div>
          <div
            class="size-6 overflow-auto body cursor-pointer"
            @click="alertDialog = false"
          >
            <img src="~/assets/images/icons/close.svg" class="size-6" />
          </div>
        </div>
        <div class="divider my-4"></div>
        <div class="">
          <p class="text-center text-xs leading-6">
            کاربر گرامی درخواست انتساب مسئول زائرسرا برای کاربر ۰۹۱۲۳۴۵۶۷۸۹
            (محمدرضا عباسی) برای ایشان ارسال شد. می‌توانید وضعیت درخواست را از
            طریق صفحه اعضا مشاهده کنید.
          </p>
        </div>
        <div class="w-full mt-6">
          <base-btn @click="alertDialog = false"> تایید </base-btn>
        </div>
      </div>
      <div class="p-4">
        <div class="flex justify-end">
          <div
            class="size-6 overflow-auto body cursor-pointer"
            @click="alertDialog = false"
          >
            <img src="~/assets/images/icons/close.svg" class="size-6" />
          </div>
        </div>
        <div class="divider my-3"></div>
        <div class="h-[150px] p-10">
          <div class="flex items-center justify-center">
            <img src="/assets/images/icons/error.svg" />
            <span class="text-error-700 mr-2">
              ارسال درخواست با خطا مواجه شد.
            </span>
          </div>
          <div class="flex items-center justify-center mt-4">
            <img src="/assets/images/icons/rotate-left.svg" />
            <span class="text-success-700 mr-2"> اراسل مجدد </span>
          </div>
        </div>
      </div>
    </bottom-sheets>
  </div>
</template>

<script setup>
import rolePicker from "~/components/pickers/rolePicker.vue";
const sucessSubmit = ref(false);
const failedSubmit = ref(false);

const alertDialog = ref(false);
const setAgent = (e) => {
  e.preventDefault();
  failedSubmit.value = true;
  alertDialog.value = true;
};
</script>

<style lang="scss" scoped>
</style>
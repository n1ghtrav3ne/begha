<template>
  <div>
    <!-- page header  -->
    <div
      class="w-full bg-primary-700 h-12 flex justify-between items-center p-3"
    >
      <!-- header title and back btn -->
      <div class="flex items-center text-white text-base">
        <span
          @click="searchBox ? getSearch(false) : useRouter().go(-1)"
          class="material-symbols-outlined back-icon"
        >
          arrow_right_alt
        </span>
        <span class="mr-4">تکمیل پروفایل</span>
      </div>
    </div>

    <div class="px-6 py-4">
      <!-- profile image  -->
      <profileImage></profileImage>

      <!-- select item for complated profile -->
      <div class="my-8">
        <toggleBtn
          first="اطلاعات فردی"
          secend="اطلاعات شغلی"
          v-model="selectedItem"
        >
          <template #append-first>
            <img src="~/assets/images/icons/infoState.svg" class="mr-1" />
          </template>
          <template #append-secend>
            <img src="~/assets/images/icons/infoState2.svg" class="mr-1" />
          </template>
        </toggleBtn>
      </div>

      <!-- form for profile -->
      <div>
        <singleForm v-if="selectedItem == 'first'" :data="user.single">
        </singleForm>
        <jobForm v-else></jobForm>
        <div class="pt-24">
          <button class="w-full h-11 bg-primary-700 rounded-lg text-white">
            اعمال
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProfileImage from "./image.vue";
import singleForm from "./singleForm.vue";
import jobForm from "./jobForm.vue";
const selectedItem = ref("first");

const user = ref({
  single: {
    role: "ادمین کل",
    phone: "۰۹۱۲۳۴۵۶۷۸۰",
  },
});
</script>

<style lang="scss" scoped>
</style>
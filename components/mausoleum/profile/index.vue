<template>
  <div class="m-4">
    <div class="divider my-4"></div>
    <!-- user information -->
    <div>
      <userInformation :user="user"></userInformation>
    </div>

    <!-- profile lists  -->
    <div class="mt-8">
      <lists></lists>
    </div>

    <!-- show new request message in dialog -->
    <div>
      <bottom-sheets v-model="newRequestDialog">
        <div class="mx-6 my-4 text-center">
          <div class="my-3 centered">
            <div class="size-[52px] bg-blue/10 rounded-full centered">
              <img src="~/assets/images/icons/sms-edit.svg" />
            </div>
          </div>
          <span class="">
            کاربر گرامی شما از طرف
            <span class="text-blue">امام زاده صالح</span> به عنوان مسئول پذیرش
            زائرسرا دعوت شده اید. در صورت تمایل دکمه «تائید» را کلیک کنید.
          </span>
          <div class="w-full centered mt-12">
            <div class="w-6/12 p-2">
              <button class="bg-blue w-full h-11 rounded-lg text-white">
                تایید
              </button>
            </div>
            <div class="w-6/12">
              <button
                class="border-[1px] w-full h-11 rounded-lg"
                @click="newRequestDialog = false"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      </bottom-sheets>
    </div>
  </div>
</template>

<script setup>
import UserInformation from "./userInformation.vue";
import userType from "./userType.vue";
import Lists from "./lists.vue";
import BottomSheets from "~/components/global/bottomSheets.vue";

const user = reactive({
  role: "ادمین کل",
  place: "امام زاده صالح (ع)",
  name: "کاربر",
  phone: "۰۹۱۲۳۴۵۶۷۸۹",
});

const newRequestDialog = ref(true);
</script>

<style lang="scss" scoped>
</style> 
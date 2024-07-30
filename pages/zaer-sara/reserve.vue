<template>
  <div class="back-navbar container flex items-center justify-between">
    <span
      ><span
        @click="$router.go(-1)"
        class="material-symbols-outlined back-icon ml-2"
      >
        trending_flat </span
      ><span class="back-title">تکمیل رزرو</span></span
    >
  </div>
  <div class="container">
    <div class="reserve-list">
      <RoomItem :fromCheckout="true" />
      <RoomItem :fromCheckout="true" />
    </div>
    <div class="rules mt-10">
      <span class="title">مطالعه قوانین و مقررات</span>
      <div class="mt-4">
        رفتار مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب
        و احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند. رفتار
        مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و
        احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند. رفتار
        مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و
        احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند. رفتار
        مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و
        احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند. رفتار
        مناسب: مهمانسرا می‌تواند درخواست کند که همه مهمانان به رفتار مناسب و
        احترام‌آمیزی نسبت به یکدیگر و نیز نسبت به کارکنان رعایت کنند.
      </div>
      <div>
        <BaseCheckbox :items="checkboxes" />
      </div>
      <div class="flex action">
        <nuxt-link class="w-full" to="./checkout">
          <button
            class="bg-primary text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 w-full h-11 rounded-lg"
          >
            پرداخت(4000,000 تومان)
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BaseCheckbox from "~/components/global/BaseCheckbox.vue";
import RoomItem from "~/components/zaer-sara/RoomItem.vue";
const route = useRoute();
const id = route.params.id;
definePageMeta({
  layout: "empty-layout",
});
const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "قوانین و مقررات را مطالعه کرده و آن را می پذیرم.",
    isChecked: true,
  },
]);
</script>
<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;

  padding: 5px 10px;
  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }
  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
  }
  .choose-location {
    font-size: 150px;
  }
  .nav-icon {
    background-color: #ffff;
    border-radius: 8px;
    padding: 6px;
  }
}
.rules {
  .title {
    color: $secondary;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>

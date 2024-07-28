<template>
  <div class="back-navbar container flex items-center justify-between">
    <span
      ><span
        @click="$router.go(-1)"
        class="material-symbols-outlined back-icon ml-2"
      >
        trending_flat </span
      ><span class="back-title">زائر سرا</span></span
    >
    <div class="flex items-center mr-3">
      <span class="material-symbols-outlined nav-icon"> tune </span>
      <span class="zaersara-icon flex items-center justify-center ms-3">
        <span class="nav-icon material-symbols-outlined"> local_library </span>
      </span>
    </div>
  </div>
  <div class="container">
    <div class="date-card">
      <div class="date-title">
        <span>تاریخ ورود و خروج</span>
        <span class="material-symbols-outlined"> arrow_drop_down </span>
      </div>
      <span class="date-sub-title">۲۰ اردیبهشت ۱۴۰۳ تا ۲۳ اردیبهشت ۱۴۰۳</span>
    </div>

    <div class="zaer-sara">
      <div class="flex">
        <img
          class="zaer-sara-img"
          src="@/assets/images/zaersara/zaersara.png"
        />
        <div class="zaer-sara-info">
          <span>زائرسرا امام زاده صالح (ع)</span>
          <div class="flex">
            <img src="@/assets/images/icons/black-location.svg" />
            <span class="ms-1">اصفهان، نجف آباد</span>
          </div>
        </div>
      </div>

      <div>
        <button
          class="flex justify-center items-center gap-1 w-20 h-9 p-3 rounded-3xl border zaer-sara-status"
        >
          <img src="@/assets/images/icons/Mosque.png" />

          باز
        </button>
      </div>
    </div>
    <div class="about mt-8">
      <span class="title mb-3">درباره زائرسرا</span>
      <span class="content">
        در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از اندیشمندان
        زبان عربی نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و
        بلاغت موجود در این کتاب دانسته‌اند
      </span>
    </div>
    <div class="select-room">
      <div class="room-switch">
        <div class="switch-item active-switch">اتاق</div>
        <div class="switch-item">سوئیت</div>
      </div>
      <div class="room-list">
        <span class="title">لیست اتاق ها</span>
        <div class="room-container">
          <RoomItem />
          <RoomItem />
        </div>
        <div class="flex action">
          <button
            class="bg-primary text-white mt-3 flex justify-center items-center gap-2 py-2 px-4 w-full h-11 rounded-lg"
          >
            تکمیل رزرو
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import RoomItem from "~/components/zaer-sara/RoomItem.vue";
const route = useRoute();
const id = route.params.id;
definePageMeta({
  layout: "empty-layout",
});
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
.date-card {
  margin-top: 20px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid $outline-variant;
  padding: 16px 24px;
  .date-title {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: $secondary;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 4px;
  }
  .date-sub-title {
    font-size: 12px;

    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.zaer-sara {
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  .zaer-sara-img {
    width: 72px;
    height: 72px;
    border-radius: 8px;
  }
  .zaer-sara-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 8px;
  }
  .zaer-sara-status {
    border: 1px $primary solid;
    background: $primary-container;
    color: $primary;
  }
}
.about {
  padding-bottom: 32px;
  border-bottom: 1px solid
    var(--Key-Outline-Outline-Variant, rgba(223, 223, 223, 0.5));
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: block;
  }
  .content {
    text-align: justify;
  }
}
.select-room {
  margin-top: 32px;

  .room-switch {
    display: flex;
    height: 36px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    .switch-item {
      width: 50%;
      display: flex;
      height: 36px;
      padding: 2px;
      justify-content: center;
      align-items: center;
      align-self: stretch;
      border-radius: 8px;
      color: #7e7e7e;
    }
    .active-switch {
      color: #0b0b0b;
      border: 0.5px solid rgba(223, 223, 223, 0.5);
      background: $surface;
      box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04);
    }
    .room-options {
      margin-top: 18px !important;
      display: flex;
      flex-direction: column;
    }
  }
  .room-list {
    padding-top: 24px;
    padding-bottom: 24px;
    .title {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  .room-container {
    display: flex;
    flex-direction: column;
  }
}
</style>

<template>
  <div class="back-navbar container flex items-center justify-between">
    <span
      ><span
        @click="$router.go(-1)"
        class="material-symbols-outlined back-icon ml-2"
      >
        trending_flat </span
      ><span class="back-title">اتاق</span></span
    >
    <div class="flex items-center mr-3">
      <span class="zaersara-icon flex items-center justify-center ms-3">
        <span class="nav-icon material-symbols-outlined"> local_library </span>
      </span>
    </div>
  </div>
  <div class="slider">
    <img
      class="img-item"
      src="@/assets/images/zaersara/room-detail.jpg"
      alt=""
    />
  </div>
  <div class="room-info-container">
    <div class="container">
      <div class="room-info">
        <div class="room-title">
          <span class="title">اتاق ۱۲ نفره</span>
          <div>
            <span class="price">۲0٬۰۰۰٬۰۰۰ تومان</span>
            <span class="per-night">/هر شب</span>
          </div>
        </div>
        <div class="address">
          <span>اصفهان، خیابان مصلی، لورم ایپسوم، روبروی لورم</span>
        </div>
        <div class="zaer-info">
          <div class="name">
            <img class="mb-1" src="@/assets/images/icons/blue-mosque.svg" />
            <span>امام زاده صالح (ع)</span>
          </div>
          <div class="rate">
            <img class="star" src="@/assets/images/icons/star.svg" />
            <span class="ms-2">5</span>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title">توضیحات</span>
        <div class="mt-3">
          در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از
          اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این
          کتاب را فصاحت و بلاغت موجود در این کتاب دانسته‌اند
        </div>
      </div>
      <div class="facilites">
        <span class="title">امکانات</span>
        <div
          class="facility-container grid grid-cols-4 gap-2 mt-3 md:grid-cols-8 sm:grid-cols-6 xs:grid-cols-4 px-0 justify-start"
        >
          <div v-for="i in 10" class="facility-item">
            <div class="facility-img">
              <img src="@/assets/images/icons/wifi.svg" />
            </div>
            <span class="facility-title">مبلمان</span>
          </div>
        </div>
      </div>
      <div class="flex action">
        <button class="bg-primary text-white submit w-80">افزودن</button>
        <button
          class="w-20 border-2 border-primary rounded outline-none flex justify-center items-center save ms-3"
        >
          <img src="@/assets/images/icons/save.svg" />
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
.slider {
  .img-item {
    width: 100%;
    height: 301px;
  }
}
.room-info-container {
  position: relative;
  bottom: 50px;
  display: flex;
  width: 100%;
  height: 100%;
  padding: var(--M, 16px);
  justify-content: center;
  align-items: flex-start;
  gap: 206px;
  border-radius: 16px;
  background: $surface;
  box-shadow: -3px 0px 4px 0px rgba(143, 135, 135, 0.25),
    1px -1px 4px 0px rgba(123, 123, 123, 0.25);
}
.room-title {
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .price {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: $secondary;
  }
  .per-night {
    color: $surface-on-variant;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.address {
  margin-top: 12px;
  margin-bottom: 12px;
  span {
    color: $surface-on-variant;
    text-align: right;

    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
.zaer-info {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    display: flex;
    align-items: center;
    padding: 4px 10px;
    gap: 4px;
    border-radius: 8px;
    background: $secondary-container;
  }
  .rate {
    img {
      width: 20px;

      height: 20px;
    }
    display: flex;
  }
}
.room-info {
  padding-bottom: 16px;
  border-bottom: 1px solid
    var(--Key-Outline-Outline-Variant, rgba(223, 223, 223, 0.5));
}
.description {
  margin-top: 16px;
  .title {
    color: $secondary;
  }
}
.facilites {
  margin-top: 16px;
  .title {
    color: $secondary;
  }
}
.facility-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 24px;
  .facility-img {
    border-radius: 8px;
    padding: 8px;
    width: 48px;
    height: 48px;
    background-color: $secondary-container;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .facility-title {
    margin-top: 8px;
    font-size: 11px;
  }
}
.action {
  display: flex;
  justify-content: space-between;
  .submit {
    display: flex;
    width: 80%;
    height: 44px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
  }
  .save {
    display: flex;

    height: 44px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
  }
}
</style>

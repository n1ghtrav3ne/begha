<template>
  <div class="chooseTime">
    <span class="choosingTimeTitle">انتخاب ساعت</span>

    <div class="timeOptions">
      <div @click="selectIndex(index)"
        v-for="index in 6"
        :key="index"
        class="items"
        :class="{'bg-secondary-700 text-secondary-50': index===selectedIndex ,'bg-neutral-200 text-neutral-500 pointer-events-none' : index===5}"
      >
        ۸:۰۰ تا ۱۰:۰۰
      </div>
    </div>
  </div>

  <div class="choooseFacilities">
    <span class="title">انتخاب امکانات</span>

    <div class="facilities">
      <reservationFacilities
        v-for="(items, index) in facilities"
        :key="index"
        :item="items"
      />
    </div>
  </div>

  <div class="terms">
    <span> مطالعه قوانین و مقررات </span>

    <div class="list">
      <div class="flex" v-for="index in 4" :key="index">
        <li></li>
        <p>
          کاربران موظف به حفظ منابع کتابخانه و جلوگیری از هرگونه تخریب، سوء
          استفاده یا سرقت از آنها می‌باشند.
        </p>
      </div>

      <BaseCheckbox class="checkBox" :items="checkboxes" />
    </div>
  </div>

  <div class="flex w-[90%] mx-auto fixed max-w-[600px] right-0 left-0 m-0 bottom-5">
    <button class="flex justify-center items-center bg-primary-700 text-primary-50 w-full rounded-lg p-2 h-11">ثبت رزرو</button>
  </div>

</template>
<script setup lang="ts">

import reservationFacilities from "./reservationFacilities.vue";
import BaseCheckbox from "~/components/global/BaseCheckbox.vue";

const selectedIndex=ref()

const selectIndex=(index:number)=>{
  selectedIndex.value=index
}

const facilities = ref<{ image: string; title: string; price: number }[]>([
  {
    image: "~/assets/images/cermony/cermonyHall.png",
    title: "قاری",
    price: 500,
  },
  {
    image: "~/assets/images/cermony/cermonyHall.png",
    title: "قاری",
    price: 500,
  },
  {
    image: "~/assets/images/cermony/cermonyHall.png",
    title: "قاری",
    price: 500,
  },
  {
    image: "~/assets/images/cermony/cermonyHall.png",
    title: "قاری",
    price: 500,
  },
  {
    image: "~/assets/images/cermony/cermonyHall.png",
    title: "قاری",
    price: 500,
  },
]);

const checkboxes = ref<{ id: number; label: string; isChecked: boolean }[]>([
  {
    id: 1,
    label: "قوانین و مقررات را مطالعه کرده و آن را می پذیرم.",
    isChecked: false,
  },
]);
</script>
<style scoped lang="scss">
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.base-modal-header {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.chooseTime {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-between;

  .choosingTimeTitle {
    color: $secondary;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .timeOptions {
    width: 100%;
    height: 82px;
    display: grid;
    gap: 6px;
    grid-template-columns: auto auto auto;

    .items {
      display: flex;
      padding: 8px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid $outline-variant;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .activeItem {
      background: $secondary;
      color: $secondary-on;
    }

    .deactivatedItem {
      background: $surface-container-lowest;
      color: $surface-on-variant;
      pointer-events: none;
    }
  }
}

.choooseFacilities {
  height: 359px;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  justify-content: space-between;

  .title {
    color: $secondary;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .facilities {
    height: 321px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.terms {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
  height: 330px;
  overflow: hidden;
  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $secondary;
  }

  .list {
    overflow-y: auto;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: $surface-on;

    .checkBox {
      position: relative;
      top: 4%;
      left: 2%;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      height: 130px;
    }
  }
}

.list::-webkit-scrollbar {
  display: none;
}

</style>
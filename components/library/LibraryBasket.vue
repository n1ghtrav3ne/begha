<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-between p-2 pt-3 pl-4">
          <div class="flex items-center">
            <span
              @click="$router.go(-1)"
              class="library-page-icon material-symbols-outlined ml-2"
            >
              arrow_right_alt
            </span>
            <span class="library-page-title">تکمیل رزرو</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="book-info border-b border-neutral-200">
        <div v-for="(item , index) in bookInfo" :key="index">

          <BasketBookItem @delete="deleteConfirm=true" :item="item" />

        </div>
      </div>
    
      <span class="text-error-700 text-tiny relative top-3">کاربر گرامی این کتاب توسط شخص دیگری رزرو شد.</span>
      
      <div class="flex flex-col gap-4 w-full mt-11">

        <div class="flex flex-row gap-1 items-center">

          <span class="material-symbols-rounded text-secondary-700 bg-secondary-200 rounded-full p-1">
          description
          </span>

          <span class="text-base font-bold text-secondary-700">مطالعه قوانین و مقررات</span>

        </div>

        <div class="flex flex-col">

          <div v-for="index in 3" :key="index" class="flex">

            <li></li>
            <span>کاربران موظف به حفظ منابع کتابخانه و جلوگیری از هرگونه تخریب، سوء استفاده یا سرقت از آنها می‌باشند.</span>

          </div>

        </div>

        <CustomCheckbox class="mt-20" :item="{label:'قوانین و مقررات را مطالعه کرده و آن را می پذیرم.'}" />

        <Button @click="confirmed=true" type="button" class="text-xs bg-primary-700 w-full p-3 rounded-lg text-primary-50">ثبت رزرو</Button>

      </div>

    </div>

  </div>

  <BottomSheets v-model="deleteConfirm">

    <CustomConfirm title="آیا از حذف این کتاب از لیست رزرو اطمینان دارید؟">

      <template #icon>
        <span class="material-symbols-outlined text-error-700 bg-error-200 p-2 rounded-full">
        delete
        </span>
      </template>

    </CustomConfirm>

  </BottomSheets>

  <BottomSheets v-model="confirmed" title="رزرو کتاب">

    <div class="flex flex-col border-b border-neutral-100 py-3 gap-3 w-full">

      <div class="flex flex-row items-center text-primary-700 mr-1 gap-2">

        <span class="material-symbols-rounded scale-150">
        check_circle
        </span>

        <span class="font-bold text-sm">ثبت درخواست با موفقیت انجام شد.</span>

      </div>

      <p class="text-xs h-[76px] overflow-auto">کاربر گرامی درخواست شما برای رزرو کتاب به بقعه های امام زاده صالح (ع) و امام حسین ارسال شد.
        پس از بررسی و موافقت با درخواست، تاریخ، ساعت و محل دریافت کتاب را به شما اعلام خواهند کرد. </p>

    </div>

    <div class="flex flex-row justify-between mt-3">

      <span>شماره سفارش</span>

      <div class="flex gap-1 items-center">

        <span>۹۴۵۰۰۳۲۴</span>

        <span class="material-symbols-outlined scale-75">
        content_copy
        </span>

      </div>

    </div>

    <div class="flex flex-row justify-between gap-4 mt-4 w-full">

      <button type="button" class="flex text-primary-50 h-11 justify-center bg-primary-700 w-full items-center p-2 rounded-lg text-xs">تائيد</button>

      <button type="button" class="flex border h-11 justify-center w-full items-center p-2 rounded-lg text-xs">رفتن به درخواست ها</button>

    </div>

  </BottomSheets>

</template>

<script lang="ts" setup>

import BasketBookItem from "./BasketBookItem.vue";

const deleteConfirm=ref(false)

const confirmed=ref(false)

const bookInfo=ref<{name:string ; author:string ; finished?:boolean}[]>
([
  {
    name:'نهج البلاغه دشتی',
    author:'آقای لورم ایپسوم'
  },
  {
    name:'نهج البلاغه دشتی',
    author:'آقای لورم ایپسوم',
    finished:true
  },
])

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
.begha-banner-page-container {
  position: relative;
  .begha-page-banner {
    height: 48px;
    width: 100%;
    background-color: $primary;

    .library-page-title {
      font-family: "yekan-regular";
      font-size: 12px;
      color: $primary-on;
      font-weight: 400;
    }
    .library-page-icon {
      font-size: 22px;
      color: $primary-on;
    }
  }
  .begha-profile-img {
    height: 86px;
    width: 86px;
    border-radius: 120px;
    border: 4px solid $surface;
    position: absolute;
    bottom: -101%;
    right: 16px;
  }
}

.book-genre-icon {
  margin-left: 4px;
  width: 24px;
  height: 24px;
  background-color: #e5f0fb;
  border-radius: 50%;
  span {
    font-size: 15px;
    color: $secondary;
  }
}

.container {
  position: relative !important;

  .book-description {
    .book-desc-title {
      color: $surface-on;
      font-family: "yekan-regular";
      font-size: 16px;
      font-weight: 700;
    }
    .scrollable-desc-text {
      max-height: 450px;
      overflow-y: auto;
      .desc-text {
        margin-top: 16px;
        color: $surface-on;
        text-align: justify;
        font-family: "yekan-regular";
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  .back-support {
    background-color: #fff;
    padding: 16px;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    .support-btn {
      padding: 8px;
      color: $primary-on;
      background-color: $primary;
      font-size: 12px;
      font-weight: 400;
      font-family: "yekan-regular";
      border-radius: 8px;
      width: 100% !important;
    }
    .cancel-btn {
      padding: 8px;
      color: $primary-on;
      background-color: $error;
      font-size: 12px;
      font-weight: 400;
      font-family: "yekan-regular";
      border-radius: 8px;
      width: 100% !important;
    }
    .back-btn {
      width: 100% !important;
      padding: 8px;
      color: $primary;
      font-size: 12px;
      font-weight: 400;
      font-family: "yekan-regular";
    }
  }
}
</style>

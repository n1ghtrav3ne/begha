<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-between p-2 pt-3 pl-4">
          <div class="flex items-center">
            <span
              @click="$router.push('/library')"
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
      <div class="book-info">
        <BasketBookItem />
        <BasketBookItem />
        <BasketBookItem />
      </div>
      <div class="book-description mt-8">
        <div class="flex items-center">
          <span class="book-genre-icon centered">
            <span class="material-symbols-outlined"> menu_book </span>
          </span>
          <span class="book-desc-title">درباره کتاب نهج البلاغه</span>
        </div>
        <div class="scrollable-desc-text">
          <ul class="list-disc list-inside mt-4">
            <li>
              کاربران موظف به حفظ منابع کتابخانه و جلوگیری از هرگونه تخریب، سوء
              اسمی‌باشند.
            </li>
            <li>
              کاربران موظف به حفظ منابع کتابخانه و جلوگیری از هرگونه تخریب،
            </li>
            <li>
              کاربران موظف به حفظ منابع کتابخانه و جلوگیری از هرگونه تخریب، سوء
              استفاده یا سرقت از آنها می‌باشند.
            </li>
          </ul>
        </div>
      </div>
      <div class="back-support flex flex-col items-center">
        <span class="flex max-w-[600px] items-center justify-center support-btn"
          >رزرو کتاب</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BasketBookItem from "./BasketBookItem.vue";
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();
defineComponent([BasketBookItem]);
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

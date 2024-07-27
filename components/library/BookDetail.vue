<template>
  <div>
    <div class="begha-banner-page-container">
      <div class="begha-page-banner">
        <div class="flex items-center justify-between p-2 pt-3 pl-4">
          <div class="flex items-center">
            <span
              @click="$router.push('../')"
              class="library-page-icon material-symbols-outlined ml-2"
            >
              arrow_right_alt
            </span>
            <span class="library-page-title">کتابخانه</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="book-info">
        <div class="book-card">
          <div class="book-body">
            <div class="book-head flex justify-between">
              <div class="flex items-center">
                <div>
                  <img
                    class="book-img ml-2"
                    src="~/assets/images/library/book-img.png"
                    alt=""
                  />
                </div>
                <div class="book-title-container flex flex-col">
                  <span class="book-title">نهج البلاغه دشتی</span>
                  <span class="book-author">نویسنده: آقای لورم ایپسوم</span>
                </div>
              </div>
              <div>
                <span class="stock-status flex items-center">
                  <span class="material-symbols-outlined check-icon">
                    check
                  </span>
                  <span class="status-text">موجود</span>
                </span>
              </div>
            </div>
            <div class="book-footer flex items-center justify-between">
              <div>
                <span class="book-begha-info flex items-center">
                  <span class="icon-Mosque-Iran begha-icon"></span>
                  <span class="begha-name">امام زاده صالح (ع)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="library-banner">
        <LibraryBanner />
      </div>

      <div class="book-description mt-8">
        <div class="flex items-center">
          <span class="book-genre-icon centered">
            <span class="material-symbols-outlined"> menu_book </span>
          </span>
          <span class="book-desc-title">درباره کتاب نهج البلاغه</span>
        </div>
        <div class="scrollable-desc-text">
          <p class="desc-text">
            در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از
            اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این
            کتاب را فصاحت و بلاغت موجود در این کتاب دانسته‌اند در مورد اهمیت و
            ارزش ادبی و بلاغت نهج‌البلاغه سخنان متعددی از اندیشمندان زبان عربی
            نقل شده است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و بلاغت
            موجود در این کتاب دانسته‌اند در مورد اهمیت و ارزش ادبی و بلاغت
            نهج‌البلاغه سخنان متعددی از اندیشمندان زبان عربی نقل شده
            است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و بلاغت موجود
            در این کتاب دانسته‌اند...... اندیشمندان زبان عربی نقل شده
            است[۲۰] برخی یکی از دلایل ماندگاری این کتاب را فصاحت و بلاغت موجود
            در این کتاب دانسته‌اند در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه
            سخنان متعددی از اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از
            دلایل ماندگاری این کتاب را فصاحت و بلاغت موجود در این کتاب
            دانسته‌اند در مورد اهمیت و ارزش ادبی و بلاغت نهج‌البلاغه سخنان
            متعددی از اندیشمندان زبان عربی نقل شده است[۲۰] برخی یکی از دلایل
            ماندگاری این کتاب را فصاحت و بلاغت موجود در این کتاب
            دانسته‌اند......
          </p>
        </div>
      </div>
      <div class="back-support flex flex-col items-center">
        <span class="flex items-center max-w-[600px] justify-center support-btn"
          >رزرو کتاب</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LibraryBanner from "./LibraryBanner.vue";
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();
defineComponent([LibraryBanner]);
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
  .book-card {
    .book-body {
      padding: 16px 12px;
      .book-head {
        padding-bottom: 12px;
        margin-bottom: 12px;
        .stock-status {
          padding: 8px;
          height: 28px;
          border-radius: 24px;
          border: 1px solid $primary;
          background-color: #eefef6;
          .status-text {
            color: $primary;
            font-family: "yekan-regular";
            font-size: 12px;
            font-weight: 400;
          }
          .check-icon {
            font-size: 18px;
            color: $primary;
            margin-left: 4px;
          }
        }
        .book-img {
          width: 57px;
          height: 57px;
          border-radius: 8px;
        }
        .book-title-container {
          .book-title {
            color: $surface-on;
            font-family: "yekan-regular";
            font-size: 14px;
            font-weight: 400;
          }
          .book-author {
            color: $surface-on;
            font-family: "yekan-regular";
            font-size: 12px;
            font-weight: 400;
            margin-top: 8px;
          }
        }
      }
      .book-footer {
        border-bottom: 1px solid $outline-variant;
        padding-bottom: 16px;
        .book-begha-info {
          padding: 4px 10px;
          border-radius: 8px;
          background-color: $secondary-container;
          .begha-icon {
            color: $secondary;
            margin-left: 4px;
            font-size: 22px;
            margin-bottom: 6px;
          }
          .begha-name {
            color: $secondary-on-container;
            font-family: "yekan-regular";
            font-size: 11px;
            font-weight: 400;
          }
        }
        .book-genre-info {
          .book-genre {
            color: $surface-on;
            font-family: "yekan-regular";
            font-size: 11px;
            font-weight: 400;
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
        }
      }
    }
  }
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

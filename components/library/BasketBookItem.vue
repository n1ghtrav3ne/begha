<template>
  <div>
    <div class="book-card">
      <div class="book-body">
        <div class="book-head flex items-center justify-between">
          <div class="flex items-center">
            <div>
              <img
                class="book-img"
                src="~/assets/images/library/book-img.png"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <span class="book-title">نهج البلاغه دشتی</span>
              <span class="book-author">نویسنده: آقای لورم ایپسوم</span>
            </div>
          </div>
          <div>
            <span class="delete-basket-item flex items-center">
              <span class="material-symbols-outlined delete-icon">
                delete
              </span>
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
          <div>
            <span class="stock-status flex items-center">
              <span class="material-symbols-outlined check-icon"> check </span>
              <span class="status-text">موجود</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModalStore } from "~/stores/modals-store";
const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.book-card {
  margin-bottom: 16px;
  box-shadow: 3px 4px 19px 0px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  border: 1px solid $outline-variant;
  .book-body {
    padding: 16px 12px;
    .book-head {
      padding-bottom: 12px;
      margin-bottom: 12px;
      border-bottom: 1px solid $outline-variant;
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
      .delete-basket-item {
        span {
          color: $error;
        }
      }
      .book-img {
        width: 57px;
        height: 57px;
        border-radius: 8px;
        margin-left: 8px;
      }
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
    .book-footer {
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
</style>

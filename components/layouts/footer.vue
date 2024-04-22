<template>
  <div>
    <div class="footer-menu">
      <div class="container">
        <ul class="flex items-center justify-between">
          <li class="flex flex-col items-center">
            <span class="material-symbols-outlined"> home </span>
            <span class="mt-2 footer-item-title">خانه</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="material-symbols-outlined"> mosque </span>
            <span class="mt-2 footer-item-title">بقاع من</span>
          </li>
          <li class="flex flex-col search-item items-center">
            <span class="material-symbols-outlined search-icon"> search </span>
          </li>

          <li class="flex flex-col items-center">
            <span class="material-symbols-outlined"> perm_media </span>
            <span class="mt-2 footer-item-title">رسانه</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="material-symbols-outlined"> account_circle </span>
            <span class="mt-2 footer-item-title">پروفایل</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";

.footer-menu {
  background-color: $outline-variant;
  z-index: 999;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    border-top: 1px solid $outline-variant;
  .footer-item-title {
    color: $surface-on-variant;
    font-family: "yekan-regular";
    font-size: 14px;
  }

  .search-item {
    background: $primary;
    padding: 11px;
    border-radius: 50%;
    .search-icon{
        color: $primary-on;
        
    }
  }

  .material-symbols-outlined {
    color: $surface-on-variant;
    font-size: 25px;
  }
}
</style>

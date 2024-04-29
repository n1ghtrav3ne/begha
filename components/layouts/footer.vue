<template>
  <div>
    <div class="footer-menu">
      <div class="container footer-container">
        <ul class="flex items-center justify-between">
          <li class="active-item flex flex-col items-center">
            <span class="menu-item-icon icon-Home">  </span>
            <span class="mt-2 footer-item-title">خانه</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="menu-item-icon icon-Mosque">  </span>
            <span class="mt-2 footer-item-title">بقاع من</span>
          </li>
          <li class="flex flex-col search-item items-center">
            <span class="material-symbols-outlined search-icon"> location_on </span>
          </li>

          <li class="flex flex-col items-center">
            <span class="menu-item-icon icon-Media">  </span>
            <span class="mt-2 footer-item-title">رسانه</span>
          </li>
          <li class="flex flex-col items-center">
            <span class="menu-item-icon icon-Profile">  </span>
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
@import "~/assets/css/icons.scss";

.footer-menu {
  background-color: $surface;
  z-index: 99;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    border-top: 1px solid $outline-variant;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    .footer-container{
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      padding: 13px 40px !important;
    }
  .footer-item-title {
    color: $surface-on-variant;
    font-family: "yekan-regular";
    font-size: 14px;
  }

  .search-item {
    background: $primary;
    padding: 14px;
    border-radius: 100px;
    .search-icon{
        color: $primary-on;
        
    }
  }
  .menu-item-icon{
    font-size: 28px;
    color: $surface-on-variant;
  }
  .active-item{
    span{
      color: $primary !important;
    }
  }
}
</style>

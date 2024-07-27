<template>
  <div>
    <div>
      <nav class="sidebar-menu">
        <div class="container flex flex-col h-full">
          <div
            class="sidebar-heading flex flex-row items-center justify-between"
          >
            <div class="sidebar-logo">
              <img src="~/assets/images/logo/sidebar-logo.png" alt="" />
            </div>
            <div class="sidebar-logo">
              <span
                @click="appSidebar.changeSidebarStateActive('deactive')"
                class="icon-Close-Iran"
              >
              </span>
            </div>
          </div>
          <div class="sidebar-items">
            <ul class="sidebar-list mt-5">
              <li class="sidebar-item">
                <span class="icon-Pray-Counter-Iran"> </span>ذکر شمار
              </li>
              <li class="sidebar-item">
                <span class="icon-Calender-Iran"> </span>
                تقویم
              </li>
              <li class="sidebar-item">
                <span class="icon-Support-Iran"> </span>
                ارتباط با پشتیبانی
              </li>
              <li class="sidebar-item">
                <span class="icon-Help-Iran"> </span>
                راهنمای برنامه
              </li>
              <li class="sidebar-item">
                <span class="icon-Guides-Iran"> </span>
                قوانین و مقررات
              </li>
            </ul>
          </div>
          <div class="sidebar-app-version centered">
            <span class="text-center">نسخه 1.1.1</span>
          </div>
        </div>
      </nav>
      <OverlayLayout />
    </div>
  </div>
</template>

<script lang="ts" setup>
import OverlayLayout from "./OverlayLayout.vue";
import { useAppSidebar } from "~/stores/layout-store";
defineComponent({ OverlayLayout });
const appSidebar = useAppSidebar();
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.sidebar-menu {
  .container {
    position: relative;
  }
  color: $surface-on;
  background-color: $surface;
  height: 100%;
  max-width: 600px;
  position: absolute;
  top: 0;
  right: 0;
  left: 1rem;
  margin: 0 auto;
  max-width: 600px;
  transition: all ease-in-out 0.13s;
  transform: translateX(0);
  z-index: 9999;
  .sidebar-heading {
    border-bottom: 1px solid $outline-variant;
    padding-bottom: 5px;
  }
  .sidebar-item {
    cursor: pointer;
    padding: 12px 0;
    // font-family: "yekan-regular";
    font-size: 14px;
    color: $surface-on;
    margin: 10px 0;
    border-radius: 5px;
    &:hover {
      background-color: #eee;
    }
    span {
      color: $secondary;
      vertical-align: -10px;
      font-size: 30px;
      margin-left: 10px;
      font-weight: 100 !important;
    }
  }
  .sidebar-app-version {
    // font-family: "yekan-regular";
    color: $surface-on-variant;
    position: absolute;
    bottom: 15px;
    right: 43%;
  }
}
</style>

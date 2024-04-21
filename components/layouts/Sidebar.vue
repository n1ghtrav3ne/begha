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
                @click="appSidebar.changeSidebarState()"
                class="material-symbols-outlined"
              >
                cancel
              </span>
            </div>
          </div>
          <div class="sidebar-items">
            <ul class="sidebar-list mt-5">
              <li class="sidebar-item">ذکر شمار</li>
              <li class="sidebar-item">تقویم</li>
              <li class="sidebar-item">ارتباط با پشتیبانی</li>
              <li class="sidebar-item">راهنمای برنامه</li>
              <li class="sidebar-item">قوانین و مقررات</li>
            </ul>
          </div>
          <div class="sidebar-app-version flex items-center justify-center">
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
@import "~/assets/css/colors.scss";
.sidebar-menu {
  .container {
    position: relative;
  }
  font-family: "yekan-regular" !important;
  color: $surface-on;
  background-color: $surface;
  height: 100%;
  width: 85%;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.13s;
  transform: translateX(0);
  z-index: 9999;
  .sidebar-heading {
    border-bottom: 1px solid $outline-variant;
    padding-bottom: 5px;
  }
  .sidebar-item {
    padding: 20px 0;
    font-family: "yekan-regular";
  }
  .sidebar-app-version {
    font-family: "yekan-regular";
    color: $surface-on-variant;
    position: absolute;
    bottom: 15px;
    right: 43%;
  }
}
</style>

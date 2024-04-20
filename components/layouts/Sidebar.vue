<template>
  <div>
   <div>
     <nav class="sidebar-menu">
      <div class="container flex flex-col">
        <div class="sidebar-heading flex flex-row items-center justify-between">
          <div class="sidebar-logo">
            <img src="~/assets/images/logo/sidebar-logo.png" alt="" />
          </div>
          <div class="sidebar-logo">
            <i @click="appSidebar.changeSidebarState()">بستن</i>
          </div>
        </div>
        <div class="sidebar-items">
          <ul class="sidebar-list">
            <li>ذکر شمار</li>
            <li>تقویم</li>
            <li>ارتباط با پشتیبانی</li>
            <li>راهنمای برنامه</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div class="sidebar-app-version">
          <span>نسخه 1.1.1</span>
        </div>
      </div>
    </nav>
    <OverlayLayout />
   </div>
  </div>
</template>

<script lang="ts" setup>
import OverlayLayout from "./OverlayLayout.vue";
import { useAppSidebar } from '~/stores/layout-store';
defineComponent({ OverlayLayout });
const appSidebar = useAppSidebar()
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
.sidebar-menu {
  background-color: $surface;
  height: 100%;
  width: 85%;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.13s;
  transform: translateX(0);
  z-index: 9999;
}
.sidebar-heading{
    border-bottom: 1px solid $outline-variant;
    padding-bottom: 5px;
}
</style>

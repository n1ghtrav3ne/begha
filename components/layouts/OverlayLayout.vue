<template>
  <div>
    <div @click="closeOverlayApp()" class="overlay"></div>
  </div>
</template>

<script lang="ts" setup>
import { useAppSidebar } from "~/stores/layout-store";
import { useModalStore } from "~/stores/modals-store";

const appSidebar = useAppSidebar();
const modalStore = useModalStore();

const closeOverlayApp = () => {
  appSidebar.changeSidebarState();
  modalStore.changeBeghaListProvinceFiltersActive('deactive');
  modalStore.changeBeghaListEventFiltersActive('deactive');
}

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
.overlay {
  background-color: #000;
  opacity: 0.2;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.13s;
  z-index: 999;
}
</style>

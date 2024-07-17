<template>
    <div>
      <div @click="closeOverlayApp()" class="overlay"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useAppSidebar } from "~/stores/layout-store";
  import { useModalStore } from "~/stores/modals-store";
  import {useReservationStore} from "~/stores/graveRequest-store";
  import {useMausoleumStore} from "~/stores/m-modals-store"
  
  
  const appSidebar = useAppSidebar();
  const modalStore = useModalStore();
  const reservationStore=useReservationStore();
  const mausoleumStore=useMausoleumStore();
  
  const closeOverlayApp = () => {
    mausoleumStore.changeServiceButtons('deactive');
  };
  </script>
  
  <style lang="scss" scoped>
  @import "~/assets/css/colors.scss";
  .overlay {
    background-color: #000;
    opacity: 0.2;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: all ease-in-out 0.13s;
    z-index: 999;
  }
  </style>
  
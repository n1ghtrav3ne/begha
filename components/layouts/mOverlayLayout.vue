<template>
    <div>
      <div @click="closeOverlayApp()" class="overlay"></div>
    </div>
  </template>
  
  <script lang="ts" setup>

  import {useMausoleumStore} from "~/stores/m-modals-store"
  

  const mausoleumStore=useMausoleumStore();
  
  const closeOverlayApp = () => {
    mausoleumStore.changeServiceButtons('deactive');
    mausoleumStore.changeSelectUserType('deactive')
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
  
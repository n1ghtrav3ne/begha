<template>
    <div>
      <div :style="`height:${modalHeight + 'px !important'}`" class="base-modal">

          <span class="base-modal-stick"></span>
          
        <div class="base-modal-body">

            <slot name="body"></slot>

        </div>
        
      </div>
      <OverlayLayout />
    </div>
  </template>
  
  <script lang="ts" setup>
  import OverlayLayout from "~/components/layouts/mOverlayLayout.vue";
  
  defineNuxtComponent({ OverlayLayout });

  const props=defineProps(['modalHeight'])


  </script> 
  
  <style lang="scss" scoped>
  @import "~/assets/css/icons.scss";
  @import "~/assets/css/colors.scss";
  .base-modal {
    background-color: #fff;
    z-index: 9999;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 30px 25px;
    overflow: initial !important;
   
      .base-modal-stick {
        width: 75px;
        height: 6px;
        background-color: $primary;
        position: absolute;
        top: 33px;
        right: 40%;
        margin-top: -29px;
        border-radius: 20px;
      }
      .close-modal-icon {
        font-size: 20px;
      }
    
    .base-modal-body {
      height: 100%;
      overflow-y: scroll !important;


    }
  }
  </style>
  
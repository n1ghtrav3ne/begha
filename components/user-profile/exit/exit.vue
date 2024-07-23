<template>
    <div>
      <div class="base-modal h-[234px]">

          <span class="base-modal-stick"></span>
          
        <div class="base-modal-body">

            <div class="exitContainer">

                <div class="iconContainer">

                    <img src="~/assets/images/exitAccount/trash.svg" alt="">

                </div>

                <span>آیا می خواهید خارج شوید؟</span>

            </div>

            
            <div class="buttonContainer">

                <button class="delete">حذف</button>

                <button @click="modalStore.changeExitAccount('deactive')" class="cancel">انصراف</button>

            </div>

        </div>
        
      </div>
      <OverlayLayout />
    </div>
  </template>
  
  <script lang="ts" setup>
  import OverlayLayout from "~/components/layouts/OverlayLayout.vue";
  import { useModalStore } from "~/stores/modals-store";
  
  defineNuxtComponent({ OverlayLayout });
  const modalStore = useModalStore();


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
    max-width: 600px;
    
   
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

      .exitContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 16px;

        .iconContainer{
            padding: 10px;
            border-radius: 100%;
            background: #F8C8C8;
        }
      }

      .buttonContainer{

        display: flex;
        flex-direction: row;
        align-items: center;
        height: 44px;
        gap: 16px;
        width: 100%;
        margin-top: 30px;

        .delete{
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: $error;
            color: $error-on;
            height: 100%;
            width: 100%;
        }

        .cancel{
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            border: 1px solid $surface-on;
            color: $surface-on;
            height: 100%;
            width: 100%;
        }
      }
    }
  }
  </style>
  
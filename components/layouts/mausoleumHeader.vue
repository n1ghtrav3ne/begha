<template>
    <div>
      <nav>
        <div class="container flex items-center justify-between flex-row-reverse">
          <div>
            <img src="~/assets/images/logo/layout-logo.png" alt="" />
          </div>
          
          <div @click="modalStore.activeUserSelection('active')" class="profile">

            <img src="~/assets/images/cemetery/noOne.png" alt="">

            <div class="detail">

                <div class="admin">

                    <span class="txt">ادمین کل</span>
                    
                    <span class="material-symbols-rounded">
                    arrow_drop_down
                    </span>

                </div>

                <span class="mausoleumName">امام زاده صالح (ع)</span>

            </div>

          </div>

        </div>
      </nav>
    </div>
  </template>
  
  <script lang="ts" setup>

    import { useModalStore } from "~/stores/modals-store";

    const modalStore = useModalStore();

  </script>
  
  <style lang="scss" scoped>
  @import "~/assets/css/colors.scss";
  .choose-location {
    cursor: pointer;
  }
  .location-choose-icon {
    font-size: 20px;
  }
  .location-title-text {
    font-family: "yekan-regular";
    font-size: 12px;
    color: $surface-on;
  }
  .slide-fade-enter-active {
    opacity: 1;
    transition: all ease-in-out 0.15ms;
  }
  .icon-Menu-Iran{
    font-size: 30px;
    font-weight: 500;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transition: all ease-in-out 0.15ms;
  }

  .profile{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    img{
        width: 36px;
        height: 36px;
        border-radius: 100%;
    }

    .detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;

        .admin{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }

    .mausoleumName{
        font-size: 11px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on-variant;
    }
  }
  </style>
  
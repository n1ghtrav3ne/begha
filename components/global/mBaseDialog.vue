<template>
    <div>
      <div
        :style="`height: ${props.modalHeight + 'px !important'};`"
        class="base-modal"
      >
        <div class="base-modal-header">
          <span class="base-modal-stick"></span>
          <div class="modal-head-title flex items-center justify-between">
            <slot name="headerText"></slot>
            <span
              @click="closeModal()"
              class="material-symbols-outlined close-modal-icon"
            >
              close
            </span>
          </div>
        </div>
        <div
          :style="`padding: ${props.modalPadding} !important`"
          class="base-modal-body"
        >
          <slot name="body"></slot>
        </div>
        <div class="base-modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
      <m-OverlayLayout />
    </div>
  </template>
  
  <script lang="ts" setup>

  import mOverlayLayout from "../layouts/mOverlayLayout.vue";

  import {useMausoleumStore} from "~/stores/m-modals-store"

  const mausoleumStore=useMausoleumStore()
  
  defineNuxtComponent({ mOverlayLayout });
  const props = defineProps(["modalHeight", "modalPadding"]);
  
  const closeModal = () => {
    mausoleumStore.changeSelectUserType('deactive');
    mausoleumStore.changeWeeklyCermony('deactive');
    mausoleumStore.changeCermonyTime('deactive');
  };
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
    .base-modal-header {
      padding-bottom: 20px;
      border-bottom: 2px solid $outline-variant;
      position: relative;
      width: 100%;
      .base-modal-stick {
        width: 75px;
        height: 6px;
        background-color: $primary;
        position: absolute;
        top: 5px;
        right: 40%;
        margin-top: -29px;
        border-radius: 20px;
      }
      .close-modal-icon {
        font-size: 20px;
      }
    }
    .base-modal-body {
      height: 100%;
      overflow-y: scroll !important;
    }
  }
  </style>
  
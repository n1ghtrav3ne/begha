<template>
  <div>
    <div class="base-modal">
      <div class="base-modal-header">
        <span class="base-modal-stick"></span>
        <div class="modal-head-title flex items-center justify-between">
          <slot name="headerText"></slot>
          <span @click="closeModal()" class="material-symbols-outlined close-modal-icon"> close </span>
        </div>
      </div>
      <div class="base-modal-body">
        <slot name="body"></slot>
      </div>
      <div class="base-modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <OverlayLayout />
  </div>
</template>

<script lang="ts" setup>
import OverlayLayout from '../layouts/OverlayLayout.vue';
import { useModalStore } from '~/stores/modals-store';
defineNuxtComponent({OverlayLayout})
const modalStore = useModalStore()
const closeModal = () => {
  modalStore.changeBeghaListProvinceFiltersActive()
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.base-modal{
    background-color: #fff;
    z-index: 9999;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    width: 100%;
    height: 523px;
    position: fixed;
    bottom: 0;
    padding: 30px 25px;
    overflow: initial !important;
    .base-modal-header{
      padding-bottom: 20px;
      border-bottom: 2px solid $outline-variant;
        position: relative;
        width: 100%;
        .base-modal-stick{
            width: 75px;
            height: 6px;
            background-color: $primary;
            position: absolute;
            top: 5px;
            right: 40%;
            margin-top: -29px;
            border-radius: 20px;
        }
        .close-modal-icon{
          font-size: 20px;
        }
    }
    .base-modal-body{
      padding: 20px 0 35px 0;
      height: 100%;
      overflow-y: scroll !important;
    }
}
</style>

<template>
  <div>
    <div class="base-modal">
      <div class="base-modal-header">
        <span class="base-modal-stick"></span>
        <div class="modal-head-title flex items-center justify-between">
          <span>شهر مورد نظر خود را انتخاب کنید</span>
          <span class="material-symbols-outlined close-modal-icon"> close </span>
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
defineNuxtComponent({OverlayLayout})
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.base-modal{
    background-color: #fff;
    z-index: 9999;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    width: 100%;
    height: 523px;
    position: fixed;
    bottom: 0;
    padding: 30px 25px;
    .base-modal-header{
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
    }
}
</style>

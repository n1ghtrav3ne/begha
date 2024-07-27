<template>
  <div>
    <div :style="`height:${modalHeight + 'px !important'}`" class="base-modal">
      <span class="base-modal-stick"></span>

      <div class="base-modal-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
const props = defineProps(["modalHeight"]);
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
  right: 0;
  left: 0;
  margin: 0 auto;

  .base-modal-stick {
    width: 75px;
    height: 6px;
    background-color: $primary;
    position: absolute;
    top: 33px;
    right: 0;
    left: 0;
    margin: 0 auto;
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

  .base-modal-body::-webkit-scrollbar {
    display: none !important;
  }
}

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
  
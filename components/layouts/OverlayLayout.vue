<template>
  <div>
    <div class="overlay"></div>
  </div>
</template>

<script lang="ts" setup></script>

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

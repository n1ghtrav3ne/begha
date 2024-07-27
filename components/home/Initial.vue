<template>
  <div>
    <div class="splash-loading">
      <div class="container h-full mx-auto">
        <div
          class="splash-container mx-auto flex flex-col h-full justify-between"
        >
          <div class="image-logo-container mx-auto container centered">
            <img
              src="~/assets/images/logo/home-logo.png"
              width="125"
              height="134"
              alt=""
            />
          </div>
          <div class="loading-container container flex justify-center">
            <img
              src="~/assets/images/loading/loading-dots.gif"
              width="100"
              height="100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
@use "~/assets/css/colors.scss" as *;
.splash-loading {
  background-color: $primary;
  height: 100vh;
  width: 100%;
  .image-logo-container {
    margin-top: 180px !important;
  }
}
</style>

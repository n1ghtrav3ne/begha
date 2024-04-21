<template>
  <div>
    <div v-if="!initStore.isLoading" class="app-home">
      <div class="container">
        <PrayBanner />
        <ServicesButtons />
      </div>
    </div>
    <SplashLoading v-if="initStore.isLoading" />
  </div>
</template>

<script lang="ts" setup>
import SplashLoading from "./Initial.vue";
import PrayBanner from "./PrayBanner.vue";
import ServicesButtons from "./ServicesButtons.vue";
import { useInitialApp } from "@/stores/init-app";
defineComponent({ PrayBanner , ServicesButtons });
defineComponent({ SplashLoading });
const initStore = useInitialApp();
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";

</style>

<template>
  <div>
    <div v-if="!initStore.isLoading" class="app-home">
      <div class="container">
        <PrayBanner />
        <ServicesButtons />
        <FollowEvents />
        <WorkEventBanner />
        <PopularBegha />
        <NextPlans />
      </div>
    </div>
    <SplashLoading v-if="initStore.isLoading" />
  </div>
</template>

<script lang="ts" setup>
import SplashLoading from "./Initial.vue";
import PrayBanner from "./PrayBanner.vue";
import ServicesButtons from "./ServicesButtons.vue";
import FollowEvents from "./FollowEvents.vue";
import WorkEventBanner from "./WorkEventBanner.vue";
import PopularBegha from "./PopularBegha.vue";
import NextPlans from "./NextPlans.vue";
import { useInitialApp } from "@/stores/init-app";
defineComponent({ SplashLoading , PrayBanner , ServicesButtons , FollowEvents , WorkEventBanner , PopularBegha , NextPlans });
const initStore = useInitialApp();
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";

</style>

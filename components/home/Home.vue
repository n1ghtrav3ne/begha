<template>
  <div>
    <div v-if="!initStore.isLoading" class="app-home">
      <div class="container">
        <PrayBanner />
        <ServicesButtons />
        <FollowEvents @click="$router.push('/begha-events')" />
        <WorkEventBanner class="mt-8" />
        <PopularBegha @click="$router.push('/begha-detail/1')" />
        <NextPlans />
      </div>
    </div>
    <SplashLoading v-if="initStore.isLoading" />
    <MoreServicesButtons v-if="modalStore.isOpenMoreServicesButtons" />
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
import MoreServicesButtons from "./MoreServicesButtons.vue";
import { useInitialApp } from "@/stores/init-app";
import { useModalStore } from "@/stores/modals-store";
defineComponent({ SplashLoading , PrayBanner , ServicesButtons , FollowEvents , WorkEventBanner , PopularBegha , NextPlans , MoreServicesButtons });
const initStore = useInitialApp();
const modalStore = useModalStore();
</script>

<style lang="scss" scoped>
@import "../../assets/css/icons.scss";
@import "../../assets/css/colors.scss";

</style>

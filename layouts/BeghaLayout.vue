<template>
  <div>
    <VitePwaManifest />
    <NuxtPage />
    <BeghaFooter />
  </div>
</template>

<script lang="ts" setup>
import BeghaFooter from "~/components/layouts/BeghaLayoutFooter.vue";
import { useInitialApp } from "@/stores/init-app";
defineComponent({ BeghaFooter });
const initStore = useInitialApp();

setTimeout(() => {
  initStore.changeLoadingState(false);
}, 1000);
</script>

<style lang="scss" scoped>
</style>
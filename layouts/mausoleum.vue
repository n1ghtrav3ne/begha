<template>
  <div>
    <ClientOnly>
      <Header v-if="!initStore.isLoading"></Header>
    </ClientOnly>
    <VitePwaManifest />
    <NuxtPage />
    <ClientOnly>
      <Footer v-if="!initStore.isLoading"></Footer>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layouts/mausoleumHeader.vue";
import Footer from "~/components/layouts/mausoleumFooter.vue";
import { useInitialApp } from "@/stores/init-app";
defineComponent({ Header, Footer });
const initStore = useInitialApp();

setTimeout(() => {
  initStore.changeLoadingState(false);
}, 1000);
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <ClientOnly>
      <Header v-if="!initStore.isLoading"></Header>
    </ClientOnly>
    <VitePwaManifest />
    <div class="pb-16">
      <NuxtPage />
    </div>
    <ClientOnly>
      <Footer v-if="!initStore.isLoading"></Footer>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layouts/header.vue";
import Footer from "~/components/layouts/footer.vue";
import { useInitialApp } from "@/stores/init-app";
defineComponent({ Header, Footer });
const initStore = useInitialApp();
const device = useDevice();

setTimeout(() => {
  initStore.changeLoadingState(false);
}, 1000);

const deviceType = computed(() => {
  if (device.isIos) return "1";
  else if (device.isAndroid) return "2";
  else if (device.isDesktop) return "3";
  else return "4";
});

const brandType = computed(() => {
  if (device.isApple) return "apple";
  else if (device.isSamsung) return "samsung";
  else if (device.isWindows) return "pc";
  else return "other";
});

const object = reactive({
  deviceId: "1",
  fireBaseToken: "",
  deviceType: deviceType.value,
  version: 0,
  brand: brandType.value,
  model: "1",
  manufacturer: "1",
  appVersion: "1",
});

import { useAuthStore } from "@/stores/useAuthStore";
const useAuth = useAuthStore();

async function getGuestLogin() {
  const { data, error } = await useAuth.getLoginGuests(object);
  if (data?.value) {
    console.log("data in guest :", data.value);
  } else if (error?.value) {
    console.log("error in guests :", error.value.data);
  }
}

// getGuestLogin();
</script>

<style lang="scss" scoped>
</style>
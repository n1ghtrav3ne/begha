<template>
  <div class="container">
    <facilitiesBanner />

    <profile />

    <serviceButtons @close="moreServiceButtonsSheet = true" />

    <newRequest />
  </div>

  <BottomSheets :closable="false" v-model="moreServiceButtonsSheet">
    <moreServiceButtons />
  </BottomSheets>

  <BottomSheets title="انتخاب کنید" v-model="userSelectionSheet">
    <userSelection />
  </BottomSheets>
</template>

<script setup lang="ts">
import facilitiesBanner from "./facilitiesBanner.vue";

import profile from "./profile.vue";

import serviceButtons from "./serviceButtons.vue";

import newRequest from "./newRequest.vue";

import moreServiceButtons from "./moreServiceButtons.vue";

import userSelection from "./userSelection.vue";

import { useModalStore } from "~/stores/modals-store";

const modalStore = useModalStore();

defineComponent({
  facilitiesBanner,
  profile,
  serviceButtons,
  newRequest,
  moreServiceButtons,
});

const moreServiceButtonsSheet = ref(false);

const userSelectionSheet = ref(false);

watch(
  () => modalStore.isOpenUserSelection,
  (newValue) => {
    userSelectionSheet.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";
</style>
<template>
  <div>
    <div @click="closeOverlayApp()" class="overlay"></div>
  </div>
</template>

<script lang="ts" setup>
import { useAppSidebar } from "~/stores/layout-store";
import { useModalStore } from "~/stores/modals-store";
import {useReservationStore} from "~/stores/graveRequest-store";


const appSidebar = useAppSidebar();
const modalStore = useModalStore();
const reservationStore=useReservationStore();

const closeOverlayApp = () => {
  appSidebar.changeSidebarStateActive("deactive");
  modalStore.changeBeghaListProvinceFiltersActive("deactive");
  modalStore.changeBeghaListEventFiltersActive("deactive");
  modalStore.changeMoreServicesButtonsActive("deactive");
  modalStore.changeEventsRatingActive("deactive");
  modalStore.changeSwitchAccountActive("deactive");
  modalStore.changeRequestsFilterActive("deactive");
  modalStore.changeCancelRequestModalActive("deactive");
  modalStore.changeMediaBeghaFilterActive("deactive");
  modalStore.changeCermonyHallRequestFilterActive("deactive");
  modalStore.changeCermonyHallSearchCities("deactive");
  modalStore.changeFacilitiesSearchFilter("deactive")
  modalStore.changeReservingCermonyHall("deactive");
  modalStore.changeBeghaCemeteryFilter("deactive");
  modalStore.changeDeceasedInfo("deactive");
  modalStore.changeCemeterySearchFilter("deactive");
  reservationStore.changeTermsConfirmation("deactive")
  reservationStore.changeDateOfDeath("deactive");
  reservationStore.changePersonalRatio('deactive');
  reservationStore.changeSectionPart("deactive");
  modalStore.changeCermonyHallReservationHours('deactive');
  modalStore.changeProfileSearchCities('deactive');
  modalStore.changeExitAccount('deactive');
  modalStore.changeimagePicker('deactive');
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
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

<template>
  <div>
    <div
      :style="`height: ${props.modalHeight + 'px !important'};`"
      class="base-modal"
    >
      <div class="base-modal-header">
        <span class="base-modal-stick"></span>
        <div class="modal-head-title flex items-center justify-between">
          <slot name="headerText"></slot>
          <span
            @click="closeModal()"
            class="material-symbols-outlined close-modal-icon"
          >
            close
          </span>
        </div>
      </div>
      <div
        :style="`padding: ${props.modalPadding} !important`"
        class="base-modal-body"
      >
        <slot name="body"></slot>
      </div>
      <div class="base-modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
    <OverlayLayout />
  </div>
</template>

<script lang="ts" setup>
import OverlayLayout from "../layouts/OverlayLayout.vue";
import { useModalStore } from "~/stores/modals-store";
import {useReservationStore} from "~/stores/graveRequest-store";

defineNuxtComponent({ OverlayLayout });
const props = defineProps(["modalHeight", "modalPadding"]);
const modalStore = useModalStore();
const reservationStore=useReservationStore();

const closeModal = () => {
  modalStore.changeBeghaListProvinceFiltersActive("deactive");
  modalStore.changeBeghaListEventFiltersActive("deactive");
  modalStore.changeMoreServicesButtonsActive("deactive");
  modalStore.changeSwitchAccountActive("deactive");
  modalStore.changeRequestsFilterActive("deactive");
  modalStore.changeCancelRequestModalActive("deactive");
  modalStore.changeMediaBeghaFilterActive("deactive");  
  modalStore.changeCermonyHallRequestFilterActive("deactive");
  modalStore.changeCermonyHallSearchCities("deactive");
  modalStore.changeFacilitiesSearchFilter("deactive")
  modalStore.changeBeghaCemeteryFilter("deactive");
  modalStore.changeDeceasedInfo("deactive");
  modalStore.changeCemeterySearchFilter("deactive");
  reservationStore.changeTermsConfirmation("deactive");
  reservationStore.changeDateOfDeath("deactive");
  reservationStore.changePersonalRatio('deactive');
  reservationStore.changeSectionPart("deactive");
  modalStore.changeCermonyHallReservationHours('deactive');
  modalStore.changeProfileSearchCities('deactive');
};
</script> 

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.base-modal {
  background-color: #fff;
  z-index: 9999;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 30px 25px;
  overflow: initial !important;
  max-width: 600px;
  .base-modal-header {
    padding-bottom: 20px;
    border-bottom: 2px solid $outline-variant;
    position: relative;
    width: 100%;
    .base-modal-stick {
      width: 75px;
      height: 6px;
      background-color: $primary;
      position: absolute;
      top: 5px;
      right: 40%;
      margin-top: -29px;
      border-radius: 20px;
    }
    .close-modal-icon {
      font-size: 20px;
    }
  }
  .base-modal-body {
    height: 100%;
    overflow-y: scroll !important;
  }
  .base-modal-body::-webkit-scrollbar{
    display: none !important;
  }
}
</style>

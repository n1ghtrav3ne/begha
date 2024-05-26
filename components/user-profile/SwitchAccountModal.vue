<template>
  <div>
    
    <BaseDialog v-if="modalStore.isOpenSwitchAccount">
      <template #headerText>
        <span class="modal-head-title">انتخاب کنید.</span>
      </template>
      <template #body>
        <div class="filter-modal-body">
          <div class="selectable-provinces mt-8">
            <div
              v-for="(item, index) in cities"
              :key="index"
              :class="item.isActive ? 'selected' : ''"
              class="select-item available-province mt-3 flex items-center justify-between"
            >
              <div class="flex items-center">
                <div class="accounts flex items-center">
                  <img src="~/assets/images/user/avatar.svg" alt="" />
                  <div class="name-login-text flex items-start flex-col">
                    <span class="login-state-text">احمد حسینی</span>
                    <span class="user-phone">کاربر عادی</span>
                  </div>
                </div>
              </div>
              <div v-if="item.isActive">
                <span
                  class="material-symbols-outlined flex check-icon items-center"
                >
                  check_circle
                </span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseDialog>
  </div>
</template>

<script lang="ts" setup>
import BaseDialog from "@/components/global/BaseDialog.vue";
import { useModalStore } from "~/stores/modals-store";
defineComponent([BaseDialog]);
const modalStore = useModalStore()
const cities = ref<
  { province: string; city: string; iconClass: string; isActive: boolean }[]
>([
  {
    province: "همه",
    city: "",
    isActive: true,
    iconClass: "apps",
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass: "location_on",
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass: "location_on",
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass: "location_on",
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.selectable-provinces {
  .selected {
    background: $secondary-container !important;
    .check-icon {
      color: $secondary;
    }
  }
  .select-item {
    padding: 16px;
    background: #fff;
    border-radius: 16px;
    .all-icon {
      font-size: 25px;
      color: $surface-on-variant;
    }
    .all-title {
      color: $surface-on;
      font-size: 14px !important;
      font-family: "yekan-regular";
    }
    .city-name {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }
    .province-name {
      color: $surface-on;
      font-size: 11px;
      font-family: "yekan-regular";
    }
    .selectable-location-icon {
      font-size: 30px;
      color: $surface-on-variant;
      margin-left: 5px;
    }
  }
  .accounts {
    img {
      width: 40px !important;
      height: 40px !important;
      border-radius: 66px;
      margin-left: 10px;
    }
    .login-state-text {
      color: $surface-on;
      text-align: right;
      font-family: "yekan-regular";
      font-size: 14px;
      font-weight: 400;
    }
    .user-phone {
      color: $surface-on-variant;
      text-align: right;
      font-family: "yekan-regular";
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>

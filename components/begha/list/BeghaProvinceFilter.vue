<template>
  <div class="filter-modal-body">
    <div class="filter-province">
      <span class="material-symbols-outlined search-filter-icon"> search </span>
      <input type="text" placeholder="جستجوی شهر یا استان" />
    </div>
    <div class="current-location mt-4 flex items-center">
      <div>
        <span class="material-symbols-outlined cerrent-location-icon">
          location_searching
        </span>
      </div>
      <div class="flex items-center flex-col mr-3">
        <span class="current-location-text">مکان فعلی شما</span>
        <span class="current-location-province">اصفهان، اصفهان</span>
      </div>
    </div>

    <div class="selectable-provinces mt-8">
      <div
        v-for="(item, index) in cities"
        :key="index"
        :class="item.isActive ? 'selected' : ''"
        class="select-item available-province mt-3 flex items-center justify-between"
      >
        <div class="flex items-center">
          <span class="material-symbols-outlined selectable-location-icon">
            {{ item.iconClass }}
          </span>
          <div class="flex flex-col">
            <span class="city-name">{{ item.city }}</span>
            <span
              :class="item.province === 'همه' ? 'all-title' : ''"
              class="province-name mt-1"
              >{{ item.province }}</span
            >
          </div>
        </div>
        <div v-if="item.isActive">
          <span class="material-symbols-outlined flex check-icon items-center">
            check_circle
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";

import { useModalStore } from "~/stores/modals-store";

defineNuxtComponent({ PopularBegha, BeghaListItems });
const modalStore = useModalStore();
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

  .modal-head-title {
    font-size: 14px;
    font-family: "yekan-regular";
    color: $surface-on;
  }
  .filter-province {
    position: relative;
    width: 100%;
    background: $surface-variant;
    padding: 15px;
    border-radius: 10px;
    input {
      width: 100%;
      padding: 0 25px;
      background: transparent;
      outline: none;
      border: none;
      &::placeholder {
        color: $surface-on-variant;
        font-size: 14px;
        font-family: "yekan-regular";
      }
      &:focus {
        caret-color: $primary;
      }
    }
    .search-filter-icon {
      position: absolute;
      top: 15px;
      right: 10px;
    }
  }
  .current-location {
    width: 100%;
    padding: 10px 0 15px 0;
    .current-location-text {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }
    .current-location-province {
      color: $surface-on;
      font-size: 11px;
      font-family: "yekan-regular";
    }
    .cerrent-location-icon {
      color: $secondary;
      background: #d7ecff;
      border-radius: 50%;
      padding: 8px;
    }
    border-bottom: 3px solid $secondary-container;
  }
  .selectable-provinces {
    .selected {
      background: $secondary-container !important;
      .check-icon {
        color: $secondary;
      }
    }
    .select-item {
      padding: 12px 15px;
      background: #fff;
      border-radius: 10px;
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
  }

</style>

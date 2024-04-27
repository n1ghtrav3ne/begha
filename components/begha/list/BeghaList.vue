<template>
  <div>
    <div class="back-navbar">
      <span
        ><span class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">بقاع متبرکه</span></span
      >
    </div>
    <div class="app-home">
      <div class="container">
        <div class="search-box-input">
          <span @click="modalStore.changeBeghaListProvinceFiltersActive" class="search-province"
            ><span class="province-title">همه</span>
            <span class="material-symbols-outlined arrow-down">
              arrow_drop_down
            </span></span
          >
          <input
            class="search-input"
            type="text"
            placeholder="جستجو اماکن متبرکه"
          />
          <span class="material-symbols-outlined search-input-icon">
            tune
          </span>
        </div>
        <div class="popular-begha">
          <PopularBegha />
        </div>
        <div class="popular-begha">
          <BeghaListItems />
        </div>
      </div>
    </div>
    <Transition name="fade">
      <BaseDialog v-if="modalStore.isOpenBeghaListProvinceFilter" class="filter-modal">
        <template #headerText>
          <span class="modal-head-title">شهر مورد نظر خود را انتخاب کنید</span>
        </template>
        <template #body>
          <div class="filter-modal-body">
            <div class="filter-province">
              <span class="material-symbols-outlined search-filter-icon">
                search
              </span>
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
              <div v-for="(item , index) in cities" :key="index" class="select-item available-province selected mt-3 flex items-center justify-between">
                <div class="flex items-center">
                  <span
                    class="material-symbols-outlined selectable-location-icon"
                  >
                    {{item.iconClass}}
                  </span>
                  <div class="flex flex-col">
                    <span class="city-name">{{item.city}}</span>
                    <span :class="item.province === 'همه' ? 'all-title' : ''" class="province-name mt-1">{{item.province}}</span>
                  </div>
                </div>
                <div>
                  <span class="material-symbols-outlined flex check-icon items-center">
                    check_circle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </BaseDialog>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";
import BaseDialog from "~/components/global/BaseDialog.vue";
import { useModalStore } from "~/stores/modals-store";
defineNuxtComponent({ PopularBegha, BeghaListItems, BaseDialog });
const modalStore = useModalStore();
const cities = ref<{ province: string; city: string; iconClass : string; isActive: boolean }[]>([
  {
    province: "همه",
    city: "",
    isActive: false,
    iconClass : 'apps'
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass : 'location_on'
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass : 'location_on'
  },
  {
    province: "اصفهان",
    city: "نجف آباد",
    isActive: false,
    iconClass : 'location_on'
  },
]);
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";
.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5px 10px;
  span.back-title {
    font-size: 16px;
    font-family: "yekan-regular";
    color: $primary-on;
  }
  span.back-icon {
    color: $primary-on;
    font-size: 25px;
    vertical-align: -10px;
  }
}

.search-box-input {
  width: 100% !important;
  border: 2px solid $outline;
  padding: 8px 13px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus-within {
    border: 2px solid $primary !important;
  }
  .search-province {
    border-left: 2px solid $outline;
    display: flex;
    align-items: center;
    .arrow-down {
      color: $surface-on;
    }
    .province-title {
      color: $surface-on;
      font-size: 14px;
      font-family: "yekan-regular";
    }
  }
  .search-input-icon {
    color: $secondary;
    font-size: 23px;
    padding: 5px;
    background-color: #e5f0fb;
    border-radius: 50%;
  }
  .search-input {
    outline: none;
    padding: 2px 10px;
    width: 100%;
    color: $surface-on;
    font-size: 14px;
    font-family: "yekan-regular";
    &::placeholder {
      color: $surface-on-variant;
      font-size: 14px;
      font-family: "yekan-regular";
    }
    &:focus {
      caret-color: $primary;
    }
  }
}

.filter-modal {
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
    .selected{
      background: $secondary-container !important;
      .check-icon{
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
}
</style>

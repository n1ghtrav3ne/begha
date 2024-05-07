<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <span
        ><span class="material-symbols-outlined back-icon ml-2">
          trending_flat </span
        ><span class="back-title">بقاع متبرکه</span></span
      >
      <div @click="modalStore.changeBeghaListProvinceFiltersActive('active')" class="choose-location flex items-center mr-3">
        <span class="icon-Location-Iran location-choose-icon ml-1"> </span>
        <span class="location-title-text">اصفهان، نجف آباد</span>
        <span class="icon-Arrow-Bottom-Iran mr-1"> </span>
      </div>
    </div>
    <div class="app-home">
      <div class="container">
        <div class="search-box-input">
       
          <input
            class="search-input"
            type="text"
            placeholder="جستجو اماکن متبرکه"
          />
          <span
            @click="modalStore.changeBeghaListEventFiltersActive('active')"
            class="material-symbols-outlined search-input-icon"
          >
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
    <BeghaProvinceFilterModal />
    <BeghaEventFilterModal />
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";
import BeghaProvinceFilterModal from "./BeghaProvinceFilterModal.vue";
import BeghaEventFilterModal from "./BeghaEventFilterModal.vue";
import { useModalStore } from "~/stores/modals-store";
defineNuxtComponent({
  PopularBegha,
  BeghaListItems,
  BeghaProvinceFilterModal,
  BeghaEventFilterModal,
});
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
.back-navbar {
  height: 48px;
  background: $primary;
  display: flex;
  align-items: center;
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

.filter-province-modal {
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
}

.filter-event-modal {
  .modal-head-title {
    font-size: 50px;
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
}

.choose-location {
  cursor: pointer;
  .icon-Arrow-Bottom-Iran{
    color: $primary-on;
  }
}
.location-choose-icon {
  font-size: 20px;
  color: $primary-on;
}
.location-title-text {
  font-family: "yekan-regular";
  font-size: 12px;
  color: $primary-on;
}

.slide-enter-active {
  opacity: 1;
  transition: all ease-in-out 0.03s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transition: all ease-in-out 0.03s;
}
</style>

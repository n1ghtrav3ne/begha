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
          <span class="search-province"
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
      <BaseDialog />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import PopularBegha from "~/components/home/PopularBegha.vue";
import BeghaListItems from "~/components/home/BeghaListItems.vue";
import BaseDialog from "~/components/global/BaseDialog.vue";
import { useInitialApp } from "@/stores/init-app";
defineNuxtComponent({ PopularBegha, BeghaListItems, BaseDialog });
const initStore = useInitialApp();
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
</style>

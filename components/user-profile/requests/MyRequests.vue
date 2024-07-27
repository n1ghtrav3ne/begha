<template>
  <div>
    <div class="back-navbar container flex items-center justify-between">
      <span
        ><span
          @click="$router.push('/profile')"
          class="material-symbols-outlined back-icon ml-2"
        >
          trending_flat </span
        ><span class="back-title">درخواست های من</span></span
      >
    </div>
    <div class="container">
      <div class="search-box-input">
        <span class="material-symbols-outlined search-icon"> search </span>
        <input class="search-input" type="text" placeholder="جستجو" />
        <span
          @click="RequestsFilterModalSheet=true"
          class="material-symbols-outlined search-input-icon"
        >
          tune
        </span>
      </div>
      <div
        @click="$router.push('/profile/requests/detail/asdsasd')"
        class="login-info-card"
      >
        <span class="date-title">دوشنبه ۱۴۰۲/۱۲/۰۲</span>
        <div class="flex items-center justify-between">
          <div class="user-avatar-name flex items-center">
            <img src="~/assets/images/one-begha/begha-profile.png" alt="" />
            <div class="name-login-text flex items-start flex-col">
              <span class="login-state-text">درخواست اتاق زائر سرا</span>
              <span class="user-phone">امامزاده صالح</span>
            </div>
          </div>
          <div class="status">
            <span class="status-badge warning centered">در حال بررسی</span>
          </div>
        </div>
      </div>
      <div
        @click="$router.push('/profile/requests/detail/asdsasd')"
        class="login-info-card"
      >
        <div class="flex items-center justify-between">
          <div class="user-avatar-name flex items-center">
            <img src="~/assets/images/one-begha/begha-profile.png" alt="" />
            <div class="name-login-text flex items-start flex-col">
              <span class="login-state-text">درخواست اتاق زائر سرا</span>
              <span class="user-phone">امامزاده صالح</span>
            </div>
          </div>
          <div class="status">
            <span class="status-badge success centered">تایید شده</span>
          </div>
        </div>
      </div>
      <div
        @click="$router.push('/profile/requests/detail/asdsasd')"
        class="login-info-card"
      >
        <span class="date-title">دوشنبه ۱۴۰۲/۱۲/۰۲</span>
        <div class="flex items-center justify-between">
          <div class="user-avatar-name flex items-center">
            <img src="~/assets/images/one-begha/begha-profile.png" alt="" />
            <div class="name-login-text flex items-start flex-col">
              <span class="login-state-text">درخواست اتاق زائر سرا</span>
              <span class="user-phone">امامزاده صالح</span>
            </div>
          </div>
          <div class="status">
            <span class="status-badge error centered">رد شده</span>
          </div>
        </div>
      </div>
    </div>
    <bottomSheets v-model="RequestsFilterModalSheet">
      <RequestsFilterModal />
    </bottomSheets>
  </div>
</template>

<script lang="ts" setup>
import RequestsFilterModal from "../RequestsFilterModal.vue";
import { useModalStore } from "~/stores/modals-store";
import bottomSheets from "~/components/global/bottomSheets.vue";
const modalStore = useModalStore();
defineComponent([RequestsFilterModal]);

const RequestsFilterModalSheet=ref(false)
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

.login-info-card {
  width: 100%;
  margin-bottom: 16px;
  padding-bottom: 11px;
  .date-title {
    margin-bottom: 16px;
    display: block;
    color: $surface-on-variant;
    text-align: right;
    font-family: "yekan-regular";
    font-size: 11px;
    font-weight: 400;
  }
  .user-avatar-name {
    img {
      width: 44px;
      height: 44px;
      border-radius: 12px;
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
      font-size: 11px;
      font-weight: 400;
    }
  }
  .status {
    .status-badge {
      padding: 8px 12px;
      text-align: right;
      font-family: "yekan-regular";
      font-size: 11px;
      font-weight: 400;
      height: 32px;
      border-radius: 12px;
    }
    .status-badge.success {
      background-color: #d8fdec;
      color: $primary;
    }
    .status-badge.warning {
      background-color: #fff5dc;
      color: $warning;
    }
    .status-badge.error {
      background-color: #fdf2f2;
      color: $error;
    }
  }
}

.search-box-input {
  margin-bottom: 40px;
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
    background-color: transparent;
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

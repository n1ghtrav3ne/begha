<template>
  <div class="profileContainer">
    <div class="firstPart">
      <img src="~/assets/images/cemetery/cemetery.png" alt="" />

      <div class="detail">
        <span class="name">بقعه متبرکه احمد</span>

        <span class="location">تهران، تهران</span>
      </div>

      <div
        :class="{ activeBorder: activeButton }"
        @click="active"
        class="button"
      >
        <div
          :class="{ activeButton: activeButton, deactiveButton: !activeButton }"
          class="iconHolder pb-1"
        >
          <img
            v-if="!activeButton"
            src="~/assets/images/mausoleumHome/redBegha.svg"
            alt=""
          />

          <img
            v-if="activeButton"
            src="~/assets/images/mausoleumHome/greenBegha.svg"
            alt=""
          />
        </div>

        <span v-if="!activeButton" class="active">غیر فعال</span>

        <span v-if="activeButton" class="activeText">فعال</span>
      </div>
    </div>

    <div class="buttonContainer">
      <button class="change">ویرایش اطلاعات</button>
      <button class="share">اشتراک گذاری</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeButton = ref(false);

const active = () => {
  activeButton.value = !activeButton.value;
};

// import {useMausoleumStore} from "~/stores/m-modals-store"

// const mausoleumStore=useMausoleumStore()
</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.profileContainer {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  .firstPart {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;

    img {
      width: 68px;
      height: 68px;
      border-radius: 100%;
    }

    .detail {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
      }

      .location {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on;
      }
    }

    .button {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: auto;
      height: 28px;
      width: 88px;
      gap: 4px;
      border: 1px solid $error;
      border-radius: 24px;
      color: $error;
      background: #fdf2f2;

      .iconHolder {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8c8c8;
        border-radius: 100%;
        width: 21px;
        height: 22px;
        margin-right: 2px;

        img {
          width: 15px;
          height: 16px;
        }
      }

      .activeText {
        color: $success;
      }

      .activeButton {
        transition: 1s;
        transform: translateX(-290%);
        background: #cbffc4;
      }

      .deactiveButton {
        transition: 1s;
        transform: translateX(0);
      }
    }
  }
  .activeBorder {
    border: 1px solid $success !important;
  }

  .buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 16px;
    height: 36px;

    .change {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 8px;
      background: $surface-variant;
      border-radius: 8px;
      width: 100%;
      color: $surface-on;
    }

    .share {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 8px;
      background: $surface-variant;
      border-radius: 8px;
      width: 100%;
      color: $surface-on;
    }
  }
}
</style>
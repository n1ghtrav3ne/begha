<template>
  <div class="greenBox container">
    <div class="firstItem">
      <span @click="$router.go(-1)" class="material-symbols-outlined">
        arrow_right_alt
      </span>

      <span>تکمیل پروفایل</span>
    </div>
  </div>

  <div class="container">

    
  <div class="flex flex-row items-center gap-3 mt-4 p-3 bg-neutral-100 rounded-xl">

    <img :src="imageUrl || defaultImage" class="w-14 h-14 rounded-full bg-secondary-200" alt="">

    <div class="flex flex-col gap-1">

      <span class="font-bold text-sm">تصویر پروفایل شما</span>

      <span @click="deleteConfirmation=true" class="text-xs font-normal text-error-700">حذف تصویر</span>

    </div>

    
    <div @click="fileInput.click()" class="mr-auto bg-secondary-700 rounded-full p-2 cursor-pointer">
      <img src="~/assets/images/completeProfile/edit.svg" alt="" />
    </div>
    
  </div>

  <div>
    <input
      ref="fileInput"
      @change="handleFileChange"
      class="hidden"
      type="file"
      accept=".jpg,.png"
    />

    <div class="inputsContainer">
      <div class="numberContainer">
        <span>شماره همراه</span>

        <input type="text" placeholder="شماره همراه خود را وارد کنید" />
      </div>

      <div class="nameHolder">
        <span>نام و نام خانوادگی</span>

        <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" />
      </div>

      <div class="cityHolder">
        <span>شهر</span>

        <div @click="searchCitiesSheet = true" class="cityInput">
          <input type="button" value="انتخاب کنید" />

          <span class="material-symbols-rounded icon"> arrow_drop_down </span>
        </div>
      </div>
    </div>

    <button class="confirm">اعمال</button>
  </div>

  <div @click="fileInput.click()" class="iconContainer">
    <img src="~/assets/images/completeProfile/edit.svg" alt="" />
  </div>

  <input
    ref="fileInput"
    @change="handleFileChange"
    class="hidden"
    type="file"
    accept=".jpg,.png"
  />

  <div class="inputsContainer">
    <div class="numberContainer">
      <span>شماره همراه</span>

      <input type="text" placeholder="شماره همراه خود را وارد کنید" />
    </div>

    <div class="nameHolder">
      <span>نام و نام خانوادگی</span>

      <input type="text" placeholder="نام و نام خانوادگی خود را وارد کنید" />
    </div>

    <div class="cityHolder">
      <span>شهر</span>

      <div @click="searchCitiesSheet = true" class="cityInput">
        <input type="button" value="انتخاب کنید" />

        <span class="material-symbols-rounded icon"> arrow_drop_down </span>
      </div>
    </div>
  </div>

  <button class="confirm">اعمال</button>


  </div>

  <BottomSheets :search="{placeholder:'جستجو شهر یا استان'}"
    title="شهر مورد نظر خود را انتخاب کنید"
    v-model="searchCitiesSheet"
  >
    <searchCities @fullHeight="" />
  </BottomSheets>

  <BottomSheets v-model="deleteConfirmation">

    <CustomConfirm title="آیا از حذف تصویر پروفایل خود اطمینان دارید؟">

      <template #icon>
        <span class="material-symbols-outlined text-error-700 bg-error-200 p-2 rounded-full">
        delete
        </span>
      </template>

    </CustomConfirm>

  </BottomSheets>

</template>

<script setup lang="ts">
import defaultImage from "~/assets/images/mausoleumInformation/frame.svg";

import searchCities from "./searchCities.vue";

import CustomConfirm from "~/components/global/CustomConfirm.vue";

const searchCitiesSheet = ref(false);

const deleteConfirmation=ref(false)

const fileInput = ref();
const imageUrl = ref("");

const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event: any) => {
    imageUrl.value = event.target.result;
  };

  reader.readAsDataURL(file);
};

</script>

<style lang="scss" scoped>
@import "~/assets/css/colors.scss";
@import "~/assets/css/icons.scss";

.greenBox {
  background-color: $primary;
  height: 48px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 12px;
  padding-bottom: 11px;
  padding-right: 16px;
  color: $primary-on;

  .firstItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.profileDetail {
  display: flex;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: $surface-container-lowest;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  .profileImage {
    width: 56px;
    height: 56px;
    border-radius: 100%;
    display: flex;

    img {
      border-radius: 100%;
      background: $surface;
    }
  }

  .imageStatus {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .first {
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: $surface-on;
    }

    .second {
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $error;
    }
  }

  .iconContainer {
    display: flex;
    padding: 8px;
    background: $secondary;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-right: auto;
  }
}
.inputsContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-top: 32px;

  .numberContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    input {
      background: transparent;
      border-radius: 8px;
      border: 1px solid $outline-variant;
      padding: 12px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
      outline: 0;
    }
  }

  .nameHolder {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    input {
      background: transparent;
      border-radius: 8px;
      border: 1px solid $outline-variant;
      padding: 12px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
      outline: 0;
    }
  }

  .cityHolder {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      color: $surface-on;
    }

    .cityInput {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid $outline-variant;
      border-radius: 8px;
      padding: 12px;

      input {
        background: transparent;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: $surface-on-variant;
        outline: 0;
        display: flex;
        width: 100%;
        display: flex;
        text-align: start;
      }

      .icon {
        transform: scale(3);
        color: $secondary;
      }
    }
  }
}

.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $primary;
  color: $primary-on;
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  margin-top: 95%;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>

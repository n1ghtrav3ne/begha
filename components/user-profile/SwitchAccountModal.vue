<template>
  <div>
    <div class="filter-modal-body">
      <div class="selectable-provinces mt-8">
        <div @click="selectIndex(index)"
          v-for="(item, index) in users"
          :key="index"
          class="select-item available-province mt-3 flex items-center  justify-between" :class="{'bg-secondary-200' : activeOne === index}">
          <div class="flex items-center">
            <div class="accounts flex items-center">
              <img :src="item.image || avatar" alt="" />
              <div class="name-login-text flex items-start flex-col">
                <span class="login-state-text">{{ item.name }}</span>
                <span class="user-phone">{{ item.userType }}</span>
              </div>
            </div>
          </div>
          <div v-if="item.selected">
            <span
              class="material-symbols-outlined flex text-secondary-700 check-icon items-center"
            >
              check_circle
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import avatar from "~/assets/images/user/avatar.svg"

const activeOne=ref()

const selectIndex=(index:number)=>{
  users.value.forEach((item) => {
    item.selected = false;
  });
  activeOne.value=index
  users.value[index].selected=true
}

const users=ref<{image?:any ; name:string ; userType:string ; selected?:boolean}[]>
([
  {
    name:'احمد حسینی',
    userType:'کاربر عادی',
  },
  {
    name:'امام زاده صالح (ع)',
    userType:'امام جماعت',
  },
  {
    name:'امام زاده محسن',
    userType:'ادمین',
  },
])

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

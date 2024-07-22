<template>
  <div>
    <div class="container">
      <div class="user-login-info">
        <div class="login-info-card flex items-center justify-between">
          <div class="user-avatar-name flex items-center">
            <img src="~/assets/images/user/avatar.svg" alt="" />
            <div class="name-login-text flex items-start flex-col">
              <span class="login-state-text">کاربر ثبت نام نکرده</span>
              <span class="user-phone">شماره همراه</span>
            </div>
          </div>
          <div class="login">
            <NuxtLink to="/auth">
              <span class="login-btn">
                <span class="material-symbols-outlined arrow-icon">
                  trending_flat
                </span>
                <span>ورود</span>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="profile-options">
        <ul class="options-list">
          <li
            @click="optionsAction(item)"
            v-for="(item, index) in profileOptions"
            :key="index"
            class="option flex items-center"
          >
            <span class="option-icon flex items-center justify-center">
              <span v-if="item.notif" class="red-dot"></span>
              <span class="material-symbols-outlined"> {{ item.icon }} </span>
            </span>
            <span class="option-text">{{ item.title }}</span>
          </li>
          <li class="option flex items-center">
            <span class="option-icon logout flex items-center justify-center">
              <span class="material-symbols-outlined"> logout </span>
            </span>
            <span class="option-text">خروج</span>
          </li>
        </ul>
      </div>
    </div>
    <SwitchAccount />
  </div>
</template>

<script lang="ts" setup>
import SwitchAccount from "./SwitchAccountModal.vue";
import { useModalStore } from "~/stores/modals-store";
defineComponent([SwitchAccount]);
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
const profileOptions = ref<{ title: string; icon: string; notif: boolean }[]>([
  {
    title: "درخواست های من",
    icon: "comment",
    notif: true,
  },
  {
    title: "تکمیل پروفایل",
    icon: "person",
    notif: false,
  },
  {
    title: "ذخیره شده ها",
    icon: "bookmark",
    notif: true,
  },
  {
    title: "اعلانات",
    icon: "notifications",
    notif: true,
  },
  {
    title: "تغییر نوع کاربری",
    icon: "group_add",
    notif: false,
  },
]);

const optionsAction = (item: { title: string }) => {
  if (item.title === "تغییر نوع کاربری") {
    modalStore.changeSwitchAccountActive("active");
  } else if (item.title === "درخواست های من") {
    useRouter().push("/profile/requests/");
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/icons.scss";
@import "~/assets/css/colors.scss";

.user-login-info {
  .login-info-card {
    background-color: $surface-variant;
    width: 100%;
    border-radius: 66px;
    padding: 14px 12px;
    .user-avatar-name {
      img {
        width: 56px;
        height: 55px;
        border-radius: 66px;
        margin-left: 10px;
      }
      .login-state-text {
        color: $surface-on-variant;
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
    .login {
      .login-btn {
        background-color: $primary;
        color: $primary-on;
        padding: 8px;
        font-family: "yekan-regular";
        font-size: 11px;
        font-weight: 400;
        width: 89px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 32px;
        .arrow-icon {
          margin-left: 8px;
        }
      }
    }
  }
}
.profile-options {
  margin-top: 50px;
  .options-list {
    .option {
      border-bottom: 1px solid $outline-variant;
      margin-bottom: 12px;
      padding: 8px 0;
      .option-text {
        color: $surface-on;
        text-align: right;
        font-family: "yekan-regular";
        font-size: 14px;
        font-weight: 400;
        margin-right: 8px;
      }

      .option-icon {
        width: 36px;
        height: 36px;
        border-radius: 32px;
        background-color: $secondary-container;
        position: relative;
        .red-dot {
          display: flex;
          width: 8px;
          height: 8px;
          padding: 4px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 52px;
          background-color: $error;
          position: absolute;
          top: 1px;
          right: 1px;
        }
        span {
          font-size: 20px;
          color: $secondary;
        }
      }

      .option-icon.logout {
        width: 36px;
        height: 36px;
        border-radius: 32px;
        background-color: #fae1e1;
        position: relative;

        span {
          font-size: 20px;
          color: $error;
        }
      }
    }
  }
}
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
